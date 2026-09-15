#!/usr/bin/env python
"""eyes.py - ask a vision model what it actually sees in a render.

    python tools/eyes.py shots/audit.png
    python tools/eyes.py shots/audit.png --ask "is the camera behind the player's cards?"
    python tools/eyes.py shots/audit.png --model google/gemini-2.5-flash --raw

Why this exists: the agent driving this project is text-only, and "does it look good / is the table
readable / is anything obviously broken" is not answerable from pixel statistics. A second pair of
eyes is part of the build loop. Key is read from the Hermes .env (OPENROUTER_API_KEY).
"""
from __future__ import annotations

import argparse
import base64
import json
import os
import pathlib
import sys
import urllib.request

DEFAULT_ASK = (
    "You are reviewing a screenshot of a 3D Texas Hold'em poker game (three.js, procedurally drawn "
    "assets, no image files). Answer as a blunt art director:\n"
    "1. Describe the composition: where is the camera, what is in the foreground, what is behind?\n"
    "2. List anything BROKEN or wrong: geometry sticking through other geometry, missing surfaces, "
    "floating or mis-oriented objects, textures that clearly failed, z-fighting, black or white "
    "patches, text that cannot be read.\n"
    "3. Rate readability of the five community cards and the player's own two hole cards, and the chips.\n"
    "4. Give the 3 highest-impact concrete changes to make it look more premium.\n"
    "Be specific about screen positions. Do not be polite."
)


def key() -> str:
    for name in ("OPENROUTER_API_KEY", "OPENAI_API_KEY"):
        v = os.environ.get(name)
        if v:
            return name + ":" + v
    env = pathlib.Path(os.environ.get("LOCALAPPDATA", "")) / "hermes" / ".env"
    if env.exists():
        for line in env.read_text(encoding="utf-8", errors="replace").splitlines():
            if "=" in line and not line.strip().startswith("#"):
                k, _, v = line.partition("=")
                k = k.strip()
                if k in ("OPENROUTER_API_KEY", "OPENAI_API_KEY"):
                    return k + ":" + v.strip().strip('"')
    sys.exit("no vision key found")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("png")
    ap.add_argument("--ask", default=DEFAULT_ASK)
    ap.add_argument("--model", default="google/gemini-2.5-flash")
    ap.add_argument("--max-w", type=int, default=1100)
    ap.add_argument("--crop", type=int, nargs=4, default=None, help="x0 y0 x1 y1")
    ap.add_argument("--zoom", type=float, default=1.0, help="upscale the crop (nearest)")
    ap.add_argument("--raw", action="store_true")
    a = ap.parse_args()

    p = pathlib.Path(a.png)
    try:
        from PIL import Image
        im = Image.open(p).convert("RGB")
        if a.crop:
            im = im.crop(tuple(a.crop))
        if a.zoom != 1.0:
            im = im.resize((int(im.width * a.zoom), int(im.height * a.zoom)), Image.LANCZOS)
        if im.width > a.max_w:
            im = im.resize((a.max_w, int(im.height * a.max_w / im.width)), Image.LANCZOS)
        tmp = p.with_suffix(".eyes.jpg")
        im.save(tmp, "JPEG", quality=88)
        p = tmp
    except Exception as e:
        print("(no PIL, sending png as-is:", e, ")")
    b64 = base64.b64encode(p.read_bytes()).decode()
    who, k = key().split(":", 1)
    base = "https://api.openai.com/v1" if who == "OPENAI_API_KEY" else "https://openrouter.ai/api/v1"
    body = {
        "model": "gpt-4o-mini" if who == "OPENAI_API_KEY" else a.model,
        "max_tokens": 1200,
        "messages": [{"role": "user", "content": [
            {"type": "text", "text": a.ask},
            {"type": "image_url", "image_url": {"url": f"data:image/jpeg;base64,{b64}"}},
        ]}],
    }
    req = urllib.request.Request(base + "/chat/completions", data=json.dumps(body).encode(),
                                 headers={"Authorization": "Bearer " + k, "Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=120) as r:
            data = json.loads(r.read())
    except urllib.error.HTTPError as e:
        print("HTTP", e.code, e.read().decode()[:600]); return 1
    if a.raw:
        print(json.dumps(data, indent=1)[:3000]); return 0
    print(data["choices"][0]["message"]["content"])
    print("\n--- usage:", data.get("usage"))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
