"use strict";(self.webpackChunkgetting_started_using_a_configuration=self.webpackChunkgetting_started_using_a_configuration||[]).push([[589,665,83],{665:(n,e,t)=>{t.r(e),t.d(e,{default:()=>O,force:()=>I,initSync:()=>M,initThreadPool:()=>j,start:()=>W,wbg_rayon_PoolBuilder:()=>U,wbg_rayon_start_worker:()=>x});var r=t(83);let i;const o=new Array(32).fill(void 0);function _(n){return o[n]}function u(n){return null==n}o.push(void 0,null,!0,!1);let c=new Float64Array,a=new Int32Array;function b(){return a.buffer!==i.memory.buffer&&(a=new Int32Array(i.memory.buffer)),a}let f=o.length;function s(n){const e=_(n);return function(n){n<36||(o[n]=f,f=n)}(n),e}let w=new BigInt64Array;function g(n){f===o.length&&o.push(o.length+1);const e=f;return f=o[e],o[e]=n,e}const l=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});l.decode();let d=new Uint8Array;function y(){return d.buffer!==i.memory.buffer&&(d=new Uint8Array(i.memory.buffer)),d}function m(n,e){return l.decode(y().slice(n,n+e))}let p=0;const h=new TextEncoder("utf-8"),A=function(n,e){const t=h.encode(n);return e.set(t),{read:n.length,written:t.length}};function v(n,e,t){if(void 0===t){const t=h.encode(n),r=e(t.length);return y().subarray(r,r+t.length).set(t),p=t.length,r}let r=n.length,i=e(r);const o=y();let _=0;for(;_<r;_++){const e=n.charCodeAt(_);if(e>127)break;o[i+_]=e}if(_!==r){0!==_&&(n=n.slice(_)),i=t(i,r,r=_+3*n.length);const e=y().subarray(i+_,i+r);_+=A(n,e).written}return p=_,i}function k(n){const e=typeof n;if("number"==e||"boolean"==e||null==n)return`${n}`;if("string"==e)return`"${n}"`;if("symbol"==e){const e=n.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==e){const e=n.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(n)){const e=n.length;let t="[";e>0&&(t+=k(n[0]));for(let r=1;r<e;r++)t+=", "+k(n[r]);return t+="]",t}const t=/\[object ([^\]]+)\]/.exec(toString.call(n));let r;if(!(t.length>1))return toString.call(n);if(r=t[1],"Object"==r)try{return"Object("+JSON.stringify(n)+")"}catch(n){return"Object"}return n instanceof Error?`${n.name}: ${n.message}\n${n.stack}`:r}function W(){i.start()}function I(n){return s(i.force(g(n)))}function S(n,e){try{return n.apply(this,e)}catch(n){i.__wbindgen_exn_store(g(n))}}function j(n){return s(i.initThreadPool(n))}function x(n){i.wbg_rayon_start_worker(n)}class U{static __wrap(n){const e=Object.create(U.prototype);return e.ptr=n,e}__destroy_into_raw(){const n=this.ptr;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();i.__wbg_wbg_rayon_poolbuilder_free(n)}numThreads(){return i.wbg_rayon_poolbuilder_numThreads(this.ptr)>>>0}receiver(){return i.wbg_rayon_poolbuilder_receiver(this.ptr)}build(){i.wbg_rayon_poolbuilder_build(this.ptr)}}function B(){const n={wbg:{}};return n.wbg.__wbindgen_number_get=function(n,e){const t=_(e),r="number"==typeof t?t:void 0;(c.buffer!==i.memory.buffer&&(c=new Float64Array(i.memory.buffer)),c)[n/8+1]=u(r)?0:r,b()[n/4+0]=!u(r)},n.wbg.__wbindgen_object_drop_ref=function(n){s(n)},n.wbg.__wbindgen_is_bigint=function(n){return"bigint"==typeof _(n)},n.wbg.__wbindgen_bigint_get_as_i64=function(n,e){const t=_(e),r="bigint"==typeof t?t:void 0;(w.buffer!==i.memory.buffer&&(w=new BigInt64Array(i.memory.buffer)),w)[n/8+1]=u(r)?0n:r,b()[n/4+0]=!u(r)},n.wbg.__wbindgen_bigint_from_u64=function(n){return g(BigInt.asUintN(64,n))},n.wbg.__wbindgen_jsval_eq=function(n,e){return _(n)===_(e)},n.wbg.__wbindgen_error_new=function(n,e){return g(new Error(m(n,e)))},n.wbg.__wbg_isArray_27c46c67f498e15d=function(n){return Array.isArray(_(n))},n.wbg.__wbg_length_6e3bbe7c8bd4dbd8=function(n){return _(n).length},n.wbg.__wbindgen_is_object=function(n){const e=_(n);return"object"==typeof e&&null!==e},n.wbg.__wbindgen_string_new=function(n,e){return g(m(n,e))},n.wbg.__wbindgen_object_clone_ref=function(n){return g(_(n))},n.wbg.__wbg_getwithrefkey_5e6d9547403deab8=function(n,e){return g(_(n)[_(e)])},n.wbg.__wbindgen_is_undefined=function(n){return void 0===_(n)},n.wbg.__wbindgen_in=function(n,e){return _(n)in _(e)},n.wbg.__wbg_get_57245cc7d7c7619d=function(n,e){return g(_(n)[e>>>0])},n.wbg.__wbg_new_1d9a920c6bfc44a8=function(){return g(new Array)},n.wbg.__wbindgen_number_new=function(n){return g(n)},n.wbg.__wbg_push_740e4b286702d964=function(n,e){return _(n).push(_(e))},n.wbg.__wbindgen_boolean_get=function(n){const e=_(n);return"boolean"==typeof e?e?1:0:2},n.wbg.__wbg_new_abda76e883ba8a5f=function(){return g(new Error)},n.wbg.__wbg_stack_658279fe44541cf6=function(n,e){const t=v(_(e).stack,i.__wbindgen_malloc,i.__wbindgen_realloc),r=p;b()[n/4+1]=r,b()[n/4+0]=t},n.wbg.__wbg_error_f851667af71bcfc6=function(n,e){try{console.error(m(n,e))}finally{i.__wbindgen_free(n,e)}},n.wbg.__wbg_next_aaef7c8aa5e212ac=function(){return S((function(n){return g(_(n).next())}),arguments)},n.wbg.__wbg_done_1b73b0672e15f234=function(n){return _(n).done},n.wbg.__wbg_value_1ccc36bc03462d71=function(n){return g(_(n).value)},n.wbg.__wbg_iterator_6f9d4f28845f426c=function(){return g(Symbol.iterator)},n.wbg.__wbg_get_765201544a2b6869=function(){return S((function(n,e){return g(Reflect.get(_(n),_(e)))}),arguments)},n.wbg.__wbindgen_is_function=function(n){return"function"==typeof _(n)},n.wbg.__wbg_call_97ae9d8645dc388b=function(){return S((function(n,e){return g(_(n).call(_(e)))}),arguments)},n.wbg.__wbg_next_579e583d33566a86=function(n){return g(_(n).next)},n.wbg.__wbg_length_9e1ae1900cb0fbd5=function(n){return _(n).length},n.wbg.__wbindgen_memory=function(){return g(i.memory)},n.wbg.__wbg_buffer_3f3d764d4747d564=function(n){return g(_(n).buffer)},n.wbg.__wbg_new_8c3f0052272a457a=function(n){return g(new Uint8Array(_(n)))},n.wbg.__wbg_set_83db9690f9353e79=function(n,e,t){_(n).set(_(e),t>>>0)},n.wbg.__wbindgen_jsval_loose_eq=function(n,e){return _(n)==_(e)},n.wbg.__wbindgen_string_get=function(n,e){const t=_(e),r="string"==typeof t?t:void 0;var o=u(r)?0:v(r,i.__wbindgen_malloc,i.__wbindgen_realloc),c=p;b()[n/4+1]=c,b()[n/4+0]=o},n.wbg.__wbg_instanceof_Uint8Array_971eeda69eb75003=function(n){let e;try{e=_(n)instanceof Uint8Array}catch{e=!1}return e},n.wbg.__wbg_instanceof_ArrayBuffer_e5e48f4762c5610b=function(n){let e;try{e=_(n)instanceof ArrayBuffer}catch{e=!1}return e},n.wbg.__wbg_isSafeInteger_dfa0593e8d7ac35a=function(n){return Number.isSafeInteger(_(n))},n.wbg.__wbindgen_debug_string=function(n,e){const t=v(k(_(e)),i.__wbindgen_malloc,i.__wbindgen_realloc),r=p;b()[n/4+1]=r,b()[n/4+0]=t},n.wbg.__wbindgen_throw=function(n,e){throw new Error(m(n,e))},n.wbg.__wbindgen_module=function(){return g(T.__wbindgen_wasm_module)},n.wbg.__wbg_startWorkers_6fd3af285ea11136=function(n,e,t){return g((0,r.Q)(s(n),s(e),U.__wrap(t)))},n}function R(n,e){n.wbg.memory=e||new WebAssembly.Memory({initial:18,maximum:16384,shared:!0})}function E(n,e){return i=n.exports,T.__wbindgen_wasm_module=e,w=new BigInt64Array,c=new Float64Array,a=new Int32Array,d=new Uint8Array,i.__wbindgen_start(),i}function M(n,e){const t=B();return R(t,e),n instanceof WebAssembly.Module||(n=new WebAssembly.Module(n)),E(new WebAssembly.Instance(n,t),n)}async function T(n,e){void 0===n&&(n=new URL(t(952),t.b));const r=B();("string"==typeof n||"function"==typeof Request&&n instanceof Request||"function"==typeof URL&&n instanceof URL)&&(n=fetch(n)),R(r,e);const{instance:i,module:o}=await async function(n,e){if("function"==typeof Response&&n instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(n,e)}catch(e){if("application/wasm"==n.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const t=await n.arrayBuffer();return await WebAssembly.instantiate(t,e)}{const t=await WebAssembly.instantiate(n,e);return t instanceof WebAssembly.Instance?{instance:t,module:n}:t}}(await n,r);return E(i,o)}const O=T},83:(n,e,t)=>{function r(n,e){return new Promise((t=>{n.addEventListener("message",(function r({data:i}){null!=i&&i.type===e&&(n.removeEventListener("message",r),t(i))}))}))}let i;async function o(n,e,o){const _={type:"wasm_bindgen_worker_init",module:n,memory:e,receiver:o.receiver()};i=await Promise.all(Array.from({length:o.numThreads()},(async()=>{const n=new Worker(new URL(t.p+t.u(83),t.b),{type:void 0});return n.postMessage(_),await r(n,"wasm_bindgen_worker_ready"),n}))),o.build()}t.d(e,{Q:()=>o}),r(self,"wasm_bindgen_worker_init").then((async n=>{const e=await t.e(665).then(t.bind(t,665));await e.default(n.module,n.memory),postMessage({type:"wasm_bindgen_worker_ready"}),e.wbg_rayon_start_worker(n.receiver)}))},952:(n,e,t)=>{n.exports=t.p+"1111bf74c07784c14cfa.wasm"}}]);