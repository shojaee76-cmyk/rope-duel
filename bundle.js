(()=>{var ph=0,Ll=1,mh=2;var gr=1,gh=2,Cs=3,Pi=0,en=1,ye=2,$n=0,li=1,fn=2,Dl=3,Ul=4,_h=5;var qi=100,xh=101,yh=102,vh=103,Mh=104,Sh=200,bh=201,Eh=202,Th=203,Nl=204,Fl=205,wh=206,Ah=207,Rh=208,Ch=209,Ph=210,Ih=211,Lh=212,Dh=213,Uh=214,oa=0,la=1,ca=2,Ms=3,ha=4,ua=5,da=6,fa=7,Bl=0,Nh=1,Fh=2,Un=0,Ol=1,zl=2,Hl=3,_r=4,kl=5,Gl=6,Vl=7;var Wl=300,Ii=301,Zi=302,Wa=303,Xa=304,xr=306,Mi=1e3,Wn=1001,pa=1002,Qe=1003,Bh=1004;var yr=1005;var ke=1006,Ya=1007;var gn=1008;var _n=1009,Xl=1010,Yl=1011,Ps=1012,qa=1013,Nn=1014,Fn=1015,Bn=1016,Za=1017,Ja=1018,Is=1020,ql=35902,Zl=35899,Jl=1021,$l=1022,wn=1023,Xn=1026,Li=1027,Kl=1028,$a=1029,Di=1030,Ka=1031;var ja=1033,vr=33776,Mr=33777,Sr=33778,br=33779,Qa=35840,to=35841,eo=35842,no=35843,io=36196,so=37492,ro=37496,ao=37488,oo=37489,Er=37490,lo=37491,co=37808,ho=37809,uo=37810,fo=37811,po=37812,mo=37813,go=37814,_o=37815,xo=37816,yo=37817,vo=37818,Mo=37819,So=37820,bo=37821,Eo=36492,To=36494,wo=36495,Ao=36283,Ro=36284,Tr=36285,Co=36286;var qs=2300,ma=2301,ra=2302,Sl=2303,bl=2400,El=2401,Tl=2402;var Oh=3200;var Po=0,zh=1,ci="",Pe="srgb",Zs="srgb-linear",Js="linear",me="srgb";var aa=7680;var Hh=519,kh=512,Gh=513,Vh=514,Io=515,Wh=516,Xh=517,Lo=518,Yh=519,qh=35044,Ji=35048;var jl="300 es",Dn=2e3,Ss=2001;function md(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function gd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function $s(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Zh(){let i=$s("canvas");return i.style.display="block",i}var kc={},bs=null;function Ql(...i){let t="THREE."+i.shift();bs?bs("log",t,...i):console.log(t,...i)}function Jh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function zt(...i){i=Jh(i);let t="THREE."+i.shift();if(bs)bs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Gt(...i){i=Jh(i);let t="THREE."+i.shift();if(bs)bs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Vi(...i){let t=i.join(" ");t in kc||(kc[t]=!0,zt(...i))}function $h(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Kh={[oa]:la,[ca]:da,[ha]:fa,[Ms]:ua,[la]:oa,[da]:ca,[fa]:ha,[ua]:Ms},Yn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gc=1234567,Vs=Math.PI/180,Wi=180/Math.PI;function Ls(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[i&255]+rn[i>>8&255]+rn[i>>16&255]+rn[i>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function te(i,t,e){return Math.max(t,Math.min(e,i))}function tc(i,t){return(i%t+t)%t}function _d(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function xd(i,t,e){return i!==t?(e-i)/(t-i):0}function Ws(i,t,e){return(1-e)*i+e*t}function yd(i,t,e,n){return Ws(i,t,1-Math.exp(-e*n))}function vd(i,t=1){return t-Math.abs(tc(i,t*2)-t)}function Md(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Sd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function bd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ed(i,t){return i+Math.random()*(t-i)}function Td(i){return i*(.5-Math.random())}function wd(i){i!==void 0&&(Gc=i);let t=Gc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ad(i){return i*Vs}function Rd(i){return i*Wi}function Cd(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Pd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Id(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ld(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),_=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*_,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*_,a*l);break;case"ZYZ":i.set(c*_,c*f,a*h,a*l);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ys(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function un(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Be={DEG2RAD:Vs,RAD2DEG:Wi,generateUUID:Ls,clamp:te,euclideanModulo:tc,mapLinear:_d,inverseLerp:xd,lerp:Ws,damp:yd,pingpong:vd,smoothstep:Md,smootherstep:Sd,randInt:bd,randFloat:Ed,randFloatSpread:Td,seededRandom:wd,degToRad:Ad,radToDeg:Rd,isPowerOfTwo:Cd,ceilPowerOfTwo:Pd,floorPowerOfTwo:Id,setQuaternionFromProperEuler:Ld,normalize:un,denormalize:ys},ac=class ac{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ac.prototype.isVector2=!0;var Nt=ac,qn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],_=r[o+2],y=r[o+3];if(d!==y||c!==u||l!==f||h!==_){let g=c*u+l*f+h*_+d*y;g<0&&(u=-u,f=-f,_=-_,y=-y,g=-g);let p=1-a;if(g<.9995){let E=Math.acos(g),A=Math.sin(E);p=Math.sin(p*E)/A,a=Math.sin(a*E)/A,c=c*p+u*a,l=l*p+f*a,h=h*p+_*a,d=d*p+y*a}else{c=c*p+u*a,l=l*p+f*a,h=h*p+_*a,d=d*p+y*a;let E=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=E,l*=E,h*=E,d*=E}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],_=r[o+3];return t[e]=a*_+h*d+c*f-l*u,t[e+1]=c*_+h*u+l*d-a*f,t[e+2]=l*_+h*f+a*u-c*d,t[e+3]=h*_-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),_=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d+u*f*_;break;case"YZX":this._x=u*h*d+l*f*_,this._y=l*f*d+u*h*_,this._z=l*h*_-u*f*d,this._w=l*h*d-u*f*_;break;case"XZY":this._x=u*h*d-l*f*_,this._y=l*f*d-u*h*_,this._z=l*h*_+u*f*d,this._w=l*h*d+u*f*_;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(te(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},oc=class oc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return jo.copy(this).projectOnVector(t),this.sub(jo)}reflect(t){return this.sub(jo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};oc.prototype.isVector3=!0;var L=oc,jo=new L,Vc=new qn,lc=class lc{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],y=s[0],g=s[3],p=s[6],E=s[1],A=s[4],M=s[7],v=s[2],b=s[5],R=s[8];return r[0]=o*y+a*E+c*v,r[3]=o*g+a*A+c*b,r[6]=o*p+a*M+c*R,r[1]=l*y+h*E+d*v,r[4]=l*g+h*A+d*b,r[7]=l*p+h*M+d*R,r[2]=u*y+f*E+_*v,r[5]=u*g+f*A+_*b,r[8]=u*p+f*M+_*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,_=e*d+n*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return t[0]=d*y,t[1]=(s*l-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=u*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return Vi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Qo.makeScale(t,e)),this}rotate(t){return Vi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Qo.makeRotation(-t)),this}translate(t,e){return Vi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Qo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};lc.prototype.isMatrix3=!0;var Yt=lc,Qo=new Yt,Wc=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Xc=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Dd(){let i={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===me&&(s.r=si(s.r),s.g=si(s.g),s.b=si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===me&&(s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ci?Js:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Vi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Vi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zs]:{primaries:t,whitePoint:n,transfer:Js,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:n,transfer:me,toXYZ:Wc,fromXYZ:Xc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),i}var se=Dd();function si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var as,ga=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{as===void 0&&(as=$s("canvas")),as.width=t.width,as.height=t.height;let s=as.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=as}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=$s("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=si(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(si(e[n]/255)*255):e[n]=si(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ud=0,Es=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Ls(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(tl(s[o].image)):r.push(tl(s[o]))}else r=tl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function tl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?ga.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var Nd=0,el=new L,dn=class i extends Yn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Wn,s=Wn,r=ke,o=gn,a=wn,c=_n,l=i.DEFAULT_ANISOTROPY,h=ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Ls(),this.name="",this.source=new Es(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(el).x}get height(){return this.source.getSize(el).y}get depth(){return this.source.getSize(el).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mi:t.x=t.x-Math.floor(t.x);break;case Wn:t.x=t.x<0?0:1;break;case pa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mi:t.y=t.y-Math.floor(t.y);break;case Wn:t.y=t.y<0?0:1;break;case pa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Wl;dn.DEFAULT_ANISOTROPY=1;var cc=class cc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],_=c[9],y=c[2],g=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(_+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(l+1)/2,M=(f+1)/2,v=(p+1)/2,b=(h+u)/4,R=(d+y)/4,x=(_+g)/4;return A>M&&A>v?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=b/n,r=R/n):M>v?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=b/s,r=x/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=R/r,s=x/r),this.set(n,s,r,e),this}let E=Math.sqrt((g-_)*(g-_)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(g-_)/E,this.y=(d-y)/E,this.z=(u-h)/E,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=te(this.x,t.x,e.x),this.y=te(this.y,t.y,e.y),this.z=te(this.z,t.z,e.z),this.w=te(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=te(this.x,t,e),this.y=te(this.y,t,e),this.z=te(this.z,t,e),this.w=te(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(te(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};cc.prototype.isVector4=!0;var Le=cc,_a=class extends Yn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new dn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Es(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends _a{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ks=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var xa=class extends dn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Va=class Va{constructor(t,e,n,s,r,o,a,c,l,h,d,u,f,_,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,u,f,_,y,g)}set(t,e,n,s,r,o,a,c,l,h,d,u,f,_,y,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Va().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/os.setFromMatrixColumn(t,0).length(),r=1/os.setFromMatrixColumn(t,1).length(),o=1/os.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,_=a*h,y=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+_*l,e[5]=u-y*l,e[9]=-a*c,e[2]=y-u*l,e[6]=_+f*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,_=l*h,y=l*d;e[0]=u+y*a,e[4]=_*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=y+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,_=l*h,y=l*d;e[0]=u-y*a,e[4]=-o*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=y-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,f=o*d,_=a*h,y=a*d;e[0]=c*h,e[4]=_*l-f,e[8]=u*l+y,e[1]=c*d,e[5]=y*l+u,e[9]=f*l-_,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,f=o*l,_=a*c,y=a*l;e[0]=c*h,e[4]=y-u*d,e[8]=_*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+_,e[10]=u-y*d}else if(t.order==="XZY"){let u=o*c,f=o*l,_=a*c,y=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+y,e[5]=o*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fd,t,Bd)}lookAt(t,e,n){let s=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),mi.crossVectors(n,xn),mi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),mi.crossVectors(n,xn)),mi.normalize(),Or.crossVectors(xn,mi),s[0]=mi.x,s[4]=Or.x,s[8]=xn.x,s[1]=mi.y,s[5]=Or.y,s[9]=xn.y,s[2]=mi.z,s[6]=Or.z,s[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],y=n[6],g=n[10],p=n[14],E=n[3],A=n[7],M=n[11],v=n[15],b=s[0],R=s[4],x=s[8],T=s[12],C=s[1],D=s[5],O=s[9],H=s[13],I=s[2],z=s[6],X=s[10],Z=s[14],nt=s[3],K=s[7],it=s[11],tt=s[15];return r[0]=o*b+a*C+c*I+l*nt,r[4]=o*R+a*D+c*z+l*K,r[8]=o*x+a*O+c*X+l*it,r[12]=o*T+a*H+c*Z+l*tt,r[1]=h*b+d*C+u*I+f*nt,r[5]=h*R+d*D+u*z+f*K,r[9]=h*x+d*O+u*X+f*it,r[13]=h*T+d*H+u*Z+f*tt,r[2]=_*b+y*C+g*I+p*nt,r[6]=_*R+y*D+g*z+p*K,r[10]=_*x+y*O+g*X+p*it,r[14]=_*T+y*H+g*Z+p*tt,r[3]=E*b+A*C+M*I+v*nt,r[7]=E*R+A*D+M*z+v*K,r[11]=E*x+A*O+M*X+v*it,r[15]=E*T+A*H+M*Z+v*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],_=t[3],y=t[7],g=t[11],p=t[15],E=c*f-l*u,A=a*f-l*d,M=a*u-c*d,v=o*f-l*h,b=o*u-c*h,R=o*d-a*h;return e*(y*E-g*A+p*M)-n*(_*E-g*v+p*b)+s*(_*A-y*v+p*R)-r*(_*M-y*b+g*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],_=t[12],y=t[13],g=t[14],p=t[15],E=e*a-n*o,A=e*c-s*o,M=e*l-r*o,v=n*c-s*a,b=n*l-r*a,R=s*l-r*c,x=h*y-d*_,T=h*g-u*_,C=h*p-f*_,D=d*g-u*y,O=d*p-f*y,H=u*p-f*g,I=E*H-A*O+M*D+v*C-b*T+R*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/I;return t[0]=(a*H-c*O+l*D)*z,t[1]=(s*O-n*H-r*D)*z,t[2]=(y*R-g*b+p*v)*z,t[3]=(u*b-d*R-f*v)*z,t[4]=(c*C-o*H-l*T)*z,t[5]=(e*H-s*C+r*T)*z,t[6]=(g*M-_*R-p*A)*z,t[7]=(h*R-u*M+f*A)*z,t[8]=(o*O-a*C+l*x)*z,t[9]=(n*C-e*O-r*x)*z,t[10]=(_*b-y*M+p*E)*z,t[11]=(d*M-h*b-f*E)*z,t[12]=(a*T-o*D-c*x)*z,t[13]=(e*D-n*T+s*x)*z,t[14]=(y*A-_*v-g*E)*z,t[15]=(h*v-d*A+u*E)*z,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,_=r*d,y=o*h,g=o*d,p=a*d,E=c*l,A=c*h,M=c*d,v=n.x,b=n.y,R=n.z;return s[0]=(1-(y+p))*v,s[1]=(f+M)*v,s[2]=(_-A)*v,s[3]=0,s[4]=(f-M)*b,s[5]=(1-(u+p))*b,s[6]=(g+E)*b,s[7]=0,s[8]=(_+A)*R,s[9]=(g-E)*R,s[10]=(1-(u+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=os.set(s[0],s[1],s[2]).length(),a=os.set(s[4],s[5],s[6]).length(),c=os.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Cn.copy(this);let l=1/o,h=1/a,d=1/c;return Cn.elements[0]*=l,Cn.elements[1]*=l,Cn.elements[2]*=l,Cn.elements[4]*=h,Cn.elements[5]*=h,Cn.elements[6]*=h,Cn.elements[8]*=d,Cn.elements[9]*=d,Cn.elements[10]*=d,e.setFromRotationMatrix(Cn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=Dn,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),_,y;if(c)_=r/(o-r),y=o*r/(o-r);else if(a===Dn)_=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===Ss)_=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Dn,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),_,y;if(c)_=1/(o-r),y=o/(o-r);else if(a===Dn)_=-2/(o-r),y=-(o+r)/(o-r);else if(a===Ss)_=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=_,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Va.prototype.isMatrix4=!0;var Ae=Va,os=new L,Cn=new Ae,Fd=new L(0,0,0),Bd=new L(1,1,1),mi=new L,Or=new L,xn=new L,Yc=new Ae,qc=new qn,ri=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Yc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qc.setFromEuler(this),this.setFromQuaternion(qc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER="XYZ";var js=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Od=0,Zc=new L,ls=new qn,Qn=new Ae,zr=new L,zs=new L,zd=new L,Hd=new qn,Jc=new L(1,0,0),$c=new L(0,1,0),Kc=new L(0,0,1),jc={type:"added"},kd={type:"removed"},cs={type:"childadded",child:null},nl={type:"childremoved",child:null},tn=class i extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Od++}),this.uuid=Ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new ri,n=new qn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Yt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new js,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.multiply(ls),this}rotateOnWorldAxis(t,e){return ls.setFromAxisAngle(t,e),this.quaternion.premultiply(ls),this}rotateX(t){return this.rotateOnAxis(Jc,t)}rotateY(t){return this.rotateOnAxis($c,t)}rotateZ(t){return this.rotateOnAxis(Kc,t)}translateOnAxis(t,e){return Zc.copy(t).applyQuaternion(this.quaternion),this.position.add(Zc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jc,t)}translateY(t){return this.translateOnAxis($c,t)}translateZ(t){return this.translateOnAxis(Kc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?zr.copy(t):zr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(zs,zr,this.up):Qn.lookAt(zr,zs,this.up),this.quaternion.setFromRotationMatrix(Qn),s&&(Qn.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(Qn),this.quaternion.premultiply(ls.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Gt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(jc),cs.child=t,this.dispatchEvent(cs),cs.child=null):Gt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kd),nl.child=t,this.dispatchEvent(nl),nl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(jc),cs.child=t,this.dispatchEvent(cs),cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,t,zd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zs,Hd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};tn.DEFAULT_UP=new L(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ee=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gd={type:"move"},Ts=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,n),p=this._getHandJoint(l,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;l.inputState.pinching&&u>f+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Gd)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},jh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Hr={h:0,s:0,l:0};function il(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=tc(t,1),e=te(e,0,1),n=te(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=il(o,r,t+1/3),this.g=il(o,r,t),this.b=il(o,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=jh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=si(t.r),this.g=si(t.g),this.b=si(t.b),this}copyLinearToSRGB(t){return this.r=vs(t.r),this.g=vs(t.g),this.b=vs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return se.workingToColorSpace(an.copy(this),t),Math.round(te(an.r*255,0,255))*65536+Math.round(te(an.g*255,0,255))*256+Math.round(te(an.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(an.copy(this),e);let n=an.r,s=an.g,r=an.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=Pe){se.workingToColorSpace(an.copy(this),t);let e=an.r,n=an.g,s=an.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(gi),this.setHSL(gi.h+t,gi.s+e,gi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(gi),t.getHSL(Hr);let n=Ws(gi.h,Hr.h,e),s=Ws(gi.s,Hr.s,e),r=Ws(gi.l,Hr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new Xt;Xt.NAMES=jh;var Qs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},tr=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Pn=new L,ti=new L,sl=new L,ei=new L,hs=new L,us=new L,Qc=new L,rl=new L,al=new L,ol=new L,ll=new Le,cl=new Le,hl=new Le,vi=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Pn.subVectors(t,e),s.cross(Pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Pn.subVectors(s,e),ti.subVectors(n,e),sl.subVectors(t,e);let o=Pn.dot(Pn),a=Pn.dot(ti),c=Pn.dot(sl),l=ti.dot(ti),h=ti.dot(sl),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,_=(o*h-a*c)*u;return r.set(1-f-_,_,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,ei)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ei.x),c.addScaledVector(o,ei.y),c.addScaledVector(a,ei.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return ll.setScalar(0),cl.setScalar(0),hl.setScalar(0),ll.fromBufferAttribute(t,e),cl.fromBufferAttribute(t,n),hl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ll,r.x),o.addScaledVector(cl,r.y),o.addScaledVector(hl,r.z),o}static isFrontFacing(t,e,n,s){return Pn.subVectors(n,e),ti.subVectors(t,e),Pn.cross(ti).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Pn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Pn.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;hs.subVectors(s,n),us.subVectors(r,n),rl.subVectors(t,n);let c=hs.dot(rl),l=us.dot(rl);if(c<=0&&l<=0)return e.copy(n);al.subVectors(t,s);let h=hs.dot(al),d=us.dot(al);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(hs,o);ol.subVectors(t,r);let f=hs.dot(ol),_=us.dot(ol);if(_>=0&&f<=_)return e.copy(r);let y=f*l-c*_;if(y<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(n).addScaledVector(us,a);let g=h*_-f*d;if(g<=0&&d-h>=0&&f-_>=0)return Qc.subVectors(r,s),a=(d-h)/(d-h+(f-_)),e.copy(s).addScaledVector(Qc,a);let p=1/(g+y+u);return o=y*p,a=u*p,e.copy(n).addScaledVector(hs,o).addScaledVector(us,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Si=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(In.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(In.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=In.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,In):In.fromBufferAttribute(r,o),In.applyMatrix4(t.matrixWorld),this.expandByPoint(In);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kr.copy(n.boundingBox)),kr.applyMatrix4(t.matrixWorld),this.union(kr)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,In),In.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),Gr.subVectors(this.max,Hs),ds.subVectors(t.a,Hs),fs.subVectors(t.b,Hs),ps.subVectors(t.c,Hs),_i.subVectors(fs,ds),xi.subVectors(ps,fs),zi.subVectors(ds,ps);let e=[0,-_i.z,_i.y,0,-xi.z,xi.y,0,-zi.z,zi.y,_i.z,0,-_i.x,xi.z,0,-xi.x,zi.z,0,-zi.x,-_i.y,_i.x,0,-xi.y,xi.x,0,-zi.y,zi.x,0];return!ul(e,ds,fs,ps,Gr)||(e=[1,0,0,0,1,0,0,0,1],!ul(e,ds,fs,ps,Gr))?!1:(Vr.crossVectors(_i,xi),e=[Vr.x,Vr.y,Vr.z],ul(e,ds,fs,ps,Gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,In).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(In).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ni=[new L,new L,new L,new L,new L,new L,new L,new L],In=new L,kr=new Si,ds=new L,fs=new L,ps=new L,_i=new L,xi=new L,zi=new L,Hs=new L,Gr=new L,Vr=new L,Hi=new L;function ul(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Hi.fromArray(i,r);let a=s.x*Math.abs(Hi.x)+s.y*Math.abs(Hi.y)+s.z*Math.abs(Hi.z),c=t.dot(Hi),l=e.dot(Hi),h=n.dot(Hi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var We=new L,Wr=new Nt,Vd=0,Ie=class extends Yn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qh,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Wr.fromBufferAttribute(this,e),Wr.applyMatrix3(t),this.setXY(e,Wr.x,Wr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ys(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=un(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ys(e,this.array)),e}setX(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ys(e,this.array)),e}setY(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ys(e,this.array)),e}setZ(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ys(e,this.array)),e}setW(t,e){return this.normalized&&(e=un(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=un(e,this.array),n=un(n,this.array),s=un(s,this.array),r=un(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var er=class extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var nr=class extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var re=class extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}},Wd=new Si,ks=new L,dl=new L,ai=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Wd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ks.subVectors(t,this.center);let e=ks.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ks.copy(t.center).add(dl)),this.expandByPoint(ks.copy(t.center).sub(dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Xd=0,bn=new Ae,fl=new tn,ms=new L,yn=new Si,Gs=new Si,Ke=new L,_e=class i extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(md(t)?nr:er)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return bn.makeRotationFromQuaternion(t),this.applyMatrix4(bn),this}rotateX(t){return bn.makeRotationX(t),this.applyMatrix4(bn),this}rotateY(t){return bn.makeRotationY(t),this.applyMatrix4(bn),this}rotateZ(t){return bn.makeRotationZ(t),this.applyMatrix4(bn),this}translate(t,e,n){return bn.makeTranslation(t,e,n),this.applyMatrix4(bn),this}scale(t,e,n){return bn.makeScale(t,e,n),this.applyMatrix4(bn),this}lookAt(t){return fl.lookAt(t),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new re(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Gs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ke.addVectors(yn.min,Gs.min),yn.expandByPoint(Ke),Ke.addVectors(yn.max,Gs.max),yn.expandByPoint(Ke)):(yn.expandByPoint(Gs.min),yn.expandByPoint(Gs.max))}yn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ke));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ke.fromBufferAttribute(a,l),c&&(ms.fromBufferAttribute(t,l),Ke.add(ms)),s=Math.max(s,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Ie(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let x=0;x<n.count;x++)a[x]=new L,c[x]=new L;let l=new L,h=new L,d=new L,u=new Nt,f=new Nt,_=new Nt,y=new L,g=new L;function p(x,T,C){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,T),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),_.fromBufferAttribute(r,C),h.sub(l),d.sub(l),f.sub(u),_.sub(u);let D=1/(f.x*_.y-_.x*f.y);isFinite(D)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(D),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(D),a[x].add(y),a[T].add(y),a[C].add(y),c[x].add(g),c[T].add(g),c[C].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let x=0,T=E.length;x<T;++x){let C=E[x],D=C.start,O=C.count;for(let H=D,I=D+O;H<I;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}let A=new L,M=new L,v=new L,b=new L;function R(x){v.fromBufferAttribute(s,x),b.copy(v);let T=a[x];A.copy(T),A.sub(v.multiplyScalar(v.dot(T))).normalize(),M.crossVectors(b,T);let D=M.dot(c[x])<0?-1:1;o.setXYZW(x,A.x,A.y,A.z,D)}for(let x=0,T=E.length;x<T;++x){let C=E[x],D=C.start,O=C.count;for(let H=D,I=D+O;H<I;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){let _=t.getX(u+0),y=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,_=0;for(let y=0,g=c.length;y<g;y++){a.isInterleavedBufferAttribute?f=c[y]*a.data.stride+a.offset:f=c[y]*h;for(let p=0;p<h;p++)u[_++]=l[f++]}return new Ie(u,h,d)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var pl=new L,Yd=new L,qd=new Yt,Ln=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=pl.subVectors(n,e).cross(Yd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(pl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||qd.getNormalMatrix(t),s=this.coplanarPoint(pl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Zd=0,oi=class extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Ls(),this.name="",this.type="Material",this.blending=li,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nl,this.blendDst=Fl,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=aa,this.stencilZFail=aa,this.stencilZPass=aa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Ln().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Nt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Nt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ii=new L,ml=new L,Xr=new L,Yr=new L,ir=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ml.copy(t).add(e).multiplyScalar(.5),Xr.copy(e).sub(t).normalize(),Yr.copy(this.origin).sub(ml);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Xr),a=Yr.dot(this.direction),c=-Yr.dot(Xr),l=Yr.lengthSq(),h=Math.abs(1-o*o),d,u,f,_;if(h>0)if(d=o*c-a,u=o*a-c,_=r*h,d>=0)if(u>=-_)if(u<=_){let y=1/h;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-_?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=_?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ml).addScaledVector(Xr,u),f}intersectSphere(t,e){if(t.radius<0)return null;ii.subVectors(t.center,this.origin);let n=ii.dot(this.direction),s=ii.dot(ii)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,_=e.x-o.x,y=e.y-o.y,g=e.z-o.z,p=n.x-o.x,E=n.y-o.y,A=n.z-o.z,M=Math.abs(c),v=Math.abs(l),b=Math.abs(h),R,x,T,C,D,O,H,I,z,X,Z,nt;if(M>=v&&M>=b?(T=c,O=d,z=_,nt=p,c>=0?(R=l,x=h,C=u,D=f,H=y,I=g,X=E,Z=A):(R=h,x=l,C=f,D=u,H=g,I=y,X=A,Z=E)):v>=b?(T=l,O=u,z=y,nt=E,l>=0?(R=h,x=c,C=f,D=d,H=g,I=_,X=A,Z=p):(R=c,x=h,C=d,D=f,H=_,I=g,X=p,Z=A)):(T=h,O=f,z=g,nt=A,h>=0?(R=c,x=l,C=d,D=u,H=_,I=y,X=p,Z=E):(R=l,x=c,C=u,D=d,H=y,I=_,X=E,Z=p)),T===0)return null;let K=R/T,it=x/T,tt=1/T,Lt=C-K*O,Ct=D-it*O,Ft=H-K*z,Bt=I-it*z,Vt=X-K*nt,J=Z-it*nt,j=Vt*Bt-J*Ft,q=Lt*J-Ct*Vt,rt=Ft*Ct-Bt*Lt;if(s){if(j<0||q<0||rt<0)return null}else if((j<0||q<0||rt<0)&&(j>0||q>0||rt>0))return null;let et=j+q+rt;if(et===0)return null;let At=tt*(j*O+q*z+rt*nt);return(et>0?At<0:At>0)?null:this.at(At/et,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},De=class extends oi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Bl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},th=new Ae,ki=new ir,qr=new ai,eh=new L,Zr=new L,Jr=new L,$r=new L,gl=new L,Kr=new L,nh=new L,jr=new L,qt=class extends tn{constructor(t=new _e,e=new De){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Kr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(gl.fromBufferAttribute(d,t),o?Kr.addScaledVector(gl,h):Kr.addScaledVector(gl.sub(e),h))}e.add(Kr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(r),ki.copy(t.ray).recast(t.near),!(qr.containsPoint(ki.origin)===!1&&(ki.intersectSphere(qr,eh)===null||ki.origin.distanceToSquared(eh)>(t.far-t.near)**2))&&(th.copy(r).invert(),ki.copy(t.ray).applyMatrix4(th),!(n.boundingBox!==null&&ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ki)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=u.length;_<y;_++){let g=u[_],p=o[g.materialIndex],E=Math.max(g.start,f.start),A=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=E,v=A;M<v;M+=3){let b=a.getX(M),R=a.getX(M+1),x=a.getX(M+2);s=Qr(this,p,t,n,l,h,d,b,R,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=_,p=y;g<p;g+=3){let E=a.getX(g),A=a.getX(g+1),M=a.getX(g+2);s=Qr(this,o,t,n,l,h,d,E,A,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,y=u.length;_<y;_++){let g=u[_],p=o[g.materialIndex],E=Math.max(g.start,f.start),A=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let M=E,v=A;M<v;M+=3){let b=M,R=M+1,x=M+2;s=Qr(this,p,t,n,l,h,d,b,R,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let _=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let g=_,p=y;g<p;g+=3){let E=g,A=g+1,M=g+2;s=Qr(this,o,t,n,l,h,d,E,A,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function Jd(i,t,e,n,s,r,o,a){let c;if(t.side===en?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Pi,a),c===null)return null;jr.copy(a),jr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(jr);return l<e.near||l>e.far?null:{distance:l,point:jr.clone(),object:i}}function Qr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Zr),i.getVertexPosition(c,Jr),i.getVertexPosition(l,$r);let h=Jd(i,t,e,n,Zr,Jr,$r,nh);if(h){let d=new L;vi.getBarycoord(nh,Zr,Jr,$r,d),s&&(h.uv=vi.getInterpolatedAttribute(s,a,c,l,d,new Nt)),r&&(h.uv1=vi.getInterpolatedAttribute(r,a,c,l,d,new Nt)),o&&(h.normal=vi.getInterpolatedAttribute(o,a,c,l,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new L,materialIndex:0};vi.getNormal(Zr,Jr,$r,u.normal),h.face=u,h.barycoord=d}return h}var ya=class extends dn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Qe,h=Qe,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gi=new ai,$d=new Nt(.5,.5),ta=new L,ws=class{constructor(t=new Ln,e=new Ln,n=new Ln,s=new Ln,r=new Ln,o=new Ln){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],_=r[8],y=r[9],g=r[10],p=r[11],E=r[12],A=r[13],M=r[14],v=r[15];if(s[0].setComponents(l-o,f-h,p-_,v-E).normalize(),s[1].setComponents(l+o,f+h,p+_,v+E).normalize(),s[2].setComponents(l+a,f+d,p+y,v+A).normalize(),s[3].setComponents(l-a,f-d,p-y,v-A).normalize(),n)s[4].setComponents(c,u,g,M).normalize(),s[5].setComponents(l-c,f-u,p-g,v-M).normalize();else if(s[4].setComponents(l-c,f-u,p-g,v-M).normalize(),e===Dn)s[5].setComponents(l+c,f+u,p+g,v+M).normalize();else if(e===Ss)s[5].setComponents(c,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){Gi.center.set(0,0,0);let e=$d.distanceTo(t.center);return Gi.radius=.7071067811865476+e,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(ta.x=s.normal.x>0?t.max.x:t.min.x,ta.y=s.normal.y>0?t.max.y:t.min.y,ta.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ta)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Zn=class extends oi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ih=new Ae,wl=new ir,ea=new ai,na=new L,En=class extends tn{constructor(t=new _e,e=new Zn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(s),ea.radius+=r,t.ray.intersectsSphere(ea)===!1)return;ih.copy(s).invert(),wl.copy(t.ray).applyMatrix4(ih);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let _=u,y=f;_<y;_++){let g=l.getX(_);na.fromBufferAttribute(d,g),sh(na,g,c,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let _=u,y=f;_<y;_++)na.fromBufferAttribute(d,_),sh(na,_,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function sh(i,t,e,n,s,r,o){let a=wl.distanceSqToPoint(i);if(a<e){let c=new L;wl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var sr=class extends dn{constructor(t=[],e=Ii,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},on=class extends dn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var bi=class extends dn{constructor(t,e,n=Nn,s,r,o,a=Qe,c=Qe,l,h=Xn,d=1){if(h!==Xn&&h!==Li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Es(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},va=class extends bi{constructor(t,e=Nn,n=Ii,s,r,o=Qe,a=Qe,c,l=Xn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},rr=class extends dn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ye=class i extends _e{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;_("z","y","x",-1,-1,n,e,t,o,r,0),_("z","y","x",1,-1,n,e,-t,o,r,1),_("x","z","y",1,1,t,n,e,s,o,2),_("x","z","y",1,-1,t,n,-e,s,o,3),_("x","y","z",1,-1,t,e,n,s,r,4),_("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(d,2));function _(y,g,p,E,A,M,v,b,R,x,T){let C=M/R,D=v/x,O=M/2,H=v/2,I=b/2,z=R+1,X=x+1,Z=0,nt=0,K=new L;for(let it=0;it<X;it++){let tt=it*D-H;for(let Lt=0;Lt<z;Lt++){let Ct=Lt*C-O;K[y]=Ct*E,K[g]=tt*A,K[p]=I,l.push(K.x,K.y,K.z),K[y]=0,K[g]=0,K[p]=b>0?1:-1,h.push(K.x,K.y,K.z),d.push(Lt/R),d.push(1-it/x),Z+=1}}for(let it=0;it<x;it++)for(let tt=0;tt<R;tt++){let Lt=u+tt+z*it,Ct=u+tt+z*(it+1),Ft=u+(tt+1)+z*(it+1),Bt=u+(tt+1)+z*it;c.push(Lt,Ct,Bt),c.push(Ct,Ft,Bt),nt+=6}a.addGroup(f,nt,T),f+=nt,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ar=class i extends _e{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,_=n*2+r,y=s+1,g=new L,p=new L;for(let E=0;E<=_;E++){let A=0,M=0,v=0,b=0;if(E<=n){let T=E/n,C=T*Math.PI/2;M=-h-t*Math.cos(C),v=t*Math.sin(C),b=-t*Math.cos(C),A=T*d}else if(E<=n+r){let T=(E-n)/r;M=-h+T*e,v=t,b=0,A=d+T*u}else{let T=(E-n-r)/n,C=T*Math.PI/2;M=h+t*Math.sin(C),v=t*Math.cos(C),b=t*Math.sin(C),A=d+u+T*d}let R=Math.max(0,Math.min(1,A/f)),x=0;E===0?x=.5/s:E===_&&(x=-.5/s);for(let T=0;T<=s;T++){let C=T/s,D=C*Math.PI*2,O=Math.sin(D),H=Math.cos(D);p.x=-v*H,p.y=M,p.z=v*O,a.push(p.x,p.y,p.z),g.set(-v*H,b,v*O),g.normalize(),c.push(g.x,g.y,g.z),l.push(C+x,R)}if(E>0){let T=(E-1)*y;for(let C=0;C<s;C++){let D=T+C,O=T+C+1,H=E*y+C,I=E*y+C+1;o.push(D,O,H),o.push(O,I,H)}}}this.setIndex(o),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var Re=class i extends _e{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],_=0,y=[],g=n/2,p=0;E(),o===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new re(d,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(f,2));function E(){let M=new L,v=new L,b=0,R=(e-t)/n;for(let x=0;x<=r;x++){let T=[],C=x/r,D=C*(e-t)+t;for(let O=0;O<=s;O++){let H=O/s,I=H*c+a,z=Math.sin(I),X=Math.cos(I);v.x=D*z,v.y=-C*n+g,v.z=D*X,d.push(v.x,v.y,v.z),M.set(z,R,X).normalize(),u.push(M.x,M.y,M.z),f.push(H,1-C),T.push(_++)}y.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let C=y[T][x],D=y[T+1][x],O=y[T+1][x+1],H=y[T][x+1];(t>0||T!==0)&&(h.push(C,D,H),b+=3),(e>0||T!==r-1)&&(h.push(D,O,H),b+=3)}l.addGroup(p,b,0),p+=b}function A(M){let v=_,b=new Nt,R=new L,x=0,T=M===!0?t:e,C=M===!0?1:-1;for(let O=1;O<=s;O++)d.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),_++;let D=_;for(let O=0;O<=s;O++){let I=O/s*c+a,z=Math.cos(I),X=Math.sin(I);R.x=T*X,R.y=g*C,R.z=T*z,d.push(R.x,R.y,R.z),u.push(0,C,0),b.x=z*.5+.5,b.y=X*.5*C+.5,f.push(b.x,b.y),_++}for(let O=0;O<s;O++){let H=v+O,I=D+O;M===!0?h.push(I,I+1,H):h.push(I+1,I,H),x+=3}l.addGroup(p,x,M===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xi=class i extends Re{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){zt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Nt:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,s=[],r=[],o=[],a=new L,c=new Ae;for(let f=0;f<=t;f++){let _=f/t;s[f]=this.getTangentAt(_,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(te(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,_))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(te(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let _=1;_<=t;_++)r[_].applyMatrix4(c.makeRotationAxis(s[_],f*_)),o[_].crossVectors(s[_],r[_])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},or=class extends Tn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Nt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ma=class extends or{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ec(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var rh=new L,ah=new L,_l=new ec,xl=new ec,yl=new ec,Ei=class extends Tn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ah.subVectors(s[0],s[1]).add(s[0]),l=ah);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(rh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=rh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(l.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),_<1e-4&&(_=y),g<1e-4&&(g=y),_l.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,_,y,g),xl.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,_,y,g),yl.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,_,y,g)}else this.curveType==="catmullrom"&&(_l.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),xl.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),yl.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set(_l.calc(c),xl.calc(c),yl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function oh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Kd(i,t){let e=1-i;return e*e*t}function jd(i,t){return 2*(1-i)*i*t}function Qd(i,t){return i*i*t}function Xs(i,t,e,n){return Kd(i,t)+jd(i,e)+Qd(i,n)}function tf(i,t){let e=1-i;return e*e*e*t}function ef(i,t){let e=1-i;return 3*e*e*i*t}function nf(i,t){return 3*(1-i)*i*i*t}function sf(i,t){return i*i*i*t}function Ys(i,t,e,n,s){return tf(i,t)+ef(i,e)+nf(i,n)+sf(i,s)}var Sa=class extends Tn{constructor(t=new Nt,e=new Nt,n=new Nt,s=new Nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ys(t,s.x,r.x,o.x,a.x),Ys(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ba=class extends Tn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ys(t,s.x,r.x,o.x,a.x),Ys(t,s.y,r.y,o.y,a.y),Ys(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ea=class extends Tn{constructor(t=new Nt,e=new Nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Nt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ta=class extends Tn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wa=class extends Tn{constructor(t=new Nt,e=new Nt,n=new Nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Nt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Xs(t,s.x,r.x,o.x),Xs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},lr=class extends Tn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Xs(t,s.x,r.x,o.x),Xs(t,s.y,r.y,o.y),Xs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Aa=class extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Nt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(oh(a,c.x,l.x,h.x,d.x),oh(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Nt().fromArray(s))}return this}},rf=Object.freeze({__proto__:null,ArcCurve:Ma,CatmullRomCurve3:Ei,CubicBezierCurve:Sa,CubicBezierCurve3:ba,EllipseCurve:or,LineCurve:Ea,LineCurve3:Ta,QuadraticBezierCurve:wa,QuadraticBezierCurve3:lr,SplineCurve:Aa});var xe=class i extends _e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,f=[],_=[],y=[],g=[];for(let p=0;p<h;p++){let E=p*u-o;for(let A=0;A<l;A++){let M=A*d-r;_.push(M,-E,0),y.push(0,0,1),g.push(A/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<a;E++){let A=E+l*p,M=E+l*(p+1),v=E+1+l*(p+1),b=E+1+l*p;f.push(A,M,b),f.push(M,v,b)}this.setIndex(f),this.setAttribute("position",new re(_,3)),this.setAttribute("normal",new re(y,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},cr=class i extends _e{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],d=t,u=(e-t)/s,f=new L,_=new Nt;for(let y=0;y<=s;y++){for(let g=0;g<=n;g++){let p=r+g/n*o;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),_.x=(f.x/e+1)/2,_.y=(f.y/e+1)/2,h.push(_.x,_.y)}d+=u}for(let y=0;y<s;y++){let g=y*(n+1);for(let p=0;p<n;p++){let E=p+g,A=E,M=E+n+1,v=E+n+2,b=E+1;a.push(A,M,b),a.push(M,v,b)}}this.setIndex(a),this.setAttribute("position",new re(c,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Jn=class i extends _e{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new L,u=new L,f=[],_=[],y=[],g=[];for(let p=0;p<=n;p++){let E=[],A=p/n,M=o+A*a,v=t*Math.cos(M),b=Math.sqrt(t*t-v*v),R=0;p===0&&o===0?R=.5/e:p===n&&c===Math.PI&&(R=-.5/e);for(let x=0;x<=e;x++){let T=x/e,C=s+T*r;d.x=-b*Math.cos(C),d.y=v,d.z=b*Math.sin(C),_.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),g.push(T+R,1-A),E.push(l++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){let A=h[p][E+1],M=h[p][E],v=h[p+1][E],b=h[p+1][E+1];(p!==0||o>0)&&f.push(A,M,b),(p!==n-1||c<Math.PI)&&f.push(M,v,b)}this.setIndex(f),this.setAttribute("position",new re(_,3)),this.setAttribute("normal",new re(y,3)),this.setAttribute("uv",new re(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ti=class i extends _e{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new L,f=new L,_=new L;for(let y=0;y<=n;y++){let g=o+y/n*a;for(let p=0;p<=s;p++){let E=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(E),f.y=(t+e*Math.cos(g))*Math.sin(E),f.z=e*Math.sin(g),l.push(f.x,f.y,f.z),u.x=t*Math.cos(E),u.y=t*Math.sin(E),_.subVectors(f,u).normalize(),h.push(_.x,_.y,_.z),d.push(p/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=s;g++){let p=(s+1)*y+g-1,E=(s+1)*(y-1)+g-1,A=(s+1)*(y-1)+g,M=(s+1)*y+g;c.push(p,E,M),c.push(E,A,M)}this.setIndex(c),this.setAttribute("position",new re(l,3)),this.setAttribute("normal",new re(h,3)),this.setAttribute("uv",new re(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var hr=class i extends _e{constructor(t=new lr(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new Nt,h=new L,d=[],u=[],f=[],_=[];y(),this.setIndex(_),this.setAttribute("position",new re(d,3)),this.setAttribute("normal",new re(u,3)),this.setAttribute("uv",new re(f,2));function y(){for(let A=0;A<e;A++)g(A);g(r===!1?e:0),E(),p()}function g(A){h=t.getPointAt(A/e,h);let M=o.normals[A],v=o.binormals[A];for(let b=0;b<=s;b++){let R=b/s*Math.PI*2,x=Math.sin(R),T=-Math.cos(R);c.x=T*M.x+x*v.x,c.y=T*M.y+x*v.y,c.z=T*M.z+x*v.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let A=1;A<=e;A++)for(let M=1;M<=s;M++){let v=(s+1)*(A-1)+(M-1),b=(s+1)*A+(M-1),R=(s+1)*A+M,x=(s+1)*(A-1)+M;_.push(v,b,x),_.push(b,R,x)}}function E(){for(let A=0;A<=e;A++)for(let M=0;M<=s;M++)l.x=A/e,l.y=M/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new rf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function $i(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(lh(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(lh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function cn(i){let t={};for(let e=0;e<i.length;e++){let n=$i(i[e]);for(let s in n)t[s]=n[s]}return t}function lh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function af(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var Qh={clone:$i,merge:cn},of=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qe=class extends oi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=of,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$i(t.uniforms),this.uniformsGroups=af(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Xt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Nt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Yt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Ra=class extends qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ln=class extends oi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Po,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ca=class extends oi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Pa=class extends oi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function gs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function vl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var wi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ia=class extends wi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bl,endingEnd:bl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case El:r=t,a=2*e-n;break;case Tl:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case El:o=t,c=2*n-e;break;case Tl:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,_=(n-e)/(s-e),y=_*_,g=y*_,p=-u*g+2*u*y-u*_,E=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*_+1,A=(-1-f)*g+(1.5+f)*y+.5*_,M=f*g-f*y;for(let v=0;v!==a;++v)r[v]=p*o[h+v]+E*o[l+v]+A*o[c+v]+M*o[d+v];return r}},La=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},Da=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ua=class extends wi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let _=(n-e)/(s-e),y=1-_;for(let g=0;g!==a;++g)r[g]=o[l+g]*y+o[c+g]*_;return r}let u=a*2,f=t-1;for(let _=0;_!==a;++_){let y=o[l+_],g=o[c+_],p=f*u+_*2,E=d[p],A=d[p+1],M=t*u+_*2,v=h[M],b=h[M+1],R=hf(n,e,E,v,s);r[_]=tu(R,y,A,b,g)}return r}};function tu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function cf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function hf(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=tu(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=cf(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var vn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=gs(e,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:gs(t.times,Array),values:gs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),vl(t.settings)&&(n.settings={inTangents:gs(t.settings.inTangents,Array),outTangents:gs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new La(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ia(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ua(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case qs:e=this.InterpolantFactoryMethodDiscrete;break;case ma:e=this.InterpolantFactoryMethodLinear;break;case ra:e=this.InterpolantFactoryMethodSmooth;break;case Sl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return ma;case this.InterpolantFactoryMethodSmooth:return ra;case this.InterpolantFactoryMethodBezier:return Sl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;vl(this.settings)&&(ch(this.settings.inTangents,t),ch(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Gt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Gt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Gt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Gt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&gd(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Gt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ra,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let _=0;_!==n;++_){let y=e[d+_];if(y!==e[u+_]||y!==e[f+_]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,vl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ch(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=ma;var Ai=class extends vn{constructor(t,e,n){super(t,e,n)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=qs;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Na=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}};Na.prototype.ValueTypeName="color";var Fa=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}};Fa.prototype.ValueTypeName="number";var Ba=class extends wi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)qn.slerpFlat(r,0,o,l-a,o,l,c);return r}},ur=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ba(this.times,this.values,this.getValueSize(),t)}};ur.prototype.ValueTypeName="quaternion";ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Ri=class extends vn{constructor(t,e,n){super(t,e,n)}};Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=qs;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends vn{constructor(t,e,n,s){super(t,e,n,s)}};Oa.prototype.ValueTypeName="vector";var za=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],_=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},eu=new za,Ha=class{constructor(t){this.manager=t!==void 0?t:eu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ha.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yi=class extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Ml=new Ae,hh=new L,uh=new L,As=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.mapType=_n,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ws,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;hh.setFromMatrixPosition(t.matrixWorld),e.position.copy(hh),uh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Ml.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Ml,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Ss||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(Ml)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},ia=new L,sa=new qn,Vn=new L,dr=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ia,sa,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,sa,Vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ia,sa,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ia,sa,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},yi=new L,dh=new Nt,fh=new Nt,je=class extends dr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Wi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(yi.x,yi.y).multiplyScalar(-t/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-t/yi.z)}getViewSize(t,e){return this.getViewBounds(t,dh,fh),e.subVectors(fh,dh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Vs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Al=class extends As{constructor(){super(new je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Wi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},fr=class extends Yi{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Al}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},Rl=class extends As{constructor(){super(new je(90,1,.5,500)),this.isPointLightShadow=!0}},Ci=class extends Yi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Rl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Rs=class extends dr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Cl=class extends As{constructor(){super(new Rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pr=class extends Yi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new Cl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},mr=class extends Yi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var _s=-90,xs=1,ka=class extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new je(_s,xs,t,e);s.layers=this.layers,this.add(s);let r=new je(_s,xs,t,e);r.layers=this.layers,this.add(r);let o=new je(_s,xs,t,e);o.layers=this.layers,this.add(o);let a=new je(_s,xs,t,e);a.layers=this.layers,this.add(a);let c=new je(_s,xs,t,e);c.layers=this.layers,this.add(c);let l=new je(_s,xs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Ga=class extends je{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ic="\\[\\]\\.:\\/",uf=new RegExp("["+ic+"]","g"),sc="[^"+ic+"]",df="[^"+ic.replace("\\.","")+"]",ff=/((?:WC+[\/:])*)/.source.replace("WC",sc),pf=/(WCOD+)?/.source.replace("WCOD",df),mf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sc),gf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sc),_f=new RegExp("^"+ff+pf+mf+gf+"$"),xf=["material","materials","bones","map"],Pl=class{constructor(t,e,n){let s=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(uf,"")}static parseTrackName(t){let e=_f.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);xf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;Gt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Pl;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cx=new Float32Array(1);var hc=class hc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};hc.prototype.isMatrix2=!0;var Il=hc;function rc(i,t,e,n){let s=yf(n);switch(e){case Jl:return i*t;case Kl:return i*t/s.components*s.byteLength;case $a:return i*t/s.components*s.byteLength;case Di:return i*t*2/s.components*s.byteLength;case Ka:return i*t*2/s.components*s.byteLength;case $l:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case ja:return i*t*4/s.components*s.byteLength;case vr:case Mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Sr:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case to:case no:return Math.max(i,16)*Math.max(t,8)/4;case Qa:case eo:return Math.max(i,8)*Math.max(t,8)/2;case io:case so:case ao:case oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ro:case Er:case lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ho:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case uo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case po:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case mo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case go:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _o:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case vo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case So:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case bo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Eo:case To:case wo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ao:case Ro:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Tr:case Co:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yf(i){switch(i){case _n:case Xl:return{byteLength:1,components:1};case Ps:case Yl:case Bn:return{byteLength:2,components:1};case Za:case Ja:return{byteLength:2,components:4};case Nn:case qa:case Fn:return{byteLength:4,components:1};case ql:case Zl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function bu(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Mf(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){let _=d[u],y=d[f];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){let y=d[f];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Sf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ef=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Af=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Cf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,If=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Uf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Nf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ff=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Wf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Xf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ap=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,op=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,hp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,pp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,mp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Mp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,bp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ep=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Tp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ip=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Up=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Np=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Op=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Xp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$p=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,jp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,am=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,om=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,um=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_m=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Sm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Pm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Im=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Dm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Nm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Om=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,km=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Vm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Wm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$m=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Km=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Kt={alphahash_fragment:Sf,alphahash_pars_fragment:bf,alphamap_fragment:Ef,alphamap_pars_fragment:Tf,alphatest_fragment:wf,alphatest_pars_fragment:Af,aomap_fragment:Rf,aomap_pars_fragment:Cf,batching_pars_vertex:Pf,batching_vertex:If,begin_vertex:Lf,beginnormal_vertex:Df,bsdfs:Uf,iridescence_fragment:Nf,bumpmap_pars_fragment:Ff,clipping_planes_fragment:Bf,clipping_planes_pars_fragment:Of,clipping_planes_pars_vertex:zf,clipping_planes_vertex:Hf,color_fragment:kf,color_pars_fragment:Gf,color_pars_vertex:Vf,color_vertex:Wf,common:Xf,cube_uv_reflection_fragment:Yf,defaultnormal_vertex:qf,displacementmap_pars_vertex:Zf,displacementmap_vertex:Jf,emissivemap_fragment:$f,emissivemap_pars_fragment:Kf,colorspace_fragment:jf,colorspace_pars_fragment:Qf,envmap_fragment:tp,envmap_common_pars_fragment:ep,envmap_pars_fragment:np,envmap_pars_vertex:ip,envmap_physical_pars_fragment:pp,envmap_vertex:sp,fog_vertex:rp,fog_pars_vertex:ap,fog_fragment:op,fog_pars_fragment:lp,gradientmap_pars_fragment:cp,lightmap_pars_fragment:hp,lights_lambert_fragment:up,lights_lambert_pars_fragment:dp,lights_pars_begin:fp,lights_toon_fragment:mp,lights_toon_pars_fragment:gp,lights_phong_fragment:_p,lights_phong_pars_fragment:xp,lights_physical_fragment:yp,lights_physical_pars_fragment:vp,lights_fragment_begin:Mp,lights_fragment_maps:Sp,lights_fragment_end:bp,lightprobes_pars_fragment:Ep,logdepthbuf_fragment:Tp,logdepthbuf_pars_fragment:wp,logdepthbuf_pars_vertex:Ap,logdepthbuf_vertex:Rp,map_fragment:Cp,map_pars_fragment:Pp,map_particle_fragment:Ip,map_particle_pars_fragment:Lp,metalnessmap_fragment:Dp,metalnessmap_pars_fragment:Up,morphinstance_vertex:Np,morphcolor_vertex:Fp,morphnormal_vertex:Bp,morphtarget_pars_vertex:Op,morphtarget_vertex:zp,normal_fragment_begin:Hp,normal_fragment_maps:kp,normal_pars_fragment:Gp,normal_pars_vertex:Vp,normal_vertex:Wp,normalmap_pars_fragment:Xp,clearcoat_normal_fragment_begin:Yp,clearcoat_normal_fragment_maps:qp,clearcoat_pars_fragment:Zp,iridescence_pars_fragment:Jp,opaque_fragment:$p,packing:Kp,premultiplied_alpha_fragment:jp,project_vertex:Qp,dithering_fragment:tm,dithering_pars_fragment:em,roughnessmap_fragment:nm,roughnessmap_pars_fragment:im,shadowmap_pars_fragment:sm,shadowmap_pars_vertex:rm,shadowmap_vertex:am,shadowmask_pars_fragment:om,skinbase_vertex:lm,skinning_pars_vertex:cm,skinning_vertex:hm,skinnormal_vertex:um,specularmap_fragment:dm,specularmap_pars_fragment:fm,tonemapping_fragment:pm,tonemapping_pars_fragment:mm,transmission_fragment:gm,transmission_pars_fragment:_m,uv_pars_fragment:xm,uv_pars_vertex:ym,uv_vertex:vm,worldpos_vertex:Mm,background_vert:Sm,background_frag:bm,backgroundCube_vert:Em,backgroundCube_frag:Tm,cube_vert:wm,cube_frag:Am,depth_vert:Rm,depth_frag:Cm,distance_vert:Pm,distance_frag:Im,equirect_vert:Lm,equirect_frag:Dm,linedashed_vert:Um,linedashed_frag:Nm,meshbasic_vert:Fm,meshbasic_frag:Bm,meshlambert_vert:Om,meshlambert_frag:zm,meshmatcap_vert:Hm,meshmatcap_frag:km,meshnormal_vert:Gm,meshnormal_frag:Vm,meshphong_vert:Wm,meshphong_frag:Xm,meshphysical_vert:Ym,meshphysical_frag:qm,meshtoon_vert:Zm,meshtoon_frag:Jm,points_vert:$m,points_frag:Km,shadow_vert:jm,shadow_frag:Qm,sprite_vert:t0,sprite_frag:e0},yt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new L},probesMax:{value:new L},probesResolution:{value:new L}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},jn={basic:{uniforms:cn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:cn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:cn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:cn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:cn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:cn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:cn([yt.points,yt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:cn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:cn([yt.common,yt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:cn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:cn([yt.sprite,yt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:cn([yt.common,yt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:cn([yt.lights,yt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};jn.physical={uniforms:cn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var Do={r:0,b:0,g:0},n0=new Ae,Eu=new Yt;Eu.set(-1,0,0,0,1,0,0,0,1);function i0(i,t,e,n,s,r){let o=new Xt(0),a=s===!0?0:1,c,l,h=null,d=0,u=null;function f(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){let M=E.backgroundBlurriness>0;A=t.get(A,M)}return A}function _(E){let A=!1,M=f(E);M===null?g(o,a):M&&M.isColor&&(g(M,1),A=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(E,A){let M=f(A);M&&(M.isCubeTexture||M.mapping===xr)?(l===void 0&&(l=new qt(new Ye(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:$i(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(n0.makeRotationFromEuler(A.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Eu),l.material.toneMapped=se.getTransfer(M.colorSpace)!==me,(h!==M||d!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new qt(new xe(2,2),new qe({name:"BackgroundMaterial",uniforms:$i(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=se.getTransfer(M.colorSpace)!==me,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function g(E,A){E.getRGB(Do,nc(i)),e.buffers.color.setClear(Do.r,Do.g,Do.b,A,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,A=1){o.set(E),a=A,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(E){a=E,g(o,a)},render:_,addToRenderList:y,dispose:p}}function s0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(D,O,H,I,z){let X=!1,Z=d(D,I,H,O);r!==Z&&(r=Z,l(r.object)),X=f(D,I,H,z),X&&_(D,I,H,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,M(D,O,H,I),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function c(){return i.createVertexArray()}function l(D){return i.bindVertexArray(D)}function h(D){return i.deleteVertexArray(D)}function d(D,O,H,I){let z=I.wireframe===!0,X=n[O.id];X===void 0&&(X={},n[O.id]=X);let Z=D.isInstancedMesh===!0?D.id:0,nt=X[Z];nt===void 0&&(nt={},X[Z]=nt);let K=nt[H.id];K===void 0&&(K={},nt[H.id]=K);let it=K[z];return it===void 0&&(it=u(c()),K[z]=it),it}function u(D){let O=[],H=[],I=[];for(let z=0;z<e;z++)O[z]=0,H[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:I,object:D,attributes:{},index:null}}function f(D,O,H,I){let z=r.attributes,X=O.attributes,Z=0,nt=H.getAttributes();for(let K in nt)if(nt[K].location>=0){let tt=z[K],Lt=X[K];if(Lt===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(Lt=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(Lt=D.instanceColor)),tt===void 0||tt.attribute!==Lt||Lt&&tt.data!==Lt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==I}function _(D,O,H,I){let z={},X=O.attributes,Z=0,nt=H.getAttributes();for(let K in nt)if(nt[K].location>=0){let tt=X[K];tt===void 0&&(K==="instanceMatrix"&&D.instanceMatrix&&(tt=D.instanceMatrix),K==="instanceColor"&&D.instanceColor&&(tt=D.instanceColor));let Lt={};Lt.attribute=tt,tt&&tt.data&&(Lt.data=tt.data),z[K]=Lt,Z++}r.attributes=z,r.attributesNum=Z,r.index=I}function y(){let D=r.newAttributes;for(let O=0,H=D.length;O<H;O++)D[O]=0}function g(D){p(D,0)}function p(D,O){let H=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;H[D]=1,I[D]===0&&(i.enableVertexAttribArray(D),I[D]=1),z[D]!==O&&(i.vertexAttribDivisor(D,O),z[D]=O)}function E(){let D=r.newAttributes,O=r.enabledAttributes;for(let H=0,I=O.length;H<I;H++)O[H]!==D[H]&&(i.disableVertexAttribArray(H),O[H]=0)}function A(D,O,H,I,z,X,Z){Z===!0?i.vertexAttribIPointer(D,O,H,z,X):i.vertexAttribPointer(D,O,H,I,z,X)}function M(D,O,H,I){y();let z=I.attributes,X=H.getAttributes(),Z=O.defaultAttributeValues;for(let nt in X){let K=X[nt];if(K.location>=0){let it=z[nt];if(it===void 0&&(nt==="instanceMatrix"&&D.instanceMatrix&&(it=D.instanceMatrix),nt==="instanceColor"&&D.instanceColor&&(it=D.instanceColor)),it!==void 0){let tt=it.normalized,Lt=it.itemSize,Ct=t.get(it);if(Ct===void 0)continue;let Ft=Ct.buffer,Bt=Ct.type,Vt=Ct.bytesPerElement,J=Bt===i.INT||Bt===i.UNSIGNED_INT||it.gpuType===qa;if(it.isInterleavedBufferAttribute){let j=it.data,q=j.stride,rt=it.offset;if(j.isInstancedInterleavedBuffer){for(let et=0;et<K.locationSize;et++)p(K.location+et,j.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let et=0;et<K.locationSize;et++)g(K.location+et);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let et=0;et<K.locationSize;et++)A(K.location+et,Lt/K.locationSize,Bt,tt,q*Vt,(rt+Lt/K.locationSize*et)*Vt,J)}else{if(it.isInstancedBufferAttribute){for(let j=0;j<K.locationSize;j++)p(K.location+j,it.meshPerAttribute);D.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let j=0;j<K.locationSize;j++)g(K.location+j);i.bindBuffer(i.ARRAY_BUFFER,Ft);for(let j=0;j<K.locationSize;j++)A(K.location+j,Lt/K.locationSize,Bt,tt,Lt*Vt,Lt/K.locationSize*j*Vt,J)}}else if(Z!==void 0){let tt=Z[nt];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(K.location,tt);break;case 3:i.vertexAttrib3fv(K.location,tt);break;case 4:i.vertexAttrib4fv(K.location,tt);break;default:i.vertexAttrib1fv(K.location,tt)}}}}E()}function v(){T();for(let D in n){let O=n[D];for(let H in O){let I=O[H];for(let z in I){let X=I[z];for(let Z in X)h(X[Z].object),delete X[Z];delete I[z]}}delete n[D]}}function b(D){if(n[D.id]===void 0)return;let O=n[D.id];for(let H in O){let I=O[H];for(let z in I){let X=I[z];for(let Z in X)h(X[Z].object),delete X[Z];delete I[z]}}delete n[D.id]}function R(D){for(let O in n){let H=n[O];for(let I in H){let z=H[I];if(z[D.id]===void 0)continue;let X=z[D.id];for(let Z in X)h(X[Z].object),delete X[Z];delete z[D.id]}}}function x(D){for(let O in n){let H=n[O],I=D.isInstancedMesh===!0?D.id:0,z=H[I];if(z!==void 0){for(let X in z){let Z=z[X];for(let nt in Z)h(Z[nt].object),delete Z[nt];delete z[X]}delete H[I],Object.keys(H).length===0&&delete n[O]}}}function T(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:C,dispose:v,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:g,disableUnusedAttributes:E}}function r0(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function a0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==wn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let x=R===Bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==_n&&R!==Fn&&!x&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(zt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:M,maxSamples:v,samples:b}}function o0(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ln,a=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let _=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,p=i.get(d);if(!s||_===null||_.length===0||r&&!g)r?h(null):l();else{let E=r?0:n,A=E*4,M=p.clippingState||null;c.value=M,M=h(_,u,A,f);for(let v=0;v!==A;++v)M[v]=e[v];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,_){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=c.value,_!==!0||g===null){let p=f+y*4,E=u.matrixWorldInverse;a.getNormalMatrix(E),(g===null||g.length<p)&&(g=new Float32Array(p));for(let A=0,M=f;A!==y;++A,M+=4)o.copy(d[A]).applyMatrix4(E,a),o.normal.toArray(g,M),g[M+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}var Us=4,l0=6,c0=20,h0=256,wr=new Rs,nu=new Xt,uc=null,dc=0,fc=0,pc=!1,u0=new L,Ki=new L,No=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=u0}=r;uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ru(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(uc,dc,fc),this._renderer.xr.enabled=pc,t.scissorTest=!1,Ds(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ii||t.mapping===Zi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),uc=this._renderer.getRenderTarget(),dc=this._renderer.getActiveCubeFace(),fc=this._renderer.getActiveMipmapLevel(),pc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:Bn,format:wn,colorSpace:Zs,depthBuffer:!1},s=iu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=iu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=d0(r)),this._blurMaterial=p0(r,t,e),this._ggxMaterial=f0(r,t,e)}return s}_compileMaterial(t){let e=new qt(new _e,t);this._renderer.compile(e,wr)}_sceneToCubeUV(t,e,n,s,r){let c=new je(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(nu),d.toneMapping=Un,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new qt(new Ye,new De({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,p=!1,E=t.background;E?E.isColor&&(g.color.copy(E),t.background=null,p=!0):(g.color.copy(nu),p=!0);for(let A=0;A<6;A++){let M=A%3;M===0?(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[A],r.y,r.z)):M===1?(c.up.set(0,0,l[A]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[A],r.z)):(c.up.set(0,l[A],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[A]));let v=this._cubeSize;Ds(s,M*v,A>2?v:0,v,v),d.setRenderTarget(s),p&&d.render(y,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Ii||t.mapping===Zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ru()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=su());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Ds(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,wr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:_}=this,y=this._sizeLods[n],g=3*y*(n>_-Us?n-_+Us:0),p=4*(this._cubeSize-y);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=_-e,Ds(r,g,p,3*y,2*y),s.setRenderTarget(r),s.render(a,wr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-n,Ds(t,g,p,3*y,2*y),s.setRenderTarget(t),s.render(a,wr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Us?s-this._lodMax+Us:0),u=4*(this._cubeSize-h);Ds(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(c,wr)}};function d0(i){let t=[],e=[],n=i,s=i-Us+1+l0;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,_=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let p=0;p<d;p++){let E=p%3*2/3-1,A=p>2?0:-1,M=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];_.set(M,f*u*p);for(let v=0;v<u;v++){let b=h[v*2]*2-1,R=h[v*2+1]*2-1;p===0?Ki.set(1,R,b):p===1?Ki.set(-b,1,-R):p===2?Ki.set(-b,R,1):p===3?Ki.set(-1,R,-b):p===4?Ki.set(-b,-1,R):Ki.set(b,R,-1),Ki.toArray(y,(p*u+v)*f)}}let g=new _e;g.setAttribute("position",new Ie(_,f)),g.setAttribute("outputDirection",new Ie(y,f)),e.push(new qt(g,null)),n>Us&&n--}return{lodMeshes:e,sizeLods:t}}function iu(i,t,e){let n=new mn(i,t,e);return n.texture.mapping=xr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ds(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function f0(i,t,e){return new qe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:h0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Oo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function p0(i,t,e){return new qe({name:"SphericalGaussianBlur",defines:{SAMPLES:c0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Oo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function su(){return new qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function ru(){return new qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function Oo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fo=class extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new sr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ye(5,5,5),r=new qe({name:"CubemapFromEquirect",uniforms:$i(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:$n});r.uniforms.tEquirect.value=e;let o=new qt(s,r),a=e.minFilter;return e.minFilter===gn&&(e.minFilter=ke),new ka(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function m0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Wa||f===Xa)if(t.has(u)){let _=t.get(u).texture;return a(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let y=new Fo(_.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",l),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,_=f===Wa||f===Xa,y=f===Ii||f===Zi;if(_||y){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new No(i)),g=_?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let E=u.image;return _&&E&&E.height>0||y&&E&&c(E)?(n===null&&(n=new No(i)),g=_?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===Wa?u.mapping=Ii:f===Xa&&(u.mapping=Zi),u}function c(u){let f=0,_=6;for(let y=0;y<_;y++)u[y]!==void 0&&f++;return f===_}function l(u){let f=u.target;f.removeEventListener("dispose",l);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function g0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Vi("WebGLRenderer: "+n+" extension not supported."),s}}}function _0(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,_=d.attributes.position,y=0;if(_===void 0)return;if(f!==null){let E=f.array;y=f.version;for(let A=0,M=E.length;A<M;A+=3){let v=E[A+0],b=E[A+1],R=E[A+2];u.push(v,b,b,R,R,v)}}else{let E=_.array;y=_.version;for(let A=0,M=E.length/3-1;A<M;A+=3){let v=A+0,b=A+1,R=A+2;u.push(v,b,b,R,R,v)}}let g=new(_.count>=65535?nr:er)(u,1);g.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function x0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let g=0;g<f;g++)y+=u[g];e.update(y,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function y0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Gt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function v0(i,t,e){let n=new WeakMap,s=new Le;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let T=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],A=0;f===!0&&(A=1),_===!0&&(A=2),y===!0&&(A=3);let M=a.attributes.position.count*A,v=1;M>t.maxTextureSize&&(v=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let b=new Float32Array(M*v*4*d),R=new Ks(b,M,v,d);R.type=Fn,R.needsUpdate=!0;let x=A*4;for(let C=0;C<d;C++){let D=g[C],O=p[C],H=E[C],I=M*v*4*C;for(let z=0;z<D.count;z++){let X=z*x;f===!0&&(s.fromBufferAttribute(D,z),b[I+X+0]=s.x,b[I+X+1]=s.y,b[I+X+2]=s.z,b[I+X+3]=0),_===!0&&(s.fromBufferAttribute(O,z),b[I+X+4]=s.x,b[I+X+5]=s.y,b[I+X+6]=s.z,b[I+X+7]=0),y===!0&&(s.fromBufferAttribute(H,z),b[I+X+8]=s.x,b[I+X+9]=s.y,b[I+X+10]=s.z,b[I+X+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new Nt(M,v)},n.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let _=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function M0(i,t,e,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var S0={[Ol]:"LINEAR_TONE_MAPPING",[zl]:"REINHARD_TONE_MAPPING",[Hl]:"CINEON_TONE_MAPPING",[_r]:"ACES_FILMIC_TONE_MAPPING",[Gl]:"AGX_TONE_MAPPING",[Vl]:"NEUTRAL_TONE_MAPPING",[kl]:"CUSTOM_TONE_MAPPING"};function b0(i,t,e,n,s,r){let o=new mn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new _e;l.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new re([0,2,0,0,2,0],2));let h=new Ra({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new qt(l,h),u=new Rs(-1,1,1,-1,0,1),f=null,_=null,y=!1,g,p=null,E=[],A=!1;this.setSize=function(M,v){o.setSize(M,v),a!==null&&a.setSize(M,v),c!==null&&c.setSize(M,v);for(let b=0;b<E.length;b++){let R=E[b];R.setSize&&R.setSize(M,v)}},this.setEffects=function(M){E=M,A=E.length>0&&E[0].isRenderPass===!0;let v=o.width,b=o.height;E.length>0&&a===null&&(a=new mn(v,b,{type:Bn,depthBuffer:!1,stencilBuffer:!1}),c=new mn(v,b,{type:Bn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<E.length;R++){let x=E[R];x.setSize&&x.setSize(v,b)}},this.begin=function(M,v){if(y||M.toneMapping===Un&&E.length===0)return!1;if(p=v,v!==null){let b=v.width,R=v.height;(o.width!==b||o.height!==R)&&this.setSize(b,R)}return A===!1&&M.setRenderTarget(o),g=M.toneMapping,M.toneMapping=Un,!0},this.hasRenderPass=function(){return A},this.end=function(M,v){M.toneMapping=g,y=!0;let b=o,R=a;for(let x=0;x<E.length;x++){let T=E[x];T.enabled!==!1&&(T.render(M,R,b,v),T.needsSwap!==!1&&(b=R,R=R===a?c:a))}if(f!==M.outputColorSpace||_!==M.toneMapping){f=M.outputColorSpace,_=M.toneMapping,h.defines={},se.getTransfer(f)===me&&(h.defines.SRGB_TRANSFER="");let x=S0[_];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(p),M.render(d,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var Tu=new dn,_c=new bi(1,1),wu=new Ks,Au=new xa,Ru=new sr,au=[],ou=[],lu=new Float32Array(16),cu=new Float32Array(9),hu=new Float32Array(4);function Fs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=au[s];if(r===void 0&&(r=new Float32Array(s),au[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function zo(i,t){let e=ou[t];e===void 0&&(e=new Int32Array(t),ou[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function E0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function T0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Je(e,t)}}function w0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Je(e,t)}}function A0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Je(e,t)}}function R0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;hu.set(n),i.uniformMatrix2fv(this.addr,!1,hu),Je(e,n)}}function C0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;cu.set(n),i.uniformMatrix3fv(this.addr,!1,cu),Je(e,n)}}function P0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Je(e,t)}else{if(Ze(e,n))return;lu.set(n),i.uniformMatrix4fv(this.addr,!1,lu),Je(e,n)}}function I0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function L0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Je(e,t)}}function D0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Je(e,t)}}function U0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Je(e,t)}}function N0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function F0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Je(e,t)}}function B0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Je(e,t)}}function O0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Je(e,t)}}function z0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_c.compareFunction=e.isReversedDepthBuffer()?Lo:Io,r=_c):r=Tu,e.setTexture2D(t||r,s)}function H0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Au,s)}function k0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Ru,s)}function G0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||wu,s)}function V0(i){switch(i){case 5126:return E0;case 35664:return T0;case 35665:return w0;case 35666:return A0;case 35674:return R0;case 35675:return C0;case 35676:return P0;case 5124:case 35670:return I0;case 35667:case 35671:return L0;case 35668:case 35672:return D0;case 35669:case 35673:return U0;case 5125:return N0;case 36294:return F0;case 36295:return B0;case 36296:return O0;case 35678:case 36198:case 36298:case 36306:case 35682:return z0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return G0}}function W0(i,t){i.uniform1fv(this.addr,t)}function X0(i,t){let e=Fs(t,this.size,2);i.uniform2fv(this.addr,e)}function Y0(i,t){let e=Fs(t,this.size,3);i.uniform3fv(this.addr,e)}function q0(i,t){let e=Fs(t,this.size,4);i.uniform4fv(this.addr,e)}function Z0(i,t){let e=Fs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function J0(i,t){let e=Fs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $0(i,t){let e=Fs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function K0(i,t){i.uniform1iv(this.addr,t)}function j0(i,t){i.uniform2iv(this.addr,t)}function Q0(i,t){i.uniform3iv(this.addr,t)}function tg(i,t){i.uniform4iv(this.addr,t)}function eg(i,t){i.uniform1uiv(this.addr,t)}function ng(i,t){i.uniform2uiv(this.addr,t)}function ig(i,t){i.uniform3uiv(this.addr,t)}function sg(i,t){i.uniform4uiv(this.addr,t)}function rg(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=_c:o=Tu;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function ag(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Au,r[o])}function og(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Ru,r[o])}function lg(i,t,e){let n=this.cache,s=t.length,r=zo(e,s);Ze(n,r)||(i.uniform1iv(this.addr,r),Je(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||wu,r[o])}function cg(i){switch(i){case 5126:return W0;case 35664:return X0;case 35665:return Y0;case 35666:return q0;case 35674:return Z0;case 35675:return J0;case 35676:return $0;case 5124:case 35670:return K0;case 35667:case 35671:return j0;case 35668:case 35672:return Q0;case 35669:case 35673:return tg;case 5125:return eg;case 36294:return ng;case 36295:return ig;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return lg}}var xc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=V0(e.type)}},yc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=cg(e.type)}},vc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},mc=/(\w+)(\])?(\[|\.)?/g;function uu(i,t){i.seq.push(t),i.map[t.id]=t}function hg(i,t,e){let n=i.name,s=n.length;for(mc.lastIndex=0;;){let r=mc.exec(n),o=mc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){uu(e,l===void 0?new xc(a,i,t):new yc(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new vc(a),uu(e,d)),e=d}}}var Ns=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);hg(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function du(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ug=37297,dg=0;function fg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var fu=new Yt;function pg(i){se._getMatrix(fu,se.workingColorSpace,i);let t=`mat3( ${fu.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case Js:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function pu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+fg(i.getShaderSource(t),a)}else return r}function mg(i,t){let e=pg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var gg={[Ol]:"Linear",[zl]:"Reinhard",[Hl]:"Cineon",[_r]:"ACESFilmic",[Gl]:"AgX",[Vl]:"Neutral",[kl]:"Custom"};function _g(i,t){let e=gg[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Uo=new L;function xg(){se.getLuminanceCoefficients(Uo);let i=Uo.x.toFixed(4),t=Uo.y.toFixed(4),e=Uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function vg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Mg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Rr(i){return i!==""}function mu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Sg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mc(i){return i.replace(Sg,Eg)}var bg=new Map;function Eg(i,t){let e=Kt[t];if(e===void 0){let n=bg.get(t);if(n!==void 0)e=Kt[n],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Mc(e)}var Tg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _u(i){return i.replace(Tg,wg)}function wg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xu(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Ag={[gr]:"SHADOWMAP_TYPE_PCF",[Cs]:"SHADOWMAP_TYPE_VSM"};function Rg(i){return Ag[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Cg={[Ii]:"ENVMAP_TYPE_CUBE",[Zi]:"ENVMAP_TYPE_CUBE",[xr]:"ENVMAP_TYPE_CUBE_UV"};function Pg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Cg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ig={[Zi]:"ENVMAP_MODE_REFRACTION"};function Lg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ig[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Dg={[Bl]:"ENVMAP_BLENDING_MULTIPLY",[Nh]:"ENVMAP_BLENDING_MIX",[Fh]:"ENVMAP_BLENDING_ADD"};function Ug(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Dg[i.combine]||"ENVMAP_BLENDING_NONE"}function Ng(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Fg(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Rg(e),l=Pg(e),h=Lg(e),d=Ug(e),u=Ng(e),f=yg(e),_=vg(r),y=s.createProgram(),g,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Rr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Rr).join(`
`),p.length>0&&(p+=`
`)):(g=[xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),p=[xu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Kt.tonemapping_pars_fragment:"",e.toneMapping!==Un?_g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,mg("linearToOutputTexel",e.outputColorSpace),xg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rr).join(`
`)),o=Mc(o),o=mu(o,e),o=gu(o,e),a=Mc(a),a=mu(a,e),a=gu(a,e),o=_u(o),a=_u(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=E+g+o,M=E+p+a,v=du(s,s.VERTEX_SHADER,A),b=du(s,s.FRAGMENT_SHADER,M);s.attachShader(y,v),s.attachShader(y,b),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(D){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(y)||"",H=s.getShaderInfoLog(v)||"",I=s.getShaderInfoLog(b)||"",z=O.trim(),X=H.trim(),Z=I.trim(),nt=!0,K=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,v,b);else{let it=pu(s,v,"vertex"),tt=pu(s,b,"fragment");Gt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+it+`
`+tt)}else z!==""?zt("WebGLProgram: Program Info Log:",z):(X===""||Z==="")&&(K=!1);K&&(D.diagnostics={runnable:nt,programLog:z,vertexShader:{log:X,prefix:g},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(v),s.deleteShader(b),x=new Ns(s,y),T=Mg(s,y)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(y,ug)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=dg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=v,this.fragmentShader=b,this}var Bg=0,Sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new bc(t),e.set(t,n)),n}},bc=class{constructor(t){this.id=Bg++,this.code=t,this.usedTimes=0}};function Og(i){return i===Di||i===Er||i===Tr}function zg(i,t,e,n,s,r){let o=new js,a=new Sc,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function y(x,T,C,D,O,H){let I=D.fog,z=O.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,nt=t.get(x.envMap||X,Z),K=nt&&nt.mapping===xr?nt.image.height:null,it=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&zt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let tt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Lt=tt!==void 0?tt.length:0,Ct=0;z.morphAttributes.position!==void 0&&(Ct=1),z.morphAttributes.normal!==void 0&&(Ct=2),z.morphAttributes.color!==void 0&&(Ct=3);let Ft,Bt,Vt,J;if(it){let oe=jn[it];Ft=oe.vertexShader,Bt=oe.fragmentShader}else{Ft=x.vertexShader,Bt=x.fragmentShader;let oe=a.getVertexShaderStage(x),ce=a.getFragmentShaderStage(x);a.update(x,oe,ce),Vt=oe.id,J=ce.id}let j=i.getRenderTarget(),q=i.state.buffers.depth.getReversed(),rt=O.isInstancedMesh===!0,et=O.isBatchedMesh===!0,At=!!x.map,Qt=!!x.matcap,Ut=!!nt,Wt=!!x.aoMap,Jt=!!x.lightMap,Ht=!!x.bumpMap&&x.wireframe===!1,jt=!!x.normalMap,ue=!!x.displacementMap,ft=!!x.emissiveMap,de=!!x.metalnessMap,ve=!!x.roughnessMap,N=x.anisotropy>0,Ot=x.clearcoat>0,ne=x.dispersion>0,w=x.retroreflectivity>0,m=x.iridescence>0,P=x.sheen>0,U=x.transmission>0,W=N&&!!x.anisotropyMap,at=Ot&&!!x.clearcoatMap,ht=Ot&&!!x.clearcoatNormalMap,V=Ot&&!!x.clearcoatRoughnessMap,Q=m&&!!x.iridescenceMap,dt=m&&!!x.iridescenceThicknessMap,St=P&&!!x.sheenColorMap,ct=P&&!!x.sheenRoughnessMap,ot=!!x.specularMap,xt=!!x.specularColorMap,_t=!!x.specularIntensityMap,kt=U&&!!x.transmissionMap,F=U&&!!x.thicknessMap,pt=!!x.gradientMap,$=!!x.alphaMap,lt=x.alphaTest>0,ut=!!x.alphaHash,st=!!x.extensions,Rt=Un;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Rt=i.toneMapping);let bt={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:Ft,fragmentShader:Bt,defines:x.defines,customVertexShaderID:Vt,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:et,batchingColor:et&&O._colorsTexture!==null,instancing:rt,instancingColor:rt&&O.instanceColor!==null,instancingMorph:rt&&O.morphTexture!==null,outputColorSpace:j===null?i.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:At,matcap:Qt,envMap:Ut,envMapMode:Ut&&nt.mapping,envMapCubeUVHeight:K,aoMap:Wt,lightMap:Jt,bumpMap:Ht,normalMap:jt,displacementMap:ue,emissiveMap:ft,normalMapObjectSpace:jt&&x.normalMapType===zh,normalMapTangentSpace:jt&&x.normalMapType===Po,packedNormalMap:jt&&x.normalMapType===Po&&Og(x.normalMap.format),metalnessMap:de,roughnessMap:ve,anisotropy:N,anisotropyMap:W,clearcoat:Ot,clearcoatMap:at,clearcoatNormalMap:ht,clearcoatRoughnessMap:V,dispersion:ne,retroreflection:w,iridescence:m,iridescenceMap:Q,iridescenceThicknessMap:dt,sheen:P,sheenColorMap:St,sheenRoughnessMap:ct,specularMap:ot,specularColorMap:xt,specularIntensityMap:_t,transmission:U,transmissionMap:kt,thicknessMap:F,gradientMap:pt,opaque:x.transparent===!1&&x.blending===li&&x.alphaToCoverage===!1,alphaMap:$,alphaTest:lt,alphaHash:ut,combine:x.combine,mapUv:At&&_(x.map.channel),aoMapUv:Wt&&_(x.aoMap.channel),lightMapUv:Jt&&_(x.lightMap.channel),bumpMapUv:Ht&&_(x.bumpMap.channel),normalMapUv:jt&&_(x.normalMap.channel),displacementMapUv:ue&&_(x.displacementMap.channel),emissiveMapUv:ft&&_(x.emissiveMap.channel),metalnessMapUv:de&&_(x.metalnessMap.channel),roughnessMapUv:ve&&_(x.roughnessMap.channel),anisotropyMapUv:W&&_(x.anisotropyMap.channel),clearcoatMapUv:at&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ht&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:V&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:St&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:ct&&_(x.sheenRoughnessMap.channel),specularMapUv:ot&&_(x.specularMap.channel),specularColorMapUv:xt&&_(x.specularColorMap.channel),specularIntensityMapUv:_t&&_(x.specularIntensityMap.channel),transmissionMapUv:kt&&_(x.transmissionMap.channel),thicknessMapUv:F&&_(x.thicknessMap.channel),alphaMapUv:$&&_(x.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(jt||N),vertexNormals:!!z.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!z.attributes.uv&&(At||$),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||z.attributes.normal===void 0&&jt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:q,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:Lt,morphTextureStride:Ct,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:H.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Rt,decodeVideoTexture:At&&x.map.isVideoTexture===!0&&se.getTransfer(x.map.colorSpace)===me,decodeVideoTextureEmissive:ft&&x.emissiveMap.isVideoTexture===!0&&se.getTransfer(x.emissiveMap.colorSpace)===me,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ye,flipSided:x.side===en,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:st&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&x.extensions.multiDraw===!0||et)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function g(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(T,x),E(T,x),T.push(i.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function E(x,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.retroreflection&&o.enable(24),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),T.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function A(x){let T=f[x.type],C;if(T){let D=jn[T];C=Qh.clone(D.uniforms)}else C=x.uniforms;return C}function M(x,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new Fg(i,T,x,s),l.push(C),h.set(T,C)),C}function v(x){if(--x.usedTimes===0){let T=l.indexOf(x);l[T]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function R(){a.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:A,acquireProgram:M,releaseProgram:v,releaseShaderCache:b,programs:l,dispose:R}}function Hg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function kg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function yu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function vu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,_,y,g,p){let E=i[t];return E===void 0?(E={id:u.id,object:u,geometry:f,material:_,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:p},i[t]=E):(E.id=u.id,E.object=u,E.geometry=f,E.material=_,E.materialVariant=o(u),E.groupOrder=y,E.renderOrder=u.renderOrder,E.z=g,E.group=p),t++,E}function c(u,f,_,y,g,p,E){E.reversedDepth===!0&&(g=-g);let A=a(u,f,_,y,g,p);_.transmission>0?n.push(A):_.transparent===!0?s.push(A):e.push(A)}function l(u,f,_,y,g,p){let E=a(u,f,_,y,g,p);_.transmission>0?n.unshift(E):_.transparent===!0?s.unshift(E):e.unshift(E)}function h(u,f){e.length>1&&e.sort(u||kg),n.length>1&&n.sort(f||yu),s.length>1&&s.sort(f||yu)}function d(){for(let u=t,f=i.length;u<f;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function Gg(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new vu,i.set(n,[o])):s>=r.length?(o=new vu,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new Xt};break;case"SpotLight":e={position:new L,direction:new L,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Wg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Xg=0;function Yg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function qg(i){let t=new Vg,e=Wg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let s=new L,r=new Ae,o=new Ae;function a(l){let h=0,d=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,_=0,y=0,g=0,p=0,E=0,A=0,M=0,v=0,b=0,R=0,x=0,T=0,C=0;l.sort(Yg);for(let O=0,H=l.length;O<H;O++){let I=l[O],z=I.color,X=I.intensity,Z=I.distance,nt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Di?nt=I.shadow.map.texture:nt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=z.r*X,d+=z.g*X,u+=z.b*X;else if(I.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(I.sh.coefficients[K],X);C++}else if(I.isSunLight){let K=t.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let it=I.shadow,tt=e.get(I);tt.shadowIntensity=it.intensity,tt.shadowBias=it.bias,tt.shadowNormalBias=it.normalBias,tt.shadowRadius=it.radius,tt.shadowMapSize.copy(it.mapSize).multiply(it.getFrameExtents()),n.sunShadow[_]=tt,n.sunShadowMap[_]=nt;let Lt=it.getViewportCount();for(let Ct=0;Ct<Lt;Ct++)n.sunShadowMatrix[y+Ct]=it.getMatrix(Ct),n.sunShadowCascade[y+Ct]=it._cascadeData[Ct];y+=Lt,_++}n.sun[f]=K,f++}else if(I.isDirectionalLight){let K=t.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let it=I.shadow,tt=e.get(I);tt.shadowIntensity=it.intensity,tt.shadowBias=it.bias,tt.shadowNormalBias=it.normalBias,tt.shadowRadius=it.radius,tt.shadowMapSize=it.mapSize,n.directionalShadow[g]=tt,n.directionalShadowMap[g]=nt,n.directionalShadowMatrix[g]=I.shadow.matrix,v++}n.directional[g]=K,g++}else if(I.isSpotLight){let K=t.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(z).multiplyScalar(X),K.distance=Z,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,n.spot[E]=K;let it=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,it.updateMatrices(I),I.castShadow&&T++),n.spotLightMatrix[E]=it.matrix,I.castShadow){let tt=e.get(I);tt.shadowIntensity=it.intensity,tt.shadowBias=it.bias,tt.shadowNormalBias=it.normalBias,tt.shadowRadius=it.radius,tt.shadowMapSize=it.mapSize,n.spotShadow[E]=tt,n.spotShadowMap[E]=nt,R++}E++}else if(I.isRectAreaLight){let K=t.get(I);K.color.copy(z).multiplyScalar(X),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),n.rectArea[A]=K,A++}else if(I.isPointLight){let K=t.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){let it=I.shadow,tt=e.get(I);tt.shadowIntensity=it.intensity,tt.shadowBias=it.bias,tt.shadowNormalBias=it.normalBias,tt.shadowRadius=it.radius,tt.shadowMapSize=it.mapSize,tt.shadowCameraNear=it.camera.near,tt.shadowCameraFar=it.camera.far,n.pointShadow[p]=tt,n.pointShadowMap[p]=nt,n.pointShadowMatrix[p]=I.shadow.matrix,b++}n.point[p]=K,p++}else if(I.isHemisphereLight){let K=t.get(I);K.skyColor.copy(I.color).multiplyScalar(X),K.groundColor.copy(I.groundColor).multiplyScalar(X),n.hemi[M]=K,M++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let D=n.hash;(D.sunLength!==f||D.directionalLength!==g||D.pointLength!==p||D.spotLength!==E||D.rectAreaLength!==A||D.hemiLength!==M||D.numSunShadows!==_||D.numDirectionalShadows!==v||D.numPointShadows!==b||D.numSpotShadows!==R||D.numSpotMaps!==x||D.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=E,n.rectArea.length=A,n.point.length=p,n.hemi.length=M,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+x-T,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,D.sunLength=f,D.directionalLength=g,D.pointLength=p,D.spotLength=E,D.rectAreaLength=A,D.hemiLength=M,D.numSunShadows=_,D.numDirectionalShadows=v,D.numPointShadows=b,D.numSpotShadows=R,D.numSpotMaps=x,D.numLightProbes=C,n.version=Xg++)}function c(l,h){let d=0,u=0,f=0,_=0,y=0,g=0,p=h.matrixWorldInverse;for(let E=0,A=l.length;E<A;E++){let M=l[E];if(M.isSunLight){let v=n.sun[d];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(p),d++}else if(M.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),u++}else if(M.isSpotLight){let v=n.spot[_];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(p),_++}else if(M.isRectAreaLight){let v=n.rectArea[y];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let v=n.hemi[g];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:a,setupView:c,state:n}}function Mu(i){let t=new qg(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function Zg(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new Mu(i),t.set(s,[a])):r>=o.length?(a=new Mu(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$g=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Kg=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],jg=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],Su=new Ae,Ar=new L,gc=new L;function Qg(i,t,e){let n=new ws,s=new Nt,r=new Nt,o=new Le,a=new Ca,c=new Pa,l={},h=e.maxTextureSize,d={[Pi]:en,[en]:Pi,[ye]:ye},u=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:Jg,fragmentShader:$g}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let _=new _e;_.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new qt(_,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gr;let p=this.type;this.render=function(b,R,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===gh&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gr);let T=i.getRenderTarget(),C=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),O=i.state;O.setBlending($n),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=p!==this.type;H&&R.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=b.length;I<z;I++){let X=b[I],Z=X.shadow;if(Z===void 0){zt("WebGLShadowMap:",X,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let nt=Z.getFrameExtents();s.multiply(nt),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,Z.mapSize.y=r.y));let K=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=K,Z.map===null||H===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===Cs){if(X.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new mn(s.x,s.y,{format:Di,type:Bn,minFilter:ke,magFilter:ke,generateMipmaps:!1}),Z.map.texture.name=X.name+".shadowMap",Z.map.depthTexture=new bi(s.x,s.y,Fn),Z.map.depthTexture.name=X.name+".shadowMapDepth",Z.map.depthTexture.format=Xn,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Qe,Z.map.depthTexture.magFilter=Qe}else X.isPointLight?(Z.map=new Fo(s.x),Z.map.depthTexture=new va(s.x,Nn)):(Z.map=new mn(s.x,s.y),Z.map.depthTexture=new bi(s.x,s.y,Nn)),Z.map.depthTexture.name=X.name+".shadowMap",Z.map.depthTexture.format=Xn,this.type===gr?(Z.map.depthTexture.compareFunction=K?Lo:Io,Z.map.depthTexture.minFilter=ke,Z.map.depthTexture.magFilter=ke):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Qe,Z.map.depthTexture.magFilter=Qe);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let it=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();X.isPointLight!==!0&&Z.updateMatrices(X,x);for(let tt=0;tt<it;tt++){let Lt=Z.getCamera(tt);if(X.isPointLight){let Ct=Z.camera,Ft=Z.matrix,Bt=X.distance||Ct.far;Bt!==Ct.far&&(Ct.far=Bt,Ct.updateProjectionMatrix()),Ar.setFromMatrixPosition(X.matrixWorld),Ct.position.copy(Ar),gc.copy(Ct.position),gc.add(Kg[tt]),Ct.up.copy(jg[tt]),Ct.lookAt(gc),Ct.updateMatrixWorld(),Ft.makeTranslation(-Ar.x,-Ar.y,-Ar.z),Su.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(Su,Ct.coordinateSystem,Ct.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,tt),i.clear();else{tt===0&&(i.setRenderTarget(Z.map),i.clear());let Ct=Z.getViewport(tt);o.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),O.viewport(o)}n=Z.getFrustum(tt),M(R,x,Lt,X,this.type)}Z.isPointLightShadow!==!0&&this.type===Cs&&E(Z,x),Z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(T,C,D)};function E(b,R){let x=t.update(y);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new mn(s.x,s.y,{format:Di,type:Bn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(R,null,x,u,y,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(R,null,x,f,y,null)}function A(b,R,x,T){let C=null,D=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)C=D;else if(C=x.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let O=C.uuid,H=R.uuid,I=l[O];I===void 0&&(I={},l[O]=I);let z=I[H];z===void 0&&(z=C.clone(),I[H]=z,R.addEventListener("dispose",v)),C=z}if(C.visible=R.visible,C.wireframe=R.wireframe,T===Cs?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let O=i.properties.get(C);O.light=x}return C}function M(b,R,x,T,C){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&C===Cs)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let H=t.update(b),I=b.material;if(Array.isArray(I)){let z=H.groups;for(let X=0,Z=z.length;X<Z;X++){let nt=z[X],K=I[nt.materialIndex];if(K&&K.visible){let it=A(b,K,T,C);b.onBeforeShadow(i,b,R,x,H,it,nt),i.renderBufferDirect(x,null,H,it,b,nt),b.onAfterShadow(i,b,R,x,H,it,nt)}}}else if(I.visible){let z=A(b,I,T,C);b.onBeforeShadow(i,b,R,x,H,z,null),i.renderBufferDirect(x,null,H,z,b,null),b.onAfterShadow(i,b,R,x,H,z,null)}}let O=b.children;for(let H=0,I=O.length;H<I;H++)M(O[H],R,x,T,C)}function v(b){b.target.removeEventListener("dispose",v);for(let x in l){let T=l[x],C=b.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function t_(i,t){function e(){let F=!1,pt=new Le,$=null,lt=new Le(0,0,0,0);return{setMask:function(ut){$!==ut&&!F&&(i.colorMask(ut,ut,ut,ut),$=ut)},setLocked:function(ut){F=ut},setClear:function(ut,st,Rt,bt,oe){oe===!0&&(ut*=bt,st*=bt,Rt*=bt),pt.set(ut,st,Rt,bt),lt.equals(pt)===!1&&(i.clearColor(ut,st,Rt,bt),lt.copy(pt))},reset:function(){F=!1,$=null,lt.set(-1,0,0,0)}}}function n(){let F=!1,pt=!1,$=null,lt=null,ut=null;return{setReversed:function(st){if(pt!==st){let Rt=t.get("EXT_clip_control");st?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),pt=st;let bt=ut;ut=null,this.setClear(bt)}},getReversed:function(){return pt},setTest:function(st){st?j(i.DEPTH_TEST):q(i.DEPTH_TEST)},setMask:function(st){$!==st&&!F&&(i.depthMask(st),$=st)},setFunc:function(st){if(pt&&(st=Kh[st]),lt!==st){switch(st){case oa:i.depthFunc(i.NEVER);break;case la:i.depthFunc(i.ALWAYS);break;case ca:i.depthFunc(i.LESS);break;case Ms:i.depthFunc(i.LEQUAL);break;case ha:i.depthFunc(i.EQUAL);break;case ua:i.depthFunc(i.GEQUAL);break;case da:i.depthFunc(i.GREATER);break;case fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=st}},setLocked:function(st){F=st},setClear:function(st){ut!==st&&(ut=st,pt&&(st=1-st),i.clearDepth(st))},reset:function(){F=!1,$=null,lt=null,ut=null,pt=!1}}}function s(){let F=!1,pt=null,$=null,lt=null,ut=null,st=null,Rt=null,bt=null,oe=null;return{setTest:function(ce){F||(ce?j(i.STENCIL_TEST):q(i.STENCIL_TEST))},setMask:function(ce){pt!==ce&&!F&&(i.stencilMask(ce),pt=ce)},setFunc:function(ce,mt,Tt){($!==ce||lt!==mt||ut!==Tt)&&(i.stencilFunc(ce,mt,Tt),$=ce,lt=mt,ut=Tt)},setOp:function(ce,mt,Tt){(st!==ce||Rt!==mt||bt!==Tt)&&(i.stencilOp(ce,mt,Tt),st=ce,Rt=mt,bt=Tt)},setLocked:function(ce){F=ce},setClear:function(ce){oe!==ce&&(i.clearStencil(ce),oe=ce)},reset:function(){F=!1,pt=null,$=null,lt=null,ut=null,st=null,Rt=null,bt=null,oe=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,_=[],y=null,g=!1,p=null,E=null,A=null,M=null,v=null,b=null,R=null,x=new Xt(0,0,0),T=0,C=!1,D=null,O=null,H=null,I=null,z=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,nt=0,K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(K)[1]),Z=nt>=1):K.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Z=nt>=2);let it=null,tt={},Lt=i.getParameter(i.SCISSOR_BOX),Ct=i.getParameter(i.VIEWPORT),Ft=new Le().fromArray(Lt),Bt=new Le().fromArray(Ct);function Vt(F,pt,$,lt){let ut=new Uint8Array(4),st=i.createTexture();i.bindTexture(F,st),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Rt=0;Rt<$;Rt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(pt,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,ut):i.texImage2D(pt+Rt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ut);return st}let J={};J[i.TEXTURE_2D]=Vt(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(i.DEPTH_TEST),o.setFunc(Ms),Ht(!1),jt(Ll),j(i.CULL_FACE),Wt($n);function j(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function q(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function rt(F,pt){return u[F]!==pt?(i.bindFramebuffer(F,pt),u[F]=pt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pt),!0):!1}function et(F,pt){let $=_,lt=!1;if(F){$=f.get(pt),$===void 0&&($=[],f.set(pt,$));let ut=F.textures;if($.length!==ut.length||$[0]!==i.COLOR_ATTACHMENT0){for(let st=0,Rt=ut.length;st<Rt;st++)$[st]=i.COLOR_ATTACHMENT0+st;$.length=ut.length,lt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,lt=!0);lt&&i.drawBuffers($)}function At(F){return y!==F?(i.useProgram(F),y=F,!0):!1}let Qt={[qi]:i.FUNC_ADD,[xh]:i.FUNC_SUBTRACT,[yh]:i.FUNC_REVERSE_SUBTRACT};Qt[vh]=i.MIN,Qt[Mh]=i.MAX;let Ut={[Sh]:i.ZERO,[bh]:i.ONE,[Eh]:i.SRC_COLOR,[Nl]:i.SRC_ALPHA,[Ph]:i.SRC_ALPHA_SATURATE,[Rh]:i.DST_COLOR,[wh]:i.DST_ALPHA,[Th]:i.ONE_MINUS_SRC_COLOR,[Fl]:i.ONE_MINUS_SRC_ALPHA,[Ch]:i.ONE_MINUS_DST_COLOR,[Ah]:i.ONE_MINUS_DST_ALPHA,[Ih]:i.CONSTANT_COLOR,[Lh]:i.ONE_MINUS_CONSTANT_COLOR,[Dh]:i.CONSTANT_ALPHA,[Uh]:i.ONE_MINUS_CONSTANT_ALPHA};function Wt(F,pt,$,lt,ut,st,Rt,bt,oe,ce){if(F===$n){g===!0&&(q(i.BLEND),g=!1);return}if(g===!1&&(j(i.BLEND),g=!0),F!==_h){if(F!==p||ce!==C){if((E!==qi||v!==qi)&&(i.blendEquation(i.FUNC_ADD),E=qi,v=qi),ce)switch(F){case li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fn:i.blendFunc(i.ONE,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ul:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Gt("WebGLState: Invalid blending: ",F);break}else switch(F){case li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Dl:Gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ul:Gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Gt("WebGLState: Invalid blending: ",F);break}A=null,M=null,b=null,R=null,x.set(0,0,0),T=0,p=F,C=ce}return}ut=ut||pt,st=st||$,Rt=Rt||lt,(pt!==E||ut!==v)&&(i.blendEquationSeparate(Qt[pt],Qt[ut]),E=pt,v=ut),($!==A||lt!==M||st!==b||Rt!==R)&&(i.blendFuncSeparate(Ut[$],Ut[lt],Ut[st],Ut[Rt]),A=$,M=lt,b=st,R=Rt),(bt.equals(x)===!1||oe!==T)&&(i.blendColor(bt.r,bt.g,bt.b,oe),x.copy(bt),T=oe),p=F,C=!1}function Jt(F,pt){F.side===ye?q(i.CULL_FACE):j(i.CULL_FACE);let $=F.side===en;pt&&($=!$),Ht($),F.blending===li&&F.transparent===!1?Wt($n):Wt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);let lt=F.stencilWrite;a.setTest(lt),lt&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ft(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?j(i.SAMPLE_ALPHA_TO_COVERAGE):q(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(F){D!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),D=F)}function jt(F){F!==ph?(j(i.CULL_FACE),F!==O&&(F===Ll?i.cullFace(i.BACK):F===mh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):q(i.CULL_FACE),O=F}function ue(F){F!==H&&(Z&&i.lineWidth(F),H=F)}function ft(F,pt,$){F?(j(i.POLYGON_OFFSET_FILL),(I!==pt||z!==$)&&(I=pt,z=$,o.getReversed()&&(pt=-pt),i.polygonOffset(pt,$))):q(i.POLYGON_OFFSET_FILL)}function de(F){F?j(i.SCISSOR_TEST):q(i.SCISSOR_TEST)}function ve(F){F===void 0&&(F=i.TEXTURE0+X-1),it!==F&&(i.activeTexture(F),it=F)}function N(F,pt,$){$===void 0&&(it===null?$=i.TEXTURE0+X-1:$=it);let lt=tt[$];lt===void 0&&(lt={type:void 0,texture:void 0},tt[$]=lt),(lt.type!==F||lt.texture!==pt)&&(it!==$&&(i.activeTexture($),it=$),i.bindTexture(F,pt||J[F]),lt.type=F,lt.texture=pt)}function Ot(){let F=tt[it];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ne(){try{i.compressedTexImage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function m(){try{i.texSubImage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function P(){try{i.texSubImage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function U(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function W(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function at(){try{i.texStorage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function ht(){try{i.texStorage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function V(){try{i.texImage2D(...arguments)}catch(F){Gt("WebGLState:",F)}}function Q(){try{i.texImage3D(...arguments)}catch(F){Gt("WebGLState:",F)}}function dt(F){return d[F]!==void 0?d[F]:i.getParameter(F)}function St(F,pt){d[F]!==pt&&(i.pixelStorei(F,pt),d[F]=pt)}function ct(F){Ft.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Ft.copy(F))}function ot(F){Bt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Bt.copy(F))}function xt(F,pt){let $=l.get(pt);$===void 0&&($=new WeakMap,l.set(pt,$));let lt=$.get(F);lt===void 0&&(lt=i.getUniformBlockIndex(pt,F.name),$.set(F,lt))}function _t(F,pt){let lt=l.get(pt).get(F);c.get(pt)!==lt&&(i.uniformBlockBinding(pt,lt,F.__bindingPointIndex),c.set(pt,lt))}function kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},it=null,tt={},u={},f=new WeakMap,_=[],y=null,g=!1,p=null,E=null,A=null,M=null,v=null,b=null,R=null,x=new Xt(0,0,0),T=0,C=!1,D=null,O=null,H=null,I=null,z=null,Ft.set(0,0,i.canvas.width,i.canvas.height),Bt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:j,disable:q,bindFramebuffer:rt,drawBuffers:et,useProgram:At,setBlending:Wt,setMaterial:Jt,setFlipSided:Ht,setCullFace:jt,setLineWidth:ue,setPolygonOffset:ft,setScissorTest:de,activeTexture:ve,bindTexture:N,unbindTexture:Ot,compressedTexImage2D:ne,compressedTexImage3D:w,texImage2D:V,texImage3D:Q,pixelStorei:St,getParameter:dt,updateUBOMapping:xt,uniformBlockBinding:_t,texStorage2D:at,texStorage3D:ht,texSubImage2D:m,texSubImage3D:P,compressedTexSubImage2D:U,compressedTexSubImage3D:W,scissor:ct,viewport:ot,reset:kt}}function e_(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Nt,h=new WeakMap,d=new Set,u,f=new WeakMap,_=!1;try{_=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(w,m){return _?new OffscreenCanvas(w,m):$s("canvas")}function g(w,m,P){let U=1,W=ne(w);if((W.width>P||W.height>P)&&(U=P/Math.max(W.width,W.height)),U<1)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap||typeof VideoFrame!="undefined"&&w instanceof VideoFrame){let at=Math.floor(U*W.width),ht=Math.floor(U*W.height);u===void 0&&(u=y(at,ht));let V=m?y(at,ht):u;return V.width=at,V.height=ht,V.getContext("2d").drawImage(w,0,0,at,ht),zt("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+at+"x"+ht+")."),V}else return"data"in w&&zt("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),w;return w}function p(w){return w.generateMipmaps}function E(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(w,m,P,U,W,at=!1){if(w!==null){if(i[w]!==void 0)return i[w];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ht;U&&(ht=t.get("EXT_texture_norm16"),ht||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=m;if(m===i.RED&&(P===i.FLOAT&&(V=i.R32F),P===i.HALF_FLOAT&&(V=i.R16F),P===i.UNSIGNED_BYTE&&(V=i.R8),P===i.UNSIGNED_SHORT&&ht&&(V=ht.R16_EXT),P===i.SHORT&&ht&&(V=ht.R16_SNORM_EXT)),m===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(V=i.R8UI),P===i.UNSIGNED_SHORT&&(V=i.R16UI),P===i.UNSIGNED_INT&&(V=i.R32UI),P===i.BYTE&&(V=i.R8I),P===i.SHORT&&(V=i.R16I),P===i.INT&&(V=i.R32I)),m===i.RG&&(P===i.FLOAT&&(V=i.RG32F),P===i.HALF_FLOAT&&(V=i.RG16F),P===i.UNSIGNED_BYTE&&(V=i.RG8),P===i.UNSIGNED_SHORT&&ht&&(V=ht.RG16_EXT),P===i.SHORT&&ht&&(V=ht.RG16_SNORM_EXT)),m===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(V=i.RG8UI),P===i.UNSIGNED_SHORT&&(V=i.RG16UI),P===i.UNSIGNED_INT&&(V=i.RG32UI),P===i.BYTE&&(V=i.RG8I),P===i.SHORT&&(V=i.RG16I),P===i.INT&&(V=i.RG32I)),m===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(V=i.RGB8UI),P===i.UNSIGNED_SHORT&&(V=i.RGB16UI),P===i.UNSIGNED_INT&&(V=i.RGB32UI),P===i.BYTE&&(V=i.RGB8I),P===i.SHORT&&(V=i.RGB16I),P===i.INT&&(V=i.RGB32I)),m===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),P===i.UNSIGNED_INT&&(V=i.RGBA32UI),P===i.BYTE&&(V=i.RGBA8I),P===i.SHORT&&(V=i.RGBA16I),P===i.INT&&(V=i.RGBA32I)),m===i.RGB&&(P===i.UNSIGNED_SHORT&&ht&&(V=ht.RGB16_EXT),P===i.SHORT&&ht&&(V=ht.RGB16_SNORM_EXT),P===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),P===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),m===i.RGBA){let Q=at?Js:se.getTransfer(W);P===i.FLOAT&&(V=i.RGBA32F),P===i.HALF_FLOAT&&(V=i.RGBA16F),P===i.UNSIGNED_BYTE&&(V=Q===me?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT&&ht&&(V=ht.RGBA16_EXT),P===i.SHORT&&ht&&(V=ht.RGBA16_SNORM_EXT),P===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function v(w,m){let P;return w?m===null||m===Nn||m===Is?P=i.DEPTH24_STENCIL8:m===Fn?P=i.DEPTH32F_STENCIL8:m===Ps&&(P=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Nn||m===Is?P=i.DEPTH_COMPONENT24:m===Fn?P=i.DEPTH_COMPONENT32F:m===Ps&&(P=i.DEPTH_COMPONENT16),P}function b(w,m){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==Qe&&w.minFilter!==ke?Math.log2(Math.max(m.width,m.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?m.mipmaps.length:1}function R(w){let m=w.target;m.removeEventListener("dispose",R),T(m),m.isVideoTexture&&h.delete(m),m.isHTMLTexture&&d.delete(m)}function x(w){let m=w.target;m.removeEventListener("dispose",x),D(m)}function T(w){let m=n.get(w);if(m.__webglInit===void 0)return;let P=w.source,U=f.get(P);if(U){let W=U[m.__cacheKey];W.usedTimes--,W.usedTimes===0&&C(w),Object.keys(U).length===0&&f.delete(P)}n.remove(w)}function C(w){let m=n.get(w);i.deleteTexture(m.__webglTexture);let P=w.source,U=f.get(P);delete U[m.__cacheKey],o.memory.textures--}function D(w){let m=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(m.__webglFramebuffer[U]))for(let W=0;W<m.__webglFramebuffer[U].length;W++)i.deleteFramebuffer(m.__webglFramebuffer[U][W]);else i.deleteFramebuffer(m.__webglFramebuffer[U]);m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer[U])}else{if(Array.isArray(m.__webglFramebuffer))for(let U=0;U<m.__webglFramebuffer.length;U++)i.deleteFramebuffer(m.__webglFramebuffer[U]);else i.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&i.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&i.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let U=0;U<m.__webglColorRenderbuffer.length;U++)m.__webglColorRenderbuffer[U]&&i.deleteRenderbuffer(m.__webglColorRenderbuffer[U]);m.__webglDepthRenderbuffer&&i.deleteRenderbuffer(m.__webglDepthRenderbuffer)}let P=w.textures;for(let U=0,W=P.length;U<W;U++){let at=n.get(P[U]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),o.memory.textures--),n.remove(P[U])}n.remove(w)}let O=0;function H(){O=0}function I(){return O}function z(w){O=w}function X(){let w=O;return w>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),O+=1,w}function Z(w){let m=[];return m.push(w.wrapS),m.push(w.wrapT),m.push(w.wrapR||0),m.push(w.magFilter),m.push(w.minFilter),m.push(w.anisotropy),m.push(w.internalFormat),m.push(w.format),m.push(w.type),m.push(w.generateMipmaps),m.push(w.premultiplyAlpha),m.push(w.flipY),m.push(w.unpackAlignment),m.push(w.colorSpace),m.join()}function nt(w,m){let P=n.get(w);if(w.isVideoTexture&&N(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&P.__version!==w.version){let U=w.image;if(U===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{q(P,w,m);return}}else w.isExternalTexture&&(P.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+m)}function K(w,m){let P=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&P.__version!==w.version){q(P,w,m);return}else w.isExternalTexture&&(P.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+m)}function it(w,m){let P=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&P.__version!==w.version){q(P,w,m);return}e.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+m)}function tt(w,m){let P=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&P.__version!==w.version){rt(P,w,m);return}e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+m)}let Lt={[Mi]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[pa]:i.MIRRORED_REPEAT},Ct={[Qe]:i.NEAREST,[Bh]:i.NEAREST_MIPMAP_NEAREST,[yr]:i.NEAREST_MIPMAP_LINEAR,[ke]:i.LINEAR,[Ya]:i.LINEAR_MIPMAP_NEAREST,[gn]:i.LINEAR_MIPMAP_LINEAR},Ft={[kh]:i.NEVER,[Yh]:i.ALWAYS,[Gh]:i.LESS,[Io]:i.LEQUAL,[Vh]:i.EQUAL,[Lo]:i.GEQUAL,[Wh]:i.GREATER,[Xh]:i.NOTEQUAL};function Bt(w,m){if(m.type===Fn&&t.has("OES_texture_float_linear")===!1&&(m.magFilter===ke||m.magFilter===Ya||m.magFilter===yr||m.magFilter===gn||m.minFilter===ke||m.minFilter===Ya||m.minFilter===yr||m.minFilter===gn)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Lt[m.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Lt[m.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Lt[m.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Ct[m.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Ct[m.minFilter]),m.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Ft[m.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Qe||m.minFilter!==yr&&m.minFilter!==gn||m.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||n.get(m).__currentAnisotropy){let P=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,s.getMaxAnisotropy())),n.get(m).__currentAnisotropy=m.anisotropy}}}function Vt(w,m){let P=!1;w.__webglInit===void 0&&(w.__webglInit=!0,m.addEventListener("dispose",R));let U=m.source,W=f.get(U);W===void 0&&(W={},f.set(U,W));let at=Z(m);if(at!==w.__cacheKey){W[at]===void 0&&(W[at]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,P=!0),W[at].usedTimes++;let ht=W[w.__cacheKey];ht!==void 0&&(W[w.__cacheKey].usedTimes--,ht.usedTimes===0&&C(m)),w.__cacheKey=at,w.__webglTexture=W[at].texture}return P}function J(w,m,P){return Math.floor(Math.floor(w/P)/m)}function j(w,m,P,U){let at=w.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,m.width,m.height,P,U,m.data);else{at.sort((St,ct)=>St.start-ct.start);let ht=0;for(let St=1;St<at.length;St++){let ct=at[ht],ot=at[St],xt=ct.start+ct.count,_t=J(ot.start,m.width,4),kt=J(ct.start,m.width,4);ot.start<=xt+1&&_t===kt&&J(ot.start+ot.count-1,m.width,4)===_t?ct.count=Math.max(ct.count,ot.start+ot.count-ct.start):(++ht,at[ht]=ot)}at.length=ht+1;let V=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),dt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,m.width);for(let St=0,ct=at.length;St<ct;St++){let ot=at[St],xt=Math.floor(ot.start/4),_t=Math.ceil(ot.count/4),kt=xt%m.width,F=Math.floor(xt/m.width),pt=_t,$=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,kt),e.pixelStorei(i.UNPACK_SKIP_ROWS,F),e.texSubImage2D(i.TEXTURE_2D,0,kt,F,pt,$,P,U,m.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,V),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,dt)}}function q(w,m,P){let U=i.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(U=i.TEXTURE_2D_ARRAY),m.isData3DTexture&&(U=i.TEXTURE_3D);let W=Vt(w,m),at=m.source;e.bindTexture(U,w.__webglTexture,i.TEXTURE0+P);let ht=n.get(at);if(at.version!==ht.__version||W===!0){if(e.activeTexture(i.TEXTURE0+P),(typeof ImageBitmap!="undefined"&&m.image instanceof ImageBitmap)===!1){let $=se.getPrimaries(se.workingColorSpace),lt=m.colorSpace===ci?null:se.getPrimaries(m.colorSpace),ut=m.colorSpace===ci||$===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut)}e.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment);let Q=g(m.image,!1,s.maxTextureSize);Q=Ot(m,Q);let dt=r.convert(m.format,m.colorSpace),St=r.convert(m.type),ct=M(m.internalFormat,dt,St,m.normalized,m.colorSpace,m.isVideoTexture);Bt(U,m);let ot,xt=m.mipmaps,_t=m.isVideoTexture!==!0,kt=ht.__version===void 0||W===!0,F=at.dataReady,pt=b(m,Q);if(m.isDepthTexture)ct=v(m.format===Li,m.type),kt&&(_t?e.texStorage2D(i.TEXTURE_2D,1,ct,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,ct,Q.width,Q.height,0,dt,St,null));else if(m.isDataTexture)if(xt.length>0){_t&&kt&&e.texStorage2D(i.TEXTURE_2D,pt,ct,xt[0].width,xt[0].height);for(let $=0,lt=xt.length;$<lt;$++)ot=xt[$],_t?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ot.width,ot.height,dt,St,ot.data):e.texImage2D(i.TEXTURE_2D,$,ct,ot.width,ot.height,0,dt,St,ot.data);m.generateMipmaps=!1}else _t?(kt&&e.texStorage2D(i.TEXTURE_2D,pt,ct,Q.width,Q.height),F&&j(m,Q,dt,St)):e.texImage2D(i.TEXTURE_2D,0,ct,Q.width,Q.height,0,dt,St,Q.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){_t&&kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,ct,xt[0].width,xt[0].height,Q.depth);for(let $=0,lt=xt.length;$<lt;$++)if(ot=xt[$],m.format!==wn)if(dt!==null)if(_t){if(F)if(m.layerUpdates.size>0){let ut=rc(ot.width,ot.height,m.format,m.type);for(let st of m.layerUpdates){let Rt=ot.data.subarray(st*ut/ot.data.BYTES_PER_ELEMENT,(st+1)*ut/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,st,ot.width,ot.height,1,dt,Rt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ot.width,ot.height,Q.depth,dt,ot.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,ct,ot.width,ot.height,Q.depth,0,ot.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _t?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,ot.width,ot.height,Q.depth,dt,St,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,ct,ot.width,ot.height,Q.depth,0,dt,St,ot.data);m.layerUpdates.size>0&&m.clearLayerUpdates()}else{_t&&kt&&e.texStorage2D(i.TEXTURE_2D,pt,ct,xt[0].width,xt[0].height);for(let $=0,lt=xt.length;$<lt;$++)ot=xt[$],m.format!==wn?dt!==null?_t?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,ot.width,ot.height,dt,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,$,ct,ot.width,ot.height,0,ot.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_t?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,ot.width,ot.height,dt,St,ot.data):e.texImage2D(i.TEXTURE_2D,$,ct,ot.width,ot.height,0,dt,St,ot.data)}else if(m.isDataArrayTexture)if(_t){if(kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,pt,ct,Q.width,Q.height,Q.depth),F)if(m.layerUpdates.size>0){let $=rc(Q.width,Q.height,m.format,m.type);for(let lt of m.layerUpdates){let ut=Q.data.subarray(lt*$/Q.data.BYTES_PER_ELEMENT,(lt+1)*$/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,Q.width,Q.height,1,dt,St,ut)}m.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,St,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,ct,Q.width,Q.height,Q.depth,0,dt,St,Q.data);else if(m.isData3DTexture)_t?(kt&&e.texStorage3D(i.TEXTURE_3D,pt,ct,Q.width,Q.height,Q.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,St,Q.data)):e.texImage3D(i.TEXTURE_3D,0,ct,Q.width,Q.height,Q.depth,0,dt,St,Q.data);else if(m.isFramebufferTexture){if(kt)if(_t)e.texStorage2D(i.TEXTURE_2D,pt,ct,Q.width,Q.height);else{let $=Q.width,lt=Q.height;for(let ut=0;ut<pt;ut++)e.texImage2D(i.TEXTURE_2D,ut,ct,$,lt,0,dt,St,null),$>>=1,lt>>=1}}else if(m.isHTMLTexture){if("texElementImage2D"in i){let $=i.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),Q.parentNode!==$){$.appendChild(Q),d.add(m),$.onpaint=lt=>{let ut=lt.changedElements;for(let st of d)ut.includes(st.image)&&(st.needsUpdate=!0)},$.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let ut=i.RGBA,st=i.RGBA,Rt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ut,st,Rt,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(xt.length>0){if(_t&&kt){let $=ne(xt[0]);e.texStorage2D(i.TEXTURE_2D,pt,ct,$.width,$.height)}for(let $=0,lt=xt.length;$<lt;$++)ot=xt[$],_t?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,dt,St,ot):e.texImage2D(i.TEXTURE_2D,$,ct,dt,St,ot);m.generateMipmaps=!1}else if(_t){if(kt){let $=ne(Q);e.texStorage2D(i.TEXTURE_2D,pt,ct,$.width,$.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,St,Q)}else e.texImage2D(i.TEXTURE_2D,0,ct,dt,St,Q);p(m)&&E(U),ht.__version=at.version,m.onUpdate&&m.onUpdate(m)}w.__version=m.version}function rt(w,m,P){if(m.image.length!==6)return;let U=Vt(w,m),W=m.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+P);let at=n.get(W);if(W.version!==at.__version||U===!0){e.activeTexture(i.TEXTURE0+P);let ht=se.getPrimaries(se.workingColorSpace),V=m.colorSpace===ci?null:se.getPrimaries(m.colorSpace),Q=m.colorSpace===ci||ht===V?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,m.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,m.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let dt=m.isCompressedTexture||m.image[0].isCompressedTexture,St=m.image[0]&&m.image[0].isDataTexture,ct=[];for(let st=0;st<6;st++)!dt&&!St?ct[st]=g(m.image[st],!0,s.maxCubemapSize):ct[st]=St?m.image[st].image:m.image[st],ct[st]=Ot(m,ct[st]);let ot=ct[0],xt=r.convert(m.format,m.colorSpace),_t=r.convert(m.type),kt=M(m.internalFormat,xt,_t,m.normalized,m.colorSpace),F=m.isVideoTexture!==!0,pt=at.__version===void 0||U===!0,$=W.dataReady,lt=b(m,ot);Bt(i.TEXTURE_CUBE_MAP,m);let ut;if(dt){F&&pt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,kt,ot.width,ot.height);for(let st=0;st<6;st++){ut=ct[st].mipmaps;for(let Rt=0;Rt<ut.length;Rt++){let bt=ut[Rt];m.format!==wn?xt!==null?F?$&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt,0,0,bt.width,bt.height,xt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt,kt,bt.width,bt.height,0,bt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt,0,0,bt.width,bt.height,xt,_t,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt,kt,bt.width,bt.height,0,xt,_t,bt.data)}}}else{if(ut=m.mipmaps,F&&pt){ut.length>0&&lt++;let st=ne(ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,kt,st.width,st.height)}for(let st=0;st<6;st++)if(St){F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ct[st].width,ct[st].height,xt,_t,ct[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,kt,ct[st].width,ct[st].height,0,xt,_t,ct[st].data);for(let Rt=0;Rt<ut.length;Rt++){let oe=ut[Rt].image[st].image;F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt+1,0,0,oe.width,oe.height,xt,_t,oe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt+1,kt,oe.width,oe.height,0,xt,_t,oe.data)}}else{F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,xt,_t,ct[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,kt,xt,_t,ct[st]);for(let Rt=0;Rt<ut.length;Rt++){let bt=ut[Rt];F?$&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt+1,0,0,xt,_t,bt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,Rt+1,kt,xt,_t,bt.image[st])}}}p(m)&&E(i.TEXTURE_CUBE_MAP),at.__version=W.version,m.onUpdate&&m.onUpdate(m)}w.__version=m.version}function et(w,m,P,U,W,at){let ht=r.convert(P.format,P.colorSpace),V=r.convert(P.type),Q=M(P.internalFormat,ht,V,P.normalized,P.colorSpace),dt=n.get(m),St=n.get(P);if(St.__renderTarget=m,!dt.__hasExternalTextures){let ct=Math.max(1,m.width>>at),ot=Math.max(1,m.height>>at);W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?e.texImage3D(W,at,Q,ct,ot,m.depth,0,ht,V,null):e.texImage2D(W,at,Q,ct,ot,0,ht,V,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),ve(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,U,W,St.__webglTexture,0,de(m)):(W===i.TEXTURE_2D||W>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,U,W,St.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function At(w,m,P){if(i.bindRenderbuffer(i.RENDERBUFFER,w),m.depthBuffer){let U=m.depthTexture,W=U&&U.isDepthTexture?U.type:null,at=v(m.stencilBuffer,W),ht=m.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ve(m)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(m),at,m.width,m.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(m),at,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,at,m.width,m.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ht,i.RENDERBUFFER,w)}else{let U=m.textures;for(let W=0;W<U.length;W++){let at=U[W],ht=r.convert(at.format,at.colorSpace),V=r.convert(at.type),Q=M(at.internalFormat,ht,V,at.normalized,at.colorSpace);ve(m)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de(m),Q,m.width,m.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,de(m),Q,m.width,m.height):i.renderbufferStorage(i.RENDERBUFFER,Q,m.width,m.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Qt(w,m,P){let U=m.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let W=n.get(m.depthTexture);if(W.__renderTarget=m,(!W.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),U){if(W.__webglInit===void 0&&(W.__webglInit=!0,m.depthTexture.addEventListener("dispose",R)),W.__webglTexture===void 0){W.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,m.depthTexture);let dt=r.convert(m.depthTexture.format),St=r.convert(m.depthTexture.type),ct;m.depthTexture.format===Xn?ct=i.DEPTH_COMPONENT24:m.depthTexture.format===Li&&(ct=i.DEPTH24_STENCIL8);for(let ot=0;ot<6;ot++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,ct,m.width,m.height,0,dt,St,null)}}else nt(m.depthTexture,0);let at=W.__webglTexture,ht=de(m),V=U?i.TEXTURE_CUBE_MAP_POSITIVE_X+P:i.TEXTURE_2D,Q=m.depthTexture.format===Li?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(m.depthTexture.format===Xn)ve(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,V,at,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,Q,V,at,0);else if(m.depthTexture.format===Li)ve(m)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,V,at,0,ht):i.framebufferTexture2D(i.FRAMEBUFFER,Q,V,at,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ut(w){let m=n.get(w),P=w.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==w.depthTexture){let U=w.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),U){let W=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,U.removeEventListener("dispose",W)};U.addEventListener("dispose",W),m.__depthDisposeCallback=W}m.__boundDepthTexture=U}if(w.depthTexture&&!m.__autoAllocateDepthBuffer)if(P)for(let U=0;U<6;U++)Qt(m.__webglFramebuffer[U],w,U);else{let U=w.texture.mipmaps;U&&U.length>0?Qt(m.__webglFramebuffer[0],w,0):Qt(m.__webglFramebuffer,w,0)}else if(P){m.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(e.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[U]),m.__webglDepthbuffer[U]===void 0)m.__webglDepthbuffer[U]=i.createRenderbuffer(),At(m.__webglDepthbuffer[U],w,!1);else{let W=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=m.__webglDepthbuffer[U];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,at)}}else{let U=w.texture.mipmaps;if(U&&U.length>0?e.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=i.createRenderbuffer(),At(m.__webglDepthbuffer,w,!1);else{let W=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=m.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,W,i.RENDERBUFFER,at)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(w,m,P){let U=n.get(w);m!==void 0&&et(U.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&Ut(w)}function Jt(w){let m=w.texture,P=n.get(w),U=n.get(m);w.addEventListener("dispose",x);let W=w.textures,at=w.isWebGLCubeRenderTarget===!0,ht=W.length>1;if(ht||(U.__webglTexture===void 0&&(U.__webglTexture=i.createTexture()),U.__version=m.version,o.memory.textures++),at){P.__webglFramebuffer=[];for(let V=0;V<6;V++)if(m.mipmaps&&m.mipmaps.length>0){P.__webglFramebuffer[V]=[];for(let Q=0;Q<m.mipmaps.length;Q++)P.__webglFramebuffer[V][Q]=i.createFramebuffer()}else P.__webglFramebuffer[V]=i.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){P.__webglFramebuffer=[];for(let V=0;V<m.mipmaps.length;V++)P.__webglFramebuffer[V]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(ht)for(let V=0,Q=W.length;V<Q;V++){let dt=n.get(W[V]);dt.__webglTexture===void 0&&(dt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&ve(w)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let V=0;V<W.length;V++){let Q=W[V];P.__webglColorRenderbuffer[V]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[V]);let dt=r.convert(Q.format,Q.colorSpace),St=r.convert(Q.type),ct=M(Q.internalFormat,dt,St,Q.normalized,Q.colorSpace,w.isXRRenderTarget===!0),ot=de(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ot,ct,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+V,i.RENDERBUFFER,P.__webglColorRenderbuffer[V])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),At(P.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture),Bt(i.TEXTURE_CUBE_MAP,m);for(let V=0;V<6;V++)if(m.mipmaps&&m.mipmaps.length>0)for(let Q=0;Q<m.mipmaps.length;Q++)et(P.__webglFramebuffer[V][Q],w,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,Q);else et(P.__webglFramebuffer[V],w,m,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);p(m)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let V=0,Q=W.length;V<Q;V++){let dt=W[V],St=n.get(dt),ct=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ct=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,St.__webglTexture),Bt(ct,dt),et(P.__webglFramebuffer,w,dt,i.COLOR_ATTACHMENT0+V,ct,0),p(dt)&&E(ct)}e.unbindTexture()}else{let V=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(V=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(V,U.__webglTexture),Bt(V,m),m.mipmaps&&m.mipmaps.length>0)for(let Q=0;Q<m.mipmaps.length;Q++)et(P.__webglFramebuffer[Q],w,m,i.COLOR_ATTACHMENT0,V,Q);else et(P.__webglFramebuffer,w,m,i.COLOR_ATTACHMENT0,V,0);p(m)&&E(V),e.unbindTexture()}w.depthBuffer&&Ut(w)}function Ht(w){let m=w.textures;for(let P=0,U=m.length;P<U;P++){let W=m[P];if(p(W)){let at=A(w),ht=n.get(W).__webglTexture;e.bindTexture(at,ht),E(at),e.unbindTexture()}}}let jt=[],ue=[];function ft(w){if(w.samples>0){if(ve(w)===!1){let m=w.textures,P=w.width,U=w.height,W=i.COLOR_BUFFER_BIT,at=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=n.get(w),V=m.length>1;if(V)for(let dt=0;dt<m.length;dt++)e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let Q=w.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let dt=0;dt<m.length;dt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(W|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(W|=i.STENCIL_BUFFER_BIT)),V){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);let St=n.get(m[dt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,St,0)}i.blitFramebuffer(0,0,P,U,0,0,P,U,W,i.NEAREST),c===!0&&(jt.length=0,ue.length=0,jt.push(i.COLOR_ATTACHMENT0+dt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(jt.push(at),ue.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ue)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,jt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),V)for(let dt=0;dt<m.length;dt++){e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);let St=n.get(m[dt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ht.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,St,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let m=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[m])}}}function de(w){return Math.min(s.maxSamples,w.samples)}function ve(w){let m=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function N(w){let m=o.render.frame;h.get(w)!==m&&(h.set(w,m),w.update())}function Ot(w,m){let P=w.colorSpace,U=w.format,W=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||P!==Zs&&P!==ci&&(se.getTransfer(P)===me?(U!==wn||W!==_n)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Gt("WebGLTextures: Unsupported texture color space:",P)),m}function ne(w){return typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame!="undefined"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=H,this.getTextureUnits=I,this.setTextureUnits=z,this.setTexture2D=nt,this.setTexture2DArray=K,this.setTexture3D=it,this.setTextureCube=tt,this.rebindTextures=Wt,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=et,this.useMultisampledRTT=ve,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function n_(i,t){function e(n,s=ci){let r,o=se.getTransfer(s);if(n===_n)return i.UNSIGNED_BYTE;if(n===Za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ja)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Zl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Xl)return i.BYTE;if(n===Yl)return i.SHORT;if(n===Ps)return i.UNSIGNED_SHORT;if(n===qa)return i.INT;if(n===Nn)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===Jl)return i.ALPHA;if(n===$l)return i.RGB;if(n===wn)return i.RGBA;if(n===Xn)return i.DEPTH_COMPONENT;if(n===Li)return i.DEPTH_STENCIL;if(n===Kl)return i.RED;if(n===$a)return i.RED_INTEGER;if(n===Di)return i.RG;if(n===Ka)return i.RG_INTEGER;if(n===ja)return i.RGBA_INTEGER;if(n===vr||n===Mr||n===Sr||n===br)if(o===me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qa||n===to||n===eo||n===no)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===to)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===no)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===io||n===so||n===ro||n===ao||n===oo||n===Er||n===lo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===io||n===so)return o===me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ro)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ao)return r.COMPRESSED_R11_EAC;if(n===oo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Er)return r.COMPRESSED_RG11_EAC;if(n===lo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===co||n===ho||n===uo||n===fo||n===po||n===mo||n===go||n===_o||n===xo||n===yo||n===vo||n===Mo||n===So||n===bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===co)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ho)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uo)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fo)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===po)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mo)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===go)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_o)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xo)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yo)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vo)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mo)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===So)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bo)return o===me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eo||n===To||n===wo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Eo)return o===me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ao||n===Ro||n===Tr||n===Co)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ro)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Tr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Co)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var i_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ec=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new rr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new qe({vertexShader:i_,fragmentShader:s_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new qt(new xe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Tc=class extends Yn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,_=null,y=typeof XRWebGLBinding!="undefined",g=new Ec,p={},E=e.getContextAttributes(),A=null,M=null,v=[],b=[],R=new Nt,x=null,T=null,C=new je;C.viewport=new Le;let D=new je;D.viewport=new Le;let O=[C,D],H=new Ga,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let j=v[J];return j===void 0&&(j=new Ts,v[J]=j),j.getTargetRaySpace()},this.getControllerGrip=function(J){let j=v[J];return j===void 0&&(j=new Ts,v[J]=j),j.getGripSpace()},this.getHand=function(J){let j=v[J];return j===void 0&&(j=new Ts,v[J]=j),j.getHandSpace()};function X(J){let j=b.indexOf(J.inputSource);if(j===-1)return;let q=v[j];q!==void 0&&(q.update(J.inputSource,J.frame,l||o),q.dispatchEvent({type:J.type,data:J.inputSource}))}function Z(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",nt);for(let J=0;J<v.length;J++){let j=b[J];j!==null&&(b[J]=null,v[J].disconnect(j))}I=null,z=null,g.reset();for(let J in p)delete p[J];if(t.setRenderTarget(A),f=null,u=null,d=null,s=null,M=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",nt),E.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let q=null,rt=null,et=null;E.depth&&(et=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,q=E.stencil?Li:Xn,rt=E.stencil?Is:Nn);let At={colorFormat:e.RGBA8,depthFormat:et,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(At),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new mn(u.textureWidth,u.textureHeight,{format:wn,type:_n,depthTexture:new bi(u.textureWidth,u.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let q={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new mn(f.framebufferWidth,f.framebufferHeight,{format:wn,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function nt(J){for(let j=0;j<J.removed.length;j++){let q=J.removed[j],rt=b.indexOf(q);rt>=0&&(b[rt]=null,v[rt].disconnect(q))}for(let j=0;j<J.added.length;j++){let q=J.added[j],rt=b.indexOf(q);if(rt===-1){for(let At=0;At<v.length;At++)if(At>=b.length){b.push(q),rt=At;break}else if(b[At]===null){b[At]=q,rt=At;break}if(rt===-1)break}let et=v[rt];et&&et.connect(q)}}let K=new L,it=new L;function tt(J,j,q){K.setFromMatrixPosition(j.matrixWorld),it.setFromMatrixPosition(q.matrixWorld);let rt=K.distanceTo(it),et=j.projectionMatrix.elements,At=q.projectionMatrix.elements,Qt=et[14]/(et[10]-1),Ut=et[14]/(et[10]+1),Wt=(et[9]+1)/et[5],Jt=(et[9]-1)/et[5],Ht=(et[8]-1)/et[0],jt=(At[8]+1)/At[0],ue=Qt*Ht,ft=Qt*jt,de=rt/(-Ht+jt),ve=de*-Ht;if(j.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(ve),J.translateZ(de),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),et[10]===-1)J.projectionMatrix.copy(j.projectionMatrix),J.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let N=Qt+de,Ot=Ut+de,ne=ue-ve,w=ft+(rt-ve),m=Wt*Ut/Ot*N,P=Jt*Ut/Ot*N;J.projectionMatrix.makePerspective(ne,w,m,P,N,Ot),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Lt(J,j){j===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(j.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let j=J.near,q=J.far;g.texture!==null&&(g.depthNear>0&&(j=g.depthNear),g.depthFar>0&&(q=g.depthFar)),H.near=D.near=C.near=j,H.far=D.far=C.far=q,(I!==H.near||z!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),I=H.near,z=H.far),H.layers.mask=J.layers.mask|6,C.layers.mask=H.layers.mask&-5,D.layers.mask=H.layers.mask&-3;let rt=J.parent,et=H.cameras;Lt(H,rt);for(let At=0;At<et.length;At++)Lt(et[At],rt);et.length===2?tt(H,C,D):H.projectionMatrix.copy(C.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),Ct(J,H,rt)};function Ct(J,j,q){q===null?J.matrix.copy(j.matrixWorld):(J.matrix.copy(q.matrixWorld),J.matrix.invert(),J.matrix.multiply(j.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(j.projectionMatrix),J.projectionMatrixInverse.copy(j.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Wi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(H)},this.getCameraTexture=function(J){return p[J]};let Ft=null;function Bt(J,j){if(h=j.getViewerPose(l||o),_=j,h!==null){let q=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let rt=!1;q.length!==H.cameras.length&&(H.cameras.length=0,rt=!0);for(let Ut=0;Ut<q.length;Ut++){let Wt=q[Ut],Jt=null;if(f!==null)Jt=f.getViewport(Wt);else{let jt=d.getViewSubImage(u,Wt);Jt=jt.viewport,Ut===0&&(t.setRenderTargetTextures(M,jt.colorTexture,jt.depthStencilTexture),t.setRenderTarget(M))}let Ht=O[Ut];Ht===void 0&&(Ht=new je,Ht.layers.enable(Ut),Ht.viewport=new Le,O[Ut]=Ht),Ht.matrix.fromArray(Wt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Wt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Ut===0&&(H.matrix.copy(Ht.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),rt===!0&&H.cameras.push(Ht)}let et=s.enabledFeatures;if(et&&et.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let Ut=d.getDepthInformation(q[0]);Ut&&Ut.isValid&&Ut.texture&&g.init(Ut,s.renderState)}if(et&&et.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let Ut=0;Ut<q.length;Ut++){let Wt=q[Ut].camera;if(Wt){let Jt=p[Wt];Jt||(Jt=new rr,p[Wt]=Jt);let Ht=d.getCameraImage(Wt);Jt.sourceTexture=Ht}}}}for(let q=0;q<v.length;q++){let rt=b[q],et=v[q];rt!==null&&et!==void 0&&et.update(rt,j,l||o)}Ft&&Ft(J,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}let Vt=new bu;Vt.setAnimationLoop(Bt),this.setAnimationLoop=function(J){Ft=J},this.dispose=function(){}}},r_=new Ae,Cu=new Yt;Cu.set(-1,0,0,0,1,0,0,0,1);function a_(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,nc(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,E,A,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),_(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,E,A):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===en&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===en&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let E=t.get(p),A=E.envMap,M=E.envMapRotation;A&&(g.envMap.value=A,g.envMapRotation.value.setFromMatrix4(r_.makeRotationFromEuler(M)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Cu),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,E,A){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*E,g.scale.value=A*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,E){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let E=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function o_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){let b=v.program;n.uniformBlockBinding(M,b)}function l(M,v){let b=s[M.id];b===void 0&&(g(M),b=h(M),s[M.id]=b,M.addEventListener("dispose",E));let R=v.program;n.updateUBOMapping(M,R);let x=t.render.frame;r[M.id]!==x&&(u(M),r[M.id]=x)}function h(M){let v=d();M.__bindingPointIndex=v;let b=i.createBuffer(),R=M.__size,x=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,b),b}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let v=s[M.id],b=M.uniforms,R=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let x=0,T=b.length;x<T;x++){let C=b[x];if(Array.isArray(C))for(let D=0,O=C.length;D<O;D++)f(C[D],x,D,R);else f(C,x,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,v,b,R){if(y(M,v,b,R)===!0){let x=M.__offset,T=M.value;if(Array.isArray(T)){let C=0;for(let D=0;D<T.length;D++){let O=T[D],H=p(O);_(O,M.__data,C),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(C+=H.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(T,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,M.__data)}}function _(M,v,b){typeof M=="number"||typeof M=="boolean"?v[0]=M:M.isMatrix3?(v[0]=M.elements[0],v[1]=M.elements[1],v[2]=M.elements[2],v[3]=0,v[4]=M.elements[3],v[5]=M.elements[4],v[6]=M.elements[5],v[7]=0,v[8]=M.elements[6],v[9]=M.elements[7],v[10]=M.elements[8],v[11]=0):ArrayBuffer.isView(M)?v.set(new M.constructor(M.buffer,M.byteOffset,v.length)):M.toArray(v,b)}function y(M,v,b,R){let x=M.value,T=v+"_"+b;if(R[T]===void 0)return typeof x=="number"||typeof x=="boolean"?R[T]=x:ArrayBuffer.isView(x)?R[T]=x.slice():R[T]=x.clone(),!0;{let C=R[T];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return R[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function g(M){let v=M.uniforms,b=0,R=16;for(let T=0,C=v.length;T<C;T++){let D=Array.isArray(v[T])?v[T]:[v[T]];for(let O=0,H=D.length;O<H;O++){let I=D[O],z=Array.isArray(I.value)?I.value:[I.value];for(let X=0,Z=z.length;X<Z;X++){let nt=z[X],K=p(nt),it=b%R,tt=it%K.boundary,Lt=it+tt;b+=tt,Lt!==0&&R-Lt<K.storage&&(b+=R-Lt),I.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=b,b+=K.storage}}}let x=b%R;return x>0&&(b+=R-x),M.__size=b,M.__cache={},this}function p(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(v.boundary=16,v.storage=M.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",M),v}function E(M){let v=M.target;v.removeEventListener("dispose",E);let b=o.indexOf(v.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function A(){for(let M in s)i.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:c,update:l,dispose:A}}var l_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Kn=null;function c_(){return Kn===null&&(Kn=new ya(l_,16,16,Di,Bn),Kn.name="DFG_LUT",Kn.minFilter=ke,Kn.magFilter=ke,Kn.wrapS=Wn,Kn.wrapT=Wn,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}var Bo=class{constructor(t={}){let{canvas:e=Zh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=_n}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let y=f,g=new Set([ja,Ka,$a]),p=new Set([_n,Nn,Ps,Is,Za,Ja]),E=new Uint32Array(4),A=new Int32Array(4),M=new L,v=null,b=null,R=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,O=null,H=null,I=null,z=null;this._outputColorSpace=Pe;let X=0,Z=0,nt=null,K=-1,it=null,tt=new Le,Lt=new Le,Ct=null,Ft=new Xt(0),Bt=0,Vt=e.width,J=e.height,j=1,q=null,rt=null,et=new Le(0,0,Vt,J),At=new Le(0,0,Vt,J),Qt=!1,Ut=new ws,Wt=!1,Jt=!1,Ht=new Ae,jt=new L,ue=new Le,ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function ve(){return nt===null?j:1}let N=n;function Ot(S,B){return e.getContext(S,B)}let ne,w,m,P,U,W,at,ht,V,Q,dt,St,ct,ot,xt,_t,kt,F,pt,$,lt,ut,st;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",oe,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",mt,!1),N===null){let B="webgl2";if(N=Ot(B,S),N===null)throw Ot(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Rt()}catch(S){throw e.removeEventListener("webglcontextlost",oe,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),Gt("WebGLRenderer: "+S.message),S}function Rt(){ne=new g0(N),ne.init(),lt=new n_(N,ne),w=new a0(N,ne,t,lt),m=new t_(N,ne),w.reversedDepthBuffer&&u&&m.buffers.depth.setReversed(!0),H=N.createFramebuffer(),I=N.createFramebuffer(),z=N.createFramebuffer(),P=new y0(N),U=new Hg,W=new e_(N,ne,m,U,w,lt,P),at=new m0(C),ht=new Mf(N),ut=new s0(N,ht),V=new _0(N,ht,P,ut),Q=new M0(N,V,ht,ut,P),F=new v0(N,w,W),xt=new o0(U),dt=new zg(C,at,ne,w,ut,xt),St=new a_(C,U),ct=new Gg,ot=new Zg(ne),kt=new i0(C,at,m,Q,_,c),_t=new Qg(C,Q,w),st=new o_(N,P,w,m),pt=new r0(N,ne,P),$=new x0(N,ne,P),P.programs=dt.programs,C.capabilities=w,C.extensions=ne,C.properties=U,C.renderLists=ct,C.shadowMap=_t,C.state=m,C.info=P}y!==_n&&(T=new b0(y,e.width,e.height,a,s,r));let bt=new Tc(C,N);this.xr=bt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let S=ne.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ne.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(S){S!==void 0&&(j=S,this.setSize(Vt,J,!1))},this.getSize=function(S){return S.set(Vt,J)},this.setSize=function(S,B,Y=!0){if(bt.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Vt=S,J=B,e.width=Math.floor(S*j),e.height=Math.floor(B*j),Y===!0&&(e.style.width=S+"px",e.style.height=B+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set(Vt*j,J*j).floor()},this.setDrawingBufferSize=function(S,B,Y){Vt=S,J=B,j=Y,e.width=Math.floor(S*Y),e.height=Math.floor(B*Y),this.setViewport(0,0,S,B)},this.setEffects=function(S){if(y===_n){Gt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let B=0;B<S.length;B++)if(S[B].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(tt)},this.getViewport=function(S){return S.copy(et)},this.setViewport=function(S,B,Y,k){S.isVector4?et.set(S.x,S.y,S.z,S.w):et.set(S,B,Y,k),m.viewport(tt.copy(et).multiplyScalar(j).round())},this.getScissor=function(S){return S.copy(At)},this.setScissor=function(S,B,Y,k){S.isVector4?At.set(S.x,S.y,S.z,S.w):At.set(S,B,Y,k),m.scissor(Lt.copy(At).multiplyScalar(j).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(S){m.setScissorTest(Qt=S)},this.setOpaqueSort=function(S){q=S},this.setTransparentSort=function(S){rt=S},this.getClearColor=function(S){return S.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor(...arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha(...arguments)},this.clear=function(S=!0,B=!0,Y=!0){let k=0;if(S){let G=!1;if(nt!==null){let Mt=nt.texture.format;G=g.has(Mt)}if(G){let Mt=nt.texture.type,wt=p.has(Mt),vt=kt.getClearColor(),Pt=kt.getClearAlpha(),Dt=vt.r,$t=vt.g,ie=vt.b;wt?(E[0]=Dt,E[1]=$t,E[2]=ie,E[3]=Pt,N.clearBufferuiv(N.COLOR,0,E)):(A[0]=Dt,A[1]=$t,A[2]=ie,A[3]=Pt,N.clearBufferiv(N.COLOR,0,A))}else k|=N.COLOR_BUFFER_BIT}B&&(k|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(k|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&N.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),O=S},this.dispose=function(){e.removeEventListener("webglcontextlost",oe,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),kt.dispose(),ct.dispose(),ot.dispose(),U.dispose(),at.dispose(),Q.dispose(),ut.dispose(),st.dispose(),dt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",Rn),bt.removeEventListener("sessionend",Mn),pn.stop()};function oe(S){S.preventDefault(),Ql("WebGLRenderer: Context Lost."),D=!0}function ce(){Ql("WebGLRenderer: Context Restored."),D=!1;let S=P.autoReset,B=_t.enabled,Y=_t.autoUpdate,k=_t.needsUpdate,G=_t.type;Rt(),P.autoReset=S,_t.enabled=B,_t.autoUpdate=Y,_t.needsUpdate=k,_t.type=G}function mt(S){Gt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Tt(S){let B=S.target;B.removeEventListener("dispose",Tt),le(B)}function le(S){Ee(S),U.remove(S)}function Ee(S){let B=U.get(S).programs;B!==void 0&&(B.forEach(function(Y){dt.releaseProgram(Y)}),S.isShaderMaterial&&dt.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,Y,k,G,Mt){B===null&&(B=ft);let wt=G.isMesh&&G.matrixWorld.determinantAffine()<0,vt=dd(S,B,Y,k,G);m.setMaterial(k,wt);let Pt=Y.index,Dt=1;if(k.wireframe===!0){if(Pt=V.getWireframeAttribute(Y),Pt===void 0)return;Dt=2}let $t=Y.drawRange,ie=Y.attributes.position,It=$t.start*Dt,pe=($t.start+$t.count)*Dt;Mt!==null&&(It=Math.max(It,Mt.start*Dt),pe=Math.min(pe,(Mt.start+Mt.count)*Dt)),Pt!==null?(It=Math.max(It,0),pe=Math.min(pe,Pt.count)):ie!=null&&(It=Math.max(It,0),pe=Math.min(pe,ie.count));let Ve=pe-It;if(Ve<0||Ve===1/0)return;ut.setup(G,k,vt,Y,Pt);let Te,Me=pt;if(Pt!==null&&(Te=ht.get(Pt),Me=$,Me.setIndex(Te)),G.isMesh)k.wireframe===!0?(m.setLineWidth(k.wireframeLinewidth*ve()),Me.setMode(N.LINES)):Me.setMode(N.TRIANGLES);else if(G.isLine){let sn=k.linewidth;sn===void 0&&(sn=1),m.setLineWidth(sn*ve()),G.isLineSegments?Me.setMode(N.LINES):G.isLineLoop?Me.setMode(N.LINE_LOOP):Me.setMode(N.LINE_STRIP)}else G.isPoints?Me.setMode(N.POINTS):G.isSprite&&Me.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(ne.get("WEBGL_multi_draw"))Me.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let sn=G._multiDrawStarts,Et=G._multiDrawCounts,hn=G._multiDrawCount,he=Pt?ht.get(Pt).bytesPerElement:1,Sn=U.get(k).currentProgram.getUniforms();for(let Gn=0;Gn<hn;Gn++)Sn.setValue(N,"_gl_DrawID",Gn),Me.render(sn[Gn]/he,Et[Gn])}else if(G.isInstancedMesh)Me.renderInstances(It,Ve,G.count);else if(Y.isInstancedBufferGeometry){let sn=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Et=Math.min(Y.instanceCount,sn);Me.renderInstances(It,Ve,Et)}else Me.render(It,Ve)};function Ce(S,B,Y,k){O!==null&&S.isNodeMaterial&&O.setObject(k,S),Wt===!0&&xt.setState(S,Y,!1),S.transparent===!0&&S.side===ye&&S.forceSinglePass===!1?(S.side=en,S.needsUpdate=!0,Br(S,B,k),S.side=Pi,S.needsUpdate=!0,Br(S,B,k),S.side=ye):Br(S,B,k)}this.compile=function(S,B,Y=null){Y===null&&(Y=S),O!==null&&O.renderStart(S,B,Y),b=ot.get(Y),b.init(B),x.push(b),Y.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),S!==Y&&S.traverseVisible(function(G){G.isLight&&G.layers.test(B.layers)&&(b.pushLight(G),G.castShadow&&b.pushShadow(G))}),b.setupLights(),O!==null&&O.updateLights(b.state.lightsArray),Jt=this.localClippingEnabled,Wt=xt.init(this.clippingPlanes,Jt),Wt===!0&&xt.setGlobalState(this.clippingPlanes,B),O!==null&&_t.render(b.state.shadowsArray,Y,B);let k=new Set;return S.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let Mt=G.material;if(Mt)if(Array.isArray(Mt))for(let wt=0;wt<Mt.length;wt++){let vt=Mt[wt];Ce(vt,Y,B,G),k.add(vt)}else Ce(Mt,Y,B,G),k.add(Mt)}),b=x.pop(),O!==null&&O.renderEnd(),k},this.compileAsync=function(S,B,Y=null){let k=this.compile(S,B,Y);return new Promise(G=>{function Mt(){if(k.forEach(function(wt){let Pt=U.get(wt).currentProgram;(Pt===void 0||Pt.isReady())&&k.delete(wt)}),k.size===0){G(S);return}setTimeout(Mt,10)}ne.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let $e=null;function kn(S){$e&&$e(S)}function Rn(){pn.stop()}function Mn(){pn.start()}let pn=new bu;pn.setAnimationLoop(kn),typeof self!="undefined"&&pn.setContext(self),this.setAnimationLoop=function(S){$e=S,bt.setAnimationLoop(S),S===null?pn.stop():pn.start()},bt.addEventListener("sessionstart",Rn),bt.addEventListener("sessionend",Mn),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){Gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;O!==null&&O.renderStart(S,B);let Y=bt.enabled===!0&&bt.isPresenting===!0,k=T!==null&&(nt===null||Y)&&T.begin(C,nt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(B),B=bt.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,B,nt),b=ot.get(S,x.length),b.init(B),b.state.textureUnits=W.getTextureUnits(),x.push(b),Ht.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Ut.setFromProjectionMatrix(Ht,Dn,B.reversedDepth),Jt=this.localClippingEnabled,Wt=xt.init(this.clippingPlanes,Jt),v=ct.get(S,R.length),v.init(),R.push(v),bt.enabled===!0&&bt.isPresenting===!0){let wt=C.xr.getDepthSensingMesh();wt!==null&&Ko(wt,B,-1/0,C.sortObjects)}Ko(S,B,0,C.sortObjects),v.finish(),O!==null&&O.updateLights(b.state.lightsArray),C.sortObjects===!0&&v.sort(q,rt),de=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,de&&kt.addToRenderList(v,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Wt===!0&&xt.beginShadows();let G=b.state.shadowsArray;if(_t.render(G,S,B),Wt===!0&&xt.endShadows(),(k&&T.hasRenderPass())===!1){let wt=v.opaque,vt=v.transmissive;if(b.setupLights(),B.isArrayCamera){let Pt=B.cameras;if(vt.length>0)for(let Dt=0,$t=Pt.length;Dt<$t;Dt++){let ie=Pt[Dt];Nc(wt,vt,S,ie)}de&&kt.render(S);for(let Dt=0,$t=Pt.length;Dt<$t;Dt++){let ie=Pt[Dt];Uc(v,S,ie,ie.viewport)}}else vt.length>0&&Nc(wt,vt,S,B),de&&kt.render(S),Uc(v,S,B)}nt!==null&&Z===0&&(W.updateMultisampleRenderTarget(nt),W.updateRenderTargetMipmap(nt)),k&&T.end(C),S.isScene===!0&&S.onAfterRender(C,S,B),ut.resetDefaultState(),K=-1,it=null,x.pop(),x.length>0?(b=x[x.length-1],W.setTextureUnits(b.state.textureUnits),Wt===!0&&xt.setGlobalState(C.clippingPlanes,b.state.camera)):b=null,R.pop(),R.length>0?v=R[R.length-1]:v=null,O!==null&&O.renderEnd()};function Ko(S,B,Y,k){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLightProbeGrid)b.pushLightProbeGrid(S);else if(S.isLight)b.pushLight(S),S.castShadow&&b.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Ut)){k&&ue.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Ht);let wt=Q.update(S),vt=S.material;vt.visible&&v.push(S,wt,vt,Y,ue.z,null,B)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Ut))){let wt=Q.update(S),vt=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ue.copy(S.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),ue.copy(wt.boundingSphere.center)),ue.applyMatrix4(S.matrixWorld).applyMatrix4(Ht)),Array.isArray(vt)){let Pt=wt.groups;for(let Dt=0,$t=Pt.length;Dt<$t;Dt++){let ie=Pt[Dt],It=vt[ie.materialIndex];It&&It.visible&&v.push(S,wt,It,Y,ue.z,ie,B)}}else vt.visible&&v.push(S,wt,vt,Y,ue.z,null,B)}}let Mt=S.children;for(let wt=0,vt=Mt.length;wt<vt;wt++)Ko(Mt[wt],B,Y,k)}function Uc(S,B,Y,k){let{opaque:G,transmissive:Mt,transparent:wt}=S;b.setupLightsView(Y),Wt===!0&&xt.setGlobalState(C.clippingPlanes,Y),k&&m.viewport(tt.copy(k)),G.length>0&&Fr(G,B,Y),Mt.length>0&&Fr(Mt,B,Y),wt.length>0&&Fr(wt,B,Y),m.buffers.depth.setTest(!0),m.buffers.depth.setMask(!0),m.buffers.color.setMask(!0),m.setPolygonOffset(!1)}function Nc(S,B,Y,k){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[k.id]===void 0){let It=ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[k.id]=new mn(1,1,{generateMipmaps:!0,type:It?Bn:_n,minFilter:gn,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let Mt=b.state.transmissionRenderTarget[k.id],wt=k.viewport||tt;Mt.setSize(wt.z*C.transmissionResolutionScale,wt.w*C.transmissionResolutionScale);let vt=C.getRenderTarget(),Pt=C.getActiveCubeFace(),Dt=C.getActiveMipmapLevel();C.setRenderTarget(Mt),C.getClearColor(Ft),Bt=C.getClearAlpha(),Bt<1&&C.setClearColor(16777215,.5),C.clear(),de&&kt.render(Y);let $t=C.toneMapping;C.toneMapping=Un;let ie=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),b.setupLightsView(k),Wt===!0&&xt.setGlobalState(C.clippingPlanes,k),Fr(S,Y,k),W.updateMultisampleRenderTarget(Mt),W.updateRenderTargetMipmap(Mt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let pe=0,Ve=B.length;pe<Ve;pe++){let Te=B[pe],{object:Me,geometry:sn,material:Et,group:hn}=Te;if(Et.side===ye&&Me.layers.test(k.layers)){let he=Et.side;Et.side=en,Et.needsUpdate=!0,Fc(Me,Y,k,sn,Et,hn),Et.side=he,Et.needsUpdate=!0,It=!0}}It===!0&&(W.updateMultisampleRenderTarget(Mt),W.updateRenderTargetMipmap(Mt))}C.setRenderTarget(vt,Pt,Dt),C.setClearColor(Ft,Bt),ie!==void 0&&(k.viewport=ie),C.toneMapping=$t}function Fr(S,B,Y){let k=B.isScene===!0?B.overrideMaterial:null;for(let G=0,Mt=S.length;G<Mt;G++){let wt=S[G],{object:vt,geometry:Pt,group:Dt}=wt,$t=wt.material;$t.allowOverride===!0&&k!==null&&($t=k),vt.layers.test(Y.layers)&&Fc(vt,B,Y,Pt,$t,Dt)}}function Fc(S,B,Y,k,G,Mt){O!==null&&G.isNodeMaterial&&O.setObject(S,G),S.onBeforeRender(C,B,Y,k,G,Mt),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),G.onBeforeRender(C,B,Y,k,S,Mt),G.transparent===!0&&G.side===ye&&G.forceSinglePass===!1?(G.side=en,G.needsUpdate=!0,C.renderBufferDirect(Y,B,k,G,S,Mt),G.side=Pi,G.needsUpdate=!0,C.renderBufferDirect(Y,B,k,G,S,Mt),G.side=ye):C.renderBufferDirect(Y,B,k,G,S,Mt),S.onAfterRender(C,B,Y,k,G,Mt)}function Br(S,B,Y){B.isScene!==!0&&(B=ft);let k=U.get(S),G=b.state.lights,Mt=b.state.shadowsArray,wt=G.state.version,vt=dt.getParameters(S,G.state,Mt,B,Y,b.state.lightProbeGridArray),Pt=dt.getProgramCacheKey(vt),Dt=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?B.environment:null,k.fog=B.fog;let $t=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=at.get(S.envMap||k.environment,$t),k.envMapRotation=k.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,Dt===void 0&&(S.addEventListener("dispose",Tt),Dt=new Map,k.programs=Dt);let ie=Dt.get(Pt);if(ie!==void 0){if(k.currentProgram===ie&&k.lightsStateVersion===wt)return Oc(S,vt),ie}else vt.uniforms=dt.getUniforms(S),O!==null&&S.isNodeMaterial&&O.build(S,Y,vt),S.onBeforeCompile(vt,C),ie=dt.acquireProgram(vt,Pt),Dt.set(Pt,ie),k.uniforms=vt.uniforms;let It=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(It.clippingPlanes=xt.uniform),Oc(S,vt),k.needsLights=pd(S),k.lightsStateVersion=wt,k.needsLights&&(It.ambientLightColor.value=G.state.ambient,It.lightProbe.value=G.state.probe,It.sunLights.value=G.state.sun,It.sunLightShadows.value=G.state.sunShadow,It.directionalLights.value=G.state.directional,It.directionalLightShadows.value=G.state.directionalShadow,It.spotLights.value=G.state.spot,It.spotLightShadows.value=G.state.spotShadow,It.rectAreaLights.value=G.state.rectArea,It.ltc_1.value=G.state.rectAreaLTC1,It.ltc_2.value=G.state.rectAreaLTC2,It.pointLights.value=G.state.point,It.pointLightShadows.value=G.state.pointShadow,It.hemisphereLights.value=G.state.hemi,It.sunShadowMatrix.value=G.state.sunShadowMatrix,It.sunShadowCascade.value=G.state.sunShadowCascade,It.directionalShadowMatrix.value=G.state.directionalShadowMatrix,It.spotLightMatrix.value=G.state.spotLightMatrix,It.spotLightMap.value=G.state.spotLightMap,It.pointShadowMatrix.value=G.state.pointShadowMatrix),k.lightProbeGrid=b.state.lightProbeGridArray.length>0,k.currentProgram=ie,k.uniformsList=null,ie}function Bc(S){if(S.uniformsList===null){let B=S.currentProgram.getUniforms();S.uniformsList=Ns.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function Oc(S,B){let Y=U.get(S);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function ud(S,B){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;M.setFromMatrixPosition(B.matrixWorld);for(let Y=0,k=S.length;Y<k;Y++){let G=S[Y];if(G.texture!==null&&G.boundingBox.containsPoint(M))return G}return null}function dd(S,B,Y,k,G){B.isScene!==!0&&(B=ft),W.resetTextureUnits();let Mt=B.fog,wt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?B.environment:null,vt=nt===null?C.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:se.workingColorSpace,Pt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Dt=at.get(k.envMap||wt,Pt),$t=k.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ie=!!Y.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),It=!!Y.morphAttributes.position,pe=!!Y.morphAttributes.normal,Ve=!!Y.morphAttributes.color,Te=Un;k.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(Te=C.toneMapping);let Me=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,sn=Me!==void 0?Me.length:0,Et=U.get(k),hn=b.state.lights;if(Wt===!0&&(Jt===!0||S!==it)){let be=S===it&&k.id===K;xt.setState(k,S,be)}let he=!1;k.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==hn.state.version||Et.outputColorSpace!==vt||G.isBatchedMesh&&Et.batching===!1||!G.isBatchedMesh&&Et.batching===!0||G.isBatchedMesh&&Et.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Et.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Et.instancing===!1||!G.isInstancedMesh&&Et.instancing===!0||G.isSkinnedMesh&&Et.skinning===!1||!G.isSkinnedMesh&&Et.skinning===!0||G.isInstancedMesh&&Et.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Et.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Et.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Et.instancingMorph===!1&&G.morphTexture!==null||Et.envMap!==Dt||k.fog===!0&&Et.fog!==Mt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==xt.numPlanes||Et.numIntersection!==xt.numIntersection)||Et.vertexAlphas!==$t||Et.vertexTangents!==ie||Et.morphTargets!==It||Et.morphNormals!==pe||Et.morphColors!==Ve||Et.toneMapping!==Te||Et.morphTargetsCount!==sn||!!Et.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,Et.__version=k.version);let Sn=Et.currentProgram;he===!0&&(Sn=Br(k,B,G),O&&k.isNodeMaterial&&O.onUpdateProgram(k,Sn,Et));let Gn=!1,di=!1,ss=!1,ge=Sn.getUniforms(),He=Et.uniforms;if(m.useProgram(Sn.program)&&(Gn=!0,di=!0,ss=!0),k.id!==K&&(K=k.id,di=!0),Et.needsLights){let be=ud(b.state.lightProbeGridArray,G);Et.lightProbeGrid!==be&&(Et.lightProbeGrid=be,di=!0)}if(Gn||it!==S){m.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),ge.setValue(N,"projectionMatrix",S.projectionMatrix),ge.setValue(N,"viewMatrix",S.matrixWorldInverse);let pi=ge.map.cameraPosition;pi!==void 0&&pi.setValue(N,jt.setFromMatrixPosition(S.matrixWorld)),w.logarithmicDepthBuffer&&ge.setValue(N,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ge.setValue(N,"isOrthographic",S.isOrthographicCamera===!0),it!==S&&(it=S,di=!0,ss=!0)}if(Et.needsLights&&(hn.state.sunShadowMap.length>0&&ge.setValue(N,"sunShadowMap",hn.state.sunShadowMap,W),hn.state.directionalShadowMap.length>0&&ge.setValue(N,"directionalShadowMap",hn.state.directionalShadowMap,W),hn.state.spotShadowMap.length>0&&ge.setValue(N,"spotShadowMap",hn.state.spotShadowMap,W),hn.state.pointShadowMap.length>0&&ge.setValue(N,"pointShadowMap",hn.state.pointShadowMap,W)),G.isSkinnedMesh){ge.setOptional(N,G,"bindMatrix"),ge.setOptional(N,G,"bindMatrixInverse");let be=G.skeleton;be&&(be.boneTexture===null&&be.computeBoneTexture(),ge.setValue(N,"boneTexture",be.boneTexture,W))}G.isBatchedMesh&&(ge.setOptional(N,G,"batchingTexture"),ge.setValue(N,"batchingTexture",G._matricesTexture,W),ge.setOptional(N,G,"batchingIdTexture"),ge.setValue(N,"batchingIdTexture",G._indirectTexture,W),ge.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&ge.setValue(N,"batchingColorTexture",G._colorsTexture,W));let fi=Y.morphAttributes;if((fi.position!==void 0||fi.normal!==void 0||fi.color!==void 0)&&F.update(G,Y,Sn),(di||Et.receiveShadow!==G.receiveShadow)&&(Et.receiveShadow=G.receiveShadow,ge.setValue(N,"receiveShadow",G.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&B.environment!==null&&(He.envMapIntensity.value=B.environmentIntensity),He.dfgLUT!==void 0&&(He.dfgLUT.value=c_()),di){if(ge.setValue(N,"toneMappingExposure",C.toneMappingExposure),Et.needsLights&&fd(He,ss),Mt&&k.fog===!0&&St.refreshFogUniforms(He,Mt),St.refreshMaterialUniforms(He,k,j,J,b.state.transmissionRenderTarget[S.id]),Et.needsLights&&Et.lightProbeGrid){let be=Et.lightProbeGrid;He.probesSH.value=be.texture,He.probesMin.value.copy(be.boundingBox.min),He.probesMax.value.copy(be.boundingBox.max),He.probesResolution.value.copy(be.resolution)}Ns.upload(N,Bc(Et),He,W)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ns.upload(N,Bc(Et),He,W),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ge.setValue(N,"center",G.center),ge.setValue(N,"modelViewMatrix",G.modelViewMatrix),ge.setValue(N,"normalMatrix",G.normalMatrix),ge.setValue(N,"modelMatrix",G.matrixWorld),k.uniformsGroups!==void 0){let be=k.uniformsGroups;for(let pi=0,rs=be.length;pi<rs;pi++){let Hc=be[pi];st.update(Hc,Sn),st.bind(Hc,Sn)}}return Sn}function fd(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.sunLights.needsUpdate=B,S.sunLightShadows.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function pd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(S,B,Y){let k=U.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),U.get(S.texture).__webglTexture=B,U.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Y,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,B){let Y=U.get(S);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,Y=0){nt=S,X=B,Z=Y;let k=null,G=!1,Mt=!1;if(S){let vt=U.get(S);if(vt.__useDefaultFramebuffer!==void 0){m.bindFramebuffer(N.FRAMEBUFFER,vt.__webglFramebuffer),tt.copy(S.viewport),Lt.copy(S.scissor),Ct=S.scissorTest,m.viewport(tt),m.scissor(Lt),m.setScissorTest(Ct),K=-1;return}else if(vt.__webglFramebuffer===void 0)W.setupRenderTarget(S);else if(vt.__hasExternalTextures)W.rebindTextures(S,U.get(S.texture).__webglTexture,U.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let $t=S.depthTexture;if(vt.__boundDepthTexture!==$t){if($t!==null&&U.has($t)&&(S.width!==$t.image.width||S.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(S)}}let Pt=S.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(Mt=!0);let Dt=U.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Dt[B])?k=Dt[B][Y]:k=Dt[B],G=!0):S.samples>0&&W.useMultisampledRTT(S)===!1?k=U.get(S).__webglMultisampledFramebuffer:Array.isArray(Dt)?k=Dt[Y]:k=Dt,tt.copy(S.viewport),Lt.copy(S.scissor),Ct=S.scissorTest}else tt.copy(et).multiplyScalar(j).floor(),Lt.copy(At).multiplyScalar(j).floor(),Ct=Qt;if(Y!==0&&(k=H),m.bindFramebuffer(N.FRAMEBUFFER,k)&&m.drawBuffers(S,k),m.viewport(tt),m.scissor(Lt),m.setScissorTest(Ct),G){let vt=U.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+B,vt.__webglTexture,Y)}else if(Mt){let vt=B;for(let Pt=0;Pt<S.textures.length;Pt++){let Dt=U.get(S.textures[Pt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Pt,Dt.__webglTexture,Y,vt)}}else if(S!==null&&Y!==0){let vt=U.get(S.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,vt.__webglTexture,Y)}K=-1};function zc(S){let B=U.get(S);return(B.__readFormat!==S.format||B.__readType!==S.type)&&(B.__readFormat=S.format,B.__readType=S.type,B.__formatReadable=w.textureFormatReadable(S.format),B.__typeReadable=w.textureTypeReadable(S.type)),B}this.readRenderTargetPixels=function(S,B,Y,k,G,Mt,wt,vt=0){if(!(S&&S.isWebGLRenderTarget)){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=U.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&wt!==void 0&&(Pt=Pt[wt]),Pt){m.bindFramebuffer(N.FRAMEBUFFER,Pt);try{let Dt=S.textures[vt],$t=Dt.format,ie=Dt.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+vt);let It=zc(Dt);if(It.__formatReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){Gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-k&&Y>=0&&Y<=S.height-G&&N.readPixels(B,Y,k,G,lt.convert($t),lt.convert(ie),Mt)}finally{let Dt=nt!==null?U.get(nt).__webglFramebuffer:null;m.bindFramebuffer(N.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(S,B,Y,k,G,Mt,wt,vt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=U.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&wt!==void 0&&(Pt=Pt[wt]),Pt)if(B>=0&&B<=S.width-k&&Y>=0&&Y<=S.height-G){m.bindFramebuffer(N.FRAMEBUFFER,Pt);let Dt=S.textures[vt],$t=Dt.format,ie=Dt.type;S.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+vt);let It=zc(Dt);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,pe),N.bufferData(N.PIXEL_PACK_BUFFER,Mt.byteLength,N.STREAM_READ),N.readPixels(B,Y,k,G,lt.convert($t),lt.convert(ie),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Ve=nt!==null?U.get(nt).__webglFramebuffer:null;m.bindFramebuffer(N.FRAMEBUFFER,Ve);let Te=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await $h(N,Te,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,pe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Mt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(pe),N.deleteSync(Te),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,B=null,Y=0){let k=Math.pow(2,-Y),G=Math.floor(S.image.width*k),Mt=Math.floor(S.image.height*k),wt=B!==null?B.x:0,vt=B!==null?B.y:0;W.setTexture2D(S,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,wt,vt,G,Mt),m.unbindTexture()},this.copyTextureToTexture=function(S,B,Y=null,k=null,G=0,Mt=0){let wt,vt,Pt,Dt,$t,ie,It,pe,Ve,Te=S.isCompressedTexture?S.mipmaps[Mt]:S.image;if(Y!==null)wt=Y.max.x-Y.min.x,vt=Y.max.y-Y.min.y,Pt=Y.isBox3?Y.max.z-Y.min.z:1,Dt=Y.min.x,$t=Y.min.y,ie=Y.isBox3?Y.min.z:0;else{let He=Math.pow(2,-G);wt=Math.floor(Te.width*He),vt=Math.floor(Te.height*He),S.isDataArrayTexture?Pt=Te.depth:S.isData3DTexture?Pt=Math.floor(Te.depth*He):Pt=1,Dt=0,$t=0,ie=0}k!==null?(It=k.x,pe=k.y,Ve=k.z):(It=0,pe=0,Ve=0);let Me=lt.convert(B.format),sn=lt.convert(B.type),Et;B.isData3DTexture?(W.setTexture3D(B,0),Et=N.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(W.setTexture2DArray(B,0),Et=N.TEXTURE_2D_ARRAY):(W.setTexture2D(B,0),Et=N.TEXTURE_2D),m.activeTexture(N.TEXTURE0),m.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,B.flipY),m.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),m.pixelStorei(N.UNPACK_ALIGNMENT,B.unpackAlignment);let hn=m.getParameter(N.UNPACK_ROW_LENGTH),he=m.getParameter(N.UNPACK_IMAGE_HEIGHT),Sn=m.getParameter(N.UNPACK_SKIP_PIXELS),Gn=m.getParameter(N.UNPACK_SKIP_ROWS),di=m.getParameter(N.UNPACK_SKIP_IMAGES);m.pixelStorei(N.UNPACK_ROW_LENGTH,Te.width),m.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Te.height),m.pixelStorei(N.UNPACK_SKIP_PIXELS,Dt),m.pixelStorei(N.UNPACK_SKIP_ROWS,$t),m.pixelStorei(N.UNPACK_SKIP_IMAGES,ie);let ss=S.isDataArrayTexture||S.isData3DTexture,ge=B.isDataArrayTexture||B.isData3DTexture;if(S.isDepthTexture){let He=U.get(S),fi=U.get(B),be=U.get(He.__renderTarget),pi=U.get(fi.__renderTarget);m.bindFramebuffer(N.READ_FRAMEBUFFER,be.__webglFramebuffer),m.bindFramebuffer(N.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let rs=0;rs<Pt;rs++)ss&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,U.get(S).__webglTexture,G,ie+rs),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,U.get(B).__webglTexture,Mt,Ve+rs)),N.blitFramebuffer(Dt,$t,wt,vt,It,pe,wt,vt,N.DEPTH_BUFFER_BIT,N.NEAREST);m.bindFramebuffer(N.READ_FRAMEBUFFER,null),m.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||S.isRenderTargetTexture||U.has(S)){let He=U.get(S),fi=U.get(B);m.bindFramebuffer(N.READ_FRAMEBUFFER,I),m.bindFramebuffer(N.DRAW_FRAMEBUFFER,z);for(let be=0;be<Pt;be++)ss?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,He.__webglTexture,G,ie+be):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,He.__webglTexture,G),ge?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,fi.__webglTexture,Mt,Ve+be):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,fi.__webglTexture,Mt),G!==0?N.blitFramebuffer(Dt,$t,wt,vt,It,pe,wt,vt,N.COLOR_BUFFER_BIT,N.NEAREST):ge?N.copyTexSubImage3D(Et,Mt,It,pe,Ve+be,Dt,$t,wt,vt):N.copyTexSubImage2D(Et,Mt,It,pe,Dt,$t,wt,vt);m.bindFramebuffer(N.READ_FRAMEBUFFER,null),m.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else ge?S.isDataTexture||S.isData3DTexture?N.texSubImage3D(Et,Mt,It,pe,Ve,wt,vt,Pt,Me,sn,Te.data):B.isCompressedArrayTexture?N.compressedTexSubImage3D(Et,Mt,It,pe,Ve,wt,vt,Pt,Me,Te.data):N.texSubImage3D(Et,Mt,It,pe,Ve,wt,vt,Pt,Me,sn,Te):S.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Mt,It,pe,wt,vt,Me,sn,Te.data):S.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Mt,It,pe,Te.width,Te.height,Me,Te.data):N.texSubImage2D(N.TEXTURE_2D,Mt,It,pe,wt,vt,Me,sn,Te);m.pixelStorei(N.UNPACK_ROW_LENGTH,hn),m.pixelStorei(N.UNPACK_IMAGE_HEIGHT,he),m.pixelStorei(N.UNPACK_SKIP_PIXELS,Sn),m.pixelStorei(N.UNPACK_SKIP_ROWS,Gn),m.pixelStorei(N.UNPACK_SKIP_IMAGES,di),Mt===0&&B.generateMipmaps&&N.generateMipmap(Et),m.unbindTexture()},this.initRenderTarget=function(S){U.get(S).__webglFramebuffer===void 0&&W.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?W.setTextureCube(S,0):S.isData3DTexture?W.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?W.setTexture2DArray(S,0):W.setTexture2D(S,0),m.unbindTexture()},this.resetState=function(){X=0,Z=0,nt=null,m.reset(),ut.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var Se={goldPrimary:"#D4A017",goldBright:"#F5C542",goldShadow:"#8C6A1D",greenMain:"#1B7A4B",greenDeep:"#0E4A2C",leatherBrown:"#5C3A21",furWhite:"#F5F0E6",furGinger:"#C96A2B",furPatchShadow:"#A24E1B",nosePink:"#E8A0A0",eyeAmber:"#FFB84D",steelBlade:"#C0C6CC",gemEmerald:"#34D399",crimsonMain:"#1B7A4B",crimsonDeep:"#0E4A2C",gemRuby:"#34D399"},Ue={redMain:"#A31621",redBright:"#C0392B",redDeep:"#7A0C14",silverMain:"#C9D1D9",silverBright:"#E8EDF2",silverShadow:"#8F98A3",clothWhite:"#F2EFE9",furCharcoal:"#2E2E38",furSilverStripe:"#9AA0AA",furBelly:"#B9BFC7",eyeJade:"#FF8A80",noseBlack:"#1A1A22",gemRuby:"#C22240",steelBlade:"#C0C6CC",emeraldMain:"#A31621",emeraldBright:"#C0392B",emeraldDeep:"#7A0C14",gemEmerald:"#C22240"},Ge={BUY:"#26A69A",BUY_BRIGHT:"#35D07F",BUY_DEEP:"#0E4A2C",SELL:"#EF5350",SELL_BRIGHT:"#FF8A80",SELL_DEEP:"#7A0C14"},fe={skyZenith:"#05060F",skyHorizon:"#0D1030",fog:"#1A1626",moonBtc:"#F7931A",moonHalo:"#FFB84D",moonSymbol:"#7A4A08",stoneWall:"#B98A5A",stoneShadow:"#6E523A",stonePole:"#8E8E80",tileBlue:"#1F5FA8",tileWhite:"#F2EFE9",tileEmerald:"#12755F",floorBase:"#D9CDB4",floorGrout:"#6E5A42",torchFlame:"#FF9D45",torchGlow:"#FFC97A",iron:"#3A3A40",flagUp:"#26A69A",flagDown:"#EF5350",ropeHemp:"#A67B4F",ropeFiber:"#8A6238",frieze:"#C9B389"},Cr={gold:{metalness:.85,roughness:.35},goldBright:{metalness:.85,roughness:.28},steel:{metalness:.9,roughness:.25},silver:{metalness:.85,roughness:.3},cloth:{metalness:0,roughness:.9},fur:{metalness:0,roughness:.95}},ae={spanHalf:10,ropeY:3.2,ropeRadius:.065,ropeSegments:24,restSagOne:.34,restSagTwo:.5,damping:.93,swayClamp:.12,impulseScale:.16,ropeSmooth:20,poleClearance:1.5,catHeight:1.3,minBodyGap:.78,minHeadCentre:.8};var Ho=4;function Pu(i){Ho=Math.max(1,Math.min(16,Math.round(i)||1))}function Xe(i,{repeatX:t=1,repeatY:e=1,srgb:n=!0}={}){let s=new on(i);return n&&(s.colorSpace=Pe),s.wrapS=s.wrapT=Mi,s.repeat.set(t,e),s.generateMipmaps=!0,s.minFilter=gn,s.magFilter=ke,s.anisotropy=Ho,s}function Ui(i,t){let e=document.createElement("canvas");e.width=e.height=i;let n=e.getContext("2d");return n.fillStyle=t,n.fillRect(0,0,i,i),{c:e,g:n,size:i}}function hi(i){let t=i|0||1;return()=>(t=t*16807%2147483647,t%1e5/1e5)}function On(i,t=1){let e=document.createElement("canvas");e.width=i.width,e.height=i.height;let n=e.getContext("2d");n.drawImage(i,0,0);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a+=4){let c=r[a]*.299+r[a+1]*.587+r[a+2]*.114,l=Math.max(0,Math.min(255,128+(c-128)*t));r[a]=r[a+1]=r[a+2]=l}n.putImageData(s,0,0);let o=new on(e);return o.wrapS=o.wrapT=Mi,o.generateMipmaps=!0,o.minFilter=gn,o.anisotropy=Ho,o}function h_(i,t=.45,e=.98){let n=document.createElement("canvas");n.width=i.width,n.height=i.height;let s=n.getContext("2d");s.drawImage(i,0,0);let r=s.getImageData(0,0,n.width,n.height),o=r.data;for(let c=0;c<o.length;c+=4){let l=(o[c]*.299+o[c+1]*.587+o[c+2]*.114)/255,h=Math.round(255*(e-(e-t)*l));o[c]=o[c+1]=o[c+2]=h}s.putImageData(r,0,0);let a=new on(n);return a.wrapS=a.wrapT=Mi,a.generateMipmaps=!0,a.minFilter=gn,a.anisotropy=Ho,a}function u_({seed:i=3,stripes:t=0,blotch:e=0,grain:n=.1,base:s="#ffffff",dark:r="#b9b9c4"}={}){let{c:o,g:a,size:c}=Ui(256,s),l=hi(i);if(e){for(let d=0;d<e;d++){let u=l()*c,f=l()*c,_=24+l()*46,y=a.createRadialGradient(u,f,_*.15,u,f,_);y.addColorStop(0,r),y.addColorStop(.7,r),y.addColorStop(1,"rgba(255,255,255,0)"),a.globalAlpha=.45+l()*.25,a.fillStyle=y,a.beginPath(),a.arc(u,f,_,0,Math.PI*2),a.fill()}a.globalAlpha=1}if(t){for(let d=0;d<t;d++){let u=(d+.5)*(c/t)+(l()-.5)*14,f=8+l()*10,_=-24-l()*30;for(;_<c+24;){let y=l()<.29?6+l()*22:0;_+=y;let g=16+l()*40,p=c/t*(.22+l()*.34),E=u+Math.sin(_*.035+d*1.7)*f;a.fillStyle=r,a.globalAlpha=.34+l()*.3,a.beginPath(),a.ellipse(_+g/2,E,g/2+6,p/2,(l()-.5)*.22,0,Math.PI*2),a.fill(),_+=g}}a.globalAlpha=1}let h=hi(i*7+11);for(let d=0;d<1100;d++){let u=h()*c,f=h()*c,_=4+h()*9,y=h()*Math.PI*2;a.strokeStyle=h()<.5?"rgba(255,255,255,0.42)":"rgba(96,90,102,0.34)",a.lineWidth=1.1+h()*1.6,a.beginPath(),a.moveTo(u,f),a.lineTo(u+Math.cos(y)*_,f+Math.sin(y)*_),a.stroke()}for(let d=0;d<90;d++){let u=h()*c,f=h()*c,_=5+h()*13,y=a.createRadialGradient(u,f,0,u,f,_),g=h()<.5;y.addColorStop(0,g?"rgba(255,255,255,0.30)":"rgba(70,64,76,0.26)"),y.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=y,a.beginPath(),a.arc(u,f,_,0,Math.PI*2),a.fill()}return o}function Pr(i={}){let t=u_(i),e=Xe(t,{repeatX:i.repeatX||1.2,repeatY:i.repeatY||1.2,srgb:!0}),n=On(t,.8);return n.repeat.copy(e.repeat),{map:e,bump:n}}function d_({seed:i=5,base:t="#ffffff",thread:e="rgba(64,54,44,0.46)",weave:n=10}={}){let{c:s,g:r,size:o}=Ui(128,t);r.strokeStyle=e,r.lineWidth=2;for(let c=0;c<o;c+=n)r.beginPath(),r.moveTo(c,0),r.lineTo(c,o),r.stroke(),r.beginPath(),r.moveTo(0,c),r.lineTo(o,c),r.stroke();let a=hi(i);for(let c=-o;c<o;c+=n)r.strokeStyle="rgba(255,255,255,0.24)",r.beginPath(),r.moveTo(c,0),r.lineTo(c+o,o),r.stroke();for(let c=0;c<420;c++)r.fillStyle=a()<.5?"rgba(255,255,255,0.20)":"rgba(40,34,30,0.20)",r.fillRect(a()*o,a()*o,3,2);return s}function ji(i={}){let t=d_(i),e=Xe(t,{repeatX:i.repeatX||3,repeatY:i.repeatY||3,srgb:!0}),n=On(t,.9);return n.repeat.copy(e.repeat),{map:e,bump:n}}function f_({seed:i=9,base:t="#ffffff",streak:e=.22,scratches:n=260}={}){let{c:s,g:r,size:o}=Ui(128,t),a=hi(i);for(let c=0;c<n;c++){let l=a()*o,h=e*(.3+a());r.strokeStyle=a()<.5?`rgba(255,255,255,${h})`:`rgba(60,66,74,${h})`,r.lineWidth=.6+a()*1.3,r.beginPath(),r.moveTo(0,l),r.bezierCurveTo(o*.3,l+(a()-.5)*3,o*.7,l+(a()-.5)*3,o,l+(a()-.5)*2),r.stroke()}for(let c=0;c<5;c++){r.strokeStyle="rgba(40,44,52,0.35)",r.lineWidth=1.4;let l=a()*o;r.beginPath(),r.moveTo(a()*o*.5,l),r.lineTo(o*(.6+a()*.4),l+(a()-.5)*4),r.stroke()}return s}function Ni(i={}){let t=f_(i),e=Xe(t,{repeatX:i.repeatX||1,repeatY:i.repeatY||1,srgb:!0}),n=On(t,.35);return n.repeat.copy(e.repeat),{map:e,bump:n}}function p_({seed:i=13,base:t="#ffffff"}={}){let{c:e,g:n,size:s}=Ui(128,t),r=hi(i);for(let o=0;o<900;o++){let a=r()*s,c=r()*s,l=1+r()*3.4;n.fillStyle=r()<.5?"rgba(255,255,255,0.16)":"rgba(50,34,22,0.20)",n.beginPath(),n.ellipse(a,c,l,l*.7,r()*3,0,Math.PI*2),n.fill()}for(let o=0;o<26;o++){n.strokeStyle="rgba(50,34,22,0.18)",n.lineWidth=.9,n.beginPath();let a=r()*s,c=r()*s;n.moveTo(a,c),n.quadraticCurveTo(a+(r()-.5)*40,c+(r()-.5)*40,a+(r()-.5)*70,c+(r()-.5)*70),n.stroke()}return e}function wc(i={}){let t=p_(i),e=Xe(t,{repeatX:1,repeatY:1,srgb:!0}),n=On(t,.8);return{map:e,bump:n}}function m_({seed:i=21,base:t="#ffffff",blocks:e=4,alpha:n=.22,speckle:s=1200,size:r=256}={}){let{c:o,g:a}=Ui(r,t),c=hi(i),l=r/e;for(let h=0;h<e;h++){let d=h%2*(r/(e*2));for(let u=0;u<e;u++){let f=d+u*r/e-r/(e*2),_=c();a.fillStyle=_<.35?"rgba(255,255,255,0.10)":_<.7?"rgba(120,96,70,0.10)":"rgba(255,246,232,0.06)",a.fillRect(f,h*l,r/e,l)}}for(let h=0;h<=e;h++){let d=h*l;a.strokeStyle=`rgba(58,44,32,${n+.12})`,a.lineWidth=3,a.beginPath(),a.moveTo(0,d),a.lineTo(r,d),a.stroke(),a.strokeStyle="rgba(255,248,236,0.16)",a.lineWidth=1.6,a.beginPath(),a.moveTo(0,d+2.4),a.lineTo(r,d+2.4),a.stroke();let u=h%2*(r/(e*2));for(let f=0;f<e;f++){let _=u+f*r/e;a.strokeStyle=`rgba(58,44,32,${n+.12})`,a.lineWidth=3,a.beginPath(),a.moveTo(_,d),a.lineTo(_,d+l),a.stroke()}}for(let h=0;h<s;h++){let d=c()*r,u=c()*r,f=.6+c()*2.2;a.fillStyle=c()<.5?"rgba(255,255,255,0.16)":"rgba(48,36,26,0.18)",a.fillRect(d,u,f,f)}for(let h=0;h<14;h++){let d=c()*r;a.strokeStyle="rgba(70,54,38,0.12)",a.lineWidth=2+c()*6,a.beginPath(),a.moveTo(d,0),a.lineTo(d+(c()-.5)*20,r),a.stroke()}for(let h=0;h<26;h++){let d=c()*r,u=c()*r,f=2+c()*7,_=a.createRadialGradient(d,u,0,d,u,f);_.addColorStop(0,"rgba(60,46,32,0.22)"),_.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=_,a.beginPath(),a.arc(d,u,f,0,Math.PI*2),a.fill()}return o}function Ir(i={}){let t=m_(i),e=Xe(t,{repeatX:i.repeatX||2,repeatY:i.repeatY||2,srgb:!0}),n=On(t,1.1);return n.repeat.copy(e.repeat),{map:e,bump:n}}function g_({seed:i=31,size:t=256,twistPeriod:e=96}={}){let{c:n,g:s}=Ui(t,"#8a6140"),r=hi(i),o=3,a=t/o,c=22,l=u=>{for(let f of[-t,0,t])s.save(),s.translate(0,f),u(),s.restore()},h=["rgba(182,136,84,1)","rgba(220,172,116,1)","rgba(154,110,64,1)"];for(let u=0;u<o;u++)l(()=>{s.fillStyle=h[u],s.beginPath(),s.moveTo(0,u*a),s.lineTo(t,u*a+c),s.lineTo(t,(u+1)*a+c),s.lineTo(0,(u+1)*a),s.closePath(),s.fill()});for(let u=1;u<=o;u++){let f=u*a;l(()=>{s.strokeStyle="rgba(40,22,8,0.44)",s.lineWidth=28,s.beginPath(),s.moveTo(0,f),s.lineTo(t,f+c),s.stroke(),s.strokeStyle="rgba(20,10,4,0.66)",s.lineWidth=13,s.beginPath(),s.moveTo(0,f),s.lineTo(t,f+c),s.stroke(),s.strokeStyle="rgba(255,242,214,0.46)",s.lineWidth=8,s.beginPath(),s.moveTo(0,f-12),s.lineTo(t,f+c-12),s.stroke()})}for(let u=0;u<900;u++){let f=r()*t,_=r()*t,y=10+r()*34,g=(r()-.5)*5+c*(y/t);s.strokeStyle=r()<.5?"rgba(244,222,184,0.40)":"rgba(52,32,14,0.36)",s.lineWidth=.9+r()*1.8,s.beginPath(),s.moveTo(f,_),s.lineTo(f+y,_+g),s.stroke()}for(let u=-t;u<t*2;u+=e)l(()=>{s.strokeStyle="rgba(40,24,10,0.30)",s.lineWidth=16,s.beginPath(),s.moveTo(u,0),s.lineTo(u+34,t),s.stroke(),s.strokeStyle="rgba(255,238,206,0.22)",s.lineWidth=9,s.beginPath(),s.moveTo(u+16,0),s.lineTo(u+50,t),s.stroke()});for(let u=0;u<20;u++)s.fillStyle="rgba(46,30,14,0.16)",s.beginPath(),s.ellipse(r()*t,r()*t,12+r()*24,6+r()*10,r()*3,0,Math.PI*2),s.fill();let d=s.createLinearGradient(0,0,0,t);return d.addColorStop(0,"rgba(255,246,224,0.16)"),d.addColorStop(.35,"rgba(255,255,255,0)"),d.addColorStop(.5,"rgba(0,0,0,0.12)"),d.addColorStop(.75,"rgba(255,255,255,0)"),d.addColorStop(1,"rgba(255,246,224,0.14)"),s.fillStyle=d,s.fillRect(0,0,t,t),n}function Iu({repeatX:i=4,repeatY:t=1,seed:e=31,twists:n=2}={}){let s=g_({seed:e,twists:n,twistPeriod:256/n}),r=Xe(s,{repeatX:i,repeatY:t,srgb:!0}),o=On(s,2.2);o.repeat.copy(r.repeat);let a=h_(s,.45,.95);return a.repeat.copy(r.repeat),{map:r,bump:o,rough:a}}function __({seed:i=71,size:t=128,pleats:e=26,base:n="#fbf7ee",dark:s="rgba(150,140,124,0.42)"}={}){let{c:r,g:o}=Ui(t,n),a=hi(i),c=t/e;for(let l=0;l<e;l++){let h=l*c,d=o.createLinearGradient(h,0,h+c,0);d.addColorStop(0,s),d.addColorStop(.35,"rgba(255,255,255,0.55)"),d.addColorStop(.7,"rgba(255,255,255,0.1)"),d.addColorStop(1,s),o.fillStyle=d,o.fillRect(h,0,c,t)}for(let l=0;l<500;l++)o.fillStyle=a()<.5?"rgba(255,255,255,0.16)":"rgba(120,112,98,0.12)",o.fillRect(a()*t,a()*t,2,1+a()*2);return r}function Ac({repeatX:i=1,repeatY:t=1,...e}={}){let n=__(e),s=Xe(n,{repeatX:i,repeatY:t,srgb:!0}),r=On(n,1.1);return r.repeat.copy(s.repeat),{map:s,bump:r}}function x_({seed:i=73,size:t=128,base:e="#ffffff",slash:n="rgba(28,14,10,0.66)",n:s=7}={}){let{c:r,g:o}=Ui(t,e),a=hi(i);for(let c=0;c<s;c++){let l=(c+.5)*(t/s),h=t/s*(.3+a()*.25);o.fillStyle=n,o.beginPath(),o.ellipse(t/2,l,t*.34,h/2,0,0,Math.PI*2),o.fill(),o.fillStyle="rgba(255,240,214,0.5)",o.beginPath(),o.ellipse(t/2,l+h*.28,t*.26,h*.16,0,0,Math.PI*2),o.fill()}for(let c=0;c<320;c++)o.fillStyle=a()<.5?"rgba(255,255,255,0.14)":"rgba(50,30,20,0.14)",o.fillRect(a()*t,a()*t,2+a()*2,1+a()*2);return r}function Lu({repeatX:i=2,repeatY:t=2,...e}={}){let n=x_(e),s=Xe(n,{repeatX:i,repeatY:t,srgb:!0}),r=On(n,1);return r.repeat.copy(s.repeat),{map:s,bump:r}}var zn=L,Rc=class{constructor(t,e=112,n=12){this.T=e,this.R=n,this.radius=t,this.bulge=.09,this.bulgeCount=8,this.lay=.16;let s=this.T+1,r=this.R+1;this.count=s*r,this.pos=new Float32Array(this.count*3),this.nrm=new Float32Array(this.count*3),this.uv=new Float32Array(this.count*2);let o=[];for(let a=1;a<=this.T;a++)for(let c=1;c<=this.R;c++){let l=r*(a-1)+(c-1),h=r*a+(c-1),d=r*a+c,u=r*(a-1)+c;o.push(l,h,u,h,d,u)}this.index=o,this.geo=new _e,this.geo.setAttribute("position",new Ie(this.pos,3).setUsage(Ji)),this.geo.setAttribute("normal",new Ie(this.nrm,3).setUsage(Ji)),this.geo.setAttribute("uv",new Ie(this.uv,2)),this.geo.setIndex(o),this.cos=new Float32Array(r),this.sin=new Float32Array(r);for(let a=0;a<=this.R;a++){let c=a/this.R*Math.PI*2;this.cos[a]=Math.cos(c),this.sin[a]=Math.sin(c)}for(let a=0;a<=this.T;a++)for(let c=0;c<=this.R;c++){let l=(a*r+c)*2;this.uv[l]=a/this.T,this.uv[l+1]=c/this.R}this.pts=Array.from({length:s},()=>new zn),this.tan=Array.from({length:s},()=>new zn),this.nor=Array.from({length:s},()=>new zn),this.bin=Array.from({length:s},()=>new zn)}update(t){let{T:e,R:n,pts:s,tan:r,nor:o,bin:a}=this;for(let l=0;l<=e;l++)t(l/e,s[l]);for(let l=0;l<=e;l++){let h=s[Math.max(0,l-1)],d=s[Math.min(e,l+1)];r[l].subVectors(d,h),r[l].lengthSq()<1e-10&&r[l].set(1,0,0),r[l].normalize()}o[0].set(-r[0].y,r[0].x,0),o[0].lengthSq()<1e-6&&o[0].set(0,1,0),o[0].normalize();for(let l=1;l<=e;l++)o[l].copy(o[l-1]).addScaledVector(r[l],-r[l].dot(o[l-1])),o[l].lengthSq()<1e-8&&(o[l].set(0,1,0).addScaledVector(r[l],-r[l].y),o[l].lengthSq()<1e-8&&o[l].set(0,0,1)),o[l].normalize();let c=n+1;for(let l=0;l<=e;l++){a[l].crossVectors(r[l],o[l]).normalize();let h=s[l],d=o[l],u=a[l],f=l/e*this.bulgeCount*Math.PI*2,_=this.radius*(1+this.bulge*Math.sin(f)),y=this.lay>0?f*1:0,g=Math.cos(y),p=Math.sin(y),E=1+this.lay,A=1-this.lay;for(let M=0;M<=n;M++){let v=this.cos[M],b=this.sin[M];if(this.lay>0){let O=v*g+b*p,H=b*g-v*p;v=O*E,b=H*A}let R=d.x*v+u.x*b,x=d.y*v+u.y*b,T=d.z*v+u.z*b,C=1/Math.max(1e-6,Math.hypot(R,x,T)),D=(l*c+M)*3;this.pos[D]=h.x+R*_*C,this.pos[D+1]=h.y+x*_*C,this.pos[D+2]=h.z+T*_*C,this.nrm[D]=R*C,this.nrm[D+1]=x*C,this.nrm[D+2]=T*C}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0}},ko=class{constructor({segments:t=ae.ropeSegments,spanHalf:e=ae.spanHalf,y:n=ae.ropeY,damping:s=ae.damping,swayClamp:r=ae.swayClamp}={}){this.N=t,this.count=t+1,this.spanHalf=e,this.restY=n,this.damping=s,this.swayClamp=r,this.restLen=e*2/t,this.pos=[],this.prev=[],this.acc=[],this.rpos=[],this.spos=[],this.pinned=new Set([0,this.count-1]);for(let a=0;a<this.count;a++){let c=a/this.N,l=-e+2*e*c,h=n-ae.restSagTwo*Math.sin(Math.PI*c);this.pos.push(new zn(l,h,0)),this.prev.push(new zn(l,h,0)),this.acc.push(new zn(0,0,0)),this.rpos.push(new zn(l,h,0)),this.spos.push(new zn(l,h,0))}this.weights=new Map,this._accum=0,this._tmp=new zn,this.tube=new Rc(ae.ropeRadius);let o=Iu({repeatX:4,repeatY:1,seed:31,twists:2});this.mat=new ln({map:o.map,bumpMap:o.bump,bumpScale:.9,roughnessMap:o.rough,roughness:1,metalness:0,color:16777215}),this.mesh=new qt(this.tube.geo,this.mat),this.mesh.castShadow=!1,this.mesh.frustumCulled=!1,this.mesh.boundingSphere=new ai(new zn(0,this.restY,0),e+1),this._curvePts=this.spos.map(a=>a.clone()),this.curve=new Ei(this._curvePts,!1,"catmullrom",.5)}setLoad(t,e){let n=this._nearestIndex(t);this.weights.set(n,(this.weights.get(n)||0)+e)}clearLoads(){this.weights.clear()}_nearestIndex(t){let e=Be.clamp((t+this.spanHalf)/(2*this.spanHalf),0,1);return Math.round(e*this.N)}injectImpulse(t,e,n,s){let r=this._nearestIndex(t),o=ae.impulseScale;for(let a of[r-1,r,r+1]){if(a<0||a>=this.count||this.pinned.has(a))continue;let c=(a===r?1:.5)*o;this.prev[a].x-=e*c,this.prev[a].y-=n*c,this.prev[a].z-=s*c}}step(t){this._accum=Math.min(this._accum+t,.1);let e=1/120,n=0;for(;this._accum>=e&&n++<16;)this._sub(e),this._accum-=e;this._relax(t)}_relax(t){let e=1-Math.exp(-(ae.ropeSmooth||20)*Math.min(t,.05)),{pos:n,rpos:s,spos:r,count:o}=this;for(let a=0;a<o;a++)s[a].lerp(n[a],e);for(let a=0;a<o;a++){if(this.pinned.has(a)){r[a].copy(s[a]);continue}let c=s[Math.max(0,a-1)],l=s[a],h=s[Math.min(o-1,a+1)];r[a].set(c.x*.25+l.x*.5+h.x*.25,c.y*.25+l.y*.5+h.y*.25,c.z*.25+l.z*.5+h.z*.25)}}_sub(t){let{pos:e,prev:n,acc:s}=this;for(let r=0;r<this.count;r++)s[r].set(0,-5.2,0);for(let[r,o]of this.weights)s[r].y-=o*4.2,r>0&&(s[r-1].y-=o*2),r<this.count-1&&(s[r+1].y-=o*2);for(let r=0;r<this.count;r++){if(this.pinned.has(r))continue;let o=e[r],a=n[r],c=s[r],l=o.x+(o.x-a.x)*this.damping+c.x*t*t,h=o.y+(o.y-a.y)*this.damping+c.y*t*t,d=o.z+(o.z-a.z)*this.damping+c.z*t*t;a.copy(o),o.set(l,h,d)}for(let r=0;r<10;r++){for(let o=0;o<this.N;o++){let a=e[o],c=e[o+1];this._tmp.subVectors(c,a);let l=this._tmp.length()||1e-6,h=(l-this.restLen)/l,d=this.pinned.has(o),u=this.pinned.has(o+1);if(d&&u)continue;let f=d?0:u?1:.5,_=u?0:d?1:.5;a.addScaledVector(this._tmp,h*f),c.addScaledVector(this._tmp,-h*_)}e[0].set(-this.spanHalf,this.restY,0),e[this.count-1].set(this.spanHalf,this.restY,0);for(let o=0;o<this.count;o++){let a=e[o];a.z=Be.clamp(a.z,-this.swayClamp,this.swayClamp),a.y=Math.min(a.y,this.restY+.18)}}}yAt(t){let n=Be.clamp((t+this.spanHalf)/(2*this.spanHalf),0,1)*this.N,s=Math.min(Math.floor(n),this.N-1),r=n-s;return this.spos[s].y*(1-r)+this.spos[s+1].y*r}slopeAt(t){return(this.yAt(t+.3)-this.yAt(t-.3))/(2*.3)}pointAt(t){return this.spos[Be.clamp(t,0,this.count-1)]}updateVisual(){for(let n=0;n<this.count;n++)this._curvePts[n].copy(this.spos[n]);let t=this.curve;this.tube.update((n,s)=>t.getPoint(n,s))}sagAmount(){return this.restY-this.yAt(0)}};var Qi=512,Fi=320,Go=class{constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=Qi,this.canvas.height=Fi,this.g=this.canvas.getContext("2d"),this.texture=new on(this.canvas),this.texture.colorSpace=Pe,this.texture.anisotropy=4,this.mat=new De({map:this.texture,side:ye,transparent:!0}),this.plane=new qt(new xe(1.6,1),this.mat),this.group=new ee,this.hanger=new ee;let t=new ln({color:4864808,roughness:.8,metalness:.3}),e=new qt(new Re(.018,.018,.9,6),t);e.position.y=-.45;let n=new qt(new Re(.012,.012,1.7,6),t);n.rotation.z=Math.PI/2,n.position.y=-.9;let s=new qt(new Ti(.05,.012,6,12,Math.PI),t);s.position.y=-.02,this.hanger.add(e,n,s),this.plane.position.y=-1.42,this.group.add(this.hanger,this.plane),this.price=0,this.chg24h=0,this.chg24hText="",this.bob=0,this.bobVel=0,this.flash=0,this.spin=0,this._lastDir=1,this.lastDrawnKey=""}setPrice(t){if(!t||t<=0||t===this.price)return;let e=this.price;if(this.price=t,e>0){let n=t>e?1:-1;this.bobVel+=n*.5,Math.abs(t-e)/e>.001&&(this.flash=.15)}this._draw()}setChange24h(t){this.chg24h=t,this.chg24hText="",this._draw()}setChange24hText(t){this.chg24hText=t||"",this._draw()}_draw(){let t=this.g,e=this._lastDir===-1?fe.flagDown:fe.flagUp,n=`${this.price.toFixed(1)}|${e}|${this.chg24hText||this.chg24h.toFixed(2)}`;if(n===this.lastDrawnKey)return;this.lastDrawnKey=n,t.clearRect(0,0,Qi,Fi),t.fillStyle=e,t.beginPath(),t.moveTo(14,10),t.lineTo(Qi-14,10),t.lineTo(Qi-34,Fi/2),t.lineTo(Qi-14,Fi-10),t.lineTo(14,Fi-10),t.lineTo(34,Fi/2),t.closePath(),t.fill(),t.strokeStyle="rgba(255,255,255,0.85)",t.lineWidth=8,t.stroke();let s=this.price>0?this.price.toLocaleString("en-US",{minimumFractionDigits:1,maximumFractionDigits:1}):"--";t.fillStyle="#FFFFFF",t.textAlign="center",t.font='bold 92px "Consolas", "Courier New", monospace',t.fillText(s,Qi/2,Fi/2+18),t.font='bold 34px "Consolas", monospace',t.fillText("USDT",Qi/2,Fi/2+62),t.font='bold 44px "Consolas", monospace',t.fillStyle="rgba(255,255,255,0.95)",this.chg24hText?(t.textAlign="left",t.fillText(this.chg24hText,34,58)):(t.font='bold 56px "Segoe UI Symbol", sans-serif',t.textAlign="center",t.fillText(this.chg24h>=0?"\u2191":"\u2193",62,62)),this.texture.needsUpdate=!0}tickDir(t){this._lastDir=t}update(t,e,n){this.bobVel+=-this.bob*30*t-this.bobVel*4*t,this.bob+=this.bobVel*t,this.bob=Be.clamp(this.bob,-.12,.12),this.flash>0?(this.flash-=t,this.plane.material.color.setScalar(1+Math.max(this.flash,0)*4)):this.plane.material.color.setScalar(1),this.spin>0&&(this.spin=Math.max(0,this.spin-t*2));let s=e.pointAt(8);this.group.position.set(s.x,s.y+this.bob,Be.clamp(s.z,-.3,.3)),this.group.rotation.z=Be.clamp(-e.slopeAt(s.x)*.5,-.35,.35),this.group.rotation.x=s.z*.8,this.plane.rotation.y=Math.sin(performance.now()*.0012)*.12+this.spin*6.28}};var Os=L,Bs=Be.clamp,Du=Be.lerp,Cc=new Map;function Oe(i,t){return Cc.has(i)||Cc.set(i,t()),Cc.get(i)}function Zt(i,t="fur",e={},n=null){var r;let s=new ln({color:i,...Cr[t],...e});return n&&(s.map=n.map,n.bump&&(s.bumpMap=n.bump,s.bumpScale=(r=e.bumpScale)!=null?r:.06)),s}function gt(i,t,e=0,n=0,s=0){let r=new qt(i,t);return r.position.set(e,n,s),r.castShadow=!0,r}var Ne=(i,t,e=14,n=10)=>new Jn(i,e,n),Nu=(i,t)=>new ar(i,t,4,10),Hn=(i,t,e)=>new Ye(i,t,e),Uu=(i,t,e=10)=>new Xi(i,t,e),Fe=(i,t,e=Math.PI*2)=>new Ti(i,t,8,20,e),ts=(i,t,e,n=10)=>new Re(i,t,e,n);function Lr(i,t,e,n,s,r,o){let a=new ee;a.position.set(t,e,n);let c=gt(Nu(r,s),o,0,-s/2,0);return a.add(c),i.add(a),a}function Fu(i){let t=new ee,e=Oe(`fur-${i.furKey}`,()=>Pr(i.furOpts)),n=i.furBellyKey?Oe(`fur-${i.furBellyKey}`,()=>Pr(i.furBellyOpts)):e,s={fur:Zt(i.furBase,"fur",{bumpScale:.04},e),belly:Zt(i.furBelly,"fur",{bumpScale:.03},n),inner:Zt(i.earInner,"fur",{},e),eye:Zt(i.eye,"steel",{emissive:i.eye,emissiveIntensity:i.eyeGlow,roughness:.35}),pupil:Zt("#101014","fur"),nose:Zt(i.nose,"fur"),whisker:Zt("#FFFFFF","fur",{roughness:.45}),mouth:Zt("#241A14","fur")},r=new ee;r.position.y=.52,t.add(r);let o=gt(Ne(.15),s.fur,0,0,0);o.scale.set(1.1,.9,1),r.add(o);let a=new ee;r.add(a);let c=gt(Nu(.155,.28),s.fur,.05,.3,0);c.rotation.z=-.15,a.add(c);let l=gt(Ne(.13),s.belly,.02,.22,0);l.scale.set(1.1,1,.8),a.add(l);let h=new ee;h.position.set(.1,.62,0),a.add(h);let d=gt(Ne(.205,18,14),s.fur);d.scale.set(1.05,.95,.95),h.add(d);let u=gt(Hn(.2,.11,.16),s.fur,.17,-.05,0);h.add(u);let f=gt(Ne(.028,8,6),s.nose,.27,-.03,0);h.add(f);let _=gt(Fe(.05,.008,Math.PI*.9),s.mouth,.24,-.09,0);_.rotation.y=Math.PI/2,_.rotation.z=Math.PI+.25,h.add(_);for(let M of[1,-1]){let v=gt(Ne(.045,12,10),s.eye,.12,.07,M*.105);h.add(v);let b=gt(Hn(.012,.05,.02),s.pupil,.158,.07,M*.107);h.add(b)}let y=[];for(let M of[1,-1]){let v=new ee;v.position.set(-.02,.17,M*.12);let b=gt(Uu(.055,.13),s.fur,0,.05,0),R=gt(Uu(.03,.08),s.inner,.012,.04,0);v.add(b,R),h.add(v),y.push(v)}for(let M of[1,-1])for(let v=0;v<3;v++){let b=gt(ts(.003,.003,.3,4),s.whisker,.2,-.04+v*.03,M*.09);b.rotation.z=Math.PI/2+.12,b.rotation.x=M*(.25+v*.18),h.add(b)}let g={};for(let M of["L","R"]){let b=Lr(a,.08,.44,M==="L"?-.17:.17,.2,.052,s.fur),R=Lr(b,0,-.22,0,.19,.046,s.fur),x=gt(Ne(.055,10,8),s.fur,0,-.21,0);R.add(x),g[M]={shoulder:b,elbow:R,paw:x}}let p={};for(let M of["L","R"]){let b=Lr(r,-.02,-.05,M==="L"?-.09:.09,.2,.062,s.fur),R=Lr(b,0,-.22,0,.18,.05,s.fur),x=gt(Hn(.14,.05,.09),s.fur,.03,-.2,0);R.add(x),p[M]={hip:b,knee:R,foot:x}}let E=[],A=new ee;A.position.set(-.12,.02,0),r.add(A);for(let M=0;M<6;M++){let v=Lr(M===0?A:E[M-1],0,M===0?0:-.13,0,.11,.038-M*.003,s.fur);E.push(v)}return{root:t,hips:r,spine:a,head:h,ears:y,arms:g,legs:p,tail:E,M:s,furPair:e}}function y_(){let i=new ee,t=Oe("steel",()=>Ni({seed:41,base:"#ffffff",streak:.24})),e=Oe("gold",()=>Ni({seed:42,base:"#ffffff",streak:.16,scratches:180})),n=Oe("leather",()=>wc({seed:43})),s=Zt(Se.steelBlade,"steel",{},t),r=Zt(Se.goldPrimary,"gold",{},e),o=gt(ts(.016,.018,.13,8),Zt(Se.leatherBrown,"cloth",{},n),-.05,0,0);o.rotation.z=Math.PI/2,i.add(o);let a=gt(Fe(.05,.011),r,.02,0,0);a.rotation.y=Math.PI/2,i.add(a),i.add(gt(Ne(.02,8,6),r,.025,0,0));let c=gt(ts(.006,.013,1.1,6),s,.61,0,0);return c.rotation.z=-Math.PI/2,i.add(c),i.add(gt(Ne(.03,10,8),Zt(Se.gemRuby,"gold",{emissive:Se.gemRuby,emissiveIntensity:.35}),-.125,0,0)),i}function v_(){let i=new ee,t=Oe("steel",()=>Ni({seed:41,base:"#ffffff",streak:.24})),e=Oe("silver",()=>Ni({seed:44,base:"#ffffff",streak:.18,scratches:200})),n=Oe("cloth-emerald",()=>ji({seed:51,weave:7})),s=Zt(Ue.steelBlade,"steel",{},t),r=Zt(Ue.silverMain,"silver",{},e),o=gt(ts(.016,.018,.12,8),Zt(Ue.emeraldDeep,"cloth",{},n),-.05,0,0);o.rotation.z=Math.PI/2,i.add(o);let a=gt(Fe(.045,.01,Math.PI*1.2),r,.015,0,0);a.rotation.y=Math.PI/2,a.rotation.x=.3,i.add(a);let c=[];for(let d=0;d<=8;d++){let u=d/8;c.push(new Os(.06+u*.92,Math.sin(u*1.5)*.16,0))}let l=new qt(new hr(new Ei(c),16,.024,6,!1),s);l.scale.z=.35,l.castShadow=!0,i.add(l);let h=gt(Fe(.14,.004,Math.PI*.9),Zt(Ue.silverShadow,"silver"),.42,.09,0);return h.rotation.z=-.5,i.add(h),i.add(gt(Ne(.028,10,8),Zt(Ue.gemEmerald,"gold",{emissive:Ue.gemEmerald,emissiveIntensity:.4}),-.115,0,0)),i}function M_(){let i=Oe("cloth-crimson",()=>ji({seed:52,weave:6})),t=Zt(Se.crimsonMain,"cloth",{side:ye},i),e=new xe(.52,.78,10,12);e.translate(0,-.39,0);{let r=e.attributes.position;for(let o=0;o<r.count;o++){let a=r.getX(o),c=r.getY(o),l=Math.max(0,Math.min(1,-c/.78)),h=Math.sin(a*15)*.016+Math.sin(a*26+c*8)*.009+Math.sin(c*17+a*4)*.012+Math.sin(a*6)*.02;r.setZ(o,h*l*1.7)}e.computeVertexNormals()}let n=new qt(e,t);n.castShadow=!0;let s=new qt(new xe(.54,.06),Zt(Se.goldBright,"cloth",{side:ye}));return s.position.y=-.76,n.add(s),n}function S_(){let i=Fu({furKey:"A-fur",furOpts:{seed:3,blotch:6,grain:.12,dark:"#d9c4ad",repeatX:1.1,repeatY:1.1},furBase:Se.furWhite,furBelly:Se.furWhite,earInner:Se.nosePink,eye:Se.eyeAmber,eyeGlow:.25,nose:Se.nosePink}),t=Oe("gold",()=>Ni({seed:42,base:"#ffffff",streak:.16,scratches:180})),e=Oe("cloth-crimson",()=>ji({seed:52,weave:6})),n=Oe("ginger",()=>Pr({seed:6,blotch:3,grain:.14,repeatX:3,repeatY:3})),s=Oe("steel",()=>Ni({seed:41,base:"#ffffff",streak:.24})),r={gold:Zt(Se.goldPrimary,"gold",{},t),goldBright:Zt(Se.goldBright,"goldBright",{},t),crimson:Zt(Se.crimsonMain,"cloth",{},e),ginger:Zt(Se.furGinger,"fur",{},n),steel:Zt(Se.steelBlade,"steel",{},s),cross:Zt(Se.goldBright,"goldBright",{emissive:Se.goldBright,emissiveIntensity:0})},o=gt(Ne(.085,12,8),r.ginger,.09,.07,-.12);o.scale.set(1.1,.9,.45),i.head.add(o);let a=gt(Ne(.09,12,8),r.ginger,-.06,.1,.1);a.scale.set(1,.8,.5),i.head.add(a);let c=gt(Ne(.12,12,8),r.ginger,-.02,.3,-.09);c.scale.set(1.2,1,.5),i.spine.add(c),i.tail[5].add(gt(Ne(.045,8,6),r.ginger,0,-.13,0));let l=new ee;l.position.set(.02,.13,0),l.rotation.z=-.12;let h=gt(new Jn(.165,16,10,0,Math.PI*2,0,Math.PI*.55),r.steel);h.scale.set(1.15,1,1.05),l.add(h);let d=gt(Fe(.185,.024),r.steel,0,.04,0);d.rotation.x=Math.PI/2,d.scale.set(1.18,1.05,1),l.add(d);let u=gt(Hn(.34,.075,.032),r.steel,0,.175,0);u.rotation.z=-.05,l.add(u),l.add(gt(Hn(.2,.045,.028),r.steel,-.09,.13,0));let f=gt(Fe(.165,.008),r.goldBright,0,.05,0);f.rotation.x=Math.PI/2,f.scale.set(1.2,1.1,1),l.add(f),l.add(gt(ts(.02,.025,.05,8),r.gold,.05,.16,-.1));let _=new ee;_.position.set(.05,.2,-.1);for(let z=0;z<3;z++)_.add(gt(Ne(.035-z*.007,8,6),r.crimson,.02*z,.035*z,.015*z));l.add(_),i.head.add(l),i.ears[0].position.y=.2,i.ears[0].position.z=-.17,i.ears[1].position.y=.2,i.ears[1].position.z=.17;let y=gt(new Jn(.175,14,10,0,Math.PI*2,0,Math.PI*.62),r.gold,.05,.33,0);y.rotation.z=-Math.PI/2,y.scale.set(1,1,.72),i.spine.add(y),i.spine.add(gt(Hn(.028,.14,.02),r.cross,.185,.34,0)),i.spine.add(gt(Hn(.1,.028,.02),r.cross,.19,.35,0)),i.spine.add(gt(Ne(.035,10,8),r.goldBright,.13,.47,0));for(let z of[-.17,.17]){let X=gt(new Jn(.075,10,8,0,Math.PI*2,0,Math.PI*.5),r.gold,.08,.46,z);X.rotation.z=z>0?-.5:.5,i.spine.add(X);let Z=gt(Fe(.082,.013,Math.PI*1.15),Zt(Se.leatherBrown,"cloth"),.05,.45,z);Z.rotation.y=Math.PI/2,Z.rotation.z=-.35,i.spine.add(Z)}let g=Oe("leather",()=>wc({seed:43})),p=Oe("pleat",()=>Ac({pleats:30})),E=Oe("slash-doublet",()=>Lu({seed:73,n:6})),A=Zt("#FBF7EE","cloth",{side:ye,bumpScale:.05},p),M=gt(new Re(.16,.305,.1,30,1,!0),A,.02,.47,0);M.rotation.z=-.06,i.spine.add(M);let v=gt(new Re(.135,.21,.06,26,1,!0),A,.02,.545,0);v.rotation.z=-.06,i.spine.add(v);let b=gt(Fe(.142,.032),r.gold,.02,.415,0);b.rotation.x=Math.PI/2,b.scale.set(1,1,.9),i.spine.add(b);let R=Zt(Se.crimsonMain,"cloth",{bumpScale:.06},E);for(let z of["L","R"]){let X=gt(Ne(.1,12,10),R,0,-.015,0);X.scale.set(1,.76,1.06),i.arms[z].shoulder.add(X);let Z=gt(Fe(.064,.012),r.gold,0,-.2,0);Z.rotation.x=Math.PI/2,i.arms[z].shoulder.add(Z)}for(let z of[-.12,.12]){let X=gt(Hn(.13,.15,.035),r.gold,.055,-.15,z);X.rotation.z=.12,X.rotation.x=z>0?.12:-.12,i.hips.add(X)}let x=gt(Hn(.052,.52,.028),Zt(Se.leatherBrown,"cloth",{},g),.162,.27,.01);x.rotation.z=.62,i.spine.add(x),i.spine.add(gt(Ne(.027,10,8),r.goldBright,.19,.43,.01));let T=M_();T.position.set(-.14,.5,0),T.rotation.y=.22,i.spine.add(T);let C=gt(Fe(.155,.018),r.gold,.02,.52,0);C.rotation.x=Math.PI/2,C.rotation.z=.1,C.scale.set(1.05,.9,1),i.spine.add(C),i.spine.add(gt(Ne(.038,10,8),r.goldBright,.16,.5,0));let D=gt(new Re(.14,.19,.22,10,1,!0,.5,Math.PI*1.6),r.crimson,-.02,-.08,0);D.material.side=ye,i.hips.add(D);let O=gt(Fe(.185,.012),r.goldBright,-.02,-.19,0);O.rotation.x=Math.PI/2,O.scale.set(1,1,.92),i.hips.add(O);let H=gt(Fe(.16,.02),r.gold,0,.02,0);H.rotation.x=Math.PI/2,H.scale.set(1.15,1,1),i.hips.add(H);for(let z of["L","R"]){i.arms[z].elbow.add(gt(ts(.055,.05,.1,10),r.gold,0,-.1,0));let X=Zt(Se.leatherBrown,"cloth",{side:ye},g),Z=gt(new Re(.066,.073,.28,12,1,!0),X,.004,-.14,0);i.legs[z].knee.add(Z);let nt=gt(Fe(.079,.026),Zt(Se.leatherBrown,"cloth",{},g),.004,-.005,0);nt.rotation.x=Math.PI/2,nt.scale.set(1,1,.88),i.legs[z].knee.add(nt),i.legs[z].knee.add(gt(Ne(.017,8,6),r.goldBright,.072,-.02,0)),i.legs[z].knee.add(gt(Hn(.06,.03,.075),X,-.03,-.245,0))}i.tail[5].add(gt(Fe(.042,.012),r.gold,0,-.1,0));let I=y_();return I.position.set(0,-.21,0),i.arms.L.elbow.add(I),{...i,name:"DON GATO",side:"A",facing:Math.PI,sword:I,swordArm:"L",cape:T,crossMat:r.cross,plume:_}}function b_(){let i=Fu({furKey:"B-fur",furOpts:{seed:9,stripes:7,grain:.16,blotch:2,dark:"#6c6c78",repeatX:1.4,repeatY:1.4},furBase:Ue.furSilverStripe,furBelly:Ue.furBelly,earInner:Ue.noseBlack,eye:Ue.eyeJade,eyeGlow:.3,nose:Ue.noseBlack}),t=Oe("silver",()=>Ni({seed:44,base:"#ffffff",streak:.18,scratches:200})),e=Oe("cloth-emerald",()=>ji({seed:51,weave:7})),n=Oe("cloth-white",()=>ji({seed:53,weave:9,thread:"rgba(120,120,132,0.24)"})),s=Oe("B-stripe",()=>Pr({seed:12,stripes:5,grain:.12})),r={emerald:Zt(Ue.emeraldMain,"cloth",{},e),emeraldBright:Zt(Ue.emeraldBright,"cloth",{},e),silver:Zt(Ue.silverMain,"silver",{},t),silverBright:Zt(Ue.silverBright,"silverBright",{},t),white:Zt(Ue.clothWhite,"cloth",{},n),stripe:Zt(Ue.furSilverStripe,"fur",{},s)};for(let x=0;x<3;x++){let T=gt(Fe(.15-x*.005,.012),r.stripe,-.06+x*.09,.3-x*.02,0);T.rotation.x=Math.PI/2,T.rotation.y=.3,T.scale.set(1,1,.55),i.spine.add(T)}for(let x=1;x<6;x+=2)i.tail[x].add(gt(Fe(.04,.01),r.stripe,0,-.065,0));let o=new ee;o.position.set(0,.16,0),o.rotation.z=.08;let a=gt(Ne(.185,16,10),r.white,0,.02,0);a.scale.set(1.08,.72,1.02),o.add(a),o.add(gt(Ne(.1,12,8),r.white,-.06,.13,0));let c=gt(Fe(.13,.05),r.white,0,.05,0);c.rotation.x=Math.PI/2,c.scale.set(1.1,1.05,.9),o.add(c);let l=gt(Fe(.155,.02),r.emerald,0,.03,0);l.rotation.x=Math.PI/2,l.scale.set(1.12,1.06,1),o.add(l);let h=gt(Fe(.045,.012,Math.PI*1.35),r.silverBright,.14,.06,0);h.rotation.y=Math.PI/2,h.rotation.z=2.2,o.add(h),i.head.add(o),i.ears[0].position.y=.24,i.ears[0].position.z=-.16,i.ears[1].position.y=.24,i.ears[1].position.z=.16;let d=Oe("cloth-linen",()=>ji({seed:55,weave:11,thread:"rgba(122,114,98,0.34)"})),u=Oe("pleat",()=>Ac({pleats:30})),f=Zt(Ue.clothWhite,"cloth",{side:ye,bumpScale:.05},d),_=Zt(Ue.emeraldBright,"cloth",{},e),y=gt(new Re(.188,.212,.44,20,1,!0),f,.005,.22,0);i.spine.add(y);let g=gt(new Re(.134,.156,.1,20,1,!0),Zt(Ue.clothWhite,"cloth",{side:ye},u),.01,.455,0);i.spine.add(g);let p=gt(Fe(.157,.013),_,.01,.505,0);p.rotation.x=Math.PI/2,i.spine.add(p);let E=gt(Hn(.04,.36,.05),_,.178,.245,0);i.spine.add(E);for(let x of[.13,.24,.35])i.spine.add(gt(Ne(.014,8,6),r.silver,.198,x,0));let A=gt(new Re(.212,.315,.54,24,1,!0),f,.005,-.165,0);i.hips.add(A);let M=gt(Fe(.312,.014),_,.005,-.425,0);M.rotation.x=Math.PI/2,i.hips.add(M);let v=gt(Fe(.224,.022),r.silver,.005,.015,0);v.rotation.x=Math.PI/2,v.scale.set(1,1,.92),i.hips.add(v),i.hips.add(gt(Ne(.032,10,8),Zt("#EAF2FF","goldBright",{emissive:"#BFD4FF",emissiveIntensity:.35}),.228,.02,0));for(let x of["L","R"]){let T=gt(new Re(.082,.098,.3,14,1,!0),f,0,-.14,0);i.arms[x].shoulder.add(T);let C=gt(Fe(.092,.014),_,0,-.285,0);C.rotation.x=Math.PI/2,i.arms[x].shoulder.add(C);let D=gt(new Re(.068,.074,.17,12,1,!0),f,0,-.09,0);i.arms[x].elbow.add(D)}let b=[];i.arms.R.elbow.add(gt(ts(.055,.05,.11,10),r.silver,0,-.1,0));let R=v_();return R.position.set(0,-.21,0),i.arms.R.elbow.add(R),{...i,name:"SULTAN BIGOTES",side:"B",facing:0,sword:R,swordArm:"R",ribbons:b,turban:o,dish:{skirt:A}}}var Vo=()=>({lean:0,twist:0,tilt:0,crouch:0,yOff:0,xOff:0,zOff:0,spineLean:.06,spineTwist:0,headPitch:0,headYaw:0,headRoll:0,shS_z:-.45,shS_x:.1,elS:-.85,shO_z:-.25,shO_x:.12,elO:-.5,thL:.06,knL:-.2,thR:.06,knR:-.2,footL:0,footR:0,tailCurl:0,tailAmp:.1,capeRaise:0,lock:0,tremble:0}),Bu=Vo(),E_=Object.keys(Bu),Dr=class{constructor(t){this.data=t==="A"?S_():b_();let e=this.data;this.root=e.root,this.root.rotation.y=e.facing,this.pose=Vo(),this.target=Vo(),this.state={name:"IDLE",t:0,dur:0,data:{}},this.time=Math.random()*10,this.x=0,this.windmill=0,this.earSwivel=0,this.frozenPose=null,this.fw=e.side==="A"?-1:1,this.sword=e.arms[e.swordArm],this.off=e.arms[e.swordArm==="L"?"R":"L"]}setState(t,e=0,n={}){this.state={name:t,t:0,dur:e,data:n},t==="FREEZE"&&(this.frozenPose={...this.target})}get moveFrac(){return this.state.dur>0?Bs(this.state.t/this.state.dur,0,1):1}update(t,e){let n=this.state;switch(this.time+=t,n.t+=t,Object.assign(this.target,Bu),this.target.tailCurl=this.data.side==="A"?-1.15:.95,n.name){case"RUSH":this._rush(e);break;case"LUNGE":this._lunge(e);break;case"SLASH_UP":this._slashUp(e);break;case"TAUNT":this._taunt(e);break;case"PARRY_HOP":this._parryHop(e);break;case"SLASH_SPIN":this._slashSpin(e);break;case"RIPOSTE":this._riposte(e);break;case"FREEZE":this._freeze(e);break;case"STUMBLE":this._stumble(e);break;case"HIT":this._hit(e);break;case"BLADE_LOCK":this._bladeLock(e);break;case"CLASH":this._clash(e);break;case"RECOVER":this._recover();break;default:this._idle(e)}n.dur>0&&n.t>=n.dur&&n.name!=="RECOVER"&&n.name!=="FREEZE"&&n.name!=="BLADE_LOCK"&&this.setState("RECOVER",.16);let s=this.pose,r=this.target,o=1-Math.exp(-26*t);for(let a of E_)s[a]=Du(s[a],r[a],o);this._applyPose(t,e)}_applyPose(t,e){let n=this.data,s=this.pose,r=e.rope,o=this.x+s.xOff,a=r.yAt(o);this.root.position.set(o,a+.02-s.crouch+s.yOff,s.zOff+s.lock*.05),this.root.rotation.y=n.facing+s.twist,this.root.rotation.z=s.tilt*(n.side==="A"?1:-1);let c=Bs(e.pressureWobble||0,-.22,.22),l=n.side==="A"?1:-1,h=n.side==="A"?c:-c;this.root.rotation.z+=h*l*(1-Math.abs(h)*2),n.hips.rotation.z=-s.lean-s.lock*.12,n.spine.rotation.z=-s.spineLean-s.lock*.2,n.spine.rotation.y=s.spineTwist,n.head.rotation.z=-s.headPitch,n.head.rotation.y=s.headYaw,n.head.rotation.x=s.headRoll;let d=s.tremble*(Math.sin(this.time*34)*.026+Math.sin(this.time*51)*.014);this.sword.shoulder.rotation.z=s.shS_z+d*1.5,this.sword.shoulder.rotation.x=s.shS_x,this.sword.elbow.rotation.z=s.elS+d,this.off.shoulder.rotation.z=s.shO_z-d*1.2,this.off.shoulder.rotation.x=s.shO_x,this.off.elbow.rotation.z=s.elO-d,this.sword.paw.rotation.z=d*2,n.legs.L.hip.rotation.z=s.thL,n.legs.L.knee.rotation.z=s.knL,n.legs.R.hip.rotation.z=s.thR,n.legs.R.knee.rotation.z=s.knR,n.legs.L.foot.rotation.z=s.footL,n.legs.R.foot.rotation.z=s.footR;let u=Math.sin(this.time*2.6)*s.tailAmp;n.tail.forEach((y,g)=>{let p=g/(n.tail.length-1);y.rotation.z=s.tailCurl/n.tail.length+u*(.4+p),y.rotation.x=Math.sin(this.time*1.6+g)*.045-s.lean*.4}),this.earSwivel=Du(this.earSwivel,e.flagDart?1:0,1-Math.exp(-6*t)),n.ears.forEach((y,g)=>{let p=g===0?1:-1;y.rotation.y=p*(.15*Math.sin(this.time*.7+g*2)+this.earSwivel*.5*(n.side==="B"?1:-1))}),n.cape&&this._cape(),n.ribbons&&n.ribbons.forEach((y,g)=>{y.rotation.x=(g?.15:-.15)+Math.sin(this.time*3.6+g*1.3)*.34}),n.plume&&(n.plume.rotation.x=Math.sin(this.time*3.4)*.2),n.dish&&this._dish(n),this._footTmp||(this._footTmp=new Os),this.root.updateMatrixWorld(!0);let f=a+ae.ropeRadius*.5,_=1/0;for(let y of["L","R"])n.legs[y].foot.getWorldPosition(this._footTmp),this._footTmp.y<_&&(_=this._footTmp.y);if(isFinite(_)){let y=f-_;y=Math.abs(s.yOff)>.03?Bs(y*.25,-.03,.06):Bs(y,-.07,.18),this.root.position.y+=y}}_idle(t){let e=this.target,n=this.time,s=t.circlePhase||0,r=this.data.side==="A"?1:-1,o=Math.sin(s*2.2+(r>0?0:1.6));e.spineLean=.08+Math.sin(n*2.2)*.03,e.headYaw=-r*.22+Math.sin(n*.6)*.12,e.headPitch=.04,e.shS_z=-.5+Math.sin(n*2.6)*.09,e.shO_z=-.3+Math.sin(n*2.1+1)*.1,e.elS=-.7,e.elO=-.6,e.crouch=.03+Math.max(0,Math.sin(n*1.1+r))*.03,e.xOff=o*.16,e.thL=.06+Math.max(0,o)*.5,e.thR=.06+Math.max(0,-o)*.5,e.knL=-.24-Math.max(0,o)*.5,e.knR=-.24-Math.max(0,-o)*.5,e.twist=-r*.06,e.tailAmp=.16}_recover(){let t=this.moveFrac,e=t*Math.PI*2.6;this.target.shS_x=.5+Math.sin(e)*1.3,this.target.shO_x=.5-Math.sin(e)*1.3,this.target.shS_z=-.3-Math.cos(e)*.5,this.target.shO_z=-.3+Math.cos(e)*.5,this.target.spineLean=.1-Math.sin(t*Math.PI)*.26,this.target.tilt=Math.sin(t*Math.PI*2)*.14}_rush(t){let e=this.moveFrac,n=this.target,s=this.state,r=s.data.reach||.6;if(e<.34){let o=e/.34,a=Math.abs(Math.sin(o*Math.PI*3));n.crouch=.06+a*.1,n.knL=-.2-a*.5,n.knR=-.2-(1-a)*.3,n.thL=.06+a*.55,n.spineLean=.3,n.twist=this.fw*.12,o>.08&&!s.data.st1&&(s.data.st1=1,t.onStamp&&t.onStamp(this)),o>.42&&!s.data.st2&&(s.data.st2=1,t.onStamp&&t.onStamp(this)),o>.75&&!s.data.st3&&(s.data.st3=1,t.onStamp&&t.onStamp(this))}else if(e<.7){let o=(e-.34)/.36;n.xOff=this.fw*o*r,n.spineLean=.3+o*.5,n.twist=this.fw*.18,n.shO_z=-.2-o*.7,n.shS_z=1.5*o,n.shS_x=1*o,n.elS=-.05,n.headYaw=this.fw*.22,n.yOff=Math.sin(o*Math.PI)*.06,o>.35&&!s.data.sp&&(s.data.sp=1,t.onLungeHit&&t.onLungeHit(this))}else{let o=(e-.7)/.3;n.xOff=this.fw*(r-o*.1),n.spineLean=.8-o*.5,n.tilt=Math.sin(o*Math.PI)*.14,n.crouch=.05,n.shS_z=1.35-o*.2}}_lunge(t){let e=this.moveFrac,n=this.target,s=this.state,r=s.data.reach||.7;if(e<.3){let o=e/.3;n.crouch=.1*o,n.spineLean=-.12*o,n.shS_z=-.5-o*.5,n.elS=-1,n.knL=-.2-o*.35,n.twist=-this.fw*.16*o}else if(e<.62){let o=(e-.3)/.32;n.xOff=this.fw*o*r,n.spineLean=.25+o*.55,n.twist=this.fw*.2,n.shO_z=-.2-o*.75,n.shS_z=1.6*o,n.shS_x=1.05*o,n.elS=-.02,n.headYaw=this.fw*.24,n.headPitch=.1*o,n.yOff=Math.sin(o*Math.PI)*.05,n.thL=.06+o*.5,o>.4&&!s.data.sp&&(s.data.sp=1,t.onLungeHit&&t.onLungeHit(this))}else{let o=(e-.62)/.38;n.xOff=this.fw*(r-o*.12),n.spineLean=.8-o*.5,n.tilt=Math.sin(o*Math.PI)*.16,n.crouch=.05,n.shS_z=1.4-o*.15}}_slashUp(t){let e=this.moveFrac,n=this.target,s=this.state;if(e<.3){let r=e/.3;n.twist=-.5*r*this.fw*-1,n.shO_z=-.2-r*1.5,n.shO_x=.45,n.headPitch=-.35*r,n.capeRaise=r*.55,n.crouch=.05*r}else if(e<.72){let r=(e-.3)/.42;n.shS_z=-.75+r*2.5,n.shS_x=-.5+r*1.2,n.elS=-.8+r*.65,n.spineLean=.2-r*.34,n.twist=(-.5+r*.9)*this.fw*-1,n.yOff=Math.sin(r*Math.PI)*.14,n.thL=.06+r*.4,r>.4&&!s.data.sl&&(s.data.sl=1,t.onSlash&&t.onSlash(this,"up"))}else n.shS_z=1.55,n.elS=-.18,n.headPitch=-.42,n.capeRaise=.65,n.tilt=-.1}_taunt(t){let e=this.moveFrac,n=this.target;if(e<.22){let s=e/.22;n.spineLean=.35*s,n.shS_z=-.45+s*.3,n.elS=-.85-s*.45,n.headPitch=.3*s,n.crouch=.08*s}else n.spineLean=.35,n.shS_z=-.15,n.elS=-1.3,n.headPitch=-.18+Math.sin(this.time*3.4)*.06,n.knL=-.45,n.knR=-.45,n.twist=this.fw*.1,this.data.crossMat&&(this.data.crossMat.emissiveIntensity=Math.max(0,Math.sin((e-.22)*Math.PI/.78))*1.8),e>.3&&!this.state.data.fl&&(this.state.data.fl=1,t.onTaunt&&t.onTaunt(this))}_parryHop(t){let e=this.moveFrac,n=this.target,s=this.state;if(e<.45){let r=e/.45,o=Math.sin(r*Math.PI*2);n.xOff=-this.fw*o*.4,n.crouch=.04+Math.abs(o)*.07,n.twist=-this.fw*o*.22,n.thL=.06+Math.max(0,o)*.6,n.thR=.06+Math.max(0,-o)*.6,n.yOff=Math.abs(o)*.08,r>.4&&!s.data.sd&&(s.data.sd=1,t.onStamp&&t.onStamp(this))}else{let r=(e-.45)/.55;n.crouch=.11,n.spineLean=.4,n.shS_z=.45-r*.5,n.shS_x=-.6,n.elS=-1.15,n.twist=this.fw*(.28-r*.35),n.headPitch=.12,n.xOff=this.fw*.2*r}}_slashSpin(t){let e=this.moveFrac,n=this.target;if(e<.45){let s=e/.45;n.shS_z=-.7+s*Math.PI*4,n.elS=-.2,n.spineLean=-.12,n.headPitch=-.24,n.twist=s*.5*this.fw,n.yOff=Math.sin(s*Math.PI)*.1,s>.3&&!this.state.data.w1&&(this.state.data.w1=1,t.onWhoosh&&t.onWhoosh(this))}else{let s=(e-.45)/.55,r=Math.abs(Math.sin(s*Math.PI*3));n.shS_z=1.45-r*1.85,n.elS=-.35,n.spineLean=.15+r*.28,n.crouch=.05+r*.09,n.xOff=this.fw*.3*s,s>.25&&!this.state.data.c1&&(this.state.data.c1=1,t.onSlash&&t.onSlash(this,"down")),s>.72&&!this.state.data.c2&&(this.state.data.c2=1,t.onSlash&&t.onSlash(this,"down"))}}_riposte(t){let e=this.moveFrac,n=this.target;if(e<.22){let s=e/.22;n.crouch=.24*s,n.spineLean=.55*s,n.headPitch=.24,n.knL=-.2-s*.5,n.knR=-.2-s*.5}else if(e<.46){let s=(e-.22)/.24;n.twist=Math.sin(s*Math.PI)*1.9*this.fw,n.crouch=.14,n.shS_z=-1.3,n.xOff=-this.fw*Math.sin(s*Math.PI)*.3}else if(e<.74){let s=(e-.46)/.28;n.shS_z=-1.5+s*2.7,n.shS_x=-1+s*.7,n.elS=-.25,n.twist=this.fw*(.35-s*.6),n.xOff=this.fw*.35*s,s>.4&&!this.state.data.cr&&(this.state.data.cr=1,t.onSlash&&t.onSlash(this,"crescent"))}else{let s=(e-.74)/.26;n.spineLean=.4,n.shS_z=1.6,n.elS=-.08,n.xOff=this.fw*(.35+s*.45),n.headYaw=this.fw*.2}}_freeze(t){Object.assign(this.target,this.frozenPose||Vo()),this.target.tailAmp=.1,this.target.crouch=(this.frozenPose?this.frozenPose.crouch:0)+Math.max(0,Math.sin(this.time*.8))*.02,this.target.headYaw=Math.sin(this.time*.45)*.2,t.flagDart=!0}_hit(t){let e=this.moveFrac,n=this.target,s=this.state,r=s.data.dir||-this.fw,o=s.data.mag||1;if(e<.4){let a=e/.4;n.spineLean=-.4*a*o,n.headPitch=.5*a*o,n.headYaw=-r*.3*a,n.xOff=r*a*.24*o,n.shO_x=1*a,n.shS_x=.6*a,n.crouch=.1*a,n.tremble=a*.6,a>.5&&!s.data.imp&&(s.data.imp=1,t.onHitImpact&&t.onHitImpact(this))}else{let a=(e-.4)/.6;n.spineLean=-.4*o*(1-a),n.headPitch=.5*o*(1-a),n.xOff=r*.24*o*(1-a),n.crouch=.1*(1-a),n.shO_z=-.2-a*.5,n.tremble=.6*(1-a),n.twist=r*.2*(1-a)}}_stumble(t){let e=this.moveFrac,n=this.target,s=this.state,r=s.data.dir||-this.fw,o=s.data.dist||.7;if(e<.18){let a=e/.18;n.tilt=Math.sin(this.time*20)*.26*a,n.spineLean=.24+Math.sin(this.time*16)*.3*a,n.crouch=.06,n.tremble=a*.8}else if(e<.56){let a=(e-.18)/.38;n.xOff=r*a*o,n.tilt=1.25*a,n.crouch=.1+a*.3,n.yOff=Math.sin(a*Math.PI)*.42,n.shS_x=1.35,n.shO_x=1.35,n.shS_z=-1.3,n.shO_z=-1.3,n.twist=r*a*.5,a>.5&&!s.data.tu&&(s.data.tu=1,t.onTumble&&t.onTumble(this))}else if(e<.8)n.xOff=r*o,n.tilt=1.25+Math.sin(this.time*22)*.1,n.crouch=.4,n.shS_x=1.5,n.shO_x=1.5,n.twist=r*.5;else{let a=(e-.8)/.2;n.xOff=r*(1-a)*o,n.tilt=1.25*(1-a),n.crouch=.4-a*.34,n.twist=r*.5*(1-a)}}_bladeLock(t){let e=this.moveFrac,n=this.target,r=.6+(Math.sin(this.time*7.5)*.5+.5)*.4;n.lock=r,n.spineLean=.5+r*.25,n.shS_z=.55+r*.2,n.shS_x=1.15,n.elS=-.35,n.shO_z=.15,n.shO_x=.9,n.elO=-.5,n.crouch=.1+r*.06,n.tremble=1,n.headPitch=.16,n.headYaw=-this.fw*.1,n.xOff=this.fw*(.05+r*.06),n.tailAmp=.05,e>.1&&!this.state.data.sparkT&&(this.state.data.sparkT=1,t.onLockSparks&&t.onLockSparks(this))}_clash(t){let e=this.moveFrac,n=this.target,s=this.state,r=.5+.5*Math.sin(this.time*9);if(n.spineLean=.45,n.shS_z=1.45,n.shS_x=1,n.elS=-.1,n.shO_z=-.05,n.shO_x=.75,n.crouch=.09,n.lock=.5,n.tremble=.9,s.data.loser){let o=Math.min(e/.62,1);n.xOff=s.data.dir*o*.75,n.tilt=-o*.24,n.spineLean=.45-o*.3,n.tremble=.9*(1-o*.7),o>.55&&!s.data.rk&&(s.data.rk=1,t.onKnockback&&t.onKnockback(this,s.data.dir))}else n.xOff=s.data.dir*Math.min(e/.62,1)*.3,n.spineLean=.45+Math.min(e/.62,1)*.2,n.crouch=.09+r*.03}_dish(t){let n=t.dish.skirt.geometry.attributes.position;t.dish.base||(t.dish.base=Float32Array.from(n.array),n.setUsage(Ji));let s=t.dish.base,r=this.time;for(let o=0;o<n.count;o++){let a=s[o*3],c=s[o*3+1],l=s[o*3+2],h=Bs((.11-c)/.54,0,1),d=(Math.sin(r*2.4+h*2.6)*.022+Math.sin(r*3.9)*.008-this.pose.lean*.05)*h*h,u=1+d*2.6;n.setX(o,a*u),n.setZ(o,l*u+d*.4)}n.needsUpdate=!0}_cape(){let t=this.data.cape,e=t.geometry.attributes.position;this._capeBase||(this._capeBase=Float32Array.from(e.array),e.setUsage(Ji));let n=this._capeBase,s=this.time,r=this.pose.capeRaise||0;for(let o=0;o<e.count;o++){let a=n[o*3],c=n[o*3+1],l=Bs(-c/.78,0,1),h=Math.sin(s*4.2+l*5)*.11*l;e.setX(o,a*(1+r*l*1.8)+h*.4),e.setZ(o,h)}e.needsUpdate=!0,t.rotation.x=-.18-r*1}bladeTipWorld(t=new Os){return this.data.sword.localToWorld(t.set(1,0,0))}bladeMidWorld(t=new Os){return this.data.sword.localToWorld(t.set(.55,0,0))}headTipWorld(t=new Os){return this.data.head.localToWorld(t.set(.3,-.04,0))}headCentreWorld(t=new Os){return this.data.head.localToWorld(t.set(0,0,0))}};var Ur=(i,t="cloth",e={})=>new ln({color:i,...Cr[t],...e}),es=(i,t,e,n={})=>{var r;let s=new ln({color:i,...Cr[t],...n});return e&&(s.map=e.map,e.bump&&(s.bumpMap=e.bump,s.bumpScale=(r=n.bumpScale)!=null?r:.06)),s},nn=(i,t,e=0,n=0,s=0)=>{let r=new qt(i,t);return r.position.set(e,n,s),r};function T_(){let i=document.createElement("canvas");i.width=128,i.height=128;let t=i.getContext("2d"),e="filter"in t,n=(o,a,c,l,h)=>{t.fillStyle=h,t.fillRect(o-c/2,a-c/2,c,c),t.fillStyle=l;for(let d of[0,Math.PI/4]){t.save(),t.translate(o,a),t.rotate(d),t.beginPath();for(let u=0;u<8;u++){let f=u/8*Math.PI*2,_=f+Math.PI/8;t.lineTo(Math.cos(f)*c*.46,Math.sin(f)*c*.46),t.lineTo(Math.cos(_)*c*.2,Math.sin(_)*c*.2)}t.closePath(),t.fill(),t.restore()}};e&&(t.filter="blur(0.35px)");let s=[["#1F5FA8","#F2EFE9"],["#12755F","#F2EFE9"]];n(32,32,62,...s[0]),n(96,96,62,...s[0]),n(96,32,62,...s[1]),n(32,96,62,...s[1]),e&&(t.filter="none");let r=(()=>{let o=77;return()=>(o=o*16807%2147483647,o%1e3/1e3)})();t.strokeStyle="rgba(60,52,40,0.35)",t.lineWidth=3,t.strokeRect(1.5,1.5,125,125);for(let o=0;o<120;o++)t.fillStyle=r()<.5?"rgba(255,255,255,0.10)":"rgba(0,0,0,0.08)",t.fillRect(r()*128,r()*128,3,3);return Xe(i)}function w_(){let i=document.createElement("canvas");i.width=512,i.height=64;let t=i.getContext("2d");t.fillStyle=fe.stoneWall,t.fillRect(0,0,512,64),t.strokeStyle=fe.frieze,t.lineWidth=3;for(let e=0;e<512;e+=64){t.beginPath(),t.moveTo(e,32),t.bezierCurveTo(e+12,10,e+28,10,e+32,32),t.bezierCurveTo(e+36,54,e+52,54,e+64,32);for(let[n,s,r]of[[e+20,20,7],[e+44,46,7],[e+32,32,9]])t.moveTo(n+r,s),t.arc(n,s,r,0,Math.PI*2);t.stroke()}return Xe(i)}function A_(){let i=document.createElement("canvas");i.width=512,i.height=512;let t=i.getContext("2d");t.fillStyle=fe.floorBase,t.fillRect(0,0,512,512);let e=(()=>{let n=913;return()=>(n=n*16807%2147483647,n%1e3/1e3)})();for(let n=0;n<2600;n++)t.fillStyle=e()<.5?"rgba(255,255,255,0.07)":"rgba(96,78,56,0.08)",t.fillRect(e()*512,e()*512,2+e()*3,2+e()*3);t.strokeStyle="rgba(104,86,62,0.66)",t.lineWidth=2.5;for(let n=0;n<=512;n+=64)t.beginPath(),t.moveTo(n,0),t.lineTo(n,512),t.stroke(),t.beginPath(),t.moveTo(0,n),t.lineTo(512,n),t.stroke();for(let n=0;n<8;n++)for(let s=0;s<8;s++)(n+s)%2||(t.fillStyle="rgba(255,246,226,0.05)",t.fillRect(s*64,n*64,64,64));return Xe(i)}function R_(){let i=document.createElement("canvas");i.width=i.height=512;let t=i.getContext("2d"),e="filter"in t,n=256,s=256,r=150;e&&(t.filter="blur(0.5px)"),t.strokeStyle="rgba(110,90,66,0.85)",t.lineWidth=14,t.beginPath(),t.arc(n,s,r+34,0,Math.PI*2),t.stroke(),t.strokeStyle="rgba(240,232,214,0.5)",t.lineWidth=4,t.beginPath(),t.arc(n,s,r+42,0,Math.PI*2),t.stroke();let o=(a,c)=>{t.fillStyle=c,t.beginPath();for(let l=0;l<8;l++){let h=a+l/8*Math.PI*2,d=h+Math.PI/8;t.lineTo(n+Math.cos(h)*r,s+Math.sin(h)*r),t.lineTo(n+Math.cos(d)*r*.45,s+Math.sin(d)*r*.45)}t.closePath(),t.fill()};o(-Math.PI/2,"#26A69A"),o(Math.PI/2,"#EF5350"),e&&(t.filter="none"),t.lineJoin="round",t.strokeStyle="rgba(60,46,30,0.55)",t.lineWidth=3;for(let a of[-Math.PI/2,Math.PI/2]){t.beginPath();for(let c=0;c<8;c++){let l=a+c/8*Math.PI*2,h=l+Math.PI/8;t.lineTo(n+Math.cos(l)*r,s+Math.sin(l)*r),t.lineTo(n+Math.cos(h)*r*.45,s+Math.sin(h)*r*.45)}t.closePath(),t.stroke()}return t.fillStyle="rgba(236,228,210,0.9)",t.beginPath(),t.arc(n,s,22,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(120,96,64,0.8)",t.lineWidth=6,t.beginPath(),t.arc(n,s,22,0,Math.PI*2),t.stroke(),Xe(i)}function C_(){let i=document.createElement("canvas");i.width=i.height=512;let t=i.getContext("2d");t.clearRect(0,0,512,512);let e=t.createRadialGradient(256,256,150,256,256,256);e.addColorStop(0,fe.moonHalo+"cc"),e.addColorStop(1,fe.moonHalo+"00"),t.fillStyle=e,t.fillRect(0,0,512,512);let n=(()=>{let r=553;return()=>(r=r*16807%2147483647,r%1e3/1e3)})();t.fillStyle=fe.moonBtc,t.beginPath(),t.arc(256,256,190,0,Math.PI*2),t.fill();for(let r=0;r<40;r++){let o=n()*Math.PI*2,a=n()*175,c=256+Math.cos(o)*a,l=256+Math.sin(o)*a,h=6+n()*26;t.fillStyle=n()<.5?"rgba(255,214,150,0.16)":"rgba(150,80,10,0.14)",t.beginPath(),t.arc(c,l,h,0,Math.PI*2),t.fill()}let s=t.createRadialGradient(190,180,40,256,256,230);s.addColorStop(0,"rgba(255,240,214,0.30)"),s.addColorStop(.55,"rgba(255,255,255,0)"),s.addColorStop(1,"rgba(70,30,0,0.34)"),t.fillStyle=s,t.beginPath(),t.arc(256,256,190,0,Math.PI*2),t.fill(),t.strokeStyle=fe.moonSymbol,t.lineWidth=22,t.lineCap="round",t.font='bold 260px "Arial Black", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle=fe.moonSymbol,t.fillText("B",256,270),t.lineWidth=14;for(let r of[196,316])t.beginPath(),t.moveTo(r,130),t.lineTo(r,382),t.stroke();return Xe(i)}function P_(i,t){let e=document.createElement("canvas");e.width=256,e.height=160;let n=e.getContext("2d");return n.fillStyle=t,n.beginPath(),n.moveTo(8,8),n.lineTo(248,8),n.lineTo(180,80),n.lineTo(248,152),n.lineTo(8,152),n.closePath(),n.fill(),n.strokeStyle="rgba(0,0,0,0.35)",n.lineWidth=6,n.stroke(),n.fillStyle="#FFFFFF",n.font='bold 64px "Arial Black", sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText(i,116,84),Xe(e)}function Ou(i){let t=new ee;i.add(t);let e={torches:[]};t.userData.torches=e.torches,t.userData.coins=()=>e.coins;let n=new qt(new xe(5,5),new De({map:C_(),transparent:!0,fog:!1,depthWrite:!1}));n.position.set(0,6.6,-7.45),n.renderOrder=-1,t.add(n),e.moon=n,t.userData.moon=n;let s=Ir({seed:61,base:"#ffffff",blocks:5,alpha:.16,repeatX:4,repeatY:2}),r=8,o=26,a=-7.2,c=1.2,l=.4,h=3.4,d=es(fe.stoneWall,"cloth",s,{roughness:.95,bumpScale:.12}),u=nn(new Ye(o,h,.5),d,0,h/2,a);t.add(u);let f=T_();f.repeat.set(10,1);let _=On(f.image,1);_.repeat.copy(f.repeat);let y=nn(new Ye(o,c,.54),new ln({map:f,bumpMap:_,bumpScale:.05,roughness:.5}),0,c/2,a+.01);t.add(y);let g=w_();g.repeat.set(6,1);let p=nn(new Ye(o,l,.55),new ln({map:g,roughness:.9}),0,c+l/2,a+.01);t.add(p);let E=Ir({seed:62,base:"#ffffff",blocks:3,alpha:.2,repeatX:2,repeatY:1}),A=es(fe.stoneShadow,"cloth",E,{bumpScale:.08}),M=nn(new Ye(o,.16,.62),A,0,h+.08,a+.02);t.add(M);let v=es(fe.stoneShadow,"cloth",E,{bumpScale:.1}),b=[-12.1,-7.4,-3.3,3.3,7.4,12.1];for(let Ft of b)t.add(nn(new Ye(1,3.35,.68),v,Ft,1.675,a+.09)),t.add(nn(new Ye(1.2,.22,.76),es(fe.stoneWall,"cloth",E),Ft,3.46,a+.09));let R=es(fe.stoneWall,"cloth",E,{bumpScale:.1});for(let Ft of[-12,-7.4,-3.3,3.3,7.4,12]){let Bt=Math.abs(Ft)>9||Math.abs(Ft)<5;t.add(nn(new Ye(.9,.42,.5),R,Ft,h+.37,a)),Bt&&t.add(nn(new Ye(.5,.2,.5),R,Ft,h+.67,a))}let x=A_();x.repeat.set(3,2);let T=On(x.image,.8);T.repeat.copy(x.repeat);let C=new qt(new xe(26,15),new ln({map:x,bumpMap:T,bumpScale:.06,roughness:.9}));C.rotation.x=-Math.PI/2,C.position.set(0,0,.5),C.receiveShadow=!0,t.add(C);let D=new qt(new xe(7.6,7.6),new De({map:R_(),transparent:!0,depthWrite:!1,opacity:.92}));D.rotation.x=-Math.PI/2,D.position.set(0,.012,.4),D.renderOrder=1,t.add(D);let O=new qt(new xe(80,60),new ln({color:1314844,roughness:1}));O.rotation.x=-Math.PI/2,O.position.set(0,-.02,0),t.add(O);let H=new ee;H.position.set(0,0,-3);let I=Ir({seed:63,base:"#ffffff",blocks:2,alpha:.18,repeatX:2,repeatY:1}),z=es(fe.stoneShadow,"cloth",I,{bumpScale:.1}),X=nn(new Re(1.5,1.6,.35,8),z,0,.17,0);H.add(X);let Z=nn(new Re(1.3,1.3,.2,8),Ur("#3A3226","cloth"),0,.3,0);H.add(Z);let nt=Ur("#B08D57","gold",{metalness:.9,roughness:.35}),K=[];for(let Ft=0;Ft<7;Ft++){let Bt=Math.random()*Math.PI*2,Vt=Math.random()*1,J=nn(new Re(.07,.07,.02,12),nt,Math.cos(Bt)*Vt,.42,Math.sin(Bt)*Vt);J.rotation.x=Math.PI/2+(Math.random()-.5)*.4,H.add(J),K.push(J)}t.add(H),e.coins=K;let it=Ir({seed:64,base:"#ffffff",blocks:3,alpha:.14,repeatX:1,repeatY:3}),tt=es(fe.stonePole,"cloth",it,{bumpScale:.07}),Lt={};for(let Ft of["L","R"]){let Bt=Ft==="L"?-ae.spanHalf:ae.spanHalf,Vt=new ee;Vt.position.set(Bt,0,0);let J=nn(new Re(.28,.36,ae.ropeY,10),tt,0,ae.ropeY/2,0),j=nn(new Ye(.8,.22,.8),tt,0,ae.ropeY+.11,0);Vt.add(J,j);let q=nn(new Re(.03,.03,1.1,6),Ur(fe.iron,"cloth"),0,ae.ropeY+.7,0);Vt.add(q);let rt=Ft==="R",et=P_(rt?"BUY":"SELL",rt?fe.flagUp:fe.flagDown),At=new qt(new xe(1.1,.62),new De({map:et,side:ye}));At.position.set(.62,ae.ropeY+1.05,0),Vt.add(At),Lt[Ft]=At,t.add(Vt)}e.pennants=Lt;let Ct=[-7.4,-3.3,3.3,7.4];for(let Ft of Ct){let Bt=nn(new Ye(.1,.1,.5),Ur(fe.iron,"cloth"),Ft,3.62,a+.42);t.add(Bt);let Vt=nn(new Re(.14,.07,.18,8),Ur(fe.iron,"cloth"),Ft,3.78,a+.66);t.add(Vt);let J=nn(new Xi(.11,.36,8),new De({color:fe.torchFlame,fog:!1}),Ft,4.02,a+.66);t.add(J);let j=new Ci(fe.torchGlow,15,11,1.8);j.position.set(Ft,4.05,a+.95),t.add(j),e.torches.push({flame:J,light:j,seed:Math.random()*10})}return t}function zu(i,t){for(let e of i.userData.torches||[]){let n=Math.sin(t*1.7+e.seed)*.5+Math.sin(t*3.1+e.seed*2)*.3+Math.sin(t*.9+e.seed)*.2;e.light.intensity=14+n*1.6,e.flame.scale.y=1+n*.18,e.flame.scale.x=1-n*.09}}var Wo=null;function I_(){if(Wo)return Wo;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.85)"),e.addColorStop(.7,"rgba(255,255,255,0.22)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Wo=Xe(i,{srgb:!0}),Wo}var Hu=new Map;function L_(i){let t=Hu.get(i);return t||(t=new Xt(i),Hu.set(i,t)),t}var Bi=class{constructor(t,{count:e=120,size:n=.05,color:s=16777215,gravity:r=-9.8,drag:o=1.5,life:a=.7}){this.count=e,this.gravity=r,this.drag=o,this.life=a;let c=new _e;this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.age=new Float32Array(e).fill(1/0),c.setAttribute("position",new Ie(this.pos,3));let l=new Zn({color:s,size:n,map:I_(),alphaTest:.02,transparent:!0,opacity:.95,blending:fn,depthWrite:!1,sizeAttenuation:!0});this.points=new En(c,l),this.points.frustumCulled=!1,t.add(this.points);for(let h=0;h<e;h++)this.pos[h*3+1]=-999}spawn(t,e,n,s=2.5,r=2.5,o=12,a=null){let c=0;for(let l=0;l<this.count&&c<o;l++)this.age[l]<this.life||(this.age[l]=0,this.pos[l*3]=t,this.pos[l*3+1]=e,this.pos[l*3+2]=n,this.vel[l*3]=(Math.random()-.5)*s,this.vel[l*3+1]=Math.random()*r,this.vel[l*3+2]=(Math.random()-.5)*s,c++);a&&this.points.material.color.lerp(L_(a),.35)}update(t){let e=this.gravity;for(let n=0;n<this.count;n++){if(this.age[n]>this.life){this.pos[n*3+1]=-999;continue}this.age[n]+=t;let s=Math.max(0,1-this.drag*t);this.vel[n*3]*=s,this.vel[n*3+1]=this.vel[n*3+1]*s+e*t,this.vel[n*3+2]*=s,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.pos[n*3+1]<.02&&e<0&&(this.vel[n*3+1]*=-.3,this.pos[n*3+1]=.02)}this.points.geometry.attributes.position.needsUpdate=!0}},Xo=class{constructor(t,e=1){e=Math.max(.2,Math.min(1,e)),this.scene=t,this.sparksGold=new Bi(t,{count:Math.round(150*e),size:.05,color:Ge.BUY_BRIGHT}),this.sparksSilver=new Bi(t,{count:Math.round(150*e),size:.05,color:Ue.silverBright}),this.embers=new Bi(t,{count:Math.round(60*e),size:.08,color:fe.torchFlame,gravity:1.8,drag:.6,life:1.4}),this.jade=new Bi(t,{count:Math.round(60*e),size:.06,color:Ge.SELL_BRIGHT,gravity:-2.5}),this.dust=new Bi(t,{count:Math.round(80*e),size:.14,color:fe.floorBase,gravity:-1.2,drag:2.5,life:.9}),this.dust.points.material.blending=li,this.dust.points.material.opacity=.5,this.fur=new Bi(t,{count:40,size:.07,color:"#E8E4D8",gravity:-1.5,drag:2,life:2.2}),this.fur.points.material.blending=li,this.fur.points.material.opacity=.9}clashBurst(t){this.sparksGold.spawn(t.x,t.y,t.z,4,3,22),this.sparksSilver.spawn(t.x,t.y,t.z,4,3,22)}lungeSparks(t){this.sparksGold.spawn(t.x,t.y,t.z,2,2,10)}emberBurst(t){this.embers.spawn(t.x,t.y,t.z,1.2,1.6,14)}ghost(t){this.jade.spawn(t.x,t.y,t.z,.8,.6,6,Ge.SELL_BRIGHT)}ghostTile(t){this.jade.spawn(t.x,t.y,t.z,.8,.6,6,Ge.SELL_DEEP)}dustBurst(t){this.dust.spawn(t.x,t.y,t.z,2.2,1.8,16)}furTuft(t){this.fur.spawn(t.x,t.y,t.z,.6,.4,5)}coinPop(t){this.sparksGold.spawn(t.x,t.y,t.z,1.5,3.5,8,"#B08D57")}update(t){for(let e of[this.sparksGold,this.sparksSilver,this.embers,this.jade,this.dust,this.fur])e.update(t)}};function D_(i,t){let e=document.createElement("canvas");e.width=128,e.height=128;let n=e.getContext("2d");n.fillStyle=i,n.strokeStyle=t,n.lineWidth=4,n.lineJoin="round",n.beginPath(),n.ellipse(64,88,30,34,0,0,Math.PI*2),n.fill(),n.beginPath(),n.arc(64,46,22,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(47,34),n.lineTo(42,12),n.lineTo(58,26),n.closePath(),n.fill(),n.stroke(),n.beginPath(),n.moveTo(81,34),n.lineTo(86,12),n.lineTo(70,26),n.closePath(),n.fill(),n.stroke(),n.beginPath(),n.moveTo(90,104),n.bezierCurveTo(114,100,116,72,102,62),n.lineWidth=9,n.strokeStyle=i,n.stroke(),n.fillStyle=i,n.beginPath(),n.ellipse(52,118,12,6,0,0,Math.PI*2),n.ellipse(78,118,12,6,0,0,Math.PI*2),n.fill();let s=new on(e);return s.colorSpace=Pe,s}var U_=["#35D07F","#26A69A","#1B7A4B"],N_=["#EF5350","#A31621","#7A0C14"];function ku(i,t,e,n){let s=new ee;i.add(s);let r=t==="buy"?U_:N_,o=t==="buy"?1:-1,a=[],c=r.map(h=>D_(h,"rgba(5,6,15,0.8)")),l=0;for(let h=0;h<n;h++)for(let d=0;d<e;d++){let u=c[l%c.length],f=new De({map:u,transparent:!0,depthWrite:!1,fog:!0}),_=new qt(new xe(.62,.62),f),y=d-(e-1)/2,g=o*(6.1+h*.85+Math.random()*.45),p=-3.3+y*.62+(Math.random()-.5)*.3,E=.75+Math.random()*.4;_.position.set(g,0,p),_.scale.setScalar(E),_.rotation.y=o*-(.45+Math.random()*.3),s.add(_),a.push({m:_,baseY:.31*E,s:E,phase:Math.random()*Math.PI*2,speed:5+Math.random()*4,hop:.6+Math.random()*.8}),l++}return{group:s,cats:a,side:t}}var Yo=class{constructor(t,e=1){let n=Math.max(3,Math.round(6*e)),s=Math.max(2,Math.round(3*e));this.packs=[ku(t,"buy",n,s),ku(t,"sell",n,s)],this.cheer={buy:0,sell:0},this.t=0}update(t,e,n=0){this.t+=t;let s=Be.clamp(e||0,-1,1),r=Be.clamp(n||0,0,1),o=s>.08?Math.min(1,s*1.4):r*.35,a=s<-.08?Math.min(1,-s*1.4):r*.35,c=Math.min(1,t*4);this.cheer.buy+=(o-this.cheer.buy)*c,this.cheer.sell+=(a-this.cheer.sell)*c;for(let l of this.packs){let h=this.cheer[l.side];for(let d of l.cats){let u=Math.sin(this.t*(1.4+r*1.2)+d.phase)*(.012+r*.02),f=h>.02?Math.abs(Math.sin(this.t*(d.speed+r*3)+d.phase)):0;d.m.position.y=d.baseY+u+f*h*(.34+r*.22)*d.hop,d.m.rotation.z=f*h*.08*(d.m.position.x>0?-1:1)}}}};var Oi=Be.clamp;var F_={RUSH:{cat:"A",len:.62,cool:2.6,prio:1},LUNGE:{cat:"A",len:.5,cool:2.2,prio:1},SLASH_UP:{cat:"A",len:.55,cool:2.8,prio:1},TAUNT:{cat:"A",len:.8,cool:4.5,prio:2},PARRY_HOP:{cat:"B",len:.45,cool:1.9,prio:1},SLASH_SPIN:{cat:"B",len:.6,cool:2.4,prio:1},RIPOSTE:{cat:"B",len:.6,cool:2.2,prio:2}},Gu=new Set(["RUSH","LUNGE","SLASH_UP","SLASH_SPIN","RIPOSTE","TAUNT"]),B_=new Set(["PARRY_HOP","RIPOSTE","RECOVER"]),O_=["RUSH","SLASH_UP","LUNGE","LUNGE"],z_=["SLASH_SPIN","PARRY_HOP","RIPOSTE","RIPOSTE"],qo=class{constructor({rope:t,cats:e,flag:n,vfx:s,arena:r}){this.rope=t,this.cats=e,this.flag=n,this.vfx=s,this.arena=r,this.pressure=0,this.price=0,this.priceHistory=[],this.high15m=-1/0,this.low15m=1/0,this.prevP=0,this.cools={},this.sideCool={A:0,B:0},this.lowPTime=0,this.freezeUntil=0,this.frozen=!1,this.frozenPose=null,this.stumbling=!1,this.active={},this.now=0,this.onClash=null,this._events=[],this._lastMover="B",this.phase="circle",this.phaseT=0,this.phaseDur=1.4,this.gap=Math.abs(e.A.x-e.B.x),this.gapTarget=2,this.mid=(e.A.x+e.B.x)/2,this.circlePhase=0,this.lastMoveAt=0,this.stats={moves:0,clashes:0,locks:0,hits:0},this.busyUntil=0,this.lockCool=0,this._beats=[],this.engage=0,this.pS=0,this.lastLockAt=-99,this._lastUsed={},this._lastWinner=null,this._slotAt=void 0,this._lastAnswerAt=-9,this.intensity=0,this.log=[],this.reasons={}}brawlIntensity(){return this.intensity}setPressure(t){this.pressure=Oi(t,-1,1),this._events.push({type:"pressure",P:this.pressure})}setPrice(t){let e=this.now;for(this.price=t,this.priceHistory.push({t:e,px:t});this.priceHistory.length&&e-this.priceHistory[0].t>60;)this.priceHistory.shift();let n=this.priceHistory.filter(s=>e-s.t<=900);if(n.length){let s=-1/0,r=1/0;for(let o of n)o.px>s&&(s=o.px),o.px<r&&(r=o.px);t>this.high15m&&(this.high15m=t,this._events.push({type:"newHigh"})),t<this.low15m&&(this.low15m=t,this._events.push({type:"newLow"})),(s!==this._lastHi||r!==this._lastLo)&&(t>=s&&this._lastHi!==void 0&&s>this._lastHi&&this._events.push({type:"newHigh15"}),t<=r&&this._lastLo!==void 0&&r<this._lastLo&&this._events.push({type:"newLow15"}),this._lastHi=s,this._lastLo=r)}}trendM(){let t=this.priceHistory;if(t.length<2)return 0;let e=t.find(s=>this.now-s.t<=60);if(!e||e.px===this.price)return 0;let n=(this.price-e.px)/e.px;return Oi(n/.005,-1,1)}_after(t,e){this._beats.push({t:this.now+t,fn:e})}update(t){this.now+=t,this._lastDt=t;let e=this.cats.A,n=this.cats.B;this.pS+=(this.pressure-this.pS)*Math.min(1,t/1.2);let s={BLADE_LOCK:1,CLASH:.85,HIT:.7,LUNGE:.62,RUSH:.62,RIPOSTE:.55,STUMBLE:.5,TAUNT:.32,RECOVER:.24,PARRY_HOP:.18,IDLE:.08,FREEZE:.05},r=Math.max(s[e.state.name]===void 0?.12:s[e.state.name],s[n.state.name]===void 0?.12:s[n.state.name]);if(this.intensity+=(r-this.intensity)*Math.min(1,t/.7),this._beats.length){let a=[];this._beats=this._beats.filter(c=>c.t<=this.now?(a.push(c),!1):!0);for(let c of a)c.fn()}for(let a of["A","B"]){let c=this.cats[a],l=this.active[a];l&&c.state.name!==l&&(delete this.active[a],(l==="RUSH"||l==="LUNGE")&&this.rope.injectImpulse(c.x,0,-.4,0))}if(this.frozen&&Math.abs(this.pressure)>=.1){this.frozen=!1;for(let a of["A","B"])this.cats[a].setState("IDLE");this.lastMoveAt=this.now}this.frozen||this._pacePair(t);let o=this.trendM();!this.frozen&&!this.stumbling&&(this.mid=Oi(this.mid+o*.5*t,-(ae.spanHalf-ae.poleClearance-1.2),ae.spanHalf-ae.poleClearance-1.2),this.circlePhase+=t),!this.frozen&&!this.stumbling&&this._checkTriggers(),!this.frozen&&!this.stumbling&&this.now>this.busyUntil&&this._tempoTick(),this._events.length=0}_pacePair(t){let e=this.cats.A,n=this.cats.B;if(this.phaseT+=t,this.phaseT>=this.phaseDur){this.phaseT=0;let f=1.9-Math.abs(this.pS)*.35,_=.92+Math.random()*.16;this.phase==="circle"?(this.phase="engage",this.phaseDur=f*.26*_,this.gapTarget=1.6+Math.random()*.08):this.phase==="engage"?(this.phase="break",this.phaseDur=f*.13*_,this.gapTarget=2.24+Math.random()*.1):(this.phase="circle",this.phaseDur=f*.61*_,this.gapTarget=2.06+Math.random()*.1)}this.engage=this.phase==="engage"?1:0;let s=Math.abs(e.x-n.x),r=this.gapTarget,o=r<s?2.3:1.6,a=Math.sign(r-s)*Math.min(Math.abs(r-s),o*t),c=this.phase==="circle"?Math.sin(this.circlePhase*1.7)*.1:0,l=this.mid+a/2+c,h=this.mid-a/2-c*.6;if(l<h){let f=l;l=h,h=f}let d=ae.spanHalf-ae.poleClearance-.4;Math.abs(l)>d&&(e.wobble=.6),e.x=Oi(l,-d,d),n.x=Oi(h,-d,d),this.gap=Math.abs(e.x-n.x);let u=1.05;if(this.gap<u){let f=(u-this.gap)/2,_=e.x>n.x?1:-1;e.x+=_*f,n.x-=_*f,this.gap=Math.abs(e.x-n.x)}}_tempoTick(){let t=this.phase==="engage"?.56:.8;if(this._slotAt===void 0&&(this._slotAt=this.now+.25),this.now<this._slotAt)return;this._slotAt=this.now+t*(.9+Math.random()*.2);let e=this.pS,n=e>=0?Math.random()<.5+Math.min(.35,Math.abs(e)*.5):Math.random()<.35,s=n?"A":"B",r=n?"B":"A",o=this.gap<1.5;for(let a of[s,r]){let c=a==="A"?O_:z_,l=o?c.filter(h=>h!=="TAUNT"):c;for(let h of this._ordered(l))if(this._canMove(a,h)){this._start(a,h,{dir:this._fw(a)},"tempo");return}}for(let a of["A","B"])for(let c of a==="A"?["TAUNT"]:["PARRY_HOP"])if(this._canMove(a,c)){this._start(a,c,{dir:this._fw(a)},"tempo");return}}_ordered(t){let e={};for(let n of t)e[n]=Math.random()*.5;return t.slice().sort((n,s)=>{let r=(this._lastUsed[n]===void 0?-20:this._lastUsed[n])+e[n],o=(this._lastUsed[s]===void 0?-20:this._lastUsed[s])+e[s];return r-o})}_fw(t){return t==="A"?-1:1}_checkTriggers(){let t=this.pressure,e=this._events,n=this.priceHistory,s=null;for(let a=n.length-1;a>=0;a--)if(this.now-n[a].t>=5){s=n[a].px;break}if(s&&!this.stumbling&&this.now>this.busyUntil&&Math.abs(this.price-s)/s>.0018&&!this._stumbleCool){this._startPair("STUMBLE"),this._stumbleCool=this.now+6;return}if(this._stumbleCool&&this.now>this._stumbleCool&&(this._stumbleCool=0),Math.abs(t)<.06){if(this.lowPTime+=this._lastDt||0,this.lowPTime>8&&!this.frozen){this.frozen=!0;for(let a of["A","B"])this.cats[a].setState("FREEZE",0,{until:()=>!this.frozen});return}}else this.lowPTime=0;let r=this.trendM();if(this._prevM!==void 0&&r!==0&&this._prevM!==0&&Math.sign(r)!==Math.sign(this._prevM)){if(r>0&&this._canMove("A","TAUNT")){this._start("A","TAUNT",{dir:this._fw("A")},"momentum");return}if(r<0&&this._canMove("B","RIPOSTE")){this._start("B","RIPOSTE",{dir:this._fw("B")},"momentum");return}}this._prevM=r;let o=!1;for(let a of e)if(a.type==="pressure"){if(this.prevP<=.35&&a.P>.35&&this._canMove("A","RUSH")){this._start("A","RUSH",{dir:this._fw("A")},"spike"),o=!0;break}if(this.prevP>=-.35&&a.P<-.35&&this._canMove("B","PARRY_HOP")){this._start("B","PARRY_HOP",{dir:this._fw("B")},"spike"),o=!0;break}this.prevP=a.P}o||(this.prevP=t);for(let a of e){if(a.type==="newHigh15"&&this._canMove("A","SLASH_UP")){this._start("A","SLASH_UP",{dir:this._fw("A")},"extreme");return}if(a.type==="newLow15"&&this._canMove("B","SLASH_SPIN")){this._start("B","SLASH_SPIN",{dir:this._fw("B")},"extreme");return}}}_canMove(t,e){let n=this.now;if(this.active[t]||(this.cools[e]||0)>n||this.sideCool[t]>n||n<this.busyUntil)return!1;let s=this.cats[t].state;return!(s.name==="BLADE_LOCK"||s.name==="CLASH"||s.name==="STUMBLE"||s.name==="FREEZE"||s.name==="HIT"||s.name==="RECOVER"&&s.t<.12)}_start(t,e,n={},s="tempo"){let r=F_[e];this.log.push({t:+this.now.toFixed(2),side:t,move:e,reason:s}),this.log.length>400&&this.log.shift(),this.reasons[s]=(this.reasons[s]||0)+1;let o=this.cats[t];(e==="RUSH"||e==="LUNGE")&&(n.reach=Oi(this.gap-1.15,.12,1)),this._lastUsed[e]=this.now,this.cools[e]=this.now+r.cool,this.sideCool[t]=this.now+.55,this.active[t]=e,this.lastMoveAt=this.now,this._lastMover=t,this.stats.moves++,o.setState(e,r.len,n);let a=t==="A"?"B":"A";if(Gu.has(e)&&!this.active[a]&&this.now-this._lastAnswerAt>.42&&Math.random()<.45){let c=a==="B"?"PARRY_HOP":"LUNGE";this._canMove(a,c)&&(this._start(a,c,{dir:this._fw(a)},"reaction"),this._lastAnswerAt=this.now)}}_startPair(t){let e=t==="STUMBLE"?1.6:1.2;this.stumbling=!0,this.active.A=t,this.active.B=t;let n=Oi(Math.abs(this.cats.A.x)-2,.4,1),s=Oi(Math.abs(this.cats.B.x)-2,.4,1);this.cats.A.setState(t,e,{dir:-this._fw("A"),dist:n}),this.cats.B.setState(t,e,{dir:-this._fw("B"),dist:s});let r=(this.cats.A.x+this.cats.B.x)/2,o=this.rope.yAt(r);this._after(e*.5,()=>{if(this.vfx){this.vfx.dustBurst({x:r,y:Math.max(o-.4,.4),z:.2}),this.vfx.furTuft({x:r+.3,y:o+.2,z:.1});let a=this.arena.userData.coins?this.arena.userData.coins():[];if(a&&a[0]){let c=a[Math.floor(Math.random()*a.length)];this.vfx.coinPop({x:c.position.x,y:c.position.y+.4,z:c.position.z})}}this.flag&&(this.flag.spin=1.5)}),this._after(e+.1,()=>{this.stumbling=!1,this.lastMoveAt=this.now})}tryClash(t){let n=t==="A"?"B":"A",s=this.cats[n];if(this.now<this.busyUntil||this.now<this.lockCool)return!1;let r=s.state.name,o=B_.has(r)||Gu.has(r);if(!(this.gap<1.75))return!1;let c=this.now-this.lastLockAt,l=o?.6:.18,h=c<4?.35:c>9?1.25:1;if(Math.random()>Math.min(.92,l*h))return!1;let d=this.pS>.02?"A":this.pS<-.02||this._lastWinner==="A"?"B":"A";return this._beginLock(d),!0}_beginLock(t){let e=t==="A"?"B":"A",n=.42+Math.random()*.1;this.lastLockAt=this.now,this._lastWinner=t,this.busyUntil=this.now+n+.55,this.active.A="BLADE_LOCK",this.active.B="BLADE_LOCK",this.cats.A.setState("BLADE_LOCK",n,{winner:t==="A"}),this.cats.B.setState("BLADE_LOCK",n,{winner:t==="B"}),this.stats.locks++,this.lastMoveAt=this.now,this._after(n,()=>{let s=t==="A"?-1:1;this.cats[e].setState("CLASH",.5,{dir:s,loser:!0}),this.cats[t].setState("CLASH",.5,{dir:s,loser:!1}),this.active.A="CLASH",this.active.B="CLASH",this.stats.clashes++,this.sideCool.A=this.sideCool.B=this.now+.4,this.onClash&&this.onClash({winner:t,loser:e})}),this._after(n+.5,()=>{this.cats.A.setState("RECOVER",.2),this.cats.B.setState("RECOVER",.2),delete this.active.A,delete this.active.B,this.lastMoveAt=this.now,this.lockCool=this.now+2.2,this.phase="break",this.phaseT=0,this.phaseDur=.5+Math.random()*.5,this.gapTarget=2.1+Math.random()*.7,this._after(.05,()=>{let s=t==="A"?"RUSH":"SLASH_SPIN";this._canMove(t,s)&&this._start(t,s,{dir:this._fw(t)})})})}resolveHit(t,e){let s=t==="A"?"B":"A",r=this.cats[s];if(this.now<this.busyUntil||r.state.name==="STUMBLE"||r.state.name==="BLADE_LOCK"||r.state.name==="CLASH")return;let o=.7+Math.abs(this.pressure)*.8;r.setState("HIT",.3,{dir:e,mag:o}),this.active[s]="HIT",this.stats.hits++,this.busyUntil=this.now+.12}pairCentre(){return(this.cats.A.x+this.cats.B.x)/2}};function Vu(i){let e=new Jn(60,32,20),n=new qe({side:en,depthWrite:!1,fog:!1,uniforms:{top:{value:new Xt("#04050E")},mid:{value:new Xt("#0B1030")},horizon:{value:new Xt("#1E1638")},glowA:{value:new Xt("#3A2638")},glowB:{value:new Xt("#1F0F0A")}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform vec3 top; uniform vec3 mid; uniform vec3 horizon;
      uniform vec3 glowA; uniform vec3 glowB;
      varying vec3 vP;
      void main(){
        float h = clamp(vP.y / ${60 .toFixed(1)} * 1.45 + 0.30, 0.0, 1.0);
        vec3 col = mix(horizon, mid, smoothstep(0.0, 0.55, h));
        col = mix(col, top, smoothstep(0.55, 1.0, h));
        // warm scatter bands near the horizon (distant torch/city glow)
        float band = pow(max(0.0, 1.0 - abs(vP.y) / ${60 .toFixed(1)}), 3.0);
        col += glowA * band * 0.55;
        float core = pow(max(0.0, 1.0 - abs(vP.y) / ${60 .toFixed(1)}), 8.0);
        col += glowB * core * 0.9;
        gl_FragColor = vec4(col, 1.0);
      }`}),s=new qt(e,n);return i.add(s),s}function Wu(i){let t=new ee,e=[{n:420,r:56,size:1.15,opacity:.95,tw:1.7},{n:300,r:57.5,size:.85,opacity:.75,tw:2.3},{n:200,r:59,size:.62,opacity:.55,tw:3.1}],n=[];for(let c of e){let l=[],h=[],d=[];for(let y=0;y<c.n;y++){let g=Math.random()*Math.PI*2,p=.12+Math.random()*.83,E=Math.sqrt(Math.max(0,1-p*p)),A=c.r;l.push(A*E*Math.cos(g),A*p,A*E*Math.sin(g));let M=Math.random(),v=M<.55?[.86,.89,1]:M<.8?[1,.96,.86]:M<.92?[1,.84,.6]:[.75,.83,1],b=.6+Math.random()*.4;h.push(v[0]*b,v[1]*b,v[2]*b),d.push(Math.random()*Math.PI*2)}let u=new _e;u.setAttribute("position",new re(l,3)),u.setAttribute("color",new re(h,3)),u.setAttribute("phase",new re(d,1));let f=new qe({transparent:!0,depthWrite:!1,fog:!1,blending:fn,uniforms:{uTime:{value:0},uBase:{value:c.opacity},uSize:{value:c.size}},vertexShader:`
        attribute float phase; attribute vec3 color; varying vec3 vC; varying float vPh;
        uniform float uSize;
        void main(){ vC = color; vPh = phase;
          vec4 mv = modelViewMatrix * vec4(position,1.0);
          gl_PointSize = uSize * (280.0 / -mv.z);
          gl_Position = projectionMatrix * mv; }`,fragmentShader:`
        uniform float uTime; uniform float uBase; varying vec3 vC; varying float vPh;
        void main(){
          vec2 d = gl_PointCoord - 0.5;
          float m = smoothstep(0.5, 0.12, length(d));
          float tw = 0.62 + 0.38 * sin(uTime * ${c.tw.toFixed(2)} + vPh);
          gl_FragColor = vec4(vC, uBase * m * tw);
        }`}),_=new En(u,f);_.frustumCulled=!1,_.renderOrder=-4,t.add(_),n.push({points:_,mat:f,speed:c.tw,base:c.opacity})}let s=[],r=[];for(let c=0;c<900;c++){let l=(Math.random()-.5)*Math.PI*2,h=(Math.random()-.5)*.55*(1+Math.sin(l*3)*.3),d=Math.cos(l)*56,u=14+Math.sin(l*1.3)*22,f=Math.sin(l)*40-20,_=d+(Math.random()-.5)*14,y=u+h*22+(Math.random()-.5)*9,g=f+(Math.random()-.5)*14,p=.1+Math.random()*.3,E=Math.random()<.3;s.push(_,Math.max(3,y),g),r.push(p*(E?1:.85),p*.9,p*(E?.75:1))}let o=new _e;o.setAttribute("position",new re(s,3)),o.setAttribute("color",new re(r,3));let a=new En(o,new Zn({size:.42,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1,fog:!1,blending:fn}));return a.frustumCulled=!1,a.renderOrder=-4,t.add(a),i.add(t),{group:t,update(c){for(let l of n)l.mat.uniforms.uTime.value=c*l.speed;t.rotation.y=c*.004}}}function Xu(i){let t=new ee,e=[];function n(s){let r=document.createElement("canvas");r.width=256,r.height=128;let o=r.getContext("2d");for(let a=0;a<26;a++){let c=30+Math.random()*196,l=40+Math.random()*55,h=16+Math.random()*36,d=o.createRadialGradient(c,l,0,c,l,h),u=.09+Math.random()*.13;d.addColorStop(0,`rgba(198,208,240,${u})`),d.addColorStop(1,"rgba(198,208,240,0)"),o.fillStyle=d,o.beginPath(),o.arc(c,l,h,0,Math.PI*2),o.fill()}return Xe(r)}for(let s=0;s<9;s++){let r=new De({map:n(s),transparent:!0,depthWrite:!1,fog:!1,opacity:.5+Math.random()*.3,side:ye}),o=5+Math.random()*6,a=new qt(new xe(o,o*.4),r);a.position.set((Math.random()-.5)*22,5.2+Math.random()*5.2,-4.6-Math.random()*1.9),a.rotation.x=-.05,a.renderOrder=2,t.add(a),e.push({m:a,speed:.12+Math.random()*.22,phase:Math.random()*100})}return i.add(t),{group:t,update(s,r){for(let o of e)o.m.position.x+=o.speed*r,o.m.position.x>18&&(o.m.position.x=-18),o.m.position.y+=Math.sin(s*.3+o.phase)*.0035,o.m.material.opacity=.34+.22*Math.sin(s*.23+o.phase),o.m.material.opacity<.18&&(o.m.material.opacity=.18)}}}function Yu(i){let t=new ee,e=3,n=[],s=[];for(let o=0;o<e;o++){let a=document.createElement("canvas");a.width=256,a.height=16;let c=a.getContext("2d"),l=c.createLinearGradient(0,8,256,8);l.addColorStop(0,"rgba(255,255,255,0)"),l.addColorStop(.75,"rgba(200,220,255,0.85)"),l.addColorStop(1,"rgba(255,255,255,1)"),c.fillStyle=l,c.fillRect(0,0,256,16);let h=Xe(a),d=new De({map:h,transparent:!0,depthWrite:!1,fog:!1,opacity:0,blending:fn}),u=new qt(new xe(9,.16),d);u.visible=!1,u.renderOrder=-4,t.add(u),s.push(u),n.push(d)}let r=s.map((o,a)=>({active:!1,t:0,dur:0,next:4+a*5,from:new L,to:new L}));return i.add(t),{group:t,update(o,a,c){for(let l=0;l<e;l++){let h=r[l],d=s[l],u=n[l];if(!h.active){if(h.next-=a*(1+c*.6),h.next<=0){h.active=!0,h.t=0,h.dur=.9+Math.random()*.7;let y=Math.PI*(.62+Math.random()*.25),g=40+Math.random()*8;h.from.set(Math.cos(y)*g*(Math.random()<.5?-1:1),20+Math.random()*14,-28-Math.random()*10),h.to.set(h.from.x*-.35-(Math.random()-.5)*20,h.from.y-14-Math.random()*8,h.from.z+4),d.visible=!0}continue}h.t+=a;let f=h.t/h.dur;if(f>=1){h.active=!1,h.next=6+Math.random()*12,d.visible=!1;continue}d.position.lerpVectors(h.from,h.to,f),d.lookAt(d.position.clone().multiplyScalar(2));let _=Math.sin(Math.min(1,f*1.15)*Math.PI);u.opacity=_*.9}}}}function qu(i){let t=new ee;function e(n,s,r,o,a,c){let l=document.createElement("canvas");l.width=1024,l.height=256;let h=l.getContext("2d");h.clearRect(0,0,1024,256),h.fillStyle=o;let d=a,u=()=>(d=d*16807%2147483647,d%1e3/1e3),f=256*.55,_=256*.85;h.beginPath(),h.moveTo(0,256);let y=(f+_)/2;for(let E=0;E<=1024;E+=16)y+=(u()-.5)*26,y=Math.max(f,Math.min(_,y)),h.lineTo(E,y);h.lineTo(1024,256),h.closePath(),h.fill();let g=new on(l);g.colorSpace=Pe;let p=new qt(new xe(n,s),new De({map:g,transparent:!0,depthWrite:!1,fog:!1}));return p.position.set(0,c+s/2,r),p.renderOrder=-3,p}return t.add(e(170,10,-54,"#161229",12345,5.6)),t.add(e(150,8,-46,"#1E1836",987654,5)),i.add(t),t}function Zu(i,t=1){let e=Math.round(44*Math.max(.25,Math.min(1,t))),n=new Float32Array(e*3),s=new Float32Array(e),r=[];for(let l=0;l<e;l++){let h=(Math.random()-.5)*20,d=.6+Math.random()*3.4,u=-2+Math.random()*9;r.push([h,d,u]),n[l*3]=h,n[l*3+1]=d,n[l*3+2]=u,s[l]=Math.random()*Math.PI*2}let o=new _e;o.setAttribute("position",new Ie(n,3)),o.setAttribute("seed",new Ie(s,1));let a=new qe({transparent:!0,depthWrite:!1,blending:fn,uniforms:{uTime:{value:0}},vertexShader:`
      attribute float seed; uniform float uTime; varying float vA;
      void main(){
        vec3 p = position;
        p.x += sin(uTime*0.5 + seed*7.0)*0.7;
        p.y += sin(uTime*0.8 + seed*13.0)*0.45;
        p.z += cos(uTime*0.6 + seed*5.0)*0.5;
        vA = 0.18 + 0.52*pow(0.5+0.5*sin(uTime*1.15 + seed*20.0), 3.0);
        vec4 mv = modelViewMatrix * vec4(p,1.0);
        gl_PointSize = (2.0 + 1.5*sin(seed*3.0)) * (9.0/-mv.z) * 3.0;
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      varying float vA;
      void main(){
        vec2 d = gl_PointCoord - 0.5;
        float m = smoothstep(0.5, 0.05, length(d));
        vec3 warm = vec3(1.0, 0.85, 0.45);
        gl_FragColor = vec4(warm, m * vA * 0.85);
      }`}),c=new En(o,a);return c.frustumCulled=!1,i.add(c),{update(l){a.uniforms.uTime.value=l}}}function Ju(i){let t=new ee;t.position.set(0,.36,-3);let e=160,n=new Float32Array(e*3),s=[];for(let h=0;h<e;h++){let d=Math.random()*Math.PI*2,u=.9+Math.random()*.7;s.push([Math.cos(d)*.22*u,1.7+Math.random()*.9,Math.sin(d)*.22*u]),n[h*3]=0,n[h*3+1]=0,n[h*3+2]=0}let r=new _e;r.setAttribute("position",new Ie(n,3));let o=new Zn({color:10471656,size:.05,transparent:!0,opacity:.7,depthWrite:!1,blending:fn,sizeAttenuation:!0}),a=new En(r,o);t.add(a);let c=[];for(let h=0;h<3;h++){let d=new qt(new cr(.98,1,40),new De({color:10471656,transparent:!0,opacity:.35,side:ye,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.y=.02,d.userData.k=h/3,t.add(d),c.push(d)}i.add(t);let l=0;return{update(h,d){l+=d;let u=a.geometry.attributes.position;for(let f=0;f<e;f++){let _=u.getX(f),y=u.getY(f),g=u.getZ(f),p=s[f];if(_+=p[0]*d,y+=p[1]*d,g+=p[2]*d,p[1]-=4.2*d,y<.02){let E=Math.random()*Math.PI*2,A=.9+Math.random()*.7;p[0]=Math.cos(E)*.22*A,p[1]=1.7+Math.random()*.9,p[2]=Math.sin(E)*.22*A,_=0,y=0,g=0}u.setXYZ(f,_,y,g)}u.needsUpdate=!0;for(let f of c){f.userData.k+=d*.5,f.userData.k>1&&(f.userData.k-=1);let _=f.userData.k,y=.15+_*1.15;f.scale.set(y,y,y),f.material.opacity=.4*(1-_)}}}}function $u(i,t=1){let e=Math.round(28*Math.max(.25,Math.min(1,t))),n=new Float32Array(e*3),s=new Float32Array(e),r=[-7.5,-2.7,2.7,7.5];for(let l=0;l<e;l++){let h=r[l%4];n[l*3]=h+(Math.random()-.5)*.5,n[l*3+1]=2.9+Math.random()*2.4,n[l*3+2]=-6.2+Math.random()*1.4,s[l]=Math.random()*100}let o=new _e;o.setAttribute("position",new Ie(n,3)),o.setAttribute("seed",new Ie(s,1));let a=new qe({transparent:!0,depthWrite:!1,blending:fn,uniforms:{uTime:{value:0}},vertexShader:`
      attribute float seed; uniform float uTime; varying float vA;
      void main(){
        vec3 p = position;
        float lt = mod(uTime*0.15 + seed, 3.0);           // life 3s (slower rise)
        p.y += lt * 0.55;                                 // rise
        p.x += sin(uTime*1.3 + seed*3.0)*0.14 + lt*0.05;  // sway + drift
        vA = (1.0 - lt/3.0) * 0.85;
        vec4 mv = modelViewMatrix * vec4(p,1.0);
        gl_PointSize = (7.0 + 3.0*sin(seed)) * (10.0/-mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      varying float vA;
      void main(){
        vec2 d = gl_PointCoord - 0.5;
        float m = smoothstep(0.5, 0.1, length(d));
        gl_FragColor = vec4(vec3(1.0, 0.62, 0.28), m * vA);
      }`}),c=new En(o,a);return c.frustumCulled=!1,i.add(c),{update(l){a.uniforms.uTime.value=l}}}var Ku=Se.goldPrimary;function H_(){let i=document.createElement("canvas");i.width=256,i.height=128;let t=i.getContext("2d"),e=t.createRadialGradient(128,64,2,128,64,126);e.addColorStop(0,"rgba(255,255,255,0.5)"),e.addColorStop(.45,"rgba(255,255,255,0.13)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,256,128);let n=new on(i);return n.colorSpace=Pe,n}var ns={title:18,sub:12.5,chip:12.5,axis:13,time:12,tag:14,msg:13},Pc={r:96,t:40,b:26},ju={wide:{l:.672,r:.985,t:.104,b:.348},narrow:{l:.045,r:.955,t:.175,b:.3}},Ic={x:.022,y:-.062,z:.013};function Qu(i,t,e={}){let n=e.z!=null?e.z:-24,s=e.redrawMs||400,r=e.renderer,o=document.createElement("canvas");o.width=1e3,o.height=144;let a=o.getContext("2d"),c=1,l=q=>q/c,h=new on(o);h.colorSpace=Pe,h.generateMipmaps=!0,h.minFilter=gn,h.magFilter=ke,h.anisotropy=e.anisotropy||4;let d=new De({map:h,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,side:ye}),u=new qt(new xe(30,4.4),d);u.position.set(0,10.8,n),u.renderOrder=0,u.frustumCulled=!1;let f=new qt(new xe(36,7),new De({map:H_(),transparent:!0,blending:fn,depthWrite:!1,fog:!1,opacity:.16}));f.position.copy(u.position),f.renderOrder=-1;let _=new ee;_.add(f,u),i.add(_);let y=e.variant||"slab",g=["slab","aurora","stars"],p="",E=new L;function A(q,rt){E.set(q*2-1,-(rt*2-1),.5).unproject(t),E.sub(t.position).normalize();let et=(n-t.position.z)/E.z;return{x:t.position.x+E.x*et,y:t.position.y+E.y*et}}function M(){let q=r&&r.domElement.clientWidth||window.innerWidth||1280,rt=r&&r.domElement.clientHeight||window.innerHeight||800;t.updateMatrixWorld(!0),Math.abs(t.aspect-q/rt)>.001&&(t.aspect=q/rt,t.updateProjectionMatrix());let et=q<700?ju.narrow:ju.wide;p=q+"x"+rt;let At=Math.max(120,(et.r-et.l)*q),Qt=Math.max(60,(et.b-et.t)*rt),Ut=Math.min(1.7,Math.max(.5,1e3/At)),Wt=Math.round(At*Ut),Jt=Math.round(Qt*Ut);(Wt!==o.width||Jt!==o.height)&&(o.width=Wt,o.height=Jt,h.dispose(),h.needsUpdate=!0),c=At/Wt;let Ht=A(et.l,et.t),jt=A(et.r,et.b),ue=Math.abs(jt.x-Ht.x),ft=Math.abs(jt.y-Ht.y);u.geometry.dispose(),u.geometry=new xe(ue,ft),u.position.set((Ht.x+jt.x)/2,(Ht.y+jt.y)/2,n),u.rotation.set(Ic.x,Ic.y,Ic.z),f.geometry.dispose(),f.geometry=new xe(ue*1.24,ft*2.1),f.position.copy(u.position),f.rotation.copy(u.rotation),f.material.opacity=y==="slab"?.2:y==="aurora"?.13:.08}let v={rev:0,seeded:!1,count:0,t:[],o:[],h:[],l:[],c:[]},b={price:null,status:"",mode:"",providerLabel:""},R=null,x=[],T=-1,C=null,D=0,O=0,H=Date.now(),I=8e3,z=9e3;function X(){if(!v.count)return{txt:"LOADING\u2026",col:"#8F98A3",key:"load"};let q=R||b;if(q.mode==="demo")return{txt:"SIM TAPE",col:Ku,key:"demo"};let rt=q.providerLabel?String(q.providerLabel).toUpperCase():"SPOT";return q.status==="open"?Date.now()-H>I?{txt:"STALE FEED",col:Ge.SELL_BRIGHT,key:"stale"}:{txt:"LIVE",col:Ge.BUY_BRIGHT,key:"live"}:q.status==="connecting"||q.status==="backoff"?{txt:"RECONNECTING\u2026",col:Ku,key:"recon"}:{txt:"OFFLINE",col:"#8F98A3",key:"off"}}let Z=q=>q>=1e3?Math.round(q).toLocaleString("en-US"):q.toPrecision(5);function nt(q){if(!(q>0))return 1;let rt=Math.pow(10,Math.floor(Math.log10(q)));for(let et of[1,2,2.5,5,10])if(q<=et*rt)return et*rt;return 10*rt}let K=q=>new Date(q).toTimeString().slice(0,8);function it(q,rt,et,At,Qt,Ut){q.beginPath(),q.moveTo(rt+Ut,et),q.arcTo(rt+At,et,rt+At,et+Qt,Ut),q.arcTo(rt+At,et+Qt,rt,et+Qt,Ut),q.arcTo(rt,et+Qt,rt,et,Ut),q.arcTo(rt,et,rt+At,et,Ut),q.closePath()}function tt(){let q=Date.now();D=q,O++;let rt=o.width,et=o.height,At=y==="aurora",Qt=y==="stars",Ut=X(),Wt=l(Pc.r),Jt=l(Pc.t),Ht=l(Pc.b),jt=rt-Wt,ue=et-Jt-Ht;if(a.clearRect(0,0,rt,et),!At&&!Qt){let mt=a.createLinearGradient(0,0,0,et);mt.addColorStop(0,"rgba(8,10,24,0)"),mt.addColorStop(.16,"rgba(8,10,24,0.44)"),mt.addColorStop(.74,"rgba(7,9,22,0.38)"),mt.addColorStop(1,"rgba(7,9,22,0)"),a.fillStyle=mt,a.fillRect(0,0,rt,et);let Tt=l(52);a.globalCompositeOperation="destination-out";let le=a.createLinearGradient(0,0,Tt,0);le.addColorStop(0,"rgba(0,0,0,1)"),le.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=le,a.fillRect(0,0,Tt,et);let Ee=a.createLinearGradient(rt-Tt,0,rt,0);Ee.addColorStop(0,"rgba(0,0,0,0)"),Ee.addColorStop(1,"rgba(0,0,0,1)"),a.fillStyle=Ee,a.fillRect(rt-Tt,0,Tt,et),a.globalCompositeOperation="source-over";let Ce=a.createLinearGradient(0,0,rt,0);Ce.addColorStop(0,"rgba(245,197,66,0)"),Ce.addColorStop(.1,"rgba(245,197,66,0.5)"),Ce.addColorStop(.9,"rgba(245,197,66,0.5)"),Ce.addColorStop(1,"rgba(245,197,66,0)"),a.strokeStyle=Ce,a.lineWidth=Math.max(1,l(1.2)),a.beginPath(),a.moveTo(l(6),l(5)+.5),a.lineTo(rt-l(6),l(5)+.5),a.stroke(),a.beginPath(),a.moveTo(l(6),et-l(4)+.5),a.lineTo(rt-l(6),et-l(4)+.5),a.stroke(),a.strokeStyle="rgba(245,197,66,0.75)",a.lineWidth=Math.max(1.2,l(1.8));let $e=l(11);for(let[kn,Rn,Mn,pn]of[[l(6),l(5),1,1],[rt-l(6),l(5),-1,1],[l(6),et-l(4),1,-1],[rt-l(6),et-l(4),-1,-1]])a.beginPath(),a.moveTo(kn+Mn*$e,Rn),a.lineTo(kn,Rn),a.lineTo(kn,Rn+pn*$e),a.stroke()}else if(At){let mt=a.createLinearGradient(0,0,0,et);mt.addColorStop(0,"rgba(120,150,200,0.055)"),mt.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=mt,a.fillRect(0,0,rt,et)}a.textBaseline="middle",a.font=`700 ${l(ns.title)}px "Space Grotesk", Consolas, monospace`,a.textAlign="left",a.fillStyle="rgba(242,238,227,0.92)",a.fillText("BTC / USDT",l(16),l(21)),a.font=`500 ${l(ns.sub)}px "Space Grotesk", Consolas, monospace`,a.fillStyle="rgba(176,182,210,0.95)",a.fillText("1 s CANDLES",l(16)+a.measureText("BTC / USDT").width+l(84),l(22)),a.font=`700 ${l(ns.chip)}px "Space Grotesk", Consolas, monospace`;let ft=Ut.txt,de=a.measureText(ft).width+l(38),ve=rt-l(14)-de,N=l(21)-l(12);a.fillStyle="rgba(6,8,18,0.45)",it(a,ve,N,de,l(24),l(12)),a.fill(),a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=1,it(a,ve+.5,N+.5,de-1,l(24)-1,l(12)),a.stroke(),a.beginPath(),a.arc(ve+l(12),N+l(12),l(3.6),0,6.284),a.fillStyle=Ut.col,a.fill(),a.fillStyle=Ut.col,a.fillText(ft,ve+l(22),N+l(13));let Ot=v.count|0;if(Ot<2){a.fillStyle="rgba(146,152,181,0.8)",a.font=`500 ${l(ns.msg)}px "Space Grotesk", Consolas, monospace`,a.textAlign="center",a.fillText(v.seeded?"awaiting live tape\u2026":"seeding 5 min of 1 s candles\u2026",rt/2,Jt+ue/2),h.needsUpdate=!0;return}let ne=v.t,w=v.o,m=v.h,P=v.l,U=v.c,W=Math.max(3,l(7.5)),at=jt-l(26),ht=Math.max(16,Math.floor(at/W)),V=Ot>ht?Ot-ht:0,Q=Ot-V,dt=at/(Q||1),St=mt=>(mt-V)*dt+dt*.5,ct=1/0,ot=-1/0;for(let mt=V;mt<Ot;mt++)P[mt]<ct&&(ct=P[mt]),m[mt]>ot&&(ot=m[mt]);b.price!=null&&isFinite(b.price)&&(b.price<ct&&(ct=b.price),b.price>ot&&(ot=b.price));let xt=(ot-ct)*.1||Math.abs(ot)*4e-4||1;ct-=xt,ot+=xt;let _t=mt=>Jt+(ot-mt)/(ot-ct)*ue,kt=nt((ot-ct)/3);a.font=`500 ${l(ns.axis)}px "Space Grotesk", Consolas, monospace`;for(let mt=Math.ceil(ct/kt)*kt;mt<ot;mt+=kt){let Tt=Math.round(_t(mt))+.5;a.strokeStyle=At||Qt?"rgba(255,255,255,0.045)":"rgba(255,255,255,0.10)",a.lineWidth=1,a.beginPath(),a.moveTo(l(10),Tt),a.lineTo(at+l(26),Tt),a.stroke(),Qt||(a.fillStyle="rgba(170,176,203,0.85)",a.textAlign="left",a.fillText(Z(mt),jt+l(10),Tt))}a.textAlign="center",a.textBaseline="alphabetic";let F=ne[V],pt=ne[Ot-1];for(let mt=Math.ceil(F/15e3)*15e3;mt<=pt;mt+=15e3){let Tt=V,le=Ot-1;for(;Tt<le;){let Ce=Tt+le>>1;ne[Ce]<mt?Tt=Ce+1:le=Ce}let Ee=St(Tt);Ee<l(24)||Ee>at-l(24)||(a.strokeStyle="rgba(255,255,255,0.1)",a.beginPath(),a.moveTo(Ee+.5,et-Ht),a.lineTo(Ee+.5,et-Ht+l(4)),a.stroke(),a.fillStyle="rgba(186,192,218,0.92)",a.font=`500 ${l(ns.time)}px "Space Grotesk", Consolas, monospace`,a.fillText(K(mt),Ee,et-l(6)))}if(Qt){a.strokeStyle="rgba(255,255,255,0.10)",a.lineWidth=1;for(let mt=V;mt<Ot;mt++){let Tt=St(mt);a.beginPath(),a.moveTo(Tt,_t(m[mt])),a.lineTo(Tt,_t(P[mt])),a.stroke()}a.beginPath();for(let mt=V;mt<Ot;mt++){let Tt=St(mt),le=_t(U[mt]);mt===V?a.moveTo(Tt,le):a.lineTo(Tt,le)}a.strokeStyle="rgba(190,214,255,0.22)",a.lineWidth=Math.max(1,l(1.2)),a.stroke();for(let mt=V;mt<Ot;mt++){let Tt=U[mt]>=w[mt]?Ge.BUY_BRIGHT:Ge.SELL_BRIGHT,le=St(mt),Ee=_t(U[mt]);a.globalAlpha=.85,a.beginPath(),a.arc(le,Ee,Math.max(1,l(1.8)),0,6.284),a.fillStyle=Tt,a.fill(),a.globalAlpha=.16,a.beginPath(),a.arc(le,Ee,Math.max(2.5,l(4.6)),0,6.284),a.fill(),a.globalAlpha=1}}else if(At){for(let Tt=V;Tt<Ot;Tt++){let le=St(Tt),Ce=U[Tt]>=w[Tt]?Ge.BUY_BRIGHT:Ge.SELL_BRIGHT,$e=_t(U[Tt]),kn=_t(m[Tt]),Rn=_t(w[Tt]),Mn=Math.min($e,kn),pn=a.createLinearGradient(0,Mn,0,$e+l(2));pn.addColorStop(0,"rgba(255,255,255,0)"),pn.addColorStop(.75,Ce),pn.addColorStop(1,"#ffffff"),a.fillStyle=pn,a.fillRect(le-l(1.2),Mn,l(2.4),Math.max(l(2),$e-Mn+l(2))),a.globalAlpha=1,a.fillStyle=Ce,a.fillRect(le-l(2.4),Math.min(Rn,$e),l(4.8),Math.max(l(1.8),Math.abs($e-Rn)))}let mt=a.createLinearGradient(0,Jt+ue*.3,0,et);mt.addColorStop(0,"rgba(120,180,255,0.18)"),mt.addColorStop(1,"rgba(120,180,255,0)"),a.beginPath();for(let Tt=V;Tt<Ot;Tt++){let le=St(Tt),Ee=_t(U[Tt]);Tt===V?a.moveTo(le,Ee):a.lineTo(le,Ee)}a.lineTo(jt,et+40),a.lineTo(St(V)-l(20),et+40),a.closePath(),a.fillStyle=mt,a.fill()}else{let mt=Math.max(1.5,Math.min(l(13),dt*.62));for(let Tt=V;Tt<Ot;Tt++){let le=St(Tt),Ee=U[Tt]>=w[Tt];a.fillStyle=Ee?Ge.BUY_BRIGHT:Ge.SELL_BRIGHT,a.fillRect(le-l(.7),_t(m[Tt]),Math.max(1,l(1.4)),Math.max(l(1.4),_t(P[Tt])-_t(m[Tt])));let Ce=_t(w[Tt]),$e=_t(U[Tt]);a.fillRect(le-mt/2,Math.min(Ce,$e),mt,Math.max(l(1.4),Math.abs($e-Ce)))}}if(!Qt){a.save(),a.globalCompositeOperation="lighter";for(let[mt,Tt]of[[l(9),.07],[l(4),.11]]){a.beginPath();for(let le=V;le<Ot;le++){let Ee=St(le),Ce=_t(U[le]);le===V?a.moveTo(Ee,Ce):a.lineTo(Ee,Ce)}a.strokeStyle=`rgba(150,205,255,${Tt})`,a.lineWidth=mt,a.lineJoin="round",a.stroke()}a.restore()}x=x.filter(mt=>q-mt.ts<z&&mt.ts>=F-1e3);for(let mt of x){let Tt=V,le=Ot-1,Ee=Math.floor(mt.ts/1e3)*1e3;for(;Tt<le;){let Mn=Tt+le>>1;ne[Mn]<Ee?Tt=Mn+1:le=Mn}let Ce=St(Tt),$e=_t(Math.min(ot-1,Math.max(ct+1,mt.price))),kn=Math.max(0,1-(q-mt.ts)/z),Rn=mt.side==="buy"?Ge.BUY:Ge.SELL;a.globalAlpha=.25*kn,a.beginPath(),a.arc(Ce,$e,l(8)+Math.min(l(7),mt.notional/25e4*l(7)),0,6.284),a.fillStyle=Rn,a.fill(),a.globalAlpha=kn,a.beginPath(),a.arc(Ce,$e,l(3)+Math.min(l(2.5),mt.notional/25e4*l(2.5)),0,6.284),a.fill(),a.globalAlpha=1}let $=b.price!=null&&isFinite(b.price)?b.price:U[Ot-1],lt=$>=(w[Ot-1]!=null?w[Ot-1]:$)?Ge.BUY_BRIGHT:Ge.SELL_BRIGHT,ut=Math.min(Jt+ue,Math.max(Jt,_t($))),st=St(Ot-1);Qt?(a.globalAlpha=.45,a.beginPath(),a.arc(st,ut,l(10),0,6.284),a.fillStyle=lt,a.fill(),a.globalAlpha=1,a.strokeStyle=lt,a.lineWidth=Math.max(1,l(1.6)),a.beginPath(),a.moveTo(st-l(9),ut),a.lineTo(st+l(9),ut),a.moveTo(st,ut-l(9)),a.lineTo(st,ut+l(9)),a.stroke(),a.beginPath(),a.arc(st,ut,Math.max(1.5,l(3)),0,6.284),a.fillStyle="#FFFFFF",a.fill()):(a.setLineDash([l(6),l(4)]),a.strokeStyle=lt,a.lineWidth=Math.max(1,l(1.2)),a.beginPath(),a.moveTo(l(10),ut+.5),a.lineTo(jt,ut+.5),a.stroke(),a.setLineDash([]));let Rt=$>=1e3?Math.round($).toLocaleString("en-US"):$.toFixed(2);a.font=`700 ${l(ns.tag)}px "Space Grotesk", Consolas, monospace`;let bt=a.measureText(Rt).width+l(18),oe=l(22),ce=Math.min(Jt+ue-oe/2,Math.max(Jt+oe/2,ut));a.fillStyle=lt,it(a,jt+l(6),ce-oe/2,bt,oe,l(6)),a.fill(),a.fillStyle="#05060F",a.textAlign="center",a.textBaseline="middle",a.fillText(Rt,jt+l(6)+bt/2,ce+1),(R||b).mode!=="demo"&&q-H>I&&(a.fillStyle="rgba(5,6,15,0.45)",a.fillRect(0,0,rt,et)),h.needsUpdate=!0}function Lt(q,rt){if(!q)return;let et=r&&r.domElement.clientWidth||window.innerWidth||1280,At=r&&r.domElement.clientHeight||window.innerHeight||800;et+"x"+At!==p&&(M(),tt()),v=q,rt&&(b=rt),v.rev!==T&&(T=v.rev,H=Date.now());let Qt=b.price!==C;C=b.price,Date.now()-D>=s&&(Qt||R||rt)&&tt()}function Ct(q){q&&(R=q,b.status=q.status,b.mode=q.mode,q.providerLabel&&(b.providerLabel=q.providerLabel),tt(),R=null)}function Ft(q){!q||!isFinite(q.price)||!isFinite(q.notional)||(x.push({ts:q.ts||Date.now(),price:q.price,side:q.side,notional:q.notional}),x.length>40&&x.shift())}function Bt(q){return g.includes(q)?(y=q,f.material.opacity=q==="slab"?.2:q==="aurora"?.13:.08,typeof tt=="function"&&tt(),!0):!1}function Vt(){let q=X(),rt=a.getImageData(0,0,o.width,o.height).data,et=0;for(let At=3;At<rt.length;At+=124)rt[At]>12&&et++;return{variant:y,draws:O,ink:et,candles:v.count|0,rev:v.rev|0,seeded:!!v.seeded,chip:q.key,chipText:q.txt,lastPrice:b.price,stale:(R||b).mode!=="demo"&&Date.now()-H>I,textureW:o.width,textureH:o.height,screenScale:+c.toFixed(3),plane:[+u.geometry.parameters.width.toFixed(2),+u.geometry.parameters.height.toFixed(2)],position:[+u.position.x.toFixed(2),+u.position.y.toFixed(2),+u.position.z.toFixed(2)]}}function J(){window.removeEventListener("resize",j),i.remove(_),u.geometry.dispose(),d.dispose(),h.dispose(),f.geometry.dispose(),f.material.dispose(),f.material.map.dispose()}function j(){requestAnimationFrame(()=>{M(),tt()})}return window.addEventListener("resize",j),M(),tt(),Bt(y),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>tt()).catch(()=>{}),{update:Lt,notifyStatus:Ct,trade:Ft,stats:Vt,setVariant:Bt,relayout:j,dispose:J,mesh:u,glow:f,group:_,get variant(){return y}}}function td(i,t={}){let e=new Bo({antialias:!0,powerPreference:"high-performance"}),n=(t.vfxScale||1)>.5,s=t.res?Math.max(.4,Math.min(2,t.res)):Math.min(devicePixelRatio||1,n?1.5:1.25);e.setPixelRatio(s),e.setSize(i.clientWidth||1280,i.clientHeight||720),e.shadowMap.enabled=!1,e.toneMapping=_r,e.toneMappingExposure=1.35,Pu(Math.min(8,e.capabilities.getMaxAnisotropy())),i.appendChild(e.domElement);let r=new tr;r.fog=new Qs(fe.fog,18,55);function o(){return(i.clientWidth||1280)/(i.clientHeight||720)}let a=new je(40,o(),.1,200);a.position.set(0,2.55,6.8),a.lookAt(0,3.15,0);let c=new pr("#BFD4FF",.85);c.position.set(0,14,-8),c.castShadow=!1,r.add(c,c.target);let l=new mr("#2A2438",.55);r.add(l);let h=new Ci(Ge.BUY_BRIGHT,34,7,1.6),d=new Ci(Ge.SELL_BRIGHT,34,7,1.6);r.add(h,d);let u=new fr("#FFD9A0",95,26,.75,.6,1.4);u.position.set(0,8,8),u.target.position.set(0,2,0),r.add(u,u.target);let f=new ko;r.add(f.mesh);let _=new Go;r.add(_.group);let y=new Dr("A"),g=new Dr("B");y.x=1.1,g.x=-1.1,r.add(y.root,g.root);let p=Ou(r),E=new Xo(r,t.vfxScale||1),A=new qo({rope:f,cats:{A:y,B:g},flag:_,vfx:E,arena:p}),M=new Yo(r,t.vfxScale||1),v={vfxScale:t.vfxScale||1,mouse:{x:0,y:0},mouseT:{x:0,y:0},moonPulse:0,shoot:null,clouds:null,stars:null,fireflies:null,water:null,embers:null};Vu(r),v.stars=Wu(r),v.vfxScale>.3&&(v.clouds=Xu(r),v.shoot=Yu(r),v.fireflies=Zu(r,v.vfxScale),v.water=Ju(r),v.embers=$u(r,v.vfxScale)),qu(r);let b=Qu(r,a,{variant:t.skyVariant||"slab",renderer:e,anisotropy:Math.min(8,e.capabilities.getMaxAnisotropy())});function R(m){var W,at;let P=i.clientWidth||innerWidth,U=i.clientHeight||innerHeight;v.mouseT.x=((W=m.clientX)!=null?W:P/2)/P*2-1,v.mouseT.y=((at=m.clientY)!=null?at:U/2)/U*2-1}window.addEventListener("pointermove",R,{passive:!0});let x={t:0,amp:0},T=0,C=0,D=0,O=0,H=new L,I=new L,z=new L,X=new L,Z=new L,nt=t.debug?{checks:0,fixes:0,worst:9,worstOut:9,post:null}:null;function K(m,P,U){return m.bladeMidWorld(U),P.bladeMidWorld(Z),U.lerp(Z,.5)}function it(m){let P=ae.spanHalf-ae.poleClearance;return Be.clamp(m,-P,P)}let tt=m=>m.data.side,Lt=m=>tt(m)==="A"?g:y,Ct=m=>tt(m)==="A"?-1:1;function Ft(m,P){return Math.abs(m.x-P.x)}function Bt(m,P){x.t=Math.max(x.t,m),x.amp=Math.max(x.amp,P)}function Vt(m,P){let U=tt(m),W=Lt(m),ht=-Ct(m);if(E.lungeSparks(m.bladeMidWorld()),Ft(m,W)<1.75){if(A.tryClash(U))return;Ft(m,W)<1.65&&(W.x=it(W.x+ht*(P?.5:.3)),A.resolveHit(U,ht),E.dustBurst({x:W.x,y:f.yAt(W.x),z:0}),Bt(P?.12:.07,P?.11:.06))}f.injectImpulse(m.x,0,-.7,0)}let j={rope:f,flagDart:!1,pressureWobble:0,circlePhase:0,...{onStamp(m){f.injectImpulse(m.x,0,-.9,0),E.dustBurst({x:m.x,y:f.yAt(m.x),z:0})},onLungeHit(m){Vt(m,!1)},onSlash(m,P){let U=m.bladeTipWorld();tt(m)==="A"?(E.emberBurst(U),P==="up"&&(T=Math.max(T,.19))):(E.ghost(U),E.ghostTile(U)),(P==="crescent"||P==="down")&&Vt(m,!0),f.injectImpulse(m.x,0,-.7,0)},onWhoosh(m){E.ghost(m.bladeTipWorld())},onTaunt(m){E.lungeSparks(m.bladeTipWorld())},onTumble(m){E.dustBurst({x:m.x,y:f.yAt(m.x),z:0})},onHitImpact(m){E.dustBurst({x:m.x,y:f.yAt(m.x),z:0}),E.furTuft({x:m.x,y:m.root.position.y+.5,z:.1}),Bt(.08,.05)},onKnockback(m,P){m.x=it(m.x+P*.4),f.injectImpulse(m.x,0,-1.1,0),E.dustBurst({x:m.x,y:f.yAt(m.x),z:0})},onLockSparks(m){let P=m.bladeMidWorld();E.clashBurst(P),Bt(.09,.06)}}};A.onClash=()=>{let m=K(y,g,z);E.clashBurst(m),E.clashBurst(m),Bt(.16,.13),T=Math.max(T,.12),v.moonPulse=1,O=Math.min(1,O+.5)};let q={on:t.demo!==!1,t:0},rt=67e3,et=0,At=!0,Qt=0,Ut=[],Wt={armed:!1,ax:1.1,bx:-1.1},Jt={setPressure(m){q.on=!1,Qt=Be.clamp(m,-1,1)*.16,A.setPressure(m)},setPrice(m){if(!m||m<=0)return;q.on=!1;let P=rt;rt=m,_.tickDir(m>P?1:-1),_.setPrice(m),A.setPrice(m),_.setChange24h(Be.clamp(A.trendM()*8,-99,99))},setChange24hText(m){_.setChange24hText(m)},chart:b,onTradeCallout(m){return Ut.push(m),()=>{let P=Ut.indexOf(m);P>=0&&Ut.splice(P,1)}},tradeCallout(m){m&&m.notional>=25e4?(v.moonPulse=1,O=Math.min(1,O+.35)):m&&m.notional>=1e5&&(v.moonPulse=Math.max(v.moonPulse,.6));for(let P=0;P<Ut.length;P++)try{Ut[P](m)}catch{}},dispose(){At=!1,cancelAnimationFrame(et),window.removeEventListener("resize",jt),window.removeEventListener("pointermove",R),e.dispose(),e.domElement.parentElement&&e.domElement.parentElement.removeChild(e.domElement)}};function Ht(){let m=i.clientWidth||1280,P=i.clientHeight||720;a.aspect=m/P,a.updateProjectionMatrix(),e.setSize(m,P)}function jt(){Ht()}Ht(),window.addEventListener("resize",jt);let ue=[1,.85,.72,.6,.5],ft={on:t.governor!==!1,base:s,step:0,ratio:s,changes:0,fails:0,window:16,slowMs:20,fastMs:13.5,buf:[],cooldown:0,hold:0,med:0,pending:0,preMed:0,lock:0};function de(m){ft.step=Math.max(0,Math.min(ue.length-1,m)),ft.ratio=ft.base*ue[ft.step],e.setPixelRatio(ft.ratio),Ht(),ft.buf.length=0}function ve(m){if(!ft.on||(ft.buf.push(m),ft.buf.length<ft.window))return;let P=ft.buf.slice().sort((U,W)=>U-W);if(ft.med=P[P.length>>1],ft.buf.length=0,ft.pending>0){--ft.pending===0&&(ft.med>ft.preMed*.92?(ft.step>0&&de(ft.step-1),++ft.fails>=2&&(ft.lock=1)):ft.fails=0);return}if(ft.lock){ft.med<ft.fastMs?++ft.lock>8&&(ft.lock=0,ft.fails=0,ft.cooldown=2):ft.lock>8&&(ft.lock=1);return}if(ft.cooldown>0){ft.cooldown--;return}ft.med>ft.slowMs&&ft.step<ue.length-1?(ft.preMed=ft.med,ft.pending=3,ft.hold=0,de(ft.step+1),ft.changes++):ft.med<ft.fastMs&&ft.step>0?++ft.hold>=3&&(de(ft.step-1),ft.cooldown=5,ft.changes++,ft.hold=0):ft.hold=0}let N=0,Ot=0,ne=performance.now();function w(){if(!At)return;et=requestAnimationFrame(w);let m=performance.now(),P=Math.min((m-ne)/1e3,.05);ne=m;let U=P;if(T>0&&(T-=P,U=P*.35),Ot+=U,N++,q.on&&!Wt.armed){q.t+=U;let xt=Math.sin(q.t*.4)*.8+Math.sin(q.t*.13)*.35+Math.sin(q.t*1.7)*.12;if(A.setPressure(xt),N%30===0){let _t=(Math.sin(q.t*.05)+Math.sin(q.t*.021+2))*30;rt+=_t+(Math.random()-.5)*8,_.tickDir(_t>0?1:-1),_.setPrice(rt),A.setPrice(rt),_.setChange24h(2.4+Math.sin(q.t*.05)*3)}}Wt.armed&&(A.pressure=0,y.setState("IDLE"),g.setState("IDLE"),y.x=Wt.ax,g.x=Wt.bx),j.flagDart=!1,j.circlePhase=A.circlePhase,j.pressureWobble+=(Qt-j.pressureWobble)*Math.min(1,U*5),f.clearLoads(),f.setLoad(y.x+y.pose.xOff,1),f.setLoad(g.x+g.pose.xOff,1),f.step(U),A.update(U),y.update(U,j),g.update(U,j);{let xt=y.x+y.pose.xOff,_t=g.x+g.pose.xOff,kt=($,lt)=>{y.x+=$*lt,g.x-=$*lt,y.root.position.x+=$*lt,g.root.position.x-=$*lt},F=Math.abs(xt-_t);F<ae.minBodyGap&&kt(xt>=_t?1:-1,(ae.minBodyGap-F)/2);let pt=ae.minHeadCentre*ae.minHeadCentre;nt&&nt.checks++;for(let $=0;$<3;$++){let lt=y.x+y.pose.xOff>=g.x+g.pose.xOff?1:-1;y.headCentreWorld(H),g.headCentreWorld(I);let ut=H.x-I.x,st=H.y-I.y,Rt=H.z-I.z,bt=Math.sqrt(ut*ut+st*st+Rt*Rt);if(nt&&bt<nt.worst&&(nt.worst=bt),bt>=ae.minHeadCentre)break;let oe=Math.sqrt(Math.max(0,pt-(st*st+Rt*Rt)))-Math.abs(ut);if(oe<=0)break;kt(lt,Math.min(oe/2,.5)),nt&&nt.fixes++,y.root.updateMatrixWorld(!0),g.root.updateMatrixWorld(!0)}if(nt){y.headCentreWorld(H),g.headCentreWorld(I);let $=H.distanceTo(I);$<nt.worstOut&&(nt.worstOut=$),nt.post={hc:+$.toFixed(4),n:N,gap:+Math.abs(y.x+y.pose.xOff-(g.x+g.pose.xOff)).toFixed(3)}}}f.updateVisual(),_.update(U,f);let W=y.state.name==="BLADE_LOCK"||y.state.name==="CLASH"||g.state.name==="BLADE_LOCK"||g.state.name==="CLASH",at=A.brawlIntensity();if(O+=(at-O)*Math.min(1,U/.8),W&&N%3===0){let xt=K(y,g,z);E.clashBurst(xt),E.emberBurst(xt)}h.position.set(y.x+1.5,2.6,-1.3),d.position.set(g.x-1.5,2.6,-1.3);let ht=p.userData.pennants;if(ht)for(let xt of["L","R"]){let _t=ht[xt];_t.rotation.y=Math.sin(Ot*1.7+(xt==="L"?0:1.5))*.25,_t.rotation.x=Math.sin(Ot*2.3+(xt==="L"?0:1))*.06,_t.position.y=ae.ropeY+1.05+Math.sin(Ot*2.1+(xt==="L"?0:.6))*.03}zu(p,Ot),E.update(U),M.update(U,A.pressure,O),v.moonPulse=Math.max(0,v.moonPulse-U*.55);let V=xt=>Math.abs(xt)<.07?0:(xt-Math.sign(xt)*.07)/.93;v.mouse.x+=(V(v.mouseT.x)-v.mouse.x)*Math.min(1,U*1.8),v.mouse.y+=(V(v.mouseT.y)-v.mouse.y)*Math.min(1,U*1.8),v.stars&&v.stars.update(Ot),v.clouds&&v.clouds.update(Ot,U),v.shoot&&v.shoot.update(Ot,U,v.moonPulse),v.fireflies&&v.fireflies.update(Ot),v.water&&v.water.update(Ot,U),v.embers&&v.embers.update(Ot);let Q=p.userData.moon;Q&&(Q.material.color.setScalar(1+v.moonPulse*.34+Math.sin(Ot*.8)*.04),Q.scale.setScalar(1+v.moonPulse*.06));let dt=Math.max(x.t,0);dt>0?x.t-=P:x.amp=0;let St=dt/.16*x.amp,ct=(y.x+g.x)*.5;C+=(ct-C)*Math.min(1,U*3.2),D+=(at-D)*Math.min(1,U*1.4);let ot=Math.sin(Ot*.09)*.18;a.position.set(C+ot+(Math.random()-.5)*St+v.mouse.x*.5,2.55+Math.sin(Ot*.06)*.1+(Math.random()-.5)*St-v.mouse.y*.3+D*.16,6.8-D*.55),a.lookAt(C*.9,3.15-D*.1,0),e.render(r,a),ve(P*1e3)}return w(),t.debug&&(window.__duelDebug={rope:f,flag:_,director:A,catA:y,catB:g,arena:p,vfx:E,camera:a,renderer:e,crowd:M,hooksTrade:Ut,gov:ft,contact:nt,skyChart:b,quality:()=>({ratio:ft.ratio,base:ft.base,step:ft.step,med:ft.med,changes:ft.changes,on:ft.on,fails:ft.fails,lock:ft.lock}),heat:()=>O,freeze:(m,P=1.1,U=-1.1)=>{Wt.armed=!!m,Wt.ax=P,Wt.bx=U,q.on=!1}}),Jt}function ed(i,t,e={}){let n=typeof e.onCallout=="function"?e.onCallout:null,s=typeof e.onStatus=="function"?e.onStatus:null,r=typeof e.onState=="function"?e.onState:null,o=5e4,a=i.onTrade(h=>{h.notional>=o&&t.tradeCallout&&t.tradeCallout({side:h.side,qty:h.qty,notional:h.notional,price:h.price,ts:h.ts})}),c=i.onChange(h=>{if(typeof h.pressure=="number"&&isFinite(h.pressure)&&t.setPressure(h.pressure),h.price&&t.setPrice(h.price),typeof h.change24hPct=="number"&&isFinite(h.change24hPct)){let d=h.change24hPct>=0?"+":"";t.setChange24hText(`${d}${h.change24hPct.toFixed(2)}% 24h`)}r&&r(h)}),l=i.onStatus(h=>{s&&s(h)});return function(){c(),l(),a()}}var ui=new URLSearchParams(location.search),ze=i=>document.getElementById(i);function k_(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}k_()||(ze("nogl").style.display="flex",ze("status-mode").textContent="NO WEBGL",ze("status-dot").className="");var G_=matchMedia("(pointer: coarse)").matches||innerWidth<640,Jo=td(ze("duel-scene"),{demo:!0,debug:!0,vfxScale:G_?.4:ui.get("nofx")?.2:1,res:ui.get("res")?Number(ui.get("res")):void 0,governor:ui.get("gov")!=="off"&&!ui.get("res"),skyVariant:ui.get("sky")||"slab"}),Nr=ze("price"),nd=ze("chg24h"),V_=ze("tps"),W_=ze("meter-buy"),X_=ze("meter-sell"),Y_=ze("meter-buy-pct"),q_=ze("meter-sell-pct"),Z_=ze("meter-duel"),J_=ze("meter-duel-text"),$_=ze("status-dot"),K_=ze("status-mode"),Lc=ze("callouts"),Dc={buy:{el:ze("tag-buy"),state:ze("state-buy"),mom:ze("mom-buy"),last:""},sell:{el:ze("tag-sell"),state:ze("state-sell"),mom:ze("mom-sell"),last:""}},$o=Jo.chart;function od(i){return i==null||!isFinite(i)?"\u2014":i>=1e6?(i/1e6).toFixed(1)+"M":i>=1e3?(i/1e3).toFixed(1)+"K":i.toFixed(1)}var Zo=null,id=0;function j_(i){i!=null&&Zo!=null&&i!==Zo&&(Nr.classList.remove("tick-up","tick-down"),Nr.offsetWidth,Nr.classList.add(i>Zo?"tick-up":"tick-down"),clearTimeout(id),id=setTimeout(()=>Nr.classList.remove("tick-up","tick-down"),600)),i!=null&&(Zo=i)}var Q_=5e4,tx=25e4,ex=14;function ld(i){if(!i||i.notional<Q_)return;Lc.childElementCount>=ex&&Lc.firstElementChild.remove();let t=i.notional>=tx,e=i.side==="buy";$o.trade(i);let n=document.createElement("div");n.className=`callout ${i.side}${t?" whale":""}`;let s=document.createElement("span");s.className="head";let r=document.createElement("span");r.className="arr",r.textContent=e?"\u25B2":"\u25BC";let o=document.createElement("span");o.textContent=`${e?"+BUY":"-SELL"} $${od(i.notional)}`,s.appendChild(r),s.appendChild(o);let a=document.createElement("span");a.className="qty",a.textContent=`${i.qty>=1?i.qty.toFixed(2):i.qty.toFixed(4)} BTC @ ${i.price.toLocaleString("en-US",{maximumFractionDigits:0})}`,n.appendChild(s),n.appendChild(a);let c=e?62:22;n.style.left=c+Math.random()*14+"vw",n.style.top=26+Math.random()*36+"vh",Lc.appendChild(n);let l=n.getBoundingClientRect();l.right>innerWidth-12&&(n.style.left=Math.max(12,innerWidth-l.width-12)+"px"),l.left<12&&(n.style.left="12px"),l.bottom>innerHeight-12&&(n.style.top=Math.max(12,innerHeight-l.height-12)+"px"),setTimeout(()=>n.remove(),t?3e3:2600)}Jo.onTradeCallout(ld);var nx=ui.get("mode")||"auto",cd={mode:nx,emitIntervalMs:250};ui.get("seed")&&(cd.demoSeed=Number(ui.get("seed"))||0);var is=new window.BtcTradeFeed(cd);function ix(i){let t=i.mode==="demo"||i.status==="demo";$_.className=t?"demo":i.status==="open"?"live":i.status||"";let e=!t&&i.status==="open"&&i.providerLabel?" \xB7 "+i.providerLabel.toUpperCase():"",s=t?"SIMULATION":{open:"LIVE",connecting:"CONNECTING",backoff:"RECONNECTING",stopped:"OFFLINE"}[i.status]||(i.status||"").toUpperCase();K_.textContent=s+e,$o.notifyStatus(i)}var sx=ed(is,Jo,{onCallout:ld,onStatus:ix,onState:hd}),rx={IDLE:"EN GARDE",RECOVER:"RECOVERING",LUNGE:"LUNGE!",RUSH:"RUSH!",SLASH_UP:"SLASH UP!",SLASH_SPIN:"SLASH SPIN!",HIT:"HIT!",STUMBLE:"STAGGERS!",BLADE_LOCK:"BLADE LOCK",CLASH:"CLASH!",FREEZE:"EN GARDE",TAUNT:"TAUNTS!",RIPOSTE:"RIPOSTE!",PARRY_HOP:"PARRY!"};function ax(i){return i==="LUNGE"||i==="RUSH"||i==="RIPOSTE"?"lunge":i==="BLADE_LOCK"?"lock":i==="CLASH"?"clash":i==="HIT"||i==="STUMBLE"?"hit":""}var ox=180,sd=new Set(["CLASH","HIT","BLADE_LOCK"]),lx={RECOVER:.18,IDLE:.3};function rd(i,t){let e=Dc[i];if(!e)return;let n=t.name;if(n===e.last)return;let s=sd.has(n);if(!s&&t.t<(lx[n]||0))return;let r=performance.now();if(!s&&!sd.has(e.last)&&r-(e.at||0)<ox)return;e.at=r,e.last=n;let o=ax(n);e.el.dataset.act=o,e.state.textContent=rx[n]||n}function hd(i){if($o.update(is.candles(),i),j_(i.price),Nr.textContent=i.price?i.price.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):"connecting\u2026",typeof i.change24hPct=="number"&&isFinite(i.change24hPct)){let s=i.change24hPct>=0?"+":"";nd.textContent=`${s}${i.change24hPct.toFixed(2)}%  ($${s}${od(Math.abs(i.change24hAbs||0))})`,nd.className=i.change24hPct>=0?"up":"down"}V_.textContent=isFinite(i.tps)?Math.round(i.tps):"0";let t=i.pressure||0,e=t>0?t*50:0,n=t<0?-t*50:0;W_.style.width=e+"%",X_.style.width=n+"%",Y_.textContent=e>.5?Math.round(t*100)+"%":"\u2014",q_.textContent=n>.5?Math.round(-t*100)+"%":"\u2014",Dc.buy.mom.style.width=Math.max(4,e*2)+"%",Dc.sell.mom.style.width=Math.max(4,n*2)+"%"}var ad="";setInterval(()=>{try{let i=window.__duelDebug;if(!i||!i.catA||!i.catB)return;let t=i.catA.state.name,e=i.catB.state.name;rd("buy",i.catA.state),rd("sell",i.catB.state);let n=t+"|"+e;if(n===ad)return;ad=n;let s=t!=="IDLE"||e!=="IDLE";Z_.classList.toggle("act",s),J_.textContent=t==="BLADE_LOCK"||e==="BLADE_LOCK"?"BLADE LOCK":t==="CLASH"||e==="CLASH"?"CLASH!":t==="IDLE"&&e==="IDLE"?"EN GARDE":"CROSSED SWORDS"}catch{}},125);is.start();document.addEventListener("visibilitychange",()=>{document.hidden?is.stop():is.state().status==="stopped"&&is.start()});window.__duelPage={feed:is,scene:Jo,unwire:sx,handleState:hd,chart:$o};})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
