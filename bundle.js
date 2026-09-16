(()=>{var Qh=0,pc=1,tu=2;var $r=1,eu=2,tr=3,qi=0,dn=1,Te=2,ci=0,wi=1,An=2,mc=3,gc=4,nu=5;var fs=100,iu=101,su=102,ru=103,au=104,ou=200,lu=201,cu=202,hu=203,_c=204,xc=205,uu=206,du=207,fu=208,pu=209,mu=210,gu=211,_u=212,xu=213,yu=214,za=0,ka=1,Ga=2,Vs=3,Va=4,Wa=5,Xa=6,Ya=7,yc=0,vu=1,Su=2,Zn=0,vc=1,Sc=2,Mc=3,Kr=4,bc=5,Ec=6,Tc=7;var wc=300,Zi=301,ps=302,Mo=303,bo=304,jr=306,ii=1e3,ni=1001,qa=1002,cn=1003,Mu=1004;var Qr=1005;var Ke=1006,Eo=1007;var Rn=1008;var Cn=1009,Ac=1010,Rc=1011,er=1012,To=1013,Jn=1014,$n=1015,Kn=1016,wo=1017,Ao=1018,nr=1020,Cc=35902,Pc=35899,Ic=1021,Lc=1022,zn=1023,si=1026,Ji=1027,Dc=1028,Ro=1029,$i=1030,Co=1031;var Po=1033,ta=33776,ea=33777,na=33778,ia=33779,Io=35840,Lo=35841,Do=35842,Uo=35843,No=36196,Fo=37492,Bo=37496,Oo=37488,Ho=37489,sa=37490,zo=37491,ko=37808,Go=37809,Vo=37810,Wo=37811,Xo=37812,Yo=37813,qo=37814,Zo=37815,Jo=37816,$o=37817,Ko=37818,jo=37819,Qo=37820,tl=37821,el=36492,nl=36494,il=36495,sl=36283,rl=36284,ra=36285,al=36286;var Sr=2300,Za=2301,Oa=2302,ec=2303,nc=2400,ic=2401,sc=2402;var bu=3200;var ol=0,Eu=1,Ai="",Ge="srgb",Mr="srgb-linear",br="linear",Se="srgb";var Ha=7680;var Tu=519,wu=512,Au=513,Ru=514,ll=515,Cu=516,Pu=517,cl=518,Iu=519,Lu=35044,ms=35048;var Uc="300 es",qn=2e3,Ws=2001;function sf(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function rf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Er(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Du(){let i=Er("canvas");return i.style.display="block",i}var bh={},Xs=null;function Nc(...i){let t="THREE."+i.shift();Xs?Xs("log",t,...i):console.log(t,...i)}function Uu(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function jt(...i){i=Uu(i);let t="THREE."+i.shift();if(Xs)Xs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Qt(...i){i=Uu(i);let t="THREE."+i.shift();if(Xs)Xs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ls(...i){let t=i.join(" ");t in bh||(bh[t]=!0,jt(...i))}function Nu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Fu={[za]:ka,[Ga]:Xa,[Va]:Ya,[Vs]:Wa,[ka]:za,[Xa]:Ga,[Ya]:Va,[Wa]:Vs},ri=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Eh=1234567,_r=Math.PI/180,cs=180/Math.PI;function gs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mn[i&255]+mn[i>>8&255]+mn[i>>16&255]+mn[i>>24&255]+"-"+mn[t&255]+mn[t>>8&255]+"-"+mn[t>>16&15|64]+mn[t>>24&255]+"-"+mn[e&63|128]+mn[e>>8&255]+"-"+mn[e>>16&255]+mn[e>>24&255]+mn[n&255]+mn[n>>8&255]+mn[n>>16&255]+mn[n>>24&255]).toLowerCase()}function he(i,t,e){return Math.max(t,Math.min(e,i))}function Fc(i,t){return(i%t+t)%t}function af(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function of(i,t,e){return i!==t?(e-i)/(t-i):0}function xr(i,t,e){return(1-e)*i+e*t}function lf(i,t,e,n){return xr(i,t,1-Math.exp(-e*n))}function cf(i,t=1){return t-Math.abs(Fc(i,t*2)-t)}function hf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function uf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function df(i,t){return i+Math.floor(Math.random()*(t-i+1))}function ff(i,t){return i+Math.random()*(t-i)}function pf(i){return i*(.5-Math.random())}function mf(i){i!==void 0&&(Eh=i);let t=Eh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gf(i){return i*_r}function _f(i){return i*cs}function xf(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function yf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function vf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Sf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*f,a*l);break;case"YXY":i.set(c*f,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*f,a*h,a*l);break;default:jt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ks(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var He={DEG2RAD:_r,RAD2DEG:cs,generateUUID:gs,clamp:he,euclideanModulo:Fc,mapLinear:af,inverseLerp:of,lerp:xr,damp:lf,pingpong:cf,smoothstep:hf,smootherstep:uf,randInt:df,randFloat:ff,randFloatSpread:pf,seededRandom:mf,degToRad:gf,radToDeg:_f,isPowerOfTwo:xf,ceilPowerOfTwo:yf,floorPowerOfTwo:vf,setQuaternionFromProperEuler:Sf,normalize:bn,denormalize:ks},Gc=class Gc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gc.prototype.isVector2=!0;var Ct=Gc,ai=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],u=r[o+0],f=r[o+1],g=r[o+2],x=r[o+3];if(d!==x||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*x;m<0&&(u=-u,f=-f,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let M=Math.acos(m),R=Math.sin(M);p=Math.sin(p*M)/R,a=Math.sin(a*M)/R,c=c*p+u*a,l=l*p+f*a,h=h*p+g*a,d=d*p+x*a}else{c=c*p+u*a,l=l*p+f*a,h=h*p+g*a,d=d*p+x*a;let M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],u=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*f-l*u,t[e+1]=c*g+h*u+l*d-a*f,t[e+2]=l*g+h*f+a*u-c*d,t[e+3]=h*g-a*d-c*u-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),u=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-e;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,e=Math.sin(e*l)/h,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Vc=class Vc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Th.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Th.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Il.copy(this).projectOnVector(t),this.sub(Il)}reflect(t){return this.sub(Il.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vc.prototype.isVector3=!0;var N=Vc,Il=new N,Th=new ai,Wc=class Wc{constructor(t,e,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],x=s[0],m=s[3],p=s[6],M=s[1],R=s[4],v=s[7],b=s[2],T=s[5],C=s[8];return r[0]=o*x+a*M+c*b,r[3]=o*m+a*R+c*T,r[6]=o*p+a*v+c*C,r[1]=l*x+h*M+d*b,r[4]=l*m+h*R+d*T,r[7]=l*p+h*v+d*C,r[2]=u*x+f*M+g*b,r[5]=u*m+f*R+g*T,r[8]=u*p+f*v+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,u=a*c-h*r,f=l*r-o*c,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=d*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=u*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=f*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return ls("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ll.makeScale(t,e)),this}rotate(t){return ls("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ll.makeRotation(-t)),this}translate(t,e){return ls("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ll.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Wc.prototype.isMatrix3=!0;var se=Wc,Ll=new se,wh=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ah=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mf(){let i={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Se&&(s.r=Si(s.r),s.g=Si(s.g),s.b=Si(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Se&&(s.r=Gs(s.r),s.g=Gs(s.g),s.b=Gs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ai?br:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ls("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ls("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mr]:{primaries:t,whitePoint:n,transfer:br,toXYZ:wh,fromXYZ:Ah,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:t,whitePoint:n,transfer:Se,toXYZ:wh,fromXYZ:Ah,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}}),i}var fe=Mf();function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Rs,Ja=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Rs===void 0&&(Rs=Er("canvas")),Rs.width=t.width,Rs.height=t.height;let s=Rs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Rs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Er("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Si(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},bf=0,Ys=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=gs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Dl(s[o].image)):r.push(Dl(s[o]))}else r=Dl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Dl(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?Ja.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(jt("Texture: Unable to serialize Texture."),{})}var Ef=0,Ul=new N,En=class i extends ri{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ni,s=ni,r=Ke,o=Rn,a=zn,c=Cn,l=i.DEFAULT_ANISOTROPY,h=Ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ef++}),this.uuid=gs(),this.name="",this.source=new Ys(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ul).x}get height(){return this.source.getSize(Ul).y}get depth(){return this.source.getSize(Ul).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ii:t.x=t.x-Math.floor(t.x);break;case ni:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ii:t.y=t.y-Math.floor(t.y);break;case ni:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=wc;En.DEFAULT_ANISOTROPY=1;var Xc=class Xc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(l+1)/2,v=(f+1)/2,b=(p+1)/2,T=(h+u)/4,C=(d+x)/4,y=(g+m)/4;return R>v&&R>b?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=T/n,r=C/n):v>b?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=y/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=C/r,s=y/r),this.set(n,s,r,e),this}let M=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-x)/M,this.z=(u-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xc.prototype.isVector4=!0;var Be=Xc,$a=class extends ri{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Be(0,0,t,e),this.scissorTest=!1,this.viewport=new Be(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new En(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ys(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},wn=class extends $a{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Tr=class extends En{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ka=class extends En{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=cn,this.minFilter=cn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var So=class So{constructor(t,e,n,s,r,o,a,c,l,h,d,u,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,u,f,g,x,m)}set(t,e,n,s,r,o,a,c,l,h,d,u,f,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new So().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Cs.setFromMatrixColumn(t,0).length(),r=1/Cs.setFromMatrixColumn(t,1).length(),o=1/Cs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=u-x*l,e[9]=-a*c,e[2]=x-u*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let u=c*h,f=c*d,g=l*h,x=l*d;e[0]=u+x*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=x+u*a,e[10]=o*c}else if(t.order==="ZXY"){let u=c*h,f=c*d,g=l*h,x=l*d;e[0]=u-x*a,e[4]=-o*d,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=x-u*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let u=o*h,f=o*d,g=a*h,x=a*d;e[0]=c*h,e[4]=g*l-f,e[8]=u*l+x,e[1]=c*d,e[5]=x*l+u,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let u=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-u*d,e[8]=g*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*d+g,e[10]=u-x*d}else if(t.order==="XZY"){let u=o*c,f=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=u*d+x,e[5]=o*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=a*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tf,t,wf)}lookAt(t,e,n){let s=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Ui.crossVectors(n,Ln),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Ui.crossVectors(n,Ln)),Ui.normalize(),ma.crossVectors(Ln,Ui),s[0]=Ui.x,s[4]=ma.x,s[8]=Ln.x,s[1]=Ui.y,s[5]=ma.y,s[9]=Ln.y,s[2]=Ui.z,s[6]=ma.z,s[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],x=n[6],m=n[10],p=n[14],M=n[3],R=n[7],v=n[11],b=n[15],T=s[0],C=s[4],y=s[8],E=s[12],A=s[1],P=s[5],L=s[9],F=s[13],D=s[2],H=s[6],q=s[10],X=s[14],ot=s[3],$=s[7],nt=s[11],rt=s[15];return r[0]=o*T+a*A+c*D+l*ot,r[4]=o*C+a*P+c*H+l*$,r[8]=o*y+a*L+c*q+l*nt,r[12]=o*E+a*F+c*X+l*rt,r[1]=h*T+d*A+u*D+f*ot,r[5]=h*C+d*P+u*H+f*$,r[9]=h*y+d*L+u*q+f*nt,r[13]=h*E+d*F+u*X+f*rt,r[2]=g*T+x*A+m*D+p*ot,r[6]=g*C+x*P+m*H+p*$,r[10]=g*y+x*L+m*q+p*nt,r[14]=g*E+x*F+m*X+p*rt,r[3]=M*T+R*A+v*D+b*ot,r[7]=M*C+R*P+v*H+b*$,r[11]=M*y+R*L+v*q+b*nt,r[15]=M*E+R*F+v*X+b*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],x=t[7],m=t[11],p=t[15],M=c*f-l*u,R=a*f-l*d,v=a*u-c*d,b=o*f-l*h,T=o*u-c*h,C=o*d-a*h;return e*(x*M-m*R+p*v)-n*(g*M-m*b+p*T)+s*(g*R-x*b+p*C)-r*(g*v-x*T+m*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],c=t[2],l=t[6],h=t[10];return e*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],x=t[13],m=t[14],p=t[15],M=e*a-n*o,R=e*c-s*o,v=e*l-r*o,b=n*c-s*a,T=n*l-r*a,C=s*l-r*c,y=h*x-d*g,E=h*m-u*g,A=h*p-f*g,P=d*m-u*x,L=d*p-f*x,F=u*p-f*m,D=M*F-R*L+v*P+b*A-T*E+C*y;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let H=1/D;return t[0]=(a*F-c*L+l*P)*H,t[1]=(s*L-n*F-r*P)*H,t[2]=(x*C-m*T+p*b)*H,t[3]=(u*T-d*C-f*b)*H,t[4]=(c*A-o*F-l*E)*H,t[5]=(e*F-s*A+r*E)*H,t[6]=(m*v-g*C-p*R)*H,t[7]=(h*C-u*v+f*R)*H,t[8]=(o*L-a*A+l*y)*H,t[9]=(n*A-e*L-r*y)*H,t[10]=(g*T-x*v+p*M)*H,t[11]=(d*v-h*T-f*M)*H,t[12]=(a*E-o*P-c*y)*H,t[13]=(e*P-n*E+s*y)*H,t[14]=(x*R-g*b-m*M)*H,t[15]=(h*b-d*R+u*M)*H,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,u=r*l,f=r*h,g=r*d,x=o*h,m=o*d,p=a*d,M=c*l,R=c*h,v=c*d,b=n.x,T=n.y,C=n.z;return s[0]=(1-(x+p))*b,s[1]=(f+v)*b,s[2]=(g-R)*b,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(u+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+R)*C,s[9]=(m-M)*C,s[10]=(1-(u+x))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=Cs.set(s[0],s[1],s[2]).length(),a=Cs.set(s[4],s[5],s[6]).length(),c=Cs.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Vn.copy(this);let l=1/o,h=1/a,d=1/c;return Vn.elements[0]*=l,Vn.elements[1]*=l,Vn.elements[2]*=l,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=d,Vn.elements[9]*=d,Vn.elements[10]*=d,e.setFromRotationMatrix(Vn),n.x=o,n.y=a,n.z=c,this}makePerspective(t,e,n,s,r,o,a=qn,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,x;if(c)g=r/(o-r),x=o*r/(o-r);else if(a===qn)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===Ws)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=qn,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,x;if(c)g=1/(o-r),x=o/(o-r);else if(a===qn)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===Ws)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};So.prototype.isMatrix4=!0;var Ne=So,Cs=new N,Vn=new Ne,Tf=new N(0,0,0),wf=new N(1,1,1),Ui=new N,ma=new N,Ln=new N,Rh=new Ne,Ch=new ai,Mi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(he(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ch.setFromEuler(this),this.setFromQuaternion(Ch,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mi.DEFAULT_ORDER="XYZ";var wr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Af=0,Ph=new N,Ps=new ai,gi=new Ne,ga=new N,dr=new N,Rf=new N,Cf=new ai,Ih=new N(1,0,0),Lh=new N(0,1,0),Dh=new N(0,0,1),Uh={type:"added"},Pf={type:"removed"},Is={type:"childadded",child:null},Nl={type:"childremoved",child:null},hn=class i extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=gs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new N,e=new Mi,n=new ai,s=new N(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new se}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(t,e){return Ps.setFromAxisAngle(t,e),this.quaternion.premultiply(Ps),this}rotateX(t){return this.rotateOnAxis(Ih,t)}rotateY(t){return this.rotateOnAxis(Lh,t)}rotateZ(t){return this.rotateOnAxis(Dh,t)}translateOnAxis(t,e){return Ph.copy(t).applyQuaternion(this.quaternion),this.position.add(Ph.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ih,t)}translateY(t){return this.translateOnAxis(Lh,t)}translateZ(t){return this.translateOnAxis(Dh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ga.copy(t):ga.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),dr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(dr,ga,this.up):gi.lookAt(ga,dr,this.up),this.quaternion.setFromRotationMatrix(gi),s&&(gi.extractRotation(s.matrixWorld),Ps.setFromRotationMatrix(gi),this.quaternion.premultiply(Ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Qt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Uh),Is.child=t,this.dispatchEvent(Is),Is.child=null):Qt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pf),Nl.child=t,this.dispatchEvent(Nl),Nl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Uh),Is.child=t,this.dispatchEvent(Is),Is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,t,Rf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(dr,Cf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};hn.DEFAULT_UP=new N(0,1,0);hn.DEFAULT_MATRIX_AUTO_UPDATE=!0;hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ue=class extends hn{constructor(){super(),this.isGroup=!0,this.type="Group"}},If={type:"move"},qs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(If)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Fl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var te=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=fe.workingColorSpace){if(t=Fc(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Fl(o,r,t+1/3),this.g=Fl(o,r,t),this.b=Fl(o,r,t-1/3)}return fe.colorSpaceToWorking(this,s),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&jt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:jt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){let n=Bu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=Gs(t.r),this.g=Gs(t.g),this.b=Gs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return fe.workingToColorSpace(gn.copy(this),t),Math.round(he(gn.r*255,0,255))*65536+Math.round(he(gn.g*255,0,255))*256+Math.round(he(gn.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(gn.copy(this),e);let n=gn.r,s=gn.g,r=gn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(gn.copy(this),e),t.r=gn.r,t.g=gn.g,t.b=gn.b,t}getStyle(t=Ge){fe.workingToColorSpace(gn.copy(this),t);let e=gn.r,n=gn.g,s=gn.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(_a);let n=xr(Ni.h,_a.h,e),s=xr(Ni.s,_a.s,e),r=xr(Ni.l,_a.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new te;te.NAMES=Bu;var Ar=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new te(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Rr=class extends hn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Wn=new N,_i=new N,Bl=new N,xi=new N,Ls=new N,Ds=new N,Nh=new N,Ol=new N,Hl=new N,zl=new N,kl=new Be,Gl=new Be,Vl=new Be,Hi=class i{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Wn.subVectors(t,e),s.cross(Wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Wn.subVectors(s,e),_i.subVectors(n,e),Bl.subVectors(t,e);let o=Wn.dot(Wn),a=Wn.dot(_i),c=Wn.dot(Bl),l=_i.dot(_i),h=_i.dot(Bl),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-a*h)*u,g=(o*h-a*c)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,xi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,xi.x),c.addScaledVector(o,xi.y),c.addScaledVector(a,xi.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return kl.setScalar(0),Gl.setScalar(0),Vl.setScalar(0),kl.fromBufferAttribute(t,e),Gl.fromBufferAttribute(t,n),Vl.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(kl,r.x),o.addScaledVector(Gl,r.y),o.addScaledVector(Vl,r.z),o}static isFrontFacing(t,e,n,s){return Wn.subVectors(n,e),_i.subVectors(t,e),Wn.cross(_i).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Wn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Wn.cross(_i).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Ls.subVectors(s,n),Ds.subVectors(r,n),Ol.subVectors(t,n);let c=Ls.dot(Ol),l=Ds.dot(Ol);if(c<=0&&l<=0)return e.copy(n);Hl.subVectors(t,s);let h=Ls.dot(Hl),d=Ds.dot(Hl);if(h>=0&&d<=h)return e.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ls,o);zl.subVectors(t,r);let f=Ls.dot(zl),g=Ds.dot(zl);if(g>=0&&f<=g)return e.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Ds,a);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Nh.subVectors(r,s),a=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Nh,a);let p=1/(m+x+u);return o=x*p,a=u*p,e.copy(n).addScaledVector(Ls,o).addScaledVector(Ds,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},zi=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xn):Xn.fromBufferAttribute(r,o),Xn.applyMatrix4(t.matrixWorld),this.expandByPoint(Xn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xa.copy(n.boundingBox)),xa.applyMatrix4(t.matrixWorld),this.union(xa)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xn),Xn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(fr),ya.subVectors(this.max,fr),Us.subVectors(t.a,fr),Ns.subVectors(t.b,fr),Fs.subVectors(t.c,fr),Fi.subVectors(Ns,Us),Bi.subVectors(Fs,Ns),is.subVectors(Us,Fs);let e=[0,-Fi.z,Fi.y,0,-Bi.z,Bi.y,0,-is.z,is.y,Fi.z,0,-Fi.x,Bi.z,0,-Bi.x,is.z,0,-is.x,-Fi.y,Fi.x,0,-Bi.y,Bi.x,0,-is.y,is.x,0];return!Wl(e,Us,Ns,Fs,ya)||(e=[1,0,0,0,1,0,0,0,1],!Wl(e,Us,Ns,Fs,ya))?!1:(va.crossVectors(Fi,Bi),e=[va.x,va.y,va.z],Wl(e,Us,Ns,Fs,ya))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},yi=[new N,new N,new N,new N,new N,new N,new N,new N],Xn=new N,xa=new zi,Us=new N,Ns=new N,Fs=new N,Fi=new N,Bi=new N,is=new N,fr=new N,ya=new N,va=new N,ss=new N;function Wl(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ss.fromArray(i,r);let a=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),c=t.dot(ss),l=e.dot(ss),h=n.dot(ss);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var nn=new N,Sa=new Ct,Lf=0,Pe=class extends ri{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Lf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lu,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Sa.fromBufferAttribute(this,e),Sa.applyMatrix3(t),this.setXY(e,Sa.x,Sa.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ks(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=bn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ks(e,this.array)),e}setX(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ks(e,this.array)),e}setY(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ks(e,this.array)),e}setZ(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ks(e,this.array)),e}setW(t,e){return this.normalized&&(e=bn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),n=bn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),n=bn(n,this.array),s=bn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=bn(e,this.array),n=bn(n,this.array),s=bn(s,this.array),r=bn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Cr=class extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Pr=class extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ce=class extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Df=new zi,pr=new N,Xl=new N,bi=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Df.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;pr.subVectors(t,this.center);let e=pr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(pr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(pr.copy(t.center).add(Xl)),this.expandByPoint(pr.copy(t.center).sub(Xl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Uf=0,Hn=new Ne,Yl=new hn,Bs=new N,Dn=new zi,mr=new zi,on=new N,ye=class i extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Uf++}),this.uuid=gs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sf(t)?Pr:Cr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new se().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,n){return Hn.makeTranslation(t,e,n),this.applyMatrix4(Hn),this}scale(t,e,n){return Hn.makeScale(t,e,n),this.applyMatrix4(Hn),this}lookAt(t){return Yl.lookAt(t),Yl.updateMatrix(),this.applyMatrix4(Yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bs).negate(),this.translate(Bs.x,Bs.y,Bs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ce(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Dn.setFromBufferAttribute(r),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Qt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Qt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];mr.setFromBufferAttribute(a),this.morphTargetsRelative?(on.addVectors(Dn.min,mr.min),Dn.expandByPoint(on),on.addVectors(Dn.max,mr.max),Dn.expandByPoint(on)):(Dn.expandByPoint(mr.min),Dn.expandByPoint(mr.max))}Dn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)on.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(on));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)on.fromBufferAttribute(a,l),c&&(Bs.fromBufferAttribute(t,l),on.add(Bs)),s=Math.max(s,n.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Qt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Qt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Pe(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[];for(let y=0;y<n.count;y++)a[y]=new N,c[y]=new N;let l=new N,h=new N,d=new N,u=new Ct,f=new Ct,g=new Ct,x=new N,m=new N;function p(y,E,A){l.fromBufferAttribute(n,y),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,A),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,E),g.fromBufferAttribute(r,A),h.sub(l),d.sub(l),f.sub(u),g.sub(u);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),a[y].add(x),a[E].add(x),a[A].add(x),c[y].add(m),c[E].add(m),c[A].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let y=0,E=M.length;y<E;++y){let A=M[y],P=A.start,L=A.count;for(let F=P,D=P+L;F<D;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let R=new N,v=new N,b=new N,T=new N;function C(y){b.fromBufferAttribute(s,y),T.copy(b);let E=a[y];R.copy(E),R.sub(b.multiplyScalar(b.dot(E))).normalize(),v.crossVectors(T,E);let P=v.dot(c[y])<0?-1:1;o.setXYZW(y,R.x,R.y,R.z,P)}for(let y=0,E=M.length;y<E;++y){let A=M[y],P=A.start,L=A.count;for(let F=P,D=P+L;F<D;F+=3)C(t.getX(F+0)),C(t.getX(F+1)),C(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new N,r=new N,o=new N,a=new N,c=new N,l=new N,h=new N,d=new N;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),x=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)on.fromBufferAttribute(t,e),on.normalize(),t.setXYZ(e,on.x,on.y,on.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?f=c[x]*a.data.stride+a.offset:f=c[x]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new Pe(u,h,d)}if(this.index===null)return jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=t(u,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ql=new N,Nf=new N,Ff=new se,Yn=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=ql.subVectors(n,e).cross(Nf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(ql),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Ff.getNormalMatrix(t),s=this.coplanarPoint(ql).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Bf=0,Ei=class extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=gs(),this.name="",this.type="Material",this.blending=wi,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_c,this.blendDst=xc,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new te(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ha,this.stencilZFail=Ha,this.stencilZPass=Ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){jt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new te().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Yn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ct().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ct().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var vi=new N,Zl=new N,Ma=new N,ba=new N,Ir=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Zl.copy(t).add(e).multiplyScalar(.5),Ma.copy(e).sub(t).normalize(),ba.copy(this.origin).sub(Zl);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ma),a=ba.dot(this.direction),c=-ba.dot(Ma),l=ba.lengthSq(),h=Math.abs(1-o*o),d,u,f,g;if(h>0)if(d=o*c-a,u=o*a-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+o*u+2*a)+u*(o*d+u+2*c)+l}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Zl).addScaledVector(Ma,u),f}intersectSphere(t,e){if(t.radius<0)return null;vi.subVectors(t.center,this.origin);let n=vi.dot(this.direction),s=vi.dot(vi)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(n=(t.min.x-u.x)*l,s=(t.max.x-u.x)*l):(n=(t.max.x-u.x)*l,s=(t.min.x-u.x)*l),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,c=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,c=(t.min.z-u.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=n.x-o.x,M=n.y-o.y,R=n.z-o.z,v=Math.abs(c),b=Math.abs(l),T=Math.abs(h),C,y,E,A,P,L,F,D,H,q,X,ot;if(v>=b&&v>=T?(E=c,L=d,H=g,ot=p,c>=0?(C=l,y=h,A=u,P=f,F=x,D=m,q=M,X=R):(C=h,y=l,A=f,P=u,F=m,D=x,q=R,X=M)):b>=T?(E=l,L=u,H=x,ot=M,l>=0?(C=h,y=c,A=f,P=d,F=m,D=g,q=R,X=p):(C=c,y=h,A=d,P=f,F=g,D=m,q=p,X=R)):(E=h,L=f,H=m,ot=R,h>=0?(C=c,y=l,A=d,P=u,F=g,D=x,q=p,X=M):(C=l,y=c,A=u,P=d,F=x,D=g,q=M,X=p)),E===0)return null;let $=C/E,nt=y/E,rt=1/E,ft=A-$*L,_t=P-nt*L,Wt=F-$*H,Ot=D-nt*H,ee=q-$*ot,tt=X-nt*ot,at=ee*Ot-tt*Wt,bt=ft*tt-_t*ee,Yt=Wt*_t-Ot*ft;if(s){if(at<0||bt<0||Yt<0)return null}else if((at<0||bt<0||Yt<0)&&(at>0||bt>0||Yt>0))return null;let Pt=at+bt+Yt;if(Pt===0)return null;let qt=rt*(at*L+bt*H+Yt*ot);return(Pt>0?qt<0:qt>0)?null:this.at(qt/Pt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},We=class extends Ei{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=yc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Fh=new Ne,rs=new Ir,Ea=new bi,Bh=new N,Ta=new N,wa=new N,Aa=new N,Jl=new N,Ra=new N,Oh=new N,Ca=new N,re=class extends hn{constructor(t=new ye,e=new We){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ra.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(Jl.fromBufferAttribute(d,t),o?Ra.addScaledVector(Jl,h):Ra.addScaledVector(Jl.sub(e),h))}e.add(Ra)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(r),rs.copy(t.ray).recast(t.near),!(Ea.containsPoint(rs.origin)===!1&&(rs.intersectSphere(Ea,Bh)===null||rs.origin.distanceToSquared(Bh)>(t.far-t.near)**2))&&(Fh.copy(r).invert(),rs.copy(t.ray).applyMatrix4(Fh),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,rs)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),R=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,b=R;v<b;v+=3){let T=a.getX(v),C=a.getX(v+1),y=a.getX(v+2);s=Pa(this,p,t,n,l,h,d,T,C,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(a.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=a.getX(m),R=a.getX(m+1),v=a.getX(m+2);s=Pa(this,o,t,n,l,h,d,M,R,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=u.length;g<x;g++){let m=u[g],p=o[m.materialIndex],M=Math.max(m.start,f.start),R=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,b=R;v<b;v+=3){let T=v,C=v+1,y=v+2;s=Pa(this,p,t,n,l,h,d,T,C,y),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let M=m,R=m+1,v=m+2;s=Pa(this,o,t,n,l,h,d,M,R,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Of(i,t,e,n,s,r,o,a){let c;if(t.side===dn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===qi,a),c===null)return null;Ca.copy(a),Ca.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Ca);return l<e.near||l>e.far?null:{distance:l,point:Ca.clone(),object:i}}function Pa(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ta),i.getVertexPosition(c,wa),i.getVertexPosition(l,Aa);let h=Of(i,t,e,n,Ta,wa,Aa,Oh);if(h){let d=new N;Hi.getBarycoord(Oh,Ta,wa,Aa,d),s&&(h.uv=Hi.getInterpolatedAttribute(s,a,c,l,d,new Ct)),r&&(h.uv1=Hi.getInterpolatedAttribute(r,a,c,l,d,new Ct)),o&&(h.normal=Hi.getInterpolatedAttribute(o,a,c,l,d,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new N,materialIndex:0};Hi.getNormal(Ta,wa,Aa,u.normal),h.face=u,h.barycoord=d}return h}var ja=class extends En{constructor(t=null,e=1,n=1,s,r,o,a,c,l=cn,h=cn,d,u){super(null,o,a,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var as=new bi,Hf=new Ct(.5,.5),Ia=new N,Zs=class{constructor(t=new Yn,e=new Yn,n=new Yn,s=new Yn,r=new Yn,o=new Yn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],M=r[12],R=r[13],v=r[14],b=r[15];if(s[0].setComponents(l-o,f-h,p-g,b-M).normalize(),s[1].setComponents(l+o,f+h,p+g,b+M).normalize(),s[2].setComponents(l+a,f+d,p+x,b+R).normalize(),s[3].setComponents(l-a,f-d,p-x,b-R).normalize(),n)s[4].setComponents(c,u,m,v).normalize(),s[5].setComponents(l-c,f-u,p-m,b-v).normalize();else if(s[4].setComponents(l-c,f-u,p-m,b-v).normalize(),e===qn)s[5].setComponents(l+c,f+u,p+m,b+v).normalize();else if(e===Ws)s[5].setComponents(c,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){as.center.set(0,0,0);let e=Hf.distanceTo(t.center);return as.radius=.7071067811865476+e,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ia.x=s.normal.x>0?t.max.x:t.min.x,Ia.y=s.normal.y>0?t.max.y:t.min.y,Ia.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var oi=class extends Ei{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hh=new Ne,rc=new Ir,La=new bi,Da=new N,Un=class extends hn{constructor(t=new ye,e=new oi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(s),La.radius+=r,t.ray.intersectsSphere(La)===!1)return;Hh.copy(s).invert(),rc.copy(t.ray).applyMatrix4(Hh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,d=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=u,x=f;g<x;g++){let m=l.getX(g);Da.fromBufferAttribute(d,m),zh(Da,m,c,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let g=u,x=f;g<x;g++)Da.fromBufferAttribute(d,g),zh(Da,g,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function zh(i,t,e,n,s,r,o){let a=rc.distanceSqToPoint(i);if(a<e){let c=new N;rc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Lr=class extends En{constructor(t=[],e=Zi,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},un=class extends En{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ki=class extends En{constructor(t,e,n=Jn,s,r,o,a=cn,c=cn,l,h=si,d=1){if(h!==si&&h!==Ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ys(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},Qa=class extends ki{constructor(t,e=Jn,n=Zi,s,r,o=cn,a=cn,c,l=si){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,o,a,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Dr=class extends En{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},be=class i extends ye{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2));function g(x,m,p,M,R,v,b,T,C,y,E){let A=v/C,P=b/y,L=v/2,F=b/2,D=T/2,H=C+1,q=y+1,X=0,ot=0,$=new N;for(let nt=0;nt<q;nt++){let rt=nt*P-F;for(let ft=0;ft<H;ft++){let _t=ft*A-L;$[x]=_t*M,$[m]=rt*R,$[p]=D,l.push($.x,$.y,$.z),$[x]=0,$[m]=0,$[p]=T>0?1:-1,h.push($.x,$.y,$.z),d.push(ft/C),d.push(1-nt/y),X+=1}}for(let nt=0;nt<y;nt++)for(let rt=0;rt<C;rt++){let ft=u+rt+H*nt,_t=u+rt+H*(nt+1),Wt=u+(rt+1)+H*(nt+1),Ot=u+(rt+1)+H*nt;c.push(ft,_t,Ot),c.push(_t,Wt,Ot),ot+=6}a.addGroup(f,ot,E),f+=ot,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ur=class i extends ye{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,g=n*2+r,x=s+1,m=new N,p=new N;for(let M=0;M<=g;M++){let R=0,v=0,b=0,T=0;if(M<=n){let E=M/n,A=E*Math.PI/2;v=-h-t*Math.cos(A),b=t*Math.sin(A),T=-t*Math.cos(A),R=E*d}else if(M<=n+r){let E=(M-n)/r;v=-h+E*e,b=t,T=0,R=d+E*u}else{let E=(M-n-r)/n,A=E*Math.PI/2;v=h+t*Math.sin(A),b=t*Math.cos(A),T=t*Math.sin(A),R=d+u+E*d}let C=Math.max(0,Math.min(1,R/f)),y=0;M===0?y=.5/s:M===g&&(y=-.5/s);for(let E=0;E<=s;E++){let A=E/s,P=A*Math.PI*2,L=Math.sin(P),F=Math.cos(P);p.x=-b*F,p.y=v,p.z=b*L,a.push(p.x,p.y,p.z),m.set(-b*F,T,b*L),m.normalize(),c.push(m.x,m.y,m.z),l.push(A+y,C)}if(M>0){let E=(M-1)*x;for(let A=0;A<s;A++){let P=E+A,L=E+A+1,F=M*x+A,D=M*x+A+1;o.push(P,L,F),o.push(L,D,F)}}}this.setIndex(o),this.setAttribute("position",new ce(a,3)),this.setAttribute("normal",new ce(c,3)),this.setAttribute("uv",new ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var Ye=class i extends ye{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,x=[],m=n/2,p=0;M(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(h),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function M(){let v=new N,b=new N,T=0,C=(e-t)/n;for(let y=0;y<=r;y++){let E=[],A=y/r,P=A*(e-t)+t;for(let L=0;L<=s;L++){let F=L/s,D=F*c+a,H=Math.sin(D),q=Math.cos(D);b.x=P*H,b.y=-A*n+m,b.z=P*q,d.push(b.x,b.y,b.z),v.set(H,C,q).normalize(),u.push(v.x,v.y,v.z),f.push(F,1-A),E.push(g++)}x.push(E)}for(let y=0;y<s;y++)for(let E=0;E<r;E++){let A=x[E][y],P=x[E+1][y],L=x[E+1][y+1],F=x[E][y+1];(t>0||E!==0)&&(h.push(A,P,F),T+=3),(e>0||E!==r-1)&&(h.push(P,L,F),T+=3)}l.addGroup(p,T,0),p+=T}function R(v){let b=g,T=new Ct,C=new N,y=0,E=v===!0?t:e,A=v===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,m*A,0),u.push(0,A,0),f.push(.5,.5),g++;let P=g;for(let L=0;L<=s;L++){let D=L/s*c+a,H=Math.cos(D),q=Math.sin(D);C.x=E*q,C.y=m*A,C.z=E*H,d.push(C.x,C.y,C.z),u.push(0,A,0),T.x=H*.5+.5,T.y=q*.5*A+.5,f.push(T.x,T.y),g++}for(let L=0;L<s;L++){let F=b+L,D=P+L;v===!0?h.push(D,D+1,F):h.push(D+1,D,F),y+=3}l.addGroup(p,y,v===!0?1:2),p+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gi=class i extends Ye{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(o-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new Ct:new N);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,s=[],r=[],o=[],a=new N,c=new Ne;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new N)}r[0]=new N,o[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(he(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(he(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Js=class extends Nn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Ct){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=c-this.aX,f=l-this.aY;c=u*h-f*d+this.aX,l=u*d+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},to=class extends Js{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Bc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+d)+(c-a)/d;u*=h,f*=h,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var kh=new N,Gh=new N,$l=new Bc,Kl=new Bc,jl=new Bc,li=class extends Nn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new N){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Gh.subVectors(s[0],s[1]).add(s[0]),l=Gh);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(kh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=kh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),$l.initNonuniformCatmullRom(l.x,d.x,u.x,h.x,g,x,m),Kl.initNonuniformCatmullRom(l.y,d.y,u.y,h.y,g,x,m),jl.initNonuniformCatmullRom(l.z,d.z,u.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&($l.initCatmullRom(l.x,d.x,u.x,h.x,this.tension),Kl.initCatmullRom(l.y,d.y,u.y,h.y,this.tension),jl.initCatmullRom(l.z,d.z,u.z,h.z,this.tension));return n.set($l.calc(c),Kl.calc(c),jl.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new N().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Vh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function zf(i,t){let e=1-i;return e*e*t}function kf(i,t){return 2*(1-i)*i*t}function Gf(i,t){return i*i*t}function yr(i,t,e,n){return zf(i,t)+kf(i,e)+Gf(i,n)}function Vf(i,t){let e=1-i;return e*e*e*t}function Wf(i,t){let e=1-i;return 3*e*e*i*t}function Xf(i,t){return 3*(1-i)*i*i*t}function Yf(i,t){return i*i*i*t}function vr(i,t,e,n,s){return Vf(i,t)+Wf(i,e)+Xf(i,n)+Yf(i,s)}var Nr=class extends Nn{constructor(t=new Ct,e=new Ct,n=new Ct,s=new Ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ct){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},eo=class extends Nn{constructor(t=new N,e=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(vr(t,s.x,r.x,o.x,a.x),vr(t,s.y,r.y,o.y,a.y),vr(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Fr=class extends Nn{constructor(t=new Ct,e=new Ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ct){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},no=class extends Nn{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Br=class extends Nn{constructor(t=new Ct,e=new Ct,n=new Ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ct){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(yr(t,s.x,r.x,o.x),yr(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Or=class extends Nn{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(yr(t,s.x,r.x,o.x),yr(t,s.y,r.y,o.y),yr(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Hr=class extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ct){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Vh(a,c.x,l.x,h.x,d.x),Vh(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ct().fromArray(s))}return this}},io=Object.freeze({__proto__:null,ArcCurve:to,CatmullRomCurve3:li,CubicBezierCurve:Nr,CubicBezierCurve3:eo,EllipseCurve:Js,LineCurve:Fr,LineCurve3:no,QuadraticBezierCurve:Br,QuadraticBezierCurve3:Or,SplineCurve:Hr}),so=class extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new io[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new io[s.type]().fromJSON(s))}return this}},zr=class extends so{constructor(t){super(),this.type="Path",this.currentPoint=new Ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Fr(this.currentPoint.clone(),new Ct(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Br(this.currentPoint.clone(),new Ct(t,e),new Ct(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Nr(this.currentPoint.clone(),new Ct(t,e),new Ct(n,s),new Ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Hr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new Js(t,e,n,s,r,o,a,c);if(this.curves.length>0){let d=l.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},$s=class extends zr{constructor(t){super(t),this.uuid=gs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new zr().fromJSON(s))}return this}};function qf(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Ou(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=jf(i,t,r,e)),i.length>80*e){a=i[0],c=i[1];let h=a,d=c;for(let u=e;u<s;u+=e){let f=i[u],g=i[u+1];f<a&&(a=f),g<c&&(c=g),f>h&&(h=f),g>d&&(d=g)}l=Math.max(h-a,d-c),l=l!==0?32767/l:0}return kr(r,o,e,a,c,l,0),o}function Ou(i,t,e,n,s){let r;if(s===cp(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Wh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Wh(o/n|0,i[o],i[o+1],r);return r&&Ks(r,r.next)&&(Vr(r),r=r.next),r}function hs(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ks(e,e.next)||Ve(e.prev,e,e.next)===0)){if(Vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function kr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&ip(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?Jf(i,n,s,r):Zf(i)){t.push(c.i,i.i,l.i),Vr(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=$f(hs(i),t),kr(i,t,e,n,s,r,2)):o===2&&Kf(i,t,e,n,s,r):kr(hs(i),t,e,n,s,r,1);break}}}function Zf(i){let t=i.prev,e=i,n=i.next;if(Ve(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=Math.min(s,r,o),d=Math.min(a,c,l),u=Math.max(s,r,o),f=Math.max(a,c,l),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&gr(s,a,r,c,o,l,g.x,g.y)&&Ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Jf(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Ve(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,d=r.y,u=o.y,f=Math.min(a,c,l),g=Math.min(h,d,u),x=Math.max(a,c,l),m=Math.max(h,d,u),p=ac(f,g,t,e,n),M=ac(x,m,t,e,n),R=i.prevZ,v=i.nextZ;for(;R&&R.z>=p&&v&&v.z<=M;){if(R.x>=f&&R.x<=x&&R.y>=g&&R.y<=m&&R!==s&&R!==o&&gr(a,h,c,d,l,u,R.x,R.y)&&Ve(R.prev,R,R.next)>=0||(R=R.prevZ,v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&gr(a,h,c,d,l,u,v.x,v.y)&&Ve(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;R&&R.z>=p;){if(R.x>=f&&R.x<=x&&R.y>=g&&R.y<=m&&R!==s&&R!==o&&gr(a,h,c,d,l,u,R.x,R.y)&&Ve(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&gr(a,h,c,d,l,u,v.x,v.y)&&Ve(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function $f(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ks(n,s)&&zu(n,e,e.next,s)&&Gr(n,s)&&Gr(s,n)&&(t.push(n.i,e.i,s.i),Vr(e),Vr(e.next),e=i=s),e=e.next}while(e!==i);return hs(e)}function Kf(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ap(o,a)){let c=ku(o,a);o=hs(o,o.next),c=hs(c,c.next),kr(o,t,e,n,s,r,0),kr(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function jf(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Ou(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(rp(l))}s.sort(Qf);for(let r=0;r<s.length;r++)e=tp(s[r],e);return e}function Qf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function tp(i,t){let e=ep(i,t);if(!e)return t;let n=ku(e,i);return hs(n,n.next),hs(e,e.next)}function ep(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Ks(i,e))return e;do{if(Ks(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Hu(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Gr(e,i)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&np(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function np(i,t){return Ve(i.prev,i,t.prev)<0&&Ve(t.next,i,i.next)<0}function ip(i,t,e,n){let s=i;do s.z===0&&(s.z=ac(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,sp(s)}function sp(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let l=0;l<e&&(a++,o=o.nextZ,!!o);l++);let c=e;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function ac(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function rp(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Hu(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function gr(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Hu(i,t,e,n,s,r,o,a)}function ap(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!op(i,t)&&(Gr(i,t)&&Gr(t,i)&&lp(i,t)&&(Ve(i.prev,i,t.prev)||Ve(i,t.prev,t))||Ks(i,t)&&Ve(i.prev,i,i.next)>0&&Ve(t.prev,t,t.next)>0)}function Ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ks(i,t){return i.x===t.x&&i.y===t.y}function zu(i,t,e,n){let s=Na(Ve(i,t,e)),r=Na(Ve(i,t,n)),o=Na(Ve(e,n,i)),a=Na(Ve(e,n,t));return!!(s!==r&&o!==a||s===0&&Ua(i,e,t)||r===0&&Ua(i,n,t)||o===0&&Ua(e,i,n)||a===0&&Ua(e,t,n))}function Ua(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Na(i){return i>0?1:i<0?-1:0}function op(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&zu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Gr(i,t){return Ve(i.prev,i,i.next)<0?Ve(i,t,i.next)>=0&&Ve(i,i.prev,t)>=0:Ve(i,t,i.prev)<0||Ve(i,i.next,t)<0}function lp(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ku(i,t){let e=oc(i.i,i.x,i.y),n=oc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Wh(i,t,e,n){let s=oc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Vr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function oc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function cp(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var lc=class{static triangulate(t,e,n=2){return qf(t,e,n)}},os=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Xh(t),Yh(n,t);let o=t.length;e.forEach(Xh);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Yh(n,e[c]);let a=lc.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Xh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Yh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Wr=class i extends ye{constructor(t=new $s([new Ct(.5,.5),new Ct(-.5,.5),new Ct(-.5,-.5),new Ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new ce(s,3)),this.setAttribute("uv",new ce(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:hp,R,v=!1,b,T,C,y;if(p){R=p.getSpacedPoints(h),v=!0,u=!1;let O=p.isCatmullRomCurve3?p.closed:!1;b=p.computeFrenetFrames(h,O),T=new N,C=new N,y=new N}u||(m=0,f=0,g=0,x=0);let E=a.extractPoints(l),A=E.shape,P=E.holes;if(!os.isClockWise(A)){A=A.reverse();for(let O=0,J=P.length;O<J;O++){let j=P[O];os.isClockWise(j)&&(P[O]=j.reverse())}}function F(O){let j=10000000000000001e-36,lt=O[0];for(let ct=1;ct<=O.length;ct++){let gt=ct%O.length,Dt=O[gt],Nt=Dt.x-lt.x,yt=Dt.y-lt.y,I=Nt*Nt+yt*yt,zt=Math.max(Math.abs(Dt.x),Math.abs(Dt.y),Math.abs(lt.x),Math.abs(lt.y)),kt=j*zt*zt;if(I<=kt){O.splice(gt,1),ct--;continue}lt=Dt}}F(A),P.forEach(F);let D=P.length,H=A;for(let O=0;O<D;O++){let J=P[O];A=A.concat(J)}function q(O,J,j){return J||Qt("ExtrudeGeometry: vec does not exist"),O.clone().addScaledVector(J,j)}let X=A.length;function ot(O,J,j){let lt,ct,gt,Dt=O.x-J.x,Nt=O.y-J.y,yt=j.x-O.x,I=j.y-O.y,zt=Dt*Dt+Nt*Nt,kt=Dt*I-Nt*yt;if(Math.abs(kt)>Number.EPSILON){let w=Math.sqrt(zt),_=Math.sqrt(yt*yt+I*I),z=J.x-Nt/w,k=J.y+Dt/w,Y=j.x-I/_,dt=j.y+yt/_,pt=((Y-z)*I-(dt-k)*yt)/(Dt*I-Nt*yt);lt=z+Dt*pt-O.x,ct=k+Nt*pt-O.y;let K=lt*lt+ct*ct;if(K<=2)return new Ct(lt,ct);gt=Math.sqrt(K/2)}else{let w=!1;Dt>Number.EPSILON?yt>Number.EPSILON&&(w=!0):Dt<-Number.EPSILON?yt<-Number.EPSILON&&(w=!0):Math.sign(Nt)===Math.sign(I)&&(w=!0),w?(lt=-Nt,ct=Dt,gt=Math.sqrt(zt)):(lt=Dt,ct=Nt,gt=Math.sqrt(zt/2))}return new Ct(lt/gt,ct/gt)}let $=[];for(let O=0,J=H.length,j=J-1,lt=O+1;O<J;O++,j++,lt++)j===J&&(j=0),lt===J&&(lt=0),$[O]=ot(H[O],H[j],H[lt]);let nt=[],rt,ft=$.concat();for(let O=0,J=D;O<J;O++){let j=P[O];rt=[];for(let lt=0,ct=j.length,gt=ct-1,Dt=lt+1;lt<ct;lt++,gt++,Dt++)gt===ct&&(gt=0),Dt===ct&&(Dt=0),rt[lt]=ot(j[lt],j[gt],j[Dt]);nt.push(rt),ft=ft.concat(rt)}let _t;if(m===0)_t=os.triangulateShape(H,P);else{let O=[],J=[];for(let j=0;j<m;j++){let lt=j/m,ct=f*Math.cos(lt*Math.PI/2),gt=g*Math.sin(lt*Math.PI/2)+x;for(let Dt=0,Nt=H.length;Dt<Nt;Dt++){let yt=q(H[Dt],$[Dt],gt);bt(yt.x,yt.y,-ct),lt===0&&O.push(yt)}for(let Dt=0,Nt=D;Dt<Nt;Dt++){let yt=P[Dt];rt=nt[Dt];let I=[];for(let zt=0,kt=yt.length;zt<kt;zt++){let w=q(yt[zt],rt[zt],gt);bt(w.x,w.y,-ct),lt===0&&I.push(w)}lt===0&&J.push(I)}}_t=os.triangulateShape(O,J)}let Wt=_t.length,Ot=g+x;for(let O=0;O<X;O++){let J=u?q(A[O],ft[O],Ot):A[O];v?(C.copy(b.normals[0]).multiplyScalar(J.x),T.copy(b.binormals[0]).multiplyScalar(J.y),y.copy(R[0]).add(C).add(T),bt(y.x,y.y,y.z)):bt(J.x,J.y,0)}for(let O=1;O<=h;O++)for(let J=0;J<X;J++){let j=u?q(A[J],ft[J],Ot):A[J];v?(C.copy(b.normals[O]).multiplyScalar(j.x),T.copy(b.binormals[O]).multiplyScalar(j.y),y.copy(R[O]).add(C).add(T),bt(y.x,y.y,y.z)):bt(j.x,j.y,d/h*O)}for(let O=m-1;O>=0;O--){let J=O/m,j=f*Math.cos(J*Math.PI/2),lt=g*Math.sin(J*Math.PI/2)+x;for(let ct=0,gt=H.length;ct<gt;ct++){let Dt=q(H[ct],$[ct],lt);bt(Dt.x,Dt.y,d+j)}for(let ct=0,gt=P.length;ct<gt;ct++){let Dt=P[ct];rt=nt[ct];for(let Nt=0,yt=Dt.length;Nt<yt;Nt++){let I=q(Dt[Nt],rt[Nt],lt);v?bt(I.x,I.y+R[h-1].y,R[h-1].x+j):bt(I.x,I.y,d+j)}}}ee(),tt();function ee(){let O=s.length/3;if(u){let J=0,j=X*J;for(let lt=0;lt<Wt;lt++){let ct=_t[lt];Yt(ct[2]+j,ct[1]+j,ct[0]+j)}J=h+m*2,j=X*J;for(let lt=0;lt<Wt;lt++){let ct=_t[lt];Yt(ct[0]+j,ct[1]+j,ct[2]+j)}}else{for(let J=0;J<Wt;J++){let j=_t[J];Yt(j[2],j[1],j[0])}for(let J=0;J<Wt;J++){let j=_t[J];Yt(j[0]+X*h,j[1]+X*h,j[2]+X*h)}}n.addGroup(O,s.length/3-O,0)}function tt(){let O=s.length/3,J=0;at(H,J),J+=H.length;for(let j=0,lt=P.length;j<lt;j++){let ct=P[j];at(ct,J),J+=ct.length}n.addGroup(O,s.length/3-O,1)}function at(O,J){let j=O.length;for(;--j>=0;){let lt=j,ct=j-1;ct<0&&(ct=O.length-1);for(let gt=0,Dt=h+m*2;gt<Dt;gt++){let Nt=X*gt,yt=X*(gt+1),I=J+lt+Nt,zt=J+ct+Nt,kt=J+ct+yt,w=J+lt+yt;Pt(I,zt,kt,w)}}}function bt(O,J,j){c.push(O),c.push(J),c.push(j)}function Yt(O,J,j){qt(O),qt(J),qt(j);let lt=s.length/3,ct=M.generateTopUV(n,s,lt-3,lt-2,lt-1);ae(ct[0]),ae(ct[1]),ae(ct[2])}function Pt(O,J,j,lt){qt(O),qt(J),qt(lt),qt(J),qt(j),qt(lt);let ct=s.length/3,gt=M.generateSideWallUV(n,s,ct-6,ct-3,ct-2,ct-1);ae(gt[0]),ae(gt[1]),ae(gt[3]),ae(gt[1]),ae(gt[2]),ae(gt[3])}function qt(O){s.push(c[O*3+0]),s.push(c[O*3+1]),s.push(c[O*3+2])}function ae(O){r.push(O.x),r.push(O.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return up(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new io[s.type]().fromJSON(s)),new i(n,t.options)}},hp={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new Ct(r,o),new Ct(a,c),new Ct(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Ct(o,1-c),new Ct(l,1-d),new Ct(u,1-g),new Ct(x,1-p)]:[new Ct(a,1-c),new Ct(h,1-d),new Ct(f,1-g),new Ct(m,1-p)]}};function up(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ee=class i extends ye{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,u=e/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let M=p*u-o;for(let R=0;R<l;R++){let v=R*d-r;g.push(v,-M,0),x.push(0,0,1),m.push(R/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<a;M++){let R=M+l*p,v=M+l*(p+1),b=M+1+l*(p+1),T=M+1+l*p;f.push(R,v,T),f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var _n=class i extends ye{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new N,u=new N,f=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let M=[],R=p/n,v=o+R*a,b=t*Math.cos(v),T=Math.sqrt(t*t-b*b),C=0;p===0&&o===0?C=.5/e:p===n&&c===Math.PI&&(C=-.5/e);for(let y=0;y<=e;y++){let E=y/e,A=s+E*r;d.x=-T*Math.cos(A),d.y=b,d.z=T*Math.sin(A),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),m.push(E+C,1-R),M.push(l++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let R=h[p][M+1],v=h[p][M],b=h[p+1][M],T=h[p+1][M+1];(p!==0||o>0)&&f.push(R,v,T),(p!==n-1||c<Math.PI)&&f.push(v,b,T)}this.setIndex(f),this.setAttribute("position",new ce(g,3)),this.setAttribute("normal",new ce(x,3)),this.setAttribute("uv",new ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ti=class i extends ye{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],d=[],u=new N,f=new N,g=new N;for(let x=0;x<=n;x++){let m=o+x/n*a;for(let p=0;p<=s;p++){let M=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(M),f.y=(t+e*Math.cos(m))*Math.sin(M),f.z=e*Math.sin(m),l.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let m=1;m<=s;m++){let p=(s+1)*x+m-1,M=(s+1)*(x-1)+m-1,R=(s+1)*(x-1)+m,v=(s+1)*x+m;c.push(p,M,v),c.push(M,R,v)}this.setIndex(c),this.setAttribute("position",new ce(l,3)),this.setAttribute("normal",new ce(h,3)),this.setAttribute("uv",new ce(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var us=class i extends ye{constructor(t=new Or(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,c=new N,l=new Ct,h=new N,d=[],u=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ce(d,3)),this.setAttribute("normal",new ce(u,3)),this.setAttribute("uv",new ce(f,2));function x(){for(let R=0;R<e;R++)m(R);m(r===!1?e:0),M(),p()}function m(R){h=t.getPointAt(R/e,h);let v=o.normals[R],b=o.binormals[R];for(let T=0;T<=s;T++){let C=T/s*Math.PI*2,y=Math.sin(C),E=-Math.cos(C);c.x=E*v.x+y*b.x,c.y=E*v.y+y*b.y,c.z=E*v.z+y*b.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function p(){for(let R=1;R<=e;R++)for(let v=1;v<=s;v++){let b=(s+1)*(R-1)+(v-1),T=(s+1)*R+(v-1),C=(s+1)*R+v,y=(s+1)*(R-1)+v;g.push(b,T,y),g.push(T,C,y)}}function M(){for(let R=0;R<=e;R++)for(let v=0;v<=s;v++)l.x=R/e,l.y=v/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new io[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function _s(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(qh(s))s.isRenderTargetTexture?(jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(qh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function xn(i){let t={};for(let e=0;e<i.length;e++){let n=_s(i[e]);for(let s in n)t[s]=n[s]}return t}function qh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function dp(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Oc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var Gu={clone:_s,merge:xn},fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,pp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,sn=class extends Ei{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fp,this.fragmentShader=pp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=dp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new te().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ct().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Be().fromArray(s.value);break;case"m3":this.uniforms[n].value=new se().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ne().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ro=class extends sn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Oe=class extends Ei{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ao=class extends Ei{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},oo=class extends Ei{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Os(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ql(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Vi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},lo=class extends Vi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:nc,endingEnd:nc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case ic:r=t,a=2*e-n;break;case sc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case ic:o=t,c=2*n-e;break;case sc:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-u*m+2*u*x-u*g,M=(1+u)*m+(-1.5-2*u)*x+(-.5+u)*g+1,R=(-1-f)*m+(1.5+f)*x+.5*g,v=f*m-f*x;for(let b=0;b!==a;++b)r[b]=p*o[h+b]+M*o[l+b]+R*o[c+b]+v*o[d+b];return r}},co=class extends Vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*d+o[c+u]*h;return r}},ho=class extends Vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},uo=class extends Vi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),x=1-g;for(let m=0;m!==a;++m)r[m]=o[l+m]*x+o[c+m]*g;return r}let u=a*2,f=t-1;for(let g=0;g!==a;++g){let x=o[l+g],m=o[c+g],p=f*u+g*2,M=d[p],R=d[p+1],v=t*u+g*2,b=h[v],T=h[v+1],C=gp(n,e,M,b,s);r[g]=Vu(C,x,R,T,m)}return r}};function Vu(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function mp(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function gp(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Vu(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let c=mp(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var Fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Os(e,this.TimeBufferType),this.values=Os(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Os(t.times,Array),values:Os(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),Ql(t.settings)&&(n.settings={inTangents:Os(t.settings.inTangents,Array),outTangents:Os(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new co(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new lo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new uo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Sr:e=this.InterpolantFactoryMethodDiscrete;break;case Za:e=this.InterpolantFactoryMethodLinear;break;case Oa:e=this.InterpolantFactoryMethodSmooth;break;case ec:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Sr;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return Oa;case this.InterpolantFactoryMethodBezier:return ec}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;Ql(this.settings)&&(Zh(this.settings.inTangents,t),Zh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Qt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Qt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){Qt("KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){Qt("KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&rf(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){Qt("KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Oa,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let x=e[d+g];if(x!==e[u+g]||x!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,Ql(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Zh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Fn.prototype.ValueTypeName="";Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=Za;var Wi=class extends Fn{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=Sr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var fo=class extends Fn{constructor(t,e,n,s){super(t,e,n,s)}};fo.prototype.ValueTypeName="color";var po=class extends Fn{constructor(t,e,n,s){super(t,e,n,s)}};po.prototype.ValueTypeName="number";var mo=class extends Vi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)ai.slerpFlat(r,0,o,l-a,o,l,c);return r}},Xr=class extends Fn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new mo(this.times,this.values,this.getValueSize(),t)}};Xr.prototype.ValueTypeName="quaternion";Xr.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends Fn{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=Sr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var go=class extends Fn{constructor(t,e,n,s){super(t,e,n,s)}};go.prototype.ValueTypeName="vector";var _o=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Wu=new _o,xo=class{constructor(t){this.manager=t!==void 0?t:Wu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};xo.DEFAULT_MATERIAL_NAME="__DEFAULT";var ds=class extends hn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new te(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var tc=new Ne,Jh=new N,$h=new N,js=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zs,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new Be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Jh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jh),$h.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($h),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(tc,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Ws||t.reversedDepth?e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),e.multiply(tc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Fa=new N,Ba=new ai,ei=new N,Yr=class extends hn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Fa,Ba,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Ba,ei.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Fa,Ba,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Ba,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oi=new N,Kh=new Ct,jh=new Ct,ln=class extends Yr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=cs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(_r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cs*2*Math.atan(Math.tan(_r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z)}getViewSize(t,e){return this.getViewBounds(t,Kh,jh),e.subVectors(jh,Kh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(_r*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},cc=class extends js{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=cs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},qr=class extends ds{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new cc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},hc=class extends js{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0}},Yi=class extends ds{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new hc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Qs=class extends Yr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},uc=class extends js{constructor(){super(new Qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zr=class extends ds{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(hn.DEFAULT_UP),this.updateMatrix(),this.target=new hn,this.shadow=new uc}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Jr=class extends ds{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Hs=-90,zs=1,yo=class extends hn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new ln(Hs,zs,t,e);s.layers=this.layers,this.add(s);let r=new ln(Hs,zs,t,e);r.layers=this.layers,this.add(r);let o=new ln(Hs,zs,t,e);o.layers=this.layers,this.add(o);let a=new ln(Hs,zs,t,e);a.layers=this.layers,this.add(a);let c=new ln(Hs,zs,t,e);c.layers=this.layers,this.add(c);let l=new ln(Hs,zs,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Ws)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},vo=class extends ln{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Hc="\\[\\]\\.:\\/",_p=new RegExp("["+Hc+"]","g"),zc="[^"+Hc+"]",xp="[^"+Hc.replace("\\.","")+"]",yp=/((?:WC+[\/:])*)/.source.replace("WC",zc),vp=/(WCOD+)?/.source.replace("WCOD",xp),Sp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zc),Mp=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zc),bp=new RegExp("^"+yp+vp+Sp+Mp+"$"),Ep=["material","materials","bones","map"],dc=class{constructor(t,e,n){let s=n||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ue=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_p,"")}static parseTrackName(t){let e=bp.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ep.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Qt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Qt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Qt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Qt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Qt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Qt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;Qt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Qt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=dc;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vy=new Float32Array(1);var Yc=class Yc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Yc.prototype.isMatrix2=!0;var fc=Yc;function kc(i,t,e,n){let s=Tp(n);switch(e){case Ic:return i*t;case Dc:return i*t/s.components*s.byteLength;case Ro:return i*t/s.components*s.byteLength;case $i:return i*t*2/s.components*s.byteLength;case Co:return i*t*2/s.components*s.byteLength;case Lc:return i*t*3/s.components*s.byteLength;case zn:return i*t*4/s.components*s.byteLength;case Po:return i*t*4/s.components*s.byteLength;case ta:case ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case na:case ia:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Lo:case Uo:return Math.max(i,16)*Math.max(t,8)/4;case Io:case Do:return Math.max(i,8)*Math.max(t,8)/2;case No:case Fo:case Oo:case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bo:case sa:case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Zo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case jo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Qo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case el:case nl:case il:return Math.ceil(i/4)*Math.ceil(t/4)*16;case sl:case rl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ra:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Tp(i){switch(i){case Cn:case Ac:return{byteLength:1,components:1};case er:case Rc:case Kn:return{byteLength:2,components:1};case wo:case Ao:return{byteLength:2,components:4};case Jn:case To:case $n:return{byteLength:4,components:1};case Cc:case Pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function dd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ap(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Rp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Cp=`#ifdef USE_ALPHAHASH
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
#endif`,Pp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ip=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Up=`#ifdef USE_AOMAP
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
#endif`,Np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fp=`#ifdef USE_BATCHING
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
#endif`,Bp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Gp=`#ifdef USE_BUMPMAP
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Zp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,$p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Kp=`#define PI 3.141592653589793
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
} // validated`,jp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Qp=`vec3 transformedNormal = objectNormal;
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
#endif`,tm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,im=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sm="gl_FragColor = linearToOutputTexel( gl_FragColor );",rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,am=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,dm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mm=`#ifdef USE_GRADIENTMAP
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
}`,gm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_m=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ym=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,vm=`#ifdef USE_ENVMAP
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
#endif`,Sm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
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
#endif`,wm=`uniform sampler2D dfgLUT;
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
}`,Am=`
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Im=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Om=`#if defined( USE_POINTS_UV )
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
#endif`,Hm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,km=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
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
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ym=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Km=`#ifdef USE_NORMALMAP
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
#endif`,jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,r0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,o0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,c0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f0=`float getShadowMask() {
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
}`,p0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,g0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_0=`#ifdef USE_SKINNING
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
#endif`,x0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,v0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,S0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,M0=`#ifdef USE_TRANSMISSION
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
#endif`,b0=`#ifdef USE_TRANSMISSION
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,R0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C0=`uniform sampler2D t2D;
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
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U0=`#include <common>
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
}`,N0=`#if DEPTH_PACKING == 3200
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
}`,F0=`#define DISTANCE
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
}`,B0=`#define DISTANCE
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
}`,O0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z0=`uniform float scale;
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
}`,k0=`uniform vec3 diffuse;
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
}`,G0=`#include <common>
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
}`,V0=`uniform vec3 diffuse;
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
}`,W0=`#define LAMBERT
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
}`,X0=`#define LAMBERT
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
}`,Y0=`#define MATCAP
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
}`,q0=`#define MATCAP
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
}`,Z0=`#define NORMAL
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
}`,J0=`#define NORMAL
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
}`,$0=`#define PHONG
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
}`,K0=`#define PHONG
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
}`,j0=`#define STANDARD
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
}`,Q0=`#define STANDARD
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
}`,tg=`#define TOON
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
}`,eg=`#define TOON
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
}`,ng=`uniform float size;
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
}`,ig=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,rg=`uniform vec3 color;
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
}`,ag=`uniform float rotation;
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
}`,og=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:Rp,alphahash_pars_fragment:Cp,alphamap_fragment:Pp,alphamap_pars_fragment:Ip,alphatest_fragment:Lp,alphatest_pars_fragment:Dp,aomap_fragment:Up,aomap_pars_fragment:Np,batching_pars_vertex:Fp,batching_vertex:Bp,begin_vertex:Op,beginnormal_vertex:Hp,bsdfs:zp,iridescence_fragment:kp,bumpmap_pars_fragment:Gp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Wp,clipping_planes_pars_vertex:Xp,clipping_planes_vertex:Yp,color_fragment:qp,color_pars_fragment:Zp,color_pars_vertex:Jp,color_vertex:$p,common:Kp,cube_uv_reflection_fragment:jp,defaultnormal_vertex:Qp,displacementmap_pars_vertex:tm,displacementmap_vertex:em,emissivemap_fragment:nm,emissivemap_pars_fragment:im,colorspace_fragment:sm,colorspace_pars_fragment:rm,envmap_fragment:am,envmap_common_pars_fragment:om,envmap_pars_fragment:lm,envmap_pars_vertex:cm,envmap_physical_pars_fragment:vm,envmap_vertex:hm,fog_vertex:um,fog_pars_vertex:dm,fog_fragment:fm,fog_pars_fragment:pm,gradientmap_pars_fragment:mm,lightmap_pars_fragment:gm,lights_lambert_fragment:_m,lights_lambert_pars_fragment:xm,lights_pars_begin:ym,lights_toon_fragment:Sm,lights_toon_pars_fragment:Mm,lights_phong_fragment:bm,lights_phong_pars_fragment:Em,lights_physical_fragment:Tm,lights_physical_pars_fragment:wm,lights_fragment_begin:Am,lights_fragment_maps:Rm,lights_fragment_end:Cm,lightprobes_pars_fragment:Pm,logdepthbuf_fragment:Im,logdepthbuf_pars_fragment:Lm,logdepthbuf_pars_vertex:Dm,logdepthbuf_vertex:Um,map_fragment:Nm,map_pars_fragment:Fm,map_particle_fragment:Bm,map_particle_pars_fragment:Om,metalnessmap_fragment:Hm,metalnessmap_pars_fragment:zm,morphinstance_vertex:km,morphcolor_vertex:Gm,morphnormal_vertex:Vm,morphtarget_pars_vertex:Wm,morphtarget_vertex:Xm,normal_fragment_begin:Ym,normal_fragment_maps:qm,normal_pars_fragment:Zm,normal_pars_vertex:Jm,normal_vertex:$m,normalmap_pars_fragment:Km,clearcoat_normal_fragment_begin:jm,clearcoat_normal_fragment_maps:Qm,clearcoat_pars_fragment:t0,iridescence_pars_fragment:e0,opaque_fragment:n0,packing:i0,premultiplied_alpha_fragment:s0,project_vertex:r0,dithering_fragment:a0,dithering_pars_fragment:o0,roughnessmap_fragment:l0,roughnessmap_pars_fragment:c0,shadowmap_pars_fragment:h0,shadowmap_pars_vertex:u0,shadowmap_vertex:d0,shadowmask_pars_fragment:f0,skinbase_vertex:p0,skinning_pars_vertex:m0,skinning_vertex:g0,skinnormal_vertex:_0,specularmap_fragment:x0,specularmap_pars_fragment:y0,tonemapping_fragment:v0,tonemapping_pars_fragment:S0,transmission_fragment:M0,transmission_pars_fragment:b0,uv_pars_fragment:E0,uv_pars_vertex:T0,uv_vertex:w0,worldpos_vertex:A0,background_vert:R0,background_frag:C0,backgroundCube_vert:P0,backgroundCube_frag:I0,cube_vert:L0,cube_frag:D0,depth_vert:U0,depth_frag:N0,distance_vert:F0,distance_frag:B0,equirect_vert:O0,equirect_frag:H0,linedashed_vert:z0,linedashed_frag:k0,meshbasic_vert:G0,meshbasic_frag:V0,meshlambert_vert:W0,meshlambert_frag:X0,meshmatcap_vert:Y0,meshmatcap_frag:q0,meshnormal_vert:Z0,meshnormal_frag:J0,meshphong_vert:$0,meshphong_frag:K0,meshphysical_vert:j0,meshphysical_frag:Q0,meshtoon_vert:tg,meshtoon_frag:eg,points_vert:ng,points_frag:ig,shadow_vert:sg,shadow_frag:rg,sprite_vert:ag,sprite_frag:og},Lt={common:{diffuse:{value:new te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new te(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},ui={basic:{uniforms:xn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:xn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new te(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:xn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new te(0)},specular:{value:new te(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:xn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:xn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new te(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:xn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:xn([Lt.points,Lt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:xn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:xn([Lt.common,Lt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:xn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:xn([Lt.sprite,Lt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:xn([Lt.common,Lt.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:xn([Lt.lights,Lt.fog,{color:{value:new te(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};ui.physical={uniforms:xn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new te(0)},specularColor:{value:new te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var hl={r:0,b:0,g:0},lg=new Ne,fd=new se;fd.set(-1,0,0,0,1,0,0,0,1);function cg(i,t,e,n,s,r){let o=new te(0),a=s===!0?0:1,c,l,h=null,d=0,u=null;function f(M){let R=M.isScene===!0?M.background:null;if(R&&R.isTexture){let v=M.backgroundBlurriness>0;R=t.get(R,v)}return R}function g(M){let R=!1,v=f(M);v===null?m(o,a):v&&v.isColor&&(m(v,1),R=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(M,R){let v=f(R);v&&(v.isCubeTexture||v.mapping===jr)?(l===void 0&&(l=new re(new be(1,1,1),new sn({name:"BackgroundCubeMaterial",uniforms:_s(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=v,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(lg.makeRotationFromEuler(R.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(fd),l.material.toneMapped=fe.getTransfer(v.colorSpace)!==Se,(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new re(new Ee(2,2),new sn({name:"BackgroundMaterial",uniforms:_s(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=fe.getTransfer(v.colorSpace)!==Se,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,R){M.getRGB(hl,Oc(i)),e.buffers.color.setClear(hl.r,hl.g,hl.b,R,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,R=1){o.set(M),a=R,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,m(o,a)},render:g,addToRenderList:x,dispose:p}}function hg(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(P,L,F,D,H){let q=!1,X=d(P,D,F,L);r!==X&&(r=X,l(r.object)),q=f(P,D,F,H),q&&g(P,D,F,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,v(P,L,F,D),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function h(P){return i.deleteVertexArray(P)}function d(P,L,F,D){let H=D.wireframe===!0,q=n[L.id];q===void 0&&(q={},n[L.id]=q);let X=P.isInstancedMesh===!0?P.id:0,ot=q[X];ot===void 0&&(ot={},q[X]=ot);let $=ot[F.id];$===void 0&&($={},ot[F.id]=$);let nt=$[H];return nt===void 0&&(nt=u(c()),$[H]=nt),nt}function u(P){let L=[],F=[],D=[];for(let H=0;H<e;H++)L[H]=0,F[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:D,object:P,attributes:{},index:null}}function f(P,L,F,D){let H=r.attributes,q=L.attributes,X=0,ot=F.getAttributes();for(let $ in ot)if(ot[$].location>=0){let rt=H[$],ft=q[$];if(ft===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(ft=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(ft=P.instanceColor)),rt===void 0||rt.attribute!==ft||ft&&rt.data!==ft.data)return!0;X++}return r.attributesNum!==X||r.index!==D}function g(P,L,F,D){let H={},q=L.attributes,X=0,ot=F.getAttributes();for(let $ in ot)if(ot[$].location>=0){let rt=q[$];rt===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(rt=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(rt=P.instanceColor));let ft={};ft.attribute=rt,rt&&rt.data&&(ft.data=rt.data),H[$]=ft,X++}r.attributes=H,r.attributesNum=X,r.index=D}function x(){let P=r.newAttributes;for(let L=0,F=P.length;L<F;L++)P[L]=0}function m(P){p(P,0)}function p(P,L){let F=r.newAttributes,D=r.enabledAttributes,H=r.attributeDivisors;F[P]=1,D[P]===0&&(i.enableVertexAttribArray(P),D[P]=1),H[P]!==L&&(i.vertexAttribDivisor(P,L),H[P]=L)}function M(){let P=r.newAttributes,L=r.enabledAttributes;for(let F=0,D=L.length;F<D;F++)L[F]!==P[F]&&(i.disableVertexAttribArray(F),L[F]=0)}function R(P,L,F,D,H,q,X){X===!0?i.vertexAttribIPointer(P,L,F,H,q):i.vertexAttribPointer(P,L,F,D,H,q)}function v(P,L,F,D){x();let H=D.attributes,q=F.getAttributes(),X=L.defaultAttributeValues;for(let ot in q){let $=q[ot];if($.location>=0){let nt=H[ot];if(nt===void 0&&(ot==="instanceMatrix"&&P.instanceMatrix&&(nt=P.instanceMatrix),ot==="instanceColor"&&P.instanceColor&&(nt=P.instanceColor)),nt!==void 0){let rt=nt.normalized,ft=nt.itemSize,_t=t.get(nt);if(_t===void 0)continue;let Wt=_t.buffer,Ot=_t.type,ee=_t.bytesPerElement,tt=Ot===i.INT||Ot===i.UNSIGNED_INT||nt.gpuType===To;if(nt.isInterleavedBufferAttribute){let at=nt.data,bt=at.stride,Yt=nt.offset;if(at.isInstancedInterleavedBuffer){for(let Pt=0;Pt<$.locationSize;Pt++)p($.location+Pt,at.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Pt=0;Pt<$.locationSize;Pt++)m($.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let Pt=0;Pt<$.locationSize;Pt++)R($.location+Pt,ft/$.locationSize,Ot,rt,bt*ee,(Yt+ft/$.locationSize*Pt)*ee,tt)}else{if(nt.isInstancedBufferAttribute){for(let at=0;at<$.locationSize;at++)p($.location+at,nt.meshPerAttribute);P.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let at=0;at<$.locationSize;at++)m($.location+at);i.bindBuffer(i.ARRAY_BUFFER,Wt);for(let at=0;at<$.locationSize;at++)R($.location+at,ft/$.locationSize,Ot,rt,ft*ee,ft/$.locationSize*at*ee,tt)}}else if(X!==void 0){let rt=X[ot];if(rt!==void 0)switch(rt.length){case 2:i.vertexAttrib2fv($.location,rt);break;case 3:i.vertexAttrib3fv($.location,rt);break;case 4:i.vertexAttrib4fv($.location,rt);break;default:i.vertexAttrib1fv($.location,rt)}}}}M()}function b(){E();for(let P in n){let L=n[P];for(let F in L){let D=L[F];for(let H in D){let q=D[H];for(let X in q)h(q[X].object),delete q[X];delete D[H]}}delete n[P]}}function T(P){if(n[P.id]===void 0)return;let L=n[P.id];for(let F in L){let D=L[F];for(let H in D){let q=D[H];for(let X in q)h(q[X].object),delete q[X];delete D[H]}}delete n[P.id]}function C(P){for(let L in n){let F=n[L];for(let D in F){let H=F[D];if(H[P.id]===void 0)continue;let q=H[P.id];for(let X in q)h(q[X].object),delete q[X];delete H[P.id]}}}function y(P){for(let L in n){let F=n[L],D=P.isInstancedMesh===!0?P.id:0,H=F[D];if(H!==void 0){for(let q in H){let X=H[q];for(let ot in X)h(X[ot].object),delete X[ot];delete H[q]}delete F[D],Object.keys(F).length===0&&delete n[L]}}}function E(){A(),o=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:A,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function ug(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),e.update(l,n,h))}function a(c,l,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function dg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==zn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let y=C===Kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Cn&&C!==$n&&!y&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(jt("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&jt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:R,maxFragmentUniforms:v,maxSamples:b,samples:T}}function fg(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Yn,a=new se,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:n,R=M*4,v=p.clippingState||null;c.value=v,v=h(g,u,R,f);for(let b=0;b!==R;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let R=0,v=f;R!==x;++R,v+=4)o.copy(d[R]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var sr=4,pg=6,mg=20,gg=256,aa=new Qs,Xu=new te,qc=null,Zc=0,Jc=0,$c=!1,_g=new N,xs=new N,dl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=_g}=r;qc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(qc,Zc,Jc),this._renderer.xr.enabled=$c,t.scissorTest=!1,ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qc=this._renderer.getRenderTarget(),Zc=this._renderer.getActiveCubeFace(),Jc=this._renderer.getActiveMipmapLevel(),$c=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Kn,format:zn,colorSpace:Mr,depthBuffer:!1},s=Yu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=xg(r)),this._blurMaterial=vg(r,t,e),this._ggxMaterial=yg(r,t,e)}return s}_compileMaterial(t){let e=new re(new ye,t);this._renderer.compile(e,aa)}_sceneToCubeUV(t,e,n,s,r){let c=new ln(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Xu),d.toneMapping=Zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new re(new be,new We({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,M=t.background;M?M.isColor&&(m.color.copy(M),t.background=null,p=!0):(m.color.copy(Xu),p=!0);for(let R=0;R<6;R++){let v=R%3;v===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[R],r.y,r.z)):v===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[R]));let b=this._cubeSize;ir(s,v*b,R>2?b:0,b,b),d.setRenderTarget(s),p&&d.render(x,c),d.render(t,c)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Zi||t.mapping===ps;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qu());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;ir(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,aa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let c=o.uniforms,l=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(l*l-h*h),u=l*1.25,f=d*u,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-sr?n-g+sr:0),p=4*(this._cubeSize-x);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,ir(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,aa),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-n,ir(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(a,aa)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,c=this._lodMeshes[s];c.material=a;let l=a.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-sr?s-this._lodMax+sr:0),u=4*(this._cubeSize-h);ir(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(c,aa)}};function xg(i){let t=[],e=[],n=i,s=i-sr+1+pg;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),c=-a,l=1+a,h=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,u=6,f=3,g=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let p=0;p<d;p++){let M=p%3*2/3-1,R=p>2?0:-1,v=[M,R,0,M+2/3,R,0,M+2/3,R+1,0,M,R,0,M+2/3,R+1,0,M,R+1,0];g.set(v,f*u*p);for(let b=0;b<u;b++){let T=h[b*2]*2-1,C=h[b*2+1]*2-1;p===0?xs.set(1,C,T):p===1?xs.set(-T,1,-C):p===2?xs.set(-T,C,1):p===3?xs.set(-1,C,-T):p===4?xs.set(-T,-1,C):xs.set(T,C,-1),xs.toArray(x,(p*u+b)*f)}}let m=new ye;m.setAttribute("position",new Pe(g,f)),m.setAttribute("outputDirection",new Pe(x,f)),e.push(new re(m,null)),n>sr&&n--}return{lodMeshes:e,sizeLods:t}}function Yu(i,t,e){let n=new wn(i,t,e);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ir(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function yg(i,t,e){return new sn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ml(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function vg(i,t,e){return new sn({name:"SphericalGaussianBlur",defines:{SAMPLES:mg,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ml(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function qu(){return new sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ml(),fragmentShader:`

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
		`,blending:ci,depthTest:!1,depthWrite:!1})}function Zu(){return new sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ml(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ci,depthTest:!1,depthWrite:!1})}function ml(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var fl=class extends wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Lr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new be(5,5,5),r=new sn({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:ci});r.uniforms.tEquirect.value=e;let o=new re(s,r),a=e.minFilter;return e.minFilter===Rn&&(e.minFilter=Ke),new yo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function Sg(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Mo||f===bo)if(t.has(u)){let g=t.get(u).texture;return a(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new fl(g.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",l),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,g=f===Mo||f===bo,x=f===Zi||f===ps;if(g||x){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new dl(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||x&&M&&c(M)?(n===null&&(n=new dl(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Mo?u.mapping=Zi:f===bo&&(u.mapping=ps),u}function c(u){let f=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function Mg(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ls("WebGLRenderer: "+n+" extension not supported."),s}}}function bg(i,t,e,n){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function c(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function l(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(f!==null){let M=f.array;x=f.version;for(let R=0,v=M.length;R<v;R+=3){let b=M[R+0],T=M[R+1],C=M[R+2];u.push(b,T,T,C,C,b)}}else{let M=g.array;x=g.version;for(let R=0,v=M.length/3-1;R<v;R+=3){let b=R+0,T=R+1,C=R+2;u.push(b,T,T,C,C,b)}}let m=new(g.count>=65535?Pr:Cr)(u,1);m.version=x;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Eg(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,u){i.drawElements(n,u,r,d*o),e.update(u,n,1)}function l(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let m=0;m<f;m++)x+=u[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Tg(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:Qt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function wg(i,t,e){let n=new WeakMap,s=new Be;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let E=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],R=0;f===!0&&(R=1),g===!0&&(R=2),x===!0&&(R=3);let v=a.attributes.position.count*R,b=1;v>t.maxTextureSize&&(b=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*b*4*d),C=new Tr(T,v,b,d);C.type=$n,C.needsUpdate=!0;let y=R*4;for(let A=0;A<d;A++){let P=m[A],L=p[A],F=M[A],D=v*b*4*A;for(let H=0;H<P.count;H++){let q=H*y;f===!0&&(s.fromBufferAttribute(P,H),T[D+q+0]=s.x,T[D+q+1]=s.y,T[D+q+2]=s.z,T[D+q+3]=0),g===!0&&(s.fromBufferAttribute(L,H),T[D+q+4]=s.x,T[D+q+5]=s.y,T[D+q+6]=s.z,T[D+q+7]=0),x===!0&&(s.fromBufferAttribute(F,H),T[D+q+8]=s.x,T[D+q+9]=s.y,T[D+q+10]=s.z,T[D+q+11]=F.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new Ct(v,b)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Ag(i,t,e,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,d=l.geometry,u=t.get(l,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Rg={[vc]:"LINEAR_TONE_MAPPING",[Sc]:"REINHARD_TONE_MAPPING",[Mc]:"CINEON_TONE_MAPPING",[Kr]:"ACES_FILMIC_TONE_MAPPING",[Ec]:"AGX_TONE_MAPPING",[Tc]:"NEUTRAL_TONE_MAPPING",[bc]:"CUSTOM_TONE_MAPPING"};function Cg(i,t,e,n,s,r){let o=new wn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=new ye;l.setAttribute("position",new ce([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ce([0,2,0,0,2,0],2));let h=new ro({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new re(l,h),u=new Qs(-1,1,1,-1,0,1),f=null,g=null,x=!1,m,p=null,M=[],R=!1;this.setSize=function(v,b){o.setSize(v,b),a!==null&&a.setSize(v,b),c!==null&&c.setSize(v,b);for(let T=0;T<M.length;T++){let C=M[T];C.setSize&&C.setSize(v,b)}},this.setEffects=function(v){M=v,R=M.length>0&&M[0].isRenderPass===!0;let b=o.width,T=o.height;M.length>0&&a===null&&(a=new wn(b,T,{type:Kn,depthBuffer:!1,stencilBuffer:!1}),c=new wn(b,T,{type:Kn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<M.length;C++){let y=M[C];y.setSize&&y.setSize(b,T)}},this.begin=function(v,b){if(x||v.toneMapping===Zn&&M.length===0)return!1;if(p=b,b!==null){let T=b.width,C=b.height;(o.width!==T||o.height!==C)&&this.setSize(T,C)}return R===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=Zn,!0},this.hasRenderPass=function(){return R},this.end=function(v,b){v.toneMapping=m,x=!0;let T=o,C=a;for(let y=0;y<M.length;y++){let E=M[y];E.enabled!==!1&&(E.render(v,C,T,b),E.needsSwap!==!1&&(T=C,C=C===a?c:a))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},fe.getTransfer(f)===Se&&(h.defines.SRGB_TRANSFER="");let y=Rg[g];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(p),v.render(d,u),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var pd=new En,Qc=new ki(1,1),md=new Tr,gd=new Ka,_d=new Lr,Ju=[],$u=[],Ku=new Float32Array(16),ju=new Float32Array(9),Qu=new Float32Array(4);function ar(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Ju[s];if(r===void 0&&(r=new Float32Array(s),Ju[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function rn(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function an(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function gl(i,t){let e=$u[t];e===void 0&&(e=new Int32Array(t),$u[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Pg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2fv(this.addr,t),an(e,t)}}function Lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(rn(e,t))return;i.uniform3fv(this.addr,t),an(e,t)}}function Dg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4fv(this.addr,t),an(e,t)}}function Ug(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;Qu.set(n),i.uniformMatrix2fv(this.addr,!1,Qu),an(e,n)}}function Ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;ju.set(n),i.uniformMatrix3fv(this.addr,!1,ju),an(e,n)}}function Fg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(rn(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),an(e,t)}else{if(rn(e,n))return;Ku.set(n),i.uniformMatrix4fv(this.addr,!1,Ku),an(e,n)}}function Bg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2iv(this.addr,t),an(e,t)}}function Hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3iv(this.addr,t),an(e,t)}}function zg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4iv(this.addr,t),an(e,t)}}function kg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(rn(e,t))return;i.uniform2uiv(this.addr,t),an(e,t)}}function Vg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(rn(e,t))return;i.uniform3uiv(this.addr,t),an(e,t)}}function Wg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(rn(e,t))return;i.uniform4uiv(this.addr,t),an(e,t)}}function Xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Qc.compareFunction=e.isReversedDepthBuffer()?cl:ll,r=Qc):r=pd,e.setTexture2D(t||r,s)}function Yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gd,s)}function qg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_d,s)}function Zg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||md,s)}function Jg(i){switch(i){case 5126:return Pg;case 35664:return Ig;case 35665:return Lg;case 35666:return Dg;case 35674:return Ug;case 35675:return Ng;case 35676:return Fg;case 5124:case 35670:return Bg;case 35667:case 35671:return Og;case 35668:case 35672:return Hg;case 35669:case 35673:return zg;case 5125:return kg;case 36294:return Gg;case 36295:return Vg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Zg}}function $g(i,t){i.uniform1fv(this.addr,t)}function Kg(i,t){let e=ar(t,this.size,2);i.uniform2fv(this.addr,e)}function jg(i,t){let e=ar(t,this.size,3);i.uniform3fv(this.addr,e)}function Qg(i,t){let e=ar(t,this.size,4);i.uniform4fv(this.addr,e)}function t_(i,t){let e=ar(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function e_(i,t){let e=ar(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function n_(i,t){let e=ar(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function i_(i,t){i.uniform1iv(this.addr,t)}function s_(i,t){i.uniform2iv(this.addr,t)}function r_(i,t){i.uniform3iv(this.addr,t)}function a_(i,t){i.uniform4iv(this.addr,t)}function o_(i,t){i.uniform1uiv(this.addr,t)}function l_(i,t){i.uniform2uiv(this.addr,t)}function c_(i,t){i.uniform3uiv(this.addr,t)}function h_(i,t){i.uniform4uiv(this.addr,t)}function u_(i,t,e){let n=this.cache,s=t.length,r=gl(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Qc:o=pd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function d_(i,t,e){let n=this.cache,s=t.length,r=gl(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||gd,r[o])}function f_(i,t,e){let n=this.cache,s=t.length,r=gl(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||_d,r[o])}function p_(i,t,e){let n=this.cache,s=t.length,r=gl(e,s);rn(n,r)||(i.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||md,r[o])}function m_(i){switch(i){case 5126:return $g;case 35664:return Kg;case 35665:return jg;case 35666:return Qg;case 35674:return t_;case 35675:return e_;case 35676:return n_;case 5124:case 35670:return i_;case 35667:case 35671:return s_;case 35668:case 35672:return r_;case 35669:case 35673:return a_;case 5125:return o_;case 36294:return l_;case 36295:return c_;case 36296:return h_;case 35678:case 36198:case 36298:case 36306:case 35682:return u_;case 35679:case 36299:case 36307:return d_;case 35680:case 36300:case 36308:case 36293:return f_;case 36289:case 36303:case 36311:case 36292:return p_}}var th=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jg(e.type)}},eh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=m_(e.type)}},nh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Kc=/(\w+)(\])?(\[|\.)?/g;function td(i,t){i.seq.push(t),i.map[t.id]=t}function g_(i,t,e){let n=i.name,s=n.length;for(Kc.lastIndex=0;;){let r=Kc.exec(n),o=Kc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){td(e,l===void 0?new th(a,i,t):new eh(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new nh(a),td(e,d)),e=d}}}var rr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),c=t.getUniformLocation(e,a.name);g_(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function ed(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var __=37297,x_=0;function y_(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var nd=new se;function v_(i){fe._getMatrix(nd,fe.workingColorSpace,i);let t=`mat3( ${nd.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(i)){case br:return[t,"LinearTransferOETF"];case Se:return[t,"sRGBTransferOETF"];default:return jt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function id(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+y_(i.getShaderSource(t),a)}else return r}function S_(i,t){let e=v_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var M_={[vc]:"Linear",[Sc]:"Reinhard",[Mc]:"Cineon",[Kr]:"ACESFilmic",[Ec]:"AgX",[Tc]:"Neutral",[bc]:"Custom"};function b_(i,t){let e=M_[t];return e===void 0?(jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ul=new N;function E_(){fe.getLuminanceCoefficients(ul);let i=ul.x.toFixed(4),t=ul.y.toFixed(4),e=ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function T_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function w_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function A_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function la(i){return i!==""}function sd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var R_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(i){return i.replace(R_,P_)}var C_=new Map;function P_(i,t){let e=le[t];if(e===void 0){let n=C_.get(t);if(n!==void 0)e=le[n],jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ih(e)}var I_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ad(i){return i.replace(I_,L_)}function L_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function od(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var D_={[$r]:"SHADOWMAP_TYPE_PCF",[tr]:"SHADOWMAP_TYPE_VSM"};function U_(i){return D_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var N_={[Zi]:"ENVMAP_TYPE_CUBE",[ps]:"ENVMAP_TYPE_CUBE",[jr]:"ENVMAP_TYPE_CUBE_UV"};function F_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":N_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var B_={[ps]:"ENVMAP_MODE_REFRACTION"};function O_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":B_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var H_={[yc]:"ENVMAP_BLENDING_MULTIPLY",[vu]:"ENVMAP_BLENDING_MIX",[Su]:"ENVMAP_BLENDING_ADD"};function z_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":H_[i.combine]||"ENVMAP_BLENDING_NONE"}function k_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function G_(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=U_(e),l=F_(e),h=O_(e),d=z_(e),u=k_(e),f=T_(e),g=w_(r),x=s.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(la).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(la).join(`
`),p.length>0&&(p+=`
`)):(m=[od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),p=[od(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?le.tonemapping_pars_fragment:"",e.toneMapping!==Zn?b_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,S_("linearToOutputTexel",e.outputColorSpace),E_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(la).join(`
`)),o=ih(o),o=sd(o,e),o=rd(o,e),a=ih(a),a=sd(a,e),a=rd(a,e),o=ad(o),a=ad(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=M+m+o,v=M+p+a,b=ed(s,s.VERTEX_SHADER,R),T=ed(s,s.FRAGMENT_SHADER,v);s.attachShader(x,b),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function C(P){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(x)||"",F=s.getShaderInfoLog(b)||"",D=s.getShaderInfoLog(T)||"",H=L.trim(),q=F.trim(),X=D.trim(),ot=!0,$=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(ot=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,b,T);else{let nt=id(s,b,"vertex"),rt=id(s,T,"fragment");Qt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+nt+`
`+rt)}else H!==""?jt("WebGLProgram: Program Info Log:",H):(q===""||X==="")&&($=!1);$&&(P.diagnostics={runnable:ot,programLog:H,vertexShader:{log:q,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(b),s.deleteShader(T),y=new rr(s,x),E=A_(s,x)}let y;this.getUniforms=function(){return y===void 0&&C(this),y};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(x,__)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=x_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=T,this}var V_=0,sh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rh(t),e.set(t,n)),n}},rh=class{constructor(t){this.id=V_++,this.code=t,this.usedTimes=0}};function W_(i){return i===$i||i===sa||i===ra}function X_(i,t,e,n,s,r){let o=new wr,a=new sh,c=new Set,l=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,E,A,P,L,F){let D=P.fog,H=L.geometry,q=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,ot=t.get(y.envMap||q,X),$=ot&&ot.mapping===jr?ot.image.height:null,nt=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&jt("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let rt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ft=rt!==void 0?rt.length:0,_t=0;H.morphAttributes.position!==void 0&&(_t=1),H.morphAttributes.normal!==void 0&&(_t=2),H.morphAttributes.color!==void 0&&(_t=3);let Wt,Ot,ee,tt;if(nt){let wt=ui[nt];Wt=wt.vertexShader,Ot=wt.fragmentShader}else{Wt=y.vertexShader,Ot=y.fragmentShader;let wt=a.getVertexShaderStage(y),Gt=a.getFragmentShaderStage(y);a.update(y,wt,Gt),ee=wt.id,tt=Gt.id}let at=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),Yt=L.isInstancedMesh===!0,Pt=L.isBatchedMesh===!0,qt=!!y.map,ae=!!y.matcap,O=!!ot,J=!!y.aoMap,j=!!y.lightMap,lt=!!y.bumpMap&&y.wireframe===!1,ct=!!y.normalMap,gt=!!y.displacementMap,Dt=!!y.emissiveMap,Nt=!!y.metalnessMap,yt=!!y.roughnessMap,I=y.anisotropy>0,zt=y.clearcoat>0,kt=y.dispersion>0,w=y.retroreflectivity>0,_=y.iridescence>0,z=y.sheen>0,k=y.transmission>0,Y=I&&!!y.anisotropyMap,dt=zt&&!!y.clearcoatMap,pt=zt&&!!y.clearcoatNormalMap,K=zt&&!!y.clearcoatRoughnessMap,Q=_&&!!y.iridescenceMap,Et=_&&!!y.iridescenceThicknessMap,Bt=z&&!!y.sheenColorMap,Tt=z&&!!y.sheenRoughnessMap,mt=!!y.specularMap,it=!!y.specularColorMap,Zt=!!y.specularIntensityMap,Jt=k&&!!y.transmissionMap,B=k&&!!y.thicknessMap,xt=!!y.gradientMap,st=!!y.alphaMap,ut=y.alphaTest>0,At=!!y.alphaHash,ht=!!y.extensions,G=Zn;y.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(G=i.toneMapping);let et={shaderID:nt,shaderType:y.type,shaderName:y.name,vertexShader:Wt,fragmentShader:Ot,defines:y.defines,customVertexShaderID:ee,customFragmentShaderID:tt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Pt,batchingColor:Pt&&L._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&L.instanceColor!==null,instancingMorph:Yt&&L.morphTexture!==null,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:fe.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:qt,matcap:ae,envMap:O,envMapMode:O&&ot.mapping,envMapCubeUVHeight:$,aoMap:J,lightMap:j,bumpMap:lt,normalMap:ct,displacementMap:gt,emissiveMap:Dt,normalMapObjectSpace:ct&&y.normalMapType===Eu,normalMapTangentSpace:ct&&y.normalMapType===ol,packedNormalMap:ct&&y.normalMapType===ol&&W_(y.normalMap.format),metalnessMap:Nt,roughnessMap:yt,anisotropy:I,anisotropyMap:Y,clearcoat:zt,clearcoatMap:dt,clearcoatNormalMap:pt,clearcoatRoughnessMap:K,dispersion:kt,retroreflection:w,iridescence:_,iridescenceMap:Q,iridescenceThicknessMap:Et,sheen:z,sheenColorMap:Bt,sheenRoughnessMap:Tt,specularMap:mt,specularColorMap:it,specularIntensityMap:Zt,transmission:k,transmissionMap:Jt,thicknessMap:B,gradientMap:xt,opaque:y.transparent===!1&&y.blending===wi&&y.alphaToCoverage===!1,alphaMap:st,alphaTest:ut,alphaHash:At,combine:y.combine,mapUv:qt&&g(y.map.channel),aoMapUv:J&&g(y.aoMap.channel),lightMapUv:j&&g(y.lightMap.channel),bumpMapUv:lt&&g(y.bumpMap.channel),normalMapUv:ct&&g(y.normalMap.channel),displacementMapUv:gt&&g(y.displacementMap.channel),emissiveMapUv:Dt&&g(y.emissiveMap.channel),metalnessMapUv:Nt&&g(y.metalnessMap.channel),roughnessMapUv:yt&&g(y.roughnessMap.channel),anisotropyMapUv:Y&&g(y.anisotropyMap.channel),clearcoatMapUv:dt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:pt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&g(y.sheenRoughnessMap.channel),specularMapUv:mt&&g(y.specularMap.channel),specularColorMapUv:it&&g(y.specularColorMap.channel),specularIntensityMapUv:Zt&&g(y.specularIntensityMap.channel),transmissionMapUv:Jt&&g(y.transmissionMap.channel),thicknessMapUv:B&&g(y.thicknessMap.channel),alphaMapUv:st&&g(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ct||I),vertexNormals:!!H.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!H.attributes.uv&&(qt||st),fog:!!D,useFog:y.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||H.attributes.normal===void 0&&ct===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:bt,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:H.attributes.position!==void 0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:_t,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:G,decodeVideoTexture:qt&&y.map.isVideoTexture===!0&&fe.getTransfer(y.map.colorSpace)===Se,decodeVideoTextureEmissive:Dt&&y.emissiveMap.isVideoTexture===!0&&fe.getTransfer(y.emissiveMap.colorSpace)===Se,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Te,flipSided:y.side===dn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ht&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&y.extensions.multiDraw===!0||Pt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function m(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let A in y.defines)E.push(A),E.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(p(E,y),M(E,y),E.push(i.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function p(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function M(y,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function R(y){let E=f[y.type],A;if(E){let P=ui[E];A=Gu.clone(P.uniforms)}else A=y.uniforms;return A}function v(y,E){let A=h.get(E);return A!==void 0?++A.usedTimes:(A=new G_(i,E,y,s),l.push(A),h.set(E,A)),A}function b(y){if(--y.usedTimes===0){let E=l.indexOf(y);l[E]=l[l.length-1],l.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:R,acquireProgram:v,releaseProgram:b,releaseShaderCache:T,programs:l,dispose:C}}function Y_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function q_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function ld(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function cd(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,g,x,m,p){let M=i[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:m,group:p},i[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=o(u),M.groupOrder=x,M.renderOrder=u.renderOrder,M.z=m,M.group=p),t++,M}function c(u,f,g,x,m,p,M){M.reversedDepth===!0&&(m=-m);let R=a(u,f,g,x,m,p);g.transmission>0?n.push(R):g.transparent===!0?s.push(R):e.push(R)}function l(u,f,g,x,m,p){let M=a(u,f,g,x,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?s.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||q_),n.length>1&&n.sort(f||ld),s.length>1&&s.sort(f||ld)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function Z_(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new cd,i.set(n,[o])):s>=r.length?(o=new cd,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function J_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new N,color:new te};break;case"SpotLight":e={position:new N,direction:new N,color:new te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new te,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new te,groundColor:new te};break;case"RectAreaLight":e={color:new te,position:new N,halfWidth:new N,halfHeight:new N};break}return i[t.id]=e,e}}}function $_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var K_=0;function j_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Q_(i){let t=new J_,e=$_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new Ne,o=new Ne;function a(l){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,M=0,R=0,v=0,b=0,T=0,C=0,y=0,E=0,A=0;l.sort(j_);for(let L=0,F=l.length;L<F;L++){let D=l[L],H=D.color,q=D.intensity,X=D.distance,ot=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===$i?ot=D.shadow.map.texture:ot=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=H.r*q,d+=H.g*q,u+=H.b*q;else if(D.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(D.sh.coefficients[$],q);A++}else if(D.isSunLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let nt=D.shadow,rt=e.get(D);rt.shadowIntensity=nt.intensity,rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),n.sunShadow[g]=rt,n.sunShadowMap[g]=ot;let ft=nt.getViewportCount();for(let _t=0;_t<ft;_t++)n.sunShadowMatrix[x+_t]=nt.getMatrix(_t),n.sunShadowCascade[x+_t]=nt._cascadeData[_t];x+=ft,g++}n.sun[f]=$,f++}else if(D.isDirectionalLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let nt=D.shadow,rt=e.get(D);rt.shadowIntensity=nt.intensity,rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,n.directionalShadow[m]=rt,n.directionalShadowMap[m]=ot,n.directionalShadowMatrix[m]=D.shadow.matrix,b++}n.directional[m]=$,m++}else if(D.isSpotLight){let $=t.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(H).multiplyScalar(q),$.distance=X,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,n.spot[M]=$;let nt=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,nt.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[M]=nt.matrix,D.castShadow){let rt=e.get(D);rt.shadowIntensity=nt.intensity,rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,n.spotShadow[M]=rt,n.spotShadowMap[M]=ot,C++}M++}else if(D.isRectAreaLight){let $=t.get(D);$.color.copy(H).multiplyScalar(q),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),n.rectArea[R]=$,R++}else if(D.isPointLight){let $=t.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){let nt=D.shadow,rt=e.get(D);rt.shadowIntensity=nt.intensity,rt.shadowBias=nt.bias,rt.shadowNormalBias=nt.normalBias,rt.shadowRadius=nt.radius,rt.shadowMapSize=nt.mapSize,rt.shadowCameraNear=nt.camera.near,rt.shadowCameraFar=nt.camera.far,n.pointShadow[p]=rt,n.pointShadowMap[p]=ot,n.pointShadowMatrix[p]=D.shadow.matrix,T++}n.point[p]=$,p++}else if(D.isHemisphereLight){let $=t.get(D);$.skyColor.copy(D.color).multiplyScalar(q),$.groundColor.copy(D.groundColor).multiplyScalar(q),n.hemi[v]=$,v++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Lt.LTC_FLOAT_1,n.rectAreaLTC2=Lt.LTC_FLOAT_2):(n.rectAreaLTC1=Lt.LTC_HALF_1,n.rectAreaLTC2=Lt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let P=n.hash;(P.sunLength!==f||P.directionalLength!==m||P.pointLength!==p||P.spotLength!==M||P.rectAreaLength!==R||P.hemiLength!==v||P.numSunShadows!==g||P.numDirectionalShadows!==b||P.numPointShadows!==T||P.numSpotShadows!==C||P.numSpotMaps!==y||P.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=m,n.spot.length=M,n.rectArea.length=R,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,P.sunLength=f,P.directionalLength=m,P.pointLength=p,P.spotLength=M,P.rectAreaLength=R,P.hemiLength=v,P.numSunShadows=g,P.numDirectionalShadows=b,P.numPointShadows=T,P.numSpotShadows=C,P.numSpotMaps=y,P.numLightProbes=A,n.version=K_++)}function c(l,h){let d=0,u=0,f=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let M=0,R=l.length;M<R;M++){let v=l[M];if(v.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(v.isSpotLight){let b=n.spot[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:a,setupView:c,state:n}}function hd(i){let t=new Q_(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function c(u){s.push(u)}function l(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:c}}function tx(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new hd(i),t.set(s,[a])):r>=o.length?(a=new hd(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nx=`uniform sampler2D shadow_pass;
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
}`,ix=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],sx=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],ud=new Ne,oa=new N,jc=new N;function rx(i,t,e){let n=new Zs,s=new Ct,r=new Ct,o=new Be,a=new ao,c=new oo,l={},h=e.maxTextureSize,d={[qi]:dn,[dn]:qi,[Te]:Te},u=new sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:ex,fragmentShader:nx}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new ye;g.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new re(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$r;let p=this.type;this.render=function(T,C,y){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===eu&&(jt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$r);let E=i.getRenderTarget(),A=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),L=i.state;L.setBlending(ci),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let F=p!==this.type;F&&C.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(H=>H.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,H=T.length;D<H;D++){let q=T[D],X=q.shadow;if(X===void 0){jt("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let ot=X.getFrameExtents();s.multiply(ot),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ot.x),s.x=r.x*ot.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ot.y),s.y=r.y*ot.y,X.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=$,X.map===null||F===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===tr){if(q.isPointLight){jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new wn(s.x,s.y,{format:$i,type:Kn,minFilter:Ke,magFilter:Ke,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new ki(s.x,s.y,$n),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=si,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=cn,X.map.depthTexture.magFilter=cn}else q.isPointLight?(X.map=new fl(s.x),X.map.depthTexture=new Qa(s.x,Jn)):(X.map=new wn(s.x,s.y),X.map.depthTexture=new ki(s.x,s.y,Jn)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=si,this.type===$r?(X.map.depthTexture.compareFunction=$?cl:ll,X.map.depthTexture.minFilter=Ke,X.map.depthTexture.magFilter=Ke):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=cn,X.map.depthTexture.magFilter=cn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let nt=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,y);for(let rt=0;rt<nt;rt++){let ft=X.getCamera(rt);if(q.isPointLight){let _t=X.camera,Wt=X.matrix,Ot=q.distance||_t.far;Ot!==_t.far&&(_t.far=Ot,_t.updateProjectionMatrix()),oa.setFromMatrixPosition(q.matrixWorld),_t.position.copy(oa),jc.copy(_t.position),jc.add(ix[rt]),_t.up.copy(sx[rt]),_t.lookAt(jc),_t.updateMatrixWorld(),Wt.makeTranslation(-oa.x,-oa.y,-oa.z),ud.multiplyMatrices(_t.projectionMatrix,_t.matrixWorldInverse),X._frustum.setFromProjectionMatrix(ud,_t.coordinateSystem,_t.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,rt),i.clear();else{rt===0&&(i.setRenderTarget(X.map),i.clear());let _t=X.getViewport(rt);o.set(r.x*_t.x,r.y*_t.y,r.x*_t.z,r.y*_t.w),L.viewport(o)}n=X.getFrustum(rt),v(C,y,ft,q,this.type)}X.isPointLightShadow!==!0&&this.type===tr&&M(X,y),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(E,A,P)};function M(T,C){let y=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new wn(s.x,s.y,{format:$i,type:Kn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,y,u,x,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,y,f,x,null)}function R(T,C,y,E){let A=null,P=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)A=P;else if(A=y.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let L=A.uuid,F=C.uuid,D=l[L];D===void 0&&(D={},l[L]=D);let H=D[F];H===void 0&&(H=A.clone(),D[F]=H,C.addEventListener("dispose",b)),A=H}if(A.visible=C.visible,A.wireframe=C.wireframe,E===tr?A.side=C.shadowSide!==null?C.shadowSide:C.side:A.side=C.shadowSide!==null?C.shadowSide:d[C.side],A.alphaMap=C.alphaMap,A.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,A.map=C.map,A.clipShadows=C.clipShadows,A.clippingPlanes=C.clippingPlanes,A.clipIntersection=C.clipIntersection,A.displacementMap=C.displacementMap,A.displacementScale=C.displacementScale,A.displacementBias=C.displacementBias,A.wireframeLinewidth=C.wireframeLinewidth,A.linewidth=C.linewidth,y.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let L=i.properties.get(A);L.light=y}return A}function v(T,C,y,E,A){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&A===tr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let F=t.update(T),D=T.material;if(Array.isArray(D)){let H=F.groups;for(let q=0,X=H.length;q<X;q++){let ot=H[q],$=D[ot.materialIndex];if($&&$.visible){let nt=R(T,$,E,A);T.onBeforeShadow(i,T,C,y,F,nt,ot),i.renderBufferDirect(y,null,F,nt,T,ot),T.onAfterShadow(i,T,C,y,F,nt,ot)}}}else if(D.visible){let H=R(T,D,E,A);T.onBeforeShadow(i,T,C,y,F,H,null),i.renderBufferDirect(y,null,F,H,T,null),T.onAfterShadow(i,T,C,y,F,H,null)}}let L=T.children;for(let F=0,D=L.length;F<D;F++)v(L[F],C,y,E,A)}function b(T){T.target.removeEventListener("dispose",b);for(let y in l){let E=l[y],A=T.target.uuid;A in E&&(E[A].dispose(),delete E[A])}}}function ax(i,t){function e(){let B=!1,xt=new Be,st=null,ut=new Be(0,0,0,0);return{setMask:function(At){st!==At&&!B&&(i.colorMask(At,At,At,At),st=At)},setLocked:function(At){B=At},setClear:function(At,ht,G,et,wt){wt===!0&&(At*=et,ht*=et,G*=et),xt.set(At,ht,G,et),ut.equals(xt)===!1&&(i.clearColor(At,ht,G,et),ut.copy(xt))},reset:function(){B=!1,st=null,ut.set(-1,0,0,0)}}}function n(){let B=!1,xt=!1,st=null,ut=null,At=null;return{setReversed:function(ht){if(xt!==ht){let G=t.get("EXT_clip_control");ht?G.clipControlEXT(G.LOWER_LEFT_EXT,G.ZERO_TO_ONE_EXT):G.clipControlEXT(G.LOWER_LEFT_EXT,G.NEGATIVE_ONE_TO_ONE_EXT),xt=ht;let et=At;At=null,this.setClear(et)}},getReversed:function(){return xt},setTest:function(ht){ht?at(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(ht){st!==ht&&!B&&(i.depthMask(ht),st=ht)},setFunc:function(ht){if(xt&&(ht=Fu[ht]),ut!==ht){switch(ht){case za:i.depthFunc(i.NEVER);break;case ka:i.depthFunc(i.ALWAYS);break;case Ga:i.depthFunc(i.LESS);break;case Vs:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case Wa:i.depthFunc(i.GEQUAL);break;case Xa:i.depthFunc(i.GREATER);break;case Ya:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=ht}},setLocked:function(ht){B=ht},setClear:function(ht){At!==ht&&(At=ht,xt&&(ht=1-ht),i.clearDepth(ht))},reset:function(){B=!1,st=null,ut=null,At=null,xt=!1}}}function s(){let B=!1,xt=null,st=null,ut=null,At=null,ht=null,G=null,et=null,wt=null;return{setTest:function(Gt){B||(Gt?at(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function(Gt){xt!==Gt&&!B&&(i.stencilMask(Gt),xt=Gt)},setFunc:function(Gt,pe,we){(st!==Gt||ut!==pe||At!==we)&&(i.stencilFunc(Gt,pe,we),st=Gt,ut=pe,At=we)},setOp:function(Gt,pe,we){(ht!==Gt||G!==pe||et!==we)&&(i.stencilOp(Gt,pe,we),ht=Gt,G=pe,et=we)},setLocked:function(Gt){B=Gt},setClear:function(Gt){wt!==Gt&&(i.clearStencil(Gt),wt=Gt)},reset:function(){B=!1,xt=null,st=null,ut=null,At=null,ht=null,G=null,et=null,wt=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,M=null,R=null,v=null,b=null,T=null,C=null,y=new te(0,0,0),E=0,A=!1,P=null,L=null,F=null,D=null,H=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,ot=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ot=parseFloat(/^WebGL (\d)/.exec($)[1]),X=ot>=1):$.indexOf("OpenGL ES")!==-1&&(ot=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=ot>=2);let nt=null,rt={},ft=i.getParameter(i.SCISSOR_BOX),_t=i.getParameter(i.VIEWPORT),Wt=new Be().fromArray(ft),Ot=new Be().fromArray(_t);function ee(B,xt,st,ut){let At=new Uint8Array(4),ht=i.createTexture();i.bindTexture(B,ht),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let G=0;G<st;G++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(xt+G,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return ht}let tt={};tt[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),at(i.DEPTH_TEST),o.setFunc(Vs),lt(!1),ct(pc),at(i.CULL_FACE),J(ci);function at(B){h[B]!==!0&&(i.enable(B),h[B]=!0)}function bt(B){h[B]!==!1&&(i.disable(B),h[B]=!1)}function Yt(B,xt){return u[B]!==xt?(i.bindFramebuffer(B,xt),u[B]=xt,B===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=xt),B===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function Pt(B,xt){let st=g,ut=!1;if(B){st=f.get(xt),st===void 0&&(st=[],f.set(xt,st));let At=B.textures;if(st.length!==At.length||st[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,G=At.length;ht<G;ht++)st[ht]=i.COLOR_ATTACHMENT0+ht;st.length=At.length,ut=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,ut=!0);ut&&i.drawBuffers(st)}function qt(B){return x!==B?(i.useProgram(B),x=B,!0):!1}let ae={[fs]:i.FUNC_ADD,[iu]:i.FUNC_SUBTRACT,[su]:i.FUNC_REVERSE_SUBTRACT};ae[ru]=i.MIN,ae[au]=i.MAX;let O={[ou]:i.ZERO,[lu]:i.ONE,[cu]:i.SRC_COLOR,[_c]:i.SRC_ALPHA,[mu]:i.SRC_ALPHA_SATURATE,[fu]:i.DST_COLOR,[uu]:i.DST_ALPHA,[hu]:i.ONE_MINUS_SRC_COLOR,[xc]:i.ONE_MINUS_SRC_ALPHA,[pu]:i.ONE_MINUS_DST_COLOR,[du]:i.ONE_MINUS_DST_ALPHA,[gu]:i.CONSTANT_COLOR,[_u]:i.ONE_MINUS_CONSTANT_COLOR,[xu]:i.CONSTANT_ALPHA,[yu]:i.ONE_MINUS_CONSTANT_ALPHA};function J(B,xt,st,ut,At,ht,G,et,wt,Gt){if(B===ci){m===!0&&(bt(i.BLEND),m=!1);return}if(m===!1&&(at(i.BLEND),m=!0),B!==nu){if(B!==p||Gt!==A){if((M!==fs||b!==fs)&&(i.blendEquation(i.FUNC_ADD),M=fs,b=fs),Gt)switch(B){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case An:i.blendFunc(i.ONE,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Qt("WebGLState: Invalid blending: ",B);break}else switch(B){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case An:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case mc:Qt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gc:Qt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Qt("WebGLState: Invalid blending: ",B);break}R=null,v=null,T=null,C=null,y.set(0,0,0),E=0,p=B,A=Gt}return}At=At||xt,ht=ht||st,G=G||ut,(xt!==M||At!==b)&&(i.blendEquationSeparate(ae[xt],ae[At]),M=xt,b=At),(st!==R||ut!==v||ht!==T||G!==C)&&(i.blendFuncSeparate(O[st],O[ut],O[ht],O[G]),R=st,v=ut,T=ht,C=G),(et.equals(y)===!1||wt!==E)&&(i.blendColor(et.r,et.g,et.b,wt),y.copy(et),E=wt),p=B,A=!1}function j(B,xt){B.side===Te?bt(i.CULL_FACE):at(i.CULL_FACE);let st=B.side===dn;xt&&(st=!st),lt(st),B.blending===wi&&B.transparent===!1?J(ci):J(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),r.setMask(B.colorWrite);let ut=B.stencilWrite;a.setTest(ut),ut&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Dt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?at(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(B){P!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),P=B)}function ct(B){B!==Qh?(at(i.CULL_FACE),B!==L&&(B===pc?i.cullFace(i.BACK):B===tu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),L=B}function gt(B){B!==F&&(X&&i.lineWidth(B),F=B)}function Dt(B,xt,st){B?(at(i.POLYGON_OFFSET_FILL),(D!==xt||H!==st)&&(D=xt,H=st,o.getReversed()&&(xt=-xt),i.polygonOffset(xt,st))):bt(i.POLYGON_OFFSET_FILL)}function Nt(B){B?at(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function yt(B){B===void 0&&(B=i.TEXTURE0+q-1),nt!==B&&(i.activeTexture(B),nt=B)}function I(B,xt,st){st===void 0&&(nt===null?st=i.TEXTURE0+q-1:st=nt);let ut=rt[st];ut===void 0&&(ut={type:void 0,texture:void 0},rt[st]=ut),(ut.type!==B||ut.texture!==xt)&&(nt!==st&&(i.activeTexture(st),nt=st),i.bindTexture(B,xt||tt[B]),ut.type=B,ut.texture=xt)}function zt(){let B=rt[nt];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function kt(){try{i.compressedTexImage2D(...arguments)}catch(B){Qt("WebGLState:",B)}}function w(){try{i.compressedTexImage3D(...arguments)}catch(B){Qt("WebGLState:",B)}}function _(){try{i.texSubImage2D(...arguments)}catch(B){Qt("WebGLState:",B)}}function z(){try{i.texSubImage3D(...arguments)}catch(B){Qt("WebGLState:",B)}}function k(){try{i.compressedTexSubImage2D(...arguments)}catch(B){Qt("WebGLState:",B)}}function Y(){try{i.compressedTexSubImage3D(...arguments)}catch(B){Qt("WebGLState:",B)}}function dt(){try{i.texStorage2D(...arguments)}catch(B){Qt("WebGLState:",B)}}function pt(){try{i.texStorage3D(...arguments)}catch(B){Qt("WebGLState:",B)}}function K(){try{i.texImage2D(...arguments)}catch(B){Qt("WebGLState:",B)}}function Q(){try{i.texImage3D(...arguments)}catch(B){Qt("WebGLState:",B)}}function Et(B){return d[B]!==void 0?d[B]:i.getParameter(B)}function Bt(B,xt){d[B]!==xt&&(i.pixelStorei(B,xt),d[B]=xt)}function Tt(B){Wt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Wt.copy(B))}function mt(B){Ot.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Ot.copy(B))}function it(B,xt){let st=l.get(xt);st===void 0&&(st=new WeakMap,l.set(xt,st));let ut=st.get(B);ut===void 0&&(ut=i.getUniformBlockIndex(xt,B.name),st.set(B,ut))}function Zt(B,xt){let ut=l.get(xt).get(B);c.get(xt)!==ut&&(i.uniformBlockBinding(xt,ut,B.__bindingPointIndex),c.set(xt,ut))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},nt=null,rt={},u={},f=new WeakMap,g=[],x=null,m=!1,p=null,M=null,R=null,v=null,b=null,T=null,C=null,y=new te(0,0,0),E=0,A=!1,P=null,L=null,F=null,D=null,H=null,Wt.set(0,0,i.canvas.width,i.canvas.height),Ot.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:at,disable:bt,bindFramebuffer:Yt,drawBuffers:Pt,useProgram:qt,setBlending:J,setMaterial:j,setFlipSided:lt,setCullFace:ct,setLineWidth:gt,setPolygonOffset:Dt,setScissorTest:Nt,activeTexture:yt,bindTexture:I,unbindTexture:zt,compressedTexImage2D:kt,compressedTexImage3D:w,texImage2D:K,texImage3D:Q,pixelStorei:Bt,getParameter:Et,updateUBOMapping:it,uniformBlockBinding:Zt,texStorage2D:dt,texStorage3D:pt,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:k,compressedTexSubImage3D:Y,scissor:Tt,viewport:mt,reset:Jt}}function ox(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ct,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(w,_){return g?new OffscreenCanvas(w,_):Er("canvas")}function m(w,_,z){let k=1,Y=kt(w);if((Y.width>z||Y.height>z)&&(k=z/Math.max(Y.width,Y.height)),k<1)if(typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&w instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&w instanceof ImageBitmap||typeof VideoFrame!="undefined"&&w instanceof VideoFrame){let dt=Math.floor(k*Y.width),pt=Math.floor(k*Y.height);u===void 0&&(u=x(dt,pt));let K=_?x(dt,pt):u;return K.width=dt,K.height=pt,K.getContext("2d").drawImage(w,0,0,dt,pt),jt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+dt+"x"+pt+")."),K}else return"data"in w&&jt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),w;return w}function p(w){return w.generateMipmaps}function M(w){i.generateMipmap(w)}function R(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(w,_,z,k,Y,dt=!1){if(w!==null){if(i[w]!==void 0)return i[w];jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let pt;k&&(pt=t.get("EXT_texture_norm16"),pt||jt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=_;if(_===i.RED&&(z===i.FLOAT&&(K=i.R32F),z===i.HALF_FLOAT&&(K=i.R16F),z===i.UNSIGNED_BYTE&&(K=i.R8),z===i.UNSIGNED_SHORT&&pt&&(K=pt.R16_EXT),z===i.SHORT&&pt&&(K=pt.R16_SNORM_EXT)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.R8UI),z===i.UNSIGNED_SHORT&&(K=i.R16UI),z===i.UNSIGNED_INT&&(K=i.R32UI),z===i.BYTE&&(K=i.R8I),z===i.SHORT&&(K=i.R16I),z===i.INT&&(K=i.R32I)),_===i.RG&&(z===i.FLOAT&&(K=i.RG32F),z===i.HALF_FLOAT&&(K=i.RG16F),z===i.UNSIGNED_BYTE&&(K=i.RG8),z===i.UNSIGNED_SHORT&&pt&&(K=pt.RG16_EXT),z===i.SHORT&&pt&&(K=pt.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RG8UI),z===i.UNSIGNED_SHORT&&(K=i.RG16UI),z===i.UNSIGNED_INT&&(K=i.RG32UI),z===i.BYTE&&(K=i.RG8I),z===i.SHORT&&(K=i.RG16I),z===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGB8UI),z===i.UNSIGNED_SHORT&&(K=i.RGB16UI),z===i.UNSIGNED_INT&&(K=i.RGB32UI),z===i.BYTE&&(K=i.RGB8I),z===i.SHORT&&(K=i.RGB16I),z===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),z===i.UNSIGNED_INT&&(K=i.RGBA32UI),z===i.BYTE&&(K=i.RGBA8I),z===i.SHORT&&(K=i.RGBA16I),z===i.INT&&(K=i.RGBA32I)),_===i.RGB&&(z===i.UNSIGNED_SHORT&&pt&&(K=pt.RGB16_EXT),z===i.SHORT&&pt&&(K=pt.RGB16_SNORM_EXT),z===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),_===i.RGBA){let Q=dt?br:fe.getTransfer(Y);z===i.FLOAT&&(K=i.RGBA32F),z===i.HALF_FLOAT&&(K=i.RGBA16F),z===i.UNSIGNED_BYTE&&(K=Q===Se?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT&&pt&&(K=pt.RGBA16_EXT),z===i.SHORT&&pt&&(K=pt.RGBA16_SNORM_EXT),z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function b(w,_){let z;return w?_===null||_===Jn||_===nr?z=i.DEPTH24_STENCIL8:_===$n?z=i.DEPTH32F_STENCIL8:_===er&&(z=i.DEPTH24_STENCIL8,jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Jn||_===nr?z=i.DEPTH_COMPONENT24:_===$n?z=i.DEPTH_COMPONENT32F:_===er&&(z=i.DEPTH_COMPONENT16),z}function T(w,_){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==cn&&w.minFilter!==Ke?Math.log2(Math.max(_.width,_.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?_.mipmaps.length:1}function C(w){let _=w.target;_.removeEventListener("dispose",C),E(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function y(w){let _=w.target;_.removeEventListener("dispose",y),P(_)}function E(w){let _=n.get(w);if(_.__webglInit===void 0)return;let z=w.source,k=f.get(z);if(k){let Y=k[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&A(w),Object.keys(k).length===0&&f.delete(z)}n.remove(w)}function A(w){let _=n.get(w);i.deleteTexture(_.__webglTexture);let z=w.source,k=f.get(z);delete k[_.__cacheKey],o.memory.textures--}function P(w){let _=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let Y=0;Y<_.__webglFramebuffer[k].length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[k][Y]);else i.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)i.deleteFramebuffer(_.__webglFramebuffer[k]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=w.textures;for(let k=0,Y=z.length;k<Y;k++){let dt=n.get(z[k]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove(z[k])}n.remove(w)}let L=0;function F(){L=0}function D(){return L}function H(w){L=w}function q(){let w=L;return w>=s.maxTextures&&jt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,w}function X(w){let _=[];return _.push(w.wrapS),_.push(w.wrapT),_.push(w.wrapR||0),_.push(w.magFilter),_.push(w.minFilter),_.push(w.anisotropy),_.push(w.internalFormat),_.push(w.format),_.push(w.type),_.push(w.generateMipmaps),_.push(w.premultiplyAlpha),_.push(w.flipY),_.push(w.unpackAlignment),_.push(w.colorSpace),_.join()}function ot(w,_){let z=n.get(w);if(w.isVideoTexture&&I(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){let k=w.image;if(k===null)jt("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)jt("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(z,w,_);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function $(w,_){let z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){bt(z,w,_);return}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function nt(w,_){let z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){bt(z,w,_);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function rt(w,_){let z=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&z.__version!==w.version){Yt(z,w,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}let ft={[ii]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},_t={[cn]:i.NEAREST,[Mu]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[Eo]:i.LINEAR_MIPMAP_NEAREST,[Rn]:i.LINEAR_MIPMAP_LINEAR},Wt={[wu]:i.NEVER,[Iu]:i.ALWAYS,[Au]:i.LESS,[ll]:i.LEQUAL,[Ru]:i.EQUAL,[cl]:i.GEQUAL,[Cu]:i.GREATER,[Pu]:i.NOTEQUAL};function Ot(w,_){if(_.type===$n&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ke||_.magFilter===Eo||_.magFilter===Qr||_.magFilter===Rn||_.minFilter===Ke||_.minFilter===Eo||_.minFilter===Qr||_.minFilter===Rn)&&jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,ft[_.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,ft[_.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,ft[_.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,_t[_.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,_t[_.minFilter]),_.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Wt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===cn||_.minFilter!==Qr&&_.minFilter!==Rn||_.type===$n&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ee(w,_){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,_.addEventListener("dispose",C));let k=_.source,Y=f.get(k);Y===void 0&&(Y={},f.set(k,Y));let dt=X(_);if(dt!==w.__cacheKey){Y[dt]===void 0&&(Y[dt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Y[dt].usedTimes++;let pt=Y[w.__cacheKey];pt!==void 0&&(Y[w.__cacheKey].usedTimes--,pt.usedTimes===0&&A(_)),w.__cacheKey=dt,w.__webglTexture=Y[dt].texture}return z}function tt(w,_,z){return Math.floor(Math.floor(w/z)/_)}function at(w,_,z,k){let dt=w.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,z,k,_.data);else{dt.sort((Bt,Tt)=>Bt.start-Tt.start);let pt=0;for(let Bt=1;Bt<dt.length;Bt++){let Tt=dt[pt],mt=dt[Bt],it=Tt.start+Tt.count,Zt=tt(mt.start,_.width,4),Jt=tt(Tt.start,_.width,4);mt.start<=it+1&&Zt===Jt&&tt(mt.start+mt.count-1,_.width,4)===Zt?Tt.count=Math.max(Tt.count,mt.start+mt.count-Tt.start):(++pt,dt[pt]=mt)}dt.length=pt+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),Q=e.getParameter(i.UNPACK_SKIP_PIXELS),Et=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let Bt=0,Tt=dt.length;Bt<Tt;Bt++){let mt=dt[Bt],it=Math.floor(mt.start/4),Zt=Math.ceil(mt.count/4),Jt=it%_.width,B=Math.floor(it/_.width),xt=Zt,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,Jt,B,xt,st,z,k,_.data)}w.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,Q),e.pixelStorei(i.UNPACK_SKIP_ROWS,Et)}}function bt(w,_,z){let k=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=i.TEXTURE_3D);let Y=ee(w,_),dt=_.source;e.bindTexture(k,w.__webglTexture,i.TEXTURE0+z);let pt=n.get(dt);if(dt.version!==pt.__version||Y===!0){if(e.activeTexture(i.TEXTURE0+z),(typeof ImageBitmap!="undefined"&&_.image instanceof ImageBitmap)===!1){let st=fe.getPrimaries(fe.workingColorSpace),ut=_.colorSpace===Ai?null:fe.getPrimaries(_.colorSpace),At=_.colorSpace===Ai||st===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let Q=m(_.image,!1,s.maxTextureSize);Q=zt(_,Q);let Et=r.convert(_.format,_.colorSpace),Bt=r.convert(_.type),Tt=v(_.internalFormat,Et,Bt,_.normalized,_.colorSpace,_.isVideoTexture);Ot(k,_);let mt,it=_.mipmaps,Zt=_.isVideoTexture!==!0,Jt=pt.__version===void 0||Y===!0,B=dt.dataReady,xt=T(_,Q);if(_.isDepthTexture)Tt=b(_.format===Ji,_.type),Jt&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Tt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Tt,Q.width,Q.height,0,Et,Bt,null));else if(_.isDataTexture)if(it.length>0){Zt&&Jt&&e.texStorage2D(i.TEXTURE_2D,xt,Tt,it[0].width,it[0].height);for(let st=0,ut=it.length;st<ut;st++)mt=it[st],Zt?B&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,mt.width,mt.height,Et,Bt,mt.data):e.texImage2D(i.TEXTURE_2D,st,Tt,mt.width,mt.height,0,Et,Bt,mt.data);_.generateMipmaps=!1}else Zt?(Jt&&e.texStorage2D(i.TEXTURE_2D,xt,Tt,Q.width,Q.height),B&&at(_,Q,Et,Bt)):e.texImage2D(i.TEXTURE_2D,0,Tt,Q.width,Q.height,0,Et,Bt,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Zt&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Tt,it[0].width,it[0].height,Q.depth);for(let st=0,ut=it.length;st<ut;st++)if(mt=it[st],_.format!==zn)if(Et!==null)if(Zt){if(B)if(_.layerUpdates.size>0){let At=kc(mt.width,mt.height,_.format,_.type);for(let ht of _.layerUpdates){let G=mt.data.subarray(ht*At/mt.data.BYTES_PER_ELEMENT,(ht+1)*At/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,ht,mt.width,mt.height,1,Et,G)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,mt.width,mt.height,Q.depth,Et,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Tt,mt.width,mt.height,Q.depth,0,mt.data,0,0);else jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,mt.width,mt.height,Q.depth,Et,Bt,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Tt,mt.width,mt.height,Q.depth,0,Et,Bt,mt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Zt&&Jt&&e.texStorage2D(i.TEXTURE_2D,xt,Tt,it[0].width,it[0].height);for(let st=0,ut=it.length;st<ut;st++)mt=it[st],_.format!==zn?Et!==null?Zt?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,mt.width,mt.height,Et,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Tt,mt.width,mt.height,0,mt.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?B&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,mt.width,mt.height,Et,Bt,mt.data):e.texImage2D(i.TEXTURE_2D,st,Tt,mt.width,mt.height,0,Et,Bt,mt.data)}else if(_.isDataArrayTexture)if(Zt){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,Tt,Q.width,Q.height,Q.depth),B)if(_.layerUpdates.size>0){let st=kc(Q.width,Q.height,_.format,_.type);for(let ut of _.layerUpdates){let At=Q.data.subarray(ut*st/Q.data.BYTES_PER_ELEMENT,(ut+1)*st/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ut,Q.width,Q.height,1,Et,Bt,At)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Et,Bt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,Q.width,Q.height,Q.depth,0,Et,Bt,Q.data);else if(_.isData3DTexture)Zt?(Jt&&e.texStorage3D(i.TEXTURE_3D,xt,Tt,Q.width,Q.height,Q.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Et,Bt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,Q.width,Q.height,Q.depth,0,Et,Bt,Q.data);else if(_.isFramebufferTexture){if(Jt)if(Zt)e.texStorage2D(i.TEXTURE_2D,xt,Tt,Q.width,Q.height);else{let st=Q.width,ut=Q.height;for(let At=0;At<xt;At++)e.texImage2D(i.TEXTURE_2D,At,Tt,st,ut,0,Et,Bt,null),st>>=1,ut>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),Q.parentNode!==st){st.appendChild(Q),d.add(_),st.onpaint=ut=>{let At=ut.changedElements;for(let ht of d)At.includes(ht.image)&&(ht.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Q);else{let At=i.RGBA,ht=i.RGBA,G=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,At,ht,G,Q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(it.length>0){if(Zt&&Jt){let st=kt(it[0]);e.texStorage2D(i.TEXTURE_2D,xt,Tt,st.width,st.height)}for(let st=0,ut=it.length;st<ut;st++)mt=it[st],Zt?B&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Et,Bt,mt):e.texImage2D(i.TEXTURE_2D,st,Tt,Et,Bt,mt);_.generateMipmaps=!1}else if(Zt){if(Jt){let st=kt(Q);e.texStorage2D(i.TEXTURE_2D,xt,Tt,st.width,st.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Bt,Q)}else e.texImage2D(i.TEXTURE_2D,0,Tt,Et,Bt,Q);p(_)&&M(k),pt.__version=dt.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Yt(w,_,z){if(_.image.length!==6)return;let k=ee(w,_),Y=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);let dt=n.get(Y);if(Y.version!==dt.__version||k===!0){e.activeTexture(i.TEXTURE0+z);let pt=fe.getPrimaries(fe.workingColorSpace),K=_.colorSpace===Ai?null:fe.getPrimaries(_.colorSpace),Q=_.colorSpace===Ai||pt===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);let Et=_.isCompressedTexture||_.image[0].isCompressedTexture,Bt=_.image[0]&&_.image[0].isDataTexture,Tt=[];for(let ht=0;ht<6;ht++)!Et&&!Bt?Tt[ht]=m(_.image[ht],!0,s.maxCubemapSize):Tt[ht]=Bt?_.image[ht].image:_.image[ht],Tt[ht]=zt(_,Tt[ht]);let mt=Tt[0],it=r.convert(_.format,_.colorSpace),Zt=r.convert(_.type),Jt=v(_.internalFormat,it,Zt,_.normalized,_.colorSpace),B=_.isVideoTexture!==!0,xt=dt.__version===void 0||k===!0,st=Y.dataReady,ut=T(_,mt);Ot(i.TEXTURE_CUBE_MAP,_);let At;if(Et){B&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Jt,mt.width,mt.height);for(let ht=0;ht<6;ht++){At=Tt[ht].mipmaps;for(let G=0;G<At.length;G++){let et=At[G];_.format!==zn?it!==null?B?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,G,0,0,et.width,et.height,it,et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,G,Jt,et.width,et.height,0,et.data):jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,G,0,0,et.width,et.height,it,Zt,et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,G,Jt,et.width,et.height,0,it,Zt,et.data)}}}else{if(At=_.mipmaps,B&&xt){At.length>0&&ut++;let ht=kt(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,Jt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Bt){B?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Tt[ht].width,Tt[ht].height,it,Zt,Tt[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Jt,Tt[ht].width,Tt[ht].height,0,it,Zt,Tt[ht].data);for(let G=0;G<At.length;G++){let wt=At[G].image[ht].image;B?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,G+1,0,0,wt.width,wt.height,it,Zt,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,G+1,Jt,wt.width,wt.height,0,it,Zt,wt.data)}}else{B?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,it,Zt,Tt[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Jt,it,Zt,Tt[ht]);for(let G=0;G<At.length;G++){let et=At[G];B?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,G+1,0,0,it,Zt,et.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,G+1,Jt,it,Zt,et.image[ht])}}}p(_)&&M(i.TEXTURE_CUBE_MAP),dt.__version=Y.version,_.onUpdate&&_.onUpdate(_)}w.__version=_.version}function Pt(w,_,z,k,Y,dt){let pt=r.convert(z.format,z.colorSpace),K=r.convert(z.type),Q=v(z.internalFormat,pt,K,z.normalized,z.colorSpace),Et=n.get(_),Bt=n.get(z);if(Bt.__renderTarget=_,!Et.__hasExternalTextures){let Tt=Math.max(1,_.width>>dt),mt=Math.max(1,_.height>>dt);Y===i.TEXTURE_3D||Y===i.TEXTURE_2D_ARRAY?e.texImage3D(Y,dt,Q,Tt,mt,_.depth,0,pt,K,null):e.texImage2D(Y,dt,Q,Tt,mt,0,pt,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),yt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,k,Y,Bt.__webglTexture,0,Nt(_)):(Y===i.TEXTURE_2D||Y>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,k,Y,Bt.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(w,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),_.depthBuffer){let k=_.depthTexture,Y=k&&k.isDepthTexture?k.type:null,dt=b(_.stencilBuffer,Y),pt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;yt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt(_),dt,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt(_),dt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,dt,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,w)}else{let k=_.textures;for(let Y=0;Y<k.length;Y++){let dt=k[Y],pt=r.convert(dt.format,dt.colorSpace),K=r.convert(dt.type),Q=v(dt.internalFormat,pt,K,dt.normalized,dt.colorSpace);yt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt(_),Q,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt(_),Q,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Q,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ae(w,_,z){let k=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=n.get(_.depthTexture);if(Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),Y.__webglTexture===void 0){Y.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,_.depthTexture);let Et=r.convert(_.depthTexture.format),Bt=r.convert(_.depthTexture.type),Tt;_.depthTexture.format===si?Tt=i.DEPTH_COMPONENT24:_.depthTexture.format===Ji&&(Tt=i.DEPTH24_STENCIL8);for(let mt=0;mt<6;mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,Tt,_.width,_.height,0,Et,Bt,null)}}else ot(_.depthTexture,0);let dt=Y.__webglTexture,pt=Nt(_),K=k?i.TEXTURE_CUBE_MAP_POSITIVE_X+z:i.TEXTURE_2D,Q=_.depthTexture.format===Ji?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===si)yt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,dt,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,dt,0);else if(_.depthTexture.format===Ji)yt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,K,dt,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,Q,K,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function O(w){let _=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==w.depthTexture){let k=w.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){let Y=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",Y)};k.addEventListener("dispose",Y),_.__depthDisposeCallback=Y}_.__boundDepthTexture=k}if(w.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let k=0;k<6;k++)ae(_.__webglFramebuffer[k],w,k);else{let k=w.texture.mipmaps;k&&k.length>0?ae(_.__webglFramebuffer[0],w,0):ae(_.__webglFramebuffer,w,0)}else if(z){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=i.createRenderbuffer(),qt(_.__webglDepthbuffer[k],w,!1);else{let Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=_.__webglDepthbuffer[k];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,dt)}}else{let k=w.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),qt(_.__webglDepthbuffer,w,!1);else{let Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function J(w,_,z){let k=n.get(w);_!==void 0&&Pt(k.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&O(w)}function j(w){let _=w.texture,z=n.get(w),k=n.get(_);w.addEventListener("dispose",y);let Y=w.textures,dt=w.isWebGLCubeRenderTarget===!0,pt=Y.length>1;if(pt||(k.__webglTexture===void 0&&(k.__webglTexture=i.createTexture()),k.__version=_.version,o.memory.textures++),dt){z.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[K]=[];for(let Q=0;Q<_.mipmaps.length;Q++)z.__webglFramebuffer[K][Q]=i.createFramebuffer()}else z.__webglFramebuffer[K]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)z.__webglFramebuffer[K]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(pt)for(let K=0,Q=Y.length;K<Q;K++){let Et=n.get(Y[K]);Et.__webglTexture===void 0&&(Et.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&yt(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let K=0;K<Y.length;K++){let Q=Y[K];z.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[K]);let Et=r.convert(Q.format,Q.colorSpace),Bt=r.convert(Q.type),Tt=v(Q.internalFormat,Et,Bt,Q.normalized,Q.colorSpace,w.isXRRenderTarget===!0),mt=Nt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,Tt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,z.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),qt(z.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)Pt(z.__webglFramebuffer[K][Q],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,Q);else Pt(z.__webglFramebuffer[K],w,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(_)&&M(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let K=0,Q=Y.length;K<Q;K++){let Et=Y[K],Bt=n.get(Et),Tt=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Tt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,Bt.__webglTexture),Ot(Tt,Et),Pt(z.__webglFramebuffer,w,Et,i.COLOR_ATTACHMENT0+K,Tt,0),p(Et)&&M(Tt)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(K=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,k.__webglTexture),Ot(K,_),_.mipmaps&&_.mipmaps.length>0)for(let Q=0;Q<_.mipmaps.length;Q++)Pt(z.__webglFramebuffer[Q],w,_,i.COLOR_ATTACHMENT0,K,Q);else Pt(z.__webglFramebuffer,w,_,i.COLOR_ATTACHMENT0,K,0);p(_)&&M(K),e.unbindTexture()}w.depthBuffer&&O(w)}function lt(w){let _=w.textures;for(let z=0,k=_.length;z<k;z++){let Y=_[z];if(p(Y)){let dt=R(w),pt=n.get(Y).__webglTexture;e.bindTexture(dt,pt),M(dt),e.unbindTexture()}}}let ct=[],gt=[];function Dt(w){if(w.samples>0){if(yt(w)===!1){let _=w.textures,z=w.width,k=w.height,Y=i.COLOR_BUFFER_BIT,dt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(w),K=_.length>1;if(K)for(let Et=0;Et<_.length;Et++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);let Q=w.texture.mipmaps;Q&&Q.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let Et=0;Et<_.length;Et++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Y|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Y|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[Et]);let Bt=n.get(_[Et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Bt,0)}i.blitFramebuffer(0,0,z,k,0,0,z,k,Y,i.NEAREST),c===!0&&(ct.length=0,gt.length=0,ct.push(i.COLOR_ATTACHMENT0+Et),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(ct.push(dt),gt.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let Et=0;Et<_.length;Et++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,pt.__webglColorRenderbuffer[Et]);let Bt=n.get(_[Et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,Bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let _=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Nt(w){return Math.min(s.maxSamples,w.samples)}function yt(w){let _=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function I(w){let _=o.render.frame;h.get(w)!==_&&(h.set(w,_),w.update())}function zt(w,_){let z=w.colorSpace,k=w.format,Y=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==Mr&&z!==Ai&&(fe.getTransfer(z)===Se?(k!==zn||Y!==Cn)&&jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Qt("WebGLTextures: Unsupported texture color space:",z)),_}function kt(w){return typeof HTMLImageElement!="undefined"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame!="undefined"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=F,this.getTextureUnits=D,this.setTextureUnits=H,this.setTexture2D=ot,this.setTexture2DArray=$,this.setTexture3D=nt,this.setTextureCube=rt,this.rebindTextures=J,this.setupRenderTarget=j,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=O,this.setupFrameBufferTexture=Pt,this.useMultisampledRTT=yt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function lx(i,t){function e(n,s=Ai){let r,o=fe.getTransfer(s);if(n===Cn)return i.UNSIGNED_BYTE;if(n===wo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ao)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ac)return i.BYTE;if(n===Rc)return i.SHORT;if(n===er)return i.UNSIGNED_SHORT;if(n===To)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===Kn)return i.HALF_FLOAT;if(n===Ic)return i.ALPHA;if(n===Lc)return i.RGB;if(n===zn)return i.RGBA;if(n===si)return i.DEPTH_COMPONENT;if(n===Ji)return i.DEPTH_STENCIL;if(n===Dc)return i.RED;if(n===Ro)return i.RED_INTEGER;if(n===$i)return i.RG;if(n===Co)return i.RG_INTEGER;if(n===Po)return i.RGBA_INTEGER;if(n===ta||n===ea||n===na||n===ia)if(o===Se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Io||n===Lo||n===Do||n===Uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Io)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===No||n===Fo||n===Bo||n===Oo||n===Ho||n===sa||n===zo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===No||n===Fo)return o===Se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bo)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Oo)return r.COMPRESSED_R11_EAC;if(n===Ho)return r.COMPRESSED_SIGNED_R11_EAC;if(n===sa)return r.COMPRESSED_RG11_EAC;if(n===zo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ko||n===Go||n===Vo||n===Wo||n===Xo||n===Yo||n===qo||n===Zo||n===Jo||n===$o||n===Ko||n===jo||n===Qo||n===tl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ko)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Go)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vo)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wo)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xo)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Yo)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qo)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zo)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$o)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ko)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jo)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qo)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tl)return o===Se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===el||n===nl||n===il)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===el)return o===Se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===nl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sl||n===rl||n===ra||n===al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===sl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===rl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var cx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hx=`
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

}`,ah=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Dr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new sn({vertexShader:cx,fragmentShader:hx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new re(new Ee(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oh=class extends ri{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,x=typeof XRWebGLBinding!="undefined",m=new ah,p={},M=e.getContextAttributes(),R=null,v=null,b=[],T=[],C=new Ct,y=null,E=null,A=new ln;A.viewport=new Be;let P=new ln;P.viewport=new Be;let L=[A,P],F=new vo,D=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let at=b[tt];return at===void 0&&(at=new qs,b[tt]=at),at.getTargetRaySpace()},this.getControllerGrip=function(tt){let at=b[tt];return at===void 0&&(at=new qs,b[tt]=at),at.getGripSpace()},this.getHand=function(tt){let at=b[tt];return at===void 0&&(at=new qs,b[tt]=at),at.getHandSpace()};function q(tt){let at=T.indexOf(tt.inputSource);if(at===-1)return;let bt=b[at];bt!==void 0&&(bt.update(tt.inputSource,tt.frame,l||o),bt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function X(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",ot);for(let tt=0;tt<b.length;tt++){let at=T[tt];at!==null&&(T[tt]=null,b[tt].disconnect(at))}D=null,H=null,m.reset();for(let tt in p)delete p[tt];if(t.setRenderTarget(R),f=null,u=null,d=null,s=null,v=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(C.width,C.height,!1),E!==null){let tt=E.camera;tt.fov=E.fov,tt.zoom=E.zoom,tt.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,n.isPresenting===!0&&jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(tt){l=tt},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",X),s.addEventListener("inputsourceschange",ot),M.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Yt=null,Pt=null;M.depth&&(Pt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=M.stencil?Ji:si,Yt=M.stencil?nr:Jn);let qt={colorFormat:e.RGBA8,depthFormat:Pt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(qt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new wn(u.textureWidth,u.textureHeight,{format:zn,type:Cn,depthTexture:new ki(u.textureWidth,u.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let bt={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new wn(f.framebufferWidth,f.framebufferHeight,{format:zn,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ot(tt){for(let at=0;at<tt.removed.length;at++){let bt=tt.removed[at],Yt=T.indexOf(bt);Yt>=0&&(T[Yt]=null,b[Yt].disconnect(bt))}for(let at=0;at<tt.added.length;at++){let bt=tt.added[at],Yt=T.indexOf(bt);if(Yt===-1){for(let qt=0;qt<b.length;qt++)if(qt>=T.length){T.push(bt),Yt=qt;break}else if(T[qt]===null){T[qt]=bt,Yt=qt;break}if(Yt===-1)break}let Pt=b[Yt];Pt&&Pt.connect(bt)}}let $=new N,nt=new N;function rt(tt,at,bt){$.setFromMatrixPosition(at.matrixWorld),nt.setFromMatrixPosition(bt.matrixWorld);let Yt=$.distanceTo(nt),Pt=at.projectionMatrix.elements,qt=bt.projectionMatrix.elements,ae=Pt[14]/(Pt[10]-1),O=Pt[14]/(Pt[10]+1),J=(Pt[9]+1)/Pt[5],j=(Pt[9]-1)/Pt[5],lt=(Pt[8]-1)/Pt[0],ct=(qt[8]+1)/qt[0],gt=ae*lt,Dt=ae*ct,Nt=Yt/(-lt+ct),yt=Nt*-lt;if(at.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(yt),tt.translateZ(Nt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Pt[10]===-1)tt.projectionMatrix.copy(at.projectionMatrix),tt.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let I=ae+Nt,zt=O+Nt,kt=gt-yt,w=Dt+(Yt-yt),_=J*O/zt*I,z=j*O/zt*I;tt.projectionMatrix.makePerspective(kt,w,_,z,I,zt),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function ft(tt,at){at===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(at.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let at=tt.near,bt=tt.far;m.texture!==null&&(m.depthNear>0&&(at=m.depthNear),m.depthFar>0&&(bt=m.depthFar)),F.near=P.near=A.near=at,F.far=P.far=A.far=bt,(D!==F.near||H!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),D=F.near,H=F.far),F.layers.mask=tt.layers.mask|6,A.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;let Yt=tt.parent,Pt=F.cameras;ft(F,Yt);for(let qt=0;qt<Pt.length;qt++)ft(Pt[qt],Yt);Pt.length===2?rt(F,A,P):F.projectionMatrix.copy(A.projectionMatrix),E===null&&tt.isPerspectiveCamera&&(E={camera:tt,fov:tt.fov,zoom:tt.zoom}),_t(tt,F,Yt)};function _t(tt,at,bt){bt===null?tt.matrix.copy(at.matrixWorld):(tt.matrix.copy(bt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(at.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(at.projectionMatrix),tt.projectionMatrixInverse.copy(at.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=cs*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(tt){c=tt,u!==null&&(u.fixedFoveation=tt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=tt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(tt){return p[tt]};let Wt=null;function Ot(tt,at){if(h=at.getViewerPose(l||o),g=at,h!==null){let bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Yt=!1;bt.length!==F.cameras.length&&(F.cameras.length=0,Yt=!0);for(let O=0;O<bt.length;O++){let J=bt[O],j=null;if(f!==null)j=f.getViewport(J);else{let ct=d.getViewSubImage(u,J);j=ct.viewport,O===0&&(t.setRenderTargetTextures(v,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(v))}let lt=L[O];lt===void 0&&(lt=new ln,lt.layers.enable(O),lt.viewport=new Be,L[O]=lt),lt.matrix.fromArray(J.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(J.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(j.x,j.y,j.width,j.height),O===0&&(F.matrix.copy(lt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Yt===!0&&F.cameras.push(lt)}let Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let O=d.getDepthInformation(bt[0]);O&&O.isValid&&O.texture&&m.init(O,s.renderState)}if(Pt&&Pt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let O=0;O<bt.length;O++){let J=bt[O].camera;if(J){let j=p[J];j||(j=new Dr,p[J]=j);let lt=d.getCameraImage(J);j.sourceTexture=lt}}}}for(let bt=0;bt<b.length;bt++){let Yt=T[bt],Pt=b[bt];Yt!==null&&Pt!==void 0&&Pt.update(Yt,at,l||o)}Wt&&Wt(tt,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),g=null}let ee=new dd;ee.setAnimationLoop(Ot),this.setAnimationLoop=function(tt){Wt=tt},this.dispose=function(){}}},ux=new Ne,xd=new se;xd.set(-1,0,0,0,1,0,0,0,1);function dx(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Oc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,R,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,M,R):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===dn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===dn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),R=M.envMap,v=M.envMapRotation;R&&(m.envMap.value=R,m.envMapRotation.value.setFromMatrix4(ux.makeRotationFromEuler(v)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(xd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,R){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=R*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fx(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,b){let T=b.program;n.uniformBlockBinding(v,T)}function l(v,b){let T=s[v.id];T===void 0&&(m(v),T=h(v),s[v.id]=T,v.addEventListener("dispose",M));let C=b.program;n.updateUBOMapping(v,C);let y=t.render.frame;r[v.id]!==y&&(u(v),r[v.id]=y)}function h(v){let b=d();v.__bindingPointIndex=b;let T=i.createBuffer(),C=v.__size,y=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,C,y),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,T),T}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Qt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let b=s[v.id],T=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let y=0,E=T.length;y<E;y++){let A=T[y];if(Array.isArray(A))for(let P=0,L=A.length;P<L;P++)f(A[P],y,P,C);else f(A,y,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,b,T,C){if(x(v,b,T,C)===!0){let y=v.__offset,E=v.value;if(Array.isArray(E)){let A=0;for(let P=0;P<E.length;P++){let L=E[P],F=p(L);g(L,v.__data,A),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(A+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(E,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,y,v.__data)}}function g(v,b,T){typeof v=="number"||typeof v=="boolean"?b[0]=v:v.isMatrix3?(b[0]=v.elements[0],b[1]=v.elements[1],b[2]=v.elements[2],b[3]=0,b[4]=v.elements[3],b[5]=v.elements[4],b[6]=v.elements[5],b[7]=0,b[8]=v.elements[6],b[9]=v.elements[7],b[10]=v.elements[8],b[11]=0):ArrayBuffer.isView(v)?b.set(new v.constructor(v.buffer,v.byteOffset,b.length)):v.toArray(b,T)}function x(v,b,T,C){let y=v.value,E=b+"_"+T;if(C[E]===void 0)return typeof y=="number"||typeof y=="boolean"?C[E]=y:ArrayBuffer.isView(y)?C[E]=y.slice():C[E]=y.clone(),!0;{let A=C[E];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return C[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function m(v){let b=v.uniforms,T=0,C=16;for(let E=0,A=b.length;E<A;E++){let P=Array.isArray(b[E])?b[E]:[b[E]];for(let L=0,F=P.length;L<F;L++){let D=P[L],H=Array.isArray(D.value)?D.value:[D.value];for(let q=0,X=H.length;q<X;q++){let ot=H[q],$=p(ot),nt=T%C,rt=nt%$.boundary,ft=nt+rt;T+=rt,ft!==0&&C-ft<$.storage&&(T+=C-ft),D.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=T,T+=$.storage}}}let y=T%C;return y>0&&(T+=C-y),v.__size=T,v.__cache={},this}function p(v){let b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=48,b.storage=48):v.isMatrix4?(b.boundary=64,b.storage=64):v.isTexture?jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):jt("WebGLRenderer: Unsupported uniform value type.",v),b}function M(v){let b=v.target;b.removeEventListener("dispose",M);let T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function R(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:c,update:l,dispose:R}}var px=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),hi=null;function mx(){return hi===null&&(hi=new ja(px,16,16,$i,Kn),hi.name="DFG_LUT",hi.minFilter=Ke,hi.magFilter=Ke,hi.wrapS=ni,hi.wrapT=ni,hi.generateMipmaps=!1,hi.needsUpdate=!0),hi}var pl=class{constructor(t={}){let{canvas:e=Du(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Cn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=f,m=new Set([Po,Co,Ro]),p=new Set([Cn,Jn,er,nr,wo,Ao]),M=new Uint32Array(4),R=new Int32Array(4),v=new N,b=null,T=null,C=[],y=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,P=!1,L=null,F=null,D=null,H=null;this._outputColorSpace=Ge;let q=0,X=0,ot=null,$=-1,nt=null,rt=new Be,ft=new Be,_t=null,Wt=new te(0),Ot=0,ee=e.width,tt=e.height,at=1,bt=null,Yt=null,Pt=new Be(0,0,ee,tt),qt=new Be(0,0,ee,tt),ae=!1,O=new Zs,J=!1,j=!1,lt=new Ne,ct=new N,gt=new Be,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Nt=!1;function yt(){return ot===null?at:1}let I=n;function zt(S,U){return e.getContext(S,U)}let kt,w,_,z,k,Y,dt,pt,K,Q,Et,Bt,Tt,mt,it,Zt,Jt,B,xt,st,ut,At,ht;try{let S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",wt,!1),e.addEventListener("webglcontextrestored",Gt,!1),e.addEventListener("webglcontextcreationerror",pe,!1),I===null){let U="webgl2";if(I=zt(U,S),I===null)throw zt(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}G()}catch(S){throw e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",pe,!1),Qt("WebGLRenderer: "+S.message),S}function G(){kt=new Mg(I),kt.init(),ut=new lx(I,kt),w=new dg(I,kt,t,ut),_=new ax(I,kt),w.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),F=I.createFramebuffer(),D=I.createFramebuffer(),H=I.createFramebuffer(),z=new Tg(I),k=new Y_,Y=new ox(I,kt,_,k,w,ut,z),dt=new Sg(A),pt=new Ap(I),At=new hg(I,pt),K=new bg(I,pt,z,At),Q=new Ag(I,K,pt,At,z),B=new wg(I,w,Y),it=new fg(k),Et=new X_(A,dt,kt,w,At,it),Bt=new dx(A,k),Tt=new Z_,mt=new tx(kt),Jt=new cg(A,dt,_,Q,g,c),Zt=new rx(A,Q,w),ht=new fx(I,z,w,_),xt=new ug(I,kt,z),st=new Eg(I,kt,z),z.programs=Et.programs,A.capabilities=w,A.extensions=kt,A.properties=k,A.renderLists=Tt,A.shadowMap=Zt,A.state=_,A.info=z}x!==Cn&&(E=new Cg(x,e.width,e.height,a,s,r));let et=new oh(A,I);this.xr=et,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let S=kt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=kt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return at},this.setPixelRatio=function(S){S!==void 0&&(at=S,this.setSize(ee,tt,!1))},this.getSize=function(S){return S.set(ee,tt)},this.setSize=function(S,U,Z=!0){if(et.isPresenting){jt("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=S,tt=U,e.width=Math.floor(S*at),e.height=Math.floor(U*at),Z===!0&&(e.style.width=S+"px",e.style.height=U+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(ee*at,tt*at).floor()},this.setDrawingBufferSize=function(S,U,Z){ee=S,tt=U,at=Z,e.width=Math.floor(S*Z),e.height=Math.floor(U*Z),this.setViewport(0,0,S,U)},this.setEffects=function(S){if(x===Cn){Qt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let U=0;U<S.length;U++)if(S[U].isOutputPass===!0){jt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(rt)},this.getViewport=function(S){return S.copy(Pt)},this.setViewport=function(S,U,Z,V){S.isVector4?Pt.set(S.x,S.y,S.z,S.w):Pt.set(S,U,Z,V),_.viewport(rt.copy(Pt).multiplyScalar(at).round())},this.getScissor=function(S){return S.copy(qt)},this.setScissor=function(S,U,Z,V){S.isVector4?qt.set(S.x,S.y,S.z,S.w):qt.set(S,U,Z,V),_.scissor(ft.copy(qt).multiplyScalar(at).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(S){_.setScissorTest(ae=S)},this.setOpaqueSort=function(S){bt=S},this.setTransparentSort=function(S){Yt=S},this.getClearColor=function(S){return S.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(S=!0,U=!0,Z=!0){let V=0;if(S){let W=!1;if(ot!==null){let It=ot.texture.format;W=m.has(It)}if(W){let It=ot.texture.type,Ut=p.has(It),Rt=Jt.getClearColor(),Ht=Jt.getClearAlpha(),Xt=Rt.r,oe=Rt.g,de=Rt.b;Ut?(M[0]=Xt,M[1]=oe,M[2]=de,M[3]=Ht,I.clearBufferuiv(I.COLOR,0,M)):(R[0]=Xt,R[1]=oe,R[2]=de,R[3]=Ht,I.clearBufferiv(I.COLOR,0,R))}else V|=I.COLOR_BUFFER_BIT}U&&(V|=I.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),L=S},this.dispose=function(){e.removeEventListener("webglcontextlost",wt,!1),e.removeEventListener("webglcontextrestored",Gt,!1),e.removeEventListener("webglcontextcreationerror",pe,!1),Jt.dispose(),Tt.dispose(),mt.dispose(),k.dispose(),dt.dispose(),Q.dispose(),At.dispose(),ht.dispose(),Et.dispose(),et.dispose(),et.removeEventListener("sessionstart",ne),et.removeEventListener("sessionend",$t),Kt.stop()};function wt(S){S.preventDefault(),Nc("WebGLRenderer: Context Lost."),P=!0}function Gt(){Nc("WebGLRenderer: Context Restored."),P=!1;let S=z.autoReset,U=Zt.enabled,Z=Zt.autoUpdate,V=Zt.needsUpdate,W=Zt.type;G(),z.autoReset=S,Zt.enabled=U,Zt.autoUpdate=Z,Zt.needsUpdate=V,Zt.type=W}function pe(S){Qt("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function we(S){let U=S.target;U.removeEventListener("dispose",we),vn(U)}function vn(S){In(S),k.remove(S)}function In(S){let U=k.get(S).programs;U!==void 0&&(U.forEach(function(Z){Et.releaseProgram(Z)}),S.isShaderMaterial&&Et.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,Z,V,W,It){U===null&&(U=Dt);let Ut=W.isMesh&&W.matrixWorld.determinantAffine()<0,Rt=Qn(S,U,Z,V,W);_.setMaterial(V,Ut);let Ht=Z.index,Xt=1;if(V.wireframe===!0){if(Ht=K.getWireframeAttribute(Z),Ht===void 0)return;Xt=2}let oe=Z.drawRange,de=Z.attributes.position,Vt=oe.start*Xt,ve=(oe.start+oe.count)*Xt;It!==null&&(Vt=Math.max(Vt,It.start*Xt),ve=Math.min(ve,(It.start+It.count)*Xt)),Ht!==null?(Vt=Math.max(Vt,0),ve=Math.min(ve,Ht.count)):de!=null&&(Vt=Math.max(Vt,0),ve=Math.min(ve,de.count));let en=ve-Vt;if(en<0||en===1/0)return;At.setup(W,V,Rt,Z,Ht);let De,Re=xt;if(Ht!==null&&(De=pt.get(Ht),Re=st,Re.setIndex(De)),W.isMesh)V.wireframe===!0?(_.setLineWidth(V.wireframeLinewidth*yt()),Re.setMode(I.LINES)):Re.setMode(I.TRIANGLES);else if(W.isLine){let pn=V.linewidth;pn===void 0&&(pn=1),_.setLineWidth(pn*yt()),W.isLineSegments?Re.setMode(I.LINES):W.isLineLoop?Re.setMode(I.LINE_LOOP):Re.setMode(I.LINE_STRIP)}else W.isPoints?Re.setMode(I.POINTS):W.isSprite&&Re.setMode(I.TRIANGLES);if(W.isBatchedMesh)if(kt.get("WEBGL_multi_draw"))Re.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let pn=W._multiDrawStarts,Ft=W._multiDrawCounts,Mn=W._multiDrawCount,_e=Ht?pt.get(Ht).bytesPerElement:1,On=k.get(V).currentProgram.getUniforms();for(let ti=0;ti<Mn;ti++)On.setValue(I,"_gl_DrawID",ti),Re.render(pn[ti]/_e,Ft[ti])}else if(W.isInstancedMesh)Re.renderInstances(Vt,en,W.count);else if(Z.isInstancedBufferGeometry){let pn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ft=Math.min(Z.instanceCount,pn);Re.renderInstances(Vt,en,Ft)}else Re.render(Vt,en)};function Ze(S,U,Z,V){L!==null&&S.isNodeMaterial&&L.setObject(V,S),J===!0&&it.setState(S,Z,!1),S.transparent===!0&&S.side===Te&&S.forceSinglePass===!1?(S.side=dn,S.needsUpdate=!0,Bn(S,U,V),S.side=qi,S.needsUpdate=!0,Bn(S,U,V),S.side=Te):Bn(S,U,V)}this.compile=function(S,U,Z=null){Z===null&&(Z=S),L!==null&&L.renderStart(S,U,Z),T=mt.get(Z),T.init(U),y.push(T),Z.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),S!==Z&&S.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(T.pushLight(W),W.castShadow&&T.pushShadow(W))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),j=this.localClippingEnabled,J=it.init(this.clippingPlanes,j),J===!0&&it.setGlobalState(this.clippingPlanes,U),L!==null&&Zt.render(T.state.shadowsArray,Z,U);let V=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let It=W.material;if(It)if(Array.isArray(It))for(let Ut=0;Ut<It.length;Ut++){let Rt=It[Ut];Ze(Rt,Z,U,W),V.add(Rt)}else Ze(It,Z,U,W),V.add(It)}),T=y.pop(),L!==null&&L.renderEnd(),V},this.compileAsync=function(S,U,Z=null){let V=this.compile(S,U,Z);return new Promise(W=>{function It(){if(V.forEach(function(Ut){let Ht=k.get(Ut).currentProgram;(Ht===void 0||Ht.isReady())&&V.delete(Ut)}),V.size===0){W(S);return}setTimeout(It,10)}kt.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let vt=null;function St(S){vt&&vt(S)}function ne(){Kt.stop()}function $t(){Kt.start()}let Kt=new dd;Kt.setAnimationLoop(St),typeof self!="undefined"&&Kt.setContext(self),this.setAnimationLoop=function(S){vt=S,et.setAnimationLoop(S),S===null?Kt.stop():Kt.start()},et.addEventListener("sessionstart",ne),et.addEventListener("sessionend",$t),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){Qt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;L!==null&&L.renderStart(S,U);let Z=et.enabled===!0&&et.isPresenting===!0,V=E!==null&&(ot===null||Z)&&E.begin(A,ot);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(et.cameraAutoUpdate===!0&&et.updateCamera(U),U=et.getCamera()),S.isScene===!0&&S.onBeforeRender(A,S,U,ot),T=mt.get(S,y.length),T.init(U),T.state.textureUnits=Y.getTextureUnits(),y.push(T),lt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),O.setFromProjectionMatrix(lt,qn,U.reversedDepth),j=this.localClippingEnabled,J=it.init(this.clippingPlanes,j),b=Tt.get(S,C.length),b.init(),C.push(b),et.enabled===!0&&et.isPresenting===!0){let Ut=A.xr.getDepthSensingMesh();Ut!==null&&xe(Ut,U,-1/0,A.sortObjects)}xe(S,U,0,A.sortObjects),b.finish(),L!==null&&L.updateLights(T.state.lightsArray),A.sortObjects===!0&&b.sort(bt,Yt),Nt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Nt&&Jt.addToRenderList(b,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),J===!0&&it.beginShadows();let W=T.state.shadowsArray;if(Zt.render(W,S,U),J===!0&&it.endShadows(),(V&&E.hasRenderPass())===!1){let Ut=b.opaque,Rt=b.transmissive;if(T.setupLights(),U.isArrayCamera){let Ht=U.cameras;if(Rt.length>0)for(let Xt=0,oe=Ht.length;Xt<oe;Xt++){let de=Ht[Xt];Tn(Ut,Rt,S,de)}Nt&&Jt.render(S);for(let Xt=0,oe=Ht.length;Xt<oe;Xt++){let de=Ht[Xt];Je(b,S,de,de.viewport)}}else Rt.length>0&&Tn(Ut,Rt,S,U),Nt&&Jt.render(S),Je(b,S,U)}ot!==null&&X===0&&(Y.updateMultisampleRenderTarget(ot),Y.updateRenderTargetMipmap(ot)),V&&E.end(A),S.isScene===!0&&S.onAfterRender(A,S,U),At.resetDefaultState(),$=-1,nt=null,y.pop(),y.length>0?(T=y[y.length-1],Y.setTextureUnits(T.state.textureUnits),J===!0&&it.setGlobalState(A.clippingPlanes,T.state.camera)):T=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,L!==null&&L.renderEnd()};function xe(S,U,Z,V){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)Z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(O)){V&&gt.setFromMatrixPosition(S.matrixWorld).applyMatrix4(lt);let Ut=Q.update(S),Rt=S.material;Rt.visible&&b.push(S,Ut,Rt,Z,gt.z,null,U)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(O))){let Ut=Q.update(S),Rt=S.material;if(V&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),gt.copy(S.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),gt.copy(Ut.boundingSphere.center)),gt.applyMatrix4(S.matrixWorld).applyMatrix4(lt)),Array.isArray(Rt)){let Ht=Ut.groups;for(let Xt=0,oe=Ht.length;Xt<oe;Xt++){let de=Ht[Xt],Vt=Rt[de.materialIndex];Vt&&Vt.visible&&b.push(S,Ut,Vt,Z,gt.z,de,U)}}else Rt.visible&&b.push(S,Ut,Rt,Z,gt.z,null,U)}}let It=S.children;for(let Ut=0,Rt=It.length;Ut<Rt;Ut++)xe(It[Ut],U,Z,V)}function Je(S,U,Z,V){let{opaque:W,transmissive:It,transparent:Ut}=S;T.setupLightsView(Z),J===!0&&it.setGlobalState(A.clippingPlanes,Z),V&&_.viewport(rt.copy(V)),W.length>0&&ge(W,U,Z),It.length>0&&ge(It,U,Z),Ut.length>0&&ge(Ut,U,Z),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Tn(S,U,Z,V){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){let Vt=kt.has("EXT_color_buffer_half_float")||kt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new wn(1,1,{generateMipmaps:!0,type:Vt?Kn:Cn,minFilter:Rn,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:fe.workingColorSpace})}let It=T.state.transmissionRenderTarget[V.id],Ut=V.viewport||rt;It.setSize(Ut.z*A.transmissionResolutionScale,Ut.w*A.transmissionResolutionScale);let Rt=A.getRenderTarget(),Ht=A.getActiveCubeFace(),Xt=A.getActiveMipmapLevel();A.setRenderTarget(It),A.getClearColor(Wt),Ot=A.getClearAlpha(),Ot<1&&A.setClearColor(16777215,.5),A.clear(),Nt&&Jt.render(Z);let oe=A.toneMapping;A.toneMapping=Zn;let de=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),J===!0&&it.setGlobalState(A.clippingPlanes,V),ge(S,Z,V),Y.updateMultisampleRenderTarget(It),Y.updateRenderTargetMipmap(It),kt.has("WEBGL_multisampled_render_to_texture")===!1){let Vt=!1;for(let ve=0,en=U.length;ve<en;ve++){let De=U[ve],{object:Re,geometry:pn,material:Ft,group:Mn}=De;if(Ft.side===Te&&Re.layers.test(V.layers)){let _e=Ft.side;Ft.side=dn,Ft.needsUpdate=!0,tn(Re,Z,V,pn,Ft,Mn),Ft.side=_e,Ft.needsUpdate=!0,Vt=!0}}Vt===!0&&(Y.updateMultisampleRenderTarget(It),Y.updateRenderTargetMipmap(It))}A.setRenderTarget(Rt,Ht,Xt),A.setClearColor(Wt,Ot),de!==void 0&&(V.viewport=de),A.toneMapping=oe}function ge(S,U,Z){let V=U.isScene===!0?U.overrideMaterial:null;for(let W=0,It=S.length;W<It;W++){let Ut=S[W],{object:Rt,geometry:Ht,group:Xt}=Ut,oe=Ut.material;oe.allowOverride===!0&&V!==null&&(oe=V),Rt.layers.test(Z.layers)&&tn(Rt,U,Z,Ht,oe,Xt)}}function tn(S,U,Z,V,W,It){L!==null&&W.isNodeMaterial&&L.setObject(S,W),S.onBeforeRender(A,U,Z,V,W,It),S.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(A,U,Z,V,S,It),W.transparent===!0&&W.side===Te&&W.forceSinglePass===!1?(W.side=dn,W.needsUpdate=!0,A.renderBufferDirect(Z,U,V,W,S,It),W.side=qi,W.needsUpdate=!0,A.renderBufferDirect(Z,U,V,W,S,It),W.side=Te):A.renderBufferDirect(Z,U,V,W,S,It),S.onAfterRender(A,U,Z,V,W,It)}function Bn(S,U,Z){U.isScene!==!0&&(U=Dt);let V=k.get(S),W=T.state.lights,It=T.state.shadowsArray,Ut=W.state.version,Rt=Et.getParameters(S,W.state,It,U,Z,T.state.lightProbeGridArray),Ht=Et.getProgramCacheKey(Rt),Xt=V.programs;V.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?U.environment:null,V.fog=U.fog;let oe=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;V.envMap=dt.get(S.envMap||V.environment,oe),V.envMapRotation=V.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Xt===void 0&&(S.addEventListener("dispose",we),Xt=new Map,V.programs=Xt);let de=Xt.get(Ht);if(de!==void 0){if(V.currentProgram===de&&V.lightsStateVersion===Ut)return pi(S,Rt),de}else Rt.uniforms=Et.getUniforms(S),L!==null&&S.isNodeMaterial&&L.build(S,Z,Rt),S.onBeforeCompile(Rt,A),de=Et.acquireProgram(Rt,Ht),Xt.set(Ht,de),V.uniforms=Rt.uniforms;let Vt=V.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Vt.clippingPlanes=it.uniform),pi(S,Rt),V.needsLights=Ts(S),V.lightsStateVersion=Ut,V.needsLights&&(Vt.ambientLightColor.value=W.state.ambient,Vt.lightProbe.value=W.state.probe,Vt.sunLights.value=W.state.sun,Vt.sunLightShadows.value=W.state.sunShadow,Vt.directionalLights.value=W.state.directional,Vt.directionalLightShadows.value=W.state.directionalShadow,Vt.spotLights.value=W.state.spot,Vt.spotLightShadows.value=W.state.spotShadow,Vt.rectAreaLights.value=W.state.rectArea,Vt.ltc_1.value=W.state.rectAreaLTC1,Vt.ltc_2.value=W.state.rectAreaLTC2,Vt.pointLights.value=W.state.point,Vt.pointLightShadows.value=W.state.pointShadow,Vt.hemisphereLights.value=W.state.hemi,Vt.sunShadowMatrix.value=W.state.sunShadowMatrix,Vt.sunShadowCascade.value=W.state.sunShadowCascade,Vt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Vt.spotLightMatrix.value=W.state.spotLightMatrix,Vt.spotLightMap.value=W.state.spotLightMap,Vt.pointShadowMatrix.value=W.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=de,V.uniformsList=null,de}function fi(S){if(S.uniformsList===null){let U=S.currentProgram.getUniforms();S.uniformsList=rr.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function pi(S,U){let Z=k.get(S);Z.outputColorSpace=U.outputColorSpace,Z.batching=U.batching,Z.batchingColor=U.batchingColor,Z.instancing=U.instancing,Z.instancingColor=U.instancingColor,Z.instancingMorph=U.instancingMorph,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function Sn(S,U){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(U.matrixWorld);for(let Z=0,V=S.length;Z<V;Z++){let W=S[Z];if(W.texture!==null&&W.boundingBox.containsPoint(v))return W}return null}function Qn(S,U,Z,V,W){U.isScene!==!0&&(U=Dt),Y.resetTextureUnits();let It=U.fog,Ut=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?U.environment:null,Rt=ot===null?A.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:fe.workingColorSpace,Ht=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Xt=dt.get(V.envMap||Ut,Ht),oe=V.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,de=!!Z.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Vt=!!Z.morphAttributes.position,ve=!!Z.morphAttributes.normal,en=!!Z.morphAttributes.color,De=Zn;V.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(De=A.toneMapping);let Re=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,pn=Re!==void 0?Re.length:0,Ft=k.get(V),Mn=T.state.lights;if(J===!0&&(j===!0||S!==nt)){let Ce=S===nt&&V.id===$;it.setState(V,S,Ce)}let _e=!1;V.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Mn.state.version||Ft.outputColorSpace!==Rt||W.isBatchedMesh&&Ft.batching===!1||!W.isBatchedMesh&&Ft.batching===!0||W.isBatchedMesh&&Ft.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ft.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ft.instancing===!1||!W.isInstancedMesh&&Ft.instancing===!0||W.isSkinnedMesh&&Ft.skinning===!1||!W.isSkinnedMesh&&Ft.skinning===!0||W.isInstancedMesh&&Ft.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ft.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ft.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ft.instancingMorph===!1&&W.morphTexture!==null||Ft.envMap!==Xt||V.fog===!0&&Ft.fog!==It||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==it.numPlanes||Ft.numIntersection!==it.numIntersection)||Ft.vertexAlphas!==oe||Ft.vertexTangents!==de||Ft.morphTargets!==Vt||Ft.morphNormals!==ve||Ft.morphColors!==en||Ft.toneMapping!==De||Ft.morphTargetsCount!==pn||!!Ft.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(_e=!0):(_e=!0,Ft.__version=V.version);let On=Ft.currentProgram;_e===!0&&(On=Bn(V,U,W),L&&V.isNodeMaterial&&L.onUpdateProgram(V,On,Ft));let ti=!1,Ii=!1,ws=!1,Ae=On.getUniforms(),$e=Ft.uniforms;if(_.useProgram(On.program)&&(ti=!0,Ii=!0,ws=!0),V.id!==$&&($=V.id,Ii=!0),Ft.needsLights){let Ce=Sn(T.state.lightProbeGridArray,W);Ft.lightProbeGrid!==Ce&&(Ft.lightProbeGrid=Ce,Ii=!0)}if(ti||nt!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),Ae.setValue(I,"projectionMatrix",S.projectionMatrix),Ae.setValue(I,"viewMatrix",S.matrixWorldInverse);let Di=Ae.map.cameraPosition;Di!==void 0&&Di.setValue(I,ct.setFromMatrixPosition(S.matrixWorld)),w.logarithmicDepthBuffer&&Ae.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ae.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),nt!==S&&(nt=S,Ii=!0,ws=!0)}if(Ft.needsLights&&(Mn.state.sunShadowMap.length>0&&Ae.setValue(I,"sunShadowMap",Mn.state.sunShadowMap,Y),Mn.state.directionalShadowMap.length>0&&Ae.setValue(I,"directionalShadowMap",Mn.state.directionalShadowMap,Y),Mn.state.spotShadowMap.length>0&&Ae.setValue(I,"spotShadowMap",Mn.state.spotShadowMap,Y),Mn.state.pointShadowMap.length>0&&Ae.setValue(I,"pointShadowMap",Mn.state.pointShadowMap,Y)),W.isSkinnedMesh){Ae.setOptional(I,W,"bindMatrix"),Ae.setOptional(I,W,"bindMatrixInverse");let Ce=W.skeleton;Ce&&(Ce.boneTexture===null&&Ce.computeBoneTexture(),Ae.setValue(I,"boneTexture",Ce.boneTexture,Y))}W.isBatchedMesh&&(Ae.setOptional(I,W,"batchingTexture"),Ae.setValue(I,"batchingTexture",W._matricesTexture,Y),Ae.setOptional(I,W,"batchingIdTexture"),Ae.setValue(I,"batchingIdTexture",W._indirectTexture,Y),Ae.setOptional(I,W,"batchingColorTexture"),W._colorsTexture!==null&&Ae.setValue(I,"batchingColorTexture",W._colorsTexture,Y));let Li=Z.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&B.update(W,Z,On),(Ii||Ft.receiveShadow!==W.receiveShadow)&&(Ft.receiveShadow=W.receiveShadow,Ae.setValue(I,"receiveShadow",W.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&U.environment!==null&&($e.envMapIntensity.value=U.environmentIntensity),$e.dfgLUT!==void 0&&($e.dfgLUT.value=mx()),Ii){if(Ae.setValue(I,"toneMappingExposure",A.toneMappingExposure),Ft.needsLights&&Es($e,ws),It&&V.fog===!0&&Bt.refreshFogUniforms($e,It),Bt.refreshMaterialUniforms($e,V,at,tt,T.state.transmissionRenderTarget[S.id]),Ft.needsLights&&Ft.lightProbeGrid){let Ce=Ft.lightProbeGrid;$e.probesSH.value=Ce.texture,$e.probesMin.value.copy(Ce.boundingBox.min),$e.probesMax.value.copy(Ce.boundingBox.max),$e.probesResolution.value.copy(Ce.resolution)}rr.upload(I,fi(Ft),$e,Y)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(rr.upload(I,fi(Ft),$e,Y),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ae.setValue(I,"center",W.center),Ae.setValue(I,"modelViewMatrix",W.modelViewMatrix),Ae.setValue(I,"normalMatrix",W.normalMatrix),Ae.setValue(I,"modelMatrix",W.matrixWorld),V.uniformsGroups!==void 0){let Ce=V.uniformsGroups;for(let Di=0,As=Ce.length;Di<As;Di++){let Mh=Ce[Di];ht.update(Mh,On),ht.bind(Mh,On)}}return On}function Es(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.sunLights.needsUpdate=U,S.sunLightShadows.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function Ts(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return ot},this.setRenderTargetTextures=function(S,U,Z){let V=k.get(S);V.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),k.get(S.texture).__webglTexture=U,k.get(S.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:Z,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,U){let Z=k.get(S);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,Z=0){ot=S,q=U,X=Z;let V=null,W=!1,It=!1;if(S){let Rt=k.get(S);if(Rt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(I.FRAMEBUFFER,Rt.__webglFramebuffer),rt.copy(S.viewport),ft.copy(S.scissor),_t=S.scissorTest,_.viewport(rt),_.scissor(ft),_.setScissorTest(_t),$=-1;return}else if(Rt.__webglFramebuffer===void 0)Y.setupRenderTarget(S);else if(Rt.__hasExternalTextures)Y.rebindTextures(S,k.get(S.texture).__webglTexture,k.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let oe=S.depthTexture;if(Rt.__boundDepthTexture!==oe){if(oe!==null&&k.has(oe)&&(S.width!==oe.image.width||S.height!==oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(S)}}let Ht=S.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(It=!0);let Xt=k.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Xt[U])?V=Xt[U][Z]:V=Xt[U],W=!0):S.samples>0&&Y.useMultisampledRTT(S)===!1?V=k.get(S).__webglMultisampledFramebuffer:Array.isArray(Xt)?V=Xt[Z]:V=Xt,rt.copy(S.viewport),ft.copy(S.scissor),_t=S.scissorTest}else rt.copy(Pt).multiplyScalar(at).floor(),ft.copy(qt).multiplyScalar(at).floor(),_t=ae;if(Z!==0&&(V=F),_.bindFramebuffer(I.FRAMEBUFFER,V)&&_.drawBuffers(S,V),_.viewport(rt),_.scissor(ft),_.setScissorTest(_t),W){let Rt=k.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,Rt.__webglTexture,Z)}else if(It){let Rt=U;for(let Ht=0;Ht<S.textures.length;Ht++){let Xt=k.get(S.textures[Ht]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+Ht,Xt.__webglTexture,Z,Rt)}}else if(S!==null&&Z!==0){let Rt=k.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Rt.__webglTexture,Z)}$=-1};function mi(S){let U=k.get(S);return(U.__readFormat!==S.format||U.__readType!==S.type)&&(U.__readFormat=S.format,U.__readType=S.type,U.__formatReadable=w.textureFormatReadable(S.format),U.__typeReadable=w.textureTypeReadable(S.type)),U}this.readRenderTargetPixels=function(S,U,Z,V,W,It,Ut,Rt=0){if(!(S&&S.isWebGLRenderTarget)){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ht=k.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ht=Ht[Ut]),Ht){_.bindFramebuffer(I.FRAMEBUFFER,Ht);try{let Xt=S.textures[Rt],oe=Xt.format,de=Xt.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Rt);let Vt=mi(Xt);if(Vt.__formatReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Vt.__typeReadable===!1){Qt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-V&&Z>=0&&Z<=S.height-W&&I.readPixels(U,Z,V,W,ut.convert(oe),ut.convert(de),It)}finally{let Xt=ot!==null?k.get(ot).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(S,U,Z,V,W,It,Ut,Rt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ht=k.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ht=Ht[Ut]),Ht)if(U>=0&&U<=S.width-V&&Z>=0&&Z<=S.height-W){_.bindFramebuffer(I.FRAMEBUFFER,Ht);let Xt=S.textures[Rt],oe=Xt.format,de=Xt.type;S.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Rt);let Vt=mi(Xt);if(Vt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Vt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ve),I.bufferData(I.PIXEL_PACK_BUFFER,It.byteLength,I.STREAM_READ),I.readPixels(U,Z,V,W,ut.convert(oe),ut.convert(de),0),I.bindBuffer(I.PIXEL_PACK_BUFFER,null);let en=ot!==null?k.get(ot).__webglFramebuffer:null;_.bindFramebuffer(I.FRAMEBUFFER,en);let De=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Nu(I,De,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ve),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,It),I.bindBuffer(I.PIXEL_PACK_BUFFER,null),I.deleteBuffer(ve),I.deleteSync(De),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,U=null,Z=0){let V=Math.pow(2,-Z),W=Math.floor(S.image.width*V),It=Math.floor(S.image.height*V),Ut=U!==null?U.x:0,Rt=U!==null?U.y:0;Y.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,Z,0,0,Ut,Rt,W,It),_.unbindTexture()},this.copyTextureToTexture=function(S,U,Z=null,V=null,W=0,It=0){let Ut,Rt,Ht,Xt,oe,de,Vt,ve,en,De=S.isCompressedTexture?S.mipmaps[It]:S.image;if(Z!==null)Ut=Z.max.x-Z.min.x,Rt=Z.max.y-Z.min.y,Ht=Z.isBox3?Z.max.z-Z.min.z:1,Xt=Z.min.x,oe=Z.min.y,de=Z.isBox3?Z.min.z:0;else{let $e=Math.pow(2,-W);Ut=Math.floor(De.width*$e),Rt=Math.floor(De.height*$e),S.isDataArrayTexture?Ht=De.depth:S.isData3DTexture?Ht=Math.floor(De.depth*$e):Ht=1,Xt=0,oe=0,de=0}V!==null?(Vt=V.x,ve=V.y,en=V.z):(Vt=0,ve=0,en=0);let Re=ut.convert(U.format),pn=ut.convert(U.type),Ft;U.isData3DTexture?(Y.setTexture3D(U,0),Ft=I.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),Ft=I.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),Ft=I.TEXTURE_2D),_.activeTexture(I.TEXTURE0),_.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);let Mn=_.getParameter(I.UNPACK_ROW_LENGTH),_e=_.getParameter(I.UNPACK_IMAGE_HEIGHT),On=_.getParameter(I.UNPACK_SKIP_PIXELS),ti=_.getParameter(I.UNPACK_SKIP_ROWS),Ii=_.getParameter(I.UNPACK_SKIP_IMAGES);_.pixelStorei(I.UNPACK_ROW_LENGTH,De.width),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,De.height),_.pixelStorei(I.UNPACK_SKIP_PIXELS,Xt),_.pixelStorei(I.UNPACK_SKIP_ROWS,oe),_.pixelStorei(I.UNPACK_SKIP_IMAGES,de);let ws=S.isDataArrayTexture||S.isData3DTexture,Ae=U.isDataArrayTexture||U.isData3DTexture;if(S.isDepthTexture){let $e=k.get(S),Li=k.get(U),Ce=k.get($e.__renderTarget),Di=k.get(Li.__renderTarget);_.bindFramebuffer(I.READ_FRAMEBUFFER,Ce.__webglFramebuffer),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let As=0;As<Ht;As++)ws&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,k.get(S).__webglTexture,W,de+As),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,k.get(U).__webglTexture,It,en+As)),I.blitFramebuffer(Xt,oe,Ut,Rt,Vt,ve,Ut,Rt,I.DEPTH_BUFFER_BIT,I.NEAREST);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||k.has(S)){let $e=k.get(S),Li=k.get(U);_.bindFramebuffer(I.READ_FRAMEBUFFER,D),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,H);for(let Ce=0;Ce<Ht;Ce++)ws?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,$e.__webglTexture,W,de+Ce):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,$e.__webglTexture,W),Ae?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Li.__webglTexture,It,en+Ce):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Li.__webglTexture,It),W!==0?I.blitFramebuffer(Xt,oe,Ut,Rt,Vt,ve,Ut,Rt,I.COLOR_BUFFER_BIT,I.NEAREST):Ae?I.copyTexSubImage3D(Ft,It,Vt,ve,en+Ce,Xt,oe,Ut,Rt):I.copyTexSubImage2D(Ft,It,Vt,ve,Xt,oe,Ut,Rt);_.bindFramebuffer(I.READ_FRAMEBUFFER,null),_.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Ae?S.isDataTexture||S.isData3DTexture?I.texSubImage3D(Ft,It,Vt,ve,en,Ut,Rt,Ht,Re,pn,De.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(Ft,It,Vt,ve,en,Ut,Rt,Ht,Re,De.data):I.texSubImage3D(Ft,It,Vt,ve,en,Ut,Rt,Ht,Re,pn,De):S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,It,Vt,ve,Ut,Rt,Re,pn,De.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,It,Vt,ve,De.width,De.height,Re,De.data):I.texSubImage2D(I.TEXTURE_2D,It,Vt,ve,Ut,Rt,Re,pn,De);_.pixelStorei(I.UNPACK_ROW_LENGTH,Mn),_.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_e),_.pixelStorei(I.UNPACK_SKIP_PIXELS,On),_.pixelStorei(I.UNPACK_SKIP_ROWS,ti),_.pixelStorei(I.UNPACK_SKIP_IMAGES,Ii),It===0&&U.generateMipmaps&&I.generateMipmap(Ft),_.unbindTexture()},this.initRenderTarget=function(S){k.get(S).__webglFramebuffer===void 0&&Y.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Y.setTextureCube(S,0):S.isData3DTexture?Y.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Y.setTexture2DArray(S,0):Y.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){q=0,X=0,ot=null,_.reset(),At.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}};var ze={goldPrimary:"#D4A017",goldBright:"#F5C542",goldShadow:"#8C6A1D",greenMain:"#A31621",greenDeep:"#7A0C14",leatherBrown:"#5C3A21",furWhite:"#F5F0E6",furGinger:"#C96A2B",furPatchShadow:"#A24E1B",nosePink:"#E8A0A0",eyeAmber:"#FFB84D",steelBlade:"#C0C6CC",gemEmerald:"#C22240",crimsonMain:"#A31621",crimsonDeep:"#7A0C14",gemRuby:"#C22240"},qe={redMain:"#1B7A4B",redBright:"#35D07F",redDeep:"#0E4A2C",silverMain:"#C9D1D9",silverBright:"#E8EDF2",silverShadow:"#8F98A3",clothWhite:"#F2EFE9",furCharcoal:"#2E2E38",furSilverStripe:"#9AA0AA",furBelly:"#B9BFC7",eyeJade:"#35D07F",noseBlack:"#1A1A22",gemRuby:"#34D399",steelBlade:"#C0C6CC",emeraldMain:"#1B7A4B",emeraldBright:"#35D07F",emeraldDeep:"#0E4A2C",gemEmerald:"#34D399"},Xe={BUY:"#26A69A",BUY_BRIGHT:"#35D07F",BUY_DEEP:"#0E4A2C",SELL:"#EF5350",SELL_BRIGHT:"#FF8A80",SELL_DEEP:"#7A0C14"},Me={skyZenith:"#05060F",skyHorizon:"#0D1030",fog:"#1A1626",moonBtc:"#F7931A",moonHalo:"#FFB84D",moonSymbol:"#7A4A08",stoneWall:"#B98A5A",stoneShadow:"#6E523A",stonePole:"#8E8E80",tileBlue:"#1F5FA8",tileWhite:"#F2EFE9",tileEmerald:"#12755F",floorBase:"#D9CDB4",floorGrout:"#6E5A42",torchFlame:"#FF9D45",torchGlow:"#FFC97A",iron:"#3A3A40",flagUp:"#26A69A",flagDown:"#EF5350",ropeHemp:"#A67B4F",ropeFiber:"#8A6238",frieze:"#C9B389"},ca={gold:{metalness:.85,roughness:.35},goldBright:{metalness:.85,roughness:.28},steel:{metalness:.9,roughness:.25},silver:{metalness:.85,roughness:.3},cloth:{metalness:0,roughness:.9},fur:{metalness:0,roughness:.95}},me={spanHalf:10,ropeY:3.2,ropeRadius:.065,ropeSegments:24,restSagOne:.34,restSagTwo:.5,damping:.93,swayClamp:.12,impulseScale:.16,ropeSmooth:20,poleClearance:1.5,catHeight:1.3,minBodyGap:.78,minHeadCentre:.8};var _l=4;function yd(i){_l=Math.max(1,Math.min(16,Math.round(i)||1))}function ke(i,{repeatX:t=1,repeatY:e=1,srgb:n=!0}={}){let s=new un(i);return n&&(s.colorSpace=Ge),s.wrapS=s.wrapT=ii,s.repeat.set(t,e),s.generateMipmaps=!0,s.minFilter=Rn,s.magFilter=Ke,s.anisotropy=_l,s}function ys(i,t){let e=document.createElement("canvas");e.width=e.height=i;let n=e.getContext("2d");return n.fillStyle=t,n.fillRect(0,0,i,i),{c:e,g:n,size:i}}function Ki(i){let t=i|0||1;return()=>(t=t*16807%2147483647,t%1e5/1e5)}function Pn(i,t=1){let e=document.createElement("canvas");e.width=i.width,e.height=i.height;let n=e.getContext("2d");n.drawImage(i,0,0);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a+=4){let c=r[a]*.299+r[a+1]*.587+r[a+2]*.114,l=Math.max(0,Math.min(255,128+(c-128)*t));r[a]=r[a+1]=r[a+2]=l}n.putImageData(s,0,0);let o=new un(e);return o.wrapS=o.wrapT=ii,o.generateMipmaps=!0,o.minFilter=Rn,o.anisotropy=_l,o}function gx(i,t=.45,e=.98){let n=document.createElement("canvas");n.width=i.width,n.height=i.height;let s=n.getContext("2d");s.drawImage(i,0,0);let r=s.getImageData(0,0,n.width,n.height),o=r.data;for(let c=0;c<o.length;c+=4){let l=(o[c]*.299+o[c+1]*.587+o[c+2]*.114)/255,h=Math.round(255*(e-(e-t)*l));o[c]=o[c+1]=o[c+2]=h}s.putImageData(r,0,0);let a=new un(n);return a.wrapS=a.wrapT=ii,a.generateMipmaps=!0,a.minFilter=Rn,a.anisotropy=_l,a}function _x({seed:i=3,stripes:t=0,blotch:e=0,grain:n=.1,base:s="#ffffff",dark:r="#b9b9c4"}={}){let{c:o,g:a,size:c}=ys(256,s),l=Ki(i);if(e){for(let d=0;d<e;d++){let u=l()*c,f=l()*c,g=24+l()*46,x=a.createRadialGradient(u,f,g*.15,u,f,g);x.addColorStop(0,r),x.addColorStop(.7,r),x.addColorStop(1,"rgba(255,255,255,0)"),a.globalAlpha=.45+l()*.25,a.fillStyle=x,a.beginPath(),a.arc(u,f,g,0,Math.PI*2),a.fill()}a.globalAlpha=1}if(t){for(let d=0;d<t;d++){let u=(d+.5)*(c/t)+(l()-.5)*14,f=8+l()*10,g=-24-l()*30;for(;g<c+24;){let x=l()<.29?6+l()*22:0;g+=x;let m=16+l()*40,p=c/t*(.22+l()*.34),M=u+Math.sin(g*.035+d*1.7)*f;a.fillStyle=r,a.globalAlpha=.34+l()*.3,a.beginPath(),a.ellipse(g+m/2,M,m/2+6,p/2,(l()-.5)*.22,0,Math.PI*2),a.fill(),g+=m}}a.globalAlpha=1}let h=Ki(i*7+11);for(let d=0;d<1100;d++){let u=h()*c,f=h()*c,g=4+h()*9,x=h()*Math.PI*2;a.strokeStyle=h()<.5?"rgba(255,255,255,0.42)":"rgba(96,90,102,0.34)",a.lineWidth=1.1+h()*1.6,a.beginPath(),a.moveTo(u,f),a.lineTo(u+Math.cos(x)*g,f+Math.sin(x)*g),a.stroke()}for(let d=0;d<90;d++){let u=h()*c,f=h()*c,g=5+h()*13,x=a.createRadialGradient(u,f,0,u,f,g),m=h()<.5;x.addColorStop(0,m?"rgba(255,255,255,0.30)":"rgba(70,64,76,0.26)"),x.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=x,a.beginPath(),a.arc(u,f,g,0,Math.PI*2),a.fill()}return o}function ha(i={}){let t=_x(i),e=ke(t,{repeatX:i.repeatX||1.2,repeatY:i.repeatY||1.2,srgb:!0}),n=Pn(t,.8);return n.repeat.copy(e.repeat),{map:e,bump:n}}function xx({seed:i=5,base:t="#ffffff",thread:e="rgba(64,54,44,0.46)",weave:n=10}={}){let{c:s,g:r,size:o}=ys(128,t);r.strokeStyle=e,r.lineWidth=2;for(let c=0;c<o;c+=n)r.beginPath(),r.moveTo(c,0),r.lineTo(c,o),r.stroke(),r.beginPath(),r.moveTo(0,c),r.lineTo(o,c),r.stroke();let a=Ki(i);for(let c=-o;c<o;c+=n)r.strokeStyle="rgba(255,255,255,0.24)",r.beginPath(),r.moveTo(c,0),r.lineTo(c+o,o),r.stroke();for(let c=0;c<420;c++)r.fillStyle=a()<.5?"rgba(255,255,255,0.20)":"rgba(40,34,30,0.20)",r.fillRect(a()*o,a()*o,3,2);return s}function vs(i={}){let t=xx(i),e=ke(t,{repeatX:i.repeatX||3,repeatY:i.repeatY||3,srgb:!0}),n=Pn(t,.9);return n.repeat.copy(e.repeat),{map:e,bump:n}}function yx({seed:i=9,base:t="#ffffff",streak:e=.22,scratches:n=260}={}){let{c:s,g:r,size:o}=ys(128,t),a=Ki(i);for(let c=0;c<n;c++){let l=a()*o,h=e*(.3+a());r.strokeStyle=a()<.5?`rgba(255,255,255,${h})`:`rgba(60,66,74,${h})`,r.lineWidth=.6+a()*1.3,r.beginPath(),r.moveTo(0,l),r.bezierCurveTo(o*.3,l+(a()-.5)*3,o*.7,l+(a()-.5)*3,o,l+(a()-.5)*2),r.stroke()}for(let c=0;c<5;c++){r.strokeStyle="rgba(40,44,52,0.35)",r.lineWidth=1.4;let l=a()*o;r.beginPath(),r.moveTo(a()*o*.5,l),r.lineTo(o*(.6+a()*.4),l+(a()-.5)*4),r.stroke()}return s}function ji(i={}){let t=yx(i),e=ke(t,{repeatX:i.repeatX||1,repeatY:i.repeatY||1,srgb:!0}),n=Pn(t,.35);return n.repeat.copy(e.repeat),{map:e,bump:n}}function vx({seed:i=13,base:t="#ffffff"}={}){let{c:e,g:n,size:s}=ys(128,t),r=Ki(i);for(let o=0;o<900;o++){let a=r()*s,c=r()*s,l=1+r()*3.4;n.fillStyle=r()<.5?"rgba(255,255,255,0.16)":"rgba(50,34,22,0.20)",n.beginPath(),n.ellipse(a,c,l,l*.7,r()*3,0,Math.PI*2),n.fill()}for(let o=0;o<26;o++){n.strokeStyle="rgba(50,34,22,0.18)",n.lineWidth=.9,n.beginPath();let a=r()*s,c=r()*s;n.moveTo(a,c),n.quadraticCurveTo(a+(r()-.5)*40,c+(r()-.5)*40,a+(r()-.5)*70,c+(r()-.5)*70),n.stroke()}return e}function lh(i={}){let t=vx(i),e=ke(t,{repeatX:1,repeatY:1,srgb:!0}),n=Pn(t,.8);return{map:e,bump:n}}function Sx({seed:i=21,base:t="#ffffff",blocks:e=4,alpha:n=.22,speckle:s=1200,size:r=512}={}){let{c:o,g:a}=ys(r,t),c=Ki(i),l=r/e;for(let d=0;d<e;d++){let u=d%2*(r/(e*2));for(let f=0;f<e;f++){let g=u+f*r/e-r/(e*2),x=c();a.fillStyle=x<.35?"rgba(255,255,255,0.10)":x<.7?"rgba(120,96,70,0.10)":"rgba(255,246,232,0.06)",a.fillRect(g,d*l,r/e,l);let m=a.createLinearGradient(0,d*l,0,d*l+l);m.addColorStop(0,"rgba(255,250,238,0.10)"),m.addColorStop(.55,"rgba(255,255,255,0)"),m.addColorStop(1,"rgba(48,36,24,0.10)"),a.fillStyle=m,a.fillRect(g,d*l,r/e,l);for(let p=0;p<12;p++){let M=g+c()*(r/e),R=d*l+c()*l,v=2+c()*7,b=a.createRadialGradient(M,R,0,M,R,v);b.addColorStop(0,"rgba(56,42,28,0.24)"),b.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=b,a.beginPath(),a.arc(M,R,v,0,Math.PI*2),a.fill()}for(let p=0;p<4;p++){a.strokeStyle="rgba(90,72,52,0.14)",a.lineWidth=1+c()*1.5,a.beginPath();let M=g+c()*(r/e),R=d*l+c()*l;a.moveTo(M,R),a.lineTo(M+(c()-.5)*34,R+(c()-.5)*12),a.stroke()}}}for(let d=0;d<=e;d++){let u=d*l;a.strokeStyle=`rgba(58,44,32,${n+.12})`,a.lineWidth=3,a.beginPath(),a.moveTo(0,u),a.lineTo(r,u),a.stroke(),a.strokeStyle="rgba(255,248,236,0.16)",a.lineWidth=1.6,a.beginPath(),a.moveTo(0,u+2.4),a.lineTo(r,u+2.4),a.stroke();let f=d%2*(r/(e*2));for(let g=0;g<e;g++){let x=f+g*r/e;a.strokeStyle=`rgba(58,44,32,${n+.12})`,a.lineWidth=3,a.beginPath(),a.moveTo(x,u),a.lineTo(x,u+l),a.stroke(),a.strokeStyle="rgba(255,248,236,0.12)",a.lineWidth=1.4,a.beginPath(),a.moveTo(x+2.2,u),a.lineTo(x+2.2,u+l),a.stroke()}}for(let d=0;d<s*2;d++){let u=c()*r,f=c()*r,g=.6+c()*2.6;a.fillStyle=c()<.5?"rgba(255,255,255,0.16)":"rgba(48,36,26,0.18)",a.fillRect(u,f,g,g)}for(let d=0;d<26;d++){let u=c()*r;a.strokeStyle="rgba(70,54,38,0.12)",a.lineWidth=2+c()*8,a.beginPath(),a.moveTo(u,0),a.lineTo(u+(c()-.5)*30,r),a.stroke()}for(let d=0;d<48;d++){let u=c()*r,f=c()*r,g=2+c()*9,x=a.createRadialGradient(u,f,0,u,f,g);x.addColorStop(0,"rgba(60,46,32,0.22)"),x.addColorStop(1,"rgba(0,0,0,0)"),a.fillStyle=x,a.beginPath(),a.arc(u,f,g,0,Math.PI*2),a.fill()}let h=a.createLinearGradient(0,r*.62,0,r);return h.addColorStop(0,"rgba(40,52,36,0)"),h.addColorStop(1,"rgba(38,50,34,0.20)"),a.fillStyle=h,a.fillRect(0,r*.62,r,r*.38),o}function xl(i={}){let t=Sx(i),e=ke(t,{repeatX:i.repeatX||2,repeatY:i.repeatY||2,srgb:!0}),n=Pn(t,1.1);return n.repeat.copy(e.repeat),{map:e,bump:n}}function Mx({seed:i=31,size:t=256,twistPeriod:e=96}={}){let{c:n,g:s}=ys(t,"#8a6140"),r=Ki(i),o=3,a=t/o,c=22,l=u=>{for(let f of[-t,0,t])s.save(),s.translate(0,f),u(),s.restore()},h=["rgba(182,136,84,1)","rgba(220,172,116,1)","rgba(154,110,64,1)"];for(let u=0;u<o;u++)l(()=>{s.fillStyle=h[u],s.beginPath(),s.moveTo(0,u*a),s.lineTo(t,u*a+c),s.lineTo(t,(u+1)*a+c),s.lineTo(0,(u+1)*a),s.closePath(),s.fill()});for(let u=1;u<=o;u++){let f=u*a;l(()=>{s.strokeStyle="rgba(40,22,8,0.44)",s.lineWidth=28,s.beginPath(),s.moveTo(0,f),s.lineTo(t,f+c),s.stroke(),s.strokeStyle="rgba(20,10,4,0.66)",s.lineWidth=13,s.beginPath(),s.moveTo(0,f),s.lineTo(t,f+c),s.stroke(),s.strokeStyle="rgba(255,242,214,0.46)",s.lineWidth=8,s.beginPath(),s.moveTo(0,f-12),s.lineTo(t,f+c-12),s.stroke()})}for(let u=0;u<900;u++){let f=r()*t,g=r()*t,x=10+r()*34,m=(r()-.5)*5+c*(x/t);s.strokeStyle=r()<.5?"rgba(244,222,184,0.40)":"rgba(52,32,14,0.36)",s.lineWidth=.9+r()*1.8,s.beginPath(),s.moveTo(f,g),s.lineTo(f+x,g+m),s.stroke()}for(let u=-t;u<t*2;u+=e)l(()=>{s.strokeStyle="rgba(40,24,10,0.30)",s.lineWidth=16,s.beginPath(),s.moveTo(u,0),s.lineTo(u+34,t),s.stroke(),s.strokeStyle="rgba(255,238,206,0.22)",s.lineWidth=9,s.beginPath(),s.moveTo(u+16,0),s.lineTo(u+50,t),s.stroke()});for(let u=0;u<20;u++)s.fillStyle="rgba(46,30,14,0.16)",s.beginPath(),s.ellipse(r()*t,r()*t,12+r()*24,6+r()*10,r()*3,0,Math.PI*2),s.fill();let d=s.createLinearGradient(0,0,0,t);return d.addColorStop(0,"rgba(255,246,224,0.16)"),d.addColorStop(.35,"rgba(255,255,255,0)"),d.addColorStop(.5,"rgba(0,0,0,0.12)"),d.addColorStop(.75,"rgba(255,255,255,0)"),d.addColorStop(1,"rgba(255,246,224,0.14)"),s.fillStyle=d,s.fillRect(0,0,t,t),n}function vd({repeatX:i=4,repeatY:t=1,seed:e=31,twists:n=2}={}){let s=Mx({seed:e,twists:n,twistPeriod:256/n}),r=ke(s,{repeatX:i,repeatY:t,srgb:!0}),o=Pn(s,2.2);o.repeat.copy(r.repeat);let a=gx(s,.45,.95);return a.repeat.copy(r.repeat),{map:r,bump:o,rough:a}}function bx({seed:i=71,size:t=128,pleats:e=26,base:n="#fbf7ee",dark:s="rgba(150,140,124,0.42)"}={}){let{c:r,g:o}=ys(t,n),a=Ki(i),c=t/e;for(let l=0;l<e;l++){let h=l*c,d=o.createLinearGradient(h,0,h+c,0);d.addColorStop(0,s),d.addColorStop(.35,"rgba(255,255,255,0.55)"),d.addColorStop(.7,"rgba(255,255,255,0.1)"),d.addColorStop(1,s),o.fillStyle=d,o.fillRect(h,0,c,t)}for(let l=0;l<500;l++)o.fillStyle=a()<.5?"rgba(255,255,255,0.16)":"rgba(120,112,98,0.12)",o.fillRect(a()*t,a()*t,2,1+a()*2);return r}function ch({repeatX:i=1,repeatY:t=1,...e}={}){let n=bx(e),s=ke(n,{repeatX:i,repeatY:t,srgb:!0}),r=Pn(n,1.1);return r.repeat.copy(s.repeat),{map:s,bump:r}}var jn=N,hh=class{constructor(t,e=112,n=12){this.T=e,this.R=n,this.radius=t,this.bulge=.09,this.bulgeCount=8,this.lay=.16;let s=this.T+1,r=this.R+1;this.count=s*r,this.pos=new Float32Array(this.count*3),this.nrm=new Float32Array(this.count*3),this.uv=new Float32Array(this.count*2);let o=[];for(let a=1;a<=this.T;a++)for(let c=1;c<=this.R;c++){let l=r*(a-1)+(c-1),h=r*a+(c-1),d=r*a+c,u=r*(a-1)+c;o.push(l,h,u,h,d,u)}this.index=o,this.geo=new ye,this.geo.setAttribute("position",new Pe(this.pos,3).setUsage(ms)),this.geo.setAttribute("normal",new Pe(this.nrm,3).setUsage(ms)),this.geo.setAttribute("uv",new Pe(this.uv,2)),this.geo.setIndex(o),this.cos=new Float32Array(r),this.sin=new Float32Array(r);for(let a=0;a<=this.R;a++){let c=a/this.R*Math.PI*2;this.cos[a]=Math.cos(c),this.sin[a]=Math.sin(c)}for(let a=0;a<=this.T;a++)for(let c=0;c<=this.R;c++){let l=(a*r+c)*2;this.uv[l]=a/this.T,this.uv[l+1]=c/this.R}this.pts=Array.from({length:s},()=>new jn),this.tan=Array.from({length:s},()=>new jn),this.nor=Array.from({length:s},()=>new jn),this.bin=Array.from({length:s},()=>new jn)}update(t){let{T:e,R:n,pts:s,tan:r,nor:o,bin:a}=this;for(let l=0;l<=e;l++)t(l/e,s[l]);for(let l=0;l<=e;l++){let h=s[Math.max(0,l-1)],d=s[Math.min(e,l+1)];r[l].subVectors(d,h),r[l].lengthSq()<1e-10&&r[l].set(1,0,0),r[l].normalize()}o[0].set(-r[0].y,r[0].x,0),o[0].lengthSq()<1e-6&&o[0].set(0,1,0),o[0].normalize();for(let l=1;l<=e;l++)o[l].copy(o[l-1]).addScaledVector(r[l],-r[l].dot(o[l-1])),o[l].lengthSq()<1e-8&&(o[l].set(0,1,0).addScaledVector(r[l],-r[l].y),o[l].lengthSq()<1e-8&&o[l].set(0,0,1)),o[l].normalize();let c=n+1;for(let l=0;l<=e;l++){a[l].crossVectors(r[l],o[l]).normalize();let h=s[l],d=o[l],u=a[l],f=l/e*this.bulgeCount*Math.PI*2,g=this.radius*(1+this.bulge*Math.sin(f)),x=this.lay>0?f*1:0,m=Math.cos(x),p=Math.sin(x),M=1+this.lay,R=1-this.lay;for(let v=0;v<=n;v++){let b=this.cos[v],T=this.sin[v];if(this.lay>0){let L=b*m+T*p,F=T*m-b*p;b=L*M,T=F*R}let C=d.x*b+u.x*T,y=d.y*b+u.y*T,E=d.z*b+u.z*T,A=1/Math.max(1e-6,Math.hypot(C,y,E)),P=(l*c+v)*3;this.pos[P]=h.x+C*g*A,this.pos[P+1]=h.y+y*g*A,this.pos[P+2]=h.z+E*g*A,this.nrm[P]=C*A,this.nrm[P+1]=y*A,this.nrm[P+2]=E*A}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0}},yl=class{constructor({segments:t=me.ropeSegments,spanHalf:e=me.spanHalf,y:n=me.ropeY,damping:s=me.damping,swayClamp:r=me.swayClamp}={}){this.N=t,this.count=t+1,this.spanHalf=e,this.restY=n,this.damping=s,this.swayClamp=r,this.restLen=e*2/t,this.pos=[],this.prev=[],this.acc=[],this.rpos=[],this.spos=[],this.pinned=new Set([0,this.count-1]);for(let a=0;a<this.count;a++){let c=a/this.N,l=-e+2*e*c,h=n-me.restSagTwo*Math.sin(Math.PI*c);this.pos.push(new jn(l,h,0)),this.prev.push(new jn(l,h,0)),this.acc.push(new jn(0,0,0)),this.rpos.push(new jn(l,h,0)),this.spos.push(new jn(l,h,0))}this.weights=new Map,this._accum=0,this._tmp=new jn,this.tube=new hh(me.ropeRadius);let o=vd({repeatX:4,repeatY:1,seed:31,twists:2});this.mat=new Oe({map:o.map,bumpMap:o.bump,bumpScale:.9,roughnessMap:o.rough,roughness:1,metalness:0,color:16777215}),this.mesh=new re(this.tube.geo,this.mat),this.mesh.castShadow=!1,this.mesh.frustumCulled=!1,this.mesh.boundingSphere=new bi(new jn(0,this.restY,0),e+1),this._curvePts=this.spos.map(a=>a.clone()),this.curve=new li(this._curvePts,!1,"catmullrom",.5)}setLoad(t,e){let n=this._nearestIndex(t);this.weights.set(n,(this.weights.get(n)||0)+e)}clearLoads(){this.weights.clear()}_nearestIndex(t){let e=He.clamp((t+this.spanHalf)/(2*this.spanHalf),0,1);return Math.round(e*this.N)}injectImpulse(t,e,n,s){let r=this._nearestIndex(t),o=me.impulseScale;for(let a of[r-1,r,r+1]){if(a<0||a>=this.count||this.pinned.has(a))continue;let c=(a===r?1:.5)*o;this.prev[a].x-=e*c,this.prev[a].y-=n*c,this.prev[a].z-=s*c}}step(t){this._accum=Math.min(this._accum+t,.1);let e=1/120,n=0;for(;this._accum>=e&&n++<16;)this._sub(e),this._accum-=e;this._relax(t)}_relax(t){let e=1-Math.exp(-(me.ropeSmooth||20)*Math.min(t,.05)),{pos:n,rpos:s,spos:r,count:o}=this;for(let a=0;a<o;a++)s[a].lerp(n[a],e);for(let a=0;a<o;a++){if(this.pinned.has(a)){r[a].copy(s[a]);continue}let c=s[Math.max(0,a-1)],l=s[a],h=s[Math.min(o-1,a+1)];r[a].set(c.x*.25+l.x*.5+h.x*.25,c.y*.25+l.y*.5+h.y*.25,c.z*.25+l.z*.5+h.z*.25)}}_sub(t){let{pos:e,prev:n,acc:s}=this;for(let r=0;r<this.count;r++)s[r].set(0,-5.2,0);for(let[r,o]of this.weights)s[r].y-=o*4.2,r>0&&(s[r-1].y-=o*2),r<this.count-1&&(s[r+1].y-=o*2);for(let r=0;r<this.count;r++){if(this.pinned.has(r))continue;let o=e[r],a=n[r],c=s[r],l=o.x+(o.x-a.x)*this.damping+c.x*t*t,h=o.y+(o.y-a.y)*this.damping+c.y*t*t,d=o.z+(o.z-a.z)*this.damping+c.z*t*t;a.copy(o),o.set(l,h,d)}for(let r=0;r<10;r++){for(let o=0;o<this.N;o++){let a=e[o],c=e[o+1];this._tmp.subVectors(c,a);let l=this._tmp.length()||1e-6,h=(l-this.restLen)/l,d=this.pinned.has(o),u=this.pinned.has(o+1);if(d&&u)continue;let f=d?0:u?1:.5,g=u?0:d?1:.5;a.addScaledVector(this._tmp,h*f),c.addScaledVector(this._tmp,-h*g)}e[0].set(-this.spanHalf,this.restY,0),e[this.count-1].set(this.spanHalf,this.restY,0);for(let o=0;o<this.count;o++){let a=e[o];a.z=He.clamp(a.z,-this.swayClamp,this.swayClamp),a.y=Math.min(a.y,this.restY+.18)}}}yAt(t){let n=He.clamp((t+this.spanHalf)/(2*this.spanHalf),0,1)*this.N,s=Math.min(Math.floor(n),this.N-1),r=n-s;return this.spos[s].y*(1-r)+this.spos[s+1].y*r}slopeAt(t){return(this.yAt(t+.3)-this.yAt(t-.3))/(2*.3)}pointAt(t){return this.spos[He.clamp(t,0,this.count-1)]}updateVisual(){for(let n=0;n<this.count;n++)this._curvePts[n].copy(this.spos[n]);let t=this.curve;this.tube.update((n,s)=>t.getPoint(n,s))}sagAmount(){return this.restY-this.yAt(0)}};var Ss=512,Qi=320,vl=class{constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=Ss,this.canvas.height=Qi,this.g=this.canvas.getContext("2d"),this.texture=new un(this.canvas),this.texture.colorSpace=Ge,this.texture.anisotropy=4,this.mat=new We({map:this.texture,side:Te,transparent:!0}),this.plane=new re(new Ee(1.6,1),this.mat),this.group=new ue,this.hanger=new ue;let t=new Oe({color:4864808,roughness:.8,metalness:.3}),e=new re(new Ye(.018,.018,.9,6),t);e.position.y=-.45;let n=new re(new Ye(.012,.012,1.7,6),t);n.rotation.z=Math.PI/2,n.position.y=-.9;let s=new re(new Ti(.05,.012,6,12,Math.PI),t);s.position.y=-.02,this.hanger.add(e,n,s),this.plane.position.y=-1.42,this.group.add(this.hanger,this.plane),this.price=0,this.chg24h=0,this.chg24hText="",this.bob=0,this.bobVel=0,this.flash=0,this.spin=0,this._lastDir=1,this.lastDrawnKey=""}setPrice(t){if(!t||t<=0||t===this.price)return;let e=this.price;if(this.price=t,e>0){let n=t>e?1:-1;this.bobVel+=n*.5,Math.abs(t-e)/e>.001&&(this.flash=.15)}this._draw()}setChange24h(t){this.chg24h=t,this.chg24hText="",this._draw()}setChange24hText(t){this.chg24hText=t||"",this._draw()}_draw(){let t=this.g,e=this._lastDir===-1?Me.flagDown:Me.flagUp,n=`${this.price.toFixed(1)}|${e}|${this.chg24hText||this.chg24h.toFixed(2)}`;if(n===this.lastDrawnKey)return;this.lastDrawnKey=n,t.clearRect(0,0,Ss,Qi),t.fillStyle=e,t.beginPath(),t.moveTo(14,10),t.lineTo(Ss-14,10),t.lineTo(Ss-34,Qi/2),t.lineTo(Ss-14,Qi-10),t.lineTo(14,Qi-10),t.lineTo(34,Qi/2),t.closePath(),t.fill(),t.strokeStyle="rgba(255,255,255,0.85)",t.lineWidth=8,t.stroke();let s=this.price>0?this.price.toLocaleString("en-US",{minimumFractionDigits:1,maximumFractionDigits:1}):"--";t.fillStyle="#FFFFFF",t.textAlign="center",t.font='bold 92px "Consolas", "Courier New", monospace',t.fillText(s,Ss/2,Qi/2+18),t.font='bold 34px "Consolas", monospace',t.fillText("USDT",Ss/2,Qi/2+62),t.font='bold 44px "Consolas", monospace',t.fillStyle="rgba(255,255,255,0.95)",this.chg24hText?(t.textAlign="left",t.fillText(this.chg24hText,34,58)):(t.font='bold 56px "Segoe UI Symbol", sans-serif',t.textAlign="center",t.fillText(this.chg24h>=0?"\u2191":"\u2193",62,62)),this.texture.needsUpdate=!0}tickDir(t){this._lastDir=t}update(t,e,n){this.bobVel+=-this.bob*30*t-this.bobVel*4*t,this.bob+=this.bobVel*t,this.bob=He.clamp(this.bob,-.12,.12),this.flash>0?(this.flash-=t,this.plane.material.color.setScalar(1+Math.max(this.flash,0)*4)):this.plane.material.color.setScalar(1),this.spin>0&&(this.spin=Math.max(0,this.spin-t*2));let s=e.pointAt(5);this.group.position.set(s.x,s.y+this.bob,He.clamp(s.z,-.3,.3)),this.group.rotation.z=He.clamp(-e.slopeAt(s.x)*.5,-.35,.35),this.group.rotation.x=s.z*.8,this.plane.rotation.y=Math.sin(performance.now()*.0012)*.12+this.spin*6.28}};function dh(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t;let s=n.getContext("2d");return s.fillStyle=e,s.fillRect(0,0,i,t),{c:n,g:s}}function ua(i,t,e,n=2){i.strokeStyle=e,i.lineWidth=n,i.beginPath(),t.forEach(([s,r],o)=>o?i.lineTo(s,r):i.moveTo(s,r)),i.stroke()}function uh(i,t,e,n,s){ua(i,[[t,e-n],[t+n,e],[t,e+n],[t-n,e],[t,e-n]],s,2)}function Sd(i,t,e){i.fillStyle="rgba(255,255,255,0.055)";for(let n=0;n<t;n+=4)i.fillRect(n,0,1,e);i.fillStyle="rgba(37,28,20,0.045)";for(let n=0;n<e;n+=4)i.fillRect(0,n,t,1)}function Md(i,t=.2){return{map:ke(i),bump:Pn(i,t)}}function or(i,t,e,n,s=!0){let r=s?"#187847":"#721723",o=s?"#A8DFC1":"#E8C078";i.fillStyle=r,i.fillRect(0,e,t,n),ua(i,[[0,e+3],[t,e+3]],o,2),ua(i,[[0,e+n-3],[t,e+n-3]],o,2);let a=n*.84;for(let c=a/2;c<t+a;c+=a)uh(i,c,e+n/2,n*.28,o),i.fillStyle=s?"#4BBE81":"#B98944",i.beginPath(),i.ellipse(c,e+n/2,n*.07,n*.13,.6,0,Math.PI*2),i.fill()}function Sl(i="skirt"){let{c:n,g:s}=dh(512,256,"#F2EFE9"),r=i==="sleeve"?8:12;for(let o=0;o<r;o++){let a=o*512/r,c=s.createLinearGradient(a,0,a+512/r,0);c.addColorStop(0,"rgba(91,99,94,0.12)"),c.addColorStop(.42,"rgba(255,255,255,0.05)"),c.addColorStop(1,"rgba(91,99,94,0.12)"),s.fillStyle=c,s.fillRect(a,0,512/r,256)}return i==="skirt"&&or(s,512,214,34),i==="sleeve"&&or(s,512,216,32),i==="body"&&(s.save(),s.translate(512*.25+12,18),s.rotate(Math.PI/2),or(s,208,0,24),s.restore(),ua(s,[[512*.25-17,18],[512*.25-17,224],[512*.25+17,224],[512*.25+17,18]],"#54A879",2)),Sd(s,512,256),Md(n,.14)}function fh(i="cape"){let{c:n,g:s}=dh(512,512,"#A31621");for(let r=0;r<8;r++){let o=r*64,a=s.createLinearGradient(o,0,o+64,0);a.addColorStop(0,"rgba(30,4,13,0.28)"),a.addColorStop(.5,"rgba(238,80,63,0.12)"),a.addColorStop(1,"rgba(30,4,13,0.28)"),s.fillStyle=a,s.fillRect(o,0,64,512)}if(or(s,512,467,34,!1),i==="cape"){for(let r of[17,473])s.save(),s.translate(r+24,0),s.rotate(Math.PI/2),or(s,512,0,24,!1),s.restore();uh(s,256,235,74,"#D5AC65"),uh(s,256,235,64,"#D5AC65"),s.fillStyle="#E4BC77",s.beginPath(),s.moveTo(250,190),s.lineTo(262,190),s.lineTo(266,224),s.lineTo(293,220),s.lineTo(293,236),s.lineTo(266,233),s.lineTo(263,275),s.lineTo(249,275),s.lineTo(246,233),s.lineTo(219,236),s.lineTo(219,220),s.lineTo(246,224),s.closePath(),s.fill();for(let r=60;r<440;r+=66)for(let o of[85,427]){ua(s,[[o,r+25],[o,r-22]],"#BC4243",2),s.strokeStyle="#BC4243";for(let a of[-1,1])s.beginPath(),s.ellipse(o+a*8,r,7,15,a*.6,0,Math.PI*2),s.stroke()}}else{for(let r=32;r<512;r+=64)s.fillStyle="#D5AD65",s.beginPath(),s.ellipse(r,242,13,152,0,0,Math.PI*2),s.fill(),s.fillStyle="#52131B",s.beginPath(),s.ellipse(r,242,10,145,0,0,Math.PI*2),s.fill(),s.fillStyle="#E8D8B7",s.beginPath(),s.ellipse(r+2,250,5,122,0,0,Math.PI*2),s.fill();or(s,512,45,24,!1)}return Sd(s,512,512),Md(n,.18)}function bd(i){let{c:t,g:e}=dh(128,128,"#211B19"),n=e.createRadialGradient(64,65,6,64,64,64);return n.addColorStop(0,"#F9E5A4"),n.addColorStop(.4,i),n.addColorStop(.83,i),n.addColorStop(1,"#19231C"),e.fillStyle=n,e.fillRect(0,0,128,128),e.fillStyle="#090C10",e.beginPath(),e.moveTo(64,10),e.bezierCurveTo(46,42,46,87,64,118),e.bezierCurveTo(80,88,80,40,64,10),e.fill(),e.fillStyle="#FFFCED",e.beginPath(),e.ellipse(45,36,9,12,-.4,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,255,240,0.5)",e.beginPath(),e.arc(77,86,4,0,Math.PI*2),e.fill(),{map:ke(t)}}var ts=N,Ci=He.clamp,ph=He.lerp,fn=i=>i*i*(3-2*i),Gn=i=>1-Math.pow(1-i,3),Ex=-Math.PI/2-.6;function Ri(i,t,e){let n=Ci((i.data.hold||0)/(i.dur||1),0,.34),s=e-n*.5;return{HF:n,p1:t,p2:s,p3:s+n}}var mh=new Map;function Fe(i,t){return mh.has(i)||mh.set(i,t()),mh.get(i)}function ie(i,t="fur",e={},n=null){var r;let s=new Oe({color:i,...ca[t],...e});return n&&(s.map=n.map,n.bump&&(s.bumpMap=n.bump,s.bumpScale=(r=e.bumpScale)!=null?r:.06)),s}function Mt(i,t,e=0,n=0,s=0){let r=new re(i,t);return r.position.set(e,n,s),r.castShadow=!0,r}var Qe=(i,t,e=14,n=10)=>new _n(i,e,n),wd=(i,t)=>new Ur(i,t,4,10),lr=(i,t,e)=>new be(i,t,e),Ed=(i,t,e=10)=>new Gi(i,t,e),je=(i,t,e=Math.PI*2)=>new Ti(i,t,8,20,e),hr=(i,t,e,n=10)=>new Ye(i,t,e,n);function cr(i){let t={position:[],normal:[],uv:[]};for(let n of i){let s=n.index?n.toNonIndexed():n;for(let r of Object.keys(t))t[r].push(...s.attributes[r].array);s!==n&&s.dispose(),n.dispose()}let e=new ye;for(let n of Object.keys(t))e.setAttribute(n,new ce(t[n],n==="uv"?2:3));return e}function es(i,t=.003,e=12){return new us(new li(i.map(s=>new ts(...s))),e,t,5,!1)}function Ml(i,t,e,n=32,s=6,r=10,o=.01){let a=new Ye(i,t,e,n,s,!0),c=a.attributes.position;for(let l=0;l<c.count;l++){let h=c.getX(l),d=c.getY(l),u=c.getZ(l),f=Ci(.5-d/e,0,1),g=Math.atan2(h,u),x=.5+.5*Math.cos(g*r+Math.sin(f*Math.PI)*.32),m=o*x*(.28+.72*Math.sin(f*Math.PI/2)),p=Math.hypot(h,u),M=(p-m)/p;c.setXYZ(l,h*M,d,u*M)}return a.computeVertexNormals(),a}function Td(i,t,e=.009){let n=[0,0,e],s=[.5,.5],r=[],o=32;for(let c=0;c<o;c++){let l=c/o*Math.PI*2,h=Math.cos(l)*i/2,d=Math.sin(l)*t/2*(.72+.28*Math.abs(Math.sin(l)));n.push(h,d,0),s.push(h/i+.5,d/t+.5),r.push(0,c+1,(c+1)%o+1)}let a=new ye;return a.setAttribute("position",new ce(n,3)),a.setAttribute("uv",new ce(s,2)),a.setIndex(r),a.computeVertexNormals(),a}function da(i,t,e,n,s,r,o){let a=new ue;a.position.set(t,e,n);let c=Mt(wd(r,s),o,0,-s/2,0);return a.add(c),i.add(a),a}function Ad(i){let t=new ue,e=Fe(`fur-${i.furKey}`,()=>ha(i.furOpts)),n=i.furBellyKey?Fe(`fur-${i.furBellyKey}`,()=>ha(i.furBellyOpts)):e,s={fur:ie(i.furBase,"fur",{bumpScale:.04},e),belly:ie(i.furBelly,"fur",{bumpScale:.03},n),inner:ie(i.earInner,"fur",{},e),eye:ie("#FFFFFF","fur",{emissive:i.eye,emissiveIntensity:.08,roughness:.28},Fe(`eye-${i.eye}`,()=>bd(i.eye))),cheek:ie(i.furBelly,"fur",{roughness:.94}),lid:ie(i.furKey==="A-fur"?"#695346":"#424651","fur"),socket:ie("#25252C","fur"),brow:ie(i.furKey==="A-fur"?"#C08A52":"#CAD0D3","fur"),pupil:ie("#101014","fur"),nose:ie(i.nose,"fur"),whisker:ie("#FFFFFF","fur",{roughness:.45}),mouth:ie("#241A14","fur")},r=new ue;r.position.y=.52,t.add(r);let o=Mt(Qe(.15),s.fur,0,0,0);o.scale.set(1.1,.9,1),r.add(o);let a=new ue;r.add(a);let c=Mt(wd(.155,.28),s.fur,.05,.3,0);c.rotation.z=-.15,a.add(c);let l=Mt(Qe(.13),s.belly,.02,.22,0);l.scale.set(1.1,1,.8),a.add(l);let h=new ue;h.position.set(.1,.62,0),a.add(h);let d=Mt(Qe(.205,18,14),s.fur);d.scale.set(1.05,.95,.95),h.add(d);let u=[];for(let A of[-1,1]){let P=new _n(1,16,10);P.scale(.082,.057,.061),P.translate(.196,-.046,A*.047),u.push(P)}let f=new _n(1,14,8);f.scale(.061,.035,.069),f.translate(.189,-.094,0),u.push(f);let g=Mt(cr(u),s.cheek);g.name="rounded-feline-muzzle",h.add(g);let x=Mt(new _n(.025,12,8),s.nose,.271,-.023,0);x.scale.set(.72,.65,1);let m=x.geometry.attributes.position;for(let A=0;A<m.count;A++)m.setZ(A,m.getZ(A)*(.65+.35*(m.getY(A)/.025+1)/2));x.geometry.computeVertexNormals(),h.add(x);let p=i.furKey==="A-fur",M=[es([[.282,-.033,0],[.28,-.052,0],[.277,-.062,0]],.0027,6)];for(let A of[-1,1]){M.push(es([[.277,-.06,0],[.273,-.075,A*.024],[.253,-.073,A*.056],[.233,p&&A===1?-.053:-.064,A*.079]],.0026,9));let P=new ue;P.position.set(.143,.065,A*.135),P.rotation.y=A>0?.77:Math.PI-.77,P.rotation.z=A*(p?.1:-.09);let L=p&&A===1?.065:p?.057:.05,F=Mt(Td(.105,L+.013,.009),s.socket),D=Mt(Td(.093,L,.011),s.eye,0,0,.004);D.name="almond-eye-slit-pupil",P.add(F,D);let H=Mt(es([[-.051,0,.004],[-.026,L*.47,.009],[0,L*.54,.01],[.029,L*.4,.009],[.052,0,.004]],.003,10),s.lid);P.add(H);let q=Mt(es([[-.043,L*.58,0],[-.018,L*.79,.002],[.02,L*(p&&A===1?.92:.69),0]],.005,8),s.brow);P.add(q),h.add(P)}h.add(Mt(cr(M),s.mouth));let R=[];for(let A of[-1,1])for(let P=0;P<3;P++){let L=[[.235,-.036-P*.015,A*.078],[.228,-.038-P*.018,A*.139],[.195,-.021-P*.025,A*.204],[.143,-.005-P*.031,A*(.257-P*.009)]],F=new li(L.map(q=>new ts(...q))),D=new us(F,12,.0027,4,!1),H=D.attributes.position;for(let q=0;q<=12;q++){let X=F.getPointAt(q/12),ot=1-q/12*.86;for(let $=0;$<=4;$++){let nt=q*5+$;H.setXYZ(nt,X.x+(H.getX(nt)-X.x)*ot,X.y+(H.getY(nt)-X.y)*ot,X.z+(H.getZ(nt)-X.z)*ot)}}D.computeVertexNormals(),R.push(D)}let v=Mt(cr(R),s.whisker);v.name="swept-tapered-whiskers",v.castShadow=!1,h.add(v);let b=[];for(let A of[1,-1]){let P=new ue;P.position.set(-.02,.17,A*.12);let L=Mt(Ed(.055,.13),s.fur,0,.05,0),F=Mt(Ed(.03,.08),s.inner,.012,.04,0);P.add(L,F),h.add(P),b.push(P)}let T={};for(let A of["L","R"]){let L=da(a,.08,.44,A==="L"?-.17:.17,.2,.052,s.fur),F=da(L,0,-.22,0,.19,.046,s.fur),D=Mt(Qe(.055,10,8),s.fur,0,-.21,0);F.add(D),T[A]={shoulder:L,elbow:F,paw:D}}let C={};for(let A of["L","R"]){let L=da(r,-.02,-.05,A==="L"?-.09:.09,.2,.062,s.fur),F=da(L,0,-.22,0,.18,.05,s.fur),D=Mt(lr(.14,.05,.09),s.fur,.03,-.2,0);F.add(D),C[A]={hip:L,knee:F,foot:D}}let y=[],E=new ue;E.position.set(-.1,.06,.12),E.rotation.z=Ex,r.add(E);for(let A=0;A<6;A++){let P=da(A===0?E:y[A-1],0,A===0?0:-.13,0,.15,.04-A*.004,s.fur);A>0&&P.add(Mt(Qe(.04-A*.004,8,6),s.fur,0,0,0)),y.push(P)}return y[5].add(Mt(Qe(.03,8,6),s.fur,0,-.15,0)),{root:t,hips:r,spine:a,head:h,ears:b,arms:T,legs:C,tail:y,M:s,furPair:e}}function Tx(){let i=new ue,t=Fe("steel",()=>ji({seed:41,base:"#ffffff",streak:.24})),e=Fe("gold",()=>ji({seed:42,base:"#ffffff",streak:.16,scratches:180})),n=Fe("leather",()=>lh({seed:43})),s=ie(ze.steelBlade,"steel",{},t),r=ie(ze.goldPrimary,"gold",{},e),o=Mt(hr(.016,.018,.13,8),ie(ze.leatherBrown,"cloth",{},n),-.05,0,0);o.rotation.z=Math.PI/2,i.add(o);let a=Mt(je(.05,.011),r,.02,0,0);a.rotation.y=Math.PI/2,i.add(a),i.add(Mt(Qe(.02,8,6),r,.025,0,0));let c=Mt(hr(.009,.018,1.15,6),s,.63,0,0);return c.rotation.z=-Math.PI/2,i.add(c),i.add(Mt(Qe(.03,10,8),ie(ze.gemRuby,"gold",{emissive:ze.gemRuby,emissiveIntensity:.35}),-.125,0,0)),i}function wx(){let i=new ue,t=Fe("steel",()=>ji({seed:41,base:"#ffffff",streak:.24})),e=Fe("silver",()=>ji({seed:44,base:"#ffffff",streak:.18,scratches:200})),n=Fe("cloth-emerald",()=>vs({seed:51,weave:7})),s=ie(qe.steelBlade,"steel",{},t),r=ie(qe.silverMain,"silver",{},e),o=Mt(hr(.016,.018,.12,8),ie(qe.emeraldDeep,"cloth",{},n),-.05,0,0);o.rotation.z=Math.PI/2,i.add(o);let a=Mt(je(.045,.01,Math.PI*1.2),r,.015,0,0);a.rotation.y=Math.PI/2,a.rotation.x=.3,i.add(a);let c=[];for(let d=0;d<=8;d++){let u=d/8;c.push(new ts(.06+u*.92,Math.sin(u*1.5)*.16,0))}let l=new re(new us(new li(c),16,.03,6,!1),s);l.scale.z=.42,l.castShadow=!0,i.add(l);let h=Mt(je(.14,.004,Math.PI*.9),ie(qe.silverShadow,"silver"),.42,.09,0);return h.rotation.z=-.5,i.add(h),i.add(Mt(Qe(.028,10,8),ie(qe.gemEmerald,"gold",{emissive:qe.gemEmerald,emissiveIntensity:.4}),-.115,0,0)),i}function Ax(){let i=Fe("embroidered-cape",()=>fh("cape")),t=ie("#FFFFFF","cloth",{side:Te,bumpScale:.009},i),e=new Ee(.52,.78,10,12);e.translate(0,-.39,0);{let s=e.attributes.position;for(let r=0;r<s.count;r++){let o=s.getX(r),a=s.getY(r),c=Math.max(0,Math.min(1,-a/.78)),l=Math.sin(o*15)*.016+Math.sin(o*26+a*8)*.009+Math.sin(a*17+o*4)*.012+Math.sin(o*6)*.02;s.setZ(r,l*c*1.7)}e.computeVertexNormals()}let n=new re(e,t);return n.castShadow=!0,n.name="embroidered-red-cape",n}function Rx(){let i=Ad({furKey:"A-fur",furOpts:{seed:3,blotch:6,grain:.12,dark:"#d9c4ad",repeatX:1.1,repeatY:1.1},furBase:ze.furWhite,furBelly:ze.furWhite,earInner:ze.nosePink,eye:ze.eyeAmber,eyeGlow:.25,nose:ze.nosePink}),t=Fe("gold",()=>ji({seed:42,base:"#ffffff",streak:.16,scratches:180})),e=Fe("cloth-crimson",()=>vs({seed:52,weave:6})),n=Fe("ginger",()=>ha({seed:6,blotch:3,grain:.14,repeatX:3,repeatY:3})),s=Fe("steel",()=>ji({seed:41,base:"#ffffff",streak:.24})),r={gold:ie(ze.goldPrimary,"gold",{},t),goldBright:ie(ze.goldBright,"goldBright",{},t),crimson:ie(ze.crimsonMain,"cloth",{},e),ginger:ie(ze.furGinger,"fur",{},n),steel:ie(ze.steelBlade,"steel",{},s),cross:ie(ze.goldBright,"goldBright",{emissive:ze.goldBright,emissiveIntensity:0})},o=Mt(Qe(.085,12,8),r.ginger,.09,.07,-.12);o.scale.set(1.1,.9,.45),i.head.add(o);let a=Mt(Qe(.09,12,8),r.ginger,-.06,.1,.1);a.scale.set(1,.8,.5),i.head.add(a);let c=Mt(Qe(.12,12,8),r.ginger,-.02,.3,-.09);c.scale.set(1.2,1,.5),i.spine.add(c),i.tail[5].add(Mt(Qe(.045,8,6),r.ginger,0,-.13,0));let l=new ue;l.position.set(.02,.13,0),l.rotation.z=-.12;let h=Mt(new _n(.165,16,10,0,Math.PI*2,0,Math.PI*.55),r.steel);h.scale.set(1.15,1,1.05),l.add(h);let d=Mt(je(.185,.024),r.steel,0,.04,0);d.rotation.x=Math.PI/2,d.scale.set(1.18,1.05,1);let u=d.geometry.attributes.position;for(let ft=0;ft<u.count;ft++){let _t=u.getX(ft);u.setZ(ft,u.getZ(ft)-.025*Math.pow(Math.abs(_t)/.209,3))}d.geometry.computeVertexNormals(),l.add(d);let f=new $s;f.moveTo(-.18,.075),f.bezierCurveTo(-.12,.14,-.105,.224,-.025,.223),f.bezierCurveTo(.055,.228,.11,.155,.18,.075),f.quadraticCurveTo(0,.14,-.18,.075);let g=new Wr(f,{depth:.022,bevelEnabled:!0,bevelThickness:.004,bevelSize:.004,bevelSegments:2,steps:1,curveSegments:12});g.scale(1,.85,1),g.translate(0,0,-.011),l.add(Mt(g,r.steel));let x=es([[-.178,.079,0],[-.1,.183,0],[-.025,.225,0],[.065,.19,0],[.178,.08,0]],.004,18);x.scale(1,.85,1),l.add(Mt(x,r.goldBright));let m=Mt(je(.165,.008),r.goldBright,0,.05,0);m.rotation.x=Math.PI/2,m.scale.set(1.2,1.1,1),l.add(m),l.add(Mt(hr(.02,.025,.05,8),r.gold,.05,.16,-.1));let p=new ue;p.position.set(.05,.125,-.1);let M=[];for(let ft=0;ft<3;ft++){let _t=new Ee(.062-ft*.009,.17-ft*.02,4,10),Wt=_t.attributes.position;for(let Ot=0;Ot<Wt.count;Ot++){let ee=Ci(Wt.getY(Ot)/(.17-ft*.02)+.5,0,1),tt=Math.pow(Math.max(0,Math.sin(Math.PI*ee)),.7);Wt.setXYZ(Ot,-.13*ee+Wt.getX(Ot)*tt,.045*Math.sin(ee*Math.PI*.75),ft*.012+Wt.getX(Ot)*tt*.25+.008*Math.sin(ee*12))}_t.computeVertexNormals(),M.push(_t)}let R=r.crimson.clone();R.side=Te,p.add(Mt(cr(M),R)),p.add(Mt(es([[0,0,0],[-.055,.035,0],[-.13,.032,0]],.0025,10),r.gold)),l.add(p),i.head.add(l),i.ears[0].position.y=.2,i.ears[0].position.z=-.17,i.ears[1].position.y=.2,i.ears[1].position.z=.17;let v=Mt(new _n(.175,14,10,0,Math.PI*2,0,Math.PI*.62),r.gold,.05,.33,0);v.rotation.z=-Math.PI/2,v.scale.set(1,1,.72),i.spine.add(v);let b=[],T=[];for(let ft=0;ft<=30;ft++){let _t=ft/30*Math.PI*2;T.push([-.014,.33+Math.cos(_t)*.162,Math.sin(_t)*.117])}b.push(es(T,.005,30)),b.push(es([[.142,.47,0],[.202,.415,0],[.226,.33,0],[.202,.245,0],[.142,.19,0]],.004,14)),i.spine.add(Mt(cr(b),r.goldBright)),i.spine.add(Mt(lr(.028,.14,.02),r.cross,.185,.34,0)),i.spine.add(Mt(lr(.1,.028,.02),r.cross,.19,.35,0)),i.spine.add(Mt(Qe(.035,10,8),r.goldBright,.13,.47,0));for(let ft of[-.17,.17]){let _t=Mt(new _n(.075,10,8,0,Math.PI*2,0,Math.PI*.5),r.gold,.08,.46,ft);_t.rotation.z=ft>0?-.5:.5,i.spine.add(_t);let Wt=Mt(je(.082,.013,Math.PI*1.15),ie(ze.leatherBrown,"cloth"),.05,.45,ft);Wt.rotation.y=Math.PI/2,Wt.rotation.z=-.35,i.spine.add(Wt)}let C=Fe("leather",()=>lh({seed:43})),y=Fe("pleat",()=>ch({pleats:30})),E=Fe("embroidered-doublet",()=>fh("doublet")),A=ie("#FBF7EE","cloth",{side:Te,bumpScale:.05},y),P=Mt(new Ye(.16,.305,.1,30,1,!0),A,.02,.47,0);P.rotation.z=-.06,i.spine.add(P);let L=Mt(new Ye(.135,.21,.06,26,1,!0),A,.02,.545,0);L.rotation.z=-.06,i.spine.add(L);let F=Mt(je(.142,.032),r.gold,.02,.415,0);F.rotation.x=Math.PI/2,F.scale.set(1,1,.9),i.spine.add(F);let D=ie("#FFFFFF","cloth",{bumpScale:.009},E);for(let ft of["L","R"]){let _t=Mt(Qe(.1,12,10),D,0,-.015,0);_t.scale.set(1,.76,1.06),i.arms[ft].shoulder.add(_t);let Wt=Mt(je(.064,.012),r.gold,0,-.2,0);Wt.rotation.x=Math.PI/2,i.arms[ft].shoulder.add(Wt)}for(let ft of[-.12,.12]){let _t=Mt(lr(.13,.15,.035),r.gold,.055,-.15,ft);_t.rotation.z=.12,_t.rotation.x=ft>0?.12:-.12,i.hips.add(_t)}let H=Mt(lr(.052,.52,.028),ie(ze.leatherBrown,"cloth",{},C),.162,.27,.01);H.rotation.z=.62,i.spine.add(H),i.spine.add(Mt(Qe(.027,10,8),r.goldBright,.19,.43,.01));let q=Ax();q.position.set(-.14,.5,0),q.rotation.y=.22,i.spine.add(q);let X=Mt(je(.155,.018),r.gold,.02,.52,0);X.rotation.x=Math.PI/2,X.rotation.z=.1,X.scale.set(1.05,.9,1),i.spine.add(X),i.spine.add(Mt(Qe(.038,10,8),r.goldBright,.16,.5,0));let ot=Mt(new Ye(.14,.19,.22,20,3,!0,.5,Math.PI*1.6),D,-.02,-.08,0);ot.material.side=Te,i.hips.add(ot);let $=Mt(je(.185,.012),r.goldBright,-.02,-.19,0);$.rotation.x=Math.PI/2,$.scale.set(1,1,.92),i.hips.add($);let nt=Mt(je(.16,.02),r.gold,0,.02,0);nt.rotation.x=Math.PI/2,nt.scale.set(1.15,1,1),i.hips.add(nt);for(let ft of["L","R"]){i.arms[ft].elbow.add(Mt(hr(.055,.05,.1,10),r.gold,0,-.1,0));let _t=ie(ze.leatherBrown,"cloth",{side:Te},C),Wt=Mt(new Ye(.066,.073,.28,12,1,!0),_t,.004,-.14,0);i.legs[ft].knee.add(Wt);let Ot=Mt(je(.079,.026),ie(ze.leatherBrown,"cloth",{},C),.004,-.005,0);Ot.rotation.x=Math.PI/2,Ot.scale.set(1,1,.88),i.legs[ft].knee.add(Ot),i.legs[ft].knee.add(Mt(Qe(.017,8,6),r.goldBright,.072,-.02,0)),i.legs[ft].knee.add(Mt(lr(.06,.03,.075),_t,-.03,-.245,0))}i.tail[5].add(Mt(je(.042,.012),r.gold,0,-.1,0));let rt=Tx();return rt.position.set(0,-.21,0),i.arms.R.elbow.add(rt),{...i,name:"DON GATO",side:"B",facing:0,sword:rt,swordArm:"R",cape:q,crossMat:r.cross,plume:p}}function Cx(){let i=Ad({furKey:"B-fur",furOpts:{seed:9,stripes:7,grain:.16,blotch:2,dark:"#6c6c78",repeatX:1.4,repeatY:1.4},furBase:qe.furSilverStripe,furBelly:qe.furBelly,earInner:qe.noseBlack,eye:qe.eyeJade,eyeGlow:.3,nose:qe.noseBlack}),t=Fe("silver",()=>ji({seed:44,base:"#ffffff",streak:.18,scratches:200})),e=Fe("cloth-emerald",()=>vs({seed:51,weave:7})),n=Fe("cloth-white",()=>vs({seed:53,weave:9,thread:"rgba(120,120,132,0.24)"})),s=Fe("B-stripe",()=>ha({seed:12,stripes:5,grain:.12})),r={emerald:ie(qe.emeraldMain,"cloth",{},e),emeraldBright:ie(qe.emeraldBright,"cloth",{},e),silver:ie(qe.silverMain,"silver",{},t),silverBright:ie(qe.silverBright,"silverBright",{},t),white:ie(qe.clothWhite,"cloth",{},n),stripe:ie(qe.furSilverStripe,"fur",{},s)};for(let L=0;L<3;L++){let F=Mt(je(.15-L*.005,.012),r.stripe,-.06+L*.09,.3-L*.02,0);F.rotation.x=Math.PI/2,F.rotation.y=.3,F.scale.set(1,1,.55),i.spine.add(F)}for(let L=1;L<6;L+=2)i.tail[L].add(Mt(je(.04,.01),r.stripe,0,-.065,0));let o=new ue;o.position.set(0,.16,0),o.rotation.z=.08;let a=Mt(Qe(.185,16,10),r.white,0,.02,0);a.scale.set(1.08,.72,1.02),o.add(a);let c=[];for(let L=0;L<3;L++){let F=new Ti(.156-L*.02,.028,8,36);F.rotateX(Math.PI/2),F.scale(1.08,.55,1),F.rotateZ(L%2?-.16:.15),F.rotateX(.08),F.translate(-L*.008,.012+L*.036,0),c.push(F)}let l=new _n(.104,16,10);l.scale(1.1,.47,1),l.translate(-.026,.112,0),c.push(l),o.add(Mt(cr(c),r.white));let h=Mt(je(.155,.02),r.emerald,0,.03,0);h.rotation.x=Math.PI/2,h.scale.set(1.12,1.06,1),o.add(h);let d=Mt(je(.045,.012,Math.PI*1.35),r.silverBright,.14,.06,0);d.rotation.y=Math.PI/2,d.rotation.z=2.2,o.add(d),i.head.add(o),i.ears[0].position.y=.24,i.ears[0].position.z=-.16,i.ears[1].position.y=.24,i.ears[1].position.z=.16;let u=Fe("embroidered-robe",()=>Sl("skirt")),f=Fe("embroidered-placket",()=>Sl("body")),g=Fe("embroidered-cuffs",()=>Sl("sleeve")),x=Fe("pleat",()=>ch({pleats:30})),m=ie("#FFFFFF","cloth",{side:Te,bumpScale:.007},u),p=ie("#FFFFFF","cloth",{side:Te,bumpScale:.007},f),M=ie("#FFFFFF","cloth",{side:Te,bumpScale:.007},g),R=ie(qe.emeraldBright,"cloth",{},e),v=Mt(Ml(.188,.212,.44,36,6,12,.008),p,.005,.22,0);i.spine.add(v);let b=Mt(new Ye(.134,.156,.1,20,1,!0),ie(qe.clothWhite,"cloth",{side:Te},x),.01,.455,0);i.spine.add(b);let T=Mt(je(.157,.013),R,.01,.505,0);T.rotation.x=Math.PI/2,i.spine.add(T);for(let L of[.13,.24,.35])i.spine.add(Mt(Qe(.014,8,6),r.silver,.211,L,0));let C=Mt(Ml(.212,.315,.54,36,8,12,.016),m,.005,-.165,0);C.name="embroidered-folded-dishdashah",i.hips.add(C);let y=Mt(je(.302,.009),R,.005,-.425,0);y.rotation.x=Math.PI/2,i.hips.add(y);let E=Mt(je(.224,.022),r.silver,.005,.015,0);E.rotation.x=Math.PI/2,E.scale.set(1,1,.92),i.hips.add(E),i.hips.add(Mt(Qe(.032,10,8),ie("#EAF2FF","goldBright",{emissive:"#BFD4FF",emissiveIntensity:.35}),.228,.02,0));for(let L of["L","R"]){let F=Mt(Ml(.082,.098,.3,24,5,8,.006),M,0,-.14,0);i.arms[L].shoulder.add(F);let D=Mt(je(.092,.014),R,0,-.285,0);D.rotation.x=Math.PI/2,i.arms[L].shoulder.add(D);let H=Mt(Ml(.068,.074,.17,24,4,8,.004),M,0,-.09,0);i.arms[L].elbow.add(H)}let A=[];i.arms.L.elbow.add(Mt(hr(.055,.05,.11,10),r.silver,0,-.1,0));let P=wx();return P.position.set(0,-.21,0),i.arms.L.elbow.add(P),{...i,name:"SULTAN BIGOTES",side:"A",facing:Math.PI,sword:P,swordArm:"L",ribbons:A,turban:o,dish:{skirt:C,hem:y}}}var bl=()=>({lean:0,twist:0,tilt:0,crouch:0,yOff:0,xOff:0,zOff:0,spineLean:.06,spineTwist:0,headPitch:0,headYaw:0,headRoll:0,shS_z:-.45,shS_x:.1,elS:-.85,shO_z:-.25,shO_x:.12,elO:-.5,thL:.06,knL:-.2,thR:.06,knR:-.2,footL:0,footR:0,tailCurl:0,tailAmp:.1,capeRaise:0,lock:0,tremble:0}),Rd=bl(),Px=Object.keys(Rd),Ix={RUSH:.42,LUNGE:.32,SLASH_UP:.3,THRUST:.26,SLASH_SPIN:.34,RIPOSTE:.34,FEINT:.16,PARRY_HOP:.16,PARRY_BEAT:.13,TAUNT:.24,HIT:.2,SIT_GUARD:.3},fa=class{constructor(t){this.data=t==="A"?Cx():Rx();let e=this.data;this.root=e.root,this.root.rotation.y=e.facing,this.pose=bl(),this.target=bl(),this.state={name:"IDLE",t:0,dur:0,data:{}},this.time=Math.random()*10,this.x=0,this.windmill=0,this.earSwivel=0,this.frozenPose=null,this.fw=e.side==="A"?-1:1,this.sword=e.arms[e.swordArm],this.off=e.arms[e.swordArm==="L"?"R":"L"]}setState(t,e=0,n={}){this.state={name:t,t:0,dur:e,data:n},t==="FREEZE"&&(this.frozenPose={...this.target})}get moveFrac(){return this.state.dur>0?Ci(this.state.t/this.state.dur,0,1):1}update(t,e){let n=this.state;switch(this.time+=t,n.t+=t,Object.assign(this.target,Rd),this.target.tailCurl=1,n.name){case"RUSH":this._rush(e);break;case"LUNGE":this._lunge(e);break;case"SLASH_UP":this._slashUp(e);break;case"THRUST":this._thrust(e);break;case"FEINT":this._feint(e);break;case"TAUNT":this._taunt(e);break;case"PARRY_HOP":this._parryHop(e);break;case"PARRY_BEAT":this._parryBeat(e);break;case"SIT_GUARD":this._sitGuard(e);break;case"SLASH_SPIN":this._slashSpin(e);break;case"RIPOSTE":this._riposte(e);break;case"FREEZE":this._freeze(e);break;case"STUMBLE":this._stumble(e);break;case"HIT":this._hit(e);break;case"BLADE_LOCK":this._bladeLock(e);break;case"CLASH":this._clash(e);break;case"RECOVER":this._recover();break;default:this._idle(e)}n.dur>0&&n.t>=n.dur&&n.name!=="RECOVER"&&n.name!=="FREEZE"&&n.name!=="BLADE_LOCK"&&this.setState("RECOVER",Ix[n.name]||.16);let s=this.pose,r=this.target,o=1-Math.exp(-20*t);for(let a of Px)s[a]=ph(s[a],r[a],o);this._applyPose(t,e)}_applyPose(t,e){let n=this.data,s=this.pose,r=e.rope,o=this.x+s.xOff,a=r.yAt(o);this.root.position.set(o,a+.02-s.crouch+s.yOff,s.zOff+s.lock*.05),this.root.rotation.y=n.facing+s.twist,this.root.rotation.z=s.tilt*(n.side==="A"?1:-1);let c=Ci(e.pressureWobble||0,-.22,.22),l=n.side==="A"?1:-1,h=n.side==="A"?c:-c;this.root.rotation.z+=h*l*(1-Math.abs(h)*2),n.hips.rotation.z=-s.lean-s.lock*.12,n.spine.rotation.z=-s.spineLean-s.lock*.2,n.spine.rotation.y=s.spineTwist,n.head.rotation.z=-s.headPitch,n.head.rotation.y=s.headYaw,n.head.rotation.x=s.headRoll;let d=s.tremble*(Math.sin(this.time*34)*.026+Math.sin(this.time*51)*.014);this.sword.shoulder.rotation.z=s.shS_z+d*1.5,this.sword.shoulder.rotation.x=s.shS_x,this.sword.elbow.rotation.z=s.elS+d,this.off.shoulder.rotation.z=s.shO_z-d*1.2,this.off.shoulder.rotation.x=s.shO_x,this.off.elbow.rotation.z=s.elO-d,this.sword.paw.rotation.z=d*2,n.legs.L.hip.rotation.z=s.thL,n.legs.L.knee.rotation.z=s.knL,n.legs.R.hip.rotation.z=s.thR,n.legs.R.knee.rotation.z=s.knR,n.legs.L.foot.rotation.z=s.footL,n.legs.R.foot.rotation.z=s.footR;let u=Math.sin(this.time*2.2)*s.tailAmp,f=s.tailCurl;if(n.tail.forEach((m,p)=>{let M=p/(n.tail.length-1);m.rotation.z=-(.055+M*.05)*f,m.rotation.x=u*(.4+M)+Math.sin(this.time*1.6+p)*.03-s.lean*.25}),this.earSwivel=ph(this.earSwivel,e.flagDart?1:0,1-Math.exp(-6*t)),n.ears.forEach((m,p)=>{let M=p===0?1:-1;m.rotation.y=M*(.15*Math.sin(this.time*.7+p*2)+this.earSwivel*.5*(n.side==="B"?1:-1))}),n.cape&&this._cape(),n.ribbons&&n.ribbons.forEach((m,p)=>{m.rotation.x=(p?.15:-.15)+Math.sin(this.time*3.6+p*1.3)*.34}),n.plume&&(n.plume.rotation.x=Math.sin(this.time*3.4)*.2),n.dish&&this._dish(n),n.dish){let m=this.state.name==="SIT_GUARD"?1:0;this._hitch=ph(this._hitch===void 0?0:this._hitch,m,1-Math.exp(-6*t));let p=this._hitch;n.dish.skirt.scale.y=1-.42*p,n.dish.skirt.position.y=-.165+.105*p,n.dish.hem&&(n.dish.hem.position.y=-.425+.185*p)}this._footTmp||(this._footTmp=new ts),this.root.updateMatrixWorld(!0);let g=a+me.ropeRadius*.5,x=1/0;for(let m of["L","R"])n.legs[m].foot.getWorldPosition(this._footTmp),this._footTmp.y<x&&(x=this._footTmp.y);if(isFinite(x)){let m=g-x;m=Math.abs(s.yOff)>.03?Ci(m*.25,-.03,.06):Ci(m,-.07,.18),this.root.position.y+=m}}_idle(t){let e=this.target,n=this.time,s=t.circlePhase||0,r=this.data.side==="A"?1:-1,o=Math.sin(s*2.2+(r>0?0:1.6));e.spineLean=.08+Math.sin(n*2.2)*.03,e.headYaw=-r*.22+Math.sin(n*.6)*.12,e.headPitch=.04,e.shS_z=-.5+Math.sin(n*2.6)*.09,e.shO_z=-.3+Math.sin(n*2.1+1)*.1,e.elS=-.7,e.elO=-.6,e.crouch=.03+Math.max(0,Math.sin(n*1.1+r))*.03,e.xOff=o*.16,e.thL=.06+Math.max(0,o)*.5,e.thR=.06+Math.max(0,-o)*.5,e.knL=-.24-Math.max(0,o)*.5,e.knR=-.24-Math.max(0,-o)*.5,e.twist=-r*.06,e.tailAmp=.16}_recover(){let t=this.moveFrac,e=t*Math.PI*1.6;this.target.shS_x=.5+Math.sin(e)*1.1,this.target.shO_x=.5-Math.sin(e)*1.1,this.target.shS_z=-.3-Math.cos(e)*.45,this.target.shO_z=-.3+Math.cos(e)*.45,this.target.spineLean=.1-Math.sin(t*Math.PI)*.22,this.target.tilt=Math.sin(t*Math.PI*2)*.12}_rush(t){let e=this.moveFrac,n=this.target,s=this.state,r=s.data.reach||.6,{p1:o,p2:a,p3:c}=Ri(s,.34,.7),l=h=>{n.xOff=this.fw*h*r,n.spineLean=.3+h*.5,n.twist=this.fw*.18,n.shO_z=-.2-h*.7,n.shS_z=1.5*h,n.shS_x=1*h,n.elS=-.05,n.headYaw=this.fw*.22,n.yOff=Math.sin(h*Math.PI)*.06};if(e<o){let h=fn(e/o),d=Math.abs(Math.sin(h*Math.PI*3));n.crouch=.06+d*.1,n.knL=-.2-d*.5,n.knR=-.2-(1-d)*.3,n.thL=.06+d*.55,n.spineLean=.3,n.twist=this.fw*.12,h>.08&&!s.data.st1&&(s.data.st1=1,t.onStamp&&t.onStamp(this)),h>.42&&!s.data.st2&&(s.data.st2=1,t.onStamp&&t.onStamp(this)),h>.75&&!s.data.st3&&(s.data.st3=1,t.onStamp&&t.onStamp(this))}else if(e<a){let h=fn((e-o)/(a-o));l(h),h>.55&&!s.data.sp&&(s.data.sp=1,t.onLungeHit&&t.onLungeHit(this))}else if(e<c)l(1);else{let h=Gn((e-c)/(1-c));n.xOff=this.fw*(r-h*.1),n.spineLean=.8-h*.5,n.tilt=Math.sin(h*Math.PI)*.14,n.crouch=.05,n.shS_z=1.35-h*.2}}_lunge(t){let e=this.moveFrac,n=this.target,s=this.state,r=s.data.reach||.7,{p1:o,p2:a,p3:c}=Ri(s,.28,.62),l=h=>{n.xOff=this.fw*h*r,n.spineLean=.25+h*.55,n.twist=this.fw*.2,n.shO_z=-.2-h*.75,n.shS_z=1.6*h,n.shS_x=1.05*h,n.elS=-.02,n.headYaw=this.fw*.24,n.headPitch=.1*h,n.yOff=Math.sin(h*Math.PI)*.05,n.thL=.06+h*.5};if(e<o){let h=fn(e/o);n.crouch=.1*h,n.spineLean=-.12*h,n.shS_z=-.5-h*.5,n.elS=-1,n.knL=-.2-h*.35,n.twist=-this.fw*.16*h}else if(e<a){let h=fn((e-o)/(a-o));l(h),h>.6&&!s.data.sp&&(s.data.sp=1,t.onLungeHit&&t.onLungeHit(this))}else if(e<c)l(1);else{let h=Gn((e-c)/(1-c));n.xOff=this.fw*(r-h*.12),n.spineLean=.8-h*.5,n.tilt=Math.sin(h*Math.PI)*.16,n.crouch=.05,n.shS_z=1.4-h*.15}}_slashUp(t){let e=this.moveFrac,n=this.target,s=this.state,{p1:r,p2:o,p3:a}=Ri(s,.3,.72),c=l=>{n.shS_z=-.75+l*2.5,n.shS_x=-.5+l*1.2,n.elS=-.8+l*.65,n.spineLean=.2-l*.34,n.twist=(-.5+l*.9)*this.fw*-1,n.yOff=Math.sin(l*Math.PI)*.14,n.thL=.06+l*.4,n.capeRaise=.35+l*.3};if(e<r){let l=fn(e/r);n.twist=-.5*l*this.fw*-1,n.shO_z=-.2-l*1.5,n.shO_x=.45,n.headPitch=-.35*l,n.capeRaise=l*.55,n.crouch=.05*l}else if(e<o){let l=fn((e-r)/(o-r));c(l),l>.6&&!s.data.sl&&(s.data.sl=1,t.onSlash&&t.onSlash(this,"up"))}else if(e<a)c(1),n.headPitch=-.42;else{let l=Gn((e-a)/(1-a));n.shS_z=1.55,n.elS=-.18,n.headPitch=-.42,n.capeRaise=.65+l*.1,n.tilt=-.1}}_thrust(t){let e=this.moveFrac,n=this.target,s=this.state,{p1:r,p2:o,p3:a}=Ri(s,.3,.56),c=l=>{n.shS_z=-.6+l*2.25,n.shS_x=.55*l,n.elS=-1.15+l*1.13,n.spineLean=-.08+l*.5,n.xOff=this.fw*l*.22,n.headYaw=-this.fw*(.08-l*.08)};if(e<r){let l=fn(e/r);n.crouch=.06*l,n.spineLean=-.08*l,n.shS_z=-.4-l*.2,n.elS=-1.15,n.headYaw=-this.fw*.08}else if(e<o){let l=fn((e-r)/(o-r));c(l),l>.6&&!s.data.th&&(s.data.th=1,t.onThrust&&t.onThrust(this))}else if(e<a)c(1);else{let l=Gn((e-a)/(1-a));n.shS_z=1.65-l*1,n.elS=-.02-l*.6,n.spineLean=.42-l*.3,n.xOff=this.fw*(.22-l*.16)}}_feint(t){let e=this.moveFrac,n=this.target,s=this.state,{p1:r,p2:o,p3:a}=Ri(s,.4,.62),c=l=>{n.crouch=.05*l,n.spineLean=.3*l,n.shS_z=.9*l,n.elS=-.5+l*.15,n.xOff=this.fw*l*.18,n.headYaw=this.fw*.14*l};if(e<r)c(fn(e/r));else if(e<o)c(fn((e-r)/(o-r)));else if(e<a)c(1),s.data.fn||(s.data.fn=1,t.onFeint&&t.onFeint(this));else{let l=Gn((e-a)/(1-a));n.crouch=.05-l*.02,n.spineLean=.3-l*.18,n.shS_z=.9-l*.35,n.elS=-.35,n.xOff=this.fw*(.18-l*.14),n.headYaw=this.fw*(.14-l*.1)}}_taunt(t){let e=this.moveFrac,n=this.target;if(e<.22){let s=e/.22;n.spineLean=.35*s,n.shS_z=-.45+s*.3,n.elS=-.85-s*.45,n.headPitch=.3*s,n.crouch=.08*s}else n.spineLean=.35,n.shS_z=-.15,n.elS=-1.3,n.headPitch=-.18+Math.sin(this.time*3.4)*.06,n.knL=-.45,n.knR=-.45,n.twist=this.fw*.1,this.data.crossMat&&(this.data.crossMat.emissiveIntensity=Math.max(0,Math.sin((e-.22)*Math.PI/.78))*1.8),e>.3&&!this.state.data.fl&&(this.state.data.fl=1,t.onTaunt&&t.onTaunt(this))}_parryHop(t){let e=this.moveFrac,n=this.target,s=this.state,{p1:r,p2:o,p3:a}=Ri(s,.45,.72),c=l=>{n.crouch=.11,n.spineLean=.4,n.shS_z=.45-l*.5,n.shS_x=-.6,n.elS=-1.15,n.twist=this.fw*(.28-l*.35),n.headPitch=.12,n.xOff=this.fw*.2*l};if(e<r){let l=e/r,h=Math.sin(l*Math.PI*2);n.xOff=-this.fw*h*.4,n.crouch=.04+Math.abs(h)*.07,n.twist=-this.fw*h*.22,n.thL=.06+Math.max(0,h)*.6,n.thR=.06+Math.max(0,-h)*.6,n.yOff=Math.abs(h)*.08,l>.4&&!s.data.sd&&(s.data.sd=1,t.onStamp&&t.onStamp(this))}else if(e<o)c(fn((e-r)/(o-r)));else if(e<a)c(1);else{let l=Gn((e-a)/(1-a));n.crouch=.11,n.spineLean=.4,n.shS_z=-.05-l*.4,n.shS_x=-.6+l*.3,n.elS=-1.15+l*.35,n.twist=this.fw*(-.07+l*.05),n.xOff=this.fw*.2*(1-l*.5)}}_parryBeat(t){let e=this.moveFrac,n=this.target,s=this.state,{p1:r,p2:o,p3:a}=Ri(s,.34,.58),c=l=>{n.shS_z=-.5+l*1.35,n.elS=-.9+l*.75,n.shS_x=-.2+l*.35,n.crouch=.03,n.headYaw=this.fw*.06};if(e<r){let l=fn(e/r);c(l),l>.7&&!s.data.bt&&(s.data.bt=1,t.onBeat&&t.onBeat(this))}else if(e<o){let l=fn((e-r)/(o-r));c(l),l>.9&&!s.data.bt2&&(s.data.bt2=1,t.onBeat&&t.onBeat(this))}else if(e<a)c(1);else{let l=Gn((e-a)/(1-a));n.shS_z=.85-l*1.3,n.elS=-.15-l*.5,n.shS_x=.15,n.crouch=.03+l*.02}}_sitGuard(t){let e=this.target,n=this.time,s=Math.sin(n*1.9)*.022,r=Math.sin(n*2.4)*.05,o=Math.sin(n*1.3)*.02;e.crouch=.28+s,e.spineLean=.1+s*.5,e.tilt=o,e.headPitch=.12,e.headYaw=-this.fw*.14,e.shS_z=-.25+r,e.shS_x=.85,e.elS=-2.55+r,e.shO_z=-.7,e.shO_x=.6,e.elO=-1.1,e.thL=1.25,e.thR=1.25,e.knL=-2.6,e.knR=-2.6,e.footL=.3,e.footR=.3,e.capeRaise=.45,e.tailCurl=1.55,e.tailAmp=.03,e.earSwivel=0,t.flagDart&&(e.headYaw+=-this.fw*.1)}_slashSpin(t){let e=this.moveFrac,n=this.target,s=this.state,{p1:r,p2:o,p3:a}=Ri(s,.42,.8);if(e<r){let c=fn(e/r);n.shS_z=-.7+c*(2.15+Math.PI*2),n.elS=-.2,n.spineLean=-.12,n.headPitch=-.24,n.twist=c*.5*this.fw,n.yOff=Math.sin(c*Math.PI)*.1,c>.3&&!s.data.w1&&(s.data.w1=1,t.onWhoosh&&t.onWhoosh(this))}else if(e<o){let c=(e-r)/(o-r),l=Math.abs(Math.sin(c*Math.PI*2));n.shS_z=1.45-l*1.85,n.elS=-.35,n.spineLean=.15+l*.28,n.crouch=.05+l*.09,n.xOff=this.fw*.3*Gn(c),c>.2&&!s.data.c1&&(s.data.c1=1,t.onSlash&&t.onSlash(this,"down")),c>.7&&!s.data.c2&&(s.data.c2=1,t.onSlash&&t.onSlash(this,"down"))}else if(e<a)n.shS_z=-.4,n.elS=-.35,n.spineLean=.43,n.crouch=.14,n.headPitch=.18,n.xOff=this.fw*.3,s.data.c3||(s.data.c3=1,t.onSlash&&t.onSlash(this,"down"));else{let c=Gn((e-a)/(1-a));n.shS_z=-.4+c*.1,n.elS=-.35-c*.4,n.spineLean=.43-c*.3,n.crouch=.14-c*.1,n.xOff=this.fw*.3*(1-c*.5)}}_riposte(t){let e=this.moveFrac,n=this.target,s=this.state,{p1:r,p2:o,p3:a}=Ri(s,.44,.74),c=l=>{n.shS_z=-1.5+l*2.7,n.shS_x=-1+l*.7,n.elS=-.25,n.twist=this.fw*(.35-l*.6),n.xOff=this.fw*.35*l};if(e<.18){let l=fn(e/.18);n.crouch=.24*l,n.spineLean=.55*l,n.headPitch=.24,n.knL=-.2-l*.5,n.knR=-.2-l*.5}else if(e<.36){let l=(e-.18)/.18;n.twist=Math.sin(fn(l)*Math.PI)*1.9*this.fw,n.crouch=.14,n.shS_z=-1.3,n.xOff=-this.fw*Math.sin(l*Math.PI)*.3}else if(e<o){let l=fn((e-.36)/(o-.36));c(l),l>.55&&!s.data.cr&&(s.data.cr=1,t.onSlash&&t.onSlash(this,"crescent"))}else if(e<a)c(1);else{let l=Gn((e-a)/(1-a));n.spineLean=.4,n.shS_z=1.6,n.elS=-.08,n.xOff=this.fw*(.35+l*.45),n.headYaw=this.fw*.2}}_freeze(t){Object.assign(this.target,this.frozenPose||bl()),this.target.tailAmp=.1,this.target.crouch=(this.frozenPose?this.frozenPose.crouch:0)+Math.max(0,Math.sin(this.time*.8))*.02,this.target.headYaw=Math.sin(this.time*.45)*.2,t.flagDart=!0}_hit(t){let e=this.moveFrac,n=this.target,s=this.state,r=s.data.dir||-this.fw,o=s.data.mag||1;if(e<.4){let a=Gn(e/.4);n.spineLean=-.4*a*o,n.headPitch=.5*a*o,n.headYaw=-r*.3*a,n.xOff=r*a*.24*o,n.shO_x=1*a,n.shS_x=.6*a,n.crouch=.1*a,n.tremble=a*.6,a>.5&&!s.data.imp&&(s.data.imp=1,t.onHitImpact&&t.onHitImpact(this))}else{let a=(e-.4)/.6;n.spineLean=-.4*o*(1-a),n.headPitch=.5*o*(1-a),n.xOff=r*.24*o*(1-a),n.crouch=.1*(1-a),n.shO_z=-.2-a*.5,n.tremble=.6*(1-a),n.twist=r*.2*(1-a)}}_stumble(t){let e=this.moveFrac,n=this.target,s=this.state,r=s.data.dir||-this.fw,o=s.data.dist||.7;if(e<.18){let a=e/.18;n.tilt=Math.sin(this.time*20)*.26*a,n.spineLean=.24+Math.sin(this.time*16)*.3*a,n.crouch=.06,n.tremble=a*.8}else if(e<.56){let a=(e-.18)/.38;n.xOff=r*a*o,n.tilt=1.25*a,n.crouch=.1+a*.3,n.yOff=Math.sin(a*Math.PI)*.42,n.shS_x=1.35,n.shO_x=1.35,n.shS_z=-1.3,n.shO_z=-1.3,n.twist=r*a*.5,a>.5&&!s.data.tu&&(s.data.tu=1,t.onTumble&&t.onTumble(this))}else if(e<.8)n.xOff=r*o,n.tilt=1.25+Math.sin(this.time*22)*.1,n.crouch=.4,n.shS_x=1.5,n.shO_x=1.5,n.twist=r*.5;else{let a=(e-.8)/.2;n.xOff=r*(1-a)*o,n.tilt=1.25*(1-a),n.crouch=.4-a*.34,n.twist=r*.5*(1-a)}}_bladeLock(t){let e=this.moveFrac,n=this.target,r=.6+(Math.sin(this.time*7.5)*.5+.5)*.4;n.lock=r,n.spineLean=.5+r*.25,n.shS_z=.55+r*.2,n.shS_x=1.15,n.elS=-.35,n.shO_z=.15,n.shO_x=.9,n.elO=-.5,n.crouch=.1+r*.06,n.tremble=1,n.headPitch=.16,n.headYaw=-this.fw*.1,n.xOff=this.fw*(.05+r*.06),n.tailAmp=.05,e>.1&&!this.state.data.sparkT&&(this.state.data.sparkT=1,t.onLockSparks&&t.onLockSparks(this))}_clash(t){let e=this.moveFrac,n=this.target,s=this.state,r=.5+.5*Math.sin(this.time*9);if(n.spineLean=.45,n.shS_z=1.45,n.shS_x=1,n.elS=-.1,n.shO_z=-.05,n.shO_x=.75,n.crouch=.09,n.lock=.5,n.tremble=.9,s.data.loser){let o=Gn(Math.min(e/.62,1));n.xOff=s.data.dir*o*.75,n.tilt=-o*.24,n.spineLean=.45-o*.3,n.tremble=.9*(1-o*.7),o>.55&&!s.data.rk&&(s.data.rk=1,t.onKnockback&&t.onKnockback(this,s.data.dir))}else n.xOff=s.data.dir*Math.min(e/.62,1)*.3,n.spineLean=.45+Math.min(e/.62,1)*.2,n.crouch=.09+r*.03}_dish(t){let n=t.dish.skirt.geometry.attributes.position;t.dish.base||(t.dish.base=Float32Array.from(n.array),n.setUsage(ms));let s=t.dish.base,r=this.time;for(let o=0;o<n.count;o++){let a=s[o*3],c=s[o*3+1],l=s[o*3+2],h=Ci((.11-c)/.54,0,1),d=(Math.sin(r*2.4+h*2.6)*.022+Math.sin(r*3.9)*.008-this.pose.lean*.05)*h*h,u=1+d*2.6;n.setX(o,a*u),n.setZ(o,l*u+d*.4)}n.needsUpdate=!0}_cape(){let t=this.data.cape,e=t.geometry.attributes.position;this._capeBase||(this._capeBase=Float32Array.from(e.array),e.setUsage(ms));let n=this._capeBase,s=this.time,r=this.pose.capeRaise||0;for(let o=0;o<e.count;o++){let a=n[o*3],c=n[o*3+1],l=Ci(-c/.78,0,1),h=Math.sin(s*4.2+l*5)*.11*l;e.setX(o,a*(1+r*l*1.8)+h*.4),e.setZ(o,h)}e.needsUpdate=!0,t.rotation.x=-.18-r*1}bladeTipWorld(t=new ts){return this.data.sword.localToWorld(t.set(1,0,0))}bladeMidWorld(t=new ts){return this.data.sword.localToWorld(t.set(.55,0,0))}headTipWorld(t=new ts){return this.data.head.localToWorld(t.set(.3,-.04,0))}headCentreWorld(t=new ts){return this.data.head.localToWorld(t.set(0,0,0))}};var gh=(i,t="cloth",e={})=>new Oe({color:i,...ca[t],...e}),ur=(i,t,e,n={})=>{var r;let s=new Oe({color:i,...ca[t],...n});return e&&(s.map=e.map,e.bump&&(s.bumpMap=e.bump,s.bumpScale=(r=n.bumpScale)!=null?r:.06)),s},Ie=(i,t,e=0,n=0,s=0)=>{let r=new re(i,t);return r.position.set(e,n,s),r};function Cd({variant:i=0}={}){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),n="filter"in e,s=(h,d,u,f,g,x=0)=>{e.fillStyle=g,e.fillRect(h-u/2,d-u/2,u,u),e.fillStyle=f;for(let m of[x,x+Math.PI/4]){e.save(),e.translate(h,d),e.rotate(m),e.beginPath();for(let p=0;p<8;p++){let M=p/8*Math.PI*2,R=M+Math.PI/8;e.lineTo(Math.cos(M)*u*.46,Math.sin(M)*u*.46),e.lineTo(Math.cos(R)*u*.2,Math.sin(R)*u*.2)}e.closePath(),e.fill(),e.restore()}e.strokeStyle="rgba(255,255,255,0.55)",e.lineWidth=1.6,e.strokeRect(h-u/2+5,d-u/2+5,u-10,u-10)};n&&(e.filter="blur(0.4px)");let r=[["#1F5FA8","#F2EFE9"],["#12755F","#F2EFE9"],["#B07C22","#F2EFE9"]],o=i?[r[1],r[2],r[0]]:[r[0],r[1],r[2]],a=i?Math.PI/8:0;s(64,64,118,...o[0],Math.PI/8+a),s(192,192,118,...o[0],Math.PI/8+a),s(192,64,118,...o[1],Math.PI/8+a),s(64,192,118,...o[1],Math.PI/8+a),n&&(e.filter="none");for(let[h,d]of[[0,0],[256,0],[0,256],[256,256]]){e.save(),e.translate(h,d),e.fillStyle=o[2][0],e.beginPath();for(let u=0;u<8;u++){let f=u/8*Math.PI*2,g=f+Math.PI/8;e.lineTo(Math.cos(f)*34,Math.sin(f)*34),e.lineTo(Math.cos(g)*15,Math.sin(g)*15)}e.closePath(),e.fill(),e.restore()}let c=(()=>{let h=77+i*31;return()=>(h=h*16807%2147483647,h%1e3/1e3)})();e.strokeStyle="rgba(60,52,40,0.42)",e.lineWidth=4,e.strokeRect(2,2,252,252),e.lineWidth=2,e.beginPath(),e.moveTo(128,0),e.lineTo(128,256),e.moveTo(0,128),e.lineTo(256,128),e.stroke();for(let h=0;h<260;h++)e.fillStyle=c()<.5?"rgba(255,255,255,0.13)":"rgba(0,0,0,0.10)",e.fillRect(c()*256,c()*256,4,4);for(let h=0;h<40;h++){let d=c()*256,u=c()*256,f=6+c()*22,g=e.createRadialGradient(d,u,0,d,u,f);g.addColorStop(0,"rgba(58,48,34,0.16)"),g.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=g,e.beginPath(),e.arc(d,u,f,0,Math.PI*2),e.fill()}for(let h=0;h<12;h++){e.strokeStyle="rgba(40,34,24,0.22)",e.lineWidth=.8,e.beginPath();let d=c()*256,u=c()*256;e.moveTo(d,u);for(let f=0;f<3;f++)e.lineTo(d+(c()-.5)*60,u+(c()-.5)*60);e.stroke()}let l=[40+c()*170,40+c()*170,5+c()*9];return e.fillStyle="rgba(120,104,78,0.7)",e.beginPath(),e.ellipse(l[0],l[1],l[2],l[2]*.7,c()*3,0,Math.PI*2),e.fill(),ke(t)}function Lx(){let i=document.createElement("canvas");i.width=1024,i.height=128;let t=i.getContext("2d");t.fillStyle=Me.stoneWall,t.fillRect(0,0,1024,128);let e=(()=>{let a=313;return()=>(a=a*16807%2147483647,a%1e3/1e3)})();for(let a=0;a<1800;a++)t.fillStyle=e()<.5?"rgba(255,250,236,0.10)":"rgba(96,74,48,0.10)",t.fillRect(e()*1024,e()*128,3,2);t.strokeStyle="rgba(90,70,44,0.55)",t.lineWidth=5,t.beginPath(),t.moveTo(0,6),t.lineTo(1024,6),t.moveTo(0,122),t.lineTo(1024,122),t.stroke();let n=128,s=64,r=Me.frieze,o="rgba(70,52,30,0.45)";for(let a=0;a<1024/n;a++){let c=a*n;((h,d)=>{t.save(),t.translate(c+h+s,64),d&&t.scale(-1,1),t.lineWidth=7,t.strokeStyle=o,t.beginPath(),t.moveTo(-s+6,26),t.bezierCurveTo(-26,-34,20,-34,2,-4),t.bezierCurveTo(-10,18,22,30,s-6,-22),t.stroke(),t.lineWidth=4,t.strokeStyle=r,t.stroke();for(let[u,f,g]of[[-34,6,9],[-10,-22,7],[16,12,10],[40,-14,7]])t.fillStyle=r,t.beginPath(),t.ellipse(u,f,g*1.5,g*.75,(u+f)*.02,0,Math.PI*2),t.fill();t.fillStyle=r,t.beginPath(),t.arc(0,4,7,0,Math.PI*2),t.fill(),t.fillStyle="rgba(40,28,14,0.5)",t.beginPath(),t.arc(0,4,3,0,Math.PI*2),t.fill(),t.restore()})(0,a%2===1)}for(let a=0;a<1024;a+=32)t.fillStyle="rgba(60,44,26,0.30)",t.beginPath(),t.arc(a+16,110,7,0,Math.PI*2),t.fill(),t.fillStyle="rgba(255,246,228,0.35)",t.beginPath(),t.arc(a+14,108,4,0,Math.PI*2),t.fill();return ke(i)}function Dx(){let i=document.createElement("canvas");i.width=i.height=1024;let t=i.getContext("2d");t.fillStyle=Me.floorBase,t.fillRect(0,0,1024,1024);let e=(()=>{let s=913;return()=>(s=s*16807%2147483647,s%1e3/1e3)})();for(let s=0;s<5200;s++)t.fillStyle=e()<.5?"rgba(255,255,255,0.07)":"rgba(96,78,56,0.09)",t.fillRect(e()*1024,e()*1024,3+e()*5,3+e()*5);let n=128;for(let s=0;s<8;s++)for(let r=0;r<8;r++){let o=e();t.fillStyle=o<.3?"rgba(255,248,232,0.10)":o<.6?"rgba(120,98,70,0.09)":o<.85?"rgba(255,255,255,0.04)":"rgba(70,54,36,0.10)",t.fillRect(r*n,s*n,n,n);let a=t.createRadialGradient(r*n+n*.45,s*n+n*.5,4,r*n+n*.45,s*n+n*.5,n*.5);a.addColorStop(0,"rgba(255,252,240,0.10)"),a.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=a,t.fillRect(r*n,s*n,n,n)}for(let s=0;s<=1024;s+=n)t.strokeStyle="rgba(104,86,62,0.70)",t.lineWidth=4,t.beginPath(),t.moveTo(s,0),t.lineTo(s,1024),t.moveTo(0,s),t.lineTo(1024,s),t.stroke(),t.strokeStyle="rgba(255,250,236,0.22)",t.lineWidth=2,t.beginPath(),t.moveTo(s+3,0),t.lineTo(s+3,1024),t.moveTo(0,s+3),t.lineTo(1024,s+3),t.stroke();for(let s=0;s<90;s++){let r=e()*1024,o=e()*1024,a=4+e()*14;t.fillStyle="rgba(120,104,80,0.28)",t.beginPath(),t.arc(r,o,a,0,Math.PI*2),t.fill()}for(let s=0;s<26;s++){let r=e()*1024,o=e()*1024;t.strokeStyle="rgba(96,78,56,0.30)",t.lineWidth=1.6,t.beginPath(),t.moveTo(r,o),t.lineTo(r+(e()-.5)*90,o+(e()-.5)*90),t.stroke()}return ke(i)}function Ux(){let i=document.createElement("canvas");i.width=i.height=512;let t=i.getContext("2d"),e="filter"in t,n=256,s=256,r=150;e&&(t.filter="blur(0.5px)"),t.strokeStyle="rgba(110,90,66,0.85)",t.lineWidth=14,t.beginPath(),t.arc(n,s,r+34,0,Math.PI*2),t.stroke(),t.strokeStyle="rgba(240,232,214,0.5)",t.lineWidth=4,t.beginPath(),t.arc(n,s,r+42,0,Math.PI*2),t.stroke();let o=(a,c)=>{t.fillStyle=c,t.beginPath();for(let l=0;l<8;l++){let h=a+l/8*Math.PI*2,d=h+Math.PI/8;t.lineTo(n+Math.cos(h)*r,s+Math.sin(h)*r),t.lineTo(n+Math.cos(d)*r*.45,s+Math.sin(d)*r*.45)}t.closePath(),t.fill()};o(-Math.PI/2,"#26A69A"),o(Math.PI/2,"#EF5350"),e&&(t.filter="none"),t.lineJoin="round",t.strokeStyle="rgba(60,46,30,0.55)",t.lineWidth=3;for(let a of[-Math.PI/2,Math.PI/2]){t.beginPath();for(let c=0;c<8;c++){let l=a+c/8*Math.PI*2,h=l+Math.PI/8;t.lineTo(n+Math.cos(l)*r,s+Math.sin(l)*r),t.lineTo(n+Math.cos(h)*r*.45,s+Math.sin(h)*r*.45)}t.closePath(),t.stroke()}return t.fillStyle="rgba(236,228,210,0.9)",t.beginPath(),t.arc(n,s,22,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(120,96,64,0.8)",t.lineWidth=6,t.beginPath(),t.arc(n,s,22,0,Math.PI*2),t.stroke(),ke(i)}function Pd({seed:i=101,field:t="#7E1F26",border:e="#163A2E",ink:n="#E8C87A"}={}){let s=document.createElement("canvas");s.width=320,s.height=420;let r=s.getContext("2d"),o=(()=>{let f=i;return()=>(f=f*16807%2147483647,f%1e3/1e3)})();r.fillStyle=e,r.fillRect(0,0,320,420);for(let f=0;f<420;f+=3)r.fillStyle=`rgba(255,255,255,${.03+o()*.05})`,r.fillRect(0,f,320,1);let a=[26,26,268,368];r.fillStyle=t,r.fillRect(...a);for(let f=a[1];f<a[1]+a[3];f+=3)r.fillStyle=`rgba(0,0,0,${.03+o()*.05})`,r.fillRect(a[0],f,a[2],1);let c=r.createLinearGradient(0,a[1],0,a[1]+a[3]);c.addColorStop(0,"rgba(255,220,170,0.10)"),c.addColorStop(.45,"rgba(255,255,255,0)"),c.addColorStop(1,"rgba(20,10,10,0.14)"),r.fillStyle=c,r.fillRect(a[0],a[1],a[2],a[3]);let l=(f,g,x,m,p)=>{r.fillStyle=p,r.beginPath();for(let M=0;M<m*2;M++){let R=M/(m*2)*Math.PI*2-Math.PI/2,v=M%2?x*.46:x;r.lineTo(f+Math.cos(R)*v,g+Math.sin(R)*v)}r.closePath(),r.fill()};r.strokeStyle=n,r.lineWidth=4,r.beginPath(),r.rect(a[0]+9,a[1]+9,a[2]-18,a[3]-18),r.stroke();for(let f=0;f<30;f++){let g=f/30;for(let[x,m,p]of[[46+g*228,40,1],[46+g*228,380,-1],[40,46+g*328,1],[280,46+g*328,-1]])r.save(),r.translate(x,m),r.rotate(p*Math.PI/2),r.strokeStyle=n,r.lineWidth=3,r.beginPath(),r.moveTo(-6,0),r.lineTo(0,-8),r.lineTo(6,0),r.stroke(),r.restore()}l(160,210,62,8,n),l(160,210,40,8,t),l(160,210,20,6,n);for(let[f,g]of[[52,62],[268,62],[52,358],[268,358]])l(f,g,26,6,n);for(let f=0;f<380;f++)r.fillStyle=o()<.5?"rgba(255,246,224,0.05)":"rgba(0,0,0,0.05)",r.fillRect(o()*320,o()*420,2,6);let h=[.09,.35,.61,.87];for(let f of h){let g=f*320,x=26+o()*12,m=r.createLinearGradient(g-x,0,g+x,0);m.addColorStop(0,"rgba(0,0,0,0.20)"),m.addColorStop(.42,"rgba(255,246,224,0.16)"),m.addColorStop(.68,"rgba(255,246,224,0.05)"),m.addColorStop(1,"rgba(0,0,0,0.16)"),r.fillStyle=m,r.fillRect(g-x,0,x*2,420)}let d=r.createLinearGradient(0,0,0,46);d.addColorStop(0,"rgba(0,0,0,0.42)"),d.addColorStop(1,"rgba(0,0,0,0)"),r.fillStyle=d,r.fillRect(0,0,320,46);let u=r.createLinearGradient(0,372,0,420);return u.addColorStop(0,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(0,0,0,0.26)"),r.fillStyle=u,r.fillRect(0,372,320,48),ke(s)}function Nx(){let i=document.createElement("canvas");i.width=i.height=512;let t=i.getContext("2d");t.clearRect(0,0,512,512);let e=t.createRadialGradient(256,256,150,256,256,256);e.addColorStop(0,Me.moonHalo+"cc"),e.addColorStop(1,Me.moonHalo+"00"),t.fillStyle=e,t.fillRect(0,0,512,512);let n=(()=>{let r=553;return()=>(r=r*16807%2147483647,r%1e3/1e3)})();t.fillStyle=Me.moonBtc,t.beginPath(),t.arc(256,256,190,0,Math.PI*2),t.fill();for(let r=0;r<40;r++){let o=n()*Math.PI*2,a=n()*175,c=256+Math.cos(o)*a,l=256+Math.sin(o)*a,h=6+n()*26;t.fillStyle=n()<.5?"rgba(255,214,150,0.16)":"rgba(150,80,10,0.14)",t.beginPath(),t.arc(c,l,h,0,Math.PI*2),t.fill()}let s=t.createRadialGradient(190,180,40,256,256,230);s.addColorStop(0,"rgba(255,240,214,0.30)"),s.addColorStop(.55,"rgba(255,255,255,0)"),s.addColorStop(1,"rgba(70,30,0,0.34)"),t.fillStyle=s,t.beginPath(),t.arc(256,256,190,0,Math.PI*2),t.fill(),t.strokeStyle=Me.moonSymbol,t.lineWidth=22,t.lineCap="round",t.font='bold 260px "Arial Black", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle=Me.moonSymbol,t.fillText("B",256,270),t.lineWidth=14;for(let r of[196,316])t.beginPath(),t.moveTo(r,130),t.lineTo(r,382),t.stroke();return ke(i)}function Fx(i,t){let e=document.createElement("canvas");e.width=256,e.height=160;let n=e.getContext("2d");return n.fillStyle=t,n.beginPath(),n.moveTo(8,8),n.lineTo(248,8),n.lineTo(180,80),n.lineTo(248,152),n.lineTo(8,152),n.closePath(),n.fill(),n.strokeStyle="rgba(0,0,0,0.35)",n.lineWidth=6,n.stroke(),n.fillStyle="#FFFFFF",n.font='bold 64px "Arial Black", sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText(i,116,84),ke(e)}function Id(i){let t=new ue;i.add(t);let e={torches:[]};t.userData.torches=e.torches;let n=new re(new Ee(5,5),new We({map:Nx(),transparent:!0,fog:!1,depthWrite:!1}));n.position.set(0,6.6,-7.45),n.renderOrder=-1,t.add(n),e.moon=n,t.userData.moon=n;let s=xl({seed:61,base:"#ffffff",blocks:5,alpha:.16,repeatX:4,repeatY:2}),r=8,o=26,a=-7.2,c=1.2,l=.4,h=3.4,d=ur(Me.stoneWall,"cloth",s,{roughness:.95,bumpScale:.12}),u=Ie(new be(o,h,.5),d,0,h/2,a);t.add(u);let f=Cd({variant:0}),g=Cd({variant:1}),x=Pn(f.image,1),m=Pn(g.image,1),p=3.9,M=o/2-p,R=(yt,I,zt,kt)=>{let w=zt.clone();w.needsUpdate=!0,w.repeat.set(I/2.6,1);let _=kt.clone();return _.needsUpdate=!0,_.repeat.copy(w.repeat),Ie(new be(I,c,.54),new Oe({map:w,bumpMap:_,bumpScale:.05,roughness:.5}),yt,c/2,a+.01)};t.add(R(-(p+M/2),M,f,x)),t.add(R(+(p+M/2),M,g,m));let v=Lx(),b=(yt,I)=>{let zt=v.clone();return zt.needsUpdate=!0,zt.repeat.set(I/(o/6),1),Ie(new be(I,l,.55),new Oe({map:zt,roughness:.9}),yt,c+l/2,a+.01)};t.add(b(-(p+M/2),M)),t.add(b(+(p+M/2),M));let T=8,C=3.17,y=.24,E=.13,A=.1,P=a+.25,L=P+y+.09,F=vs({seed:91,weave:14,thread:"rgba(30,18,8,0.5)"});F.map.wrapS=F.map.wrapT=ii,F.map.repeat.set(3,1.2);let D=new Oe({color:"#5B3A21",map:F.map,bumpMap:F.bump,bumpScale:.04,roughness:.62,metalness:.05}),H=c+l+C/2+.06,q=Ie(new be(T,C,.18),D,0,H,L);t.add(q);let X=new Oe({color:"#3E2712",roughness:.55});t.add(Ie(new be(T+.14,.1,.26),X,0,H+C/2+.04,L+.04)),t.add(Ie(new be(T+.14,.1,.26),X,0,H-C/2-.04,L+.04)),t.add(Ie(new be(.1,C+.14,.26),X,-(T/2+.04),H,L+.04)),t.add(Ie(new be(.1,C+.14,.26),X,+(T/2+.04),H,L+.04)),t.add(Ie(new be(.09,.32,.29),X,-T/2+.5,H-C/2-.14,P+.125)),t.add(Ie(new be(.09,.32,.29),X,+T/2-.5,H-C/2-.14,P+.125));let ot=P+.11,$=(yt,I)=>{let zt=new Ee(1.58,1.62,12,14),kt=zt.attributes.position;for(let Y=0;Y<kt.count;Y++){let dt=kt.getX(Y),pt=kt.getY(Y),K=Math.max(0,Math.min(1,(.81-pt)/1.62)),Q=Math.sin(dt*7.66+.25)*(.026+K*.048);kt.setZ(Y,Q+Math.sin(pt*3.4+dt*.6)*.016),kt.setX(Y,dt*(1+K*.035))}zt.computeVertexNormals();let w=new re(zt,new Oe({map:I,bumpMap:Pn(I.image,.9),bumpScale:.07,roughness:.92,side:Te}));w.position.set(yt,2.52,ot),w.userData.rug={w:1.58,h:1.62,world:{x:yt,y:2.52,z:ot}},t.add(w);let _=new Oe({color:"#4A2E17",roughness:.7}),z=Ie(new Ye(.048,.048,1.94,10),_,yt,3.4,ot+.05);z.rotation.z=Math.PI/2,t.add(z);for(let Y of[-.97,.97])t.add(Ie(new _n(.075,10,8),_,yt+Y,3.4,ot+.05));let k=new Oe({color:"#C9B389",roughness:.95});for(let Y=0;Y<8;Y++){let dt=yt-.69+Y*.197,pt=Ie(new Gi(.03,.19,6),k,dt,1.62,ot+.02);pt.rotation.x=Math.PI,t.add(pt)}},nt=Pd({seed:101,field:"#7E1F26",border:"#163A2E",ink:"#E8C87A"}),rt=Pd({seed:207,field:"#1B2A5E",border:"#6B1A1E",ink:"#D9BE86"});$(-6,nt),$(6,rt);let ft=document.createElement("canvas");ft.width=128,ft.height=64;{let yt=ft.getContext("2d"),I=yt.createLinearGradient(0,0,0,64);I.addColorStop(0,"rgba(0,0,0,0.62)"),I.addColorStop(.45,"rgba(0,0,0,0.30)"),I.addColorStop(1,"rgba(0,0,0,0)"),yt.fillStyle=I,yt.fillRect(0,0,128,64)}let _t=ke(ft),Wt=new re(new Ee(T*1.06,.62),new We({map:_t,transparent:!0,depthWrite:!1,opacity:.75}));Wt.position.set(.12,H-C/2-.3,P+.012),Wt.renderOrder=-1,t.add(Wt),t.userData.tapeBoard={y:H,w:T,h:C,z:L,face:L+.09,gap:E,screenZ:L+.09+E+A*.5};let Ot=new Oe({color:"#C8A24A",metalness:.9,roughness:.32});for(let[yt,I]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let zt=Ie(new Ye(.03,.038,E+.05,8),Ot,yt*(T*.88/2-.22),H+I*(C*.88/2-.22),L+.09+E/2);zt.rotation.x=Math.PI/2,t.add(zt);let kt=Ie(new Ye(.05,.05,.02,10),Ot,yt*(T*.88/2-.22),H+I*(C*.88/2-.22),L+.09+.012);kt.rotation.x=Math.PI/2,t.add(kt)}let ee=new re(new Ee(T*.9,.42),new We({map:_t,transparent:!0,depthWrite:!1,opacity:.62}));ee.position.set(0,H-C*.44-.16,L+.095),ee.renderOrder=1,t.add(ee);let tt=xl({seed:62,base:"#ffffff",blocks:3,alpha:.2,repeatX:2,repeatY:1}),at=ur(Me.stoneShadow,"cloth",tt,{bumpScale:.08}),bt=Ie(new be(o,.16,.62),at,0,h+.08,a+.02);t.add(bt);let Yt=ur(Me.stoneShadow,"cloth",tt,{bumpScale:.1}),Pt=[-12.1,-7.4,-4.6,4.6,7.4,12.1];for(let yt of Pt)t.add(Ie(new be(1,3.35,.68),Yt,yt,1.675,a+.09)),t.add(Ie(new be(1.2,.22,.76),ur(Me.stoneWall,"cloth",tt),yt,3.46,a+.09));let qt=ur(Me.stoneWall,"cloth",tt,{bumpScale:.1});for(let yt of[-12,-7.4,-4.6,4.6,7.4,12]){let I=Math.abs(yt)>9||Math.abs(yt)<5;t.add(Ie(new be(.9,.42,.5),qt,yt,h+.37,a)),I&&t.add(Ie(new be(.5,.2,.5),qt,yt,h+.67,a))}let ae=Dx();ae.repeat.set(3,2);let O=Pn(ae.image,.8);O.repeat.copy(ae.repeat);let J=new re(new Ee(26,15),new Oe({map:ae,bumpMap:O,bumpScale:.06,roughness:.9}));J.rotation.x=-Math.PI/2,J.position.set(0,0,.5),J.receiveShadow=!0,t.add(J);let j=new re(new Ee(7.6,7.6),new We({map:Ux(),transparent:!0,depthWrite:!1,opacity:.92}));j.rotation.x=-Math.PI/2,j.position.set(0,.012,.4),j.renderOrder=1,t.add(j);let lt=new re(new Ee(80,60),new Oe({color:1314844,roughness:1}));lt.rotation.x=-Math.PI/2,lt.position.set(0,-.02,0),t.add(lt);let ct=xl({seed:64,base:"#ffffff",blocks:3,alpha:.14,repeatX:1,repeatY:3}),gt=ur(Me.stonePole,"cloth",ct,{bumpScale:.07}),Dt={};for(let yt of["L","R"]){let I=yt==="L"?-me.spanHalf:me.spanHalf,zt=new ue;zt.position.set(I,0,0);let kt=Ie(new Ye(.28,.36,me.ropeY,10),gt,0,me.ropeY/2,0),w=Ie(new be(.8,.22,.8),gt,0,me.ropeY+.11,0);zt.add(kt,w);let _=Ie(new Ye(.03,.03,1.1,6),gh(Me.iron,"cloth"),0,me.ropeY+.7,0);zt.add(_);let z=yt==="R",k=Fx(z?"BUY":"SELL",z?Me.flagUp:Me.flagDown),Y=new re(new Ee(1.1,.62),new We({map:k,side:Te}));Y.position.set(.62,me.ropeY+1.05,0),zt.add(Y),Dt[yt]=Y,t.add(zt)}e.pennants=Dt;let Nt=[-7.4,-4.6,4.6,7.4];for(let yt of Nt){let I=Ie(new be(.1,.1,.5),gh(Me.iron,"cloth"),yt,3.62,a+.42);t.add(I);let zt=Ie(new Ye(.14,.07,.18,8),gh(Me.iron,"cloth"),yt,3.78,a+.66);t.add(zt);let kt=Ie(new Gi(.11,.36,8),new We({color:Me.torchFlame,fog:!1}),yt,4.02,a+.66);t.add(kt);let w=new Yi(Me.torchGlow,15,11,1.8);w.position.set(yt,4.05,a+.95),t.add(w),e.torches.push({flame:kt,light:w,seed:Math.random()*10})}return t}function Ld(i,t){for(let e of i.userData.torches||[]){let n=Math.sin(t*1.7+e.seed)*.5+Math.sin(t*3.1+e.seed*2)*.3+Math.sin(t*.9+e.seed)*.2;e.light.intensity=14+n*1.6,e.flame.scale.y=1+n*.18,e.flame.scale.x=1-n*.09}}var El=null;function Bx(){if(El)return El;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.85)"),e.addColorStop(.7,"rgba(255,255,255,0.22)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),El=ke(i,{srgb:!0}),El}var Dd=new Map;function Ox(i){let t=Dd.get(i);return t||(t=new te(i),Dd.set(i,t)),t}var ns=class{constructor(t,{count:e=120,size:n=.05,color:s=16777215,gravity:r=-9.8,drag:o=1.5,life:a=.7}){this.count=e,this.gravity=r,this.drag=o,this.life=a;let c=new ye;this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.age=new Float32Array(e).fill(1/0),c.setAttribute("position",new Pe(this.pos,3));let l=new oi({color:s,size:n,map:Bx(),alphaTest:.02,transparent:!0,opacity:.95,blending:An,depthWrite:!1,sizeAttenuation:!0});this.points=new Un(c,l),this.points.frustumCulled=!1,t.add(this.points);for(let h=0;h<e;h++)this.pos[h*3+1]=-999}spawn(t,e,n,s=2.5,r=2.5,o=12,a=null){let c=0;for(let l=0;l<this.count&&c<o;l++)this.age[l]<this.life||(this.age[l]=0,this.pos[l*3]=t,this.pos[l*3+1]=e,this.pos[l*3+2]=n,this.vel[l*3]=(Math.random()-.5)*s,this.vel[l*3+1]=Math.random()*r,this.vel[l*3+2]=(Math.random()-.5)*s,c++);a&&this.points.material.color.lerp(Ox(a),.35)}update(t){let e=this.gravity;for(let n=0;n<this.count;n++){if(this.age[n]>this.life){this.pos[n*3+1]=-999;continue}this.age[n]+=t;let s=Math.max(0,1-this.drag*t);this.vel[n*3]*=s,this.vel[n*3+1]=this.vel[n*3+1]*s+e*t,this.vel[n*3+2]*=s,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.pos[n*3+1]<.02&&e<0&&(this.vel[n*3+1]*=-.3,this.pos[n*3+1]=.02)}this.points.geometry.attributes.position.needsUpdate=!0}},Tl=class{constructor(t,e=1){e=Math.max(.2,Math.min(1,e)),this.scene=t,this.sparksGold=new ns(t,{count:Math.round(150*e),size:.05,color:Xe.BUY_BRIGHT}),this.sparksSilver=new ns(t,{count:Math.round(150*e),size:.05,color:qe.silverBright}),this.embers=new ns(t,{count:Math.round(60*e),size:.08,color:Me.torchFlame,gravity:1.8,drag:.6,life:1.4}),this.jade=new ns(t,{count:Math.round(60*e),size:.06,color:Xe.SELL_BRIGHT,gravity:-2.5}),this.dust=new ns(t,{count:Math.round(80*e),size:.14,color:Me.floorBase,gravity:-1.2,drag:2.5,life:.9}),this.dust.points.material.blending=wi,this.dust.points.material.opacity=.5,this.fur=new ns(t,{count:40,size:.07,color:"#E8E4D8",gravity:-1.5,drag:2,life:2.2}),this.fur.points.material.blending=wi,this.fur.points.material.opacity=.9}clashBurst(t){this.sparksGold.spawn(t.x,t.y,t.z,4,3,22),this.sparksSilver.spawn(t.x,t.y,t.z,4,3,22)}lungeSparks(t){this.sparksGold.spawn(t.x,t.y,t.z,2,2,10)}emberBurst(t){this.embers.spawn(t.x,t.y,t.z,1.2,1.6,14)}ghost(t){this.jade.spawn(t.x,t.y,t.z,.8,.6,6,Xe.SELL_BRIGHT)}ghostTile(t){this.jade.spawn(t.x,t.y,t.z,.8,.6,6,Xe.SELL_DEEP)}dustBurst(t){this.dust.spawn(t.x,t.y,t.z,2.2,1.8,16)}furTuft(t){this.fur.spawn(t.x,t.y,t.z,.6,.4,5)}update(t){for(let e of[this.sparksGold,this.sparksSilver,this.embers,this.jade,this.dust,this.fur])e.update(t)}};function Hx(i,t){let e=document.createElement("canvas");e.width=128,e.height=128;let n=e.getContext("2d");n.fillStyle=i,n.strokeStyle=t,n.lineWidth=4,n.lineJoin="round",n.beginPath(),n.ellipse(64,88,30,34,0,0,Math.PI*2),n.fill(),n.beginPath(),n.arc(64,46,22,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(47,34),n.lineTo(42,12),n.lineTo(58,26),n.closePath(),n.fill(),n.stroke(),n.beginPath(),n.moveTo(81,34),n.lineTo(86,12),n.lineTo(70,26),n.closePath(),n.fill(),n.stroke(),n.beginPath(),n.moveTo(90,104),n.bezierCurveTo(114,100,116,72,102,62),n.lineWidth=9,n.strokeStyle=i,n.stroke(),n.fillStyle=i,n.beginPath(),n.ellipse(52,118,12,6,0,0,Math.PI*2),n.ellipse(78,118,12,6,0,0,Math.PI*2),n.fill();let s=new un(e);return s.colorSpace=Ge,s}var zx=["#35D07F","#26A69A","#1B7A4B"],kx=["#EF5350","#A31621","#7A0C14"];function Ud(i,t,e,n){let s=new ue;i.add(s);let r=t==="buy"?zx:kx,o=t==="buy"?1:-1,a=[],c=r.map(h=>Hx(h,"rgba(5,6,15,0.8)")),l=0;for(let h=0;h<n;h++)for(let d=0;d<e;d++){let u=c[l%c.length],f=new We({map:u,transparent:!0,depthWrite:!1,fog:!0}),g=new re(new Ee(.62,.62),f),x=d-(e-1)/2,m=o*(6.1+h*.85+Math.random()*.45),p=-3.3+x*.62+(Math.random()-.5)*.3,M=.75+Math.random()*.4;g.position.set(m,0,p),g.scale.setScalar(M),g.rotation.y=o*-(.45+Math.random()*.3),s.add(g),a.push({m:g,baseY:.31*M,s:M,phase:Math.random()*Math.PI*2,speed:5+Math.random()*4,hop:.6+Math.random()*.8}),l++}return{group:s,cats:a,side:t}}var wl=class{constructor(t,e=1){let n=Math.max(3,Math.round(6*e)),s=Math.max(2,Math.round(3*e));this.packs=[Ud(t,"buy",n,s),Ud(t,"sell",n,s)],this.cheer={buy:0,sell:0},this.t=0}update(t,e,n=0){this.t+=t;let s=He.clamp(e||0,-1,1),r=He.clamp(n||0,0,1),o=s>.08?Math.min(1,s*1.4):r*.35,a=s<-.08?Math.min(1,-s*1.4):r*.35,c=Math.min(1,t*4);this.cheer.buy+=(o-this.cheer.buy)*c,this.cheer.sell+=(a-this.cheer.sell)*c;for(let l of this.packs){let h=this.cheer[l.side];for(let d of l.cats){let u=Math.sin(this.t*(1.4+r*1.2)+d.phase)*(.012+r*.02),f=h>.02?Math.abs(Math.sin(this.t*(d.speed+r*3)+d.phase)):0;d.m.position.y=d.baseY+u+f*h*(.34+r*.22)*d.hop,d.m.rotation.z=f*h*.08*(d.m.position.x>0?-1:1)}}}};var di=He.clamp;var Nd={RUSH:{cat:"A",len:1.05,cool:3.4,prio:1},LUNGE:{cat:"A",len:.9,cool:3,prio:1},THRUST:{cat:"A",len:.72,cool:2.4,prio:1},FEINT:{cat:"A",len:.85,cool:3.4,prio:2},SLASH_UP:{cat:"A",len:1,cool:3.6,prio:1},TAUNT:{cat:"A",len:1.3,cool:5.5,prio:2},PARRY_HOP:{cat:"B",len:.75,cool:2.6,prio:1},PARRY_BEAT:{cat:"B",len:.7,cool:2.2,prio:1},SLASH_SPIN:{cat:"B",len:1.1,cool:3.4,prio:1},RIPOSTE:{cat:"B",len:1.05,cool:3.2,prio:2},SIT_GUARD:{cat:"A",len:4.6,cool:0,prio:0}},Gx={RUSH:.14,LUNGE:.16,THRUST:.15,FEINT:.12,SLASH_UP:.2,SLASH_SPIN:.16,RIPOSTE:.18,PARRY_HOP:.1,PARRY_BEAT:.11,TAUNT:.1},_h=new Set(["RUSH","LUNGE","THRUST","SLASH_UP","SLASH_SPIN","RIPOSTE","TAUNT"]),Vx=new Set(["PARRY_HOP","PARRY_BEAT","RIPOSTE","RECOVER"]),Wx=["LUNGE","THRUST","THRUST","SLASH_UP","FEINT"];var xh=2.7,Xx={RUSH:{B:"PARRY_HOP",A:"PARRY_HOP"},LUNGE:{B:"PARRY_HOP",A:"PARRY_BEAT"},THRUST:{B:"PARRY_BEAT",A:"PARRY_BEAT"},SLASH_UP:{B:"PARRY_BEAT",A:"PARRY_HOP"},FEINT:{B:"PARRY_BEAT",A:"PARRY_HOP"},SLASH_SPIN:{A:"PARRY_BEAT",B:"PARRY_HOP"},RIPOSTE:{A:"PARRY_BEAT",B:"PARRY_HOP"},TAUNT:{A:"PARRY_BEAT",B:"PARRY_HOP"}},Yx={LUNGE:{next:"THRUST",win:.3},THRUST:{next:"SLASH_UP",win:.26},FEINT:{next:"THRUST",win:.22},PARRY_BEAT:{next:"RIPOSTE",win:.34},PARRY_HOP:{next:"RIPOSTE",win:.24}},Al=class{constructor({rope:t,cats:e,flag:n,vfx:s,arena:r}){this.rope=t,this.cats=e,this.flag=n,this.vfx=s,this.arena=r,this.pressure=0,this.price=0,this.priceHistory=[],this.high15m=-1/0,this.low15m=1/0,this.prevP=0,this.cools={},this.sideCool={A:0,B:0},this.lowPTime=0,this.freezeUntil=0,this.frozen=!1,this.frozenPose=null,this.stumbling=!1,this.active={},this.now=0,this.onClash=null,this._events=[],this._lastMover="B",this.phase="circle",this.phaseT=0,this.phaseDur=1.4,this.gap=Math.abs(e.A.x-e.B.x),this.gapTarget=2,this.mid=(e.A.x+e.B.x)/2,this.circlePhase=0,this.lastMoveAt=0,this.stats={moves:0,clashes:0,locks:0,hits:0},this.busyUntil=0,this.lockCool=0,this._beats=[],this.engage=0,this.pS=0,this.lastLockAt=-99,this._lastUsed={},this._lastWinner=null,this._slotAt=void 0,this._lastAnswerAt=-9,this.intensity=0,this.log=[],this.reasons={},this.hunt=0,this.lane=0,this.laneRaw=0,this.laneWin=30,this.laneFull=.0035,this.laneHalf=3.2,this.lanePeak=0,this._lanePeakAt=0}_foe(t){return t==="A"?"B":"A"}laneState(){let t=null;for(let n=this.priceHistory.length-1;n>=0;n--)if(this.now-this.priceHistory[n].t>=this.laneWin){t=this.priceHistory[n].px;break}let e=t&&this.price>0?(this.price-t)/t*100:0;return{lane:+this.lane.toFixed(3),raw:+this.laneRaw.toFixed(3),pct:+e.toFixed(3)}}brawlIntensity(){return this.intensity}setPressure(t){this.pressure=di(t,-1,1),this._events.push({type:"pressure",P:this.pressure})}setPrice(t){let e=this.now;for(this.price=t,this.priceHistory.push({t:e,px:t});this.priceHistory.length&&e-this.priceHistory[0].t>60;)this.priceHistory.shift();let n=this.priceHistory.filter(s=>e-s.t<=900);if(n.length){let s=-1/0,r=1/0;for(let o of n)o.px>s&&(s=o.px),o.px<r&&(r=o.px);t>this.high15m&&(this.high15m=t,this._events.push({type:"newHigh"})),t<this.low15m&&(this.low15m=t,this._events.push({type:"newLow"})),(s!==this._lastHi||r!==this._lastLo)&&(t>=s&&this._lastHi!==void 0&&s>this._lastHi&&this._events.push({type:"newHigh15"}),t<=r&&this._lastLo!==void 0&&r<this._lastLo&&this._events.push({type:"newLow15"}),this._lastHi=s,this._lastLo=r)}}trendM(){let t=this.priceHistory;if(t.length<2)return 0;let e=t.find(s=>this.now-s.t<=60);if(!e||e.px===this.price)return 0;let n=(this.price-e.px)/e.px;return di(n/.005,-1,1)}_after(t,e){this._beats.push({t:this.now+t,fn:e})}update(t){this.now+=t,this._lastDt=t;let e=this.cats.A,n=this.cats.B;this.pS+=(this.pressure-this.pS)*Math.min(1,t/1.2);let s={BLADE_LOCK:1,CLASH:.85,HIT:.7,LUNGE:.62,RUSH:.62,THRUST:.55,RIPOSTE:.55,STUMBLE:.5,FEINT:.3,PARRY_BEAT:.35,TAUNT:.32,RECOVER:.24,PARRY_HOP:.18,SIT_GUARD:.15,IDLE:.08,FREEZE:.05},r=Math.max(s[e.state.name]===void 0?.12:s[e.state.name],s[n.state.name]===void 0?.12:s[n.state.name]);if(this.intensity+=(r-this.intensity)*Math.min(1,t/.7),this._beats.length){let a=[];this._beats=this._beats.filter(c=>c.t<=this.now?(a.push(c),!1):!0);for(let c of a)c.fn()}for(let a of["A","B"]){let c=this.cats[a],l=this.active[a];l&&c.state.name!==l&&(delete this.active[a],(l==="RUSH"||l==="LUNGE")&&this.rope.injectImpulse(c.x,0,-.4,0))}if(this.frozen&&Math.abs(this.pressure)>=.1){this.frozen=!1;for(let a of["A","B"])this.cats[a].setState("IDLE");this.lastMoveAt=this.now}this.frozen||this._pacePair(t);let o=null;for(let a=this.priceHistory.length-1;a>=0;a--)if(this.now-this.priceHistory[a].t>=this.laneWin){o=this.priceHistory[a].px;break}if(o&&this.price>0&&(this.laneRaw=di((this.price-o)/o/this.laneFull,-1,1)),!this.frozen&&!this.stumbling&&(this.lane+=(this.laneRaw-this.lane)*Math.min(1,t/.7),this.circlePhase+=t,Math.abs(this.lane)>=this.lanePeak&&(this.lanePeak=Math.abs(this.lane),this._lanePeakAt=this.now)),!this.frozen){let a=this.lane*this.laneHalf,c=me.spanHalf-me.poleClearance-1.2;this.mid=di(a,-c,c)}!this.frozen&&!this.stumbling&&this._checkTriggers(),!this.frozen&&!this.stumbling&&this._maintainGuard(),!this.frozen&&!this.stumbling&&this.now>this.busyUntil&&this._tempoTick(),this._events.length=0}_maintainGuard(){let t=this.pS,e=t>=0?"B":"A",n=this.cats[e],s=n.state.name,r=Math.abs(t)>=.07;if(s==="SIT_GUARD"){if(!r||this.gap>xh){n.setState("RECOVER",.2);return}n.state.dur>0&&n.state.t>n.state.dur-.6&&n.setState("SIT_GUARD",Nd.SIT_GUARD.len,{dir:this._fw(e)});return}r&&(this.gap>xh||this._canMove(e,"SIT_GUARD")&&this._start(e,"SIT_GUARD",{dir:this._fw(e)},"guard"))}_pacePair(t){let e=this.cats.A,n=this.cats.B;if(this.phaseT+=t,this.phaseT>=this.phaseDur){this.phaseT=0;let p=2.4-Math.abs(this.pS)*.4,M=.92+Math.random()*.16;this.phase==="circle"?(this.phase="engage",this.phaseDur=p*.26*M,this.gapTarget=1.6+Math.random()*.08):this.phase==="engage"?(this.phase="break",this.phaseDur=p*.13*M,this.gapTarget=2.24+Math.random()*.1):(this.phase="circle",this.phaseDur=p*.61*M,this.gapTarget=2.06+Math.random()*.1)}this.engage=this.phase==="engage"?1:0;let s=Math.abs(e.x-n.x),r=this.gapTarget,c=r<s?2.6:1.8,l=r-s,h=Math.sign(l)*Math.min(Math.abs(l)*Math.min(1,c*t),c*t),d=this.phase==="circle"?Math.sin(this.circlePhase*1.7)*.1:0;this.hunt+=(d-this.hunt)*Math.min(1,t*2.4);let u=this.hunt*di((s-1.3)/.9,0,1),f=this.mid+h/2+u,g=this.mid-h/2-u*.6;if(f<g){let p=f;f=g,g=p}let x=me.spanHalf-me.poleClearance-.4;Math.abs(f)>x&&(e.wobble=.6),e.x=di(f,-x,x),n.x=di(g,-x,x),this.gap=Math.abs(e.x-n.x);let m=1.05;if(this.gap<m){let p=(m-this.gap)/2,M=e.x>n.x?1:-1;e.x+=M*p,n.x-=M*p,this.gap=Math.abs(e.x-n.x)}}_tempoTick(){let t=this.phase==="engage"?1.05:1.55;if(this._slotAt===void 0&&(this._slotAt=this.now+.25),this.now<this._slotAt)return;this._slotAt=this.now+t*(.9+Math.random()*.2);let e=this.pS,n=Math.abs(e)<.05,s=e>=0?"A":"B",r=s==="A"?"B":"A",o=n?["LUNGE","FEINT"]:Wx;for(let a of this._ordered(o))if(this._canMove(s,a)){this._start(s,a,{dir:this._fw(s)},"tempo");return}if(n){for(let a of["PARRY_HOP","PARRY_BEAT"])if(this._canMove(r,a)){this._start(r,a,{dir:this._fw(r)},"tempo");return}}else if(this._canMove(r,"SIT_GUARD")&&this.gap<=xh){this._start(r,"SIT_GUARD",{dir:this._fw(r)},"guard");return}}_ordered(t){let e={};for(let n of t)e[n]=Math.random()*.5;return t.slice().sort((n,s)=>{let r=(this._lastUsed[n]===void 0?-20:this._lastUsed[n])+e[n],o=(this._lastUsed[s]===void 0?-20:this._lastUsed[s])+e[s];return r-o})}_fw(t){return t==="A"?-1:1}_checkTriggers(){let t=this.pressure,e=this._events,n=this.priceHistory,s=null;for(let a=n.length-1;a>=0;a--)if(this.now-n[a].t>=5){s=n[a].px;break}if(s&&!this.stumbling&&this.now>this.busyUntil&&Math.abs(this.price-s)/s>.0018&&!this._stumbleCool){this._startPair("STUMBLE"),this._stumbleCool=this.now+6;return}if(this._stumbleCool&&this.now>this._stumbleCool&&(this._stumbleCool=0),Math.abs(t)<.06){if(this.lowPTime+=this._lastDt||0,this.lowPTime>8&&!this.frozen){this.frozen=!0;for(let a of["A","B"])this.cats[a].setState("FREEZE",0,{until:()=>!this.frozen});return}}else this.lowPTime=0;let r=this.trendM();if(this._prevM!==void 0&&r!==0&&this._prevM!==0&&Math.sign(r)!==Math.sign(this._prevM)){if(r>0&&this._canMove("A","TAUNT")){this._start("A","TAUNT",{dir:this._fw("A")},"momentum");return}if(r<0&&this._canMove("B","RIPOSTE")){this._start("B","RIPOSTE",{dir:this._fw("B")},"momentum");return}}this._prevM=r;let o=!1;for(let a of e)if(a.type==="pressure"){if(this.prevP<=.35&&a.P>.35&&this._canMove("A","RUSH")){this._start("A","RUSH",{dir:this._fw("A")},"spike"),o=!0;break}if(this.prevP>=-.35&&a.P<-.35&&this._canMove("B","PARRY_HOP")){this._start("B","PARRY_HOP",{dir:this._fw("B")},"spike"),o=!0;break}this.prevP=a.P}o||(this.prevP=t);for(let a of e){if(a.type==="newHigh15"&&this._canMove("A","SLASH_UP")){this._start("A","SLASH_UP",{dir:this._fw("A")},"extreme");return}if(a.type==="newLow15"&&this._canMove("B","SLASH_SPIN")){this._start("B","SLASH_SPIN",{dir:this._fw("B")},"extreme");return}}}_canMove(t,e){let n=this.now;if(this.active[t]&&!(this.active[t]==="SIT_GUARD"&&(e==="PARRY_HOP"||e==="PARRY_BEAT"))||(this.cools[e]||0)>n||this.sideCool[t]>n||n<this.busyUntil)return!1;let s=this.cats[t].state;return!(s.name==="BLADE_LOCK"||s.name==="CLASH"||s.name==="STUMBLE"||s.name==="FREEZE"||s.name==="HIT"||s.name==="RECOVER"&&s.t<.12)}_start(t,e,n={},s="tempo",r={}){let o=Nd[e];if(!o||!this.cats[t]||!this._canMove(t,e))return o||(this._badMoves=this._badMoves||[]).push({t:+this.now.toFixed(2),side:t,move:String(e)}),!1;if(_h.has(e)){let h=this.pS>=0?"A":"B";if(t!==h&&s!=="winner")return!1}this.log.push({t:+this.now.toFixed(2),side:t,move:e,reason:s}),this.log.length>400&&this.log.shift(),this.reasons[s]=(this.reasons[s]||0)+1;let a=this.cats[t];(e==="RUSH"||e==="LUNGE")&&(n.reach=di(this.gap-1.15,.12,1)),this._lastUsed[e]=this.now,this.cools[e]=this.now+o.cool,r.chain||(this.sideCool[t]=this.now+.75),this.active[t]=e,this.lastMoveAt=this.now,this._lastMover=t,this.stats.moves++,a.setState(e,o.len,{hold:Gx[e]||0,...n});let c=Yx[e];if(c){let h=n.chainDepth||0;h<2&&this._after(o.len+c.win*.55,()=>{let d=h===0?.55:.25;Math.random()>d||this._canMove(t,c.next)&&(this.stats.combos=(this.stats.combos||0)+1,this._start(t,c.next,{dir:this._fw(t),chainDepth:h+1},"combo",{chain:!0}))})}let l=t==="A"?"B":"A";if(_h.has(e)&&!this.active[l]&&this.now-this._lastAnswerAt>.42&&Math.random()<.45){let h=e==="FEINT"?.75:.45;if(Math.random()>=h)return;let d=Xx[e],u=d&&d[l]||(l==="B"?"PARRY_HOP":"LUNGE");this._canMove(l,u)&&(this._start(l,u,{dir:this._fw(l)},"reaction"),this._lastAnswerAt=this.now)}}_startPair(t){let e=t==="STUMBLE"?1.6:1.2;this.stumbling=!0,this.active.A=t,this.active.B=t;let n=di(Math.abs(this.cats.A.x)-2,.4,1),s=di(Math.abs(this.cats.B.x)-2,.4,1);this.cats.A.setState(t,e,{dir:-this._fw("A"),dist:n}),this.cats.B.setState(t,e,{dir:-this._fw("B"),dist:s});let r=(this.cats.A.x+this.cats.B.x)/2,o=this.rope.yAt(r);this._after(e*.5,()=>{this.vfx&&(this.vfx.dustBurst({x:r,y:Math.max(o-.4,.4),z:.2}),this.vfx.furTuft({x:r+.3,y:o+.2,z:.1})),this.flag&&(this.flag.spin=1.5)}),this._after(e+.1,()=>{this.stumbling=!1,this.lastMoveAt=this.now})}tryClash(t){let n=t==="A"?"B":"A",s=this.cats[n];if(this.now<this.busyUntil||this.now<this.lockCool)return!1;let r=s.state.name,o=Vx.has(r)||r==="SIT_GUARD"||_h.has(r);if(!(this.gap<1.75))return!1;let c=this.now-this.lastLockAt,l=o?.6:.18,h=c<4?.35:c>9?1.25:1;if(Math.random()>Math.min(.92,l*h))return!1;let d=this.pS>.02?"A":this.pS<-.02||this._lastWinner==="A"?"B":"A";return this._beginLock(d),!0}_beginLock(t){let e=t==="A"?"B":"A",n=.5+Math.random()*.12;this.lastLockAt=this.now,this._lastWinner=t,this.busyUntil=this.now+n+.7,this.active.A="BLADE_LOCK",this.active.B="BLADE_LOCK",this.cats.A.setState("BLADE_LOCK",n,{winner:t==="A"}),this.cats.B.setState("BLADE_LOCK",n,{winner:t==="B"}),this.stats.locks++,this.lastMoveAt=this.now,this._after(n,()=>{let s=t==="A"?-1:1;this.cats[e].setState("CLASH",.5,{dir:s,loser:!0}),this.cats[t].setState("CLASH",.5,{dir:s,loser:!1}),this.active.A="CLASH",this.active.B="CLASH",this.stats.clashes++,this.sideCool.A=this.sideCool.B=this.now+.4,this.onClash&&this.onClash({winner:t,loser:e})}),this._after(n+.5,()=>{this.cats.A.setState("RECOVER",.2),this.cats.B.setState("RECOVER",.2),delete this.active.A,delete this.active.B,this.lastMoveAt=this.now,this.lockCool=this.now+3,this.phase="break",this.phaseT=0,this.phaseDur=.5+Math.random()*.5,this.gapTarget=2.1+Math.random()*.7,this._after(.05,()=>{let s=["LUNGE","THRUST","SLASH_UP","SLASH_SPIN","RIPOSTE"],r=s[Math.floor(Math.random()*s.length)];this._canMove(t,r)&&this._start(t,r,{dir:this._fw(t)},"winner")})})}resolveHit(t,e){let s=t==="A"?"B":"A",r=this.cats[s];if(this.now<this.busyUntil||r.state.name==="STUMBLE"||r.state.name==="BLADE_LOCK"||r.state.name==="CLASH")return;let o=.7+Math.abs(this.pressure)*.8;r.setState("HIT",.3,{dir:e,mag:o}),this.active[s]="HIT",this.stats.hits++,this.busyUntil=this.now+.12}pairCentre(){return(this.cats.A.x+this.cats.B.x)/2}};function Fd(i){let e=new _n(60,32,20),n=new sn({side:dn,depthWrite:!1,fog:!1,uniforms:{top:{value:new te("#04050E")},mid:{value:new te("#0B1030")},horizon:{value:new te("#1E1638")},glowA:{value:new te("#3A2638")},glowB:{value:new te("#1F0F0A")}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
      }`}),s=new re(e,n);return i.add(s),s}function Bd(i){let t=new ue,e=[{n:420,r:56,size:1.15,opacity:.95,tw:1.7},{n:300,r:57.5,size:.85,opacity:.75,tw:2.3},{n:200,r:59,size:.62,opacity:.55,tw:3.1}],n=[];for(let c of e){let l=[],h=[],d=[];for(let x=0;x<c.n;x++){let m=Math.random()*Math.PI*2,p=.12+Math.random()*.83,M=Math.sqrt(Math.max(0,1-p*p)),R=c.r;l.push(R*M*Math.cos(m),R*p,R*M*Math.sin(m));let v=Math.random(),b=v<.55?[.86,.89,1]:v<.8?[1,.96,.86]:v<.92?[1,.84,.6]:[.75,.83,1],T=.6+Math.random()*.4;h.push(b[0]*T,b[1]*T,b[2]*T),d.push(Math.random()*Math.PI*2)}let u=new ye;u.setAttribute("position",new ce(l,3)),u.setAttribute("color",new ce(h,3)),u.setAttribute("phase",new ce(d,1));let f=new sn({transparent:!0,depthWrite:!1,fog:!1,blending:An,uniforms:{uTime:{value:0},uBase:{value:c.opacity},uSize:{value:c.size}},vertexShader:`
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
        }`}),g=new Un(u,f);g.frustumCulled=!1,g.renderOrder=-4,t.add(g),n.push({points:g,mat:f,speed:c.tw,base:c.opacity})}let s=[],r=[];for(let c=0;c<900;c++){let l=(Math.random()-.5)*Math.PI*2,h=(Math.random()-.5)*.55*(1+Math.sin(l*3)*.3),d=Math.cos(l)*56,u=14+Math.sin(l*1.3)*22,f=Math.sin(l)*40-20,g=d+(Math.random()-.5)*14,x=u+h*22+(Math.random()-.5)*9,m=f+(Math.random()-.5)*14,p=.1+Math.random()*.3,M=Math.random()<.3;s.push(g,Math.max(3,x),m),r.push(p*(M?1:.85),p*.9,p*(M?.75:1))}let o=new ye;o.setAttribute("position",new ce(s,3)),o.setAttribute("color",new ce(r,3));let a=new Un(o,new oi({size:.42,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1,fog:!1,blending:An}));return a.frustumCulled=!1,a.renderOrder=-4,t.add(a),i.add(t),{group:t,update(c){for(let l of n)l.mat.uniforms.uTime.value=c*l.speed;t.rotation.y=c*.004}}}function Od(i){let t=new ue,e=[];function n(s){let r=document.createElement("canvas");r.width=256,r.height=128;let o=r.getContext("2d");for(let a=0;a<26;a++){let c=30+Math.random()*196,l=40+Math.random()*55,h=16+Math.random()*36,d=o.createRadialGradient(c,l,0,c,l,h),u=.09+Math.random()*.13;d.addColorStop(0,`rgba(198,208,240,${u})`),d.addColorStop(1,"rgba(198,208,240,0)"),o.fillStyle=d,o.beginPath(),o.arc(c,l,h,0,Math.PI*2),o.fill()}return ke(r)}for(let s=0;s<9;s++){let r=new We({map:n(s),transparent:!0,depthWrite:!1,fog:!1,opacity:.5+Math.random()*.3,side:Te}),o=5+Math.random()*6,a=new re(new Ee(o,o*.4),r);a.position.set((Math.random()-.5)*22,5.2+Math.random()*5.2,-4.6-Math.random()*1.9),a.rotation.x=-.05,a.renderOrder=2,t.add(a),e.push({m:a,speed:.12+Math.random()*.22,phase:Math.random()*100})}return i.add(t),{group:t,update(s,r){for(let o of e)o.m.position.x+=o.speed*r,o.m.position.x>18&&(o.m.position.x=-18),o.m.position.y+=Math.sin(s*.3+o.phase)*.0035,o.m.material.opacity=.34+.22*Math.sin(s*.23+o.phase),o.m.material.opacity<.18&&(o.m.material.opacity=.18)}}}function Hd(i){let t=new ue,e=3,n=[],s=[];for(let o=0;o<e;o++){let a=document.createElement("canvas");a.width=256,a.height=16;let c=a.getContext("2d"),l=c.createLinearGradient(0,8,256,8);l.addColorStop(0,"rgba(255,255,255,0)"),l.addColorStop(.75,"rgba(200,220,255,0.85)"),l.addColorStop(1,"rgba(255,255,255,1)"),c.fillStyle=l,c.fillRect(0,0,256,16);let h=ke(a),d=new We({map:h,transparent:!0,depthWrite:!1,fog:!1,opacity:0,blending:An}),u=new re(new Ee(9,.16),d);u.visible=!1,u.renderOrder=-4,t.add(u),s.push(u),n.push(d)}let r=s.map((o,a)=>({active:!1,t:0,dur:0,next:4+a*5,from:new N,to:new N}));return i.add(t),{group:t,update(o,a,c){for(let l=0;l<e;l++){let h=r[l],d=s[l],u=n[l];if(!h.active){if(h.next-=a*(1+c*.6),h.next<=0){h.active=!0,h.t=0,h.dur=.9+Math.random()*.7;let x=Math.PI*(.62+Math.random()*.25),m=40+Math.random()*8;h.from.set(Math.cos(x)*m*(Math.random()<.5?-1:1),20+Math.random()*14,-28-Math.random()*10),h.to.set(h.from.x*-.35-(Math.random()-.5)*20,h.from.y-14-Math.random()*8,h.from.z+4),d.visible=!0}continue}h.t+=a;let f=h.t/h.dur;if(f>=1){h.active=!1,h.next=6+Math.random()*12,d.visible=!1;continue}d.position.lerpVectors(h.from,h.to,f),d.lookAt(d.position.clone().multiplyScalar(2));let g=Math.sin(Math.min(1,f*1.15)*Math.PI);u.opacity=g*.9}}}}function zd(i){let t=new ue;function e(n,s,r,o,a,c){let l=document.createElement("canvas");l.width=1024,l.height=256;let h=l.getContext("2d");h.clearRect(0,0,1024,256),h.fillStyle=o;let d=a,u=()=>(d=d*16807%2147483647,d%1e3/1e3),f=256*.55,g=256*.85;h.beginPath(),h.moveTo(0,256);let x=(f+g)/2;for(let M=0;M<=1024;M+=16)x+=(u()-.5)*26,x=Math.max(f,Math.min(g,x)),h.lineTo(M,x);h.lineTo(1024,256),h.closePath(),h.fill();let m=new un(l);m.colorSpace=Ge;let p=new re(new Ee(n,s),new We({map:m,transparent:!0,depthWrite:!1,fog:!1}));return p.position.set(0,c+s/2,r),p.renderOrder=-3,p}return t.add(e(170,10,-54,"#161229",12345,5.6)),t.add(e(150,8,-46,"#1E1836",987654,5)),i.add(t),t}function kd(i,t=1){let e=Math.round(44*Math.max(.25,Math.min(1,t))),n=new Float32Array(e*3),s=new Float32Array(e),r=[];for(let l=0;l<e;l++){let h=(Math.random()-.5)*20,d=.6+Math.random()*3.4,u=-2+Math.random()*9;r.push([h,d,u]),n[l*3]=h,n[l*3+1]=d,n[l*3+2]=u,s[l]=Math.random()*Math.PI*2}let o=new ye;o.setAttribute("position",new Pe(n,3)),o.setAttribute("seed",new Pe(s,1));let a=new sn({transparent:!0,depthWrite:!1,blending:An,uniforms:{uTime:{value:0}},vertexShader:`
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
      }`}),c=new Un(o,a);return c.frustumCulled=!1,i.add(c),{update(l){a.uniforms.uTime.value=l}}}function Gd(i,t=1){let e=Math.round(28*Math.max(.25,Math.min(1,t))),n=new Float32Array(e*3),s=new Float32Array(e),r=[-7.5,-2.7,2.7,7.5];for(let l=0;l<e;l++){let h=r[l%4];n[l*3]=h+(Math.random()-.5)*.5,n[l*3+1]=2.9+Math.random()*2.4,n[l*3+2]=-6.2+Math.random()*1.4,s[l]=Math.random()*100}let o=new ye;o.setAttribute("position",new Pe(n,3)),o.setAttribute("seed",new Pe(s,1));let a=new sn({transparent:!0,depthWrite:!1,blending:An,uniforms:{uTime:{value:0}},vertexShader:`
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
      }`}),c=new Un(o,a);return c.frustumCulled=!1,i.add(c),{update(l){a.uniforms.uTime.value=l}}}var Vd=ze.goldPrimary,yn={cx:0,cy:3.245,w:7.6,h:2.74,z:-6.67},Ms={title:17,sub:12,chip:11,axis:11.5,time:11,tag:13.5,msg:12},yh={r:74,t:30,b:20};function Wd(i,t,e={}){let n=e.redrawMs||400,s=e.renderer,r=new N,o=document.createElement("canvas");o.width=760,o.height=276;let a=o.getContext("2d"),c=1,l=O=>O/c,h=new un(o);h.colorSpace=Ge,h.generateMipmaps=!0,h.minFilter=Rn,h.magFilter=Ke,h.anisotropy=e.anisotropy||4;let d=new We({map:h,transparent:!0,depthWrite:!1,depthTest:!0,fog:!1,side:Te}),u=new re(new Ee(yn.w,yn.h),d);u.position.set(yn.cx,yn.cy,yn.z),u.renderOrder=0,u.frustumCulled=!1;let f=new ue;f.add(u);let g=.1,x=.075,m=new Oe({color:"#14161E",metalness:.6,roughness:.4}),p=new ue,M=[0,1,2,3].map(()=>{let O=new re(new be(1,1,1),m);return O.frustumCulled=!1,p.add(O),O}),R=new re(new be(1,1,1),m);R.frustumCulled=!1,p.add(R),f.add(p);function v(O,J,j,lt,ct){let gt=j+g*.5,Dt=(Nt,yt,I,zt,kt,w,_)=>{Nt.scale.set(yt,I,zt),Nt.position.set(kt,w,_)};Dt(M[0],lt+x*2,x,g,O,J+ct/2+x/2,gt),Dt(M[1],lt+x*2,x,g,O,J-ct/2-x/2,gt),Dt(M[2],x,ct,g,O-lt/2-x/2,J,gt),Dt(M[3],x,ct,g,O+lt/2+x/2,J,gt),Dt(R,lt+.01,ct+.01,g*.55,O,J,j-g*.85)}i.add(f);let b=e.variant||"slab",T=["slab","aurora","stars"],C="";function y(){let O=s&&s.domElement.clientWidth||window.innerWidth||1280,J=s&&s.domElement.clientHeight||window.innerHeight||800;C=O+"x"+J,Math.abs(t.aspect-O/J)>.001&&(t.aspect=O/J,t.updateProjectionMatrix()),t.updateMatrixWorld(!0);let j=Math.abs(6.8-yn.z),lt=Math.tan(He.degToRad(t.fov/2))*j,ct=lt*t.aspect,gt=e.board,Dt=Math.min(yn.w,gt?gt.w*.88:yn.w,ct*2*.88),Nt=yn.h*(Dt/yn.w);u.geometry.dispose(),u.geometry=new Ee(Dt,Nt);let yt=gt?gt.screenZ!==void 0?gt.screenZ:gt.z+.09:yn.z;u.position.set(yn.cx,gt?gt.y:yn.cy,yt),v(yn.cx,gt?gt.y:yn.cy,yt,Dt,Nt);let I=Dt/(ct*2)*O,zt=Nt/(lt*2)*J,kt=Math.round(Math.min(1440,Math.max(640,I*1.9))),w=Math.max(160,Math.round(kt*(zt/I)));(kt!==o.width||w!==o.height)&&(o.width=kt,o.height=w,h.dispose(),h.needsUpdate=!0),c=I/kt}let E={rev:0,seeded:!1,count:0,t:[],o:[],h:[],l:[],c:[]},A={price:null,status:"",mode:"",providerLabel:""},P=null,L=[],F=-1,D=null,H=0,q=0,X=Date.now(),ot=8e3,$=9e3;function nt(){if(!E.count)return{txt:"LOADING\u2026",col:"#8F98A3",key:"load"};let O=P||A;if(O.mode==="demo")return{txt:"SIM TAPE",col:Vd,key:"demo"};let J=O.providerLabel?String(O.providerLabel).toUpperCase():"SPOT";return O.status==="open"?Date.now()-X>ot?{txt:"STALE FEED",col:Xe.SELL_BRIGHT,key:"stale"}:{txt:"LIVE",col:Xe.BUY_BRIGHT,key:"live"}:O.status==="connecting"||O.status==="backoff"?{txt:"RECONNECTING\u2026",col:Vd,key:"recon"}:{txt:"OFFLINE",col:"#8F98A3",key:"off"}}let rt=O=>O>=1e3?Math.round(O).toLocaleString("en-US"):O.toPrecision(5);function ft(O){if(!(O>0))return 1;let J=Math.pow(10,Math.floor(Math.log10(O)));for(let j of[1,2,2.5,5,10])if(O<=j*J)return j*J;return 10*J}let _t=O=>new Date(O).toTimeString().slice(0,8);function Wt(O,J,j,lt,ct,gt){O.beginPath(),O.moveTo(J+gt,j),O.arcTo(J+lt,j,J+lt,j+ct,gt),O.arcTo(J+lt,j+ct,J,j+ct,gt),O.arcTo(J,j+ct,J,j,gt),O.arcTo(J,j,J+lt,j,gt),O.closePath()}function Ot(){let O=Date.now();H=O,q++;let J=o.width,j=o.height,lt=b==="aurora",ct=b==="stars",gt=nt(),Dt=l(yh.r),Nt=l(yh.t),yt=l(yh.b),I=J-Dt,zt=j-Nt-yt;if(a.clearRect(0,0,J,j),!lt&&!ct){let vt=a.createLinearGradient(0,0,0,j);vt.addColorStop(0,"rgba(13,16,32,0.94)"),vt.addColorStop(.5,"rgba(9,11,24,0.92)"),vt.addColorStop(1,"rgba(7,9,20,0.94)"),a.fillStyle=vt,Wt(a,0,0,J,j,l(9)),a.fill();let St=a.createLinearGradient(0,0,0,l(46));St.addColorStop(0,"rgba(255,255,255,0.055)"),St.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=St,Wt(a,0,0,J,l(46),l(9)),a.fill(),a.strokeStyle="rgba(245,197,66,0.5)",a.lineWidth=Math.max(1,l(1.2)),Wt(a,l(4),l(4),J-l(8),j-l(8),l(7)),a.stroke(),a.strokeStyle="rgba(245,197,66,0.8)",a.lineWidth=Math.max(1.2,l(1.8));let ne=l(9);for(let[$t,Kt,xe,Je]of[[l(10),l(10),1,1],[J-l(10),l(10),-1,1],[l(10),j-l(10),1,-1],[J-l(10),j-l(10),-1,-1]])a.beginPath(),a.moveTo($t+xe*ne,Kt),a.lineTo($t,Kt),a.lineTo($t,Kt+Je*ne),a.stroke()}else if(lt){let vt=a.createLinearGradient(0,0,0,j);vt.addColorStop(0,"rgba(120,150,200,0.10)"),vt.addColorStop(1,"rgba(0,0,0,0.55)"),a.fillStyle=vt,a.fillRect(0,0,J,j)}else a.fillStyle="rgba(8,10,24,0.72)",Wt(a,0,0,J,j,l(9)),a.fill();a.textBaseline="middle",a.font=`700 ${l(Ms.title)}px "Space Grotesk", Consolas, monospace`,a.textAlign="left",a.fillStyle="rgba(242,238,227,0.92)",a.fillText("BTC / USDT",l(15),l(17)),a.font=`500 ${l(Ms.sub)}px "Space Grotesk", Consolas, monospace`,a.fillStyle="rgba(176,182,210,0.95)",a.fillText("1 s CANDLES",l(15)+a.measureText("BTC / USDT").width+l(84),l(17.5)),a.font=`700 ${l(Ms.chip)}px "Space Grotesk", Consolas, monospace`;let kt=gt.txt,w=a.measureText(kt).width+l(30),_=J-l(12)-w,z=l(17)-l(10);a.fillStyle="rgba(6,8,18,0.45)",Wt(a,_,z,w,l(20),l(10)),a.fill(),a.strokeStyle="rgba(255,255,255,0.12)",a.lineWidth=1,Wt(a,_+.5,z+.5,w-1,l(20)-1,l(10)),a.stroke(),a.beginPath(),a.arc(_+l(10),z+l(10),l(3.2),0,6.284),a.fillStyle=gt.col,a.fill(),a.fillStyle=gt.col,a.fillText(kt,_+l(18),z+l(10.5));let k=E.count|0;if(k<2){a.fillStyle="rgba(146,152,181,0.8)",a.font=`500 ${l(Ms.msg)}px "Space Grotesk", Consolas, monospace`,a.textAlign="center",a.fillText(E.seeded?"awaiting live tape\u2026":"seeding 5 min of 1 s candles\u2026",J/2,Nt+zt/2),h.needsUpdate=!0;return}let Y=E.t,dt=E.o,pt=E.h,K=E.l,Q=E.c,Et=Math.max(3,l(7.5)),Bt=I-l(22),Tt=Math.max(16,Math.floor(Bt/Et)),mt=k>Tt?k-Tt:0,it=k-mt,Zt=Bt/(it||1),Jt=vt=>(vt-mt)*Zt+Zt*.5,B=1/0,xt=-1/0;for(let vt=mt;vt<k;vt++)K[vt]<B&&(B=K[vt]),pt[vt]>xt&&(xt=pt[vt]);A.price!=null&&isFinite(A.price)&&(A.price<B&&(B=A.price),A.price>xt&&(xt=A.price));let st=(xt-B)*.1||Math.abs(xt)*4e-4||1;B-=st,xt+=st;let ut=vt=>Nt+(xt-vt)/(xt-B)*zt,At=ft((xt-B)/3);a.font=`500 ${l(Ms.axis)}px "Space Grotesk", Consolas, monospace`;for(let vt=Math.ceil(B/At)*At;vt<xt;vt+=At){let St=Math.round(ut(vt))+.5;a.strokeStyle=lt||ct?"rgba(255,255,255,0.05)":"rgba(255,255,255,0.10)",a.lineWidth=1,a.beginPath(),a.moveTo(l(10),St),a.lineTo(Bt+l(22),St),a.stroke(),ct||(a.fillStyle="rgba(170,176,203,0.85)",a.textAlign="left",a.fillText(rt(vt),I+l(8),St))}a.textAlign="center",a.textBaseline="alphabetic";let ht=Y[mt],G=Y[k-1];for(let vt=Math.ceil(ht/15e3)*15e3;vt<=G;vt+=15e3){let St=mt,ne=k-1;for(;St<ne;){let Kt=St+ne>>1;Y[Kt]<vt?St=Kt+1:ne=Kt}let $t=Jt(St);$t<l(20)||$t>Bt-l(20)||(a.strokeStyle="rgba(255,255,255,0.1)",a.beginPath(),a.moveTo($t+.5,j-yt),a.lineTo($t+.5,j-yt+l(4)),a.stroke(),a.fillStyle="rgba(186,192,218,0.92)",a.font=`500 ${l(Ms.time)}px "Space Grotesk", Consolas, monospace`,a.fillText(_t(vt),$t,j-l(5)))}if(ct){a.strokeStyle="rgba(255,255,255,0.10)",a.lineWidth=1;for(let vt=mt;vt<k;vt++){let St=Jt(vt);a.beginPath(),a.moveTo(St,ut(pt[vt])),a.lineTo(St,ut(K[vt])),a.stroke()}a.beginPath();for(let vt=mt;vt<k;vt++){let St=Jt(vt),ne=ut(Q[vt]);vt===mt?a.moveTo(St,ne):a.lineTo(St,ne)}a.strokeStyle="rgba(190,214,255,0.22)",a.lineWidth=Math.max(1,l(1.2)),a.stroke();for(let vt=mt;vt<k;vt++){let St=Q[vt]>=dt[vt]?Xe.BUY_BRIGHT:Xe.SELL_BRIGHT,ne=Jt(vt),$t=ut(Q[vt]);a.globalAlpha=.85,a.beginPath(),a.arc(ne,$t,Math.max(1,l(1.8)),0,6.284),a.fillStyle=St,a.fill(),a.globalAlpha=.16,a.beginPath(),a.arc(ne,$t,Math.max(2.5,l(4.6)),0,6.284),a.fill(),a.globalAlpha=1}}else if(lt){for(let St=mt;St<k;St++){let ne=Jt(St),Kt=Q[St]>=dt[St]?Xe.BUY_BRIGHT:Xe.SELL_BRIGHT,xe=ut(Q[St]),Je=ut(pt[St]),Tn=ut(dt[St]),ge=Math.min(xe,Je),tn=a.createLinearGradient(0,ge,0,xe+l(2));tn.addColorStop(0,"rgba(255,255,255,0)"),tn.addColorStop(.75,Kt),tn.addColorStop(1,"#ffffff"),a.fillStyle=tn,a.fillRect(ne-l(1.2),ge,l(2.4),Math.max(l(2),xe-ge+l(2))),a.globalAlpha=1,a.fillStyle=Kt,a.fillRect(ne-l(2.4),Math.min(Tn,xe),l(4.8),Math.max(l(1.8),Math.abs(xe-Tn)))}let vt=a.createLinearGradient(0,Nt+zt*.3,0,j);vt.addColorStop(0,"rgba(120,180,255,0.18)"),vt.addColorStop(1,"rgba(120,180,255,0)"),a.beginPath();for(let St=mt;St<k;St++){let ne=Jt(St),$t=ut(Q[St]);St===mt?a.moveTo(ne,$t):a.lineTo(ne,$t)}a.lineTo(I,j+40),a.lineTo(Jt(mt)-l(20),j+40),a.closePath(),a.fillStyle=vt,a.fill()}else{let vt=Math.max(1.5,Math.min(l(13),Zt*.62));for(let St=mt;St<k;St++){let ne=Jt(St),$t=Q[St]>=dt[St];a.fillStyle=$t?Xe.BUY_BRIGHT:Xe.SELL_BRIGHT,a.fillRect(ne-l(.7),ut(pt[St]),Math.max(1,l(1.4)),Math.max(l(1.4),ut(K[St])-ut(pt[St])));let Kt=ut(dt[St]),xe=ut(Q[St]);a.fillRect(ne-vt/2,Math.min(Kt,xe),vt,Math.max(l(1.4),Math.abs(xe-Kt)))}}if(!ct){a.save(),a.globalCompositeOperation="lighter";for(let[vt,St]of[[l(9),.07],[l(4),.11]]){a.beginPath();for(let ne=mt;ne<k;ne++){let $t=Jt(ne),Kt=ut(Q[ne]);ne===mt?a.moveTo($t,Kt):a.lineTo($t,Kt)}a.strokeStyle=`rgba(150,205,255,${St})`,a.lineWidth=vt,a.lineJoin="round",a.stroke()}a.restore()}L=L.filter(vt=>O-vt.ts<$&&vt.ts>=ht-1e3);for(let vt of L){let St=mt,ne=k-1,$t=Math.floor(vt.ts/1e3)*1e3;for(;St<ne;){let ge=St+ne>>1;Y[ge]<$t?St=ge+1:ne=ge}let Kt=Jt(St),xe=ut(Math.min(xt-1,Math.max(B+1,vt.price))),Je=Math.max(0,1-(O-vt.ts)/$),Tn=vt.side==="buy"?Xe.BUY:Xe.SELL;a.globalAlpha=.25*Je,a.beginPath(),a.arc(Kt,xe,l(8)+Math.min(l(7),vt.notional/25e4*l(7)),0,6.284),a.fillStyle=Tn,a.fill(),a.globalAlpha=Je,a.beginPath(),a.arc(Kt,xe,l(3)+Math.min(l(2.5),vt.notional/25e4*l(2.5)),0,6.284),a.fill(),a.globalAlpha=1}let et=A.price!=null&&isFinite(A.price)?A.price:Q[k-1],wt=et>=(dt[k-1]!=null?dt[k-1]:et)?Xe.BUY_BRIGHT:Xe.SELL_BRIGHT,Gt=Math.min(Nt+zt,Math.max(Nt,ut(et))),pe=Jt(k-1);ct?(a.globalAlpha=.45,a.beginPath(),a.arc(pe,Gt,l(10),0,6.284),a.fillStyle=wt,a.fill(),a.globalAlpha=1,a.strokeStyle=wt,a.lineWidth=Math.max(1,l(1.6)),a.beginPath(),a.moveTo(pe-l(9),Gt),a.lineTo(pe+l(9),Gt),a.moveTo(pe,Gt-l(9)),a.lineTo(pe,Gt+l(9)),a.stroke(),a.beginPath(),a.arc(pe,Gt,Math.max(1.5,l(3)),0,6.284),a.fillStyle="#FFFFFF",a.fill()):(a.setLineDash([l(6),l(4)]),a.strokeStyle=wt,a.lineWidth=Math.max(1,l(1.2)),a.beginPath(),a.moveTo(l(10),Gt+.5),a.lineTo(I,Gt+.5),a.stroke(),a.setLineDash([]));let we=et>=1e3?Math.round(et).toLocaleString("en-US"):et.toFixed(2);a.font=`700 ${l(Ms.tag)}px "Space Grotesk", Consolas, monospace`;let vn=a.measureText(we).width+l(14),In=l(19),Ze=Math.min(Nt+zt-In/2,Math.max(Nt+In/2,Gt));a.fillStyle=wt,Wt(a,I+l(5),Ze-In/2,vn,In,l(5)),a.fill(),a.fillStyle="#05060F",a.textAlign="center",a.textBaseline="middle",a.fillText(we,I+l(5)+vn/2,Ze+1),(P||A).mode!=="demo"&&O-X>ot&&(a.fillStyle="rgba(5,6,15,0.45)",a.fillRect(0,0,J,j)),h.needsUpdate=!0}function ee(O,J){if(!O)return;let j=s&&s.domElement.clientWidth||window.innerWidth||1280,lt=s&&s.domElement.clientHeight||window.innerHeight||800;j+"x"+lt!==C&&(y(),Ot()),E=O,J&&(A=J),E.rev!==F&&(F=E.rev,X=Date.now());let ct=A.price!==D;D=A.price,Date.now()-H>=n&&(ct||P||J)&&Ot()}function tt(O){O&&(P=O,A.status=O.status,A.mode=O.mode,O.providerLabel&&(A.providerLabel=O.providerLabel),Ot(),P=null)}function at(O){!O||!isFinite(O.price)||!isFinite(O.notional)||(L.push({ts:O.ts||Date.now(),price:O.price,side:O.side,notional:O.notional}),L.length>40&&L.shift())}function bt(O){return T.includes(O)?(b=O,Ot(),!0):!1}function Yt(O){return u.visible=!!O,u.visible}function Pt(){let O=nt(),J=a.getImageData(0,0,o.width,o.height).data,j=0;for(let gt=3;gt<J.length;gt+=124)J[gt]>12&&j++;let lt=u.geometry.parameters,ct=[];for(let[gt,Dt]of[[-1,1],[1,1],[1,-1],[-1,-1]])r.set(u.position.x+gt*lt.width/2,u.position.y+Dt*lt.height/2,u.position.z).project(t),ct.push({x:r.x*.5+.5,y:-r.y*.5+.5});return{variant:b,draws:q,ink:j,candles:E.count|0,rev:E.rev|0,seeded:!!E.seeded,chip:O.key,chipText:O.txt,lastPrice:A.price,stale:(P||A).mode!=="demo"&&Date.now()-X>ot,textureW:o.width,textureH:o.height,screenScale:+c.toFixed(3),plane:[+u.geometry.parameters.width.toFixed(2),+u.geometry.parameters.height.toFixed(2)],position:[+u.position.x.toFixed(2),+u.position.y.toFixed(2),+u.position.z.toFixed(3)],mount:e.board?{face:+e.board.face.toFixed(3),gap:+e.board.gap.toFixed(3),glass:+u.position.z.toFixed(3),proudBy:+(u.position.z-e.board.face).toFixed(3)}:null,boardWorld:e.board?{x0:+(e.board.w/-2).toFixed(2),x1:+(e.board.w/2).toFixed(2),y0:+(e.board.y-e.board.h/2).toFixed(2),y1:+(e.board.y+e.board.h/2).toFixed(2),face:+e.board.face.toFixed(3),front:+(u.position.z+.05).toFixed(3)}:null,screen:{l:+Math.min(...ct.map(gt=>gt.x)).toFixed(3),r:+Math.max(...ct.map(gt=>gt.x)).toFixed(3),t:+Math.min(...ct.map(gt=>gt.y)).toFixed(3),b:+Math.max(...ct.map(gt=>gt.y)).toFixed(3)},wall:{...yn}}}function qt(){window.removeEventListener("resize",ae),i.remove(f),u.geometry.dispose(),d.dispose(),h.dispose(),M.forEach(O=>O.geometry.dispose()),R.geometry.dispose(),m.dispose()}function ae(){requestAnimationFrame(()=>{y(),Ot()})}return window.addEventListener("resize",ae),y(),Ot(),bt(b),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>Ot()).catch(()=>{}),{update:ee,notifyStatus:tt,trade:at,stats:Pt,setVariant:bt,setVisible:Yt,relayout:ae,dispose:qt,mesh:u,group:f,bezel:p,body:R,get variant(){return b}}}function Xd(i,t={}){let e=new pl({antialias:!0,powerPreference:"high-performance"}),n=(t.vfxScale||1)>.5,s=t.res?Math.max(.4,Math.min(2.5,t.res)):Math.min(devicePixelRatio||1,n?1.75:1.25);e.setPixelRatio(s),e.setSize(i.clientWidth||1280,i.clientHeight||720),e.shadowMap.enabled=!1,e.toneMapping=Kr,e.toneMappingExposure=1.35,yd(Math.min(8,e.capabilities.getMaxAnisotropy())),i.appendChild(e.domElement);let r=new Rr;r.fog=new Ar(Me.fog,18,55);function o(){return(i.clientWidth||1280)/(i.clientHeight||720)}let a=new ln(40,o(),.1,200);a.position.set(0,2.55,6.8),a.lookAt(0,3.15,0);let c=new Zr("#BFD4FF",.85);c.position.set(0,14,-8),c.castShadow=!1,r.add(c,c.target);let l=new Jr("#2A2438",.55);r.add(l);let h=new Yi(Xe.BUY_BRIGHT,34,7,1.6),d=new Yi(Xe.SELL_BRIGHT,34,7,1.6);r.add(h,d);let u=new qr("#FFD9A0",95,26,.75,.6,1.4);u.position.set(0,8,8),u.target.position.set(0,2,0),r.add(u,u.target);let f=new yl;r.add(f.mesh);let g=new vl;r.add(g.group);let x=new fa("A"),m=new fa("B");x.x=1.1,m.x=-1.1,r.add(x.root,m.root);let p=Id(r),M=new Tl(r,t.vfxScale||1),R=new Al({rope:f,cats:{A:x,B:m},flag:g,vfx:M,arena:p}),v=new wl(r,t.vfxScale||1),b={vfxScale:t.vfxScale||1,mouse:{x:0,y:0},mouseT:{x:0,y:0},moonPulse:0,shoot:null,clouds:null,stars:null,fireflies:null,embers:null};Fd(r),b.stars=Bd(r),b.vfxScale>.3&&(b.clouds=Od(r),b.shoot=Hd(r),b.fireflies=kd(r,b.vfxScale),b.embers=Gd(r,b.vfxScale)),zd(r);let T=Wd(r,a,{variant:t.skyVariant||"slab",renderer:e,anisotropy:Math.min(8,e.capabilities.getMaxAnisotropy()),board:p.userData.tapeBoard});function C(G){var Gt,pe;let et=i.clientWidth||innerWidth,wt=i.clientHeight||innerHeight;b.mouseT.x=((Gt=G.clientX)!=null?Gt:et/2)/et*2-1,b.mouseT.y=((pe=G.clientY)!=null?pe:wt/2)/wt*2-1}window.addEventListener("pointermove",C,{passive:!0});let y={t:0,amp:0},E=0,A=0,P=.62,L=0,F=0,D=new N,H=new N,q=new N,X=new N,ot=new N,$=new N,nt=new N,rt=new N,ft=new N,_t=new N;function Wt(G,et,wt){let Gt=wt.x-et.x,pe=wt.y-et.y,we=wt.z-et.z,vn=G.x-et.x,In=G.y-et.y,Ze=G.z-et.z,vt=Gt*Gt+pe*pe+we*we,St=vt>1e-9?(vn*Gt+In*pe+Ze*we)/vt:0;St=St<0?0:St>1?1:St;let ne=et.x+Gt*St,$t=et.y+pe*St,Kt=et.z+we*St;return Math.sqrt((G.x-ne)*(G.x-ne)+(G.y-$t)*(G.y-$t)+(G.z-Kt)*(G.z-Kt))}let Ot=22,ee=.34;function tt(G){let et=new ye,wt=new Float32Array(Ot*3),Gt=new Float32Array(Ot*3),pe=new Float32Array(Ot).fill(1/0);et.setAttribute("position",new Pe(wt,3)),et.setAttribute("color",new Pe(Gt,3));let we=new oi({size:.085,vertexColors:!0,map:(()=>{let Ze=document.createElement("canvas");Ze.width=Ze.height=64;let vt=Ze.getContext("2d"),St=vt.createRadialGradient(32,32,0,32,32,32);return St.addColorStop(0,"rgba(255,255,255,1)"),St.addColorStop(.5,"rgba(255,255,255,0.4)"),St.addColorStop(1,"rgba(255,255,255,0)"),vt.fillStyle=St,vt.fillRect(0,0,64,64),new un(Ze)})(),transparent:!0,opacity:.9,blending:An,depthWrite:!1}),vn=new Un(et,we);vn.frustumCulled=!1,r.add(vn);let In=new te(G.data.side==="A"?Xe.BUY_BRIGHT:Xe.SELL_BRIGHT);return{points:vn,pos:wt,col:Gt,age:pe,tint:In,emit(Ze){let vt=0;for(let St=1;St<Ot;St++)this.age[St]>this.age[vt]&&(vt=St);this.age[vt]=0,this.pos[vt*3]=Ze.x,this.pos[vt*3+1]=Ze.y,this.pos[vt*3+2]=Ze.z},update(Ze){let vt=ee;for(let St=0;St<Ot;St++){if(this.age[St]>vt){this.col[St*3]=this.col[St*3+1]=this.col[St*3+2]=0;continue}this.age[St]+=Ze;let ne=1-this.age[St]/vt;this.col[St*3]=this.tint.r*ne,this.col[St*3+1]=this.tint.g*ne,this.col[St*3+2]=this.tint.b*ne}this.points.geometry.attributes.position.needsUpdate=!0,this.points.geometry.attributes.color.needsUpdate=!0}}}let at=tt(x),bt=tt(m),Yt={start(G){(G.data.side==="A"?at:bt).emit(G.bladeTipWorld(X))},update(G){at.update(G),bt.update(G)}},Pt=-7.45,qt={wide:{cx:.155,cy:.17,par:.78,s:1},mid:{cx:.13,cy:.15,par:.8,s:.85},narrow:{cx:.13,cy:.05,par:.92,s:.52}},ae=new N,O=t.debug?{checks:0,fixes:0,worst:9,worstOut:9,post:null}:null,J=/[?&]clip=off/.test(typeof location!="undefined"?location.search:""),j=t.debug?{checks:0,fixes:0,worstIn:0,worstOut:0,last:{}}:null;function lt(G,et,wt){return G.bladeMidWorld(wt),et.bladeMidWorld(ot),wt.lerp(ot,.5)}function ct(G){let et=me.spanHalf-me.poleClearance;return He.clamp(G,-et,et)}let gt=G=>G.data.side,Dt=G=>gt(G)==="A"?m:x,Nt=G=>gt(G)==="A"?-1:1;function yt(G,et){return Math.abs(G.x-et.x)}function I(G,et){y.t=Math.max(y.t,G),y.amp=Math.max(y.amp,et)}function zt(G,et){let wt=gt(G),Gt=Dt(G),we=-Nt(G);if(M.lungeSparks(G.bladeMidWorld()),yt(G,Gt)<1.75){if(R.tryClash(wt))return;yt(G,Gt)<1.65&&(Gt.x=ct(Gt.x+we*(et?.5:.3)),R.resolveHit(wt,we),M.dustBurst({x:Gt.x,y:f.yAt(Gt.x),z:0}),I(et?.12:.07,et?.11:.06))}f.injectImpulse(G.x,0,-.7,0)}let w={rope:f,flagDart:!1,pressureWobble:0,circlePhase:0,...{onStamp(G){f.injectImpulse(G.x,0,-.9,0),M.dustBurst({x:G.x,y:f.yAt(G.x),z:0})},onLungeHit(G){zt(G,!1)},onThrust(G){let et=G.bladeTipWorld();M.lungeSparks(et),Yt.start(G)},onBeat(G){let et=G.bladeTipWorld();M.clashBurst(et),I(.05,.03),Yt.start(G)},onSlash(G,et){let wt=G.bladeTipWorld();gt(G)==="A"?(M.emberBurst(wt),et==="up"&&(E=Math.max(E,.19))):(M.ghost(wt),M.ghostTile(wt)),Yt.start(G),(et==="crescent"||et==="down")&&zt(G,!0),f.injectImpulse(G.x,0,-.7,0)},onWhoosh(G){M.ghost(G.bladeTipWorld())},onTaunt(G){M.lungeSparks(G.bladeTipWorld())},onTumble(G){M.dustBurst({x:G.x,y:f.yAt(G.x),z:0})},onHitImpact(G){M.dustBurst({x:G.x,y:f.yAt(G.x),z:0}),M.furTuft({x:G.x,y:G.root.position.y+.5,z:.1}),I(.08,.05)},onKnockback(G,et){G.x=ct(G.x+et*.4),f.injectImpulse(G.x,0,-1.1,0),M.dustBurst({x:G.x,y:f.yAt(G.x),z:0})},onLockSparks(G){let et=G.bladeMidWorld();M.clashBurst(et),I(.09,.06)}}};R.onClash=()=>{let G=lt(x,m,q);M.clashBurst(G),M.clashBurst(G),I(.16,.13),E=Math.max(E,.12),b.moonPulse=1,F=Math.min(1,F+.5)};let _={on:t.demo!==!1,t:0},z=67e3,k=0,Y=!0,dt=0,pt=[],K={armed:!1,ax:1.1,bx:-1.1},Q={on:!1,px:0,py:3.6,pz:12.6,tx:0,ty:3,tz:-2},Et={setPressure(G){_.on=!1,dt=He.clamp(G,-1,1)*.16,R.setPressure(G)},setPrice(G){if(!G||G<=0)return;_.on=!1;let et=z;z=G,g.tickDir(G>et?1:-1),g.setPrice(G),R.setPrice(G),g.setChange24h(He.clamp(R.trendM()*8,-99,99))},setChange24hText(G){g.setChange24hText(G)},chart:T,onTradeCallout(G){return pt.push(G),()=>{let et=pt.indexOf(G);et>=0&&pt.splice(et,1)}},tradeCallout(G){G&&G.notional>=25e4?(b.moonPulse=1,F=Math.min(1,F+.35)):G&&G.notional>=1e5&&(b.moonPulse=Math.max(b.moonPulse,.6));for(let et=0;et<pt.length;et++)try{pt[et](G)}catch{}},dispose(){Y=!1,cancelAnimationFrame(k),window.removeEventListener("resize",Tt),window.removeEventListener("pointermove",C),e.dispose(),e.domElement.parentElement&&e.domElement.parentElement.removeChild(e.domElement)}};function Bt(){let G=i.clientWidth||1280,et=i.clientHeight||720;a.aspect=G/et,a.updateProjectionMatrix(),e.setSize(G,et)}function Tt(){Bt()}Bt(),window.addEventListener("resize",Tt);let mt=[1,.9,.82,.75],it={on:t.governor!==!1,base:s,step:0,ratio:s,changes:0,fails:0,window:16,slowMs:26,fastMs:14,buf:[],cooldown:0,hold:0,med:0,pending:0,preMed:0,lock:0,warmup:150},Zt=n?1:.75,Jt=(()=>{for(let G=1;G<mt.length;G++)if(s*mt[G]<Zt)return G-1;return mt.length-1})();function B(G){it.step=Math.max(0,Math.min(Jt,G)),it.ratio=it.base*mt[it.step],e.setPixelRatio(it.ratio),Bt(),it.buf.length=0}function xt(G){if(!it.on)return;if(it.warmup>0){it.warmup--;return}if(it.buf.push(G),it.buf.length<it.window)return;let et=it.buf.slice().sort((wt,Gt)=>wt-Gt);if(it.med=et[et.length>>1],it.buf.length=0,it.pending>0){--it.pending===0&&(it.med>it.preMed*.92?(it.step>0&&B(it.step-1),++it.fails>=2&&(it.lock=1)):it.fails=0);return}if(it.lock){it.med<it.fastMs?++it.lock>8&&(it.lock=0,it.fails=0,it.cooldown=2):it.lock>8&&(it.lock=1);return}if(it.cooldown>0){it.cooldown--;return}it.med>it.slowMs?it.slow=(it.slow||0)+1:it.slow=0,it.med>it.slowMs&&it.slow>=2&&it.step<Jt?(it.preMed=it.med,it.pending=3,it.hold=0,it.slow=0,B(it.step+1),it.changes++):it.med<it.fastMs&&it.step>0?++it.hold>=3&&(B(it.step-1),it.cooldown=5,it.changes++,it.hold=0):it.hold=0}let st=0,ut=0,At=performance.now();function ht(){if(!Y)return;k=requestAnimationFrame(ht);let G=performance.now(),et=Math.min((G-At)/1e3,.05);At=G;let wt=et;if(E>0&&(E-=et,wt=et*.35),ut+=wt,st++,_.on&&!K.armed){_.t+=wt;let $t=Math.sin(_.t*.4)*.8+Math.sin(_.t*.13)*.35+Math.sin(_.t*1.7)*.12;if(R.setPressure($t),st%30===0){let Kt=(Math.sin(_.t*.05)+Math.sin(_.t*.021+2))*30;z+=Kt+(Math.random()-.5)*8,g.tickDir(Kt>0?1:-1),g.setPrice(z),R.setPrice(z),g.setChange24h(2.4+Math.sin(_.t*.05)*3)}}K.armed&&(R.pressure=0,x.setState("IDLE"),m.setState("IDLE"),x.x=K.ax,m.x=K.bx),w.flagDart=!1,w.circlePhase=R.circlePhase,w.pressureWobble+=(dt-w.pressureWobble)*Math.min(1,wt*5),f.clearLoads(),f.setLoad(x.x+x.pose.xOff,1),f.setLoad(m.x+m.pose.xOff,1),f.step(wt),R.update(wt),x.update(wt,w),m.update(wt,w);{let $t=x.x+x.pose.xOff,Kt=m.x+m.pose.xOff,xe=(ge,tn)=>{x.x+=ge*tn,m.x-=ge*tn,x.root.position.x+=ge*tn,m.root.position.x-=ge*tn},Je=Math.abs($t-Kt);Je<me.minBodyGap&&xe($t>=Kt?1:-1,(me.minBodyGap-Je)/2);let Tn=me.minHeadCentre*me.minHeadCentre;O&&O.checks++;for(let ge=0;ge<3;ge++){let tn=x.x+x.pose.xOff>=m.x+m.pose.xOff?1:-1;x.headCentreWorld(D),m.headCentreWorld(H);let Bn=D.x-H.x,fi=D.y-H.y,pi=D.z-H.z,Sn=Math.sqrt(Bn*Bn+fi*fi+pi*pi);if(O&&Sn<O.worst&&(O.worst=Sn),Sn>=me.minHeadCentre)break;let Qn=Math.sqrt(Math.max(0,Tn-(fi*fi+pi*pi)))-Math.abs(Bn);if(Qn<=0)break;xe(tn,Math.min(Qn/2,.5)),O&&O.fixes++,x.root.updateMatrixWorld(!0),m.root.updateMatrixWorld(!0)}if(O){x.headCentreWorld(D),m.headCentreWorld(H);let ge=D.distanceTo(H);ge<O.worstOut&&(O.worstOut=ge),O.post={hc:+ge.toFixed(4),n:st,gap:+Math.abs(x.x+x.pose.xOff-(m.x+m.pose.xOff)).toFixed(3)}}}if(f.updateVisual(),!K.armed&&!J){let xe=[.6,.8,1,1.2];x.data.hips.getWorldPosition($),x.data.spine.getWorldPosition(nt),m.data.hips.getWorldPosition(rt),m.data.spine.getWorldPosition(ft);let Je={A:$,B:rt},Tn={A:nt,B:ft};for(let ge of[x,m]){let tn=ge.data.side,Bn=tn==="A"?"B":"A",fi=Bn==="A"?D:H,pi=tn==="A"?D:H,Sn=ge.data.arms[ge.data.swordArm],Qn=()=>{let S=0,U=0;for(let Z=0;Z<xe.length;Z++){_t.set(xe[Z],0,0),ge.data.sword.localToWorld(_t);let V=Math.max(.26-Wt(_t,Je[Bn],Tn[Bn]),.28-_t.distanceTo(fi),0),W=Math.max(.26-Wt(_t,Je[tn],Tn[tn]),.28-_t.distanceTo(pi),0);V>S&&(S=V,U=1),W>S&&(S=W,U=2)}return{pen:S,kind:U}},Es=0,Ts=Qn().pen,mi={pen:Ts,kind:0};for(let S=0;S<3&&(mi=Qn(),!(mi.pen<=.012||Es>.8));S++){let U=Math.min(.13,mi.pen*1.3),Z=Sn.shoulder.rotation.z,V=Sn.shoulder.rotation.x,W=Sn.elbow.rotation.z,It=mi.kind===1?[[-U,U*.5,-U*.4],[-U,-U*.5,-U*.4],[-U,0,-U*.7]]:[[-U*.4,U*.7,-U*.6],[-U*.4,-U*.7,-U*.6]],Ut=!1;for(let[Rt,Ht,Xt]of It)if(Sn.shoulder.rotation.z=Z+Rt,Sn.shoulder.rotation.x=V+Ht,Sn.elbow.rotation.z=W+Xt,ge.root.updateMatrixWorld(!0),Qn().pen<mi.pen-.002){Ut=!0,Es+=Math.abs(Rt)+Math.abs(Ht);break}if(!Ut){Sn.shoulder.rotation.z=Z,Sn.shoulder.rotation.x=V,Sn.elbow.rotation.z=W,ge.root.updateMatrixWorld(!0);break}}if(j){let S=Qn();j.checks++,Es>0&&j.fixes++,Ts>j.worstIn&&(j.worstIn=Ts),S.pen>j.worstOut&&(j.worstOut=S.pen),j.last[tn]={before:+Ts.toFixed(4),after:+S.pen.toFixed(4),folded:+Es.toFixed(3)}}}}if(!K.armed)for(let $t of[x,m]){let Kt=$t.state.name;if(Kt==="LUNGE"||Kt==="RUSH"||Kt==="SLASH_UP"||Kt==="SLASH_SPIN"||Kt==="RIPOSTE"||Kt==="THRUST"){let xe=$t.state,Je=xe.dur||1;xe.t>Je*.15&&xe.t<Je*.85&&($t.data.side==="A"?at:bt).emit($t.bladeTipWorld(X))}}g.update(wt,f);let Gt=x.state.name==="BLADE_LOCK"||x.state.name==="CLASH"||m.state.name==="BLADE_LOCK"||m.state.name==="CLASH",pe=R.brawlIntensity();if(F+=(pe-F)*Math.min(1,wt/.8),Gt&&st%3===0){let $t=lt(x,m,q);M.clashBurst($t),M.emberBurst($t)}h.position.set(x.x+1.5,2.6,-1.3),d.position.set(m.x-1.5,2.6,-1.3);let we=p.userData.pennants;if(we)for(let $t of["L","R"]){let Kt=we[$t];Kt.rotation.y=Math.sin(ut*1.7+($t==="L"?0:1.5))*.25,Kt.rotation.x=Math.sin(ut*2.3+($t==="L"?0:1))*.06,Kt.position.y=me.ropeY+1.05+Math.sin(ut*2.1+($t==="L"?0:.6))*.03}Ld(p,ut),M.update(wt),Yt.update(wt),v.update(wt,R.pressure,F),b.moonPulse=Math.max(0,b.moonPulse-wt*.55);let vn=$t=>Math.abs($t)<.07?0:($t-Math.sign($t)*.07)/.93;b.mouse.x+=(vn(b.mouseT.x)-b.mouse.x)*Math.min(1,wt*1.8),b.mouse.y+=(vn(b.mouseT.y)-b.mouse.y)*Math.min(1,wt*1.8),b.stars&&b.stars.update(ut),b.clouds&&b.clouds.update(ut,wt),b.shoot&&b.shoot.update(ut,wt,b.moonPulse),b.fireflies&&b.fireflies.update(ut),b.embers&&b.embers.update(ut);let In=Math.max(y.t,0);In>0?y.t-=et:y.amp=0;let Ze=In/.16*y.amp,vt=(x.x+m.x)*.5;A+=(vt*P-A)*Math.min(1,wt*3.2),L+=(pe-L)*Math.min(1,wt*1.4);let St=Math.sin(ut*.09)*.18;Q.on?(a.position.set(Q.px,Q.py,Q.pz),a.lookAt(Q.tx,Q.ty,Q.tz)):(a.position.set(A+St+(Math.random()-.5)*Ze+b.mouse.x*.5,2.55+Math.sin(ut*.06)*.1+(Math.random()-.5)*Ze-b.mouse.y*.3+L*.16,6.8-L*.55),a.lookAt(A*.9,3.15-L*.1,0));let ne=p.userData.moon;if(ne){ne.material.color.setScalar(1+b.moonPulse*.34+Math.sin(ut*.8)*.04);let Kt=i.clientWidth||innerWidth,xe=Kt<700?qt.narrow:Kt<1024?qt.mid:qt.wide;ae.set(xe.cx*2-1,-(xe.cy*2-1),.5).unproject(a),ae.sub(a.position).normalize();let Je=(Pt-a.position.z)/ae.z,Tn=a.position.x+ae.x*Je-a.position.x*(1-xe.par),ge=a.position.y+ae.y*Je;ne.position.set(Tn,ge,Pt),ne.scale.setScalar(xe.s*(1+b.moonPulse*.06))}e.render(r,a),xt(et*1e3)}return ht(),t.debug&&(window.__duelDebug={rope:f,flag:g,director:R,catA:x,catB:m,arena:p,vfx:M,camera:a,renderer:e,crowd:v,hooksTrade:pt,gov:it,contact:O,clipTelemetry:j,skyChart:T,quality:()=>({ratio:it.ratio,base:it.base,step:it.step,med:it.med,changes:it.changes,on:it.on,fails:it.fails,lock:it.lock}),heat:()=>F,lane:()=>R.laneState(),camPan:()=>A,lockCamera:(G,et=0,wt=3.6,Gt=12.6,pe=0,we=3,vn=-2)=>{Q.on=!!G,Q.px=et,Q.py=wt,Q.pz=Gt,Q.tx=pe,Q.ty=we,Q.tz=vn},freeze:(G,et=1.1,wt=-1.1)=>{K.armed=!!G,K.ax=et,K.bx=wt,_.on=!1}}),Et}function Yd(i,t,e={}){let n=typeof e.onCallout=="function"?e.onCallout:null,s=typeof e.onStatus=="function"?e.onStatus:null,r=typeof e.onState=="function"?e.onState:null,o=5e4,a=i.onTrade(h=>{h.notional>=o&&t.tradeCallout&&t.tradeCallout({side:h.side,qty:h.qty,notional:h.notional,price:h.price,ts:h.ts})}),c=i.onChange(h=>{if(typeof h.pressure=="number"&&isFinite(h.pressure)&&t.setPressure(h.pressure),h.price&&t.setPrice(h.price),typeof h.change24hPct=="number"&&isFinite(h.change24hPct)){let d=h.change24hPct>=0?"+":"";t.setChange24hText(`${d}${h.change24hPct.toFixed(2)}% 24h`)}r&&r(h)}),l=i.onStatus(h=>{s&&s(h)});return function(){c(),l(),a()}}var Pi=new URLSearchParams(location.search),Le=i=>document.getElementById(i);function qx(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}qx()||(Le("nogl").style.display="flex",Le("status-mode").textContent="NO WEBGL",Le("status-dot").className="");var Zx=matchMedia("(pointer: coarse)").matches||innerWidth<640,Cl=Xd(Le("duel-scene"),{demo:!0,debug:!0,vfxScale:Zx?.4:Pi.get("nofx")?.2:1,res:Pi.get("res")?Number(Pi.get("res")):void 0,governor:Pi.get("gov")!=="off"&&!Pi.get("res"),skyVariant:Pi.get("sky")||"slab"}),pa=Le("price"),qd=Le("chg24h"),Jx=Le("tps"),$x=Le("meter-buy"),Kx=Le("meter-sell"),jx=Le("meter-buy-pct"),Qx=Le("meter-sell-pct"),ty=Le("meter-duel"),ey=Le("meter-duel-text"),ny=Le("status-dot"),iy=Le("status-mode"),vh=Le("callouts"),Sh={buy:{el:Le("tag-buy"),state:Le("state-buy"),mom:Le("mom-buy"),last:""},sell:{el:Le("tag-sell"),state:Le("state-sell"),mom:Le("mom-sell"),last:""}},Pl=Cl.chart;function Qd(i){return i==null||!isFinite(i)?"\u2014":i>=1e6?(i/1e6).toFixed(1)+"M":i>=1e3?(i/1e3).toFixed(1)+"K":i.toFixed(1)}var Rl=null,Zd=0;function sy(i){i!=null&&Rl!=null&&i!==Rl&&(pa.classList.remove("tick-up","tick-down"),pa.offsetWidth,pa.classList.add(i>Rl?"tick-up":"tick-down"),clearTimeout(Zd),Zd=setTimeout(()=>pa.classList.remove("tick-up","tick-down"),600)),i!=null&&(Rl=i)}var ry=5e4,ay=25e4,oy=14;function tf(i){if(!i||i.notional<ry)return;vh.childElementCount>=oy&&vh.firstElementChild.remove();let t=i.notional>=ay,e=i.side==="buy";Pl.trade(i);let n=document.createElement("div");n.className=`callout ${i.side}${t?" whale":""}`;let s=document.createElement("span");s.className="head";let r=document.createElement("span");r.className="arr",r.textContent=e?"\u25B2":"\u25BC";let o=document.createElement("span");o.textContent=`${e?"+BUY":"-SELL"} $${Qd(i.notional)}`,s.appendChild(r),s.appendChild(o);let a=document.createElement("span");a.className="qty",a.textContent=`${i.qty>=1?i.qty.toFixed(2):i.qty.toFixed(4)} BTC @ ${i.price.toLocaleString("en-US",{maximumFractionDigits:0})}`,n.appendChild(s),n.appendChild(a);let c=e?62:22;n.style.left=c+Math.random()*14+"vw",n.style.top=26+Math.random()*36+"vh",vh.appendChild(n);let l=n.getBoundingClientRect();l.right>innerWidth-12&&(n.style.left=Math.max(12,innerWidth-l.width-12)+"px"),l.left<12&&(n.style.left="12px"),l.bottom>innerHeight-12&&(n.style.top=Math.max(12,innerHeight-l.height-12)+"px"),setTimeout(()=>n.remove(),t?3e3:2600)}Cl.onTradeCallout(tf);var ly=Pi.get("mode")||"auto",ef={mode:ly,emitIntervalMs:250};Pi.get("seed")&&(ef.demoSeed=Number(Pi.get("seed"))||0);var bs=new window.BtcTradeFeed(ef);function cy(i){let t=i.mode==="demo"||i.status==="demo";ny.className=t?"demo":i.status==="open"?"live":i.status||"";let e=!t&&i.status==="open"&&i.providerLabel?" \xB7 "+i.providerLabel.toUpperCase():"",s=t?"SIMULATION":{open:"LIVE",connecting:"CONNECTING",backoff:"RECONNECTING",stopped:"OFFLINE"}[i.status]||(i.status||"").toUpperCase();iy.textContent=s+e,Pl.notifyStatus(i)}var hy=Yd(bs,Cl,{onCallout:tf,onStatus:cy,onState:nf}),uy={IDLE:"EN GARDE",RECOVER:"RECOVERING",LUNGE:"LUNGE!",RUSH:"RUSH!",SLASH_UP:"SLASH UP!",SLASH_SPIN:"SLASH SPIN!",HIT:"HIT!",STUMBLE:"STAGGERS!",BLADE_LOCK:"BLADE LOCK",CLASH:"CLASH!",FREEZE:"EN GARDE",TAUNT:"TAUNTS!",RIPOSTE:"RIPOSTE!",PARRY_HOP:"PARRY!",THRUST:"THRUST!",FEINT:"FEINT!",PARRY_BEAT:"BEAT!",SIT_GUARD:"HOLDS GUARD"};function dy(i){return i==="LUNGE"||i==="RUSH"||i==="RIPOSTE"||i==="THRUST"?"lunge":i==="BLADE_LOCK"?"lock":i==="CLASH"?"clash":i==="HIT"||i==="STUMBLE"?"hit":""}var fy=180,Jd=new Set(["CLASH","HIT","BLADE_LOCK"]),py={RECOVER:.18,IDLE:.3};function $d(i,t){let e=Sh[i];if(!e)return;let n=t.name;if(n===e.last)return;let s=Jd.has(n);if(!s&&t.t<(py[n]||0))return;let r=performance.now();if(!s&&!Jd.has(e.last)&&r-(e.at||0)<fy)return;e.at=r,e.last=n;let o=dy(n);e.el.dataset.act=o,e.state.textContent=uy[n]||n}function nf(i){if(Pl.update(bs.candles(),i),sy(i.price),pa.textContent=i.price?i.price.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):"connecting\u2026",typeof i.change24hPct=="number"&&isFinite(i.change24hPct)){let s=i.change24hPct>=0?"+":"";qd.textContent=`${s}${i.change24hPct.toFixed(2)}%  ($${s}${Qd(Math.abs(i.change24hAbs||0))})`,qd.className=i.change24hPct>=0?"up":"down"}Jx.textContent=isFinite(i.tps)?Math.round(i.tps):"0";let t=i.pressure||0,e=t>0?t*50:0,n=t<0?-t*50:0;$x.style.width=e+"%",Kx.style.width=n+"%",jx.textContent=e>.5?Math.round(t*100)+"%":"\u2014",Qx.textContent=n>.5?Math.round(-t*100)+"%":"\u2014",Sh.buy.mom.style.width=Math.max(4,e*2)+"%",Sh.sell.mom.style.width=Math.max(4,n*2)+"%"}var my=Le("lane-mark"),Kd=Le("lane-pct"),gy=Le("lane-cat-b"),_y=Le("lane-cat-s"),xy=5.2;function yy(i){if(!i||!i.lane)return;let t=i.lane(),e=s=>Math.max(2,Math.min(98,50+s/xy*46));my.style.left=e(t.lane*3.2)+"%",gy.style.left=e(i.catA.x)+"%",_y.style.left=e(i.catB.x)+"%";let n=t.pct>=0?"+":"";Kd.textContent=`${n}${t.pct.toFixed(2)}%`,Kd.className=t.pct>=0?"up":"down"}var jd="";setInterval(()=>{try{let i=window.__duelDebug;if(!i||!i.catA||!i.catB)return;yy(i);let t=i.catA.state.name,e=i.catB.state.name;$d("buy",i.catA.state),$d("sell",i.catB.state);let n=t+"|"+e;if(n===jd)return;jd=n;let s=t!=="IDLE"||e!=="IDLE";ty.classList.toggle("act",s),ey.textContent=t==="BLADE_LOCK"||e==="BLADE_LOCK"?"BLADE LOCK":t==="CLASH"||e==="CLASH"?"CLASH!":t==="IDLE"&&e==="IDLE"?"EN GARDE":"CROSSED SWORDS"}catch{}},125);bs.start();document.addEventListener("visibilitychange",()=>{document.hidden?bs.stop():bs.state().status==="stopped"&&bs.start()});window.__duelPage={feed:bs,scene:Cl,unwire:hy,handleState:nf,chart:Pl};})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
