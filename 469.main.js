(()=>{"use strict";var e={},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>e+".main.js",n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/layout",(()=>{n.b=self.location+"";var e={469:1};n.f.i=(t,r)=>{e[t]||importScripts(n.p+n.u(t))};var t=self.webpackChunkgetting_started_using_a_configuration=self.webpackChunkgetting_started_using_a_configuration||[],r=t.push.bind(t);t.push=t=>{var[a,o,i]=t;for(var s in o)n.o(o,s)&&(n.m[s]=o[s]);for(i&&i(n);a.length;)e[a.pop()]=1;r(t)}})();var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},r.apply(this,arguments)};Object.create,Object.create;const a=Symbol("Comlink.proxy"),o=Symbol("Comlink.endpoint"),i=Symbol("Comlink.releaseProxy"),s=Symbol("Comlink.finalizer"),c=Symbol("Comlink.thrown"),u=e=>"object"==typeof e&&null!==e||"function"==typeof e,l=new Map([["proxy",{canHandle:e=>u(e)&&e[a],serialize(e){const{port1:t,port2:n}=new MessageChannel;return f(e,t),[n,[n]]},deserialize:e=>(e.start(),v(e,[],undefined))}],["throw",{canHandle:e=>u(e)&&c in e,serialize({value:e}){let t;return t=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[t,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}}]]);function f(e,t=globalThis,n=["*"]){t.addEventListener("message",(function r(a){if(!a||!a.data)return;if(!function(e,t){for(const n of e){if(t===n||"*"===n)return!0;if(n instanceof RegExp&&n.test(t))return!0}return!1}(n,a.origin))return void console.warn(`Invalid origin '${a.origin}' for comlink proxy`);const{id:o,type:i,path:u}=Object.assign({path:[]},a.data),l=(a.data.argumentList||[]).map(_);let d;try{const t=u.slice(0,-1).reduce(((e,t)=>e[t]),e),n=u.reduce(((e,t)=>e[t]),e);switch(i){case"GET":d=n;break;case"SET":t[u.slice(-1)[0]]=_(a.data.value),d=!0;break;case"APPLY":d=n.apply(t,l);break;case"CONSTRUCT":d=E(new n(...l));break;case"ENDPOINT":{const{port1:t,port2:n}=new MessageChannel;f(e,n),d=w(t,[t])}break;case"RELEASE":d=void 0;break;default:return}}catch(e){d={value:e,[c]:0}}Promise.resolve(d).catch((e=>({value:e,[c]:0}))).then((n=>{const[a,c]=k(n);t.postMessage(Object.assign(Object.assign({},a),{id:o}),c),"RELEASE"===i&&(t.removeEventListener("message",r),p(t),s in e&&"function"==typeof e[s]&&e[s]())})).catch((e=>{const[n,r]=k({value:new TypeError("Unserializable return value"),[c]:0});t.postMessage(Object.assign(Object.assign({},n),{id:o}),r)}))})),t.start&&t.start()}function p(e){(function(e){return"MessagePort"===e.constructor.name})(e)&&e.close()}function d(e){if(e)throw new Error("Proxy has been released and is not useable")}function h(e){return S(e,{type:"RELEASE"}).then((()=>{p(e)}))}const g=new WeakMap,m="FinalizationRegistry"in globalThis&&new FinalizationRegistry((e=>{const t=(g.get(e)||0)-1;g.set(e,t),0===t&&h(e)}));function v(e,t=[],n=function(){}){let r=!1;const a=new Proxy(n,{get(n,o){if(d(r),o===i)return()=>{!function(e){m&&m.unregister(e)}(a),h(e),r=!0};if("then"===o){if(0===t.length)return{then:()=>a};const n=S(e,{type:"GET",path:t.map((e=>e.toString()))}).then(_);return n.then.bind(n)}return v(e,[...t,o])},set(n,a,o){d(r);const[i,s]=k(o);return S(e,{type:"SET",path:[...t,a].map((e=>e.toString())),value:i},s).then(_)},apply(n,a,i){d(r);const s=t[t.length-1];if(s===o)return S(e,{type:"ENDPOINT"}).then(_);if("bind"===s)return v(e,t.slice(0,-1));const[c,u]=b(i);return S(e,{type:"APPLY",path:t.map((e=>e.toString())),argumentList:c},u).then(_)},construct(n,a){d(r);const[o,i]=b(a);return S(e,{type:"CONSTRUCT",path:t.map((e=>e.toString())),argumentList:o},i).then(_)}});return function(e,t){const n=(g.get(t)||0)+1;g.set(t,n),m&&m.register(e,t,e)}(a,e),a}function b(e){const t=e.map(k);return[t.map((e=>e[0])),(n=t.map((e=>e[1])),Array.prototype.concat.apply([],n))];var n}const y=new WeakMap;function w(e,t){return y.set(e,t),e}function E(e){return Object.assign(e,{[a]:!0})}function k(e){for(const[t,n]of l)if(n.canHandle(e)){const[r,a]=n.serialize(e);return[{type:"HANDLER",name:t,value:r},a]}return[{type:"RAW",value:e},y.get(e)||[]]}function _(e){switch(e.type){case"HANDLER":return l.get(e.name).deserialize(e.value);case"RAW":return e.value}}function S(e,t,n){return new Promise((r=>{const a=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");e.addEventListener("message",(function t(n){n.data&&n.data.id&&n.data.id===a&&(e.removeEventListener("message",t),r(n.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},t),n)}))}var O={dimensions:2,chunk_size:256,min_movement:.4,distance_threshold_mode:0,ka:0,kg:0,kr:0,speed:0,prevent_overlapping:!1,kr_prime:0,node_radius:0,strong_gravity:!1,lin_log:!1,dissuade_hubs:!1,edge_strength:0,link_distance:0,node_strength:0,coulomb_dis_scale:0,factor:0,interval:0,damping:0,center:[0,0],max_speed:0,max_distance:100},j=function(e,t){return function(n){var a=r(r({name:e},O),n);if(2===e){var o=a.width*a.height,i=Math.sqrt(o)/10,s=o/(a.nodes.length+1),c=Math.sqrt(s);a.ka=c,a.interval=.99,a.damping=i}var u=t(a);return{nodes:w(u,[u])}}};function P(e){var t=e.force;return{forceatlas2:j(0,t),force2:j(1,t),fruchterman:j(2,t)}}f((function(e){return t=this,r=void 0,o=function(){var t,r;return function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(s){return function(c){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o&&(o=0,s[0]&&(i=0)),i;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1],a=s;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(s);break}a[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,c])}}}(this,(function(a){switch(a.label){case 0:return e?[4,n.e(589).then(n.bind(n,665))]:[3,4];case 1:return[4,(t=a.sent()).default()];case 2:return a.sent(),[4,t.initThreadPool(navigator.hardwareConcurrency)];case 3:return a.sent(),[2,E(P(t))];case 4:return[4,n.e(76).then(n.bind(n,76))];case 5:return[4,(r=a.sent()).default()];case 6:return a.sent(),[2,E(P(r))]}}))},new((a=void 0)||(a=Promise))((function(e,n){function i(e){try{c(o.next(e))}catch(e){n(e)}}function s(e){try{c(o.throw(e))}catch(e){n(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof a?n:new a((function(e){e(n)}))).then(i,s)}c((o=o.apply(t,r||[])).next())}));var t,r,a,o}))})();