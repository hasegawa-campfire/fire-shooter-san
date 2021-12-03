function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequirebae0;function s(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e).value}function a(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");var i=t.get(e);if(!i.writable)throw new TypeError("attempted to set read only private field");return i.value=n,n}function o(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequirebae0=r),r.register("3y7ul",(function(t,n){var i,r;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var s={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},r=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("3y7ul").register(JSON.parse('{"9KFsc":"index.844fad45.js","7QRtv":"image.c138513e.png","QPPni":"se_etc_003.751a5cc1.wav","7Rhg3":"se_shot_003.7192b630.wav","8W3sW":"wind3.87bf4484.wav","iQ7l0":"shoot9.2235e996.wav","6RTqz":"se_powerup_004.fb62fc04.wav","ltoOe":"se_powerup_008.fd5e1090.wav","csyRH":"audiostock_49758.e0483042.mp3","7daCL":"audiostock_49543.c0017692.mp3","6t7Zz":"sonohoka_pyokottohaeru.ebb39909.wav","eGD62":"hit_kyouda4.c2fae92b.wav","fQj5x":"kaminarikei_chisaikaminari.a1aac738.wav","bQiPl":"cancel2.e1adafec.wav","a9RsU":"mamono_tsukon2.40b037d7.wav","2GqAh":"souchi_kaifukusouchi.b8152e4c.wav","hq5Ck":"hit_tsujou3.4da24c3a.wav"}'));var c=new WeakSet;var u=new WeakMap,h=new WeakMap,d=new WeakMap,p=new WeakMap,f=new WeakMap;function m(){window.cancelAnimationFrame(s(this,d)),"visible"===document.visibilityState&&a(this,d,window.requestAnimationFrame(s(this,f)))}const g=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$|^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,y={};class v{get red(){return s(this,w)}set red(e){a(this,w,e),a(this,S,"")}get green(){return s(this,b)}set green(e){a(this,b,e),a(this,S,"")}get blue(){return s(this,_)}set blue(e){a(this,_,e),a(this,S,"")}get alpha(){return s(this,I)}set alpha(e){a(this,I,e),a(this,S,"")}toString(){return s(this,S)||a(this,S,"#"+T(s(this,w))+T(s(this,b))+T(s(this,_))+T(s(this,I))),s(this,S)}opacity(e){const t=new v(this);return t.alpha=Math.min(Math.max(0,s(this,I)*e),1),t}static parse(e){let t=y[e];if(!t){const n=e.match(g)||[];t=y[e]={red:parseInt(n[1]||n[5]+n[5]||"0",16)/255,green:parseInt(n[2]||n[6]+n[6]||"0",16)/255,blue:parseInt(n[3]||n[7]+n[7]||"0",16)/255,alpha:parseInt(n[4]||n[8]+n[8]||"ff",16)/255}}return new v(t)}static blend(e,t,n=.5){return new v({red:(t.red-e.red)*n+e.red,green:(t.green-e.green)*n+e.green,blue:(t.blue-e.blue)*n+e.blue,alpha:(t.alpha-e.alpha)*n+e.alpha})}constructor(e={}){var t,n,i,r;w.set(this,{writable:!0,value:void 0}),b.set(this,{writable:!0,value:void 0}),_.set(this,{writable:!0,value:void 0}),I.set(this,{writable:!0,value:void 0}),S.set(this,{writable:!0,value:""}),a(this,w,null!==(t=e.red)&&void 0!==t?t:0),a(this,b,null!==(n=e.green)&&void 0!==n?n:0),a(this,_,null!==(i=e.blue)&&void 0!==i?i:0),a(this,I,null!==(r=e.alpha)&&void 0!==r?r:1)}}var w=new WeakMap,b=new WeakMap,_=new WeakMap,I=new WeakMap,S=new WeakMap;function T(e){return Math.min(Math.max(0,Math.floor(255*e)),255).toString(16).padStart(2,"0")}const k={};class E{static load(e,t={}){const n=e instanceof URL?e.href:e;let i=k[n];return i||(i=k[n]=new Image,i.src=n),new E(i,t)}get x(){var e;return null!==(e=s(this,x).x)&&void 0!==e?e:0}get y(){var e;return null!==(e=s(this,x).y)&&void 0!==e?e:0}get width(){var e;return null!==(e=s(this,x).width)&&void 0!==e?e:this.image.width}get height(){var e;return null!==(e=s(this,x).height)&&void 0!==e?e:this.image.height}get originX(){var e;return null!==(e=s(this,x).originX)&&void 0!==e?e:0}get originY(){var e;return null!==(e=s(this,x).originY)&&void 0!==e?e:0}get originLeft(){return this.originX}get originTop(){return this.originY}get originRight(){return this.width-this.originX}get originBottom(){return this.height-this.originY}sub(e){const t={...s(this,x)};var n,i,r,a,o,l;return void 0!==e.x&&(t.x=e.x+(null!==(n=t.x)&&void 0!==n?n:0)),void 0!==e.y&&(t.y=e.y+(null!==(i=t.y)&&void 0!==i?i:0)),void 0!==e.width&&(t.width=e.width+(null!==(r=t.width)&&void 0!==r?r:0)),void 0!==e.height&&(t.height=e.height+(null!==(a=t.height)&&void 0!==a?a:0)),void 0!==e.originX&&(t.originX=e.originX+(null!==(o=t.originX)&&void 0!==o?o:0)),void 0!==e.originY&&(t.originY=e.originY+(null!==(l=t.originY)&&void 0!==l?l:0)),new E(this.image,t)}static loadMap(e,t){const n=t=>{if(Array.isArray(t)){const[n,i,r,s,a,o]=t;return E.load(e,{x:n,y:i,width:r,height:s,originX:null!=a?a:0,originY:null!=o?o:0})}const i=Object.entries(t).map((([e,t])=>[e,n(t)]));return Object.fromEntries(i)};return n(t)}toBox(e,t){return{x:e,y:t,width:this.width,height:this.height,originX:this.originX,originY:this.originY}}constructor(e,t={}){x.set(this,{writable:!0,value:void 0}),this.image=e,a(this,x,{...t})}}var x=new WeakMap;const A={normal:"source-over",add:"lighter",multiply:"multiply",screen:"screen",overlay:"overlay"};var R=new WeakSet;var O=new WeakMap;function P(){const e=this.canvas.width/window.devicePixelRatio,t=this.canvas.height/window.devicePixelRatio,n=Math.floor(window.innerWidth/e),i=Math.floor(window.innerHeight/t);this.canvas.style.width=Math.max(Math.min(n,i),1)*e+"px"}function M(e){return e.toLocaleString("en-US")}function L(e,t){return Math.atan2(t,e)*(180/Math.PI)}function N(e){return(e%=360)<0&&(e+=360),e>180&&(e-=360),e}function C(e,t=1){const n=e*(Math.PI/180);return{x:Math.cos(n)*t,y:Math.sin(n)*t}}function D(e,t){const n=function(e,t){return Math.sqrt(e*e+t*t)}(e,t);return{x:e/n,y:t/n}}function U(e){return Array.from({length:e}).map(((e,t)=>t))}function F(e,t){return(e.width-t.width)/2}function V(e){let t="";for(let n of e){n=Math.floor(n);let e=(0<=n?n:-n-1).toString(2).length+1,i=0,r="";for(;e>0;)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[31&n|i]+r,e-=5,n>>=5,i=32;t+=r}return t}function j(...e){let t=[];for(const n of e)t=t.concat(n.length,n);return t}function B(e,t){const n=[];let i=0;for(let r=0;r<t;r++){const t=i+1+e[i];if(e.length<t)throw Error("invalid pack size");n.push(e.slice(i+1,t)),i=t}return n}function $(e,t,n){return(t-e)*n+e}class q{then(e,t){return new q(s(this,W).then(e,t))}isResolved(){return s(this,H)}get value(){return s(this,z)}static from(e){return new q("function"==typeof e?e():e)}constructor(e){W.set(this,{writable:!0,value:void 0}),H.set(this,{writable:!0,value:!1}),z.set(this,{writable:!0,value:void 0}),a(this,W,e),e.then((e=>{a(this,H,!0),a(this,z,e)}))}}var W=new WeakMap,H=new WeakMap,z=new WeakMap;const G=window.webkitAudioContext||window.AudioContext,K=q.from((async()=>{await function(e,t){const n=Array.isArray(t)?t:[t];return Promise.race(n.map((t=>new Promise((n=>e.addEventListener(t,n))))))}(document,["touchend","mouseup","keyup"]);const e=new G,t=()=>"visible"===document.visibilityState?e.resume():e.suspend();return await t(),document.addEventListener("visibilitychange",t),e}));var J=new WeakSet;class Y{play(){if(K.isResolved()&&s(this,ie).isResolved()&&s(this,re).isResolved()){if(K.value.currentTime-s(this,ne)>=s(this,Z)){var e,t,n;if(null===(e=s(this,se))||void 0===e||e.stop(),a(this,se,K.value.createBufferSource()),"boolean"==typeof s(this,ee))s(this,se).loop=s(this,ee);else s(this,se).loop=!0,s(this,se).loopStart=null!==(t=s(this,ee).start)&&void 0!==t?t:0,s(this,se).loopEnd=null!==(n=s(this,ee).end)&&void 0!==n?n:0;s(this,se).buffer=s(this,ie).value,s(this,se).connect(s(this,re).value),s(this,se).start(),a(this,ne,K.value.currentTime)}}else Promise.all([K,s(this,ie),s(this,re)]).then((()=>{this.play()}))}stop(){var e;null===(e=s(this,se))||void 0===e||e.stop(),a(this,se,null)}setMute(e){a(this,te,e),o(this,J,ae).call(this)}setVolume(e){a(this,Q,e),o(this,J,ae).call(this)}constructor(e,t={}){var n,i,r,o;X.set(this,{writable:!0,value:void 0}),Q.set(this,{writable:!0,value:1}),Z.set(this,{writable:!0,value:void 0}),ee.set(this,{writable:!0,value:void 0}),te.set(this,{writable:!0,value:void 0}),ne.set(this,{writable:!0,value:Number.MIN_SAFE_INTEGER}),ie.set(this,{writable:!0,value:void 0}),re.set(this,{writable:!0,value:void 0}),se.set(this,{writable:!0,value:null}),J.add(this),a(this,X,null!==(n=t.volume)&&void 0!==n?n:1),a(this,Z,null!==(i=t.minTime)&&void 0!==i?i:0),a(this,ee,null!==(r=t.loop)&&void 0!==r&&r),a(this,te,null!==(o=t.mute)&&void 0!==o&&o),a(this,ie,q.from((async()=>{const t=await fetch(e instanceof URL?e.href:e),n=await t.arrayBuffer();return(await K).decodeAudioData(n)}))),a(this,re,q.from((async()=>{const e=await K,t=e.createGain();return t.gain.value=s(this,te)?0:s(this,Q)*s(this,X),t.connect(e.destination),t})))}}var X=new WeakMap,Q=new WeakMap,Z=new WeakMap,ee=new WeakMap,te=new WeakMap,ne=new WeakMap,ie=new WeakMap,re=new WeakMap,se=new WeakMap;function ae(){s(this,re).isResolved()&&(s(this,re).value.gain.value=s(this,te)?0:s(this,Q)*s(this,X))}class oe extends Y{constructor(e,t,n){super(e,{volume:t,minTime:n})}}class le extends Y{constructor(e,t,n){super(e,{volume:t,loop:n})}}var ce=new WeakMap,ue=new WeakMap;var he=new WeakMap,de=new WeakMap;const pe=[" ","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"];function fe(e){return e instanceof HTMLElement&&!!e.closest("input, textarea, select, button")}window.addEventListener("keydown",(e=>{pe.includes(e.key)&&!fe(e.target)&&e.preventDefault()}));let me={};window.addEventListener("keydown",(e=>{fe(e.target)||(me[e.key.toLocaleLowerCase()]=!0)})),window.addEventListener("keyup",(e=>{fe(e.target)||(me[e.key.toLocaleLowerCase()]=!1)})),window.addEventListener("blur",(()=>{me={}}));class ge{update(){a(this,we,s(this,ve)),"play"===s(this,Se)?(a(this,be,1+ +s(this,be)),s(this,_e)[s(this,Ie)]<s(this,be)&&(a(this,ve,!s(this,ve)),a(this,be,0),a(this,Ie,1+ +s(this,Ie)))):(a(this,ve,s(this,ye).some((e=>me[e]))),a(this,be,s(this,ve)===s(this,we)?s(this,be)+1:0)),"rec"===s(this,Se)&&(s(this,ve)===s(this,we)?s(this,_e)[s(this,_e).length-1]=s(this,be):s(this,_e).push(s(this,be)))}get isDown(){return s(this,ve)}get isDownChange(){return s(this,ve)&&!s(this,we)}get isUpChange(){return!s(this,ve)&&s(this,we)}get downCount(){return s(this,ve)?s(this,be):NaN}get upCount(){return s(this,ve)?NaN:s(this,be)}get logMode(){return s(this,Se)}get log(){return s(this,_e).slice()}set log(e){a(this,_e,e.slice()),a(this,Se,"pause")}recLog(){a(this,_e,[s(this,be),s(this,we)?1:0,s(this,ve)?1:0,s(this,be)]),a(this,Se,"rec")}playLog(){a(this,be,s(this,_e)[0]),a(this,we,Boolean(s(this,_e)[1])),a(this,ve,Boolean(s(this,_e)[2])),a(this,Ie,3),a(this,Se,"play")}endLog(){a(this,Se,"pause")}constructor(e){ye.set(this,{writable:!0,value:void 0}),ve.set(this,{writable:!0,value:!1}),we.set(this,{writable:!0,value:!1}),be.set(this,{writable:!0,value:0}),_e.set(this,{writable:!0,value:[]}),Ie.set(this,{writable:!0,value:0}),Se.set(this,{writable:!0,value:"pause"}),a(this,ye,(Array.isArray(e)?e:[e]).map((e=>e.toLocaleLowerCase())))}}var ye=new WeakMap,ve=new WeakMap,we=new WeakMap,be=new WeakMap,_e=new WeakMap,Ie=new WeakMap,Se=new WeakMap;window.addEventListener("contextmenu",(e=>e.preventDefault()));let Te=null,ke={x:0,y:0};window.addEventListener("pointerdown",(e=>{Te=e.target,ke.x=e.clientX,ke.y=e.clientY})),window.addEventListener("pointerup",(e=>{Te=null})),window.addEventListener("pointercancel",(e=>{Te=null})),window.addEventListener("pointermove",(e=>{ke.x=e.clientX,ke.y=e.clientY})),window.addEventListener("blur",(()=>{Te=null}));he=new WeakMap,ve=new WeakMap,we=new WeakMap,be=new WeakMap;var Ee=new WeakMap,xe=new WeakMap,Ae=new WeakMap,Re=new WeakMap,Oe=new WeakMap,Pe=new WeakMap,Me=(_e=new WeakMap,Ie=new WeakMap,new WeakMap),Le=new WeakMap,Ne=new WeakMap,Ce=new WeakMap,De=(Se=new WeakMap,new WeakMap),Ue=new WeakMap;const Fe=new WeakMap;class Ve{add(...e){for(const t of e)Ve.remove(t),s(this,je).add(t),Fe.set(t,s(this,je))}run(...e){for(const t of s(this,je))t(...e)}clear(){s(this,je).clear()}get isEmpty(){return!s(this,je).size}get size(){return s(this,je).size}static remove(e){const t=Fe.get(e);let n=!1;return t&&(n=t.delete(e),Fe.delete(e)),n}static of(...e){const t=new Ve;return t.add(...e),t}constructor(){je.set(this,{writable:!0,value:new Set})}}var je=new WeakMap;var Be=new WeakMap;function $e(e){return e instanceof v?new v(e):"object"==typeof e?Object.fromEntries(Object.entries(e).map((([e,t])=>[e,$e(t)]))):e}function qe(e,t,n){return e instanceof v&&t instanceof v?v.blend(e,t,n):"number"==typeof e&&"number"==typeof t?(t-e)*n+e:"boolean"==typeof e&&"boolean"==typeof t?n>0?t:e:"object"==typeof e&&"object"==typeof t?Object.fromEntries(Object.keys(e).map((i=>[i,qe(e[i],t[i],n)]))):$e(void 0===t?e:t)}function We(e){return t=>t<=0?0:1<=t?1:e(t)}class He{reset(){s(this,Ke)&&s(this,Ke).delete(this),a(this,Qe,!1),a(this,ze,0),a(this,Ye,0),a(this,Xe,null),this.value=$e(s(this,Ze))}start(e){var t,n;return!1===e?null===(t=s(this,Ke))||void 0===t||t.delete(this):null===(n=s(this,Ke))||void 0===n||n.add(this),a(this,Qe,!0),a(this,ze,0),a(this,Ye,0),a(this,Xe,null),this.value=$e(s(this,Ze)),this}end(){s(this,Ke)&&s(this,Ke).delete(this),a(this,Qe,!0),a(this,Ye,s(this,Je).length),a(this,Xe,null),this.value=$e(s(this,et))}to(e,t=0,n=He.linear){t=Math.max(t,0);const i=a(this,et,$e(e));return s(this,Je).push((()=>{const e=$e(this.value);return()=>{if(s(this,ze)<=t)return this.value=qe(e,i,n(s(this,ze)/t)),!0;a(this,ze,s(this,ze)-t),this.value=$e(i)}})),this}wait(e){return e=Math.max(e,0),s(this,Je).push((()=>()=>{if(s(this,ze)<=e)return!0;a(this,ze,s(this,ze)-e)})),this}on(e){return s(this,Je).push((()=>{const t=s(this,ze);return()=>(a(this,ze,t),!1===e())})),this}loopStart(e=1/0,t){const n="number"==typeof e?t=>t<e:e;s(this,Je).push((()=>()=>{s(this,tt)[i]=0,t&&(s(this,rt)[t]=0)}));const i=s(this,Je).length;return s(this,nt).push(i),s(this,tt)[i]=0,s(this,Je).push((()=>()=>{let e=s(this,tt)[i];t&&(s(this,rt)[t]=e),n(e)||(a(this,Ye,s(this,it)[i]),a(this,Xe,null))})),this}loopEnd(){const e=s(this,Je).length,t=s(this,nt).pop();if(void 0===t)throw Error("no corresponding loopStart()");return s(this,it)[t]=e,s(this,Je).push((()=>()=>{s(this,tt)[t]++,a(this,Ye,t-1),a(this,Xe,null)})),this}update(e){if(e=null!=e?e:"function"==typeof s(this,Ge)?s(this,Ge).call(this):s(this,Ge),this.running){a(this,ze,s(this,ze)+Math.max(0,e));do{if(s(this,Xe)||a(this,Xe,s(this,Je)[s(this,Ye)]()),s(this,Xe).call(this))break;a(this,Xe,null),a(this,Ye,1+ +s(this,Ye))}while(this.running)}return this}get done(){return s(this,Ye)>=s(this,Je).length}get started(){return s(this,Qe)}get running(){return this.started&&!this.done}getAndSet(e){const t=this.value;return this.value=e,t}get loops(){return s(this,rt)}constructor(e,t=1,n){ze.set(this,{writable:!0,value:0}),Ge.set(this,{writable:!0,value:void 0}),Ke.set(this,{writable:!0,value:void 0}),Je.set(this,{writable:!0,value:[]}),Ye.set(this,{writable:!0,value:0}),Xe.set(this,{writable:!0,value:null}),Qe.set(this,{writable:!0,value:!1}),Ze.set(this,{writable:!0,value:void 0}),et.set(this,{writable:!0,value:void 0}),tt.set(this,{writable:!0,value:{}}),nt.set(this,{writable:!0,value:[]}),it.set(this,{writable:!0,value:{}}),rt.set(this,{writable:!0,value:{}}),l(this,"value",void 0),a(this,Ge,t),a(this,Ke,n),a(this,Ze,a(this,et,$e(e))),this.value=$e(e)}}l(He,"linear",We((e=>e))),l(He,"inSine",We((e=>1-Math.cos(e*(Math.PI/2))))),l(He,"outSine",We((e=>Math.sin(e*(Math.PI/2))))),l(He,"inOutSine",We((e=>e<.5?.5*He.inSine(2*e):.5+.5*He.outSine(2*(e-.5))))),l(He,"steps",(e=>We((t=>Math.ceil(t*e)/e)))),l(He,"frameSteps",(e=>We((t=>Math.floor(t*e)/(e-1)))));var ze=new WeakMap,Ge=new WeakMap,Ke=new WeakMap,Je=new WeakMap,Ye=new WeakMap,Xe=new WeakMap,Qe=new WeakMap,Ze=new WeakMap,et=new WeakMap,tt=new WeakMap,nt=new WeakMap,it=new WeakMap,rt=new WeakMap;var st=new WeakMap,at=new WeakMap,ot=new WeakMap;
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
const lt=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},ct={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,c=r>>2,u=(3&r)<<4|a>>4;let h=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(lt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],a=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const o=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==a||null==o)throw Error();const l=r<<2|s>>4;if(i.push(l),64!==a){const e=s<<4&240|a>>2;if(i.push(e),64!==o){const e=a<<6&192|o;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ut=function(e){try{return ct.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
class ht{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
function dt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function pt(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function ft(){return"object"==typeof indexedDB}function mt(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function gt(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}class yt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,vt.prototype.create)}}class vt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(wt,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new yt(i,a,n)}}const wt=/\{\$([^}]+)}/g;
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
 */function bt(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(_t(n)&&_t(s)){if(!bt(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function _t(e){return null!==e&&"object"==typeof e}
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
 */function It(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function St(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function Tt(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class kt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=Et),void 0===i.error&&(i.error=Et),void 0===i.complete&&(i.complete=Et);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Et(){}
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
 */function xt(e,t=1e3,n=2){const i=t*Math.pow(n,e),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}
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
function At(e){return e&&e._delegate?e._delegate:e}class Rt{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
class Ot{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ht;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}
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
class Pt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ot(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */const Mt=[];var Lt,Nt;(Nt=Lt||(Lt={}))[Nt.DEBUG=0]="DEBUG",Nt[Nt.VERBOSE=1]="VERBOSE",Nt[Nt.INFO=2]="INFO",Nt[Nt.WARN=3]="WARN",Nt[Nt.ERROR=4]="ERROR",Nt[Nt.SILENT=5]="SILENT";const Ct={debug:Lt.DEBUG,verbose:Lt.VERBOSE,info:Lt.INFO,warn:Lt.WARN,error:Lt.ERROR,silent:Lt.SILENT},Dt=Lt.INFO,Ut={[Lt.DEBUG]:"log",[Lt.VERBOSE]:"log",[Lt.INFO]:"info",[Lt.WARN]:"warn",[Lt.ERROR]:"error"},Ft=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=Ut[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class Vt{constructor(e){this.name=e,this._logLevel=Dt,this._logHandler=Ft,this._userLogHandler=null,Mt.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Lt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ct[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Lt.DEBUG,...e),this._logHandler(this,Lt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Lt.VERBOSE,...e),this._logHandler(this,Lt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Lt.INFO,...e),this._logHandler(this,Lt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Lt.WARN,...e),this._logHandler(this,Lt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Lt.ERROR,...e),this._logHandler(this,Lt.ERROR,...e)}}
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
class jt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Bt=new Vt("@firebase/app"),$t={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},qt=new Map,Wt=new Map;function Ht(e,t){try{e.container.addComponent(t)}catch(n){Bt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function zt(e){const t=e.name;if(Wt.has(t))return Bt.debug(`There were multiple attempts to register component ${t}.`),!1;Wt.set(t,e);for(const t of qt.values())Ht(t,e);return!0}function Gt(e,t){return e.container.getProvider(t)}
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
const Kt=new vt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class Jt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Rt("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Kt.create("app-deleted",{appName:this._name})}}
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
 */function Yt(e="[DEFAULT]"){const t=qt.get(e);if(!t)throw Kt.create("no-app",{appName:e});return t}function Xt(e,t,n){var i;let r=null!==(i=$t[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Bt.warn(e.join(" "))}zt(new Rt(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
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
var Qt;Qt="",zt(new Rt("platform-logger",(e=>new jt(e)),"PRIVATE")),Xt("@firebase/app","0.7.10",Qt),Xt("@firebase/app","0.7.10","esm2017"),Xt("fire-js","");
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
Xt("firebase","9.6.0","app");var Zt={};!function(e,t){"object"==typeof Zt?t(Zt):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).idb={})}(Zt,(function(e){function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function i(e,t,i){var r,s=new Promise((function(s,a){n(r=e[t].apply(e,i)).then(s,a)}));return s.request=r,s}function r(e,t,n){var r=i(e,t,n);return r.then((function(e){if(e)return new u(e,r.request)}))}function s(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function a(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function o(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return this[t][i].apply(this[t],arguments)})}))}function l(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function c(e){this._index=e}function u(e,t){this._cursor=e,this._request=t}function h(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function p(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function f(e){this._db=e}s(c,"_index",["name","keyPath","multiEntry","unique"]),a(c,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),l(c,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(u,"_cursor",["direction","key","primaryKey","value"]),a(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(u.prototype[e]=function(){var t=this,i=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,i),n(t._request).then((function(e){if(e)return new u(e,t._request)}))}))})})),h.prototype.createIndex=function(){return new c(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new c(this._store.index.apply(this._store,arguments))},s(h,"_store",["name","keyPath","indexNames","autoIncrement"]),a(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),l(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),o(h,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},s(d,"_tx",["objectStoreNames","mode"]),o(d,"_tx",IDBTransaction,["abort"]),p.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),o(p,"_db",IDBDatabase,["deleteObjectStore","close"]),f.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),o(f,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[h,c].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),i=n[n.length-1],r=this._store||this._index,s=r[e].apply(r,n.slice(0,-1));s.onsuccess=function(){i(s.result)}})}))})),[c,h].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,i=[];return new Promise((function(r){n.iterateCursor(e,(function(e){e?(i.push(e.value),void 0===t||i.length!=t?e.continue():r(i)):r(i)}))}))})})),e.openDb=function(e,t,n){var r=i(indexedDB,"open",[e,t]),s=r.request;return s&&(s.onupgradeneeded=function(e){n&&n(new p(s.result,e.oldVersion,s.transaction))}),r.then((function(e){return new f(e)}))},e.deleteDb=function(e){return i(indexedDB,"deleteDatabase",[e])},Object.defineProperty(e,"__esModule",{value:!0})}));const en=new vt("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function tn(e){return e instanceof yt&&e.code.includes("request-failed")}
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
 */function nn({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function rn(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function sn(e,t){const n=(await t.json()).error;return en.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function an({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function on(e,{refreshToken:t}){const n=an(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
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
 */(t)),n}async function ln(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
 */function cn(e){return new Promise((t=>{setTimeout(t,e)}))}
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
const un=/^[cdef][\w-]{21}$/;function hn(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
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
 */(e);return un.test(t)?t:""}catch(e){return""}}function dn(e){return`${e.appName}!${e.appId}`}
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
 */const pn=new Map;function fn(e,t){const n=dn(e);mn(n,t),function(e,t){const n=yn();n&&n.postMessage({key:e,fid:t});vn()}(n,t)}function mn(e,t){const n=pn.get(e);if(n)for(const e of n)e(t)}let gn=null;function yn(){return!gn&&"BroadcastChannel"in self&&(gn=new BroadcastChannel("[Firebase] FID Change"),gn.onmessage=e=>{mn(e.data.key,e.data.fid)}),gn}function vn(){0===pn.size&&gn&&(gn.close(),gn=null)}
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
 */let wn=null;function bn(){return wn||(wn=Zt.openDb("firebase-installations-database",1,(e=>{if(0===e.oldVersion)e.createObjectStore("firebase-installations-store")}))),wn}async function _n(e,t){const n=dn(e),i=(await bn()).transaction("firebase-installations-store","readwrite"),r=i.objectStore("firebase-installations-store"),s=await r.get(n);return await r.put(t,n),await i.complete,s&&s.fid===t.fid||fn(e,t.fid),t}async function In(e){const t=dn(e),n=(await bn()).transaction("firebase-installations-store","readwrite");await n.objectStore("firebase-installations-store").delete(t),await n.complete}async function Sn(e,t){const n=dn(e),i=(await bn()).transaction("firebase-installations-store","readwrite"),r=i.objectStore("firebase-installations-store"),s=await r.get(n),a=t(s);return void 0===a?await r.delete(n):await r.put(a,n),await i.complete,!a||s&&s.fid===a.fid||fn(e,a.fid),a}
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
 */async function Tn(e){let t;const n=await Sn(e,(n=>{const i=function(e){return xn(e||{fid:hn(),registrationStatus:0})}(n),r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(en.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(e,t){try{const n=await async function(e,{fid:t}){const n=nn(e),i=an(e),r={fid:t,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.5.4"},s={method:"POST",headers:i,body:JSON.stringify(r)},a=await ln((()=>fetch(n,s)));if(a.ok){const e=await a.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:rn(e.authToken)}}throw await sn("Create Installation",a)}(e,t);return _n(e,n)}catch(n){throw tn(n)&&409===n.customData.serverCode?await In(e):await _n(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:kn(e)}:{installationEntry:t}}(e,i);return t=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function kn(e){let t=await En(e);for(;1===t.registrationStatus;)await cn(100),t=await En(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Tn(e);return n||t}return t}function En(e){return Sn(e,(e=>{if(!e)throw en.create("installation-not-found");return xn(e)}))}function xn(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
 */}async function An({appConfig:e,platformLoggerProvider:t},n){const i=function(e,{fid:t}){return`${nn(e)}/${t}/authTokens:generate`}
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
 */(e,n),r=on(e,n),s=t.getImmediate({optional:!0});s&&r.append("x-firebase-client",s.getPlatformInfoString());const a={installation:{sdkVersion:"w:0.5.4"}},o={method:"POST",headers:r,body:JSON.stringify(a)},l=await ln((()=>fetch(i,o)));if(l.ok){return rn(await l.json())}throw await sn("Generate Auth Token",l)}async function Rn(e,t=!1){let n;const i=await Sn(e.appConfig,(i=>{if(!Pn(i))throw en.create("not-registered");const r=i.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(e)}(r))return i;if(1===r.requestStatus)return n=async function(e,t){let n=await On(e.appConfig);for(;1===n.authToken.requestStatus;)await cn(100),n=await On(e.appConfig);const i=n.authToken;return 0===i.requestStatus?Rn(e,t):i}(e,t),i;{if(!navigator.onLine)throw en.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=async function(e,t){try{const n=await An(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await _n(e.appConfig,i),n}catch(n){if(!tn(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await _n(e.appConfig,n)}else await In(e.appConfig);throw n}}(e,t),t}}));return n?await n:i.authToken}function On(e){return Sn(e,(e=>{if(!Pn(e))throw en.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
 */}))}function Pn(e){return void 0!==e&&2===e.registrationStatus}
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
async function Mn(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await Tn(e);t&&await t}
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
 */(n.appConfig);return(await Rn(n,t)).token}function Ln(e){return en.create("missing-app-config-values",{valueName:e})}
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
 */const Nn=e=>{const t=Gt(e.getProvider("app").getImmediate(),"installations").getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:i}=await Tn(t.appConfig);return i?i.catch(console.error):Rn(t).catch(console.error),n.fid}(t),getToken:e=>Mn(t,e)}};zt(new Rt("installations",(e=>{const t=e.getProvider("app").getImmediate(),n=
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
function(e){if(!e||!e.options)throw Ln("App Configuration");if(!e.name)throw Ln("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ln(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,platformLoggerProvider:Gt(t,"platform-logger"),_delete:()=>Promise.resolve()}}),"PUBLIC")),zt(new Rt("installations-internal",Nn,"PRIVATE")),Xt("@firebase/installations","0.5.4"),Xt("@firebase/installations","0.5.4","esm2017");
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
const Cn=new Vt("@firebase/analytics");
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
function Dn(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Un(e,t,n,i){return async function(r,s,a){try{"event"===r?await async function(e,t,n,i,r){try{let s=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);const i=await Dn(n);for(const n of e){const e=i.find((e=>e.measurementId===n)),r=e&&t[e.appId];if(!r){s=[];break}s.push(r)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",i,r||{})}catch(e){Cn.error(e)}}(e,t,n,s,a):"config"===r?await async function(e,t,n,i,r,s){const a=i[r];try{if(a)await t[a];else{const e=(await Dn(n)).find((e=>e.measurementId===r));e&&await t[e.appId]}}catch(e){Cn.error(e)}e("config",r,s)}(e,t,n,i,s,a):e("set",s)}catch(e){Cn.error(e)}}}
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
const Fn=new vt("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const Vn=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function jn(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Bn(e,t=Vn,n){const{appId:i,apiKey:r,measurementId:s}=e.options;if(!i)throw Fn.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw Fn.create("no-api-key")}const a=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new qn;return setTimeout((async()=>{o.abort()}),void 0!==n?n:6e4),$n({appId:i,apiKey:r,measurementId:s},a,o,t)}async function $n(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=Vn){const{appId:s,measurementId:a}=e;try{await function(e,t){return new Promise(((n,i)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener((()=>{clearTimeout(s),i(Fn.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(i,t)}catch(e){if(a)return Cn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:s,measurementId:a};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:jn(i)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),a=await fetch(s,r);if(200!==a.status&&304!==a.status){let e="";try{const n=await a.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw Fn.create("config-fetch-failed",{httpStatus:a.status,responseMessage:e})}return a.json()}(e);return r.deleteThrottleMetadata(s),t}catch(t){if(!function(e){if(!(e instanceof yt&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(r.deleteThrottleMetadata(s),a)return Cn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:s,measurementId:a};throw t}const o=503===Number(t.customData.httpStatus)?xt(n,r.intervalMillis,30):xt(n,r.intervalMillis),l={throttleEndTimeMillis:Date.now()+o,backoffCount:n+1};return r.setThrottleMetadata(s,l),Cn.debug(`Calling attemptFetch again in ${o} millis`),$n(e,l,i,r)}}class qn{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
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
 */async function Wn(e,t,n,i,r,s,a){var o;const l=Bn(e);l.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Cn.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Cn.error(e))),t.push(l);const c=async function(){if(!ft())return Cn.warn(Fn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await mt()}catch(e){return Cn.warn(Fn.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}().then((e=>e?i.getId():void 0)),[u,h]=await Promise.all([l,c]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes("https://www.googletagmanager.com/gtag/js"))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`https://www.googletagmanager.com/gtag/js?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,u.measurementId),r("js",new Date);const d=null!==(o=null==a?void 0:a.config)&&void 0!==o?o:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),r("config",u.measurementId,d),u.measurementId}
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
 */class Hn{constructor(e){this.app=e}_delete(){return delete zn[this.app.options.appId],Promise.resolve()}}let zn={},Gn=[];const Kn={};let Jn,Yn,Xn="dataLayer",Qn="gtag",Zn=!1;function ei(e,t,n){!function(){const e=[];if(pt()&&e.push("This is a browser extension environment."),gt()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Fn.create("invalid-analytics-context",{errorInfo:t});Cn.warn(n.message)}}();const i=e.options.appId;if(!i)throw Fn.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Fn.create("no-api-key");Cn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=zn[i])throw Fn.create("already-exists",{id:i});if(!Zn){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Xn);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,i,r){let s=function(...e){window[i].push(arguments)};return window[r]&&"function"==typeof window[r]&&(s=window[r]),window[r]=Un(s,e,t,n),{gtagCore:s,wrappedGtag:window[r]}}(zn,Gn,Kn,Xn,Qn);Yn=e,Jn=t,Zn=!0}zn[i]=Wn(e,Gn,Kn,t,Jn,Xn,n);return new Hn(e)}
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
 */function ti(e,t,n,i){e=At(e),async function(e,t,n,i,r){if(r&&r.global)e("event",n,i);else{const r=await t;e("event",n,Object.assign(Object.assign({},i),{send_to:r}))}}(Yn,zn[e.app.options.appId],t,n,i).catch((e=>Cn.error(e)))}zt(new Rt("analytics",((e,{options:t})=>ei(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),zt(new Rt("analytics-internal",(function(e){try{const t=e.getProvider("analytics").getImmediate();return{logEvent:(e,n,i)=>ti(t,e,n,i)}}catch(e){throw Fn.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Xt("@firebase/analytics","0.7.4"),Xt("@firebase/analytics","0.7.4","esm2017");const ni=new class{get fps(){return s(this,u)}get time(){return 1e3*s(this,p)/this.fps}get frameTime(){return 1e3/s(this,u)}constructor({fps:e}){u.set(this,{writable:!0,value:void 0}),l(this,"proc",null),h.set(this,{writable:!0,value:0}),d.set(this,{writable:!0,value:0}),p.set(this,{writable:!0,value:0}),c.add(this),f.set(this,{writable:!0,value:()=>{var e;a(this,d,window.requestAnimationFrame(s(this,f))),a(this,p,1+ +s(this,p)),null===(e=this.proc)||void 0===e||e.call(this)}}),a(this,u,e),o(this,c,m).call(this),document.addEventListener("visibilitychange",(()=>o(this,c,m).call(this)))}}({fps:60}),ii=new class{clear(){s(this,O).setTransform(1,0,0,1,0,0),s(this,O).clearRect(0,0,this.canvas.width,this.canvas.height)}save(){s(this,O).save()}restore(){s(this,O).restore()}getMatrix(){return s(this,O).getTransform()}drawSprite(e,t,n,i,r){e.image.complete&&(i=null!=i?i:e.width,r=null!=r?r:e.height,t=(null!=t?t:0)-e.originX*(i/e.width),n=(null!=n?n:0)-e.originY*(r/e.height),s(this,O).drawImage(e.image,e.x,e.y,e.width,e.height,Math.floor(t),Math.floor(n),Math.floor(i),Math.floor(r)))}drawText(e,t,n,i,r=1){let s=0;for(const l of t){var a,o;if(" "===l){s&&(s+=r),s+=1;continue}const t=null!==(o=null===(a=e[l])||void 0===a?void 0:a.width)&&void 0!==o?o:0;t&&(s&&(s+=r),this.drawSprite(e[l],n+s,i),s+=t)}}measuretext(e,t,n=1){let i=0;for(const a of t){var r,s;if(" "===a){i&&(i+=n),i+=1;continue}const t=null!==(s=null===(r=e[a])||void 0===r?void 0:r.width)&&void 0!==s?s:0;t&&(i&&(i+=n),i+=t)}return i}drawRect(e,t,n,i,r){s(this,O).fillStyle=String(r),s(this,O).fillRect(e,t,n,i)}drawCircle(e,t,n,i){e=Math.floor(e),t=Math.floor(t),n=Math.floor(n),s(this,O).fillStyle=String(i);const r=s(this,O).fillRect.bind(s(this,O));let a=-n,o=0,l=2-2*n;do{r(e-a,t+o,1,1),r(e-o,t-a,1,1),r(e+a,t-o,1,1),r(e+o,t+a,1,1),(n=l)<=o&&(l+=2*++o+1),(n>a||l>o)&&(l+=2*++a+1)}while(a<0)}translate(e,t){s(this,O).translate(e,t)}scale(e,t){s(this,O).scale(e,null!=t?t:e)}rotate(e){s(this,O).rotate(e*Math.PI/180)}opacity(e){s(this,O).globalAlpha=Math.min(Math.max(e,0),1)}blendMode(e){s(this,O).globalCompositeOperation=A[e]}boxToRect(e){const t=this.getMatrix(),n=e.x-e.originX,i=e.y-e.originY,r=t.transformPoint({x:n,y:i}),s=t.transformPoint({x:n+e.width,y:i}),a=t.transformPoint({x:n+e.width,y:i+e.height}),o=t.transformPoint({x:n,y:i+e.height});return{left:Math.min(r.x,s.x,a.x,o.x),top:Math.min(r.y,s.y,a.y,o.y),right:Math.max(r.x,s.x,a.x,o.x),bottom:Math.max(r.y,s.y,a.y,o.y)}}constructor({width:e,height:t,el:n}){l(this,"width",void 0),l(this,"height",void 0),l(this,"canvas",void 0),O.set(this,{writable:!0,value:void 0}),R.add(this);const i="string"==typeof n?document.querySelector(n):n;if(!(i&&i instanceof HTMLCanvasElement))throw Error("not canvas element");this.canvas=i,this.width=i.width=e,this.height=i.height=t,i.setAttribute("style","\n  image-rendering: pixelated;\n  image-rendering: crisp-edges;\n  touch-action: none;\n");const r=i.getContext("2d");if(!r)throw Error("none context2d");a(this,O,r),r.imageSmoothingEnabled=!1,window.addEventListener("resize",(()=>o(this,R,P).call(this))),window.setTimeout((()=>o(this,R,P).call(this)),1)}}({width:160,height:240,el:"#app"}),ri=new class{clear(){s(this,ce).clear(),s(this,ue).clear()}subscribe(e){var t;for(const n of s(this,ue))null===(t=e[n.type])||void 0===t||t.call(e,n.data);s(this,ce).add(e)}emit(e,t){var n;for(const i of s(this,ce))null===(n=i[e])||void 0===n||n.call(i,t);s(this,ue).add({type:e,data:t})}constructor(){ce.set(this,{writable:!0,value:new Set}),ue.set(this,{writable:!0,value:new Set})}},si=new class{clear(){a(this,de,[])}emit(e,t,n,i){const r=s(this,he).boxToRect(n);for(const{type:n,data:a,rect:o,eventMap:l}of s(this,de)){const s=l[e],c=i[n];(s||c)&&r.left<o.right&&o.left<r.right&&r.top<o.bottom&&o.top<r.bottom&&(null==s||s(t),null==c||c(a))}s(this,de).push({type:e,data:t,rect:r,eventMap:i})}constructor(e){he.set(this,{writable:!0,value:void 0}),de.set(this,{writable:!0,value:[]}),a(this,he,e),a(this,de,[])}}(ii),ai={left:new ge(["ArrowLeft","a"]),right:new ge(["ArrowRight","d"]),up:new ge(["ArrowUp","w"]),down:new ge(["ArrowDown","s"]),fire:new ge([" ","z",".","Control"]),reset:new ge(["Enter","Escape"])},oi=new class{update(){a(this,De,[]);const e=s(this,he).canvas;Te instanceof Node||a(this,Ue,!1),a(this,we,s(this,ve));const t=s(this,Ae),n=s(this,Re);if("play"===s(this,Se))a(this,be,1+ +s(this,be)),s(this,_e)[s(this,Ie)]<s(this,be)&&(a(this,ve,!s(this,ve)),a(this,be,0),a(this,Ie,1+ +s(this,Ie))),a(this,Oe,1+ +s(this,Oe)),a(this,Pe,1+ +s(this,Pe)),s(this,Me)[s(this,Le)]<s(this,Oe)&&(a(this,Oe,0),a(this,Le,s(this,Le)+2),a(this,Ae,s(this,Me)[s(this,Le)-1]||0)),s(this,Ne)[s(this,Ce)]<s(this,Pe)&&(a(this,Pe,0),a(this,Ce,s(this,Ce)+2),a(this,Re,s(this,Ne)[s(this,Ce)-1]||0)),a(this,Ee,s(this,Ee)+s(this,Ae)),a(this,xe,s(this,xe)+s(this,Re));else{a(this,ve,!s(this,Ue)&&Te instanceof Node&&e.contains(Te)),a(this,be,s(this,ve)===s(this,we)?s(this,be)+1:0);const i=s(this,Ee),r=s(this,xe),o=e.getBoundingClientRect();a(this,Ee,Math.floor((ke.x-o.x)*(e.width/o.width))),a(this,xe,Math.floor((ke.y-o.y)*(e.height/o.height))),a(this,Ae,s(this,Ee)-i),a(this,Re,s(this,xe)-r),a(this,Oe,s(this,Ae)===t?s(this,Oe)+1:0),a(this,Pe,s(this,Re)===n?s(this,Pe)+1:0)}"rec"===s(this,Se)&&(s(this,ve)===s(this,we)?s(this,_e)[s(this,_e).length-1]=s(this,be):s(this,_e).push(s(this,be)),s(this,Ae)===t?s(this,Me)[s(this,Me).length-1]=s(this,Oe):s(this,Me).push(s(this,Ae),s(this,Oe)),s(this,Re)===n?s(this,Ne)[s(this,Ne).length-1]=s(this,Pe):s(this,Ne).push(s(this,Re),s(this,Pe))),s(this,ve)&&!s(this,we)&&(a(this,Ae,0),a(this,Re,0))}get isDown(){return s(this,ve)}get isDownChange(){return s(this,ve)&&!s(this,we)}get isUpChange(){return!s(this,ve)&&s(this,we)}get downCount(){return s(this,ve)?s(this,be):NaN}get upCount(){return s(this,ve)?NaN:s(this,be)}get pos(){return{x:s(this,Ee),y:s(this,xe)}}get vec(){return{x:s(this,Ae),y:s(this,Re)}}onDown(e,t){const n=s(this,he).boxToRect(e);s(this,De).push({rect:n,callback:t})}get logMode(){return s(this,Se)}get log(){return j(s(this,_e),s(this,Me),s(this,Ne))}set log(e){const t=B(e,3);a(this,_e,t[0]),a(this,Me,t[1]),a(this,Ne,t[2]),a(this,Se,"pause")}recLog(){a(this,_e,[s(this,be),s(this,we)?1:0,s(this,ve)?1:0,s(this,be)]),a(this,Me,[s(this,Oe),s(this,Ee),s(this,Ae),s(this,Oe)]),a(this,Ne,[s(this,Pe),s(this,xe),s(this,Re),s(this,Pe)]),a(this,Se,"rec")}playLog(){a(this,be,s(this,_e)[0]),a(this,we,Boolean(s(this,_e)[1])),a(this,ve,Boolean(s(this,_e)[2])),a(this,Ie,3),a(this,Oe,s(this,Me)[0]),a(this,Ee,s(this,Me)[1]),a(this,Ae,s(this,Me)[2]),a(this,Le,3),a(this,Pe,s(this,Ne)[0]),a(this,xe,s(this,Ne)[1]),a(this,Re,s(this,Ne)[2]),a(this,Ce,3),a(this,Se,"play")}endLog(){a(this,Se,"pause")}constructor(e){he.set(this,{writable:!0,value:void 0}),ve.set(this,{writable:!0,value:!1}),we.set(this,{writable:!0,value:!1}),be.set(this,{writable:!0,value:0}),Ee.set(this,{writable:!0,value:0}),xe.set(this,{writable:!0,value:0}),Ae.set(this,{writable:!0,value:0}),Re.set(this,{writable:!0,value:0}),Oe.set(this,{writable:!0,value:0}),Pe.set(this,{writable:!0,value:0}),_e.set(this,{writable:!0,value:[]}),Ie.set(this,{writable:!0,value:0}),Me.set(this,{writable:!0,value:[]}),Le.set(this,{writable:!0,value:0}),Ne.set(this,{writable:!0,value:[]}),Ce.set(this,{writable:!0,value:0}),Se.set(this,{writable:!0,value:"pause"}),De.set(this,{writable:!0,value:[]}),Ue.set(this,{writable:!0,value:!1}),a(this,he,e);const t=s(this,he).canvas;t.addEventListener("pointerdown",(e=>{const n=t.getBoundingClientRect(),i=Math.floor((e.clientX-n.x)*t.width/n.width),r=Math.floor((e.clientY-n.y)*t.height/n.height);for(const{rect:e,callback:t}of s(this,De))e.left<=i&&i<e.right&&e.top<=r&&r<e.bottom&&(a(this,Ue,!0),t())}))}}(ii),li=[ai.up,ai.right,ai.down,ai.left],ci=[ai.fire,oi],ui=[...li,...ci],hi=[...li,...ci],di=new class{update(){for(const e of s(this,ot))e.update(),e.done&&s(this,ot).delete(e)}from(e){return new He(e,s(this,at),s(this,ot))}clear(){s(this,ot).clear()}constructor(e){st.set(this,{writable:!0,value:void 0}),at.set(this,{writable:!0,value:void 0}),ot.set(this,{writable:!0,value:new Set}),a(this,st,e),a(this,at,(()=>s(this,st).frameTime))}}(ni),pi={bg:new Ve,effectBack:new Ve,enemyNotice:new Ve,player:new Ve,playerBullet:new Ve,effectOverPlayer:new Ve,enemy:new Ve,enemyBullet:new Ve,effectOverEnemy:new Ve,ui:new Ve},fi=new class{get seed(){return 0|s(this,Be)[0]}set seed(e){s(this,Be)[0]=e}updateSeed(){return s(this,Be)[0]=4294967295*Math.random()+1,this.seed}nextInt(e,t){s(this,Be)[0]^=s(this,Be)[0]<<13,s(this,Be)[0]^=s(this,Be)[0]>>17,s(this,Be)[0]^=s(this,Be)[0]<<5;const n=s(this,Be)[0]/4294967296;return void 0===t&&(t=e,e=0),Math.floor(n*(t-e))+e}nextFloat(e,t){s(this,Be)[0]^=s(this,Be)[0]<<13,s(this,Be)[0]^=s(this,Be)[0]>>17,s(this,Be)[0]^=s(this,Be)[0]<<5;return void 0===t&&(t=e,e=0),s(this,Be)[0]/4294967296*(t-e)+e}shuffle(e){return e.map((e=>({num:this.nextFloat(1),val:e}))).sort(((e,t)=>e.num-t.num)).map((({val:e})=>e))}constructor(){Be.set(this,{writable:!0,value:Uint32Array.of(4294967295*Math.random()+1)})}};var mi;mi=new URL(r("3y7ul").resolve("7QRtv"),import.meta.url).toString();const gi=E.loadMap(new URL(mi),{bg:[1,1,32,32,0,16],buttonLight:[1,34,34,34],buttonMute:{0:[36,34,34,34],1:[70,34,34,34]},buttonReset:[1,69,34,34],buttonTwitter:[1,104,34,34],card:{top:[34,1,144,4],body:[34,5,144,2],bottom:[34,7,144,4]},enemyBulletLargeTake:[34,12,14,13,7,5],enemyBulletLarge:{0:[49,12,16,15,8,6],1:[65,12,16,15,8,6]},enemyBulletTake:[34,26,8,7,4,3],enemyBullet:{0:[82,12,10,9,5,4],1:[92,12,10,9,5,4]},enemyLargeTake:[179,1,32,31,16,12],enemyLarge:{body:[36,69,34,33,17,13],bodyFlash:[36,103,34,33,17,13],gauge:[74,73,26,24,13,9],gaugeFlash:[74,107,26,24,13,9]},enemyNoticeLarge:[82,22,12,11,6,5.5],enemyNotice:[103,12,8,7,4,3.5],enemyTakeChip:[103,20,8,8,4,4],enemyTake:[112,12,16,15,8,6],enemy:{body:[36,138,18,17,9,7],bodyFlash:[36,156,18,17,9,7],gauge:[57,141,12,10,6,4],gaugeFlash:[57,159,12,10,6,4]},finish:[212,1,56,12],fontRate:{normal:{0:[269,1,5,7],1:[275,1,5,7],2:[281,1,5,7],3:[287,1,5,7],4:[293,1,5,7],5:[299,1,5,7],6:[305,1,5,7],7:[311,1,5,7],8:[317,1,5,7],9:[323,1,5,7],"*":[329,1,5,7],"+":[335,1,5,7]},flash:{0:[269,9,5,7],1:[275,9,5,7],2:[281,9,5,7],3:[287,9,5,7],4:[293,9,5,7],5:[299,9,5,7],6:[305,9,5,7],7:[311,9,5,7],8:[317,9,5,7],9:[323,9,5,7],"*":[329,9,5,7],"+":[335,9,5,7]}},fontUiL:{0:[341,1,8,9],1:[350,1,8,9],2:[359,1,8,9],3:[368,1,8,9],4:[377,1,8,9],5:[386,1,8,9],6:[395,1,8,9],7:[404,1,8,9],8:[413,1,8,9],9:[422,1,8,9],t:[431,1,8,9]},fontUiS:{0:[341,11,3,5],1:[345,11,3,5],2:[349,11,3,5],3:[353,11,3,5],4:[357,11,3,5],5:[361,11,3,5],6:[365,11,3,5],7:[369,11,3,5],8:[373,11,3,5],9:[377,11,3,5],A:[381,11,3,5],E:[385,11,3,5],I:[389,11,3,5],L:[393,11,3,5],P:[397,11,3,5],R:[401,11,3,5],S:[405,11,3,5],T:[409,11,3,5],U:[413,11,3,5],Y:[417,11,3,5],".":[421,11,3,5],"/":[425,11,3,5]},fontUi:{0:[341,17,5,7],1:[347,17,5,7],2:[353,17,5,7],3:[359,17,5,7],4:[365,17,5,7],5:[371,17,5,7],6:[377,17,5,7],7:[383,17,5,7],8:[389,17,5,7],9:[395,17,5,7],y:[401,17,7,7],h:[409,17,7,7],".":[417,17,1,7],",":[419,17,1,8]},newRecord:{normal:[105,34,94,12],flash:[105,46,94,12]},playerBulletHit:[129,12,8,8,4,4],playerBullet:[129,21,8,8,4,4],playerDestroyChip:[138,12,8,7,4,3],playerDestroy:[440,1,16,24,8,18],player:{normal:[1,139,18,26,9,19],flash:[1,165,18,26,9,19]},pressAnyButton:[105,59,89,9],replayLoading:[200,34,90,10],replayNow:[212,14,40,7],replayReady:[291,34,97,10],scoreBg:[105,69,130,12],start:[269,17,46,12],success:{normal:[105,82,88,44,44,22],flash:[105,126,88,44,44,22]},tips:{0:[194,82,108,39],1:[389,34,99,25],2:[303,108,76,25],3:[395,82,110,40],4:[395,123,87,40],5:[105,171,114,25],6:[220,171,114,25],7:[105,197,94,40],8:[200,197,107,40],9:[303,134,83,25],10:[194,122,82,26],11:[303,82,91,25],arrow:[147,12,17,6],heart:[147,19,10,9],million:[457,1,53,8],score:[95,22,7,7],user:[158,19,12,12]},titleLogoIcon:[1,192,30,45],titleLogo:{normal:[308,197,129,14],normalFlash:[308,211,129,14],ex:[308,197,150,14],exFlash:[308,211,150,14]},uiStatusReset:[36,175,47,25]});var yi;yi=new URL(r("3y7ul").resolve("6t7Zz"),import.meta.url).toString();var vi;vi=new URL(r("3y7ul").resolve("eGD62"),import.meta.url).toString();var wi;wi=new URL(r("3y7ul").resolve("QPPni"),import.meta.url).toString();var bi;bi=new URL(r("3y7ul").resolve("7Rhg3"),import.meta.url).toString();var _i;_i=new URL(r("3y7ul").resolve("fQj5x"),import.meta.url).toString();var Ii;Ii=new URL(r("3y7ul").resolve("8W3sW"),import.meta.url).toString();var Si;Si=new URL(r("3y7ul").resolve("bQiPl"),import.meta.url).toString();var Ti;Ti=new URL(r("3y7ul").resolve("iQ7l0"),import.meta.url).toString();var ki;ki=new URL(r("3y7ul").resolve("a9RsU"),import.meta.url).toString();var Ei;Ei=new URL(r("3y7ul").resolve("6RTqz"),import.meta.url).toString();var xi;xi=new URL(r("3y7ul").resolve("ltoOe"),import.meta.url).toString();var Ai;Ai=new URL(r("3y7ul").resolve("2GqAh"),import.meta.url).toString();var Ri;Ri=new URL(r("3y7ul").resolve("hq5Ck"),import.meta.url).toString();const Oi={uiButton:new oe(new URL(yi),.5,.04),titleStart:new oe(new URL(vi),.8),titleModeChange:new oe(new URL(wi),.4),playerFire:new oe(new URL(bi),.4,.02),playerHit:new oe(new URL(_i),1),enemyShow:new oe(new URL(Ii),1,.04),enemyHit:new oe(new URL(Si),.5,.04),enemyFire:new oe(new URL(Ti),.6,.02),enemyFireLarge:new oe(new URL(ki),.9,.04),enemyTake:new oe(new URL(Ei),.45,.02),enemyTakeLarge:new oe(new URL(xi),.6,.04),resultCounting:new oe(new URL(Ai),.5,.02),resultSuccess:new oe(new URL(Ri),1)};var Pi;Pi=new URL(r("3y7ul").resolve("csyRH"),import.meta.url).toString();var Mi;Mi=new URL(r("3y7ul").resolve("7daCL"),import.meta.url).toString();const Li={play:new le(new URL(Pi)),result:new le(new URL(Mi),.9)},Ni={mode:"normal",screenTop:0,isFirstEnemy:!1,enemyWaveId:0,playerPos:{x:0,y:0},isSuccess:!1,heart:0,heartRate:0,deathCount:0,addHeart(e){this.heart+=this.getHeartRate()*e},getHeartRate(){const e=this.heartRate||1;return this.isSuccess?e:Math.min(e,16)},clearing:di.from(0).wait(1500)},Ci={white:v.parse("#ffffff"),base:v.parse("#ffffff"),main:v.parse("#f64744"),accent:v.parse("#f69c44")},Di=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw Kt.create("bad-app-name",{appName:String(i)});const r=qt.get(i);if(r){if(bt(e,r.options)&&bt(n,r.config))return r;throw Kt.create("duplicate-app",{appName:i})}const s=new Pt(i);for(const e of Wt.values())s.addComponent(e);const a=new Jt(e,n,s);return qt.set(i,a),a}({apiKey:"AIzaSyC2zCzDFkfmx1ZHOc6v03T-oGBeS0124-4",authDomain:"fire-shooter-san.firebaseapp.com",projectId:"fire-shooter-san",storageBucket:"fire-shooter-san.appspot.com",messagingSenderId:"1003741816214",appId:"1:1003741816214:web:20da45a98b3fd18345a9b7",measurementId:"G-3Q36TCTMGF"}),Ui=ti.bind(null,function(e=Yt()){const t=Gt(e=At(e),"analytics");return t.isInitialized()?t.getImmediate():function(e,t={}){const n=Gt(e,"analytics");if(n.isInitialized()){const e=n.getImmediate();if(bt(t,n.getOptions()))return e;throw Fn.create("already-initialized")}return n.initialize({options:t})}(e)}(Di));function Fi(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function Vi(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ji=Vi,Bi=new vt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),$i=new Vt("@firebase/auth");function qi(e,...t){$i.logLevel<=Lt.ERROR&&$i.error(`Auth (9.6.0): ${e}`,...t)}
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
 */function Wi(e,...t){throw Gi(e,...t)}function Hi(e,...t){return Gi(e,...t)}function zi(e,t,n){const i=Object.assign(Object.assign({},ji()),{[t]:n});return new vt("auth","Firebase",i).create(t,{appName:e.name})}function Gi(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return Bi.create(e,...t)}function Ki(e,t,...n){if(!e)throw Gi(t,...n)}function Ji(e){const t="INTERNAL ASSERTION FAILED: "+e;throw qi(t),new Error(t)}function Yi(e,t){e||Ji(t)}
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
 */const Xi=new Map;function Qi(e){Yi(e instanceof Function,"Expected a class definition");let t=Xi.get(e);return t?(Yi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Xi.set(e,t),t)}
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
function Zi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function er(){return"http:"===tr()||"https:"===tr()}function tr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
class nr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Yi(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(er()||pt()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
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
 */function ir(e,t){Yi(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class rr{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Ji("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Ji("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Ji("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const sr={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},ar=new nr(3e4,6e4);
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
 */function or(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function lr(e,t,n,i,r={}){return cr(e,r,(()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const a=It(Object.assign({key:e.config.apiKey},s)).slice(1),o=new(rr.headers());return o.set("Content-Type","application/json"),o.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&o.set("X-Firebase-Locale",e.languageCode),rr.fetch()(hr(e,e.config.apiHost,n,a),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},r))}))}async function cr(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},sr),t);try{const t=new dr(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw pr(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw pr(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw pr(e,"email-already-in-use",s);const o=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw zi(e,o,a);Wi(e,o)}}catch(t){if(t instanceof yt)throw t;Wi(e,"network-request-failed")}}async function ur(e,t,n,i,r={}){const s=await lr(e,t,n,i,r);return"mfaPendingCredential"in s&&Wi(e,"multi-factor-auth-required",{_serverResponse:s}),s}function hr(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?ir(e.config,r):`${e.config.apiScheme}://${r}`}class dr{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Hi(this.auth,"timeout"))),ar.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function pr(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=Hi(e,t,i);return r.customData._tokenResponse=n,r}
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
function fr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function mr(e){return 1e3*Number(e)}function gr(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return qi("JWT malformed, contained fewer than 3 sections"),null;try{const e=ut(n);return e?JSON.parse(e):(qi("Failed to decode base64 JWT payload"),null)}catch(e){return qi("Caught error parsing JWT payload as JSON",e),null}}
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
async function yr(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof yt&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class vr{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
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
 */class wr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=fr(this.lastLoginAt),this.creationTime=fr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function br(e){var t;const n=e.auth,i=await e.getIdToken(),r=await yr(e,async function(e,t){return lr(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));Ki(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Fi(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const o=(l=e.providerData,c=a,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==o?void 0:o.length)),d=!!u&&h,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new wr(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,p)}
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
class _r{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ki(e.idToken,"internal-error"),Ki(void 0!==e.idToken,"internal-error"),Ki(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=gr(e);return Ki(t,"internal-error"),Ki(void 0!==t.exp,"internal-error"),Ki(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Ki(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
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
async function(e,t){const n=await cr(e,{},(()=>{const n=It({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=hr(e,i,"/v1/token",`key=${r}`);return rr.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new _r;return n&&(Ki("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(Ki("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(Ki("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new _r,this.toJSON())}_performRefresh(){return Ji("not implemented")}}
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
 */function Ir(e,t){Ki("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Sr{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=Fi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new vr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new wr(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await yr(this,this.stsTokenManager.getToken(this.auth,e));return Ki(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=At(e),i=await n.getIdToken(t),r=gr(i);Ki(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:fr(mr(r.auth_time)),issuedAtTime:fr(mr(r.iat)),expirationTime:fr(mr(r.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=At(e);await br(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Ki(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Ki(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await br(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await yr(this,async function(e,t){return lr(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,a,o,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,p=null!==(s=t.photoURL)&&void 0!==s?s:void 0,f=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:I}=t;Ki(v&&I,e,"internal-error");const S=_r.fromJSON(this.name,I);Ki("string"==typeof v,e,"internal-error"),Ir(u,e.name),Ir(h,e.name),Ki("boolean"==typeof w,e,"internal-error"),Ki("boolean"==typeof b,e,"internal-error"),Ir(d,e.name),Ir(p,e.name),Ir(f,e.name),Ir(m,e.name),Ir(g,e.name),Ir(y,e.name);const T=new Sr({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:p,phoneNumber:d,tenantId:f,stsTokenManager:S,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(T.providerData=_.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const i=new _r;i.updateFromServerResponse(t);const r=new Sr({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await br(r),r}}
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
 */class Tr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Tr.type="NONE";const kr=Tr;
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
 */function Er(e,t,n){return`firebase:${e}:${t}:${n}`}class xr{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=Er(this.userKey,i.apiKey,r),this.fullPersistenceKey=Er("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new xr(Qi(kr),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||Qi(kr);const s=Er(n,e.config.apiKey,e.name);let a=null;for(const n of t)try{const t=await n._get(s);if(t){const i=Sr._fromJSON(e,t);n!==r&&(a=i),r=n;break}}catch(e){}const o=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&o.length?(r=o[0],a&&await r._set(s,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new xr(r,e,n)):new xr(r,e,n)}}
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
 */function Ar(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Mr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Rr(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Nr(t))return"Blackberry";if(Cr(t))return"Webos";if(Or(t))return"Safari";if((t.includes("chrome/")||Pr(t))&&!t.includes("edge/"))return"Chrome";if(Lr(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Rr(e=dt()){return/firefox\//i.test(e)}function Or(e=dt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Pr(e=dt()){return/crios\//i.test(e)}function Mr(e=dt()){return/iemobile/i.test(e)}function Lr(e=dt()){return/android/i.test(e)}function Nr(e=dt()){return/blackberry/i.test(e)}function Cr(e=dt()){return/webos/i.test(e)}function Dr(e=dt()){return/iphone|ipad|ipod/i.test(e)}function Ur(){return function(){const e=dt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Fr(e=dt()){return Dr(e)||Lr(e)||Cr(e)||Nr(e)||/windows phone/i.test(e)||Mr(e)}
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
function Vr(e,t=[]){let n;switch(e){case"Browser":n=Ar(dt());break;case"Worker":n=`${Ar(dt())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.0/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */class jr{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new $r(this),this.idTokenSubscription=new $r(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Bi,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Qi(t)),this._initializationPromise=this.queue((async()=>{var n,i;this._deleted||(this.persistenceManager=await xr.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==r||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(Ki(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await br(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?At(e):null;return t&&Ki(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Ki(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Qi(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new vt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Qi(e)||this._popupRedirectResolver;Ki(t,this,"argument-error"),this.redirectPersistenceManager=await xr.create(this,[Qi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Ki(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ki(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Br(e){return At(e)}class $r{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new kt(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Ki(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
class qr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ji("not implemented")}_getIdTokenResponse(e){return Ji("not implemented")}_linkToIdToken(e,t){return Ji("not implemented")}_getReauthenticationResolver(e){return Ji("not implemented")}}
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
 */async function Wr(e,t){return lr(e,"POST","/v1/accounts:update",t)}
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
class Hr extends qr{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Hr(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Hr(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return ur(e,"POST","/v1/accounts:signInWithPassword",or(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return ur(e,"POST","/v1/accounts:signInWithEmailLink",or(e,t))}(e,{email:this._email,oobCode:this._password});default:Wi(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Wr(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return ur(e,"POST","/v1/accounts:signInWithEmailLink",or(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Wi(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function zr(e,t){return ur(e,"POST","/v1/accounts:signInWithIdp",or(e,t))}
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
 */class Gr extends qr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Gr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Wi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=Fi(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Gr(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return zr(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,zr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,zr(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=It(t)}return e}}
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
 */const Kr={USER_NOT_FOUND:"user-not-found"};
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
class Jr extends qr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Jr({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Jr({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return ur(e,"POST","/v1/accounts:signInWithPhoneNumber",or(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await ur(e,"POST","/v1/accounts:signInWithPhoneNumber",or(e,t));if(n.temporaryProof)throw pr(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return ur(e,"POST","/v1/accounts:signInWithPhoneNumber",or(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Kr)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new Jr({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
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
 */class Yr{constructor(e){var t,n,i,r,s,a;const o=St(Tt(e)),l=null!==(t=o.apiKey)&&void 0!==t?t:null,c=null!==(n=o.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=o.mode)&&void 0!==i?i:null);Ki(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(r=o.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=o.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=o.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=St(Tt(e)).link,n=t?St(Tt(t)).deep_link_id:null,i=St(Tt(e)).deep_link_id;return(i?St(Tt(i)).link:null)||i||n||t||e}(e);try{return new Yr(t)}catch(e){return null}}}
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
class Xr{constructor(){this.providerId=Xr.PROVIDER_ID}static credential(e,t){return Hr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Yr.parseLink(t);return Ki(n,"argument-error"),Hr._fromEmailAndCode(e,n.code,n.tenantId)}}Xr.PROVIDER_ID="password",Xr.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Xr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Qr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class Zr extends Qr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
class es extends Zr{constructor(){super("facebook.com")}static credential(e){return Gr._fromParams({providerId:es.PROVIDER_ID,signInMethod:es.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return es.credentialFromTaggedObject(e)}static credentialFromError(e){return es.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return es.credential(e.oauthAccessToken)}catch(e){return null}}}es.FACEBOOK_SIGN_IN_METHOD="facebook.com",es.PROVIDER_ID="facebook.com";
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
class ts extends Zr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Gr._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ts.credential(t,n)}catch(e){return null}}}ts.GOOGLE_SIGN_IN_METHOD="google.com",ts.PROVIDER_ID="google.com";
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
class ns extends Zr{constructor(){super("github.com")}static credential(e){return Gr._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ns.credential(e.oauthAccessToken)}catch(e){return null}}}ns.GITHUB_SIGN_IN_METHOD="github.com",ns.PROVIDER_ID="github.com";
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
class is extends Zr{constructor(){super("twitter.com")}static credential(e,t){return Gr._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return is.credentialFromTaggedObject(e)}static credentialFromError(e){return is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return is.credential(t,n)}catch(e){return null}}}
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
async function rs(e,t){return ur(e,"POST","/v1/accounts:signUp",or(e,t))}
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
 */is.TWITTER_SIGN_IN_METHOD="twitter.com",is.PROVIDER_ID="twitter.com";class ss{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Sr._fromIdTokenResponse(e,n,i),s=as(n);return new ss({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=as(n);return new ss({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function as(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class os extends yt{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,os.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new os(e,t,n,i)}}function ls(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw os._fromErrorAndOperation(e,n,t,i);throw n}))}
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
 */async function cs(e,t,n=!1){const i=await yr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ss._forOperation(e,"link",i)}
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
async function us(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await yr(e,ls(i,r,t,e),n);Ki(s.idToken,i,"internal-error");const a=gr(s.idToken);Ki(a,i,"internal-error");const{sub:o}=a;return Ki(e.uid===o,i,"user-mismatch"),ss._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Wi(i,"user-mismatch"),e}}
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
 */async function hs(e,t,n=!1){const i="signIn",r=await ls(e,i,t),s=await ss._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}
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
async function ds(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=At(e),r={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await yr(i,
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
async function(e,t){return lr(e,"POST","/v1/accounts:update",t)}(i.auth,r));i.displayName=s.displayName||null,i.photoURL=s.photoUrl||null;const a=i.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(s)}new WeakMap;
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
class ps{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem("__sak","1"),this.storage.removeItem("__sak"),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */class fs extends ps{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=dt();return Or(e)||Dr(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Fr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Ur()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}fs.type="LOCAL";const ms=fs;
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
 */class gs extends ps{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}gs.type="SESSION";const ys=gs;
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
class vs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new vs(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const a=Array.from(s).map((async e=>e(t.origin,r))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function ws(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */vs.receivers=[];class bs{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((a,o)=>{const l=ws("",20);i.port1.start();const c=setTimeout((()=>{o(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),a(t.data.response);break;default:clearTimeout(c),clearTimeout(r),o(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function _s(){return window}
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
function Is(){return void 0!==_s().WorkerGlobalScope&&"function"==typeof _s().importScripts}class Ss{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Ts(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function ks(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Ss(e).toPromise()}(),t(await ks()))}))}))}async function Es(e,t,n){const i=Ts(e,!0).put({fbase_key:t,value:n});return new Ss(i).toPromise()}function xs(e,t){const n=Ts(e,!0).delete(t);return new Ss(n).toPromise()}class As{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ks()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Is()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vs._getInstance(Is()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new bs(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ks();return await Es(e,"__sak","1"),await xs(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Es(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Ts(e,!1).get(t),i=await new Ss(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>xs(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Ts(e,!1).getAll();return new Ss(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}As.type="LOCAL";const Rs=As;
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
 */function Os(e){return new Promise(((t,n)=>{const i=document.createElement("script");
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
var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=Hi("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function Ps(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
Ps("rcb"),new nr(3e4,6e4);async function Ms(e,t,n){var i;const r=await n.verify();try{let s;if(Ki("string"==typeof r,e,"argument-error"),Ki("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Ki("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return lr(e,"POST","/v2/accounts/mfaEnrollment:start",or(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{Ki("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;Ki(n,e,"missing-multi-factor-info");const a=await function(e,t){return lr(e,"POST","/v2/accounts/mfaSignIn:start",or(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return lr(e,"POST","/v1/accounts:sendVerificationCode",or(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
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
class Ls{constructor(e){this.providerId=Ls.PROVIDER_ID,this.auth=Br(e)}verifyPhoneNumber(e,t){return Ms(this.auth,e,At(t))}static credential(e,t){return Jr._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ls.credentialFromTaggedObject(t)}static credentialFromError(e){return Ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Jr._fromTokenResponse(t,n):null}}
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
function Ns(e,t){return t?Qi(t):(Ki(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Ls.PROVIDER_ID="phone",Ls.PHONE_SIGN_IN_METHOD="phone";class Cs extends qr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return zr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return zr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ds(e){return hs(e.auth,new Cs(e),e.bypassAuthState)}function Us(e){const{auth:t,user:n}=e;return Ki(n,t,"internal-error"),us(n,new Cs(e),e.bypassAuthState)}async function Fs(e){const{auth:t,user:n}=e;return Ki(n,t,"internal-error"),cs(n,new Cs(e),e.bypassAuthState)}
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
 */class Vs{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:a}=e;if(s)return void this.reject(s);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ds;case"linkViaPopup":case"linkViaRedirect":return Fs;case"reauthViaPopup":case"reauthViaRedirect":return Us;default:Wi(this.auth,"internal-error")}}resolve(e){Yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Yi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const js=new nr(2e3,1e4);class Bs extends Vs{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Bs.currentPopupAction&&Bs.currentPopupAction.cancel(),Bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ki(e,this.auth,"internal-error"),e}async onExecution(){Yi(1===this.filter.length,"Popup operations only handle one event");const e=ws();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Hi(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Hi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Hi(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,js.get())};e()}}Bs.currentPopupAction=null;
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
const $s=new Map;class qs extends Vs{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=$s.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Hs(t),i=Ws(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}$s.set(this.auth._key(),e)}return this.bypassAuthState||$s.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Ws(e){return Qi(e._redirectPersistence)}function Hs(e){return Er("pendingRedirect",e.config.apiKey,e.name)}
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
 */async function zs(e,t,n=!1){const i=Br(e),r=Ns(i,t),s=new qs(i,r,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}class Gs{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Js(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Js(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Hi(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ks(e))}saveEventToCache(e){this.cachedEventUids.add(Ks(e)),this.lastProcessedEventTime=Date.now()}}function Ks(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Js({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const Ys=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xs=/^https?/;async function Qs(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return lr(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Zs(e))return}catch(e){}Wi(e,"unauthorized-domain")}function Zs(e){const t=Zi(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Xs.test(n))return!1;if(Ys.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
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
 */const ea=new nr(3e4,6e4);function ta(){const e=_s().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let na=null;function ia(e){return na=na||function(e){return new Promise(((t,n)=>{var i,r,s;function a(){ta(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ta(),n(Hi(e,"network-request-failed"))},timeout:ea.get()})}if(null===(r=null===(i=_s().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=_s().gapi)||void 0===s?void 0:s.load)){const t=Ps("iframefcb");return _s()[t]=()=>{gapi.load?a():n(Hi(e,"network-request-failed"))},Os(`https://apis.google.com/js/api.js?onload=${t}`)}a()}})).catch((e=>{throw na=null,e}))}(e),na}
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
 */const ra=new nr(5e3,15e3),sa={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},aa=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oa(e){const t=e.config;Ki(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?ir(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.6.0"},r=aa.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${It(i).slice(1)}`}
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
const la={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ca{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function ua(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let o="";const l=Object.assign(Object.assign({},la),{width:i.toString(),height:r.toString(),top:s,left:a}),c=dt().toLowerCase();n&&(o=Pr(c)?"_blank":n),Rr(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=dt()){var t;return Dr(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(t||"",o),new ca(null);const h=window.open(t||"",o,u);Ki(h,e,"popup-blocked");try{h.focus()}catch(e){}return new ca(h)}function ha(e,t,n,i,r,s){Ki(e.config.authDomain,e,"auth-domain-config-required"),Ki(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.6.0",eventId:r};if(t instanceof Qr){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))a[e]=t}if(t instanceof Zr){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const e of Object.keys(o))void 0===o[e]&&delete o[e];return`${function({config:e}){return e.emulator?ir(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${It(o).slice(1)}`}const da=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ys,this._completeRedirectFn=zs}async _openPopup(e,t,n,i){var r;Yi(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return ua(e,ha(e,t,n,Zi(),i),ws())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=ha(e,t,n,Zi(),i),_s().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Yi(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await async function(e){const t=await ia(e),n=_s().gapi;return Ki(n,e,"internal-error"),t.open({where:document.body,url:oa(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sa,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=Hi(e,"network-request-failed"),s=_s().setTimeout((()=>{i(r)}),ra.get());function a(){_s().clearTimeout(s),n(t)}t.ping(a).then(a,(()=>{i(r)}))}))))}(e),n=new Gs(e);return t.register("authEvent",(t=>{Ki(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),Wi(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Qs(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Fr()||Or()||Dr()}};var pa;
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
class fa{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ki(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */pa="Browser",zt(new Rt("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:r}=n.options;return(e=>{Ki(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),Ki(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const n={apiKey:i,authDomain:r,clientPlatform:pa,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vr(pa)},s=new jr(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Qi);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),zt(new Rt("auth-internal",(e=>{const t=Br(e.getProvider("auth").getImmediate());return new fa(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Xt("@firebase/auth","0.19.3",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(pa)),Xt("@firebase/auth","0.19.3","esm2017");const ma=
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
function(e=Yt()){const t=Gt(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Gt(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(bt(n.getOptions(),null!=t?t:{}))return e;Wi(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:da,persistence:[Rs,ms,ys]})}(Di);function ga(e){return t=e,At(ma).onAuthStateChanged(t,n,i);var t,n,i}function ya(){return ma.currentUser}function va(){var e,t;return null!==(t=null===(e=ya())||void 0===e?void 0:e.uid)&&void 0!==t?t:""}function wa(){var e,t;return null!==(t=null===(e=ya())||void 0===e?void 0:e.displayName)&&void 0!==t?t:""}ga((e=>!e&&async function(e){var t;const n=Br(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new ss({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await rs(n,{returnSecureToken:!0}),r=await ss._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}(ma)));
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
class ba{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ba.UNAUTHENTICATED=new ba(null),ba.GOOGLE_CREDENTIALS=new ba("google-credentials-uid"),ba.FIRST_PARTY=new ba("first-party-uid"),ba.MOCK_USER=new ba("mock-user");
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
let _a="9.6.0";
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
 */const Ia=new Vt("@firebase/firestore");function Sa(e,...t){if(Ia.logLevel<=Lt.DEBUG){const n=t.map(Ea);Ia.debug(`Firestore (${_a}): ${e}`,...n)}}function Ta(e,...t){if(Ia.logLevel<=Lt.ERROR){const n=t.map(Ea);Ia.error(`Firestore (${_a}): ${e}`,...n)}}function ka(e,...t){if(Ia.logLevel<=Lt.WARN){const n=t.map(Ea);Ia.warn(`Firestore (${_a}): ${e}`,...n)}}function Ea(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function xa(e="Unexpected state"){const t=`FIRESTORE (${_a}) INTERNAL ASSERTION FAILED: `+e;throw Ta(t),new Error(t)}function Aa(e,t){e||xa()}function Ra(e,t){return e}
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
 */class Oa extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
class Pa{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ma{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ba.UNAUTHENTICATED)))}shutdown(){}}class La{constructor(e){this.auth=null,e.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(Aa("string"==typeof e.accessToken),new Pa(e.accessToken,new ba(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class Na{constructor(e,t,n){this.type="FirstParty",this.user=ba.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Ca{constructor(e,t,n){this.t=e,this.i=t,this.o=n}getToken(){return Promise.resolve(new Na(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable((()=>t(ba.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Da{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ua{constructor(e){this.u=e,this.appCheck=null,e.onInit((e=>{this.appCheck=e}))}getToken(){return this.appCheck?this.appCheck.getToken().then((e=>e?(Aa("string"==typeof e.token),new Da(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}
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
 */class Fa{constructor(e,t,n,i,r,s,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class Va{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Va&&e.projectId===this.projectId&&e.database===this.database}}
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
 */class ja{constructor(e,t,n){void 0===t?t=0:t>e.length&&xa(),void 0===n?n=e.length-t:n>e.length-t&&xa(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ja.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ja?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ba extends ja{construct(e,t,n){return new Ba(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Oa("invalid-argument",`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Ba(t)}static emptyPath(){return new Ba([])}}const $a=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class qa extends ja{construct(e,t,n){return new qa(e,t,n)}static isValidIdentifier(e){return $a.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),qa.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new qa(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new Oa("invalid-argument",`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new Oa("invalid-argument","Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Oa("invalid-argument","Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new Oa("invalid-argument","Unterminated ` in path: "+e);return new qa(t)}static emptyPath(){return new qa([])}}
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
 */class Wa{constructor(e){this.path=e}static fromPath(e){return new Wa(Ba.fromString(e))}static fromName(e){return new Wa(Ba.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===Ba.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Ba.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Wa(new Ba(e.slice()))}}
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
 */function Ha(e,t,n){if(!n)throw new Oa("invalid-argument",`Function ${e}() cannot be called with an empty ${t}.`)}function za(e){if(!Wa.isDocumentKey(e))throw new Oa("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ga(e){if(Wa.isDocumentKey(e))throw new Oa("invalid-argument",`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ka(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":xa()}function Ja(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Oa("invalid-argument","Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ka(e);throw new Oa("invalid-argument",`Expected type '${t.name}', but it was: ${n}`)}}return e}function Ya(e,t){if(t<=0)throw new Oa("invalid-argument",`Function ${e}() requires a positive number, but it was: ${t}.`)}
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
 */function Xa(e){return null==e}function Qa(e){return 0===e&&1/e==-1/0}
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
 */const Za={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */var eo,to;function no(e){if(void 0===e)return Ta("RPC_ERROR","HTTP error has no status"),"unknown";switch(e){case 200:return"ok";case 400:return"failed-precondition";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 416:return"out-of-range";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"unknown";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded";default:return e>=200&&e<300?"ok":e>=400&&e<500?"failed-precondition":e>=500&&e<600?"internal":"unknown"}}
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
 */(to=eo||(eo={}))[to.OK=0]="OK",to[to.CANCELLED=1]="CANCELLED",to[to.UNKNOWN=2]="UNKNOWN",to[to.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",to[to.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",to[to.NOT_FOUND=5]="NOT_FOUND",to[to.ALREADY_EXISTS=6]="ALREADY_EXISTS",to[to.PERMISSION_DENIED=7]="PERMISSION_DENIED",to[to.UNAUTHENTICATED=16]="UNAUTHENTICATED",to[to.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",to[to.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",to[to.ABORTED=10]="ABORTED",to[to.OUT_OF_RANGE=11]="OUT_OF_RANGE",to[to.UNIMPLEMENTED=12]="UNIMPLEMENTED",to[to.INTERNAL=13]="INTERNAL",to[to.UNAVAILABLE=14]="UNAVAILABLE",to[to.DATA_LOSS=15]="DATA_LOSS";class io extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.h=t+"://"+e.host,this.l="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}m(e,t,n,i,r){const s=this.p(e,t);Sa("RestConnection","Sending: ",s,n);const a={};return this.g(a,i,r),this.v(e,s,a,n).then((e=>(Sa("RestConnection","Received: ",e),e)),(t=>{throw ka("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}T(e,t,n,i,r){return this.m(e,t,n,i,r)}g(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+_a,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}p(e,t){const n=Za[e];return`${this.h}/v1/${t}:${n}`}}{constructor(e,t){super(e),this.I=t}A(e,t){throw new Error("Not supported by FetchConnection")}async v(e,t,n,i){const r=JSON.stringify(i);let s;try{s=await this.I(t,{method:"POST",headers:n,body:r})}catch(e){throw new Oa(no(e.status),"Request failed with error: "+e.statusText)}if(!s.ok)throw new Oa(no(s.status),"Request failed with error: "+s.statusText);return s.json()}}
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
 */function ro(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */class so{static P(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=ro(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function ao(e,t){return e<t?-1:e>t?1:0}function oo(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
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
 */class lo{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Oa("invalid-argument","Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Oa("invalid-argument","Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Oa("invalid-argument","Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Oa("invalid-argument","Timestamp seconds out of range: "+e)}static now(){return lo.fromMillis(Date.now())}static fromDate(e){return lo.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new lo(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ao(this.nanoseconds,e.nanoseconds):ao(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class co{constructor(e){this.timestamp=e}static fromTimestamp(e){return new co(e)}static min(){return new co(new lo(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function uo(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ho(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}
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
 */class po{constructor(e){this.fields=e,e.sort(qa.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return oo(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
 */class fo{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new fo(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new fo(t)}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ao(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}fo.EMPTY_BYTE_STRING=new fo("");const mo=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function go(e){if(Aa(!!e),"string"==typeof e){let t=0;const n=mo.exec(e);if(Aa(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:yo(e.seconds),nanos:yo(e.nanos)}}function yo(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function vo(e){return"string"==typeof e?fo.fromBase64String(e):fo.fromUint8Array(e)}
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
 */function wo(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function bo(e){const t=e.mapValue.fields.__previous_value__;return wo(t)?bo(t):t}function _o(e){const t=go(e.mapValue.fields.__local_write_time__.timestampValue);return new lo(t.seconds,t.nanos)}
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
 */function Io(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?wo(e)?4:10:xa()}function So(e,t){const n=Io(e);if(n!==Io(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return _o(e).isEqual(_o(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=go(e.timestampValue),i=go(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return i=t,vo(e.bytesValue).isEqual(vo(i.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return yo(e.geoPointValue.latitude)===yo(t.geoPointValue.latitude)&&yo(e.geoPointValue.longitude)===yo(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return yo(e.integerValue)===yo(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=yo(e.doubleValue),i=yo(t.doubleValue);return n===i?Qa(n)===Qa(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return oo(e.arrayValue.values||[],t.arrayValue.values||[],So);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(uo(n)!==uo(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!So(n[e],i[e])))return!1;return!0}(e,t);default:return xa()}var i}function To(e,t){return void 0!==(e.values||[]).find((e=>So(e,t)))}function ko(e,t){const n=Io(e),i=Io(t);if(n!==i)return ao(n,i);switch(n){case 0:return 0;case 1:return ao(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=yo(e.integerValue||e.doubleValue),i=yo(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return Eo(e.timestampValue,t.timestampValue);case 4:return Eo(_o(e),_o(t));case 5:return ao(e.stringValue,t.stringValue);case 6:return function(e,t){const n=vo(e),i=vo(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=ao(n[e],i[e]);if(0!==t)return t}return ao(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=ao(yo(e.latitude),yo(t.latitude));return 0!==n?n:ao(yo(e.longitude),yo(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=ko(n[e],i[e]);if(t)return t}return ao(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let e=0;e<i.length&&e<s.length;++e){const t=ao(i[e],s[e]);if(0!==t)return t;const a=ko(n[i[e]],r[s[e]]);if(0!==a)return a}return ao(i.length,s.length)}(e.mapValue,t.mapValue);default:throw xa()}}function Eo(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ao(e,t);const n=go(e),i=go(t),r=ao(n.seconds,i.seconds);return 0!==r?r:ao(n.nanos,i.nanos)}function xo(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ao(e){return!!e&&"arrayValue"in e}function Ro(e){return!!e&&"nullValue"in e}function Oo(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Po(e){return!!e&&"mapValue"in e}function Mo(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ho(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Mo(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Mo(e.arrayValue.values[n]);return t}return Object.assign({},e)}
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
 */class Lo{constructor(e){this.value=e}static empty(){return new Lo({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Po(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mo(t)}setAll(e){let t=qa.emptyPath(),n={},i=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=Mo(e):i.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());Po(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return So(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Po(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){ho(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Lo(Mo(this.value))}}
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
 */class No{constructor(e,t,n,i,r){this.key=e,this.documentType=t,this.version=n,this.data=i,this.documentState=r}static newInvalidDocument(e){return new No(e,0,co.min(),Lo.empty(),0)}static newFoundDocument(e,t,n){return new No(e,1,t,n,0)}static newNoDocument(e,t){return new No(e,2,t,Lo.empty(),0)}static newUnknownDocument(e,t){return new No(e,3,t,Lo.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lo.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lo.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof No&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new No(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Co{constructor(e,t=null,n=[],i=[],r=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=a,this.R=null}}function Do(e,t=null,n=[],i=[],r=null,s=null,a=null){return new Co(e,t,n,i,r,s,a)}class Uo extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new Fo(e,t,n):"array-contains"===t?new $o(e,n):"in"===t?new qo(e,n):"not-in"===t?new Wo(e,n):"array-contains-any"===t?new Ho(e,n):new Uo(e,t,n)}static V(e,t,n){return"in"===t?new Vo(e,n):new jo(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.D(ko(t,this.value)):null!==t&&Io(this.value)===Io(t)&&this.D(ko(t,this.value))}D(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return xa()}}N(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Fo extends Uo{constructor(e,t,n){super(e,t,n),this.key=Wa.fromName(n.referenceValue)}matches(e){const t=Wa.comparator(e.key,this.key);return this.D(t)}}class Vo extends Uo{constructor(e,t){super(e,"in",t),this.keys=Bo("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class jo extends Uo{constructor(e,t){super(e,"not-in",t),this.keys=Bo("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Bo(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Wa.fromName(e.referenceValue)))}class $o extends Uo{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ao(t)&&To(t.arrayValue,this.value)}}class qo extends Uo{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&To(this.value.arrayValue,t)}}class Wo extends Uo{constructor(e,t){super(e,"not-in",t)}matches(e){if(To(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!To(this.value.arrayValue,t)}}class Ho extends Uo{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ao(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>To(this.value.arrayValue,e)))}}class zo{constructor(e,t){this.position=e,this.before=t}}class Go{constructor(e,t="asc"){this.field=e,this.dir=t}}
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
class Ko{constructor(e,t=null,n=[],i=[],r=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=a,this.endAt=o,this.$=null,this.F=null,this.startAt,this.endAt}}function Jo(e){return!Xa(e.limit)&&"L"===e.limitType}function Yo(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Xo(e){for(const t of e.filters)if(t.N())return t.field;return null}function Qo(e){return null!==e.collectionGroup}function Zo(e){const t=Ra(e);if(null===t.$){t.$=[];const e=Xo(t),n=Yo(t);if(null!==e&&null===n)e.isKeyField()||t.$.push(new Go(e)),t.$.push(new Go(qa.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.$.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.$.push(new Go(qa.keyField(),e))}}}return t.$}function el(e){const t=Ra(e);if(!t.F)if("F"===t.limitType)t.F=Do(t.path,t.collectionGroup,Zo(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Zo(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Go(n.field,t))}const n=t.endAt?new zo(t.endAt.position,!t.endAt.before):null,i=t.startAt?new zo(t.startAt.position,!t.startAt.before):null;t.F=Do(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t.F}
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
function tl(e,t){return"number"==typeof(n=t)&&Number.isInteger(n)&&!Qa(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER?function(e){return{integerValue:""+e}}(t):function(e,t){if(e.S){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Qa(t)?"-0":t}}(e,t);var n}
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
 */class nl{constructor(){this._=void 0}}class il extends nl{}class rl extends nl{constructor(e){super(),this.elements=e}}class sl extends nl{constructor(e){super(),this.elements=e}}class al extends nl{constructor(e,t){super(),this.q=e,this.O=t}}
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
 */class ol{constructor(e,t){this.field=e,this.transform=t}}class ll{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ll}static exists(e){return new ll(void 0,e)}static updateTime(e){return new ll(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class cl{}class ul extends cl{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}}class hl extends cl{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}class dl extends cl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class pl extends cl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
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
 */const fl={asc:"ASCENDING",desc:"DESCENDING"},ml={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class gl{constructor(e,t){this.databaseId=e,this.S=t}}function yl(e,t){return e.S?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function vl(e,t){return e.S?t.toBase64():t.toUint8Array()}function wl(e,t){return yl(e,t.toTimestamp())}function bl(e){return Aa(!!e),co.fromTimestamp(function(e){const t=go(e);return new lo(t.seconds,t.nanos)}(e))}function _l(e,t){return(n=e,new Ba(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function Il(e,t){return _l(e.databaseId,t.path)}function Sl(e,t){const n=function(e){const t=Ba.fromString(e);return Aa(Ml(t)),t}(t);if(n.get(1)!==e.databaseId.projectId)throw new Oa("invalid-argument","Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Oa("invalid-argument","Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);var i;return new Wa((Aa((i=n).length>4&&"documents"===i.get(4)),i.popFirst(5)))}function Tl(e,t){return _l(e.databaseId,t)}function kl(e){return new Ba(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function El(e,t,n){return{name:Il(e,t),fields:n.value.mapValue.fields}}function xl(e){return{before:e.before,values:e.position}}function Al(e){return fl[e]}function Rl(e){return ml[e]}function Ol(e){return{fieldPath:e.canonicalString()}}function Pl(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ml(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */function Ll(e){return new gl(e,!0)}
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
class Nl extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.K=n,this.q=i,this.J=!1}X(){if(this.J)throw new Oa("failed-precondition","The client has already been terminated.")}m(e,t,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.K.m(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?("unauthenticated"===e.code&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Oa("unknown",e.toString())}))}T(e,t,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.K.T(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?("unauthenticated"===e.code&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Oa("unknown",e.toString())}))}terminate(){this.J=!0}}async function Cl(e,t){const n=Ra(e),i=kl(n.q)+"/documents",r={writes:t.map((e=>function(e,t){let n;if(t instanceof ul)n={update:El(e,t.key,t.value)};else if(t instanceof dl)n={delete:Il(e,t.key)};else if(t instanceof hl)n={update:El(e,t.key,t.data),updateMask:Pl(t.fieldMask)};else{if(!(t instanceof pl))return xa();n={verify:Il(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof il)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof rl)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof sl)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof al)return{fieldPath:t.field.canonicalString(),increment:n.O};throw xa()}(0,e)))),t.precondition.isNone||(n.currentDocument=(i=e,void 0!==(r=t.precondition).updateTime?{updateTime:wl(i,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:xa())),n;var i,r}(n.q,e)))};await n.m("Commit",i,r)}async function Dl(e,t){const n=Ra(e),i=kl(n.q)+"/documents",r={documents:t.map((e=>Il(n.q,e)))},s=await n.T("BatchGetDocuments",i,r),a=new Map;s.forEach((e=>{const t=(i=n.q,"found"in(r=e)?function(e,t){Aa(!!t.found),t.found.name,t.found.updateTime;const n=Sl(e,t.found.name),i=bl(t.found.updateTime),r=new Lo({mapValue:{fields:t.found.fields}});return No.newFoundDocument(n,i,r)}(i,r):"missing"in r?function(e,t){Aa(!!t.missing),Aa(!!t.readTime);const n=Sl(e,t.missing),i=bl(t.readTime);return No.newNoDocument(n,i)}(i,r):xa());var i,r;a.set(t.key.toString(),t)}));const o=[];return t.forEach((e=>{const t=a.get(e.toString());Aa(!!t),o.push(t)})),o}async function Ul(e,t){const n=Ra(e),i=function(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=Tl(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Tl(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Oo(e.value))return{unaryFilter:{field:Ol(e.field),op:"IS_NAN"}};if(Ro(e.value))return{unaryFilter:{field:Ol(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Oo(e.value))return{unaryFilter:{field:Ol(e.field),op:"IS_NOT_NAN"}};if(Ro(e.value))return{unaryFilter:{field:Ol(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ol(e.field),op:Rl(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);r&&(n.structuredQuery.where=r);const s=function(e){if(0!==e.length)return e.map((e=>{return{field:Ol((t=e).field),direction:Al(t.dir)};var t}))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const a=(o=e,l=t.limit,o.S||Xa(l)?l:{value:l});var o,l;return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=xl(t.startAt)),t.endAt&&(n.structuredQuery.endAt=xl(t.endAt)),n}(n.q,el(t));return(await n.T("RunQuery",i.parent,{structuredQuery:i.structuredQuery})).filter((e=>!!e.document)).map((e=>function(e,t,n){const i=Sl(e,t.name),r=bl(t.updateTime),s=new Lo({mapValue:{fields:t.fields}}),a=No.newFoundDocument(i,r,s);return a}(n.q,e.document)))}
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
 */const Fl=new Map;function Vl(e){if(e._terminated)throw new Oa("failed-precondition","The client has already been terminated.");if(!Fl.has(e)){Sa("ComponentProvider","Initializing Datastore");const a=(n=e._databaseId,i=e.app.options.appId||"",r=e._persistenceKey,s=e._freezeSettings(),t=new Fa(n,i,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams),new io(t,fetch.bind(null))),o=Ll(e._databaseId),l=function(e,t,n,i){return new Nl(e,t,n,i)}(e._authCredentials,e._appCheckCredentials,a,o);Fl.set(e,l)}var t,n,i,r,s;
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
return Fl.get(e)}class jl{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Oa("invalid-argument","Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Oa("invalid-argument","cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new Oa("invalid-argument","experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,e.experimentalForceLongPolling,0,e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
 */class Bl{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jl({}),this._settingsFrozen=!1,e instanceof Va?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Oa("invalid-argument",'"projectId" not provided in firebase.initializeApp.');return new Va(e.options.projectId)}(e))}get app(){if(!this._app)throw new Oa("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Oa("failed-precondition","Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jl(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Ma;switch(e.type){case"gapi":const t=e.client;return Aa(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Ca(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Oa("invalid-argument","makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Fl.get(e);t&&(Sa("ComponentProvider","Removing Datastore"),Fl.delete(e),t.terminate())}(this),Promise.resolve()}}
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
class $l{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new $l(this.firestore,e,this._key)}}class ql{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ql(this.firestore,e,this._query)}}class Wl extends ql{constructor(e,t,n){super(e,t,new Ko(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new $l(this.firestore,null,new Wa(e))}withConverter(e){return new Wl(this.firestore,e,this._path)}}function Hl(e,t,...n){if(e=At(e),Ha("collection","path",t),e instanceof Bl){const i=Ba.fromString(t,...n);return Ga(i),new Wl(e,null,i)}{if(!(e instanceof $l||e instanceof Wl))throw new Oa("invalid-argument","Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Ba.fromString(t,...n));return Ga(i),new Wl(e.firestore,null,i)}}function zl(e,t,...n){if(e=At(e),1===arguments.length&&(t=so.P()),Ha("doc","path",t),e instanceof Bl){const i=Ba.fromString(t,...n);return za(i),new $l(e,null,new Wa(i))}{if(!(e instanceof $l||e instanceof Wl))throw new Oa("invalid-argument","Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(Ba.fromString(t,...n));return za(i),new $l(e.firestore,e instanceof Wl?e.converter:null,new Wa(i))}}
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
class Gl{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Oa("invalid-argument","Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new qa(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
class Kl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kl(fo.fromBase64String(e))}catch(e){throw new Oa("invalid-argument","Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Kl(fo.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class Jl{constructor(e){this._methodName=e}}
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
 */class Yl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Oa("invalid-argument","Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Oa("invalid-argument","Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ao(this._lat,e._lat)||ao(this._long,e._long)}}
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
 */const Xl=/^__.*__$/;class Ql{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new hl(e,this.data,this.fieldMask,t,this.fieldTransforms):new ul(e,this.data,t,this.fieldTransforms)}}class Zl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new hl(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ec(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw xa()}}class tc{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.q=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Z(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}nt(e){return new tc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.q,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}et(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.nt({path:n,rt:!1});return i.st(e),i}it(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.nt({path:n,rt:!1});return i.Z(),i}ot(e){return this.nt({path:void 0,rt:!0})}ut(e){return yc(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.at)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Z(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(0===e.length)throw this.ut("Document fields must not be empty");if(ec(this.tt)&&Xl.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class nc{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.q=n||Ll(e)}ht(e,t,n,i=!1){return new tc({tt:e,methodName:t,at:n,path:qa.emptyPath(),rt:!1,ct:i},this.databaseId,this.q,this.ignoreUndefinedProperties)}}function ic(e){const t=e._freezeSettings(),n=Ll(e._databaseId);return new nc(e._databaseId,!!t.ignoreUndefinedProperties,n)}function rc(e,t,n,i,r,s={}){const a=e.ht(s.merge||s.mergeFields?2:0,t,n,r);pc("Data must be an object, but it was:",a,i);const o=hc(i,a);let l,c;if(s.merge)l=new po(a.fieldMask),c=a.fieldTransforms;else if(s.mergeFields){const e=[];for(const i of s.mergeFields){const r=fc(t,i,n);if(!a.contains(r))throw new Oa("invalid-argument",`Field '${r}' is specified in your field mask but missing from your input data.`);vc(e,r)||e.push(r)}l=new po(e),c=a.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,c=a.fieldTransforms;return new Ql(new Lo(o),l,c)}class sc extends Jl{_toFieldTransform(e){if(2!==e.tt)throw 1===e.tt?e.ut(`${this._methodName}() can only appear at the top level of your update data`):e.ut(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof sc}}class ac extends Jl{_toFieldTransform(e){return new ol(e.path,new il)}isEqual(e){return e instanceof ac}}function oc(e,t,n,i){const r=e.ht(1,t,n);pc("Data must be an object, but it was:",r,i);const s=[],a=Lo.empty();ho(i,((e,i)=>{const o=gc(t,e,n);i=At(i);const l=r.it(o);if(i instanceof sc)s.push(o);else{const e=uc(i,l);null!=e&&(s.push(o),a.set(o,e))}}));const o=new po(s);return new Zl(a,o,r.fieldTransforms)}function lc(e,t,n,i,r,s){const a=e.ht(1,t,n),o=[fc(t,i,n)],l=[r];if(s.length%2!=0)throw new Oa("invalid-argument",`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(fc(t,s[e])),l.push(s[e+1]);const c=[],u=Lo.empty();for(let e=o.length-1;e>=0;--e)if(!vc(c,o[e])){const t=o[e];let n=l[e];n=At(n);const i=a.it(t);if(n instanceof sc)c.push(t);else{const e=uc(n,i);null!=e&&(c.push(t),u.set(t,e))}}const h=new po(c);return new Zl(u,h,a.fieldTransforms)}function cc(e,t,n,i=!1){return uc(n,e.ht(i?4:3,t))}function uc(e,t){if(dc(e=At(e)))return pc("Unsupported field value:",t,e),hc(e,t);if(e instanceof Jl)return function(e,t){if(!ec(t.tt))throw t.ut(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ut(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.rt&&4!==t.tt)throw t.ut("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const r of e){let e=uc(r,t.ot(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=At(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return tl(t.q,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=lo.fromDate(e);return{timestampValue:yl(t.q,n)}}if(e instanceof lo){const n=new lo(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:yl(t.q,n)}}if(e instanceof Yl)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Kl)return{bytesValue:vl(t.q,e._byteString)};if(e instanceof $l){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.ut(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:_l(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ut(`Unsupported field value: ${Ka(e)}`)}(e,t)}function hc(e,t){const n={};return function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ho(e,((e,i)=>{const r=uc(i,t.et(e));null!=r&&(n[e]=r)})),{mapValue:{fields:n}}}function dc(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof lo||e instanceof Yl||e instanceof Kl||e instanceof $l||e instanceof Jl)}function pc(e,t,n){if(!dc(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=Ka(n);throw"an object"===i?t.ut(e+" a custom object"):t.ut(e+" "+i)}var i}function fc(e,t,n){if((t=At(t))instanceof Gl)return t._internalPath;if("string"==typeof t)return gc(e,t);throw yc("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const mc=new RegExp("[~\\*/\\[\\]]");function gc(e,t,n){if(t.search(mc)>=0)throw yc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Gl(...t.split("."))._internalPath}catch(i){throw yc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function yc(e,t,n,i,r){const s=i&&!i.isEmpty(),a=void 0!==r;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${i}`),a&&(l+=` in document ${r}`),l+=")"),new Oa("invalid-argument",o+e+l)}function vc(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class wc{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new $l(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new bc(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ic("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class bc extends wc{data(){return super.data()}}class _c{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(e,t){this._docs.forEach(e,t)}}function Ic(e,t){return"string"==typeof t?gc(e,t):t instanceof Gl?t._internalPath:t._delegate._internalPath}
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
 */class Sc{}function Tc(e,...t){for(const n of t)e=n._apply(e);return e}class kc extends Sc{constructor(e,t,n){super(),this.dt=e,this.wt=t,this.yt=n,this.type="where"}_apply(e){const t=ic(e.firestore),n=function(e,t,n,i,r,s,a){let o;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Oa("invalid-argument",`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){Mc(a,s);const t=[];for(const n of a)t.push(Pc(i,e,n));o={arrayValue:{values:t}}}else o=Pc(i,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Mc(a,s),o=cc(n,"where",a,"in"===s||"not-in"===s);const l=Uo.create(r,s,o);return function(e,t){if(t.N()){const n=Xo(e);if(null!==n&&!n.isEqual(t.field))throw new Oa("invalid-argument",`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const i=Yo(e);null!==i&&Lc(e,t.field,i)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Oa("invalid-argument",`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Oa("invalid-argument",`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,l),l}(e._query,0,t,e.firestore._databaseId,this.dt,this.wt,this.yt);return new ql(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Ko(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function Ec(e,t,n){const i=t,r=Ic("where",e);return new kc(r,i,n)}class xc extends Sc{constructor(e,t){super(),this.dt=e,this._t=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Oa("invalid-argument","Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Oa("invalid-argument","Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new Go(t,n);return function(e,t){if(null===Yo(e)){const n=Xo(e);null!==n&&Lc(e,n,t.field)}}(e,i),i}(e._query,this.dt,this._t);return new ql(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Ko(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Ac(e,t="asc"){const n=t,i=Ic("orderBy",e);return new xc(i,n)}class Rc extends Sc{constructor(e,t,n){super(),this.type=e,this.gt=t,this.bt=n}_apply(e){return new ql(e.firestore,e.converter,(t=e._query,n=this.gt,i=this.bt,new Ko(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),n,i,t.startAt,t.endAt)));var t,n,i}}function Oc(e){return Ya("limit",e),new Rc("limit",e,"F")}function Pc(e,t,n){if("string"==typeof(n=At(n))){if(""===n)throw new Oa("invalid-argument","Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Qo(t)&&-1!==n.indexOf("/"))throw new Oa("invalid-argument",`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(Ba.fromString(n));if(!Wa.isDocumentKey(i))throw new Oa("invalid-argument",`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return xo(e,new Wa(i))}if(n instanceof $l)return xo(e,n._key);throw new Oa("invalid-argument",`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ka(n)}.`)}function Mc(e,t){if(!Array.isArray(e)||0===e.length)throw new Oa("invalid-argument",`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new Oa("invalid-argument",`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Lc(e,t,n){if(!n.isEqual(t))throw new Oa("invalid-argument",`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
 */function Nc(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}class Cc extends class{convertValue(e,t="none"){switch(Io(e)){case 0:return null;case 1:return e.booleanValue;case 2:return yo(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(vo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw xa()}}convertObject(e,t){const n={};return ho(e.fields,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new Yl(yo(e.latitude),yo(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=bo(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(_o(e));default:return null}}convertTimestamp(e){const t=go(e);return new lo(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Ba.fromString(e);Aa(Ml(n));const i=new Va(n.get(1),n.get(3)),r=new Wa(n.popFirst(5));return i.isEqual(t)||Ta(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kl(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new $l(this.firestore,null,t)}}function Dc(e){!function(e){if(Jo(e)&&0===e.explicitOrderBy.length)throw new Oa("unimplemented","limitToLast() queries require specifying at least one orderBy() clause")}((e=Ja(e,ql))._query);const t=Vl(e.firestore),n=new Cc(e.firestore);return Ul(t,e._query).then((t=>{const i=t.map((t=>new bc(e.firestore,n,t.key,t,e.converter)));return Jo(e._query)&&i.reverse(),new _c(e,i)}))}function Uc(e,t,n,...i){const r=ic((e=Ja(e,$l)).firestore);let s;return s="string"==typeof(t=At(t))||t instanceof Gl?lc(r,"updateDoc",e._key,t,n,i):oc(r,"updateDoc",e._key,t),Cl(Vl(e.firestore),[s.toMutation(e._key,ll.exists(!0))])}function Fc(e,t){const n=zl(e=Ja(e,Wl)),i=Nc(e.converter,t),r=rc(ic(e.firestore),"addDoc",n._key,i,null!==n.converter,{});return Cl(Vl(e.firestore),[r.toMutation(n._key,ll.exists(!1))]).then((()=>n))}
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
 */function Vc(){return new ac("serverTimestamp")}_a="9.6.0_lite",zt(new Rt("firestore/lite",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=new Bl(n,new La(e.getProvider("auth-internal")),new Ua(e.getProvider("app-check-internal")));return t&&i._setSettings(t),i}),"PUBLIC")),Xt("firestore-lite","3.4.0",""),Xt("firestore-lite","3.4.0","esm2017");const jc=function(e=Yt()){return Gt(e,"firestore/lite").getImmediate()}(Di),Bc=Hl(jc,"replays"),$c=Hl(jc,"entries");async function qc(e){const t=(await function(e){const t=Vl((e=Ja(e,$l)).firestore),n=new Cc(e.firestore);return Dl(t,[e._key]).then((t=>{Aa(1===t.length);const i=t[0];return new wc(e.firestore,n,e._key,i.isFoundDocument()?i:null,e.converter)}))}(zl(Bc,e))).data();if(t)return{id:e,version:t.version,score:t.score,log:t.log,seed:t.seed,mode:t.mode}}const Wc=["normal","ex"],Hc={normal:"NORMAL",ex:"EX"},zc=document.querySelector(".leaderboard .entry-list"),Gc=document.querySelector(".leaderboard .about-button"),Kc=document.querySelector(".leaderboard .user-button"),Jc=document.querySelector(".about"),Yc=document.querySelector(".about .modal-close"),Xc=document.querySelector(".user"),Qc=document.querySelector(".user .modal"),Zc=document.querySelector(".user .form"),eu=document.querySelector(".user .form-textfield"),tu=document.querySelector(".user .form-save"),nu=document.querySelector(".user .record-list"),iu=document.querySelector(".user .modal-close");if(!(zc instanceof HTMLElement&&Gc instanceof HTMLElement&&Kc instanceof HTMLElement&&Jc instanceof HTMLElement&&Yc instanceof HTMLElement&&Xc instanceof HTMLElement&&Qc instanceof HTMLElement&&Zc instanceof HTMLFormElement&&eu instanceof HTMLInputElement&&tu instanceof HTMLButtonElement&&nu instanceof HTMLElement&&iu instanceof HTMLElement))throw Error("invalid element");const ru={normal:{},ex:{}};async function su(e){let t=ru[e].meEntry;return t||(t=ru[e].meEntry=await async function(e,t){const n=(await Dc(Tc($c,Ec("version","==",e),Ec("mode","==",t),Ec("uid","==",va()),Ac("score","desc"),Oc(1)))).docs[0];if(n){const e=n.data();return{id:n.id,uid:e.uid,name:e.name,replayId:e.replayId,score:e.score,mode:e.mode}}}(0,e)),t}async function au(e){let t=ru[e].entries;return t||(t=ru[e].entries=await async function(e,t){return(await Dc(Tc($c,Ec("version","==",e),Ec("mode","==",t),Ac("score","desc"),Oc(100)))).docs.map((e=>{const t=e.data();return{id:e.id,uid:t.uid,name:t.name,replayId:t.replayId,score:t.score,mode:t.mode}}))}(0,e)),t}async function ou(e){const t=await async function(e){return{id:(await Fc(Bc,{uid:va(),registeredAt:Vc(),log:e.log,version:e.version,score:e.score,mode:e.mode,seed:e.seed})).id,...e}}(e),n=await su(t.mode);let i=!1;return n?n.score<e.score&&(i=!0,n.score=e.score,await async function(e,t){await Uc(zl($c,e.id),{registeredAt:Vc(),replayId:t.id,score:t.score})}(n,t)):(i=!0,ru[t.mode].meEntry=await async function(e){return{id:(await Fc($c,{uid:va(),name:wa(),registeredAt:Vc(),replayId:e.id,version:e.version,score:e.score,mode:e.mode})).id,uid:va(),name:wa(),replayId:e.id,score:e.score,mode:e.mode}}(t)),i&&(delete ru[t.mode].entries,t.mode===hu()&&lu(t.mode)),{replayId:t.id,newRecord:i}}async function lu(e){const t=(await au(e)).map(((e,t)=>`\n      <div class="entry ${va()===e.uid?"me":""}">\n        <div class="entry-order">${t+1}.</div>\n        <div class="entry-name">${e.name||"no name"}</div>\n        <div class="entry-score">￥${M(e.score)}</div>\n        <div class="entry-replay clickable" data-r="${e.replayId}"></div>\n      </div>`));zc&&(zc.innerHTML=t.join(""))}let cu=null;function uu(){const e=new URL(location.origin+location.pathname),t=fu();return t&&e.searchParams.set("r",t),e.href}function hu(){return"ex"===new URL(location.href).searchParams.get("mode")?"ex":"normal"}let du="",pu="";function fu(){return du!==location.href&&(du=location.href,pu=new URL(du).searchParams.get("r")||""),pu}function mu(e){if(fu()===e)return;const t=new URL(location.href);e?t.searchParams.set("r",e):t.searchParams.delete("r"),history.replaceState(history.state,"",t)}addEventListener("click",(e=>{if(e.target instanceof HTMLElement){const t=e.target.closest("a");t&&Ui("link_click",{url:t.href})}})),Gc.addEventListener("click",(()=>{Ui("about_open"),Jc.classList.add("opened")})),Yc.addEventListener("click",(()=>{Jc.classList.remove("opened")})),document.addEventListener("click",(e=>{if(cu&&e.target instanceof HTMLElement){const t=e.target.closest(".entry-replay,.record-replay");t instanceof HTMLElement&&t.dataset.r&&(mu(t.dataset.r),cu(t.dataset.r),Jc.classList.remove("opened"),Xc.classList.remove("opened"),window.scrollTo({top:100,behavior:"smooth"}))}})),Kc.addEventListener("click",(async()=>{Ui("user_open"),eu.value=wa(),tu.disabled=!0,Xc.classList.add("opened"),Qc.classList.add("loading");try{const e=await Promise.all(Wc.map((e=>su(e)))),t=e.some((e=>"ex"===(null==e?void 0:e.mode)));let n="";e.forEach(((e,i)=>{const r=`<div>${Hc[Wc[i]]}</div>`;e?n+=`\n          ${t?r:""}\n          <div>￥${M(e.score)}</div>\n          ${t?"":"<div></div>"}\n          <div class="record-replay clickable" data-r="${e.replayId}"></div>`:"ex"!==Wc[i]&&(n+=`\n          ${t?r:""}\n          <div>なし</div>\n          ${t?"":"<div></div>"}\n          <div></div>`)})),nu.innerHTML=n}catch(e){console.log(e)}Qc.classList.remove("loading"),eu.focus()})),iu.addEventListener("click",(()=>{Xc.classList.remove("opened")})),Zc.addEventListener("submit",(e=>{e.preventDefault()})),eu.addEventListener("input",(()=>{tu.disabled=!1})),tu.addEventListener("click",(async()=>{Ui("user_save"),tu.disabled=!0,Qc.classList.add("loading");try{const e=eu.value,t=wa();await async function(e){const t=ya();t&&await ds(t,{displayName:e})}(e);t!==wa()&&await Promise.all(Wc.map((async t=>{const n=await su(t);n&&(await async function(e,t){await Uc(zl($c,e.id),{name:t})}(n,e),n.name=e,delete ru[t].entries)}))),lu(hu())}catch{tu.disabled=!1}Qc.classList.remove("loading")})),ga((()=>{lu(hu())}));const{titleLogo:gu,titleLogoIcon:yu}=gi;var vu=e=>{const t=di.from(8).wait(300).to(0,600,He.outSine).start(),n=di.from(0).wait(300).to(1,600,He.steps(3)).start(),i=di.from(3).loopStart().to(-3,1500,He.inOutSine).to(3,1500,He.inOutSine).loopEnd().start(),r=()=>di.from(-100).loopStart().wait(2e3).to(-100).to(h.flash.width,200).wait(3e3).to(-100).to(h.flash.width,200).to(-100).to(h.flash.width,200).wait(2e3).loopEnd(),s=di.from(0).wait(60).on((()=>{h.normal=a().normal})),a=()=>({normal:c()?gu.ex:gu.normal,flash:c()?gu.exFlash:gu.normalFlash}),o=()=>{Ni.mode="ex"===Ni.mode?"normal":"ex",function(e){const t=new URL(location.href);"normal"===e?t.searchParams.delete("mode"):t.searchParams.set("mode",e),history.replaceState(history.state,"",t),lu(e)}(Ni.mode),Oi.titleModeChange.play()};var l;const c=()=>{var t;return"ex"===(null!==(l=null==e||null===(t=e.value)||void 0===t?void 0:t.mode)&&void 0!==l?l:Ni.mode)};let u=c(),h=a(),d=r().start();return()=>{u!==c()&&(u=c(),h.normal=h.flash=a().flash,d.end(),s.end(),d=r().start(),s.start());const l=F(ii,h.normal),p=h.flash.width,f=Math.round(d.value),m=h.normal.toBox(l,80);m.height+=30,m.originY+=25,e||oi.onDown(m,o),ii.save(),ii.drawSprite(yu,F(ii,yu),53+Math.round(i.value)),ii.opacity(n.value),ii.drawSprite(h.normal,l,80+t.value),ii.opacity(.8),ii.drawSprite(h.flash.sub({x:Math.max(0,f),width:(f<0?100+f:Math.min(100,p-f))-p}),l+Math.max(0,f),80+t.value),ii.restore()}};const{buttonTwitter:wu}=gi;const{buttonMute:bu,buttonLight:_u}=gi;const{card:Iu,fontUiS:Su}=gi;var Tu=(e,t,n="")=>{const i=F(ii,Iu.top),r=di.from(0).to(t+(n?Su[0].height+1:0),200,He.steps(5)).start(!1);return s=>{r.update();const a=(t-r.value)/2|0;if(ii.drawSprite(Iu.top,i,e+a),ii.drawSprite(Iu.body,i,e+a+Iu.top.height,Iu.body.width,r.value),ii.drawSprite(Iu.bottom,i,e+a+Iu.top.height+r.value),n&&Su[0].height<=r.value){const t=(Iu.body.width-ii.measuretext(Su,n,4))/2|0;ii.drawText(Su,n,i+t,e+a+4,4)}r.done&&s&&s({x:i+4,y:e+a+4+(n?Su[0].height+1:0),width:Iu.body.width-8,height:r.value-(n?Su[0].height+1:0)})}};const{tips:ku}=gi;const{fontUi:Eu,scoreBg:xu}=gi;var Au=(e,t)=>(n,i)=>{ii.drawSprite(xu,e,t+2),ii.drawText(Eu,`y ${M(0|n)}`,e+1,t),ii.drawRect(e+1,t+11,Math.floor(128*Math.min(n/1e6,1)),2,Ci.main),void 0!==i&&ii.drawText(Eu,"h "+(0|i),e+1,t+21)};const{replayReady:Ru,replayLoading:Ou}=gi;const{buttonReset:Pu,buttonLight:Mu}=gi;const{pressAnyButton:Lu}=gi;const{fontUi:Nu,fontUiL:Cu}=gi;const{uiStatusReset:Du}=gi;const{card:Uu}=gi;var Fu=()=>{const e={},t=39,n=Au(7,2),i=(r=Uu.body.width/2,s=22,e=>{const t=Math.floor(100*Math.max(e,0)),n=`t ${Math.floor(t/100)}`,i=`.${String(t%100).padStart(2,"0")}`,a=ii.measuretext(Cu,n),o=ii.measuretext(Nu,i),l=r-(a+1+o)/2;ii.drawText(Cu,n,l,s),ii.drawText(Nu,i,l+a+1,s+2)});var r,s;const a=((e,t)=>{const n=di.from(!1).to(!0,100).to(!1).on((()=>{ri.emit("sceneChange",(()=>(mu(""),$h())))})),i=()=>{n.started||(n.start(),Oi.uiButton.play())};return()=>{oi.onDown(Du.toBox(e-Du.width,t-Du.height),i),ii.opacity(n.value?.2:1),ii.drawSprite(Du,e-Du.width,t-Du.height)}})(Uu.body.width,t),o=di.from(-39).wait(250).to(0,250,He.outSine).on((()=>{Ni.screenTop=t,ri.emit("statusInitIn")})).start(),l=di.from(0).to(-39,400,He.inSine).on((()=>{Ni.screenTop=0,ri.emit("statusFinOut"),Ve.remove(c)}));e.timeUp=()=>{l.start()},Ni.screenTop=0;const c=(r,s,c)=>{ri.subscribe(e),ii.save(),ii.translate(F(ii,Uu.body),l.started?l.value:o.value),ii.drawSprite(Uu.body,0,0,Uu.body.width,t-Uu.bottom.height),ii.drawSprite(Uu.bottom,0,t-Uu.bottom.height),n(r,s),i(c/ni.fps),a(),ii.restore()};return c};const{success:Vu}=gi;const{buttonReset:ju,buttonLight:Bu}=gi;const{buttonTwitter:$u}=gi;var qu=e=>{const{time:t=30,times:n=1,color:i=v.parse("#fff8"),onEnd:r}=null!=e?e:{},s=di.from(!0).to(!0,t).loopStart(n-1).to(!1,t).to(!0,t).loopEnd().start(),a=()=>{s.value&&ii.drawRect(0,0,ii.width,ii.height,i),s.done&&(Ve.remove(a),null==r||r())};return a};const{newRecord:Wu}=gi;var Hu=(e,t)=>{const n=di.from({x:0,y:0}).to({x:2,y:-2},10).to({x:-2,y:2},20).to({x:2,y:2},20).to({x:-2,y:-2},20).to({x:0,y:0}),i=di.from(0).wait(300).to(e,500,He.inSine).on((()=>{Ni.isSuccess?r.start():s.start()})).start(!1),r=di.from(0).wait(400),s=di.from(0).wait(200).on((()=>pi.ui.add(((e,t)=>{const n=di.from(ii.height).to(ii.height-$u.height-30,300,He.outSine).start(),i=()=>{const n=(null==t?void 0:t.isResolved())?`￥${M(e)}\n#FireShooterSan\n${uu()}`:`#FireShooterSan\n${uu()}`,i=new URLSearchParams({text:n});window.open(`https://twitter.com/intent/tweet?${i}`)};return()=>{const e=n.value;oi.onDown($u.toBox(30,e),i),ii.drawSprite($u,30,e)}})(e,t),(()=>{const e=di.from(ii.height).to(ii.height-ju.height-30,300,He.outSine).start(),t=di.from(!1).to(!0,100).to(!1).on((()=>{ri.emit("sceneChange",(()=>(mu(""),$h())))})),n=()=>{t.started||(t.start(),Oi.uiButton.play())};return()=>{const i=ii.width-ju.width-30,r=e.value;oi.onDown(ju.toBox(i,r),n),ii.drawSprite(ju,i,r),t.value&&(ii.save(),ii.opacity(.5),ii.drawSprite(Bu,i,r),ii.restore())}})()))),a=Tu(90,49,"RESULT"),o=Au(3,16),l=((e,t,n)=>{const i=di.from({rotate:-15,scale:3}).to({rotate:-0,scale:1},250,He.inSine).on((()=>{r.start(),n(),Oi.resultSuccess.play()})).start(!1),r=di.from(!1).loopStart().to(!1,500).to(!0,500).loopEnd();return()=>{i.update(),ii.save(),ii.translate(e,t),ii.rotate(i.value.rotate),ii.scale(i.value.scale),ii.drawSprite(r.value?Vu.flash:Vu.normal),ii.restore()}})(106,1,(()=>{var e;n.start(),s.start(),(null==t||null===(e=t.value)||void 0===e?void 0:e.newRecord)&&pi.ui.add((()=>{const e=di.from(!1).loopStart().to(!1,500).to(!0,500).loopEnd().start();let t=!0;return()=>{t&&(t=!1,ri.emit("newRecordShow"),pi.ui.add(qu({color:v.parse("#fff"),time:100})));const n=e.value?Wu.flash:Wu.normal;ii.drawSprite(n,F(ii,n),44)}})())}));let c=i.value;return()=>{ii.save(),ii.translate(n.value.x,n.value.y),a((e=>{ii.translate(e.x,e.y),o(i.update().value),r.done&&l()})),ii.restore(),c!==i.value&&Oi.resultCounting.play(),c=i.value}};const{start:zu}=gi;const{replayNow:Gu}=gi;const{finish:Ku}=gi;const{playerBullet:Ju}=gi;const{playerBulletHit:Yu}=gi;const{playerBullet:Xu}=gi;var Qu=(e,t,n)=>{const i={};let r=0,s=0,a=1/0,o=0,l=-90,c=0;i.enemyHit=()=>{Ve.remove(u),pi.effectBack.add(((e,t)=>{const n=di.from(2).to(1,100,He.inSine).on((()=>{Ve.remove(i)})).start(),i=()=>{ii.save(),ii.opacity(.8),ii.translate(e,t),ii.scale(n.value),ii.drawSprite(Yu),ii.restore()};return i})(e,t)),ri.emit("playerBulletRemove")},i.enemyPos=({id:n,x:i,y:c})=>{const u=N(L(i-e,c-t)-l),h=Math.abs(u);(-40<u&&u<40&&h<a||r===n)&&(s=n,a=r===n?0:h,o=u)},Oi.playerFire.play();const u=()=>{if(s&&l!==o){const e=n?2:.5;l+=Math.min(Math.max(o,-e),e)}r=s,s=0,a=1/0;const h=C(l,n?6:8);if(e+=h.x,t+=h.y,e<=-Xu.originRight||ii.width+Xu.originLeft<=e||t<=Ni.screenTop-Xu.originBottom||ii.height+Xu.originTop<=t)return Ve.remove(u),void ri.emit("playerBulletRemove");c++%3==0&&pi.effectBack.add(((e,t)=>{const n=di.from(.2).to(0,250,He.inSine).on((()=>{Ve.remove(i)})).start(),i=()=>{ii.save(),ii.opacity(n.value),ii.drawSprite(Ju,e,t),ii.restore()};return i})(e,t)),ri.subscribe(i),si.emit("playerBulletHit",null,Xu.toBox(e,t),i),ii.drawSprite(Xu,e,t)};return u};const{playerDestroyChip:Zu}=gi;var eh=(e,t,n,i)=>{const r=di.from(0).wait(i).start(),s=di.from(0).to(2).to(1,200,He.inSine).start(!1),a=di.from(0).to(.8,100).wait(300).to(0,200).on((()=>{Ve.remove(c)})).start(!1),o=di.from(4).to(.2,300,He.outSine).start(!1),l=C(n),c=()=>{r.done&&(o.update(),e+=l.x*o.value,t+=l.y*o.value,ii.save(),ii.opacity(a.update().value),ii.translate(0|e,0|t),ii.scale(s.update().value),ii.drawSprite(Zu),ii.restore())};return c};const{playerDestroy:th}=gi;const{player:nh}=gi,ih=e=>{const t={},n=di.from(ii.height+nh.normal.originTop).wait(200).to(ii.height-30,200,He.outSine).start(),i=di.from(!1).start();for(let e=0;e<12;e++)i.to(!0,60).to(!1,60);let r=!1,s=ii.width/2,a=0;t.enemyHit=t.enemyBulletHit=()=>{!r&&i.done&&Ve.remove(o)&&(Ni.heartRate=0,Ni.clearing.start(),ri.emit("playerDestroy"),pi.effectOverEnemy.add(((e,t)=>{const n=di.from(0).to(24,250,He.outSine).wait(200).start(),i=di.from(0).to(2,100,He.outSine).to(.7,150,He.inOutSine).to(1.2,50,He.inSine).to(1,100,He.inSine).start(),r=di.from(1).wait(200).to(0,250,He.inSine).on((()=>{Ve.remove(a)})).start(),s=Ci.accent.opacity(.37);for(let n=0;n<720;n+=48)pi.effectOverEnemy.add(eh(e,t,n,n/2+200));Oi.playerHit.play();const a=()=>{ii.save(),ii.opacity(r.value),ii.translate(0|e,0|t),n.done||ii.drawCircle(0,-6,0|n.value,s),ii.scale(i.value),ii.drawSprite(th),ii.restore()};return a})(s,a)),di.from(0).wait(1e3).on((()=>{pi.player.add(ih(e))})).start())},t.timeUp=()=>{r=!0};const o=()=>{ri.subscribe(t);const o=i.value?nh.flash:nh.normal;if(!n.done)return a=n.value,void ii.drawSprite(o,s,a);if(r&&e)return void ii.drawSprite(o,s,a);let l=!1;if(oi.isDown){const e=oi.vec;s+=1.4*e.x,a+=1.4*e.y,l=oi.downCount>7}else{l=ai.fire.downCount>7;const e=function([e,t,n,i]){const r=(t.isDown?1:0)+(i.isDown?-1:0),s=(n.isDown?1:0)+(e.isDown?-1:0),a=Math.sqrt(r*r+s*s)||1;return{x:r/a,y:s/a}}(li);s+=e.x*(l?1.5:4.5),a+=e.y*(l?1.5:4.5)}s=Math.min(Math.max(s,o.originLeft),ii.width-o.originRight),a=Math.min(Math.max(a,Ni.screenTop+o.originTop),ii.height-o.originBottom),(ci.some((e=>e.isDown))&&pi.playerBullet.isEmpty||ci.some((e=>e.isDownChange))&&pi.playerBullet.size<3)&&pi.playerBullet.add(Qu(s,a-o.originTop,l)),Ni.playerPos={x:s,y:a},r||si.emit("playerHit",null,{x:s,y:a,width:0,height:0,originX:0,originY:0},t),ii.drawSprite(o,s,a)};return o};var rh=ih;const{enemyNotice:sh,enemyNoticeLarge:ah}=gi;let oh=0;const{fontRate:lh}=gi;var ch=(e,t,n,i)=>{const r=di.from(!1).loopStart().to(!0,40).to(!1,60).loopEnd(),s=di.from(0).to(-6,200,He.outSine).wait(300).on((()=>{Ve.remove(a)})).start();16<=n&&r.start(!1);const a=()=>{if(n>1){const i=r.update().value?lh.flash:lh.normal;ii.drawText(i,`*${n}`,0|e,t+s.value|0,-1)}};return a};const{enemyTakeChip:uh}=gi;const{enemyTake:hh,enemyLargeTake:dh}=gi;var ph=({x:e,y:t,large:n,heart:i})=>{const r=Ni.getHeartRate(),s=di.from(0).to(n?32:16,250,He.outSine).wait(100).start(),a=di.from(0).to(1.5,100,He.outSine).to(.8,100,He.inOutSine).to(1,100,He.inSine).start(),o=di.from(.9).wait(200).to(0,200,He.inSine).on((()=>{Ve.remove(c),pi.effectOverPlayer.add(ch(e,t,r))})).start(),l=Ci.accent.opacity(.37),c=()=>{ii.save(),ii.opacity(o.value),ii.translate(0|e,0|t),s.done||ii.drawCircle(0,0,0|s.value,l),ii.scale(a.value),ii.drawSprite(n?dh:hh),ii.restore()};return c};const{enemy:fh,enemyLarge:mh}=gi;let gh=1;var yh=(e,t)=>{const n={},i=gh++,r=e.hp,s={id:i,x:e.x,y:e.y,hp:e.hp,large:e.large},a=e.large?mh:fh;e.me&&(e.me.id=i);let o=!1;const l=di.from(2).to(1,150,He.inSine).start(!1),c=di.from(!1).to(!0,60).to(!1,60).to(!0,60).to(!1),u=di.from(1).to(0,200,He.inSine).on((()=>{Ve.remove(h)}));n.playerBulletHit=()=>{o||(c.running||c.start(),Oi.enemyHit.play(),--s.hp<=0&&Ve.remove(h)&&(Ni.heartRate++,Ni.addHeart(r),pi.effectBack.add(ph({...s,heart:r})),ri.emit("enemyTake",{id:i,large:e.large}),ri.emit("enemyDestroy",{id:i}),e.large?Oi.enemyTakeLarge.play():Oi.enemyTake.play()))},n.enemyTake=t=>{var n;(null===(n=e.parent)||void 0===n?void 0:n.id)===t.id&&Ve.remove(h)&&(Ni.addHeart(r),pi.effectBack.add(ph({...s,heart:r})),ri.emit("enemyDestroy",{id:i}),ri.emit("enemyTake",{id:i,large:e.large}))},n.timeUp=()=>{o=!0,u.start(),pi.effectBack.add((({x:e,y:t,large:n})=>{const i=di.from(0).to(n?16:8,400,He.outSine).start(),r=di.from(.6).wait(200).to(0,200,He.inSine).on((()=>{Ve.remove(s)})).start(),s=()=>{ii.save(),ii.opacity(r.value),ii.drawCircle(0|e,0|t,0|i.value,Ci.accent),ii.restore()};return s})({...s}))};const h=()=>{const d=e.noOver||e.noHorOver,p=e.noOver||e.noVertOver;if(s.hp<=0||!d&&(s.x<=-a.body.originRight||ii.width+a.body.originLeft<=s.x)||!p&&(s.y<=Ni.screenTop-a.body.originBottom||ii.height+a.body.originTop<=s.y))return void(Ve.remove(h)&&ri.emit("enemyDestroy",{id:i}));ri.subscribe(n),o||t(s),ii.save(),ii.translate(s.x,s.y),o||si.emit("enemyHit",null,a.body.toBox(0,0),n),ri.emit("enemyPos",{id:i,x:s.x,y:s.y}),ii.scale(u.started?u.value:l.update().value),ii.drawSprite(c.value?a.bodyFlash:a.body);const f=c.value?a.gaugeFlash:a.gauge,m=Math.ceil(f.height*(Math.max(0,s.hp)/r));ii.drawSprite(f.sub({y:m,height:-m,originY:-m})),ii.restore()};return pi.enemyNotice.add(((e,t,n)=>{const i={},r=t-1,s=Ni.isFirstEnemy,a=Ni.enemyWaveId;var o,l;oh=s?300:oh+(null!==(o=e.showTime)&&void 0!==o?o:50);const c=di.from(0).wait(null!==(l=e.wait)&&void 0!==l?l:0),u=di.from(0).wait(oh).to(2).to(1,200,He.outSine).start(),h=di.from(1).to(0,300,He.inSine).on((()=>{Ve.remove(d)}));s||(i.enemyShow=e=>{c.started||e.id!==r||c.start()},i.enemyDestroy=e=>{e.id===r&&c.end()}),i.timeUp=()=>{h.start()},Ni.isFirstEnemy=!1;const d=()=>{if(ri.subscribe(i),!h.started&&(s&&!c.started&&Ni.enemyWaveId!==a||c.done))return Ve.remove(d),pi.enemy.add(n),ri.emit("enemyShow",{id:t}),void Oi.enemyShow.play();ii.save(),ii.opacity(Ni.enemyWaveId!==a||e.large?.3:.2),ii.translate(e.x,e.y),ii.scale(h.started?h.value:u.value),ii.drawSprite(e.large?ah:sh),ii.restore()};return d})(e,i,h)),h};const{enemyBulletTake:vh,enemyBulletLargeTake:wh}=gi;var bh=({x:e,y:t,large:n,angle:i,speed:r})=>{const s=di.from(0).to(n?8:4,400,He.outSine).start(),a=di.from(.6).wait(200).to(0,200,He.inSine).on((()=>{Ve.remove(o)})).start(),o=()=>{const n=C(i instanceof He?i.value:i,r instanceof He?r.value:r);e+=n.x,t+=n.y,ii.save(),ii.opacity(a.value),ii.drawCircle(0|e,0|t,0|s.value,Ci.accent),ii.restore()};return o};const{enemyBullet:_h,enemyBulletLarge:Ih}=gi;var Sh=e=>{const t={},n=di.from(0).loopStart().to(1,500,He.frameSteps(2)).to(0).loopEnd().start(!1);let{x:i,y:r}=e;t.enemyTake=t=>{if(t.id===e.id&&Ve.remove(s)){const t=e.large?2:1;Ni.addHeart(t),pi.effectBack.add((({x:e,y:t,large:n,heart:i})=>{const r=Ni.getHeartRate(),s=di.from(0).to(n?16:8,250,He.outSine).wait(100).start(),a=di.from(0).to(1.5,100,He.outSine).to(.8,100,He.inOutSine).to(1,100,He.inSine).start(),o=di.from(.9).wait(200).to(0,200,He.inSine).on((()=>{Ve.remove(c),pi.effectOverPlayer.add(ch(e,t,r))})).start(),l=Ci.accent.opacity(.37),c=()=>{ii.save(),ii.opacity(o.value),ii.translate(0|e,0|t),s.done||ii.drawCircle(0,0,0|s.value,l),ii.scale(a.value),ii.drawSprite(n?wh:vh),ii.restore()};return c})({...e,x:i,y:r,heart:t}))}},t.enemyDestroy=t=>{t.id===e.id&&di.from(0).wait(1e3).on((()=>{Ve.remove(s)&&pi.effectBack.add(bh({...e,x:i,y:r}))})).start()},e.large?Oi.enemyFireLarge.play():Oi.enemyFire.play();const s=()=>{if(Ni.clearing.running&&Ve.remove(s))return void pi.effectBack.add(bh({...e,x:i,y:r}));const a=(e.large?Ih:_h)[n.update().value],o=C(e.angle instanceof He?e.angle.value:e.angle,e.speed instanceof He?e.speed.value:e.speed);i+=o.x,r+=o.y,i<=-a.originRight&&o.x<=0||ii.width+a.originLeft<=i&&0<=o.x||r<=Ni.screenTop-a.originBottom&&o.y<=0||ii.height+a.originTop<=r&&0<=o.y?Ve.remove(s):(ri.subscribe(t),si.emit("enemyBulletHit",null,a.toBox(i,r),t),ii.drawSprite(a,i,r))};return s};const Th=e=>{const t=(t,n)=>$(t,n,e.rank/2),n=di.from(0).wait(fi.nextInt(t(300,0),t(2e3,200))).start(!1),i=di.from(!1).to(!0);for(let n=0;n<e.rank;n++)i.wait(t(300,100)).to(!0);return yh({...e},(e=>{n.update().done&&(n.wait(fi.nextInt(t(2e3,500),t(5e3,800))),i.start(!1)),i.update().getAndSet(!1)&&pi.enemyBullet.add(Sh({...e,angle:90,speed:t(1,3)}))}))};const kh=e=>{const t=(t,n)=>$(t,n,e.rank/2),n={},i=gi.enemy.body,r=di.from(!0).start(!1);let s=0,a=0;for(let n=0;n<e.rank;n++)r.wait(t(1e3,600)).to(!0);return yh({...e},(o=>{if(ri.subscribe(n),r.update().getAndSet(!1)){const n=D(o.x-Ni.playerPos.x,o.y-Ni.playerPos.y);s=3*n.x,a=3*n.y;const i=L(Ni.playerPos.x-o.x,Ni.playerPos.y-o.y),r=t(.5,1);for(let t=0;t<e.rank+2;t++)pi.enemyBullet.add(Sh({...o,angle:i,speed:1.5+t*r}))}else s+=(0-s)/20,a+=(4-a)/20;o.x+=s,o.y+=a,(o.x<i.originLeft||ii.width-i.originRight<o.x)&&(s=-s,o.x+=s)}))};const Eh=e=>{const t=(t,n)=>$(t,n,e.rank/2),n=C(90+75*Math.sign(e.x-ii.width/2),t(2,4)),i=gi.enemy.body;return yh({...e},(r=>{if(r.x+=n.x,r.y+=n.y,r.x<i.originLeft||ii.width-i.originRight<=r.x){n.x=-n.x,r.x+=n.x;const i=t(1.5,2.5),s=n.x<0?180:0;if(0===e.rank){const t=5*e.no;pi.enemyBullet.add(Sh({...r,angle:s+90-t,speed:i}),Sh({...r,angle:s-90+t,speed:i}))}else if(1===e.rank)pi.enemyBullet.add(Sh({...r,angle:s+90,speed:i}),Sh({...r,angle:s-90,speed:i}),Sh({...r,angle:s+60,speed:i}),Sh({...r,angle:s-60,speed:i}));else{const t=2===e.rank?30:45;for(let e=-90;e<=90;e+=t)pi.enemyBullet.add(Sh({...r,angle:s+e,speed:i}))}}}))};const xh=e=>{const t=(t,n)=>$(t,n,e.rank/2);let n=e.angle;const i=di.from(80).to(30,2e3,He.outSine).to(200,2e3,He.inSine).start(!1),r=di.from(!1).loopStart().wait(t(300,80)).to(!0).loopEnd().start(!1),s=C(n),a=e.x+s.x*i.value,o=e.y+s.y*i.value,l=t(2,3);return yh({...e,x:a,y:o},(s=>{i.update(),r.update(),n+=l;const a=C(n);if(s.x=e.x+a.x*i.value,s.y=e.y+a.y*i.value,r.getAndSet(!1)){const e=L(Ni.playerPos.x-s.x,Ni.playerPos.y-s.y),n=di.from(.5).to(t(2,3),t(500,300),He.inSine).start();pi.enemyBullet.add(Sh({...s,angle:e,speed:n}))}}))};const Ah=e=>{const t=(t,n)=>$(t,n,e.rank/2);let n=0,i=0,r=!1;const s=t(2,3.5);return yh({...e},(a=>{if(0===n&&(n=Ni.playerPos.y<e.y?-1:1),0===i)a.y+=s*n,(n<0&&Ni.playerPos.y>=a.y||n>0&&Ni.playerPos.y<=a.y)&&(i=Ni.playerPos.x<a.x?-1:1);else if(a.x+=s*i,!r&&(i<0&&Ni.playerPos.x>=a.x||i>0&&Ni.playerPos.x<=a.x)){const n=Ni.playerPos.y<a.y?270:90,i=t(.5,1);for(let t=0;t<e.rank+2;t++)pi.enemyBullet.add(Sh({...a,angle:n,speed:2+t*i}));r=!0}}))};const Rh=e=>{const t=(t,n)=>$(t,n,e.rank/2),n=e.x<ii.width/2?-gi.enemy.body.originRight:ii.width+gi.enemy.body.originLeft,i=di.from(e.x).to(ii.width-e.x,1e3,He.outSine).to(n,1e3,He.inSine).start(!1),r=di.from(e.y).to(e.y2,1700,He.inOutSine).to(e.y2-(e.y2-e.y)/5,300,He.inSine).start(!1),s=di.from(!0).start(!1),a=di.from(!1).to(!0);e.rank<2?s.wait(1100).to(!0):s.wait(500).to(!0).wait(500).to(!0);for(let n=0;n<2*e.rank;n++)a.wait(t(150,50)).to(!0);return yh({...e},(e=>{if(e.x=i.update().value,e.y=r.update().value,s.update().getAndSet(!1)&&a.start(!1),a.update().getAndSet(!1)){const n=L(Ni.playerPos.x-e.x,Ni.playerPos.y-e.y),i=t(12,8),r=t(1.5,3.5);pi.enemyBullet.add(Sh({...e,angle:n+i,speed:r}),Sh({...e,angle:n-i,speed:r}))}}))};const Oh=e=>{const t=(t,n)=>$(t,n,e.rank/2),n=di.from(!1).wait(t(800,500)).loopStart().to(!0).wait(t(1e3,200)).loopEnd().start(!1),i=di.from(e.y).to(e.y+10,t(500,300),He.inOutSine).to(Ni.screenTop-gi.enemy.body.originBottom,t(2500,1500),He.inSine).start(!1);let r=0,s=0,a=[],o=fi.nextInt(t(60,20));const l=t(1,2);return yh({noHorOver:!0,...e},(e=>{a.unshift(Ni.playerPos.x);const c=a[Math.min(a.length-1,o)];s+=t(5e-4,.001),r+=Math.min(Math.max(-s,c-e.x),s),e.x+=Math.min(Math.max(-l,r),l),e.y=i.update().value;const u=t(30,20);n.update().getAndSet(!1)&&pi.enemyBullet.add(Sh({...e,angle:90-u,speed:1}),Sh({...e,angle:90+u,speed:1}))}))};const Ph=e=>{const t=(t,n)=>$(t,n,e.rank/2),n=e.x<ii.width/2?ii.width+gi.enemy.body.originLeft:-gi.enemy.body.originRight,i=di.from(e.x).to(n,t(2500,1500),He.inSine).start(!1),r=di.from(e.y).to(Ni.screenTop-gi.enemy.body.originBottom-10,t(2500,1500),He.outSine).start(!1),s=di.from(!1).loopStart().wait(t(400,50)).to(!0).loopEnd().start(!1);return yh({noHorOver:!0,...e},(e=>{if(e.x=i.update().value,e.y=r.update().value,s.update().getAndSet(!1)){const n=t(30,45),i=fi.nextFloat(90-n,90+n),r=fi.nextFloat(1,2);pi.enemyBullet.add(Sh({...e,angle:i,speed:r}))}}))};const Mh=e=>{const t=(t,n)=>$(t,n,e.rank/2),n={},i=di.from(!1).wait(t(500,200)).loopStart().to(!0).wait(t(1500,1e3)).loopEnd().start(!1),r=di.from(!1).to(!0);let s=90,a=0;for(let n=0;n<1+3*e.rank;n++)r.wait(t(150,80)).to(!0);return yh({large:!0,noOver:!0,...e},(o=>{if(ri.subscribe(n),!r.running&&!r.value){const e=N(L(Ni.playerPos.x-o.x,Ni.playerPos.y-o.y)-s),n=t(1,2);s+=Math.min(Math.max(-n,e),n)}i.update().getAndSet(!1)&&(r.start(!1),a=s),r.update().getAndSet(!1)?(pi.enemyBullet.add(Sh({...o,angle:a,speed:t(2.5,2)})),e.me.fire=!0):e.me.fire=!1;const l=C(s);o.x+=.3*l.x,o.y+=.3*l.y,e.me.x=o.x,e.me.y=o.y,e.me.angle=s}))},Lh=e=>{const t=e.parent,n=C(t.angle+e.angle),i=t.x+n.x*e.dist,r=t.y+n.y*e.dist;return yh({x:i,y:r,noOver:!0,...e},(n=>{const i=C(t.angle+e.angle);var r,s;n.x=t.x+i.x*e.dist,n.y=t.y+i.y*e.dist,t.fire&&pi.enemyBullet.add(Sh({...n,id:t.id,angle:t.angle,speed:(r=1.5,s=1,$(r,s,e.rank/2))}))}))};const Nh=e=>{const t=(t,n)=>$(t,n,e.rank/2),n={},i=di.from(!1).wait(t(500,200)).loopStart().to(!0).wait(t(1500,1e3)).loopEnd().start(!1),r=di.from(e.y).loopStart().to(e.y2,4e3,He.inOutSine).to(e.y,4e3,He.inOutSine).loopEnd().start(!1),s=di.from(0).loopStart().to(t(16,22),1e3,He.outSine).to(-t(16,22),2e3,He.inOutSine).to(0,1e3,He.inSine).loopEnd().start(!1),a=di.from(!1).to(!0);for(let n=0;n<1+3*e.rank;n++)a.wait(t(150,40)).to(!0);let o=0,l=0;return yh({large:!0,...e},(c=>{ri.subscribe(n),c.x=e.x+s.update().value,c.y=r.update().value,i.update().getAndSet(!1)&&(a.start(!1),o=0,l=L(Ni.playerPos.x-c.x,Ni.playerPos.y-c.y)),a.update().getAndSet(!1)?(pi.enemyBullet.add(Sh({...c,angle:l,speed:t(2.5,1.5+.3*o)})),e.me.fire=!0,e.me.rapidNo=o++):(e.me.fire=!1,e.me.rapidNo=0),e.me.x=c.x,e.me.y=c.y}))},Ch=e=>{const t=(t,n)=>$(t,n,e.rank/2),n=e.parent,i=C(e.angle),r=n.x+i.x*e.dist,s=n.y+i.y*e.dist/2;let a=0;return yh({x:r,y:s,noOver:!0,...e},(i=>{e.angle+=t(2,1);const r=C(e.angle);i.x=n.x+r.x*e.dist,i.y=n.y+r.y*e.dist/2,n.fire&&(0===n.rapidNo&&(a=L(Ni.playerPos.x-i.x,Ni.playerPos.y-i.y)),pi.enemyBullet.add(Sh({...i,id:n.id,angle:a,speed:t(1.5,1+.2*n.rapidNo)})))}))};const Dh=e=>{const t=(t,n)=>$(t,n,e.rank/2),n={},i=gi.enemyLarge.body,r=di.from(t(3,5)).wait(t(1500,500)).to(0,t(1e3,400),He.inSine);let s={x:0,y:0};return yh({large:!0,...e},(a=>{ri.subscribe(n),r.update(),a.x+=s.x*r.value,a.y+=s.y*r.value;let o=null;if(!r.running){r.start(!1),s=D(a.x-Ni.playerPos.x,a.y-Ni.playerPos.y);const n=L(Ni.playerPos.x-a.x,Ni.playerPos.y-a.y);o=[];const i=t(2,1),l=[2,3,5][e.rank];for(let e=0;e<l;e++)o.push({angle:n+e*t(30,45),speed:i}),0<e&&e<4&&o.push({angle:n-e*t(30,45),speed:i});for(const e of o)pi.enemyBullet.add(Sh({...a,angle:e.angle,speed:e.speed}))}(a.x<i.originLeft||ii.width-i.originRight<=a.x)&&(s.x=-s.x,a.x+=s.x*r.value),(a.y<Ni.screenTop+i.originTop||ii.height-i.originBottom<=a.y)&&(s.y=-s.y,a.y+=s.y*r.value),e.me.history.push({x:a.x,y:a.y,bullets:o})}))},Uh=e=>{const t=(t,n)=>$(t,n,e.rank/2),n=e.parent,i=e.no*t(8,4),r=e.no*t(.2,.1);return yh({noOver:!0,...e},(e=>{const t=n.history.length-1-i,s=n.history[Math.max(0,t)];if(e.x=s.x,e.y=s.y,s.bullets&&0<=t)for(const t of s.bullets)pi.enemyBullet.add(Sh({...e,id:n.id,angle:t.angle,speed:t.speed-r}))}))};const Fh=e=>{const t=(t,n)=>$(t,n,e.rank/2),n=di.from(!1).wait(t(400,0)).loopStart().to(!0).wait(t(150,150)).loopEnd().start(!1),i=t(60,70),r=C(e.angle),s=e.x+r.x*i,a=e.y+r.y*i;let o=-1;return yh({large:!0,...e,x:s,y:a},(r=>{e.angle+=t(.5,1.5);const l=C(e.angle);if(r.x=e.x+l.x*i,r.y=e.y+l.y*i,n.update().getAndSet(!1)){if(o<0){const e=L(Ni.playerPos.x-s,Ni.playerPos.y-a);o=45*Math.round(e/45)+360}else o+=45;for(let t=0;t<1+e.rank**2;t++){const n=0===e.rank?di.from(4).to(2,200,He.inSine):1===e.rank?di.from(4-t/2).to(2-t/2,200,He.inSine):di.from(8-2*t).to(1,200,He.inSine);pi.enemyBullet.add(Sh({...r,angle:o,speed:n.start()}))}}}))};const Vh=[(e,t)=>{const n=e>0?1:0,i=4+2*n,r=28-4*n;let s=Ni.playerPos.x<ii.width/2?-1:1,a=(ii.width-(i-1)*r*s)/2,o=120;for(const n of U(2)){for(const n of U(i))Th({lap:e,rank:t,hp:1,x:a,y:o,wait:300}),a+=r*s;s=-s,a+=r*s,o-=r}},(e,t)=>{const n=e>0?1:0,i=4+2*n,r=20-2*n,s=Ni.playerPos.x<ii.width/2?ii.width-30:30,a=ii.height-i*r-60;for(const n of U(i))Ah({lap:e,rank:t,hp:1,x:s,y:a+r*n,wait:500})},(e,t)=>{const n=ii.width/2,i={id:0,x:n,y:60,angle:90,fire:!1};Mh({lap:e,rank:t,hp:4+2*e,x:n,y:60,me:i});for(const[n,r]of[[-100,50],[-60,30],[60,30],[100,50]])Ni.isFirstEnemy=!0,Lh({lap:e,rank:t,hp:2+e,parent:i,angle:n,dist:r})},(e,t)=>{const n=e>0?1:0,i=4+2*n,r=25-9*n,s=Ni.playerPos.x<ii.width/2?-1:1,a=(ii.width-(i-1)*r*s)/2,o=ii.height-50;for(const n of U(i))Oh({lap:e,rank:t,hp:1,x:a+n*r*s,y:o,wait:300})},(e,t)=>{const n=4+2*(e>0?1:0),i=Ni.playerPos.x<ii.width/2?ii.width-30:30,r=ii.height-40;for(const s of U(n))Ph({lap:e,rank:t,hp:1,x:i,y:r,wait:400})},(e,t)=>{const n=ii.width/2,i=ii.height-50,r={id:0,x:n,y:i,fire:!1,rapidNo:0};Nh({lap:e,rank:t,hp:4+2*e,x:n,y:i,y2:80,me:r});for(let n=0;n<360;n+=90)Ni.isFirstEnemy=!0,Ch({lap:e,rank:t,hp:2+e,parent:r,angle:n-45,dist:50})},(e,t)=>{const n=e>0?1:0,i=4+2*n,r=20-4*n,s=Ni.playerPos.x<ii.width/2?ii.width-r:r,a=Ni.playerPos.x<ii.width/2?-1:1;for(const n of U(i))kh({lap:e,rank:t,hp:1,x:s+n*r*a,y:80,wait:600})},(e,t)=>{const n=4+2*(e>0?1:0),i=Ni.playerPos.x<ii.width/2?ii.width-30:30;for(const r of U(n))Eh({lap:e,rank:t,hp:1,x:i,y:50,wait:400,no:r})},(e,t)=>{const n=ii.width/2,i={id:0,history:[{x:n,y:100,bullets:null}]};for(let r=4;0<r;r--)Ni.isFirstEnemy=!0,Uh({lap:e,rank:t,hp:2+e,x:n,y:100,parent:i,no:r});Dh({lap:e,rank:t,hp:4+2*e,x:n,y:100,me:i})},(e,t)=>{const n=e>0?1:0,i=4+2*n,r=20-4*n,s=Ni.playerPos.x<ii.width/2?30:ii.width-30;for(const n of U(i))Rh({lap:e,rank:t,hp:1,x:s,y:50+n*r,y2:ii.height-40,wait:400})},(e,t)=>{const n=2+2*(e>0?1:0),i=2===n?180:90,r=ii.width/2,s=90*fi.nextInt(4)+45;for(const a of U(n))xh({lap:e,rank:t,hp:1,x:r,y:130,wait:500,angle:s-i*a})},(e,t)=>{const n=ii.width/2;for(const i of[0,180])Ni.isFirstEnemy=!0,Fh({lap:e,rank:t,hp:4+2*e,x:n,y:135,angle:i})}];var jh=e=>{const t=(t,n,i,r,s,a)=>{const o=di.from(s).loopStart().to(-s,a).to(s,a).loopEnd().start();let l=80*r;return()=>{l+=r*e;const s=Math.abs(Math.floor(o.value)),a=Math.sign(o.value),c=Math.floor(ii.width/2-t/2+s/2),u=Math.floor(ii.width/2+t/2-s/2);ii.save(),ii.opacity(i),ii.drawRect(c,0,u-c,ii.height,Ci.main),ii.translate(0,Math.floor(l%(2*n)));for(const[e,t]of[[c,-1],[u,1]]){let i=a;ii.save();for(let r=2*-n;r<ii.height+n/2;r+=n)ii.save(),ii.translate(e,r),ii.scale(t,i),ii.drawSprite(gi.bg,0,0,s,n),ii.restore(),i=-i;ii.restore()}ii.restore()}},n=[t(100,80,.07,3,16,4e3),t(105,120,.06,2.4,24,4500),t(110,160,.05,1.8,32,5e3)];return()=>{n.forEach((e=>e()))}},Bh=e=>{e?Ui(`${e.mode}_replay`,{replay_id:e.id}):Ui(`${Ni.mode}_play`);const t={};var n;const i=Ve.of((e=>{const t={};let n=0,i="ex"===e?2:0,r=0;t.statusInitIn=()=>{Vh[0](n,i)},t.timeStart=()=>{r=0},t.enemyDestroy=()=>{r--},t.timeUp=()=>{Ve.remove(s)},Ni.isFirstEnemy=!0,Ni.enemyWaveId=0,r=1;const s=()=>{if(ri.subscribe(t),r<=0){r=pi.enemyNotice.size;const e=++Ni.enemyWaveId%Vh.length;Ni.isFirstEnemy=!0,Vh[e](n,i),e===Vh.length-1&&(n++,i=Math.min(i+1,2))}};return s})(null!==(n=null==e?void 0:e.mode)&&void 0!==n?n:Ni.mode)),r=di.from(0).wait(1e3).on((()=>{e&&pi.ui.add((()=>{const e={timeUp:()=>{Ve.remove(t)}},t=()=>{ri.subscribe(e),ii.drawSprite(Gu,F(ii,Gu),40)};return t})()),ri.emit("timeStart"),Li.play.play()})),s=di.from(Ci.base).loopStart((()=>u>0)).to(v.blend(Ci.white,Ci.accent,.1),500).to(v.blend(Ci.white,Ci.main,.1),500).loopEnd().to(Ci.base,500).start(!1),a=di.from({x:0,y:0}).to({x:1,y:-1},20).to({x:-1,y:1},40).to({x:1,y:1},40).to({x:-1,y:-1},40).to({x:0,y:0}),o=di.from({x:0,y:0}).to({x:2,y:-2},20).to({x:-2,y:2},40).to({x:2,y:2},40).to({x:-2,y:-2},40).to({x:1,y:-1},40).to({x:-1,y:1},40).to({x:1,y:1},40).to({x:-1,y:-1},40).to({x:0,y:0});let l,c=0,u=60*ni.fps;const h=fi.updateSeed();let d=!1,p=0;t.statusInitIn=()=>{pi.ui.add((()=>{const e={},t=di.from(-100).wait(100).to(44).to(54,300,He.outSine).wait(600).on((()=>{Ve.remove(n)})).start();e.timeUp=()=>{t.start()};const n=()=>{ri.subscribe(e),ii.drawSprite(zu,F(ii,zu),t.value)};return n})()),r.start()},t.enemyTake=e=>{d||e.large&&o.start()},t.playerDestroy=()=>{d||(e||Ui(`${Ni.mode}_dead`,{time:u,wave_id:Ni.enemyWaveId-1}),a.start(),p++)},t.statusFinOut=()=>{di.from(0).wait(200).on((()=>{pi.ui.add(Hu(c,l))})).wait(300).on((()=>{Li.result.play(),Li.play.stop()})).start()},t.sceneChange=()=>{u>0&&!e&&Ui(`${Ni.mode}_reset`,{time:u,wave_id:Ni.enemyWaveId-1,dead_count:p})};const f=Fu();if(pi.ui.add((()=>f(c,Ni.heart,u))),pi.player.add(rh(Boolean(e))),pi.bg.add(jh(1)),Ni.heart=0,Ni.heartRate=0,Ni.isSuccess=!1,Ni.clearing.reset(),e){const t=B(function(e){const t=[];let n=0,i=!0;for(const r of e){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".indexOf(r);if(e<0)throw Error("invalid string");i&&16&e&&(n=-1),i=!1,n=n<<5|31&e,0==(32&e)&&(t.push(n),n=0,i=!0)}return t}(e.log),hi.length);fi.seed=e.seed,hi.forEach(((e,n)=>{e.log=t[n],e.playLog()}))}else for(const e of hi)e.recLog();return()=>{if(ri.subscribe(t),r.done&&u--,0<=u&&u%ni.fps==0&&(c+=10*Ni.heart,Ni.isSuccess=1e6<=c),0===u){e||Ui(`${Ni.mode}_finish`,{wave_id:Ni.enemyWaveId-1,dead_count:p}),d=!0,ri.emit("timeUp"),pi.ui.add((()=>{const e={},t=di.from(54).to(44,300,He.outSine).start();e.timeUp=()=>{t.start()},e.newRecordShow=()=>{Ve.remove(n)};const n=()=>{ri.subscribe(e),ii.drawSprite(Ku,F(ii,Ku),t.value)};return n})());for(const e of hi)e.endLog();e||(l=q.from(ou({version:0,log:V(j(...hi.map((e=>e.log)))),score:c,seed:h,mode:Ni.mode})))}(null==l?void 0:l.isResolved())&&mu(l.value.replayId),ii.save(),Ni.isSuccess&&s.update(),ii.drawRect(0,0,ii.width,ii.height,s.value),o.running?ii.translate(o.value.x,o.value.y):a.running&&ii.translate(a.value.x,a.value.y),i.run(),pi.bg.run(),pi.effectBack.run(),pi.enemyNotice.run(),pi.player.run(),pi.playerBullet.run(),pi.effectOverPlayer.run(),pi.enemy.run(),pi.enemyBullet.run(),pi.effectOverEnemy.run(),ii.restore(),pi.ui.run()}},$h=()=>{const e=fu(),t=e?q.from(qc(e)):void 0;var n;const i=()=>{var e;return"ex"===(null!==(n=null==t||null===(e=t.value)||void 0===e?void 0:e.mode)&&void 0!==n?n:Ni.mode)},r=v.blend(Ci.white,Ci.accent,.1);let s=!1;pi.ui.add(vu(t),(e=>{const t=di.from(!1).wait(1300).on((()=>{var t;return!e||0===(null===(t=e.value)||void 0===t?void 0:t.version)})).loopStart().to(!0,800).to(!1,400).loopEnd().start();return()=>{t.value&&ii.drawSprite(Lu,F(ii,Lu),215)}})(t),(()=>{const e=di.from(!1).to(!0,100).to(!1);let t="true"===localStorage.getItem("mute");const n=()=>{t=!t,localStorage.setItem("mute",String(t)),Object.values(Oi).forEach((e=>e.setMute(t))),Object.values(Li).forEach((e=>e.setMute(t))),e.start(),Oi.uiButton.play()};return()=>{const i=bu[t?1:0],r=(s=i,ii.width-s.width-7);var s;oi.onDown(i.toBox(r,7),n),ii.drawSprite(i,r,7),e.value&&(ii.save(),ii.opacity(.5),ii.drawSprite(_u,r,7),ii.restore())}})()),t?pi.ui.add((()=>{const e=di.from(!1).to(!0,100).to(!1).on((()=>{ri.emit("sceneChange",(()=>(mu(""),$h())))})),t=()=>{e.started||(e.start(),Oi.uiButton.play())};return()=>{oi.onDown(Pu.toBox(7,7),t),ii.drawSprite(Pu,7,7),e.value&&(ii.save(),ii.opacity(.5),ii.drawSprite(Mu,7,7),ii.restore())}})(),(e=>{const t=di.from(0).wait(500).start(),n=di.from(0).wait(100);let i=Ou;e.then((e=>{if(!e)throw Error("replay is not found");if(0!==e.version)throw Error("invalid replay version");i=Ru,n.to(e.score,300,He.inSine).start(!1)}));const r=Tu(115,74,"REPLAY"),s=Au(3,16);return()=>{t.done&&(ii.save(),r((e=>{ii.translate(e.x,e.y),s(n.update().value),ii.drawSprite(i,F(e,Ou),46)})),ii.restore())}})(t)):pi.ui.add((()=>{const e=()=>{const e=new URLSearchParams({text:`#FireShooterSan\n${uu()}`});window.open(`https://twitter.com/intent/tweet?${e}`)};return()=>{oi.onDown(wu.toBox(7,7),e),ii.drawSprite(wu,7,7)}})(),(()=>{var e;let t=Number(null!==(e=localStorage.getItem("tips-no"))&&void 0!==e?e:-1);t=(t+1)%12,localStorage.setItem("tips-no",String(t));const n=ku[t];11===t&&Ui("tips_complete");const i=di.from(0).wait(700).start(),r=di.from(!1).loopStart().to(!1,800).to(!0,800).loopEnd().start(!1),s=di.from(!1).loopStart().to(!1,200).to(!0,200).loopEnd().start(!1),a=Tu(130,Math.max(n.height+12,60),`TIPS ${t+1}/12`);return()=>{i.done&&a((e=>{ii.save(),ii.translate(e.x+F(e,n)|0,e.y+function(e,t){return(e.height-t.height)/2}(e,n)|0),ii.drawSprite(n),r.update(),s.update(),0===t&&s.value&&ii.drawSprite(ku.million,39,31),1===t&&s.value&&ii.drawRect(90,18,2,2,Ci.white),1===t&&r.value&&ii.drawSprite(ku.arrow,63,16),2===t&&r.value&&ii.drawSprite(ku.heart,0,16),3===t&&r.value&&(ii.drawSprite(ku.heart,41,1),ii.drawSprite(ku.heart,40,31)),4===t&&r.value&&ii.drawSprite(ku.heart,41,31),5===t&&r.value&&(ii.drawSprite(ku.heart,51,1),ii.drawSprite(ku.score,40,17)),6===t&&s.value&&ii.drawSprite(ku.million,0,2),10===t&&r.value&&ii.drawSprite(ku.user,0,14),ii.restore()}))}})()),pi.bg.add(jh(.3)),Object.values(Li).forEach((e=>e.stop())),Ci.base=i()?r:Ci.white;let a=di.from(Ci.base),o=i();return()=>{var e;if(o!==i()&&(o=i(),Ci.base=i()?r:Ci.white,a.end(),a=di.from(a.value).to(Ci.base,300).start()),!s&&(!t||0===(null===(e=t.value)||void 0===e?void 0:e.version))&&ui.some((e=>e.isDownChange))){s=!0;const e=()=>{ri.emit("sceneChange",(()=>Bh(null==t?void 0:t.value)))};pi.ui.add(qu({times:2,onEnd:e})),Oi.titleStart.play()}ii.drawRect(0,0,ii.width,ii.height,a.value),pi.bg.run(),pi.ui.run()}};const qh={};let Wh=$h,Hh=Wh();const zh=di.from(0).wait(100).to(ii.height,200).start(),Gh=di.from(-ii.height).to(0,200).on((()=>{di.clear(),Object.values(ai).forEach((e=>e.endLog())),oi.endLog(),Object.values(pi).forEach((e=>e.clear())),Hh=Wh(),zh.start()}));var Kh;qh.sceneChange=e=>{Wh=e,Gh.start()},cu=()=>ri.emit("sceneChange",$h),Kh="true"===localStorage.getItem("mute"),Object.values(Oi).forEach((e=>e.setMute(Kh))),Object.values(Li).forEach((e=>e.setMute(Kh))),Ni.mode=hu(),ni.proc=()=>{ii.clear(),ri.clear(),si.clear(),Object.values(ai).forEach((e=>e.update())),oi.update(),di.update(),ri.subscribe(qh),ai.reset.isDownChange&&!Gh.running&&ri.emit("sceneChange",(()=>(mu(""),$h()))),Hh();const e=[zh,Gh].find((e=>e.running));e&&ii.drawRect(0,e.value,ii.width,ii.height,Ci.base)};