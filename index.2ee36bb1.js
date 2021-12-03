!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},a=n.parcelRequirebae0;function s(e,t,n,r,i,a,s){try{var o=e[a](s),u=o.value}catch(e){return void n(e)}o.done?t(u):Promise.resolve(u).then(r,i)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(r,i){var a=e.apply(t,n);function o(e){s(a,r,i,o,u,"next",e)}function u(e){s(a,r,i,o,u,"throw",e)}o(void 0)}))}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e).value}function l(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");var r=t.get(e);if(!r.writable)throw new TypeError("attempted to set read only private field");return r.value=n,n}function h(e,t,n){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return n}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),e}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e){return m(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){p(e,t,n[t])}))}return e}function b(e,t){return!t||"object"!=((n=t)&&n.constructor===Symbol?"symbol":typeof n)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t;var n}function _(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||_(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function I(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||_(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},n.parcelRequirebae0=a),a.register("iiiWY",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("iiiWY").register(JSON.parse('{"6iZMW":"index.2ee36bb1.js","eTB8B":"image.c138513e.png","jzkA8":"se_etc_003.751a5cc1.wav","6uV70":"se_shot_003.7192b630.wav","akrbZ":"wind3.87bf4484.wav","8cvlD":"shoot9.2235e996.wav","KfNtP":"se_powerup_004.fb62fc04.wav","b5Tfb":"se_powerup_008.fd5e1090.wav","a5LcI":"audiostock_49758.e0483042.mp3","2lEye":"audiostock_49543.c0017692.mp3","aMV2A":"sonohoka_pyokottohaeru.ebb39909.wav","aIeDX":"hit_kyouda4.c2fae92b.wav","eMTjg":"kaminarikei_chisaikaminari.a1aac738.wav","kNbWg":"cancel2.e1adafec.wav","f1UVR":"mamono_tsukon2.40b037d7.wav","33mfn":"souchi_kaifukusouchi.b8152e4c.wav","9WYf8":"hit_tsujou3.4da24c3a.wav"}'));var S=new WeakSet,T=function(){"use strict";function e(t){var n=t.fps,r=this,i=this;u(this,e),E.set(this,{writable:!0,value:void 0}),p(this,"proc",null),x.set(this,{writable:!0,value:0}),A.set(this,{writable:!0,value:0}),R.set(this,{writable:!0,value:0}),S.add(this),O.set(this,{writable:!0,value:function(){var e,t;l(r,A,window.requestAnimationFrame(c(r,O))),l(r,R,1+ +c(r,R)),null===(t=(e=r).proc)||void 0===t||t.call(e)}}),l(this,E,n),h(this,S,P).call(this),document.addEventListener("visibilitychange",(function(){return h(i,S,P).call(i)}))}return f(e,[{key:"fps",get:function(){return c(this,E)}},{key:"time",get:function(){return 1e3*c(this,R)/this.fps}},{key:"frameTime",get:function(){return 1e3/c(this,E)}}]),e}(),E=new WeakMap,x=new WeakMap,A=new WeakMap,R=new WeakMap,O=new WeakMap;function P(){window.cancelAnimationFrame(c(this,A)),"visible"===document.visibilityState&&l(this,A,window.requestAnimationFrame(c(this,O)))}var M=/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})?$|^#([0-9a-f])([0-9a-f])([0-9a-f])([0-9a-f])?$/i,L={},N=function(){"use strict";function e(t){var n,r,i,a,s=void 0===t?{}:t;u(this,e),C.set(this,{writable:!0,value:void 0}),D.set(this,{writable:!0,value:void 0}),U.set(this,{writable:!0,value:void 0}),F.set(this,{writable:!0,value:void 0}),V.set(this,{writable:!0,value:""}),l(this,C,null!==(n=s.red)&&void 0!==n?n:0),l(this,D,null!==(r=s.green)&&void 0!==r?r:0),l(this,U,null!==(i=s.blue)&&void 0!==i?i:0),l(this,F,null!==(a=s.alpha)&&void 0!==a?a:1)}return f(e,[{key:"red",get:function(){return c(this,C)},set:function(e){l(this,C,e),l(this,V,"")}},{key:"green",get:function(){return c(this,D)},set:function(e){l(this,D,e),l(this,V,"")}},{key:"blue",get:function(){return c(this,U)},set:function(e){l(this,U,e),l(this,V,"")}},{key:"alpha",get:function(){return c(this,F)},set:function(e){l(this,F,e),l(this,V,"")}},{key:"toString",value:function(){return c(this,V)||l(this,V,"#"+j(c(this,C))+j(c(this,D))+j(c(this,U))+j(c(this,F))),c(this,V)}},{key:"opacity",value:function(t){var n=new e(this);return n.alpha=Math.min(Math.max(0,c(this,F)*t),1),n}}],[{key:"parse",value:function(t){var n=L[t];if(!n){var r=t.match(M)||[];n=L[t]={red:parseInt(r[1]||r[5]+r[5]||"0",16)/255,green:parseInt(r[2]||r[6]+r[6]||"0",16)/255,blue:parseInt(r[3]||r[7]+r[7]||"0",16)/255,alpha:parseInt(r[4]||r[8]+r[8]||"ff",16)/255}}return new e(n)}},{key:"blend",value:function(t,n,r){var i=void 0===r?.5:r;return new e({red:(n.red-t.red)*i+t.red,green:(n.green-t.green)*i+t.green,blue:(n.blue-t.blue)*i+t.blue,alpha:(n.alpha-t.alpha)*i+t.alpha})}}]),e}(),C=new WeakMap,D=new WeakMap,U=new WeakMap,F=new WeakMap,V=new WeakMap;function j(e){return Math.min(Math.max(0,Math.floor(255*e)),255).toString(16).padStart(2,"0")}var B={},W=function(){"use strict";function e(t,n){var r=void 0===n?{}:n;u(this,e),q.set(this,{writable:!0,value:void 0}),this.image=t,l(this,q,w({},r))}return f(e,[{key:"x",get:function(){var e;return null!==(e=c(this,q).x)&&void 0!==e?e:0}},{key:"y",get:function(){var e;return null!==(e=c(this,q).y)&&void 0!==e?e:0}},{key:"width",get:function(){var e;return null!==(e=c(this,q).width)&&void 0!==e?e:this.image.width}},{key:"height",get:function(){var e;return null!==(e=c(this,q).height)&&void 0!==e?e:this.image.height}},{key:"originX",get:function(){var e;return null!==(e=c(this,q).originX)&&void 0!==e?e:0}},{key:"originY",get:function(){var e;return null!==(e=c(this,q).originY)&&void 0!==e?e:0}},{key:"originLeft",get:function(){return this.originX}},{key:"originTop",get:function(){return this.originY}},{key:"originRight",get:function(){return this.width-this.originX}},{key:"originBottom",get:function(){return this.height-this.originY}},{key:"sub",value:function(t){var n,r,i,a,s,o,u=w({},c(this,q));return void 0!==t.x&&(u.x=t.x+(null!==(n=u.x)&&void 0!==n?n:0)),void 0!==t.y&&(u.y=t.y+(null!==(r=u.y)&&void 0!==r?r:0)),void 0!==t.width&&(u.width=t.width+(null!==(i=u.width)&&void 0!==i?i:0)),void 0!==t.height&&(u.height=t.height+(null!==(a=u.height)&&void 0!==a?a:0)),void 0!==t.originX&&(u.originX=t.originX+(null!==(s=u.originX)&&void 0!==s?s:0)),void 0!==t.originY&&(u.originY=t.originY+(null!==(o=u.originY)&&void 0!==o?o:0)),new e(this.image,u)}},{key:"toBox",value:function(e,t){return{x:e,y:t,width:this.width,height:this.height,originX:this.originX,originY:this.originY}}}],[{key:"load",value:function(t,n){var r=void 0===n?{}:n,i=t instanceof URL?t.href:t,a=B[i];return a||((a=B[i]=new Image).src=i),new e(a,r)}},{key:"loadMap",value:function(t,n){var r=function(n){if(Array.isArray(n)){var i=k(n),a=i[0],s=i[1],o=i[2],u=i[3],c=i[4],l=i[5];return e.load(t,{x:a,y:s,width:o,height:u,originX:null!=c?c:0,originY:null!=l?l:0})}var h=Object.entries(n).map((function(e){var t=k(e),n=t[0],i=t[1];return[n,r(i)]}));return Object.fromEntries(h)};return r(n)}}]),e}(),q=new WeakMap,$={normal:"source-over",add:"lighter",multiply:"multiply",screen:"screen",overlay:"overlay"},H=new WeakSet,z=function(){"use strict";function e(t){var n=t.width,r=t.height,i=t.el,a=this,s=this;u(this,e),p(this,"width",void 0),p(this,"height",void 0),p(this,"canvas",void 0),G.set(this,{writable:!0,value:void 0}),H.add(this);var o="string"==typeof i?document.querySelector(i):i;if(!(o&&o instanceof HTMLCanvasElement))throw Error("not canvas element");this.canvas=o,this.width=o.width=n,this.height=o.height=r,o.setAttribute("style","\n  image-rendering: pixelated;\n  image-rendering: crisp-edges;\n  touch-action: none;\n");var c=o.getContext("2d");if(!c)throw Error("none context2d");l(this,G,c),c.imageSmoothingEnabled=!1,window.addEventListener("resize",(function(){return h(a,H,K).call(a)})),window.setTimeout((function(){return h(s,H,K).call(s)}),1)}return f(e,[{key:"clear",value:function(){c(this,G).setTransform(1,0,0,1,0,0),c(this,G).clearRect(0,0,this.canvas.width,this.canvas.height)}},{key:"save",value:function(){c(this,G).save()}},{key:"restore",value:function(){c(this,G).restore()}},{key:"getMatrix",value:function(){return c(this,G).getTransform()}},{key:"drawSprite",value:function(e,t,n,r,i){e.image.complete&&(r=null!=r?r:e.width,i=null!=i?i:e.height,t=(null!=t?t:0)-e.originX*(r/e.width),n=(null!=n?n:0)-e.originY*(i/e.height),c(this,G).drawImage(e.image,e.x,e.y,e.width,e.height,Math.floor(t),Math.floor(n),Math.floor(r),Math.floor(i)))}},{key:"drawText",value:function(e,t,n,r,i){var a=void 0===i?1:i,s=0,o=!0,u=!1,c=void 0;try{for(var l,h=t[Symbol.iterator]();!(o=(l=h.next()).done);o=!0){var d,f=l.value;if(" "!==f){var p,m=null!==(p=null===(d=e[f])||void 0===d?void 0:d.width)&&void 0!==p?p:0;m&&(s&&(s+=a),this.drawSprite(e[f],n+s,r),s+=m)}else s&&(s+=a),s+=1}}catch(e){u=!0,c=e}finally{try{o||null==h.return||h.return()}finally{if(u)throw c}}}},{key:"measuretext",value:function(e,t,n){var r=void 0===n?1:n,i=0,a=!0,s=!1,o=void 0;try{for(var u,c=t[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){var l,h=u.value;if(" "!==h){var d,f=null!==(d=null===(l=e[h])||void 0===l?void 0:l.width)&&void 0!==d?d:0;f&&(i&&(i+=r),i+=f)}else i&&(i+=r),i+=1}}catch(e){s=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(s)throw o}}return i}},{key:"drawRect",value:function(e,t,n,r,i){c(this,G).fillStyle=String(i),c(this,G).fillRect(e,t,n,r)}},{key:"drawCircle",value:function(e,t,n,r){e=Math.floor(e),t=Math.floor(t),n=Math.floor(n),c(this,G).fillStyle=String(r);var i=c(this,G).fillRect.bind(c(this,G)),a=-n,s=0,o=2-2*n;do{i(e-a,t+s,1,1),i(e-s,t-a,1,1),i(e+a,t-s,1,1),i(e+s,t+a,1,1),(n=o)<=s&&(o+=2*++s+1),(n>a||o>s)&&(o+=2*++a+1)}while(a<0)}},{key:"translate",value:function(e,t){c(this,G).translate(e,t)}},{key:"scale",value:function(e,t){c(this,G).scale(e,null!=t?t:e)}},{key:"rotate",value:function(e){c(this,G).rotate(e*Math.PI/180)}},{key:"opacity",value:function(e){c(this,G).globalAlpha=Math.min(Math.max(e,0),1)}},{key:"blendMode",value:function(e){c(this,G).globalCompositeOperation=$[e]}},{key:"boxToRect",value:function(e){var t=this.getMatrix(),n=e.x-e.originX,r=e.y-e.originY,i=t.transformPoint({x:n,y:r}),a=t.transformPoint({x:n+e.width,y:r}),s=t.transformPoint({x:n+e.width,y:r+e.height}),o=t.transformPoint({x:n,y:r+e.height});return{left:Math.min(i.x,a.x,s.x,o.x),top:Math.min(i.y,a.y,s.y,o.y),right:Math.max(i.x,a.x,s.x,o.x),bottom:Math.max(i.y,a.y,s.y,o.y)}}}]),e}(),G=new WeakMap;function K(){var e=this.canvas.width/window.devicePixelRatio,t=this.canvas.height/window.devicePixelRatio,n=Math.floor(window.innerWidth/e),r=Math.floor(window.innerHeight/t);this.canvas.style.width="".concat(Math.max(Math.min(n,r),1)*e,"px")}var Y={},J=function(e){var t,n=Object.prototype,r=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",o=i.toStringTag||"@@toStringTag";function u(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof v?t:v,a=Object.create(i.prototype),s=new A(r||[]);return a._invoke=function(e,t,n){var r=h;return function(i,a){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw a;return O()}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var o=T(s,n);if(o){if(o===m)continue;return o}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var u=l(e,t,n);if("normal"===u.type){if(r=n.done?p:d,u.arg===m)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=p,n.method="throw",n.arg=u.arg)}}}(e,n,s),a}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",m={};function v(){}function y(){}function g(){}var w={};u(w,a,(function(){return this}));var b=Object.getPrototypeOf,_=b&&b(b(R([])));_&&_!==n&&r.call(_,a)&&(w=_);var k=g.prototype=v.prototype=Object.create(w);function I(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function n(i,a,s,o){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,h=c.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,s,o)}),(function(e){n("throw",e,s,o)})):t.resolve(h).then((function(e){c.value=e,s(c)}),(function(e){return n("throw",e,s,o)}))}o(u.arg)}var i;this._invoke=function(e,r){function a(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(a,a):a()}}function T(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator.return&&(n.method="return",n.arg=t,T(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function A(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function R(e){if(e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,s=function n(){for(;++i<e.length;)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:O}}function O(){return{value:t,done:!0}}return y.prototype=g,u(k,"constructor",g),u(g,"constructor",y),y.displayName=u(g,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,o,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},I(S.prototype),u(S.prototype,s,(function(){return this})),e.AsyncIterator=S,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var s=new S(c(t,n,r,i),a);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},I(k),u(k,o,"Generator"),u(k,a,(function(){return this})),u(k,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=R,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(x),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return o.type="throw",o.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var s=this.tryEntries[a],o=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var u=r.call(s,"catchLoc"),c=r.call(s,"finallyLoc");if(u&&c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=e,s.arg=t,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;x(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:R(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(Y);try{regeneratorRuntime=J}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=J:Function("r","regeneratorRuntime = r")(J)}function X(e){return e.toLocaleString("en-US")}function Z(e,t){return Math.atan2(t,e)*(180/Math.PI)}function Q(e){return(e%=360)<0&&(e+=360),e>180&&(e-=360),e}function ee(e,t){var n=void 0===t?1:t,r=e*(Math.PI/180);return{x:Math.cos(r)*n,y:Math.sin(r)*n}}function te(e,t){var n=function(e,t){return Math.sqrt(e*e+t*t)}(e,t);return{x:e/n,y:t/n}}function ne(e){return Array.from({length:e}).map((function(e,t){return t}))}function re(e,t){return(e.width-t.width)/2}var ie="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";function ae(e){var t="",n=!0,r=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){for(var o=a.value,u=(0<=(o=Math.floor(o))?o:-o-1).toString(2).length+1,c=0,l="";u>0;)l=ie[31&o|c]+l,u-=5,o>>=5,c=32;t+=l}}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}return t}function se(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=[],i=!0,a=!1,s=void 0;try{for(var o,u=t[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var c=o.value;r=r.concat(c.length,c)}}catch(e){a=!0,s=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw s}}return r}function oe(e,t){for(var n=[],r=0,i=0;i<t;i++){var a=r+1+e[r];if(e.length<a)throw Error("invalid pack size");n.push(e.slice(r+1,a)),r=a}return n}function ue(e,t){var n=Array.isArray(t)?t:[t];return Promise.race(n.map((function(t){return new Promise((function(n){return e.addEventListener(t,n)}))})))}function ce(e,t,n){return(t-e)*n+e}var le=function(){"use strict";function e(t){var n=this;u(this,e),he.set(this,{writable:!0,value:void 0}),de.set(this,{writable:!0,value:!1}),fe.set(this,{writable:!0,value:void 0}),l(this,he,t),t.then((function(e){l(n,de,!0),l(n,fe,e)}))}return f(e,[{key:"then",value:function(t,n){return new e(c(this,he).then(t,n))}},{key:"isResolved",value:function(){return c(this,de)}},{key:"value",get:function(){return c(this,fe)}}],[{key:"from",value:function(t){return new e("function"==typeof t?t():t)}}]),e}(),he=new WeakMap,de=new WeakMap,fe=new WeakMap,pe=window.webkitAudioContext||window.AudioContext,me=le.from(o(t(Y).mark((function e(){var n,r;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ue(document,["touchend","mouseup","keyup"]);case 2:return n=new pe,r=function(){return"visible"===document.visibilityState?n.resume():n.suspend()},e.next=6,r();case 6:return document.addEventListener("visibilitychange",r),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))),ve=new WeakSet,ye=function(){"use strict";function e(n,r){var i=void 0===r?{}:r;u(this,e);var a=this;ge.set(this,{writable:!0,value:void 0}),we.set(this,{writable:!0,value:1}),be.set(this,{writable:!0,value:void 0}),_e.set(this,{writable:!0,value:void 0}),ke.set(this,{writable:!0,value:void 0}),Ie.set(this,{writable:!0,value:Number.MIN_SAFE_INTEGER}),Se.set(this,{writable:!0,value:void 0}),Te.set(this,{writable:!0,value:void 0}),Ee.set(this,{writable:!0,value:null}),ve.add(this);var s,h,d,f,p,m=this;l(this,ge,null!==(s=i.volume)&&void 0!==s?s:1),l(this,be,null!==(h=i.minTime)&&void 0!==h?h:0),l(this,_e,null!==(d=i.loop)&&void 0!==d&&d),l(this,ke,null!==(f=i.mute)&&void 0!==f&&f),l(this,Se,le.from((p=o(t(Y).mark((function e(){var r,i,a;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(n instanceof URL?n.href:n);case 2:return r=e.sent,e.next=5,r.arrayBuffer();case 5:return i=e.sent,e.next=8,me;case 8:return a=e.sent,e.abrupt("return",a.decodeAudioData(i));case 10:case"end":return e.stop()}}),e)}))),function(){return p.apply(a,arguments)}))),l(this,Te,le.from(function(){var e=o(t(Y).mark((function e(){var n,r;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,me;case 2:return n=e.sent,(r=n.createGain()).gain.value=c(m,ke)?0:c(m,we)*c(m,ge),r.connect(n.destination),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(a,arguments)}}()))}return f(e,[{key:"play",value:function(){var e=this;if(me.isResolved()&&c(this,Se).isResolved()&&c(this,Te).isResolved()){if(me.value.currentTime-c(this,Ie)>=c(this,be)){var t,n,r;if(null===(t=c(this,Ee))||void 0===t||t.stop(),l(this,Ee,me.value.createBufferSource()),"boolean"==typeof c(this,_e))c(this,Ee).loop=c(this,_e);else c(this,Ee).loop=!0,c(this,Ee).loopStart=null!==(n=c(this,_e).start)&&void 0!==n?n:0,c(this,Ee).loopEnd=null!==(r=c(this,_e).end)&&void 0!==r?r:0;c(this,Ee).buffer=c(this,Se).value,c(this,Ee).connect(c(this,Te).value),c(this,Ee).start(),l(this,Ie,me.value.currentTime)}}else Promise.all([me,c(this,Se),c(this,Te)]).then((function(){e.play()}))}},{key:"stop",value:function(){var e;null===(e=c(this,Ee))||void 0===e||e.stop(),l(this,Ee,null)}},{key:"setMute",value:function(e){l(this,ke,e),h(this,ve,xe).call(this)}},{key:"setVolume",value:function(e){l(this,we,e),h(this,ve,xe).call(this)}}]),e}(),ge=new WeakMap,we=new WeakMap,be=new WeakMap,_e=new WeakMap,ke=new WeakMap,Ie=new WeakMap,Se=new WeakMap,Te=new WeakMap,Ee=new WeakMap;function xe(){c(this,Te).isResolved()&&(c(this,Te).value.gain.value=c(this,ke)?0:c(this,we)*c(this,ge))}var Ae=function(e){"use strict";function t(e,n,r){return u(this,t),b(this,v(t).call(this,e,{volume:n,minTime:r}))}return g(t,e),t}(ye),Re=function(e){"use strict";function t(e,n,r){return u(this,t),b(this,v(t).call(this,e,{volume:n,loop:r}))}return g(t,e),t}(ye),Oe=function(){"use strict";function e(){u(this,e),Pe.set(this,{writable:!0,value:new Set}),Me.set(this,{writable:!0,value:new Set})}return f(e,[{key:"clear",value:function(){c(this,Pe).clear(),c(this,Me).clear()}},{key:"subscribe",value:function(e){var t,n=!0,r=!1,i=void 0;try{for(var a,s=c(this,Me)[Symbol.iterator]();!(n=(a=s.next()).done);n=!0){var o=a.value;null===(t=e[o.type])||void 0===t||t.call(e,o.data)}}catch(e){r=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(r)throw i}}c(this,Pe).add(e)}},{key:"emit",value:function(e,t){var n,r=!0,i=!1,a=void 0;try{for(var s,o=c(this,Pe)[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var u=s.value;null===(n=u[e])||void 0===n||n.call(u,t)}}catch(e){i=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}c(this,Me).add({type:e,data:t})}}]),e}(),Pe=new WeakMap,Me=new WeakMap,Le=function(){"use strict";function e(t){u(this,e),Ne.set(this,{writable:!0,value:void 0}),Ce.set(this,{writable:!0,value:[]}),l(this,Ne,t),l(this,Ce,[])}return f(e,[{key:"clear",value:function(){l(this,Ce,[])}},{key:"emit",value:function(e,t,n,r){var i=c(this,Ne).boxToRect(n),a=!0,s=!1,o=void 0;try{for(var u,l=c(this,Ce)[Symbol.iterator]();!(a=(u=l.next()).done);a=!0){var h=u.value,d=h.type,f=h.data,p=h.rect,m=h.eventMap[e],v=r[d];(m||v)&&i.left<p.right&&p.left<i.right&&i.top<p.bottom&&p.top<i.bottom&&(null==m||m(t),null==v||v(f))}}catch(e){s=!0,o=e}finally{try{a||null==l.return||l.return()}finally{if(s)throw o}}c(this,Ce).push({type:e,data:t,rect:i,eventMap:r})}}]),e}(),Ne=new WeakMap,Ce=new WeakMap,De=[" ","Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"];function Ue(e){return e instanceof HTMLElement&&!!e.closest("input, textarea, select, button")}window.addEventListener("keydown",(function(e){De.includes(e.key)&&!Ue(e.target)&&e.preventDefault()}));var Fe={};window.addEventListener("keydown",(function(e){Ue(e.target)||(Fe[e.key.toLocaleLowerCase()]=!0)})),window.addEventListener("keyup",(function(e){Ue(e.target)||(Fe[e.key.toLocaleLowerCase()]=!1)})),window.addEventListener("blur",(function(){Fe={}}));var Ve=function(){"use strict";function e(t){u(this,e),je.set(this,{writable:!0,value:void 0}),Be.set(this,{writable:!0,value:!1}),We.set(this,{writable:!0,value:!1}),qe.set(this,{writable:!0,value:0}),$e.set(this,{writable:!0,value:[]}),He.set(this,{writable:!0,value:0}),ze.set(this,{writable:!0,value:"pause"}),l(this,je,(Array.isArray(t)?t:[t]).map((function(e){return e.toLocaleLowerCase()})))}return f(e,[{key:"update",value:function(){l(this,We,c(this,Be)),"play"===c(this,ze)?(l(this,qe,1+ +c(this,qe)),c(this,$e)[c(this,He)]<c(this,qe)&&(l(this,Be,!c(this,Be)),l(this,qe,0),l(this,He,1+ +c(this,He)))):(l(this,Be,c(this,je).some((function(e){return Fe[e]}))),l(this,qe,c(this,Be)===c(this,We)?c(this,qe)+1:0)),"rec"===c(this,ze)&&(c(this,Be)===c(this,We)?c(this,$e)[c(this,$e).length-1]=c(this,qe):c(this,$e).push(c(this,qe)))}},{key:"isDown",get:function(){return c(this,Be)}},{key:"isDownChange",get:function(){return c(this,Be)&&!c(this,We)}},{key:"isUpChange",get:function(){return!c(this,Be)&&c(this,We)}},{key:"downCount",get:function(){return c(this,Be)?c(this,qe):NaN}},{key:"upCount",get:function(){return c(this,Be)?NaN:c(this,qe)}},{key:"logMode",get:function(){return c(this,ze)}},{key:"log",get:function(){return c(this,$e).slice()},set:function(e){l(this,$e,e.slice()),l(this,ze,"pause")}},{key:"recLog",value:function(){l(this,$e,[c(this,qe),c(this,We)?1:0,c(this,Be)?1:0,c(this,qe)]),l(this,ze,"rec")}},{key:"playLog",value:function(){l(this,qe,c(this,$e)[0]),l(this,We,Boolean(c(this,$e)[1])),l(this,Be,Boolean(c(this,$e)[2])),l(this,He,3),l(this,ze,"play")}},{key:"endLog",value:function(){l(this,ze,"pause")}}]),e}(),je=new WeakMap,Be=new WeakMap,We=new WeakMap,qe=new WeakMap,$e=new WeakMap,He=new WeakMap,ze=new WeakMap;window.addEventListener("contextmenu",(function(e){return e.preventDefault()}));var Ge=null,Ke={x:0,y:0};window.addEventListener("pointerdown",(function(e){Ge=e.target,Ke.x=e.clientX,Ke.y=e.clientY})),window.addEventListener("pointerup",(function(e){Ge=null})),window.addEventListener("pointercancel",(function(e){Ge=null})),window.addEventListener("pointermove",(function(e){Ke.x=e.clientX,Ke.y=e.clientY})),window.addEventListener("blur",(function(){Ge=null}));var Ye=function(){"use strict";function e(t){var n=this;u(this,e),Ne.set(this,{writable:!0,value:void 0}),Be.set(this,{writable:!0,value:!1}),We.set(this,{writable:!0,value:!1}),qe.set(this,{writable:!0,value:0}),Je.set(this,{writable:!0,value:0}),Xe.set(this,{writable:!0,value:0}),Ze.set(this,{writable:!0,value:0}),Qe.set(this,{writable:!0,value:0}),et.set(this,{writable:!0,value:0}),tt.set(this,{writable:!0,value:0}),$e.set(this,{writable:!0,value:[]}),He.set(this,{writable:!0,value:0}),nt.set(this,{writable:!0,value:[]}),rt.set(this,{writable:!0,value:0}),it.set(this,{writable:!0,value:[]}),at.set(this,{writable:!0,value:0}),ze.set(this,{writable:!0,value:"pause"}),st.set(this,{writable:!0,value:[]}),ot.set(this,{writable:!0,value:!1}),l(this,Ne,t);var r=c(this,Ne).canvas;r.addEventListener("pointerdown",(function(e){var t=r.getBoundingClientRect(),i=Math.floor((e.clientX-t.x)*r.width/t.width),a=Math.floor((e.clientY-t.y)*r.height/t.height),s=!0,o=!1,u=void 0;try{for(var h,d=c(n,st)[Symbol.iterator]();!(s=(h=d.next()).done);s=!0){var f=h.value,p=f.rect,m=f.callback;p.left<=i&&i<p.right&&p.top<=a&&a<p.bottom&&(l(n,ot,!0),m())}}catch(e){o=!0,u=e}finally{try{s||null==d.return||d.return()}finally{if(o)throw u}}}))}return f(e,[{key:"update",value:function(){l(this,st,[]);var e=c(this,Ne).canvas;Ge instanceof Node||l(this,ot,!1),l(this,We,c(this,Be));var t=c(this,Ze),n=c(this,Qe);if("play"===c(this,ze))l(this,qe,1+ +c(this,qe)),c(this,$e)[c(this,He)]<c(this,qe)&&(l(this,Be,!c(this,Be)),l(this,qe,0),l(this,He,1+ +c(this,He))),l(this,et,1+ +c(this,et)),l(this,tt,1+ +c(this,tt)),c(this,nt)[c(this,rt)]<c(this,et)&&(l(this,et,0),l(this,rt,c(this,rt)+2),l(this,Ze,c(this,nt)[c(this,rt)-1]||0)),c(this,it)[c(this,at)]<c(this,tt)&&(l(this,tt,0),l(this,at,c(this,at)+2),l(this,Qe,c(this,it)[c(this,at)-1]||0)),l(this,Je,c(this,Je)+c(this,Ze)),l(this,Xe,c(this,Xe)+c(this,Qe));else{l(this,Be,!c(this,ot)&&Ge instanceof Node&&e.contains(Ge)),l(this,qe,c(this,Be)===c(this,We)?c(this,qe)+1:0);var r=c(this,Je),i=c(this,Xe),a=e.getBoundingClientRect();l(this,Je,Math.floor((Ke.x-a.x)*(e.width/a.width))),l(this,Xe,Math.floor((Ke.y-a.y)*(e.height/a.height))),l(this,Ze,c(this,Je)-r),l(this,Qe,c(this,Xe)-i),l(this,et,c(this,Ze)===t?c(this,et)+1:0),l(this,tt,c(this,Qe)===n?c(this,tt)+1:0)}"rec"===c(this,ze)&&(c(this,Be)===c(this,We)?c(this,$e)[c(this,$e).length-1]=c(this,qe):c(this,$e).push(c(this,qe)),c(this,Ze)===t?c(this,nt)[c(this,nt).length-1]=c(this,et):c(this,nt).push(c(this,Ze),c(this,et)),c(this,Qe)===n?c(this,it)[c(this,it).length-1]=c(this,tt):c(this,it).push(c(this,Qe),c(this,tt))),c(this,Be)&&!c(this,We)&&(l(this,Ze,0),l(this,Qe,0))}},{key:"isDown",get:function(){return c(this,Be)}},{key:"isDownChange",get:function(){return c(this,Be)&&!c(this,We)}},{key:"isUpChange",get:function(){return!c(this,Be)&&c(this,We)}},{key:"downCount",get:function(){return c(this,Be)?c(this,qe):NaN}},{key:"upCount",get:function(){return c(this,Be)?NaN:c(this,qe)}},{key:"pos",get:function(){return{x:c(this,Je),y:c(this,Xe)}}},{key:"vec",get:function(){return{x:c(this,Ze),y:c(this,Qe)}}},{key:"onDown",value:function(e,t){var n=c(this,Ne).boxToRect(e);c(this,st).push({rect:n,callback:t})}},{key:"logMode",get:function(){return c(this,ze)}},{key:"log",get:function(){return se(c(this,$e),c(this,nt),c(this,it))},set:function(e){var t=oe(e,3);l(this,$e,t[0]),l(this,nt,t[1]),l(this,it,t[2]),l(this,ze,"pause")}},{key:"recLog",value:function(){l(this,$e,[c(this,qe),c(this,We)?1:0,c(this,Be)?1:0,c(this,qe)]),l(this,nt,[c(this,et),c(this,Je),c(this,Ze),c(this,et)]),l(this,it,[c(this,tt),c(this,Xe),c(this,Qe),c(this,tt)]),l(this,ze,"rec")}},{key:"playLog",value:function(){l(this,qe,c(this,$e)[0]),l(this,We,Boolean(c(this,$e)[1])),l(this,Be,Boolean(c(this,$e)[2])),l(this,He,3),l(this,et,c(this,nt)[0]),l(this,Je,c(this,nt)[1]),l(this,Ze,c(this,nt)[2]),l(this,rt,3),l(this,tt,c(this,it)[0]),l(this,Xe,c(this,it)[1]),l(this,Qe,c(this,it)[2]),l(this,at,3),l(this,ze,"play")}},{key:"endLog",value:function(){l(this,ze,"pause")}}]),e}(),Je=(Ne=new WeakMap,Be=new WeakMap,We=new WeakMap,qe=new WeakMap,new WeakMap),Xe=new WeakMap,Ze=new WeakMap,Qe=new WeakMap,et=new WeakMap,tt=new WeakMap,nt=($e=new WeakMap,He=new WeakMap,new WeakMap),rt=new WeakMap,it=new WeakMap,at=new WeakMap,st=(ze=new WeakMap,new WeakMap),ot=new WeakMap,ut=new WeakMap,ct=function(){"use strict";function e(){u(this,e),lt.set(this,{writable:!0,value:new Set})}return f(e,[{key:"add",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=!0,a=!1,s=void 0;try{for(var o,u=n[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var l=o.value;e.remove(l),c(this,lt).add(l),ut.set(l,c(this,lt))}}catch(e){a=!0,s=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw s}}}},{key:"run",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=!0,i=!1,a=void 0;try{for(var s,o=c(this,lt)[Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var u=s.value;u.apply(void 0,I(t))}}catch(e){i=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}}},{key:"clear",value:function(){c(this,lt).clear()}},{key:"isEmpty",get:function(){return!c(this,lt).size}},{key:"size",get:function(){return c(this,lt).size}}],[{key:"remove",value:function(e){var t=ut.get(e),n=!1;return t&&(n=t.delete(e),ut.delete(e)),n}},{key:"of",value:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i,a=new e;return(i=a).add.apply(i,I(n)),a}}]),e}(),lt=new WeakMap,ht=function(){"use strict";function e(){u(this,e),dt.set(this,{writable:!0,value:Uint32Array.of(4294967295*Math.random()+1)})}return f(e,[{key:"seed",get:function(){return 0|c(this,dt)[0]},set:function(e){c(this,dt)[0]=e}},{key:"updateSeed",value:function(){return c(this,dt)[0]=4294967295*Math.random()+1,this.seed}},{key:"nextInt",value:function(e,t){c(this,dt)[0]^=c(this,dt)[0]<<13,c(this,dt)[0]^=c(this,dt)[0]>>17,c(this,dt)[0]^=c(this,dt)[0]<<5;var n=c(this,dt)[0]/4294967296;return void 0===t&&(t=e,e=0),Math.floor(n*(t-e))+e}},{key:"nextFloat",value:function(e,t){return c(this,dt)[0]^=c(this,dt)[0]<<13,c(this,dt)[0]^=c(this,dt)[0]>>17,c(this,dt)[0]^=c(this,dt)[0]<<5,void 0===t&&(t=e,e=0),c(this,dt)[0]/4294967296*(t-e)+e}},{key:"shuffle",value:function(e){var t=this;return e.map((function(e){return{num:t.nextFloat(1),val:e}})).sort((function(e,t){return e.num-t.num})).map((function(e){return e.val}))}}]),e}(),dt=new WeakMap;function ft(e){return e instanceof N?new N(e):"object"==typeof e?Object.fromEntries(Object.entries(e).map((function(e){var t=k(e);return[t[0],ft(t[1])]}))):e}function pt(e,t,n){return e instanceof N&&t instanceof N?N.blend(e,t,n):"number"==typeof e&&"number"==typeof t?(t-e)*n+e:"boolean"==typeof e&&"boolean"==typeof t?n>0?t:e:"object"==typeof e&&"object"==typeof t?Object.fromEntries(Object.keys(e).map((function(r){return[r,pt(e[r],t[r],n)]}))):ft(void 0===t?e:t)}function mt(e){return function(t){return t<=0?0:1<=t?1:e(t)}}var vt=function(){"use strict";function e(t,n,r){var i=void 0===n?1:n;u(this,e),yt.set(this,{writable:!0,value:0}),gt.set(this,{writable:!0,value:void 0}),wt.set(this,{writable:!0,value:void 0}),bt.set(this,{writable:!0,value:[]}),_t.set(this,{writable:!0,value:0}),kt.set(this,{writable:!0,value:null}),It.set(this,{writable:!0,value:!1}),St.set(this,{writable:!0,value:void 0}),Tt.set(this,{writable:!0,value:void 0}),Et.set(this,{writable:!0,value:{}}),xt.set(this,{writable:!0,value:[]}),At.set(this,{writable:!0,value:{}}),Rt.set(this,{writable:!0,value:{}}),p(this,"value",void 0),l(this,gt,i),l(this,wt,r),l(this,St,l(this,Tt,ft(t))),this.value=ft(t)}return f(e,[{key:"reset",value:function(){c(this,wt)&&c(this,wt).delete(this),l(this,It,!1),l(this,yt,0),l(this,_t,0),l(this,kt,null),this.value=ft(c(this,St))}},{key:"start",value:function(e){var t,n;return!1===e?null===(t=c(this,wt))||void 0===t||t.delete(this):null===(n=c(this,wt))||void 0===n||n.add(this),l(this,It,!0),l(this,yt,0),l(this,_t,0),l(this,kt,null),this.value=ft(c(this,St)),this}},{key:"end",value:function(){c(this,wt)&&c(this,wt).delete(this),l(this,It,!0),l(this,_t,c(this,bt).length),l(this,kt,null),this.value=ft(c(this,Tt))}},{key:"to",value:function(t,n,r){var i=void 0===n?0:n,a=void 0===r?e.linear:r,s=this;i=Math.max(i,0);var o=l(this,Tt,ft(t));return c(this,bt).push((function(){var e=s,t=ft(s.value);return function(){if(c(e,yt)<=i)return e.value=pt(t,o,a(c(e,yt)/i)),!0;l(e,yt,c(e,yt)-i),e.value=ft(o)}})),this}},{key:"wait",value:function(e){var t=this;return e=Math.max(e,0),c(this,bt).push((function(){return function(){if(c(t,yt)<=e)return!0;l(t,yt,c(t,yt)-e)}})),this}},{key:"on",value:function(e){var t=this;return c(this,bt).push((function(){var n=t,r=c(t,yt);return function(){return l(n,yt,r),!1===e()}})),this}},{key:"loopStart",value:function(e,t){var n=void 0===e?1/0:e,r=this,i=this,a="number"==typeof n?function(e){return e<n}:n;c(this,bt).push((function(){return function(){c(r,Et)[s]=0,t&&(c(r,Rt)[t]=0)}}));var s=c(this,bt).length;return c(this,xt).push(s),c(this,Et)[s]=0,c(this,bt).push((function(){return function(){var e=c(i,Et)[s];t&&(c(i,Rt)[t]=e),a(e)||(l(i,_t,c(i,At)[s]),l(i,kt,null))}})),this}},{key:"loopEnd",value:function(){var e=this,t=c(this,bt).length,n=c(this,xt).pop();if(void 0===n)throw Error("no corresponding loopStart()");return c(this,At)[n]=t,c(this,bt).push((function(){return function(){c(e,Et)[n]++,l(e,_t,n-1),l(e,kt,null)}})),this}},{key:"update",value:function(e){if(e=null!=e?e:"function"==typeof c(this,gt)?c(this,gt).call(this):c(this,gt),this.running){l(this,yt,c(this,yt)+Math.max(0,e));do{if(c(this,kt)||l(this,kt,c(this,bt)[c(this,_t)]()),c(this,kt).call(this))break;l(this,kt,null),l(this,_t,1+ +c(this,_t))}while(this.running)}return this}},{key:"done",get:function(){return c(this,_t)>=c(this,bt).length}},{key:"started",get:function(){return c(this,It)}},{key:"running",get:function(){return this.started&&!this.done}},{key:"getAndSet",value:function(e){var t=this.value;return this.value=e,t}},{key:"loops",get:function(){return c(this,Rt)}}]),e}();p(vt,"linear",mt((function(e){return e}))),p(vt,"inSine",mt((function(e){return 1-Math.cos(e*(Math.PI/2))}))),p(vt,"outSine",mt((function(e){return Math.sin(e*(Math.PI/2))}))),p(vt,"inOutSine",mt((function(e){return e<.5?.5*vt.inSine(2*e):.5+.5*vt.outSine(2*(e-.5))}))),p(vt,"steps",(function(e){return mt((function(t){return Math.ceil(t*e)/e}))})),p(vt,"frameSteps",(function(e){return mt((function(t){return Math.floor(t*e)/(e-1)}))}));var yt=new WeakMap,gt=new WeakMap,wt=new WeakMap,bt=new WeakMap,_t=new WeakMap,kt=new WeakMap,It=new WeakMap,St=new WeakMap,Tt=new WeakMap,Et=new WeakMap,xt=new WeakMap,At=new WeakMap,Rt=new WeakMap,Ot=function(){"use strict";function e(t){var n=this;u(this,e),Pt.set(this,{writable:!0,value:void 0}),Mt.set(this,{writable:!0,value:void 0}),Lt.set(this,{writable:!0,value:new Set}),l(this,Pt,t),l(this,Mt,(function(){return c(n,Pt).frameTime}))}return f(e,[{key:"update",value:function(){var e=!0,t=!1,n=void 0;try{for(var r,i=c(this,Lt)[Symbol.iterator]();!(e=(r=i.next()).done);e=!0){var a=r.value;a.update(),a.done&&c(this,Lt).delete(a)}}catch(e){t=!0,n=e}finally{try{e||null==i.return||i.return()}finally{if(t)throw n}}}},{key:"from",value:function(e){return new vt(e,c(this,Mt),c(this,Lt))}},{key:"clear",value:function(){c(this,Lt).clear()}}]),e}(),Pt=new WeakMap,Mt=new WeakMap,Lt=new WeakMap;
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
const Nt=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},Ct={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const i=e[t],a=t+1<e.length,s=a?e[t+1]:0,o=t+2<e.length,u=o?e[t+2]:0,c=i>>2,l=(3&i)<<4|s>>4;let h=(15&s)<<2|u>>6,d=63&u;o||(d=64,a||(h=64)),r.push(n[c],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Nt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){const a=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{const a=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&a)<<6|63&s)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const i=n[e.charAt(t++)],a=t<e.length?n[e.charAt(t)]:0;++t;const s=t<e.length?n[e.charAt(t)]:64;++t;const o=t<e.length?n[e.charAt(t)]:64;if(++t,null==i||null==a||null==s||null==o)throw Error();const u=i<<2|a>>4;if(r.push(u),64!==s){const e=a<<4&240|s>>2;if(r.push(e),64!==o){const e=s<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},Dt=function(e){try{return Ct.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
class Ut{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
function Ft(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function Vt(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}function jt(){return"object"==typeof indexedDB}function Bt(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}function Wt(){return!("undefined"==typeof navigator||!navigator.cookieEnabled)}class qt extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$t.prototype.create)}}class $t{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],a=i?function(e,t){return e.replace(Ht,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",s=`${this.serviceName}: ${a} (${r}).`;return new qt(r,s,n)}}const Ht=/\{\$([^}]+)}/g;
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
 */function zt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],a=t[i];if(Gt(n)&&Gt(a)){if(!zt(n,a))return!1}else if(n!==a)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function Gt(e){return null!==e&&"object"==typeof e}
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
 */function Kt(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Yt(e){const t={};return e.replace(/^\?/,"").split("&").forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function Jt(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */class Xt{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Zt),void 0===r.error&&(r.error=Zt),void 0===r.complete&&(r.complete=Zt);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Zt(){}
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
 */function Qt(e,t=1e3,n=2){const r=t*Math.pow(n,e),i=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
function en(e){return e&&e._delegate?e._delegate:e}class tn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */const nn="[DEFAULT]";
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
 */class rn{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Ut;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if("EAGER"===e.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:nn})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===nn?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:nn:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}
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
class an{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new rn(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
 */const sn=[];var on,un;(un=on||(on={}))[un.DEBUG=0]="DEBUG",un[un.VERBOSE=1]="VERBOSE",un[un.INFO=2]="INFO",un[un.WARN=3]="WARN",un[un.ERROR=4]="ERROR",un[un.SILENT=5]="SILENT";const cn={debug:on.DEBUG,verbose:on.VERBOSE,info:on.INFO,warn:on.WARN,error:on.ERROR,silent:on.SILENT},ln=on.INFO,hn={[on.DEBUG]:"log",[on.VERBOSE]:"log",[on.INFO]:"info",[on.WARN]:"warn",[on.ERROR]:"error"},dn=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=hn[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class fn{constructor(e){this.name=e,this._logLevel=ln,this._logHandler=dn,this._userLogHandler=null,sn.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in on))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?cn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,on.DEBUG,...e),this._logHandler(this,on.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,on.VERBOSE,...e),this._logHandler(this,on.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,on.INFO,...e),this._logHandler(this,on.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,on.WARN,...e),this._logHandler(this,on.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,on.ERROR,...e),this._logHandler(this,on.ERROR,...e)}}
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
class pn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const mn="@firebase/app",vn="0.7.10",yn=new fn("@firebase/app"),gn="[DEFAULT]",wn={[mn]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},bn=new Map,_n=new Map;function kn(e,t){try{e.container.addComponent(t)}catch(n){yn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function In(e){const t=e.name;if(_n.has(t))return yn.debug(`There were multiple attempts to register component ${t}.`),!1;_n.set(t,e);for(const t of bn.values())kn(t,e);return!0}function Sn(e,t){return e.container.getProvider(t)}
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
const Tn=new $t("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class En{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new tn("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}
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
 */const xn="9.6.0";function An(e="[DEFAULT]"){const t=bn.get(e);if(!t)throw Tn.create("no-app",{appName:e});return t}function Rn(e,t,n){var r;let i=null!==(r=wn[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const a=i.match(/\s|\//),s=t.match(/\s|\//);if(a||s){const e=[`Unable to register library "${i}" with version "${t}":`];return a&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void yn.warn(e.join(" "))}In(new tn(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
var On;On="",In(new tn("platform-logger",(e=>new pn(e)),"PRIVATE")),Rn(mn,vn,On),Rn(mn,vn,"esm2017"),Rn("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Rn("firebase","9.6.0","app");var Pn={};!function(e,t){"object"==typeof Pn?t(Pn):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).idb={})}(Pn,(function(e){"use strict";function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,a=new Promise((function(a,s){n(i=e[t].apply(e,r)).then(a,s)}));return a.request=i,a}function i(e,t,n){var i=r(e,t,n);return i.then((function(e){if(e)return new l(e,i.request)}))}function a(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function s(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function o(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function u(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function c(e){this._index=e}function l(e,t){this._cursor=e,this._request=t}function h(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function f(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function p(e){this._db=e}a(c,"_index",["name","keyPath","multiEntry","unique"]),s(c,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),u(c,"_index",IDBIndex,["openCursor","openKeyCursor"]),a(l,"_cursor",["direction","key","primaryKey","value"]),s(l,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(l.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new l(e,t._request)}))}))})})),h.prototype.createIndex=function(){return new c(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new c(this._store.index.apply(this._store,arguments))},a(h,"_store",["name","keyPath","indexNames","autoIncrement"]),s(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),u(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),o(h,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},a(d,"_tx",["objectStoreNames","mode"]),o(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},a(f,"_db",["name","version","objectStoreNames"]),o(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},a(p,"_db",["name","version","objectStoreNames"]),o(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[h,c].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,a=i[e].apply(i,n.slice(0,-1));a.onsuccess=function(){r(a.result)}})}))})),[c,h].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=function(e,t,n){var i=r(indexedDB,"open",[e,t]),a=i.request;return a&&(a.onupgradeneeded=function(e){n&&n(new f(a.result,e.oldVersion,a.transaction))}),i.then((function(e){return new p(e)}))},e.deleteDb=function(e){return r(indexedDB,"deleteDatabase",[e])},Object.defineProperty(e,"__esModule",{value:!0})}));const Mn="@firebase/installations",Ln="0.5.4",Nn=1e4,Cn="w:0.5.4",Dn="FIS_v2",Un=36e5,Fn=new $t("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Vn(e){return e instanceof qt&&e.code.includes("request-failed")}
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
 */function jn({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function Bn(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function Wn(e,t){const n=(await t.json()).error;return Fn.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function qn({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function $n(e,{refreshToken:t}){const n=qn(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
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
 */(t)),n}async function Hn(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
 */function zn(e){return new Promise((t=>{setTimeout(t,e)}))}
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
const Gn=/^[cdef][\w-]{21}$/;function Kn(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
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
 */(e);return Gn.test(t)?t:""}catch(e){return""}}function Yn(e){return`${e.appName}!${e.appId}`}
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
 */const Jn=new Map;function Xn(e,t){const n=Yn(e);Zn(n,t),function(e,t){const n=er();n&&n.postMessage({key:e,fid:t});tr()}(n,t)}function Zn(e,t){const n=Jn.get(e);if(n)for(const e of n)e(t)}let Qn=null;function er(){return!Qn&&"BroadcastChannel"in self&&(Qn=new BroadcastChannel("[Firebase] FID Change"),Qn.onmessage=e=>{Zn(e.data.key,e.data.fid)}),Qn}function tr(){0===Jn.size&&Qn&&(Qn.close(),Qn=null)}
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
 */const nr="firebase-installations-store";let rr=null;function ir(){return rr||(rr=Pn.openDb("firebase-installations-database",1,(e=>{if(0===e.oldVersion)e.createObjectStore(nr)}))),rr}async function ar(e,t){const n=Yn(e),r=(await ir()).transaction(nr,"readwrite"),i=r.objectStore(nr),a=await i.get(n);return await i.put(t,n),await r.complete,a&&a.fid===t.fid||Xn(e,t.fid),t}async function sr(e){const t=Yn(e),n=(await ir()).transaction(nr,"readwrite");await n.objectStore(nr).delete(t),await n.complete}async function or(e,t){const n=Yn(e),r=(await ir()).transaction(nr,"readwrite"),i=r.objectStore(nr),a=await i.get(n),s=t(a);return void 0===s?await i.delete(n):await i.put(s,n),await r.complete,!s||a&&a.fid===s.fid||Xn(e,s.fid),s}
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
 */async function ur(e){let t;const n=await or(e,(n=>{const r=function(e){return hr(e||{fid:Kn(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Fn.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function(e,{fid:t}){const n=jn(e),r=qn(e),i={fid:t,authVersion:Dn,appId:e.appId,sdkVersion:Cn},a={method:"POST",headers:r,body:JSON.stringify(i)},s=await Hn((()=>fetch(n,a)));if(s.ok){const e=await s.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:Bn(e.authToken)}}throw await Wn("Create Installation",s)}(e,t);return ar(e,n)}catch(n){throw Vn(n)&&409===n.customData.serverCode?await sr(e):await ar(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:cr(e)}:{installationEntry:t}}(e,r);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function cr(e){let t=await lr(e);for(;1===t.registrationStatus;)await zn(100),t=await lr(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await ur(e);return n||t}return t}function lr(e){return or(e,(e=>{if(!e)throw Fn.create("installation-not-found");return hr(e)}))}function hr(e){return 1===(t=e).registrationStatus&&t.registrationTime+Nn<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
 */}async function dr({appConfig:e,platformLoggerProvider:t},n){const r=function(e,{fid:t}){return`${jn(e)}/${t}/authTokens:generate`}
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
 */(e,n),i=$n(e,n),a=t.getImmediate({optional:!0});a&&i.append("x-firebase-client",a.getPlatformInfoString());const s={installation:{sdkVersion:Cn}},o={method:"POST",headers:i,body:JSON.stringify(s)},u=await Hn((()=>fetch(r,o)));if(u.ok){return Bn(await u.json())}throw await Wn("Generate Auth Token",u)}async function fr(e,t=!1){let n;const r=await or(e.appConfig,(r=>{if(!mr(r))throw Fn.create("not-registered");const i=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Un}(e)}(i))return r;if(1===i.requestStatus)return n=async function(e,t){let n=await pr(e.appConfig);for(;1===n.authToken.requestStatus;)await zn(100),n=await pr(e.appConfig);const r=n.authToken;return 0===r.requestStatus?fr(e,t):r}(e,t),r;{if(!navigator.onLine)throw Fn.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await dr(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await ar(e.appConfig,r),n}catch(n){if(!Vn(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await ar(e.appConfig,n)}else await sr(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function pr(e){return or(e,(e=>{if(!mr(e))throw Fn.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+Nn<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
 */}))}function mr(e){return void 0!==e&&2===e.registrationStatus}
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
async function vr(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await ur(e);t&&await t}
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
 */(n.appConfig);return(await fr(n,t)).token}function yr(e){return Fn.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr="installations",wr=e=>{const t=Sn(e.getProvider("app").getImmediate(),gr).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await ur(t.appConfig);return r?r.catch(console.error):fr(t).catch(console.error),n.fid}(t),getToken:e=>vr(t,e)}};In(new tn(gr,(e=>{const t=e.getProvider("app").getImmediate(),n=
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
function(e){if(!e||!e.options)throw yr("App Configuration");if(!e.name)throw yr("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw yr(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,platformLoggerProvider:Sn(t,"platform-logger"),_delete:()=>Promise.resolve()}}),"PUBLIC")),In(new tn("installations-internal",wr,"PRIVATE")),Rn(Mn,Ln),Rn(Mn,Ln,"esm2017");
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
const br="analytics",_r="https://www.googletagmanager.com/gtag/js",kr=new fn("@firebase/analytics");
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
function Ir(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Sr(e,t,n,r){return async function(i,a,s){try{"event"===i?await async function(e,t,n,r,i){try{let a=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const r=await Ir(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){a=[];break}a.push(i)}}0===a.length&&(a=Object.values(t)),await Promise.all(a),e("event",r,i||{})}catch(e){kr.error(e)}}(e,t,n,a,s):"config"===i?await async function(e,t,n,r,i,a){const s=r[i];try{if(s)await t[s];else{const e=(await Ir(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(e){kr.error(e)}e("config",i,a)}(e,t,n,r,a,s):e("set",a)}catch(e){kr.error(e)}}}
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
const Tr=new $t("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const Er=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function xr(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ar(e,t=Er,n){const{appId:r,apiKey:i,measurementId:a}=e.options;if(!r)throw Tr.create("no-app-id");if(!i){if(a)return{measurementId:a,appId:r};throw Tr.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new Or;return setTimeout((async()=>{o.abort()}),void 0!==n?n:6e4),Rr({appId:r,apiKey:i,measurementId:a},s,o,t)}async function Rr(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Er){const{appId:a,measurementId:s}=e;try{await function(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),a=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(a),r(Tr.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(e){if(s)return kr.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:a,measurementId:s};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:xr(r)},a="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),s=await fetch(a,i);if(200!==s.status&&304!==s.status){let e="";try{const n=await s.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw Tr.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}(e);return i.deleteThrottleMetadata(a),t}catch(t){if(!function(e){if(!(e instanceof qt&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(i.deleteThrottleMetadata(a),s)return kr.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:a,measurementId:s};throw t}const o=503===Number(t.customData.httpStatus)?Qt(n,i.intervalMillis,30):Qt(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+o,backoffCount:n+1};return i.setThrottleMetadata(a,u),kr.debug(`Calling attemptFetch again in ${o} millis`),Rr(e,u,r,i)}}class Or{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pr(e,t,n,r,i,a,s){var o;const u=Ar(e);u.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&kr.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>kr.error(e))),t.push(u);const c=async function(){if(!jt())return kr.warn(Tr.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await Bt()}catch(e){return kr.warn(Tr.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}().then((e=>e?r.getId():void 0)),[l,h]=await Promise.all([u,c]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(_r))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${_r}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(a,l.measurementId),i("js",new Date);const d=null!==(o=null==s?void 0:s.config)&&void 0!==o?o:{};return d.origin="firebase",d.update=!0,null!=h&&(d.firebase_id=h),i("config",l.measurementId,d),l.measurementId}
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
 */class Mr{constructor(e){this.app=e}_delete(){return delete Lr[this.app.options.appId],Promise.resolve()}}let Lr={},Nr=[];const Cr={};let Dr,Ur,Fr="dataLayer",Vr="gtag",jr=!1;function Br(e,t,n){!function(){const e=[];if(Vt()&&e.push("This is a browser extension environment."),Wt()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Tr.create("invalid-analytics-context",{errorInfo:t});kr.warn(n.message)}}();const r=e.options.appId;if(!r)throw Tr.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Tr.create("no-api-key");kr.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Lr[r])throw Tr.create("already-exists",{id:r});if(!jr){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Fr);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,i){let a=function(...e){window[r].push(arguments)};return window[i]&&"function"==typeof window[i]&&(a=window[i]),window[i]=Sr(a,e,t,n),{gtagCore:a,wrappedGtag:window[i]}}(Lr,Nr,Cr,Fr,Vr);Ur=e,Dr=t,jr=!0}Lr[r]=Pr(e,Nr,Cr,t,Dr,Fr,n);return new Mr(e)}
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
 */function Wr(e,t,n,r){e=en(e),async function(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:i}))}}(Ur,Lr[e.app.options.appId],t,n,r).catch((e=>kr.error(e)))}const qr="@firebase/analytics",$r="0.7.4";In(new tn(br,((e,{options:t})=>Br(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),In(new tn("analytics-internal",(function(e){try{const t=e.getProvider(br).getImmediate();return{logEvent:(e,n,r)=>Wr(t,e,n,r)}}catch(e){throw Tr.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Rn(qr,$r),Rn(qr,$r,"esm2017");var Hr,zr=new T({fps:60}),Gr=new z({width:160,height:240,el:"#app"}),Kr=new Oe,Yr=new Le(Gr),Jr={left:new Ve(["ArrowLeft","a"]),right:new Ve(["ArrowRight","d"]),up:new Ve(["ArrowUp","w"]),down:new Ve(["ArrowDown","s"]),fire:new Ve([" ","z",".","Control"]),reset:new Ve(["Enter","Escape"])},Xr=new Ye(Gr),Zr=[Jr.up,Jr.right,Jr.down,Jr.left],Qr=[Jr.fire,Xr],ei=I(Zr).concat(I(Qr)),ti=I(Zr).concat(I(Qr)),ni=new Ot(zr),ri={bg:new ct,effectBack:new ct,enemyNotice:new ct,player:new ct,playerBullet:new ct,effectOverPlayer:new ct,enemy:new ct,enemyBullet:new ct,effectOverEnemy:new ct,ui:new ct},ii=new ht;a.register("5eDWT",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=t),t}})),Hr=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("eTB8B");var ai,si=W.loadMap(new URL(Hr),{bg:[1,1,32,32,0,16],buttonLight:[1,34,34,34],buttonMute:{0:[36,34,34,34],1:[70,34,34,34]},buttonReset:[1,69,34,34],buttonTwitter:[1,104,34,34],card:{top:[34,1,144,4],body:[34,5,144,2],bottom:[34,7,144,4]},enemyBulletLargeTake:[34,12,14,13,7,5],enemyBulletLarge:{0:[49,12,16,15,8,6],1:[65,12,16,15,8,6]},enemyBulletTake:[34,26,8,7,4,3],enemyBullet:{0:[82,12,10,9,5,4],1:[92,12,10,9,5,4]},enemyLargeTake:[179,1,32,31,16,12],enemyLarge:{body:[36,69,34,33,17,13],bodyFlash:[36,103,34,33,17,13],gauge:[74,73,26,24,13,9],gaugeFlash:[74,107,26,24,13,9]},enemyNoticeLarge:[82,22,12,11,6,5.5],enemyNotice:[103,12,8,7,4,3.5],enemyTakeChip:[103,20,8,8,4,4],enemyTake:[112,12,16,15,8,6],enemy:{body:[36,138,18,17,9,7],bodyFlash:[36,156,18,17,9,7],gauge:[57,141,12,10,6,4],gaugeFlash:[57,159,12,10,6,4]},finish:[212,1,56,12],fontRate:{normal:{0:[269,1,5,7],1:[275,1,5,7],2:[281,1,5,7],3:[287,1,5,7],4:[293,1,5,7],5:[299,1,5,7],6:[305,1,5,7],7:[311,1,5,7],8:[317,1,5,7],9:[323,1,5,7],"*":[329,1,5,7],"+":[335,1,5,7]},flash:{0:[269,9,5,7],1:[275,9,5,7],2:[281,9,5,7],3:[287,9,5,7],4:[293,9,5,7],5:[299,9,5,7],6:[305,9,5,7],7:[311,9,5,7],8:[317,9,5,7],9:[323,9,5,7],"*":[329,9,5,7],"+":[335,9,5,7]}},fontUiL:{0:[341,1,8,9],1:[350,1,8,9],2:[359,1,8,9],3:[368,1,8,9],4:[377,1,8,9],5:[386,1,8,9],6:[395,1,8,9],7:[404,1,8,9],8:[413,1,8,9],9:[422,1,8,9],t:[431,1,8,9]},fontUiS:{0:[341,11,3,5],1:[345,11,3,5],2:[349,11,3,5],3:[353,11,3,5],4:[357,11,3,5],5:[361,11,3,5],6:[365,11,3,5],7:[369,11,3,5],8:[373,11,3,5],9:[377,11,3,5],A:[381,11,3,5],E:[385,11,3,5],I:[389,11,3,5],L:[393,11,3,5],P:[397,11,3,5],R:[401,11,3,5],S:[405,11,3,5],T:[409,11,3,5],U:[413,11,3,5],Y:[417,11,3,5],".":[421,11,3,5],"/":[425,11,3,5]},fontUi:{0:[341,17,5,7],1:[347,17,5,7],2:[353,17,5,7],3:[359,17,5,7],4:[365,17,5,7],5:[371,17,5,7],6:[377,17,5,7],7:[383,17,5,7],8:[389,17,5,7],9:[395,17,5,7],y:[401,17,7,7],h:[409,17,7,7],".":[417,17,1,7],",":[419,17,1,8]},newRecord:{normal:[105,34,94,12],flash:[105,46,94,12]},playerBulletHit:[129,12,8,8,4,4],playerBullet:[129,21,8,8,4,4],playerDestroyChip:[138,12,8,7,4,3],playerDestroy:[440,1,16,24,8,18],player:{normal:[1,139,18,26,9,19],flash:[1,165,18,26,9,19]},pressAnyButton:[105,59,89,9],replayLoading:[200,34,90,10],replayNow:[212,14,40,7],replayReady:[291,34,97,10],scoreBg:[105,69,130,12],start:[269,17,46,12],success:{normal:[105,82,88,44,44,22],flash:[105,126,88,44,44,22]},tips:{0:[194,82,108,39],1:[389,34,99,25],2:[303,108,76,25],3:[395,82,110,40],4:[395,123,87,40],5:[105,171,114,25],6:[220,171,114,25],7:[105,197,94,40],8:[200,197,107,40],9:[303,134,83,25],10:[194,122,82,26],11:[303,82,91,25],arrow:[147,12,17,6],heart:[147,19,10,9],million:[457,1,53,8],score:[95,22,7,7],user:[158,19,12,12]},titleLogoIcon:[1,192,30,45],titleLogo:{normal:[308,197,129,14],normalFlash:[308,211,129,14],ex:[308,197,150,14],exFlash:[308,211,150,14]},uiStatusReset:[36,175,47,25]});ai=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("aMV2A");var oi;oi=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("aIeDX");var ui;ui=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("jzkA8");var ci;ci=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("6uV70");var li;li=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("eMTjg");var hi;hi=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("akrbZ");var di;di=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("kNbWg");var fi;fi=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("8cvlD");var pi;pi=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("f1UVR");var mi;mi=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("KfNtP");var vi;vi=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("b5Tfb");var yi;yi=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("33mfn");var gi;gi=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("9WYf8");var wi,bi={uiButton:new Ae(new URL(ai),.5,.04),titleStart:new Ae(new URL(oi),.8),titleModeChange:new Ae(new URL(ui),.4),playerFire:new Ae(new URL(ci),.4,.02),playerHit:new Ae(new URL(li),1),enemyShow:new Ae(new URL(hi),1,.04),enemyHit:new Ae(new URL(di),.5,.04),enemyFire:new Ae(new URL(fi),.6,.02),enemyFireLarge:new Ae(new URL(pi),.9,.04),enemyTake:new Ae(new URL(mi),.45,.02),enemyTakeLarge:new Ae(new URL(vi),.6,.04),resultCounting:new Ae(new URL(yi),.5,.02),resultSuccess:new Ae(new URL(gi),1)};wi=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("a5LcI");var _i;_i=a("5eDWT").getBundleURL("6iZMW")+a("iiiWY").resolve("2lEye");var ki={play:new Re(new URL(wi)),result:new Re(new URL(_i),.9)},Ii={mode:"normal",screenTop:0,isFirstEnemy:!1,enemyWaveId:0,playerPos:{x:0,y:0},isSuccess:!1,heart:0,heartRate:0,deathCount:0,addHeart:function(e){this.heart+=this.getHeartRate()*e},getHeartRate:function(){var e=this.heartRate||1;return this.isSuccess?e:Math.min(e,16)},clearing:ni.from(0).wait(1500)},Si={white:N.parse("#ffffff"),base:N.parse("#ffffff"),main:N.parse("#f64744"),accent:N.parse("#f69c44")},Ti=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:gn,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw Tn.create("bad-app-name",{appName:String(r)});const i=bn.get(r);if(i){if(zt(e,i.options)&&zt(n,i.config))return i;throw Tn.create("duplicate-app",{appName:r})}const a=new an(r);for(const e of _n.values())a.addComponent(e);const s=new En(e,n,a);return bn.set(r,s),s}({apiKey:"AIzaSyC2zCzDFkfmx1ZHOc6v03T-oGBeS0124-4",authDomain:"fire-shooter-san.firebaseapp.com",projectId:"fire-shooter-san",storageBucket:"fire-shooter-san.appspot.com",messagingSenderId:"1003741816214",appId:"1:1003741816214:web:20da45a98b3fd18345a9b7",measurementId:"G-3Q36TCTMGF"}),Ei=Wr.bind(null,function(e=An()){const t=Sn(e=en(e),br);return t.isInitialized()?t.getImmediate():function(e,t={}){const n=Sn(e,br);if(n.isInitialized()){const e=n.getImmediate();if(zt(t,n.getOptions()))return e;throw Tr.create("already-initialized")}return n.initialize({options:t})}(e)}(Ti));function xi(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;function Ai(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ri=Ai,Oi=new $t("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),Pi=new fn("@firebase/auth");function Mi(e,...t){Pi.logLevel<=on.ERROR&&Pi.error(`Auth (9.6.0): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(e,...t){throw Di(e,...t)}function Ni(e,...t){return Di(e,...t)}function Ci(e,t,n){const r=Object.assign(Object.assign({},Ri()),{[t]:n});return new $t("auth","Firebase",r).create(t,{appName:e.name})}function Di(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Oi.create(e,...t)}function Ui(e,t,...n){if(!e)throw Di(t,...n)}function Fi(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Mi(t),new Error(t)}function Vi(e,t){e||Fi(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji=new Map;function Bi(e){Vi(e instanceof Function,"Expected a class definition");let t=ji.get(e);return t?(Vi(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,ji.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
function Wi(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function qi(){return"http:"===$i()||"https:"===$i()}function $i(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class Hi{constructor(e,t){this.shortDelay=e,this.longDelay=t,Vi(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ft())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(qi()||Vt()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zi(e,t){Vi(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void Fi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void Fi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void Fi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ki={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},Yi=new Hi(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Xi(e,t,n,r,i={}){return Zi(e,i,(()=>{let i={},a={};r&&("GET"===t?a=r:i={body:JSON.stringify(r)});const s=Kt(Object.assign({key:e.config.apiKey},a)).slice(1),o=new(Gi.headers());return o.set("Content-Type","application/json"),o.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&o.set("X-Firebase-Locale",e.languageCode),Gi.fetch()(ea(e,e.config.apiHost,n,s),Object.assign({method:t,headers:o,referrerPolicy:"no-referrer"},i))}))}async function Zi(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ki),t);try{const t=new ta(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw na(e,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const t=i.ok?a.errorMessage:a.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw na(e,"credential-already-in-use",a);if("EMAIL_EXISTS"===n)throw na(e,"email-already-in-use",a);const o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw Ci(e,o,s);Li(e,o)}}catch(t){if(t instanceof qt)throw t;Li(e,"network-request-failed")}}async function Qi(e,t,n,r,i={}){const a=await Xi(e,t,n,r,i);return"mfaPendingCredential"in a&&Li(e,"multi-factor-auth-required",{_serverResponse:a}),a}function ea(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?zi(e.config,i):`${e.config.apiScheme}://${i}`}class ta{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(Ni(this.auth,"timeout"))),Yi.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function na(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ni(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
function ra(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(e){return 1e3*Number(e)}function aa(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return Mi("JWT malformed, contained fewer than 3 sections"),null;try{const e=Dt(n);return e?JSON.parse(e):(Mi("Failed to decode base64 JWT payload"),null)}catch(e){return Mi("Caught error parsing JWT payload as JSON",e),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function sa(e,t,n=!1){if(n)return t;try{return await t}catch(t){throw t instanceof qt&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)&&e.auth.currentUser===e&&await e.auth.signOut(),t}}class oa{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ra(this.lastLoginAt),this.creationTime=ra(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function ca(e){var t;const n=e.auth,r=await e.getIdToken(),i=await sa(e,async function(e,t){return Xi(e,"POST","/v1/accounts:lookup",t)}(n,{idToken:r}));Ui(null==i?void 0:i.users.length,n,"internal-error");const a=i.users[0];e._notifyReloadListener(a);const s=(null===(t=a.providerUserInfo)||void 0===t?void 0:t.length)?a.providerUserInfo.map((e=>{var{providerId:t}=e,n=xi(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const o=(u=e.providerData,c=s,[...u.filter((e=>!c.some((t=>t.providerId===e.providerId)))),...c]);var u,c;const l=e.isAnonymous,h=!(e.email&&a.passwordHash||(null==o?void 0:o.length)),d=!!l&&h,f={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:o,metadata:new ua(a.createdAt,a.lastLoginAt),isAnonymous:d};Object.assign(e,f)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class la{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ui(e.idToken,"internal-error"),Ui(void 0!==e.idToken,"internal-error"),Ui(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):function(e){const t=aa(e);return Ui(t,"internal-error"),Ui(void 0!==t.exp,"internal-error"),Ui(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return Ui(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){const n=await Zi(e,{},(()=>{const n=Kt({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,a=ea(e,r,"/v1/token",`key=${i}`);return Gi.fetch()(a,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,a=new la;return n&&(Ui("string"==typeof n,"internal-error",{appName:e}),a.refreshToken=n),r&&(Ui("string"==typeof r,"internal-error",{appName:e}),a.accessToken=r),i&&(Ui("number"==typeof i,"internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new la,this.toJSON())}_performRefresh(){return Fi("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(e,t){Ui("string"==typeof e||void 0===e,"internal-error",{appName:t})}class da{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=xi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new oa(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new ua(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await sa(this,this.stsTokenManager.getToken(this.auth,e));return Ui(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=en(e),r=await n.getIdToken(t),i=aa(r);Ui(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const a="object"==typeof i.firebase?i.firebase:void 0,s=null==a?void 0:a.sign_in_provider;return{claims:i,token:r,authTime:ra(ia(i.auth_time)),issuedAtTime:ra(ia(i.iat)),expirationTime:ra(ia(i.exp)),signInProvider:s||null,signInSecondFactor:(null==a?void 0:a.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=en(e);await ca(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(Ui(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new da(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Ui(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await ca(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await sa(this,async function(e,t){return Xi(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,a,s,o,u,c;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(a=t.photoURL)&&void 0!==a?a:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,v=null!==(u=t.createdAt)&&void 0!==u?u:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:g,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:k}=t;Ui(g&&k,e,"internal-error");const I=la.fromJSON(this.name,k);Ui("string"==typeof g,e,"internal-error"),ha(l,e.name),ha(h,e.name),Ui("boolean"==typeof w,e,"internal-error"),Ui("boolean"==typeof b,e,"internal-error"),ha(d,e.name),ha(f,e.name),ha(p,e.name),ha(m,e.name),ha(v,e.name),ha(y,e.name);const S=new da({uid:g,auth:e,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:I,createdAt:v,lastLoginAt:y});return _&&Array.isArray(_)&&(S.providerData=_.map((e=>Object.assign({},e)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(e,t,n=!1){const r=new la;r.updateFromServerResponse(t);const i=new da({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await ca(i),i}}
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
 */class fa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}fa.type="NONE";const pa=fa;
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
 */function ma(e,t,n){return`firebase:${e}:${t}:${n}`}class va{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ma(this.userKey,r.apiKey,i),this.fullPersistenceKey=ma("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?da._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new va(Bi(pa),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Bi(pa);const a=ma(n,e.config.apiKey,e.name);let s=null;for(const n of t)try{const t=await n._get(a);if(t){const r=da._fromJSON(e,t);n!==i&&(s=r),i=n;break}}catch(e){}const o=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&o.length?(i=o[0],s&&await i._set(a,s.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(a)}catch(e){}}))),new va(i,e,n)):new va(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(_a(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ga(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ia(t))return"Blackberry";if(Sa(t))return"Webos";if(wa(t))return"Safari";if((t.includes("chrome/")||ba(t))&&!t.includes("edge/"))return"Chrome";if(ka(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function ga(e=Ft()){return/firefox\//i.test(e)}function wa(e=Ft()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ba(e=Ft()){return/crios\//i.test(e)}function _a(e=Ft()){return/iemobile/i.test(e)}function ka(e=Ft()){return/android/i.test(e)}function Ia(e=Ft()){return/blackberry/i.test(e)}function Sa(e=Ft()){return/webos/i.test(e)}function Ta(e=Ft()){return/iphone|ipad|ipod/i.test(e)}function Ea(){return function(){const e=Ft();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function xa(e=Ft()){return Ta(e)||ka(e)||Sa(e)||Ia(e)||/windows phone/i.test(e)||_a(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Aa(e,t=[]){let n;switch(e){case"Browser":n=ya(Ft());break;case"Worker":n=`${ya(Ft())}-${e}`;break;default:n=e}return`${n}/JsCore/9.6.0/${t.length?t.join(","):"FirebaseCore-web"}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pa(this),this.idTokenSubscription=new Pa(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Oi,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Bi(t)),this._initializationPromise=this.queue((async()=>{var n,r;this._deleted||(this.persistenceManager=await va.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)))})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null==n?void 0:n._redirectEventId,a=await this.tryRedirectSignIn(e);r&&r!==i||!(null==a?void 0:a.user)||(n=a.user)}return n?n._redirectEventId?(Ui(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(e){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ca(e)}catch(e){if("auth/network-request-failed"!==e.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?en(e):null;return t&&Ui(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&Ui(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(Bi(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $t("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Bi(e)||this._popupRedirectResolver;Ui(t,this,"argument-error"),this.redirectPersistenceManager=await va.create(this,[Bi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return Ui(a,this,"internal-error"),a.then((()=>i(this.currentUser))),"function"==typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ui(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Aa(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function Oa(e){return en(e)}class Pa{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new Xt(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return Ui(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ma{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Fi("not implemented")}_getIdTokenResponse(e){return Fi("not implemented")}_linkToIdToken(e,t){return Fi("not implemented")}_getReauthenticationResolver(e){return Fi("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function La(e,t){return Xi(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Na extends Ma{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Na(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Na(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Qi(e,"POST","/v1/accounts:signInWithPassword",Ji(e,t))}(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t){return Qi(e,"POST","/v1/accounts:signInWithEmailLink",Ji(e,t))}(e,{email:this._email,oobCode:this._password});default:Li(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return La(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(e,t){return Qi(e,"POST","/v1/accounts:signInWithEmailLink",Ji(e,t))}(e,{idToken:t,email:this._email,oobCode:this._password});default:Li(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ca(e,t){return Qi(e,"POST","/v1/accounts:signInWithIdp",Ji(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da extends Ma{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Da(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Li("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=xi(t,["providerId","signInMethod"]);if(!n||!r)return null;const a=new Da(n,r);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){return Ca(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ca(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ca(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Kt(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fa extends Ma{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Fa({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Fa({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return async function(e,t){return Qi(e,"POST","/v1/accounts:signInWithPhoneNumber",Ji(e,t))}(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return async function(e,t){const n=await Qi(e,"POST","/v1/accounts:signInWithPhoneNumber",Ji(e,t));if(n.temporaryProof)throw na(e,"account-exists-with-different-credential",n);return n}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return async function(e,t){return Qi(e,"POST","/v1/accounts:signInWithPhoneNumber",Ji(e,Object.assign(Object.assign({},t),{operation:"REAUTH"})),Ua)}(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"==typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new Fa({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){var t,n,r,i,a,s;const o=Yt(Jt(e)),u=null!==(t=o.apiKey)&&void 0!==t?t:null,c=null!==(n=o.oobCode)&&void 0!==n?n:null,l=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(r=o.mode)&&void 0!==r?r:null);Ui(u&&c&&l,"argument-error"),this.apiKey=u,this.operation=l,this.code=c,this.continueUrl=null!==(i=o.continueUrl)&&void 0!==i?i:null,this.languageCode=null!==(a=o.languageCode)&&void 0!==a?a:null,this.tenantId=null!==(s=o.tenantId)&&void 0!==s?s:null}static parseLink(e){const t=function(e){const t=Yt(Jt(e)).link,n=t?Yt(Jt(t)).deep_link_id:null,r=Yt(Jt(e)).deep_link_id;return(r?Yt(Jt(r)).link:null)||r||n||t||e}(e);try{return new Va(t)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ja{constructor(){this.providerId=ja.PROVIDER_ID}static credential(e,t){return Na._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Va.parseLink(t);return Ui(n,"argument-error"),Na._fromEmailAndCode(e,n.code,n.tenantId)}}ja.PROVIDER_ID="password",ja.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ja.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ba{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class Wa extends Ba{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qa extends Wa{constructor(){super("facebook.com")}static credential(e){return Da._fromParams({providerId:qa.PROVIDER_ID,signInMethod:qa.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qa.credentialFromTaggedObject(e)}static credentialFromError(e){return qa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return qa.credential(e.oauthAccessToken)}catch(e){return null}}}qa.FACEBOOK_SIGN_IN_METHOD="facebook.com",qa.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $a extends Wa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Da._fromParams({providerId:$a.PROVIDER_ID,signInMethod:$a.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return $a.credentialFromTaggedObject(e)}static credentialFromError(e){return $a.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return $a.credential(t,n)}catch(e){return null}}}$a.GOOGLE_SIGN_IN_METHOD="google.com",$a.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ha extends Wa{constructor(){super("github.com")}static credential(e){return Da._fromParams({providerId:Ha.PROVIDER_ID,signInMethod:Ha.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ha.credentialFromTaggedObject(e)}static credentialFromError(e){return Ha.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ha.credential(e.oauthAccessToken)}catch(e){return null}}}Ha.GITHUB_SIGN_IN_METHOD="github.com",Ha.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class za extends Wa{constructor(){super("twitter.com")}static credential(e,t){return Da._fromParams({providerId:za.PROVIDER_ID,signInMethod:za.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return za.credentialFromTaggedObject(e)}static credentialFromError(e){return za.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return za.credential(t,n)}catch(e){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ga(e,t){return Qi(e,"POST","/v1/accounts:signUp",Ji(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */za.TWITTER_SIGN_IN_METHOD="twitter.com",za.PROVIDER_ID="twitter.com";class Ka{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await da._fromIdTokenResponse(e,n,r),a=Ya(n);return new Ka({user:i,providerId:a,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Ya(n);return new Ka({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Ya(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class Ja extends qt{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ja.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Ja(e,t,n,r)}}function Xa(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ja._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Za(e,t,n=!1){const r=await sa(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ka._forOperation(e,"link",r)}
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
async function Qa(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const a=await sa(e,Xa(r,i,t,e),n);Ui(a.idToken,r,"internal-error");const s=aa(a.idToken);Ui(s,r,"internal-error");const{sub:o}=s;return Ui(e.uid===o,r,"user-mismatch"),Ka._forOperation(e,i,a)}catch(e){throw"auth/user-not-found"===(null==e?void 0:e.code)&&Li(r,"user-mismatch"),e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(e,t,n=!1){const r="signIn",i=await Xa(e,r,t),a=await Ka._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(a.user),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ts(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const r=en(e),i={idToken:await r.getIdToken(),displayName:t,photoUrl:n,returnSecureToken:!0},a=await sa(r,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t){return Xi(e,"POST","/v1/accounts:update",t)}(r.auth,i));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const s=r.providerData.find((({providerId:e})=>"password"===e));s&&(s.displayName=r.displayName,s.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}new WeakMap;const ns="__sak";
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
 */class rs{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ns,"1"),this.storage.removeItem(ns),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is extends rs{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const e=Ft();return wa(e)||Ta(e)}()&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),this.fallbackToPolling=xa(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);Ea()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}is.type="LOCAL";const as=is;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss extends rs{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}ss.type="SESSION";const os=ss;
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
class us{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new us(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,a=this.handlersMap[r];if(!(null==a?void 0:a.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(a).map((async e=>e(t.origin,i))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(e){return{fulfilled:!1,reason:e}}})))}(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cs(e="",t=10){let n="";for(let e=0;e<t;e++)n+=Math.floor(10*Math.random());return e+n}
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
 */us.receivers=[];class ls{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,a;return new Promise(((s,o)=>{const u=cs("",20);r.port1.start();const c=setTimeout((()=>{o(new Error("unsupported_event"))}),n);a={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===u)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(c),clearTimeout(i),o(new Error("invalid_response"))}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[r.port2])})).finally((()=>{a&&this.removeMessageHandler(a)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(){return window}
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
function ds(){return void 0!==hs().WorkerGlobalScope&&"function"==typeof hs().importScripts}
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
const fs="firebaseLocalStorageDb",ps="firebaseLocalStorage",ms="fbase_key";class vs{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function ys(e,t){return e.transaction([ps],t?"readwrite":"readonly").objectStore(ps)}function gs(){const e=indexedDB.open(fs,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(ps,{keyPath:ms})}catch(e){n(e)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(ps)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(fs);return new vs(e).toPromise()}(),t(await gs()))}))}))}async function ws(e,t,n){const r=ys(e,!0).put({[ms]:t,value:n});return new vs(r).toPromise()}function bs(e,t){const n=ys(e,!0).delete(t);return new vs(n).toPromise()}class _s{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await gs()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(e){if(t++>3)throw e;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ds()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=us._getInstance(ds()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new ls(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gs();return await ws(e,ns,"1"),await bs(e,ns),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ws(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=ys(e,!1).get(t),r=await new vs(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>bs(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=ys(e,!1).getAll();return new vs(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const e of Object.keys(this.localCache))this.localCache[e]&&!n.has(e)&&(this.notifyListeners(e,null),t.push(e));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const e of Array.from(n))e(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}_s.type="LOCAL";const ks=_s;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(e){return new Promise(((t,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,a;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=Ni("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(a=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==a?a:document).appendChild(r)}))}function Ss(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
Ss("rcb"),new Hi(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ts="recaptcha";async function Es(e,t,n){var r;const i=await n.verify();try{let a;if(Ui("string"==typeof i,e,"argument-error"),Ui(n.type===Ts,e,"argument-error"),a="string"==typeof t?{phoneNumber:t}:t,"session"in a){const t=a.session;if("phoneNumber"in a){Ui("enroll"===t.type,e,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return Xi(e,"POST","/v2/accounts/mfaEnrollment:start",Ji(e,t))}(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:a.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{Ui("signin"===t.type,e,"internal-error");const n=(null===(r=a.multiFactorHint)||void 0===r?void 0:r.uid)||a.multiFactorUid;Ui(n,e,"missing-multi-factor-info");const s=await function(e,t){return Xi(e,"POST","/v2/accounts/mfaSignIn:start",Ji(e,t))}(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await async function(e,t){return Xi(e,"POST","/v1/accounts:sendVerificationCode",Ji(e,t))}(e,{phoneNumber:a.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xs{constructor(e){this.providerId=xs.PROVIDER_ID,this.auth=Oa(e)}verifyPhoneNumber(e,t){return Es(this.auth,e,en(t))}static credential(e,t){return Fa._fromVerification(e,t)}static credentialFromResult(e){const t=e;return xs.credentialFromTaggedObject(t)}static credentialFromError(e){return xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?Fa._fromTokenResponse(t,n):null}}
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
function As(e,t){return t?Bi(t):(Ui(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */xs.PROVIDER_ID="phone",xs.PHONE_SIGN_IN_METHOD="phone";class Rs extends Ma{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ca(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ca(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ca(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Os(e){return es(e.auth,new Rs(e),e.bypassAuthState)}function Ps(e){const{auth:t,user:n}=e;return Ui(n,t,"internal-error"),Qa(n,new Rs(e),e.bypassAuthState)}async function Ms(e){const{auth:t,user:n}=e;return Ui(n,t,"internal-error"),Za(n,new Rs(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(e){this.reject(e)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:a,type:s}=e;if(a)return void this.reject(a);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(o))}catch(e){this.reject(e)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Os;case"linkViaPopup":case"linkViaRedirect":return Ms;case"reauthViaPopup":case"reauthViaRedirect":return Ps;default:Li(this.auth,"internal-error")}}resolve(e){Vi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vi(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=new Hi(2e3,1e4);class Cs extends Ls{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Cs.currentPopupAction&&Cs.currentPopupAction.cancel(),Cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ui(e,this.auth,"internal-error"),e}async onExecution(){Vi(1===this.filter.length,"Popup operations only handle one event");const e=cs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(Ni(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(Ni(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(Ni(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Ns.get())};e()}}Cs.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ds=new Map;class Us extends Ls{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Ds.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=Vs(t),r=Fs(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}Ds.set(this.auth._key(),e)}return this.bypassAuthState||Ds.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function Fs(e){return Bi(e._redirectPersistence)}function Vs(e){return ma("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function js(e,t,n=!1){const r=Oa(e),i=As(r,t),a=new Us(r,i,n),s=await a.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}class Bs{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qs(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!qs(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(Ni(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ws(e))}saveEventToCache(e){this.cachedEventUids.add(Ws(e)),this.lastProcessedEventTime=Date.now()}}function Ws(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function qs({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $s=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Hs=/^https?/;async function zs(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Xi(e,"GET","/v1/projects",t)}(e);for(const e of t)try{if(Gs(e))return}catch(e){}Li(e,"unauthorized-domain")}function Gs(e){const t=Wi(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Hs.test(n))return!1;if($s.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
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
 */const Ks=new Hi(3e4,6e4);function Ys(){const e=hs().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let t=0;t<e.CP.length;t++)e.CP[t]=null}let Js=null;function Xs(e){return Js=Js||function(e){return new Promise(((t,n)=>{var r,i,a;function s(){Ys(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ys(),n(Ni(e,"network-request-failed"))},timeout:Ks.get()})}if(null===(i=null===(r=hs().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=hs().gapi)||void 0===a?void 0:a.load)){const t=Ss("iframefcb");return hs()[t]=()=>{gapi.load?s():n(Ni(e,"network-request-failed"))},Is(`https://apis.google.com/js/api.js?onload=${t}`)}s()}})).catch((e=>{throw Js=null,e}))}(e),Js}
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
 */const Zs=new Hi(5e3,15e3),Qs={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eo=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function to(e){const t=e.config;Ui(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?zi(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:xn},i=eo.get(e.config.apiHost);i&&(r.eid=i);const a=e._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Kt(r).slice(1)}`}
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
const no={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class ro{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function io(e,t,n,r=500,i=600){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const u=Object.assign(Object.assign({},no),{width:r.toString(),height:i.toString(),top:a,left:s}),c=Ft().toLowerCase();n&&(o=ba(c)?"_blank":n),ga(c)&&(t=t||"http://localhost",u.scrollbars="yes");const l=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=Ft()){var t;return Ta(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(c)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */(t||"",o),new ro(null);const h=window.open(t||"",o,l);Ui(h,e,"popup-blocked");try{h.focus()}catch(e){}return new ro(h)}const ao="emulator/auth/handler";function so(e,t,n,r,i,a){Ui(e.config.authDomain,e,"auth-domain-config-required"),Ui(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:xn,eventId:i};if(t instanceof Ba){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))s[e]=t}if(t instanceof Wa){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(s.scopes=e.join(","))}e.tenantId&&(s.tid=e.tenantId);const o=s;for(const e of Object.keys(o))void 0===o[e]&&delete o[e];return`${function({config:e}){return e.emulator?zi(e,ao):`https://${e.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Kt(o).slice(1)}`}const oo="webStorageSupport";const uo=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=os,this._completeRedirectFn=js}async _openPopup(e,t,n,r){var i;Vi(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return io(e,so(e,t,n,Wi(),r),cs())}async _openRedirect(e,t,n,r){var i;return await this._originValidation(e),i=so(e,t,n,Wi(),r),hs().location.href=i,new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(Vi(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await async function(e){const t=await Xs(e),n=hs().gapi;return Ui(n,e,"internal-error"),t.open({where:document.body,url:to(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Qs,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=Ni(e,"network-request-failed"),a=hs().setTimeout((()=>{r(i)}),Zs.get());function s(){hs().clearTimeout(a),n(t)}t.ping(s).then(s,(()=>{r(i)}))}))))}(e),n=new Bs(e);return t.register("authEvent",(t=>{Ui(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(oo,{type:oo},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&t(!!i),Li(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=zs(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xa()||wa()||Ta()}};var co,lo="@firebase/auth",ho="0.19.3";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fo{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ui(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */co="Browser",In(new tn("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),{apiKey:r,authDomain:i}=n.options;return(e=>{Ui(r&&!r.includes(":"),"invalid-api-key",{appName:e.name}),Ui(!(null==i?void 0:i.includes(":")),"argument-error",{appName:e.name});const n={apiKey:r,authDomain:i,clientPlatform:co,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Aa(co)},a=new Ra(e,n);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Bi);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(a,t),a})(n)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),In(new tn("auth-internal",(e=>{const t=Oa(e.getProvider("auth").getImmediate());return new fo(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(lo,ho,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(co)),Rn(lo,ho,"esm2017");var po=
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
function(e=An()){const t=Sn(e,"auth");return t.isInitialized()?t.getImmediate():function(e,t){const n=Sn(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(zt(n.getOptions(),null!=t?t:{}))return e;Li(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:uo,persistence:[ks,as,os]})}(Ti);function mo(e){return t=e,en(po).onAuthStateChanged(t,n,r);var t,n,r}function vo(){return po.currentUser}function yo(){var e,t;return null!==(t=null===(e=vo())||void 0===e?void 0:e.uid)&&void 0!==t?t:""}function go(){var e,t;return null!==(t=null===(e=vo())||void 0===e?void 0:e.displayName)&&void 0!==t?t:""}function wo(){return(wo=o(t(Y).mark((function e(n){var r;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(r=vo())){e.next=4;break}return e.next=4,ts(r,{displayName:n});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function bo(e){return wo.apply(this,arguments)}mo((function(e){return!e&&async function(e){var t;const n=Oa(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Ka({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Ga(n,{returnSecureToken:!0}),i=await Ka._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}(po)}));
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
class _o{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}_o.UNAUTHENTICATED=new _o(null),_o.GOOGLE_CREDENTIALS=new _o("google-credentials-uid"),_o.FIRST_PARTY=new _o("first-party-uid"),_o.MOCK_USER=new _o("mock-user");
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
let ko="9.6.0";
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
 */const Io=new fn("@firebase/firestore");function So(e,...t){if(Io.logLevel<=on.DEBUG){const n=t.map(xo);Io.debug(`Firestore (${ko}): ${e}`,...n)}}function To(e,...t){if(Io.logLevel<=on.ERROR){const n=t.map(xo);Io.error(`Firestore (${ko}): ${e}`,...n)}}function Eo(e,...t){if(Io.logLevel<=on.WARN){const n=t.map(xo);Io.warn(`Firestore (${ko}): ${e}`,...n)}}function xo(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Ao(e="Unexpected state"){const t=`FIRESTORE (${ko}) INTERNAL ASSERTION FAILED: `+e;throw To(t),new Error(t)}function Ro(e,t){e||Ao()}function Oo(e,t){return e}
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
 */const Po="cancelled",Mo="unknown",Lo="invalid-argument",No="deadline-exceeded",Co="not-found",Do="permission-denied",Uo="unauthenticated",Fo="resource-exhausted",Vo="failed-precondition",jo="aborted",Bo="out-of-range",Wo="unimplemented",qo="internal",$o="unavailable";class Ho extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
class zo{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Go{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(_o.UNAUTHENTICATED)))}shutdown(){}}class Ko{constructor(e){this.auth=null,e.onInit((e=>{this.auth=e}))}getToken(){return this.auth?this.auth.getToken().then((e=>e?(Ro("string"==typeof e.accessToken),new zo(e.accessToken,new _o(this.auth.getUid()))):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class Yo{constructor(e,t,n){this.type="FirstParty",this.user=_o.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class Jo{constructor(e,t,n){this.t=e,this.i=t,this.o=n}getToken(){return Promise.resolve(new Yo(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable((()=>t(_o.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Xo{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Zo{constructor(e){this.u=e,this.appCheck=null,e.onInit((e=>{this.appCheck=e}))}getToken(){return this.appCheck?this.appCheck.getToken().then((e=>e?(Ro("string"==typeof e.token),new Xo(e.token)):null)):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}
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
 */class Qo{constructor(e,t,n,r,i,a,s,o){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=s,this.useFetchStreams=o}}class eu{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof eu&&e.projectId===this.projectId&&e.database===this.database}}
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
 */class tu{constructor(e,t,n){void 0===t?t=0:t>e.length&&Ao(),void 0===n?n=e.length-t:n>e.length-t&&Ao(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===tu.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof tu?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class nu extends tu{construct(e,t,n){return new nu(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Ho(Lo,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new nu(t)}static emptyPath(){return new nu([])}}const ru=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class iu extends tu{construct(e,t,n){return new iu(e,t,n)}static isValidIdentifier(e){return ru.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),iu.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new iu(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Ho(Lo,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let a=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Ho(Lo,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Ho(Lo,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(a=!a,r++):"."!==t||a?(n+=t,r++):(i(),r++)}if(i(),a)throw new Ho(Lo,"Unterminated ` in path: "+e);return new iu(t)}static emptyPath(){return new iu([])}}
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
 */class au{constructor(e){this.path=e}static fromPath(e){return new au(nu.fromString(e))}static fromName(e){return new au(nu.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===nu.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return nu.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new au(new nu(e.slice()))}}
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
 */function su(e,t,n){if(!n)throw new Ho(Lo,`Function ${e}() cannot be called with an empty ${t}.`)}function ou(e){if(!au.isDocumentKey(e))throw new Ho(Lo,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function uu(e){if(au.isDocumentKey(e))throw new Ho(Lo,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function cu(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":Ao()}function lu(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Ho(Lo,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=cu(e);throw new Ho(Lo,`Expected type '${t.name}', but it was: ${n}`)}}return e}function hu(e,t){if(t<=0)throw new Ho(Lo,`Function ${e}() requires a positive number, but it was: ${t}.`)}
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
 */function du(e){return null==e}function fu(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pu={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */var mu,vu;function yu(e){if(void 0===e)return To("RPC_ERROR","HTTP error has no status"),Mo;switch(e){case 200:return"ok";case 400:return Vo;case 401:return Uo;case 403:return Do;case 404:return Co;case 409:return jo;case 416:return Bo;case 429:return Fo;case 499:return Po;case 500:return Mo;case 501:return Wo;case 503:return $o;case 504:return No;default:return e>=200&&e<300?"ok":e>=400&&e<500?Vo:e>=500&&e<600?qo:Mo}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(vu=mu||(mu={}))[vu.OK=0]="OK",vu[vu.CANCELLED=1]="CANCELLED",vu[vu.UNKNOWN=2]="UNKNOWN",vu[vu.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",vu[vu.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",vu[vu.NOT_FOUND=5]="NOT_FOUND",vu[vu.ALREADY_EXISTS=6]="ALREADY_EXISTS",vu[vu.PERMISSION_DENIED=7]="PERMISSION_DENIED",vu[vu.UNAUTHENTICATED=16]="UNAUTHENTICATED",vu[vu.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",vu[vu.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",vu[vu.ABORTED=10]="ABORTED",vu[vu.OUT_OF_RANGE=11]="OUT_OF_RANGE",vu[vu.UNIMPLEMENTED=12]="UNIMPLEMENTED",vu[vu.INTERNAL=13]="INTERNAL",vu[vu.UNAVAILABLE=14]="UNAVAILABLE",vu[vu.DATA_LOSS=15]="DATA_LOSS";class gu extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.h=t+"://"+e.host,this.l="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}m(e,t,n,r,i){const a=this.p(e,t);So("RestConnection","Sending: ",a,n);const s={};return this.g(s,r,i),this.v(e,a,s,n).then((e=>(So("RestConnection","Received: ",e),e)),(t=>{throw Eo("RestConnection",`${e} failed with error: `,t,"url: ",a,"request:",n),t}))}T(e,t,n,r,i){return this.m(e,t,n,r,i)}g(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+ko,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}p(e,t){const n=pu[e];return`${this.h}/v1/${t}:${n}`}}{constructor(e,t){super(e),this.I=t}A(e,t){throw new Error("Not supported by FetchConnection")}async v(e,t,n,r){const i=JSON.stringify(r);let a;try{a=await this.I(t,{method:"POST",headers:n,body:i})}catch(e){throw new Ho(yu(e.status),"Request failed with error: "+e.statusText)}if(!a.ok)throw new Ho(yu(a.status),"Request failed with error: "+a.statusText);return a.json()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
 */function wu(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}
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
 */class bu{static P(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=wu(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function _u(e,t){return e<t?-1:e>t?1:0}function ku(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
 */class Iu{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Ho(Lo,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Ho(Lo,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Ho(Lo,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Ho(Lo,"Timestamp seconds out of range: "+e)}static now(){return Iu.fromMillis(Date.now())}static fromDate(e){return Iu.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new Iu(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_u(this.nanoseconds,e.nanoseconds):_u(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class Su{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Su(e)}static min(){return new Su(new Iu(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function Tu(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Eu(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xu{constructor(e){this.fields=e,e.sort(iu.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ku(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
 */class Au{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Au(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Au(t)}toBase64(){var e;return e=this.binaryString,btoa(e)}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _u(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Au.EMPTY_BYTE_STRING=new Au("");const Ru=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ou(e){if(Ro(!!e),"string"==typeof e){let t=0;const n=Ru.exec(e);if(Ro(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Pu(e.seconds),nanos:Pu(e.nanos)}}function Pu(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Mu(e){return"string"==typeof e?Au.fromBase64String(e):Au.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Nu(e){const t=e.mapValue.fields.__previous_value__;return Lu(t)?Nu(t):t}function Cu(e){const t=Ou(e.mapValue.fields.__local_write_time__.timestampValue);return new Iu(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Du(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Lu(e)?4:10:Ao()}function Uu(e,t){const n=Du(e);if(n!==Du(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Cu(e).isEqual(Cu(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Ou(e.timestampValue),r=Ou(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,Mu(e.bytesValue).isEqual(Mu(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Pu(e.geoPointValue.latitude)===Pu(t.geoPointValue.latitude)&&Pu(e.geoPointValue.longitude)===Pu(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Pu(e.integerValue)===Pu(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Pu(e.doubleValue),r=Pu(t.doubleValue);return n===r?fu(n)===fu(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return ku(e.arrayValue.values||[],t.arrayValue.values||[],Uu);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Tu(n)!==Tu(r))return!1;for(const e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!Uu(n[e],r[e])))return!1;return!0}(e,t);default:return Ao()}var r}function Fu(e,t){return void 0!==(e.values||[]).find((e=>Uu(e,t)))}function Vu(e,t){const n=Du(e),r=Du(t);if(n!==r)return _u(n,r);switch(n){case 0:return 0;case 1:return _u(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Pu(e.integerValue||e.doubleValue),r=Pu(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ju(e.timestampValue,t.timestampValue);case 4:return ju(Cu(e),Cu(t));case 5:return _u(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Mu(e),r=Mu(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){const t=_u(n[e],r[e]);if(0!==t)return t}return _u(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=_u(Pu(e.latitude),Pu(t.latitude));return 0!==n?n:_u(Pu(e.longitude),Pu(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){const t=Vu(n[e],r[e]);if(t)return t}return _u(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},a=Object.keys(i);r.sort(),a.sort();for(let e=0;e<r.length&&e<a.length;++e){const t=_u(r[e],a[e]);if(0!==t)return t;const s=Vu(n[r[e]],i[a[e]]);if(0!==s)return s}return _u(r.length,a.length)}(e.mapValue,t.mapValue);default:throw Ao()}}function ju(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return _u(e,t);const n=Ou(e),r=Ou(t),i=_u(n.seconds,r.seconds);return 0!==i?i:_u(n.nanos,r.nanos)}function Bu(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Wu(e){return!!e&&"arrayValue"in e}function qu(e){return!!e&&"nullValue"in e}function $u(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Hu(e){return!!e&&"mapValue"in e}function zu(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Eu(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=zu(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=zu(e.arrayValue.values[n]);return t}return Object.assign({},e)}
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
 */class Gu{constructor(e){this.value=e}static empty(){return new Gu({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Hu(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=zu(t)}setAll(e){let t=iu.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=zu(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Hu(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Uu(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Hu(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Eu(t,((t,n)=>e[t]=n));for(const t of n)delete e[t]}clone(){return new Gu(zu(this.value))}}
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
 */class Ku{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new Ku(e,0,Su.min(),Gu.empty(),0)}static newFoundDocument(e,t,n){return new Ku(e,1,t,n,0)}static newNoDocument(e,t){return new Ku(e,2,t,Gu.empty(),0)}static newUnknownDocument(e,t){return new Ku(e,3,t,Gu.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Gu.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Gu.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ku&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Ku(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Yu{constructor(e,t=null,n=[],r=[],i=null,a=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=a,this.endAt=s,this.R=null}}function Ju(e,t=null,n=[],r=[],i=null,a=null,s=null){return new Yu(e,t,n,r,i,a,s)}class Xu extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.V(e,t,n):new Zu(e,t,n):"array-contains"===t?new nc(e,n):"in"===t?new rc(e,n):"not-in"===t?new ic(e,n):"array-contains-any"===t?new ac(e,n):new Xu(e,t,n)}static V(e,t,n){return"in"===t?new Qu(e,n):new ec(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.D(Vu(t,this.value)):null!==t&&Du(this.value)===Du(t)&&this.D(Vu(t,this.value))}D(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Ao()}}N(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Zu extends Xu{constructor(e,t,n){super(e,t,n),this.key=au.fromName(n.referenceValue)}matches(e){const t=au.comparator(e.key,this.key);return this.D(t)}}class Qu extends Xu{constructor(e,t){super(e,"in",t),this.keys=tc("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class ec extends Xu{constructor(e,t){super(e,"not-in",t),this.keys=tc("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function tc(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>au.fromName(e.referenceValue)))}class nc extends Xu{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Wu(t)&&Fu(t.arrayValue,this.value)}}class rc extends Xu{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Fu(this.value.arrayValue,t)}}class ic extends Xu{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Fu(this.value.arrayValue,t)}}class ac extends Xu{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Wu(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Fu(this.value.arrayValue,e)))}}class sc{constructor(e,t){this.position=e,this.before=t}}class oc{constructor(e,t="asc"){this.field=e,this.dir=t}}
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
class uc{constructor(e,t=null,n=[],r=[],i=null,a="F",s=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=a,this.startAt=s,this.endAt=o,this.$=null,this.F=null,this.startAt,this.endAt}}function cc(e){return!du(e.limit)&&"L"===e.limitType}function lc(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function hc(e){for(const t of e.filters)if(t.N())return t.field;return null}function dc(e){return null!==e.collectionGroup}function fc(e){const t=Oo(e);if(null===t.$){t.$=[];const e=hc(t),n=lc(t);if(null!==e&&null===n)e.isKeyField()||t.$.push(new oc(e)),t.$.push(new oc(iu.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.$.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.$.push(new oc(iu.keyField(),e))}}}return t.$}function pc(e){const t=Oo(e);if(!t.F)if("F"===t.limitType)t.F=Ju(t.path,t.collectionGroup,fc(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const n of fc(t)){const t="desc"===n.dir?"asc":"desc";e.push(new oc(n.field,t))}const n=t.endAt?new sc(t.endAt.position,!t.endAt.before):null,r=t.startAt?new sc(t.startAt.position,!t.startAt.before):null;t.F=Ju(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.F}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function mc(e,t){return"number"==typeof(n=t)&&Number.isInteger(n)&&!fu(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER?function(e){return{integerValue:""+e}}(t):function(e,t){if(e.S){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fu(t)?"-0":t}}(e,t);var n}
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
 */class vc{constructor(){this._=void 0}}class yc extends vc{}class gc extends vc{constructor(e){super(),this.elements=e}}class wc extends vc{constructor(e){super(),this.elements=e}}class bc extends vc{constructor(e,t){super(),this.q=e,this.O=t}}
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
 */class _c{constructor(e,t){this.field=e,this.transform=t}}class kc{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kc}static exists(e){return new kc(void 0,e)}static updateTime(e){return new kc(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Ic{}class Sc extends Ic{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Tc extends Ic{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}class Ec extends Ic{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class xc extends Ic{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
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
 */const Ac={asc:"ASCENDING",desc:"DESCENDING"},Rc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class Oc{constructor(e,t){this.databaseId=e,this.S=t}}function Pc(e,t){return e.S?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Mc(e,t){return e.S?t.toBase64():t.toUint8Array()}function Lc(e,t){return Pc(e,t.toTimestamp())}function Nc(e){return Ro(!!e),Su.fromTimestamp(function(e){const t=Ou(e);return new Iu(t.seconds,t.nanos)}(e))}function Cc(e,t){return(n=e,new nu(["projects",n.projectId,"databases",n.database])).child("documents").child(t).canonicalString();var n}function Dc(e,t){return Cc(e.databaseId,t.path)}function Uc(e,t){const n=function(e){const t=nu.fromString(e);return Ro(zc(t)),t}(t);if(n.get(1)!==e.databaseId.projectId)throw new Ho(Lo,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Ho(Lo,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);var r;return new au((Ro((r=n).length>4&&"documents"===r.get(4)),r.popFirst(5)))}function Fc(e,t){return Cc(e.databaseId,t)}function Vc(e){return new nu(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function jc(e,t,n){return{name:Dc(e,t),fields:n.value.mapValue.fields}}function Bc(e){return{before:e.before,values:e.position}}function Wc(e){return Ac[e]}function qc(e){return Rc[e]}function $c(e){return{fieldPath:e.canonicalString()}}function Hc(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function zc(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(e){return new Oc(e,!0)}
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
class Kc extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.K=n,this.q=r,this.J=!1}X(){if(this.J)throw new Ho(Vo,"The client has already been terminated.")}m(e,t,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.K.m(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Uo&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ho(Mo,e.toString())}))}T(e,t,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.K.T(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Uo&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Ho(Mo,e.toString())}))}terminate(){this.J=!0}}async function Yc(e,t){const n=Oo(e),r=Vc(n.q)+"/documents",i={writes:t.map((e=>function(e,t){let n;if(t instanceof Sc)n={update:jc(e,t.key,t.value)};else if(t instanceof Ec)n={delete:Dc(e,t.key)};else if(t instanceof Tc)n={update:jc(e,t.key,t.data),updateMask:Hc(t.fieldMask)};else{if(!(t instanceof xc))return Ao();n={verify:Dc(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof yc)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof gc)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof wc)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof bc)return{fieldPath:t.field.canonicalString(),increment:n.O};throw Ao()}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:Lc(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:Ao())),n;var r,i}(n.q,e)))};await n.m("Commit",r,i)}async function Jc(e,t){const n=Oo(e),r=Vc(n.q)+"/documents",i={documents:t.map((e=>Dc(n.q,e)))},a=await n.T("BatchGetDocuments",r,i),s=new Map;a.forEach((e=>{const t=(r=n.q,"found"in(i=e)?function(e,t){Ro(!!t.found),t.found.name,t.found.updateTime;const n=Uc(e,t.found.name),r=Nc(t.found.updateTime),i=new Gu({mapValue:{fields:t.found.fields}});return Ku.newFoundDocument(n,r,i)}(r,i):"missing"in i?function(e,t){Ro(!!t.missing),Ro(!!t.readTime);const n=Uc(e,t.missing),r=Nc(t.readTime);return Ku.newNoDocument(n,r)}(r,i):Ao());var r,i;s.set(t.key.toString(),t)}));const o=[];return t.forEach((e=>{const t=s.get(e.toString());Ro(!!t),o.push(t)})),o}async function Xc(e,t){const n=Oo(e),r=function(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=Fc(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Fc(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if($u(e.value))return{unaryFilter:{field:$c(e.field),op:"IS_NAN"}};if(qu(e.value))return{unaryFilter:{field:$c(e.field),op:"IS_NULL"}}}else if("!="===e.op){if($u(e.value))return{unaryFilter:{field:$c(e.field),op:"IS_NOT_NAN"}};if(qu(e.value))return{unaryFilter:{field:$c(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:$c(e.field),op:qc(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const a=function(e){if(0!==e.length)return e.map((e=>{return{field:$c((t=e).field),direction:Wc(t.dir)};var t}))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const s=(o=e,u=t.limit,o.S||du(u)?u:{value:u});var o,u;return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt=Bc(t.startAt)),t.endAt&&(n.structuredQuery.endAt=Bc(t.endAt)),n}(n.q,pc(t));return(await n.T("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter((e=>!!e.document)).map((e=>function(e,t,n){const r=Uc(e,t.name),i=Nc(t.updateTime),a=new Gu({mapValue:{fields:t.fields}}),s=Ku.newFoundDocument(r,i,a);return s}(n.q,e.document)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zc=new Map;function Qc(e){if(e._terminated)throw new Ho(Vo,"The client has already been terminated.");if(!Zc.has(e)){So("ComponentProvider","Initializing Datastore");const s=(n=e._databaseId,r=e.app.options.appId||"",i=e._persistenceKey,a=e._freezeSettings(),t=new Qo(n,r,i,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams),new gu(t,fetch.bind(null))),o=Gc(e._databaseId),u=function(e,t,n,r){return new Kc(e,t,n,r)}(e._authCredentials,e._appCheckCredentials,s,o);Zc.set(e,u)}var t,n,r,i,a;
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
return Zc.get(e)}class el{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Ho(Lo,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Ho(Lo,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new Ho(Lo,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,e.experimentalForceLongPolling,0,e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new el({}),this._settingsFrozen=!1,e instanceof eu?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Ho(Lo,'"projectId" not provided in firebase.initializeApp.');return new eu(e.options.projectId)}(e))}get app(){if(!this._app)throw new Ho(Vo,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Ho(Vo,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new el(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Go;switch(e.type){case"gapi":const t=e.client;return Ro(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new Jo(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Ho(Lo,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Zc.get(e);t&&(So("ComponentProvider","Removing Datastore"),Zc.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
class nl{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new il(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nl(this.firestore,e,this._key)}}class rl{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new rl(this.firestore,e,this._query)}}class il extends rl{constructor(e,t,n){super(e,t,new uc(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nl(this.firestore,null,new au(e))}withConverter(e){return new il(this.firestore,e,this._path)}}function al(e,t,...n){if(e=en(e),su("collection","path",t),e instanceof tl){const r=nu.fromString(t,...n);return uu(r),new il(e,null,r)}{if(!(e instanceof nl||e instanceof il))throw new Ho(Lo,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(nu.fromString(t,...n));return uu(r),new il(e.firestore,null,r)}}function sl(e,t,...n){if(e=en(e),1===arguments.length&&(t=bu.P()),su("doc","path",t),e instanceof tl){const r=nu.fromString(t,...n);return ou(r),new nl(e,null,new au(r))}{if(!(e instanceof nl||e instanceof il))throw new Ho(Lo,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(nu.fromString(t,...n));return ou(r),new nl(e.firestore,e instanceof il?e.converter:null,new au(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ol{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Ho(Lo,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new iu(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ul{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ul(Au.fromBase64String(e))}catch(e){throw new Ho(Lo,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new ul(Au.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this._methodName=e}}
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
 */class ll{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Ho(Lo,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Ho(Lo,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _u(this._lat,e._lat)||_u(this._long,e._long)}}
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
 */const hl=/^__.*__$/;class dl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Tc(e,this.data,this.fieldMask,t,this.fieldTransforms):new Sc(e,this.data,t,this.fieldTransforms)}}class fl{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Tc(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function pl(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ao()}}class ml{constructor(e,t,n,r,i,a){this.settings=e,this.databaseId=t,this.q=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Z(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}nt(e){return new ml(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.q,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}et(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nt({path:n,rt:!1});return r.st(e),r}it(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.nt({path:n,rt:!1});return r.Z(),r}ot(e){return this.nt({path:void 0,rt:!0})}ut(e){return Pl(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.at)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Z(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(0===e.length)throw this.ut("Document fields must not be empty");if(pl(this.tt)&&hl.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class vl{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.q=n||Gc(e)}ht(e,t,n,r=!1){return new ml({tt:e,methodName:t,at:n,path:iu.emptyPath(),rt:!1,ct:r},this.databaseId,this.q,this.ignoreUndefinedProperties)}}function yl(e){const t=e._freezeSettings(),n=Gc(e._databaseId);return new vl(e._databaseId,!!t.ignoreUndefinedProperties,n)}function gl(e,t,n,r,i,a={}){const s=e.ht(a.merge||a.mergeFields?2:0,t,n,i);xl("Data must be an object, but it was:",s,r);const o=Tl(r,s);let u,c;if(a.merge)u=new xu(s.fieldMask),c=s.fieldTransforms;else if(a.mergeFields){const e=[];for(const r of a.mergeFields){const i=Al(t,r,n);if(!s.contains(i))throw new Ho(Lo,`Field '${i}' is specified in your field mask but missing from your input data.`);Ml(e,i)||e.push(i)}u=new xu(e),c=s.fieldTransforms.filter((e=>u.covers(e.field)))}else u=null,c=s.fieldTransforms;return new dl(new Gu(o),u,c)}class wl extends cl{_toFieldTransform(e){if(2!==e.tt)throw 1===e.tt?e.ut(`${this._methodName}() can only appear at the top level of your update data`):e.ut(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wl}}class bl extends cl{_toFieldTransform(e){return new _c(e.path,new yc)}isEqual(e){return e instanceof bl}}function _l(e,t,n,r){const i=e.ht(1,t,n);xl("Data must be an object, but it was:",i,r);const a=[],s=Gu.empty();Eu(r,((e,r)=>{const o=Ol(t,e,n);r=en(r);const u=i.it(o);if(r instanceof wl)a.push(o);else{const e=Sl(r,u);null!=e&&(a.push(o),s.set(o,e))}}));const o=new xu(a);return new fl(s,o,i.fieldTransforms)}function kl(e,t,n,r,i,a){const s=e.ht(1,t,n),o=[Al(t,r,n)],u=[i];if(a.length%2!=0)throw new Ho(Lo,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let e=0;e<a.length;e+=2)o.push(Al(t,a[e])),u.push(a[e+1]);const c=[],l=Gu.empty();for(let e=o.length-1;e>=0;--e)if(!Ml(c,o[e])){const t=o[e];let n=u[e];n=en(n);const r=s.it(t);if(n instanceof wl)c.push(t);else{const e=Sl(n,r);null!=e&&(c.push(t),l.set(t,e))}}const h=new xu(c);return new fl(l,h,s.fieldTransforms)}function Il(e,t,n,r=!1){return Sl(n,e.ht(r?4:3,t))}function Sl(e,t){if(El(e=en(e)))return xl("Unsupported field value:",t,e),Tl(e,t);if(e instanceof cl)return function(e,t){if(!pl(t.tt))throw t.ut(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ut(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.rt&&4!==t.tt)throw t.ut("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Sl(i,t.ot(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=en(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return mc(t.q,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=Iu.fromDate(e);return{timestampValue:Pc(t.q,n)}}if(e instanceof Iu){const n=new Iu(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Pc(t.q,n)}}if(e instanceof ll)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof ul)return{bytesValue:Mc(t.q,e._byteString)};if(e instanceof nl){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ut(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Cc(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ut(`Unsupported field value: ${cu(e)}`)}(e,t)}function Tl(e,t){const n={};return function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Eu(e,((e,r)=>{const i=Sl(r,t.et(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function El(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Iu||e instanceof ll||e instanceof ul||e instanceof nl||e instanceof cl)}function xl(e,t,n){if(!El(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=cu(n);throw"an object"===r?t.ut(e+" a custom object"):t.ut(e+" "+r)}var r}function Al(e,t,n){if((t=en(t))instanceof ol)return t._internalPath;if("string"==typeof t)return Ol(e,t);throw Pl("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Rl=new RegExp("[~\\*/\\[\\]]");function Ol(e,t,n){if(t.search(Rl)>=0)throw Pl(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ol(...t.split("."))._internalPath}catch(r){throw Pl(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Pl(e,t,n,r,i){const a=r&&!r.isEmpty(),s=void 0!==i;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let u="";return(a||s)&&(u+=" (found",a&&(u+=` in field ${r}`),s&&(u+=` in document ${i}`),u+=")"),new Ho(Lo,o+e+u)}function Ml(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new nl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Nl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Dl("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Nl extends Ll{data(){return super.data()}}class Cl{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(e,t){this._docs.forEach(e,t)}}function Dl(e,t){return"string"==typeof t?Ol(e,t):t instanceof ol?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{}function Fl(e,...t){for(const n of t)e=n._apply(e);return e}class Vl extends Ul{constructor(e,t,n){super(),this.dt=e,this.wt=t,this.yt=n,this.type="where"}_apply(e){const t=yl(e.firestore),n=function(e,t,n,r,i,a,s){let o;if(i.isKeyField()){if("array-contains"===a||"array-contains-any"===a)throw new Ho(Lo,`Invalid Query. You can't perform '${a}' queries on FieldPath.documentId().`);if("in"===a||"not-in"===a){zl(s,a);const t=[];for(const n of s)t.push(Hl(r,e,n));o={arrayValue:{values:t}}}else o=Hl(r,e,s)}else"in"!==a&&"not-in"!==a&&"array-contains-any"!==a||zl(s,a),o=Il(n,"where",s,"in"===a||"not-in"===a);const u=Xu.create(i,a,o);return function(e,t){if(t.N()){const n=hc(e);if(null!==n&&!n.isEqual(t.field))throw new Ho(Lo,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${t.field.toString()}'`);const r=lc(e);null!==r&&Gl(e,t.field,r)}const n=function(e,t){for(const n of e.filters)if(t.indexOf(n.op)>=0)return n.op;return null}(e,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new Ho(Lo,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new Ho(Lo,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}(e,u),u}(e._query,0,t,e.firestore._databaseId,this.dt,this.wt,this.yt);return new rl(e.firestore,e.converter,function(e,t){const n=e.filters.concat([t]);return new uc(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}(e._query,n))}}function jl(e,t,n){const r=t,i=Dl("where",e);return new Vl(i,r,n)}class Bl extends Ul{constructor(e,t){super(),this.dt=e,this._t=t,this.type="orderBy"}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new Ho(Lo,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new Ho(Lo,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new oc(t,n);return function(e,t){if(null===lc(e)){const n=hc(e);null!==n&&Gl(e,n,t.field)}}(e,r),r}(e._query,this.dt,this._t);return new rl(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new uc(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function Wl(e,t="asc"){const n=t,r=Dl("orderBy",e);return new Bl(r,n)}class ql extends Ul{constructor(e,t,n){super(),this.type=e,this.gt=t,this.bt=n}_apply(e){return new rl(e.firestore,e.converter,(t=e._query,n=this.gt,r=this.bt,new uc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),n,r,t.startAt,t.endAt)));var t,n,r}}function $l(e){return hu("limit",e),new ql("limit",e,"F")}function Hl(e,t,n){if("string"==typeof(n=en(n))){if(""===n)throw new Ho(Lo,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!dc(t)&&-1!==n.indexOf("/"))throw new Ho(Lo,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(nu.fromString(n));if(!au.isDocumentKey(r))throw new Ho(Lo,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Bu(e,new au(r))}if(n instanceof nl)return Bu(e,n._key);throw new Ho(Lo,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${cu(n)}.`)}function zl(e,t){if(!Array.isArray(e)||0===e.length)throw new Ho(Lo,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`);if(e.length>10)throw new Ho(Lo,`Invalid Query. '${t.toString()}' filters support a maximum of 10 elements in the value array.`)}function Gl(e,t,n){if(!n.isEqual(t))throw new Ho(Lo,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
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
 */function Kl(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Yl extends class{convertValue(e,t="none"){switch(Du(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pu(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Mu(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Ao()}}convertObject(e,t){const n={};return Eu(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new ll(Pu(e.latitude),Pu(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Nu(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Cu(e));default:return null}}convertTimestamp(e){const t=Ou(e);return new Iu(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=nu.fromString(e);Ro(zc(n));const r=new eu(n.get(1),n.get(3)),i=new au(n.popFirst(5));return r.isEqual(t)||To(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new ul(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new nl(this.firestore,null,t)}}function Jl(e){const t=Qc((e=lu(e,nl)).firestore),n=new Yl(e.firestore);return Jc(t,[e._key]).then((t=>{Ro(1===t.length);const r=t[0];return new Ll(e.firestore,n,e._key,r.isFoundDocument()?r:null,e.converter)}))}function Xl(e){!function(e){if(cc(e)&&0===e.explicitOrderBy.length)throw new Ho(Wo,"limitToLast() queries require specifying at least one orderBy() clause")}((e=lu(e,rl))._query);const t=Qc(e.firestore),n=new Yl(e.firestore);return Xc(t,e._query).then((t=>{const r=t.map((t=>new Nl(e.firestore,n,t.key,t,e.converter)));return cc(e._query)&&r.reverse(),new Cl(e,r)}))}function Zl(e,t,n,...r){const i=yl((e=lu(e,nl)).firestore);let a;return a="string"==typeof(t=en(t))||t instanceof ol?kl(i,"updateDoc",e._key,t,n,r):_l(i,"updateDoc",e._key,t),Yc(Qc(e.firestore),[a.toMutation(e._key,kc.exists(!0))])}function Ql(e,t){const n=sl(e=lu(e,il)),r=Kl(e.converter,t),i=gl(yl(e.firestore),"addDoc",n._key,r,null!==n.converter,{});return Yc(Qc(e.firestore),[i.toMutation(n._key,kc.exists(!1))]).then((()=>n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(){return new bl("serverTimestamp")}ko="9.6.0_lite",In(new tn("firestore/lite",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=new tl(n,new Ko(e.getProvider("auth-internal")),new Zo(e.getProvider("app-check-internal")));return t&&r._setSettings(t),r}),"PUBLIC")),Rn("firestore-lite","3.4.0",""),Rn("firestore-lite","3.4.0","esm2017");var th=function(e=An()){return Sn(e,"firestore/lite").getImmediate()}(Ti),nh=al(th,"replays"),rh=al(th,"entries");function ih(){return(ih=o(t(Y).mark((function e(n,r){return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Zl(sl(rh,n.id),{name:r});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ah(e,t){return ih.apply(this,arguments)}function sh(){return(sh=o(t(Y).mark((function e(n,r){var i;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Xl(Fl(rh,jl("version","==",n),jl("mode","==",r),Wl("score","desc"),$l(100)));case 2:return i=e.sent,e.abrupt("return",i.docs.map((function(e){var t=e.data();return{id:e.id,uid:t.uid,name:t.name,replayId:t.replayId,score:t.score,mode:t.mode}})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oh(e,t){return sh.apply(this,arguments)}function uh(){return(uh=o(t(Y).mark((function e(n,r){var i,a,s;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Xl(Fl(rh,jl("version","==",n),jl("mode","==",r),jl("uid","==",yo()),Wl("score","desc"),$l(1)));case 2:if(i=e.sent,!(a=i.docs[0])){e.next=7;break}return s=a.data(),e.abrupt("return",{id:a.id,uid:s.uid,name:s.name,replayId:s.replayId,score:s.score,mode:s.mode});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ch(e,t){return uh.apply(this,arguments)}function lh(){return(lh=o(t(Y).mark((function e(n){var r,i;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Jl(sl(nh,n));case 2:if(r=e.sent,!(i=r.data())){e.next=6;break}return e.abrupt("return",{id:n,version:i.version,score:i.score,log:i.log,seed:i.seed,mode:i.mode});case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function hh(){return(hh=o(t(Y).mark((function e(n){var r;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ql(nh,{uid:yo(),registeredAt:eh(),log:n.log,version:n.version,score:n.score,mode:n.mode,seed:n.seed});case 2:return r=e.sent,e.abrupt("return",w({id:r.id},n));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function dh(e){return hh.apply(this,arguments)}function fh(){return(fh=o(t(Y).mark((function e(n){var r;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ql(rh,{uid:yo(),name:go(),registeredAt:eh(),replayId:n.id,version:n.version,score:n.score,mode:n.mode});case 2:return r=e.sent,e.abrupt("return",{id:r.id,uid:yo(),name:go(),replayId:n.id,score:n.score,mode:n.mode});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ph(e){return fh.apply(this,arguments)}function mh(){return(mh=o(t(Y).mark((function e(n,r){return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Zl(sl(rh,n.id),{registeredAt:eh(),replayId:r.id,score:r.score});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function vh(e,t){return mh.apply(this,arguments)}var yh="no name",gh=["normal","ex"],wh={normal:"NORMAL",ex:"EX"},bh=document.querySelector(".leaderboard .entry-list"),_h=document.querySelector(".leaderboard .about-button"),kh=document.querySelector(".leaderboard .user-button"),Ih=document.querySelector(".about"),Sh=document.querySelector(".about .modal-close"),Th=document.querySelector(".user"),Eh=document.querySelector(".user .modal"),xh=document.querySelector(".user .form"),Ah=document.querySelector(".user .form-textfield"),Rh=document.querySelector(".user .form-save"),Oh=document.querySelector(".user .record-list"),Ph=document.querySelector(".user .modal-close");if(!(bh instanceof HTMLElement&&_h instanceof HTMLElement&&kh instanceof HTMLElement&&Ih instanceof HTMLElement&&Sh instanceof HTMLElement&&Th instanceof HTMLElement&&Eh instanceof HTMLElement&&xh instanceof HTMLFormElement&&Ah instanceof HTMLInputElement&&Rh instanceof HTMLButtonElement&&Oh instanceof HTMLElement&&Ph instanceof HTMLElement))throw Error("invalid element");var Mh={normal:{},ex:{}};function Lh(){return(Lh=o(t(Y).mark((function e(n){var r;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Mh[n].meEntry){e.next=5;break}return e.next=4,ch(0,n);case 4:r=Mh[n].meEntry=e.sent;case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Nh(e){return Lh.apply(this,arguments)}function Ch(){return(Ch=o(t(Y).mark((function e(n){var r;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=Mh[n].entries){e.next=5;break}return e.next=4,oh(0,n);case 4:r=Mh[n].entries=e.sent;case 5:return e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Dh(e){return Ch.apply(this,arguments)}function Uh(){return(Uh=o(t(Y).mark((function e(n){var r,i,a;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,dh(n);case 2:return r=e.sent,e.next=5,Nh(r.mode);case 5:if(i=e.sent,a=!1,i){e.next=14;break}return a=!0,e.next=11,ph(r);case 11:Mh[r.mode].meEntry=e.sent,e.next=19;break;case 14:if(!(i.score<n.score)){e.next=19;break}return a=!0,i.score=n.score,e.next=19,vh(i,r);case 19:return a&&(delete Mh[r.mode].entries,r.mode===Wh()&&Vh(r.mode)),e.abrupt("return",{replayId:r.id,newRecord:a});case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Fh(){return(Fh=o(t(Y).mark((function e(n){var r,i;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Dh(n);case 2:r=e.sent,i=r.map((function(e,t){return'\n      <div class="entry '.concat(yo()===e.uid?"me":"",'">\n        <div class="entry-order">').concat(t+1,'.</div>\n        <div class="entry-name">').concat(e.name||yh,'</div>\n        <div class="entry-score">￥').concat(X(e.score),'</div>\n        <div class="entry-replay clickable" data-r="').concat(e.replayId,'"></div>\n      </div>')})),bh&&(bh.innerHTML=i.join(""));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Vh(e){return Fh.apply(this,arguments)}var jh=null;function Bh(){var e=new URL(location.origin+location.pathname),t=Hh();return t&&e.searchParams.set("r",t),e.href}function Wh(){return"ex"===new URL(location.href).searchParams.get("mode")?"ex":"normal"}var qh="",$h="";function Hh(){return qh!==location.href&&(qh=location.href,$h=new URL(qh).searchParams.get("r")||""),$h}function zh(e){if(Hh()!==e){var t=new URL(location.href);e?t.searchParams.set("r",e):t.searchParams.delete("r"),history.replaceState(history.state,"",t)}}addEventListener("click",(function(e){if(e.target instanceof HTMLElement){var t=e.target.closest("a");t&&Ei("link_click",{url:t.href})}})),_h.addEventListener("click",(function(){Ei("about_open"),Ih.classList.add("opened")})),Sh.addEventListener("click",(function(){Ih.classList.remove("opened")})),document.addEventListener("click",(function(e){if(jh&&e.target instanceof HTMLElement){var t=e.target.closest(".entry-replay,.record-replay");t instanceof HTMLElement&&t.dataset.r&&(zh(t.dataset.r),jh(t.dataset.r),Ih.classList.remove("opened"),Th.classList.remove("opened"),window.scrollTo({top:100,behavior:"smooth"}))}})),kh.addEventListener("click",o(t(Y).mark((function e(){var n,r,i;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ei("user_open"),Ah.value=go(),Rh.disabled=!0,Th.classList.add("opened"),Eh.classList.add("loading"),e.prev=5,e.next=8,Promise.all(gh.map((function(e){return Nh(e)})));case 8:n=e.sent,r=n.some((function(e){return"ex"===(null==e?void 0:e.mode)})),i="",n.forEach((function(e,t){var n="<div>".concat(wh[gh[t]],"</div>");e?i+="\n          ".concat(r?n:"","\n          <div>￥").concat(X(e.score),"</div>\n          ").concat(r?"":"<div></div>",'\n          <div class="record-replay clickable" data-r="').concat(e.replayId,'"></div>'):"ex"!==gh[t]&&(i+="\n          ".concat(r?n:"","\n          <div>なし</div>\n          ").concat(r?"":"<div></div>","\n          <div></div>"))})),Oh.innerHTML=i,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(5),console.log(e.t0);case 18:Eh.classList.remove("loading"),Ah.focus();case 20:case"end":return e.stop()}}),e,null,[[5,15]])})))),Ph.addEventListener("click",(function(){Th.classList.remove("opened")})),xh.addEventListener("submit",(function(e){e.preventDefault()})),Ah.addEventListener("input",(function(){Rh.disabled=!1})),Rh.addEventListener("click",o(t(Y).mark((function e(){var n,r,i;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ei("user_save"),Rh.disabled=!0,Eh.classList.add("loading"),e.prev=3,n=Ah.value,r=go(),e.next=8,bo(n);case 8:if(i=go(),r===i){e.next=12;break}return e.next=12,Promise.all(gh.map(o(t(Y).mark((function e(r){var i;return t(Y).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Nh(r);case 2:if(!(i=e.sent)){e.next=8;break}return e.next=6,ah(i,n);case 6:i.name=n,delete Mh[r].entries;case 8:case"end":return e.stop()}}),e)})))));case 12:Vh(Wh()),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),Rh.disabled=!1;case 18:Eh.classList.remove("loading");case 19:case"end":return e.stop()}}),e,null,[[3,15]])})))),mo((function(){Vh(Wh())}));var Gh=si.titleLogo,Kh=si.titleLogoIcon,Yh=function(e){var t,n=ni.from(8).wait(300).to(0,600,vt.outSine).start(),r=ni.from(0).wait(300).to(1,600,vt.steps(3)).start(),i=ni.from(3).loopStart().to(-3,1500,vt.inOutSine).to(3,1500,vt.inOutSine).loopEnd().start(),a=function(){return ni.from(-100).loopStart().wait(2e3).to(-100).to(h.flash.width,200).wait(3e3).to(-100).to(h.flash.width,200).to(-100).to(h.flash.width,200).wait(2e3).loopEnd()},s=ni.from(0).wait(60).on((function(){h.normal=o().normal})),o=function(){return{normal:c()?Gh.ex:Gh.normal,flash:c()?Gh.exFlash:Gh.normalFlash}},u=function(){var e,t;Ii.mode="ex"===Ii.mode?"normal":"ex",e=Ii.mode,t=new URL(location.href),"normal"===e?t.searchParams.delete("mode"):t.searchParams.set("mode",e),history.replaceState(history.state,"",t),Vh(e),bi.titleModeChange.play()},c=function(){var n;return"ex"===(null!==(t=null==e||null===(n=e.value)||void 0===n?void 0:n.mode)&&void 0!==t?t:Ii.mode)},l=c(),h=o(),d=a().start();return function(){l!==c()&&(l=c(),h.normal=h.flash=o().flash,d.end(),s.end(),d=a().start(),s.start());var t=re(Gr,h.normal),f=h.flash.width,p=Math.round(d.value),m=h.normal.toBox(t,80);m.height+=30,m.originY+=25,e||Xr.onDown(m,u),Gr.save(),Gr.drawSprite(Kh,re(Gr,Kh),53+Math.round(i.value)),Gr.opacity(r.value),Gr.drawSprite(h.normal,t,80+n.value),Gr.opacity(.8),Gr.drawSprite(h.flash.sub({x:Math.max(0,p),width:(p<0?100+p:Math.min(100,f-p))-f}),t+Math.max(0,p),80+n.value),Gr.restore()}},Jh=si.buttonTwitter,Xh=si.buttonMute,Zh=si.buttonLight,Qh=si.card,ed=si.fontUiS,td=function(e,t,n){var r=void 0===n?"":n,i=re(Gr,Qh.top),a=ni.from(0).to(t+(r?ed[0].height+1:0),200,vt.steps(5)).start(!1);return function(n){a.update();var s=(t-a.value)/2|0;if(Gr.drawSprite(Qh.top,i,e+s),Gr.drawSprite(Qh.body,i,e+s+Qh.top.height,Qh.body.width,a.value),Gr.drawSprite(Qh.bottom,i,e+s+Qh.top.height+a.value),r&&ed[0].height<=a.value){var o=(Qh.body.width-Gr.measuretext(ed,r,4))/2|0;Gr.drawText(ed,r,i+o,e+s+4,4)}a.done&&n&&n({x:i+4,y:e+s+4+(r?ed[0].height+1:0),width:Qh.body.width-8,height:a.value-(r?ed[0].height+1:0)})}},nd=si.tips,rd=si.fontUi,id=si.scoreBg,ad=function(e,t){return function(n,r){Gr.drawSprite(id,e,t+2),Gr.drawText(rd,"y ".concat(X(0|n)),e+1,t),Gr.drawRect(e+1,t+11,Math.floor(128*Math.min(n/1e6,1)),2,Si.main),void 0!==r&&Gr.drawText(rd,"h ".concat(0|r),e+1,t+21)}},sd=si.replayReady,od=si.replayLoading,ud=si.buttonReset,cd=si.buttonLight,ld=si.pressAnyButton,hd=si.fontUi,dd=si.fontUiL,fd=si.uiStatusReset,pd=si.card,md=function(){var e,t,n={},r=39,i=ad(7,2),a=(e=pd.body.width/2,t=22,function(n){var r=Math.floor(100*Math.max(n,0)),i="t ".concat(Math.floor(r/100)),a=".".concat(String(r%100).padStart(2,"0")),s=Gr.measuretext(dd,i),o=Gr.measuretext(hd,a),u=e-(s+1+o)/2;Gr.drawText(dd,i,u,t),Gr.drawText(hd,a,u+s+1,t+2)}),s=function(e,t){var n=ni.from(!1).to(!0,100).to(!1).on((function(){Kr.emit("sceneChange",(function(){return zh(""),wf()}))})),r=function(){n.started||(n.start(),bi.uiButton.play())};return function(){Xr.onDown(fd.toBox(e-fd.width,t-fd.height),r),Gr.opacity(n.value?.2:1),Gr.drawSprite(fd,e-fd.width,t-fd.height)}}(pd.body.width,r),o=ni.from(-39).wait(250).to(0,250,vt.outSine).on((function(){Ii.screenTop=r,Kr.emit("statusInitIn")})).start(),u=ni.from(0).to(-39,400,vt.inSine).on((function(){Ii.screenTop=0,Kr.emit("statusFinOut"),ct.remove(c)}));n.timeUp=function(){u.start()},Ii.screenTop=0;var c=function(e,t,c){Kr.subscribe(n),Gr.save(),Gr.translate(re(Gr,pd.body),u.started?u.value:o.value),Gr.drawSprite(pd.body,0,0,pd.body.width,r-pd.bottom.height),Gr.drawSprite(pd.bottom,0,r-pd.bottom.height),i(e,t),a(c/zr.fps),s(),Gr.restore()};return c},vd=si.success,yd=si.buttonReset,gd=si.buttonLight,wd=si.buttonTwitter,bd=function(e){var t=null!=e?e:{},n=t.time,r=void 0===n?30:n,i=t.times,a=void 0===i?1:i,s=t.color,o=void 0===s?N.parse("#fff8"):s,u=t.onEnd,c=ni.from(!0).to(!0,r).loopStart(a-1).to(!1,r).to(!0,r).loopEnd().start(),l=function(){c.value&&Gr.drawRect(0,0,Gr.width,Gr.height,o),c.done&&(ct.remove(l),null==u||u())};return l},_d=si.newRecord,kd=function(e,t){var n,r,i,a,s,o=ni.from({x:0,y:0}).to({x:2,y:-2},10).to({x:-2,y:2},20).to({x:2,y:2},20).to({x:-2,y:-2},20).to({x:0,y:0}),u=ni.from(0).wait(300).to(e,500,vt.inSine).on((function(){Ii.isSuccess?c.start():l.start()})).start(!1),c=ni.from(0).wait(400),l=ni.from(0).wait(200).on((function(){return ri.ui.add(function(e,t){var n=ni.from(Gr.height).to(Gr.height-wd.height-30,300,vt.outSine).start(),r=function(){var n=(null==t?void 0:t.isResolved())?"￥".concat(X(e),"\n#FireShooterSan\n").concat(Bh()):"#FireShooterSan\n".concat(Bh()),r=new URLSearchParams({text:n});window.open("https://twitter.com/intent/tweet?".concat(r))};return function(){var e=n.value;Xr.onDown(wd.toBox(30,e),r),Gr.drawSprite(wd,30,e)}}(e,t),(n=ni.from(Gr.height).to(Gr.height-yd.height-30,300,vt.outSine).start(),r=ni.from(!1).to(!0,100).to(!1).on((function(){Kr.emit("sceneChange",(function(){return zh(""),wf()}))})),i=function(){r.started||(r.start(),bi.uiButton.play())},function(){var e=Gr.width-yd.width-30,t=n.value;Xr.onDown(yd.toBox(e,t),i),Gr.drawSprite(yd,e,t),r.value&&(Gr.save(),Gr.opacity(.5),Gr.drawSprite(gd,e,t),Gr.restore())}));var n,r,i})),h=td(90,49,"RESULT"),d=ad(3,16),f=(n=106,r=1,i=function(){var e,n,r;o.start(),l.start(),(null==t||null===(e=t.value)||void 0===e?void 0:e.newRecord)&&ri.ui.add((n=ni.from(!1).loopStart().to(!1,500).to(!0,500).loopEnd().start(),r=!0,function(){r&&(r=!1,Kr.emit("newRecordShow"),ri.ui.add(bd({color:N.parse("#fff"),time:100})));var e=n.value?_d.flash:_d.normal;Gr.drawSprite(e,re(Gr,e),44)}))},a=ni.from({rotate:-15,scale:3}).to({rotate:-0,scale:1},250,vt.inSine).on((function(){s.start(),i(),bi.resultSuccess.play()})).start(!1),s=ni.from(!1).loopStart().to(!1,500).to(!0,500).loopEnd(),function(){a.update(),Gr.save(),Gr.translate(n,r),Gr.rotate(a.value.rotate),Gr.scale(a.value.scale),Gr.drawSprite(s.value?vd.flash:vd.normal),Gr.restore()}),p=u.value;return function(){Gr.save(),Gr.translate(o.value.x,o.value.y),h((function(e){Gr.translate(e.x,e.y),d(u.update().value),c.done&&f()})),Gr.restore(),p!==u.value&&bi.resultCounting.play(),p=u.value}},Id=si.start,Sd=si.replayNow,Td=si.finish,Ed=si.playerBullet,xd=si.playerBulletHit,Ad=si.playerBullet,Rd=function(e,t,n){var r={},i=0,a=0,s=1/0,o=0,u=-90,c=0;r.enemyHit=function(){ct.remove(l),ri.effectBack.add(function(e,t){var n=ni.from(2).to(1,100,vt.inSine).on((function(){ct.remove(r)})).start(),r=function(){Gr.save(),Gr.opacity(.8),Gr.translate(e,t),Gr.scale(n.value),Gr.drawSprite(xd),Gr.restore()};return r}(e,t)),Kr.emit("playerBulletRemove")},r.enemyPos=function(n){var r=n.id,c=n.x,l=n.y,h=Q(Z(c-e,l-t)-u),d=Math.abs(h);(-40<h&&h<40&&d<s||i===r)&&(a=r,s=i===r?0:d,o=h)},bi.playerFire.play();var l=function(){if(a&&u!==o){var h=n?2:.5;u+=Math.min(Math.max(o,-h),h)}i=a,a=0,s=1/0;var d=ee(u,n?6:8);if(e+=d.x,t+=d.y,e<=-Ad.originRight||Gr.width+Ad.originLeft<=e||t<=Ii.screenTop-Ad.originBottom||Gr.height+Ad.originTop<=t)return ct.remove(l),void Kr.emit("playerBulletRemove");c++%3==0&&ri.effectBack.add(function(e,t){var n=ni.from(.2).to(0,250,vt.inSine).on((function(){ct.remove(r)})).start(),r=function(){Gr.save(),Gr.opacity(n.value),Gr.drawSprite(Ed,e,t),Gr.restore()};return r}(e,t)),Kr.subscribe(r),Yr.emit("playerBulletHit",null,Ad.toBox(e,t),r),Gr.drawSprite(Ad,e,t)};return l},Od=si.playerDestroyChip,Pd=function(e,t,n,r){var i=ni.from(0).wait(r).start(),a=ni.from(0).to(2).to(1,200,vt.inSine).start(!1),s=ni.from(0).to(.8,100).wait(300).to(0,200).on((function(){ct.remove(c)})).start(!1),o=ni.from(4).to(.2,300,vt.outSine).start(!1),u=ee(n),c=function(){i.done&&(o.update(),e+=u.x*o.value,t+=u.y*o.value,Gr.save(),Gr.opacity(s.update().value),Gr.translate(0|e,0|t),Gr.scale(a.update().value),Gr.drawSprite(Od),Gr.restore())};return c},Md=si.playerDestroy,Ld=si.player,Nd=function(e){for(var t={},n=ni.from(Gr.height+Ld.normal.originTop).wait(200).to(Gr.height-30,200,vt.outSine).start(),r=ni.from(!1).start(),i=0;i<12;i++)r.to(!0,60).to(!1,60);var a=!1,s=Gr.width/2,o=0;t.enemyHit=t.enemyBulletHit=function(){!a&&r.done&&ct.remove(u)&&(Ii.heartRate=0,Ii.clearing.start(),Kr.emit("playerDestroy"),ri.effectOverEnemy.add(function(e,t){for(var n=ni.from(0).to(24,250,vt.outSine).wait(200).start(),r=ni.from(0).to(2,100,vt.outSine).to(.7,150,vt.inOutSine).to(1.2,50,vt.inSine).to(1,100,vt.inSine).start(),i=ni.from(1).wait(200).to(0,250,vt.inSine).on((function(){ct.remove(o)})).start(),a=Si.accent.opacity(.37),s=0;s<720;s+=48)ri.effectOverEnemy.add(Pd(e,t,s,s/2+200));bi.playerHit.play();var o=function(){Gr.save(),Gr.opacity(i.value),Gr.translate(0|e,0|t),n.done||Gr.drawCircle(0,-6,0|n.value,a),Gr.scale(r.value),Gr.drawSprite(Md),Gr.restore()};return o}(s,o)),ni.from(0).wait(1e3).on((function(){ri.player.add(Nd(e))})).start())},t.timeUp=function(){a=!0};var u=function(){Kr.subscribe(t);var i=r.value?Ld.flash:Ld.normal;if(!n.done)return o=n.value,void Gr.drawSprite(i,s,o);if(a&&e)Gr.drawSprite(i,s,o);else{var u,c,l,h,d,f,p,m,v=!1;if(Xr.isDown){var y=Xr.vec;s+=1.4*y.x,o+=1.4*y.y,v=Xr.downCount>7}else{v=Jr.fire.downCount>7;var g=(u=k(Zr),c=u[0],l=u[1],h=u[2],d=u[3],f=(l.isDown?1:0)+(d.isDown?-1:0),p=(h.isDown?1:0)+(c.isDown?-1:0),m=Math.sqrt(f*f+p*p)||1,{x:f/m,y:p/m});s+=g.x*(v?1.5:4.5),o+=g.y*(v?1.5:4.5)}s=Math.min(Math.max(s,i.originLeft),Gr.width-i.originRight),o=Math.min(Math.max(o,Ii.screenTop+i.originTop),Gr.height-i.originBottom),(Qr.some((function(e){return e.isDown}))&&ri.playerBullet.isEmpty||Qr.some((function(e){return e.isDownChange}))&&ri.playerBullet.size<3)&&ri.playerBullet.add(Rd(s,o-i.originTop,v)),Ii.playerPos={x:s,y:o},a||Yr.emit("playerHit",null,{x:s,y:o,width:0,height:0,originX:0,originY:0},t),Gr.drawSprite(i,s,o)}};return u},Cd=Nd,Dd=si.enemyNotice,Ud=si.enemyNoticeLarge,Fd=0,Vd=si.fontRate,jd=function(e,t,n,r){var i=ni.from(!1).loopStart().to(!0,40).to(!1,60).loopEnd(),a=ni.from(0).to(-6,200,vt.outSine).wait(300).on((function(){ct.remove(s)})).start();16<=n&&i.start(!1);var s=function(){if(n>1){var r=i.update().value?Vd.flash:Vd.normal;Gr.drawText(r,"*".concat(n),0|e,t+a.value|0,-1)}};return s};si.enemyTakeChip;var Bd=si.enemyTake,Wd=si.enemyLargeTake,qd=function(e){var t=e.x,n=e.y,r=e.large,i=(e.heart,Ii.getHeartRate()),a=ni.from(0).to(r?32:16,250,vt.outSine).wait(100).start(),s=ni.from(0).to(1.5,100,vt.outSine).to(.8,100,vt.inOutSine).to(1,100,vt.inSine).start(),o=ni.from(.9).wait(200).to(0,200,vt.inSine).on((function(){ct.remove(c),ri.effectOverPlayer.add(jd(t,n,i))})).start(),u=Si.accent.opacity(.37),c=function(){Gr.save(),Gr.opacity(o.value),Gr.translate(0|t,0|n),a.done||Gr.drawCircle(0,0,0|a.value,u),Gr.scale(s.value),Gr.drawSprite(r?Wd:Bd),Gr.restore()};return c},$d=si.enemy,Hd=si.enemyLarge,zd=1,Gd=function(e,t){var n={},r=zd++,i=e.hp,a={id:r,x:e.x,y:e.y,hp:e.hp,large:e.large},s=e.large?Hd:$d;e.me&&(e.me.id=r);var o=!1,u=ni.from(2).to(1,150,vt.inSine).start(!1),c=ni.from(!1).to(!0,60).to(!1,60).to(!0,60).to(!1),l=ni.from(1).to(0,200,vt.inSine).on((function(){ct.remove(h)}));n.playerBulletHit=function(){o||(c.running||c.start(),bi.enemyHit.play(),--a.hp<=0&&ct.remove(h)&&(Ii.heartRate++,Ii.addHeart(i),ri.effectBack.add(qd(w({},a,{heart:i}))),Kr.emit("enemyTake",{id:r,large:e.large}),Kr.emit("enemyDestroy",{id:r}),e.large?bi.enemyTakeLarge.play():bi.enemyTake.play()))},n.enemyTake=function(t){var n;(null===(n=e.parent)||void 0===n?void 0:n.id)===t.id&&ct.remove(h)&&(Ii.addHeart(i),ri.effectBack.add(qd(w({},a,{heart:i}))),Kr.emit("enemyDestroy",{id:r}),Kr.emit("enemyTake",{id:r,large:e.large}))},n.timeUp=function(){o=!0,l.start(),ri.effectBack.add(function(e){var t=e.x,n=e.y,r=e.large,i=ni.from(0).to(r?16:8,400,vt.outSine).start(),a=ni.from(.6).wait(200).to(0,200,vt.inSine).on((function(){ct.remove(s)})).start(),s=function(){Gr.save(),Gr.opacity(a.value),Gr.drawCircle(0|t,0|n,0|i.value,Si.accent),Gr.restore()};return s}(w({},a)))};var h=function(){var d=e.noOver||e.noHorOver,f=e.noOver||e.noVertOver;if(a.hp<=0||!d&&(a.x<=-s.body.originRight||Gr.width+s.body.originLeft<=a.x)||!f&&(a.y<=Ii.screenTop-s.body.originBottom||Gr.height+s.body.originTop<=a.y))ct.remove(h)&&Kr.emit("enemyDestroy",{id:r});else{Kr.subscribe(n),o||t(a),Gr.save(),Gr.translate(a.x,a.y),o||Yr.emit("enemyHit",null,s.body.toBox(0,0),n),Kr.emit("enemyPos",{id:r,x:a.x,y:a.y}),Gr.scale(l.started?l.value:u.update().value),Gr.drawSprite(c.value?s.bodyFlash:s.body);var p=c.value?s.gaugeFlash:s.gauge,m=Math.ceil(p.height*(Math.max(0,a.hp)/i));Gr.drawSprite(p.sub({y:m,height:-m,originY:-m})),Gr.restore()}};return ri.enemyNotice.add(function(e,t,n){var r,i,a={},s=t-1,o=Ii.isFirstEnemy,u=Ii.enemyWaveId;Fd=o?300:Fd+(null!==(r=e.showTime)&&void 0!==r?r:50);var c=ni.from(0).wait(null!==(i=e.wait)&&void 0!==i?i:0),l=ni.from(0).wait(Fd).to(2).to(1,200,vt.outSine).start(),h=ni.from(1).to(0,300,vt.inSine).on((function(){ct.remove(d)}));o||(a.enemyShow=function(e){c.started||e.id!==s||c.start()},a.enemyDestroy=function(e){e.id===s&&c.end()}),a.timeUp=function(){h.start()},Ii.isFirstEnemy=!1;var d=function(){if(Kr.subscribe(a),!h.started&&(o&&!c.started&&Ii.enemyWaveId!==u||c.done))return ct.remove(d),ri.enemy.add(n),Kr.emit("enemyShow",{id:t}),void bi.enemyShow.play();Gr.save(),Gr.opacity(Ii.enemyWaveId!==u||e.large?.3:.2),Gr.translate(e.x,e.y),Gr.scale(h.started?h.value:l.value),Gr.drawSprite(e.large?Ud:Dd),Gr.restore()};return d}(e,r,h)),h},Kd=si.enemyBulletTake,Yd=si.enemyBulletLargeTake,Jd=function(e){var t=e.x,n=e.y,r=e.large,i=e.angle,a=e.speed,s=ni.from(0).to(r?8:4,400,vt.outSine).start(),o=ni.from(.6).wait(200).to(0,200,vt.inSine).on((function(){ct.remove(u)})).start(),u=function(){var e=ee(i instanceof vt?i.value:i,a instanceof vt?a.value:a);t+=e.x,n+=e.y,Gr.save(),Gr.opacity(o.value),Gr.drawCircle(0|t,0|n,0|s.value,Si.accent),Gr.restore()};return u},Xd=si.enemyBullet,Zd=si.enemyBulletLarge,Qd=function(e){var t={},n=ni.from(0).loopStart().to(1,500,vt.frameSteps(2)).to(0).loopEnd().start(!1),r=e.x,i=e.y;t.enemyTake=function(t){if(t.id===e.id&&ct.remove(a)){var n=e.large?2:1;Ii.addHeart(n),ri.effectBack.add(function(e){var t=e.x,n=e.y,r=e.large,i=(e.heart,Ii.getHeartRate()),a=ni.from(0).to(r?16:8,250,vt.outSine).wait(100).start(),s=ni.from(0).to(1.5,100,vt.outSine).to(.8,100,vt.inOutSine).to(1,100,vt.inSine).start(),o=ni.from(.9).wait(200).to(0,200,vt.inSine).on((function(){ct.remove(c),ri.effectOverPlayer.add(jd(t,n,i))})).start(),u=Si.accent.opacity(.37),c=function(){Gr.save(),Gr.opacity(o.value),Gr.translate(0|t,0|n),a.done||Gr.drawCircle(0,0,0|a.value,u),Gr.scale(s.value),Gr.drawSprite(r?Yd:Kd),Gr.restore()};return c}(w({},e,{x:r,y:i,heart:n})))}},t.enemyDestroy=function(t){t.id===e.id&&ni.from(0).wait(1e3).on((function(){ct.remove(a)&&ri.effectBack.add(Jd(w({},e,{x:r,y:i})))})).start()},e.large?bi.enemyFireLarge.play():bi.enemyFire.play();var a=function(){if(Ii.clearing.running&&ct.remove(a))ri.effectBack.add(Jd(w({},e,{x:r,y:i})));else{var s=(e.large?Zd:Xd)[n.update().value],o=ee(e.angle instanceof vt?e.angle.value:e.angle,e.speed instanceof vt?e.speed.value:e.speed);r+=o.x,i+=o.y,r<=-s.originRight&&o.x<=0||Gr.width+s.originLeft<=r&&0<=o.x||i<=Ii.screenTop-s.originBottom&&o.y<=0||Gr.height+s.originTop<=i&&0<=o.y?ct.remove(a):(Kr.subscribe(t),Yr.emit("enemyBulletHit",null,s.toBox(r,i),t),Gr.drawSprite(s,r,i))}};return a},ef=function(e){for(var t=function(t,n){return ce(t,n,e.rank/2)},n=ni.from(0).wait(ii.nextInt(t(300,0),t(2e3,200))).start(!1),r=ni.from(!1).to(!0),i=0;i<e.rank;i++)r.wait(t(300,100)).to(!0);return Gd(w({},e),(function(e){n.update().done&&(n.wait(ii.nextInt(t(2e3,500),t(5e3,800))),r.start(!1)),r.update().getAndSet(!1)&&ri.enemyBullet.add(Qd(w({},e,{angle:90,speed:t(1,3)})))}))},tf=function(e){for(var t=function(t,n){return ce(t,n,e.rank/2)},n={},r=si.enemy.body,i=ni.from(!0).start(!1),a=0,s=0,o=0;o<e.rank;o++)i.wait(t(1e3,600)).to(!0);return Gd(w({},e),(function(o){if(Kr.subscribe(n),i.update().getAndSet(!1)){var u=te(o.x-Ii.playerPos.x,o.y-Ii.playerPos.y);a=3*u.x,s=3*u.y;for(var c=Z(Ii.playerPos.x-o.x,Ii.playerPos.y-o.y),l=t(.5,1),h=0;h<e.rank+2;h++)ri.enemyBullet.add(Qd(w({},o,{angle:c,speed:1.5+h*l})))}else a+=(0-a)/20,s+=(4-s)/20;o.x+=a,o.y+=s,(o.x<r.originLeft||Gr.width-r.originRight<o.x)&&(a=-a,o.x+=a)}))},nf=function(e){var t=function(t,n){return ce(t,n,e.rank/2)},n=ee(90+75*Math.sign(e.x-Gr.width/2),t(2,4)),r=si.enemy.body;return Gd(w({},e),(function(i){if(i.x+=n.x,i.y+=n.y,i.x<r.originLeft||Gr.width-r.originRight<=i.x){n.x=-n.x,i.x+=n.x;var a=t(1.5,2.5),s=n.x<0?180:0;if(0===e.rank){var o=5*e.no;ri.enemyBullet.add(Qd(w({},i,{angle:s+90-o,speed:a})),Qd(w({},i,{angle:s-90+o,speed:a})))}else if(1===e.rank)ri.enemyBullet.add(Qd(w({},i,{angle:s+90,speed:a})),Qd(w({},i,{angle:s-90,speed:a})),Qd(w({},i,{angle:s+60,speed:a})),Qd(w({},i,{angle:s-60,speed:a})));else for(var u=2===e.rank?30:45,c=-90;c<=90;c+=u)ri.enemyBullet.add(Qd(w({},i,{angle:s+c,speed:a})))}}))},rf=function(e){var t=function(t,n){return ce(t,n,e.rank/2)},n=e.angle,r=ni.from(80).to(30,2e3,vt.outSine).to(200,2e3,vt.inSine).start(!1),i=ni.from(!1).loopStart().wait(t(300,80)).to(!0).loopEnd().start(!1),a=ee(n),s=e.x+a.x*r.value,o=e.y+a.y*r.value,u=t(2,3);return Gd(w({},e,{x:s,y:o}),(function(a){r.update(),i.update();var s=ee(n+=u);if(a.x=e.x+s.x*r.value,a.y=e.y+s.y*r.value,i.getAndSet(!1)){var o=Z(Ii.playerPos.x-a.x,Ii.playerPos.y-a.y),c=ni.from(.5).to(t(2,3),t(500,300),vt.inSine).start();ri.enemyBullet.add(Qd(w({},a,{angle:o,speed:c})))}}))},af=function(e){var t=function(t,n){return ce(t,n,e.rank/2)},n=0,r=0,i=!1,a=t(2,3.5);return Gd(w({},e),(function(s){if(0===n&&(n=Ii.playerPos.y<e.y?-1:1),0===r)s.y+=a*n,(n<0&&Ii.playerPos.y>=s.y||n>0&&Ii.playerPos.y<=s.y)&&(r=Ii.playerPos.x<s.x?-1:1);else if(s.x+=a*r,!i&&(r<0&&Ii.playerPos.x>=s.x||r>0&&Ii.playerPos.x<=s.x)){for(var o=Ii.playerPos.y<s.y?270:90,u=t(.5,1),c=0;c<e.rank+2;c++)ri.enemyBullet.add(Qd(w({},s,{angle:o,speed:2+c*u})));i=!0}}))},sf=function(e){var t=function(t,n){return ce(t,n,e.rank/2)},n=e.x<Gr.width/2?-si.enemy.body.originRight:Gr.width+si.enemy.body.originLeft,r=ni.from(e.x).to(Gr.width-e.x,1e3,vt.outSine).to(n,1e3,vt.inSine).start(!1),i=ni.from(e.y).to(e.y2,1700,vt.inOutSine).to(e.y2-(e.y2-e.y)/5,300,vt.inSine).start(!1),a=ni.from(!0).start(!1),s=ni.from(!1).to(!0);e.rank<2?a.wait(1100).to(!0):a.wait(500).to(!0).wait(500).to(!0);for(var o=0;o<2*e.rank;o++)s.wait(t(150,50)).to(!0);return Gd(w({},e),(function(e){if(e.x=r.update().value,e.y=i.update().value,a.update().getAndSet(!1)&&s.start(!1),s.update().getAndSet(!1)){var n=Z(Ii.playerPos.x-e.x,Ii.playerPos.y-e.y),o=t(12,8),u=t(1.5,3.5);ri.enemyBullet.add(Qd(w({},e,{angle:n+o,speed:u})),Qd(w({},e,{angle:n-o,speed:u})))}}))},of=function(e){var t=function(t,n){return ce(t,n,e.rank/2)},n=ni.from(!1).wait(t(800,500)).loopStart().to(!0).wait(t(1e3,200)).loopEnd().start(!1),r=ni.from(e.y).to(e.y+10,t(500,300),vt.inOutSine).to(Ii.screenTop-si.enemy.body.originBottom,t(2500,1500),vt.inSine).start(!1),i=0,a=0,s=[],o=ii.nextInt(t(60,20)),u=t(1,2);return Gd(w({noHorOver:!0},e),(function(e){s.unshift(Ii.playerPos.x);var c=s[Math.min(s.length-1,o)];a+=t(5e-4,.001),i+=Math.min(Math.max(-a,c-e.x),a),e.x+=Math.min(Math.max(-u,i),u),e.y=r.update().value;var l=t(30,20);n.update().getAndSet(!1)&&ri.enemyBullet.add(Qd(w({},e,{angle:90-l,speed:1})),Qd(w({},e,{angle:90+l,speed:1})))}))},uf=function(e){var t=function(t,n){return ce(t,n,e.rank/2)},n=e.x<Gr.width/2?Gr.width+si.enemy.body.originLeft:-si.enemy.body.originRight,r=ni.from(e.x).to(n,t(2500,1500),vt.inSine).start(!1),i=ni.from(e.y).to(Ii.screenTop-si.enemy.body.originBottom-10,t(2500,1500),vt.outSine).start(!1),a=ni.from(!1).loopStart().wait(t(400,50)).to(!0).loopEnd().start(!1);return Gd(w({noHorOver:!0},e),(function(e){if(e.x=r.update().value,e.y=i.update().value,a.update().getAndSet(!1)){var n=t(30,45),s=ii.nextFloat(90-n,90+n),o=ii.nextFloat(1,2);ri.enemyBullet.add(Qd(w({},e,{angle:s,speed:o})))}}))},cf=function(e){for(var t=function(t,n){return ce(t,n,e.rank/2)},n={},r=ni.from(!1).wait(t(500,200)).loopStart().to(!0).wait(t(1500,1e3)).loopEnd().start(!1),i=ni.from(!1).to(!0),a=90,s=0,o=0;o<1+3*e.rank;o++)i.wait(t(150,80)).to(!0);return Gd(w({large:!0,noOver:!0},e),(function(o){if(Kr.subscribe(n),!i.running&&!i.value){var u=Q(Z(Ii.playerPos.x-o.x,Ii.playerPos.y-o.y)-a),c=t(1,2);a+=Math.min(Math.max(-c,u),c)}r.update().getAndSet(!1)&&(i.start(!1),s=a),i.update().getAndSet(!1)?(ri.enemyBullet.add(Qd(w({},o,{angle:s,speed:t(2.5,2)}))),e.me.fire=!0):e.me.fire=!1;var l=ee(a);o.x+=.3*l.x,o.y+=.3*l.y,e.me.x=o.x,e.me.y=o.y,e.me.angle=a}))},lf=function(e){var t=e.parent,n=ee(t.angle+e.angle),r=t.x+n.x*e.dist,i=t.y+n.y*e.dist;return Gd(w({x:r,y:i,noOver:!0},e),(function(n){var r,i,a=ee(t.angle+e.angle);n.x=t.x+a.x*e.dist,n.y=t.y+a.y*e.dist,t.fire&&ri.enemyBullet.add(Qd(w({},n,{id:t.id,angle:t.angle,speed:(r=1.5,i=1,ce(r,i,e.rank/2))})))}))},hf=function(e){for(var t=function(t,n){return ce(t,n,e.rank/2)},n={},r=ni.from(!1).wait(t(500,200)).loopStart().to(!0).wait(t(1500,1e3)).loopEnd().start(!1),i=ni.from(e.y).loopStart().to(e.y2,4e3,vt.inOutSine).to(e.y,4e3,vt.inOutSine).loopEnd().start(!1),a=ni.from(0).loopStart().to(t(16,22),1e3,vt.outSine).to(-t(16,22),2e3,vt.inOutSine).to(0,1e3,vt.inSine).loopEnd().start(!1),s=ni.from(!1).to(!0),o=0;o<1+3*e.rank;o++)s.wait(t(150,40)).to(!0);var u=0,c=0;return Gd(w({large:!0},e),(function(o){Kr.subscribe(n),o.x=e.x+a.update().value,o.y=i.update().value,r.update().getAndSet(!1)&&(s.start(!1),u=0,c=Z(Ii.playerPos.x-o.x,Ii.playerPos.y-o.y)),s.update().getAndSet(!1)?(ri.enemyBullet.add(Qd(w({},o,{angle:c,speed:t(2.5,1.5+.3*u)}))),e.me.fire=!0,e.me.rapidNo=u++):(e.me.fire=!1,e.me.rapidNo=0),e.me.x=o.x,e.me.y=o.y}))},df=function(e){var t=function(t,n){return ce(t,n,e.rank/2)},n=e.parent,r=ee(e.angle),i=n.x+r.x*e.dist,a=n.y+r.y*e.dist/2,s=0;return Gd(w({x:i,y:a,noOver:!0},e),(function(r){e.angle+=t(2,1);var i=ee(e.angle);r.x=n.x+i.x*e.dist,r.y=n.y+i.y*e.dist/2,n.fire&&(0===n.rapidNo&&(s=Z(Ii.playerPos.x-r.x,Ii.playerPos.y-r.y)),ri.enemyBullet.add(Qd(w({},r,{id:n.id,angle:s,speed:t(1.5,1+.2*n.rapidNo)}))))}))},ff=function(e){var t=function(t,n){return ce(t,n,e.rank/2)},n={},r=si.enemyLarge.body,i=ni.from(t(3,5)).wait(t(1500,500)).to(0,t(1e3,400),vt.inSine),a={x:0,y:0};return Gd(w({large:!0},e),(function(s){Kr.subscribe(n),i.update(),s.x+=a.x*i.value,s.y+=a.y*i.value;var o=null;if(!i.running){i.start(!1),a=te(s.x-Ii.playerPos.x,s.y-Ii.playerPos.y);var u=Z(Ii.playerPos.x-s.x,Ii.playerPos.y-s.y);o=[];for(var c=t(2,1),l=[2,3,5][e.rank],h=0;h<l;h++)o.push({angle:u+h*t(30,45),speed:c}),0<h&&h<4&&o.push({angle:u-h*t(30,45),speed:c});var d=!0,f=!1,p=void 0;try{for(var m,v=o[Symbol.iterator]();!(d=(m=v.next()).done);d=!0){var y=m.value;ri.enemyBullet.add(Qd(w({},s,{angle:y.angle,speed:y.speed})))}}catch(e){f=!0,p=e}finally{try{d||null==v.return||v.return()}finally{if(f)throw p}}}(s.x<r.originLeft||Gr.width-r.originRight<=s.x)&&(a.x=-a.x,s.x+=a.x*i.value),(s.y<Ii.screenTop+r.originTop||Gr.height-r.originBottom<=s.y)&&(a.y=-a.y,s.y+=a.y*i.value),e.me.history.push({x:s.x,y:s.y,bullets:o})}))},pf=function(e){var t=function(t,n){return ce(t,n,e.rank/2)},n=e.parent,r=e.no*t(8,4),i=e.no*t(.2,.1);return Gd(w({noOver:!0},e),(function(e){var t=n.history.length-1-r,a=n.history[Math.max(0,t)];e.x=a.x,e.y=a.y;var s=!0,o=!1,u=void 0;if(a.bullets&&0<=t)try{for(var c,l=a.bullets[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){var h=c.value;ri.enemyBullet.add(Qd(w({},e,{id:n.id,angle:h.angle,speed:h.speed-i})))}}catch(e){o=!0,u=e}finally{try{s||null==l.return||l.return()}finally{if(o)throw u}}}))},mf=function(e){var t=function(t,n){return ce(t,n,e.rank/2)},n=ni.from(!1).wait(t(400,0)).loopStart().to(!0).wait(t(150,150)).loopEnd().start(!1),r=t(60,70),i=ee(e.angle),a=e.x+i.x*r,s=e.y+i.y*r,o=-1;return Gd(w({large:!0},e,{x:a,y:s}),(function(i){e.angle+=t(.5,1.5);var u=ee(e.angle);if(i.x=e.x+u.x*r,i.y=e.y+u.y*r,n.update().getAndSet(!1)){if(o<0){var c=Z(Ii.playerPos.x-a,Ii.playerPos.y-s);o=45*Math.round(c/45)+360}else o+=45;for(var l=0;l<1+Math.pow(e.rank,2);l++){var h=0===e.rank?ni.from(4).to(2,200,vt.inSine):1===e.rank?ni.from(4-l/2).to(2-l/2,200,vt.inSine):ni.from(8-2*l).to(1,200,vt.inSine);ri.enemyBullet.add(Qd(w({},i,{angle:o,speed:h.start()})))}}}))},vf=[function(e,t){var n=e>0?1:0,r=4+2*n,i=28-4*n,a=Ii.playerPos.x<Gr.width/2?-1:1,s=(Gr.width-(r-1)*i*a)/2,o=120,u=!0,c=!1,l=void 0;try{for(var h,d=ne(2)[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){h.value;var f=!0,p=!1,m=void 0;try{for(var v,y=ne(r)[Symbol.iterator]();!(f=(v=y.next()).done);f=!0){v.value;ef({lap:e,rank:t,hp:1,x:s,y:o,wait:300}),s+=i*a}}catch(e){p=!0,m=e}finally{try{f||null==y.return||y.return()}finally{if(p)throw m}}s+=i*(a=-a),o-=i}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}},function(e,t){var n=e>0?1:0,r=4+2*n,i=20-2*n,a=Ii.playerPos.x<Gr.width/2?Gr.width-30:30,s=Gr.height-r*i-60,o=!0,u=!1,c=void 0;try{for(var l,h=ne(r)[Symbol.iterator]();!(o=(l=h.next()).done);o=!0){var d=l.value;af({lap:e,rank:t,hp:1,x:a,y:s+i*d,wait:500})}}catch(e){u=!0,c=e}finally{try{o||null==h.return||h.return()}finally{if(u)throw c}}},function(e,t){var n=Gr.width/2,r={id:0,x:n,y:60,angle:90,fire:!1};cf({lap:e,rank:t,hp:4+2*e,x:n,y:60,me:r});var i=!0,a=!1,s=void 0;try{for(var o,u=[[-100,50],[-60,30],[60,30],[100,50]][Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var c=k(o.value),l=c[0],h=c[1];Ii.isFirstEnemy=!0,lf({lap:e,rank:t,hp:2+e,parent:r,angle:l,dist:h})}}catch(e){a=!0,s=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw s}}},function(e,t){var n=e>0?1:0,r=4+2*n,i=25-9*n,a=Ii.playerPos.x<Gr.width/2?-1:1,s=(Gr.width-(r-1)*i*a)/2,o=Gr.height-50,u=!0,c=!1,l=void 0;try{for(var h,d=ne(r)[Symbol.iterator]();!(u=(h=d.next()).done);u=!0){var f=h.value;of({lap:e,rank:t,hp:1,x:s+f*i*a,y:o,wait:300})}}catch(e){c=!0,l=e}finally{try{u||null==d.return||d.return()}finally{if(c)throw l}}},function(e,t){var n=4+2*(e>0?1:0),r=Ii.playerPos.x<Gr.width/2?Gr.width-30:30,i=Gr.height-40,a=!0,s=!1,o=void 0;try{for(var u,c=ne(n)[Symbol.iterator]();!(a=(u=c.next()).done);a=!0){u.value;uf({lap:e,rank:t,hp:1,x:r,y:i,wait:400})}}catch(e){s=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(s)throw o}}},function(e,t){var n=Gr.width/2,r=Gr.height-50,i={id:0,x:n,y:r,fire:!1,rapidNo:0};hf({lap:e,rank:t,hp:4+2*e,x:n,y:r,y2:80,me:i});for(var a=0;a<360;a+=90)Ii.isFirstEnemy=!0,df({lap:e,rank:t,hp:2+e,parent:i,angle:a-45,dist:50})},function(e,t){var n=e>0?1:0,r=4+2*n,i=20-4*n,a=Ii.playerPos.x<Gr.width/2?Gr.width-i:i,s=Ii.playerPos.x<Gr.width/2?-1:1,o=!0,u=!1,c=void 0;try{for(var l,h=ne(r)[Symbol.iterator]();!(o=(l=h.next()).done);o=!0){var d=l.value;tf({lap:e,rank:t,hp:1,x:a+d*i*s,y:80,wait:600})}}catch(e){u=!0,c=e}finally{try{o||null==h.return||h.return()}finally{if(u)throw c}}},function(e,t){var n=4+2*(e>0?1:0),r=Ii.playerPos.x<Gr.width/2?Gr.width-30:30,i=!0,a=!1,s=void 0;try{for(var o,u=ne(n)[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var c=o.value;nf({lap:e,rank:t,hp:1,x:r,y:50,wait:400,no:c})}}catch(e){a=!0,s=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw s}}},function(e,t){for(var n=Gr.width/2,r={id:0,history:[{x:n,y:100,bullets:null}]},i=4;0<i;i--)Ii.isFirstEnemy=!0,pf({lap:e,rank:t,hp:2+e,x:n,y:100,parent:r,no:i});ff({lap:e,rank:t,hp:4+2*e,x:n,y:100,me:r})},function(e,t){var n=e>0?1:0,r=4+2*n,i=20-4*n,a=Ii.playerPos.x<Gr.width/2?30:Gr.width-30,s=!0,o=!1,u=void 0;try{for(var c,l=ne(r)[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){var h=c.value;sf({lap:e,rank:t,hp:1,x:a,y:50+h*i,y2:Gr.height-40,wait:400})}}catch(e){o=!0,u=e}finally{try{s||null==l.return||l.return()}finally{if(o)throw u}}},function(e,t){var n=2+2*(e>0?1:0),r=2===n?180:90,i=Gr.width/2,a=90*ii.nextInt(4)+45,s=!0,o=!1,u=void 0;try{for(var c,l=ne(n)[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){var h=c.value;rf({lap:e,rank:t,hp:1,x:i,y:130,wait:500,angle:a-r*h})}}catch(e){o=!0,u=e}finally{try{s||null==l.return||l.return()}finally{if(o)throw u}}},function(e,t){var n=Gr.width/2,r=!0,i=!1,a=void 0;try{for(var s,o=[0,180][Symbol.iterator]();!(r=(s=o.next()).done);r=!0){var u=s.value;Ii.isFirstEnemy=!0,mf({lap:e,rank:t,hp:4+2*e,x:n,y:135,angle:u})}}catch(e){i=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(i)throw a}}}],yf=function(e){var t=function(t,n,r,i,a,s){var o=ni.from(a).loopStart().to(-a,s).to(a,s).loopEnd().start(),u=80*i;return function(){u+=i*e;var a=Math.abs(Math.floor(o.value)),s=Math.sign(o.value),c=Math.floor(Gr.width/2-t/2+a/2),l=Math.floor(Gr.width/2+t/2-a/2);Gr.save(),Gr.opacity(r),Gr.drawRect(c,0,l-c,Gr.height,Si.main),Gr.translate(0,Math.floor(u%(2*n)));var h=!0,d=!1,f=void 0;try{for(var p,m=[[c,-1],[l,1]][Symbol.iterator]();!(h=(p=m.next()).done);h=!0){var v=k(p.value),y=v[0],g=v[1],w=s;Gr.save();for(var b=2*-n;b<Gr.height+n/2;b+=n)Gr.save(),Gr.translate(y,b),Gr.scale(g,w),Gr.drawSprite(si.bg,0,0,a,n),Gr.restore(),w=-w;Gr.restore()}}catch(e){d=!0,f=e}finally{try{h||null==m.return||m.return()}finally{if(d)throw f}}Gr.restore()}},n=[t(100,80,.07,3,16,4e3),t(105,120,.06,2.4,24,4500),t(110,160,.05,1.8,32,5e3)];return function(){n.forEach((function(e){return e()}))}},gf=function(e){e?Ei("".concat(e.mode,"_replay"),{replay_id:e.id}):Ei("".concat(Ii.mode,"_play"));var t,n={},r=ct.of(function(e){var t={},n=0,r="ex"===e?2:0,i=0;t.statusInitIn=function(){vf[0](n,r)},t.timeStart=function(){i=0},t.enemyDestroy=function(){i--},t.timeUp=function(){ct.remove(a)},Ii.isFirstEnemy=!0,Ii.enemyWaveId=0,i=1;var a=function(){if(Kr.subscribe(t),i<=0){i=ri.enemyNotice.size;var e=++Ii.enemyWaveId%vf.length;Ii.isFirstEnemy=!0,vf[e](n,r),e===vf.length-1&&(n++,r=Math.min(r+1,2))}};return a}(null!==(t=null==e?void 0:e.mode)&&void 0!==t?t:Ii.mode)),i=ni.from(0).wait(1e3).on((function(){e&&ri.ui.add(function(){var e={timeUp:function(){ct.remove(t)}},t=function(){Kr.subscribe(e),Gr.drawSprite(Sd,re(Gr,Sd),40)};return t}()),Kr.emit("timeStart"),ki.play.play()})),a=ni.from(Si.base).loopStart((function(){return c>0})).to(N.blend(Si.white,Si.accent,.1),500).to(N.blend(Si.white,Si.main,.1),500).loopEnd().to(Si.base,500).start(!1),s=ni.from({x:0,y:0}).to({x:1,y:-1},20).to({x:-1,y:1},40).to({x:1,y:1},40).to({x:-1,y:-1},40).to({x:0,y:0}),o=ni.from({x:0,y:0}).to({x:2,y:-2},20).to({x:-2,y:2},40).to({x:2,y:2},40).to({x:-2,y:-2},40).to({x:1,y:-1},40).to({x:-1,y:1},40).to({x:1,y:1},40).to({x:-1,y:-1},40).to({x:0,y:0}),u=0,c=60*zr.fps,l=void 0,h=ii.updateSeed(),d=!1,f=0;n.statusInitIn=function(){ri.ui.add(function(){var e={},t=ni.from(-100).wait(100).to(44).to(54,300,vt.outSine).wait(600).on((function(){ct.remove(n)})).start();e.timeUp=function(){t.start()};var n=function(){Kr.subscribe(e),Gr.drawSprite(Id,re(Gr,Id),t.value)};return n}()),i.start()},n.enemyTake=function(e){d||e.large&&o.start()},n.playerDestroy=function(){d||(e||Ei("".concat(Ii.mode,"_dead"),{time:c,wave_id:Ii.enemyWaveId-1}),s.start(),f++)},n.statusFinOut=function(){ni.from(0).wait(200).on((function(){ri.ui.add(kd(u,l))})).wait(300).on((function(){ki.result.play(),ki.play.stop()})).start()},n.sceneChange=function(){c>0&&!e&&Ei("".concat(Ii.mode,"_reset"),{time:c,wave_id:Ii.enemyWaveId-1,dead_count:f})};var p=md();ri.ui.add((function(){return p(u,Ii.heart,c)})),ri.player.add(Cd(Boolean(e))),ri.bg.add(yf(1)),Ii.heart=0,Ii.heartRate=0,Ii.isSuccess=!1,Ii.clearing.reset();var m=!0,v=!1,y=void 0;if(e){var g=oe(function(e){var t=[],n=0,r=!0,i=!0,a=!1,s=void 0;try{for(var o,u=e[Symbol.iterator]();!(i=(o=u.next()).done);i=!0){var c=o.value,l=ie.indexOf(c);if(l<0)throw Error("invalid string");r&&16&l&&(n=-1),r=!1,n=n<<5|31&l,0==(32&l)&&(t.push(n),n=0,r=!0)}}catch(e){a=!0,s=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw s}}return t}(e.log),ti.length);ii.seed=e.seed,ti.forEach((function(e,t){e.log=g[t],e.playLog()}))}else try{for(var w,b=ti[Symbol.iterator]();!(m=(w=b.next()).done);m=!0){w.value.recLog()}}catch(e){v=!0,y=e}finally{try{m||null==b.return||b.return()}finally{if(v)throw y}}return function(){if(Kr.subscribe(n),i.done&&c--,0<=c&&c%zr.fps==0&&(u+=10*Ii.heart,Ii.isSuccess=1e6<=u),0===c){e||Ei("".concat(Ii.mode,"_finish"),{wave_id:Ii.enemyWaveId-1,dead_count:f}),d=!0,Kr.emit("timeUp"),ri.ui.add(function(){var e={},t=ni.from(54).to(44,300,vt.outSine).start();e.timeUp=function(){t.start()},e.newRecordShow=function(){ct.remove(n)};var n=function(){Kr.subscribe(e),Gr.drawSprite(Td,re(Gr,Td),t.value)};return n}());var t=!0,p=!1,m=void 0;try{for(var v,y=ti[Symbol.iterator]();!(t=(v=y.next()).done);t=!0){v.value.endLog()}}catch(e){p=!0,m=e}finally{try{t||null==y.return||y.return()}finally{if(p)throw m}}e||(l=le.from(function(e){return Uh.apply(this,arguments)}({version:0,log:ae(se.apply(void 0,I(ti.map((function(e){return e.log}))))),score:u,seed:h,mode:Ii.mode})))}(null==l?void 0:l.isResolved())&&zh(l.value.replayId),Gr.save(),Ii.isSuccess&&a.update(),Gr.drawRect(0,0,Gr.width,Gr.height,a.value),o.running?Gr.translate(o.value.x,o.value.y):s.running&&Gr.translate(s.value.x,s.value.y),r.run(),ri.bg.run(),ri.effectBack.run(),ri.enemyNotice.run(),ri.player.run(),ri.playerBullet.run(),ri.effectOverPlayer.run(),ri.enemy.run(),ri.enemyBullet.run(),ri.effectOverEnemy.run(),Gr.restore(),ri.ui.run()}},wf=function(){var e,t,n,r,i=Hh(),a=i?le.from(function(e){return lh.apply(this,arguments)}(i)):void 0,s=function(){var t;return"ex"===(null!==(e=null==a||null===(t=a.value)||void 0===t?void 0:t.mode)&&void 0!==e?e:Ii.mode)},o=N.blend(Si.white,Si.accent,.1),u=!1;ri.ui.add(Yh(a),function(e){var t=ni.from(!1).wait(1300).on((function(){var t;return!e||0===(null===(t=e.value)||void 0===t?void 0:t.version)})).loopStart().to(!0,800).to(!1,400).loopEnd().start();return function(){t.value&&Gr.drawSprite(ld,re(Gr,ld),215)}}(a),(t=ni.from(!1).to(!0,100).to(!1),n="true"===localStorage.getItem("mute"),r=function(){n=!n,localStorage.setItem("mute",String(n)),Object.values(bi).forEach((function(e){return e.setMute(n)})),Object.values(ki).forEach((function(e){return e.setMute(n)})),t.start(),bi.uiButton.play()},function(){var e,i=Xh[n?1:0],a=(e=i,Gr.width-e.width-7);Xr.onDown(i.toBox(a,7),r),Gr.drawSprite(i,a,7),t.value&&(Gr.save(),Gr.opacity(.5),Gr.drawSprite(Zh,a,7),Gr.restore())})),a?ri.ui.add(function(){var e=ni.from(!1).to(!0,100).to(!1).on((function(){Kr.emit("sceneChange",(function(){return zh(""),wf()}))})),t=function(){e.started||(e.start(),bi.uiButton.play())};return function(){Xr.onDown(ud.toBox(7,7),t),Gr.drawSprite(ud,7,7),e.value&&(Gr.save(),Gr.opacity(.5),Gr.drawSprite(cd,7,7),Gr.restore())}}(),function(e){var t=ni.from(0).wait(500).start(),n=ni.from(0).wait(100),r=od;e.then((function(e){if(!e)throw Error("replay is not found");if(0!==e.version)throw Error("invalid replay version");r=sd,n.to(e.score,300,vt.inSine).start(!1)}));var i=td(115,74,"REPLAY"),a=ad(3,16);return function(){t.done&&(Gr.save(),i((function(e){Gr.translate(e.x,e.y),a(n.update().value),Gr.drawSprite(r,re(e,od),46)})),Gr.restore())}}(a)):ri.ui.add(function(){var e=function(){var e=new URLSearchParams({text:"#FireShooterSan\n".concat(Bh())});window.open("https://twitter.com/intent/tweet?".concat(e))};return function(){Xr.onDown(Jh.toBox(7,7),e),Gr.drawSprite(Jh,7,7)}}(),function(){var e,t=Number(null!==(e=localStorage.getItem("tips-no"))&&void 0!==e?e:-1);t=(t+1)%12,localStorage.setItem("tips-no",String(t));var n=nd[t];11===t&&Ei("tips_complete");var r=ni.from(0).wait(700).start(),i=ni.from(!1).loopStart().to(!1,800).to(!0,800).loopEnd().start(!1),a=ni.from(!1).loopStart().to(!1,200).to(!0,200).loopEnd().start(!1),s=td(130,Math.max(n.height+12,60),"TIPS ".concat(t+1,"/").concat(12));return function(){r.done&&s((function(e){Gr.save(),Gr.translate(e.x+re(e,n)|0,e.y+function(e,t){return(e.height-t.height)/2}(e,n)|0),Gr.drawSprite(n),i.update(),a.update(),0===t&&a.value&&Gr.drawSprite(nd.million,39,31),1===t&&a.value&&Gr.drawRect(90,18,2,2,Si.white),1===t&&i.value&&Gr.drawSprite(nd.arrow,63,16),2===t&&i.value&&Gr.drawSprite(nd.heart,0,16),3===t&&i.value&&(Gr.drawSprite(nd.heart,41,1),Gr.drawSprite(nd.heart,40,31)),4===t&&i.value&&Gr.drawSprite(nd.heart,41,31),5===t&&i.value&&(Gr.drawSprite(nd.heart,51,1),Gr.drawSprite(nd.score,40,17)),6===t&&a.value&&Gr.drawSprite(nd.million,0,2),10===t&&i.value&&Gr.drawSprite(nd.user,0,14),Gr.restore()}))}}()),ri.bg.add(yf(.3)),Object.values(ki).forEach((function(e){return e.stop()})),Si.base=s()?o:Si.white;var c=ni.from(Si.base),l=s();return function(){var e;if(l!==s()&&(l=s(),Si.base=s()?o:Si.white,c.end(),c=ni.from(c.value).to(Si.base,300).start()),!u&&(!a||0===(null===(e=a.value)||void 0===e?void 0:e.version))&&ei.some((function(e){return e.isDownChange}))){u=!0;ri.ui.add(bd({times:2,onEnd:function(){Kr.emit("sceneChange",(function(){return gf(null==a?void 0:a.value)}))}})),bi.titleStart.play()}Gr.drawRect(0,0,Gr.width,Gr.height,c.value),ri.bg.run(),ri.ui.run()}};var bf,_f={},kf=wf,If=kf(),Sf=ni.from(0).wait(100).to(Gr.height,200).start(),Tf=ni.from(-Gr.height).to(0,200).on((function(){ni.clear(),Object.values(Jr).forEach((function(e){return e.endLog()})),Xr.endLog(),Object.values(ri).forEach((function(e){return e.clear()})),If=kf(),Sf.start()}));_f.sceneChange=function(e){kf=e,Tf.start()},jh=function(){return Kr.emit("sceneChange",wf)},bf="true"===localStorage.getItem("mute"),Object.values(bi).forEach((function(e){return e.setMute(bf)})),Object.values(ki).forEach((function(e){return e.setMute(bf)})),Ii.mode=Wh(),zr.proc=function(){Gr.clear(),Kr.clear(),Yr.clear(),Object.values(Jr).forEach((function(e){return e.update()})),Xr.update(),ni.update(),Kr.subscribe(_f),Jr.reset.isDownChange&&!Tf.running&&Kr.emit("sceneChange",(function(){return zh(""),wf()})),If();var e=[Sf,Tf].find((function(e){return e.running}));e&&Gr.drawRect(0,e.value,Gr.width,Gr.height,Si.base)}}();