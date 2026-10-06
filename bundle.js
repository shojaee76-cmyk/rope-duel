(()=>{var Kh=0,pc=1,jh=2;var $r=1,Qh=2,Qs=3,Ji=0,yn=1,De=2,di=0,Ri=1,In=2,mc=3,gc=4,tu=5;var ps=100,eu=101,nu=102,iu=103,su=104,ru=200,au=201,ou=202,lu=203,_c=204,xc=205,cu=206,hu=207,uu=208,du=209,fu=210,pu=211,mu=212,gu=213,_u=214,Ha=0,ka=1,Ga=2,Gs=3,Va=4,Wa=5,Xa=6,Ya=7,yc=0,xu=1,yu=2,Kn=0,vc=1,Sc=2,Mc=3,Kr=4,bc=5,Ec=6,Tc=7;var wc=300,$i=301,ms=302,Mo=303,bo=304,jr=306,ai=1e3,ri=1001,qa=1002,gn=1003,vu=1004;var Qr=1005;var Ze=1006,Eo=1007;var Ln=1008;var Dn=1009,Ac=1010,Rc=1011,tr=1012,To=1013,jn=1014,Qn=1015,ti=1016,wo=1017,Ao=1018,er=1020,Cc=35902,Pc=35899,Ic=1021,Lc=1022,Gn=1023,oi=1026,Ki=1027,Dc=1028,Ro=1029,ji=1030,Co=1031;var Po=1033,ta=33776,ea=33777,na=33778,ia=33779,Io=35840,Lo=35841,Do=35842,Uo=35843,No=36196,Fo=37492,Bo=37496,Oo=37488,zo=37489,sa=37490,Ho=37491,ko=37808,Go=37809,Vo=37810,Wo=37811,Xo=37812,Yo=37813,qo=37814,Zo=37815,Jo=37816,$o=37817,Ko=37818,jo=37819,Qo=37820,tl=37821,el=36492,nl=36494,il=36495,sl=36283,rl=36284,ra=36285,al=36286;var Sr=2300,Za=2301,Oa=2302,ec=2303,nc=2400,ic=2401,sc=2402;var Su=3200;var ol=0,Mu=1,Ci="",Ye="srgb",Mr="srgb-linear",br="linear",Te="srgb";var za=7680;var bu=519,Eu=512,Tu=513,wu=514,ll=515,Au=516,Ru=517,cl=518,Cu=519,Pu=35044,gs=35048;var Uc="300 es",$n=2e3,Vs=2001;function ef(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function nf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Iu(){let i=Er("canvas");return i.style.display="block",i}var Sh={},Ws=null;function Nc(...i){let t="THREE."+i.shift();Ws?Ws("log",t,...i):console.log(t,...i)}function Lu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Qt(...i){i=Lu(i);let t="THREE."+i.shift();if(Ws)Ws("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function te(...i){i=Lu(i);let t="THREE."+i.shift();if(Ws)Ws("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function cs(...i){let t=i.join(" ");t in Sh||(Sh[t]=!0,Qt(...i))}function Du(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Uu={[Ha]:ka,[Ga]:Xa,[Va]:Ya,[Gs]:Wa,[ka]:Ha,[Xa]:Ga,[Ya]:Va,[Wa]:Gs},li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Mh=1234567,_r=Math.PI/180,hs=180/Math.PI;function _s(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[i&255]+Mn[i>>8&255]+Mn[i>>16&255]+Mn[i>>24&255]+"-"+Mn[t&255]+Mn[t>>8&255]+"-"+Mn[t>>16&15|64]+Mn[t>>24&255]+"-"+Mn[e&63|128]+Mn[e>>8&255]+"-"+Mn[e>>16&255]+Mn[e>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function Fc(i,t){return(i%t+t)%t}function sf(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function rf(i,t,e){return i!==t?(e-i)/(t-i):0}function xr(i,t,e){return(1-e)*i+e*t}function af(i,t,e,n){return xr(i,t,1-Math.exp(-e*n))}function of(i,t=1){return t-Math.abs(Fc(i,t*2)-t)}function lf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function cf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function hf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function uf(i,t){return i+Math.random()*(t-i)}function df(i){return i*(.5-Math.random())}function ff(i){i!==void 0&&(Mh=i);let t=Mh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function pf(i){return i*_r}function mf(i){return i*hs}function gf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function _f(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function yf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:Qt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Hs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function An(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var We={DEG2RAD:_r,RAD2DEG:hs,generateUUID:_s,clamp:he,euclideanModulo:Fc,mapLinear:sf,inverseLerp:rf,lerp:xr,damp:af,pingpong:of,smoothstep:lf,smootherstep:cf,randInt:hf,randFloat:uf,randFloatSpread:df,seededRandom:ff,degToRad:pf,radToDeg:mf,isPowerOfTwo:gf,ceilPowerOfTwo:_f,floorPowerOfTwo:xf,setQuaternionFromProperEuler:yf,normalize:An,denormalize:Hs},Gc=class Gc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gc.prototype.isVector2=!0;var Dt=Gc,ci=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(d!==x||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*x;m<0&&(u=-u,f=-f,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let M=Math.acos(m),w=Math.sin(M);p=Math.sin(p*M)/w,a=Math.sin(a*M)/w,c=c*p+u*a,l=l*p+f*a,h=h*p+g*a,d=d*p+x*a}else{c=c*p+u*a,l=l*p+f*a,h=h*p+g*a,d=d*p+x*a;let M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-a*f,t[e+2]=l*g+h*f+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Vc=class Vc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Il.copy(this).projectOnVector(t),this.sub(Il)}reflect(t){return this.sub(Il.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vc.prototype.isVector3=!0;var U=Vc,Il=new U,bh=new ci,Wc=class Wc{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],M=s[1],w=s[4],v=s[7],b=s[2],T=s[5],P=s[8];return r[0]=o*x+a*M+c*b,r[3]=o*m+a*w+c*T,r[6]=o*p+a*v+c*P,r[1]=l*x+h*M+d*b,r[4]=l*m+h*w+d*T,r[7]=l*p+h*v+d*P,r[2]=u*x+f*M+g*b,r[5]=u*m+f*w+g*T,r[8]=u*p+f*v+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ll.makeScale(t,e)),this}rotate(t){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ll.makeRotation(-t)),this}translate(t,e){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ll.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Wc.prototype.isMatrix3=!0;var ie=Wc,Ll=new ie,Eh=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Th=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vf(){let i={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Te&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Te&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ci?br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mr]:{primaries:t,whitePoint:n,transfer:br,toXYZ:Eh,fromXYZ:Th,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ye},outputColorSpaceConfig:{drawingBufferColorSpace:Ye}},[Ye]:{primaries:t,whitePoint:n,transfer:Te,toXYZ:Eh,fromXYZ:Th,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ye}}}),i}var xe=vf();function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ks(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var As,Ja=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{As===void 0&&(As=Er("canvas")),As.width=t.width,As.height=t.height;let s=As.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=As}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Er("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return Qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Sf=0,Xs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=_s(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Dl(s[o].image)):r.push(Dl(s[o]))}else r=Dl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Dl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ja.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Qt("Texture: Unable to serialize Texture."),{})}var Mf=0,Ul=new U,Rn=class i extends li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ri,s=ri,r=Ze,o=Ln,a=Gn,c=Dn,l=i.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=_s(),this.name="",this.source=new Xs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ul).x}get height(){return this.source.getSize(Ul).y}get depth(){return this.source.getSize(Ul).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ai:t.x=t.x-Math.floor(t.x);break;case ri:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ai:t.y=t.y-Math.floor(t.y);break;case ri:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=wc;Rn.DEFAULT_ANISOTROPY=1;var Xc=class Xc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,v=(f+1)/2,b=(p+1)/2,T=(h+u)/4,P=(d+x)/4,y=(g+m)/4;return w>v&&w>b?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=P/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=P/r,s=y/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xc.prototype.isVector4=!0;var Ge=Xc,$a=class extends li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Rn(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Xs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Pn=class extends $a{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Tr=class extends Rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ka=class extends Rn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=gn,this.minFilter=gn,this.wrapR=ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var So=class So{constructor(t,e,n,s,r,o,a,c,l,h,d,u,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,u,f,g,x,m)}set(t,e,n,s,r,o,a,c,l,h,d,u,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new So().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Rs.setFromMatrixColumn(t,0).length(),r=1/Rs.setFromMatrixColumn(t,1).length(),o=1/Rs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-x*l,e[9]=-a*c,e[2]=x-u*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,g=l*h,x=l*d;e[0]=u+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,g=l*h,x=l*d;e[0]=u-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+x,e[1]=c*d,e[5]=x*l+u,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bf,t,Ef)}lookAt(t,e,n){let s=this.elements;return Un.subVectors(t,e),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Fi.crossVectors(n,Un),Fi.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Fi.crossVectors(n,Un)),Fi.normalize(),ma.crossVectors(Un,Fi),s[0]=Fi.x,s[4]=ma.x,s[8]=Un.x,s[1]=Fi.y,s[5]=ma.y,s[9]=Un.y,s[2]=Fi.z,s[6]=ma.z,s[10]=Un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],w=n[7],v=n[11],b=n[15],T=s[0],P=s[4],y=s[8],E=s[12],R=s[1],C=s[5],I=s[9],B=s[13],D=s[2],O=s[6],K=s[10],Y=s[14],rt=s[3],$=s[7],nt=s[11],X=s[15];return r[0]=o*T+a*R+c*D+l*rt,r[4]=o*P+a*C+c*O+l*$,r[8]=o*y+a*I+c*K+l*nt,r[12]=o*E+a*B+c*Y+l*X,r[1]=h*T+d*R+u*D+f*rt,r[5]=h*P+d*C+u*O+f*$,r[9]=h*y+d*I+u*K+f*nt,r[13]=h*E+d*B+u*Y+f*X,r[2]=g*T+x*R+m*D+p*rt,r[6]=g*P+x*C+m*O+p*$,r[10]=g*y+x*I+m*K+p*nt,r[14]=g*E+x*B+m*Y+p*X,r[3]=M*T+w*R+v*D+b*rt,r[7]=M*P+w*C+v*O+b*$,r[11]=M*y+w*I+v*K+b*nt,r[15]=M*E+w*B+v*Y+b*X,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15],M=c*f-l*u,w=a*f-l*d,v=a*u-c*d,b=o*f-l*h,T=o*u-c*h,P=o*d-a*h;return e*(x*M-m*w+p*v)-n*(g*M-m*b+p*T)+s*(g*w-x*b+p*P)-r*(g*v-x*T+m*P)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],M=e*a-n*o,w=e*c-s*o,v=e*l-r*o,b=n*c-s*a,T=n*l-r*a,P=s*l-r*c,y=h*x-d*g,E=h*m-u*g,R=h*p-f*g,C=d*m-u*x,I=d*p-f*x,B=u*p-f*m,D=M*B-w*I+v*C+b*R-T*E+P*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/D;return t[0]=(a*B-c*I+l*C)*O,t[1]=(s*I-n*B-r*C)*O,t[2]=(x*P-m*T+p*b)*O,t[3]=(u*T-d*P-f*b)*O,t[4]=(c*R-o*B-l*E)*O,t[5]=(e*B-s*R+r*E)*O,t[6]=(m*v-g*P-p*w)*O,t[7]=(h*P-u*v+f*w)*O,t[8]=(o*I-a*R+l*y)*O,t[9]=(n*R-e*I-r*y)*O,t[10]=(g*T-x*v+p*M)*O,t[11]=(d*v-h*T-f*M)*O,t[12]=(a*E-o*C-c*y)*O,t[13]=(e*C-n*E+s*y)*O,t[14]=(x*w-g*b-m*M)*O,t[15]=(h*b-d*w+u*M)*O,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,x=o*h,m=o*d,p=a*d,M=c*l,w=c*h,v=c*d,b=n.x,T=n.y,P=n.z;return s[0]=(1-(x+p))*b,s[1]=(f+v)*b,s[2]=(g-w)*b,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(u+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+w)*P,s[9]=(m-M)*P,s[10]=(1-(u+x))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Rs.set(s[0],s[1],s[2]).length(),a=Rs.set(s[4],s[5],s[6]).length(),c=Rs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Yn.copy(this);let l=1/o,h=1/a,d=1/c;return Yn.elements[0]*=l,Yn.elements[1]*=l,Yn.elements[2]*=l,Yn.elements[4]*=h,Yn.elements[5]*=h,Yn.elements[6]*=h,Yn.elements[8]*=d,Yn.elements[9]*=d,Yn.elements[10]*=d,e.setFromRotationMatrix(Yn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=$n,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===$n)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Vs)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=$n,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===$n)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Vs)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};So.prototype.isMatrix4=!0;var ke=So,Rs=new U,Yn=new ke,bf=new U(0,0,0),Ef=new U(1,1,1),Fi=new U,ma=new U,Un=new U,wh=new ke,Ah=new ci,Ei=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(he(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return wh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ah.setFromEuler(this),this.setFromQuaternion(Ah,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ei.DEFAULT_ORDER="XYZ";var wr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tf=0,Rh=new U,Cs=new ci,xi=new ke,ga=new U,dr=new U,wf=new U,Af=new ci,Ch=new U(1,0,0),Ph=new U(0,1,0),Ih=new U(0,0,1),Lh={type:"added"},Rf={type:"removed"},Ps={type:"childadded",child:null},Nl={type:"childremoved",child:null},_n=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tf++}),this.uuid=_s(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new Ei,n=new ci,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ke},normalMatrix:{value:new ie}}),this.matrix=new ke,this.matrixWorld=new ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(Ch,t)}rotateY(t){return this.rotateOnAxis(Ph,t)}rotateZ(t){return this.rotateOnAxis(Ih,t)}translateOnAxis(t,e){return Rh.copy(t).applyQuaternion(this.quaternion),this.position.add(Rh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ch,t)}translateY(t){return this.translateOnAxis(Ph,t)}translateZ(t){return this.translateOnAxis(Ih,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ga.copy(t):ga.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(dr,ga,this.up):xi.lookAt(ga,dr,this.up),this.quaternion.setFromRotationMatrix(xi),s&&(xi.extractRotation(s.matrixWorld),Cs.setFromRotationMatrix(xi),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(te("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Lh),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null):te("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Rf),Nl.child=t,this.dispatchEvent(Nl),Nl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xi.multiply(t.parent.matrixWorld)),t.applyMatrix4(xi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Lh),Ps.child=t,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Af,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};_n.DEFAULT_UP=new U(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ue=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cf={type:"move"},Ys=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cf)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Fl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var ee=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=xe.workingColorSpace){if(t=Fc(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Fl(o,r,t+1/3),this.g=Fl(o,r,t),this.b=Fl(o,r,t-1/3)}return xe.colorSpaceToWorking(this,s),this}setStyle(t,e=Ye){function n(r){r!==void 0&&parseFloat(r)<1&&Qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ye){let n=Nu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ye){return xe.workingToColorSpace(bn.copy(this),t),Math.round(he(bn.r*255,0,255))*65536+Math.round(he(bn.g*255,0,255))*256+Math.round(he(bn.b*255,0,255))}getHexString(t=Ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.workingToColorSpace(bn.copy(this),e);let n=bn.r,s=bn.g,r=bn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=xe.workingColorSpace){return xe.workingToColorSpace(bn.copy(this),e),t.r=bn.r,t.g=bn.g,t.b=bn.b,t}getStyle(t=Ye){xe.workingToColorSpace(bn.copy(this),t);let e=bn.r,n=bn.g,s=bn.b;return t!==Ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Bi),this.setHSL(Bi.h+t,Bi.s+e,Bi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bi),t.getHSL(_a);let n=xr(Bi.h,_a.h,e),s=xr(Bi.s,_a.s,e),r=xr(Bi.l,_a.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},bn=new ee;ee.NAMES=Nu;var Ar=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new ee(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rr=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},qn=new U,yi=new U,Bl=new U,vi=new U,Is=new U,Ls=new U,Dh=new U,Ol=new U,zl=new U,Hl=new U,kl=new Ge,Gl=new Ge,Vl=new Ge,ki=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),qn.subVectors(t,e),s.cross(qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){qn.subVectors(s,e),yi.subVectors(n,e),Bl.subVectors(t,e);let o=qn.dot(qn),a=qn.dot(yi),c=qn.dot(Bl),l=yi.dot(yi),h=yi.dot(Bl),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,vi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vi.x),c.addScaledVector(o,vi.y),c.addScaledVector(a,vi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return kl.setScalar(0),Gl.setScalar(0),Vl.setScalar(0),kl.fromBufferAttribute(t,e),Gl.fromBufferAttribute(t,n),Vl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(kl,r.x),o.addScaledVector(Gl,r.y),o.addScaledVector(Vl,r.z),o}static isFrontFacing(t,e,n,s){return qn.subVectors(n,e),yi.subVectors(t,e),qn.cross(yi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return qn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),qn.cross(yi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Is.subVectors(s,n),Ls.subVectors(r,n),Ol.subVectors(t,n);let c=Is.dot(Ol),l=Ls.dot(Ol);if(c<=0&&l<=0)return e.copy(n);zl.subVectors(t,s);let h=Is.dot(zl),d=Ls.dot(zl);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Is,o);Hl.subVectors(t,r);let f=Is.dot(Hl),g=Ls.dot(Hl);if(g>=0&&f<=g)return e.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ls,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Dh.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Dh,a);let p=1/(m+x+u);return o=x*p,a=u*p,e.copy(n).addScaledVector(Is,o).addScaledVector(Ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Gi=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(t.matrixWorld),this.expandByPoint(Zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xa.copy(n.boundingBox)),xa.applyMatrix4(t.matrixWorld),this.union(xa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zn),Zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),ya.subVectors(this.max,fr),Ds.subVectors(t.a,fr),Us.subVectors(t.b,fr),Ns.subVectors(t.c,fr),Oi.subVectors(Us,Ds),zi.subVectors(Ns,Us),ss.subVectors(Ds,Ns);let e=[0,-Oi.z,Oi.y,0,-zi.z,zi.y,0,-ss.z,ss.y,Oi.z,0,-Oi.x,zi.z,0,-zi.x,ss.z,0,-ss.x,-Oi.y,Oi.x,0,-zi.y,zi.x,0,-ss.y,ss.x,0];return!Wl(e,Ds,Us,Ns,ya)||(e=[1,0,0,0,1,0,0,0,1],!Wl(e,Ds,Us,Ns,ya))?!1:(va.crossVectors(Oi,zi),e=[va.x,va.y,va.z],Wl(e,Ds,Us,Ns,ya))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Si),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Si=[new U,new U,new U,new U,new U,new U,new U,new U],Zn=new U,xa=new Gi,Ds=new U,Us=new U,Ns=new U,Oi=new U,zi=new U,ss=new U,fr=new U,ya=new U,va=new U,rs=new U;function Wl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){rs.fromArray(i,r);let a=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),c=t.dot(rs),l=e.dot(rs),h=n.dot(rs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var ln=new U,Sa=new Dt,Pf=0,Fe=class extends li{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pu,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Sa.fromBufferAttribute(this,e),Sa.applyMatrix3(t),this.setXY(e,Sa.x,Sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix3(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=An(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=An(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),n=An(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),n=An(n,this.array),s=An(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=An(e,this.array),n=An(n,this.array),s=An(s,this.array),r=An(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Cr=class extends Fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Pr=class extends Fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends Fe{constructor(t,e,n){super(new Float32Array(t),e,n)}},If=new Gi,pr=new U,Xl=new U,Ti=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):If.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);let e=pr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(pr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(Xl)),this.expandByPoint(pr.copy(t.center).sub(Xl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Lf=0,kn=new ke,Yl=new _n,Fs=new U,Nn=new Gi,mr=new Gi,pn=new U,Ee=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=_s(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ef(t)?Pr:Cr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ie().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return kn.makeRotationFromQuaternion(t),this.applyMatrix4(kn),this}rotateX(t){return kn.makeRotationX(t),this.applyMatrix4(kn),this}rotateY(t){return kn.makeRotationY(t),this.applyMatrix4(kn),this}rotateZ(t){return kn.makeRotationZ(t),this.applyMatrix4(kn),this}translate(t,e,n){return kn.makeTranslation(t,e,n),this.applyMatrix4(kn),this}scale(t,e,n){return kn.makeScale(t,e,n),this.applyMatrix4(kn),this}lookAt(t){return Yl.lookAt(t),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&te('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){te("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(pn.addVectors(Nn.min,mr.min),Nn.expandByPoint(pn),pn.addVectors(Nn.max,mr.max),Nn.expandByPoint(pn)):(Nn.expandByPoint(mr.min),Nn.expandByPoint(mr.max))}Nn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)pn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(pn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)pn.fromBufferAttribute(a,l),c&&(Fs.fromBufferAttribute(t,l),pn.add(Fs)),s=Math.max(s,n.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&te('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){te("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Fe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let y=0;y<n.count;y++)a[y]=new U,c[y]=new U;let l=new U,h=new U,d=new U,u=new Dt,f=new Dt,g=new Dt,x=new U,m=new U;function p(y,E,R){l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,R),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,R),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(C),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[y].add(x),a[E].add(x),a[R].add(x),c[y].add(m),c[E].add(m),c[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let y=0,E=M.length;y<E;++y){let R=M[y],C=R.start,I=R.count;for(let B=C,D=C+I;B<D;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let w=new U,v=new U,b=new U,T=new U;function P(y){b.fromBufferAttribute(s,y),T.copy(b);let E=a[y];w.copy(E),w.sub(b.multiplyScalar(b.dot(E))).normalize(),v.crossVectors(T,E);let C=v.dot(c[y])<0?-1:1;o.setXYZW(y,w.x,w.y,w.z,C)}for(let y=0,E=M.length;y<E;++y){let R=M[y],C=R.start,I=R.count;for(let B=C,D=C+I;B<D;B+=3)P(t.getX(B+0)),P(t.getX(B+1)),P(t.getX(B+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,o=new U,a=new U,c=new U,l=new U,h=new U,d=new U;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)pn.fromBufferAttribute(t,e),pn.normalize(),t.setXYZ(e,pn.x,pn.y,pn.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new Fe(u,h,d)}if(this.index===null)return Qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ql=new U,Df=new U,Uf=new ie,Jn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ql.subVectors(n,e).cross(Df.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ql),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Uf.getNormalMatrix(t),s=this.coplanarPoint(ql).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Nf=0,wi=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nf++}),this.uuid=_s(),this.name="",this.type="Material",this.blending=Ri,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=xc,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ee(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=za,this.stencilZFail=za,this.stencilZPass=za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Qt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ee().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Jn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Dt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Dt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Mi=new U,Zl=new U,Ma=new U,ba=new U,Ir=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,e),Mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Zl.copy(t).add(e).multiplyScalar(.5),Ma.copy(e).sub(t).normalize(),ba.copy(this.origin).sub(Zl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ma),a=ba.dot(this.direction),c=-ba.dot(Ma),l=ba.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Zl).addScaledVector(Ma,u),f}intersectSphere(t,e){if(t.radius<0)return null;Mi.subVectors(t.center,this.origin);let n=Mi.dot(this.direction),s=Mi.dot(Mi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=n.x-o.x,M=n.y-o.y,w=n.z-o.z,v=Math.abs(c),b=Math.abs(l),T=Math.abs(h),P,y,E,R,C,I,B,D,O,K,Y,rt;if(v>=b&&v>=T?(E=c,I=d,O=g,rt=p,c>=0?(P=l,y=h,R=u,C=f,B=x,D=m,K=M,Y=w):(P=h,y=l,R=f,C=u,B=m,D=x,K=w,Y=M)):b>=T?(E=l,I=u,O=x,rt=M,l>=0?(P=h,y=c,R=f,C=d,B=m,D=g,K=w,Y=p):(P=c,y=h,R=d,C=f,B=g,D=m,K=p,Y=w)):(E=h,I=f,O=m,rt=w,h>=0?(P=c,y=l,R=d,C=u,B=g,D=x,K=p,Y=M):(P=l,y=c,R=u,C=d,B=x,D=g,K=M,Y=p)),E===0)return null;let $=P/E,nt=y/E,X=1/E,xt=R-$*I,gt=C-nt*I,$t=B-$*O,Wt=D-nt*O,Kt=K-$*rt,j=Y-nt*rt,lt=Kt*Wt-j*$t,Ct=xt*j-gt*Kt,Xt=$t*gt-Wt*xt;if(s){if(lt<0||Ct<0||Xt<0)return null}else if((lt<0||Ct<0||Xt<0)&&(lt>0||Ct>0||Xt>0))return null;let Nt=lt+Ct+Xt;if(Nt===0)return null;let Yt=X*(lt*I+Ct*O+Xt*rt);return(Nt>0?Yt<0:Yt>0)?null:this.at(Yt/Nt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Je=class extends wi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Uh=new ke,as=new Ir,Ea=new Ti,Nh=new U,Ta=new U,wa=new U,Aa=new U,Jl=new U,Ra=new U,Fh=new U,Ca=new U,se=class extends _n{constructor(t=new Ee,e=new Je){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ra.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(Jl.fromBufferAttribute(d,t),o?Ra.addScaledVector(Jl,h):Ra.addScaledVector(Jl.sub(e),h))}e.add(Ra)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(r),as.copy(t.ray).recast(t.near),!(Ea.containsPoint(as.origin)===!1&&(as.intersectSphere(Ea,Nh)===null||as.origin.distanceToSquared(Nh)>(t.far-t.near)**2))&&(Uh.copy(r).invert(),as.copy(t.ray).applyMatrix4(Uh),!(n.boundingBox!==null&&as.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,as)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,b=w;v<b;v+=3){let T=a.getX(v),P=a.getX(v+1),y=a.getX(v+2);s=Pa(this,p,t,n,l,h,d,T,P,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);s=Pa(this,o,t,n,l,h,d,M,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,b=w;v<b;v+=3){let T=v,P=v+1,y=v+2;s=Pa(this,p,t,n,l,h,d,T,P,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=m,w=m+1,v=m+2;s=Pa(this,o,t,n,l,h,d,M,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Ff(i,t,e,n,s,r,o,a){let c;if(t.side===yn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Ji,a),c===null)return null;Ca.copy(a),Ca.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ca);return l<e.near||l>e.far?null:{distance:l,point:Ca.clone(),object:i}}function Pa(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ta),i.getVertexPosition(c,wa),i.getVertexPosition(l,Aa);let h=Ff(i,t,e,n,Ta,wa,Aa,Fh);if(h){let d=new U;ki.getBarycoord(Fh,Ta,wa,Aa,d),s&&(h.uv=ki.getInterpolatedAttribute(s,a,c,l,d,new Dt)),r&&(h.uv1=ki.getInterpolatedAttribute(r,a,c,l,d,new Dt)),o&&(h.normal=ki.getInterpolatedAttribute(o,a,c,l,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new U,materialIndex:0};ki.getNormal(Ta,wa,Aa,u.normal),h.face=u,h.barycoord=d}return h}var ja=class extends Rn{constructor(t=null,e=1,n=1,s,r,o,a,c,l=gn,h=gn,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var os=new Ti,Bf=new Dt(.5,.5),Ia=new U,qs=class{constructor(t=new Jn,e=new Jn,n=new Jn,s=new Jn,r=new Jn,o=new Jn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],M=r[12],w=r[13],v=r[14],b=r[15];if(s[0].setComponents(l-o,f-h,p-g,b-M).normalize(),s[1].setComponents(l+o,f+h,p+g,b+M).normalize(),s[2].setComponents(l+a,f+d,p+x,b+w).normalize(),s[3].setComponents(l-a,f-d,p-x,b-w).normalize(),n)s[4].setComponents(c,u,m,v).normalize(),s[5].setComponents(l-c,f-u,p-m,b-v).normalize();else if(s[4].setComponents(l-c,f-u,p-m,b-v).normalize(),e===$n)s[5].setComponents(l+c,f+u,p+m,b+v).normalize();else if(e===Vs)s[5].setComponents(c,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),os.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),os.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(os)}intersectsSprite(t){os.center.set(0,0,0);let e=Bf.distanceTo(t.center);return os.radius=.7071067811865476+e,os.applyMatrix4(t.matrixWorld),this.intersectsSphere(os)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ia.x=s.normal.x>0?t.max.x:t.min.x,Ia.y=s.normal.y>0?t.max.y:t.min.y,Ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var hi=class extends wi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bh=new ke,rc=new Ir,La=new Ti,Da=new U,Fn=class extends _n{constructor(t=new Ee,e=new hi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(s),La.radius+=r,t.ray.intersectsSphere(La)===!1)return;Bh.copy(s).invert(),rc.copy(t.ray).applyMatrix4(Bh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,x=f;g<x;g++){let m=l.getX(g);Da.fromBufferAttribute(d,m),Oh(Da,m,c,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,x=f;g<x;g++)Da.fromBufferAttribute(d,g),Oh(Da,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Oh(i,t,e,n,s,r,o){let a=rc.distanceSqToPoint(i);if(a<e){let c=new U;rc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Lr=class extends Rn{constructor(t=[],e=$i,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xn=class extends Rn{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Vi=class extends Rn{constructor(t,e,n=jn,s,r,o,a=gn,c=gn,l,h=oi,d=1){if(h!==oi&&h!==Ki)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Xs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Qa=class extends Vi{constructor(t,e=jn,n=$i,s,r,o=gn,a=gn,c,l=oi){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Dr=class extends Rn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ce=class i extends Ee{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(d,2));function g(x,m,p,M,w,v,b,T,P,y,E){let R=v/P,C=b/y,I=v/2,B=b/2,D=T/2,O=P+1,K=y+1,Y=0,rt=0,$=new U;for(let nt=0;nt<K;nt++){let X=nt*C-B;for(let xt=0;xt<O;xt++){let gt=xt*R-I;$[x]=gt*M,$[m]=X*w,$[p]=D,l.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[p]=T>0?1:-1,h.push($.x,$.y,$.z),d.push(xt/P),d.push(1-nt/y),Y+=1}}for(let nt=0;nt<y;nt++)for(let X=0;X<P;X++){let xt=u+X+O*nt,gt=u+X+O*(nt+1),$t=u+(X+1)+O*(nt+1),Wt=u+(X+1)+O*nt;c.push(xt,gt,Wt),c.push(gt,$t,Wt),rt+=6}a.addGroup(f,rt,E),f+=rt,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ur=class i extends Ee{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,g=n*2+r,x=s+1,m=new U,p=new U;for(let M=0;M<=g;M++){let w=0,v=0,b=0,T=0;if(M<=n){let E=M/n,R=E*Math.PI/2;v=-h-t*Math.cos(R),b=t*Math.sin(R),T=-t*Math.cos(R),w=E*d}else if(M<=n+r){let E=(M-n)/r;v=-h+E*e,b=t,T=0,w=d+E*u}else{let E=(M-n-r)/n,R=E*Math.PI/2;v=h+t*Math.sin(R),b=t*Math.cos(R),T=t*Math.sin(R),w=d+u+E*d}let P=Math.max(0,Math.min(1,w/f)),y=0;M===0?y=.5/s:M===g&&(y=-.5/s);for(let E=0;E<=s;E++){let R=E/s,C=R*Math.PI*2,I=Math.sin(C),B=Math.cos(C);p.x=-b*B,p.y=v,p.z=b*I,a.push(p.x,p.y,p.z),m.set(-b*B,T,b*I),m.normalize(),c.push(m.x,m.y,m.z),l.push(R+y,P)}if(M>0){let E=(M-1)*x;for(let R=0;R<s;R++){let C=E+R,I=E+R+1,B=M*x+R,D=M*x+R+1;o.push(C,I,B),o.push(I,D,B)}}}this.setIndex(o),this.setAttribute("position",new pe(a,3)),this.setAttribute("normal",new pe(c,3)),this.setAttribute("uv",new pe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var Qe=class i extends Ee{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,x=[],m=n/2,p=0;M(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(f,2));function M(){let v=new U,b=new U,T=0,P=(e-t)/n;for(let y=0;y<=r;y++){let E=[],R=y/r,C=R*(e-t)+t;for(let I=0;I<=s;I++){let B=I/s,D=B*c+a,O=Math.sin(D),K=Math.cos(D);b.x=C*O,b.y=-R*n+m,b.z=C*K,d.push(b.x,b.y,b.z),v.set(O,P,K).normalize(),u.push(v.x,v.y,v.z),f.push(B,1-R),E.push(g++)}x.push(E)}for(let y=0;y<s;y++)for(let E=0;E<r;E++){let R=x[E][y],C=x[E+1][y],I=x[E+1][y+1],B=x[E][y+1];(t>0||E!==0)&&(h.push(R,C,B),T+=3),(e>0||E!==r-1)&&(h.push(C,I,B),T+=3)}l.addGroup(p,T,0),p+=T}function w(v){let b=g,T=new Dt,P=new U,y=0,E=v===!0?t:e,R=v===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,m*R,0),u.push(0,R,0),f.push(.5,.5),g++;let C=g;for(let I=0;I<=s;I++){let D=I/s*c+a,O=Math.cos(D),K=Math.sin(D);P.x=E*K,P.y=m*R,P.z=E*O,d.push(P.x,P.y,P.z),u.push(0,R,0),T.x=O*.5+.5,T.y=K*.5*R+.5,f.push(T.x,T.y),g++}for(let I=0;I<s;I++){let B=b+I,D=C+I;v===!0?h.push(D,D+1,B):h.push(D+1,D,B),y+=3}l.addGroup(p,y,v===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Wi=class i extends Qe{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Qt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Dt:new U);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],o=[],a=new U,c=new ke;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new U)}r[0]=new U,o[0]=new U;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(he(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(he(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Zs=class extends Bn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Dt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},to=class extends Zs{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Bc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var zh=new U,Hh=new U,$l=new Bc,Kl=new Bc,jl=new Bc,ui=class extends Bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Hh.subVectors(s[0],s[1]).add(s[0]),l=Hh);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(zh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=zh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),$l.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,x,m),Kl.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,x,m),jl.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&($l.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Kl.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),jl.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set($l.calc(c),Kl.calc(c),jl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function kh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Of(i,t){let e=1-i;return e*e*t}function zf(i,t){return 2*(1-i)*i*t}function Hf(i,t){return i*i*t}function yr(i,t,e,n){return Of(i,t)+zf(i,e)+Hf(i,n)}function kf(i,t){let e=1-i;return e*e*e*t}function Gf(i,t){let e=1-i;return 3*e*e*i*t}function Vf(i,t){return 3*(1-i)*i*i*t}function Wf(i,t){return i*i*i*t}function vr(i,t,e,n,s){return kf(i,t)+Gf(i,e)+Vf(i,n)+Wf(i,s)}var Nr=class extends Bn{constructor(t=new Dt,e=new Dt,n=new Dt,s=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Dt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},eo=class extends Bn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y),vr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fr=class extends Bn{constructor(t=new Dt,e=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},no=class extends Bn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Br=class extends Bn{constructor(t=new Dt,e=new Dt,n=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Dt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(yr(t,s.x,r.x,o.x),yr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends Bn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(yr(t,s.x,r.x,o.x),yr(t,s.y,r.y,o.y),yr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zr=class extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Dt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(kh(a,c.x,l.x,h.x,d.x),kh(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Dt().fromArray(s))}return this}},io=Object.freeze({__proto__:null,ArcCurve:to,CatmullRomCurve3:ui,CubicBezierCurve:Nr,CubicBezierCurve3:eo,EllipseCurve:Zs,LineCurve:Fr,LineCurve3:no,QuadraticBezierCurve:Br,QuadraticBezierCurve3:Or,SplineCurve:zr}),so=class extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new io[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new io[s.type]().fromJSON(s))}return this}},Hr=class extends so{constructor(t){super(),this.type="Path",this.currentPoint=new Dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Fr(this.currentPoint.clone(),new Dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Br(this.currentPoint.clone(),new Dt(t,e),new Dt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Nr(this.currentPoint.clone(),new Dt(t,e),new Dt(n,s),new Dt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new zr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Zs(t,e,n,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Js=class extends Hr{constructor(t){super(t),this.uuid=_s(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Hr().fromJSON(s))}return this}};function Xf(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Fu(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=$f(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let h=a,d=c;for(let u=e;u<s;u+=e){let f=i[u],g=i[u+1];f<a&&(a=f),g<c&&(c=g),f>h&&(h=f),g>d&&(d=g)}l=Math.max(h-a,d-c),l=l!==0?32767/l:0}return kr(r,o,e,a,c,l,0),o}function Fu(i,t,e,n,s){let r;if(s===op(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Gh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Gh(o/n|0,i[o],i[o+1],r);return r&&$s(r,r.next)&&(Vr(r),r=r.next),r}function us(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($s(e,e.next)||qe(e.prev,e,e.next)===0)){if(Vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function kr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ep(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?qf(i,n,s,r):Yf(i)){t.push(c.i,i.i,l.i),Vr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Zf(us(i),t),kr(i,t,e,n,s,r,2)):o===2&&Jf(i,t,e,n,s,r):kr(us(i),t,e,n,s,r,1);break}}}function Yf(i){let t=i.prev,e=i,n=i.next;if(qe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),d=Math.min(a,c,l),u=Math.max(s,r,o),f=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&gr(s,a,r,c,o,l,g.x,g.y)&&qe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function qf(i,t,e,n){let s=i.prev,r=i,o=i.next;if(qe(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,c,l),g=Math.min(h,d,u),x=Math.max(a,c,l),m=Math.max(h,d,u),p=ac(f,g,t,e,n),M=ac(x,m,t,e,n),w=i.prevZ,v=i.nextZ;for(;w&&w.z>=p&&v&&v.z<=M;){if(w.x>=f&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&gr(a,h,c,d,l,u,w.x,w.y)&&qe(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&gr(a,h,c,d,l,u,v.x,v.y)&&qe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&gr(a,h,c,d,l,u,w.x,w.y)&&qe(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&gr(a,h,c,d,l,u,v.x,v.y)&&qe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Zf(i,t){let e=i;do{let n=e.prev,s=e.next.next;!$s(n,s)&&Ou(n,e,e.next,s)&&Gr(n,s)&&Gr(s,n)&&(t.push(n.i,e.i,s.i),Vr(e),Vr(e.next),e=i=s),e=e.next}while(e!==i);return us(e)}function Jf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&sp(o,a)){let c=zu(o,a);o=us(o,o.next),c=us(c,c.next),kr(o,t,e,n,s,r,0),kr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function $f(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Fu(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(ip(l))}s.sort(Kf);for(let r=0;r<s.length;r++)e=jf(s[r],e);return e}function Kf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function jf(i,t){let e=Qf(i,t);if(!e)return t;let n=zu(e,i);return us(n,n.next),us(e,e.next)}function Qf(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if($s(i,e))return e;do{if($s(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Bu(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Gr(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&tp(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function tp(i,t){return qe(i.prev,i,t.prev)<0&&qe(t.next,i,i.next)<0}function ep(i,t,e,n){let s=i;do s.z===0&&(s.z=ac(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,np(s)}function np(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function ac(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function ip(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Bu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function gr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Bu(i,t,e,n,s,r,o,a)}function sp(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!rp(i,t)&&(Gr(i,t)&&Gr(t,i)&&ap(i,t)&&(qe(i.prev,i,t.prev)||qe(i,t.prev,t))||$s(i,t)&&qe(i.prev,i,i.next)>0&&qe(t.prev,t,t.next)>0)}function qe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $s(i,t){return i.x===t.x&&i.y===t.y}function Ou(i,t,e,n){let s=Na(qe(i,t,e)),r=Na(qe(i,t,n)),o=Na(qe(e,n,i)),a=Na(qe(e,n,t));return!!(s!==r&&o!==a||s===0&&Ua(i,e,t)||r===0&&Ua(i,n,t)||o===0&&Ua(e,i,n)||a===0&&Ua(e,t,n))}function Ua(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Na(i){return i>0?1:i<0?-1:0}function rp(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ou(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Gr(i,t){return qe(i.prev,i,i.next)<0?qe(i,t,i.next)>=0&&qe(i,i.prev,t)>=0:qe(i,t,i.prev)<0||qe(i,i.next,t)<0}function ap(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function zu(i,t){let e=oc(i.i,i.x,i.y),n=oc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Gh(i,t,e,n){let s=oc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function oc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function op(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var lc=class{static triangulate(t,e,n=2){return Xf(t,e,n)}},ls=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Vh(t),Wh(n,t);let o=t.length;e.forEach(Vh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Wh(n,e[c]);let a=lc.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Vh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Wh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Wr=class i extends Ee{constructor(t=new Js([new Dt(.5,.5),new Dt(-.5,.5),new Dt(-.5,-.5),new Dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new pe(s,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:lp,w,v=!1,b,T,P,y;if(p){w=p.getSpacedPoints(h),v=!0,u=!1;let st=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(h,st),T=new U,P=new U,y=new U}u||(m=0,f=0,g=0,x=0);let E=a.extractPoints(l),R=E.shape,C=E.holes;if(!ls.isClockWise(R)){R=R.reverse();for(let st=0,k=C.length;st<k;st++){let J=C[st];ls.isClockWise(J)&&(C[st]=J.reverse())}}function B(st){let J=10000000000000001e-36,tt=st[0];for(let ht=1;ht<=st.length;ht++){let Et=ht%st.length,pt=st[Et],ft=pt.x-tt.x,Mt=pt.y-tt.y,L=ft*ft+Mt*Mt,Vt=Math.max(Math.abs(pt.x),Math.abs(pt.y),Math.abs(tt.x),Math.abs(tt.y)),Ot=J*Vt*Vt;if(L<=Ot){st.splice(Et,1),ht--;continue}tt=pt}}B(R),C.forEach(B);let D=C.length,O=R;for(let st=0;st<D;st++){let k=C[st];R=R.concat(k)}function K(st,k,J){return k||te("ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(k,J)}let Y=R.length;function rt(st,k,J){let tt,ht,Et,pt=st.x-k.x,ft=st.y-k.y,Mt=J.x-st.x,L=J.y-st.y,Vt=pt*pt+ft*ft,Ot=pt*L-ft*Mt;if(Math.abs(Ot)>Number.EPSILON){let A=Math.sqrt(Vt),_=Math.sqrt(Mt*Mt+L*L),H=k.x-ft/A,G=k.y+pt/A,q=J.x-L/_,dt=J.y+Mt/_,mt=((q-H)*L-(dt-G)*Mt)/(pt*L-ft*Mt);tt=H+pt*mt-st.x,ht=G+ft*mt-st.y;let Q=tt*tt+ht*ht;if(Q<=2)return new Dt(tt,ht);Et=Math.sqrt(Q/2)}else{let A=!1;pt>Number.EPSILON?Mt>Number.EPSILON&&(A=!0):pt<-Number.EPSILON?Mt<-Number.EPSILON&&(A=!0):Math.sign(ft)===Math.sign(L)&&(A=!0),A?(tt=-ft,ht=pt,Et=Math.sqrt(Vt)):(tt=pt,ht=ft,Et=Math.sqrt(Vt/2))}return new Dt(tt/Et,ht/Et)}let $=[];for(let st=0,k=O.length,J=k-1,tt=st+1;st<k;st++,J++,tt++)J===k&&(J=0),tt===k&&(tt=0),$[st]=rt(O[st],O[J],O[tt]);let nt=[],X,xt=$.concat();for(let st=0,k=D;st<k;st++){let J=C[st];X=[];for(let tt=0,ht=J.length,Et=ht-1,pt=tt+1;tt<ht;tt++,Et++,pt++)Et===ht&&(Et=0),pt===ht&&(pt=0),X[tt]=rt(J[tt],J[Et],J[pt]);nt.push(X),xt=xt.concat(X)}let gt;if(m===0)gt=ls.triangulateShape(O,C);else{let st=[],k=[];for(let J=0;J<m;J++){let tt=J/m,ht=f*Math.cos(tt*Math.PI/2),Et=g*Math.sin(tt*Math.PI/2)+x;for(let pt=0,ft=O.length;pt<ft;pt++){let Mt=K(O[pt],$[pt],Et);Ct(Mt.x,Mt.y,-ht),tt===0&&st.push(Mt)}for(let pt=0,ft=D;pt<ft;pt++){let Mt=C[pt];X=nt[pt];let L=[];for(let Vt=0,Ot=Mt.length;Vt<Ot;Vt++){let A=K(Mt[Vt],X[Vt],Et);Ct(A.x,A.y,-ht),tt===0&&L.push(A)}tt===0&&k.push(L)}}gt=ls.triangulateShape(st,k)}let $t=gt.length,Wt=g+x;for(let st=0;st<Y;st++){let k=u?K(R[st],xt[st],Wt):R[st];v?(P.copy(b.normals[0]).multiplyScalar(k.x),T.copy(b.binormals[0]).multiplyScalar(k.y),y.copy(w[0]).add(P).add(T),Ct(y.x,y.y,y.z)):Ct(k.x,k.y,0)}for(let st=1;st<=h;st++)for(let k=0;k<Y;k++){let J=u?K(R[k],xt[k],Wt):R[k];v?(P.copy(b.normals[st]).multiplyScalar(J.x),T.copy(b.binormals[st]).multiplyScalar(J.y),y.copy(w[st]).add(P).add(T),Ct(y.x,y.y,y.z)):Ct(J.x,J.y,d/h*st)}for(let st=m-1;st>=0;st--){let k=st/m,J=f*Math.cos(k*Math.PI/2),tt=g*Math.sin(k*Math.PI/2)+x;for(let ht=0,Et=O.length;ht<Et;ht++){let pt=K(O[ht],$[ht],tt);Ct(pt.x,pt.y,d+J)}for(let ht=0,Et=C.length;ht<Et;ht++){let pt=C[ht];X=nt[ht];for(let ft=0,Mt=pt.length;ft<Mt;ft++){let L=K(pt[ft],X[ft],tt);v?Ct(L.x,L.y+w[h-1].y,w[h-1].x+J):Ct(L.x,L.y,d+J)}}}Kt(),j();function Kt(){let st=s.length/3;if(u){let k=0,J=Y*k;for(let tt=0;tt<$t;tt++){let ht=gt[tt];Xt(ht[2]+J,ht[1]+J,ht[0]+J)}k=h+m*2,J=Y*k;for(let tt=0;tt<$t;tt++){let ht=gt[tt];Xt(ht[0]+J,ht[1]+J,ht[2]+J)}}else{for(let k=0;k<$t;k++){let J=gt[k];Xt(J[2],J[1],J[0])}for(let k=0;k<$t;k++){let J=gt[k];Xt(J[0]+Y*h,J[1]+Y*h,J[2]+Y*h)}}n.addGroup(st,s.length/3-st,0)}function j(){let st=s.length/3,k=0;lt(O,k),k+=O.length;for(let J=0,tt=C.length;J<tt;J++){let ht=C[J];lt(ht,k),k+=ht.length}n.addGroup(st,s.length/3-st,1)}function lt(st,k){let J=st.length;for(;--J>=0;){let tt=J,ht=J-1;ht<0&&(ht=st.length-1);for(let Et=0,pt=h+m*2;Et<pt;Et++){let ft=Y*Et,Mt=Y*(Et+1),L=k+tt+ft,Vt=k+ht+ft,Ot=k+ht+Mt,A=k+tt+Mt;Nt(L,Vt,Ot,A)}}}function Ct(st,k,J){c.push(st),c.push(k),c.push(J)}function Xt(st,k,J){Yt(st),Yt(k),Yt(J);let tt=s.length/3,ht=M.generateTopUV(n,s,tt-3,tt-2,tt-1);de(ht[0]),de(ht[1]),de(ht[2])}function Nt(st,k,J,tt){Yt(st),Yt(k),Yt(tt),Yt(k),Yt(J),Yt(tt);let ht=s.length/3,Et=M.generateSideWallUV(n,s,ht-6,ht-3,ht-2,ht-1);de(Et[0]),de(Et[1]),de(Et[3]),de(Et[1]),de(Et[2]),de(Et[3])}function Yt(st){s.push(c[st*3+0]),s.push(c[st*3+1]),s.push(c[st*3+2])}function de(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return cp(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new io[s.type]().fromJSON(s)),new i(n,t.options)}},lp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new Dt(r,o),new Dt(a,c),new Dt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Dt(o,1-c),new Dt(l,1-d),new Dt(u,1-g),new Dt(x,1-p)]:[new Dt(a,1-c),new Dt(h,1-d),new Dt(f,1-g),new Dt(m,1-p)]}};function cp(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Le=class i extends Ee{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let M=p*u-o;for(let w=0;w<l;w++){let v=w*d-r;g.push(v,-M,0),x.push(0,0,1),m.push(w/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let w=M+l*p,v=M+l*(p+1),b=M+1+l*(p+1),T=M+1+l*p;f.push(w,v,T),f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var En=class i extends Ee{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new U,u=new U,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let M=[],w=p/n,v=o+w*a,b=t*Math.cos(v),T=Math.sqrt(t*t-b*b),P=0;p===0&&o===0?P=.5/e:p===n&&c===Math.PI&&(P=-.5/e);for(let y=0;y<=e;y++){let E=y/e,R=s+E*r;d.x=-T*Math.cos(R),d.y=b,d.z=T*Math.sin(R),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(E+P,1-w),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let w=h[p][M+1],v=h[p][M],b=h[p+1][M],T=h[p+1][M+1];(p!==0||o>0)&&f.push(w,v,T),(p!==n-1||c<Math.PI)&&f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new pe(g,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ai=class i extends Ee{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new U,f=new U,g=new U;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),l.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,M=(s+1)*(x-1)+m-1,w=(s+1)*(x-1)+m,v=(s+1)*x+m;c.push(p,M,v),c.push(M,w,v)}this.setIndex(c),this.setAttribute("position",new pe(l,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var ds=class i extends Ee{constructor(t=new Or(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new U,c=new U,l=new Dt,h=new U,d=[],u=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(f,2));function x(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),M(),p()}function m(w){h=t.getPointAt(w/e,h);let v=o.normals[w],b=o.binormals[w];for(let T=0;T<=s;T++){let P=T/s*Math.PI*2,y=Math.sin(P),E=-Math.cos(P);c.x=E*v.x+y*b.x,c.y=E*v.y+y*b.y,c.z=E*v.z+y*b.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let w=1;w<=e;w++)for(let v=1;v<=s;v++){let b=(s+1)*(w-1)+(v-1),T=(s+1)*w+(v-1),P=(s+1)*w+v,y=(s+1)*(w-1)+v;g.push(b,T,y),g.push(T,P,y)}}function M(){for(let w=0;w<=e;w++)for(let v=0;v<=s;v++)l.x=w/e,l.y=v/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new io[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function xs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Xh(s))s.isRenderTargetTexture?(Qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Xh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Tn(i){let t={};for(let e=0;e<i.length;e++){let n=xs(i[e]);for(let s in n)t[s]=n[s]}return t}function Xh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function hp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}var Hu={clone:xs,merge:Tn},up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,hn=class extends wi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=up,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=hp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new ee().setHex(s.value);break;case"v2":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ge().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ie().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ke().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ro=class extends hn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ve=class extends wi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ao=class extends wi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Su,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},oo=class extends wi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Bs(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ql(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Xi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},lo=class extends Xi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nc,endingEnd:nc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ic:r=t,a=2*e-n;break;case sc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ic:o=t,c=2*n-e;break;case sc:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,M=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,w=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+M*o[l+b]+w*o[c+b]+v*o[d+b];return r}},co=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},ho=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},uo=class extends Xi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),x=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*x+o[c+m]*g;return r}let u=a*2,f=t-1;for(let g=0;g!==a;++g){let x=o[l+g],m=o[c+g],p=f*u+g*2,M=d[p],w=d[p+1],v=t*u+g*2,b=h[v],T=h[v+1],P=pp(n,e,M,b,s);r[g]=ku(P,x,w,T,m)}return r}};function ku(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function fp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function pp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=ku(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=fp(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var On=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Bs(e,this.TimeBufferType),this.values=Bs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Bs(t.times,Array),values:Bs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ql(t.settings)&&(n.settings={inTangents:Bs(t.settings.inTangents,Array),outTangents:Bs(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new lo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new uo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Sr:e=this.InterpolantFactoryMethodDiscrete;break;case Za:e=this.InterpolantFactoryMethodLinear;break;case Oa:e=this.InterpolantFactoryMethodSmooth;break;case ec:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return Oa;case this.InterpolantFactoryMethodBezier:return ec}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ql(this.settings)&&(Yh(this.settings.inTangents,t),Yh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(te("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(te("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){te("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){te("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&nf(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){te("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Oa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[u+g]||x!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ql(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Yh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}On.prototype.ValueTypeName="";On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=Za;var Yi=class extends On{constructor(t,e,n){super(t,e,n)}};Yi.prototype.ValueTypeName="bool";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=Sr;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};fo.prototype.ValueTypeName="color";var po=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};po.prototype.ValueTypeName="number";var mo=class extends Xi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)ci.slerpFlat(r,0,o,l-a,o,l,c);return r}},Xr=class extends On{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new mo(this.times,this.values,this.getValueSize(),t)}};Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var qi=class extends On{constructor(t,e,n){super(t,e,n)}};qi.prototype.ValueTypeName="string";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=Sr;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var go=class extends On{constructor(t,e,n,s){super(t,e,n,s)}};go.prototype.ValueTypeName="vector";var _o=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gu=new _o,xo=class{constructor(t){this.manager=t!==void 0?t:Gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};xo.DEFAULT_MATERIAL_NAME="__DEFAULT";var fs=class extends _n{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ee(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var tc=new ke,qh=new U,Zh=new U,Ks=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=Dn,this.map=null,this.mapPass=null,this.matrix=new ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;qh.setFromMatrixPosition(t.matrixWorld),e.position.copy(qh),Zh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(tc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Vs||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Fa=new U,Ba=new ci,si=new U,Yr=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ke,this.projectionMatrix=new ke,this.projectionMatrixInverse=new ke,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fa,Ba,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Ba,si.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Fa,Ba,si),si.x===1&&si.y===1&&si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Ba,si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Hi=new U,Jh=new Dt,$h=new Dt,mn=class extends Yr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,Jh,$h),e.subVectors($h,Jh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_r*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},cc=class extends Ks{constructor(){super(new mn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=hs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},qr=class extends fs{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new cc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},hc=class extends Ks{constructor(){super(new mn(90,1,.5,500)),this.isPointLightShadow=!0}},Zi=class extends fs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new hc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},js=class extends Yr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},uc=class extends Ks{constructor(){super(new js(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zr=class extends fs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new uc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Jr=class extends fs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Os=-90,zs=1,yo=class extends _n{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new mn(Os,zs,t,e);s.layers=this.layers,this.add(s);let r=new mn(Os,zs,t,e);r.layers=this.layers,this.add(r);let o=new mn(Os,zs,t,e);o.layers=this.layers,this.add(o);let a=new mn(Os,zs,t,e);a.layers=this.layers,this.add(a);let c=new mn(Os,zs,t,e);c.layers=this.layers,this.add(c);let l=new mn(Os,zs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Vs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},vo=class extends mn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var zc="\\[\\]\\.:\\/",mp=new RegExp("["+zc+"]","g"),Hc="[^"+zc+"]",gp="[^"+zc.replace("\\.","")+"]",_p=/((?:WC+[\/:])*)/.source.replace("WC",Hc),xp=/(WCOD+)?/.source.replace("WCOD",gp),yp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Hc),vp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Hc),Sp=new RegExp("^"+_p+xp+yp+vp+"$"),Mp=["material","materials","bones","map"],dc=class{constructor(t,e,n){let s=n||He.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},He=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(mp,"")}static parseTrackName(t){let e=Sp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Mp.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){te("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){te("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){te("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){te("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){te("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){te("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;te("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){te("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};He.Composite=dc;He.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};He.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};He.prototype.GetterByBindingType=[He.prototype._getValue_direct,He.prototype._getValue_array,He.prototype._getValue_arrayElement,He.prototype._getValue_toArray];He.prototype.SetterByBindingTypeAndVersioning=[[He.prototype._setValue_direct,He.prototype._setValue_direct_setNeedsUpdate,He.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[He.prototype._setValue_array,He.prototype._setValue_array_setNeedsUpdate,He.prototype._setValue_array_setMatrixWorldNeedsUpdate],[He.prototype._setValue_arrayElement,He.prototype._setValue_arrayElement_setNeedsUpdate,He.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[He.prototype._setValue_fromArray,He.prototype._setValue_fromArray_setNeedsUpdate,He.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var xy=new Float32Array(1);var Yc=class Yc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Yc.prototype.isMatrix2=!0;var fc=Yc;function kc(i,t,e,n){let s=bp(n);switch(e){case Ic:return i*t;case Dc:return i*t/s.components*s.byteLength;case Ro:return i*t/s.components*s.byteLength;case ji:return i*t*2/s.components*s.byteLength;case Co:return i*t*2/s.components*s.byteLength;case Lc:return i*t*3/s.components*s.byteLength;case Gn:return i*t*4/s.components*s.byteLength;case Po:return i*t*4/s.components*s.byteLength;case ta:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case na:case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lo:case Uo:return Math.max(i,16)*Math.max(t,8)/4;case Io:case Do:return Math.max(i,8)*Math.max(t,8)/2;case No:case Fo:case Oo:case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bo:case sa:case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case jo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Qo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case el:case nl:case il:return Math.ceil(i/4)*Math.ceil(t/4)*16;case sl:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ra:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function bp(i){switch(i){case Dn:case Ac:return{byteLength:1,components:1};case tr:case Rc:case ti:return{byteLength:2,components:1};case wo:case Ao:return{byteLength:2,components:4};case jn:case To:case Qn:return{byteLength:4,components:1};case Cc:case Pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function hd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Tp(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var wp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ap=`#ifdef USE_ALPHAHASH
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
#endif`,Rp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lp=`#ifdef USE_AOMAP
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
#endif`,Dp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Up=`#ifdef USE_BATCHING
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
#endif`,Np=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Fp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,zp=`#ifdef USE_IRIDESCENCE
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
#endif`,Hp=`#ifdef USE_BUMPMAP
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
#endif`,kp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Yp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Jp=`#define PI 3.141592653589793
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
} // validated`,$p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kp=`vec3 transformedNormal = objectNormal;
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
#endif`,jp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,em=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nm="gl_FragColor = linearToOutputTexel( gl_FragColor );",im=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sm=`#ifdef USE_ENVMAP
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
#endif`,rm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,um=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fm=`#ifdef USE_GRADIENTMAP
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
}`,pm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_m=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,xm=`#ifdef USE_ENVMAP
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
#endif`,ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bm=`PhysicalMaterial material;
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
#endif`,Em=`uniform sampler2D dfgLUT;
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
}`,Tm=`
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
#endif`,wm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Am=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Cm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fm=`#if defined( USE_POINTS_UV )
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
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,km=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gm=`#ifdef USE_MORPHTARGETS
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
#endif`,Vm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Jm=`#ifdef USE_NORMALMAP
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
#endif`,$m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Km=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,t0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,e0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,n0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,h0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,u0=`float getShadowMask() {
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
}`,d0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,p0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,g0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,v0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#ifdef USE_TRANSMISSION
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
#endif`,M0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,w0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A0=`uniform sampler2D t2D;
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`#include <common>
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
}`,D0=`#if DEPTH_PACKING == 3200
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
}`,U0=`#define DISTANCE
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
}`,N0=`#define DISTANCE
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
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O0=`uniform float scale;
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
}`,z0=`uniform vec3 diffuse;
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
}`,H0=`#include <common>
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
}`,k0=`uniform vec3 diffuse;
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
}`,G0=`#define LAMBERT
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
}`,V0=`#define LAMBERT
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
}`,W0=`#define MATCAP
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
}`,X0=`#define MATCAP
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
}`,Y0=`#define NORMAL
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
}`,q0=`#define NORMAL
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
}`,Z0=`#define PHONG
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
}`,J0=`#define PHONG
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
}`,$0=`#define STANDARD
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
}`,K0=`#define STANDARD
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
}`,j0=`#define TOON
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
}`,Q0=`#define TOON
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
}`,tg=`uniform float size;
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
}`,eg=`uniform vec3 diffuse;
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
}`,ng=`#include <common>
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
}`,ig=`uniform vec3 color;
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
}`,sg=`uniform float rotation;
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
}`,rg=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:wp,alphahash_pars_fragment:Ap,alphamap_fragment:Rp,alphamap_pars_fragment:Cp,alphatest_fragment:Pp,alphatest_pars_fragment:Ip,aomap_fragment:Lp,aomap_pars_fragment:Dp,batching_pars_vertex:Up,batching_vertex:Np,begin_vertex:Fp,beginnormal_vertex:Bp,bsdfs:Op,iridescence_fragment:zp,bumpmap_pars_fragment:Hp,clipping_planes_fragment:kp,clipping_planes_pars_fragment:Gp,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:Wp,color_fragment:Xp,color_pars_fragment:Yp,color_pars_vertex:qp,color_vertex:Zp,common:Jp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:Kp,displacementmap_pars_vertex:jp,displacementmap_vertex:Qp,emissivemap_fragment:tm,emissivemap_pars_fragment:em,colorspace_fragment:nm,colorspace_pars_fragment:im,envmap_fragment:sm,envmap_common_pars_fragment:rm,envmap_pars_fragment:am,envmap_pars_vertex:om,envmap_physical_pars_fragment:xm,envmap_vertex:lm,fog_vertex:cm,fog_pars_vertex:hm,fog_fragment:um,fog_pars_fragment:dm,gradientmap_pars_fragment:fm,lightmap_pars_fragment:pm,lights_lambert_fragment:mm,lights_lambert_pars_fragment:gm,lights_pars_begin:_m,lights_toon_fragment:ym,lights_toon_pars_fragment:vm,lights_phong_fragment:Sm,lights_phong_pars_fragment:Mm,lights_physical_fragment:bm,lights_physical_pars_fragment:Em,lights_fragment_begin:Tm,lights_fragment_maps:wm,lights_fragment_end:Am,lightprobes_pars_fragment:Rm,logdepthbuf_fragment:Cm,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Lm,map_fragment:Dm,map_pars_fragment:Um,map_particle_fragment:Nm,map_particle_pars_fragment:Fm,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:Om,morphinstance_vertex:zm,morphcolor_vertex:Hm,morphnormal_vertex:km,morphtarget_pars_vertex:Gm,morphtarget_vertex:Vm,normal_fragment_begin:Wm,normal_fragment_maps:Xm,normal_pars_fragment:Ym,normal_pars_vertex:qm,normal_vertex:Zm,normalmap_pars_fragment:Jm,clearcoat_normal_fragment_begin:$m,clearcoat_normal_fragment_maps:Km,clearcoat_pars_fragment:jm,iridescence_pars_fragment:Qm,opaque_fragment:t0,packing:e0,premultiplied_alpha_fragment:n0,project_vertex:i0,dithering_fragment:s0,dithering_pars_fragment:r0,roughnessmap_fragment:a0,roughnessmap_pars_fragment:o0,shadowmap_pars_fragment:l0,shadowmap_pars_vertex:c0,shadowmap_vertex:h0,shadowmask_pars_fragment:u0,skinbase_vertex:d0,skinning_pars_vertex:f0,skinning_vertex:p0,skinnormal_vertex:m0,specularmap_fragment:g0,specularmap_pars_fragment:_0,tonemapping_fragment:x0,tonemapping_pars_fragment:y0,transmission_fragment:v0,transmission_pars_fragment:S0,uv_pars_fragment:M0,uv_pars_vertex:b0,uv_vertex:E0,worldpos_vertex:T0,background_vert:w0,background_frag:A0,backgroundCube_vert:R0,backgroundCube_frag:C0,cube_vert:P0,cube_frag:I0,depth_vert:L0,depth_frag:D0,distance_vert:U0,distance_frag:N0,equirect_vert:F0,equirect_frag:B0,linedashed_vert:O0,linedashed_frag:z0,meshbasic_vert:H0,meshbasic_frag:k0,meshlambert_vert:G0,meshlambert_frag:V0,meshmatcap_vert:W0,meshmatcap_frag:X0,meshnormal_vert:Y0,meshnormal_frag:q0,meshphong_vert:Z0,meshphong_frag:J0,meshphysical_vert:$0,meshphysical_frag:K0,meshtoon_vert:j0,meshtoon_frag:Q0,points_vert:tg,points_frag:eg,shadow_vert:ng,shadow_frag:ig,sprite_vert:sg,sprite_frag:rg},Ft={common:{diffuse:{value:new ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new ee(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},pi={basic:{uniforms:Tn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:Tn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ee(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:Tn([Ft.common,Ft.specularmap,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,Ft.lights,{emissive:{value:new ee(0)},specular:{value:new ee(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:Tn([Ft.common,Ft.envmap,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.roughnessmap,Ft.metalnessmap,Ft.fog,Ft.lights,{emissive:{value:new ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:Tn([Ft.common,Ft.aomap,Ft.lightmap,Ft.emissivemap,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.gradientmap,Ft.fog,Ft.lights,{emissive:{value:new ee(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:Tn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,Ft.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:Tn([Ft.points,Ft.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:Tn([Ft.common,Ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:Tn([Ft.common,Ft.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:Tn([Ft.common,Ft.bumpmap,Ft.normalmap,Ft.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:Tn([Ft.sprite,Ft.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:Tn([Ft.common,Ft.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:Tn([Ft.lights,Ft.fog,{color:{value:new ee(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};pi.physical={uniforms:Tn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new ee(0)},specularColor:{value:new ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var hl={r:0,b:0,g:0},ag=new ke,ud=new ie;ud.set(-1,0,0,0,1,0,0,0,1);function og(i,t,e,n,s,r){let o=new ee(0),a=s===!0?0:1,c,l,h=null,d=0,u=null;function f(M){let w=M.isScene===!0?M.background:null;if(w&&w.isTexture){let v=M.backgroundBlurriness>0;w=t.get(w,v)}return w}function g(M){let w=!1,v=f(M);v===null?m(o,a):v&&v.isColor&&(m(v,1),w=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,w){let v=f(w);v&&(v.isCubeTexture||v.mapping===jr)?(l===void 0&&(l=new se(new Ce(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:xs(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,T,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(ag.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ud),l.material.toneMapped=xe.getTransfer(v.colorSpace)!==Te,(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new se(new Le(2,2),new hn({name:"BackgroundMaterial",uniforms:xs(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=xe.getTransfer(v.colorSpace)!==Te,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,w){M.getRGB(hl,Oc(i)),e.buffers.color.setClear(hl.r,hl.g,hl.b,w,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,w=1){o.set(M),a=w,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:x,dispose:p}}function lg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(C,I,B,D,O){let K=!1,Y=d(C,D,B,I);r!==Y&&(r=Y,l(r.object)),K=f(C,D,B,O),K&&g(C,D,B,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,v(C,I,B,D),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return i.createVertexArray()}function l(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function d(C,I,B,D){let O=D.wireframe===!0,K=n[I.id];K===void 0&&(K={},n[I.id]=K);let Y=C.isInstancedMesh===!0?C.id:0,rt=K[Y];rt===void 0&&(rt={},K[Y]=rt);let $=rt[B.id];$===void 0&&($={},rt[B.id]=$);let nt=$[O];return nt===void 0&&(nt=u(c()),$[O]=nt),nt}function u(C){let I=[],B=[],D=[];for(let O=0;O<e;O++)I[O]=0,B[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:D,object:C,attributes:{},index:null}}function f(C,I,B,D){let O=r.attributes,K=I.attributes,Y=0,rt=B.getAttributes();for(let $ in rt)if(rt[$].location>=0){let X=O[$],xt=K[$];if(xt===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(xt=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(xt=C.instanceColor)),X===void 0||X.attribute!==xt||xt&&X.data!==xt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==D}function g(C,I,B,D){let O={},K=I.attributes,Y=0,rt=B.getAttributes();for(let $ in rt)if(rt[$].location>=0){let X=K[$];X===void 0&&($==="instanceMatrix"&&C.instanceMatrix&&(X=C.instanceMatrix),$==="instanceColor"&&C.instanceColor&&(X=C.instanceColor));let xt={};xt.attribute=X,X&&X.data&&(xt.data=X.data),O[$]=xt,Y++}r.attributes=O,r.attributesNum=Y,r.index=D}function x(){let C=r.newAttributes;for(let I=0,B=C.length;I<B;I++)C[I]=0}function m(C){p(C,0)}function p(C,I){let B=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;B[C]=1,D[C]===0&&(i.enableVertexAttribArray(C),D[C]=1),O[C]!==I&&(i.vertexAttribDivisor(C,I),O[C]=I)}function M(){let C=r.newAttributes,I=r.enabledAttributes;for(let B=0,D=I.length;B<D;B++)I[B]!==C[B]&&(i.disableVertexAttribArray(B),I[B]=0)}function w(C,I,B,D,O,K,Y){Y===!0?i.vertexAttribIPointer(C,I,B,O,K):i.vertexAttribPointer(C,I,B,D,O,K)}function v(C,I,B,D){x();let O=D.attributes,K=B.getAttributes(),Y=I.defaultAttributeValues;for(let rt in K){let $=K[rt];if($.location>=0){let nt=O[rt];if(nt===void 0&&(rt==="instanceMatrix"&&C.instanceMatrix&&(nt=C.instanceMatrix),rt==="instanceColor"&&C.instanceColor&&(nt=C.instanceColor)),nt!==void 0){let X=nt.normalized,xt=nt.itemSize,gt=t.get(nt);if(gt===void 0)continue;let $t=gt.buffer,Wt=gt.type,Kt=gt.bytesPerElement,j=Wt===i.INT||Wt===i.UNSIGNED_INT||nt.gpuType===To;if(nt.isInterleavedBufferAttribute){let lt=nt.data,Ct=lt.stride,Xt=nt.offset;if(lt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<$.locationSize;Nt++)p($.location+Nt,lt.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Nt=0;Nt<$.locationSize;Nt++)m($.location+Nt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let Nt=0;Nt<$.locationSize;Nt++)w($.location+Nt,xt/$.locationSize,Wt,X,Ct*Kt,(Xt+xt/$.locationSize*Nt)*Kt,j)}else{if(nt.isInstancedBufferAttribute){for(let lt=0;lt<$.locationSize;lt++)p($.location+lt,nt.meshPerAttribute);C.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let lt=0;lt<$.locationSize;lt++)m($.location+lt);i.bindBuffer(i.ARRAY_BUFFER,$t);for(let lt=0;lt<$.locationSize;lt++)w($.location+lt,xt/$.locationSize,Wt,X,xt*Kt,xt/$.locationSize*lt*Kt,j)}}else if(Y!==void 0){let X=Y[rt];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv($.location,X);break;case 3:i.vertexAttrib3fv($.location,X);break;case 4:i.vertexAttrib4fv($.location,X);break;default:i.vertexAttrib1fv($.location,X)}}}}M()}function b(){E();for(let C in n){let I=n[C];for(let B in I){let D=I[B];for(let O in D){let K=D[O];for(let Y in K)h(K[Y].object),delete K[Y];delete D[O]}}delete n[C]}}function T(C){if(n[C.id]===void 0)return;let I=n[C.id];for(let B in I){let D=I[B];for(let O in D){let K=D[O];for(let Y in K)h(K[Y].object),delete K[Y];delete D[O]}}delete n[C.id]}function P(C){for(let I in n){let B=n[I];for(let D in B){let O=B[D];if(O[C.id]===void 0)continue;let K=O[C.id];for(let Y in K)h(K[Y].object),delete K[Y];delete O[C.id]}}}function y(C){for(let I in n){let B=n[I],D=C.isInstancedMesh===!0?C.id:0,O=B[D];if(O!==void 0){for(let K in O){let Y=O[K];for(let rt in Y)h(Y[rt].object),delete Y[rt];delete O[K]}delete B[D],Object.keys(B).length===0&&delete n[I]}}}function E(){R(),o=!0,r!==s&&(r=s,l(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function cg(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function hg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Gn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){let y=P===ti&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Dn&&P!==Qn&&!y&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(Qt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:w,maxFragmentUniforms:v,maxSamples:b,samples:T}}function ug(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Jn,a=new ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:n,w=M*4,v=p.clippingState||null;c.value=v,v=h(g,u,w,f);for(let b=0;b!==w;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,v=f;w!==x;++w,v+=4)o.copy(d[w]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var ir=4,dg=6,fg=20,pg=256,aa=new js,Vu=new ee,qc=null,Zc=0,Jc=0,$c=!1,mg=new U,ys=new U,dl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=mg}=r;qc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(qc,Zc,Jc),this._renderer.xr.enabled=$c,t.scissorTest=!1,nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:ti,format:Gn,colorSpace:Mr,depthBuffer:!1},s=Wu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=gg(r)),this._blurMaterial=xg(r,t,e),this._ggxMaterial=_g(r,t,e)}return s}_compileMaterial(t){let e=new se(new Ee,t);this._renderer.compile(e,aa)}_sceneToCubeUV(t,e,n,s,r){let c=new mn(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Vu),d.toneMapping=Kn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new se(new Ce,new Je({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(Vu),p=!0);for(let w=0;w<6;w++){let v=w%3;v===0?(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[w],r.y,r.z)):v===1?(c.up.set(0,0,l[w]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[w],r.z)):(c.up.set(0,l[w],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[w]));let b=this._cubeSize;nr(s,v*b,w>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(x,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===$i||t.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;nr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,aa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-ir?n-g+ir:0),p=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,nr(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,aa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,nr(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(a,aa)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-ir?s-this._lodMax+ir:0),u=4*(this._cubeSize-h);nr(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(c,aa)}};function gg(i){let t=[],e=[],n=i,s=i-ir+1+dg;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,w=p>2?0:-1,v=[M,w,0,M+2/3,w,0,M+2/3,w+1,0,M,w,0,M+2/3,w+1,0,M,w+1,0];g.set(v,f*u*p);for(let b=0;b<u;b++){let T=h[b*2]*2-1,P=h[b*2+1]*2-1;p===0?ys.set(1,P,T):p===1?ys.set(-T,1,-P):p===2?ys.set(-T,P,1):p===3?ys.set(-1,P,-T):p===4?ys.set(-T,-1,P):ys.set(T,P,-1),ys.toArray(x,(p*u+b)*f)}}let m=new Ee;m.setAttribute("position",new Fe(g,f)),m.setAttribute("outputDirection",new Fe(x,f)),e.push(new se(m,null)),n>ir&&n--}return{lodMeshes:e,sizeLods:t}}function Wu(i,t,e){let n=new Pn(i,t,e);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function nr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function _g(i,t,e){return new hn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:pg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ml(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function xg(i,t,e){return new hn({name:"SphericalGaussianBlur",defines:{SAMPLES:fg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ml(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Xu(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function Yu(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function ml(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var fl=class extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Lr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ce(5,5,5),r=new hn({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:di});r.uniforms.tEquirect.value=e;let o=new se(s,r),a=e.minFilter;return e.minFilter===Ln&&(e.minFilter=Ze),new yo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function yg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Mo||f===bo)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new fl(g.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",l),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===Mo||f===bo,x=f===$i||f===ms;if(g||x){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new dl(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||x&&M&&c(M)?(n===null&&(n=new dl(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Mo?u.mapping=$i:f===bo&&(u.mapping=ms),u}function c(u){let f=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function vg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&cs("WebGLRenderer: "+n+" extension not supported."),s}}}function Sg(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(f!==null){let M=f.array;x=f.version;for(let w=0,v=M.length;w<v;w+=3){let b=M[w+0],T=M[w+1],P=M[w+2];u.push(b,T,T,P,P,b)}}else{let M=g.array;x=g.version;for(let w=0,v=M.length/3-1;w<v;w+=3){let b=w+0,T=w+1,P=w+2;u.push(b,T,T,P,P,b)}}let m=new(g.count>=65535?Pr:Cr)(u,1);m.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Mg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function bg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:te("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Eg(i,t,e){let n=new WeakMap,s=new Ge;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let E=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let v=a.attributes.position.count*w,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*b*4*d),P=new Tr(T,v,b,d);P.type=Qn,P.needsUpdate=!0;let y=w*4;for(let R=0;R<d;R++){let C=m[R],I=p[R],B=M[R],D=v*b*4*R;for(let O=0;O<C.count;O++){let K=O*y;f===!0&&(s.fromBufferAttribute(C,O),T[D+K+0]=s.x,T[D+K+1]=s.y,T[D+K+2]=s.z,T[D+K+3]=0),g===!0&&(s.fromBufferAttribute(I,O),T[D+K+4]=s.x,T[D+K+5]=s.y,T[D+K+6]=s.z,T[D+K+7]=0),x===!0&&(s.fromBufferAttribute(B,O),T[D+K+8]=s.x,T[D+K+9]=s.y,T[D+K+10]=s.z,T[D+K+11]=B.itemSize===4?s.w:1)}}u={count:d,texture:P,size:new Dt(v,b)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Tg(i,t,e,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var wg={[vc]:"LINEAR_TONE_MAPPING",[Sc]:"REINHARD_TONE_MAPPING",[Mc]:"CINEON_TONE_MAPPING",[Kr]:"ACES_FILMIC_TONE_MAPPING",[Ec]:"AGX_TONE_MAPPING",[Tc]:"NEUTRAL_TONE_MAPPING",[bc]:"CUSTOM_TONE_MAPPING"};function Ag(i,t,e,n,s,r){let o=new Pn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new Ee;l.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new pe([0,2,0,0,2,0],2));let h=new ro({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new se(l,h),u=new js(-1,1,1,-1,0,1),f=null,g=null,x=!1,m,p=null,M=[],w=!1;this.setSize=function(v,b){o.setSize(v,b),a!==null&&a.setSize(v,b),c!==null&&c.setSize(v,b);for(let T=0;T<M.length;T++){let P=M[T];P.setSize&&P.setSize(v,b)}},this.setEffects=function(v){M=v,w=M.length>0&&M[0].isRenderPass===!0;let b=o.width,T=o.height;M.length>0&&a===null&&(a=new Pn(b,T,{type:ti,depthBuffer:!1,stencilBuffer:!1}),c=new Pn(b,T,{type:ti,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<M.length;P++){let y=M[P];y.setSize&&y.setSize(b,T)}},this.begin=function(v,b){if(x||v.toneMapping===Kn&&M.length===0)return!1;if(p=b,b!==null){let T=b.width,P=b.height;(o.width!==T||o.height!==P)&&this.setSize(T,P)}return w===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=Kn,!0},this.hasRenderPass=function(){return w},this.end=function(v,b){v.toneMapping=m,x=!0;let T=o,P=a;for(let y=0;y<M.length;y++){let E=M[y];E.enabled!==!1&&(E.render(v,P,T,b),E.needsSwap!==!1&&(T=P,P=P===a?c:a))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},xe.getTransfer(f)===Te&&(h.defines.SRGB_TRANSFER="");let y=wg[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(p),v.render(d,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var dd=new Rn,Qc=new Vi(1,1),fd=new Tr,pd=new Ka,md=new Lr,qu=[],Zu=[],Ju=new Float32Array(16),$u=new Float32Array(9),Ku=new Float32Array(4);function rr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=qu[s];if(r===void 0&&(r=new Float32Array(s),qu[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function un(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function dn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function gl(i,t){let e=Zu[t];e===void 0&&(e=new Int32Array(t),Zu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Cg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;i.uniform2fv(this.addr,t),dn(e,t)}}function Pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(un(e,t))return;i.uniform3fv(this.addr,t),dn(e,t)}}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;i.uniform4fv(this.addr,t),dn(e,t)}}function Lg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),dn(e,t)}else{if(un(e,n))return;Ku.set(n),i.uniformMatrix2fv(this.addr,!1,Ku),dn(e,n)}}function Dg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),dn(e,t)}else{if(un(e,n))return;$u.set(n),i.uniformMatrix3fv(this.addr,!1,$u),dn(e,n)}}function Ug(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),dn(e,t)}else{if(un(e,n))return;Ju.set(n),i.uniformMatrix4fv(this.addr,!1,Ju),dn(e,n)}}function Ng(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;i.uniform2iv(this.addr,t),dn(e,t)}}function Bg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;i.uniform3iv(this.addr,t),dn(e,t)}}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;i.uniform4iv(this.addr,t),dn(e,t)}}function zg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;i.uniform2uiv(this.addr,t),dn(e,t)}}function kg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;i.uniform3uiv(this.addr,t),dn(e,t)}}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;i.uniform4uiv(this.addr,t),dn(e,t)}}function Vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qc.compareFunction=e.isReversedDepthBuffer()?cl:ll,r=Qc):r=dd,e.setTexture2D(t||r,s)}function Wg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||pd,s)}function Xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||md,s)}function Yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fd,s)}function qg(i){switch(i){case 5126:return Rg;case 35664:return Cg;case 35665:return Pg;case 35666:return Ig;case 35674:return Lg;case 35675:return Dg;case 35676:return Ug;case 5124:case 35670:return Ng;case 35667:case 35671:return Fg;case 35668:case 35672:return Bg;case 35669:case 35673:return Og;case 5125:return zg;case 36294:return Hg;case 36295:return kg;case 36296:return Gg;case 35678:case 36198:case 36298:case 36306:case 35682:return Vg;case 35679:case 36299:case 36307:return Wg;case 35680:case 36300:case 36308:case 36293:return Xg;case 36289:case 36303:case 36311:case 36292:return Yg}}function Zg(i,t){i.uniform1fv(this.addr,t)}function Jg(i,t){let e=rr(t,this.size,2);i.uniform2fv(this.addr,e)}function $g(i,t){let e=rr(t,this.size,3);i.uniform3fv(this.addr,e)}function Kg(i,t){let e=rr(t,this.size,4);i.uniform4fv(this.addr,e)}function jg(i,t){let e=rr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Qg(i,t){let e=rr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function t_(i,t){let e=rr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function e_(i,t){i.uniform1iv(this.addr,t)}function n_(i,t){i.uniform2iv(this.addr,t)}function i_(i,t){i.uniform3iv(this.addr,t)}function s_(i,t){i.uniform4iv(this.addr,t)}function r_(i,t){i.uniform1uiv(this.addr,t)}function a_(i,t){i.uniform2uiv(this.addr,t)}function o_(i,t){i.uniform3uiv(this.addr,t)}function l_(i,t){i.uniform4uiv(this.addr,t)}function c_(i,t,e){let n=this.cache,s=t.length,r=gl(e,s);un(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Qc:o=dd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function h_(i,t,e){let n=this.cache,s=t.length,r=gl(e,s);un(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||pd,r[o])}function u_(i,t,e){let n=this.cache,s=t.length,r=gl(e,s);un(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||md,r[o])}function d_(i,t,e){let n=this.cache,s=t.length,r=gl(e,s);un(n,r)||(i.uniform1iv(this.addr,r),dn(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||fd,r[o])}function f_(i){switch(i){case 5126:return Zg;case 35664:return Jg;case 35665:return $g;case 35666:return Kg;case 35674:return jg;case 35675:return Qg;case 35676:return t_;case 5124:case 35670:return e_;case 35667:case 35671:return n_;case 35668:case 35672:return i_;case 35669:case 35673:return s_;case 5125:return r_;case 36294:return a_;case 36295:return o_;case 36296:return l_;case 35678:case 36198:case 36298:case 36306:case 35682:return c_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return u_;case 36289:case 36303:case 36311:case 36292:return d_}}var th=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=qg(e.type)}},eh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=f_(e.type)}},nh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Kc=/(\w+)(\])?(\[|\.)?/g;function ju(i,t){i.seq.push(t),i.map[t.id]=t}function p_(i,t,e){let n=i.name,s=n.length;for(Kc.lastIndex=0;;){let r=Kc.exec(n),o=Kc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){ju(e,l===void 0?new th(a,i,t):new eh(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new nh(a),ju(e,d)),e=d}}}var sr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);p_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Qu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var m_=37297,g_=0;function __(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var td=new ie;function x_(i){xe._getMatrix(td,xe.workingColorSpace,i);let t=`mat3( ${td.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(i)){case br:return[t,"LinearTransferOETF"];case Te:return[t,"sRGBTransferOETF"];default:return Qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ed(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+__(i.getShaderSource(t),a)}else return r}function y_(i,t){let e=x_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var v_={[vc]:"Linear",[Sc]:"Reinhard",[Mc]:"Cineon",[Kr]:"ACESFilmic",[Ec]:"AgX",[Tc]:"Neutral",[bc]:"Custom"};function S_(i,t){let e=v_[t];return e===void 0?(Qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ul=new U;function M_(){xe.getLuminanceCoefficients(ul);let i=ul.x.toFixed(4),t=ul.y.toFixed(4),e=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function b_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function E_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function T_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function la(i){return i!==""}function nd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function id(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var w_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(i){return i.replace(w_,R_)}var A_=new Map;function R_(i,t){let e=oe[t];if(e===void 0){let n=A_.get(t);if(n!==void 0)e=oe[n],Qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ih(e)}var C_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sd(i){return i.replace(C_,P_)}function P_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var I_={[$r]:"SHADOWMAP_TYPE_PCF",[Qs]:"SHADOWMAP_TYPE_VSM"};function L_(i){return I_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var D_={[$i]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE_UV"};function U_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":D_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var N_={[ms]:"ENVMAP_MODE_REFRACTION"};function F_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":N_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var B_={[yc]:"ENVMAP_BLENDING_MULTIPLY",[xu]:"ENVMAP_BLENDING_MIX",[yu]:"ENVMAP_BLENDING_ADD"};function O_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":B_[i.combine]||"ENVMAP_BLENDING_NONE"}function z_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function H_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=L_(e),l=U_(e),h=F_(e),d=O_(e),u=z_(e),f=b_(e),g=E_(r),x=s.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(la).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(la).join(`
`),p.length>0&&(p+=`
`)):(m=[rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),p=[rd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Kn?"#define TONE_MAPPING":"",e.toneMapping!==Kn?oe.tonemapping_pars_fragment:"",e.toneMapping!==Kn?S_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,y_("linearToOutputTexel",e.outputColorSpace),M_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(la).join(`
`)),o=ih(o),o=nd(o,e),o=id(o,e),a=ih(a),a=nd(a,e),a=id(a,e),o=sd(o),a=sd(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=M+m+o,v=M+p+a,b=Qu(s,s.VERTEX_SHADER,w),T=Qu(s,s.FRAGMENT_SHADER,v);s.attachShader(x,b),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(C){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(x)||"",B=s.getShaderInfoLog(b)||"",D=s.getShaderInfoLog(T)||"",O=I.trim(),K=B.trim(),Y=D.trim(),rt=!0,$=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(rt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,T);else{let nt=ed(s,b,"vertex"),X=ed(s,T,"fragment");te("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+nt+`
`+X)}else O!==""?Qt("WebGLProgram: Program Info Log:",O):(K===""||Y==="")&&($=!1);$&&(C.diagnostics={runnable:rt,programLog:O,vertexShader:{log:K,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(b),s.deleteShader(T),y=new sr(s,x),E=T_(s,x)}let y;this.getUniforms=function(){return y===void 0&&P(this),y};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,m_)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=g_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=T,this}var k_=0,sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rh(t),e.set(t,n)),n}},rh=class{constructor(t){this.id=k_++,this.code=t,this.usedTimes=0}};function G_(i){return i===ji||i===sa||i===ra}function V_(i,t,e,n,s,r){let o=new wr,a=new sh,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,E,R,C,I,B){let D=C.fog,O=I.geometry,K=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?C.environment:null,Y=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,rt=t.get(y.envMap||K,Y),$=rt&&rt.mapping===jr?rt.image.height:null,nt=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&Qt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let X=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,xt=X!==void 0?X.length:0,gt=0;O.morphAttributes.position!==void 0&&(gt=1),O.morphAttributes.normal!==void 0&&(gt=2),O.morphAttributes.color!==void 0&&(gt=3);let $t,Wt,Kt,j;if(nt){let ye=pi[nt];$t=ye.vertexShader,Wt=ye.fragmentShader}else{$t=y.vertexShader,Wt=y.fragmentShader;let ye=a.getVertexShaderStage(y),ce=a.getFragmentShaderStage(y);a.update(y,ye,ce),Kt=ye.id,j=ce.id}let lt=i.getRenderTarget(),Ct=i.state.buffers.depth.getReversed(),Xt=I.isInstancedMesh===!0,Nt=I.isBatchedMesh===!0,Yt=!!y.map,de=!!y.matcap,st=!!rt,k=!!y.aoMap,J=!!y.lightMap,tt=!!y.bumpMap&&y.wireframe===!1,ht=!!y.normalMap,Et=!!y.displacementMap,pt=!!y.emissiveMap,ft=!!y.metalnessMap,Mt=!!y.roughnessMap,L=y.anisotropy>0,Vt=y.clearcoat>0,Ot=y.dispersion>0,A=y.retroreflectivity>0,_=y.iridescence>0,H=y.sheen>0,G=y.transmission>0,q=L&&!!y.anisotropyMap,dt=Vt&&!!y.clearcoatMap,mt=Vt&&!!y.clearcoatNormalMap,Q=Vt&&!!y.clearcoatRoughnessMap,at=_&&!!y.iridescenceMap,_t=_&&!!y.iridescenceThicknessMap,zt=H&&!!y.sheenColorMap,St=H&&!!y.sheenRoughnessMap,Tt=!!y.specularMap,It=!!y.specularColorMap,Zt=!!y.specularIntensityMap,jt=G&&!!y.transmissionMap,N=G&&!!y.thicknessMap,ut=!!y.gradientMap,et=!!y.alphaMap,bt=y.alphaTest>0,yt=!!y.alphaHash,ct=!!y.extensions,kt=Kn;y.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(kt=i.toneMapping);let it={shaderID:nt,shaderType:y.type,shaderName:y.name,vertexShader:$t,fragmentShader:Wt,defines:y.defines,customVertexShaderID:Kt,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Nt,batchingColor:Nt&&I._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&I.instanceColor!==null,instancingMorph:Xt&&I.morphTexture!==null,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:xe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:Yt,matcap:de,envMap:st,envMapMode:st&&rt.mapping,envMapCubeUVHeight:$,aoMap:k,lightMap:J,bumpMap:tt,normalMap:ht,displacementMap:Et,emissiveMap:pt,normalMapObjectSpace:ht&&y.normalMapType===Mu,normalMapTangentSpace:ht&&y.normalMapType===ol,packedNormalMap:ht&&y.normalMapType===ol&&G_(y.normalMap.format),metalnessMap:ft,roughnessMap:Mt,anisotropy:L,anisotropyMap:q,clearcoat:Vt,clearcoatMap:dt,clearcoatNormalMap:mt,clearcoatRoughnessMap:Q,dispersion:Ot,retroreflection:A,iridescence:_,iridescenceMap:at,iridescenceThicknessMap:_t,sheen:H,sheenColorMap:zt,sheenRoughnessMap:St,specularMap:Tt,specularColorMap:It,specularIntensityMap:Zt,transmission:G,transmissionMap:jt,thicknessMap:N,gradientMap:ut,opaque:y.transparent===!1&&y.blending===Ri&&y.alphaToCoverage===!1,alphaMap:et,alphaTest:bt,alphaHash:yt,combine:y.combine,mapUv:Yt&&g(y.map.channel),aoMapUv:k&&g(y.aoMap.channel),lightMapUv:J&&g(y.lightMap.channel),bumpMapUv:tt&&g(y.bumpMap.channel),normalMapUv:ht&&g(y.normalMap.channel),displacementMapUv:Et&&g(y.displacementMap.channel),emissiveMapUv:pt&&g(y.emissiveMap.channel),metalnessMapUv:ft&&g(y.metalnessMap.channel),roughnessMapUv:Mt&&g(y.roughnessMap.channel),anisotropyMapUv:q&&g(y.anisotropyMap.channel),clearcoatMapUv:dt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:mt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:St&&g(y.sheenRoughnessMap.channel),specularMapUv:Tt&&g(y.specularMap.channel),specularColorMapUv:It&&g(y.specularColorMap.channel),specularIntensityMapUv:Zt&&g(y.specularIntensityMap.channel),transmissionMapUv:jt&&g(y.transmissionMap.channel),thicknessMapUv:N&&g(y.thicknessMap.channel),alphaMapUv:et&&g(y.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ht||L),vertexNormals:!!O.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(Yt||et),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||O.attributes.normal===void 0&&ht===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ct,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:gt,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:Yt&&y.map.isVideoTexture===!0&&xe.getTransfer(y.map.colorSpace)===Te,decodeVideoTextureEmissive:pt&&y.emissiveMap.isVideoTexture===!0&&xe.getTransfer(y.emissiveMap.colorSpace)===Te,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===De,flipSided:y.side===yn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ct&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ct&&y.extensions.multiDraw===!0||Nt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return it.vertexUv1s=c.has(1),it.vertexUv2s=c.has(2),it.vertexUv3s=c.has(3),c.clear(),it}function m(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let R in y.defines)E.push(R),E.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(p(E,y),M(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function p(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function M(y,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function w(y){let E=f[y.type],R;if(E){let C=pi[E];R=Hu.clone(C.uniforms)}else R=y.uniforms;return R}function v(y,E){let R=h.get(E);return R!==void 0?++R.usedTimes:(R=new H_(i,E,y,s),l.push(R),h.set(E,R)),R}function b(y){if(--y.usedTimes===0){let E=l.indexOf(y);l[E]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function P(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:b,releaseShaderCache:T,programs:l,dispose:P}}function W_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function X_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ad(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function od(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,x,m,p){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},i[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=o(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=m,M.group=p),t++,M}function c(u,f,g,x,m,p,M){M.reversedDepth===!0&&(m=-m);let w=a(u,f,g,x,m,p);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):e.push(w)}function l(u,f,g,x,m,p){let M=a(u,f,g,x,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||X_),n.length>1&&n.sort(f||ad),s.length>1&&s.sort(f||ad)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function Y_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new od,i.set(n,[o])):s>=r.length?(o=new od,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function q_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new ee};break;case"SpotLight":e={position:new U,direction:new U,color:new ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new ee,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new ee,groundColor:new ee};break;case"RectAreaLight":e={color:new ee,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Z_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var J_=0;function $_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function K_(i){let t=new q_,e=Z_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);let s=new U,r=new ke,o=new ke;function a(l){let h=0,d=0,u=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,M=0,w=0,v=0,b=0,T=0,P=0,y=0,E=0,R=0;l.sort($_);for(let I=0,B=l.length;I<B;I++){let D=l[I],O=D.color,K=D.intensity,Y=D.distance,rt=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ji?rt=D.shadow.map.texture:rt=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=O.r*K,d+=O.g*K,u+=O.b*K;else if(D.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(D.sh.coefficients[$],K);R++}else if(D.isSunLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let nt=D.shadow,X=e.get(D);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[g]=X,n.sunShadowMap[g]=rt;let xt=nt.getViewportCount();for(let gt=0;gt<xt;gt++)n.sunShadowMatrix[x+gt]=nt.getMatrix(gt),n.sunShadowCascade[x+gt]=nt._cascadeData[gt];x+=xt,g++}n.sun[f]=$,f++}else if(D.isDirectionalLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let nt=D.shadow,X=e.get(D);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,n.directionalShadow[m]=X,n.directionalShadowMap[m]=rt,n.directionalShadowMatrix[m]=D.shadow.matrix,b++}n.directional[m]=$,m++}else if(D.isSpotLight){let $=t.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(O).multiplyScalar(K),$.distance=Y,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,n.spot[M]=$;let nt=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,nt.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[M]=nt.matrix,D.castShadow){let X=e.get(D);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,n.spotShadow[M]=X,n.spotShadowMap[M]=rt,P++}M++}else if(D.isRectAreaLight){let $=t.get(D);$.color.copy(O).multiplyScalar(K),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),n.rectArea[w]=$,w++}else if(D.isPointLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){let nt=D.shadow,X=e.get(D);X.shadowIntensity=nt.intensity,X.shadowBias=nt.bias,X.shadowNormalBias=nt.normalBias,X.shadowRadius=nt.radius,X.shadowMapSize=nt.mapSize,X.shadowCameraNear=nt.camera.near,X.shadowCameraFar=nt.camera.far,n.pointShadow[p]=X,n.pointShadowMap[p]=rt,n.pointShadowMatrix[p]=D.shadow.matrix,T++}n.point[p]=$,p++}else if(D.isHemisphereLight){let $=t.get(D);$.skyColor.copy(D.color).multiplyScalar(K),$.groundColor.copy(D.groundColor).multiplyScalar(K),n.hemi[v]=$,v++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ft.LTC_FLOAT_1,n.rectAreaLTC2=Ft.LTC_FLOAT_2):(n.rectAreaLTC1=Ft.LTC_HALF_1,n.rectAreaLTC2=Ft.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let C=n.hash;(C.sunLength!==f||C.directionalLength!==m||C.pointLength!==p||C.spotLength!==M||C.rectAreaLength!==w||C.hemiLength!==v||C.numSunShadows!==g||C.numDirectionalShadows!==b||C.numPointShadows!==T||C.numSpotShadows!==P||C.numSpotMaps!==y||C.numLightProbes!==R)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=w,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,C.sunLength=f,C.directionalLength=m,C.pointLength=p,C.spotLength=M,C.rectAreaLength=w,C.hemiLength=v,C.numSunShadows=g,C.numDirectionalShadows=b,C.numPointShadows=T,C.numSpotShadows=P,C.numSpotMaps=y,C.numLightProbes=R,n.version=J_++)}function c(l,h){let d=0,u=0,f=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let M=0,w=l.length;M<w;M++){let v=l[M];if(v.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(v.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:n}}function ld(i){let t=new K_(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function j_(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new ld(i),t.set(s,[a])):r>=o.length?(a=new ld(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tx=`uniform sampler2D shadow_pass;
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
}`,ex=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],nx=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],cd=new ke,oa=new U,jc=new U;function ix(i,t,e){let n=new qs,s=new Dt,r=new Dt,o=new Ge,a=new ao,c=new oo,l={},h=e.maxTextureSize,d={[Ji]:yn,[yn]:Ji,[De]:De},u=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:Q_,fragmentShader:tx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Ee;g.setAttribute("position",new Fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new se(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$r;let p=this.type;this.render=function(T,P,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Qh&&(Qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$r);let E=i.getRenderTarget(),R=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),I=i.state;I.setBlending(di),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let B=p!==this.type;B&&P.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(O=>O.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,O=T.length;D<O;D++){let K=T[D],Y=K.shadow;if(Y===void 0){Qt("WebGLShadowMap:",K,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let rt=Y.getFrameExtents();s.multiply(rt),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/rt.x),s.x=r.x*rt.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/rt.y),s.y=r.y*rt.y,Y.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=$,Y.map===null||B===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Qs){if(K.isPointLight){Qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Pn(s.x,s.y,{format:ji,type:ti,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),Y.map.texture.name=K.name+".shadowMap",Y.map.depthTexture=new Vi(s.x,s.y,Qn),Y.map.depthTexture.name=K.name+".shadowMapDepth",Y.map.depthTexture.format=oi,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=gn,Y.map.depthTexture.magFilter=gn}else K.isPointLight?(Y.map=new fl(s.x),Y.map.depthTexture=new Qa(s.x,jn)):(Y.map=new Pn(s.x,s.y),Y.map.depthTexture=new Vi(s.x,s.y,jn)),Y.map.depthTexture.name=K.name+".shadowMap",Y.map.depthTexture.format=oi,this.type===$r?(Y.map.depthTexture.compareFunction=$?cl:ll,Y.map.depthTexture.minFilter=Ze,Y.map.depthTexture.magFilter=Ze):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=gn,Y.map.depthTexture.magFilter=gn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let nt=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();K.isPointLight!==!0&&Y.updateMatrices(K,y);for(let X=0;X<nt;X++){let xt=Y.getCamera(X);if(K.isPointLight){let gt=Y.camera,$t=Y.matrix,Wt=K.distance||gt.far;Wt!==gt.far&&(gt.far=Wt,gt.updateProjectionMatrix()),oa.setFromMatrixPosition(K.matrixWorld),gt.position.copy(oa),jc.copy(gt.position),jc.add(ex[X]),gt.up.copy(nx[X]),gt.lookAt(jc),gt.updateMatrixWorld(),$t.makeTranslation(-oa.x,-oa.y,-oa.z),cd.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(cd,gt.coordinateSystem,gt.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)i.setRenderTarget(Y.map,X),i.clear();else{X===0&&(i.setRenderTarget(Y.map),i.clear());let gt=Y.getViewport(X);o.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),I.viewport(o)}n=Y.getFrustum(X),v(P,y,xt,K,this.type)}Y.isPointLightShadow!==!0&&this.type===Qs&&M(Y,y),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,R,C)};function M(T,P){let y=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Pn(s.x,s.y,{format:ji,type:ti}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,y,u,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,y,f,x,null)}function w(T,P,y,E){let R=null,C=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)R=C;else if(R=y.isPointLight===!0?c:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let I=R.uuid,B=P.uuid,D=l[I];D===void 0&&(D={},l[I]=D);let O=D[B];O===void 0&&(O=R.clone(),D[B]=O,P.addEventListener("dispose",b)),R=O}if(R.visible=P.visible,R.wireframe=P.wireframe,E===Qs?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:d[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let I=i.properties.get(R);I.light=y}return R}function v(T,P,y,E,R){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===Qs)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let B=t.update(T),D=T.material;if(Array.isArray(D)){let O=B.groups;for(let K=0,Y=O.length;K<Y;K++){let rt=O[K],$=D[rt.materialIndex];if($&&$.visible){let nt=w(T,$,E,R);T.onBeforeShadow(i,T,P,y,B,nt,rt),i.renderBufferDirect(y,null,B,nt,T,rt),T.onAfterShadow(i,T,P,y,B,nt,rt)}}}else if(D.visible){let O=w(T,D,E,R);T.onBeforeShadow(i,T,P,y,B,O,null),i.renderBufferDirect(y,null,B,O,T,null),T.onAfterShadow(i,T,P,y,B,O,null)}}let I=T.children;for(let B=0,D=I.length;B<D;B++)v(I[B],P,y,E,R)}function b(T){T.target.removeEventListener("dispose",b);for(let y in l){let E=l[y],R=T.target.uuid;R in E&&(E[R].dispose(),delete E[R])}}}function sx(i,t){function e(){let N=!1,ut=new Ge,et=null,bt=new Ge(0,0,0,0);return{setMask:function(yt){et!==yt&&!N&&(i.colorMask(yt,yt,yt,yt),et=yt)},setLocked:function(yt){N=yt},setClear:function(yt,ct,kt,it,ye){ye===!0&&(yt*=it,ct*=it,kt*=it),ut.set(yt,ct,kt,it),bt.equals(ut)===!1&&(i.clearColor(yt,ct,kt,it),bt.copy(ut))},reset:function(){N=!1,et=null,bt.set(-1,0,0,0)}}}function n(){let N=!1,ut=!1,et=null,bt=null,yt=null;return{setReversed:function(ct){if(ut!==ct){let kt=t.get("EXT_clip_control");ct?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),ut=ct;let it=yt;yt=null,this.setClear(it)}},getReversed:function(){return ut},setTest:function(ct){ct?lt(i.DEPTH_TEST):Ct(i.DEPTH_TEST)},setMask:function(ct){et!==ct&&!N&&(i.depthMask(ct),et=ct)},setFunc:function(ct){if(ut&&(ct=Uu[ct]),bt!==ct){switch(ct){case Ha:i.depthFunc(i.NEVER);break;case ka:i.depthFunc(i.ALWAYS);break;case Ga:i.depthFunc(i.LESS);break;case Gs:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case Wa:i.depthFunc(i.GEQUAL);break;case Xa:i.depthFunc(i.GREATER);break;case Ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=ct}},setLocked:function(ct){N=ct},setClear:function(ct){yt!==ct&&(yt=ct,ut&&(ct=1-ct),i.clearDepth(ct))},reset:function(){N=!1,et=null,bt=null,yt=null,ut=!1}}}function s(){let N=!1,ut=null,et=null,bt=null,yt=null,ct=null,kt=null,it=null,ye=null;return{setTest:function(ce){N||(ce?lt(i.STENCIL_TEST):Ct(i.STENCIL_TEST))},setMask:function(ce){ut!==ce&&!N&&(i.stencilMask(ce),ut=ce)},setFunc:function(ce,ze,cn){(et!==ce||bt!==ze||yt!==cn)&&(i.stencilFunc(ce,ze,cn),et=ce,bt=ze,yt=cn)},setOp:function(ce,ze,cn){(ct!==ce||kt!==ze||it!==cn)&&(i.stencilOp(ce,ze,cn),ct=ce,kt=ze,it=cn)},setLocked:function(ce){N=ce},setClear:function(ce){ye!==ce&&(i.clearStencil(ce),ye=ce)},reset:function(){N=!1,ut=null,et=null,bt=null,yt=null,ct=null,kt=null,it=null,ye=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,M=null,w=null,v=null,b=null,T=null,P=null,y=new ee(0,0,0),E=0,R=!1,C=null,I=null,B=null,D=null,O=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,rt=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=rt>=1):$.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=rt>=2);let nt=null,X={},xt=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),$t=new Ge().fromArray(xt),Wt=new Ge().fromArray(gt);function Kt(N,ut,et,bt){let yt=new Uint8Array(4),ct=i.createTexture();i.bindTexture(N,ct),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let kt=0;kt<et;kt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,yt):i.texImage2D(ut+kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,yt);return ct}let j={};j[i.TEXTURE_2D]=Kt(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=Kt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=Kt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=Kt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(i.DEPTH_TEST),o.setFunc(Gs),tt(!1),ht(pc),lt(i.CULL_FACE),k(di);function lt(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function Ct(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Xt(N,ut){return u[N]!==ut?(i.bindFramebuffer(N,ut),u[N]=ut,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ut),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function Nt(N,ut){let et=g,bt=!1;if(N){et=f.get(ut),et===void 0&&(et=[],f.set(ut,et));let yt=N.textures;if(et.length!==yt.length||et[0]!==i.COLOR_ATTACHMENT0){for(let ct=0,kt=yt.length;ct<kt;ct++)et[ct]=i.COLOR_ATTACHMENT0+ct;et.length=yt.length,bt=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,bt=!0);bt&&i.drawBuffers(et)}function Yt(N){return x!==N?(i.useProgram(N),x=N,!0):!1}let de={[ps]:i.FUNC_ADD,[eu]:i.FUNC_SUBTRACT,[nu]:i.FUNC_REVERSE_SUBTRACT};de[iu]=i.MIN,de[su]=i.MAX;let st={[ru]:i.ZERO,[au]:i.ONE,[ou]:i.SRC_COLOR,[_c]:i.SRC_ALPHA,[fu]:i.SRC_ALPHA_SATURATE,[uu]:i.DST_COLOR,[cu]:i.DST_ALPHA,[lu]:i.ONE_MINUS_SRC_COLOR,[xc]:i.ONE_MINUS_SRC_ALPHA,[du]:i.ONE_MINUS_DST_COLOR,[hu]:i.ONE_MINUS_DST_ALPHA,[pu]:i.CONSTANT_COLOR,[mu]:i.ONE_MINUS_CONSTANT_COLOR,[gu]:i.CONSTANT_ALPHA,[_u]:i.ONE_MINUS_CONSTANT_ALPHA};function k(N,ut,et,bt,yt,ct,kt,it,ye,ce){if(N===di){m===!0&&(Ct(i.BLEND),m=!1);return}if(m===!1&&(lt(i.BLEND),m=!0),N!==tu){if(N!==p||ce!==R){if((M!==ps||b!==ps)&&(i.blendEquation(i.FUNC_ADD),M=ps,b=ps),ce)switch(N){case Ri:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case In:i.blendFunc(i.ONE,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:te("WebGLState: Invalid blending: ",N);break}else switch(N){case Ri:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case In:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case mc:te("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gc:te("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:te("WebGLState: Invalid blending: ",N);break}w=null,v=null,T=null,P=null,y.set(0,0,0),E=0,p=N,R=ce}return}yt=yt||ut,ct=ct||et,kt=kt||bt,(ut!==M||yt!==b)&&(i.blendEquationSeparate(de[ut],de[yt]),M=ut,b=yt),(et!==w||bt!==v||ct!==T||kt!==P)&&(i.blendFuncSeparate(st[et],st[bt],st[ct],st[kt]),w=et,v=bt,T=ct,P=kt),(it.equals(y)===!1||ye!==E)&&(i.blendColor(it.r,it.g,it.b,ye),y.copy(it),E=ye),p=N,R=!1}function J(N,ut){N.side===De?Ct(i.CULL_FACE):lt(i.CULL_FACE);let et=N.side===yn;ut&&(et=!et),tt(et),N.blending===Ri&&N.transparent===!1?k(di):k(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let bt=N.stencilWrite;a.setTest(bt),bt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),pt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):Ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(N){C!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),C=N)}function ht(N){N!==Kh?(lt(i.CULL_FACE),N!==I&&(N===pc?i.cullFace(i.BACK):N===jh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ct(i.CULL_FACE),I=N}function Et(N){N!==B&&(Y&&i.lineWidth(N),B=N)}function pt(N,ut,et){N?(lt(i.POLYGON_OFFSET_FILL),(D!==ut||O!==et)&&(D=ut,O=et,o.getReversed()&&(ut=-ut),i.polygonOffset(ut,et))):Ct(i.POLYGON_OFFSET_FILL)}function ft(N){N?lt(i.SCISSOR_TEST):Ct(i.SCISSOR_TEST)}function Mt(N){N===void 0&&(N=i.TEXTURE0+K-1),nt!==N&&(i.activeTexture(N),nt=N)}function L(N,ut,et){et===void 0&&(nt===null?et=i.TEXTURE0+K-1:et=nt);let bt=X[et];bt===void 0&&(bt={type:void 0,texture:void 0},X[et]=bt),(bt.type!==N||bt.texture!==ut)&&(nt!==et&&(i.activeTexture(et),nt=et),i.bindTexture(N,ut||j[N]),bt.type=N,bt.texture=ut)}function Vt(){let N=X[nt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Ot(){try{i.compressedTexImage2D(...arguments)}catch(N){te("WebGLState:",N)}}function A(){try{i.compressedTexImage3D(...arguments)}catch(N){te("WebGLState:",N)}}function _(){try{i.texSubImage2D(...arguments)}catch(N){te("WebGLState:",N)}}function H(){try{i.texSubImage3D(...arguments)}catch(N){te("WebGLState:",N)}}function G(){try{i.compressedTexSubImage2D(...arguments)}catch(N){te("WebGLState:",N)}}function q(){try{i.compressedTexSubImage3D(...arguments)}catch(N){te("WebGLState:",N)}}function dt(){try{i.texStorage2D(...arguments)}catch(N){te("WebGLState:",N)}}function mt(){try{i.texStorage3D(...arguments)}catch(N){te("WebGLState:",N)}}function Q(){try{i.texImage2D(...arguments)}catch(N){te("WebGLState:",N)}}function at(){try{i.texImage3D(...arguments)}catch(N){te("WebGLState:",N)}}function _t(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function zt(N,ut){d[N]!==ut&&(i.pixelStorei(N,ut),d[N]=ut)}function St(N){$t.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),$t.copy(N))}function Tt(N){Wt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Wt.copy(N))}function It(N,ut){let et=l.get(ut);et===void 0&&(et=new WeakMap,l.set(ut,et));let bt=et.get(N);bt===void 0&&(bt=i.getUniformBlockIndex(ut,N.name),et.set(N,bt))}function Zt(N,ut){let bt=l.get(ut).get(N);c.get(ut)!==bt&&(i.uniformBlockBinding(ut,bt,N.__bindingPointIndex),c.set(ut,bt))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},nt=null,X={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,M=null,w=null,v=null,b=null,T=null,P=null,y=new ee(0,0,0),E=0,R=!1,C=null,I=null,B=null,D=null,O=null,$t.set(0,0,i.canvas.width,i.canvas.height),Wt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:Ct,bindFramebuffer:Xt,drawBuffers:Nt,useProgram:Yt,setBlending:k,setMaterial:J,setFlipSided:tt,setCullFace:ht,setLineWidth:Et,setPolygonOffset:pt,setScissorTest:ft,activeTexture:Mt,bindTexture:L,unbindTexture:Vt,compressedTexImage2D:Ot,compressedTexImage3D:A,texImage2D:Q,texImage3D:at,pixelStorei:zt,getParameter:_t,updateUBOMapping:It,uniformBlockBinding:Zt,texStorage2D:dt,texStorage3D:mt,texSubImage2D:_,texSubImage3D:H,compressedTexSubImage2D:G,compressedTexSubImage3D:q,scissor:St,viewport:Tt,reset:jt}}function rx(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Dt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,_){return g?new OffscreenCanvas(A,_):Er("canvas")}function m(A,_,H){let G=1,q=Ot(A);if((q.width>H||q.height>H)&&(G=H/Math.max(q.width,q.height)),G<1)if(typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&A instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&A instanceof ImageBitmap||typeof VideoFrame!="undefined"&&A instanceof VideoFrame){let dt=Math.floor(G*q.width),mt=Math.floor(G*q.height);u===void 0&&(u=x(dt,mt));let Q=_?x(dt,mt):u;return Q.width=dt,Q.height=mt,Q.getContext("2d").drawImage(A,0,0,dt,mt),Qt("WebGLRenderer: Texture has been resized from ("+q.width+"x"+q.height+") to ("+dt+"x"+mt+")."),Q}else return"data"in A&&Qt("WebGLRenderer: Image in DataTexture is too big ("+q.width+"x"+q.height+")."),A;return A}function p(A){return A.generateMipmaps}function M(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,_,H,G,q,dt=!1){if(A!==null){if(i[A]!==void 0)return i[A];Qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let mt;G&&(mt=t.get("EXT_texture_norm16"),mt||Qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=_;if(_===i.RED&&(H===i.FLOAT&&(Q=i.R32F),H===i.HALF_FLOAT&&(Q=i.R16F),H===i.UNSIGNED_BYTE&&(Q=i.R8),H===i.UNSIGNED_SHORT&&mt&&(Q=mt.R16_EXT),H===i.SHORT&&mt&&(Q=mt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.R8UI),H===i.UNSIGNED_SHORT&&(Q=i.R16UI),H===i.UNSIGNED_INT&&(Q=i.R32UI),H===i.BYTE&&(Q=i.R8I),H===i.SHORT&&(Q=i.R16I),H===i.INT&&(Q=i.R32I)),_===i.RG&&(H===i.FLOAT&&(Q=i.RG32F),H===i.HALF_FLOAT&&(Q=i.RG16F),H===i.UNSIGNED_BYTE&&(Q=i.RG8),H===i.UNSIGNED_SHORT&&mt&&(Q=mt.RG16_EXT),H===i.SHORT&&mt&&(Q=mt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RG8UI),H===i.UNSIGNED_SHORT&&(Q=i.RG16UI),H===i.UNSIGNED_INT&&(Q=i.RG32UI),H===i.BYTE&&(Q=i.RG8I),H===i.SHORT&&(Q=i.RG16I),H===i.INT&&(Q=i.RG32I)),_===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),H===i.UNSIGNED_INT&&(Q=i.RGB32UI),H===i.BYTE&&(Q=i.RGB8I),H===i.SHORT&&(Q=i.RGB16I),H===i.INT&&(Q=i.RGB32I)),_===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),H===i.UNSIGNED_INT&&(Q=i.RGBA32UI),H===i.BYTE&&(Q=i.RGBA8I),H===i.SHORT&&(Q=i.RGBA16I),H===i.INT&&(Q=i.RGBA32I)),_===i.RGB&&(H===i.UNSIGNED_SHORT&&mt&&(Q=mt.RGB16_EXT),H===i.SHORT&&mt&&(Q=mt.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),_===i.RGBA){let at=dt?br:xe.getTransfer(q);H===i.FLOAT&&(Q=i.RGBA32F),H===i.HALF_FLOAT&&(Q=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Q=at===Te?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&mt&&(Q=mt.RGBA16_EXT),H===i.SHORT&&mt&&(Q=mt.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function b(A,_){let H;return A?_===null||_===jn||_===er?H=i.DEPTH24_STENCIL8:_===Qn?H=i.DEPTH32F_STENCIL8:_===tr&&(H=i.DEPTH24_STENCIL8,Qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===jn||_===er?H=i.DEPTH_COMPONENT24:_===Qn?H=i.DEPTH_COMPONENT32F:_===tr&&(H=i.DEPTH_COMPONENT16),H}function T(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==gn&&A.minFilter!==Ze?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function P(A){let _=A.target;_.removeEventListener("dispose",P),E(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function y(A){let _=A.target;_.removeEventListener("dispose",y),C(_)}function E(A){let _=n.get(A);if(_.__webglInit===void 0)return;let H=A.source,G=f.get(H);if(G){let q=G[_.__cacheKey];q.usedTimes--,q.usedTimes===0&&R(A),Object.keys(G).length===0&&f.delete(H)}n.remove(A)}function R(A){let _=n.get(A);i.deleteTexture(_.__webglTexture);let H=A.source,G=f.get(H);delete G[_.__cacheKey],o.memory.textures--}function C(A){let _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(_.__webglFramebuffer[G]))for(let q=0;q<_.__webglFramebuffer[G].length;q++)i.deleteFramebuffer(_.__webglFramebuffer[G][q]);else i.deleteFramebuffer(_.__webglFramebuffer[G]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[G])}else{if(Array.isArray(_.__webglFramebuffer))for(let G=0;G<_.__webglFramebuffer.length;G++)i.deleteFramebuffer(_.__webglFramebuffer[G]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let G=0;G<_.__webglColorRenderbuffer.length;G++)_.__webglColorRenderbuffer[G]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[G]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let H=A.textures;for(let G=0,q=H.length;G<q;G++){let dt=n.get(H[G]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove(H[G])}n.remove(A)}let I=0;function B(){I=0}function D(){return I}function O(A){I=A}function K(){let A=I;return A>=s.maxTextures&&Qt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),I+=1,A}function Y(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function rt(A,_){let H=n.get(A);if(A.isVideoTexture&&L(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&H.__version!==A.version){let G=A.image;if(G===null)Qt("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Qt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(H,A,_);return}}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+_)}function $(A,_){let H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Ct(H,A,_);return}else A.isExternalTexture&&(H.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+_)}function nt(A,_){let H=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){Ct(H,A,_);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+_)}function X(A,_){let H=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&H.__version!==A.version){Xt(H,A,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+_)}let xt={[ai]:i.REPEAT,[ri]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},gt={[gn]:i.NEAREST,[vu]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[Eo]:i.LINEAR_MIPMAP_NEAREST,[Ln]:i.LINEAR_MIPMAP_LINEAR},$t={[Eu]:i.NEVER,[Cu]:i.ALWAYS,[Tu]:i.LESS,[ll]:i.LEQUAL,[wu]:i.EQUAL,[cl]:i.GEQUAL,[Au]:i.GREATER,[Ru]:i.NOTEQUAL};function Wt(A,_){if(_.type===Qn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ze||_.magFilter===Eo||_.magFilter===Qr||_.magFilter===Ln||_.minFilter===Ze||_.minFilter===Eo||_.minFilter===Qr||_.minFilter===Ln)&&Qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,xt[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,xt[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,xt[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,gt[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,gt[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,$t[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===gn||_.minFilter!==Qr&&_.minFilter!==Ln||_.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Kt(A,_){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",P));let G=_.source,q=f.get(G);q===void 0&&(q={},f.set(G,q));let dt=Y(_);if(dt!==A.__cacheKey){q[dt]===void 0&&(q[dt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),q[dt].usedTimes++;let mt=q[A.__cacheKey];mt!==void 0&&(q[A.__cacheKey].usedTimes--,mt.usedTimes===0&&R(_)),A.__cacheKey=dt,A.__webglTexture=q[dt].texture}return H}function j(A,_,H){return Math.floor(Math.floor(A/H)/_)}function lt(A,_,H,G){let dt=A.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,H,G,_.data);else{dt.sort((zt,St)=>zt.start-St.start);let mt=0;for(let zt=1;zt<dt.length;zt++){let St=dt[mt],Tt=dt[zt],It=St.start+St.count,Zt=j(Tt.start,_.width,4),jt=j(St.start,_.width,4);Tt.start<=It+1&&Zt===jt&&j(Tt.start+Tt.count-1,_.width,4)===Zt?St.count=Math.max(St.count,Tt.start+Tt.count-St.start):(++mt,dt[mt]=Tt)}dt.length=mt+1;let Q=e.getParameter(i.UNPACK_ROW_LENGTH),at=e.getParameter(i.UNPACK_SKIP_PIXELS),_t=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let zt=0,St=dt.length;zt<St;zt++){let Tt=dt[zt],It=Math.floor(Tt.start/4),Zt=Math.ceil(Tt.count/4),jt=It%_.width,N=Math.floor(It/_.width),ut=Zt,et=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,N),e.texSubImage2D(i.TEXTURE_2D,0,jt,N,ut,et,H,G,_.data)}A.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Q),e.pixelStorei(i.UNPACK_SKIP_PIXELS,at),e.pixelStorei(i.UNPACK_SKIP_ROWS,_t)}}function Ct(A,_,H){let G=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(G=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(G=i.TEXTURE_3D);let q=Kt(A,_),dt=_.source;e.bindTexture(G,A.__webglTexture,i.TEXTURE0+H);let mt=n.get(dt);if(dt.version!==mt.__version||q===!0){if(e.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap!="undefined"&&_.image instanceof ImageBitmap)===!1){let et=xe.getPrimaries(xe.workingColorSpace),bt=_.colorSpace===Ci?null:xe.getPrimaries(_.colorSpace),yt=_.colorSpace===Ci||et===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let at=m(_.image,!1,s.maxTextureSize);at=Vt(_,at);let _t=r.convert(_.format,_.colorSpace),zt=r.convert(_.type),St=v(_.internalFormat,_t,zt,_.normalized,_.colorSpace,_.isVideoTexture);Wt(G,_);let Tt,It=_.mipmaps,Zt=_.isVideoTexture!==!0,jt=mt.__version===void 0||q===!0,N=dt.dataReady,ut=T(_,at);if(_.isDepthTexture)St=b(_.format===Ki,_.type),jt&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,St,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,St,at.width,at.height,0,_t,zt,null));else if(_.isDataTexture)if(It.length>0){Zt&&jt&&e.texStorage2D(i.TEXTURE_2D,ut,St,It[0].width,It[0].height);for(let et=0,bt=It.length;et<bt;et++)Tt=It[et],Zt?N&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Tt.width,Tt.height,_t,zt,Tt.data):e.texImage2D(i.TEXTURE_2D,et,St,Tt.width,Tt.height,0,_t,zt,Tt.data);_.generateMipmaps=!1}else Zt?(jt&&e.texStorage2D(i.TEXTURE_2D,ut,St,at.width,at.height),N&&lt(_,at,_t,zt)):e.texImage2D(i.TEXTURE_2D,0,St,at.width,at.height,0,_t,zt,at.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Zt&&jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,St,It[0].width,It[0].height,at.depth);for(let et=0,bt=It.length;et<bt;et++)if(Tt=It[et],_.format!==Gn)if(_t!==null)if(Zt){if(N)if(_.layerUpdates.size>0){let yt=kc(Tt.width,Tt.height,_.format,_.type);for(let ct of _.layerUpdates){let kt=Tt.data.subarray(ct*yt/Tt.data.BYTES_PER_ELEMENT,(ct+1)*yt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,ct,Tt.width,Tt.height,1,_t,kt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Tt.width,Tt.height,at.depth,_t,Tt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,St,Tt.width,Tt.height,at.depth,0,Tt.data,0,0);else Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Tt.width,Tt.height,at.depth,_t,zt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,St,Tt.width,Tt.height,at.depth,0,_t,zt,Tt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Zt&&jt&&e.texStorage2D(i.TEXTURE_2D,ut,St,It[0].width,It[0].height);for(let et=0,bt=It.length;et<bt;et++)Tt=It[et],_.format!==Gn?_t!==null?Zt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,Tt.width,Tt.height,_t,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,et,St,Tt.width,Tt.height,0,Tt.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?N&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Tt.width,Tt.height,_t,zt,Tt.data):e.texImage2D(i.TEXTURE_2D,et,St,Tt.width,Tt.height,0,_t,zt,Tt.data)}else if(_.isDataArrayTexture)if(Zt){if(jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,St,at.width,at.height,at.depth),N)if(_.layerUpdates.size>0){let et=kc(at.width,at.height,_.format,_.type);for(let bt of _.layerUpdates){let yt=at.data.subarray(bt*et/at.data.BYTES_PER_ELEMENT,(bt+1)*et/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,bt,at.width,at.height,1,_t,zt,yt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,_t,zt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,at.width,at.height,at.depth,0,_t,zt,at.data);else if(_.isData3DTexture)Zt?(jt&&e.texStorage3D(i.TEXTURE_3D,ut,St,at.width,at.height,at.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,_t,zt,at.data)):e.texImage3D(i.TEXTURE_3D,0,St,at.width,at.height,at.depth,0,_t,zt,at.data);else if(_.isFramebufferTexture){if(jt)if(Zt)e.texStorage2D(i.TEXTURE_2D,ut,St,at.width,at.height);else{let et=at.width,bt=at.height;for(let yt=0;yt<ut;yt++)e.texImage2D(i.TEXTURE_2D,yt,St,et,bt,0,_t,zt,null),et>>=1,bt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let et=i.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),at.parentNode!==et){et.appendChild(at),d.add(_),et.onpaint=bt=>{let yt=bt.changedElements;for(let ct of d)yt.includes(ct.image)&&(ct.needsUpdate=!0)},et.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,at);else{let yt=i.RGBA,ct=i.RGBA,kt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,yt,ct,kt,at)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(It.length>0){if(Zt&&jt){let et=Ot(It[0]);e.texStorage2D(i.TEXTURE_2D,ut,St,et.width,et.height)}for(let et=0,bt=It.length;et<bt;et++)Tt=It[et],Zt?N&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,_t,zt,Tt):e.texImage2D(i.TEXTURE_2D,et,St,_t,zt,Tt);_.generateMipmaps=!1}else if(Zt){if(jt){let et=Ot(at);e.texStorage2D(i.TEXTURE_2D,ut,St,et.width,et.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,zt,at)}else e.texImage2D(i.TEXTURE_2D,0,St,_t,zt,at);p(_)&&M(G),mt.__version=dt.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Xt(A,_,H){if(_.image.length!==6)return;let G=Kt(A,_),q=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);let dt=n.get(q);if(q.version!==dt.__version||G===!0){e.activeTexture(i.TEXTURE0+H);let mt=xe.getPrimaries(xe.workingColorSpace),Q=_.colorSpace===Ci?null:xe.getPrimaries(_.colorSpace),at=_.colorSpace===Ci||mt===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let _t=_.isCompressedTexture||_.image[0].isCompressedTexture,zt=_.image[0]&&_.image[0].isDataTexture,St=[];for(let ct=0;ct<6;ct++)!_t&&!zt?St[ct]=m(_.image[ct],!0,s.maxCubemapSize):St[ct]=zt?_.image[ct].image:_.image[ct],St[ct]=Vt(_,St[ct]);let Tt=St[0],It=r.convert(_.format,_.colorSpace),Zt=r.convert(_.type),jt=v(_.internalFormat,It,Zt,_.normalized,_.colorSpace),N=_.isVideoTexture!==!0,ut=dt.__version===void 0||G===!0,et=q.dataReady,bt=T(_,Tt);Wt(i.TEXTURE_CUBE_MAP,_);let yt;if(_t){N&&ut&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,jt,Tt.width,Tt.height);for(let ct=0;ct<6;ct++){yt=St[ct].mipmaps;for(let kt=0;kt<yt.length;kt++){let it=yt[kt];_.format!==Gn?It!==null?N?et&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,0,0,it.width,it.height,It,it.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,jt,it.width,it.height,0,it.data):Qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,0,0,it.width,it.height,It,Zt,it.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,jt,it.width,it.height,0,It,Zt,it.data)}}}else{if(yt=_.mipmaps,N&&ut){yt.length>0&&bt++;let ct=Ot(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,jt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(zt){N?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,St[ct].width,St[ct].height,It,Zt,St[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,jt,St[ct].width,St[ct].height,0,It,Zt,St[ct].data);for(let kt=0;kt<yt.length;kt++){let ye=yt[kt].image[ct].image;N?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,0,0,ye.width,ye.height,It,Zt,ye.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,jt,ye.width,ye.height,0,It,Zt,ye.data)}}else{N?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,It,Zt,St[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,jt,It,Zt,St[ct]);for(let kt=0;kt<yt.length;kt++){let it=yt[kt];N?et&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,0,0,It,Zt,it.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,jt,It,Zt,it.image[ct])}}}p(_)&&M(i.TEXTURE_CUBE_MAP),dt.__version=q.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Nt(A,_,H,G,q,dt){let mt=r.convert(H.format,H.colorSpace),Q=r.convert(H.type),at=v(H.internalFormat,mt,Q,H.normalized,H.colorSpace),_t=n.get(_),zt=n.get(H);if(zt.__renderTarget=_,!_t.__hasExternalTextures){let St=Math.max(1,_.width>>dt),Tt=Math.max(1,_.height>>dt);q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?e.texImage3D(q,dt,at,St,Tt,_.depth,0,mt,Q,null):e.texImage2D(q,dt,at,St,Tt,0,mt,Q,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Mt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,G,q,zt.__webglTexture,0,ft(_)):(q===i.TEXTURE_2D||q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,G,q,zt.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(A,_,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){let G=_.depthTexture,q=G&&G.isDepthTexture?G.type:null,dt=b(_.stencilBuffer,q),mt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Mt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(_),dt,_.width,_.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(_),dt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,dt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,A)}else{let G=_.textures;for(let q=0;q<G.length;q++){let dt=G[q],mt=r.convert(dt.format,dt.colorSpace),Q=r.convert(dt.type),at=v(dt.internalFormat,mt,Q,dt.normalized,dt.colorSpace);Mt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(_),at,_.width,_.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(_),at,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,at,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(A,_,H){let G=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let q=n.get(_.depthTexture);if(q.__renderTarget=_,(!q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),G){if(q.__webglInit===void 0&&(q.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),q.__webglTexture===void 0){q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,_.depthTexture);let _t=r.convert(_.depthTexture.format),zt=r.convert(_.depthTexture.type),St;_.depthTexture.format===oi?St=i.DEPTH_COMPONENT24:_.depthTexture.format===Ki&&(St=i.DEPTH24_STENCIL8);for(let Tt=0;Tt<6;Tt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,St,_.width,_.height,0,_t,zt,null)}}else rt(_.depthTexture,0);let dt=q.__webglTexture,mt=ft(_),Q=G?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,at=_.depthTexture.format===Ki?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===oi)Mt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,Q,dt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,at,Q,dt,0);else if(_.depthTexture.format===Ki)Mt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,at,Q,dt,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,at,Q,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function st(A){let _=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let G=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),G){let q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,G.removeEventListener("dispose",q)};G.addEventListener("dispose",q),_.__depthDisposeCallback=q}_.__boundDepthTexture=G}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(H)for(let G=0;G<6;G++)de(_.__webglFramebuffer[G],A,G);else{let G=A.texture.mipmaps;G&&G.length>0?de(_.__webglFramebuffer[0],A,0):de(_.__webglFramebuffer,A,0)}else if(H){_.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[G]),_.__webglDepthbuffer[G]===void 0)_.__webglDepthbuffer[G]=i.createRenderbuffer(),Yt(_.__webglDepthbuffer[G],A,!1);else{let q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=_.__webglDepthbuffer[G];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,dt)}}else{let G=A.texture.mipmaps;if(G&&G.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Yt(_.__webglDepthbuffer,A,!1);else{let q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function k(A,_,H){let G=n.get(A);_!==void 0&&Nt(G.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&st(A)}function J(A){let _=A.texture,H=n.get(A),G=n.get(_);A.addEventListener("dispose",y);let q=A.textures,dt=A.isWebGLCubeRenderTarget===!0,mt=q.length>1;if(mt||(G.__webglTexture===void 0&&(G.__webglTexture=i.createTexture()),G.__version=_.version,o.memory.textures++),dt){H.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer[Q]=[];for(let at=0;at<_.mipmaps.length;at++)H.__webglFramebuffer[Q][at]=i.createFramebuffer()}else H.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){H.__webglFramebuffer=[];for(let Q=0;Q<_.mipmaps.length;Q++)H.__webglFramebuffer[Q]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(mt)for(let Q=0,at=q.length;Q<at;Q++){let _t=n.get(q[Q]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&Mt(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Q=0;Q<q.length;Q++){let at=q[Q];H.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Q]);let _t=r.convert(at.format,at.colorSpace),zt=r.convert(at.type),St=v(at.internalFormat,_t,zt,at.normalized,at.colorSpace,A.isXRRenderTarget===!0),Tt=ft(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,St,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,H.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),Yt(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,_);for(let Q=0;Q<6;Q++)if(_.mipmaps&&_.mipmaps.length>0)for(let at=0;at<_.mipmaps.length;at++)Nt(H.__webglFramebuffer[Q][at],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,at);else Nt(H.__webglFramebuffer[Q],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(_)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let Q=0,at=q.length;Q<at;Q++){let _t=q[Q],zt=n.get(_t),St=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(St=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,zt.__webglTexture),Wt(St,_t),Nt(H.__webglFramebuffer,A,_t,i.COLOR_ATTACHMENT0+Q,St,0),p(_t)&&M(St)}e.unbindTexture()}else{let Q=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Q,G.__webglTexture),Wt(Q,_),_.mipmaps&&_.mipmaps.length>0)for(let at=0;at<_.mipmaps.length;at++)Nt(H.__webglFramebuffer[at],A,_,i.COLOR_ATTACHMENT0,Q,at);else Nt(H.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,Q,0);p(_)&&M(Q),e.unbindTexture()}A.depthBuffer&&st(A)}function tt(A){let _=A.textures;for(let H=0,G=_.length;H<G;H++){let q=_[H];if(p(q)){let dt=w(A),mt=n.get(q).__webglTexture;e.bindTexture(dt,mt),M(dt),e.unbindTexture()}}}let ht=[],Et=[];function pt(A){if(A.samples>0){if(Mt(A)===!1){let _=A.textures,H=A.width,G=A.height,q=i.COLOR_BUFFER_BIT,dt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(A),Q=_.length>1;if(Q)for(let _t=0;_t<_.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let at=A.texture.mipmaps;at&&at.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let _t=0;_t<_.length;_t++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(q|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(q|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[_t]);let zt=n.get(_[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,zt,0)}i.blitFramebuffer(0,0,H,G,0,0,H,G,q,i.NEAREST),c===!0&&(ht.length=0,Et.length=0,ht.push(i.COLOR_ATTACHMENT0+_t),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(ht.push(dt),Et.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Et)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let _t=0;_t<_.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,mt.__webglColorRenderbuffer[_t]);let zt=n.get(_[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,zt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ft(A){return Math.min(s.maxSamples,A.samples)}function Mt(A){let _=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(A){let _=o.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Vt(A,_){let H=A.colorSpace,G=A.format,q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Mr&&H!==Ci&&(xe.getTransfer(H)===Te?(G!==Gn||q!==Dn)&&Qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):te("WebGLTextures: Unsupported texture color space:",H)),_}function Ot(A){return typeof HTMLImageElement!="undefined"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame!="undefined"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=K,this.resetTextureUnits=B,this.getTextureUnits=D,this.setTextureUnits=O,this.setTexture2D=rt,this.setTexture2DArray=$,this.setTexture3D=nt,this.setTextureCube=X,this.rebindTextures=k,this.setupRenderTarget=J,this.updateRenderTargetMipmap=tt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=Mt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function ax(i,t){function e(n,s=Ci){let r,o=xe.getTransfer(s);if(n===Dn)return i.UNSIGNED_BYTE;if(n===wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ac)return i.BYTE;if(n===Rc)return i.SHORT;if(n===tr)return i.UNSIGNED_SHORT;if(n===To)return i.INT;if(n===jn)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===ti)return i.HALF_FLOAT;if(n===Ic)return i.ALPHA;if(n===Lc)return i.RGB;if(n===Gn)return i.RGBA;if(n===oi)return i.DEPTH_COMPONENT;if(n===Ki)return i.DEPTH_STENCIL;if(n===Dc)return i.RED;if(n===Ro)return i.RED_INTEGER;if(n===ji)return i.RG;if(n===Co)return i.RG_INTEGER;if(n===Po)return i.RGBA_INTEGER;if(n===ta||n===ea||n===na||n===ia)if(o===Te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Io||n===Lo||n===Do||n===Uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===Fo||n===Bo||n===Oo||n===zo||n===sa||n===Ho)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===No||n===Fo)return o===Te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bo)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Oo)return r.COMPRESSED_R11_EAC;if(n===zo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===sa)return r.COMPRESSED_RG11_EAC;if(n===Ho)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ko||n===Go||n===Vo||n===Wo||n===Xo||n===Yo||n===qo||n===Zo||n===Jo||n===$o||n===Ko||n===jo||n===Qo||n===tl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ko)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Go)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vo)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wo)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xo)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yo)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qo)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zo)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$o)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ko)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jo)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qo)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tl)return o===Te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===el||n===nl||n===il)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===el)return o===Te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sl||n===rl||n===ra||n===al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===sl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===er?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lx=`
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

}`,ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Dr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new hn({vertexShader:ox,fragmentShader:lx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new Le(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oh=class extends li{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,x=typeof XRWebGLBinding!="undefined",m=new ah,p={},M=e.getContextAttributes(),w=null,v=null,b=[],T=[],P=new Dt,y=null,E=null,R=new mn;R.viewport=new Ge;let C=new mn;C.viewport=new Ge;let I=[R,C],B=new vo,D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let lt=b[j];return lt===void 0&&(lt=new Ys,b[j]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(j){let lt=b[j];return lt===void 0&&(lt=new Ys,b[j]=lt),lt.getGripSpace()},this.getHand=function(j){let lt=b[j];return lt===void 0&&(lt=new Ys,b[j]=lt),lt.getHandSpace()};function K(j){let lt=T.indexOf(j.inputSource);if(lt===-1)return;let Ct=b[lt];Ct!==void 0&&(Ct.update(j.inputSource,j.frame,l||o),Ct.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",rt);for(let j=0;j<b.length;j++){let lt=T[j];lt!==null&&(T[j]=null,b[j].disconnect(lt))}D=null,O=null,m.reset();for(let j in p)delete p[j];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,v=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(P.width,P.height,!1),E!==null){let j=E.camera;j.fov=E.fov,j.zoom=E.zoom,j.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&Qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",rt),M.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,Xt=null,Nt=null;M.depth&&(Nt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Ct=M.stencil?Ki:oi,Xt=M.stencil?er:jn);let Yt={colorFormat:e.RGBA8,depthFormat:Nt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Yt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new Pn(u.textureWidth,u.textureHeight,{format:Gn,type:Dn,depthTexture:new Vi(u.textureWidth,u.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Ct={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Ct),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new Pn(f.framebufferWidth,f.framebufferHeight,{format:Gn,type:Dn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(j){for(let lt=0;lt<j.removed.length;lt++){let Ct=j.removed[lt],Xt=T.indexOf(Ct);Xt>=0&&(T[Xt]=null,b[Xt].disconnect(Ct))}for(let lt=0;lt<j.added.length;lt++){let Ct=j.added[lt],Xt=T.indexOf(Ct);if(Xt===-1){for(let Yt=0;Yt<b.length;Yt++)if(Yt>=T.length){T.push(Ct),Xt=Yt;break}else if(T[Yt]===null){T[Yt]=Ct,Xt=Yt;break}if(Xt===-1)break}let Nt=b[Xt];Nt&&Nt.connect(Ct)}}let $=new U,nt=new U;function X(j,lt,Ct){$.setFromMatrixPosition(lt.matrixWorld),nt.setFromMatrixPosition(Ct.matrixWorld);let Xt=$.distanceTo(nt),Nt=lt.projectionMatrix.elements,Yt=Ct.projectionMatrix.elements,de=Nt[14]/(Nt[10]-1),st=Nt[14]/(Nt[10]+1),k=(Nt[9]+1)/Nt[5],J=(Nt[9]-1)/Nt[5],tt=(Nt[8]-1)/Nt[0],ht=(Yt[8]+1)/Yt[0],Et=de*tt,pt=de*ht,ft=Xt/(-tt+ht),Mt=ft*-tt;if(lt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Mt),j.translateZ(ft),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Nt[10]===-1)j.projectionMatrix.copy(lt.projectionMatrix),j.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{let L=de+ft,Vt=st+ft,Ot=Et-Mt,A=pt+(Xt-Mt),_=k*st/Vt*L,H=J*st/Vt*L;j.projectionMatrix.makePerspective(Ot,A,_,H,L,Vt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function xt(j,lt){lt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(lt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let lt=j.near,Ct=j.far;m.texture!==null&&(m.depthNear>0&&(lt=m.depthNear),m.depthFar>0&&(Ct=m.depthFar)),B.near=C.near=R.near=lt,B.far=C.far=R.far=Ct,(D!==B.near||O!==B.far)&&(s.updateRenderState({depthNear:B.near,depthFar:B.far}),D=B.near,O=B.far),B.layers.mask=j.layers.mask|6,R.layers.mask=B.layers.mask&-5,C.layers.mask=B.layers.mask&-3;let Xt=j.parent,Nt=B.cameras;xt(B,Xt);for(let Yt=0;Yt<Nt.length;Yt++)xt(Nt[Yt],Xt);Nt.length===2?X(B,R,C):B.projectionMatrix.copy(R.projectionMatrix),E===null&&j.isPerspectiveCamera&&(E={camera:j,fov:j.fov,zoom:j.zoom}),gt(j,B,Xt)};function gt(j,lt,Ct){Ct===null?j.matrix.copy(lt.matrixWorld):(j.matrix.copy(Ct.matrixWorld),j.matrix.invert(),j.matrix.multiply(lt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(lt.projectionMatrix),j.projectionMatrixInverse.copy(lt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=hs*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(j){c=j,u!==null&&(u.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(j){return p[j]};let $t=null;function Wt(j,lt){if(h=lt.getViewerPose(l||o),g=lt,h!==null){let Ct=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Xt=!1;Ct.length!==B.cameras.length&&(B.cameras.length=0,Xt=!0);for(let st=0;st<Ct.length;st++){let k=Ct[st],J=null;if(f!==null)J=f.getViewport(k);else{let ht=d.getViewSubImage(u,k);J=ht.viewport,st===0&&(t.setRenderTargetTextures(v,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(v))}let tt=I[st];tt===void 0&&(tt=new mn,tt.layers.enable(st),tt.viewport=new Ge,I[st]=tt),tt.matrix.fromArray(k.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(k.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(J.x,J.y,J.width,J.height),st===0&&(B.matrix.copy(tt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Xt===!0&&B.cameras.push(tt)}let Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let st=d.getDepthInformation(Ct[0]);st&&st.isValid&&st.texture&&m.init(st,s.renderState)}if(Nt&&Nt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let st=0;st<Ct.length;st++){let k=Ct[st].camera;if(k){let J=p[k];J||(J=new Dr,p[k]=J);let tt=d.getCameraImage(k);J.sourceTexture=tt}}}}for(let Ct=0;Ct<b.length;Ct++){let Xt=T[Ct],Nt=b[Ct];Xt!==null&&Nt!==void 0&&Nt.update(Xt,lt,l||o)}$t&&$t(j,lt),lt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:lt}),g=null}let Kt=new hd;Kt.setAnimationLoop(Wt),this.setAnimationLoop=function(j){$t=j},this.dispose=function(){}}},cx=new ke,gd=new ie;gd.set(-1,0,0,0,1,0,0,0,1);function hx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Oc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,w,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===yn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===yn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),w=M.envMap,v=M.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(cx.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(gd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ux(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){let T=b.program;n.uniformBlockBinding(v,T)}function l(v,b){let T=s[v.id];T===void 0&&(m(v),T=h(v),s[v.id]=T,v.addEventListener("dispose",M));let P=b.program;n.updateUBOMapping(v,P);let y=t.render.frame;r[v.id]!==y&&(u(v),r[v.id]=y)}function h(v){let b=d();v.__bindingPointIndex=b;let T=i.createBuffer(),P=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,P,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return te("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let b=s[v.id],T=v.uniforms,P=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let y=0,E=T.length;y<E;y++){let R=T[y];if(Array.isArray(R))for(let C=0,I=R.length;C<I;C++)f(R[C],y,C,P);else f(R,y,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,b,T,P){if(x(v,b,T,P)===!0){let y=v.__offset,E=v.value;if(Array.isArray(E)){let R=0;for(let C=0;C<E.length;C++){let I=E[C],B=p(I);g(I,v.__data,R),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(R+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function g(v,b,T){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,T)}function x(v,b,T,P){let y=v.value,E=b+"_"+T;if(P[E]===void 0)return typeof y=="number"||typeof y=="boolean"?P[E]=y:ArrayBuffer.isView(y)?P[E]=y.slice():P[E]=y.clone(),!0;{let R=P[E];if(typeof y=="number"||typeof y=="boolean"){if(R!==y)return P[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(R.equals(y)===!1)return R.copy(y),!0}}return!1}function m(v){let b=v.uniforms,T=0,P=16;for(let E=0,R=b.length;E<R;E++){let C=Array.isArray(b[E])?b[E]:[b[E]];for(let I=0,B=C.length;I<B;I++){let D=C[I],O=Array.isArray(D.value)?D.value:[D.value];for(let K=0,Y=O.length;K<Y;K++){let rt=O[K],$=p(rt),nt=T%P,X=nt%$.boundary,xt=nt+X;T+=X,xt!==0&&P-xt<$.storage&&(T+=P-xt),D.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=$.storage}}}let y=T%P;return y>0&&(T+=P-y),v.__size=T,v.__cache={},this}function p(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?Qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Qt("WebGLRenderer: Unsupported uniform value type.",v),b}function M(v){let b=v.target;b.removeEventListener("dispose",M);let T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function w(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:w}}var dx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),fi=null;function fx(){return fi===null&&(fi=new ja(dx,16,16,ji,ti),fi.name="DFG_LUT",fi.minFilter=Ze,fi.magFilter=Ze,fi.wrapS=ri,fi.wrapT=ri,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}var pl=class{constructor(t={}){let{canvas:e=Iu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Dn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=f,m=new Set([Po,Co,Ro]),p=new Set([Dn,jn,tr,er,wo,Ao]),M=new Uint32Array(4),w=new Int32Array(4),v=new U,b=null,T=null,P=[],y=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Kn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,C=!1,I=null,B=null,D=null,O=null;this._outputColorSpace=Ye;let K=0,Y=0,rt=null,$=-1,nt=null,X=new Ge,xt=new Ge,gt=null,$t=new ee(0),Wt=0,Kt=e.width,j=e.height,lt=1,Ct=null,Xt=null,Nt=new Ge(0,0,Kt,j),Yt=new Ge(0,0,Kt,j),de=!1,st=new qs,k=!1,J=!1,tt=new ke,ht=new U,Et=new Ge,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ft=!1;function Mt(){return rt===null?lt:1}let L=n;function Vt(S,F){return e.getContext(S,F)}let Ot,A,_,H,G,q,dt,mt,Q,at,_t,zt,St,Tt,It,Zt,jt,N,ut,et,bt,yt,ct;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ye,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",ze,!1),L===null){let F="webgl2";if(L=Vt(F,S),L===null)throw Vt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}kt()}catch(S){throw e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",ze,!1),te("WebGLRenderer: "+S.message),S}function kt(){Ot=new vg(L),Ot.init(),bt=new ax(L,Ot),A=new hg(L,Ot,t,bt),_=new sx(L,Ot),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),B=L.createFramebuffer(),D=L.createFramebuffer(),O=L.createFramebuffer(),H=new bg(L),G=new W_,q=new rx(L,Ot,_,G,A,bt,H),dt=new yg(R),mt=new Tp(L),yt=new lg(L,mt),Q=new Sg(L,mt,H,yt),at=new Tg(L,Q,mt,yt,H),N=new Eg(L,A,q),It=new ug(G),_t=new V_(R,dt,Ot,A,yt,It),zt=new hx(R,G),St=new Y_,Tt=new j_(Ot),jt=new og(R,dt,_,at,g,c),Zt=new ix(R,at,A),ct=new ux(L,H,A,_),ut=new cg(L,Ot,H),et=new Mg(L,Ot,H),H.programs=_t.programs,R.capabilities=A,R.extensions=Ot,R.properties=G,R.renderLists=St,R.shadowMap=Zt,R.state=_,R.info=H}x!==Dn&&(E=new Ag(x,e.width,e.height,a,s,r));let it=new oh(R,L);this.xr=it,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let S=Ot.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=Ot.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return lt},this.setPixelRatio=function(S){S!==void 0&&(lt=S,this.setSize(Kt,j,!1))},this.getSize=function(S){return S.set(Kt,j)},this.setSize=function(S,F,Z=!0){if(it.isPresenting){Qt("WebGLRenderer: Can't change size while VR device is presenting.");return}Kt=S,j=F,e.width=Math.floor(S*lt),e.height=Math.floor(F*lt),Z===!0&&(e.style.width=S+"px",e.style.height=F+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(Kt*lt,j*lt).floor()},this.setDrawingBufferSize=function(S,F,Z){Kt=S,j=F,lt=Z,e.width=Math.floor(S*Z),e.height=Math.floor(F*Z),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(x===Dn){te("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){Qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(X)},this.getViewport=function(S){return S.copy(Nt)},this.setViewport=function(S,F,Z,V){S.isVector4?Nt.set(S.x,S.y,S.z,S.w):Nt.set(S,F,Z,V),_.viewport(X.copy(Nt).multiplyScalar(lt).round())},this.getScissor=function(S){return S.copy(Yt)},this.setScissor=function(S,F,Z,V){S.isVector4?Yt.set(S.x,S.y,S.z,S.w):Yt.set(S,F,Z,V),_.scissor(xt.copy(Yt).multiplyScalar(lt).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(S){_.setScissorTest(de=S)},this.setOpaqueSort=function(S){Ct=S},this.setTransparentSort=function(S){Xt=S},this.getClearColor=function(S){return S.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,Z=!0){let V=0;if(S){let W=!1;if(rt!==null){let vt=rt.texture.format;W=m.has(vt)}if(W){let vt=rt.texture.type,Lt=p.has(vt),At=jt.getClearColor(),Ht=jt.getClearAlpha(),Bt=At.r,qt=At.g,Gt=At.b;Lt?(M[0]=Bt,M[1]=qt,M[2]=Gt,M[3]=Ht,L.clearBufferuiv(L.COLOR,0,M)):(w[0]=Bt,w[1]=qt,w[2]=Gt,w[3]=Ht,L.clearBufferiv(L.COLOR,0,w))}else V|=L.COLOR_BUFFER_BIT}F&&(V|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),I=S},this.dispose=function(){e.removeEventListener("webglcontextlost",ye,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",ze,!1),jt.dispose(),St.dispose(),Tt.dispose(),G.dispose(),dt.dispose(),at.dispose(),yt.dispose(),ct.dispose(),_t.dispose(),it.dispose(),it.removeEventListener("sessionstart",ot),it.removeEventListener("sessionend",wt),Jt.stop()};function ye(S){S.preventDefault(),Nc("WebGLRenderer: Context Lost."),C=!0}function ce(){Nc("WebGLRenderer: Context Restored."),C=!1;let S=H.autoReset,F=Zt.enabled,Z=Zt.autoUpdate,V=Zt.needsUpdate,W=Zt.type;kt(),H.autoReset=S,Zt.enabled=F,Zt.autoUpdate=Z,Zt.needsUpdate=V,Zt.type=W}function ze(S){te("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function cn(S){let F=S.target;F.removeEventListener("dispose",cn),gi(F)}function gi(S){fn(S),G.remove(S)}function fn(S){let F=G.get(S).programs;F!==void 0&&(F.forEach(function(Z){_t.releaseProgram(Z)}),S.isShaderMaterial&&_t.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,Z,V,W,vt){F===null&&(F=pt);let Lt=W.isMesh&&W.matrixWorld.determinantAffine()<0,At=re(S,F,Z,V,W);_.setMaterial(V,Lt);let Ht=Z.index,Bt=1;if(V.wireframe===!0){if(Ht=Q.getWireframeAttribute(Z),Ht===void 0)return;Bt=2}let qt=Z.drawRange,Gt=Z.attributes.position,Rt=qt.start*Bt,ne=(qt.start+qt.count)*Bt;vt!==null&&(Rt=Math.max(Rt,vt.start*Bt),ne=Math.min(ne,(vt.start+vt.count)*Bt)),Ht!==null?(Rt=Math.max(Rt,0),ne=Math.min(ne,Ht.count)):Gt!=null&&(Rt=Math.max(Rt,0),ne=Math.min(ne,Gt.count));let me=ne-Rt;if(me<0||me===1/0)return;yt.setup(W,V,At,Z,Ht);let ge,fe=ut;if(Ht!==null&&(ge=mt.get(Ht),fe=et,fe.setIndex(ge)),W.isMesh)V.wireframe===!0?(_.setLineWidth(V.wireframeLinewidth*Mt()),fe.setMode(L.LINES)):fe.setMode(L.TRIANGLES);else if(W.isLine){let Re=V.linewidth;Re===void 0&&(Re=1),_.setLineWidth(Re*Mt()),W.isLineSegments?fe.setMode(L.LINES):W.isLineLoop?fe.setMode(L.LINE_LOOP):fe.setMode(L.LINE_STRIP)}else W.isPoints?fe.setMode(L.POINTS):W.isSprite&&fe.setMode(L.TRIANGLES);if(W.isBatchedMesh)if(Ot.get("WEBGL_multi_draw"))fe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Re=W._multiDrawStarts,Ut=W._multiDrawCounts,sn=W._multiDrawCount,_e=Ht?mt.get(Ht).bytesPerElement:1,Hn=G.get(V).currentProgram.getUniforms();for(let ii=0;ii<sn;ii++)Hn.setValue(L,"_gl_DrawID",ii),fe.render(Re[ii]/_e,Ut[ii])}else if(W.isInstancedMesh)fe.renderInstances(Rt,me,W.count);else if(Z.isInstancedBufferGeometry){let Re=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ut=Math.min(Z.instanceCount,Re);fe.renderInstances(Rt,me,Ut)}else fe.render(Rt,me)};function ni(S,F,Z,V){I!==null&&S.isNodeMaterial&&I.setObject(V,S),k===!0&&It.setState(S,Z,!1),S.transparent===!0&&S.side===De&&S.forceSinglePass===!1?(S.side=yn,S.needsUpdate=!0,Pe(S,F,V),S.side=Ji,S.needsUpdate=!0,Pe(S,F,V),S.side=De):Pe(S,F,V)}this.compile=function(S,F,Z=null){Z===null&&(Z=S),I!==null&&I.renderStart(S,F,Z),T=Tt.get(Z),T.init(F),y.push(T),Z.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),S!==Z&&S.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),I!==null&&I.updateLights(T.state.lightsArray),J=this.localClippingEnabled,k=It.init(this.clippingPlanes,J),k===!0&&It.setGlobalState(this.clippingPlanes,F),I!==null&&Zt.render(T.state.shadowsArray,Z,F);let V=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let vt=W.material;if(vt)if(Array.isArray(vt))for(let Lt=0;Lt<vt.length;Lt++){let At=vt[Lt];ni(At,Z,F,W),V.add(At)}else ni(vt,Z,F,W),V.add(vt)}),T=y.pop(),I!==null&&I.renderEnd(),V},this.compileAsync=function(S,F,Z=null){let V=this.compile(S,F,Z);return new Promise(W=>{function vt(){if(V.forEach(function(Lt){let Ht=G.get(Lt).currentProgram;(Ht===void 0||Ht.isReady())&&V.delete(Lt)}),V.size===0){W(S);return}setTimeout(vt,10)}Ot.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let _i=null;function z(S){_i&&_i(S)}function ot(){Jt.stop()}function wt(){Jt.start()}let Jt=new hd;Jt.setAnimationLoop(z),typeof self!="undefined"&&Jt.setContext(self),this.setAnimationLoop=function(S){_i=S,it.setAnimationLoop(S),S===null?Jt.stop():Jt.start()},it.addEventListener("sessionstart",ot),it.addEventListener("sessionend",wt),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){te("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;I!==null&&I.renderStart(S,F);let Z=it.enabled===!0&&it.isPresenting===!0,V=E!==null&&(rt===null||Z)&&E.begin(R,rt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),it.enabled===!0&&it.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(it.cameraAutoUpdate===!0&&it.updateCamera(F),F=it.getCamera()),S.isScene===!0&&S.onBeforeRender(R,S,F,rt),T=Tt.get(S,y.length),T.init(F),T.state.textureUnits=q.getTextureUnits(),y.push(T),tt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),st.setFromProjectionMatrix(tt,$n,F.reversedDepth),J=this.localClippingEnabled,k=It.init(this.clippingPlanes,J),b=St.get(S,P.length),b.init(),P.push(b),it.enabled===!0&&it.isPresenting===!0){let Lt=R.xr.getDepthSensingMesh();Lt!==null&&le(Lt,F,-1/0,R.sortObjects)}le(S,F,0,R.sortObjects),b.finish(),I!==null&&I.updateLights(T.state.lightsArray),R.sortObjects===!0&&b.sort(Ct,Xt),ft=it.enabled===!1||it.isPresenting===!1||it.hasDepthSensing()===!1,ft&&jt.addToRenderList(b,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),k===!0&&It.beginShadows();let W=T.state.shadowsArray;if(Zt.render(W,S,F),k===!0&&It.endShadows(),(V&&E.hasRenderPass())===!1){let Lt=b.opaque,At=b.transmissive;if(T.setupLights(),F.isArrayCamera){let Ht=F.cameras;if(At.length>0)for(let Bt=0,qt=Ht.length;Bt<qt;Bt++){let Gt=Ht[Bt];on(Lt,At,S,Gt)}ft&&jt.render(S);for(let Bt=0,qt=Ht.length;Bt<qt;Bt++){let Gt=Ht[Bt];be(b,S,Gt,Gt.viewport)}}else At.length>0&&on(Lt,At,S,F),ft&&jt.render(S),be(b,S,F)}rt!==null&&Y===0&&(q.updateMultisampleRenderTarget(rt),q.updateRenderTargetMipmap(rt)),V&&E.end(R),S.isScene===!0&&S.onAfterRender(R,S,F),yt.resetDefaultState(),$=-1,nt=null,y.pop(),y.length>0?(T=y[y.length-1],q.setTextureUnits(T.state.textureUnits),k===!0&&It.setGlobalState(R.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?b=P[P.length-1]:b=null,I!==null&&I.renderEnd()};function le(S,F,Z,V){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)Z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(st)){V&&Et.setFromMatrixPosition(S.matrixWorld).applyMatrix4(tt);let Lt=at.update(S),At=S.material;At.visible&&b.push(S,Lt,At,Z,Et.z,null,F)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(st))){let Lt=at.update(S),At=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Et.copy(S.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Et.copy(Lt.boundingSphere.center)),Et.applyMatrix4(S.matrixWorld).applyMatrix4(tt)),Array.isArray(At)){let Ht=Lt.groups;for(let Bt=0,qt=Ht.length;Bt<qt;Bt++){let Gt=Ht[Bt],Rt=At[Gt.materialIndex];Rt&&Rt.visible&&b.push(S,Lt,Rt,Z,Et.z,Gt,F)}}else At.visible&&b.push(S,Lt,At,Z,Et.z,null,F)}}let vt=S.children;for(let Lt=0,At=vt.length;Lt<At;Lt++)le(vt[Lt],F,Z,V)}function be(S,F,Z,V){let{opaque:W,transmissive:vt,transparent:Lt}=S;T.setupLightsView(Z),k===!0&&It.setGlobalState(R.clippingPlanes,Z),V&&_.viewport(X.copy(V)),W.length>0&&Sn(W,F,Z),vt.length>0&&Sn(vt,F,Z),Lt.length>0&&Sn(Lt,F,Z),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function on(S,F,Z,V){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){let Rt=Ot.has("EXT_color_buffer_half_float")||Ot.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new Pn(1,1,{generateMipmaps:!0,type:Rt?ti:Dn,minFilter:Ln,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:xe.workingColorSpace})}let vt=T.state.transmissionRenderTarget[V.id],Lt=V.viewport||X;vt.setSize(Lt.z*R.transmissionResolutionScale,Lt.w*R.transmissionResolutionScale);let At=R.getRenderTarget(),Ht=R.getActiveCubeFace(),Bt=R.getActiveMipmapLevel();R.setRenderTarget(vt),R.getClearColor($t),Wt=R.getClearAlpha(),Wt<1&&R.setClearColor(16777215,.5),R.clear(),ft&&jt.render(Z);let qt=R.toneMapping;R.toneMapping=Kn;let Gt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),k===!0&&It.setGlobalState(R.clippingPlanes,V),Sn(S,Z,V),q.updateMultisampleRenderTarget(vt),q.updateRenderTargetMipmap(vt),Ot.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let ne=0,me=F.length;ne<me;ne++){let ge=F[ne],{object:fe,geometry:Re,material:Ut,group:sn}=ge;if(Ut.side===De&&fe.layers.test(V.layers)){let _e=Ut.side;Ut.side=yn,Ut.needsUpdate=!0,Ue(fe,Z,V,Re,Ut,sn),Ut.side=_e,Ut.needsUpdate=!0,Rt=!0}}Rt===!0&&(q.updateMultisampleRenderTarget(vt),q.updateRenderTargetMipmap(vt))}R.setRenderTarget(At,Ht,Bt),R.setClearColor($t,Wt),Gt!==void 0&&(V.viewport=Gt),R.toneMapping=qt}function Sn(S,F,Z){let V=F.isScene===!0?F.overrideMaterial:null;for(let W=0,vt=S.length;W<vt;W++){let Lt=S[W],{object:At,geometry:Ht,group:Bt}=Lt,qt=Lt.material;qt.allowOverride===!0&&V!==null&&(qt=V),At.layers.test(Z.layers)&&Ue(At,F,Z,Ht,qt,Bt)}}function Ue(S,F,Z,V,W,vt){I!==null&&W.isNodeMaterial&&I.setObject(S,W),S.onBeforeRender(R,F,Z,V,W,vt),S.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(R,F,Z,V,S,vt),W.transparent===!0&&W.side===De&&W.forceSinglePass===!1?(W.side=yn,W.needsUpdate=!0,R.renderBufferDirect(Z,F,V,W,S,vt),W.side=Ji,W.needsUpdate=!0,R.renderBufferDirect(Z,F,V,W,S,vt),W.side=De):R.renderBufferDirect(Z,F,V,W,S,vt),S.onAfterRender(R,F,Z,V,W,vt)}function Pe(S,F,Z){F.isScene!==!0&&(F=pt);let V=G.get(S),W=T.state.lights,vt=T.state.shadowsArray,Lt=W.state.version,At=_t.getParameters(S,W.state,vt,F,Z,T.state.lightProbeGridArray),Ht=_t.getProgramCacheKey(At),Bt=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let qt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=dt.get(S.envMap||V.environment,qt),V.envMapRotation=V.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Bt===void 0&&(S.addEventListener("dispose",cn),Bt=new Map,V.programs=Bt);let Gt=Bt.get(Ht);if(Gt!==void 0){if(V.currentProgram===Gt&&V.lightsStateVersion===Lt)return Cn(S,At),Gt}else At.uniforms=_t.getUniforms(S),I!==null&&S.isNodeMaterial&&I.build(S,Z,At),S.onBeforeCompile(At,R),Gt=_t.acquireProgram(At,Ht),Bt.set(Ht,Gt),V.uniforms=At.uniforms;let Rt=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Rt.clippingPlanes=It.uniform),Cn(S,At),V.needsLights=Ae(S),V.lightsStateVersion=Lt,V.needsLights&&(Rt.ambientLightColor.value=W.state.ambient,Rt.lightProbe.value=W.state.probe,Rt.sunLights.value=W.state.sun,Rt.sunLightShadows.value=W.state.sunShadow,Rt.directionalLights.value=W.state.directional,Rt.directionalLightShadows.value=W.state.directionalShadow,Rt.spotLights.value=W.state.spot,Rt.spotLightShadows.value=W.state.spotShadow,Rt.rectAreaLights.value=W.state.rectArea,Rt.ltc_1.value=W.state.rectAreaLTC1,Rt.ltc_2.value=W.state.rectAreaLTC2,Rt.pointLights.value=W.state.point,Rt.pointLightShadows.value=W.state.pointShadow,Rt.hemisphereLights.value=W.state.hemi,Rt.sunShadowMatrix.value=W.state.sunShadowMatrix,Rt.sunShadowCascade.value=W.state.sunShadowCascade,Rt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Rt.spotLightMatrix.value=W.state.spotLightMatrix,Rt.spotLightMap.value=W.state.spotLightMap,Rt.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=Gt,V.uniformsList=null,Gt}function Se(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=sr.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Cn(S,F){let Z=G.get(S);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function ve(S,F){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let Z=0,V=S.length;Z<V;Z++){let W=S[Z];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function re(S,F,Z,V,W){F.isScene!==!0&&(F=pt),q.resetTextureUnits();let vt=F.fog,Lt=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,At=rt===null?R.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:xe.workingColorSpace,Ht=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Bt=dt.get(V.envMap||Lt,Ht),qt=V.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Gt=!!Z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Rt=!!Z.morphAttributes.position,ne=!!Z.morphAttributes.normal,me=!!Z.morphAttributes.color,ge=Kn;V.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ge=R.toneMapping);let fe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Re=fe!==void 0?fe.length:0,Ut=G.get(V),sn=T.state.lights;if(k===!0&&(J===!0||S!==nt)){let Ne=S===nt&&V.id===$;It.setState(V,S,Ne)}let _e=!1;V.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==sn.state.version||Ut.outputColorSpace!==At||W.isBatchedMesh&&Ut.batching===!1||!W.isBatchedMesh&&Ut.batching===!0||W.isBatchedMesh&&Ut.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ut.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ut.instancing===!1||!W.isInstancedMesh&&Ut.instancing===!0||W.isSkinnedMesh&&Ut.skinning===!1||!W.isSkinnedMesh&&Ut.skinning===!0||W.isInstancedMesh&&Ut.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ut.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ut.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ut.instancingMorph===!1&&W.morphTexture!==null||Ut.envMap!==Bt||V.fog===!0&&Ut.fog!==vt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==It.numPlanes||Ut.numIntersection!==It.numIntersection)||Ut.vertexAlphas!==qt||Ut.vertexTangents!==Gt||Ut.morphTargets!==Rt||Ut.morphNormals!==ne||Ut.morphColors!==me||Ut.toneMapping!==ge||Ut.morphTargetsCount!==Re||!!Ut.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(_e=!0):(_e=!0,Ut.__version=V.version);let Hn=Ut.currentProgram;_e===!0&&(Hn=Pe(V,F,W),I&&V.isNodeMaterial&&I.onUpdateProgram(V,Hn,Ut));let ii=!1,Di=!1,Ts=!1,Ie=Hn.getUniforms(),rn=Ut.uniforms;if(_.useProgram(Hn.program)&&(ii=!0,Di=!0,Ts=!0),V.id!==$&&($=V.id,Di=!0),Ut.needsLights){let Ne=ve(T.state.lightProbeGridArray,W);Ut.lightProbeGrid!==Ne&&(Ut.lightProbeGrid=Ne,Di=!0)}if(ii||nt!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Ie.setValue(L,"projectionMatrix",S.projectionMatrix),Ie.setValue(L,"viewMatrix",S.matrixWorldInverse);let Ni=Ie.map.cameraPosition;Ni!==void 0&&Ni.setValue(L,ht.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&Ie.setValue(L,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ie.setValue(L,"isOrthographic",S.isOrthographicCamera===!0),nt!==S&&(nt=S,Di=!0,Ts=!0)}if(Ut.needsLights&&(sn.state.sunShadowMap.length>0&&Ie.setValue(L,"sunShadowMap",sn.state.sunShadowMap,q),sn.state.directionalShadowMap.length>0&&Ie.setValue(L,"directionalShadowMap",sn.state.directionalShadowMap,q),sn.state.spotShadowMap.length>0&&Ie.setValue(L,"spotShadowMap",sn.state.spotShadowMap,q),sn.state.pointShadowMap.length>0&&Ie.setValue(L,"pointShadowMap",sn.state.pointShadowMap,q)),W.isSkinnedMesh){Ie.setOptional(L,W,"bindMatrix"),Ie.setOptional(L,W,"bindMatrixInverse");let Ne=W.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),Ie.setValue(L,"boneTexture",Ne.boneTexture,q))}W.isBatchedMesh&&(Ie.setOptional(L,W,"batchingTexture"),Ie.setValue(L,"batchingTexture",W._matricesTexture,q),Ie.setOptional(L,W,"batchingIdTexture"),Ie.setValue(L,"batchingIdTexture",W._indirectTexture,q),Ie.setOptional(L,W,"batchingColorTexture"),W._colorsTexture!==null&&Ie.setValue(L,"batchingColorTexture",W._colorsTexture,q));let Ui=Z.morphAttributes;if((Ui.position!==void 0||Ui.normal!==void 0||Ui.color!==void 0)&&N.update(W,Z,Hn),(Di||Ut.receiveShadow!==W.receiveShadow)&&(Ut.receiveShadow=W.receiveShadow,Ie.setValue(L,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(rn.envMapIntensity.value=F.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=fx()),Di){if(Ie.setValue(L,"toneMappingExposure",R.toneMappingExposure),Ut.needsLights&&nn(rn,Ts),vt&&V.fog===!0&&zt.refreshFogUniforms(rn,vt),zt.refreshMaterialUniforms(rn,V,lt,j,T.state.transmissionRenderTarget[S.id]),Ut.needsLights&&Ut.lightProbeGrid){let Ne=Ut.lightProbeGrid;rn.probesSH.value=Ne.texture,rn.probesMin.value.copy(Ne.boundingBox.min),rn.probesMax.value.copy(Ne.boundingBox.max),rn.probesResolution.value.copy(Ne.resolution)}sr.upload(L,Se(Ut),rn,q)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(sr.upload(L,Se(Ut),rn,q),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ie.setValue(L,"center",W.center),Ie.setValue(L,"modelViewMatrix",W.modelViewMatrix),Ie.setValue(L,"normalMatrix",W.normalMatrix),Ie.setValue(L,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let Ne=V.uniformsGroups;for(let Ni=0,ws=Ne.length;Ni<ws;Ni++){let vh=Ne[Ni];ct.update(vh,Hn),ct.bind(vh,Hn)}}return Hn}function nn(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.sunLights.needsUpdate=F,S.sunLightShadows.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function Ae(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(S,F,Z){let V=G.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),G.get(S.texture).__webglTexture=F,G.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){let Z=G.get(S);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,Z=0){rt=S,K=F,Y=Z;let V=null,W=!1,vt=!1;if(S){let At=G.get(S);if(At.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,At.__webglFramebuffer),X.copy(S.viewport),xt.copy(S.scissor),gt=S.scissorTest,_.viewport(X),_.scissor(xt),_.setScissorTest(gt),$=-1;return}else if(At.__webglFramebuffer===void 0)q.setupRenderTarget(S);else if(At.__hasExternalTextures)q.rebindTextures(S,G.get(S.texture).__webglTexture,G.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let qt=S.depthTexture;if(At.__boundDepthTexture!==qt){if(qt!==null&&G.has(qt)&&(S.width!==qt.image.width||S.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(S)}}let Ht=S.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(vt=!0);let Bt=G.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Bt[F])?V=Bt[F][Z]:V=Bt[F],W=!0):S.samples>0&&q.useMultisampledRTT(S)===!1?V=G.get(S).__webglMultisampledFramebuffer:Array.isArray(Bt)?V=Bt[Z]:V=Bt,X.copy(S.viewport),xt.copy(S.scissor),gt=S.scissorTest}else X.copy(Nt).multiplyScalar(lt).floor(),xt.copy(Yt).multiplyScalar(lt).floor(),gt=de;if(Z!==0&&(V=B),_.bindFramebuffer(L.FRAMEBUFFER,V)&&_.drawBuffers(S,V),_.viewport(X),_.scissor(xt),_.setScissorTest(gt),W){let At=G.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,At.__webglTexture,Z)}else if(vt){let At=F;for(let Ht=0;Ht<S.textures.length;Ht++){let Bt=G.get(S.textures[Ht]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Ht,Bt.__webglTexture,Z,At)}}else if(S!==null&&Z!==0){let At=G.get(S.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,At.__webglTexture,Z)}$=-1};function zn(S){let F=G.get(S);return(F.__readFormat!==S.format||F.__readType!==S.type)&&(F.__readFormat=S.format,F.__readType=S.type,F.__formatReadable=A.textureFormatReadable(S.format),F.__typeReadable=A.textureTypeReadable(S.type)),F}this.readRenderTargetPixels=function(S,F,Z,V,W,vt,Lt,At=0){if(!(S&&S.isWebGLRenderTarget)){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ht=Ht[Lt]),Ht){_.bindFramebuffer(L.FRAMEBUFFER,Ht);try{let Bt=S.textures[At],qt=Bt.format,Gt=Bt.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+At);let Rt=zn(Bt);if(Rt.__formatReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){te("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-V&&Z>=0&&Z<=S.height-W&&L.readPixels(F,Z,V,W,bt.convert(qt),bt.convert(Gt),vt)}finally{let Bt=rt!==null?G.get(rt).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(S,F,Z,V,W,vt,Lt,At=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=G.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Lt!==void 0&&(Ht=Ht[Lt]),Ht)if(F>=0&&F<=S.width-V&&Z>=0&&Z<=S.height-W){_.bindFramebuffer(L.FRAMEBUFFER,Ht);let Bt=S.textures[At],qt=Bt.format,Gt=Bt.type;S.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+At);let Rt=zn(Bt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ne=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ne),L.bufferData(L.PIXEL_PACK_BUFFER,vt.byteLength,L.STREAM_READ),L.readPixels(F,Z,V,W,bt.convert(qt),bt.convert(Gt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let me=rt!==null?G.get(rt).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,me);let ge=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Du(L,ge,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ne),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,vt),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(ne),L.deleteSync(ge),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,Z=0){let V=Math.pow(2,-Z),W=Math.floor(S.image.width*V),vt=Math.floor(S.image.height*V),Lt=F!==null?F.x:0,At=F!==null?F.y:0;q.setTexture2D(S,0),L.copyTexSubImage2D(L.TEXTURE_2D,Z,0,0,Lt,At,W,vt),_.unbindTexture()},this.copyTextureToTexture=function(S,F,Z=null,V=null,W=0,vt=0){let Lt,At,Ht,Bt,qt,Gt,Rt,ne,me,ge=S.isCompressedTexture?S.mipmaps[vt]:S.image;if(Z!==null)Lt=Z.max.x-Z.min.x,At=Z.max.y-Z.min.y,Ht=Z.isBox3?Z.max.z-Z.min.z:1,Bt=Z.min.x,qt=Z.min.y,Gt=Z.isBox3?Z.min.z:0;else{let rn=Math.pow(2,-W);Lt=Math.floor(ge.width*rn),At=Math.floor(ge.height*rn),S.isDataArrayTexture?Ht=ge.depth:S.isData3DTexture?Ht=Math.floor(ge.depth*rn):Ht=1,Bt=0,qt=0,Gt=0}V!==null?(Rt=V.x,ne=V.y,me=V.z):(Rt=0,ne=0,me=0);let fe=bt.convert(F.format),Re=bt.convert(F.type),Ut;F.isData3DTexture?(q.setTexture3D(F,0),Ut=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(q.setTexture2DArray(F,0),Ut=L.TEXTURE_2D_ARRAY):(q.setTexture2D(F,0),Ut=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);let sn=_.getParameter(L.UNPACK_ROW_LENGTH),_e=_.getParameter(L.UNPACK_IMAGE_HEIGHT),Hn=_.getParameter(L.UNPACK_SKIP_PIXELS),ii=_.getParameter(L.UNPACK_SKIP_ROWS),Di=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,ge.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ge.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Bt),_.pixelStorei(L.UNPACK_SKIP_ROWS,qt),_.pixelStorei(L.UNPACK_SKIP_IMAGES,Gt);let Ts=S.isDataArrayTexture||S.isData3DTexture,Ie=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){let rn=G.get(S),Ui=G.get(F),Ne=G.get(rn.__renderTarget),Ni=G.get(Ui.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,Ne.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ni.__webglFramebuffer);for(let ws=0;ws<Ht;ws++)Ts&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(S).__webglTexture,W,Gt+ws),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(F).__webglTexture,vt,me+ws)),L.blitFramebuffer(Bt,qt,Lt,At,Rt,ne,Lt,At,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||G.has(S)){let rn=G.get(S),Ui=G.get(F);_.bindFramebuffer(L.READ_FRAMEBUFFER,D),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,O);for(let Ne=0;Ne<Ht;Ne++)Ts?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,rn.__webglTexture,W,Gt+Ne):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,rn.__webglTexture,W),Ie?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ui.__webglTexture,vt,me+Ne):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ui.__webglTexture,vt),W!==0?L.blitFramebuffer(Bt,qt,Lt,At,Rt,ne,Lt,At,L.COLOR_BUFFER_BIT,L.NEAREST):Ie?L.copyTexSubImage3D(Ut,vt,Rt,ne,me+Ne,Bt,qt,Lt,At):L.copyTexSubImage2D(Ut,vt,Rt,ne,Bt,qt,Lt,At);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Ie?S.isDataTexture||S.isData3DTexture?L.texSubImage3D(Ut,vt,Rt,ne,me,Lt,At,Ht,fe,Re,ge.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(Ut,vt,Rt,ne,me,Lt,At,Ht,fe,ge.data):L.texSubImage3D(Ut,vt,Rt,ne,me,Lt,At,Ht,fe,Re,ge):S.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,vt,Rt,ne,Lt,At,fe,Re,ge.data):S.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,vt,Rt,ne,ge.width,ge.height,fe,ge.data):L.texSubImage2D(L.TEXTURE_2D,vt,Rt,ne,Lt,At,fe,Re,ge);_.pixelStorei(L.UNPACK_ROW_LENGTH,sn),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,_e),_.pixelStorei(L.UNPACK_SKIP_PIXELS,Hn),_.pixelStorei(L.UNPACK_SKIP_ROWS,ii),_.pixelStorei(L.UNPACK_SKIP_IMAGES,Di),vt===0&&F.generateMipmaps&&L.generateMipmap(Ut),_.unbindTexture()},this.initRenderTarget=function(S){G.get(S).__webglFramebuffer===void 0&&q.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?q.setTextureCube(S,0):S.isData3DTexture?q.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?q.setTexture2DArray(S,0):q.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){K=0,Y=0,rt=null,_.reset(),yt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}};var Xe={goldPrimary:"#D4A017",goldBright:"#F5C542",goldShadow:"#8C6A1D",greenMain:"#A31621",greenDeep:"#7A0C14",leatherBrown:"#5C3A21",furWhite:"#F5F0E6",furGinger:"#C96A2B",furPatchShadow:"#A24E1B",nosePink:"#E8A0A0",eyeAmber:"#FFB84D",steelBlade:"#C0C6CC",gemEmerald:"#C22240",crimsonMain:"#A31621",crimsonDeep:"#7A0C14",gemRuby:"#C22240"},tn={redMain:"#1B7A4B",redBright:"#35D07F",redDeep:"#0E4A2C",silverMain:"#C9D1D9",silverBright:"#E8EDF2",silverShadow:"#8F98A3",clothWhite:"#F2EFE9",furCharcoal:"#2E2E38",furSilverStripe:"#9AA0AA",furBelly:"#B9BFC7",eyeJade:"#35D07F",noseBlack:"#1A1A22",gemRuby:"#34D399",steelBlade:"#C0C6CC",emeraldMain:"#1B7A4B",emeraldBright:"#35D07F",emeraldDeep:"#0E4A2C",gemEmerald:"#34D399"},$e={BUY:"#26A69A",BUY_BRIGHT:"#35D07F",BUY_DEEP:"#0E4A2C",SELL:"#EF5350",SELL_BRIGHT:"#FF8A80",SELL_DEEP:"#7A0C14"},we={skyZenith:"#05060F",skyHorizon:"#0D1030",fog:"#1A1626",moonBtc:"#F7931A",moonHalo:"#FFB84D",moonSymbol:"#7A4A08",stoneWall:"#B98A5A",stoneShadow:"#6E523A",stonePole:"#8E8E80",tileBlue:"#1F5FA8",tileWhite:"#F2EFE9",tileEmerald:"#12755F",floorBase:"#D9CDB4",floorGrout:"#6E5A42",torchFlame:"#FF9D45",torchGlow:"#FFC97A",iron:"#3A3A40",flagUp:"#26A69A",flagDown:"#EF5350",ropeHemp:"#A67B4F",ropeFiber:"#8A6238",frieze:"#C9B389"},ca={gold:{metalness:.85,roughness:.35},goldBright:{metalness:.85,roughness:.28},steel:{metalness:.9,roughness:.25},silver:{metalness:.85,roughness:.3},cloth:{metalness:0,roughness:.9},fur:{metalness:0,roughness:.95}},Me={spanHalf:10,ropeY:3.2,ropeRadius:.065,ropeSegments:24,restSagOne:.34,restSagTwo:.5,damping:.93,swayClamp:.12,impulseScale:.16,ropeSmooth:20,poleClearance:1.5,catHeight:1.3,minBodyGap:.78,minHeadCentre:.8};var _l=4;function _d(i){_l=Math.max(1,Math.min(16,Math.round(i)||1))}function Ke(i,{repeatX:t=1,repeatY:e=1,srgb:n=!0}={}){let s=new xn(i);return n&&(s.colorSpace=Ye),s.wrapS=s.wrapT=ai,s.repeat.set(t,e),s.generateMipmaps=!0,s.minFilter=Ln,s.magFilter=Ze,s.anisotropy=_l,s}function vs(i,t){let e=document.createElement("canvas");e.width=e.height=i;let n=e.getContext("2d");return n.fillStyle=t,n.fillRect(0,0,i,i),{c:e,g:n,size:i}}function Qi(i){let t=i|0||1;return()=>(t=t*16807%2147483647,t%1e5/1e5)}function Wn(i,t=1){let e=document.createElement("canvas");e.width=i.width,e.height=i.height;let n=e.getContext("2d");n.drawImage(i,0,0);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a+=4){let c=r[a]*.299+r[a+1]*.587+r[a+2]*.114,l=Math.max(0,Math.min(255,128+(c-128)*t));r[a]=r[a+1]=r[a+2]=l}n.putImageData(s,0,0);let o=new xn(e);return o.wrapS=o.wrapT=ai,o.generateMipmaps=!0,o.minFilter=Ln,o.anisotropy=_l,o}function px(i,t=.45,e=.98){let n=document.createElement("canvas");n.width=i.width,n.height=i.height;let s=n.getContext("2d");s.drawImage(i,0,0);let r=s.getImageData(0,0,n.width,n.height),o=r.data;for(let c=0;c<o.length;c+=4){let l=(o[c]*.299+o[c+1]*.587+o[c+2]*.114)/255,h=Math.round(255*(e-(e-t)*l));o[c]=o[c+1]=o[c+2]=h}s.putImageData(r,0,0);let a=new xn(n);return a.wrapS=a.wrapT=ai,a.generateMipmaps=!0,a.minFilter=Ln,a.anisotropy=_l,a}function mx({seed:i=3,stripes:t=0,blotch:e=0,grain:n=.1,base:s="#ffffff",dark:r="#b9b9c4"}={}){let{c:o,g:a,size:c}=vs(256,s),l=Qi(i);if(e){for(let d=0;d<e;d++){let u=l()*c,f=l()*c,g=24+l()*46,x=a.createRadialGradient(u,f,g*.15,u,f,g);x.addColorStop(0,r),x.addColorStop(.7,r),x.addColorStop(1,"rgba(255,255,255,0)"),a.globalAlpha=.45+l()*.25,a.fillStyle=x,a.beginPath(),a.arc(u,f,g,0,Math.PI*2),a.fill()}a.globalAlpha=1}if(t){for(let d=0;d<t;d++){let u=(d+.5)*(c/t)+(l()-.5)*14,f=8+l()*10,g=-24-l()*30;for(;g<c+24;){let x=l()<.29?6+l()*22:0;g+=x;let m=16+l()*40,p=c/t*(.22+l()*.34),M=u+Math.sin(g*.035+d*1.7)*f;a.fillStyle=r,a.globalAlpha=.34+l()*.3,a.beginPath(),a.ellipse(g+m/2,M,m/2+6,p/2,(l()-.5)*.22,0,Math.PI*2),a.fill(),g+=m}}a.globalAlpha=1}let h=Qi(i*7+11);for(let d=0;d<1100;d++){let u=h()*c,f=h()*c,g=4+h()*9,x=h()*Math.PI*2;a.strokeStyle=h()<.5?"rgba(255,255,255,0.42)":"rgba(96,90,102,0.34)",a.lineWidth=1.1+h()*1.6,a.beginPath(),a.moveTo(u,f),a.lineTo(u+Math.cos(x)*g,f+Math.sin(x)*g),a.stroke()}for(let d=0;d<90;d++){let u=h()*c,f=h()*c,g=5+h()*13,x=a.createRadialGradient(u,f,0,u,f,g),m=h()<.5;x.addColorStop(0,m?"rgba(255,255,255,0.30)":"rgba(70,64,76,0.26)"),x.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=x,a.beginPath(),a.arc(u,f,g,0,Math.PI*2),a.fill()}return o}function ha(i={}){let t=mx(i),e=Ke(t,{repeatX:i.repeatX||1.2,repeatY:i.repeatY||1.2,srgb:!0}),n=Wn(t,.8);return n.repeat.copy(e.repeat),{map:e,bump:n}}function gx({seed:i=5,base:t="#ffffff",thread:e="rgba(64,54,44,0.46)",weave:n=10}={}){let{c:s,g:r,size:o}=vs(128,t);r.strokeStyle=e,r.lineWidth=2;for(let c=0;c<o;c+=n)r.beginPath(),r.moveTo(c,0),r.lineTo(c,o),r.stroke(),r.beginPath(),r.moveTo(0,c),r.lineTo(o,c),r.stroke();let a=Qi(i);for(let c=-o;c<o;c+=n)r.strokeStyle="rgba(255,255,255,0.24)",r.beginPath(),r.moveTo(c,0),r.lineTo(c+o,o),r.stroke();for(let c=0;c<420;c++)r.fillStyle=a()<.5?"rgba(255,255,255,0.20)":"rgba(40,34,30,0.20)",r.fillRect(a()*o,a()*o,3,2);return s}function Ss(i={}){let t=gx(i),e=Ke(t,{repeatX:i.repeatX||3,repeatY:i.repeatY||3,srgb:!0}),n=Wn(t,.9);return n.repeat.copy(e.repeat),{map:e,bump:n}}function _x({seed:i=9,base:t="#ffffff",streak:e=.22,scratches:n=260}={}){let{c:s,g:r,size:o}=vs(128,t),a=Qi(i);for(let c=0;c<n;c++){let l=a()*o,h=e*(.3+a());r.strokeStyle=a()<.5?`rgba(255,255,255,${h})`:`rgba(60,66,74,${h})`,r.lineWidth=.6+a()*1.3,r.beginPath(),r.moveTo(0,l),r.bezierCurveTo(o*.3,l+(a()-.5)*3,o*.7,l+(a()-.5)*3,o,l+(a()-.5)*2),r.stroke()}for(let c=0;c<5;c++){r.strokeStyle="rgba(40,44,52,0.35)",r.lineWidth=1.4;let l=a()*o;r.beginPath(),r.moveTo(a()*o*.5,l),r.lineTo(o*(.6+a()*.4),l+(a()-.5)*4),r.stroke()}return s}function ts(i={}){let t=_x(i),e=Ke(t,{repeatX:i.repeatX||1,repeatY:i.repeatY||1,srgb:!0}),n=Wn(t,.35);return n.repeat.copy(e.repeat),{map:e,bump:n}}function xx({seed:i=13,base:t="#ffffff"}={}){let{c:e,g:n,size:s}=vs(128,t),r=Qi(i);for(let o=0;o<900;o++){let a=r()*s,c=r()*s,l=1+r()*3.4;n.fillStyle=r()<.5?"rgba(255,255,255,0.16)":"rgba(50,34,22,0.20)",n.beginPath(),n.ellipse(a,c,l,l*.7,r()*3,0,Math.PI*2),n.fill()}for(let o=0;o<26;o++){n.strokeStyle="rgba(50,34,22,0.18)",n.lineWidth=.9,n.beginPath();let a=r()*s,c=r()*s;n.moveTo(a,c),n.quadraticCurveTo(a+(r()-.5)*40,c+(r()-.5)*40,a+(r()-.5)*70,c+(r()-.5)*70),n.stroke()}return e}function lh(i={}){let t=xx(i),e=Ke(t,{repeatX:1,repeatY:1,srgb:!0}),n=Wn(t,.8);return{map:e,bump:n}}function yx({seed:i=21,base:t="#ffffff",blocks:e=4,alpha:n=.22,speckle:s=1200,size:r=512}={}){let{c:o,g:a}=vs(r,t),c=Qi(i),l=r/e;for(let d=0;d<e;d++){let u=d%2*(r/(e*2));for(let f=0;f<e;f++){let g=u+f*r/e-r/(e*2),x=c();a.fillStyle=x<.35?"rgba(255,255,255,0.10)":x<.7?"rgba(120,96,70,0.10)":"rgba(255,246,232,0.06)",a.fillRect(g,d*l,r/e,l);let m=a.createLinearGradient(0,d*l,0,d*l+l);m.addColorStop(0,"rgba(255,250,238,0.10)"),m.addColorStop(.55,"rgba(255,255,255,0)"),m.addColorStop(1,"rgba(48,36,24,0.10)"),a.fillStyle=m,a.fillRect(g,d*l,r/e,l);for(let p=0;p<12;p++){let M=g+c()*(r/e),w=d*l+c()*l,v=2+c()*7,b=a.createRadialGradient(M,w,0,M,w,v);b.addColorStop(0,"rgba(56,42,28,0.24)"),b.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=b,a.beginPath(),a.arc(M,w,v,0,Math.PI*2),a.fill()}for(let p=0;p<4;p++){a.strokeStyle="rgba(90,72,52,0.14)",a.lineWidth=1+c()*1.5,a.beginPath();let M=g+c()*(r/e),w=d*l+c()*l;a.moveTo(M,w),a.lineTo(M+(c()-.5)*34,w+(c()-.5)*12),a.stroke()}}}for(let d=0;d<=e;d++){let u=d*l;a.strokeStyle=`rgba(58,44,32,${n+.12})`,a.lineWidth=3,a.beginPath(),a.moveTo(0,u),a.lineTo(r,u),a.stroke(),a.strokeStyle="rgba(255,248,236,0.16)",a.lineWidth=1.6,a.beginPath(),a.moveTo(0,u+2.4),a.lineTo(r,u+2.4),a.stroke();let f=d%2*(r/(e*2));for(let g=0;g<e;g++){let x=f+g*r/e;a.strokeStyle=`rgba(58,44,32,${n+.12})`,a.lineWidth=3,a.beginPath(),a.moveTo(x,u),a.lineTo(x,u+l),a.stroke(),a.strokeStyle="rgba(255,248,236,0.12)",a.lineWidth=1.4,a.beginPath(),a.moveTo(x+2.2,u),a.lineTo(x+2.2,u+l),a.stroke()}}for(let d=0;d<s*2;d++){let u=c()*r,f=c()*r,g=.6+c()*2.6;a.fillStyle=c()<.5?"rgba(255,255,255,0.16)":"rgba(48,36,26,0.18)",a.fillRect(u,f,g,g)}for(let d=0;d<26;d++){let u=c()*r;a.strokeStyle="rgba(70,54,38,0.12)",a.lineWidth=2+c()*8,a.beginPath(),a.moveTo(u,0),a.lineTo(u+(c()-.5)*30,r),a.stroke()}for(let d=0;d<48;d++){let u=c()*r,f=c()*r,g=2+c()*9,x=a.createRadialGradient(u,f,0,u,f,g);x.addColorStop(0,"rgba(60,46,32,0.22)"),x.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=x,a.beginPath(),a.arc(u,f,g,0,Math.PI*2),a.fill()}let h=a.createLinearGradient(0,r*.62,0,r);return h.addColorStop(0,"rgba(40,52,36,0)"),h.addColorStop(1,"rgba(38,50,34,0.20)"),a.fillStyle=h,a.fillRect(0,r*.62,r,r*.38),o}function xl(i={}){let t=yx(i),e=Ke(t,{repeatX:i.repeatX||2,repeatY:i.repeatY||2,srgb:!0}),n=Wn(t,1.1);return n.repeat.copy(e.repeat),{map:e,bump:n}}function vx({seed:i=31,size:t=256,twistPeriod:e=96}={}){let{c:n,g:s}=vs(t,"#8a6140"),r=Qi(i),o=3,a=t/o,c=22,l=u=>{for(let f of[-t,0,t])s.save(),s.translate(0,f),u(),s.restore()},h=["rgba(182,136,84,1)","rgba(220,172,116,1)","rgba(154,110,64,1)"];for(let u=0;u<o;u++)l(()=>{s.fillStyle=h[u],s.beginPath(),s.moveTo(0,u*a),s.lineTo(t,u*a+c),s.lineTo(t,(u+1)*a+c),s.lineTo(0,(u+1)*a),s.closePath(),s.fill()});for(let u=1;u<=o;u++){let f=u*a;l(()=>{s.strokeStyle="rgba(40,22,8,0.44)",s.lineWidth=28,s.beginPath(),s.moveTo(0,f),s.lineTo(t,f+c),s.stroke(),s.strokeStyle="rgba(20,10,4,0.66)",s.lineWidth=13,s.beginPath(),s.moveTo(0,f),s.lineTo(t,f+c),s.stroke(),s.strokeStyle="rgba(255,242,214,0.46)",s.lineWidth=8,s.beginPath(),s.moveTo(0,f-12),s.lineTo(t,f+c-12),s.stroke()})}for(let u=0;u<900;u++){let f=r()*t,g=r()*t,x=10+r()*34,m=(r()-.5)*5+c*(x/t);s.strokeStyle=r()<.5?"rgba(244,222,184,0.40)":"rgba(52,32,14,0.36)",s.lineWidth=.9+r()*1.8,s.beginPath(),s.moveTo(f,g),s.lineTo(f+x,g+m),s.stroke()}for(let u=-t;u<t*2;u+=e)l(()=>{s.strokeStyle="rgba(40,24,10,0.30)",s.lineWidth=16,s.beginPath(),s.moveTo(u,0),s.lineTo(u+34,t),s.stroke(),s.strokeStyle="rgba(255,238,206,0.22)",s.lineWidth=9,s.beginPath(),s.moveTo(u+16,0),s.lineTo(u+50,t),s.stroke()});for(let u=0;u<20;u++)s.fillStyle="rgba(46,30,14,0.16)",s.beginPath(),s.ellipse(r()*t,r()*t,12+r()*24,6+r()*10,r()*3,0,Math.PI*2),s.fill();let d=s.createLinearGradient(0,0,0,t);return d.addColorStop(0,"rgba(255,246,224,0.16)"),d.addColorStop(.35,"rgba(255,255,255,0)"),d.addColorStop(.5,"rgba(0,0,0,0.12)"),d.addColorStop(.75,"rgba(255,255,255,0)"),d.addColorStop(1,"rgba(255,246,224,0.14)"),s.fillStyle=d,s.fillRect(0,0,t,t),n}function xd({repeatX:i=4,repeatY:t=1,seed:e=31,twists:n=2}={}){let s=vx({seed:e,twists:n,twistPeriod:256/n}),r=Ke(s,{repeatX:i,repeatY:t,srgb:!0}),o=Wn(s,2.2);o.repeat.copy(r.repeat);let a=px(s,.45,.95);return a.repeat.copy(r.repeat),{map:r,bump:o,rough:a}}function Sx({seed:i=71,size:t=128,pleats:e=26,base:n="#fbf7ee",dark:s="rgba(150,140,124,0.42)"}={}){let{c:r,g:o}=vs(t,n),a=Qi(i),c=t/e;for(let l=0;l<e;l++){let h=l*c,d=o.createLinearGradient(h,0,h+c,0);d.addColorStop(0,s),d.addColorStop(.35,"rgba(255,255,255,0.55)"),d.addColorStop(.7,"rgba(255,255,255,0.1)"),d.addColorStop(1,s),o.fillStyle=d,o.fillRect(h,0,c,t)}for(let l=0;l<500;l++)o.fillStyle=a()<.5?"rgba(255,255,255,0.16)":"rgba(120,112,98,0.12)",o.fillRect(a()*t,a()*t,2,1+a()*2);return r}function ch({repeatX:i=1,repeatY:t=1,...e}={}){let n=Sx(e),s=Ke(n,{repeatX:i,repeatY:t,srgb:!0}),r=Wn(n,1.1);return r.repeat.copy(s.repeat),{map:s,bump:r}}var ei=U,hh=class{constructor(t,e=112,n=12){this.T=e,this.R=n,this.radius=t,this.bulge=.09,this.bulgeCount=8,this.lay=.16;let s=this.T+1,r=this.R+1;this.count=s*r,this.pos=new Float32Array(this.count*3),this.nrm=new Float32Array(this.count*3),this.uv=new Float32Array(this.count*2);let o=[];for(let a=1;a<=this.T;a++)for(let c=1;c<=this.R;c++){let l=r*(a-1)+(c-1),h=r*a+(c-1),d=r*a+c,u=r*(a-1)+c;o.push(l,h,u,h,d,u)}this.index=o,this.geo=new Ee,this.geo.setAttribute("position",new Fe(this.pos,3).setUsage(gs)),this.geo.setAttribute("normal",new Fe(this.nrm,3).setUsage(gs)),this.geo.setAttribute("uv",new Fe(this.uv,2)),this.geo.setIndex(o),this.cos=new Float32Array(r),this.sin=new Float32Array(r);for(let a=0;a<=this.R;a++){let c=a/this.R*Math.PI*2;this.cos[a]=Math.cos(c),this.sin[a]=Math.sin(c)}for(let a=0;a<=this.T;a++)for(let c=0;c<=this.R;c++){let l=(a*r+c)*2;this.uv[l]=a/this.T,this.uv[l+1]=c/this.R}this.pts=Array.from({length:s},()=>new ei),this.tan=Array.from({length:s},()=>new ei),this.nor=Array.from({length:s},()=>new ei),this.bin=Array.from({length:s},()=>new ei)}update(t){let{T:e,R:n,pts:s,tan:r,nor:o,bin:a}=this;for(let l=0;l<=e;l++)t(l/e,s[l]);for(let l=0;l<=e;l++){let h=s[Math.max(0,l-1)],d=s[Math.min(e,l+1)];r[l].subVectors(d,h),r[l].lengthSq()<1e-10&&r[l].set(1,0,0),r[l].normalize()}o[0].set(-r[0].y,r[0].x,0),o[0].lengthSq()<1e-6&&o[0].set(0,1,0),o[0].normalize();for(let l=1;l<=e;l++)o[l].copy(o[l-1]).addScaledVector(r[l],-r[l].dot(o[l-1])),o[l].lengthSq()<1e-8&&(o[l].set(0,1,0).addScaledVector(r[l],-r[l].y),o[l].lengthSq()<1e-8&&o[l].set(0,0,1)),o[l].normalize();let c=n+1;for(let l=0;l<=e;l++){a[l].crossVectors(r[l],o[l]).normalize();let h=s[l],d=o[l],u=a[l],f=l/e*this.bulgeCount*Math.PI*2,g=this.radius*(1+this.bulge*Math.sin(f)),x=this.lay>0?f*1:0,m=Math.cos(x),p=Math.sin(x),M=1+this.lay,w=1-this.lay;for(let v=0;v<=n;v++){let b=this.cos[v],T=this.sin[v];if(this.lay>0){let I=b*m+T*p,B=T*m-b*p;b=I*M,T=B*w}let P=d.x*b+u.x*T,y=d.y*b+u.y*T,E=d.z*b+u.z*T,R=1/Math.max(1e-6,Math.hypot(P,y,E)),C=(l*c+v)*3;this.pos[C]=h.x+P*g*R,this.pos[C+1]=h.y+y*g*R,this.pos[C+2]=h.z+E*g*R,this.nrm[C]=P*R,this.nrm[C+1]=y*R,this.nrm[C+2]=E*R}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0}},yl=class{constructor({segments:t=Me.ropeSegments,spanHalf:e=Me.spanHalf,y:n=Me.ropeY,damping:s=Me.damping,swayClamp:r=Me.swayClamp}={}){this.N=t,this.count=t+1,this.spanHalf=e,this.restY=n,this.damping=s,this.swayClamp=r,this.restLen=e*2/t,this.pos=[],this.prev=[],this.acc=[],this.rpos=[],this.spos=[],this.pinned=new Set([0,this.count-1]);for(let a=0;a<this.count;a++){let c=a/this.N,l=-e+2*e*c,h=n-Me.restSagTwo*Math.sin(Math.PI*c);this.pos.push(new ei(l,h,0)),this.prev.push(new ei(l,h,0)),this.acc.push(new ei(0,0,0)),this.rpos.push(new ei(l,h,0)),this.spos.push(new ei(l,h,0))}this.weights=new Map,this._accum=0,this._tmp=new ei,this.tube=new hh(Me.ropeRadius);let o=xd({repeatX:4,repeatY:1,seed:31,twists:2});this.mat=new Ve({map:o.map,bumpMap:o.bump,bumpScale:.9,roughnessMap:o.rough,roughness:1,metalness:0,color:16777215}),this.mesh=new se(this.tube.geo,this.mat),this.mesh.castShadow=!1,this.mesh.frustumCulled=!1,this.mesh.boundingSphere=new Ti(new ei(0,this.restY,0),e+1),this._curvePts=this.spos.map(a=>a.clone()),this.curve=new ui(this._curvePts,!1,"catmullrom",.5)}setLoad(t,e){let n=this._nearestIndex(t);this.weights.set(n,(this.weights.get(n)||0)+e)}clearLoads(){this.weights.clear()}_nearestIndex(t){let e=We.clamp((t+this.spanHalf)/(2*this.spanHalf),0,1);return Math.round(e*this.N)}injectImpulse(t,e,n,s){let r=this._nearestIndex(t),o=Me.impulseScale;for(let a of[r-1,r,r+1]){if(a<0||a>=this.count||this.pinned.has(a))continue;let c=(a===r?1:.5)*o;this.prev[a].x-=e*c,this.prev[a].y-=n*c,this.prev[a].z-=s*c}}step(t){this._accum=Math.min(this._accum+t,.1);let e=1/120,n=0;for(;this._accum>=e&&n++<16;)this._sub(e),this._accum-=e;this._relax(t)}_relax(t){let e=1-Math.exp(-(Me.ropeSmooth||20)*Math.min(t,.05)),{pos:n,rpos:s,spos:r,count:o}=this;for(let a=0;a<o;a++)s[a].lerp(n[a],e);for(let a=0;a<o;a++){if(this.pinned.has(a)){r[a].copy(s[a]);continue}let c=s[Math.max(0,a-1)],l=s[a],h=s[Math.min(o-1,a+1)];r[a].set(c.x*.25+l.x*.5+h.x*.25,c.y*.25+l.y*.5+h.y*.25,c.z*.25+l.z*.5+h.z*.25)}}_sub(t){let{pos:e,prev:n,acc:s}=this;for(let r=0;r<this.count;r++)s[r].set(0,-5.2,0);for(let[r,o]of this.weights)s[r].y-=o*4.2,r>0&&(s[r-1].y-=o*2),r<this.count-1&&(s[r+1].y-=o*2);for(let r=0;r<this.count;r++){if(this.pinned.has(r))continue;let o=e[r],a=n[r],c=s[r],l=o.x+(o.x-a.x)*this.damping+c.x*t*t,h=o.y+(o.y-a.y)*this.damping+c.y*t*t,d=o.z+(o.z-a.z)*this.damping+c.z*t*t;a.copy(o),o.set(l,h,d)}for(let r=0;r<10;r++){for(let o=0;o<this.N;o++){let a=e[o],c=e[o+1];this._tmp.subVectors(c,a);let l=this._tmp.length()||1e-6,h=(l-this.restLen)/l,d=this.pinned.has(o),u=this.pinned.has(o+1);if(d&&u)continue;let f=d?0:u?1:.5,g=u?0:d?1:.5;a.addScaledVector(this._tmp,h*f),c.addScaledVector(this._tmp,-h*g)}e[0].set(-this.spanHalf,this.restY,0),e[this.count-1].set(this.spanHalf,this.restY,0);for(let o=0;o<this.count;o++){let a=e[o];a.z=We.clamp(a.z,-this.swayClamp,this.swayClamp),a.y=Math.min(a.y,this.restY+.18)}}}yAt(t){let n=We.clamp((t+this.spanHalf)/(2*this.spanHalf),0,1)*this.N,s=Math.min(Math.floor(n),this.N-1),r=n-s;return this.spos[s].y*(1-r)+this.spos[s+1].y*r}slopeAt(t){return(this.yAt(t+.3)-this.yAt(t-.3))/(2*.3)}pointAt(t){return this.spos[We.clamp(t,0,this.count-1)]}updateVisual(){for(let n=0;n<this.count;n++)this._curvePts[n].copy(this.spos[n]);let t=this.curve;this.tube.update((n,s)=>t.getPoint(n,s))}sagAmount(){return this.restY-this.yAt(0)}};var Ms=512,es=320,vl=class{constructor(t={}){var o;this.canvas=document.createElement("canvas"),this.canvas.width=Ms,this.canvas.height=es,this.g=this.canvas.getContext("2d"),this.texture=new xn(this.canvas),this.texture.colorSpace=Ye,this.texture.anisotropy=4,this.texture.generateMipmaps=!1,this.texture.minFilter=Ze,this.minDrawMs=(o=t.minDrawMs)!=null?o:250,this._lastDrawAt=0,this._trail=null,this.mat=new Je({map:this.texture,side:De,transparent:!0}),this.plane=new se(new Le(1.6,1),this.mat),this.group=new ue,this.hanger=new ue;let e=new Ve({color:4864808,roughness:.8,metalness:.3}),n=new se(new Qe(.018,.018,.9,6),e);n.position.y=-.45;let s=new se(new Qe(.012,.012,1.7,6),e);s.rotation.z=Math.PI/2,s.position.y=-.9;let r=new se(new Ai(.05,.012,6,12,Math.PI),e);r.position.y=-.02,this.hanger.add(n,s,r),this.plane.position.y=-1.42,this.group.add(this.hanger,this.plane),this.price=0,this.chg24h=0,this.chg24hText="",this.bob=0,this.bobVel=0,this.flash=0,this.spin=0,this._lastDir=1,this.lastDrawnKey=""}setPrice(t){if(!t||t<=0||t===this.price)return;let e=this.price;if(this.price=t,e>0){let n=t>e?1:-1;this.bobVel+=n*.5,Math.abs(t-e)/e>.001&&(this.flash=.15)}this._draw()}setChange24h(t){this.chg24h=t,this.chg24hText="",this._draw()}setChange24hText(t){this.chg24hText=t||"",this._draw()}_draw(){let t=this.g,e=this._lastDir===-1?we.flagDown:we.flagUp,n=`${this.price.toFixed(1)}|${e}|${this.chg24hText||this.chg24h.toFixed(2)}`;if(n===this.lastDrawnKey)return;let s=performance.now();if(s-this._lastDrawAt<this.minDrawMs){this._trail||(this._trail=setTimeout(()=>{this._trail=null,this._draw()},this.minDrawMs+5));return}this.lastDrawnKey=n,this._lastDrawAt=s,t.clearRect(0,0,Ms,es),t.fillStyle=e,t.beginPath(),t.moveTo(14,10),t.lineTo(Ms-14,10),t.lineTo(Ms-34,es/2),t.lineTo(Ms-14,es-10),t.lineTo(14,es-10),t.lineTo(34,es/2),t.closePath(),t.fill(),t.strokeStyle="rgba(255,255,255,0.85)",t.lineWidth=8,t.stroke();let r=this.price>0?this.price.toLocaleString("en-US",{minimumFractionDigits:1,maximumFractionDigits:1}):"--";t.fillStyle="#FFFFFF",t.textAlign="center",t.font='bold 92px "Consolas", "Courier New", monospace',t.fillText(r,Ms/2,es/2+18),t.font='bold 34px "Consolas", monospace',t.fillText("USDT",Ms/2,es/2+62),t.font='bold 44px "Consolas", monospace',t.fillStyle="rgba(255,255,255,0.95)",this.chg24hText?(t.textAlign="left",t.fillText(this.chg24hText,34,58)):(t.font='bold 56px "Segoe UI Symbol", sans-serif',t.textAlign="center",t.fillText(this.chg24h>=0?"\u2191":"\u2193",62,62)),this.texture.needsUpdate=!0}tickDir(t){this._lastDir=t}update(t,e,n){this.bobVel+=-this.bob*30*t-this.bobVel*4*t,this.bob+=this.bobVel*t,this.bob=We.clamp(this.bob,-.12,.12),this.flash>0?(this.flash-=t,this.plane.material.color.setScalar(1+Math.max(this.flash,0)*4)):this.plane.material.color.setScalar(1),this.spin>0&&(this.spin=Math.max(0,this.spin-t*2));let s=e.pointAt(5);this.group.position.set(s.x,s.y+this.bob,We.clamp(s.z,-.3,.3)),this.group.rotation.z=We.clamp(-e.slopeAt(s.x)*.5,-.35,.35),this.group.rotation.x=s.z*.8,this.plane.rotation.y=Math.sin(performance.now()*.0012)*.12+this.spin*6.28}};function yd(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t;let s=n.getContext("2d");return s.fillStyle=e,s.fillRect(0,0,i,t),{c:n,g:s}}function ua(i,t,e,n=2){i.strokeStyle=e,i.lineWidth=n,i.beginPath(),t.forEach(([s,r],o)=>o?i.lineTo(s,r):i.moveTo(s,r)),i.stroke()}function uh(i,t,e,n,s){ua(i,[[t,e-n],[t+n,e],[t,e+n],[t-n,e],[t,e-n]],s,2)}function vd(i,t,e){i.fillStyle="rgba(255,255,255,0.055)";for(let n=0;n<t;n+=4)i.fillRect(n,0,1,e);i.fillStyle="rgba(37,28,20,0.045)";for(let n=0;n<e;n+=4)i.fillRect(0,n,t,1)}function Sd(i,t=.2){return{map:Ke(i),bump:Wn(i,t)}}function ar(i,t,e,n,s=!0){let r=s?"#187847":"#721723",o=s?"#A8DFC1":"#E8C078";i.fillStyle=r,i.fillRect(0,e,t,n),ua(i,[[0,e+3],[t,e+3]],o,2),ua(i,[[0,e+n-3],[t,e+n-3]],o,2);let a=n*.84;for(let c=a/2;c<t+a;c+=a)uh(i,c,e+n/2,n*.28,o),i.fillStyle=s?"#4BBE81":"#B98944",i.beginPath(),i.ellipse(c,e+n/2,n*.07,n*.13,.6,0,Math.PI*2),i.fill()}function Sl(i="skirt"){let{c:n,g:s}=yd(512,256,"#F2EFE9"),r=i==="sleeve"?8:12;for(let o=0;o<r;o++){let a=o*512/r,c=s.createLinearGradient(a,0,a+512/r,0);c.addColorStop(0,"rgba(91,99,94,0.12)"),c.addColorStop(.42,"rgba(255,255,255,0.05)"),c.addColorStop(1,"rgba(91,99,94,0.12)"),s.fillStyle=c,s.fillRect(a,0,512/r,256)}return i==="skirt"&&ar(s,512,214,34),i==="sleeve"&&ar(s,512,216,32),i==="body"&&(s.save(),s.translate(512*.25+12,18),s.rotate(Math.PI/2),ar(s,208,0,24),s.restore(),ua(s,[[512*.25-17,18],[512*.25-17,224],[512*.25+17,224],[512*.25+17,18]],"#54A879",2)),vd(s,512,256),Sd(n,.14)}function Md(i="cape"){let{c:n,g:s}=yd(512,512,"#A31621");for(let r=0;r<8;r++){let o=r*64,a=s.createLinearGradient(o,0,o+64,0);a.addColorStop(0,"rgba(30,4,13,0.28)"),a.addColorStop(.5,"rgba(238,80,63,0.12)"),a.addColorStop(1,"rgba(30,4,13,0.28)"),s.fillStyle=a,s.fillRect(o,0,64,512)}if(ar(s,512,467,34,!1),i==="cape"){for(let r of[17,473])s.save(),s.translate(r+24,0),s.rotate(Math.PI/2),ar(s,512,0,24,!1),s.restore();uh(s,256,235,74,"#D5AC65"),uh(s,256,235,64,"#D5AC65"),s.fillStyle="#E4BC77",s.beginPath(),s.moveTo(250,190),s.lineTo(262,190),s.lineTo(266,224),s.lineTo(293,220),s.lineTo(293,236),s.lineTo(266,233),s.lineTo(263,275),s.lineTo(249,275),s.lineTo(246,233),s.lineTo(219,236),s.lineTo(219,220),s.lineTo(246,224),s.closePath(),s.fill();for(let r=60;r<440;r+=66)for(let o of[85,427]){ua(s,[[o,r+25],[o,r-22]],"#BC4243",2),s.strokeStyle="#BC4243";for(let a of[-1,1])s.beginPath(),s.ellipse(o+a*8,r,7,15,a*.6,0,Math.PI*2),s.stroke()}}else{for(let r=32;r<512;r+=64)s.fillStyle="#D5AD65",s.beginPath(),s.ellipse(r,242,13,152,0,0,Math.PI*2),s.fill(),s.fillStyle="#52131B",s.beginPath(),s.ellipse(r,242,10,145,0,0,Math.PI*2),s.fill(),s.fillStyle="#E8D8B7",s.beginPath(),s.ellipse(r+2,250,5,122,0,0,Math.PI*2),s.fill();ar(s,512,45,24,!1)}return vd(s,512,512),Sd(n,.18)}var ns=U,Ii=We.clamp,dh=We.lerp,vn=i=>i*i*(3-2*i),Xn=i=>1-Math.pow(1-i,3),Mx=-Math.PI/2-.6;function Pi(i,t,e){let n=Ii((i.data.hold||0)/(i.dur||1),0,.34),s=e-n*.5;return{HF:n,p1:t,p2:s,p3:s+n}}var fh=new Map;function je(i,t){return fh.has(i)||fh.set(i,t()),fh.get(i)}function ae(i,t="fur",e={},n=null){return new Ve({color:i,...ca[t],...e})}function Pt(i,t,e=0,n=0,s=0){let r=new se(i,t);return r.position.set(e,n,s),r.castShadow=!0,r}var en=(i,t,e=14,n=10)=>new En(i,e,n),Ed=(i,t)=>new Ur(i,t,4,10),or=(i,t,e)=>new Ce(i,t,e),bd=(i,t,e=10)=>new Wi(i,t,e),an=(i,t,e=Math.PI*2)=>new Ai(i,t,8,20,e),hr=(i,t,e,n=10)=>new Qe(i,t,e,n);function cr(i){let t={position:[],normal:[],uv:[]};for(let n of i){let s=n.index?n.toNonIndexed():n;for(let r of Object.keys(t))t[r].push(...s.attributes[r].array);s!==n&&s.dispose(),n.dispose()}let e=new Ee;for(let n of Object.keys(t))e.setAttribute(n,new pe(t[n],n==="uv"?2:3));return e}function lr(i,t=.003,e=12){return new ds(new ui(i.map(s=>new ns(...s))),e,t,5,!1)}function Ml(i,t,e,n=32,s=6,r=10,o=.01){let a=new Qe(i,t,e,n,s,!0),c=a.attributes.position;for(let l=0;l<c.count;l++){let h=c.getX(l),d=c.getY(l),u=c.getZ(l),f=Ii(.5-d/e,0,1),g=Math.atan2(h,u),x=.5+.5*Math.cos(g*r+Math.sin(f*Math.PI)*.32),m=o*x*(.28+.72*Math.sin(f*Math.PI/2)),p=Math.hypot(h,u),M=(p-m)/p;c.setXYZ(l,h*M,d,u*M)}return a.computeVertexNormals(),a}function da(i,t,e,n,s,r,o){let a=new ue;a.position.set(t,e,n);let c=Pt(Ed(r,s),o,0,-s/2,0);return a.add(c),i.add(a),a}function Td(i){let t=new ue,e=je(`fur-${i.furKey}`,()=>ha(i.furOpts)),n=i.furBellyKey?je(`fur-${i.furBellyKey}`,()=>ha(i.furBellyOpts)):e,s={fur:ae(i.furBase,"fur",{bumpScale:.04},e),belly:ae(i.furBelly,"fur",{bumpScale:.03},n),inner:ae(i.earInner,"fur",{},e),eye:ae("#0A0A0D","steel",{roughness:.42,metalness:0,emissive:"#101015",emissiveIntensity:.5}),cheek:ae(i.furBelly,"fur",{roughness:.94}),nose:ae(i.nose,"fur"),whisker:ae("#FFFFFF","fur",{roughness:.45}),mouth:ae("#241A14","fur")},r=new ue;r.position.y=.52,t.add(r);let o=Pt(en(.15),s.fur,0,0,0);o.scale.set(1.1,.9,1),r.add(o);let a=new ue;r.add(a);let c=Pt(Ed(.155,.28),s.fur,.05,.3,0);c.rotation.z=-.15,a.add(c);let l=Pt(en(.13),s.belly,.02,.22,0);l.scale.set(1.1,1,.8),a.add(l);let h=new ue;h.position.set(.1,.62,0),a.add(h);let d=Pt(en(.205,18,14),s.fur);d.scale.set(1.05,.95,.95),h.add(d);let u=[];for(let C of[-1,1]){let I=new En(1,16,10);I.scale(.082,.057,.061),I.translate(.196,-.046,C*.047),u.push(I)}let f=new En(1,14,8);f.scale(.061,.035,.069),f.translate(.189,-.094,0),u.push(f);let g=Pt(cr(u),s.cheek);g.name="rounded-feline-muzzle",h.add(g);let x=Pt(new En(.025,12,8),s.nose,.271,-.023,0);x.scale.set(.72,.65,1);let m=x.geometry.attributes.position;for(let C=0;C<m.count;C++)m.setZ(C,m.getZ(C)*(.65+.35*(m.getY(C)/.025+1)/2));x.geometry.computeVertexNormals(),h.add(x);let p=i.furKey==="A-fur",M=[],w=[lr([[.282,-.033,0],[.28,-.052,0],[.277,-.062,0]],.0027,6)];for(let C of[-1,1]){w.push(lr([[.277,-.06,0],[.273,-.075,C*.024],[.253,-.073,C*.056],[.233,p&&C===1?-.053:-.064,C*.079]],.0026,9));let I=new ue;I.position.set(.135,.06,C*.122),I.rotation.y=C>0?.42:Math.PI-.42,I.rotation.z=C*(p?.1:-.09);let B=Pt(en(.041,20,14),s.eye,0,0,-.005);B.name="eye-ball",I.add(B),h.add(I),M.push(B)}h.add(Pt(cr(w),s.mouth));let v=[];for(let C of[-1,1])for(let I=0;I<3;I++){let B=[[.235,-.036-I*.015,C*.078],[.228,-.038-I*.018,C*.139],[.195,-.021-I*.025,C*.204],[.143,-.005-I*.031,C*(.257-I*.009)]],D=new ui(B.map(Y=>new ns(...Y))),O=new ds(D,12,.0027,4,!1),K=O.attributes.position;for(let Y=0;Y<=12;Y++){let rt=D.getPointAt(Y/12),$=1-Y/12*.86;for(let nt=0;nt<=4;nt++){let X=Y*5+nt;K.setXYZ(X,rt.x+(K.getX(X)-rt.x)*$,rt.y+(K.getY(X)-rt.y)*$,rt.z+(K.getZ(X)-rt.z)*$)}}O.computeVertexNormals(),v.push(O)}let b=Pt(cr(v),s.whisker);b.name="swept-tapered-whiskers",b.castShadow=!1,h.add(b);let T=[];for(let C of[1,-1]){let I=new ue;I.position.set(-.02,.17,C*.12);let B=Pt(bd(.055,.13),s.fur,0,.05,0),D=Pt(bd(.03,.08),s.inner,.012,.04,0);I.add(B,D),h.add(I),T.push(I)}let P={};for(let C of["L","R"]){let B=da(a,.08,.44,C==="L"?-.17:.17,.2,.052,s.fur),D=da(B,0,-.22,0,.19,.046,s.fur),O=Pt(en(.055,10,8),s.fur,0,-.21,0);D.add(O),P[C]={shoulder:B,elbow:D,paw:O}}let y={};for(let C of["L","R"]){let B=da(r,-.02,-.05,C==="L"?-.09:.09,.2,.062,s.fur),D=da(B,0,-.22,0,.18,.05,s.fur),O=Pt(or(.14,.05,.09),s.fur,.03,-.2,0);D.add(O),y[C]={hip:B,knee:D,foot:O}}let E=[],R=new ue;R.position.set(-.1,.06,.12),R.rotation.z=Mx,r.add(R);for(let C=0;C<6;C++){let I=da(C===0?R:E[C-1],0,C===0?0:-.13,0,.15,.04-C*.004,s.fur);C>0&&I.add(Pt(en(.04-C*.004,8,6),s.fur,0,0,0)),E.push(I)}return E[5].add(Pt(en(.03,8,6),s.fur,0,-.15,0)),{root:t,hips:r,spine:a,head:h,ears:T,arms:P,legs:y,tail:E,eyes:M,M:s,furPair:e}}function bx(){let i=new ue,t=je("steel",()=>ts({seed:41,base:"#ffffff",streak:.24})),e=je("gold",()=>ts({seed:42,base:"#ffffff",streak:.16,scratches:180})),n=je("leather",()=>lh({seed:43})),s=ae(Xe.steelBlade,"steel",{},t),r=ae(Xe.goldPrimary,"gold",{},e),o=Pt(hr(.016,.018,.13,8),ae(Xe.leatherBrown,"cloth",{},n),-.05,0,0);o.rotation.z=Math.PI/2,i.add(o);let a=Pt(an(.05,.011),r,.02,0,0);a.rotation.y=Math.PI/2,i.add(a),i.add(Pt(en(.02,8,6),r,.025,0,0));let c=Pt(hr(.009,.018,1.15,6),s,.63,0,0);return c.rotation.z=-Math.PI/2,i.add(c),i.add(Pt(en(.03,10,8),ae(Xe.gemRuby,"gold",{emissive:Xe.gemRuby,emissiveIntensity:.35}),-.125,0,0)),i}function Ex(){let i=new ue,t=je("steel",()=>ts({seed:41,base:"#ffffff",streak:.24})),e=je("silver",()=>ts({seed:44,base:"#ffffff",streak:.18,scratches:200})),n=je("cloth-emerald",()=>Ss({seed:51,weave:7})),s=ae(tn.steelBlade,"steel",{},t),r=ae(tn.silverMain,"silver",{},e),o=Pt(hr(.016,.018,.12,8),ae(tn.emeraldDeep,"cloth",{},n),-.05,0,0);o.rotation.z=Math.PI/2,i.add(o);let a=Pt(an(.045,.01,Math.PI*1.2),r,.015,0,0);a.rotation.y=Math.PI/2,a.rotation.x=.3,i.add(a);let c=[];for(let d=0;d<=8;d++){let u=d/8;c.push(new ns(.06+u*.92,Math.sin(u*1.5)*.16,0))}let l=new se(new ds(new ui(c),16,.03,6,!1),s);l.scale.z=.42,l.castShadow=!0,i.add(l);let h=Pt(an(.14,.004,Math.PI*.9),ae(tn.silverShadow,"silver"),.42,.09,0);return h.rotation.z=-.5,i.add(h),i.add(Pt(en(.028,10,8),ae(tn.gemEmerald,"gold",{emissive:tn.gemEmerald,emissiveIntensity:.4}),-.115,0,0)),i}function Tx(){let i=Td({furKey:"A-fur",furOpts:{seed:3,blotch:6,grain:.12,dark:"#d9c4ad",repeatX:1.1,repeatY:1.1},furBase:Xe.furWhite,furBelly:Xe.furWhite,earInner:Xe.nosePink,eye:Xe.eyeAmber,eyeGlow:.25,nose:Xe.nosePink}),t=je("gold",()=>ts({seed:42,base:"#ffffff",streak:.16,scratches:180})),e=je("cloth-crimson",()=>Ss({seed:52,weave:6})),n=je("ginger",()=>ha({seed:6,blotch:3,grain:.14,repeatX:3,repeatY:3})),s=je("steel",()=>ts({seed:41,base:"#ffffff",streak:.24})),r={gold:ae(Xe.goldPrimary,"gold",{},t),goldBright:ae(Xe.goldBright,"goldBright",{},t),crimson:ae(Xe.crimsonMain,"cloth",{},e),ginger:ae(Xe.furGinger,"fur",{},n),steel:ae(Xe.steelBlade,"steel",{},s),cross:ae(Xe.goldBright,"goldBright",{emissive:Xe.goldBright,emissiveIntensity:0})},o=Pt(en(.085,12,8),r.ginger,.09,.07,-.12);o.scale.set(1.1,.9,.45),i.head.add(o);let a=Pt(en(.09,12,8),r.ginger,-.06,.1,.1);a.scale.set(1,.8,.5),i.head.add(a);let c=Pt(en(.12,12,8),r.ginger,-.02,.3,-.09);c.scale.set(1.2,1,.5),i.spine.add(c),i.tail[5].add(Pt(en(.045,8,6),r.ginger,0,-.13,0));let l=new ue;l.position.set(.02,.13,0),l.rotation.z=-.12;let h=Pt(new En(.165,16,10,0,Math.PI*2,0,Math.PI*.55),r.steel);h.scale.set(1.15,1,1.05),l.add(h);let d=Pt(an(.185,.024),r.steel,0,.04,0);d.rotation.x=Math.PI/2,d.scale.set(1.18,1.05,1);let u=d.geometry.attributes.position;for(let X=0;X<u.count;X++){let xt=u.getX(X);u.setZ(X,u.getZ(X)-.025*Math.pow(Math.abs(xt)/.209,3))}d.geometry.computeVertexNormals(),l.add(d);let f=new Js;f.moveTo(-.18,.075),f.bezierCurveTo(-.12,.14,-.105,.224,-.025,.223),f.bezierCurveTo(.055,.228,.11,.155,.18,.075),f.quadraticCurveTo(0,.14,-.18,.075);let g=new Wr(f,{depth:.022,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelSegments:2,steps:1,curveSegments:12});g.scale(1,.85,1),g.translate(0,0,-.011),l.add(Pt(g,r.steel));let x=lr([[-.178,.079,0],[-.1,.183,0],[-.025,.225,0],[.065,.19,0],[.178,.08,0]],.004,18);x.scale(1,.85,1),l.add(Pt(x,r.goldBright));let m=Pt(an(.165,.008),r.goldBright,0,.05,0);m.rotation.x=Math.PI/2,m.scale.set(1.2,1.1,1),l.add(m),l.add(Pt(hr(.02,.025,.05,8),r.gold,.05,.16,-.1));let p=new ue;p.position.set(.05,.125,-.1);let M=[];for(let X=0;X<3;X++){let xt=new Le(.062-X*.009,.17-X*.02,4,10),gt=xt.attributes.position;for(let $t=0;$t<gt.count;$t++){let Wt=Ii(gt.getY($t)/(.17-X*.02)+.5,0,1),Kt=Math.pow(Math.max(0,Math.sin(Math.PI*Wt)),.7);gt.setXYZ($t,-.13*Wt+gt.getX($t)*Kt,.045*Math.sin(Wt*Math.PI*.75),X*.012+gt.getX($t)*Kt*.25+.008*Math.sin(Wt*12))}xt.computeVertexNormals(),M.push(xt)}let w=r.crimson.clone();w.side=De,p.add(Pt(cr(M),w)),p.add(Pt(lr([[0,0,0],[-.055,.035,0],[-.13,.032,0]],.0025,10),r.gold)),l.add(p),i.head.add(l),i.ears[0].position.y=.2,i.ears[0].position.z=-.17,i.ears[1].position.y=.2,i.ears[1].position.z=.17;let v=Pt(new En(.175,14,10,0,Math.PI*2,0,Math.PI*.62),r.gold,.05,.33,0);v.rotation.z=-Math.PI/2,v.scale.set(1,1,.72),i.spine.add(v);let b=[],T=[];for(let X=0;X<=30;X++){let xt=X/30*Math.PI*2;T.push([-.014,.33+Math.cos(xt)*.162,Math.sin(xt)*.117])}b.push(lr(T,.005,30)),b.push(lr([[.142,.47,0],[.202,.415,0],[.226,.33,0],[.202,.245,0],[.142,.19,0]],.004,14)),i.spine.add(Pt(cr(b),r.goldBright)),i.spine.add(Pt(or(.028,.14,.02),r.cross,.185,.34,0)),i.spine.add(Pt(or(.1,.028,.02),r.cross,.19,.35,0)),i.spine.add(Pt(en(.035,10,8),r.goldBright,.13,.47,0));for(let X of[-.17,.17]){let xt=Pt(new En(.075,10,8,0,Math.PI*2,0,Math.PI*.5),r.gold,.08,.46,X);xt.rotation.z=X>0?-.5:.5,i.spine.add(xt);let gt=Pt(an(.082,.013,Math.PI*1.15),ae(Xe.leatherBrown,"cloth"),.05,.45,X);gt.rotation.y=Math.PI/2,gt.rotation.z=-.35,i.spine.add(gt)}let P=je("leather",()=>lh({seed:43})),y=je("pleat",()=>ch({pleats:30})),E=je("embroidered-doublet",()=>Md("doublet")),R=ae("#FBF7EE","cloth",{side:De,bumpScale:.05},y),C=Pt(new Qe(.16,.305,.1,30,1,!0),R,.02,.47,0);C.rotation.z=-.06,i.spine.add(C);let I=Pt(new Qe(.135,.21,.06,26,1,!0),R,.02,.545,0);I.rotation.z=-.06,i.spine.add(I);let B=Pt(an(.142,.032),r.gold,.02,.415,0);B.rotation.x=Math.PI/2,B.scale.set(1,1,.9),i.spine.add(B);let D=ae("#FFFFFF","cloth",{bumpScale:.009},E);for(let X of["L","R"]){let xt=Pt(en(.1,12,10),D,0,-.015,0);xt.scale.set(1,.76,1.06),i.arms[X].shoulder.add(xt);let gt=Pt(an(.064,.012),r.gold,0,-.2,0);gt.rotation.x=Math.PI/2,i.arms[X].shoulder.add(gt)}for(let X of[-.12,.12]){let xt=Pt(or(.13,.15,.035),r.gold,.055,-.15,X);xt.rotation.z=.12,xt.rotation.x=X>0?.12:-.12,i.hips.add(xt)}let O=Pt(or(.052,.52,.028),ae(Xe.leatherBrown,"cloth",{},P),.162,.27,.01);O.rotation.z=.62,i.spine.add(O),i.spine.add(Pt(en(.027,10,8),r.goldBright,.19,.43,.01));let K=Pt(an(.155,.018),r.gold,.02,.52,0);K.rotation.x=Math.PI/2,K.rotation.z=.1,K.scale.set(1.05,.9,1),i.spine.add(K),i.spine.add(Pt(en(.038,10,8),r.goldBright,.16,.5,0));let Y=Pt(new Qe(.14,.19,.22,20,3,!0,.5,Math.PI*1.6),D,-.02,-.08,0);Y.material.side=De,i.hips.add(Y);let rt=Pt(an(.185,.012),r.goldBright,-.02,-.19,0);rt.rotation.x=Math.PI/2,rt.scale.set(1,1,.92),i.hips.add(rt);let $=Pt(an(.16,.02),r.gold,0,.02,0);$.rotation.x=Math.PI/2,$.scale.set(1.15,1,1),i.hips.add($);for(let X of["L","R"]){i.arms[X].elbow.add(Pt(hr(.055,.05,.1,10),r.gold,0,-.1,0));let xt=ae(Xe.leatherBrown,"cloth",{side:De},P),gt=Pt(new Qe(.066,.073,.28,12,1,!0),xt,.004,-.14,0);i.legs[X].knee.add(gt);let $t=Pt(an(.079,.026),ae(Xe.leatherBrown,"cloth",{},P),.004,-.005,0);$t.rotation.x=Math.PI/2,$t.scale.set(1,1,.88),i.legs[X].knee.add($t),i.legs[X].knee.add(Pt(en(.017,8,6),r.goldBright,.072,-.02,0)),i.legs[X].knee.add(Pt(or(.06,.03,.075),xt,-.03,-.245,0))}i.tail[5].add(Pt(an(.042,.012),r.gold,0,-.1,0));let nt=bx();return nt.position.set(0,-.21,0),i.arms.R.elbow.add(nt),{...i,name:"DON GATO",side:"B",facing:0,sword:nt,swordArm:"R",crossMat:r.cross,plume:p}}function wx(){let i=Td({furKey:"B-fur",furOpts:{seed:9,stripes:7,grain:.16,blotch:2,dark:"#6c6c78",repeatX:1.4,repeatY:1.4},furBase:tn.furSilverStripe,furBelly:tn.furBelly,earInner:tn.noseBlack,eye:tn.eyeJade,eyeGlow:.3,nose:tn.noseBlack}),t=je("silver",()=>ts({seed:44,base:"#ffffff",streak:.18,scratches:200})),e=je("cloth-emerald",()=>Ss({seed:51,weave:7})),n=je("cloth-white",()=>Ss({seed:53,weave:9,thread:"rgba(120,120,132,0.24)"})),s=je("B-stripe",()=>ha({seed:12,stripes:5,grain:.12})),r={emerald:ae(tn.emeraldMain,"cloth",{},e),emeraldBright:ae(tn.emeraldBright,"cloth",{},e),silver:ae(tn.silverMain,"silver",{},t),silverBright:ae(tn.silverBright,"silverBright",{},t),white:ae(tn.clothWhite,"cloth",{},n),stripe:ae(tn.furSilverStripe,"fur",{},s)};for(let I=0;I<3;I++){let B=Pt(an(.15-I*.005,.012),r.stripe,-.06+I*.09,.3-I*.02,0);B.rotation.x=Math.PI/2,B.rotation.y=.3,B.scale.set(1,1,.55),i.spine.add(B)}for(let I=1;I<6;I+=2)i.tail[I].add(Pt(an(.04,.01),r.stripe,0,-.065,0));let o=new ue;o.position.set(0,.16,0),o.rotation.z=.08;let a=Pt(en(.185,16,10),r.white,0,.02,0);a.scale.set(1.08,.72,1.02),o.add(a);let c=[];for(let I=0;I<3;I++){let B=new Ai(.156-I*.02,.028,8,36);B.rotateX(Math.PI/2),B.scale(1.08,.55,1),B.rotateZ(I%2?-.16:.15),B.rotateX(.08),B.translate(-I*.008,.012+I*.036,0),c.push(B)}let l=new En(.104,16,10);l.scale(1.1,.47,1),l.translate(-.026,.112,0),c.push(l),o.add(Pt(cr(c),r.white));let h=Pt(an(.155,.02),r.emerald,0,.03,0);h.rotation.x=Math.PI/2,h.scale.set(1.12,1.06,1),o.add(h);let d=Pt(an(.045,.012,Math.PI*1.35),r.silverBright,.14,.06,0);d.rotation.y=Math.PI/2,d.rotation.z=2.2,o.add(d),i.head.add(o),i.ears[0].position.y=.24,i.ears[0].position.z=-.16,i.ears[1].position.y=.24,i.ears[1].position.z=.16;let u=je("embroidered-robe",()=>Sl("skirt")),f=je("embroidered-placket",()=>Sl("body")),g=je("embroidered-cuffs",()=>Sl("sleeve")),x=je("pleat",()=>ch({pleats:30})),m=ae("#FFFFFF","cloth",{side:De,bumpScale:.007},u),p=ae("#FFFFFF","cloth",{side:De,bumpScale:.007},f),M=ae("#FFFFFF","cloth",{side:De,bumpScale:.007},g),w=ae(tn.emeraldBright,"cloth",{},e),v=Pt(Ml(.188,.212,.44,36,6,12,.008),p,.005,.22,0);i.spine.add(v);let b=Pt(new Qe(.134,.156,.1,20,1,!0),ae(tn.clothWhite,"cloth",{side:De},x),.01,.455,0);i.spine.add(b);let T=Pt(an(.157,.013),w,.01,.505,0);T.rotation.x=Math.PI/2,i.spine.add(T);for(let I of[.13,.24,.35])i.spine.add(Pt(en(.014,8,6),r.silver,.211,I,0));let P=Pt(Ml(.212,.315,.54,36,8,12,.016),m,.005,-.165,0);P.name="embroidered-folded-dishdashah",i.hips.add(P);let y=Pt(an(.302,.009),w,.005,-.425,0);y.rotation.x=Math.PI/2,i.hips.add(y);let E=Pt(an(.224,.022),r.silver,.005,.015,0);E.rotation.x=Math.PI/2,E.scale.set(1,1,.92),i.hips.add(E),i.hips.add(Pt(en(.032,10,8),ae("#EAF2FF","goldBright",{emissive:"#BFD4FF",emissiveIntensity:.35}),.228,.02,0));for(let I of["L","R"]){let B=Pt(Ml(.082,.098,.3,24,5,8,.006),M,0,-.14,0);i.arms[I].shoulder.add(B);let D=Pt(an(.092,.014),w,0,-.285,0);D.rotation.x=Math.PI/2,i.arms[I].shoulder.add(D);let O=Pt(Ml(.068,.074,.17,24,4,8,.004),M,0,-.09,0);i.arms[I].elbow.add(O)}let R=[];i.arms.L.elbow.add(Pt(hr(.055,.05,.11,10),r.silver,0,-.1,0));let C=Ex();return C.position.set(0,-.21,0),i.arms.L.elbow.add(C),{...i,name:"SULTAN BIGOTES",side:"A",facing:Math.PI,sword:C,swordArm:"L",ribbons:R,turban:o,dish:{skirt:P,hem:y}}}var bl=()=>({lean:0,twist:0,tilt:0,crouch:0,yOff:0,xOff:0,zOff:0,spineLean:.06,spineTwist:0,headPitch:0,headYaw:0,headRoll:0,shS_z:-.45,shS_x:.1,elS:-.85,shO_z:-.25,shO_x:.12,elO:-.5,thL:.06,knL:-.2,thR:.06,knR:-.2,footL:0,footR:0,tailCurl:0,tailAmp:.1,capeRaise:0,lock:0,tremble:0}),wd=bl(),Ax=Object.keys(wd),Rx={shS_z:26,shS_x:26,elS:26,shO_z:26,shO_x:26,elO:26,xOff:26,yOff:26,zOff:26,crouch:26,twist:26,tilt:26,lean:26,lock:26,tremble:26,thL:22,knL:22,thR:22,knR:22,footL:22,footR:22,spineLean:19,spineTwist:19,headPitch:15,headYaw:15,headRoll:15,capeRaise:12,tailCurl:9,tailAmp:9},Cx={RUSH:.32,LUNGE:.25,SLASH_UP:.23,THRUST:.2,SLASH_SPIN:.26,RIPOSTE:.26,FEINT:.13,PARRY_HOP:.13,PARRY_BEAT:.1,TAUNT:.19,HIT:.16,SIT_GUARD:.3},fa=class{constructor(t){this.data=t==="A"?wx():Tx();let e=this.data;this.root=e.root,this.root.rotation.y=e.facing,this.pose=bl(),this.target=bl(),this.state={name:"IDLE",t:0,dur:0,data:{}},this.time=Math.random()*10,this.x=0,this.windmill=0,this.earSwivel=0,this.eyeBlink=0,this.eyeBlinkT=4.5+(e.side==="A"?0:1.7),this.frozenPose=null,this.fw=e.side==="A"?-1:1,this.sword=e.arms[e.swordArm],this.off=e.arms[e.swordArm==="L"?"R":"L"]}setState(t,e=0,n={}){this.state={name:t,t:0,dur:e,data:n},t==="FREEZE"&&(this.frozenPose={...this.target})}get moveFrac(){return this.state.dur>0?Ii(this.state.t/this.state.dur,0,1):1}update(t,e){let n=this.state;switch(this.time+=t,n.t+=t,Object.assign(this.target,wd),this.target.tailCurl=1,n.name){case"RUSH":this._rush(e);break;case"LUNGE":this._lunge(e);break;case"SLASH_UP":this._slashUp(e);break;case"THRUST":this._thrust(e);break;case"FEINT":this._feint(e);break;case"TAUNT":this._taunt(e);break;case"PARRY_HOP":this._parryHop(e);break;case"PARRY_BEAT":this._parryBeat(e);break;case"SIT_GUARD":this._sitGuard(e);break;case"SLASH_SPIN":this._slashSpin(e);break;case"RIPOSTE":this._riposte(e);break;case"FREEZE":this._freeze(e);break;case"STUMBLE":this._stumble(e);break;case"HIT":this._hit(e);break;case"BLADE_LOCK":this._bladeLock(e);break;case"CLASH":this._clash(e);break;case"RECOVER":this._recover();break;default:this._idle(e)}n.dur>0&&n.t>=n.dur&&n.name!=="RECOVER"&&n.name!=="FREEZE"&&n.name!=="BLADE_LOCK"&&this.setState("RECOVER",Cx[n.name]||.16);let s=this.pose,r=this.target;for(let o of Ax)s[o]=dh(s[o],r[o],1-Math.exp(-(Rx[o]||22)*t));this._applyPose(t,e)}_applyPose(t,e){let n=this.data,s=this.pose,r=e.rope,o=this.x+s.xOff,a=r.yAt(o);this.root.position.set(o,a+.02-s.crouch+s.yOff,s.zOff+s.lock*.05),this.root.rotation.y=n.facing+s.twist,this.root.rotation.z=s.tilt*(n.side==="A"?1:-1);let c=Ii(e.pressureWobble||0,-.22,.22),l=n.side==="A"?1:-1,h=n.side==="A"?c:-c;this.root.rotation.z+=h*l*(1-Math.abs(h)*2),n.hips.rotation.z=-s.lean-s.lock*.12,n.spine.rotation.z=-s.spineLean-s.lock*.2,n.spine.rotation.y=s.spineTwist,n.head.rotation.z=-s.headPitch,n.head.rotation.y=s.headYaw,n.head.rotation.x=s.headRoll;let d=s.tremble*(Math.sin(this.time*34)*.026+Math.sin(this.time*51)*.014);this.sword.shoulder.rotation.z=s.shS_z+d*1.5,this.sword.shoulder.rotation.x=s.shS_x,this.sword.elbow.rotation.z=s.elS+d,this.off.shoulder.rotation.z=s.shO_z-d*1.2,this.off.shoulder.rotation.x=s.shO_x,this.off.elbow.rotation.z=s.elO-d,this.sword.paw.rotation.z=d*2,n.legs.L.hip.rotation.z=s.thL,n.legs.L.knee.rotation.z=s.knL,n.legs.R.hip.rotation.z=s.thR,n.legs.R.knee.rotation.z=s.knR,n.legs.L.foot.rotation.z=s.footL,n.legs.R.foot.rotation.z=s.footR;let u=s.tailAmp,f=s.tailCurl,g=n.side==="A"?0:1.15;n.tail.forEach((M,w)=>{let v=w/(n.tail.length-1);M.rotation.z=-(.055+v*.05)*f,M.rotation.x=Math.sin(this.time*2.2+g-v*1.3)*u*(.45+v*.95)+Math.sin(this.time*1.6+w)*.03-s.lean*.25}),this.earSwivel=dh(this.earSwivel,e.flagDart?1:0,1-Math.exp(-6*t)),n.ears.forEach((M,w)=>{let v=w===0?1:-1;M.rotation.y=v*(.15*Math.sin(this.time*.7+w*2)+this.earSwivel*.5*(n.side==="B"?1:-1))}),this.eyeBlinkT-=t,this.eyeBlinkT<=0&&(this.eyeBlink=1,this.eyeBlinkT=3.2+1.4*Math.abs(Math.sin(this.time*.53))),this.eyeBlink>0&&(this.eyeBlink=Math.max(0,this.eyeBlink-t/.12));let x=this.eyeBlink<=0?0:Math.sin(this.eyeBlink*Math.PI);if(n.eyes)for(let M of n.eyes)M.scale.y=1-.82*x;if(n.cape&&this._cape(),n.ribbons&&n.ribbons.forEach((M,w)=>{M.rotation.x=(w?.15:-.15)+Math.sin(this.time*3.6+w*1.3)*.34}),n.plume&&(n.plume.rotation.x=Math.sin(this.time*3.4)*.2),n.dish&&this._dish(n),n.dish){let M=this.state.name==="SIT_GUARD"?1:0;this._hitch=dh(this._hitch===void 0?0:this._hitch,M,1-Math.exp(-6*t));let w=this._hitch;n.dish.skirt.scale.y=1-.42*w,n.dish.skirt.position.y=-.165+.105*w,n.dish.hem&&(n.dish.hem.position.y=-.425+.185*w)}this._footTmp||(this._footTmp=new ns),this.root.updateMatrixWorld(!0);let m=a+Me.ropeRadius*.5,p=1/0;for(let M of["L","R"])n.legs[M].foot.getWorldPosition(this._footTmp),this._footTmp.y<p&&(p=this._footTmp.y);if(isFinite(p)){let M=m-p;M=Math.abs(s.yOff)>.03?Ii(M*.25,-.03,.06):Ii(M,-.07,.18),this.root.position.y+=M}}_idle(t){let e=this.target,n=this.time,s=t.circlePhase||0,r=this.data.side==="A"?1:-1,o=Math.sin(s*2.2+(r>0?0:1.6));e.spineLean=.08+Math.sin(n*2.2)*.03,e.headYaw=-r*.22+Math.sin(n*.6)*.12,e.headPitch=.04,e.shS_z=-.5+Math.sin(n*2.6)*.09,e.shO_z=-.3+Math.sin(n*2.1+1)*.1,e.elS=-.7,e.elO=-.6,e.crouch=.03+Math.max(0,Math.sin(n*1.1+r))*.03,e.xOff=o*.16,e.thL=.06+Math.max(0,o)*.5,e.thR=.06+Math.max(0,-o)*.5,e.knL=-.24-Math.max(0,o)*.5,e.knR=-.24-Math.max(0,-o)*.5,e.twist=-r*.06,e.tailAmp=.16}_recover(){let t=this.moveFrac,e=t*Math.PI*1.6;this.target.shS_x=.5+Math.sin(e)*1.1,this.target.shO_x=.5-Math.sin(e)*1.1,this.target.shS_z=-.3-Math.cos(e)*.45,this.target.shO_z=-.3+Math.cos(e)*.45,this.target.spineLean=.1-Math.sin(t*Math.PI)*.22,this.target.tilt=Math.sin(t*Math.PI*2)*.12}_rush(t){let e=this.moveFrac,n=this.target,s=this.state,r=s.data.reach||.6,{p1:o,p2:a,p3:c}=Pi(s,.34,.7),l=h=>{n.xOff=this.fw*h*r,n.spineLean=.3+h*.5,n.twist=this.fw*.18,n.shO_z=-.2-h*.7,n.shS_z=1.5*h,n.shS_x=1*h,n.elS=-.05,n.headYaw=this.fw*.22,n.yOff=Math.sin(h*Math.PI)*.06};if(e<o){let h=vn(e/o),d=Math.abs(Math.sin(h*Math.PI*3));n.crouch=.06+d*.1,n.knL=-.2-d*.5,n.knR=-.2-(1-d)*.3,n.thL=.06+d*.55,n.spineLean=.3,n.twist=this.fw*.12,h>.08&&!s.data.st1&&(s.data.st1=1,t.onStamp&&t.onStamp(this)),h>.42&&!s.data.st2&&(s.data.st2=1,t.onStamp&&t.onStamp(this)),h>.75&&!s.data.st3&&(s.data.st3=1,t.onStamp&&t.onStamp(this))}else if(e<a){let h=vn((e-o)/(a-o));l(h),h>.55&&!s.data.sp&&(s.data.sp=1,t.onLungeHit&&t.onLungeHit(this))}else if(e<c)l(1);else{let h=Xn((e-c)/(1-c));n.xOff=this.fw*(r-h*.1),n.spineLean=.8-h*.5,n.tilt=Math.sin(h*Math.PI)*.14,n.crouch=.05,n.shS_z=1.35-h*.2}}_lunge(t){let e=this.moveFrac,n=this.target,s=this.state,r=s.data.reach||.7,{p1:o,p2:a,p3:c}=Pi(s,.28,.62),l=h=>{n.xOff=this.fw*h*r,n.spineLean=.25+h*.55,n.twist=this.fw*.2,n.shO_z=-.2-h*.75,n.shS_z=1.6*h,n.shS_x=1.05*h,n.elS=-.02,n.headYaw=this.fw*.24,n.headPitch=.1*h,n.yOff=Math.sin(h*Math.PI)*.05,n.thL=.06+h*.5};if(e<o){let h=vn(e/o);n.crouch=.1*h,n.spineLean=-.12*h,n.shS_z=-.5-h*.5,n.elS=-1,n.knL=-.2-h*.35,n.twist=-this.fw*.16*h}else if(e<a){let h=vn((e-o)/(a-o));l(h),h>.6&&!s.data.sp&&(s.data.sp=1,t.onLungeHit&&t.onLungeHit(this))}else if(e<c)l(1);else{let h=Xn((e-c)/(1-c));n.xOff=this.fw*(r-h*.12),n.spineLean=.8-h*.5,n.tilt=Math.sin(h*Math.PI)*.16,n.crouch=.05,n.shS_z=1.4-h*.15}}_slashUp(t){let e=this.moveFrac,n=this.target,s=this.state,{p1:r,p2:o,p3:a}=Pi(s,.3,.72),c=l=>{n.shS_z=-.75+l*2.5,n.shS_x=-.5+l*1.2,n.elS=-.8+l*.65,n.spineLean=.2-l*.34,n.twist=(-.5+l*.9)*this.fw*-1,n.yOff=Math.sin(l*Math.PI)*.14,n.thL=.06+l*.4,n.capeRaise=.35+l*.3};if(e<r){let l=vn(e/r);n.twist=-.5*l*this.fw*-1,n.shO_z=-.2-l*1.5,n.shO_x=.45,n.headPitch=-.35*l,n.capeRaise=l*.55,n.crouch=.05*l}else if(e<o){let l=vn((e-r)/(o-r));c(l),l>.6&&!s.data.sl&&(s.data.sl=1,t.onSlash&&t.onSlash(this,"up"))}else if(e<a)c(1),n.headPitch=-.42;else{let l=Xn((e-a)/(1-a));n.shS_z=1.55,n.elS=-.18,n.headPitch=-.42,n.capeRaise=.65+l*.1,n.tilt=-.1}}_thrust(t){let e=this.moveFrac,n=this.target,s=this.state,{p1:r,p2:o,p3:a}=Pi(s,.3,.56),c=l=>{n.shS_z=-.6+l*2.25,n.shS_x=.55*l,n.elS=-1.15+l*1.13,n.spineLean=-.08+l*.5,n.xOff=this.fw*l*.22,n.headYaw=-this.fw*(.08-l*.08)};if(e<r){let l=vn(e/r);n.crouch=.06*l,n.spineLean=-.08*l,n.shS_z=-.4-l*.2,n.elS=-1.15,n.headYaw=-this.fw*.08}else if(e<o){let l=vn((e-r)/(o-r));c(l),l>.6&&!s.data.th&&(s.data.th=1,t.onThrust&&t.onThrust(this))}else if(e<a)c(1);else{let l=Xn((e-a)/(1-a));n.shS_z=1.65-l*1,n.elS=-.02-l*.6,n.spineLean=.42-l*.3,n.xOff=this.fw*(.22-l*.16)}}_feint(t){let e=this.moveFrac,n=this.target,s=this.state,{p1:r,p2:o,p3:a}=Pi(s,.4,.62),c=l=>{n.crouch=.05*l,n.spineLean=.3*l,n.shS_z=.9*l,n.elS=-.5+l*.15,n.xOff=this.fw*l*.18,n.headYaw=this.fw*.14*l};if(e<r)c(vn(e/r));else if(e<o)c(vn((e-r)/(o-r)));else if(e<a)c(1),s.data.fn||(s.data.fn=1,t.onFeint&&t.onFeint(this));else{let l=Xn((e-a)/(1-a));n.crouch=.05-l*.02,n.spineLean=.3-l*.18,n.shS_z=.9-l*.35,n.elS=-.35,n.xOff=this.fw*(.18-l*.14),n.headYaw=this.fw*(.14-l*.1)}}_taunt(t){let e=this.moveFrac,n=this.target;if(e<.22){let s=e/.22;n.spineLean=.35*s,n.shS_z=-.45+s*.3,n.elS=-.85-s*.45,n.headPitch=.3*s,n.crouch=.08*s}else n.spineLean=.35,n.shS_z=-.15,n.elS=-1.3,n.headPitch=-.18+Math.sin(this.time*3.4)*.06,n.knL=-.45,n.knR=-.45,n.twist=this.fw*.1,this.data.crossMat&&(this.data.crossMat.emissiveIntensity=Math.max(0,Math.sin((e-.22)*Math.PI/.78))*1.8),e>.3&&!this.state.data.fl&&(this.state.data.fl=1,t.onTaunt&&t.onTaunt(this))}_parryHop(t){let e=this.moveFrac,n=this.target,s=this.state,{p1:r,p2:o,p3:a}=Pi(s,.45,.72),c=l=>{n.crouch=.11,n.spineLean=.4,n.shS_z=.45-l*.5,n.shS_x=-.6,n.elS=-1.15,n.twist=this.fw*(.28-l*.35),n.headPitch=.12,n.xOff=this.fw*.2*l};if(e<r){let l=e/r,h=Math.sin(l*Math.PI*2);n.xOff=-this.fw*h*.4,n.crouch=.04+Math.abs(h)*.07,n.twist=-this.fw*h*.22,n.thL=.06+Math.max(0,h)*.6,n.thR=.06+Math.max(0,-h)*.6,n.yOff=Math.abs(h)*.08,l>.4&&!s.data.sd&&(s.data.sd=1,t.onStamp&&t.onStamp(this))}else if(e<o)c(vn((e-r)/(o-r)));else if(e<a)c(1);else{let l=Xn((e-a)/(1-a));n.crouch=.11,n.spineLean=.4,n.shS_z=-.05-l*.4,n.shS_x=-.6+l*.3,n.elS=-1.15+l*.35,n.twist=this.fw*(-.07+l*.05),n.xOff=this.fw*.2*(1-l*.5)}}_parryBeat(t){let e=this.moveFrac,n=this.target,s=this.state,{p1:r,p2:o,p3:a}=Pi(s,.34,.58),c=l=>{n.shS_z=-.5+l*1.35,n.elS=-.9+l*.75,n.shS_x=-.2+l*.35,n.crouch=.03,n.headYaw=this.fw*.06};if(e<r){let l=vn(e/r);c(l),l>.7&&!s.data.bt&&(s.data.bt=1,t.onBeat&&t.onBeat(this))}else if(e<o){let l=vn((e-r)/(o-r));c(l),l>.9&&!s.data.bt2&&(s.data.bt2=1,t.onBeat&&t.onBeat(this))}else if(e<a)c(1);else{let l=Xn((e-a)/(1-a));n.shS_z=.85-l*1.3,n.elS=-.15-l*.5,n.shS_x=.15,n.crouch=.03+l*.02}}_sitGuard(t){let e=this.target,n=this.time,s=Math.sin(n*1.9)*.022,r=Math.sin(n*2.4)*.05,o=Math.sin(n*1.3)*.02;e.crouch=.28+s,e.spineLean=.1+s*.5,e.tilt=o,e.headPitch=.12,e.headYaw=-this.fw*.14,e.shS_z=.88+r*.3,e.shS_x=.5,e.elS=-1.25+r,e.shO_z=-.7,e.shO_x=.6,e.elO=-1.1,e.thL=1.25,e.thR=1.25,e.knL=-2.6,e.knR=-2.6,e.footL=.3,e.footR=.3,e.capeRaise=.45,e.tailCurl=1.55,e.tailAmp=.03,e.earSwivel=0,t.flagDart&&(e.headYaw+=-this.fw*.1)}_slashSpin(t){let e=this.moveFrac,n=this.target,s=this.state,{p1:r,p2:o,p3:a}=Pi(s,.42,.8);if(e<r){let c=vn(e/r);n.shS_z=-.7+c*(2.15+Math.PI*2),n.elS=-.2,n.spineLean=-.12,n.headPitch=-.24,n.twist=c*.5*this.fw,n.yOff=Math.sin(c*Math.PI)*.1,c>.3&&!s.data.w1&&(s.data.w1=1,t.onWhoosh&&t.onWhoosh(this))}else if(e<o){let c=(e-r)/(o-r),l=Math.abs(Math.sin(c*Math.PI*2));n.shS_z=1.45-l*1.85,n.elS=-.35,n.spineLean=.15+l*.28,n.crouch=.05+l*.09,n.xOff=this.fw*.3*Xn(c),c>.2&&!s.data.c1&&(s.data.c1=1,t.onSlash&&t.onSlash(this,"down")),c>.7&&!s.data.c2&&(s.data.c2=1,t.onSlash&&t.onSlash(this,"down"))}else if(e<a)n.shS_z=-.4,n.elS=-.35,n.spineLean=.43,n.crouch=.14,n.headPitch=.18,n.xOff=this.fw*.3,s.data.c3||(s.data.c3=1,t.onSlash&&t.onSlash(this,"down"));else{let c=Xn((e-a)/(1-a));n.shS_z=-.4+c*.1,n.elS=-.35-c*.4,n.spineLean=.43-c*.3,n.crouch=.14-c*.1,n.xOff=this.fw*.3*(1-c*.5)}}_riposte(t){let e=this.moveFrac,n=this.target,s=this.state,{p1:r,p2:o,p3:a}=Pi(s,.44,.74),c=l=>{n.shS_z=-1.5+l*2.7,n.shS_x=-1+l*.7,n.elS=-.25,n.twist=this.fw*(.35-l*.6),n.xOff=this.fw*.35*l};if(e<.18){let l=vn(e/.18);n.crouch=.24*l,n.spineLean=.55*l,n.headPitch=.24,n.knL=-.2-l*.5,n.knR=-.2-l*.5}else if(e<.36){let l=(e-.18)/.18;n.twist=Math.sin(vn(l)*Math.PI)*1.9*this.fw,n.crouch=.14,n.shS_z=-1.3,n.xOff=-this.fw*Math.sin(l*Math.PI)*.3}else if(e<o){let l=vn((e-.36)/(o-.36));c(l),l>.55&&!s.data.cr&&(s.data.cr=1,t.onSlash&&t.onSlash(this,"crescent"))}else if(e<a)c(1);else{let l=Xn((e-a)/(1-a));n.spineLean=.4,n.shS_z=1.6,n.elS=-.08,n.xOff=this.fw*(.35+l*.45),n.headYaw=this.fw*.2}}_freeze(t){Object.assign(this.target,this.frozenPose||bl()),this.target.tailAmp=.1,this.target.crouch=(this.frozenPose?this.frozenPose.crouch:0)+Math.max(0,Math.sin(this.time*.8))*.02,this.target.headYaw=Math.sin(this.time*.45)*.2,t.flagDart=!0}_hit(t){let e=this.moveFrac,n=this.target,s=this.state,r=s.data.dir||-this.fw,o=s.data.mag||1;if(e<.4){let a=Xn(e/.4);n.spineLean=-.4*a*o,n.headPitch=.5*a*o,n.headYaw=-r*.3*a,n.xOff=r*a*.24*o,n.shO_x=1*a,n.shS_x=.6*a,n.crouch=.1*a,n.tremble=a*.6,a>.5&&!s.data.imp&&(s.data.imp=1,t.onHitImpact&&t.onHitImpact(this))}else{let a=(e-.4)/.6;n.spineLean=-.4*o*(1-a),n.headPitch=.5*o*(1-a),n.xOff=r*.24*o*(1-a),n.crouch=.1*(1-a),n.shO_z=-.2-a*.5,n.tremble=.6*(1-a),n.twist=r*.2*(1-a)}}_stumble(t){let e=this.moveFrac,n=this.target,s=this.state,r=s.data.dir||-this.fw,o=s.data.dist||.7;if(e<.18){let a=e/.18;n.tilt=Math.sin(this.time*20)*.26*a,n.spineLean=.24+Math.sin(this.time*16)*.3*a,n.crouch=.06,n.tremble=a*.8}else if(e<.56){let a=(e-.18)/.38;n.xOff=r*a*o,n.tilt=1.25*a,n.crouch=.1+a*.3,n.yOff=Math.sin(a*Math.PI)*.42,n.shS_x=1.35,n.shO_x=1.35,n.shS_z=-1.3,n.shO_z=-1.3,n.twist=r*a*.5,a>.5&&!s.data.tu&&(s.data.tu=1,t.onTumble&&t.onTumble(this))}else if(e<.8)n.xOff=r*o,n.tilt=1.25+Math.sin(this.time*22)*.1,n.crouch=.4,n.shS_x=1.5,n.shO_x=1.5,n.twist=r*.5;else{let a=(e-.8)/.2;n.xOff=r*(1-a)*o,n.tilt=1.25*(1-a),n.crouch=.4-a*.34,n.twist=r*.5*(1-a)}}_bladeLock(t){let e=this.moveFrac,n=this.target,r=.6+(Math.sin(this.time*7.5)*.5+.5)*.4;n.lock=r,n.spineLean=.5+r*.25,n.shS_z=.55+r*.2,n.shS_x=1.15,n.elS=-.35,n.shO_z=.15,n.shO_x=.9,n.elO=-.5,n.crouch=.1+r*.06,n.tremble=1,n.headPitch=.16,n.headYaw=-this.fw*.1,n.xOff=this.fw*(.05+r*.06),n.tailAmp=.05,e>.1&&!this.state.data.sparkT&&(this.state.data.sparkT=1,t.onLockSparks&&t.onLockSparks(this))}_clash(t){let e=this.moveFrac,n=this.target,s=this.state,r=.5+.5*Math.sin(this.time*9);if(n.spineLean=.45,n.shS_z=1.45,n.shS_x=1,n.elS=-.1,n.shO_z=-.05,n.shO_x=.75,n.crouch=.09,n.lock=.5,n.tremble=.9,s.data.loser){let o=Xn(Math.min(e/.62,1));n.xOff=s.data.dir*o*.75,n.tilt=-o*.24,n.spineLean=.45-o*.3,n.tremble=.9*(1-o*.7),o>.55&&!s.data.rk&&(s.data.rk=1,t.onKnockback&&t.onKnockback(this,s.data.dir))}else n.xOff=s.data.dir*Math.min(e/.62,1)*.3,n.spineLean=.45+Math.min(e/.62,1)*.2,n.crouch=.09+r*.03}_dish(t){let n=t.dish.skirt.geometry.attributes.position;t.dish.base||(t.dish.base=Float32Array.from(n.array),n.setUsage(gs));let s=t.dish.base,r=this.time;for(let o=0;o<n.count;o++){let a=s[o*3],c=s[o*3+1],l=s[o*3+2],h=Ii((.11-c)/.54,0,1),d=(Math.sin(r*2.4+h*2.6)*.022+Math.sin(r*3.9)*.008-this.pose.lean*.05)*h*h,u=1+d*2.6;n.setX(o,a*u),n.setZ(o,l*u+d*.4)}n.needsUpdate=!0}_cape(){let t=this.data.cape,e=t.geometry.attributes.position;this._capeBase||(this._capeBase=Float32Array.from(e.array),e.setUsage(gs));let n=this._capeBase,s=this.time,r=this.pose.capeRaise||0;for(let o=0;o<e.count;o++){let a=n[o*3],c=n[o*3+1],l=Ii(-c/.78,0,1),h=Math.sin(s*4.2+l*5)*.11*l;e.setX(o,a*(1+r*l*1.8)+h*.4),e.setZ(o,h)}e.needsUpdate=!0,t.rotation.x=-.18-r*1}bladeTipWorld(t=new ns){return this.data.sword.localToWorld(t.set(1,0,0))}bladeMidWorld(t=new ns){return this.data.sword.localToWorld(t.set(.55,0,0))}headTipWorld(t=new ns){return this.data.head.localToWorld(t.set(.3,-.04,0))}headCentreWorld(t=new ns){return this.data.head.localToWorld(t.set(0,0,0))}};var ph=(i,t="cloth",e={})=>new Ve({color:i,...ca[t],...e}),ur=(i,t,e,n={})=>{let s=new Ve({color:i,...ca[t],...n});return e&&e.map&&(s.map=e.map),s},Be=(i,t,e=0,n=0,s=0)=>{let r=new se(i,t);return r.position.set(e,n,s),r};function Ad({variant:i=0}={}){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),n="filter"in e,s=(h,d,u,f,g,x=0)=>{e.fillStyle=g,e.fillRect(h-u/2,d-u/2,u,u),e.fillStyle=f;for(let m of[x,x+Math.PI/4]){e.save(),e.translate(h,d),e.rotate(m),e.beginPath();for(let p=0;p<8;p++){let M=p/8*Math.PI*2,w=M+Math.PI/8;e.lineTo(Math.cos(M)*u*.46,Math.sin(M)*u*.46),e.lineTo(Math.cos(w)*u*.2,Math.sin(w)*u*.2)}e.closePath(),e.fill(),e.restore()}e.strokeStyle="rgba(255,255,255,0.55)",e.lineWidth=1.6,e.strokeRect(h-u/2+5,d-u/2+5,u-10,u-10)};n&&(e.filter="blur(0.4px)");let r=[["#1F5FA8","#F2EFE9"],["#12755F","#F2EFE9"],["#B07C22","#F2EFE9"]],o=i?[r[1],r[2],r[0]]:[r[0],r[1],r[2]],a=i?Math.PI/8:0;s(64,64,118,...o[0],Math.PI/8+a),s(192,192,118,...o[0],Math.PI/8+a),s(192,64,118,...o[1],Math.PI/8+a),s(64,192,118,...o[1],Math.PI/8+a),n&&(e.filter="none");for(let[h,d]of[[0,0],[256,0],[0,256],[256,256]]){e.save(),e.translate(h,d),e.fillStyle=o[2][0],e.beginPath();for(let u=0;u<8;u++){let f=u/8*Math.PI*2,g=f+Math.PI/8;e.lineTo(Math.cos(f)*34,Math.sin(f)*34),e.lineTo(Math.cos(g)*15,Math.sin(g)*15)}e.closePath(),e.fill(),e.restore()}let c=(()=>{let h=77+i*31;return()=>(h=h*16807%2147483647,h%1e3/1e3)})();e.strokeStyle="rgba(60,52,40,0.42)",e.lineWidth=4,e.strokeRect(2,2,252,252),e.lineWidth=2,e.beginPath(),e.moveTo(128,0),e.lineTo(128,256),e.moveTo(0,128),e.lineTo(256,128),e.stroke();for(let h=0;h<260;h++)e.fillStyle=c()<.5?"rgba(255,255,255,0.13)":"rgba(0,0,0,0.10)",e.fillRect(c()*256,c()*256,4,4);for(let h=0;h<40;h++){let d=c()*256,u=c()*256,f=6+c()*22,g=e.createRadialGradient(d,u,0,d,u,f);g.addColorStop(0,"rgba(58,48,34,0.16)"),g.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=g,e.beginPath(),e.arc(d,u,f,0,Math.PI*2),e.fill()}for(let h=0;h<12;h++){e.strokeStyle="rgba(40,34,24,0.22)",e.lineWidth=.8,e.beginPath();let d=c()*256,u=c()*256;e.moveTo(d,u);for(let f=0;f<3;f++)e.lineTo(d+(c()-.5)*60,u+(c()-.5)*60);e.stroke()}let l=[40+c()*170,40+c()*170,5+c()*9];return e.fillStyle="rgba(120,104,78,0.7)",e.beginPath(),e.ellipse(l[0],l[1],l[2],l[2]*.7,c()*3,0,Math.PI*2),e.fill(),Ke(t)}function Px(){let i=document.createElement("canvas");i.width=1024,i.height=128;let t=i.getContext("2d");t.fillStyle=we.stoneWall,t.fillRect(0,0,1024,128);let e=(()=>{let a=313;return()=>(a=a*16807%2147483647,a%1e3/1e3)})();for(let a=0;a<1800;a++)t.fillStyle=e()<.5?"rgba(255,250,236,0.10)":"rgba(96,74,48,0.10)",t.fillRect(e()*1024,e()*128,3,2);t.strokeStyle="rgba(90,70,44,0.55)",t.lineWidth=5,t.beginPath(),t.moveTo(0,6),t.lineTo(1024,6),t.moveTo(0,122),t.lineTo(1024,122),t.stroke();let n=128,s=64,r=we.frieze,o="rgba(70,52,30,0.45)";for(let a=0;a<1024/n;a++){let c=a*n;((h,d)=>{t.save(),t.translate(c+h+s,64),d&&t.scale(-1,1),t.lineWidth=7,t.strokeStyle=o,t.beginPath(),t.moveTo(-s+6,26),t.bezierCurveTo(-26,-34,20,-34,2,-4),t.bezierCurveTo(-10,18,22,30,s-6,-22),t.stroke(),t.lineWidth=4,t.strokeStyle=r,t.stroke();for(let[u,f,g]of[[-34,6,9],[-10,-22,7],[16,12,10],[40,-14,7]])t.fillStyle=r,t.beginPath(),t.ellipse(u,f,g*1.5,g*.75,(u+f)*.02,0,Math.PI*2),t.fill();t.fillStyle=r,t.beginPath(),t.arc(0,4,7,0,Math.PI*2),t.fill(),t.fillStyle="rgba(40,28,14,0.5)",t.beginPath(),t.arc(0,4,3,0,Math.PI*2),t.fill(),t.restore()})(0,a%2===1)}for(let a=0;a<1024;a+=32)t.fillStyle="rgba(60,44,26,0.30)",t.beginPath(),t.arc(a+16,110,7,0,Math.PI*2),t.fill(),t.fillStyle="rgba(255,246,228,0.35)",t.beginPath(),t.arc(a+14,108,4,0,Math.PI*2),t.fill();return Ke(i)}function Ix(){let i=document.createElement("canvas");i.width=i.height=1024;let t=i.getContext("2d");t.fillStyle=we.floorBase,t.fillRect(0,0,1024,1024);let e=(()=>{let s=913;return()=>(s=s*16807%2147483647,s%1e3/1e3)})();for(let s=0;s<5200;s++)t.fillStyle=e()<.5?"rgba(255,255,255,0.07)":"rgba(96,78,56,0.09)",t.fillRect(e()*1024,e()*1024,3+e()*5,3+e()*5);let n=128;for(let s=0;s<8;s++)for(let r=0;r<8;r++){let o=e();t.fillStyle=o<.3?"rgba(255,248,232,0.10)":o<.6?"rgba(120,98,70,0.09)":o<.85?"rgba(255,255,255,0.04)":"rgba(70,54,36,0.10)",t.fillRect(r*n,s*n,n,n);let a=t.createRadialGradient(r*n+n*.45,s*n+n*.5,4,r*n+n*.45,s*n+n*.5,n*.5);a.addColorStop(0,"rgba(255,252,240,0.10)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.fillRect(r*n,s*n,n,n)}for(let s=0;s<=1024;s+=n)t.strokeStyle="rgba(104,86,62,0.70)",t.lineWidth=4,t.beginPath(),t.moveTo(s,0),t.lineTo(s,1024),t.moveTo(0,s),t.lineTo(1024,s),t.stroke(),t.strokeStyle="rgba(255,250,236,0.22)",t.lineWidth=2,t.beginPath(),t.moveTo(s+3,0),t.lineTo(s+3,1024),t.moveTo(0,s+3),t.lineTo(1024,s+3),t.stroke();for(let s=0;s<90;s++){let r=e()*1024,o=e()*1024,a=4+e()*14;t.fillStyle="rgba(120,104,80,0.28)",t.beginPath(),t.arc(r,o,a,0,Math.PI*2),t.fill()}for(let s=0;s<26;s++){let r=e()*1024,o=e()*1024;t.strokeStyle="rgba(96,78,56,0.30)",t.lineWidth=1.6,t.beginPath(),t.moveTo(r,o),t.lineTo(r+(e()-.5)*90,o+(e()-.5)*90),t.stroke()}return Ke(i)}function Lx(){let i=document.createElement("canvas");i.width=i.height=512;let t=i.getContext("2d"),e="filter"in t,n=256,s=256,r=150;e&&(t.filter="blur(0.5px)"),t.strokeStyle="rgba(110,90,66,0.85)",t.lineWidth=14,t.beginPath(),t.arc(n,s,r+34,0,Math.PI*2),t.stroke(),t.strokeStyle="rgba(240,232,214,0.5)",t.lineWidth=4,t.beginPath(),t.arc(n,s,r+42,0,Math.PI*2),t.stroke();let o=(a,c)=>{t.fillStyle=c,t.beginPath();for(let l=0;l<8;l++){let h=a+l/8*Math.PI*2,d=h+Math.PI/8;t.lineTo(n+Math.cos(h)*r,s+Math.sin(h)*r),t.lineTo(n+Math.cos(d)*r*.45,s+Math.sin(d)*r*.45)}t.closePath(),t.fill()};o(-Math.PI/2,"#26A69A"),o(Math.PI/2,"#EF5350"),e&&(t.filter="none"),t.lineJoin="round",t.strokeStyle="rgba(60,46,30,0.55)",t.lineWidth=3;for(let a of[-Math.PI/2,Math.PI/2]){t.beginPath();for(let c=0;c<8;c++){let l=a+c/8*Math.PI*2,h=l+Math.PI/8;t.lineTo(n+Math.cos(l)*r,s+Math.sin(l)*r),t.lineTo(n+Math.cos(h)*r*.45,s+Math.sin(h)*r*.45)}t.closePath(),t.stroke()}return t.fillStyle="rgba(236,228,210,0.9)",t.beginPath(),t.arc(n,s,22,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(120,96,64,0.8)",t.lineWidth=6,t.beginPath(),t.arc(n,s,22,0,Math.PI*2),t.stroke(),Ke(i)}function Rd({seed:i=101,field:t="#7E1F26",border:e="#163A2E",ink:n="#E8C87A"}={}){let s=document.createElement("canvas");s.width=320,s.height=420;let r=s.getContext("2d"),o=(()=>{let f=i;return()=>(f=f*16807%2147483647,f%1e3/1e3)})();r.fillStyle=e,r.fillRect(0,0,320,420);for(let f=0;f<420;f+=3)r.fillStyle=`rgba(255,255,255,${.03+o()*.05})`,r.fillRect(0,f,320,1);let a=[26,26,268,368];r.fillStyle=t,r.fillRect(...a);for(let f=a[1];f<a[1]+a[3];f+=3)r.fillStyle=`rgba(0,0,0,${.03+o()*.05})`,r.fillRect(a[0],f,a[2],1);let c=r.createLinearGradient(0,a[1],0,a[1]+a[3]);c.addColorStop(0,"rgba(255,220,170,0.10)"),c.addColorStop(.45,"rgba(255,255,255,0)"),c.addColorStop(1,"rgba(20,10,10,0.14)"),r.fillStyle=c,r.fillRect(a[0],a[1],a[2],a[3]);let l=(f,g,x,m,p)=>{r.fillStyle=p,r.beginPath();for(let M=0;M<m*2;M++){let w=M/(m*2)*Math.PI*2-Math.PI/2,v=M%2?x*.46:x;r.lineTo(f+Math.cos(w)*v,g+Math.sin(w)*v)}r.closePath(),r.fill()};r.strokeStyle=n,r.lineWidth=4,r.beginPath(),r.rect(a[0]+9,a[1]+9,a[2]-18,a[3]-18),r.stroke();for(let f=0;f<30;f++){let g=f/30;for(let[x,m,p]of[[46+g*228,40,1],[46+g*228,380,-1],[40,46+g*328,1],[280,46+g*328,-1]])r.save(),r.translate(x,m),r.rotate(p*Math.PI/2),r.strokeStyle=n,r.lineWidth=3,r.beginPath(),r.moveTo(-6,0),r.lineTo(0,-8),r.lineTo(6,0),r.stroke(),r.restore()}l(160,210,62,8,n),l(160,210,40,8,t),l(160,210,20,6,n);for(let[f,g]of[[52,62],[268,62],[52,358],[268,358]])l(f,g,26,6,n);for(let f=0;f<380;f++)r.fillStyle=o()<.5?"rgba(255,246,224,0.05)":"rgba(0,0,0,0.05)",r.fillRect(o()*320,o()*420,2,6);let h=[.09,.35,.61,.87];for(let f of h){let g=f*320,x=26+o()*12,m=r.createLinearGradient(g-x,0,g+x,0);m.addColorStop(0,"rgba(0,0,0,0.20)"),m.addColorStop(.42,"rgba(255,246,224,0.16)"),m.addColorStop(.68,"rgba(255,246,224,0.05)"),m.addColorStop(1,"rgba(0,0,0,0.16)"),r.fillStyle=m,r.fillRect(g-x,0,x*2,420)}let d=r.createLinearGradient(0,0,0,46);d.addColorStop(0,"rgba(0,0,0,0.42)"),d.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=d,r.fillRect(0,0,320,46);let u=r.createLinearGradient(0,372,0,420);return u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(0,0,0,0.26)"),r.fillStyle=u,r.fillRect(0,372,320,48),Ke(s)}function Dx(){let i=document.createElement("canvas");i.width=i.height=512;let t=i.getContext("2d");t.clearRect(0,0,512,512);let e=t.createRadialGradient(256,256,150,256,256,256);e.addColorStop(0,we.moonHalo+"cc"),e.addColorStop(1,we.moonHalo+"00"),t.fillStyle=e,t.fillRect(0,0,512,512);let n=(()=>{let r=553;return()=>(r=r*16807%2147483647,r%1e3/1e3)})();t.fillStyle=we.moonBtc,t.beginPath(),t.arc(256,256,190,0,Math.PI*2),t.fill();for(let r=0;r<40;r++){let o=n()*Math.PI*2,a=n()*175,c=256+Math.cos(o)*a,l=256+Math.sin(o)*a,h=6+n()*26;t.fillStyle=n()<.5?"rgba(255,214,150,0.16)":"rgba(150,80,10,0.14)",t.beginPath(),t.arc(c,l,h,0,Math.PI*2),t.fill()}let s=t.createRadialGradient(190,180,40,256,256,230);s.addColorStop(0,"rgba(255,240,214,0.30)"),s.addColorStop(.55,"rgba(255,255,255,0)"),s.addColorStop(1,"rgba(70,30,0,0.34)"),t.fillStyle=s,t.beginPath(),t.arc(256,256,190,0,Math.PI*2),t.fill(),t.strokeStyle=we.moonSymbol,t.lineWidth=22,t.lineCap="round",t.font='bold 260px "Arial Black", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle=we.moonSymbol,t.fillText("B",256,270),t.lineWidth=14;for(let r of[196,316])t.beginPath(),t.moveTo(r,130),t.lineTo(r,382),t.stroke();return Ke(i)}function Ux(i,t){let e=document.createElement("canvas");e.width=256,e.height=160;let n=e.getContext("2d");return n.fillStyle=t,n.beginPath(),n.moveTo(8,8),n.lineTo(248,8),n.lineTo(180,80),n.lineTo(248,152),n.lineTo(8,152),n.closePath(),n.fill(),n.strokeStyle="rgba(0,0,0,0.35)",n.lineWidth=6,n.stroke(),n.fillStyle="#FFFFFF",n.font='bold 64px "Arial Black", sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText(i,116,84),Ke(e)}function Cd(i){let t=new ue;i.add(t);let e={torches:[]};t.userData.torches=e.torches;let n=new se(new Le(5,5),new Je({map:Dx(),transparent:!0,fog:!1,depthWrite:!1}));n.position.set(0,6.6,-7.45),n.renderOrder=-1,t.add(n),e.moon=n,t.userData.moon=n;let s=xl({seed:61,base:"#ffffff",blocks:5,alpha:.16,repeatX:4,repeatY:2}),r=8,o=26,a=-7.2,c=1.2,l=.4,h=3.4,d=ur(we.stoneWall,"cloth",s,{roughness:.95,bumpScale:.12}),u=Be(new Ce(o,h,.5),d,0,h/2,a);t.add(u);let f=Ad({variant:0}),g=Ad({variant:1}),x=Wn(f.image,1),m=Wn(g.image,1),p=3.9,M=o/2-p,w=(ft,Mt,L,Vt)=>{let Ot=L.clone();return Ot.needsUpdate=!0,Ot.repeat.set(Mt/2.6,1),Be(new Ce(Mt,c,.54),new Ve({map:Ot,roughness:.5}),ft,c/2,a+.01)};t.add(w(-(p+M/2),M,f,x)),t.add(w(+(p+M/2),M,g,m));let v=Px(),b=(ft,Mt)=>{let L=v.clone();return L.needsUpdate=!0,L.repeat.set(Mt/(o/6),1),Be(new Ce(Mt,l,.55),new Ve({map:L,roughness:.9}),ft,c+l/2,a+.01)};t.add(b(-(p+M/2),M)),t.add(b(+(p+M/2),M));let T=8,P=3.17,y=.24,E=.13,R=.1,C=a+.25,I=C+y+.09,B=Ss({seed:91,weave:14,thread:"rgba(30,18,8,0.5)"});B.map.wrapS=B.map.wrapT=ai,B.map.repeat.set(3,1.2);let D=new Ve({color:"#5B3A21",map:B.map,roughness:.62,metalness:.05}),O=c+l+P/2+.06,K=Be(new Ce(T,P,.18),D,0,O,I);t.add(K);let Y=new Ve({color:"#3E2712",roughness:.55});t.add(Be(new Ce(T+.14,.1,.26),Y,0,O+P/2+.04,I+.04)),t.add(Be(new Ce(T+.14,.1,.26),Y,0,O-P/2-.04,I+.04)),t.add(Be(new Ce(.1,P+.14,.26),Y,-(T/2+.04),O,I+.04)),t.add(Be(new Ce(.1,P+.14,.26),Y,+(T/2+.04),O,I+.04)),t.add(Be(new Ce(.09,.32,.29),Y,-T/2+.5,O-P/2-.14,C+.125)),t.add(Be(new Ce(.09,.32,.29),Y,+T/2-.5,O-P/2-.14,C+.125));let rt=C+.11,$=(ft,Mt)=>{let L=new Le(1.58,1.62,12,14),Vt=L.attributes.position;for(let G=0;G<Vt.count;G++){let q=Vt.getX(G),dt=Vt.getY(G),mt=Math.max(0,Math.min(1,(.81-dt)/1.62)),Q=Math.sin(q*7.66+.25)*(.026+mt*.048);Vt.setZ(G,Q+Math.sin(dt*3.4+q*.6)*.016),Vt.setX(G,q*(1+mt*.035))}L.computeVertexNormals();let Ot=new se(L,new Ve({map:Mt,roughness:.92,side:De}));Ot.position.set(ft,2.52,rt),Ot.userData.rug={w:1.58,h:1.62,world:{x:ft,y:2.52,z:rt}},t.add(Ot);let A=new Ve({color:"#4A2E17",roughness:.7}),_=Be(new Qe(.048,.048,1.94,10),A,ft,3.4,rt+.05);_.rotation.z=Math.PI/2,t.add(_);for(let G of[-.97,.97])t.add(Be(new En(.075,10,8),A,ft+G,3.4,rt+.05));let H=new Ve({color:"#C9B389",roughness:.95});for(let G=0;G<8;G++){let q=ft-.69+G*.197,dt=Be(new Wi(.03,.19,6),H,q,1.62,rt+.02);dt.rotation.x=Math.PI,t.add(dt)}},nt=Rd({seed:101,field:"#7E1F26",border:"#163A2E",ink:"#E8C87A"}),X=Rd({seed:207,field:"#1B2A5E",border:"#6B1A1E",ink:"#D9BE86"});$(-6,nt),$(6,X);let xt=document.createElement("canvas");xt.width=128,xt.height=64;{let ft=xt.getContext("2d"),Mt=ft.createLinearGradient(0,0,0,64);Mt.addColorStop(0,"rgba(0,0,0,0.62)"),Mt.addColorStop(.45,"rgba(0,0,0,0.30)"),Mt.addColorStop(1,"rgba(0,0,0,0)"),ft.fillStyle=Mt,ft.fillRect(0,0,128,64)}let gt=Ke(xt),$t=new se(new Le(T*1.06,.62),new Je({map:gt,transparent:!0,depthWrite:!1,opacity:.75}));$t.position.set(.12,O-P/2-.3,C+.012),$t.renderOrder=-1,t.add($t),t.userData.tapeBoard={y:O,w:T,h:P,z:I,face:I+.09,gap:E,screenZ:I+.09+E+R*.5};let Wt=new Ve({color:"#C8A24A",metalness:.9,roughness:.32});for(let[ft,Mt]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let L=Be(new Qe(.03,.038,E+.05,8),Wt,ft*(T*.985/2-.22),O+Mt*(P*.985/2-.22),I+.09+E/2);L.rotation.x=Math.PI/2,t.add(L);let Vt=Be(new Qe(.05,.05,.02,10),Wt,ft*(T*.985/2-.22),O+Mt*(P*.985/2-.22),I+.09+.012);Vt.rotation.x=Math.PI/2,t.add(Vt)}let Kt=new se(new Le(T*.9,.42),new Je({map:gt,transparent:!0,depthWrite:!1,opacity:.62}));Kt.position.set(0,O-P*.44-.16,I+.095),Kt.renderOrder=1,t.add(Kt);let j=xl({seed:62,base:"#ffffff",blocks:3,alpha:.2,repeatX:2,repeatY:1}),lt=ur(we.stoneShadow,"cloth",j,{bumpScale:.08}),Ct=Be(new Ce(o,.16,.62),lt,0,h+.08,a+.02);t.add(Ct);let Xt=ur(we.stoneShadow,"cloth",j,{bumpScale:.1}),Nt=[-12.1,-7.4,-4.6,4.6,7.4,12.1];for(let ft of Nt)t.add(Be(new Ce(1,3.35,.68),Xt,ft,1.675,a+.09)),t.add(Be(new Ce(1.2,.22,.76),ur(we.stoneWall,"cloth",j),ft,3.46,a+.09));let Yt=ur(we.stoneWall,"cloth",j,{bumpScale:.1});for(let ft of[-12,-7.4,-4.6,4.6,7.4,12]){let Mt=Math.abs(ft)>9||Math.abs(ft)<5;t.add(Be(new Ce(.9,.42,.5),Yt,ft,h+.37,a)),Mt&&t.add(Be(new Ce(.5,.2,.5),Yt,ft,h+.67,a))}let de=Ix();de.repeat.set(3,2);let st=new se(new Le(26,15),new Ve({map:de,roughness:.9}));st.rotation.x=-Math.PI/2,st.position.set(0,0,.5),st.receiveShadow=!0,t.add(st);let k=new se(new Le(7.6,7.6),new Je({map:Lx(),transparent:!0,depthWrite:!1,opacity:.92}));k.rotation.x=-Math.PI/2,k.position.set(0,.012,.4),k.renderOrder=1,t.add(k);let J=new se(new Le(80,60),new Ve({color:1314844,roughness:1}));J.rotation.x=-Math.PI/2,J.position.set(0,-.02,0),t.add(J);let tt=xl({seed:64,base:"#ffffff",blocks:3,alpha:.14,repeatX:1,repeatY:3}),ht=ur(we.stonePole,"cloth",tt,{bumpScale:.07}),Et={};for(let ft of["L","R"]){let Mt=ft==="L"?-Me.spanHalf:Me.spanHalf,L=new ue;L.position.set(Mt,0,0);let Vt=Be(new Qe(.28,.36,Me.ropeY,10),ht,0,Me.ropeY/2,0),Ot=Be(new Ce(.8,.22,.8),ht,0,Me.ropeY+.11,0);L.add(Vt,Ot);let A=Be(new Qe(.03,.03,1.1,6),ph(we.iron,"cloth"),0,Me.ropeY+.7,0);L.add(A);let _=ft==="R",H=Ux(_?"BUY":"SELL",_?we.flagUp:we.flagDown),G=new se(new Le(1.1,.62),new Je({map:H,side:De}));G.position.set(.62,Me.ropeY+1.05,0),L.add(G),Et[ft]=G,t.add(L)}e.pennants=Et;let pt=[-7.4,-4.6,4.6,7.4];for(let ft of pt){let Mt=Be(new Ce(.1,.1,.5),ph(we.iron,"cloth"),ft,3.62,a+.42);t.add(Mt);let L=Be(new Qe(.14,.07,.18,8),ph(we.iron,"cloth"),ft,3.78,a+.66);t.add(L);let Vt=Be(new Wi(.11,.36,8),new Je({color:we.torchFlame,fog:!1}),ft,4.02,a+.66);t.add(Vt);let Ot=new Zi(we.torchGlow,15,11,1.8);Ot.position.set(ft,4.05,a+.95),t.add(Ot),e.torches.push({flame:Vt,light:Ot,seed:Math.random()*10})}return t}function Pd(i,t){for(let e of i.userData.torches||[]){let n=Math.sin(t*1.7+e.seed)*.5+Math.sin(t*3.1+e.seed*2)*.3+Math.sin(t*.9+e.seed)*.2;e.light.intensity=14+n*1.6,e.flame.scale.y=1+n*.18,e.flame.scale.x=1-n*.09}}var El=null;function Nx(){if(El)return El;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.85)"),e.addColorStop(.7,"rgba(255,255,255,0.22)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),El=Ke(i,{srgb:!0}),El}var Id=new Map;function Fx(i){let t=Id.get(i);return t||(t=new ee(i),Id.set(i,t)),t}var is=class{constructor(t,{count:e=120,size:n=.05,color:s=16777215,gravity:r=-9.8,drag:o=1.5,life:a=.7}){this.count=e,this.gravity=r,this.drag=o,this.life=a;let c=new Ee;this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.age=new Float32Array(e).fill(1/0),c.setAttribute("position",new Fe(this.pos,3));let l=new hi({color:s,size:n,map:Nx(),alphaTest:.02,transparent:!0,opacity:.95,blending:In,depthWrite:!1,sizeAttenuation:!0});this.points=new Fn(c,l),this.points.frustumCulled=!1,t.add(this.points);for(let h=0;h<e;h++)this.pos[h*3+1]=-999}spawn(t,e,n,s=2.5,r=2.5,o=12,a=null){let c=0;for(let l=0;l<this.count&&c<o;l++)this.age[l]<this.life||(this.age[l]=0,this.pos[l*3]=t,this.pos[l*3+1]=e,this.pos[l*3+2]=n,this.vel[l*3]=(Math.random()-.5)*s,this.vel[l*3+1]=Math.random()*r,this.vel[l*3+2]=(Math.random()-.5)*s,c++);a&&this.points.material.color.lerp(Fx(a),.35)}update(t){let e=this.gravity;for(let n=0;n<this.count;n++){if(this.age[n]>this.life){this.pos[n*3+1]=-999;continue}this.age[n]+=t;let s=Math.max(0,1-this.drag*t);this.vel[n*3]*=s,this.vel[n*3+1]=this.vel[n*3+1]*s+e*t,this.vel[n*3+2]*=s,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.pos[n*3+1]<.02&&e<0&&(this.vel[n*3+1]*=-.3,this.pos[n*3+1]=.02)}this.points.geometry.attributes.position.needsUpdate=!0}},Tl=class{constructor(t,e=1){e=Math.max(.2,Math.min(1,e)),this.scene=t,this.sparksGold=new is(t,{count:Math.round(150*e),size:.05,color:$e.BUY_BRIGHT}),this.sparksSilver=new is(t,{count:Math.round(150*e),size:.05,color:tn.silverBright}),this.embers=new is(t,{count:Math.round(60*e),size:.08,color:we.torchFlame,gravity:1.8,drag:.6,life:1.4}),this.jade=new is(t,{count:Math.round(60*e),size:.06,color:$e.SELL_BRIGHT,gravity:-2.5}),this.dust=new is(t,{count:Math.round(80*e),size:.14,color:we.floorBase,gravity:-1.2,drag:2.5,life:.9}),this.dust.points.material.blending=Ri,this.dust.points.material.opacity=.5,this.fur=new is(t,{count:40,size:.07,color:"#E8E4D8",gravity:-1.5,drag:2,life:2.2}),this.fur.points.material.blending=Ri,this.fur.points.material.opacity=.9}clashBurst(t){this.sparksGold.spawn(t.x,t.y,t.z,4,3,22),this.sparksSilver.spawn(t.x,t.y,t.z,4,3,22)}lungeSparks(t){this.sparksGold.spawn(t.x,t.y,t.z,2,2,10)}emberBurst(t){this.embers.spawn(t.x,t.y,t.z,1.2,1.6,14)}ghost(t){this.jade.spawn(t.x,t.y,t.z,.8,.6,6,$e.SELL_BRIGHT)}ghostTile(t){this.jade.spawn(t.x,t.y,t.z,.8,.6,6,$e.SELL_DEEP)}dustBurst(t){this.dust.spawn(t.x,t.y,t.z,2.2,1.8,16)}furTuft(t){this.fur.spawn(t.x,t.y,t.z,.6,.4,5)}update(t){for(let e of[this.sparksGold,this.sparksSilver,this.embers,this.jade,this.dust,this.fur])e.update(t)}};function Bx(i,t){let e=document.createElement("canvas");e.width=128,e.height=128;let n=e.getContext("2d");n.fillStyle=i,n.strokeStyle=t,n.lineWidth=4,n.lineJoin="round",n.beginPath(),n.ellipse(64,88,30,34,0,0,Math.PI*2),n.fill(),n.beginPath(),n.arc(64,46,22,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(47,34),n.lineTo(42,12),n.lineTo(58,26),n.closePath(),n.fill(),n.stroke(),n.beginPath(),n.moveTo(81,34),n.lineTo(86,12),n.lineTo(70,26),n.closePath(),n.fill(),n.stroke(),n.beginPath(),n.moveTo(90,104),n.bezierCurveTo(114,100,116,72,102,62),n.lineWidth=9,n.strokeStyle=i,n.stroke(),n.fillStyle=i,n.beginPath(),n.ellipse(52,118,12,6,0,0,Math.PI*2),n.ellipse(78,118,12,6,0,0,Math.PI*2),n.fill();let s=new xn(e);return s.colorSpace=Ye,s}var Ox=["#35D07F","#26A69A","#1B7A4B"],zx=["#EF5350","#A31621","#7A0C14"];function Ld(i,t,e,n){let s=new ue;i.add(s);let r=t==="buy"?Ox:zx,o=t==="buy"?1:-1,a=[],c=r.map(h=>Bx(h,"rgba(5,6,15,0.8)")),l=0;for(let h=0;h<n;h++)for(let d=0;d<e;d++){let u=c[l%c.length],f=new Je({map:u,transparent:!0,depthWrite:!1,fog:!0}),g=new se(new Le(.62,.62),f),x=d-(e-1)/2,m=o*(6.1+h*.85+Math.random()*.45),p=-3.3+x*.62+(Math.random()-.5)*.3,M=.75+Math.random()*.4;g.position.set(m,0,p),g.scale.setScalar(M),g.rotation.y=o*-(.45+Math.random()*.3),s.add(g),a.push({m:g,baseY:.31*M,s:M,phase:Math.random()*Math.PI*2,speed:5+Math.random()*4,hop:.6+Math.random()*.8}),l++}return{group:s,cats:a,side:t}}var wl=class{constructor(t,e=1){let n=Math.max(3,Math.round(6*e)),s=Math.max(2,Math.round(3*e));this.packs=[Ld(t,"buy",n,s),Ld(t,"sell",n,s)],this.cheer={buy:0,sell:0},this.t=0}update(t,e,n=0){this.t+=t;let s=We.clamp(e||0,-1,1),r=We.clamp(n||0,0,1),o=s>.08?Math.min(1,s*1.4):r*.35,a=s<-.08?Math.min(1,-s*1.4):r*.35,c=Math.min(1,t*4);this.cheer.buy+=(o-this.cheer.buy)*c,this.cheer.sell+=(a-this.cheer.sell)*c;for(let l of this.packs){let h=this.cheer[l.side];for(let d of l.cats){let u=Math.sin(this.t*(1.4+r*1.2)+d.phase)*(.012+r*.02),f=h>.02?Math.abs(Math.sin(this.t*(d.speed+r*3)+d.phase)):0;d.m.position.y=d.baseY+u+f*h*(.34+r*.22)*d.hop,d.m.rotation.z=f*h*.08*(d.m.position.x>0?-1:1)}}}};var mi=We.clamp;var Dd={RUSH:{cat:"A",len:.78,cool:2.6,prio:1},LUNGE:{cat:"A",len:.67,cool:2.3,prio:1},THRUST:{cat:"A",len:.53,cool:1.85,prio:1},FEINT:{cat:"A",len:.63,cool:2.6,prio:2},SLASH_UP:{cat:"A",len:.74,cool:2.8,prio:1},TAUNT:{cat:"A",len:.96,cool:4.2,prio:2},PARRY_HOP:{cat:"B",len:.56,cool:2,prio:1},PARRY_BEAT:{cat:"B",len:.52,cool:1.7,prio:1},SLASH_SPIN:{cat:"B",len:.81,cool:2.6,prio:1},RIPOSTE:{cat:"B",len:.78,cool:2.5,prio:2},SIT_GUARD:{cat:"A",len:4.6,cool:0,prio:0}},Hx={RUSH:.12,LUNGE:.13,THRUST:.13,FEINT:.1,SLASH_UP:.16,SLASH_SPIN:.14,RIPOSTE:.15,PARRY_HOP:.09,PARRY_BEAT:.09,TAUNT:.09},mh=new Set(["RUSH","LUNGE","THRUST","SLASH_UP","SLASH_SPIN","RIPOSTE","TAUNT"]),kx=new Set(["PARRY_HOP","PARRY_BEAT","RIPOSTE","RECOVER"]),Gx=["LUNGE","THRUST","THRUST","SLASH_UP","FEINT"];var gh=2.7,Vx={RUSH:{B:"PARRY_HOP",A:"PARRY_HOP"},LUNGE:{B:"PARRY_HOP",A:"PARRY_BEAT"},THRUST:{B:"PARRY_BEAT",A:"PARRY_BEAT"},SLASH_UP:{B:"PARRY_BEAT",A:"PARRY_HOP"},FEINT:{B:"PARRY_BEAT",A:"PARRY_HOP"},SLASH_SPIN:{A:"PARRY_BEAT",B:"PARRY_HOP"},RIPOSTE:{A:"PARRY_BEAT",B:"PARRY_HOP"},TAUNT:{A:"PARRY_BEAT",B:"PARRY_HOP"}},Wx={LUNGE:{next:"THRUST",win:.3},THRUST:{next:"SLASH_UP",win:.26},FEINT:{next:"THRUST",win:.22},PARRY_BEAT:{next:"RIPOSTE",win:.34},PARRY_HOP:{next:"RIPOSTE",win:.24}},Al=class{constructor({rope:t,cats:e,flag:n,vfx:s,arena:r}){this.rope=t,this.cats=e,this.flag=n,this.vfx=s,this.arena=r,this.pressure=0,this.price=0,this.priceHistory=[],this.high15m=-1/0,this.low15m=1/0,this.prevP=0,this.cools={},this.sideCool={A:0,B:0},this.lowPTime=0,this.freezeUntil=0,this.frozen=!1,this.frozenPose=null,this.stumbling=!1,this.active={},this.now=0,this.onClash=null,this._events=[],this._lastMover="B",this.phase="circle",this.phaseT=0,this.phaseDur=1.4,this.gap=Math.abs(e.A.x-e.B.x),this.gapTarget=2,this.mid=(e.A.x+e.B.x)/2,this.circlePhase=0,this.lastMoveAt=0,this.stats={moves:0,clashes:0,locks:0,hits:0},this.busyUntil=0,this.lockCool=0,this._beats=[],this.engage=0,this.pS=0,this.lastLockAt=-99,this._lastUsed={},this._lastWinner=null,this._slotAt=void 0,this._lastAnswerAt=-9,this.intensity=0,this.log=[],this.reasons={},this.hunt=0,this.lane=0,this.laneRaw=0,this.laneWin=30,this.laneFull=.0035,this.laneHalf=3.2,this.lanePeak=0,this._lanePeakAt=0}_foe(t){return t==="A"?"B":"A"}laneState(){let t=null;for(let n=this.priceHistory.length-1;n>=0;n--)if(this.now-this.priceHistory[n].t>=this.laneWin){t=this.priceHistory[n].px;break}let e=t&&this.price>0?(this.price-t)/t*100:0;return{lane:+this.lane.toFixed(3),raw:+this.laneRaw.toFixed(3),pct:+e.toFixed(3)}}brawlIntensity(){return this.intensity}setPressure(t){this.pressure=mi(t,-1,1),this._events.push({type:"pressure",P:this.pressure})}setPrice(t){let e=this.now;for(this.price=t,this.priceHistory.push({t:e,px:t});this.priceHistory.length&&e-this.priceHistory[0].t>60;)this.priceHistory.shift();let n=this.priceHistory.filter(s=>e-s.t<=900);if(n.length){let s=-1/0,r=1/0;for(let o of n)o.px>s&&(s=o.px),o.px<r&&(r=o.px);t>this.high15m&&(this.high15m=t,this._events.push({type:"newHigh"})),t<this.low15m&&(this.low15m=t,this._events.push({type:"newLow"})),(s!==this._lastHi||r!==this._lastLo)&&(t>=s&&this._lastHi!==void 0&&s>this._lastHi&&this._events.push({type:"newHigh15"}),t<=r&&this._lastLo!==void 0&&r<this._lastLo&&this._events.push({type:"newLow15"}),this._lastHi=s,this._lastLo=r)}}trendM(){let t=this.priceHistory;if(t.length<2)return 0;let e=t.find(s=>this.now-s.t<=60);if(!e||e.px===this.price)return 0;let n=(this.price-e.px)/e.px;return mi(n/.005,-1,1)}_after(t,e){this._beats.push({t:this.now+t,fn:e})}update(t){this.now+=t,this._lastDt=t;let e=this.cats.A,n=this.cats.B;this.pS+=(this.pressure-this.pS)*Math.min(1,t/1.2);let s={BLADE_LOCK:1,CLASH:.85,HIT:.7,LUNGE:.62,RUSH:.62,THRUST:.55,RIPOSTE:.55,STUMBLE:.5,FEINT:.3,PARRY_BEAT:.35,TAUNT:.32,RECOVER:.24,PARRY_HOP:.18,SIT_GUARD:.15,IDLE:.08,FREEZE:.05},r=Math.max(s[e.state.name]===void 0?.12:s[e.state.name],s[n.state.name]===void 0?.12:s[n.state.name]);if(this.intensity+=(r-this.intensity)*Math.min(1,t/.7),this._beats.length){let a=[];this._beats=this._beats.filter(c=>c.t<=this.now?(a.push(c),!1):!0);for(let c of a)c.fn()}for(let a of["A","B"]){let c=this.cats[a],l=this.active[a];l&&c.state.name!==l&&(delete this.active[a],(l==="RUSH"||l==="LUNGE")&&this.rope.injectImpulse(c.x,0,-.4,0))}if(this.frozen&&Math.abs(this.pressure)>=.1){this.frozen=!1;for(let a of["A","B"])this.cats[a].setState("IDLE");this.lastMoveAt=this.now}this.frozen||this._pacePair(t);let o=null;for(let a=this.priceHistory.length-1;a>=0;a--)if(this.now-this.priceHistory[a].t>=this.laneWin){o=this.priceHistory[a].px;break}if(o&&this.price>0&&(this.laneRaw=mi((this.price-o)/o/this.laneFull,-1,1)),!this.frozen&&!this.stumbling&&(this.lane+=(this.laneRaw-this.lane)*Math.min(1,t/.7),this.circlePhase+=t,Math.abs(this.lane)>=this.lanePeak&&(this.lanePeak=Math.abs(this.lane),this._lanePeakAt=this.now)),!this.frozen){let a=this.lane*this.laneHalf,c=Me.spanHalf-Me.poleClearance-1.2;this.mid=mi(a,-c,c)}!this.frozen&&!this.stumbling&&this._checkTriggers(),!this.frozen&&!this.stumbling&&this._maintainGuard(),!this.frozen&&!this.stumbling&&this.now>this.busyUntil&&this._tempoTick(),this._events.length=0}_maintainGuard(){let t=this.pS,e=t>=0?"B":"A",n=this.cats[e],s=n.state.name,r=Math.abs(t)>=.07;if(s==="SIT_GUARD"){if(!r||this.gap>gh){n.setState("RECOVER",.2);return}n.state.dur>0&&n.state.t>n.state.dur-.6&&n.setState("SIT_GUARD",Dd.SIT_GUARD.len,{dir:this._fw(e)});return}r&&(this.gap>gh||this._canMove(e,"SIT_GUARD")&&this._start(e,"SIT_GUARD",{dir:this._fw(e)},"guard"))}_pacePair(t){let e=this.cats.A,n=this.cats.B;if(this.phaseT+=t,this.phaseT>=this.phaseDur){this.phaseT=0;let p=1.9-Math.abs(this.pS)*.35,M=.92+Math.random()*.16;this.phase==="circle"?(this.phase="engage",this.phaseDur=p*.26*M,this.gapTarget=1.6+Math.random()*.08):this.phase==="engage"?(this.phase="break",this.phaseDur=p*.13*M,this.gapTarget=2.24+Math.random()*.1):(this.phase="circle",this.phaseDur=p*.61*M,this.gapTarget=2.06+Math.random()*.1)}this.engage=this.phase==="engage"?1:0;let s=Math.abs(e.x-n.x),r=this.gapTarget,c=r<s?3.2:2.2,l=r-s,h=Math.sign(l)*Math.min(Math.abs(l)*Math.min(1,c*t),c*t),d=this.phase==="circle"?Math.sin(this.circlePhase*1.7)*.1:0;this.hunt+=(d-this.hunt)*Math.min(1,t*2.4);let u=this.hunt*mi((s-1.3)/.9,0,1),f=this.mid+h/2+u,g=this.mid-h/2-u*.6;if(f<g){let p=f;f=g,g=p}let x=Me.spanHalf-Me.poleClearance-.4;Math.abs(f)>x&&(e.wobble=.6),e.x=mi(f,-x,x),n.x=mi(g,-x,x),this.gap=Math.abs(e.x-n.x);let m=1.05;if(this.gap<m){let p=(m-this.gap)/2,M=e.x>n.x?1:-1;e.x+=M*p,n.x-=M*p,this.gap=Math.abs(e.x-n.x)}}_tempoTick(){let t=this.phase==="engage"?.78:1.15;if(this._slotAt===void 0&&(this._slotAt=this.now+.25),this.now<this._slotAt)return;this._slotAt=this.now+t*(.9+Math.random()*.2);let e=this.pS,n=Math.abs(e)<.05,s=e>=0?"A":"B",r=s==="A"?"B":"A",o=n?["LUNGE","FEINT"]:Gx;for(let a of this._ordered(o))if(this._canMove(s,a)){this._start(s,a,{dir:this._fw(s)},"tempo");return}if(n){for(let a of["PARRY_HOP","PARRY_BEAT"])if(this._canMove(r,a)){this._start(r,a,{dir:this._fw(r)},"tempo");return}}else if(this._canMove(r,"SIT_GUARD")&&this.gap<=gh){this._start(r,"SIT_GUARD",{dir:this._fw(r)},"guard");return}}_ordered(t){let e={};for(let n of t)e[n]=Math.random()*.5;return t.slice().sort((n,s)=>{let r=(this._lastUsed[n]===void 0?-20:this._lastUsed[n])+e[n],o=(this._lastUsed[s]===void 0?-20:this._lastUsed[s])+e[s];return r-o})}_fw(t){return t==="A"?-1:1}_checkTriggers(){let t=this.pressure,e=this._events,n=this.priceHistory,s=null;for(let a=n.length-1;a>=0;a--)if(this.now-n[a].t>=5){s=n[a].px;break}if(s&&!this.stumbling&&this.now>this.busyUntil&&Math.abs(this.price-s)/s>.0018&&!this._stumbleCool){this._startPair("STUMBLE"),this._stumbleCool=this.now+6;return}if(this._stumbleCool&&this.now>this._stumbleCool&&(this._stumbleCool=0),Math.abs(t)<.06){if(this.lowPTime+=this._lastDt||0,this.lowPTime>8&&!this.frozen){this.frozen=!0;for(let a of["A","B"])this.cats[a].setState("FREEZE",0,{until:()=>!this.frozen});return}}else this.lowPTime=0;let r=this.trendM();if(this._prevM!==void 0&&r!==0&&this._prevM!==0&&Math.sign(r)!==Math.sign(this._prevM)){if(r>0&&this._canMove("A","TAUNT")){this._start("A","TAUNT",{dir:this._fw("A")},"momentum");return}if(r<0&&this._canMove("B","RIPOSTE")){this._start("B","RIPOSTE",{dir:this._fw("B")},"momentum");return}}this._prevM=r;let o=!1;for(let a of e)if(a.type==="pressure"){if(this.prevP<=.35&&a.P>.35&&this._canMove("A","RUSH")){this._start("A","RUSH",{dir:this._fw("A")},"spike"),o=!0;break}if(this.prevP>=-.35&&a.P<-.35&&this._canMove("B","PARRY_HOP")){this._start("B","PARRY_HOP",{dir:this._fw("B")},"spike"),o=!0;break}this.prevP=a.P}o||(this.prevP=t);for(let a of e){if(a.type==="newHigh15"&&this._canMove("A","SLASH_UP")){this._start("A","SLASH_UP",{dir:this._fw("A")},"extreme");return}if(a.type==="newLow15"&&this._canMove("B","SLASH_SPIN")){this._start("B","SLASH_SPIN",{dir:this._fw("B")},"extreme");return}}}_canMove(t,e){let n=this.now;if(this.active[t]&&!(this.active[t]==="SIT_GUARD"&&(e==="PARRY_HOP"||e==="PARRY_BEAT"))||(this.cools[e]||0)>n||this.sideCool[t]>n||n<this.busyUntil)return!1;let s=this.cats[t].state;return!(s.name==="BLADE_LOCK"||s.name==="CLASH"||s.name==="STUMBLE"||s.name==="FREEZE"||s.name==="HIT"||s.name==="RECOVER"&&s.t<.12)}_start(t,e,n={},s="tempo",r={}){let o=Dd[e];if(!o||!this.cats[t]||!this._canMove(t,e))return o||(this._badMoves=this._badMoves||[]).push({t:+this.now.toFixed(2),side:t,move:String(e)}),!1;if(mh.has(e)){let h=this.pS>=0?"A":"B";if(t!==h&&s!=="winner")return!1}this.log.push({t:+this.now.toFixed(2),side:t,move:e,reason:s}),this.log.length>400&&this.log.shift(),this.reasons[s]=(this.reasons[s]||0)+1;let a=this.cats[t];(e==="RUSH"||e==="LUNGE")&&(n.reach=mi(this.gap-1.15,.12,1)),this._lastUsed[e]=this.now,this.cools[e]=this.now+o.cool,r.chain||(this.sideCool[t]=this.now+.55),this.active[t]=e,this.lastMoveAt=this.now,this._lastMover=t,this.stats.moves++,a.setState(e,o.len,{hold:Hx[e]||0,...n});let c=Wx[e];if(c){let h=n.chainDepth||0;h<2&&this._after(o.len+c.win*.55,()=>{let d=h===0?.55:.25;Math.random()>d||this._canMove(t,c.next)&&(this.stats.combos=(this.stats.combos||0)+1,this._start(t,c.next,{dir:this._fw(t),chainDepth:h+1},"combo",{chain:!0}))})}let l=t==="A"?"B":"A";if(mh.has(e)&&!this.active[l]&&this.now-this._lastAnswerAt>.42&&Math.random()<.45){let h=e==="FEINT"?.75:.45;if(Math.random()>=h)return;let d=Vx[e],u=d&&d[l]||(l==="B"?"PARRY_HOP":"LUNGE");this._canMove(l,u)&&(this._start(l,u,{dir:this._fw(l)},"reaction"),this._lastAnswerAt=this.now)}}_startPair(t){let e=t==="STUMBLE"?1.6:1.2;this.stumbling=!0,this.active.A=t,this.active.B=t;let n=mi(Math.abs(this.cats.A.x)-2,.4,1),s=mi(Math.abs(this.cats.B.x)-2,.4,1);this.cats.A.setState(t,e,{dir:-this._fw("A"),dist:n}),this.cats.B.setState(t,e,{dir:-this._fw("B"),dist:s});let r=(this.cats.A.x+this.cats.B.x)/2,o=this.rope.yAt(r);this._after(e*.5,()=>{this.vfx&&(this.vfx.dustBurst({x:r,y:Math.max(o-.4,.4),z:.2}),this.vfx.furTuft({x:r+.3,y:o+.2,z:.1})),this.flag&&(this.flag.spin=1.5)}),this._after(e+.1,()=>{this.stumbling=!1,this.lastMoveAt=this.now})}tryClash(t){let n=t==="A"?"B":"A",s=this.cats[n];if(this.now<this.busyUntil||this.now<this.lockCool)return!1;let r=s.state.name,o=kx.has(r)||r==="SIT_GUARD"||mh.has(r);if(!(this.gap<1.75))return!1;let c=this.now-this.lastLockAt,l=r==="SIT_GUARD"?.85:o?.6:.18,h=c<4?.35:c>9?1.25:1;if(Math.random()>Math.min(.92,l*h))return!1;let d=this.pS>.02?"A":this.pS<-.02||this._lastWinner==="A"?"B":"A";return this._beginLock(d),!0}_beginLock(t){let e=t==="A"?"B":"A",n=.42+Math.random()*.1;this.lastLockAt=this.now,this._lastWinner=t,this.busyUntil=this.now+n+.55,this.active.A="BLADE_LOCK",this.active.B="BLADE_LOCK",this.cats.A.setState("BLADE_LOCK",n,{winner:t==="A"}),this.cats.B.setState("BLADE_LOCK",n,{winner:t==="B"}),this.stats.locks++,this.lastMoveAt=this.now,this._after(n,()=>{let s=t==="A"?-1:1;this.cats[e].setState("CLASH",.5,{dir:s,loser:!0}),this.cats[t].setState("CLASH",.5,{dir:s,loser:!1}),this.active.A="CLASH",this.active.B="CLASH",this.stats.clashes++,this.sideCool.A=this.sideCool.B=this.now+.4,this.onClash&&this.onClash({winner:t,loser:e})}),this._after(n+.5,()=>{this.cats.A.setState("RECOVER",.2),this.cats.B.setState("RECOVER",.2),delete this.active.A,delete this.active.B,this.lastMoveAt=this.now,this.lockCool=this.now+3,this.phase="break",this.phaseT=0,this.phaseDur=.5+Math.random()*.5,this.gapTarget=2.1+Math.random()*.7,this._after(.05,()=>{let s=["LUNGE","THRUST","SLASH_UP","SLASH_SPIN","RIPOSTE"],r=s[Math.floor(Math.random()*s.length)];this._canMove(t,r)&&this._start(t,r,{dir:this._fw(t)},"winner")})})}resolveHit(t,e){let s=t==="A"?"B":"A",r=this.cats[s];if(this.now<this.busyUntil||r.state.name==="STUMBLE"||r.state.name==="BLADE_LOCK"||r.state.name==="CLASH")return;let o=.7+Math.abs(this.pressure)*.8;r.setState("HIT",.3,{dir:e,mag:o}),this.active[s]="HIT",this.stats.hits++,this.busyUntil=this.now+.12}pairCentre(){return(this.cats.A.x+this.cats.B.x)/2}};function Ud(i){let e=new En(60,32,20),n=new hn({side:yn,depthWrite:!1,fog:!1,uniforms:{top:{value:new ee("#04050E")},mid:{value:new ee("#0B1030")},horizon:{value:new ee("#1E1638")},glowA:{value:new ee("#3A2638")},glowB:{value:new ee("#1F0F0A")}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
      }`}),s=new se(e,n);return i.add(s),s}function Nd(i){let t=new ue,e=[{n:420,r:56,size:1.15,opacity:.95,tw:1.7},{n:300,r:57.5,size:.85,opacity:.75,tw:2.3},{n:200,r:59,size:.62,opacity:.55,tw:3.1}],n=[];for(let c of e){let l=[],h=[],d=[];for(let x=0;x<c.n;x++){let m=Math.random()*Math.PI*2,p=.12+Math.random()*.83,M=Math.sqrt(Math.max(0,1-p*p)),w=c.r;l.push(w*M*Math.cos(m),w*p,w*M*Math.sin(m));let v=Math.random(),b=v<.55?[.86,.89,1]:v<.8?[1,.96,.86]:v<.92?[1,.84,.6]:[.75,.83,1],T=.6+Math.random()*.4;h.push(b[0]*T,b[1]*T,b[2]*T),d.push(Math.random()*Math.PI*2)}let u=new Ee;u.setAttribute("position",new pe(l,3)),u.setAttribute("color",new pe(h,3)),u.setAttribute("phase",new pe(d,1));let f=new hn({transparent:!0,depthWrite:!1,fog:!1,blending:In,uniforms:{uTime:{value:0},uBase:{value:c.opacity},uSize:{value:c.size}},vertexShader:`
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
        }`}),g=new Fn(u,f);g.frustumCulled=!1,g.renderOrder=-4,t.add(g),n.push({points:g,mat:f,speed:c.tw,base:c.opacity})}let s=[],r=[];for(let c=0;c<900;c++){let l=(Math.random()-.5)*Math.PI*2,h=(Math.random()-.5)*.55*(1+Math.sin(l*3)*.3),d=Math.cos(l)*56,u=14+Math.sin(l*1.3)*22,f=Math.sin(l)*40-20,g=d+(Math.random()-.5)*14,x=u+h*22+(Math.random()-.5)*9,m=f+(Math.random()-.5)*14,p=.1+Math.random()*.3,M=Math.random()<.3;s.push(g,Math.max(3,x),m),r.push(p*(M?1:.85),p*.9,p*(M?.75:1))}let o=new Ee;o.setAttribute("position",new pe(s,3)),o.setAttribute("color",new pe(r,3));let a=new Fn(o,new hi({size:.42,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1,fog:!1,blending:In}));return a.frustumCulled=!1,a.renderOrder=-4,t.add(a),i.add(t),{group:t,update(c){for(let l of n)l.mat.uniforms.uTime.value=c*l.speed;t.rotation.y=c*.004}}}function Fd(i){let t=new ue,e=[];function n(s){let r=document.createElement("canvas");r.width=256,r.height=128;let o=r.getContext("2d");for(let a=0;a<26;a++){let c=30+Math.random()*196,l=40+Math.random()*55,h=16+Math.random()*36,d=o.createRadialGradient(c,l,0,c,l,h),u=.09+Math.random()*.13;d.addColorStop(0,`rgba(198,208,240,${u})`),d.addColorStop(1,"rgba(198,208,240,0)"),o.fillStyle=d,o.beginPath(),o.arc(c,l,h,0,Math.PI*2),o.fill()}return Ke(r)}for(let s=0;s<9;s++){let r=new Je({map:n(s),transparent:!0,depthWrite:!1,fog:!1,opacity:.5+Math.random()*.3,side:De}),o=5+Math.random()*6,a=new se(new Le(o,o*.4),r);a.position.set((Math.random()-.5)*22,5.2+Math.random()*5.2,-4.6-Math.random()*1.9),a.rotation.x=-.05,a.renderOrder=2,t.add(a),e.push({m:a,speed:.12+Math.random()*.22,phase:Math.random()*100})}return i.add(t),{group:t,update(s,r){for(let o of e)o.m.position.x+=o.speed*r,o.m.position.x>18&&(o.m.position.x=-18),o.m.position.y+=Math.sin(s*.3+o.phase)*.0035,o.m.material.opacity=.34+.22*Math.sin(s*.23+o.phase),o.m.material.opacity<.18&&(o.m.material.opacity=.18)}}}function Bd(i){let t=new ue,e=3,n=[],s=[];for(let o=0;o<e;o++){let a=document.createElement("canvas");a.width=256,a.height=16;let c=a.getContext("2d"),l=c.createLinearGradient(0,8,256,8);l.addColorStop(0,"rgba(255,255,255,0)"),l.addColorStop(.75,"rgba(200,220,255,0.85)"),l.addColorStop(1,"rgba(255,255,255,1)"),c.fillStyle=l,c.fillRect(0,0,256,16);let h=Ke(a),d=new Je({map:h,transparent:!0,depthWrite:!1,fog:!1,opacity:0,blending:In}),u=new se(new Le(9,.16),d);u.visible=!1,u.renderOrder=-4,t.add(u),s.push(u),n.push(d)}let r=s.map((o,a)=>({active:!1,t:0,dur:0,next:4+a*5,from:new U,to:new U}));return i.add(t),{group:t,update(o,a,c){for(let l=0;l<e;l++){let h=r[l],d=s[l],u=n[l];if(!h.active){if(h.next-=a*(1+c*.6),h.next<=0){h.active=!0,h.t=0,h.dur=.9+Math.random()*.7;let x=Math.PI*(.62+Math.random()*.25),m=40+Math.random()*8;h.from.set(Math.cos(x)*m*(Math.random()<.5?-1:1),20+Math.random()*14,-28-Math.random()*10),h.to.set(h.from.x*-.35-(Math.random()-.5)*20,h.from.y-14-Math.random()*8,h.from.z+4),d.visible=!0}continue}h.t+=a;let f=h.t/h.dur;if(f>=1){h.active=!1,h.next=6+Math.random()*12,d.visible=!1;continue}d.position.lerpVectors(h.from,h.to,f),d.lookAt(d.position.clone().multiplyScalar(2));let g=Math.sin(Math.min(1,f*1.15)*Math.PI);u.opacity=g*.9}}}}function Od(i){let t=new ue;function e(n,s,r,o,a,c){let l=document.createElement("canvas");l.width=1024,l.height=256;let h=l.getContext("2d");h.clearRect(0,0,1024,256),h.fillStyle=o;let d=a,u=()=>(d=d*16807%2147483647,d%1e3/1e3),f=256*.55,g=256*.85;h.beginPath(),h.moveTo(0,256);let x=(f+g)/2;for(let M=0;M<=1024;M+=16)x+=(u()-.5)*26,x=Math.max(f,Math.min(g,x)),h.lineTo(M,x);h.lineTo(1024,256),h.closePath(),h.fill();let m=new xn(l);m.colorSpace=Ye;let p=new se(new Le(n,s),new Je({map:m,transparent:!0,depthWrite:!1,fog:!1}));return p.position.set(0,c+s/2,r),p.renderOrder=-3,p}return t.add(e(170,10,-54,"#161229",12345,5.6)),t.add(e(150,8,-46,"#1E1836",987654,5)),i.add(t),t}function zd(i,t=1){let e=Math.round(44*Math.max(.25,Math.min(1,t))),n=new Float32Array(e*3),s=new Float32Array(e),r=[];for(let l=0;l<e;l++){let h=(Math.random()-.5)*20,d=.6+Math.random()*3.4,u=-2+Math.random()*9;r.push([h,d,u]),n[l*3]=h,n[l*3+1]=d,n[l*3+2]=u,s[l]=Math.random()*Math.PI*2}let o=new Ee;o.setAttribute("position",new Fe(n,3)),o.setAttribute("seed",new Fe(s,1));let a=new hn({transparent:!0,depthWrite:!1,blending:In,uniforms:{uTime:{value:0}},vertexShader:`
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
      }`}),c=new Fn(o,a);return c.frustumCulled=!1,i.add(c),{update(l){a.uniforms.uTime.value=l}}}function Hd(i,t=1){let e=Math.round(28*Math.max(.25,Math.min(1,t))),n=new Float32Array(e*3),s=new Float32Array(e),r=[-7.5,-2.7,2.7,7.5];for(let l=0;l<e;l++){let h=r[l%4];n[l*3]=h+(Math.random()-.5)*.5,n[l*3+1]=2.9+Math.random()*2.4,n[l*3+2]=-6.2+Math.random()*1.4,s[l]=Math.random()*100}let o=new Ee;o.setAttribute("position",new Fe(n,3)),o.setAttribute("seed",new Fe(s,1));let a=new hn({transparent:!0,depthWrite:!1,blending:In,uniforms:{uTime:{value:0}},vertexShader:`
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
      }`}),c=new Fn(o,a);return c.frustumCulled=!1,i.add(c),{update(l){a.uniforms.uTime.value=l}}}var kd=Xe.goldPrimary,wn={cx:0,cy:3.245,w:7.6,h:2.74,z:-6.67},bs={title:17,sub:12,chip:11,axis:11.5,time:11,tag:13.5,msg:12},_h={r:74,t:30,b:20};function Gd(i,t,e={}){let n=e.redrawMs||400,s=e.renderer,r=new U,o=document.createElement("canvas");o.width=760,o.height=276;let a=o.getContext("2d"),c=1,l=k=>k/c,h=new xn(o);h.colorSpace=Ye,h.generateMipmaps=!0,h.minFilter=Ln,h.magFilter=Ze,h.anisotropy=e.anisotropy||4;let d=new Je({map:h,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,side:De}),u=new se(new Le(wn.w,wn.h),d);u.position.set(wn.cx,wn.cy,wn.z),u.renderOrder=0,u.frustumCulled=!1;let f=new ue;f.add(u);let g=.1,x=.075,m=new Ve({color:"#14161E",metalness:.6,roughness:.4}),p=new ue,M=[0,1,2,3].map(()=>{let k=new se(new Ce(1,1,1),m);return k.frustumCulled=!1,p.add(k),k}),w=new se(new Ce(1,1,1),m);w.frustumCulled=!1,p.add(w),f.add(p);function v(k,J,tt,ht,Et){let pt=tt+g*.5,ft=(Mt,L,Vt,Ot,A,_,H)=>{Mt.scale.set(L,Vt,Ot),Mt.position.set(A,_,H)};ft(M[0],ht+x*2,x,g,k,J+Et/2+x/2,pt),ft(M[1],ht+x*2,x,g,k,J-Et/2-x/2,pt),ft(M[2],x,Et,g,k-ht/2-x/2,J,pt),ft(M[3],x,Et,g,k+ht/2+x/2,J,pt),ft(w,ht+.01,Et+.01,g*.55,k,J,tt-g*.85)}i.add(f);let b=e.variant||"slab",T=["slab","aurora","stars"],P="";function y(){let k=s&&s.domElement.clientWidth||window.innerWidth||1280,J=s&&s.domElement.clientHeight||window.innerHeight||800;P=k+"x"+J,Math.abs(t.aspect-k/J)>.001&&(t.aspect=k/J,t.updateProjectionMatrix()),t.updateMatrixWorld(!0);let tt=Math.abs(6.8-wn.z),ht=Math.tan(We.degToRad(t.fov/2))*tt,Et=ht*t.aspect,pt=e.board,ft=Math.min(wn.w,pt?pt.w*.985:wn.w,Et*2*.935),Mt=wn.h*(ft/wn.w);u.geometry.dispose(),u.geometry=new Le(ft,Mt);let L=pt?pt.screenZ!==void 0?pt.screenZ:pt.z+.09:wn.z;u.position.set(wn.cx,pt?pt.y:wn.cy,L),v(wn.cx,pt?pt.y:wn.cy,L,ft,Mt);let Vt=ft/(Et*2)*k,Ot=Mt/(ht*2)*J,A=Math.round(Math.min(1560,Math.max(640,Vt*1.9))),_=Math.max(160,Math.round(A*(Ot/Vt)));(A!==o.width||_!==o.height)&&(o.width=A,o.height=_,h.dispose(),h.needsUpdate=!0),c=Vt/A}let E={rev:0,seeded:!1,count:0,t:[],o:[],h:[],l:[],c:[]},R={price:null,status:"",mode:"",providerLabel:""},C=null,I=[],B=-1,D=null,O=0,K=0,Y=0,rt=Date.now(),$=8e3,nt=9e3;function X(){if(!E.count)return{txt:"LOADING\u2026",col:"#8F98A3",key:"load"};let k=C||R;if(k.mode==="demo")return{txt:"SIM TAPE",col:kd,key:"demo"};let J=k.providerLabel?String(k.providerLabel).toUpperCase():"SPOT";return k.status==="open"?Date.now()-rt>$?{txt:"STALE FEED",col:$e.SELL_BRIGHT,key:"stale"}:{txt:"LIVE",col:$e.BUY_BRIGHT,key:"live"}:k.status==="connecting"||k.status==="backoff"?{txt:"RECONNECTING\u2026",col:kd,key:"recon"}:{txt:"OFFLINE",col:"#8F98A3",key:"off"}}let xt=k=>k>=1e3?Math.round(k).toLocaleString("en-US"):k.toPrecision(5);function gt(k){if(!(k>0))return 1;let J=Math.pow(10,Math.floor(Math.log10(k)));for(let tt of[1,2,2.5,5,10])if(k<=tt*J)return tt*J;return 10*J}let $t=k=>new Date(k).toTimeString().slice(0,8);function Wt(k,J,tt,ht,Et,pt){k.beginPath(),k.moveTo(J+pt,tt),k.arcTo(J+ht,tt,J+ht,tt+Et,pt),k.arcTo(J+ht,tt+Et,J,tt+Et,pt),k.arcTo(J,tt+Et,J,tt,pt),k.arcTo(J,tt,J+ht,tt,pt),k.closePath()}function Kt(){let k=Date.now();O=k,K++;let J=o.width,tt=o.height,ht=b==="aurora",Et=b==="stars",pt=X(),ft=l(_h.r),Mt=l(_h.t),L=l(_h.b),Vt=J-ft,Ot=tt-Mt-L;if(a.clearRect(0,0,J,tt),!ht&&!Et){let z=a.createLinearGradient(0,0,0,tt);z.addColorStop(0,"rgba(13,16,32,0.94)"),z.addColorStop(.5,"rgba(9,11,24,0.92)"),z.addColorStop(1,"rgba(7,9,20,0.94)"),a.fillStyle=z,Wt(a,0,0,J,tt,l(9)),a.fill();let ot=a.createLinearGradient(0,0,0,l(46));ot.addColorStop(0,"rgba(255,255,255,0.055)"),ot.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=ot,Wt(a,0,0,J,l(46),l(9)),a.fill(),a.strokeStyle="rgba(245,197,66,0.5)",a.lineWidth=Math.max(1,l(1.2)),Wt(a,l(4),l(4),J-l(8),tt-l(8),l(7)),a.stroke(),a.strokeStyle="rgba(245,197,66,0.8)",a.lineWidth=Math.max(1.2,l(1.8));let wt=l(9);for(let[Jt,le,be,on]of[[l(10),l(10),1,1],[J-l(10),l(10),-1,1],[l(10),tt-l(10),1,-1],[J-l(10),tt-l(10),-1,-1]])a.beginPath(),a.moveTo(Jt+be*wt,le),a.lineTo(Jt,le),a.lineTo(Jt,le+on*wt),a.stroke()}else if(ht){let z=a.createLinearGradient(0,0,0,tt);z.addColorStop(0,"rgba(120,150,200,0.10)"),z.addColorStop(1,"rgba(0,0,0,0.55)"),a.fillStyle=z,a.fillRect(0,0,J,tt)}else a.fillStyle="rgba(8,10,24,0.72)",Wt(a,0,0,J,tt,l(9)),a.fill();a.textBaseline="middle",a.font=`700 ${l(bs.title)}px "Space Grotesk", Consolas, monospace`,a.textAlign="left",a.fillStyle="rgba(242,238,227,0.92)",a.fillText("BTC / USDT",l(15),l(17)),a.font=`500 ${l(bs.sub)}px "Space Grotesk", Consolas, monospace`,a.fillStyle="rgba(176,182,210,0.95)",a.fillText("1 s CANDLES",l(15)+a.measureText("BTC / USDT").width+l(84),l(17.5)),a.font=`700 ${l(bs.chip)}px "Space Grotesk", Consolas, monospace`;let A=pt.txt,_=a.measureText(A).width+l(30),H=J-l(12)-_,G=l(17)-l(10);a.fillStyle="rgba(6,8,18,0.45)",Wt(a,H,G,_,l(20),l(10)),a.fill(),a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=1,Wt(a,H+.5,G+.5,_-1,l(20)-1,l(10)),a.stroke(),a.beginPath(),a.arc(H+l(10),G+l(10),l(3.2),0,6.284),a.fillStyle=pt.col,a.fill(),a.fillStyle=pt.col,a.fillText(A,H+l(18),G+l(10.5));let q=E.count|0;if(q<2){a.fillStyle="rgba(146,152,181,0.8)",a.font=`500 ${l(bs.msg)}px "Space Grotesk", Consolas, monospace`,a.textAlign="center",a.fillText(E.seeded?"awaiting live tape\u2026":"seeding 5 min of 1 s candles\u2026",J/2,Mt+Ot/2),h.needsUpdate=!0;return}let dt=E.t,mt=E.o,Q=E.h,at=E.l,_t=E.c,zt=Math.max(3,l(7.5)),St=Vt-l(22),Tt=Math.max(16,Math.floor(St/zt)),It=q>Tt?q-Tt:0,Zt=q-It,jt=St/(Zt||1),N=z=>(z-It)*jt+jt*.5,ut=1/0,et=-1/0;for(let z=It;z<q;z++)at[z]<ut&&(ut=at[z]),Q[z]>et&&(et=Q[z]);R.price!=null&&isFinite(R.price)&&(R.price<ut&&(ut=R.price),R.price>et&&(et=R.price));let bt=(et-ut)*.1||Math.abs(et)*4e-4||1;ut-=bt,et+=bt;let yt=z=>Mt+(et-z)/(et-ut)*Ot,ct=gt((et-ut)/3);a.font=`500 ${l(bs.axis)}px "Space Grotesk", Consolas, monospace`;for(let z=Math.ceil(ut/ct)*ct;z<et;z+=ct){let ot=Math.round(yt(z))+.5;a.strokeStyle=ht||Et?"rgba(255,255,255,0.05)":"rgba(255,255,255,0.10)",a.lineWidth=1,a.beginPath(),a.moveTo(l(10),ot),a.lineTo(St+l(22),ot),a.stroke(),Et||(a.fillStyle="rgba(170,176,203,0.85)",a.textAlign="left",a.fillText(xt(z),Vt+l(8),ot))}a.textAlign="center",a.textBaseline="alphabetic";let kt=dt[It],it=dt[q-1];for(let z=Math.ceil(kt/15e3)*15e3;z<=it;z+=15e3){let ot=It,wt=q-1;for(;ot<wt;){let le=ot+wt>>1;dt[le]<z?ot=le+1:wt=le}let Jt=N(ot);Jt<l(20)||Jt>St-l(20)||(a.strokeStyle="rgba(255,255,255,0.1)",a.beginPath(),a.moveTo(Jt+.5,tt-L),a.lineTo(Jt+.5,tt-L+l(4)),a.stroke(),a.fillStyle="rgba(186,192,218,0.92)",a.font=`500 ${l(bs.time)}px "Space Grotesk", Consolas, monospace`,a.fillText($t(z),Jt,tt-l(5)))}if(Et){a.strokeStyle="rgba(255,255,255,0.10)",a.lineWidth=1;for(let z=It;z<q;z++){let ot=N(z);a.beginPath(),a.moveTo(ot,yt(Q[z])),a.lineTo(ot,yt(at[z])),a.stroke()}a.beginPath();for(let z=It;z<q;z++){let ot=N(z),wt=yt(_t[z]);z===It?a.moveTo(ot,wt):a.lineTo(ot,wt)}a.strokeStyle="rgba(190,214,255,0.22)",a.lineWidth=Math.max(1,l(1.2)),a.stroke();for(let z=It;z<q;z++){let ot=_t[z]>=mt[z]?$e.BUY_BRIGHT:$e.SELL_BRIGHT,wt=N(z),Jt=yt(_t[z]);a.globalAlpha=.85,a.beginPath(),a.arc(wt,Jt,Math.max(1,l(1.8)),0,6.284),a.fillStyle=ot,a.fill(),a.globalAlpha=.16,a.beginPath(),a.arc(wt,Jt,Math.max(2.5,l(4.6)),0,6.284),a.fill(),a.globalAlpha=1}}else if(ht){for(let ot=It;ot<q;ot++){let wt=N(ot),le=_t[ot]>=mt[ot]?$e.BUY_BRIGHT:$e.SELL_BRIGHT,be=yt(_t[ot]),on=yt(Q[ot]),Sn=yt(mt[ot]),Ue=Math.min(be,on),Pe=a.createLinearGradient(0,Ue,0,be+l(2));Pe.addColorStop(0,"rgba(255,255,255,0)"),Pe.addColorStop(.75,le),Pe.addColorStop(1,"#ffffff"),a.fillStyle=Pe,a.fillRect(wt-l(1.2),Ue,l(2.4),Math.max(l(2),be-Ue+l(2))),a.globalAlpha=1,a.fillStyle=le,a.fillRect(wt-l(2.4),Math.min(Sn,be),l(4.8),Math.max(l(1.8),Math.abs(be-Sn)))}let z=a.createLinearGradient(0,Mt+Ot*.3,0,tt);z.addColorStop(0,"rgba(120,180,255,0.18)"),z.addColorStop(1,"rgba(120,180,255,0)"),a.beginPath();for(let ot=It;ot<q;ot++){let wt=N(ot),Jt=yt(_t[ot]);ot===It?a.moveTo(wt,Jt):a.lineTo(wt,Jt)}a.lineTo(Vt,tt+40),a.lineTo(N(It)-l(20),tt+40),a.closePath(),a.fillStyle=z,a.fill()}else{let z=Math.max(1.5,Math.min(l(13),jt*.62));for(let ot=It;ot<q;ot++){let wt=N(ot),Jt=_t[ot]>=mt[ot];a.fillStyle=Jt?$e.BUY_BRIGHT:$e.SELL_BRIGHT,a.fillRect(wt-l(.7),yt(Q[ot]),Math.max(1,l(1.4)),Math.max(l(1.4),yt(at[ot])-yt(Q[ot])));let le=yt(mt[ot]),be=yt(_t[ot]);a.fillRect(wt-z/2,Math.min(le,be),z,Math.max(l(1.4),Math.abs(be-le)))}}if(!Et){a.save(),a.globalCompositeOperation="lighter";for(let[z,ot]of[[l(9),.07],[l(4),.11]]){a.beginPath();for(let wt=It;wt<q;wt++){let Jt=N(wt),le=yt(_t[wt]);wt===It?a.moveTo(Jt,le):a.lineTo(Jt,le)}a.strokeStyle=`rgba(150,205,255,${ot})`,a.lineWidth=z,a.lineJoin="round",a.stroke()}a.restore()}I=I.filter(z=>k-z.ts<nt&&z.ts>=kt-1e3);for(let z of I){let ot=It,wt=q-1,Jt=Math.floor(z.ts/1e3)*1e3;for(;ot<wt;){let Ue=ot+wt>>1;dt[Ue]<Jt?ot=Ue+1:wt=Ue}let le=N(ot),be=yt(Math.min(et-1,Math.max(ut+1,z.price))),on=Math.max(0,1-(k-z.ts)/nt),Sn=z.side==="buy"?$e.BUY:$e.SELL;a.globalAlpha=.25*on,a.beginPath(),a.arc(le,be,l(8)+Math.min(l(7),z.notional/25e4*l(7)),0,6.284),a.fillStyle=Sn,a.fill(),a.globalAlpha=on,a.beginPath(),a.arc(le,be,l(3)+Math.min(l(2.5),z.notional/25e4*l(2.5)),0,6.284),a.fill(),a.globalAlpha=1}let ye=R.price!=null&&isFinite(R.price)?R.price:_t[q-1],ce=ye>=(mt[q-1]!=null?mt[q-1]:ye)?$e.BUY_BRIGHT:$e.SELL_BRIGHT,ze=Math.min(Mt+Ot,Math.max(Mt,yt(ye))),cn=N(q-1);Et?(a.globalAlpha=.45,a.beginPath(),a.arc(cn,ze,l(10),0,6.284),a.fillStyle=ce,a.fill(),a.globalAlpha=1,a.strokeStyle=ce,a.lineWidth=Math.max(1,l(1.6)),a.beginPath(),a.moveTo(cn-l(9),ze),a.lineTo(cn+l(9),ze),a.moveTo(cn,ze-l(9)),a.lineTo(cn,ze+l(9)),a.stroke(),a.beginPath(),a.arc(cn,ze,Math.max(1.5,l(3)),0,6.284),a.fillStyle="#FFFFFF",a.fill()):(a.setLineDash([l(6),l(4)]),a.strokeStyle=ce,a.lineWidth=Math.max(1,l(1.2)),a.beginPath(),a.moveTo(l(10),ze+.5),a.lineTo(Vt,ze+.5),a.stroke(),a.setLineDash([]));let gi=ye>=1e3?Math.round(ye).toLocaleString("en-US"):ye.toFixed(2);a.font=`700 ${l(bs.tag)}px "Space Grotesk", Consolas, monospace`;let fn=a.measureText(gi).width+l(14),ni=l(19),_i=Math.min(Mt+Ot-ni/2,Math.max(Mt+ni/2,ze));a.fillStyle=ce,Wt(a,Vt+l(5),_i-ni/2,fn,ni,l(5)),a.fill(),a.fillStyle="#05060F",a.textAlign="center",a.textBaseline="middle",a.fillText(gi,Vt+l(5)+fn/2,_i+1),(C||R).mode!=="demo"&&k-rt>$&&(a.fillStyle="rgba(5,6,15,0.45)",a.fillRect(0,0,J,tt)),h.needsUpdate=!0}function j(k,J){if(!k)return;let tt=s?s.domElement.width:0;tt!==Y&&(Y=tt,y(),Kt()),E=k,J&&(R=J),E.rev!==B&&(B=E.rev,rt=Date.now());let ht=R.price!==D;D=R.price,Date.now()-O>=n&&(ht||C||J)&&Kt()}function lt(k){k&&(C=k,R.status=k.status,R.mode=k.mode,k.providerLabel&&(R.providerLabel=k.providerLabel),Kt(),C=null)}function Ct(k){!k||!isFinite(k.price)||!isFinite(k.notional)||(I.push({ts:k.ts||Date.now(),price:k.price,side:k.side,notional:k.notional}),I.length>40&&I.shift())}function Xt(k){return T.includes(k)?(b=k,Kt(),!0):!1}function Nt(k){return u.visible=!!k,u.visible}function Yt(){let k=X(),J=a.getImageData(0,0,o.width,o.height).data,tt=0;for(let pt=3;pt<J.length;pt+=124)J[pt]>12&&tt++;let ht=u.geometry.parameters,Et=[];for(let[pt,ft]of[[-1,1],[1,1],[1,-1],[-1,-1]])r.set(u.position.x+pt*ht.width/2,u.position.y+ft*ht.height/2,u.position.z).project(t),Et.push({x:r.x*.5+.5,y:-r.y*.5+.5});return{variant:b,draws:K,ink:tt,candles:E.count|0,rev:E.rev|0,seeded:!!E.seeded,chip:k.key,chipText:k.txt,lastPrice:R.price,stale:(C||R).mode!=="demo"&&Date.now()-rt>$,textureW:o.width,textureH:o.height,screenScale:+c.toFixed(3),plane:[+u.geometry.parameters.width.toFixed(2),+u.geometry.parameters.height.toFixed(2)],position:[+u.position.x.toFixed(2),+u.position.y.toFixed(2),+u.position.z.toFixed(3)],mount:e.board?{face:+e.board.face.toFixed(3),gap:+e.board.gap.toFixed(3),glass:+u.position.z.toFixed(3),proudBy:+(u.position.z-e.board.face).toFixed(3)}:null,boardWorld:e.board?{x0:+(e.board.w/-2).toFixed(2),x1:+(e.board.w/2).toFixed(2),y0:+(e.board.y-e.board.h/2).toFixed(2),y1:+(e.board.y+e.board.h/2).toFixed(2),face:+e.board.face.toFixed(3),front:+(u.position.z+.05).toFixed(3)}:null,screen:{l:+Math.min(...Et.map(pt=>pt.x)).toFixed(3),r:+Math.max(...Et.map(pt=>pt.x)).toFixed(3),t:+Math.min(...Et.map(pt=>pt.y)).toFixed(3),b:+Math.max(...Et.map(pt=>pt.y)).toFixed(3)},wall:{...wn}}}function de(){window.removeEventListener("resize",st),i.remove(f),u.geometry.dispose(),d.dispose(),h.dispose(),M.forEach(k=>k.geometry.dispose()),w.geometry.dispose(),m.dispose()}function st(){requestAnimationFrame(()=>{y(),Kt()})}return window.addEventListener("resize",st),y(),Kt(),Xt(b),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>Kt()).catch(()=>{}),{update:j,notifyStatus:lt,trade:Ct,stats:Yt,setVariant:Xt,setVisible:Nt,relayout:st,dispose:de,mesh:u,group:f,bezel:p,body:w,get variant(){return b}}}function Vd(i,t={}){let e=(t.vfxScale||1)>.5,n=new pl({antialias:e,powerPreference:"high-performance"}),s=t.res?Math.max(.4,Math.min(2.5,t.res)):Math.min(devicePixelRatio||1,e?1.75:1.25);n.setPixelRatio(s),n.setSize(i.clientWidth||1280,i.clientHeight||720),n.shadowMap.enabled=!1,n.toneMapping=Kr,n.toneMappingExposure=1.35,_d(Math.min(e?8:4,n.capabilities.getMaxAnisotropy())),i.appendChild(n.domElement);let r=new Rr;r.fog=new Ar(we.fog,18,55);function o(){return(i.clientWidth||1280)/(i.clientHeight||720)}let a=new mn(40,o(),.1,200);a.position.set(0,2.55,6.8),a.lookAt(0,3.15,0);let c=new Zr("#BFD4FF",.85);c.position.set(0,14,-8),c.castShadow=!1,r.add(c,c.target);let l=new Jr("#2A2438",.55);r.add(l);let h=new Zi($e.BUY_BRIGHT,34,7,1.6),d=new Zi($e.SELL_BRIGHT,34,7,1.6);r.add(h,d);let u=new qr("#FFD9A0",95,26,.75,.6,1.4);u.position.set(0,8,8),u.target.position.set(0,2,0),r.add(u,u.target);let f=new yl;r.add(f.mesh);let g=new vl({minDrawMs:e?250:800});r.add(g.group);let x=new fa("A"),m=new fa("B");x.x=1.1,m.x=-1.1,r.add(x.root,m.root);let p=Cd(r),M=new Tl(r,t.vfxScale||1),w=new Al({rope:f,cats:{A:x,B:m},flag:g,vfx:M,arena:p}),v=new wl(r,t.vfxScale||1),b={vfxScale:t.vfxScale||1,mouse:{x:0,y:0},mouseT:{x:0,y:0},moonPulse:0,shoot:null,clouds:null,stars:null,fireflies:null,embers:null};Ud(r),b.stars=Nd(r),b.vfxScale>.3&&(b.clouds=Fd(r),b.shoot=Bd(r),b.fireflies=zd(r,b.vfxScale),b.embers=Hd(r,b.vfxScale)),Od(r);let T=Gd(r,a,{variant:t.skyVariant||"slab",renderer:n,anisotropy:Math.min(8,n.capabilities.getMaxAnisotropy()),board:p.userData.tapeBoard,redrawMs:e?400:900});function P(z){var Jt,le;let ot=i.clientWidth||innerWidth,wt=i.clientHeight||innerHeight;b.mouseT.x=((Jt=z.clientX)!=null?Jt:ot/2)/ot*2-1,b.mouseT.y=((le=z.clientY)!=null?le:wt/2)/wt*2-1}window.addEventListener("pointermove",P,{passive:!0});let y={t:0,amp:0},E=0,R=0,C=.62,I=0,B=0,D=new U,O=new U,K=new U,Y=new U,rt=new U,$=new U,nt=new U,X=new U,xt=new U,gt=new U,$t=new U,Wt=new U;function Kt(z,ot,wt){let Jt=wt.x-ot.x,le=wt.y-ot.y,be=wt.z-ot.z,on=z.x-ot.x,Sn=z.y-ot.y,Ue=z.z-ot.z,Pe=Jt*Jt+le*le+be*be,Se=Pe>1e-9?(on*Jt+Sn*le+Ue*be)/Pe:0;Se=Se<0?0:Se>1?1:Se;let Cn=ot.x+Jt*Se,ve=ot.y+le*Se,re=ot.z+be*Se;return Math.sqrt((z.x-Cn)*(z.x-Cn)+(z.y-ve)*(z.y-ve)+(z.z-re)*(z.z-re))}let j=22,lt=.34;function Ct(z){let ot=new Ee,wt=new Float32Array(j*3),Jt=new Float32Array(j*3),le=new Float32Array(j).fill(1/0);ot.setAttribute("position",new Fe(wt,3)),ot.setAttribute("color",new Fe(Jt,3));let be=new hi({size:.085,vertexColors:!0,map:(()=>{let Ue=document.createElement("canvas");Ue.width=Ue.height=64;let Pe=Ue.getContext("2d"),Se=Pe.createRadialGradient(32,32,0,32,32,32);return Se.addColorStop(0,"rgba(255,255,255,1)"),Se.addColorStop(.5,"rgba(255,255,255,0.4)"),Se.addColorStop(1,"rgba(255,255,255,0)"),Pe.fillStyle=Se,Pe.fillRect(0,0,64,64),new xn(Ue)})(),transparent:!0,opacity:.9,blending:In,depthWrite:!1}),on=new Fn(ot,be);on.frustumCulled=!1,r.add(on);let Sn=new ee(z.data.side==="A"?$e.BUY_BRIGHT:$e.SELL_BRIGHT);return{points:on,pos:wt,col:Jt,age:le,tint:Sn,emit(Ue){let Pe=0;for(let Se=1;Se<j;Se++)this.age[Se]>this.age[Pe]&&(Pe=Se);this.age[Pe]=0,this.pos[Pe*3]=Ue.x,this.pos[Pe*3+1]=Ue.y,this.pos[Pe*3+2]=Ue.z},update(Ue){let Pe=lt;for(let Se=0;Se<j;Se++){if(this.age[Se]>Pe){this.col[Se*3]=this.col[Se*3+1]=this.col[Se*3+2]=0;continue}this.age[Se]+=Ue;let Cn=1-this.age[Se]/Pe;this.col[Se*3]=this.tint.r*Cn,this.col[Se*3+1]=this.tint.g*Cn,this.col[Se*3+2]=this.tint.b*Cn}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}}}let Xt=Ct(x),Nt=Ct(m),Yt={start(z){(z.data.side==="A"?Xt:Nt).emit(z.bladeTipWorld(Y))},update(z){Xt.update(z),Nt.update(z)}},de=-7.45,st={wide:{cx:.155,cy:.17,par:.78,s:1},mid:{cx:.13,cy:.15,par:.8,s:.85},narrow:{cx:.13,cy:.05,par:.92,s:.52}},k=new U,J=t.debug?{checks:0,fixes:0,worst:9,worstOut:9,post:null}:null,tt=/[?&]clip=off/.test(typeof location!="undefined"?location.search:""),ht=/[?&]block=off/.test(typeof location!="undefined"?location.search:""),Et=new Set(["SIT_GUARD","PARRY_BEAT","PARRY_HOP"]),pt=[.45,.62,.8,1],ft=["sz","sx","ez"],Mt=1.3,L=.05,Vt=3,Ot=t.debug?{checks:0,fixes:0,worstIn:0,worstOut:0,last:{}}:null;function A(z,ot,wt){return z.bladeMidWorld(wt),ot.bladeMidWorld(rt),wt.lerp(rt,.5)}function _(z){let ot=Me.spanHalf-Me.poleClearance;return We.clamp(z,-ot,ot)}let H=z=>z.data.side,G=z=>H(z)==="A"?m:x,q=z=>H(z)==="A"?-1:1;function dt(z,ot){return Math.abs(z.x-ot.x)}function mt(z,ot){y.t=Math.max(y.t,z),y.amp=Math.max(y.amp,ot)}function Q(z,ot){let wt=H(z),Jt=G(z),be=-q(z);if(M.lungeSparks(z.bladeMidWorld()),dt(z,Jt)<1.75){if(w.tryClash(wt))return;dt(z,Jt)<1.65&&(Jt.x=_(Jt.x+be*(ot?.5:.3)),w.resolveHit(wt,be),M.dustBurst({x:Jt.x,y:f.yAt(Jt.x),z:0}),mt(ot?.12:.07,ot?.11:.06))}f.injectImpulse(z.x,0,-.7,0)}let _t={rope:f,flagDart:!1,pressureWobble:0,circlePhase:0,...{onStamp(z){f.injectImpulse(z.x,0,-.9,0),M.dustBurst({x:z.x,y:f.yAt(z.x),z:0})},onLungeHit(z){Q(z,!1)},onThrust(z){let ot=z.bladeTipWorld();M.lungeSparks(ot),Yt.start(z)},onBeat(z){let ot=z.bladeTipWorld();M.clashBurst(ot),mt(.05,.03),Yt.start(z)},onSlash(z,ot){let wt=z.bladeTipWorld();H(z)==="A"?(M.emberBurst(wt),ot==="up"&&(E=Math.max(E,.19))):(M.ghost(wt),M.ghostTile(wt)),Yt.start(z),(ot==="crescent"||ot==="down")&&Q(z,!0),f.injectImpulse(z.x,0,-.7,0)},onWhoosh(z){M.ghost(z.bladeTipWorld())},onTaunt(z){M.lungeSparks(z.bladeTipWorld())},onTumble(z){M.dustBurst({x:z.x,y:f.yAt(z.x),z:0})},onHitImpact(z){M.dustBurst({x:z.x,y:f.yAt(z.x),z:0}),M.furTuft({x:z.x,y:z.root.position.y+.5,z:.1}),mt(.08,.05)},onKnockback(z,ot){z.x=_(z.x+ot*.4),f.injectImpulse(z.x,0,-1.1,0),M.dustBurst({x:z.x,y:f.yAt(z.x),z:0})},onLockSparks(z){let ot=z.bladeMidWorld();M.clashBurst(ot),mt(.09,.06)}}};w.onClash=()=>{let z=A(x,m,K);M.clashBurst(z),M.clashBurst(z),mt(.16,.13),E=Math.max(E,.12),b.moonPulse=1,B=Math.min(1,B+.5)};let zt={on:t.demo!==!1,t:0},St=67e3,Tt=0,It=!0,Zt=0,jt=[],N={armed:!1,ax:1.1,bx:-1.1},ut={on:!1,px:0,py:3.6,pz:12.6,tx:0,ty:3,tz:-2},et={setPressure(z){zt.on=!1,Zt=We.clamp(z,-1,1)*.16,w.setPressure(z)},setPrice(z){if(!z||z<=0)return;zt.on=!1;let ot=St;St=z,g.tickDir(z>ot?1:-1),g.setPrice(z),w.setPrice(z),g.setChange24h(We.clamp(w.trendM()*8,-99,99))},setChange24hText(z){g.setChange24hText(z)},chart:T,onTradeCallout(z){return jt.push(z),()=>{let ot=jt.indexOf(z);ot>=0&&jt.splice(ot,1)}},tradeCallout(z){z&&z.notional>=25e4?(b.moonPulse=1,B=Math.min(1,B+.35)):z&&z.notional>=1e5&&(b.moonPulse=Math.max(b.moonPulse,.6));for(let ot=0;ot<jt.length;ot++)try{jt[ot](z)}catch{}},dispose(){It=!1,cancelAnimationFrame(Tt),window.removeEventListener("resize",ct),window.removeEventListener("pointermove",P),n.dispose(),n.domElement.parentElement&&n.domElement.parentElement.removeChild(n.domElement)}};function bt(){let z=i.clientWidth||1280,ot=i.clientHeight||720;yt=z,a.aspect=z/ot,a.updateProjectionMatrix(),n.setSize(z,ot)}let yt=i.clientWidth||innerWidth;function ct(){bt()}bt(),window.addEventListener("resize",ct);let kt=[1,.9,.82,.75],it={on:t.governor!==!1,base:s,step:0,ratio:s,changes:0,fails:0,window:16,slowMs:26,fastMs:14,buf:[],cooldown:0,hold:0,med:0,pending:0,preMed:0,lock:0,warmup:150},ye=e?1:.75,ce=(()=>{for(let z=1;z<kt.length;z++)if(s*kt[z]<ye)return z-1;return kt.length-1})();function ze(z){it.step=Math.max(0,Math.min(ce,z)),it.ratio=it.base*kt[it.step],n.setPixelRatio(it.ratio),bt(),it.buf.length=0}function cn(z){if(!it.on)return;if(it.warmup>0){it.warmup--;return}if(it.buf.push(z),it.buf.length<it.window)return;let ot=it.buf.slice().sort((wt,Jt)=>wt-Jt);if(it.med=ot[ot.length>>1],it.buf.length=0,it.pending>0){--it.pending===0&&(it.med>it.preMed*.92?(it.step>0&&ze(it.step-1),++it.fails>=2&&(it.lock=1)):it.fails=0);return}if(it.lock){it.med<it.fastMs?++it.lock>8&&(it.lock=0,it.fails=0,it.cooldown=2):it.lock>8&&(it.lock=1);return}if(it.cooldown>0){it.cooldown--;return}it.med>it.slowMs?it.slow=(it.slow||0)+1:it.slow=0,it.med>it.slowMs&&it.slow>=2&&it.step<ce?(it.preMed=it.med,it.pending=3,it.hold=0,it.slow=0,ze(it.step+1),it.changes++):it.med<it.fastMs&&it.step>0?++it.hold>=3&&(ze(it.step-1),it.cooldown=5,it.changes++,it.hold=0):it.hold=0}let gi=0,fn=0,ni=performance.now();function _i(){if(!It)return;Tt=requestAnimationFrame(_i);let z=performance.now(),ot=Math.min((z-ni)/1e3,.05);ni=z;let wt=ot;if(E>0&&(E-=ot,wt=ot*.35),fn+=wt,gi++,zt.on&&!N.armed){zt.t+=wt;let ve=Math.sin(zt.t*.4)*.8+Math.sin(zt.t*.13)*.35+Math.sin(zt.t*1.7)*.12;if(w.setPressure(ve),gi%30===0){let re=(Math.sin(zt.t*.05)+Math.sin(zt.t*.021+2))*30;St+=re+(Math.random()-.5)*8,g.tickDir(re>0?1:-1),g.setPrice(St),w.setPrice(St),g.setChange24h(2.4+Math.sin(zt.t*.05)*3)}}N.armed&&(w.pressure=0,x.setState("IDLE"),m.setState("IDLE"),x.x=N.ax,m.x=N.bx),_t.flagDart=!1,_t.circlePhase=w.circlePhase,_t.pressureWobble+=(Zt-_t.pressureWobble)*Math.min(1,wt*5),f.clearLoads(),f.setLoad(x.x+x.pose.xOff,1),f.setLoad(m.x+m.pose.xOff,1),f.step(wt),w.update(wt),x.update(wt,_t),m.update(wt,_t);{let ve=x.x+x.pose.xOff,re=m.x+m.pose.xOff,nn=(S,F)=>{x.x+=S*F,m.x-=S*F,x.root.position.x+=S*F,m.root.position.x-=S*F},Ae=Math.abs(ve-re);Ae<Me.minBodyGap&&nn(ve>=re?1:-1,(Me.minBodyGap-Ae)/2);let zn=Me.minHeadCentre*Me.minHeadCentre;J&&J.checks++;for(let S=0;S<3;S++){let F=x.x+x.pose.xOff>=m.x+m.pose.xOff?1:-1;x.headCentreWorld(D),m.headCentreWorld(O);let Z=D.x-O.x,V=D.y-O.y,W=D.z-O.z,vt=Math.sqrt(Z*Z+V*V+W*W);if(J&&vt<J.worst&&(J.worst=vt),vt>=Me.minHeadCentre)break;let Lt=Math.sqrt(Math.max(0,zn-(V*V+W*W)))-Math.abs(Z);if(Lt<=0)break;nn(F,Math.min(Lt/2,.5)),J&&J.fixes++,x.root.updateMatrixWorld(!0),m.root.updateMatrixWorld(!0)}if(J){x.headCentreWorld(D),m.headCentreWorld(O);let S=D.distanceTo(O);S<J.worstOut&&(J.worstOut=S),J.post={hc:+S.toFixed(4),n:gi,gap:+Math.abs(x.x+x.pose.xOff-(m.x+m.pose.xOff)).toFixed(3)}}}if(f.updateVisual(),!N.armed&&!ht){let ve=pt;for(let re of[x,m]){if(!Et.has(re.state.name))continue;let nn=re===x?m:x,Ae=re.data.arms[re.data.swordArm],zn=re.data.sword,S=nn.data.sword,F=re===x?D:O,Z=re===x?O:D,V=re===x?$:X,W=re===x?nt:xt,vt=re===x?X:$,Lt=re===x?xt:nt;re.headCentreWorld(F),nn.headCentreWorld(Z),re.data.hips.getWorldPosition(V),re.data.spine.getWorldPosition(W),nn.data.hips.getWorldPosition(vt),nn.data.spine.getWorldPosition(Lt);let At=()=>{let Rt=1e9;for(let ne=0;ne<ve.length;ne++){$t.set(ve[ne],0,0),zn.localToWorld($t);for(let me=0;me<ve.length;me++){Wt.set(ve[me],0,0),S.localToWorld(Wt);let ge=$t.x-Wt.x,fe=$t.y-Wt.y,Re=$t.z-Wt.z,Ut=ge*ge+fe*fe+Re*Re;Ut<Rt&&(Rt=Ut)}}return Math.sqrt(Rt)},Ht=()=>{let Rt=0;for(let ne=0;ne<ve.length;ne++){gt.set(ve[ne],0,0),zn.localToWorld(gt);let me=Math.max(.26-Kt(gt,vt,Lt),.28-gt.distanceTo(Z)),ge=Math.max(.26-Kt(gt,V,W),.28-gt.distanceTo(F));me>Rt&&(Rt=me),ge>Rt&&(Rt=ge)}return Rt},Bt=At();if(Bt>Mt||Bt<=L)continue;let qt=Ht(),Gt=.2;for(let Rt=0;Rt<Vt&&Gt>.03&&Bt>L;Rt++){let ne=Ae.shoulder.rotation.z,me=Ae.shoulder.rotation.x,ge=Ae.elbow.rotation.z,fe=Bt,Re=null;for(let Ut of ft)for(let sn of[1,-1]){Ae.shoulder.rotation.z=ne+(Ut==="sz"?sn*Gt:0),Ae.shoulder.rotation.x=me+(Ut==="sx"?sn*Gt:0),Ae.elbow.rotation.z=ge+(Ut==="ez"?sn*Gt:0),re.root.updateMatrixWorld(!0);let _e=At();_e<fe-.002&&Ht()<=qt+.008&&(fe=_e,Re=[Ae.shoulder.rotation.z,Ae.shoulder.rotation.x,Ae.elbow.rotation.z])}Re?(Ae.shoulder.rotation.z=Re[0],Ae.shoulder.rotation.x=Re[1],Ae.elbow.rotation.z=Re[2],re.root.updateMatrixWorld(!0),Bt=fe,qt=Ht()):(Ae.shoulder.rotation.z=ne,Ae.shoulder.rotation.x=me,Ae.elbow.rotation.z=ge,re.root.updateMatrixWorld(!0),Gt*=.5)}}}if(!N.armed&&!tt){let nn=[.6,.8,1,1.2];x.data.hips.getWorldPosition($),x.data.spine.getWorldPosition(nt),m.data.hips.getWorldPosition(X),m.data.spine.getWorldPosition(xt);let Ae={A:$,B:X},zn={A:nt,B:xt};for(let S of[x,m]){let F=S.data.side,Z=F==="A"?"B":"A",V=Z==="A"?D:O,W=F==="A"?D:O,vt=S.data.arms[S.data.swordArm],Lt=()=>{let qt=0,Gt=0;for(let Rt=0;Rt<nn.length;Rt++){gt.set(nn[Rt],0,0),S.data.sword.localToWorld(gt);let ne=Math.max(.26-Kt(gt,Ae[Z],zn[Z]),.28-gt.distanceTo(V),0),me=Math.max(.26-Kt(gt,Ae[F],zn[F]),.28-gt.distanceTo(W),0);ne>qt&&(qt=ne,Gt=1),me>qt&&(qt=me,Gt=2)}return{pen:qt,kind:Gt}},At=0,Ht=Lt().pen,Bt={pen:Ht,kind:0};for(let qt=0;qt<3&&(Bt=Lt(),!(Bt.pen<=.012||At>.8));qt++){let Gt=Math.min(.13,Bt.pen*1.3),Rt=vt.shoulder.rotation.z,ne=vt.shoulder.rotation.x,me=vt.elbow.rotation.z,ge=Bt.kind===1?[[-Gt,Gt*.5,-Gt*.4],[-Gt,-Gt*.5,-Gt*.4],[-Gt,0,-Gt*.7]]:[[-Gt*.4,Gt*.7,-Gt*.6],[-Gt*.4,-Gt*.7,-Gt*.6]],fe=!1;for(let[Re,Ut,sn]of ge)if(vt.shoulder.rotation.z=Rt+Re,vt.shoulder.rotation.x=ne+Ut,vt.elbow.rotation.z=me+sn,S.root.updateMatrixWorld(!0),Lt().pen<Bt.pen-.002){fe=!0,At+=Math.abs(Re)+Math.abs(Ut);break}if(!fe){vt.shoulder.rotation.z=Rt,vt.shoulder.rotation.x=ne,vt.elbow.rotation.z=me,S.root.updateMatrixWorld(!0);break}}if(Ot){let qt=Lt();Ot.checks++,At>0&&Ot.fixes++,Ht>Ot.worstIn&&(Ot.worstIn=Ht),qt.pen>Ot.worstOut&&(Ot.worstOut=qt.pen),Ot.last[F]={before:+Ht.toFixed(4),after:+qt.pen.toFixed(4),folded:+At.toFixed(3)}}}}if(!N.armed)for(let ve of[x,m]){let re=ve.state.name;if(re==="LUNGE"||re==="RUSH"||re==="SLASH_UP"||re==="SLASH_SPIN"||re==="RIPOSTE"||re==="THRUST"){let nn=ve.state,Ae=nn.dur||1;nn.t>Ae*.15&&nn.t<Ae*.85&&(ve.data.side==="A"?Xt:Nt).emit(ve.bladeTipWorld(Y))}}g.update(wt,f);let Jt=x.state.name==="BLADE_LOCK"||x.state.name==="CLASH"||m.state.name==="BLADE_LOCK"||m.state.name==="CLASH",le=w.brawlIntensity();if(B+=(le-B)*Math.min(1,wt/.8),Jt&&gi%3===0){let ve=A(x,m,K);M.clashBurst(ve),M.emberBurst(ve)}h.position.set(x.x+1.5,2.6,-1.3),d.position.set(m.x-1.5,2.6,-1.3);let be=p.userData.pennants;if(be)for(let ve of["L","R"]){let re=be[ve];re.rotation.y=Math.sin(fn*1.7+(ve==="L"?0:1.5))*.25,re.rotation.x=Math.sin(fn*2.3+(ve==="L"?0:1))*.06,re.position.y=Me.ropeY+1.05+Math.sin(fn*2.1+(ve==="L"?0:.6))*.03}Pd(p,fn),M.update(wt),Yt.update(wt),v.update(wt,w.pressure,B),b.moonPulse=Math.max(0,b.moonPulse-wt*.55);let on=ve=>Math.abs(ve)<.07?0:(ve-Math.sign(ve)*.07)/.93;b.mouse.x+=(on(b.mouseT.x)-b.mouse.x)*Math.min(1,wt*1.8),b.mouse.y+=(on(b.mouseT.y)-b.mouse.y)*Math.min(1,wt*1.8),b.stars&&b.stars.update(fn),b.clouds&&b.clouds.update(fn,wt),b.shoot&&b.shoot.update(fn,wt,b.moonPulse),b.fireflies&&b.fireflies.update(fn),b.embers&&b.embers.update(fn);let Sn=Math.max(y.t,0);Sn>0?y.t-=ot:y.amp=0;let Ue=Sn/.16*y.amp,Pe=(x.x+m.x)*.5;R+=(Pe*C-R)*Math.min(1,wt*3.2),I+=(le-I)*Math.min(1,wt*1.4);let Se=Math.sin(fn*.09)*.18;ut.on?(a.position.set(ut.px,ut.py,ut.pz),a.lookAt(ut.tx,ut.ty,ut.tz)):(a.position.set(R+Se+(Math.random()-.5)*Ue+b.mouse.x*.5,2.55+Math.sin(fn*.06)*.1+(Math.random()-.5)*Ue-b.mouse.y*.3+I*.16,6.8-I*.55),a.lookAt(R*.9,3.15-I*.1,0));let Cn=p.userData.moon;if(Cn){Cn.material.color.setScalar(1+b.moonPulse*.34+Math.sin(fn*.8)*.04);let re=yt,nn=re<700?st.narrow:re<1024?st.mid:st.wide;k.set(nn.cx*2-1,-(nn.cy*2-1),.5).unproject(a),k.sub(a.position).normalize();let Ae=(de-a.position.z)/k.z,zn=a.position.x+k.x*Ae-a.position.x*(1-nn.par),S=a.position.y+k.y*Ae;Cn.position.set(zn,S,de),Cn.scale.setScalar(nn.s*(1+b.moonPulse*.06))}n.render(r,a),cn(ot*1e3)}return _i(),t.debug&&(window.__duelDebug={rope:f,flag:g,director:w,catA:x,catB:m,arena:p,vfx:M,camera:a,renderer:n,crowd:v,hooksTrade:jt,gov:it,contact:J,clipTelemetry:Ot,skyChart:T,quality:()=>({ratio:it.ratio,base:it.base,step:it.step,med:it.med,changes:it.changes,on:it.on,fails:it.fails,lock:it.lock}),heat:()=>B,lane:()=>w.laneState(),camPan:()=>R,lockCamera:(z,ot=0,wt=3.6,Jt=12.6,le=0,be=3,on=-2)=>{ut.on=!!z,ut.px=ot,ut.py=wt,ut.pz=Jt,ut.tx=le,ut.ty=be,ut.tz=on},freeze:(z,ot=1.1,wt=-1.1)=>{N.armed=!!z,N.ax=ot,N.bx=wt,zt.on=!1}}),et}function Wd(i,t,e={}){let n=typeof e.onCallout=="function"?e.onCallout:null,s=typeof e.onStatus=="function"?e.onStatus:null,r=typeof e.onState=="function"?e.onState:null,o=5e4,a=i.onTrade(h=>{h.notional>=o&&t.tradeCallout&&t.tradeCallout({side:h.side,qty:h.qty,notional:h.notional,price:h.price,ts:h.ts})}),c=i.onChange(h=>{if(typeof h.pressure=="number"&&isFinite(h.pressure)&&t.setPressure(h.pressure),h.price&&t.setPrice(h.price),typeof h.change24hPct=="number"&&isFinite(h.change24hPct)){let d=h.change24hPct>=0?"+":"";t.setChange24hText(`${d}${h.change24hPct.toFixed(2)}% 24h`)}r&&r(h)}),l=i.onStatus(h=>{s&&s(h)});return function(){c(),l(),a()}}var Li=new URLSearchParams(location.search),Oe=i=>document.getElementById(i);function Xx(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}Xx()||(Oe("nogl").style.display="flex",Oe("status-mode").textContent="NO WEBGL",Oe("status-dot").className="");var Yx=matchMedia("(pointer: coarse)").matches||innerWidth<640,Cl=Vd(Oe("duel-scene"),{demo:!0,debug:!0,vfxScale:Yx?.4:Li.get("nofx")?.2:1,res:Li.get("res")?Number(Li.get("res")):void 0,governor:Li.get("gov")!=="off"&&!Li.get("res"),skyVariant:Li.get("sky")||"slab"}),pa=Oe("price"),Xd=Oe("chg24h"),qx=Oe("tps"),Zx=Oe("meter-buy"),Jx=Oe("meter-sell"),$x=Oe("meter-buy-pct"),Kx=Oe("meter-sell-pct"),jx=Oe("meter-duel"),Qx=Oe("meter-duel-text"),ty=Oe("status-dot"),ey=Oe("status-mode"),xh=Oe("callouts"),yh={buy:{el:Oe("tag-buy"),state:Oe("state-buy"),mom:Oe("mom-buy"),last:""},sell:{el:Oe("tag-sell"),state:Oe("state-sell"),mom:Oe("mom-sell"),last:""}},Pl=Cl.chart;function Kd(i){return i==null||!isFinite(i)?"\u2014":i>=1e6?(i/1e6).toFixed(1)+"M":i>=1e3?(i/1e3).toFixed(1)+"K":i.toFixed(1)}var Rl=null,Yd=0;function ny(i){i!=null&&Rl!=null&&i!==Rl&&(pa.classList.remove("tick-up","tick-down"),pa.offsetWidth,pa.classList.add(i>Rl?"tick-up":"tick-down"),clearTimeout(Yd),Yd=setTimeout(()=>pa.classList.remove("tick-up","tick-down"),600)),i!=null&&(Rl=i)}var iy=5e4,sy=25e4,ry=14;function jd(i){if(!i||i.notional<iy)return;xh.childElementCount>=ry&&xh.firstElementChild.remove();let t=i.notional>=sy,e=i.side==="buy";Pl.trade(i);let n=document.createElement("div");n.className=`callout ${i.side}${t?" whale":""}`;let s=document.createElement("span");s.className="head";let r=document.createElement("span");r.className="arr",r.textContent=e?"\u25B2":"\u25BC";let o=document.createElement("span");o.textContent=`${e?"+BUY":"-SELL"} $${Kd(i.notional)}`,s.appendChild(r),s.appendChild(o);let a=document.createElement("span");a.className="qty",a.textContent=`${i.qty>=1?i.qty.toFixed(2):i.qty.toFixed(4)} BTC @ ${i.price.toLocaleString("en-US",{maximumFractionDigits:0})}`,n.appendChild(s),n.appendChild(a);let c=e?62:22;n.style.left=c+Math.random()*14+"vw",n.style.top=26+Math.random()*36+"vh",xh.appendChild(n);let l=n.getBoundingClientRect();l.right>innerWidth-12&&(n.style.left=Math.max(12,innerWidth-l.width-12)+"px"),l.left<12&&(n.style.left="12px"),l.bottom>innerHeight-12&&(n.style.top=Math.max(12,innerHeight-l.height-12)+"px"),setTimeout(()=>n.remove(),t?3e3:2600)}Cl.onTradeCallout(jd);var ay=Li.get("mode")||"auto",Qd={mode:ay,emitIntervalMs:250};Li.get("seed")&&(Qd.demoSeed=Number(Li.get("seed"))||0);var Es=new window.BtcTradeFeed(Qd);function oy(i){let t=i.mode==="demo"||i.status==="demo";ty.className=t?"demo":i.status==="open"?"live":i.status||"";let e=!t&&i.status==="open"&&i.providerLabel?" \xB7 "+i.providerLabel.toUpperCase():"",s=t?"SIMULATION":{open:"LIVE",connecting:"CONNECTING",backoff:"RECONNECTING",stopped:"OFFLINE"}[i.status]||(i.status||"").toUpperCase();ey.textContent=s+e,Pl.notifyStatus(i)}var ly=Wd(Es,Cl,{onCallout:jd,onStatus:oy,onState:tf}),cy={IDLE:"EN GARDE",RECOVER:"RECOVERING",LUNGE:"LUNGE!",RUSH:"RUSH!",SLASH_UP:"SLASH UP!",SLASH_SPIN:"SLASH SPIN!",HIT:"HIT!",STUMBLE:"STAGGERS!",BLADE_LOCK:"BLADE LOCK",CLASH:"CLASH!",FREEZE:"EN GARDE",TAUNT:"TAUNTS!",RIPOSTE:"RIPOSTE!",PARRY_HOP:"PARRY!",THRUST:"THRUST!",FEINT:"FEINT!",PARRY_BEAT:"BEAT!",SIT_GUARD:"HOLDS GUARD"};function hy(i){return i==="LUNGE"||i==="RUSH"||i==="RIPOSTE"||i==="THRUST"?"lunge":i==="BLADE_LOCK"?"lock":i==="CLASH"?"clash":i==="HIT"||i==="STUMBLE"?"hit":""}var uy=180,qd=new Set(["CLASH","HIT","BLADE_LOCK"]),dy={RECOVER:.18,IDLE:.3};function Zd(i,t){let e=yh[i];if(!e)return;let n=t.name;if(n===e.last)return;let s=qd.has(n);if(!s&&t.t<(dy[n]||0))return;let r=performance.now();if(!s&&!qd.has(e.last)&&r-(e.at||0)<uy)return;e.at=r,e.last=n;let o=hy(n);e.el.dataset.act=o,e.state.textContent=cy[n]||n}function tf(i){if(Pl.update(Es.candles(),i),ny(i.price),pa.textContent=i.price?i.price.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):"connecting\u2026",typeof i.change24hPct=="number"&&isFinite(i.change24hPct)){let s=i.change24hPct>=0?"+":"";Xd.textContent=`${s}${i.change24hPct.toFixed(2)}%  ($${s}${Kd(Math.abs(i.change24hAbs||0))})`,Xd.className=i.change24hPct>=0?"up":"down"}qx.textContent=isFinite(i.tps)?Math.round(i.tps):"0";let t=i.pressure||0,e=t>0?t*50:0,n=t<0?-t*50:0;Zx.style.width=e+"%",Jx.style.width=n+"%",$x.textContent=e>.5?Math.round(t*100)+"%":"\u2014",Kx.textContent=n>.5?Math.round(-t*100)+"%":"\u2014",yh.buy.mom.style.width=Math.max(4,e*2)+"%",yh.sell.mom.style.width=Math.max(4,n*2)+"%"}var fy=Oe("lane-mark"),Jd=Oe("lane-pct"),py=Oe("lane-cat-b"),my=Oe("lane-cat-s"),gy=5.2;function _y(i){if(!i||!i.lane)return;let t=i.lane(),e=s=>Math.max(2,Math.min(98,50+s/gy*46));fy.style.left=e(t.lane*3.2)+"%",py.style.left=e(i.catA.x)+"%",my.style.left=e(i.catB.x)+"%";let n=t.pct>=0?"+":"";Jd.textContent=`${n}${t.pct.toFixed(2)}%`,Jd.className=t.pct>=0?"up":"down"}var $d="";setInterval(()=>{try{let i=window.__duelDebug;if(!i||!i.catA||!i.catB)return;_y(i);let t=i.catA.state.name,e=i.catB.state.name;Zd("buy",i.catA.state),Zd("sell",i.catB.state);let n=t+"|"+e;if(n===$d)return;$d=n;let s=t!=="IDLE"||e!=="IDLE";jx.classList.toggle("act",s),Qx.textContent=t==="BLADE_LOCK"||e==="BLADE_LOCK"?"BLADE LOCK":t==="CLASH"||e==="CLASH"?"CLASH!":t==="IDLE"&&e==="IDLE"?"EN GARDE":"CROSSED SWORDS"}catch{}},125);Es.start();document.addEventListener("visibilitychange",()=>{document.hidden?Es.stop():Es.state().status==="stopped"&&Es.start()});window.__duelPage={feed:Es,scene:Cl,unwire:ly,handleState:tf,chart:Pl};})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
