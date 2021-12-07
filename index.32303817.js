function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequirebae0;function s(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e).value}function a(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");var i=t.get(e);if(!i.writable)throw new TypeError("attempted to set read only private field");return i.value=n,n}function o(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequirebae0=r),r.register("3y7ul",(function(t,n){var i,r;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var s={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},r=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("3y7ul").register(JSON.parse('{"9KFsc":"index.32303817.js","7QRtv":"image.cb6b04ad.png","6t7Zz":"sonohoka_pyokottohaeru.ebb39909.wav","eGD62":"hit_kyouda4.c2fae92b.wav","QPPni":"se_etc_003.751a5cc1.wav","7Rhg3":"se_shot_003.7192b630.wav","fQj5x":"kaminarikei_chisaikaminari.a1aac738.wav","8W3sW":"wind3.87bf4484.wav","bQiPl":"cancel2.e1adafec.wav","iQ7l0":"shoot9.2235e996.wav","a9RsU":"mamono_tsukon2.40b037d7.wav","6RTqz":"se_powerup_004.fb62fc04.wav","ltoOe":"se_powerup_008.fd5e1090.wav","2GqAh":"souchi_kaifukusouchi.b8152e4c.wav","hq5Ck":"hit_tsujou3.4da24c3a.wav","csyRH":"audiostock_49758.e0483042.mp3","7daCL":"audiostock_49543.c0017692.mp3"}'));var u=new WeakSet;var c=new WeakMap,h=new WeakMap,d=new WeakMap,p=new WeakMap,f=new WeakMap;function m(){window.cancelAnimationFrame(s(this,d)),"visible"===document.visibilityState&&a(this,d,window.requestAnimationFrame(s(this,f)))}const g=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$|^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,v={};class y{get red(){return s(this,w)}set red(e){a(this,w,e),a(this,S,"")}get green(){return s(this,b)}set green(e){a(this,b,e),a(this,S,"")}get blue(){return s(this,_)}set blue(e){a(this,_,e),a(this,S,"")}get alpha(){return s(this,I)}set alpha(e){a(this,I,e),a(this,S,"")}toString(){return s(this,S)||a(this,S,"#"+T(s(this,w))+T(s(this,b))+T(s(this,_))+T(s(this,I))),s(this,S)}opacity(e){const t=new y(this);return t.alpha=Math.min(Math.max(0,s(this,I)*e),1),t}static parse(e){let t=v[e];if(!t){const n=e.match(g)||[];t=v[e]={red:parseInt(n[1]||n[5]+n[5]||"0",16)/255,green:parseInt(n[2]||n[6]+n[6]||"0",16)/255,blue:parseInt(n[3]||n[7]+n[7]||"0",16)/255,alpha:parseInt(n[4]||n[8]+n[8]||"ff",16)/255}}return new y(t)}static blend(e,t,n=.5){return new y({red:(t.red-e.red)*n+e.red,green:(t.green-e.green)*n+e.green,blue:(t.blue-e.blue)*n+e.blue,alpha:(t.alpha-e.alpha)*n+e.alpha})}constructor(e={}){var t,n,i,r;w.set(this,{writable:!0,value:void 0}),b.set(this,{writable:!0,value:void 0}),_.set(this,{writable:!0,value:void 0}),I.set(this,{writable:!0,value:void 0}),S.set(this,{writable:!0,value:""}),a(this,w,null!==(t=e.red)&&void 0!==t?t:0),a(this,b,null!==(n=e.green)&&void 0!==n?n:0),a(this,_,null!==(i=e.blue)&&void 0!==i?i:0),a(this,I,null!==(r=e.alpha)&&void 0!==r?r:1)}}var w=new WeakMap,b=new WeakMap,_=new WeakMap,I=new WeakMap,S=new WeakMap;function T(e){return Math.min(Math.max(0,Math.floor(255*e)),255).toString(16).padStart(2,"0")}const k={};class E{static load(e,t={}){const n=e instanceof URL?e.href:e;let i=k[n];return i||(i=k[n]=new Image,i.src=n),new E(i,t)}get x(){var e;return null!==(e=s(this,x).x)&&void 0!==e?e:0}get y(){var e;return null!==(e=s(this,x).y)&&void 0!==e?e:0}get width(){var e;return null!==(e=s(this,x).width)&&void 0!==e?e:this.image.width}get height(){var e;return null!==(e=s(this,x).height)&&void 0!==e?e:this.image.height}get originX(){var e;return null!==(e=s(this,x).originX)&&void 0!==e?e:0}get originY(){var e;return null!==(e=s(this,x).originY)&&void 0!==e?e:0}get originLeft(){return this.originX}get originTop(){return this.originY}get originRight(){return this.width-this.originX}get originBottom(){return this.height-this.originY}sub(e){const t={...s(this,x)};var n,i,r,a,o,l;return void 0!==e.x&&(t.x=e.x+(null!==(n=t.x)&&void 0!==n?n:0)),void 0!==e.y&&(t.y=e.y+(null!==(i=t.y)&&void 0!==i?i:0)),void 0!==e.width&&(t.width=e.width+(null!==(r=t.width)&&void 0!==r?r:0)),void 0!==e.height&&(t.height=e.height+(null!==(a=t.height)&&void 0!==a?a:0)),void 0!==e.originX&&(t.originX=e.originX+(null!==(o=t.originX)&&void 0!==o?o:0)),void 0!==e.originY&&(t.originY=e.originY+(null!==(l=t.originY)&&void 0!==l?l:0)),new E(this.image,t)}static loadMap(e,t){const n=t=>{if(Array.isArray(t)){const[n,i,r,s,a,o]=t;return E.load(e,{x:n,y:i,width:r,height:s,originX:null!=a?a:0,originY:null!=o?o:0})}const i=Object.entries(t).map((([e,t])=>[e,n(t)]));return Object.fromEntries(i)};return n(t)}toBox(e,t){return{x:e,y:t,width:this.width,height:this.height,originX:this.originX,originY:this.originY}}constructor(e,t={}){x.set(this,{writable:!0,value:void 0}),this.image=e,a(this,x,{...t})}}var x=new WeakMap;const A={normal:"source-over",add:"lighter",multiply:"multiply",screen:"screen",overlay:"overlay"};var R=new WeakSet;var M=new WeakMap;function O(){const e=this.canvas.width/window.devicePixelRatio,t=this.canvas.height/window.devicePixelRatio,n=Math.floor(window.innerWidth/e),i=Math.floor(window.innerHeight/t);this.canvas.style.width=Math.max(Math.min(n,i),1)*e+"px"}function P(e){return e.toLocaleString("en-US")}function N(e,t){return Math.atan2(t,e)*(180/Math.PI)}function L(e){return(e%=360)<0&&(e+=360),e>180&&(e-=360),e}function C(e,t=1){const n=e*(Math.PI/180);return{x:Math.cos(n)*t,y:Math.sin(n)*t}}function D(e,t){const n=function(e,t){return Math.sqrt(e*e+t*t)}(e,t);return{x:e/n,y:t/n}}function U(e){return Array.from({length:e}).map(((e,t)=>t))}function F(e,t){return(e.width-t.width)/2}function V(e,t){const n=Array.isArray(t)?t:[t];return Promise.race(n.map((t=>new Promise((n=>e.addEventListener(t,n))))))}function j(e,t,n){return(t-e)*n+e}class B{then(e,t){return new B(s(this,$).then(e,t))}isResolved(){return s(this,W)}get value(){return s(this,q)}static from(e){return new B("function"==typeof e?e():e)}constructor(e){$.set(this,{writable:!0,value:void 0}),W.set(this,{writable:!0,value:!1}),q.set(this,{writable:!0,value:void 0}),a(this,$,e),e.then((e=>{a(this,W,!0),a(this,q,e)}))}}var $=new WeakMap,W=new WeakMap,q=new WeakMap;let H=0;const z=V(window,"gamepadconnected").then((()=>{const e=[];return new Promise((t=>{const n=()=>{(()=>{var t;const n=(null===(t=navigator.getGamepads)||void 0===t?void 0:t.call(navigator))||[];for(let t=0;t<n.length;t++){const i=n[t];if(i){let n=e[t];if(n||(n=e[t]=i.buttons.map((e=>e.pressed))),i.buttons.some(((e,t)=>e.pressed!==n[t])))return!0}}return!1})()||H<0?t(!0):H=requestAnimationFrame(n)};n()}))})),G=window.webkitAudioContext||window.AudioContext,K=B.from((async()=>{await Promise.race([V(document,["touchstart","mousedown","keydown"]),z]),cancelAnimationFrame(H),H=-1;const e=new G,t=()=>"visible"===document.visibilityState?e.resume():e.suspend();return await t(),document.addEventListener("visibilitychange",t),e}));var J=new WeakSet;class X{play(){if(a(this,ae,!0),K.isResolved()&&s(this,ie).isResolved()&&s(this,re).isResolved()){if(K.value.currentTime-s(this,ne)>=s(this,Z)){var e,t,n;if(null===(e=s(this,se))||void 0===e||e.stop(),a(this,se,K.value.createBufferSource()),"boolean"==typeof s(this,ee))s(this,se).loop=s(this,ee);else s(this,se).loop=!0,s(this,se).loopStart=null!==(t=s(this,ee).start)&&void 0!==t?t:0,s(this,se).loopEnd=null!==(n=s(this,ee).end)&&void 0!==n?n:0;s(this,se).buffer=s(this,ie).value,s(this,se).connect(s(this,re).value),s(this,se).start(),a(this,ne,K.value.currentTime)}}else Promise.all([K,s(this,ie),s(this,re)]).then((()=>{s(this,ae)&&this.play()}))}stop(){var e;a(this,ae,!1),null===(e=s(this,se))||void 0===e||e.stop(),a(this,se,null)}setMute(e){a(this,te,e),o(this,J,oe).call(this)}setVolume(e){a(this,Q,e),o(this,J,oe).call(this)}constructor(e,t={}){var n,i,r,o;Y.set(this,{writable:!0,value:void 0}),Q.set(this,{writable:!0,value:1}),Z.set(this,{writable:!0,value:void 0}),ee.set(this,{writable:!0,value:void 0}),te.set(this,{writable:!0,value:void 0}),ne.set(this,{writable:!0,value:Number.MIN_SAFE_INTEGER}),ie.set(this,{writable:!0,value:void 0}),re.set(this,{writable:!0,value:void 0}),se.set(this,{writable:!0,value:null}),ae.set(this,{writable:!0,value:!0}),J.add(this),a(this,Y,null!==(n=t.volume)&&void 0!==n?n:1),a(this,Z,null!==(i=t.minTime)&&void 0!==i?i:0),a(this,ee,null!==(r=t.loop)&&void 0!==r&&r),a(this,te,null!==(o=t.mute)&&void 0!==o&&o),a(this,ie,B.from((async()=>{const t=await fetch(e instanceof URL?e.href:e),n=await t.arrayBuffer();return(await K).decodeAudioData(n)}))),a(this,re,B.from((async()=>{const e=await K,t=e.createGain();return t.gain.value=s(this,te)?0:s(this,Q)*s(this,Y),t.connect(e.destination),t})))}}var Y=new WeakMap,Q=new WeakMap,Z=new WeakMap,ee=new WeakMap,te=new WeakMap,ne=new WeakMap,ie=new WeakMap,re=new WeakMap,se=new WeakMap,ae=new WeakMap;function oe(){s(this,re).isResolved()&&(s(this,re).value.gain.value=s(this,te)?0:s(this,Q)*s(this,Y))}class le extends X{constructor(e,t,n){super(e,{volume:t,minTime:n})}}class ue extends X{constructor(e,t,n){super(e,{volume:t,loop:n})}}var ce=new WeakMap,he=new WeakMap;var de=new WeakMap,pe=new WeakMap;const fe=[" ","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"];function me(e){return e instanceof HTMLElement&&!!e.closest("input, textarea, select, button")}window.addEventListener("keydown",(e=>{fe.includes(e.key)&&!me(e.target)&&e.preventDefault()}));let ge={};window.addEventListener("keydown",(e=>{me(e.target)||(ge[e.key.toLocaleLowerCase()]=!0)})),window.addEventListener("keyup",(e=>{me(e.target)||(ge[e.key.toLocaleLowerCase()]=!1)})),window.addEventListener("blur",(()=>{ge={}}));class ve{update(){a(this,be,s(this,we)),"play"===s(this,Te)?(a(this,_e,1+ +s(this,_e)),s(this,Ie)[s(this,Se)]<s(this,_e)&&(a(this,we,!s(this,we)),a(this,_e,0),a(this,Se,1+ +s(this,Se)))):(a(this,we,s(this,ye).some((e=>ge[e]))),a(this,_e,s(this,we)===s(this,be)?s(this,_e)+1:0)),"rec"===s(this,Te)&&(s(this,we)===s(this,be)?s(this,Ie)[s(this,Ie).length-1]=s(this,_e):s(this,Ie).push(s(this,_e)))}get isDown(){return s(this,we)}get isDownChange(){return s(this,we)&&!s(this,be)}get isUpChange(){return!s(this,we)&&s(this,be)}get downCount(){return s(this,we)?s(this,_e):NaN}get upCount(){return s(this,we)?NaN:s(this,_e)}get logMode(){return s(this,Te)}get log(){return s(this,Ie).slice()}set log(e){a(this,Ie,e.slice()),a(this,Te,"pause")}recLog(){a(this,Ie,[s(this,_e),s(this,be)?1:0,s(this,we)?1:0,s(this,_e)]),a(this,Te,"rec")}playLog(){a(this,_e,s(this,Ie)[0]||0),a(this,be,Boolean(s(this,Ie)[1])),a(this,we,Boolean(s(this,Ie)[2])),a(this,Se,3),a(this,Te,"play")}endLog(){a(this,Te,"pause")}constructor(e){ye.set(this,{writable:!0,value:void 0}),we.set(this,{writable:!0,value:!1}),be.set(this,{writable:!0,value:!1}),_e.set(this,{writable:!0,value:0}),Ie.set(this,{writable:!0,value:[]}),Se.set(this,{writable:!0,value:0}),Te.set(this,{writable:!0,value:"pause"}),a(this,ye,(Array.isArray(e)?e:[e]).map((e=>e.toLocaleLowerCase())))}}var ye=new WeakMap,we=new WeakMap,be=new WeakMap,_e=new WeakMap,Ie=new WeakMap,Se=new WeakMap,Te=new WeakMap;function ke(e){let t="";for(let n of e){n=Math.floor(n);let e=(0<=n?n:-n-1).toString(2).length+1,i=0,r="";for(;e>0;)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[31&n|i]+r,e-=5,n>>=5,i=32;t+=r}return t}function Ee(...e){let t=[];for(const n of e)t=t.concat(n.length,n);return t}function xe(e){const t=[];let n=0;for(;n<e.length;){const i=n+1+e[n];if(e.length<i)throw Error("invalid pack size");t.push(e.slice(n+1,i)),n=i}return t}window.addEventListener("contextmenu",(e=>e.preventDefault()));let Ae=null,Re={x:0,y:0};window.addEventListener("pointerdown",(e=>{Ae=e.target,Re.x=e.clientX,Re.y=e.clientY})),window.addEventListener("pointerup",(e=>{Ae=null})),window.addEventListener("pointercancel",(e=>{Ae=null})),window.addEventListener("pointermove",(e=>{Re.x=e.clientX,Re.y=e.clientY})),window.addEventListener("blur",(()=>{Ae=null}));de=new WeakMap,we=new WeakMap,be=new WeakMap,_e=new WeakMap;var Me=new WeakMap,Oe=new WeakMap,Pe=new WeakMap,Ne=new WeakMap,Le=new WeakMap,Ce=new WeakMap,De=(Ie=new WeakMap,Se=new WeakMap,new WeakMap),Ue=new WeakMap,Fe=new WeakMap,Ve=new WeakMap,je=(Te=new WeakMap,new WeakMap),Be=new WeakMap;let $e=[],We=0;class qe{update(){const e=Date.now();var t;We<e&&($e=(null===(t=navigator.getGamepads)||void 0===t?void 0:t.call(navigator))||[],We=e+5);a(this,be,s(this,we)),"play"===s(this,Te)?(a(this,_e,1+ +s(this,_e)),s(this,Ie)[s(this,Se)]<s(this,_e)&&(a(this,we,!s(this,we)),a(this,_e,0),a(this,Se,1+ +s(this,Se)))):(a(this,we,s(this,He).some((e=>{for(const t of $e)if(t&&t.buttons[e]&&t.buttons[e].pressed)return!0}))),a(this,_e,s(this,we)===s(this,be)?s(this,_e)+1:0)),"rec"===s(this,Te)&&(s(this,we)===s(this,be)?s(this,Ie)[s(this,Ie).length-1]=s(this,_e):s(this,Ie).push(s(this,_e)))}get isDown(){return s(this,we)}get isDownChange(){return s(this,we)&&!s(this,be)}get isUpChange(){return!s(this,we)&&s(this,be)}get downCount(){return s(this,we)?s(this,_e):NaN}get upCount(){return s(this,we)?NaN:s(this,_e)}get logMode(){return s(this,Te)}get log(){return s(this,Ie).slice()}set log(e){a(this,Ie,e.slice()),a(this,Te,"pause")}recLog(){a(this,Ie,[s(this,_e),s(this,be)?1:0,s(this,we)?1:0,s(this,_e)]),a(this,Te,"rec")}playLog(){a(this,_e,s(this,Ie)[0]||0),a(this,be,Boolean(s(this,Ie)[1])),a(this,we,Boolean(s(this,Ie)[2])),a(this,Se,3),a(this,Te,"play"),0===s(this,_e)&&s(this,be)===s(this,we)&&a(this,Se,Number.MAX_SAFE_INTEGER)}endLog(){a(this,Te,"pause")}constructor(e){He.set(this,{writable:!0,value:void 0}),we.set(this,{writable:!0,value:!1}),be.set(this,{writable:!0,value:!1}),_e.set(this,{writable:!0,value:0}),Ie.set(this,{writable:!0,value:[]}),Se.set(this,{writable:!0,value:0}),Te.set(this,{writable:!0,value:"pause"}),a(this,He,e)}}var He=new WeakMap;we=new WeakMap,be=new WeakMap,_e=new WeakMap,Ie=new WeakMap,Se=new WeakMap,Te=new WeakMap;class ze{update(){const e=Date.now();var t;We<e&&($e=(null===(t=navigator.getGamepads)||void 0===t?void 0:t.call(navigator))||[],We=e+5);if(a(this,Je,s(this,Ke)),a(this,Qe,s(this,Ye)),"play"===s(this,rt))a(this,Xe,1+ +s(this,Xe)),s(this,et)[s(this,tt)]<s(this,Xe)&&(a(this,Ke,!s(this,Ke)),a(this,Xe,0),a(this,tt,1+ +s(this,tt))),a(this,Ze,1+ +s(this,Ze)),s(this,nt)[s(this,it)]<s(this,Ze)&&(a(this,Ze,0),a(this,it,s(this,it)+2),a(this,Ye,s(this,nt)[s(this,it)-1]||0));else{a(this,Ke,s(this,Ge).some((([e,t])=>{const n=t?1:-1;for(const t of $e)if(t&&t.axes[e]*n>.5)return!0}))),a(this,Xe,s(this,Ke)===s(this,Je)?s(this,Xe)+1:0);const e=s(this,Ge).reduce(((e,[t,n])=>{const i=n?1:-1;for(const n of $e)n&&t<n.axes.length&&(e=Math.max(e,n.axes[t]*i));return e}),0);a(this,Ye,Math.floor(256*(e<.1?0:e))),a(this,Ze,s(this,Ye)===s(this,Qe)?s(this,Ze)+1:0)}"rec"===s(this,rt)&&(s(this,Ke)===s(this,Je)?s(this,et)[s(this,et).length-1]=s(this,Xe):s(this,et).push(s(this,Xe)),s(this,Ye)===s(this,Qe)?s(this,nt)[s(this,nt).length-1]=s(this,Ze):s(this,nt).push(s(this,Ye),s(this,Ze)))}get isDown(){return s(this,Ke)}get isDownChange(){return s(this,Ke)&&!s(this,Je)}get isUpChange(){return!s(this,Ke)&&s(this,Je)}get downCount(){return s(this,Ke)?s(this,Xe):NaN}get upCount(){return s(this,Ke)?NaN:s(this,Xe)}get value(){return s(this,Ye)/256}get logMode(){return s(this,rt)}get log(){return Ee(s(this,et),s(this,nt))}set log(e){const t=xe(e);a(this,et,t[0]||[]),a(this,nt,t[1]||[]),a(this,rt,"pause")}recLog(){a(this,et,[s(this,Xe),s(this,Je)?1:0,s(this,Ke)?1:0,s(this,Xe)]),a(this,nt,[s(this,Ze),s(this,Ye),s(this,Qe),s(this,Ze)]),a(this,rt,"rec")}playLog(){a(this,Xe,s(this,et)[0]||0),a(this,Je,Boolean(s(this,et)[1])),a(this,Ke,Boolean(s(this,et)[2])),a(this,tt,3),a(this,Ze,s(this,nt)[0]||0),a(this,Ye,s(this,nt)[1]||0),a(this,Qe,s(this,nt)[2]||0),a(this,it,3),a(this,rt,"play"),0===s(this,Xe)&&s(this,Je)===s(this,Ke)&&a(this,tt,Number.MAX_SAFE_INTEGER),0===s(this,Ze)&&s(this,Ye)===s(this,Qe)&&a(this,it,Number.MAX_SAFE_INTEGER)}endLog(){a(this,rt,"pause")}constructor(e){Ge.set(this,{writable:!0,value:void 0}),Ke.set(this,{writable:!0,value:!1}),Je.set(this,{writable:!0,value:!1}),Xe.set(this,{writable:!0,value:0}),Ye.set(this,{writable:!0,value:0}),Qe.set(this,{writable:!0,value:0}),Ze.set(this,{writable:!0,value:0}),et.set(this,{writable:!0,value:[]}),tt.set(this,{writable:!0,value:0}),nt.set(this,{writable:!0,value:[]}),it.set(this,{writable:!0,value:0}),rt.set(this,{writable:!0,value:"pause"}),a(this,Ge,e)}}var Ge=new WeakMap,Ke=new WeakMap,Je=new WeakMap,Xe=new WeakMap,Ye=new WeakMap,Qe=new WeakMap,Ze=new WeakMap,et=new WeakMap,tt=new WeakMap,nt=new WeakMap,it=new WeakMap,rt=new WeakMap;const st=new WeakMap;class at{add(...e){for(const t of e)at.remove(t),s(this,ot).add(t),st.set(t,s(this,ot))}run(...e){for(const t of s(this,ot))t(...e)}clear(){s(this,ot).clear()}get isEmpty(){return!s(this,ot).size}get size(){return s(this,ot).size}static remove(e){const t=st.get(e);let n=!1;return t&&(n=t.delete(e),st.delete(e)),n}static of(...e){const t=new at;return t.add(...e),t}constructor(){ot.set(this,{writable:!0,value:new Set})}}var ot=new WeakMap;var lt=new WeakMap;function ut(e){return e instanceof y?new y(e):"object"==typeof e?Object.fromEntries(Object.entries(e).map((([e,t])=>[e,ut(t)]))):e}function ct(e,t,n){return e instanceof y&&t instanceof y?y.blend(e,t,n):"number"==typeof e&&"number"==typeof t?(t-e)*n+e:"boolean"==typeof e&&"boolean"==typeof t?n>0?t:e:"object"==typeof e&&"object"==typeof t?Object.fromEntries(Object.keys(e).map((i=>[i,ct(e[i],t[i],n)]))):ut(void 0===t?e:t)}function ht(e){return t=>t<=0?0:1<=t?1:e(t)}class dt{reset(){s(this,mt)&&s(this,mt).delete(this),a(this,wt,!1),a(this,pt,0),a(this,vt,0),a(this,yt,null),this.value=ut(s(this,bt))}start(e){var t,n;return!1===e?null===(t=s(this,mt))||void 0===t||t.delete(this):null===(n=s(this,mt))||void 0===n||n.add(this),a(this,wt,!0),a(this,pt,0),a(this,vt,0),a(this,yt,null),this.value=ut(s(this,bt)),this}end(){s(this,mt)&&s(this,mt).delete(this),a(this,wt,!0),a(this,vt,s(this,gt).length),a(this,yt,null),this.value=ut(s(this,_t))}to(e,t=0,n=dt.linear){t=Math.max(t,0);const i=a(this,_t,ut(e));return s(this,gt).push((()=>{const e=ut(this.value);return()=>{if(s(this,pt)<=t)return this.value=ct(e,i,n(s(this,pt)/t)),!0;a(this,pt,s(this,pt)-t),this.value=ut(i)}})),this}wait(e){return e=Math.max(e,0),s(this,gt).push((()=>()=>{if(s(this,pt)<=e)return!0;a(this,pt,s(this,pt)-e)})),this}on(e){return s(this,gt).push((()=>{const t=s(this,pt);return()=>(a(this,pt,t),!1===e())})),this}loopStart(e=1/0,t){const n="number"==typeof e?t=>t<e:e;s(this,gt).push((()=>()=>{s(this,It)[i]=0,t&&(s(this,kt)[t]=0)}));const i=s(this,gt).length;return s(this,St).push(i),s(this,It)[i]=0,s(this,gt).push((()=>()=>{let e=s(this,It)[i];t&&(s(this,kt)[t]=e),n(e)||(a(this,vt,s(this,Tt)[i]),a(this,yt,null))})),this}loopEnd(){const e=s(this,gt).length,t=s(this,St).pop();if(void 0===t)throw Error("no corresponding loopStart()");return s(this,Tt)[t]=e,s(this,gt).push((()=>()=>{s(this,It)[t]++,a(this,vt,t-1),a(this,yt,null)})),this}update(e){if(e=null!=e?e:"function"==typeof s(this,ft)?s(this,ft).call(this):s(this,ft),this.running){a(this,pt,s(this,pt)+Math.max(0,e));do{if(s(this,yt)||a(this,yt,s(this,gt)[s(this,vt)]()),s(this,yt).call(this))break;a(this,yt,null),a(this,vt,1+ +s(this,vt))}while(this.running)}return this}get done(){return s(this,vt)>=s(this,gt).length}get started(){return s(this,wt)}get running(){return this.started&&!this.done}getAndSet(e){const t=this.value;return this.value=e,t}get loops(){return s(this,kt)}constructor(e,t=1,n){pt.set(this,{writable:!0,value:0}),ft.set(this,{writable:!0,value:void 0}),mt.set(this,{writable:!0,value:void 0}),gt.set(this,{writable:!0,value:[]}),vt.set(this,{writable:!0,value:0}),yt.set(this,{writable:!0,value:null}),wt.set(this,{writable:!0,value:!1}),bt.set(this,{writable:!0,value:void 0}),_t.set(this,{writable:!0,value:void 0}),It.set(this,{writable:!0,value:{}}),St.set(this,{writable:!0,value:[]}),Tt.set(this,{writable:!0,value:{}}),kt.set(this,{writable:!0,value:{}}),l(this,"value",void 0),a(this,ft,t),a(this,mt,n),a(this,bt,a(this,_t,ut(e))),this.value=ut(e)}}l(dt,"linear",ht((e=>e))),l(dt,"inSine",ht((e=>1-Math.cos(e*(Math.PI/2))))),l(dt,"outSine",ht((e=>Math.sin(e*(Math.PI/2))))),l(dt,"inOutSine",ht((e=>e<.5?.5*dt.inSine(2*e):.5+.5*dt.outSine(2*(e-.5))))),l(dt,"steps",(e=>ht((t=>Math.ceil(t*e)/e)))),l(dt,"frameSteps",(e=>ht((t=>Math.floor(t*e)/(e-1)))));var pt=new WeakMap,ft=new WeakMap,mt=new WeakMap,gt=new WeakMap,vt=new WeakMap,yt=new WeakMap,wt=new WeakMap,bt=new WeakMap,_t=new WeakMap,It=new WeakMap,St=new WeakMap,Tt=new WeakMap,kt=new WeakMap;var Et=new WeakMap,xt=new WeakMap,At=new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rt=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},Mt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,u=r>>2,c=(3&r)<<4|a>>4;let h=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(h=64)),i.push(n[u],n[c],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Rt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],a=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const o=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==a||null==o)throw Error();const l=r<<2|s>>4;if(i.push(l),64!==a){const e=s<<4&240|a>>2;if(i.push(e),64!==o){const e=a<<6&192|o;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ot=function(e){try{return Mt.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Nt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Lt(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Ct(){return"object"==typeof indexedDB}function Dt(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function Ut(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}class Ft extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Vt.prototype.create)}}class Vt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(jt,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Ft(i,a,n)}}const jt=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if($t(n)&&$t(s)){if(!Bt(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function $t(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function qt(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function Ht(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=Gt),void 0===i.error&&(i.error=Gt),void 0===i.complete&&(i.complete=Gt);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Gt(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(e,t=1e3,n=2){const i=t*Math.pow(n,e),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Jt(e){return e&&e._delegate?e._delegate:e}class Xt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Pt;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Yt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt=[];var en,tn;(tn=en||(en={}))[tn.DEBUG=0]="DEBUG",tn[tn.VERBOSE=1]="VERBOSE",tn[tn.INFO=2]="INFO",tn[tn.WARN=3]="WARN",tn[tn.ERROR=4]="ERROR",tn[tn.SILENT=5]="SILENT";const nn={debug:en.DEBUG,verbose:en.VERBOSE,info:en.INFO,warn:en.WARN,error:en.ERROR,silent:en.SILENT},rn=en.INFO,sn={[en.DEBUG]:"log",[en.VERBOSE]:"log",[en.INFO]:"info",[en.WARN]:"warn",[en.ERROR]:"error"},an=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=sn[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class on{constructor(e){this.name=e,this._logLevel=rn,this._logHandler=an,this._userLogHandler=null,Zt.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in en))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?nn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,en.DEBUG,...e),this._logHandler(this,en.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,en.VERBOSE,...e),this._logHandler(this,en.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,en.INFO,...e),this._logHandler(this,en.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,en.WARN,...e),this._logHandler(this,en.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,en.ERROR,...e),this._logHandler(this,en.ERROR,...e)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ln{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const un=new on("@firebase/app"),cn={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},hn=new Map,dn=new Map;function pn(e,t){try{e.container.addComponent(t)}catch(n){un.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function fn(e){const t=e.name;if(dn.has(t))return un.debug(`There were multiple attempts to register component ${t}.`),!1;dn.set(t,e);for(const t of hn.values())pn(t,e);return!0}function mn(e,t){return e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gn=new Vt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Xt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gn.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(e="[DEFAULT]"){const t=hn.get(e);if(!t)throw gn.create("no-app",{appName:e});return t}function wn(e,t,n){var i;let r=null!==(i=cn[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void un.warn(e.join(" "))}fn(new Xt(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var bn;bn="",fn(new Xt("platform-logger",(e=>new ln(e)),"PRIVATE")),wn("@firebase/app","0.7.10",bn),wn("@firebase/app","0.7.10","esm2017"),wn("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
wn("firebase","9.6.0","app");var _n={};!function(e,t){"object"==typeof _n?t(_n):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).idb={})}(_n,(function(e){function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function i(e,t,i){var r,s=new Promise((function(s,a){n(r=e[t].apply(e,i)).then(s,a)}));return s.request=r,s}function r(e,t,n){var r=i(e,t,n);return r.then((function(e){if(e)return new c(e,r.request)}))}function s(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function a(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function o(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return this[t][i].apply(this[t],arguments)})}))}function l(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function u(e){this._index=e}function c(e,t){this._cursor=e,this._request=t}function h(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function p(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function f(e){this._db=e}s(u,"_index",["name","keyPath","multiEntry","unique"]),a(u,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),l(u,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(c,"_cursor",["direction","key","primaryKey","value"]),a(c,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(c.prototype[e]=function(){var t=this,i=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,i),n(t._request).then((function(e){if(e)return new c(e,t._request)}))}))})})),h.prototype.createIndex=function(){return new u(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new u(this._store.index.apply(this._store,arguments))},s(h,"_store",["name","keyPath","indexNames","autoIncrement"]),a(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),l(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),o(h,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},s(d,"_tx",["objectStoreNames","mode"]),o(d,"_tx",IDBTransaction,["abort"]),p.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),o(p,"_db",IDBDatabase,["deleteObjectStore","close"]),f.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),o(f,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[h,u].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),i=n[n.length-1],r=this._store||this._index,s=r[e].apply(r,n.slice(0,-1));s.onsuccess=function(){i(s.result)}})}))})),[u,h].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,i=[];return new Promise((function(r){n.iterateCursor(e,(function(e){e?(i.push(e.value),void 0===t||i.length!=t?e.continue():r(i)):r(i)}))}))})})),e.openDb=function(e,t,n){var r=i(indexedDB,"open",[e,t]),s=r.request;return s&&(s.onupgradeneeded=function(e){n&&n(new p(s.result,e.oldVersion,s.transaction))}),r.then((function(e){return new f(e)}))},e.deleteDb=function(e){return i(indexedDB,"deleteDatabase",[e])},Object.defineProperty(e,"__esModule",{value:!0})}));const In=new Vt("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Sn(e){return e instanceof Ft&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function kn(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function En(e,t){const n=(await t.json()).error;return In.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function xn({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function An(e,{refreshToken:t}){const n=xn(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),n}async function Rn(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const On=/^[cdef][\w-]{21}$/;function Pn(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);return On.test(t)?t:""}catch(e){return""}}function Nn(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln=new Map;function Cn(e,t){const n=Nn(e);Dn(n,t),function(e,t){const n=Fn();n&&n.postMessage({key:e,fid:t});Vn()}(n,t)}function Dn(e,t){const n=Ln.get(e);if(n)for(const e of n)e(t)}let Un=null;function Fn(){return!Un&&"BroadcastChannel"in self&&(Un=new BroadcastChannel("[Firebase] FID Change"),Un.onmessage=e=>{Dn(e.data.key,e.data.fid)}),Un}function Vn(){0===Ln.size&&Un&&(Un.close(),Un=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jn=null;function Bn(){return jn||(jn=_n.openDb("firebase-installations-database",1,(e=>{if(0===e.oldVersion)e.createObjectStore("firebase-installations-store")}))),jn}async function $n(e,t){const n=Nn(e),i=(await Bn()).transaction("firebase-installations-store","readwrite"),r=i.objectStore("firebase-installations-store"),s=await r.get(n);return await r.put(t,n),await i.complete,s&&s.fid===t.fid||Cn(e,t.fid),t}async function Wn(e){const t=Nn(e),n=(await Bn()).transaction("firebase-installations-store","readwrite");await n.objectStore("firebase-installations-store").delete(t),await n.complete}async function qn(e,t){const n=Nn(e),i=(await Bn()).transaction("firebase-installations-store","readwrite"),r=i.objectStore("firebase-installations-store"),s=await r.get(n),a=t(s);return void 0===a?await r.delete(n):await r.put(a,n),await i.complete,!a||s&&s.fid===a.fid||Cn(e,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hn(e){let t;const n=await qn(e,(n=>{const i=function(e){return Kn(e||{fid:Pn(),registrationStatus:0})}(n),r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(In.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(e,t){try{const n=await async function(e,{fid:t}){const n=Tn(e),i=xn(e),r={fid:t,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.5.4"},s={method:"POST",headers:i,body:JSON.stringify(r)},a=await Rn((()=>fetch(n,s)));if(a.ok){const e=await a.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:kn(e.authToken)}}throw await En("Create Installation",a)}(e,t);return $n(e,n)}catch(n){throw Sn(n)&&409===n.customData.serverCode?await Wn(e):await $n(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:zn(e)}:{installationEntry:t}}(e,i);return t=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function zn(e){let t=await Gn(e);for(;1===t.registrationStatus;)await Mn(100),t=await Gn(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Hn(e);return n||t}return t}function Gn(e){return qn(e,(e=>{if(!e)throw In.create("installation-not-found");return Kn(e)}))}function Kn(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}async function Jn({appConfig:e,platformLoggerProvider:t},n){const i=function(e,{fid:t}){return`${Tn(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,n),r=An(e,n),s=t.getImmediate({optional:!0});s&&r.append("x-firebase-client",s.getPlatformInfoString());const a={installation:{sdkVersion:"w:0.5.4"}},o={method:"POST",headers:r,body:JSON.stringify(a)},l=await Rn((()=>fetch(i,o)));if(l.ok){return kn(await l.json())}throw await En("Generate Auth Token",l)}async function Xn(e,t=!1){let n;const i=await qn(e.appConfig,(i=>{if(!Qn(i))throw In.create("not-registered");const r=i.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(e)}(r))return i;if(1===r.requestStatus)return n=async function(e,t){let n=await Yn(e.appConfig);for(;1===n.authToken.requestStatus;)await Mn(100),n=await Yn(e.appConfig);const i=n.authToken;return 0===i.requestStatus?Xn(e,t):i}(e,t),i;{if(!navigator.onLine)throw In.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=async function(e,t){try{const n=await Jn(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await $n(e.appConfig,i),n}catch(n){if(!Sn(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await $n(e.appConfig,n)}else await Wn(e.appConfig);throw n}}(e,t),t}}));return n?await n:i.authToken}function Yn(e){return qn(e,(e=>{if(!Qn(e))throw In.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}))}function Qn(e){return void 0!==e&&2===e.registrationStatus}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Zn(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await Hn(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n.appConfig);return(await Xn(n,t)).token}function ei(e){return In.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=e=>{const t=mn(e.getProvider("app").getImmediate(),"installations").getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:i}=await Hn(t.appConfig);return i?i.catch(console.error):Xn(t).catch(console.error),n.fid}(t),getToken:e=>Zn(t,e)}};fn(new Xt("installations",(e=>{const t=e.getProvider("app").getImmediate(),n=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){if(!e||!e.options)throw ei("App Configuration");if(!e.name)throw ei("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ei(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,platformLoggerProvider:mn(t,"platform-logger"),_delete:()=>Promise.resolve()}}),"PUBLIC")),fn(new Xt("installations-internal",ti,"PRIVATE")),wn("@firebase/installations","0.5.4"),wn("@firebase/installations","0.5.4","esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ni=new on("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ii(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function ri(e,t,n,i){return async function(r,s,a){try{"event"===r?await async function(e,t,n,i,r){try{let s=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);const i=await ii(n);for(const n of e){const e=i.find((e=>e.measurementId===n)),r=e&&t[e.appId];if(!r){s=[];break}s.push(r)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",i,r||{})}catch(e){ni.error(e)}}(e,t,n,s,a):"config"===r?await async function(e,t,n,i,r,s){const a=i[r];try{if(a)await t[a];else{const e=(await ii(n)).find((e=>e.measurementId===r));e&&await t[e.appId]}}catch(e){ni.error(e)}e("config",r,s)}(e,t,n,i,s,a):e("set",s)}catch(e){ni.error(e)}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const si=new Vt("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const ai=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function oi(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function li(e,t=ai,n){const{appId:i,apiKey:r,measurementId:s}=e.options;if(!i)throw si.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw si.create("no-api-key")}const a=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new ci;return setTimeout((async()=>{o.abort()}),void 0!==n?n:6e4),ui({appId:i,apiKey:r,measurementId:s},a,o,t)}async function ui(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=ai){const{appId:s,measurementId:a}=e;try{await function(e,t){return new Promise(((n,i)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener((()=>{clearTimeout(s),i(si.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(i,t)}catch(e){if(a)return ni.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:s,measurementId:a};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:oi(i)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),a=await fetch(s,r);if(200!==a.status&&304!==a.status){let e="";try{const n=await a.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw si.create("config-fetch-failed",{httpStatus:a.status,responseMessage:e})}return a.json()}(e);return r.deleteThrottleMetadata(s),t}catch(t){if(!function(e){if(!(e instanceof Ft&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(r.deleteThrottleMetadata(s),a)return ni.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:s,measurementId:a};throw t}const o=503===Number(t.customData.httpStatus)?Kt(n,r.intervalMillis,30):Kt(n,r.intervalMillis),l={throttleEndTimeMillis:Date.now()+o,backoffCount:n+1};return r.setThrottleMetadata(s,l),ni.debug(`Calling attemptFetch again in ${o} millis`),ui(e,l,i,r)}}class ci{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hi(e,t,n,i,r,s,a){var o;const l=li(e);l.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&ni.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>ni.error(e))),t.push(l);const u=async function(){if(!Ct())return ni.warn(si.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Dt()}catch(e){return ni.warn(si.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}().then((e=>e?i.getId():void 0)),[c,h]=await Promise.all([l,u]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes("https://www.googletagmanager.com/gtag/js"))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`https://www.googletagmanager.com/gtag/js?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,c.measurementId),r("js",new Date);const d=null!==(o=null==a?void 0:a.config)&&void 0!==o?o:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),r("config",c.measurementId,d),c.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.app=e}_delete(){return delete pi[this.app.options.appId],Promise.resolve()}}let pi={},fi=[];const mi={};let gi,vi,yi="dataLayer",wi="gtag",bi=!1;function _i(e,t,n){!function(){const e=[];if(Lt()&&e.push("This is a browser extension environment."),Ut()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=si.create("invalid-analytics-context",{errorInfo:t});ni.warn(n.message)}}();const i=e.options.appId;if(!i)throw si.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw si.create("no-api-key");ni.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=pi[i])throw si.create("already-exists",{id:i});if(!bi){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(yi);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,i,r){let s=function(...e){window[i].push(arguments)};return window[r]&&"function"==typeof window[r]&&(s=window[r]),window[r]=ri(s,e,t,n),{gtagCore:s,wrappedGtag:window[r]}}(pi,fi,mi,yi,wi);vi=e,gi=t,bi=!0}pi[i]=hi(e,fi,mi,t,gi,yi,n);return new di(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ii(e,t,n,i){e=Jt(e),async function(e,t,n,i,r){if(r&&r.global)e("event",n,i);else{const r=await t;e("event",n,Object.assign(Object.assign({},i),{send_to:r}))}}(vi,pi[e.app.options.appId],t,n,i).catch((e=>ni.error(e)))}fn(new Xt("analytics",((e,{options:t})=>_i(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),fn(new Xt("analytics-internal",(function(e){try{const t=e.getProvider("analytics").getImmediate();return{logEvent:(e,n,i)=>Ii(t,e,n,i)}}catch(e){throw si.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),wn("@firebase/analytics","0.7.4"),wn("@firebase/analytics","0.7.4","esm2017");const Si=new class{get fps(){return s(this,c)}get time(){return 1e3*s(this,p)/this.fps}get frameTime(){return 1e3/s(this,c)}constructor({fps:e}){c.set(this,{writable:!0,value:void 0}),l(this,"proc",null),h.set(this,{writable:!0,value:0}),d.set(this,{writable:!0,value:0}),p.set(this,{writable:!0,value:0}),u.add(this),f.set(this,{writable:!0,value:()=>{var e;a(this,d,window.requestAnimationFrame(s(this,f))),a(this,p,1+ +s(this,p));const t=Date.now();t-s(this,h)<.8*this.frameTime||(a(this,h,t),null===(e=this.proc)||void 0===e||e.call(this))}}),a(this,c,e),o(this,u,m).call(this),document.addEventListener("visibilitychange",(()=>o(this,u,m).call(this)))}}({fps:60}),Ti=new class{clear(){s(this,M).setTransform(1,0,0,1,0,0),s(this,M).clearRect(0,0,this.canvas.width,this.canvas.height)}save(){s(this,M).save()}restore(){s(this,M).restore()}getMatrix(){return s(this,M).getTransform()}drawSprite(e,t,n,i,r){e.image.complete&&(i=null!=i?i:e.width,r=null!=r?r:e.height,t=(null!=t?t:0)-e.originX*(i/e.width),n=(null!=n?n:0)-e.originY*(r/e.height),s(this,M).drawImage(e.image,e.x,e.y,e.width,e.height,Math.floor(t),Math.floor(n),Math.floor(i),Math.floor(r)))}drawText(e,t,n,i,r=1){let s=0;for(const l of t){var a,o;if(" "===l){s&&(s+=r),s+=1;continue}const t=null!==(o=null===(a=e[l])||void 0===a?void 0:a.width)&&void 0!==o?o:0;t&&(s&&(s+=r),this.drawSprite(e[l],n+s,i),s+=t)}}measuretext(e,t,n=1){let i=0;for(const a of t){var r,s;if(" "===a){i&&(i+=n),i+=1;continue}const t=null!==(s=null===(r=e[a])||void 0===r?void 0:r.width)&&void 0!==s?s:0;t&&(i&&(i+=n),i+=t)}return i}drawRect(e,t,n,i,r){s(this,M).fillStyle=String(r),s(this,M).fillRect(e,t,n,i)}drawCircle(e,t,n,i){e=Math.floor(e),t=Math.floor(t),n=Math.floor(n),s(this,M).fillStyle=String(i);const r=s(this,M).fillRect.bind(s(this,M));let a=-n,o=0,l=2-2*n;do{r(e-a,t+o,1,1),r(e-o,t-a,1,1),r(e+a,t-o,1,1),r(e+o,t+a,1,1),(n=l)<=o&&(l+=2*++o+1),(n>a||l>o)&&(l+=2*++a+1)}while(a<0)}translate(e,t){s(this,M).translate(e,t)}scale(e,t){s(this,M).scale(e,null!=t?t:e)}rotate(e){s(this,M).rotate(e*Math.PI/180)}opacity(e){s(this,M).globalAlpha=Math.min(Math.max(e,0),1)}blendMode(e){s(this,M).globalCompositeOperation=A[e]}boxToRect(e){const t=this.getMatrix(),n=e.x-e.originX,i=e.y-e.originY,r=t.transformPoint({x:n,y:i}),s=t.transformPoint({x:n+e.width,y:i}),a=t.transformPoint({x:n+e.width,y:i+e.height}),o=t.transformPoint({x:n,y:i+e.height});return{left:Math.min(r.x,s.x,a.x,o.x),top:Math.min(r.y,s.y,a.y,o.y),right:Math.max(r.x,s.x,a.x,o.x),bottom:Math.max(r.y,s.y,a.y,o.y)}}constructor({width:e,height:t,el:n}){l(this,"width",void 0),l(this,"height",void 0),l(this,"canvas",void 0),M.set(this,{writable:!0,value:void 0}),R.add(this);const i="string"==typeof n?document.querySelector(n):n;if(!(i&&i instanceof HTMLCanvasElement))throw Error("not canvas element");this.canvas=i,this.width=i.width=e,this.height=i.height=t,i.setAttribute("style","\n  image-rendering: pixelated;\n  image-rendering: crisp-edges;\n  touch-action: none;\n");const r=i.getContext("2d");if(!r)throw Error("none context2d");a(this,M,r),r.imageSmoothingEnabled=!1,window.addEventListener("resize",(()=>o(this,R,O).call(this))),window.setTimeout((()=>o(this,R,O).call(this)),1)}}({width:160,height:240,el:"#app"}),ki=new class{clear(){s(this,ce).clear(),s(this,he).clear()}subscribe(e){var t;for(const n of s(this,he))null===(t=e[n.type])||void 0===t||t.call(e,n.data);s(this,ce).add(e)}emit(e,t){var n;for(const i of s(this,ce))null===(n=i[e])||void 0===n||n.call(i,t);s(this,he).add({type:e,data:t})}constructor(){ce.set(this,{writable:!0,value:new Set}),he.set(this,{writable:!0,value:new Set})}},Ei=new class{clear(){a(this,pe,[])}emit(e,t,n,i){const r=s(this,de).boxToRect(n);for(const{type:n,data:a,rect:o,eventMap:l}of s(this,pe)){const s=l[e],u=i[n];(s||u)&&r.left<o.right&&o.left<r.right&&r.top<o.bottom&&o.top<r.bottom&&(null==s||s(t),null==u||u(a))}s(this,pe).push({type:e,data:t,rect:r,eventMap:i})}constructor(e){de.set(this,{writable:!0,value:void 0}),pe.set(this,{writable:!0,value:[]}),a(this,de,e),a(this,pe,[])}}(Ti),xi={left:new ve(["ArrowLeft","a"]),right:new ve(["ArrowRight","d"]),up:new ve(["ArrowUp","w"]),down:new ve(["ArrowDown","s"]),fire:new ve([" ","z",".","Control"]),reset:new ve(["Enter","Escape"])},Ai=new class{update(){a(this,je,[]);const e=s(this,de).canvas;Ae instanceof Node||a(this,Be,!1),a(this,be,s(this,we));const t=s(this,Pe),n=s(this,Ne);if("play"===s(this,Te))a(this,_e,1+ +s(this,_e)),s(this,Ie)[s(this,Se)]<s(this,_e)&&(a(this,we,!s(this,we)),a(this,_e,0),a(this,Se,1+ +s(this,Se))),a(this,Le,1+ +s(this,Le)),a(this,Ce,1+ +s(this,Ce)),s(this,De)[s(this,Ue)]<s(this,Le)&&(a(this,Le,0),a(this,Ue,s(this,Ue)+2),a(this,Pe,s(this,De)[s(this,Ue)-1]||0)),s(this,Fe)[s(this,Ve)]<s(this,Ce)&&(a(this,Ce,0),a(this,Ve,s(this,Ve)+2),a(this,Ne,s(this,Fe)[s(this,Ve)-1]||0)),a(this,Me,s(this,Me)+s(this,Pe)),a(this,Oe,s(this,Oe)+s(this,Ne));else{a(this,we,!s(this,Be)&&Ae instanceof Node&&e.contains(Ae)),a(this,_e,s(this,we)===s(this,be)?s(this,_e)+1:0);const i=s(this,Me),r=s(this,Oe),o=e.getBoundingClientRect();a(this,Me,Math.floor((Re.x-o.x)*(e.width/o.width))),a(this,Oe,Math.floor((Re.y-o.y)*(e.height/o.height))),a(this,Pe,s(this,Me)-i),a(this,Ne,s(this,Oe)-r),a(this,Le,s(this,Pe)===t?s(this,Le)+1:0),a(this,Ce,s(this,Ne)===n?s(this,Ce)+1:0)}"rec"===s(this,Te)&&(s(this,we)===s(this,be)?s(this,Ie)[s(this,Ie).length-1]=s(this,_e):s(this,Ie).push(s(this,_e)),s(this,Pe)===t?s(this,De)[s(this,De).length-1]=s(this,Le):s(this,De).push(s(this,Pe),s(this,Le)),s(this,Ne)===n?s(this,Fe)[s(this,Fe).length-1]=s(this,Ce):s(this,Fe).push(s(this,Ne),s(this,Ce))),s(this,we)&&!s(this,be)&&(a(this,Pe,0),a(this,Ne,0))}get isDown(){return s(this,we)}get isDownChange(){return s(this,we)&&!s(this,be)}get isUpChange(){return!s(this,we)&&s(this,be)}get downCount(){return s(this,we)?s(this,_e):NaN}get upCount(){return s(this,we)?NaN:s(this,_e)}get pos(){return{x:s(this,Me),y:s(this,Oe)}}get vec(){return{x:s(this,Pe),y:s(this,Ne)}}onDown(e,t){const n=s(this,de).boxToRect(e);s(this,je).push({rect:n,callback:t})}get logMode(){return s(this,Te)}get log(){return Ee(s(this,Ie),s(this,De),s(this,Fe))}set log(e){const t=xe(e);a(this,Ie,t[0]||[]),a(this,De,t[1]||[]),a(this,Fe,t[2]||[]),a(this,Te,"pause")}recLog(){a(this,Ie,[s(this,_e),s(this,be)?1:0,s(this,we)?1:0,s(this,_e)]),a(this,De,[s(this,Le),s(this,Me),s(this,Pe),s(this,Le)]),a(this,Fe,[s(this,Ce),s(this,Oe),s(this,Ne),s(this,Ce)]),a(this,Te,"rec")}playLog(){a(this,_e,s(this,Ie)[0]||0),a(this,be,Boolean(s(this,Ie)[1])),a(this,we,Boolean(s(this,Ie)[2])),a(this,Se,3),a(this,Le,s(this,De)[0]||0),a(this,Me,s(this,De)[1]||0),a(this,Pe,s(this,De)[2]||0),a(this,Ue,3),a(this,Ce,s(this,Fe)[0]||0),a(this,Oe,s(this,Fe)[1]||0),a(this,Ne,s(this,Fe)[2]||0),a(this,Ve,3),a(this,Te,"play")}endLog(){a(this,Te,"pause")}constructor(e){de.set(this,{writable:!0,value:void 0}),we.set(this,{writable:!0,value:!1}),be.set(this,{writable:!0,value:!1}),_e.set(this,{writable:!0,value:0}),Me.set(this,{writable:!0,value:0}),Oe.set(this,{writable:!0,value:0}),Pe.set(this,{writable:!0,value:0}),Ne.set(this,{writable:!0,value:0}),Le.set(this,{writable:!0,value:0}),Ce.set(this,{writable:!0,value:0}),Ie.set(this,{writable:!0,value:[]}),Se.set(this,{writable:!0,value:0}),De.set(this,{writable:!0,value:[]}),Ue.set(this,{writable:!0,value:0}),Fe.set(this,{writable:!0,value:[]}),Ve.set(this,{writable:!0,value:0}),Te.set(this,{writable:!0,value:"pause"}),je.set(this,{writable:!0,value:[]}),Be.set(this,{writable:!0,value:!1}),a(this,de,e);const t=s(this,de).canvas;t.addEventListener("pointerdown",(e=>{const n=t.getBoundingClientRect(),i=Math.floor((e.clientX-n.x)*t.width/n.width),r=Math.floor((e.clientY-n.y)*t.height/n.height);for(const{rect:e,callback:t}of s(this,je))e.left<=i&&i<e.right&&e.top<=r&&r<e.bottom&&(a(this,Be,!0),t())}))}}(Ti),Ri={left:new qe([14]),right:new qe([15]),up:new qe([12]),down:new qe([13]),fire:new qe([0,1,2,3,4,5]),reset:new qe([6,7,8,9,10,11])},Mi={left:new ze([[0,!1],[2,!1]]),right:new ze([[0,!0],[2,!0]]),up:new ze([[1,!1],[3,!1]]),down:new ze([[1,!0],[3,!0]])},Oi=[xi.up,xi.right,xi.down,xi.left],Pi=[Ri.up,Ri.right,Ri.down,Ri.left],Ni=[Mi.up,Mi.right,Mi.down,Mi.left],Li=[xi.fire,Ai,Ri.fire],Ci=[xi.reset,Ri.reset],Di=[...Oi,...Li,...Pi],Ui=[...Di,...Ni],Fi=new class{update(){for(const e of s(this,At))e.update(),e.done&&s(this,At).delete(e)}from(e){return new dt(e,s(this,xt),s(this,At))}clear(){s(this,At).clear()}constructor(e){Et.set(this,{writable:!0,value:void 0}),xt.set(this,{writable:!0,value:void 0}),At.set(this,{writable:!0,value:new Set}),a(this,Et,e),a(this,xt,(()=>s(this,Et).frameTime))}}(Si),Vi={bg:new at,effectBack:new at,enemyNotice:new at,player:new at,playerBullet:new at,effectOverPlayer:new at,enemy:new at,enemyBullet:new at,effectOverEnemy:new at,ui:new at},ji=new class{get seed(){return 0|s(this,lt)[0]}set seed(e){s(this,lt)[0]=e}updateSeed(){return s(this,lt)[0]=4294967295*Math.random()+1,this.seed}nextInt(e,t){s(this,lt)[0]^=s(this,lt)[0]<<13,s(this,lt)[0]^=s(this,lt)[0]>>17,s(this,lt)[0]^=s(this,lt)[0]<<5;const n=s(this,lt)[0]/4294967296;return void 0===t&&(t=e,e=0),Math.floor(n*(t-e))+e}nextFloat(e,t){s(this,lt)[0]^=s(this,lt)[0]<<13,s(this,lt)[0]^=s(this,lt)[0]>>17,s(this,lt)[0]^=s(this,lt)[0]<<5;return void 0===t&&(t=e,e=0),s(this,lt)[0]/4294967296*(t-e)+e}shuffle(e){return e.map((e=>({num:this.nextFloat(1),val:e}))).sort(((e,t)=>e.num-t.num)).map((({val:e})=>e))}constructor(){lt.set(this,{writable:!0,value:Uint32Array.of(4294967295*Math.random()+1)})}};var Bi;Bi=new URL(r("3y7ul").resolve("7QRtv"),import.meta.url).toString();const $i=E.loadMap(new URL(Bi),{bg:[1,1,32,32,0,16],buttonLight:[1,34,34,34],buttonMute:{0:[36,34,34,34],1:[70,34,34,34]},buttonReset:[1,69,34,34],buttonTwitter:[1,104,34,34],card:{top:[34,1,144,4],body:[34,5,144,2],bottom:[34,7,144,4]},enemyBulletLargeTake:[34,12,14,13,7,5],enemyBulletLarge:{0:[49,12,16,15,8,6],1:[65,12,16,15,8,6]},enemyBulletTake:[34,26,8,7,4,3],enemyBullet:{0:[82,12,10,9,5,4],1:[92,12,10,9,5,4]},enemyLargeTake:[179,1,32,31,16,12],enemyLarge:{body:[36,69,34,33,17,13],bodyFlash:[36,103,34,33,17,13],gauge:[74,73,26,24,13,9],gaugeFlash:[74,107,26,24,13,9]},enemyNoticeLarge:[82,22,12,11,6,5.5],enemyNotice:[103,12,8,7,4,3.5],enemyTakeChip:[103,20,8,8,4,4],enemyTake:[112,12,16,15,8,6],enemy:{body:[36,138,18,17,9,7],bodyFlash:[36,156,18,17,9,7],gauge:[57,141,12,10,6,4],gaugeFlash:[57,159,12,10,6,4]},finish:[212,1,56,12],fontRate:{normal:{0:[269,1,5,7],1:[275,1,5,7],2:[281,1,5,7],3:[287,1,5,7],4:[293,1,5,7],5:[299,1,5,7],6:[305,1,5,7],7:[311,1,5,7],8:[317,1,5,7],9:[323,1,5,7],"*":[329,1,5,7],"+":[335,1,5,7]},flash:{0:[269,9,5,7],1:[275,9,5,7],2:[281,9,5,7],3:[287,9,5,7],4:[293,9,5,7],5:[299,9,5,7],6:[305,9,5,7],7:[311,9,5,7],8:[317,9,5,7],9:[323,9,5,7],"*":[329,9,5,7],"+":[335,9,5,7]}},fontUiL:{0:[341,1,8,9],1:[350,1,8,9],2:[359,1,8,9],3:[368,1,8,9],4:[377,1,8,9],5:[386,1,8,9],6:[395,1,8,9],7:[404,1,8,9],8:[413,1,8,9],9:[422,1,8,9],t:[431,1,8,9]},fontUiS:{0:[341,11,3,5],1:[345,11,3,5],2:[349,11,3,5],3:[353,11,3,5],4:[357,11,3,5],5:[361,11,3,5],6:[365,11,3,5],7:[369,11,3,5],8:[373,11,3,5],9:[377,11,3,5],A:[381,11,3,5],E:[385,11,3,5],I:[389,11,3,5],L:[393,11,3,5],P:[397,11,3,5],R:[401,11,3,5],S:[405,11,3,5],T:[409,11,3,5],U:[413,11,3,5],Y:[417,11,3,5],".":[421,11,3,5],"/":[425,11,3,5]},fontUi:{normal:{0:[341,17,5,7],1:[347,17,5,7],2:[353,17,5,7],3:[359,17,5,7],4:[365,17,5,7],5:[371,17,5,7],6:[377,17,5,7],7:[383,17,5,7],8:[389,17,5,7],9:[395,17,5,7],y:[401,17,7,7],h:[409,17,7,7],".":[417,17,1,7],",":[419,17,1,8]},flash:{0:[341,25,5,7],1:[347,25,5,7],2:[353,25,5,7],3:[359,25,5,7],4:[365,25,5,7],5:[371,25,5,7],6:[377,25,5,7],7:[383,25,5,7],8:[389,25,5,7],9:[395,25,5,7],y:[401,25,7,7],h:[409,25,7,7],".":[417,25,1,7],",":[419,25,1,8]}},newRecord:{normal:[105,34,94,12],flash:[105,46,94,12]},playerBulletHit:[129,12,8,8,4,4],playerBullet:[129,21,8,8,4,4],playerDestroyChip:[138,12,8,7,4,3],playerDestroy:[440,1,16,24,8,18],player:{normal:[1,139,18,26,9,19],flash:[1,165,18,26,9,19]},pressAnyButton:[105,59,89,9],replayLoading:[200,34,90,10],replayNow:[212,14,40,7],replayReady:[291,34,97,10],scoreBg:[105,69,130,12],start:[269,17,46,12],success:{normal:[105,82,88,44,44,22],flash:[105,126,88,44,44,22]},tips:{0:[194,82,108,40],1:[389,34,99,25],2:[303,108,76,25],3:[395,82,110,40],4:[395,123,87,40],5:[105,171,114,25],6:[220,171,114,25],7:[105,197,94,40],8:[200,197,107,40],9:[303,134,83,25],10:[194,123,82,26],11:[303,82,91,25],arrow:[147,12,17,6],heart:[147,19,10,9],million:[457,1,53,8],score:[95,22,7,7],user:[158,19,12,12]},titleLogoIcon:[1,192,30,45],titleLogo:{normal:[308,197,129,14],normalFlash:[308,211,129,14],ex:[308,197,150,14],exFlash:[308,211,150,14]},uiStatusReset:[36,175,47,25]});var Wi;Wi=new URL(r("3y7ul").resolve("6t7Zz"),import.meta.url).toString();var qi;qi=new URL(r("3y7ul").resolve("eGD62"),import.meta.url).toString();var Hi;Hi=new URL(r("3y7ul").resolve("QPPni"),import.meta.url).toString();var zi;zi=new URL(r("3y7ul").resolve("7Rhg3"),import.meta.url).toString();var Gi;Gi=new URL(r("3y7ul").resolve("fQj5x"),import.meta.url).toString();var Ki;Ki=new URL(r("3y7ul").resolve("8W3sW"),import.meta.url).toString();var Ji;Ji=new URL(r("3y7ul").resolve("bQiPl"),import.meta.url).toString();var Xi;Xi=new URL(r("3y7ul").resolve("iQ7l0"),import.meta.url).toString();var Yi;Yi=new URL(r("3y7ul").resolve("a9RsU"),import.meta.url).toString();var Qi;Qi=new URL(r("3y7ul").resolve("6RTqz"),import.meta.url).toString();var Zi;Zi=new URL(r("3y7ul").resolve("ltoOe"),import.meta.url).toString();var er;er=new URL(r("3y7ul").resolve("2GqAh"),import.meta.url).toString();var tr;tr=new URL(r("3y7ul").resolve("hq5Ck"),import.meta.url).toString();const nr={uiButton:new le(new URL(Wi),.5,.04),titleStart:new le(new URL(qi),.8),titleModeChange:new le(new URL(Hi),.4),playerFire:new le(new URL(zi),.4,.02),playerHit:new le(new URL(Gi),1),enemyShow:new le(new URL(Ki),1,.04),enemyHit:new le(new URL(Ji),.5,.04),enemyFire:new le(new URL(Xi),.6,.02),enemyFireLarge:new le(new URL(Yi),.9,.04),enemyTake:new le(new URL(Qi),.45,.02),enemyTakeLarge:new le(new URL(Zi),.6,.04),resultCounting:new le(new URL(er),.5,.02),resultSuccess:new le(new URL(tr),1)};var ir;ir=new URL(r("3y7ul").resolve("csyRH"),import.meta.url).toString();var rr;rr=new URL(r("3y7ul").resolve("7daCL"),import.meta.url).toString();const sr={play:new ue(new URL(ir)),result:new ue(new URL(rr),.9)},ar={mode:"normal",screenTop:0,isFirstEnemy:!1,enemyWaveId:0,playerPos:{x:0,y:0},isSuccess:!1,heart:0,heartRate:0,deathCount:0,addHeart(e){this.heart+=this.getHeartRate()*e},getHeartRate(){const e=this.heartRate||1;return this.isSuccess?e:Math.min(e,16)},clearing:Fi.from(0).wait(1500)},or={white:y.parse("#ffffff"),base:y.parse("#ffffff"),main:y.parse("#f64744"),accent:y.parse("#f69c44")},lr=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw gn.create("bad-app-name",{appName:String(i)});const r=hn.get(i);if(r){if(Bt(e,r.options)&&Bt(n,r.config))return r;throw gn.create("duplicate-app",{appName:i})}const s=new Qt(i);for(const e of dn.values())s.addComponent(e);const a=new vn(e,n,s);return hn.set(i,a),a}({apiKey:"AIzaSyC2zCzDFkfmx1ZHOc6v03T-oGBeS0124-4",authDomain:"fire-shooter-san.firebaseapp.com",projectId:"fire-shooter-san",storageBucket:"fire-shooter-san.appspot.com",messagingSenderId:"1003741816214",appId:"1:1003741816214:web:20da45a98b3fd18345a9b7",measurementId:"G-3Q36TCTMGF"}),ur=Ii.bind(null,function(e=yn()){const t=mn(e=Jt(e),"analytics");return t.isInitialized()?t.getImmediate():function(e,t={}){const n=mn(e,"analytics");if(n.isInitialized()){const e=n.getImmediate();if(Bt(t,n.getOptions()))return e;throw si.create("already-initialized")}return n.initialize({options:t})}(e)}(lr));function cr(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function hr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const dr=hr,pr=new Vt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),fr=new on("@firebase/auth");function mr(e,...t){fr.logLevel<=en.ERROR&&fr.error(`Auth (9.6.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(e,...t){throw wr(e,...t)}function vr(e,...t){return wr(e,...t)}function yr(e,t,n){const i=Object.assign(Object.assign({},dr()),{[t]:n});return new Vt("auth","Firebase",i).create(t,{appName:e.name})}function wr(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return pr.create(e,...t)}function br(e,t,...n){if(!e)throw wr(t,...n)}function _r(e){const t="INTERNAL ASSERTION FAILED: "+e;throw mr(t),new Error(t)}function Ir(e,t){e||_r(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new Map;function Tr(e){Ir(e instanceof Function,"Expected a class definition");let t=Sr.get(e);return t?(Ir(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Sr.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function kr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function Er(){return"http:"===xr()||"https:"===xr()}function xr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ar{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ir(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Nt())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(Er()||Lt()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(e,t){Ir(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void _r("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void _r("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void _r("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Pr=new Ar(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Lr(e,t,n,i,r={}){return Cr(e,r,(()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const a=Wt(Object.assign({key:e.config.apiKey},s)).slice(1),o=new(Mr.headers());return o.set("Content-Type","application/json"),o.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&o.set("X-Firebase-Locale",e.languageCode),Mr.fetch()(Ur(e,e.config.apiHost,n,a),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},r))}))}async function Cr(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},Or),t);try{const t=new Fr(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw Vr(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Vr(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Vr(e,"email-already-in-use",s);const o=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw yr(e,o,a);gr(e,o)}}catch(t){if(t instanceof Ft)throw t;gr(e,"network-request-failed")}}async function Dr(e,t,n,i,r={}){const s=await Lr(e,t,n,i,r);return"mfaPendingCredential"in s&&gr(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Ur(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?Rr(e.config,r):`${e.config.apiScheme}://${r}`}class Fr{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(vr(this.auth,"timeout"))),Pr.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vr(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=vr(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Br(e){return 1e3*Number(e)}function $r(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return mr("JWT malformed, contained fewer than 3 sections"),null;try{const e=Ot(n);return e?JSON.parse(e):(mr("Failed to decode base64 JWT payload"),null)}catch(e){return mr("Caught error parsing JWT payload as JSON",e),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Wr(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof Ft&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class qr{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=jr(this.lastLoginAt),this.creationTime=jr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zr(e){var t;const n=e.auth,i=await e.getIdToken(),r=await Wr(e,async function(e,t){return Lr(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));br(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=cr(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const o=(l=e.providerData,u=a,[...l.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var l,u;const c=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==o?void 0:o.length)),d=!!c&&h,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Hr(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Gr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){br(e.idToken,"internal-error"),br(void 0!==e.idToken,"internal-error"),br(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=$r(e);return br(t,"internal-error"),br(void 0!==t.exp,"internal-error"),br(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return br(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Cr(e,{},(()=>{const n=Wt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=Ur(e,i,"/v1/token",`key=${r}`);return Mr.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new Gr;return n&&(br("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(br("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(br("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gr,this.toJSON())}_performRefresh(){return _r("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(e,t){br("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Jr{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=cr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new qr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new Hr(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Wr(this,this.stsTokenManager.getToken(this.auth,e));return br(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Jt(e),i=await n.getIdToken(t),r=$r(i);br(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:jr(Br(r.auth_time)),issuedAtTime:jr(Br(r.iat)),expirationTime:jr(Br(r.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Jt(e);await zr(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(br(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Jr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){br(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await zr(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wr(this,async function(e,t){return Lr(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,a,o,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:I}=t;br(y&&I,e,"internal-error");const S=Gr.fromJSON(this.name,I);br("string"==typeof y,e,"internal-error"),Kr(c,e.name),Kr(h,e.name),br("boolean"==typeof w,e,"internal-error"),br("boolean"==typeof b,e,"internal-error"),Kr(d,e.name),Kr(p,e.name),Kr(f,e.name),Kr(m,e.name),Kr(g,e.name),Kr(v,e.name);const T=new Jr({uid:y,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:S,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(T.providerData=_.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const i=new Gr;i.updateFromServerResponse(t);const r=new Jr({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await zr(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xr.type="NONE";const Yr=Xr;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(e,t,n){return`firebase:${e}:${t}:${n}`}class Zr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Qr(this.userKey,i.apiKey,r),this.fullPersistenceKey=Qr("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Zr(Tr(Yr),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||Tr(Yr);const s=Qr(n,e.config.apiKey,e.name);let a=null;for(const n of t)try{const t=await n._get(s);if(t){const i=Jr._fromJSON(e,t);n!==r&&(a=i),r=n;break}}catch(e){}const o=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&o.length?(r=o[0],a&&await r._set(s,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new Zr(r,e,n)):new Zr(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function es(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(rs(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ts(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(as(t))return"Blackberry";if(os(t))return"Webos";if(ns(t))return"Safari";if((t.includes("chrome/")||is(t))&&!t.includes("edge/"))return"Chrome";if(ss(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ts(e=Nt()){return/firefox\//i.test(e)}function ns(e=Nt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function is(e=Nt()){return/crios\//i.test(e)}function rs(e=Nt()){return/iemobile/i.test(e)}function ss(e=Nt()){return/android/i.test(e)}function as(e=Nt()){return/blackberry/i.test(e)}function os(e=Nt()){return/webos/i.test(e)}function ls(e=Nt()){return/iphone|ipad|ipod/i.test(e)}function us(){return function(){const e=Nt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function cs(e=Nt()){return ls(e)||ss(e)||os(e)||as(e)||/windows phone/i.test(e)||rs(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function hs(e,t=[]){let n;switch(e){case"Browser":n=es(Nt());break;case"Worker":n=`${es(Nt())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new fs(this),this.idTokenSubscription=new fs(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=pr,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Tr(t)),this._initializationPromise=this.queue((async()=>{var n,i;this._deleted||(this.persistenceManager=await Zr.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==r||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(br(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await zr(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Jt(e):null;return t&&br(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&br(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Tr(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Vt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Tr(e)||this._popupRedirectResolver;br(t,this,"argument-error"),this.redirectPersistenceManager=await Zr.create(this,[Tr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return br(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return br(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=hs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function ps(e){return Jt(e)}class fs{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new zt(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return br(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ms{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _r("not implemented")}_getIdTokenResponse(e){return _r("not implemented")}_linkToIdToken(e,t){return _r("not implemented")}_getReauthenticationResolver(e){return _r("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(e,t){return Lr(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vs extends ms{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new vs(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new vs(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Dr(e,"POST","/v1/accounts:signInWithPassword",Nr(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Dr(e,"POST","/v1/accounts:signInWithEmailLink",Nr(e,t))}(e,{email:this._email,oobCode:this._password});default:gr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return gs(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Dr(e,"POST","/v1/accounts:signInWithEmailLink",Nr(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:gr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ys(e,t){return Dr(e,"POST","/v1/accounts:signInWithIdp",Nr(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws extends ms{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ws(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):gr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=cr(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new ws(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return ys(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,ys(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ys(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Wt(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _s extends ms{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new _s({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new _s({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Dr(e,"POST","/v1/accounts:signInWithPhoneNumber",Nr(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Dr(e,"POST","/v1/accounts:signInWithPhoneNumber",Nr(e,t));if(n.temporaryProof)throw Vr(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Dr(e,"POST","/v1/accounts:signInWithPhoneNumber",Nr(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),bs)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new _s({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){var t,n,i,r,s,a;const o=qt(Ht(e)),l=null!==(t=o.apiKey)&&void 0!==t?t:null,u=null!==(n=o.oobCode)&&void 0!==n?n:null,c=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=o.mode)&&void 0!==i?i:null);br(l&&u&&c,"argument-error"),this.apiKey=l,this.operation=c,this.code=u,this.continueUrl=null!==(r=o.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=o.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=o.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=qt(Ht(e)).link,n=t?qt(Ht(t)).deep_link_id:null,i=qt(Ht(e)).deep_link_id;return(i?qt(Ht(i)).link:null)||i||n||t||e}(e);try{return new Is(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ss{constructor(){this.providerId=Ss.PROVIDER_ID}static credential(e,t){return vs._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Is.parseLink(t);return br(n,"argument-error"),vs._fromEmailAndCode(e,n.code,n.tenantId)}}Ss.PROVIDER_ID="password",Ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ts{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends Ts{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Es extends ks{constructor(){super("facebook.com")}static credential(e){return ws._fromParams({providerId:Es.PROVIDER_ID,signInMethod:Es.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Es.credentialFromTaggedObject(e)}static credentialFromError(e){return Es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Es.credential(e.oauthAccessToken)}catch(e){return null}}}Es.FACEBOOK_SIGN_IN_METHOD="facebook.com",Es.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xs extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ws._fromParams({providerId:xs.PROVIDER_ID,signInMethod:xs.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xs.credentialFromTaggedObject(e)}static credentialFromError(e){return xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return xs.credential(t,n)}catch(e){return null}}}xs.GOOGLE_SIGN_IN_METHOD="google.com",xs.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class As extends ks{constructor(){super("github.com")}static credential(e){return ws._fromParams({providerId:As.PROVIDER_ID,signInMethod:As.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return As.credentialFromTaggedObject(e)}static credentialFromError(e){return As.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return As.credential(e.oauthAccessToken)}catch(e){return null}}}As.GITHUB_SIGN_IN_METHOD="github.com",As.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rs extends ks{constructor(){super("twitter.com")}static credential(e,t){return ws._fromParams({providerId:Rs.PROVIDER_ID,signInMethod:Rs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Rs.credentialFromTaggedObject(e)}static credentialFromError(e){return Rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Rs.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ms(e,t){return Dr(e,"POST","/v1/accounts:signUp",Nr(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rs.TWITTER_SIGN_IN_METHOD="twitter.com",Rs.PROVIDER_ID="twitter.com";class Os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Jr._fromIdTokenResponse(e,n,i),s=Ps(n);return new Os({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Ps(n);return new Os({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Ps(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ns extends Ft{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ns.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Ns(e,t,n,i)}}function Ls(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ns._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cs(e,t,n=!1){const i=await Wr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Os._forOperation(e,"link",i)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ds(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await Wr(e,Ls(i,r,t,e),n);br(s.idToken,i,"internal-error");const a=$r(s.idToken);br(a,i,"internal-error");const{sub:o}=a;return br(e.uid===o,i,"user-mismatch"),Os._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&gr(i,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Us(e,t,n=!1){const i="signIn",r=await Ls(e,i,t),s=await Os._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Fs(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=Jt(e),r={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await Wr(i,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return Lr(e,"POST","/v1/accounts:update",t)}(i.auth,r));i.displayName=s.displayName||null,i.photoURL=s.photoUrl||null;const a=i.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(s)}new WeakMap;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vs{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js extends Vs{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Nt();return ns(e)||ls(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=cs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);us()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}js.type="LOCAL";const Bs=js;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s extends Vs{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}$s.type="SESSION";const Ws=$s;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new qs(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const a=Array.from(s).map((async e=>e(t.origin,r))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Hs(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qs.receivers=[];class zs{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((a,o)=>{const l=Hs("",20);i.port1.start();const u=setTimeout((()=>{o(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),r=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),a(t.data.response);break;default:clearTimeout(u),clearTimeout(r),o(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ks(){return void 0!==Gs().WorkerGlobalScope&&"function"==typeof Gs().importScripts}class Js{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Xs(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Ys(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Js(e).toPromise()}(),t(await Ys()))}))}))}async function Qs(e,t,n){const i=Xs(e,!0).put({fbase_key:t,value:n});return new Js(i).toPromise()}function Zs(e,t){const n=Xs(e,!0).delete(t);return new Js(n).toPromise()}class ea{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ys()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ks()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=qs._getInstance(Ks()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new zs(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ys();return await Qs(e,"__sak","1"),await Zs(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Qs(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Xs(e,!1).get(t),i=await new Js(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Zs(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Xs(e,!1).getAll();return new Js(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ea.type="LOCAL";const ta=ea;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(e){return new Promise(((t,n)=>{const i=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=vr("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function ia(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
ia("rcb"),new Ar(3e4,6e4);async function ra(e,t,n){var i;const r=await n.verify();try{let s;if(br("string"==typeof r,e,"argument-error"),br("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){br("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Lr(e,"POST","/v2/accounts/mfaEnrollment:start",Nr(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{br("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;br(n,e,"missing-multi-factor-info");const a=await function(e,t){return Lr(e,"POST","/v2/accounts/mfaSignIn:start",Nr(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Lr(e,"POST","/v1/accounts:sendVerificationCode",Nr(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sa{constructor(e){this.providerId=sa.PROVIDER_ID,this.auth=ps(e)}verifyPhoneNumber(e,t){return ra(this.auth,e,Jt(t))}static credential(e,t){return _s._fromVerification(e,t)}static credentialFromResult(e){const t=e;return sa.credentialFromTaggedObject(t)}static credentialFromError(e){return sa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?_s._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function aa(e,t){return t?Tr(t):(br(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sa.PROVIDER_ID="phone",sa.PHONE_SIGN_IN_METHOD="phone";class oa extends ms{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ys(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ys(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ys(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function la(e){return Us(e.auth,new oa(e),e.bypassAuthState)}function ua(e){const{auth:t,user:n}=e;return br(n,t,"internal-error"),Ds(n,new oa(e),e.bypassAuthState)}async function ca(e){const{auth:t,user:n}=e;return br(n,t,"internal-error"),Cs(n,new oa(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:a}=e;if(s)return void this.reject(s);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return la;case"linkViaPopup":case"linkViaRedirect":return ca;case"reauthViaPopup":case"reauthViaRedirect":return ua;default:gr(this.auth,"internal-error")}}resolve(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ir(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const da=new Ar(2e3,1e4);class pa extends ha{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,pa.currentPopupAction&&pa.currentPopupAction.cancel(),pa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return br(e,this.auth,"internal-error"),e}async onExecution(){Ir(1===this.filter.length,"Popup operations only handle one event");const e=Hs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(vr(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(vr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,pa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(vr(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,da.get())};e()}}pa.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const fa=new Map;class ma extends ha{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=fa.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=va(t),i=ga(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}fa.set(this.auth._key(),e)}return this.bypassAuthState||fa.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function ga(e){return Tr(e._redirectPersistence)}function va(e){return Qr("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ya(e,t,n=!1){const i=ps(e),r=aa(i,t),s=new ma(i,r,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}class wa{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _a(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!_a(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(vr(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(ba(e))}saveEventToCache(e){this.cachedEventUids.add(ba(e)),this.lastProcessedEventTime=Date.now()}}function ba(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function _a({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ia=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sa=/^https?/;async function Ta(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Lr(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(ka(e))return}catch(e){}gr(e,"unauthorized-domain")}function ka(e){const t=kr(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Sa.test(n))return!1;if(Ia.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea=new Ar(3e4,6e4);function xa(){const e=Gs().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Aa=null;function Ra(e){return Aa=Aa||function(e){return new Promise(((t,n)=>{var i,r,s;function a(){xa(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{xa(),n(vr(e,"network-request-failed"))},timeout:Ea.get()})}if(null===(r=null===(i=Gs().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Gs().gapi)||void 0===s?void 0:s.load)){const t=ia("iframefcb");return Gs()[t]=()=>{gapi.load?a():n(vr(e,"network-request-failed"))},na(`https://apis.google.com/js/api.js?onload=${t}`)}a()}})).catch((e=>{throw Aa=null,e}))}(e),Aa}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=new Ar(5e3,15e3),Oa={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pa=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Na(e){const t=e.config;br(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Rr(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.6.0"},r=Pa.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${Wt(i).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const La={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ca{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Da(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let o="";const l=Object.assign(Object.assign({},La),{width:i.toString(),height:r.toString(),top:s,left:a}),u=Nt().toLowerCase();n&&(o=is(u)?"_blank":n),ts(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Nt()){var t;return ls(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",o),new Ca(null);const h=window.open(t||"",o,c);br(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Ca(h)}function Ua(e,t,n,i,r,s){br(e.config.authDomain,e,"auth-domain-config-required"),br(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.6.0",eventId:r};if(t instanceof Ts){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))a[e]=t}if(t instanceof ks){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const e of Object.keys(o))void 0===o[e]&&delete o[e];return`${function({config:e}){return e.emulator?Rr(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Wt(o).slice(1)}`}const Fa=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ws,this._completeRedirectFn=ya}async _openPopup(e,t,n,i){var r;Ir(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return Da(e,Ua(e,t,n,kr(),i),Hs())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=Ua(e,t,n,kr(),i),Gs().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Ir(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await async function(e){const t=await Ra(e),n=Gs().gapi;return br(n,e,"internal-error"),t.open({where:document.body,url:Na(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Oa,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=vr(e,"network-request-failed"),s=Gs().setTimeout((()=>{i(r)}),Ma.get());function a(){Gs().clearTimeout(s),n(t)}t.ping(a).then(a,(()=>{i(r)}))}))))}(e),n=new wa(e);return t.register("authEvent",(t=>{br(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),gr(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ta(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return cs()||ns()||ls()}};var Va;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){br(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Va="Browser",fn(new Xt("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:r}=n.options;return(e=>{br(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),br(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const n={apiKey:i,authDomain:r,clientPlatform:Va,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:hs(Va)},s=new ds(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Tr);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),fn(new Xt("auth-internal",(e=>{const t=ps(e.getProvider("auth").getImmediate());return new ja(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),wn("@firebase/auth","0.19.3",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Va)),wn("@firebase/auth","0.19.3","esm2017");const Ba=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e=yn()){const t=mn(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=mn(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Bt(n.getOptions(),null!=t?t:{}))return e;gr(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Fa,persistence:[ta,Bs,Ws]})}(lr);function $a(e){return t=e,Jt(Ba).onAuthStateChanged(t,n,i);var t,n,i}function Wa(){return Ba.currentUser}function qa(){var e,t;return null!==(t=null===(e=Wa())||void 0===e?void 0:e.uid)&&void 0!==t?t:""}function Ha(){var e,t;return null!==(t=null===(e=Wa())||void 0===e?void 0:e.displayName)&&void 0!==t?t:""}$a((e=>!e&&async function(e){var t;const n=ps(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Os({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await Ms(n,{returnSecureToken:!0}),r=await Os._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}(Ba)));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class za{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}za.UNAUTHENTICATED=new za(null),za.GOOGLE_CREDENTIALS=new za("google-credentials-uid"),za.FIRST_PARTY=new za("first-party-uid"),za.MOCK_USER=new za("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ga="9.6.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=new on("@firebase/firestore");function Ja(e,...t){if(Ka.logLevel<=en.DEBUG){const n=t.map(Qa);Ka.debug(`Firestore (${Ga}): ${e}`,...n)}}function Xa(e,...t){if(Ka.logLevel<=en.ERROR){const n=t.map(Qa);Ka.error(`Firestore (${Ga}): ${e}`,...n)}}function Ya(e,...t){if(Ka.logLevel<=en.WARN){const n=t.map(Qa);Ka.warn(`Firestore (${Ga}): ${e}`,...n)}}function Qa(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(e="Unexpected state"){const t=`FIRESTORE (${Ga}) INTERNAL ASSERTION FAILED: `+e;throw Xa(t),new Error(t)}function eo(e,t){e||Za()}function to(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class io{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ro{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(za.UNAUTHENTICATED)))}shutdown(){}}class so{constructor(e){this.auth=null,e.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(eo("string"==typeof e.accessToken),new io(e.accessToken,new za(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class ao{constructor(e,t,n){this.type="FirstParty",this.user=za.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class oo{constructor(e,t,n){this.t=e,this.i=t,this.o=n}getToken(){return Promise.resolve(new ao(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable((()=>t(za.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class lo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class uo{constructor(e){this.u=e,this.appCheck=null,e.onInit((e=>{this.appCheck=e}))}getToken(){return this.appCheck?this.appCheck.getToken().then((e=>e?(eo("string"==typeof e.token),new lo(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{constructor(e,t,n,i,r,s,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class ho{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ho&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(e,t,n){void 0===t?t=0:t>e.length&&Za(),void 0===n?n=e.length-t:n>e.length-t&&Za(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===po.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof po?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class fo extends po{construct(e,t,n){return new fo(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new no("invalid-argument",`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new fo(t)}static emptyPath(){return new fo([])}}const mo=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class go extends po{construct(e,t,n){return new go(e,t,n)}static isValidIdentifier(e){return mo.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),go.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new go(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new no("invalid-argument",`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new no("invalid-argument","Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new no("invalid-argument","Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new no("invalid-argument","Unterminated ` in path: "+e);return new go(t)}static emptyPath(){return new go([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(e){this.path=e}static fromPath(e){return new vo(fo.fromString(e))}static fromName(e){return new vo(fo.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===fo.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return fo.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new vo(new fo(e.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(e,t,n){if(!n)throw new no("invalid-argument",`Function ${e}() cannot be called with an empty ${t}.`)}function wo(e){if(!vo.isDocumentKey(e))throw new no("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function bo(e){if(vo.isDocumentKey(e))throw new no("invalid-argument",`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function _o(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Za()}function Io(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new no("invalid-argument","Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_o(e);throw new no("invalid-argument",`Expected type '${t.name}', but it was: ${n}`)}}return e}function So(e,t){if(t<=0)throw new no("invalid-argument",`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(e){return null==e}function ko(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xo,Ao;function Ro(e){if(void 0===e)return Xa("RPC_ERROR","HTTP error has no status"),"unknown";switch(e){case 200:return"ok";case 400:return"failed-precondition";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 416:return"out-of-range";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"unknown";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded";default:return e>=200&&e<300?"ok":e>=400&&e<500?"failed-precondition":e>=500&&e<600?"internal":"unknown"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Ao=xo||(xo={}))[Ao.OK=0]="OK",Ao[Ao.CANCELLED=1]="CANCELLED",Ao[Ao.UNKNOWN=2]="UNKNOWN",Ao[Ao.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ao[Ao.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ao[Ao.NOT_FOUND=5]="NOT_FOUND",Ao[Ao.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ao[Ao.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ao[Ao.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ao[Ao.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ao[Ao.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ao[Ao.ABORTED=10]="ABORTED",Ao[Ao.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ao[Ao.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ao[Ao.INTERNAL=13]="INTERNAL",Ao[Ao.UNAVAILABLE=14]="UNAVAILABLE",Ao[Ao.DATA_LOSS=15]="DATA_LOSS";class Mo extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.h=t+"://"+e.host,this.l="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}m(e,t,n,i,r){const s=this.p(e,t);Ja("RestConnection","Sending: ",s,n);const a={};return this.g(a,i,r),this.v(e,s,a,n).then((e=>(Ja("RestConnection","Received: ",e),e)),(t=>{throw Ya("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}T(e,t,n,i,r){return this.m(e,t,n,i,r)}g(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ga,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}p(e,t){const n=Eo[e];return`${this.h}/v1/${t}:${n}`}}{constructor(e,t){super(e),this.I=t}A(e,t){throw new Error("Not supported by FetchConnection")}async v(e,t,n,i){const r=JSON.stringify(i);let s;try{s=await this.I(t,{method:"POST",headers:n,body:r})}catch(e){throw new no(Ro(e.status),"Request failed with error: "+e.statusText)}if(!s.ok)throw new no(Ro(s.status),"Request failed with error: "+s.statusText);return s.json()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{static P(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=Oo(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function No(e,t){return e<t?-1:e>t?1:0}function Lo(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new no("invalid-argument","Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new no("invalid-argument","Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new no("invalid-argument","Timestamp seconds out of range: "+e);if(e>=253402300800)throw new no("invalid-argument","Timestamp seconds out of range: "+e)}static now(){return Co.fromMillis(Date.now())}static fromDate(e){return Co.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Co(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?No(this.nanoseconds,e.nanoseconds):No(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Do(e)}static min(){return new Do(new Co(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Fo(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e){this.fields=e,e.sort(go.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Lo(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new jo(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new jo(t)}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return No(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}jo.EMPTY_BYTE_STRING=new jo("");const Bo=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $o(e){if(eo(!!e),"string"==typeof e){let t=0;const n=Bo.exec(e);if(eo(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:Wo(e.seconds),nanos:Wo(e.nanos)}}function Wo(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function qo(e){return"string"==typeof e?jo.fromBase64String(e):jo.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function zo(e){const t=e.mapValue.fields.__previous_value__;return Ho(t)?zo(t):t}function Go(e){const t=$o(e.mapValue.fields.__local_write_time__.timestampValue);return new Co(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ho(e)?4:10:Za()}function Jo(e,t){const n=Ko(e);if(n!==Ko(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Go(e).isEqual(Go(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=$o(e.timestampValue),i=$o(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return i=t,qo(e.bytesValue).isEqual(qo(i.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Wo(e.geoPointValue.latitude)===Wo(t.geoPointValue.latitude)&&Wo(e.geoPointValue.longitude)===Wo(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Wo(e.integerValue)===Wo(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Wo(e.doubleValue),i=Wo(t.doubleValue);return n===i?ko(n)===ko(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return Lo(e.arrayValue.values||[],t.arrayValue.values||[],Jo);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(Uo(n)!==Uo(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!Jo(n[e],i[e])))return!1;return!0}(e,t);default:return Za()}var i}function Xo(e,t){return void 0!==(e.values||[]).find((e=>Jo(e,t)))}function Yo(e,t){const n=Ko(e),i=Ko(t);if(n!==i)return No(n,i);switch(n){case 0:return 0;case 1:return No(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Wo(e.integerValue||e.doubleValue),i=Wo(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return Qo(e.timestampValue,t.timestampValue);case 4:return Qo(Go(e),Go(t));case 5:return No(e.stringValue,t.stringValue);case 6:return function(e,t){const n=qo(e),i=qo(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=No(n[e],i[e]);if(0!==t)return t}return No(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=No(Wo(e.latitude),Wo(t.latitude));return 0!==n?n:No(Wo(e.longitude),Wo(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=Yo(n[e],i[e]);if(t)return t}return No(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let e=0;e<i.length&&e<s.length;++e){const t=No(i[e],s[e]);if(0!==t)return t;const a=Yo(n[i[e]],r[s[e]]);if(0!==a)return a}return No(i.length,s.length)}(e.mapValue,t.mapValue);default:throw Za()}}function Qo(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return No(e,t);const n=$o(e),i=$o(t),r=No(n.seconds,i.seconds);return 0!==r?r:No(n.nanos,i.nanos)}function Zo(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function el(e){return!!e&&"arrayValue"in e}function tl(e){return!!e&&"nullValue"in e}function nl(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function il(e){return!!e&&"mapValue"in e}function rl(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Fo(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=rl(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=rl(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.value=e}static empty(){return new sl({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!il(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=rl(t)}setAll(e){let t=go.emptyPath(),n={},i=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=rl(e):i.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());il(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Jo(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];il(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){Fo(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new sl(rl(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t,n,i,r){this.key=e,this.documentType=t,this.version=n,this.data=i,this.documentState=r}static newInvalidDocument(e){return new al(e,0,Do.min(),sl.empty(),0)}static newFoundDocument(e,t,n){return new al(e,1,t,n,0)}static newNoDocument(e,t){return new al(e,2,t,sl.empty(),0)}static newUnknownDocument(e,t){return new al(e,3,t,sl.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=sl.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=sl.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof al&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new al(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t=null,n=[],i=[],r=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=a,this.R=null}}function ll(e,t=null,n=[],i=[],r=null,s=null,a=null){return new ol(e,t,n,i,r,s,a)}class ul extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new cl(e,t,n):"array-contains"===t?new fl(e,n):"in"===t?new ml(e,n):"not-in"===t?new gl(e,n):"array-contains-any"===t?new vl(e,n):new ul(e,t,n)}static V(e,t,n){return"in"===t?new hl(e,n):new dl(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.D(Yo(t,this.value)):null!==t&&Ko(this.value)===Ko(t)&&this.D(Yo(t,this.value))}D(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Za()}}N(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class cl extends ul{constructor(e,t,n){super(e,t,n),this.key=vo.fromName(n.referenceValue)}matches(e){const t=vo.comparator(e.key,this.key);return this.D(t)}}class hl extends ul{constructor(e,t){super(e,"in",t),this.keys=pl("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class dl extends ul{constructor(e,t){super(e,"not-in",t),this.keys=pl("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function pl(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>vo.fromName(e.referenceValue)))}class fl extends ul{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return el(t)&&Xo(t.arrayValue,this.value)}}class ml extends ul{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Xo(this.value.arrayValue,t)}}class gl extends ul{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Xo(this.value.arrayValue,t)}}class vl extends ul{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!el(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Xo(this.value.arrayValue,e)))}}class yl{constructor(e,t){this.position=e,this.before=t}}class wl{constructor(e,t="asc"){this.field=e,this.dir=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bl{constructor(e,t=null,n=[],i=[],r=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=a,this.endAt=o,this.$=null,this.F=null,this.startAt,this.endAt}}function _l(e){return!To(e.limit)&&"L"===e.limitType}function Il(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Sl(e){for(const t of e.filters)if(t.N())return t.field;return null}function Tl(e){return null!==e.collectionGroup}function kl(e){const t=to(e);if(null===t.$){t.$=[];const e=Sl(t),n=Il(t);if(null!==e&&null===n)e.isKeyField()||t.$.push(new wl(e)),t.$.push(new wl(go.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.$.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.$.push(new wl(go.keyField(),e))}}}return t.$}function El(e){const t=to(e);if(!t.F)if("F"===t.limitType)t.F=ll(t.path,t.collectionGroup,kl(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of kl(t)){const t="desc"===n.dir?"asc":"desc";e.push(new wl(n.field,t))}const n=t.endAt?new yl(t.endAt.position,!t.endAt.before):null,i=t.startAt?new yl(t.startAt.position,!t.startAt.before):null;t.F=ll(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t.F}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xl(e,t){return"number"==typeof(n=t)&&Number.isInteger(n)&&!ko(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER?function(e){return{integerValue:""+e}}(t):function(e,t){if(e.S){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ko(t)?"-0":t}}(e,t);var n}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this._=void 0}}class Rl extends Al{}class Ml extends Al{constructor(e){super(),this.elements=e}}class Ol extends Al{constructor(e){super(),this.elements=e}}class Pl extends Al{constructor(e,t){super(),this.q=e,this.O=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,t){this.field=e,this.transform=t}}class Ll{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ll}static exists(e){return new Ll(void 0,e)}static updateTime(e){return new Ll(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Cl{}class Dl extends Cl{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}}class Ul extends Cl{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}class Fl extends Cl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Vl extends Cl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl={asc:"ASCENDING",desc:"DESCENDING"},Bl={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class $l{constructor(e,t){this.databaseId=e,this.S=t}}function Wl(e,t){return e.S?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ql(e,t){return e.S?t.toBase64():t.toUint8Array()}function Hl(e,t){return Wl(e,t.toTimestamp())}function zl(e){return eo(!!e),Do.fromTimestamp(function(e){const t=$o(e);return new Co(t.seconds,t.nanos)}(e))}function Gl(e,t){return(n=e,new fo(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function Kl(e,t){return Gl(e.databaseId,t.path)}function Jl(e,t){const n=function(e){const t=fo.fromString(e);return eo(ru(t)),t}(t);if(n.get(1)!==e.databaseId.projectId)throw new no("invalid-argument","Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new no("invalid-argument","Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);var i;return new vo((eo((i=n).length>4&&"documents"===i.get(4)),i.popFirst(5)))}function Xl(e,t){return Gl(e.databaseId,t)}function Yl(e){return new fo(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Ql(e,t,n){return{name:Kl(e,t),fields:n.value.mapValue.fields}}function Zl(e){return{before:e.before,values:e.position}}function eu(e){return jl[e]}function tu(e){return Bl[e]}function nu(e){return{fieldPath:e.canonicalString()}}function iu(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function ru(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function su(e){return new $l(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class au extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.K=n,this.q=i,this.J=!1}X(){if(this.J)throw new no("failed-precondition","The client has already been terminated.")}m(e,t,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.K.m(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?("unauthenticated"===e.code&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new no("unknown",e.toString())}))}T(e,t,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.K.T(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?("unauthenticated"===e.code&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new no("unknown",e.toString())}))}terminate(){this.J=!0}}async function ou(e,t){const n=to(e),i=Yl(n.q)+"/documents",r={writes:t.map((e=>function(e,t){let n;if(t instanceof Dl)n={update:Ql(e,t.key,t.value)};else if(t instanceof Fl)n={delete:Kl(e,t.key)};else if(t instanceof Ul)n={update:Ql(e,t.key,t.data),updateMask:iu(t.fieldMask)};else{if(!(t instanceof Vl))return Za();n={verify:Kl(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Rl)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ml)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ol)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Pl)return{fieldPath:t.field.canonicalString(),increment:n.O};throw Za()}(0,e)))),t.precondition.isNone||(n.currentDocument=(i=e,void 0!==(r=t.precondition).updateTime?{updateTime:Hl(i,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:Za())),n;var i,r}(n.q,e)))};await n.m("Commit",i,r)}async function lu(e,t){const n=to(e),i=Yl(n.q)+"/documents",r={documents:t.map((e=>Kl(n.q,e)))},s=await n.T("BatchGetDocuments",i,r),a=new Map;s.forEach((e=>{const t=(i=n.q,"found"in(r=e)?function(e,t){eo(!!t.found),t.found.name,t.found.updateTime;const n=Jl(e,t.found.name),i=zl(t.found.updateTime),r=new sl({mapValue:{fields:t.found.fields}});return al.newFoundDocument(n,i,r)}(i,r):"missing"in r?function(e,t){eo(!!t.missing),eo(!!t.readTime);const n=Jl(e,t.missing),i=zl(t.readTime);return al.newNoDocument(n,i)}(i,r):Za());var i,r;a.set(t.key.toString(),t)}));const o=[];return t.forEach((e=>{const t=a.get(e.toString());eo(!!t),o.push(t)})),o}async function uu(e,t){const n=to(e),i=function(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=Xl(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Xl(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(nl(e.value))return{unaryFilter:{field:nu(e.field),op:"IS_NAN"}};if(tl(e.value))return{unaryFilter:{field:nu(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(nl(e.value))return{unaryFilter:{field:nu(e.field),op:"IS_NOT_NAN"}};if(tl(e.value))return{unaryFilter:{field:nu(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:nu(e.field),op:tu(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);r&&(n.structuredQuery.where=r);const s=function(e){if(0!==e.length)return e.map((e=>{return{field:nu((t=e).field),direction:eu(t.dir)};var t}))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const a=(o=e,l=t.limit,o.S||To(l)?l:{value:l});var o,l;return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=Zl(t.startAt)),t.endAt&&(n.structuredQuery.endAt=Zl(t.endAt)),n}(n.q,El(t));return(await n.T("RunQuery",i.parent,{structuredQuery:i.structuredQuery})).filter((e=>!!e.document)).map((e=>function(e,t,n){const i=Jl(e,t.name),r=zl(t.updateTime),s=new sl({mapValue:{fields:t.fields}}),a=al.newFoundDocument(i,r,s);return a}(n.q,e.document)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu=new Map;function hu(e){if(e._terminated)throw new no("failed-precondition","The client has already been terminated.");if(!cu.has(e)){Ja("ComponentProvider","Initializing Datastore");const a=(n=e._databaseId,i=e.app.options.appId||"",r=e._persistenceKey,s=e._freezeSettings(),t=new co(n,i,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams),new Mo(t,fetch.bind(null))),o=su(e._databaseId),l=function(e,t,n,i){return new au(e,t,n,i)}(e._authCredentials,e._appCheckCredentials,a,o);cu.set(e,l)}var t,n,i,r,s;
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return cu.get(e)}class du{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new no("invalid-argument","Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new no("invalid-argument","cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new no("invalid-argument","experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,e.experimentalForceLongPolling,0,e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new du({}),this._settingsFrozen=!1,e instanceof ho?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new no("invalid-argument",'"projectId" not provided in firebase.initializeApp.');return new ho(e.options.projectId)}(e))}get app(){if(!this._app)throw new no("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new no("failed-precondition","Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new du(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ro;switch(e.type){case"gapi":const t=e.client;return eo(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new oo(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new no("invalid-argument","makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=cu.get(e);t&&(Ja("ComponentProvider","Removing Datastore"),cu.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fu{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new gu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fu(this.firestore,e,this._key)}}class mu{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new mu(this.firestore,e,this._query)}}class gu extends mu{constructor(e,t,n){super(e,t,new bl(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fu(this.firestore,null,new vo(e))}withConverter(e){return new gu(this.firestore,e,this._path)}}function vu(e,t,...n){if(e=Jt(e),yo("collection","path",t),e instanceof pu){const i=fo.fromString(t,...n);return bo(i),new gu(e,null,i)}{if(!(e instanceof fu||e instanceof gu))throw new no("invalid-argument","Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(fo.fromString(t,...n));return bo(i),new gu(e.firestore,null,i)}}function yu(e,t,...n){if(e=Jt(e),1===arguments.length&&(t=Po.P()),yo("doc","path",t),e instanceof pu){const i=fo.fromString(t,...n);return wo(i),new fu(e,null,new vo(i))}{if(!(e instanceof fu||e instanceof gu))throw new no("invalid-argument","Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(fo.fromString(t,...n));return wo(i),new fu(e.firestore,e instanceof gu?e.converter:null,new vo(i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wu{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new no("invalid-argument","Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new go(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bu{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bu(jo.fromBase64String(e))}catch(e){throw new no("invalid-argument","Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new bu(jo.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new no("invalid-argument","Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new no("invalid-argument","Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return No(this._lat,e._lat)||No(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su=/^__.*__$/;class Tu{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Ul(e,this.data,this.fieldMask,t,this.fieldTransforms):new Dl(e,this.data,t,this.fieldTransforms)}}class ku{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Ul(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Eu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Za()}}class xu{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.q=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Z(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}nt(e){return new xu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.q,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}et(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.nt({path:n,rt:!1});return i.st(e),i}it(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.nt({path:n,rt:!1});return i.Z(),i}ot(e){return this.nt({path:void 0,rt:!0})}ut(e){return Wu(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.at)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Z(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(0===e.length)throw this.ut("Document fields must not be empty");if(Eu(this.tt)&&Su.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class Au{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.q=n||su(e)}ht(e,t,n,i=!1){return new xu({tt:e,methodName:t,at:n,path:go.emptyPath(),rt:!1,ct:i},this.databaseId,this.q,this.ignoreUndefinedProperties)}}function Ru(e){const t=e._freezeSettings(),n=su(e._databaseId);return new Au(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Mu(e,t,n,i,r,s={}){const a=e.ht(s.merge||s.mergeFields?2:0,t,n,r);Vu("Data must be an object, but it was:",a,i);const o=Uu(i,a);let l,u;if(s.merge)l=new Vo(a.fieldMask),u=a.fieldTransforms;else if(s.mergeFields){const e=[];for(const i of s.mergeFields){const r=ju(t,i,n);if(!a.contains(r))throw new no("invalid-argument",`Field '${r}' is specified in your field mask but missing from your input data.`);qu(e,r)||e.push(r)}l=new Vo(e),u=a.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,u=a.fieldTransforms;return new Tu(new sl(o),l,u)}class Ou extends _u{_toFieldTransform(e){if(2!==e.tt)throw 1===e.tt?e.ut(`${this._methodName}() can only appear at the top level of your update data`):e.ut(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ou}}class Pu extends _u{_toFieldTransform(e){return new Nl(e.path,new Rl)}isEqual(e){return e instanceof Pu}}function Nu(e,t,n,i){const r=e.ht(1,t,n);Vu("Data must be an object, but it was:",r,i);const s=[],a=sl.empty();Fo(i,((e,i)=>{const o=$u(t,e,n);i=Jt(i);const l=r.it(o);if(i instanceof Ou)s.push(o);else{const e=Du(i,l);null!=e&&(s.push(o),a.set(o,e))}}));const o=new Vo(s);return new ku(a,o,r.fieldTransforms)}function Lu(e,t,n,i,r,s){const a=e.ht(1,t,n),o=[ju(t,i,n)],l=[r];if(s.length%2!=0)throw new no("invalid-argument",`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(ju(t,s[e])),l.push(s[e+1]);const u=[],c=sl.empty();for(let e=o.length-1;e>=0;--e)if(!qu(u,o[e])){const t=o[e];let n=l[e];n=Jt(n);const i=a.it(t);if(n instanceof Ou)u.push(t);else{const e=Du(n,i);null!=e&&(u.push(t),c.set(t,e))}}const h=new Vo(u);return new ku(c,h,a.fieldTransforms)}function Cu(e,t,n,i=!1){return Du(n,e.ht(i?4:3,t))}function Du(e,t){if(Fu(e=Jt(e)))return Vu("Unsupported field value:",t,e),Uu(e,t);if(e instanceof _u)return function(e,t){if(!Eu(t.tt))throw t.ut(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ut(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.rt&&4!==t.tt)throw t.ut("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const r of e){let e=Du(r,t.ot(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Jt(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return xl(t.q,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Co.fromDate(e);return{timestampValue:Wl(t.q,n)}}if(e instanceof Co){const n=new Co(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Wl(t.q,n)}}if(e instanceof Iu)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof bu)return{bytesValue:ql(t.q,e._byteString)};if(e instanceof fu){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.ut(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Gl(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ut(`Unsupported field value: ${_o(e)}`)}(e,t)}function Uu(e,t){const n={};return function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Fo(e,((e,i)=>{const r=Du(i,t.et(e));null!=r&&(n[e]=r)})),{mapValue:{fields:n}}}function Fu(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Co||e instanceof Iu||e instanceof bu||e instanceof fu||e instanceof _u)}function Vu(e,t,n){if(!Fu(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=_o(n);throw"an object"===i?t.ut(e+" a custom object"):t.ut(e+" "+i)}var i}function ju(e,t,n){if((t=Jt(t))instanceof wu)return t._internalPath;if("string"==typeof t)return $u(e,t);throw Wu("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Bu=new RegExp("[~\\*/\\[\\]]");function $u(e,t,n){if(t.search(Bu)>=0)throw Wu(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new wu(...t.split("."))._internalPath}catch(i){throw Wu(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Wu(e,t,n,i,r){const s=i&&!i.isEmpty(),a=void 0!==r;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${i}`),a&&(l+=` in document ${r}`),l+=")"),new no("invalid-argument",o+e+l)}function qu(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new fu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new zu(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ku("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class zu extends Hu{data(){return super.data()}}class Gu{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(e,t){this._docs.forEach(e,t)}}function Ku(e,t){return"string"==typeof t?$u(e,t):t instanceof wu?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{}function Xu(e,...t){for(const n of t)e=n._apply(e);return e}class Yu extends Ju{constructor(e,t,n){super(),this.dt=e,this.wt=t,this.yt=n,this.type="where"}_apply(e){const t=Ru(e.firestore),n=function(e,t,n,i,r,s,a){let o;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new no("invalid-argument",`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){rc(a,s);const t=[];for(const n of a)t.push(ic(i,e,n));o={arrayValue:{values:t}}}else o=ic(i,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||rc(a,s),o=Cu(n,"where",a,"in"===s||"not-in"===s);const l=ul.create(r,s,o);return function(e,t){if(t.N()){const n=Sl(e);if(null!==n&&!n.isEqual(t.field))throw new no("invalid-argument",`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const i=Il(e);null!==i&&sc(e,t.field,i)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new no("invalid-argument",`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new no("invalid-argument",`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,l),l}(e._query,0,t,e.firestore._databaseId,this.dt,this.wt,this.yt);return new mu(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new bl(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function Qu(e,t,n){const i=t,r=Ku("where",e);return new Yu(r,i,n)}class Zu extends Ju{constructor(e,t){super(),this.dt=e,this._t=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new no("invalid-argument","Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new no("invalid-argument","Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new wl(t,n);return function(e,t){if(null===Il(e)){const n=Sl(e);null!==n&&sc(e,n,t.field)}}(e,i),i}(e._query,this.dt,this._t);return new mu(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new bl(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function ec(e,t="asc"){const n=t,i=Ku("orderBy",e);return new Zu(i,n)}class tc extends Ju{constructor(e,t,n){super(),this.type=e,this.gt=t,this.bt=n}_apply(e){return new mu(e.firestore,e.converter,(t=e._query,n=this.gt,i=this.bt,new bl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),n,i,t.startAt,t.endAt)));var t,n,i}}function nc(e){return So("limit",e),new tc("limit",e,"F")}function ic(e,t,n){if("string"==typeof(n=Jt(n))){if(""===n)throw new no("invalid-argument","Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Tl(t)&&-1!==n.indexOf("/"))throw new no("invalid-argument",`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(fo.fromString(n));if(!vo.isDocumentKey(i))throw new no("invalid-argument",`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Zo(e,new vo(i))}if(n instanceof fu)return Zo(e,n._key);throw new no("invalid-argument",`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${_o(n)}.`)}function rc(e,t){if(!Array.isArray(e)||0===e.length)throw new no("invalid-argument",`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new no("invalid-argument",`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function sc(e,t,n){if(!n.isEqual(t))throw new no("invalid-argument",`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}class oc extends class{convertValue(e,t="none"){switch(Ko(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Wo(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(qo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Za()}}convertObject(e,t){const n={};return Fo(e.fields,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new Iu(Wo(e.latitude),Wo(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=zo(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Go(e));default:return null}}convertTimestamp(e){const t=$o(e);return new Co(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=fo.fromString(e);eo(ru(n));const i=new ho(n.get(1),n.get(3)),r=new vo(n.popFirst(5));return i.isEqual(t)||Xa(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new bu(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new fu(this.firestore,null,t)}}function lc(e){!function(e){if(_l(e)&&0===e.explicitOrderBy.length)throw new no("unimplemented","limitToLast() queries require specifying at least one orderBy() clause")}((e=Io(e,mu))._query);const t=hu(e.firestore),n=new oc(e.firestore);return uu(t,e._query).then((t=>{const i=t.map((t=>new zu(e.firestore,n,t.key,t,e.converter)));return _l(e._query)&&i.reverse(),new Gu(e,i)}))}function uc(e,t,n,...i){const r=Ru((e=Io(e,fu)).firestore);let s;return s="string"==typeof(t=Jt(t))||t instanceof wu?Lu(r,"updateDoc",e._key,t,n,i):Nu(r,"updateDoc",e._key,t),ou(hu(e.firestore),[s.toMutation(e._key,Ll.exists(!0))])}function cc(e,t){const n=yu(e=Io(e,gu)),i=ac(e.converter,t),r=Mu(Ru(e.firestore),"addDoc",n._key,i,null!==n.converter,{});return ou(hu(e.firestore),[r.toMutation(n._key,Ll.exists(!1))]).then((()=>n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hc(){return new Pu("serverTimestamp")}Ga="9.6.0_lite",fn(new Xt("firestore/lite",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=new pu(n,new so(e.getProvider("auth-internal")),new uo(e.getProvider("app-check-internal")));return t&&i._setSettings(t),i}),"PUBLIC")),wn("firestore-lite","3.4.0",""),wn("firestore-lite","3.4.0","esm2017");const dc=function(e=yn()){return mn(e,"firestore/lite").getImmediate()}(lr),pc=vu(dc,"replays"),fc=vu(dc,"entries");async function mc(e){const t=(await function(e){const t=hu((e=Io(e,fu)).firestore),n=new oc(e.firestore);return lu(t,[e._key]).then((t=>{eo(1===t.length);const i=t[0];return new Hu(e.firestore,n,e._key,i.isFoundDocument()?i:null,e.converter)}))}(yu(pc,e))).data();if(t)return{id:e,version:t.version,score:t.score,log:t.log,seed:t.seed,mode:t.mode}}const gc=["normal","ex"],vc={normal:"NORMAL",ex:"EX"},yc=document.querySelector(".leaderboard .entry-list"),wc=document.querySelector(".leaderboard .about-button"),bc=document.querySelector(".leaderboard .user-button"),_c=document.querySelector(".about"),Ic=document.querySelector(".about .modal-close"),Sc=document.querySelector(".user"),Tc=document.querySelector(".user .modal"),kc=document.querySelector(".user .form"),Ec=document.querySelector(".user .form-textfield"),xc=document.querySelector(".user .form-save"),Ac=document.querySelector(".user .record-list"),Rc=document.querySelector(".user .modal-close");if(!(yc instanceof HTMLElement&&wc instanceof HTMLElement&&bc instanceof HTMLElement&&_c instanceof HTMLElement&&Ic instanceof HTMLElement&&Sc instanceof HTMLElement&&Tc instanceof HTMLElement&&kc instanceof HTMLFormElement&&Ec instanceof HTMLInputElement&&xc instanceof HTMLButtonElement&&Ac instanceof HTMLElement&&Rc instanceof HTMLElement))throw Error("invalid element");const Mc={normal:{},ex:{}};async function Oc(e){let t=Mc[e].meEntry;return t||(t=Mc[e].meEntry=await async function(e,t){const n=(await lc(Xu(fc,Qu("version","==",e),Qu("mode","==",t),Qu("uid","==",qa()),ec("score","desc"),nc(1)))).docs[0];if(n){const e=n.data();return{id:n.id,uid:e.uid,name:e.name,replayId:e.replayId,score:e.score,mode:e.mode}}}(0,e)),t}async function Pc(e){let t=Mc[e].entries;return t||(t=Mc[e].entries=await async function(e,t){return(await lc(Xu(fc,Qu("version","==",e),Qu("mode","==",t),ec("score","desc"),nc(100)))).docs.map((e=>{const t=e.data();return{id:e.id,uid:t.uid,name:t.name,replayId:t.replayId,score:t.score,mode:t.mode}}))}(0,e)),t}async function Nc(e){const t=await async function(e){return{id:(await cc(pc,{uid:qa(),registeredAt:hc(),log:e.log,version:e.version,score:e.score,mode:e.mode,seed:e.seed})).id,...e}}(e),n=await Oc(t.mode);let i=!1;return n?n.score<e.score&&(i=!0,n.score=e.score,await async function(e,t){await uc(yu(fc,e.id),{registeredAt:hc(),replayId:t.id,score:t.score})}(n,t)):(i=!0,Mc[t.mode].meEntry=await async function(e){return{id:(await cc(fc,{uid:qa(),name:Ha(),registeredAt:hc(),replayId:e.id,version:e.version,score:e.score,mode:e.mode})).id,uid:qa(),name:Ha(),replayId:e.id,score:e.score,mode:e.mode}}(t)),i&&(delete Mc[t.mode].entries,t.mode===Uc()&&Lc(t.mode)),{replayId:t.id,newRecord:i}}async function Lc(e){const t=(await Pc(e)).map(((e,t)=>`\n      <div class="entry ${qa()===e.uid?"me":""}">\n        <div class="entry-order">${t+1}.</div>\n        <div class="entry-name">${e.name||"no name"}</div>\n        <div class="entry-score">￥${P(e.score)}</div>\n        <div class="entry-replay clickable" data-r="${e.replayId}"></div>\n      </div>`));yc&&(yc.innerHTML=t.join(""))}let Cc=null;function Dc(){const e=new URL(location.origin+location.pathname),t=jc();return t&&e.searchParams.set("r",t),e.href}function Uc(){return"ex"===new URL(location.href).searchParams.get("mode")?"ex":"normal"}let Fc="",Vc="";function jc(){return Fc!==location.href&&(Fc=location.href,Vc=new URL(Fc).searchParams.get("r")||""),Vc}function Bc(e){if(jc()===e)return;const t=new URL(location.href);e?t.searchParams.set("r",e):t.searchParams.delete("r"),history.replaceState(history.state,"",t)}addEventListener("click",(e=>{if(e.target instanceof HTMLElement){const t=e.target.closest("a");t&&ur("link_click",{url:t.href})}})),wc.addEventListener("click",(()=>{ur("about_open"),_c.classList.add("opened")})),Ic.addEventListener("click",(()=>{_c.classList.remove("opened")})),document.addEventListener("click",(e=>{if(Cc&&e.target instanceof HTMLElement){const t=e.target.closest(".entry-replay,.record-replay");t instanceof HTMLElement&&t.dataset.r&&(Bc(t.dataset.r),Cc(t.dataset.r),_c.classList.remove("opened"),Sc.classList.remove("opened"),window.scrollTo({top:100,behavior:"smooth"}))}})),bc.addEventListener("click",(async()=>{ur("user_open"),Ec.value=Ha(),xc.disabled=!0,Sc.classList.add("opened"),Tc.classList.add("loading");try{const e=await Promise.all(gc.map((e=>Oc(e)))),t=e.some((e=>"ex"===(null==e?void 0:e.mode)));let n="";e.forEach(((e,i)=>{const r=`<div>${vc[gc[i]]}</div>`;e?n+=`\n          ${t?r:""}\n          <div>￥${P(e.score)}</div>\n          ${t?"":"<div></div>"}\n          <div class="record-replay clickable" data-r="${e.replayId}"></div>`:"ex"!==gc[i]&&(n+=`\n          ${t?r:""}\n          <div>なし</div>\n          ${t?"":"<div></div>"}\n          <div></div>`)})),Ac.innerHTML=n}catch(e){console.log(e)}Tc.classList.remove("loading"),Ec.focus()})),Rc.addEventListener("click",(()=>{Sc.classList.remove("opened")})),kc.addEventListener("submit",(e=>{e.preventDefault()})),Ec.addEventListener("input",(()=>{xc.disabled=!1})),xc.addEventListener("click",(async()=>{ur("user_save"),xc.disabled=!0,Tc.classList.add("loading");try{const e=Ec.value,t=Ha();await async function(e){const t=Wa();t&&await Fs(t,{displayName:e})}(e);t!==Ha()&&await Promise.all(gc.map((async t=>{const n=await Oc(t);n&&(await async function(e,t){await uc(yu(fc,e.id),{name:t})}(n,e),n.name=e,delete Mc[t].entries)}))),Lc(Uc())}catch{xc.disabled=!1}Tc.classList.remove("loading")})),$a((()=>{Lc(Uc())}));const{titleLogo:$c,titleLogoIcon:Wc}=$i;var qc=e=>{const t=Fi.from(8).wait(300).to(0,600,dt.outSine).start(),n=Fi.from(0).wait(300).to(1,600,dt.steps(3)).start(),i=Fi.from(3).loopStart().to(-3,1500,dt.inOutSine).to(3,1500,dt.inOutSine).loopEnd().start(),r=()=>Fi.from(-100).loopStart().wait(2e3).to(-100).to(h.flash.width,200).wait(3e3).to(-100).to(h.flash.width,200).to(-100).to(h.flash.width,200).wait(2e3).loopEnd(),s=Fi.from(0).wait(60).on((()=>{h.normal=a().normal})),a=()=>({normal:u()?$c.ex:$c.normal,flash:u()?$c.exFlash:$c.normalFlash}),o=()=>{ar.mode="ex"===ar.mode?"normal":"ex",function(e){const t=new URL(location.href);"normal"===e?t.searchParams.delete("mode"):t.searchParams.set("mode",e),history.replaceState(history.state,"",t),Lc(e)}(ar.mode),nr.titleModeChange.play()};var l;const u=()=>{var t;return"ex"===(null!==(l=null==e||null===(t=e.value)||void 0===t?void 0:t.mode)&&void 0!==l?l:ar.mode)};let c=u(),h=a(),d=r().start();return()=>{c!==u()&&(c=u(),h.normal=h.flash=a().flash,d.end(),s.end(),d=r().start(),s.start());const l=F(Ti,h.normal),p=h.flash.width,f=Math.round(d.value),m=h.normal.toBox(l,80);m.height+=30,m.originY+=25,e||Ai.onDown(m,o),Ti.save(),Ti.drawSprite(Wc,F(Ti,Wc),53+Math.round(i.value)),Ti.opacity(n.value),Ti.drawSprite(h.normal,l,80+t.value),Ti.opacity(.8),Ti.drawSprite(h.flash.sub({x:Math.max(0,f),width:(f<0?100+f:Math.min(100,p-f))-p}),l+Math.max(0,f),80+t.value),Ti.restore()}};const{buttonTwitter:Hc}=$i;const{buttonMute:zc,buttonLight:Gc}=$i;const{card:Kc,fontUiS:Jc}=$i;var Xc=(e,t,n="")=>{const i=F(Ti,Kc.top),r=Fi.from(0).to(t+(n?Jc[0].height+1:0),200,dt.steps(5)).start(!1);return s=>{r.update();const a=(t-r.value)/2|0;if(Ti.drawSprite(Kc.top,i,e+a),Ti.drawSprite(Kc.body,i,e+a+Kc.top.height,Kc.body.width,r.value),Ti.drawSprite(Kc.bottom,i,e+a+Kc.top.height+r.value),n&&Jc[0].height<=r.value){const t=(Kc.body.width-Ti.measuretext(Jc,n,4))/2|0;Ti.drawText(Jc,n,i+t,e+a+4,4)}r.done&&s&&s({x:i+4,y:e+a+4+(n?Jc[0].height+1:0),width:Kc.body.width-8,height:r.value-(n?Jc[0].height+1:0)})}};const{tips:Yc}=$i;const{fontUi:Qc,scoreBg:Zc}=$i;var eh=(e,t)=>{const n=Fi.from(0).wait(150);let i=0;return(r,s)=>{if(Ti.drawSprite(Zc,e,t+2),Ti.drawText(Qc.normal,`y ${P(0|r)}`,e+1,t),Ti.drawRect(e+1,t+11,Math.floor(128*Math.min(r/1e6,1)),2,or.main),void 0!==s){i<s&&!n.running&&(i=s,n.start(!1));const r=n.update().running?Qc.flash:Qc.normal;Ti.drawText(r,"h "+(0|s),e+1,t+21)}}};const{replayReady:th,replayLoading:nh}=$i;const{buttonReset:ih,buttonLight:rh}=$i;const{pressAnyButton:sh}=$i;const{fontUi:ah,fontUiL:oh}=$i;const{uiStatusReset:lh}=$i;const{card:uh}=$i;var ch=()=>{const e={},t=39,n=eh(7,2),i=(r=uh.body.width/2,s=22,e=>{const t=Math.floor(100*Math.max(e,0)),n=`t ${Math.floor(t/100)}`,i=`.${String(t%100).padStart(2,"0")}`,a=Ti.measuretext(oh,n),o=Ti.measuretext(ah.normal,i),l=r-(a+1+o)/2;Ti.drawText(oh,n,l,s),Ti.drawText(ah.normal,i,l+a+1,s+2)});var r,s;const a=((e,t)=>{const n=Fi.from(!1).to(!0,100).to(!1).on((()=>{ki.emit("sceneChange",(()=>(Bc(""),fd())))})),i=()=>{n.started||(n.start(),nr.uiButton.play())};return()=>{Ai.onDown(lh.toBox(e-lh.width,t-lh.height),i),Ti.opacity(n.value?.2:1),Ti.drawSprite(lh,e-lh.width,t-lh.height)}})(uh.body.width,t),o=Fi.from(-39).wait(250).to(0,250,dt.outSine).on((()=>{ar.screenTop=t,ki.emit("statusInitIn")})).start(),l=Fi.from(0).to(-39,400,dt.inSine).on((()=>{ar.screenTop=0,ki.emit("statusFinOut"),at.remove(u)}));e.timeUp=()=>{l.start()},ar.screenTop=0;const u=(r,s,u)=>{ki.subscribe(e),Ti.save(),Ti.translate(F(Ti,uh.body),l.started?l.value:o.value),Ti.drawSprite(uh.body,0,0,uh.body.width,t-uh.bottom.height),Ti.drawSprite(uh.bottom,0,t-uh.bottom.height),n(r,s),i(u/Si.fps),a(),Ti.restore()};return u};const{success:hh}=$i;const{buttonReset:dh,buttonLight:ph}=$i;const{buttonTwitter:fh}=$i;var mh=e=>{const{time:t=30,times:n=1,color:i=y.parse("#fff8"),onEnd:r}=null!=e?e:{},s=Fi.from(!0).to(!0,t).loopStart(n-1).to(!1,t).to(!0,t).loopEnd().start(),a=()=>{s.value&&Ti.drawRect(0,0,Ti.width,Ti.height,i),s.done&&(at.remove(a),null==r||r())};return a};const{newRecord:gh}=$i;var vh=(e,t)=>{const n=Fi.from({x:0,y:0}).to({x:2,y:-2},10).to({x:-2,y:2},20).to({x:2,y:2},20).to({x:-2,y:-2},20).to({x:0,y:0}),i=Fi.from(0).wait(300).to(e,500,dt.inSine).on((()=>{ar.isSuccess?r.start():s.start()})).start(!1),r=Fi.from(0).wait(400),s=Fi.from(0).wait(200).on((()=>Vi.ui.add(((e,t)=>{const n=Fi.from(Ti.height).to(Ti.height-fh.height-30,300,dt.outSine).start(),i=()=>{const n=(null==t?void 0:t.isResolved())?`￥${P(e)}\n#FireShooterSan\n${Dc()}`:`#FireShooterSan\n${Dc()}`,i=new URLSearchParams({text:n});window.open(`https://twitter.com/intent/tweet?${i}`)};return()=>{const e=n.value;Ai.onDown(fh.toBox(30,e),i),Ti.drawSprite(fh,30,e)}})(e,t),(()=>{const e=Fi.from(Ti.height).to(Ti.height-dh.height-30,300,dt.outSine).start(),t=Fi.from(!1).to(!0,100).to(!1).on((()=>{ki.emit("sceneChange",(()=>(Bc(""),fd())))})),n=()=>{t.started||(t.start(),nr.uiButton.play())};return()=>{const i=Ti.width-dh.width-30,r=e.value;Ai.onDown(dh.toBox(i,r),n),Ti.drawSprite(dh,i,r),t.value&&(Ti.save(),Ti.opacity(.5),Ti.drawSprite(ph,i,r),Ti.restore())}})()))),a=Xc(90,49,"RESULT"),o=eh(3,16),l=((e,t,n)=>{const i=Fi.from({rotate:-15,scale:3}).to({rotate:-0,scale:1},250,dt.inSine).on((()=>{r.start(),n(),nr.resultSuccess.play()})).start(!1),r=Fi.from(!1).loopStart().to(!1,500).to(!0,500).loopEnd();return()=>{i.update(),Ti.save(),Ti.translate(e,t),Ti.rotate(i.value.rotate),Ti.scale(i.value.scale),Ti.drawSprite(r.value?hh.flash:hh.normal),Ti.restore()}})(106,1,(()=>{var e;n.start(),s.start(),(null==t||null===(e=t.value)||void 0===e?void 0:e.newRecord)&&Vi.ui.add((()=>{const e=Fi.from(!1).loopStart().to(!1,500).to(!0,500).loopEnd().start();let t=!0;return()=>{t&&(t=!1,ki.emit("newRecordShow"),Vi.ui.add(mh({color:y.parse("#fff"),time:100})));const n=e.value?gh.flash:gh.normal;Ti.drawSprite(n,F(Ti,n),44)}})())}));let u=i.value;return()=>{Ti.save(),Ti.translate(n.value.x,n.value.y),a((e=>{Ti.translate(e.x,e.y),o(i.update().value),r.done&&l()})),Ti.restore(),u!==i.value&&nr.resultCounting.play(),u=i.value}};const{start:yh}=$i;const{replayNow:wh}=$i;const{finish:bh}=$i;const{playerBullet:_h}=$i;const{playerBulletHit:Ih}=$i;const{playerBullet:Sh}=$i;var Th=(e,t,n)=>{const i={};let r=0,s=0,a=1/0,o=0,l=-90,u=0;i.enemyHit=()=>{at.remove(c),Vi.effectBack.add(((e,t)=>{const n=Fi.from(2).to(1,100,dt.inSine).on((()=>{at.remove(i)})).start(),i=()=>{Ti.save(),Ti.opacity(.8),Ti.translate(e,t),Ti.scale(n.value),Ti.drawSprite(Ih),Ti.restore()};return i})(e,t)),ki.emit("playerBulletRemove")},i.enemyPos=({id:n,x:i,y:u})=>{const c=L(N(i-e,u-t)-l),h=Math.abs(c);(-40<c&&c<40&&h<a||r===n)&&(s=n,a=r===n?0:h,o=c)},nr.playerFire.play();const c=()=>{if(s&&l!==o){const e=n?2:.5;l+=Math.min(Math.max(o,-e),e)}r=s,s=0,a=1/0;const h=C(l,n?6:8);if(e+=h.x,t+=h.y,e<=-Sh.originRight||Ti.width+Sh.originLeft<=e||t<=ar.screenTop-Sh.originBottom||Ti.height+Sh.originTop<=t)return at.remove(c),void ki.emit("playerBulletRemove");u++%3==0&&Vi.effectBack.add(((e,t)=>{const n=Fi.from(.2).to(0,250,dt.inSine).on((()=>{at.remove(i)})).start(),i=()=>{Ti.save(),Ti.opacity(n.value),Ti.drawSprite(_h,e,t),Ti.restore()};return i})(e,t)),ki.subscribe(i),Ei.emit("playerBulletHit",null,Sh.toBox(e,t),i),Ti.drawSprite(Sh,e,t)};return c};const{playerDestroyChip:kh}=$i;var Eh=(e,t,n,i)=>{const r=Fi.from(0).wait(i).start(),s=Fi.from(0).to(2).to(1,200,dt.inSine).start(!1),a=Fi.from(0).to(.8,100).wait(300).to(0,200).on((()=>{at.remove(u)})).start(!1),o=Fi.from(4).to(.2,300,dt.outSine).start(!1),l=C(n),u=()=>{r.done&&(o.update(),e+=l.x*o.value,t+=l.y*o.value,Ti.save(),Ti.opacity(a.update().value),Ti.translate(0|e,0|t),Ti.scale(s.update().value),Ti.drawSprite(kh),Ti.restore())};return u};const{playerDestroy:xh}=$i;const{player:Ah}=$i,Rh=e=>{const t={},n=Fi.from(Ti.height+Ah.normal.originTop).wait(200).to(Ti.height-30,200,dt.outSine).start(),i=Fi.from(!1).start();for(let e=0;e<12;e++)i.to(!0,60).to(!1,60);let r=!1,s=Ti.width/2,a=0;t.enemyHit=t.enemyBulletHit=()=>{!r&&i.done&&at.remove(o)&&(ar.heartRate=0,ar.clearing.start(),ki.emit("playerDestroy"),Vi.effectOverEnemy.add(((e,t)=>{const n=Fi.from(0).to(24,250,dt.outSine).wait(200).start(),i=Fi.from(0).to(2,100,dt.outSine).to(.7,150,dt.inOutSine).to(1.2,50,dt.inSine).to(1,100,dt.inSine).start(),r=Fi.from(1).wait(200).to(0,250,dt.inSine).on((()=>{at.remove(a)})).start(),s=or.accent.opacity(.37);for(let n=0;n<720;n+=48)Vi.effectOverEnemy.add(Eh(e,t,n,n/2+200));nr.playerHit.play();const a=()=>{Ti.save(),Ti.opacity(r.value),Ti.translate(0|e,0|t),n.done||Ti.drawCircle(0,-6,0|n.value,s),Ti.scale(i.value),Ti.drawSprite(xh),Ti.restore()};return a})(s,a)),Fi.from(0).wait(1e3).on((()=>{Vi.player.add(Rh(e))})).start())},t.timeUp=()=>{r=!0};const o=()=>{ki.subscribe(t);const o=i.value?Ah.flash:Ah.normal;if(!n.done)return a=n.value,void Ti.drawSprite(o,s,a);if(r&&e)return void Ti.drawSprite(o,s,a);let l=!1;if(Ai.isDown){const e=Ai.vec;s+=1.4*e.x,a+=1.4*e.y,l=Ai.downCount>7}else{l=Li.reduce(((e,t)=>Math.max(e,t.downCount||0)),0)>7;const e=function(...e){let t=0,n=0,i=0;for(const[r,s,a,o]of e)if("value"in r&&"value"in s&&"value"in a&&"value"in o){const e=Math.min(Math.max(s.value-o.value,-1),1),l=Math.min(Math.max(a.value-r.value,-1),1),u=Math.sqrt(e*e+l*l);t<u&&(t=u,n=e,i=l)}else if("isDown"in r&&"isDown"in s&&"isDown"in a&&"isDown"in o){const e=(s.isDown?1:0)+(o.isDown?-1:0),l=(a.isDown?1:0)+(r.isDown?-1:0),u=Math.sqrt(e*e+l*l);t<(0===u?0:1)&&(t=1,n=e/u,i=l/u)}return{x:n,y:i}}(Oi,Pi,Ni);s+=e.x*(l?1.5:4.5),a+=e.y*(l?1.5:4.5)}s=Math.min(Math.max(s,o.originLeft),Ti.width-o.originRight),a=Math.min(Math.max(a,ar.screenTop+o.originTop),Ti.height-o.originBottom),(Li.some((e=>e.isDown))&&Vi.playerBullet.isEmpty||Li.some((e=>e.isDownChange))&&Vi.playerBullet.size<3)&&Vi.playerBullet.add(Th(s,a-o.originTop,l)),ar.playerPos={x:s,y:a},r||Ei.emit("playerHit",null,{x:s,y:a,width:0,height:0,originX:0,originY:0},t),Ti.drawSprite(o,s,a)};return o};var Mh=Rh;const{enemyNotice:Oh,enemyNoticeLarge:Ph}=$i;let Nh=0;const{fontRate:Lh}=$i;var Ch=(e,t,n,i)=>{const r=Fi.from(!1).loopStart().to(!0,40).to(!1,60).loopEnd(),s=Fi.from(0).to(-6,200,dt.outSine).wait(300).on((()=>{at.remove(a)})).start();16<=n&&r.start(!1);const a=()=>{if(n>1){const i=r.update().value?Lh.flash:Lh.normal;Ti.drawText(i,`*${n}`,0|e,t+s.value|0,-1)}};return a};const{enemyTakeChip:Dh}=$i;const{enemyTake:Uh,enemyLargeTake:Fh}=$i;var Vh=({x:e,y:t,large:n,heart:i})=>{const r=ar.getHeartRate(),s=Fi.from(0).to(n?32:16,250,dt.outSine).wait(100).start(),a=Fi.from(0).to(1.5,100,dt.outSine).to(.8,100,dt.inOutSine).to(1,100,dt.inSine).start(),o=Fi.from(.9).wait(200).to(0,200,dt.inSine).on((()=>{at.remove(u),Vi.effectOverPlayer.add(Ch(e,t,r))})).start(),l=or.accent.opacity(.37),u=()=>{Ti.save(),Ti.opacity(o.value),Ti.translate(0|e,0|t),s.done||Ti.drawCircle(0,0,0|s.value,l),Ti.scale(a.value),Ti.drawSprite(n?Fh:Uh),Ti.restore()};return u};const{enemy:jh,enemyLarge:Bh}=$i;let $h=1;var Wh=(e,t)=>{const n={},i=$h++,r=e.hp,s={id:i,x:e.x,y:e.y,hp:e.hp,large:e.large},a=e.large?Bh:jh;e.me&&(e.me.id=i);let o=!1;const l=Fi.from(2).to(1,150,dt.inSine).start(!1),u=Fi.from(!1).to(!0,60).to(!1,60).to(!0,60).to(!1),c=Fi.from(1).to(0,200,dt.inSine).on((()=>{at.remove(h)}));n.playerBulletHit=()=>{o||(u.running||u.start(),nr.enemyHit.play(),--s.hp<=0&&at.remove(h)&&(ar.heartRate++,ar.addHeart(r),Vi.effectBack.add(Vh({...s,heart:r})),ki.emit("enemyTake",{id:i,large:e.large}),ki.emit("enemyDestroy",{id:i}),e.large?nr.enemyTakeLarge.play():nr.enemyTake.play()))},n.enemyTake=t=>{var n;(null===(n=e.parent)||void 0===n?void 0:n.id)===t.id&&at.remove(h)&&(ar.addHeart(r),Vi.effectBack.add(Vh({...s,heart:r})),ki.emit("enemyDestroy",{id:i}),ki.emit("enemyTake",{id:i,large:e.large}))},n.timeUp=()=>{o=!0,c.start(),Vi.effectBack.add((({x:e,y:t,large:n})=>{const i=Fi.from(0).to(n?16:8,400,dt.outSine).start(),r=Fi.from(.6).wait(200).to(0,200,dt.inSine).on((()=>{at.remove(s)})).start(),s=()=>{Ti.save(),Ti.opacity(r.value),Ti.drawCircle(0|e,0|t,0|i.value,or.accent),Ti.restore()};return s})({...s}))};const h=()=>{const d=e.noOver||e.noHorOver,p=e.noOver||e.noVertOver;if(s.hp<=0||!d&&(s.x<=-a.body.originRight||Ti.width+a.body.originLeft<=s.x)||!p&&(s.y<=ar.screenTop-a.body.originBottom||Ti.height+a.body.originTop<=s.y))return void(at.remove(h)&&ki.emit("enemyDestroy",{id:i}));ki.subscribe(n),o||t(s),Ti.save(),Ti.translate(s.x,s.y),o||Ei.emit("enemyHit",null,a.body.toBox(0,0),n),ki.emit("enemyPos",{id:i,x:s.x,y:s.y}),Ti.scale(c.started?c.value:l.update().value),Ti.drawSprite(u.value?a.bodyFlash:a.body);const f=u.value?a.gaugeFlash:a.gauge,m=Math.ceil(f.height*(Math.max(0,s.hp)/r));Ti.drawSprite(f.sub({y:m,height:-m,originY:-m})),Ti.restore()};return Vi.enemyNotice.add(((e,t,n)=>{const i={},r=t-1,s=ar.isFirstEnemy,a=ar.enemyWaveId;var o,l;Nh=s?300:Nh+(null!==(o=e.showTime)&&void 0!==o?o:50);const u=Fi.from(0).wait(null!==(l=e.wait)&&void 0!==l?l:0),c=Fi.from(0).wait(Nh).to(2).to(1,200,dt.outSine).start(),h=Fi.from(1).to(0,300,dt.inSine).on((()=>{at.remove(d)}));s||(i.enemyShow=e=>{u.started||e.id!==r||u.start()},i.enemyDestroy=e=>{e.id===r&&u.end()}),i.timeUp=()=>{h.start()},ar.isFirstEnemy=!1;const d=()=>{if(ki.subscribe(i),!h.started&&(s&&!u.started&&ar.enemyWaveId!==a||u.done))return at.remove(d),Vi.enemy.add(n),ki.emit("enemyShow",{id:t}),void nr.enemyShow.play();Ti.save(),Ti.opacity(ar.enemyWaveId!==a||e.large?.3:.2),Ti.translate(e.x,e.y),Ti.scale(h.started?h.value:c.value),Ti.drawSprite(e.large?Ph:Oh),Ti.restore()};return d})(e,i,h)),h};const{enemyBulletTake:qh,enemyBulletLargeTake:Hh}=$i;var zh=({x:e,y:t,large:n,angle:i,speed:r})=>{const s=Fi.from(0).to(n?8:4,400,dt.outSine).start(),a=Fi.from(.6).wait(200).to(0,200,dt.inSine).on((()=>{at.remove(o)})).start(),o=()=>{const n=C(i instanceof dt?i.value:i,r instanceof dt?r.value:r);e+=n.x,t+=n.y,Ti.save(),Ti.opacity(a.value),Ti.drawCircle(0|e,0|t,0|s.value,or.accent),Ti.restore()};return o};const{enemyBullet:Gh,enemyBulletLarge:Kh}=$i;var Jh=e=>{const t={},n=Fi.from(0).loopStart().to(1,500,dt.frameSteps(2)).to(0).loopEnd().start(!1);let{x:i,y:r}=e;t.enemyTake=t=>{if(t.id===e.id&&at.remove(s)){const t=e.large?2:1;ar.addHeart(t),Vi.effectBack.add((({x:e,y:t,large:n,heart:i})=>{const r=ar.getHeartRate(),s=Fi.from(0).to(n?16:8,250,dt.outSine).wait(100).start(),a=Fi.from(0).to(1.5,100,dt.outSine).to(.8,100,dt.inOutSine).to(1,100,dt.inSine).start(),o=Fi.from(.9).wait(200).to(0,200,dt.inSine).on((()=>{at.remove(u),Vi.effectOverPlayer.add(Ch(e,t,r))})).start(),l=or.accent.opacity(.37),u=()=>{Ti.save(),Ti.opacity(o.value),Ti.translate(0|e,0|t),s.done||Ti.drawCircle(0,0,0|s.value,l),Ti.scale(a.value),Ti.drawSprite(n?Hh:qh),Ti.restore()};return u})({...e,x:i,y:r,heart:t}))}},t.enemyDestroy=t=>{t.id===e.id&&Fi.from(0).wait(1e3).on((()=>{at.remove(s)&&Vi.effectBack.add(zh({...e,x:i,y:r}))})).start()},e.large?nr.enemyFireLarge.play():nr.enemyFire.play();const s=()=>{if(ar.clearing.running&&at.remove(s))return void Vi.effectBack.add(zh({...e,x:i,y:r}));const a=(e.large?Kh:Gh)[n.update().value],o=C(e.angle instanceof dt?e.angle.value:e.angle,e.speed instanceof dt?e.speed.value:e.speed);i+=o.x,r+=o.y,i<=-a.originRight&&o.x<=0||Ti.width+a.originLeft<=i&&0<=o.x||r<=ar.screenTop-a.originBottom&&o.y<=0||Ti.height+a.originTop<=r&&0<=o.y?at.remove(s):(ki.subscribe(t),Ei.emit("enemyBulletHit",null,a.toBox(i,r),t),Ti.drawSprite(a,i,r))};return s};const Xh=e=>{const t=(t,n)=>j(t,n,e.rank/2),n=Fi.from(0).wait(ji.nextInt(t(300,0),t(2e3,200))).start(!1),i=Fi.from(!1).to(!0);for(let n=0;n<e.rank;n++)i.wait(t(300,100)).to(!0);return Wh({...e},(e=>{n.update().done&&(n.wait(ji.nextInt(t(2e3,500),t(5e3,800))),i.start(!1)),i.update().getAndSet(!1)&&Vi.enemyBullet.add(Jh({...e,angle:90,speed:t(1,3)}))}))};const Yh=e=>{const t=(t,n)=>j(t,n,e.rank/2),n={},i=$i.enemy.body,r=Fi.from(!0).start(!1);let s=0,a=0;for(let n=0;n<e.rank;n++)r.wait(t(1e3,600)).to(!0);return Wh({...e},(o=>{if(ki.subscribe(n),r.update().getAndSet(!1)){const n=D(o.x-ar.playerPos.x,o.y-ar.playerPos.y);s=3*n.x,a=3*n.y;const i=N(ar.playerPos.x-o.x,ar.playerPos.y-o.y),r=t(.5,1);for(let t=0;t<e.rank+2;t++)Vi.enemyBullet.add(Jh({...o,angle:i,speed:1.5+t*r}))}else s+=(0-s)/20,a+=(4-a)/20;o.x+=s,o.y+=a,(o.x<i.originLeft||Ti.width-i.originRight<o.x)&&(s=-s,o.x+=s)}))};const Qh=e=>{const t=(t,n)=>j(t,n,e.rank/2),n=C(90+75*Math.sign(e.x-Ti.width/2),t(2,4)),i=$i.enemy.body;return Wh({...e},(r=>{if(r.x+=n.x,r.y+=n.y,r.x<i.originLeft||Ti.width-i.originRight<=r.x){n.x=-n.x,r.x+=n.x;const i=t(1.5,2.5),s=n.x<0?180:0;if(0===e.rank){const t=5*e.no;Vi.enemyBullet.add(Jh({...r,angle:s+90-t,speed:i}),Jh({...r,angle:s-90+t,speed:i}))}else if(1===e.rank)Vi.enemyBullet.add(Jh({...r,angle:s+90,speed:i}),Jh({...r,angle:s-90,speed:i}),Jh({...r,angle:s+60,speed:i}),Jh({...r,angle:s-60,speed:i}));else{const t=2===e.rank?30:45;for(let e=-90;e<=90;e+=t)Vi.enemyBullet.add(Jh({...r,angle:s+e,speed:i}))}}}))};const Zh=e=>{const t=(t,n)=>j(t,n,e.rank/2);let n=e.angle;const i=Fi.from(80).to(30,2e3,dt.outSine).to(200,2e3,dt.inSine).start(!1),r=Fi.from(!1).loopStart().wait(t(300,80)).to(!0).loopEnd().start(!1),s=C(n),a=e.x+s.x*i.value,o=e.y+s.y*i.value,l=t(2,3);return Wh({...e,x:a,y:o},(s=>{i.update(),r.update(),n+=l;const a=C(n);if(s.x=e.x+a.x*i.value,s.y=e.y+a.y*i.value,r.getAndSet(!1)){const e=N(ar.playerPos.x-s.x,ar.playerPos.y-s.y),n=Fi.from(.5).to(t(2,3),t(500,300),dt.inSine).start();Vi.enemyBullet.add(Jh({...s,angle:e,speed:n}))}}))};const ed=e=>{const t=(t,n)=>j(t,n,e.rank/2);let n=0,i=0,r=!1;const s=t(2,3.5);return Wh({...e},(a=>{if(0===n&&(n=ar.playerPos.y<e.y?-1:1),0===i)a.y+=s*n,(n<0&&ar.playerPos.y>=a.y||n>0&&ar.playerPos.y<=a.y)&&(i=ar.playerPos.x<a.x?-1:1);else if(a.x+=s*i,!r&&(i<0&&ar.playerPos.x>=a.x||i>0&&ar.playerPos.x<=a.x)){const n=ar.playerPos.y<a.y?270:90,i=t(.5,1);for(let t=0;t<e.rank+2;t++)Vi.enemyBullet.add(Jh({...a,angle:n,speed:2+t*i}));r=!0}}))};const td=e=>{const t=(t,n)=>j(t,n,e.rank/2),n=e.x<Ti.width/2?-$i.enemy.body.originRight:Ti.width+$i.enemy.body.originLeft,i=Fi.from(e.x).to(Ti.width-e.x,1e3,dt.outSine).to(n,1e3,dt.inSine).start(!1),r=Fi.from(e.y).to(e.y2,1700,dt.inOutSine).to(e.y2-(e.y2-e.y)/5,300,dt.inSine).start(!1),s=Fi.from(!0).start(!1),a=Fi.from(!1).to(!0);e.rank<2?s.wait(1100).to(!0):s.wait(500).to(!0).wait(500).to(!0);for(let n=0;n<2*e.rank;n++)a.wait(t(150,50)).to(!0);return Wh({...e},(e=>{if(e.x=i.update().value,e.y=r.update().value,s.update().getAndSet(!1)&&a.start(!1),a.update().getAndSet(!1)){const n=N(ar.playerPos.x-e.x,ar.playerPos.y-e.y),i=t(12,8),r=t(1.5,3.5);Vi.enemyBullet.add(Jh({...e,angle:n+i,speed:r}),Jh({...e,angle:n-i,speed:r}))}}))};const nd=e=>{const t=(t,n)=>j(t,n,e.rank/2),n=Fi.from(!1).wait(t(800,500)).loopStart().to(!0).wait(t(1e3,200)).loopEnd().start(!1),i=Fi.from(e.y).to(e.y+10,t(500,300),dt.inOutSine).to(ar.screenTop-$i.enemy.body.originBottom,t(2500,1500),dt.inSine).start(!1);let r=0,s=0,a=[],o=ji.nextInt(t(60,20));const l=t(1,2);return Wh({noHorOver:!0,...e},(e=>{a.unshift(ar.playerPos.x);const u=a[Math.min(a.length-1,o)];s+=t(5e-4,.001),r+=Math.min(Math.max(-s,u-e.x),s),e.x+=Math.min(Math.max(-l,r),l),e.y=i.update().value;const c=t(30,20);n.update().getAndSet(!1)&&Vi.enemyBullet.add(Jh({...e,angle:90-c,speed:1}),Jh({...e,angle:90+c,speed:1}))}))};const id=e=>{const t=(t,n)=>j(t,n,e.rank/2),n=e.x<Ti.width/2?Ti.width+$i.enemy.body.originLeft:-$i.enemy.body.originRight,i=Fi.from(e.x).to(n,t(2500,1500),dt.inSine).start(!1),r=Fi.from(e.y).to(ar.screenTop-$i.enemy.body.originBottom-10,t(2500,1500),dt.outSine).start(!1),s=Fi.from(!1).loopStart().wait(t(400,50)).to(!0).loopEnd().start(!1);return Wh({noHorOver:!0,...e},(e=>{if(e.x=i.update().value,e.y=r.update().value,s.update().getAndSet(!1)){const n=t(30,45),i=ji.nextFloat(90-n,90+n),r=ji.nextFloat(1,2);Vi.enemyBullet.add(Jh({...e,angle:i,speed:r}))}}))};const rd=e=>{const t=(t,n)=>j(t,n,e.rank/2),n={},i=Fi.from(!1).wait(t(500,200)).loopStart().to(!0).wait(t(1500,1e3)).loopEnd().start(!1),r=Fi.from(!1).to(!0);let s=90,a=0;for(let n=0;n<1+3*e.rank;n++)r.wait(t(150,80)).to(!0);return Wh({large:!0,noOver:!0,...e},(o=>{if(ki.subscribe(n),!r.running&&!r.value){const e=L(N(ar.playerPos.x-o.x,ar.playerPos.y-o.y)-s),n=t(1,2);s+=Math.min(Math.max(-n,e),n)}i.update().getAndSet(!1)&&(r.start(!1),a=s),r.update().getAndSet(!1)?(Vi.enemyBullet.add(Jh({...o,angle:a,speed:t(2.5,2)})),e.me.fire=!0):e.me.fire=!1;const l=C(s);o.x+=.3*l.x,o.y+=.3*l.y,e.me.x=o.x,e.me.y=o.y,e.me.angle=s}))},sd=e=>{const t=e.parent,n=C(t.angle+e.angle),i=t.x+n.x*e.dist,r=t.y+n.y*e.dist;return Wh({x:i,y:r,noOver:!0,...e},(n=>{const i=C(t.angle+e.angle);var r,s;n.x=t.x+i.x*e.dist,n.y=t.y+i.y*e.dist,t.fire&&Vi.enemyBullet.add(Jh({...n,id:t.id,angle:t.angle,speed:(r=1.5,s=1,j(r,s,e.rank/2))}))}))};const ad=e=>{const t=(t,n)=>j(t,n,e.rank/2),n={},i=Fi.from(!1).wait(t(500,200)).loopStart().to(!0).wait(t(1500,1e3)).loopEnd().start(!1),r=Fi.from(e.y).loopStart().to(e.y2,4e3,dt.inOutSine).to(e.y,4e3,dt.inOutSine).loopEnd().start(!1),s=Fi.from(0).loopStart().to(t(16,22),1e3,dt.outSine).to(-t(16,22),2e3,dt.inOutSine).to(0,1e3,dt.inSine).loopEnd().start(!1),a=Fi.from(!1).to(!0);for(let n=0;n<1+3*e.rank;n++)a.wait(t(150,40)).to(!0);let o=0,l=0;return Wh({large:!0,...e},(u=>{ki.subscribe(n),u.x=e.x+s.update().value,u.y=r.update().value,i.update().getAndSet(!1)&&(a.start(!1),o=0,l=N(ar.playerPos.x-u.x,ar.playerPos.y-u.y)),a.update().getAndSet(!1)?(Vi.enemyBullet.add(Jh({...u,angle:l,speed:t(2.5,1.5+.3*o)})),e.me.fire=!0,e.me.rapidNo=o++):(e.me.fire=!1,e.me.rapidNo=0),e.me.x=u.x,e.me.y=u.y}))},od=e=>{const t=(t,n)=>j(t,n,e.rank/2),n=e.parent,i=C(e.angle),r=n.x+i.x*e.dist,s=n.y+i.y*e.dist/2;let a=0;return Wh({x:r,y:s,noOver:!0,...e},(i=>{e.angle+=t(2,1);const r=C(e.angle);i.x=n.x+r.x*e.dist,i.y=n.y+r.y*e.dist/2,n.fire&&(0===n.rapidNo&&(a=N(ar.playerPos.x-i.x,ar.playerPos.y-i.y)),Vi.enemyBullet.add(Jh({...i,id:n.id,angle:a,speed:t(1.5,1+.2*n.rapidNo)})))}))};const ld=e=>{const t=(t,n)=>j(t,n,e.rank/2),n={},i=$i.enemyLarge.body,r=Fi.from(t(3,5)).wait(t(1500,500)).to(0,t(1e3,400),dt.inSine);let s={x:0,y:0};return Wh({large:!0,...e},(a=>{ki.subscribe(n),r.update(),a.x+=s.x*r.value,a.y+=s.y*r.value;let o=null;if(!r.running){r.start(!1),s=D(a.x-ar.playerPos.x,a.y-ar.playerPos.y);const n=N(ar.playerPos.x-a.x,ar.playerPos.y-a.y);o=[];const i=t(2,1),l=[2,3,5][e.rank];for(let e=0;e<l;e++)o.push({angle:n+e*t(30,45),speed:i}),0<e&&e<4&&o.push({angle:n-e*t(30,45),speed:i});for(const e of o)Vi.enemyBullet.add(Jh({...a,angle:e.angle,speed:e.speed}))}(a.x<i.originLeft||Ti.width-i.originRight<=a.x)&&(s.x=-s.x,a.x+=s.x*r.value),(a.y<ar.screenTop+i.originTop||Ti.height-i.originBottom<=a.y)&&(s.y=-s.y,a.y+=s.y*r.value),e.me.history.push({x:a.x,y:a.y,bullets:o})}))},ud=e=>{const t=(t,n)=>j(t,n,e.rank/2),n=e.parent,i=e.no*t(8,4),r=e.no*t(.2,.1);return Wh({noOver:!0,...e},(e=>{const t=n.history.length-1-i,s=n.history[Math.max(0,t)];if(e.x=s.x,e.y=s.y,s.bullets&&0<=t)for(const t of s.bullets)Vi.enemyBullet.add(Jh({...e,id:n.id,angle:t.angle,speed:t.speed-r}))}))};const cd=e=>{const t=(t,n)=>j(t,n,e.rank/2),n=Fi.from(!1).wait(t(400,0)).loopStart().to(!0).wait(t(150,150)).loopEnd().start(!1),i=t(60,70),r=C(e.angle),s=e.x+r.x*i,a=e.y+r.y*i;let o=-1;return Wh({large:!0,...e,x:s,y:a},(r=>{e.angle+=t(.5,1.5);const l=C(e.angle);if(r.x=e.x+l.x*i,r.y=e.y+l.y*i,n.update().getAndSet(!1)){if(o<0){const e=N(ar.playerPos.x-s,ar.playerPos.y-a);o=45*Math.round(e/45)+360}else o+=45;for(let t=0;t<1+e.rank**2;t++){const n=0===e.rank?Fi.from(4).to(2,200,dt.inSine):1===e.rank?Fi.from(4-t/2).to(2-t/2,200,dt.inSine):Fi.from(8-2*t).to(1,200,dt.inSine);Vi.enemyBullet.add(Jh({...r,angle:o,speed:n.start()}))}}}))};const hd=[(e,t)=>{const n=e>0?1:0,i=4+2*n,r=28-4*n;let s=ar.playerPos.x<Ti.width/2?-1:1,a=(Ti.width-(i-1)*r*s)/2,o=120;for(const n of U(2)){for(const n of U(i))Xh({lap:e,rank:t,hp:1,x:a,y:o,wait:300}),a+=r*s;s=-s,a+=r*s,o-=r}},(e,t)=>{const n=e>0?1:0,i=4+2*n,r=20-2*n,s=ar.playerPos.x<Ti.width/2?Ti.width-30:30,a=Ti.height-i*r-60;for(const n of U(i))ed({lap:e,rank:t,hp:1,x:s,y:a+r*n,wait:500})},(e,t)=>{const n=Ti.width/2,i={id:0,x:n,y:60,angle:90,fire:!1};rd({lap:e,rank:t,hp:4+2*e,x:n,y:60,me:i});for(const[n,r]of[[-100,50],[-60,30],[60,30],[100,50]])ar.isFirstEnemy=!0,sd({lap:e,rank:t,hp:2+e,parent:i,angle:n,dist:r})},(e,t)=>{const n=e>0?1:0,i=4+2*n,r=25-9*n,s=ar.playerPos.x<Ti.width/2?-1:1,a=(Ti.width-(i-1)*r*s)/2,o=Ti.height-50;for(const n of U(i))nd({lap:e,rank:t,hp:1,x:a+n*r*s,y:o,wait:300})},(e,t)=>{const n=4+2*(e>0?1:0),i=ar.playerPos.x<Ti.width/2?Ti.width-30:30,r=Ti.height-40;for(const s of U(n))id({lap:e,rank:t,hp:1,x:i,y:r,wait:400})},(e,t)=>{const n=Ti.width/2,i=Ti.height-50,r={id:0,x:n,y:i,fire:!1,rapidNo:0};ad({lap:e,rank:t,hp:4+2*e,x:n,y:i,y2:80,me:r});for(let n=0;n<360;n+=90)ar.isFirstEnemy=!0,od({lap:e,rank:t,hp:2+e,parent:r,angle:n-45,dist:50})},(e,t)=>{const n=e>0?1:0,i=4+2*n,r=20-4*n,s=ar.playerPos.x<Ti.width/2?Ti.width-r:r,a=ar.playerPos.x<Ti.width/2?-1:1;for(const n of U(i))Yh({lap:e,rank:t,hp:1,x:s+n*r*a,y:80,wait:600})},(e,t)=>{const n=4+2*(e>0?1:0),i=ar.playerPos.x<Ti.width/2?Ti.width-30:30;for(const r of U(n))Qh({lap:e,rank:t,hp:1,x:i,y:50,wait:400,no:r})},(e,t)=>{const n=Ti.width/2,i={id:0,history:[{x:n,y:100,bullets:null}]};for(let r=4;0<r;r--)ar.isFirstEnemy=!0,ud({lap:e,rank:t,hp:2+e,x:n,y:100,parent:i,no:r});ld({lap:e,rank:t,hp:4+2*e,x:n,y:100,me:i})},(e,t)=>{const n=e>0?1:0,i=4+2*n,r=20-4*n,s=ar.playerPos.x<Ti.width/2?30:Ti.width-30;for(const n of U(i))td({lap:e,rank:t,hp:1,x:s,y:50+n*r,y2:Ti.height-40,wait:400})},(e,t)=>{const n=2+2*(e>0?1:0),i=2===n?180:90,r=Ti.width/2,s=90*ji.nextInt(4)+45;for(const a of U(n))Zh({lap:e,rank:t,hp:1,x:r,y:130,wait:500,angle:s-i*a})},(e,t)=>{const n=Ti.width/2;for(const i of[0,180])ar.isFirstEnemy=!0,cd({lap:e,rank:t,hp:4+2*e,x:n,y:135,angle:i})}];var dd=e=>{const t=(t,n,i,r,s,a)=>{const o=Fi.from(s).loopStart().to(-s,a).to(s,a).loopEnd().start();let l=80*r;return()=>{l+=r*e;const s=Math.abs(Math.floor(o.value)),a=Math.sign(o.value),u=Math.floor(Ti.width/2-t/2+s/2),c=Math.floor(Ti.width/2+t/2-s/2);Ti.save(),Ti.opacity(i),Ti.drawRect(u,0,c-u,Ti.height,or.main),Ti.translate(0,Math.floor(l%(2*n)));for(const[e,t]of[[u,-1],[c,1]]){let i=a;Ti.save();for(let r=2*-n;r<Ti.height+n/2;r+=n)Ti.save(),Ti.translate(e,r),Ti.scale(t,i),Ti.drawSprite($i.bg,0,0,s,n),Ti.restore(),i=-i;Ti.restore()}Ti.restore()}},n=[t(100,80,.07,3,16,4e3),t(105,120,.06,2.4,24,4500),t(110,160,.05,1.8,32,5e3)];return()=>{n.forEach((e=>e()))}},pd=e=>{let t,n=0,i=60*Si.fps,r=0,s=!1,a=0;if(e){ur(`${e.mode}_replay`,{replay_id:e.id});const t=xe(function(e){const t=[];let n=0,i=!0;for(const r of e){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".indexOf(r);if(e<0)throw Error("invalid string");i&&16&e&&(n=-1),i=!1,n=n<<5|31&e,0==(32&e)&&(t.push(n),n=0,i=!0)}return t}(e.log));ji.seed=e.seed,Ui.forEach(((e,n)=>{e.log=t[n]||[],e.playLog()}))}else{ur(`${ar.mode}_play`),r=ji.updateSeed();for(const e of Ui)e.recLog()}const o={};var l;const u=at.of((e=>{const t={};let n=0,i="ex"===e?2:0,r=0;t.statusInitIn=()=>{hd[0](n,i)},t.timeStart=()=>{r=0},t.enemyDestroy=()=>{r--},t.timeUp=()=>{at.remove(s)},ar.isFirstEnemy=!0,ar.enemyWaveId=0,r=1;const s=()=>{if(ki.subscribe(t),r<=0){r=Vi.enemyNotice.size;const e=++ar.enemyWaveId%hd.length;ar.isFirstEnemy=!0,hd[e](n,i),e===hd.length-1&&(n++,i=Math.min(i+1,2))}};return s})(null!==(l=null==e?void 0:e.mode)&&void 0!==l?l:ar.mode)),c=Fi.from(0).wait(1e3).on((()=>{e&&Vi.ui.add((()=>{const e={timeUp:()=>{at.remove(t)}},t=()=>{ki.subscribe(e),Ti.drawSprite(wh,F(Ti,wh),40)};return t})()),ki.emit("timeStart"),sr.play.play()})),h=Fi.from(or.base).loopStart((()=>i>0)).to(y.blend(or.white,or.accent,.1),500).to(y.blend(or.white,or.main,.1),500).loopEnd().to(or.base,500).start(!1),d=Fi.from({x:0,y:0}).to({x:1,y:-1},20).to({x:-1,y:1},40).to({x:1,y:1},40).to({x:-1,y:-1},40).to({x:0,y:0}),p=Fi.from({x:0,y:0}).to({x:2,y:-2},20).to({x:-2,y:2},40).to({x:2,y:2},40).to({x:-2,y:-2},40).to({x:1,y:-1},40).to({x:-1,y:1},40).to({x:1,y:1},40).to({x:-1,y:-1},40).to({x:0,y:0});o.statusInitIn=()=>{Vi.ui.add((()=>{const e={},t=Fi.from(-100).wait(100).to(44).to(54,300,dt.outSine).wait(600).on((()=>{at.remove(n)})).start();e.timeUp=()=>{t.start()};const n=()=>{ki.subscribe(e),Ti.drawSprite(yh,F(Ti,yh),t.value)};return n})()),c.start()},o.enemyTake=e=>{s||e.large&&p.start()},o.playerDestroy=()=>{s||(e||ur(`${ar.mode}_dead`,{time:i,wave_id:ar.enemyWaveId-1}),d.start(),a++)},o.statusFinOut=()=>{Fi.from(0).wait(200).on((()=>{Vi.ui.add(vh(n,t))})).wait(300).on((()=>{sr.result.play(),sr.play.stop()})).start()},o.sceneChange=()=>{i>0&&!e&&ur(`${ar.mode}_reset`,{time:i,wave_id:ar.enemyWaveId-1,dead_count:a})};const f=ch();return Vi.ui.add((()=>f(n,ar.heart,i))),Vi.player.add(Mh(Boolean(e))),Vi.bg.add(dd(1)),ar.heart=0,ar.heartRate=0,ar.isSuccess=!1,ar.clearing.reset(),()=>{if(ki.subscribe(o),c.done&&i--,0<=i&&i%Si.fps==0&&(n+=10*ar.heart,ar.isSuccess=1e6<=n),0===i){e||ur(`${ar.mode}_finish`,{wave_id:ar.enemyWaveId-1,dead_count:a}),s=!0,ki.emit("timeUp"),Vi.ui.add((()=>{const e={},t=Fi.from(54).to(44,300,dt.outSine).start();e.timeUp=()=>{t.start()},e.newRecordShow=()=>{at.remove(n)};const n=()=>{ki.subscribe(e),Ti.drawSprite(bh,F(Ti,bh),t.value)};return n})());for(const e of Ui)e.endLog();e||(t=B.from(Nc({version:0,log:ke(Ee(...Ui.map((e=>e.log)))),score:n,seed:r,mode:ar.mode})))}(null==t?void 0:t.isResolved())&&Bc(t.value.replayId),Ti.save(),ar.isSuccess&&h.update(),Ti.drawRect(0,0,Ti.width,Ti.height,h.value),p.running?Ti.translate(p.value.x,p.value.y):d.running&&Ti.translate(d.value.x,d.value.y),u.run(),Vi.bg.run(),Vi.effectBack.run(),Vi.enemyNotice.run(),Vi.player.run(),Vi.playerBullet.run(),Vi.effectOverPlayer.run(),Vi.enemy.run(),Vi.enemyBullet.run(),Vi.effectOverEnemy.run(),Ti.restore(),Vi.ui.run()}},fd=()=>{const e=jc(),t=e?B.from(mc(e)):void 0;var n;const i=()=>{var e;return"ex"===(null!==(n=null==t||null===(e=t.value)||void 0===e?void 0:e.mode)&&void 0!==n?n:ar.mode)},r=y.blend(or.white,or.accent,.1);let s=!1;Vi.ui.add(qc(t),(e=>{const t=Fi.from(!1).wait(1300).on((()=>{var t;return!e||0===(null===(t=e.value)||void 0===t?void 0:t.version)})).loopStart().to(!0,800).to(!1,400).loopEnd().start();return()=>{t.value&&Ti.drawSprite(sh,F(Ti,sh),215)}})(t),(()=>{const e=Fi.from(!1).to(!0,100).to(!1);let t="true"===localStorage.getItem("mute");const n=()=>{t=!t,localStorage.setItem("mute",String(t)),Object.values(nr).forEach((e=>e.setMute(t))),Object.values(sr).forEach((e=>e.setMute(t))),e.start(),nr.uiButton.play()};return()=>{const i=zc[t?1:0],r=(s=i,Ti.width-s.width-7);var s;Ai.onDown(i.toBox(r,7),n),Ti.drawSprite(i,r,7),e.value&&(Ti.save(),Ti.opacity(.5),Ti.drawSprite(Gc,r,7),Ti.restore())}})()),t?Vi.ui.add((()=>{const e=Fi.from(!1).to(!0,100).to(!1).on((()=>{ki.emit("sceneChange",(()=>(Bc(""),fd())))})),t=()=>{e.started||(e.start(),nr.uiButton.play())};return()=>{Ai.onDown(ih.toBox(7,7),t),Ti.drawSprite(ih,7,7),e.value&&(Ti.save(),Ti.opacity(.5),Ti.drawSprite(rh,7,7),Ti.restore())}})(),(e=>{const t=Fi.from(0).wait(500).start(),n=Fi.from(0).wait(100);let i=nh;e.then((e=>{if(!e)throw Error("replay is not found");if(0!==e.version)throw Error("invalid replay version");i=th,n.to(e.score,300,dt.inSine).start(!1)}));const r=Xc(115,74,"REPLAY"),s=eh(3,16);return()=>{t.done&&(Ti.save(),r((e=>{Ti.translate(e.x,e.y),s(n.update().value),Ti.drawSprite(i,F(e,nh),46)})),Ti.restore())}})(t)):Vi.ui.add((()=>{const e=()=>{const e=new URLSearchParams({text:`#FireShooterSan\n${Dc()}`});window.open(`https://twitter.com/intent/tweet?${e}`)};return()=>{Ai.onDown(Hc.toBox(7,7),e),Ti.drawSprite(Hc,7,7)}})(),(()=>{var e;let t=Number(null!==(e=localStorage.getItem("tips-no"))&&void 0!==e?e:-1);t=(t+1)%12,localStorage.setItem("tips-no",String(t));const n=Yc[t];11===t&&ur("tips_complete");const i=Fi.from(0).wait(700).start(),r=Fi.from(!1).loopStart().to(!1,800).to(!0,800).loopEnd().start(!1),s=Fi.from(!1).loopStart().to(!1,200).to(!0,200).loopEnd().start(!1),a=Xc(130,Math.max(n.height+12,60),`TIPS ${t+1}/12`);return()=>{i.done&&a((e=>{Ti.save(),Ti.translate(e.x+F(e,n)|0,e.y+function(e,t){return(e.height-t.height)/2}(e,n)|0),Ti.drawSprite(n),r.update(),s.update(),0===t&&s.value&&Ti.drawSprite(Yc.million,39,32),1===t&&s.value&&Ti.drawRect(90,18,2,2,or.white),1===t&&r.value&&Ti.drawSprite(Yc.arrow,63,16),2===t&&r.value&&Ti.drawSprite(Yc.heart,0,16),3===t&&r.value&&(Ti.drawSprite(Yc.heart,41,1),Ti.drawSprite(Yc.heart,40,31)),4===t&&r.value&&Ti.drawSprite(Yc.heart,41,31),5===t&&r.value&&(Ti.drawSprite(Yc.heart,51,1),Ti.drawSprite(Yc.score,40,17)),6===t&&s.value&&Ti.drawSprite(Yc.million,0,2),10===t&&r.value&&Ti.drawSprite(Yc.user,0,14),Ti.restore()}))}})()),Vi.bg.add(dd(.3)),Object.values(sr).forEach((e=>e.stop())),or.base=i()?r:or.white;let a=Fi.from(or.base),o=i();return()=>{var e;if(o!==i()&&(o=i(),or.base=i()?r:or.white,a.end(),a=Fi.from(a.value).to(or.base,300).start()),!s&&(!t||0===(null===(e=t.value)||void 0===e?void 0:e.version))&&Di.some((e=>e.isDownChange))){s=!0;const e=()=>{ki.emit("sceneChange",(()=>pd(null==t?void 0:t.value)))};Vi.ui.add(mh({times:2,onEnd:e})),nr.titleStart.play()}Ti.drawRect(0,0,Ti.width,Ti.height,a.value),Vi.bg.run(),Vi.ui.run()}};const md={};let gd=fd,vd=gd();const yd=Fi.from(0).wait(100).to(Ti.height,200).start(),wd=Fi.from(-Ti.height).to(0,200).on((()=>{Fi.clear(),Ui.forEach((e=>e.endLog())),Object.values(Vi).forEach((e=>e.clear())),vd=gd(),yd.start()}));var bd;md.sceneChange=e=>{gd=e,wd.start()},Cc=()=>ki.emit("sceneChange",fd),bd="true"===localStorage.getItem("mute"),Object.values(nr).forEach((e=>e.setMute(bd))),Object.values(sr).forEach((e=>e.setMute(bd))),ar.mode=Uc(),Si.proc=()=>{Ti.clear(),ki.clear(),Ei.clear(),Object.values(xi).forEach((e=>e.update())),Ai.update(),Object.values(Ri).forEach((e=>e.update())),Object.values(Mi).forEach((e=>e.update())),Fi.update(),ki.subscribe(md),Ci.some((e=>e.isDownChange))&&!wd.running&&ki.emit("sceneChange",(()=>(Bc(""),fd()))),vd();const e=[yd,wd].find((e=>e.running));e&&Ti.drawRect(0,e.value,Ti.width,Ti.height,or.base)};