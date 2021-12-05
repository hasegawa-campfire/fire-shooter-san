function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequirebae0;function s(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e).value}function a(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");var i=t.get(e);if(!i.writable)throw new TypeError("attempted to set read only private field");return i.value=n,n}function o(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequirebae0=r),r.register("3y7ul",(function(t,n){var i,r;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var s={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},r=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("3y7ul").register(JSON.parse('{"9KFsc":"index.f59bc936.js","7QRtv":"image.cb6b04ad.png","6t7Zz":"sonohoka_pyokottohaeru.ebb39909.wav","eGD62":"hit_kyouda4.c2fae92b.wav","QPPni":"se_etc_003.751a5cc1.wav","7Rhg3":"se_shot_003.7192b630.wav","fQj5x":"kaminarikei_chisaikaminari.a1aac738.wav","8W3sW":"wind3.87bf4484.wav","bQiPl":"cancel2.e1adafec.wav","iQ7l0":"shoot9.2235e996.wav","a9RsU":"mamono_tsukon2.40b037d7.wav","6RTqz":"se_powerup_004.fb62fc04.wav","ltoOe":"se_powerup_008.fd5e1090.wav","2GqAh":"souchi_kaifukusouchi.b8152e4c.wav","hq5Ck":"hit_tsujou3.4da24c3a.wav","csyRH":"audiostock_49758.e0483042.mp3","7daCL":"audiostock_49543.c0017692.mp3"}'));var c=new WeakSet;var u=new WeakMap,h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap;function m(){window.cancelAnimationFrame(s(this,d)),"visible"===document.visibilityState&&a(this,d,window.requestAnimationFrame(s(this,p)))}const g=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$|^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,y={};class v{get red(){return s(this,w)}set red(e){a(this,w,e),a(this,S,"")}get green(){return s(this,b)}set green(e){a(this,b,e),a(this,S,"")}get blue(){return s(this,_)}set blue(e){a(this,_,e),a(this,S,"")}get alpha(){return s(this,I)}set alpha(e){a(this,I,e),a(this,S,"")}toString(){return s(this,S)||a(this,S,"#"+T(s(this,w))+T(s(this,b))+T(s(this,_))+T(s(this,I))),s(this,S)}opacity(e){const t=new v(this);return t.alpha=Math.min(Math.max(0,s(this,I)*e),1),t}static parse(e){let t=y[e];if(!t){const n=e.match(g)||[];t=y[e]={red:parseInt(n[1]||n[5]+n[5]||"0",16)/255,green:parseInt(n[2]||n[6]+n[6]||"0",16)/255,blue:parseInt(n[3]||n[7]+n[7]||"0",16)/255,alpha:parseInt(n[4]||n[8]+n[8]||"ff",16)/255}}return new v(t)}static blend(e,t,n=.5){return new v({red:(t.red-e.red)*n+e.red,green:(t.green-e.green)*n+e.green,blue:(t.blue-e.blue)*n+e.blue,alpha:(t.alpha-e.alpha)*n+e.alpha})}constructor(e={}){var t,n,i,r;w.set(this,{writable:!0,value:void 0}),b.set(this,{writable:!0,value:void 0}),_.set(this,{writable:!0,value:void 0}),I.set(this,{writable:!0,value:void 0}),S.set(this,{writable:!0,value:""}),a(this,w,null!==(t=e.red)&&void 0!==t?t:0),a(this,b,null!==(n=e.green)&&void 0!==n?n:0),a(this,_,null!==(i=e.blue)&&void 0!==i?i:0),a(this,I,null!==(r=e.alpha)&&void 0!==r?r:1)}}var w=new WeakMap,b=new WeakMap,_=new WeakMap,I=new WeakMap,S=new WeakMap;function T(e){return Math.min(Math.max(0,Math.floor(255*e)),255).toString(16).padStart(2,"0")}const k={};class E{static load(e,t={}){const n=e instanceof URL?e.href:e;let i=k[n];return i||(i=k[n]=new Image,i.src=n),new E(i,t)}get x(){var e;return null!==(e=s(this,x).x)&&void 0!==e?e:0}get y(){var e;return null!==(e=s(this,x).y)&&void 0!==e?e:0}get width(){var e;return null!==(e=s(this,x).width)&&void 0!==e?e:this.image.width}get height(){var e;return null!==(e=s(this,x).height)&&void 0!==e?e:this.image.height}get originX(){var e;return null!==(e=s(this,x).originX)&&void 0!==e?e:0}get originY(){var e;return null!==(e=s(this,x).originY)&&void 0!==e?e:0}get originLeft(){return this.originX}get originTop(){return this.originY}get originRight(){return this.width-this.originX}get originBottom(){return this.height-this.originY}sub(e){const t={...s(this,x)};var n,i,r,a,o,l;return void 0!==e.x&&(t.x=e.x+(null!==(n=t.x)&&void 0!==n?n:0)),void 0!==e.y&&(t.y=e.y+(null!==(i=t.y)&&void 0!==i?i:0)),void 0!==e.width&&(t.width=e.width+(null!==(r=t.width)&&void 0!==r?r:0)),void 0!==e.height&&(t.height=e.height+(null!==(a=t.height)&&void 0!==a?a:0)),void 0!==e.originX&&(t.originX=e.originX+(null!==(o=t.originX)&&void 0!==o?o:0)),void 0!==e.originY&&(t.originY=e.originY+(null!==(l=t.originY)&&void 0!==l?l:0)),new E(this.image,t)}static loadMap(e,t){const n=t=>{if(Array.isArray(t)){const[n,i,r,s,a,o]=t;return E.load(e,{x:n,y:i,width:r,height:s,originX:null!=a?a:0,originY:null!=o?o:0})}const i=Object.entries(t).map((([e,t])=>[e,n(t)]));return Object.fromEntries(i)};return n(t)}toBox(e,t){return{x:e,y:t,width:this.width,height:this.height,originX:this.originX,originY:this.originY}}constructor(e,t={}){x.set(this,{writable:!0,value:void 0}),this.image=e,a(this,x,{...t})}}var x=new WeakMap;const A={normal:"source-over",add:"lighter",multiply:"multiply",screen:"screen",overlay:"overlay"};var R=new WeakSet;var O=new WeakMap;function P(){const e=this.canvas.width/window.devicePixelRatio,t=this.canvas.height/window.devicePixelRatio,n=Math.floor(window.innerWidth/e),i=Math.floor(window.innerHeight/t);this.canvas.style.width=Math.max(Math.min(n,i),1)*e+"px"}function M(e){return e.toLocaleString("en-US")}function L(e,t){return Math.atan2(t,e)*(180/Math.PI)}function N(e){return(e%=360)<0&&(e+=360),e>180&&(e-=360),e}function C(e,t=1){const n=e*(Math.PI/180);return{x:Math.cos(n)*t,y:Math.sin(n)*t}}function D(e,t){const n=function(e,t){return Math.sqrt(e*e+t*t)}(e,t);return{x:e/n,y:t/n}}function U(e){return Array.from({length:e}).map(((e,t)=>t))}function F(e,t){return(e.width-t.width)/2}function V(e){let t="";for(let n of e){n=Math.floor(n);let e=(0<=n?n:-n-1).toString(2).length+1,i=0,r="";for(;e>0;)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[31&n|i]+r,e-=5,n>>=5,i=32;t+=r}return t}function j(...e){let t=[];for(const n of e)t=t.concat(n.length,n);return t}function B(e,t){const n=[];let i=0;for(let r=0;r<t;r++){const t=i+1+e[i];if(e.length<t)throw Error("invalid pack size");n.push(e.slice(i+1,t)),i=t}return n}function $(e,t,n){return(t-e)*n+e}class q{then(e,t){return new q(s(this,W).then(e,t))}isResolved(){return s(this,H)}get value(){return s(this,z)}static from(e){return new q("function"==typeof e?e():e)}constructor(e){W.set(this,{writable:!0,value:void 0}),H.set(this,{writable:!0,value:!1}),z.set(this,{writable:!0,value:void 0}),a(this,W,e),e.then((e=>{a(this,H,!0),a(this,z,e)}))}}var W=new WeakMap,H=new WeakMap,z=new WeakMap;const G=window.webkitAudioContext||window.AudioContext,K=q.from((async()=>{await function(e,t){const n=Array.isArray(t)?t:[t];return Promise.race(n.map((t=>new Promise((n=>e.addEventListener(t,n))))))}(document,["touchstart","mousedown","keydown"]);const e=new G,t=()=>"visible"===document.visibilityState?e.resume():e.suspend();return await t(),document.addEventListener("visibilitychange",t),e}));var J=new WeakSet;class Y{play(){if(a(this,ae,!0),K.isResolved()&&s(this,ie).isResolved()&&s(this,re).isResolved()){if(K.value.currentTime-s(this,ne)>=s(this,Z)){var e,t,n;if(null===(e=s(this,se))||void 0===e||e.stop(),a(this,se,K.value.createBufferSource()),"boolean"==typeof s(this,ee))s(this,se).loop=s(this,ee);else s(this,se).loop=!0,s(this,se).loopStart=null!==(t=s(this,ee).start)&&void 0!==t?t:0,s(this,se).loopEnd=null!==(n=s(this,ee).end)&&void 0!==n?n:0;s(this,se).buffer=s(this,ie).value,s(this,se).connect(s(this,re).value),s(this,se).start(),a(this,ne,K.value.currentTime)}}else Promise.all([K,s(this,ie),s(this,re)]).then((()=>{s(this,ae)&&this.play()}))}stop(){var e;a(this,ae,!1),null===(e=s(this,se))||void 0===e||e.stop(),a(this,se,null)}setMute(e){a(this,te,e),o(this,J,oe).call(this)}setVolume(e){a(this,Q,e),o(this,J,oe).call(this)}constructor(e,t={}){var n,i,r,o;X.set(this,{writable:!0,value:void 0}),Q.set(this,{writable:!0,value:1}),Z.set(this,{writable:!0,value:void 0}),ee.set(this,{writable:!0,value:void 0}),te.set(this,{writable:!0,value:void 0}),ne.set(this,{writable:!0,value:Number.MIN_SAFE_INTEGER}),ie.set(this,{writable:!0,value:void 0}),re.set(this,{writable:!0,value:void 0}),se.set(this,{writable:!0,value:null}),ae.set(this,{writable:!0,value:!0}),J.add(this),a(this,X,null!==(n=t.volume)&&void 0!==n?n:1),a(this,Z,null!==(i=t.minTime)&&void 0!==i?i:0),a(this,ee,null!==(r=t.loop)&&void 0!==r&&r),a(this,te,null!==(o=t.mute)&&void 0!==o&&o),a(this,ie,q.from((async()=>{const t=await fetch(e instanceof URL?e.href:e),n=await t.arrayBuffer();return(await K).decodeAudioData(n)}))),a(this,re,q.from((async()=>{const e=await K,t=e.createGain();return t.gain.value=s(this,te)?0:s(this,Q)*s(this,X),t.connect(e.destination),t})))}}var X=new WeakMap,Q=new WeakMap,Z=new WeakMap,ee=new WeakMap,te=new WeakMap,ne=new WeakMap,ie=new WeakMap,re=new WeakMap,se=new WeakMap,ae=new WeakMap;function oe(){s(this,re).isResolved()&&(s(this,re).value.gain.value=s(this,te)?0:s(this,Q)*s(this,X))}class le extends Y{constructor(e,t,n){super(e,{volume:t,minTime:n})}}class ce extends Y{constructor(e,t,n){super(e,{volume:t,loop:n})}}var ue=new WeakMap,he=new WeakMap;var de=new WeakMap,fe=new WeakMap;const pe=[" ","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"];function me(e){return e instanceof HTMLElement&&!!e.closest("input, textarea, select, button")}window.addEventListener("keydown",(e=>{pe.includes(e.key)&&!me(e.target)&&e.preventDefault()}));let ge={};window.addEventListener("keydown",(e=>{me(e.target)||(ge[e.key.toLocaleLowerCase()]=!0)})),window.addEventListener("keyup",(e=>{me(e.target)||(ge[e.key.toLocaleLowerCase()]=!1)})),window.addEventListener("blur",(()=>{ge={}}));class ye{update(){a(this,be,s(this,we)),"play"===s(this,Te)?(a(this,_e,1+ +s(this,_e)),s(this,Ie)[s(this,Se)]<s(this,_e)&&(a(this,we,!s(this,we)),a(this,_e,0),a(this,Se,1+ +s(this,Se)))):(a(this,we,s(this,ve).some((e=>ge[e]))),a(this,_e,s(this,we)===s(this,be)?s(this,_e)+1:0)),"rec"===s(this,Te)&&(s(this,we)===s(this,be)?s(this,Ie)[s(this,Ie).length-1]=s(this,_e):s(this,Ie).push(s(this,_e)))}get isDown(){return s(this,we)}get isDownChange(){return s(this,we)&&!s(this,be)}get isUpChange(){return!s(this,we)&&s(this,be)}get downCount(){return s(this,we)?s(this,_e):NaN}get upCount(){return s(this,we)?NaN:s(this,_e)}get logMode(){return s(this,Te)}get log(){return s(this,Ie).slice()}set log(e){a(this,Ie,e.slice()),a(this,Te,"pause")}recLog(){a(this,Ie,[s(this,_e),s(this,be)?1:0,s(this,we)?1:0,s(this,_e)]),a(this,Te,"rec")}playLog(){a(this,_e,s(this,Ie)[0]),a(this,be,Boolean(s(this,Ie)[1])),a(this,we,Boolean(s(this,Ie)[2])),a(this,Se,3),a(this,Te,"play")}endLog(){a(this,Te,"pause")}constructor(e){ve.set(this,{writable:!0,value:void 0}),we.set(this,{writable:!0,value:!1}),be.set(this,{writable:!0,value:!1}),_e.set(this,{writable:!0,value:0}),Ie.set(this,{writable:!0,value:[]}),Se.set(this,{writable:!0,value:0}),Te.set(this,{writable:!0,value:"pause"}),a(this,ve,(Array.isArray(e)?e:[e]).map((e=>e.toLocaleLowerCase())))}}var ve=new WeakMap,we=new WeakMap,be=new WeakMap,_e=new WeakMap,Ie=new WeakMap,Se=new WeakMap,Te=new WeakMap;window.addEventListener("contextmenu",(e=>e.preventDefault()));let ke=null,Ee={x:0,y:0};window.addEventListener("pointerdown",(e=>{ke=e.target,Ee.x=e.clientX,Ee.y=e.clientY})),window.addEventListener("pointerup",(e=>{ke=null})),window.addEventListener("pointercancel",(e=>{ke=null})),window.addEventListener("pointermove",(e=>{Ee.x=e.clientX,Ee.y=e.clientY})),window.addEventListener("blur",(()=>{ke=null}));de=new WeakMap,we=new WeakMap,be=new WeakMap,_e=new WeakMap;var xe=new WeakMap,Ae=new WeakMap,Re=new WeakMap,Oe=new WeakMap,Pe=new WeakMap,Me=new WeakMap,Le=(Ie=new WeakMap,Se=new WeakMap,new WeakMap),Ne=new WeakMap,Ce=new WeakMap,De=new WeakMap,Ue=(Te=new WeakMap,new WeakMap),Fe=new WeakMap;const Ve=new WeakMap;class je{add(...e){for(const t of e)je.remove(t),s(this,Be).add(t),Ve.set(t,s(this,Be))}run(...e){for(const t of s(this,Be))t(...e)}clear(){s(this,Be).clear()}get isEmpty(){return!s(this,Be).size}get size(){return s(this,Be).size}static remove(e){const t=Ve.get(e);let n=!1;return t&&(n=t.delete(e),Ve.delete(e)),n}static of(...e){const t=new je;return t.add(...e),t}constructor(){Be.set(this,{writable:!0,value:new Set})}}var Be=new WeakMap;var $e=new WeakMap;function qe(e){return e instanceof v?new v(e):"object"==typeof e?Object.fromEntries(Object.entries(e).map((([e,t])=>[e,qe(t)]))):e}function We(e,t,n){return e instanceof v&&t instanceof v?v.blend(e,t,n):"number"==typeof e&&"number"==typeof t?(t-e)*n+e:"boolean"==typeof e&&"boolean"==typeof t?n>0?t:e:"object"==typeof e&&"object"==typeof t?Object.fromEntries(Object.keys(e).map((i=>[i,We(e[i],t[i],n)]))):qe(void 0===t?e:t)}function He(e){return t=>t<=0?0:1<=t?1:e(t)}class ze{reset(){s(this,Je)&&s(this,Je).delete(this),a(this,Ze,!1),a(this,Ge,0),a(this,Xe,0),a(this,Qe,null),this.value=qe(s(this,et))}start(e){var t,n;return!1===e?null===(t=s(this,Je))||void 0===t||t.delete(this):null===(n=s(this,Je))||void 0===n||n.add(this),a(this,Ze,!0),a(this,Ge,0),a(this,Xe,0),a(this,Qe,null),this.value=qe(s(this,et)),this}end(){s(this,Je)&&s(this,Je).delete(this),a(this,Ze,!0),a(this,Xe,s(this,Ye).length),a(this,Qe,null),this.value=qe(s(this,tt))}to(e,t=0,n=ze.linear){t=Math.max(t,0);const i=a(this,tt,qe(e));return s(this,Ye).push((()=>{const e=qe(this.value);return()=>{if(s(this,Ge)<=t)return this.value=We(e,i,n(s(this,Ge)/t)),!0;a(this,Ge,s(this,Ge)-t),this.value=qe(i)}})),this}wait(e){return e=Math.max(e,0),s(this,Ye).push((()=>()=>{if(s(this,Ge)<=e)return!0;a(this,Ge,s(this,Ge)-e)})),this}on(e){return s(this,Ye).push((()=>{const t=s(this,Ge);return()=>(a(this,Ge,t),!1===e())})),this}loopStart(e=1/0,t){const n="number"==typeof e?t=>t<e:e;s(this,Ye).push((()=>()=>{s(this,nt)[i]=0,t&&(s(this,st)[t]=0)}));const i=s(this,Ye).length;return s(this,it).push(i),s(this,nt)[i]=0,s(this,Ye).push((()=>()=>{let e=s(this,nt)[i];t&&(s(this,st)[t]=e),n(e)||(a(this,Xe,s(this,rt)[i]),a(this,Qe,null))})),this}loopEnd(){const e=s(this,Ye).length,t=s(this,it).pop();if(void 0===t)throw Error("no corresponding loopStart()");return s(this,rt)[t]=e,s(this,Ye).push((()=>()=>{s(this,nt)[t]++,a(this,Xe,t-1),a(this,Qe,null)})),this}update(e){if(e=null!=e?e:"function"==typeof s(this,Ke)?s(this,Ke).call(this):s(this,Ke),this.running){a(this,Ge,s(this,Ge)+Math.max(0,e));do{if(s(this,Qe)||a(this,Qe,s(this,Ye)[s(this,Xe)]()),s(this,Qe).call(this))break;a(this,Qe,null),a(this,Xe,1+ +s(this,Xe))}while(this.running)}return this}get done(){return s(this,Xe)>=s(this,Ye).length}get started(){return s(this,Ze)}get running(){return this.started&&!this.done}getAndSet(e){const t=this.value;return this.value=e,t}get loops(){return s(this,st)}constructor(e,t=1,n){Ge.set(this,{writable:!0,value:0}),Ke.set(this,{writable:!0,value:void 0}),Je.set(this,{writable:!0,value:void 0}),Ye.set(this,{writable:!0,value:[]}),Xe.set(this,{writable:!0,value:0}),Qe.set(this,{writable:!0,value:null}),Ze.set(this,{writable:!0,value:!1}),et.set(this,{writable:!0,value:void 0}),tt.set(this,{writable:!0,value:void 0}),nt.set(this,{writable:!0,value:{}}),it.set(this,{writable:!0,value:[]}),rt.set(this,{writable:!0,value:{}}),st.set(this,{writable:!0,value:{}}),l(this,"value",void 0),a(this,Ke,t),a(this,Je,n),a(this,et,a(this,tt,qe(e))),this.value=qe(e)}}l(ze,"linear",He((e=>e))),l(ze,"inSine",He((e=>1-Math.cos(e*(Math.PI/2))))),l(ze,"outSine",He((e=>Math.sin(e*(Math.PI/2))))),l(ze,"inOutSine",He((e=>e<.5?.5*ze.inSine(2*e):.5+.5*ze.outSine(2*(e-.5))))),l(ze,"steps",(e=>He((t=>Math.ceil(t*e)/e)))),l(ze,"frameSteps",(e=>He((t=>Math.floor(t*e)/(e-1)))));var Ge=new WeakMap,Ke=new WeakMap,Je=new WeakMap,Ye=new WeakMap,Xe=new WeakMap,Qe=new WeakMap,Ze=new WeakMap,et=new WeakMap,tt=new WeakMap,nt=new WeakMap,it=new WeakMap,rt=new WeakMap,st=new WeakMap;var at=new WeakMap,ot=new WeakMap,lt=new WeakMap;
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
const ct=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296==(64512&r)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},ut={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const r=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,l=o?e[t+2]:0,c=r>>2,u=(3&r)<<4|a>>4;let h=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(h=64)),i.push(n[c],n[u],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ct(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=((7&r)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(s>>10)),t[i++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],a=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const r=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const o=t<e.length?n[e.charAt(t)]:64;if(++t,null==r||null==s||null==a||null==o)throw Error();const l=r<<2|s>>4;if(i.push(l),64!==a){const e=s<<4&240|a>>2;if(i.push(e),64!==o){const e=a<<6&192|o;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},ht=function(e){try{return ut.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
class dt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
function ft(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function pt(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function mt(){return"object"==typeof indexedDB}function gt(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function yt(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}class vt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,vt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wt.prototype.create)}}class wt{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?function(e,t){return e.replace(bt,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(r,n):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new vt(i,a,n)}}const bt=/\{\$([^}]+)}/g;
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
 */function _t(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(It(n)&&It(s)){if(!_t(n,s))return!1}else if(n!==s)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function It(e){return null!==e&&"object"==typeof e}
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
 */function St(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function Tt(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function kt(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class Et{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=xt),void 0===i.error&&(i.error=xt),void 0===i.complete&&(i.complete=xt);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function xt(){}
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
 */function At(e,t=1e3,n=2){const i=t*Math.pow(n,e),r=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+r)}
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
function Rt(e){return e&&e._delegate?e._delegate:e}class Ot{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
class Pt{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new dt;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,"[DEFAULT]"===i?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}
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
class Mt{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Pt(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */const Lt=[];var Nt,Ct;(Ct=Nt||(Nt={}))[Ct.DEBUG=0]="DEBUG",Ct[Ct.VERBOSE=1]="VERBOSE",Ct[Ct.INFO=2]="INFO",Ct[Ct.WARN=3]="WARN",Ct[Ct.ERROR=4]="ERROR",Ct[Ct.SILENT=5]="SILENT";const Dt={debug:Nt.DEBUG,verbose:Nt.VERBOSE,info:Nt.INFO,warn:Nt.WARN,error:Nt.ERROR,silent:Nt.SILENT},Ut=Nt.INFO,Ft={[Nt.DEBUG]:"log",[Nt.VERBOSE]:"log",[Nt.INFO]:"info",[Nt.WARN]:"warn",[Nt.ERROR]:"error"},Vt=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=Ft[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class jt{constructor(e){this.name=e,this._logLevel=Ut,this._logHandler=Vt,this._userLogHandler=null,Lt.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Nt))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Dt[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Nt.DEBUG,...e),this._logHandler(this,Nt.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Nt.VERBOSE,...e),this._logHandler(this,Nt.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Nt.INFO,...e),this._logHandler(this,Nt.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Nt.WARN,...e),this._logHandler(this,Nt.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Nt.ERROR,...e),this._logHandler(this,Nt.ERROR,...e)}}
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
class Bt{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const $t=new jt("@firebase/app"),qt={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Wt=new Map,Ht=new Map;function zt(e,t){try{e.container.addComponent(t)}catch(n){$t.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Gt(e){const t=e.name;if(Ht.has(t))return $t.debug(`There were multiple attempts to register component ${t}.`),!1;Ht.set(t,e);for(const t of Wt.values())zt(t,e);return!0}function Kt(e,t){return e.container.getProvider(t)}
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
const Jt=new wt("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class Yt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ot("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jt.create("app-deleted",{appName:this._name})}}
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
 */function Xt(e="[DEFAULT]"){const t=Wt.get(e);if(!t)throw Jt.create("no-app",{appName:e});return t}function Qt(e,t,n){var i;let r=null!==(i=qt[e])&&void 0!==i?i:e;n&&(r+=`-${n}`);const s=r.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${r}" with version "${t}":`];return s&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void $t.warn(e.join(" "))}Gt(new Ot(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
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
var Zt;Zt="",Gt(new Ot("platform-logger",(e=>new Bt(e)),"PRIVATE")),Qt("@firebase/app","0.7.10",Zt),Qt("@firebase/app","0.7.10","esm2017"),Qt("fire-js","");
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
Qt("firebase","9.6.0","app");var en={};!function(e,t){"object"==typeof en?t(en):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).idb={})}(en,(function(e){function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function i(e,t,i){var r,s=new Promise((function(s,a){n(r=e[t].apply(e,i)).then(s,a)}));return s.request=r,s}function r(e,t,n){var r=i(e,t,n);return r.then((function(e){if(e)return new u(e,r.request)}))}function s(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function a(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function o(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return this[t][i].apply(this[t],arguments)})}))}function l(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function c(e){this._index=e}function u(e,t){this._cursor=e,this._request=t}function h(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function f(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function p(e){this._db=e}s(c,"_index",["name","keyPath","multiEntry","unique"]),a(c,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),l(c,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(u,"_cursor",["direction","key","primaryKey","value"]),a(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(u.prototype[e]=function(){var t=this,i=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,i),n(t._request).then((function(e){if(e)return new u(e,t._request)}))}))})})),h.prototype.createIndex=function(){return new c(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new c(this._store.index.apply(this._store,arguments))},s(h,"_store",["name","keyPath","indexNames","autoIncrement"]),a(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),l(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),o(h,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},s(d,"_tx",["objectStoreNames","mode"]),o(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),o(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),o(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[h,c].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),i=n[n.length-1],r=this._store||this._index,s=r[e].apply(r,n.slice(0,-1));s.onsuccess=function(){i(s.result)}})}))})),[c,h].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,i=[];return new Promise((function(r){n.iterateCursor(e,(function(e){e?(i.push(e.value),void 0===t||i.length!=t?e.continue():r(i)):r(i)}))}))})})),e.openDb=function(e,t,n){var r=i(indexedDB,"open",[e,t]),s=r.request;return s&&(s.onupgradeneeded=function(e){n&&n(new f(s.result,e.oldVersion,s.transaction))}),r.then((function(e){return new p(e)}))},e.deleteDb=function(e){return i(indexedDB,"deleteDatabase",[e])},Object.defineProperty(e,"__esModule",{value:!0})}));const tn=new wt("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function nn(e){return e instanceof vt&&e.code.includes("request-failed")}
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
 */function rn({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function sn(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function an(e,t){const n=(await t.json()).error;return tn.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function on({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ln(e,{refreshToken:t}){const n=on(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
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
 */(t)),n}async function cn(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
 */function un(e){return new Promise((t=>{setTimeout(t,e)}))}
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
const hn=/^[cdef][\w-]{21}$/;function dn(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
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
 */(e);return hn.test(t)?t:""}catch(e){return""}}function fn(e){return`${e.appName}!${e.appId}`}
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
 */const pn=new Map;function mn(e,t){const n=fn(e);gn(n,t),function(e,t){const n=vn();n&&n.postMessage({key:e,fid:t});wn()}(n,t)}function gn(e,t){const n=pn.get(e);if(n)for(const e of n)e(t)}let yn=null;function vn(){return!yn&&"BroadcastChannel"in self&&(yn=new BroadcastChannel("[Firebase] FID Change"),yn.onmessage=e=>{gn(e.data.key,e.data.fid)}),yn}function wn(){0===pn.size&&yn&&(yn.close(),yn=null)}
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
 */let bn=null;function _n(){return bn||(bn=en.openDb("firebase-installations-database",1,(e=>{if(0===e.oldVersion)e.createObjectStore("firebase-installations-store")}))),bn}async function In(e,t){const n=fn(e),i=(await _n()).transaction("firebase-installations-store","readwrite"),r=i.objectStore("firebase-installations-store"),s=await r.get(n);return await r.put(t,n),await i.complete,s&&s.fid===t.fid||mn(e,t.fid),t}async function Sn(e){const t=fn(e),n=(await _n()).transaction("firebase-installations-store","readwrite");await n.objectStore("firebase-installations-store").delete(t),await n.complete}async function Tn(e,t){const n=fn(e),i=(await _n()).transaction("firebase-installations-store","readwrite"),r=i.objectStore("firebase-installations-store"),s=await r.get(n),a=t(s);return void 0===a?await r.delete(n):await r.put(a,n),await i.complete,!a||s&&s.fid===a.fid||mn(e,a.fid),a}
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
 */async function kn(e){let t;const n=await Tn(e,(n=>{const i=function(e){return An(e||{fid:dn(),registrationStatus:0})}(n),r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(tn.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=async function(e,t){try{const n=await async function(e,{fid:t}){const n=rn(e),i=on(e),r={fid:t,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.5.4"},s={method:"POST",headers:i,body:JSON.stringify(r)},a=await cn((()=>fetch(n,s)));if(a.ok){const e=await a.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:sn(e.authToken)}}throw await an("Create Installation",a)}(e,t);return In(e,n)}catch(n){throw nn(n)&&409===n.customData.serverCode?await Sn(e):await In(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:i}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:En(e)}:{installationEntry:t}}(e,i);return t=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function En(e){let t=await xn(e);for(;1===t.registrationStatus;)await un(100),t=await xn(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await kn(e);return n||t}return t}function xn(e){return Tn(e,(e=>{if(!e)throw tn.create("installation-not-found");return An(e)}))}function An(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
 */}async function Rn({appConfig:e,platformLoggerProvider:t},n){const i=function(e,{fid:t}){return`${rn(e)}/${t}/authTokens:generate`}
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
 */(e,n),r=ln(e,n),s=t.getImmediate({optional:!0});s&&r.append("x-firebase-client",s.getPlatformInfoString());const a={installation:{sdkVersion:"w:0.5.4"}},o={method:"POST",headers:r,body:JSON.stringify(a)},l=await cn((()=>fetch(i,o)));if(l.ok){return sn(await l.json())}throw await an("Generate Auth Token",l)}async function On(e,t=!1){let n;const i=await Tn(e.appConfig,(i=>{if(!Mn(i))throw tn.create("not-registered");const r=i.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(e)}(r))return i;if(1===r.requestStatus)return n=async function(e,t){let n=await Pn(e.appConfig);for(;1===n.authToken.requestStatus;)await un(100),n=await Pn(e.appConfig);const i=n.authToken;return 0===i.requestStatus?On(e,t):i}(e,t),i;{if(!navigator.onLine)throw tn.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=async function(e,t){try{const n=await Rn(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await In(e.appConfig,i),n}catch(n){if(!nn(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await In(e.appConfig,n)}else await Sn(e.appConfig);throw n}}(e,t),t}}));return n?await n:i.authToken}function Pn(e){return Tn(e,(e=>{if(!Mn(e))throw tn.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+1e4<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
 */}))}function Mn(e){return void 0!==e&&2===e.registrationStatus}
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
async function Ln(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await kn(e);t&&await t}
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
 */(n.appConfig);return(await On(n,t)).token}function Nn(e){return tn.create("missing-app-config-values",{valueName:e})}
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
 */const Cn=e=>{const t=Kt(e.getProvider("app").getImmediate(),"installations").getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:i}=await kn(t.appConfig);return i?i.catch(console.error):On(t).catch(console.error),n.fid}(t),getToken:e=>Ln(t,e)}};Gt(new Ot("installations",(e=>{const t=e.getProvider("app").getImmediate(),n=
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
function(e){if(!e||!e.options)throw Nn("App Configuration");if(!e.name)throw Nn("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Nn(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,platformLoggerProvider:Kt(t,"platform-logger"),_delete:()=>Promise.resolve()}}),"PUBLIC")),Gt(new Ot("installations-internal",Cn,"PRIVATE")),Qt("@firebase/installations","0.5.4"),Qt("@firebase/installations","0.5.4","esm2017");
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
const Dn=new jt("@firebase/analytics");
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
function Un(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Fn(e,t,n,i){return async function(r,s,a){try{"event"===r?await async function(e,t,n,i,r){try{let s=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);const i=await Un(n);for(const n of e){const e=i.find((e=>e.measurementId===n)),r=e&&t[e.appId];if(!r){s=[];break}s.push(r)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",i,r||{})}catch(e){Dn.error(e)}}(e,t,n,s,a):"config"===r?await async function(e,t,n,i,r,s){const a=i[r];try{if(a)await t[a];else{const e=(await Un(n)).find((e=>e.measurementId===r));e&&await t[e.appId]}}catch(e){Dn.error(e)}e("config",r,s)}(e,t,n,i,s,a):e("set",s)}catch(e){Dn.error(e)}}}
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
const Vn=new wt("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const jn=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function Bn(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function $n(e,t=jn,n){const{appId:i,apiKey:r,measurementId:s}=e.options;if(!i)throw Vn.create("no-app-id");if(!r){if(s)return{measurementId:s,appId:i};throw Vn.create("no-api-key")}const a=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Wn;return setTimeout((async()=>{o.abort()}),void 0!==n?n:6e4),qn({appId:i,apiKey:r,measurementId:s},a,o,t)}async function qn(e,{throttleEndTimeMillis:t,backoffCount:n},i,r=jn){const{appId:s,measurementId:a}=e;try{await function(e,t){return new Promise(((n,i)=>{const r=Math.max(t-Date.now(),0),s=setTimeout(n,r);e.addEventListener((()=>{clearTimeout(s),i(Vn.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(i,t)}catch(e){if(a)return Dn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:s,measurementId:a};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:i}=e,r={method:"GET",headers:Bn(i)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),a=await fetch(s,r);if(200!==a.status&&304!==a.status){let e="";try{const n=await a.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw Vn.create("config-fetch-failed",{httpStatus:a.status,responseMessage:e})}return a.json()}(e);return r.deleteThrottleMetadata(s),t}catch(t){if(!function(e){if(!(e instanceof vt&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(r.deleteThrottleMetadata(s),a)return Dn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:s,measurementId:a};throw t}const o=503===Number(t.customData.httpStatus)?At(n,r.intervalMillis,30):At(n,r.intervalMillis),l={throttleEndTimeMillis:Date.now()+o,backoffCount:n+1};return r.setThrottleMetadata(s,l),Dn.debug(`Calling attemptFetch again in ${o} millis`),qn(e,l,i,r)}}class Wn{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
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
 */async function Hn(e,t,n,i,r,s,a){var o;const l=$n(e);l.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Dn.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Dn.error(e))),t.push(l);const c=async function(){if(!mt())return Dn.warn(Vn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await gt()}catch(e){return Dn.warn(Vn.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}().then((e=>e?i.getId():void 0)),[u,h]=await Promise.all([l,c]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes("https://www.googletagmanager.com/gtag/js"))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`https://www.googletagmanager.com/gtag/js?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,u.measurementId),r("js",new Date);const d=null!==(o=null==a?void 0:a.config)&&void 0!==o?o:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),r("config",u.measurementId,d),u.measurementId}
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
 */class zn{constructor(e){this.app=e}_delete(){return delete Gn[this.app.options.appId],Promise.resolve()}}let Gn={},Kn=[];const Jn={};let Yn,Xn,Qn="dataLayer",Zn="gtag",ei=!1;function ti(e,t,n){!function(){const e=[];if(pt()&&e.push("This is a browser extension environment."),yt()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Vn.create("invalid-analytics-context",{errorInfo:t});Dn.warn(n.message)}}();const i=e.options.appId;if(!i)throw Vn.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Vn.create("no-api-key");Dn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Gn[i])throw Vn.create("already-exists",{id:i});if(!ei){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Qn);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,i,r){let s=function(...e){window[i].push(arguments)};return window[r]&&"function"==typeof window[r]&&(s=window[r]),window[r]=Fn(s,e,t,n),{gtagCore:s,wrappedGtag:window[r]}}(Gn,Kn,Jn,Qn,Zn);Xn=e,Yn=t,ei=!0}Gn[i]=Hn(e,Kn,Jn,t,Yn,Qn,n);return new zn(e)}
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
 */function ni(e,t,n,i){e=Rt(e),async function(e,t,n,i,r){if(r&&r.global)e("event",n,i);else{const r=await t;e("event",n,Object.assign(Object.assign({},i),{send_to:r}))}}(Xn,Gn[e.app.options.appId],t,n,i).catch((e=>Dn.error(e)))}Gt(new Ot("analytics",((e,{options:t})=>ti(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),Gt(new Ot("analytics-internal",(function(e){try{const t=e.getProvider("analytics").getImmediate();return{logEvent:(e,n,i)=>ni(t,e,n,i)}}catch(e){throw Vn.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Qt("@firebase/analytics","0.7.4"),Qt("@firebase/analytics","0.7.4","esm2017");const ii=new class{get fps(){return s(this,u)}get time(){return 1e3*s(this,f)/this.fps}get frameTime(){return 1e3/s(this,u)}constructor({fps:e}){u.set(this,{writable:!0,value:void 0}),l(this,"proc",null),h.set(this,{writable:!0,value:0}),d.set(this,{writable:!0,value:0}),f.set(this,{writable:!0,value:0}),c.add(this),p.set(this,{writable:!0,value:()=>{var e;a(this,d,window.requestAnimationFrame(s(this,p))),a(this,f,1+ +s(this,f));const t=Date.now();t-s(this,h)<.8*this.frameTime||(a(this,h,t),null===(e=this.proc)||void 0===e||e.call(this))}}),a(this,u,e),o(this,c,m).call(this),document.addEventListener("visibilitychange",(()=>o(this,c,m).call(this)))}}({fps:60}),ri=new class{clear(){s(this,O).setTransform(1,0,0,1,0,0),s(this,O).clearRect(0,0,this.canvas.width,this.canvas.height)}save(){s(this,O).save()}restore(){s(this,O).restore()}getMatrix(){return s(this,O).getTransform()}drawSprite(e,t,n,i,r){e.image.complete&&(i=null!=i?i:e.width,r=null!=r?r:e.height,t=(null!=t?t:0)-e.originX*(i/e.width),n=(null!=n?n:0)-e.originY*(r/e.height),s(this,O).drawImage(e.image,e.x,e.y,e.width,e.height,Math.floor(t),Math.floor(n),Math.floor(i),Math.floor(r)))}drawText(e,t,n,i,r=1){let s=0;for(const l of t){var a,o;if(" "===l){s&&(s+=r),s+=1;continue}const t=null!==(o=null===(a=e[l])||void 0===a?void 0:a.width)&&void 0!==o?o:0;t&&(s&&(s+=r),this.drawSprite(e[l],n+s,i),s+=t)}}measuretext(e,t,n=1){let i=0;for(const a of t){var r,s;if(" "===a){i&&(i+=n),i+=1;continue}const t=null!==(s=null===(r=e[a])||void 0===r?void 0:r.width)&&void 0!==s?s:0;t&&(i&&(i+=n),i+=t)}return i}drawRect(e,t,n,i,r){s(this,O).fillStyle=String(r),s(this,O).fillRect(e,t,n,i)}drawCircle(e,t,n,i){e=Math.floor(e),t=Math.floor(t),n=Math.floor(n),s(this,O).fillStyle=String(i);const r=s(this,O).fillRect.bind(s(this,O));let a=-n,o=0,l=2-2*n;do{r(e-a,t+o,1,1),r(e-o,t-a,1,1),r(e+a,t-o,1,1),r(e+o,t+a,1,1),(n=l)<=o&&(l+=2*++o+1),(n>a||l>o)&&(l+=2*++a+1)}while(a<0)}translate(e,t){s(this,O).translate(e,t)}scale(e,t){s(this,O).scale(e,null!=t?t:e)}rotate(e){s(this,O).rotate(e*Math.PI/180)}opacity(e){s(this,O).globalAlpha=Math.min(Math.max(e,0),1)}blendMode(e){s(this,O).globalCompositeOperation=A[e]}boxToRect(e){const t=this.getMatrix(),n=e.x-e.originX,i=e.y-e.originY,r=t.transformPoint({x:n,y:i}),s=t.transformPoint({x:n+e.width,y:i}),a=t.transformPoint({x:n+e.width,y:i+e.height}),o=t.transformPoint({x:n,y:i+e.height});return{left:Math.min(r.x,s.x,a.x,o.x),top:Math.min(r.y,s.y,a.y,o.y),right:Math.max(r.x,s.x,a.x,o.x),bottom:Math.max(r.y,s.y,a.y,o.y)}}constructor({width:e,height:t,el:n}){l(this,"width",void 0),l(this,"height",void 0),l(this,"canvas",void 0),O.set(this,{writable:!0,value:void 0}),R.add(this);const i="string"==typeof n?document.querySelector(n):n;if(!(i&&i instanceof HTMLCanvasElement))throw Error("not canvas element");this.canvas=i,this.width=i.width=e,this.height=i.height=t,i.setAttribute("style","\n  image-rendering: pixelated;\n  image-rendering: crisp-edges;\n  touch-action: none;\n");const r=i.getContext("2d");if(!r)throw Error("none context2d");a(this,O,r),r.imageSmoothingEnabled=!1,window.addEventListener("resize",(()=>o(this,R,P).call(this))),window.setTimeout((()=>o(this,R,P).call(this)),1)}}({width:160,height:240,el:"#app"}),si=new class{clear(){s(this,ue).clear(),s(this,he).clear()}subscribe(e){var t;for(const n of s(this,he))null===(t=e[n.type])||void 0===t||t.call(e,n.data);s(this,ue).add(e)}emit(e,t){var n;for(const i of s(this,ue))null===(n=i[e])||void 0===n||n.call(i,t);s(this,he).add({type:e,data:t})}constructor(){ue.set(this,{writable:!0,value:new Set}),he.set(this,{writable:!0,value:new Set})}},ai=new class{clear(){a(this,fe,[])}emit(e,t,n,i){const r=s(this,de).boxToRect(n);for(const{type:n,data:a,rect:o,eventMap:l}of s(this,fe)){const s=l[e],c=i[n];(s||c)&&r.left<o.right&&o.left<r.right&&r.top<o.bottom&&o.top<r.bottom&&(null==s||s(t),null==c||c(a))}s(this,fe).push({type:e,data:t,rect:r,eventMap:i})}constructor(e){de.set(this,{writable:!0,value:void 0}),fe.set(this,{writable:!0,value:[]}),a(this,de,e),a(this,fe,[])}}(ri),oi={left:new ye(["ArrowLeft","a"]),right:new ye(["ArrowRight","d"]),up:new ye(["ArrowUp","w"]),down:new ye(["ArrowDown","s"]),fire:new ye([" ","z",".","Control"]),reset:new ye(["Enter","Escape"])},li=new class{update(){a(this,Ue,[]);const e=s(this,de).canvas;ke instanceof Node||a(this,Fe,!1),a(this,be,s(this,we));const t=s(this,Re),n=s(this,Oe);if("play"===s(this,Te))a(this,_e,1+ +s(this,_e)),s(this,Ie)[s(this,Se)]<s(this,_e)&&(a(this,we,!s(this,we)),a(this,_e,0),a(this,Se,1+ +s(this,Se))),a(this,Pe,1+ +s(this,Pe)),a(this,Me,1+ +s(this,Me)),s(this,Le)[s(this,Ne)]<s(this,Pe)&&(a(this,Pe,0),a(this,Ne,s(this,Ne)+2),a(this,Re,s(this,Le)[s(this,Ne)-1]||0)),s(this,Ce)[s(this,De)]<s(this,Me)&&(a(this,Me,0),a(this,De,s(this,De)+2),a(this,Oe,s(this,Ce)[s(this,De)-1]||0)),a(this,xe,s(this,xe)+s(this,Re)),a(this,Ae,s(this,Ae)+s(this,Oe));else{a(this,we,!s(this,Fe)&&ke instanceof Node&&e.contains(ke)),a(this,_e,s(this,we)===s(this,be)?s(this,_e)+1:0);const i=s(this,xe),r=s(this,Ae),o=e.getBoundingClientRect();a(this,xe,Math.floor((Ee.x-o.x)*(e.width/o.width))),a(this,Ae,Math.floor((Ee.y-o.y)*(e.height/o.height))),a(this,Re,s(this,xe)-i),a(this,Oe,s(this,Ae)-r),a(this,Pe,s(this,Re)===t?s(this,Pe)+1:0),a(this,Me,s(this,Oe)===n?s(this,Me)+1:0)}"rec"===s(this,Te)&&(s(this,we)===s(this,be)?s(this,Ie)[s(this,Ie).length-1]=s(this,_e):s(this,Ie).push(s(this,_e)),s(this,Re)===t?s(this,Le)[s(this,Le).length-1]=s(this,Pe):s(this,Le).push(s(this,Re),s(this,Pe)),s(this,Oe)===n?s(this,Ce)[s(this,Ce).length-1]=s(this,Me):s(this,Ce).push(s(this,Oe),s(this,Me))),s(this,we)&&!s(this,be)&&(a(this,Re,0),a(this,Oe,0))}get isDown(){return s(this,we)}get isDownChange(){return s(this,we)&&!s(this,be)}get isUpChange(){return!s(this,we)&&s(this,be)}get downCount(){return s(this,we)?s(this,_e):NaN}get upCount(){return s(this,we)?NaN:s(this,_e)}get pos(){return{x:s(this,xe),y:s(this,Ae)}}get vec(){return{x:s(this,Re),y:s(this,Oe)}}onDown(e,t){const n=s(this,de).boxToRect(e);s(this,Ue).push({rect:n,callback:t})}get logMode(){return s(this,Te)}get log(){return j(s(this,Ie),s(this,Le),s(this,Ce))}set log(e){const t=B(e,3);a(this,Ie,t[0]),a(this,Le,t[1]),a(this,Ce,t[2]),a(this,Te,"pause")}recLog(){a(this,Ie,[s(this,_e),s(this,be)?1:0,s(this,we)?1:0,s(this,_e)]),a(this,Le,[s(this,Pe),s(this,xe),s(this,Re),s(this,Pe)]),a(this,Ce,[s(this,Me),s(this,Ae),s(this,Oe),s(this,Me)]),a(this,Te,"rec")}playLog(){a(this,_e,s(this,Ie)[0]),a(this,be,Boolean(s(this,Ie)[1])),a(this,we,Boolean(s(this,Ie)[2])),a(this,Se,3),a(this,Pe,s(this,Le)[0]),a(this,xe,s(this,Le)[1]),a(this,Re,s(this,Le)[2]),a(this,Ne,3),a(this,Me,s(this,Ce)[0]),a(this,Ae,s(this,Ce)[1]),a(this,Oe,s(this,Ce)[2]),a(this,De,3),a(this,Te,"play")}endLog(){a(this,Te,"pause")}constructor(e){de.set(this,{writable:!0,value:void 0}),we.set(this,{writable:!0,value:!1}),be.set(this,{writable:!0,value:!1}),_e.set(this,{writable:!0,value:0}),xe.set(this,{writable:!0,value:0}),Ae.set(this,{writable:!0,value:0}),Re.set(this,{writable:!0,value:0}),Oe.set(this,{writable:!0,value:0}),Pe.set(this,{writable:!0,value:0}),Me.set(this,{writable:!0,value:0}),Ie.set(this,{writable:!0,value:[]}),Se.set(this,{writable:!0,value:0}),Le.set(this,{writable:!0,value:[]}),Ne.set(this,{writable:!0,value:0}),Ce.set(this,{writable:!0,value:[]}),De.set(this,{writable:!0,value:0}),Te.set(this,{writable:!0,value:"pause"}),Ue.set(this,{writable:!0,value:[]}),Fe.set(this,{writable:!0,value:!1}),a(this,de,e);const t=s(this,de).canvas;t.addEventListener("pointerdown",(e=>{const n=t.getBoundingClientRect(),i=Math.floor((e.clientX-n.x)*t.width/n.width),r=Math.floor((e.clientY-n.y)*t.height/n.height);for(const{rect:e,callback:t}of s(this,Ue))e.left<=i&&i<e.right&&e.top<=r&&r<e.bottom&&(a(this,Fe,!0),t())}))}}(ri),ci=[oi.up,oi.right,oi.down,oi.left],ui=[oi.fire,li],hi=[...ci,...ui],di=[...ci,...ui],fi=new class{update(){for(const e of s(this,lt))e.update(),e.done&&s(this,lt).delete(e)}from(e){return new ze(e,s(this,ot),s(this,lt))}clear(){s(this,lt).clear()}constructor(e){at.set(this,{writable:!0,value:void 0}),ot.set(this,{writable:!0,value:void 0}),lt.set(this,{writable:!0,value:new Set}),a(this,at,e),a(this,ot,(()=>s(this,at).frameTime))}}(ii),pi={bg:new je,effectBack:new je,enemyNotice:new je,player:new je,playerBullet:new je,effectOverPlayer:new je,enemy:new je,enemyBullet:new je,effectOverEnemy:new je,ui:new je},mi=new class{get seed(){return 0|s(this,$e)[0]}set seed(e){s(this,$e)[0]=e}updateSeed(){return s(this,$e)[0]=4294967295*Math.random()+1,this.seed}nextInt(e,t){s(this,$e)[0]^=s(this,$e)[0]<<13,s(this,$e)[0]^=s(this,$e)[0]>>17,s(this,$e)[0]^=s(this,$e)[0]<<5;const n=s(this,$e)[0]/4294967296;return void 0===t&&(t=e,e=0),Math.floor(n*(t-e))+e}nextFloat(e,t){s(this,$e)[0]^=s(this,$e)[0]<<13,s(this,$e)[0]^=s(this,$e)[0]>>17,s(this,$e)[0]^=s(this,$e)[0]<<5;return void 0===t&&(t=e,e=0),s(this,$e)[0]/4294967296*(t-e)+e}shuffle(e){return e.map((e=>({num:this.nextFloat(1),val:e}))).sort(((e,t)=>e.num-t.num)).map((({val:e})=>e))}constructor(){$e.set(this,{writable:!0,value:Uint32Array.of(4294967295*Math.random()+1)})}};var gi;gi=new URL(r("3y7ul").resolve("7QRtv"),import.meta.url).toString();const yi=E.loadMap(new URL(gi),{bg:[1,1,32,32,0,16],buttonLight:[1,34,34,34],buttonMute:{0:[36,34,34,34],1:[70,34,34,34]},buttonReset:[1,69,34,34],buttonTwitter:[1,104,34,34],card:{top:[34,1,144,4],body:[34,5,144,2],bottom:[34,7,144,4]},enemyBulletLargeTake:[34,12,14,13,7,5],enemyBulletLarge:{0:[49,12,16,15,8,6],1:[65,12,16,15,8,6]},enemyBulletTake:[34,26,8,7,4,3],enemyBullet:{0:[82,12,10,9,5,4],1:[92,12,10,9,5,4]},enemyLargeTake:[179,1,32,31,16,12],enemyLarge:{body:[36,69,34,33,17,13],bodyFlash:[36,103,34,33,17,13],gauge:[74,73,26,24,13,9],gaugeFlash:[74,107,26,24,13,9]},enemyNoticeLarge:[82,22,12,11,6,5.5],enemyNotice:[103,12,8,7,4,3.5],enemyTakeChip:[103,20,8,8,4,4],enemyTake:[112,12,16,15,8,6],enemy:{body:[36,138,18,17,9,7],bodyFlash:[36,156,18,17,9,7],gauge:[57,141,12,10,6,4],gaugeFlash:[57,159,12,10,6,4]},finish:[212,1,56,12],fontRate:{normal:{0:[269,1,5,7],1:[275,1,5,7],2:[281,1,5,7],3:[287,1,5,7],4:[293,1,5,7],5:[299,1,5,7],6:[305,1,5,7],7:[311,1,5,7],8:[317,1,5,7],9:[323,1,5,7],"*":[329,1,5,7],"+":[335,1,5,7]},flash:{0:[269,9,5,7],1:[275,9,5,7],2:[281,9,5,7],3:[287,9,5,7],4:[293,9,5,7],5:[299,9,5,7],6:[305,9,5,7],7:[311,9,5,7],8:[317,9,5,7],9:[323,9,5,7],"*":[329,9,5,7],"+":[335,9,5,7]}},fontUiL:{0:[341,1,8,9],1:[350,1,8,9],2:[359,1,8,9],3:[368,1,8,9],4:[377,1,8,9],5:[386,1,8,9],6:[395,1,8,9],7:[404,1,8,9],8:[413,1,8,9],9:[422,1,8,9],t:[431,1,8,9]},fontUiS:{0:[341,11,3,5],1:[345,11,3,5],2:[349,11,3,5],3:[353,11,3,5],4:[357,11,3,5],5:[361,11,3,5],6:[365,11,3,5],7:[369,11,3,5],8:[373,11,3,5],9:[377,11,3,5],A:[381,11,3,5],E:[385,11,3,5],I:[389,11,3,5],L:[393,11,3,5],P:[397,11,3,5],R:[401,11,3,5],S:[405,11,3,5],T:[409,11,3,5],U:[413,11,3,5],Y:[417,11,3,5],".":[421,11,3,5],"/":[425,11,3,5]},fontUi:{normal:{0:[341,17,5,7],1:[347,17,5,7],2:[353,17,5,7],3:[359,17,5,7],4:[365,17,5,7],5:[371,17,5,7],6:[377,17,5,7],7:[383,17,5,7],8:[389,17,5,7],9:[395,17,5,7],y:[401,17,7,7],h:[409,17,7,7],".":[417,17,1,7],",":[419,17,1,8]},flash:{0:[341,25,5,7],1:[347,25,5,7],2:[353,25,5,7],3:[359,25,5,7],4:[365,25,5,7],5:[371,25,5,7],6:[377,25,5,7],7:[383,25,5,7],8:[389,25,5,7],9:[395,25,5,7],y:[401,25,7,7],h:[409,25,7,7],".":[417,25,1,7],",":[419,25,1,8]}},newRecord:{normal:[105,34,94,12],flash:[105,46,94,12]},playerBulletHit:[129,12,8,8,4,4],playerBullet:[129,21,8,8,4,4],playerDestroyChip:[138,12,8,7,4,3],playerDestroy:[440,1,16,24,8,18],player:{normal:[1,139,18,26,9,19],flash:[1,165,18,26,9,19]},pressAnyButton:[105,59,89,9],replayLoading:[200,34,90,10],replayNow:[212,14,40,7],replayReady:[291,34,97,10],scoreBg:[105,69,130,12],start:[269,17,46,12],success:{normal:[105,82,88,44,44,22],flash:[105,126,88,44,44,22]},tips:{0:[194,82,108,40],1:[389,34,99,25],2:[303,108,76,25],3:[395,82,110,40],4:[395,123,87,40],5:[105,171,114,25],6:[220,171,114,25],7:[105,197,94,40],8:[200,197,107,40],9:[303,134,83,25],10:[194,123,82,26],11:[303,82,91,25],arrow:[147,12,17,6],heart:[147,19,10,9],million:[457,1,53,8],score:[95,22,7,7],user:[158,19,12,12]},titleLogoIcon:[1,192,30,45],titleLogo:{normal:[308,197,129,14],normalFlash:[308,211,129,14],ex:[308,197,150,14],exFlash:[308,211,150,14]},uiStatusReset:[36,175,47,25]});var vi;vi=new URL(r("3y7ul").resolve("6t7Zz"),import.meta.url).toString();var wi;wi=new URL(r("3y7ul").resolve("eGD62"),import.meta.url).toString();var bi;bi=new URL(r("3y7ul").resolve("QPPni"),import.meta.url).toString();var _i;_i=new URL(r("3y7ul").resolve("7Rhg3"),import.meta.url).toString();var Ii;Ii=new URL(r("3y7ul").resolve("fQj5x"),import.meta.url).toString();var Si;Si=new URL(r("3y7ul").resolve("8W3sW"),import.meta.url).toString();var Ti;Ti=new URL(r("3y7ul").resolve("bQiPl"),import.meta.url).toString();var ki;ki=new URL(r("3y7ul").resolve("iQ7l0"),import.meta.url).toString();var Ei;Ei=new URL(r("3y7ul").resolve("a9RsU"),import.meta.url).toString();var xi;xi=new URL(r("3y7ul").resolve("6RTqz"),import.meta.url).toString();var Ai;Ai=new URL(r("3y7ul").resolve("ltoOe"),import.meta.url).toString();var Ri;Ri=new URL(r("3y7ul").resolve("2GqAh"),import.meta.url).toString();var Oi;Oi=new URL(r("3y7ul").resolve("hq5Ck"),import.meta.url).toString();const Pi={uiButton:new le(new URL(vi),.5,.04),titleStart:new le(new URL(wi),.8),titleModeChange:new le(new URL(bi),.4),playerFire:new le(new URL(_i),.4,.02),playerHit:new le(new URL(Ii),1),enemyShow:new le(new URL(Si),1,.04),enemyHit:new le(new URL(Ti),.5,.04),enemyFire:new le(new URL(ki),.6,.02),enemyFireLarge:new le(new URL(Ei),.9,.04),enemyTake:new le(new URL(xi),.45,.02),enemyTakeLarge:new le(new URL(Ai),.6,.04),resultCounting:new le(new URL(Ri),.5,.02),resultSuccess:new le(new URL(Oi),1)};var Mi;Mi=new URL(r("3y7ul").resolve("csyRH"),import.meta.url).toString();var Li;Li=new URL(r("3y7ul").resolve("7daCL"),import.meta.url).toString();const Ni={play:new ce(new URL(Mi)),result:new ce(new URL(Li),.9)},Ci={mode:"normal",screenTop:0,isFirstEnemy:!1,enemyWaveId:0,playerPos:{x:0,y:0},isSuccess:!1,heart:0,heartRate:0,deathCount:0,addHeart(e){this.heart+=this.getHeartRate()*e},getHeartRate(){const e=this.heartRate||1;return this.isSuccess?e:Math.min(e,16)},clearing:fi.from(0).wait(1500)},Di={white:v.parse("#ffffff"),base:v.parse("#ffffff"),main:v.parse("#f64744"),accent:v.parse("#f69c44")},Ui=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw Jt.create("bad-app-name",{appName:String(i)});const r=Wt.get(i);if(r){if(_t(e,r.options)&&_t(n,r.config))return r;throw Jt.create("duplicate-app",{appName:i})}const s=new Mt(i);for(const e of Ht.values())s.addComponent(e);const a=new Yt(e,n,s);return Wt.set(i,a),a}({apiKey:"AIzaSyC2zCzDFkfmx1ZHOc6v03T-oGBeS0124-4",authDomain:"fire-shooter-san.firebaseapp.com",projectId:"fire-shooter-san",storageBucket:"fire-shooter-san.appspot.com",messagingSenderId:"1003741816214",appId:"1:1003741816214:web:20da45a98b3fd18345a9b7",measurementId:"G-3Q36TCTMGF"}),Fi=ni.bind(null,function(e=Xt()){const t=Kt(e=Rt(e),"analytics");return t.isInitialized()?t.getImmediate():function(e,t={}){const n=Kt(e,"analytics");if(n.isInitialized()){const e=n.getImmediate();if(_t(t,n.getOptions()))return e;throw Vn.create("already-initialized")}return n.initialize({options:t})}(e)}(Ui));function Vi(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;function ji(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bi=ji,$i=new wt("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),qi=new jt("@firebase/auth");function Wi(e,...t){qi.logLevel<=Nt.ERROR&&qi.error(`Auth (9.6.0): ${e}`,...t)}
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
 */function Hi(e,...t){throw Ki(e,...t)}function zi(e,...t){return Ki(e,...t)}function Gi(e,t,n){const i=Object.assign(Object.assign({},Bi()),{[t]:n});return new wt("auth","Firebase",i).create(t,{appName:e.name})}function Ki(e,...t){if("string"!=typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return $i.create(e,...t)}function Ji(e,t,...n){if(!e)throw Ki(t,...n)}function Yi(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Wi(t),new Error(t)}function Xi(e,t){e||Yi(t)}
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
 */const Qi=new Map;function Zi(e){Xi(e instanceof Function,"Expected a class definition");let t=Qi.get(e);return t?(Xi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Qi.set(e,t),t)}
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
function er(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function tr(){return"http:"===nr()||"https:"===nr()}function nr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
class ir{constructor(e,t){this.shortDelay=e,this.longDelay=t,Xi(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ft())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(tr()||pt()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
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
 */function rr(e,t){Xi(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class sr{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Yi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Yi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Yi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const ar={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},or=new ir(3e4,6e4);
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
 */function lr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function cr(e,t,n,i,r={}){return ur(e,r,(()=>{let r={},s={};i&&("GET"===t?s=i:r={body:JSON.stringify(i)});const a=St(Object.assign({key:e.config.apiKey},s)).slice(1),o=new(sr.headers());return o.set("Content-Type","application/json"),o.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&o.set("X-Firebase-Locale",e.languageCode),sr.fetch()(dr(e,e.config.apiHost,n,a),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},r))}))}async function ur(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},ar),t);try{const t=new fr(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw pr(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw pr(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw pr(e,"email-already-in-use",s);const o=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw Gi(e,o,a);Hi(e,o)}}catch(t){if(t instanceof vt)throw t;Hi(e,"network-request-failed")}}async function hr(e,t,n,i,r={}){const s=await cr(e,t,n,i,r);return"mfaPendingCredential"in s&&Hi(e,"multi-factor-auth-required",{_serverResponse:s}),s}function dr(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?rr(e.config,r):`${e.config.apiScheme}://${r}`}class fr{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(zi(this.auth,"timeout"))),or.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function pr(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=zi(e,t,i);return r.customData._tokenResponse=n,r}
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
function mr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function gr(e){return 1e3*Number(e)}function yr(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return Wi("JWT malformed, contained fewer than 3 sections"),null;try{const e=ht(n);return e?JSON.parse(e):(Wi("Failed to decode base64 JWT payload"),null)}catch(e){return Wi("Caught error parsing JWT payload as JSON",e),null}}
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
async function vr(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof vt&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class wr{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
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
 */class br{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=mr(this.lastLoginAt),this.creationTime=mr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function _r(e){var t;const n=e.auth,i=await e.getIdToken(),r=await vr(e,async function(e,t){return cr(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:i}));Ji(null==r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Vi(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const o=(l=e.providerData,c=a,[...l.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var l,c;const u=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==o?void 0:o.length)),d=!!u&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new br(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
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
class Ir{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ji(e.idToken,"internal-error"),Ji(void 0!==e.idToken,"internal-error"),Ji(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=yr(e);return Ji(t,"internal-error"),Ji(void 0!==t.exp,"internal-error"),Ji(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Ji(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await
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
async function(e,t){const n=await ur(e,{},(()=>{const n=St({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:r}=e.config,s=dr(e,i,"/v1/token",`key=${r}`);return sr.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new Ir;return n&&(Ji("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(Ji("string"==typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(Ji("number"==typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ir,this.toJSON())}_performRefresh(){return Yi("not implemented")}}
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
 */function Sr(e,t){Ji("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Tr{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=Vi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new wr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.metadata=new br(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await vr(this,this.stsTokenManager.getToken(this.auth,e));return Ji(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Rt(e),i=await n.getIdToken(t),r=yr(i);Ji(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s="object"==typeof r.firebase?r.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:mr(gr(r.auth_time)),issuedAtTime:mr(gr(r.iat)),expirationTime:mr(gr(r.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Rt(e);await _r(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Ji(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Tr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Ji(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await _r(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vr(this,async function(e,t){return cr(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,a,o,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:I}=t;Ji(v&&I,e,"internal-error");const S=Ir.fromJSON(this.name,I);Ji("string"==typeof v,e,"internal-error"),Sr(u,e.name),Sr(h,e.name),Ji("boolean"==typeof w,e,"internal-error"),Ji("boolean"==typeof b,e,"internal-error"),Sr(d,e.name),Sr(f,e.name),Sr(p,e.name),Sr(m,e.name),Sr(g,e.name),Sr(y,e.name);const T=new Tr({uid:v,auth:e,email:h,emailVerified:w,displayName:u,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(T.providerData=_.map((e=>Object.assign({},e)))),m&&(T._redirectEventId=m),T}static async _fromIdTokenResponse(e,t,n=!1){const i=new Ir;i.updateFromServerResponse(t);const r=new Tr({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await _r(r),r}}
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
 */class kr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}kr.type="NONE";const Er=kr;
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
 */function xr(e,t,n){return`firebase:${e}:${t}:${n}`}class Ar{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=xr(this.userKey,i.apiKey,r),this.fullPersistenceKey=xr("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ar(Zi(Er),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||Zi(Er);const s=xr(n,e.config.apiKey,e.name);let a=null;for(const n of t)try{const t=await n._get(s);if(t){const i=Tr._fromJSON(e,t);n!==r&&(a=i),r=n;break}}catch(e){}const o=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&o.length?(r=o[0],a&&await r._set(s,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(e){}}))),new Ar(r,e,n)):new Ar(r,e,n)}}
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
 */function Rr(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Lr(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Or(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Cr(t))return"Blackberry";if(Dr(t))return"Webos";if(Pr(t))return"Safari";if((t.includes("chrome/")||Mr(t))&&!t.includes("edge/"))return"Chrome";if(Nr(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function Or(e=ft()){return/firefox\//i.test(e)}function Pr(e=ft()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Mr(e=ft()){return/crios\//i.test(e)}function Lr(e=ft()){return/iemobile/i.test(e)}function Nr(e=ft()){return/android/i.test(e)}function Cr(e=ft()){return/blackberry/i.test(e)}function Dr(e=ft()){return/webos/i.test(e)}function Ur(e=ft()){return/iphone|ipad|ipod/i.test(e)}function Fr(){return function(){const e=ft();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Vr(e=ft()){return Ur(e)||Nr(e)||Dr(e)||Cr(e)||/windows phone/i.test(e)||Lr(e)}
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
function jr(e,t=[]){let n;switch(e){case"Browser":n=Rr(ft());break;case"Worker":n=`${Rr(ft())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.0/${t.length?t.join(","):"FirebaseCore-web"}`}
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
 */class Br{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qr(this),this.idTokenSubscription=new qr(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$i,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Zi(t)),this._initializationPromise=this.queue((async()=>{var n,i;this._deleted||(this.persistenceManager=await Ar.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,r=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);i&&i!==r||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(Ji(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _r(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Rt(e):null;return t&&Ji(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Ji(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Zi(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wt("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Zi(e)||this._popupRedirectResolver;Ji(t,this,"argument-error"),this.redirectPersistenceManager=await Ar.create(this,[Zi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return Ji(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"==typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ji(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=jr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function $r(e){return Rt(e)}class qr{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Et(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Ji(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
class Wr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Yi("not implemented")}_getIdTokenResponse(e){return Yi("not implemented")}_linkToIdToken(e,t){return Yi("not implemented")}_getReauthenticationResolver(e){return Yi("not implemented")}}
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
 */async function Hr(e,t){return cr(e,"POST","/v1/accounts:update",t)}
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
class zr extends Wr{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new zr(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new zr(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
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
return async function(e,t){return hr(e,"POST","/v1/accounts:signInWithPassword",lr(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
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
return async function(e,t){return hr(e,"POST","/v1/accounts:signInWithEmailLink",lr(e,t))}(e,{email:this._email,oobCode:this._password});default:Hi(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Hr(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return hr(e,"POST","/v1/accounts:signInWithEmailLink",lr(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Hi(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Gr(e,t){return hr(e,"POST","/v1/accounts:signInWithIdp",lr(e,t))}
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
 */class Kr extends Wr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Hi("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=Vi(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new Kr(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){return Gr(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Gr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Gr(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=St(t)}return e}}
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
 */const Jr={USER_NOT_FOUND:"user-not-found"};
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
class Yr extends Wr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Yr({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Yr({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return hr(e,"POST","/v1/accounts:signInWithPhoneNumber",lr(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await hr(e,"POST","/v1/accounts:signInWithPhoneNumber",lr(e,t));if(n.temporaryProof)throw pr(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return hr(e,"POST","/v1/accounts:signInWithPhoneNumber",lr(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Jr)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new Yr({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
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
 */class Xr{constructor(e){var t,n,i,r,s,a;const o=Tt(kt(e)),l=null!==(t=o.apiKey)&&void 0!==t?t:null,c=null!==(n=o.oobCode)&&void 0!==n?n:null,u=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=o.mode)&&void 0!==i?i:null);Ji(l&&c&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=c,this.continueUrl=null!==(r=o.continueUrl)&&void 0!==r?r:null,this.languageCode=null!==(s=o.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=o.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=Tt(kt(e)).link,n=t?Tt(kt(t)).deep_link_id:null,i=Tt(kt(e)).deep_link_id;return(i?Tt(kt(i)).link:null)||i||n||t||e}(e);try{return new Xr(t)}catch(e){return null}}}
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
class Qr{constructor(){this.providerId=Qr.PROVIDER_ID}static credential(e,t){return zr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Xr.parseLink(t);return Ji(n,"argument-error"),zr._fromEmailAndCode(e,n.code,n.tenantId)}}Qr.PROVIDER_ID="password",Qr.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Qr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Zr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class es extends Zr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
class ts extends es{constructor(){super("facebook.com")}static credential(e){return Kr._fromParams({providerId:ts.PROVIDER_ID,signInMethod:ts.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ts.credentialFromTaggedObject(e)}static credentialFromError(e){return ts.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ts.credential(e.oauthAccessToken)}catch(e){return null}}}ts.FACEBOOK_SIGN_IN_METHOD="facebook.com",ts.PROVIDER_ID="facebook.com";
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
class ns extends es{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Kr._fromParams({providerId:ns.PROVIDER_ID,signInMethod:ns.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ns.credentialFromTaggedObject(e)}static credentialFromError(e){return ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return ns.credential(t,n)}catch(e){return null}}}ns.GOOGLE_SIGN_IN_METHOD="google.com",ns.PROVIDER_ID="google.com";
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
class is extends es{constructor(){super("github.com")}static credential(e){return Kr._fromParams({providerId:is.PROVIDER_ID,signInMethod:is.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return is.credentialFromTaggedObject(e)}static credentialFromError(e){return is.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return is.credential(e.oauthAccessToken)}catch(e){return null}}}is.GITHUB_SIGN_IN_METHOD="github.com",is.PROVIDER_ID="github.com";
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
class rs extends es{constructor(){super("twitter.com")}static credential(e,t){return Kr._fromParams({providerId:rs.PROVIDER_ID,signInMethod:rs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return rs.credentialFromTaggedObject(e)}static credentialFromError(e){return rs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return rs.credential(t,n)}catch(e){return null}}}
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
async function ss(e,t){return hr(e,"POST","/v1/accounts:signUp",lr(e,t))}
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
 */rs.TWITTER_SIGN_IN_METHOD="twitter.com",rs.PROVIDER_ID="twitter.com";class as{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await Tr._fromIdTokenResponse(e,n,i),s=os(n);return new as({user:r,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=os(n);return new as({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function os(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class ls extends vt{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,ls.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new ls(e,t,n,i)}}function cs(e,t,n,i){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ls._fromErrorAndOperation(e,n,t,i);throw n}))}
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
 */async function us(e,t,n=!1){const i=await vr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return as._forOperation(e,"link",i)}
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
async function hs(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await vr(e,cs(i,r,t,e),n);Ji(s.idToken,i,"internal-error");const a=yr(s.idToken);Ji(a,i,"internal-error");const{sub:o}=a;return Ji(e.uid===o,i,"user-mismatch"),as._forOperation(e,r,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Hi(i,"user-mismatch"),e}}
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
 */async function ds(e,t,n=!1){const i="signIn",r=await cs(e,i,t),s=await as._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}
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
async function fs(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=Rt(e),r={idToken:await i.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await vr(i,
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
async function(e,t){return cr(e,"POST","/v1/accounts:update",t)}(i.auth,r));i.displayName=s.displayName||null,i.photoURL=s.photoUrl||null;const a=i.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(s)}new WeakMap;
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
 */class ms extends ps{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=ft();return Pr(e)||Ur(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Vr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Fr()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ms.type="LOCAL";const gs=ms;
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
 */class ys extends ps{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ys.type="SESSION";const vs=ys;
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
class ws{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new ws(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const a=Array.from(s).map((async e=>e(t.origin,r))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function bs(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */ws.receivers=[];class _s{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((a,o)=>{const l=bs("",20);i.port1.start();const c=setTimeout((()=>{o(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),r=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),a(t.data.response);break;default:clearTimeout(c),clearTimeout(r),o(new Error("invalid_response"))}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function Is(){return window}
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
function Ss(){return void 0!==Is().WorkerGlobalScope&&"function"==typeof Is().importScripts}class Ts{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function ks(e,t){return e.transaction(["firebaseLocalStorage"],t?"readwrite":"readonly").objectStore("firebaseLocalStorage")}function Es(){const e=indexedDB.open("firebaseLocalStorageDb",1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains("firebaseLocalStorage")?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase("firebaseLocalStorageDb");return new Ts(e).toPromise()}(),t(await Es()))}))}))}async function xs(e,t,n){const i=ks(e,!0).put({fbase_key:t,value:n});return new Ts(i).toPromise()}function As(e,t){const n=ks(e,!0).delete(t);return new Ts(n).toPromise()}class Rs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Es()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ss()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ws._getInstance(Ss()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new _s(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Es();return await xs(e,"__sak","1"),await As(e,"__sak"),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>xs(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ks(e,!1).get(t),i=await new Ts(n).toPromise();return void 0===i?null:i.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>As(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ks(e,!1).getAll();return new Ts(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Rs.type="LOCAL";const Os=Rs;
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
 */function Ps(e){return new Promise(((t,n)=>{const i=document.createElement("script");
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
var r,s;i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=zi("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(s=null===(r=document.getElementsByTagName("head"))||void 0===r?void 0:r[0])&&void 0!==s?s:document).appendChild(i)}))}function Ms(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
Ms("rcb"),new ir(3e4,6e4);async function Ls(e,t,n){var i;const r=await n.verify();try{let s;if(Ji("string"==typeof r,e,"argument-error"),Ji("recaptcha"===n.type,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){Ji("enroll"===t.type,e,"internal-error");const n=await
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
function(e,t){return cr(e,"POST","/v2/accounts/mfaEnrollment:start",lr(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{Ji("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;Ji(n,e,"missing-multi-factor-info");const a=await function(e,t){return cr(e,"POST","/v2/accounts/mfaSignIn:start",lr(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return cr(e,"POST","/v1/accounts:sendVerificationCode",lr(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}
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
class Ns{constructor(e){this.providerId=Ns.PROVIDER_ID,this.auth=$r(e)}verifyPhoneNumber(e,t){return Ls(this.auth,e,Rt(t))}static credential(e,t){return Yr._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Ns.credentialFromTaggedObject(t)}static credentialFromError(e){return Ns.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Yr._fromTokenResponse(t,n):null}}
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
function Cs(e,t){return t?Zi(t):(Ji(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Ns.PROVIDER_ID="phone",Ns.PHONE_SIGN_IN_METHOD="phone";class Ds extends Wr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Gr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Us(e){return ds(e.auth,new Ds(e),e.bypassAuthState)}function Fs(e){const{auth:t,user:n}=e;return Ji(n,t,"internal-error"),hs(n,new Ds(e),e.bypassAuthState)}async function Vs(e){const{auth:t,user:n}=e;return Ji(n,t,"internal-error"),us(n,new Ds(e),e.bypassAuthState)}
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
 */class js{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:a}=e;if(s)return void this.reject(s);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Us;case"linkViaPopup":case"linkViaRedirect":return Vs;case"reauthViaPopup":case"reauthViaRedirect":return Fs;default:Hi(this.auth,"internal-error")}}resolve(e){Xi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const Bs=new ir(2e3,1e4);class $s extends js{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,$s.currentPopupAction&&$s.currentPopupAction.cancel(),$s.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ji(e,this.auth,"internal-error"),e}async onExecution(){Xi(1===this.filter.length,"Popup operations only handle one event");const e=bs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(zi(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(zi(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$s.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(zi(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Bs.get())};e()}}$s.currentPopupAction=null;
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
const qs=new Map;class Ws extends js{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=qs.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=zs(t),i=Hs(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}qs.set(this.auth._key(),e)}return this.bypassAuthState||qs.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Hs(e){return Zi(e._redirectPersistence)}function zs(e){return xr("pendingRedirect",e.config.apiKey,e.name)}
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
 */async function Gs(e,t,n=!1){const i=$r(e),r=Cs(i,t),s=new Ws(i,r,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,t)),a}class Ks{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ys(e);default:return!1}}
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
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!Ys(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(zi(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Js(e))}saveEventToCache(e){this.cachedEventUids.add(Js(e)),this.lastProcessedEventTime=Date.now()}}function Js(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function Ys({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
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
const Xs=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Qs=/^https?/;async function Zs(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return cr(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(ea(e))return}catch(e){}Hi(e,"unauthorized-domain")}function ea(e){const t=er(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!Qs.test(n))return!1;if(Xs.test(e))return i===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}
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
 */const ta=new ir(3e4,6e4);function na(){const e=Is().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let ia=null;function ra(e){return ia=ia||function(e){return new Promise(((t,n)=>{var i,r,s;function a(){na(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{na(),n(zi(e,"network-request-failed"))},timeout:ta.get()})}if(null===(r=null===(i=Is().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Is().gapi)||void 0===s?void 0:s.load)){const t=Ms("iframefcb");return Is()[t]=()=>{gapi.load?a():n(zi(e,"network-request-failed"))},Ps(`https://apis.google.com/js/api.js?onload=${t}`)}a()}})).catch((e=>{throw ia=null,e}))}(e),ia}
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
 */const sa=new ir(5e3,15e3),aa={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},oa=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function la(e){const t=e.config;Ji(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?rr(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,i={apiKey:t.apiKey,appName:e.name,v:"9.6.0"},r=oa.get(e.config.apiHost);r&&(i.eid=r);const s=e._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${St(i).slice(1)}`}
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
const ca={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ua{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function ha(e,t,n,i=500,r=600){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let o="";const l=Object.assign(Object.assign({},ca),{width:i.toString(),height:r.toString(),top:s,left:a}),c=ft().toLowerCase();n&&(o=Mr(c)?"_blank":n),Or(c)&&(t=t||"http://localhost",l.scrollbars="yes");const u=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=ft()){var t;return Ur(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
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
 */(t||"",o),new ua(null);const h=window.open(t||"",o,u);Ji(h,e,"popup-blocked");try{h.focus()}catch(e){}return new ua(h)}function da(e,t,n,i,r,s){Ji(e.config.authDomain,e,"auth-domain-config-required"),Ji(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:"9.6.0",eventId:r};if(t instanceof Zr){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))a[e]=t}if(t instanceof es){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const e of Object.keys(o))void 0===o[e]&&delete o[e];return`${function({config:e}){return e.emulator?rr(e,"emulator/auth/handler"):`https://${e.authDomain}/__/auth/handler`}
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
 */(e)}?${St(o).slice(1)}`}const fa=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vs,this._completeRedirectFn=Gs}async _openPopup(e,t,n,i){var r;Xi(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");return ha(e,da(e,t,n,er(),i),bs())}async _openRedirect(e,t,n,i){var r;return await this._originValidation(e),r=da(e,t,n,er(),i),Is().location.href=r,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Xi(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await async function(e){const t=await ra(e),n=Is().gapi;return Ji(n,e,"internal-error"),t.open({where:document.body,url:la(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aa,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=zi(e,"network-request-failed"),s=Is().setTimeout((()=>{i(r)}),sa.get());function a(){Is().clearTimeout(s),n(t)}t.ping(a).then(a,(()=>{i(r)}))}))))}(e),n=new Ks(e);return t.register("authEvent",(t=>{Ji(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send("webStorageSupport",{type:"webStorageSupport"},(n=>{var i;const r=null===(i=null==n?void 0:n[0])||void 0===i?void 0:i.webStorageSupport;void 0!==r&&t(!!r),Hi(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Zs(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Vr()||Pr()||Ur()}};var pa;
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
class ma{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ji(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */pa="Browser",Gt(new Ot("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:r}=n.options;return(e=>{Ji(i&&!i.includes(":"),"invalid-api-key",{appName:e.name}),Ji(!(null==r?void 0:r.includes(":")),"argument-error",{appName:e.name});const n={apiKey:i,authDomain:r,clientPlatform:pa,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:jr(pa)},s=new Br(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Zi);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Gt(new Ot("auth-internal",(e=>{const t=$r(e.getProvider("auth").getImmediate());return new ma(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Qt("@firebase/auth","0.19.3",function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(pa)),Qt("@firebase/auth","0.19.3","esm2017");const ga=
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
function(e=Xt()){const t=Kt(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Kt(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(_t(n.getOptions(),null!=t?t:{}))return e;Hi(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:fa,persistence:[Os,gs,vs]})}(Ui);function ya(e){return t=e,Rt(ga).onAuthStateChanged(t,n,i);var t,n,i}function va(){return ga.currentUser}function wa(){var e,t;return null!==(t=null===(e=va())||void 0===e?void 0:e.uid)&&void 0!==t?t:""}function ba(){var e,t;return null!==(t=null===(e=va())||void 0===e?void 0:e.displayName)&&void 0!==t?t:""}ya((e=>!e&&async function(e){var t;const n=$r(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new as({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await ss(n,{returnSecureToken:!0}),r=await as._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}(ga)));
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
class _a{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_a.UNAUTHENTICATED=new _a(null),_a.GOOGLE_CREDENTIALS=new _a("google-credentials-uid"),_a.FIRST_PARTY=new _a("first-party-uid"),_a.MOCK_USER=new _a("mock-user");
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
let Ia="9.6.0";
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
 */const Sa=new jt("@firebase/firestore");function Ta(e,...t){if(Sa.logLevel<=Nt.DEBUG){const n=t.map(xa);Sa.debug(`Firestore (${Ia}): ${e}`,...n)}}function ka(e,...t){if(Sa.logLevel<=Nt.ERROR){const n=t.map(xa);Sa.error(`Firestore (${Ia}): ${e}`,...n)}}function Ea(e,...t){if(Sa.logLevel<=Nt.WARN){const n=t.map(xa);Sa.warn(`Firestore (${Ia}): ${e}`,...n)}}function xa(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function Aa(e="Unexpected state"){const t=`FIRESTORE (${Ia}) INTERNAL ASSERTION FAILED: `+e;throw ka(t),new Error(t)}function Ra(e,t){e||Aa()}function Oa(e,t){return e}
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
 */class Pa extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
class Ma{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class La{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(_a.UNAUTHENTICATED)))}shutdown(){}}class Na{constructor(e){this.auth=null,e.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(Ra("string"==typeof e.accessToken),new Ma(e.accessToken,new _a(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class Ca{constructor(e,t,n){this.type="FirstParty",this.user=_a.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Da{constructor(e,t,n){this.t=e,this.i=t,this.o=n}getToken(){return Promise.resolve(new Ca(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable((()=>t(_a.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ua{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Fa{constructor(e){this.u=e,this.appCheck=null,e.onInit((e=>{this.appCheck=e}))}getToken(){return this.appCheck?this.appCheck.getToken().then((e=>e?(Ra("string"==typeof e.token),new Ua(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}
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
 */class Va{constructor(e,t,n,i,r,s,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class ja{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof ja&&e.projectId===this.projectId&&e.database===this.database}}
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
 */class Ba{constructor(e,t,n){void 0===t?t=0:t>e.length&&Aa(),void 0===n?n=e.length-t:n>e.length-t&&Aa(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===Ba.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Ba?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class $a extends Ba{construct(e,t,n){return new $a(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Pa("invalid-argument",`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new $a(t)}static emptyPath(){return new $a([])}}const qa=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Wa extends Ba{construct(e,t,n){return new Wa(e,t,n)}static isValidIdentifier(e){return qa.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Wa.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Wa(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new Pa("invalid-argument",`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new Pa("invalid-argument","Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Pa("invalid-argument","Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new Pa("invalid-argument","Unterminated ` in path: "+e);return new Wa(t)}static emptyPath(){return new Wa([])}}
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
 */class Ha{constructor(e){this.path=e}static fromPath(e){return new Ha($a.fromString(e))}static fromName(e){return new Ha($a.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===$a.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return $a.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ha(new $a(e.slice()))}}
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
 */function za(e,t,n){if(!n)throw new Pa("invalid-argument",`Function ${e}() cannot be called with an empty ${t}.`)}function Ga(e){if(!Ha.isDocumentKey(e))throw new Pa("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ka(e){if(Ha.isDocumentKey(e))throw new Pa("invalid-argument",`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ja(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Aa()}function Ya(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Pa("invalid-argument","Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ja(e);throw new Pa("invalid-argument",`Expected type '${t.name}', but it was: ${n}`)}}return e}function Xa(e,t){if(t<=0)throw new Pa("invalid-argument",`Function ${e}() requires a positive number, but it was: ${t}.`)}
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
 */function Qa(e){return null==e}function Za(e){return 0===e&&1/e==-1/0}
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
 */const eo={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */var to,no;function io(e){if(void 0===e)return ka("RPC_ERROR","HTTP error has no status"),"unknown";switch(e){case 200:return"ok";case 400:return"failed-precondition";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 416:return"out-of-range";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"unknown";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded";default:return e>=200&&e<300?"ok":e>=400&&e<500?"failed-precondition":e>=500&&e<600?"internal":"unknown"}}
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
 */(no=to||(to={}))[no.OK=0]="OK",no[no.CANCELLED=1]="CANCELLED",no[no.UNKNOWN=2]="UNKNOWN",no[no.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",no[no.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",no[no.NOT_FOUND=5]="NOT_FOUND",no[no.ALREADY_EXISTS=6]="ALREADY_EXISTS",no[no.PERMISSION_DENIED=7]="PERMISSION_DENIED",no[no.UNAUTHENTICATED=16]="UNAUTHENTICATED",no[no.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",no[no.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",no[no.ABORTED=10]="ABORTED",no[no.OUT_OF_RANGE=11]="OUT_OF_RANGE",no[no.UNIMPLEMENTED=12]="UNIMPLEMENTED",no[no.INTERNAL=13]="INTERNAL",no[no.UNAVAILABLE=14]="UNAVAILABLE",no[no.DATA_LOSS=15]="DATA_LOSS";class ro extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.h=t+"://"+e.host,this.l="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}m(e,t,n,i,r){const s=this.p(e,t);Ta("RestConnection","Sending: ",s,n);const a={};return this.g(a,i,r),this.v(e,s,a,n).then((e=>(Ta("RestConnection","Received: ",e),e)),(t=>{throw Ea("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}T(e,t,n,i,r){return this.m(e,t,n,i,r)}g(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ia,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}p(e,t){const n=eo[e];return`${this.h}/v1/${t}:${n}`}}{constructor(e,t){super(e),this.I=t}A(e,t){throw new Error("Not supported by FetchConnection")}async v(e,t,n,i){const r=JSON.stringify(i);let s;try{s=await this.I(t,{method:"POST",headers:n,body:r})}catch(e){throw new Pa(io(e.status),"Request failed with error: "+e.statusText)}if(!s.ok)throw new Pa(io(s.status),"Request failed with error: "+s.statusText);return s.json()}}
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
 */function so(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */class ao{static P(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=so(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function oo(e,t){return e<t?-1:e>t?1:0}function lo(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}
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
 */class co{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Pa("invalid-argument","Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Pa("invalid-argument","Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Pa("invalid-argument","Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Pa("invalid-argument","Timestamp seconds out of range: "+e)}static now(){return co.fromMillis(Date.now())}static fromDate(e){return co.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new co(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oo(this.nanoseconds,e.nanoseconds):oo(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class uo{constructor(e){this.timestamp=e}static fromTimestamp(e){return new uo(e)}static min(){return new uo(new co(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function ho(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function fo(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}
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
 */class po{constructor(e){this.fields=e,e.sort(Wa.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return lo(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
 */class mo{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new mo(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new mo(t)}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oo(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mo.EMPTY_BYTE_STRING=new mo("");const go=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yo(e){if(Ra(!!e),"string"==typeof e){let t=0;const n=go.exec(e);if(Ra(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:vo(e.seconds),nanos:vo(e.nanos)}}function vo(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function wo(e){return"string"==typeof e?mo.fromBase64String(e):mo.fromUint8Array(e)}
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
 */function bo(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function _o(e){const t=e.mapValue.fields.__previous_value__;return bo(t)?_o(t):t}function Io(e){const t=yo(e.mapValue.fields.__local_write_time__.timestampValue);return new co(t.seconds,t.nanos)}
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
 */function So(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?bo(e)?4:10:Aa()}function To(e,t){const n=So(e);if(n!==So(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Io(e).isEqual(Io(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=yo(e.timestampValue),i=yo(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return i=t,wo(e.bytesValue).isEqual(wo(i.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return vo(e.geoPointValue.latitude)===vo(t.geoPointValue.latitude)&&vo(e.geoPointValue.longitude)===vo(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return vo(e.integerValue)===vo(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=vo(e.doubleValue),i=vo(t.doubleValue);return n===i?Za(n)===Za(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return lo(e.arrayValue.values||[],t.arrayValue.values||[],To);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(ho(n)!==ho(i))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===i[e]||!To(n[e],i[e])))return!1;return!0}(e,t);default:return Aa()}var i}function ko(e,t){return void 0!==(e.values||[]).find((e=>To(e,t)))}function Eo(e,t){const n=So(e),i=So(t);if(n!==i)return oo(n,i);switch(n){case 0:return 0;case 1:return oo(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=vo(e.integerValue||e.doubleValue),i=vo(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return xo(e.timestampValue,t.timestampValue);case 4:return xo(Io(e),Io(t));case 5:return oo(e.stringValue,t.stringValue);case 6:return function(e,t){const n=wo(e),i=wo(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let e=0;e<n.length&&e<i.length;e++){const t=oo(n[e],i[e]);if(0!==t)return t}return oo(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=oo(vo(e.latitude),vo(t.latitude));return 0!==n?n:oo(vo(e.longitude),vo(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let e=0;e<n.length&&e<i.length;++e){const t=Eo(n[e],i[e]);if(t)return t}return oo(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let e=0;e<i.length&&e<s.length;++e){const t=oo(i[e],s[e]);if(0!==t)return t;const a=Eo(n[i[e]],r[s[e]]);if(0!==a)return a}return oo(i.length,s.length)}(e.mapValue,t.mapValue);default:throw Aa()}}function xo(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return oo(e,t);const n=yo(e),i=yo(t),r=oo(n.seconds,i.seconds);return 0!==r?r:oo(n.nanos,i.nanos)}function Ao(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ro(e){return!!e&&"arrayValue"in e}function Oo(e){return!!e&&"nullValue"in e}function Po(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Mo(e){return!!e&&"mapValue"in e}function Lo(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return fo(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Lo(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Lo(e.arrayValue.values[n]);return t}return Object.assign({},e)}
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
 */class No{constructor(e){this.value=e}static empty(){return new No({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Mo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Lo(t)}setAll(e){let t=Wa.emptyPath(),n={},i=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=Lo(e):i.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());Mo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return To(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Mo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){fo(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new No(Lo(this.value))}}
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
 */class Co{constructor(e,t,n,i,r){this.key=e,this.documentType=t,this.version=n,this.data=i,this.documentState=r}static newInvalidDocument(e){return new Co(e,0,uo.min(),No.empty(),0)}static newFoundDocument(e,t,n){return new Co(e,1,t,n,0)}static newNoDocument(e,t){return new Co(e,2,t,No.empty(),0)}static newUnknownDocument(e,t){return new Co(e,3,t,No.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=No.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=No.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Co&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Co(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Do{constructor(e,t=null,n=[],i=[],r=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=a,this.R=null}}function Uo(e,t=null,n=[],i=[],r=null,s=null,a=null){return new Do(e,t,n,i,r,s,a)}class Fo extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new Vo(e,t,n):"array-contains"===t?new qo(e,n):"in"===t?new Wo(e,n):"not-in"===t?new Ho(e,n):"array-contains-any"===t?new zo(e,n):new Fo(e,t,n)}static V(e,t,n){return"in"===t?new jo(e,n):new Bo(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.D(Eo(t,this.value)):null!==t&&So(this.value)===So(t)&&this.D(Eo(t,this.value))}D(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Aa()}}N(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Vo extends Fo{constructor(e,t,n){super(e,t,n),this.key=Ha.fromName(n.referenceValue)}matches(e){const t=Ha.comparator(e.key,this.key);return this.D(t)}}class jo extends Fo{constructor(e,t){super(e,"in",t),this.keys=$o("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Bo extends Fo{constructor(e,t){super(e,"not-in",t),this.keys=$o("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function $o(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Ha.fromName(e.referenceValue)))}class qo extends Fo{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ro(t)&&ko(t.arrayValue,this.value)}}class Wo extends Fo{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&ko(this.value.arrayValue,t)}}class Ho extends Fo{constructor(e,t){super(e,"not-in",t)}matches(e){if(ko(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!ko(this.value.arrayValue,t)}}class zo extends Fo{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ro(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>ko(this.value.arrayValue,e)))}}class Go{constructor(e,t){this.position=e,this.before=t}}class Ko{constructor(e,t="asc"){this.field=e,this.dir=t}}
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
class Jo{constructor(e,t=null,n=[],i=[],r=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=a,this.endAt=o,this.$=null,this.F=null,this.startAt,this.endAt}}function Yo(e){return!Qa(e.limit)&&"L"===e.limitType}function Xo(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Qo(e){for(const t of e.filters)if(t.N())return t.field;return null}function Zo(e){return null!==e.collectionGroup}function el(e){const t=Oa(e);if(null===t.$){t.$=[];const e=Qo(t),n=Xo(t);if(null!==e&&null===n)e.isKeyField()||t.$.push(new Ko(e)),t.$.push(new Ko(Wa.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.$.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.$.push(new Ko(Wa.keyField(),e))}}}return t.$}function tl(e){const t=Oa(e);if(!t.F)if("F"===t.limitType)t.F=Uo(t.path,t.collectionGroup,el(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of el(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Ko(n.field,t))}const n=t.endAt?new Go(t.endAt.position,!t.endAt.before):null,i=t.startAt?new Go(t.startAt.position,!t.startAt.before):null;t.F=Uo(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t.F}
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
function nl(e,t){return"number"==typeof(n=t)&&Number.isInteger(n)&&!Za(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER?function(e){return{integerValue:""+e}}(t):function(e,t){if(e.S){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Za(t)?"-0":t}}(e,t);var n}
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
 */class il{constructor(){this._=void 0}}class rl extends il{}class sl extends il{constructor(e){super(),this.elements=e}}class al extends il{constructor(e){super(),this.elements=e}}class ol extends il{constructor(e,t){super(),this.q=e,this.O=t}}
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
 */class ll{constructor(e,t){this.field=e,this.transform=t}}class cl{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new cl}static exists(e){return new cl(void 0,e)}static updateTime(e){return new cl(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class ul{}class hl extends ul{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}}class dl extends ul{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}}class fl extends ul{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class pl extends ul{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
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
 */const ml={asc:"ASCENDING",desc:"DESCENDING"},gl={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class yl{constructor(e,t){this.databaseId=e,this.S=t}}function vl(e,t){return e.S?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function wl(e,t){return e.S?t.toBase64():t.toUint8Array()}function bl(e,t){return vl(e,t.toTimestamp())}function _l(e){return Ra(!!e),uo.fromTimestamp(function(e){const t=yo(e);return new co(t.seconds,t.nanos)}(e))}function Il(e,t){return(n=e,new $a(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function Sl(e,t){return Il(e.databaseId,t.path)}function Tl(e,t){const n=function(e){const t=$a.fromString(e);return Ra(Ll(t)),t}(t);if(n.get(1)!==e.databaseId.projectId)throw new Pa("invalid-argument","Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Pa("invalid-argument","Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);var i;return new Ha((Ra((i=n).length>4&&"documents"===i.get(4)),i.popFirst(5)))}function kl(e,t){return Il(e.databaseId,t)}function El(e){return new $a(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function xl(e,t,n){return{name:Sl(e,t),fields:n.value.mapValue.fields}}function Al(e){return{before:e.before,values:e.position}}function Rl(e){return ml[e]}function Ol(e){return gl[e]}function Pl(e){return{fieldPath:e.canonicalString()}}function Ml(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ll(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */function Nl(e){return new yl(e,!0)}
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
class Cl extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.K=n,this.q=i,this.J=!1}X(){if(this.J)throw new Pa("failed-precondition","The client has already been terminated.")}m(e,t,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.K.m(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?("unauthenticated"===e.code&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Pa("unknown",e.toString())}))}T(e,t,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.K.T(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?("unauthenticated"===e.code&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Pa("unknown",e.toString())}))}terminate(){this.J=!0}}async function Dl(e,t){const n=Oa(e),i=El(n.q)+"/documents",r={writes:t.map((e=>function(e,t){let n;if(t instanceof hl)n={update:xl(e,t.key,t.value)};else if(t instanceof fl)n={delete:Sl(e,t.key)};else if(t instanceof dl)n={update:xl(e,t.key,t.data),updateMask:Ml(t.fieldMask)};else{if(!(t instanceof pl))return Aa();n={verify:Sl(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof rl)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof sl)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof al)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ol)return{fieldPath:t.field.canonicalString(),increment:n.O};throw Aa()}(0,e)))),t.precondition.isNone||(n.currentDocument=(i=e,void 0!==(r=t.precondition).updateTime?{updateTime:bl(i,r.updateTime)}:void 0!==r.exists?{exists:r.exists}:Aa())),n;var i,r}(n.q,e)))};await n.m("Commit",i,r)}async function Ul(e,t){const n=Oa(e),i=El(n.q)+"/documents",r={documents:t.map((e=>Sl(n.q,e)))},s=await n.T("BatchGetDocuments",i,r),a=new Map;s.forEach((e=>{const t=(i=n.q,"found"in(r=e)?function(e,t){Ra(!!t.found),t.found.name,t.found.updateTime;const n=Tl(e,t.found.name),i=_l(t.found.updateTime),r=new No({mapValue:{fields:t.found.fields}});return Co.newFoundDocument(n,i,r)}(i,r):"missing"in r?function(e,t){Ra(!!t.missing),Ra(!!t.readTime);const n=Tl(e,t.missing),i=_l(t.readTime);return Co.newNoDocument(n,i)}(i,r):Aa());var i,r;a.set(t.key.toString(),t)}));const o=[];return t.forEach((e=>{const t=a.get(e.toString());Ra(!!t),o.push(t)})),o}async function Fl(e,t){const n=Oa(e),i=function(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=kl(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=kl(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Po(e.value))return{unaryFilter:{field:Pl(e.field),op:"IS_NAN"}};if(Oo(e.value))return{unaryFilter:{field:Pl(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Po(e.value))return{unaryFilter:{field:Pl(e.field),op:"IS_NOT_NAN"}};if(Oo(e.value))return{unaryFilter:{field:Pl(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pl(e.field),op:Ol(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);r&&(n.structuredQuery.where=r);const s=function(e){if(0!==e.length)return e.map((e=>{return{field:Pl((t=e).field),direction:Rl(t.dir)};var t}))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const a=(o=e,l=t.limit,o.S||Qa(l)?l:{value:l});var o,l;return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=Al(t.startAt)),t.endAt&&(n.structuredQuery.endAt=Al(t.endAt)),n}(n.q,tl(t));return(await n.T("RunQuery",i.parent,{structuredQuery:i.structuredQuery})).filter((e=>!!e.document)).map((e=>function(e,t,n){const i=Tl(e,t.name),r=_l(t.updateTime),s=new No({mapValue:{fields:t.fields}}),a=Co.newFoundDocument(i,r,s);return a}(n.q,e.document)))}
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
 */const Vl=new Map;function jl(e){if(e._terminated)throw new Pa("failed-precondition","The client has already been terminated.");if(!Vl.has(e)){Ta("ComponentProvider","Initializing Datastore");const a=(n=e._databaseId,i=e.app.options.appId||"",r=e._persistenceKey,s=e._freezeSettings(),t=new Va(n,i,r,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams),new ro(t,fetch.bind(null))),o=Nl(e._databaseId),l=function(e,t,n,i){return new Cl(e,t,n,i)}(e._authCredentials,e._appCheckCredentials,a,o);Vl.set(e,l)}var t,n,i,r,s;
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
return Vl.get(e)}class Bl{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Pa("invalid-argument","Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Pa("invalid-argument","cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,i){if(!0===t&&!0===i)throw new Pa("invalid-argument","experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,e.experimentalForceLongPolling,0,e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
 */class $l{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Bl({}),this._settingsFrozen=!1,e instanceof ja?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Pa("invalid-argument",'"projectId" not provided in firebase.initializeApp.');return new ja(e.options.projectId)}(e))}get app(){if(!this._app)throw new Pa("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Pa("failed-precondition","Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Bl(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new La;switch(e.type){case"gapi":const t=e.client;return Ra(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Da(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Pa("invalid-argument","makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Vl.get(e);t&&(Ta("ComponentProvider","Removing Datastore"),Vl.delete(e),t.terminate())}(this),Promise.resolve()}}
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
class ql{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ql(this.firestore,e,this._key)}}class Wl{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Wl(this.firestore,e,this._query)}}class Hl extends Wl{constructor(e,t,n){super(e,t,new Jo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ql(this.firestore,null,new Ha(e))}withConverter(e){return new Hl(this.firestore,e,this._path)}}function zl(e,t,...n){if(e=Rt(e),za("collection","path",t),e instanceof $l){const i=$a.fromString(t,...n);return Ka(i),new Hl(e,null,i)}{if(!(e instanceof ql||e instanceof Hl))throw new Pa("invalid-argument","Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child($a.fromString(t,...n));return Ka(i),new Hl(e.firestore,null,i)}}function Gl(e,t,...n){if(e=Rt(e),1===arguments.length&&(t=ao.P()),za("doc","path",t),e instanceof $l){const i=$a.fromString(t,...n);return Ga(i),new ql(e,null,new Ha(i))}{if(!(e instanceof ql||e instanceof Hl))throw new Pa("invalid-argument","Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child($a.fromString(t,...n));return Ga(i),new ql(e.firestore,e instanceof Hl?e.converter:null,new Ha(i))}}
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
class Kl{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Pa("invalid-argument","Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Wa(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
class Jl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jl(mo.fromBase64String(e))}catch(e){throw new Pa("invalid-argument","Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Jl(mo.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class Yl{constructor(e){this._methodName=e}}
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
 */class Xl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Pa("invalid-argument","Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Pa("invalid-argument","Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oo(this._lat,e._lat)||oo(this._long,e._long)}}
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
 */const Ql=/^__.*__$/;class Zl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new dl(e,this.data,this.fieldMask,t,this.fieldTransforms):new hl(e,this.data,t,this.fieldTransforms)}}class ec{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new dl(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function tc(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Aa()}}class nc{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.q=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Z(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}nt(e){return new nc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.q,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}et(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.nt({path:n,rt:!1});return i.st(e),i}it(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.nt({path:n,rt:!1});return i.Z(),i}ot(e){return this.nt({path:void 0,rt:!0})}ut(e){return vc(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.at)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Z(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(0===e.length)throw this.ut("Document fields must not be empty");if(tc(this.tt)&&Ql.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class ic{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.q=n||Nl(e)}ht(e,t,n,i=!1){return new nc({tt:e,methodName:t,at:n,path:Wa.emptyPath(),rt:!1,ct:i},this.databaseId,this.q,this.ignoreUndefinedProperties)}}function rc(e){const t=e._freezeSettings(),n=Nl(e._databaseId);return new ic(e._databaseId,!!t.ignoreUndefinedProperties,n)}function sc(e,t,n,i,r,s={}){const a=e.ht(s.merge||s.mergeFields?2:0,t,n,r);pc("Data must be an object, but it was:",a,i);const o=dc(i,a);let l,c;if(s.merge)l=new po(a.fieldMask),c=a.fieldTransforms;else if(s.mergeFields){const e=[];for(const i of s.mergeFields){const r=mc(t,i,n);if(!a.contains(r))throw new Pa("invalid-argument",`Field '${r}' is specified in your field mask but missing from your input data.`);wc(e,r)||e.push(r)}l=new po(e),c=a.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,c=a.fieldTransforms;return new Zl(new No(o),l,c)}class ac extends Yl{_toFieldTransform(e){if(2!==e.tt)throw 1===e.tt?e.ut(`${this._methodName}() can only appear at the top level of your update data`):e.ut(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ac}}class oc extends Yl{_toFieldTransform(e){return new ll(e.path,new rl)}isEqual(e){return e instanceof oc}}function lc(e,t,n,i){const r=e.ht(1,t,n);pc("Data must be an object, but it was:",r,i);const s=[],a=No.empty();fo(i,((e,i)=>{const o=yc(t,e,n);i=Rt(i);const l=r.it(o);if(i instanceof ac)s.push(o);else{const e=hc(i,l);null!=e&&(s.push(o),a.set(o,e))}}));const o=new po(s);return new ec(a,o,r.fieldTransforms)}function cc(e,t,n,i,r,s){const a=e.ht(1,t,n),o=[mc(t,i,n)],l=[r];if(s.length%2!=0)throw new Pa("invalid-argument",`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(mc(t,s[e])),l.push(s[e+1]);const c=[],u=No.empty();for(let e=o.length-1;e>=0;--e)if(!wc(c,o[e])){const t=o[e];let n=l[e];n=Rt(n);const i=a.it(t);if(n instanceof ac)c.push(t);else{const e=hc(n,i);null!=e&&(c.push(t),u.set(t,e))}}const h=new po(c);return new ec(u,h,a.fieldTransforms)}function uc(e,t,n,i=!1){return hc(n,e.ht(i?4:3,t))}function hc(e,t){if(fc(e=Rt(e)))return pc("Unsupported field value:",t,e),dc(e,t);if(e instanceof Yl)return function(e,t){if(!tc(t.tt))throw t.ut(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ut(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.rt&&4!==t.tt)throw t.ut("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const r of e){let e=hc(r,t.ot(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Rt(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return nl(t.q,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=co.fromDate(e);return{timestampValue:vl(t.q,n)}}if(e instanceof co){const n=new co(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:vl(t.q,n)}}if(e instanceof Xl)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Jl)return{bytesValue:wl(t.q,e._byteString)};if(e instanceof ql){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.ut(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Il(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ut(`Unsupported field value: ${Ja(e)}`)}(e,t)}function dc(e,t){const n={};return function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):fo(e,((e,i)=>{const r=hc(i,t.et(e));null!=r&&(n[e]=r)})),{mapValue:{fields:n}}}function fc(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof co||e instanceof Xl||e instanceof Jl||e instanceof ql||e instanceof Yl)}function pc(e,t,n){if(!fc(n)||("object"!=typeof(i=n)||null===i||Object.getPrototypeOf(i)!==Object.prototype&&null!==Object.getPrototypeOf(i))){const i=Ja(n);throw"an object"===i?t.ut(e+" a custom object"):t.ut(e+" "+i)}var i}function mc(e,t,n){if((t=Rt(t))instanceof Kl)return t._internalPath;if("string"==typeof t)return yc(e,t);throw vc("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const gc=new RegExp("[~\\*/\\[\\]]");function yc(e,t,n){if(t.search(gc)>=0)throw vc(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Kl(...t.split("."))._internalPath}catch(i){throw vc(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function vc(e,t,n,i,r){const s=i&&!i.isEmpty(),a=void 0!==r;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${i}`),a&&(l+=` in document ${r}`),l+=")"),new Pa("invalid-argument",o+e+l)}function wc(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class bc{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new ql(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new _c(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Sc("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class _c extends bc{data(){return super.data()}}class Ic{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(e,t){this._docs.forEach(e,t)}}function Sc(e,t){return"string"==typeof t?yc(e,t):t instanceof Kl?t._internalPath:t._delegate._internalPath}
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
 */class Tc{}function kc(e,...t){for(const n of t)e=n._apply(e);return e}class Ec extends Tc{constructor(e,t,n){super(),this.dt=e,this.wt=t,this.yt=n,this.type="where"}_apply(e){const t=rc(e.firestore),n=function(e,t,n,i,r,s,a){let o;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new Pa("invalid-argument",`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){Lc(a,s);const t=[];for(const n of a)t.push(Mc(i,e,n));o={arrayValue:{values:t}}}else o=Mc(i,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||Lc(a,s),o=uc(n,"where",a,"in"===s||"not-in"===s);const l=Fo.create(r,s,o);return function(e,t){if(t.N()){const n=Qo(e);if(null!==n&&!n.isEqual(t.field))throw new Pa("invalid-argument",`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const i=Xo(e);null!==i&&Nc(e,t.field,i)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Pa("invalid-argument",`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Pa("invalid-argument",`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,l),l}(e._query,0,t,e.firestore._databaseId,this.dt,this.wt,this.yt);return new Wl(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Jo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function xc(e,t,n){const i=t,r=Sc("where",e);return new Ec(r,i,n)}class Ac extends Tc{constructor(e,t){super(),this.dt=e,this._t=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Pa("invalid-argument","Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Pa("invalid-argument","Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new Ko(t,n);return function(e,t){if(null===Xo(e)){const n=Qo(e);null!==n&&Nc(e,n,t.field)}}(e,i),i}(e._query,this.dt,this._t);return new Wl(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Jo(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Rc(e,t="asc"){const n=t,i=Sc("orderBy",e);return new Ac(i,n)}class Oc extends Tc{constructor(e,t,n){super(),this.type=e,this.gt=t,this.bt=n}_apply(e){return new Wl(e.firestore,e.converter,(t=e._query,n=this.gt,i=this.bt,new Jo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),n,i,t.startAt,t.endAt)));var t,n,i}}function Pc(e){return Xa("limit",e),new Oc("limit",e,"F")}function Mc(e,t,n){if("string"==typeof(n=Rt(n))){if(""===n)throw new Pa("invalid-argument","Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Zo(t)&&-1!==n.indexOf("/"))throw new Pa("invalid-argument",`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child($a.fromString(n));if(!Ha.isDocumentKey(i))throw new Pa("invalid-argument",`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Ao(e,new Ha(i))}if(n instanceof ql)return Ao(e,n._key);throw new Pa("invalid-argument",`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ja(n)}.`)}function Lc(e,t){if(!Array.isArray(e)||0===e.length)throw new Pa("invalid-argument",`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new Pa("invalid-argument",`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Nc(e,t,n){if(!n.isEqual(t))throw new Pa("invalid-argument",`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
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
 */function Cc(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}class Dc extends class{convertValue(e,t="none"){switch(So(e)){case 0:return null;case 1:return e.booleanValue;case 2:return vo(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(wo(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Aa()}}convertObject(e,t){const n={};return fo(e.fields,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new Xl(vo(e.latitude),vo(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=_o(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Io(e));default:return null}}convertTimestamp(e){const t=yo(e);return new co(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=$a.fromString(e);Ra(Ll(n));const i=new ja(n.get(1),n.get(3)),r=new Ha(n.popFirst(5));return i.isEqual(t)||ka(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jl(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ql(this.firestore,null,t)}}function Uc(e){!function(e){if(Yo(e)&&0===e.explicitOrderBy.length)throw new Pa("unimplemented","limitToLast() queries require specifying at least one orderBy() clause")}((e=Ya(e,Wl))._query);const t=jl(e.firestore),n=new Dc(e.firestore);return Fl(t,e._query).then((t=>{const i=t.map((t=>new _c(e.firestore,n,t.key,t,e.converter)));return Yo(e._query)&&i.reverse(),new Ic(e,i)}))}function Fc(e,t,n,...i){const r=rc((e=Ya(e,ql)).firestore);let s;return s="string"==typeof(t=Rt(t))||t instanceof Kl?cc(r,"updateDoc",e._key,t,n,i):lc(r,"updateDoc",e._key,t),Dl(jl(e.firestore),[s.toMutation(e._key,cl.exists(!0))])}function Vc(e,t){const n=Gl(e=Ya(e,Hl)),i=Cc(e.converter,t),r=sc(rc(e.firestore),"addDoc",n._key,i,null!==n.converter,{});return Dl(jl(e.firestore),[r.toMutation(n._key,cl.exists(!1))]).then((()=>n))}
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
 */function jc(){return new oc("serverTimestamp")}Ia="9.6.0_lite",Gt(new Ot("firestore/lite",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),i=new $l(n,new Na(e.getProvider("auth-internal")),new Fa(e.getProvider("app-check-internal")));return t&&i._setSettings(t),i}),"PUBLIC")),Qt("firestore-lite","3.4.0",""),Qt("firestore-lite","3.4.0","esm2017");const Bc=function(e=Xt()){return Kt(e,"firestore/lite").getImmediate()}(Ui),$c=zl(Bc,"replays"),qc=zl(Bc,"entries");async function Wc(e){const t=(await function(e){const t=jl((e=Ya(e,ql)).firestore),n=new Dc(e.firestore);return Ul(t,[e._key]).then((t=>{Ra(1===t.length);const i=t[0];return new bc(e.firestore,n,e._key,i.isFoundDocument()?i:null,e.converter)}))}(Gl($c,e))).data();if(t)return{id:e,version:t.version,score:t.score,log:t.log,seed:t.seed,mode:t.mode}}const Hc=["normal","ex"],zc={normal:"NORMAL",ex:"EX"},Gc=document.querySelector(".leaderboard .entry-list"),Kc=document.querySelector(".leaderboard .about-button"),Jc=document.querySelector(".leaderboard .user-button"),Yc=document.querySelector(".about"),Xc=document.querySelector(".about .modal-close"),Qc=document.querySelector(".user"),Zc=document.querySelector(".user .modal"),eu=document.querySelector(".user .form"),tu=document.querySelector(".user .form-textfield"),nu=document.querySelector(".user .form-save"),iu=document.querySelector(".user .record-list"),ru=document.querySelector(".user .modal-close");if(!(Gc instanceof HTMLElement&&Kc instanceof HTMLElement&&Jc instanceof HTMLElement&&Yc instanceof HTMLElement&&Xc instanceof HTMLElement&&Qc instanceof HTMLElement&&Zc instanceof HTMLElement&&eu instanceof HTMLFormElement&&tu instanceof HTMLInputElement&&nu instanceof HTMLButtonElement&&iu instanceof HTMLElement&&ru instanceof HTMLElement))throw Error("invalid element");const su={normal:{},ex:{}};async function au(e){let t=su[e].meEntry;return t||(t=su[e].meEntry=await async function(e,t){const n=(await Uc(kc(qc,xc("version","==",e),xc("mode","==",t),xc("uid","==",wa()),Rc("score","desc"),Pc(1)))).docs[0];if(n){const e=n.data();return{id:n.id,uid:e.uid,name:e.name,replayId:e.replayId,score:e.score,mode:e.mode}}}(0,e)),t}async function ou(e){let t=su[e].entries;return t||(t=su[e].entries=await async function(e,t){return(await Uc(kc(qc,xc("version","==",e),xc("mode","==",t),Rc("score","desc"),Pc(100)))).docs.map((e=>{const t=e.data();return{id:e.id,uid:t.uid,name:t.name,replayId:t.replayId,score:t.score,mode:t.mode}}))}(0,e)),t}async function lu(e){const t=await async function(e){return{id:(await Vc($c,{uid:wa(),registeredAt:jc(),log:e.log,version:e.version,score:e.score,mode:e.mode,seed:e.seed})).id,...e}}(e),n=await au(t.mode);let i=!1;return n?n.score<e.score&&(i=!0,n.score=e.score,await async function(e,t){await Fc(Gl(qc,e.id),{registeredAt:jc(),replayId:t.id,score:t.score})}(n,t)):(i=!0,su[t.mode].meEntry=await async function(e){return{id:(await Vc(qc,{uid:wa(),name:ba(),registeredAt:jc(),replayId:e.id,version:e.version,score:e.score,mode:e.mode})).id,uid:wa(),name:ba(),replayId:e.id,score:e.score,mode:e.mode}}(t)),i&&(delete su[t.mode].entries,t.mode===du()&&cu(t.mode)),{replayId:t.id,newRecord:i}}async function cu(e){const t=(await ou(e)).map(((e,t)=>`\n      <div class="entry ${wa()===e.uid?"me":""}">\n        <div class="entry-order">${t+1}.</div>\n        <div class="entry-name">${e.name||"no name"}</div>\n        <div class="entry-score">￥${M(e.score)}</div>\n        <div class="entry-replay clickable" data-r="${e.replayId}"></div>\n      </div>`));Gc&&(Gc.innerHTML=t.join(""))}let uu=null;function hu(){const e=new URL(location.origin+location.pathname),t=mu();return t&&e.searchParams.set("r",t),e.href}function du(){return"ex"===new URL(location.href).searchParams.get("mode")?"ex":"normal"}let fu="",pu="";function mu(){return fu!==location.href&&(fu=location.href,pu=new URL(fu).searchParams.get("r")||""),pu}function gu(e){if(mu()===e)return;const t=new URL(location.href);e?t.searchParams.set("r",e):t.searchParams.delete("r"),history.replaceState(history.state,"",t)}addEventListener("click",(e=>{if(e.target instanceof HTMLElement){const t=e.target.closest("a");t&&Fi("link_click",{url:t.href})}})),Kc.addEventListener("click",(()=>{Fi("about_open"),Yc.classList.add("opened")})),Xc.addEventListener("click",(()=>{Yc.classList.remove("opened")})),document.addEventListener("click",(e=>{if(uu&&e.target instanceof HTMLElement){const t=e.target.closest(".entry-replay,.record-replay");t instanceof HTMLElement&&t.dataset.r&&(gu(t.dataset.r),uu(t.dataset.r),Yc.classList.remove("opened"),Qc.classList.remove("opened"),window.scrollTo({top:100,behavior:"smooth"}))}})),Jc.addEventListener("click",(async()=>{Fi("user_open"),tu.value=ba(),nu.disabled=!0,Qc.classList.add("opened"),Zc.classList.add("loading");try{const e=await Promise.all(Hc.map((e=>au(e)))),t=e.some((e=>"ex"===(null==e?void 0:e.mode)));let n="";e.forEach(((e,i)=>{const r=`<div>${zc[Hc[i]]}</div>`;e?n+=`\n          ${t?r:""}\n          <div>￥${M(e.score)}</div>\n          ${t?"":"<div></div>"}\n          <div class="record-replay clickable" data-r="${e.replayId}"></div>`:"ex"!==Hc[i]&&(n+=`\n          ${t?r:""}\n          <div>なし</div>\n          ${t?"":"<div></div>"}\n          <div></div>`)})),iu.innerHTML=n}catch(e){console.log(e)}Zc.classList.remove("loading"),tu.focus()})),ru.addEventListener("click",(()=>{Qc.classList.remove("opened")})),eu.addEventListener("submit",(e=>{e.preventDefault()})),tu.addEventListener("input",(()=>{nu.disabled=!1})),nu.addEventListener("click",(async()=>{Fi("user_save"),nu.disabled=!0,Zc.classList.add("loading");try{const e=tu.value,t=ba();await async function(e){const t=va();t&&await fs(t,{displayName:e})}(e);t!==ba()&&await Promise.all(Hc.map((async t=>{const n=await au(t);n&&(await async function(e,t){await Fc(Gl(qc,e.id),{name:t})}(n,e),n.name=e,delete su[t].entries)}))),cu(du())}catch{nu.disabled=!1}Zc.classList.remove("loading")})),ya((()=>{cu(du())}));const{titleLogo:yu,titleLogoIcon:vu}=yi;var wu=e=>{const t=fi.from(8).wait(300).to(0,600,ze.outSine).start(),n=fi.from(0).wait(300).to(1,600,ze.steps(3)).start(),i=fi.from(3).loopStart().to(-3,1500,ze.inOutSine).to(3,1500,ze.inOutSine).loopEnd().start(),r=()=>fi.from(-100).loopStart().wait(2e3).to(-100).to(h.flash.width,200).wait(3e3).to(-100).to(h.flash.width,200).to(-100).to(h.flash.width,200).wait(2e3).loopEnd(),s=fi.from(0).wait(60).on((()=>{h.normal=a().normal})),a=()=>({normal:c()?yu.ex:yu.normal,flash:c()?yu.exFlash:yu.normalFlash}),o=()=>{Ci.mode="ex"===Ci.mode?"normal":"ex",function(e){const t=new URL(location.href);"normal"===e?t.searchParams.delete("mode"):t.searchParams.set("mode",e),history.replaceState(history.state,"",t),cu(e)}(Ci.mode),Pi.titleModeChange.play()};var l;const c=()=>{var t;return"ex"===(null!==(l=null==e||null===(t=e.value)||void 0===t?void 0:t.mode)&&void 0!==l?l:Ci.mode)};let u=c(),h=a(),d=r().start();return()=>{u!==c()&&(u=c(),h.normal=h.flash=a().flash,d.end(),s.end(),d=r().start(),s.start());const l=F(ri,h.normal),f=h.flash.width,p=Math.round(d.value),m=h.normal.toBox(l,80);m.height+=30,m.originY+=25,e||li.onDown(m,o),ri.save(),ri.drawSprite(vu,F(ri,vu),53+Math.round(i.value)),ri.opacity(n.value),ri.drawSprite(h.normal,l,80+t.value),ri.opacity(.8),ri.drawSprite(h.flash.sub({x:Math.max(0,p),width:(p<0?100+p:Math.min(100,f-p))-f}),l+Math.max(0,p),80+t.value),ri.restore()}};const{buttonTwitter:bu}=yi;const{buttonMute:_u,buttonLight:Iu}=yi;const{card:Su,fontUiS:Tu}=yi;var ku=(e,t,n="")=>{const i=F(ri,Su.top),r=fi.from(0).to(t+(n?Tu[0].height+1:0),200,ze.steps(5)).start(!1);return s=>{r.update();const a=(t-r.value)/2|0;if(ri.drawSprite(Su.top,i,e+a),ri.drawSprite(Su.body,i,e+a+Su.top.height,Su.body.width,r.value),ri.drawSprite(Su.bottom,i,e+a+Su.top.height+r.value),n&&Tu[0].height<=r.value){const t=(Su.body.width-ri.measuretext(Tu,n,4))/2|0;ri.drawText(Tu,n,i+t,e+a+4,4)}r.done&&s&&s({x:i+4,y:e+a+4+(n?Tu[0].height+1:0),width:Su.body.width-8,height:r.value-(n?Tu[0].height+1:0)})}};const{tips:Eu}=yi;const{fontUi:xu,scoreBg:Au}=yi;var Ru=(e,t)=>{const n=fi.from(0).wait(150);let i=0;return(r,s)=>{if(ri.drawSprite(Au,e,t+2),ri.drawText(xu.normal,`y ${M(0|r)}`,e+1,t),ri.drawRect(e+1,t+11,Math.floor(128*Math.min(r/1e6,1)),2,Di.main),void 0!==s){i<s&&!n.running&&(i=s,n.start(!1));const r=n.update().running?xu.flash:xu.normal;ri.drawText(r,"h "+(0|s),e+1,t+21)}}};const{replayReady:Ou,replayLoading:Pu}=yi;const{buttonReset:Mu,buttonLight:Lu}=yi;const{pressAnyButton:Nu}=yi;const{fontUi:Cu,fontUiL:Du}=yi;const{uiStatusReset:Uu}=yi;const{card:Fu}=yi;var Vu=()=>{const e={},t=39,n=Ru(7,2),i=(r=Fu.body.width/2,s=22,e=>{const t=Math.floor(100*Math.max(e,0)),n=`t ${Math.floor(t/100)}`,i=`.${String(t%100).padStart(2,"0")}`,a=ri.measuretext(Du,n),o=ri.measuretext(Cu.normal,i),l=r-(a+1+o)/2;ri.drawText(Du,n,l,s),ri.drawText(Cu.normal,i,l+a+1,s+2)});var r,s;const a=((e,t)=>{const n=fi.from(!1).to(!0,100).to(!1).on((()=>{si.emit("sceneChange",(()=>(gu(""),qh())))})),i=()=>{n.started||(n.start(),Pi.uiButton.play())};return()=>{li.onDown(Uu.toBox(e-Uu.width,t-Uu.height),i),ri.opacity(n.value?.2:1),ri.drawSprite(Uu,e-Uu.width,t-Uu.height)}})(Fu.body.width,t),o=fi.from(-39).wait(250).to(0,250,ze.outSine).on((()=>{Ci.screenTop=t,si.emit("statusInitIn")})).start(),l=fi.from(0).to(-39,400,ze.inSine).on((()=>{Ci.screenTop=0,si.emit("statusFinOut"),je.remove(c)}));e.timeUp=()=>{l.start()},Ci.screenTop=0;const c=(r,s,c)=>{si.subscribe(e),ri.save(),ri.translate(F(ri,Fu.body),l.started?l.value:o.value),ri.drawSprite(Fu.body,0,0,Fu.body.width,t-Fu.bottom.height),ri.drawSprite(Fu.bottom,0,t-Fu.bottom.height),n(r,s),i(c/ii.fps),a(),ri.restore()};return c};const{success:ju}=yi;const{buttonReset:Bu,buttonLight:$u}=yi;const{buttonTwitter:qu}=yi;var Wu=e=>{const{time:t=30,times:n=1,color:i=v.parse("#fff8"),onEnd:r}=null!=e?e:{},s=fi.from(!0).to(!0,t).loopStart(n-1).to(!1,t).to(!0,t).loopEnd().start(),a=()=>{s.value&&ri.drawRect(0,0,ri.width,ri.height,i),s.done&&(je.remove(a),null==r||r())};return a};const{newRecord:Hu}=yi;var zu=(e,t)=>{const n=fi.from({x:0,y:0}).to({x:2,y:-2},10).to({x:-2,y:2},20).to({x:2,y:2},20).to({x:-2,y:-2},20).to({x:0,y:0}),i=fi.from(0).wait(300).to(e,500,ze.inSine).on((()=>{Ci.isSuccess?r.start():s.start()})).start(!1),r=fi.from(0).wait(400),s=fi.from(0).wait(200).on((()=>pi.ui.add(((e,t)=>{const n=fi.from(ri.height).to(ri.height-qu.height-30,300,ze.outSine).start(),i=()=>{const n=(null==t?void 0:t.isResolved())?`￥${M(e)}\n#FireShooterSan\n${hu()}`:`#FireShooterSan\n${hu()}`,i=new URLSearchParams({text:n});window.open(`https://twitter.com/intent/tweet?${i}`)};return()=>{const e=n.value;li.onDown(qu.toBox(30,e),i),ri.drawSprite(qu,30,e)}})(e,t),(()=>{const e=fi.from(ri.height).to(ri.height-Bu.height-30,300,ze.outSine).start(),t=fi.from(!1).to(!0,100).to(!1).on((()=>{si.emit("sceneChange",(()=>(gu(""),qh())))})),n=()=>{t.started||(t.start(),Pi.uiButton.play())};return()=>{const i=ri.width-Bu.width-30,r=e.value;li.onDown(Bu.toBox(i,r),n),ri.drawSprite(Bu,i,r),t.value&&(ri.save(),ri.opacity(.5),ri.drawSprite($u,i,r),ri.restore())}})()))),a=ku(90,49,"RESULT"),o=Ru(3,16),l=((e,t,n)=>{const i=fi.from({rotate:-15,scale:3}).to({rotate:-0,scale:1},250,ze.inSine).on((()=>{r.start(),n(),Pi.resultSuccess.play()})).start(!1),r=fi.from(!1).loopStart().to(!1,500).to(!0,500).loopEnd();return()=>{i.update(),ri.save(),ri.translate(e,t),ri.rotate(i.value.rotate),ri.scale(i.value.scale),ri.drawSprite(r.value?ju.flash:ju.normal),ri.restore()}})(106,1,(()=>{var e;n.start(),s.start(),(null==t||null===(e=t.value)||void 0===e?void 0:e.newRecord)&&pi.ui.add((()=>{const e=fi.from(!1).loopStart().to(!1,500).to(!0,500).loopEnd().start();let t=!0;return()=>{t&&(t=!1,si.emit("newRecordShow"),pi.ui.add(Wu({color:v.parse("#fff"),time:100})));const n=e.value?Hu.flash:Hu.normal;ri.drawSprite(n,F(ri,n),44)}})())}));let c=i.value;return()=>{ri.save(),ri.translate(n.value.x,n.value.y),a((e=>{ri.translate(e.x,e.y),o(i.update().value),r.done&&l()})),ri.restore(),c!==i.value&&Pi.resultCounting.play(),c=i.value}};const{start:Gu}=yi;const{replayNow:Ku}=yi;const{finish:Ju}=yi;const{playerBullet:Yu}=yi;const{playerBulletHit:Xu}=yi;const{playerBullet:Qu}=yi;var Zu=(e,t,n)=>{const i={};let r=0,s=0,a=1/0,o=0,l=-90,c=0;i.enemyHit=()=>{je.remove(u),pi.effectBack.add(((e,t)=>{const n=fi.from(2).to(1,100,ze.inSine).on((()=>{je.remove(i)})).start(),i=()=>{ri.save(),ri.opacity(.8),ri.translate(e,t),ri.scale(n.value),ri.drawSprite(Xu),ri.restore()};return i})(e,t)),si.emit("playerBulletRemove")},i.enemyPos=({id:n,x:i,y:c})=>{const u=N(L(i-e,c-t)-l),h=Math.abs(u);(-40<u&&u<40&&h<a||r===n)&&(s=n,a=r===n?0:h,o=u)},Pi.playerFire.play();const u=()=>{if(s&&l!==o){const e=n?2:.5;l+=Math.min(Math.max(o,-e),e)}r=s,s=0,a=1/0;const h=C(l,n?6:8);if(e+=h.x,t+=h.y,e<=-Qu.originRight||ri.width+Qu.originLeft<=e||t<=Ci.screenTop-Qu.originBottom||ri.height+Qu.originTop<=t)return je.remove(u),void si.emit("playerBulletRemove");c++%3==0&&pi.effectBack.add(((e,t)=>{const n=fi.from(.2).to(0,250,ze.inSine).on((()=>{je.remove(i)})).start(),i=()=>{ri.save(),ri.opacity(n.value),ri.drawSprite(Yu,e,t),ri.restore()};return i})(e,t)),si.subscribe(i),ai.emit("playerBulletHit",null,Qu.toBox(e,t),i),ri.drawSprite(Qu,e,t)};return u};const{playerDestroyChip:eh}=yi;var th=(e,t,n,i)=>{const r=fi.from(0).wait(i).start(),s=fi.from(0).to(2).to(1,200,ze.inSine).start(!1),a=fi.from(0).to(.8,100).wait(300).to(0,200).on((()=>{je.remove(c)})).start(!1),o=fi.from(4).to(.2,300,ze.outSine).start(!1),l=C(n),c=()=>{r.done&&(o.update(),e+=l.x*o.value,t+=l.y*o.value,ri.save(),ri.opacity(a.update().value),ri.translate(0|e,0|t),ri.scale(s.update().value),ri.drawSprite(eh),ri.restore())};return c};const{playerDestroy:nh}=yi;const{player:ih}=yi,rh=e=>{const t={},n=fi.from(ri.height+ih.normal.originTop).wait(200).to(ri.height-30,200,ze.outSine).start(),i=fi.from(!1).start();for(let e=0;e<12;e++)i.to(!0,60).to(!1,60);let r=!1,s=ri.width/2,a=0;t.enemyHit=t.enemyBulletHit=()=>{!r&&i.done&&je.remove(o)&&(Ci.heartRate=0,Ci.clearing.start(),si.emit("playerDestroy"),pi.effectOverEnemy.add(((e,t)=>{const n=fi.from(0).to(24,250,ze.outSine).wait(200).start(),i=fi.from(0).to(2,100,ze.outSine).to(.7,150,ze.inOutSine).to(1.2,50,ze.inSine).to(1,100,ze.inSine).start(),r=fi.from(1).wait(200).to(0,250,ze.inSine).on((()=>{je.remove(a)})).start(),s=Di.accent.opacity(.37);for(let n=0;n<720;n+=48)pi.effectOverEnemy.add(th(e,t,n,n/2+200));Pi.playerHit.play();const a=()=>{ri.save(),ri.opacity(r.value),ri.translate(0|e,0|t),n.done||ri.drawCircle(0,-6,0|n.value,s),ri.scale(i.value),ri.drawSprite(nh),ri.restore()};return a})(s,a)),fi.from(0).wait(1e3).on((()=>{pi.player.add(rh(e))})).start())},t.timeUp=()=>{r=!0};const o=()=>{si.subscribe(t);const o=i.value?ih.flash:ih.normal;if(!n.done)return a=n.value,void ri.drawSprite(o,s,a);if(r&&e)return void ri.drawSprite(o,s,a);let l=!1;if(li.isDown){const e=li.vec;s+=1.4*e.x,a+=1.4*e.y,l=li.downCount>7}else{l=oi.fire.downCount>7;const e=function([e,t,n,i]){const r=(t.isDown?1:0)+(i.isDown?-1:0),s=(n.isDown?1:0)+(e.isDown?-1:0),a=Math.sqrt(r*r+s*s)||1;return{x:r/a,y:s/a}}(ci);s+=e.x*(l?1.5:4.5),a+=e.y*(l?1.5:4.5)}s=Math.min(Math.max(s,o.originLeft),ri.width-o.originRight),a=Math.min(Math.max(a,Ci.screenTop+o.originTop),ri.height-o.originBottom),(ui.some((e=>e.isDown))&&pi.playerBullet.isEmpty||ui.some((e=>e.isDownChange))&&pi.playerBullet.size<3)&&pi.playerBullet.add(Zu(s,a-o.originTop,l)),Ci.playerPos={x:s,y:a},r||ai.emit("playerHit",null,{x:s,y:a,width:0,height:0,originX:0,originY:0},t),ri.drawSprite(o,s,a)};return o};var sh=rh;const{enemyNotice:ah,enemyNoticeLarge:oh}=yi;let lh=0;const{fontRate:ch}=yi;var uh=(e,t,n,i)=>{const r=fi.from(!1).loopStart().to(!0,40).to(!1,60).loopEnd(),s=fi.from(0).to(-6,200,ze.outSine).wait(300).on((()=>{je.remove(a)})).start();16<=n&&r.start(!1);const a=()=>{if(n>1){const i=r.update().value?ch.flash:ch.normal;ri.drawText(i,`*${n}`,0|e,t+s.value|0,-1)}};return a};const{enemyTakeChip:hh}=yi;const{enemyTake:dh,enemyLargeTake:fh}=yi;var ph=({x:e,y:t,large:n,heart:i})=>{const r=Ci.getHeartRate(),s=fi.from(0).to(n?32:16,250,ze.outSine).wait(100).start(),a=fi.from(0).to(1.5,100,ze.outSine).to(.8,100,ze.inOutSine).to(1,100,ze.inSine).start(),o=fi.from(.9).wait(200).to(0,200,ze.inSine).on((()=>{je.remove(c),pi.effectOverPlayer.add(uh(e,t,r))})).start(),l=Di.accent.opacity(.37),c=()=>{ri.save(),ri.opacity(o.value),ri.translate(0|e,0|t),s.done||ri.drawCircle(0,0,0|s.value,l),ri.scale(a.value),ri.drawSprite(n?fh:dh),ri.restore()};return c};const{enemy:mh,enemyLarge:gh}=yi;let yh=1;var vh=(e,t)=>{const n={},i=yh++,r=e.hp,s={id:i,x:e.x,y:e.y,hp:e.hp,large:e.large},a=e.large?gh:mh;e.me&&(e.me.id=i);let o=!1;const l=fi.from(2).to(1,150,ze.inSine).start(!1),c=fi.from(!1).to(!0,60).to(!1,60).to(!0,60).to(!1),u=fi.from(1).to(0,200,ze.inSine).on((()=>{je.remove(h)}));n.playerBulletHit=()=>{o||(c.running||c.start(),Pi.enemyHit.play(),--s.hp<=0&&je.remove(h)&&(Ci.heartRate++,Ci.addHeart(r),pi.effectBack.add(ph({...s,heart:r})),si.emit("enemyTake",{id:i,large:e.large}),si.emit("enemyDestroy",{id:i}),e.large?Pi.enemyTakeLarge.play():Pi.enemyTake.play()))},n.enemyTake=t=>{var n;(null===(n=e.parent)||void 0===n?void 0:n.id)===t.id&&je.remove(h)&&(Ci.addHeart(r),pi.effectBack.add(ph({...s,heart:r})),si.emit("enemyDestroy",{id:i}),si.emit("enemyTake",{id:i,large:e.large}))},n.timeUp=()=>{o=!0,u.start(),pi.effectBack.add((({x:e,y:t,large:n})=>{const i=fi.from(0).to(n?16:8,400,ze.outSine).start(),r=fi.from(.6).wait(200).to(0,200,ze.inSine).on((()=>{je.remove(s)})).start(),s=()=>{ri.save(),ri.opacity(r.value),ri.drawCircle(0|e,0|t,0|i.value,Di.accent),ri.restore()};return s})({...s}))};const h=()=>{const d=e.noOver||e.noHorOver,f=e.noOver||e.noVertOver;if(s.hp<=0||!d&&(s.x<=-a.body.originRight||ri.width+a.body.originLeft<=s.x)||!f&&(s.y<=Ci.screenTop-a.body.originBottom||ri.height+a.body.originTop<=s.y))return void(je.remove(h)&&si.emit("enemyDestroy",{id:i}));si.subscribe(n),o||t(s),ri.save(),ri.translate(s.x,s.y),o||ai.emit("enemyHit",null,a.body.toBox(0,0),n),si.emit("enemyPos",{id:i,x:s.x,y:s.y}),ri.scale(u.started?u.value:l.update().value),ri.drawSprite(c.value?a.bodyFlash:a.body);const p=c.value?a.gaugeFlash:a.gauge,m=Math.ceil(p.height*(Math.max(0,s.hp)/r));ri.drawSprite(p.sub({y:m,height:-m,originY:-m})),ri.restore()};return pi.enemyNotice.add(((e,t,n)=>{const i={},r=t-1,s=Ci.isFirstEnemy,a=Ci.enemyWaveId;var o,l;lh=s?300:lh+(null!==(o=e.showTime)&&void 0!==o?o:50);const c=fi.from(0).wait(null!==(l=e.wait)&&void 0!==l?l:0),u=fi.from(0).wait(lh).to(2).to(1,200,ze.outSine).start(),h=fi.from(1).to(0,300,ze.inSine).on((()=>{je.remove(d)}));s||(i.enemyShow=e=>{c.started||e.id!==r||c.start()},i.enemyDestroy=e=>{e.id===r&&c.end()}),i.timeUp=()=>{h.start()},Ci.isFirstEnemy=!1;const d=()=>{if(si.subscribe(i),!h.started&&(s&&!c.started&&Ci.enemyWaveId!==a||c.done))return je.remove(d),pi.enemy.add(n),si.emit("enemyShow",{id:t}),void Pi.enemyShow.play();ri.save(),ri.opacity(Ci.enemyWaveId!==a||e.large?.3:.2),ri.translate(e.x,e.y),ri.scale(h.started?h.value:u.value),ri.drawSprite(e.large?oh:ah),ri.restore()};return d})(e,i,h)),h};const{enemyBulletTake:wh,enemyBulletLargeTake:bh}=yi;var _h=({x:e,y:t,large:n,angle:i,speed:r})=>{const s=fi.from(0).to(n?8:4,400,ze.outSine).start(),a=fi.from(.6).wait(200).to(0,200,ze.inSine).on((()=>{je.remove(o)})).start(),o=()=>{const n=C(i instanceof ze?i.value:i,r instanceof ze?r.value:r);e+=n.x,t+=n.y,ri.save(),ri.opacity(a.value),ri.drawCircle(0|e,0|t,0|s.value,Di.accent),ri.restore()};return o};const{enemyBullet:Ih,enemyBulletLarge:Sh}=yi;var Th=e=>{const t={},n=fi.from(0).loopStart().to(1,500,ze.frameSteps(2)).to(0).loopEnd().start(!1);let{x:i,y:r}=e;t.enemyTake=t=>{if(t.id===e.id&&je.remove(s)){const t=e.large?2:1;Ci.addHeart(t),pi.effectBack.add((({x:e,y:t,large:n,heart:i})=>{const r=Ci.getHeartRate(),s=fi.from(0).to(n?16:8,250,ze.outSine).wait(100).start(),a=fi.from(0).to(1.5,100,ze.outSine).to(.8,100,ze.inOutSine).to(1,100,ze.inSine).start(),o=fi.from(.9).wait(200).to(0,200,ze.inSine).on((()=>{je.remove(c),pi.effectOverPlayer.add(uh(e,t,r))})).start(),l=Di.accent.opacity(.37),c=()=>{ri.save(),ri.opacity(o.value),ri.translate(0|e,0|t),s.done||ri.drawCircle(0,0,0|s.value,l),ri.scale(a.value),ri.drawSprite(n?bh:wh),ri.restore()};return c})({...e,x:i,y:r,heart:t}))}},t.enemyDestroy=t=>{t.id===e.id&&fi.from(0).wait(1e3).on((()=>{je.remove(s)&&pi.effectBack.add(_h({...e,x:i,y:r}))})).start()},e.large?Pi.enemyFireLarge.play():Pi.enemyFire.play();const s=()=>{if(Ci.clearing.running&&je.remove(s))return void pi.effectBack.add(_h({...e,x:i,y:r}));const a=(e.large?Sh:Ih)[n.update().value],o=C(e.angle instanceof ze?e.angle.value:e.angle,e.speed instanceof ze?e.speed.value:e.speed);i+=o.x,r+=o.y,i<=-a.originRight&&o.x<=0||ri.width+a.originLeft<=i&&0<=o.x||r<=Ci.screenTop-a.originBottom&&o.y<=0||ri.height+a.originTop<=r&&0<=o.y?je.remove(s):(si.subscribe(t),ai.emit("enemyBulletHit",null,a.toBox(i,r),t),ri.drawSprite(a,i,r))};return s};const kh=e=>{const t=(t,n)=>$(t,n,e.rank/2),n=fi.from(0).wait(mi.nextInt(t(300,0),t(2e3,200))).start(!1),i=fi.from(!1).to(!0);for(let n=0;n<e.rank;n++)i.wait(t(300,100)).to(!0);return vh({...e},(e=>{n.update().done&&(n.wait(mi.nextInt(t(2e3,500),t(5e3,800))),i.start(!1)),i.update().getAndSet(!1)&&pi.enemyBullet.add(Th({...e,angle:90,speed:t(1,3)}))}))};const Eh=e=>{const t=(t,n)=>$(t,n,e.rank/2),n={},i=yi.enemy.body,r=fi.from(!0).start(!1);let s=0,a=0;for(let n=0;n<e.rank;n++)r.wait(t(1e3,600)).to(!0);return vh({...e},(o=>{if(si.subscribe(n),r.update().getAndSet(!1)){const n=D(o.x-Ci.playerPos.x,o.y-Ci.playerPos.y);s=3*n.x,a=3*n.y;const i=L(Ci.playerPos.x-o.x,Ci.playerPos.y-o.y),r=t(.5,1);for(let t=0;t<e.rank+2;t++)pi.enemyBullet.add(Th({...o,angle:i,speed:1.5+t*r}))}else s+=(0-s)/20,a+=(4-a)/20;o.x+=s,o.y+=a,(o.x<i.originLeft||ri.width-i.originRight<o.x)&&(s=-s,o.x+=s)}))};const xh=e=>{const t=(t,n)=>$(t,n,e.rank/2),n=C(90+75*Math.sign(e.x-ri.width/2),t(2,4)),i=yi.enemy.body;return vh({...e},(r=>{if(r.x+=n.x,r.y+=n.y,r.x<i.originLeft||ri.width-i.originRight<=r.x){n.x=-n.x,r.x+=n.x;const i=t(1.5,2.5),s=n.x<0?180:0;if(0===e.rank){const t=5*e.no;pi.enemyBullet.add(Th({...r,angle:s+90-t,speed:i}),Th({...r,angle:s-90+t,speed:i}))}else if(1===e.rank)pi.enemyBullet.add(Th({...r,angle:s+90,speed:i}),Th({...r,angle:s-90,speed:i}),Th({...r,angle:s+60,speed:i}),Th({...r,angle:s-60,speed:i}));else{const t=2===e.rank?30:45;for(let e=-90;e<=90;e+=t)pi.enemyBullet.add(Th({...r,angle:s+e,speed:i}))}}}))};const Ah=e=>{const t=(t,n)=>$(t,n,e.rank/2);let n=e.angle;const i=fi.from(80).to(30,2e3,ze.outSine).to(200,2e3,ze.inSine).start(!1),r=fi.from(!1).loopStart().wait(t(300,80)).to(!0).loopEnd().start(!1),s=C(n),a=e.x+s.x*i.value,o=e.y+s.y*i.value,l=t(2,3);return vh({...e,x:a,y:o},(s=>{i.update(),r.update(),n+=l;const a=C(n);if(s.x=e.x+a.x*i.value,s.y=e.y+a.y*i.value,r.getAndSet(!1)){const e=L(Ci.playerPos.x-s.x,Ci.playerPos.y-s.y),n=fi.from(.5).to(t(2,3),t(500,300),ze.inSine).start();pi.enemyBullet.add(Th({...s,angle:e,speed:n}))}}))};const Rh=e=>{const t=(t,n)=>$(t,n,e.rank/2);let n=0,i=0,r=!1;const s=t(2,3.5);return vh({...e},(a=>{if(0===n&&(n=Ci.playerPos.y<e.y?-1:1),0===i)a.y+=s*n,(n<0&&Ci.playerPos.y>=a.y||n>0&&Ci.playerPos.y<=a.y)&&(i=Ci.playerPos.x<a.x?-1:1);else if(a.x+=s*i,!r&&(i<0&&Ci.playerPos.x>=a.x||i>0&&Ci.playerPos.x<=a.x)){const n=Ci.playerPos.y<a.y?270:90,i=t(.5,1);for(let t=0;t<e.rank+2;t++)pi.enemyBullet.add(Th({...a,angle:n,speed:2+t*i}));r=!0}}))};const Oh=e=>{const t=(t,n)=>$(t,n,e.rank/2),n=e.x<ri.width/2?-yi.enemy.body.originRight:ri.width+yi.enemy.body.originLeft,i=fi.from(e.x).to(ri.width-e.x,1e3,ze.outSine).to(n,1e3,ze.inSine).start(!1),r=fi.from(e.y).to(e.y2,1700,ze.inOutSine).to(e.y2-(e.y2-e.y)/5,300,ze.inSine).start(!1),s=fi.from(!0).start(!1),a=fi.from(!1).to(!0);e.rank<2?s.wait(1100).to(!0):s.wait(500).to(!0).wait(500).to(!0);for(let n=0;n<2*e.rank;n++)a.wait(t(150,50)).to(!0);return vh({...e},(e=>{if(e.x=i.update().value,e.y=r.update().value,s.update().getAndSet(!1)&&a.start(!1),a.update().getAndSet(!1)){const n=L(Ci.playerPos.x-e.x,Ci.playerPos.y-e.y),i=t(12,8),r=t(1.5,3.5);pi.enemyBullet.add(Th({...e,angle:n+i,speed:r}),Th({...e,angle:n-i,speed:r}))}}))};const Ph=e=>{const t=(t,n)=>$(t,n,e.rank/2),n=fi.from(!1).wait(t(800,500)).loopStart().to(!0).wait(t(1e3,200)).loopEnd().start(!1),i=fi.from(e.y).to(e.y+10,t(500,300),ze.inOutSine).to(Ci.screenTop-yi.enemy.body.originBottom,t(2500,1500),ze.inSine).start(!1);let r=0,s=0,a=[],o=mi.nextInt(t(60,20));const l=t(1,2);return vh({noHorOver:!0,...e},(e=>{a.unshift(Ci.playerPos.x);const c=a[Math.min(a.length-1,o)];s+=t(5e-4,.001),r+=Math.min(Math.max(-s,c-e.x),s),e.x+=Math.min(Math.max(-l,r),l),e.y=i.update().value;const u=t(30,20);n.update().getAndSet(!1)&&pi.enemyBullet.add(Th({...e,angle:90-u,speed:1}),Th({...e,angle:90+u,speed:1}))}))};const Mh=e=>{const t=(t,n)=>$(t,n,e.rank/2),n=e.x<ri.width/2?ri.width+yi.enemy.body.originLeft:-yi.enemy.body.originRight,i=fi.from(e.x).to(n,t(2500,1500),ze.inSine).start(!1),r=fi.from(e.y).to(Ci.screenTop-yi.enemy.body.originBottom-10,t(2500,1500),ze.outSine).start(!1),s=fi.from(!1).loopStart().wait(t(400,50)).to(!0).loopEnd().start(!1);return vh({noHorOver:!0,...e},(e=>{if(e.x=i.update().value,e.y=r.update().value,s.update().getAndSet(!1)){const n=t(30,45),i=mi.nextFloat(90-n,90+n),r=mi.nextFloat(1,2);pi.enemyBullet.add(Th({...e,angle:i,speed:r}))}}))};const Lh=e=>{const t=(t,n)=>$(t,n,e.rank/2),n={},i=fi.from(!1).wait(t(500,200)).loopStart().to(!0).wait(t(1500,1e3)).loopEnd().start(!1),r=fi.from(!1).to(!0);let s=90,a=0;for(let n=0;n<1+3*e.rank;n++)r.wait(t(150,80)).to(!0);return vh({large:!0,noOver:!0,...e},(o=>{if(si.subscribe(n),!r.running&&!r.value){const e=N(L(Ci.playerPos.x-o.x,Ci.playerPos.y-o.y)-s),n=t(1,2);s+=Math.min(Math.max(-n,e),n)}i.update().getAndSet(!1)&&(r.start(!1),a=s),r.update().getAndSet(!1)?(pi.enemyBullet.add(Th({...o,angle:a,speed:t(2.5,2)})),e.me.fire=!0):e.me.fire=!1;const l=C(s);o.x+=.3*l.x,o.y+=.3*l.y,e.me.x=o.x,e.me.y=o.y,e.me.angle=s}))},Nh=e=>{const t=e.parent,n=C(t.angle+e.angle),i=t.x+n.x*e.dist,r=t.y+n.y*e.dist;return vh({x:i,y:r,noOver:!0,...e},(n=>{const i=C(t.angle+e.angle);var r,s;n.x=t.x+i.x*e.dist,n.y=t.y+i.y*e.dist,t.fire&&pi.enemyBullet.add(Th({...n,id:t.id,angle:t.angle,speed:(r=1.5,s=1,$(r,s,e.rank/2))}))}))};const Ch=e=>{const t=(t,n)=>$(t,n,e.rank/2),n={},i=fi.from(!1).wait(t(500,200)).loopStart().to(!0).wait(t(1500,1e3)).loopEnd().start(!1),r=fi.from(e.y).loopStart().to(e.y2,4e3,ze.inOutSine).to(e.y,4e3,ze.inOutSine).loopEnd().start(!1),s=fi.from(0).loopStart().to(t(16,22),1e3,ze.outSine).to(-t(16,22),2e3,ze.inOutSine).to(0,1e3,ze.inSine).loopEnd().start(!1),a=fi.from(!1).to(!0);for(let n=0;n<1+3*e.rank;n++)a.wait(t(150,40)).to(!0);let o=0,l=0;return vh({large:!0,...e},(c=>{si.subscribe(n),c.x=e.x+s.update().value,c.y=r.update().value,i.update().getAndSet(!1)&&(a.start(!1),o=0,l=L(Ci.playerPos.x-c.x,Ci.playerPos.y-c.y)),a.update().getAndSet(!1)?(pi.enemyBullet.add(Th({...c,angle:l,speed:t(2.5,1.5+.3*o)})),e.me.fire=!0,e.me.rapidNo=o++):(e.me.fire=!1,e.me.rapidNo=0),e.me.x=c.x,e.me.y=c.y}))},Dh=e=>{const t=(t,n)=>$(t,n,e.rank/2),n=e.parent,i=C(e.angle),r=n.x+i.x*e.dist,s=n.y+i.y*e.dist/2;let a=0;return vh({x:r,y:s,noOver:!0,...e},(i=>{e.angle+=t(2,1);const r=C(e.angle);i.x=n.x+r.x*e.dist,i.y=n.y+r.y*e.dist/2,n.fire&&(0===n.rapidNo&&(a=L(Ci.playerPos.x-i.x,Ci.playerPos.y-i.y)),pi.enemyBullet.add(Th({...i,id:n.id,angle:a,speed:t(1.5,1+.2*n.rapidNo)})))}))};const Uh=e=>{const t=(t,n)=>$(t,n,e.rank/2),n={},i=yi.enemyLarge.body,r=fi.from(t(3,5)).wait(t(1500,500)).to(0,t(1e3,400),ze.inSine);let s={x:0,y:0};return vh({large:!0,...e},(a=>{si.subscribe(n),r.update(),a.x+=s.x*r.value,a.y+=s.y*r.value;let o=null;if(!r.running){r.start(!1),s=D(a.x-Ci.playerPos.x,a.y-Ci.playerPos.y);const n=L(Ci.playerPos.x-a.x,Ci.playerPos.y-a.y);o=[];const i=t(2,1),l=[2,3,5][e.rank];for(let e=0;e<l;e++)o.push({angle:n+e*t(30,45),speed:i}),0<e&&e<4&&o.push({angle:n-e*t(30,45),speed:i});for(const e of o)pi.enemyBullet.add(Th({...a,angle:e.angle,speed:e.speed}))}(a.x<i.originLeft||ri.width-i.originRight<=a.x)&&(s.x=-s.x,a.x+=s.x*r.value),(a.y<Ci.screenTop+i.originTop||ri.height-i.originBottom<=a.y)&&(s.y=-s.y,a.y+=s.y*r.value),e.me.history.push({x:a.x,y:a.y,bullets:o})}))},Fh=e=>{const t=(t,n)=>$(t,n,e.rank/2),n=e.parent,i=e.no*t(8,4),r=e.no*t(.2,.1);return vh({noOver:!0,...e},(e=>{const t=n.history.length-1-i,s=n.history[Math.max(0,t)];if(e.x=s.x,e.y=s.y,s.bullets&&0<=t)for(const t of s.bullets)pi.enemyBullet.add(Th({...e,id:n.id,angle:t.angle,speed:t.speed-r}))}))};const Vh=e=>{const t=(t,n)=>$(t,n,e.rank/2),n=fi.from(!1).wait(t(400,0)).loopStart().to(!0).wait(t(150,150)).loopEnd().start(!1),i=t(60,70),r=C(e.angle),s=e.x+r.x*i,a=e.y+r.y*i;let o=-1;return vh({large:!0,...e,x:s,y:a},(r=>{e.angle+=t(.5,1.5);const l=C(e.angle);if(r.x=e.x+l.x*i,r.y=e.y+l.y*i,n.update().getAndSet(!1)){if(o<0){const e=L(Ci.playerPos.x-s,Ci.playerPos.y-a);o=45*Math.round(e/45)+360}else o+=45;for(let t=0;t<1+e.rank**2;t++){const n=0===e.rank?fi.from(4).to(2,200,ze.inSine):1===e.rank?fi.from(4-t/2).to(2-t/2,200,ze.inSine):fi.from(8-2*t).to(1,200,ze.inSine);pi.enemyBullet.add(Th({...r,angle:o,speed:n.start()}))}}}))};const jh=[(e,t)=>{const n=e>0?1:0,i=4+2*n,r=28-4*n;let s=Ci.playerPos.x<ri.width/2?-1:1,a=(ri.width-(i-1)*r*s)/2,o=120;for(const n of U(2)){for(const n of U(i))kh({lap:e,rank:t,hp:1,x:a,y:o,wait:300}),a+=r*s;s=-s,a+=r*s,o-=r}},(e,t)=>{const n=e>0?1:0,i=4+2*n,r=20-2*n,s=Ci.playerPos.x<ri.width/2?ri.width-30:30,a=ri.height-i*r-60;for(const n of U(i))Rh({lap:e,rank:t,hp:1,x:s,y:a+r*n,wait:500})},(e,t)=>{const n=ri.width/2,i={id:0,x:n,y:60,angle:90,fire:!1};Lh({lap:e,rank:t,hp:4+2*e,x:n,y:60,me:i});for(const[n,r]of[[-100,50],[-60,30],[60,30],[100,50]])Ci.isFirstEnemy=!0,Nh({lap:e,rank:t,hp:2+e,parent:i,angle:n,dist:r})},(e,t)=>{const n=e>0?1:0,i=4+2*n,r=25-9*n,s=Ci.playerPos.x<ri.width/2?-1:1,a=(ri.width-(i-1)*r*s)/2,o=ri.height-50;for(const n of U(i))Ph({lap:e,rank:t,hp:1,x:a+n*r*s,y:o,wait:300})},(e,t)=>{const n=4+2*(e>0?1:0),i=Ci.playerPos.x<ri.width/2?ri.width-30:30,r=ri.height-40;for(const s of U(n))Mh({lap:e,rank:t,hp:1,x:i,y:r,wait:400})},(e,t)=>{const n=ri.width/2,i=ri.height-50,r={id:0,x:n,y:i,fire:!1,rapidNo:0};Ch({lap:e,rank:t,hp:4+2*e,x:n,y:i,y2:80,me:r});for(let n=0;n<360;n+=90)Ci.isFirstEnemy=!0,Dh({lap:e,rank:t,hp:2+e,parent:r,angle:n-45,dist:50})},(e,t)=>{const n=e>0?1:0,i=4+2*n,r=20-4*n,s=Ci.playerPos.x<ri.width/2?ri.width-r:r,a=Ci.playerPos.x<ri.width/2?-1:1;for(const n of U(i))Eh({lap:e,rank:t,hp:1,x:s+n*r*a,y:80,wait:600})},(e,t)=>{const n=4+2*(e>0?1:0),i=Ci.playerPos.x<ri.width/2?ri.width-30:30;for(const r of U(n))xh({lap:e,rank:t,hp:1,x:i,y:50,wait:400,no:r})},(e,t)=>{const n=ri.width/2,i={id:0,history:[{x:n,y:100,bullets:null}]};for(let r=4;0<r;r--)Ci.isFirstEnemy=!0,Fh({lap:e,rank:t,hp:2+e,x:n,y:100,parent:i,no:r});Uh({lap:e,rank:t,hp:4+2*e,x:n,y:100,me:i})},(e,t)=>{const n=e>0?1:0,i=4+2*n,r=20-4*n,s=Ci.playerPos.x<ri.width/2?30:ri.width-30;for(const n of U(i))Oh({lap:e,rank:t,hp:1,x:s,y:50+n*r,y2:ri.height-40,wait:400})},(e,t)=>{const n=2+2*(e>0?1:0),i=2===n?180:90,r=ri.width/2,s=90*mi.nextInt(4)+45;for(const a of U(n))Ah({lap:e,rank:t,hp:1,x:r,y:130,wait:500,angle:s-i*a})},(e,t)=>{const n=ri.width/2;for(const i of[0,180])Ci.isFirstEnemy=!0,Vh({lap:e,rank:t,hp:4+2*e,x:n,y:135,angle:i})}];var Bh=e=>{const t=(t,n,i,r,s,a)=>{const o=fi.from(s).loopStart().to(-s,a).to(s,a).loopEnd().start();let l=80*r;return()=>{l+=r*e;const s=Math.abs(Math.floor(o.value)),a=Math.sign(o.value),c=Math.floor(ri.width/2-t/2+s/2),u=Math.floor(ri.width/2+t/2-s/2);ri.save(),ri.opacity(i),ri.drawRect(c,0,u-c,ri.height,Di.main),ri.translate(0,Math.floor(l%(2*n)));for(const[e,t]of[[c,-1],[u,1]]){let i=a;ri.save();for(let r=2*-n;r<ri.height+n/2;r+=n)ri.save(),ri.translate(e,r),ri.scale(t,i),ri.drawSprite(yi.bg,0,0,s,n),ri.restore(),i=-i;ri.restore()}ri.restore()}},n=[t(100,80,.07,3,16,4e3),t(105,120,.06,2.4,24,4500),t(110,160,.05,1.8,32,5e3)];return()=>{n.forEach((e=>e()))}},$h=e=>{e?Fi(`${e.mode}_replay`,{replay_id:e.id}):Fi(`${Ci.mode}_play`);const t={};var n;const i=je.of((e=>{const t={};let n=0,i="ex"===e?2:0,r=0;t.statusInitIn=()=>{jh[0](n,i)},t.timeStart=()=>{r=0},t.enemyDestroy=()=>{r--},t.timeUp=()=>{je.remove(s)},Ci.isFirstEnemy=!0,Ci.enemyWaveId=0,r=1;const s=()=>{if(si.subscribe(t),r<=0){r=pi.enemyNotice.size;const e=++Ci.enemyWaveId%jh.length;Ci.isFirstEnemy=!0,jh[e](n,i),e===jh.length-1&&(n++,i=Math.min(i+1,2))}};return s})(null!==(n=null==e?void 0:e.mode)&&void 0!==n?n:Ci.mode)),r=fi.from(0).wait(1e3).on((()=>{e&&pi.ui.add((()=>{const e={timeUp:()=>{je.remove(t)}},t=()=>{si.subscribe(e),ri.drawSprite(Ku,F(ri,Ku),40)};return t})()),si.emit("timeStart"),Ni.play.play()})),s=fi.from(Di.base).loopStart((()=>u>0)).to(v.blend(Di.white,Di.accent,.1),500).to(v.blend(Di.white,Di.main,.1),500).loopEnd().to(Di.base,500).start(!1),a=fi.from({x:0,y:0}).to({x:1,y:-1},20).to({x:-1,y:1},40).to({x:1,y:1},40).to({x:-1,y:-1},40).to({x:0,y:0}),o=fi.from({x:0,y:0}).to({x:2,y:-2},20).to({x:-2,y:2},40).to({x:2,y:2},40).to({x:-2,y:-2},40).to({x:1,y:-1},40).to({x:-1,y:1},40).to({x:1,y:1},40).to({x:-1,y:-1},40).to({x:0,y:0});let l,c=0,u=60*ii.fps;const h=mi.updateSeed();let d=!1,f=0;t.statusInitIn=()=>{pi.ui.add((()=>{const e={},t=fi.from(-100).wait(100).to(44).to(54,300,ze.outSine).wait(600).on((()=>{je.remove(n)})).start();e.timeUp=()=>{t.start()};const n=()=>{si.subscribe(e),ri.drawSprite(Gu,F(ri,Gu),t.value)};return n})()),r.start()},t.enemyTake=e=>{d||e.large&&o.start()},t.playerDestroy=()=>{d||(e||Fi(`${Ci.mode}_dead`,{time:u,wave_id:Ci.enemyWaveId-1}),a.start(),f++)},t.statusFinOut=()=>{fi.from(0).wait(200).on((()=>{pi.ui.add(zu(c,l))})).wait(300).on((()=>{Ni.result.play(),Ni.play.stop()})).start()},t.sceneChange=()=>{u>0&&!e&&Fi(`${Ci.mode}_reset`,{time:u,wave_id:Ci.enemyWaveId-1,dead_count:f})};const p=Vu();if(pi.ui.add((()=>p(c,Ci.heart,u))),pi.player.add(sh(Boolean(e))),pi.bg.add(Bh(1)),Ci.heart=0,Ci.heartRate=0,Ci.isSuccess=!1,Ci.clearing.reset(),e){const t=B(function(e){const t=[];let n=0,i=!0;for(const r of e){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".indexOf(r);if(e<0)throw Error("invalid string");i&&16&e&&(n=-1),i=!1,n=n<<5|31&e,0==(32&e)&&(t.push(n),n=0,i=!0)}return t}(e.log),di.length);mi.seed=e.seed,di.forEach(((e,n)=>{e.log=t[n],e.playLog()}))}else for(const e of di)e.recLog();return()=>{if(si.subscribe(t),r.done&&u--,0<=u&&u%ii.fps==0&&(c+=10*Ci.heart,Ci.isSuccess=1e6<=c),0===u){e||Fi(`${Ci.mode}_finish`,{wave_id:Ci.enemyWaveId-1,dead_count:f}),d=!0,si.emit("timeUp"),pi.ui.add((()=>{const e={},t=fi.from(54).to(44,300,ze.outSine).start();e.timeUp=()=>{t.start()},e.newRecordShow=()=>{je.remove(n)};const n=()=>{si.subscribe(e),ri.drawSprite(Ju,F(ri,Ju),t.value)};return n})());for(const e of di)e.endLog();e||(l=q.from(lu({version:0,log:V(j(...di.map((e=>e.log)))),score:c,seed:h,mode:Ci.mode})))}(null==l?void 0:l.isResolved())&&gu(l.value.replayId),ri.save(),Ci.isSuccess&&s.update(),ri.drawRect(0,0,ri.width,ri.height,s.value),o.running?ri.translate(o.value.x,o.value.y):a.running&&ri.translate(a.value.x,a.value.y),i.run(),pi.bg.run(),pi.effectBack.run(),pi.enemyNotice.run(),pi.player.run(),pi.playerBullet.run(),pi.effectOverPlayer.run(),pi.enemy.run(),pi.enemyBullet.run(),pi.effectOverEnemy.run(),ri.restore(),pi.ui.run()}},qh=()=>{const e=mu(),t=e?q.from(Wc(e)):void 0;var n;const i=()=>{var e;return"ex"===(null!==(n=null==t||null===(e=t.value)||void 0===e?void 0:e.mode)&&void 0!==n?n:Ci.mode)},r=v.blend(Di.white,Di.accent,.1);let s=!1;pi.ui.add(wu(t),(e=>{const t=fi.from(!1).wait(1300).on((()=>{var t;return!e||0===(null===(t=e.value)||void 0===t?void 0:t.version)})).loopStart().to(!0,800).to(!1,400).loopEnd().start();return()=>{t.value&&ri.drawSprite(Nu,F(ri,Nu),215)}})(t),(()=>{const e=fi.from(!1).to(!0,100).to(!1);let t="true"===localStorage.getItem("mute");const n=()=>{t=!t,localStorage.setItem("mute",String(t)),Object.values(Pi).forEach((e=>e.setMute(t))),Object.values(Ni).forEach((e=>e.setMute(t))),e.start(),Pi.uiButton.play()};return()=>{const i=_u[t?1:0],r=(s=i,ri.width-s.width-7);var s;li.onDown(i.toBox(r,7),n),ri.drawSprite(i,r,7),e.value&&(ri.save(),ri.opacity(.5),ri.drawSprite(Iu,r,7),ri.restore())}})()),t?pi.ui.add((()=>{const e=fi.from(!1).to(!0,100).to(!1).on((()=>{si.emit("sceneChange",(()=>(gu(""),qh())))})),t=()=>{e.started||(e.start(),Pi.uiButton.play())};return()=>{li.onDown(Mu.toBox(7,7),t),ri.drawSprite(Mu,7,7),e.value&&(ri.save(),ri.opacity(.5),ri.drawSprite(Lu,7,7),ri.restore())}})(),(e=>{const t=fi.from(0).wait(500).start(),n=fi.from(0).wait(100);let i=Pu;e.then((e=>{if(!e)throw Error("replay is not found");if(0!==e.version)throw Error("invalid replay version");i=Ou,n.to(e.score,300,ze.inSine).start(!1)}));const r=ku(115,74,"REPLAY"),s=Ru(3,16);return()=>{t.done&&(ri.save(),r((e=>{ri.translate(e.x,e.y),s(n.update().value),ri.drawSprite(i,F(e,Pu),46)})),ri.restore())}})(t)):pi.ui.add((()=>{const e=()=>{const e=new URLSearchParams({text:`#FireShooterSan\n${hu()}`});window.open(`https://twitter.com/intent/tweet?${e}`)};return()=>{li.onDown(bu.toBox(7,7),e),ri.drawSprite(bu,7,7)}})(),(()=>{var e;let t=Number(null!==(e=localStorage.getItem("tips-no"))&&void 0!==e?e:-1);t=(t+1)%12,localStorage.setItem("tips-no",String(t));const n=Eu[t];11===t&&Fi("tips_complete");const i=fi.from(0).wait(700).start(),r=fi.from(!1).loopStart().to(!1,800).to(!0,800).loopEnd().start(!1),s=fi.from(!1).loopStart().to(!1,200).to(!0,200).loopEnd().start(!1),a=ku(130,Math.max(n.height+12,60),`TIPS ${t+1}/12`);return()=>{i.done&&a((e=>{ri.save(),ri.translate(e.x+F(e,n)|0,e.y+function(e,t){return(e.height-t.height)/2}(e,n)|0),ri.drawSprite(n),r.update(),s.update(),0===t&&s.value&&ri.drawSprite(Eu.million,39,32),1===t&&s.value&&ri.drawRect(90,18,2,2,Di.white),1===t&&r.value&&ri.drawSprite(Eu.arrow,63,16),2===t&&r.value&&ri.drawSprite(Eu.heart,0,16),3===t&&r.value&&(ri.drawSprite(Eu.heart,41,1),ri.drawSprite(Eu.heart,40,31)),4===t&&r.value&&ri.drawSprite(Eu.heart,41,31),5===t&&r.value&&(ri.drawSprite(Eu.heart,51,1),ri.drawSprite(Eu.score,40,17)),6===t&&s.value&&ri.drawSprite(Eu.million,0,2),10===t&&r.value&&ri.drawSprite(Eu.user,0,14),ri.restore()}))}})()),pi.bg.add(Bh(.3)),Object.values(Ni).forEach((e=>e.stop())),Di.base=i()?r:Di.white;let a=fi.from(Di.base),o=i();return()=>{var e;if(o!==i()&&(o=i(),Di.base=i()?r:Di.white,a.end(),a=fi.from(a.value).to(Di.base,300).start()),!s&&(!t||0===(null===(e=t.value)||void 0===e?void 0:e.version))&&hi.some((e=>e.isDownChange))){s=!0;const e=()=>{si.emit("sceneChange",(()=>$h(null==t?void 0:t.value)))};pi.ui.add(Wu({times:2,onEnd:e})),Pi.titleStart.play()}ri.drawRect(0,0,ri.width,ri.height,a.value),pi.bg.run(),pi.ui.run()}};const Wh={};let Hh=qh,zh=Hh();const Gh=fi.from(0).wait(100).to(ri.height,200).start(),Kh=fi.from(-ri.height).to(0,200).on((()=>{fi.clear(),Object.values(oi).forEach((e=>e.endLog())),li.endLog(),Object.values(pi).forEach((e=>e.clear())),zh=Hh(),Gh.start()}));var Jh;Wh.sceneChange=e=>{Hh=e,Kh.start()},uu=()=>si.emit("sceneChange",qh),Jh="true"===localStorage.getItem("mute"),Object.values(Pi).forEach((e=>e.setMute(Jh))),Object.values(Ni).forEach((e=>e.setMute(Jh))),Ci.mode=du(),ii.proc=()=>{ri.clear(),si.clear(),ai.clear(),Object.values(oi).forEach((e=>e.update())),li.update(),fi.update(),si.subscribe(Wh),oi.reset.isDownChange&&!Kh.running&&si.emit("sceneChange",(()=>(gu(""),qh()))),zh();const e=[Gh,Kh].find((e=>e.running));e&&ri.drawRect(0,e.value,ri.width,ri.height,Di.base)};