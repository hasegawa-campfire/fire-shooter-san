!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=n.parcelRequirebae0;function a(e,t,n,r,i,s,a){try{var o=e[s](a),u=o.value}catch(e){return void n(e)}o.done?t(u):Promise.resolve(u).then(r,i)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var s=e.apply(t,n);function o(e){a(s,r,i,o,u,"next",e)}function u(e){a(s,r,i,o,u,"throw",e)}o(void 0)}))}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e).value}function l(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");var r=t.get(e);if(!r.writable)throw new TypeError("attempted to set read only private field");return r.value=n,n}function h(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){return m(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}function b(e){return e&&e.constructor===Symbol?"symbol":typeof e}function _(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||k(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function S(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||k(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}null==s&&((s=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},n.parcelRequirebae0=s),s.register("iiiWY",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var s={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)s[t[n]]=e[t[n]]},i=function(e){var t=s[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),s("iiiWY").register(JSON.parse('{"6iZMW":"index.617c50a7.js","eTB8B":"image.cb6b04ad.png","aMV2A":"sonohoka_pyokottohaeru.ebb39909.wav","aIeDX":"hit_kyouda4.c2fae92b.wav","jzkA8":"se_etc_003.751a5cc1.wav","6uV70":"se_shot_003.7192b630.wav","eMTjg":"kaminarikei_chisaikaminari.a1aac738.wav","akrbZ":"wind3.87bf4484.wav","kNbWg":"cancel2.e1adafec.wav","8cvlD":"shoot9.2235e996.wav","f1UVR":"mamono_tsukon2.40b037d7.wav","KfNtP":"se_powerup_004.fb62fc04.wav","b5Tfb":"se_powerup_008.fd5e1090.wav","33mfn":"souchi_kaifukusouchi.b8152e4c.wav","9WYf8":"hit_tsujou3.4da24c3a.wav","a5LcI":"audiostock_49758.e0483042.mp3","2lEye":"audiostock_49543.c0017692.mp3"}'));var T=new WeakSet,E=function(){"use strict";function e(t){var n=t.fps,r=this,i=this;u(this,e),x.set(this,{writable:!0,value:void 0}),p(this,"proc",null),A.set(this,{writable:!0,value:0}),M.set(this,{writable:!0,value:0}),R.set(this,{writable:!0,value:0}),T.add(this),O.set(this,{writable:!0,value:function(){var e,t;l(r,M,window.requestAnimationFrame(c(r,O))),l(r,R,1+ +c(r,R));var n=Date.now();n-c(r,A)<.8*r.frameTime||(l(r,A,n),null===(t=(e=r).proc)||void 0===t||t.call(e))}}),l(this,x,n),h(this,T,P).call(this),document.addEventListener("visibilitychange",(function(){return h(i,T,P).call(i)}))}return f(e,[{key:"fps",get:function(){return c(this,x)}},{key:"time",get:function(){return 1e3*c(this,R)/this.fps}},{key:"frameTime",get:function(){return 1e3/c(this,x)}}]),e}(),x=new WeakMap,A=new WeakMap,M=new WeakMap,R=new WeakMap,O=new WeakMap;function P(){window.cancelAnimationFrame(c(this,M)),"visible"===document.visibilityState&&l(this,M,window.requestAnimationFrame(c(this,O)))}var L=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$|^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,N={},C=function(){"use strict";function e(t){var n,r,i,s,a=void 0===t?{}:t;u(this,e),D.set(this,{writable:!0,value:void 0}),F.set(this,{writable:!0,value:void 0}),U.set(this,{writable:!0,value:void 0}),V.set(this,{writable:!0,value:void 0}),j.set(this,{writable:!0,value:""}),l(this,D,null!==(n=a.red)&&void 0!==n?n:0),l(this,F,null!==(r=a.green)&&void 0!==r?r:0),l(this,U,null!==(i=a.blue)&&void 0!==i?i:0),l(this,V,null!==(s=a.alpha)&&void 0!==s?s:1)}return f(e,[{key:"red",get:function(){return c(this,D)},set:function(e){l(this,D,e),l(this,j,"")}},{key:"green",get:function(){return c(this,F)},set:function(e){l(this,F,e),l(this,j,"")}},{key:"blue",get:function(){return c(this,U)},set:function(e){l(this,U,e),l(this,j,"")}},{key:"alpha",get:function(){return c(this,V)},set:function(e){l(this,V,e),l(this,j,"")}},{key:"toString",value:function(){return c(this,j)||l(this,j,"#"+B(c(this,D))+B(c(this,F))+B(c(this,U))+B(c(this,V))),c(this,j)}},{key:"opacity",value:function(t){var n=new e(this);return n.alpha=Math.min(Math.max(0,c(this,V)*t),1),n}}],[{key:"parse",value:function(t){var n=N[t];if(!n){var r=t.match(L)||[];n=N[t]={red:parseInt(r[1]||r[5]+r[5]||"0",16)/255,green:parseInt(r[2]||r[6]+r[6]||"0",16)/255,blue:parseInt(r[3]||r[7]+r[7]||"0",16)/255,alpha:parseInt(r[4]||r[8]+r[8]||"ff",16)/255}}return new e(n)}},{key:"blend",value:function(t,n,r){var i=void 0===r?.5:r;return new e({red:(n.red-t.red)*i+t.red,green:(n.green-t.green)*i+t.green,blue:(n.blue-t.blue)*i+t.blue,alpha:(n.alpha-t.alpha)*i+t.alpha})}}]),e}(),D=new WeakMap,F=new WeakMap,U=new WeakMap,V=new WeakMap,j=new WeakMap;function B(e){return Math.min(Math.max(0,Math.floor(255*e)),255).toString(16).padStart(2,"0")}var W={},q=function(){"use strict";function e(t,n){var r=void 0===n?{}:n;u(this,e),$.set(this,{writable:!0,value:void 0}),this.image=t,l(this,$,w({},r))}return f(e,[{key:"x",get:function(){var e;return null!==(e=c(this,$).x)&&void 0!==e?e:0}},{key:"y",get:function(){var e;return null!==(e=c(this,$).y)&&void 0!==e?e:0}},{key:"width",get:function(){var e;return null!==(e=c(this,$).width)&&void 0!==e?e:this.image.width}},{key:"height",get:function(){var e;return null!==(e=c(this,$).height)&&void 0!==e?e:this.image.height}},{key:"originX",get:function(){var e;return null!==(e=c(this,$).originX)&&void 0!==e?e:0}},{key:"originY",get:function(){var e;return null!==(e=c(this,$).originY)&&void 0!==e?e:0}},{key:"originLeft",get:function(){return this.originX}},{key:"originTop",get:function(){return this.originY}},{key:"originRight",get:function(){return this.width-this.originX}},{key:"originBottom",get:function(){return this.height-this.originY}},{key:"sub",value:function(t){var n,r,i,s,a,o,u=w({},c(this,$));return void 0!==t.x&&(u.x=t.x+(null!==(n=u.x)&&void 0!==n?n:0)),void 0!==t.y&&(u.y=t.y+(null!==(r=u.y)&&void 0!==r?r:0)),void 0!==t.width&&(u.width=t.width+(null!==(i=u.width)&&void 0!==i?i:0)),void 0!==t.height&&(u.height=t.height+(null!==(s=u.height)&&void 0!==s?s:0)),void 0!==t.originX&&(u.originX=t.originX+(null!==(a=u.originX)&&void 0!==a?a:0)),void 0!==t.originY&&(u.originY=t.originY+(null!==(o=u.originY)&&void 0!==o?o:0)),new e(this.image,u)}},{key:"toBox",value:function(e,t){return{x:e,y:t,width:this.width,height:this.height,originX:this.originX,originY:this.originY}}}],[{key:"load",value:function(t,n){var r=void 0===n?{}:n,i=t instanceof URL?t.href:t,s=W[i];return s||((s=W[i]=new Image).src=i),new e(s,r)}},{key:"loadMap",value:function(t,n){var r=function(n){if(Array.isArray(n)){var i=I(n),s=i[0],a=i[1],o=i[2],u=i[3],c=i[4],l=i[5];return e.load(t,{x:s,y:a,width:o,height:u,originX:null!=c?c:0,originY:null!=l?l:0})}var h=Object.entries(n).map((function(e){var t=I(e),n=t[0],i=t[1];return[n,r(i)]}));return Object.fromEntries(h)};return r(n)}}]),e}(),$=new WeakMap,H={normal:"source-over",add:"lighter",multiply:"multiply",screen:"screen",overlay:"overlay"},z=new WeakSet,G=function(){"use strict";function e(t){var n=t.width,r=t.height,i=t.el,s=this,a=this;u(this,e),p(this,"width",void 0),p(this,"height",void 0),p(this,"canvas",void 0),K.set(this,{writable:!0,value:void 0}),z.add(this);var o="string"==typeof i?document.querySelector(i):i;if(!(o&&o instanceof HTMLCanvasElement))throw Error("not canvas element");this.canvas=o,this.width=o.width=n,this.height=o.height=r,o.setAttribute("style","\n  image-rendering: pixelated;\n  image-rendering: crisp-edges;\n  touch-action: none;\n");var c=o.getContext("2d");if(!c)throw Error("none context2d");l(this,K,c),c.imageSmoothingEnabled=!1,window.addEventListener("resize",(function(){return h(s,z,Y).call(s)})),window.setTimeout((function(){return h(a,z,Y).call(a)}),1)}return f(e,[{key:"clear",value:function(){c(this,K).setTransform(1,0,0,1,0,0),c(this,K).clearRect(0,0,this.canvas.width,this.canvas.height)}},{key:"save",value:function(){c(this,K).save()}},{key:"restore",value:function(){c(this,K).restore()}},{key:"getMatrix",value:function(){return c(this,K).getTransform()}},{key:"drawSprite",value:function(e,t,n,r,i){e.image.complete&&(r=null!=r?r:e.width,i=null!=i?i:e.height,t=(null!=t?t:0)-e.originX*(r/e.width),n=(null!=n?n:0)-e.originY*(i/e.height),c(this,K).drawImage(e.image,e.x,e.y,e.width,e.height,Math.floor(t),Math.floor(n),Math.floor(r),Math.floor(i)))}},{key:"drawText",value:function(e,t,n,r,i){var s=void 0===i?1:i,a=0,o=!0,u=!1,c=void 0;try{for(var l,h=t[Symbol.iterator]();!(o=(l=h.next()).done);o=!0){var d,f=l.value;if(" "!==f){var p,m=null!==(p=null===(d=e[f])||void 0===d?void 0:d.width)&&void 0!==p?p:0;m&&(a&&(a+=s),this.drawSprite(e[f],n+a,r),a+=m)}else a&&(a+=s),a+=1}}catch(e){u=!0,c=e}finally{try{o||null==h.return||h.return()}finally{if(u)throw c}}}},{key:"measuretext",value:function(e,t,n){var r=void 0===n?1:n,i=0,s=!0,a=!1,o=void 0;try{for(var u,c=t[Symbol.iterator]();!(s=(u=c.next()).done);s=!0){var l,h=u.value;if(" "!==h){var d,f=null!==(d=null===(l=e[h])||void 0===l?void 0:l.width)&&void 0!==d?d:0;f&&(i&&(i+=r),i+=f)}else i&&(i+=r),i+=1}}catch(e){a=!0,o=e}finally{try{s||null==c.return||c.return()}finally{if(a)throw o}}return i}},{key:"drawRect",value:function(e,t,n,r,i){c(this,K).fillStyle=String(i),c(this,K).fillRect(e,t,n,r)}},{key:"drawCircle",value:function(e,t,n,r){e=Math.floor(e),t=Math.floor(t),n=Math.floor(n),c(this,K).fillStyle=String(r);var i=c(this,K).fillRect.bind(c(this,K)),s=-n,a=0,o=2-2*n;do{i(e-s,t+a,1,1),i(e-a,t-s,1,1),i(e+s,t-a,1,1),i(e+a,t+s,1,1),(n=o)<=a&&(o+=2*++a+1),(n>s||o>a)&&(o+=2*++s+1)}while(s<0)}},{key:"translate",value:function(e,t){c(this,K).translate(e,t)}},{key:"scale",value:function(e,t){c(this,K).scale(e,null!=t?t:e)}},{key:"rotate",value:function(e){c(this,K).rotate(e*Math.PI/180)}},{key:"opacity",value:function(e){c(this,K).globalAlpha=Math.min(Math.max(e,0),1)}},{key:"blendMode",value:function(e){c(this,K).globalCompositeOperation=H[e]}},{key:"boxToRect",value:function(e){var t=this.getMatrix(),n=e.x-e.originX,r=e.y-e.originY,i=t.transformPoint({x:n,y:r}),s=t.transformPoint({x:n+e.width,y:r}),a=t.transformPoint({x:n+e.width,y:r+e.height}),o=t.transformPoint({x:n,y:r+e.height});return{left:Math.min(i.x,s.x,a.x,o.x),top:Math.min(i.y,s.y,a.y,o.y),right:Math.max(i.x,s.x,a.x,o.x),bottom:Math.max(i.y,s.y,a.y,o.y)}}}]),e}(),K=new WeakMap;function Y(){var e=this.canvas.width/window.devicePixelRatio,t=this.canvas.height/window.devicePixelRatio,n=Math.floor(window.innerWidth/e),r=Math.floor(window.innerHeight/t);this.canvas.style.width="".concat(Math.max(Math.min(n,r),1)*e,"px")}var J={},X=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",o=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,s=Object.create(i.prototype),a=new A(r||[]);return s._invoke=function(e,t,n){var r=h;return function(i,s){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw s;return R()}for(n.method=i,n.arg=s;;){var a=n.delegate;if(a){var o=T(a,n);if(o){if(o===m)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?p:d,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(e,n,a),s}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",m={};function v(){}function y(){}function g(){}var w={};u(w,s,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(M([])));_&&_!==n&&r.call(_,s)&&(w=_);var k=g.prototype=v.prototype=Object.create(w);function I(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,s,a,o){var u=l(e[i],e,s);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,a,o)}),(function(e){n("throw",e,a,o)})):t.resolve(h).then((function(e){c.value=e,a(c)}),(function(e){return n("throw",e,a,o)}))}o(u.arg)}var i;this._invoke=function(e,r){function s(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(s,s):s()}}function T(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var s=i.arg;return s?s.done?(n[e.resultName]=s.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function M(e){if(e){var n=e[s];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:R}}function R(){return{value:t,done:!0}}return y.prototype=g,u(k,"constructor",g),u(g,"constructor",y),y.displayName=u(g,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,o,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},I(S.prototype),u(S.prototype,a,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,s){void 0===s&&(s=Promise);var a=new S(c(t,n,r,i),s);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},I(k),u(k,o,"Generator"),u(k,s,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=M,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return o.type="throw",o.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var a=this.tryEntries[s],o=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),c=r.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===e||"continue"===e)&&s.tryLoc<=t&&t<=s.finallyLoc&&(s=null);var a=s?s.completion:{};return a.type=e,a.arg=t,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;x(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:M(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(J);try{regeneratorRuntime=X}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=X:Function("r","regeneratorRuntime = r")(X)}function Z(e){return e.toLocaleString("en-US")}function Q(e,t){return Math.atan2(t,e)*(180/Math.PI)}function ee(e){return(e%=360)<0&&(e+=360),e>180&&(e-=360),e}function te(e,t){var n=void 0===t?1:t,r=e*(Math.PI/180);return{x:Math.cos(r)*n,y:Math.sin(r)*n}}function ne(e,t){var n=function(e,t){return Math.sqrt(e*e+t*t)}(e,t);return{x:e/n,y:t/n}}function re(e){return Array.from({length:e}).map((function(e,t){return t}))}function ie(e,t){return(e.width-t.width)/2}function se(e,t){var n=Array.isArray(t)?t:[t];return Promise.race(n.map((function(t){return new Promise((function(n){return e.addEventListener(t,n)}))})))}function ae(e,t,n){return(t-e)*n+e}var oe=function(){"use strict";function e(t){var n=this;u(this,e),ue.set(this,{writable:!0,value:void 0}),ce.set(this,{writable:!0,value:!1}),le.set(this,{writable:!0,value:void 0}),l(this,ue,t),t.then((function(e){l(n,ce,!0),l(n,le,e)}))}return f(e,[{key:"then",value:function(t,n){return new e(c(this,ue).then(t,n))}},{key:"isResolved",value:function(){return c(this,ce)}},{key:"value",get:function(){return c(this,le)}}],[{key:"from",value:function(t){return new e("function"==typeof t?t():t)}}]),e}(),ue=new WeakMap,ce=new WeakMap,le=new WeakMap,he=0,de=se(window,"gamepadconnected").then((function(){var e=[];return new Promise((function(t){var n=function(){(function(){for(var t,n=function(t){var n=r[t];if(n){var i=e[t];if(i||(i=e[t]=n.buttons.map((function(e){return e.pressed}))),n.buttons.some((function(e,t){return e.pressed!==i[t]})))return{v:!0}}},r=(null===(t=navigator.getGamepads)||void 0===t?void 0:t.call(navigator))||[],i=0;i<r.length;i++){var s=n(i);if("object"===b(s))return s.v}return!1})()||he<0?t(!0):he=requestAnimationFrame(n)};n()}))})),fe=window.webkitAudioContext||window.AudioContext,pe=oe.from(o(t(J).mark((function e(){var n,r;return t(J).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.race([se(document,["touchstart","mousedown","keydown"]),de]);case 2:return cancelAnimationFrame(he),he=-1,n=new fe,r=function(){return"visible"===document.visibilityState?n.resume():n.suspend()},e.next=8,r();case 8:return document.addEventListener("visibilitychange",r),e.abrupt("return",n);case 10:case"end":return e.stop()}}),e)})))),me=new WeakSet,ve=function(){"use strict";function e(n,r){var i=void 0===r?{}:r;u(this,e);var s=this;ye.set(this,{writable:!0,value:void 0}),ge.set(this,{writable:!0,value:1}),we.set(this,{writable:!0,value:void 0}),be.set(this,{writable:!0,value:void 0}),_e.set(this,{writable:!0,value:void 0}),ke.set(this,{writable:!0,value:Number.MIN_SAFE_INTEGER}),Ie.set(this,{writable:!0,value:void 0}),Se.set(this,{writable:!0,value:void 0}),Te.set(this,{writable:!0,value:null}),Ee.set(this,{writable:!0,value:!0}),me.add(this);var a,h,d,f,p,m=this;l(this,ye,null!==(a=i.volume)&&void 0!==a?a:1),l(this,we,null!==(h=i.minTime)&&void 0!==h?h:0),l(this,be,null!==(d=i.loop)&&void 0!==d&&d),l(this,_e,null!==(f=i.mute)&&void 0!==f&&f),l(this,Ie,oe.from((p=o(t(J).mark((function e(){var r,i,s;return t(J).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n instanceof URL?n.href:n);case 2:return r=e.sent,e.next=5,r.arrayBuffer();case 5:return i=e.sent,e.next=8,pe;case 8:return s=e.sent,e.abrupt("return",s.decodeAudioData(i));case 10:case"end":return e.stop()}}),e)}))),function(){return p.apply(s,arguments)}))),l(this,Se,oe.from(function(){var e=o(t(J).mark((function e(){var n,r;return t(J).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe;case 2:return n=e.sent,(r=n.createGain()).gain.value=c(m,_e)?0:c(m,ge)*c(m,ye),r.connect(n.destination),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(s,arguments)}}()))}return f(e,[{key:"play",value:function(){var e=this;if(l(this,Ee,!0),pe.isResolved()&&c(this,Ie).isResolved()&&c(this,Se).isResolved()){if(pe.value.currentTime-c(this,ke)>=c(this,we)){var t,n,r;if(null===(t=c(this,Te))||void 0===t||t.stop(),l(this,Te,pe.value.createBufferSource()),"boolean"==typeof c(this,be))c(this,Te).loop=c(this,be);else c(this,Te).loop=!0,c(this,Te).loopStart=null!==(n=c(this,be).start)&&void 0!==n?n:0,c(this,Te).loopEnd=null!==(r=c(this,be).end)&&void 0!==r?r:0;c(this,Te).buffer=c(this,Ie).value,c(this,Te).connect(c(this,Se).value),c(this,Te).start(),l(this,ke,pe.value.currentTime)}}else Promise.all([pe,c(this,Ie),c(this,Se)]).then((function(){c(e,Ee)&&e.play()}))}},{key:"stop",value:function(){var e;l(this,Ee,!1),null===(e=c(this,Te))||void 0===e||e.stop(),l(this,Te,null)}},{key:"setMute",value:function(e){l(this,_e,e),h(this,me,xe).call(this)}},{key:"setVolume",value:function(e){l(this,ge,e),h(this,me,xe).call(this)}}]),e}(),ye=new WeakMap,ge=new WeakMap,we=new WeakMap,be=new WeakMap,_e=new WeakMap,ke=new WeakMap,Ie=new WeakMap,Se=new WeakMap,Te=new WeakMap,Ee=new WeakMap;function xe(){c(this,Se).isResolved()&&(c(this,Se).value.gain.value=c(this,_e)?0:c(this,ge)*c(this,ye))}var Ae=function(e){"use strict";function t(e,n,r){return u(this,t),_(this,v(t).call(this,e,{volume:n,minTime:r}))}return g(t,e),t}(ve),Me=function(e){"use strict";function t(e,n,r){return u(this,t),_(this,v(t).call(this,e,{volume:n,loop:r}))}return g(t,e),t}(ve),Re=function(){"use strict";function e(){u(this,e),Oe.set(this,{writable:!0,value:new Set}),Pe.set(this,{writable:!0,value:new Set})}return f(e,[{key:"clear",value:function(){c(this,Oe).clear(),c(this,Pe).clear()}},{key:"subscribe",value:function(e){var t,n=!0,r=!1,i=void 0;try{for(var s,a=c(this,Pe)[Symbol.iterator]();!(n=(s=a.next()).done);n=!0){var o=s.value;null===(t=e[o.type])||void 0===t||t.call(e,o.data)}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}c(this,Oe).add(e)}},{key:"emit",value:function(e,t){var n,r=!0,i=!1,s=void 0;try{for(var a,o=c(this,Oe)[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var u=a.value;null===(n=u[e])||void 0===n||n.call(u,t)}}catch(e){i=!0,s=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw s}}c(this,Pe).add({type:e,data:t})}}]),e}(),Oe=new WeakMap,Pe=new WeakMap,Le=function(){"use strict";function e(t){u(this,e),Ne.set(this,{writable:!0,value:void 0}),Ce.set(this,{writable:!0,value:[]}),l(this,Ne,t),l(this,Ce,[])}return f(e,[{key:"clear",value:function(){l(this,Ce,[])}},{key:"emit",value:function(e,t,n,r){var i=c(this,Ne).boxToRect(n),s=!0,a=!1,o=void 0;try{for(var u,l=c(this,Ce)[Symbol.iterator]();!(s=(u=l.next()).done);s=!0){var h=u.value,d=h.type,f=h.data,p=h.rect,m=h.eventMap[e],v=r[d];(m||v)&&i.left<p.right&&p.left<i.right&&i.top<p.bottom&&p.top<i.bottom&&(null==m||m(t),null==v||v(f))}}catch(e){a=!0,o=e}finally{try{s||null==l.return||l.return()}finally{if(a)throw o}}c(this,Ce).push({type:e,data:t,rect:i,eventMap:r})}}]),e}(),Ne=new WeakMap,Ce=new WeakMap,De=[" ","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"];function Fe(e){return e instanceof HTMLElement&&!!e.closest("input, textarea, select, button")}window.addEventListener("keydown",(function(e){De.includes(e.key)&&!Fe(e.target)&&e.preventDefault()}));var Ue={};window.addEventListener("keydown",(function(e){Fe(e.target)||(Ue[e.key.toLocaleLowerCase()]=!0)})),window.addEventListener("keyup",(function(e){Fe(e.target)||(Ue[e.key.toLocaleLowerCase()]=!1)})),window.addEventListener("blur",(function(){Ue={}}));var Ve=function(){"use strict";function e(t){u(this,e),je.set(this,{writable:!0,value:void 0}),Be.set(this,{writable:!0,value:!1}),We.set(this,{writable:!0,value:!1}),qe.set(this,{writable:!0,value:0}),$e.set(this,{writable:!0,value:[]}),He.set(this,{writable:!0,value:0}),ze.set(this,{writable:!0,value:"pause"}),l(this,je,(Array.isArray(t)?t:[t]).map((function(e){return e.toLocaleLowerCase()})))}return f(e,[{key:"update",value:function(){l(this,We,c(this,Be)),"play"===c(this,ze)?(l(this,qe,1+ +c(this,qe)),c(this,$e)[c(this,He)]<c(this,qe)&&(l(this,Be,!c(this,Be)),l(this,qe,0),l(this,He,1+ +c(this,He)))):(l(this,Be,c(this,je).some((function(e){return Ue[e]}))),l(this,qe,c(this,Be)===c(this,We)?c(this,qe)+1:0)),"rec"===c(this,ze)&&(c(this,Be)===c(this,We)?c(this,$e)[c(this,$e).length-1]=c(this,qe):c(this,$e).push(c(this,qe)))}},{key:"isDown",get:function(){return c(this,Be)}},{key:"isDownChange",get:function(){return c(this,Be)&&!c(this,We)}},{key:"isUpChange",get:function(){return!c(this,Be)&&c(this,We)}},{key:"downCount",get:function(){return c(this,Be)?c(this,qe):NaN}},{key:"upCount",get:function(){return c(this,Be)?NaN:c(this,qe)}},{key:"logMode",get:function(){return c(this,ze)}},{key:"log",get:function(){return c(this,$e).slice()},set:function(e){l(this,$e,e.slice()),l(this,ze,"pause")}},{key:"recLog",value:function(){l(this,$e,[c(this,qe),c(this,We)?1:0,c(this,Be)?1:0,c(this,qe)]),l(this,ze,"rec")}},{key:"playLog",value:function(){l(this,qe,c(this,$e)[0]||0),l(this,We,Boolean(c(this,$e)[1])),l(this,Be,Boolean(c(this,$e)[2])),l(this,He,3),l(this,ze,"play")}},{key:"endLog",value:function(){l(this,ze,"pause")}}]),e}(),je=new WeakMap,Be=new WeakMap,We=new WeakMap,qe=new WeakMap,$e=new WeakMap,He=new WeakMap,ze=new WeakMap,Ge="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";function Ke(e){var t="",n=!0,r=!1,i=void 0;try{for(var s,a=e[Symbol.iterator]();!(n=(s=a.next()).done);n=!0){for(var o=s.value,u=(0<=(o=Math.floor(o))?o:-o-1).toString(2).length+1,c=0,l="";u>0;)l=Ge[31&o|c]+l,u-=5,o>>=5,c=32;t+=l}}catch(e){r=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(r)throw i}}return t}function Ye(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=[],i=!0,s=!1,a=void 0;try{for(var o,u=t[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var c=o.value;r=r.concat(c.length,c)}}catch(e){s=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(s)throw a}}return r}function Je(e){for(var t=[],n=0;n<e.length;){var r=n+1+e[n];if(e.length<r)throw Error("invalid pack size");t.push(e.slice(n+1,r)),n=r}return t}window.addEventListener("contextmenu",(function(e){return e.preventDefault()}));var Xe=null,Ze={x:0,y:0};window.addEventListener("pointerdown",(function(e){Xe=e.target,Ze.x=e.clientX,Ze.y=e.clientY})),window.addEventListener("pointerup",(function(e){Xe=null})),window.addEventListener("pointercancel",(function(e){Xe=null})),window.addEventListener("pointermove",(function(e){Ze.x=e.clientX,Ze.y=e.clientY})),window.addEventListener("blur",(function(){Xe=null}));var Qe=function(){"use strict";function e(t){var n=this;u(this,e),Ne.set(this,{writable:!0,value:void 0}),Be.set(this,{writable:!0,value:!1}),We.set(this,{writable:!0,value:!1}),qe.set(this,{writable:!0,value:0}),et.set(this,{writable:!0,value:0}),tt.set(this,{writable:!0,value:0}),nt.set(this,{writable:!0,value:0}),rt.set(this,{writable:!0,value:0}),it.set(this,{writable:!0,value:0}),st.set(this,{writable:!0,value:0}),$e.set(this,{writable:!0,value:[]}),He.set(this,{writable:!0,value:0}),at.set(this,{writable:!0,value:[]}),ot.set(this,{writable:!0,value:0}),ut.set(this,{writable:!0,value:[]}),ct.set(this,{writable:!0,value:0}),ze.set(this,{writable:!0,value:"pause"}),lt.set(this,{writable:!0,value:[]}),ht.set(this,{writable:!0,value:!1}),l(this,Ne,t);var r=c(this,Ne).canvas;r.addEventListener("pointerdown",(function(e){var t=r.getBoundingClientRect(),i=Math.floor((e.clientX-t.x)*r.width/t.width),s=Math.floor((e.clientY-t.y)*r.height/t.height),a=!0,o=!1,u=void 0;try{for(var h,d=c(n,lt)[Symbol.iterator]();!(a=(h=d.next()).done);a=!0){var f=h.value,p=f.rect,m=f.callback;p.left<=i&&i<p.right&&p.top<=s&&s<p.bottom&&(l(n,ht,!0),m())}}catch(e){o=!0,u=e}finally{try{a||null==d.return||d.return()}finally{if(o)throw u}}}))}return f(e,[{key:"update",value:function(){l(this,lt,[]);var e=c(this,Ne).canvas;Xe instanceof Node||l(this,ht,!1),l(this,We,c(this,Be));var t=c(this,nt),n=c(this,rt);if("play"===c(this,ze))l(this,qe,1+ +c(this,qe)),c(this,$e)[c(this,He)]<c(this,qe)&&(l(this,Be,!c(this,Be)),l(this,qe,0),l(this,He,1+ +c(this,He))),l(this,it,1+ +c(this,it)),l(this,st,1+ +c(this,st)),c(this,at)[c(this,ot)]<c(this,it)&&(l(this,it,0),l(this,ot,c(this,ot)+2),l(this,nt,c(this,at)[c(this,ot)-1]||0)),c(this,ut)[c(this,ct)]<c(this,st)&&(l(this,st,0),l(this,ct,c(this,ct)+2),l(this,rt,c(this,ut)[c(this,ct)-1]||0)),l(this,et,c(this,et)+c(this,nt)),l(this,tt,c(this,tt)+c(this,rt));else{l(this,Be,!c(this,ht)&&Xe instanceof Node&&e.contains(Xe)),l(this,qe,c(this,Be)===c(this,We)?c(this,qe)+1:0);var r=c(this,et),i=c(this,tt),s=e.getBoundingClientRect();l(this,et,Math.floor((Ze.x-s.x)*(e.width/s.width))),l(this,tt,Math.floor((Ze.y-s.y)*(e.height/s.height))),l(this,nt,c(this,et)-r),l(this,rt,c(this,tt)-i),l(this,it,c(this,nt)===t?c(this,it)+1:0),l(this,st,c(this,rt)===n?c(this,st)+1:0)}"rec"===c(this,ze)&&(c(this,Be)===c(this,We)?c(this,$e)[c(this,$e).length-1]=c(this,qe):c(this,$e).push(c(this,qe)),c(this,nt)===t?c(this,at)[c(this,at).length-1]=c(this,it):c(this,at).push(c(this,nt),c(this,it)),c(this,rt)===n?c(this,ut)[c(this,ut).length-1]=c(this,st):c(this,ut).push(c(this,rt),c(this,st))),c(this,Be)&&!c(this,We)&&(l(this,nt,0),l(this,rt,0))}},{key:"isDown",get:function(){return c(this,Be)}},{key:"isDownChange",get:function(){return c(this,Be)&&!c(this,We)}},{key:"isUpChange",get:function(){return!c(this,Be)&&c(this,We)}},{key:"downCount",get:function(){return c(this,Be)?c(this,qe):NaN}},{key:"upCount",get:function(){return c(this,Be)?NaN:c(this,qe)}},{key:"pos",get:function(){return{x:c(this,et),y:c(this,tt)}}},{key:"vec",get:function(){return{x:c(this,nt),y:c(this,rt)}}},{key:"onDown",value:function(e,t){var n=c(this,Ne).boxToRect(e);c(this,lt).push({rect:n,callback:t})}},{key:"logMode",get:function(){return c(this,ze)}},{key:"log",get:function(){return Ye(c(this,$e),c(this,at),c(this,ut))},set:function(e){var t=Je(e);l(this,$e,t[0]||[]),l(this,at,t[1]||[]),l(this,ut,t[2]||[]),l(this,ze,"pause")}},{key:"recLog",value:function(){l(this,$e,[c(this,qe),c(this,We)?1:0,c(this,Be)?1:0,c(this,qe)]),l(this,at,[c(this,it),c(this,et),c(this,nt),c(this,it)]),l(this,ut,[c(this,st),c(this,tt),c(this,rt),c(this,st)]),l(this,ze,"rec")}},{key:"playLog",value:function(){l(this,qe,c(this,$e)[0]||0),l(this,We,Boolean(c(this,$e)[1])),l(this,Be,Boolean(c(this,$e)[2])),l(this,He,3),l(this,it,c(this,at)[0]||0),l(this,et,c(this,at)[1]||0),l(this,nt,c(this,at)[2]||0),l(this,ot,3),l(this,st,c(this,ut)[0]||0),l(this,tt,c(this,ut)[1]||0),l(this,rt,c(this,ut)[2]||0),l(this,ct,3),l(this,ze,"play")}},{key:"endLog",value:function(){l(this,ze,"pause")}}]),e}(),et=(Ne=new WeakMap,Be=new WeakMap,We=new WeakMap,qe=new WeakMap,new WeakMap),tt=new WeakMap,nt=new WeakMap,rt=new WeakMap,it=new WeakMap,st=new WeakMap,at=($e=new WeakMap,He=new WeakMap,new WeakMap),ot=new WeakMap,ut=new WeakMap,ct=new WeakMap,lt=(ze=new WeakMap,new WeakMap),ht=new WeakMap,dt=[],ft=0,pt=function(){"use strict";function e(t){u(this,e),mt.set(this,{writable:!0,value:void 0}),Be.set(this,{writable:!0,value:!1}),We.set(this,{writable:!0,value:!1}),qe.set(this,{writable:!0,value:0}),$e.set(this,{writable:!0,value:[]}),He.set(this,{writable:!0,value:0}),ze.set(this,{writable:!0,value:"pause"}),l(this,mt,t)}return f(e,[{key:"update",value:function(){var e,t=Date.now();ft<t&&(dt=(null===(e=navigator.getGamepads)||void 0===e?void 0:e.call(navigator))||[],ft=t+5);l(this,We,c(this,Be)),"play"===c(this,ze)?(l(this,qe,1+ +c(this,qe)),c(this,$e)[c(this,He)]<c(this,qe)&&(l(this,Be,!c(this,Be)),l(this,qe,0),l(this,He,1+ +c(this,He)))):(l(this,Be,c(this,mt).some((function(e){var t=!0,n=!1,r=void 0;try{for(var i,s=dt[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var a=i.value;if(a&&a.buttons[e]&&a.buttons[e].pressed)return!0}}catch(e){n=!0,r=e}finally{try{t||null==s.return||s.return()}finally{if(n)throw r}}}))),l(this,qe,c(this,Be)===c(this,We)?c(this,qe)+1:0)),"rec"===c(this,ze)&&(c(this,Be)===c(this,We)?c(this,$e)[c(this,$e).length-1]=c(this,qe):c(this,$e).push(c(this,qe)))}},{key:"isDown",get:function(){return c(this,Be)}},{key:"isDownChange",get:function(){return c(this,Be)&&!c(this,We)}},{key:"isUpChange",get:function(){return!c(this,Be)&&c(this,We)}},{key:"downCount",get:function(){return c(this,Be)?c(this,qe):NaN}},{key:"upCount",get:function(){return c(this,Be)?NaN:c(this,qe)}},{key:"logMode",get:function(){return c(this,ze)}},{key:"log",get:function(){return c(this,$e).slice()},set:function(e){l(this,$e,e.slice()),l(this,ze,"pause")}},{key:"recLog",value:function(){l(this,$e,[c(this,qe),c(this,We)?1:0,c(this,Be)?1:0,c(this,qe)]),l(this,ze,"rec")}},{key:"playLog",value:function(){l(this,qe,c(this,$e)[0]||0),l(this,We,Boolean(c(this,$e)[1])),l(this,Be,Boolean(c(this,$e)[2])),l(this,He,3),l(this,ze,"play"),0===c(this,qe)&&c(this,We)===c(this,Be)&&l(this,He,Number.MAX_SAFE_INTEGER)}},{key:"endLog",value:function(){l(this,ze,"pause")}}]),e}(),mt=new WeakMap,vt=(Be=new WeakMap,We=new WeakMap,qe=new WeakMap,$e=new WeakMap,He=new WeakMap,ze=new WeakMap,function(){"use strict";function e(t){u(this,e),yt.set(this,{writable:!0,value:void 0}),gt.set(this,{writable:!0,value:!1}),wt.set(this,{writable:!0,value:!1}),bt.set(this,{writable:!0,value:0}),_t.set(this,{writable:!0,value:0}),kt.set(this,{writable:!0,value:0}),It.set(this,{writable:!0,value:0}),St.set(this,{writable:!0,value:[]}),Tt.set(this,{writable:!0,value:0}),Et.set(this,{writable:!0,value:[]}),xt.set(this,{writable:!0,value:0}),At.set(this,{writable:!0,value:"pause"}),l(this,yt,t)}return f(e,[{key:"update",value:function(){var e,t=Date.now();ft<t&&(dt=(null===(e=navigator.getGamepads)||void 0===e?void 0:e.call(navigator))||[],ft=t+5);if(l(this,wt,c(this,gt)),l(this,kt,c(this,_t)),"play"===c(this,At))l(this,bt,1+ +c(this,bt)),c(this,St)[c(this,Tt)]<c(this,bt)&&(l(this,gt,!c(this,gt)),l(this,bt,0),l(this,Tt,1+ +c(this,Tt))),l(this,It,1+ +c(this,It)),c(this,Et)[c(this,xt)]<c(this,It)&&(l(this,It,0),l(this,xt,c(this,xt)+2),l(this,_t,c(this,Et)[c(this,xt)-1]||0));else{l(this,gt,c(this,yt).some((function(e){var t=I(e),n=t[0],r=t[1]?1:-1,i=!0,s=!1,a=void 0;try{for(var o,u=dt[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var c=o.value;if(c&&c.axes[n]*r>.5)return!0}}catch(e){s=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(s)throw a}}}))),l(this,bt,c(this,gt)===c(this,wt)?c(this,bt)+1:0);var n=c(this,yt).reduce((function(e,t){var n=I(t),r=n[0],i=n[1]?1:-1,s=!0,a=!1,o=void 0;try{for(var u,c=dt[Symbol.iterator]();!(s=(u=c.next()).done);s=!0){var l=u.value;l&&r<l.axes.length&&(e=Math.max(e,l.axes[r]*i))}}catch(e){a=!0,o=e}finally{try{s||null==c.return||c.return()}finally{if(a)throw o}}return e}),0);l(this,_t,Math.floor(256*(n<.1?0:n))),l(this,It,c(this,_t)===c(this,kt)?c(this,It)+1:0)}"rec"===c(this,At)&&(c(this,gt)===c(this,wt)?c(this,St)[c(this,St).length-1]=c(this,bt):c(this,St).push(c(this,bt)),c(this,_t)===c(this,kt)?c(this,Et)[c(this,Et).length-1]=c(this,It):c(this,Et).push(c(this,_t),c(this,It)))}},{key:"isDown",get:function(){return c(this,gt)}},{key:"isDownChange",get:function(){return c(this,gt)&&!c(this,wt)}},{key:"isUpChange",get:function(){return!c(this,gt)&&c(this,wt)}},{key:"downCount",get:function(){return c(this,gt)?c(this,bt):NaN}},{key:"upCount",get:function(){return c(this,gt)?NaN:c(this,bt)}},{key:"value",get:function(){return c(this,_t)/256}},{key:"logMode",get:function(){return c(this,At)}},{key:"log",get:function(){return Ye(c(this,St),c(this,Et))},set:function(e){var t=Je(e);l(this,St,t[0]||[]),l(this,Et,t[1]||[]),l(this,At,"pause")}},{key:"recLog",value:function(){l(this,St,[c(this,bt),c(this,wt)?1:0,c(this,gt)?1:0,c(this,bt)]),l(this,Et,[c(this,It),c(this,_t),c(this,kt),c(this,It)]),l(this,At,"rec")}},{key:"playLog",value:function(){l(this,bt,c(this,St)[0]||0),l(this,wt,Boolean(c(this,St)[1])),l(this,gt,Boolean(c(this,St)[2])),l(this,Tt,3),l(this,It,c(this,Et)[0]||0),l(this,_t,c(this,Et)[1]||0),l(this,kt,c(this,Et)[2]||0),l(this,xt,3),l(this,At,"play"),0===c(this,bt)&&c(this,wt)===c(this,gt)&&l(this,Tt,Number.MAX_SAFE_INTEGER),0===c(this,It)&&c(this,_t)===c(this,kt)&&l(this,xt,Number.MAX_SAFE_INTEGER)}},{key:"endLog",value:function(){l(this,At,"pause")}}]),e}()),yt=new WeakMap,gt=new WeakMap,wt=new WeakMap,bt=new WeakMap,_t=new WeakMap,kt=new WeakMap,It=new WeakMap,St=new WeakMap,Tt=new WeakMap,Et=new WeakMap,xt=new WeakMap,At=new WeakMap,Mt=new WeakMap,Rt=function(){"use strict";function e(){u(this,e),Ot.set(this,{writable:!0,value:new Set})}return f(e,[{key:"add",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=!0,s=!1,a=void 0;try{for(var o,u=n[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var l=o.value;e.remove(l),c(this,Ot).add(l),Mt.set(l,c(this,Ot))}}catch(e){s=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(s)throw a}}}},{key:"run",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=!0,i=!1,s=void 0;try{for(var a,o=c(this,Ot)[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var u=a.value;u.apply(void 0,S(t))}}catch(e){i=!0,s=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw s}}}},{key:"clear",value:function(){c(this,Ot).clear()}},{key:"isEmpty",get:function(){return!c(this,Ot).size}},{key:"size",get:function(){return c(this,Ot).size}}],[{key:"remove",value:function(e){var t=Mt.get(e),n=!1;return t&&(n=t.delete(e),Mt.delete(e)),n}},{key:"of",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i,s=new e;return(i=s).add.apply(i,S(n)),s}}]),e}(),Ot=new WeakMap,Pt=function(){"use strict";function e(){u(this,e),Lt.set(this,{writable:!0,value:Uint32Array.of(4294967295*Math.random()+1)})}return f(e,[{key:"seed",get:function(){return 0|c(this,Lt)[0]},set:function(e){c(this,Lt)[0]=e}},{key:"updateSeed",value:function(){return c(this,Lt)[0]=4294967295*Math.random()+1,this.seed}},{key:"nextInt",value:function(e,t){c(this,Lt)[0]^=c(this,Lt)[0]<<13,c(this,Lt)[0]^=c(this,Lt)[0]>>17,c(this,Lt)[0]^=c(this,Lt)[0]<<5;var n=c(this,Lt)[0]/4294967296;return void 0===t&&(t=e,e=0),Math.floor(n*(t-e))+e}},{key:"nextFloat",value:function(e,t){return c(this,Lt)[0]^=c(this,Lt)[0]<<13,c(this,Lt)[0]^=c(this,Lt)[0]>>17,c(this,Lt)[0]^=c(this,Lt)[0]<<5,void 0===t&&(t=e,e=0),c(this,Lt)[0]/4294967296*(t-e)+e}},{key:"shuffle",value:function(e){var t=this;return e.map((function(e){return{num:t.nextFloat(1),val:e}})).sort((function(e,t){return e.num-t.num})).map((function(e){return e.val}))}}]),e}(),Lt=new WeakMap;function Nt(e){return e instanceof C?new C(e):"object"==typeof e?Object.fromEntries(Object.entries(e).map((function(e){var t=I(e);return[t[0],Nt(t[1])]}))):e}function Ct(e,t,n){return e instanceof C&&t instanceof C?C.blend(e,t,n):"number"==typeof e&&"number"==typeof t?(t-e)*n+e:"boolean"==typeof e&&"boolean"==typeof t?n>0?t:e:"object"==typeof e&&"object"==typeof t?Object.fromEntries(Object.keys(e).map((function(r){return[r,Ct(e[r],t[r],n)]}))):Nt(void 0===t?e:t)}function Dt(e){return function(t){return t<=0?0:1<=t?1:e(t)}}var Ft=function(){"use strict";function e(t,n,r){var i=void 0===n?1:n;u(this,e),Ut.set(this,{writable:!0,value:0}),Vt.set(this,{writable:!0,value:void 0}),jt.set(this,{writable:!0,value:void 0}),Bt.set(this,{writable:!0,value:[]}),Wt.set(this,{writable:!0,value:0}),qt.set(this,{writable:!0,value:null}),$t.set(this,{writable:!0,value:!1}),Ht.set(this,{writable:!0,value:void 0}),zt.set(this,{writable:!0,value:void 0}),Gt.set(this,{writable:!0,value:{}}),Kt.set(this,{writable:!0,value:[]}),Yt.set(this,{writable:!0,value:{}}),Jt.set(this,{writable:!0,value:{}}),p(this,"value",void 0),l(this,Vt,i),l(this,jt,r),l(this,Ht,l(this,zt,Nt(t))),this.value=Nt(t)}return f(e,[{key:"reset",value:function(){c(this,jt)&&c(this,jt).delete(this),l(this,$t,!1),l(this,Ut,0),l(this,Wt,0),l(this,qt,null),this.value=Nt(c(this,Ht))}},{key:"start",value:function(e){var t,n;return!1===e?null===(t=c(this,jt))||void 0===t||t.delete(this):null===(n=c(this,jt))||void 0===n||n.add(this),l(this,$t,!0),l(this,Ut,0),l(this,Wt,0),l(this,qt,null),this.value=Nt(c(this,Ht)),this}},{key:"end",value:function(){c(this,jt)&&c(this,jt).delete(this),l(this,$t,!0),l(this,Wt,c(this,Bt).length),l(this,qt,null),this.value=Nt(c(this,zt))}},{key:"to",value:function(t,n,r){var i=void 0===n?0:n,s=void 0===r?e.linear:r,a=this;i=Math.max(i,0);var o=l(this,zt,Nt(t));return c(this,Bt).push((function(){var e=a,t=Nt(a.value);return function(){if(c(e,Ut)<=i)return e.value=Ct(t,o,s(c(e,Ut)/i)),!0;l(e,Ut,c(e,Ut)-i),e.value=Nt(o)}})),this}},{key:"wait",value:function(e){var t=this;return e=Math.max(e,0),c(this,Bt).push((function(){return function(){if(c(t,Ut)<=e)return!0;l(t,Ut,c(t,Ut)-e)}})),this}},{key:"on",value:function(e){var t=this;return c(this,Bt).push((function(){var n=t,r=c(t,Ut);return function(){return l(n,Ut,r),!1===e()}})),this}},{key:"loopStart",value:function(e,t){var n=void 0===e?1/0:e,r=this,i=this,s="number"==typeof n?function(e){return e<n}:n;c(this,Bt).push((function(){return function(){c(r,Gt)[a]=0,t&&(c(r,Jt)[t]=0)}}));var a=c(this,Bt).length;return c(this,Kt).push(a),c(this,Gt)[a]=0,c(this,Bt).push((function(){return function(){var e=c(i,Gt)[a];t&&(c(i,Jt)[t]=e),s(e)||(l(i,Wt,c(i,Yt)[a]),l(i,qt,null))}})),this}},{key:"loopEnd",value:function(){var e=this,t=c(this,Bt).length,n=c(this,Kt).pop();if(void 0===n)throw Error("no corresponding loopStart()");return c(this,Yt)[n]=t,c(this,Bt).push((function(){return function(){c(e,Gt)[n]++,l(e,Wt,n-1),l(e,qt,null)}})),this}},{key:"update",value:function(e){if(e=null!=e?e:"function"==typeof c(this,Vt)?c(this,Vt).call(this):c(this,Vt),this.running){l(this,Ut,c(this,Ut)+Math.max(0,e));do{if(c(this,qt)||l(this,qt,c(this,Bt)[c(this,Wt)]()),c(this,qt).call(this))break;l(this,qt,null),l(this,Wt,1+ +c(this,Wt))}while(this.running)}return this}},{key:"done",get:function(){return c(this,Wt)>=c(this,Bt).length}},{key:"started",get:function(){return c(this,$t)}},{key:"running",get:function(){return this.started&&!this.done}},{key:"getAndSet",value:function(e){var t=this.value;return this.value=e,t}},{key:"loops",get:function(){return c(this,Jt)}}]),e}();p(Ft,"linear",Dt((function(e){return e}))),p(Ft,"inSine",Dt((function(e){return 1-Math.cos(e*(Math.PI/2))}))),p(Ft,"outSine",Dt((function(e){return Math.sin(e*(Math.PI/2))}))),p(Ft,"inOutSine",Dt((function(e){return e<.5?.5*Ft.inSine(2*e):.5+.5*Ft.outSine(2*(e-.5))}))),p(Ft,"steps",(function(e){return Dt((function(t){return Math.ceil(t*e)/e}))})),p(Ft,"frameSteps",(function(e){return Dt((function(t){return Math.floor(t*e)/(e-1)}))}));var Ut=new WeakMap,Vt=new WeakMap,jt=new WeakMap,Bt=new WeakMap,Wt=new WeakMap,qt=new WeakMap,$t=new WeakMap,Ht=new WeakMap,zt=new WeakMap,Gt=new WeakMap,Kt=new WeakMap,Yt=new WeakMap,Jt=new WeakMap,Xt=function(){"use strict";function e(t){var n=this;u(this,e),Zt.set(this,{writable:!0,value:void 0}),Qt.set(this,{writable:!0,value:void 0}),en.set(this,{writable:!0,value:new Set}),l(this,Zt,t),l(this,Qt,(function(){return c(n,Zt).frameTime}))}return f(e,[{key:"update",value:function(){var e=!0,t=!1,n=void 0;try{for(var r,i=c(this,en)[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var s=r.value;s.update(),s.done&&c(this,en).delete(s)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}},{key:"from",value:function(e){return new Ft(e,c(this,Qt),c(this,en))}},{key:"clear",value:function(){c(this,en).clear()}}]),e}(),Zt=new WeakMap,Qt=new WeakMap,en=new WeakMap;
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
const tn=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},nn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],s=t+1<e.length,a=s?e[t+1]:0,o=t+2<e.length,u=o?e[t+2]:0,c=i>>2,l=(3&i)<<4|a>>4;let h=(15&a)<<2|u>>6,d=63&u;o||(d=64,s||(h=64)),r.push(n[c],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(tn(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],s=t<e.length?n[e.charAt(t)]:0;++t;const a=t<e.length?n[e.charAt(t)]:64;++t;const o=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==s||null==a||null==o)throw Error();const u=i<<2|s>>4;if(r.push(u),64!==a){const e=s<<4&240|a>>2;if(r.push(e),64!==o){const e=a<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},rn=function(e){try{return nn.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
class sn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
function an(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function on(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function un(){return"object"==typeof indexedDB}function cn(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function ln(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}class hn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,hn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,dn.prototype.create)}}class dn{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(fn,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new hn(r,a,n)}}const fn=/\{\$([^}]+)}/g;
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
 */function pn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(mn(n)&&mn(s)){if(!pn(n,s))return!1}else if(n!==s)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function mn(e){return null!==e&&"object"==typeof e}
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
 */function vn(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function yn(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function gn(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class wn{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=bn),void 0===r.error&&(r.error=bn),void 0===r.complete&&(r.complete=bn);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function bn(){}
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
 */function _n(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function kn(e){return e&&e._delegate?e._delegate:e}class In{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const Sn="[DEFAULT]";
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
 */class Tn{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new sn;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:Sn})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===Sn?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:Sn:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}
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
class En{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Tn(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */const xn=[];var An,Mn;(Mn=An||(An={}))[Mn.DEBUG=0]="DEBUG",Mn[Mn.VERBOSE=1]="VERBOSE",Mn[Mn.INFO=2]="INFO",Mn[Mn.WARN=3]="WARN",Mn[Mn.ERROR=4]="ERROR",Mn[Mn.SILENT=5]="SILENT";const Rn={debug:An.DEBUG,verbose:An.VERBOSE,info:An.INFO,warn:An.WARN,error:An.ERROR,silent:An.SILENT},On=An.INFO,Pn={[An.DEBUG]:"log",[An.VERBOSE]:"log",[An.INFO]:"info",[An.WARN]:"warn",[An.ERROR]:"error"},Ln=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=Pn[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class Nn{constructor(e){this.name=e,this._logLevel=On,this._logHandler=Ln,this._userLogHandler=null,xn.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in An))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Rn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,An.DEBUG,...e),this._logHandler(this,An.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,An.VERBOSE,...e),this._logHandler(this,An.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,An.INFO,...e),this._logHandler(this,An.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,An.WARN,...e),this._logHandler(this,An.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,An.ERROR,...e),this._logHandler(this,An.ERROR,...e)}}
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
class Cn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Dn="@firebase/app",Fn="0.7.10",Un=new Nn("@firebase/app"),Vn="[DEFAULT]",jn={[Dn]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Bn=new Map,Wn=new Map;function qn(e,t){try{e.container.addComponent(t)}catch(n){Un.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $n(e){const t=e.name;if(Wn.has(t))return Un.debug(`There were multiple attempts to register component ${t}.`),!1;Wn.set(t,e);for(const t of Bn.values())qn(t,e);return!0}function Hn(e,t){return e.container.getProvider(t)}
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
const zn=new dn("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class Gn{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new In("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}
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
 */const Kn="9.6.0";function Yn(e="[DEFAULT]"){const t=Bn.get(e);if(!t)throw zn.create("no-app",{appName:e});return t}function Jn(e,t,n){var r;let i=null!==(r=jn[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Un.warn(e.join(" "))}$n(new In(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
var Xn;Xn="",$n(new In("platform-logger",(e=>new Cn(e)),"PRIVATE")),Jn(Dn,Fn,Xn),Jn(Dn,Fn,"esm2017"),Jn("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
Jn("firebase","9.6.0","app");var Zn={};!function(e,t){"object"==typeof Zn?t(Zn):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).idb={})}(Zn,(function(e){"use strict";function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,s=new Promise((function(s,a){n(i=e[t].apply(e,r)).then(s,a)}));return s.request=i,s}function i(e,t,n){var i=r(e,t,n);return i.then((function(e){if(e)return new l(e,i.request)}))}function s(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function a(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function o(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function u(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function c(e){this._index=e}function l(e,t){this._cursor=e,this._request=t}function h(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function f(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function p(e){this._db=e}s(c,"_index",["name","keyPath","multiEntry","unique"]),a(c,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),u(c,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(l,"_cursor",["direction","key","primaryKey","value"]),a(l,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(l.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new l(e,t._request)}))}))})})),h.prototype.createIndex=function(){return new c(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new c(this._store.index.apply(this._store,arguments))},s(h,"_store",["name","keyPath","indexNames","autoIncrement"]),a(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),u(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),o(h,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},s(d,"_tx",["objectStoreNames","mode"]),o(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),o(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),o(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[h,c].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,s=i[e].apply(i,n.slice(0,-1));s.onsuccess=function(){r(s.result)}})}))})),[c,h].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=function(e,t,n){var i=r(indexedDB,"open",[e,t]),s=i.request;return s&&(s.onupgradeneeded=function(e){n&&n(new f(s.result,e.oldVersion,s.transaction))}),i.then((function(e){return new p(e)}))},e.deleteDb=function(e){return r(indexedDB,"deleteDatabase",[e])},Object.defineProperty(e,"__esModule",{value:!0})}));const Qn="@firebase/installations",er="0.5.4",tr=1e4,nr="w:0.5.4",rr="FIS_v2",ir=36e5,sr=new dn("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function ar(e){return e instanceof hn&&e.code.includes("request-failed")}
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
 */function or({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function ur(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function cr(e,t){const n=(await t.json()).error;return sr.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function lr({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function hr(e,{refreshToken:t}){const n=lr(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
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
 */(t)),n}async function dr(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
 */function fr(e){return new Promise((t=>{setTimeout(t,e)}))}
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
const pr=/^[cdef][\w-]{21}$/;function mr(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
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
 */(e);return pr.test(t)?t:""}catch(e){return""}}function vr(e){return`${e.appName}!${e.appId}`}
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
 */const yr=new Map;function gr(e,t){const n=vr(e);wr(n,t),function(e,t){const n=_r();n&&n.postMessage({key:e,fid:t});kr()}(n,t)}function wr(e,t){const n=yr.get(e);if(n)for(const e of n)e(t)}let br=null;function _r(){return!br&&"BroadcastChannel"in self&&(br=new BroadcastChannel("[Firebase] FID Change"),br.onmessage=e=>{wr(e.data.key,e.data.fid)}),br}function kr(){0===yr.size&&br&&(br.close(),br=null)}
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
 */const Ir="firebase-installations-store";let Sr=null;function Tr(){return Sr||(Sr=Zn.openDb("firebase-installations-database",1,(e=>{if(0===e.oldVersion)e.createObjectStore(Ir)}))),Sr}async function Er(e,t){const n=vr(e),r=(await Tr()).transaction(Ir,"readwrite"),i=r.objectStore(Ir),s=await i.get(n);return await i.put(t,n),await r.complete,s&&s.fid===t.fid||gr(e,t.fid),t}async function xr(e){const t=vr(e),n=(await Tr()).transaction(Ir,"readwrite");await n.objectStore(Ir).delete(t),await n.complete}async function Ar(e,t){const n=vr(e),r=(await Tr()).transaction(Ir,"readwrite"),i=r.objectStore(Ir),s=await i.get(n),a=t(s);return void 0===a?await i.delete(n):await i.put(a,n),await r.complete,!a||s&&s.fid===a.fid||gr(e,a.fid),a}
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
 */async function Mr(e){let t;const n=await Ar(e,(n=>{const r=function(e){return Pr(e||{fid:mr(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(sr.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function(e,{fid:t}){const n=or(e),r=lr(e),i={fid:t,authVersion:rr,appId:e.appId,sdkVersion:nr},s={method:"POST",headers:r,body:JSON.stringify(i)},a=await dr((()=>fetch(n,s)));if(a.ok){const e=await a.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:ur(e.authToken)}}throw await cr("Create Installation",a)}(e,t);return Er(e,n)}catch(n){throw ar(n)&&409===n.customData.serverCode?await xr(e):await Er(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Rr(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Rr(e){let t=await Or(e);for(;1===t.registrationStatus;)await fr(100),t=await Or(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Mr(e);return n||t}return t}function Or(e){return Ar(e,(e=>{if(!e)throw sr.create("installation-not-found");return Pr(e)}))}function Pr(e){return 1===(t=e).registrationStatus&&t.registrationTime+tr<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
 */}async function Lr({appConfig:e,platformLoggerProvider:t},n){const r=function(e,{fid:t}){return`${or(e)}/${t}/authTokens:generate`}
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
 */(e,n),i=hr(e,n),s=t.getImmediate({optional:!0});s&&i.append("x-firebase-client",s.getPlatformInfoString());const a={installation:{sdkVersion:nr}},o={method:"POST",headers:i,body:JSON.stringify(a)},u=await dr((()=>fetch(r,o)));if(u.ok){return ur(await u.json())}throw await cr("Generate Auth Token",u)}async function Nr(e,t=!1){let n;const r=await Ar(e.appConfig,(r=>{if(!Dr(r))throw sr.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+ir}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await Cr(e.appConfig);for(;1===n.authToken.requestStatus;)await fr(100),n=await Cr(e.appConfig);const r=n.authToken;return 0===r.requestStatus?Nr(e,t):r}(e,t),r;{if(!navigator.onLine)throw sr.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await Lr(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Er(e.appConfig,r),n}catch(n){if(!ar(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Er(e.appConfig,n)}else await xr(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function Cr(e){return Ar(e,(e=>{if(!Dr(e))throw sr.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+tr<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
 */}))}function Dr(e){return void 0!==e&&2===e.registrationStatus}
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
async function Fr(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await Mr(e);t&&await t}
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
 */(n.appConfig);return(await Nr(n,t)).token}function Ur(e){return sr.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr="installations",jr=e=>{const t=Hn(e.getProvider("app").getImmediate(),Vr).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await Mr(t.appConfig);return r?r.catch(console.error):Nr(t).catch(console.error),n.fid}(t),getToken:e=>Fr(t,e)}};$n(new In(Vr,(e=>{const t=e.getProvider("app").getImmediate(),n=
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
function(e){if(!e||!e.options)throw Ur("App Configuration");if(!e.name)throw Ur("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ur(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,platformLoggerProvider:Hn(t,"platform-logger"),_delete:()=>Promise.resolve()}}),"PUBLIC")),$n(new In("installations-internal",jr,"PRIVATE")),Jn(Qn,er),Jn(Qn,er,"esm2017");
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
const Br="analytics",Wr="https://www.googletagmanager.com/gtag/js",qr=new Nn("@firebase/analytics");
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
function $r(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Hr(e,t,n,r){return async function(i,s,a){try{"event"===i?await async function(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await $r(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(e){qr.error(e)}}(e,t,n,s,a):"config"===i?await async function(e,t,n,r,i,s){const a=r[i];try{if(a)await t[a];else{const e=(await $r(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(e){qr.error(e)}e("config",i,s)}(e,t,n,r,s,a):e("set",s)}catch(e){qr.error(e)}}}
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
const zr=new dn("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const Gr=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function Kr(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Yr(e,t=Gr,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw zr.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw zr.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Xr;return setTimeout((async()=>{o.abort()}),void 0!==n?n:6e4),Jr({appId:r,apiKey:i,measurementId:s},a,o,t)}async function Jr(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Gr){const{appId:s,measurementId:a}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(s),r(zr.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(e){if(a)return qr.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:s,measurementId:a};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Kr(r)},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),a=await fetch(s,i);if(200!==a.status&&304!==a.status){let e="";try{const n=await a.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw zr.create("config-fetch-failed",{httpStatus:a.status,responseMessage:e})}return a.json()}(e);return i.deleteThrottleMetadata(s),t}catch(t){if(!function(e){if(!(e instanceof hn&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(i.deleteThrottleMetadata(s),a)return qr.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:s,measurementId:a};throw t}const o=503===Number(t.customData.httpStatus)?_n(n,i.intervalMillis,30):_n(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+o,backoffCount:n+1};return i.setThrottleMetadata(s,u),qr.debug(`Calling attemptFetch again in ${o} millis`),Jr(e,u,r,i)}}class Xr{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(e,t,n,r,i,s,a){var o;const u=Yr(e);u.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&qr.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>qr.error(e))),t.push(u);const c=async function(){if(!un())return qr.warn(zr.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await cn()}catch(e){return qr.warn(zr.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}().then((e=>e?r.getId():void 0)),[l,h]=await Promise.all([u,c]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Wr))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${Wr}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(s,l.measurementId),i("js",new Date);const d=null!==(o=null==a?void 0:a.config)&&void 0!==o?o:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),i("config",l.measurementId,d),l.measurementId}
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
 */class Qr{constructor(e){this.app=e}_delete(){return delete ei[this.app.options.appId],Promise.resolve()}}let ei={},ti=[];const ni={};let ri,ii,si="dataLayer",ai="gtag",oi=!1;function ui(e,t,n){!function(){const e=[];if(on()&&e.push("This is a browser extension environment."),ln()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=zr.create("invalid-analytics-context",{errorInfo:t});qr.warn(n.message)}}();const r=e.options.appId;if(!r)throw zr.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw zr.create("no-api-key");qr.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=ei[r])throw zr.create("already-exists",{id:r});if(!oi){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(si);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(s=window[i]),window[i]=Hr(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}(ei,ti,ni,si,ai);ii=e,ri=t,oi=!0}ei[r]=Zr(e,ti,ni,t,ri,si,n);return new Qr(e)}
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
 */function ci(e,t,n,r){e=kn(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(ii,ei[e.app.options.appId],t,n,r).catch((e=>qr.error(e)))}const li="@firebase/analytics",hi="0.7.4";$n(new In(Br,((e,{options:t})=>ui(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),$n(new In("analytics-internal",(function(e){try{const t=e.getProvider(Br).getImmediate();return{logEvent:(e,n,r)=>ci(t,e,n,r)}}catch(e){throw zr.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Jn(li,hi),Jn(li,hi,"esm2017");var di,fi=new E({fps:60}),pi=new G({width:160,height:240,el:"#app"}),mi=new Re,vi=new Le(pi),yi={left:new Ve(["ArrowLeft","a"]),right:new Ve(["ArrowRight","d"]),up:new Ve(["ArrowUp","w"]),down:new Ve(["ArrowDown","s"]),fire:new Ve([" ","z",".","Control"]),reset:new Ve(["Enter","Escape"])},gi=new Qe(pi),wi={left:new pt([14]),right:new pt([15]),up:new pt([12]),down:new pt([13]),fire:new pt([0,1,2,3,4,5,6,7]),reset:new pt([8,9,10,11,16,17])},bi={left:new vt([[0,!1],[2,!1]]),right:new vt([[0,!0],[2,!0]]),up:new vt([[1,!1],[3,!1]]),down:new vt([[1,!0],[3,!0]])},_i=[yi.up,yi.right,yi.down,yi.left],ki=[wi.up,wi.right,wi.down,wi.left],Ii=[bi.up,bi.right,bi.down,bi.left],Si=[yi.fire,gi,wi.fire],Ti=[yi.reset,wi.reset],Ei=S(_i).concat(S(Si),S(ki)),xi=S(Ei).concat(S(Ii)),Ai=new Xt(fi),Mi={bg:new Rt,effectBack:new Rt,enemyNotice:new Rt,player:new Rt,playerBullet:new Rt,effectOverPlayer:new Rt,enemy:new Rt,enemyBullet:new Rt,effectOverEnemy:new Rt,ui:new Rt},Ri=new Pt;s.register("5eDWT",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function s(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return s(e[2])}return"/"}(),i[e]=t),t}})),di=s("5eDWT").getBundleURL("6iZMW")+s("iiiWY").resolve("eTB8B");var Oi,Pi=q.loadMap(new URL(di),{bg:[1,1,32,32,0,16],buttonLight:[1,34,34,34],buttonMute:{0:[36,34,34,34],1:[70,34,34,34]},buttonReset:[1,69,34,34],buttonTwitter:[1,104,34,34],card:{top:[34,1,144,4],body:[34,5,144,2],bottom:[34,7,144,4]},enemyBulletLargeTake:[34,12,14,13,7,5],enemyBulletLarge:{0:[49,12,16,15,8,6],1:[65,12,16,15,8,6]},enemyBulletTake:[34,26,8,7,4,3],enemyBullet:{0:[82,12,10,9,5,4],1:[92,12,10,9,5,4]},enemyLargeTake:[179,1,32,31,16,12],enemyLarge:{body:[36,69,34,33,17,13],bodyFlash:[36,103,34,33,17,13],gauge:[74,73,26,24,13,9],gaugeFlash:[74,107,26,24,13,9]},enemyNoticeLarge:[82,22,12,11,6,5.5],enemyNotice:[103,12,8,7,4,3.5],enemyTakeChip:[103,20,8,8,4,4],enemyTake:[112,12,16,15,8,6],enemy:{body:[36,138,18,17,9,7],bodyFlash:[36,156,18,17,9,7],gauge:[57,141,12,10,6,4],gaugeFlash:[57,159,12,10,6,4]},finish:[212,1,56,12],fontRate:{normal:{0:[269,1,5,7],1:[275,1,5,7],2:[281,1,5,7],3:[287,1,5,7],4:[293,1,5,7],5:[299,1,5,7],6:[305,1,5,7],7:[311,1,5,7],8:[317,1,5,7],9:[323,1,5,7],"*":[329,1,5,7],"+":[335,1,5,7]},flash:{0:[269,9,5,7],1:[275,9,5,7],2:[281,9,5,7],3:[287,9,5,7],4:[293,9,5,7],5:[299,9,5,7],6:[305,9,5,7],7:[311,9,5,7],8:[317,9,5,7],9:[323,9,5,7],"*":[329,9,5,7],"+":[335,9,5,7]}},fontUiL:{0:[341,1,8,9],1:[350,1,8,9],2:[359,1,8,9],3:[368,1,8,9],4:[377,1,8,9],5:[386,1,8,9],6:[395,1,8,9],7:[404,1,8,9],8:[413,1,8,9],9:[422,1,8,9],t:[431,1,8,9]},fontUiS:{0:[341,11,3,5],1:[345,11,3,5],2:[349,11,3,5],3:[353,11,3,5],4:[357,11,3,5],5:[361,11,3,5],6:[365,11,3,5],7:[369,11,3,5],8:[373,11,3,5],9:[377,11,3,5],A:[381,11,3,5],E:[385,11,3,5],I:[389,11,3,5],L:[393,11,3,5],P:[397,11,3,5],R:[401,11,3,5],S:[405,11,3,5],T:[409,11,3,5],U:[413,11,3,5],Y:[417,11,3,5],".":[421,11,3,5],"/":[425,11,3,5]},fontUi:{normal:{0:[341,17,5,7],1:[347,17,5,7],2:[353,17,5,7],3:[359,17,5,7],4:[365,17,5,7],5:[371,17,5,7],6:[377,17,5,7],7:[383,17,5,7],8:[389,17,5,7],9:[395,17,5,7],y:[401,17,7,7],h:[409,17,7,7],".":[417,17,1,7],",":[419,17,1,8]},flash:{0:[341,25,5,7],1:[347,25,5,7],2:[353,25,5,7],3:[359,25,5,7],4:[365,25,5,7],5:[371,25,5,7],6:[377,25,5,7],7:[383,25,5,7],8:[389,25,5,7],9:[395,25,5,7],y:[401,25,7,7],h:[409,25,7,7],".":[417,25,1,7],",":[419,25,1,8]}},newRecord:{normal:[105,34,94,12],flash:[105,46,94,12]},playerBulletHit:[129,12,8,8,4,4],playerBullet:[129,21,8,8,4,4],playerDestroyChip:[138,12,8,7,4,3],playerDestroy:[440,1,16,24,8,18],player:{normal:[1,139,18,26,9,19],flash:[1,165,18,26,9,19]},pressAnyButton:[105,59,89,9],replayLoading:[200,34,90,10],replayNow:[212,14,40,7],replayReady:[291,34,97,10],scoreBg:[105,69,130,12],start:[269,17,46,12],success:{normal:[105,82,88,44,44,22],flash:[105,126,88,44,44,22]},tips:{0:[194,82,108,40],1:[389,34,99,25],2:[303,108,76,25],3:[395,82,110,40],4:[395,123,87,40],5:[105,171,114,25],6:[220,171,114,25],7:[105,197,94,40],8:[200,197,107,40],9:[303,134,83,25],10:[194,123,82,26],11:[303,82,91,25],arrow:[147,12,17,6],heart:[147,19,10,9],million:[457,1,53,8],score:[95,22,7,7],user:[158,19,12,12]},titleLogoIcon:[1,192,30,45],titleLogo:{normal:[308,197,129,14],normalFlash:[308,211,129,14],ex:[308,197,150,14],exFlash:[308,211,150,14]},uiStatusReset:[36,175,47,25]});Oi=s("5eDWT").getBundleURL("6iZMW")+s("iiiWY").resolve("aMV2A");var Li;Li=s("5eDWT").getBundleURL("6iZMW")+s("iiiWY").resolve("aIeDX");var Ni;Ni=s("5eDWT").getBundleURL("6iZMW")+s("iiiWY").resolve("jzkA8");var Ci;Ci=s("5eDWT").getBundleURL("6iZMW")+s("iiiWY").resolve("6uV70");var Di;Di=s("5eDWT").getBundleURL("6iZMW")+s("iiiWY").resolve("eMTjg");var Fi;Fi=s("5eDWT").getBundleURL("6iZMW")+s("iiiWY").resolve("akrbZ");var Ui;Ui=s("5eDWT").getBundleURL("6iZMW")+s("iiiWY").resolve("kNbWg");var Vi;Vi=s("5eDWT").getBundleURL("6iZMW")+s("iiiWY").resolve("8cvlD");var ji;ji=s("5eDWT").getBundleURL("6iZMW")+s("iiiWY").resolve("f1UVR");var Bi;Bi=s("5eDWT").getBundleURL("6iZMW")+s("iiiWY").resolve("KfNtP");var Wi;Wi=s("5eDWT").getBundleURL("6iZMW")+s("iiiWY").resolve("b5Tfb");var qi;qi=s("5eDWT").getBundleURL("6iZMW")+s("iiiWY").resolve("33mfn");var $i;$i=s("5eDWT").getBundleURL("6iZMW")+s("iiiWY").resolve("9WYf8");var Hi,zi={uiButton:new Ae(new URL(Oi),.5,.04),titleStart:new Ae(new URL(Li),.8),titleModeChange:new Ae(new URL(Ni),.4),playerFire:new Ae(new URL(Ci),.4,.02),playerHit:new Ae(new URL(Di),1),enemyShow:new Ae(new URL(Fi),1,.04),enemyHit:new Ae(new URL(Ui),.5,.04),enemyFire:new Ae(new URL(Vi),.6,.02),enemyFireLarge:new Ae(new URL(ji),.9,.04),enemyTake:new Ae(new URL(Bi),.45,.02),enemyTakeLarge:new Ae(new URL(Wi),.6,.04),resultCounting:new Ae(new URL(qi),.5,.02),resultSuccess:new Ae(new URL($i),1)};Hi=s("5eDWT").getBundleURL("6iZMW")+s("iiiWY").resolve("a5LcI");var Gi;Gi=s("5eDWT").getBundleURL("6iZMW")+s("iiiWY").resolve("2lEye");var Ki={play:new Me(new URL(Hi)),result:new Me(new URL(Gi),.9)},Yi={mode:"normal",screenTop:0,isFirstEnemy:!1,enemyWaveId:0,playerPos:{x:0,y:0},isSuccess:!1,heart:0,heartRate:0,deathCount:0,addHeart:function(e){this.heart+=this.getHeartRate()*e},getHeartRate:function(){var e=this.heartRate||1;return this.isSuccess?e:Math.min(e,16)},clearing:Ai.from(0).wait(1500)},Ji={white:C.parse("#ffffff"),base:C.parse("#ffffff"),main:C.parse("#f64744"),accent:C.parse("#f69c44")},Xi=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:Vn,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw zn.create("bad-app-name",{appName:String(r)});const i=Bn.get(r);if(i){if(pn(e,i.options)&&pn(n,i.config))return i;throw zn.create("duplicate-app",{appName:r})}const s=new En(r);for(const e of Wn.values())s.addComponent(e);const a=new Gn(e,n,s);return Bn.set(r,a),a}({apiKey:"AIzaSyC2zCzDFkfmx1ZHOc6v03T-oGBeS0124-4",authDomain:"fire-shooter-san.firebaseapp.com",projectId:"fire-shooter-san",storageBucket:"fire-shooter-san.appspot.com",messagingSenderId:"1003741816214",appId:"1:1003741816214:web:20da45a98b3fd18345a9b7",measurementId:"G-3Q36TCTMGF"}),Zi=ci.bind(null,function(e=Yn()){const t=Hn(e=kn(e),Br);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=Hn(e,Br);if(n.isInitialized()){const e=n.getImmediate();if(pn(t,n.getOptions()))return e;throw zr.create("already-initialized")}return n.initialize({options:t})}(e)}(Xi));function Qi(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function es(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ts=es,ns=new dn("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),rs=new Nn("@firebase/auth");function is(e,...t){rs.logLevel<=An.ERROR&&rs.error(`Auth (9.6.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(e,...t){throw us(e,...t)}function as(e,...t){return us(e,...t)}function os(e,t,n){const r=Object.assign(Object.assign({},ts()),{[t]:n});return new dn("auth","Firebase",r).create(t,{appName:e.name})}function us(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return ns.create(e,...t)}function cs(e,t,...n){if(!e)throw us(t,...n)}function ls(e){const t="INTERNAL ASSERTION FAILED: "+e;throw is(t),new Error(t)}function hs(e,t){e||ls(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds=new Map;function fs(e){hs(e instanceof Function,"Expected a class definition");let t=ds.get(e);return t?(hs(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ds.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function ps(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function ms(){return"http:"===vs()||"https:"===vs()}function vs(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class ys{constructor(e,t){this.shortDelay=e,this.longDelay=t,hs(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(an())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(ms()||on()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(e,t){hs(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ls("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ls("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ls("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},_s=new ys(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Is(e,t,n,r,i={}){return Ss(e,i,(()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const a=vn(Object.assign({key:e.config.apiKey},s)).slice(1),o=new(ws.headers());return o.set("Content-Type","application/json"),o.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&o.set("X-Firebase-Locale",e.languageCode),ws.fetch()(Es(e,e.config.apiHost,n,a),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},i))}))}async function Ss(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},bs),t);try{const t=new xs(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw As(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw As(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw As(e,"email-already-in-use",s);const o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw os(e,o,a);ss(e,o)}}catch(t){if(t instanceof hn)throw t;ss(e,"network-request-failed")}}async function Ts(e,t,n,r,i={}){const s=await Is(e,t,n,r,i);return"mfaPendingCredential"in s&&ss(e,"multi-factor-auth-required",{_serverResponse:s}),s}function Es(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?gs(e.config,i):`${e.config.apiScheme}://${i}`}class xs{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(as(this.auth,"timeout"))),_s.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function As(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=as(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function Ms(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(e){return 1e3*Number(e)}function Os(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return is("JWT malformed, contained fewer than 3 sections"),null;try{const e=rn(n);return e?JSON.parse(e):(is("Failed to decode base64 JWT payload"),null)}catch(e){return is("Caught error parsing JWT payload as JSON",e),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
async function Ps(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof hn&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class Ls{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ms(this.lastLoginAt),this.creationTime=Ms(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Cs(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ps(e,async function(e,t){return Is(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));cs(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?s.providerUserInfo.map((e=>{var{providerId:t}=e,n=Qi(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const o=(u=e.providerData,c=a,[...u.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var u,c;const l=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==o?void 0:o.length)),d=!!l&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Ns(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Ds{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){cs(e.idToken,"internal-error"),cs(void 0!==e.idToken,"internal-error"),cs(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=Os(e);return cs(t,"internal-error"),cs(void 0!==t.exp,"internal-error"),cs(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return cs(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
async function(e,t){const n=await Ss(e,{},(()=>{const n=vn({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=Es(e,r,"/v1/token",`key=${i}`);return ws.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Ds;return n&&(cs("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(cs("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(cs("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ds,this.toJSON())}_performRefresh(){return ls("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(e,t){cs("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Us{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Qi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Ls(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Ns(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Ps(this,this.stsTokenManager.getToken(this.auth,e));return cs(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=kn(e),r=await n.getIdToken(t),i=Os(r);cs(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ms(Rs(i.auth_time)),issuedAtTime:Ms(Rs(i.iat)),expirationTime:Ms(Rs(i.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=kn(e);await Cs(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(cs(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Us(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){cs(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Cs(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ps(this,async function(e,t){return Is(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,a,o,u,c;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,v=null!==(u=t.createdAt)&&void 0!==u?u:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:g,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:k}=t;cs(g&&k,e,"internal-error");const I=Ds.fromJSON(this.name,k);cs("string"==typeof g,e,"internal-error"),Fs(l,e.name),Fs(h,e.name),cs("boolean"==typeof w,e,"internal-error"),cs("boolean"==typeof b,e,"internal-error"),Fs(d,e.name),Fs(f,e.name),Fs(p,e.name),Fs(m,e.name),Fs(v,e.name),Fs(y,e.name);const S=new Us({uid:g,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:v,lastLoginAt:y});return _&&Array.isArray(_)&&(S.providerData=_.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new Ds;r.updateFromServerResponse(t);const i=new Us({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Cs(i),i}}
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
 */class Vs{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Vs.type="NONE";const js=Vs;
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
 */function Bs(e,t,n){return`firebase:${e}:${t}:${n}`}class Ws{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Bs(this.userKey,r.apiKey,i),this.fullPersistenceKey=Bs("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Us._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new Ws(fs(js),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||fs(js);const s=Bs(n,e.config.apiKey,e.name);let a=null;for(const n of t)try{const t=await n._get(s);if(t){const r=Us._fromJSON(e,t);n!==i&&(a=r),i=n;break}}catch(e){}const o=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&o.length?(i=o[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(e){}}))),new Ws(i,e,n)):new Ws(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Gs(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if($s(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ys(t))return"Blackberry";if(Js(t))return"Webos";if(Hs(t))return"Safari";if((t.includes("chrome/")||zs(t))&&!t.includes("edge/"))return"Chrome";if(Ks(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function $s(e=an()){return/firefox\//i.test(e)}function Hs(e=an()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function zs(e=an()){return/crios\//i.test(e)}function Gs(e=an()){return/iemobile/i.test(e)}function Ks(e=an()){return/android/i.test(e)}function Ys(e=an()){return/blackberry/i.test(e)}function Js(e=an()){return/webos/i.test(e)}function Xs(e=an()){return/iphone|ipad|ipod/i.test(e)}function Zs(){return function(){const e=an();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Qs(e=an()){return Xs(e)||Ks(e)||Js(e)||Ys(e)||/windows phone/i.test(e)||Gs(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function ea(e,t=[]){let n;switch(e){case"Browser":n=qs(an());break;case"Worker":n=`${qs(an())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ra(this),this.idTokenSubscription=new ra(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ns,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=fs(t)),this._initializationPromise=this.queue((async()=>{var n,r;this._deleted||(this.persistenceManager=await Ws.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null==s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(cs(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Cs(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?kn(e):null;return t&&cs(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&cs(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(fs(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new dn("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&fs(e)||this._popupRedirectResolver;cs(t,this,"argument-error"),this.redirectPersistenceManager=await Ws.create(this,[fs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return cs(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return cs(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ea(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function na(e){return kn(e)}class ra{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new wn(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return cs(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class ia{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ls("not implemented")}_getIdTokenResponse(e){return ls("not implemented")}_linkToIdToken(e,t){return ls("not implemented")}_getReauthenticationResolver(e){return ls("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(e,t){return Is(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class aa extends ia{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new aa(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new aa(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
return async function(e,t){return Ts(e,"POST","/v1/accounts:signInWithPassword",ks(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
return async function(e,t){return Ts(e,"POST","/v1/accounts:signInWithEmailLink",ks(e,t))}(e,{email:this._email,oobCode:this._password});default:ss(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return sa(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Ts(e,"POST","/v1/accounts:signInWithEmailLink",ks(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:ss(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oa(e,t){return Ts(e,"POST","/v1/accounts:signInWithIdp",ks(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua extends ia{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ua(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ss("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Qi(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new ua(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return oa(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,oa(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,oa(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=vn(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class la extends ia{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new la({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new la({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Ts(e,"POST","/v1/accounts:signInWithPhoneNumber",ks(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Ts(e,"POST","/v1/accounts:signInWithPhoneNumber",ks(e,t));if(n.temporaryProof)throw As(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Ts(e,"POST","/v1/accounts:signInWithPhoneNumber",ks(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),ca)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new la({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){var t,n,r,i,s,a;const o=yn(gn(e)),u=null!==(t=o.apiKey)&&void 0!==t?t:null,c=null!==(n=o.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=o.mode)&&void 0!==r?r:null);cs(u&&c&&l,"argument-error"),this.apiKey=u,this.operation=l,this.code=c,this.continueUrl=null!==(i=o.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(s=o.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(a=o.tenantId)&&void 0!==a?a:null}static parseLink(e){const t=function(e){const t=yn(gn(e)).link,n=t?yn(gn(t)).deep_link_id:null,r=yn(gn(e)).deep_link_id;return(r?yn(gn(r)).link:null)||r||n||t||e}(e);try{return new ha(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class da{constructor(){this.providerId=da.PROVIDER_ID}static credential(e,t){return aa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ha.parseLink(t);return cs(n,"argument-error"),aa._fromEmailAndCode(e,n.code,n.tenantId)}}da.PROVIDER_ID="password",da.EMAIL_PASSWORD_SIGN_IN_METHOD="password",da.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class fa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class pa extends fa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class ma extends pa{constructor(){super("facebook.com")}static credential(e){return ua._fromParams({providerId:ma.PROVIDER_ID,signInMethod:ma.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ma.credentialFromTaggedObject(e)}static credentialFromError(e){return ma.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ma.credential(e.oauthAccessToken)}catch(e){return null}}}ma.FACEBOOK_SIGN_IN_METHOD="facebook.com",ma.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class va extends pa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ua._fromParams({providerId:va.PROVIDER_ID,signInMethod:va.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return va.credentialFromTaggedObject(e)}static credentialFromError(e){return va.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return va.credential(t,n)}catch(e){return null}}}va.GOOGLE_SIGN_IN_METHOD="google.com",va.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class ya extends pa{constructor(){super("github.com")}static credential(e){return ua._fromParams({providerId:ya.PROVIDER_ID,signInMethod:ya.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ya.credentialFromTaggedObject(e)}static credentialFromError(e){return ya.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return ya.credential(e.oauthAccessToken)}catch(e){return null}}}ya.GITHUB_SIGN_IN_METHOD="github.com",ya.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class ga extends pa{constructor(){super("twitter.com")}static credential(e,t){return ua._fromParams({providerId:ga.PROVIDER_ID,signInMethod:ga.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ga.credentialFromTaggedObject(e)}static credentialFromError(e){return ga.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return ga.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
async function wa(e,t){return Ts(e,"POST","/v1/accounts:signUp",ks(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ga.TWITTER_SIGN_IN_METHOD="twitter.com",ga.PROVIDER_ID="twitter.com";class ba{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Us._fromIdTokenResponse(e,n,r),s=_a(n);return new ba({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=_a(n);return new ba({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function _a(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class ka extends hn{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ka.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new ka(e,t,n,r)}}function Ia(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ka._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sa(e,t,n=!1){const r=await Ps(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return ba._forOperation(e,"link",r)}
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
async function Ta(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Ps(e,Ia(r,i,t,e),n);cs(s.idToken,r,"internal-error");const a=Os(s.idToken);cs(a,r,"internal-error");const{sub:o}=a;return cs(e.uid===o,r,"user-mismatch"),ba._forOperation(e,i,s)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&ss(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ea(e,t,n=!1){const r="signIn",i=await Ia(e,r,t),s=await ba._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
async function xa(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=kn(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},s=await Ps(r,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
async function(e,t){return Is(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find((({providerId:e})=>"password"===e));a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}new WeakMap;const Aa="__sak";
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
 */class Ma{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Aa,"1"),this.storage.removeItem(Aa),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra extends Ma{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=an();return Hs(e)||Xs(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Qs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Zs()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ra.type="LOCAL";const Oa=Ra;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends Ma{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pa.type="SESSION";const La=Pa;
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
class Na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Na(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(s).map((async e=>e(t.origin,i))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function Ca(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */Na.receivers=[];class Da{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((a,o)=>{const u=Ca("",20);r.port1.start();const c=setTimeout((()=>{o(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===u)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(c),clearTimeout(i),o(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fa(){return window}
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
function Ua(){return void 0!==Fa().WorkerGlobalScope&&"function"==typeof Fa().importScripts}
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
const Va="firebaseLocalStorageDb",ja="firebaseLocalStorage",Ba="fbase_key";class Wa{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function qa(e,t){return e.transaction([ja],t?"readwrite":"readonly").objectStore(ja)}function $a(){const e=indexedDB.open(Va,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(ja,{keyPath:Ba})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(ja)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Va);return new Wa(e).toPromise()}(),t(await $a()))}))}))}async function Ha(e,t,n){const r=qa(e,!0).put({[Ba]:t,value:n});return new Wa(r).toPromise()}function za(e,t){const n=qa(e,!0).delete(t);return new Wa(n).toPromise()}class Ga{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await $a()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ua()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Na._getInstance(Ua()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Da(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await $a();return await Ha(e,Aa,"1"),await za(e,Aa),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ha(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=qa(e,!1).get(t),r=await new Wa(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>za(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=qa(e,!1).getAll();return new Wa(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}Ga.type="LOCAL";const Ka=Ga;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=as("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function Ja(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
Ja("rcb"),new ys(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
const Xa="recaptcha";async function Za(e,t,n){var r;const i=await n.verify();try{let s;if(cs("string"==typeof i,e,"argument-error"),cs(n.type===Xa,e,"argument-error"),s="string"==typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){cs("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function(e,t){return Is(e,"POST","/v2/accounts/mfaEnrollment:start",ks(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{cs("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;cs(n,e,"missing-multi-factor-info");const a=await function(e,t){return Is(e,"POST","/v2/accounts/mfaSignIn:start",ks(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return a.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Is(e,"POST","/v1/accounts:sendVerificationCode",ks(e,t))}(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Qa{constructor(e){this.providerId=Qa.PROVIDER_ID,this.auth=na(e)}verifyPhoneNumber(e,t){return Za(this.auth,e,kn(t))}static credential(e,t){return la._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Qa.credentialFromTaggedObject(t)}static credentialFromError(e){return Qa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?la._fromTokenResponse(t,n):null}}
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
function eo(e,t){return t?fs(t):(cs(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Qa.PROVIDER_ID="phone",Qa.PHONE_SIGN_IN_METHOD="phone";class to extends ia{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return oa(e,this._buildIdpRequest())}_linkToIdToken(e,t){return oa(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return oa(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function no(e){return Ea(e.auth,new to(e),e.bypassAuthState)}function ro(e){const{auth:t,user:n}=e;return cs(n,t,"internal-error"),Ta(n,new to(e),e.bypassAuthState)}async function io(e){const{auth:t,user:n}=e;return cs(n,t,"internal-error"),Sa(n,new to(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:a}=e;if(s)return void this.reject(s);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return no;case"linkViaPopup":case"linkViaRedirect":return io;case"reauthViaPopup":case"reauthViaRedirect":return ro;default:ss(this.auth,"internal-error")}}resolve(e){hs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hs(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=new ys(2e3,1e4);class oo extends so{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,oo.currentPopupAction&&oo.currentPopupAction.cancel(),oo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return cs(e,this.auth,"internal-error"),e}async onExecution(){hs(1===this.filter.length,"Popup operations only handle one event");const e=Ca();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(as(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(as(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,oo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(as(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,ao.get())};e()}}oo.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
const uo=new Map;class co extends so{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=uo.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=ho(t),r=lo(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}uo.set(this.auth._key(),e)}return this.bypassAuthState||uo.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function lo(e){return fs(e._redirectPersistence)}function ho(e){return Bs("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(e,t,n=!1){const r=na(e),i=eo(r,t),s=new co(r,i,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}class po{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vo(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!vo(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(as(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(mo(e))}saveEventToCache(e){this.cachedEventUids.add(mo(e)),this.lastProcessedEventTime=Date.now()}}function mo(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function vo({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
const yo=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,go=/^https?/;async function wo(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Is(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(bo(e))return}catch(e){}ss(e,"unauthorized-domain")}function bo(e){const t=ps(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!go.test(n))return!1;if(yo.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const _o=new ys(3e4,6e4);function ko(){const e=Fa().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Io=null;function So(e){return Io=Io||function(e){return new Promise(((t,n)=>{var r,i,s;function a(){ko(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ko(),n(as(e,"network-request-failed"))},timeout:_o.get()})}if(null===(i=null===(r=Fa().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Fa().gapi)||void 0===s?void 0:s.load)){const t=Ja("iframefcb");return Fa()[t]=()=>{gapi.load?a():n(as(e,"network-request-failed"))},Ya(`https://apis.google.com/js/api.js?onload=${t}`)}a()}})).catch((e=>{throw Io=null,e}))}(e),Io}
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
 */const To=new ys(5e3,15e3),Eo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ao(e){const t=e.config;cs(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?gs(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:Kn},i=xo.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${vn(r).slice(1)}`}
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
const Mo={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ro{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Oo(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const u=Object.assign(Object.assign({},Mo),{width:r.toString(),height:i.toString(),top:s,left:a}),c=an().toLowerCase();n&&(o=zs(c)?"_blank":n),$s(c)&&(t=t||"http://localhost",u.scrollbars="yes");const l=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=an()){var t;return Xs(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",o),new Ro(null);const h=window.open(t||"",o,l);cs(h,e,"popup-blocked");try{h.focus()}catch(e){}return new Ro(h)}const Po="emulator/auth/handler";function Lo(e,t,n,r,i,s){cs(e.config.authDomain,e,"auth-domain-config-required"),cs(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Kn,eventId:i};if(t instanceof fa){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(s||{}))a[e]=t}if(t instanceof pa){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const e of Object.keys(o))void 0===o[e]&&delete o[e];return`${function({config:e}){return e.emulator?gs(e,Po):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${vn(o).slice(1)}`}const No="webStorageSupport";const Co=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=La,this._completeRedirectFn=fo}async _openPopup(e,t,n,r){var i;hs(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Oo(e,Lo(e,t,n,ps(),r),Ca())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=Lo(e,t,n,ps(),r),Fa().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(hs(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await async function(e){const t=await So(e),n=Fa().gapi;return cs(n,e,"internal-error"),t.open({where:document.body,url:Ao(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Eo,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=as(e,"network-request-failed"),s=Fa().setTimeout((()=>{r(i)}),To.get());function a(){Fa().clearTimeout(s),n(t)}t.ping(a).then(a,(()=>{r(i)}))}))))}(e),n=new po(e);return t.register("authEvent",(t=>{cs(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(No,{type:No},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),ss(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=wo(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qs()||Hs()||Xs()}};var Do,Fo="@firebase/auth",Uo="0.19.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Vo{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){cs(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Do="Browser",$n(new In("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{cs(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),cs(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:Do,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ea(Do)},s=new ta(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fs);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(s,t),s})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),$n(new In("auth-internal",(e=>{const t=na(e.getProvider("auth").getImmediate());return new Vo(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Jn(Fo,Uo,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Do)),Jn(Fo,Uo,"esm2017");var jo=
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
function(e=Yn()){const t=Hn(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Hn(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(pn(n.getOptions(),null!=t?t:{}))return e;ss(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Co,persistence:[Ka,Oa,La]})}(Xi);function Bo(e){return t=e,kn(jo).onAuthStateChanged(t,n,r);var t,n,r}function Wo(){return jo.currentUser}function qo(){var e,t;return null!==(t=null===(e=Wo())||void 0===e?void 0:e.uid)&&void 0!==t?t:""}function $o(){var e,t;return null!==(t=null===(e=Wo())||void 0===e?void 0:e.displayName)&&void 0!==t?t:""}function Ho(){return(Ho=o(t(J).mark((function e(n){var r;return t(J).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=Wo())){e.next=4;break}return e.next=4,xa(r,{displayName:n});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function zo(e){return Ho.apply(this,arguments)}Bo((function(e){return!e&&async function(e){var t;const n=na(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new ba({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await wa(n,{returnSecureToken:!0}),i=await ba._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}(jo)}));
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
class Go{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Go.UNAUTHENTICATED=new Go(null),Go.GOOGLE_CREDENTIALS=new Go("google-credentials-uid"),Go.FIRST_PARTY=new Go("first-party-uid"),Go.MOCK_USER=new Go("mock-user");
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
let Ko="9.6.0";
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
 */const Yo=new Nn("@firebase/firestore");function Jo(e,...t){if(Yo.logLevel<=An.DEBUG){const n=t.map(Qo);Yo.debug(`Firestore (${Ko}): ${e}`,...n)}}function Xo(e,...t){if(Yo.logLevel<=An.ERROR){const n=t.map(Qo);Yo.error(`Firestore (${Ko}): ${e}`,...n)}}function Zo(e,...t){if(Yo.logLevel<=An.WARN){const n=t.map(Qo);Yo.warn(`Firestore (${Ko}): ${e}`,...n)}}function Qo(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function eu(e="Unexpected state"){const t=`FIRESTORE (${Ko}) INTERNAL ASSERTION FAILED: `+e;throw Xo(t),new Error(t)}function tu(e,t){e||eu()}function nu(e,t){return e}
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
 */const ru="cancelled",iu="unknown",su="invalid-argument",au="deadline-exceeded",ou="not-found",uu="permission-denied",cu="unauthenticated",lu="resource-exhausted",hu="failed-precondition",du="aborted",fu="out-of-range",pu="unimplemented",mu="internal",vu="unavailable";class yu extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
class gu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wu{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Go.UNAUTHENTICATED)))}shutdown(){}}class bu{constructor(e){this.auth=null,e.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(tu("string"==typeof e.accessToken),new gu(e.accessToken,new Go(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class _u{constructor(e,t,n){this.type="FirstParty",this.user=Go.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ku{constructor(e,t,n){this.t=e,this.i=t,this.o=n}getToken(){return Promise.resolve(new _u(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable((()=>t(Go.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Iu{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Su{constructor(e){this.u=e,this.appCheck=null,e.onInit((e=>{this.appCheck=e}))}getToken(){return this.appCheck?this.appCheck.getToken().then((e=>e?(tu("string"==typeof e.token),new Iu(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}
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
 */class Tu{constructor(e,t,n,r,i,s,a,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.useFetchStreams=o}}class Eu{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Eu&&e.projectId===this.projectId&&e.database===this.database}}
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
 */class xu{constructor(e,t,n){void 0===t?t=0:t>e.length&&eu(),void 0===n?n=e.length-t:n>e.length-t&&eu(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===xu.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xu?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Au extends xu{construct(e,t,n){return new Au(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new yu(su,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Au(t)}static emptyPath(){return new Au([])}}const Mu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ru extends xu{construct(e,t,n){return new Ru(e,t,n)}static isValidIdentifier(e){return Mu.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ru.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ru(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new yu(su,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new yu(su,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new yu(su,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new yu(su,"Unterminated ` in path: "+e);return new Ru(t)}static emptyPath(){return new Ru([])}}
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
 */class Ou{constructor(e){this.path=e}static fromPath(e){return new Ou(Au.fromString(e))}static fromName(e){return new Ou(Au.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===Au.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Au.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ou(new Au(e.slice()))}}
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
 */function Pu(e,t,n){if(!n)throw new yu(su,`Function ${e}() cannot be called with an empty ${t}.`)}function Lu(e){if(!Ou.isDocumentKey(e))throw new yu(su,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Nu(e){if(Ou.isDocumentKey(e))throw new yu(su,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Cu(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":eu()}function Du(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new yu(su,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Cu(e);throw new yu(su,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Fu(e,t){if(t<=0)throw new yu(su,`Function ${e}() requires a positive number, but it was: ${t}.`)}
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
 */function Uu(e){return null==e}function Vu(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */var Bu,Wu;function qu(e){if(void 0===e)return Xo("RPC_ERROR","HTTP error has no status"),iu;switch(e){case 200:return"ok";case 400:return hu;case 401:return cu;case 403:return uu;case 404:return ou;case 409:return du;case 416:return fu;case 429:return lu;case 499:return ru;case 500:return iu;case 501:return pu;case 503:return vu;case 504:return au;default:return e>=200&&e<300?"ok":e>=400&&e<500?hu:e>=500&&e<600?mu:iu}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Wu=Bu||(Bu={}))[Wu.OK=0]="OK",Wu[Wu.CANCELLED=1]="CANCELLED",Wu[Wu.UNKNOWN=2]="UNKNOWN",Wu[Wu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Wu[Wu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Wu[Wu.NOT_FOUND=5]="NOT_FOUND",Wu[Wu.ALREADY_EXISTS=6]="ALREADY_EXISTS",Wu[Wu.PERMISSION_DENIED=7]="PERMISSION_DENIED",Wu[Wu.UNAUTHENTICATED=16]="UNAUTHENTICATED",Wu[Wu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Wu[Wu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Wu[Wu.ABORTED=10]="ABORTED",Wu[Wu.OUT_OF_RANGE=11]="OUT_OF_RANGE",Wu[Wu.UNIMPLEMENTED=12]="UNIMPLEMENTED",Wu[Wu.INTERNAL=13]="INTERNAL",Wu[Wu.UNAVAILABLE=14]="UNAVAILABLE",Wu[Wu.DATA_LOSS=15]="DATA_LOSS";class $u extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.h=t+"://"+e.host,this.l="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}m(e,t,n,r,i){const s=this.p(e,t);Jo("RestConnection","Sending: ",s,n);const a={};return this.g(a,r,i),this.v(e,s,a,n).then((e=>(Jo("RestConnection","Received: ",e),e)),(t=>{throw Zo("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}T(e,t,n,r,i){return this.m(e,t,n,r,i)}g(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ko,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}p(e,t){const n=ju[e];return`${this.h}/v1/${t}:${n}`}}{constructor(e,t){super(e),this.I=t}A(e,t){throw new Error("Not supported by FetchConnection")}async v(e,t,n,r){const i=JSON.stringify(r);let s;try{s=await this.I(t,{method:"POST",headers:n,body:i})}catch(e){throw new yu(qu(e.status),"Request failed with error: "+e.statusText)}if(!s.ok)throw new yu(qu(s.status),"Request failed with error: "+s.statusText);return s.json()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Hu(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */class zu{static P(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=Hu(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function Gu(e,t){return e<t?-1:e>t?1:0}function Ku(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
 */class Yu{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new yu(su,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new yu(su,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new yu(su,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new yu(su,"Timestamp seconds out of range: "+e)}static now(){return Yu.fromMillis(Date.now())}static fromDate(e){return Yu.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Yu(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Gu(this.nanoseconds,e.nanoseconds):Gu(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class Ju{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ju(e)}static min(){return new Ju(new Yu(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function Xu(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Zu(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(e){this.fields=e,e.sort(Ru.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ku(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ec{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new ec(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ec(t)}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Gu(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ec.EMPTY_BYTE_STRING=new ec("");const tc=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nc(e){if(tu(!!e),"string"==typeof e){let t=0;const n=tc.exec(e);if(tu(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:rc(e.seconds),nanos:rc(e.nanos)}}function rc(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ic(e){return"string"==typeof e?ec.fromBase64String(e):ec.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function ac(e){const t=e.mapValue.fields.__previous_value__;return sc(t)?ac(t):t}function oc(e){const t=nc(e.mapValue.fields.__local_write_time__.timestampValue);return new Yu(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?sc(e)?4:10:eu()}function cc(e,t){const n=uc(e);if(n!==uc(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return oc(e).isEqual(oc(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=nc(e.timestampValue),r=nc(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,ic(e.bytesValue).isEqual(ic(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return rc(e.geoPointValue.latitude)===rc(t.geoPointValue.latitude)&&rc(e.geoPointValue.longitude)===rc(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return rc(e.integerValue)===rc(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=rc(e.doubleValue),r=rc(t.doubleValue);return n===r?Vu(n)===Vu(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Ku(e.arrayValue.values||[],t.arrayValue.values||[],cc);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Xu(n)!==Xu(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!cc(n[e],r[e])))return!1;return!0}(e,t);default:return eu()}var r}function lc(e,t){return void 0!==(e.values||[]).find((e=>cc(e,t)))}function hc(e,t){const n=uc(e),r=uc(t);if(n!==r)return Gu(n,r);switch(n){case 0:return 0;case 1:return Gu(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=rc(e.integerValue||e.doubleValue),r=rc(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return dc(e.timestampValue,t.timestampValue);case 4:return dc(oc(e),oc(t));case 5:return Gu(e.stringValue,t.stringValue);case 6:return function(e,t){const n=ic(e),r=ic(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=Gu(n[e],r[e]);if(0!==t)return t}return Gu(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Gu(rc(e.latitude),rc(t.latitude));return 0!==n?n:Gu(rc(e.longitude),rc(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=hc(n[e],r[e]);if(t)return t}return Gu(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){const t=Gu(r[e],s[e]);if(0!==t)return t;const a=hc(n[r[e]],i[s[e]]);if(0!==a)return a}return Gu(r.length,s.length)}(e.mapValue,t.mapValue);default:throw eu()}}function dc(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Gu(e,t);const n=nc(e),r=nc(t),i=Gu(n.seconds,r.seconds);return 0!==i?i:Gu(n.nanos,r.nanos)}function fc(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function pc(e){return!!e&&"arrayValue"in e}function mc(e){return!!e&&"nullValue"in e}function vc(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function yc(e){return!!e&&"mapValue"in e}function gc(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Zu(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=gc(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=gc(e.arrayValue.values[n]);return t}return Object.assign({},e)}
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
 */class wc{constructor(e){this.value=e}static empty(){return new wc({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!yc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=gc(t)}setAll(e){let t=Ru.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=gc(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());yc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return cc(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];yc(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Zu(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new wc(gc(this.value))}}
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
 */class bc{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new bc(e,0,Ju.min(),wc.empty(),0)}static newFoundDocument(e,t,n){return new bc(e,1,t,n,0)}static newNoDocument(e,t){return new bc(e,2,t,wc.empty(),0)}static newUnknownDocument(e,t){return new bc(e,3,t,wc.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wc.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wc.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof bc&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new bc(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class _c{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.R=null}}function kc(e,t=null,n=[],r=[],i=null,s=null,a=null){return new _c(e,t,n,r,i,s,a)}class Ic extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new Sc(e,t,n):"array-contains"===t?new Ac(e,n):"in"===t?new Mc(e,n):"not-in"===t?new Rc(e,n):"array-contains-any"===t?new Oc(e,n):new Ic(e,t,n)}static V(e,t,n){return"in"===t?new Tc(e,n):new Ec(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.D(hc(t,this.value)):null!==t&&uc(this.value)===uc(t)&&this.D(hc(t,this.value))}D(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return eu()}}N(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Sc extends Ic{constructor(e,t,n){super(e,t,n),this.key=Ou.fromName(n.referenceValue)}matches(e){const t=Ou.comparator(e.key,this.key);return this.D(t)}}class Tc extends Ic{constructor(e,t){super(e,"in",t),this.keys=xc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ec extends Ic{constructor(e,t){super(e,"not-in",t),this.keys=xc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function xc(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Ou.fromName(e.referenceValue)))}class Ac extends Ic{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return pc(t)&&lc(t.arrayValue,this.value)}}class Mc extends Ic{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&lc(this.value.arrayValue,t)}}class Rc extends Ic{constructor(e,t){super(e,"not-in",t)}matches(e){if(lc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!lc(this.value.arrayValue,t)}}class Oc extends Ic{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!pc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>lc(this.value.arrayValue,e)))}}class Pc{constructor(e,t){this.position=e,this.before=t}}class Lc{constructor(e,t="asc"){this.field=e,this.dir=t}}
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
class Nc{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.$=null,this.F=null,this.startAt,this.endAt}}function Cc(e){return!Uu(e.limit)&&"L"===e.limitType}function Dc(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Fc(e){for(const t of e.filters)if(t.N())return t.field;return null}function Uc(e){return null!==e.collectionGroup}function Vc(e){const t=nu(e);if(null===t.$){t.$=[];const e=Fc(t),n=Dc(t);if(null!==e&&null===n)e.isKeyField()||t.$.push(new Lc(e)),t.$.push(new Lc(Ru.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.$.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.$.push(new Lc(Ru.keyField(),e))}}}return t.$}function jc(e){const t=nu(e);if(!t.F)if("F"===t.limitType)t.F=kc(t.path,t.collectionGroup,Vc(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of Vc(t)){const t="desc"===n.dir?"asc":"desc";e.push(new Lc(n.field,t))}const n=t.endAt?new Pc(t.endAt.position,!t.endAt.before):null,r=t.startAt?new Pc(t.startAt.position,!t.startAt.before):null;t.F=kc(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.F}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
function Bc(e,t){return"number"==typeof(n=t)&&Number.isInteger(n)&&!Vu(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER?function(e){return{integerValue:""+e}}(t):function(e,t){if(e.S){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vu(t)?"-0":t}}(e,t);var n}
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
 */class Wc{constructor(){this._=void 0}}class qc extends Wc{}class $c extends Wc{constructor(e){super(),this.elements=e}}class Hc extends Wc{constructor(e){super(),this.elements=e}}class zc extends Wc{constructor(e,t){super(),this.q=e,this.O=t}}
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
 */class Gc{constructor(e,t){this.field=e,this.transform=t}}class Kc{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Kc}static exists(e){return new Kc(void 0,e)}static updateTime(e){return new Kc(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Yc{}class Jc extends Yc{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Xc extends Yc{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}class Zc extends Yc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Qc extends Yc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
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
 */const el={asc:"ASCENDING",desc:"DESCENDING"},tl={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class nl{constructor(e,t){this.databaseId=e,this.S=t}}function rl(e,t){return e.S?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function il(e,t){return e.S?t.toBase64():t.toUint8Array()}function sl(e,t){return rl(e,t.toTimestamp())}function al(e){return tu(!!e),Ju.fromTimestamp(function(e){const t=nc(e);return new Yu(t.seconds,t.nanos)}(e))}function ol(e,t){return(n=e,new Au(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function ul(e,t){return ol(e.databaseId,t.path)}function cl(e,t){const n=function(e){const t=Au.fromString(e);return tu(gl(t)),t}(t);if(n.get(1)!==e.databaseId.projectId)throw new yu(su,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new yu(su,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);var r;return new Ou((tu((r=n).length>4&&"documents"===r.get(4)),r.popFirst(5)))}function ll(e,t){return ol(e.databaseId,t)}function hl(e){return new Au(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function dl(e,t,n){return{name:ul(e,t),fields:n.value.mapValue.fields}}function fl(e){return{before:e.before,values:e.position}}function pl(e){return el[e]}function ml(e){return tl[e]}function vl(e){return{fieldPath:e.canonicalString()}}function yl(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function gl(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(e){return new nl(e,!0)}
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
class bl extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.K=n,this.q=r,this.J=!1}X(){if(this.J)throw new yu(hu,"The client has already been terminated.")}m(e,t,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.K.m(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===cu&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new yu(iu,e.toString())}))}T(e,t,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.K.T(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===cu&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new yu(iu,e.toString())}))}terminate(){this.J=!0}}async function _l(e,t){const n=nu(e),r=hl(n.q)+"/documents",i={writes:t.map((e=>function(e,t){let n;if(t instanceof Jc)n={update:dl(e,t.key,t.value)};else if(t instanceof Zc)n={delete:ul(e,t.key)};else if(t instanceof Xc)n={update:dl(e,t.key,t.data),updateMask:yl(t.fieldMask)};else{if(!(t instanceof Qc))return eu();n={verify:ul(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof qc)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof $c)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Hc)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof zc)return{fieldPath:t.field.canonicalString(),increment:n.O};throw eu()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:sl(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:eu())),n;var r,i}(n.q,e)))};await n.m("Commit",r,i)}async function kl(e,t){const n=nu(e),r=hl(n.q)+"/documents",i={documents:t.map((e=>ul(n.q,e)))},s=await n.T("BatchGetDocuments",r,i),a=new Map;s.forEach((e=>{const t=(r=n.q,"found"in(i=e)?function(e,t){tu(!!t.found),t.found.name,t.found.updateTime;const n=cl(e,t.found.name),r=al(t.found.updateTime),i=new wc({mapValue:{fields:t.found.fields}});return bc.newFoundDocument(n,r,i)}(r,i):"missing"in i?function(e,t){tu(!!t.missing),tu(!!t.readTime);const n=cl(e,t.missing),r=al(t.readTime);return bc.newNoDocument(n,r)}(r,i):eu());var r,i;a.set(t.key.toString(),t)}));const o=[];return t.forEach((e=>{const t=a.get(e.toString());tu(!!t),o.push(t)})),o}async function Il(e,t){const n=nu(e),r=function(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=ll(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ll(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(vc(e.value))return{unaryFilter:{field:vl(e.field),op:"IS_NAN"}};if(mc(e.value))return{unaryFilter:{field:vl(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(vc(e.value))return{unaryFilter:{field:vl(e.field),op:"IS_NOT_NAN"}};if(mc(e.value))return{unaryFilter:{field:vl(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vl(e.field),op:ml(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>{return{field:vl((t=e).field),direction:pl(t.dir)};var t}))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const a=(o=e,u=t.limit,o.S||Uu(u)?u:{value:u});var o,u;return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=fl(t.startAt)),t.endAt&&(n.structuredQuery.endAt=fl(t.endAt)),n}(n.q,jc(t));return(await n.T("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter((e=>!!e.document)).map((e=>function(e,t,n){const r=cl(e,t.name),i=al(t.updateTime),s=new wc({mapValue:{fields:t.fields}}),a=bc.newFoundDocument(r,i,s);return a}(n.q,e.document)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sl=new Map;function Tl(e){if(e._terminated)throw new yu(hu,"The client has already been terminated.");if(!Sl.has(e)){Jo("ComponentProvider","Initializing Datastore");const a=(n=e._databaseId,r=e.app.options.appId||"",i=e._persistenceKey,s=e._freezeSettings(),t=new Tu(n,r,i,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,s.useFetchStreams),new $u(t,fetch.bind(null))),o=wl(e._databaseId),u=function(e,t,n,r){return new bl(e,t,n,r)}(e._authCredentials,e._appCheckCredentials,a,o);Sl.set(e,u)}var t,n,r,i,s;
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
return Sl.get(e)}class El{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new yu(su,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new yu(su,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new yu(su,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,e.experimentalForceLongPolling,0,e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new El({}),this._settingsFrozen=!1,e instanceof Eu?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new yu(su,'"projectId" not provided in firebase.initializeApp.');return new Eu(e.options.projectId)}(e))}get app(){if(!this._app)throw new yu(hu,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new yu(hu,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new El(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new wu;switch(e.type){case"gapi":const t=e.client;return tu(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new ku(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new yu(su,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Sl.get(e);t&&(Jo("ComponentProvider","Removing Datastore"),Sl.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Al{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Al(this.firestore,e,this._key)}}class Ml{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Ml(this.firestore,e,this._query)}}class Rl extends Ml{constructor(e,t,n){super(e,t,new Nc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Al(this.firestore,null,new Ou(e))}withConverter(e){return new Rl(this.firestore,e,this._path)}}function Ol(e,t,...n){if(e=kn(e),Pu("collection","path",t),e instanceof xl){const r=Au.fromString(t,...n);return Nu(r),new Rl(e,null,r)}{if(!(e instanceof Al||e instanceof Rl))throw new yu(su,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Au.fromString(t,...n));return Nu(r),new Rl(e.firestore,null,r)}}function Pl(e,t,...n){if(e=kn(e),1===arguments.length&&(t=zu.P()),Pu("doc","path",t),e instanceof xl){const r=Au.fromString(t,...n);return Lu(r),new Al(e,null,new Ou(r))}{if(!(e instanceof Al||e instanceof Rl))throw new yu(su,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Au.fromString(t,...n));return Lu(r),new Al(e.firestore,e instanceof Rl?e.converter:null,new Ou(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Ll{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new yu(su,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ru(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
class Nl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nl(ec.fromBase64String(e))}catch(e){throw new yu(su,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Nl(ec.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e){this._methodName=e}}
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
 */class Dl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new yu(su,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new yu(su,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Gu(this._lat,e._lat)||Gu(this._long,e._long)}}
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
 */const Fl=/^__.*__$/;class Ul{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Xc(e,this.data,this.fieldMask,t,this.fieldTransforms):new Jc(e,this.data,t,this.fieldTransforms)}}class Vl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Xc(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function jl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw eu()}}class Bl{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.q=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Z(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}nt(e){return new Bl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.q,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}et(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nt({path:n,rt:!1});return r.st(e),r}it(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nt({path:n,rt:!1});return r.Z(),r}ot(e){return this.nt({path:void 0,rt:!0})}ut(e){return rh(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.at)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Z(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(0===e.length)throw this.ut("Document fields must not be empty");if(jl(this.tt)&&Fl.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class Wl{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.q=n||wl(e)}ht(e,t,n,r=!1){return new Bl({tt:e,methodName:t,at:n,path:Ru.emptyPath(),rt:!1,ct:r},this.databaseId,this.q,this.ignoreUndefinedProperties)}}function ql(e){const t=e._freezeSettings(),n=wl(e._databaseId);return new Wl(e._databaseId,!!t.ignoreUndefinedProperties,n)}function $l(e,t,n,r,i,s={}){const a=e.ht(s.merge||s.mergeFields?2:0,t,n,i);Ql("Data must be an object, but it was:",a,r);const o=Xl(r,a);let u,c;if(s.merge)u=new Qu(a.fieldMask),c=a.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=eh(t,r,n);if(!a.contains(i))throw new yu(su,`Field '${i}' is specified in your field mask but missing from your input data.`);ih(e,i)||e.push(i)}u=new Qu(e),c=a.fieldTransforms.filter((e=>u.covers(e.field)))}else u=null,c=a.fieldTransforms;return new Ul(new wc(o),u,c)}class Hl extends Cl{_toFieldTransform(e){if(2!==e.tt)throw 1===e.tt?e.ut(`${this._methodName}() can only appear at the top level of your update data`):e.ut(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hl}}class zl extends Cl{_toFieldTransform(e){return new Gc(e.path,new qc)}isEqual(e){return e instanceof zl}}function Gl(e,t,n,r){const i=e.ht(1,t,n);Ql("Data must be an object, but it was:",i,r);const s=[],a=wc.empty();Zu(r,((e,r)=>{const o=nh(t,e,n);r=kn(r);const u=i.it(o);if(r instanceof Hl)s.push(o);else{const e=Jl(r,u);null!=e&&(s.push(o),a.set(o,e))}}));const o=new Qu(s);return new Vl(a,o,i.fieldTransforms)}function Kl(e,t,n,r,i,s){const a=e.ht(1,t,n),o=[eh(t,r,n)],u=[i];if(s.length%2!=0)throw new yu(su,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<s.length;e+=2)o.push(eh(t,s[e])),u.push(s[e+1]);const c=[],l=wc.empty();for(let e=o.length-1;e>=0;--e)if(!ih(c,o[e])){const t=o[e];let n=u[e];n=kn(n);const r=a.it(t);if(n instanceof Hl)c.push(t);else{const e=Jl(n,r);null!=e&&(c.push(t),l.set(t,e))}}const h=new Qu(c);return new Vl(l,h,a.fieldTransforms)}function Yl(e,t,n,r=!1){return Jl(n,e.ht(r?4:3,t))}function Jl(e,t){if(Zl(e=kn(e)))return Ql("Unsupported field value:",t,e),Xl(e,t);if(e instanceof Cl)return function(e,t){if(!jl(t.tt))throw t.ut(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ut(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.rt&&4!==t.tt)throw t.ut("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Jl(i,t.ot(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=kn(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Bc(t.q,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Yu.fromDate(e);return{timestampValue:rl(t.q,n)}}if(e instanceof Yu){const n=new Yu(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:rl(t.q,n)}}if(e instanceof Dl)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Nl)return{bytesValue:il(t.q,e._byteString)};if(e instanceof Al){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ut(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ol(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ut(`Unsupported field value: ${Cu(e)}`)}(e,t)}function Xl(e,t){const n={};return function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Zu(e,((e,r)=>{const i=Jl(r,t.et(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Zl(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Yu||e instanceof Dl||e instanceof Nl||e instanceof Al||e instanceof Cl)}function Ql(e,t,n){if(!Zl(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=Cu(n);throw"an object"===r?t.ut(e+" a custom object"):t.ut(e+" "+r)}var r}function eh(e,t,n){if((t=kn(t))instanceof Ll)return t._internalPath;if("string"==typeof t)return nh(e,t);throw rh("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const th=new RegExp("[~\\*/\\[\\]]");function nh(e,t,n){if(t.search(th)>=0)throw rh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Ll(...t.split("."))._internalPath}catch(r){throw rh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function rh(e,t,n,r,i){const s=r&&!r.isEmpty(),a=void 0!==i;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new yu(su,o+e+u)}function ih(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Al(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new ah(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(uh("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ah extends sh{data(){return super.data()}}class oh{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(e,t){this._docs.forEach(e,t)}}function uh(e,t){return"string"==typeof t?nh(e,t):t instanceof Ll?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{}function lh(e,...t){for(const n of t)e=n._apply(e);return e}class hh extends ch{constructor(e,t,n){super(),this.dt=e,this.wt=t,this.yt=n,this.type="where"}_apply(e){const t=ql(e.firestore),n=function(e,t,n,r,i,s,a){let o;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new yu(su,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){gh(a,s);const t=[];for(const n of a)t.push(yh(r,e,n));o={arrayValue:{values:t}}}else o=yh(r,e,a)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||gh(a,s),o=Yl(n,"where",a,"in"===s||"not-in"===s);const u=Ic.create(i,s,o);return function(e,t){if(t.N()){const n=Fc(e);if(null!==n&&!n.isEqual(t.field))throw new yu(su,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=Dc(e);null!==r&&wh(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new yu(su,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new yu(su,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,u),u}(e._query,0,t,e.firestore._databaseId,this.dt,this.wt,this.yt);return new Ml(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new Nc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function dh(e,t,n){const r=t,i=uh("where",e);return new hh(i,r,n)}class fh extends ch{constructor(e,t){super(),this.dt=e,this._t=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new yu(su,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new yu(su,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Lc(t,n);return function(e,t){if(null===Dc(e)){const n=Fc(e);null!==n&&wh(e,n,t.field)}}(e,r),r}(e._query,this.dt,this._t);return new Ml(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Nc(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function ph(e,t="asc"){const n=t,r=uh("orderBy",e);return new fh(r,n)}class mh extends ch{constructor(e,t,n){super(),this.type=e,this.gt=t,this.bt=n}_apply(e){return new Ml(e.firestore,e.converter,(t=e._query,n=this.gt,r=this.bt,new Nc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),n,r,t.startAt,t.endAt)));var t,n,r}}function vh(e){return Fu("limit",e),new mh("limit",e,"F")}function yh(e,t,n){if("string"==typeof(n=kn(n))){if(""===n)throw new yu(su,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!Uc(t)&&-1!==n.indexOf("/"))throw new yu(su,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Au.fromString(n));if(!Ou.isDocumentKey(r))throw new yu(su,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fc(e,new Ou(r))}if(n instanceof Al)return fc(e,n._key);throw new yu(su,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Cu(n)}.`)}function gh(e,t){if(!Array.isArray(e)||0===e.length)throw new yu(su,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new yu(su,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function wh(e,t,n){if(!n.isEqual(t))throw new yu(su,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function bh(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class _h extends class{convertValue(e,t="none"){switch(uc(e)){case 0:return null;case 1:return e.booleanValue;case 2:return rc(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ic(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw eu()}}convertObject(e,t){const n={};return Zu(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Dl(rc(e.latitude),rc(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=ac(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(oc(e));default:return null}}convertTimestamp(e){const t=nc(e);return new Yu(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Au.fromString(e);tu(gl(n));const r=new Eu(n.get(1),n.get(3)),i=new Ou(n.popFirst(5));return r.isEqual(t)||Xo(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nl(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Al(this.firestore,null,t)}}function kh(e){const t=Tl((e=Du(e,Al)).firestore),n=new _h(e.firestore);return kl(t,[e._key]).then((t=>{tu(1===t.length);const r=t[0];return new sh(e.firestore,n,e._key,r.isFoundDocument()?r:null,e.converter)}))}function Ih(e){!function(e){if(Cc(e)&&0===e.explicitOrderBy.length)throw new yu(pu,"limitToLast() queries require specifying at least one orderBy() clause")}((e=Du(e,Ml))._query);const t=Tl(e.firestore),n=new _h(e.firestore);return Il(t,e._query).then((t=>{const r=t.map((t=>new ah(e.firestore,n,t.key,t,e.converter)));return Cc(e._query)&&r.reverse(),new oh(e,r)}))}function Sh(e,t,n,...r){const i=ql((e=Du(e,Al)).firestore);let s;return s="string"==typeof(t=kn(t))||t instanceof Ll?Kl(i,"updateDoc",e._key,t,n,r):Gl(i,"updateDoc",e._key,t),_l(Tl(e.firestore),[s.toMutation(e._key,Kc.exists(!0))])}function Th(e,t){const n=Pl(e=Du(e,Rl)),r=bh(e.converter,t),i=$l(ql(e.firestore),"addDoc",n._key,r,null!==n.converter,{});return _l(Tl(e.firestore),[i.toMutation(n._key,Kc.exists(!1))]).then((()=>n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(){return new zl("serverTimestamp")}Ko="9.6.0_lite",$n(new In("firestore/lite",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=new xl(n,new bu(e.getProvider("auth-internal")),new Su(e.getProvider("app-check-internal")));return t&&r._setSettings(t),r}),"PUBLIC")),Jn("firestore-lite","3.4.0",""),Jn("firestore-lite","3.4.0","esm2017");var xh=function(e=Yn()){return Hn(e,"firestore/lite").getImmediate()}(Xi),Ah=Ol(xh,"replays"),Mh=Ol(xh,"entries");function Rh(){return(Rh=o(t(J).mark((function e(n,r){return t(J).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Sh(Pl(Mh,n.id),{name:r});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Oh(e,t){return Rh.apply(this,arguments)}function Ph(){return(Ph=o(t(J).mark((function e(n,r){var i;return t(J).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ih(lh(Mh,dh("version","==",n),dh("mode","==",r),ph("score","desc"),vh(100)));case 2:return i=e.sent,e.abrupt("return",i.docs.map((function(e){var t=e.data();return{id:e.id,uid:t.uid,name:t.name,replayId:t.replayId,score:t.score,mode:t.mode}})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Lh(e,t){return Ph.apply(this,arguments)}function Nh(){return(Nh=o(t(J).mark((function e(n,r){var i,s,a;return t(J).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ih(lh(Mh,dh("version","==",n),dh("mode","==",r),dh("uid","==",qo()),ph("score","desc"),vh(1)));case 2:if(i=e.sent,!(s=i.docs[0])){e.next=7;break}return a=s.data(),e.abrupt("return",{id:s.id,uid:a.uid,name:a.name,replayId:a.replayId,score:a.score,mode:a.mode});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ch(e,t){return Nh.apply(this,arguments)}function Dh(){return(Dh=o(t(J).mark((function e(n){var r,i;return t(J).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,kh(Pl(Ah,n));case 2:if(r=e.sent,!(i=r.data())){e.next=6;break}return e.abrupt("return",{id:n,version:i.version,score:i.score,log:i.log,seed:i.seed,mode:i.mode});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Fh(){return(Fh=o(t(J).mark((function e(n){var r;return t(J).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Th(Ah,{uid:qo(),registeredAt:Eh(),log:n.log,version:n.version,score:n.score,mode:n.mode,seed:n.seed});case 2:return r=e.sent,e.abrupt("return",w({id:r.id},n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Uh(e){return Fh.apply(this,arguments)}function Vh(){return(Vh=o(t(J).mark((function e(n){var r;return t(J).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Th(Mh,{uid:qo(),name:$o(),registeredAt:Eh(),replayId:n.id,version:n.version,score:n.score,mode:n.mode});case 2:return r=e.sent,e.abrupt("return",{id:r.id,uid:qo(),name:$o(),replayId:n.id,score:n.score,mode:n.mode});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function jh(e){return Vh.apply(this,arguments)}function Bh(){return(Bh=o(t(J).mark((function e(n,r){return t(J).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Sh(Pl(Mh,n.id),{registeredAt:Eh(),replayId:r.id,score:r.score});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Wh(e,t){return Bh.apply(this,arguments)}var qh="no name",$h=["normal","ex"],Hh={normal:"NORMAL",ex:"EX"},zh=document.querySelector(".leaderboard .entry-list"),Gh=document.querySelector(".leaderboard .about-button"),Kh=document.querySelector(".leaderboard .user-button"),Yh=document.querySelector(".about"),Jh=document.querySelector(".about .modal-close"),Xh=document.querySelector(".user"),Zh=document.querySelector(".user .modal"),Qh=document.querySelector(".user .form"),ed=document.querySelector(".user .form-textfield"),td=document.querySelector(".user .form-save"),nd=document.querySelector(".user .record-list"),rd=document.querySelector(".user .modal-close");if(!(zh instanceof HTMLElement&&Gh instanceof HTMLElement&&Kh instanceof HTMLElement&&Yh instanceof HTMLElement&&Jh instanceof HTMLElement&&Xh instanceof HTMLElement&&Zh instanceof HTMLElement&&Qh instanceof HTMLFormElement&&ed instanceof HTMLInputElement&&td instanceof HTMLButtonElement&&nd instanceof HTMLElement&&rd instanceof HTMLElement))throw Error("invalid element");var id={normal:{},ex:{}};function sd(){return(sd=o(t(J).mark((function e(n){var r;return t(J).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=id[n].meEntry){e.next=5;break}return e.next=4,Ch(0,n);case 4:r=id[n].meEntry=e.sent;case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ad(e){return sd.apply(this,arguments)}function od(){return(od=o(t(J).mark((function e(n){var r;return t(J).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=id[n].entries){e.next=5;break}return e.next=4,Lh(0,n);case 4:r=id[n].entries=e.sent;case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ud(e){return od.apply(this,arguments)}function cd(){return(cd=o(t(J).mark((function e(n){var r,i,s;return t(J).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Uh(n);case 2:return r=e.sent,e.next=5,ad(r.mode);case 5:if(i=e.sent,s=!1,i){e.next=14;break}return s=!0,e.next=11,jh(r);case 11:id[r.mode].meEntry=e.sent,e.next=19;break;case 14:if(!(i.score<n.score)){e.next=19;break}return s=!0,i.score=n.score,e.next=19,Wh(i,r);case 19:return s&&(delete id[r.mode].entries,r.mode===pd()&&hd(r.mode)),e.abrupt("return",{replayId:r.id,newRecord:s});case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ld(){return(ld=o(t(J).mark((function e(n){var r,i;return t(J).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ud(n);case 2:r=e.sent,i=r.map((function(e,t){return'\n      <div class="entry '.concat(qo()===e.uid?"me":"",'">\n        <div class="entry-order">').concat(t+1,'.</div>\n        <div class="entry-name">').concat(e.name||qh,'</div>\n        <div class="entry-score">￥').concat(Z(e.score),'</div>\n        <div class="entry-replay clickable" data-r="').concat(e.replayId,'"></div>\n      </div>')})),zh&&(zh.innerHTML=i.join(""));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function hd(e){return ld.apply(this,arguments)}var dd=null;function fd(){var e=new URL(location.origin+location.pathname),t=yd();return t&&e.searchParams.set("r",t),e.href}function pd(){return"ex"===new URL(location.href).searchParams.get("mode")?"ex":"normal"}var md="",vd="";function yd(){return md!==location.href&&(md=location.href,vd=new URL(md).searchParams.get("r")||""),vd}function gd(e){if(yd()!==e){var t=new URL(location.href);e?t.searchParams.set("r",e):t.searchParams.delete("r"),history.replaceState(history.state,"",t)}}addEventListener("click",(function(e){if(e.target instanceof HTMLElement){var t=e.target.closest("a");t&&Zi("link_click",{url:t.href})}})),Gh.addEventListener("click",(function(){Zi("about_open"),Yh.classList.add("opened")})),Jh.addEventListener("click",(function(){Yh.classList.remove("opened")})),document.addEventListener("click",(function(e){if(dd&&e.target instanceof HTMLElement){var t=e.target.closest(".entry-replay,.record-replay");t instanceof HTMLElement&&t.dataset.r&&(gd(t.dataset.r),dd(t.dataset.r),Yh.classList.remove("opened"),Xh.classList.remove("opened"),window.scrollTo({top:100,behavior:"smooth"}))}})),Kh.addEventListener("click",o(t(J).mark((function e(){var n,r,i;return t(J).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Zi("user_open"),ed.value=$o(),td.disabled=!0,Xh.classList.add("opened"),Zh.classList.add("loading"),e.prev=5,e.next=8,Promise.all($h.map((function(e){return ad(e)})));case 8:n=e.sent,r=n.some((function(e){return"ex"===(null==e?void 0:e.mode)})),i="",n.forEach((function(e,t){var n="<div>".concat(Hh[$h[t]],"</div>");e?i+="\n          ".concat(r?n:"","\n          <div>￥").concat(Z(e.score),"</div>\n          ").concat(r?"":"<div></div>",'\n          <div class="record-replay clickable" data-r="').concat(e.replayId,'"></div>'):"ex"!==$h[t]&&(i+="\n          ".concat(r?n:"","\n          <div>なし</div>\n          ").concat(r?"":"<div></div>","\n          <div></div>"))})),nd.innerHTML=i,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0);case 18:Zh.classList.remove("loading"),ed.focus();case 20:case"end":return e.stop()}}),e,null,[[5,15]])})))),rd.addEventListener("click",(function(){Xh.classList.remove("opened")})),Qh.addEventListener("submit",(function(e){e.preventDefault()})),ed.addEventListener("input",(function(){td.disabled=!1})),td.addEventListener("click",o(t(J).mark((function e(){var n,r,i;return t(J).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Zi("user_save"),td.disabled=!0,Zh.classList.add("loading"),e.prev=3,n=ed.value,r=$o(),e.next=8,zo(n);case 8:if(i=$o(),r===i){e.next=12;break}return e.next=12,Promise.all($h.map(o(t(J).mark((function e(r){var i;return t(J).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ad(r);case 2:if(!(i=e.sent)){e.next=8;break}return e.next=6,Oh(i,n);case 6:i.name=n,delete id[r].entries;case 8:case"end":return e.stop()}}),e)})))));case 12:hd(pd()),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),td.disabled=!1;case 18:Zh.classList.remove("loading");case 19:case"end":return e.stop()}}),e,null,[[3,15]])})))),Bo((function(){hd(pd())}));var wd=Pi.titleLogo,bd=Pi.titleLogoIcon,_d=function(e){var t,n=Ai.from(8).wait(300).to(0,600,Ft.outSine).start(),r=Ai.from(0).wait(300).to(1,600,Ft.steps(3)).start(),i=Ai.from(3).loopStart().to(-3,1500,Ft.inOutSine).to(3,1500,Ft.inOutSine).loopEnd().start(),s=function(){return Ai.from(-100).loopStart().wait(2e3).to(-100).to(h.flash.width,200).wait(3e3).to(-100).to(h.flash.width,200).to(-100).to(h.flash.width,200).wait(2e3).loopEnd()},a=Ai.from(0).wait(60).on((function(){h.normal=o().normal})),o=function(){return{normal:c()?wd.ex:wd.normal,flash:c()?wd.exFlash:wd.normalFlash}},u=function(){var e,t;Yi.mode="ex"===Yi.mode?"normal":"ex",e=Yi.mode,t=new URL(location.href),"normal"===e?t.searchParams.delete("mode"):t.searchParams.set("mode",e),history.replaceState(history.state,"",t),hd(e),zi.titleModeChange.play()},c=function(){var n;return"ex"===(null!==(t=null==e||null===(n=e.value)||void 0===n?void 0:n.mode)&&void 0!==t?t:Yi.mode)},l=c(),h=o(),d=s().start();return function(){l!==c()&&(l=c(),h.normal=h.flash=o().flash,d.end(),a.end(),d=s().start(),a.start());var t=ie(pi,h.normal),f=h.flash.width,p=Math.round(d.value),m=h.normal.toBox(t,80);m.height+=30,m.originY+=25,e||gi.onDown(m,u),pi.save(),pi.drawSprite(bd,ie(pi,bd),53+Math.round(i.value)),pi.opacity(r.value),pi.drawSprite(h.normal,t,80+n.value),pi.opacity(.8),pi.drawSprite(h.flash.sub({x:Math.max(0,p),width:(p<0?100+p:Math.min(100,f-p))-f}),t+Math.max(0,p),80+n.value),pi.restore()}},kd=Pi.buttonTwitter,Id=Pi.buttonMute,Sd=Pi.buttonLight,Td=Pi.card,Ed=Pi.fontUiS,xd=function(e,t,n){var r=void 0===n?"":n,i=ie(pi,Td.top),s=Ai.from(0).to(t+(r?Ed[0].height+1:0),200,Ft.steps(5)).start(!1);return function(n){s.update();var a=(t-s.value)/2|0;if(pi.drawSprite(Td.top,i,e+a),pi.drawSprite(Td.body,i,e+a+Td.top.height,Td.body.width,s.value),pi.drawSprite(Td.bottom,i,e+a+Td.top.height+s.value),r&&Ed[0].height<=s.value){var o=(Td.body.width-pi.measuretext(Ed,r,4))/2|0;pi.drawText(Ed,r,i+o,e+a+4,4)}s.done&&n&&n({x:i+4,y:e+a+4+(r?Ed[0].height+1:0),width:Td.body.width-8,height:s.value-(r?Ed[0].height+1:0)})}},Ad=Pi.tips,Md=Pi.fontUi,Rd=Pi.scoreBg,Od=function(e,t){var n=Ai.from(0).wait(150),r=0;return function(i,s){if(pi.drawSprite(Rd,e,t+2),pi.drawText(Md.normal,"y ".concat(Z(0|i)),e+1,t),pi.drawRect(e+1,t+11,Math.floor(128*Math.min(i/1e6,1)),2,Ji.main),void 0!==s){r<s&&!n.running&&(r=s,n.start(!1));var a=n.update().running?Md.flash:Md.normal;pi.drawText(a,"h ".concat(0|s),e+1,t+21)}}},Pd=Pi.replayReady,Ld=Pi.replayLoading,Nd=Pi.buttonReset,Cd=Pi.buttonLight,Dd=Pi.pressAnyButton,Fd=Pi.fontUi,Ud=Pi.fontUiL,Vd=Pi.uiStatusReset,jd=Pi.card,Bd=function(){var e,t,n={},r=39,i=Od(7,2),s=(e=jd.body.width/2,t=22,function(n){var r=Math.floor(100*Math.max(n,0)),i="t ".concat(Math.floor(r/100)),s=".".concat(String(r%100).padStart(2,"0")),a=pi.measuretext(Ud,i),o=pi.measuretext(Fd.normal,s),u=e-(a+1+o)/2;pi.drawText(Ud,i,u,t),pi.drawText(Fd.normal,s,u+a+1,t+2)}),a=function(e,t){var n=Ai.from(!1).to(!0,100).to(!1).on((function(){mi.emit("sceneChange",(function(){return gd(""),Hf()}))})),r=function(){n.started||(n.start(),zi.uiButton.play())};return function(){gi.onDown(Vd.toBox(e-Vd.width,t-Vd.height),r),pi.opacity(n.value?.2:1),pi.drawSprite(Vd,e-Vd.width,t-Vd.height)}}(jd.body.width,r),o=Ai.from(-39).wait(250).to(0,250,Ft.outSine).on((function(){Yi.screenTop=r,mi.emit("statusInitIn")})).start(),u=Ai.from(0).to(-39,400,Ft.inSine).on((function(){Yi.screenTop=0,mi.emit("statusFinOut"),Rt.remove(c)}));n.timeUp=function(){u.start()},Yi.screenTop=0;var c=function(e,t,c){mi.subscribe(n),pi.save(),pi.translate(ie(pi,jd.body),u.started?u.value:o.value),pi.drawSprite(jd.body,0,0,jd.body.width,r-jd.bottom.height),pi.drawSprite(jd.bottom,0,r-jd.bottom.height),i(e,t),s(c/fi.fps),a(),pi.restore()};return c},Wd=Pi.success,qd=Pi.buttonReset,$d=Pi.buttonLight,Hd=Pi.buttonTwitter,zd=function(e){var t=null!=e?e:{},n=t.time,r=void 0===n?30:n,i=t.times,s=void 0===i?1:i,a=t.color,o=void 0===a?C.parse("#fff8"):a,u=t.onEnd,c=Ai.from(!0).to(!0,r).loopStart(s-1).to(!1,r).to(!0,r).loopEnd().start(),l=function(){c.value&&pi.drawRect(0,0,pi.width,pi.height,o),c.done&&(Rt.remove(l),null==u||u())};return l},Gd=Pi.newRecord,Kd=function(e,t){var n,r,i,s,a,o=Ai.from({x:0,y:0}).to({x:2,y:-2},10).to({x:-2,y:2},20).to({x:2,y:2},20).to({x:-2,y:-2},20).to({x:0,y:0}),u=Ai.from(0).wait(300).to(e,500,Ft.inSine).on((function(){Yi.isSuccess?c.start():l.start()})).start(!1),c=Ai.from(0).wait(400),l=Ai.from(0).wait(200).on((function(){return Mi.ui.add(function(e,t){var n=Ai.from(pi.height).to(pi.height-Hd.height-30,300,Ft.outSine).start(),r=function(){var n=(null==t?void 0:t.isResolved())?"￥".concat(Z(e),"\n#FireShooterSan\n").concat(fd()):"#FireShooterSan\n".concat(fd()),r=new URLSearchParams({text:n});window.open("https://twitter.com/intent/tweet?".concat(r))};return function(){var e=n.value;gi.onDown(Hd.toBox(30,e),r),pi.drawSprite(Hd,30,e)}}(e,t),(n=Ai.from(pi.height).to(pi.height-qd.height-30,300,Ft.outSine).start(),r=Ai.from(!1).to(!0,100).to(!1).on((function(){mi.emit("sceneChange",(function(){return gd(""),Hf()}))})),i=function(){r.started||(r.start(),zi.uiButton.play())},function(){var e=pi.width-qd.width-30,t=n.value;gi.onDown(qd.toBox(e,t),i),pi.drawSprite(qd,e,t),r.value&&(pi.save(),pi.opacity(.5),pi.drawSprite($d,e,t),pi.restore())}));var n,r,i})),h=xd(90,49,"RESULT"),d=Od(3,16),f=(n=106,r=1,i=function(){var e,n,r;o.start(),l.start(),(null==t||null===(e=t.value)||void 0===e?void 0:e.newRecord)&&Mi.ui.add((n=Ai.from(!1).loopStart().to(!1,500).to(!0,500).loopEnd().start(),r=!0,function(){r&&(r=!1,mi.emit("newRecordShow"),Mi.ui.add(zd({color:C.parse("#fff"),time:100})));var e=n.value?Gd.flash:Gd.normal;pi.drawSprite(e,ie(pi,e),44)}))},s=Ai.from({rotate:-15,scale:3}).to({rotate:-0,scale:1},250,Ft.inSine).on((function(){a.start(),i(),zi.resultSuccess.play()})).start(!1),a=Ai.from(!1).loopStart().to(!1,500).to(!0,500).loopEnd(),function(){s.update(),pi.save(),pi.translate(n,r),pi.rotate(s.value.rotate),pi.scale(s.value.scale),pi.drawSprite(a.value?Wd.flash:Wd.normal),pi.restore()}),p=u.value;return function(){pi.save(),pi.translate(o.value.x,o.value.y),h((function(e){pi.translate(e.x,e.y),d(u.update().value),c.done&&f()})),pi.restore(),p!==u.value&&zi.resultCounting.play(),p=u.value}},Yd=Pi.start,Jd=Pi.replayNow,Xd=Pi.finish,Zd=Pi.playerBullet,Qd=Pi.playerBulletHit,ef=Pi.playerBullet,tf=function(e,t,n){var r={},i=0,s=0,a=1/0,o=0,u=-90,c=0;r.enemyHit=function(){Rt.remove(l),Mi.effectBack.add(function(e,t){var n=Ai.from(2).to(1,100,Ft.inSine).on((function(){Rt.remove(r)})).start(),r=function(){pi.save(),pi.opacity(.8),pi.translate(e,t),pi.scale(n.value),pi.drawSprite(Qd),pi.restore()};return r}(e,t)),mi.emit("playerBulletRemove")},r.enemyPos=function(n){var r=n.id,c=n.x,l=n.y,h=ee(Q(c-e,l-t)-u),d=Math.abs(h);(-40<h&&h<40&&d<a||i===r)&&(s=r,a=i===r?0:d,o=h)},zi.playerFire.play();var l=function(){if(s&&u!==o){var h=n?2:.5;u+=Math.min(Math.max(o,-h),h)}i=s,s=0,a=1/0;var d=te(u,n?6:8);if(e+=d.x,t+=d.y,e<=-ef.originRight||pi.width+ef.originLeft<=e||t<=Yi.screenTop-ef.originBottom||pi.height+ef.originTop<=t)return Rt.remove(l),void mi.emit("playerBulletRemove");c++%3==0&&Mi.effectBack.add(function(e,t){var n=Ai.from(.2).to(0,250,Ft.inSine).on((function(){Rt.remove(r)})).start(),r=function(){pi.save(),pi.opacity(n.value),pi.drawSprite(Zd,e,t),pi.restore()};return r}(e,t)),mi.subscribe(r),vi.emit("playerBulletHit",null,ef.toBox(e,t),r),pi.drawSprite(ef,e,t)};return l},nf=Pi.playerDestroyChip,rf=function(e,t,n,r){var i=Ai.from(0).wait(r).start(),s=Ai.from(0).to(2).to(1,200,Ft.inSine).start(!1),a=Ai.from(0).to(.8,100).wait(300).to(0,200).on((function(){Rt.remove(c)})).start(!1),o=Ai.from(4).to(.2,300,Ft.outSine).start(!1),u=te(n),c=function(){i.done&&(o.update(),e+=u.x*o.value,t+=u.y*o.value,pi.save(),pi.opacity(a.update().value),pi.translate(0|e,0|t),pi.scale(s.update().value),pi.drawSprite(nf),pi.restore())};return c},sf=Pi.playerDestroy,af=Pi.player,of=function(e){for(var t={},n=Ai.from(pi.height+af.normal.originTop).wait(200).to(pi.height-30,200,Ft.outSine).start(),r=Ai.from(!1).start(),i=0;i<12;i++)r.to(!0,60).to(!1,60);var s=!1,a=pi.width/2,o=0;t.enemyHit=t.enemyBulletHit=function(){!s&&r.done&&Rt.remove(u)&&(Yi.heartRate=0,Yi.clearing.start(),mi.emit("playerDestroy"),Mi.effectOverEnemy.add(function(e,t){for(var n=Ai.from(0).to(24,250,Ft.outSine).wait(200).start(),r=Ai.from(0).to(2,100,Ft.outSine).to(.7,150,Ft.inOutSine).to(1.2,50,Ft.inSine).to(1,100,Ft.inSine).start(),i=Ai.from(1).wait(200).to(0,250,Ft.inSine).on((function(){Rt.remove(o)})).start(),s=Ji.accent.opacity(.37),a=0;a<720;a+=48)Mi.effectOverEnemy.add(rf(e,t,a,a/2+200));zi.playerHit.play();var o=function(){pi.save(),pi.opacity(i.value),pi.translate(0|e,0|t),n.done||pi.drawCircle(0,-6,0|n.value,s),pi.scale(r.value),pi.drawSprite(sf),pi.restore()};return o}(a,o)),Ai.from(0).wait(1e3).on((function(){Mi.player.add(of(e))})).start())},t.timeUp=function(){s=!0};var u=function(){mi.subscribe(t);var i=r.value?af.flash:af.normal;if(!n.done)return o=n.value,void pi.drawSprite(i,a,o);if(s&&e)pi.drawSprite(i,a,o);else{var u=!1;if(gi.isDown){var c=gi.vec;a+=1.4*c.x,o+=1.4*c.y,u=gi.downCount>7}else{u=Si.reduce((function(e,t){return Math.max(e,t.downCount||0)}),0)>7;var l=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=0,i=0,s=0,a=!0,o=!1,u=void 0;try{for(var c,l=t[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var h=I(c.value),d=h[0],f=h[1],p=h[2],m=h[3];if("value"in d&&"value"in f&&"value"in p&&"value"in m){var v=Math.min(Math.max(f.value-m.value,-1),1),y=Math.min(Math.max(p.value-d.value,-1),1),g=Math.sqrt(v*v+y*y);r<g&&(r=g,i=v,s=y)}else if("isDown"in d&&"isDown"in f&&"isDown"in p&&"isDown"in m){var w=(f.isDown?1:0)+(m.isDown?-1:0),b=(p.isDown?1:0)+(d.isDown?-1:0),_=Math.sqrt(w*w+b*b);r<(0===_?0:1)&&(r=1,i=w/_,s=b/_)}}}catch(e){o=!0,u=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw u}}return{x:i,y:s}}(_i,ki,Ii);a+=l.x*(u?1.5:4.5),o+=l.y*(u?1.5:4.5)}a=Math.min(Math.max(a,i.originLeft),pi.width-i.originRight),o=Math.min(Math.max(o,Yi.screenTop+i.originTop),pi.height-i.originBottom),(Si.some((function(e){return e.isDown}))&&Mi.playerBullet.isEmpty||Si.some((function(e){return e.isDownChange}))&&Mi.playerBullet.size<3)&&Mi.playerBullet.add(tf(a,o-i.originTop,u)),Yi.playerPos={x:a,y:o},s||vi.emit("playerHit",null,{x:a,y:o,width:0,height:0,originX:0,originY:0},t),pi.drawSprite(i,a,o)}};return u},uf=of,cf=Pi.enemyNotice,lf=Pi.enemyNoticeLarge,hf=0,df=Pi.fontRate,ff=function(e,t,n,r){var i=Ai.from(!1).loopStart().to(!0,40).to(!1,60).loopEnd(),s=Ai.from(0).to(-6,200,Ft.outSine).wait(300).on((function(){Rt.remove(a)})).start();16<=n&&i.start(!1);var a=function(){if(n>1){var r=i.update().value?df.flash:df.normal;pi.drawText(r,"*".concat(n),0|e,t+s.value|0,-1)}};return a};Pi.enemyTakeChip;var pf=Pi.enemyTake,mf=Pi.enemyLargeTake,vf=function(e){var t=e.x,n=e.y,r=e.large,i=(e.heart,Yi.getHeartRate()),s=Ai.from(0).to(r?32:16,250,Ft.outSine).wait(100).start(),a=Ai.from(0).to(1.5,100,Ft.outSine).to(.8,100,Ft.inOutSine).to(1,100,Ft.inSine).start(),o=Ai.from(.9).wait(200).to(0,200,Ft.inSine).on((function(){Rt.remove(c),Mi.effectOverPlayer.add(ff(t,n,i))})).start(),u=Ji.accent.opacity(.37),c=function(){pi.save(),pi.opacity(o.value),pi.translate(0|t,0|n),s.done||pi.drawCircle(0,0,0|s.value,u),pi.scale(a.value),pi.drawSprite(r?mf:pf),pi.restore()};return c},yf=Pi.enemy,gf=Pi.enemyLarge,wf=1,bf=function(e,t){var n={},r=wf++,i=e.hp,s={id:r,x:e.x,y:e.y,hp:e.hp,large:e.large},a=e.large?gf:yf;e.me&&(e.me.id=r);var o=!1,u=Ai.from(2).to(1,150,Ft.inSine).start(!1),c=Ai.from(!1).to(!0,60).to(!1,60).to(!0,60).to(!1),l=Ai.from(1).to(0,200,Ft.inSine).on((function(){Rt.remove(h)}));n.playerBulletHit=function(){o||(c.running||c.start(),zi.enemyHit.play(),--s.hp<=0&&Rt.remove(h)&&(Yi.heartRate++,Yi.addHeart(i),Mi.effectBack.add(vf(w({},s,{heart:i}))),mi.emit("enemyTake",{id:r,large:e.large}),mi.emit("enemyDestroy",{id:r}),e.large?zi.enemyTakeLarge.play():zi.enemyTake.play()))},n.enemyTake=function(t){var n;(null===(n=e.parent)||void 0===n?void 0:n.id)===t.id&&Rt.remove(h)&&(Yi.addHeart(i),Mi.effectBack.add(vf(w({},s,{heart:i}))),mi.emit("enemyDestroy",{id:r}),mi.emit("enemyTake",{id:r,large:e.large}))},n.timeUp=function(){o=!0,l.start(),Mi.effectBack.add(function(e){var t=e.x,n=e.y,r=e.large,i=Ai.from(0).to(r?16:8,400,Ft.outSine).start(),s=Ai.from(.6).wait(200).to(0,200,Ft.inSine).on((function(){Rt.remove(a)})).start(),a=function(){pi.save(),pi.opacity(s.value),pi.drawCircle(0|t,0|n,0|i.value,Ji.accent),pi.restore()};return a}(w({},s)))};var h=function(){var d=e.noOver||e.noHorOver,f=e.noOver||e.noVertOver;if(s.hp<=0||!d&&(s.x<=-a.body.originRight||pi.width+a.body.originLeft<=s.x)||!f&&(s.y<=Yi.screenTop-a.body.originBottom||pi.height+a.body.originTop<=s.y))Rt.remove(h)&&mi.emit("enemyDestroy",{id:r});else{mi.subscribe(n),o||t(s),pi.save(),pi.translate(s.x,s.y),o||vi.emit("enemyHit",null,a.body.toBox(0,0),n),mi.emit("enemyPos",{id:r,x:s.x,y:s.y}),pi.scale(l.started?l.value:u.update().value),pi.drawSprite(c.value?a.bodyFlash:a.body);var p=c.value?a.gaugeFlash:a.gauge,m=Math.ceil(p.height*(Math.max(0,s.hp)/i));pi.drawSprite(p.sub({y:m,height:-m,originY:-m})),pi.restore()}};return Mi.enemyNotice.add(function(e,t,n){var r,i,s={},a=t-1,o=Yi.isFirstEnemy,u=Yi.enemyWaveId;hf=o?300:hf+(null!==(r=e.showTime)&&void 0!==r?r:50);var c=Ai.from(0).wait(null!==(i=e.wait)&&void 0!==i?i:0),l=Ai.from(0).wait(hf).to(2).to(1,200,Ft.outSine).start(),h=Ai.from(1).to(0,300,Ft.inSine).on((function(){Rt.remove(d)}));o||(s.enemyShow=function(e){c.started||e.id!==a||c.start()},s.enemyDestroy=function(e){e.id===a&&c.end()}),s.timeUp=function(){h.start()},Yi.isFirstEnemy=!1;var d=function(){if(mi.subscribe(s),!h.started&&(o&&!c.started&&Yi.enemyWaveId!==u||c.done))return Rt.remove(d),Mi.enemy.add(n),mi.emit("enemyShow",{id:t}),void zi.enemyShow.play();pi.save(),pi.opacity(Yi.enemyWaveId!==u||e.large?.3:.2),pi.translate(e.x,e.y),pi.scale(h.started?h.value:l.value),pi.drawSprite(e.large?lf:cf),pi.restore()};return d}(e,r,h)),h},_f=Pi.enemyBulletTake,kf=Pi.enemyBulletLargeTake,If=function(e){var t=e.x,n=e.y,r=e.large,i=e.angle,s=e.speed,a=Ai.from(0).to(r?8:4,400,Ft.outSine).start(),o=Ai.from(.6).wait(200).to(0,200,Ft.inSine).on((function(){Rt.remove(u)})).start(),u=function(){var e=te(i instanceof Ft?i.value:i,s instanceof Ft?s.value:s);t+=e.x,n+=e.y,pi.save(),pi.opacity(o.value),pi.drawCircle(0|t,0|n,0|a.value,Ji.accent),pi.restore()};return u},Sf=Pi.enemyBullet,Tf=Pi.enemyBulletLarge,Ef=function(e){var t={},n=Ai.from(0).loopStart().to(1,500,Ft.frameSteps(2)).to(0).loopEnd().start(!1),r=e.x,i=e.y;t.enemyTake=function(t){if(t.id===e.id&&Rt.remove(s)){var n=e.large?2:1;Yi.addHeart(n),Mi.effectBack.add(function(e){var t=e.x,n=e.y,r=e.large,i=(e.heart,Yi.getHeartRate()),s=Ai.from(0).to(r?16:8,250,Ft.outSine).wait(100).start(),a=Ai.from(0).to(1.5,100,Ft.outSine).to(.8,100,Ft.inOutSine).to(1,100,Ft.inSine).start(),o=Ai.from(.9).wait(200).to(0,200,Ft.inSine).on((function(){Rt.remove(c),Mi.effectOverPlayer.add(ff(t,n,i))})).start(),u=Ji.accent.opacity(.37),c=function(){pi.save(),pi.opacity(o.value),pi.translate(0|t,0|n),s.done||pi.drawCircle(0,0,0|s.value,u),pi.scale(a.value),pi.drawSprite(r?kf:_f),pi.restore()};return c}(w({},e,{x:r,y:i,heart:n})))}},t.enemyDestroy=function(t){t.id===e.id&&Ai.from(0).wait(1e3).on((function(){Rt.remove(s)&&Mi.effectBack.add(If(w({},e,{x:r,y:i})))})).start()},e.large?zi.enemyFireLarge.play():zi.enemyFire.play();var s=function(){if(Yi.clearing.running&&Rt.remove(s))Mi.effectBack.add(If(w({},e,{x:r,y:i})));else{var a=(e.large?Tf:Sf)[n.update().value],o=te(e.angle instanceof Ft?e.angle.value:e.angle,e.speed instanceof Ft?e.speed.value:e.speed);r+=o.x,i+=o.y,r<=-a.originRight&&o.x<=0||pi.width+a.originLeft<=r&&0<=o.x||i<=Yi.screenTop-a.originBottom&&o.y<=0||pi.height+a.originTop<=i&&0<=o.y?Rt.remove(s):(mi.subscribe(t),vi.emit("enemyBulletHit",null,a.toBox(r,i),t),pi.drawSprite(a,r,i))}};return s},xf=function(e){for(var t=function(t,n){return ae(t,n,e.rank/2)},n=Ai.from(0).wait(Ri.nextInt(t(300,0),t(2e3,200))).start(!1),r=Ai.from(!1).to(!0),i=0;i<e.rank;i++)r.wait(t(300,100)).to(!0);return bf(w({},e),(function(e){n.update().done&&(n.wait(Ri.nextInt(t(2e3,500),t(5e3,800))),r.start(!1)),r.update().getAndSet(!1)&&Mi.enemyBullet.add(Ef(w({},e,{angle:90,speed:t(1,3)})))}))},Af=function(e){for(var t=function(t,n){return ae(t,n,e.rank/2)},n={},r=Pi.enemy.body,i=Ai.from(!0).start(!1),s=0,a=0,o=0;o<e.rank;o++)i.wait(t(1e3,600)).to(!0);return bf(w({},e),(function(o){if(mi.subscribe(n),i.update().getAndSet(!1)){var u=ne(o.x-Yi.playerPos.x,o.y-Yi.playerPos.y);s=3*u.x,a=3*u.y;for(var c=Q(Yi.playerPos.x-o.x,Yi.playerPos.y-o.y),l=t(.5,1),h=0;h<e.rank+2;h++)Mi.enemyBullet.add(Ef(w({},o,{angle:c,speed:1.5+h*l})))}else s+=(0-s)/20,a+=(4-a)/20;o.x+=s,o.y+=a,(o.x<r.originLeft||pi.width-r.originRight<o.x)&&(s=-s,o.x+=s)}))},Mf=function(e){var t=function(t,n){return ae(t,n,e.rank/2)},n=te(90+75*Math.sign(e.x-pi.width/2),t(2,4)),r=Pi.enemy.body;return bf(w({},e),(function(i){if(i.x+=n.x,i.y+=n.y,i.x<r.originLeft||pi.width-r.originRight<=i.x){n.x=-n.x,i.x+=n.x;var s=t(1.5,2.5),a=n.x<0?180:0;if(0===e.rank){var o=5*e.no;Mi.enemyBullet.add(Ef(w({},i,{angle:a+90-o,speed:s})),Ef(w({},i,{angle:a-90+o,speed:s})))}else if(1===e.rank)Mi.enemyBullet.add(Ef(w({},i,{angle:a+90,speed:s})),Ef(w({},i,{angle:a-90,speed:s})),Ef(w({},i,{angle:a+60,speed:s})),Ef(w({},i,{angle:a-60,speed:s})));else for(var u=2===e.rank?30:45,c=-90;c<=90;c+=u)Mi.enemyBullet.add(Ef(w({},i,{angle:a+c,speed:s})))}}))},Rf=function(e){var t=function(t,n){return ae(t,n,e.rank/2)},n=e.angle,r=Ai.from(80).to(30,2e3,Ft.outSine).to(200,2e3,Ft.inSine).start(!1),i=Ai.from(!1).loopStart().wait(t(300,80)).to(!0).loopEnd().start(!1),s=te(n),a=e.x+s.x*r.value,o=e.y+s.y*r.value,u=t(2,3);return bf(w({},e,{x:a,y:o}),(function(s){r.update(),i.update();var a=te(n+=u);if(s.x=e.x+a.x*r.value,s.y=e.y+a.y*r.value,i.getAndSet(!1)){var o=Q(Yi.playerPos.x-s.x,Yi.playerPos.y-s.y),c=Ai.from(.5).to(t(2,3),t(500,300),Ft.inSine).start();Mi.enemyBullet.add(Ef(w({},s,{angle:o,speed:c})))}}))},Of=function(e){var t=function(t,n){return ae(t,n,e.rank/2)},n=0,r=0,i=!1,s=t(2,3.5);return bf(w({},e),(function(a){if(0===n&&(n=Yi.playerPos.y<e.y?-1:1),0===r)a.y+=s*n,(n<0&&Yi.playerPos.y>=a.y||n>0&&Yi.playerPos.y<=a.y)&&(r=Yi.playerPos.x<a.x?-1:1);else if(a.x+=s*r,!i&&(r<0&&Yi.playerPos.x>=a.x||r>0&&Yi.playerPos.x<=a.x)){for(var o=Yi.playerPos.y<a.y?270:90,u=t(.5,1),c=0;c<e.rank+2;c++)Mi.enemyBullet.add(Ef(w({},a,{angle:o,speed:2+c*u})));i=!0}}))},Pf=function(e){var t=function(t,n){return ae(t,n,e.rank/2)},n=e.x<pi.width/2?-Pi.enemy.body.originRight:pi.width+Pi.enemy.body.originLeft,r=Ai.from(e.x).to(pi.width-e.x,1e3,Ft.outSine).to(n,1e3,Ft.inSine).start(!1),i=Ai.from(e.y).to(e.y2,1700,Ft.inOutSine).to(e.y2-(e.y2-e.y)/5,300,Ft.inSine).start(!1),s=Ai.from(!0).start(!1),a=Ai.from(!1).to(!0);e.rank<2?s.wait(1100).to(!0):s.wait(500).to(!0).wait(500).to(!0);for(var o=0;o<2*e.rank;o++)a.wait(t(150,50)).to(!0);return bf(w({},e),(function(e){if(e.x=r.update().value,e.y=i.update().value,s.update().getAndSet(!1)&&a.start(!1),a.update().getAndSet(!1)){var n=Q(Yi.playerPos.x-e.x,Yi.playerPos.y-e.y),o=t(12,8),u=t(1.5,3.5);Mi.enemyBullet.add(Ef(w({},e,{angle:n+o,speed:u})),Ef(w({},e,{angle:n-o,speed:u})))}}))},Lf=function(e){var t=function(t,n){return ae(t,n,e.rank/2)},n=Ai.from(!1).wait(t(800,500)).loopStart().to(!0).wait(t(1e3,200)).loopEnd().start(!1),r=Ai.from(e.y).to(e.y+10,t(500,300),Ft.inOutSine).to(Yi.screenTop-Pi.enemy.body.originBottom,t(2500,1500),Ft.inSine).start(!1),i=0,s=0,a=[],o=Ri.nextInt(t(60,20)),u=t(1,2);return bf(w({noHorOver:!0},e),(function(e){a.unshift(Yi.playerPos.x);var c=a[Math.min(a.length-1,o)];s+=t(5e-4,.001),i+=Math.min(Math.max(-s,c-e.x),s),e.x+=Math.min(Math.max(-u,i),u),e.y=r.update().value;var l=t(30,20);n.update().getAndSet(!1)&&Mi.enemyBullet.add(Ef(w({},e,{angle:90-l,speed:1})),Ef(w({},e,{angle:90+l,speed:1})))}))},Nf=function(e){var t=function(t,n){return ae(t,n,e.rank/2)},n=e.x<pi.width/2?pi.width+Pi.enemy.body.originLeft:-Pi.enemy.body.originRight,r=Ai.from(e.x).to(n,t(2500,1500),Ft.inSine).start(!1),i=Ai.from(e.y).to(Yi.screenTop-Pi.enemy.body.originBottom-10,t(2500,1500),Ft.outSine).start(!1),s=Ai.from(!1).loopStart().wait(t(400,50)).to(!0).loopEnd().start(!1);return bf(w({noHorOver:!0},e),(function(e){if(e.x=r.update().value,e.y=i.update().value,s.update().getAndSet(!1)){var n=t(30,45),a=Ri.nextFloat(90-n,90+n),o=Ri.nextFloat(1,2);Mi.enemyBullet.add(Ef(w({},e,{angle:a,speed:o})))}}))},Cf=function(e){for(var t=function(t,n){return ae(t,n,e.rank/2)},n={},r=Ai.from(!1).wait(t(500,200)).loopStart().to(!0).wait(t(1500,1e3)).loopEnd().start(!1),i=Ai.from(!1).to(!0),s=90,a=0,o=0;o<1+3*e.rank;o++)i.wait(t(150,80)).to(!0);return bf(w({large:!0,noOver:!0},e),(function(o){if(mi.subscribe(n),!i.running&&!i.value){var u=ee(Q(Yi.playerPos.x-o.x,Yi.playerPos.y-o.y)-s),c=t(1,2);s+=Math.min(Math.max(-c,u),c)}r.update().getAndSet(!1)&&(i.start(!1),a=s),i.update().getAndSet(!1)?(Mi.enemyBullet.add(Ef(w({},o,{angle:a,speed:t(2.5,2)}))),e.me.fire=!0):e.me.fire=!1;var l=te(s);o.x+=.3*l.x,o.y+=.3*l.y,e.me.x=o.x,e.me.y=o.y,e.me.angle=s}))},Df=function(e){var t=e.parent,n=te(t.angle+e.angle),r=t.x+n.x*e.dist,i=t.y+n.y*e.dist;return bf(w({x:r,y:i,noOver:!0},e),(function(n){var r,i,s=te(t.angle+e.angle);n.x=t.x+s.x*e.dist,n.y=t.y+s.y*e.dist,t.fire&&Mi.enemyBullet.add(Ef(w({},n,{id:t.id,angle:t.angle,speed:(r=1.5,i=1,ae(r,i,e.rank/2))})))}))},Ff=function(e){for(var t=function(t,n){return ae(t,n,e.rank/2)},n={},r=Ai.from(!1).wait(t(500,200)).loopStart().to(!0).wait(t(1500,1e3)).loopEnd().start(!1),i=Ai.from(e.y).loopStart().to(e.y2,4e3,Ft.inOutSine).to(e.y,4e3,Ft.inOutSine).loopEnd().start(!1),s=Ai.from(0).loopStart().to(t(16,22),1e3,Ft.outSine).to(-t(16,22),2e3,Ft.inOutSine).to(0,1e3,Ft.inSine).loopEnd().start(!1),a=Ai.from(!1).to(!0),o=0;o<1+3*e.rank;o++)a.wait(t(150,40)).to(!0);var u=0,c=0;return bf(w({large:!0},e),(function(o){mi.subscribe(n),o.x=e.x+s.update().value,o.y=i.update().value,r.update().getAndSet(!1)&&(a.start(!1),u=0,c=Q(Yi.playerPos.x-o.x,Yi.playerPos.y-o.y)),a.update().getAndSet(!1)?(Mi.enemyBullet.add(Ef(w({},o,{angle:c,speed:t(2.5,1.5+.3*u)}))),e.me.fire=!0,e.me.rapidNo=u++):(e.me.fire=!1,e.me.rapidNo=0),e.me.x=o.x,e.me.y=o.y}))},Uf=function(e){var t=function(t,n){return ae(t,n,e.rank/2)},n=e.parent,r=te(e.angle),i=n.x+r.x*e.dist,s=n.y+r.y*e.dist/2,a=0;return bf(w({x:i,y:s,noOver:!0},e),(function(r){e.angle+=t(2,1);var i=te(e.angle);r.x=n.x+i.x*e.dist,r.y=n.y+i.y*e.dist/2,n.fire&&(0===n.rapidNo&&(a=Q(Yi.playerPos.x-r.x,Yi.playerPos.y-r.y)),Mi.enemyBullet.add(Ef(w({},r,{id:n.id,angle:a,speed:t(1.5,1+.2*n.rapidNo)}))))}))},Vf=function(e){var t=function(t,n){return ae(t,n,e.rank/2)},n={},r=Pi.enemyLarge.body,i=Ai.from(t(3,5)).wait(t(1500,500)).to(0,t(1e3,400),Ft.inSine),s={x:0,y:0};return bf(w({large:!0},e),(function(a){mi.subscribe(n),i.update(),a.x+=s.x*i.value,a.y+=s.y*i.value;var o=null;if(!i.running){i.start(!1),s=ne(a.x-Yi.playerPos.x,a.y-Yi.playerPos.y);var u=Q(Yi.playerPos.x-a.x,Yi.playerPos.y-a.y);o=[];for(var c=t(2,1),l=[2,3,5][e.rank],h=0;h<l;h++)o.push({angle:u+h*t(30,45),speed:c}),0<h&&h<4&&o.push({angle:u-h*t(30,45),speed:c});var d=!0,f=!1,p=void 0;try{for(var m,v=o[Symbol.iterator]();!(d=(m=v.next()).done);d=!0){var y=m.value;Mi.enemyBullet.add(Ef(w({},a,{angle:y.angle,speed:y.speed})))}}catch(e){f=!0,p=e}finally{try{d||null==v.return||v.return()}finally{if(f)throw p}}}(a.x<r.originLeft||pi.width-r.originRight<=a.x)&&(s.x=-s.x,a.x+=s.x*i.value),(a.y<Yi.screenTop+r.originTop||pi.height-r.originBottom<=a.y)&&(s.y=-s.y,a.y+=s.y*i.value),e.me.history.push({x:a.x,y:a.y,bullets:o})}))},jf=function(e){var t=function(t,n){return ae(t,n,e.rank/2)},n=e.parent,r=e.no*t(8,4),i=e.no*t(.2,.1);return bf(w({noOver:!0},e),(function(e){var t=n.history.length-1-r,s=n.history[Math.max(0,t)];e.x=s.x,e.y=s.y;var a=!0,o=!1,u=void 0;if(s.bullets&&0<=t)try{for(var c,l=s.bullets[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var h=c.value;Mi.enemyBullet.add(Ef(w({},e,{id:n.id,angle:h.angle,speed:h.speed-i})))}}catch(e){o=!0,u=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw u}}}))},Bf=function(e){var t=function(t,n){return ae(t,n,e.rank/2)},n=Ai.from(!1).wait(t(400,0)).loopStart().to(!0).wait(t(150,150)).loopEnd().start(!1),r=t(60,70),i=te(e.angle),s=e.x+i.x*r,a=e.y+i.y*r,o=-1;return bf(w({large:!0},e,{x:s,y:a}),(function(i){e.angle+=t(.5,1.5);var u=te(e.angle);if(i.x=e.x+u.x*r,i.y=e.y+u.y*r,n.update().getAndSet(!1)){if(o<0){var c=Q(Yi.playerPos.x-s,Yi.playerPos.y-a);o=45*Math.round(c/45)+360}else o+=45;for(var l=0;l<1+Math.pow(e.rank,2);l++){var h=0===e.rank?Ai.from(4).to(2,200,Ft.inSine):1===e.rank?Ai.from(4-l/2).to(2-l/2,200,Ft.inSine):Ai.from(8-2*l).to(1,200,Ft.inSine);Mi.enemyBullet.add(Ef(w({},i,{angle:o,speed:h.start()})))}}}))},Wf=[function(e,t){var n=e>0?1:0,r=4+2*n,i=28-4*n,s=Yi.playerPos.x<pi.width/2?-1:1,a=(pi.width-(r-1)*i*s)/2,o=120,u=!0,c=!1,l=void 0;try{for(var h,d=re(2)[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){h.value;var f=!0,p=!1,m=void 0;try{for(var v,y=re(r)[Symbol.iterator]();!(f=(v=y.next()).done);f=!0){v.value;xf({lap:e,rank:t,hp:1,x:a,y:o,wait:300}),a+=i*s}}catch(e){p=!0,m=e}finally{try{f||null==y.return||y.return()}finally{if(p)throw m}}a+=i*(s=-s),o-=i}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}},function(e,t){var n=e>0?1:0,r=4+2*n,i=20-2*n,s=Yi.playerPos.x<pi.width/2?pi.width-30:30,a=pi.height-r*i-60,o=!0,u=!1,c=void 0;try{for(var l,h=re(r)[Symbol.iterator]();!(o=(l=h.next()).done);o=!0){var d=l.value;Of({lap:e,rank:t,hp:1,x:s,y:a+i*d,wait:500})}}catch(e){u=!0,c=e}finally{try{o||null==h.return||h.return()}finally{if(u)throw c}}},function(e,t){var n=pi.width/2,r={id:0,x:n,y:60,angle:90,fire:!1};Cf({lap:e,rank:t,hp:4+2*e,x:n,y:60,me:r});var i=!0,s=!1,a=void 0;try{for(var o,u=[[-100,50],[-60,30],[60,30],[100,50]][Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var c=I(o.value),l=c[0],h=c[1];Yi.isFirstEnemy=!0,Df({lap:e,rank:t,hp:2+e,parent:r,angle:l,dist:h})}}catch(e){s=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(s)throw a}}},function(e,t){var n=e>0?1:0,r=4+2*n,i=25-9*n,s=Yi.playerPos.x<pi.width/2?-1:1,a=(pi.width-(r-1)*i*s)/2,o=pi.height-50,u=!0,c=!1,l=void 0;try{for(var h,d=re(r)[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){var f=h.value;Lf({lap:e,rank:t,hp:1,x:a+f*i*s,y:o,wait:300})}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}},function(e,t){var n=4+2*(e>0?1:0),r=Yi.playerPos.x<pi.width/2?pi.width-30:30,i=pi.height-40,s=!0,a=!1,o=void 0;try{for(var u,c=re(n)[Symbol.iterator]();!(s=(u=c.next()).done);s=!0){u.value;Nf({lap:e,rank:t,hp:1,x:r,y:i,wait:400})}}catch(e){a=!0,o=e}finally{try{s||null==c.return||c.return()}finally{if(a)throw o}}},function(e,t){var n=pi.width/2,r=pi.height-50,i={id:0,x:n,y:r,fire:!1,rapidNo:0};Ff({lap:e,rank:t,hp:4+2*e,x:n,y:r,y2:80,me:i});for(var s=0;s<360;s+=90)Yi.isFirstEnemy=!0,Uf({lap:e,rank:t,hp:2+e,parent:i,angle:s-45,dist:50})},function(e,t){var n=e>0?1:0,r=4+2*n,i=20-4*n,s=Yi.playerPos.x<pi.width/2?pi.width-i:i,a=Yi.playerPos.x<pi.width/2?-1:1,o=!0,u=!1,c=void 0;try{for(var l,h=re(r)[Symbol.iterator]();!(o=(l=h.next()).done);o=!0){var d=l.value;Af({lap:e,rank:t,hp:1,x:s+d*i*a,y:80,wait:600})}}catch(e){u=!0,c=e}finally{try{o||null==h.return||h.return()}finally{if(u)throw c}}},function(e,t){var n=4+2*(e>0?1:0),r=Yi.playerPos.x<pi.width/2?pi.width-30:30,i=!0,s=!1,a=void 0;try{for(var o,u=re(n)[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var c=o.value;Mf({lap:e,rank:t,hp:1,x:r,y:50,wait:400,no:c})}}catch(e){s=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(s)throw a}}},function(e,t){for(var n=pi.width/2,r={id:0,history:[{x:n,y:100,bullets:null}]},i=4;0<i;i--)Yi.isFirstEnemy=!0,jf({lap:e,rank:t,hp:2+e,x:n,y:100,parent:r,no:i});Vf({lap:e,rank:t,hp:4+2*e,x:n,y:100,me:r})},function(e,t){var n=e>0?1:0,r=4+2*n,i=20-4*n,s=Yi.playerPos.x<pi.width/2?30:pi.width-30,a=!0,o=!1,u=void 0;try{for(var c,l=re(r)[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var h=c.value;Pf({lap:e,rank:t,hp:1,x:s,y:50+h*i,y2:pi.height-40,wait:400})}}catch(e){o=!0,u=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw u}}},function(e,t){var n=2+2*(e>0?1:0),r=2===n?180:90,i=pi.width/2,s=90*Ri.nextInt(4)+45,a=!0,o=!1,u=void 0;try{for(var c,l=re(n)[Symbol.iterator]();!(a=(c=l.next()).done);a=!0){var h=c.value;Rf({lap:e,rank:t,hp:1,x:i,y:130,wait:500,angle:s-r*h})}}catch(e){o=!0,u=e}finally{try{a||null==l.return||l.return()}finally{if(o)throw u}}},function(e,t){var n=pi.width/2,r=!0,i=!1,s=void 0;try{for(var a,o=[0,180][Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var u=a.value;Yi.isFirstEnemy=!0,Bf({lap:e,rank:t,hp:4+2*e,x:n,y:135,angle:u})}}catch(e){i=!0,s=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw s}}}],qf=function(e){var t=function(t,n,r,i,s,a){var o=Ai.from(s).loopStart().to(-s,a).to(s,a).loopEnd().start(),u=80*i;return function(){u+=i*e;var s=Math.abs(Math.floor(o.value)),a=Math.sign(o.value),c=Math.floor(pi.width/2-t/2+s/2),l=Math.floor(pi.width/2+t/2-s/2);pi.save(),pi.opacity(r),pi.drawRect(c,0,l-c,pi.height,Ji.main),pi.translate(0,Math.floor(u%(2*n)));var h=!0,d=!1,f=void 0;try{for(var p,m=[[c,-1],[l,1]][Symbol.iterator]();!(h=(p=m.next()).done);h=!0){var v=I(p.value),y=v[0],g=v[1],w=a;pi.save();for(var b=2*-n;b<pi.height+n/2;b+=n)pi.save(),pi.translate(y,b),pi.scale(g,w),pi.drawSprite(Pi.bg,0,0,s,n),pi.restore(),w=-w;pi.restore()}}catch(e){d=!0,f=e}finally{try{h||null==m.return||m.return()}finally{if(d)throw f}}pi.restore()}},n=[t(100,80,.07,3,16,4e3),t(105,120,.06,2.4,24,4500),t(110,160,.05,1.8,32,5e3)];return function(){n.forEach((function(e){return e()}))}},$f=function(e){var t=void 0,n=0,r=60*fi.fps,i=0,s=!1,a=0;if(e){Zi("".concat(e.mode,"_replay"),{replay_id:e.id});var o=Je(function(e){var t=[],n=0,r=!0,i=!0,s=!1,a=void 0;try{for(var o,u=e[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var c=o.value,l=Ge.indexOf(c);if(l<0)throw Error("invalid string");r&&16&l&&(n=-1),r=!1,n=n<<5|31&l,0==(32&l)&&(t.push(n),n=0,r=!0)}}catch(e){s=!0,a=e}finally{try{i||null==u.return||u.return()}finally{if(s)throw a}}return t}(e.log));Ri.seed=e.seed,xi.forEach((function(e,t){e.log=o[t]||[],e.playLog()}))}else{Zi("".concat(Yi.mode,"_play")),i=Ri.updateSeed();var u=!0,c=!1,l=void 0;try{for(var h,d=xi[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){h.value.recLog()}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}}var f,p={},m=Rt.of(function(e){var t={},n=0,r="ex"===e?2:0,i=0;t.statusInitIn=function(){Wf[0](n,r)},t.timeStart=function(){i=0},t.enemyDestroy=function(){i--},t.timeUp=function(){Rt.remove(s)},Yi.isFirstEnemy=!0,Yi.enemyWaveId=0,i=1;var s=function(){if(mi.subscribe(t),i<=0){i=Mi.enemyNotice.size;var e=++Yi.enemyWaveId%Wf.length;Yi.isFirstEnemy=!0,Wf[e](n,r),e===Wf.length-1&&(n++,r=Math.min(r+1,2))}};return s}(null!==(f=null==e?void 0:e.mode)&&void 0!==f?f:Yi.mode)),v=Ai.from(0).wait(1e3).on((function(){e&&Mi.ui.add(function(){var e={timeUp:function(){Rt.remove(t)}},t=function(){mi.subscribe(e),pi.drawSprite(Jd,ie(pi,Jd),40)};return t}()),mi.emit("timeStart"),Ki.play.play()})),y=Ai.from(Ji.base).loopStart((function(){return r>0})).to(C.blend(Ji.white,Ji.accent,.1),500).to(C.blend(Ji.white,Ji.main,.1),500).loopEnd().to(Ji.base,500).start(!1),g=Ai.from({x:0,y:0}).to({x:1,y:-1},20).to({x:-1,y:1},40).to({x:1,y:1},40).to({x:-1,y:-1},40).to({x:0,y:0}),w=Ai.from({x:0,y:0}).to({x:2,y:-2},20).to({x:-2,y:2},40).to({x:2,y:2},40).to({x:-2,y:-2},40).to({x:1,y:-1},40).to({x:-1,y:1},40).to({x:1,y:1},40).to({x:-1,y:-1},40).to({x:0,y:0});p.statusInitIn=function(){Mi.ui.add(function(){var e={},t=Ai.from(-100).wait(100).to(44).to(54,300,Ft.outSine).wait(600).on((function(){Rt.remove(n)})).start();e.timeUp=function(){t.start()};var n=function(){mi.subscribe(e),pi.drawSprite(Yd,ie(pi,Yd),t.value)};return n}()),v.start()},p.enemyTake=function(e){s||e.large&&w.start()},p.playerDestroy=function(){s||(e||Zi("".concat(Yi.mode,"_dead"),{time:r,wave_id:Yi.enemyWaveId-1}),g.start(),a++)},p.statusFinOut=function(){Ai.from(0).wait(200).on((function(){Mi.ui.add(Kd(n,t))})).wait(300).on((function(){Ki.result.play(),Ki.play.stop()})).start()},p.sceneChange=function(){r>0&&!e&&Zi("".concat(Yi.mode,"_reset"),{time:r,wave_id:Yi.enemyWaveId-1,dead_count:a})};var b=Bd();return Mi.ui.add((function(){return b(n,Yi.heart,r)})),Mi.player.add(uf(Boolean(e))),Mi.bg.add(qf(1)),Yi.heart=0,Yi.heartRate=0,Yi.isSuccess=!1,Yi.clearing.reset(),function(){if(mi.subscribe(p),v.done&&r--,0<=r&&r%fi.fps==0&&(n+=10*Yi.heart,Yi.isSuccess=1e6<=n),0===r){e||Zi("".concat(Yi.mode,"_finish"),{wave_id:Yi.enemyWaveId-1,dead_count:a}),s=!0,mi.emit("timeUp"),Mi.ui.add(function(){var e={},t=Ai.from(54).to(44,300,Ft.outSine).start();e.timeUp=function(){t.start()},e.newRecordShow=function(){Rt.remove(n)};var n=function(){mi.subscribe(e),pi.drawSprite(Xd,ie(pi,Xd),t.value)};return n}());var o=!0,u=!1,c=void 0;try{for(var l,h=xi[Symbol.iterator]();!(o=(l=h.next()).done);o=!0){l.value.endLog()}}catch(e){u=!0,c=e}finally{try{o||null==h.return||h.return()}finally{if(u)throw c}}e||(t=oe.from(function(e){return cd.apply(this,arguments)}({version:0,log:Ke(Ye.apply(void 0,S(xi.map((function(e){return e.log}))))),score:n,seed:i,mode:Yi.mode})))}(null==t?void 0:t.isResolved())&&gd(t.value.replayId),pi.save(),Yi.isSuccess&&y.update(),pi.drawRect(0,0,pi.width,pi.height,y.value),w.running?pi.translate(w.value.x,w.value.y):g.running&&pi.translate(g.value.x,g.value.y),m.run(),Mi.bg.run(),Mi.effectBack.run(),Mi.enemyNotice.run(),Mi.player.run(),Mi.playerBullet.run(),Mi.effectOverPlayer.run(),Mi.enemy.run(),Mi.enemyBullet.run(),Mi.effectOverEnemy.run(),pi.restore(),Mi.ui.run()}},Hf=function(){var e,t,n,r,i=yd(),s=i?oe.from(function(e){return Dh.apply(this,arguments)}(i)):void 0,a=function(){var t;return"ex"===(null!==(e=null==s||null===(t=s.value)||void 0===t?void 0:t.mode)&&void 0!==e?e:Yi.mode)},o=C.blend(Ji.white,Ji.accent,.1),u=!1;Mi.ui.add(_d(s),function(e){var t=Ai.from(!1).wait(1300).on((function(){var t;return!e||0===(null===(t=e.value)||void 0===t?void 0:t.version)})).loopStart().to(!0,800).to(!1,400).loopEnd().start();return function(){t.value&&pi.drawSprite(Dd,ie(pi,Dd),215)}}(s),(t=Ai.from(!1).to(!0,100).to(!1),n="true"===localStorage.getItem("mute"),r=function(){n=!n,localStorage.setItem("mute",String(n)),Object.values(zi).forEach((function(e){return e.setMute(n)})),Object.values(Ki).forEach((function(e){return e.setMute(n)})),t.start(),zi.uiButton.play()},function(){var e,i=Id[n?1:0],s=(e=i,pi.width-e.width-7);gi.onDown(i.toBox(s,7),r),pi.drawSprite(i,s,7),t.value&&(pi.save(),pi.opacity(.5),pi.drawSprite(Sd,s,7),pi.restore())})),s?Mi.ui.add(function(){var e=Ai.from(!1).to(!0,100).to(!1).on((function(){mi.emit("sceneChange",(function(){return gd(""),Hf()}))})),t=function(){e.started||(e.start(),zi.uiButton.play())};return function(){gi.onDown(Nd.toBox(7,7),t),pi.drawSprite(Nd,7,7),e.value&&(pi.save(),pi.opacity(.5),pi.drawSprite(Cd,7,7),pi.restore())}}(),function(e){var t=Ai.from(0).wait(500).start(),n=Ai.from(0).wait(100),r=Ld;e.then((function(e){if(!e)throw Error("replay is not found");if(0!==e.version)throw Error("invalid replay version");r=Pd,n.to(e.score,300,Ft.inSine).start(!1)}));var i=xd(115,74,"REPLAY"),s=Od(3,16);return function(){t.done&&(pi.save(),i((function(e){pi.translate(e.x,e.y),s(n.update().value),pi.drawSprite(r,ie(e,Ld),46)})),pi.restore())}}(s)):Mi.ui.add(function(){var e=function(){var e=new URLSearchParams({text:"#FireShooterSan\n".concat(fd())});window.open("https://twitter.com/intent/tweet?".concat(e))};return function(){gi.onDown(kd.toBox(7,7),e),pi.drawSprite(kd,7,7)}}(),function(){var e,t=Number(null!==(e=localStorage.getItem("tips-no"))&&void 0!==e?e:-1);t=(t+1)%12,localStorage.setItem("tips-no",String(t));var n=Ad[t];11===t&&Zi("tips_complete");var r=Ai.from(0).wait(700).start(),i=Ai.from(!1).loopStart().to(!1,800).to(!0,800).loopEnd().start(!1),s=Ai.from(!1).loopStart().to(!1,200).to(!0,200).loopEnd().start(!1),a=xd(130,Math.max(n.height+12,60),"TIPS ".concat(t+1,"/").concat(12));return function(){r.done&&a((function(e){pi.save(),pi.translate(e.x+ie(e,n)|0,e.y+function(e,t){return(e.height-t.height)/2}(e,n)|0),pi.drawSprite(n),i.update(),s.update(),0===t&&s.value&&pi.drawSprite(Ad.million,39,32),1===t&&s.value&&pi.drawRect(90,18,2,2,Ji.white),1===t&&i.value&&pi.drawSprite(Ad.arrow,63,16),2===t&&i.value&&pi.drawSprite(Ad.heart,0,16),3===t&&i.value&&(pi.drawSprite(Ad.heart,41,1),pi.drawSprite(Ad.heart,40,31)),4===t&&i.value&&pi.drawSprite(Ad.heart,41,31),5===t&&i.value&&(pi.drawSprite(Ad.heart,51,1),pi.drawSprite(Ad.score,40,17)),6===t&&s.value&&pi.drawSprite(Ad.million,0,2),10===t&&i.value&&pi.drawSprite(Ad.user,0,14),pi.restore()}))}}()),Mi.bg.add(qf(.3)),Object.values(Ki).forEach((function(e){return e.stop()})),Ji.base=a()?o:Ji.white;var c=Ai.from(Ji.base),l=a();return function(){var e;if(l!==a()&&(l=a(),Ji.base=a()?o:Ji.white,c.end(),c=Ai.from(c.value).to(Ji.base,300).start()),!u&&(!s||0===(null===(e=s.value)||void 0===e?void 0:e.version))&&Ei.some((function(e){return e.isDownChange}))){u=!0;Mi.ui.add(zd({times:2,onEnd:function(){mi.emit("sceneChange",(function(){return $f(null==s?void 0:s.value)}))}})),zi.titleStart.play()}pi.drawRect(0,0,pi.width,pi.height,c.value),Mi.bg.run(),Mi.ui.run()}};var zf,Gf={},Kf=Hf,Yf=Kf(),Jf=Ai.from(0).wait(100).to(pi.height,200).start(),Xf=Ai.from(-pi.height).to(0,200).on((function(){Ai.clear(),xi.forEach((function(e){return e.endLog()})),Object.values(Mi).forEach((function(e){return e.clear()})),Yf=Kf(),Jf.start()}));Gf.sceneChange=function(e){Kf=e,Xf.start()},dd=function(){return mi.emit("sceneChange",Hf)},zf="true"===localStorage.getItem("mute"),Object.values(zi).forEach((function(e){return e.setMute(zf)})),Object.values(Ki).forEach((function(e){return e.setMute(zf)})),Yi.mode=pd(),fi.proc=function(){pi.clear(),mi.clear(),vi.clear(),Object.values(yi).forEach((function(e){return e.update()})),gi.update(),Object.values(wi).forEach((function(e){return e.update()})),Object.values(bi).forEach((function(e){return e.update()})),Ai.update(),mi.subscribe(Gf),Ti.some((function(e){return e.isDownChange}))&&!Xf.running&&mi.emit("sceneChange",(function(){return gd(""),Hf()})),Yf();var e=[Jf,Xf].find((function(e){return e.running}));e&&pi.drawRect(0,e.value,pi.width,pi.height,Ji.base)}}();