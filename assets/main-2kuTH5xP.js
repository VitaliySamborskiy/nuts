(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var $u=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ll={exports:{}};(function(n,e){(function(r,i){n.exports=i()})($u,function(){return function(t){var r={};function i(s){if(r[s])return r[s].exports;var a=r[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=t,i.c=r,i.d=function(s,a,l){i.o(s,a)||Object.defineProperty(s,a,{enumerable:!0,get:l})},i.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},i.t=function(s,a){if(a&1&&(s=i(s)),a&8||a&4&&typeof s=="object"&&s&&s.__esModule)return s;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:s}),a&2&&typeof s!="string")for(var c in s)i.d(l,c,(function(d){return s[d]}).bind(null,c));return l},i.n=function(s){var a=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(a,"a",a),a},i.o=function(s,a){return Object.prototype.hasOwnProperty.call(s,a)},i.p="",i(i.s=0)}([function(t,r,i){i.r(r);var s=function(w){return Array.isArray(w)?w:[w]},a=function(w){return w instanceof Node},l=function(w){return w instanceof NodeList},c=function(w,L){if(w&&L){w=l(w)?w:[w];for(var z=0;z<w.length&&L(w[z],z,w.length)!==!0;z++);}},d=function(w){return console.error("[scroll-lock] ".concat(w))},f=function(w){if(Array.isArray(w)){var L=w.join(", ");return L}},m=function(w){var L=[];return c(w,function(z){return L.push(z)}),L},T=function(w,L){var z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,j=arguments.length>3&&arguments[3]!==void 0?arguments[3]:document;if(z&&m(j.querySelectorAll(L)).indexOf(w)!==-1)return w;for(;(w=w.parentElement)&&m(j.querySelectorAll(L)).indexOf(w)===-1;);return w},I=function(w,L){var z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document,j=m(z.querySelectorAll(L)).indexOf(w)!==-1;return j},A=function(w){if(w){var L=getComputedStyle(w),z=L.overflow==="hidden";return z}},R=function(w){if(w){if(A(w))return!0;var L=w.scrollTop;return L<=0}},C=function(w){if(w){if(A(w))return!0;var L=w.scrollTop,z=w.scrollHeight,j=L+w.offsetHeight;return j>=z}},V=function(w){if(w){if(A(w))return!0;var L=w.scrollLeft;return L<=0}},M=function(w){if(w){if(A(w))return!0;var L=w.scrollLeft,z=w.scrollWidth,j=L+w.offsetWidth;return j>=z}},k=function(w){var L='textarea, [contenteditable="true"]';return I(w,L)},N=function(w){var L='input[type="range"]';return I(w,L)};i.d(r,"disablePageScroll",function(){return v}),i.d(r,"enablePageScroll",function(){return E}),i.d(r,"getScrollState",function(){return S}),i.d(r,"clearQueueScrollLocks",function(){return _}),i.d(r,"getTargetScrollBarWidth",function(){return Y}),i.d(r,"getCurrentTargetScrollBarWidth",function(){return ie}),i.d(r,"getPageScrollBarWidth",function(){return Oe}),i.d(r,"getCurrentPageScrollBarWidth",function(){return $e}),i.d(r,"addScrollableTarget",function(){return Me}),i.d(r,"removeScrollableTarget",function(){return Qe}),i.d(r,"addScrollableSelector",function(){return mt}),i.d(r,"removeScrollableSelector",function(){return Kt}),i.d(r,"addLockableTarget",function(){return Ne}),i.d(r,"addLockableSelector",function(){return me}),i.d(r,"setFillGapMethod",function(){return gr}),i.d(r,"addFillGapTarget",function(){return rt}),i.d(r,"removeFillGapTarget",function(){return _r}),i.d(r,"addFillGapSelector",function(){return it}),i.d(r,"removeFillGapSelector",function(){return yr}),i.d(r,"refillGaps",function(){return Qt});function B(U){for(var w=1;w<arguments.length;w++){var L=arguments[w]!=null?arguments[w]:{},z=Object.keys(L);typeof Object.getOwnPropertySymbols=="function"&&(z=z.concat(Object.getOwnPropertySymbols(L).filter(function(j){return Object.getOwnPropertyDescriptor(L,j).enumerable}))),z.forEach(function(j){$(U,j,L[j])})}return U}function $(U,w,L){return w in U?Object.defineProperty(U,w,{value:L,enumerable:!0,configurable:!0,writable:!0}):U[w]=L,U}var b=["padding","margin","width","max-width","none"],y=3,g={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:b[0],startTouchY:0,startTouchX:0},v=function(w){g.queue<=0&&(g.scroll=!1,gt(),Pn()),Me(w),g.queue++},E=function(w){g.queue>0&&g.queue--,g.queue<=0&&(g.scroll=!0,Yt(),Si()),Qe(w)},S=function(){return g.scroll},_=function(){g.queue=0},Y=function(w){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a(w)){var z=w.style.overflowY;L?S()||(w.style.overflowY=w.getAttribute("data-scroll-lock-saved-overflow-y-property")):w.style.overflowY="scroll";var j=ie(w);return w.style.overflowY=z,j}else return 0},ie=function(w){if(a(w))if(w===document.body){var L=document.documentElement.clientWidth,z=window.innerWidth,j=z-L;return j}else{var je=w.style.borderLeftWidth,Ye=w.style.borderRightWidth;w.style.borderLeftWidth="0px",w.style.borderRightWidth="0px";var qe=w.offsetWidth-w.clientWidth;return w.style.borderLeftWidth=je,w.style.borderRightWidth=Ye,qe}else return 0},Oe=function(){var w=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return Y(document.body,w)},$e=function(){return ie(document.body)},Me=function(w){if(w){var L=s(w);L.map(function(z){c(z,function(j){a(j)?j.setAttribute("data-scroll-lock-scrollable",""):d('"'.concat(j,'" is not a Element.'))})})}},Qe=function(w){if(w){var L=s(w);L.map(function(z){c(z,function(j){a(j)?j.removeAttribute("data-scroll-lock-scrollable"):d('"'.concat(j,'" is not a Element.'))})})}},mt=function(w){if(w){var L=s(w);L.map(function(z){g.scrollableSelectors.push(z)})}},Kt=function(w){if(w){var L=s(w);L.map(function(z){g.scrollableSelectors=g.scrollableSelectors.filter(function(j){return j!==z})})}},Ne=function(w){if(w){var L=s(w);L.map(function(z){c(z,function(j){a(j)?j.setAttribute("data-scroll-lock-lockable",""):d('"'.concat(j,'" is not a Element.'))})}),S()||gt()}},me=function(w){if(w){var L=s(w);L.map(function(z){g.lockableSelectors.push(z)}),S()||gt(),it(w)}},gr=function(w){if(w)if(b.indexOf(w)!==-1)g.fillGapMethod=w,Qt();else{var L=b.join(", ");d('"'.concat(w,`" method is not available!
Available fill gap methods: `).concat(L,"."))}},rt=function(w){if(w){var L=s(w);L.map(function(z){c(z,function(j){a(j)?(j.setAttribute("data-scroll-lock-fill-gap",""),g.scroll||Rn(j)):d('"'.concat(j,'" is not a Element.'))})})}},_r=function(w){if(w){var L=s(w);L.map(function(z){c(z,function(j){a(j)?(j.removeAttribute("data-scroll-lock-fill-gap"),g.scroll||Jt(j)):d('"'.concat(j,'" is not a Element.'))})})}},it=function(w){if(w){var L=s(w);L.map(function(z){g.fillGapSelectors.indexOf(z)===-1&&(g.fillGapSelectors.push(z),g.scroll||vr(z))})}},yr=function(w){if(w){var L=s(w);L.map(function(z){g.fillGapSelectors=g.fillGapSelectors.filter(function(j){return j!==z}),g.scroll||Xt(z)})}},Qt=function(){g.scroll||Pn()},gt=function(){var w=f(g.lockableSelectors);In(w)},Yt=function(){var w=f(g.lockableSelectors);Sn(w)},In=function(w){var L=document.querySelectorAll(w);c(L,function(z){An(z)})},Sn=function(w){var L=document.querySelectorAll(w);c(L,function(z){bn(z)})},An=function(w){if(a(w)&&w.getAttribute("data-scroll-lock-locked")!=="true"){var L=window.getComputedStyle(w);w.setAttribute("data-scroll-lock-saved-overflow-y-property",L.overflowY),w.setAttribute("data-scroll-lock-saved-inline-overflow-property",w.style.overflow),w.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",w.style.overflowY),w.style.overflow="hidden",w.setAttribute("data-scroll-lock-locked","true")}},bn=function(w){a(w)&&w.getAttribute("data-scroll-lock-locked")==="true"&&(w.style.overflow=w.getAttribute("data-scroll-lock-saved-inline-overflow-property"),w.style.overflowY=w.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),w.removeAttribute("data-scroll-lock-saved-overflow-property"),w.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),w.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),w.removeAttribute("data-scroll-lock-locked"))},Pn=function(){g.fillGapSelectors.map(function(w){vr(w)})},Si=function(){g.fillGapSelectors.map(function(w){Xt(w)})},vr=function(w){var L=document.querySelectorAll(w),z=g.lockableSelectors.indexOf(w)!==-1;c(L,function(j){Rn(j,z)})},Rn=function(w){var L=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a(w)){var z;if(w.getAttribute("data-scroll-lock-lockable")===""||L)z=Y(w,!0);else{var j=T(w,f(g.lockableSelectors));z=Y(j,!0)}w.getAttribute("data-scroll-lock-filled-gap")==="true"&&Jt(w);var je=window.getComputedStyle(w);if(w.setAttribute("data-scroll-lock-filled-gap","true"),w.setAttribute("data-scroll-lock-current-fill-gap-method",g.fillGapMethod),g.fillGapMethod==="margin"){var Ye=parseFloat(je.marginRight);w.style.marginRight="".concat(Ye+z,"px")}else if(g.fillGapMethod==="width")w.style.width="calc(100% - ".concat(z,"px)");else if(g.fillGapMethod==="max-width")w.style.maxWidth="calc(100% - ".concat(z,"px)");else if(g.fillGapMethod==="padding"){var qe=parseFloat(je.paddingRight);w.style.paddingRight="".concat(qe+z,"px")}}},Xt=function(w){var L=document.querySelectorAll(w);c(L,function(z){Jt(z)})},Jt=function(w){if(a(w)&&w.getAttribute("data-scroll-lock-filled-gap")==="true"){var L=w.getAttribute("data-scroll-lock-current-fill-gap-method");w.removeAttribute("data-scroll-lock-filled-gap"),w.removeAttribute("data-scroll-lock-current-fill-gap-method"),L==="margin"?w.style.marginRight="":L==="width"?w.style.width="":L==="max-width"?w.style.maxWidth="":L==="padding"&&(w.style.paddingRight="")}},Ai=function(w){Qt()},Cn=function(w){g.scroll||(g.startTouchY=w.touches[0].clientY,g.startTouchX=w.touches[0].clientX)},xn=function(w){if(!g.scroll){var L=g.startTouchY,z=g.startTouchX,j=w.touches[0].clientY,je=w.touches[0].clientX;if(w.touches.length<2){var Ye=f(g.scrollableSelectors),qe={up:L<j,down:L>j,left:z<je,right:z>je},Zt={up:L+y<j,down:L-y>j,left:z+y<je,right:z-y>je},bi=function en(de){var wr=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(de){var st=T(de,Ye,!1);if(N(de))return!1;if(wr||k(de)&&T(de,Ye)||I(de,Ye)){var _t=!1;V(de)&&M(de)?(qe.up&&R(de)||qe.down&&C(de))&&(_t=!0):R(de)&&C(de)?(qe.left&&V(de)||qe.right&&M(de))&&(_t=!0):(Zt.up&&R(de)||Zt.down&&C(de)||Zt.left&&V(de)||Zt.right&&M(de))&&(_t=!0),_t&&(st?en(st,!0):w.cancelable&&w.preventDefault())}else en(st)}else w.cancelable&&w.preventDefault()};bi(w.target)}}},Tr=function(w){g.scroll||(g.startTouchY=0,g.startTouchX=0)};typeof window<"u"&&window.addEventListener("resize",Ai),typeof document<"u"&&(document.addEventListener("touchstart",Cn),document.addEventListener("touchmove",xn,{passive:!1}),document.addEventListener("touchend",Tr));var ye={hide:function(w){d(`"hide" is deprecated! Use "disablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget`),v(w)},show:function(w){d(`"show" is deprecated! Use "enablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget`),E(w)},toggle:function(w){d('"toggle" is deprecated! Do not use it.'),S()?v():E(w)},getState:function(){return d(`"getState" is deprecated! Use "getScrollState" instead. 
 https://github.com/FL3NKEY/scroll-lock#getscrollstate`),S()},getWidth:function(){return d(`"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth`),Oe()},getCurrentWidth:function(){return d(`"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth`),$e()},setScrollableTargets:function(w){d(`"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget`),Me(w)},setFillGapSelectors:function(w){d(`"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector`),it(w)},setFillGapTargets:function(w){d(`"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget`),rt(w)},clearQueue:function(){d(`"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. 
 https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks`),_()}},Te=B({disablePageScroll:v,enablePageScroll:E,getScrollState:S,clearQueueScrollLocks:_,getTargetScrollBarWidth:Y,getCurrentTargetScrollBarWidth:ie,getPageScrollBarWidth:Oe,getCurrentPageScrollBarWidth:$e,addScrollableSelector:mt,removeScrollableSelector:Kt,addScrollableTarget:Me,removeScrollableTarget:Qe,addLockableSelector:me,addLockableTarget:Ne,addFillGapSelector:it,removeFillGapSelector:yr,addFillGapTarget:rt,removeFillGapTarget:_r,setFillGapMethod:gr,refillGaps:Qt,_state:g},ye);r.default=Te}]).default})})(ll);var ea=ll.exports;function oe(n,e=null,t=null){switch(e){case"all":return document.querySelectorAll(n);case"id":return document.getElementById(n);case"custom":return t.querySelector(n);case"customAll":return t.querySelectorAll(n);default:return document.querySelector(n)}}function Wu(){const n=oe(".burger"),e=oe(".burger__background"),t=oe(".burger__scroll");n.addEventListener("click",r=>{const i=r.target.closest(".burger__icon"),s=r.target.closest(".burger__close");i&&(e.classList.toggle("burger__background_active"),ea.disablePageScroll(t)),s&&(e.classList.remove("burger__background_active"),ea.enablePageScroll(t))})}var ta={};/**
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
 */const cl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ku=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},ul={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,c=i+2<n.length,d=c?n[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let T=(l&15)<<2|d>>6,I=d&63;c||(I=64,a||(T=64)),r.push(t[f],t[m],t[T],t[I])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(cl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ku(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||d==null||m==null)throw new Qu;const T=s<<2|l>>4;if(r.push(T),d!==64){const I=l<<4&240|d>>2;if(r.push(I),m!==64){const A=d<<6&192|m;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Qu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yu=function(n){const e=cl(n);return ul.encodeByteArray(e,!0)},Xr=function(n){return Yu(n).replace(/\./g,"")},Xu=function(n){try{return ul.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ju(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu=()=>Ju().__FIREBASE_DEFAULTS__,eh=()=>{if(typeof process>"u"||typeof ta>"u")return;const n=ta.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},th=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Xu(n[1]);return e&&JSON.parse(e)},ui=()=>{try{return Zu()||eh()||th()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},nh=n=>{var e,t;return(t=(e=ui())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},hl=n=>{const e=nh(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},dl=()=>{var n;return(n=ui())===null||n===void 0?void 0:n.config},wy=n=>{var e;return(e=ui())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class rh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function fl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Xr(JSON.stringify(t)),Xr(JSON.stringify(a)),""].join(".")}/**
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
 */function Rs(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ey(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Rs())}function ih(){var n;const e=(n=ui())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Iy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Sy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ay(){const n=Rs();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function sh(){return!ih()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function oh(){try{return typeof indexedDB=="object"}catch{return!1}}function ah(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const lh="FirebaseError";class Ht extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=lh,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pl.prototype.create)}}class pl{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?ch(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Ht(i,l,r)}}function ch(n,e){return n.replace(uh,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const uh=/\{\$([^}]+)}/g;function by(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function os(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(na(s)&&na(a)){if(!os(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function na(n){return n!==null&&typeof n=="object"}/**
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
 */function Py(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ry(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Cy(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function xy(n,e){const t=new hh(n,e);return t.subscribe.bind(t)}class hh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");dh(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Bi),i.error===void 0&&(i.error=Bi),i.complete===void 0&&(i.complete=Bi);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dh(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Bi(){}/**
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
 */function dt(n){return n&&n._delegate?n._delegate:n}class un{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Mt="[DEFAULT]";/**
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
 */class fh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new rh;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mh(e))try{this.getOrInitializeService({instanceIdentifier:Mt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Mt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Mt){return this.instances.has(e)}getOptions(e=Mt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ph(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Mt){return this.component?this.component.multipleInstances?e:Mt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ph(n){return n===Mt?void 0:n}function mh(n){return n.instantiationMode==="EAGER"}/**
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
 */class gh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new fh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const _h={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},yh=Z.INFO,vh={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},Th=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=vh[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ml{constructor(e){this.name=e,this._logLevel=yh,this._logHandler=Th,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_h[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const wh=(n,e)=>e.some(t=>n instanceof t);let ra,ia;function Eh(){return ra||(ra=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ih(){return ia||(ia=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gl=new WeakMap,as=new WeakMap,_l=new WeakMap,zi=new WeakMap,Cs=new WeakMap;function Sh(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(St(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&gl.set(t,n)}).catch(()=>{}),Cs.set(e,n),e}function Ah(n){if(as.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});as.set(n,e)}let ls={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return as.get(n);if(e==="objectStoreNames")return n.objectStoreNames||_l.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return St(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function bh(n){ls=n(ls)}function Ph(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Gi(this),e,...t);return _l.set(r,e.sort?e.sort():[e]),St(r)}:Ih().includes(n)?function(...e){return n.apply(Gi(this),e),St(gl.get(this))}:function(...e){return St(n.apply(Gi(this),e))}}function Rh(n){return typeof n=="function"?Ph(n):(n instanceof IDBTransaction&&Ah(n),wh(n,Eh())?new Proxy(n,ls):n)}function St(n){if(n instanceof IDBRequest)return Sh(n);if(zi.has(n))return zi.get(n);const e=Rh(n);return e!==n&&(zi.set(n,e),Cs.set(e,n)),e}const Gi=n=>Cs.get(n);function Ch(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=St(a);return r&&a.addEventListener("upgradeneeded",c=>{r(St(a.result),c.oldVersion,c.newVersion,St(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const xh=["get","getKey","getAll","getAllKeys","count"],Vh=["put","add","delete","clear"],ji=new Map;function sa(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ji.get(e))return ji.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Vh.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||xh.includes(t)))return;const s=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&c.done]))[0]};return ji.set(e,s),s}bh(n=>({...n,get:(e,t,r)=>sa(e,t)||n.get(e,t,r),has:(e,t)=>!!sa(e,t)||n.has(e,t)}));/**
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
 */class kh{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Dh(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Dh(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cs="@firebase/app",oa="0.10.8";/**
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
 */const Ut=new ml("@firebase/app"),Oh="@firebase/app-compat",Mh="@firebase/analytics-compat",Nh="@firebase/analytics",Lh="@firebase/app-check-compat",Fh="@firebase/app-check",Uh="@firebase/auth",Bh="@firebase/auth-compat",zh="@firebase/database",Gh="@firebase/database-compat",jh="@firebase/functions",qh="@firebase/functions-compat",Hh="@firebase/installations",$h="@firebase/installations-compat",Wh="@firebase/messaging",Kh="@firebase/messaging-compat",Qh="@firebase/performance",Yh="@firebase/performance-compat",Xh="@firebase/remote-config",Jh="@firebase/remote-config-compat",Zh="@firebase/storage",ed="@firebase/storage-compat",td="@firebase/firestore",nd="@firebase/vertexai-preview",rd="@firebase/firestore-compat",id="firebase",sd="10.12.5";/**
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
 */const us="[DEFAULT]",od={[cs]:"fire-core",[Oh]:"fire-core-compat",[Nh]:"fire-analytics",[Mh]:"fire-analytics-compat",[Fh]:"fire-app-check",[Lh]:"fire-app-check-compat",[Uh]:"fire-auth",[Bh]:"fire-auth-compat",[zh]:"fire-rtdb",[Gh]:"fire-rtdb-compat",[jh]:"fire-fn",[qh]:"fire-fn-compat",[Hh]:"fire-iid",[$h]:"fire-iid-compat",[Wh]:"fire-fcm",[Kh]:"fire-fcm-compat",[Qh]:"fire-perf",[Yh]:"fire-perf-compat",[Xh]:"fire-rc",[Jh]:"fire-rc-compat",[Zh]:"fire-gcs",[ed]:"fire-gcs-compat",[td]:"fire-fst",[rd]:"fire-fst-compat",[nd]:"fire-vertex","fire-js":"fire-js",[id]:"fire-js-all"};/**
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
 */const Jr=new Map,ad=new Map,hs=new Map;function aa(n,e){try{n.container.addComponent(e)}catch(t){Ut.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function tr(n){const e=n.name;if(hs.has(e))return Ut.debug(`There were multiple attempts to register component ${e}.`),!1;hs.set(e,n);for(const t of Jr.values())aa(t,n);for(const t of ad.values())aa(t,n);return!0}function yl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Vy(n){return n.settings!==void 0}/**
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
 */const ld={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},At=new pl("app","Firebase",ld);/**
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
 */class cd{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new un("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw At.create("app-deleted",{appName:this._name})}}/**
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
 */const vl=sd;function Tl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:us,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw At.create("bad-app-name",{appName:String(i)});if(t||(t=dl()),!t)throw At.create("no-options");const s=Jr.get(i);if(s){if(os(t,s.options)&&os(r,s.config))return s;throw At.create("duplicate-app",{appName:i})}const a=new gh(i);for(const c of hs.values())a.addComponent(c);const l=new cd(t,r,a);return Jr.set(i,l),l}function wl(n=us){const e=Jr.get(n);if(!e&&n===us&&dl())return Tl();if(!e)throw At.create("no-app",{appName:n});return e}function bt(n,e,t){var r;let i=(r=od[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ut.warn(l.join(" "));return}tr(new un(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ud="firebase-heartbeat-database",hd=1,nr="firebase-heartbeat-store";let qi=null;function El(){return qi||(qi=Ch(ud,hd,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(nr)}catch(t){console.warn(t)}}}}).catch(n=>{throw At.create("idb-open",{originalErrorMessage:n.message})})),qi}async function dd(n){try{const t=(await El()).transaction(nr),r=await t.objectStore(nr).get(Il(n));return await t.done,r}catch(e){if(e instanceof Ht)Ut.warn(e.message);else{const t=At.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ut.warn(t.message)}}}async function la(n,e){try{const r=(await El()).transaction(nr,"readwrite");await r.objectStore(nr).put(e,Il(n)),await r.done}catch(t){if(t instanceof Ht)Ut.warn(t.message);else{const r=At.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ut.warn(r.message)}}}function Il(n){return`${n.name}!${n.options.appId}`}/**
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
 */const fd=1024,pd=30*24*60*60*1e3;class md{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _d(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ca();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=pd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ca(),{heartbeatsToSend:r,unsentEntries:i}=gd(this._heartbeatsCache.heartbeats),s=Xr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ca(){return new Date().toISOString().substring(0,10)}function gd(n,e=fd){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),ua(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),ua(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class _d{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oh()?ah().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await dd(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return la(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return la(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ua(n){return Xr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function yd(n){tr(new un("platform-logger",e=>new kh(e),"PRIVATE")),tr(new un("heartbeat",e=>new md(e),"PRIVATE")),bt(cs,oa,n),bt(cs,oa,"esm2017"),bt("fire-js","")}yd("");var vd="firebase",Td="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt(vd,Td,"app");function wd(){return Tl({apiKey:"AIzaSyBTca0OO9iCUvryBSKXEcuj2zcsAIbSBUI",authDomain:"nuts-17b69.firebaseapp.com",projectId:"nuts-17b69",storageBucket:"nuts-17b69.appspot.com",messagingSenderId:"989266237693",appId:"1:989266237693:web:814a4d601b3db0dee74694"})}var Ee=[];for(var Hi=0;Hi<256;++Hi)Ee.push((Hi+256).toString(16).slice(1));function Ed(n,e=0){return(Ee[n[e+0]]+Ee[n[e+1]]+Ee[n[e+2]]+Ee[n[e+3]]+"-"+Ee[n[e+4]]+Ee[n[e+5]]+"-"+Ee[n[e+6]]+Ee[n[e+7]]+"-"+Ee[n[e+8]]+Ee[n[e+9]]+"-"+Ee[n[e+10]]+Ee[n[e+11]]+Ee[n[e+12]]+Ee[n[e+13]]+Ee[n[e+14]]+Ee[n[e+15]]).toLowerCase()}var Nr,Id=new Uint8Array(16);function Sd(){if(!Nr&&(Nr=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Nr))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Nr(Id)}var Ad=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const ha={randomUUID:Ad};function bd(n,e,t){if(ha.randomUUID&&!e&&!n)return ha.randomUUID();n=n||{};var r=n.random||(n.rng||Sd)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,Ed(r)}/**
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
 */const Sl="firebasestorage.googleapis.com",Al="storageBucket",Pd=2*60*1e3,Rd=10*60*1e3;/**
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
 */class he extends Ht{constructor(e,t,r=0){super($i(e),`Firebase Storage: ${t} (${$i(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,he.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return $i(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ue;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ue||(ue={}));function $i(n){return"storage/"+n}function xs(){const n="An unknown error occurred, please check the error payload for server response.";return new he(ue.UNKNOWN,n)}function Cd(n){return new he(ue.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function xd(n){return new he(ue.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Vd(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new he(ue.UNAUTHENTICATED,n)}function kd(){return new he(ue.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Dd(n){return new he(ue.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Od(){return new he(ue.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Md(){return new he(ue.CANCELED,"User canceled the upload/download.")}function Nd(n){return new he(ue.INVALID_URL,"Invalid URL '"+n+"'.")}function Ld(n){return new he(ue.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Fd(){return new he(ue.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Al+"' property when initializing the app?")}function Ud(){return new he(ue.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Bd(){return new he(ue.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function zd(n){return new he(ue.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ds(n){return new he(ue.INVALID_ARGUMENT,n)}function bl(){return new he(ue.APP_DELETED,"The Firebase app was deleted.")}function Gd(n){return new he(ue.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Yn(n,e){return new he(ue.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function jn(n){throw new he(ue.INTERNAL_ERROR,"Internal error: "+n)}/**
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
 */class Be{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Be.makeFromUrl(e,t)}catch{return new Be(e,"")}if(r.path==="")return r;throw Ld(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+i+a,"i"),c={bucket:1,path:3};function d(N){N.path_=decodeURIComponent(N.path)}const f="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),T="(/([^?#]*).*)?$",I=new RegExp(`^https?://${m}/${f}/b/${i}/o${T}`,"i"),A={bucket:1,path:3},R=t===Sl?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",V=new RegExp(`^https?://${R}/${i}/${C}`,"i"),k=[{regex:l,indices:c,postModify:s},{regex:I,indices:A,postModify:d},{regex:V,indices:{bucket:1,path:2},postModify:d}];for(let N=0;N<k.length;N++){const B=k[N],$=B.regex.exec(e);if($){const b=$[B.indices.bucket];let y=$[B.indices.path];y||(y=""),r=new Be(b,y),B.postModify(r);break}}if(r==null)throw Nd(e);return r}}class jd{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function qd(n,e,t){let r=1,i=null,s=null,a=!1,l=0;function c(){return l===2}let d=!1;function f(...C){d||(d=!0,e.apply(null,C))}function m(C){i=setTimeout(()=>{i=null,n(I,c())},C)}function T(){s&&clearTimeout(s)}function I(C,...V){if(d){T();return}if(C){T(),f.call(null,C,...V);return}if(c()||a){T(),f.call(null,C,...V);return}r<64&&(r*=2);let k;l===1?(l=2,k=0):k=(r+Math.random())*1e3,m(k)}let A=!1;function R(C){A||(A=!0,T(),!d&&(i!==null?(C||(l=2),clearTimeout(i),m(0)):C||(l=1)))}return m(0),s=setTimeout(()=>{a=!0,R(!0)},t),R}function Hd(n){n(!1)}/**
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
 */function $d(n){return n!==void 0}function Wd(n){return typeof n=="object"&&!Array.isArray(n)}function Vs(n){return typeof n=="string"||n instanceof String}function da(n){return ks()&&n instanceof Blob}function ks(){return typeof Blob<"u"}function fa(n,e,t,r){if(r<e)throw ds(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw ds(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
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
 */function Ds(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Pl(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
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
 */var Lt;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Lt||(Lt={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kd(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
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
 */class Qd{constructor(e,t,r,i,s,a,l,c,d,f,m,T=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=c,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=m,this.retry=T,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,A)=>{this.resolve_=I,this.reject_=A,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Lr(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=l=>{const c=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,d)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const l=s.getErrorCode()===Lt.NO_ERROR,c=s.getStatus();if(!l||Kd(c,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Lt.ABORT;r(!1,new Lr(!1,null,f));return}const d=this.successCodes_.indexOf(c)!==-1;r(!0,new Lr(d,s))})},t=(r,i)=>{const s=this.resolve_,a=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());$d(c)?s(c):s()}catch(c){a(c)}else if(l!==null){const c=xs();c.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,c)):a(c)}else if(i.canceled){const c=this.appDelete_?bl():Md();a(c)}else{const c=Od();a(c)}};this.canceled_?t(!1,new Lr(!1,null,!0)):this.backoffId_=qd(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Hd(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Lr{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Yd(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Xd(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Jd(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Zd(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function ef(n,e,t,r,i,s,a=!0){const l=Pl(n.urlParams),c=n.url+l,d=Object.assign({},n.headers);return Jd(d,e),Yd(d,t),Xd(d,s),Zd(d,r),new Qd(c,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,a)}/**
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
 */function tf(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function nf(...n){const e=tf();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(ks())return new Blob(n);throw new he(ue.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function rf(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function sf(n){if(typeof atob>"u")throw zd("base-64");return atob(n)}/**
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
 */const Xe={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Wi{constructor(e,t){this.data=e,this.contentType=t||null}}function of(n,e){switch(n){case Xe.RAW:return new Wi(Rl(e));case Xe.BASE64:case Xe.BASE64URL:return new Wi(Cl(n,e));case Xe.DATA_URL:return new Wi(lf(e),cf(e))}throw xs()}function Rl(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,a=n.charCodeAt(++t);r=65536|(s&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function af(n){let e;try{e=decodeURIComponent(n)}catch{throw Yn(Xe.DATA_URL,"Malformed data URL.")}return Rl(e)}function Cl(n,e){switch(n){case Xe.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Yn(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Xe.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Yn(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=sf(e)}catch(i){throw i.message.includes("polyfill")?i:Yn(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class xl{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Yn(Xe.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=uf(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function lf(n){const e=new xl(n);return e.base64?Cl(Xe.BASE64,e.rest):af(e.rest)}function cf(n){return new xl(n).contentType}function uf(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
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
 */class wt{constructor(e,t){let r=0,i="";da(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(da(this.data_)){const r=this.data_,i=rf(r,e,t);return i===null?null:new wt(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new wt(r,!0)}}static getBlob(...e){if(ks()){const t=e.map(r=>r instanceof wt?r.data_:r);return new wt(nf.apply(null,t))}else{const t=e.map(a=>Vs(a)?of(Xe.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(a=>{for(let l=0;l<a.length;l++)i[s++]=a[l]}),new wt(i,!0)}}uploadData(){return this.data_}}/**
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
 */function Vl(n){let e;try{e=JSON.parse(n)}catch{return null}return Wd(e)?e:null}/**
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
 */function hf(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function df(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function kl(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */function ff(n,e){return e}class De{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||ff}}let Fr=null;function pf(n){return!Vs(n)||n.length<2?n:kl(n)}function Dl(){if(Fr)return Fr;const n=[];n.push(new De("bucket")),n.push(new De("generation")),n.push(new De("metageneration")),n.push(new De("name","fullPath",!0));function e(s,a){return pf(a)}const t=new De("name");t.xform=e,n.push(t);function r(s,a){return a!==void 0?Number(a):a}const i=new De("size");return i.xform=r,n.push(i),n.push(new De("timeCreated")),n.push(new De("updated")),n.push(new De("md5Hash",null,!0)),n.push(new De("cacheControl",null,!0)),n.push(new De("contentDisposition",null,!0)),n.push(new De("contentEncoding",null,!0)),n.push(new De("contentLanguage",null,!0)),n.push(new De("contentType",null,!0)),n.push(new De("metadata","customMetadata",!0)),Fr=n,Fr}function mf(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new Be(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function gf(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const a=t[s];r[a.local]=a.xform(r,e[a.server])}return mf(r,n),r}function Ol(n,e,t){const r=Vl(e);return r===null?null:gf(n,r,t)}function _f(n,e,t,r){const i=Vl(e);if(i===null||!Vs(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const a=encodeURIComponent;return s.split(",").map(d=>{const f=n.bucket,m=n.fullPath,T="/b/"+a(f)+"/o/"+a(m),I=Ds(T,t,r),A=Pl({alt:"media",token:d});return I+A})[0]}function yf(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class Ml{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Nl(n){if(!n)throw xs()}function vf(n,e){function t(r,i){const s=Ol(n,i,e);return Nl(s!==null),s}return t}function Tf(n,e){function t(r,i){const s=Ol(n,i,e);return Nl(s!==null),_f(s,i,n.host,n._protocol)}return t}function Ll(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=kd():i=Vd():t.getStatus()===402?i=xd(n.bucket):t.getStatus()===403?i=Dd(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function wf(n){const e=Ll(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=Cd(n.path)),s.serverResponse=i.serverResponse,s}return t}function Ef(n,e,t){const r=e.fullServerUrl(),i=Ds(r,n.host,n._protocol),s="GET",a=n.maxOperationRetryTime,l=new Ml(i,s,Tf(n,t),a);return l.errorHandler=wf(e),l}function If(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function Sf(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=If(null,e)),r}function Af(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let k="";for(let N=0;N<2;N++)k=k+Math.random().toString().slice(2);return k}const c=l();a["Content-Type"]="multipart/related; boundary="+c;const d=Sf(e,r,i),f=yf(d,t),m="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+c+`\r
Content-Type: `+d.contentType+`\r
\r
`,T=`\r
--`+c+"--",I=wt.getBlob(m,r,T);if(I===null)throw Ud();const A={name:d.fullPath},R=Ds(s,n.host,n._protocol),C="POST",V=n.maxUploadRetryTime,M=new Ml(R,C,vf(n,t),V);return M.urlParams=A,M.headers=a,M.body=I.uploadData(),M.errorHandler=Ll(e),M}class bf{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Lt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Lt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Lt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw jn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw jn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw jn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw jn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw jn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Pf extends bf{initXhr(){this.xhr_.responseType="text"}}function Fl(){return new Pf}/**
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
 */class Bt{constructor(e,t){this._service=e,t instanceof Be?this._location=t:this._location=Be.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Bt(e,t)}get root(){const e=new Be(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return kl(this._location.path)}get storage(){return this._service}get parent(){const e=hf(this._location.path);if(e===null)return null;const t=new Be(this._location.bucket,e);return new Bt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Gd(e)}}function Rf(n,e,t){n._throwIfRoot("uploadBytes");const r=Af(n.storage,n._location,Dl(),new wt(e,!0),t);return n.storage.makeRequestWithTokens(r,Fl).then(i=>({metadata:i,ref:n}))}function Cf(n){n._throwIfRoot("getDownloadURL");const e=Ef(n.storage,n._location,Dl());return n.storage.makeRequestWithTokens(e,Fl).then(t=>{if(t===null)throw Bd();return t})}function xf(n,e){const t=df(n._location.path,e),r=new Be(n._location.bucket,t);return new Bt(n.storage,r)}/**
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
 */function Vf(n){return/^[A-Za-z]+:\/\//.test(n)}function kf(n,e){return new Bt(n,e)}function Ul(n,e){if(n instanceof Os){const t=n;if(t._bucket==null)throw Fd();const r=new Bt(t,t._bucket);return e!=null?Ul(r,e):r}else return e!==void 0?xf(n,e):n}function Df(n,e){if(e&&Vf(e)){if(n instanceof Os)return kf(n,e);throw ds("To use ref(service, url), the first argument must be a Storage instance.")}else return Ul(n,e)}function pa(n,e){const t=e==null?void 0:e[Al];return t==null?null:Be.makeFromBucketSpec(t,n)}function Of(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:fl(i,n.app.options.projectId))}class Os{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Sl,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Pd,this._maxUploadRetryTime=Rd,this._requests=new Set,i!=null?this._bucket=Be.makeFromBucketSpec(i,this._host):this._bucket=pa(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Be.makeFromBucketSpec(this._url,e):this._bucket=pa(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){fa("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){fa("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Bt(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new jd(bl());{const a=ef(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const ma="@firebase/storage",ga="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl="storage";function Mf(n,e,t){return n=dt(n),Rf(n,e,t)}function zl(n){return n=dt(n),Cf(n)}function Gl(n,e){return n=dt(n),Df(n,e)}function jl(n=wl(),e){n=dt(n);const r=yl(n,Bl).getImmediate({identifier:e}),i=hl("storage");return i&&Nf(r,...i),r}function Nf(n,e,t,r={}){Of(n,e,t,r)}function Lf(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Os(t,r,i,e,vl)}function Ff(){tr(new un(Bl,Lf,"PUBLIC").setMultipleInstances(!0)),bt(ma,ga,""),bt(ma,ga,"esm2017")}Ff();function lt(n,e){const t=jl(),r=Gl(t,n);zl(r).then(i=>{e.src=i,e.setAttribute("loading","lazy")}).catch(i=>{console.log(i)})}async function ky(n){let e="";const t=jl(),r=Gl(t,`/users_avatar/${Uf(n.name)}`);try{const i=await Mf(r,n);return e=await zl(i.ref),console.log(`File uploaded successfully. URL: ${e}`),e}catch(i){console.error(`Error uploading file: ${i}`)}return e}function Uf(n){const e=bd(),t=n.split(".").pop();return`${e}.${t}`}function Bf(){lt("logo-1.svg",oe(".header__center-logo")),lt("logo-1.svg",oe(".burger__logo-img")),lt("user.svg",oe(".header__top-img")),lt("user.svg",oe(".burger__img")),lt("logo-1.svg",oe(".footer__logo-img")),lt("gs://nuts-17b69.appspot.com/31318052.webp",oe(".error__img")),lt("gs://nuts-17b69.appspot.com/avatar.webp",oe(".registration__input-img"));const n=oe(".popup__img","all"),e=["gs://nuts-17b69.appspot.com/product_card/box_cardboard_1.webp","gs://nuts-17b69.appspot.com/product_card/box_cardboard_2.webp","gs://nuts-17b69.appspot.com/product_card/box_cardboard_3.webp"];for(let i=0;i<n.length;i++)lt(e[i],n[i]);const t=oe(".manufacturing__preview-img","all"),r=["gs://nuts-17b69.appspot.com/main_page/main_page-2.webp","gs://nuts-17b69.appspot.com/companies/companies_2.webp"];for(let i=0;i<t.length;i++)lt(r[i],t[i])}function _a(n){return n!==null&&typeof n=="object"&&"constructor"in n&&n.constructor===Object}function Ms(n,e){n===void 0&&(n={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{typeof n[t]>"u"?n[t]=e[t]:_a(e[t])&&_a(n[t])&&Object.keys(e[t]).length>0&&Ms(n[t],e[t])})}const ql={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function yn(){const n=typeof document<"u"?document:{};return Ms(n,ql),n}const zf={document:ql,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(n){return typeof setTimeout>"u"?(n(),null):setTimeout(n,0)},cancelAnimationFrame(n){typeof setTimeout>"u"||clearTimeout(n)}};function Ge(){const n=typeof window<"u"?window:{};return Ms(n,zf),n}function Gf(n){return n===void 0&&(n=""),n.trim().split(" ").filter(e=>!!e.trim())}function jf(n){const e=n;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function fs(n,e){return e===void 0&&(e=0),setTimeout(n,e)}function Zr(){return Date.now()}function qf(n){const e=Ge();let t;return e.getComputedStyle&&(t=e.getComputedStyle(n,null)),!t&&n.currentStyle&&(t=n.currentStyle),t||(t=n.style),t}function Hf(n,e){e===void 0&&(e="x");const t=Ge();let r,i,s;const a=qf(n);return t.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),s=new t.WebKitCSSMatrix(i==="none"?"":i)):(s=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?i=s.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),e==="y"&&(t.WebKitCSSMatrix?i=s.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Ur(n){return typeof n=="object"&&n!==null&&n.constructor&&Object.prototype.toString.call(n).slice(8,-1)==="Object"}function $f(n){return typeof window<"u"&&typeof window.HTMLElement<"u"?n instanceof HTMLElement:n&&(n.nodeType===1||n.nodeType===11)}function Ue(){const n=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const r=t<0||arguments.length<=t?void 0:arguments[t];if(r!=null&&!$f(r)){const i=Object.keys(Object(r)).filter(s=>e.indexOf(s)<0);for(let s=0,a=i.length;s<a;s+=1){const l=i[s],c=Object.getOwnPropertyDescriptor(r,l);c!==void 0&&c.enumerable&&(Ur(n[l])&&Ur(r[l])?r[l].__swiper__?n[l]=r[l]:Ue(n[l],r[l]):!Ur(n[l])&&Ur(r[l])?(n[l]={},r[l].__swiper__?n[l]=r[l]:Ue(n[l],r[l])):n[l]=r[l])}}}return n}function Br(n,e,t){n.style.setProperty(e,t)}function Hl(n){let{swiper:e,targetPosition:t,side:r}=n;const i=Ge(),s=-e.translate;let a=null,l;const c=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const d=t>s?"next":"prev",f=(T,I)=>d==="next"&&T>=I||d==="prev"&&T<=I,m=()=>{l=new Date().getTime(),a===null&&(a=l);const T=Math.max(Math.min((l-a)/c,1),0),I=.5-Math.cos(T*Math.PI)/2;let A=s+I*(t-s);if(f(A,t)&&(A=t),e.wrapperEl.scrollTo({[r]:A}),f(A,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:A})}),i.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=i.requestAnimationFrame(m)};m()}function Je(n,e){e===void 0&&(e="");const t=[...n.children];return n instanceof HTMLSlotElement&&t.push(...n.assignedElements()),e?t.filter(r=>r.matches(e)):t}function Wf(n,e){const t=e.contains(n);return!t&&e instanceof HTMLSlotElement?[...e.assignedElements()].includes(n):t}function ei(n){try{console.warn(n);return}catch{}}function ti(n,e){e===void 0&&(e=[]);const t=document.createElement(n);return t.classList.add(...Array.isArray(e)?e:Gf(e)),t}function Kf(n,e){const t=[];for(;n.previousElementSibling;){const r=n.previousElementSibling;e?r.matches(e)&&t.push(r):t.push(r),n=r}return t}function Qf(n,e){const t=[];for(;n.nextElementSibling;){const r=n.nextElementSibling;e?r.matches(e)&&t.push(r):t.push(r),n=r}return t}function Et(n,e){return Ge().getComputedStyle(n,null).getPropertyValue(e)}function ya(n){let e=n,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function Yf(n,e){const t=[];let r=n.parentElement;for(;r;)t.push(r),r=r.parentElement;return t}function va(n,e,t){const r=Ge();return n[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function ct(n){return(Array.isArray(n)?n:[n]).filter(e=>!!e)}let Ki;function Xf(){const n=Ge(),e=yn();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in n||n.DocumentTouch&&e instanceof n.DocumentTouch)}}function $l(){return Ki||(Ki=Xf()),Ki}let Qi;function Jf(n){let{userAgent:e}=n===void 0?{}:n;const t=$l(),r=Ge(),i=r.navigator.platform,s=e||r.navigator.userAgent,a={ios:!1,android:!1},l=r.screen.width,c=r.screen.height,d=s.match(/(Android);?[\s\/]+([\d.]+)?/);let f=s.match(/(iPad).*OS\s([\d_]+)/);const m=s.match(/(iPod)(.*OS\s([\d_]+))?/),T=!f&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),I=i==="Win32";let A=i==="MacIntel";const R=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!f&&A&&t.touch&&R.indexOf(`${l}x${c}`)>=0&&(f=s.match(/(Version)\/([\d.]+)/),f||(f=[0,1,"13_0_0"]),A=!1),d&&!I&&(a.os="android",a.android=!0),(f||T||m)&&(a.os="ios",a.ios=!0),a}function Wl(n){return n===void 0&&(n={}),Qi||(Qi=Jf(n)),Qi}let Yi;function Zf(){const n=Ge(),e=Wl();let t=!1;function r(){const l=n.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(n.navigator.userAgent);if(l.includes("Version/")){const[c,d]=l.split("Version/")[1].split(" ")[0].split(".").map(f=>Number(f));t=c<16||c===16&&d<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent),s=r(),a=s||i&&e.ios;return{isSafari:t||s,needPerspectiveFix:t,need3dFix:a,isWebView:i}}function ep(){return Yi||(Yi=Zf()),Yi}function tp(n){let{swiper:e,on:t,emit:r}=n;const i=Ge();let s=null,a=null;const l=()=>{!e||e.destroyed||!e.initialized||(r("beforeResize"),r("resize"))},c=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(m=>{a=i.requestAnimationFrame(()=>{const{width:T,height:I}=e;let A=T,R=I;m.forEach(C=>{let{contentBoxSize:V,contentRect:M,target:k}=C;k&&k!==e.el||(A=M?M.width:(V[0]||V).inlineSize,R=M?M.height:(V[0]||V).blockSize)}),(A!==T||R!==I)&&l()})}),s.observe(e.el))},d=()=>{a&&i.cancelAnimationFrame(a),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},f=()=>{!e||e.destroyed||!e.initialized||r("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof i.ResizeObserver<"u"){c();return}i.addEventListener("resize",l),i.addEventListener("orientationchange",f)}),t("destroy",()=>{d(),i.removeEventListener("resize",l),i.removeEventListener("orientationchange",f)})}function np(n){let{swiper:e,extendParams:t,on:r,emit:i}=n;const s=[],a=Ge(),l=function(f,m){m===void 0&&(m={});const T=a.MutationObserver||a.WebkitMutationObserver,I=new T(A=>{if(e.__preventObserver__)return;if(A.length===1){i("observerUpdate",A[0]);return}const R=function(){i("observerUpdate",A[0])};a.requestAnimationFrame?a.requestAnimationFrame(R):a.setTimeout(R,0)});I.observe(f,{attributes:typeof m.attributes>"u"?!0:m.attributes,childList:e.isElement||(typeof m.childList>"u"?!0:m).childList,characterData:typeof m.characterData>"u"?!0:m.characterData}),s.push(I)},c=()=>{if(e.params.observer){if(e.params.observeParents){const f=Yf(e.hostEl);for(let m=0;m<f.length;m+=1)l(f[m])}l(e.hostEl,{childList:e.params.observeSlideChildren}),l(e.wrapperEl,{attributes:!1})}},d=()=>{s.forEach(f=>{f.disconnect()}),s.splice(0,s.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",c),r("destroy",d)}var rp={on(n,e,t){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const i=t?"unshift":"push";return n.split(" ").forEach(s=>{r.eventsListeners[s]||(r.eventsListeners[s]=[]),r.eventsListeners[s][i](e)}),r},once(n,e,t){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;function i(){r.off(n,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];e.apply(r,a)}return i.__emitterProxy=e,r.on(n,i,t)},onAny(n,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof n!="function")return t;const r=e?"unshift":"push";return t.eventsAnyListeners.indexOf(n)<0&&t.eventsAnyListeners[r](n),t},offAny(n){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(n);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(n,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||n.split(" ").forEach(r=>{typeof e>"u"?t.eventsListeners[r]=[]:t.eventsListeners[r]&&t.eventsListeners[r].forEach((i,s)=>{(i===e||i.__emitterProxy&&i.__emitterProxy===e)&&t.eventsListeners[r].splice(s,1)})}),t},emit(){const n=this;if(!n.eventsListeners||n.destroyed||!n.eventsListeners)return n;let e,t,r;for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return typeof s[0]=="string"||Array.isArray(s[0])?(e=s[0],t=s.slice(1,s.length),r=n):(e=s[0].events,t=s[0].data,r=s[0].context||n),t.unshift(r),(Array.isArray(e)?e:e.split(" ")).forEach(c=>{n.eventsAnyListeners&&n.eventsAnyListeners.length&&n.eventsAnyListeners.forEach(d=>{d.apply(r,[c,...t])}),n.eventsListeners&&n.eventsListeners[c]&&n.eventsListeners[c].forEach(d=>{d.apply(r,t)})}),n}};function ip(){const n=this;let e,t;const r=n.el;typeof n.params.width<"u"&&n.params.width!==null?e=n.params.width:e=r.clientWidth,typeof n.params.height<"u"&&n.params.height!==null?t=n.params.height:t=r.clientHeight,!(e===0&&n.isHorizontal()||t===0&&n.isVertical())&&(e=e-parseInt(Et(r,"padding-left")||0,10)-parseInt(Et(r,"padding-right")||0,10),t=t-parseInt(Et(r,"padding-top")||0,10)-parseInt(Et(r,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(n,{width:e,height:t,size:n.isHorizontal()?e:t}))}function sp(){const n=this;function e(v,E){return parseFloat(v.getPropertyValue(n.getDirectionLabel(E))||0)}const t=n.params,{wrapperEl:r,slidesEl:i,size:s,rtlTranslate:a,wrongRTL:l}=n,c=n.virtual&&t.virtual.enabled,d=c?n.virtual.slides.length:n.slides.length,f=Je(i,`.${n.params.slideClass}, swiper-slide`),m=c?n.virtual.slides.length:f.length;let T=[];const I=[],A=[];let R=t.slidesOffsetBefore;typeof R=="function"&&(R=t.slidesOffsetBefore.call(n));let C=t.slidesOffsetAfter;typeof C=="function"&&(C=t.slidesOffsetAfter.call(n));const V=n.snapGrid.length,M=n.slidesGrid.length;let k=t.spaceBetween,N=-R,B=0,$=0;if(typeof s>"u")return;typeof k=="string"&&k.indexOf("%")>=0?k=parseFloat(k.replace("%",""))/100*s:typeof k=="string"&&(k=parseFloat(k)),n.virtualSize=-k,f.forEach(v=>{a?v.style.marginLeft="":v.style.marginRight="",v.style.marginBottom="",v.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(Br(r,"--swiper-centered-offset-before",""),Br(r,"--swiper-centered-offset-after",""));const b=t.grid&&t.grid.rows>1&&n.grid;b?n.grid.initSlides(f):n.grid&&n.grid.unsetSlides();let y;const g=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(v=>typeof t.breakpoints[v].slidesPerView<"u").length>0;for(let v=0;v<m;v+=1){y=0;let E;if(f[v]&&(E=f[v]),b&&n.grid.updateSlide(v,E,f),!(f[v]&&Et(E,"display")==="none")){if(t.slidesPerView==="auto"){g&&(f[v].style[n.getDirectionLabel("width")]="");const S=getComputedStyle(E),_=E.style.transform,Y=E.style.webkitTransform;if(_&&(E.style.transform="none"),Y&&(E.style.webkitTransform="none"),t.roundLengths)y=n.isHorizontal()?va(E,"width"):va(E,"height");else{const ie=e(S,"width"),Oe=e(S,"padding-left"),$e=e(S,"padding-right"),Me=e(S,"margin-left"),Qe=e(S,"margin-right"),mt=S.getPropertyValue("box-sizing");if(mt&&mt==="border-box")y=ie+Me+Qe;else{const{clientWidth:Kt,offsetWidth:Ne}=E;y=ie+Oe+$e+Me+Qe+(Ne-Kt)}}_&&(E.style.transform=_),Y&&(E.style.webkitTransform=Y),t.roundLengths&&(y=Math.floor(y))}else y=(s-(t.slidesPerView-1)*k)/t.slidesPerView,t.roundLengths&&(y=Math.floor(y)),f[v]&&(f[v].style[n.getDirectionLabel("width")]=`${y}px`);f[v]&&(f[v].swiperSlideSize=y),A.push(y),t.centeredSlides?(N=N+y/2+B/2+k,B===0&&v!==0&&(N=N-s/2-k),v===0&&(N=N-s/2-k),Math.abs(N)<1/1e3&&(N=0),t.roundLengths&&(N=Math.floor(N)),$%t.slidesPerGroup===0&&T.push(N),I.push(N)):(t.roundLengths&&(N=Math.floor(N)),($-Math.min(n.params.slidesPerGroupSkip,$))%n.params.slidesPerGroup===0&&T.push(N),I.push(N),N=N+y+k),n.virtualSize+=y+k,B=y,$+=1}}if(n.virtualSize=Math.max(n.virtualSize,s)+C,a&&l&&(t.effect==="slide"||t.effect==="coverflow")&&(r.style.width=`${n.virtualSize+k}px`),t.setWrapperSize&&(r.style[n.getDirectionLabel("width")]=`${n.virtualSize+k}px`),b&&n.grid.updateWrapperSize(y,T),!t.centeredSlides){const v=[];for(let E=0;E<T.length;E+=1){let S=T[E];t.roundLengths&&(S=Math.floor(S)),T[E]<=n.virtualSize-s&&v.push(S)}T=v,Math.floor(n.virtualSize-s)-Math.floor(T[T.length-1])>1&&T.push(n.virtualSize-s)}if(c&&t.loop){const v=A[0]+k;if(t.slidesPerGroup>1){const E=Math.ceil((n.virtual.slidesBefore+n.virtual.slidesAfter)/t.slidesPerGroup),S=v*t.slidesPerGroup;for(let _=0;_<E;_+=1)T.push(T[T.length-1]+S)}for(let E=0;E<n.virtual.slidesBefore+n.virtual.slidesAfter;E+=1)t.slidesPerGroup===1&&T.push(T[T.length-1]+v),I.push(I[I.length-1]+v),n.virtualSize+=v}if(T.length===0&&(T=[0]),k!==0){const v=n.isHorizontal()&&a?"marginLeft":n.getDirectionLabel("marginRight");f.filter((E,S)=>!t.cssMode||t.loop?!0:S!==f.length-1).forEach(E=>{E.style[v]=`${k}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let v=0;A.forEach(S=>{v+=S+(k||0)}),v-=k;const E=v-s;T=T.map(S=>S<=0?-R:S>E?E+C:S)}if(t.centerInsufficientSlides){let v=0;A.forEach(S=>{v+=S+(k||0)}),v-=k;const E=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(v+E<s){const S=(s-v-E)/2;T.forEach((_,Y)=>{T[Y]=_-S}),I.forEach((_,Y)=>{I[Y]=_+S})}}if(Object.assign(n,{slides:f,snapGrid:T,slidesGrid:I,slidesSizesGrid:A}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){Br(r,"--swiper-centered-offset-before",`${-T[0]}px`),Br(r,"--swiper-centered-offset-after",`${n.size/2-A[A.length-1]/2}px`);const v=-n.snapGrid[0],E=-n.slidesGrid[0];n.snapGrid=n.snapGrid.map(S=>S+v),n.slidesGrid=n.slidesGrid.map(S=>S+E)}if(m!==d&&n.emit("slidesLengthChange"),T.length!==V&&(n.params.watchOverflow&&n.checkOverflow(),n.emit("snapGridLengthChange")),I.length!==M&&n.emit("slidesGridLengthChange"),t.watchSlidesProgress&&n.updateSlidesOffset(),n.emit("slidesUpdated"),!c&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const v=`${t.containerModifierClass}backface-hidden`,E=n.el.classList.contains(v);m<=t.maxBackfaceHiddenSlides?E||n.el.classList.add(v):E&&n.el.classList.remove(v)}}function op(n){const e=this,t=[],r=e.virtual&&e.params.virtual.enabled;let i=0,s;typeof n=="number"?e.setTransition(n):n===!0&&e.setTransition(e.params.speed);const a=l=>r?e.slides[e.getSlideIndexByData(l)]:e.slides[l];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(l=>{t.push(l)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const l=e.activeIndex+s;if(l>e.slides.length&&!r)break;t.push(a(l))}else t.push(a(e.activeIndex));for(s=0;s<t.length;s+=1)if(typeof t[s]<"u"){const l=t[s].offsetHeight;i=l>i?l:i}(i||i===0)&&(e.wrapperEl.style.height=`${i}px`)}function ap(){const n=this,e=n.slides,t=n.isElement?n.isHorizontal()?n.wrapperEl.offsetLeft:n.wrapperEl.offsetTop:0;for(let r=0;r<e.length;r+=1)e[r].swiperSlideOffset=(n.isHorizontal()?e[r].offsetLeft:e[r].offsetTop)-t-n.cssOverflowAdjustment()}const Ta=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function lp(n){n===void 0&&(n=this&&this.translate||0);const e=this,t=e.params,{slides:r,rtlTranslate:i,snapGrid:s}=e;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let a=-n;i&&(a=n),e.visibleSlidesIndexes=[],e.visibleSlides=[];let l=t.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*e.size:typeof l=="string"&&(l=parseFloat(l));for(let c=0;c<r.length;c+=1){const d=r[c];let f=d.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(f-=r[0].swiperSlideOffset);const m=(a+(t.centeredSlides?e.minTranslate():0)-f)/(d.swiperSlideSize+l),T=(a-s[0]+(t.centeredSlides?e.minTranslate():0)-f)/(d.swiperSlideSize+l),I=-(a-f),A=I+e.slidesSizesGrid[c],R=I>=0&&I<=e.size-e.slidesSizesGrid[c],C=I>=0&&I<e.size-1||A>1&&A<=e.size||I<=0&&A>=e.size;C&&(e.visibleSlides.push(d),e.visibleSlidesIndexes.push(c)),Ta(d,C,t.slideVisibleClass),Ta(d,R,t.slideFullyVisibleClass),d.progress=i?-m:m,d.originalProgress=i?-T:T}}function cp(n){const e=this;if(typeof n>"u"){const f=e.rtlTranslate?-1:1;n=e&&e.translate&&e.translate*f||0}const t=e.params,r=e.maxTranslate()-e.minTranslate();let{progress:i,isBeginning:s,isEnd:a,progressLoop:l}=e;const c=s,d=a;if(r===0)i=0,s=!0,a=!0;else{i=(n-e.minTranslate())/r;const f=Math.abs(n-e.minTranslate())<1,m=Math.abs(n-e.maxTranslate())<1;s=f||i<=0,a=m||i>=1,f&&(i=0),m&&(i=1)}if(t.loop){const f=e.getSlideIndexByData(0),m=e.getSlideIndexByData(e.slides.length-1),T=e.slidesGrid[f],I=e.slidesGrid[m],A=e.slidesGrid[e.slidesGrid.length-1],R=Math.abs(n);R>=T?l=(R-T)/A:l=(R+A-I)/A,l>1&&(l-=1)}Object.assign(e,{progress:i,progressLoop:l,isBeginning:s,isEnd:a}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(n),s&&!c&&e.emit("reachBeginning toEdge"),a&&!d&&e.emit("reachEnd toEdge"),(c&&!s||d&&!a)&&e.emit("fromEdge"),e.emit("progress",i)}const Xi=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function up(){const n=this,{slides:e,params:t,slidesEl:r,activeIndex:i}=n,s=n.virtual&&t.virtual.enabled,a=n.grid&&t.grid&&t.grid.rows>1,l=m=>Je(r,`.${t.slideClass}${m}, swiper-slide${m}`)[0];let c,d,f;if(s)if(t.loop){let m=i-n.virtual.slidesBefore;m<0&&(m=n.virtual.slides.length+m),m>=n.virtual.slides.length&&(m-=n.virtual.slides.length),c=l(`[data-swiper-slide-index="${m}"]`)}else c=l(`[data-swiper-slide-index="${i}"]`);else a?(c=e.filter(m=>m.column===i)[0],f=e.filter(m=>m.column===i+1)[0],d=e.filter(m=>m.column===i-1)[0]):c=e[i];c&&(a||(f=Qf(c,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!f&&(f=e[0]),d=Kf(c,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!d===0&&(d=e[e.length-1]))),e.forEach(m=>{Xi(m,m===c,t.slideActiveClass),Xi(m,m===f,t.slideNextClass),Xi(m,m===d,t.slidePrevClass)}),n.emitSlidesClasses()}const Hr=(n,e)=>{if(!n||n.destroyed||!n.params)return;const t=()=>n.isElement?"swiper-slide":`.${n.params.slideClass}`,r=e.closest(t());if(r){let i=r.querySelector(`.${n.params.lazyPreloaderClass}`);!i&&n.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},Ji=(n,e)=>{if(!n.slides[e])return;const t=n.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},ps=n=>{if(!n||n.destroyed||!n.params)return;let e=n.params.lazyPreloadPrevNext;const t=n.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const r=n.params.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(n.params.slidesPerView),i=n.activeIndex;if(n.params.grid&&n.params.grid.rows>1){const a=i,l=[a-e];l.push(...Array.from({length:e}).map((c,d)=>a+r+d)),n.slides.forEach((c,d)=>{l.includes(c.column)&&Ji(n,d)});return}const s=i+r-1;if(n.params.rewind||n.params.loop)for(let a=i-e;a<=s+e;a+=1){const l=(a%t+t)%t;(l<i||l>s)&&Ji(n,l)}else for(let a=Math.max(i-e,0);a<=Math.min(s+e,t-1);a+=1)a!==i&&(a>s||a<i)&&Ji(n,a)};function hp(n){const{slidesGrid:e,params:t}=n,r=n.rtlTranslate?n.translate:-n.translate;let i;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?r>=e[s]&&r<e[s+1]-(e[s+1]-e[s])/2?i=s:r>=e[s]&&r<e[s+1]&&(i=s+1):r>=e[s]&&(i=s);return t.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function dp(n){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:r,params:i,activeIndex:s,realIndex:a,snapIndex:l}=e;let c=n,d;const f=I=>{let A=I-e.virtual.slidesBefore;return A<0&&(A=e.virtual.slides.length+A),A>=e.virtual.slides.length&&(A-=e.virtual.slides.length),A};if(typeof c>"u"&&(c=hp(e)),r.indexOf(t)>=0)d=r.indexOf(t);else{const I=Math.min(i.slidesPerGroupSkip,c);d=I+Math.floor((c-I)/i.slidesPerGroup)}if(d>=r.length&&(d=r.length-1),c===s&&!e.params.loop){d!==l&&(e.snapIndex=d,e.emit("snapIndexChange"));return}if(c===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=f(c);return}const m=e.grid&&i.grid&&i.grid.rows>1;let T;if(e.virtual&&i.virtual.enabled&&i.loop)T=f(c);else if(m){const I=e.slides.filter(R=>R.column===c)[0];let A=parseInt(I.getAttribute("data-swiper-slide-index"),10);Number.isNaN(A)&&(A=Math.max(e.slides.indexOf(I),0)),T=Math.floor(A/i.grid.rows)}else if(e.slides[c]){const I=e.slides[c].getAttribute("data-swiper-slide-index");I?T=parseInt(I,10):T=c}else T=c;Object.assign(e,{previousSnapIndex:l,snapIndex:d,previousRealIndex:a,realIndex:T,previousIndex:s,activeIndex:c}),e.initialized&&ps(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(a!==T&&e.emit("realIndexChange"),e.emit("slideChange"))}function fp(n,e){const t=this,r=t.params;let i=n.closest(`.${r.slideClass}, swiper-slide`);!i&&t.isElement&&e&&e.length>1&&e.includes(n)&&[...e.slice(e.indexOf(n)+1,e.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let s=!1,a;if(i){for(let l=0;l<t.slides.length;l+=1)if(t.slides[l]===i){s=!0,a=l;break}}if(i&&s)t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=a;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}r.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var pp={updateSize:ip,updateSlides:sp,updateAutoHeight:op,updateSlidesOffset:ap,updateSlidesProgress:lp,updateProgress:cp,updateSlidesClasses:up,updateActiveIndex:dp,updateClickedSlide:fp};function mp(n){n===void 0&&(n=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:r,translate:i,wrapperEl:s}=e;if(t.virtualTranslate)return r?-i:i;if(t.cssMode)return i;let a=Hf(s,n);return a+=e.cssOverflowAdjustment(),r&&(a=-a),a||0}function gp(n,e){const t=this,{rtlTranslate:r,params:i,wrapperEl:s,progress:a}=t;let l=0,c=0;const d=0;t.isHorizontal()?l=r?-n:n:c=n,i.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?l:c,i.cssMode?s[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-l:-c:i.virtualTranslate||(t.isHorizontal()?l-=t.cssOverflowAdjustment():c-=t.cssOverflowAdjustment(),s.style.transform=`translate3d(${l}px, ${c}px, ${d}px)`);let f;const m=t.maxTranslate()-t.minTranslate();m===0?f=0:f=(n-t.minTranslate())/m,f!==a&&t.updateProgress(n),t.emit("setTranslate",t.translate,e)}function _p(){return-this.snapGrid[0]}function yp(){return-this.snapGrid[this.snapGrid.length-1]}function vp(n,e,t,r,i){n===void 0&&(n=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),r===void 0&&(r=!0);const s=this,{params:a,wrapperEl:l}=s;if(s.animating&&a.preventInteractionOnTransition)return!1;const c=s.minTranslate(),d=s.maxTranslate();let f;if(r&&n>c?f=c:r&&n<d?f=d:f=n,s.updateProgress(f),a.cssMode){const m=s.isHorizontal();if(e===0)l[m?"scrollLeft":"scrollTop"]=-f;else{if(!s.support.smoothScroll)return Hl({swiper:s,targetPosition:-f,side:m?"left":"top"}),!0;l.scrollTo({[m?"left":"top"]:-f,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(f),t&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(f),t&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(T){!s||s.destroyed||T.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,t&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var Tp={getTranslate:mp,setTranslate:gp,minTranslate:_p,maxTranslate:yp,translateTo:vp};function wp(n,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${n}ms`,t.wrapperEl.style.transitionDelay=n===0?"0ms":""),t.emit("setTransition",n,e)}function Kl(n){let{swiper:e,runCallbacks:t,direction:r,step:i}=n;const{activeIndex:s,previousIndex:a}=e;let l=r;if(l||(s>a?l="next":s<a?l="prev":l="reset"),e.emit(`transition${i}`),t&&s!==a){if(l==="reset"){e.emit(`slideResetTransition${i}`);return}e.emit(`slideChangeTransition${i}`),l==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}function Ep(n,e){n===void 0&&(n=!0);const t=this,{params:r}=t;r.cssMode||(r.autoHeight&&t.updateAutoHeight(),Kl({swiper:t,runCallbacks:n,direction:e,step:"Start"}))}function Ip(n,e){n===void 0&&(n=!0);const t=this,{params:r}=t;t.animating=!1,!r.cssMode&&(t.setTransition(0),Kl({swiper:t,runCallbacks:n,direction:e,step:"End"}))}var Sp={setTransition:wp,transitionStart:Ep,transitionEnd:Ip};function Ap(n,e,t,r,i){n===void 0&&(n=0),t===void 0&&(t=!0),typeof n=="string"&&(n=parseInt(n,10));const s=this;let a=n;a<0&&(a=0);const{params:l,snapGrid:c,slidesGrid:d,previousIndex:f,activeIndex:m,rtlTranslate:T,wrapperEl:I,enabled:A}=s;if(!A&&!r&&!i||s.destroyed||s.animating&&l.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=s.params.speed);const R=Math.min(s.params.slidesPerGroupSkip,a);let C=R+Math.floor((a-R)/s.params.slidesPerGroup);C>=c.length&&(C=c.length-1);const V=-c[C];if(l.normalizeSlideIndex)for(let k=0;k<d.length;k+=1){const N=-Math.floor(V*100),B=Math.floor(d[k]*100),$=Math.floor(d[k+1]*100);typeof d[k+1]<"u"?N>=B&&N<$-($-B)/2?a=k:N>=B&&N<$&&(a=k+1):N>=B&&(a=k)}if(s.initialized&&a!==m&&(!s.allowSlideNext&&(T?V>s.translate&&V>s.minTranslate():V<s.translate&&V<s.minTranslate())||!s.allowSlidePrev&&V>s.translate&&V>s.maxTranslate()&&(m||0)!==a))return!1;a!==(f||0)&&t&&s.emit("beforeSlideChangeStart"),s.updateProgress(V);let M;if(a>m?M="next":a<m?M="prev":M="reset",T&&-V===s.translate||!T&&V===s.translate)return s.updateActiveIndex(a),l.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),l.effect!=="slide"&&s.setTranslate(V),M!=="reset"&&(s.transitionStart(t,M),s.transitionEnd(t,M)),!1;if(l.cssMode){const k=s.isHorizontal(),N=T?V:-V;if(e===0){const B=s.virtual&&s.params.virtual.enabled;B&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),B&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{I[k?"scrollLeft":"scrollTop"]=N})):I[k?"scrollLeft":"scrollTop"]=N,B&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return Hl({swiper:s,targetPosition:N,side:k?"left":"top"}),!0;I.scrollTo({[k?"left":"top"]:N,behavior:"smooth"})}return!0}return s.setTransition(e),s.setTranslate(V),s.updateActiveIndex(a),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,r),s.transitionStart(t,M),e===0?s.transitionEnd(t,M):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(N){!s||s.destroyed||N.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(t,M))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function bp(n,e,t,r){n===void 0&&(n=0),t===void 0&&(t=!0),typeof n=="string"&&(n=parseInt(n,10));const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);const s=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=n;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(s){const T=a*i.params.grid.rows;l=i.slides.filter(I=>I.getAttribute("data-swiper-slide-index")*1===T)[0].column}else l=i.getSlideIndexByData(a);const c=s?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:d}=i.params;let f=i.params.slidesPerView;f==="auto"?f=i.slidesPerViewDynamic():(f=Math.ceil(parseFloat(i.params.slidesPerView,10)),d&&f%2===0&&(f=f+1));let m=c-l<f;if(d&&(m=m||l<Math.ceil(f/2)),r&&d&&i.params.slidesPerView!=="auto"&&!s&&(m=!1),m){const T=d?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:T,slideTo:!0,activeSlideIndex:T==="next"?l+1:l-c+1,slideRealIndex:T==="next"?i.realIndex:void 0})}if(s){const T=a*i.params.grid.rows;a=i.slides.filter(I=>I.getAttribute("data-swiper-slide-index")*1===T)[0].column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,e,t,r)}),i}function Pp(n,e,t){e===void 0&&(e=!0);const r=this,{enabled:i,params:s,animating:a}=r;if(!i||r.destroyed)return r;typeof n>"u"&&(n=r.params.speed);let l=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const c=r.activeIndex<s.slidesPerGroupSkip?1:l,d=r.virtual&&s.virtual.enabled;if(s.loop){if(a&&!d&&s.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+c,n,e,t)}),!0}return s.rewind&&r.isEnd?r.slideTo(0,n,e,t):r.slideTo(r.activeIndex+c,n,e,t)}function Rp(n,e,t){e===void 0&&(e=!0);const r=this,{params:i,snapGrid:s,slidesGrid:a,rtlTranslate:l,enabled:c,animating:d}=r;if(!c||r.destroyed)return r;typeof n>"u"&&(n=r.params.speed);const f=r.virtual&&i.virtual.enabled;if(i.loop){if(d&&!f&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const m=l?r.translate:-r.translate;function T(V){return V<0?-Math.floor(Math.abs(V)):Math.floor(V)}const I=T(m),A=s.map(V=>T(V));let R=s[A.indexOf(I)-1];if(typeof R>"u"&&i.cssMode){let V;s.forEach((M,k)=>{I>=M&&(V=k)}),typeof V<"u"&&(R=s[V>0?V-1:V])}let C=0;if(typeof R<"u"&&(C=a.indexOf(R),C<0&&(C=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(C=C-r.slidesPerViewDynamic("previous",!0)+1,C=Math.max(C,0))),i.rewind&&r.isBeginning){const V=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(V,n,e,t)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(C,n,e,t)}),!0;return r.slideTo(C,n,e,t)}function Cp(n,e,t){e===void 0&&(e=!0);const r=this;if(!r.destroyed)return typeof n>"u"&&(n=r.params.speed),r.slideTo(r.activeIndex,n,e,t)}function xp(n,e,t,r){e===void 0&&(e=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof n>"u"&&(n=i.params.speed);let s=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,s),l=a+Math.floor((s-a)/i.params.slidesPerGroup),c=i.rtlTranslate?i.translate:-i.translate;if(c>=i.snapGrid[l]){const d=i.snapGrid[l],f=i.snapGrid[l+1];c-d>(f-d)*r&&(s+=i.params.slidesPerGroup)}else{const d=i.snapGrid[l-1],f=i.snapGrid[l];c-d<=(f-d)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,n,e,t)}function Vp(){const n=this;if(n.destroyed)return;const{params:e,slidesEl:t}=n,r=e.slidesPerView==="auto"?n.slidesPerViewDynamic():e.slidesPerView;let i=n.clickedIndex,s;const a=n.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(n.animating)return;s=parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?i<n.loopedSlides-r/2||i>n.slides.length-n.loopedSlides+r/2?(n.loopFix(),i=n.getSlideIndex(Je(t,`${a}[data-swiper-slide-index="${s}"]`)[0]),fs(()=>{n.slideTo(i)})):n.slideTo(i):i>n.slides.length-r?(n.loopFix(),i=n.getSlideIndex(Je(t,`${a}[data-swiper-slide-index="${s}"]`)[0]),fs(()=>{n.slideTo(i)})):n.slideTo(i)}else n.slideTo(i)}var kp={slideTo:Ap,slideToLoop:bp,slideNext:Pp,slidePrev:Rp,slideReset:Cp,slideToClosest:xp,slideToClickedSlide:Vp};function Dp(n){const e=this,{params:t,slidesEl:r}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;const i=()=>{Je(r,`.${t.slideClass}, swiper-slide`).forEach((m,T)=>{m.setAttribute("data-swiper-slide-index",T)})},s=e.grid&&t.grid&&t.grid.rows>1,a=t.slidesPerGroup*(s?t.grid.rows:1),l=e.slides.length%a!==0,c=s&&e.slides.length%t.grid.rows!==0,d=f=>{for(let m=0;m<f;m+=1){const T=e.isElement?ti("swiper-slide",[t.slideBlankClass]):ti("div",[t.slideClass,t.slideBlankClass]);e.slidesEl.append(T)}};if(l){if(t.loopAddBlankSlides){const f=a-e.slides.length%a;d(f),e.recalcSlides(),e.updateSlides()}else ei("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(c){if(t.loopAddBlankSlides){const f=t.grid.rows-e.slides.length%t.grid.rows;d(f),e.recalcSlides(),e.updateSlides()}else ei("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();e.loopFix({slideRealIndex:n,direction:t.centeredSlides?void 0:"next"})}function Op(n){let{slideRealIndex:e,slideTo:t=!0,direction:r,setTranslate:i,activeSlideIndex:s,byController:a,byMousewheel:l}=n===void 0?{}:n;const c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");const{slides:d,allowSlidePrev:f,allowSlideNext:m,slidesEl:T,params:I}=c,{centeredSlides:A}=I;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&I.virtual.enabled){t&&(!I.centeredSlides&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):I.centeredSlides&&c.snapIndex<I.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=f,c.allowSlideNext=m,c.emit("loopFix");return}let R=I.slidesPerView;R==="auto"?R=c.slidesPerViewDynamic():(R=Math.ceil(parseFloat(I.slidesPerView,10)),A&&R%2===0&&(R=R+1));const C=I.slidesPerGroupAuto?R:I.slidesPerGroup;let V=C;V%C!==0&&(V+=C-V%C),V+=I.loopAdditionalSlides,c.loopedSlides=V;const M=c.grid&&I.grid&&I.grid.rows>1;d.length<R+V?ei("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):M&&I.grid.fill==="row"&&ei("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const k=[],N=[];let B=c.activeIndex;typeof s>"u"?s=c.getSlideIndex(d.filter(_=>_.classList.contains(I.slideActiveClass))[0]):B=s;const $=r==="next"||!r,b=r==="prev"||!r;let y=0,g=0;const v=M?Math.ceil(d.length/I.grid.rows):d.length,S=(M?d[s].column:s)+(A&&typeof i>"u"?-R/2+.5:0);if(S<V){y=Math.max(V-S,C);for(let _=0;_<V-S;_+=1){const Y=_-Math.floor(_/v)*v;if(M){const ie=v-Y-1;for(let Oe=d.length-1;Oe>=0;Oe-=1)d[Oe].column===ie&&k.push(Oe)}else k.push(v-Y-1)}}else if(S+R>v-V){g=Math.max(S-(v-V*2),C);for(let _=0;_<g;_+=1){const Y=_-Math.floor(_/v)*v;M?d.forEach((ie,Oe)=>{ie.column===Y&&N.push(Oe)}):N.push(Y)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),b&&k.forEach(_=>{d[_].swiperLoopMoveDOM=!0,T.prepend(d[_]),d[_].swiperLoopMoveDOM=!1}),$&&N.forEach(_=>{d[_].swiperLoopMoveDOM=!0,T.append(d[_]),d[_].swiperLoopMoveDOM=!1}),c.recalcSlides(),I.slidesPerView==="auto"?c.updateSlides():M&&(k.length>0&&b||N.length>0&&$)&&c.slides.forEach((_,Y)=>{c.grid.updateSlide(Y,_,c.slides)}),I.watchSlidesProgress&&c.updateSlidesOffset(),t){if(k.length>0&&b){if(typeof e>"u"){const _=c.slidesGrid[B],ie=c.slidesGrid[B+y]-_;l?c.setTranslate(c.translate-ie):(c.slideTo(B+Math.ceil(y),0,!1,!0),i&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-ie,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-ie))}else if(i){const _=M?k.length/I.grid.rows:k.length;c.slideTo(c.activeIndex+_,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(N.length>0&&$)if(typeof e>"u"){const _=c.slidesGrid[B],ie=c.slidesGrid[B-g]-_;l?c.setTranslate(c.translate-ie):(c.slideTo(B-g,0,!1,!0),i&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-ie,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-ie))}else{const _=M?N.length/I.grid.rows:N.length;c.slideTo(c.activeIndex-_,0,!1,!0)}}if(c.allowSlidePrev=f,c.allowSlideNext=m,c.controller&&c.controller.control&&!a){const _={slideRealIndex:e,direction:r,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(Y=>{!Y.destroyed&&Y.params.loop&&Y.loopFix({..._,slideTo:Y.params.slidesPerView===I.slidesPerView?t:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({..._,slideTo:c.controller.control.params.slidesPerView===I.slidesPerView?t:!1})}c.emit("loopFix")}function Mp(){const n=this,{params:e,slidesEl:t}=n;if(!e.loop||n.virtual&&n.params.virtual.enabled)return;n.recalcSlides();const r=[];n.slides.forEach(i=>{const s=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[s]=i}),n.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{t.append(i)}),n.recalcSlides(),n.slideTo(n.realIndex,0)}var Np={loopCreate:Dp,loopFix:Op,loopDestroy:Mp};function Lp(n){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=n?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function Fp(){const n=this;n.params.watchOverflow&&n.isLocked||n.params.cssMode||(n.isElement&&(n.__preventObserver__=!0),n[n.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1}))}var Up={setGrabCursor:Lp,unsetGrabCursor:Fp};function Bp(n,e){e===void 0&&(e=this);function t(r){if(!r||r===yn()||r===Ge())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(n);return!i&&!r.getRootNode?null:i||t(r.getRootNode().host)}return t(e)}function wa(n,e,t){const r=Ge(),{params:i}=n,s=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return s&&(t<=a||t>=r.innerWidth-a)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function zp(n){const e=this,t=yn();let r=n;r.originalEvent&&(r=r.originalEvent);const i=e.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){wa(e,r,r.targetTouches[0].pageX);return}const{params:s,touches:a,enabled:l}=e;if(!l||!s.simulateTouch&&r.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let c=r.target;if(s.touchEventsTarget==="wrapper"&&!Wf(c,e.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const d=!!s.noSwipingClass&&s.noSwipingClass!=="",f=r.composedPath?r.composedPath():r.path;d&&r.target&&r.target.shadowRoot&&f&&(c=f[0]);const m=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,T=!!(r.target&&r.target.shadowRoot);if(s.noSwiping&&(T?Bp(m,c):c.closest(m))){e.allowClick=!0;return}if(s.swipeHandler&&!c.closest(s.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const I=a.currentX,A=a.currentY;if(!wa(e,r,I))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=I,a.startY=A,i.touchStartTime=Zr(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let R=!0;c.matches(i.focusableElements)&&(R=!1,c.nodeName==="SELECT"&&(i.isTouched=!1)),t.activeElement&&t.activeElement.matches(i.focusableElements)&&t.activeElement!==c&&t.activeElement.blur();const C=R&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||C)&&!c.isContentEditable&&r.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",r)}function Gp(n){const e=yn(),t=this,r=t.touchEventsData,{params:i,touches:s,rtlTranslate:a,enabled:l}=t;if(!l||!i.simulateTouch&&n.pointerType==="mouse")return;let c=n;if(c.originalEvent&&(c=c.originalEvent),c.type==="pointermove"&&(r.touchId!==null||c.pointerId!==r.pointerId))return;let d;if(c.type==="touchmove"){if(d=[...c.changedTouches].filter($=>$.identifier===r.touchId)[0],!d||d.identifier!==r.touchId)return}else d=c;if(!r.isTouched){r.startMoving&&r.isScrolling&&t.emit("touchMoveOpposite",c);return}const f=d.pageX,m=d.pageY;if(c.preventedByNestedSwiper){s.startX=f,s.startY=m;return}if(!t.allowTouchMove){c.target.matches(r.focusableElements)||(t.allowClick=!1),r.isTouched&&(Object.assign(s,{startX:f,startY:m,currentX:f,currentY:m}),r.touchStartTime=Zr());return}if(i.touchReleaseOnEdges&&!i.loop){if(t.isVertical()){if(m<s.startY&&t.translate<=t.maxTranslate()||m>s.startY&&t.translate>=t.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(f<s.startX&&t.translate<=t.maxTranslate()||f>s.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&c.target===e.activeElement&&c.target.matches(r.focusableElements)){r.isMoved=!0,t.allowClick=!1;return}r.allowTouchCallbacks&&t.emit("touchMove",c),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=f,s.currentY=m;const T=s.currentX-s.startX,I=s.currentY-s.startY;if(t.params.threshold&&Math.sqrt(T**2+I**2)<t.params.threshold)return;if(typeof r.isScrolling>"u"){let $;t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:T*T+I*I>=25&&($=Math.atan2(Math.abs(I),Math.abs(T))*180/Math.PI,r.isScrolling=t.isHorizontal()?$>i.touchAngle:90-$>i.touchAngle)}if(r.isScrolling&&t.emit("touchMoveOpposite",c),typeof r.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(r.startMoving=!0),r.isScrolling||c.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;t.allowClick=!1,!i.cssMode&&c.cancelable&&c.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&c.stopPropagation();let A=t.isHorizontal()?T:I,R=t.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(A=Math.abs(A)*(a?1:-1),R=Math.abs(R)*(a?1:-1)),s.diff=A,A*=i.touchRatio,a&&(A=-A,R=-R);const C=t.touchesDirection;t.swipeDirection=A>0?"prev":"next",t.touchesDirection=R>0?"prev":"next";const V=t.params.loop&&!i.cssMode,M=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!r.isMoved){if(V&&M&&t.loopFix({direction:t.swipeDirection}),r.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const $=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent($)}r.allowMomentumBounce=!1,i.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",c)}let k;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&C!==t.touchesDirection&&V&&M&&Math.abs(A)>=1){Object.assign(s,{startX:f,startY:m,currentX:f,currentY:m,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}t.emit("sliderMove",c),r.isMoved=!0,r.currentTranslate=A+r.startTranslate;let N=!0,B=i.resistanceRatio;if(i.touchReleaseOnEdges&&(B=0),A>0?(V&&M&&!k&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(i.slidesPerView!=="auto"&&t.slides.length-i.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>t.minTranslate()&&(N=!1,i.resistance&&(r.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+r.startTranslate+A)**B))):A<0&&(V&&M&&!k&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(i.slidesPerView!=="auto"&&t.slides.length-i.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(i.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<t.maxTranslate()&&(N=!1,i.resistance&&(r.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-r.startTranslate-A)**B))),N&&(c.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(A)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&t.freeMode||i.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(r.currentTranslate),t.setTranslate(r.currentTranslate))}function jp(n){const e=this,t=e.touchEventsData;let r=n;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(B=>B.identifier===t.touchId)[0],!i||i.identifier!==t.touchId)return}else{if(t.touchId!==null||r.pointerId!==t.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:a,touches:l,rtlTranslate:c,slidesGrid:d,enabled:f}=e;if(!f||!a.simulateTouch&&r.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",r),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&a.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}a.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const m=Zr(),T=m-t.touchStartTime;if(e.allowClick){const B=r.path||r.composedPath&&r.composedPath();e.updateClickedSlide(B&&B[0]||r.target,B),e.emit("tap click",r),T<300&&m-t.lastClickTime<300&&e.emit("doubleTap doubleClick",r)}if(t.lastClickTime=Zr(),fs(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||l.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let I;if(a.followFinger?I=c?e.translate:-e.translate:I=-t.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:I});return}const A=I>=-e.maxTranslate()&&!e.params.loop;let R=0,C=e.slidesSizesGrid[0];for(let B=0;B<d.length;B+=B<a.slidesPerGroupSkip?1:a.slidesPerGroup){const $=B<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof d[B+$]<"u"?(A||I>=d[B]&&I<d[B+$])&&(R=B,C=d[B+$]-d[B]):(A||I>=d[B])&&(R=B,C=d[d.length-1]-d[d.length-2])}let V=null,M=null;a.rewind&&(e.isBeginning?M=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(V=0));const k=(I-d[R])/C,N=R<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(T>a.longSwipesMs){if(!a.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(k>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?V:R+N):e.slideTo(R)),e.swipeDirection==="prev"&&(k>1-a.longSwipesRatio?e.slideTo(R+N):M!==null&&k<0&&Math.abs(k)>a.longSwipesRatio?e.slideTo(M):e.slideTo(R))}else{if(!a.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(r.target===e.navigation.nextEl||r.target===e.navigation.prevEl)?r.target===e.navigation.nextEl?e.slideTo(R+N):e.slideTo(R):(e.swipeDirection==="next"&&e.slideTo(V!==null?V:R+N),e.swipeDirection==="prev"&&e.slideTo(M!==null?M:R))}}function Ea(){const n=this,{params:e,el:t}=n;if(t&&t.offsetWidth===0)return;e.breakpoints&&n.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=n,a=n.virtual&&n.params.virtual.enabled;n.allowSlideNext=!0,n.allowSlidePrev=!0,n.updateSize(),n.updateSlides(),n.updateSlidesClasses();const l=a&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&n.isEnd&&!n.isBeginning&&!n.params.centeredSlides&&!l?n.slideTo(n.slides.length-1,0,!1,!0):n.params.loop&&!a?n.slideToLoop(n.realIndex,0,!1,!0):n.slideTo(n.activeIndex,0,!1,!0),n.autoplay&&n.autoplay.running&&n.autoplay.paused&&(clearTimeout(n.autoplay.resizeTimeout),n.autoplay.resizeTimeout=setTimeout(()=>{n.autoplay&&n.autoplay.running&&n.autoplay.paused&&n.autoplay.resume()},500)),n.allowSlidePrev=i,n.allowSlideNext=r,n.params.watchOverflow&&s!==n.snapGrid&&n.checkOverflow()}function qp(n){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&n.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(n.stopPropagation(),n.stopImmediatePropagation())))}function Hp(){const n=this,{wrapperEl:e,rtlTranslate:t,enabled:r}=n;if(!r)return;n.previousTranslate=n.translate,n.isHorizontal()?n.translate=-e.scrollLeft:n.translate=-e.scrollTop,n.translate===0&&(n.translate=0),n.updateActiveIndex(),n.updateSlidesClasses();let i;const s=n.maxTranslate()-n.minTranslate();s===0?i=0:i=(n.translate-n.minTranslate())/s,i!==n.progress&&n.updateProgress(t?-n.translate:n.translate),n.emit("setTranslate",n.translate,!1)}function $p(n){const e=this;Hr(e,n.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function Wp(){const n=this;n.documentTouchHandlerProceeded||(n.documentTouchHandlerProceeded=!0,n.params.touchReleaseOnEdges&&(n.el.style.touchAction="auto"))}const Ql=(n,e)=>{const t=yn(),{params:r,el:i,wrapperEl:s,device:a}=n,l=!!r.nested,c=e==="on"?"addEventListener":"removeEventListener",d=e;!i||typeof i=="string"||(t[c]("touchstart",n.onDocumentTouchStart,{passive:!1,capture:l}),i[c]("touchstart",n.onTouchStart,{passive:!1}),i[c]("pointerdown",n.onTouchStart,{passive:!1}),t[c]("touchmove",n.onTouchMove,{passive:!1,capture:l}),t[c]("pointermove",n.onTouchMove,{passive:!1,capture:l}),t[c]("touchend",n.onTouchEnd,{passive:!0}),t[c]("pointerup",n.onTouchEnd,{passive:!0}),t[c]("pointercancel",n.onTouchEnd,{passive:!0}),t[c]("touchcancel",n.onTouchEnd,{passive:!0}),t[c]("pointerout",n.onTouchEnd,{passive:!0}),t[c]("pointerleave",n.onTouchEnd,{passive:!0}),t[c]("contextmenu",n.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[c]("click",n.onClick,!0),r.cssMode&&s[c]("scroll",n.onScroll),r.updateOnWindowResize?n[d](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Ea,!0):n[d]("observerUpdate",Ea,!0),i[c]("load",n.onLoad,{capture:!0}))};function Kp(){const n=this,{params:e}=n;n.onTouchStart=zp.bind(n),n.onTouchMove=Gp.bind(n),n.onTouchEnd=jp.bind(n),n.onDocumentTouchStart=Wp.bind(n),e.cssMode&&(n.onScroll=Hp.bind(n)),n.onClick=qp.bind(n),n.onLoad=$p.bind(n),Ql(n,"on")}function Qp(){Ql(this,"off")}var Yp={attachEvents:Kp,detachEvents:Qp};const Ia=(n,e)=>n.grid&&e.grid&&e.grid.rows>1;function Xp(){const n=this,{realIndex:e,initialized:t,params:r,el:i}=n,s=r.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const a=n.getBreakpoint(s,n.params.breakpointsBase,n.el);if(!a||n.currentBreakpoint===a)return;const c=(a in s?s[a]:void 0)||n.originalParams,d=Ia(n,r),f=Ia(n,c),m=n.params.grabCursor,T=c.grabCursor,I=r.enabled;d&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),n.emitContainerClasses()):!d&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(c.grid.fill&&c.grid.fill==="column"||!c.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),n.emitContainerClasses()),m&&!T?n.unsetGrabCursor():!m&&T&&n.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(k=>{if(typeof c[k]>"u")return;const N=r[k]&&r[k].enabled,B=c[k]&&c[k].enabled;N&&!B&&n[k].disable(),!N&&B&&n[k].enable()});const A=c.direction&&c.direction!==r.direction,R=r.loop&&(c.slidesPerView!==r.slidesPerView||A),C=r.loop;A&&t&&n.changeDirection(),Ue(n.params,c);const V=n.params.enabled,M=n.params.loop;Object.assign(n,{allowTouchMove:n.params.allowTouchMove,allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev}),I&&!V?n.disable():!I&&V&&n.enable(),n.currentBreakpoint=a,n.emit("_beforeBreakpoint",c),t&&(R?(n.loopDestroy(),n.loopCreate(e),n.updateSlides()):!C&&M?(n.loopCreate(e),n.updateSlides()):C&&!M&&n.loopDestroy()),n.emit("breakpoint",c)}function Jp(n,e,t){if(e===void 0&&(e="window"),!n||e==="container"&&!t)return;let r=!1;const i=Ge(),s=e==="window"?i.innerHeight:t.clientHeight,a=Object.keys(n).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const c=parseFloat(l.substr(1));return{value:s*c,point:l}}return{value:l,point:l}});a.sort((l,c)=>parseInt(l.value,10)-parseInt(c.value,10));for(let l=0;l<a.length;l+=1){const{point:c,value:d}=a[l];e==="window"?i.matchMedia(`(min-width: ${d}px)`).matches&&(r=c):d<=t.clientWidth&&(r=c)}return r||"max"}var Zp={setBreakpoint:Xp,getBreakpoint:Jp};function em(n,e){const t=[];return n.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&t.push(e+i)}):typeof r=="string"&&t.push(e+r)}),t}function tm(){const n=this,{classNames:e,params:t,rtl:r,el:i,device:s}=n,a=em(["initialized",t.direction,{"free-mode":n.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:r},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...a),i.classList.add(...e),n.emitContainerClasses()}function nm(){const n=this,{el:e,classNames:t}=n;!e||typeof e=="string"||(e.classList.remove(...t),n.emitContainerClasses())}var rm={addClasses:tm,removeClasses:nm};function im(){const n=this,{isLocked:e,params:t}=n,{slidesOffsetBefore:r}=t;if(r){const i=n.slides.length-1,s=n.slidesGrid[i]+n.slidesSizesGrid[i]+r*2;n.isLocked=n.size>s}else n.isLocked=n.snapGrid.length===1;t.allowSlideNext===!0&&(n.allowSlideNext=!n.isLocked),t.allowSlidePrev===!0&&(n.allowSlidePrev=!n.isLocked),e&&e!==n.isLocked&&(n.isEnd=!1),e!==n.isLocked&&n.emit(n.isLocked?"lock":"unlock")}var sm={checkOverflow:im},Sa={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function om(n,e){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],s=r[i];if(typeof s!="object"||s===null){Ue(e,r);return}if(n[i]===!0&&(n[i]={enabled:!0}),i==="navigation"&&n[i]&&n[i].enabled&&!n[i].prevEl&&!n[i].nextEl&&(n[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&n[i]&&n[i].enabled&&!n[i].el&&(n[i].auto=!0),!(i in n&&"enabled"in s)){Ue(e,r);return}typeof n[i]=="object"&&!("enabled"in n[i])&&(n[i].enabled=!0),n[i]||(n[i]={enabled:!1}),Ue(e,r)}}const Zi={eventsEmitter:rp,update:pp,translate:Tp,transition:Sp,slide:kp,loop:Np,grabCursor:Up,events:Yp,breakpoints:Zp,checkOverflow:sm,classes:rm},es={};class Fe{constructor(){let e,t;for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?t=i[0]:[e,t]=i,t||(t={}),t=Ue({},t),e&&!t.el&&(t.el=e);const a=yn();if(t.el&&typeof t.el=="string"&&a.querySelectorAll(t.el).length>1){const f=[];return a.querySelectorAll(t.el).forEach(m=>{const T=Ue({},t,{el:m});f.push(new Fe(T))}),f}const l=this;l.__swiper__=!0,l.support=$l(),l.device=Wl({userAgent:t.userAgent}),l.browser=ep(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],t.modules&&Array.isArray(t.modules)&&l.modules.push(...t.modules);const c={};l.modules.forEach(f=>{f({params:t,swiper:l,extendParams:om(t,c),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const d=Ue({},Sa,c);return l.params=Ue({},d,es,t),l.originalParams=Ue({},l.params),l.passedParams=Ue({},t),l.params&&l.params.on&&Object.keys(l.params.on).forEach(f=>{l.on(f,l.params.on[f])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:r}=this,i=Je(t,`.${r.slideClass}, swiper-slide`),s=ya(i[0]);return ya(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:r}=e;e.slides=Je(t,`.${r.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const r=this;e=Math.min(Math.max(e,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*e+i;r.translateTo(a,typeof t>"u"?0:t),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(r=>{const i=e.getSlideClasses(r);t.push({slideEl:r,classNames:i}),e.emit("_slideClass",r,i)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const r=this,{params:i,slides:s,slidesGrid:a,slidesSizesGrid:l,size:c,activeIndex:d}=r;let f=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let m=s[d]?Math.ceil(s[d].swiperSlideSize):0,T;for(let I=d+1;I<s.length;I+=1)s[I]&&!T&&(m+=Math.ceil(s[I].swiperSlideSize),f+=1,m>c&&(T=!0));for(let I=d-1;I>=0;I-=1)s[I]&&!T&&(m+=s[I].swiperSlideSize,f+=1,m>c&&(T=!0))}else if(e==="current")for(let m=d+1;m<s.length;m+=1)(t?a[m]+l[m]-a[d]<c:a[m]-a[d]<c)&&(f+=1);else for(let m=d-1;m>=0;m-=1)a[d]-a[m]<c&&(f+=1);return f}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:r}=e;r.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&Hr(e,a)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function i(){const a=e.rtlTranslate?e.translate*-1:e.translate,l=Math.min(Math.max(a,e.maxTranslate()),e.minTranslate());e.setTranslate(l),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&e.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&e.isEnd&&!r.centeredSlides){const a=e.virtual&&r.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(a.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||i()}r.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const r=this,i=r.params.direction;return e||(e=i==="horizontal"?"vertical":"horizontal"),e===i||e!=="horizontal"&&e!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${e}`),r.emitContainerClasses(),r.params.direction=e,r.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),r.emit("changeDirection"),t&&r.update()),r}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let r=e||t.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=t,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):Je(r,i())[0];return!a&&t.params.createElements&&(a=ti("div",t.params.wrapperClass),r.append(a),Je(r,`.${t.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(t,{el:r,wrapperEl:a,slidesEl:t.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:t.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||Et(r,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||Et(r,"direction")==="rtl"),wrongRTL:Et(a,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const i=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(s=>{s.complete?Hr(t,s):s.addEventListener("load",a=>{Hr(t,a.target)})}),ps(t),t.initialized=!0,ps(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const r=this,{params:i,el:s,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),t&&(r.removeClasses(),s&&typeof s!="string"&&s.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(c=>{c.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),c.removeAttribute("style"),c.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(c=>{r.off(c)}),e!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),jf(r)),r.destroyed=!0),null}static extendDefaults(e){Ue(es,e)}static get extendedDefaults(){return es}static get defaults(){return Sa}static installModule(e){Fe.prototype.__modules__||(Fe.prototype.__modules__=[]);const t=Fe.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>Fe.installModule(t)),Fe):(Fe.installModule(e),Fe)}}Object.keys(Zi).forEach(n=>{Object.keys(Zi[n]).forEach(e=>{Fe.prototype[e]=Zi[n][e]})});Fe.use([tp,np]);function am(n,e,t,r){return n.params.createElements&&Object.keys(r).forEach(i=>{if(!t[i]&&t.auto===!0){let s=Je(n.el,`.${r[i]}`)[0];s||(s=ti("div",r[i]),s.className=r[i],n.el.append(s)),t[i]=s,e[i]=s}}),t}function lm(n){let{swiper:e,extendParams:t,on:r,emit:i}=n;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function s(A){let R;return A&&typeof A=="string"&&e.isElement&&(R=e.el.querySelector(A),R)?R:(A&&(typeof A=="string"&&(R=[...document.querySelectorAll(A)]),e.params.uniqueNavElements&&typeof A=="string"&&R&&R.length>1&&e.el.querySelectorAll(A).length===1?R=e.el.querySelector(A):R&&R.length===1&&(R=R[0])),A&&!R?A:R)}function a(A,R){const C=e.params.navigation;A=ct(A),A.forEach(V=>{V&&(V.classList[R?"add":"remove"](...C.disabledClass.split(" ")),V.tagName==="BUTTON"&&(V.disabled=R),e.params.watchOverflow&&e.enabled&&V.classList[e.isLocked?"add":"remove"](C.lockClass))})}function l(){const{nextEl:A,prevEl:R}=e.navigation;if(e.params.loop){a(R,!1),a(A,!1);return}a(R,e.isBeginning&&!e.params.rewind),a(A,e.isEnd&&!e.params.rewind)}function c(A){A.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function d(A){A.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function f(){const A=e.params.navigation;if(e.params.navigation=am(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(A.nextEl||A.prevEl))return;let R=s(A.nextEl),C=s(A.prevEl);Object.assign(e.navigation,{nextEl:R,prevEl:C}),R=ct(R),C=ct(C);const V=(M,k)=>{M&&M.addEventListener("click",k==="next"?d:c),!e.enabled&&M&&M.classList.add(...A.lockClass.split(" "))};R.forEach(M=>V(M,"next")),C.forEach(M=>V(M,"prev"))}function m(){let{nextEl:A,prevEl:R}=e.navigation;A=ct(A),R=ct(R);const C=(V,M)=>{V.removeEventListener("click",M==="next"?d:c),V.classList.remove(...e.params.navigation.disabledClass.split(" "))};A.forEach(V=>C(V,"next")),R.forEach(V=>C(V,"prev"))}r("init",()=>{e.params.navigation.enabled===!1?I():(f(),l())}),r("toEdge fromEdge lock unlock",()=>{l()}),r("destroy",()=>{m()}),r("enable disable",()=>{let{nextEl:A,prevEl:R}=e.navigation;if(A=ct(A),R=ct(R),e.enabled){l();return}[...A,...R].filter(C=>!!C).forEach(C=>C.classList.add(e.params.navigation.lockClass))}),r("click",(A,R)=>{let{nextEl:C,prevEl:V}=e.navigation;C=ct(C),V=ct(V);const M=R.target;let k=V.includes(M)||C.includes(M);if(e.isElement&&!k){const N=R.path||R.composedPath&&R.composedPath();N&&(k=N.find(B=>C.includes(B)||V.includes(B)))}if(e.params.navigation.hideOnClick&&!k){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===M||e.pagination.el.contains(M)))return;let N;C.length?N=C[0].classList.contains(e.params.navigation.hiddenClass):V.length&&(N=V[0].classList.contains(e.params.navigation.hiddenClass)),i(N===!0?"navigationShow":"navigationHide"),[...C,...V].filter(B=>!!B).forEach(B=>B.classList.toggle(e.params.navigation.hiddenClass))}});const T=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),f(),l()},I=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),m()};Object.assign(e.navigation,{enable:T,disable:I,update:l,init:f,destroy:m})}let Yl=new Map,rr=new Map,Ns=new Map;function cm(n,e,t,r,i){for(let s=0;s<e.length;s++)new IntersectionObserver(l=>{l.forEach(c=>{c.isIntersecting&&(console.log("ok"),um(e,s,n,t,r,i))})},{rootMargin:"100px"}).observe(e[s])}function um(n,e,t,r,i,s){n[e].tagName.toLowerCase()!=="iframe"&&(Yl.set(n[e],r[e]),rr.set(n[e],i[e]),Ns.set(n[e],new YT.Player(n[e],{videoId:t[e],playerVars:{controls:0,rel:0,fs:0,enablejsapi:1,modestbranding:1},events:{onReady:a=>dm(a,s,n[e]),onStateChange:a=>hm(a,e,s,n[e])}})))}function hm(n,e,t,r){Aa(n,e,t,r),new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting||(n.target.pauseVideo(),Aa(n,e,t,r))})}).observe(Yl.get(r))}function dm(n,e,t){rr.get(t).addEventListener("click",()=>{rr.get(t).classList.add(e),Ns.get(t).playVideo()})}function Aa(n,e,t,r){n.data==YT.PlayerState.PLAYING&&Ns.forEach((i,s)=>{s!==r&&(i.pauseVideo(),rr.get(s).classList.remove(t))}),(n.data==YT.PlayerState.ENDED||n.data==YT.PlayerState.PAUSED)&&rr.get(r).classList.remove(t)}Fe.use([lm]);function fm(n,e,t,r,i,s=null,a=null,l=null,c=null,d=null,f=null){new Fe(n,{autoplay:{delay:500},slidesPerView:r,spaceBetween:i,breakpoints:s,loop:!0,navigation:{nextEl:t,prevEl:e},on:{init:m,slideChange:T=>{document.querySelectorAll(".swiper-slide").forEach(I=>{const A=I.querySelector("iframe");A&&A.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}}});function m(){a&&cm(l,a,c,d,f)}}var ba=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ft,Xl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function g(){}g.prototype=y.prototype,b.D=y.prototype,b.prototype=new g,b.prototype.constructor=b,b.C=function(v,E,S){for(var _=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)_[Y-2]=arguments[Y];return y.prototype[E].apply(v,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,y,g){g||(g=0);var v=Array(16);if(typeof y=="string")for(var E=0;16>E;++E)v[E]=y.charCodeAt(g++)|y.charCodeAt(g++)<<8|y.charCodeAt(g++)<<16|y.charCodeAt(g++)<<24;else for(E=0;16>E;++E)v[E]=y[g++]|y[g++]<<8|y[g++]<<16|y[g++]<<24;y=b.g[0],g=b.g[1],E=b.g[2];var S=b.g[3],_=y+(S^g&(E^S))+v[0]+3614090360&4294967295;y=g+(_<<7&4294967295|_>>>25),_=S+(E^y&(g^E))+v[1]+3905402710&4294967295,S=y+(_<<12&4294967295|_>>>20),_=E+(g^S&(y^g))+v[2]+606105819&4294967295,E=S+(_<<17&4294967295|_>>>15),_=g+(y^E&(S^y))+v[3]+3250441966&4294967295,g=E+(_<<22&4294967295|_>>>10),_=y+(S^g&(E^S))+v[4]+4118548399&4294967295,y=g+(_<<7&4294967295|_>>>25),_=S+(E^y&(g^E))+v[5]+1200080426&4294967295,S=y+(_<<12&4294967295|_>>>20),_=E+(g^S&(y^g))+v[6]+2821735955&4294967295,E=S+(_<<17&4294967295|_>>>15),_=g+(y^E&(S^y))+v[7]+4249261313&4294967295,g=E+(_<<22&4294967295|_>>>10),_=y+(S^g&(E^S))+v[8]+1770035416&4294967295,y=g+(_<<7&4294967295|_>>>25),_=S+(E^y&(g^E))+v[9]+2336552879&4294967295,S=y+(_<<12&4294967295|_>>>20),_=E+(g^S&(y^g))+v[10]+4294925233&4294967295,E=S+(_<<17&4294967295|_>>>15),_=g+(y^E&(S^y))+v[11]+2304563134&4294967295,g=E+(_<<22&4294967295|_>>>10),_=y+(S^g&(E^S))+v[12]+1804603682&4294967295,y=g+(_<<7&4294967295|_>>>25),_=S+(E^y&(g^E))+v[13]+4254626195&4294967295,S=y+(_<<12&4294967295|_>>>20),_=E+(g^S&(y^g))+v[14]+2792965006&4294967295,E=S+(_<<17&4294967295|_>>>15),_=g+(y^E&(S^y))+v[15]+1236535329&4294967295,g=E+(_<<22&4294967295|_>>>10),_=y+(E^S&(g^E))+v[1]+4129170786&4294967295,y=g+(_<<5&4294967295|_>>>27),_=S+(g^E&(y^g))+v[6]+3225465664&4294967295,S=y+(_<<9&4294967295|_>>>23),_=E+(y^g&(S^y))+v[11]+643717713&4294967295,E=S+(_<<14&4294967295|_>>>18),_=g+(S^y&(E^S))+v[0]+3921069994&4294967295,g=E+(_<<20&4294967295|_>>>12),_=y+(E^S&(g^E))+v[5]+3593408605&4294967295,y=g+(_<<5&4294967295|_>>>27),_=S+(g^E&(y^g))+v[10]+38016083&4294967295,S=y+(_<<9&4294967295|_>>>23),_=E+(y^g&(S^y))+v[15]+3634488961&4294967295,E=S+(_<<14&4294967295|_>>>18),_=g+(S^y&(E^S))+v[4]+3889429448&4294967295,g=E+(_<<20&4294967295|_>>>12),_=y+(E^S&(g^E))+v[9]+568446438&4294967295,y=g+(_<<5&4294967295|_>>>27),_=S+(g^E&(y^g))+v[14]+3275163606&4294967295,S=y+(_<<9&4294967295|_>>>23),_=E+(y^g&(S^y))+v[3]+4107603335&4294967295,E=S+(_<<14&4294967295|_>>>18),_=g+(S^y&(E^S))+v[8]+1163531501&4294967295,g=E+(_<<20&4294967295|_>>>12),_=y+(E^S&(g^E))+v[13]+2850285829&4294967295,y=g+(_<<5&4294967295|_>>>27),_=S+(g^E&(y^g))+v[2]+4243563512&4294967295,S=y+(_<<9&4294967295|_>>>23),_=E+(y^g&(S^y))+v[7]+1735328473&4294967295,E=S+(_<<14&4294967295|_>>>18),_=g+(S^y&(E^S))+v[12]+2368359562&4294967295,g=E+(_<<20&4294967295|_>>>12),_=y+(g^E^S)+v[5]+4294588738&4294967295,y=g+(_<<4&4294967295|_>>>28),_=S+(y^g^E)+v[8]+2272392833&4294967295,S=y+(_<<11&4294967295|_>>>21),_=E+(S^y^g)+v[11]+1839030562&4294967295,E=S+(_<<16&4294967295|_>>>16),_=g+(E^S^y)+v[14]+4259657740&4294967295,g=E+(_<<23&4294967295|_>>>9),_=y+(g^E^S)+v[1]+2763975236&4294967295,y=g+(_<<4&4294967295|_>>>28),_=S+(y^g^E)+v[4]+1272893353&4294967295,S=y+(_<<11&4294967295|_>>>21),_=E+(S^y^g)+v[7]+4139469664&4294967295,E=S+(_<<16&4294967295|_>>>16),_=g+(E^S^y)+v[10]+3200236656&4294967295,g=E+(_<<23&4294967295|_>>>9),_=y+(g^E^S)+v[13]+681279174&4294967295,y=g+(_<<4&4294967295|_>>>28),_=S+(y^g^E)+v[0]+3936430074&4294967295,S=y+(_<<11&4294967295|_>>>21),_=E+(S^y^g)+v[3]+3572445317&4294967295,E=S+(_<<16&4294967295|_>>>16),_=g+(E^S^y)+v[6]+76029189&4294967295,g=E+(_<<23&4294967295|_>>>9),_=y+(g^E^S)+v[9]+3654602809&4294967295,y=g+(_<<4&4294967295|_>>>28),_=S+(y^g^E)+v[12]+3873151461&4294967295,S=y+(_<<11&4294967295|_>>>21),_=E+(S^y^g)+v[15]+530742520&4294967295,E=S+(_<<16&4294967295|_>>>16),_=g+(E^S^y)+v[2]+3299628645&4294967295,g=E+(_<<23&4294967295|_>>>9),_=y+(E^(g|~S))+v[0]+4096336452&4294967295,y=g+(_<<6&4294967295|_>>>26),_=S+(g^(y|~E))+v[7]+1126891415&4294967295,S=y+(_<<10&4294967295|_>>>22),_=E+(y^(S|~g))+v[14]+2878612391&4294967295,E=S+(_<<15&4294967295|_>>>17),_=g+(S^(E|~y))+v[5]+4237533241&4294967295,g=E+(_<<21&4294967295|_>>>11),_=y+(E^(g|~S))+v[12]+1700485571&4294967295,y=g+(_<<6&4294967295|_>>>26),_=S+(g^(y|~E))+v[3]+2399980690&4294967295,S=y+(_<<10&4294967295|_>>>22),_=E+(y^(S|~g))+v[10]+4293915773&4294967295,E=S+(_<<15&4294967295|_>>>17),_=g+(S^(E|~y))+v[1]+2240044497&4294967295,g=E+(_<<21&4294967295|_>>>11),_=y+(E^(g|~S))+v[8]+1873313359&4294967295,y=g+(_<<6&4294967295|_>>>26),_=S+(g^(y|~E))+v[15]+4264355552&4294967295,S=y+(_<<10&4294967295|_>>>22),_=E+(y^(S|~g))+v[6]+2734768916&4294967295,E=S+(_<<15&4294967295|_>>>17),_=g+(S^(E|~y))+v[13]+1309151649&4294967295,g=E+(_<<21&4294967295|_>>>11),_=y+(E^(g|~S))+v[4]+4149444226&4294967295,y=g+(_<<6&4294967295|_>>>26),_=S+(g^(y|~E))+v[11]+3174756917&4294967295,S=y+(_<<10&4294967295|_>>>22),_=E+(y^(S|~g))+v[2]+718787259&4294967295,E=S+(_<<15&4294967295|_>>>17),_=g+(S^(E|~y))+v[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,b.g[2]=b.g[2]+E&4294967295,b.g[3]=b.g[3]+S&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var g=y-this.blockSize,v=this.B,E=this.h,S=0;S<y;){if(E==0)for(;S<=g;)i(this,b,S),S+=this.blockSize;if(typeof b=="string"){for(;S<y;)if(v[E++]=b.charCodeAt(S++),E==this.blockSize){i(this,v),E=0;break}}else for(;S<y;)if(v[E++]=b[S++],E==this.blockSize){i(this,v),E=0;break}}this.h=E,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var g=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=g&255,g/=256;for(this.u(b),b=Array(16),y=g=0;4>y;++y)for(var v=0;32>v;v+=8)b[g++]=this.g[y]>>>v&255;return b};function s(b,y){var g=l;return Object.prototype.hasOwnProperty.call(g,b)?g[b]:g[b]=y(b)}function a(b,y){this.h=y;for(var g=[],v=!0,E=b.length-1;0<=E;E--){var S=b[E]|0;v&&S==y||(g[E]=S,v=!1)}this.g=g}var l={};function c(b){return-128<=b&&128>b?s(b,function(y){return new a([y|0],0>y?-1:0)}):new a([b|0],0>b?-1:0)}function d(b){if(isNaN(b)||!isFinite(b))return m;if(0>b)return C(d(-b));for(var y=[],g=1,v=0;b>=g;v++)y[v]=b/g|0,g*=4294967296;return new a(y,0)}function f(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return C(f(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=d(Math.pow(y,8)),v=m,E=0;E<b.length;E+=8){var S=Math.min(8,b.length-E),_=parseInt(b.substring(E,E+S),y);8>S?(S=d(Math.pow(y,S)),v=v.j(S).add(d(_))):(v=v.j(g),v=v.add(d(_)))}return v}var m=c(0),T=c(1),I=c(16777216);n=a.prototype,n.m=function(){if(R(this))return-C(this).m();for(var b=0,y=1,g=0;g<this.g.length;g++){var v=this.i(g);b+=(0<=v?v:4294967296+v)*y,y*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(A(this))return"0";if(R(this))return"-"+C(this).toString(b);for(var y=d(Math.pow(b,6)),g=this,v="";;){var E=N(g,y).g;g=V(g,E.j(y));var S=((0<g.g.length?g.g[0]:g.h)>>>0).toString(b);if(g=E,A(g))return S+v;for(;6>S.length;)S="0"+S;v=S+v}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function A(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function R(b){return b.h==-1}n.l=function(b){return b=V(this,b),R(b)?-1:A(b)?0:1};function C(b){for(var y=b.g.length,g=[],v=0;v<y;v++)g[v]=~b.g[v];return new a(g,~b.h).add(T)}n.abs=function(){return R(this)?C(this):this},n.add=function(b){for(var y=Math.max(this.g.length,b.g.length),g=[],v=0,E=0;E<=y;E++){var S=v+(this.i(E)&65535)+(b.i(E)&65535),_=(S>>>16)+(this.i(E)>>>16)+(b.i(E)>>>16);v=_>>>16,S&=65535,_&=65535,g[E]=_<<16|S}return new a(g,g[g.length-1]&-2147483648?-1:0)};function V(b,y){return b.add(C(y))}n.j=function(b){if(A(this)||A(b))return m;if(R(this))return R(b)?C(this).j(C(b)):C(C(this).j(b));if(R(b))return C(this.j(C(b)));if(0>this.l(I)&&0>b.l(I))return d(this.m()*b.m());for(var y=this.g.length+b.g.length,g=[],v=0;v<2*y;v++)g[v]=0;for(v=0;v<this.g.length;v++)for(var E=0;E<b.g.length;E++){var S=this.i(v)>>>16,_=this.i(v)&65535,Y=b.i(E)>>>16,ie=b.i(E)&65535;g[2*v+2*E]+=_*ie,M(g,2*v+2*E),g[2*v+2*E+1]+=S*ie,M(g,2*v+2*E+1),g[2*v+2*E+1]+=_*Y,M(g,2*v+2*E+1),g[2*v+2*E+2]+=S*Y,M(g,2*v+2*E+2)}for(v=0;v<y;v++)g[v]=g[2*v+1]<<16|g[2*v];for(v=y;v<2*y;v++)g[v]=0;return new a(g,0)};function M(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function k(b,y){this.g=b,this.h=y}function N(b,y){if(A(y))throw Error("division by zero");if(A(b))return new k(m,m);if(R(b))return y=N(C(b),y),new k(C(y.g),C(y.h));if(R(y))return y=N(b,C(y)),new k(C(y.g),y.h);if(30<b.g.length){if(R(b)||R(y))throw Error("slowDivide_ only works with positive integers.");for(var g=T,v=y;0>=v.l(b);)g=B(g),v=B(v);var E=$(g,1),S=$(v,1);for(v=$(v,2),g=$(g,2);!A(v);){var _=S.add(v);0>=_.l(b)&&(E=E.add(g),S=_),v=$(v,1),g=$(g,1)}return y=V(b,E.j(y)),new k(E,y)}for(E=m;0<=b.l(y);){for(g=Math.max(1,Math.floor(b.m()/y.m())),v=Math.ceil(Math.log(g)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),S=d(g),_=S.j(y);R(_)||0<_.l(b);)g-=v,S=d(g),_=S.j(y);A(S)&&(S=T),E=E.add(S),b=V(b,_)}return new k(E,b)}n.A=function(b){return N(this,b).h},n.and=function(b){for(var y=Math.max(this.g.length,b.g.length),g=[],v=0;v<y;v++)g[v]=this.i(v)&b.i(v);return new a(g,this.h&b.h)},n.or=function(b){for(var y=Math.max(this.g.length,b.g.length),g=[],v=0;v<y;v++)g[v]=this.i(v)|b.i(v);return new a(g,this.h|b.h)},n.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),g=[],v=0;v<y;v++)g[v]=this.i(v)^b.i(v);return new a(g,this.h^b.h)};function B(b){for(var y=b.g.length+1,g=[],v=0;v<y;v++)g[v]=b.i(v)<<1|b.i(v-1)>>>31;return new a(g,b.h)}function $(b,y){var g=y>>5;y%=32;for(var v=b.g.length-g,E=[],S=0;S<v;S++)E[S]=0<y?b.i(S+g)>>>y|b.i(S+g+1)<<32-y:b.i(S+g);return new a(E,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Xl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Ft=a}).apply(typeof ba<"u"?ba:typeof self<"u"?self:typeof window<"u"?window:{});var zr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Jl,Zl,$n,ec,$r,ms,tc,nc,rc;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,h){return o==Array.prototype||o==Object.prototype||(o[u]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof zr=="object"&&zr];for(var u=0;u<o.length;++u){var h=o[u];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,u){if(u)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var P=o[p];if(!(P in h))break e;h=h[P]}o=o[o.length-1],p=h[o],u=u(p),u!=p&&u!=null&&e(h,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var h=0,p=!1,P={next:function(){if(!p&&h<o.length){var x=h++;return{value:u(x,o[x]),done:!1}}return p=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function d(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,h){return o.call.apply(o.bind,arguments)}function m(o,u,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,p),o.apply(u,P)}}return function(){return o.apply(u,arguments)}}function T(o,u,h){return T=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,T.apply(null,arguments)}function I(o,u){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function A(o,u){function h(){}h.prototype=u.prototype,o.aa=u.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,P,x){for(var F=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)F[ne-2]=arguments[ne];return u.prototype[P].apply(p,F)}}function R(o){const u=o.length;if(0<u){const h=Array(u);for(let p=0;p<u;p++)h[p]=o[p];return h}return[]}function C(o,u){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(c(p)){const P=o.length||0,x=p.length||0;o.length=P+x;for(let F=0;F<x;F++)o[P+F]=p[F]}else o.push(p)}}class V{constructor(u,h){this.i=u,this.j=h,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function M(o){return/^[\s\xa0]*$/.test(o)}function k(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function N(o){return N[" "](o),o}N[" "]=function(){};var B=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function $(o,u,h){for(const p in o)u.call(h,o[p],p,o)}function b(o,u){for(const h in o)u.call(void 0,o[h],h,o)}function y(o){const u={};for(const h in o)u[h]=o[h];return u}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,u){let h,p;for(let P=1;P<arguments.length;P++){p=arguments[P];for(h in p)o[h]=p[h];for(let x=0;x<g.length;x++)h=g[x],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function E(o){var u=1;o=o.split(":");const h=[];for(;0<u&&o.length;)h.push(o.shift()),u--;return o.length&&h.push(o.join(":")),h}function S(o){l.setTimeout(()=>{throw o},0)}function _(){var o=Qe;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Y{constructor(){this.h=this.g=null}add(u,h){const p=ie.get();p.set(u,h),this.h?this.h.next=p:this.g=p,this.h=p}}var ie=new V(()=>new Oe,o=>o.reset());class Oe{constructor(){this.next=this.g=this.h=null}set(u,h){this.h=u,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let $e,Me=!1,Qe=new Y,mt=()=>{const o=l.Promise.resolve(void 0);$e=()=>{o.then(Kt)}};var Kt=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){S(h)}var u=ie;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Me=!1};function Ne(){this.s=this.s,this.C=this.C}Ne.prototype.s=!1,Ne.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ne.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var gr=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,u),l.removeEventListener("test",h,u)}catch{}return o}();function rt(o,u){if(me.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(B){e:{try{N(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else h=="mouseover"?u=o.fromElement:h=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:_r[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&rt.aa.h.call(this)}}A(rt,me);var _r={2:"touch",3:"pen",4:"mouse"};rt.prototype.h=function(){rt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var it="closure_listenable_"+(1e6*Math.random()|0),yr=0;function Qt(o,u,h,p,P){this.listener=o,this.proxy=null,this.src=u,this.type=h,this.capture=!!p,this.ha=P,this.key=++yr,this.da=this.fa=!1}function gt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Yt(o){this.src=o,this.g={},this.h=0}Yt.prototype.add=function(o,u,h,p,P){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var F=Sn(o,u,p,P);return-1<F?(u=o[F],h||(u.fa=!1)):(u=new Qt(u,this.src,x,!!p,P),u.fa=h,o.push(u)),u};function In(o,u){var h=u.type;if(h in o.g){var p=o.g[h],P=Array.prototype.indexOf.call(p,u,void 0),x;(x=0<=P)&&Array.prototype.splice.call(p,P,1),x&&(gt(u),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Sn(o,u,h,p){for(var P=0;P<o.length;++P){var x=o[P];if(!x.da&&x.listener==u&&x.capture==!!h&&x.ha==p)return P}return-1}var An="closure_lm_"+(1e6*Math.random()|0),bn={};function Pn(o,u,h,p,P){if(Array.isArray(u)){for(var x=0;x<u.length;x++)Pn(o,u[x],h,p,P);return null}return h=Tr(h),o&&o[it]?o.K(u,h,d(p)?!!p.capture:!!p,P):Si(o,u,h,!1,p,P)}function Si(o,u,h,p,P,x){if(!u)throw Error("Invalid event type");var F=d(P)?!!P.capture:!!P,ne=Cn(o);if(ne||(o[An]=ne=new Yt(o)),h=ne.add(u,h,p,F,x),h.proxy)return h;if(p=vr(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)gr||(P=F),P===void 0&&(P=!1),o.addEventListener(u.toString(),p,P);else if(o.attachEvent)o.attachEvent(Jt(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function vr(){function o(h){return u.call(o.src,o.listener,h)}const u=Ai;return o}function Rn(o,u,h,p,P){if(Array.isArray(u))for(var x=0;x<u.length;x++)Rn(o,u[x],h,p,P);else p=d(p)?!!p.capture:!!p,h=Tr(h),o&&o[it]?(o=o.i,u=String(u).toString(),u in o.g&&(x=o.g[u],h=Sn(x,h,p,P),-1<h&&(gt(x[h]),Array.prototype.splice.call(x,h,1),x.length==0&&(delete o.g[u],o.h--)))):o&&(o=Cn(o))&&(u=o.g[u.toString()],o=-1,u&&(o=Sn(u,h,p,P)),(h=-1<o?u[o]:null)&&Xt(h))}function Xt(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[it])In(u.i,o);else{var h=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(h,p,o.capture):u.detachEvent?u.detachEvent(Jt(h),p):u.addListener&&u.removeListener&&u.removeListener(p),(h=Cn(u))?(In(h,o),h.h==0&&(h.src=null,u[An]=null)):gt(o)}}}function Jt(o){return o in bn?bn[o]:bn[o]="on"+o}function Ai(o,u){if(o.da)o=!0;else{u=new rt(u,this);var h=o.listener,p=o.ha||o.src;o.fa&&Xt(o),o=h.call(p,u)}return o}function Cn(o){return o=o[An],o instanceof Yt?o:null}var xn="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tr(o){return typeof o=="function"?o:(o[xn]||(o[xn]=function(u){return o.handleEvent(u)}),o[xn])}function ye(){Ne.call(this),this.i=new Yt(this),this.M=this,this.F=null}A(ye,Ne),ye.prototype[it]=!0,ye.prototype.removeEventListener=function(o,u,h,p){Rn(this,o,u,h,p)};function Te(o,u){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new me(u,o);else if(u instanceof me)u.target=u.target||o;else{var P=u;u=new me(p,o),v(u,P)}if(P=!0,h)for(var x=h.length-1;0<=x;x--){var F=u.g=h[x];P=U(F,p,!0,u)&&P}if(F=u.g=o,P=U(F,p,!0,u)&&P,P=U(F,p,!1,u)&&P,h)for(x=0;x<h.length;x++)F=u.g=h[x],P=U(F,p,!1,u)&&P}ye.prototype.N=function(){if(ye.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var h=o.g[u],p=0;p<h.length;p++)gt(h[p]);delete o.g[u],o.h--}}this.F=null},ye.prototype.K=function(o,u,h,p){return this.i.add(String(o),u,!1,h,p)},ye.prototype.L=function(o,u,h,p){return this.i.add(String(o),u,!0,h,p)};function U(o,u,h,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,x=0;x<u.length;++x){var F=u[x];if(F&&!F.da&&F.capture==h){var ne=F.listener,we=F.ha||F.src;F.fa&&In(o.i,F),P=ne.call(we,p)!==!1&&P}}return P&&!p.defaultPrevented}function w(o,u,h){if(typeof o=="function")h&&(o=T(o,h));else if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function L(o){o.g=w(()=>{o.g=null,o.i&&(o.i=!1,L(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class z extends Ne{constructor(u,h){super(),this.m=u,this.l=h,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:L(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function j(o){Ne.call(this),this.h=o,this.g={}}A(j,Ne);var je=[];function Ye(o){$(o.g,function(u,h){this.g.hasOwnProperty(h)&&Xt(u)},o),o.g={}}j.prototype.N=function(){j.aa.N.call(this),Ye(this)},j.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var qe=l.JSON.stringify,Zt=l.JSON.parse,bi=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function en(){}en.prototype.h=null;function de(o){return o.h||(o.h=o.i())}function wr(){}var st={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function _t(){me.call(this,"d")}A(_t,me);function Pi(){me.call(this,"c")}A(Pi,me);var Vt={},uo=null;function Er(){return uo=uo||new ye}Vt.La="serverreachability";function ho(o){me.call(this,Vt.La,o)}A(ho,me);function Vn(o){const u=Er();Te(u,new ho(u))}Vt.STAT_EVENT="statevent";function fo(o,u){me.call(this,Vt.STAT_EVENT,o),this.stat=u}A(fo,me);function ke(o){const u=Er();Te(u,new fo(u,o))}Vt.Ma="timingevent";function po(o,u){me.call(this,Vt.Ma,o),this.size=u}A(po,me);function kn(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function Dn(){this.g=!0}Dn.prototype.xa=function(){this.g=!1};function Iu(o,u,h,p,P,x){o.info(function(){if(o.g)if(x)for(var F="",ne=x.split("&"),we=0;we<ne.length;we++){var ee=ne[we].split("=");if(1<ee.length){var Pe=ee[0];ee=ee[1];var Re=Pe.split("_");F=2<=Re.length&&Re[1]=="type"?F+(Pe+"="+ee+"&"):F+(Pe+"=redacted&")}}else F=null;else F=x;return"XMLHTTP REQ ("+p+") [attempt "+P+"]: "+u+`
`+h+`
`+F})}function Su(o,u,h,p,P,x,F){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+P+"]: "+u+`
`+h+`
`+x+" "+F})}function tn(o,u,h,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+bu(o,h)+(p?" "+p:"")})}function Au(o,u){o.info(function(){return"TIMEOUT: "+u})}Dn.prototype.info=function(){};function bu(o,u){if(!o.g)return u;if(!u)return null;try{var h=JSON.parse(u);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var P=p[1];if(Array.isArray(P)&&!(1>P.length)){var x=P[0];if(x!="noop"&&x!="stop"&&x!="close")for(var F=1;F<P.length;F++)P[F]=""}}}}return qe(h)}catch{return u}}var Ir={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},mo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ri;function Sr(){}A(Sr,en),Sr.prototype.g=function(){return new XMLHttpRequest},Sr.prototype.i=function(){return{}},Ri=new Sr;function yt(o,u,h,p){this.j=o,this.i=u,this.l=h,this.R=p||1,this.U=new j(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new go}function go(){this.i=null,this.g="",this.h=!1}var _o={},Ci={};function xi(o,u,h){o.L=1,o.v=Rr(ot(u)),o.m=h,o.P=!0,yo(o,null)}function yo(o,u){o.F=Date.now(),Ar(o),o.A=ot(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),ko(h.i,"t",p),o.C=0,h=o.j.J,o.h=new go,o.g=Yo(o.j,h?u:null,!o.m),0<o.O&&(o.M=new z(T(o.Y,o,o.g),o.O)),u=o.U,h=o.g,p=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(je[0]=P.toString()),P=je);for(var x=0;x<P.length;x++){var F=Pn(h,P[x],p||u.handleEvent,!1,u.h||u);if(!F)break;u.g[F.key]=F}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),Vn(),Iu(o.i,o.u,o.A,o.l,o.R,o.m)}yt.prototype.ca=function(o){o=o.target;const u=this.M;u&&at(o)==3?u.j():this.Y(o)},yt.prototype.Y=function(o){try{if(o==this.g)e:{const Re=at(this.g);var u=this.g.Ba();const sn=this.g.Z();if(!(3>Re)&&(Re!=3||this.g&&(this.h.h||this.g.oa()||Uo(this.g)))){this.J||Re!=4||u==7||(u==8||0>=sn?Vn(3):Vn(2)),Vi(this);var h=this.g.Z();this.X=h;t:if(vo(this)){var p=Uo(this.g);o="";var P=p.length,x=at(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kt(this),On(this);var F="";break t}this.h.i=new l.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(x&&u==P-1)});p.length=0,this.h.g+=o,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=h==200,Su(this.i,this.u,this.A,this.l,this.R,Re,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ne,we=this.g;if((ne=we.g?we.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!M(ne)){var ee=ne;break t}}ee=null}if(h=ee)tn(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ki(this,h);else{this.o=!1,this.s=3,ke(12),kt(this),On(this);break e}}if(this.P){h=!0;let We;for(;!this.J&&this.C<F.length;)if(We=Pu(this,F),We==Ci){Re==4&&(this.s=4,ke(14),h=!1),tn(this.i,this.l,null,"[Incomplete Response]");break}else if(We==_o){this.s=4,ke(15),tn(this.i,this.l,F,"[Invalid Chunk]"),h=!1;break}else tn(this.i,this.l,We,null),ki(this,We);if(vo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Re!=4||F.length!=0||this.h.h||(this.s=1,ke(16),h=!1),this.o=this.o&&h,!h)tn(this.i,this.l,F,"[Invalid Chunked Response]"),kt(this),On(this);else if(0<F.length&&!this.W){this.W=!0;var Pe=this.j;Pe.g==this&&Pe.ba&&!Pe.M&&(Pe.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Fi(Pe),Pe.M=!0,ke(11))}}else tn(this.i,this.l,F,null),ki(this,F);Re==4&&kt(this),this.o&&!this.J&&(Re==4?$o(this.j,this):(this.o=!1,Ar(this)))}else qu(this.g),h==400&&0<F.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),kt(this),On(this)}}}catch{}finally{}};function vo(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Pu(o,u){var h=o.C,p=u.indexOf(`
`,h);return p==-1?Ci:(h=Number(u.substring(h,p)),isNaN(h)?_o:(p+=1,p+h>u.length?Ci:(u=u.slice(p,p+h),o.C=p+h,u)))}yt.prototype.cancel=function(){this.J=!0,kt(this)};function Ar(o){o.S=Date.now()+o.I,To(o,o.I)}function To(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=kn(T(o.ba,o),u)}function Vi(o){o.B&&(l.clearTimeout(o.B),o.B=null)}yt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Au(this.i,this.A),this.L!=2&&(Vn(),ke(17)),kt(this),this.s=2,On(this)):To(this,this.S-o)};function On(o){o.j.G==0||o.J||$o(o.j,o)}function kt(o){Vi(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,Ye(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function ki(o,u){try{var h=o.j;if(h.G!=0&&(h.g==o||Di(h.h,o))){if(!o.K&&Di(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var P=p;if(P[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Dr(h),Vr(h);else break e;Li(h),ke(18)}}else h.za=P[1],0<h.za-h.T&&37500>P[2]&&h.F&&h.v==0&&!h.C&&(h.C=kn(T(h.Za,h),6e3));if(1>=Io(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Ot(h,11)}else if((o.K||h.g==o)&&Dr(h),!M(u))for(P=h.Da.g.parse(u),u=0;u<P.length;u++){let ee=P[u];if(h.T=ee[0],ee=ee[1],h.G==2)if(ee[0]=="c"){h.K=ee[1],h.ia=ee[2];const Pe=ee[3];Pe!=null&&(h.la=Pe,h.j.info("VER="+h.la));const Re=ee[4];Re!=null&&(h.Aa=Re,h.j.info("SVER="+h.Aa));const sn=ee[5];sn!=null&&typeof sn=="number"&&0<sn&&(p=1.5*sn,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const We=o.g;if(We){const Mr=We.g?We.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Mr){var x=p.h;x.g||Mr.indexOf("spdy")==-1&&Mr.indexOf("quic")==-1&&Mr.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(Oi(x,x.h),x.h=null))}if(p.D){const Ui=We.g?We.g.getResponseHeader("X-HTTP-Session-Id"):null;Ui&&(p.ya=Ui,se(p.I,p.D,Ui))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var F=o;if(p.qa=Qo(p,p.J?p.ia:null,p.W),F.K){So(p.h,F);var ne=F,we=p.L;we&&(ne.I=we),ne.B&&(Vi(ne),Ar(ne)),p.g=F}else qo(p);0<h.i.length&&kr(h)}else ee[0]!="stop"&&ee[0]!="close"||Ot(h,7);else h.G==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?Ot(h,7):Ni(h):ee[0]!="noop"&&h.l&&h.l.ta(ee),h.v=0)}}Vn(4)}catch{}}var Ru=class{constructor(o,u){this.g=o,this.map=u}};function wo(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Eo(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Io(o){return o.h?1:o.g?o.g.size:0}function Di(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Oi(o,u){o.g?o.g.add(u):o.h=u}function So(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}wo.prototype.cancel=function(){if(this.i=Ao(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ao(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const h of o.g.values())u=u.concat(h.D);return u}return R(o.i)}function Cu(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],h=o.length,p=0;p<h;p++)u.push(o[p]);return u}u=[],h=0;for(p in o)u[h++]=o[p];return u}function xu(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var h=0;h<o;h++)u.push(h);return u}u=[],h=0;for(const p in o)u[h++]=p;return u}}}function bo(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var h=xu(o),p=Cu(o),P=p.length,x=0;x<P;x++)u.call(void 0,p[x],h&&h[x],o)}var Po=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Vu(o,u){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),P=null;if(0<=p){var x=o[h].substring(0,p);P=o[h].substring(p+1)}else x=o[h];u(x,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Dt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Dt){this.h=o.h,br(this,o.j),this.o=o.o,this.g=o.g,Pr(this,o.s),this.l=o.l;var u=o.i,h=new Ln;h.i=u.i,u.g&&(h.g=new Map(u.g),h.h=u.h),Ro(this,h),this.m=o.m}else o&&(u=String(o).match(Po))?(this.h=!1,br(this,u[1]||"",!0),this.o=Mn(u[2]||""),this.g=Mn(u[3]||"",!0),Pr(this,u[4]),this.l=Mn(u[5]||"",!0),Ro(this,u[6]||"",!0),this.m=Mn(u[7]||"")):(this.h=!1,this.i=new Ln(null,this.h))}Dt.prototype.toString=function(){var o=[],u=this.j;u&&o.push(Nn(u,Co,!0),":");var h=this.g;return(h||u=="file")&&(o.push("//"),(u=this.o)&&o.push(Nn(u,Co,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Nn(h,h.charAt(0)=="/"?Ou:Du,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Nn(h,Nu)),o.join("")};function ot(o){return new Dt(o)}function br(o,u,h){o.j=h?Mn(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Pr(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Ro(o,u,h){u instanceof Ln?(o.i=u,Lu(o.i,o.h)):(h||(u=Nn(u,Mu)),o.i=new Ln(u,o.h))}function se(o,u,h){o.i.set(u,h)}function Rr(o){return se(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Mn(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Nn(o,u,h){return typeof o=="string"?(o=encodeURI(o).replace(u,ku),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function ku(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Co=/[#\/\?@]/g,Du=/[#\?:]/g,Ou=/[#\?]/g,Mu=/[#\?@]/g,Nu=/#/g;function Ln(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function vt(o){o.g||(o.g=new Map,o.h=0,o.i&&Vu(o.i,function(u,h){o.add(decodeURIComponent(u.replace(/\+/g," ")),h)}))}n=Ln.prototype,n.add=function(o,u){vt(this),this.i=null,o=nn(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(u),this.h+=1,this};function xo(o,u){vt(o),u=nn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Vo(o,u){return vt(o),u=nn(o,u),o.g.has(u)}n.forEach=function(o,u){vt(this),this.g.forEach(function(h,p){h.forEach(function(P){o.call(u,P,p,this)},this)},this)},n.na=function(){vt(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),h=[];for(let p=0;p<u.length;p++){const P=o[p];for(let x=0;x<P.length;x++)h.push(u[p])}return h},n.V=function(o){vt(this);let u=[];if(typeof o=="string")Vo(this,o)&&(u=u.concat(this.g.get(nn(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)u=u.concat(o[h])}return u},n.set=function(o,u){return vt(this),this.i=null,o=nn(this,o),Vo(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function ko(o,u,h){xo(o,u),0<h.length&&(o.i=null,o.g.set(nn(o,u),R(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var h=0;h<u.length;h++){var p=u[h];const x=encodeURIComponent(String(p)),F=this.V(p);for(p=0;p<F.length;p++){var P=x;F[p]!==""&&(P+="="+encodeURIComponent(String(F[p]))),o.push(P)}}return this.i=o.join("&")};function nn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Lu(o,u){u&&!o.j&&(vt(o),o.i=null,o.g.forEach(function(h,p){var P=p.toLowerCase();p!=P&&(xo(this,p),ko(this,P,h))},o)),o.j=u}function Fu(o,u){const h=new Dn;if(l.Image){const p=new Image;p.onload=I(Tt,h,"TestLoadImage: loaded",!0,u,p),p.onerror=I(Tt,h,"TestLoadImage: error",!1,u,p),p.onabort=I(Tt,h,"TestLoadImage: abort",!1,u,p),p.ontimeout=I(Tt,h,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Uu(o,u){const h=new Dn,p=new AbortController,P=setTimeout(()=>{p.abort(),Tt(h,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(x=>{clearTimeout(P),x.ok?Tt(h,"TestPingServer: ok",!0,u):Tt(h,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Tt(h,"TestPingServer: error",!1,u)})}function Tt(o,u,h,p,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),p(h)}catch{}}function Bu(){this.g=new bi}function zu(o,u,h){const p=h||"";try{bo(o,function(P,x){let F=P;d(P)&&(F=qe(P)),u.push(p+x+"="+encodeURIComponent(F))})}catch(P){throw u.push(p+"type="+encodeURIComponent("_badmap")),P}}function Fn(o){this.l=o.Ub||null,this.j=o.eb||!1}A(Fn,en),Fn.prototype.g=function(){return new Cr(this.l,this.j)},Fn.prototype.i=function(o){return function(){return o}}({});function Cr(o,u){ye.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(Cr,ye),n=Cr.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Bn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Un(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Bn(this)),this.g&&(this.readyState=3,Bn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Do(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Do(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Un(this):Bn(this),this.readyState==3&&Do(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Un(this))},n.Qa=function(o){this.g&&(this.response=o,Un(this))},n.ga=function(){this.g&&Un(this)};function Un(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Bn(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var h=u.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=u.next();return o.join(`\r
`)};function Bn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Cr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Oo(o){let u="";return $(o,function(h,p){u+=p,u+=":",u+=h,u+=`\r
`}),u}function Mi(o,u,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Oo(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):se(o,u,h))}function ce(o){ye.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(ce,ye);var Gu=/^https?$/i,ju=["POST","PUT"];n=ce.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ri.g(),this.v=this.o?de(this.o):de(Ri),this.g.onreadystatechange=T(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(x){Mo(this,x);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var P in p)h.set(P,p[P]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const x of p.keys())h.set(x,p.get(x));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(x=>x.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(ju,u,void 0))||p||P||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,F]of h)this.g.setRequestHeader(x,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fo(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){Mo(this,x)}};function Mo(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,No(o),xr(o)}function No(o){o.A||(o.A=!0,Te(o,"complete"),Te(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Te(this,"complete"),Te(this,"abort"),xr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xr(this,!0)),ce.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Lo(this):this.bb())},n.bb=function(){Lo(this)};function Lo(o){if(o.h&&typeof a<"u"&&(!o.v[1]||at(o)!=4||o.Z()!=2)){if(o.u&&at(o)==4)w(o.Ea,0,o);else if(Te(o,"readystatechange"),at(o)==4){o.h=!1;try{const F=o.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var h;if(!(h=u)){var p;if(p=F===0){var P=String(o.D).match(Po)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),p=!Gu.test(P?P.toLowerCase():"")}h=p}if(h)Te(o,"complete"),Te(o,"success");else{o.m=6;try{var x=2<at(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",No(o)}}finally{xr(o)}}}}function xr(o,u){if(o.g){Fo(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Te(o,"ready");try{h.onreadystatechange=p}catch{}}}function Fo(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function at(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<at(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),Zt(u)}};function Uo(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function qu(o){const u={};o=(o.g&&2<=at(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(M(o[p]))continue;var h=E(o[p]);const P=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const x=u[P]||[];u[P]=x,x.push(h)}b(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function zn(o,u,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||u}function Bo(o){this.Aa=0,this.i=[],this.j=new Dn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=zn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=zn("baseRetryDelayMs",5e3,o),this.cb=zn("retryDelaySeedMs",1e4,o),this.Wa=zn("forwardChannelMaxRetries",2,o),this.wa=zn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new wo(o&&o.concurrentRequestLimit),this.Da=new Bu,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Bo.prototype,n.la=8,n.G=1,n.connect=function(o,u,h,p){ke(0),this.W=o,this.H=u||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=Qo(this,null,this.W),kr(this)};function Ni(o){if(zo(o),o.G==3){var u=o.U++,h=ot(o.I);if(se(h,"SID",o.K),se(h,"RID",u),se(h,"TYPE","terminate"),Gn(o,h),u=new yt(o,o.j,u),u.L=2,u.v=Rr(ot(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=u.v,h=!0),h||(u.g=Yo(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ar(u)}Ko(o)}function Vr(o){o.g&&(Fi(o),o.g.cancel(),o.g=null)}function zo(o){Vr(o),o.u&&(l.clearTimeout(o.u),o.u=null),Dr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function kr(o){if(!Eo(o.h)&&!o.s){o.s=!0;var u=o.Ga;$e||mt(),Me||($e(),Me=!0),Qe.add(u,o),o.B=0}}function Hu(o,u){return Io(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=kn(T(o.Ga,o,u),Wo(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new yt(this,this.j,o);let x=this.o;if(this.S&&(x?(x=y(x),v(x,this.S)):x=this.S),this.m!==null||this.O||(P.H=x,x=null),this.P)e:{for(var u=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=h;break e}if(u===4096||h===this.i.length-1){u=h+1;break e}}u=1e3}else u=1e3;u=jo(this,P,u),h=ot(this.I),se(h,"RID",o),se(h,"CVER",22),this.D&&se(h,"X-HTTP-Session-Id",this.D),Gn(this,h),x&&(this.O?u="headers="+encodeURIComponent(String(Oo(x)))+"&"+u:this.m&&Mi(h,this.m,x)),Oi(this.h,P),this.Ua&&se(h,"TYPE","init"),this.P?(se(h,"$req",u),se(h,"SID","null"),P.T=!0,xi(P,h,null)):xi(P,h,u),this.G=2}}else this.G==3&&(o?Go(this,o):this.i.length==0||Eo(this.h)||Go(this))};function Go(o,u){var h;u?h=u.l:h=o.U++;const p=ot(o.I);se(p,"SID",o.K),se(p,"RID",h),se(p,"AID",o.T),Gn(o,p),o.m&&o.o&&Mi(p,o.m,o.o),h=new yt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),u&&(o.i=u.D.concat(o.i)),u=jo(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Oi(o.h,h),xi(h,p,u)}function Gn(o,u){o.H&&$(o.H,function(h,p){se(u,p,h)}),o.l&&bo({},function(h,p){se(u,p,h)})}function jo(o,u,h){h=Math.min(o.i.length,h);var p=o.l?T(o.l.Na,o.l,o):null;e:{var P=o.i;let x=-1;for(;;){const F=["count="+h];x==-1?0<h?(x=P[0].g,F.push("ofs="+x)):x=0:F.push("ofs="+x);let ne=!0;for(let we=0;we<h;we++){let ee=P[we].g;const Pe=P[we].map;if(ee-=x,0>ee)x=Math.max(0,P[we].g-100),ne=!1;else try{zu(Pe,F,"req"+ee+"_")}catch{p&&p(Pe)}}if(ne){p=F.join("&");break e}}}return o=o.i.splice(0,h),u.D=o,p}function qo(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;$e||mt(),Me||($e(),Me=!0),Qe.add(u,o),o.v=0}}function Li(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=kn(T(o.Fa,o),Wo(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Ho(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=kn(T(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),Vr(this),Ho(this))};function Fi(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Ho(o){o.g=new yt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=ot(o.qa);se(u,"RID","rpc"),se(u,"SID",o.K),se(u,"AID",o.T),se(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&se(u,"TO",o.ja),se(u,"TYPE","xmlhttp"),Gn(o,u),o.m&&o.o&&Mi(u,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Rr(ot(u)),h.m=null,h.P=!0,yo(h,o)}n.Za=function(){this.C!=null&&(this.C=null,Vr(this),Li(this),ke(19))};function Dr(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function $o(o,u){var h=null;if(o.g==u){Dr(o),Fi(o),o.g=null;var p=2}else if(Di(o.h,u))h=u.D,So(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){h=u.m?u.m.length:0,u=Date.now()-u.F;var P=o.B;p=Er(),Te(p,new po(p,h)),kr(o)}else qo(o);else if(P=u.s,P==3||P==0&&0<u.X||!(p==1&&Hu(o,u)||p==2&&Li(o)))switch(h&&0<h.length&&(u=o.h,u.i=u.i.concat(h)),P){case 1:Ot(o,5);break;case 4:Ot(o,10);break;case 3:Ot(o,6);break;default:Ot(o,2)}}}function Wo(o,u){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*u}function Ot(o,u){if(o.j.info("Error code "+u),u==2){var h=T(o.fb,o),p=o.Xa;const P=!p;p=new Dt(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||br(p,"https"),Rr(p),P?Fu(p.toString(),h):Uu(p.toString(),h)}else ke(2);o.G=0,o.l&&o.l.sa(u),Ko(o),zo(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))};function Ko(o){if(o.G=0,o.ka=[],o.l){const u=Ao(o.h);(u.length!=0||o.i.length!=0)&&(C(o.ka,u),C(o.ka,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.ra()}}function Qo(o,u,h){var p=h instanceof Dt?ot(h):new Dt(h);if(p.g!="")u&&(p.g=u+"."+p.g),Pr(p,p.s);else{var P=l.location;p=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var x=new Dt(null);p&&br(x,p),u&&(x.g=u),P&&Pr(x,P),h&&(x.l=h),p=x}return h=o.D,u=o.ya,h&&u&&se(p,h,u),se(p,"VER",o.la),Gn(o,p),p}function Yo(o,u,h){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new ce(new Fn({eb:h})):new ce(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Xo(){}n=Xo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Or(){}Or.prototype.g=function(o,u){return new Le(o,u)};function Le(o,u){ye.call(this),this.g=new Bo(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!M(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!M(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new rn(this)}A(Le,ye),Le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Le.prototype.close=function(){Ni(this.g)},Le.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=qe(o),o=h);u.i.push(new Ru(u.Ya++,o)),u.G==3&&kr(u)},Le.prototype.N=function(){this.g.l=null,delete this.j,Ni(this.g),delete this.g,Le.aa.N.call(this)};function Jo(o){_t.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const h in u){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}A(Jo,_t);function Zo(){Pi.call(this),this.status=1}A(Zo,Pi);function rn(o){this.g=o}A(rn,Xo),rn.prototype.ua=function(){Te(this.g,"a")},rn.prototype.ta=function(o){Te(this.g,new Jo(o))},rn.prototype.sa=function(o){Te(this.g,new Zo)},rn.prototype.ra=function(){Te(this.g,"b")},Or.prototype.createWebChannel=Or.prototype.g,Le.prototype.send=Le.prototype.o,Le.prototype.open=Le.prototype.m,Le.prototype.close=Le.prototype.close,rc=function(){return new Or},nc=function(){return Er()},tc=Vt,ms={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ir.NO_ERROR=0,Ir.TIMEOUT=8,Ir.HTTP_ERROR=6,$r=Ir,mo.COMPLETE="complete",ec=mo,wr.EventType=st,st.OPEN="a",st.CLOSE="b",st.ERROR="c",st.MESSAGE="d",ye.prototype.listen=ye.prototype.K,$n=wr,Zl=Fn,ce.prototype.listenOnce=ce.prototype.L,ce.prototype.getLastError=ce.prototype.Ka,ce.prototype.getLastErrorCode=ce.prototype.Ba,ce.prototype.getStatus=ce.prototype.Z,ce.prototype.getResponseJson=ce.prototype.Oa,ce.prototype.getResponseText=ce.prototype.oa,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Ha,Jl=ce}).apply(typeof zr<"u"?zr:typeof self<"u"?self:typeof window<"u"?window:{});const Pa="@firebase/firestore";/**
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
 */class xe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}xe.UNAUTHENTICATED=new xe(null),xe.GOOGLE_CREDENTIALS=new xe("google-credentials-uid"),xe.FIRST_PARTY=new xe("first-party-uid"),xe.MOCK_USER=new xe("mock-user");/**
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
 */let vn="10.12.5";/**
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
 */const zt=new ml("@firebase/firestore");function qn(){return zt.logLevel}function G(n,...e){if(zt.logLevel<=Z.DEBUG){const t=e.map(Ls);zt.debug(`Firestore (${vn}): ${n}`,...t)}}function ft(n,...e){if(zt.logLevel<=Z.ERROR){const t=e.map(Ls);zt.error(`Firestore (${vn}): ${n}`,...t)}}function hn(n,...e){if(zt.logLevel<=Z.WARN){const t=e.map(Ls);zt.warn(`Firestore (${vn}): ${n}`,...t)}}function Ls(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function W(n="Unexpected state"){const e=`FIRESTORE (${vn}) INTERNAL ASSERTION FAILED: `+n;throw ft(e),new Error(e)}function re(n,e){n||W()}function Q(n,e){return n}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Ht{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ut{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class ic{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class pm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(xe.UNAUTHENTICATED))}shutdown(){}}class mm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class gm{constructor(e){this.t=e,this.currentUser=xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new ut;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new ut,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new ut)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(re(typeof r.accessToken=="string"),new ic(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return re(e===null||typeof e=="string"),new xe(e)}}class _m{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=xe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ym{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new _m(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(xe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vm{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Tm{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(re(typeof t.token=="string"),this.R=t.token,new vm(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wm(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class sc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=wm(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function te(n,e){return n<e?-1:n>e?1:0}function dn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
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
 */class _e{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new q(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new _e(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class K{constructor(e){this.timestamp=e}static fromTimestamp(e){return new K(e)}static min(){return new K(new _e(0,0))}static max(){return new K(new _e(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ir{constructor(e,t,r){t===void 0?t=0:t>e.length&&W(),r===void 0?r=e.length-t:r>e.length-t&&W(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return ir.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ir?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ae extends ir{construct(e,t,r){return new ae(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new ae(t)}static emptyPath(){return new ae([])}}const Em=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Se extends ir{construct(e,t,r){return new Se(e,t,r)}static isValidIdentifier(e){return Em.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Se(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new q(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Se(t)}static emptyPath(){return new Se([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(ae.fromString(e))}static fromName(e){return new H(ae.fromString(e).popFirst(5))}static empty(){return new H(ae.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ae.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ae.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new ae(e.slice()))}}function Im(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=K.fromTimestamp(r===1e9?new _e(t+1,0):new _e(t,r));return new Rt(i,H.empty(),e)}function Sm(n){return new Rt(n.readTime,n.key,-1)}class Rt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Rt(K.min(),H.empty(),-1)}static max(){return new Rt(K.max(),H.empty(),-1)}}function Am(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=H.comparator(n.documentKey,e.documentKey),t!==0?t:te(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ur(n){if(n.code!==D.FAILED_PRECONDITION||n.message!==bm)throw n;G("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&W(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof O?t:O.resolve(t)}catch(t){return O.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):O.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):O.reject(t)}static resolve(e){return new O((t,r)=>{t(e)})}static reject(e){return new O((t,r)=>{r(e)})}static waitFor(e){return new O((t,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},c=>r(c))}),a=!0,s===i&&t()})}static or(e){let t=O.resolve(!1);for(const r of e)t=t.next(i=>i?O.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new O((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let c=0;c<s;c++){const d=c;t(e[d]).next(f=>{a[d]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new O((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Rm(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function hr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Fs{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Fs.oe=-1;function hi(n){return n==null}function ni(n){return n===0&&1/n==-1/0}function Cm(n){return typeof n=="number"&&Number.isInteger(n)&&!ni(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ra(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Tn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function oc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class le{constructor(e,t){this.comparator=e,this.root=t||Ie.EMPTY}insert(e,t){return new le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gr(this.root,e,this.comparator,!0)}}class Gr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ie.RED,this.left=i??Ie.EMPTY,this.right=s??Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ie(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ie.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw W();const e=this.left.check();if(e!==this.right.check())throw W();return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw W()}get value(){throw W()}get color(){throw W()}get left(){throw W()}get right(){throw W()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ie(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ae{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ca(this.data.getIterator())}getIteratorFrom(e){return new Ca(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ae(this.comparator);return t.data=e,t}}class Ca{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new Ke([])}unionWith(e){let t=new Ae(Se.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ke(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return dn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new ac("Invalid base64 string: "+s):s}}(e);return new be(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new be(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}be.EMPTY_BYTE_STRING=new be("");const xm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ct(n){if(re(!!n),typeof n=="string"){let e=0;const t=xm.exec(n);if(re(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:pe(n.seconds),nanos:pe(n.nanos)}}function pe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Gt(n){return typeof n=="string"?be.fromBase64String(n):be.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Bs(n){const e=n.mapValue.fields.__previous_value__;return Us(e)?Bs(e):e}function sr(n){const e=Ct(n.mapValue.fields.__local_write_time__.timestampValue);return new _e(e.seconds,e.nanos)}/**
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
 */class Vm{constructor(e,t,r,i,s,a,l,c,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=d}}class or{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new or("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof or&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function jt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Us(n)?4:km(n)?9007199254740991:10:W()}function tt(n,e){if(n===e)return!0;const t=jt(n);if(t!==jt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return sr(n).isEqual(sr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Ct(i.timestampValue),l=Ct(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Gt(i.bytesValue).isEqual(Gt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return pe(i.geoPointValue.latitude)===pe(s.geoPointValue.latitude)&&pe(i.geoPointValue.longitude)===pe(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return pe(i.integerValue)===pe(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=pe(i.doubleValue),l=pe(s.doubleValue);return a===l?ni(a)===ni(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return dn(n.arrayValue.values||[],e.arrayValue.values||[],tt);case 10:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Ra(a)!==Ra(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!tt(a[c],l[c])))return!1;return!0}(n,e);default:return W()}}function ar(n,e){return(n.values||[]).find(t=>tt(t,e))!==void 0}function fn(n,e){if(n===e)return 0;const t=jt(n),r=jt(e);if(t!==r)return te(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(n.booleanValue,e.booleanValue);case 2:return function(s,a){const l=pe(s.integerValue||s.doubleValue),c=pe(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return xa(n.timestampValue,e.timestampValue);case 4:return xa(sr(n),sr(e));case 5:return te(n.stringValue,e.stringValue);case 6:return function(s,a){const l=Gt(s),c=Gt(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),c=a.split("/");for(let d=0;d<l.length&&d<c.length;d++){const f=te(l[d],c[d]);if(f!==0)return f}return te(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const l=te(pe(s.latitude),pe(a.latitude));return l!==0?l:te(pe(s.longitude),pe(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,a){const l=s.values||[],c=a.values||[];for(let d=0;d<l.length&&d<c.length;++d){const f=fn(l[d],c[d]);if(f)return f}return te(l.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,a){if(s===jr.mapValue&&a===jr.mapValue)return 0;if(s===jr.mapValue)return 1;if(a===jr.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),d=a.fields||{},f=Object.keys(d);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const T=te(c[m],f[m]);if(T!==0)return T;const I=fn(l[c[m]],d[f[m]]);if(I!==0)return I}return te(c.length,f.length)}(n.mapValue,e.mapValue);default:throw W()}}function xa(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return te(n,e);const t=Ct(n),r=Ct(e),i=te(t.seconds,r.seconds);return i!==0?i:te(t.nanos,r.nanos)}function pn(n){return gs(n)}function gs(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Ct(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Gt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return H.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=gs(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${gs(t.fields[a])}`;return i+"}"}(n.mapValue):W()}function _s(n){return!!n&&"integerValue"in n}function zs(n){return!!n&&"arrayValue"in n}function Va(n){return!!n&&"nullValue"in n}function ka(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Wr(n){return!!n&&"mapValue"in n}function Xn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Tn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Xn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Xn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function km(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class He{constructor(e){this.value=e}static empty(){return new He({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Wr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xn(t)}setAll(e){let t=Se.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=Xn(a):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Wr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return tt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Wr(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Tn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new He(Xn(this.value))}}function lc(n){const e=[];return Tn(n.fields,(t,r)=>{const i=new Se([t]);if(Wr(r)){const s=lc(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Ke(e)}/**
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
 */class Ve{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ve(e,0,K.min(),K.min(),K.min(),He.empty(),0)}static newFoundDocument(e,t,r,i){return new Ve(e,1,t,K.min(),r,i,0)}static newNoDocument(e,t){return new Ve(e,2,t,K.min(),K.min(),He.empty(),0)}static newUnknownDocument(e,t){return new Ve(e,3,t,K.min(),K.min(),He.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=He.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=He.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ve&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ve(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t){this.position=e,this.inclusive=t}}function Da(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(a.referenceValue),t.key):r=fn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Oa(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!tt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t="asc"){this.field=e,this.dir=t}}function Dm(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{}class ge extends cc{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Mm(e,t,r):t==="array-contains"?new Fm(e,r):t==="in"?new Um(e,r):t==="not-in"?new Bm(e,r):t==="array-contains-any"?new zm(e,r):new ge(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Nm(e,r):new Lm(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(fn(t,this.value)):t!==null&&jt(this.value)===jt(t)&&this.matchesComparison(fn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return W()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nt extends cc{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new nt(e,t)}matches(e){return uc(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function uc(n){return n.op==="and"}function hc(n){return Om(n)&&uc(n)}function Om(n){for(const e of n.filters)if(e instanceof nt)return!1;return!0}function ys(n){if(n instanceof ge)return n.field.canonicalString()+n.op.toString()+pn(n.value);if(hc(n))return n.filters.map(e=>ys(e)).join(",");{const e=n.filters.map(t=>ys(t)).join(",");return`${n.op}(${e})`}}function dc(n,e){return n instanceof ge?function(r,i){return i instanceof ge&&r.op===i.op&&r.field.isEqual(i.field)&&tt(r.value,i.value)}(n,e):n instanceof nt?function(r,i){return i instanceof nt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&dc(a,i.filters[l]),!0):!1}(n,e):void W()}function fc(n){return n instanceof ge?function(t){return`${t.field.canonicalString()} ${t.op} ${pn(t.value)}`}(n):n instanceof nt?function(t){return t.op.toString()+" {"+t.getFilters().map(fc).join(" ,")+"}"}(n):"Filter"}class Mm extends ge{constructor(e,t,r){super(e,t,r),this.key=H.fromName(r.referenceValue)}matches(e){const t=H.comparator(e.key,this.key);return this.matchesComparison(t)}}class Nm extends ge{constructor(e,t){super(e,"in",t),this.keys=pc("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Lm extends ge{constructor(e,t){super(e,"not-in",t),this.keys=pc("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function pc(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>H.fromName(r.referenceValue))}class Fm extends ge{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return zs(t)&&ar(t.arrayValue,this.value)}}class Um extends ge{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ar(this.value.arrayValue,t)}}class Bm extends ge{constructor(e,t){super(e,"not-in",t)}matches(e){if(ar(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ar(this.value.arrayValue,t)}}class zm extends ge{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!zs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ar(this.value.arrayValue,r))}}/**
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
 */class Gm{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Ma(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Gm(n,e,t,r,i,s,a)}function Gs(n){const e=Q(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ys(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),hi(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>pn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>pn(r)).join(",")),e.ue=t}return e.ue}function js(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Dm(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!dc(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Oa(n.startAt,e.startAt)&&Oa(n.endAt,e.endAt)}function vs(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class di{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function jm(n,e,t,r,i,s,a,l){return new di(n,e,t,r,i,s,a,l)}function qs(n){return new di(n)}function Na(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function qm(n){return n.collectionGroup!==null}function Jn(n){const e=Q(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Ae(Se.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ii(s,r))}),t.has(Se.keyField().canonicalString())||e.ce.push(new ii(Se.keyField(),r))}return e.ce}function Ze(n){const e=Q(n);return e.le||(e.le=Hm(e,Jn(n))),e.le}function Hm(n,e){if(n.limitType==="F")return Ma(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ii(i.field,s)});const t=n.endAt?new ri(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ri(n.startAt.position,n.startAt.inclusive):null;return Ma(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ts(n,e,t){return new di(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function fi(n,e){return js(Ze(n),Ze(e))&&n.limitType===e.limitType}function mc(n){return`${Gs(Ze(n))}|lt:${n.limitType}`}function on(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>fc(i)).join(", ")}]`),hi(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>pn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>pn(i)).join(",")),`Target(${r})`}(Ze(n))}; limitType=${n.limitType})`}function pi(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Jn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,c){const d=Da(a,l,c);return a.inclusive?d<=0:d<0}(r.startAt,Jn(r),i)||r.endAt&&!function(a,l,c){const d=Da(a,l,c);return a.inclusive?d>=0:d>0}(r.endAt,Jn(r),i))}(n,e)}function $m(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function gc(n){return(e,t)=>{let r=!1;for(const i of Jn(n)){const s=Wm(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Wm(n,e,t){const r=n.field.isKeyField()?H.comparator(e.key,t.key):function(s,a,l){const c=a.data.field(s),d=l.data.field(s);return c!==null&&d!==null?fn(c,d):W()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return W()}}/**
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
 */class wn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Tn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return oc(this.inner)}size(){return this.innerSize}}/**
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
 */const Km=new le(H.comparator);function pt(){return Km}const _c=new le(H.comparator);function Wn(...n){let e=_c;for(const t of n)e=e.insert(t.key,t);return e}function yc(n){let e=_c;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Nt(){return Zn()}function vc(){return Zn()}function Zn(){return new wn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Qm=new le(H.comparator),Ym=new Ae(H.comparator);function X(...n){let e=Ym;for(const t of n)e=e.add(t);return e}const Xm=new Ae(te);function Jm(){return Xm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ni(e)?"-0":e}}function wc(n){return{integerValue:""+n}}function Zm(n,e){return Cm(e)?wc(e):Tc(n,e)}/**
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
 */class mi{constructor(){this._=void 0}}function eg(n,e,t){return n instanceof si?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Us(s)&&(s=Bs(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof lr?Ic(n,e):n instanceof cr?Sc(n,e):function(i,s){const a=Ec(i,s),l=La(a)+La(i.Pe);return _s(a)&&_s(i.Pe)?wc(l):Tc(i.serializer,l)}(n,e)}function tg(n,e,t){return n instanceof lr?Ic(n,e):n instanceof cr?Sc(n,e):t}function Ec(n,e){return n instanceof oi?function(r){return _s(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class si extends mi{}class lr extends mi{constructor(e){super(),this.elements=e}}function Ic(n,e){const t=Ac(e);for(const r of n.elements)t.some(i=>tt(i,r))||t.push(r);return{arrayValue:{values:t}}}class cr extends mi{constructor(e){super(),this.elements=e}}function Sc(n,e){let t=Ac(e);for(const r of n.elements)t=t.filter(i=>!tt(i,r));return{arrayValue:{values:t}}}class oi extends mi{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function La(n){return pe(n.integerValue||n.doubleValue)}function Ac(n){return zs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ng(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof lr&&i instanceof lr||r instanceof cr&&i instanceof cr?dn(r.elements,i.elements,tt):r instanceof oi&&i instanceof oi?tt(r.Pe,i.Pe):r instanceof si&&i instanceof si}(n.transform,e.transform)}class rg{constructor(e,t){this.version=e,this.transformResults=t}}class ht{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ht}static exists(e){return new ht(void 0,e)}static updateTime(e){return new ht(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Kr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class gi{}function bc(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Rc(n.key,ht.none()):new dr(n.key,n.data,ht.none());{const t=n.data,r=He.empty();let i=new Ae(Se.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new $t(n.key,r,new Ke(i.toArray()),ht.none())}}function ig(n,e,t){n instanceof dr?function(i,s,a){const l=i.value.clone(),c=Ua(i.fieldTransforms,s,a.transformResults);l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof $t?function(i,s,a){if(!Kr(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Ua(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(Pc(i)),c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function er(n,e,t,r){return n instanceof dr?function(s,a,l,c){if(!Kr(s.precondition,a))return l;const d=s.value.clone(),f=Ba(s.fieldTransforms,c,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof $t?function(s,a,l,c){if(!Kr(s.precondition,a))return l;const d=Ba(s.fieldTransforms,c,a),f=a.data;return f.setAll(Pc(s)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,a,l){return Kr(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function sg(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Ec(r.transform,i||null);s!=null&&(t===null&&(t=He.empty()),t.set(r.field,s))}return t||null}function Fa(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&dn(r,i,(s,a)=>ng(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class dr extends gi{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class $t extends gi{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Pc(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Ua(n,e,t){const r=new Map;re(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,tg(a,l,t[i]))}return r}function Ba(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,eg(s,a,e))}return r}class Rc extends gi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class og extends gi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class ag{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ig(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=er(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=er(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=vc();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const c=bc(a,l);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),X())}isEqual(e){return this.batchId===e.batchId&&dn(this.mutations,e.mutations,(t,r)=>Fa(t,r))&&dn(this.baseMutations,e.baseMutations,(t,r)=>Fa(t,r))}}class Hs{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){re(e.mutations.length===r.length);let i=function(){return Qm}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Hs(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class cg{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var fe,J;function ug(n){switch(n){default:return W();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function Cc(n){if(n===void 0)return ft("GRPC error has no .code"),D.UNKNOWN;switch(n){case fe.OK:return D.OK;case fe.CANCELLED:return D.CANCELLED;case fe.UNKNOWN:return D.UNKNOWN;case fe.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case fe.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case fe.INTERNAL:return D.INTERNAL;case fe.UNAVAILABLE:return D.UNAVAILABLE;case fe.UNAUTHENTICATED:return D.UNAUTHENTICATED;case fe.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case fe.NOT_FOUND:return D.NOT_FOUND;case fe.ALREADY_EXISTS:return D.ALREADY_EXISTS;case fe.PERMISSION_DENIED:return D.PERMISSION_DENIED;case fe.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case fe.ABORTED:return D.ABORTED;case fe.OUT_OF_RANGE:return D.OUT_OF_RANGE;case fe.UNIMPLEMENTED:return D.UNIMPLEMENTED;case fe.DATA_LOSS:return D.DATA_LOSS;default:return W()}}(J=fe||(fe={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=new Ft([4294967295,4294967295],0);function za(n){const e=hg().encode(n),t=new Xl;return t.update(e),new Uint8Array(t.digest())}function Ga(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ft([t,r],0),new Ft([i,s],0)]}class $s{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Kn(`Invalid padding: ${t}`);if(r<0)throw new Kn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Kn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Kn(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Ft.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(Ft.fromNumber(r)));return i.compare(dg)===1&&(i=new Ft([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=za(e),[r,i]=Ga(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new $s(s,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=za(e),[r,i]=Ga(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Kn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class _i{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,fr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new _i(K.min(),i,new le(te),pt(),X())}}class fr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new fr(r,t,X(),X(),X())}}/**
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
 */class Qr{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class xc{constructor(e,t){this.targetId=e,this.me=t}}class Vc{constructor(e,t,r=be.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class ja{constructor(){this.fe=0,this.ge=Ha(),this.pe=be.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=X(),t=X(),r=X();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:W()}}),new fr(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=Ha()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,re(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class fg{constructor(e){this.Le=e,this.Be=new Map,this.ke=pt(),this.qe=qa(),this.Qe=new le(te)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:W()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(vs(s))if(r===0){const a=new H(s.path);this.Ue(t,a,Ve.newNoDocument(a,K.min()))}else re(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(t);const d=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=Gt(r).toUint8Array()}catch(c){if(c instanceof ac)return hn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new $s(a,i,s)}catch(c){return hn(c instanceof Kn?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&vs(l.target)){const c=new H(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,Ve.newNoDocument(c,e))}s.be&&(t.set(a,s.Ce()),s.ve())}});let r=X();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(c=>{const d=this.Je(c);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new _i(e,t,this.Qe,this.ke,r);return this.ke=pt(),this.qe=qa(),this.Qe=new le(te),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new ja,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Ae(te),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||G("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ja),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function qa(){return new le(H.comparator)}function Ha(){return new le(H.comparator)}const pg={asc:"ASCENDING",desc:"DESCENDING"},mg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},gg={and:"AND",or:"OR"};class _g{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ws(n,e){return n.useProto3Json||hi(e)?e:{value:e}}function ai(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kc(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function yg(n,e){return ai(n,e.toTimestamp())}function et(n){return re(!!n),K.fromTimestamp(function(t){const r=Ct(t);return new _e(r.seconds,r.nanos)}(n))}function Ws(n,e){return Es(n,e).canonicalString()}function Es(n,e){const t=function(i){return new ae(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Dc(n){const e=ae.fromString(n);return re(Fc(e)),e}function Is(n,e){return Ws(n.databaseId,e.path)}function ts(n,e){const t=Dc(e);if(t.get(1)!==n.databaseId.projectId)throw new q(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new q(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new H(Mc(t))}function Oc(n,e){return Ws(n.databaseId,e)}function vg(n){const e=Dc(n);return e.length===4?ae.emptyPath():Mc(e)}function Ss(n){return new ae(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Mc(n){return re(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function $a(n,e,t){return{name:Is(n,e),fields:t.value.mapValue.fields}}function Tg(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:W()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(re(f===void 0||typeof f=="string"),be.fromBase64String(f||"")):(re(f===void 0||f instanceof Buffer||f instanceof Uint8Array),be.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const f=d.code===void 0?D.UNKNOWN:Cc(d.code);return new q(f,d.message||"")}(a);t=new Vc(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ts(n,r.document.name),s=et(r.document.updateTime),a=r.document.createTime?et(r.document.createTime):K.min(),l=new He({mapValue:{fields:r.document.fields}}),c=Ve.newFoundDocument(i,s,a,l),d=r.targetIds||[],f=r.removedTargetIds||[];t=new Qr(d,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ts(n,r.document),s=r.readTime?et(r.readTime):K.min(),a=Ve.newNoDocument(i,s),l=r.removedTargetIds||[];t=new Qr([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ts(n,r.document),s=r.removedTargetIds||[];t=new Qr([],s,i,null)}else{if(!("filter"in e))return W();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new cg(i,s),l=r.targetId;t=new xc(l,a)}}return t}function wg(n,e){let t;if(e instanceof dr)t={update:$a(n,e.key,e.value)};else if(e instanceof Rc)t={delete:Is(n,e.key)};else if(e instanceof $t)t={update:$a(n,e.key,e.data),updateMask:xg(e.fieldMask)};else{if(!(e instanceof og))return W();t={verify:Is(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof si)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof lr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof cr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof oi)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw W()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:yg(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:W()}(n,e.precondition)),t}function Eg(n,e){return n&&n.length>0?(re(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?et(i.updateTime):et(s);return a.isEqual(K.min())&&(a=et(s)),new rg(a,i.transformResults||[])}(t,e))):[]}function Ig(n,e){return{documents:[Oc(n,e.path)]}}function Sg(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Oc(n,i);const s=function(d){if(d.length!==0)return Lc(nt.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(f=>function(T){return{field:an(T.field),direction:Pg(T.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=ws(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function Ag(n){let e=vg(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){re(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){const T=Nc(m);return T instanceof nt&&hc(T)?T.getFilters():[T]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(T=>function(A){return new ii(ln(A.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(T))}(t.orderBy));let l=null;t.limit&&(l=function(m){let T;return T=typeof m=="object"?m.value:m,hi(T)?null:T}(t.limit));let c=null;t.startAt&&(c=function(m){const T=!!m.before,I=m.values||[];return new ri(I,T)}(t.startAt));let d=null;return t.endAt&&(d=function(m){const T=!m.before,I=m.values||[];return new ri(I,T)}(t.endAt)),jm(e,i,a,s,l,"F",c,d)}function bg(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return W()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Nc(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ln(t.unaryFilter.field);return ge.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ln(t.unaryFilter.field);return ge.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ln(t.unaryFilter.field);return ge.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ln(t.unaryFilter.field);return ge.create(a,"!=",{nullValue:"NULL_VALUE"});default:return W()}}(n):n.fieldFilter!==void 0?function(t){return ge.create(ln(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return W()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return nt.create(t.compositeFilter.filters.map(r=>Nc(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return W()}}(t.compositeFilter.op))}(n):W()}function Pg(n){return pg[n]}function Rg(n){return mg[n]}function Cg(n){return gg[n]}function an(n){return{fieldPath:n.canonicalString()}}function ln(n){return Se.fromServerFormat(n.fieldPath)}function Lc(n){return n instanceof ge?function(t){if(t.op==="=="){if(ka(t.value))return{unaryFilter:{field:an(t.field),op:"IS_NAN"}};if(Va(t.value))return{unaryFilter:{field:an(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(ka(t.value))return{unaryFilter:{field:an(t.field),op:"IS_NOT_NAN"}};if(Va(t.value))return{unaryFilter:{field:an(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:an(t.field),op:Rg(t.op),value:t.value}}}(n):n instanceof nt?function(t){const r=t.getFilters().map(i=>Lc(i));return r.length===1?r[0]:{compositeFilter:{op:Cg(t.op),filters:r}}}(n):W()}function xg(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Fc(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class It{constructor(e,t,r,i,s=K.min(),a=K.min(),l=be.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new It(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new It(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Vg{constructor(e){this.ct=e}}function kg(n){const e=Ag({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ts(e,e.limit,"L"):e}/**
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
 */class Dg{constructor(){this.an=new Og}addToCollectionParentIndex(e,t){return this.an.add(t),O.resolve()}getCollectionParents(e,t){return O.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return O.resolve()}deleteFieldIndex(e,t){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,t){return O.resolve()}getDocumentsMatchingTarget(e,t){return O.resolve(null)}getIndexType(e,t){return O.resolve(0)}getFieldIndexes(e,t){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,t){return O.resolve(Rt.min())}getMinOffsetFromCollectionGroup(e,t){return O.resolve(Rt.min())}updateCollectionGroup(e,t,r){return O.resolve()}updateIndexEntries(e,t){return O.resolve()}}class Og{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Ae(ae.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ae(ae.comparator)).toArray()}}/**
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
 */class mn{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new mn(0)}static Bn(){return new mn(-1)}}/**
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
 */class Mg{constructor(){this.changes=new wn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ve.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?O.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Lg{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&er(r.mutation,i,Ke.empty(),_e.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,X()).next(()=>r))}getLocalViewOfDocuments(e,t,r=X()){const i=Nt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=Wn();return s.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Nt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,X()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let s=pt();const a=Zn(),l=function(){return Zn()}();return t.forEach((c,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof $t)?s=s.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),er(f.mutation,d,f.mutation.getFieldMask(),_e.now())):a.set(d.key,Ke.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var m;return l.set(d,new Ng(f,(m=a.get(d))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Zn();let i=new le((a,l)=>a-l),s=X();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const d=t.get(c);if(d===null)return;let f=r.get(c)||Ke.empty();f=l.applyToLocalView(d,f),r.set(c,f);const m=(i.get(l.batchId)||X()).add(c);i=i.insert(l.batchId,m)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),d=c.key,f=c.value,m=vc();f.forEach(T=>{if(!s.has(T)){const I=bc(t.get(T),r.get(T));I!==null&&m.set(T,I),s=s.add(T)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,m))}return O.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return H.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):qm(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):O.resolve(Nt());let l=-1,c=s;return a.next(d=>O.forEach(d,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?O.resolve():this.remoteDocumentCache.getEntry(e,f).next(T=>{c=c.insert(f,T)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,c,d,X())).next(f=>({batchId:l,changes:yc(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H(t)).next(r=>{let i=Wn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=Wn();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,c=>{const d=function(m,T){return new di(T,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((m,T)=>{a=a.insert(m,T)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((c,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Ve.newInvalidDocument(f)))});let l=Wn();return a.forEach((c,d)=>{const f=s.get(c);f!==void 0&&er(f.mutation,d,Ke.empty(),_e.now()),pi(t,d)&&(l=l.insert(c,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fg{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return O.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:et(i.createTime)}}(t)),O.resolve()}getNamedQuery(e,t){return O.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,function(i){return{name:i.name,query:kg(i.bundledQuery),readTime:et(i.readTime)}}(t)),O.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(){this.overlays=new le(H.comparator),this.Pr=new Map}getOverlay(e,t){return O.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Nt();return O.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),O.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),O.resolve()}getOverlaysForCollection(e,t,r){const i=Nt(),s=t.length+1,a=new H(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,d=c.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return O.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new le((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=Nt(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=Nt(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return O.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new lg(t,r));let s=this.Pr.get(t);s===void 0&&(s=X(),this.Pr.set(t,s)),this.Pr.set(t,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bg{constructor(){this.sessionToken=be.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,O.resolve()}}/**
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
 */class Ks{constructor(){this.Ir=new Ae(ve.Tr),this.Er=new Ae(ve.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){const r=new ve(e,t);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Rr(new ve(e,t))}Vr(e,t){e.forEach(r=>this.removeReference(r,t))}mr(e){const t=new H(new ae([])),r=new ve(t,e),i=new ve(t,e+1),s=[];return this.Er.forEachInRange([r,i],a=>{this.Rr(a),s.push(a.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const t=new H(new ae([])),r=new ve(t,e),i=new ve(t,e+1);let s=X();return this.Er.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new ve(e,0),r=this.Ir.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class ve{constructor(e,t){this.key=e,this.yr=t}static Tr(e,t){return H.comparator(e.key,t.key)||te(e.yr,t.yr)}static dr(e,t){return te(e.yr,t.yr)||H.comparator(e.key,t.key)}}/**
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
 */class zg{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new Ae(ve.Tr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ag(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.Sr=this.Sr.add(new ve(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(a)}lookupMutationBatch(e,t){return O.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Dr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new ve(t,0),i=new ve(t,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],a=>{const l=this.br(a.yr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ae(te);return t.forEach(i=>{const s=new ve(i,0),a=new ve(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,a],l=>{r=r.add(l.yr)})}),O.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const a=new ve(new H(s),0);let l=new Ae(te);return this.Sr.forEachWhile(c=>{const d=c.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(c.yr)),!0)},a),O.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.br(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){re(this.vr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return O.forEach(t.mutations,i=>{const s=new ve(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,t){const r=new ve(t,0),i=this.Sr.firstAfterOrEqual(r);return O.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Gg{constructor(e){this.Fr=e,this.docs=function(){return new le(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Fr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return O.resolve(r?r.document.mutableCopy():Ve.newInvalidDocument(t))}getEntries(e,t){let r=pt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ve.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=pt();const a=t.path,l=new H(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:d,value:{document:f}}=c.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Am(Sm(f),r)<=0||(i.has(f.key)||pi(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,t,r,i){W()}Mr(e,t){return O.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new jg(this)}getSize(e){return O.resolve(this.size)}}class jg extends Mg{constructor(e){super(),this.ur=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),O.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
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
 */class qg{constructor(e){this.persistence=e,this.Or=new wn(t=>Gs(t),js),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new Ks,this.targetCount=0,this.Br=mn.Ln()}forEachTarget(e,t){return this.Or.forEach((r,i)=>t(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Nr&&(this.Nr=t),O.resolve()}Qn(e){this.Or.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Br=new mn(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,O.resolve()}updateTargetData(e,t){return this.Qn(t),O.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Lr.mr(t.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Or.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Or.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,t){const r=this.Or.get(t)||null;return O.resolve(r)}addMatchingKeys(e,t,r){return this.Lr.Ar(t,r),O.resolve()}removeMatchingKeys(e,t,r){this.Lr.Vr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Lr.mr(t),O.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Lr.pr(t);return O.resolve(r)}containsKey(e,t){return O.resolve(this.Lr.containsKey(t))}}/**
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
 */class Hg{constructor(e,t){this.kr={},this.overlays={},this.qr=new Fs(0),this.Qr=!1,this.Qr=!0,this.Kr=new Bg,this.referenceDelegate=e(this),this.$r=new qg(this),this.indexManager=new Dg,this.remoteDocumentCache=function(i){return new Gg(i)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new Vg(t),this.Wr=new Fg(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ug,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.kr[e.toKey()];return r||(r=new zg(t,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,t,r){G("MemoryPersistence","Starting transaction:",e);const i=new $g(this.qr.next());return this.referenceDelegate.Gr(),r(i).next(s=>this.referenceDelegate.zr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}jr(e,t){return O.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,t)))}}class $g extends Pm{constructor(e){super(),this.currentSequenceNumber=e}}class Qs{constructor(e){this.persistence=e,this.Hr=new Ks,this.Jr=null}static Yr(e){return new Qs(e)}get Zr(){if(this.Jr)return this.Jr;throw W()}addReference(e,t,r){return this.Hr.addReference(r,t),this.Zr.delete(r.toString()),O.resolve()}removeReference(e,t,r){return this.Hr.removeReference(r,t),this.Zr.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,t){return this.Zr.add(t.toString()),O.resolve()}removeTarget(e,t){this.Hr.mr(t.targetId).forEach(i=>this.Zr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Zr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Gr(){this.Jr=new Set}zr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.Zr,r=>{const i=H.fromPath(r);return this.Xr(e,i).next(s=>{s||t.removeEntry(i,K.min())})}).next(()=>(this.Jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Xr(e,t).next(r=>{r?this.Zr.delete(t.toString()):this.Zr.add(t.toString())})}Ur(e){return 0}Xr(e,t){return O.or([()=>O.resolve(this.Hr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.jr(e,t)])}}/**
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
 */class Ys{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Ki=r,this.$i=i}static Ui(e,t){let r=X(),i=X();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Ys(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Kg{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return sh()?8:Rm(Rs())>0?6:4}()}initialize(e,t){this.Hi=e,this.indexManager=t,this.Wi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Ji(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Yi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Wg;return this.Zi(e,t,a).next(l=>{if(s.result=l,this.Gi)return this.Xi(e,t,a,l.size)})}).next(()=>s.result)}Xi(e,t,r,i){return r.documentReadCount<this.zi?(qn()<=Z.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",on(t),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),O.resolve()):(qn()<=Z.DEBUG&&G("QueryEngine","Query:",on(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ji*i?(qn()<=Z.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",on(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ze(t))):O.resolve())}Ji(e,t){if(Na(t))return O.resolve(null);let r=Ze(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ts(t,null,"F"),r=Ze(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=X(...s);return this.Hi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const d=this.es(t,l);return this.ts(t,d,a,c.readTime)?this.Ji(e,Ts(t,null,"F")):this.ns(e,d,t,c)}))})))}Yi(e,t,r,i){return Na(t)||i.isEqual(K.min())?O.resolve(null):this.Hi.getDocuments(e,r).next(s=>{const a=this.es(t,s);return this.ts(t,a,r,i)?O.resolve(null):(qn()<=Z.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),on(t)),this.ns(e,a,t,Im(i,-1)).next(l=>l))})}es(e,t){let r=new Ae(gc(e));return t.forEach((i,s)=>{pi(e,s)&&(r=r.add(s))}),r}ts(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zi(e,t,r){return qn()<=Z.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",on(t)),this.Hi.getDocumentsMatchingQuery(e,t,Rt.min(),r)}ns(e,t,r,i){return this.Hi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,t,r,i){this.persistence=e,this.rs=t,this.serializer=i,this.ss=new le(te),this.os=new wn(s=>Gs(s),js),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Lg(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ss))}}function Yg(n,e,t,r){return new Qg(n,e,t,r)}async function Uc(n,e){const t=Q(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.cs(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let c=X();for(const d of i){a.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(d=>({ls:d,removedBatchIds:a,addedBatchIds:l}))})})}function Xg(n,e){const t=Q(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.us.newChangeBuffer({trackRemovals:!0});return function(l,c,d,f){const m=d.batch,T=m.keys();let I=O.resolve();return T.forEach(A=>{I=I.next(()=>f.getEntry(c,A)).next(R=>{const C=d.docVersions.get(A);re(C!==null),R.version.compareTo(C)<0&&(m.applyToRemoteDocument(R,d),R.isValidDocument()&&(R.setReadTime(d.commitVersion),f.addEntry(R)))})}),I.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=X();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(c=c.add(l.batch.mutations[d].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Bc(n){const e=Q(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.$r.getLastRemoteSnapshotVersion(t))}function Jg(n,e){const t=Q(n),r=e.snapshotVersion;let i=t.ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.us.newChangeBuffer({trackRemovals:!0});i=t.ss;const l=[];e.targetChanges.forEach((f,m)=>{const T=i.get(m);if(!T)return;l.push(t.$r.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.$r.addMatchingKeys(s,f.addedDocuments,m)));let I=T.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?I=I.withResumeToken(be.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(m,I),function(R,C,V){return R.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:V.addedDocuments.size+V.modifiedDocuments.size+V.removedDocuments.size>0}(T,I,f)&&l.push(t.$r.updateTargetData(s,I))});let c=pt(),d=X();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Zg(s,a,e.documentUpdates).next(f=>{c=f.hs,d=f.Ps})),!r.isEqual(K.min())){const f=t.$r.getLastRemoteSnapshotVersion(s).next(m=>t.$r.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return O.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,d)).next(()=>c)}).then(s=>(t.ss=i,s))}function Zg(n,e,t){let r=X(),i=X();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=pt();return t.forEach((l,c)=>{const d=s.get(l);c.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(K.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!d.isValidDocument()||c.version.compareTo(d.version)>0||c.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):G("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",c.version)}),{hs:a,Ps:i}})}function e_(n,e){const t=Q(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function t_(n,e){const t=Q(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.$r.getTargetData(r,e).next(s=>s?(i=s,O.resolve(i)):t.$r.allocateTargetId(r).next(a=>(i=new It(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.$r.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ss=t.ss.insert(r.targetId,r),t.os.set(e,r.targetId)),r})}async function As(n,e,t){const r=Q(n),i=r.ss.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!hr(a))throw a;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ss=r.ss.remove(e),r.os.delete(i.target)}function Wa(n,e,t){const r=Q(n);let i=K.min(),s=X();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,d,f){const m=Q(c),T=m.os.get(f);return T!==void 0?O.resolve(m.ss.get(T)):m.$r.getTargetData(d,f)}(r,a,Ze(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(a,l.targetId).next(c=>{s=c})}).next(()=>r.rs.getDocumentsMatchingQuery(a,e,t?i:K.min(),t?s:X())).next(l=>(n_(r,$m(e),l),{documents:l,Is:s})))}function n_(n,e,t){let r=n._s.get(e)||K.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n._s.set(e,r)}class Ka{constructor(){this.activeTargetIds=Jm()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class r_{constructor(){this.io=new Ka,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,t,r){this.so[e]=t}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new Ka,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class i_{oo(e){}shutdown(){}}/**
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
 */class Qa{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qr=null;function ns(){return qr===null?qr=function(){return 268435456+Math.round(2147483648*Math.random())}():qr++,"0x"+qr.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class o_{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
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
 */const Ce="WebChannelConnection";class a_ extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+t.host,this.Do=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get vo(){return!1}Fo(t,r,i,s,a){const l=ns(),c=this.Mo(t,r.toUriEncodedString());G("RestConnection",`Sending RPC '${t}' ${l}:`,c,i);const d={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(d,s,a),this.Oo(t,c,d,i).then(f=>(G("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw hn("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",c,"request:",i),f})}No(t,r,i,s,a,l){return this.Fo(t,r,i,s,a)}xo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}Mo(t,r){const i=s_[t];return`${this.bo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,t,r,i){const s=ns();return new Promise((a,l)=>{const c=new Jl;c.setWithCredentials(!0),c.listenOnce(ec.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case $r.NO_ERROR:const f=c.getResponseJson();G(Ce,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case $r.TIMEOUT:G(Ce,`RPC '${e}' ${s} timed out`),l(new q(D.DEADLINE_EXCEEDED,"Request time out"));break;case $r.HTTP_ERROR:const m=c.getStatus();if(G(Ce,`RPC '${e}' ${s} failed with status:`,m,"response text:",c.getResponseText()),m>0){let T=c.getResponseJson();Array.isArray(T)&&(T=T[0]);const I=T==null?void 0:T.error;if(I&&I.status&&I.message){const A=function(C){const V=C.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(V)>=0?V:D.UNKNOWN}(I.status);l(new q(A,I.message))}else l(new q(D.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new q(D.UNAVAILABLE,"Connection failed."));break;default:W()}}finally{G(Ce,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);G(Ce,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",d,r,15)})}Lo(e,t,r){const i=ns(),s=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=rc(),l=nc(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(c.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(c.xmlHttpFactory=new Zl({})),this.xo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=s.join("");G(Ce,`Creating RPC '${e}' stream ${i}: ${f}`,c);const m=a.createWebChannel(f,c);let T=!1,I=!1;const A=new o_({Po:C=>{I?G(Ce,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(T||(G(Ce,`Opening RPC '${e}' stream ${i} transport.`),m.open(),T=!0),G(Ce,`RPC '${e}' stream ${i} sending:`,C),m.send(C))},Io:()=>m.close()}),R=(C,V,M)=>{C.listen(V,k=>{try{M(k)}catch(N){setTimeout(()=>{throw N},0)}})};return R(m,$n.EventType.OPEN,()=>{I||(G(Ce,`RPC '${e}' stream ${i} transport opened.`),A.po())}),R(m,$n.EventType.CLOSE,()=>{I||(I=!0,G(Ce,`RPC '${e}' stream ${i} transport closed`),A.wo())}),R(m,$n.EventType.ERROR,C=>{I||(I=!0,hn(Ce,`RPC '${e}' stream ${i} transport errored:`,C),A.wo(new q(D.UNAVAILABLE,"The operation could not be completed")))}),R(m,$n.EventType.MESSAGE,C=>{var V;if(!I){const M=C.data[0];re(!!M);const k=M,N=k.error||((V=k[0])===null||V===void 0?void 0:V.error);if(N){G(Ce,`RPC '${e}' stream ${i} received error:`,N);const B=N.status;let $=function(g){const v=fe[g];if(v!==void 0)return Cc(v)}(B),b=N.message;$===void 0&&($=D.INTERNAL,b="Unknown error status: "+B+" with message "+N.message),I=!0,A.wo(new q($,b)),m.close()}else G(Ce,`RPC '${e}' stream ${i} received:`,M),A.So(M)}}),R(l,tc.STAT_EVENT,C=>{C.stat===ms.PROXY?G(Ce,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===ms.NOPROXY&&G(Ce,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.yo()},0),A}}function rs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(n){return new _g(n,!0)}/**
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
 */class zc{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ai=e,this.timerId=t,this.Bo=r,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const t=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,t-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
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
 */class Gc{constructor(e,t,r,i,s,a,l,c){this.ai=e,this.jo=r,this.Ho=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new zc(e,t)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,t){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():t&&t.code===D.RESOURCE_EXHAUSTED?(ft(t.toString()),ft("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):t&&t.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(t)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),t=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Jo===t&&this.h_(r,i)},r=>{e(()=>{const i=new q(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(i)})})}h_(e,t){const r=this.l_(this.Jo);this.stream=this.I_(e,t),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{r(()=>this.P_(i))}),this.stream.onMessage(i=>{r(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return t=>{this.ai.enqueueAndForget(()=>this.Jo===e?t():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class l_ extends Gc{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}I_(e,t){return this.connection.Lo("Listen",e,t)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const t=Tg(this.serializer,e),r=function(s){if(!("targetChange"in s))return K.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?K.min():a.readTime?et(a.readTime):K.min()}(e);return this.listener.E_(t,r)}d_(e){const t={};t.database=Ss(this.serializer),t.addTarget=function(s,a){let l;const c=a.target;if(l=vs(c)?{documents:Ig(s,c)}:{query:Sg(s,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=kc(s,a.resumeToken);const d=ws(s,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(K.min())>0){l.readTime=ai(s,a.snapshotVersion.toTimestamp());const d=ws(s,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=bg(this.serializer,e);r&&(t.labels=r),this.__(t)}A_(e){const t={};t.database=Ss(this.serializer),t.removeTarget=e,this.__(t)}}class c_ extends Gc{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,t){return this.connection.Lo("Write",e,t)}T_(e){return re(!!e.streamToken),this.lastStreamToken=e.streamToken,re(!e.writeResults||e.writeResults.length===0),this.listener.m_()}onNext(e){re(!!e.streamToken),this.lastStreamToken=e.streamToken,this.e_.reset();const t=Eg(e.writeResults,e.commitTime),r=et(e.commitTime);return this.listener.f_(r,t)}g_(){const e={};e.database=Ss(this.serializer),this.__(e)}V_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>wg(this.serializer,r))};this.__(t)}}/**
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
 */class u_ extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new q(D.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,t,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Fo(e,Es(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(D.UNKNOWN,s.toString())})}No(e,t,r,i,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.No(e,Es(t,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new q(D.UNKNOWN,a.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class h_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(ft(t),this.b_=!1):G("OnlineStateTracker",t)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
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
 */class d_{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(a=>{r.enqueueAndForget(async()=>{Wt(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(c){const d=Q(c);d.N_.add(4),await pr(d),d.k_.set("Unknown"),d.N_.delete(4),await vi(d)}(this))})}),this.k_=new h_(r,i)}}async function vi(n){if(Wt(n))for(const e of n.L_)await e(!0)}async function pr(n){for(const e of n.L_)await e(!1)}function jc(n,e){const t=Q(n);t.O_.has(e.targetId)||(t.O_.set(e.targetId,e),eo(t)?Zs(t):En(t).n_()&&Js(t,e))}function Xs(n,e){const t=Q(n),r=En(t);t.O_.delete(e),r.n_()&&qc(t,e),t.O_.size===0&&(r.n_()?r.s_():Wt(t)&&t.k_.set("Unknown"))}function Js(n,e){if(n.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}En(n).d_(e)}function qc(n,e){n.q_.xe(e),En(n).A_(e)}function Zs(n){n.q_=new fg({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.O_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),En(n).start(),n.k_.D_()}function eo(n){return Wt(n)&&!En(n).t_()&&n.O_.size>0}function Wt(n){return Q(n).N_.size===0}function Hc(n){n.q_=void 0}async function f_(n){n.k_.set("Online")}async function p_(n){n.O_.forEach((e,t)=>{Js(n,e)})}async function m_(n,e){Hc(n),eo(n)?(n.k_.F_(e),Zs(n)):n.k_.set("Unknown")}async function g_(n,e,t){if(n.k_.set("Online"),e instanceof Vc&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.O_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.O_.delete(l),i.q_.removeTarget(l))}(n,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await li(n,r)}else if(e instanceof Qr?n.q_.Ke(e):e instanceof xc?n.q_.He(e):n.q_.We(e),!t.isEqual(K.min()))try{const r=await Bc(n.localStore);t.compareTo(r)>=0&&await function(s,a){const l=s.q_.rt(a);return l.targetChanges.forEach((c,d)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.O_.get(d);f&&s.O_.set(d,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,d)=>{const f=s.O_.get(c);if(!f)return;s.O_.set(c,f.withResumeToken(be.EMPTY_BYTE_STRING,f.snapshotVersion)),qc(s,c);const m=new It(f.target,c,d,f.sequenceNumber);Js(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await li(n,r)}}async function li(n,e,t){if(!hr(e))throw e;n.N_.add(1),await pr(n),n.k_.set("Offline"),t||(t=()=>Bc(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await t(),n.N_.delete(1),await vi(n)})}function $c(n,e){return e().catch(t=>li(n,t,e))}async function Ti(n){const e=Q(n),t=xt(e);let r=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;__(e);)try{const i=await e_(e.localStore,r);if(i===null){e.x_.length===0&&t.s_();break}r=i.batchId,y_(e,i)}catch(i){await li(e,i)}Wc(e)&&Kc(e)}function __(n){return Wt(n)&&n.x_.length<10}function y_(n,e){n.x_.push(e);const t=xt(n);t.n_()&&t.R_&&t.V_(e.mutations)}function Wc(n){return Wt(n)&&!xt(n).t_()&&n.x_.length>0}function Kc(n){xt(n).start()}async function v_(n){xt(n).g_()}async function T_(n){const e=xt(n);for(const t of n.x_)e.V_(t.mutations)}async function w_(n,e,t){const r=n.x_.shift(),i=Hs.from(r,e,t);await $c(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ti(n)}async function E_(n,e){e&&xt(n).R_&&await async function(r,i){if(function(a){return ug(a)&&a!==D.ABORTED}(i.code)){const s=r.x_.shift();xt(r).i_(),await $c(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ti(r)}}(n,e),Wc(n)&&Kc(n)}async function Ya(n,e){const t=Q(n);t.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=Wt(t);t.N_.add(3),await pr(t),r&&t.k_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.N_.delete(3),await vi(t)}async function I_(n,e){const t=Q(n);e?(t.N_.delete(2),await vi(t)):e||(t.N_.add(2),await pr(t),t.k_.set("Unknown"))}function En(n){return n.Q_||(n.Q_=function(t,r,i){const s=Q(t);return s.y_(),new l_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{To:f_.bind(null,n),Ao:p_.bind(null,n),Vo:m_.bind(null,n),E_:g_.bind(null,n)}),n.L_.push(async e=>{e?(n.Q_.i_(),eo(n)?Zs(n):n.k_.set("Unknown")):(await n.Q_.stop(),Hc(n))})),n.Q_}function xt(n){return n.K_||(n.K_=function(t,r,i){const s=Q(t);return s.y_(),new c_(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{To:()=>Promise.resolve(),Ao:v_.bind(null,n),Vo:E_.bind(null,n),m_:T_.bind(null,n),f_:w_.bind(null,n)}),n.L_.push(async e=>{e?(n.K_.i_(),await Ti(n)):(await n.K_.stop(),n.x_.length>0&&(G("RemoteStore",`Stopping write stream with ${n.x_.length} pending writes`),n.x_=[]))})),n.K_}/**
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
 */class to{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new ut,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new to(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function no(n,e){if(ft("AsyncQueue",`${e}: ${n}`),hr(n))return new q(D.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class cn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||H.comparator(t.key,r.key):(t,r)=>H.comparator(t.key,r.key),this.keyedMap=Wn(),this.sortedSet=new le(this.comparator)}static emptySet(e){return new cn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof cn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new cn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Xa{constructor(){this.U_=new le(H.comparator)}track(e){const t=e.doc.key,r=this.U_.get(t);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(t,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(t):e.type===1&&r.type===2?this.U_=this.U_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):W():this.U_=this.U_.insert(t,e)}W_(){const e=[];return this.U_.inorderTraversal((t,r)=>{e.push(r)}),e}}class gn{constructor(e,t,r,i,s,a,l,c,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new gn(e,t,cn.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fi(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class S_{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class A_{constructor(){this.queries=Ja(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(t,r){const i=Q(t),s=i.queries;i.queries=Ja(),s.forEach((a,l)=>{for(const c of l.z_)c.onError(r)})})(this,new q(D.ABORTED,"Firestore shutting down"))}}function Ja(){return new wn(n=>mc(n),fi)}async function Qc(n,e){const t=Q(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.j_()&&e.H_()&&(r=2):(s=new S_,r=e.H_()?0:1);try{switch(r){case 0:s.G_=await t.onListen(i,!0);break;case 1:s.G_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=no(a,`Initialization of query '${on(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.z_.push(e),e.Y_(t.onlineState),s.G_&&e.Z_(s.G_)&&ro(t)}async function Yc(n,e){const t=Q(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.z_.indexOf(e);a>=0&&(s.z_.splice(a,1),s.z_.length===0?i=e.H_()?0:1:!s.j_()&&e.H_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function b_(n,e){const t=Q(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.z_)l.Z_(i)&&(r=!0);a.G_=i}}r&&ro(t)}function P_(n,e,t){const r=Q(n),i=r.queries.get(e);if(i)for(const s of i.z_)s.onError(t);r.queries.delete(e)}function ro(n){n.J_.forEach(e=>{e.next()})}var bs,Za;(Za=bs||(bs={})).X_="default",Za.Cache="cache";class Xc{constructor(e,t,r){this.query=e,this.ea=t,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new gn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ta?this.ra(e)&&(this.ea.next(e),t=!0):this.ia(e,this.onlineState)&&(this.sa(e),t=!0),this.na=e,t}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let t=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),t=!0),t}ia(e,t){if(!e.fromCache||!this.H_())return!0;const r=t!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const t=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}sa(e){e=gn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==bs.Cache}}/**
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
 */class Jc{constructor(e){this.key=e}}class Zc{constructor(e){this.key=e}}class R_{constructor(e,t){this.query=e,this.Ia=t,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=X(),this.mutatedKeys=X(),this.da=gc(e),this.Aa=new cn(this.da)}get Ra(){return this.Ia}Va(e,t){const r=t?t.ma:new Xa,i=t?t.Aa:this.Aa;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const T=i.get(f),I=pi(this.query,m)?m:null,A=!!T&&this.mutatedKeys.has(T.key),R=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let C=!1;T&&I?T.data.isEqual(I.data)?A!==R&&(r.track({type:3,doc:I}),C=!0):this.fa(T,I)||(r.track({type:2,doc:I}),C=!0,(c&&this.da(I,c)>0||d&&this.da(I,d)<0)&&(l=!0)):!T&&I?(r.track({type:0,doc:I}),C=!0):T&&!I&&(r.track({type:1,doc:T}),C=!0,(c||d)&&(l=!0)),C&&(I?(a=a.add(I),s=R?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Aa:a,ma:r,ts:l,mutatedKeys:s}}fa(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const a=e.ma.W_();a.sort((f,m)=>function(I,A){const R=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return W()}};return R(I)-R(A)}(f.type,m.type)||this.da(f.doc,m.doc)),this.ga(r),i=i!=null&&i;const l=t&&!i?this.pa():[],c=this.Ea.size===0&&this.current&&!i?1:0,d=c!==this.Ta;return this.Ta=c,a.length!==0||d?{snapshot:new gn(this.query,e.Aa,s,a,e.mutatedKeys,c===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:l}:{ya:l}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new Xa,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(t=>this.Ia=this.Ia.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ia=this.Ia.delete(t)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=X(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const t=[];return e.forEach(r=>{this.Ea.has(r)||t.push(new Zc(r))}),this.Ea.forEach(r=>{e.has(r)||t.push(new Jc(r))}),t}Sa(e){this.Ia=e.Is,this.Ea=X();const t=this.Va(e.documents);return this.applyChanges(t,!0)}ba(){return gn.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class C_{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class x_{constructor(e){this.key=e,this.Da=!1}}class V_{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.va=new wn(l=>mc(l),fi),this.Fa=new Map,this.Ma=new Set,this.xa=new le(H.comparator),this.Oa=new Map,this.Na=new Ks,this.La={},this.Ba=new Map,this.ka=mn.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function k_(n,e,t=!0){const r=su(n);let i;const s=r.va.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ba()):i=await eu(r,e,t,!0),i}async function D_(n,e){const t=su(n);await eu(t,e,!0,!1)}async function eu(n,e,t,r){const i=await t_(n.localStore,Ze(e)),s=i.targetId,a=t?n.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await O_(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&jc(n.remoteStore,i),l}async function O_(n,e,t,r,i){n.Qa=(m,T,I)=>async function(R,C,V,M){let k=C.view.Va(V);k.ts&&(k=await Wa(R.localStore,C.query,!1).then(({documents:b})=>C.view.Va(b,k)));const N=M&&M.targetChanges.get(C.targetId),B=M&&M.targetMismatches.get(C.targetId)!=null,$=C.view.applyChanges(k,R.isPrimaryClient,N,B);return tl(R,C.targetId,$.ya),$.snapshot}(n,m,T,I);const s=await Wa(n.localStore,e,!0),a=new R_(e,s.Is),l=a.Va(s.documents),c=fr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,c);tl(n,t,d.ya);const f=new C_(e,t,a);return n.va.set(e,f),n.Fa.has(t)?n.Fa.get(t).push(e):n.Fa.set(t,[e]),d.snapshot}async function M_(n,e,t){const r=Q(n),i=r.va.get(e),s=r.Fa.get(i.targetId);if(s.length>1)return r.Fa.set(i.targetId,s.filter(a=>!fi(a,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await As(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Xs(r.remoteStore,i.targetId),Ps(r,i.targetId)}).catch(ur)):(Ps(r,i.targetId),await As(r.localStore,i.targetId,!0))}async function N_(n,e){const t=Q(n),r=t.va.get(e),i=t.Fa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Xs(t.remoteStore,r.targetId))}async function L_(n,e,t){const r=q_(n);try{const i=await function(a,l){const c=Q(a),d=_e.now(),f=l.reduce((I,A)=>I.add(A.key),X());let m,T;return c.persistence.runTransaction("Locally write mutations","readwrite",I=>{let A=pt(),R=X();return c.us.getEntries(I,f).next(C=>{A=C,A.forEach((V,M)=>{M.isValidDocument()||(R=R.add(V))})}).next(()=>c.localDocuments.getOverlayedDocuments(I,A)).next(C=>{m=C;const V=[];for(const M of l){const k=sg(M,m.get(M.key).overlayedDocument);k!=null&&V.push(new $t(M.key,k,lc(k.value.mapValue),ht.exists(!0)))}return c.mutationQueue.addMutationBatch(I,d,V,l)}).next(C=>{T=C;const V=C.applyToLocalDocumentSet(m,R);return c.documentOverlayCache.saveOverlays(I,C.batchId,V)})}).then(()=>({batchId:T.batchId,changes:yc(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,c){let d=a.La[a.currentUser.toKey()];d||(d=new le(te)),d=d.insert(l,c),a.La[a.currentUser.toKey()]=d}(r,i.batchId,t),await mr(r,i.changes),await Ti(r.remoteStore)}catch(i){const s=no(i,"Failed to persist write");t.reject(s)}}async function tu(n,e){const t=Q(n);try{const r=await Jg(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Oa.get(s);a&&(re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Da=!0:i.modifiedDocuments.size>0?re(a.Da):i.removedDocuments.size>0&&(re(a.Da),a.Da=!1))}),await mr(t,r,e)}catch(r){await ur(r)}}function el(n,e,t){const r=Q(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.va.forEach((s,a)=>{const l=a.view.Y_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const c=Q(a);c.onlineState=l;let d=!1;c.queries.forEach((f,m)=>{for(const T of m.z_)T.Y_(l)&&(d=!0)}),d&&ro(c)}(r.eventManager,e),i.length&&r.Ca.E_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function F_(n,e,t){const r=Q(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Oa.get(e),s=i&&i.key;if(s){let a=new le(H.comparator);a=a.insert(s,Ve.newNoDocument(s,K.min()));const l=X().add(s),c=new _i(K.min(),new Map,new le(te),a,l);await tu(r,c),r.xa=r.xa.remove(s),r.Oa.delete(e),io(r)}else await As(r.localStore,e,!1).then(()=>Ps(r,e,t)).catch(ur)}async function U_(n,e){const t=Q(n),r=e.batch.batchId;try{const i=await Xg(t.localStore,e);ru(t,r,null),nu(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await mr(t,i)}catch(i){await ur(i)}}async function B_(n,e,t){const r=Q(n);try{const i=await function(a,l){const c=Q(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return c.mutationQueue.lookupMutationBatch(d,l).next(m=>(re(m!==null),f=m.keys(),c.mutationQueue.removeMutationBatch(d,m))).next(()=>c.mutationQueue.performConsistencyCheck(d)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>c.localDocuments.getDocuments(d,f))})}(r.localStore,e);ru(r,e,t),nu(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await mr(r,i)}catch(i){await ur(i)}}function nu(n,e){(n.Ba.get(e)||[]).forEach(t=>{t.resolve()}),n.Ba.delete(e)}function ru(n,e,t){const r=Q(n);let i=r.La[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.La[r.currentUser.toKey()]=i}}function Ps(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Fa.get(e))n.va.delete(r),t&&n.Ca.Ka(r,t);n.Fa.delete(e),n.isPrimaryClient&&n.Na.mr(e).forEach(r=>{n.Na.containsKey(r)||iu(n,r)})}function iu(n,e){n.Ma.delete(e.path.canonicalString());const t=n.xa.get(e);t!==null&&(Xs(n.remoteStore,t),n.xa=n.xa.remove(e),n.Oa.delete(t),io(n))}function tl(n,e,t){for(const r of t)r instanceof Jc?(n.Na.addReference(r.key,e),z_(n,r)):r instanceof Zc?(G("SyncEngine","Document no longer in limbo: "+r.key),n.Na.removeReference(r.key,e),n.Na.containsKey(r.key)||iu(n,r.key)):W()}function z_(n,e){const t=e.key,r=t.path.canonicalString();n.xa.get(t)||n.Ma.has(r)||(G("SyncEngine","New document in limbo: "+t),n.Ma.add(r),io(n))}function io(n){for(;n.Ma.size>0&&n.xa.size<n.maxConcurrentLimboResolutions;){const e=n.Ma.values().next().value;n.Ma.delete(e);const t=new H(ae.fromString(e)),r=n.ka.next();n.Oa.set(r,new x_(t)),n.xa=n.xa.insert(t,r),jc(n.remoteStore,new It(Ze(qs(t.path)),r,"TargetPurposeLimboResolution",Fs.oe))}}async function mr(n,e,t){const r=Q(n),i=[],s=[],a=[];r.va.isEmpty()||(r.va.forEach((l,c)=>{a.push(r.Qa(c,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(d){i.push(d);const m=Ys.Ui(c.targetId,d);s.push(m)}}))}),await Promise.all(a),r.Ca.E_(i),await async function(c,d){const f=Q(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>O.forEach(d,T=>O.forEach(T.Ki,I=>f.persistence.referenceDelegate.addReference(m,T.targetId,I)).next(()=>O.forEach(T.$i,I=>f.persistence.referenceDelegate.removeReference(m,T.targetId,I)))))}catch(m){if(!hr(m))throw m;G("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const T=m.targetId;if(!m.fromCache){const I=f.ss.get(T),A=I.snapshotVersion,R=I.withLastLimboFreeSnapshotVersion(A);f.ss=f.ss.insert(T,R)}}}(r.localStore,s))}async function G_(n,e){const t=Q(n);if(!t.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await Uc(t.localStore,e);t.currentUser=e,function(s,a){s.Ba.forEach(l=>{l.forEach(c=>{c.reject(new q(D.CANCELLED,a))})}),s.Ba.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await mr(t,r.ls)}}function j_(n,e){const t=Q(n),r=t.Oa.get(e);if(r&&r.Da)return X().add(r.key);{let i=X();const s=t.Fa.get(e);if(!s)return i;for(const a of s){const l=t.va.get(a);i=i.unionWith(l.view.Ra)}return i}}function su(n){const e=Q(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=tu.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=j_.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=F_.bind(null,e),e.Ca.E_=b_.bind(null,e.eventManager),e.Ca.Ka=P_.bind(null,e.eventManager),e}function q_(n){const e=Q(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=U_.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=B_.bind(null,e),e}class nl{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=yi(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Yg(this.persistence,new Kg,e.initialUser,this.serializer)}createPersistence(e){return new Hg(Qs.Yr,this.serializer)}createSharedClientState(e){return new r_}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class H_{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>el(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=G_.bind(null,this.syncEngine),await I_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new A_}()}createDatastore(e){const t=yi(e.databaseInfo.databaseId),r=function(s){return new a_(s)}(e.databaseInfo);return function(s,a,l,c){return new u_(s,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,l){return new d_(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>el(this.syncEngine,t,0),function(){return Qa.D()?new Qa:new i_}())}createSyncEngine(e,t){return function(i,s,a,l,c,d,f){const m=new V_(i,s,a,l,c,d);return f&&(m.qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=Q(i);G("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await pr(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
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
 */class ou{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):ft("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class $_{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=xe.UNAUTHENTICATED,this.clientId=sc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{G("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(G("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ut;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=no(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function is(n,e){n.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Uc(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function rl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await K_(n);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ya(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Ya(e.remoteStore,i)),n._onlineComponents=e}function W_(n){return n.name==="FirebaseError"?n.code===D.FAILED_PRECONDITION||n.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function K_(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await is(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!W_(t))throw t;hn("Error using user provided cache. Falling back to memory cache: "+t),await is(n,new nl)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await is(n,new nl);return n._offlineComponents}async function au(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await rl(n,n._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await rl(n,new H_))),n._onlineComponents}function Q_(n){return au(n).then(e=>e.syncEngine)}async function lu(n){const e=await au(n),t=e.eventManager;return t.onListen=k_.bind(null,e.syncEngine),t.onUnlisten=M_.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=D_.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=N_.bind(null,e.syncEngine),t}function Y_(n,e,t={}){const r=new ut;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,c,d){const f=new ou({next:T=>{a.enqueueAndForget(()=>Yc(s,m));const I=T.docs.has(l);!I&&T.fromCache?d.reject(new q(D.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&T.fromCache&&c&&c.source==="server"?d.reject(new q(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(T)},error:T=>d.reject(T)}),m=new Xc(qs(l.path),f,{includeMetadataChanges:!0,oa:!0});return Qc(s,m)}(await lu(n),n.asyncQueue,e,t,r)),r.promise}function X_(n,e,t={}){const r=new ut;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,c,d){const f=new ou({next:T=>{a.enqueueAndForget(()=>Yc(s,m)),T.fromCache&&c.source==="server"?d.reject(new q(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(T)},error:T=>d.reject(T)}),m=new Xc(l,f,{includeMetadataChanges:!0,oa:!0});return Qc(s,m)}(await lu(n),n.asyncQueue,e,t,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=new Map;/**
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
 */function uu(n,e,t){if(!t)throw new q(D.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function J_(n,e,t,r){if(e===!0&&r===!0)throw new q(D.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function sl(n){if(!H.isDocumentKey(n))throw new q(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ol(n){if(H.isDocumentKey(n))throw new q(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function so(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":W()}function qt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new q(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=so(n);throw new q(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}J_("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=cu((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(D.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wi{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new al({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new al(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new pm;switch(r.type){case"firstParty":return new ym(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=il.get(t);r&&(G("ComponentProvider","Removing Datastore"),il.delete(t),r.terminate())}(this),Promise.resolve()}}function Z_(n,e,t,r={}){var i;const s=(n=qt(n,wi))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&hn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=xe.MOCK_USER;else{l=fl(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new q(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new xe(d)}n._authCredentials=new mm(new ic(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ei(this.firestore,e,this._query)}}class ze{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}}class Pt extends Ei{constructor(e,t,r){super(e,t,qs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new H(e))}withConverter(e){return new Pt(this.firestore,e,this._path)}}function Ny(n,e,...t){if(n=dt(n),uu("collection","path",e),n instanceof wi){const r=ae.fromString(e,...t);return ol(r),new Pt(n,null,r)}{if(!(n instanceof ze||n instanceof Pt))throw new q(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ae.fromString(e,...t));return ol(r),new Pt(n.firestore,null,r)}}function Ly(n,e,...t){if(n=dt(n),arguments.length===1&&(e=sc.newId()),uu("doc","path",e),n instanceof wi){const r=ae.fromString(e,...t);return sl(r),new ze(n,null,new H(r))}{if(!(n instanceof ze||n instanceof Pt))throw new q(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ae.fromString(e,...t));return sl(r),new ze(n.firestore,n instanceof Pt?n.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new zc(this,"async_queue_retry"),this.Tu=()=>{const t=rs();t&&G("AsyncQueue","Visibility state changed to "+t.visibilityState),this.e_.zo()};const e=rs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const t=rs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const t=new ut;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!hr(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const t=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw ft("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=t,t}enqueueAfterDelay(e,t,r){this.Eu(),this.Iu.indexOf(e)>-1&&(t=0);const i=to.createAndSchedule(this,e,t,r,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&W()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const t of this.cu)if(t.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.cu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const t=this.cu.indexOf(e);this.cu.splice(t,1)}}class Ii extends wi{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new ey}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||hu(this),this._firestoreClient.terminate()}}function Fy(n,e){const t=typeof n=="object"?n:wl(),r=typeof n=="string"?n:"(default)",i=yl(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=hl("firestore");s&&Z_(i,...s)}return i}function oo(n){return n._firestoreClient||hu(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function hu(n){var e,t,r;const i=n._freezeSettings(),s=function(l,c,d,f){return new Vm(l,c,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,cu(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new $_(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _n(be.fromBase64String(e))}catch(t){throw new q(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new _n(be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new q(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(e){this._methodName=e}}/**
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
 */class lo{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new q(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new q(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
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
 */const ty=/^__.*__$/;class ny{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new $t(e,this.data,this.fieldMask,t,this.fieldTransforms):new dr(e,this.data,t,this.fieldTransforms)}}function fu(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw W()}}class co{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new co(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.wu({path:r,bu:!1});return i.Du(e),i}Cu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.wu({path:r,bu:!1});return i.pu(),i}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return ci(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(e.length===0)throw this.Fu("Document fields must not be empty");if(fu(this.yu)&&ty.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class ry{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||yi(e)}Ou(e,t,r,i=!1){return new co({yu:e,methodName:t,xu:r,path:Se.emptyPath(),bu:!1,Mu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function iy(n){const e=n._freezeSettings(),t=yi(n._databaseId);return new ry(n._databaseId,!!e.ignoreUndefinedProperties,t)}function sy(n,e,t,r,i,s={}){const a=n.Ou(s.merge||s.mergeFields?2:0,e,t,i);_u("Data must be an object, but it was:",a,r);const l=mu(r,a);let c,d;if(s.merge)c=new Ke(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const T=oy(e,m,t);if(!a.contains(T))throw new q(D.INVALID_ARGUMENT,`Field '${T}' is specified in your field mask but missing from your input data.`);ly(f,T)||f.push(T)}c=new Ke(f),d=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,d=a.fieldTransforms;return new ny(new He(l),c,d)}function pu(n,e){if(gu(n=dt(n)))return _u("Unsupported field value:",e,n),mu(n,e);if(n instanceof du)return function(r,i){if(!fu(i.yu))throw i.Fu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Fu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.bu&&e.yu!==4)throw e.Fu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let c=pu(l,i.vu(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Zm(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=_e.fromDate(r);return{timestampValue:ai(i.serializer,s)}}if(r instanceof _e){const s=new _e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ai(i.serializer,s)}}if(r instanceof lo)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof _n)return{bytesValue:kc(i.serializer,r._byteString)};if(r instanceof ze){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Fu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ws(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Fu(`Unsupported field value: ${so(r)}`)}(n,e)}function mu(n,e){const t={};return oc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Tn(n,(r,i)=>{const s=pu(i,e.Su(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function gu(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof _e||n instanceof lo||n instanceof _n||n instanceof ze||n instanceof du)}function _u(n,e,t){if(!gu(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=so(t);throw r==="an object"?e.Fu(n+" a custom object"):e.Fu(n+" "+r)}}function oy(n,e,t){if((e=dt(e))instanceof ao)return e._internalPath;if(typeof e=="string")return yu(n,e);throw ci("Field path arguments must be of type string or ",n,!1,void 0,t)}const ay=new RegExp("[~\\*/\\[\\]]");function yu(n,e,t){if(e.search(ay)>=0)throw ci(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ao(...e.split("."))._internalPath}catch{throw ci(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ci(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new q(D.INVALID_ARGUMENT,l+n+c)}function ly(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Tu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class cy extends vu{data(){return super.data()}}function Tu(n,e){return typeof e=="string"?yu(n,e):e instanceof ao?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new q(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class hy{convertValue(e,t="none"){switch(jt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Gt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw W()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Tn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new lo(pe(e.latitude),pe(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Bs(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(sr(e));default:return null}}convertTimestamp(e){const t=Ct(e);return new _e(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ae.fromString(e);re(Fc(r));const i=new or(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(t)||ft(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dy(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wu extends vu{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Yr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Tu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Yr extends wu{data(e={}){return super.data(e)}}class fy{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Qn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Yr(this._firestore,this._userDataWriter,r.key,r,new Qn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new q(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const c=new Yr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Qn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new Yr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Qn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:py(l.type),doc:c,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function py(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return W()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uy(n){n=qt(n,ze);const e=qt(n.firestore,Ii);return Y_(oo(e),n._key).then(t=>gy(e,n,t))}class Eu extends hy{constructor(e){super(),this.firestore=e}convertBytes(e){return new _n(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,t)}}function By(n){n=qt(n,Ei);const e=qt(n.firestore,Ii),t=oo(e),r=new Eu(e);return uy(n._query),X_(t,n._query).then(i=>new fy(e,r,n,i))}function zy(n,e,t){n=qt(n,ze);const r=qt(n.firestore,Ii),i=dy(n.converter,e,t);return my(r,[sy(iy(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,ht.none())])}function my(n,e){return function(r,i){const s=new ut;return r.asyncQueue.enqueueAndForget(async()=>L_(await Q_(r),i,s)),s.promise}(oo(n),e)}function gy(n,e,t){const r=t.docs.get(e._key),i=new Eu(n);return new wu(n,i,e._key,r,new Qn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){vn=i})(vl),tr(new un("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Ii(new gm(r.getProvider("auth-internal")),new Tm(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new q(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new or(d.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),bt(Pa,"4.6.5",e),bt(Pa,"4.6.5","esm2017")})();async function _y(n){fm(oe(".news-swiper__cards"),oe(".news-swiper__prev-button"),oe(".news-swiper__next-button"),null,0,{1920:{slidesPerView:3,spaceBetween:35},1440:{slidesPerView:3,spaceBetween:35},1140:{slidesPerView:3,spaceBetween:20},767:{slidesPerView:2,spaceBetween:20},375:{slidesPerView:1.4,spaceBetween:5},320:{slidesPerView:1.1,spaceBetween:5}})}function Hn(n,e){e.forEach(i=>{const s=i.querySelector(".select__svg"),a=i.querySelector(".select__header");i.addEventListener("click",l=>{const c=l.target.closest(".select__header"),d=l.target.closest(".select__item"),f=i.querySelector(".select__body");c&&t(c,f,s),d&&(t(a,f,s),n.forEach(m=>{m.textContent=d.textContent}))}),document.addEventListener("click",l=>{const c=i.querySelector(".select__body");i.contains(l.target)||r(a,c,s)})});function t(i,s,a){i.classList.toggle("select__header-active"),s.classList.toggle("select__body-active"),a.classList.toggle("select__svg-active")}function r(i,s,a){i.classList.remove("select__header-active"),s.classList.remove("select__body-active"),a.classList.remove("select__svg-active")}}function yy(){Hn(oe(".header__select-language","all"),oe(".header__select","all")),Hn(oe(".product-filter__current-weight","all"),oe(".product-filter__select-weight","all")),Hn(oe(".product-filter__current-taste","all"),oe(".product-filter__select-taste","all")),Hn(oe(".registration__current-country","all"),oe(".registration__select-country","all")),Hn(oe(".registration__current-region","all"),oe(".registration__select-region","all"))}function Gy(n){document.cookie=`${encodeURIComponent("userInfo")}=${encodeURIComponent(JSON.stringify({uid:n.uid,email:n.email}))}; path=/; max-age=604800; secure; samesite=strict`}function vy(n){let e=document.cookie.match(new RegExp("(?:^|; )"+n.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return e?JSON.parse(decodeURIComponent(e[1])):void 0}let ss;async function Ty(){return ss||(ss=await wd()),ss}document.addEventListener("DOMContentLoaded",async function(){await Ty(),Bf(),yy(),Wu(),await _y(),vy("userInfo")});export{Ay as A,by as B,un as C,cm as D,pl as E,Ht as F,Fy as G,Ly as H,Uy as I,By as J,Ny as K,ml as L,zy as M,vl as S,tr as _,fm as a,ea as b,Hn as c,ky as d,Gy as e,wy as f,oe as g,Sy as h,Ey as i,Iy as j,Vy as k,dt as l,xy as m,yl as n,nh as o,wl as p,Z as q,bt as r,Ty as s,Rs as t,lt as u,os as v,Xu as w,Ry as x,Cy as y,Py as z};
