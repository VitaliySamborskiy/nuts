(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var Gc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ka={exports:{}};(function(n,e){(function(r,i){n.exports=i()})(Gc,function(){return function(t){var r={};function i(s){if(r[s])return r[s].exports;var a=r[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=t,i.c=r,i.d=function(s,a,l){i.o(s,a)||Object.defineProperty(s,a,{enumerable:!0,get:l})},i.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},i.t=function(s,a){if(a&1&&(s=i(s)),a&8||a&4&&typeof s=="object"&&s&&s.__esModule)return s;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:s}),a&2&&typeof s!="string")for(var u in s)i.d(l,u,(function(d){return s[d]}).bind(null,u));return l},i.n=function(s){var a=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(a,"a",a),a},i.o=function(s,a){return Object.prototype.hasOwnProperty.call(s,a)},i.p="",i(i.s=0)}([function(t,r,i){i.r(r);var s=function(T){return Array.isArray(T)?T:[T]},a=function(T){return T instanceof Node},l=function(T){return T instanceof NodeList},u=function(T,M){if(T&&M){T=l(T)?T:[T];for(var z=0;z<T.length&&M(T[z],z,T.length)!==!0;z++);}},d=function(T){return console.error("[scroll-lock] ".concat(T))},f=function(T){if(Array.isArray(T)){var M=T.join(", ");return M}},g=function(T){var M=[];return u(T,function(z){return M.push(z)}),M},w=function(T,M){var z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,j=arguments.length>3&&arguments[3]!==void 0?arguments[3]:document;if(z&&g(j.querySelectorAll(M)).indexOf(T)!==-1)return T;for(;(T=T.parentElement)&&g(j.querySelectorAll(M)).indexOf(T)===-1;);return T},S=function(T,M){var z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document,j=g(z.querySelectorAll(M)).indexOf(T)!==-1;return j},b=function(T){if(T){var M=getComputedStyle(T),z=M.overflow==="hidden";return z}},R=function(T){if(T){if(b(T))return!0;var M=T.scrollTop;return M<=0}},C=function(T){if(T){if(b(T))return!0;var M=T.scrollTop,z=T.scrollHeight,j=M+T.offsetHeight;return j>=z}},k=function(T){if(T){if(b(T))return!0;var M=T.scrollLeft;return M<=0}},L=function(T){if(T){if(b(T))return!0;var M=T.scrollLeft,z=T.scrollWidth,j=M+T.offsetWidth;return j>=z}},V=function(T){var M='textarea, [contenteditable="true"]';return S(T,M)},O=function(T){var M='input[type="range"]';return S(T,M)};i.d(r,"disablePageScroll",function(){return y}),i.d(r,"enablePageScroll",function(){return E}),i.d(r,"getScrollState",function(){return I}),i.d(r,"clearQueueScrollLocks",function(){return _}),i.d(r,"getTargetScrollBarWidth",function(){return Y}),i.d(r,"getCurrentTargetScrollBarWidth",function(){return ie}),i.d(r,"getPageScrollBarWidth",function(){return De}),i.d(r,"getCurrentPageScrollBarWidth",function(){return qe}),i.d(r,"addScrollableTarget",function(){return Le}),i.d(r,"removeScrollableTarget",function(){return $e}),i.d(r,"addScrollableSelector",function(){return at}),i.d(r,"removeScrollableSelector",function(){return Bt}),i.d(r,"addLockableTarget",function(){return Me}),i.d(r,"addLockableSelector",function(){return fe}),i.d(r,"setFillGapMethod",function(){return nr}),i.d(r,"addFillGapTarget",function(){return et}),i.d(r,"removeFillGapTarget",function(){return rr}),i.d(r,"addFillGapSelector",function(){return tt}),i.d(r,"removeFillGapSelector",function(){return ir}),i.d(r,"refillGaps",function(){return Ut});function U(B){for(var T=1;T<arguments.length;T++){var M=arguments[T]!=null?arguments[T]:{},z=Object.keys(M);typeof Object.getOwnPropertySymbols=="function"&&(z=z.concat(Object.getOwnPropertySymbols(M).filter(function(j){return Object.getOwnPropertyDescriptor(M,j).enumerable}))),z.forEach(function(j){$(B,j,M[j])})}return B}function $(B,T,M){return T in B?Object.defineProperty(B,T,{value:M,enumerable:!0,configurable:!0,writable:!0}):B[T]=M,B}var A=["padding","margin","width","max-width","none"],v=3,m={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:A[0],startTouchY:0,startTouchX:0},y=function(T){m.queue<=0&&(m.scroll=!1,lt(),_n()),Le(T),m.queue++},E=function(T){m.queue>0&&m.queue--,m.queue<=0&&(m.scroll=!0,zt(),ri()),$e(T)},I=function(){return m.scroll},_=function(){m.queue=0},Y=function(T){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a(T)){var z=T.style.overflowY;M?I()||(T.style.overflowY=T.getAttribute("data-scroll-lock-saved-overflow-y-property")):T.style.overflowY="scroll";var j=ie(T);return T.style.overflowY=z,j}else return 0},ie=function(T){if(a(T))if(T===document.body){var M=document.documentElement.clientWidth,z=window.innerWidth,j=z-M;return j}else{var Ge=T.style.borderLeftWidth,We=T.style.borderRightWidth;T.style.borderLeftWidth="0px",T.style.borderRightWidth="0px";var je=T.offsetWidth-T.clientWidth;return T.style.borderLeftWidth=Ge,T.style.borderRightWidth=We,je}else return 0},De=function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return Y(document.body,T)},qe=function(){return ie(document.body)},Le=function(T){if(T){var M=s(T);M.map(function(z){u(z,function(j){a(j)?j.setAttribute("data-scroll-lock-scrollable",""):d('"'.concat(j,'" is not a Element.'))})})}},$e=function(T){if(T){var M=s(T);M.map(function(z){u(z,function(j){a(j)?j.removeAttribute("data-scroll-lock-scrollable"):d('"'.concat(j,'" is not a Element.'))})})}},at=function(T){if(T){var M=s(T);M.map(function(z){m.scrollableSelectors.push(z)})}},Bt=function(T){if(T){var M=s(T);M.map(function(z){m.scrollableSelectors=m.scrollableSelectors.filter(function(j){return j!==z})})}},Me=function(T){if(T){var M=s(T);M.map(function(z){u(z,function(j){a(j)?j.setAttribute("data-scroll-lock-lockable",""):d('"'.concat(j,'" is not a Element.'))})}),I()||lt()}},fe=function(T){if(T){var M=s(T);M.map(function(z){m.lockableSelectors.push(z)}),I()||lt(),tt(T)}},nr=function(T){if(T)if(A.indexOf(T)!==-1)m.fillGapMethod=T,Ut();else{var M=A.join(", ");d('"'.concat(T,`" method is not available!
Available fill gap methods: `).concat(M,"."))}},et=function(T){if(T){var M=s(T);M.map(function(z){u(z,function(j){a(j)?(j.setAttribute("data-scroll-lock-fill-gap",""),m.scroll||vn(j)):d('"'.concat(j,'" is not a Element.'))})})}},rr=function(T){if(T){var M=s(T);M.map(function(z){u(z,function(j){a(j)?(j.removeAttribute("data-scroll-lock-fill-gap"),m.scroll||jt(j)):d('"'.concat(j,'" is not a Element.'))})})}},tt=function(T){if(T){var M=s(T);M.map(function(z){m.fillGapSelectors.indexOf(z)===-1&&(m.fillGapSelectors.push(z),m.scroll||sr(z))})}},ir=function(T){if(T){var M=s(T);M.map(function(z){m.fillGapSelectors=m.fillGapSelectors.filter(function(j){return j!==z}),m.scroll||Gt(z)})}},Ut=function(){m.scroll||_n()},lt=function(){var T=f(m.lockableSelectors);fn(T)},zt=function(){var T=f(m.lockableSelectors);pn(T)},fn=function(T){var M=document.querySelectorAll(T);u(M,function(z){gn(z)})},pn=function(T){var M=document.querySelectorAll(T);u(M,function(z){mn(z)})},gn=function(T){if(a(T)&&T.getAttribute("data-scroll-lock-locked")!=="true"){var M=window.getComputedStyle(T);T.setAttribute("data-scroll-lock-saved-overflow-y-property",M.overflowY),T.setAttribute("data-scroll-lock-saved-inline-overflow-property",T.style.overflow),T.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",T.style.overflowY),T.style.overflow="hidden",T.setAttribute("data-scroll-lock-locked","true")}},mn=function(T){a(T)&&T.getAttribute("data-scroll-lock-locked")==="true"&&(T.style.overflow=T.getAttribute("data-scroll-lock-saved-inline-overflow-property"),T.style.overflowY=T.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),T.removeAttribute("data-scroll-lock-saved-overflow-property"),T.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),T.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),T.removeAttribute("data-scroll-lock-locked"))},_n=function(){m.fillGapSelectors.map(function(T){sr(T)})},ri=function(){m.fillGapSelectors.map(function(T){Gt(T)})},sr=function(T){var M=document.querySelectorAll(T),z=m.lockableSelectors.indexOf(T)!==-1;u(M,function(j){vn(j,z)})},vn=function(T){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a(T)){var z;if(T.getAttribute("data-scroll-lock-lockable")===""||M)z=Y(T,!0);else{var j=w(T,f(m.lockableSelectors));z=Y(j,!0)}T.getAttribute("data-scroll-lock-filled-gap")==="true"&&jt(T);var Ge=window.getComputedStyle(T);if(T.setAttribute("data-scroll-lock-filled-gap","true"),T.setAttribute("data-scroll-lock-current-fill-gap-method",m.fillGapMethod),m.fillGapMethod==="margin"){var We=parseFloat(Ge.marginRight);T.style.marginRight="".concat(We+z,"px")}else if(m.fillGapMethod==="width")T.style.width="calc(100% - ".concat(z,"px)");else if(m.fillGapMethod==="max-width")T.style.maxWidth="calc(100% - ".concat(z,"px)");else if(m.fillGapMethod==="padding"){var je=parseFloat(Ge.paddingRight);T.style.paddingRight="".concat(je+z,"px")}}},Gt=function(T){var M=document.querySelectorAll(T);u(M,function(z){jt(z)})},jt=function(T){if(a(T)&&T.getAttribute("data-scroll-lock-filled-gap")==="true"){var M=T.getAttribute("data-scroll-lock-current-fill-gap-method");T.removeAttribute("data-scroll-lock-filled-gap"),T.removeAttribute("data-scroll-lock-current-fill-gap-method"),M==="margin"?T.style.marginRight="":M==="width"?T.style.width="":M==="max-width"?T.style.maxWidth="":M==="padding"&&(T.style.paddingRight="")}},ii=function(T){Ut()},yn=function(T){m.scroll||(m.startTouchY=T.touches[0].clientY,m.startTouchX=T.touches[0].clientX)},wn=function(T){if(!m.scroll){var M=m.startTouchY,z=m.startTouchX,j=T.touches[0].clientY,Ge=T.touches[0].clientX;if(T.touches.length<2){var We=f(m.scrollableSelectors),je={up:M<j,down:M>j,left:z<Ge,right:z>Ge},qt={up:M+v<j,down:M-v>j,left:z+v<Ge,right:z-v>Ge},si=function Ht(le){var ar=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(le){var nt=w(le,We,!1);if(O(le))return!1;if(ar||V(le)&&w(le,We)||S(le,We)){var ct=!1;k(le)&&L(le)?(je.up&&R(le)||je.down&&C(le))&&(ct=!0):R(le)&&C(le)?(je.left&&k(le)||je.right&&L(le))&&(ct=!0):(qt.up&&R(le)||qt.down&&C(le)||qt.left&&k(le)||qt.right&&L(le))&&(ct=!0),ct&&(nt?Ht(nt,!0):T.cancelable&&T.preventDefault())}else Ht(nt)}else T.cancelable&&T.preventDefault()};si(T.target)}}},or=function(T){m.scroll||(m.startTouchY=0,m.startTouchX=0)};typeof window<"u"&&window.addEventListener("resize",ii),typeof document<"u"&&(document.addEventListener("touchstart",yn),document.addEventListener("touchmove",wn,{passive:!1}),document.addEventListener("touchend",or));var ge={hide:function(T){d(`"hide" is deprecated! Use "disablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget`),y(T)},show:function(T){d(`"show" is deprecated! Use "enablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget`),E(T)},toggle:function(T){d('"toggle" is deprecated! Do not use it.'),I()?y():E(T)},getState:function(){return d(`"getState" is deprecated! Use "getScrollState" instead. 
 https://github.com/FL3NKEY/scroll-lock#getscrollstate`),I()},getWidth:function(){return d(`"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth`),De()},getCurrentWidth:function(){return d(`"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth`),qe()},setScrollableTargets:function(T){d(`"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget`),Le(T)},setFillGapSelectors:function(T){d(`"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector`),tt(T)},setFillGapTargets:function(T){d(`"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget`),et(T)},clearQueue:function(){d(`"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. 
 https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks`),_()}},we=U({disablePageScroll:y,enablePageScroll:E,getScrollState:I,clearQueueScrollLocks:_,getTargetScrollBarWidth:Y,getCurrentTargetScrollBarWidth:ie,getPageScrollBarWidth:De,getCurrentPageScrollBarWidth:qe,addScrollableSelector:at,removeScrollableSelector:Bt,addScrollableTarget:Le,removeScrollableTarget:$e,addLockableSelector:fe,addLockableTarget:Me,addFillGapSelector:tt,removeFillGapSelector:ir,addFillGapTarget:et,removeFillGapTarget:rr,setFillGapMethod:nr,refillGaps:Ut,_state:m},ge);r.default=we}]).default})})(ka);var So=ka.exports;function jc(){const n=document.querySelector(".burger"),e=document.querySelector(".burger__background"),t=document.querySelector(".burger__scroll");n.addEventListener("click",r=>{const i=r.target.closest(".burger__icon"),s=r.target.closest(".burger__close");i&&(e.classList.toggle("burger__background_active"),So.disablePageScroll(t)),s&&(e.classList.remove("burger__background_active"),So.enablePageScroll(t))})}var Io={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},qc=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Da={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,f=s>>2,g=(s&3)<<4|l>>4;let w=(l&15)<<2|d>>6,S=d&63;u||(S=64,a||(w=64)),r.push(t[f],t[g],t[w],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Va(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):qc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const g=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||d==null||g==null)throw new Hc;const w=s<<2|l>>4;if(r.push(w),d!==64){const S=l<<4&240|d>>2;if(r.push(S),g!==64){const b=d<<6&192|g;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Hc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $c=function(n){const e=Va(n);return Da.encodeByteArray(e,!0)},Mr=function(n){return $c(n).replace(/\./g,"")},Wc=function(n){try{return Da.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Kc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Qc=()=>Kc().__FIREBASE_DEFAULTS__,Yc=()=>{if(typeof process>"u"||typeof Io>"u")return;const n=Io.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Xc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Wc(n[1]);return e&&JSON.parse(e)},os=()=>{try{return Qc()||Yc()||Xc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Jc=n=>{var e,t;return(t=(e=os())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Oa=n=>{const e=Jc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},La=()=>{var n;return(n=os())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Ma(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Mr(JSON.stringify(t)),Mr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function tu(){var n;const e=(n=os())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function nu(){return!tu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function ru(){try{return typeof indexedDB=="object"}catch{return!1}}function iu(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su="FirebaseError";class Ft extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=su,Object.setPrototypeOf(this,Ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Na.prototype.create)}}class Na{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?ou(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Ft(i,l,r)}}function ou(n,e){return n.replace(au,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const au=/\{\$([^}]+)}/g;function Mi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(Ao(s)&&Ao(a)){if(!Mi(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Ao(n){return n!==null&&typeof n=="object"}/**
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
 */function Xn(n){return n&&n._delegate?n._delegate:n}class tn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Rt="[DEFAULT]";/**
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
 */class lu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Zc;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uu(e))try{this.getOrInitializeService({instanceIdentifier:Rt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Rt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Rt){return this.instances.has(e)}getOptions(e=Rt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:cu(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Rt){return this.component?this.component.multipleInstances?e:Rt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cu(n){return n===Rt?void 0:n}function uu(n){return n.instantiationMode==="EAGER"}/**
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
 */class hu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new lu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const du={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},fu=Z.INFO,pu={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},gu=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=pu[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fa{constructor(e){this.name=e,this._logLevel=fu,this._logHandler=gu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?du[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const mu=(n,e)=>e.some(t=>n instanceof t);let bo,Po;function _u(){return bo||(bo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vu(){return Po||(Po=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ba=new WeakMap,Ni=new WeakMap,Ua=new WeakMap,yi=new WeakMap,as=new WeakMap;function yu(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(mt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ba.set(t,n)}).catch(()=>{}),as.set(e,n),e}function wu(n){if(Ni.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Ni.set(n,e)}let Fi={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ni.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ua.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Tu(n){Fi=n(Fi)}function Eu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(wi(this),e,...t);return Ua.set(r,e.sort?e.sort():[e]),mt(r)}:vu().includes(n)?function(...e){return n.apply(wi(this),e),mt(Ba.get(this))}:function(...e){return mt(n.apply(wi(this),e))}}function Su(n){return typeof n=="function"?Eu(n):(n instanceof IDBTransaction&&wu(n),mu(n,_u())?new Proxy(n,Fi):n)}function mt(n){if(n instanceof IDBRequest)return yu(n);if(yi.has(n))return yi.get(n);const e=Su(n);return e!==n&&(yi.set(n,e),as.set(e,n)),e}const wi=n=>as.get(n);function Iu(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=mt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(mt(a.result),u.oldVersion,u.newVersion,mt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Au=["get","getKey","getAll","getAllKeys","count"],bu=["put","add","delete","clear"],Ti=new Map;function Ro(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ti.get(e))return Ti.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=bu.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Au.includes(t)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&u.done]))[0]};return Ti.set(e,s),s}Tu(n=>({...n,get:(e,t,r)=>Ro(e,t)||n.get(e,t,r),has:(e,t)=>!!Ro(e,t)||n.has(e,t)}));/**
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
 */class Pu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ru(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Ru(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bi="@firebase/app",Co="0.10.8";/**
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
 */const Dt=new Fa("@firebase/app"),Cu="@firebase/app-compat",xu="@firebase/analytics-compat",ku="@firebase/analytics",Vu="@firebase/app-check-compat",Du="@firebase/app-check",Ou="@firebase/auth",Lu="@firebase/auth-compat",Mu="@firebase/database",Nu="@firebase/database-compat",Fu="@firebase/functions",Bu="@firebase/functions-compat",Uu="@firebase/installations",zu="@firebase/installations-compat",Gu="@firebase/messaging",ju="@firebase/messaging-compat",qu="@firebase/performance",Hu="@firebase/performance-compat",$u="@firebase/remote-config",Wu="@firebase/remote-config-compat",Ku="@firebase/storage",Qu="@firebase/storage-compat",Yu="@firebase/firestore",Xu="@firebase/vertexai-preview",Ju="@firebase/firestore-compat",Zu="firebase",eh="10.12.5";/**
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
 */const Ui="[DEFAULT]",th={[Bi]:"fire-core",[Cu]:"fire-core-compat",[ku]:"fire-analytics",[xu]:"fire-analytics-compat",[Du]:"fire-app-check",[Vu]:"fire-app-check-compat",[Ou]:"fire-auth",[Lu]:"fire-auth-compat",[Mu]:"fire-rtdb",[Nu]:"fire-rtdb-compat",[Fu]:"fire-fn",[Bu]:"fire-fn-compat",[Uu]:"fire-iid",[zu]:"fire-iid-compat",[Gu]:"fire-fcm",[ju]:"fire-fcm-compat",[qu]:"fire-perf",[Hu]:"fire-perf-compat",[$u]:"fire-rc",[Wu]:"fire-rc-compat",[Ku]:"fire-gcs",[Qu]:"fire-gcs-compat",[Yu]:"fire-fst",[Ju]:"fire-fst-compat",[Xu]:"fire-vertex","fire-js":"fire-js",[Zu]:"fire-js-all"};/**
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
 */const Nr=new Map,nh=new Map,zi=new Map;function xo(n,e){try{n.container.addComponent(e)}catch(t){Dt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function qn(n){const e=n.name;if(zi.has(e))return Dt.debug(`There were multiple attempts to register component ${e}.`),!1;zi.set(e,n);for(const t of Nr.values())xo(t,n);for(const t of nh.values())xo(t,n);return!0}function za(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
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
 */const rh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_t=new Na("app","Firebase",rh);/**
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
 */class ih{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new tn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _t.create("app-deleted",{appName:this._name})}}/**
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
 */const Ga=eh;function ja(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ui,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw _t.create("bad-app-name",{appName:String(i)});if(t||(t=La()),!t)throw _t.create("no-options");const s=Nr.get(i);if(s){if(Mi(t,s.options)&&Mi(r,s.config))return s;throw _t.create("duplicate-app",{appName:i})}const a=new hu(i);for(const u of zi.values())a.addComponent(u);const l=new ih(t,r,a);return Nr.set(i,l),l}function qa(n=Ui){const e=Nr.get(n);if(!e&&n===Ui&&La())return ja();if(!e)throw _t.create("no-app",{appName:n});return e}function vt(n,e,t){var r;let i=(r=th[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dt.warn(l.join(" "));return}qn(new tn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const sh="firebase-heartbeat-database",oh=1,Hn="firebase-heartbeat-store";let Ei=null;function Ha(){return Ei||(Ei=Iu(sh,oh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Hn)}catch(t){console.warn(t)}}}}).catch(n=>{throw _t.create("idb-open",{originalErrorMessage:n.message})})),Ei}async function ah(n){try{const t=(await Ha()).transaction(Hn),r=await t.objectStore(Hn).get($a(n));return await t.done,r}catch(e){if(e instanceof Ft)Dt.warn(e.message);else{const t=_t.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dt.warn(t.message)}}}async function ko(n,e){try{const r=(await Ha()).transaction(Hn,"readwrite");await r.objectStore(Hn).put(e,$a(n)),await r.done}catch(t){if(t instanceof Ft)Dt.warn(t.message);else{const r=_t.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Dt.warn(r.message)}}}function $a(n){return`${n.name}!${n.options.appId}`}/**
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
 */const lh=1024,ch=30*24*60*60*1e3;class uh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dh(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Vo();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=ch}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Vo(),{heartbeatsToSend:r,unsentEntries:i}=hh(this._heartbeatsCache.heartbeats),s=Mr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Vo(){return new Date().toISOString().substring(0,10)}function hh(n,e=lh){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Do(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Do(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class dh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ru()?iu().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ah(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ko(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return ko(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Do(n){return Mr(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function fh(n){qn(new tn("platform-logger",e=>new Pu(e),"PRIVATE")),qn(new tn("heartbeat",e=>new uh(e),"PRIVATE")),vt(Bi,Co,n),vt(Bi,Co,"esm2017"),vt("fire-js","")}fh("");var ph="firebase",gh="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt(ph,gh,"app");function mh(){return ja({apiKey:"AIzaSyBTca0OO9iCUvryBSKXEcuj2zcsAIbSBUI",authDomain:"nuts-17b69.firebaseapp.com",projectId:"nuts-17b69",storageBucket:"nuts-17b69.appspot.com",messagingSenderId:"989266237693",appId:"1:989266237693:web:814a4d601b3db0dee74694"})}var Oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xt,Wa;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,v){function m(){}m.prototype=v.prototype,A.D=v.prototype,A.prototype=new m,A.prototype.constructor=A,A.C=function(y,E,I){for(var _=Array(arguments.length-2),Y=2;Y<arguments.length;Y++)_[Y-2]=arguments[Y];return v.prototype[E].apply(y,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,v,m){m||(m=0);var y=Array(16);if(typeof v=="string")for(var E=0;16>E;++E)y[E]=v.charCodeAt(m++)|v.charCodeAt(m++)<<8|v.charCodeAt(m++)<<16|v.charCodeAt(m++)<<24;else for(E=0;16>E;++E)y[E]=v[m++]|v[m++]<<8|v[m++]<<16|v[m++]<<24;v=A.g[0],m=A.g[1],E=A.g[2];var I=A.g[3],_=v+(I^m&(E^I))+y[0]+3614090360&4294967295;v=m+(_<<7&4294967295|_>>>25),_=I+(E^v&(m^E))+y[1]+3905402710&4294967295,I=v+(_<<12&4294967295|_>>>20),_=E+(m^I&(v^m))+y[2]+606105819&4294967295,E=I+(_<<17&4294967295|_>>>15),_=m+(v^E&(I^v))+y[3]+3250441966&4294967295,m=E+(_<<22&4294967295|_>>>10),_=v+(I^m&(E^I))+y[4]+4118548399&4294967295,v=m+(_<<7&4294967295|_>>>25),_=I+(E^v&(m^E))+y[5]+1200080426&4294967295,I=v+(_<<12&4294967295|_>>>20),_=E+(m^I&(v^m))+y[6]+2821735955&4294967295,E=I+(_<<17&4294967295|_>>>15),_=m+(v^E&(I^v))+y[7]+4249261313&4294967295,m=E+(_<<22&4294967295|_>>>10),_=v+(I^m&(E^I))+y[8]+1770035416&4294967295,v=m+(_<<7&4294967295|_>>>25),_=I+(E^v&(m^E))+y[9]+2336552879&4294967295,I=v+(_<<12&4294967295|_>>>20),_=E+(m^I&(v^m))+y[10]+4294925233&4294967295,E=I+(_<<17&4294967295|_>>>15),_=m+(v^E&(I^v))+y[11]+2304563134&4294967295,m=E+(_<<22&4294967295|_>>>10),_=v+(I^m&(E^I))+y[12]+1804603682&4294967295,v=m+(_<<7&4294967295|_>>>25),_=I+(E^v&(m^E))+y[13]+4254626195&4294967295,I=v+(_<<12&4294967295|_>>>20),_=E+(m^I&(v^m))+y[14]+2792965006&4294967295,E=I+(_<<17&4294967295|_>>>15),_=m+(v^E&(I^v))+y[15]+1236535329&4294967295,m=E+(_<<22&4294967295|_>>>10),_=v+(E^I&(m^E))+y[1]+4129170786&4294967295,v=m+(_<<5&4294967295|_>>>27),_=I+(m^E&(v^m))+y[6]+3225465664&4294967295,I=v+(_<<9&4294967295|_>>>23),_=E+(v^m&(I^v))+y[11]+643717713&4294967295,E=I+(_<<14&4294967295|_>>>18),_=m+(I^v&(E^I))+y[0]+3921069994&4294967295,m=E+(_<<20&4294967295|_>>>12),_=v+(E^I&(m^E))+y[5]+3593408605&4294967295,v=m+(_<<5&4294967295|_>>>27),_=I+(m^E&(v^m))+y[10]+38016083&4294967295,I=v+(_<<9&4294967295|_>>>23),_=E+(v^m&(I^v))+y[15]+3634488961&4294967295,E=I+(_<<14&4294967295|_>>>18),_=m+(I^v&(E^I))+y[4]+3889429448&4294967295,m=E+(_<<20&4294967295|_>>>12),_=v+(E^I&(m^E))+y[9]+568446438&4294967295,v=m+(_<<5&4294967295|_>>>27),_=I+(m^E&(v^m))+y[14]+3275163606&4294967295,I=v+(_<<9&4294967295|_>>>23),_=E+(v^m&(I^v))+y[3]+4107603335&4294967295,E=I+(_<<14&4294967295|_>>>18),_=m+(I^v&(E^I))+y[8]+1163531501&4294967295,m=E+(_<<20&4294967295|_>>>12),_=v+(E^I&(m^E))+y[13]+2850285829&4294967295,v=m+(_<<5&4294967295|_>>>27),_=I+(m^E&(v^m))+y[2]+4243563512&4294967295,I=v+(_<<9&4294967295|_>>>23),_=E+(v^m&(I^v))+y[7]+1735328473&4294967295,E=I+(_<<14&4294967295|_>>>18),_=m+(I^v&(E^I))+y[12]+2368359562&4294967295,m=E+(_<<20&4294967295|_>>>12),_=v+(m^E^I)+y[5]+4294588738&4294967295,v=m+(_<<4&4294967295|_>>>28),_=I+(v^m^E)+y[8]+2272392833&4294967295,I=v+(_<<11&4294967295|_>>>21),_=E+(I^v^m)+y[11]+1839030562&4294967295,E=I+(_<<16&4294967295|_>>>16),_=m+(E^I^v)+y[14]+4259657740&4294967295,m=E+(_<<23&4294967295|_>>>9),_=v+(m^E^I)+y[1]+2763975236&4294967295,v=m+(_<<4&4294967295|_>>>28),_=I+(v^m^E)+y[4]+1272893353&4294967295,I=v+(_<<11&4294967295|_>>>21),_=E+(I^v^m)+y[7]+4139469664&4294967295,E=I+(_<<16&4294967295|_>>>16),_=m+(E^I^v)+y[10]+3200236656&4294967295,m=E+(_<<23&4294967295|_>>>9),_=v+(m^E^I)+y[13]+681279174&4294967295,v=m+(_<<4&4294967295|_>>>28),_=I+(v^m^E)+y[0]+3936430074&4294967295,I=v+(_<<11&4294967295|_>>>21),_=E+(I^v^m)+y[3]+3572445317&4294967295,E=I+(_<<16&4294967295|_>>>16),_=m+(E^I^v)+y[6]+76029189&4294967295,m=E+(_<<23&4294967295|_>>>9),_=v+(m^E^I)+y[9]+3654602809&4294967295,v=m+(_<<4&4294967295|_>>>28),_=I+(v^m^E)+y[12]+3873151461&4294967295,I=v+(_<<11&4294967295|_>>>21),_=E+(I^v^m)+y[15]+530742520&4294967295,E=I+(_<<16&4294967295|_>>>16),_=m+(E^I^v)+y[2]+3299628645&4294967295,m=E+(_<<23&4294967295|_>>>9),_=v+(E^(m|~I))+y[0]+4096336452&4294967295,v=m+(_<<6&4294967295|_>>>26),_=I+(m^(v|~E))+y[7]+1126891415&4294967295,I=v+(_<<10&4294967295|_>>>22),_=E+(v^(I|~m))+y[14]+2878612391&4294967295,E=I+(_<<15&4294967295|_>>>17),_=m+(I^(E|~v))+y[5]+4237533241&4294967295,m=E+(_<<21&4294967295|_>>>11),_=v+(E^(m|~I))+y[12]+1700485571&4294967295,v=m+(_<<6&4294967295|_>>>26),_=I+(m^(v|~E))+y[3]+2399980690&4294967295,I=v+(_<<10&4294967295|_>>>22),_=E+(v^(I|~m))+y[10]+4293915773&4294967295,E=I+(_<<15&4294967295|_>>>17),_=m+(I^(E|~v))+y[1]+2240044497&4294967295,m=E+(_<<21&4294967295|_>>>11),_=v+(E^(m|~I))+y[8]+1873313359&4294967295,v=m+(_<<6&4294967295|_>>>26),_=I+(m^(v|~E))+y[15]+4264355552&4294967295,I=v+(_<<10&4294967295|_>>>22),_=E+(v^(I|~m))+y[6]+2734768916&4294967295,E=I+(_<<15&4294967295|_>>>17),_=m+(I^(E|~v))+y[13]+1309151649&4294967295,m=E+(_<<21&4294967295|_>>>11),_=v+(E^(m|~I))+y[4]+4149444226&4294967295,v=m+(_<<6&4294967295|_>>>26),_=I+(m^(v|~E))+y[11]+3174756917&4294967295,I=v+(_<<10&4294967295|_>>>22),_=E+(v^(I|~m))+y[2]+718787259&4294967295,E=I+(_<<15&4294967295|_>>>17),_=m+(I^(E|~v))+y[9]+3951481745&4294967295,A.g[0]=A.g[0]+v&4294967295,A.g[1]=A.g[1]+(E+(_<<21&4294967295|_>>>11))&4294967295,A.g[2]=A.g[2]+E&4294967295,A.g[3]=A.g[3]+I&4294967295}r.prototype.u=function(A,v){v===void 0&&(v=A.length);for(var m=v-this.blockSize,y=this.B,E=this.h,I=0;I<v;){if(E==0)for(;I<=m;)i(this,A,I),I+=this.blockSize;if(typeof A=="string"){for(;I<v;)if(y[E++]=A.charCodeAt(I++),E==this.blockSize){i(this,y),E=0;break}}else for(;I<v;)if(y[E++]=A[I++],E==this.blockSize){i(this,y),E=0;break}}this.h=E,this.o+=v},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var v=1;v<A.length-8;++v)A[v]=0;var m=8*this.o;for(v=A.length-8;v<A.length;++v)A[v]=m&255,m/=256;for(this.u(A),A=Array(16),v=m=0;4>v;++v)for(var y=0;32>y;y+=8)A[m++]=this.g[v]>>>y&255;return A};function s(A,v){var m=l;return Object.prototype.hasOwnProperty.call(m,A)?m[A]:m[A]=v(A)}function a(A,v){this.h=v;for(var m=[],y=!0,E=A.length-1;0<=E;E--){var I=A[E]|0;y&&I==v||(m[E]=I,y=!1)}this.g=m}var l={};function u(A){return-128<=A&&128>A?s(A,function(v){return new a([v|0],0>v?-1:0)}):new a([A|0],0>A?-1:0)}function d(A){if(isNaN(A)||!isFinite(A))return g;if(0>A)return C(d(-A));for(var v=[],m=1,y=0;A>=m;y++)v[y]=A/m|0,m*=4294967296;return new a(v,0)}function f(A,v){if(A.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(A.charAt(0)=="-")return C(f(A.substring(1),v));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=d(Math.pow(v,8)),y=g,E=0;E<A.length;E+=8){var I=Math.min(8,A.length-E),_=parseInt(A.substring(E,E+I),v);8>I?(I=d(Math.pow(v,I)),y=y.j(I).add(d(_))):(y=y.j(m),y=y.add(d(_)))}return y}var g=u(0),w=u(1),S=u(16777216);n=a.prototype,n.m=function(){if(R(this))return-C(this).m();for(var A=0,v=1,m=0;m<this.g.length;m++){var y=this.i(m);A+=(0<=y?y:4294967296+y)*v,v*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(b(this))return"0";if(R(this))return"-"+C(this).toString(A);for(var v=d(Math.pow(A,6)),m=this,y="";;){var E=O(m,v).g;m=k(m,E.j(v));var I=((0<m.g.length?m.g[0]:m.h)>>>0).toString(A);if(m=E,b(m))return I+y;for(;6>I.length;)I="0"+I;y=I+y}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function b(A){if(A.h!=0)return!1;for(var v=0;v<A.g.length;v++)if(A.g[v]!=0)return!1;return!0}function R(A){return A.h==-1}n.l=function(A){return A=k(this,A),R(A)?-1:b(A)?0:1};function C(A){for(var v=A.g.length,m=[],y=0;y<v;y++)m[y]=~A.g[y];return new a(m,~A.h).add(w)}n.abs=function(){return R(this)?C(this):this},n.add=function(A){for(var v=Math.max(this.g.length,A.g.length),m=[],y=0,E=0;E<=v;E++){var I=y+(this.i(E)&65535)+(A.i(E)&65535),_=(I>>>16)+(this.i(E)>>>16)+(A.i(E)>>>16);y=_>>>16,I&=65535,_&=65535,m[E]=_<<16|I}return new a(m,m[m.length-1]&-2147483648?-1:0)};function k(A,v){return A.add(C(v))}n.j=function(A){if(b(this)||b(A))return g;if(R(this))return R(A)?C(this).j(C(A)):C(C(this).j(A));if(R(A))return C(this.j(C(A)));if(0>this.l(S)&&0>A.l(S))return d(this.m()*A.m());for(var v=this.g.length+A.g.length,m=[],y=0;y<2*v;y++)m[y]=0;for(y=0;y<this.g.length;y++)for(var E=0;E<A.g.length;E++){var I=this.i(y)>>>16,_=this.i(y)&65535,Y=A.i(E)>>>16,ie=A.i(E)&65535;m[2*y+2*E]+=_*ie,L(m,2*y+2*E),m[2*y+2*E+1]+=I*ie,L(m,2*y+2*E+1),m[2*y+2*E+1]+=_*Y,L(m,2*y+2*E+1),m[2*y+2*E+2]+=I*Y,L(m,2*y+2*E+2)}for(y=0;y<v;y++)m[y]=m[2*y+1]<<16|m[2*y];for(y=v;y<2*v;y++)m[y]=0;return new a(m,0)};function L(A,v){for(;(A[v]&65535)!=A[v];)A[v+1]+=A[v]>>>16,A[v]&=65535,v++}function V(A,v){this.g=A,this.h=v}function O(A,v){if(b(v))throw Error("division by zero");if(b(A))return new V(g,g);if(R(A))return v=O(C(A),v),new V(C(v.g),C(v.h));if(R(v))return v=O(A,C(v)),new V(C(v.g),v.h);if(30<A.g.length){if(R(A)||R(v))throw Error("slowDivide_ only works with positive integers.");for(var m=w,y=v;0>=y.l(A);)m=U(m),y=U(y);var E=$(m,1),I=$(y,1);for(y=$(y,2),m=$(m,2);!b(y);){var _=I.add(y);0>=_.l(A)&&(E=E.add(m),I=_),y=$(y,1),m=$(m,1)}return v=k(A,E.j(v)),new V(E,v)}for(E=g;0<=A.l(v);){for(m=Math.max(1,Math.floor(A.m()/v.m())),y=Math.ceil(Math.log(m)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),I=d(m),_=I.j(v);R(_)||0<_.l(A);)m-=y,I=d(m),_=I.j(v);b(I)&&(I=w),E=E.add(I),A=k(A,_)}return new V(E,A)}n.A=function(A){return O(this,A).h},n.and=function(A){for(var v=Math.max(this.g.length,A.g.length),m=[],y=0;y<v;y++)m[y]=this.i(y)&A.i(y);return new a(m,this.h&A.h)},n.or=function(A){for(var v=Math.max(this.g.length,A.g.length),m=[],y=0;y<v;y++)m[y]=this.i(y)|A.i(y);return new a(m,this.h|A.h)},n.xor=function(A){for(var v=Math.max(this.g.length,A.g.length),m=[],y=0;y<v;y++)m[y]=this.i(y)^A.i(y);return new a(m,this.h^A.h)};function U(A){for(var v=A.g.length+1,m=[],y=0;y<v;y++)m[y]=A.i(y)<<1|A.i(y-1)>>>31;return new a(m,A.h)}function $(A,v){var m=v>>5;v%=32;for(var y=A.g.length-m,E=[],I=0;I<y;I++)E[I]=0<v?A.i(I+m)>>>v|A.i(I+m+1)<<32-v:A.i(I+m);return new a(E,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Wa=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,xt=a}).apply(typeof Oo<"u"?Oo:typeof self<"u"?self:typeof window<"u"?window:{});var Er=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ka,Qa,Mn,Ya,xr,Gi,Xa,Ja,Za;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Er=="object"&&Er];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var P=o[p];if(!(P in h))break e;h=h[P]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,p=!1,P={next:function(){if(!p&&h<o.length){var x=h++;return{value:c(x,o[x]),done:!1}}return p=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,h){return o.call.apply(o.bind,arguments)}function g(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,p),o.apply(c,P)}}return function(){return o.apply(c,arguments)}}function w(o,c,h){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,w.apply(null,arguments)}function S(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function b(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,P,x){for(var N=Array(arguments.length-2),re=2;re<arguments.length;re++)N[re-2]=arguments[re];return c.prototype[P].apply(p,N)}}function R(o){const c=o.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function C(o,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const P=o.length||0,x=p.length||0;o.length=P+x;for(let N=0;N<x;N++)o[P+N]=p[N]}else o.push(p)}}class k{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(o){return/^[\s\xa0]*$/.test(o)}function V(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function O(o){return O[" "](o),o}O[" "]=function(){};var U=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function $(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function A(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function v(o){const c={};for(const h in o)c[h]=o[h];return c}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(o,c){let h,p;for(let P=1;P<arguments.length;P++){p=arguments[P];for(h in p)o[h]=p[h];for(let x=0;x<m.length;x++)h=m[x],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function E(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function I(o){l.setTimeout(()=>{throw o},0)}function _(){var o=$e;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Y{constructor(){this.h=this.g=null}add(c,h){const p=ie.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var ie=new k(()=>new De,o=>o.reset());class De{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let qe,Le=!1,$e=new Y,at=()=>{const o=l.Promise.resolve(void 0);qe=()=>{o.then(Bt)}};var Bt=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){I(h)}var c=ie;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Le=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var nr=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function et(o,c){if(fe.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(U){e:{try{O(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:rr[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&et.aa.h.call(this)}}b(et,fe);var rr={2:"touch",3:"pen",4:"mouse"};et.prototype.h=function(){et.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var tt="closure_listenable_"+(1e6*Math.random()|0),ir=0;function Ut(o,c,h,p,P){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=P,this.key=++ir,this.da=this.fa=!1}function lt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function zt(o){this.src=o,this.g={},this.h=0}zt.prototype.add=function(o,c,h,p,P){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var N=pn(o,c,p,P);return-1<N?(c=o[N],h||(c.fa=!1)):(c=new Ut(c,this.src,x,!!p,P),c.fa=h,o.push(c)),c};function fn(o,c){var h=c.type;if(h in o.g){var p=o.g[h],P=Array.prototype.indexOf.call(p,c,void 0),x;(x=0<=P)&&Array.prototype.splice.call(p,P,1),x&&(lt(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function pn(o,c,h,p){for(var P=0;P<o.length;++P){var x=o[P];if(!x.da&&x.listener==c&&x.capture==!!h&&x.ha==p)return P}return-1}var gn="closure_lm_"+(1e6*Math.random()|0),mn={};function _n(o,c,h,p,P){if(Array.isArray(c)){for(var x=0;x<c.length;x++)_n(o,c[x],h,p,P);return null}return h=or(h),o&&o[tt]?o.K(c,h,d(p)?!!p.capture:!!p,P):ri(o,c,h,!1,p,P)}function ri(o,c,h,p,P,x){if(!c)throw Error("Invalid event type");var N=d(P)?!!P.capture:!!P,re=yn(o);if(re||(o[gn]=re=new zt(o)),h=re.add(c,h,p,N,x),h.proxy)return h;if(p=sr(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)nr||(P=N),P===void 0&&(P=!1),o.addEventListener(c.toString(),p,P);else if(o.attachEvent)o.attachEvent(jt(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function sr(){function o(h){return c.call(o.src,o.listener,h)}const c=ii;return o}function vn(o,c,h,p,P){if(Array.isArray(c))for(var x=0;x<c.length;x++)vn(o,c[x],h,p,P);else p=d(p)?!!p.capture:!!p,h=or(h),o&&o[tt]?(o=o.i,c=String(c).toString(),c in o.g&&(x=o.g[c],h=pn(x,h,p,P),-1<h&&(lt(x[h]),Array.prototype.splice.call(x,h,1),x.length==0&&(delete o.g[c],o.h--)))):o&&(o=yn(o))&&(c=o.g[c.toString()],o=-1,c&&(o=pn(c,h,p,P)),(h=-1<o?c[o]:null)&&Gt(h))}function Gt(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[tt])fn(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(jt(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=yn(c))?(fn(h,o),h.h==0&&(h.src=null,c[gn]=null)):lt(o)}}}function jt(o){return o in mn?mn[o]:mn[o]="on"+o}function ii(o,c){if(o.da)o=!0;else{c=new et(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&Gt(o),o=h.call(p,c)}return o}function yn(o){return o=o[gn],o instanceof zt?o:null}var wn="__closure_events_fn_"+(1e9*Math.random()>>>0);function or(o){return typeof o=="function"?o:(o[wn]||(o[wn]=function(c){return o.handleEvent(c)}),o[wn])}function ge(){Me.call(this),this.i=new zt(this),this.M=this,this.F=null}b(ge,Me),ge.prototype[tt]=!0,ge.prototype.removeEventListener=function(o,c,h,p){vn(this,o,c,h,p)};function we(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new fe(c,o);else if(c instanceof fe)c.target=c.target||o;else{var P=c;c=new fe(p,o),y(c,P)}if(P=!0,h)for(var x=h.length-1;0<=x;x--){var N=c.g=h[x];P=B(N,p,!0,c)&&P}if(N=c.g=o,P=B(N,p,!0,c)&&P,P=B(N,p,!1,c)&&P,h)for(x=0;x<h.length;x++)N=c.g=h[x],P=B(N,p,!1,c)&&P}ge.prototype.N=function(){if(ge.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)lt(h[p]);delete o.g[c],o.h--}}this.F=null},ge.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},ge.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function B(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,x=0;x<c.length;++x){var N=c[x];if(N&&!N.da&&N.capture==h){var re=N.listener,Te=N.ha||N.src;N.fa&&fn(o.i,N),P=re.call(Te,p)!==!1&&P}}return P&&!p.defaultPrevented}function T(o,c,h){if(typeof o=="function")h&&(o=w(o,h));else if(o&&typeof o.handleEvent=="function")o=w(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function M(o){o.g=T(()=>{o.g=null,o.i&&(o.i=!1,M(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class z extends Me{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:M(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function j(o){Me.call(this),this.h=o,this.g={}}b(j,Me);var Ge=[];function We(o){$(o.g,function(c,h){this.g.hasOwnProperty(h)&&Gt(c)},o),o.g={}}j.prototype.N=function(){j.aa.N.call(this),We(this)},j.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var je=l.JSON.stringify,qt=l.JSON.parse,si=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ht(){}Ht.prototype.h=null;function le(o){return o.h||(o.h=o.i())}function ar(){}var nt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ct(){fe.call(this,"d")}b(ct,fe);function oi(){fe.call(this,"c")}b(oi,fe);var It={},Ds=null;function lr(){return Ds=Ds||new ge}It.La="serverreachability";function Os(o){fe.call(this,It.La,o)}b(Os,fe);function Tn(o){const c=lr();we(c,new Os(c))}It.STAT_EVENT="statevent";function Ls(o,c){fe.call(this,It.STAT_EVENT,o),this.stat=c}b(Ls,fe);function xe(o){const c=lr();we(c,new Ls(c,o))}It.Ma="timingevent";function Ms(o,c){fe.call(this,It.Ma,o),this.size=c}b(Ms,fe);function En(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function Sn(){this.g=!0}Sn.prototype.xa=function(){this.g=!1};function yc(o,c,h,p,P,x){o.info(function(){if(o.g)if(x)for(var N="",re=x.split("&"),Te=0;Te<re.length;Te++){var te=re[Te].split("=");if(1<te.length){var Ae=te[0];te=te[1];var be=Ae.split("_");N=2<=be.length&&be[1]=="type"?N+(Ae+"="+te+"&"):N+(Ae+"=redacted&")}}else N=null;else N=x;return"XMLHTTP REQ ("+p+") [attempt "+P+"]: "+c+`
`+h+`
`+N})}function wc(o,c,h,p,P,x,N){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+P+"]: "+c+`
`+h+`
`+x+" "+N})}function $t(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+Ec(o,h)+(p?" "+p:"")})}function Tc(o,c){o.info(function(){return"TIMEOUT: "+c})}Sn.prototype.info=function(){};function Ec(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var P=p[1];if(Array.isArray(P)&&!(1>P.length)){var x=P[0];if(x!="noop"&&x!="stop"&&x!="close")for(var N=1;N<P.length;N++)P[N]=""}}}}return je(h)}catch{return c}}var cr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ns={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ai;function ur(){}b(ur,Ht),ur.prototype.g=function(){return new XMLHttpRequest},ur.prototype.i=function(){return{}},ai=new ur;function ut(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new j(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Fs}function Fs(){this.i=null,this.g="",this.h=!1}var Bs={},li={};function ci(o,c,h){o.L=1,o.v=pr(rt(c)),o.m=h,o.P=!0,Us(o,null)}function Us(o,c){o.F=Date.now(),hr(o),o.A=rt(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),eo(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Fs,o.g=yo(o.j,h?c:null,!o.m),0<o.O&&(o.M=new z(w(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(Ge[0]=P.toString()),P=Ge);for(var x=0;x<P.length;x++){var N=_n(h,P[x],p||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=o.H?v(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),Tn(),yc(o.i,o.u,o.A,o.l,o.R,o.m)}ut.prototype.ca=function(o){o=o.target;const c=this.M;c&&it(o)==3?c.j():this.Y(o)},ut.prototype.Y=function(o){try{if(o==this.g)e:{const be=it(this.g);var c=this.g.Ba();const Qt=this.g.Z();if(!(3>be)&&(be!=3||this.g&&(this.h.h||this.g.oa()||ao(this.g)))){this.J||be!=4||c==7||(c==8||0>=Qt?Tn(3):Tn(2)),ui(this);var h=this.g.Z();this.X=h;t:if(zs(this)){var p=ao(this.g);o="";var P=p.length,x=it(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){At(this),In(this);var N="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(x&&c==P-1)});p.length=0,this.h.g+=o,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=h==200,wc(this.i,this.u,this.A,this.l,this.R,be,h),this.o){if(this.T&&!this.K){t:{if(this.g){var re,Te=this.g;if((re=Te.g?Te.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(re)){var te=re;break t}}te=null}if(h=te)$t(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,hi(this,h);else{this.o=!1,this.s=3,xe(12),At(this),In(this);break e}}if(this.P){h=!0;let He;for(;!this.J&&this.C<N.length;)if(He=Sc(this,N),He==li){be==4&&(this.s=4,xe(14),h=!1),$t(this.i,this.l,null,"[Incomplete Response]");break}else if(He==Bs){this.s=4,xe(15),$t(this.i,this.l,N,"[Invalid Chunk]"),h=!1;break}else $t(this.i,this.l,He,null),hi(this,He);if(zs(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),be!=4||N.length!=0||this.h.h||(this.s=1,xe(16),h=!1),this.o=this.o&&h,!h)$t(this.i,this.l,N,"[Invalid Chunked Response]"),At(this),In(this);else if(0<N.length&&!this.W){this.W=!0;var Ae=this.j;Ae.g==this&&Ae.ba&&!Ae.M&&(Ae.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),_i(Ae),Ae.M=!0,xe(11))}}else $t(this.i,this.l,N,null),hi(this,N);be==4&&At(this),this.o&&!this.J&&(be==4?go(this.j,this):(this.o=!1,hr(this)))}else Uc(this.g),h==400&&0<N.indexOf("Unknown SID")?(this.s=3,xe(12)):(this.s=0,xe(13)),At(this),In(this)}}}catch{}finally{}};function zs(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Sc(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?li:(h=Number(c.substring(h,p)),isNaN(h)?Bs:(p+=1,p+h>c.length?li:(c=c.slice(p,p+h),o.C=p+h,c)))}ut.prototype.cancel=function(){this.J=!0,At(this)};function hr(o){o.S=Date.now()+o.I,Gs(o,o.I)}function Gs(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=En(w(o.ba,o),c)}function ui(o){o.B&&(l.clearTimeout(o.B),o.B=null)}ut.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Tc(this.i,this.A),this.L!=2&&(Tn(),xe(17)),At(this),this.s=2,In(this)):Gs(this,this.S-o)};function In(o){o.j.G==0||o.J||go(o.j,o)}function At(o){ui(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,We(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function hi(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||di(h.h,o))){if(!o.K&&di(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var P=p;if(P[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)yr(h),_r(h);else break e;mi(h),xe(18)}}else h.za=P[1],0<h.za-h.T&&37500>P[2]&&h.F&&h.v==0&&!h.C&&(h.C=En(w(h.Za,h),6e3));if(1>=Hs(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Pt(h,11)}else if((o.K||h.g==o)&&yr(h),!L(c))for(P=h.Da.g.parse(c),c=0;c<P.length;c++){let te=P[c];if(h.T=te[0],te=te[1],h.G==2)if(te[0]=="c"){h.K=te[1],h.ia=te[2];const Ae=te[3];Ae!=null&&(h.la=Ae,h.j.info("VER="+h.la));const be=te[4];be!=null&&(h.Aa=be,h.j.info("SVER="+h.Aa));const Qt=te[5];Qt!=null&&typeof Qt=="number"&&0<Qt&&(p=1.5*Qt,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const He=o.g;if(He){const Tr=He.g?He.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Tr){var x=p.h;x.g||Tr.indexOf("spdy")==-1&&Tr.indexOf("quic")==-1&&Tr.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(fi(x,x.h),x.h=null))}if(p.D){const vi=He.g?He.g.getResponseHeader("X-HTTP-Session-Id"):null;vi&&(p.ya=vi,se(p.I,p.D,vi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var N=o;if(p.qa=vo(p,p.J?p.ia:null,p.W),N.K){$s(p.h,N);var re=N,Te=p.L;Te&&(re.I=Te),re.B&&(ui(re),hr(re)),p.g=N}else fo(p);0<h.i.length&&vr(h)}else te[0]!="stop"&&te[0]!="close"||Pt(h,7);else h.G==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?Pt(h,7):gi(h):te[0]!="noop"&&h.l&&h.l.ta(te),h.v=0)}}Tn(4)}catch{}}var Ic=class{constructor(o,c){this.g=o,this.map=c}};function js(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function qs(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Hs(o){return o.h?1:o.g?o.g.size:0}function di(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function fi(o,c){o.g?o.g.add(c):o.h=c}function $s(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}js.prototype.cancel=function(){if(this.i=Ws(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ws(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return R(o.i)}function Ac(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function bc(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const p in o)c[h++]=p;return c}}}function Ks(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=bc(o),p=Ac(o),P=p.length,x=0;x<P;x++)c.call(void 0,p[x],h&&h[x],o)}var Qs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pc(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),P=null;if(0<=p){var x=o[h].substring(0,p);P=o[h].substring(p+1)}else x=o[h];c(x,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function bt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof bt){this.h=o.h,dr(this,o.j),this.o=o.o,this.g=o.g,fr(this,o.s),this.l=o.l;var c=o.i,h=new Pn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Ys(this,h),this.m=o.m}else o&&(c=String(o).match(Qs))?(this.h=!1,dr(this,c[1]||"",!0),this.o=An(c[2]||""),this.g=An(c[3]||"",!0),fr(this,c[4]),this.l=An(c[5]||"",!0),Ys(this,c[6]||"",!0),this.m=An(c[7]||"")):(this.h=!1,this.i=new Pn(null,this.h))}bt.prototype.toString=function(){var o=[],c=this.j;c&&o.push(bn(c,Xs,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(bn(c,Xs,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(bn(h,h.charAt(0)=="/"?xc:Cc,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",bn(h,Vc)),o.join("")};function rt(o){return new bt(o)}function dr(o,c,h){o.j=h?An(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function fr(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Ys(o,c,h){c instanceof Pn?(o.i=c,Dc(o.i,o.h)):(h||(c=bn(c,kc)),o.i=new Pn(c,o.h))}function se(o,c,h){o.i.set(c,h)}function pr(o){return se(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function An(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function bn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Rc),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Rc(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Xs=/[#\/\?@]/g,Cc=/[#\?:]/g,xc=/[#\?]/g,kc=/[#\?@]/g,Vc=/#/g;function Pn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function ht(o){o.g||(o.g=new Map,o.h=0,o.i&&Pc(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=Pn.prototype,n.add=function(o,c){ht(this),this.i=null,o=Wt(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Js(o,c){ht(o),c=Wt(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Zs(o,c){return ht(o),c=Wt(o,c),o.g.has(c)}n.forEach=function(o,c){ht(this),this.g.forEach(function(h,p){h.forEach(function(P){o.call(c,P,p,this)},this)},this)},n.na=function(){ht(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const P=o[p];for(let x=0;x<P.length;x++)h.push(c[p])}return h},n.V=function(o){ht(this);let c=[];if(typeof o=="string")Zs(this,o)&&(c=c.concat(this.g.get(Wt(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return ht(this),this.i=null,o=Wt(this,o),Zs(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function eo(o,c,h){Js(o,c),0<h.length&&(o.i=null,o.g.set(Wt(o,c),R(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const x=encodeURIComponent(String(p)),N=this.V(p);for(p=0;p<N.length;p++){var P=x;N[p]!==""&&(P+="="+encodeURIComponent(String(N[p]))),o.push(P)}}return this.i=o.join("&")};function Wt(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Dc(o,c){c&&!o.j&&(ht(o),o.i=null,o.g.forEach(function(h,p){var P=p.toLowerCase();p!=P&&(Js(this,p),eo(this,P,h))},o)),o.j=c}function Oc(o,c){const h=new Sn;if(l.Image){const p=new Image;p.onload=S(dt,h,"TestLoadImage: loaded",!0,c,p),p.onerror=S(dt,h,"TestLoadImage: error",!1,c,p),p.onabort=S(dt,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=S(dt,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function Lc(o,c){const h=new Sn,p=new AbortController,P=setTimeout(()=>{p.abort(),dt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(x=>{clearTimeout(P),x.ok?dt(h,"TestPingServer: ok",!0,c):dt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),dt(h,"TestPingServer: error",!1,c)})}function dt(o,c,h,p,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),p(h)}catch{}}function Mc(){this.g=new si}function Nc(o,c,h){const p=h||"";try{Ks(o,function(P,x){let N=P;d(P)&&(N=je(P)),c.push(p+x+"="+encodeURIComponent(N))})}catch(P){throw c.push(p+"type="+encodeURIComponent("_badmap")),P}}function Rn(o){this.l=o.Ub||null,this.j=o.eb||!1}b(Rn,Ht),Rn.prototype.g=function(){return new gr(this.l,this.j)},Rn.prototype.i=function(o){return function(){return o}}({});function gr(o,c){ge.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(gr,ge),n=gr.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,xn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Cn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,xn(this)),this.g&&(this.readyState=3,xn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;to(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function to(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Cn(this):xn(this),this.readyState==3&&to(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Cn(this))},n.Qa=function(o){this.g&&(this.response=o,Cn(this))},n.ga=function(){this.g&&Cn(this)};function Cn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,xn(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function xn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(gr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function no(o){let c="";return $(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function pi(o,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=no(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):se(o,c,h))}function ae(o){ge.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(ae,ge);var Fc=/^https?$/i,Bc=["POST","PUT"];n=ae.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ai.g(),this.v=this.o?le(this.o):le(ai),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(x){ro(this,x);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var P in p)h.set(P,p[P]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const x of p.keys())h.set(x,p.get(x));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(x=>x.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Bc,c,void 0))||p||P||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,N]of h)this.g.setRequestHeader(x,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{oo(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){ro(this,x)}};function ro(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,io(o),mr(o)}function io(o){o.A||(o.A=!0,we(o,"complete"),we(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,we(this,"complete"),we(this,"abort"),mr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mr(this,!0)),ae.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?so(this):this.bb())},n.bb=function(){so(this)};function so(o){if(o.h&&typeof a<"u"&&(!o.v[1]||it(o)!=4||o.Z()!=2)){if(o.u&&it(o)==4)T(o.Ea,0,o);else if(we(o,"readystatechange"),it(o)==4){o.h=!1;try{const N=o.Z();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=N===0){var P=String(o.D).match(Qs)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),p=!Fc.test(P?P.toLowerCase():"")}h=p}if(h)we(o,"complete"),we(o,"success");else{o.m=6;try{var x=2<it(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",io(o)}}finally{mr(o)}}}}function mr(o,c){if(o.g){oo(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||we(o,"ready");try{h.onreadystatechange=p}catch{}}}function oo(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function it(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<it(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),qt(c)}};function ao(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Uc(o){const c={};o=(o.g&&2<=it(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(L(o[p]))continue;var h=E(o[p]);const P=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const x=c[P]||[];c[P]=x,x.push(h)}A(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function kn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function lo(o){this.Aa=0,this.i=[],this.j=new Sn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=kn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=kn("baseRetryDelayMs",5e3,o),this.cb=kn("retryDelaySeedMs",1e4,o),this.Wa=kn("forwardChannelMaxRetries",2,o),this.wa=kn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new js(o&&o.concurrentRequestLimit),this.Da=new Mc,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=lo.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,p){xe(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=vo(this,null,this.W),vr(this)};function gi(o){if(co(o),o.G==3){var c=o.U++,h=rt(o.I);if(se(h,"SID",o.K),se(h,"RID",c),se(h,"TYPE","terminate"),Vn(o,h),c=new ut(o,o.j,c),c.L=2,c.v=pr(rt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=yo(c.j,null),c.g.ea(c.v)),c.F=Date.now(),hr(c)}_o(o)}function _r(o){o.g&&(_i(o),o.g.cancel(),o.g=null)}function co(o){_r(o),o.u&&(l.clearTimeout(o.u),o.u=null),yr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function vr(o){if(!qs(o.h)&&!o.s){o.s=!0;var c=o.Ga;qe||at(),Le||(qe(),Le=!0),$e.add(c,o),o.B=0}}function zc(o,c){return Hs(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=En(w(o.Ga,o,c),mo(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new ut(this,this.j,o);let x=this.o;if(this.S&&(x?(x=v(x),y(x,this.S)):x=this.S),this.m!==null||this.O||(P.H=x,x=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=ho(this,P,c),h=rt(this.I),se(h,"RID",o),se(h,"CVER",22),this.D&&se(h,"X-HTTP-Session-Id",this.D),Vn(this,h),x&&(this.O?c="headers="+encodeURIComponent(String(no(x)))+"&"+c:this.m&&pi(h,this.m,x)),fi(this.h,P),this.Ua&&se(h,"TYPE","init"),this.P?(se(h,"$req",c),se(h,"SID","null"),P.T=!0,ci(P,h,null)):ci(P,h,c),this.G=2}}else this.G==3&&(o?uo(this,o):this.i.length==0||qs(this.h)||uo(this))};function uo(o,c){var h;c?h=c.l:h=o.U++;const p=rt(o.I);se(p,"SID",o.K),se(p,"RID",h),se(p,"AID",o.T),Vn(o,p),o.m&&o.o&&pi(p,o.m,o.o),h=new ut(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=ho(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),fi(o.h,h),ci(h,p,c)}function Vn(o,c){o.H&&$(o.H,function(h,p){se(c,p,h)}),o.l&&Ks({},function(h,p){se(c,p,h)})}function ho(o,c,h){h=Math.min(o.i.length,h);var p=o.l?w(o.l.Na,o.l,o):null;e:{var P=o.i;let x=-1;for(;;){const N=["count="+h];x==-1?0<h?(x=P[0].g,N.push("ofs="+x)):x=0:N.push("ofs="+x);let re=!0;for(let Te=0;Te<h;Te++){let te=P[Te].g;const Ae=P[Te].map;if(te-=x,0>te)x=Math.max(0,P[Te].g-100),re=!1;else try{Nc(Ae,N,"req"+te+"_")}catch{p&&p(Ae)}}if(re){p=N.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,p}function fo(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;qe||at(),Le||(qe(),Le=!0),$e.add(c,o),o.v=0}}function mi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=En(w(o.Fa,o),mo(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,po(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=En(w(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xe(10),_r(this),po(this))};function _i(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function po(o){o.g=new ut(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=rt(o.qa);se(c,"RID","rpc"),se(c,"SID",o.K),se(c,"AID",o.T),se(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&se(c,"TO",o.ja),se(c,"TYPE","xmlhttp"),Vn(o,c),o.m&&o.o&&pi(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=pr(rt(c)),h.m=null,h.P=!0,Us(h,o)}n.Za=function(){this.C!=null&&(this.C=null,_r(this),mi(this),xe(19))};function yr(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function go(o,c){var h=null;if(o.g==c){yr(o),_i(o),o.g=null;var p=2}else if(di(o.h,c))h=c.D,$s(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var P=o.B;p=lr(),we(p,new Ms(p,h)),vr(o)}else fo(o);else if(P=c.s,P==3||P==0&&0<c.X||!(p==1&&zc(o,c)||p==2&&mi(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),P){case 1:Pt(o,5);break;case 4:Pt(o,10);break;case 3:Pt(o,6);break;default:Pt(o,2)}}}function mo(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Pt(o,c){if(o.j.info("Error code "+c),c==2){var h=w(o.fb,o),p=o.Xa;const P=!p;p=new bt(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||dr(p,"https"),pr(p),P?Oc(p.toString(),h):Lc(p.toString(),h)}else xe(2);o.G=0,o.l&&o.l.sa(c),_o(o),co(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))};function _o(o){if(o.G=0,o.ka=[],o.l){const c=Ws(o.h);(c.length!=0||o.i.length!=0)&&(C(o.ka,c),C(o.ka,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.ra()}}function vo(o,c,h){var p=h instanceof bt?rt(h):new bt(h);if(p.g!="")c&&(p.g=c+"."+p.g),fr(p,p.s);else{var P=l.location;p=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var x=new bt(null);p&&dr(x,p),c&&(x.g=c),P&&fr(x,P),h&&(x.l=h),p=x}return h=o.D,c=o.ya,h&&c&&se(p,h,c),se(p,"VER",o.la),Vn(o,p),p}function yo(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ae(new Rn({eb:h})):new ae(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function wo(){}n=wo.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function wr(){}wr.prototype.g=function(o,c){return new Ne(o,c)};function Ne(o,c){ge.call(this),this.g=new lo(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!L(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!L(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Kt(this)}b(Ne,ge),Ne.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ne.prototype.close=function(){gi(this.g)},Ne.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=je(o),o=h);c.i.push(new Ic(c.Ya++,o)),c.G==3&&vr(c)},Ne.prototype.N=function(){this.g.l=null,delete this.j,gi(this.g),delete this.g,Ne.aa.N.call(this)};function To(o){ct.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}b(To,ct);function Eo(){oi.call(this),this.status=1}b(Eo,oi);function Kt(o){this.g=o}b(Kt,wo),Kt.prototype.ua=function(){we(this.g,"a")},Kt.prototype.ta=function(o){we(this.g,new To(o))},Kt.prototype.sa=function(o){we(this.g,new Eo)},Kt.prototype.ra=function(){we(this.g,"b")},wr.prototype.createWebChannel=wr.prototype.g,Ne.prototype.send=Ne.prototype.o,Ne.prototype.open=Ne.prototype.m,Ne.prototype.close=Ne.prototype.close,Za=function(){return new wr},Ja=function(){return lr()},Xa=It,Gi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},cr.NO_ERROR=0,cr.TIMEOUT=8,cr.HTTP_ERROR=6,xr=cr,Ns.COMPLETE="complete",Ya=Ns,ar.EventType=nt,nt.OPEN="a",nt.CLOSE="b",nt.ERROR="c",nt.MESSAGE="d",ge.prototype.listen=ge.prototype.K,Mn=ar,Qa=Rn,ae.prototype.listenOnce=ae.prototype.L,ae.prototype.getLastError=ae.prototype.Ka,ae.prototype.getLastErrorCode=ae.prototype.Ba,ae.prototype.getStatus=ae.prototype.Z,ae.prototype.getResponseJson=ae.prototype.Oa,ae.prototype.getResponseText=ae.prototype.oa,ae.prototype.send=ae.prototype.ea,ae.prototype.setWithCredentials=ae.prototype.Ha,Ka=ae}).apply(typeof Er<"u"?Er:typeof self<"u"?self:typeof window<"u"?window:{});const Lo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Re.UNAUTHENTICATED=new Re(null),Re.GOOGLE_CREDENTIALS=new Re("google-credentials-uid"),Re.FIRST_PARTY=new Re("first-party-uid"),Re.MOCK_USER=new Re("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let cn="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Fa("@firebase/firestore");function Dn(){return Ot.logLevel}function G(n,...e){if(Ot.logLevel<=Z.DEBUG){const t=e.map(ls);Ot.debug(`Firestore (${cn}): ${n}`,...t)}}function ot(n,...e){if(Ot.logLevel<=Z.ERROR){const t=e.map(ls);Ot.error(`Firestore (${cn}): ${n}`,...t)}}function nn(n,...e){if(Ot.logLevel<=Z.WARN){const t=e.map(ls);Ot.warn(`Firestore (${cn}): ${n}`,...t)}}function ls(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Q(n="Unexpected state"){const e=`FIRESTORE (${cn}) INTERNAL ASSERTION FAILED: `+n;throw ot(e),new Error(e)}function de(n,e){n||Q()}function J(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends Ft{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _h{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Re.UNAUTHENTICATED))}shutdown(){}}class vh{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class yh{constructor(e){this.t=e,this.currentUser=Re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new yt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new yt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new yt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(de(typeof r.accessToken=="string"),new el(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return de(e===null||typeof e=="string"),new Re(e)}}class wh{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Re.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Th{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new wh(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Eh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Sh{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(de(typeof t.token=="string"),this.R=t.token,new Eh(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Ih(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(n,e){return n<e?-1:n>e?1:0}function rn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new q(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new q(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new q(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Oe(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.timestamp=e}static fromTimestamp(e){return new K(e)}static min(){return new K(new Oe(0,0))}static max(){return new K(new Oe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t,r){t===void 0?t=0:t>e.length&&Q(),r===void 0?r=e.length-t:r>e.length-t&&Q(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return $n.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof $n?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class oe extends $n{construct(e,t,r){return new oe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new oe(t)}static emptyPath(){return new oe([])}}const Ah=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends $n{construct(e,t,r){return new Ve(e,t,r)}static isValidIdentifier(e){return Ah.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ve(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new q(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(t)}static emptyPath(){return new Ve([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(oe.fromString(e))}static fromName(e){return new H(oe.fromString(e).popFirst(5))}static empty(){return new H(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new oe(e.slice()))}}function bh(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=K.fromTimestamp(r===1e9?new Oe(t+1,0):new Oe(t,r));return new Tt(i,H.empty(),e)}function Ph(n){return new Tt(n.readTime,n.key,-1)}class Tt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Tt(K.min(),H.empty(),-1)}static max(){return new Tt(K.max(),H.empty(),-1)}}function Rh(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=H.comparator(n.documentKey,e.documentKey),t!==0?t:ne(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xh{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(n){if(n.code!==F.FAILED_PRECONDITION||n.message!==Ch)throw n;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},u=>r(u))}),a=!0,s===i&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(i=>i?D.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new D((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;t(e[d]).next(f=>{a[d]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new D((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function kh(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Jn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class us{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}us.oe=-1;function $r(n){return n==null}function ji(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Wr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Vh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t){this.comparator=e,this.root=t||Ee.EMPTY}insert(e,t){return new ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ee.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sr(this.root,e,this.comparator,!0)}}class Sr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ee{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ee.RED,this.left=i??Ee.EMPTY,this.right=s??Ee.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ee(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ee.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Ee.EMPTY=null,Ee.RED=!0,Ee.BLACK=!1;Ee.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new No(this.data.getIterator())}getIteratorFrom(e){return new No(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Se(this.comparator);return t.data=e,t}}class No{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new ft([])}unionWith(e){let t=new Se(Ve.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new ft(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return rn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class nl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new nl("Invalid base64 string: "+s):s}}(e);return new Ie(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Ie(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ie.EMPTY_BYTE_STRING=new Ie("");const Dh=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Et(n){if(de(!!n),typeof n=="string"){let e=0;const t=Dh.exec(n);if(de(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:he(n.seconds),nanos:he(n.nanos)}}function he(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Lt(n){return typeof n=="string"?Ie.fromBase64String(n):Ie.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ds(n){const e=n.mapValue.fields.__previous_value__;return hs(e)?ds(e):e}function Wn(n){const e=Et(n.mapValue.fields.__local_write_time__.timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oh{constructor(e,t,r,i,s,a,l,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Kn{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Kn("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Kn&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?hs(n)?4:Lh(n)?9007199254740991:10:Q()}function Je(n,e){if(n===e)return!0;const t=Mt(n);if(t!==Mt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Wn(n).isEqual(Wn(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Et(i.timestampValue),l=Et(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Lt(i.bytesValue).isEqual(Lt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return he(i.geoPointValue.latitude)===he(s.geoPointValue.latitude)&&he(i.geoPointValue.longitude)===he(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return he(i.integerValue)===he(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=he(i.doubleValue),l=he(s.doubleValue);return a===l?ji(a)===ji(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return rn(n.arrayValue.values||[],e.arrayValue.values||[],Je);case 10:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Mo(a)!==Mo(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Je(a[u],l[u])))return!1;return!0}(n,e);default:return Q()}}function Qn(n,e){return(n.values||[]).find(t=>Je(t,e))!==void 0}function sn(n,e){if(n===e)return 0;const t=Mt(n),r=Mt(e);if(t!==r)return ne(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(n.booleanValue,e.booleanValue);case 2:return function(s,a){const l=he(s.integerValue||s.doubleValue),u=he(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Fo(n.timestampValue,e.timestampValue);case 4:return Fo(Wn(n),Wn(e));case 5:return ne(n.stringValue,e.stringValue);case 6:return function(s,a){const l=Lt(s),u=Lt(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=ne(l[d],u[d]);if(f!==0)return f}return ne(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const l=ne(he(s.latitude),he(a.latitude));return l!==0?l:ne(he(s.longitude),he(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,a){const l=s.values||[],u=a.values||[];for(let d=0;d<l.length&&d<u.length;++d){const f=sn(l[d],u[d]);if(f)return f}return ne(l.length,u.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,a){if(s===Ir.mapValue&&a===Ir.mapValue)return 0;if(s===Ir.mapValue)return 1;if(a===Ir.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const w=ne(u[g],f[g]);if(w!==0)return w;const S=sn(l[u[g]],d[f[g]]);if(S!==0)return S}return ne(u.length,f.length)}(n.mapValue,e.mapValue);default:throw Q()}}function Fo(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ne(n,e);const t=Et(n),r=Et(e),i=ne(t.seconds,r.seconds);return i!==0?i:ne(t.nanos,r.nanos)}function on(n){return qi(n)}function qi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Et(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Lt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return H.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=qi(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${qi(t.fields[a])}`;return i+"}"}(n.mapValue):Q()}function Hi(n){return!!n&&"integerValue"in n}function fs(n){return!!n&&"arrayValue"in n}function Bo(n){return!!n&&"nullValue"in n}function Uo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Si(n){return!!n&&"mapValue"in n}function Un(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Wr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Un(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Un(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Lh(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Si(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Un(t)}setAll(e){let t=Ve.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=Un(a):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Si(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Je(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Si(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Wr(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ke(Un(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Ce(e,0,K.min(),K.min(),K.min(),Ke.empty(),0)}static newFoundDocument(e,t,r,i){return new Ce(e,1,t,K.min(),r,i,0)}static newNoDocument(e,t){return new Ce(e,2,t,K.min(),K.min(),Ke.empty(),0)}static newUnknownDocument(e,t){return new Ce(e,3,t,K.min(),K.min(),Ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ce&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ce(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Fr{constructor(e,t){this.position=e,this.inclusive=t}}function zo(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(a.referenceValue),t.key):r=sn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Go(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Je(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Br{constructor(e,t="asc"){this.field=e,this.dir=t}}function Mh(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class rl{}class pe extends rl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Fh(e,t,r):t==="array-contains"?new zh(e,r):t==="in"?new Gh(e,r):t==="not-in"?new jh(e,r):t==="array-contains-any"?new qh(e,r):new pe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Bh(e,r):new Uh(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(sn(t,this.value)):t!==null&&Mt(this.value)===Mt(t)&&this.matchesComparison(sn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ze extends rl{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ze(e,t)}matches(e){return il(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function il(n){return n.op==="and"}function sl(n){return Nh(n)&&il(n)}function Nh(n){for(const e of n.filters)if(e instanceof Ze)return!1;return!0}function $i(n){if(n instanceof pe)return n.field.canonicalString()+n.op.toString()+on(n.value);if(sl(n))return n.filters.map(e=>$i(e)).join(",");{const e=n.filters.map(t=>$i(t)).join(",");return`${n.op}(${e})`}}function ol(n,e){return n instanceof pe?function(r,i){return i instanceof pe&&r.op===i.op&&r.field.isEqual(i.field)&&Je(r.value,i.value)}(n,e):n instanceof Ze?function(r,i){return i instanceof Ze&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&ol(a,i.filters[l]),!0):!1}(n,e):void Q()}function al(n){return n instanceof pe?function(t){return`${t.field.canonicalString()} ${t.op} ${on(t.value)}`}(n):n instanceof Ze?function(t){return t.op.toString()+" {"+t.getFilters().map(al).join(" ,")+"}"}(n):"Filter"}class Fh extends pe{constructor(e,t,r){super(e,t,r),this.key=H.fromName(r.referenceValue)}matches(e){const t=H.comparator(e.key,this.key);return this.matchesComparison(t)}}class Bh extends pe{constructor(e,t){super(e,"in",t),this.keys=ll("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Uh extends pe{constructor(e,t){super(e,"not-in",t),this.keys=ll("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function ll(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>H.fromName(r.referenceValue))}class zh extends pe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return fs(t)&&Qn(t.arrayValue,this.value)}}class Gh extends pe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Qn(this.value.arrayValue,t)}}class jh extends pe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Qn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Qn(this.value.arrayValue,t)}}class qh extends pe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!fs(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Qn(this.value.arrayValue,r))}}/**
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
 */class Hh{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function jo(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Hh(n,e,t,r,i,s,a)}function ps(n){const e=J(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>$i(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),$r(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>on(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>on(r)).join(",")),e.ue=t}return e.ue}function gs(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Mh(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ol(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Go(n.startAt,e.startAt)&&Go(n.endAt,e.endAt)}function Wi(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function $h(n,e,t,r,i,s,a,l){return new Kr(n,e,t,r,i,s,a,l)}function ms(n){return new Kr(n)}function qo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Wh(n){return n.collectionGroup!==null}function zn(n){const e=J(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Se(Ve.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Br(s,r))}),t.has(Ve.keyField().canonicalString())||e.ce.push(new Br(Ve.keyField(),r))}return e.ce}function Ye(n){const e=J(n);return e.le||(e.le=Kh(e,zn(n))),e.le}function Kh(n,e){if(n.limitType==="F")return jo(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Br(i.field,s)});const t=n.endAt?new Fr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Fr(n.startAt.position,n.startAt.inclusive):null;return jo(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ki(n,e,t){return new Kr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Qr(n,e){return gs(Ye(n),Ye(e))&&n.limitType===e.limitType}function cl(n){return`${ps(Ye(n))}|lt:${n.limitType}`}function Yt(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>al(i)).join(", ")}]`),$r(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>on(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>on(i)).join(",")),`Target(${r})`}(Ye(n))}; limitType=${n.limitType})`}function Yr(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of zn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const d=zo(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,zn(r),i)||r.endAt&&!function(a,l,u){const d=zo(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,zn(r),i))}(n,e)}function Qh(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function ul(n){return(e,t)=>{let r=!1;for(const i of zn(n)){const s=Yh(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Yh(n,e,t){const r=n.field.isKeyField()?H.comparator(e.key,t.key):function(s,a,l){const u=a.data.field(s),d=l.data.field(s);return u!==null&&d!==null?sn(u,d):Q()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class un{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Wr(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Vh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh=new ce(H.comparator);function St(){return Xh}const hl=new ce(H.comparator);function Nn(...n){let e=hl;for(const t of n)e=e.insert(t.key,t);return e}function Jh(n){let e=hl;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Ct(){return Gn()}function dl(){return Gn()}function Gn(){return new un(n=>n.toString(),(n,e)=>n.isEqual(e))}const Zh=new Se(H.comparator);function ee(...n){let e=Zh;for(const t of n)e=e.add(t);return e}const ed=new Se(ne);function td(){return ed}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ji(e)?"-0":e}}function rd(n){return{integerValue:""+n}}/**
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
 */class Xr{constructor(){this._=void 0}}function id(n,e,t){return n instanceof Qi?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&hs(s)&&(s=ds(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof Ur?fl(n,e):n instanceof zr?pl(n,e):function(i,s){const a=od(i,s),l=Ho(a)+Ho(i.Pe);return Hi(a)&&Hi(i.Pe)?rd(l):nd(i.serializer,l)}(n,e)}function sd(n,e,t){return n instanceof Ur?fl(n,e):n instanceof zr?pl(n,e):t}function od(n,e){return n instanceof Yi?function(r){return Hi(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Qi extends Xr{}class Ur extends Xr{constructor(e){super(),this.elements=e}}function fl(n,e){const t=gl(e);for(const r of n.elements)t.some(i=>Je(i,r))||t.push(r);return{arrayValue:{values:t}}}class zr extends Xr{constructor(e){super(),this.elements=e}}function pl(n,e){let t=gl(e);for(const r of n.elements)t=t.filter(i=>!Je(i,r));return{arrayValue:{values:t}}}class Yi extends Xr{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Ho(n){return he(n.integerValue||n.doubleValue)}function gl(n){return fs(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function ad(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Ur&&i instanceof Ur||r instanceof zr&&i instanceof zr?rn(r.elements,i.elements,Je):r instanceof Yi&&i instanceof Yi?Je(r.Pe,i.Pe):r instanceof Qi&&i instanceof Qi}(n.transform,e.transform)}class kt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kt}static exists(e){return new kt(void 0,e)}static updateTime(e){return new kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function kr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class _s{}function ml(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new cd(n.key,kt.none()):new vs(n.key,n.data,kt.none());{const t=n.data,r=Ke.empty();let i=new Se(Ve.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Jr(n.key,r,new ft(i.toArray()),kt.none())}}function ld(n,e,t){n instanceof vs?function(i,s,a){const l=i.value.clone(),u=Wo(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Jr?function(i,s,a){if(!kr(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Wo(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(_l(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function jn(n,e,t,r){return n instanceof vs?function(s,a,l,u){if(!kr(s.precondition,a))return l;const d=s.value.clone(),f=Ko(s.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Jr?function(s,a,l,u){if(!kr(s.precondition,a))return l;const d=Ko(s.fieldTransforms,u,a),f=a.data;return f.setAll(_l(s)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(s,a,l){return kr(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function $o(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&rn(r,i,(s,a)=>ad(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class vs extends _s{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Jr extends _s{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function _l(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Wo(n,e,t){const r=new Map;de(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,sd(a,l,t[i]))}return r}function Ko(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,id(s,a,e))}return r}class cd extends _s{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&ld(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=jn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=jn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=dl();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const u=ml(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ee())}isEqual(e){return this.batchId===e.batchId&&rn(this.mutations,e.mutations,(t,r)=>$o(t,r))&&rn(this.baseMutations,e.baseMutations,(t,r)=>$o(t,r))}}/**
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
 */class hd{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class dd{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue,X;function vl(n){if(n===void 0)return ot("GRPC error has no .code"),F.UNKNOWN;switch(n){case ue.OK:return F.OK;case ue.CANCELLED:return F.CANCELLED;case ue.UNKNOWN:return F.UNKNOWN;case ue.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case ue.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case ue.INTERNAL:return F.INTERNAL;case ue.UNAVAILABLE:return F.UNAVAILABLE;case ue.UNAUTHENTICATED:return F.UNAUTHENTICATED;case ue.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case ue.NOT_FOUND:return F.NOT_FOUND;case ue.ALREADY_EXISTS:return F.ALREADY_EXISTS;case ue.PERMISSION_DENIED:return F.PERMISSION_DENIED;case ue.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case ue.ABORTED:return F.ABORTED;case ue.OUT_OF_RANGE:return F.OUT_OF_RANGE;case ue.UNIMPLEMENTED:return F.UNIMPLEMENTED;case ue.DATA_LOSS:return F.DATA_LOSS;default:return Q()}}(X=ue||(ue={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function fd(){return new TextEncoder}/**
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
 */const pd=new xt([4294967295,4294967295],0);function Qo(n){const e=fd().encode(n),t=new Wa;return t.update(e),new Uint8Array(t.digest())}function Yo(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new xt([t,r],0),new xt([i,s],0)]}class ys{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Fn(`Invalid padding: ${t}`);if(r<0)throw new Fn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Fn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Fn(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=xt.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(xt.fromNumber(r)));return i.compare(pd)===1&&(i=new xt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Qo(e),[r,i]=Yo(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new ys(s,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=Qo(e),[r,i]=Yo(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Fn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Zn.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Zr(K.min(),i,new ce(ne),St(),ee())}}class Zn{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Zn(r,t,ee(),ee(),ee())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class yl{constructor(e,t){this.targetId=e,this.me=t}}class wl{constructor(e,t,r=Ie.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Xo{constructor(){this.fe=0,this.ge=Zo(),this.pe=Ie.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=ee(),t=ee(),r=ee();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new Zn(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=Zo()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,de(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class gd{constructor(e){this.Le=e,this.Be=new Map,this.ke=St(),this.qe=Jo(),this.Qe=new ce(ne)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Wi(s))if(r===0){const a=new H(s.path);this.Ue(t,a,Ce.newNoDocument(a,K.min()))}else de(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=Lt(r).toUint8Array()}catch(u){if(u instanceof nl)return nn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new ys(a,i,s)}catch(u){return nn(u instanceof Fn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&Wi(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Ce.newNoDocument(u,e))}s.be&&(t.set(a,s.Ce()),s.ve())}});let r=ee();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new Zr(e,t,this.Qe,this.ke,r);return this.ke=St(),this.qe=Jo(),this.Qe=new ce(ne),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Xo,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Se(ne),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||G("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Xo),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Jo(){return new ce(H.comparator)}function Zo(){return new ce(H.comparator)}const md={asc:"ASCENDING",desc:"DESCENDING"},_d={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vd={and:"AND",or:"OR"};class yd{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Xi(n,e){return n.useProto3Json||$r(e)?e:{value:e}}function wd(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Td(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Zt(n){return de(!!n),K.fromTimestamp(function(t){const r=Et(t);return new Oe(r.seconds,r.nanos)}(n))}function Ed(n,e){return Ji(n,e).canonicalString()}function Ji(n,e){const t=function(i){return new oe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Tl(n){const e=oe.fromString(n);return de(bl(e)),e}function Ii(n,e){const t=Tl(e);if(t.get(1)!==n.databaseId.projectId)throw new q(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new q(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new H(Sl(t))}function El(n,e){return Ed(n.databaseId,e)}function Sd(n){const e=Tl(n);return e.length===4?oe.emptyPath():Sl(e)}function ea(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Sl(n){return de(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Id(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(de(f===void 0||typeof f=="string"),Ie.fromBase64String(f||"")):(de(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ie.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const f=d.code===void 0?F.UNKNOWN:vl(d.code);return new q(f,d.message||"")}(a);t=new wl(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ii(n,r.document.name),s=Zt(r.document.updateTime),a=r.document.createTime?Zt(r.document.createTime):K.min(),l=new Ke({mapValue:{fields:r.document.fields}}),u=Ce.newFoundDocument(i,s,a,l),d=r.targetIds||[],f=r.removedTargetIds||[];t=new Vr(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ii(n,r.document),s=r.readTime?Zt(r.readTime):K.min(),a=Ce.newNoDocument(i,s),l=r.removedTargetIds||[];t=new Vr([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ii(n,r.document),s=r.removedTargetIds||[];t=new Vr([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new dd(i,s),l=r.targetId;t=new yl(l,a)}}return t}function Ad(n,e){return{documents:[El(n,e.path)]}}function bd(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=El(n,i);const s=function(d){if(d.length!==0)return Al(Ze.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(f=>function(w){return{field:Xt(w.field),direction:Cd(w.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Xi(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function Pd(n){let e=Sd(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){de(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(g){const w=Il(g);return w instanceof Ze&&sl(w)?w.getFilters():[w]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(w=>function(b){return new Br(Jt(b.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(w))}(t.orderBy));let l=null;t.limit&&(l=function(g){let w;return w=typeof g=="object"?g.value:g,$r(w)?null:w}(t.limit));let u=null;t.startAt&&(u=function(g){const w=!!g.before,S=g.values||[];return new Fr(S,w)}(t.startAt));let d=null;return t.endAt&&(d=function(g){const w=!g.before,S=g.values||[];return new Fr(S,w)}(t.endAt)),$h(e,i,a,s,l,"F",u,d)}function Rd(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Il(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Jt(t.unaryFilter.field);return pe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Jt(t.unaryFilter.field);return pe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Jt(t.unaryFilter.field);return pe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Jt(t.unaryFilter.field);return pe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(n):n.fieldFilter!==void 0?function(t){return pe.create(Jt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Ze.create(t.compositeFilter.filters.map(r=>Il(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(t.compositeFilter.op))}(n):Q()}function Cd(n){return md[n]}function xd(n){return _d[n]}function kd(n){return vd[n]}function Xt(n){return{fieldPath:n.canonicalString()}}function Jt(n){return Ve.fromServerFormat(n.fieldPath)}function Al(n){return n instanceof pe?function(t){if(t.op==="=="){if(Uo(t.value))return{unaryFilter:{field:Xt(t.field),op:"IS_NAN"}};if(Bo(t.value))return{unaryFilter:{field:Xt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Uo(t.value))return{unaryFilter:{field:Xt(t.field),op:"IS_NOT_NAN"}};if(Bo(t.value))return{unaryFilter:{field:Xt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Xt(t.field),op:xd(t.op),value:t.value}}}(n):n instanceof Ze?function(t){const r=t.getFilters().map(i=>Al(i));return r.length===1?r[0]:{compositeFilter:{op:kd(t.op),filters:r}}}(n):Q()}function bl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t,r,i,s=K.min(),a=K.min(),l=Ie.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new pt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this.ct=e}}function Dd(n){const e=Pd({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ki(e,e.limit,"L"):e}/**
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
 */class Od{constructor(){this.an=new Ld}addToCollectionParentIndex(e,t){return this.an.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Tt.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Tt.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class Ld{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Se(oe.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Se(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new an(0)}static Bn(){return new an(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.changes=new un(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Ce.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Nd{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&jn(r.mutation,i,ft.empty(),Oe.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ee()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ee()){const i=Ct();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=Nn();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Ct();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ee()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let s=St();const a=Gn(),l=function(){return Gn()}();return t.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Jr)?s=s.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),jn(f.mutation,d,f.mutation.getFieldMask(),Oe.now())):a.set(d.key,ft.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var g;return l.set(d,new Nd(f,(g=a.get(d))!==null&&g!==void 0?g:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Gn();let i=new ce((a,l)=>a-l),s=ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let f=r.get(u)||ft.empty();f=l.applyToLocalView(d,f),r.set(u,f);const g=(i.get(l.batchId)||ee()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,g=dl();f.forEach(w=>{if(!s.has(w)){const S=ml(t.get(w),r.get(w));S!==null&&g.set(w,S),s=s.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,g))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return H.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Wh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):D.resolve(Ct());let l=-1,u=s;return a.next(d=>D.forEach(d,(f,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(f)?D.resolve():this.remoteDocumentCache.getEntry(e,f).next(w=>{u=u.insert(f,w)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,ee())).next(f=>({batchId:l,changes:Jh(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H(t)).next(r=>{let i=Nn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=Nn();return this.indexManager.getCollectionParents(e,s).next(l=>D.forEach(l,u=>{const d=function(g,w){return new Kr(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((g,w)=>{a=a.insert(g,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Ce.newInvalidDocument(f)))});let l=Nn();return a.forEach((u,d)=>{const f=s.get(u);f!==void 0&&jn(f.mutation,d,ft.empty(),Oe.now()),Yr(t,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return D.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Zt(i.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,function(i){return{name:i.name,query:Dd(i.bundledQuery),readTime:Zt(i.readTime)}}(t)),D.resolve()}}/**
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
 */class Ud{constructor(){this.overlays=new ce(H.comparator),this.Pr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Ct();return D.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const i=Ct(),s=t.length+1,a=new H(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return D.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ce((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=Ct(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=Ct(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return D.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new hd(t,r));let s=this.Pr.get(t);s===void 0&&(s=ee(),this.Pr.set(t,s)),this.Pr.set(t,s.add(r.key))}}/**
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
 */class zd{constructor(){this.sessionToken=Ie.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.Ir=new Se(_e.Tr),this.Er=new Se(_e.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){const r=new _e(e,t);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Rr(new _e(e,t))}Vr(e,t){e.forEach(r=>this.removeReference(r,t))}mr(e){const t=new H(new oe([])),r=new _e(t,e),i=new _e(t,e+1),s=[];return this.Er.forEachInRange([r,i],a=>{this.Rr(a),s.push(a.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const t=new H(new oe([])),r=new _e(t,e),i=new _e(t,e+1);let s=ee();return this.Er.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new _e(e,0),r=this.Ir.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class _e{constructor(e,t){this.key=e,this.yr=t}static Tr(e,t){return H.comparator(e.key,t.key)||ne(e.yr,t.yr)}static dr(e,t){return ne(e.yr,t.yr)||H.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gd{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new Se(_e.Tr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new ud(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.Sr=this.Sr.add(new _e(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Dr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new _e(t,0),i=new _e(t,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],a=>{const l=this.br(a.yr);s.push(l)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Se(ne);return t.forEach(i=>{const s=new _e(i,0),a=new _e(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,a],l=>{r=r.add(l.yr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const a=new _e(new H(s),0);let l=new Se(ne);return this.Sr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.yr)),!0)},a),D.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.br(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){de(this.vr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return D.forEach(t.mutations,i=>{const s=new _e(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,t){const r=new _e(t,0),i=this.Sr.firstAfterOrEqual(r);return D.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e){this.Fr=e,this.docs=function(){return new ce(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Fr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():Ce.newInvalidDocument(t))}getEntries(e,t){let r=St();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ce.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=St();const a=t.path,l=new H(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Rh(Ph(f),r)<=0||(i.has(f.key)||Yr(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,t,r,i){Q()}Mr(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new qd(this)}getSize(e){return D.resolve(this.size)}}class qd extends Md{constructor(e){super(),this.ur=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e){this.persistence=e,this.Or=new un(t=>ps(t),gs),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new ws,this.targetCount=0,this.Br=an.Ln()}forEachTarget(e,t){return this.Or.forEach((r,i)=>t(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Nr&&(this.Nr=t),D.resolve()}Qn(e){this.Or.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Br=new an(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Qn(t),D.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Lr.mr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Or.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Or.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.Or.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.Lr.Ar(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.Lr.Vr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Lr.mr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Lr.pr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.Lr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,t){this.kr={},this.overlays={},this.qr=new us(0),this.Qr=!1,this.Qr=!0,this.Kr=new zd,this.referenceDelegate=e(this),this.$r=new Hd(this),this.indexManager=new Od,this.remoteDocumentCache=function(i){return new jd(i)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new Vd(t),this.Wr=new Bd(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Ud,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.kr[e.toKey()];return r||(r=new Gd(t,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,t,r){G("MemoryPersistence","Starting transaction:",e);const i=new Wd(this.qr.next());return this.referenceDelegate.Gr(),r(i).next(s=>this.referenceDelegate.zr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}jr(e,t){return D.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,t)))}}class Wd extends xh{constructor(e){super(),this.currentSequenceNumber=e}}class Ts{constructor(e){this.persistence=e,this.Hr=new ws,this.Jr=null}static Yr(e){return new Ts(e)}get Zr(){if(this.Jr)return this.Jr;throw Q()}addReference(e,t,r){return this.Hr.addReference(r,t),this.Zr.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Hr.removeReference(r,t),this.Zr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.Zr.add(t.toString()),D.resolve()}removeTarget(e,t){this.Hr.mr(t.targetId).forEach(i=>this.Zr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Zr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Gr(){this.Jr=new Set}zr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Zr,r=>{const i=H.fromPath(r);return this.Xr(e,i).next(s=>{s||t.removeEntry(i,K.min())})}).next(()=>(this.Jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Xr(e,t).next(r=>{r?this.Zr.delete(t.toString()):this.Zr.add(t.toString())})}Ur(e){return 0}Xr(e,t){return D.or([()=>D.resolve(this.Hr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.jr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Ki=r,this.$i=i}static Ui(e,t){let r=ee(),i=ee();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Es(e,t.fromCache,r,i)}}/**
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
 */class Kd{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Qd{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return nu()?8:kh(eu())>0?6:4}()}initialize(e,t){this.Hi=e,this.indexManager=t,this.Wi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Ji(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Yi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Kd;return this.Zi(e,t,a).next(l=>{if(s.result=l,this.Gi)return this.Xi(e,t,a,l.size)})}).next(()=>s.result)}Xi(e,t,r,i){return r.documentReadCount<this.zi?(Dn()<=Z.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Yt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),D.resolve()):(Dn()<=Z.DEBUG&&G("QueryEngine","Query:",Yt(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ji*i?(Dn()<=Z.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Yt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ye(t))):D.resolve())}Ji(e,t){if(qo(t))return D.resolve(null);let r=Ye(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Ki(t,null,"F"),r=Ye(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=ee(...s);return this.Hi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.es(t,l);return this.ts(t,d,a,u.readTime)?this.Ji(e,Ki(t,null,"F")):this.ns(e,d,t,u)}))})))}Yi(e,t,r,i){return qo(t)||i.isEqual(K.min())?D.resolve(null):this.Hi.getDocuments(e,r).next(s=>{const a=this.es(t,s);return this.ts(t,a,r,i)?D.resolve(null):(Dn()<=Z.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yt(t)),this.ns(e,a,t,bh(i,-1)).next(l=>l))})}es(e,t){let r=new Se(ul(e));return t.forEach((i,s)=>{Yr(e,s)&&(r=r.add(s))}),r}ts(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zi(e,t,r){return Dn()<=Z.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Yt(t)),this.Hi.getDocumentsMatchingQuery(e,t,Tt.min(),r)}ns(e,t,r,i){return this.Hi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,t,r,i){this.persistence=e,this.rs=t,this.serializer=i,this.ss=new ce(ne),this.os=new un(s=>ps(s),gs),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Fd(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ss))}}function Xd(n,e,t,r){return new Yd(n,e,t,r)}async function Pl(n,e){const t=J(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.cs(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=ee();for(const d of i){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(d=>({ls:d,removedBatchIds:a,addedBatchIds:l}))})})}function Rl(n){const e=J(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.$r.getLastRemoteSnapshotVersion(t))}function Jd(n,e){const t=J(n),r=e.snapshotVersion;let i=t.ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.us.newChangeBuffer({trackRemovals:!0});i=t.ss;const l=[];e.targetChanges.forEach((f,g)=>{const w=i.get(g);if(!w)return;l.push(t.$r.removeMatchingKeys(s,f.removedDocuments,g).next(()=>t.$r.addMatchingKeys(s,f.addedDocuments,g)));let S=w.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(Ie.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(g,S),function(R,C,k){return R.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(w,S,f)&&l.push(t.$r.updateTargetData(s,S))});let u=St(),d=ee();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Zd(s,a,e.documentUpdates).next(f=>{u=f.hs,d=f.Ps})),!r.isEqual(K.min())){const f=t.$r.getLastRemoteSnapshotVersion(s).next(g=>t.$r.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return D.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(t.ss=i,s))}function Zd(n,e,t){let r=ee(),i=ee();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=St();return t.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(K.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):G("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{hs:a,Ps:i}})}function ef(n,e){const t=J(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.$r.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):t.$r.allocateTargetId(r).next(a=>(i=new pt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.$r.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ss=t.ss.insert(r.targetId,r),t.os.set(e,r.targetId)),r})}async function Zi(n,e,t){const r=J(n),i=r.ss.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Jn(a))throw a;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ss=r.ss.remove(e),r.os.delete(i.target)}function ta(n,e,t){const r=J(n);let i=K.min(),s=ee();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const g=J(u),w=g.os.get(f);return w!==void 0?D.resolve(g.ss.get(w)):g.$r.getTargetData(d,f)}(r,a,Ye(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.rs.getDocumentsMatchingQuery(a,e,t?i:K.min(),t?s:ee())).next(l=>(tf(r,Qh(e),l),{documents:l,Is:s})))}function tf(n,e,t){let r=n._s.get(e)||K.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n._s.set(e,r)}class na{constructor(){this.activeTargetIds=td()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nf{constructor(){this.io=new na,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,t,r){this.so[e]=t}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new na,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class rf{oo(e){}shutdown(){}}/**
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
 */class ra{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ar=null;function Ai(){return Ar===null?Ar=function(){return 268435456+Math.round(2147483648*Math.random())}():Ar++,"0x"+Ar.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe="WebChannelConnection";class af extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+t.host,this.Do=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get vo(){return!1}Fo(t,r,i,s,a){const l=Ai(),u=this.Mo(t,r.toUriEncodedString());G("RestConnection",`Sending RPC '${t}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(d,s,a),this.Oo(t,u,d,i).then(f=>(G("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw nn("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}No(t,r,i,s,a,l){return this.Fo(t,r,i,s,a)}xo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+cn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}Mo(t,r){const i=sf[t];return`${this.bo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,t,r,i){const s=Ai();return new Promise((a,l)=>{const u=new Ka;u.setWithCredentials(!0),u.listenOnce(Ya.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case xr.NO_ERROR:const f=u.getResponseJson();G(Pe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case xr.TIMEOUT:G(Pe,`RPC '${e}' ${s} timed out`),l(new q(F.DEADLINE_EXCEEDED,"Request time out"));break;case xr.HTTP_ERROR:const g=u.getStatus();if(G(Pe,`RPC '${e}' ${s} failed with status:`,g,"response text:",u.getResponseText()),g>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const S=w==null?void 0:w.error;if(S&&S.status&&S.message){const b=function(C){const k=C.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(k)>=0?k:F.UNKNOWN}(S.status);l(new q(b,S.message))}else l(new q(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(F.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{G(Pe,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);G(Pe,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",d,r,15)})}Lo(e,t,r){const i=Ai(),s=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Za(),l=Ja(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.xmlHttpFactory=new Qa({})),this.xo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=s.join("");G(Pe,`Creating RPC '${e}' stream ${i}: ${f}`,u);const g=a.createWebChannel(f,u);let w=!1,S=!1;const b=new of({Po:C=>{S?G(Pe,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(w||(G(Pe,`Opening RPC '${e}' stream ${i} transport.`),g.open(),w=!0),G(Pe,`RPC '${e}' stream ${i} sending:`,C),g.send(C))},Io:()=>g.close()}),R=(C,k,L)=>{C.listen(k,V=>{try{L(V)}catch(O){setTimeout(()=>{throw O},0)}})};return R(g,Mn.EventType.OPEN,()=>{S||(G(Pe,`RPC '${e}' stream ${i} transport opened.`),b.po())}),R(g,Mn.EventType.CLOSE,()=>{S||(S=!0,G(Pe,`RPC '${e}' stream ${i} transport closed`),b.wo())}),R(g,Mn.EventType.ERROR,C=>{S||(S=!0,nn(Pe,`RPC '${e}' stream ${i} transport errored:`,C),b.wo(new q(F.UNAVAILABLE,"The operation could not be completed")))}),R(g,Mn.EventType.MESSAGE,C=>{var k;if(!S){const L=C.data[0];de(!!L);const V=L,O=V.error||((k=V[0])===null||k===void 0?void 0:k.error);if(O){G(Pe,`RPC '${e}' stream ${i} received error:`,O);const U=O.status;let $=function(m){const y=ue[m];if(y!==void 0)return vl(y)}(U),A=O.message;$===void 0&&($=F.INTERNAL,A="Unknown error status: "+U+" with message "+O.message),S=!0,b.wo(new q($,A)),g.close()}else G(Pe,`RPC '${e}' stream ${i} received:`,L),b.So(L)}}),R(l,Xa.STAT_EVENT,C=>{C.stat===Gi.PROXY?G(Pe,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Gi.NOPROXY&&G(Pe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{b.yo()},0),b}}function bi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(n){return new yd(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ai=e,this.timerId=t,this.Bo=r,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const t=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,t-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(e,t,r,i,s,a,l,u){this.ai=e,this.jo=r,this.Ho=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new xl(e,t)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,t){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():t&&t.code===F.RESOURCE_EXHAUSTED?(ot(t.toString()),ot("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):t&&t.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(t)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),t=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Jo===t&&this.h_(r,i)},r=>{e(()=>{const i=new q(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(i)})})}h_(e,t){const r=this.l_(this.Jo);this.stream=this.I_(e,t),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{r(()=>this.P_(i))}),this.stream.onMessage(i=>{r(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return t=>{this.ai.enqueueAndForget(()=>this.Jo===e?t():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cf extends lf{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}I_(e,t){return this.connection.Lo("Listen",e,t)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const t=Id(this.serializer,e),r=function(s){if(!("targetChange"in s))return K.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?K.min():a.readTime?Zt(a.readTime):K.min()}(e);return this.listener.E_(t,r)}d_(e){const t={};t.database=ea(this.serializer),t.addTarget=function(s,a){let l;const u=a.target;if(l=Wi(u)?{documents:Ad(s,u)}:{query:bd(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Td(s,a.resumeToken);const d=Xi(s,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(K.min())>0){l.readTime=wd(s,a.snapshotVersion.toTimestamp());const d=Xi(s,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=Rd(this.serializer,e);r&&(t.labels=r),this.__(t)}A_(e){const t={};t.database=ea(this.serializer),t.removeTarget=e,this.__(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new q(F.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,t,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Fo(e,Ji(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(F.UNKNOWN,s.toString())})}No(e,t,r,i,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.No(e,Ji(t,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new q(F.UNKNOWN,a.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class hf{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(ot(t),this.b_=!1):G("OnlineStateTracker",t)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(a=>{r.enqueueAndForget(async()=>{tr(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=J(u);d.N_.add(4),await er(d),d.k_.set("Unknown"),d.N_.delete(4),await ei(d)}(this))})}),this.k_=new hf(r,i)}}async function ei(n){if(tr(n))for(const e of n.L_)await e(!0)}async function er(n){for(const e of n.L_)await e(!1)}function kl(n,e){const t=J(n);t.O_.has(e.targetId)||(t.O_.set(e.targetId,e),bs(t)?As(t):hn(t).n_()&&Is(t,e))}function Ss(n,e){const t=J(n),r=hn(t);t.O_.delete(e),r.n_()&&Vl(t,e),t.O_.size===0&&(r.n_()?r.s_():tr(t)&&t.k_.set("Unknown"))}function Is(n,e){if(n.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}hn(n).d_(e)}function Vl(n,e){n.q_.xe(e),hn(n).A_(e)}function As(n){n.q_=new gd({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.O_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),hn(n).start(),n.k_.D_()}function bs(n){return tr(n)&&!hn(n).t_()&&n.O_.size>0}function tr(n){return J(n).N_.size===0}function Dl(n){n.q_=void 0}async function ff(n){n.k_.set("Online")}async function pf(n){n.O_.forEach((e,t)=>{Is(n,e)})}async function gf(n,e){Dl(n),bs(n)?(n.k_.F_(e),As(n)):n.k_.set("Unknown")}async function mf(n,e,t){if(n.k_.set("Online"),e instanceof wl&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.O_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.O_.delete(l),i.q_.removeTarget(l))}(n,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ia(n,r)}else if(e instanceof Vr?n.q_.Ke(e):e instanceof yl?n.q_.He(e):n.q_.We(e),!t.isEqual(K.min()))try{const r=await Rl(n.localStore);t.compareTo(r)>=0&&await function(s,a){const l=s.q_.rt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.O_.get(d);f&&s.O_.set(d,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const f=s.O_.get(u);if(!f)return;s.O_.set(u,f.withResumeToken(Ie.EMPTY_BYTE_STRING,f.snapshotVersion)),Vl(s,u);const g=new pt(f.target,u,d,f.sequenceNumber);Is(s,g)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await ia(n,r)}}async function ia(n,e,t){if(!Jn(e))throw e;n.N_.add(1),await er(n),n.k_.set("Offline"),t||(t=()=>Rl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await t(),n.N_.delete(1),await ei(n)})}async function sa(n,e){const t=J(n);t.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=tr(t);t.N_.add(3),await er(t),r&&t.k_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.N_.delete(3),await ei(t)}async function _f(n,e){const t=J(n);e?(t.N_.delete(2),await ei(t)):e||(t.N_.add(2),await er(t),t.k_.set("Unknown"))}function hn(n){return n.Q_||(n.Q_=function(t,r,i){const s=J(t);return s.y_(),new cf(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{To:ff.bind(null,n),Ao:pf.bind(null,n),Vo:gf.bind(null,n),E_:mf.bind(null,n)}),n.L_.push(async e=>{e?(n.Q_.i_(),bs(n)?As(n):n.k_.set("Unknown")):(await n.Q_.stop(),Dl(n))})),n.Q_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new Ps(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ol(n,e){if(ot("AsyncQueue",`${e}: ${n}`),Jn(n))return new q(F.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this.comparator=e?(t,r)=>e(t,r)||H.comparator(t.key,r.key):(t,r)=>H.comparator(t.key,r.key),this.keyedMap=Nn(),this.sortedSet=new ce(this.comparator)}static emptySet(e){return new en(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof en)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new en;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.U_=new ce(H.comparator)}track(e){const t=e.doc.key,r=this.U_.get(t);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(t,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(t):e.type===1&&r.type===2?this.U_=this.U_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):Q():this.U_=this.U_.insert(t,e)}W_(){const e=[];return this.U_.inorderTraversal((t,r)=>{e.push(r)}),e}}class ln{constructor(e,t,r,i,s,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new ln(e,t,en.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class yf{constructor(){this.queries=aa(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(t,r){const i=J(t),s=i.queries;i.queries=aa(),s.forEach((a,l)=>{for(const u of l.z_)u.onError(r)})})(this,new q(F.ABORTED,"Firestore shutting down"))}}function aa(){return new un(n=>cl(n),Qr)}async function Ll(n,e){const t=J(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.j_()&&e.H_()&&(r=2):(s=new vf,r=e.H_()?0:1);try{switch(r){case 0:s.G_=await t.onListen(i,!0);break;case 1:s.G_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=Ol(a,`Initialization of query '${Yt(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.z_.push(e),e.Y_(t.onlineState),s.G_&&e.Z_(s.G_)&&Rs(t)}async function Ml(n,e){const t=J(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.z_.indexOf(e);a>=0&&(s.z_.splice(a,1),s.z_.length===0?i=e.H_()?0:1:!s.j_()&&e.H_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function wf(n,e){const t=J(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.z_)l.Z_(i)&&(r=!0);a.G_=i}}r&&Rs(t)}function Tf(n,e,t){const r=J(n),i=r.queries.get(e);if(i)for(const s of i.z_)s.onError(t);r.queries.delete(e)}function Rs(n){n.J_.forEach(e=>{e.next()})}var es,la;(la=es||(es={})).X_="default",la.Cache="cache";class Nl{constructor(e,t,r){this.query=e,this.ea=t,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ln(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ta?this.ra(e)&&(this.ea.next(e),t=!0):this.ia(e,this.onlineState)&&(this.sa(e),t=!0),this.na=e,t}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let t=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),t=!0),t}ia(e,t){if(!e.fromCache||!this.H_())return!0;const r=t!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const t=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}sa(e){e=ln.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==es.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e){this.key=e}}class Bl{constructor(e){this.key=e}}class Ef{constructor(e,t){this.query=e,this.Ia=t,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=ee(),this.mutatedKeys=ee(),this.da=ul(e),this.Aa=new en(this.da)}get Ra(){return this.Ia}Va(e,t){const r=t?t.ma:new oa,i=t?t.Aa:this.Aa;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const w=i.get(f),S=Yr(this.query,g)?g:null,b=!!w&&this.mutatedKeys.has(w.key),R=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let C=!1;w&&S?w.data.isEqual(S.data)?b!==R&&(r.track({type:3,doc:S}),C=!0):this.fa(w,S)||(r.track({type:2,doc:S}),C=!0,(u&&this.da(S,u)>0||d&&this.da(S,d)<0)&&(l=!0)):!w&&S?(r.track({type:0,doc:S}),C=!0):w&&!S&&(r.track({type:1,doc:w}),C=!0,(u||d)&&(l=!0)),C&&(S?(a=a.add(S),s=R?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Aa:a,ma:r,ts:l,mutatedKeys:s}}fa(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const a=e.ma.W_();a.sort((f,g)=>function(S,b){const R=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return R(S)-R(b)}(f.type,g.type)||this.da(f.doc,g.doc)),this.ga(r),i=i!=null&&i;const l=t&&!i?this.pa():[],u=this.Ea.size===0&&this.current&&!i?1:0,d=u!==this.Ta;return this.Ta=u,a.length!==0||d?{snapshot:new ln(this.query,e.Aa,s,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:l}:{ya:l}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new oa,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(t=>this.Ia=this.Ia.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ia=this.Ia.delete(t)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=ee(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const t=[];return e.forEach(r=>{this.Ea.has(r)||t.push(new Bl(r))}),this.Ea.forEach(r=>{e.has(r)||t.push(new Fl(r))}),t}Sa(e){this.Ia=e.Is,this.Ea=ee();const t=this.Va(e.documents);return this.applyChanges(t,!0)}ba(){return ln.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class Sf{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class If{constructor(e){this.key=e,this.Da=!1}}class Af{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.va=new un(l=>cl(l),Qr),this.Fa=new Map,this.Ma=new Set,this.xa=new ce(H.comparator),this.Oa=new Map,this.Na=new ws,this.La={},this.Ba=new Map,this.ka=an.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function bf(n,e,t=!0){const r=ql(n);let i;const s=r.va.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ba()):i=await Ul(r,e,t,!0),i}async function Pf(n,e){const t=ql(n);await Ul(t,e,!0,!1)}async function Ul(n,e,t,r){const i=await ef(n.localStore,Ye(e)),s=i.targetId,a=t?n.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await Rf(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&kl(n.remoteStore,i),l}async function Rf(n,e,t,r,i){n.Qa=(g,w,S)=>async function(R,C,k,L){let V=C.view.Va(k);V.ts&&(V=await ta(R.localStore,C.query,!1).then(({documents:A})=>C.view.Va(A,V)));const O=L&&L.targetChanges.get(C.targetId),U=L&&L.targetMismatches.get(C.targetId)!=null,$=C.view.applyChanges(V,R.isPrimaryClient,O,U);return ua(R,C.targetId,$.ya),$.snapshot}(n,g,w,S);const s=await ta(n.localStore,e,!0),a=new Ef(e,s.Is),l=a.Va(s.documents),u=Zn.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,u);ua(n,t,d.ya);const f=new Sf(e,t,a);return n.va.set(e,f),n.Fa.has(t)?n.Fa.get(t).push(e):n.Fa.set(t,[e]),d.snapshot}async function Cf(n,e,t){const r=J(n),i=r.va.get(e),s=r.Fa.get(i.targetId);if(s.length>1)return r.Fa.set(i.targetId,s.filter(a=>!Qr(a,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Zi(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Ss(r.remoteStore,i.targetId),ts(r,i.targetId)}).catch(cs)):(ts(r,i.targetId),await Zi(r.localStore,i.targetId,!0))}async function xf(n,e){const t=J(n),r=t.va.get(e),i=t.Fa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Ss(t.remoteStore,r.targetId))}async function zl(n,e){const t=J(n);try{const r=await Jd(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Oa.get(s);a&&(de(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Da=!0:i.modifiedDocuments.size>0?de(a.Da):i.removedDocuments.size>0&&(de(a.Da),a.Da=!1))}),await jl(t,r,e)}catch(r){await cs(r)}}function ca(n,e,t){const r=J(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.va.forEach((s,a)=>{const l=a.view.Y_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=J(a);u.onlineState=l;let d=!1;u.queries.forEach((f,g)=>{for(const w of g.z_)w.Y_(l)&&(d=!0)}),d&&Rs(u)}(r.eventManager,e),i.length&&r.Ca.E_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function kf(n,e,t){const r=J(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Oa.get(e),s=i&&i.key;if(s){let a=new ce(H.comparator);a=a.insert(s,Ce.newNoDocument(s,K.min()));const l=ee().add(s),u=new Zr(K.min(),new Map,new ce(ne),a,l);await zl(r,u),r.xa=r.xa.remove(s),r.Oa.delete(e),Cs(r)}else await Zi(r.localStore,e,!1).then(()=>ts(r,e,t)).catch(cs)}function ts(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Fa.get(e))n.va.delete(r),t&&n.Ca.Ka(r,t);n.Fa.delete(e),n.isPrimaryClient&&n.Na.mr(e).forEach(r=>{n.Na.containsKey(r)||Gl(n,r)})}function Gl(n,e){n.Ma.delete(e.path.canonicalString());const t=n.xa.get(e);t!==null&&(Ss(n.remoteStore,t),n.xa=n.xa.remove(e),n.Oa.delete(t),Cs(n))}function ua(n,e,t){for(const r of t)r instanceof Fl?(n.Na.addReference(r.key,e),Vf(n,r)):r instanceof Bl?(G("SyncEngine","Document no longer in limbo: "+r.key),n.Na.removeReference(r.key,e),n.Na.containsKey(r.key)||Gl(n,r.key)):Q()}function Vf(n,e){const t=e.key,r=t.path.canonicalString();n.xa.get(t)||n.Ma.has(r)||(G("SyncEngine","New document in limbo: "+t),n.Ma.add(r),Cs(n))}function Cs(n){for(;n.Ma.size>0&&n.xa.size<n.maxConcurrentLimboResolutions;){const e=n.Ma.values().next().value;n.Ma.delete(e);const t=new H(oe.fromString(e)),r=n.ka.next();n.Oa.set(r,new If(t)),n.xa=n.xa.insert(t,r),kl(n.remoteStore,new pt(Ye(ms(t.path)),r,"TargetPurposeLimboResolution",us.oe))}}async function jl(n,e,t){const r=J(n),i=[],s=[],a=[];r.va.isEmpty()||(r.va.forEach((l,u)=>{a.push(r.Qa(u,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const g=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){i.push(d);const g=Es.Ui(u.targetId,d);s.push(g)}}))}),await Promise.all(a),r.Ca.E_(i),await async function(u,d){const f=J(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>D.forEach(d,w=>D.forEach(w.Ki,S=>f.persistence.referenceDelegate.addReference(g,w.targetId,S)).next(()=>D.forEach(w.$i,S=>f.persistence.referenceDelegate.removeReference(g,w.targetId,S)))))}catch(g){if(!Jn(g))throw g;G("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const w=g.targetId;if(!g.fromCache){const S=f.ss.get(w),b=S.snapshotVersion,R=S.withLastLimboFreeSnapshotVersion(b);f.ss=f.ss.insert(w,R)}}}(r.localStore,s))}async function Df(n,e){const t=J(n);if(!t.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await Pl(t.localStore,e);t.currentUser=e,function(s,a){s.Ba.forEach(l=>{l.forEach(u=>{u.reject(new q(F.CANCELLED,a))})}),s.Ba.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await jl(t,r.ls)}}function Of(n,e){const t=J(n),r=t.Oa.get(e);if(r&&r.Da)return ee().add(r.key);{let i=ee();const s=t.Fa.get(e);if(!s)return i;for(const a of s){const l=t.va.get(a);i=i.unionWith(l.view.Ra)}return i}}function ql(n){const e=J(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=zl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Of.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=kf.bind(null,e),e.Ca.E_=wf.bind(null,e.eventManager),e.Ca.Ka=Tf.bind(null,e.eventManager),e}class ha{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Cl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Xd(this.persistence,new Qd,e.initialUser,this.serializer)}createPersistence(e){return new $d(Ts.Yr,this.serializer)}createSharedClientState(e){return new nf}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Lf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ca(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Df.bind(null,this.syncEngine),await _f(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new yf}()}createDatastore(e){const t=Cl(e.databaseInfo.databaseId),r=function(s){return new af(s)}(e.databaseInfo);return function(s,a,l,u){return new uf(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,l){return new df(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>ca(this.syncEngine,t,0),function(){return ra.D()?new ra:new rf}())}createSyncEngine(e,t){return function(i,s,a,l,u,d,f){const g=new Af(i,s,a,l,u,d);return f&&(g.qa=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=J(i);G("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await er(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Hl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):ot("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Re.UNAUTHENTICATED,this.clientId=tl.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{G("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(G("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(F.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ol(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Pi(n,e){n.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Pl(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function da(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Ff(n);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>sa(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>sa(e.remoteStore,i)),n._onlineComponents=e}function Nf(n){return n.name==="FirebaseError"?n.code===F.FAILED_PRECONDITION||n.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Ff(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await Pi(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Nf(t))throw t;nn("Error using user provided cache. Falling back to memory cache: "+t),await Pi(n,new ha)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await Pi(n,new ha);return n._offlineComponents}async function Bf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await da(n,n._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await da(n,new Lf))),n._onlineComponents}async function $l(n){const e=await Bf(n),t=e.eventManager;return t.onListen=bf.bind(null,e.syncEngine),t.onUnlisten=Cf.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Pf.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=xf.bind(null,e.syncEngine),t}function Uf(n,e,t={}){const r=new yt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,d){const f=new Hl({next:w=>{a.enqueueAndForget(()=>Ml(s,g));const S=w.docs.has(l);!S&&w.fromCache?d.reject(new q(F.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&w.fromCache&&u&&u.source==="server"?d.reject(new q(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),g=new Nl(ms(l.path),f,{includeMetadataChanges:!0,oa:!0});return Ll(s,g)}(await $l(n),n.asyncQueue,e,t,r)),r.promise}function zf(n,e,t={}){const r=new yt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,d){const f=new Hl({next:w=>{a.enqueueAndForget(()=>Ml(s,g)),w.fromCache&&u.source==="server"?d.reject(new q(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),g=new Nl(l,f,{includeMetadataChanges:!0,oa:!0});return Ll(s,g)}(await $l(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Wl(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(n,e,t){if(!t)throw new q(F.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Gf(n,e,t,r){if(e===!0&&r===!0)throw new q(F.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function pa(n){if(!H.isDocumentKey(n))throw new q(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ga(n){if(H.isDocumentKey(n))throw new q(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function jf(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Q()}function Yn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new q(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=jf(n);throw new q(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Gf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wl((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ti{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ma({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ma(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _h;switch(r.type){case"firstParty":return new Th(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=fa.get(t);r&&(G("ComponentProvider","Removing Datastore"),fa.delete(t),r.terminate())}(this),Promise.resolve()}}function qf(n,e,t,r={}){var i;const s=(n=Yn(n,ti))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&nn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Re.MOCK_USER;else{l=Ma(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new q(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Re(d)}n._authCredentials=new vh(new el(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ni(this.firestore,e,this._query)}}class Xe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xe(this.firestore,e,this._key)}}class wt extends ni{constructor(e,t,r){super(e,t,ms(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xe(this.firestore,null,new H(e))}withConverter(e){return new wt(this.firestore,e,this._path)}}function Hf(n,e,...t){if(n=Xn(n),Kl("collection","path",e),n instanceof ti){const r=oe.fromString(e,...t);return ga(r),new wt(n,null,r)}{if(!(n instanceof Xe||n instanceof wt))throw new q(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return ga(r),new wt(n.firestore,null,r)}}function $f(n,e,...t){if(n=Xn(n),arguments.length===1&&(e=tl.newId()),Kl("doc","path",e),n instanceof ti){const r=oe.fromString(e,...t);return pa(r),new Xe(n,null,new H(r))}{if(!(n instanceof Xe||n instanceof wt))throw new q(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return pa(r),new Xe(n.firestore,n instanceof wt?n.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new xl(this,"async_queue_retry"),this.Tu=()=>{const t=bi();t&&G("AsyncQueue","Visibility state changed to "+t.visibilityState),this.e_.zo()};const e=bi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const t=bi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const t=new yt;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!Jn(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const t=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw ot("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=t,t}enqueueAfterDelay(e,t,r){this.Eu(),this.Iu.indexOf(e)>-1&&(t=0);const i=Ps.createAndSchedule(this,e,t,r,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&Q()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const t of this.cu)if(t.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.cu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const t=this.cu.indexOf(e);this.cu.splice(t,1)}}class xs extends ti{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new Wf}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Yl(this),this._firestoreClient.terminate()}}function Kf(n,e){const t=typeof n=="object"?n:qa(),r=typeof n=="string"?n:"(default)",i=za(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Oa("firestore");s&&qf(i,...s)}return i}function Ql(n){return n._firestoreClient||Yl(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Yl(n){var e,t,r;const i=n._freezeSettings(),s=function(l,u,d,f){return new Oh(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Wl(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Mf(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Gr(Ie.fromBase64String(e))}catch(t){throw new q(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Gr(Ie.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new q(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new q(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new q(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}const Yf=new RegExp("[~\\*/\\[\\]]");function Xf(n,e,t){if(e.search(Yf)>=0)throw _a(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new Xl(...e.split("."))._internalPath}catch{throw _a(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function _a(n,e,t,r,i){let s=`Function ${e}() called with invalid data`;s+=". ";let a="";return new q(F.INVALID_ARGUMENT,s+n+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Jf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Zl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Jf extends Jl{data(){return super.data()}}function Zl(n,e){return typeof e=="string"?Xf(n,e):e instanceof Xl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new q(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ep{convertValue(e,t="none"){switch(Mt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Lt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Q()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Wr(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Qf(he(e.latitude),he(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ds(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Wn(e));default:return null}}convertTimestamp(e){const t=Et(e);return new Oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=oe.fromString(e);de(bl(r));const i=new Kn(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(t)||ot(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ec extends Jl{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Dr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Zl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Dr extends ec{data(e={}){return super.data(e)}}class tp{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Bn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Dr(this._firestore,this._userDataWriter,r.key,r,new Bn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new q(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new Dr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Bn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Dr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Bn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:np(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function np(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp(n){n=Yn(n,Xe);const e=Yn(n.firestore,xs);return Uf(Ql(e),n._key).then(t=>sp(e,n,t))}class tc extends ep{constructor(e){super(),this.firestore=e}convertBytes(e){return new Gr(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Xe(this.firestore,null,t)}}function ip(n){n=Yn(n,ni);const e=Yn(n.firestore,xs),t=Ql(e),r=new tc(e);return Zf(n._query),zf(t,n._query).then(i=>new tp(e,r,n,i))}function sp(n,e,t){const r=t.docs.get(e._key),i=new tc(n);return new ec(n,i,e._key,r,new Bn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){cn=i})(Ga),qn(new tn("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new xs(new yh(r.getProvider("auth-internal")),new Sh(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new q(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kn(d.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),vt(Lo,"4.6.5",e),vt(Lo,"4.6.5","esm2017")})();async function ns(n,e,t=null){const r=Kf(n);let i=t?void 0:[];if(t){const s=$f(r,e,t),a=await rp(s);a.exists()&&(i=a.data())}else(await ip(Hf(r,e))).forEach(a=>{i.push(a.data())});return i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc="firebasestorage.googleapis.com",rc="storageBucket",op=2*60*1e3,ap=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends Ft{constructor(e,t,r=0){super(Ri(e),`Firebase Storage: ${t} (${Ri(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ri(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ve;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ve||(ve={}));function Ri(n){return"storage/"+n}function ic(){const n="An unknown error occurred, please check the error payload for server response.";return new ye(ve.UNKNOWN,n)}function lp(n){return new ye(ve.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function cp(n){return new ye(ve.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function up(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ye(ve.UNAUTHENTICATED,n)}function hp(){return new ye(ve.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function dp(n){return new ye(ve.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function fp(){return new ye(ve.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function pp(){return new ye(ve.CANCELED,"User canceled the upload/download.")}function gp(n){return new ye(ve.INVALID_URL,"Invalid URL '"+n+"'.")}function mp(n){return new ye(ve.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function _p(){return new ye(ve.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+rc+"' property when initializing the app?")}function vp(){return new ye(ve.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function rs(n){return new ye(ve.INVALID_ARGUMENT,n)}function sc(){return new ye(ve.APP_DELETED,"The Firebase app was deleted.")}function yp(n){return new ye(ve.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function On(n){throw new ye(ve.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Ue.makeFromUrl(e,t)}catch{return new Ue(e,"")}if(r.path==="")return r;throw mp(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+i+a,"i"),u={bucket:1,path:3};function d(O){O.path_=decodeURIComponent(O.path)}const f="v[A-Za-z0-9_]+",g=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",S=new RegExp(`^https?://${g}/${f}/b/${i}/o${w}`,"i"),b={bucket:1,path:3},R=t===nc?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",k=new RegExp(`^https?://${R}/${i}/${C}`,"i"),V=[{regex:l,indices:u,postModify:s},{regex:S,indices:b,postModify:d},{regex:k,indices:{bucket:1,path:2},postModify:d}];for(let O=0;O<V.length;O++){const U=V[O],$=U.regex.exec(e);if($){const A=$[U.indices.bucket];let v=$[U.indices.path];v||(v=""),r=new Ue(A,v),U.postModify(r);break}}if(r==null)throw gp(e);return r}}class wp{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tp(n,e,t){let r=1,i=null,s=null,a=!1,l=0;function u(){return l===2}let d=!1;function f(...C){d||(d=!0,e.apply(null,C))}function g(C){i=setTimeout(()=>{i=null,n(S,u())},C)}function w(){s&&clearTimeout(s)}function S(C,...k){if(d){w();return}if(C){w(),f.call(null,C,...k);return}if(u()||a){w(),f.call(null,C,...k);return}r<64&&(r*=2);let V;l===1?(l=2,V=0):V=(r+Math.random())*1e3,g(V)}let b=!1;function R(C){b||(b=!0,w(),!d&&(i!==null?(C||(l=2),clearTimeout(i),g(0)):C||(l=1)))}return g(0),s=setTimeout(()=>{a=!0,R(!0)},t),R}function Ep(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(n){return n!==void 0}function Ip(n){return typeof n=="object"&&!Array.isArray(n)}function oc(n){return typeof n=="string"||n instanceof String}function va(n,e,t,r){if(r<e)throw rs(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw rs(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function lc(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vt;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Vt||(Vt={}));/**
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
 */function Ap(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e,t,r,i,s,a,l,u,d,f,g,w=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=g,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,b)=>{this.resolve_=S,this.reject_=b,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new br(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const l=s.getErrorCode()===Vt.NO_ERROR,u=s.getStatus();if(!l||Ap(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Vt.ABORT;r(!1,new br(!1,null,f));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new br(d,s))})},t=(r,i)=>{const s=this.resolve_,a=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Sp(u)?s(u):s()}catch(u){a(u)}else if(l!==null){const u=ic();u.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,u)):a(u)}else if(i.canceled){const u=this.appDelete_?sc():pp();a(u)}else{const u=fp();a(u)}};this.canceled_?t(!1,new br(!1,null,!0)):this.backoffId_=Tp(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ep(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class br{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Pp(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Rp(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Cp(n,e){e&&(n["X-Firebase-GMPID"]=e)}function xp(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function kp(n,e,t,r,i,s,a=!0){const l=lc(n.urlParams),u=n.url+l,d=Object.assign({},n.headers);return Cp(d,e),Pp(d,t),Rp(d,s),xp(d,r),new bp(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(n){let e;try{e=JSON.parse(n)}catch{return null}return Ip(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vp(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Dp(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function uc(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Op(n,e){return e}class ke{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||Op}}let Pr=null;function Lp(n){return!oc(n)||n.length<2?n:uc(n)}function Mp(){if(Pr)return Pr;const n=[];n.push(new ke("bucket")),n.push(new ke("generation")),n.push(new ke("metageneration")),n.push(new ke("name","fullPath",!0));function e(s,a){return Lp(a)}const t=new ke("name");t.xform=e,n.push(t);function r(s,a){return a!==void 0?Number(a):a}const i=new ke("size");return i.xform=r,n.push(i),n.push(new ke("timeCreated")),n.push(new ke("updated")),n.push(new ke("md5Hash",null,!0)),n.push(new ke("cacheControl",null,!0)),n.push(new ke("contentDisposition",null,!0)),n.push(new ke("contentEncoding",null,!0)),n.push(new ke("contentLanguage",null,!0)),n.push(new ke("contentType",null,!0)),n.push(new ke("metadata","customMetadata",!0)),Pr=n,Pr}function Np(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new Ue(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function Fp(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const a=t[s];r[a.local]=a.xform(r,e[a.server])}return Np(r,n),r}function Bp(n,e,t){const r=cc(e);return r===null?null:Fp(n,r,t)}function Up(n,e,t,r){const i=cc(e);if(i===null||!oc(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const a=encodeURIComponent;return s.split(",").map(d=>{const f=n.bucket,g=n.fullPath,w="/b/"+a(f)+"/o/"+a(g),S=ac(w,t,r),b=lc({alt:"media",token:d});return S+b})[0]}class zp{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(n){if(!n)throw ic()}function jp(n,e){function t(r,i){const s=Bp(n,i,e);return Gp(s!==null),Up(s,i,n.host,n._protocol)}return t}function qp(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=hp():i=up():t.getStatus()===402?i=cp(n.bucket):t.getStatus()===403?i=dp(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Hp(n){const e=qp(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=lp(n.path)),s.serverResponse=i.serverResponse,s}return t}function $p(n,e,t){const r=e.fullServerUrl(),i=ac(r,n.host,n._protocol),s="GET",a=n.maxOperationRetryTime,l=new zp(i,s,jp(n,t),a);return l.errorHandler=Hp(e),l}class Wp{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Vt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Vt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Vt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw On("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw On("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw On("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw On("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw On("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Kp extends Wp{initXhr(){this.xhr_.responseType="text"}}function Qp(){return new Kp}/**
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
 */class Nt{constructor(e,t){this._service=e,t instanceof Ue?this._location=t:this._location=Ue.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Nt(e,t)}get root(){const e=new Ue(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return uc(this._location.path)}get storage(){return this._service}get parent(){const e=Vp(this._location.path);if(e===null)return null;const t=new Ue(this._location.bucket,e);return new Nt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw yp(e)}}function Yp(n){n._throwIfRoot("getDownloadURL");const e=$p(n.storage,n._location,Mp());return n.storage.makeRequestWithTokens(e,Qp).then(t=>{if(t===null)throw vp();return t})}function Xp(n,e){const t=Dp(n._location.path,e),r=new Ue(n._location.bucket,t);return new Nt(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(n){return/^[A-Za-z]+:\/\//.test(n)}function Zp(n,e){return new Nt(n,e)}function hc(n,e){if(n instanceof ks){const t=n;if(t._bucket==null)throw _p();const r=new Nt(t,t._bucket);return e!=null?hc(r,e):r}else return e!==void 0?Xp(n,e):n}function eg(n,e){if(e&&Jp(e)){if(n instanceof ks)return Zp(n,e);throw rs("To use ref(service, url), the first argument must be a Storage instance.")}else return hc(n,e)}function ya(n,e){const t=e==null?void 0:e[rc];return t==null?null:Ue.makeFromBucketSpec(t,n)}function tg(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Ma(i,n.app.options.projectId))}class ks{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=nc,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=op,this._maxUploadRetryTime=ap,this._requests=new Set,i!=null?this._bucket=Ue.makeFromBucketSpec(i,this._host):this._bucket=ya(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ue.makeFromBucketSpec(this._url,e):this._bucket=ya(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){va("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){va("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Nt(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new wp(sc());{const a=kp(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const wa="@firebase/storage",Ta="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc="storage";function ng(n){return n=Xn(n),Yp(n)}function rg(n,e){return n=Xn(n),eg(n,e)}function ig(n=qa(),e){n=Xn(n);const r=za(n,dc).getImmediate({identifier:e}),i=Oa("storage");return i&&sg(r,...i),r}function sg(n,e,t,r={}){tg(n,e,t,r)}function og(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new ks(t,r,i,e,Ga)}function ag(){qn(new tn(dc,og,"PUBLIC").setMultipleInstances(!0)),vt(wa,Ta,""),vt(wa,Ta,"esm2017")}ag();function me(n,e){const t=ig(),r=rg(t,n);ng(r).then(i=>{e.src=i}).catch(i=>{console.log(i)})}function W(n,e=null){return e?document.querySelectorAll(n):document.querySelector(n)}function lg(){me("logo-1.svg",W(".header__center-logo")),me("logo-1.svg",W(".burger__logo-img")),me("user.svg",W(".header__top-img")),me("user.svg",W(".burger__img")),me("gs://nuts-17b69.appspot.com/main_page/main_page-1.webp",W(".homepage__img")),me("gs://nuts-17b69.appspot.com/main_page/main_page-3.webp",W(".main-goal__img")),me("gs://nuts-17b69.appspot.com/main_page/main_page-benefit_1.webp",W(".benefits__nuts")),me("gs://nuts-17b69.appspot.com/main_page/main_page-benefit_2.webp",W(".benefits__hazelnut")),me("gs://nuts-17b69.appspot.com/main_page/main_page-benefit_3.webp",W(".benefits__rosehip")),me("gs://nuts-17b69.appspot.com/main_page/main_page-4.webp",W(".eco__img")),me("gs://nuts-17b69.appspot.com/news/news_articles_2.webp",W(".news-swiper__card-img")),me("logo-1.svg",W(".footer__logo-img")),me("gs://nuts-17b69.appspot.com/31318052.webp",W(".error__img")),me("gs://nuts-17b69.appspot.com/product_catalog/product_catalog_1.webp",W(".products-page__img"));const n=["gs://nuts-17b69.appspot.com/product_catalog/product_catalog_2.webp","gs://nuts-17b69.appspot.com/main_page/main_page-2.webp","gs://nuts-17b69.appspot.com/companies/companies_2.webp"],e=W(".eco-nuts__img",!0);for(let t=0;t<e.length;t++)me(n[t],e[t]);me("gs://nuts-17b69.appspot.com/avatar.webp",W(".registration__input-img"))}function Ea(n){return n!==null&&typeof n=="object"&&"constructor"in n&&n.constructor===Object}function Vs(n,e){n===void 0&&(n={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{typeof n[t]>"u"?n[t]=e[t]:Ea(e[t])&&Ea(n[t])&&Object.keys(e[t]).length>0&&Vs(n[t],e[t])})}const fc={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function dn(){const n=typeof document<"u"?document:{};return Vs(n,fc),n}const cg={document:fc,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(n){return typeof setTimeout>"u"?(n(),null):setTimeout(n,0)},cancelAnimationFrame(n){typeof setTimeout>"u"||clearTimeout(n)}};function ze(){const n=typeof window<"u"?window:{};return Vs(n,cg),n}function ug(n){return n===void 0&&(n=""),n.trim().split(" ").filter(e=>!!e.trim())}function hg(n){const e=n;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function is(n,e){return e===void 0&&(e=0),setTimeout(n,e)}function jr(){return Date.now()}function dg(n){const e=ze();let t;return e.getComputedStyle&&(t=e.getComputedStyle(n,null)),!t&&n.currentStyle&&(t=n.currentStyle),t||(t=n.style),t}function fg(n,e){e===void 0&&(e="x");const t=ze();let r,i,s;const a=dg(n);return t.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),s=new t.WebKitCSSMatrix(i==="none"?"":i)):(s=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?i=s.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),e==="y"&&(t.WebKitCSSMatrix?i=s.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Rr(n){return typeof n=="object"&&n!==null&&n.constructor&&Object.prototype.toString.call(n).slice(8,-1)==="Object"}function pg(n){return typeof window<"u"&&typeof window.HTMLElement<"u"?n instanceof HTMLElement:n&&(n.nodeType===1||n.nodeType===11)}function Be(){const n=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const r=t<0||arguments.length<=t?void 0:arguments[t];if(r!=null&&!pg(r)){const i=Object.keys(Object(r)).filter(s=>e.indexOf(s)<0);for(let s=0,a=i.length;s<a;s+=1){const l=i[s],u=Object.getOwnPropertyDescriptor(r,l);u!==void 0&&u.enumerable&&(Rr(n[l])&&Rr(r[l])?r[l].__swiper__?n[l]=r[l]:Be(n[l],r[l]):!Rr(n[l])&&Rr(r[l])?(n[l]={},r[l].__swiper__?n[l]=r[l]:Be(n[l],r[l])):n[l]=r[l])}}}return n}function Cr(n,e,t){n.style.setProperty(e,t)}function pc(n){let{swiper:e,targetPosition:t,side:r}=n;const i=ze(),s=-e.translate;let a=null,l;const u=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const d=t>s?"next":"prev",f=(w,S)=>d==="next"&&w>=S||d==="prev"&&w<=S,g=()=>{l=new Date().getTime(),a===null&&(a=l);const w=Math.max(Math.min((l-a)/u,1),0),S=.5-Math.cos(w*Math.PI)/2;let b=s+S*(t-s);if(f(b,t)&&(b=t),e.wrapperEl.scrollTo({[r]:b}),f(b,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:b})}),i.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=i.requestAnimationFrame(g)};g()}function Qe(n,e){e===void 0&&(e="");const t=[...n.children];return n instanceof HTMLSlotElement&&t.push(...n.assignedElements()),e?t.filter(r=>r.matches(e)):t}function gg(n,e){const t=e.contains(n);return!t&&e instanceof HTMLSlotElement?[...e.assignedElements()].includes(n):t}function qr(n){try{console.warn(n);return}catch{}}function Hr(n,e){e===void 0&&(e=[]);const t=document.createElement(n);return t.classList.add(...Array.isArray(e)?e:ug(e)),t}function mg(n,e){const t=[];for(;n.previousElementSibling;){const r=n.previousElementSibling;e?r.matches(e)&&t.push(r):t.push(r),n=r}return t}function _g(n,e){const t=[];for(;n.nextElementSibling;){const r=n.nextElementSibling;e?r.matches(e)&&t.push(r):t.push(r),n=r}return t}function gt(n,e){return ze().getComputedStyle(n,null).getPropertyValue(e)}function Sa(n){let e=n,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function vg(n,e){const t=[];let r=n.parentElement;for(;r;)t.push(r),r=r.parentElement;return t}function Ia(n,e,t){const r=ze();return n[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function st(n){return(Array.isArray(n)?n:[n]).filter(e=>!!e)}let Ci;function yg(){const n=ze(),e=dn();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in n||n.DocumentTouch&&e instanceof n.DocumentTouch)}}function gc(){return Ci||(Ci=yg()),Ci}let xi;function wg(n){let{userAgent:e}=n===void 0?{}:n;const t=gc(),r=ze(),i=r.navigator.platform,s=e||r.navigator.userAgent,a={ios:!1,android:!1},l=r.screen.width,u=r.screen.height,d=s.match(/(Android);?[\s\/]+([\d.]+)?/);let f=s.match(/(iPad).*OS\s([\d_]+)/);const g=s.match(/(iPod)(.*OS\s([\d_]+))?/),w=!f&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),S=i==="Win32";let b=i==="MacIntel";const R=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!f&&b&&t.touch&&R.indexOf(`${l}x${u}`)>=0&&(f=s.match(/(Version)\/([\d.]+)/),f||(f=[0,1,"13_0_0"]),b=!1),d&&!S&&(a.os="android",a.android=!0),(f||w||g)&&(a.os="ios",a.ios=!0),a}function mc(n){return n===void 0&&(n={}),xi||(xi=wg(n)),xi}let ki;function Tg(){const n=ze(),e=mc();let t=!1;function r(){const l=n.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(n.navigator.userAgent);if(l.includes("Version/")){const[u,d]=l.split("Version/")[1].split(" ")[0].split(".").map(f=>Number(f));t=u<16||u===16&&d<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent),s=r(),a=s||i&&e.ios;return{isSafari:t||s,needPerspectiveFix:t,need3dFix:a,isWebView:i}}function Eg(){return ki||(ki=Tg()),ki}function Sg(n){let{swiper:e,on:t,emit:r}=n;const i=ze();let s=null,a=null;const l=()=>{!e||e.destroyed||!e.initialized||(r("beforeResize"),r("resize"))},u=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(g=>{a=i.requestAnimationFrame(()=>{const{width:w,height:S}=e;let b=w,R=S;g.forEach(C=>{let{contentBoxSize:k,contentRect:L,target:V}=C;V&&V!==e.el||(b=L?L.width:(k[0]||k).inlineSize,R=L?L.height:(k[0]||k).blockSize)}),(b!==w||R!==S)&&l()})}),s.observe(e.el))},d=()=>{a&&i.cancelAnimationFrame(a),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},f=()=>{!e||e.destroyed||!e.initialized||r("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof i.ResizeObserver<"u"){u();return}i.addEventListener("resize",l),i.addEventListener("orientationchange",f)}),t("destroy",()=>{d(),i.removeEventListener("resize",l),i.removeEventListener("orientationchange",f)})}function Ig(n){let{swiper:e,extendParams:t,on:r,emit:i}=n;const s=[],a=ze(),l=function(f,g){g===void 0&&(g={});const w=a.MutationObserver||a.WebkitMutationObserver,S=new w(b=>{if(e.__preventObserver__)return;if(b.length===1){i("observerUpdate",b[0]);return}const R=function(){i("observerUpdate",b[0])};a.requestAnimationFrame?a.requestAnimationFrame(R):a.setTimeout(R,0)});S.observe(f,{attributes:typeof g.attributes>"u"?!0:g.attributes,childList:e.isElement||(typeof g.childList>"u"?!0:g).childList,characterData:typeof g.characterData>"u"?!0:g.characterData}),s.push(S)},u=()=>{if(e.params.observer){if(e.params.observeParents){const f=vg(e.hostEl);for(let g=0;g<f.length;g+=1)l(f[g])}l(e.hostEl,{childList:e.params.observeSlideChildren}),l(e.wrapperEl,{attributes:!1})}},d=()=>{s.forEach(f=>{f.disconnect()}),s.splice(0,s.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",u),r("destroy",d)}var Ag={on(n,e,t){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const i=t?"unshift":"push";return n.split(" ").forEach(s=>{r.eventsListeners[s]||(r.eventsListeners[s]=[]),r.eventsListeners[s][i](e)}),r},once(n,e,t){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;function i(){r.off(n,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];e.apply(r,a)}return i.__emitterProxy=e,r.on(n,i,t)},onAny(n,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof n!="function")return t;const r=e?"unshift":"push";return t.eventsAnyListeners.indexOf(n)<0&&t.eventsAnyListeners[r](n),t},offAny(n){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(n);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(n,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||n.split(" ").forEach(r=>{typeof e>"u"?t.eventsListeners[r]=[]:t.eventsListeners[r]&&t.eventsListeners[r].forEach((i,s)=>{(i===e||i.__emitterProxy&&i.__emitterProxy===e)&&t.eventsListeners[r].splice(s,1)})}),t},emit(){const n=this;if(!n.eventsListeners||n.destroyed||!n.eventsListeners)return n;let e,t,r;for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return typeof s[0]=="string"||Array.isArray(s[0])?(e=s[0],t=s.slice(1,s.length),r=n):(e=s[0].events,t=s[0].data,r=s[0].context||n),t.unshift(r),(Array.isArray(e)?e:e.split(" ")).forEach(u=>{n.eventsAnyListeners&&n.eventsAnyListeners.length&&n.eventsAnyListeners.forEach(d=>{d.apply(r,[u,...t])}),n.eventsListeners&&n.eventsListeners[u]&&n.eventsListeners[u].forEach(d=>{d.apply(r,t)})}),n}};function bg(){const n=this;let e,t;const r=n.el;typeof n.params.width<"u"&&n.params.width!==null?e=n.params.width:e=r.clientWidth,typeof n.params.height<"u"&&n.params.height!==null?t=n.params.height:t=r.clientHeight,!(e===0&&n.isHorizontal()||t===0&&n.isVertical())&&(e=e-parseInt(gt(r,"padding-left")||0,10)-parseInt(gt(r,"padding-right")||0,10),t=t-parseInt(gt(r,"padding-top")||0,10)-parseInt(gt(r,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(n,{width:e,height:t,size:n.isHorizontal()?e:t}))}function Pg(){const n=this;function e(y,E){return parseFloat(y.getPropertyValue(n.getDirectionLabel(E))||0)}const t=n.params,{wrapperEl:r,slidesEl:i,size:s,rtlTranslate:a,wrongRTL:l}=n,u=n.virtual&&t.virtual.enabled,d=u?n.virtual.slides.length:n.slides.length,f=Qe(i,`.${n.params.slideClass}, swiper-slide`),g=u?n.virtual.slides.length:f.length;let w=[];const S=[],b=[];let R=t.slidesOffsetBefore;typeof R=="function"&&(R=t.slidesOffsetBefore.call(n));let C=t.slidesOffsetAfter;typeof C=="function"&&(C=t.slidesOffsetAfter.call(n));const k=n.snapGrid.length,L=n.slidesGrid.length;let V=t.spaceBetween,O=-R,U=0,$=0;if(typeof s>"u")return;typeof V=="string"&&V.indexOf("%")>=0?V=parseFloat(V.replace("%",""))/100*s:typeof V=="string"&&(V=parseFloat(V)),n.virtualSize=-V,f.forEach(y=>{a?y.style.marginLeft="":y.style.marginRight="",y.style.marginBottom="",y.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(Cr(r,"--swiper-centered-offset-before",""),Cr(r,"--swiper-centered-offset-after",""));const A=t.grid&&t.grid.rows>1&&n.grid;A?n.grid.initSlides(f):n.grid&&n.grid.unsetSlides();let v;const m=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(y=>typeof t.breakpoints[y].slidesPerView<"u").length>0;for(let y=0;y<g;y+=1){v=0;let E;if(f[y]&&(E=f[y]),A&&n.grid.updateSlide(y,E,f),!(f[y]&&gt(E,"display")==="none")){if(t.slidesPerView==="auto"){m&&(f[y].style[n.getDirectionLabel("width")]="");const I=getComputedStyle(E),_=E.style.transform,Y=E.style.webkitTransform;if(_&&(E.style.transform="none"),Y&&(E.style.webkitTransform="none"),t.roundLengths)v=n.isHorizontal()?Ia(E,"width"):Ia(E,"height");else{const ie=e(I,"width"),De=e(I,"padding-left"),qe=e(I,"padding-right"),Le=e(I,"margin-left"),$e=e(I,"margin-right"),at=I.getPropertyValue("box-sizing");if(at&&at==="border-box")v=ie+Le+$e;else{const{clientWidth:Bt,offsetWidth:Me}=E;v=ie+De+qe+Le+$e+(Me-Bt)}}_&&(E.style.transform=_),Y&&(E.style.webkitTransform=Y),t.roundLengths&&(v=Math.floor(v))}else v=(s-(t.slidesPerView-1)*V)/t.slidesPerView,t.roundLengths&&(v=Math.floor(v)),f[y]&&(f[y].style[n.getDirectionLabel("width")]=`${v}px`);f[y]&&(f[y].swiperSlideSize=v),b.push(v),t.centeredSlides?(O=O+v/2+U/2+V,U===0&&y!==0&&(O=O-s/2-V),y===0&&(O=O-s/2-V),Math.abs(O)<1/1e3&&(O=0),t.roundLengths&&(O=Math.floor(O)),$%t.slidesPerGroup===0&&w.push(O),S.push(O)):(t.roundLengths&&(O=Math.floor(O)),($-Math.min(n.params.slidesPerGroupSkip,$))%n.params.slidesPerGroup===0&&w.push(O),S.push(O),O=O+v+V),n.virtualSize+=v+V,U=v,$+=1}}if(n.virtualSize=Math.max(n.virtualSize,s)+C,a&&l&&(t.effect==="slide"||t.effect==="coverflow")&&(r.style.width=`${n.virtualSize+V}px`),t.setWrapperSize&&(r.style[n.getDirectionLabel("width")]=`${n.virtualSize+V}px`),A&&n.grid.updateWrapperSize(v,w),!t.centeredSlides){const y=[];for(let E=0;E<w.length;E+=1){let I=w[E];t.roundLengths&&(I=Math.floor(I)),w[E]<=n.virtualSize-s&&y.push(I)}w=y,Math.floor(n.virtualSize-s)-Math.floor(w[w.length-1])>1&&w.push(n.virtualSize-s)}if(u&&t.loop){const y=b[0]+V;if(t.slidesPerGroup>1){const E=Math.ceil((n.virtual.slidesBefore+n.virtual.slidesAfter)/t.slidesPerGroup),I=y*t.slidesPerGroup;for(let _=0;_<E;_+=1)w.push(w[w.length-1]+I)}for(let E=0;E<n.virtual.slidesBefore+n.virtual.slidesAfter;E+=1)t.slidesPerGroup===1&&w.push(w[w.length-1]+y),S.push(S[S.length-1]+y),n.virtualSize+=y}if(w.length===0&&(w=[0]),V!==0){const y=n.isHorizontal()&&a?"marginLeft":n.getDirectionLabel("marginRight");f.filter((E,I)=>!t.cssMode||t.loop?!0:I!==f.length-1).forEach(E=>{E.style[y]=`${V}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let y=0;b.forEach(I=>{y+=I+(V||0)}),y-=V;const E=y-s;w=w.map(I=>I<=0?-R:I>E?E+C:I)}if(t.centerInsufficientSlides){let y=0;b.forEach(I=>{y+=I+(V||0)}),y-=V;const E=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(y+E<s){const I=(s-y-E)/2;w.forEach((_,Y)=>{w[Y]=_-I}),S.forEach((_,Y)=>{S[Y]=_+I})}}if(Object.assign(n,{slides:f,snapGrid:w,slidesGrid:S,slidesSizesGrid:b}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){Cr(r,"--swiper-centered-offset-before",`${-w[0]}px`),Cr(r,"--swiper-centered-offset-after",`${n.size/2-b[b.length-1]/2}px`);const y=-n.snapGrid[0],E=-n.slidesGrid[0];n.snapGrid=n.snapGrid.map(I=>I+y),n.slidesGrid=n.slidesGrid.map(I=>I+E)}if(g!==d&&n.emit("slidesLengthChange"),w.length!==k&&(n.params.watchOverflow&&n.checkOverflow(),n.emit("snapGridLengthChange")),S.length!==L&&n.emit("slidesGridLengthChange"),t.watchSlidesProgress&&n.updateSlidesOffset(),n.emit("slidesUpdated"),!u&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const y=`${t.containerModifierClass}backface-hidden`,E=n.el.classList.contains(y);g<=t.maxBackfaceHiddenSlides?E||n.el.classList.add(y):E&&n.el.classList.remove(y)}}function Rg(n){const e=this,t=[],r=e.virtual&&e.params.virtual.enabled;let i=0,s;typeof n=="number"?e.setTransition(n):n===!0&&e.setTransition(e.params.speed);const a=l=>r?e.slides[e.getSlideIndexByData(l)]:e.slides[l];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(l=>{t.push(l)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const l=e.activeIndex+s;if(l>e.slides.length&&!r)break;t.push(a(l))}else t.push(a(e.activeIndex));for(s=0;s<t.length;s+=1)if(typeof t[s]<"u"){const l=t[s].offsetHeight;i=l>i?l:i}(i||i===0)&&(e.wrapperEl.style.height=`${i}px`)}function Cg(){const n=this,e=n.slides,t=n.isElement?n.isHorizontal()?n.wrapperEl.offsetLeft:n.wrapperEl.offsetTop:0;for(let r=0;r<e.length;r+=1)e[r].swiperSlideOffset=(n.isHorizontal()?e[r].offsetLeft:e[r].offsetTop)-t-n.cssOverflowAdjustment()}const Aa=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function xg(n){n===void 0&&(n=this&&this.translate||0);const e=this,t=e.params,{slides:r,rtlTranslate:i,snapGrid:s}=e;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let a=-n;i&&(a=n),e.visibleSlidesIndexes=[],e.visibleSlides=[];let l=t.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*e.size:typeof l=="string"&&(l=parseFloat(l));for(let u=0;u<r.length;u+=1){const d=r[u];let f=d.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(f-=r[0].swiperSlideOffset);const g=(a+(t.centeredSlides?e.minTranslate():0)-f)/(d.swiperSlideSize+l),w=(a-s[0]+(t.centeredSlides?e.minTranslate():0)-f)/(d.swiperSlideSize+l),S=-(a-f),b=S+e.slidesSizesGrid[u],R=S>=0&&S<=e.size-e.slidesSizesGrid[u],C=S>=0&&S<e.size-1||b>1&&b<=e.size||S<=0&&b>=e.size;C&&(e.visibleSlides.push(d),e.visibleSlidesIndexes.push(u)),Aa(d,C,t.slideVisibleClass),Aa(d,R,t.slideFullyVisibleClass),d.progress=i?-g:g,d.originalProgress=i?-w:w}}function kg(n){const e=this;if(typeof n>"u"){const f=e.rtlTranslate?-1:1;n=e&&e.translate&&e.translate*f||0}const t=e.params,r=e.maxTranslate()-e.minTranslate();let{progress:i,isBeginning:s,isEnd:a,progressLoop:l}=e;const u=s,d=a;if(r===0)i=0,s=!0,a=!0;else{i=(n-e.minTranslate())/r;const f=Math.abs(n-e.minTranslate())<1,g=Math.abs(n-e.maxTranslate())<1;s=f||i<=0,a=g||i>=1,f&&(i=0),g&&(i=1)}if(t.loop){const f=e.getSlideIndexByData(0),g=e.getSlideIndexByData(e.slides.length-1),w=e.slidesGrid[f],S=e.slidesGrid[g],b=e.slidesGrid[e.slidesGrid.length-1],R=Math.abs(n);R>=w?l=(R-w)/b:l=(R+b-S)/b,l>1&&(l-=1)}Object.assign(e,{progress:i,progressLoop:l,isBeginning:s,isEnd:a}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(n),s&&!u&&e.emit("reachBeginning toEdge"),a&&!d&&e.emit("reachEnd toEdge"),(u&&!s||d&&!a)&&e.emit("fromEdge"),e.emit("progress",i)}const Vi=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function Vg(){const n=this,{slides:e,params:t,slidesEl:r,activeIndex:i}=n,s=n.virtual&&t.virtual.enabled,a=n.grid&&t.grid&&t.grid.rows>1,l=g=>Qe(r,`.${t.slideClass}${g}, swiper-slide${g}`)[0];let u,d,f;if(s)if(t.loop){let g=i-n.virtual.slidesBefore;g<0&&(g=n.virtual.slides.length+g),g>=n.virtual.slides.length&&(g-=n.virtual.slides.length),u=l(`[data-swiper-slide-index="${g}"]`)}else u=l(`[data-swiper-slide-index="${i}"]`);else a?(u=e.filter(g=>g.column===i)[0],f=e.filter(g=>g.column===i+1)[0],d=e.filter(g=>g.column===i-1)[0]):u=e[i];u&&(a||(f=_g(u,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!f&&(f=e[0]),d=mg(u,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!d===0&&(d=e[e.length-1]))),e.forEach(g=>{Vi(g,g===u,t.slideActiveClass),Vi(g,g===f,t.slideNextClass),Vi(g,g===d,t.slidePrevClass)}),n.emitSlidesClasses()}const Or=(n,e)=>{if(!n||n.destroyed||!n.params)return;const t=()=>n.isElement?"swiper-slide":`.${n.params.slideClass}`,r=e.closest(t());if(r){let i=r.querySelector(`.${n.params.lazyPreloaderClass}`);!i&&n.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},Di=(n,e)=>{if(!n.slides[e])return;const t=n.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},ss=n=>{if(!n||n.destroyed||!n.params)return;let e=n.params.lazyPreloadPrevNext;const t=n.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const r=n.params.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(n.params.slidesPerView),i=n.activeIndex;if(n.params.grid&&n.params.grid.rows>1){const a=i,l=[a-e];l.push(...Array.from({length:e}).map((u,d)=>a+r+d)),n.slides.forEach((u,d)=>{l.includes(u.column)&&Di(n,d)});return}const s=i+r-1;if(n.params.rewind||n.params.loop)for(let a=i-e;a<=s+e;a+=1){const l=(a%t+t)%t;(l<i||l>s)&&Di(n,l)}else for(let a=Math.max(i-e,0);a<=Math.min(s+e,t-1);a+=1)a!==i&&(a>s||a<i)&&Di(n,a)};function Dg(n){const{slidesGrid:e,params:t}=n,r=n.rtlTranslate?n.translate:-n.translate;let i;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?r>=e[s]&&r<e[s+1]-(e[s+1]-e[s])/2?i=s:r>=e[s]&&r<e[s+1]&&(i=s+1):r>=e[s]&&(i=s);return t.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function Og(n){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:r,params:i,activeIndex:s,realIndex:a,snapIndex:l}=e;let u=n,d;const f=S=>{let b=S-e.virtual.slidesBefore;return b<0&&(b=e.virtual.slides.length+b),b>=e.virtual.slides.length&&(b-=e.virtual.slides.length),b};if(typeof u>"u"&&(u=Dg(e)),r.indexOf(t)>=0)d=r.indexOf(t);else{const S=Math.min(i.slidesPerGroupSkip,u);d=S+Math.floor((u-S)/i.slidesPerGroup)}if(d>=r.length&&(d=r.length-1),u===s&&!e.params.loop){d!==l&&(e.snapIndex=d,e.emit("snapIndexChange"));return}if(u===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=f(u);return}const g=e.grid&&i.grid&&i.grid.rows>1;let w;if(e.virtual&&i.virtual.enabled&&i.loop)w=f(u);else if(g){const S=e.slides.filter(R=>R.column===u)[0];let b=parseInt(S.getAttribute("data-swiper-slide-index"),10);Number.isNaN(b)&&(b=Math.max(e.slides.indexOf(S),0)),w=Math.floor(b/i.grid.rows)}else if(e.slides[u]){const S=e.slides[u].getAttribute("data-swiper-slide-index");S?w=parseInt(S,10):w=u}else w=u;Object.assign(e,{previousSnapIndex:l,snapIndex:d,previousRealIndex:a,realIndex:w,previousIndex:s,activeIndex:u}),e.initialized&&ss(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(a!==w&&e.emit("realIndexChange"),e.emit("slideChange"))}function Lg(n,e){const t=this,r=t.params;let i=n.closest(`.${r.slideClass}, swiper-slide`);!i&&t.isElement&&e&&e.length>1&&e.includes(n)&&[...e.slice(e.indexOf(n)+1,e.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let s=!1,a;if(i){for(let l=0;l<t.slides.length;l+=1)if(t.slides[l]===i){s=!0,a=l;break}}if(i&&s)t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=a;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}r.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Mg={updateSize:bg,updateSlides:Pg,updateAutoHeight:Rg,updateSlidesOffset:Cg,updateSlidesProgress:xg,updateProgress:kg,updateSlidesClasses:Vg,updateActiveIndex:Og,updateClickedSlide:Lg};function Ng(n){n===void 0&&(n=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:r,translate:i,wrapperEl:s}=e;if(t.virtualTranslate)return r?-i:i;if(t.cssMode)return i;let a=fg(s,n);return a+=e.cssOverflowAdjustment(),r&&(a=-a),a||0}function Fg(n,e){const t=this,{rtlTranslate:r,params:i,wrapperEl:s,progress:a}=t;let l=0,u=0;const d=0;t.isHorizontal()?l=r?-n:n:u=n,i.roundLengths&&(l=Math.floor(l),u=Math.floor(u)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?l:u,i.cssMode?s[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-l:-u:i.virtualTranslate||(t.isHorizontal()?l-=t.cssOverflowAdjustment():u-=t.cssOverflowAdjustment(),s.style.transform=`translate3d(${l}px, ${u}px, ${d}px)`);let f;const g=t.maxTranslate()-t.minTranslate();g===0?f=0:f=(n-t.minTranslate())/g,f!==a&&t.updateProgress(n),t.emit("setTranslate",t.translate,e)}function Bg(){return-this.snapGrid[0]}function Ug(){return-this.snapGrid[this.snapGrid.length-1]}function zg(n,e,t,r,i){n===void 0&&(n=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),r===void 0&&(r=!0);const s=this,{params:a,wrapperEl:l}=s;if(s.animating&&a.preventInteractionOnTransition)return!1;const u=s.minTranslate(),d=s.maxTranslate();let f;if(r&&n>u?f=u:r&&n<d?f=d:f=n,s.updateProgress(f),a.cssMode){const g=s.isHorizontal();if(e===0)l[g?"scrollLeft":"scrollTop"]=-f;else{if(!s.support.smoothScroll)return pc({swiper:s,targetPosition:-f,side:g?"left":"top"}),!0;l.scrollTo({[g?"left":"top"]:-f,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(f),t&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(f),t&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(w){!s||s.destroyed||w.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,t&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var Gg={getTranslate:Ng,setTranslate:Fg,minTranslate:Bg,maxTranslate:Ug,translateTo:zg};function jg(n,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${n}ms`,t.wrapperEl.style.transitionDelay=n===0?"0ms":""),t.emit("setTransition",n,e)}function _c(n){let{swiper:e,runCallbacks:t,direction:r,step:i}=n;const{activeIndex:s,previousIndex:a}=e;let l=r;if(l||(s>a?l="next":s<a?l="prev":l="reset"),e.emit(`transition${i}`),t&&s!==a){if(l==="reset"){e.emit(`slideResetTransition${i}`);return}e.emit(`slideChangeTransition${i}`),l==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}function qg(n,e){n===void 0&&(n=!0);const t=this,{params:r}=t;r.cssMode||(r.autoHeight&&t.updateAutoHeight(),_c({swiper:t,runCallbacks:n,direction:e,step:"Start"}))}function Hg(n,e){n===void 0&&(n=!0);const t=this,{params:r}=t;t.animating=!1,!r.cssMode&&(t.setTransition(0),_c({swiper:t,runCallbacks:n,direction:e,step:"End"}))}var $g={setTransition:jg,transitionStart:qg,transitionEnd:Hg};function Wg(n,e,t,r,i){n===void 0&&(n=0),t===void 0&&(t=!0),typeof n=="string"&&(n=parseInt(n,10));const s=this;let a=n;a<0&&(a=0);const{params:l,snapGrid:u,slidesGrid:d,previousIndex:f,activeIndex:g,rtlTranslate:w,wrapperEl:S,enabled:b}=s;if(!b&&!r&&!i||s.destroyed||s.animating&&l.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=s.params.speed);const R=Math.min(s.params.slidesPerGroupSkip,a);let C=R+Math.floor((a-R)/s.params.slidesPerGroup);C>=u.length&&(C=u.length-1);const k=-u[C];if(l.normalizeSlideIndex)for(let V=0;V<d.length;V+=1){const O=-Math.floor(k*100),U=Math.floor(d[V]*100),$=Math.floor(d[V+1]*100);typeof d[V+1]<"u"?O>=U&&O<$-($-U)/2?a=V:O>=U&&O<$&&(a=V+1):O>=U&&(a=V)}if(s.initialized&&a!==g&&(!s.allowSlideNext&&(w?k>s.translate&&k>s.minTranslate():k<s.translate&&k<s.minTranslate())||!s.allowSlidePrev&&k>s.translate&&k>s.maxTranslate()&&(g||0)!==a))return!1;a!==(f||0)&&t&&s.emit("beforeSlideChangeStart"),s.updateProgress(k);let L;if(a>g?L="next":a<g?L="prev":L="reset",w&&-k===s.translate||!w&&k===s.translate)return s.updateActiveIndex(a),l.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),l.effect!=="slide"&&s.setTranslate(k),L!=="reset"&&(s.transitionStart(t,L),s.transitionEnd(t,L)),!1;if(l.cssMode){const V=s.isHorizontal(),O=w?k:-k;if(e===0){const U=s.virtual&&s.params.virtual.enabled;U&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),U&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{S[V?"scrollLeft":"scrollTop"]=O})):S[V?"scrollLeft":"scrollTop"]=O,U&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return pc({swiper:s,targetPosition:O,side:V?"left":"top"}),!0;S.scrollTo({[V?"left":"top"]:O,behavior:"smooth"})}return!0}return s.setTransition(e),s.setTranslate(k),s.updateActiveIndex(a),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,r),s.transitionStart(t,L),e===0?s.transitionEnd(t,L):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(O){!s||s.destroyed||O.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(t,L))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function Kg(n,e,t,r){n===void 0&&(n=0),t===void 0&&(t=!0),typeof n=="string"&&(n=parseInt(n,10));const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);const s=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=n;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(s){const w=a*i.params.grid.rows;l=i.slides.filter(S=>S.getAttribute("data-swiper-slide-index")*1===w)[0].column}else l=i.getSlideIndexByData(a);const u=s?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:d}=i.params;let f=i.params.slidesPerView;f==="auto"?f=i.slidesPerViewDynamic():(f=Math.ceil(parseFloat(i.params.slidesPerView,10)),d&&f%2===0&&(f=f+1));let g=u-l<f;if(d&&(g=g||l<Math.ceil(f/2)),r&&d&&i.params.slidesPerView!=="auto"&&!s&&(g=!1),g){const w=d?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:w,slideTo:!0,activeSlideIndex:w==="next"?l+1:l-u+1,slideRealIndex:w==="next"?i.realIndex:void 0})}if(s){const w=a*i.params.grid.rows;a=i.slides.filter(S=>S.getAttribute("data-swiper-slide-index")*1===w)[0].column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,e,t,r)}),i}function Qg(n,e,t){e===void 0&&(e=!0);const r=this,{enabled:i,params:s,animating:a}=r;if(!i||r.destroyed)return r;typeof n>"u"&&(n=r.params.speed);let l=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const u=r.activeIndex<s.slidesPerGroupSkip?1:l,d=r.virtual&&s.virtual.enabled;if(s.loop){if(a&&!d&&s.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+u,n,e,t)}),!0}return s.rewind&&r.isEnd?r.slideTo(0,n,e,t):r.slideTo(r.activeIndex+u,n,e,t)}function Yg(n,e,t){e===void 0&&(e=!0);const r=this,{params:i,snapGrid:s,slidesGrid:a,rtlTranslate:l,enabled:u,animating:d}=r;if(!u||r.destroyed)return r;typeof n>"u"&&(n=r.params.speed);const f=r.virtual&&i.virtual.enabled;if(i.loop){if(d&&!f&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const g=l?r.translate:-r.translate;function w(k){return k<0?-Math.floor(Math.abs(k)):Math.floor(k)}const S=w(g),b=s.map(k=>w(k));let R=s[b.indexOf(S)-1];if(typeof R>"u"&&i.cssMode){let k;s.forEach((L,V)=>{S>=L&&(k=V)}),typeof k<"u"&&(R=s[k>0?k-1:k])}let C=0;if(typeof R<"u"&&(C=a.indexOf(R),C<0&&(C=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(C=C-r.slidesPerViewDynamic("previous",!0)+1,C=Math.max(C,0))),i.rewind&&r.isBeginning){const k=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(k,n,e,t)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(C,n,e,t)}),!0;return r.slideTo(C,n,e,t)}function Xg(n,e,t){e===void 0&&(e=!0);const r=this;if(!r.destroyed)return typeof n>"u"&&(n=r.params.speed),r.slideTo(r.activeIndex,n,e,t)}function Jg(n,e,t,r){e===void 0&&(e=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof n>"u"&&(n=i.params.speed);let s=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,s),l=a+Math.floor((s-a)/i.params.slidesPerGroup),u=i.rtlTranslate?i.translate:-i.translate;if(u>=i.snapGrid[l]){const d=i.snapGrid[l],f=i.snapGrid[l+1];u-d>(f-d)*r&&(s+=i.params.slidesPerGroup)}else{const d=i.snapGrid[l-1],f=i.snapGrid[l];u-d<=(f-d)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,n,e,t)}function Zg(){const n=this;if(n.destroyed)return;const{params:e,slidesEl:t}=n,r=e.slidesPerView==="auto"?n.slidesPerViewDynamic():e.slidesPerView;let i=n.clickedIndex,s;const a=n.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(n.animating)return;s=parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?i<n.loopedSlides-r/2||i>n.slides.length-n.loopedSlides+r/2?(n.loopFix(),i=n.getSlideIndex(Qe(t,`${a}[data-swiper-slide-index="${s}"]`)[0]),is(()=>{n.slideTo(i)})):n.slideTo(i):i>n.slides.length-r?(n.loopFix(),i=n.getSlideIndex(Qe(t,`${a}[data-swiper-slide-index="${s}"]`)[0]),is(()=>{n.slideTo(i)})):n.slideTo(i)}else n.slideTo(i)}var em={slideTo:Wg,slideToLoop:Kg,slideNext:Qg,slidePrev:Yg,slideReset:Xg,slideToClosest:Jg,slideToClickedSlide:Zg};function tm(n){const e=this,{params:t,slidesEl:r}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;const i=()=>{Qe(r,`.${t.slideClass}, swiper-slide`).forEach((g,w)=>{g.setAttribute("data-swiper-slide-index",w)})},s=e.grid&&t.grid&&t.grid.rows>1,a=t.slidesPerGroup*(s?t.grid.rows:1),l=e.slides.length%a!==0,u=s&&e.slides.length%t.grid.rows!==0,d=f=>{for(let g=0;g<f;g+=1){const w=e.isElement?Hr("swiper-slide",[t.slideBlankClass]):Hr("div",[t.slideClass,t.slideBlankClass]);e.slidesEl.append(w)}};if(l){if(t.loopAddBlankSlides){const f=a-e.slides.length%a;d(f),e.recalcSlides(),e.updateSlides()}else qr("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(u){if(t.loopAddBlankSlides){const f=t.grid.rows-e.slides.length%t.grid.rows;d(f),e.recalcSlides(),e.updateSlides()}else qr("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();e.loopFix({slideRealIndex:n,direction:t.centeredSlides?void 0:"next"})}function nm(n){let{slideRealIndex:e,slideTo:t=!0,direction:r,setTranslate:i,activeSlideIndex:s,byController:a,byMousewheel:l}=n===void 0?{}:n;const u=this;if(!u.params.loop)return;u.emit("beforeLoopFix");const{slides:d,allowSlidePrev:f,allowSlideNext:g,slidesEl:w,params:S}=u,{centeredSlides:b}=S;if(u.allowSlidePrev=!0,u.allowSlideNext=!0,u.virtual&&S.virtual.enabled){t&&(!S.centeredSlides&&u.snapIndex===0?u.slideTo(u.virtual.slides.length,0,!1,!0):S.centeredSlides&&u.snapIndex<S.slidesPerView?u.slideTo(u.virtual.slides.length+u.snapIndex,0,!1,!0):u.snapIndex===u.snapGrid.length-1&&u.slideTo(u.virtual.slidesBefore,0,!1,!0)),u.allowSlidePrev=f,u.allowSlideNext=g,u.emit("loopFix");return}let R=S.slidesPerView;R==="auto"?R=u.slidesPerViewDynamic():(R=Math.ceil(parseFloat(S.slidesPerView,10)),b&&R%2===0&&(R=R+1));const C=S.slidesPerGroupAuto?R:S.slidesPerGroup;let k=C;k%C!==0&&(k+=C-k%C),k+=S.loopAdditionalSlides,u.loopedSlides=k;const L=u.grid&&S.grid&&S.grid.rows>1;d.length<R+k?qr("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):L&&S.grid.fill==="row"&&qr("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const V=[],O=[];let U=u.activeIndex;typeof s>"u"?s=u.getSlideIndex(d.filter(_=>_.classList.contains(S.slideActiveClass))[0]):U=s;const $=r==="next"||!r,A=r==="prev"||!r;let v=0,m=0;const y=L?Math.ceil(d.length/S.grid.rows):d.length,I=(L?d[s].column:s)+(b&&typeof i>"u"?-R/2+.5:0);if(I<k){v=Math.max(k-I,C);for(let _=0;_<k-I;_+=1){const Y=_-Math.floor(_/y)*y;if(L){const ie=y-Y-1;for(let De=d.length-1;De>=0;De-=1)d[De].column===ie&&V.push(De)}else V.push(y-Y-1)}}else if(I+R>y-k){m=Math.max(I-(y-k*2),C);for(let _=0;_<m;_+=1){const Y=_-Math.floor(_/y)*y;L?d.forEach((ie,De)=>{ie.column===Y&&O.push(De)}):O.push(Y)}}if(u.__preventObserver__=!0,requestAnimationFrame(()=>{u.__preventObserver__=!1}),A&&V.forEach(_=>{d[_].swiperLoopMoveDOM=!0,w.prepend(d[_]),d[_].swiperLoopMoveDOM=!1}),$&&O.forEach(_=>{d[_].swiperLoopMoveDOM=!0,w.append(d[_]),d[_].swiperLoopMoveDOM=!1}),u.recalcSlides(),S.slidesPerView==="auto"?u.updateSlides():L&&(V.length>0&&A||O.length>0&&$)&&u.slides.forEach((_,Y)=>{u.grid.updateSlide(Y,_,u.slides)}),S.watchSlidesProgress&&u.updateSlidesOffset(),t){if(V.length>0&&A){if(typeof e>"u"){const _=u.slidesGrid[U],ie=u.slidesGrid[U+v]-_;l?u.setTranslate(u.translate-ie):(u.slideTo(U+Math.ceil(v),0,!1,!0),i&&(u.touchEventsData.startTranslate=u.touchEventsData.startTranslate-ie,u.touchEventsData.currentTranslate=u.touchEventsData.currentTranslate-ie))}else if(i){const _=L?V.length/S.grid.rows:V.length;u.slideTo(u.activeIndex+_,0,!1,!0),u.touchEventsData.currentTranslate=u.translate}}else if(O.length>0&&$)if(typeof e>"u"){const _=u.slidesGrid[U],ie=u.slidesGrid[U-m]-_;l?u.setTranslate(u.translate-ie):(u.slideTo(U-m,0,!1,!0),i&&(u.touchEventsData.startTranslate=u.touchEventsData.startTranslate-ie,u.touchEventsData.currentTranslate=u.touchEventsData.currentTranslate-ie))}else{const _=L?O.length/S.grid.rows:O.length;u.slideTo(u.activeIndex-_,0,!1,!0)}}if(u.allowSlidePrev=f,u.allowSlideNext=g,u.controller&&u.controller.control&&!a){const _={slideRealIndex:e,direction:r,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(u.controller.control)?u.controller.control.forEach(Y=>{!Y.destroyed&&Y.params.loop&&Y.loopFix({..._,slideTo:Y.params.slidesPerView===S.slidesPerView?t:!1})}):u.controller.control instanceof u.constructor&&u.controller.control.params.loop&&u.controller.control.loopFix({..._,slideTo:u.controller.control.params.slidesPerView===S.slidesPerView?t:!1})}u.emit("loopFix")}function rm(){const n=this,{params:e,slidesEl:t}=n;if(!e.loop||n.virtual&&n.params.virtual.enabled)return;n.recalcSlides();const r=[];n.slides.forEach(i=>{const s=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[s]=i}),n.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{t.append(i)}),n.recalcSlides(),n.slideTo(n.realIndex,0)}var im={loopCreate:tm,loopFix:nm,loopDestroy:rm};function sm(n){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=n?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function om(){const n=this;n.params.watchOverflow&&n.isLocked||n.params.cssMode||(n.isElement&&(n.__preventObserver__=!0),n[n.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1}))}var am={setGrabCursor:sm,unsetGrabCursor:om};function lm(n,e){e===void 0&&(e=this);function t(r){if(!r||r===dn()||r===ze())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(n);return!i&&!r.getRootNode?null:i||t(r.getRootNode().host)}return t(e)}function ba(n,e,t){const r=ze(),{params:i}=n,s=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return s&&(t<=a||t>=r.innerWidth-a)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function cm(n){const e=this,t=dn();let r=n;r.originalEvent&&(r=r.originalEvent);const i=e.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){ba(e,r,r.targetTouches[0].pageX);return}const{params:s,touches:a,enabled:l}=e;if(!l||!s.simulateTouch&&r.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let u=r.target;if(s.touchEventsTarget==="wrapper"&&!gg(u,e.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const d=!!s.noSwipingClass&&s.noSwipingClass!=="",f=r.composedPath?r.composedPath():r.path;d&&r.target&&r.target.shadowRoot&&f&&(u=f[0]);const g=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,w=!!(r.target&&r.target.shadowRoot);if(s.noSwiping&&(w?lm(g,u):u.closest(g))){e.allowClick=!0;return}if(s.swipeHandler&&!u.closest(s.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const S=a.currentX,b=a.currentY;if(!ba(e,r,S))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=S,a.startY=b,i.touchStartTime=jr(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let R=!0;u.matches(i.focusableElements)&&(R=!1,u.nodeName==="SELECT"&&(i.isTouched=!1)),t.activeElement&&t.activeElement.matches(i.focusableElements)&&t.activeElement!==u&&t.activeElement.blur();const C=R&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||C)&&!u.isContentEditable&&r.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",r)}function um(n){const e=dn(),t=this,r=t.touchEventsData,{params:i,touches:s,rtlTranslate:a,enabled:l}=t;if(!l||!i.simulateTouch&&n.pointerType==="mouse")return;let u=n;if(u.originalEvent&&(u=u.originalEvent),u.type==="pointermove"&&(r.touchId!==null||u.pointerId!==r.pointerId))return;let d;if(u.type==="touchmove"){if(d=[...u.changedTouches].filter($=>$.identifier===r.touchId)[0],!d||d.identifier!==r.touchId)return}else d=u;if(!r.isTouched){r.startMoving&&r.isScrolling&&t.emit("touchMoveOpposite",u);return}const f=d.pageX,g=d.pageY;if(u.preventedByNestedSwiper){s.startX=f,s.startY=g;return}if(!t.allowTouchMove){u.target.matches(r.focusableElements)||(t.allowClick=!1),r.isTouched&&(Object.assign(s,{startX:f,startY:g,currentX:f,currentY:g}),r.touchStartTime=jr());return}if(i.touchReleaseOnEdges&&!i.loop){if(t.isVertical()){if(g<s.startY&&t.translate<=t.maxTranslate()||g>s.startY&&t.translate>=t.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(f<s.startX&&t.translate<=t.maxTranslate()||f>s.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&u.target===e.activeElement&&u.target.matches(r.focusableElements)){r.isMoved=!0,t.allowClick=!1;return}r.allowTouchCallbacks&&t.emit("touchMove",u),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=f,s.currentY=g;const w=s.currentX-s.startX,S=s.currentY-s.startY;if(t.params.threshold&&Math.sqrt(w**2+S**2)<t.params.threshold)return;if(typeof r.isScrolling>"u"){let $;t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:w*w+S*S>=25&&($=Math.atan2(Math.abs(S),Math.abs(w))*180/Math.PI,r.isScrolling=t.isHorizontal()?$>i.touchAngle:90-$>i.touchAngle)}if(r.isScrolling&&t.emit("touchMoveOpposite",u),typeof r.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(r.startMoving=!0),r.isScrolling||u.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;t.allowClick=!1,!i.cssMode&&u.cancelable&&u.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&u.stopPropagation();let b=t.isHorizontal()?w:S,R=t.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(b=Math.abs(b)*(a?1:-1),R=Math.abs(R)*(a?1:-1)),s.diff=b,b*=i.touchRatio,a&&(b=-b,R=-R);const C=t.touchesDirection;t.swipeDirection=b>0?"prev":"next",t.touchesDirection=R>0?"prev":"next";const k=t.params.loop&&!i.cssMode,L=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!r.isMoved){if(k&&L&&t.loopFix({direction:t.swipeDirection}),r.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const $=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent($)}r.allowMomentumBounce=!1,i.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",u)}let V;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&C!==t.touchesDirection&&k&&L&&Math.abs(b)>=1){Object.assign(s,{startX:f,startY:g,currentX:f,currentY:g,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}t.emit("sliderMove",u),r.isMoved=!0,r.currentTranslate=b+r.startTranslate;let O=!0,U=i.resistanceRatio;if(i.touchReleaseOnEdges&&(U=0),b>0?(k&&L&&!V&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(i.slidesPerView!=="auto"&&t.slides.length-i.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>t.minTranslate()&&(O=!1,i.resistance&&(r.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+r.startTranslate+b)**U))):b<0&&(k&&L&&!V&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(i.slidesPerView!=="auto"&&t.slides.length-i.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(i.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<t.maxTranslate()&&(O=!1,i.resistance&&(r.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-r.startTranslate-b)**U))),O&&(u.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(b)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&t.freeMode||i.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(r.currentTranslate),t.setTranslate(r.currentTranslate))}function hm(n){const e=this,t=e.touchEventsData;let r=n;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(U=>U.identifier===t.touchId)[0],!i||i.identifier!==t.touchId)return}else{if(t.touchId!==null||r.pointerId!==t.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:a,touches:l,rtlTranslate:u,slidesGrid:d,enabled:f}=e;if(!f||!a.simulateTouch&&r.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",r),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&a.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}a.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const g=jr(),w=g-t.touchStartTime;if(e.allowClick){const U=r.path||r.composedPath&&r.composedPath();e.updateClickedSlide(U&&U[0]||r.target,U),e.emit("tap click",r),w<300&&g-t.lastClickTime<300&&e.emit("doubleTap doubleClick",r)}if(t.lastClickTime=jr(),is(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||l.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let S;if(a.followFinger?S=u?e.translate:-e.translate:S=-t.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:S});return}const b=S>=-e.maxTranslate()&&!e.params.loop;let R=0,C=e.slidesSizesGrid[0];for(let U=0;U<d.length;U+=U<a.slidesPerGroupSkip?1:a.slidesPerGroup){const $=U<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof d[U+$]<"u"?(b||S>=d[U]&&S<d[U+$])&&(R=U,C=d[U+$]-d[U]):(b||S>=d[U])&&(R=U,C=d[d.length-1]-d[d.length-2])}let k=null,L=null;a.rewind&&(e.isBeginning?L=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(k=0));const V=(S-d[R])/C,O=R<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(w>a.longSwipesMs){if(!a.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(V>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?k:R+O):e.slideTo(R)),e.swipeDirection==="prev"&&(V>1-a.longSwipesRatio?e.slideTo(R+O):L!==null&&V<0&&Math.abs(V)>a.longSwipesRatio?e.slideTo(L):e.slideTo(R))}else{if(!a.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(r.target===e.navigation.nextEl||r.target===e.navigation.prevEl)?r.target===e.navigation.nextEl?e.slideTo(R+O):e.slideTo(R):(e.swipeDirection==="next"&&e.slideTo(k!==null?k:R+O),e.swipeDirection==="prev"&&e.slideTo(L!==null?L:R))}}function Pa(){const n=this,{params:e,el:t}=n;if(t&&t.offsetWidth===0)return;e.breakpoints&&n.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=n,a=n.virtual&&n.params.virtual.enabled;n.allowSlideNext=!0,n.allowSlidePrev=!0,n.updateSize(),n.updateSlides(),n.updateSlidesClasses();const l=a&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&n.isEnd&&!n.isBeginning&&!n.params.centeredSlides&&!l?n.slideTo(n.slides.length-1,0,!1,!0):n.params.loop&&!a?n.slideToLoop(n.realIndex,0,!1,!0):n.slideTo(n.activeIndex,0,!1,!0),n.autoplay&&n.autoplay.running&&n.autoplay.paused&&(clearTimeout(n.autoplay.resizeTimeout),n.autoplay.resizeTimeout=setTimeout(()=>{n.autoplay&&n.autoplay.running&&n.autoplay.paused&&n.autoplay.resume()},500)),n.allowSlidePrev=i,n.allowSlideNext=r,n.params.watchOverflow&&s!==n.snapGrid&&n.checkOverflow()}function dm(n){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&n.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(n.stopPropagation(),n.stopImmediatePropagation())))}function fm(){const n=this,{wrapperEl:e,rtlTranslate:t,enabled:r}=n;if(!r)return;n.previousTranslate=n.translate,n.isHorizontal()?n.translate=-e.scrollLeft:n.translate=-e.scrollTop,n.translate===0&&(n.translate=0),n.updateActiveIndex(),n.updateSlidesClasses();let i;const s=n.maxTranslate()-n.minTranslate();s===0?i=0:i=(n.translate-n.minTranslate())/s,i!==n.progress&&n.updateProgress(t?-n.translate:n.translate),n.emit("setTranslate",n.translate,!1)}function pm(n){const e=this;Or(e,n.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function gm(){const n=this;n.documentTouchHandlerProceeded||(n.documentTouchHandlerProceeded=!0,n.params.touchReleaseOnEdges&&(n.el.style.touchAction="auto"))}const vc=(n,e)=>{const t=dn(),{params:r,el:i,wrapperEl:s,device:a}=n,l=!!r.nested,u=e==="on"?"addEventListener":"removeEventListener",d=e;!i||typeof i=="string"||(t[u]("touchstart",n.onDocumentTouchStart,{passive:!1,capture:l}),i[u]("touchstart",n.onTouchStart,{passive:!1}),i[u]("pointerdown",n.onTouchStart,{passive:!1}),t[u]("touchmove",n.onTouchMove,{passive:!1,capture:l}),t[u]("pointermove",n.onTouchMove,{passive:!1,capture:l}),t[u]("touchend",n.onTouchEnd,{passive:!0}),t[u]("pointerup",n.onTouchEnd,{passive:!0}),t[u]("pointercancel",n.onTouchEnd,{passive:!0}),t[u]("touchcancel",n.onTouchEnd,{passive:!0}),t[u]("pointerout",n.onTouchEnd,{passive:!0}),t[u]("pointerleave",n.onTouchEnd,{passive:!0}),t[u]("contextmenu",n.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[u]("click",n.onClick,!0),r.cssMode&&s[u]("scroll",n.onScroll),r.updateOnWindowResize?n[d](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Pa,!0):n[d]("observerUpdate",Pa,!0),i[u]("load",n.onLoad,{capture:!0}))};function mm(){const n=this,{params:e}=n;n.onTouchStart=cm.bind(n),n.onTouchMove=um.bind(n),n.onTouchEnd=hm.bind(n),n.onDocumentTouchStart=gm.bind(n),e.cssMode&&(n.onScroll=fm.bind(n)),n.onClick=dm.bind(n),n.onLoad=pm.bind(n),vc(n,"on")}function _m(){vc(this,"off")}var vm={attachEvents:mm,detachEvents:_m};const Ra=(n,e)=>n.grid&&e.grid&&e.grid.rows>1;function ym(){const n=this,{realIndex:e,initialized:t,params:r,el:i}=n,s=r.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const a=n.getBreakpoint(s,n.params.breakpointsBase,n.el);if(!a||n.currentBreakpoint===a)return;const u=(a in s?s[a]:void 0)||n.originalParams,d=Ra(n,r),f=Ra(n,u),g=n.params.grabCursor,w=u.grabCursor,S=r.enabled;d&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),n.emitContainerClasses()):!d&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),n.emitContainerClasses()),g&&!w?n.unsetGrabCursor():!g&&w&&n.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(V=>{if(typeof u[V]>"u")return;const O=r[V]&&r[V].enabled,U=u[V]&&u[V].enabled;O&&!U&&n[V].disable(),!O&&U&&n[V].enable()});const b=u.direction&&u.direction!==r.direction,R=r.loop&&(u.slidesPerView!==r.slidesPerView||b),C=r.loop;b&&t&&n.changeDirection(),Be(n.params,u);const k=n.params.enabled,L=n.params.loop;Object.assign(n,{allowTouchMove:n.params.allowTouchMove,allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev}),S&&!k?n.disable():!S&&k&&n.enable(),n.currentBreakpoint=a,n.emit("_beforeBreakpoint",u),t&&(R?(n.loopDestroy(),n.loopCreate(e),n.updateSlides()):!C&&L?(n.loopCreate(e),n.updateSlides()):C&&!L&&n.loopDestroy()),n.emit("breakpoint",u)}function wm(n,e,t){if(e===void 0&&(e="window"),!n||e==="container"&&!t)return;let r=!1;const i=ze(),s=e==="window"?i.innerHeight:t.clientHeight,a=Object.keys(n).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const u=parseFloat(l.substr(1));return{value:s*u,point:l}}return{value:l,point:l}});a.sort((l,u)=>parseInt(l.value,10)-parseInt(u.value,10));for(let l=0;l<a.length;l+=1){const{point:u,value:d}=a[l];e==="window"?i.matchMedia(`(min-width: ${d}px)`).matches&&(r=u):d<=t.clientWidth&&(r=u)}return r||"max"}var Tm={setBreakpoint:ym,getBreakpoint:wm};function Em(n,e){const t=[];return n.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&t.push(e+i)}):typeof r=="string"&&t.push(e+r)}),t}function Sm(){const n=this,{classNames:e,params:t,rtl:r,el:i,device:s}=n,a=Em(["initialized",t.direction,{"free-mode":n.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:r},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...a),i.classList.add(...e),n.emitContainerClasses()}function Im(){const n=this,{el:e,classNames:t}=n;!e||typeof e=="string"||(e.classList.remove(...t),n.emitContainerClasses())}var Am={addClasses:Sm,removeClasses:Im};function bm(){const n=this,{isLocked:e,params:t}=n,{slidesOffsetBefore:r}=t;if(r){const i=n.slides.length-1,s=n.slidesGrid[i]+n.slidesSizesGrid[i]+r*2;n.isLocked=n.size>s}else n.isLocked=n.snapGrid.length===1;t.allowSlideNext===!0&&(n.allowSlideNext=!n.isLocked),t.allowSlidePrev===!0&&(n.allowSlidePrev=!n.isLocked),e&&e!==n.isLocked&&(n.isEnd=!1),e!==n.isLocked&&n.emit(n.isLocked?"lock":"unlock")}var Pm={checkOverflow:bm},Ca={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Rm(n,e){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],s=r[i];if(typeof s!="object"||s===null){Be(e,r);return}if(n[i]===!0&&(n[i]={enabled:!0}),i==="navigation"&&n[i]&&n[i].enabled&&!n[i].prevEl&&!n[i].nextEl&&(n[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&n[i]&&n[i].enabled&&!n[i].el&&(n[i].auto=!0),!(i in n&&"enabled"in s)){Be(e,r);return}typeof n[i]=="object"&&!("enabled"in n[i])&&(n[i].enabled=!0),n[i]||(n[i]={enabled:!1}),Be(e,r)}}const Oi={eventsEmitter:Ag,update:Mg,translate:Gg,transition:$g,slide:em,loop:im,grabCursor:am,events:vm,breakpoints:Tm,checkOverflow:Pm,classes:Am},Li={};class Fe{constructor(){let e,t;for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?t=i[0]:[e,t]=i,t||(t={}),t=Be({},t),e&&!t.el&&(t.el=e);const a=dn();if(t.el&&typeof t.el=="string"&&a.querySelectorAll(t.el).length>1){const f=[];return a.querySelectorAll(t.el).forEach(g=>{const w=Be({},t,{el:g});f.push(new Fe(w))}),f}const l=this;l.__swiper__=!0,l.support=gc(),l.device=mc({userAgent:t.userAgent}),l.browser=Eg(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],t.modules&&Array.isArray(t.modules)&&l.modules.push(...t.modules);const u={};l.modules.forEach(f=>{f({params:t,swiper:l,extendParams:Rm(t,u),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const d=Be({},Ca,u);return l.params=Be({},d,Li,t),l.originalParams=Be({},l.params),l.passedParams=Be({},t),l.params&&l.params.on&&Object.keys(l.params.on).forEach(f=>{l.on(f,l.params.on[f])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:r}=this,i=Qe(t,`.${r.slideClass}, swiper-slide`),s=Sa(i[0]);return Sa(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:r}=e;e.slides=Qe(t,`.${r.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const r=this;e=Math.min(Math.max(e,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*e+i;r.translateTo(a,typeof t>"u"?0:t),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(r=>{const i=e.getSlideClasses(r);t.push({slideEl:r,classNames:i}),e.emit("_slideClass",r,i)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const r=this,{params:i,slides:s,slidesGrid:a,slidesSizesGrid:l,size:u,activeIndex:d}=r;let f=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let g=s[d]?Math.ceil(s[d].swiperSlideSize):0,w;for(let S=d+1;S<s.length;S+=1)s[S]&&!w&&(g+=Math.ceil(s[S].swiperSlideSize),f+=1,g>u&&(w=!0));for(let S=d-1;S>=0;S-=1)s[S]&&!w&&(g+=s[S].swiperSlideSize,f+=1,g>u&&(w=!0))}else if(e==="current")for(let g=d+1;g<s.length;g+=1)(t?a[g]+l[g]-a[d]<u:a[g]-a[d]<u)&&(f+=1);else for(let g=d-1;g>=0;g-=1)a[d]-a[g]<u&&(f+=1);return f}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:r}=e;r.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&Or(e,a)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function i(){const a=e.rtlTranslate?e.translate*-1:e.translate,l=Math.min(Math.max(a,e.maxTranslate()),e.minTranslate());e.setTranslate(l),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&e.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&e.isEnd&&!r.centeredSlides){const a=e.virtual&&r.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(a.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||i()}r.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const r=this,i=r.params.direction;return e||(e=i==="horizontal"?"vertical":"horizontal"),e===i||e!=="horizontal"&&e!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${e}`),r.emitContainerClasses(),r.params.direction=e,r.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),r.emit("changeDirection"),t&&r.update()),r}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let r=e||t.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=t,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):Qe(r,i())[0];return!a&&t.params.createElements&&(a=Hr("div",t.params.wrapperClass),r.append(a),Qe(r,`.${t.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(t,{el:r,wrapperEl:a,slidesEl:t.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:t.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||gt(r,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||gt(r,"direction")==="rtl"),wrongRTL:gt(a,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const i=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(s=>{s.complete?Or(t,s):s.addEventListener("load",a=>{Or(t,a.target)})}),ss(t),t.initialized=!0,ss(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const r=this,{params:i,el:s,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),t&&(r.removeClasses(),s&&typeof s!="string"&&s.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(u=>{u.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),u.removeAttribute("style"),u.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(u=>{r.off(u)}),e!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),hg(r)),r.destroyed=!0),null}static extendDefaults(e){Be(Li,e)}static get extendedDefaults(){return Li}static get defaults(){return Ca}static installModule(e){Fe.prototype.__modules__||(Fe.prototype.__modules__=[]);const t=Fe.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>Fe.installModule(t)),Fe):(Fe.installModule(e),Fe)}}Object.keys(Oi).forEach(n=>{Object.keys(Oi[n]).forEach(e=>{Fe.prototype[e]=Oi[n][e]})});Fe.use([Sg,Ig]);function Cm(n,e,t,r){return n.params.createElements&&Object.keys(r).forEach(i=>{if(!t[i]&&t.auto===!0){let s=Qe(n.el,`.${r[i]}`)[0];s||(s=Hr("div",r[i]),s.className=r[i],n.el.append(s)),t[i]=s,e[i]=s}}),t}function xm(n){let{swiper:e,extendParams:t,on:r,emit:i}=n;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function s(b){let R;return b&&typeof b=="string"&&e.isElement&&(R=e.el.querySelector(b),R)?R:(b&&(typeof b=="string"&&(R=[...document.querySelectorAll(b)]),e.params.uniqueNavElements&&typeof b=="string"&&R&&R.length>1&&e.el.querySelectorAll(b).length===1?R=e.el.querySelector(b):R&&R.length===1&&(R=R[0])),b&&!R?b:R)}function a(b,R){const C=e.params.navigation;b=st(b),b.forEach(k=>{k&&(k.classList[R?"add":"remove"](...C.disabledClass.split(" ")),k.tagName==="BUTTON"&&(k.disabled=R),e.params.watchOverflow&&e.enabled&&k.classList[e.isLocked?"add":"remove"](C.lockClass))})}function l(){const{nextEl:b,prevEl:R}=e.navigation;if(e.params.loop){a(R,!1),a(b,!1);return}a(R,e.isBeginning&&!e.params.rewind),a(b,e.isEnd&&!e.params.rewind)}function u(b){b.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function d(b){b.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function f(){const b=e.params.navigation;if(e.params.navigation=Cm(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(b.nextEl||b.prevEl))return;let R=s(b.nextEl),C=s(b.prevEl);Object.assign(e.navigation,{nextEl:R,prevEl:C}),R=st(R),C=st(C);const k=(L,V)=>{L&&L.addEventListener("click",V==="next"?d:u),!e.enabled&&L&&L.classList.add(...b.lockClass.split(" "))};R.forEach(L=>k(L,"next")),C.forEach(L=>k(L,"prev"))}function g(){let{nextEl:b,prevEl:R}=e.navigation;b=st(b),R=st(R);const C=(k,L)=>{k.removeEventListener("click",L==="next"?d:u),k.classList.remove(...e.params.navigation.disabledClass.split(" "))};b.forEach(k=>C(k,"next")),R.forEach(k=>C(k,"prev"))}r("init",()=>{e.params.navigation.enabled===!1?S():(f(),l())}),r("toEdge fromEdge lock unlock",()=>{l()}),r("destroy",()=>{g()}),r("enable disable",()=>{let{nextEl:b,prevEl:R}=e.navigation;if(b=st(b),R=st(R),e.enabled){l();return}[...b,...R].filter(C=>!!C).forEach(C=>C.classList.add(e.params.navigation.lockClass))}),r("click",(b,R)=>{let{nextEl:C,prevEl:k}=e.navigation;C=st(C),k=st(k);const L=R.target;let V=k.includes(L)||C.includes(L);if(e.isElement&&!V){const O=R.path||R.composedPath&&R.composedPath();O&&(V=O.find(U=>C.includes(U)||k.includes(U)))}if(e.params.navigation.hideOnClick&&!V){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===L||e.pagination.el.contains(L)))return;let O;C.length?O=C[0].classList.contains(e.params.navigation.hiddenClass):k.length&&(O=k[0].classList.contains(e.params.navigation.hiddenClass)),i(O===!0?"navigationShow":"navigationHide"),[...C,...k].filter(U=>!!U).forEach(U=>U.classList.toggle(e.params.navigation.hiddenClass))}});const w=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),f(),l()},S=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),g()};Object.assign(e.navigation,{enable:w,disable:S,update:l,init:f,destroy:g})}function km(n,e,t){let r=t;for(let i=0;i<e.length;i++)new YT.Player(e[i],{videoId:n[i],playerVars:{controls:0,rel:0,fs:0,enablejsapi:1,modestbranding:1},events:{onStateChange:function(a){new IntersectionObserver(u=>{u.forEach(d=>{d.isIntersecting||a.target.pauseVideo()})}).observe(r)}}})}Fe.use([xm]);function Lr(n,e,t,r,i,s=null,a=null,l=null,u=null){new Fe(n,{autoplay:{delay:500},slidesPerView:r,spaceBetween:i,breakpoints:s,loop:!0,navigation:{nextEl:t,prevEl:e},on:{init:d,slideChange:f=>{document.querySelectorAll(".swiper-slide").forEach(g=>{const w=g.querySelector("iframe");w&&w.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}}});function d(){a&&km(l,a,u)}}async function Vm(n){const e=await ns(n,"videoId","main-pages"),t=W(".manufacturing__player",!0);Lr(W(".manufacturing__swiper-video"),W(".manufacturing__button-prev"),W(".manufacturing__button-next"),"auto",0,null,t,e.mainPage,W(".manufacturing__swiper")),Lr(W(".news-swiper__cards"),W(".news-swiper__prev-button"),W(".news-swiper__next-button"),null,null,{1920:{slidesPerView:3,spaceBetween:35},1440:{slidesPerView:3,spaceBetween:35},1140:{slidesPerView:3,spaceBetween:20},767:{slidesPerView:2,spaceBetween:20},375:{slidesPerView:1.4,spaceBetween:5},320:{slidesPerView:1.1,spaceBetween:5}}),Lr(W(".swiper"),W(".eco-nuts__button-prev"),W(".eco-nuts__button-next"),"auto",0)}function Dm(n,e){let t=document.createDocumentFragment(),r=[];if(n.length===0)return e.innerHTML="<p>Сталася помилка. Або продукція відсутня</p>";for(let i of n){let s="",a="";i.imgUrl.forEach(()=>{a+='<div class="swiper-slide"><img class="product__slide" src="" /></div>'}),s=`${i.action||i.newProduct?`<div class ="product__card-flag ${i.action?"product__card-flag-discount":"product__card-flag-new"}">
                <p class ="product__card-flag-text">${i.action?"АКЦИЯ":"НОВИНКА"}</p>
            </div>`:""}  
            <a href="#" class="">
                <div class="product__card-swiper">
                    <div class="product__card-search">
                    <button class="circle-button">
                    <svg class='circle-button-svg'>
                        <use href='#search'></use></svg>
                        </button>
                    </div>
                    <div class="swiper">
                        <div class="swiper-wrapper">
                        ${a}
                        </div>
                    </div>
                    <div class="product__card-button-prev">
                        <svg class="product__card-svg-arrow">
                            <use href="#arrow"></use>
                        </svg>
                    </div>
                    <div class="product__card-button-next">
                        <svg class="product__card-svg-arrow">
                            <use href="#arrow"></use>
                        </svg>
                    </div>
                </div>
                <div class="product__card-text-block">
                    <h4 class="product__card-type">${i.nutsType}</h4>
                    <p class="product__card-art">Арт:${i.art}</p>
                    <h3 class="product__card-title">${i.title}</h3>
                    <div class="product__card-info">
                        <div class="product__card-weight">
                            <svg class="product__card-weight-svg">
                                <use href="#weights"></use>
                            </svg>
                            <div class="product__card-weight-block">
                                <p class="product__card-weight-text">Масса:</p>
                                <p class="product__card-weight-data">${i.weight}</p>
                            </div>
                        </div>
                        <div class="product__card-packaging">
                            <svg class="product__card-packaging-svg">
                                <use href="#package"></use>
                            </svg>
                            <div class="product__card-packaging-block">
                                <p class="product__card-packaging-text">Упаковка</p>
                                <p class="product__card-packaging-data">${i.packaging}</p>
                            </div>
                        </div>
                    </div>
                    <div class="product__card-bottom">
                        <div class="product__card-bottom-price">
                            <p class="product__card-bottom-price-text">Цена:</p>
                            ${i.price&&i.cationPrice?`<p class="product__card-bottom-price-regular product__card-bottom-price-green">
                            ${i.cationPrice}<span>грн.</span></p>
                            <p class="product__card-bottom-price-discount product__card-bottom-price-gray">
                            ${i.price}<span>грн.</span></p>`:`<p class="product__card-bottom-price-regular product__card-bottom-price-green">
                            ${i.price}<span>грн.</span></p>`}
                        </div>
                        <button class="green-button product__card-bottom-buy">
                            <span>Купить</span>
                        </button>
                    </div>
                </div>
            </a>`;const l=document.createElement("div");l.classList.add("product__card"),l.setAttribute("data-arc",i.art),l.setAttribute("data-weight",i.weight),l.setAttribute("data-taste",i.taste),l.setAttribute("data-price",i.cationPrice?i.cationPrice:i.price),l.innerHTML=s,r.push({swiper:l.querySelector(".swiper"),next:l.querySelector(".product__card-button-next"),prev:l.querySelector(".product__card-button-prev")});for(let u=0;u<i.imgUrl.length;++u){const d=l.querySelectorAll(".product__slide");let f=0;d.forEach(g=>{me(i.imgUrl[f++],g)})}t.append(l)}return e&&e.append(t),r}function Om(n,e){let t=document.createDocumentFragment();n.forEach(r=>{let i="";i=`<div class="news-swiper__card">
             <img class="news-swiper__card-img" src=""  alt="зображення новини"/>
             <div class="news-swiper__card-text-block">
                 <p class="news-swiper__card-date">${r.date}</p>
                 <h3 class="news-swiper__card-title">${r.mainTitle}</h3>
                 <p class="news-swiper__card-text">
                     ${r.summary}
                 </p>
                 <a class="news-swiper__card-link" href="#"
                     ><span class="news-swiper__card-link-text"> Читать </span
                     ><span class="news-swiper__card-link-arrow">
                         <svg class="news-swiper__card-svg">
                             <use href="#long-arrow"></use>
                         </svg>
                     </span>
                 </a>
             </div>
        </div>`;let s=document.createElement("div");s.classList.add("swiper-slide"),s.innerHTML=i,me(r.url[0],s.querySelector(".news-swiper__card-img")),t.appendChild(s)}),e&&e.append(t)}async function Lm(n){const e=await ns(n,"products"),t=await ns(n,"news");Dm(e,W(".product__cards")).forEach(i=>{Lr(i.swiper,i.prev,i.next,"auto",0)}),Om(t,W(".news-swiper__renders"))}function Mm(n,e,t,r,i,s){const a={},l=n,u=Array.from(n);let d;s&&(r.addEventListener("click",()=>{d="lover",f(),u.sort((g,w)=>parseInt(g.getAttribute("data-price"))-parseInt(w.getAttribute("data-price"))),u.forEach(g=>{s.appendChild(g)})}),i.addEventListener("click",()=>{d="higher",f(),u.sort((g,w)=>parseInt(w.getAttribute("data-price"))-parseInt(g.getAttribute("data-price"))),u.forEach(g=>{s.appendChild(g)})}),e.addEventListener("click",()=>{a.weight=document.querySelector(".product-filter__current-weight").textContent.trim(),a.taste=document.querySelector(".product-filter__current-taste").textContent.trim(),n.forEach(g=>{let w=!0;if(a.weight!=="Масса"){const S=parseInt(g.getAttribute("data-weight")),[b,R]=a.weight.split("-").map(Number);(S<b||S>R)&&(w=!1)}if(a.taste!=="Вкус"){const S=g.getAttribute("data-taste");a.taste!==S&&(w=!1)}g.classList.toggle("hidden",!w)})}),t.addEventListener("click",()=>{xa(n,".product-filter__current-weight","Масса"),xa(n,".product-filter__current-taste","Вкус"),l.forEach(g=>{s.appendChild(g)}),d=null,f()}));function f(){switch(d){case"lover":r.children[0].firstChild.classList.add("product-filter__cost-svg-active"),i.children[0].firstChild.classList.remove("product-filter__cost-svg-active");break;case"higher":r.children[0].firstChild.classList.remove("product-filter__cost-svg-active"),i.children[0].firstChild.classList.add("product-filter__cost-svg-active");break;case null:r.children[0].firstChild.classList.remove("product-filter__cost-svg-active"),i.children[0].firstChild.classList.remove("product-filter__cost-svg-active");break}}}function xa(n,e,t){n.forEach(r=>{r.classList.remove("hidden")}),document.querySelector(e).textContent=t}function Ln(n,e){e.forEach(i=>{const s=i.querySelector(".select__svg"),a=i.querySelector(".select__body"),l=i.querySelector(".select__header");i.addEventListener("click",u=>{const d=u.target.closest(".select__header"),f=u.target.closest(".select__item");d&&t(d,a,s),f&&(t(l,a,s),n.forEach(g=>{g.textContent=f.textContent}))}),document.addEventListener("click",u=>{i.contains(u.target)||r(l,a,s)})});function t(i,s,a){i.classList.toggle("select__header-active"),s.classList.toggle("select__body-active"),a.classList.toggle("select__svg-active")}function r(i,s,a){i.classList.remove("select__header-active"),s.classList.remove("select__body-active"),a.classList.remove("select__svg-active")}}function Nm(){Ln(W(".header__select-language",!0),W(".header__select",!0)),Ln(W(".product-filter__current-weight",!0),W(".product-filter__select-weight",!0)),Ln(W(".product-filter__current-taste",!0),W(".product-filter__select-taste",!0)),Ln(W(".registration__current-country",!0),W(".registration__select-country",!0)),Ln(W(".registration__current-region",!0),W(".registration__select-region",!0))}function Fm(n){n.forEach(e=>{e.addEventListener("input",()=>{let t=!1;e.value.trim()!==""&&(t=!0),e.previousElementSibling.classList.toggle("registration__label_active",t)})})}function Bm(n,e){e.addEventListener("input",()=>{const t=new FileReader,r=e.files[0];t.readAsDataURL(r),t.onload=()=>{n.src=t.result}})}document.addEventListener("DOMContentLoaded",async function(){const n=await mh();lg(),Nm(),jc(),await Vm(n),await Lm(n),Mm(W(".product__card",!0),W(".product-filter__apply-button"),W(".product-filter__cross-button"),W(".product-filter__higher-price"),W(".product-filter__lower-price"),W(".product__cards")),Fm(W(".registration__input",!0)),Bm(W(".registration__input-img"),W(".registration__photo-input"))});
