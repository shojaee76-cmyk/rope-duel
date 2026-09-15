(()=>{var lh=0,El=1,ch=2;var lr=1,hh=2,Ms=3,vi=0,Ze=1,_e=2,kn=0,jn=1,un=2,Tl=3,wl=4,uh=5;var Hi=100,dh=101,fh=102,ph=103,mh=104,gh=200,_h=201,xh=202,yh=203,Al=204,Rl=205,vh=206,Mh=207,Sh=208,bh=209,Eh=210,Th=211,wh=212,Ah=213,Rh=214,jr=0,ta=1,ea=2,fs=3,na=4,ia=5,sa=6,ra=7,Cl=0,Ch=1,Ph=2,En=0,Pl=1,Il=2,Ll=3,cr=4,Dl=5,Ul=6,Nl=7;var Fl=300,Mi=301,ki=302,Fa=303,Ba=304,hr=306,ui=1e3,Nn=1001,aa=1002,qe=1003,Ih=1004;var ur=1005;var ze=1006,Oa=1007;var gn=1008;var an=1009,Bl=1010,Ol=1011,Ss=1012,za=1013,Tn=1014,wn=1015,An=1016,Ha=1017,ka=1018,bs=1020,zl=35902,Hl=35899,kl=1021,Vl=1022,_n=1023,Fn=1026,Si=1027,Gl=1028,Va=1029,bi=1030,Ga=1031;var Wa=1033,dr=33776,fr=33777,pr=33778,mr=33779,Xa=35840,qa=35841,Ya=35842,Za=35843,Ja=36196,$a=37492,Ka=37496,Qa=37488,ja=37489,gr=37490,to=37491,eo=37808,no=37809,io=37810,so=37811,ro=37812,ao=37813,oo=37814,lo=37815,co=37816,ho=37817,uo=37818,fo=37819,po=37820,mo=37821,go=36492,_o=36494,xo=36495,yo=36283,vo=36284,_r=36285,Mo=36286;var zs=2300,oa=2301,Kr=2302,pl=2303,ml=2400,gl=2401,_l=2402;var Lh=3200;var So=0,Dh=1,ti="",Ue="srgb",Hs="srgb-linear",ks="linear",ce="srgb";var Qr=7680;var Uh=519,Nh=512,Fh=513,Bh=514,bo=515,Oh=516,zh=517,Eo=518,Hh=519,kh=35044,Vi=35048;var Wl="300 es",bn=2e3,ps=2001;function hd(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ud(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vh(){let i=Vs("canvas");return i.style.display="block",i}var Nc={},ms=null;function Xl(...i){let t="THREE."+i.shift();ms?ms("log",t,...i):console.log(t,...i)}function Gh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Bt(...i){i=Gh(i);let t="THREE."+i.shift();if(ms)ms("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Ot(...i){i=Gh(i);let t="THREE."+i.shift();if(ms)ms("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Fi(...i){let t=i.join(" ");t in Nc||(Nc[t]=!0,Bt(...i))}function Wh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Xh={[jr]:ta,[ea]:sa,[na]:ra,[fs]:ia,[ta]:jr,[sa]:ea,[ra]:na,[ia]:fs},Bn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fc=1234567,Ns=Math.PI/180,Bi=180/Math.PI;function Es(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ke[i&255]+Ke[i>>8&255]+Ke[i>>16&255]+Ke[i>>24&255]+"-"+Ke[t&255]+Ke[t>>8&255]+"-"+Ke[t>>16&15|64]+Ke[t>>24&255]+"-"+Ke[e&63|128]+Ke[e>>8&255]+"-"+Ke[e>>16&255]+Ke[e>>24&255]+Ke[n&255]+Ke[n>>8&255]+Ke[n>>16&255]+Ke[n>>24&255]).toLowerCase()}function Yt(i,t,e){return Math.max(t,Math.min(e,i))}function ql(i,t){return(i%t+t)%t}function dd(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function fd(i,t,e){return i!==t?(e-i)/(t-i):0}function Fs(i,t,e){return(1-e)*i+e*t}function pd(i,t,e,n){return Fs(i,t,1-Math.exp(-e*n))}function md(i,t=1){return t-Math.abs(ql(i,t*2)-t)}function gd(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function _d(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function xd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function yd(i,t){return i+Math.random()*(t-i)}function vd(i){return i*(.5-Math.random())}function Md(i){i!==void 0&&(Fc=i);let t=Fc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Sd(i){return i*Ns}function bd(i){return i*Bi}function Ed(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Td(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function wd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ad(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:Bt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function us(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function nn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ie={DEG2RAD:Ns,RAD2DEG:Bi,generateUUID:Es,clamp:Yt,euclideanModulo:ql,mapLinear:dd,inverseLerp:fd,lerp:Fs,damp:pd,pingpong:md,smoothstep:gd,smootherstep:_d,randInt:xd,randFloat:yd,randFloatSpread:vd,seededRandom:Md,degToRad:Sd,radToDeg:bd,isPowerOfTwo:Ed,ceilPowerOfTwo:Td,floorPowerOfTwo:wd,setQuaternionFromProperEuler:Ad,normalize:nn,denormalize:us},Ql=class Ql{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ql.prototype.isVector2=!0;var Ut=Ql,On=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(d!==y||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*y;m<0&&(u=-u,f=-f,g=-g,y=-y,m=-m);let p=1-o;if(m<.9995){let E=Math.acos(m),A=Math.sin(E);p=Math.sin(p*E)/A,o=Math.sin(o*E)/A,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+y*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+y*o;let E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Bt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Yt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},jl=class jl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wo.copy(this).projectOnVector(t),this.sub(Wo)}reflect(t){return this.sub(Wo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Yt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};jl.prototype.isVector3=!0;var U=jl,Wo=new U,Bc=new On,tc=class tc{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],y=s[0],m=s[3],p=s[6],E=s[1],A=s[4],v=s[7],M=s[2],T=s[5],R=s[8];return r[0]=a*y+o*E+l*M,r[3]=a*m+o*A+l*T,r[6]=a*p+o*v+l*R,r[1]=c*y+h*E+d*M,r[4]=c*m+h*A+d*T,r[7]=c*p+h*v+d*R,r[2]=u*y+f*E+g*M,r[5]=u*m+f*A+g*T,r[8]=u*p+f*v+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*c-h*n)*y,t[2]=(o*n-s*a)*y,t[3]=u*y,t[4]=(h*e-s*l)*y,t[5]=(s*r-o*e)*y,t[6]=f*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Fi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xo.makeScale(t,e)),this}rotate(t){return Fi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xo.makeRotation(-t)),this}translate(t,e){return Fi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};tc.prototype.isMatrix3=!0;var kt=tc,Xo=new kt,Oc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zc=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Rd(){let i={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ce&&(s.r=Jn(s.r),s.g=Jn(s.g),s.b=Jn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ce&&(s.r=ds(s.r),s.g=ds(s.g),s.b=ds(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?ks:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hs]:{primaries:t,whitePoint:n,transfer:ks,toXYZ:Oc,fromXYZ:zc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:ce,toXYZ:Oc,fromXYZ:zc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}var Kt=Rd();function Jn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Qi,la=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Qi===void 0&&(Qi=Vs("canvas")),Qi.width=t.width,Qi.height=t.height;let s=Qi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Qi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Vs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Jn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return Bt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Cd=0,gs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Es(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement!="undefined"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame!="undefined"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(qo(s[a].image)):r.push(qo(s[a]))}else r=qo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function qo(i){return typeof HTMLImageElement!="undefined"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&i instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&i instanceof ImageBitmap?la.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Bt("Texture: Unable to serialize Texture."),{})}var Pd=0,Yo=new U,sn=class i extends Bn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Nn,s=Nn,r=ze,a=gn,o=_n,l=an,c=i.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=Es(),this.name="",this.source=new gs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Yo).x}get height(){return this.source.getSize(Yo).y}get depth(){return this.source.getSize(Yo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Bt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Bt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ui:t.x=t.x-Math.floor(t.x);break;case Nn:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ui:t.y=t.y-Math.floor(t.y);break;case Nn:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Fl;sn.DEFAULT_ANISOTROPY=1;var ec=class ec{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let A=(c+1)/2,v=(f+1)/2,M=(p+1)/2,T=(h+u)/4,R=(d+y)/4,x=(g+m)/4;return A>v&&A>M?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=T/n,r=R/n):v>M?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=x/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=R/r,s=x/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(d-y)/E,this.z=(u-h)/E,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Yt(this.x,t.x,e.x),this.y=Yt(this.y,t.y,e.y),this.z=Yt(this.z,t.z,e.z),this.w=Yt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Yt(this.x,t,e),this.y=Yt(this.y,t,e),this.z=Yt(this.z,t,e),this.w=Yt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Yt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ec.prototype.isVector4=!0;var Ee=ec,ca=class extends Bn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new sn(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new gs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends ca{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Gs=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ha=class extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=qe,this.minFilter=qe,this.wrapR=Nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Na=class Na{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,y,m)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,y,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Na().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ji.setFromMatrixColumn(t,0).length(),r=1/ji.setFromMatrixColumn(t,1).length(),a=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-y*c,e[9]=-o*l,e[2]=y-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u+y*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=y+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;e[0]=u-y*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=y-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+y,e[1]=l*d,e[5]=y*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-y*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+y,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Id,t,Ld)}lookAt(t,e,n){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),ri.crossVectors(n,on),ri.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ri.crossVectors(n,on)),ri.normalize(),Pr.crossVectors(on,ri),s[0]=ri.x,s[4]=Pr.x,s[8]=on.x,s[1]=ri.y,s[5]=Pr.y,s[9]=on.y,s[2]=ri.z,s[6]=Pr.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],y=n[6],m=n[10],p=n[14],E=n[3],A=n[7],v=n[11],M=n[15],T=s[0],R=s[4],x=s[8],w=s[12],C=s[1],L=s[5],B=s[9],z=s[13],N=s[2],O=s[6],q=s[10],X=s[14],nt=s[3],J=s[7],tt=s[11],G=s[15];return r[0]=a*T+o*C+l*N+c*nt,r[4]=a*R+o*L+l*O+c*J,r[8]=a*x+o*B+l*q+c*tt,r[12]=a*w+o*z+l*X+c*G,r[1]=h*T+d*C+u*N+f*nt,r[5]=h*R+d*L+u*O+f*J,r[9]=h*x+d*B+u*q+f*tt,r[13]=h*w+d*z+u*X+f*G,r[2]=g*T+y*C+m*N+p*nt,r[6]=g*R+y*L+m*O+p*J,r[10]=g*x+y*B+m*q+p*tt,r[14]=g*w+y*z+m*X+p*G,r[3]=E*T+A*C+v*N+M*nt,r[7]=E*R+A*L+v*O+M*J,r[11]=E*x+A*B+v*q+M*tt,r[15]=E*w+A*z+v*X+M*G,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],y=t[7],m=t[11],p=t[15],E=l*f-c*u,A=o*f-c*d,v=o*u-l*d,M=a*f-c*h,T=a*u-l*h,R=a*d-o*h;return e*(y*E-m*A+p*v)-n*(g*E-m*M+p*T)+s*(g*A-y*M+p*R)-r*(g*v-y*T+m*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],y=t[13],m=t[14],p=t[15],E=e*o-n*a,A=e*l-s*a,v=e*c-r*a,M=n*l-s*o,T=n*c-r*o,R=s*c-r*l,x=h*y-d*g,w=h*m-u*g,C=h*p-f*g,L=d*m-u*y,B=d*p-f*y,z=u*p-f*m,N=E*z-A*B+v*L+M*C-T*w+R*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/N;return t[0]=(o*z-l*B+c*L)*O,t[1]=(s*B-n*z-r*L)*O,t[2]=(y*R-m*T+p*M)*O,t[3]=(u*T-d*R-f*M)*O,t[4]=(l*C-a*z-c*w)*O,t[5]=(e*z-s*C+r*w)*O,t[6]=(m*v-g*R-p*A)*O,t[7]=(h*R-u*v+f*A)*O,t[8]=(a*B-o*C+c*x)*O,t[9]=(n*C-e*B-r*x)*O,t[10]=(g*T-y*v+p*E)*O,t[11]=(d*v-h*T-f*E)*O,t[12]=(o*w-a*L-l*x)*O,t[13]=(e*L-n*w+s*x)*O,t[14]=(y*A-g*M-m*E)*O,t[15]=(h*M-d*A+u*E)*O,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,y=a*h,m=a*d,p=o*d,E=l*c,A=l*h,v=l*d,M=n.x,T=n.y,R=n.z;return s[0]=(1-(y+p))*M,s[1]=(f+v)*M,s[2]=(g-A)*M,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(u+p))*T,s[6]=(m+E)*T,s[7]=0,s[8]=(g+A)*R,s[9]=(m-E)*R,s[10]=(1-(u+y))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=ji.set(s[0],s[1],s[2]).length(),o=ji.set(s[4],s[5],s[6]).length(),l=ji.set(s[8],s[9],s[10]).length();r<0&&(a=-a),yn.copy(this);let c=1/a,h=1/o,d=1/l;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=d,yn.elements[9]*=d,yn.elements[10]*=d,e.setFromRotationMatrix(yn),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=bn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===bn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===ps)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=bn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===bn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===ps)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Na.prototype.isMatrix4=!0;var ve=Na,ji=new U,yn=new ve,Id=new U(0,0,0),Ld=new U(1,1,1),ri=new U,Pr=new U,on=new U,Hc=new ve,kc=new On,$n=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Yt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Yt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Yt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Yt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Yt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Bt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kc.setFromEuler(this),this.setFromQuaternion(kc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$n.DEFAULT_ORDER="XYZ";var Ws=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Dd=0,Vc=new U,ts=new On,Wn=new ve,Ir=new U,Is=new U,Ud=new U,Nd=new On,Gc=new U(1,0,0),Wc=new U(0,1,0),Xc=new U(0,0,1),qc={type:"added"},Fd={type:"removed"},es={type:"childadded",child:null},Zo={type:"childremoved",child:null},Ye=class i extends Bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new $n,n=new On,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ve},normalMatrix:{value:new kt}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.multiply(ts),this}rotateOnWorldAxis(t,e){return ts.setFromAxisAngle(t,e),this.quaternion.premultiply(ts),this}rotateX(t){return this.rotateOnAxis(Gc,t)}rotateY(t){return this.rotateOnAxis(Wc,t)}rotateZ(t){return this.rotateOnAxis(Xc,t)}translateOnAxis(t,e){return Vc.copy(t).applyQuaternion(this.quaternion),this.position.add(Vc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gc,t)}translateY(t){return this.translateOnAxis(Wc,t)}translateZ(t){return this.translateOnAxis(Xc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ir.copy(t):Ir.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Is,Ir,this.up):Wn.lookAt(Ir,Is,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),ts.setFromRotationMatrix(Wn),this.quaternion.premultiply(ts.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Ot("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qc),es.child=t,this.dispatchEvent(es),es.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fd),Zo.child=t,this.dispatchEvent(Zo),Zo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qc),es.child=t,this.dispatchEvent(es),es.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,t,Ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Nd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ye.DEFAULT_UP=new U(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qt=class extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bd={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function Jo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Ht=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Kt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Kt.workingColorSpace){if(t=ql(t,1),e=Yt(e,0,1),n=Yt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Jo(a,r,t+1/3),this.g=Jo(a,r,t),this.b=Jo(a,r,t-1/3)}return Kt.colorSpaceToWorking(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&Bt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Bt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Bt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let n=qh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Bt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return Kt.workingToColorSpace(Qe.copy(this),t),Math.round(Yt(Qe.r*255,0,255))*65536+Math.round(Yt(Qe.g*255,0,255))*256+Math.round(Yt(Qe.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.workingToColorSpace(Qe.copy(this),e);let n=Qe.r,s=Qe.g,r=Qe.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Kt.workingColorSpace){return Kt.workingToColorSpace(Qe.copy(this),e),t.r=Qe.r,t.g=Qe.g,t.b=Qe.b,t}getStyle(t=Ue){Kt.workingToColorSpace(Qe.copy(this),t);let e=Qe.r,n=Qe.g,s=Qe.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(Lr);let n=Fs(ai.h,Lr.h,e),s=Fs(ai.s,Lr.s,e),r=Fs(ai.l,Lr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qe=new Ht;Ht.NAMES=qh;var Xs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ht(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qs=class extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},vn=new U,Xn=new U,$o=new U,qn=new U,ns=new U,is=new U,Yc=new U,Ko=new U,Qo=new U,jo=new U,tl=new Ee,el=new Ee,nl=new Ee,hi=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),Xn.subVectors(n,e),$o.subVectors(t,e);let a=vn.dot(vn),o=vn.dot(Xn),l=vn.dot($o),c=Xn.dot(Xn),h=Xn.dot($o),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,qn.x),l.addScaledVector(a,qn.y),l.addScaledVector(o,qn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return tl.setScalar(0),el.setScalar(0),nl.setScalar(0),tl.fromBufferAttribute(t,e),el.fromBufferAttribute(t,n),nl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(tl,r.x),a.addScaledVector(el,r.y),a.addScaledVector(nl,r.z),a}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),Xn.subVectors(t,e),vn.cross(Xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),vn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;ns.subVectors(s,n),is.subVectors(r,n),Ko.subVectors(t,n);let l=ns.dot(Ko),c=is.dot(Ko);if(l<=0&&c<=0)return e.copy(n);Qo.subVectors(t,s);let h=ns.dot(Qo),d=is.dot(Qo);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ns,a);jo.subVectors(t,r);let f=ns.dot(jo),g=is.dot(jo);if(g>=0&&f<=g)return e.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(is,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Yc.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(Yc,o);let p=1/(m+y+u);return a=y*p,o=u*p,e.copy(n).addScaledVector(ns,a).addScaledVector(is,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},di=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Mn):Mn.fromBufferAttribute(r,a),Mn.applyMatrix4(t.matrixWorld),this.expandByPoint(Mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Dr.copy(n.boundingBox)),Dr.applyMatrix4(t.matrixWorld),this.union(Dr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Mn),Mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ls),Ur.subVectors(this.max,Ls),ss.subVectors(t.a,Ls),rs.subVectors(t.b,Ls),as.subVectors(t.c,Ls),oi.subVectors(rs,ss),li.subVectors(as,rs),Li.subVectors(ss,as);let e=[0,-oi.z,oi.y,0,-li.z,li.y,0,-Li.z,Li.y,oi.z,0,-oi.x,li.z,0,-li.x,Li.z,0,-Li.x,-oi.y,oi.x,0,-li.y,li.x,0,-Li.y,Li.x,0];return!il(e,ss,rs,as,Ur)||(e=[1,0,0,0,1,0,0,0,1],!il(e,ss,rs,as,Ur))?!1:(Nr.crossVectors(oi,li),e=[Nr.x,Nr.y,Nr.z],il(e,ss,rs,as,Ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Yn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Yn=[new U,new U,new U,new U,new U,new U,new U,new U],Mn=new U,Dr=new di,ss=new U,rs=new U,as=new U,oi=new U,li=new U,Li=new U,Ls=new U,Ur=new U,Nr=new U,Di=new U;function il(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Di.fromArray(i,r);let o=s.x*Math.abs(Di.x)+s.y*Math.abs(Di.y)+s.z*Math.abs(Di.z),l=t.dot(Di),c=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Fe=new U,Fr=new Ut,Od=0,be=class extends Bn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Od++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kh,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix3(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyMatrix4(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.applyNormalMatrix(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Fe.fromBufferAttribute(this,e),Fe.transformDirection(t),this.setXYZ(e,Fe.x,Fe.y,Fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=us(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=nn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=us(e,this.array)),e}setX(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=us(e,this.array)),e}setY(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=us(e,this.array)),e}setZ(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=us(e,this.array)),e}setW(t,e){return this.normalized&&(e=nn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=nn(e,this.array),n=nn(n,this.array),s=nn(s,this.array),r=nn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ys=class extends be{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Zs=class extends be{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var jt=class extends be{constructor(t,e,n){super(new Float32Array(t),e,n)}},zd=new di,Ds=new U,sl=new U,Kn=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):zd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);let e=Ds.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ds,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(sl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(sl)),this.expandByPoint(Ds.copy(t.center).sub(sl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Hd=0,fn=new ve,rl=new Ye,os=new U,ln=new di,Us=new di,We=new U,fe=class i extends Bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(hd(t)?Zs:Ys)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return rl.lookAt(t),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new jt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Bt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Us.setFromBufferAttribute(o),this.morphTargetsRelative?(We.addVectors(ln.min,Us.min),ln.expandByPoint(We),We.addVectors(ln.max,Us.max),ln.expandByPoint(We)):(ln.expandByPoint(Us.min),ln.expandByPoint(Us.max))}ln.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)We.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(t,c),We.add(os)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new be(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new U,l[x]=new U;let c=new U,h=new U,d=new U,u=new Ut,f=new Ut,g=new Ut,y=new U,m=new U;function p(x,w,C){c.fromBufferAttribute(n,x),h.fromBufferAttribute(n,w),d.fromBufferAttribute(n,C),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(L),o[x].add(y),o[w].add(y),o[C].add(y),l[x].add(m),l[w].add(m),l[C].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let x=0,w=E.length;x<w;++x){let C=E[x],L=C.start,B=C.count;for(let z=L,N=L+B;z<N;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let A=new U,v=new U,M=new U,T=new U;function R(x){M.fromBufferAttribute(s,x),T.copy(M);let w=o[x];A.copy(w),A.sub(M.multiplyScalar(M.dot(w))).normalize(),v.crossVectors(T,w);let L=v.dot(l[x])<0?-1:1;a.setXYZW(x,A.x,A.y,A.z,L)}for(let x=0,w=E.length;x<w;++x){let C=E[x],L=C.start,B=C.count;for(let z=L,N=L+B;z<N;z+=3)R(t.getX(z+0)),R(t.getX(z+1)),R(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new be(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,d=new U;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),y=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new be(u,h,d)}if(this.index===null)return Bt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var al=new U,kd=new U,Vd=new kt,Sn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=al.subVectors(n,e).cross(kd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(al),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Vd.getNormalMatrix(t),s=this.coplanarPoint(al).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Gd=0,Qn=class extends Bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=Es(),this.name="",this.type="Material",this.blending=jn,this.side=vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Rl,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Bt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Bt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Ht().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Sn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Zn=new U,ol=new U,Br=new U,Or=new U,Js=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Zn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Zn.copy(this.origin).addScaledVector(this.direction,e),Zn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ol.copy(t).add(e).multiplyScalar(.5),Br.copy(e).sub(t).normalize(),Or.copy(this.origin).sub(ol);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Br),o=Or.dot(this.direction),l=-Or.dot(Br),c=Or.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ol).addScaledVector(Br,u),f}intersectSphere(t,e){if(t.radius<0)return null;Zn.subVectors(t.center,this.origin);let n=Zn.dot(this.direction),s=Zn.dot(Zn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Zn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,y=e.y-a.y,m=e.z-a.z,p=n.x-a.x,E=n.y-a.y,A=n.z-a.z,v=Math.abs(l),M=Math.abs(c),T=Math.abs(h),R,x,w,C,L,B,z,N,O,q,X,nt;if(v>=M&&v>=T?(w=l,B=d,O=g,nt=p,l>=0?(R=c,x=h,C=u,L=f,z=y,N=m,q=E,X=A):(R=h,x=c,C=f,L=u,z=m,N=y,q=A,X=E)):M>=T?(w=c,B=u,O=y,nt=E,c>=0?(R=h,x=l,C=f,L=d,z=m,N=g,q=A,X=p):(R=l,x=h,C=d,L=f,z=g,N=m,q=p,X=A)):(w=h,B=f,O=m,nt=A,h>=0?(R=l,x=c,C=d,L=u,z=g,N=y,q=p,X=E):(R=c,x=l,C=u,L=d,z=y,N=g,q=E,X=p)),w===0)return null;let J=R/w,tt=x/w,G=1/w,st=C-J*B,lt=L-tt*B,pt=z-J*O,St=N-tt*O,wt=q-J*nt,W=X-tt*nt,$=wt*St-W*pt,gt=st*W-lt*wt,Nt=pt*lt-St*st;if(s){if($<0||gt<0||Nt<0)return null}else if(($<0||gt<0||Nt<0)&&($>0||gt>0||Nt>0))return null;let xt=$+gt+Nt;if(xt===0)return null;let Ft=G*($*B+gt*O+Nt*nt);return(xt>0?Ft<0:Ft>0)?null:this.at(Ft/xt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Be=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Cl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Zc=new ve,Ui=new Js,zr=new Kn,Jc=new U,Hr=new U,kr=new U,Vr=new U,ll=new U,Gr=new U,$c=new U,Wr=new U,Xt=class extends Ye{constructor(t=new fe,e=new Be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Gr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(ll.fromBufferAttribute(d,t),a?Gr.addScaledVector(ll,h):Gr.addScaledVector(ll.sub(e),h))}e.add(Gr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zr.copy(n.boundingSphere),zr.applyMatrix4(r),Ui.copy(t.ray).recast(t.near),!(zr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(zr,Jc)===null||Ui.origin.distanceToSquared(Jc)>(t.far-t.near)**2))&&(Zc.copy(r).invert(),Ui.copy(t.ray).applyMatrix4(Zc),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,M=A;v<M;v+=3){let T=o.getX(v),R=o.getX(v+1),x=o.getX(v+2);s=Xr(this,p,t,n,c,h,d,T,R,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let E=o.getX(m),A=o.getX(m+1),v=o.getX(m+2);s=Xr(this,a,t,n,c,h,d,E,A,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],E=Math.max(m.start,f.start),A=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=E,M=A;v<M;v+=3){let T=v,R=v+1,x=v+2;s=Xr(this,p,t,n,c,h,d,T,R,x),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let E=m,A=m+1,v=m+2;s=Xr(this,a,t,n,c,h,d,E,A,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Wd(i,t,e,n,s,r,a,o){let l;if(t.side===Ze?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===vi,o),l===null)return null;Wr.copy(o),Wr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Wr);return c<e.near||c>e.far?null:{distance:c,point:Wr.clone(),object:i}}function Xr(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Hr),i.getVertexPosition(l,kr),i.getVertexPosition(c,Vr);let h=Wd(i,t,e,n,Hr,kr,Vr,$c);if(h){let d=new U;hi.getBarycoord($c,Hr,kr,Vr,d),s&&(h.uv=hi.getInterpolatedAttribute(s,o,l,c,d,new Ut)),r&&(h.uv1=hi.getInterpolatedAttribute(r,o,l,c,d,new Ut)),a&&(h.normal=hi.getInterpolatedAttribute(a,o,l,c,d,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};hi.getNormal(Hr,kr,Vr,u.normal),h.face=u,h.barycoord=d}return h}var ua=class extends sn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=qe,h=qe,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ni=new Kn,Xd=new Ut(.5,.5),qr=new U,xs=class{constructor(t=new Sn,e=new Sn,n=new Sn,s=new Sn,r=new Sn,a=new Sn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],y=r[9],m=r[10],p=r[11],E=r[12],A=r[13],v=r[14],M=r[15];if(s[0].setComponents(c-a,f-h,p-g,M-E).normalize(),s[1].setComponents(c+a,f+h,p+g,M+E).normalize(),s[2].setComponents(c+o,f+d,p+y,M+A).normalize(),s[3].setComponents(c-o,f-d,p-y,M-A).normalize(),n)s[4].setComponents(l,u,m,v).normalize(),s[5].setComponents(c-l,f-u,p-m,M-v).normalize();else if(s[4].setComponents(c-l,f-u,p-m,M-v).normalize(),e===bn)s[5].setComponents(c+l,f+u,p+m,M+v).normalize();else if(e===ps)s[5].setComponents(l,u,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){Ni.center.set(0,0,0);let e=Xd.distanceTo(t.center);return Ni.radius=.7071067811865476+e,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(qr.x=s.normal.x>0?t.max.x:t.min.x,qr.y=s.normal.y>0?t.max.y:t.min.y,qr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var zn=class extends Qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Kc=new ve,xl=new Js,Yr=new Kn,Zr=new U,pn=class extends Ye{constructor(t=new fe,e=new zn){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(s),Yr.radius+=r,t.ray.intersectsSphere(Yr)===!1)return;Kc.copy(s).invert(),xl.copy(t.ray).applyMatrix4(Kc);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,y=f;g<y;g++){let m=c.getX(g);Zr.fromBufferAttribute(d,m),Qc(Zr,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,y=f;g<y;g++)Zr.fromBufferAttribute(d,g),Qc(Zr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Qc(i,t,e,n,s,r,a){let o=xl.distanceSqToPoint(i);if(o<e){let l=new U;xl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var $s=class extends sn{constructor(t=[],e=Mi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},cn=class extends sn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var fi=class extends sn{constructor(t,e,n=Tn,s,r,a,o=qe,l=qe,c,h=Fn,d=1){if(h!==Fn&&h!==Si)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new gs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},da=class extends fi{constructor(t,e=Tn,n=Mi,s,r,a=qe,o=qe,l,c=Fn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ks=class extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},He=class i extends fe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(d,2));function g(y,m,p,E,A,v,M,T,R,x,w){let C=v/R,L=M/x,B=v/2,z=M/2,N=T/2,O=R+1,q=x+1,X=0,nt=0,J=new U;for(let tt=0;tt<q;tt++){let G=tt*L-z;for(let st=0;st<O;st++){let lt=st*C-B;J[y]=lt*E,J[m]=G*A,J[p]=N,c.push(J.x,J.y,J.z),J[y]=0,J[m]=0,J[p]=T>0?1:-1,h.push(J.x,J.y,J.z),d.push(st/R),d.push(1-tt/x),X+=1}}for(let tt=0;tt<x;tt++)for(let G=0;G<R;G++){let st=u+G+O*tt,lt=u+G+O*(tt+1),pt=u+(G+1)+O*(tt+1),St=u+(G+1)+O*tt;l.push(st,lt,St),l.push(lt,pt,St),nt+=6}o.addGroup(f,nt,w),f+=nt,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Qs=class i extends fe{constructor(t=1,e=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:n,radialSegments:s,heightSegments:r},e=Math.max(0,e),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,g=n*2+r,y=s+1,m=new U,p=new U;for(let E=0;E<=g;E++){let A=0,v=0,M=0,T=0;if(E<=n){let w=E/n,C=w*Math.PI/2;v=-h-t*Math.cos(C),M=t*Math.sin(C),T=-t*Math.cos(C),A=w*d}else if(E<=n+r){let w=(E-n)/r;v=-h+w*e,M=t,T=0,A=d+w*u}else{let w=(E-n-r)/n,C=w*Math.PI/2;v=h+t*Math.sin(C),M=t*Math.cos(C),T=t*Math.sin(C),A=d+u+w*d}let R=Math.max(0,Math.min(1,A/f)),x=0;E===0?x=.5/s:E===g&&(x=-.5/s);for(let w=0;w<=s;w++){let C=w/s,L=C*Math.PI*2,B=Math.sin(L),z=Math.cos(L);p.x=-M*z,p.y=v,p.z=M*B,o.push(p.x,p.y,p.z),m.set(-M*z,T,M*B),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+x,R)}if(E>0){let w=(E-1)*y;for(let C=0;C<s;C++){let L=w+C,B=w+C+1,z=E*y+C,N=E*y+C+1;a.push(L,B,z),a.push(B,N,z)}}}this.setIndex(a),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var Me=class i extends fe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,y=[],m=n/2,p=0;E(),a===!1&&(t>0&&A(!0),e>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(f,2));function E(){let v=new U,M=new U,T=0,R=(e-t)/n;for(let x=0;x<=r;x++){let w=[],C=x/r,L=C*(e-t)+t;for(let B=0;B<=s;B++){let z=B/s,N=z*l+o,O=Math.sin(N),q=Math.cos(N);M.x=L*O,M.y=-C*n+m,M.z=L*q,d.push(M.x,M.y,M.z),v.set(O,R,q).normalize(),u.push(v.x,v.y,v.z),f.push(z,1-C),w.push(g++)}y.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){let C=y[w][x],L=y[w+1][x],B=y[w+1][x+1],z=y[w][x+1];(t>0||w!==0)&&(h.push(C,L,z),T+=3),(e>0||w!==r-1)&&(h.push(L,B,z),T+=3)}c.addGroup(p,T,0),p+=T}function A(v){let M=g,T=new Ut,R=new U,x=0,w=v===!0?t:e,C=v===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),g++;let L=g;for(let B=0;B<=s;B++){let N=B/s*l+o,O=Math.cos(N),q=Math.sin(N);R.x=w*q,R.y=m*C,R.z=w*O,d.push(R.x,R.y,R.z),u.push(0,C,0),T.x=O*.5+.5,T.y=q*.5*C+.5,f.push(T.x,T.y),g++}for(let B=0;B<s;B++){let z=M+B,N=L+B;v===!0?h.push(N,N+1,z):h.push(N+1,N,z),x+=3}c.addGroup(p,x,v===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Oi=class i extends Me{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Bt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new Ut:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,s=[],r=[],a=[],o=new U,l=new ve;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Yt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Yt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},js=class extends mn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new Ut){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},fa=class extends js{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Yl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var jc=new U,th=new U,cl=new Yl,hl=new Yl,ul=new Yl,pi=class extends mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(th.subVectors(s[0],s[1]).add(s[0]),c=th);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(jc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=jc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),cl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,m),hl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,m),ul.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(cl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),hl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ul.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(cl.calc(l),hl.calc(l),ul.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function eh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function qd(i,t){let e=1-i;return e*e*t}function Yd(i,t){return 2*(1-i)*i*t}function Zd(i,t){return i*i*t}function Bs(i,t,e,n){return qd(i,t)+Yd(i,e)+Zd(i,n)}function Jd(i,t){let e=1-i;return e*e*e*t}function $d(i,t){let e=1-i;return 3*e*e*i*t}function Kd(i,t){return 3*(1-i)*i*i*t}function Qd(i,t){return i*i*i*t}function Os(i,t,e,n,s){return Jd(i,t)+$d(i,e)+Kd(i,n)+Qd(i,s)}var pa=class extends mn{constructor(t=new Ut,e=new Ut,n=new Ut,s=new Ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new Ut){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Os(t,s.x,r.x,a.x,o.x),Os(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ma=class extends mn{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Os(t,s.x,r.x,a.x,o.x),Os(t,s.y,r.y,a.y,o.y),Os(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ga=class extends mn{constructor(t=new Ut,e=new Ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Ut){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},_a=class extends mn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xa=class extends mn{constructor(t=new Ut,e=new Ut,n=new Ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Ut){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Bs(t,s.x,r.x,a.x),Bs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},tr=class extends mn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Bs(t,s.x,r.x,a.x),Bs(t,s.y,r.y,a.y),Bs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ya=class extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Ut){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(eh(o,l.x,c.x,h.x,d.x),eh(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new Ut().fromArray(s))}return this}},jd=Object.freeze({__proto__:null,ArcCurve:fa,CatmullRomCurve3:pi,CubicBezierCurve:pa,CubicBezierCurve3:ma,EllipseCurve:js,LineCurve:ga,LineCurve3:_a,QuadraticBezierCurve:xa,QuadraticBezierCurve3:tr,SplineCurve:ya});var Ae=class i extends fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let E=p*u-a;for(let A=0;A<c;A++){let v=A*d-r;g.push(v,-E,0),y.push(0,0,1),m.push(A/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){let A=E+c*p,v=E+c*(p+1),M=E+1+c*(p+1),T=E+1+c*p;f.push(A,v,T),f.push(v,M,T)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(y,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},er=class i extends fe{constructor(t=.5,e=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new U,g=new Ut;for(let y=0;y<=s;y++){for(let m=0;m<=n;m++){let p=r+m/n*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let y=0;y<s;y++){let m=y*(n+1);for(let p=0;p<n;p++){let E=p+m,A=E,v=E+n+1,M=E+n+2,T=E+1;o.push(A,v,T),o.push(v,M,T)}}this.setIndex(o),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(c,3)),this.setAttribute("uv",new jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Hn=class i extends fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new U,u=new U,f=[],g=[],y=[],m=[];for(let p=0;p<=n;p++){let E=[],A=p/n,v=a+A*o,M=t*Math.cos(v),T=Math.sqrt(t*t-M*M),R=0;p===0&&a===0?R=.5/e:p===n&&l===Math.PI&&(R=-.5/e);for(let x=0;x<=e;x++){let w=x/e,C=s+w*r;d.x=-T*Math.cos(C),d.y=M,d.z=T*Math.sin(C),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(w+R,1-A),E.push(c++)}h.push(E)}for(let p=0;p<n;p++)for(let E=0;E<e;E++){let A=h[p][E+1],v=h[p][E],M=h[p+1][E],T=h[p+1][E+1];(p!==0||a>0)&&f.push(A,v,T),(p!==n-1||l<Math.PI)&&f.push(v,M,T)}this.setIndex(f),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(y,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var mi=class i extends fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new U,f=new U,g=new U;for(let y=0;y<=n;y++){let m=a+y/n*o;for(let p=0;p<=s;p++){let E=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(E),f.y=(t+e*Math.cos(m))*Math.sin(E),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(E),u.y=t*Math.sin(E),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(y/n)}}for(let y=1;y<=n;y++)for(let m=1;m<=s;m++){let p=(s+1)*y+m-1,E=(s+1)*(y-1)+m-1,A=(s+1)*(y-1)+m,v=(s+1)*y+m;l.push(p,E,v),l.push(E,A,v)}this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var nr=class i extends fe{constructor(t=new tr(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,l=new U,c=new Ut,h=new U,d=[],u=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new jt(d,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(f,2));function y(){for(let A=0;A<e;A++)m(A);m(r===!1?e:0),E(),p()}function m(A){h=t.getPointAt(A/e,h);let v=a.normals[A],M=a.binormals[A];for(let T=0;T<=s;T++){let R=T/s*Math.PI*2,x=Math.sin(R),w=-Math.cos(R);l.x=w*v.x+x*M.x,l.y=w*v.y+x*M.y,l.z=w*v.z+x*M.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let A=1;A<=e;A++)for(let v=1;v<=s;v++){let M=(s+1)*(A-1)+(v-1),T=(s+1)*A+(v-1),R=(s+1)*A+v,x=(s+1)*(A-1)+v;g.push(M,T,x),g.push(T,R,x)}}function E(){for(let A=0;A<=e;A++)for(let v=0;v<=s;v++)c.x=A/e,c.y=v/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new jd[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function Gi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(nh(s))s.isRenderTargetTexture?(Bt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(nh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function tn(i){let t={};for(let e=0;e<i.length;e++){let n=Gi(i[e]);for(let s in n)t[s]=n[s]}return t}function nh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Zl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Kt.workingColorSpace}var Yh={clone:Gi,merge:tn},ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ke=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ef,this.fragmentShader=nf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Gi(t.uniforms),this.uniformsGroups=tf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Ht().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new U().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new kt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ve().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},va=class extends ke{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},je=class extends Qn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=So,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Ma=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Sa=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ls(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function dl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var gi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ba=class extends gi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ml,endingEnd:ml}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case gl:r=t,o=2*e-n;break;case _l:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gl:a=t,l=2*n-e;break;case _l:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,E=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,A=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let M=0;M!==o;++M)r[M]=p*a[h+M]+E*a[c+M]+A*a[l+M]+v*a[d+M];return r}},Ea=class extends gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Ta=class extends gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},wa=class extends gi{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-e)/(s-e),y=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*y+a[l+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let y=a[c+g],m=a[l+g],p=f*u+g*2,E=d[p],A=d[p+1],v=t*u+g*2,M=h[v],T=h[v+1],R=rf(n,e,E,M,s);r[g]=Zh(R,y,A,T,m)}return r}};function Zh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function sf(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function rf(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Zh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=sf(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var hn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ls(e,this.TimeBufferType),this.values=ls(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ls(t.times,Array),values:ls(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),dl(t.settings)&&(n.settings={inTangents:ls(t.settings.inTangents,Array),outTangents:ls(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ea(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new wa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case zs:e=this.InterpolantFactoryMethodDiscrete;break;case oa:e=this.InterpolantFactoryMethodLinear;break;case Kr:e=this.InterpolantFactoryMethodSmooth;break;case pl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Bt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zs;case this.InterpolantFactoryMethodLinear:return oa;case this.InterpolantFactoryMethodSmooth:return Kr;case this.InterpolantFactoryMethodBezier:return pl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;dl(this.settings)&&(ih(this.settings.inTangents,t),ih(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Ot("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ot("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ot("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){Ot("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&ud(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ot("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Kr,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let y=e[d+g];if(y!==e[u+g]||y!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,dl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ih(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=oa;var _i=class extends hn{constructor(t,e,n){super(t,e,n)}};_i.prototype.ValueTypeName="bool";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=zs;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};Aa.prototype.ValueTypeName="color";var Ra=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};Ra.prototype.ValueTypeName="number";var Ca=class extends gi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)On.slerpFlat(r,0,a,c-o,a,c,l);return r}},ir=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Ca(this.times,this.values,this.getValueSize(),t)}};ir.prototype.ValueTypeName="quaternion";ir.prototype.InterpolantFactoryMethodSmooth=void 0;var xi=class extends hn{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="string";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=zs;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends hn{constructor(t,e,n,s){super(t,e,n,s)}};Pa.prototype.ValueTypeName="vector";var Ia=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Jh=new Ia,La=class{constructor(t){this.manager=t!==void 0?t:Jh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};La.DEFAULT_MATERIAL_NAME="__DEFAULT";var zi=class extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var fl=new ve,sh=new U,rh=new U,ys=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xs,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(sh),rh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(rh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(fl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ps||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Jr=new U,$r=new On,Un=new U,sr=class extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Jr,$r,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jr,$r,Un.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Jr,$r,Un),Un.x===1&&Un.y===1&&Un.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jr,$r,Un.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ci=new U,ah=new Ut,oh=new Ut,Xe=class extends sr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Bi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bi*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,ah,oh),e.subVectors(oh,ah)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ns*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},yl=class extends ys{constructor(){super(new Xe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=Bi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},rr=class extends zi{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new yl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},vl=class extends ys{constructor(){super(new Xe(90,1,.5,500)),this.isPointLightShadow=!0}},yi=class extends zi{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},vs=class extends sr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ml=class extends ys{constructor(){super(new vs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ar=class extends zi{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Ml}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},or=class extends zi{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var cs=-90,hs=1,Da=class extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xe(cs,hs,t,e);s.layers=this.layers,this.add(s);let r=new Xe(cs,hs,t,e);r.layers=this.layers,this.add(r);let a=new Xe(cs,hs,t,e);a.layers=this.layers,this.add(a);let o=new Xe(cs,hs,t,e);o.layers=this.layers,this.add(o);let l=new Xe(cs,hs,t,e);l.layers=this.layers,this.add(l);let c=new Xe(cs,hs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ps)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ua=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Jl="\\[\\]\\.:\\/",af=new RegExp("["+Jl+"]","g"),$l="[^"+Jl+"]",of="[^"+Jl.replace("\\.","")+"]",lf=/((?:WC+[\/:])*)/.source.replace("WC",$l),cf=/(WCOD+)?/.source.replace("WCOD",of),hf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$l),uf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$l),df=new RegExp("^"+lf+cf+hf+uf+"$"),ff=["material","materials","bones","map"],Sl=class{constructor(t,e,n){let s=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(af,"")}static parseTrackName(t){let e=df.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);ff.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Bt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Ot("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Ot("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Ot("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Ot("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Ot("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Ot("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;Ot("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Ot("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=Sl;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ex=new Float32Array(1);var nc=class nc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};nc.prototype.isMatrix2=!0;var bl=nc;function Kl(i,t,e,n){let s=pf(n);switch(e){case kl:return i*t;case Gl:return i*t/s.components*s.byteLength;case Va:return i*t/s.components*s.byteLength;case bi:return i*t*2/s.components*s.byteLength;case Ga:return i*t*2/s.components*s.byteLength;case Vl:return i*t*3/s.components*s.byteLength;case _n:return i*t*4/s.components*s.byteLength;case Wa:return i*t*4/s.components*s.byteLength;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:case Za:return Math.max(i,16)*Math.max(t,8)/4;case Xa:case Ya:return Math.max(i,8)*Math.max(t,8)/2;case Ja:case $a:case Qa:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ka:case gr:case to:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case no:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case io:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case so:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ro:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ao:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case oo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case lo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case co:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ho:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case uo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case po:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case mo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case go:case _o:case xo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case yo:case vo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _r:case Mo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function pf(i){switch(i){case an:case Bl:return{byteLength:1,components:1};case Ss:case Ol:case An:return{byteLength:2,components:1};case Ha:case ka:return{byteLength:2,components:4};case Tn:case za:case wn:return{byteLength:4,components:1};case zl:case Hl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window!="undefined"&&(window.__THREE__?Bt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function _u(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array!="undefined"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var _f=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xf=`#ifdef USE_ALPHAHASH
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
#endif`,yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bf=`#ifdef USE_AOMAP
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
#endif`,Ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tf=`#ifdef USE_BATCHING
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
#endif`,wf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Af=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pf=`#ifdef USE_IRIDESCENCE
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
#endif`,If=`#ifdef USE_BUMPMAP
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Of=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Hf=`#define PI 3.141592653589793
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
} // validated`,kf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vf=`vec3 transformedNormal = objectNormal;
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
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ep=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ip=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sp=`#ifdef USE_GRADIENTMAP
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
}`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ap=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cp=`#ifdef USE_ENVMAP
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
#endif`,hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pp=`PhysicalMaterial material;
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
#endif`,mp=`uniform sampler2D dfgLUT;
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
}`,gp=`
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
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
#endif`,xp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ap=`#if defined( USE_POINTS_UV )
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
#endif`,Rp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ip=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`#ifdef USE_MORPHTARGETS
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
#endif`,Up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Fp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
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
#endif`,kp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nm=`float getShadowMask() {
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
}`,im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,um=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xm=`uniform sampler2D t2D;
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`#include <common>
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
}`,Em=`#if DEPTH_PACKING == 3200
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
}`,Tm=`#define DISTANCE
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
}`,wm=`#define DISTANCE
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
}`,Am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cm=`uniform float scale;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Im=`#include <common>
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
}`,Lm=`uniform vec3 diffuse;
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
}`,Dm=`#define LAMBERT
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
}`,Um=`#define LAMBERT
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
}`,Nm=`#define MATCAP
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
}`,Fm=`#define MATCAP
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
}`,Bm=`#define NORMAL
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
}`,Om=`#define NORMAL
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
}`,zm=`#define PHONG
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
}`,Hm=`#define PHONG
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
}`,km=`#define STANDARD
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
}`,Vm=`#define STANDARD
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
}`,Gm=`#define TOON
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
}`,Wm=`#define TOON
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
}`,Xm=`uniform float size;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,Zm=`uniform vec3 color;
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
}`,Jm=`uniform float rotation;
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
}`,$m=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:_f,alphahash_pars_fragment:xf,alphamap_fragment:yf,alphamap_pars_fragment:vf,alphatest_fragment:Mf,alphatest_pars_fragment:Sf,aomap_fragment:bf,aomap_pars_fragment:Ef,batching_pars_vertex:Tf,batching_vertex:wf,begin_vertex:Af,beginnormal_vertex:Rf,bsdfs:Cf,iridescence_fragment:Pf,bumpmap_pars_fragment:If,clipping_planes_fragment:Lf,clipping_planes_pars_fragment:Df,clipping_planes_pars_vertex:Uf,clipping_planes_vertex:Nf,color_fragment:Ff,color_pars_fragment:Bf,color_pars_vertex:Of,color_vertex:zf,common:Hf,cube_uv_reflection_fragment:kf,defaultnormal_vertex:Vf,displacementmap_pars_vertex:Gf,displacementmap_vertex:Wf,emissivemap_fragment:Xf,emissivemap_pars_fragment:qf,colorspace_fragment:Yf,colorspace_pars_fragment:Zf,envmap_fragment:Jf,envmap_common_pars_fragment:$f,envmap_pars_fragment:Kf,envmap_pars_vertex:Qf,envmap_physical_pars_fragment:cp,envmap_vertex:jf,fog_vertex:tp,fog_pars_vertex:ep,fog_fragment:np,fog_pars_fragment:ip,gradientmap_pars_fragment:sp,lightmap_pars_fragment:rp,lights_lambert_fragment:ap,lights_lambert_pars_fragment:op,lights_pars_begin:lp,lights_toon_fragment:hp,lights_toon_pars_fragment:up,lights_phong_fragment:dp,lights_phong_pars_fragment:fp,lights_physical_fragment:pp,lights_physical_pars_fragment:mp,lights_fragment_begin:gp,lights_fragment_maps:_p,lights_fragment_end:xp,lightprobes_pars_fragment:yp,logdepthbuf_fragment:vp,logdepthbuf_pars_fragment:Mp,logdepthbuf_pars_vertex:Sp,logdepthbuf_vertex:bp,map_fragment:Ep,map_pars_fragment:Tp,map_particle_fragment:wp,map_particle_pars_fragment:Ap,metalnessmap_fragment:Rp,metalnessmap_pars_fragment:Cp,morphinstance_vertex:Pp,morphcolor_vertex:Ip,morphnormal_vertex:Lp,morphtarget_pars_vertex:Dp,morphtarget_vertex:Up,normal_fragment_begin:Np,normal_fragment_maps:Fp,normal_pars_fragment:Bp,normal_pars_vertex:Op,normal_vertex:zp,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:kp,clearcoat_normal_fragment_maps:Vp,clearcoat_pars_fragment:Gp,iridescence_pars_fragment:Wp,opaque_fragment:Xp,packing:qp,premultiplied_alpha_fragment:Yp,project_vertex:Zp,dithering_fragment:Jp,dithering_pars_fragment:$p,roughnessmap_fragment:Kp,roughnessmap_pars_fragment:Qp,shadowmap_pars_fragment:jp,shadowmap_pars_vertex:tm,shadowmap_vertex:em,shadowmask_pars_fragment:nm,skinbase_vertex:im,skinning_pars_vertex:sm,skinning_vertex:rm,skinnormal_vertex:am,specularmap_fragment:om,specularmap_pars_fragment:lm,tonemapping_fragment:cm,tonemapping_pars_fragment:hm,transmission_fragment:um,transmission_pars_fragment:dm,uv_pars_fragment:fm,uv_pars_vertex:pm,uv_vertex:mm,worldpos_vertex:gm,background_vert:_m,background_frag:xm,backgroundCube_vert:ym,backgroundCube_frag:vm,cube_vert:Mm,cube_frag:Sm,depth_vert:bm,depth_frag:Em,distance_vert:Tm,distance_frag:wm,equirect_vert:Am,equirect_frag:Rm,linedashed_vert:Cm,linedashed_frag:Pm,meshbasic_vert:Im,meshbasic_frag:Lm,meshlambert_vert:Dm,meshlambert_frag:Um,meshmatcap_vert:Nm,meshmatcap_frag:Fm,meshnormal_vert:Bm,meshnormal_frag:Om,meshphong_vert:zm,meshphong_frag:Hm,meshphysical_vert:km,meshphysical_frag:Vm,meshtoon_vert:Gm,meshtoon_frag:Wm,points_vert:Xm,points_frag:qm,shadow_vert:Ym,shadow_frag:Zm,sprite_vert:Jm,sprite_frag:$m},yt={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Gn={basic:{uniforms:tn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:tn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ht(0)},envMapIntensity:{value:1}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:tn([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:tn([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:tn([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Ht(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:tn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:tn([yt.points,yt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:tn([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:tn([yt.common,yt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:tn([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:tn([yt.sprite,yt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distance:{uniforms:tn([yt.common,yt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distance_vert,fragmentShader:qt.distance_frag},shadow:{uniforms:tn([yt.lights,yt.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};Gn.physical={uniforms:tn([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var To={r:0,b:0,g:0},Km=new ve,xu=new kt;xu.set(-1,0,0,0,1,0,0,0,1);function Qm(i,t,e,n,s,r){let a=new Ht(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(E){let A=E.isScene===!0?E.background:null;if(A&&A.isTexture){let v=E.backgroundBlurriness>0;A=t.get(A,v)}return A}function g(E){let A=!1,v=f(E);v===null?m(a,o):v&&v.isColor&&(m(v,1),A=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(E,A){let v=f(A);v&&(v.isCubeTexture||v.mapping===hr)?(c===void 0&&(c=new Xt(new He(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:Gi(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Km.makeRotationFromEuler(A.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(xu),c.material.toneMapped=Kt.getTransfer(v.colorSpace)!==ce,(h!==v||d!==v.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Xt(new Ae(2,2),new ke({name:"BackgroundMaterial",uniforms:Gi(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=Kt.getTransfer(v.colorSpace)!==ce,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||d!==v.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=v,d=v.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function m(E,A){E.getRGB(To,Zl(i)),e.buffers.color.setClear(To.r,To.g,To.b,A,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,A=1){a.set(E),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,m(a,o)},render:g,addToRenderList:y,dispose:p}}function jm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(L,B,z,N,O){let q=!1,X=d(L,N,z,B);r!==X&&(r=X,c(r.object)),q=f(L,N,z,O),q&&g(L,N,z,O),O!==null&&t.update(O,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,v(L,B,z,N),O!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function h(L){return i.deleteVertexArray(L)}function d(L,B,z,N){let O=N.wireframe===!0,q=n[B.id];q===void 0&&(q={},n[B.id]=q);let X=L.isInstancedMesh===!0?L.id:0,nt=q[X];nt===void 0&&(nt={},q[X]=nt);let J=nt[z.id];J===void 0&&(J={},nt[z.id]=J);let tt=J[O];return tt===void 0&&(tt=u(l()),J[O]=tt),tt}function u(L){let B=[],z=[],N=[];for(let O=0;O<e;O++)B[O]=0,z[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:z,attributeDivisors:N,object:L,attributes:{},index:null}}function f(L,B,z,N){let O=r.attributes,q=B.attributes,X=0,nt=z.getAttributes();for(let J in nt)if(nt[J].location>=0){let G=O[J],st=q[J];if(st===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(st=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(st=L.instanceColor)),G===void 0||G.attribute!==st||st&&G.data!==st.data)return!0;X++}return r.attributesNum!==X||r.index!==N}function g(L,B,z,N){let O={},q=B.attributes,X=0,nt=z.getAttributes();for(let J in nt)if(nt[J].location>=0){let G=q[J];G===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(G=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(G=L.instanceColor));let st={};st.attribute=G,G&&G.data&&(st.data=G.data),O[J]=st,X++}r.attributes=O,r.attributesNum=X,r.index=N}function y(){let L=r.newAttributes;for(let B=0,z=L.length;B<z;B++)L[B]=0}function m(L){p(L,0)}function p(L,B){let z=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;z[L]=1,N[L]===0&&(i.enableVertexAttribArray(L),N[L]=1),O[L]!==B&&(i.vertexAttribDivisor(L,B),O[L]=B)}function E(){let L=r.newAttributes,B=r.enabledAttributes;for(let z=0,N=B.length;z<N;z++)B[z]!==L[z]&&(i.disableVertexAttribArray(z),B[z]=0)}function A(L,B,z,N,O,q,X){X===!0?i.vertexAttribIPointer(L,B,z,O,q):i.vertexAttribPointer(L,B,z,N,O,q)}function v(L,B,z,N){y();let O=N.attributes,q=z.getAttributes(),X=B.defaultAttributeValues;for(let nt in q){let J=q[nt];if(J.location>=0){let tt=O[nt];if(tt===void 0&&(nt==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),nt==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor)),tt!==void 0){let G=tt.normalized,st=tt.itemSize,lt=t.get(tt);if(lt===void 0)continue;let pt=lt.buffer,St=lt.type,wt=lt.bytesPerElement,W=St===i.INT||St===i.UNSIGNED_INT||tt.gpuType===za;if(tt.isInterleavedBufferAttribute){let $=tt.data,gt=$.stride,Nt=tt.offset;if($.isInstancedInterleavedBuffer){for(let xt=0;xt<J.locationSize;xt++)p(J.location+xt,$.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let xt=0;xt<J.locationSize;xt++)m(J.location+xt);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let xt=0;xt<J.locationSize;xt++)A(J.location+xt,st/J.locationSize,St,G,gt*wt,(Nt+st/J.locationSize*xt)*wt,W)}else{if(tt.isInstancedBufferAttribute){for(let $=0;$<J.locationSize;$++)p(J.location+$,tt.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let $=0;$<J.locationSize;$++)m(J.location+$);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let $=0;$<J.locationSize;$++)A(J.location+$,st/J.locationSize,St,G,st*wt,st/J.locationSize*$*wt,W)}}else if(X!==void 0){let G=X[nt];if(G!==void 0)switch(G.length){case 2:i.vertexAttrib2fv(J.location,G);break;case 3:i.vertexAttrib3fv(J.location,G);break;case 4:i.vertexAttrib4fv(J.location,G);break;default:i.vertexAttrib1fv(J.location,G)}}}}E()}function M(){w();for(let L in n){let B=n[L];for(let z in B){let N=B[z];for(let O in N){let q=N[O];for(let X in q)h(q[X].object),delete q[X];delete N[O]}}delete n[L]}}function T(L){if(n[L.id]===void 0)return;let B=n[L.id];for(let z in B){let N=B[z];for(let O in N){let q=N[O];for(let X in q)h(q[X].object),delete q[X];delete N[O]}}delete n[L.id]}function R(L){for(let B in n){let z=n[B];for(let N in z){let O=z[N];if(O[L.id]===void 0)continue;let q=O[L.id];for(let X in q)h(q[X].object),delete q[X];delete O[L.id]}}}function x(L){for(let B in n){let z=n[B],N=L.isInstancedMesh===!0?L.id:0,O=z[N];if(O!==void 0){for(let q in O){let X=O[q];for(let nt in X)h(X[nt].object),delete X[nt];delete O[q]}delete z[N],Object.keys(z).length===0&&delete n[B]}}}function w(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:w,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:m,disableUnusedAttributes:E}}function t0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function e0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==_n&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){let x=R===An&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==an&&R!==wn&&!x&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Bt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&Bt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:A,maxFragmentUniforms:v,maxSamples:M,samples:T}}function n0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Sn,o=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let E=r?0:n,A=E*4,v=p.clippingState||null;l.value=v,v=h(g,u,A,f);for(let M=0;M!==A;++M)v[M]=e[M];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,E=u.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,v=f;A!==y;++A,v+=4)a.copy(d[A]).applyMatrix4(E,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}var ws=4,i0=6,s0=20,r0=256,xr=new vs,$h=new Ht,ic=null,sc=0,rc=0,ac=!1,a0=new U,Wi=new U,Ao=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=a0}=r;ic=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ic,sc,rc),this._renderer.xr.enabled=ac,t.scissorTest=!1,Ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Mi||t.mapping===ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ic=this._renderer.getRenderTarget(),sc=this._renderer.getActiveCubeFace(),rc=this._renderer.getActiveMipmapLevel(),ac=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ze,minFilter:ze,generateMipmaps:!1,type:An,format:_n,colorSpace:Hs,depthBuffer:!1},s=Kh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=o0(r)),this._blurMaterial=c0(r,t,e),this._ggxMaterial=l0(r,t,e)}return s}_compileMaterial(t){let e=new Xt(new fe,t);this._renderer.compile(e,xr)}_sceneToCubeUV(t,e,n,s,r){let l=new Xe(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor($h),d.toneMapping=En,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xt(new He,new Be({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,p=!1,E=t.background;E?E.isColor&&(m.color.copy(E),t.background=null,p=!0):(m.color.copy($h),p=!0);for(let A=0;A<6;A++){let v=A%3;v===0?(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[A],r.y,r.z)):v===1?(l.up.set(0,0,c[A]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[A],r.z)):(l.up.set(0,c[A],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[A]));let M=this._cubeSize;Ts(s,v*M,A>2?M:0,M,M),d.setRenderTarget(s),p&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=E}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Mi||t.mapping===ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ts(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,xr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,y=this._sizeLods[n],m=3*y*(n>g-ws?n-g+ws:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Ts(r,m,p,3*y,2*y),s.setRenderTarget(r),s.render(o,xr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ts(t,m,p,3*y,2*y),s.setRenderTarget(t),s.render(o,xr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-ws?s-this._lodMax+ws:0),u=4*(this._cubeSize-h);Ts(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,xr)}};function o0(i){let t=[],e=[],n=i,s=i-ws+1+i0;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let p=0;p<d;p++){let E=p%3*2/3-1,A=p>2?0:-1,v=[E,A,0,E+2/3,A,0,E+2/3,A+1,0,E,A,0,E+2/3,A+1,0,E,A+1,0];g.set(v,f*u*p);for(let M=0;M<u;M++){let T=h[M*2]*2-1,R=h[M*2+1]*2-1;p===0?Wi.set(1,R,T):p===1?Wi.set(-T,1,-R):p===2?Wi.set(-T,R,1):p===3?Wi.set(-1,R,-T):p===4?Wi.set(-T,-1,R):Wi.set(T,R,-1),Wi.toArray(y,(p*u+M)*f)}}let m=new fe;m.setAttribute("position",new be(g,f)),m.setAttribute("outputDirection",new be(y,f)),e.push(new Xt(m,null)),n>ws&&n--}return{lodMeshes:e,sizeLods:t}}function Kh(i,t,e){let n=new rn(i,t,e);return n.texture.mapping=hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function l0(i,t,e){return new ke({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:r0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Po(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function c0(i,t,e){return new ke({name:"SphericalGaussianBlur",defines:{SAMPLES:s0,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Po(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Qh(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Po(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function jh(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Po(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Po(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ro=class extends rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new $s(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new He(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:Gi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:kn});r.uniforms.tEquirect.value=e;let a=new Xt(s,r),o=e.minFilter;return e.minFilter===gn&&(e.minFilter=ze),new Da(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function h0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Fa||f===Ba)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let y=new Ro(g.height);return y.fromEquirectangularTexture(i,u),t.set(u,y),u.addEventListener("dispose",c),o(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Fa||f===Ba,y=f===Mi||f===ki;if(g||y){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return n===null&&(n=new Ao(i)),m=g?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let E=u.image;return g&&E&&E.height>0||y&&E&&l(E)?(n===null&&(n=new Ao(i)),m=g?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Fa?u.mapping=Mi:f===Ba&&(u.mapping=ki),u}function l(u){let f=0,g=6;for(let y=0;y<g;y++)u[y]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function u0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Fi("WebGLRenderer: "+n+" extension not supported."),s}}}function d0(i,t,e,n){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],i.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(g===void 0)return;if(f!==null){let E=f.array;y=f.version;for(let A=0,v=E.length;A<v;A+=3){let M=E[A+0],T=E[A+1],R=E[A+2];u.push(M,T,T,R,R,M)}}else{let E=g.array;y=g.version;for(let A=0,v=E.length/3-1;A<v;A+=3){let M=A+0,T=A+1,R=A+2;u.push(M,T,T,R,R,M)}}let m=new(g.count>=65535?Zs:Ys)(u,1);m.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function f0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];e.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function p0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Ot("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function m0(i,t,e){let n=new WeakMap,s=new Ee;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let w=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),y===!0&&(A=3);let v=o.attributes.position.count*A,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*M*4*d),R=new Gs(T,v,M,d);R.type=wn,R.needsUpdate=!0;let x=A*4;for(let C=0;C<d;C++){let L=m[C],B=p[C],z=E[C],N=v*M*4*C;for(let O=0;O<L.count;O++){let q=O*x;f===!0&&(s.fromBufferAttribute(L,O),T[N+q+0]=s.x,T[N+q+1]=s.y,T[N+q+2]=s.z,T[N+q+3]=0),g===!0&&(s.fromBufferAttribute(B,O),T[N+q+4]=s.x,T[N+q+5]=s.y,T[N+q+6]=s.z,T[N+q+7]=0),y===!0&&(s.fromBufferAttribute(z,O),T[N+q+8]=s.x,T[N+q+9]=s.y,T[N+q+10]=s.z,T[N+q+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new Ut(v,M)},n.set(o,u),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function g0(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var _0={[Pl]:"LINEAR_TONE_MAPPING",[Il]:"REINHARD_TONE_MAPPING",[Ll]:"CINEON_TONE_MAPPING",[cr]:"ACES_FILMIC_TONE_MAPPING",[Ul]:"AGX_TONE_MAPPING",[Nl]:"NEUTRAL_TONE_MAPPING",[Dl]:"CUSTOM_TONE_MAPPING"};function x0(i,t,e,n,s,r){let a=new rn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new fe;c.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new jt([0,2,0,0,2,0],2));let h=new va({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Xt(c,h),u=new vs(-1,1,1,-1,0,1),f=null,g=null,y=!1,m,p=null,E=[],A=!1;this.setSize=function(v,M){a.setSize(v,M),o!==null&&o.setSize(v,M),l!==null&&l.setSize(v,M);for(let T=0;T<E.length;T++){let R=E[T];R.setSize&&R.setSize(v,M)}},this.setEffects=function(v){E=v,A=E.length>0&&E[0].isRenderPass===!0;let M=a.width,T=a.height;E.length>0&&o===null&&(o=new rn(M,T,{type:An,depthBuffer:!1,stencilBuffer:!1}),l=new rn(M,T,{type:An,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<E.length;R++){let x=E[R];x.setSize&&x.setSize(M,T)}},this.begin=function(v,M){if(y||v.toneMapping===En&&E.length===0)return!1;if(p=M,M!==null){let T=M.width,R=M.height;(a.width!==T||a.height!==R)&&this.setSize(T,R)}return A===!1&&v.setRenderTarget(a),m=v.toneMapping,v.toneMapping=En,!0},this.hasRenderPass=function(){return A},this.end=function(v,M){v.toneMapping=m,y=!0;let T=a,R=o;for(let x=0;x<E.length;x++){let w=E[x];w.enabled!==!1&&(w.render(v,R,T,M),w.needsSwap!==!1&&(T=R,R=R===o?l:o))}if(f!==v.outputColorSpace||g!==v.toneMapping){f=v.outputColorSpace,g=v.toneMapping,h.defines={},Kt.getTransfer(f)===ce&&(h.defines.SRGB_TRANSFER="");let x=_0[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,v.setRenderTarget(p),v.render(d,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var yu=new sn,cc=new fi(1,1),vu=new Gs,Mu=new ha,Su=new $s,tu=[],eu=[],nu=new Float32Array(16),iu=new Float32Array(9),su=new Float32Array(4);function Rs(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=tu[s];if(r===void 0&&(r=new Float32Array(s),tu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ve(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Io(i,t){let e=eu[t];e===void 0&&(e=new Int32Array(t),eu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function y0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function v0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function M0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function S0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function b0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;su.set(n),i.uniformMatrix2fv(this.addr,!1,su),Ge(e,n)}}function E0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;iu.set(n),i.uniformMatrix3fv(this.addr,!1,iu),Ge(e,n)}}function T0(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(Ve(e,n))return;nu.set(n),i.uniformMatrix4fv(this.addr,!1,nu),Ge(e,n)}}function w0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function A0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function R0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function C0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function P0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function I0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function L0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function D0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function U0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cc.compareFunction=e.isReversedDepthBuffer()?Eo:bo,r=cc):r=yu,e.setTexture2D(t||r,s)}function N0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Mu,s)}function F0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Su,s)}function B0(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vu,s)}function O0(i){switch(i){case 5126:return y0;case 35664:return v0;case 35665:return M0;case 35666:return S0;case 35674:return b0;case 35675:return E0;case 35676:return T0;case 5124:case 35670:return w0;case 35667:case 35671:return A0;case 35668:case 35672:return R0;case 35669:case 35673:return C0;case 5125:return P0;case 36294:return I0;case 36295:return L0;case 36296:return D0;case 35678:case 36198:case 36298:case 36306:case 35682:return U0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return F0;case 36289:case 36303:case 36311:case 36292:return B0}}function z0(i,t){i.uniform1fv(this.addr,t)}function H0(i,t){let e=Rs(t,this.size,2);i.uniform2fv(this.addr,e)}function k0(i,t){let e=Rs(t,this.size,3);i.uniform3fv(this.addr,e)}function V0(i,t){let e=Rs(t,this.size,4);i.uniform4fv(this.addr,e)}function G0(i,t){let e=Rs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function W0(i,t){let e=Rs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function X0(i,t){let e=Rs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function q0(i,t){i.uniform1iv(this.addr,t)}function Y0(i,t){i.uniform2iv(this.addr,t)}function Z0(i,t){i.uniform3iv(this.addr,t)}function J0(i,t){i.uniform4iv(this.addr,t)}function $0(i,t){i.uniform1uiv(this.addr,t)}function K0(i,t){i.uniform2uiv(this.addr,t)}function Q0(i,t){i.uniform3uiv(this.addr,t)}function j0(i,t){i.uniform4uiv(this.addr,t)}function tg(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=cc:a=yu;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function eg(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Mu,r[a])}function ng(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Su,r[a])}function ig(i,t,e){let n=this.cache,s=t.length,r=Io(e,s);Ve(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||vu,r[a])}function sg(i){switch(i){case 5126:return z0;case 35664:return H0;case 35665:return k0;case 35666:return V0;case 35674:return G0;case 35675:return W0;case 35676:return X0;case 5124:case 35670:return q0;case 35667:case 35671:return Y0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return $0;case 36294:return K0;case 36295:return Q0;case 36296:return j0;case 35678:case 36198:case 36298:case 36306:case 35682:return tg;case 35679:case 36299:case 36307:return eg;case 35680:case 36300:case 36308:case 36293:return ng;case 36289:case 36303:case 36311:case 36292:return ig}}var hc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=O0(e.type)}},uc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sg(e.type)}},dc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},oc=/(\w+)(\])?(\[|\.)?/g;function ru(i,t){i.seq.push(t),i.map[t.id]=t}function rg(i,t,e){let n=i.name,s=n.length;for(oc.lastIndex=0;;){let r=oc.exec(n),a=oc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ru(e,c===void 0?new hc(o,i,t):new uc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new dc(o),ru(e,d)),e=d}}}var As=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);rg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function au(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var ag=37297,og=0;function lg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var ou=new kt;function cg(i){Kt._getMatrix(ou,Kt.workingColorSpace,i);let t=`mat3( ${ou.elements.map(e=>e.toFixed(4))} )`;switch(Kt.getTransfer(i)){case ks:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return Bt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function lu(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+lg(i.getShaderSource(t),o)}else return r}function hg(i,t){let e=cg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var ug={[Pl]:"Linear",[Il]:"Reinhard",[Ll]:"Cineon",[cr]:"ACESFilmic",[Ul]:"AgX",[Nl]:"Neutral",[Dl]:"Custom"};function dg(i,t){let e=ug[t];return e===void 0?(Bt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wo=new U;function fg(){Kt.getLuminanceCoefficients(wo);let i=wo.x.toFixed(4),t=wo.y.toFixed(4),e=wo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function pg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function mg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function gg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function vr(i){return i!==""}function cu(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hu(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _g=/^[ \t]*#include +<([\w\d./]+)>/gm;function fc(i){return i.replace(_g,yg)}var xg=new Map;function yg(i,t){let e=qt[t];if(e===void 0){let n=xg.get(t);if(n!==void 0)e=qt[n],Bt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return fc(e)}var vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uu(i){return i.replace(vg,Mg)}function Mg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function du(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Sg={[lr]:"SHADOWMAP_TYPE_PCF",[Ms]:"SHADOWMAP_TYPE_VSM"};function bg(i){return Sg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Eg={[Mi]:"ENVMAP_TYPE_CUBE",[ki]:"ENVMAP_TYPE_CUBE",[hr]:"ENVMAP_TYPE_CUBE_UV"};function Tg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Eg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var wg={[ki]:"ENVMAP_MODE_REFRACTION"};function Ag(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":wg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Rg={[Cl]:"ENVMAP_BLENDING_MULTIPLY",[Ch]:"ENVMAP_BLENDING_MIX",[Ph]:"ENVMAP_BLENDING_ADD"};function Cg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Rg[i.combine]||"ENVMAP_BLENDING_NONE"}function Pg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Ig(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=bg(e),c=Tg(e),h=Ag(e),d=Cg(e),u=Pg(e),f=pg(e),g=mg(r),y=s.createProgram(),m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(vr).join(`
`),p.length>0&&(p+=`
`)):(m=[du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),p=[du(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?qt.tonemapping_pars_fragment:"",e.toneMapping!==En?dg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,hg("linearToOutputTexel",e.outputColorSpace),fg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vr).join(`
`)),a=fc(a),a=cu(a,e),a=hu(a,e),o=fc(o),o=cu(o,e),o=hu(o,e),a=uu(a),o=uu(o),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Wl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Wl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let A=E+m+a,v=E+p+o,M=au(s,s.VERTEX_SHADER,A),T=au(s,s.FRAGMENT_SHADER,v);s.attachShader(y,M),s.attachShader(y,T),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function R(L){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(y)||"",z=s.getShaderInfoLog(M)||"",N=s.getShaderInfoLog(T)||"",O=B.trim(),q=z.trim(),X=N.trim(),nt=!0,J=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(nt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,M,T);else{let tt=lu(s,M,"vertex"),G=lu(s,T,"fragment");Ot("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+O+`
`+tt+`
`+G)}else O!==""?Bt("WebGLProgram: Program Info Log:",O):(q===""||X==="")&&(J=!1);J&&(L.diagnostics={runnable:nt,programLog:O,vertexShader:{log:q,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(M),s.deleteShader(T),x=new As(s,y),w=gg(s,y)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(y,ag)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=og++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=M,this.fragmentShader=T,this}var Lg=0,pc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new mc(t),e.set(t,n)),n}},mc=class{constructor(t){this.id=Lg++,this.code=t,this.usedTimes=0}};function Dg(i){return i===bi||i===gr||i===_r}function Ug(i,t,e,n,s,r){let a=new Ws,o=new pc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,w,C,L,B,z){let N=L.fog,O=B.geometry,q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,nt=t.get(x.envMap||q,X),J=nt&&nt.mapping===hr?nt.image.height:null,tt=f[x.type];x.precision!==null&&(u=n.getMaxPrecision(x.precision),u!==x.precision&&Bt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let G=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,st=G!==void 0?G.length:0,lt=0;O.morphAttributes.position!==void 0&&(lt=1),O.morphAttributes.normal!==void 0&&(lt=2),O.morphAttributes.color!==void 0&&(lt=3);let pt,St,wt,W;if(tt){let me=Gn[tt];pt=me.vertexShader,St=me.fragmentShader}else{pt=x.vertexShader,St=x.fragmentShader;let me=o.getVertexShaderStage(x),oe=o.getFragmentShaderStage(x);o.update(x,me,oe),wt=me.id,W=oe.id}let $=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),Nt=B.isInstancedMesh===!0,xt=B.isBatchedMesh===!0,Ft=!!x.map,he=!!x.matcap,It=!!nt,Zt=!!x.aoMap,ie=!!x.lightMap,Vt=!!x.bumpMap&&x.wireframe===!1,ae=!!x.normalMap,ct=!!x.displacementMap,se=!!x.emissiveMap,ue=!!x.metalnessMap,ee=!!x.roughnessMap,P=x.anisotropy>0,we=x.clearcoat>0,$t=x.dispersion>0,b=x.retroreflectivity>0,_=x.iridescence>0,I=x.sheen>0,H=x.transmission>0,Z=P&&!!x.anisotropyMap,ot=we&&!!x.clearcoatMap,ut=we&&!!x.clearcoatNormalMap,K=we&&!!x.clearcoatRoughnessMap,j=_&&!!x.iridescenceMap,et=_&&!!x.iridescenceThicknessMap,dt=I&&!!x.sheenColorMap,rt=I&&!!x.sheenRoughnessMap,at=!!x.specularMap,bt=!!x.specularColorMap,At=!!x.specularIntensityMap,zt=H&&!!x.transmissionMap,D=H&&!!x.thicknessMap,ht=!!x.gradientMap,Q=!!x.alphaMap,ft=x.alphaTest>0,_t=!!x.alphaHash,it=!!x.extensions,Lt=En;x.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Lt=i.toneMapping);let Pt={shaderID:tt,shaderType:x.type,shaderName:x.name,vertexShader:pt,fragmentShader:St,defines:x.defines,customVertexShaderID:wt,customFragmentShaderID:W,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:xt,batchingColor:xt&&B._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&B.instanceColor!==null,instancingMorph:Nt&&B.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Kt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ft,matcap:he,envMap:It,envMapMode:It&&nt.mapping,envMapCubeUVHeight:J,aoMap:Zt,lightMap:ie,bumpMap:Vt,normalMap:ae,displacementMap:ct,emissiveMap:se,normalMapObjectSpace:ae&&x.normalMapType===Dh,normalMapTangentSpace:ae&&x.normalMapType===So,packedNormalMap:ae&&x.normalMapType===So&&Dg(x.normalMap.format),metalnessMap:ue,roughnessMap:ee,anisotropy:P,anisotropyMap:Z,clearcoat:we,clearcoatMap:ot,clearcoatNormalMap:ut,clearcoatRoughnessMap:K,dispersion:$t,retroreflection:b,iridescence:_,iridescenceMap:j,iridescenceThicknessMap:et,sheen:I,sheenColorMap:dt,sheenRoughnessMap:rt,specularMap:at,specularColorMap:bt,specularIntensityMap:At,transmission:H,transmissionMap:zt,thicknessMap:D,gradientMap:ht,opaque:x.transparent===!1&&x.blending===jn&&x.alphaToCoverage===!1,alphaMap:Q,alphaTest:ft,alphaHash:_t,combine:x.combine,mapUv:Ft&&g(x.map.channel),aoMapUv:Zt&&g(x.aoMap.channel),lightMapUv:ie&&g(x.lightMap.channel),bumpMapUv:Vt&&g(x.bumpMap.channel),normalMapUv:ae&&g(x.normalMap.channel),displacementMapUv:ct&&g(x.displacementMap.channel),emissiveMapUv:se&&g(x.emissiveMap.channel),metalnessMapUv:ue&&g(x.metalnessMap.channel),roughnessMapUv:ee&&g(x.roughnessMap.channel),anisotropyMapUv:Z&&g(x.anisotropyMap.channel),clearcoatMapUv:ot&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ut&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:j&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:et&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:dt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:rt&&g(x.sheenRoughnessMap.channel),specularMapUv:at&&g(x.specularMap.channel),specularColorMapUv:bt&&g(x.specularColorMap.channel),specularIntensityMapUv:At&&g(x.specularIntensityMap.channel),transmissionMapUv:zt&&g(x.transmissionMap.channel),thicknessMapUv:D&&g(x.thicknessMap.channel),alphaMapUv:Q&&g(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ae||P),vertexNormals:!!O.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!O.attributes.uv&&(Ft||Q),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||O.attributes.normal===void 0&&ae===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:lt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Lt,decodeVideoTexture:Ft&&x.map.isVideoTexture===!0&&Kt.getTransfer(x.map.colorSpace)===ce,decodeVideoTextureEmissive:se&&x.emissiveMap.isVideoTexture===!0&&Kt.getTransfer(x.emissiveMap.colorSpace)===ce,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_e,flipSided:x.side===Ze,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:it&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(it&&x.extensions.multiDraw===!0||xt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Pt.vertexUv1s=l.has(1),Pt.vertexUv2s=l.has(2),Pt.vertexUv3s=l.has(3),l.clear(),Pt}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)w.push(C),w.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(w,x),E(w,x),w.push(i.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function E(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function A(x){let w=f[x.type],C;if(w){let L=Gn[w];C=Yh.clone(L.uniforms)}else C=x.uniforms;return C}function v(x,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new Ig(i,w,x,s),c.push(C),h.set(w,C)),C}function M(x){if(--x.usedTimes===0){let w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function R(){o.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:A,acquireProgram:v,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:R}}function Ng(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Fg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function fu(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function pu(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,y,m,p){let E=i[t];return E===void 0?(E={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:p},i[t]=E):(E.id=u.id,E.object=u,E.geometry=f,E.material=g,E.materialVariant=a(u),E.groupOrder=y,E.renderOrder=u.renderOrder,E.z=m,E.group=p),t++,E}function l(u,f,g,y,m,p,E){E.reversedDepth===!0&&(m=-m);let A=o(u,f,g,y,m,p);g.transmission>0?n.push(A):g.transparent===!0?s.push(A):e.push(A)}function c(u,f,g,y,m,p){let E=o(u,f,g,y,m,p);g.transmission>0?n.unshift(E):g.transparent===!0?s.unshift(E):e.unshift(E)}function h(u,f){e.length>1&&e.sort(u||Fg),n.length>1&&n.sort(f||fu),s.length>1&&s.sort(f||fu)}function d(){for(let u=t,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Bg(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new pu,i.set(n,[a])):s>=r.length?(a=new pu,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Og(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new U,color:new Ht};break;case"SpotLight":e={position:new U,direction:new U,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function zg(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Hg=0;function kg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Vg(i){let t=new Og,e=zg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new ve,a=new ve;function o(c){let h=0,d=0,u=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,E=0,A=0,v=0,M=0,T=0,R=0,x=0,w=0,C=0;c.sort(kg);for(let B=0,z=c.length;B<z;B++){let N=c[B],O=N.color,q=N.intensity,X=N.distance,nt=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===bi?nt=N.shadow.map.texture:nt=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)h+=O.r*q,d+=O.g*q,u+=O.b*q;else if(N.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(N.sh.coefficients[J],q);C++}else if(N.isSunLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let tt=N.shadow,G=e.get(N);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[g]=G,n.sunShadowMap[g]=nt;let st=tt.getViewportCount();for(let lt=0;lt<st;lt++)n.sunShadowMatrix[y+lt]=tt.getMatrix(lt),n.sunShadowCascade[y+lt]=tt._cascadeData[lt];y+=st,g++}n.sun[f]=J,f++}else if(N.isDirectionalLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let tt=N.shadow,G=e.get(N);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=nt,n.directionalShadowMatrix[m]=N.shadow.matrix,M++}n.directional[m]=J,m++}else if(N.isSpotLight){let J=t.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(O).multiplyScalar(q),J.distance=X,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,n.spot[E]=J;let tt=N.shadow;if(N.map&&(n.spotLightMap[x]=N.map,x++,tt.updateMatrices(N),N.castShadow&&w++),n.spotLightMatrix[E]=tt.matrix,N.castShadow){let G=e.get(N);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,n.spotShadow[E]=G,n.spotShadowMap[E]=nt,R++}E++}else if(N.isRectAreaLight){let J=t.get(N);J.color.copy(O).multiplyScalar(q),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),n.rectArea[A]=J,A++}else if(N.isPointLight){let J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity),J.distance=N.distance,J.decay=N.decay,N.castShadow){let tt=N.shadow,G=e.get(N);G.shadowIntensity=tt.intensity,G.shadowBias=tt.bias,G.shadowNormalBias=tt.normalBias,G.shadowRadius=tt.radius,G.shadowMapSize=tt.mapSize,G.shadowCameraNear=tt.camera.near,G.shadowCameraFar=tt.camera.far,n.pointShadow[p]=G,n.pointShadowMap[p]=nt,n.pointShadowMatrix[p]=N.shadow.matrix,T++}n.point[p]=J,p++}else if(N.isHemisphereLight){let J=t.get(N);J.skyColor.copy(N.color).multiplyScalar(q),J.groundColor.copy(N.groundColor).multiplyScalar(q),n.hemi[v]=J,v++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let L=n.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==E||L.rectAreaLength!==A||L.hemiLength!==v||L.numSunShadows!==g||L.numDirectionalShadows!==M||L.numPointShadows!==T||L.numSpotShadows!==R||L.numSpotMaps!==x||L.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=E,n.rectArea.length=A,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+x-w,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=C,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=E,L.rectAreaLength=A,L.hemiLength=v,L.numSunShadows=g,L.numDirectionalShadows=M,L.numPointShadows=T,L.numSpotShadows=R,L.numSpotMaps=x,L.numLightProbes=C,n.version=Hg++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,m=0,p=h.matrixWorldInverse;for(let E=0,A=c.length;E<A;E++){let v=c[E];if(v.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),d++}else if(v.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(v.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let M=n.rectArea[y];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(v.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),f++}else if(v.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function mu(i){let t=new Vg(i),e=[],n=[],s=[];function r(u){d.camera=u,e.length=0,n.length=0,s.length=0}function a(u){e.push(u)}function o(u){n.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Gg(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new mu(i),t.set(s,[o])):r>=a.length?(o=new mu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Wg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Xg=`uniform sampler2D shadow_pass;
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
}`,qg=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Yg=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],gu=new ve,yr=new U,lc=new U;function Zg(i,t,e){let n=new xs,s=new Ut,r=new Ut,a=new Ee,o=new Ma,l=new Sa,c={},h=e.maxTextureSize,d={[vi]:Ze,[Ze]:vi,[_e]:_e},u=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:Wg,fragmentShader:Xg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new fe;g.setAttribute("position",new be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Xt(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lr;let p=this.type;this.render=function(T,R,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===hh&&(Bt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=lr);let w=i.getRenderTarget(),C=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(kn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let z=p!==this.type;z&&R.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(O=>O.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,O=T.length;N<O;N++){let q=T[N],X=q.shadow;if(X===void 0){Bt("WebGLShadowMap:",q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);let nt=X.getFrameExtents();s.multiply(nt),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,X.mapSize.y=r.y));let J=i.state.buffers.depth.getReversed();if(X.camera._reversedDepth=J,X.map===null||z===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ms){if(q.isPointLight){Bt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new rn(s.x,s.y,{format:bi,type:An,minFilter:ze,magFilter:ze,generateMipmaps:!1}),X.map.texture.name=q.name+".shadowMap",X.map.depthTexture=new fi(s.x,s.y,wn),X.map.depthTexture.name=q.name+".shadowMapDepth",X.map.depthTexture.format=Fn,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=qe,X.map.depthTexture.magFilter=qe}else q.isPointLight?(X.map=new Ro(s.x),X.map.depthTexture=new da(s.x,Tn)):(X.map=new rn(s.x,s.y),X.map.depthTexture=new fi(s.x,s.y,Tn)),X.map.depthTexture.name=q.name+".shadowMap",X.map.depthTexture.format=Fn,this.type===lr?(X.map.depthTexture.compareFunction=J?Eo:bo,X.map.depthTexture.minFilter=ze,X.map.depthTexture.magFilter=ze):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=qe,X.map.depthTexture.magFilter=qe);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==s.x||X.map.height!==s.y)&&X.map.setSize(s.x,s.y);let tt=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();q.isPointLight!==!0&&X.updateMatrices(q,x);for(let G=0;G<tt;G++){let st=X.getCamera(G);if(q.isPointLight){let lt=X.camera,pt=X.matrix,St=q.distance||lt.far;St!==lt.far&&(lt.far=St,lt.updateProjectionMatrix()),yr.setFromMatrixPosition(q.matrixWorld),lt.position.copy(yr),lc.copy(lt.position),lc.add(qg[G]),lt.up.copy(Yg[G]),lt.lookAt(lc),lt.updateMatrixWorld(),pt.makeTranslation(-yr.x,-yr.y,-yr.z),gu.multiplyMatrices(lt.projectionMatrix,lt.matrixWorldInverse),X._frustum.setFromProjectionMatrix(gu,lt.coordinateSystem,lt.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)i.setRenderTarget(X.map,G),i.clear();else{G===0&&(i.setRenderTarget(X.map),i.clear());let lt=X.getViewport(G);a.set(r.x*lt.x,r.y*lt.y,r.x*lt.z,r.y*lt.w),B.viewport(a)}n=X.getFrustum(G),v(R,x,st,q,this.type)}X.isPointLightShadow!==!0&&this.type===Ms&&E(X,x),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(w,C,L)};function E(T,R){let x=t.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new rn(s.x,s.y,{format:bi,type:An}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,x,u,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,x,f,y,null)}function A(T,R,x,w){let C=null,L=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)C=L;else if(C=x.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let B=C.uuid,z=R.uuid,N=c[B];N===void 0&&(N={},c[B]=N);let O=N[z];O===void 0&&(O=C.clone(),N[z]=O,R.addEventListener("dispose",M)),C=O}if(C.visible=R.visible,C.wireframe=R.wireframe,w===Ms?C.side=R.shadowSide!==null?R.shadowSide:R.side:C.side=R.shadowSide!==null?R.shadowSide:d[R.side],C.alphaMap=R.alphaMap,C.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,C.map=R.map,C.clipShadows=R.clipShadows,C.clippingPlanes=R.clippingPlanes,C.clipIntersection=R.clipIntersection,C.displacementMap=R.displacementMap,C.displacementScale=R.displacementScale,C.displacementBias=R.displacementBias,C.wireframeLinewidth=R.wireframeLinewidth,C.linewidth=R.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let B=i.properties.get(C);B.light=x}return C}function v(T,R,x,w,C){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&C===Ms)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);let z=t.update(T),N=T.material;if(Array.isArray(N)){let O=z.groups;for(let q=0,X=O.length;q<X;q++){let nt=O[q],J=N[nt.materialIndex];if(J&&J.visible){let tt=A(T,J,w,C);T.onBeforeShadow(i,T,R,x,z,tt,nt),i.renderBufferDirect(x,null,z,tt,T,nt),T.onAfterShadow(i,T,R,x,z,tt,nt)}}}else if(N.visible){let O=A(T,N,w,C);T.onBeforeShadow(i,T,R,x,z,O,null),i.renderBufferDirect(x,null,z,O,T,null),T.onAfterShadow(i,T,R,x,z,O,null)}}let B=T.children;for(let z=0,N=B.length;z<N;z++)v(B[z],R,x,w,C)}function M(T){T.target.removeEventListener("dispose",M);for(let x in c){let w=c[x],C=T.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function Jg(i,t){function e(){let D=!1,ht=new Ee,Q=null,ft=new Ee(0,0,0,0);return{setMask:function(_t){Q!==_t&&!D&&(i.colorMask(_t,_t,_t,_t),Q=_t)},setLocked:function(_t){D=_t},setClear:function(_t,it,Lt,Pt,me){me===!0&&(_t*=Pt,it*=Pt,Lt*=Pt),ht.set(_t,it,Lt,Pt),ft.equals(ht)===!1&&(i.clearColor(_t,it,Lt,Pt),ft.copy(ht))},reset:function(){D=!1,Q=null,ft.set(-1,0,0,0)}}}function n(){let D=!1,ht=!1,Q=null,ft=null,_t=null;return{setReversed:function(it){if(ht!==it){let Lt=t.get("EXT_clip_control");it?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),ht=it;let Pt=_t;_t=null,this.setClear(Pt)}},getReversed:function(){return ht},setTest:function(it){it?$(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(it){Q!==it&&!D&&(i.depthMask(it),Q=it)},setFunc:function(it){if(ht&&(it=Xh[it]),ft!==it){switch(it){case jr:i.depthFunc(i.NEVER);break;case ta:i.depthFunc(i.ALWAYS);break;case ea:i.depthFunc(i.LESS);break;case fs:i.depthFunc(i.LEQUAL);break;case na:i.depthFunc(i.EQUAL);break;case ia:i.depthFunc(i.GEQUAL);break;case sa:i.depthFunc(i.GREATER);break;case ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ft=it}},setLocked:function(it){D=it},setClear:function(it){_t!==it&&(_t=it,ht&&(it=1-it),i.clearDepth(it))},reset:function(){D=!1,Q=null,ft=null,_t=null,ht=!1}}}function s(){let D=!1,ht=null,Q=null,ft=null,_t=null,it=null,Lt=null,Pt=null,me=null;return{setTest:function(oe){D||(oe?$(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(oe){ht!==oe&&!D&&(i.stencilMask(oe),ht=oe)},setFunc:function(oe,xn,Ln){(Q!==oe||ft!==xn||_t!==Ln)&&(i.stencilFunc(oe,xn,Ln),Q=oe,ft=xn,_t=Ln)},setOp:function(oe,xn,Ln){(it!==oe||Lt!==xn||Pt!==Ln)&&(i.stencilOp(oe,xn,Ln),it=oe,Lt=xn,Pt=Ln)},setLocked:function(oe){D=oe},setClear:function(oe){me!==oe&&(i.clearStencil(oe),me=oe)},reset:function(){D=!1,ht=null,Q=null,ft=null,_t=null,it=null,Lt=null,Pt=null,me=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,E=null,A=null,v=null,M=null,T=null,R=null,x=new Ht(0,0,0),w=0,C=!1,L=null,B=null,z=null,N=null,O=null,q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,nt=0,J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=nt>=1):J.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=nt>=2);let tt=null,G={},st=i.getParameter(i.SCISSOR_BOX),lt=i.getParameter(i.VIEWPORT),pt=new Ee().fromArray(st),St=new Ee().fromArray(lt);function wt(D,ht,Q,ft){let _t=new Uint8Array(4),it=i.createTexture();i.bindTexture(D,it),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<Q;Lt++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ht,0,i.RGBA,1,1,ft,0,i.RGBA,i.UNSIGNED_BYTE,_t):i.texImage2D(ht+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_t);return it}let W={};W[i.TEXTURE_2D]=wt(i.TEXTURE_2D,i.TEXTURE_2D,1),W[i.TEXTURE_CUBE_MAP]=wt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[i.TEXTURE_2D_ARRAY]=wt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),W[i.TEXTURE_3D]=wt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(i.DEPTH_TEST),a.setFunc(fs),Vt(!1),ae(El),$(i.CULL_FACE),Zt(kn);function $(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function gt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Nt(D,ht){return u[D]!==ht?(i.bindFramebuffer(D,ht),u[D]=ht,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ht),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ht),!0):!1}function xt(D,ht){let Q=g,ft=!1;if(D){Q=f.get(ht),Q===void 0&&(Q=[],f.set(ht,Q));let _t=D.textures;if(Q.length!==_t.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let it=0,Lt=_t.length;it<Lt;it++)Q[it]=i.COLOR_ATTACHMENT0+it;Q.length=_t.length,ft=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ft=!0);ft&&i.drawBuffers(Q)}function Ft(D){return y!==D?(i.useProgram(D),y=D,!0):!1}let he={[Hi]:i.FUNC_ADD,[dh]:i.FUNC_SUBTRACT,[fh]:i.FUNC_REVERSE_SUBTRACT};he[ph]=i.MIN,he[mh]=i.MAX;let It={[gh]:i.ZERO,[_h]:i.ONE,[xh]:i.SRC_COLOR,[Al]:i.SRC_ALPHA,[Eh]:i.SRC_ALPHA_SATURATE,[Sh]:i.DST_COLOR,[vh]:i.DST_ALPHA,[yh]:i.ONE_MINUS_SRC_COLOR,[Rl]:i.ONE_MINUS_SRC_ALPHA,[bh]:i.ONE_MINUS_DST_COLOR,[Mh]:i.ONE_MINUS_DST_ALPHA,[Th]:i.CONSTANT_COLOR,[wh]:i.ONE_MINUS_CONSTANT_COLOR,[Ah]:i.CONSTANT_ALPHA,[Rh]:i.ONE_MINUS_CONSTANT_ALPHA};function Zt(D,ht,Q,ft,_t,it,Lt,Pt,me,oe){if(D===kn){m===!0&&(gt(i.BLEND),m=!1);return}if(m===!1&&($(i.BLEND),m=!0),D!==uh){if(D!==p||oe!==C){if((E!==Hi||M!==Hi)&&(i.blendEquation(i.FUNC_ADD),E=Hi,M=Hi),oe)switch(D){case jn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case un:i.blendFunc(i.ONE,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ot("WebGLState: Invalid blending: ",D);break}else switch(D){case jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case un:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Tl:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wl:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",D);break}A=null,v=null,T=null,R=null,x.set(0,0,0),w=0,p=D,C=oe}return}_t=_t||ht,it=it||Q,Lt=Lt||ft,(ht!==E||_t!==M)&&(i.blendEquationSeparate(he[ht],he[_t]),E=ht,M=_t),(Q!==A||ft!==v||it!==T||Lt!==R)&&(i.blendFuncSeparate(It[Q],It[ft],It[it],It[Lt]),A=Q,v=ft,T=it,R=Lt),(Pt.equals(x)===!1||me!==w)&&(i.blendColor(Pt.r,Pt.g,Pt.b,me),x.copy(Pt),w=me),p=D,C=!1}function ie(D,ht){D.side===_e?gt(i.CULL_FACE):$(i.CULL_FACE);let Q=D.side===Ze;ht&&(Q=!Q),Vt(Q),D.blending===jn&&D.transparent===!1?Zt(kn):Zt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let ft=D.stencilWrite;o.setTest(ft),ft&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(D){L!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),L=D)}function ae(D){D!==lh?($(i.CULL_FACE),D!==B&&(D===El?i.cullFace(i.BACK):D===ch?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),B=D}function ct(D){D!==z&&(X&&i.lineWidth(D),z=D)}function se(D,ht,Q){D?($(i.POLYGON_OFFSET_FILL),(N!==ht||O!==Q)&&(N=ht,O=Q,a.getReversed()&&(ht=-ht),i.polygonOffset(ht,Q))):gt(i.POLYGON_OFFSET_FILL)}function ue(D){D?$(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function ee(D){D===void 0&&(D=i.TEXTURE0+q-1),tt!==D&&(i.activeTexture(D),tt=D)}function P(D,ht,Q){Q===void 0&&(tt===null?Q=i.TEXTURE0+q-1:Q=tt);let ft=G[Q];ft===void 0&&(ft={type:void 0,texture:void 0},G[Q]=ft),(ft.type!==D||ft.texture!==ht)&&(tt!==Q&&(i.activeTexture(Q),tt=Q),i.bindTexture(D,ht||W[D]),ft.type=D,ft.texture=ht)}function we(){let D=G[tt];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function $t(){try{i.compressedTexImage2D(...arguments)}catch(D){Ot("WebGLState:",D)}}function b(){try{i.compressedTexImage3D(...arguments)}catch(D){Ot("WebGLState:",D)}}function _(){try{i.texSubImage2D(...arguments)}catch(D){Ot("WebGLState:",D)}}function I(){try{i.texSubImage3D(...arguments)}catch(D){Ot("WebGLState:",D)}}function H(){try{i.compressedTexSubImage2D(...arguments)}catch(D){Ot("WebGLState:",D)}}function Z(){try{i.compressedTexSubImage3D(...arguments)}catch(D){Ot("WebGLState:",D)}}function ot(){try{i.texStorage2D(...arguments)}catch(D){Ot("WebGLState:",D)}}function ut(){try{i.texStorage3D(...arguments)}catch(D){Ot("WebGLState:",D)}}function K(){try{i.texImage2D(...arguments)}catch(D){Ot("WebGLState:",D)}}function j(){try{i.texImage3D(...arguments)}catch(D){Ot("WebGLState:",D)}}function et(D){return d[D]!==void 0?d[D]:i.getParameter(D)}function dt(D,ht){d[D]!==ht&&(i.pixelStorei(D,ht),d[D]=ht)}function rt(D){pt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),pt.copy(D))}function at(D){St.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),St.copy(D))}function bt(D,ht){let Q=c.get(ht);Q===void 0&&(Q=new WeakMap,c.set(ht,Q));let ft=Q.get(D);ft===void 0&&(ft=i.getUniformBlockIndex(ht,D.name),Q.set(D,ft))}function At(D,ht){let ft=c.get(ht).get(D);l.get(ht)!==ft&&(i.uniformBlockBinding(ht,ft,D.__bindingPointIndex),l.set(ht,ft))}function zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},tt=null,G={},u={},f=new WeakMap,g=[],y=null,m=!1,p=null,E=null,A=null,v=null,M=null,T=null,R=null,x=new Ht(0,0,0),w=0,C=!1,L=null,B=null,z=null,N=null,O=null,pt.set(0,0,i.canvas.width,i.canvas.height),St.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:$,disable:gt,bindFramebuffer:Nt,drawBuffers:xt,useProgram:Ft,setBlending:Zt,setMaterial:ie,setFlipSided:Vt,setCullFace:ae,setLineWidth:ct,setPolygonOffset:se,setScissorTest:ue,activeTexture:ee,bindTexture:P,unbindTexture:we,compressedTexImage2D:$t,compressedTexImage3D:b,texImage2D:K,texImage3D:j,pixelStorei:dt,getParameter:et,updateUBOMapping:bt,uniformBlockBinding:At,texStorage2D:ot,texStorage3D:ut,texSubImage2D:_,texSubImage3D:I,compressedTexSubImage2D:H,compressedTexSubImage3D:Z,scissor:rt,viewport:at,reset:zt}}function $g(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ut,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,_){return g?new OffscreenCanvas(b,_):Vs("canvas")}function m(b,_,I){let H=1,Z=$t(b);if((Z.width>I||Z.height>I)&&(H=I/Math.max(Z.width,Z.height)),H<1)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap||typeof VideoFrame!="undefined"&&b instanceof VideoFrame){let ot=Math.floor(H*Z.width),ut=Math.floor(H*Z.height);u===void 0&&(u=y(ot,ut));let K=_?y(ot,ut):u;return K.width=ot,K.height=ut,K.getContext("2d").drawImage(b,0,0,ot,ut),Bt("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+ot+"x"+ut+")."),K}else return"data"in b&&Bt("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),b;return b}function p(b){return b.generateMipmaps}function E(b){i.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(b,_,I,H,Z,ot=!1){if(b!==null){if(i[b]!==void 0)return i[b];Bt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ut;H&&(ut=t.get("EXT_texture_norm16"),ut||Bt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=_;if(_===i.RED&&(I===i.FLOAT&&(K=i.R32F),I===i.HALF_FLOAT&&(K=i.R16F),I===i.UNSIGNED_BYTE&&(K=i.R8),I===i.UNSIGNED_SHORT&&ut&&(K=ut.R16_EXT),I===i.SHORT&&ut&&(K=ut.R16_SNORM_EXT)),_===i.RED_INTEGER&&(I===i.UNSIGNED_BYTE&&(K=i.R8UI),I===i.UNSIGNED_SHORT&&(K=i.R16UI),I===i.UNSIGNED_INT&&(K=i.R32UI),I===i.BYTE&&(K=i.R8I),I===i.SHORT&&(K=i.R16I),I===i.INT&&(K=i.R32I)),_===i.RG&&(I===i.FLOAT&&(K=i.RG32F),I===i.HALF_FLOAT&&(K=i.RG16F),I===i.UNSIGNED_BYTE&&(K=i.RG8),I===i.UNSIGNED_SHORT&&ut&&(K=ut.RG16_EXT),I===i.SHORT&&ut&&(K=ut.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(I===i.UNSIGNED_BYTE&&(K=i.RG8UI),I===i.UNSIGNED_SHORT&&(K=i.RG16UI),I===i.UNSIGNED_INT&&(K=i.RG32UI),I===i.BYTE&&(K=i.RG8I),I===i.SHORT&&(K=i.RG16I),I===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(I===i.UNSIGNED_BYTE&&(K=i.RGB8UI),I===i.UNSIGNED_SHORT&&(K=i.RGB16UI),I===i.UNSIGNED_INT&&(K=i.RGB32UI),I===i.BYTE&&(K=i.RGB8I),I===i.SHORT&&(K=i.RGB16I),I===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(I===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),I===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),I===i.UNSIGNED_INT&&(K=i.RGBA32UI),I===i.BYTE&&(K=i.RGBA8I),I===i.SHORT&&(K=i.RGBA16I),I===i.INT&&(K=i.RGBA32I)),_===i.RGB&&(I===i.UNSIGNED_SHORT&&ut&&(K=ut.RGB16_EXT),I===i.SHORT&&ut&&(K=ut.RGB16_SNORM_EXT),I===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),I===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),_===i.RGBA){let j=ot?ks:Kt.getTransfer(Z);I===i.FLOAT&&(K=i.RGBA32F),I===i.HALF_FLOAT&&(K=i.RGBA16F),I===i.UNSIGNED_BYTE&&(K=j===ce?i.SRGB8_ALPHA8:i.RGBA8),I===i.UNSIGNED_SHORT&&ut&&(K=ut.RGBA16_EXT),I===i.SHORT&&ut&&(K=ut.RGBA16_SNORM_EXT),I===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),I===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function M(b,_){let I;return b?_===null||_===Tn||_===bs?I=i.DEPTH24_STENCIL8:_===wn?I=i.DEPTH32F_STENCIL8:_===Ss&&(I=i.DEPTH24_STENCIL8,Bt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Tn||_===bs?I=i.DEPTH_COMPONENT24:_===wn?I=i.DEPTH_COMPONENT32F:_===Ss&&(I=i.DEPTH_COMPONENT16),I}function T(b,_){return p(b)===!0||b.isFramebufferTexture&&b.minFilter!==qe&&b.minFilter!==ze?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function R(b){let _=b.target;_.removeEventListener("dispose",R),w(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function x(b){let _=b.target;_.removeEventListener("dispose",x),L(_)}function w(b){let _=n.get(b);if(_.__webglInit===void 0)return;let I=b.source,H=f.get(I);if(H){let Z=H[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&C(b),Object.keys(H).length===0&&f.delete(I)}n.remove(b)}function C(b){let _=n.get(b);i.deleteTexture(_.__webglTexture);let I=b.source,H=f.get(I);delete H[_.__cacheKey],a.memory.textures--}function L(b){let _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(_.__webglFramebuffer[H]))for(let Z=0;Z<_.__webglFramebuffer[H].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[H][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[H]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[H])}else{if(Array.isArray(_.__webglFramebuffer))for(let H=0;H<_.__webglFramebuffer.length;H++)i.deleteFramebuffer(_.__webglFramebuffer[H]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let H=0;H<_.__webglColorRenderbuffer.length;H++)_.__webglColorRenderbuffer[H]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[H]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let I=b.textures;for(let H=0,Z=I.length;H<Z;H++){let ot=n.get(I[H]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),a.memory.textures--),n.remove(I[H])}n.remove(b)}let B=0;function z(){B=0}function N(){return B}function O(b){B=b}function q(){let b=B;return b>=s.maxTextures&&Bt("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,b}function X(b){let _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function nt(b,_){let I=n.get(b);if(b.isVideoTexture&&P(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&I.__version!==b.version){let H=b.image;if(H===null)Bt("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Bt("WebGLRenderer: Texture marked for update but image is incomplete");else{gt(I,b,_);return}}else b.isExternalTexture&&(I.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,I.__webglTexture,i.TEXTURE0+_)}function J(b,_){let I=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&I.__version!==b.version){gt(I,b,_);return}else b.isExternalTexture&&(I.__webglTexture=b.sourceTexture?b.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,I.__webglTexture,i.TEXTURE0+_)}function tt(b,_){let I=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&I.__version!==b.version){gt(I,b,_);return}e.bindTexture(i.TEXTURE_3D,I.__webglTexture,i.TEXTURE0+_)}function G(b,_){let I=n.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&I.__version!==b.version){Nt(I,b,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+_)}let st={[ui]:i.REPEAT,[Nn]:i.CLAMP_TO_EDGE,[aa]:i.MIRRORED_REPEAT},lt={[qe]:i.NEAREST,[Ih]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[ze]:i.LINEAR,[Oa]:i.LINEAR_MIPMAP_NEAREST,[gn]:i.LINEAR_MIPMAP_LINEAR},pt={[Nh]:i.NEVER,[Hh]:i.ALWAYS,[Fh]:i.LESS,[bo]:i.LEQUAL,[Bh]:i.EQUAL,[Eo]:i.GEQUAL,[Oh]:i.GREATER,[zh]:i.NOTEQUAL};function St(b,_){if(_.type===wn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===ze||_.magFilter===Oa||_.magFilter===ur||_.magFilter===gn||_.minFilter===ze||_.minFilter===Oa||_.minFilter===ur||_.minFilter===gn)&&Bt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,st[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,st[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,st[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,lt[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,lt[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,pt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===qe||_.minFilter!==ur&&_.minFilter!==gn||_.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let I=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function wt(b,_){let I=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",R));let H=_.source,Z=f.get(H);Z===void 0&&(Z={},f.set(H,Z));let ot=X(_);if(ot!==b.__cacheKey){Z[ot]===void 0&&(Z[ot]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,I=!0),Z[ot].usedTimes++;let ut=Z[b.__cacheKey];ut!==void 0&&(Z[b.__cacheKey].usedTimes--,ut.usedTimes===0&&C(_)),b.__cacheKey=ot,b.__webglTexture=Z[ot].texture}return I}function W(b,_,I){return Math.floor(Math.floor(b/I)/_)}function $(b,_,I,H){let ot=b.updateRanges;if(ot.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,I,H,_.data);else{ot.sort((dt,rt)=>dt.start-rt.start);let ut=0;for(let dt=1;dt<ot.length;dt++){let rt=ot[ut],at=ot[dt],bt=rt.start+rt.count,At=W(at.start,_.width,4),zt=W(rt.start,_.width,4);at.start<=bt+1&&At===zt&&W(at.start+at.count-1,_.width,4)===At?rt.count=Math.max(rt.count,at.start+at.count-rt.start):(++ut,ot[ut]=at)}ot.length=ut+1;let K=e.getParameter(i.UNPACK_ROW_LENGTH),j=e.getParameter(i.UNPACK_SKIP_PIXELS),et=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let dt=0,rt=ot.length;dt<rt;dt++){let at=ot[dt],bt=Math.floor(at.start/4),At=Math.ceil(at.count/4),zt=bt%_.width,D=Math.floor(bt/_.width),ht=At,Q=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,zt),e.pixelStorei(i.UNPACK_SKIP_ROWS,D),e.texSubImage2D(i.TEXTURE_2D,0,zt,D,ht,Q,I,H,_.data)}b.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,K),e.pixelStorei(i.UNPACK_SKIP_PIXELS,j),e.pixelStorei(i.UNPACK_SKIP_ROWS,et)}}function gt(b,_,I){let H=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(H=i.TEXTURE_3D);let Z=wt(b,_),ot=_.source;e.bindTexture(H,b.__webglTexture,i.TEXTURE0+I);let ut=n.get(ot);if(ot.version!==ut.__version||Z===!0){if(e.activeTexture(i.TEXTURE0+I),(typeof ImageBitmap!="undefined"&&_.image instanceof ImageBitmap)===!1){let Q=Kt.getPrimaries(Kt.workingColorSpace),ft=_.colorSpace===ti?null:Kt.getPrimaries(_.colorSpace),_t=_.colorSpace===ti||Q===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let j=m(_.image,!1,s.maxTextureSize);j=we(_,j);let et=r.convert(_.format,_.colorSpace),dt=r.convert(_.type),rt=v(_.internalFormat,et,dt,_.normalized,_.colorSpace,_.isVideoTexture);St(H,_);let at,bt=_.mipmaps,At=_.isVideoTexture!==!0,zt=ut.__version===void 0||Z===!0,D=ot.dataReady,ht=T(_,j);if(_.isDepthTexture)rt=M(_.format===Si,_.type),zt&&(At?e.texStorage2D(i.TEXTURE_2D,1,rt,j.width,j.height):e.texImage2D(i.TEXTURE_2D,0,rt,j.width,j.height,0,et,dt,null));else if(_.isDataTexture)if(bt.length>0){At&&zt&&e.texStorage2D(i.TEXTURE_2D,ht,rt,bt[0].width,bt[0].height);for(let Q=0,ft=bt.length;Q<ft;Q++)at=bt[Q],At?D&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,at.width,at.height,et,dt,at.data):e.texImage2D(i.TEXTURE_2D,Q,rt,at.width,at.height,0,et,dt,at.data);_.generateMipmaps=!1}else At?(zt&&e.texStorage2D(i.TEXTURE_2D,ht,rt,j.width,j.height),D&&$(_,j,et,dt)):e.texImage2D(i.TEXTURE_2D,0,rt,j.width,j.height,0,et,dt,j.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){At&&zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,rt,bt[0].width,bt[0].height,j.depth);for(let Q=0,ft=bt.length;Q<ft;Q++)if(at=bt[Q],_.format!==_n)if(et!==null)if(At){if(D)if(_.layerUpdates.size>0){let _t=Kl(at.width,at.height,_.format,_.type);for(let it of _.layerUpdates){let Lt=at.data.subarray(it*_t/at.data.BYTES_PER_ELEMENT,(it+1)*_t/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,it,at.width,at.height,1,et,Lt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,at.width,at.height,j.depth,et,at.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,rt,at.width,at.height,j.depth,0,at.data,0,0);else Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else At?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,at.width,at.height,j.depth,et,dt,at.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,rt,at.width,at.height,j.depth,0,et,dt,at.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{At&&zt&&e.texStorage2D(i.TEXTURE_2D,ht,rt,bt[0].width,bt[0].height);for(let Q=0,ft=bt.length;Q<ft;Q++)at=bt[Q],_.format!==_n?et!==null?At?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,at.width,at.height,et,at.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,rt,at.width,at.height,0,at.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):At?D&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,at.width,at.height,et,dt,at.data):e.texImage2D(i.TEXTURE_2D,Q,rt,at.width,at.height,0,et,dt,at.data)}else if(_.isDataArrayTexture)if(At){if(zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ht,rt,j.width,j.height,j.depth),D)if(_.layerUpdates.size>0){let Q=Kl(j.width,j.height,_.format,_.type);for(let ft of _.layerUpdates){let _t=j.data.subarray(ft*Q/j.data.BYTES_PER_ELEMENT,(ft+1)*Q/j.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ft,j.width,j.height,1,et,dt,_t)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,et,dt,j.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,rt,j.width,j.height,j.depth,0,et,dt,j.data);else if(_.isData3DTexture)At?(zt&&e.texStorage3D(i.TEXTURE_3D,ht,rt,j.width,j.height,j.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,et,dt,j.data)):e.texImage3D(i.TEXTURE_3D,0,rt,j.width,j.height,j.depth,0,et,dt,j.data);else if(_.isFramebufferTexture){if(zt)if(At)e.texStorage2D(i.TEXTURE_2D,ht,rt,j.width,j.height);else{let Q=j.width,ft=j.height;for(let _t=0;_t<ht;_t++)e.texImage2D(i.TEXTURE_2D,_t,rt,Q,ft,0,et,dt,null),Q>>=1,ft>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),j.parentNode!==Q){Q.appendChild(j),d.add(_),Q.onpaint=ft=>{let _t=ft.changedElements;for(let it of d)_t.includes(it.image)&&(it.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let _t=i.RGBA,it=i.RGBA,Lt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_t,it,Lt,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(bt.length>0){if(At&&zt){let Q=$t(bt[0]);e.texStorage2D(i.TEXTURE_2D,ht,rt,Q.width,Q.height)}for(let Q=0,ft=bt.length;Q<ft;Q++)at=bt[Q],At?D&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,et,dt,at):e.texImage2D(i.TEXTURE_2D,Q,rt,et,dt,at);_.generateMipmaps=!1}else if(At){if(zt){let Q=$t(j);e.texStorage2D(i.TEXTURE_2D,ht,rt,Q.width,Q.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et,dt,j)}else e.texImage2D(i.TEXTURE_2D,0,rt,et,dt,j);p(_)&&E(H),ut.__version=ot.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Nt(b,_,I){if(_.image.length!==6)return;let H=wt(b,_),Z=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+I);let ot=n.get(Z);if(Z.version!==ot.__version||H===!0){e.activeTexture(i.TEXTURE0+I);let ut=Kt.getPrimaries(Kt.workingColorSpace),K=_.colorSpace===ti?null:Kt.getPrimaries(_.colorSpace),j=_.colorSpace===ti||ut===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let et=_.isCompressedTexture||_.image[0].isCompressedTexture,dt=_.image[0]&&_.image[0].isDataTexture,rt=[];for(let it=0;it<6;it++)!et&&!dt?rt[it]=m(_.image[it],!0,s.maxCubemapSize):rt[it]=dt?_.image[it].image:_.image[it],rt[it]=we(_,rt[it]);let at=rt[0],bt=r.convert(_.format,_.colorSpace),At=r.convert(_.type),zt=v(_.internalFormat,bt,At,_.normalized,_.colorSpace),D=_.isVideoTexture!==!0,ht=ot.__version===void 0||H===!0,Q=Z.dataReady,ft=T(_,at);St(i.TEXTURE_CUBE_MAP,_);let _t;if(et){D&&ht&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,zt,at.width,at.height);for(let it=0;it<6;it++){_t=rt[it].mipmaps;for(let Lt=0;Lt<_t.length;Lt++){let Pt=_t[Lt];_.format!==_n?bt!==null?D?Q&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt,0,0,Pt.width,Pt.height,bt,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt,zt,Pt.width,Pt.height,0,Pt.data):Bt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt,0,0,Pt.width,Pt.height,bt,At,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt,zt,Pt.width,Pt.height,0,bt,At,Pt.data)}}}else{if(_t=_.mipmaps,D&&ht){_t.length>0&&ft++;let it=$t(rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,zt,it.width,it.height)}for(let it=0;it<6;it++)if(dt){D?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,rt[it].width,rt[it].height,bt,At,rt[it].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,zt,rt[it].width,rt[it].height,0,bt,At,rt[it].data);for(let Lt=0;Lt<_t.length;Lt++){let me=_t[Lt].image[it].image;D?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt+1,0,0,me.width,me.height,bt,At,me.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt+1,zt,me.width,me.height,0,bt,At,me.data)}}else{D?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,bt,At,rt[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,zt,bt,At,rt[it]);for(let Lt=0;Lt<_t.length;Lt++){let Pt=_t[Lt];D?Q&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt+1,0,0,bt,At,Pt.image[it]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+it,Lt+1,zt,bt,At,Pt.image[it])}}}p(_)&&E(i.TEXTURE_CUBE_MAP),ot.__version=Z.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function xt(b,_,I,H,Z,ot){let ut=r.convert(I.format,I.colorSpace),K=r.convert(I.type),j=v(I.internalFormat,ut,K,I.normalized,I.colorSpace),et=n.get(_),dt=n.get(I);if(dt.__renderTarget=_,!et.__hasExternalTextures){let rt=Math.max(1,_.width>>ot),at=Math.max(1,_.height>>ot);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,ot,j,rt,at,_.depth,0,ut,K,null):e.texImage2D(Z,ot,j,rt,at,0,ut,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),ee(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,H,Z,dt.__webglTexture,0,ue(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,H,Z,dt.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(b,_,I){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){let H=_.depthTexture,Z=H&&H.isDepthTexture?H.type:null,ot=M(_.stencilBuffer,Z),ut=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ee(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(_),ot,_.width,_.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(_),ot,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ot,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,b)}else{let H=_.textures;for(let Z=0;Z<H.length;Z++){let ot=H[Z],ut=r.convert(ot.format,ot.colorSpace),K=r.convert(ot.type),j=v(ot.internalFormat,ut,K,ot.normalized,ot.colorSpace);ee(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue(_),j,_.width,_.height):I?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue(_),j,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,j,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(b,_,I){let H=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=n.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),H){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",R)),Z.__webglTexture===void 0){Z.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),St(i.TEXTURE_CUBE_MAP,_.depthTexture);let et=r.convert(_.depthTexture.format),dt=r.convert(_.depthTexture.type),rt;_.depthTexture.format===Fn?rt=i.DEPTH_COMPONENT24:_.depthTexture.format===Si&&(rt=i.DEPTH24_STENCIL8);for(let at=0;at<6;at++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,rt,_.width,_.height,0,et,dt,null)}}else nt(_.depthTexture,0);let ot=Z.__webglTexture,ut=ue(_),K=H?i.TEXTURE_CUBE_MAP_POSITIVE_X+I:i.TEXTURE_2D,j=_.depthTexture.format===Si?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Fn)ee(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,ot,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,j,K,ot,0);else if(_.depthTexture.format===Si)ee(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,ot,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,j,K,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function It(b){let _=n.get(b),I=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){let H=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),H){let Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,H.removeEventListener("dispose",Z)};H.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=H}if(b.depthTexture&&!_.__autoAllocateDepthBuffer)if(I)for(let H=0;H<6;H++)he(_.__webglFramebuffer[H],b,H);else{let H=b.texture.mipmaps;H&&H.length>0?he(_.__webglFramebuffer[0],b,0):he(_.__webglFramebuffer,b,0)}else if(I){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]===void 0)_.__webglDepthbuffer[H]=i.createRenderbuffer(),Ft(_.__webglDepthbuffer[H],b,!1);else{let Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer[H];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ot)}}else{let H=b.texture.mipmaps;if(H&&H.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),Ft(_.__webglDepthbuffer,b,!1);else{let Z=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,ot)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Zt(b,_,I){let H=n.get(b);_!==void 0&&xt(H.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),I!==void 0&&It(b)}function ie(b){let _=b.texture,I=n.get(b),H=n.get(_);b.addEventListener("dispose",x);let Z=b.textures,ot=b.isWebGLCubeRenderTarget===!0,ut=Z.length>1;if(ut||(H.__webglTexture===void 0&&(H.__webglTexture=i.createTexture()),H.__version=_.version,a.memory.textures++),ot){I.__webglFramebuffer=[];for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[K]=[];for(let j=0;j<_.mipmaps.length;j++)I.__webglFramebuffer[K][j]=i.createFramebuffer()}else I.__webglFramebuffer[K]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let K=0;K<_.mipmaps.length;K++)I.__webglFramebuffer[K]=i.createFramebuffer()}else I.__webglFramebuffer=i.createFramebuffer();if(ut)for(let K=0,j=Z.length;K<j;K++){let et=n.get(Z[K]);et.__webglTexture===void 0&&(et.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&ee(b)===!1){I.__webglMultisampledFramebuffer=i.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let K=0;K<Z.length;K++){let j=Z[K];I.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,I.__webglColorRenderbuffer[K]);let et=r.convert(j.format,j.colorSpace),dt=r.convert(j.type),rt=v(j.internalFormat,et,dt,j.normalized,j.colorSpace,b.isXRRenderTarget===!0),at=ue(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,at,rt,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,I.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(I.__webglDepthRenderbuffer=i.createRenderbuffer(),Ft(I.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture),St(i.TEXTURE_CUBE_MAP,_);for(let K=0;K<6;K++)if(_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)xt(I.__webglFramebuffer[K][j],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,j);else xt(I.__webglFramebuffer[K],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(_)&&E(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let K=0,j=Z.length;K<j;K++){let et=Z[K],dt=n.get(et),rt=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(rt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,dt.__webglTexture),St(rt,et),xt(I.__webglFramebuffer,b,et,i.COLOR_ATTACHMENT0+K,rt,0),p(et)&&E(rt)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(K=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,H.__webglTexture),St(K,_),_.mipmaps&&_.mipmaps.length>0)for(let j=0;j<_.mipmaps.length;j++)xt(I.__webglFramebuffer[j],b,_,i.COLOR_ATTACHMENT0,K,j);else xt(I.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,K,0);p(_)&&E(K),e.unbindTexture()}b.depthBuffer&&It(b)}function Vt(b){let _=b.textures;for(let I=0,H=_.length;I<H;I++){let Z=_[I];if(p(Z)){let ot=A(b),ut=n.get(Z).__webglTexture;e.bindTexture(ot,ut),E(ot),e.unbindTexture()}}}let ae=[],ct=[];function se(b){if(b.samples>0){if(ee(b)===!1){let _=b.textures,I=b.width,H=b.height,Z=i.COLOR_BUFFER_BIT,ot=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(b),K=_.length>1;if(K)for(let et=0;et<_.length;et++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let j=b.texture.mipmaps;j&&j.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let et=0;et<_.length;et++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[et]);let dt=n.get(_[et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,dt,0)}i.blitFramebuffer(0,0,I,H,0,0,I,H,Z,i.NEAREST),l===!0&&(ae.length=0,ct.length=0,ae.push(i.COLOR_ATTACHMENT0+et),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(ae.push(ot),ct.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ct)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ae))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let et=0;et<_.length;et++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,ut.__webglColorRenderbuffer[et]);let dt=n.get(_[et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&l){let _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ue(b){return Math.min(s.maxSamples,b.samples)}function ee(b){let _=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function P(b){let _=a.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function we(b,_){let I=b.colorSpace,H=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||I!==Hs&&I!==ti&&(Kt.getTransfer(I)===ce?(H!==_n||Z!==an)&&Bt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",I)),_}function $t(b){return typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame!="undefined"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=z,this.getTextureUnits=N,this.setTextureUnits=O,this.setTexture2D=nt,this.setTexture2DArray=J,this.setTexture3D=tt,this.setTextureCube=G,this.rebindTextures=Zt,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=ee,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Kg(i,t){function e(n,s=ti){let r,a=Kt.getTransfer(s);if(n===an)return i.UNSIGNED_BYTE;if(n===Ha)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bl)return i.BYTE;if(n===Ol)return i.SHORT;if(n===Ss)return i.UNSIGNED_SHORT;if(n===za)return i.INT;if(n===Tn)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===An)return i.HALF_FLOAT;if(n===kl)return i.ALPHA;if(n===Vl)return i.RGB;if(n===_n)return i.RGBA;if(n===Fn)return i.DEPTH_COMPONENT;if(n===Si)return i.DEPTH_STENCIL;if(n===Gl)return i.RED;if(n===Va)return i.RED_INTEGER;if(n===bi)return i.RG;if(n===Ga)return i.RG_INTEGER;if(n===Wa)return i.RGBA_INTEGER;if(n===dr||n===fr||n===pr||n===mr)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xa||n===qa||n===Ya||n===Za)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ja||n===$a||n===Ka||n===Qa||n===ja||n===gr||n===to)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ja||n===$a)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ka)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Qa)return r.COMPRESSED_R11_EAC;if(n===ja)return r.COMPRESSED_SIGNED_R11_EAC;if(n===gr)return r.COMPRESSED_RG11_EAC;if(n===to)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho||n===uo||n===fo||n===po||n===mo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===eo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===no)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===io)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===so)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ro)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ao)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===co)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ho)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===po)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mo)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===go||n===_o||n===xo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===go)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_o)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===yo||n===vo||n===_r||n===Mo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===yo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===vo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Qg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jg=`
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

}`,gc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ks(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ke({vertexShader:Qg,fragmentShader:jg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xt(new Ae(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_c=class extends Bn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=typeof XRWebGLBinding!="undefined",m=new gc,p={},E=e.getContextAttributes(),A=null,v=null,M=[],T=[],R=new Ut,x=null,w=null,C=new Xe;C.viewport=new Ee;let L=new Xe;L.viewport=new Ee;let B=[C,L],z=new Ua,N=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let $=M[W];return $===void 0&&($=new _s,M[W]=$),$.getTargetRaySpace()},this.getControllerGrip=function(W){let $=M[W];return $===void 0&&($=new _s,M[W]=$),$.getGripSpace()},this.getHand=function(W){let $=M[W];return $===void 0&&($=new _s,M[W]=$),$.getHandSpace()};function q(W){let $=T.indexOf(W.inputSource);if($===-1)return;let gt=M[$];gt!==void 0&&(gt.update(W.inputSource,W.frame,c||a),gt.dispatchEvent({type:W.type,data:W.inputSource}))}function X(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",nt);for(let W=0;W<M.length;W++){let $=T[W];$!==null&&(T[W]=null,M[W].disconnect($))}N=null,O=null,m.reset();for(let W in p)delete p[W];if(t.setRenderTarget(A),f=null,u=null,d=null,s=null,v=null,wt.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(R.width,R.height,!1),w!==null){let W=w.camera;W.fov=w.fov,W.zoom=w.zoom,W.updateProjectionMatrix(),w=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&Bt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&Bt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(A=t.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",X),s.addEventListener("inputsourceschange",nt),E.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,Nt=null,xt=null;E.depth&&(xt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=E.stencil?Si:Fn,Nt=E.stencil?bs:Tn);let Ft={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ft),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new rn(u.textureWidth,u.textureHeight,{format:_n,type:an,depthTexture:new fi(u.textureWidth,u.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let gt={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new rn(f.framebufferWidth,f.framebufferHeight,{format:_n,type:an,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),wt.setContext(s),wt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(W){for(let $=0;$<W.removed.length;$++){let gt=W.removed[$],Nt=T.indexOf(gt);Nt>=0&&(T[Nt]=null,M[Nt].disconnect(gt))}for(let $=0;$<W.added.length;$++){let gt=W.added[$],Nt=T.indexOf(gt);if(Nt===-1){for(let Ft=0;Ft<M.length;Ft++)if(Ft>=T.length){T.push(gt),Nt=Ft;break}else if(T[Ft]===null){T[Ft]=gt,Nt=Ft;break}if(Nt===-1)break}let xt=M[Nt];xt&&xt.connect(gt)}}let J=new U,tt=new U;function G(W,$,gt){J.setFromMatrixPosition($.matrixWorld),tt.setFromMatrixPosition(gt.matrixWorld);let Nt=J.distanceTo(tt),xt=$.projectionMatrix.elements,Ft=gt.projectionMatrix.elements,he=xt[14]/(xt[10]-1),It=xt[14]/(xt[10]+1),Zt=(xt[9]+1)/xt[5],ie=(xt[9]-1)/xt[5],Vt=(xt[8]-1)/xt[0],ae=(Ft[8]+1)/Ft[0],ct=he*Vt,se=he*ae,ue=Nt/(-Vt+ae),ee=ue*-Vt;if($.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ee),W.translateZ(ue),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),xt[10]===-1)W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let P=he+ue,we=It+ue,$t=ct-ee,b=se+(Nt-ee),_=Zt*It/we*P,I=ie*It/we*P;W.projectionMatrix.makePerspective($t,b,_,I,P,we),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function st(W,$){$===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices($.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let $=W.near,gt=W.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(gt=m.depthFar)),z.near=L.near=C.near=$,z.far=L.far=C.far=gt,(N!==z.near||O!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),N=z.near,O=z.far),z.layers.mask=W.layers.mask|6,C.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;let Nt=W.parent,xt=z.cameras;st(z,Nt);for(let Ft=0;Ft<xt.length;Ft++)st(xt[Ft],Nt);xt.length===2?G(z,C,L):z.projectionMatrix.copy(C.projectionMatrix),w===null&&W.isPerspectiveCamera&&(w={camera:W,fov:W.fov,zoom:W.zoom}),lt(W,z,Nt)};function lt(W,$,gt){gt===null?W.matrix.copy($.matrixWorld):(W.matrix.copy(gt.matrixWorld),W.matrix.invert(),W.matrix.multiply($.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy($.projectionMatrix),W.projectionMatrixInverse.copy($.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Bi*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(W){l=W,u!==null&&(u.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(W){return p[W]};let pt=null;function St(W,$){if(h=$.getViewerPose(c||a),g=$,h!==null){let gt=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let Nt=!1;gt.length!==z.cameras.length&&(z.cameras.length=0,Nt=!0);for(let It=0;It<gt.length;It++){let Zt=gt[It],ie=null;if(f!==null)ie=f.getViewport(Zt);else{let ae=d.getViewSubImage(u,Zt);ie=ae.viewport,It===0&&(t.setRenderTargetTextures(v,ae.colorTexture,ae.depthStencilTexture),t.setRenderTarget(v))}let Vt=B[It];Vt===void 0&&(Vt=new Xe,Vt.layers.enable(It),Vt.viewport=new Ee,B[It]=Vt),Vt.matrix.fromArray(Zt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Zt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(ie.x,ie.y,ie.width,ie.height),It===0&&(z.matrix.copy(Vt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Nt===!0&&z.cameras.push(Vt)}let xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let It=d.getDepthInformation(gt[0]);It&&It.isValid&&It.texture&&m.init(It,s.renderState)}if(xt&&xt.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let It=0;It<gt.length;It++){let Zt=gt[It].camera;if(Zt){let ie=p[Zt];ie||(ie=new Ks,p[Zt]=ie);let Vt=d.getCameraImage(Zt);ie.sourceTexture=Vt}}}}for(let gt=0;gt<M.length;gt++){let Nt=T[gt],xt=M[gt];Nt!==null&&xt!==void 0&&xt.update(Nt,$,c||a)}pt&&pt(W,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let wt=new _u;wt.setAnimationLoop(St),this.setAnimationLoop=function(W){pt=W},this.dispose=function(){}}},t_=new ve,bu=new kt;bu.set(-1,0,0,0,1,0,0,0,1);function e_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Zl(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,A,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,A):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=t.get(p),A=E.envMap,v=E.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(t_.makeRotationFromEuler(v)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(bu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=A*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function n_(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let T=M.program;n.uniformBlockBinding(v,T)}function c(v,M){let T=s[v.id];T===void 0&&(m(v),T=h(v),s[v.id]=T,v.addEventListener("dispose",E));let R=M.program;n.updateUBOMapping(v,R);let x=t.render.frame;r[v.id]!==x&&(u(v),r[v.id]=x)}function h(v){let M=d();v.__bindingPointIndex=M;let T=i.createBuffer(),R=v.__size,x=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,R,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,T),T}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){let M=s[v.id],T=v.uniforms,R=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let x=0,w=T.length;x<w;x++){let C=T[x];if(Array.isArray(C))for(let L=0,B=C.length;L<B;L++)f(C[L],x,L,R);else f(C,x,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,M,T,R){if(y(v,M,T,R)===!0){let x=v.__offset,w=v.value;if(Array.isArray(w)){let C=0;for(let L=0;L<w.length;L++){let B=w[L],z=p(B);g(B,v.__data,C),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,v.__data)}}function g(v,M,T){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,T)}function y(v,M,T,R){let x=v.value,w=M+"_"+T;if(R[w]===void 0)return typeof x=="number"||typeof x=="boolean"?R[w]=x:ArrayBuffer.isView(x)?R[w]=x.slice():R[w]=x.clone(),!0;{let C=R[w];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return R[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(v){let M=v.uniforms,T=0,R=16;for(let w=0,C=M.length;w<C;w++){let L=Array.isArray(M[w])?M[w]:[M[w]];for(let B=0,z=L.length;B<z;B++){let N=L[B],O=Array.isArray(N.value)?N.value:[N.value];for(let q=0,X=O.length;q<X;q++){let nt=O[q],J=p(nt),tt=T%R,G=tt%J.boundary,st=tt+G;T+=G,st!==0&&R-st<J.storage&&(T+=R-st),N.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=T,T+=J.storage}}}let x=T%R;return x>0&&(T+=R-x),v.__size=T,v.__cache={},this}function p(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Bt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Bt("WebGLRenderer: Unsupported uniform value type.",v),M}function E(v){let M=v.target;M.removeEventListener("dispose",E);let T=a.indexOf(M.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function A(){for(let v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:A}}var i_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vn=null;function s_(){return Vn===null&&(Vn=new ua(i_,16,16,bi,An),Vn.name="DFG_LUT",Vn.minFilter=ze,Vn.magFilter=ze,Vn.wrapS=Nn,Vn.wrapT=Nn,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}var Co=class{constructor(t={}){let{canvas:e=Vh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=an}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=f,m=new Set([Wa,Ga,Va]),p=new Set([an,Tn,Ss,bs,Ha,ka]),E=new Uint32Array(4),A=new Int32Array(4),v=new U,M=null,T=null,R=[],x=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,L=!1,B=null,z=null,N=null,O=null;this._outputColorSpace=Ue;let q=0,X=0,nt=null,J=-1,tt=null,G=new Ee,st=new Ee,lt=null,pt=new Ht(0),St=0,wt=e.width,W=e.height,$=1,gt=null,Nt=null,xt=new Ee(0,0,wt,W),Ft=new Ee(0,0,wt,W),he=!1,It=new xs,Zt=!1,ie=!1,Vt=new ve,ae=new U,ct=new Ee,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ue=!1;function ee(){return nt===null?$:1}let P=n;function we(S,F){return e.getContext(S,F)}let $t,b,_,I,H,Z,ot,ut,K,j,et,dt,rt,at,bt,At,zt,D,ht,Q,ft,_t,it;try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",oe,!1),e.addEventListener("webglcontextcreationerror",xn,!1),P===null){let F="webgl2";if(P=we(F,S),P===null)throw we(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Lt()}catch(S){throw e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",xn,!1),Ot("WebGLRenderer: "+S.message),S}function Lt(){$t=new u0(P),$t.init(),ft=new Kg(P,$t),b=new e0(P,$t,t,ft),_=new Jg(P,$t),b.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),z=P.createFramebuffer(),N=P.createFramebuffer(),O=P.createFramebuffer(),I=new p0(P),H=new Ng,Z=new $g(P,$t,_,H,b,ft,I),ot=new h0(C),ut=new gf(P),_t=new jm(P,ut),K=new d0(P,ut,I,_t),j=new g0(P,K,ut,_t,I),D=new m0(P,b,Z),bt=new n0(H),et=new Ug(C,ot,$t,b,_t,bt),dt=new e_(C,H),rt=new Bg,at=new Gg($t),zt=new Qm(C,ot,_,j,g,l),At=new Zg(C,j,b),it=new n_(P,I,b,_),ht=new t0(P,$t,I),Q=new f0(P,$t,I),I.programs=et.programs,C.capabilities=b,C.extensions=$t,C.properties=H,C.renderLists=rt,C.shadowMap=At,C.state=_,C.info=I}y!==an&&(w=new x0(y,e.width,e.height,o,s,r));let Pt=new _c(C,P);this.xr=Pt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let S=$t.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=$t.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(S){S!==void 0&&($=S,this.setSize(wt,W,!1))},this.getSize=function(S){return S.set(wt,W)},this.setSize=function(S,F,Y=!0){if(Pt.isPresenting){Bt("WebGLRenderer: Can't change size while VR device is presenting.");return}wt=S,W=F,e.width=Math.floor(S*$),e.height=Math.floor(F*$),Y===!0&&(e.style.width=S+"px",e.style.height=F+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(wt*$,W*$).floor()},this.setDrawingBufferSize=function(S,F,Y){wt=S,W=F,$=Y,e.width=Math.floor(S*Y),e.height=Math.floor(F*Y),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(y===an){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){Bt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(G)},this.getViewport=function(S){return S.copy(xt)},this.setViewport=function(S,F,Y,k){S.isVector4?xt.set(S.x,S.y,S.z,S.w):xt.set(S,F,Y,k),_.viewport(G.copy(xt).multiplyScalar($).round())},this.getScissor=function(S){return S.copy(Ft)},this.setScissor=function(S,F,Y,k){S.isVector4?Ft.set(S.x,S.y,S.z,S.w):Ft.set(S,F,Y,k),_.scissor(st.copy(Ft).multiplyScalar($).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(S){_.setScissorTest(he=S)},this.setOpaqueSort=function(S){gt=S},this.setTransparentSort=function(S){Nt=S},this.getClearColor=function(S){return S.copy(zt.getClearColor())},this.setClearColor=function(){zt.setClearColor(...arguments)},this.getClearAlpha=function(){return zt.getClearAlpha()},this.setClearAlpha=function(){zt.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,Y=!0){let k=0;if(S){let V=!1;if(nt!==null){let Mt=nt.texture.format;V=m.has(Mt)}if(V){let Mt=nt.texture.type,Tt=p.has(Mt),vt=zt.getClearColor(),Rt=zt.getClearAlpha(),Dt=vt.r,Wt=vt.g,Jt=vt.b;Tt?(E[0]=Dt,E[1]=Wt,E[2]=Jt,E[3]=Rt,P.clearBufferuiv(P.COLOR,0,E)):(A[0]=Dt,A[1]=Wt,A[2]=Jt,A[3]=Rt,P.clearBufferiv(P.COLOR,0,A))}else k|=P.COLOR_BUFFER_BIT}F&&(k|=P.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(k|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&P.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),B=S},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",oe,!1),e.removeEventListener("webglcontextcreationerror",xn,!1),zt.dispose(),rt.dispose(),at.dispose(),H.dispose(),ot.dispose(),j.dispose(),_t.dispose(),it.dispose(),et.dispose(),Pt.dispose(),Pt.removeEventListener("sessionstart",wc),Pt.removeEventListener("sessionend",Ac),Ii.stop()};function me(S){S.preventDefault(),Xl("WebGLRenderer: Context Lost."),L=!0}function oe(){Xl("WebGLRenderer: Context Restored."),L=!1;let S=I.autoReset,F=At.enabled,Y=At.autoUpdate,k=At.needsUpdate,V=At.type;Lt(),I.autoReset=S,At.enabled=F,At.autoUpdate=Y,At.needsUpdate=k,At.type=V}function xn(S){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ln(S){let F=S.target;F.removeEventListener("dispose",Ln),id(F)}function id(S){sd(S),H.remove(S)}function sd(S){let F=H.get(S).programs;F!==void 0&&(F.forEach(function(Y){et.releaseProgram(Y)}),S.isShaderMaterial&&et.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,Y,k,V,Mt){F===null&&(F=se);let Tt=V.isMesh&&V.matrixWorld.determinantAffine()<0,vt=od(S,F,Y,k,V);_.setMaterial(k,Tt);let Rt=Y.index,Dt=1;if(k.wireframe===!0){if(Rt=K.getWireframeAttribute(Y),Rt===void 0)return;Dt=2}let Wt=Y.drawRange,Jt=Y.attributes.position,Ct=Wt.start*Dt,le=(Wt.start+Wt.count)*Dt;Mt!==null&&(Ct=Math.max(Ct,Mt.start*Dt),le=Math.min(le,(Mt.start+Mt.count)*Dt)),Rt!==null?(Ct=Math.max(Ct,0),le=Math.min(le,Rt.count)):Jt!=null&&(Ct=Math.max(Ct,0),le=Math.min(le,Jt.count));let Ne=le-Ct;if(Ne<0||Ne===1/0)return;_t.setup(V,k,vt,Y,Rt);let xe,pe=ht;if(Rt!==null&&(xe=ut.get(Rt),pe=Q,pe.setIndex(xe)),V.isMesh)k.wireframe===!0?(_.setLineWidth(k.wireframeLinewidth*ee()),pe.setMode(P.LINES)):pe.setMode(P.TRIANGLES);else if(V.isLine){let $e=k.linewidth;$e===void 0&&($e=1),_.setLineWidth($e*ee()),V.isLineSegments?pe.setMode(P.LINES):V.isLineLoop?pe.setMode(P.LINE_LOOP):pe.setMode(P.LINE_STRIP)}else V.isPoints?pe.setMode(P.POINTS):V.isSprite&&pe.setMode(P.TRIANGLES);if(V.isBatchedMesh)if($t.get("WEBGL_multi_draw"))pe.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let $e=V._multiDrawStarts,Et=V._multiDrawCounts,en=V._multiDrawCount,ne=Rt?ut.get(Rt).bytesPerElement:1,dn=H.get(k).currentProgram.getUniforms();for(let Dn=0;Dn<en;Dn++)dn.setValue(P,"_gl_DrawID",Dn),pe.render($e[Dn]/ne,Et[Dn])}else if(V.isInstancedMesh)pe.renderInstances(Ct,Ne,V.count);else if(Y.isInstancedBufferGeometry){let $e=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Et=Math.min(Y.instanceCount,$e);pe.renderInstances(Ct,Ne,Et)}else pe.render(Ct,Ne)};function Tc(S,F,Y,k){B!==null&&S.isNodeMaterial&&B.setObject(k,S),Zt===!0&&bt.setState(S,Y,!1),S.transparent===!0&&S.side===_e&&S.forceSinglePass===!1?(S.side=Ze,S.needsUpdate=!0,Cr(S,F,k),S.side=vi,S.needsUpdate=!0,Cr(S,F,k),S.side=_e):Cr(S,F,k)}this.compile=function(S,F,Y=null){Y===null&&(Y=S),B!==null&&B.renderStart(S,F,Y),T=at.get(Y),T.init(F),x.push(T),Y.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),S!==Y&&S.traverseVisible(function(V){V.isLight&&V.layers.test(F.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),ie=this.localClippingEnabled,Zt=bt.init(this.clippingPlanes,ie),Zt===!0&&bt.setGlobalState(this.clippingPlanes,F),B!==null&&At.render(T.state.shadowsArray,Y,F);let k=new Set;return S.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let Mt=V.material;if(Mt)if(Array.isArray(Mt))for(let Tt=0;Tt<Mt.length;Tt++){let vt=Mt[Tt];Tc(vt,Y,F,V),k.add(vt)}else Tc(Mt,Y,F,V),k.add(Mt)}),T=x.pop(),B!==null&&B.renderEnd(),k},this.compileAsync=function(S,F,Y=null){let k=this.compile(S,F,Y);return new Promise(V=>{function Mt(){if(k.forEach(function(Tt){let Rt=H.get(Tt).currentProgram;(Rt===void 0||Rt.isReady())&&k.delete(Tt)}),k.size===0){V(S);return}setTimeout(Mt,10)}$t.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Vo=null;function rd(S){Vo&&Vo(S)}function wc(){Ii.stop()}function Ac(){Ii.start()}let Ii=new _u;Ii.setAnimationLoop(rd),typeof self!="undefined"&&Ii.setContext(self),this.setAnimationLoop=function(S){Vo=S,Pt.setAnimationLoop(S),S===null?Ii.stop():Ii.start()},Pt.addEventListener("sessionstart",wc),Pt.addEventListener("sessionend",Ac),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;B!==null&&B.renderStart(S,F);let Y=Pt.enabled===!0&&Pt.isPresenting===!0,k=w!==null&&(nt===null||Y)&&w.begin(C,nt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Pt.enabled===!0&&Pt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Pt.cameraAutoUpdate===!0&&Pt.updateCamera(F),F=Pt.getCamera()),S.isScene===!0&&S.onBeforeRender(C,S,F,nt),T=at.get(S,x.length),T.init(F),T.state.textureUnits=Z.getTextureUnits(),x.push(T),Vt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),It.setFromProjectionMatrix(Vt,bn,F.reversedDepth),ie=this.localClippingEnabled,Zt=bt.init(this.clippingPlanes,ie),M=rt.get(S,R.length),M.init(),R.push(M),Pt.enabled===!0&&Pt.isPresenting===!0){let Tt=C.xr.getDepthSensingMesh();Tt!==null&&Go(Tt,F,-1/0,C.sortObjects)}Go(S,F,0,C.sortObjects),M.finish(),B!==null&&B.updateLights(T.state.lightsArray),C.sortObjects===!0&&M.sort(gt,Nt),ue=Pt.enabled===!1||Pt.isPresenting===!1||Pt.hasDepthSensing()===!1,ue&&zt.addToRenderList(M,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Zt===!0&&bt.beginShadows();let V=T.state.shadowsArray;if(At.render(V,S,F),Zt===!0&&bt.endShadows(),(k&&w.hasRenderPass())===!1){let Tt=M.opaque,vt=M.transmissive;if(T.setupLights(),F.isArrayCamera){let Rt=F.cameras;if(vt.length>0)for(let Dt=0,Wt=Rt.length;Dt<Wt;Dt++){let Jt=Rt[Dt];Cc(Tt,vt,S,Jt)}ue&&zt.render(S);for(let Dt=0,Wt=Rt.length;Dt<Wt;Dt++){let Jt=Rt[Dt];Rc(M,S,Jt,Jt.viewport)}}else vt.length>0&&Cc(Tt,vt,S,F),ue&&zt.render(S),Rc(M,S,F)}nt!==null&&X===0&&(Z.updateMultisampleRenderTarget(nt),Z.updateRenderTargetMipmap(nt)),k&&w.end(C),S.isScene===!0&&S.onAfterRender(C,S,F),_t.resetDefaultState(),J=-1,tt=null,x.pop(),x.length>0?(T=x[x.length-1],Z.setTextureUnits(T.state.textureUnits),Zt===!0&&bt.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,B!==null&&B.renderEnd()};function Go(S,F,Y,k){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)Y=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLightProbeGrid)T.pushLightProbeGrid(S);else if(S.isLight)T.pushLight(S),S.castShadow&&T.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(It)){k&&ct.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Vt);let Tt=j.update(S),vt=S.material;vt.visible&&M.push(S,Tt,vt,Y,ct.z,null,F)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(It))){let Tt=j.update(S),vt=S.material;if(k&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),ct.copy(S.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),ct.copy(Tt.boundingSphere.center)),ct.applyMatrix4(S.matrixWorld).applyMatrix4(Vt)),Array.isArray(vt)){let Rt=Tt.groups;for(let Dt=0,Wt=Rt.length;Dt<Wt;Dt++){let Jt=Rt[Dt],Ct=vt[Jt.materialIndex];Ct&&Ct.visible&&M.push(S,Tt,Ct,Y,ct.z,Jt,F)}}else vt.visible&&M.push(S,Tt,vt,Y,ct.z,null,F)}}let Mt=S.children;for(let Tt=0,vt=Mt.length;Tt<vt;Tt++)Go(Mt[Tt],F,Y,k)}function Rc(S,F,Y,k){let{opaque:V,transmissive:Mt,transparent:Tt}=S;T.setupLightsView(Y),Zt===!0&&bt.setGlobalState(C.clippingPlanes,Y),k&&_.viewport(G.copy(k)),V.length>0&&Rr(V,F,Y),Mt.length>0&&Rr(Mt,F,Y),Tt.length>0&&Rr(Tt,F,Y),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Cc(S,F,Y,k){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[k.id]===void 0){let Ct=$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[k.id]=new rn(1,1,{generateMipmaps:!0,type:Ct?An:an,minFilter:gn,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Kt.workingColorSpace})}let Mt=T.state.transmissionRenderTarget[k.id],Tt=k.viewport||G;Mt.setSize(Tt.z*C.transmissionResolutionScale,Tt.w*C.transmissionResolutionScale);let vt=C.getRenderTarget(),Rt=C.getActiveCubeFace(),Dt=C.getActiveMipmapLevel();C.setRenderTarget(Mt),C.getClearColor(pt),St=C.getClearAlpha(),St<1&&C.setClearColor(16777215,.5),C.clear(),ue&&zt.render(Y);let Wt=C.toneMapping;C.toneMapping=En;let Jt=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),T.setupLightsView(k),Zt===!0&&bt.setGlobalState(C.clippingPlanes,k),Rr(S,Y,k),Z.updateMultisampleRenderTarget(Mt),Z.updateRenderTargetMipmap(Mt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let le=0,Ne=F.length;le<Ne;le++){let xe=F[le],{object:pe,geometry:$e,material:Et,group:en}=xe;if(Et.side===_e&&pe.layers.test(k.layers)){let ne=Et.side;Et.side=Ze,Et.needsUpdate=!0,Pc(pe,Y,k,$e,Et,en),Et.side=ne,Et.needsUpdate=!0,Ct=!0}}Ct===!0&&(Z.updateMultisampleRenderTarget(Mt),Z.updateRenderTargetMipmap(Mt))}C.setRenderTarget(vt,Rt,Dt),C.setClearColor(pt,St),Jt!==void 0&&(k.viewport=Jt),C.toneMapping=Wt}function Rr(S,F,Y){let k=F.isScene===!0?F.overrideMaterial:null;for(let V=0,Mt=S.length;V<Mt;V++){let Tt=S[V],{object:vt,geometry:Rt,group:Dt}=Tt,Wt=Tt.material;Wt.allowOverride===!0&&k!==null&&(Wt=k),vt.layers.test(Y.layers)&&Pc(vt,F,Y,Rt,Wt,Dt)}}function Pc(S,F,Y,k,V,Mt){B!==null&&V.isNodeMaterial&&B.setObject(S,V),S.onBeforeRender(C,F,Y,k,V,Mt),S.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),V.onBeforeRender(C,F,Y,k,S,Mt),V.transparent===!0&&V.side===_e&&V.forceSinglePass===!1?(V.side=Ze,V.needsUpdate=!0,C.renderBufferDirect(Y,F,k,V,S,Mt),V.side=vi,V.needsUpdate=!0,C.renderBufferDirect(Y,F,k,V,S,Mt),V.side=_e):C.renderBufferDirect(Y,F,k,V,S,Mt),S.onAfterRender(C,F,Y,k,V,Mt)}function Cr(S,F,Y){F.isScene!==!0&&(F=se);let k=H.get(S),V=T.state.lights,Mt=T.state.shadowsArray,Tt=V.state.version,vt=et.getParameters(S,V.state,Mt,F,Y,T.state.lightProbeGridArray),Rt=et.getProgramCacheKey(vt),Dt=k.programs;k.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,k.fog=F.fog;let Wt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;k.envMap=ot.get(S.envMap||k.environment,Wt),k.envMapRotation=k.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,Dt===void 0&&(S.addEventListener("dispose",Ln),Dt=new Map,k.programs=Dt);let Jt=Dt.get(Rt);if(Jt!==void 0){if(k.currentProgram===Jt&&k.lightsStateVersion===Tt)return Lc(S,vt),Jt}else vt.uniforms=et.getUniforms(S),B!==null&&S.isNodeMaterial&&B.build(S,Y,vt),S.onBeforeCompile(vt,C),Jt=et.acquireProgram(vt,Rt),Dt.set(Rt,Jt),k.uniforms=vt.uniforms;let Ct=k.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Ct.clippingPlanes=bt.uniform),Lc(S,vt),k.needsLights=cd(S),k.lightsStateVersion=Tt,k.needsLights&&(Ct.ambientLightColor.value=V.state.ambient,Ct.lightProbe.value=V.state.probe,Ct.sunLights.value=V.state.sun,Ct.sunLightShadows.value=V.state.sunShadow,Ct.directionalLights.value=V.state.directional,Ct.directionalLightShadows.value=V.state.directionalShadow,Ct.spotLights.value=V.state.spot,Ct.spotLightShadows.value=V.state.spotShadow,Ct.rectAreaLights.value=V.state.rectArea,Ct.ltc_1.value=V.state.rectAreaLTC1,Ct.ltc_2.value=V.state.rectAreaLTC2,Ct.pointLights.value=V.state.point,Ct.pointLightShadows.value=V.state.pointShadow,Ct.hemisphereLights.value=V.state.hemi,Ct.sunShadowMatrix.value=V.state.sunShadowMatrix,Ct.sunShadowCascade.value=V.state.sunShadowCascade,Ct.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ct.spotLightMatrix.value=V.state.spotLightMatrix,Ct.spotLightMap.value=V.state.spotLightMap,Ct.pointShadowMatrix.value=V.state.pointShadowMatrix),k.lightProbeGrid=T.state.lightProbeGridArray.length>0,k.currentProgram=Jt,k.uniformsList=null,Jt}function Ic(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=As.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Lc(S,F){let Y=H.get(S);Y.outputColorSpace=F.outputColorSpace,Y.batching=F.batching,Y.batchingColor=F.batchingColor,Y.instancing=F.instancing,Y.instancingColor=F.instancingColor,Y.instancingMorph=F.instancingMorph,Y.skinning=F.skinning,Y.morphTargets=F.morphTargets,Y.morphNormals=F.morphNormals,Y.morphColors=F.morphColors,Y.morphTargetsCount=F.morphTargetsCount,Y.numClippingPlanes=F.numClippingPlanes,Y.numIntersection=F.numClipIntersection,Y.vertexAlphas=F.vertexAlphas,Y.vertexTangents=F.vertexTangents,Y.toneMapping=F.toneMapping}function ad(S,F){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;v.setFromMatrixPosition(F.matrixWorld);for(let Y=0,k=S.length;Y<k;Y++){let V=S[Y];if(V.texture!==null&&V.boundingBox.containsPoint(v))return V}return null}function od(S,F,Y,k,V){F.isScene!==!0&&(F=se),Z.resetTextureUnits();let Mt=F.fog,Tt=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?F.environment:null,vt=nt===null?C.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Kt.workingColorSpace,Rt=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Dt=ot.get(k.envMap||Tt,Rt),Wt=k.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Jt=!!Y.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ct=!!Y.morphAttributes.position,le=!!Y.morphAttributes.normal,Ne=!!Y.morphAttributes.color,xe=En;k.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(xe=C.toneMapping);let pe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,$e=pe!==void 0?pe.length:0,Et=H.get(k),en=T.state.lights;if(Zt===!0&&(ie===!0||S!==tt)){let ge=S===tt&&k.id===J;bt.setState(k,S,ge)}let ne=!1;k.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==en.state.version||Et.outputColorSpace!==vt||V.isBatchedMesh&&Et.batching===!1||!V.isBatchedMesh&&Et.batching===!0||V.isBatchedMesh&&Et.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Et.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Et.instancing===!1||!V.isInstancedMesh&&Et.instancing===!0||V.isSkinnedMesh&&Et.skinning===!1||!V.isSkinnedMesh&&Et.skinning===!0||V.isInstancedMesh&&Et.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Et.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Et.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Et.instancingMorph===!1&&V.morphTexture!==null||Et.envMap!==Dt||k.fog===!0&&Et.fog!==Mt||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==bt.numPlanes||Et.numIntersection!==bt.numIntersection)||Et.vertexAlphas!==Wt||Et.vertexTangents!==Jt||Et.morphTargets!==Ct||Et.morphNormals!==le||Et.morphColors!==Ne||Et.toneMapping!==xe||Et.morphTargetsCount!==$e||!!Et.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ne=!0):(ne=!0,Et.__version=k.version);let dn=Et.currentProgram;ne===!0&&(dn=Cr(k,F,V),B&&k.isNodeMaterial&&B.onUpdateProgram(k,dn,Et));let Dn=!1,ni=!1,$i=!1,de=dn.getUniforms(),De=Et.uniforms;if(_.useProgram(dn.program)&&(Dn=!0,ni=!0,$i=!0),k.id!==J&&(J=k.id,ni=!0),Et.needsLights){let ge=ad(T.state.lightProbeGridArray,V);Et.lightProbeGrid!==ge&&(Et.lightProbeGrid=ge,ni=!0)}if(Dn||tt!==S){_.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),de.setValue(P,"projectionMatrix",S.projectionMatrix),de.setValue(P,"viewMatrix",S.matrixWorldInverse);let si=de.map.cameraPosition;si!==void 0&&si.setValue(P,ae.setFromMatrixPosition(S.matrixWorld)),b.logarithmicDepthBuffer&&de.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&de.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),tt!==S&&(tt=S,ni=!0,$i=!0)}if(Et.needsLights&&(en.state.sunShadowMap.length>0&&de.setValue(P,"sunShadowMap",en.state.sunShadowMap,Z),en.state.directionalShadowMap.length>0&&de.setValue(P,"directionalShadowMap",en.state.directionalShadowMap,Z),en.state.spotShadowMap.length>0&&de.setValue(P,"spotShadowMap",en.state.spotShadowMap,Z),en.state.pointShadowMap.length>0&&de.setValue(P,"pointShadowMap",en.state.pointShadowMap,Z)),V.isSkinnedMesh){de.setOptional(P,V,"bindMatrix"),de.setOptional(P,V,"bindMatrixInverse");let ge=V.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),de.setValue(P,"boneTexture",ge.boneTexture,Z))}V.isBatchedMesh&&(de.setOptional(P,V,"batchingTexture"),de.setValue(P,"batchingTexture",V._matricesTexture,Z),de.setOptional(P,V,"batchingIdTexture"),de.setValue(P,"batchingIdTexture",V._indirectTexture,Z),de.setOptional(P,V,"batchingColorTexture"),V._colorsTexture!==null&&de.setValue(P,"batchingColorTexture",V._colorsTexture,Z));let ii=Y.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&D.update(V,Y,dn),(ni||Et.receiveShadow!==V.receiveShadow)&&(Et.receiveShadow=V.receiveShadow,de.setValue(P,"receiveShadow",V.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&F.environment!==null&&(De.envMapIntensity.value=F.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=s_()),ni){if(de.setValue(P,"toneMappingExposure",C.toneMappingExposure),Et.needsLights&&ld(De,$i),Mt&&k.fog===!0&&dt.refreshFogUniforms(De,Mt),dt.refreshMaterialUniforms(De,k,$,W,T.state.transmissionRenderTarget[S.id]),Et.needsLights&&Et.lightProbeGrid){let ge=Et.lightProbeGrid;De.probesSH.value=ge.texture,De.probesMin.value.copy(ge.boundingBox.min),De.probesMax.value.copy(ge.boundingBox.max),De.probesResolution.value.copy(ge.resolution)}As.upload(P,Ic(Et),De,Z)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(As.upload(P,Ic(Et),De,Z),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&de.setValue(P,"center",V.center),de.setValue(P,"modelViewMatrix",V.modelViewMatrix),de.setValue(P,"normalMatrix",V.normalMatrix),de.setValue(P,"modelMatrix",V.matrixWorld),k.uniformsGroups!==void 0){let ge=k.uniformsGroups;for(let si=0,Ki=ge.length;si<Ki;si++){let Uc=ge[si];it.update(Uc,dn),it.bind(Uc,dn)}}return dn}function ld(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.sunLights.needsUpdate=F,S.sunLightShadows.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function cd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(S,F,Y){let k=H.get(S);k.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),H.get(S.texture).__webglTexture=F,H.get(S.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Y,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){let Y=H.get(S);Y.__webglFramebuffer=F,Y.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,Y=0){nt=S,q=F,X=Y;let k=null,V=!1,Mt=!1;if(S){let vt=H.get(S);if(vt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(P.FRAMEBUFFER,vt.__webglFramebuffer),G.copy(S.viewport),st.copy(S.scissor),lt=S.scissorTest,_.viewport(G),_.scissor(st),_.setScissorTest(lt),J=-1;return}else if(vt.__webglFramebuffer===void 0)Z.setupRenderTarget(S);else if(vt.__hasExternalTextures)Z.rebindTextures(S,H.get(S.texture).__webglTexture,H.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Wt=S.depthTexture;if(vt.__boundDepthTexture!==Wt){if(Wt!==null&&H.has(Wt)&&(S.width!==Wt.image.width||S.height!==Wt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(S)}}let Rt=S.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture||Rt.isCompressedArrayTexture)&&(Mt=!0);let Dt=H.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Dt[F])?k=Dt[F][Y]:k=Dt[F],V=!0):S.samples>0&&Z.useMultisampledRTT(S)===!1?k=H.get(S).__webglMultisampledFramebuffer:Array.isArray(Dt)?k=Dt[Y]:k=Dt,G.copy(S.viewport),st.copy(S.scissor),lt=S.scissorTest}else G.copy(xt).multiplyScalar($).floor(),st.copy(Ft).multiplyScalar($).floor(),lt=he;if(Y!==0&&(k=z),_.bindFramebuffer(P.FRAMEBUFFER,k)&&_.drawBuffers(S,k),_.viewport(G),_.scissor(st),_.setScissorTest(lt),V){let vt=H.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+F,vt.__webglTexture,Y)}else if(Mt){let vt=F;for(let Rt=0;Rt<S.textures.length;Rt++){let Dt=H.get(S.textures[Rt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Rt,Dt.__webglTexture,Y,vt)}}else if(S!==null&&Y!==0){let vt=H.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,vt.__webglTexture,Y)}J=-1};function Dc(S){let F=H.get(S);return(F.__readFormat!==S.format||F.__readType!==S.type)&&(F.__readFormat=S.format,F.__readType=S.type,F.__formatReadable=b.textureFormatReadable(S.format),F.__typeReadable=b.textureTypeReadable(S.type)),F}this.readRenderTargetPixels=function(S,F,Y,k,V,Mt,Tt,vt=0){if(!(S&&S.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt){_.bindFramebuffer(P.FRAMEBUFFER,Rt);try{let Dt=S.textures[vt],Wt=Dt.format,Jt=Dt.type;S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+vt);let Ct=Dc(Dt);if(Ct.__formatReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=S.width-k&&Y>=0&&Y<=S.height-V&&P.readPixels(F,Y,k,V,ft.convert(Wt),ft.convert(Jt),Mt)}finally{let Dt=nt!==null?H.get(nt).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(S,F,Y,k,V,Mt,Tt,vt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=H.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Tt!==void 0&&(Rt=Rt[Tt]),Rt)if(F>=0&&F<=S.width-k&&Y>=0&&Y<=S.height-V){_.bindFramebuffer(P.FRAMEBUFFER,Rt);let Dt=S.textures[vt],Wt=Dt.format,Jt=Dt.type;S.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+vt);let Ct=Dc(Dt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let le=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,le),P.bufferData(P.PIXEL_PACK_BUFFER,Mt.byteLength,P.STREAM_READ),P.readPixels(F,Y,k,V,ft.convert(Wt),ft.convert(Jt),0),P.bindBuffer(P.PIXEL_PACK_BUFFER,null);let Ne=nt!==null?H.get(nt).__webglFramebuffer:null;_.bindFramebuffer(P.FRAMEBUFFER,Ne);let xe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Wh(P,xe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,le),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Mt),P.bindBuffer(P.PIXEL_PACK_BUFFER,null),P.deleteBuffer(le),P.deleteSync(xe),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(S,F=null,Y=0){let k=Math.pow(2,-Y),V=Math.floor(S.image.width*k),Mt=Math.floor(S.image.height*k),Tt=F!==null?F.x:0,vt=F!==null?F.y:0;Z.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,Y,0,0,Tt,vt,V,Mt),_.unbindTexture()},this.copyTextureToTexture=function(S,F,Y=null,k=null,V=0,Mt=0){let Tt,vt,Rt,Dt,Wt,Jt,Ct,le,Ne,xe=S.isCompressedTexture?S.mipmaps[Mt]:S.image;if(Y!==null)Tt=Y.max.x-Y.min.x,vt=Y.max.y-Y.min.y,Rt=Y.isBox3?Y.max.z-Y.min.z:1,Dt=Y.min.x,Wt=Y.min.y,Jt=Y.isBox3?Y.min.z:0;else{let De=Math.pow(2,-V);Tt=Math.floor(xe.width*De),vt=Math.floor(xe.height*De),S.isDataArrayTexture?Rt=xe.depth:S.isData3DTexture?Rt=Math.floor(xe.depth*De):Rt=1,Dt=0,Wt=0,Jt=0}k!==null?(Ct=k.x,le=k.y,Ne=k.z):(Ct=0,le=0,Ne=0);let pe=ft.convert(F.format),$e=ft.convert(F.type),Et;F.isData3DTexture?(Z.setTexture3D(F,0),Et=P.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Z.setTexture2DArray(F,0),Et=P.TEXTURE_2D_ARRAY):(Z.setTexture2D(F,0),Et=P.TEXTURE_2D),_.activeTexture(P.TEXTURE0),_.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,F.flipY),_.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),_.pixelStorei(P.UNPACK_ALIGNMENT,F.unpackAlignment);let en=_.getParameter(P.UNPACK_ROW_LENGTH),ne=_.getParameter(P.UNPACK_IMAGE_HEIGHT),dn=_.getParameter(P.UNPACK_SKIP_PIXELS),Dn=_.getParameter(P.UNPACK_SKIP_ROWS),ni=_.getParameter(P.UNPACK_SKIP_IMAGES);_.pixelStorei(P.UNPACK_ROW_LENGTH,xe.width),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xe.height),_.pixelStorei(P.UNPACK_SKIP_PIXELS,Dt),_.pixelStorei(P.UNPACK_SKIP_ROWS,Wt),_.pixelStorei(P.UNPACK_SKIP_IMAGES,Jt);let $i=S.isDataArrayTexture||S.isData3DTexture,de=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){let De=H.get(S),ii=H.get(F),ge=H.get(De.__renderTarget),si=H.get(ii.__renderTarget);_.bindFramebuffer(P.READ_FRAMEBUFFER,ge.__webglFramebuffer),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,si.__webglFramebuffer);for(let Ki=0;Ki<Rt;Ki++)$i&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,H.get(S).__webglTexture,V,Jt+Ki),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,H.get(F).__webglTexture,Mt,Ne+Ki)),P.blitFramebuffer(Dt,Wt,Tt,vt,Ct,le,Tt,vt,P.DEPTH_BUFFER_BIT,P.NEAREST);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(V!==0||S.isRenderTargetTexture||H.has(S)){let De=H.get(S),ii=H.get(F);_.bindFramebuffer(P.READ_FRAMEBUFFER,N),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,O);for(let ge=0;ge<Rt;ge++)$i?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,De.__webglTexture,V,Jt+ge):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,De.__webglTexture,V),de?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ii.__webglTexture,Mt,Ne+ge):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ii.__webglTexture,Mt),V!==0?P.blitFramebuffer(Dt,Wt,Tt,vt,Ct,le,Tt,vt,P.COLOR_BUFFER_BIT,P.NEAREST):de?P.copyTexSubImage3D(Et,Mt,Ct,le,Ne+ge,Dt,Wt,Tt,vt):P.copyTexSubImage2D(Et,Mt,Ct,le,Dt,Wt,Tt,vt);_.bindFramebuffer(P.READ_FRAMEBUFFER,null),_.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else de?S.isDataTexture||S.isData3DTexture?P.texSubImage3D(Et,Mt,Ct,le,Ne,Tt,vt,Rt,pe,$e,xe.data):F.isCompressedArrayTexture?P.compressedTexSubImage3D(Et,Mt,Ct,le,Ne,Tt,vt,Rt,pe,xe.data):P.texSubImage3D(Et,Mt,Ct,le,Ne,Tt,vt,Rt,pe,$e,xe):S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Mt,Ct,le,Tt,vt,pe,$e,xe.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Mt,Ct,le,xe.width,xe.height,pe,xe.data):P.texSubImage2D(P.TEXTURE_2D,Mt,Ct,le,Tt,vt,pe,$e,xe);_.pixelStorei(P.UNPACK_ROW_LENGTH,en),_.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ne),_.pixelStorei(P.UNPACK_SKIP_PIXELS,dn),_.pixelStorei(P.UNPACK_SKIP_ROWS,Dn),_.pixelStorei(P.UNPACK_SKIP_IMAGES,ni),Mt===0&&F.generateMipmaps&&P.generateMipmap(Et),_.unbindTexture()},this.initRenderTarget=function(S){H.get(S).__webglFramebuffer===void 0&&Z.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Z.setTextureCube(S,0):S.isData3DTexture?Z.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Z.setTexture2DArray(S,0):Z.setTexture2D(S,0),_.unbindTexture()},this.resetState=function(){q=0,X=0,nt=null,_.reset(),_t.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Kt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Kt._getUnpackColorSpace()}};var Se={goldPrimary:"#D4A017",goldBright:"#F5C542",goldShadow:"#8C6A1D",greenMain:"#1B7A4B",greenDeep:"#0E4A2C",leatherBrown:"#5C3A21",furWhite:"#F5F0E6",furGinger:"#C96A2B",furPatchShadow:"#A24E1B",nosePink:"#E8A0A0",eyeAmber:"#FFB84D",steelBlade:"#C0C6CC",gemEmerald:"#34D399",crimsonMain:"#1B7A4B",crimsonDeep:"#0E4A2C",gemRuby:"#34D399"},Re={redMain:"#A31621",redBright:"#C0392B",redDeep:"#7A0C14",silverMain:"#C9D1D9",silverBright:"#E8EDF2",silverShadow:"#8F98A3",clothWhite:"#F2EFE9",furCharcoal:"#2E2E38",furSilverStripe:"#9AA0AA",furBelly:"#B9BFC7",eyeJade:"#FF8A80",noseBlack:"#1A1A22",gemRuby:"#C22240",steelBlade:"#C0C6CC",emeraldMain:"#A31621",emeraldBright:"#C0392B",emeraldDeep:"#7A0C14",gemEmerald:"#C22240"},Ei={BUY:"#26A69A",BUY_BRIGHT:"#35D07F",BUY_DEEP:"#0E4A2C",SELL:"#EF5350",SELL_BRIGHT:"#FF8A80",SELL_DEEP:"#7A0C14"},re={skyZenith:"#05060F",skyHorizon:"#0D1030",fog:"#1A1626",moonBtc:"#F7931A",moonHalo:"#FFB84D",moonSymbol:"#7A4A08",stoneWall:"#B98A5A",stoneShadow:"#6E523A",stonePole:"#8E8E80",tileBlue:"#1F5FA8",tileWhite:"#F2EFE9",tileEmerald:"#12755F",floorBase:"#D9CDB4",floorGrout:"#6E5A42",torchFlame:"#FF9D45",torchGlow:"#FFC97A",iron:"#3A3A40",flagUp:"#26A69A",flagDown:"#EF5350",ropeHemp:"#A67B4F",ropeFiber:"#8A6238",frieze:"#C9B389"},Mr={gold:{metalness:.85,roughness:.35},goldBright:{metalness:.85,roughness:.28},steel:{metalness:.9,roughness:.25},silver:{metalness:.85,roughness:.3},cloth:{metalness:0,roughness:.9},fur:{metalness:0,roughness:.95}},te={spanHalf:10,ropeY:3.2,ropeRadius:.065,ropeSegments:24,restSagOne:.34,restSagTwo:.5,damping:.93,swayClamp:.12,impulseScale:.16,ropeSmooth:20,poleClearance:1.5,catHeight:1.3,minBodyGap:.78,minHeadCentre:.8};var Lo=4;function Eu(i){Lo=Math.max(1,Math.min(16,Math.round(i)||1))}function Oe(i,{repeatX:t=1,repeatY:e=1,srgb:n=!0}={}){let s=new cn(i);return n&&(s.colorSpace=Ue),s.wrapS=s.wrapT=ui,s.repeat.set(t,e),s.generateMipmaps=!0,s.minFilter=gn,s.magFilter=ze,s.anisotropy=Lo,s}function Ti(i,t){let e=document.createElement("canvas");e.width=e.height=i;let n=e.getContext("2d");return n.fillStyle=t,n.fillRect(0,0,i,i),{c:e,g:n,size:i}}function ei(i){let t=i|0||1;return()=>(t=t*16807%2147483647,t%1e5/1e5)}function Cn(i,t=1){let e=document.createElement("canvas");e.width=i.width,e.height=i.height;let n=e.getContext("2d");n.drawImage(i,0,0);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o+=4){let l=r[o]*.299+r[o+1]*.587+r[o+2]*.114,c=Math.max(0,Math.min(255,128+(l-128)*t));r[o]=r[o+1]=r[o+2]=c}n.putImageData(s,0,0);let a=new cn(e);return a.wrapS=a.wrapT=ui,a.generateMipmaps=!0,a.minFilter=gn,a.anisotropy=Lo,a}function r_(i,t=.45,e=.98){let n=document.createElement("canvas");n.width=i.width,n.height=i.height;let s=n.getContext("2d");s.drawImage(i,0,0);let r=s.getImageData(0,0,n.width,n.height),a=r.data;for(let l=0;l<a.length;l+=4){let c=(a[l]*.299+a[l+1]*.587+a[l+2]*.114)/255,h=Math.round(255*(e-(e-t)*c));a[l]=a[l+1]=a[l+2]=h}s.putImageData(r,0,0);let o=new cn(n);return o.wrapS=o.wrapT=ui,o.generateMipmaps=!0,o.minFilter=gn,o.anisotropy=Lo,o}function a_({seed:i=3,stripes:t=0,blotch:e=0,grain:n=.1,base:s="#ffffff",dark:r="#b9b9c4"}={}){let{c:a,g:o,size:l}=Ti(256,s),c=ei(i);if(e){for(let d=0;d<e;d++){let u=c()*l,f=c()*l,g=24+c()*46,y=o.createRadialGradient(u,f,g*.15,u,f,g);y.addColorStop(0,r),y.addColorStop(.7,r),y.addColorStop(1,"rgba(255,255,255,0)"),o.globalAlpha=.45+c()*.25,o.fillStyle=y,o.beginPath(),o.arc(u,f,g,0,Math.PI*2),o.fill()}o.globalAlpha=1}if(t){for(let d=0;d<t;d++){let u=(d+.5)*(l/t)+(c()-.5)*14,f=8+c()*10,g=-24-c()*30;for(;g<l+24;){let y=c()<.29?6+c()*22:0;g+=y;let m=16+c()*40,p=l/t*(.22+c()*.34),E=u+Math.sin(g*.035+d*1.7)*f;o.fillStyle=r,o.globalAlpha=.34+c()*.3,o.beginPath(),o.ellipse(g+m/2,E,m/2+6,p/2,(c()-.5)*.22,0,Math.PI*2),o.fill(),g+=m}}o.globalAlpha=1}let h=ei(i*7+11);for(let d=0;d<1100;d++){let u=h()*l,f=h()*l,g=4+h()*9,y=h()*Math.PI*2;o.strokeStyle=h()<.5?"rgba(255,255,255,0.42)":"rgba(96,90,102,0.34)",o.lineWidth=1.1+h()*1.6,o.beginPath(),o.moveTo(u,f),o.lineTo(u+Math.cos(y)*g,f+Math.sin(y)*g),o.stroke()}for(let d=0;d<90;d++){let u=h()*l,f=h()*l,g=5+h()*13,y=o.createRadialGradient(u,f,0,u,f,g),m=h()<.5;y.addColorStop(0,m?"rgba(255,255,255,0.30)":"rgba(70,64,76,0.26)"),y.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=y,o.beginPath(),o.arc(u,f,g,0,Math.PI*2),o.fill()}return a}function Sr(i={}){let t=a_(i),e=Oe(t,{repeatX:i.repeatX||1.2,repeatY:i.repeatY||1.2,srgb:!0}),n=Cn(t,.8);return n.repeat.copy(e.repeat),{map:e,bump:n}}function o_({seed:i=5,base:t="#ffffff",thread:e="rgba(64,54,44,0.46)",weave:n=10}={}){let{c:s,g:r,size:a}=Ti(128,t);r.strokeStyle=e,r.lineWidth=2;for(let l=0;l<a;l+=n)r.beginPath(),r.moveTo(l,0),r.lineTo(l,a),r.stroke(),r.beginPath(),r.moveTo(0,l),r.lineTo(a,l),r.stroke();let o=ei(i);for(let l=-a;l<a;l+=n)r.strokeStyle="rgba(255,255,255,0.24)",r.beginPath(),r.moveTo(l,0),r.lineTo(l+a,a),r.stroke();for(let l=0;l<420;l++)r.fillStyle=o()<.5?"rgba(255,255,255,0.20)":"rgba(40,34,30,0.20)",r.fillRect(o()*a,o()*a,3,2);return s}function Xi(i={}){let t=o_(i),e=Oe(t,{repeatX:i.repeatX||3,repeatY:i.repeatY||3,srgb:!0}),n=Cn(t,.9);return n.repeat.copy(e.repeat),{map:e,bump:n}}function l_({seed:i=9,base:t="#ffffff",streak:e=.22,scratches:n=260}={}){let{c:s,g:r,size:a}=Ti(128,t),o=ei(i);for(let l=0;l<n;l++){let c=o()*a,h=e*(.3+o());r.strokeStyle=o()<.5?`rgba(255,255,255,${h})`:`rgba(60,66,74,${h})`,r.lineWidth=.6+o()*1.3,r.beginPath(),r.moveTo(0,c),r.bezierCurveTo(a*.3,c+(o()-.5)*3,a*.7,c+(o()-.5)*3,a,c+(o()-.5)*2),r.stroke()}for(let l=0;l<5;l++){r.strokeStyle="rgba(40,44,52,0.35)",r.lineWidth=1.4;let c=o()*a;r.beginPath(),r.moveTo(o()*a*.5,c),r.lineTo(a*(.6+o()*.4),c+(o()-.5)*4),r.stroke()}return s}function wi(i={}){let t=l_(i),e=Oe(t,{repeatX:i.repeatX||1,repeatY:i.repeatY||1,srgb:!0}),n=Cn(t,.35);return n.repeat.copy(e.repeat),{map:e,bump:n}}function c_({seed:i=13,base:t="#ffffff"}={}){let{c:e,g:n,size:s}=Ti(128,t),r=ei(i);for(let a=0;a<900;a++){let o=r()*s,l=r()*s,c=1+r()*3.4;n.fillStyle=r()<.5?"rgba(255,255,255,0.16)":"rgba(50,34,22,0.20)",n.beginPath(),n.ellipse(o,l,c,c*.7,r()*3,0,Math.PI*2),n.fill()}for(let a=0;a<26;a++){n.strokeStyle="rgba(50,34,22,0.18)",n.lineWidth=.9,n.beginPath();let o=r()*s,l=r()*s;n.moveTo(o,l),n.quadraticCurveTo(o+(r()-.5)*40,l+(r()-.5)*40,o+(r()-.5)*70,l+(r()-.5)*70),n.stroke()}return e}function xc(i={}){let t=c_(i),e=Oe(t,{repeatX:1,repeatY:1,srgb:!0}),n=Cn(t,.8);return{map:e,bump:n}}function h_({seed:i=21,base:t="#ffffff",blocks:e=4,alpha:n=.22,speckle:s=1200,size:r=256}={}){let{c:a,g:o}=Ti(r,t),l=ei(i),c=r/e;for(let h=0;h<e;h++){let d=h%2*(r/(e*2));for(let u=0;u<e;u++){let f=d+u*r/e-r/(e*2),g=l();o.fillStyle=g<.35?"rgba(255,255,255,0.10)":g<.7?"rgba(120,96,70,0.10)":"rgba(255,246,232,0.06)",o.fillRect(f,h*c,r/e,c)}}for(let h=0;h<=e;h++){let d=h*c;o.strokeStyle=`rgba(58,44,32,${n+.12})`,o.lineWidth=3,o.beginPath(),o.moveTo(0,d),o.lineTo(r,d),o.stroke(),o.strokeStyle="rgba(255,248,236,0.16)",o.lineWidth=1.6,o.beginPath(),o.moveTo(0,d+2.4),o.lineTo(r,d+2.4),o.stroke();let u=h%2*(r/(e*2));for(let f=0;f<e;f++){let g=u+f*r/e;o.strokeStyle=`rgba(58,44,32,${n+.12})`,o.lineWidth=3,o.beginPath(),o.moveTo(g,d),o.lineTo(g,d+c),o.stroke()}}for(let h=0;h<s;h++){let d=l()*r,u=l()*r,f=.6+l()*2.2;o.fillStyle=l()<.5?"rgba(255,255,255,0.16)":"rgba(48,36,26,0.18)",o.fillRect(d,u,f,f)}for(let h=0;h<14;h++){let d=l()*r;o.strokeStyle="rgba(70,54,38,0.12)",o.lineWidth=2+l()*6,o.beginPath(),o.moveTo(d,0),o.lineTo(d+(l()-.5)*20,r),o.stroke()}for(let h=0;h<26;h++){let d=l()*r,u=l()*r,f=2+l()*7,g=o.createRadialGradient(d,u,0,d,u,f);g.addColorStop(0,"rgba(60,46,32,0.22)"),g.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=g,o.beginPath(),o.arc(d,u,f,0,Math.PI*2),o.fill()}return a}function br(i={}){let t=h_(i),e=Oe(t,{repeatX:i.repeatX||2,repeatY:i.repeatY||2,srgb:!0}),n=Cn(t,1.1);return n.repeat.copy(e.repeat),{map:e,bump:n}}function u_({seed:i=31,size:t=256,twistPeriod:e=96}={}){let{c:n,g:s}=Ti(t,"#8a6140"),r=ei(i),a=3,o=t/a,l=22,c=u=>{for(let f of[-t,0,t])s.save(),s.translate(0,f),u(),s.restore()},h=["rgba(182,136,84,1)","rgba(220,172,116,1)","rgba(154,110,64,1)"];for(let u=0;u<a;u++)c(()=>{s.fillStyle=h[u],s.beginPath(),s.moveTo(0,u*o),s.lineTo(t,u*o+l),s.lineTo(t,(u+1)*o+l),s.lineTo(0,(u+1)*o),s.closePath(),s.fill()});for(let u=1;u<=a;u++){let f=u*o;c(()=>{s.strokeStyle="rgba(40,22,8,0.44)",s.lineWidth=28,s.beginPath(),s.moveTo(0,f),s.lineTo(t,f+l),s.stroke(),s.strokeStyle="rgba(20,10,4,0.66)",s.lineWidth=13,s.beginPath(),s.moveTo(0,f),s.lineTo(t,f+l),s.stroke(),s.strokeStyle="rgba(255,242,214,0.46)",s.lineWidth=8,s.beginPath(),s.moveTo(0,f-12),s.lineTo(t,f+l-12),s.stroke()})}for(let u=0;u<900;u++){let f=r()*t,g=r()*t,y=10+r()*34,m=(r()-.5)*5+l*(y/t);s.strokeStyle=r()<.5?"rgba(244,222,184,0.40)":"rgba(52,32,14,0.36)",s.lineWidth=.9+r()*1.8,s.beginPath(),s.moveTo(f,g),s.lineTo(f+y,g+m),s.stroke()}for(let u=-t;u<t*2;u+=e)c(()=>{s.strokeStyle="rgba(40,24,10,0.30)",s.lineWidth=16,s.beginPath(),s.moveTo(u,0),s.lineTo(u+34,t),s.stroke(),s.strokeStyle="rgba(255,238,206,0.22)",s.lineWidth=9,s.beginPath(),s.moveTo(u+16,0),s.lineTo(u+50,t),s.stroke()});for(let u=0;u<20;u++)s.fillStyle="rgba(46,30,14,0.16)",s.beginPath(),s.ellipse(r()*t,r()*t,12+r()*24,6+r()*10,r()*3,0,Math.PI*2),s.fill();let d=s.createLinearGradient(0,0,0,t);return d.addColorStop(0,"rgba(255,246,224,0.16)"),d.addColorStop(.35,"rgba(255,255,255,0)"),d.addColorStop(.5,"rgba(0,0,0,0.12)"),d.addColorStop(.75,"rgba(255,255,255,0)"),d.addColorStop(1,"rgba(255,246,224,0.14)"),s.fillStyle=d,s.fillRect(0,0,t,t),n}function Tu({repeatX:i=4,repeatY:t=1,seed:e=31,twists:n=2}={}){let s=u_({seed:e,twists:n,twistPeriod:256/n}),r=Oe(s,{repeatX:i,repeatY:t,srgb:!0}),a=Cn(s,2.2);a.repeat.copy(r.repeat);let o=r_(s,.45,.95);return o.repeat.copy(r.repeat),{map:r,bump:a,rough:o}}function d_({seed:i=71,size:t=128,pleats:e=26,base:n="#fbf7ee",dark:s="rgba(150,140,124,0.42)"}={}){let{c:r,g:a}=Ti(t,n),o=ei(i),l=t/e;for(let c=0;c<e;c++){let h=c*l,d=a.createLinearGradient(h,0,h+l,0);d.addColorStop(0,s),d.addColorStop(.35,"rgba(255,255,255,0.55)"),d.addColorStop(.7,"rgba(255,255,255,0.1)"),d.addColorStop(1,s),a.fillStyle=d,a.fillRect(h,0,l,t)}for(let c=0;c<500;c++)a.fillStyle=o()<.5?"rgba(255,255,255,0.16)":"rgba(120,112,98,0.12)",a.fillRect(o()*t,o()*t,2,1+o()*2);return r}function yc({repeatX:i=1,repeatY:t=1,...e}={}){let n=d_(e),s=Oe(n,{repeatX:i,repeatY:t,srgb:!0}),r=Cn(n,1.1);return r.repeat.copy(s.repeat),{map:s,bump:r}}function f_({seed:i=73,size:t=128,base:e="#ffffff",slash:n="rgba(28,14,10,0.66)",n:s=7}={}){let{c:r,g:a}=Ti(t,e),o=ei(i);for(let l=0;l<s;l++){let c=(l+.5)*(t/s),h=t/s*(.3+o()*.25);a.fillStyle=n,a.beginPath(),a.ellipse(t/2,c,t*.34,h/2,0,0,Math.PI*2),a.fill(),a.fillStyle="rgba(255,240,214,0.5)",a.beginPath(),a.ellipse(t/2,c+h*.28,t*.26,h*.16,0,0,Math.PI*2),a.fill()}for(let l=0;l<320;l++)a.fillStyle=o()<.5?"rgba(255,255,255,0.14)":"rgba(50,30,20,0.14)",a.fillRect(o()*t,o()*t,2+o()*2,1+o()*2);return r}function wu({repeatX:i=2,repeatY:t=2,...e}={}){let n=f_(e),s=Oe(n,{repeatX:i,repeatY:t,srgb:!0}),r=Cn(n,1);return r.repeat.copy(s.repeat),{map:s,bump:r}}var Pn=U,vc=class{constructor(t,e=112,n=12){this.T=e,this.R=n,this.radius=t,this.bulge=.09,this.bulgeCount=8,this.lay=.16;let s=this.T+1,r=this.R+1;this.count=s*r,this.pos=new Float32Array(this.count*3),this.nrm=new Float32Array(this.count*3),this.uv=new Float32Array(this.count*2);let a=[];for(let o=1;o<=this.T;o++)for(let l=1;l<=this.R;l++){let c=r*(o-1)+(l-1),h=r*o+(l-1),d=r*o+l,u=r*(o-1)+l;a.push(c,h,u,h,d,u)}this.index=a,this.geo=new fe,this.geo.setAttribute("position",new be(this.pos,3).setUsage(Vi)),this.geo.setAttribute("normal",new be(this.nrm,3).setUsage(Vi)),this.geo.setAttribute("uv",new be(this.uv,2)),this.geo.setIndex(a),this.cos=new Float32Array(r),this.sin=new Float32Array(r);for(let o=0;o<=this.R;o++){let l=o/this.R*Math.PI*2;this.cos[o]=Math.cos(l),this.sin[o]=Math.sin(l)}for(let o=0;o<=this.T;o++)for(let l=0;l<=this.R;l++){let c=(o*r+l)*2;this.uv[c]=o/this.T,this.uv[c+1]=l/this.R}this.pts=Array.from({length:s},()=>new Pn),this.tan=Array.from({length:s},()=>new Pn),this.nor=Array.from({length:s},()=>new Pn),this.bin=Array.from({length:s},()=>new Pn)}update(t){let{T:e,R:n,pts:s,tan:r,nor:a,bin:o}=this;for(let c=0;c<=e;c++)t(c/e,s[c]);for(let c=0;c<=e;c++){let h=s[Math.max(0,c-1)],d=s[Math.min(e,c+1)];r[c].subVectors(d,h),r[c].lengthSq()<1e-10&&r[c].set(1,0,0),r[c].normalize()}a[0].set(-r[0].y,r[0].x,0),a[0].lengthSq()<1e-6&&a[0].set(0,1,0),a[0].normalize();for(let c=1;c<=e;c++)a[c].copy(a[c-1]).addScaledVector(r[c],-r[c].dot(a[c-1])),a[c].lengthSq()<1e-8&&(a[c].set(0,1,0).addScaledVector(r[c],-r[c].y),a[c].lengthSq()<1e-8&&a[c].set(0,0,1)),a[c].normalize();let l=n+1;for(let c=0;c<=e;c++){o[c].crossVectors(r[c],a[c]).normalize();let h=s[c],d=a[c],u=o[c],f=c/e*this.bulgeCount*Math.PI*2,g=this.radius*(1+this.bulge*Math.sin(f)),y=this.lay>0?f*1:0,m=Math.cos(y),p=Math.sin(y),E=1+this.lay,A=1-this.lay;for(let v=0;v<=n;v++){let M=this.cos[v],T=this.sin[v];if(this.lay>0){let B=M*m+T*p,z=T*m-M*p;M=B*E,T=z*A}let R=d.x*M+u.x*T,x=d.y*M+u.y*T,w=d.z*M+u.z*T,C=1/Math.max(1e-6,Math.hypot(R,x,w)),L=(c*l+v)*3;this.pos[L]=h.x+R*g*C,this.pos[L+1]=h.y+x*g*C,this.pos[L+2]=h.z+w*g*C,this.nrm[L]=R*C,this.nrm[L+1]=x*C,this.nrm[L+2]=w*C}}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.normal.needsUpdate=!0}},Do=class{constructor({segments:t=te.ropeSegments,spanHalf:e=te.spanHalf,y:n=te.ropeY,damping:s=te.damping,swayClamp:r=te.swayClamp}={}){this.N=t,this.count=t+1,this.spanHalf=e,this.restY=n,this.damping=s,this.swayClamp=r,this.restLen=e*2/t,this.pos=[],this.prev=[],this.acc=[],this.rpos=[],this.spos=[],this.pinned=new Set([0,this.count-1]);for(let o=0;o<this.count;o++){let l=o/this.N,c=-e+2*e*l,h=n-te.restSagTwo*Math.sin(Math.PI*l);this.pos.push(new Pn(c,h,0)),this.prev.push(new Pn(c,h,0)),this.acc.push(new Pn(0,0,0)),this.rpos.push(new Pn(c,h,0)),this.spos.push(new Pn(c,h,0))}this.weights=new Map,this._accum=0,this._tmp=new Pn,this.tube=new vc(te.ropeRadius);let a=Tu({repeatX:4,repeatY:1,seed:31,twists:2});this.mat=new je({map:a.map,bumpMap:a.bump,bumpScale:.9,roughnessMap:a.rough,roughness:1,metalness:0,color:16777215}),this.mesh=new Xt(this.tube.geo,this.mat),this.mesh.castShadow=!1,this.mesh.frustumCulled=!1,this.mesh.boundingSphere=new Kn(new Pn(0,this.restY,0),e+1),this._curvePts=this.spos.map(o=>o.clone()),this.curve=new pi(this._curvePts,!1,"catmullrom",.5)}setLoad(t,e){let n=this._nearestIndex(t);this.weights.set(n,(this.weights.get(n)||0)+e)}clearLoads(){this.weights.clear()}_nearestIndex(t){let e=Ie.clamp((t+this.spanHalf)/(2*this.spanHalf),0,1);return Math.round(e*this.N)}injectImpulse(t,e,n,s){let r=this._nearestIndex(t),a=te.impulseScale;for(let o of[r-1,r,r+1]){if(o<0||o>=this.count||this.pinned.has(o))continue;let l=(o===r?1:.5)*a;this.prev[o].x-=e*l,this.prev[o].y-=n*l,this.prev[o].z-=s*l}}step(t){this._accum=Math.min(this._accum+t,.1);let e=1/120,n=0;for(;this._accum>=e&&n++<16;)this._sub(e),this._accum-=e;this._relax(t)}_relax(t){let e=1-Math.exp(-(te.ropeSmooth||20)*Math.min(t,.05)),{pos:n,rpos:s,spos:r,count:a}=this;for(let o=0;o<a;o++)s[o].lerp(n[o],e);for(let o=0;o<a;o++){if(this.pinned.has(o)){r[o].copy(s[o]);continue}let l=s[Math.max(0,o-1)],c=s[o],h=s[Math.min(a-1,o+1)];r[o].set(l.x*.25+c.x*.5+h.x*.25,l.y*.25+c.y*.5+h.y*.25,l.z*.25+c.z*.5+h.z*.25)}}_sub(t){let{pos:e,prev:n,acc:s}=this;for(let r=0;r<this.count;r++)s[r].set(0,-5.2,0);for(let[r,a]of this.weights)s[r].y-=a*4.2,r>0&&(s[r-1].y-=a*2),r<this.count-1&&(s[r+1].y-=a*2);for(let r=0;r<this.count;r++){if(this.pinned.has(r))continue;let a=e[r],o=n[r],l=s[r],c=a.x+(a.x-o.x)*this.damping+l.x*t*t,h=a.y+(a.y-o.y)*this.damping+l.y*t*t,d=a.z+(a.z-o.z)*this.damping+l.z*t*t;o.copy(a),a.set(c,h,d)}for(let r=0;r<10;r++){for(let a=0;a<this.N;a++){let o=e[a],l=e[a+1];this._tmp.subVectors(l,o);let c=this._tmp.length()||1e-6,h=(c-this.restLen)/c,d=this.pinned.has(a),u=this.pinned.has(a+1);if(d&&u)continue;let f=d?0:u?1:.5,g=u?0:d?1:.5;o.addScaledVector(this._tmp,h*f),l.addScaledVector(this._tmp,-h*g)}e[0].set(-this.spanHalf,this.restY,0),e[this.count-1].set(this.spanHalf,this.restY,0);for(let a=0;a<this.count;a++){let o=e[a];o.z=Ie.clamp(o.z,-this.swayClamp,this.swayClamp),o.y=Math.min(o.y,this.restY+.18)}}}yAt(t){let n=Ie.clamp((t+this.spanHalf)/(2*this.spanHalf),0,1)*this.N,s=Math.min(Math.floor(n),this.N-1),r=n-s;return this.spos[s].y*(1-r)+this.spos[s+1].y*r}slopeAt(t){return(this.yAt(t+.3)-this.yAt(t-.3))/(2*.3)}pointAt(t){return this.spos[Ie.clamp(t,0,this.count-1)]}updateVisual(){for(let n=0;n<this.count;n++)this._curvePts[n].copy(this.spos[n]);let t=this.curve;this.tube.update((n,s)=>t.getPoint(n,s))}sagAmount(){return this.restY-this.yAt(0)}};var qi=512,Ai=320,Uo=class{constructor(){this.canvas=document.createElement("canvas"),this.canvas.width=qi,this.canvas.height=Ai,this.g=this.canvas.getContext("2d"),this.texture=new cn(this.canvas),this.texture.colorSpace=Ue,this.texture.anisotropy=4,this.mat=new Be({map:this.texture,side:_e,transparent:!0}),this.plane=new Xt(new Ae(1.6,1),this.mat),this.group=new Qt,this.hanger=new Qt;let t=new je({color:4864808,roughness:.8,metalness:.3}),e=new Xt(new Me(.018,.018,.9,6),t);e.position.y=-.45;let n=new Xt(new Me(.012,.012,1.7,6),t);n.rotation.z=Math.PI/2,n.position.y=-.9;let s=new Xt(new mi(.05,.012,6,12,Math.PI),t);s.position.y=-.02,this.hanger.add(e,n,s),this.plane.position.y=-1.42,this.group.add(this.hanger,this.plane),this.price=0,this.chg24h=0,this.chg24hText="",this.bob=0,this.bobVel=0,this.flash=0,this.spin=0,this._lastDir=1,this.lastDrawnKey=""}setPrice(t){if(!t||t<=0||t===this.price)return;let e=this.price;if(this.price=t,e>0){let n=t>e?1:-1;this.bobVel+=n*.5,Math.abs(t-e)/e>.001&&(this.flash=.15)}this._draw()}setChange24h(t){this.chg24h=t,this.chg24hText="",this._draw()}setChange24hText(t){this.chg24hText=t||"",this._draw()}_draw(){let t=this.g,e=this._lastDir===-1?re.flagDown:re.flagUp,n=`${this.price.toFixed(1)}|${e}|${this.chg24hText||this.chg24h.toFixed(2)}`;if(n===this.lastDrawnKey)return;this.lastDrawnKey=n,t.clearRect(0,0,qi,Ai),t.fillStyle=e,t.beginPath(),t.moveTo(14,10),t.lineTo(qi-14,10),t.lineTo(qi-34,Ai/2),t.lineTo(qi-14,Ai-10),t.lineTo(14,Ai-10),t.lineTo(34,Ai/2),t.closePath(),t.fill(),t.strokeStyle="rgba(255,255,255,0.85)",t.lineWidth=8,t.stroke();let s=this.price>0?this.price.toLocaleString("en-US",{minimumFractionDigits:1,maximumFractionDigits:1}):"--";t.fillStyle="#FFFFFF",t.textAlign="center",t.font='bold 92px "Consolas", "Courier New", monospace',t.fillText(s,qi/2,Ai/2+18),t.font='bold 34px "Consolas", monospace',t.fillText("USDT",qi/2,Ai/2+62),t.font='bold 44px "Consolas", monospace',t.fillStyle="rgba(255,255,255,0.95)",this.chg24hText?(t.textAlign="left",t.fillText(this.chg24hText,34,58)):(t.font='bold 56px "Segoe UI Symbol", sans-serif',t.textAlign="center",t.fillText(this.chg24h>=0?"\u2191":"\u2193",62,62)),this.texture.needsUpdate=!0}tickDir(t){this._lastDir=t}update(t,e,n){this.bobVel+=-this.bob*30*t-this.bobVel*4*t,this.bob+=this.bobVel*t,this.bob=Ie.clamp(this.bob,-.12,.12),this.flash>0?(this.flash-=t,this.plane.material.color.setScalar(1+Math.max(this.flash,0)*4)):this.plane.material.color.setScalar(1),this.spin>0&&(this.spin=Math.max(0,this.spin-t*2));let s=e.pointAt(8);this.group.position.set(s.x,s.y+this.bob,Ie.clamp(s.z,-.3,.3)),this.group.rotation.z=Ie.clamp(-e.slopeAt(s.x)*.5,-.35,.35),this.group.rotation.x=s.z*.8,this.plane.rotation.y=Math.sin(performance.now()*.0012)*.12+this.spin*6.28}};var Ps=U,Cs=Ie.clamp,Au=Ie.lerp,Mc=new Map;function Le(i,t){return Mc.has(i)||Mc.set(i,t()),Mc.get(i)}function Gt(i,t="fur",e={},n=null){var r;let s=new je({color:i,...Mr[t],...e});return n&&(s.map=n.map,n.bump&&(s.bumpMap=n.bump,s.bumpScale=(r=e.bumpScale)!=null?r:.06)),s}function mt(i,t,e=0,n=0,s=0){let r=new Xt(i,t);return r.position.set(e,n,s),r.castShadow=!0,r}var Ce=(i,t,e=14,n=10)=>new Hn(i,e,n),Cu=(i,t)=>new Qs(i,t,4,10),In=(i,t,e)=>new He(i,t,e),Ru=(i,t,e=10)=>new Oi(i,t,e),Pe=(i,t,e=Math.PI*2)=>new mi(i,t,8,20,e),Yi=(i,t,e,n=10)=>new Me(i,t,e,n);function Er(i,t,e,n,s,r,a){let o=new Qt;o.position.set(t,e,n);let l=mt(Cu(r,s),a,0,-s/2,0);return o.add(l),i.add(o),o}function Pu(i){let t=new Qt,e=Le(`fur-${i.furKey}`,()=>Sr(i.furOpts)),n=i.furBellyKey?Le(`fur-${i.furBellyKey}`,()=>Sr(i.furBellyOpts)):e,s={fur:Gt(i.furBase,"fur",{bumpScale:.04},e),belly:Gt(i.furBelly,"fur",{bumpScale:.03},n),inner:Gt(i.earInner,"fur",{},e),eye:Gt(i.eye,"steel",{emissive:i.eye,emissiveIntensity:i.eyeGlow,roughness:.35}),pupil:Gt("#101014","fur"),nose:Gt(i.nose,"fur"),whisker:Gt("#FFFFFF","fur",{roughness:.45}),mouth:Gt("#241A14","fur")},r=new Qt;r.position.y=.52,t.add(r);let a=mt(Ce(.15),s.fur,0,0,0);a.scale.set(1.1,.9,1),r.add(a);let o=new Qt;r.add(o);let l=mt(Cu(.155,.28),s.fur,.05,.3,0);l.rotation.z=-.15,o.add(l);let c=mt(Ce(.13),s.belly,.02,.22,0);c.scale.set(1.1,1,.8),o.add(c);let h=new Qt;h.position.set(.1,.62,0),o.add(h);let d=mt(Ce(.205,18,14),s.fur);d.scale.set(1.05,.95,.95),h.add(d);let u=mt(In(.2,.11,.16),s.fur,.17,-.05,0);h.add(u);let f=mt(Ce(.028,8,6),s.nose,.27,-.03,0);h.add(f);let g=mt(Pe(.05,.008,Math.PI*.9),s.mouth,.24,-.09,0);g.rotation.y=Math.PI/2,g.rotation.z=Math.PI+.25,h.add(g);for(let v of[1,-1]){let M=mt(Ce(.045,12,10),s.eye,.12,.07,v*.105);h.add(M);let T=mt(In(.012,.05,.02),s.pupil,.158,.07,v*.107);h.add(T)}let y=[];for(let v of[1,-1]){let M=new Qt;M.position.set(-.02,.17,v*.12);let T=mt(Ru(.055,.13),s.fur,0,.05,0),R=mt(Ru(.03,.08),s.inner,.012,.04,0);M.add(T,R),h.add(M),y.push(M)}for(let v of[1,-1])for(let M=0;M<3;M++){let T=mt(Yi(.003,.003,.3,4),s.whisker,.2,-.04+M*.03,v*.09);T.rotation.z=Math.PI/2+.12,T.rotation.x=v*(.25+M*.18),h.add(T)}let m={};for(let v of["L","R"]){let T=Er(o,.08,.44,v==="L"?-.17:.17,.2,.052,s.fur),R=Er(T,0,-.22,0,.19,.046,s.fur),x=mt(Ce(.055,10,8),s.fur,0,-.21,0);R.add(x),m[v]={shoulder:T,elbow:R,paw:x}}let p={};for(let v of["L","R"]){let T=Er(r,-.02,-.05,v==="L"?-.09:.09,.2,.062,s.fur),R=Er(T,0,-.22,0,.18,.05,s.fur),x=mt(In(.14,.05,.09),s.fur,.03,-.2,0);R.add(x),p[v]={hip:T,knee:R,foot:x}}let E=[],A=new Qt;A.position.set(-.12,.02,0),r.add(A);for(let v=0;v<6;v++){let M=Er(v===0?A:E[v-1],0,v===0?0:-.13,0,.11,.038-v*.003,s.fur);E.push(M)}return{root:t,hips:r,spine:o,head:h,ears:y,arms:m,legs:p,tail:E,M:s,furPair:e}}function p_(){let i=new Qt,t=Le("steel",()=>wi({seed:41,base:"#ffffff",streak:.24})),e=Le("gold",()=>wi({seed:42,base:"#ffffff",streak:.16,scratches:180})),n=Le("leather",()=>xc({seed:43})),s=Gt(Se.steelBlade,"steel",{},t),r=Gt(Se.goldPrimary,"gold",{},e),a=mt(Yi(.016,.018,.13,8),Gt(Se.leatherBrown,"cloth",{},n),-.05,0,0);a.rotation.z=Math.PI/2,i.add(a);let o=mt(Pe(.05,.011),r,.02,0,0);o.rotation.y=Math.PI/2,i.add(o),i.add(mt(Ce(.02,8,6),r,.025,0,0));let l=mt(Yi(.006,.013,1.1,6),s,.61,0,0);return l.rotation.z=-Math.PI/2,i.add(l),i.add(mt(Ce(.03,10,8),Gt(Se.gemRuby,"gold",{emissive:Se.gemRuby,emissiveIntensity:.35}),-.125,0,0)),i}function m_(){let i=new Qt,t=Le("steel",()=>wi({seed:41,base:"#ffffff",streak:.24})),e=Le("silver",()=>wi({seed:44,base:"#ffffff",streak:.18,scratches:200})),n=Le("cloth-emerald",()=>Xi({seed:51,weave:7})),s=Gt(Re.steelBlade,"steel",{},t),r=Gt(Re.silverMain,"silver",{},e),a=mt(Yi(.016,.018,.12,8),Gt(Re.emeraldDeep,"cloth",{},n),-.05,0,0);a.rotation.z=Math.PI/2,i.add(a);let o=mt(Pe(.045,.01,Math.PI*1.2),r,.015,0,0);o.rotation.y=Math.PI/2,o.rotation.x=.3,i.add(o);let l=[];for(let d=0;d<=8;d++){let u=d/8;l.push(new Ps(.06+u*.92,Math.sin(u*1.5)*.16,0))}let c=new Xt(new nr(new pi(l),16,.024,6,!1),s);c.scale.z=.35,c.castShadow=!0,i.add(c);let h=mt(Pe(.14,.004,Math.PI*.9),Gt(Re.silverShadow,"silver"),.42,.09,0);return h.rotation.z=-.5,i.add(h),i.add(mt(Ce(.028,10,8),Gt(Re.gemEmerald,"gold",{emissive:Re.gemEmerald,emissiveIntensity:.4}),-.115,0,0)),i}function g_(){let i=Le("cloth-crimson",()=>Xi({seed:52,weave:6})),t=Gt(Se.crimsonMain,"cloth",{side:_e},i),e=new Ae(.52,.78,10,12);e.translate(0,-.39,0);{let r=e.attributes.position;for(let a=0;a<r.count;a++){let o=r.getX(a),l=r.getY(a),c=Math.max(0,Math.min(1,-l/.78)),h=Math.sin(o*15)*.016+Math.sin(o*26+l*8)*.009+Math.sin(l*17+o*4)*.012+Math.sin(o*6)*.02;r.setZ(a,h*c*1.7)}e.computeVertexNormals()}let n=new Xt(e,t);n.castShadow=!0;let s=new Xt(new Ae(.54,.06),Gt(Se.goldBright,"cloth",{side:_e}));return s.position.y=-.76,n.add(s),n}function __(){let i=Pu({furKey:"A-fur",furOpts:{seed:3,blotch:6,grain:.12,dark:"#d9c4ad",repeatX:1.1,repeatY:1.1},furBase:Se.furWhite,furBelly:Se.furWhite,earInner:Se.nosePink,eye:Se.eyeAmber,eyeGlow:.25,nose:Se.nosePink}),t=Le("gold",()=>wi({seed:42,base:"#ffffff",streak:.16,scratches:180})),e=Le("cloth-crimson",()=>Xi({seed:52,weave:6})),n=Le("ginger",()=>Sr({seed:6,blotch:3,grain:.14,repeatX:3,repeatY:3})),s=Le("steel",()=>wi({seed:41,base:"#ffffff",streak:.24})),r={gold:Gt(Se.goldPrimary,"gold",{},t),goldBright:Gt(Se.goldBright,"goldBright",{},t),crimson:Gt(Se.crimsonMain,"cloth",{},e),ginger:Gt(Se.furGinger,"fur",{},n),steel:Gt(Se.steelBlade,"steel",{},s),cross:Gt(Se.goldBright,"goldBright",{emissive:Se.goldBright,emissiveIntensity:0})},a=mt(Ce(.085,12,8),r.ginger,.09,.07,-.12);a.scale.set(1.1,.9,.45),i.head.add(a);let o=mt(Ce(.09,12,8),r.ginger,-.06,.1,.1);o.scale.set(1,.8,.5),i.head.add(o);let l=mt(Ce(.12,12,8),r.ginger,-.02,.3,-.09);l.scale.set(1.2,1,.5),i.spine.add(l),i.tail[5].add(mt(Ce(.045,8,6),r.ginger,0,-.13,0));let c=new Qt;c.position.set(.02,.13,0),c.rotation.z=-.12;let h=mt(new Hn(.165,16,10,0,Math.PI*2,0,Math.PI*.55),r.steel);h.scale.set(1.15,1,1.05),c.add(h);let d=mt(Pe(.185,.024),r.steel,0,.04,0);d.rotation.x=Math.PI/2,d.scale.set(1.18,1.05,1),c.add(d);let u=mt(In(.34,.075,.032),r.steel,0,.175,0);u.rotation.z=-.05,c.add(u),c.add(mt(In(.2,.045,.028),r.steel,-.09,.13,0));let f=mt(Pe(.165,.008),r.goldBright,0,.05,0);f.rotation.x=Math.PI/2,f.scale.set(1.2,1.1,1),c.add(f),c.add(mt(Yi(.02,.025,.05,8),r.gold,.05,.16,-.1));let g=new Qt;g.position.set(.05,.2,-.1);for(let O=0;O<3;O++)g.add(mt(Ce(.035-O*.007,8,6),r.crimson,.02*O,.035*O,.015*O));c.add(g),i.head.add(c),i.ears[0].position.y=.2,i.ears[0].position.z=-.17,i.ears[1].position.y=.2,i.ears[1].position.z=.17;let y=mt(new Hn(.175,14,10,0,Math.PI*2,0,Math.PI*.62),r.gold,.05,.33,0);y.rotation.z=-Math.PI/2,y.scale.set(1,1,.72),i.spine.add(y),i.spine.add(mt(In(.028,.14,.02),r.cross,.185,.34,0)),i.spine.add(mt(In(.1,.028,.02),r.cross,.19,.35,0)),i.spine.add(mt(Ce(.035,10,8),r.goldBright,.13,.47,0));for(let O of[-.17,.17]){let q=mt(new Hn(.075,10,8,0,Math.PI*2,0,Math.PI*.5),r.gold,.08,.46,O);q.rotation.z=O>0?-.5:.5,i.spine.add(q);let X=mt(Pe(.082,.013,Math.PI*1.15),Gt(Se.leatherBrown,"cloth"),.05,.45,O);X.rotation.y=Math.PI/2,X.rotation.z=-.35,i.spine.add(X)}let m=Le("leather",()=>xc({seed:43})),p=Le("pleat",()=>yc({pleats:30})),E=Le("slash-doublet",()=>wu({seed:73,n:6})),A=Gt("#FBF7EE","cloth",{side:_e,bumpScale:.05},p),v=mt(new Me(.16,.305,.1,30,1,!0),A,.02,.47,0);v.rotation.z=-.06,i.spine.add(v);let M=mt(new Me(.135,.21,.06,26,1,!0),A,.02,.545,0);M.rotation.z=-.06,i.spine.add(M);let T=mt(Pe(.142,.032),r.gold,.02,.415,0);T.rotation.x=Math.PI/2,T.scale.set(1,1,.9),i.spine.add(T);let R=Gt(Se.crimsonMain,"cloth",{bumpScale:.06},E);for(let O of["L","R"]){let q=mt(Ce(.1,12,10),R,0,-.015,0);q.scale.set(1,.76,1.06),i.arms[O].shoulder.add(q);let X=mt(Pe(.064,.012),r.gold,0,-.2,0);X.rotation.x=Math.PI/2,i.arms[O].shoulder.add(X)}for(let O of[-.12,.12]){let q=mt(In(.13,.15,.035),r.gold,.055,-.15,O);q.rotation.z=.12,q.rotation.x=O>0?.12:-.12,i.hips.add(q)}let x=mt(In(.052,.52,.028),Gt(Se.leatherBrown,"cloth",{},m),.162,.27,.01);x.rotation.z=.62,i.spine.add(x),i.spine.add(mt(Ce(.027,10,8),r.goldBright,.19,.43,.01));let w=g_();w.position.set(-.14,.5,0),w.rotation.y=.22,i.spine.add(w);let C=mt(Pe(.155,.018),r.gold,.02,.52,0);C.rotation.x=Math.PI/2,C.rotation.z=.1,C.scale.set(1.05,.9,1),i.spine.add(C),i.spine.add(mt(Ce(.038,10,8),r.goldBright,.16,.5,0));let L=mt(new Me(.14,.19,.22,10,1,!0,.5,Math.PI*1.6),r.crimson,-.02,-.08,0);L.material.side=_e,i.hips.add(L);let B=mt(Pe(.185,.012),r.goldBright,-.02,-.19,0);B.rotation.x=Math.PI/2,B.scale.set(1,1,.92),i.hips.add(B);let z=mt(Pe(.16,.02),r.gold,0,.02,0);z.rotation.x=Math.PI/2,z.scale.set(1.15,1,1),i.hips.add(z);for(let O of["L","R"]){i.arms[O].elbow.add(mt(Yi(.055,.05,.1,10),r.gold,0,-.1,0));let q=Gt(Se.leatherBrown,"cloth",{side:_e},m),X=mt(new Me(.066,.073,.28,12,1,!0),q,.004,-.14,0);i.legs[O].knee.add(X);let nt=mt(Pe(.079,.026),Gt(Se.leatherBrown,"cloth",{},m),.004,-.005,0);nt.rotation.x=Math.PI/2,nt.scale.set(1,1,.88),i.legs[O].knee.add(nt),i.legs[O].knee.add(mt(Ce(.017,8,6),r.goldBright,.072,-.02,0)),i.legs[O].knee.add(mt(In(.06,.03,.075),q,-.03,-.245,0))}i.tail[5].add(mt(Pe(.042,.012),r.gold,0,-.1,0));let N=p_();return N.position.set(0,-.21,0),i.arms.L.elbow.add(N),{...i,name:"DON GATO",side:"A",facing:Math.PI,sword:N,swordArm:"L",cape:w,crossMat:r.cross,plume:g}}function x_(){let i=Pu({furKey:"B-fur",furOpts:{seed:9,stripes:7,grain:.16,blotch:2,dark:"#6c6c78",repeatX:1.4,repeatY:1.4},furBase:Re.furSilverStripe,furBelly:Re.furBelly,earInner:Re.noseBlack,eye:Re.eyeJade,eyeGlow:.3,nose:Re.noseBlack}),t=Le("silver",()=>wi({seed:44,base:"#ffffff",streak:.18,scratches:200})),e=Le("cloth-emerald",()=>Xi({seed:51,weave:7})),n=Le("cloth-white",()=>Xi({seed:53,weave:9,thread:"rgba(120,120,132,0.24)"})),s=Le("B-stripe",()=>Sr({seed:12,stripes:5,grain:.12})),r={emerald:Gt(Re.emeraldMain,"cloth",{},e),emeraldBright:Gt(Re.emeraldBright,"cloth",{},e),silver:Gt(Re.silverMain,"silver",{},t),silverBright:Gt(Re.silverBright,"silverBright",{},t),white:Gt(Re.clothWhite,"cloth",{},n),stripe:Gt(Re.furSilverStripe,"fur",{},s)};for(let x=0;x<3;x++){let w=mt(Pe(.15-x*.005,.012),r.stripe,-.06+x*.09,.3-x*.02,0);w.rotation.x=Math.PI/2,w.rotation.y=.3,w.scale.set(1,1,.55),i.spine.add(w)}for(let x=1;x<6;x+=2)i.tail[x].add(mt(Pe(.04,.01),r.stripe,0,-.065,0));let a=new Qt;a.position.set(0,.16,0),a.rotation.z=.08;let o=mt(Ce(.185,16,10),r.white,0,.02,0);o.scale.set(1.08,.72,1.02),a.add(o),a.add(mt(Ce(.1,12,8),r.white,-.06,.13,0));let l=mt(Pe(.13,.05),r.white,0,.05,0);l.rotation.x=Math.PI/2,l.scale.set(1.1,1.05,.9),a.add(l);let c=mt(Pe(.155,.02),r.emerald,0,.03,0);c.rotation.x=Math.PI/2,c.scale.set(1.12,1.06,1),a.add(c);let h=mt(Pe(.045,.012,Math.PI*1.35),r.silverBright,.14,.06,0);h.rotation.y=Math.PI/2,h.rotation.z=2.2,a.add(h),i.head.add(a),i.ears[0].position.y=.24,i.ears[0].position.z=-.16,i.ears[1].position.y=.24,i.ears[1].position.z=.16;let d=Le("cloth-linen",()=>Xi({seed:55,weave:11,thread:"rgba(122,114,98,0.34)"})),u=Le("pleat",()=>yc({pleats:30})),f=Gt(Re.clothWhite,"cloth",{side:_e,bumpScale:.05},d),g=Gt(Re.emeraldBright,"cloth",{},e),y=mt(new Me(.188,.212,.44,20,1,!0),f,.005,.22,0);i.spine.add(y);let m=mt(new Me(.134,.156,.1,20,1,!0),Gt(Re.clothWhite,"cloth",{side:_e},u),.01,.455,0);i.spine.add(m);let p=mt(Pe(.157,.013),g,.01,.505,0);p.rotation.x=Math.PI/2,i.spine.add(p);let E=mt(In(.04,.36,.05),g,.178,.245,0);i.spine.add(E);for(let x of[.13,.24,.35])i.spine.add(mt(Ce(.014,8,6),r.silver,.198,x,0));let A=mt(new Me(.212,.315,.54,24,1,!0),f,.005,-.165,0);i.hips.add(A);let v=mt(Pe(.312,.014),g,.005,-.425,0);v.rotation.x=Math.PI/2,i.hips.add(v);let M=mt(Pe(.224,.022),r.silver,.005,.015,0);M.rotation.x=Math.PI/2,M.scale.set(1,1,.92),i.hips.add(M),i.hips.add(mt(Ce(.032,10,8),Gt("#EAF2FF","goldBright",{emissive:"#BFD4FF",emissiveIntensity:.35}),.228,.02,0));for(let x of["L","R"]){let w=mt(new Me(.082,.098,.3,14,1,!0),f,0,-.14,0);i.arms[x].shoulder.add(w);let C=mt(Pe(.092,.014),g,0,-.285,0);C.rotation.x=Math.PI/2,i.arms[x].shoulder.add(C);let L=mt(new Me(.068,.074,.17,12,1,!0),f,0,-.09,0);i.arms[x].elbow.add(L)}let T=[];i.arms.R.elbow.add(mt(Yi(.055,.05,.11,10),r.silver,0,-.1,0));let R=m_();return R.position.set(0,-.21,0),i.arms.R.elbow.add(R),{...i,name:"SULTAN BIGOTES",side:"B",facing:0,sword:R,swordArm:"R",ribbons:T,turban:a,dish:{skirt:A}}}var No=()=>({lean:0,twist:0,tilt:0,crouch:0,yOff:0,xOff:0,zOff:0,spineLean:.06,spineTwist:0,headPitch:0,headYaw:0,headRoll:0,shS_z:-.45,shS_x:.1,elS:-.85,shO_z:-.25,shO_x:.12,elO:-.5,thL:.06,knL:-.2,thR:.06,knR:-.2,footL:0,footR:0,tailCurl:0,tailAmp:.1,capeRaise:0,lock:0,tremble:0}),Iu=No(),y_=Object.keys(Iu),Tr=class{constructor(t){this.data=t==="A"?__():x_();let e=this.data;this.root=e.root,this.root.rotation.y=e.facing,this.pose=No(),this.target=No(),this.state={name:"IDLE",t:0,dur:0,data:{}},this.time=Math.random()*10,this.x=0,this.windmill=0,this.earSwivel=0,this.frozenPose=null,this.fw=e.side==="A"?-1:1,this.sword=e.arms[e.swordArm],this.off=e.arms[e.swordArm==="L"?"R":"L"]}setState(t,e=0,n={}){this.state={name:t,t:0,dur:e,data:n},t==="FREEZE"&&(this.frozenPose={...this.target})}get moveFrac(){return this.state.dur>0?Cs(this.state.t/this.state.dur,0,1):1}update(t,e){let n=this.state;switch(this.time+=t,n.t+=t,Object.assign(this.target,Iu),this.target.tailCurl=this.data.side==="A"?-1.15:.95,n.name){case"RUSH":this._rush(e);break;case"LUNGE":this._lunge(e);break;case"SLASH_UP":this._slashUp(e);break;case"TAUNT":this._taunt(e);break;case"PARRY_HOP":this._parryHop(e);break;case"SLASH_SPIN":this._slashSpin(e);break;case"RIPOSTE":this._riposte(e);break;case"FREEZE":this._freeze(e);break;case"STUMBLE":this._stumble(e);break;case"HIT":this._hit(e);break;case"BLADE_LOCK":this._bladeLock(e);break;case"CLASH":this._clash(e);break;case"RECOVER":this._recover();break;default:this._idle(e)}n.dur>0&&n.t>=n.dur&&n.name!=="RECOVER"&&n.name!=="FREEZE"&&n.name!=="BLADE_LOCK"&&this.setState("RECOVER",.16);let s=this.pose,r=this.target,a=1-Math.exp(-26*t);for(let o of y_)s[o]=Au(s[o],r[o],a);this._applyPose(t,e)}_applyPose(t,e){let n=this.data,s=this.pose,r=e.rope,a=this.x+s.xOff,o=r.yAt(a);this.root.position.set(a,o+.02-s.crouch+s.yOff,s.zOff+s.lock*.05),this.root.rotation.y=n.facing+s.twist,this.root.rotation.z=s.tilt*(n.side==="A"?1:-1);let l=Cs(e.pressureWobble||0,-.22,.22),c=n.side==="A"?1:-1,h=n.side==="A"?l:-l;this.root.rotation.z+=h*c*(1-Math.abs(h)*2),n.hips.rotation.z=-s.lean-s.lock*.12,n.spine.rotation.z=-s.spineLean-s.lock*.2,n.spine.rotation.y=s.spineTwist,n.head.rotation.z=-s.headPitch,n.head.rotation.y=s.headYaw,n.head.rotation.x=s.headRoll;let d=s.tremble*(Math.sin(this.time*34)*.026+Math.sin(this.time*51)*.014);this.sword.shoulder.rotation.z=s.shS_z+d*1.5,this.sword.shoulder.rotation.x=s.shS_x,this.sword.elbow.rotation.z=s.elS+d,this.off.shoulder.rotation.z=s.shO_z-d*1.2,this.off.shoulder.rotation.x=s.shO_x,this.off.elbow.rotation.z=s.elO-d,this.sword.paw.rotation.z=d*2,n.legs.L.hip.rotation.z=s.thL,n.legs.L.knee.rotation.z=s.knL,n.legs.R.hip.rotation.z=s.thR,n.legs.R.knee.rotation.z=s.knR,n.legs.L.foot.rotation.z=s.footL,n.legs.R.foot.rotation.z=s.footR;let u=Math.sin(this.time*2.6)*s.tailAmp;n.tail.forEach((y,m)=>{let p=m/(n.tail.length-1);y.rotation.z=s.tailCurl/n.tail.length+u*(.4+p),y.rotation.x=Math.sin(this.time*1.6+m)*.045-s.lean*.4}),this.earSwivel=Au(this.earSwivel,e.flagDart?1:0,1-Math.exp(-6*t)),n.ears.forEach((y,m)=>{let p=m===0?1:-1;y.rotation.y=p*(.15*Math.sin(this.time*.7+m*2)+this.earSwivel*.5*(n.side==="B"?1:-1))}),n.cape&&this._cape(),n.ribbons&&n.ribbons.forEach((y,m)=>{y.rotation.x=(m?.15:-.15)+Math.sin(this.time*3.6+m*1.3)*.34}),n.plume&&(n.plume.rotation.x=Math.sin(this.time*3.4)*.2),n.dish&&this._dish(n),this._footTmp||(this._footTmp=new Ps),this.root.updateMatrixWorld(!0);let f=o+te.ropeRadius*.5,g=1/0;for(let y of["L","R"])n.legs[y].foot.getWorldPosition(this._footTmp),this._footTmp.y<g&&(g=this._footTmp.y);if(isFinite(g)){let y=f-g;y=Math.abs(s.yOff)>.03?Cs(y*.25,-.03,.06):Cs(y,-.07,.18),this.root.position.y+=y}}_idle(t){let e=this.target,n=this.time,s=t.circlePhase||0,r=this.data.side==="A"?1:-1,a=Math.sin(s*2.2+(r>0?0:1.6));e.spineLean=.08+Math.sin(n*2.2)*.03,e.headYaw=-r*.22+Math.sin(n*.6)*.12,e.headPitch=.04,e.shS_z=-.5+Math.sin(n*2.6)*.09,e.shO_z=-.3+Math.sin(n*2.1+1)*.1,e.elS=-.7,e.elO=-.6,e.crouch=.03+Math.max(0,Math.sin(n*1.1+r))*.03,e.xOff=a*.16,e.thL=.06+Math.max(0,a)*.5,e.thR=.06+Math.max(0,-a)*.5,e.knL=-.24-Math.max(0,a)*.5,e.knR=-.24-Math.max(0,-a)*.5,e.twist=-r*.06,e.tailAmp=.16}_recover(){let t=this.moveFrac,e=t*Math.PI*2.6;this.target.shS_x=.5+Math.sin(e)*1.3,this.target.shO_x=.5-Math.sin(e)*1.3,this.target.shS_z=-.3-Math.cos(e)*.5,this.target.shO_z=-.3+Math.cos(e)*.5,this.target.spineLean=.1-Math.sin(t*Math.PI)*.26,this.target.tilt=Math.sin(t*Math.PI*2)*.14}_rush(t){let e=this.moveFrac,n=this.target,s=this.state,r=s.data.reach||.6;if(e<.34){let a=e/.34,o=Math.abs(Math.sin(a*Math.PI*3));n.crouch=.06+o*.1,n.knL=-.2-o*.5,n.knR=-.2-(1-o)*.3,n.thL=.06+o*.55,n.spineLean=.3,n.twist=this.fw*.12,a>.08&&!s.data.st1&&(s.data.st1=1,t.onStamp&&t.onStamp(this)),a>.42&&!s.data.st2&&(s.data.st2=1,t.onStamp&&t.onStamp(this)),a>.75&&!s.data.st3&&(s.data.st3=1,t.onStamp&&t.onStamp(this))}else if(e<.7){let a=(e-.34)/.36;n.xOff=this.fw*a*r,n.spineLean=.3+a*.5,n.twist=this.fw*.18,n.shO_z=-.2-a*.7,n.shS_z=1.5*a,n.shS_x=1*a,n.elS=-.05,n.headYaw=this.fw*.22,n.yOff=Math.sin(a*Math.PI)*.06,a>.35&&!s.data.sp&&(s.data.sp=1,t.onLungeHit&&t.onLungeHit(this))}else{let a=(e-.7)/.3;n.xOff=this.fw*(r-a*.1),n.spineLean=.8-a*.5,n.tilt=Math.sin(a*Math.PI)*.14,n.crouch=.05,n.shS_z=1.35-a*.2}}_lunge(t){let e=this.moveFrac,n=this.target,s=this.state,r=s.data.reach||.7;if(e<.3){let a=e/.3;n.crouch=.1*a,n.spineLean=-.12*a,n.shS_z=-.5-a*.5,n.elS=-1,n.knL=-.2-a*.35,n.twist=-this.fw*.16*a}else if(e<.62){let a=(e-.3)/.32;n.xOff=this.fw*a*r,n.spineLean=.25+a*.55,n.twist=this.fw*.2,n.shO_z=-.2-a*.75,n.shS_z=1.6*a,n.shS_x=1.05*a,n.elS=-.02,n.headYaw=this.fw*.24,n.headPitch=.1*a,n.yOff=Math.sin(a*Math.PI)*.05,n.thL=.06+a*.5,a>.4&&!s.data.sp&&(s.data.sp=1,t.onLungeHit&&t.onLungeHit(this))}else{let a=(e-.62)/.38;n.xOff=this.fw*(r-a*.12),n.spineLean=.8-a*.5,n.tilt=Math.sin(a*Math.PI)*.16,n.crouch=.05,n.shS_z=1.4-a*.15}}_slashUp(t){let e=this.moveFrac,n=this.target,s=this.state;if(e<.3){let r=e/.3;n.twist=-.5*r*this.fw*-1,n.shO_z=-.2-r*1.5,n.shO_x=.45,n.headPitch=-.35*r,n.capeRaise=r*.55,n.crouch=.05*r}else if(e<.72){let r=(e-.3)/.42;n.shS_z=-.75+r*2.5,n.shS_x=-.5+r*1.2,n.elS=-.8+r*.65,n.spineLean=.2-r*.34,n.twist=(-.5+r*.9)*this.fw*-1,n.yOff=Math.sin(r*Math.PI)*.14,n.thL=.06+r*.4,r>.4&&!s.data.sl&&(s.data.sl=1,t.onSlash&&t.onSlash(this,"up"))}else n.shS_z=1.55,n.elS=-.18,n.headPitch=-.42,n.capeRaise=.65,n.tilt=-.1}_taunt(t){let e=this.moveFrac,n=this.target;if(e<.22){let s=e/.22;n.spineLean=.35*s,n.shS_z=-.45+s*.3,n.elS=-.85-s*.45,n.headPitch=.3*s,n.crouch=.08*s}else n.spineLean=.35,n.shS_z=-.15,n.elS=-1.3,n.headPitch=-.18+Math.sin(this.time*3.4)*.06,n.knL=-.45,n.knR=-.45,n.twist=this.fw*.1,this.data.crossMat&&(this.data.crossMat.emissiveIntensity=Math.max(0,Math.sin((e-.22)*Math.PI/.78))*1.8),e>.3&&!this.state.data.fl&&(this.state.data.fl=1,t.onTaunt&&t.onTaunt(this))}_parryHop(t){let e=this.moveFrac,n=this.target,s=this.state;if(e<.45){let r=e/.45,a=Math.sin(r*Math.PI*2);n.xOff=-this.fw*a*.4,n.crouch=.04+Math.abs(a)*.07,n.twist=-this.fw*a*.22,n.thL=.06+Math.max(0,a)*.6,n.thR=.06+Math.max(0,-a)*.6,n.yOff=Math.abs(a)*.08,r>.4&&!s.data.sd&&(s.data.sd=1,t.onStamp&&t.onStamp(this))}else{let r=(e-.45)/.55;n.crouch=.11,n.spineLean=.4,n.shS_z=.45-r*.5,n.shS_x=-.6,n.elS=-1.15,n.twist=this.fw*(.28-r*.35),n.headPitch=.12,n.xOff=this.fw*.2*r}}_slashSpin(t){let e=this.moveFrac,n=this.target;if(e<.45){let s=e/.45;n.shS_z=-.7+s*Math.PI*4,n.elS=-.2,n.spineLean=-.12,n.headPitch=-.24,n.twist=s*.5*this.fw,n.yOff=Math.sin(s*Math.PI)*.1,s>.3&&!this.state.data.w1&&(this.state.data.w1=1,t.onWhoosh&&t.onWhoosh(this))}else{let s=(e-.45)/.55,r=Math.abs(Math.sin(s*Math.PI*3));n.shS_z=1.45-r*1.85,n.elS=-.35,n.spineLean=.15+r*.28,n.crouch=.05+r*.09,n.xOff=this.fw*.3*s,s>.25&&!this.state.data.c1&&(this.state.data.c1=1,t.onSlash&&t.onSlash(this,"down")),s>.72&&!this.state.data.c2&&(this.state.data.c2=1,t.onSlash&&t.onSlash(this,"down"))}}_riposte(t){let e=this.moveFrac,n=this.target;if(e<.22){let s=e/.22;n.crouch=.24*s,n.spineLean=.55*s,n.headPitch=.24,n.knL=-.2-s*.5,n.knR=-.2-s*.5}else if(e<.46){let s=(e-.22)/.24;n.twist=Math.sin(s*Math.PI)*1.9*this.fw,n.crouch=.14,n.shS_z=-1.3,n.xOff=-this.fw*Math.sin(s*Math.PI)*.3}else if(e<.74){let s=(e-.46)/.28;n.shS_z=-1.5+s*2.7,n.shS_x=-1+s*.7,n.elS=-.25,n.twist=this.fw*(.35-s*.6),n.xOff=this.fw*.35*s,s>.4&&!this.state.data.cr&&(this.state.data.cr=1,t.onSlash&&t.onSlash(this,"crescent"))}else{let s=(e-.74)/.26;n.spineLean=.4,n.shS_z=1.6,n.elS=-.08,n.xOff=this.fw*(.35+s*.45),n.headYaw=this.fw*.2}}_freeze(t){Object.assign(this.target,this.frozenPose||No()),this.target.tailAmp=.1,this.target.crouch=(this.frozenPose?this.frozenPose.crouch:0)+Math.max(0,Math.sin(this.time*.8))*.02,this.target.headYaw=Math.sin(this.time*.45)*.2,t.flagDart=!0}_hit(t){let e=this.moveFrac,n=this.target,s=this.state,r=s.data.dir||-this.fw,a=s.data.mag||1;if(e<.4){let o=e/.4;n.spineLean=-.4*o*a,n.headPitch=.5*o*a,n.headYaw=-r*.3*o,n.xOff=r*o*.24*a,n.shO_x=1*o,n.shS_x=.6*o,n.crouch=.1*o,n.tremble=o*.6,o>.5&&!s.data.imp&&(s.data.imp=1,t.onHitImpact&&t.onHitImpact(this))}else{let o=(e-.4)/.6;n.spineLean=-.4*a*(1-o),n.headPitch=.5*a*(1-o),n.xOff=r*.24*a*(1-o),n.crouch=.1*(1-o),n.shO_z=-.2-o*.5,n.tremble=.6*(1-o),n.twist=r*.2*(1-o)}}_stumble(t){let e=this.moveFrac,n=this.target,s=this.state,r=s.data.dir||-this.fw,a=s.data.dist||.7;if(e<.18){let o=e/.18;n.tilt=Math.sin(this.time*20)*.26*o,n.spineLean=.24+Math.sin(this.time*16)*.3*o,n.crouch=.06,n.tremble=o*.8}else if(e<.56){let o=(e-.18)/.38;n.xOff=r*o*a,n.tilt=1.25*o,n.crouch=.1+o*.3,n.yOff=Math.sin(o*Math.PI)*.42,n.shS_x=1.35,n.shO_x=1.35,n.shS_z=-1.3,n.shO_z=-1.3,n.twist=r*o*.5,o>.5&&!s.data.tu&&(s.data.tu=1,t.onTumble&&t.onTumble(this))}else if(e<.8)n.xOff=r*a,n.tilt=1.25+Math.sin(this.time*22)*.1,n.crouch=.4,n.shS_x=1.5,n.shO_x=1.5,n.twist=r*.5;else{let o=(e-.8)/.2;n.xOff=r*(1-o)*a,n.tilt=1.25*(1-o),n.crouch=.4-o*.34,n.twist=r*.5*(1-o)}}_bladeLock(t){let e=this.moveFrac,n=this.target,r=.6+(Math.sin(this.time*7.5)*.5+.5)*.4;n.lock=r,n.spineLean=.5+r*.25,n.shS_z=.55+r*.2,n.shS_x=1.15,n.elS=-.35,n.shO_z=.15,n.shO_x=.9,n.elO=-.5,n.crouch=.1+r*.06,n.tremble=1,n.headPitch=.16,n.headYaw=-this.fw*.1,n.xOff=this.fw*(.05+r*.06),n.tailAmp=.05,e>.1&&!this.state.data.sparkT&&(this.state.data.sparkT=1,t.onLockSparks&&t.onLockSparks(this))}_clash(t){let e=this.moveFrac,n=this.target,s=this.state,r=.5+.5*Math.sin(this.time*9);if(n.spineLean=.45,n.shS_z=1.45,n.shS_x=1,n.elS=-.1,n.shO_z=-.05,n.shO_x=.75,n.crouch=.09,n.lock=.5,n.tremble=.9,s.data.loser){let a=Math.min(e/.62,1);n.xOff=s.data.dir*a*.75,n.tilt=-a*.24,n.spineLean=.45-a*.3,n.tremble=.9*(1-a*.7),a>.55&&!s.data.rk&&(s.data.rk=1,t.onKnockback&&t.onKnockback(this,s.data.dir))}else n.xOff=s.data.dir*Math.min(e/.62,1)*.3,n.spineLean=.45+Math.min(e/.62,1)*.2,n.crouch=.09+r*.03}_dish(t){let n=t.dish.skirt.geometry.attributes.position;t.dish.base||(t.dish.base=Float32Array.from(n.array),n.setUsage(Vi));let s=t.dish.base,r=this.time;for(let a=0;a<n.count;a++){let o=s[a*3],l=s[a*3+1],c=s[a*3+2],h=Cs((.11-l)/.54,0,1),d=(Math.sin(r*2.4+h*2.6)*.022+Math.sin(r*3.9)*.008-this.pose.lean*.05)*h*h,u=1+d*2.6;n.setX(a,o*u),n.setZ(a,c*u+d*.4)}n.needsUpdate=!0}_cape(){let t=this.data.cape,e=t.geometry.attributes.position;this._capeBase||(this._capeBase=Float32Array.from(e.array),e.setUsage(Vi));let n=this._capeBase,s=this.time,r=this.pose.capeRaise||0;for(let a=0;a<e.count;a++){let o=n[a*3],l=n[a*3+1],c=Cs(-l/.78,0,1),h=Math.sin(s*4.2+c*5)*.11*c;e.setX(a,o*(1+r*c*1.8)+h*.4),e.setZ(a,h)}e.needsUpdate=!0,t.rotation.x=-.18-r*1}bladeTipWorld(t=new Ps){return this.data.sword.localToWorld(t.set(1,0,0))}bladeMidWorld(t=new Ps){return this.data.sword.localToWorld(t.set(.55,0,0))}headTipWorld(t=new Ps){return this.data.head.localToWorld(t.set(.3,-.04,0))}headCentreWorld(t=new Ps){return this.data.head.localToWorld(t.set(0,0,0))}};var wr=(i,t="cloth",e={})=>new je({color:i,...Mr[t],...e}),Zi=(i,t,e,n={})=>{var r;let s=new je({color:i,...Mr[t],...n});return e&&(s.map=e.map,e.bump&&(s.bumpMap=e.bump,s.bumpScale=(r=n.bumpScale)!=null?r:.06)),s},Je=(i,t,e=0,n=0,s=0)=>{let r=new Xt(i,t);return r.position.set(e,n,s),r};function v_(){let i=document.createElement("canvas");i.width=128,i.height=128;let t=i.getContext("2d"),e="filter"in t,n=(a,o,l,c,h)=>{t.fillStyle=h,t.fillRect(a-l/2,o-l/2,l,l),t.fillStyle=c;for(let d of[0,Math.PI/4]){t.save(),t.translate(a,o),t.rotate(d),t.beginPath();for(let u=0;u<8;u++){let f=u/8*Math.PI*2,g=f+Math.PI/8;t.lineTo(Math.cos(f)*l*.46,Math.sin(f)*l*.46),t.lineTo(Math.cos(g)*l*.2,Math.sin(g)*l*.2)}t.closePath(),t.fill(),t.restore()}};e&&(t.filter="blur(0.35px)");let s=[["#1F5FA8","#F2EFE9"],["#12755F","#F2EFE9"]];n(32,32,62,...s[0]),n(96,96,62,...s[0]),n(96,32,62,...s[1]),n(32,96,62,...s[1]),e&&(t.filter="none");let r=(()=>{let a=77;return()=>(a=a*16807%2147483647,a%1e3/1e3)})();t.strokeStyle="rgba(60,52,40,0.35)",t.lineWidth=3,t.strokeRect(1.5,1.5,125,125);for(let a=0;a<120;a++)t.fillStyle=r()<.5?"rgba(255,255,255,0.10)":"rgba(0,0,0,0.08)",t.fillRect(r()*128,r()*128,3,3);return Oe(i)}function M_(){let i=document.createElement("canvas");i.width=512,i.height=64;let t=i.getContext("2d");t.fillStyle=re.stoneWall,t.fillRect(0,0,512,64),t.strokeStyle=re.frieze,t.lineWidth=3;for(let e=0;e<512;e+=64){t.beginPath(),t.moveTo(e,32),t.bezierCurveTo(e+12,10,e+28,10,e+32,32),t.bezierCurveTo(e+36,54,e+52,54,e+64,32);for(let[n,s,r]of[[e+20,20,7],[e+44,46,7],[e+32,32,9]])t.moveTo(n+r,s),t.arc(n,s,r,0,Math.PI*2);t.stroke()}return Oe(i)}function S_(){let i=document.createElement("canvas");i.width=512,i.height=512;let t=i.getContext("2d");t.fillStyle=re.floorBase,t.fillRect(0,0,512,512);let e=(()=>{let n=913;return()=>(n=n*16807%2147483647,n%1e3/1e3)})();for(let n=0;n<2600;n++)t.fillStyle=e()<.5?"rgba(255,255,255,0.07)":"rgba(96,78,56,0.08)",t.fillRect(e()*512,e()*512,2+e()*3,2+e()*3);t.strokeStyle="rgba(104,86,62,0.66)",t.lineWidth=2.5;for(let n=0;n<=512;n+=64)t.beginPath(),t.moveTo(n,0),t.lineTo(n,512),t.stroke(),t.beginPath(),t.moveTo(0,n),t.lineTo(512,n),t.stroke();for(let n=0;n<8;n++)for(let s=0;s<8;s++)(n+s)%2||(t.fillStyle="rgba(255,246,226,0.05)",t.fillRect(s*64,n*64,64,64));return Oe(i)}function b_(){let i=document.createElement("canvas");i.width=i.height=512;let t=i.getContext("2d"),e="filter"in t,n=256,s=256,r=150;e&&(t.filter="blur(0.5px)"),t.strokeStyle="rgba(110,90,66,0.85)",t.lineWidth=14,t.beginPath(),t.arc(n,s,r+34,0,Math.PI*2),t.stroke(),t.strokeStyle="rgba(240,232,214,0.5)",t.lineWidth=4,t.beginPath(),t.arc(n,s,r+42,0,Math.PI*2),t.stroke();let a=(o,l)=>{t.fillStyle=l,t.beginPath();for(let c=0;c<8;c++){let h=o+c/8*Math.PI*2,d=h+Math.PI/8;t.lineTo(n+Math.cos(h)*r,s+Math.sin(h)*r),t.lineTo(n+Math.cos(d)*r*.45,s+Math.sin(d)*r*.45)}t.closePath(),t.fill()};a(-Math.PI/2,"#26A69A"),a(Math.PI/2,"#EF5350"),e&&(t.filter="none"),t.lineJoin="round",t.strokeStyle="rgba(60,46,30,0.55)",t.lineWidth=3;for(let o of[-Math.PI/2,Math.PI/2]){t.beginPath();for(let l=0;l<8;l++){let c=o+l/8*Math.PI*2,h=c+Math.PI/8;t.lineTo(n+Math.cos(c)*r,s+Math.sin(c)*r),t.lineTo(n+Math.cos(h)*r*.45,s+Math.sin(h)*r*.45)}t.closePath(),t.stroke()}return t.fillStyle="rgba(236,228,210,0.9)",t.beginPath(),t.arc(n,s,22,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(120,96,64,0.8)",t.lineWidth=6,t.beginPath(),t.arc(n,s,22,0,Math.PI*2),t.stroke(),Oe(i)}function E_(){let i=document.createElement("canvas");i.width=i.height=512;let t=i.getContext("2d");t.clearRect(0,0,512,512);let e=t.createRadialGradient(256,256,150,256,256,256);e.addColorStop(0,re.moonHalo+"cc"),e.addColorStop(1,re.moonHalo+"00"),t.fillStyle=e,t.fillRect(0,0,512,512);let n=(()=>{let r=553;return()=>(r=r*16807%2147483647,r%1e3/1e3)})();t.fillStyle=re.moonBtc,t.beginPath(),t.arc(256,256,190,0,Math.PI*2),t.fill();for(let r=0;r<40;r++){let a=n()*Math.PI*2,o=n()*175,l=256+Math.cos(a)*o,c=256+Math.sin(a)*o,h=6+n()*26;t.fillStyle=n()<.5?"rgba(255,214,150,0.16)":"rgba(150,80,10,0.14)",t.beginPath(),t.arc(l,c,h,0,Math.PI*2),t.fill()}let s=t.createRadialGradient(190,180,40,256,256,230);s.addColorStop(0,"rgba(255,240,214,0.30)"),s.addColorStop(.55,"rgba(255,255,255,0)"),s.addColorStop(1,"rgba(70,30,0,0.34)"),t.fillStyle=s,t.beginPath(),t.arc(256,256,190,0,Math.PI*2),t.fill(),t.strokeStyle=re.moonSymbol,t.lineWidth=22,t.lineCap="round",t.font='bold 260px "Arial Black", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillStyle=re.moonSymbol,t.fillText("B",256,270),t.lineWidth=14;for(let r of[196,316])t.beginPath(),t.moveTo(r,130),t.lineTo(r,382),t.stroke();return Oe(i)}function T_(i,t){let e=document.createElement("canvas");e.width=256,e.height=160;let n=e.getContext("2d");return n.fillStyle=t,n.beginPath(),n.moveTo(8,8),n.lineTo(248,8),n.lineTo(180,80),n.lineTo(248,152),n.lineTo(8,152),n.closePath(),n.fill(),n.strokeStyle="rgba(0,0,0,0.35)",n.lineWidth=6,n.stroke(),n.fillStyle="#FFFFFF",n.font='bold 64px "Arial Black", sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText(i,116,84),Oe(e)}function Lu(i){let t=new Qt;i.add(t);let e={torches:[]};t.userData.torches=e.torches,t.userData.coins=()=>e.coins;let n=new Xt(new Ae(5,5),new Be({map:E_(),transparent:!0,fog:!1,depthWrite:!1}));n.position.set(0,6.6,-7.45),n.renderOrder=-1,t.add(n),e.moon=n,t.userData.moon=n;let s=br({seed:61,base:"#ffffff",blocks:5,alpha:.16,repeatX:4,repeatY:2}),r=8,a=26,o=-7.2,l=1.2,c=.4,h=3.4,d=Zi(re.stoneWall,"cloth",s,{roughness:.95,bumpScale:.12}),u=Je(new He(a,h,.5),d,0,h/2,o);t.add(u);let f=v_();f.repeat.set(10,1);let g=Cn(f.image,1);g.repeat.copy(f.repeat);let y=Je(new He(a,l,.54),new je({map:f,bumpMap:g,bumpScale:.05,roughness:.5}),0,l/2,o+.01);t.add(y);let m=M_();m.repeat.set(6,1);let p=Je(new He(a,c,.55),new je({map:m,roughness:.9}),0,l+c/2,o+.01);t.add(p);let E=br({seed:62,base:"#ffffff",blocks:3,alpha:.2,repeatX:2,repeatY:1}),A=Zi(re.stoneShadow,"cloth",E,{bumpScale:.08}),v=Je(new He(a,.16,.62),A,0,h+.08,o+.02);t.add(v);let M=Zi(re.stoneShadow,"cloth",E,{bumpScale:.1}),T=[-12.1,-7.4,-3.3,3.3,7.4,12.1];for(let pt of T)t.add(Je(new He(1,3.35,.68),M,pt,1.675,o+.09)),t.add(Je(new He(1.2,.22,.76),Zi(re.stoneWall,"cloth",E),pt,3.46,o+.09));let R=Zi(re.stoneWall,"cloth",E,{bumpScale:.1});for(let pt of[-12,-7.4,-3.3,3.3,7.4,12]){let St=Math.abs(pt)>9||Math.abs(pt)<5;t.add(Je(new He(.9,.42,.5),R,pt,h+.37,o)),St&&t.add(Je(new He(.5,.2,.5),R,pt,h+.67,o))}let x=S_();x.repeat.set(3,2);let w=Cn(x.image,.8);w.repeat.copy(x.repeat);let C=new Xt(new Ae(26,15),new je({map:x,bumpMap:w,bumpScale:.06,roughness:.9}));C.rotation.x=-Math.PI/2,C.position.set(0,0,.5),C.receiveShadow=!0,t.add(C);let L=new Xt(new Ae(7.6,7.6),new Be({map:b_(),transparent:!0,depthWrite:!1,opacity:.92}));L.rotation.x=-Math.PI/2,L.position.set(0,.012,.4),L.renderOrder=1,t.add(L);let B=new Xt(new Ae(80,60),new je({color:1314844,roughness:1}));B.rotation.x=-Math.PI/2,B.position.set(0,-.02,0),t.add(B);let z=new Qt;z.position.set(0,0,-3);let N=br({seed:63,base:"#ffffff",blocks:2,alpha:.18,repeatX:2,repeatY:1}),O=Zi(re.stoneShadow,"cloth",N,{bumpScale:.1}),q=Je(new Me(1.5,1.6,.35,8),O,0,.17,0);z.add(q);let X=Je(new Me(1.3,1.3,.2,8),wr("#3A3226","cloth"),0,.3,0);z.add(X);let nt=wr("#B08D57","gold",{metalness:.9,roughness:.35}),J=[];for(let pt=0;pt<7;pt++){let St=Math.random()*Math.PI*2,wt=Math.random()*1,W=Je(new Me(.07,.07,.02,12),nt,Math.cos(St)*wt,.42,Math.sin(St)*wt);W.rotation.x=Math.PI/2+(Math.random()-.5)*.4,z.add(W),J.push(W)}t.add(z),e.coins=J;let tt=br({seed:64,base:"#ffffff",blocks:3,alpha:.14,repeatX:1,repeatY:3}),G=Zi(re.stonePole,"cloth",tt,{bumpScale:.07}),st={};for(let pt of["L","R"]){let St=pt==="L"?-te.spanHalf:te.spanHalf,wt=new Qt;wt.position.set(St,0,0);let W=Je(new Me(.28,.36,te.ropeY,10),G,0,te.ropeY/2,0),$=Je(new He(.8,.22,.8),G,0,te.ropeY+.11,0);wt.add(W,$);let gt=Je(new Me(.03,.03,1.1,6),wr(re.iron,"cloth"),0,te.ropeY+.7,0);wt.add(gt);let Nt=pt==="R",xt=T_(Nt?"BUY":"SELL",Nt?re.flagUp:re.flagDown),Ft=new Xt(new Ae(1.1,.62),new Be({map:xt,side:_e}));Ft.position.set(.62,te.ropeY+1.05,0),wt.add(Ft),st[pt]=Ft,t.add(wt)}e.pennants=st;let lt=[-7.4,-3.3,3.3,7.4];for(let pt of lt){let St=Je(new He(.1,.1,.5),wr(re.iron,"cloth"),pt,3.62,o+.42);t.add(St);let wt=Je(new Me(.14,.07,.18,8),wr(re.iron,"cloth"),pt,3.78,o+.66);t.add(wt);let W=Je(new Oi(.11,.36,8),new Be({color:re.torchFlame,fog:!1}),pt,4.02,o+.66);t.add(W);let $=new yi(re.torchGlow,15,11,1.8);$.position.set(pt,4.05,o+.95),t.add($),e.torches.push({flame:W,light:$,seed:Math.random()*10})}return t}function Du(i,t){for(let e of i.userData.torches||[]){let n=Math.sin(t*1.7+e.seed)*.5+Math.sin(t*3.1+e.seed*2)*.3+Math.sin(t*.9+e.seed)*.2;e.light.intensity=14+n*1.6,e.flame.scale.y=1+n*.18,e.flame.scale.x=1-n*.09}}var Fo=null;function w_(){if(Fo)return Fo;let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.85)"),e.addColorStop(.7,"rgba(255,255,255,0.22)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Fo=Oe(i,{srgb:!0}),Fo}var Uu=new Map;function A_(i){let t=Uu.get(i);return t||(t=new Ht(i),Uu.set(i,t)),t}var Ri=class{constructor(t,{count:e=120,size:n=.05,color:s=16777215,gravity:r=-9.8,drag:a=1.5,life:o=.7}){this.count=e,this.gravity=r,this.drag=a,this.life=o;let l=new fe;this.pos=new Float32Array(e*3),this.vel=new Float32Array(e*3),this.age=new Float32Array(e).fill(1/0),l.setAttribute("position",new be(this.pos,3));let c=new zn({color:s,size:n,map:w_(),alphaTest:.02,transparent:!0,opacity:.95,blending:un,depthWrite:!1,sizeAttenuation:!0});this.points=new pn(l,c),this.points.frustumCulled=!1,t.add(this.points);for(let h=0;h<e;h++)this.pos[h*3+1]=-999}spawn(t,e,n,s=2.5,r=2.5,a=12,o=null){let l=0;for(let c=0;c<this.count&&l<a;c++)this.age[c]<this.life||(this.age[c]=0,this.pos[c*3]=t,this.pos[c*3+1]=e,this.pos[c*3+2]=n,this.vel[c*3]=(Math.random()-.5)*s,this.vel[c*3+1]=Math.random()*r,this.vel[c*3+2]=(Math.random()-.5)*s,l++);o&&this.points.material.color.lerp(A_(o),.35)}update(t){let e=this.gravity;for(let n=0;n<this.count;n++){if(this.age[n]>this.life){this.pos[n*3+1]=-999;continue}this.age[n]+=t;let s=Math.max(0,1-this.drag*t);this.vel[n*3]*=s,this.vel[n*3+1]=this.vel[n*3+1]*s+e*t,this.vel[n*3+2]*=s,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.pos[n*3+1]<.02&&e<0&&(this.vel[n*3+1]*=-.3,this.pos[n*3+1]=.02)}this.points.geometry.attributes.position.needsUpdate=!0}},Bo=class{constructor(t,e=1){e=Math.max(.2,Math.min(1,e)),this.scene=t,this.sparksGold=new Ri(t,{count:Math.round(150*e),size:.05,color:Ei.BUY_BRIGHT}),this.sparksSilver=new Ri(t,{count:Math.round(150*e),size:.05,color:Re.silverBright}),this.embers=new Ri(t,{count:Math.round(60*e),size:.08,color:re.torchFlame,gravity:1.8,drag:.6,life:1.4}),this.jade=new Ri(t,{count:Math.round(60*e),size:.06,color:Ei.SELL_BRIGHT,gravity:-2.5}),this.dust=new Ri(t,{count:Math.round(80*e),size:.14,color:re.floorBase,gravity:-1.2,drag:2.5,life:.9}),this.dust.points.material.blending=jn,this.dust.points.material.opacity=.5,this.fur=new Ri(t,{count:40,size:.07,color:"#E8E4D8",gravity:-1.5,drag:2,life:2.2}),this.fur.points.material.blending=jn,this.fur.points.material.opacity=.9}clashBurst(t){this.sparksGold.spawn(t.x,t.y,t.z,4,3,22),this.sparksSilver.spawn(t.x,t.y,t.z,4,3,22)}lungeSparks(t){this.sparksGold.spawn(t.x,t.y,t.z,2,2,10)}emberBurst(t){this.embers.spawn(t.x,t.y,t.z,1.2,1.6,14)}ghost(t){this.jade.spawn(t.x,t.y,t.z,.8,.6,6,Ei.SELL_BRIGHT)}ghostTile(t){this.jade.spawn(t.x,t.y,t.z,.8,.6,6,Ei.SELL_DEEP)}dustBurst(t){this.dust.spawn(t.x,t.y,t.z,2.2,1.8,16)}furTuft(t){this.fur.spawn(t.x,t.y,t.z,.6,.4,5)}coinPop(t){this.sparksGold.spawn(t.x,t.y,t.z,1.5,3.5,8,"#B08D57")}update(t){for(let e of[this.sparksGold,this.sparksSilver,this.embers,this.jade,this.dust,this.fur])e.update(t)}};function R_(i,t){let e=document.createElement("canvas");e.width=128,e.height=128;let n=e.getContext("2d");n.fillStyle=i,n.strokeStyle=t,n.lineWidth=4,n.lineJoin="round",n.beginPath(),n.ellipse(64,88,30,34,0,0,Math.PI*2),n.fill(),n.beginPath(),n.arc(64,46,22,0,Math.PI*2),n.fill(),n.beginPath(),n.moveTo(47,34),n.lineTo(42,12),n.lineTo(58,26),n.closePath(),n.fill(),n.stroke(),n.beginPath(),n.moveTo(81,34),n.lineTo(86,12),n.lineTo(70,26),n.closePath(),n.fill(),n.stroke(),n.beginPath(),n.moveTo(90,104),n.bezierCurveTo(114,100,116,72,102,62),n.lineWidth=9,n.strokeStyle=i,n.stroke(),n.fillStyle=i,n.beginPath(),n.ellipse(52,118,12,6,0,0,Math.PI*2),n.ellipse(78,118,12,6,0,0,Math.PI*2),n.fill();let s=new cn(e);return s.colorSpace=Ue,s}var C_=["#35D07F","#26A69A","#1B7A4B"],P_=["#EF5350","#A31621","#7A0C14"];function Nu(i,t,e,n){let s=new Qt;i.add(s);let r=t==="buy"?C_:P_,a=t==="buy"?1:-1,o=[],l=r.map(h=>R_(h,"rgba(5,6,15,0.8)")),c=0;for(let h=0;h<n;h++)for(let d=0;d<e;d++){let u=l[c%l.length],f=new Be({map:u,transparent:!0,depthWrite:!1,fog:!0}),g=new Xt(new Ae(.62,.62),f),y=d-(e-1)/2,m=a*(6.1+h*.85+Math.random()*.45),p=-3.3+y*.62+(Math.random()-.5)*.3,E=.75+Math.random()*.4;g.position.set(m,0,p),g.scale.setScalar(E),g.rotation.y=a*-(.45+Math.random()*.3),s.add(g),o.push({m:g,baseY:.31*E,s:E,phase:Math.random()*Math.PI*2,speed:5+Math.random()*4,hop:.6+Math.random()*.8}),c++}return{group:s,cats:o,side:t}}var Oo=class{constructor(t,e=1){let n=Math.max(3,Math.round(6*e)),s=Math.max(2,Math.round(3*e));this.packs=[Nu(t,"buy",n,s),Nu(t,"sell",n,s)],this.cheer={buy:0,sell:0},this.t=0}update(t,e,n=0){this.t+=t;let s=Ie.clamp(e||0,-1,1),r=Ie.clamp(n||0,0,1),a=s>.08?Math.min(1,s*1.4):r*.35,o=s<-.08?Math.min(1,-s*1.4):r*.35,l=Math.min(1,t*4);this.cheer.buy+=(a-this.cheer.buy)*l,this.cheer.sell+=(o-this.cheer.sell)*l;for(let c of this.packs){let h=this.cheer[c.side];for(let d of c.cats){let u=Math.sin(this.t*(1.4+r*1.2)+d.phase)*(.012+r*.02),f=h>.02?Math.abs(Math.sin(this.t*(d.speed+r*3)+d.phase)):0;d.m.position.y=d.baseY+u+f*h*(.34+r*.22)*d.hop,d.m.rotation.z=f*h*.08*(d.m.position.x>0?-1:1)}}}};var Ci=Ie.clamp;var I_={RUSH:{cat:"A",len:.62,cool:2.6,prio:1},LUNGE:{cat:"A",len:.5,cool:2.2,prio:1},SLASH_UP:{cat:"A",len:.55,cool:2.8,prio:1},TAUNT:{cat:"A",len:.8,cool:4.5,prio:2},PARRY_HOP:{cat:"B",len:.45,cool:1.9,prio:1},SLASH_SPIN:{cat:"B",len:.6,cool:2.4,prio:1},RIPOSTE:{cat:"B",len:.6,cool:2.2,prio:2}},Fu=new Set(["RUSH","LUNGE","SLASH_UP","SLASH_SPIN","RIPOSTE","TAUNT"]),L_=new Set(["PARRY_HOP","RIPOSTE","RECOVER"]),D_=["RUSH","SLASH_UP","LUNGE","LUNGE"],U_=["SLASH_SPIN","PARRY_HOP","RIPOSTE","RIPOSTE"],zo=class{constructor({rope:t,cats:e,flag:n,vfx:s,arena:r}){this.rope=t,this.cats=e,this.flag=n,this.vfx=s,this.arena=r,this.pressure=0,this.price=0,this.priceHistory=[],this.high15m=-1/0,this.low15m=1/0,this.prevP=0,this.cools={},this.sideCool={A:0,B:0},this.lowPTime=0,this.freezeUntil=0,this.frozen=!1,this.frozenPose=null,this.stumbling=!1,this.active={},this.now=0,this.onClash=null,this._events=[],this._lastMover="B",this.phase="circle",this.phaseT=0,this.phaseDur=1.4,this.gap=Math.abs(e.A.x-e.B.x),this.gapTarget=2,this.mid=(e.A.x+e.B.x)/2,this.circlePhase=0,this.lastMoveAt=0,this.stats={moves:0,clashes:0,locks:0,hits:0},this.busyUntil=0,this.lockCool=0,this._beats=[],this.engage=0}setPressure(t){this.pressure=Ci(t,-1,1),this._events.push({type:"pressure",P:this.pressure})}setPrice(t){let e=this.now;for(this.price=t,this.priceHistory.push({t:e,px:t});this.priceHistory.length&&e-this.priceHistory[0].t>60;)this.priceHistory.shift();let n=this.priceHistory.filter(s=>e-s.t<=900);if(n.length){let s=-1/0,r=1/0;for(let a of n)a.px>s&&(s=a.px),a.px<r&&(r=a.px);t>this.high15m&&(this.high15m=t,this._events.push({type:"newHigh"})),t<this.low15m&&(this.low15m=t,this._events.push({type:"newLow"})),(s!==this._lastHi||r!==this._lastLo)&&(t>=s&&this._lastHi!==void 0&&s>this._lastHi&&this._events.push({type:"newHigh15"}),t<=r&&this._lastLo!==void 0&&r<this._lastLo&&this._events.push({type:"newLow15"}),this._lastHi=s,this._lastLo=r)}}trendM(){let t=this.priceHistory;if(t.length<2)return 0;let e=t.find(s=>this.now-s.t<=60);if(!e||e.px===this.price)return 0;let n=(this.price-e.px)/e.px;return Ci(n/.005,-1,1)}_after(t,e){this._beats.push({t:this.now+t,fn:e})}update(t){this.now+=t,this._lastDt=t;let e=this.cats.A,n=this.cats.B;if(this._beats.length){let r=[];this._beats=this._beats.filter(a=>a.t<=this.now?(r.push(a),!1):!0);for(let a of r)a.fn()}for(let r of["A","B"]){let a=this.cats[r],o=this.active[r];o&&a.state.name!==o&&(delete this.active[r],(o==="RUSH"||o==="LUNGE")&&this.rope.injectImpulse(a.x,0,-.4,0))}if(this.frozen&&Math.abs(this.pressure)>=.1){this.frozen=!1;for(let r of["A","B"])this.cats[r].setState("IDLE");this.lastMoveAt=this.now}this.frozen||this._pacePair(t);let s=this.trendM();!this.frozen&&!this.stumbling&&(this.mid=Ci(this.mid+s*.5*t,-(te.spanHalf-te.poleClearance-1.2),te.spanHalf-te.poleClearance-1.2),this.circlePhase+=t),!this.frozen&&!this.stumbling&&this._checkTriggers(),!this.frozen&&!this.stumbling&&this.now>this.busyUntil&&this._tempoTick(),this._events.length=0}_pacePair(t){let e=this.cats.A,n=this.cats.B;if(this.phaseT+=t,this.phaseT>=this.phaseDur){this.phaseT=0;let f=Math.abs(this.pressure);this.phase==="circle"?(this.phase="engage",this.phaseDur=.9+Math.random()*1.2+f*.8,this.gapTarget=1.45+Math.random()*.4):this.phase==="engage"?(this.phase="break",this.phaseDur=.35+Math.random()*.5,this.gapTarget=2.25+Math.random()*.7):(this.phase="circle",this.phaseDur=.7+Math.random()*.9,this.gapTarget=1.95+Math.random()*.55)}this.engage=this.phase==="engage"?1:0;let s=Math.abs(e.x-n.x),r=this.gapTarget,a=r<s?2.3:1.6,o=Math.sign(r-s)*Math.min(Math.abs(r-s),a*t),l=this.phase==="circle"?Math.sin(this.circlePhase*1.7)*.1:0,c=this.mid+o/2+l,h=this.mid-o/2-l*.6;if(c<h){let f=c;c=h,h=f}let d=te.spanHalf-te.poleClearance-.4;Math.abs(c)>d&&(e.wobble=.6),e.x=Ci(c,-d,d),n.x=Ci(h,-d,d),this.gap=Math.abs(e.x-n.x);let u=1.05;if(this.gap<u){let f=(u-this.gap)/2,g=e.x>n.x?1:-1;e.x+=g*f,n.x-=g*f,this.gap=Math.abs(e.x-n.x)}}_tempoTick(){let t=this.phase==="engage"?.42:1.05;if(this.now-this.lastMoveAt<t)return;let e=this.pressure,n=e>=0?Math.random()<.5+Math.min(.35,Math.abs(e)*.5):Math.random()<.35,s=n?"A":"B",r=n?"B":"A",a=this.gap<1.5;for(let o of[s,r]){let l=o==="A"?D_:U_,c=a?l.filter(h=>h!=="TAUNT"):l;for(let h of this._shuffled(c))if(this._canMove(o,h)){this._start(o,h,{dir:this._fw(o)});return}}for(let o of["A","B"])for(let l of o==="A"?["TAUNT"]:["PARRY_HOP"])if(this._canMove(o,l)){this._start(o,l,{dir:this._fw(o)});return}}_shuffled(t){let e=t.slice();for(let n=e.length-1;n>0;n--){let s=Math.floor(Math.random()*(n+1));[e[n],e[s]]=[e[s],e[n]]}return e}_fw(t){return t==="A"?-1:1}_checkTriggers(){let t=this.pressure,e=this._events,n=this.priceHistory,s=null;for(let o=n.length-1;o>=0;o--)if(this.now-n[o].t>=5){s=n[o].px;break}if(s&&!this.stumbling&&this.now>this.busyUntil&&Math.abs(this.price-s)/s>.0018&&!this._stumbleCool){this._startPair("STUMBLE"),this._stumbleCool=this.now+6;return}if(this._stumbleCool&&this.now>this._stumbleCool&&(this._stumbleCool=0),Math.abs(t)<.06){if(this.lowPTime+=this._lastDt||0,this.lowPTime>8&&!this.frozen){this.frozen=!0;for(let o of["A","B"])this.cats[o].setState("FREEZE",0,{until:()=>!this.frozen});return}}else this.lowPTime=0;let r=this.trendM();if(this._prevM!==void 0&&r!==0&&this._prevM!==0&&Math.sign(r)!==Math.sign(this._prevM)){if(r>0&&this._canMove("A","TAUNT")){this._start("A","TAUNT",{dir:this._fw("A")});return}if(r<0&&this._canMove("B","RIPOSTE")){this._start("B","RIPOSTE",{dir:this._fw("B")});return}}this._prevM=r;let a=!1;for(let o of e)if(o.type==="pressure"){if(this.prevP<=.35&&o.P>.35&&this._canMove("A","RUSH")){this._start("A","RUSH",{dir:this._fw("A")}),a=!0;break}if(this.prevP>=-.35&&o.P<-.35&&this._canMove("B","PARRY_HOP")){this._start("B","PARRY_HOP",{dir:this._fw("B")}),a=!0;break}this.prevP=o.P}a||(this.prevP=t);for(let o of e){if(o.type==="newHigh15"&&this._canMove("A","SLASH_UP")){this._start("A","SLASH_UP",{dir:this._fw("A")});return}if(o.type==="newLow15"&&this._canMove("B","SLASH_SPIN")){this._start("B","SLASH_SPIN",{dir:this._fw("B")});return}}}_canMove(t,e){let n=this.now;if(this.active[t]||(this.cools[e]||0)>n||this.sideCool[t]>n||n<this.busyUntil)return!1;let s=this.cats[t].state;return!(s.name==="BLADE_LOCK"||s.name==="CLASH"||s.name==="STUMBLE"||s.name==="FREEZE"||s.name==="HIT"||s.name==="RECOVER"&&s.t<.12)}_start(t,e,n={}){let s=I_[e],r=this.cats[t];(e==="RUSH"||e==="LUNGE")&&(n.reach=Ci(this.gap-1.15,.12,1)),this.cools[e]=this.now+s.cool,this.sideCool[t]=this.now+.55,this.active[t]=e,this.lastMoveAt=this.now,this._lastMover=t,this.stats.moves++,r.setState(e,s.len,n);let a=t==="A"?"B":"A";if(Fu.has(e)&&!this.active[a]&&Math.random()<.5){let o=a==="B"?"PARRY_HOP":"LUNGE";this._canMove(a,o)&&this._start(a,o,{dir:this._fw(a)})}}_startPair(t){let e=t==="STUMBLE"?1.6:1.2;this.stumbling=!0,this.active.A=t,this.active.B=t;let n=Ci(Math.abs(this.cats.A.x)-2,.4,1),s=Ci(Math.abs(this.cats.B.x)-2,.4,1);this.cats.A.setState(t,e,{dir:-this._fw("A"),dist:n}),this.cats.B.setState(t,e,{dir:-this._fw("B"),dist:s});let r=(this.cats.A.x+this.cats.B.x)/2,a=this.rope.yAt(r);this._after(e*.5,()=>{if(this.vfx){this.vfx.dustBurst({x:r,y:Math.max(a-.4,.4),z:.2}),this.vfx.furTuft({x:r+.3,y:a+.2,z:.1});let o=this.arena.userData.coins?this.arena.userData.coins():[];if(o&&o[0]){let l=o[Math.floor(Math.random()*o.length)];this.vfx.coinPop({x:l.position.x,y:l.position.y+.4,z:l.position.z})}}this.flag&&(this.flag.spin=1.5)}),this._after(e+.1,()=>{this.stumbling=!1,this.lastMoveAt=this.now})}tryClash(t){let n=t==="A"?"B":"A",s=this.cats[n];if(this.now<this.busyUntil||this.now<this.lockCool)return!1;let r=s.state.name,a=L_.has(r)||Fu.has(r);if(!(this.gap<1.75)||Math.random()>(a?.6:.18))return!1;let l=this.pressure>.02?"A":this.pressure<-.02?"B":Math.random()<.5?"A":"B";return this._beginLock(l),!0}_beginLock(t){let e=t==="A"?"B":"A",n=.38+Math.random()*.22;this.busyUntil=this.now+n+.55,this.active.A="BLADE_LOCK",this.active.B="BLADE_LOCK",this.cats.A.setState("BLADE_LOCK",n,{winner:t==="A"}),this.cats.B.setState("BLADE_LOCK",n,{winner:t==="B"}),this.stats.locks++,this.lastMoveAt=this.now,this._after(n,()=>{let s=t==="A"?-1:1;this.cats[e].setState("CLASH",.5,{dir:s,loser:!0}),this.cats[t].setState("CLASH",.5,{dir:s,loser:!1}),this.active.A="CLASH",this.active.B="CLASH",this.stats.clashes++,this.sideCool.A=this.sideCool.B=this.now+.4,this.onClash&&this.onClash({winner:t,loser:e})}),this._after(n+.5,()=>{this.cats.A.setState("RECOVER",.2),this.cats.B.setState("RECOVER",.2),delete this.active.A,delete this.active.B,this.lastMoveAt=this.now,this.lockCool=this.now+2.2,this.phase="break",this.phaseT=0,this.phaseDur=.5+Math.random()*.5,this.gapTarget=2.1+Math.random()*.7,this._after(.05,()=>{let s=t==="A"?"RUSH":"SLASH_SPIN";this._canMove(t,s)&&this._start(t,s,{dir:this._fw(t)})})})}resolveHit(t,e){let s=t==="A"?"B":"A",r=this.cats[s];if(this.now<this.busyUntil||r.state.name==="STUMBLE"||r.state.name==="BLADE_LOCK"||r.state.name==="CLASH")return;let a=.7+Math.abs(this.pressure)*.8;r.setState("HIT",.3,{dir:e,mag:a}),this.active[s]="HIT",this.stats.hits++,this.busyUntil=this.now+.12}pairCentre(){return(this.cats.A.x+this.cats.B.x)/2}};function Bu(i){let e=new Hn(60,32,20),n=new ke({side:Ze,depthWrite:!1,fog:!1,uniforms:{top:{value:new Ht("#04050E")},mid:{value:new Ht("#0B1030")},horizon:{value:new Ht("#1E1638")},glowA:{value:new Ht("#3A2638")},glowB:{value:new Ht("#1F0F0A")}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
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
      }`}),s=new Xt(e,n);return i.add(s),s}function Ou(i){let t=new Qt,e=[{n:420,r:56,size:1.15,opacity:.95,tw:1.7},{n:300,r:57.5,size:.85,opacity:.75,tw:2.3},{n:200,r:59,size:.62,opacity:.55,tw:3.1}],n=[];for(let l of e){let c=[],h=[],d=[];for(let y=0;y<l.n;y++){let m=Math.random()*Math.PI*2,p=.12+Math.random()*.83,E=Math.sqrt(Math.max(0,1-p*p)),A=l.r;c.push(A*E*Math.cos(m),A*p,A*E*Math.sin(m));let v=Math.random(),M=v<.55?[.86,.89,1]:v<.8?[1,.96,.86]:v<.92?[1,.84,.6]:[.75,.83,1],T=.6+Math.random()*.4;h.push(M[0]*T,M[1]*T,M[2]*T),d.push(Math.random()*Math.PI*2)}let u=new fe;u.setAttribute("position",new jt(c,3)),u.setAttribute("color",new jt(h,3)),u.setAttribute("phase",new jt(d,1));let f=new ke({transparent:!0,depthWrite:!1,fog:!1,blending:un,uniforms:{uTime:{value:0},uBase:{value:l.opacity},uSize:{value:l.size}},vertexShader:`
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
          float tw = 0.62 + 0.38 * sin(uTime * ${l.tw.toFixed(2)} + vPh);
          gl_FragColor = vec4(vC, uBase * m * tw);
        }`}),g=new pn(u,f);g.frustumCulled=!1,g.renderOrder=-4,t.add(g),n.push({points:g,mat:f,speed:l.tw,base:l.opacity})}let s=[],r=[];for(let l=0;l<900;l++){let c=(Math.random()-.5)*Math.PI*2,h=(Math.random()-.5)*.55*(1+Math.sin(c*3)*.3),d=Math.cos(c)*56,u=14+Math.sin(c*1.3)*22,f=Math.sin(c)*40-20,g=d+(Math.random()-.5)*14,y=u+h*22+(Math.random()-.5)*9,m=f+(Math.random()-.5)*14,p=.1+Math.random()*.3,E=Math.random()<.3;s.push(g,Math.max(3,y),m),r.push(p*(E?1:.85),p*.9,p*(E?.75:1))}let a=new fe;a.setAttribute("position",new jt(s,3)),a.setAttribute("color",new jt(r,3));let o=new pn(a,new zn({size:.42,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1,fog:!1,blending:un}));return o.frustumCulled=!1,o.renderOrder=-4,t.add(o),i.add(t),{group:t,update(l){for(let c of n)c.mat.uniforms.uTime.value=l*c.speed;t.rotation.y=l*.004}}}function zu(i){let t=new Qt,e=[];function n(s){let r=document.createElement("canvas");r.width=256,r.height=128;let a=r.getContext("2d");for(let o=0;o<26;o++){let l=30+Math.random()*196,c=40+Math.random()*55,h=16+Math.random()*36,d=a.createRadialGradient(l,c,0,l,c,h),u=.09+Math.random()*.13;d.addColorStop(0,`rgba(198,208,240,${u})`),d.addColorStop(1,"rgba(198,208,240,0)"),a.fillStyle=d,a.beginPath(),a.arc(l,c,h,0,Math.PI*2),a.fill()}return Oe(r)}for(let s=0;s<9;s++){let r=new Be({map:n(s),transparent:!0,depthWrite:!1,fog:!1,opacity:.5+Math.random()*.3,side:_e}),a=5+Math.random()*6,o=new Xt(new Ae(a,a*.4),r);o.position.set((Math.random()-.5)*22,5.2+Math.random()*5.2,-4.6-Math.random()*1.9),o.rotation.x=-.05,o.renderOrder=2,t.add(o),e.push({m:o,speed:.12+Math.random()*.22,phase:Math.random()*100})}return i.add(t),{group:t,update(s,r){for(let a of e)a.m.position.x+=a.speed*r,a.m.position.x>18&&(a.m.position.x=-18),a.m.position.y+=Math.sin(s*.3+a.phase)*.0035,a.m.material.opacity=.34+.22*Math.sin(s*.23+a.phase),a.m.material.opacity<.18&&(a.m.material.opacity=.18)}}}function Hu(i){let t=new Qt,e=3,n=[],s=[];for(let a=0;a<e;a++){let o=document.createElement("canvas");o.width=256,o.height=16;let l=o.getContext("2d"),c=l.createLinearGradient(0,8,256,8);c.addColorStop(0,"rgba(255,255,255,0)"),c.addColorStop(.75,"rgba(200,220,255,0.85)"),c.addColorStop(1,"rgba(255,255,255,1)"),l.fillStyle=c,l.fillRect(0,0,256,16);let h=Oe(o),d=new Be({map:h,transparent:!0,depthWrite:!1,fog:!1,opacity:0,blending:un}),u=new Xt(new Ae(9,.16),d);u.visible=!1,u.renderOrder=-4,t.add(u),s.push(u),n.push(d)}let r=s.map((a,o)=>({active:!1,t:0,dur:0,next:4+o*5,from:new U,to:new U}));return i.add(t),{group:t,update(a,o,l){for(let c=0;c<e;c++){let h=r[c],d=s[c],u=n[c];if(!h.active){if(h.next-=o*(1+l*.6),h.next<=0){h.active=!0,h.t=0,h.dur=.9+Math.random()*.7;let y=Math.PI*(.62+Math.random()*.25),m=40+Math.random()*8;h.from.set(Math.cos(y)*m*(Math.random()<.5?-1:1),20+Math.random()*14,-28-Math.random()*10),h.to.set(h.from.x*-.35-(Math.random()-.5)*20,h.from.y-14-Math.random()*8,h.from.z+4),d.visible=!0}continue}h.t+=o;let f=h.t/h.dur;if(f>=1){h.active=!1,h.next=6+Math.random()*12,d.visible=!1;continue}d.position.lerpVectors(h.from,h.to,f),d.lookAt(d.position.clone().multiplyScalar(2));let g=Math.sin(Math.min(1,f*1.15)*Math.PI);u.opacity=g*.9}}}}function ku(i){let t=new Qt;function e(n,s,r,a,o,l){let c=document.createElement("canvas");c.width=1024,c.height=256;let h=c.getContext("2d");h.clearRect(0,0,1024,256),h.fillStyle=a;let d=o,u=()=>(d=d*16807%2147483647,d%1e3/1e3),f=256*.55,g=256*.85;h.beginPath(),h.moveTo(0,256);let y=(f+g)/2;for(let E=0;E<=1024;E+=16)y+=(u()-.5)*26,y=Math.max(f,Math.min(g,y)),h.lineTo(E,y);h.lineTo(1024,256),h.closePath(),h.fill();let m=new cn(c);m.colorSpace=Ue;let p=new Xt(new Ae(n,s),new Be({map:m,transparent:!0,depthWrite:!1,fog:!1}));return p.position.set(0,l+s/2,r),p.renderOrder=-3,p}return t.add(e(170,10,-54,"#161229",12345,5.6)),t.add(e(150,8,-46,"#1E1836",987654,5)),i.add(t),t}function Vu(i,t=1){let e=Math.round(44*Math.max(.25,Math.min(1,t))),n=new Float32Array(e*3),s=new Float32Array(e),r=[];for(let c=0;c<e;c++){let h=(Math.random()-.5)*20,d=.6+Math.random()*3.4,u=-2+Math.random()*9;r.push([h,d,u]),n[c*3]=h,n[c*3+1]=d,n[c*3+2]=u,s[c]=Math.random()*Math.PI*2}let a=new fe;a.setAttribute("position",new be(n,3)),a.setAttribute("seed",new be(s,1));let o=new ke({transparent:!0,depthWrite:!1,blending:un,uniforms:{uTime:{value:0}},vertexShader:`
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
      }`}),l=new pn(a,o);return l.frustumCulled=!1,i.add(l),{update(c){o.uniforms.uTime.value=c}}}function Gu(i){let t=new Qt;t.position.set(0,.36,-3);let e=160,n=new Float32Array(e*3),s=[];for(let h=0;h<e;h++){let d=Math.random()*Math.PI*2,u=.9+Math.random()*.7;s.push([Math.cos(d)*.22*u,1.7+Math.random()*.9,Math.sin(d)*.22*u]),n[h*3]=0,n[h*3+1]=0,n[h*3+2]=0}let r=new fe;r.setAttribute("position",new be(n,3));let a=new zn({color:10471656,size:.05,transparent:!0,opacity:.7,depthWrite:!1,blending:un,sizeAttenuation:!0}),o=new pn(r,a);t.add(o);let l=[];for(let h=0;h<3;h++){let d=new Xt(new er(.98,1,40),new Be({color:10471656,transparent:!0,opacity:.35,side:_e,depthWrite:!1}));d.rotation.x=-Math.PI/2,d.position.y=.02,d.userData.k=h/3,t.add(d),l.push(d)}i.add(t);let c=0;return{update(h,d){c+=d;let u=o.geometry.attributes.position;for(let f=0;f<e;f++){let g=u.getX(f),y=u.getY(f),m=u.getZ(f),p=s[f];if(g+=p[0]*d,y+=p[1]*d,m+=p[2]*d,p[1]-=4.2*d,y<.02){let E=Math.random()*Math.PI*2,A=.9+Math.random()*.7;p[0]=Math.cos(E)*.22*A,p[1]=1.7+Math.random()*.9,p[2]=Math.sin(E)*.22*A,g=0,y=0,m=0}u.setXYZ(f,g,y,m)}u.needsUpdate=!0;for(let f of l){f.userData.k+=d*.5,f.userData.k>1&&(f.userData.k-=1);let g=f.userData.k,y=.15+g*1.15;f.scale.set(y,y,y),f.material.opacity=.4*(1-g)}}}}function Wu(i,t=1){let e=Math.round(28*Math.max(.25,Math.min(1,t))),n=new Float32Array(e*3),s=new Float32Array(e),r=[-7.5,-2.7,2.7,7.5];for(let c=0;c<e;c++){let h=r[c%4];n[c*3]=h+(Math.random()-.5)*.5,n[c*3+1]=2.9+Math.random()*2.4,n[c*3+2]=-6.2+Math.random()*1.4,s[c]=Math.random()*100}let a=new fe;a.setAttribute("position",new be(n,3)),a.setAttribute("seed",new be(s,1));let o=new ke({transparent:!0,depthWrite:!1,blending:un,uniforms:{uTime:{value:0}},vertexShader:`
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
      }`}),l=new pn(a,o);return l.frustumCulled=!1,i.add(l),{update(c){o.uniforms.uTime.value=c}}}function Xu(i,t={}){let e=new Co({antialias:!0,powerPreference:"high-performance"}),n=(t.vfxScale||1)>.5,s=t.res?Math.max(.4,Math.min(2,t.res)):Math.min(devicePixelRatio||1,n?1.5:1.25);e.setPixelRatio(s),e.setSize(i.clientWidth||1280,i.clientHeight||720),e.shadowMap.enabled=!1,e.toneMapping=cr,e.toneMappingExposure=1.35,Eu(Math.min(8,e.capabilities.getMaxAnisotropy())),i.appendChild(e.domElement);let r=new qs;r.fog=new Xs(re.fog,18,55);function a(){return(i.clientWidth||1280)/(i.clientHeight||720)}let o=new Xe(40,a(),.1,200);o.position.set(0,2.55,6.8),o.lookAt(0,3.15,0);let l=new ar("#BFD4FF",.85);l.position.set(0,14,-8),l.castShadow=!1,r.add(l,l.target);let c=new or("#2A2438",.55);r.add(c);let h=new yi(Ei.BUY_BRIGHT,34,7,1.6),d=new yi(Ei.SELL_BRIGHT,34,7,1.6);r.add(h,d);let u=new rr("#FFD9A0",95,26,.75,.6,1.4);u.position.set(0,8,8),u.target.position.set(0,2,0),r.add(u,u.target);let f=new Do;r.add(f.mesh);let g=new Uo;r.add(g.group);let y=new Tr("A"),m=new Tr("B");y.x=1.1,m.x=-1.1,r.add(y.root,m.root);let p=Lu(r),E=new Bo(r,t.vfxScale||1),A=new zo({rope:f,cats:{A:y,B:m},flag:g,vfx:E,arena:p}),v=new Oo(r,t.vfxScale||1),M={vfxScale:t.vfxScale||1,mouse:{x:0,y:0},mouseT:{x:0,y:0},moonPulse:0,shoot:null,clouds:null,stars:null,fireflies:null,water:null,embers:null};Bu(r),M.stars=Ou(r),M.vfxScale>.3&&(M.clouds=zu(r),M.shoot=Hu(r),M.fireflies=Vu(r,M.vfxScale),M.water=Gu(r),M.embers=Wu(r,M.vfxScale)),ku(r);function T(b){var H,Z;let _=i.clientWidth||innerWidth,I=i.clientHeight||innerHeight;M.mouseT.x=((H=b.clientX)!=null?H:_/2)/_*2-1,M.mouseT.y=((Z=b.clientY)!=null?Z:I/2)/I*2-1}window.addEventListener("pointermove",T,{passive:!0});let R={t:0,amp:0},x=0,w=0,C=0,L=0,B=new U,z=new U,N=new U,O=new U,q=new U,X=t.debug?{checks:0,fixes:0,worst:9,worstOut:9,post:null}:null;function nt(b,_,I){return b.bladeMidWorld(I),_.bladeMidWorld(q),I.lerp(q,.5)}function J(b){let _=te.spanHalf-te.poleClearance;return Ie.clamp(b,-_,_)}let tt=b=>b.data.side,G=b=>tt(b)==="A"?m:y,st=b=>tt(b)==="A"?-1:1;function lt(b,_){return Math.abs(b.x-_.x)}function pt(b,_){R.t=Math.max(R.t,b),R.amp=Math.max(R.amp,_)}function St(b,_){let I=tt(b),H=G(b),ot=-st(b);if(E.lungeSparks(b.bladeMidWorld()),lt(b,H)<1.75){if(A.tryClash(I))return;lt(b,H)<1.65&&(H.x=J(H.x+ot*(_?.5:.3)),A.resolveHit(I,ot),E.dustBurst({x:H.x,y:f.yAt(H.x),z:0}),pt(_?.12:.07,_?.11:.06),_&&(x=Math.max(x,.08)))}f.injectImpulse(b.x,0,-.7,0)}let W={rope:f,flagDart:!1,pressureWobble:0,circlePhase:0,...{onStamp(b){f.injectImpulse(b.x,0,-.9,0),E.dustBurst({x:b.x,y:f.yAt(b.x),z:0})},onLungeHit(b){St(b,!1)},onSlash(b,_){let I=b.bladeTipWorld();tt(b)==="A"?(E.emberBurst(I),_==="up"&&(x=Math.max(x,.22))):(E.ghost(I),E.ghostTile(I)),(_==="crescent"||_==="down")&&St(b,!0),f.injectImpulse(b.x,0,-.7,0)},onWhoosh(b){E.ghost(b.bladeTipWorld())},onTaunt(b){E.lungeSparks(b.bladeTipWorld())},onTumble(b){E.dustBurst({x:b.x,y:f.yAt(b.x),z:0})},onHitImpact(b){E.dustBurst({x:b.x,y:f.yAt(b.x),z:0}),E.furTuft({x:b.x,y:b.root.position.y+.5,z:.1}),pt(.08,.05)},onKnockback(b,_){b.x=J(b.x+_*.4),f.injectImpulse(b.x,0,-1.1,0),E.dustBurst({x:b.x,y:f.yAt(b.x),z:0})},onLockSparks(b){let _=b.bladeMidWorld();E.clashBurst(_),pt(.09,.06)}}};A.onClash=()=>{let b=nt(y,m,N);E.clashBurst(b),E.clashBurst(b),pt(.16,.13),x=Math.max(x,.12),M.moonPulse=1,L=Math.min(1,L+.5)};let $={on:t.demo!==!1,t:0},gt=67e3,Nt=0,xt=!0,Ft=0,he=[],It={armed:!1,ax:1.1,bx:-1.1},Zt={setPressure(b){$.on=!1,Ft=Ie.clamp(b,-1,1)*.16,A.setPressure(b)},setPrice(b){if(!b||b<=0)return;$.on=!1;let _=gt;gt=b,g.tickDir(b>_?1:-1),g.setPrice(b),A.setPrice(b),g.setChange24h(Ie.clamp(A.trendM()*8,-99,99))},setChange24hText(b){g.setChange24hText(b)},onTradeCallout(b){return he.push(b),()=>{let _=he.indexOf(b);_>=0&&he.splice(_,1)}},tradeCallout(b){b&&b.notional>=25e4?(M.moonPulse=1,L=Math.min(1,L+.35)):b&&b.notional>=1e5&&(M.moonPulse=Math.max(M.moonPulse,.6));for(let _=0;_<he.length;_++)try{he[_](b)}catch{}},dispose(){xt=!1,cancelAnimationFrame(Nt),window.removeEventListener("resize",Vt),window.removeEventListener("pointermove",T),e.dispose(),e.domElement.parentElement&&e.domElement.parentElement.removeChild(e.domElement)}};function ie(){let b=i.clientWidth||1280,_=i.clientHeight||720;o.aspect=b/_,o.updateProjectionMatrix(),e.setSize(b,_)}function Vt(){ie()}ie(),window.addEventListener("resize",Vt);let ae=[1,.85,.72,.6,.5],ct={on:t.governor!==!1,base:s,step:0,ratio:s,changes:0,fails:0,window:16,slowMs:20,fastMs:13.5,buf:[],cooldown:0,hold:0,med:0,pending:0,preMed:0,lock:0};function se(b){ct.step=Math.max(0,Math.min(ae.length-1,b)),ct.ratio=ct.base*ae[ct.step],e.setPixelRatio(ct.ratio),ie(),ct.buf.length=0}function ue(b){if(!ct.on||(ct.buf.push(b),ct.buf.length<ct.window))return;let _=ct.buf.slice().sort((I,H)=>I-H);if(ct.med=_[_.length>>1],ct.buf.length=0,ct.pending>0){--ct.pending===0&&(ct.med>ct.preMed*.92?(ct.step>0&&se(ct.step-1),++ct.fails>=2&&(ct.lock=1)):ct.fails=0);return}if(ct.lock){ct.med<ct.fastMs?++ct.lock>8&&(ct.lock=0,ct.fails=0,ct.cooldown=2):ct.lock>8&&(ct.lock=1);return}if(ct.cooldown>0){ct.cooldown--;return}ct.med>ct.slowMs&&ct.step<ae.length-1?(ct.preMed=ct.med,ct.pending=3,ct.hold=0,se(ct.step+1),ct.changes++):ct.med<ct.fastMs&&ct.step>0?++ct.hold>=3&&(se(ct.step-1),ct.cooldown=5,ct.changes++,ct.hold=0):ct.hold=0}let ee=0,P=0,we=performance.now();function $t(){if(!xt)return;Nt=requestAnimationFrame($t);let b=performance.now(),_=Math.min((b-we)/1e3,.05);we=b;let I=_;if(x>0&&(x-=_,I=_*.35),P+=I,ee++,$.on&&!It.armed){$.t+=I;let rt=Math.sin($.t*.4)*.8+Math.sin($.t*.13)*.35+Math.sin($.t*1.7)*.12;if(A.setPressure(rt),ee%30===0){let at=(Math.sin($.t*.05)+Math.sin($.t*.021+2))*30;gt+=at+(Math.random()-.5)*8,g.tickDir(at>0?1:-1),g.setPrice(gt),A.setPrice(gt),g.setChange24h(2.4+Math.sin($.t*.05)*3)}}It.armed&&(A.pressure=0,y.setState("IDLE"),m.setState("IDLE"),y.x=It.ax,m.x=It.bx),W.flagDart=!1,W.circlePhase=A.circlePhase,W.pressureWobble+=(Ft-W.pressureWobble)*Math.min(1,I*5),f.clearLoads(),f.setLoad(y.x+y.pose.xOff,1),f.setLoad(m.x+m.pose.xOff,1),f.step(I),A.update(I),y.update(I,W),m.update(I,W);{let rt=y.x+y.pose.xOff,at=m.x+m.pose.xOff,bt=(D,ht)=>{y.x+=D*ht,m.x-=D*ht,y.root.position.x+=D*ht,m.root.position.x-=D*ht},At=Math.abs(rt-at);At<te.minBodyGap&&bt(rt>=at?1:-1,(te.minBodyGap-At)/2);let zt=te.minHeadCentre*te.minHeadCentre;X&&X.checks++;for(let D=0;D<3;D++){let ht=y.x+y.pose.xOff>=m.x+m.pose.xOff?1:-1;y.headCentreWorld(B),m.headCentreWorld(z);let Q=B.x-z.x,ft=B.y-z.y,_t=B.z-z.z,it=Math.sqrt(Q*Q+ft*ft+_t*_t);if(X&&it<X.worst&&(X.worst=it),it>=te.minHeadCentre)break;let Lt=Math.sqrt(Math.max(0,zt-(ft*ft+_t*_t)))-Math.abs(Q);if(Lt<=0)break;bt(ht,Math.min(Lt/2,.5)),X&&X.fixes++,y.root.updateMatrixWorld(!0),m.root.updateMatrixWorld(!0)}if(X){y.headCentreWorld(B),m.headCentreWorld(z);let D=B.distanceTo(z);D<X.worstOut&&(X.worstOut=D),X.post={hc:+D.toFixed(4),n:ee,gap:+Math.abs(y.x+y.pose.xOff-(m.x+m.pose.xOff)).toFixed(3)}}}f.updateVisual(),g.update(I,f);let H=y.state.name==="BLADE_LOCK"||y.state.name==="CLASH"||m.state.name==="BLADE_LOCK"||m.state.name==="CLASH";if(L=Math.max(0,L-I*.55),H&&(L=Math.min(1,L+I*1.2)),H&&ee%3===0){let rt=nt(y,m,N);E.clashBurst(rt),E.emberBurst(rt)}h.position.set(y.x+1.5,2.6,-1.3),d.position.set(m.x-1.5,2.6,-1.3);let Z=p.userData.pennants;if(Z)for(let rt of["L","R"]){let at=Z[rt];at.rotation.y=Math.sin(P*1.7+(rt==="L"?0:1.5))*.25,at.rotation.x=Math.sin(P*2.3+(rt==="L"?0:1))*.06,at.position.y=te.ropeY+1.05+Math.sin(P*2.1+(rt==="L"?0:.6))*.03}Du(p,P),E.update(I),v.update(I,A.pressure,L),M.moonPulse=Math.max(0,M.moonPulse-I*.55);let ot=rt=>Math.abs(rt)<.07?0:(rt-Math.sign(rt)*.07)/.93;M.mouse.x+=(ot(M.mouseT.x)-M.mouse.x)*Math.min(1,I*1.8),M.mouse.y+=(ot(M.mouseT.y)-M.mouse.y)*Math.min(1,I*1.8),M.stars&&M.stars.update(P),M.clouds&&M.clouds.update(P,I),M.shoot&&M.shoot.update(P,I,M.moonPulse),M.fireflies&&M.fireflies.update(P),M.water&&M.water.update(P,I),M.embers&&M.embers.update(P);let ut=p.userData.moon;ut&&(ut.material.color.setScalar(1+M.moonPulse*.34+Math.sin(P*.8)*.04),ut.scale.setScalar(1+M.moonPulse*.06));let K=Math.max(R.t,0);K>0?R.t-=_:R.amp=0;let j=K/.16*R.amp,et=(y.x+m.x)*.5;w+=(et-w)*Math.min(1,I*3.2),C+=((H?1:0)-C)*Math.min(1,I*2.6);let dt=Math.sin(P*.09)*.18;o.position.set(w+dt+(Math.random()-.5)*j+M.mouse.x*.5,2.55+Math.sin(P*.06)*.1+(Math.random()-.5)*j-M.mouse.y*.3+C*.16,6.8-C*.55),o.lookAt(w*.9,3.15-C*.1,0),e.render(r,o),ue(_*1e3)}return $t(),t.debug&&(window.__duelDebug={rope:f,flag:g,director:A,catA:y,catB:m,arena:p,vfx:E,camera:o,renderer:e,crowd:v,hooksTrade:he,gov:ct,contact:X,quality:()=>({ratio:ct.ratio,base:ct.base,step:ct.step,med:ct.med,changes:ct.changes,on:ct.on,fails:ct.fails,lock:ct.lock}),heat:()=>L,freeze:(b,_=1.1,I=-1.1)=>{It.armed=!!b,It.ax=_,It.bx=I,$.on=!1}}),Zt}function qu(i,t,e={}){let n=typeof e.onCallout=="function"?e.onCallout:null,s=typeof e.onStatus=="function"?e.onStatus:null,r=typeof e.onState=="function"?e.onState:null,a=5e4,o=i.onTrade(h=>{h.notional>=a&&t.tradeCallout&&t.tradeCallout({side:h.side,qty:h.qty,notional:h.notional,price:h.price,ts:h.ts})}),l=i.onChange(h=>{if(typeof h.pressure=="number"&&isFinite(h.pressure)&&t.setPressure(h.pressure),h.price&&t.setPrice(h.price),typeof h.change24hPct=="number"&&isFinite(h.change24hPct)){let d=h.change24hPct>=0?"+":"";t.setChange24hText(`${d}${h.change24hPct.toFixed(2)}% 24h`)}r&&r(h)}),c=i.onStatus(h=>{s&&s(h)});return function(){l(),c(),o()}}function Yu(i,t={}){let e={update(){},notifyStatus(){},trade(){},destroy(){}};if(!i)return e;let n=i.querySelector("canvas"),s=i.querySelector("#chart-chip"),r=i.querySelector("#chart-chip-text");if(!n)return e;let a=n.getContext("2d"),o=58,l=6,c=16,h=8e3,d=9e3,u=0,f=0,g={rev:0,seeded:!1,count:0,t:[],o:[],h:[],l:[],c:[]},y={price:null,status:"",mode:""},m=null,p=-1,E=null,A="",v=Date.now(),M=[];function T(){let G=i.getBoundingClientRect(),st=Math.max(0,n.clientWidth||G.width),lt=Math.max(0,n.clientHeight||0),pt=window.devicePixelRatio||1;u=st,f=lt,n.width=Math.round(st*pt),n.height=Math.round(lt*pt),a.setTransform(pt,0,0,pt,0,0)}let R=new ResizeObserver(()=>{T(),O(!0)});R.observe(n);function x(){let G=getComputedStyle(document.documentElement),st=(lt,pt)=>G.getPropertyValue(lt).trim()||pt;return{up:st("--up","#26A69A"),down:st("--down","#EF5350"),buy:st("--buy","#26A69A"),sell:st("--sell","#EF5350"),gold:st("--gold","#F5C542"),jade:st("--jade","#7FD48A"),ink:st("--ink","#EDE7D8"),dim:st("--ink-dim","#8f8fa8"),edge:st("--edge","rgba(245,197,66,0.25)"),bg:"rgba(5,6,15,0.55)"}}function w(G){if(!(G>0))return 1;let st=Math.pow(10,Math.floor(Math.log10(G)));for(let lt of[1,2,2.5,5,10])if(G<=lt*st)return lt*st;return 10*st}function C(G){return G>=1e3?G.toLocaleString("en-US",{maximumFractionDigits:0}):G.toPrecision(5)}function L(G){return new Date(G).toTimeString().slice(0,8)}function B(G,st,lt,pt){let St=lt,wt=pt-1;if(st<=G[lt])return lt;if(st>G[wt])return wt;for(;St<wt;){let W=St+wt>>1;G[W]<st?St=W+1:wt=W}return St}function z(G,st){let lt=G+"|"+st;lt===A||!s||!r||(A=lt,s.className=G,r.textContent=st)}function N(G){let st=m||y;return g.count?st.mode==="demo"?["demo","SIM TAPE"]:st.status==="open"?G-v>h?["stale","STALE FEED"]:["live","LIVE"]:st.status==="connecting"||st.status==="backoff"?["stale","RECONNECTING\u2026"]:["off","OFFLINE"]:["load","LOADING\u2026"]}function O(G){let st=Date.now();z.apply(null,N(st));let lt=g.count|0;if(u<40||f<40)return;let pt=x();a.clearRect(0,0,u,f);let St=lt;if(St<2){a.fillStyle=pt.dim,a.font='11px Consolas, "Courier New", monospace',a.textAlign="center",a.textBaseline="middle",a.fillText(g.seeded?"awaiting live tape\u2026":"seeding 5 min of 1s candles\u2026",u/2,f/2);return}let wt=u-o,W=f-l-c,$=g.t,gt=g.o,Nt=g.h,xt=g.l,Ft=g.c,he=4,It=0,Zt=Math.max(24,Math.floor(wt/he));St>Zt&&(It=St-Zt);let ie=St-It,Vt=wt/ie,ae=Vt<2.2,ct=1/0,se=-1/0;for(let et=It;et<St;et++)xt[et]<ct&&(ct=xt[et]),Nt[et]>se&&(se=Nt[et]);y.price!=null&&isFinite(y.price)&&(y.price<ct&&(ct=y.price),y.price>se&&(se=y.price));let ue=(se-ct)*.09||Math.abs(se)*4e-4||1;ct-=ue,se+=ue;let ee=et=>l+(se-et)/(se-ct)*W,P=et=>(et-It)*Vt+Vt*.5;a.font='10px Consolas, "Courier New", monospace',a.textBaseline="middle";let we=w((se-ct)/4);a.strokeStyle="rgba(255,255,255,0.07)",a.fillStyle=pt.dim,a.textAlign="left",a.lineWidth=1;for(let et=Math.ceil(ct/we)*we;et<se;et+=we){let dt=Math.round(ee(et))+.5;a.beginPath(),a.moveTo(0,dt),a.lineTo(wt,dt),a.stroke(),a.fillText(C(et),wt+5,dt)}a.textAlign="center",a.textBaseline="alphabetic";let $t=$[It],b=$[St-1];for(let et=Math.ceil($t/3e4)*3e4;et<=b;et+=3e4){if(et===$t&&It!==0)continue;let dt=P(B($,et,It,St));dt<18||dt>wt-18||(a.strokeStyle="rgba(255,255,255,0.12)",a.beginPath(),a.moveTo(dt+.5,f-c),a.lineTo(dt+.5,f-c+3),a.stroke(),a.fillStyle=pt.dim,a.fillText(L(et),dt,f-4))}if(ae){let et=Ft[St-1]>=Ft[It],dt=et?pt.up:pt.down;a.beginPath();for(let at=It;at<St;at++){let bt=P(at),At=ee(Ft[at]);at===It?a.moveTo(bt,At):a.lineTo(bt,At)}a.strokeStyle=dt,a.lineWidth=1.6,a.lineJoin="round",a.stroke();let rt=a.createLinearGradient(0,l,0,l+W);rt.addColorStop(0,et?"rgba(38,166,154,0.20)":"rgba(239,83,80,0.20)"),rt.addColorStop(1,"rgba(0,0,0,0)"),a.lineTo(P(St-1),l+W),a.lineTo(P(It),l+W),a.closePath(),a.fillStyle=rt,a.fill()}else{let et=Math.max(1,Math.min(11,Vt*.62));for(let dt=It;dt<St;dt++){let rt=P(dt),at=Ft[dt]>=gt[dt];a.fillStyle=at?pt.up:pt.down;let bt=ee(Nt[dt]),At=ee(xt[dt]);a.fillRect(rt-.5,bt,1,Math.max(1,At-bt));let zt=ee(gt[dt]),D=ee(Ft[dt]),ht=Math.min(zt,D);a.fillRect(rt-et/2,ht,et,Math.max(1,Math.abs(D-zt)))}}M=M.filter(et=>st-et.ts<d&&et.ts>=$t-1e3);for(let et of M){let dt=P(B($,Math.floor(et.ts/1e3)*1e3,It,St)),rt=ee(Math.min(se-1,Math.max(ct+1,et.price))),at=(st-et.ts)/d,bt=Math.max(0,1-at),At=3+Math.min(3,et.notional/25e4*3);a.globalAlpha=.22*bt,a.beginPath(),a.arc(dt,rt,At+2.5,0,6.284),a.fillStyle=et.side==="buy"?pt.buy:pt.sell,a.fill(),a.globalAlpha=bt,a.beginPath(),a.arc(dt,rt,At,0,6.284),a.fillStyle=et.side==="buy"?pt.buy:pt.sell,a.fill(),a.globalAlpha=1}let _=y.price!=null&&isFinite(y.price)?y.price:Ft[St-1],H=_>=(gt[St-1]!=null?gt[St-1]:_)?pt.up:pt.down,Z=Math.min(l+W,Math.max(l,ee(_)));a.setLineDash([4,3]),a.strokeStyle=H,a.lineWidth=1,a.beginPath(),a.moveTo(0,Z+.5),a.lineTo(wt,Z+.5),a.stroke(),a.setLineDash([]);let ot=_>=1e3?_.toLocaleString("en-US",{maximumFractionDigits:0}):_.toFixed(2);a.font='bold 10px Consolas, "Courier New", monospace';let ut=a.measureText(ot).width,K=15,j=Math.min(l+W-K/2,Math.max(l+K/2,Z));a.fillStyle=H,q(a,wt+2,j-K/2,Math.min(o-4,ut+8),K,3),a.fill(),a.fillStyle="#05060F",a.textAlign="center",a.textBaseline="middle",a.fillText(ot,wt+2+Math.min(o-4,ut+8)/2,j+.5),y.status!=="demo"&&st-v>h&&(a.fillStyle=pt.bg,a.fillRect(0,0,wt,f))}function q(G,st,lt,pt,St,wt){G.beginPath(),G.moveTo(st+wt,lt),G.arcTo(st+pt,lt,st+pt,lt+St,wt),G.arcTo(st+pt,lt+St,st,lt+St,wt),G.arcTo(st,lt+St,st,lt,wt),G.arcTo(st,lt,st+pt,lt,wt),G.closePath()}function X(G,st){if(!G)return;g=G,st&&(y=st),g.rev!==p&&(p=g.rev,v=Date.now());let lt=y.price!==E;E=y.price,(lt||m||st)&&O(),m=null}function nt(G){G&&(m=G,y.status=G.status,y.mode=G.mode,O(),m=null)}function J(G){!G||!isFinite(G.price)||!isFinite(G.notional)||(M.push({ts:G.ts||Date.now(),price:G.price,side:G.side,notional:G.notional}),M.length>40&&M.shift())}function tt(){R.disconnect()}return T(),{update:X,notifyStatus:nt,trade:J,destroy:tt}}var Pi=new URLSearchParams(location.search),Te=i=>document.getElementById(i);function N_(){try{let i=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(i.getContext("webgl2")||i.getContext("webgl")))}catch{return!1}}N_()||(Te("nogl").style.display="flex",Te("status-mode").textContent="NO WEBGL",Te("status-dot").className="");var F_=matchMedia("(pointer: coarse)").matches||innerWidth<640,Ec=Xu(Te("duel-scene"),{demo:!0,debug:!0,vfxScale:F_?.4:Pi.get("nofx")?.2:1,res:Pi.get("res")?Number(Pi.get("res")):void 0,governor:Pi.get("gov")!=="off"&&!Pi.get("res")}),Ar=Te("price"),Zu=Te("chg24h"),B_=Te("tps"),O_=Te("meter-buy"),z_=Te("meter-sell"),H_=Te("meter-buy-pct"),k_=Te("meter-sell-pct"),V_=Te("meter-duel"),G_=Te("meter-duel-text"),W_=Te("status-dot"),X_=Te("status-mode"),Ju=Te("chart-venue"),Sc=Te("callouts"),bc={buy:{el:Te("tag-buy"),state:Te("state-buy"),mom:Te("mom-buy"),last:""},sell:{el:Te("tag-sell"),state:Te("state-sell"),mom:Te("mom-sell"),last:""}},ko=Yu(Te("chart-panel"));function ju(i){return i==null||!isFinite(i)?"\u2014":i>=1e6?(i/1e6).toFixed(1)+"M":i>=1e3?(i/1e3).toFixed(1)+"K":i.toFixed(1)}var Ho=null,$u=0;function q_(i){i!=null&&Ho!=null&&i!==Ho&&(Ar.classList.remove("tick-up","tick-down"),Ar.offsetWidth,Ar.classList.add(i>Ho?"tick-up":"tick-down"),clearTimeout($u),$u=setTimeout(()=>Ar.classList.remove("tick-up","tick-down"),600)),i!=null&&(Ho=i)}var Y_=5e4,Z_=25e4,J_=14;function td(i){if(!i||i.notional<Y_)return;Sc.childElementCount>=J_&&Sc.firstElementChild.remove();let t=i.notional>=Z_,e=i.side==="buy";ko.trade(i);let n=document.createElement("div");n.className=`callout ${i.side}${t?" whale":""}`;let s=document.createElement("span");s.className="head";let r=document.createElement("span");r.className="arr",r.textContent=e?"\u25B2":"\u25BC";let a=document.createElement("span");a.textContent=`${e?"+BUY":"-SELL"} $${ju(i.notional)}`,s.appendChild(r),s.appendChild(a);let o=document.createElement("span");o.className="qty",o.textContent=`${i.qty>=1?i.qty.toFixed(2):i.qty.toFixed(4)} BTC @ ${i.price.toLocaleString("en-US",{maximumFractionDigits:0})}`,n.appendChild(s),n.appendChild(o);let l=e?62:22;n.style.left=l+Math.random()*14+"vw",n.style.top=26+Math.random()*36+"vh",Sc.appendChild(n);let c=n.getBoundingClientRect();c.right>innerWidth-12&&(n.style.left=Math.max(12,innerWidth-c.width-12)+"px"),c.left<12&&(n.style.left="12px"),c.bottom>innerHeight-12&&(n.style.top=Math.max(12,innerHeight-c.height-12)+"px"),setTimeout(()=>n.remove(),t?3e3:2600)}Ec.onTradeCallout(td);var $_=Pi.get("mode")||"auto",ed={mode:$_,emitIntervalMs:250};Pi.get("seed")&&(ed.demoSeed=Number(Pi.get("seed"))||0);var Ji=new window.BtcTradeFeed(ed);function K_(i){let t=i.mode==="demo"||i.status==="demo";W_.className=t?"demo":i.status==="open"?"live":i.status||"";let e=!t&&i.status==="open"&&i.providerLabel?" \xB7 "+i.providerLabel.toUpperCase():"",s=t?"SIMULATION":{open:"LIVE",connecting:"CONNECTING",backoff:"RECONNECTING",stopped:"OFFLINE"}[i.status]||(i.status||"").toUpperCase();X_.textContent=s+e,Ju&&(Ju.textContent=i.providerLabel?String(i.providerLabel).toUpperCase()+" SPOT":t?"SIMULATED":"SPOT MARKET"),ko.notifyStatus(i)}var Q_=qu(Ji,Ec,{onCallout:td,onStatus:K_,onState:nd}),j_={IDLE:"EN GARDE",RECOVER:"RECOVERING",LUNGE:"LUNGE!",RUSH:"RUSH!",SLASH_UP:"SLASH UP!",SLASH_SPIN:"SLASH SPIN!",HIT:"HIT!",STUMBLE:"STAGGERS!",BLADE_LOCK:"BLADE LOCK",CLASH:"CLASH!",FREEZE:"EN GARDE",TAUNT:"TAUNTS!",RIPOSTE:"RIPOSTE!",PARRY_HOP:"PARRY!"};function tx(i){return i==="LUNGE"||i==="RUSH"||i==="RIPOSTE"?"lunge":i==="BLADE_LOCK"?"lock":i==="CLASH"?"clash":i==="HIT"||i==="STUMBLE"?"hit":""}function Ku(i,t){let e=bc[i];if(!e||t===e.last)return;e.last=t;let n=tx(t);e.el.dataset.act=n,e.state.textContent=j_[t]||t}function nd(i){if(ko.update(Ji.candles(),i),q_(i.price),Ar.textContent=i.price?i.price.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):"connecting\u2026",typeof i.change24hPct=="number"&&isFinite(i.change24hPct)){let s=i.change24hPct>=0?"+":"";Zu.textContent=`${s}${i.change24hPct.toFixed(2)}%  ($${s}${ju(Math.abs(i.change24hAbs||0))})`,Zu.className=i.change24hPct>=0?"up":"down"}B_.textContent=isFinite(i.tps)?Math.round(i.tps):"0";let t=i.pressure||0,e=t>0?t*50:0,n=t<0?-t*50:0;O_.style.width=e+"%",z_.style.width=n+"%",H_.textContent=e>.5?Math.round(t*100)+"%":"\u2014",k_.textContent=n>.5?Math.round(-t*100)+"%":"\u2014",bc.buy.mom.style.width=Math.max(4,e*2)+"%",bc.sell.mom.style.width=Math.max(4,n*2)+"%"}var Qu="";setInterval(()=>{try{let i=window.__duelDebug;if(!i||!i.catA||!i.catB)return;let t=i.catA.state.name,e=i.catB.state.name;Ku("buy",t),Ku("sell",e);let n=t+"|"+e;if(n===Qu)return;Qu=n;let s=t!=="IDLE"||e!=="IDLE";V_.classList.toggle("act",s),G_.textContent=t==="BLADE_LOCK"||e==="BLADE_LOCK"?"BLADE LOCK":t==="CLASH"||e==="CLASH"?"CLASH!":t==="IDLE"&&e==="IDLE"?"EN GARDE":"CROSSED SWORDS"}catch{}},125);Ji.start();document.addEventListener("visibilitychange",()=>{document.hidden?Ji.stop():Ji.state().status==="stopped"&&Ji.start()});window.__duelPage={feed:Ji,scene:Ec,unwire:Q_,handleState:nd,chart:ko};})();
/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
