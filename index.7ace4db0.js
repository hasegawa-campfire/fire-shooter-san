!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequirebae0;function s(e,t,n,r,i,a,s){try{var o=e[a](s),u=o.value}catch(e){return void n(e)}o.done?t(u):Promise.resolve(u).then(r,i)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){s(a,r,i,o,u,"next",e)}function u(e){s(a,r,i,o,u,"throw",e)}o(void 0)}))}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e).value}function l(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");var r=t.get(e);if(!r.writable)throw new TypeError("attempted to set read only private field");return r.value=n,n}function h(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){return m(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}function b(e,t){return!t||"object"!=((n=t)&&n.constructor===Symbol?"symbol":typeof n)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t;var n}function _(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||_(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function I(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||_(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequirebae0=a),a.register("iiiWY",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("iiiWY").register(JSON.parse('{"6iZMW":"index.7ace4db0.js","eTB8B":"image.cb6b04ad.png","aMV2A":"sonohoka_pyokottohaeru.ebb39909.wav","aIeDX":"hit_kyouda4.c2fae92b.wav","jzkA8":"se_etc_003.751a5cc1.wav","6uV70":"se_shot_003.7192b630.wav","eMTjg":"kaminarikei_chisaikaminari.a1aac738.wav","akrbZ":"wind3.87bf4484.wav","kNbWg":"cancel2.e1adafec.wav","8cvlD":"shoot9.2235e996.wav","f1UVR":"mamono_tsukon2.40b037d7.wav","KfNtP":"se_powerup_004.fb62fc04.wav","b5Tfb":"se_powerup_008.fd5e1090.wav","33mfn":"souchi_kaifukusouchi.b8152e4c.wav","9WYf8":"hit_tsujou3.4da24c3a.wav","a5LcI":"audiostock_49758.e0483042.mp3","2lEye":"audiostock_49543.c0017692.mp3"}'));var S=new WeakSet,T=function(){"use strict";function e(t){var n=t.fps,r=this,i=this;u(this,e),E.set(this,{writable:!0,value:void 0}),p(this,"proc",null),x.set(this,{writable:!0,value:0}),A.set(this,{writable:!0,value:0}),R.set(this,{writable:!0,value:0}),S.add(this),O.set(this,{writable:!0,value:function(){var e,t;l(r,A,window.requestAnimationFrame(c(r,O))),l(r,R,1+ +c(r,R));var n=Date.now();n-c(r,x)<.8*r.frameTime||(l(r,x,n),null===(t=(e=r).proc)||void 0===t||t.call(e))}}),l(this,E,n),h(this,S,P).call(this),document.addEventListener("visibilitychange",(function(){return h(i,S,P).call(i)}))}return f(e,[{key:"fps",get:function(){return c(this,E)}},{key:"time",get:function(){return 1e3*c(this,R)/this.fps}},{key:"frameTime",get:function(){return 1e3/c(this,E)}}]),e}(),E=new WeakMap,x=new WeakMap,A=new WeakMap,R=new WeakMap,O=new WeakMap;function P(){window.cancelAnimationFrame(c(this,A)),"visible"===document.visibilityState&&l(this,A,window.requestAnimationFrame(c(this,O)))}var M=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$|^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,L={},N=function(){"use strict";function e(t){var n,r,i,a,s=void 0===t?{}:t;u(this,e),C.set(this,{writable:!0,value:void 0}),D.set(this,{writable:!0,value:void 0}),U.set(this,{writable:!0,value:void 0}),F.set(this,{writable:!0,value:void 0}),V.set(this,{writable:!0,value:""}),l(this,C,null!==(n=s.red)&&void 0!==n?n:0),l(this,D,null!==(r=s.green)&&void 0!==r?r:0),l(this,U,null!==(i=s.blue)&&void 0!==i?i:0),l(this,F,null!==(a=s.alpha)&&void 0!==a?a:1)}return f(e,[{key:"red",get:function(){return c(this,C)},set:function(e){l(this,C,e),l(this,V,"")}},{key:"green",get:function(){return c(this,D)},set:function(e){l(this,D,e),l(this,V,"")}},{key:"blue",get:function(){return c(this,U)},set:function(e){l(this,U,e),l(this,V,"")}},{key:"alpha",get:function(){return c(this,F)},set:function(e){l(this,F,e),l(this,V,"")}},{key:"toString",value:function(){return c(this,V)||l(this,V,"#"+j(c(this,C))+j(c(this,D))+j(c(this,U))+j(c(this,F))),c(this,V)}},{key:"opacity",value:function(t){var n=new e(this);return n.alpha=Math.min(Math.max(0,c(this,F)*t),1),n}}],[{key:"parse",value:function(t){var n=L[t];if(!n){var r=t.match(M)||[];n=L[t]={red:parseInt(r[1]||r[5]+r[5]||"0",16)/255,green:parseInt(r[2]||r[6]+r[6]||"0",16)/255,blue:parseInt(r[3]||r[7]+r[7]||"0",16)/255,alpha:parseInt(r[4]||r[8]+r[8]||"ff",16)/255}}return new e(n)}},{key:"blend",value:function(t,n,r){var i=void 0===r?.5:r;return new e({red:(n.red-t.red)*i+t.red,green:(n.green-t.green)*i+t.green,blue:(n.blue-t.blue)*i+t.blue,alpha:(n.alpha-t.alpha)*i+t.alpha})}}]),e}(),C=new WeakMap,D=new WeakMap,U=new WeakMap,F=new WeakMap,V=new WeakMap;function j(e){return Math.min(Math.max(0,Math.floor(255*e)),255).toString(16).padStart(2,"0")}var B={},W=function(){"use strict";function e(t,n){var r=void 0===n?{}:n;u(this,e),q.set(this,{writable:!0,value:void 0}),this.image=t,l(this,q,w({},r))}return f(e,[{key:"x",get:function(){var e;return null!==(e=c(this,q).x)&&void 0!==e?e:0}},{key:"y",get:function(){var e;return null!==(e=c(this,q).y)&&void 0!==e?e:0}},{key:"width",get:function(){var e;return null!==(e=c(this,q).width)&&void 0!==e?e:this.image.width}},{key:"height",get:function(){var e;return null!==(e=c(this,q).height)&&void 0!==e?e:this.image.height}},{key:"originX",get:function(){var e;return null!==(e=c(this,q).originX)&&void 0!==e?e:0}},{key:"originY",get:function(){var e;return null!==(e=c(this,q).originY)&&void 0!==e?e:0}},{key:"originLeft",get:function(){return this.originX}},{key:"originTop",get:function(){return this.originY}},{key:"originRight",get:function(){return this.width-this.originX}},{key:"originBottom",get:function(){return this.height-this.originY}},{key:"sub",value:function(t){var n,r,i,a,s,o,u=w({},c(this,q));return void 0!==t.x&&(u.x=t.x+(null!==(n=u.x)&&void 0!==n?n:0)),void 0!==t.y&&(u.y=t.y+(null!==(r=u.y)&&void 0!==r?r:0)),void 0!==t.width&&(u.width=t.width+(null!==(i=u.width)&&void 0!==i?i:0)),void 0!==t.height&&(u.height=t.height+(null!==(a=u.height)&&void 0!==a?a:0)),void 0!==t.originX&&(u.originX=t.originX+(null!==(s=u.originX)&&void 0!==s?s:0)),void 0!==t.originY&&(u.originY=t.originY+(null!==(o=u.originY)&&void 0!==o?o:0)),new e(this.image,u)}},{key:"toBox",value:function(e,t){return{x:e,y:t,width:this.width,height:this.height,originX:this.originX,originY:this.originY}}}],[{key:"load",value:function(t,n){var r=void 0===n?{}:n,i=t instanceof URL?t.href:t,a=B[i];return a||((a=B[i]=new Image).src=i),new e(a,r)}},{key:"loadMap",value:function(t,n){var r=function(n){if(Array.isArray(n)){var i=k(n),a=i[0],s=i[1],o=i[2],u=i[3],c=i[4],l=i[5];return e.load(t,{x:a,y:s,width:o,height:u,originX:null!=c?c:0,originY:null!=l?l:0})}var h=Object.entries(n).map((function(e){var t=k(e),n=t[0],i=t[1];return[n,r(i)]}));return Object.fromEntries(h)};return r(n)}}]),e}(),q=new WeakMap,$={normal:"source-over",add:"lighter",multiply:"multiply",screen:"screen",overlay:"overlay"},H=new WeakSet,z=function(){"use strict";function e(t){var n=t.width,r=t.height,i=t.el,a=this,s=this;u(this,e),p(this,"width",void 0),p(this,"height",void 0),p(this,"canvas",void 0),G.set(this,{writable:!0,value:void 0}),H.add(this);var o="string"==typeof i?document.querySelector(i):i;if(!(o&&o instanceof HTMLCanvasElement))throw Error("not canvas element");this.canvas=o,this.width=o.width=n,this.height=o.height=r,o.setAttribute("style","\n  image-rendering: pixelated;\n  image-rendering: crisp-edges;\n  touch-action: none;\n");var c=o.getContext("2d");if(!c)throw Error("none context2d");l(this,G,c),c.imageSmoothingEnabled=!1,window.addEventListener("resize",(function(){return h(a,H,K).call(a)})),window.setTimeout((function(){return h(s,H,K).call(s)}),1)}return f(e,[{key:"clear",value:function(){c(this,G).setTransform(1,0,0,1,0,0),c(this,G).clearRect(0,0,this.canvas.width,this.canvas.height)}},{key:"save",value:function(){c(this,G).save()}},{key:"restore",value:function(){c(this,G).restore()}},{key:"getMatrix",value:function(){return c(this,G).getTransform()}},{key:"drawSprite",value:function(e,t,n,r,i){e.image.complete&&(r=null!=r?r:e.width,i=null!=i?i:e.height,t=(null!=t?t:0)-e.originX*(r/e.width),n=(null!=n?n:0)-e.originY*(i/e.height),c(this,G).drawImage(e.image,e.x,e.y,e.width,e.height,Math.floor(t),Math.floor(n),Math.floor(r),Math.floor(i)))}},{key:"drawText",value:function(e,t,n,r,i){var a=void 0===i?1:i,s=0,o=!0,u=!1,c=void 0;try{for(var l,h=t[Symbol.iterator]();!(o=(l=h.next()).done);o=!0){var d,f=l.value;if(" "!==f){var p,m=null!==(p=null===(d=e[f])||void 0===d?void 0:d.width)&&void 0!==p?p:0;m&&(s&&(s+=a),this.drawSprite(e[f],n+s,r),s+=m)}else s&&(s+=a),s+=1}}catch(e){u=!0,c=e}finally{try{o||null==h.return||h.return()}finally{if(u)throw c}}}},{key:"measuretext",value:function(e,t,n){var r=void 0===n?1:n,i=0,a=!0,s=!1,o=void 0;try{for(var u,c=t[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l,h=u.value;if(" "!==h){var d,f=null!==(d=null===(l=e[h])||void 0===l?void 0:l.width)&&void 0!==d?d:0;f&&(i&&(i+=r),i+=f)}else i&&(i+=r),i+=1}}catch(e){s=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(s)throw o}}return i}},{key:"drawRect",value:function(e,t,n,r,i){c(this,G).fillStyle=String(i),c(this,G).fillRect(e,t,n,r)}},{key:"drawCircle",value:function(e,t,n,r){e=Math.floor(e),t=Math.floor(t),n=Math.floor(n),c(this,G).fillStyle=String(r);var i=c(this,G).fillRect.bind(c(this,G)),a=-n,s=0,o=2-2*n;do{i(e-a,t+s,1,1),i(e-s,t-a,1,1),i(e+a,t-s,1,1),i(e+s,t+a,1,1),(n=o)<=s&&(o+=2*++s+1),(n>a||o>s)&&(o+=2*++a+1)}while(a<0)}},{key:"translate",value:function(e,t){c(this,G).translate(e,t)}},{key:"scale",value:function(e,t){c(this,G).scale(e,null!=t?t:e)}},{key:"rotate",value:function(e){c(this,G).rotate(e*Math.PI/180)}},{key:"opacity",value:function(e){c(this,G).globalAlpha=Math.min(Math.max(e,0),1)}},{key:"blendMode",value:function(e){c(this,G).globalCompositeOperation=$[e]}},{key:"boxToRect",value:function(e){var t=this.getMatrix(),n=e.x-e.originX,r=e.y-e.originY,i=t.transformPoint({x:n,y:r}),a=t.transformPoint({x:n+e.width,y:r}),s=t.transformPoint({x:n+e.width,y:r+e.height}),o=t.transformPoint({x:n,y:r+e.height});return{left:Math.min(i.x,a.x,s.x,o.x),top:Math.min(i.y,a.y,s.y,o.y),right:Math.max(i.x,a.x,s.x,o.x),bottom:Math.max(i.y,a.y,s.y,o.y)}}}]),e}(),G=new WeakMap;function K(){var e=this.canvas.width/window.devicePixelRatio,t=this.canvas.height/window.devicePixelRatio,n=Math.floor(window.innerWidth/e),r=Math.floor(window.innerHeight/t);this.canvas.style.width="".concat(Math.max(Math.min(n,r),1)*e,"px")}var Y={},J=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",o=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,a=Object.create(i.prototype),s=new A(r||[]);return a._invoke=function(e,t,n){var r=h;return function(i,a){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw a;return O()}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var o=T(s,n);if(o){if(o===m)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?p:d,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(e,n,s),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",m={};function v(){}function y(){}function g(){}var w={};u(w,a,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(R([])));_&&_!==n&&r.call(_,a)&&(w=_);var k=g.prototype=v.prototype=Object.create(w);function I(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,a,s,o){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,s,o)}),(function(e){n("throw",e,s,o)})):t.resolve(h).then((function(e){c.value=e,s(c)}),(function(e){return n("throw",e,s,o)}))}o(u.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function T(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function R(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,s=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:O}}function O(){return{value:t,done:!0}}return y.prototype=g,u(k,"constructor",g),u(g,"constructor",y),y.displayName=u(g,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,o,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},I(S.prototype),u(S.prototype,s,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var s=new S(c(t,n,r,i),a);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},I(k),u(k,o,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=R,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return o.type="throw",o.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],o=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var u=r.call(s,"catchLoc"),c=r.call(s,"finallyLoc");if(u&&c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=e,s.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;x(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:R(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(Y);try{regeneratorRuntime=J}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=J:Function("r","regeneratorRuntime = r")(J)}function X(e){return e.toLocaleString("en-US")}function Z(e,t){return Math.atan2(t,e)*(180/Math.PI)}function Q(e){return(e%=360)<0&&(e+=360),e>180&&(e-=360),e}function ee(e,t){var n=void 0===t?1:t,r=e*(Math.PI/180);return{x:Math.cos(r)*n,y:Math.sin(r)*n}}function te(e,t){var n=function(e,t){return Math.sqrt(e*e+t*t)}(e,t);return{x:e/n,y:t/n}}function ne(e){return Array.from({length:e}).map((function(e,t){return t}))}function re(e,t){return(e.width-t.width)/2}var ie="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";function ae(e){var t="",n=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){for(var o=a.value,u=(0<=(o=Math.floor(o))?o:-o-1).toString(2).length+1,c=0,l="";u>0;)l=ie[31&o|c]+l,u-=5,o>>=5,c=32;t+=l}}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return t}function se(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=[],i=!0,a=!1,s=void 0;try{for(var o,u=t[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var c=o.value;r=r.concat(c.length,c)}}catch(e){a=!0,s=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw s}}return r}function oe(e,t){for(var n=[],r=0,i=0;i<t;i++){var a=r+1+e[r];if(e.length<a)throw Error("invalid pack size");n.push(e.slice(r+1,a)),r=a}return n}function ue(e,t){var n=Array.isArray(t)?t:[t];return Promise.race(n.map((function(t){return new Promise((function(n){return e.addEventListener(t,n)}))})))}function ce(e,t,n){return(t-e)*n+e}var le=function(){"use strict";function e(t){var n=this;u(this,e),he.set(this,{writable:!0,value:void 0}),de.set(this,{writable:!0,value:!1}),fe.set(this,{writable:!0,value:void 0}),l(this,he,t),t.then((function(e){l(n,de,!0),l(n,fe,e)}))}return f(e,[{key:"then",value:function(t,n){return new e(c(this,he).then(t,n))}},{key:"isResolved",value:function(){return c(this,de)}},{key:"value",get:function(){return c(this,fe)}}],[{key:"from",value:function(t){return new e("function"==typeof t?t():t)}}]),e}(),he=new WeakMap,de=new WeakMap,fe=new WeakMap,pe=window.webkitAudioContext||window.AudioContext,me=le.from(o(t(Y).mark((function e(){var n,r;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue(document,["touchstart","mousedown","keydown"]);case 2:return n=new pe,r=function(){return"visible"===document.visibilityState?n.resume():n.suspend()},e.next=6,r();case 6:return document.addEventListener("visibilitychange",r),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))),ve=new WeakSet,ye=function(){"use strict";function e(n,r){var i=void 0===r?{}:r;u(this,e);var a=this;ge.set(this,{writable:!0,value:void 0}),we.set(this,{writable:!0,value:1}),be.set(this,{writable:!0,value:void 0}),_e.set(this,{writable:!0,value:void 0}),ke.set(this,{writable:!0,value:void 0}),Ie.set(this,{writable:!0,value:Number.MIN_SAFE_INTEGER}),Se.set(this,{writable:!0,value:void 0}),Te.set(this,{writable:!0,value:void 0}),Ee.set(this,{writable:!0,value:null}),xe.set(this,{writable:!0,value:!0}),ve.add(this);var s,h,d,f,p,m=this;l(this,ge,null!==(s=i.volume)&&void 0!==s?s:1),l(this,be,null!==(h=i.minTime)&&void 0!==h?h:0),l(this,_e,null!==(d=i.loop)&&void 0!==d&&d),l(this,ke,null!==(f=i.mute)&&void 0!==f&&f),l(this,Se,le.from((p=o(t(Y).mark((function e(){var r,i,a;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n instanceof URL?n.href:n);case 2:return r=e.sent,e.next=5,r.arrayBuffer();case 5:return i=e.sent,e.next=8,me;case 8:return a=e.sent,e.abrupt("return",a.decodeAudioData(i));case 10:case"end":return e.stop()}}),e)}))),function(){return p.apply(a,arguments)}))),l(this,Te,le.from(function(){var e=o(t(Y).mark((function e(){var n,r;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me;case 2:return n=e.sent,(r=n.createGain()).gain.value=c(m,ke)?0:c(m,we)*c(m,ge),r.connect(n.destination),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(a,arguments)}}()))}return f(e,[{key:"play",value:function(){var e=this;if(l(this,xe,!0),me.isResolved()&&c(this,Se).isResolved()&&c(this,Te).isResolved()){if(me.value.currentTime-c(this,Ie)>=c(this,be)){var t,n,r;if(null===(t=c(this,Ee))||void 0===t||t.stop(),l(this,Ee,me.value.createBufferSource()),"boolean"==typeof c(this,_e))c(this,Ee).loop=c(this,_e);else c(this,Ee).loop=!0,c(this,Ee).loopStart=null!==(n=c(this,_e).start)&&void 0!==n?n:0,c(this,Ee).loopEnd=null!==(r=c(this,_e).end)&&void 0!==r?r:0;c(this,Ee).buffer=c(this,Se).value,c(this,Ee).connect(c(this,Te).value),c(this,Ee).start(),l(this,Ie,me.value.currentTime)}}else Promise.all([me,c(this,Se),c(this,Te)]).then((function(){c(e,xe)&&e.play()}))}},{key:"stop",value:function(){var e;l(this,xe,!1),null===(e=c(this,Ee))||void 0===e||e.stop(),l(this,Ee,null)}},{key:"setMute",value:function(e){l(this,ke,e),h(this,ve,Ae).call(this)}},{key:"setVolume",value:function(e){l(this,we,e),h(this,ve,Ae).call(this)}}]),e}(),ge=new WeakMap,we=new WeakMap,be=new WeakMap,_e=new WeakMap,ke=new WeakMap,Ie=new WeakMap,Se=new WeakMap,Te=new WeakMap,Ee=new WeakMap,xe=new WeakMap;function Ae(){c(this,Te).isResolved()&&(c(this,Te).value.gain.value=c(this,ke)?0:c(this,we)*c(this,ge))}var Re=function(e){"use strict";function t(e,n,r){return u(this,t),b(this,v(t).call(this,e,{volume:n,minTime:r}))}return g(t,e),t}(ye),Oe=function(e){"use strict";function t(e,n,r){return u(this,t),b(this,v(t).call(this,e,{volume:n,loop:r}))}return g(t,e),t}(ye),Pe=function(){"use strict";function e(){u(this,e),Me.set(this,{writable:!0,value:new Set}),Le.set(this,{writable:!0,value:new Set})}return f(e,[{key:"clear",value:function(){c(this,Me).clear(),c(this,Le).clear()}},{key:"subscribe",value:function(e){var t,n=!0,r=!1,i=void 0;try{for(var a,s=c(this,Le)[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var o=a.value;null===(t=e[o.type])||void 0===t||t.call(e,o.data)}}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}c(this,Me).add(e)}},{key:"emit",value:function(e,t){var n,r=!0,i=!1,a=void 0;try{for(var s,o=c(this,Me)[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var u=s.value;null===(n=u[e])||void 0===n||n.call(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}c(this,Le).add({type:e,data:t})}}]),e}(),Me=new WeakMap,Le=new WeakMap,Ne=function(){"use strict";function e(t){u(this,e),Ce.set(this,{writable:!0,value:void 0}),De.set(this,{writable:!0,value:[]}),l(this,Ce,t),l(this,De,[])}return f(e,[{key:"clear",value:function(){l(this,De,[])}},{key:"emit",value:function(e,t,n,r){var i=c(this,Ce).boxToRect(n),a=!0,s=!1,o=void 0;try{for(var u,l=c(this,De)[Symbol.iterator]();!(a=(u=l.next()).done);a=!0){var h=u.value,d=h.type,f=h.data,p=h.rect,m=h.eventMap[e],v=r[d];(m||v)&&i.left<p.right&&p.left<i.right&&i.top<p.bottom&&p.top<i.bottom&&(null==m||m(t),null==v||v(f))}}catch(e){s=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(s)throw o}}c(this,De).push({type:e,data:t,rect:i,eventMap:r})}}]),e}(),Ce=new WeakMap,De=new WeakMap,Ue=[" ","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"];function Fe(e){return e instanceof HTMLElement&&!!e.closest("input, textarea, select, button")}window.addEventListener("keydown",(function(e){Ue.includes(e.key)&&!Fe(e.target)&&e.preventDefault()}));var Ve={};window.addEventListener("keydown",(function(e){Fe(e.target)||(Ve[e.key.toLocaleLowerCase()]=!0)})),window.addEventListener("keyup",(function(e){Fe(e.target)||(Ve[e.key.toLocaleLowerCase()]=!1)})),window.addEventListener("blur",(function(){Ve={}}));var je=function(){"use strict";function e(t){u(this,e),Be.set(this,{writable:!0,value:void 0}),We.set(this,{writable:!0,value:!1}),qe.set(this,{writable:!0,value:!1}),$e.set(this,{writable:!0,value:0}),He.set(this,{writable:!0,value:[]}),ze.set(this,{writable:!0,value:0}),Ge.set(this,{writable:!0,value:"pause"}),l(this,Be,(Array.isArray(t)?t:[t]).map((function(e){return e.toLocaleLowerCase()})))}return f(e,[{key:"update",value:function(){l(this,qe,c(this,We)),"play"===c(this,Ge)?(l(this,$e,1+ +c(this,$e)),c(this,He)[c(this,ze)]<c(this,$e)&&(l(this,We,!c(this,We)),l(this,$e,0),l(this,ze,1+ +c(this,ze)))):(l(this,We,c(this,Be).some((function(e){return Ve[e]}))),l(this,$e,c(this,We)===c(this,qe)?c(this,$e)+1:0)),"rec"===c(this,Ge)&&(c(this,We)===c(this,qe)?c(this,He)[c(this,He).length-1]=c(this,$e):c(this,He).push(c(this,$e)))}},{key:"isDown",get:function(){return c(this,We)}},{key:"isDownChange",get:function(){return c(this,We)&&!c(this,qe)}},{key:"isUpChange",get:function(){return!c(this,We)&&c(this,qe)}},{key:"downCount",get:function(){return c(this,We)?c(this,$e):NaN}},{key:"upCount",get:function(){return c(this,We)?NaN:c(this,$e)}},{key:"logMode",get:function(){return c(this,Ge)}},{key:"log",get:function(){return c(this,He).slice()},set:function(e){l(this,He,e.slice()),l(this,Ge,"pause")}},{key:"recLog",value:function(){l(this,He,[c(this,$e),c(this,qe)?1:0,c(this,We)?1:0,c(this,$e)]),l(this,Ge,"rec")}},{key:"playLog",value:function(){l(this,$e,c(this,He)[0]),l(this,qe,Boolean(c(this,He)[1])),l(this,We,Boolean(c(this,He)[2])),l(this,ze,3),l(this,Ge,"play")}},{key:"endLog",value:function(){l(this,Ge,"pause")}}]),e}(),Be=new WeakMap,We=new WeakMap,qe=new WeakMap,$e=new WeakMap,He=new WeakMap,ze=new WeakMap,Ge=new WeakMap;window.addEventListener("contextmenu",(function(e){return e.preventDefault()}));var Ke=null,Ye={x:0,y:0};window.addEventListener("pointerdown",(function(e){Ke=e.target,Ye.x=e.clientX,Ye.y=e.clientY})),window.addEventListener("pointerup",(function(e){Ke=null})),window.addEventListener("pointercancel",(function(e){Ke=null})),window.addEventListener("pointermove",(function(e){Ye.x=e.clientX,Ye.y=e.clientY})),window.addEventListener("blur",(function(){Ke=null}));var Je=function(){"use strict";function e(t){var n=this;u(this,e),Ce.set(this,{writable:!0,value:void 0}),We.set(this,{writable:!0,value:!1}),qe.set(this,{writable:!0,value:!1}),$e.set(this,{writable:!0,value:0}),Xe.set(this,{writable:!0,value:0}),Ze.set(this,{writable:!0,value:0}),Qe.set(this,{writable:!0,value:0}),et.set(this,{writable:!0,value:0}),tt.set(this,{writable:!0,value:0}),nt.set(this,{writable:!0,value:0}),He.set(this,{writable:!0,value:[]}),ze.set(this,{writable:!0,value:0}),rt.set(this,{writable:!0,value:[]}),it.set(this,{writable:!0,value:0}),at.set(this,{writable:!0,value:[]}),st.set(this,{writable:!0,value:0}),Ge.set(this,{writable:!0,value:"pause"}),ot.set(this,{writable:!0,value:[]}),ut.set(this,{writable:!0,value:!1}),l(this,Ce,t);var r=c(this,Ce).canvas;r.addEventListener("pointerdown",(function(e){var t=r.getBoundingClientRect(),i=Math.floor((e.clientX-t.x)*r.width/t.width),a=Math.floor((e.clientY-t.y)*r.height/t.height),s=!0,o=!1,u=void 0;try{for(var h,d=c(n,ot)[Symbol.iterator]();!(s=(h=d.next()).done);s=!0){var f=h.value,p=f.rect,m=f.callback;p.left<=i&&i<p.right&&p.top<=a&&a<p.bottom&&(l(n,ut,!0),m())}}catch(e){o=!0,u=e}finally{try{s||null==d.return||d.return()}finally{if(o)throw u}}}))}return f(e,[{key:"update",value:function(){l(this,ot,[]);var e=c(this,Ce).canvas;Ke instanceof Node||l(this,ut,!1),l(this,qe,c(this,We));var t=c(this,Qe),n=c(this,et);if("play"===c(this,Ge))l(this,$e,1+ +c(this,$e)),c(this,He)[c(this,ze)]<c(this,$e)&&(l(this,We,!c(this,We)),l(this,$e,0),l(this,ze,1+ +c(this,ze))),l(this,tt,1+ +c(this,tt)),l(this,nt,1+ +c(this,nt)),c(this,rt)[c(this,it)]<c(this,tt)&&(l(this,tt,0),l(this,it,c(this,it)+2),l(this,Qe,c(this,rt)[c(this,it)-1]||0)),c(this,at)[c(this,st)]<c(this,nt)&&(l(this,nt,0),l(this,st,c(this,st)+2),l(this,et,c(this,at)[c(this,st)-1]||0)),l(this,Xe,c(this,Xe)+c(this,Qe)),l(this,Ze,c(this,Ze)+c(this,et));else{l(this,We,!c(this,ut)&&Ke instanceof Node&&e.contains(Ke)),l(this,$e,c(this,We)===c(this,qe)?c(this,$e)+1:0);var r=c(this,Xe),i=c(this,Ze),a=e.getBoundingClientRect();l(this,Xe,Math.floor((Ye.x-a.x)*(e.width/a.width))),l(this,Ze,Math.floor((Ye.y-a.y)*(e.height/a.height))),l(this,Qe,c(this,Xe)-r),l(this,et,c(this,Ze)-i),l(this,tt,c(this,Qe)===t?c(this,tt)+1:0),l(this,nt,c(this,et)===n?c(this,nt)+1:0)}"rec"===c(this,Ge)&&(c(this,We)===c(this,qe)?c(this,He)[c(this,He).length-1]=c(this,$e):c(this,He).push(c(this,$e)),c(this,Qe)===t?c(this,rt)[c(this,rt).length-1]=c(this,tt):c(this,rt).push(c(this,Qe),c(this,tt)),c(this,et)===n?c(this,at)[c(this,at).length-1]=c(this,nt):c(this,at).push(c(this,et),c(this,nt))),c(this,We)&&!c(this,qe)&&(l(this,Qe,0),l(this,et,0))}},{key:"isDown",get:function(){return c(this,We)}},{key:"isDownChange",get:function(){return c(this,We)&&!c(this,qe)}},{key:"isUpChange",get:function(){return!c(this,We)&&c(this,qe)}},{key:"downCount",get:function(){return c(this,We)?c(this,$e):NaN}},{key:"upCount",get:function(){return c(this,We)?NaN:c(this,$e)}},{key:"pos",get:function(){return{x:c(this,Xe),y:c(this,Ze)}}},{key:"vec",get:function(){return{x:c(this,Qe),y:c(this,et)}}},{key:"onDown",value:function(e,t){var n=c(this,Ce).boxToRect(e);c(this,ot).push({rect:n,callback:t})}},{key:"logMode",get:function(){return c(this,Ge)}},{key:"log",get:function(){return se(c(this,He),c(this,rt),c(this,at))},set:function(e){var t=oe(e,3);l(this,He,t[0]),l(this,rt,t[1]),l(this,at,t[2]),l(this,Ge,"pause")}},{key:"recLog",value:function(){l(this,He,[c(this,$e),c(this,qe)?1:0,c(this,We)?1:0,c(this,$e)]),l(this,rt,[c(this,tt),c(this,Xe),c(this,Qe),c(this,tt)]),l(this,at,[c(this,nt),c(this,Ze),c(this,et),c(this,nt)]),l(this,Ge,"rec")}},{key:"playLog",value:function(){l(this,$e,c(this,He)[0]),l(this,qe,Boolean(c(this,He)[1])),l(this,We,Boolean(c(this,He)[2])),l(this,ze,3),l(this,tt,c(this,rt)[0]),l(this,Xe,c(this,rt)[1]),l(this,Qe,c(this,rt)[2]),l(this,it,3),l(this,nt,c(this,at)[0]),l(this,Ze,c(this,at)[1]),l(this,et,c(this,at)[2]),l(this,st,3),l(this,Ge,"play")}},{key:"endLog",value:function(){l(this,Ge,"pause")}}]),e}(),Xe=(Ce=new WeakMap,We=new WeakMap,qe=new WeakMap,$e=new WeakMap,new WeakMap),Ze=new WeakMap,Qe=new WeakMap,et=new WeakMap,tt=new WeakMap,nt=new WeakMap,rt=(He=new WeakMap,ze=new WeakMap,new WeakMap),it=new WeakMap,at=new WeakMap,st=new WeakMap,ot=(Ge=new WeakMap,new WeakMap),ut=new WeakMap,ct=new WeakMap,lt=function(){"use strict";function e(){u(this,e),ht.set(this,{writable:!0,value:new Set})}return f(e,[{key:"add",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=!0,a=!1,s=void 0;try{for(var o,u=n[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var l=o.value;e.remove(l),c(this,ht).add(l),ct.set(l,c(this,ht))}}catch(e){a=!0,s=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw s}}}},{key:"run",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=!0,i=!1,a=void 0;try{for(var s,o=c(this,ht)[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var u=s.value;u.apply(void 0,I(t))}}catch(e){i=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}}},{key:"clear",value:function(){c(this,ht).clear()}},{key:"isEmpty",get:function(){return!c(this,ht).size}},{key:"size",get:function(){return c(this,ht).size}}],[{key:"remove",value:function(e){var t=ct.get(e),n=!1;return t&&(n=t.delete(e),ct.delete(e)),n}},{key:"of",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i,a=new e;return(i=a).add.apply(i,I(n)),a}}]),e}(),ht=new WeakMap,dt=function(){"use strict";function e(){u(this,e),ft.set(this,{writable:!0,value:Uint32Array.of(4294967295*Math.random()+1)})}return f(e,[{key:"seed",get:function(){return 0|c(this,ft)[0]},set:function(e){c(this,ft)[0]=e}},{key:"updateSeed",value:function(){return c(this,ft)[0]=4294967295*Math.random()+1,this.seed}},{key:"nextInt",value:function(e,t){c(this,ft)[0]^=c(this,ft)[0]<<13,c(this,ft)[0]^=c(this,ft)[0]>>17,c(this,ft)[0]^=c(this,ft)[0]<<5;var n=c(this,ft)[0]/4294967296;return void 0===t&&(t=e,e=0),Math.floor(n*(t-e))+e}},{key:"nextFloat",value:function(e,t){return c(this,ft)[0]^=c(this,ft)[0]<<13,c(this,ft)[0]^=c(this,ft)[0]>>17,c(this,ft)[0]^=c(this,ft)[0]<<5,void 0===t&&(t=e,e=0),c(this,ft)[0]/4294967296*(t-e)+e}},{key:"shuffle",value:function(e){var t=this;return e.map((function(e){return{num:t.nextFloat(1),val:e}})).sort((function(e,t){return e.num-t.num})).map((function(e){return e.val}))}}]),e}(),ft=new WeakMap;function pt(e){return e instanceof N?new N(e):"object"==typeof e?Object.fromEntries(Object.entries(e).map((function(e){var t=k(e);return[t[0],pt(t[1])]}))):e}function mt(e,t,n){return e instanceof N&&t instanceof N?N.blend(e,t,n):"number"==typeof e&&"number"==typeof t?(t-e)*n+e:"boolean"==typeof e&&"boolean"==typeof t?n>0?t:e:"object"==typeof e&&"object"==typeof t?Object.fromEntries(Object.keys(e).map((function(r){return[r,mt(e[r],t[r],n)]}))):pt(void 0===t?e:t)}function vt(e){return function(t){return t<=0?0:1<=t?1:e(t)}}var yt=function(){"use strict";function e(t,n,r){var i=void 0===n?1:n;u(this,e),gt.set(this,{writable:!0,value:0}),wt.set(this,{writable:!0,value:void 0}),bt.set(this,{writable:!0,value:void 0}),_t.set(this,{writable:!0,value:[]}),kt.set(this,{writable:!0,value:0}),It.set(this,{writable:!0,value:null}),St.set(this,{writable:!0,value:!1}),Tt.set(this,{writable:!0,value:void 0}),Et.set(this,{writable:!0,value:void 0}),xt.set(this,{writable:!0,value:{}}),At.set(this,{writable:!0,value:[]}),Rt.set(this,{writable:!0,value:{}}),Ot.set(this,{writable:!0,value:{}}),p(this,"value",void 0),l(this,wt,i),l(this,bt,r),l(this,Tt,l(this,Et,pt(t))),this.value=pt(t)}return f(e,[{key:"reset",value:function(){c(this,bt)&&c(this,bt).delete(this),l(this,St,!1),l(this,gt,0),l(this,kt,0),l(this,It,null),this.value=pt(c(this,Tt))}},{key:"start",value:function(e){var t,n;return!1===e?null===(t=c(this,bt))||void 0===t||t.delete(this):null===(n=c(this,bt))||void 0===n||n.add(this),l(this,St,!0),l(this,gt,0),l(this,kt,0),l(this,It,null),this.value=pt(c(this,Tt)),this}},{key:"end",value:function(){c(this,bt)&&c(this,bt).delete(this),l(this,St,!0),l(this,kt,c(this,_t).length),l(this,It,null),this.value=pt(c(this,Et))}},{key:"to",value:function(t,n,r){var i=void 0===n?0:n,a=void 0===r?e.linear:r,s=this;i=Math.max(i,0);var o=l(this,Et,pt(t));return c(this,_t).push((function(){var e=s,t=pt(s.value);return function(){if(c(e,gt)<=i)return e.value=mt(t,o,a(c(e,gt)/i)),!0;l(e,gt,c(e,gt)-i),e.value=pt(o)}})),this}},{key:"wait",value:function(e){var t=this;return e=Math.max(e,0),c(this,_t).push((function(){return function(){if(c(t,gt)<=e)return!0;l(t,gt,c(t,gt)-e)}})),this}},{key:"on",value:function(e){var t=this;return c(this,_t).push((function(){var n=t,r=c(t,gt);return function(){return l(n,gt,r),!1===e()}})),this}},{key:"loopStart",value:function(e,t){var n=void 0===e?1/0:e,r=this,i=this,a="number"==typeof n?function(e){return e<n}:n;c(this,_t).push((function(){return function(){c(r,xt)[s]=0,t&&(c(r,Ot)[t]=0)}}));var s=c(this,_t).length;return c(this,At).push(s),c(this,xt)[s]=0,c(this,_t).push((function(){return function(){var e=c(i,xt)[s];t&&(c(i,Ot)[t]=e),a(e)||(l(i,kt,c(i,Rt)[s]),l(i,It,null))}})),this}},{key:"loopEnd",value:function(){var e=this,t=c(this,_t).length,n=c(this,At).pop();if(void 0===n)throw Error("no corresponding loopStart()");return c(this,Rt)[n]=t,c(this,_t).push((function(){return function(){c(e,xt)[n]++,l(e,kt,n-1),l(e,It,null)}})),this}},{key:"update",value:function(e){if(e=null!=e?e:"function"==typeof c(this,wt)?c(this,wt).call(this):c(this,wt),this.running){l(this,gt,c(this,gt)+Math.max(0,e));do{if(c(this,It)||l(this,It,c(this,_t)[c(this,kt)]()),c(this,It).call(this))break;l(this,It,null),l(this,kt,1+ +c(this,kt))}while(this.running)}return this}},{key:"done",get:function(){return c(this,kt)>=c(this,_t).length}},{key:"started",get:function(){return c(this,St)}},{key:"running",get:function(){return this.started&&!this.done}},{key:"getAndSet",value:function(e){var t=this.value;return this.value=e,t}},{key:"loops",get:function(){return c(this,Ot)}}]),e}();p(yt,"linear",vt((function(e){return e}))),p(yt,"inSine",vt((function(e){return 1-Math.cos(e*(Math.PI/2))}))),p(yt,"outSine",vt((function(e){return Math.sin(e*(Math.PI/2))}))),p(yt,"inOutSine",vt((function(e){return e<.5?.5*yt.inSine(2*e):.5+.5*yt.outSine(2*(e-.5))}))),p(yt,"steps",(function(e){return vt((function(t){return Math.ceil(t*e)/e}))})),p(yt,"frameSteps",(function(e){return vt((function(t){return Math.floor(t*e)/(e-1)}))}));var gt=new WeakMap,wt=new WeakMap,bt=new WeakMap,_t=new WeakMap,kt=new WeakMap,It=new WeakMap,St=new WeakMap,Tt=new WeakMap,Et=new WeakMap,xt=new WeakMap,At=new WeakMap,Rt=new WeakMap,Ot=new WeakMap,Pt=function(){"use strict";function e(t){var n=this;u(this,e),Mt.set(this,{writable:!0,value:void 0}),Lt.set(this,{writable:!0,value:void 0}),Nt.set(this,{writable:!0,value:new Set}),l(this,Mt,t),l(this,Lt,(function(){return c(n,Mt).frameTime}))}return f(e,[{key:"update",value:function(){var e=!0,t=!1,n=void 0;try{for(var r,i=c(this,Nt)[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var a=r.value;a.update(),a.done&&c(this,Nt).delete(a)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}},{key:"from",value:function(e){return new yt(e,c(this,Lt),c(this,Nt))}},{key:"clear",value:function(){c(this,Nt).clear()}}]),e}(),Mt=new WeakMap,Lt=new WeakMap,Nt=new WeakMap;
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
const Ct=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Dt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],a=t+1<e.length,s=a?e[t+1]:0,o=t+2<e.length,u=o?e[t+2]:0,c=i>>2,l=(3&i)<<4|s>>4;let h=(15&s)<<2|u>>6,d=63&u;o||(d=64,a||(h=64)),r.push(n[c],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ct(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){const a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{const a=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],a=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const o=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==a||null==s||null==o)throw Error();const u=i<<2|a>>4;if(r.push(u),64!==s){const e=a<<4&240|s>>2;if(r.push(e),64!==o){const e=s<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Ut=function(e){try{return Dt.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
class Ft{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
function Vt(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function jt(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function Bt(){return"object"==typeof indexedDB}function Wt(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function qt(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}class $t extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,$t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ht.prototype.create)}}class Ht{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?function(e,t){return e.replace(zt,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",s=`${this.serviceName}: ${a} (${r}).`;return new $t(r,s,n)}}const zt=/\{\$([^}]+)}/g;
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
 */function Gt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],a=t[i];if(Kt(n)&&Kt(a)){if(!Gt(n,a))return!1}else if(n!==a)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function Kt(e){return null!==e&&"object"==typeof e}
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
 */function Yt(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Jt(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function Xt(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class Zt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Qt),void 0===r.error&&(r.error=Qt),void 0===r.complete&&(r.complete=Qt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Qt(){}
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
 */function en(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
function tn(e){return e&&e._delegate?e._delegate:e}class nn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const rn="[DEFAULT]";
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
 */class an{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Ft;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:rn})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===rn?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:rn:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}
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
class sn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new an(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */const on=[];var un,cn;(cn=un||(un={}))[cn.DEBUG=0]="DEBUG",cn[cn.VERBOSE=1]="VERBOSE",cn[cn.INFO=2]="INFO",cn[cn.WARN=3]="WARN",cn[cn.ERROR=4]="ERROR",cn[cn.SILENT=5]="SILENT";const ln={debug:un.DEBUG,verbose:un.VERBOSE,info:un.INFO,warn:un.WARN,error:un.ERROR,silent:un.SILENT},hn=un.INFO,dn={[un.DEBUG]:"log",[un.VERBOSE]:"log",[un.INFO]:"info",[un.WARN]:"warn",[un.ERROR]:"error"},fn=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=dn[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class pn{constructor(e){this.name=e,this._logLevel=hn,this._logHandler=fn,this._userLogHandler=null,on.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in un))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ln[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,un.DEBUG,...e),this._logHandler(this,un.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,un.VERBOSE,...e),this._logHandler(this,un.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,un.INFO,...e),this._logHandler(this,un.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,un.WARN,...e),this._logHandler(this,un.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,un.ERROR,...e),this._logHandler(this,un.ERROR,...e)}}
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
class mn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const vn="@firebase/app",yn="0.7.10",gn=new pn("@firebase/app"),wn="[DEFAULT]",bn={[vn]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},_n=new Map,kn=new Map;function In(e,t){try{e.container.addComponent(t)}catch(n){gn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Sn(e){const t=e.name;if(kn.has(t))return gn.debug(`There were multiple attempts to register component ${t}.`),!1;kn.set(t,e);for(const t of _n.values())In(t,e);return!0}function Tn(e,t){return e.container.getProvider(t)}
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
const En=new Ht("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class xn{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new nn("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw En.create("app-deleted",{appName:this._name})}}
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
 */const An="9.6.0";function Rn(e="[DEFAULT]"){const t=_n.get(e);if(!t)throw En.create("no-app",{appName:e});return t}function On(e,t,n){var r;let i=null!==(r=bn[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const e=[`Unable to register library "${i}" with version "${t}":`];return a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void gn.warn(e.join(" "))}Sn(new nn(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
var Pn;Pn="",Sn(new nn("platform-logger",(e=>new mn(e)),"PRIVATE")),On(vn,yn,Pn),On(vn,yn,"esm2017"),On("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
On("firebase","9.6.0","app");var Mn={};!function(e,t){"object"==typeof Mn?t(Mn):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).idb={})}(Mn,(function(e){"use strict";function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,a=new Promise((function(a,s){n(i=e[t].apply(e,r)).then(a,s)}));return a.request=i,a}function i(e,t,n){var i=r(e,t,n);return i.then((function(e){if(e)return new l(e,i.request)}))}function a(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function s(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function o(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function u(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function c(e){this._index=e}function l(e,t){this._cursor=e,this._request=t}function h(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function f(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function p(e){this._db=e}a(c,"_index",["name","keyPath","multiEntry","unique"]),s(c,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),u(c,"_index",IDBIndex,["openCursor","openKeyCursor"]),a(l,"_cursor",["direction","key","primaryKey","value"]),s(l,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(l.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new l(e,t._request)}))}))})})),h.prototype.createIndex=function(){return new c(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new c(this._store.index.apply(this._store,arguments))},a(h,"_store",["name","keyPath","indexNames","autoIncrement"]),s(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),u(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),o(h,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},a(d,"_tx",["objectStoreNames","mode"]),o(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},a(f,"_db",["name","version","objectStoreNames"]),o(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},a(p,"_db",["name","version","objectStoreNames"]),o(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[h,c].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,a=i[e].apply(i,n.slice(0,-1));a.onsuccess=function(){r(a.result)}})}))})),[c,h].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=function(e,t,n){var i=r(indexedDB,"open",[e,t]),a=i.request;return a&&(a.onupgradeneeded=function(e){n&&n(new f(a.result,e.oldVersion,a.transaction))}),i.then((function(e){return new p(e)}))},e.deleteDb=function(e){return r(indexedDB,"deleteDatabase",[e])},Object.defineProperty(e,"__esModule",{value:!0})}));const Ln="@firebase/installations",Nn="0.5.4",Cn=1e4,Dn="w:0.5.4",Un="FIS_v2",Fn=36e5,Vn=new Ht("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function jn(e){return e instanceof $t&&e.code.includes("request-failed")}
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
 */function Bn({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function Wn(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function qn(e,t){const n=(await t.json()).error;return Vn.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function $n({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Hn(e,{refreshToken:t}){const n=$n(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
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
 */(t)),n}async function zn(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
 */function Gn(e){return new Promise((t=>{setTimeout(t,e)}))}
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
const Kn=/^[cdef][\w-]{21}$/;function Yn(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
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
 */(e);return Kn.test(t)?t:""}catch(e){return""}}function Jn(e){return`${e.appName}!${e.appId}`}
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
 */const Xn=new Map;function Zn(e,t){const n=Jn(e);Qn(n,t),function(e,t){const n=tr();n&&n.postMessage({key:e,fid:t});nr()}(n,t)}function Qn(e,t){const n=Xn.get(e);if(n)for(const e of n)e(t)}let er=null;function tr(){return!er&&"BroadcastChannel"in self&&(er=new BroadcastChannel("[Firebase] FID Change"),er.onmessage=e=>{Qn(e.data.key,e.data.fid)}),er}function nr(){0===Xn.size&&er&&(er.close(),er=null)}
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
 */const rr="firebase-installations-store";let ir=null;function ar(){return ir||(ir=Mn.openDb("firebase-installations-database",1,(e=>{if(0===e.oldVersion)e.createObjectStore(rr)}))),ir}async function sr(e,t){const n=Jn(e),r=(await ar()).transaction(rr,"readwrite"),i=r.objectStore(rr),a=await i.get(n);return await i.put(t,n),await r.complete,a&&a.fid===t.fid||Zn(e,t.fid),t}async function or(e){const t=Jn(e),n=(await ar()).transaction(rr,"readwrite");await n.objectStore(rr).delete(t),await n.complete}async function ur(e,t){const n=Jn(e),r=(await ar()).transaction(rr,"readwrite"),i=r.objectStore(rr),a=await i.get(n),s=t(a);return void 0===s?await i.delete(n):await i.put(s,n),await r.complete,!s||a&&a.fid===s.fid||Zn(e,s.fid),s}
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
 */async function cr(e){let t;const n=await ur(e,(n=>{const r=function(e){return dr(e||{fid:Yn(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Vn.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function(e,{fid:t}){const n=Bn(e),r=$n(e),i={fid:t,authVersion:Un,appId:e.appId,sdkVersion:Dn},a={method:"POST",headers:r,body:JSON.stringify(i)},s=await zn((()=>fetch(n,a)));if(s.ok){const e=await s.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:Wn(e.authToken)}}throw await qn("Create Installation",s)}(e,t);return sr(e,n)}catch(n){throw jn(n)&&409===n.customData.serverCode?await or(e):await sr(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:lr(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function lr(e){let t=await hr(e);for(;1===t.registrationStatus;)await Gn(100),t=await hr(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await cr(e);return n||t}return t}function hr(e){return ur(e,(e=>{if(!e)throw Vn.create("installation-not-found");return dr(e)}))}function dr(e){return 1===(t=e).registrationStatus&&t.registrationTime+Cn<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
 */}async function fr({appConfig:e,platformLoggerProvider:t},n){const r=function(e,{fid:t}){return`${Bn(e)}/${t}/authTokens:generate`}
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
 */(e,n),i=Hn(e,n),a=t.getImmediate({optional:!0});a&&i.append("x-firebase-client",a.getPlatformInfoString());const s={installation:{sdkVersion:Dn}},o={method:"POST",headers:i,body:JSON.stringify(s)},u=await zn((()=>fetch(r,o)));if(u.ok){return Wn(await u.json())}throw await qn("Generate Auth Token",u)}async function pr(e,t=!1){let n;const r=await ur(e.appConfig,(r=>{if(!vr(r))throw Vn.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Fn}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await mr(e.appConfig);for(;1===n.authToken.requestStatus;)await Gn(100),n=await mr(e.appConfig);const r=n.authToken;return 0===r.requestStatus?pr(e,t):r}(e,t),r;{if(!navigator.onLine)throw Vn.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await fr(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await sr(e.appConfig,r),n}catch(n){if(!jn(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await sr(e.appConfig,n)}else await or(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function mr(e){return ur(e,(e=>{if(!vr(e))throw Vn.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+Cn<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
 */}))}function vr(e){return void 0!==e&&2===e.registrationStatus}
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
async function yr(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await cr(e);t&&await t}
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
 */(n.appConfig);return(await pr(n,t)).token}function gr(e){return Vn.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="installations",br=e=>{const t=Tn(e.getProvider("app").getImmediate(),wr).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await cr(t.appConfig);return r?r.catch(console.error):pr(t).catch(console.error),n.fid}(t),getToken:e=>yr(t,e)}};Sn(new nn(wr,(e=>{const t=e.getProvider("app").getImmediate(),n=
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
function(e){if(!e||!e.options)throw gr("App Configuration");if(!e.name)throw gr("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw gr(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,platformLoggerProvider:Tn(t,"platform-logger"),_delete:()=>Promise.resolve()}}),"PUBLIC")),Sn(new nn("installations-internal",br,"PRIVATE")),On(Ln,Nn),On(Ln,Nn,"esm2017");
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
const _r="analytics",kr="https://www.googletagmanager.com/gtag/js",Ir=new pn("@firebase/analytics");
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
function Sr(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Tr(e,t,n,r){return async function(i,a,s){try{"event"===i?await async function(e,t,n,r,i){try{let a=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await Sr(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){a=[];break}a.push(i)}}0===a.length&&(a=Object.values(t)),await Promise.all(a),e("event",r,i||{})}catch(e){Ir.error(e)}}(e,t,n,a,s):"config"===i?await async function(e,t,n,r,i,a){const s=r[i];try{if(s)await t[s];else{const e=(await Sr(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(e){Ir.error(e)}e("config",i,a)}(e,t,n,r,a,s):e("set",a)}catch(e){Ir.error(e)}}}
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
const Er=new Ht("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const xr=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function Ar(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Rr(e,t=xr,n){const{appId:r,apiKey:i,measurementId:a}=e.options;if(!r)throw Er.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw Er.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Pr;return setTimeout((async()=>{o.abort()}),void 0!==n?n:6e4),Or({appId:r,apiKey:i,measurementId:a},s,o,t)}async function Or(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=xr){const{appId:a,measurementId:s}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(a),r(Er.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(e){if(s)return Ir.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:a,measurementId:s};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Ar(r)},a="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),s=await fetch(a,i);if(200!==s.status&&304!==s.status){let e="";try{const n=await s.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw Er.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}(e);return i.deleteThrottleMetadata(a),t}catch(t){if(!function(e){if(!(e instanceof $t&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(i.deleteThrottleMetadata(a),s)return Ir.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:a,measurementId:s};throw t}const o=503===Number(t.customData.httpStatus)?en(n,i.intervalMillis,30):en(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+o,backoffCount:n+1};return i.setThrottleMetadata(a,u),Ir.debug(`Calling attemptFetch again in ${o} millis`),Or(e,u,r,i)}}class Pr{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mr(e,t,n,r,i,a,s){var o;const u=Rr(e);u.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Ir.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Ir.error(e))),t.push(u);const c=async function(){if(!Bt())return Ir.warn(Er.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Wt()}catch(e){return Ir.warn(Er.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}().then((e=>e?r.getId():void 0)),[l,h]=await Promise.all([u,c]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(kr))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${kr}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(a,l.measurementId),i("js",new Date);const d=null!==(o=null==s?void 0:s.config)&&void 0!==o?o:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),i("config",l.measurementId,d),l.measurementId}
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
 */class Lr{constructor(e){this.app=e}_delete(){return delete Nr[this.app.options.appId],Promise.resolve()}}let Nr={},Cr=[];const Dr={};let Ur,Fr,Vr="dataLayer",jr="gtag",Br=!1;function Wr(e,t,n){!function(){const e=[];if(jt()&&e.push("This is a browser extension environment."),qt()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Er.create("invalid-analytics-context",{errorInfo:t});Ir.warn(n.message)}}();const r=e.options.appId;if(!r)throw Er.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Er.create("no-api-key");Ir.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Nr[r])throw Er.create("already-exists",{id:r});if(!Br){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Vr);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let a=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(a=window[i]),window[i]=Tr(a,e,t,n),{gtagCore:a,wrappedGtag:window[i]}}(Nr,Cr,Dr,Vr,jr);Fr=e,Ur=t,Br=!0}Nr[r]=Mr(e,Cr,Dr,t,Ur,Vr,n);return new Lr(e)}
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
 */function qr(e,t,n,r){e=tn(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(Fr,Nr[e.app.options.appId],t,n,r).catch((e=>Ir.error(e)))}const $r="@firebase/analytics",Hr="0.7.4";Sn(new nn(_r,((e,{options:t})=>Wr(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),Sn(new nn("analytics-internal",(function(e){try{const t=e.getProvider(_r).getImmediate();return{logEvent:(e,n,r)=>qr(t,e,n,r)}}catch(e){throw Er.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),On($r,Hr),On($r,Hr,"esm2017");var zr,Gr=new T({fps:60}),Kr=new z({width:160,height:240,el:"#app"}),Yr=new Pe,Jr=new Ne(Kr),Xr={left:new je(["ArrowLeft","a"]),right:new je(["ArrowRight","d"]),up:new je(["ArrowUp","w"]),down:new je(["ArrowDown","s"]),fire:new je([" ","z",".","Control"]),reset:new je(["Enter","Escape"])},Zr=new Je(Kr),Qr=[Xr.up,Xr.right,Xr.down,Xr.left],ei=[Xr.fire,Zr],ti=I(Qr).concat(I(ei)),ni=I(Qr).concat(I(ei)),ri=new Pt(Gr),ii={bg:new lt,effectBack:new lt,enemyNotice:new lt,player:new lt,playerBullet:new lt,effectOverPlayer:new lt,enemy:new lt,enemyBullet:new lt,effectOverEnemy:new lt,ui:new lt},ai=new dt;a.register("5eDWT",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=t),t}})),zr=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("eTB8B");var si,oi=W.loadMap(new URL(zr),{bg:[1,1,32,32,0,16],buttonLight:[1,34,34,34],buttonMute:{0:[36,34,34,34],1:[70,34,34,34]},buttonReset:[1,69,34,34],buttonTwitter:[1,104,34,34],card:{top:[34,1,144,4],body:[34,5,144,2],bottom:[34,7,144,4]},enemyBulletLargeTake:[34,12,14,13,7,5],enemyBulletLarge:{0:[49,12,16,15,8,6],1:[65,12,16,15,8,6]},enemyBulletTake:[34,26,8,7,4,3],enemyBullet:{0:[82,12,10,9,5,4],1:[92,12,10,9,5,4]},enemyLargeTake:[179,1,32,31,16,12],enemyLarge:{body:[36,69,34,33,17,13],bodyFlash:[36,103,34,33,17,13],gauge:[74,73,26,24,13,9],gaugeFlash:[74,107,26,24,13,9]},enemyNoticeLarge:[82,22,12,11,6,5.5],enemyNotice:[103,12,8,7,4,3.5],enemyTakeChip:[103,20,8,8,4,4],enemyTake:[112,12,16,15,8,6],enemy:{body:[36,138,18,17,9,7],bodyFlash:[36,156,18,17,9,7],gauge:[57,141,12,10,6,4],gaugeFlash:[57,159,12,10,6,4]},finish:[212,1,56,12],fontRate:{normal:{0:[269,1,5,7],1:[275,1,5,7],2:[281,1,5,7],3:[287,1,5,7],4:[293,1,5,7],5:[299,1,5,7],6:[305,1,5,7],7:[311,1,5,7],8:[317,1,5,7],9:[323,1,5,7],"*":[329,1,5,7],"+":[335,1,5,7]},flash:{0:[269,9,5,7],1:[275,9,5,7],2:[281,9,5,7],3:[287,9,5,7],4:[293,9,5,7],5:[299,9,5,7],6:[305,9,5,7],7:[311,9,5,7],8:[317,9,5,7],9:[323,9,5,7],"*":[329,9,5,7],"+":[335,9,5,7]}},fontUiL:{0:[341,1,8,9],1:[350,1,8,9],2:[359,1,8,9],3:[368,1,8,9],4:[377,1,8,9],5:[386,1,8,9],6:[395,1,8,9],7:[404,1,8,9],8:[413,1,8,9],9:[422,1,8,9],t:[431,1,8,9]},fontUiS:{0:[341,11,3,5],1:[345,11,3,5],2:[349,11,3,5],3:[353,11,3,5],4:[357,11,3,5],5:[361,11,3,5],6:[365,11,3,5],7:[369,11,3,5],8:[373,11,3,5],9:[377,11,3,5],A:[381,11,3,5],E:[385,11,3,5],I:[389,11,3,5],L:[393,11,3,5],P:[397,11,3,5],R:[401,11,3,5],S:[405,11,3,5],T:[409,11,3,5],U:[413,11,3,5],Y:[417,11,3,5],".":[421,11,3,5],"/":[425,11,3,5]},fontUi:{normal:{0:[341,17,5,7],1:[347,17,5,7],2:[353,17,5,7],3:[359,17,5,7],4:[365,17,5,7],5:[371,17,5,7],6:[377,17,5,7],7:[383,17,5,7],8:[389,17,5,7],9:[395,17,5,7],y:[401,17,7,7],h:[409,17,7,7],".":[417,17,1,7],",":[419,17,1,8]},flash:{0:[341,25,5,7],1:[347,25,5,7],2:[353,25,5,7],3:[359,25,5,7],4:[365,25,5,7],5:[371,25,5,7],6:[377,25,5,7],7:[383,25,5,7],8:[389,25,5,7],9:[395,25,5,7],y:[401,25,7,7],h:[409,25,7,7],".":[417,25,1,7],",":[419,25,1,8]}},newRecord:{normal:[105,34,94,12],flash:[105,46,94,12]},playerBulletHit:[129,12,8,8,4,4],playerBullet:[129,21,8,8,4,4],playerDestroyChip:[138,12,8,7,4,3],playerDestroy:[440,1,16,24,8,18],player:{normal:[1,139,18,26,9,19],flash:[1,165,18,26,9,19]},pressAnyButton:[105,59,89,9],replayLoading:[200,34,90,10],replayNow:[212,14,40,7],replayReady:[291,34,97,10],scoreBg:[105,69,130,12],start:[269,17,46,12],success:{normal:[105,82,88,44,44,22],flash:[105,126,88,44,44,22]},tips:{0:[194,82,108,40],1:[389,34,99,25],2:[303,108,76,25],3:[395,82,110,40],4:[395,123,87,40],5:[105,171,114,25],6:[220,171,114,25],7:[105,197,94,40],8:[200,197,107,40],9:[303,134,83,25],10:[194,123,82,26],11:[303,82,91,25],arrow:[147,12,17,6],heart:[147,19,10,9],million:[457,1,53,8],score:[95,22,7,7],user:[158,19,12,12]},titleLogoIcon:[1,192,30,45],titleLogo:{normal:[308,197,129,14],normalFlash:[308,211,129,14],ex:[308,197,150,14],exFlash:[308,211,150,14]},uiStatusReset:[36,175,47,25]});si=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("aMV2A");var ui;ui=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("aIeDX");var ci;ci=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("jzkA8");var li;li=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("6uV70");var hi;hi=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("eMTjg");var di;di=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("akrbZ");var fi;fi=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("kNbWg");var pi;pi=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("8cvlD");var mi;mi=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("f1UVR");var vi;vi=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("KfNtP");var yi;yi=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("b5Tfb");var gi;gi=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("33mfn");var wi;wi=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("9WYf8");var bi,_i={uiButton:new Re(new URL(si),.5,.04),titleStart:new Re(new URL(ui),.8),titleModeChange:new Re(new URL(ci),.4),playerFire:new Re(new URL(li),.4,.02),playerHit:new Re(new URL(hi),1),enemyShow:new Re(new URL(di),1,.04),enemyHit:new Re(new URL(fi),.5,.04),enemyFire:new Re(new URL(pi),.6,.02),enemyFireLarge:new Re(new URL(mi),.9,.04),enemyTake:new Re(new URL(vi),.45,.02),enemyTakeLarge:new Re(new URL(yi),.6,.04),resultCounting:new Re(new URL(gi),.5,.02),resultSuccess:new Re(new URL(wi),1)};bi=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("a5LcI");var ki;ki=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("2lEye");var Ii={play:new Oe(new URL(bi)),result:new Oe(new URL(ki),.9)},Si={mode:"normal",screenTop:0,isFirstEnemy:!1,enemyWaveId:0,playerPos:{x:0,y:0},isSuccess:!1,heart:0,heartRate:0,deathCount:0,addHeart:function(e){this.heart+=this.getHeartRate()*e},getHeartRate:function(){var e=this.heartRate||1;return this.isSuccess?e:Math.min(e,16)},clearing:ri.from(0).wait(1500)},Ti={white:N.parse("#ffffff"),base:N.parse("#ffffff"),main:N.parse("#f64744"),accent:N.parse("#f69c44")},Ei=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:wn,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw En.create("bad-app-name",{appName:String(r)});const i=_n.get(r);if(i){if(Gt(e,i.options)&&Gt(n,i.config))return i;throw En.create("duplicate-app",{appName:r})}const a=new sn(r);for(const e of kn.values())a.addComponent(e);const s=new xn(e,n,a);return _n.set(r,s),s}({apiKey:"AIzaSyC2zCzDFkfmx1ZHOc6v03T-oGBeS0124-4",authDomain:"fire-shooter-san.firebaseapp.com",projectId:"fire-shooter-san",storageBucket:"fire-shooter-san.appspot.com",messagingSenderId:"1003741816214",appId:"1:1003741816214:web:20da45a98b3fd18345a9b7",measurementId:"G-3Q36TCTMGF"}),xi=qr.bind(null,function(e=Rn()){const t=Tn(e=tn(e),_r);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=Tn(e,_r);if(n.isInitialized()){const e=n.getImmediate();if(Gt(t,n.getOptions()))return e;throw Er.create("already-initialized")}return n.initialize({options:t})}(e)}(Ei));function Ai(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Ri(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Oi=Ri,Pi=new Ht("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Mi=new pn("@firebase/auth");function Li(e,...t){Mi.logLevel<=un.ERROR&&Mi.error(`Auth (9.6.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(e,...t){throw Ui(e,...t)}function Ci(e,...t){return Ui(e,...t)}function Di(e,t,n){const r=Object.assign(Object.assign({},Oi()),{[t]:n});return new Ht("auth","Firebase",r).create(t,{appName:e.name})}function Ui(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Pi.create(e,...t)}function Fi(e,t,...n){if(!e)throw Ui(t,...n)}function Vi(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Li(t),new Error(t)}function ji(e,t){e||Vi(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bi=new Map;function Wi(e){ji(e instanceof Function,"Expected a class definition");let t=Bi.get(e);return t?(ji(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Bi.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
function qi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function $i(){return"http:"===Hi()||"https:"===Hi()}function Hi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class zi{constructor(e,t){this.shortDelay=e,this.longDelay=t,ji(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Vt())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&($i()||jt()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(e,t){ji(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Vi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Vi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Vi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Ji=new zi(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xi(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Zi(e,t,n,r,i={}){return Qi(e,i,(()=>{let i={},a={};r&&("GET"===t?a=r:i={body:JSON.stringify(r)});const s=Yt(Object.assign({key:e.config.apiKey},a)).slice(1),o=new(Ki.headers());return o.set("Content-Type","application/json"),o.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&o.set("X-Firebase-Locale",e.languageCode),Ki.fetch()(ta(e,e.config.apiHost,n,s),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},i))}))}async function Qi(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Yi),t);try{const t=new na(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw ra(e,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const t=i.ok?a.errorMessage:a.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw ra(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===n)throw ra(e,"email-already-in-use",a);const o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw Di(e,o,s);Ni(e,o)}}catch(t){if(t instanceof $t)throw t;Ni(e,"network-request-failed")}}async function ea(e,t,n,r,i={}){const a=await Zi(e,t,n,r,i);return"mfaPendingCredential"in a&&Ni(e,"multi-factor-auth-required",{_serverResponse:a}),a}function ta(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Gi(e.config,i):`${e.config.apiScheme}://${i}`}class na{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Ci(this.auth,"timeout"))),Ji.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function ra(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ci(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
function ia(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aa(e){return 1e3*Number(e)}function sa(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Li("JWT malformed, contained fewer than 3 sections"),null;try{const e=Ut(n);return e?JSON.parse(e):(Li("Failed to decode base64 JWT payload"),null)}catch(e){return Li("Caught error parsing JWT payload as JSON",e),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function oa(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof $t&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class ua{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ia(this.lastLoginAt),this.creationTime=ia(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function la(e){var t;const n=e.auth,r=await e.getIdToken(),i=await oa(e,async function(e,t){return Zi(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Fi(null==i?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const s=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?a.providerUserInfo.map((e=>{var{providerId:t}=e,n=Ai(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const o=(u=e.providerData,c=s,[...u.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var u,c;const l=e.isAnonymous,h=!(e.email&&a.passwordHash||(null==o?void 0:o.length)),d=!!l&&h,f={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new ca(a.createdAt,a.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ha{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Fi(e.idToken,"internal-error"),Fi(void 0!==e.idToken,"internal-error"),Fi(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=sa(e);return Fi(t,"internal-error"),Fi(void 0!==t.exp,"internal-error"),Fi(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Fi(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Qi(e,{},(()=>{const n=Yt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,a=ta(e,r,"/v1/token",`key=${i}`);return Ki.fetch()(a,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,a=new ha;return n&&(Fi("string"==typeof n,"internal-error",{appName:e}),a.refreshToken=n),r&&(Fi("string"==typeof r,"internal-error",{appName:e}),a.accessToken=r),i&&(Fi("number"==typeof i,"internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ha,this.toJSON())}_performRefresh(){return Vi("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(e,t){Fi("string"==typeof e||void 0===e,"internal-error",{appName:t})}class fa{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Ai(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new ua(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new ca(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await oa(this,this.stsTokenManager.getToken(this.auth,e));return Fi(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=tn(e),r=await n.getIdToken(t),i=sa(r);Fi(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a="object"==typeof i.firebase?i.firebase:void 0,s=null==a?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:ia(aa(i.auth_time)),issuedAtTime:ia(aa(i.iat)),expirationTime:ia(aa(i.exp)),signInProvider:s||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=tn(e);await la(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Fi(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new fa(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Fi(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await la(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await oa(this,async function(e,t){return Zi(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,a,s,o,u,c;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(a=t.photoURL)&&void 0!==a?a:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,v=null!==(u=t.createdAt)&&void 0!==u?u:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:g,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:k}=t;Fi(g&&k,e,"internal-error");const I=ha.fromJSON(this.name,k);Fi("string"==typeof g,e,"internal-error"),da(l,e.name),da(h,e.name),Fi("boolean"==typeof w,e,"internal-error"),Fi("boolean"==typeof b,e,"internal-error"),da(d,e.name),da(f,e.name),da(p,e.name),da(m,e.name),da(v,e.name),da(y,e.name);const S=new fa({uid:g,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:v,lastLoginAt:y});return _&&Array.isArray(_)&&(S.providerData=_.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new ha;r.updateFromServerResponse(t);const i=new fa({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await la(i),i}}
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
 */class pa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}pa.type="NONE";const ma=pa;
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
 */function va(e,t,n){return`firebase:${e}:${t}:${n}`}class ya{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=va(this.userKey,r.apiKey,i),this.fullPersistenceKey=va("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fa._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ya(Wi(ma),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Wi(ma);const a=va(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(a);if(t){const r=fa._fromJSON(e,t);n!==i&&(s=r),i=n;break}}catch(e){}const o=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&o.length?(i=o[0],s&&await i._set(a,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(a)}catch(e){}}))),new ya(i,e,n)):new ya(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(ka(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(wa(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Sa(t))return"Blackberry";if(Ta(t))return"Webos";if(ba(t))return"Safari";if((t.includes("chrome/")||_a(t))&&!t.includes("edge/"))return"Chrome";if(Ia(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function wa(e=Vt()){return/firefox\//i.test(e)}function ba(e=Vt()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function _a(e=Vt()){return/crios\//i.test(e)}function ka(e=Vt()){return/iemobile/i.test(e)}function Ia(e=Vt()){return/android/i.test(e)}function Sa(e=Vt()){return/blackberry/i.test(e)}function Ta(e=Vt()){return/webos/i.test(e)}function Ea(e=Vt()){return/iphone|ipad|ipod/i.test(e)}function xa(){return function(){const e=Vt();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function Aa(e=Vt()){return Ea(e)||Ia(e)||Ta(e)||Sa(e)||/windows phone/i.test(e)||ka(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ra(e,t=[]){let n;switch(e){case"Browser":n=ga(Vt());break;case"Worker":n=`${ga(Vt())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ma(this),this.idTokenSubscription=new Ma(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pi,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Wi(t)),this._initializationPromise=this.queue((async()=>{var n,r;this._deleted||(this.persistenceManager=await ya.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,a=await this.tryRedirectSignIn(e);r&&r!==i||!(null==a?void 0:a.user)||(n=a.user)}return n?n._redirectEventId?(Fi(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await la(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?tn(e):null;return t&&Fi(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Fi(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Wi(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ht("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Wi(e)||this._popupRedirectResolver;Fi(t,this,"argument-error"),this.redirectPersistenceManager=await ya.create(this,[Wi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return Fi(a,this,"internal-error"),a.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Fi(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ra(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Pa(e){return tn(e)}class Ma{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Zt(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Fi(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class La{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Vi("not implemented")}_getIdTokenResponse(e){return Vi("not implemented")}_linkToIdToken(e,t){return Vi("not implemented")}_getReauthenticationResolver(e){return Vi("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Na(e,t){return Zi(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ca extends La{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ca(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ca(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return ea(e,"POST","/v1/accounts:signInWithPassword",Xi(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return ea(e,"POST","/v1/accounts:signInWithEmailLink",Xi(e,t))}(e,{email:this._email,oobCode:this._password});default:Ni(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Na(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return ea(e,"POST","/v1/accounts:signInWithEmailLink",Xi(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Ni(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Da(e,t){return ea(e,"POST","/v1/accounts:signInWithIdp",Xi(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua extends La{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ua(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ni("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Ai(t,["providerId","signInMethod"]);if(!n||!r)return null;const a=new Ua(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){return Da(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Da(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Da(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Yt(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Va extends La{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Va({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Va({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return ea(e,"POST","/v1/accounts:signInWithPhoneNumber",Xi(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await ea(e,"POST","/v1/accounts:signInWithPhoneNumber",Xi(e,t));if(n.temporaryProof)throw ra(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return ea(e,"POST","/v1/accounts:signInWithPhoneNumber",Xi(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Fa)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Va({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e){var t,n,r,i,a,s;const o=Jt(Xt(e)),u=null!==(t=o.apiKey)&&void 0!==t?t:null,c=null!==(n=o.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=o.mode)&&void 0!==r?r:null);Fi(u&&c&&l,"argument-error"),this.apiKey=u,this.operation=l,this.code=c,this.continueUrl=null!==(i=o.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(a=o.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(s=o.tenantId)&&void 0!==s?s:null}static parseLink(e){const t=function(e){const t=Jt(Xt(e)).link,n=t?Jt(Xt(t)).deep_link_id:null,r=Jt(Xt(e)).deep_link_id;return(r?Jt(Xt(r)).link:null)||r||n||t||e}(e);try{return new ja(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba{constructor(){this.providerId=Ba.PROVIDER_ID}static credential(e,t){return Ca._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ja.parseLink(t);return Fi(n,"argument-error"),Ca._fromEmailAndCode(e,n.code,n.tenantId)}}Ba.PROVIDER_ID="password",Ba.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ba.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class qa extends Wa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $a extends qa{constructor(){super("facebook.com")}static credential(e){return Ua._fromParams({providerId:$a.PROVIDER_ID,signInMethod:$a.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $a.credentialFromTaggedObject(e)}static credentialFromError(e){return $a.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return $a.credential(e.oauthAccessToken)}catch(e){return null}}}$a.FACEBOOK_SIGN_IN_METHOD="facebook.com",$a.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ha extends qa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ua._fromParams({providerId:Ha.PROVIDER_ID,signInMethod:Ha.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ha.credentialFromTaggedObject(e)}static credentialFromError(e){return Ha.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Ha.credential(t,n)}catch(e){return null}}}Ha.GOOGLE_SIGN_IN_METHOD="google.com",Ha.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class za extends qa{constructor(){super("github.com")}static credential(e){return Ua._fromParams({providerId:za.PROVIDER_ID,signInMethod:za.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return za.credentialFromTaggedObject(e)}static credentialFromError(e){return za.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return za.credential(e.oauthAccessToken)}catch(e){return null}}}za.GITHUB_SIGN_IN_METHOD="github.com",za.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ga extends qa{constructor(){super("twitter.com")}static credential(e,t){return Ua._fromParams({providerId:Ga.PROVIDER_ID,signInMethod:Ga.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ga.credentialFromTaggedObject(e)}static credentialFromError(e){return Ga.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ga.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ka(e,t){return ea(e,"POST","/v1/accounts:signUp",Xi(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ga.TWITTER_SIGN_IN_METHOD="twitter.com",Ga.PROVIDER_ID="twitter.com";class Ya{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await fa._fromIdTokenResponse(e,n,r),a=Ja(n);return new Ya({user:i,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ja(n);return new Ya({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ja(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class Xa extends $t{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Xa.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Xa(e,t,n,r)}}function Za(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Xa._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(e,t,n=!1){const r=await oa(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ya._forOperation(e,"link",r)}
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
async function es(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const a=await oa(e,Za(r,i,t,e),n);Fi(a.idToken,r,"internal-error");const s=sa(a.idToken);Fi(s,r,"internal-error");const{sub:o}=s;return Fi(e.uid===o,r,"user-mismatch"),Ya._forOperation(e,i,a)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Ni(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(e,t,n=!1){const r="signIn",i=await Za(e,r,t),a=await Ya._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ns(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=tn(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},a=await oa(r,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return Zi(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const s=r.providerData.find((({providerId:e})=>"password"===e));s&&(s.displayName=r.displayName,s.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}new WeakMap;const rs="__sak";
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
 */class is{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(rs,"1"),this.storage.removeItem(rs),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as extends is{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Vt();return ba(e)||Ea(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=Aa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);xa()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}as.type="LOCAL";const ss=as;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends is{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}os.type="SESSION";const us=os;
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
class cs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new cs(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(null==a?void 0:a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(a).map((async e=>e(t.origin,i))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ls(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */cs.receivers=[];class hs{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise(((s,o)=>{const u=ls("",20);r.port1.start();const c=setTimeout((()=>{o(new Error("unsupported_event"))}),n);a={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===u)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(c),clearTimeout(i),o(new Error("invalid_response"))}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])})).finally((()=>{a&&this.removeMessageHandler(a)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ds(){return window}
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
function fs(){return void 0!==ds().WorkerGlobalScope&&"function"==typeof ds().importScripts}
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
const ps="firebaseLocalStorageDb",ms="firebaseLocalStorage",vs="fbase_key";class ys{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function gs(e,t){return e.transaction([ms],t?"readwrite":"readonly").objectStore(ms)}function ws(){const e=indexedDB.open(ps,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(ms,{keyPath:vs})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(ms)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(ps);return new ys(e).toPromise()}(),t(await ws()))}))}))}async function bs(e,t,n){const r=gs(e,!0).put({[vs]:t,value:n});return new ys(r).toPromise()}function _s(e,t){const n=gs(e,!0).delete(t);return new ys(n).toPromise()}class ks{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ws()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=cs._getInstance(fs()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new hs(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ws();return await bs(e,rs,"1"),await _s(e,rs),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>bs(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=gs(e,!1).get(t),r=await new ys(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>_s(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=gs(e,!1).getAll();return new ys(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ks.type="LOCAL";const Is=ks;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ss(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,a;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Ci("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(a=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==a?a:document).appendChild(r)}))}function Ts(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
Ts("rcb"),new zi(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Es="recaptcha";async function xs(e,t,n){var r;const i=await n.verify();try{let a;if(Fi("string"==typeof i,e,"argument-error"),Fi(n.type===Es,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){const t=a.session;if("phoneNumber"in a){Fi("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Zi(e,"POST","/v2/accounts/mfaEnrollment:start",Xi(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Fi("signin"===t.type,e,"internal-error");const n=(null===(r=a.multiFactorHint)||void 0===r?void 0:r.uid)||a.multiFactorUid;Fi(n,e,"missing-multi-factor-info");const s=await function(e,t){return Zi(e,"POST","/v2/accounts/mfaSignIn:start",Xi(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Zi(e,"POST","/v1/accounts:sendVerificationCode",Xi(e,t))}(e,{phoneNumber:a.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class As{constructor(e){this.providerId=As.PROVIDER_ID,this.auth=Pa(e)}verifyPhoneNumber(e,t){return xs(this.auth,e,tn(t))}static credential(e,t){return Va._fromVerification(e,t)}static credentialFromResult(e){const t=e;return As.credentialFromTaggedObject(t)}static credentialFromError(e){return As.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Va._fromTokenResponse(t,n):null}}
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
function Rs(e,t){return t?Wi(t):(Fi(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */As.PROVIDER_ID="phone",As.PHONE_SIGN_IN_METHOD="phone";class Os extends La{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Da(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Da(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Da(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ps(e){return ts(e.auth,new Os(e),e.bypassAuthState)}function Ms(e){const{auth:t,user:n}=e;return Fi(n,t,"internal-error"),es(n,new Os(e),e.bypassAuthState)}async function Ls(e){const{auth:t,user:n}=e;return Fi(n,t,"internal-error"),Qa(n,new Os(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:a,type:s}=e;if(a)return void this.reject(a);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ps;case"linkViaPopup":case"linkViaRedirect":return Ls;case"reauthViaPopup":case"reauthViaRedirect":return Ms;default:Ni(this.auth,"internal-error")}}resolve(e){ji(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ji(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new zi(2e3,1e4);class Ds extends Ns{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Ds.currentPopupAction&&Ds.currentPopupAction.cancel(),Ds.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Fi(e,this.auth,"internal-error"),e}async onExecution(){ji(1===this.filter.length,"Popup operations only handle one event");const e=ls();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Ci(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Ci(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ds.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Ci(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Cs.get())};e()}}Ds.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Us=new Map;class Fs extends Ns{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Us.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=js(t),r=Vs(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Us.set(this.auth._key(),e)}return this.bypassAuthState||Us.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Vs(e){return Wi(e._redirectPersistence)}function js(e){return va("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(e,t,n=!1){const r=Pa(e),i=Rs(r,t),a=new Fs(r,i,n),s=await a.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}class Ws{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $s(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!$s(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ci(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(qs(e))}saveEventToCache(e){this.cachedEventUids.add(qs(e)),this.lastProcessedEventTime=Date.now()}}function qs(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function $s({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hs=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zs=/^https?/;async function Gs(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Zi(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Ks(e))return}catch(e){}Ni(e,"unauthorized-domain")}function Ks(e){const t=qi(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!zs.test(n))return!1;if(Hs.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const Ys=new zi(3e4,6e4);function Js(){const e=ds().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Xs=null;function Zs(e){return Xs=Xs||function(e){return new Promise(((t,n)=>{var r,i,a;function s(){Js(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Js(),n(Ci(e,"network-request-failed"))},timeout:Ys.get()})}if(null===(i=null===(r=ds().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=ds().gapi)||void 0===a?void 0:a.load)){const t=Ts("iframefcb");return ds()[t]=()=>{gapi.load?s():n(Ci(e,"network-request-failed"))},Ss(`https://apis.google.com/js/api.js?onload=${t}`)}s()}})).catch((e=>{throw Xs=null,e}))}(e),Xs}
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
 */const Qs=new zi(5e3,15e3),eo={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},to=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function no(e){const t=e.config;Fi(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Gi(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:An},i=to.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Yt(r).slice(1)}`}
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
const ro={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class io{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function ao(e,t,n,r=500,i=600){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const u=Object.assign(Object.assign({},ro),{width:r.toString(),height:i.toString(),top:a,left:s}),c=Vt().toLowerCase();n&&(o=_a(c)?"_blank":n),wa(c)&&(t=t||"http://localhost",u.scrollbars="yes");const l=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Vt()){var t;return Ea(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",o),new io(null);const h=window.open(t||"",o,l);Fi(h,e,"popup-blocked");try{h.focus()}catch(e){}return new io(h)}const so="emulator/auth/handler";function oo(e,t,n,r,i,a){Fi(e.config.authDomain,e,"auth-domain-config-required"),Fi(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:An,eventId:i};if(t instanceof Wa){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))s[e]=t}if(t instanceof qa){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const o=s;for(const e of Object.keys(o))void 0===o[e]&&delete o[e];return`${function({config:e}){return e.emulator?Gi(e,so):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Yt(o).slice(1)}`}const uo="webStorageSupport";const co=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=us,this._completeRedirectFn=Bs}async _openPopup(e,t,n,r){var i;ji(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return ao(e,oo(e,t,n,qi(),r),ls())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=oo(e,t,n,qi(),r),ds().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(ji(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await async function(e){const t=await Zs(e),n=ds().gapi;return Fi(n,e,"internal-error"),t.open({where:document.body,url:no(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eo,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Ci(e,"network-request-failed"),a=ds().setTimeout((()=>{r(i)}),Qs.get());function s(){ds().clearTimeout(a),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}(e),n=new Ws(e);return t.register("authEvent",(t=>{Fi(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(uo,{type:uo},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Ni(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Gs(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Aa()||ba()||Ea()}};var lo,ho="@firebase/auth",fo="0.19.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class po{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Fi(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lo="Browser",Sn(new nn("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{Fi(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),Fi(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:lo,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ra(lo)},a=new Oa(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Wi);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),Sn(new nn("auth-internal",(e=>{const t=Pa(e.getProvider("auth").getImmediate());return new po(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),On(ho,fo,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(lo)),On(ho,fo,"esm2017");var mo=
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
function(e=Rn()){const t=Tn(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Tn(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Gt(n.getOptions(),null!=t?t:{}))return e;Ni(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:co,persistence:[Is,ss,us]})}(Ei);function vo(e){return t=e,tn(mo).onAuthStateChanged(t,n,r);var t,n,r}function yo(){return mo.currentUser}function go(){var e,t;return null!==(t=null===(e=yo())||void 0===e?void 0:e.uid)&&void 0!==t?t:""}function wo(){var e,t;return null!==(t=null===(e=yo())||void 0===e?void 0:e.displayName)&&void 0!==t?t:""}function bo(){return(bo=o(t(Y).mark((function e(n){var r;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=yo())){e.next=4;break}return e.next=4,ns(r,{displayName:n});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _o(e){return bo.apply(this,arguments)}vo((function(e){return!e&&async function(e){var t;const n=Pa(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Ya({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Ka(n,{returnSecureToken:!0}),i=await Ya._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}(mo)}));
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
class ko{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ko.UNAUTHENTICATED=new ko(null),ko.GOOGLE_CREDENTIALS=new ko("google-credentials-uid"),ko.FIRST_PARTY=new ko("first-party-uid"),ko.MOCK_USER=new ko("mock-user");
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
let Io="9.6.0";
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
 */const So=new pn("@firebase/firestore");function To(e,...t){if(So.logLevel<=un.DEBUG){const n=t.map(Ao);So.debug(`Firestore (${Io}): ${e}`,...n)}}function Eo(e,...t){if(So.logLevel<=un.ERROR){const n=t.map(Ao);So.error(`Firestore (${Io}): ${e}`,...n)}}function xo(e,...t){if(So.logLevel<=un.WARN){const n=t.map(Ao);So.warn(`Firestore (${Io}): ${e}`,...n)}}function Ao(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Ro(e="Unexpected state"){const t=`FIRESTORE (${Io}) INTERNAL ASSERTION FAILED: `+e;throw Eo(t),new Error(t)}function Oo(e,t){e||Ro()}function Po(e,t){return e}
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
 */const Mo="cancelled",Lo="unknown",No="invalid-argument",Co="deadline-exceeded",Do="not-found",Uo="permission-denied",Fo="unauthenticated",Vo="resource-exhausted",jo="failed-precondition",Bo="aborted",Wo="out-of-range",qo="unimplemented",$o="internal",Ho="unavailable";class zo extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
class Go{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ko{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ko.UNAUTHENTICATED)))}shutdown(){}}class Yo{constructor(e){this.auth=null,e.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(Oo("string"==typeof e.accessToken),new Go(e.accessToken,new ko(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class Jo{constructor(e,t,n){this.type="FirstParty",this.user=ko.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Xo{constructor(e,t,n){this.t=e,this.i=t,this.o=n}getToken(){return Promise.resolve(new Jo(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable((()=>t(ko.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Zo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Qo{constructor(e){this.u=e,this.appCheck=null,e.onInit((e=>{this.appCheck=e}))}getToken(){return this.appCheck?this.appCheck.getToken().then((e=>e?(Oo("string"==typeof e.token),new Zo(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}
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
 */class eu{constructor(e,t,n,r,i,a,s,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=s,this.useFetchStreams=o}}class tu{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof tu&&e.projectId===this.projectId&&e.database===this.database}}
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
 */class nu{constructor(e,t,n){void 0===t?t=0:t>e.length&&Ro(),void 0===n?n=e.length-t:n>e.length-t&&Ro(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===nu.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof nu?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ru extends nu{construct(e,t,n){return new ru(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new zo(No,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ru(t)}static emptyPath(){return new ru([])}}const iu=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class au extends nu{construct(e,t,n){return new au(e,t,n)}static isValidIdentifier(e){return iu.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),au.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new au(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new zo(No,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new zo(No,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new zo(No,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(a=!a,r++):"."!==t||a?(n+=t,r++):(i(),r++)}if(i(),a)throw new zo(No,"Unterminated ` in path: "+e);return new au(t)}static emptyPath(){return new au([])}}
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
 */class su{constructor(e){this.path=e}static fromPath(e){return new su(ru.fromString(e))}static fromName(e){return new su(ru.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===ru.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ru.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new su(new ru(e.slice()))}}
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
 */function ou(e,t,n){if(!n)throw new zo(No,`Function ${e}() cannot be called with an empty ${t}.`)}function uu(e){if(!su.isDocumentKey(e))throw new zo(No,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function cu(e){if(su.isDocumentKey(e))throw new zo(No,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function lu(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Ro()}function hu(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new zo(No,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lu(e);throw new zo(No,`Expected type '${t.name}', but it was: ${n}`)}}return e}function du(e,t){if(t<=0)throw new zo(No,`Function ${e}() requires a positive number, but it was: ${t}.`)}
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
 */function fu(e){return null==e}function pu(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */var vu,yu;function gu(e){if(void 0===e)return Eo("RPC_ERROR","HTTP error has no status"),Lo;switch(e){case 200:return"ok";case 400:return jo;case 401:return Fo;case 403:return Uo;case 404:return Do;case 409:return Bo;case 416:return Wo;case 429:return Vo;case 499:return Mo;case 500:return Lo;case 501:return qo;case 503:return Ho;case 504:return Co;default:return e>=200&&e<300?"ok":e>=400&&e<500?jo:e>=500&&e<600?$o:Lo}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(yu=vu||(vu={}))[yu.OK=0]="OK",yu[yu.CANCELLED=1]="CANCELLED",yu[yu.UNKNOWN=2]="UNKNOWN",yu[yu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",yu[yu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",yu[yu.NOT_FOUND=5]="NOT_FOUND",yu[yu.ALREADY_EXISTS=6]="ALREADY_EXISTS",yu[yu.PERMISSION_DENIED=7]="PERMISSION_DENIED",yu[yu.UNAUTHENTICATED=16]="UNAUTHENTICATED",yu[yu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",yu[yu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",yu[yu.ABORTED=10]="ABORTED",yu[yu.OUT_OF_RANGE=11]="OUT_OF_RANGE",yu[yu.UNIMPLEMENTED=12]="UNIMPLEMENTED",yu[yu.INTERNAL=13]="INTERNAL",yu[yu.UNAVAILABLE=14]="UNAVAILABLE",yu[yu.DATA_LOSS=15]="DATA_LOSS";class wu extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.h=t+"://"+e.host,this.l="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}m(e,t,n,r,i){const a=this.p(e,t);To("RestConnection","Sending: ",a,n);const s={};return this.g(s,r,i),this.v(e,a,s,n).then((e=>(To("RestConnection","Received: ",e),e)),(t=>{throw xo("RestConnection",`${e} failed with error: `,t,"url: ",a,"request:",n),t}))}T(e,t,n,r,i){return this.m(e,t,n,r,i)}g(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Io,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}p(e,t){const n=mu[e];return`${this.h}/v1/${t}:${n}`}}{constructor(e,t){super(e),this.I=t}A(e,t){throw new Error("Not supported by FetchConnection")}async v(e,t,n,r){const i=JSON.stringify(r);let a;try{a=await this.I(t,{method:"POST",headers:n,body:i})}catch(e){throw new zo(gu(e.status),"Request failed with error: "+e.statusText)}if(!a.ok)throw new zo(gu(a.status),"Request failed with error: "+a.statusText);return a.json()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
 */function bu(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */class _u{static P(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=bu(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function ku(e,t){return e<t?-1:e>t?1:0}function Iu(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
 */class Su{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new zo(No,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new zo(No,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new zo(No,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new zo(No,"Timestamp seconds out of range: "+e)}static now(){return Su.fromMillis(Date.now())}static fromDate(e){return Su.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Su(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ku(this.nanoseconds,e.nanoseconds):ku(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class Tu{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Tu(e)}static min(){return new Tu(new Su(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function Eu(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function xu(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(e){this.fields=e,e.sort(au.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Iu(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
 */class Ru{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Ru(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ru(t)}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ku(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ru.EMPTY_BYTE_STRING=new Ru("");const Ou=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pu(e){if(Oo(!!e),"string"==typeof e){let t=0;const n=Ou.exec(e);if(Oo(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Mu(e.seconds),nanos:Mu(e.nanos)}}function Mu(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Lu(e){return"string"==typeof e?Ru.fromBase64String(e):Ru.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Cu(e){const t=e.mapValue.fields.__previous_value__;return Nu(t)?Cu(t):t}function Du(e){const t=Pu(e.mapValue.fields.__local_write_time__.timestampValue);return new Su(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Nu(e)?4:10:Ro()}function Fu(e,t){const n=Uu(e);if(n!==Uu(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Du(e).isEqual(Du(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Pu(e.timestampValue),r=Pu(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,Lu(e.bytesValue).isEqual(Lu(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Mu(e.geoPointValue.latitude)===Mu(t.geoPointValue.latitude)&&Mu(e.geoPointValue.longitude)===Mu(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Mu(e.integerValue)===Mu(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Mu(e.doubleValue),r=Mu(t.doubleValue);return n===r?pu(n)===pu(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Iu(e.arrayValue.values||[],t.arrayValue.values||[],Fu);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Eu(n)!==Eu(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!Fu(n[e],r[e])))return!1;return!0}(e,t);default:return Ro()}var r}function Vu(e,t){return void 0!==(e.values||[]).find((e=>Fu(e,t)))}function ju(e,t){const n=Uu(e),r=Uu(t);if(n!==r)return ku(n,r);switch(n){case 0:return 0;case 1:return ku(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Mu(e.integerValue||e.doubleValue),r=Mu(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return Bu(e.timestampValue,t.timestampValue);case 4:return Bu(Du(e),Du(t));case 5:return ku(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Lu(e),r=Lu(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=ku(n[e],r[e]);if(0!==t)return t}return ku(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=ku(Mu(e.latitude),Mu(t.latitude));return 0!==n?n:ku(Mu(e.longitude),Mu(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=ju(n[e],r[e]);if(t)return t}return ku(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},a=Object.keys(i);r.sort(),a.sort();for(let e=0;e<r.length&&e<a.length;++e){const t=ku(r[e],a[e]);if(0!==t)return t;const s=ju(n[r[e]],i[a[e]]);if(0!==s)return s}return ku(r.length,a.length)}(e.mapValue,t.mapValue);default:throw Ro()}}function Bu(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ku(e,t);const n=Pu(e),r=Pu(t),i=ku(n.seconds,r.seconds);return 0!==i?i:ku(n.nanos,r.nanos)}function Wu(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function qu(e){return!!e&&"arrayValue"in e}function $u(e){return!!e&&"nullValue"in e}function Hu(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function zu(e){return!!e&&"mapValue"in e}function Gu(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return xu(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Gu(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Gu(e.arrayValue.values[n]);return t}return Object.assign({},e)}
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
 */class Ku{constructor(e){this.value=e}static empty(){return new Ku({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!zu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Gu(t)}setAll(e){let t=au.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Gu(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());zu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Fu(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];zu(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){xu(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Ku(Gu(this.value))}}
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
 */class Yu{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new Yu(e,0,Tu.min(),Ku.empty(),0)}static newFoundDocument(e,t,n){return new Yu(e,1,t,n,0)}static newNoDocument(e,t){return new Yu(e,2,t,Ku.empty(),0)}static newUnknownDocument(e,t){return new Yu(e,3,t,Ku.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ku.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ku.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Yu&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Yu(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Ju{constructor(e,t=null,n=[],r=[],i=null,a=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=a,this.endAt=s,this.R=null}}function Xu(e,t=null,n=[],r=[],i=null,a=null,s=null){return new Ju(e,t,n,r,i,a,s)}class Zu extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new Qu(e,t,n):"array-contains"===t?new rc(e,n):"in"===t?new ic(e,n):"not-in"===t?new ac(e,n):"array-contains-any"===t?new sc(e,n):new Zu(e,t,n)}static V(e,t,n){return"in"===t?new ec(e,n):new tc(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.D(ju(t,this.value)):null!==t&&Uu(this.value)===Uu(t)&&this.D(ju(t,this.value))}D(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ro()}}N(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Qu extends Zu{constructor(e,t,n){super(e,t,n),this.key=su.fromName(n.referenceValue)}matches(e){const t=su.comparator(e.key,this.key);return this.D(t)}}class ec extends Zu{constructor(e,t){super(e,"in",t),this.keys=nc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class tc extends Zu{constructor(e,t){super(e,"not-in",t),this.keys=nc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function nc(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>su.fromName(e.referenceValue)))}class rc extends Zu{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return qu(t)&&Vu(t.arrayValue,this.value)}}class ic extends Zu{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Vu(this.value.arrayValue,t)}}class ac extends Zu{constructor(e,t){super(e,"not-in",t)}matches(e){if(Vu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Vu(this.value.arrayValue,t)}}class sc extends Zu{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!qu(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Vu(this.value.arrayValue,e)))}}class oc{constructor(e,t){this.position=e,this.before=t}}class uc{constructor(e,t="asc"){this.field=e,this.dir=t}}
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
class cc{constructor(e,t=null,n=[],r=[],i=null,a="F",s=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=a,this.startAt=s,this.endAt=o,this.$=null,this.F=null,this.startAt,this.endAt}}function lc(e){return!fu(e.limit)&&"L"===e.limitType}function hc(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function dc(e){for(const t of e.filters)if(t.N())return t.field;return null}function fc(e){return null!==e.collectionGroup}function pc(e){const t=Po(e);if(null===t.$){t.$=[];const e=dc(t),n=hc(t);if(null!==e&&null===n)e.isKeyField()||t.$.push(new uc(e)),t.$.push(new uc(au.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.$.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.$.push(new uc(au.keyField(),e))}}}return t.$}function mc(e){const t=Po(e);if(!t.F)if("F"===t.limitType)t.F=Xu(t.path,t.collectionGroup,pc(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of pc(t)){const t="desc"===n.dir?"asc":"desc";e.push(new uc(n.field,t))}const n=t.endAt?new oc(t.endAt.position,!t.endAt.before):null,r=t.startAt?new oc(t.startAt.position,!t.startAt.before):null;t.F=Xu(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.F}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vc(e,t){return"number"==typeof(n=t)&&Number.isInteger(n)&&!pu(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER?function(e){return{integerValue:""+e}}(t):function(e,t){if(e.S){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:pu(t)?"-0":t}}(e,t);var n}
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
 */class yc{constructor(){this._=void 0}}class gc extends yc{}class wc extends yc{constructor(e){super(),this.elements=e}}class bc extends yc{constructor(e){super(),this.elements=e}}class _c extends yc{constructor(e,t){super(),this.q=e,this.O=t}}
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
 */class kc{constructor(e,t){this.field=e,this.transform=t}}class Ic{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ic}static exists(e){return new Ic(void 0,e)}static updateTime(e){return new Ic(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Sc{}class Tc extends Sc{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ec extends Sc{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}class xc extends Sc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Ac extends Sc{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
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
 */const Rc={asc:"ASCENDING",desc:"DESCENDING"},Oc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Pc{constructor(e,t){this.databaseId=e,this.S=t}}function Mc(e,t){return e.S?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Lc(e,t){return e.S?t.toBase64():t.toUint8Array()}function Nc(e,t){return Mc(e,t.toTimestamp())}function Cc(e){return Oo(!!e),Tu.fromTimestamp(function(e){const t=Pu(e);return new Su(t.seconds,t.nanos)}(e))}function Dc(e,t){return(n=e,new ru(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function Uc(e,t){return Dc(e.databaseId,t.path)}function Fc(e,t){const n=function(e){const t=ru.fromString(e);return Oo(Gc(t)),t}(t);if(n.get(1)!==e.databaseId.projectId)throw new zo(No,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new zo(No,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);var r;return new su((Oo((r=n).length>4&&"documents"===r.get(4)),r.popFirst(5)))}function Vc(e,t){return Dc(e.databaseId,t)}function jc(e){return new ru(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Bc(e,t,n){return{name:Uc(e,t),fields:n.value.mapValue.fields}}function Wc(e){return{before:e.before,values:e.position}}function qc(e){return Rc[e]}function $c(e){return Oc[e]}function Hc(e){return{fieldPath:e.canonicalString()}}function zc(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Gc(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(e){return new Pc(e,!0)}
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
class Yc extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.K=n,this.q=r,this.J=!1}X(){if(this.J)throw new zo(jo,"The client has already been terminated.")}m(e,t,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.K.m(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Fo&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new zo(Lo,e.toString())}))}T(e,t,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.K.T(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Fo&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new zo(Lo,e.toString())}))}terminate(){this.J=!0}}async function Jc(e,t){const n=Po(e),r=jc(n.q)+"/documents",i={writes:t.map((e=>function(e,t){let n;if(t instanceof Tc)n={update:Bc(e,t.key,t.value)};else if(t instanceof xc)n={delete:Uc(e,t.key)};else if(t instanceof Ec)n={update:Bc(e,t.key,t.data),updateMask:zc(t.fieldMask)};else{if(!(t instanceof Ac))return Ro();n={verify:Uc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof gc)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof wc)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof bc)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof _c)return{fieldPath:t.field.canonicalString(),increment:n.O};throw Ro()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:Nc(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Ro())),n;var r,i}(n.q,e)))};await n.m("Commit",r,i)}async function Xc(e,t){const n=Po(e),r=jc(n.q)+"/documents",i={documents:t.map((e=>Uc(n.q,e)))},a=await n.T("BatchGetDocuments",r,i),s=new Map;a.forEach((e=>{const t=(r=n.q,"found"in(i=e)?function(e,t){Oo(!!t.found),t.found.name,t.found.updateTime;const n=Fc(e,t.found.name),r=Cc(t.found.updateTime),i=new Ku({mapValue:{fields:t.found.fields}});return Yu.newFoundDocument(n,r,i)}(r,i):"missing"in i?function(e,t){Oo(!!t.missing),Oo(!!t.readTime);const n=Fc(e,t.missing),r=Cc(t.readTime);return Yu.newNoDocument(n,r)}(r,i):Ro());var r,i;s.set(t.key.toString(),t)}));const o=[];return t.forEach((e=>{const t=s.get(e.toString());Oo(!!t),o.push(t)})),o}async function Zc(e,t){const n=Po(e),r=function(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Vc(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Vc(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(Hu(e.value))return{unaryFilter:{field:Hc(e.field),op:"IS_NAN"}};if($u(e.value))return{unaryFilter:{field:Hc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Hu(e.value))return{unaryFilter:{field:Hc(e.field),op:"IS_NOT_NAN"}};if($u(e.value))return{unaryFilter:{field:Hc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Hc(e.field),op:$c(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const a=function(e){if(0!==e.length)return e.map((e=>{return{field:Hc((t=e).field),direction:qc(t.dir)};var t}))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const s=(o=e,u=t.limit,o.S||fu(u)?u:{value:u});var o,u;return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt=Wc(t.startAt)),t.endAt&&(n.structuredQuery.endAt=Wc(t.endAt)),n}(n.q,mc(t));return(await n.T("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter((e=>!!e.document)).map((e=>function(e,t,n){const r=Fc(e,t.name),i=Cc(t.updateTime),a=new Ku({mapValue:{fields:t.fields}}),s=Yu.newFoundDocument(r,i,a);return s}(n.q,e.document)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=new Map;function el(e){if(e._terminated)throw new zo(jo,"The client has already been terminated.");if(!Qc.has(e)){To("ComponentProvider","Initializing Datastore");const s=(n=e._databaseId,r=e.app.options.appId||"",i=e._persistenceKey,a=e._freezeSettings(),t=new eu(n,r,i,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams),new wu(t,fetch.bind(null))),o=Kc(e._databaseId),u=function(e,t,n,r){return new Yc(e,t,n,r)}(e._authCredentials,e._appCheckCredentials,s,o);Qc.set(e,u)}var t,n,r,i,a;
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
return Qc.get(e)}class tl{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new zo(No,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new zo(No,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new zo(No,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,e.experimentalForceLongPolling,0,e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tl({}),this._settingsFrozen=!1,e instanceof tu?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new zo(No,'"projectId" not provided in firebase.initializeApp.');return new tu(e.options.projectId)}(e))}get app(){if(!this._app)throw new zo(jo,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new zo(jo,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tl(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Ko;switch(e.type){case"gapi":const t=e.client;return Oo(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Xo(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new zo(No,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Qc.get(e);t&&(To("ComponentProvider","Removing Datastore"),Qc.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class rl{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new al(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new rl(this.firestore,e,this._key)}}class il{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new il(this.firestore,e,this._query)}}class al extends il{constructor(e,t,n){super(e,t,new cc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new rl(this.firestore,null,new su(e))}withConverter(e){return new al(this.firestore,e,this._path)}}function sl(e,t,...n){if(e=tn(e),ou("collection","path",t),e instanceof nl){const r=ru.fromString(t,...n);return cu(r),new al(e,null,r)}{if(!(e instanceof rl||e instanceof al))throw new zo(No,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ru.fromString(t,...n));return cu(r),new al(e.firestore,null,r)}}function ol(e,t,...n){if(e=tn(e),1===arguments.length&&(t=_u.P()),ou("doc","path",t),e instanceof nl){const r=ru.fromString(t,...n);return uu(r),new rl(e,null,new su(r))}{if(!(e instanceof rl||e instanceof al))throw new zo(No,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(ru.fromString(t,...n));return uu(r),new rl(e.firestore,e instanceof al?e.converter:null,new su(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ul{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new zo(No,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new au(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new cl(Ru.fromBase64String(e))}catch(e){throw new zo(No,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new cl(Ru.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e){this._methodName=e}}
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
 */class hl{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new zo(No,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new zo(No,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ku(this._lat,e._lat)||ku(this._long,e._long)}}
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
 */const dl=/^__.*__$/;class fl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Ec(e,this.data,this.fieldMask,t,this.fieldTransforms):new Tc(e,this.data,t,this.fieldTransforms)}}class pl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Ec(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ml(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ro()}}class vl{constructor(e,t,n,r,i,a){this.settings=e,this.databaseId=t,this.q=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Z(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}nt(e){return new vl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.q,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}et(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nt({path:n,rt:!1});return r.st(e),r}it(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nt({path:n,rt:!1});return r.Z(),r}ot(e){return this.nt({path:void 0,rt:!0})}ut(e){return Ml(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.at)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Z(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(0===e.length)throw this.ut("Document fields must not be empty");if(ml(this.tt)&&dl.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class yl{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.q=n||Kc(e)}ht(e,t,n,r=!1){return new vl({tt:e,methodName:t,at:n,path:au.emptyPath(),rt:!1,ct:r},this.databaseId,this.q,this.ignoreUndefinedProperties)}}function gl(e){const t=e._freezeSettings(),n=Kc(e._databaseId);return new yl(e._databaseId,!!t.ignoreUndefinedProperties,n)}function wl(e,t,n,r,i,a={}){const s=e.ht(a.merge||a.mergeFields?2:0,t,n,i);Al("Data must be an object, but it was:",s,r);const o=El(r,s);let u,c;if(a.merge)u=new Au(s.fieldMask),c=s.fieldTransforms;else if(a.mergeFields){const e=[];for(const r of a.mergeFields){const i=Rl(t,r,n);if(!s.contains(i))throw new zo(No,`Field '${i}' is specified in your field mask but missing from your input data.`);Ll(e,i)||e.push(i)}u=new Au(e),c=s.fieldTransforms.filter((e=>u.covers(e.field)))}else u=null,c=s.fieldTransforms;return new fl(new Ku(o),u,c)}class bl extends ll{_toFieldTransform(e){if(2!==e.tt)throw 1===e.tt?e.ut(`${this._methodName}() can only appear at the top level of your update data`):e.ut(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof bl}}class _l extends ll{_toFieldTransform(e){return new kc(e.path,new gc)}isEqual(e){return e instanceof _l}}function kl(e,t,n,r){const i=e.ht(1,t,n);Al("Data must be an object, but it was:",i,r);const a=[],s=Ku.empty();xu(r,((e,r)=>{const o=Pl(t,e,n);r=tn(r);const u=i.it(o);if(r instanceof bl)a.push(o);else{const e=Tl(r,u);null!=e&&(a.push(o),s.set(o,e))}}));const o=new Au(a);return new pl(s,o,i.fieldTransforms)}function Il(e,t,n,r,i,a){const s=e.ht(1,t,n),o=[Rl(t,r,n)],u=[i];if(a.length%2!=0)throw new zo(No,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<a.length;e+=2)o.push(Rl(t,a[e])),u.push(a[e+1]);const c=[],l=Ku.empty();for(let e=o.length-1;e>=0;--e)if(!Ll(c,o[e])){const t=o[e];let n=u[e];n=tn(n);const r=s.it(t);if(n instanceof bl)c.push(t);else{const e=Tl(n,r);null!=e&&(c.push(t),l.set(t,e))}}const h=new Au(c);return new pl(l,h,s.fieldTransforms)}function Sl(e,t,n,r=!1){return Tl(n,e.ht(r?4:3,t))}function Tl(e,t){if(xl(e=tn(e)))return Al("Unsupported field value:",t,e),El(e,t);if(e instanceof ll)return function(e,t){if(!ml(t.tt))throw t.ut(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ut(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.rt&&4!==t.tt)throw t.ut("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Tl(i,t.ot(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=tn(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return vc(t.q,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Su.fromDate(e);return{timestampValue:Mc(t.q,n)}}if(e instanceof Su){const n=new Su(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Mc(t.q,n)}}if(e instanceof hl)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof cl)return{bytesValue:Lc(t.q,e._byteString)};if(e instanceof rl){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ut(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Dc(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ut(`Unsupported field value: ${lu(e)}`)}(e,t)}function El(e,t){const n={};return function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):xu(e,((e,r)=>{const i=Tl(r,t.et(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function xl(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Su||e instanceof hl||e instanceof cl||e instanceof rl||e instanceof ll)}function Al(e,t,n){if(!xl(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=lu(n);throw"an object"===r?t.ut(e+" a custom object"):t.ut(e+" "+r)}var r}function Rl(e,t,n){if((t=tn(t))instanceof ul)return t._internalPath;if("string"==typeof t)return Pl(e,t);throw Ml("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Ol=new RegExp("[~\\*/\\[\\]]");function Pl(e,t,n){if(t.search(Ol)>=0)throw Ml(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ul(...t.split("."))._internalPath}catch(r){throw Ml(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Ml(e,t,n,r,i){const a=r&&!r.isEmpty(),s=void 0!==i;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let u="";return(a||s)&&(u+=" (found",a&&(u+=` in field ${r}`),s&&(u+=` in document ${i}`),u+=")"),new zo(No,o+e+u)}function Ll(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Cl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ul("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Cl extends Nl{data(){return super.data()}}class Dl{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(e,t){this._docs.forEach(e,t)}}function Ul(e,t){return"string"==typeof t?Pl(e,t):t instanceof ul?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{}function Vl(e,...t){for(const n of t)e=n._apply(e);return e}class jl extends Fl{constructor(e,t,n){super(),this.dt=e,this.wt=t,this.yt=n,this.type="where"}_apply(e){const t=gl(e.firestore),n=function(e,t,n,r,i,a,s){let o;if(i.isKeyField()){if("array-contains"===a||"array-contains-any"===a)throw new zo(No,`Invalid Query. You can't perform '${a}' queries on FieldPath.documentId().`);if("in"===a||"not-in"===a){Gl(s,a);const t=[];for(const n of s)t.push(zl(r,e,n));o={arrayValue:{values:t}}}else o=zl(r,e,s)}else"in"!==a&&"not-in"!==a&&"array-contains-any"!==a||Gl(s,a),o=Sl(n,"where",s,"in"===a||"not-in"===a);const u=Zu.create(i,a,o);return function(e,t){if(t.N()){const n=dc(e);if(null!==n&&!n.isEqual(t.field))throw new zo(No,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=hc(e);null!==r&&Kl(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new zo(No,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new zo(No,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,u),u}(e._query,0,t,e.firestore._databaseId,this.dt,this.wt,this.yt);return new il(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new cc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function Bl(e,t,n){const r=t,i=Ul("where",e);return new jl(i,r,n)}class Wl extends Fl{constructor(e,t){super(),this.dt=e,this._t=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new zo(No,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new zo(No,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new uc(t,n);return function(e,t){if(null===hc(e)){const n=dc(e);null!==n&&Kl(e,n,t.field)}}(e,r),r}(e._query,this.dt,this._t);return new il(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new cc(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function ql(e,t="asc"){const n=t,r=Ul("orderBy",e);return new Wl(r,n)}class $l extends Fl{constructor(e,t,n){super(),this.type=e,this.gt=t,this.bt=n}_apply(e){return new il(e.firestore,e.converter,(t=e._query,n=this.gt,r=this.bt,new cc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),n,r,t.startAt,t.endAt)));var t,n,r}}function Hl(e){return du("limit",e),new $l("limit",e,"F")}function zl(e,t,n){if("string"==typeof(n=tn(n))){if(""===n)throw new zo(No,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!fc(t)&&-1!==n.indexOf("/"))throw new zo(No,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(ru.fromString(n));if(!su.isDocumentKey(r))throw new zo(No,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Wu(e,new su(r))}if(n instanceof rl)return Wu(e,n._key);throw new zo(No,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${lu(n)}.`)}function Gl(e,t){if(!Array.isArray(e)||0===e.length)throw new zo(No,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new zo(No,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Kl(e,t,n){if(!n.isEqual(t))throw new zo(No,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
 */function Yl(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Jl extends class{convertValue(e,t="none"){switch(Uu(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Mu(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Lu(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Ro()}}convertObject(e,t){const n={};return xu(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new hl(Mu(e.latitude),Mu(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Cu(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Du(e));default:return null}}convertTimestamp(e){const t=Pu(e);return new Su(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ru.fromString(e);Oo(Gc(n));const r=new tu(n.get(1),n.get(3)),i=new su(n.popFirst(5));return r.isEqual(t)||Eo(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new cl(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new rl(this.firestore,null,t)}}function Xl(e){const t=el((e=hu(e,rl)).firestore),n=new Jl(e.firestore);return Xc(t,[e._key]).then((t=>{Oo(1===t.length);const r=t[0];return new Nl(e.firestore,n,e._key,r.isFoundDocument()?r:null,e.converter)}))}function Zl(e){!function(e){if(lc(e)&&0===e.explicitOrderBy.length)throw new zo(qo,"limitToLast() queries require specifying at least one orderBy() clause")}((e=hu(e,il))._query);const t=el(e.firestore),n=new Jl(e.firestore);return Zc(t,e._query).then((t=>{const r=t.map((t=>new Cl(e.firestore,n,t.key,t,e.converter)));return lc(e._query)&&r.reverse(),new Dl(e,r)}))}function Ql(e,t,n,...r){const i=gl((e=hu(e,rl)).firestore);let a;return a="string"==typeof(t=tn(t))||t instanceof ul?Il(i,"updateDoc",e._key,t,n,r):kl(i,"updateDoc",e._key,t),Jc(el(e.firestore),[a.toMutation(e._key,Ic.exists(!0))])}function eh(e,t){const n=ol(e=hu(e,al)),r=Yl(e.converter,t),i=wl(gl(e.firestore),"addDoc",n._key,r,null!==n.converter,{});return Jc(el(e.firestore),[i.toMutation(n._key,Ic.exists(!1))]).then((()=>n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(){return new _l("serverTimestamp")}Io="9.6.0_lite",Sn(new nn("firestore/lite",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=new nl(n,new Yo(e.getProvider("auth-internal")),new Qo(e.getProvider("app-check-internal")));return t&&r._setSettings(t),r}),"PUBLIC")),On("firestore-lite","3.4.0",""),On("firestore-lite","3.4.0","esm2017");var nh=function(e=Rn()){return Tn(e,"firestore/lite").getImmediate()}(Ei),rh=sl(nh,"replays"),ih=sl(nh,"entries");function ah(){return(ah=o(t(Y).mark((function e(n,r){return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ql(ol(ih,n.id),{name:r});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function sh(e,t){return ah.apply(this,arguments)}function oh(){return(oh=o(t(Y).mark((function e(n,r){var i;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Zl(Vl(ih,Bl("version","==",n),Bl("mode","==",r),ql("score","desc"),Hl(100)));case 2:return i=e.sent,e.abrupt("return",i.docs.map((function(e){var t=e.data();return{id:e.id,uid:t.uid,name:t.name,replayId:t.replayId,score:t.score,mode:t.mode}})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function uh(e,t){return oh.apply(this,arguments)}function ch(){return(ch=o(t(Y).mark((function e(n,r){var i,a,s;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Zl(Vl(ih,Bl("version","==",n),Bl("mode","==",r),Bl("uid","==",go()),ql("score","desc"),Hl(1)));case 2:if(i=e.sent,!(a=i.docs[0])){e.next=7;break}return s=a.data(),e.abrupt("return",{id:a.id,uid:s.uid,name:s.name,replayId:s.replayId,score:s.score,mode:s.mode});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function lh(e,t){return ch.apply(this,arguments)}function hh(){return(hh=o(t(Y).mark((function e(n){var r,i;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Xl(ol(rh,n));case 2:if(r=e.sent,!(i=r.data())){e.next=6;break}return e.abrupt("return",{id:n,version:i.version,score:i.score,log:i.log,seed:i.seed,mode:i.mode});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function dh(){return(dh=o(t(Y).mark((function e(n){var r;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,eh(rh,{uid:go(),registeredAt:th(),log:n.log,version:n.version,score:n.score,mode:n.mode,seed:n.seed});case 2:return r=e.sent,e.abrupt("return",w({id:r.id},n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fh(e){return dh.apply(this,arguments)}function ph(){return(ph=o(t(Y).mark((function e(n){var r;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,eh(ih,{uid:go(),name:wo(),registeredAt:th(),replayId:n.id,version:n.version,score:n.score,mode:n.mode});case 2:return r=e.sent,e.abrupt("return",{id:r.id,uid:go(),name:wo(),replayId:n.id,score:n.score,mode:n.mode});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function mh(e){return ph.apply(this,arguments)}function vh(){return(vh=o(t(Y).mark((function e(n,r){return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ql(ol(ih,n.id),{registeredAt:th(),replayId:r.id,score:r.score});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function yh(e,t){return vh.apply(this,arguments)}var gh="no name",wh=["normal","ex"],bh={normal:"NORMAL",ex:"EX"},_h=document.querySelector(".leaderboard .entry-list"),kh=document.querySelector(".leaderboard .about-button"),Ih=document.querySelector(".leaderboard .user-button"),Sh=document.querySelector(".about"),Th=document.querySelector(".about .modal-close"),Eh=document.querySelector(".user"),xh=document.querySelector(".user .modal"),Ah=document.querySelector(".user .form"),Rh=document.querySelector(".user .form-textfield"),Oh=document.querySelector(".user .form-save"),Ph=document.querySelector(".user .record-list"),Mh=document.querySelector(".user .modal-close");if(!(_h instanceof HTMLElement&&kh instanceof HTMLElement&&Ih instanceof HTMLElement&&Sh instanceof HTMLElement&&Th instanceof HTMLElement&&Eh instanceof HTMLElement&&xh instanceof HTMLElement&&Ah instanceof HTMLFormElement&&Rh instanceof HTMLInputElement&&Oh instanceof HTMLButtonElement&&Ph instanceof HTMLElement&&Mh instanceof HTMLElement))throw Error("invalid element");var Lh={normal:{},ex:{}};function Nh(){return(Nh=o(t(Y).mark((function e(n){var r;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Lh[n].meEntry){e.next=5;break}return e.next=4,lh(0,n);case 4:r=Lh[n].meEntry=e.sent;case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ch(e){return Nh.apply(this,arguments)}function Dh(){return(Dh=o(t(Y).mark((function e(n){var r;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Lh[n].entries){e.next=5;break}return e.next=4,uh(0,n);case 4:r=Lh[n].entries=e.sent;case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Uh(e){return Dh.apply(this,arguments)}function Fh(){return(Fh=o(t(Y).mark((function e(n){var r,i,a;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fh(n);case 2:return r=e.sent,e.next=5,Ch(r.mode);case 5:if(i=e.sent,a=!1,i){e.next=14;break}return a=!0,e.next=11,mh(r);case 11:Lh[r.mode].meEntry=e.sent,e.next=19;break;case 14:if(!(i.score<n.score)){e.next=19;break}return a=!0,i.score=n.score,e.next=19,yh(i,r);case 19:return a&&(delete Lh[r.mode].entries,r.mode===qh()&&jh(r.mode)),e.abrupt("return",{replayId:r.id,newRecord:a});case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Vh(){return(Vh=o(t(Y).mark((function e(n){var r,i;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Uh(n);case 2:r=e.sent,i=r.map((function(e,t){return'\n      <div class="entry '.concat(go()===e.uid?"me":"",'">\n        <div class="entry-order">').concat(t+1,'.</div>\n        <div class="entry-name">').concat(e.name||gh,'</div>\n        <div class="entry-score">￥').concat(X(e.score),'</div>\n        <div class="entry-replay clickable" data-r="').concat(e.replayId,'"></div>\n      </div>')})),_h&&(_h.innerHTML=i.join(""));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function jh(e){return Vh.apply(this,arguments)}var Bh=null;function Wh(){var e=new URL(location.origin+location.pathname),t=zh();return t&&e.searchParams.set("r",t),e.href}function qh(){return"ex"===new URL(location.href).searchParams.get("mode")?"ex":"normal"}var $h="",Hh="";function zh(){return $h!==location.href&&($h=location.href,Hh=new URL($h).searchParams.get("r")||""),Hh}function Gh(e){if(zh()!==e){var t=new URL(location.href);e?t.searchParams.set("r",e):t.searchParams.delete("r"),history.replaceState(history.state,"",t)}}addEventListener("click",(function(e){if(e.target instanceof HTMLElement){var t=e.target.closest("a");t&&xi("link_click",{url:t.href})}})),kh.addEventListener("click",(function(){xi("about_open"),Sh.classList.add("opened")})),Th.addEventListener("click",(function(){Sh.classList.remove("opened")})),document.addEventListener("click",(function(e){if(Bh&&e.target instanceof HTMLElement){var t=e.target.closest(".entry-replay,.record-replay");t instanceof HTMLElement&&t.dataset.r&&(Gh(t.dataset.r),Bh(t.dataset.r),Sh.classList.remove("opened"),Eh.classList.remove("opened"),window.scrollTo({top:100,behavior:"smooth"}))}})),Ih.addEventListener("click",o(t(Y).mark((function e(){var n,r,i;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return xi("user_open"),Rh.value=wo(),Oh.disabled=!0,Eh.classList.add("opened"),xh.classList.add("loading"),e.prev=5,e.next=8,Promise.all(wh.map((function(e){return Ch(e)})));case 8:n=e.sent,r=n.some((function(e){return"ex"===(null==e?void 0:e.mode)})),i="",n.forEach((function(e,t){var n="<div>".concat(bh[wh[t]],"</div>");e?i+="\n          ".concat(r?n:"","\n          <div>￥").concat(X(e.score),"</div>\n          ").concat(r?"":"<div></div>",'\n          <div class="record-replay clickable" data-r="').concat(e.replayId,'"></div>'):"ex"!==wh[t]&&(i+="\n          ".concat(r?n:"","\n          <div>なし</div>\n          ").concat(r?"":"<div></div>","\n          <div></div>"))})),Ph.innerHTML=i,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0);case 18:xh.classList.remove("loading"),Rh.focus();case 20:case"end":return e.stop()}}),e,null,[[5,15]])})))),Mh.addEventListener("click",(function(){Eh.classList.remove("opened")})),Ah.addEventListener("submit",(function(e){e.preventDefault()})),Rh.addEventListener("input",(function(){Oh.disabled=!1})),Oh.addEventListener("click",o(t(Y).mark((function e(){var n,r,i;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return xi("user_save"),Oh.disabled=!0,xh.classList.add("loading"),e.prev=3,n=Rh.value,r=wo(),e.next=8,_o(n);case 8:if(i=wo(),r===i){e.next=12;break}return e.next=12,Promise.all(wh.map(o(t(Y).mark((function e(r){var i;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ch(r);case 2:if(!(i=e.sent)){e.next=8;break}return e.next=6,sh(i,n);case 6:i.name=n,delete Lh[r].entries;case 8:case"end":return e.stop()}}),e)})))));case 12:jh(qh()),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),Oh.disabled=!1;case 18:xh.classList.remove("loading");case 19:case"end":return e.stop()}}),e,null,[[3,15]])})))),vo((function(){jh(qh())}));var Kh=oi.titleLogo,Yh=oi.titleLogoIcon,Jh=function(e){var t,n=ri.from(8).wait(300).to(0,600,yt.outSine).start(),r=ri.from(0).wait(300).to(1,600,yt.steps(3)).start(),i=ri.from(3).loopStart().to(-3,1500,yt.inOutSine).to(3,1500,yt.inOutSine).loopEnd().start(),a=function(){return ri.from(-100).loopStart().wait(2e3).to(-100).to(h.flash.width,200).wait(3e3).to(-100).to(h.flash.width,200).to(-100).to(h.flash.width,200).wait(2e3).loopEnd()},s=ri.from(0).wait(60).on((function(){h.normal=o().normal})),o=function(){return{normal:c()?Kh.ex:Kh.normal,flash:c()?Kh.exFlash:Kh.normalFlash}},u=function(){var e,t;Si.mode="ex"===Si.mode?"normal":"ex",e=Si.mode,t=new URL(location.href),"normal"===e?t.searchParams.delete("mode"):t.searchParams.set("mode",e),history.replaceState(history.state,"",t),jh(e),_i.titleModeChange.play()},c=function(){var n;return"ex"===(null!==(t=null==e||null===(n=e.value)||void 0===n?void 0:n.mode)&&void 0!==t?t:Si.mode)},l=c(),h=o(),d=a().start();return function(){l!==c()&&(l=c(),h.normal=h.flash=o().flash,d.end(),s.end(),d=a().start(),s.start());var t=re(Kr,h.normal),f=h.flash.width,p=Math.round(d.value),m=h.normal.toBox(t,80);m.height+=30,m.originY+=25,e||Zr.onDown(m,u),Kr.save(),Kr.drawSprite(Yh,re(Kr,Yh),53+Math.round(i.value)),Kr.opacity(r.value),Kr.drawSprite(h.normal,t,80+n.value),Kr.opacity(.8),Kr.drawSprite(h.flash.sub({x:Math.max(0,p),width:(p<0?100+p:Math.min(100,f-p))-f}),t+Math.max(0,p),80+n.value),Kr.restore()}},Xh=oi.buttonTwitter,Zh=oi.buttonMute,Qh=oi.buttonLight,ed=oi.card,td=oi.fontUiS,nd=function(e,t,n){var r=void 0===n?"":n,i=re(Kr,ed.top),a=ri.from(0).to(t+(r?td[0].height+1:0),200,yt.steps(5)).start(!1);return function(n){a.update();var s=(t-a.value)/2|0;if(Kr.drawSprite(ed.top,i,e+s),Kr.drawSprite(ed.body,i,e+s+ed.top.height,ed.body.width,a.value),Kr.drawSprite(ed.bottom,i,e+s+ed.top.height+a.value),r&&td[0].height<=a.value){var o=(ed.body.width-Kr.measuretext(td,r,4))/2|0;Kr.drawText(td,r,i+o,e+s+4,4)}a.done&&n&&n({x:i+4,y:e+s+4+(r?td[0].height+1:0),width:ed.body.width-8,height:a.value-(r?td[0].height+1:0)})}},rd=oi.tips,id=oi.fontUi,ad=oi.scoreBg,sd=function(e,t){var n=ri.from(0).wait(150),r=0;return function(i,a){if(Kr.drawSprite(ad,e,t+2),Kr.drawText(id.normal,"y ".concat(X(0|i)),e+1,t),Kr.drawRect(e+1,t+11,Math.floor(128*Math.min(i/1e6,1)),2,Ti.main),void 0!==a){r<a&&!n.running&&(r=a,n.start(!1));var s=n.update().running?id.flash:id.normal;Kr.drawText(s,"h ".concat(0|a),e+1,t+21)}}},od=oi.replayReady,ud=oi.replayLoading,cd=oi.buttonReset,ld=oi.buttonLight,hd=oi.pressAnyButton,dd=oi.fontUi,fd=oi.fontUiL,pd=oi.uiStatusReset,md=oi.card,vd=function(){var e,t,n={},r=39,i=sd(7,2),a=(e=md.body.width/2,t=22,function(n){var r=Math.floor(100*Math.max(n,0)),i="t ".concat(Math.floor(r/100)),a=".".concat(String(r%100).padStart(2,"0")),s=Kr.measuretext(fd,i),o=Kr.measuretext(dd.normal,a),u=e-(s+1+o)/2;Kr.drawText(fd,i,u,t),Kr.drawText(dd.normal,a,u+s+1,t+2)}),s=function(e,t){var n=ri.from(!1).to(!0,100).to(!1).on((function(){Yr.emit("sceneChange",(function(){return Gh(""),bf()}))})),r=function(){n.started||(n.start(),_i.uiButton.play())};return function(){Zr.onDown(pd.toBox(e-pd.width,t-pd.height),r),Kr.opacity(n.value?.2:1),Kr.drawSprite(pd,e-pd.width,t-pd.height)}}(md.body.width,r),o=ri.from(-39).wait(250).to(0,250,yt.outSine).on((function(){Si.screenTop=r,Yr.emit("statusInitIn")})).start(),u=ri.from(0).to(-39,400,yt.inSine).on((function(){Si.screenTop=0,Yr.emit("statusFinOut"),lt.remove(c)}));n.timeUp=function(){u.start()},Si.screenTop=0;var c=function(e,t,c){Yr.subscribe(n),Kr.save(),Kr.translate(re(Kr,md.body),u.started?u.value:o.value),Kr.drawSprite(md.body,0,0,md.body.width,r-md.bottom.height),Kr.drawSprite(md.bottom,0,r-md.bottom.height),i(e,t),a(c/Gr.fps),s(),Kr.restore()};return c},yd=oi.success,gd=oi.buttonReset,wd=oi.buttonLight,bd=oi.buttonTwitter,_d=function(e){var t=null!=e?e:{},n=t.time,r=void 0===n?30:n,i=t.times,a=void 0===i?1:i,s=t.color,o=void 0===s?N.parse("#fff8"):s,u=t.onEnd,c=ri.from(!0).to(!0,r).loopStart(a-1).to(!1,r).to(!0,r).loopEnd().start(),l=function(){c.value&&Kr.drawRect(0,0,Kr.width,Kr.height,o),c.done&&(lt.remove(l),null==u||u())};return l},kd=oi.newRecord,Id=function(e,t){var n,r,i,a,s,o=ri.from({x:0,y:0}).to({x:2,y:-2},10).to({x:-2,y:2},20).to({x:2,y:2},20).to({x:-2,y:-2},20).to({x:0,y:0}),u=ri.from(0).wait(300).to(e,500,yt.inSine).on((function(){Si.isSuccess?c.start():l.start()})).start(!1),c=ri.from(0).wait(400),l=ri.from(0).wait(200).on((function(){return ii.ui.add(function(e,t){var n=ri.from(Kr.height).to(Kr.height-bd.height-30,300,yt.outSine).start(),r=function(){var n=(null==t?void 0:t.isResolved())?"￥".concat(X(e),"\n#FireShooterSan\n").concat(Wh()):"#FireShooterSan\n".concat(Wh()),r=new URLSearchParams({text:n});window.open("https://twitter.com/intent/tweet?".concat(r))};return function(){var e=n.value;Zr.onDown(bd.toBox(30,e),r),Kr.drawSprite(bd,30,e)}}(e,t),(n=ri.from(Kr.height).to(Kr.height-gd.height-30,300,yt.outSine).start(),r=ri.from(!1).to(!0,100).to(!1).on((function(){Yr.emit("sceneChange",(function(){return Gh(""),bf()}))})),i=function(){r.started||(r.start(),_i.uiButton.play())},function(){var e=Kr.width-gd.width-30,t=n.value;Zr.onDown(gd.toBox(e,t),i),Kr.drawSprite(gd,e,t),r.value&&(Kr.save(),Kr.opacity(.5),Kr.drawSprite(wd,e,t),Kr.restore())}));var n,r,i})),h=nd(90,49,"RESULT"),d=sd(3,16),f=(n=106,r=1,i=function(){var e,n,r;o.start(),l.start(),(null==t||null===(e=t.value)||void 0===e?void 0:e.newRecord)&&ii.ui.add((n=ri.from(!1).loopStart().to(!1,500).to(!0,500).loopEnd().start(),r=!0,function(){r&&(r=!1,Yr.emit("newRecordShow"),ii.ui.add(_d({color:N.parse("#fff"),time:100})));var e=n.value?kd.flash:kd.normal;Kr.drawSprite(e,re(Kr,e),44)}))},a=ri.from({rotate:-15,scale:3}).to({rotate:-0,scale:1},250,yt.inSine).on((function(){s.start(),i(),_i.resultSuccess.play()})).start(!1),s=ri.from(!1).loopStart().to(!1,500).to(!0,500).loopEnd(),function(){a.update(),Kr.save(),Kr.translate(n,r),Kr.rotate(a.value.rotate),Kr.scale(a.value.scale),Kr.drawSprite(s.value?yd.flash:yd.normal),Kr.restore()}),p=u.value;return function(){Kr.save(),Kr.translate(o.value.x,o.value.y),h((function(e){Kr.translate(e.x,e.y),d(u.update().value),c.done&&f()})),Kr.restore(),p!==u.value&&_i.resultCounting.play(),p=u.value}},Sd=oi.start,Td=oi.replayNow,Ed=oi.finish,xd=oi.playerBullet,Ad=oi.playerBulletHit,Rd=oi.playerBullet,Od=function(e,t,n){var r={},i=0,a=0,s=1/0,o=0,u=-90,c=0;r.enemyHit=function(){lt.remove(l),ii.effectBack.add(function(e,t){var n=ri.from(2).to(1,100,yt.inSine).on((function(){lt.remove(r)})).start(),r=function(){Kr.save(),Kr.opacity(.8),Kr.translate(e,t),Kr.scale(n.value),Kr.drawSprite(Ad),Kr.restore()};return r}(e,t)),Yr.emit("playerBulletRemove")},r.enemyPos=function(n){var r=n.id,c=n.x,l=n.y,h=Q(Z(c-e,l-t)-u),d=Math.abs(h);(-40<h&&h<40&&d<s||i===r)&&(a=r,s=i===r?0:d,o=h)},_i.playerFire.play();var l=function(){if(a&&u!==o){var h=n?2:.5;u+=Math.min(Math.max(o,-h),h)}i=a,a=0,s=1/0;var d=ee(u,n?6:8);if(e+=d.x,t+=d.y,e<=-Rd.originRight||Kr.width+Rd.originLeft<=e||t<=Si.screenTop-Rd.originBottom||Kr.height+Rd.originTop<=t)return lt.remove(l),void Yr.emit("playerBulletRemove");c++%3==0&&ii.effectBack.add(function(e,t){var n=ri.from(.2).to(0,250,yt.inSine).on((function(){lt.remove(r)})).start(),r=function(){Kr.save(),Kr.opacity(n.value),Kr.drawSprite(xd,e,t),Kr.restore()};return r}(e,t)),Yr.subscribe(r),Jr.emit("playerBulletHit",null,Rd.toBox(e,t),r),Kr.drawSprite(Rd,e,t)};return l},Pd=oi.playerDestroyChip,Md=function(e,t,n,r){var i=ri.from(0).wait(r).start(),a=ri.from(0).to(2).to(1,200,yt.inSine).start(!1),s=ri.from(0).to(.8,100).wait(300).to(0,200).on((function(){lt.remove(c)})).start(!1),o=ri.from(4).to(.2,300,yt.outSine).start(!1),u=ee(n),c=function(){i.done&&(o.update(),e+=u.x*o.value,t+=u.y*o.value,Kr.save(),Kr.opacity(s.update().value),Kr.translate(0|e,0|t),Kr.scale(a.update().value),Kr.drawSprite(Pd),Kr.restore())};return c},Ld=oi.playerDestroy,Nd=oi.player,Cd=function(e){for(var t={},n=ri.from(Kr.height+Nd.normal.originTop).wait(200).to(Kr.height-30,200,yt.outSine).start(),r=ri.from(!1).start(),i=0;i<12;i++)r.to(!0,60).to(!1,60);var a=!1,s=Kr.width/2,o=0;t.enemyHit=t.enemyBulletHit=function(){!a&&r.done&&lt.remove(u)&&(Si.heartRate=0,Si.clearing.start(),Yr.emit("playerDestroy"),ii.effectOverEnemy.add(function(e,t){for(var n=ri.from(0).to(24,250,yt.outSine).wait(200).start(),r=ri.from(0).to(2,100,yt.outSine).to(.7,150,yt.inOutSine).to(1.2,50,yt.inSine).to(1,100,yt.inSine).start(),i=ri.from(1).wait(200).to(0,250,yt.inSine).on((function(){lt.remove(o)})).start(),a=Ti.accent.opacity(.37),s=0;s<720;s+=48)ii.effectOverEnemy.add(Md(e,t,s,s/2+200));_i.playerHit.play();var o=function(){Kr.save(),Kr.opacity(i.value),Kr.translate(0|e,0|t),n.done||Kr.drawCircle(0,-6,0|n.value,a),Kr.scale(r.value),Kr.drawSprite(Ld),Kr.restore()};return o}(s,o)),ri.from(0).wait(1e3).on((function(){ii.player.add(Cd(e))})).start())},t.timeUp=function(){a=!0};var u=function(){Yr.subscribe(t);var i=r.value?Nd.flash:Nd.normal;if(!n.done)return o=n.value,void Kr.drawSprite(i,s,o);if(a&&e)Kr.drawSprite(i,s,o);else{var u,c,l,h,d,f,p,m,v=!1;if(Zr.isDown){var y=Zr.vec;s+=1.4*y.x,o+=1.4*y.y,v=Zr.downCount>7}else{v=Xr.fire.downCount>7;var g=(u=k(Qr),c=u[0],l=u[1],h=u[2],d=u[3],f=(l.isDown?1:0)+(d.isDown?-1:0),p=(h.isDown?1:0)+(c.isDown?-1:0),m=Math.sqrt(f*f+p*p)||1,{x:f/m,y:p/m});s+=g.x*(v?1.5:4.5),o+=g.y*(v?1.5:4.5)}s=Math.min(Math.max(s,i.originLeft),Kr.width-i.originRight),o=Math.min(Math.max(o,Si.screenTop+i.originTop),Kr.height-i.originBottom),(ei.some((function(e){return e.isDown}))&&ii.playerBullet.isEmpty||ei.some((function(e){return e.isDownChange}))&&ii.playerBullet.size<3)&&ii.playerBullet.add(Od(s,o-i.originTop,v)),Si.playerPos={x:s,y:o},a||Jr.emit("playerHit",null,{x:s,y:o,width:0,height:0,originX:0,originY:0},t),Kr.drawSprite(i,s,o)}};return u},Dd=Cd,Ud=oi.enemyNotice,Fd=oi.enemyNoticeLarge,Vd=0,jd=oi.fontRate,Bd=function(e,t,n,r){var i=ri.from(!1).loopStart().to(!0,40).to(!1,60).loopEnd(),a=ri.from(0).to(-6,200,yt.outSine).wait(300).on((function(){lt.remove(s)})).start();16<=n&&i.start(!1);var s=function(){if(n>1){var r=i.update().value?jd.flash:jd.normal;Kr.drawText(r,"*".concat(n),0|e,t+a.value|0,-1)}};return s};oi.enemyTakeChip;var Wd=oi.enemyTake,qd=oi.enemyLargeTake,$d=function(e){var t=e.x,n=e.y,r=e.large,i=(e.heart,Si.getHeartRate()),a=ri.from(0).to(r?32:16,250,yt.outSine).wait(100).start(),s=ri.from(0).to(1.5,100,yt.outSine).to(.8,100,yt.inOutSine).to(1,100,yt.inSine).start(),o=ri.from(.9).wait(200).to(0,200,yt.inSine).on((function(){lt.remove(c),ii.effectOverPlayer.add(Bd(t,n,i))})).start(),u=Ti.accent.opacity(.37),c=function(){Kr.save(),Kr.opacity(o.value),Kr.translate(0|t,0|n),a.done||Kr.drawCircle(0,0,0|a.value,u),Kr.scale(s.value),Kr.drawSprite(r?qd:Wd),Kr.restore()};return c},Hd=oi.enemy,zd=oi.enemyLarge,Gd=1,Kd=function(e,t){var n={},r=Gd++,i=e.hp,a={id:r,x:e.x,y:e.y,hp:e.hp,large:e.large},s=e.large?zd:Hd;e.me&&(e.me.id=r);var o=!1,u=ri.from(2).to(1,150,yt.inSine).start(!1),c=ri.from(!1).to(!0,60).to(!1,60).to(!0,60).to(!1),l=ri.from(1).to(0,200,yt.inSine).on((function(){lt.remove(h)}));n.playerBulletHit=function(){o||(c.running||c.start(),_i.enemyHit.play(),--a.hp<=0&&lt.remove(h)&&(Si.heartRate++,Si.addHeart(i),ii.effectBack.add($d(w({},a,{heart:i}))),Yr.emit("enemyTake",{id:r,large:e.large}),Yr.emit("enemyDestroy",{id:r}),e.large?_i.enemyTakeLarge.play():_i.enemyTake.play()))},n.enemyTake=function(t){var n;(null===(n=e.parent)||void 0===n?void 0:n.id)===t.id&&lt.remove(h)&&(Si.addHeart(i),ii.effectBack.add($d(w({},a,{heart:i}))),Yr.emit("enemyDestroy",{id:r}),Yr.emit("enemyTake",{id:r,large:e.large}))},n.timeUp=function(){o=!0,l.start(),ii.effectBack.add(function(e){var t=e.x,n=e.y,r=e.large,i=ri.from(0).to(r?16:8,400,yt.outSine).start(),a=ri.from(.6).wait(200).to(0,200,yt.inSine).on((function(){lt.remove(s)})).start(),s=function(){Kr.save(),Kr.opacity(a.value),Kr.drawCircle(0|t,0|n,0|i.value,Ti.accent),Kr.restore()};return s}(w({},a)))};var h=function(){var d=e.noOver||e.noHorOver,f=e.noOver||e.noVertOver;if(a.hp<=0||!d&&(a.x<=-s.body.originRight||Kr.width+s.body.originLeft<=a.x)||!f&&(a.y<=Si.screenTop-s.body.originBottom||Kr.height+s.body.originTop<=a.y))lt.remove(h)&&Yr.emit("enemyDestroy",{id:r});else{Yr.subscribe(n),o||t(a),Kr.save(),Kr.translate(a.x,a.y),o||Jr.emit("enemyHit",null,s.body.toBox(0,0),n),Yr.emit("enemyPos",{id:r,x:a.x,y:a.y}),Kr.scale(l.started?l.value:u.update().value),Kr.drawSprite(c.value?s.bodyFlash:s.body);var p=c.value?s.gaugeFlash:s.gauge,m=Math.ceil(p.height*(Math.max(0,a.hp)/i));Kr.drawSprite(p.sub({y:m,height:-m,originY:-m})),Kr.restore()}};return ii.enemyNotice.add(function(e,t,n){var r,i,a={},s=t-1,o=Si.isFirstEnemy,u=Si.enemyWaveId;Vd=o?300:Vd+(null!==(r=e.showTime)&&void 0!==r?r:50);var c=ri.from(0).wait(null!==(i=e.wait)&&void 0!==i?i:0),l=ri.from(0).wait(Vd).to(2).to(1,200,yt.outSine).start(),h=ri.from(1).to(0,300,yt.inSine).on((function(){lt.remove(d)}));o||(a.enemyShow=function(e){c.started||e.id!==s||c.start()},a.enemyDestroy=function(e){e.id===s&&c.end()}),a.timeUp=function(){h.start()},Si.isFirstEnemy=!1;var d=function(){if(Yr.subscribe(a),!h.started&&(o&&!c.started&&Si.enemyWaveId!==u||c.done))return lt.remove(d),ii.enemy.add(n),Yr.emit("enemyShow",{id:t}),void _i.enemyShow.play();Kr.save(),Kr.opacity(Si.enemyWaveId!==u||e.large?.3:.2),Kr.translate(e.x,e.y),Kr.scale(h.started?h.value:l.value),Kr.drawSprite(e.large?Fd:Ud),Kr.restore()};return d}(e,r,h)),h},Yd=oi.enemyBulletTake,Jd=oi.enemyBulletLargeTake,Xd=function(e){var t=e.x,n=e.y,r=e.large,i=e.angle,a=e.speed,s=ri.from(0).to(r?8:4,400,yt.outSine).start(),o=ri.from(.6).wait(200).to(0,200,yt.inSine).on((function(){lt.remove(u)})).start(),u=function(){var e=ee(i instanceof yt?i.value:i,a instanceof yt?a.value:a);t+=e.x,n+=e.y,Kr.save(),Kr.opacity(o.value),Kr.drawCircle(0|t,0|n,0|s.value,Ti.accent),Kr.restore()};return u},Zd=oi.enemyBullet,Qd=oi.enemyBulletLarge,ef=function(e){var t={},n=ri.from(0).loopStart().to(1,500,yt.frameSteps(2)).to(0).loopEnd().start(!1),r=e.x,i=e.y;t.enemyTake=function(t){if(t.id===e.id&&lt.remove(a)){var n=e.large?2:1;Si.addHeart(n),ii.effectBack.add(function(e){var t=e.x,n=e.y,r=e.large,i=(e.heart,Si.getHeartRate()),a=ri.from(0).to(r?16:8,250,yt.outSine).wait(100).start(),s=ri.from(0).to(1.5,100,yt.outSine).to(.8,100,yt.inOutSine).to(1,100,yt.inSine).start(),o=ri.from(.9).wait(200).to(0,200,yt.inSine).on((function(){lt.remove(c),ii.effectOverPlayer.add(Bd(t,n,i))})).start(),u=Ti.accent.opacity(.37),c=function(){Kr.save(),Kr.opacity(o.value),Kr.translate(0|t,0|n),a.done||Kr.drawCircle(0,0,0|a.value,u),Kr.scale(s.value),Kr.drawSprite(r?Jd:Yd),Kr.restore()};return c}(w({},e,{x:r,y:i,heart:n})))}},t.enemyDestroy=function(t){t.id===e.id&&ri.from(0).wait(1e3).on((function(){lt.remove(a)&&ii.effectBack.add(Xd(w({},e,{x:r,y:i})))})).start()},e.large?_i.enemyFireLarge.play():_i.enemyFire.play();var a=function(){if(Si.clearing.running&&lt.remove(a))ii.effectBack.add(Xd(w({},e,{x:r,y:i})));else{var s=(e.large?Qd:Zd)[n.update().value],o=ee(e.angle instanceof yt?e.angle.value:e.angle,e.speed instanceof yt?e.speed.value:e.speed);r+=o.x,i+=o.y,r<=-s.originRight&&o.x<=0||Kr.width+s.originLeft<=r&&0<=o.x||i<=Si.screenTop-s.originBottom&&o.y<=0||Kr.height+s.originTop<=i&&0<=o.y?lt.remove(a):(Yr.subscribe(t),Jr.emit("enemyBulletHit",null,s.toBox(r,i),t),Kr.drawSprite(s,r,i))}};return a},tf=function(e){for(var t=function(t,n){return ce(t,n,e.rank/2)},n=ri.from(0).wait(ai.nextInt(t(300,0),t(2e3,200))).start(!1),r=ri.from(!1).to(!0),i=0;i<e.rank;i++)r.wait(t(300,100)).to(!0);return Kd(w({},e),(function(e){n.update().done&&(n.wait(ai.nextInt(t(2e3,500),t(5e3,800))),r.start(!1)),r.update().getAndSet(!1)&&ii.enemyBullet.add(ef(w({},e,{angle:90,speed:t(1,3)})))}))},nf=function(e){for(var t=function(t,n){return ce(t,n,e.rank/2)},n={},r=oi.enemy.body,i=ri.from(!0).start(!1),a=0,s=0,o=0;o<e.rank;o++)i.wait(t(1e3,600)).to(!0);return Kd(w({},e),(function(o){if(Yr.subscribe(n),i.update().getAndSet(!1)){var u=te(o.x-Si.playerPos.x,o.y-Si.playerPos.y);a=3*u.x,s=3*u.y;for(var c=Z(Si.playerPos.x-o.x,Si.playerPos.y-o.y),l=t(.5,1),h=0;h<e.rank+2;h++)ii.enemyBullet.add(ef(w({},o,{angle:c,speed:1.5+h*l})))}else a+=(0-a)/20,s+=(4-s)/20;o.x+=a,o.y+=s,(o.x<r.originLeft||Kr.width-r.originRight<o.x)&&(a=-a,o.x+=a)}))},rf=function(e){var t=function(t,n){return ce(t,n,e.rank/2)},n=ee(90+75*Math.sign(e.x-Kr.width/2),t(2,4)),r=oi.enemy.body;return Kd(w({},e),(function(i){if(i.x+=n.x,i.y+=n.y,i.x<r.originLeft||Kr.width-r.originRight<=i.x){n.x=-n.x,i.x+=n.x;var a=t(1.5,2.5),s=n.x<0?180:0;if(0===e.rank){var o=5*e.no;ii.enemyBullet.add(ef(w({},i,{angle:s+90-o,speed:a})),ef(w({},i,{angle:s-90+o,speed:a})))}else if(1===e.rank)ii.enemyBullet.add(ef(w({},i,{angle:s+90,speed:a})),ef(w({},i,{angle:s-90,speed:a})),ef(w({},i,{angle:s+60,speed:a})),ef(w({},i,{angle:s-60,speed:a})));else for(var u=2===e.rank?30:45,c=-90;c<=90;c+=u)ii.enemyBullet.add(ef(w({},i,{angle:s+c,speed:a})))}}))},af=function(e){var t=function(t,n){return ce(t,n,e.rank/2)},n=e.angle,r=ri.from(80).to(30,2e3,yt.outSine).to(200,2e3,yt.inSine).start(!1),i=ri.from(!1).loopStart().wait(t(300,80)).to(!0).loopEnd().start(!1),a=ee(n),s=e.x+a.x*r.value,o=e.y+a.y*r.value,u=t(2,3);return Kd(w({},e,{x:s,y:o}),(function(a){r.update(),i.update();var s=ee(n+=u);if(a.x=e.x+s.x*r.value,a.y=e.y+s.y*r.value,i.getAndSet(!1)){var o=Z(Si.playerPos.x-a.x,Si.playerPos.y-a.y),c=ri.from(.5).to(t(2,3),t(500,300),yt.inSine).start();ii.enemyBullet.add(ef(w({},a,{angle:o,speed:c})))}}))},sf=function(e){var t=function(t,n){return ce(t,n,e.rank/2)},n=0,r=0,i=!1,a=t(2,3.5);return Kd(w({},e),(function(s){if(0===n&&(n=Si.playerPos.y<e.y?-1:1),0===r)s.y+=a*n,(n<0&&Si.playerPos.y>=s.y||n>0&&Si.playerPos.y<=s.y)&&(r=Si.playerPos.x<s.x?-1:1);else if(s.x+=a*r,!i&&(r<0&&Si.playerPos.x>=s.x||r>0&&Si.playerPos.x<=s.x)){for(var o=Si.playerPos.y<s.y?270:90,u=t(.5,1),c=0;c<e.rank+2;c++)ii.enemyBullet.add(ef(w({},s,{angle:o,speed:2+c*u})));i=!0}}))},of=function(e){var t=function(t,n){return ce(t,n,e.rank/2)},n=e.x<Kr.width/2?-oi.enemy.body.originRight:Kr.width+oi.enemy.body.originLeft,r=ri.from(e.x).to(Kr.width-e.x,1e3,yt.outSine).to(n,1e3,yt.inSine).start(!1),i=ri.from(e.y).to(e.y2,1700,yt.inOutSine).to(e.y2-(e.y2-e.y)/5,300,yt.inSine).start(!1),a=ri.from(!0).start(!1),s=ri.from(!1).to(!0);e.rank<2?a.wait(1100).to(!0):a.wait(500).to(!0).wait(500).to(!0);for(var o=0;o<2*e.rank;o++)s.wait(t(150,50)).to(!0);return Kd(w({},e),(function(e){if(e.x=r.update().value,e.y=i.update().value,a.update().getAndSet(!1)&&s.start(!1),s.update().getAndSet(!1)){var n=Z(Si.playerPos.x-e.x,Si.playerPos.y-e.y),o=t(12,8),u=t(1.5,3.5);ii.enemyBullet.add(ef(w({},e,{angle:n+o,speed:u})),ef(w({},e,{angle:n-o,speed:u})))}}))},uf=function(e){var t=function(t,n){return ce(t,n,e.rank/2)},n=ri.from(!1).wait(t(800,500)).loopStart().to(!0).wait(t(1e3,200)).loopEnd().start(!1),r=ri.from(e.y).to(e.y+10,t(500,300),yt.inOutSine).to(Si.screenTop-oi.enemy.body.originBottom,t(2500,1500),yt.inSine).start(!1),i=0,a=0,s=[],o=ai.nextInt(t(60,20)),u=t(1,2);return Kd(w({noHorOver:!0},e),(function(e){s.unshift(Si.playerPos.x);var c=s[Math.min(s.length-1,o)];a+=t(5e-4,.001),i+=Math.min(Math.max(-a,c-e.x),a),e.x+=Math.min(Math.max(-u,i),u),e.y=r.update().value;var l=t(30,20);n.update().getAndSet(!1)&&ii.enemyBullet.add(ef(w({},e,{angle:90-l,speed:1})),ef(w({},e,{angle:90+l,speed:1})))}))},cf=function(e){var t=function(t,n){return ce(t,n,e.rank/2)},n=e.x<Kr.width/2?Kr.width+oi.enemy.body.originLeft:-oi.enemy.body.originRight,r=ri.from(e.x).to(n,t(2500,1500),yt.inSine).start(!1),i=ri.from(e.y).to(Si.screenTop-oi.enemy.body.originBottom-10,t(2500,1500),yt.outSine).start(!1),a=ri.from(!1).loopStart().wait(t(400,50)).to(!0).loopEnd().start(!1);return Kd(w({noHorOver:!0},e),(function(e){if(e.x=r.update().value,e.y=i.update().value,a.update().getAndSet(!1)){var n=t(30,45),s=ai.nextFloat(90-n,90+n),o=ai.nextFloat(1,2);ii.enemyBullet.add(ef(w({},e,{angle:s,speed:o})))}}))},lf=function(e){for(var t=function(t,n){return ce(t,n,e.rank/2)},n={},r=ri.from(!1).wait(t(500,200)).loopStart().to(!0).wait(t(1500,1e3)).loopEnd().start(!1),i=ri.from(!1).to(!0),a=90,s=0,o=0;o<1+3*e.rank;o++)i.wait(t(150,80)).to(!0);return Kd(w({large:!0,noOver:!0},e),(function(o){if(Yr.subscribe(n),!i.running&&!i.value){var u=Q(Z(Si.playerPos.x-o.x,Si.playerPos.y-o.y)-a),c=t(1,2);a+=Math.min(Math.max(-c,u),c)}r.update().getAndSet(!1)&&(i.start(!1),s=a),i.update().getAndSet(!1)?(ii.enemyBullet.add(ef(w({},o,{angle:s,speed:t(2.5,2)}))),e.me.fire=!0):e.me.fire=!1;var l=ee(a);o.x+=.3*l.x,o.y+=.3*l.y,e.me.x=o.x,e.me.y=o.y,e.me.angle=a}))},hf=function(e){var t=e.parent,n=ee(t.angle+e.angle),r=t.x+n.x*e.dist,i=t.y+n.y*e.dist;return Kd(w({x:r,y:i,noOver:!0},e),(function(n){var r,i,a=ee(t.angle+e.angle);n.x=t.x+a.x*e.dist,n.y=t.y+a.y*e.dist,t.fire&&ii.enemyBullet.add(ef(w({},n,{id:t.id,angle:t.angle,speed:(r=1.5,i=1,ce(r,i,e.rank/2))})))}))},df=function(e){for(var t=function(t,n){return ce(t,n,e.rank/2)},n={},r=ri.from(!1).wait(t(500,200)).loopStart().to(!0).wait(t(1500,1e3)).loopEnd().start(!1),i=ri.from(e.y).loopStart().to(e.y2,4e3,yt.inOutSine).to(e.y,4e3,yt.inOutSine).loopEnd().start(!1),a=ri.from(0).loopStart().to(t(16,22),1e3,yt.outSine).to(-t(16,22),2e3,yt.inOutSine).to(0,1e3,yt.inSine).loopEnd().start(!1),s=ri.from(!1).to(!0),o=0;o<1+3*e.rank;o++)s.wait(t(150,40)).to(!0);var u=0,c=0;return Kd(w({large:!0},e),(function(o){Yr.subscribe(n),o.x=e.x+a.update().value,o.y=i.update().value,r.update().getAndSet(!1)&&(s.start(!1),u=0,c=Z(Si.playerPos.x-o.x,Si.playerPos.y-o.y)),s.update().getAndSet(!1)?(ii.enemyBullet.add(ef(w({},o,{angle:c,speed:t(2.5,1.5+.3*u)}))),e.me.fire=!0,e.me.rapidNo=u++):(e.me.fire=!1,e.me.rapidNo=0),e.me.x=o.x,e.me.y=o.y}))},ff=function(e){var t=function(t,n){return ce(t,n,e.rank/2)},n=e.parent,r=ee(e.angle),i=n.x+r.x*e.dist,a=n.y+r.y*e.dist/2,s=0;return Kd(w({x:i,y:a,noOver:!0},e),(function(r){e.angle+=t(2,1);var i=ee(e.angle);r.x=n.x+i.x*e.dist,r.y=n.y+i.y*e.dist/2,n.fire&&(0===n.rapidNo&&(s=Z(Si.playerPos.x-r.x,Si.playerPos.y-r.y)),ii.enemyBullet.add(ef(w({},r,{id:n.id,angle:s,speed:t(1.5,1+.2*n.rapidNo)}))))}))},pf=function(e){var t=function(t,n){return ce(t,n,e.rank/2)},n={},r=oi.enemyLarge.body,i=ri.from(t(3,5)).wait(t(1500,500)).to(0,t(1e3,400),yt.inSine),a={x:0,y:0};return Kd(w({large:!0},e),(function(s){Yr.subscribe(n),i.update(),s.x+=a.x*i.value,s.y+=a.y*i.value;var o=null;if(!i.running){i.start(!1),a=te(s.x-Si.playerPos.x,s.y-Si.playerPos.y);var u=Z(Si.playerPos.x-s.x,Si.playerPos.y-s.y);o=[];for(var c=t(2,1),l=[2,3,5][e.rank],h=0;h<l;h++)o.push({angle:u+h*t(30,45),speed:c}),0<h&&h<4&&o.push({angle:u-h*t(30,45),speed:c});var d=!0,f=!1,p=void 0;try{for(var m,v=o[Symbol.iterator]();!(d=(m=v.next()).done);d=!0){var y=m.value;ii.enemyBullet.add(ef(w({},s,{angle:y.angle,speed:y.speed})))}}catch(e){f=!0,p=e}finally{try{d||null==v.return||v.return()}finally{if(f)throw p}}}(s.x<r.originLeft||Kr.width-r.originRight<=s.x)&&(a.x=-a.x,s.x+=a.x*i.value),(s.y<Si.screenTop+r.originTop||Kr.height-r.originBottom<=s.y)&&(a.y=-a.y,s.y+=a.y*i.value),e.me.history.push({x:s.x,y:s.y,bullets:o})}))},mf=function(e){var t=function(t,n){return ce(t,n,e.rank/2)},n=e.parent,r=e.no*t(8,4),i=e.no*t(.2,.1);return Kd(w({noOver:!0},e),(function(e){var t=n.history.length-1-r,a=n.history[Math.max(0,t)];e.x=a.x,e.y=a.y;var s=!0,o=!1,u=void 0;if(a.bullets&&0<=t)try{for(var c,l=a.bullets[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){var h=c.value;ii.enemyBullet.add(ef(w({},e,{id:n.id,angle:h.angle,speed:h.speed-i})))}}catch(e){o=!0,u=e}finally{try{s||null==l.return||l.return()}finally{if(o)throw u}}}))},vf=function(e){var t=function(t,n){return ce(t,n,e.rank/2)},n=ri.from(!1).wait(t(400,0)).loopStart().to(!0).wait(t(150,150)).loopEnd().start(!1),r=t(60,70),i=ee(e.angle),a=e.x+i.x*r,s=e.y+i.y*r,o=-1;return Kd(w({large:!0},e,{x:a,y:s}),(function(i){e.angle+=t(.5,1.5);var u=ee(e.angle);if(i.x=e.x+u.x*r,i.y=e.y+u.y*r,n.update().getAndSet(!1)){if(o<0){var c=Z(Si.playerPos.x-a,Si.playerPos.y-s);o=45*Math.round(c/45)+360}else o+=45;for(var l=0;l<1+Math.pow(e.rank,2);l++){var h=0===e.rank?ri.from(4).to(2,200,yt.inSine):1===e.rank?ri.from(4-l/2).to(2-l/2,200,yt.inSine):ri.from(8-2*l).to(1,200,yt.inSine);ii.enemyBullet.add(ef(w({},i,{angle:o,speed:h.start()})))}}}))},yf=[function(e,t){var n=e>0?1:0,r=4+2*n,i=28-4*n,a=Si.playerPos.x<Kr.width/2?-1:1,s=(Kr.width-(r-1)*i*a)/2,o=120,u=!0,c=!1,l=void 0;try{for(var h,d=ne(2)[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){h.value;var f=!0,p=!1,m=void 0;try{for(var v,y=ne(r)[Symbol.iterator]();!(f=(v=y.next()).done);f=!0){v.value;tf({lap:e,rank:t,hp:1,x:s,y:o,wait:300}),s+=i*a}}catch(e){p=!0,m=e}finally{try{f||null==y.return||y.return()}finally{if(p)throw m}}s+=i*(a=-a),o-=i}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}},function(e,t){var n=e>0?1:0,r=4+2*n,i=20-2*n,a=Si.playerPos.x<Kr.width/2?Kr.width-30:30,s=Kr.height-r*i-60,o=!0,u=!1,c=void 0;try{for(var l,h=ne(r)[Symbol.iterator]();!(o=(l=h.next()).done);o=!0){var d=l.value;sf({lap:e,rank:t,hp:1,x:a,y:s+i*d,wait:500})}}catch(e){u=!0,c=e}finally{try{o||null==h.return||h.return()}finally{if(u)throw c}}},function(e,t){var n=Kr.width/2,r={id:0,x:n,y:60,angle:90,fire:!1};lf({lap:e,rank:t,hp:4+2*e,x:n,y:60,me:r});var i=!0,a=!1,s=void 0;try{for(var o,u=[[-100,50],[-60,30],[60,30],[100,50]][Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var c=k(o.value),l=c[0],h=c[1];Si.isFirstEnemy=!0,hf({lap:e,rank:t,hp:2+e,parent:r,angle:l,dist:h})}}catch(e){a=!0,s=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw s}}},function(e,t){var n=e>0?1:0,r=4+2*n,i=25-9*n,a=Si.playerPos.x<Kr.width/2?-1:1,s=(Kr.width-(r-1)*i*a)/2,o=Kr.height-50,u=!0,c=!1,l=void 0;try{for(var h,d=ne(r)[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){var f=h.value;uf({lap:e,rank:t,hp:1,x:s+f*i*a,y:o,wait:300})}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}},function(e,t){var n=4+2*(e>0?1:0),r=Si.playerPos.x<Kr.width/2?Kr.width-30:30,i=Kr.height-40,a=!0,s=!1,o=void 0;try{for(var u,c=ne(n)[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){u.value;cf({lap:e,rank:t,hp:1,x:r,y:i,wait:400})}}catch(e){s=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(s)throw o}}},function(e,t){var n=Kr.width/2,r=Kr.height-50,i={id:0,x:n,y:r,fire:!1,rapidNo:0};df({lap:e,rank:t,hp:4+2*e,x:n,y:r,y2:80,me:i});for(var a=0;a<360;a+=90)Si.isFirstEnemy=!0,ff({lap:e,rank:t,hp:2+e,parent:i,angle:a-45,dist:50})},function(e,t){var n=e>0?1:0,r=4+2*n,i=20-4*n,a=Si.playerPos.x<Kr.width/2?Kr.width-i:i,s=Si.playerPos.x<Kr.width/2?-1:1,o=!0,u=!1,c=void 0;try{for(var l,h=ne(r)[Symbol.iterator]();!(o=(l=h.next()).done);o=!0){var d=l.value;nf({lap:e,rank:t,hp:1,x:a+d*i*s,y:80,wait:600})}}catch(e){u=!0,c=e}finally{try{o||null==h.return||h.return()}finally{if(u)throw c}}},function(e,t){var n=4+2*(e>0?1:0),r=Si.playerPos.x<Kr.width/2?Kr.width-30:30,i=!0,a=!1,s=void 0;try{for(var o,u=ne(n)[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var c=o.value;rf({lap:e,rank:t,hp:1,x:r,y:50,wait:400,no:c})}}catch(e){a=!0,s=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw s}}},function(e,t){for(var n=Kr.width/2,r={id:0,history:[{x:n,y:100,bullets:null}]},i=4;0<i;i--)Si.isFirstEnemy=!0,mf({lap:e,rank:t,hp:2+e,x:n,y:100,parent:r,no:i});pf({lap:e,rank:t,hp:4+2*e,x:n,y:100,me:r})},function(e,t){var n=e>0?1:0,r=4+2*n,i=20-4*n,a=Si.playerPos.x<Kr.width/2?30:Kr.width-30,s=!0,o=!1,u=void 0;try{for(var c,l=ne(r)[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){var h=c.value;of({lap:e,rank:t,hp:1,x:a,y:50+h*i,y2:Kr.height-40,wait:400})}}catch(e){o=!0,u=e}finally{try{s||null==l.return||l.return()}finally{if(o)throw u}}},function(e,t){var n=2+2*(e>0?1:0),r=2===n?180:90,i=Kr.width/2,a=90*ai.nextInt(4)+45,s=!0,o=!1,u=void 0;try{for(var c,l=ne(n)[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){var h=c.value;af({lap:e,rank:t,hp:1,x:i,y:130,wait:500,angle:a-r*h})}}catch(e){o=!0,u=e}finally{try{s||null==l.return||l.return()}finally{if(o)throw u}}},function(e,t){var n=Kr.width/2,r=!0,i=!1,a=void 0;try{for(var s,o=[0,180][Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var u=s.value;Si.isFirstEnemy=!0,vf({lap:e,rank:t,hp:4+2*e,x:n,y:135,angle:u})}}catch(e){i=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}}],gf=function(e){var t=function(t,n,r,i,a,s){var o=ri.from(a).loopStart().to(-a,s).to(a,s).loopEnd().start(),u=80*i;return function(){u+=i*e;var a=Math.abs(Math.floor(o.value)),s=Math.sign(o.value),c=Math.floor(Kr.width/2-t/2+a/2),l=Math.floor(Kr.width/2+t/2-a/2);Kr.save(),Kr.opacity(r),Kr.drawRect(c,0,l-c,Kr.height,Ti.main),Kr.translate(0,Math.floor(u%(2*n)));var h=!0,d=!1,f=void 0;try{for(var p,m=[[c,-1],[l,1]][Symbol.iterator]();!(h=(p=m.next()).done);h=!0){var v=k(p.value),y=v[0],g=v[1],w=s;Kr.save();for(var b=2*-n;b<Kr.height+n/2;b+=n)Kr.save(),Kr.translate(y,b),Kr.scale(g,w),Kr.drawSprite(oi.bg,0,0,a,n),Kr.restore(),w=-w;Kr.restore()}}catch(e){d=!0,f=e}finally{try{h||null==m.return||m.return()}finally{if(d)throw f}}Kr.restore()}},n=[t(100,80,.07,3,16,4e3),t(105,120,.06,2.4,24,4500),t(110,160,.05,1.8,32,5e3)];return function(){n.forEach((function(e){return e()}))}},wf=function(e){e?xi("".concat(e.mode,"_replay"),{replay_id:e.id}):xi("".concat(Si.mode,"_play"));var t,n={},r=lt.of(function(e){var t={},n=0,r="ex"===e?2:0,i=0;t.statusInitIn=function(){yf[0](n,r)},t.timeStart=function(){i=0},t.enemyDestroy=function(){i--},t.timeUp=function(){lt.remove(a)},Si.isFirstEnemy=!0,Si.enemyWaveId=0,i=1;var a=function(){if(Yr.subscribe(t),i<=0){i=ii.enemyNotice.size;var e=++Si.enemyWaveId%yf.length;Si.isFirstEnemy=!0,yf[e](n,r),e===yf.length-1&&(n++,r=Math.min(r+1,2))}};return a}(null!==(t=null==e?void 0:e.mode)&&void 0!==t?t:Si.mode)),i=ri.from(0).wait(1e3).on((function(){e&&ii.ui.add(function(){var e={timeUp:function(){lt.remove(t)}},t=function(){Yr.subscribe(e),Kr.drawSprite(Td,re(Kr,Td),40)};return t}()),Yr.emit("timeStart"),Ii.play.play()})),a=ri.from(Ti.base).loopStart((function(){return c>0})).to(N.blend(Ti.white,Ti.accent,.1),500).to(N.blend(Ti.white,Ti.main,.1),500).loopEnd().to(Ti.base,500).start(!1),s=ri.from({x:0,y:0}).to({x:1,y:-1},20).to({x:-1,y:1},40).to({x:1,y:1},40).to({x:-1,y:-1},40).to({x:0,y:0}),o=ri.from({x:0,y:0}).to({x:2,y:-2},20).to({x:-2,y:2},40).to({x:2,y:2},40).to({x:-2,y:-2},40).to({x:1,y:-1},40).to({x:-1,y:1},40).to({x:1,y:1},40).to({x:-1,y:-1},40).to({x:0,y:0}),u=0,c=60*Gr.fps,l=void 0,h=ai.updateSeed(),d=!1,f=0;n.statusInitIn=function(){ii.ui.add(function(){var e={},t=ri.from(-100).wait(100).to(44).to(54,300,yt.outSine).wait(600).on((function(){lt.remove(n)})).start();e.timeUp=function(){t.start()};var n=function(){Yr.subscribe(e),Kr.drawSprite(Sd,re(Kr,Sd),t.value)};return n}()),i.start()},n.enemyTake=function(e){d||e.large&&o.start()},n.playerDestroy=function(){d||(e||xi("".concat(Si.mode,"_dead"),{time:c,wave_id:Si.enemyWaveId-1}),s.start(),f++)},n.statusFinOut=function(){ri.from(0).wait(200).on((function(){ii.ui.add(Id(u,l))})).wait(300).on((function(){Ii.result.play(),Ii.play.stop()})).start()},n.sceneChange=function(){c>0&&!e&&xi("".concat(Si.mode,"_reset"),{time:c,wave_id:Si.enemyWaveId-1,dead_count:f})};var p=vd();ii.ui.add((function(){return p(u,Si.heart,c)})),ii.player.add(Dd(Boolean(e))),ii.bg.add(gf(1)),Si.heart=0,Si.heartRate=0,Si.isSuccess=!1,Si.clearing.reset();var m=!0,v=!1,y=void 0;if(e){var g=oe(function(e){var t=[],n=0,r=!0,i=!0,a=!1,s=void 0;try{for(var o,u=e[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var c=o.value,l=ie.indexOf(c);if(l<0)throw Error("invalid string");r&&16&l&&(n=-1),r=!1,n=n<<5|31&l,0==(32&l)&&(t.push(n),n=0,r=!0)}}catch(e){a=!0,s=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw s}}return t}(e.log),ni.length);ai.seed=e.seed,ni.forEach((function(e,t){e.log=g[t],e.playLog()}))}else try{for(var w,b=ni[Symbol.iterator]();!(m=(w=b.next()).done);m=!0){w.value.recLog()}}catch(e){v=!0,y=e}finally{try{m||null==b.return||b.return()}finally{if(v)throw y}}return function(){if(Yr.subscribe(n),i.done&&c--,0<=c&&c%Gr.fps==0&&(u+=10*Si.heart,Si.isSuccess=1e6<=u),0===c){e||xi("".concat(Si.mode,"_finish"),{wave_id:Si.enemyWaveId-1,dead_count:f}),d=!0,Yr.emit("timeUp"),ii.ui.add(function(){var e={},t=ri.from(54).to(44,300,yt.outSine).start();e.timeUp=function(){t.start()},e.newRecordShow=function(){lt.remove(n)};var n=function(){Yr.subscribe(e),Kr.drawSprite(Ed,re(Kr,Ed),t.value)};return n}());var t=!0,p=!1,m=void 0;try{for(var v,y=ni[Symbol.iterator]();!(t=(v=y.next()).done);t=!0){v.value.endLog()}}catch(e){p=!0,m=e}finally{try{t||null==y.return||y.return()}finally{if(p)throw m}}e||(l=le.from(function(e){return Fh.apply(this,arguments)}({version:0,log:ae(se.apply(void 0,I(ni.map((function(e){return e.log}))))),score:u,seed:h,mode:Si.mode})))}(null==l?void 0:l.isResolved())&&Gh(l.value.replayId),Kr.save(),Si.isSuccess&&a.update(),Kr.drawRect(0,0,Kr.width,Kr.height,a.value),o.running?Kr.translate(o.value.x,o.value.y):s.running&&Kr.translate(s.value.x,s.value.y),r.run(),ii.bg.run(),ii.effectBack.run(),ii.enemyNotice.run(),ii.player.run(),ii.playerBullet.run(),ii.effectOverPlayer.run(),ii.enemy.run(),ii.enemyBullet.run(),ii.effectOverEnemy.run(),Kr.restore(),ii.ui.run()}},bf=function(){var e,t,n,r,i=zh(),a=i?le.from(function(e){return hh.apply(this,arguments)}(i)):void 0,s=function(){var t;return"ex"===(null!==(e=null==a||null===(t=a.value)||void 0===t?void 0:t.mode)&&void 0!==e?e:Si.mode)},o=N.blend(Ti.white,Ti.accent,.1),u=!1;ii.ui.add(Jh(a),function(e){var t=ri.from(!1).wait(1300).on((function(){var t;return!e||0===(null===(t=e.value)||void 0===t?void 0:t.version)})).loopStart().to(!0,800).to(!1,400).loopEnd().start();return function(){t.value&&Kr.drawSprite(hd,re(Kr,hd),215)}}(a),(t=ri.from(!1).to(!0,100).to(!1),n="true"===localStorage.getItem("mute"),r=function(){n=!n,localStorage.setItem("mute",String(n)),Object.values(_i).forEach((function(e){return e.setMute(n)})),Object.values(Ii).forEach((function(e){return e.setMute(n)})),t.start(),_i.uiButton.play()},function(){var e,i=Zh[n?1:0],a=(e=i,Kr.width-e.width-7);Zr.onDown(i.toBox(a,7),r),Kr.drawSprite(i,a,7),t.value&&(Kr.save(),Kr.opacity(.5),Kr.drawSprite(Qh,a,7),Kr.restore())})),a?ii.ui.add(function(){var e=ri.from(!1).to(!0,100).to(!1).on((function(){Yr.emit("sceneChange",(function(){return Gh(""),bf()}))})),t=function(){e.started||(e.start(),_i.uiButton.play())};return function(){Zr.onDown(cd.toBox(7,7),t),Kr.drawSprite(cd,7,7),e.value&&(Kr.save(),Kr.opacity(.5),Kr.drawSprite(ld,7,7),Kr.restore())}}(),function(e){var t=ri.from(0).wait(500).start(),n=ri.from(0).wait(100),r=ud;e.then((function(e){if(!e)throw Error("replay is not found");if(0!==e.version)throw Error("invalid replay version");r=od,n.to(e.score,300,yt.inSine).start(!1)}));var i=nd(115,74,"REPLAY"),a=sd(3,16);return function(){t.done&&(Kr.save(),i((function(e){Kr.translate(e.x,e.y),a(n.update().value),Kr.drawSprite(r,re(e,ud),46)})),Kr.restore())}}(a)):ii.ui.add(function(){var e=function(){var e=new URLSearchParams({text:"#FireShooterSan\n".concat(Wh())});window.open("https://twitter.com/intent/tweet?".concat(e))};return function(){Zr.onDown(Xh.toBox(7,7),e),Kr.drawSprite(Xh,7,7)}}(),function(){var e,t=Number(null!==(e=localStorage.getItem("tips-no"))&&void 0!==e?e:-1);t=(t+1)%12,localStorage.setItem("tips-no",String(t));var n=rd[t];11===t&&xi("tips_complete");var r=ri.from(0).wait(700).start(),i=ri.from(!1).loopStart().to(!1,800).to(!0,800).loopEnd().start(!1),a=ri.from(!1).loopStart().to(!1,200).to(!0,200).loopEnd().start(!1),s=nd(130,Math.max(n.height+12,60),"TIPS ".concat(t+1,"/").concat(12));return function(){r.done&&s((function(e){Kr.save(),Kr.translate(e.x+re(e,n)|0,e.y+function(e,t){return(e.height-t.height)/2}(e,n)|0),Kr.drawSprite(n),i.update(),a.update(),0===t&&a.value&&Kr.drawSprite(rd.million,39,32),1===t&&a.value&&Kr.drawRect(90,18,2,2,Ti.white),1===t&&i.value&&Kr.drawSprite(rd.arrow,63,16),2===t&&i.value&&Kr.drawSprite(rd.heart,0,16),3===t&&i.value&&(Kr.drawSprite(rd.heart,41,1),Kr.drawSprite(rd.heart,40,31)),4===t&&i.value&&Kr.drawSprite(rd.heart,41,31),5===t&&i.value&&(Kr.drawSprite(rd.heart,51,1),Kr.drawSprite(rd.score,40,17)),6===t&&a.value&&Kr.drawSprite(rd.million,0,2),10===t&&i.value&&Kr.drawSprite(rd.user,0,14),Kr.restore()}))}}()),ii.bg.add(gf(.3)),Object.values(Ii).forEach((function(e){return e.stop()})),Ti.base=s()?o:Ti.white;var c=ri.from(Ti.base),l=s();return function(){var e;if(l!==s()&&(l=s(),Ti.base=s()?o:Ti.white,c.end(),c=ri.from(c.value).to(Ti.base,300).start()),!u&&(!a||0===(null===(e=a.value)||void 0===e?void 0:e.version))&&ti.some((function(e){return e.isDownChange}))){u=!0;ii.ui.add(_d({times:2,onEnd:function(){Yr.emit("sceneChange",(function(){return wf(null==a?void 0:a.value)}))}})),_i.titleStart.play()}Kr.drawRect(0,0,Kr.width,Kr.height,c.value),ii.bg.run(),ii.ui.run()}};var _f,kf={},If=bf,Sf=If(),Tf=ri.from(0).wait(100).to(Kr.height,200).start(),Ef=ri.from(-Kr.height).to(0,200).on((function(){ri.clear(),Object.values(Xr).forEach((function(e){return e.endLog()})),Zr.endLog(),Object.values(ii).forEach((function(e){return e.clear()})),Sf=If(),Tf.start()}));kf.sceneChange=function(e){If=e,Ef.start()},Bh=function(){return Yr.emit("sceneChange",bf)},_f="true"===localStorage.getItem("mute"),Object.values(_i).forEach((function(e){return e.setMute(_f)})),Object.values(Ii).forEach((function(e){return e.setMute(_f)})),Si.mode=qh(),Gr.proc=function(){Kr.clear(),Yr.clear(),Jr.clear(),Object.values(Xr).forEach((function(e){return e.update()})),Zr.update(),ri.update(),Yr.subscribe(kf),Xr.reset.isDownChange&&!Ef.running&&Yr.emit("sceneChange",(function(){return Gh(""),bf()})),Sf();var e=[Tf,Ef].find((function(e){return e.running}));e&&Kr.drawRect(0,e.value,Kr.width,Kr.height,Ti.base)}}();