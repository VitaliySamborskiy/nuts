(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Uc(){const n=document.querySelectorAll(".select"),e=document.querySelectorAll(".select__current");n.forEach(i=>{const s=i.querySelector(".select__svg"),a=i.querySelector(".select__body"),l=i.querySelector(".select__header");i.addEventListener("click",u=>{const d=u.target.closest(".select__header"),f=u.target.closest(".select__item");d&&t(d,a,s),f&&(t(l,a,s),e.forEach(y=>{y.textContent=f.textContent}))}),document.addEventListener("click",u=>{i.contains(u.target)||r(l,a,s)})});function t(i,s,a){i.classList.toggle("select__header-active"),s.classList.toggle("select__body-active"),a.classList.toggle("select__svg-active")}function r(i,s,a){i.classList.remove("select__header-active"),s.classList.remove("select__body-active"),a.classList.remove("select__svg-active")}}var zc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Ca={exports:{}};(function(n,e){(function(r,i){n.exports=i()})(zc,function(){return function(t){var r={};function i(s){if(r[s])return r[s].exports;var a=r[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=t,i.c=r,i.d=function(s,a,l){i.o(s,a)||Object.defineProperty(s,a,{enumerable:!0,get:l})},i.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},i.t=function(s,a){if(a&1&&(s=i(s)),a&8||a&4&&typeof s=="object"&&s&&s.__esModule)return s;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:s}),a&2&&typeof s!="string")for(var u in s)i.d(l,u,(function(d){return s[d]}).bind(null,u));return l},i.n=function(s){var a=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(a,"a",a),a},i.o=function(s,a){return Object.prototype.hasOwnProperty.call(s,a)},i.p="",i(i.s=0)}([function(t,r,i){i.r(r);var s=function(T){return Array.isArray(T)?T:[T]},a=function(T){return T instanceof Node},l=function(T){return T instanceof NodeList},u=function(T,M){if(T&&M){T=l(T)?T:[T];for(var z=0;z<T.length&&M(T[z],z,T.length)!==!0;z++);}},d=function(T){return console.error("[scroll-lock] ".concat(T))},f=function(T){if(Array.isArray(T)){var M=T.join(", ");return M}},y=function(T){var M=[];return u(T,function(z){return M.push(z)}),M},w=function(T,M){var z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,q=arguments.length>3&&arguments[3]!==void 0?arguments[3]:document;if(z&&y(q.querySelectorAll(M)).indexOf(T)!==-1)return T;for(;(T=T.parentElement)&&y(q.querySelectorAll(M)).indexOf(T)===-1;);return T},I=function(T,M){var z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document,q=y(z.querySelectorAll(M)).indexOf(T)!==-1;return q},b=function(T){if(T){var M=getComputedStyle(T),z=M.overflow==="hidden";return z}},R=function(T){if(T){if(b(T))return!0;var M=T.scrollTop;return M<=0}},C=function(T){if(T){if(b(T))return!0;var M=T.scrollTop,z=T.scrollHeight,q=M+T.offsetHeight;return q>=z}},k=function(T){if(T){if(b(T))return!0;var M=T.scrollLeft;return M<=0}},L=function(T){if(T){if(b(T))return!0;var M=T.scrollLeft,z=T.scrollWidth,q=M+T.offsetWidth;return q>=z}},V=function(T){var M='textarea, [contenteditable="true"]';return I(T,M)},O=function(T){var M='input[type="range"]';return I(T,M)};i.d(r,"disablePageScroll",function(){return v}),i.d(r,"enablePageScroll",function(){return E}),i.d(r,"getScrollState",function(){return S}),i.d(r,"clearQueueScrollLocks",function(){return g}),i.d(r,"getTargetScrollBarWidth",function(){return Q}),i.d(r,"getCurrentTargetScrollBarWidth",function(){return re}),i.d(r,"getPageScrollBarWidth",function(){return ke}),i.d(r,"getCurrentPageScrollBarWidth",function(){return Ge}),i.d(r,"addScrollableTarget",function(){return De}),i.d(r,"removeScrollableTarget",function(){return je}),i.d(r,"addScrollableSelector",function(){return ot}),i.d(r,"removeScrollableSelector",function(){return Ft}),i.d(r,"addLockableTarget",function(){return Oe}),i.d(r,"addLockableSelector",function(){return de}),i.d(r,"setFillGapMethod",function(){return er}),i.d(r,"addFillGapTarget",function(){return Ze}),i.d(r,"removeFillGapTarget",function(){return tr}),i.d(r,"addFillGapSelector",function(){return et}),i.d(r,"removeFillGapSelector",function(){return nr}),i.d(r,"refillGaps",function(){return Bt});function U(B){for(var T=1;T<arguments.length;T++){var M=arguments[T]!=null?arguments[T]:{},z=Object.keys(M);typeof Object.getOwnPropertySymbols=="function"&&(z=z.concat(Object.getOwnPropertySymbols(M).filter(function(q){return Object.getOwnPropertyDescriptor(M,q).enumerable}))),z.forEach(function(q){$(B,q,M[q])})}return B}function $(B,T,M){return T in B?Object.defineProperty(B,T,{value:M,enumerable:!0,configurable:!0,writable:!0}):B[T]=M,B}var A=["padding","margin","width","max-width","none"],_=3,m={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:A[0],startTouchY:0,startTouchX:0},v=function(T){m.queue<=0&&(m.scroll=!1,at(),gn()),De(T),m.queue++},E=function(T){m.queue>0&&m.queue--,m.queue<=0&&(m.scroll=!0,Ut(),ei()),je(T)},S=function(){return m.scroll},g=function(){m.queue=0},Q=function(T){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a(T)){var z=T.style.overflowY;M?S()||(T.style.overflowY=T.getAttribute("data-scroll-lock-saved-overflow-y-property")):T.style.overflowY="scroll";var q=re(T);return T.style.overflowY=z,q}else return 0},re=function(T){if(a(T))if(T===document.body){var M=document.documentElement.clientWidth,z=window.innerWidth,q=z-M;return q}else{var Ue=T.style.borderLeftWidth,He=T.style.borderRightWidth;T.style.borderLeftWidth="0px",T.style.borderRightWidth="0px";var ze=T.offsetWidth-T.clientWidth;return T.style.borderLeftWidth=Ue,T.style.borderRightWidth=He,ze}else return 0},ke=function(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return Q(document.body,T)},Ge=function(){return re(document.body)},De=function(T){if(T){var M=s(T);M.map(function(z){u(z,function(q){a(q)?q.setAttribute("data-scroll-lock-scrollable",""):d('"'.concat(q,'" is not a Element.'))})})}},je=function(T){if(T){var M=s(T);M.map(function(z){u(z,function(q){a(q)?q.removeAttribute("data-scroll-lock-scrollable"):d('"'.concat(q,'" is not a Element.'))})})}},ot=function(T){if(T){var M=s(T);M.map(function(z){m.scrollableSelectors.push(z)})}},Ft=function(T){if(T){var M=s(T);M.map(function(z){m.scrollableSelectors=m.scrollableSelectors.filter(function(q){return q!==z})})}},Oe=function(T){if(T){var M=s(T);M.map(function(z){u(z,function(q){a(q)?q.setAttribute("data-scroll-lock-lockable",""):d('"'.concat(q,'" is not a Element.'))})}),S()||at()}},de=function(T){if(T){var M=s(T);M.map(function(z){m.lockableSelectors.push(z)}),S()||at(),et(T)}},er=function(T){if(T)if(A.indexOf(T)!==-1)m.fillGapMethod=T,Bt();else{var M=A.join(", ");d('"'.concat(T,`" method is not available!
Available fill gap methods: `).concat(M,"."))}},Ze=function(T){if(T){var M=s(T);M.map(function(z){u(z,function(q){a(q)?(q.setAttribute("data-scroll-lock-fill-gap",""),m.scroll||yn(q)):d('"'.concat(q,'" is not a Element.'))})})}},tr=function(T){if(T){var M=s(T);M.map(function(z){u(z,function(q){a(q)?(q.removeAttribute("data-scroll-lock-fill-gap"),m.scroll||Gt(q)):d('"'.concat(q,'" is not a Element.'))})})}},et=function(T){if(T){var M=s(T);M.map(function(z){m.fillGapSelectors.indexOf(z)===-1&&(m.fillGapSelectors.push(z),m.scroll||rr(z))})}},nr=function(T){if(T){var M=s(T);M.map(function(z){m.fillGapSelectors=m.fillGapSelectors.filter(function(q){return q!==z}),m.scroll||zt(z)})}},Bt=function(){m.scroll||gn()},at=function(){var T=f(m.lockableSelectors);dn(T)},Ut=function(){var T=f(m.lockableSelectors);fn(T)},dn=function(T){var M=document.querySelectorAll(T);u(M,function(z){pn(z)})},fn=function(T){var M=document.querySelectorAll(T);u(M,function(z){mn(z)})},pn=function(T){if(a(T)&&T.getAttribute("data-scroll-lock-locked")!=="true"){var M=window.getComputedStyle(T);T.setAttribute("data-scroll-lock-saved-overflow-y-property",M.overflowY),T.setAttribute("data-scroll-lock-saved-inline-overflow-property",T.style.overflow),T.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",T.style.overflowY),T.style.overflow="hidden",T.setAttribute("data-scroll-lock-locked","true")}},mn=function(T){a(T)&&T.getAttribute("data-scroll-lock-locked")==="true"&&(T.style.overflow=T.getAttribute("data-scroll-lock-saved-inline-overflow-property"),T.style.overflowY=T.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),T.removeAttribute("data-scroll-lock-saved-overflow-property"),T.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),T.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),T.removeAttribute("data-scroll-lock-locked"))},gn=function(){m.fillGapSelectors.map(function(T){rr(T)})},ei=function(){m.fillGapSelectors.map(function(T){zt(T)})},rr=function(T){var M=document.querySelectorAll(T),z=m.lockableSelectors.indexOf(T)!==-1;u(M,function(q){yn(q,z)})},yn=function(T){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a(T)){var z;if(T.getAttribute("data-scroll-lock-lockable")===""||M)z=Q(T,!0);else{var q=w(T,f(m.lockableSelectors));z=Q(q,!0)}T.getAttribute("data-scroll-lock-filled-gap")==="true"&&Gt(T);var Ue=window.getComputedStyle(T);if(T.setAttribute("data-scroll-lock-filled-gap","true"),T.setAttribute("data-scroll-lock-current-fill-gap-method",m.fillGapMethod),m.fillGapMethod==="margin"){var He=parseFloat(Ue.marginRight);T.style.marginRight="".concat(He+z,"px")}else if(m.fillGapMethod==="width")T.style.width="calc(100% - ".concat(z,"px)");else if(m.fillGapMethod==="max-width")T.style.maxWidth="calc(100% - ".concat(z,"px)");else if(m.fillGapMethod==="padding"){var ze=parseFloat(Ue.paddingRight);T.style.paddingRight="".concat(ze+z,"px")}}},zt=function(T){var M=document.querySelectorAll(T);u(M,function(z){Gt(z)})},Gt=function(T){if(a(T)&&T.getAttribute("data-scroll-lock-filled-gap")==="true"){var M=T.getAttribute("data-scroll-lock-current-fill-gap-method");T.removeAttribute("data-scroll-lock-filled-gap"),T.removeAttribute("data-scroll-lock-current-fill-gap-method"),M==="margin"?T.style.marginRight="":M==="width"?T.style.width="":M==="max-width"?T.style.maxWidth="":M==="padding"&&(T.style.paddingRight="")}},ti=function(T){Bt()},_n=function(T){m.scroll||(m.startTouchY=T.touches[0].clientY,m.startTouchX=T.touches[0].clientX)},vn=function(T){if(!m.scroll){var M=m.startTouchY,z=m.startTouchX,q=T.touches[0].clientY,Ue=T.touches[0].clientX;if(T.touches.length<2){var He=f(m.scrollableSelectors),ze={up:M<q,down:M>q,left:z<Ue,right:z>Ue},qt={up:M+_<q,down:M-_>q,left:z+_<Ue,right:z-_>Ue},ni=function jt(ae){var sr=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(ae){var tt=w(ae,He,!1);if(O(ae))return!1;if(sr||V(ae)&&w(ae,He)||I(ae,He)){var lt=!1;k(ae)&&L(ae)?(ze.up&&R(ae)||ze.down&&C(ae))&&(lt=!0):R(ae)&&C(ae)?(ze.left&&k(ae)||ze.right&&L(ae))&&(lt=!0):(qt.up&&R(ae)||qt.down&&C(ae)||qt.left&&k(ae)||qt.right&&L(ae))&&(lt=!0),lt&&(tt?jt(tt,!0):T.cancelable&&T.preventDefault())}else jt(tt)}else T.cancelable&&T.preventDefault()};ni(T.target)}}},ir=function(T){m.scroll||(m.startTouchY=0,m.startTouchX=0)};typeof window<"u"&&window.addEventListener("resize",ti),typeof document<"u"&&(document.addEventListener("touchstart",_n),document.addEventListener("touchmove",vn,{passive:!1}),document.addEventListener("touchend",ir));var pe={hide:function(T){d(`"hide" is deprecated! Use "disablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget`),v(T)},show:function(T){d(`"show" is deprecated! Use "enablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget`),E(T)},toggle:function(T){d('"toggle" is deprecated! Do not use it.'),S()?v():E(T)},getState:function(){return d(`"getState" is deprecated! Use "getScrollState" instead. 
 https://github.com/FL3NKEY/scroll-lock#getscrollstate`),S()},getWidth:function(){return d(`"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth`),ke()},getCurrentWidth:function(){return d(`"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth`),Ge()},setScrollableTargets:function(T){d(`"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget`),De(T)},setFillGapSelectors:function(T){d(`"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector`),et(T)},setFillGapTargets:function(T){d(`"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget`),Ze(T)},clearQueue:function(){d(`"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. 
 https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks`),g()}},_e=U({disablePageScroll:v,enablePageScroll:E,getScrollState:S,clearQueueScrollLocks:g,getTargetScrollBarWidth:Q,getCurrentTargetScrollBarWidth:re,getPageScrollBarWidth:ke,getCurrentPageScrollBarWidth:Ge,addScrollableSelector:ot,removeScrollableSelector:Ft,addScrollableTarget:De,removeScrollableTarget:je,addLockableSelector:de,addLockableTarget:Oe,addFillGapSelector:et,removeFillGapSelector:nr,addFillGapTarget:Ze,removeFillGapTarget:tr,setFillGapMethod:er,refillGaps:Bt,_state:m},pe);r.default=_e}]).default})})(Ca);var vo=Ca.exports;function Gc(){const n=document.querySelector(".burger"),e=document.querySelector(".burger__background"),t=document.querySelector(".burger__scroll");n.addEventListener("click",r=>{const i=r.target.closest(".burger__icon"),s=r.target.closest(".burger__close");i&&(e.classList.toggle("burger__background_active"),vo.disablePageScroll(t)),s&&(e.classList.remove("burger__background_active"),vo.enablePageScroll(t))})}var wo={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},qc=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},ka={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,f=s>>2,y=(s&3)<<4|l>>4;let w=(l&15)<<2|d>>6,I=d&63;u||(I=64,a||(w=64)),r.push(t[f],t[y],t[w],t[I])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(xa(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):qc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const y=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||d==null||y==null)throw new jc;const w=s<<2|l>>4;if(r.push(w),d!==64){const I=l<<4&240|d>>2;if(r.push(I),y!==64){const b=d<<6&192|y;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class jc extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hc=function(n){const e=xa(n);return ka.encodeByteArray(e,!0)},Dr=function(n){return Hc(n).replace(/\./g,"")},$c=function(n){try{return ka.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Wc(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Kc=()=>Wc().__FIREBASE_DEFAULTS__,Qc=()=>{if(typeof process>"u"||typeof wo>"u")return;const n=wo.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Yc=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&$c(n[1]);return e&&JSON.parse(e)},ns=()=>{try{return Kc()||Qc()||Yc()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Xc=n=>{var e,t;return(t=(e=ns())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Va=n=>{const e=Xc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Da=()=>{var n;return(n=ns())===null||n===void 0?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Oa(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Dr(JSON.stringify(t)),Dr(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function eu(){var n;const e=(n=ns())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function tu(){return!eu()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function nu(){try{return typeof indexedDB=="object"}catch{return!1}}function ru(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iu="FirebaseError";class Nt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=iu,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,La.prototype.create)}}class La{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?su(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new Nt(i,l,r)}}function su(n,e){return n.replace(ou,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ou=/\{\$([^}]+)}/g;function Di(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(To(s)&&To(a)){if(!Di(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function To(n){return n!==null&&typeof n=="object"}/**
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
 */function Qn(n){return n&&n._delegate?n._delegate:n}class en{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Jc;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(cu(e))try{this.getOrInitializeService({instanceIdentifier:Pt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Pt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pt){return this.instances.has(e)}getOptions(e=Pt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lu(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pt){return this.component?this.component.multipleInstances?e:Pt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lu(n){return n===Pt?void 0:n}function cu(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new au(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(J||(J={}));const hu={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},du=J.INFO,fu={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},pu=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=fu[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ma{constructor(e){this.name=e,this._logLevel=du,this._logHandler=pu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const mu=(n,e)=>e.some(t=>n instanceof t);let Eo,So;function gu(){return Eo||(Eo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yu(){return So||(So=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Na=new WeakMap,Oi=new WeakMap,Fa=new WeakMap,gi=new WeakMap,rs=new WeakMap;function _u(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(mt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Na.set(t,n)}).catch(()=>{}),rs.set(e,n),e}function vu(n){if(Oi.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});Oi.set(n,e)}let Li={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Oi.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Fa.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function wu(n){Li=n(Li)}function Tu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(yi(this),e,...t);return Fa.set(r,e.sort?e.sort():[e]),mt(r)}:yu().includes(n)?function(...e){return n.apply(yi(this),e),mt(Na.get(this))}:function(...e){return mt(n.apply(yi(this),e))}}function Eu(n){return typeof n=="function"?Tu(n):(n instanceof IDBTransaction&&vu(n),mu(n,gu())?new Proxy(n,Li):n)}function mt(n){if(n instanceof IDBRequest)return _u(n);if(gi.has(n))return gi.get(n);const e=Eu(n);return e!==n&&(gi.set(n,e),rs.set(e,n)),e}const yi=n=>rs.get(n);function Su(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=mt(a);return r&&a.addEventListener("upgradeneeded",u=>{r(mt(a.result),u.oldVersion,u.newVersion,mt(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Iu=["get","getKey","getAll","getAllKeys","count"],Au=["put","add","delete","clear"],_i=new Map;function Io(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(_i.get(e))return _i.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Au.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Iu.includes(t)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&u.done]))[0]};return _i.set(e,s),s}wu(n=>({...n,get:(e,t,r)=>Io(e,t)||n.get(e,t,r),has:(e,t)=>!!Io(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Pu(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Pu(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mi="@firebase/app",Ao="0.10.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt=new Ma("@firebase/app"),Ru="@firebase/app-compat",Cu="@firebase/analytics-compat",xu="@firebase/analytics",ku="@firebase/app-check-compat",Vu="@firebase/app-check",Du="@firebase/auth",Ou="@firebase/auth-compat",Lu="@firebase/database",Mu="@firebase/database-compat",Nu="@firebase/functions",Fu="@firebase/functions-compat",Bu="@firebase/installations",Uu="@firebase/installations-compat",zu="@firebase/messaging",Gu="@firebase/messaging-compat",qu="@firebase/performance",ju="@firebase/performance-compat",Hu="@firebase/remote-config",$u="@firebase/remote-config-compat",Wu="@firebase/storage",Ku="@firebase/storage-compat",Qu="@firebase/firestore",Yu="@firebase/vertexai-preview",Xu="@firebase/firestore-compat",Ju="firebase",Zu="10.12.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni="[DEFAULT]",eh={[Mi]:"fire-core",[Ru]:"fire-core-compat",[xu]:"fire-analytics",[Cu]:"fire-analytics-compat",[Vu]:"fire-app-check",[ku]:"fire-app-check-compat",[Du]:"fire-auth",[Ou]:"fire-auth-compat",[Lu]:"fire-rtdb",[Mu]:"fire-rtdb-compat",[Nu]:"fire-fn",[Fu]:"fire-fn-compat",[Bu]:"fire-iid",[Uu]:"fire-iid-compat",[zu]:"fire-fcm",[Gu]:"fire-fcm-compat",[qu]:"fire-perf",[ju]:"fire-perf-compat",[Hu]:"fire-rc",[$u]:"fire-rc-compat",[Wu]:"fire-gcs",[Ku]:"fire-gcs-compat",[Qu]:"fire-fst",[Xu]:"fire-fst-compat",[Yu]:"fire-vertex","fire-js":"fire-js",[Ju]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=new Map,th=new Map,Fi=new Map;function bo(n,e){try{n.container.addComponent(e)}catch(t){Vt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Gn(n){const e=n.name;if(Fi.has(e))return Vt.debug(`There were multiple attempts to register component ${e}.`),!1;Fi.set(e,n);for(const t of Or.values())bo(t,n);for(const t of th.values())bo(t,n);return!0}function Ba(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},gt=new La("app","Firebase",nh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=Zu;function za(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ni,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw gt.create("bad-app-name",{appName:String(i)});if(t||(t=Da()),!t)throw gt.create("no-options");const s=Or.get(i);if(s){if(Di(t,s.options)&&Di(r,s.config))return s;throw gt.create("duplicate-app",{appName:i})}const a=new uu(i);for(const u of Fi.values())a.addComponent(u);const l=new rh(t,r,a);return Or.set(i,l),l}function Ga(n=Ni){const e=Or.get(n);if(!e&&n===Ni&&Da())return za();if(!e)throw gt.create("no-app",{appName:n});return e}function yt(n,e,t){var r;let i=(r=eh[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vt.warn(l.join(" "));return}Gn(new en(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ih="firebase-heartbeat-database",sh=1,qn="firebase-heartbeat-store";let vi=null;function qa(){return vi||(vi=Su(ih,sh,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(qn)}catch(t){console.warn(t)}}}}).catch(n=>{throw gt.create("idb-open",{originalErrorMessage:n.message})})),vi}async function oh(n){try{const t=(await qa()).transaction(qn),r=await t.objectStore(qn).get(ja(n));return await t.done,r}catch(e){if(e instanceof Nt)Vt.warn(e.message);else{const t=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vt.warn(t.message)}}}async function Po(n,e){try{const r=(await qa()).transaction(qn,"readwrite");await r.objectStore(qn).put(e,ja(n)),await r.done}catch(t){if(t instanceof Nt)Vt.warn(t.message);else{const r=gt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Vt.warn(r.message)}}}function ja(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ah=1024,lh=30*24*60*60*1e3;class ch{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new hh(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ro();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=lh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ro(),{heartbeatsToSend:r,unsentEntries:i}=uh(this._heartbeatsCache.heartbeats),s=Dr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ro(){return new Date().toISOString().substring(0,10)}function uh(n,e=ah){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Co(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Co(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class hh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nu()?ru().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await oh(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Po(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Po(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Co(n){return Dr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(n){Gn(new en("platform-logger",e=>new bu(e),"PRIVATE")),Gn(new en("heartbeat",e=>new ch(e),"PRIVATE")),yt(Mi,Ao,n),yt(Mi,Ao,"esm2017"),yt("fire-js","")}dh("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ha="firebasestorage.googleapis.com",$a="storageBucket",fh=2*60*1e3,ph=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye extends Nt{constructor(e,t,r=0){super(wi(e),`Firebase Storage: ${t} (${wi(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ye.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return wi(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ge;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ge||(ge={}));function wi(n){return"storage/"+n}function Wa(){const n="An unknown error occurred, please check the error payload for server response.";return new ye(ge.UNKNOWN,n)}function mh(n){return new ye(ge.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function gh(n){return new ye(ge.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function yh(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ye(ge.UNAUTHENTICATED,n)}function _h(){return new ye(ge.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function vh(n){return new ye(ge.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function wh(){return new ye(ge.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Th(){return new ye(ge.CANCELED,"User canceled the upload/download.")}function Eh(n){return new ye(ge.INVALID_URL,"Invalid URL '"+n+"'.")}function Sh(n){return new ye(ge.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Ih(){return new ye(ge.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+$a+"' property when initializing the app?")}function Ah(){return new ye(ge.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Bi(n){return new ye(ge.INVALID_ARGUMENT,n)}function Ka(){return new ye(ge.APP_DELETED,"The Firebase app was deleted.")}function bh(n){return new ye(ge.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Vn(n){throw new ye(ge.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Fe.makeFromUrl(e,t)}catch{return new Fe(e,"")}if(r.path==="")return r;throw Sh(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+i+a,"i"),u={bucket:1,path:3};function d(O){O.path_=decodeURIComponent(O.path)}const f="v[A-Za-z0-9_]+",y=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",I=new RegExp(`^https?://${y}/${f}/b/${i}/o${w}`,"i"),b={bucket:1,path:3},R=t===Ha?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",k=new RegExp(`^https?://${R}/${i}/${C}`,"i"),V=[{regex:l,indices:u,postModify:s},{regex:I,indices:b,postModify:d},{regex:k,indices:{bucket:1,path:2},postModify:d}];for(let O=0;O<V.length;O++){const U=V[O],$=U.regex.exec(e);if($){const A=$[U.indices.bucket];let _=$[U.indices.path];_||(_=""),r=new Fe(A,_),U.postModify(r);break}}if(r==null)throw Eh(e);return r}}class Ph{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rh(n,e,t){let r=1,i=null,s=null,a=!1,l=0;function u(){return l===2}let d=!1;function f(...C){d||(d=!0,e.apply(null,C))}function y(C){i=setTimeout(()=>{i=null,n(I,u())},C)}function w(){s&&clearTimeout(s)}function I(C,...k){if(d){w();return}if(C){w(),f.call(null,C,...k);return}if(u()||a){w(),f.call(null,C,...k);return}r<64&&(r*=2);let V;l===1?(l=2,V=0):V=(r+Math.random())*1e3,y(V)}let b=!1;function R(C){b||(b=!0,w(),!d&&(i!==null?(C||(l=2),clearTimeout(i),y(0)):C||(l=1)))}return y(0),s=setTimeout(()=>{a=!0,R(!0)},t),R}function Ch(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(n){return n!==void 0}function kh(n){return typeof n=="object"&&!Array.isArray(n)}function Qa(n){return typeof n=="string"||n instanceof String}function xo(n,e,t,r){if(r<e)throw Bi(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Bi(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Xa(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ct;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ct||(Ct={}));/**
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
 */function Vh(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,t,r,i,s,a,l,u,d,f,y,w=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=f,this.connectionFactory_=y,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((I,b)=>{this.resolve_=I,this.reject_=b,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new wr(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const l=s.getErrorCode()===Ct.NO_ERROR,u=s.getStatus();if(!l||Vh(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Ct.ABORT;r(!1,new wr(!1,null,f));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new wr(d,s))})},t=(r,i)=>{const s=this.resolve_,a=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());xh(u)?s(u):s()}catch(u){a(u)}else if(l!==null){const u=Wa();u.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,u)):a(u)}else if(i.canceled){const u=this.appDelete_?Ka():Th();a(u)}else{const u=wh();a(u)}};this.canceled_?t(!1,new wr(!1,null,!0)):this.backoffId_=Rh(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Ch(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class wr{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Oh(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Lh(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Mh(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Nh(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Fh(n,e,t,r,i,s,a=!0){const l=Xa(n.urlParams),u=n.url+l,d=Object.assign({},n.headers);return Mh(d,e),Oh(d,t),Lh(d,s),Nh(d,r),new Dh(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(n){let e;try{e=JSON.parse(n)}catch{return null}return kh(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Uh(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Za(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zh(n,e){return e}class Ce{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||zh}}let Tr=null;function Gh(n){return!Qa(n)||n.length<2?n:Za(n)}function qh(){if(Tr)return Tr;const n=[];n.push(new Ce("bucket")),n.push(new Ce("generation")),n.push(new Ce("metageneration")),n.push(new Ce("name","fullPath",!0));function e(s,a){return Gh(a)}const t=new Ce("name");t.xform=e,n.push(t);function r(s,a){return a!==void 0?Number(a):a}const i=new Ce("size");return i.xform=r,n.push(i),n.push(new Ce("timeCreated")),n.push(new Ce("updated")),n.push(new Ce("md5Hash",null,!0)),n.push(new Ce("cacheControl",null,!0)),n.push(new Ce("contentDisposition",null,!0)),n.push(new Ce("contentEncoding",null,!0)),n.push(new Ce("contentLanguage",null,!0)),n.push(new Ce("contentType",null,!0)),n.push(new Ce("metadata","customMetadata",!0)),Tr=n,Tr}function jh(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new Fe(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function Hh(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const a=t[s];r[a.local]=a.xform(r,e[a.server])}return jh(r,n),r}function $h(n,e,t){const r=Ja(e);return r===null?null:Hh(n,r,t)}function Wh(n,e,t,r){const i=Ja(e);if(i===null||!Qa(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const a=encodeURIComponent;return s.split(",").map(d=>{const f=n.bucket,y=n.fullPath,w="/b/"+a(f)+"/o/"+a(y),I=Ya(w,t,r),b=Xa({alt:"media",token:d});return I+b})[0]}class Kh{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qh(n){if(!n)throw Wa()}function Yh(n,e){function t(r,i){const s=$h(n,i,e);return Qh(s!==null),Wh(s,i,n.host,n._protocol)}return t}function Xh(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=_h():i=yh():t.getStatus()===402?i=gh(n.bucket):t.getStatus()===403?i=vh(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Jh(n){const e=Xh(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=mh(n.path)),s.serverResponse=i.serverResponse,s}return t}function Zh(n,e,t){const r=e.fullServerUrl(),i=Ya(r,n.host,n._protocol),s="GET",a=n.maxOperationRetryTime,l=new Kh(i,s,Yh(n,t),a);return l.errorHandler=Jh(e),l}class ed{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ct.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ct.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ct.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw Vn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Vn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Vn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Vn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Vn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class td extends ed{initXhr(){this.xhr_.responseType="text"}}function nd(){return new td}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t){this._service=e,t instanceof Fe?this._location=t:this._location=Fe.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Dt(e,t)}get root(){const e=new Fe(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Za(this._location.path)}get storage(){return this._service}get parent(){const e=Bh(this._location.path);if(e===null)return null;const t=new Fe(this._location.bucket,e);return new Dt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw bh(e)}}function rd(n){n._throwIfRoot("getDownloadURL");const e=Zh(n.storage,n._location,qh());return n.storage.makeRequestWithTokens(e,nd).then(t=>{if(t===null)throw Ah();return t})}function id(n,e){const t=Uh(n._location.path,e),r=new Fe(n._location.bucket,t);return new Dt(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(n){return/^[A-Za-z]+:\/\//.test(n)}function od(n,e){return new Dt(n,e)}function el(n,e){if(n instanceof is){const t=n;if(t._bucket==null)throw Ih();const r=new Dt(t,t._bucket);return e!=null?el(r,e):r}else return e!==void 0?id(n,e):n}function ad(n,e){if(e&&sd(e)){if(n instanceof is)return od(n,e);throw Bi("To use ref(service, url), the first argument must be a Storage instance.")}else return el(n,e)}function ko(n,e){const t=e==null?void 0:e[$a];return t==null?null:Fe.makeFromBucketSpec(t,n)}function ld(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Oa(i,n.app.options.projectId))}class is{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Ha,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=fh,this._maxUploadRetryTime=ph,this._requests=new Set,i!=null?this._bucket=Fe.makeFromBucketSpec(i,this._host):this._bucket=ko(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Fe.makeFromBucketSpec(this._url,e):this._bucket=ko(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){xo("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){xo("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Dt(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new Ph(Ka());{const a=Fh(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const Vo="@firebase/storage",Do="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl="storage";function cd(n){return n=Qn(n),rd(n)}function ud(n,e){return n=Qn(n),ad(n,e)}function hd(n=Ga(),e){n=Qn(n);const r=Ba(n,tl).getImmediate({identifier:e}),i=Va("storage");return i&&dd(r,...i),r}function dd(n,e,t,r={}){ld(n,e,t,r)}function fd(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new is(t,r,i,e,Ua)}function pd(){Gn(new en(tl,fd,"PUBLIC").setMultipleInstances(!0)),yt(Vo,Do,""),yt(Vo,Do,"esm2017")}pd();function $e(n,e){const t=hd(),r=ud(t,n);cd(r).then(i=>{e.src=i}).catch(i=>console.log(i))}var md="firebase",gd="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yt(md,gd,"app");function yd(){return za({apiKey:"AIzaSyBTca0OO9iCUvryBSKXEcuj2zcsAIbSBUI",authDomain:"nuts-17b69.firebaseapp.com",projectId:"nuts-17b69",storageBucket:"nuts-17b69.appspot.com",messagingSenderId:"989266237693",appId:"1:989266237693:web:814a4d601b3db0dee74694"})}var Oo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xt,nl;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,_){function m(){}m.prototype=_.prototype,A.D=_.prototype,A.prototype=new m,A.prototype.constructor=A,A.C=function(v,E,S){for(var g=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)g[Q-2]=arguments[Q];return _.prototype[E].apply(v,g)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,_,m){m||(m=0);var v=Array(16);if(typeof _=="string")for(var E=0;16>E;++E)v[E]=_.charCodeAt(m++)|_.charCodeAt(m++)<<8|_.charCodeAt(m++)<<16|_.charCodeAt(m++)<<24;else for(E=0;16>E;++E)v[E]=_[m++]|_[m++]<<8|_[m++]<<16|_[m++]<<24;_=A.g[0],m=A.g[1],E=A.g[2];var S=A.g[3],g=_+(S^m&(E^S))+v[0]+3614090360&4294967295;_=m+(g<<7&4294967295|g>>>25),g=S+(E^_&(m^E))+v[1]+3905402710&4294967295,S=_+(g<<12&4294967295|g>>>20),g=E+(m^S&(_^m))+v[2]+606105819&4294967295,E=S+(g<<17&4294967295|g>>>15),g=m+(_^E&(S^_))+v[3]+3250441966&4294967295,m=E+(g<<22&4294967295|g>>>10),g=_+(S^m&(E^S))+v[4]+4118548399&4294967295,_=m+(g<<7&4294967295|g>>>25),g=S+(E^_&(m^E))+v[5]+1200080426&4294967295,S=_+(g<<12&4294967295|g>>>20),g=E+(m^S&(_^m))+v[6]+2821735955&4294967295,E=S+(g<<17&4294967295|g>>>15),g=m+(_^E&(S^_))+v[7]+4249261313&4294967295,m=E+(g<<22&4294967295|g>>>10),g=_+(S^m&(E^S))+v[8]+1770035416&4294967295,_=m+(g<<7&4294967295|g>>>25),g=S+(E^_&(m^E))+v[9]+2336552879&4294967295,S=_+(g<<12&4294967295|g>>>20),g=E+(m^S&(_^m))+v[10]+4294925233&4294967295,E=S+(g<<17&4294967295|g>>>15),g=m+(_^E&(S^_))+v[11]+2304563134&4294967295,m=E+(g<<22&4294967295|g>>>10),g=_+(S^m&(E^S))+v[12]+1804603682&4294967295,_=m+(g<<7&4294967295|g>>>25),g=S+(E^_&(m^E))+v[13]+4254626195&4294967295,S=_+(g<<12&4294967295|g>>>20),g=E+(m^S&(_^m))+v[14]+2792965006&4294967295,E=S+(g<<17&4294967295|g>>>15),g=m+(_^E&(S^_))+v[15]+1236535329&4294967295,m=E+(g<<22&4294967295|g>>>10),g=_+(E^S&(m^E))+v[1]+4129170786&4294967295,_=m+(g<<5&4294967295|g>>>27),g=S+(m^E&(_^m))+v[6]+3225465664&4294967295,S=_+(g<<9&4294967295|g>>>23),g=E+(_^m&(S^_))+v[11]+643717713&4294967295,E=S+(g<<14&4294967295|g>>>18),g=m+(S^_&(E^S))+v[0]+3921069994&4294967295,m=E+(g<<20&4294967295|g>>>12),g=_+(E^S&(m^E))+v[5]+3593408605&4294967295,_=m+(g<<5&4294967295|g>>>27),g=S+(m^E&(_^m))+v[10]+38016083&4294967295,S=_+(g<<9&4294967295|g>>>23),g=E+(_^m&(S^_))+v[15]+3634488961&4294967295,E=S+(g<<14&4294967295|g>>>18),g=m+(S^_&(E^S))+v[4]+3889429448&4294967295,m=E+(g<<20&4294967295|g>>>12),g=_+(E^S&(m^E))+v[9]+568446438&4294967295,_=m+(g<<5&4294967295|g>>>27),g=S+(m^E&(_^m))+v[14]+3275163606&4294967295,S=_+(g<<9&4294967295|g>>>23),g=E+(_^m&(S^_))+v[3]+4107603335&4294967295,E=S+(g<<14&4294967295|g>>>18),g=m+(S^_&(E^S))+v[8]+1163531501&4294967295,m=E+(g<<20&4294967295|g>>>12),g=_+(E^S&(m^E))+v[13]+2850285829&4294967295,_=m+(g<<5&4294967295|g>>>27),g=S+(m^E&(_^m))+v[2]+4243563512&4294967295,S=_+(g<<9&4294967295|g>>>23),g=E+(_^m&(S^_))+v[7]+1735328473&4294967295,E=S+(g<<14&4294967295|g>>>18),g=m+(S^_&(E^S))+v[12]+2368359562&4294967295,m=E+(g<<20&4294967295|g>>>12),g=_+(m^E^S)+v[5]+4294588738&4294967295,_=m+(g<<4&4294967295|g>>>28),g=S+(_^m^E)+v[8]+2272392833&4294967295,S=_+(g<<11&4294967295|g>>>21),g=E+(S^_^m)+v[11]+1839030562&4294967295,E=S+(g<<16&4294967295|g>>>16),g=m+(E^S^_)+v[14]+4259657740&4294967295,m=E+(g<<23&4294967295|g>>>9),g=_+(m^E^S)+v[1]+2763975236&4294967295,_=m+(g<<4&4294967295|g>>>28),g=S+(_^m^E)+v[4]+1272893353&4294967295,S=_+(g<<11&4294967295|g>>>21),g=E+(S^_^m)+v[7]+4139469664&4294967295,E=S+(g<<16&4294967295|g>>>16),g=m+(E^S^_)+v[10]+3200236656&4294967295,m=E+(g<<23&4294967295|g>>>9),g=_+(m^E^S)+v[13]+681279174&4294967295,_=m+(g<<4&4294967295|g>>>28),g=S+(_^m^E)+v[0]+3936430074&4294967295,S=_+(g<<11&4294967295|g>>>21),g=E+(S^_^m)+v[3]+3572445317&4294967295,E=S+(g<<16&4294967295|g>>>16),g=m+(E^S^_)+v[6]+76029189&4294967295,m=E+(g<<23&4294967295|g>>>9),g=_+(m^E^S)+v[9]+3654602809&4294967295,_=m+(g<<4&4294967295|g>>>28),g=S+(_^m^E)+v[12]+3873151461&4294967295,S=_+(g<<11&4294967295|g>>>21),g=E+(S^_^m)+v[15]+530742520&4294967295,E=S+(g<<16&4294967295|g>>>16),g=m+(E^S^_)+v[2]+3299628645&4294967295,m=E+(g<<23&4294967295|g>>>9),g=_+(E^(m|~S))+v[0]+4096336452&4294967295,_=m+(g<<6&4294967295|g>>>26),g=S+(m^(_|~E))+v[7]+1126891415&4294967295,S=_+(g<<10&4294967295|g>>>22),g=E+(_^(S|~m))+v[14]+2878612391&4294967295,E=S+(g<<15&4294967295|g>>>17),g=m+(S^(E|~_))+v[5]+4237533241&4294967295,m=E+(g<<21&4294967295|g>>>11),g=_+(E^(m|~S))+v[12]+1700485571&4294967295,_=m+(g<<6&4294967295|g>>>26),g=S+(m^(_|~E))+v[3]+2399980690&4294967295,S=_+(g<<10&4294967295|g>>>22),g=E+(_^(S|~m))+v[10]+4293915773&4294967295,E=S+(g<<15&4294967295|g>>>17),g=m+(S^(E|~_))+v[1]+2240044497&4294967295,m=E+(g<<21&4294967295|g>>>11),g=_+(E^(m|~S))+v[8]+1873313359&4294967295,_=m+(g<<6&4294967295|g>>>26),g=S+(m^(_|~E))+v[15]+4264355552&4294967295,S=_+(g<<10&4294967295|g>>>22),g=E+(_^(S|~m))+v[6]+2734768916&4294967295,E=S+(g<<15&4294967295|g>>>17),g=m+(S^(E|~_))+v[13]+1309151649&4294967295,m=E+(g<<21&4294967295|g>>>11),g=_+(E^(m|~S))+v[4]+4149444226&4294967295,_=m+(g<<6&4294967295|g>>>26),g=S+(m^(_|~E))+v[11]+3174756917&4294967295,S=_+(g<<10&4294967295|g>>>22),g=E+(_^(S|~m))+v[2]+718787259&4294967295,E=S+(g<<15&4294967295|g>>>17),g=m+(S^(E|~_))+v[9]+3951481745&4294967295,A.g[0]=A.g[0]+_&4294967295,A.g[1]=A.g[1]+(E+(g<<21&4294967295|g>>>11))&4294967295,A.g[2]=A.g[2]+E&4294967295,A.g[3]=A.g[3]+S&4294967295}r.prototype.u=function(A,_){_===void 0&&(_=A.length);for(var m=_-this.blockSize,v=this.B,E=this.h,S=0;S<_;){if(E==0)for(;S<=m;)i(this,A,S),S+=this.blockSize;if(typeof A=="string"){for(;S<_;)if(v[E++]=A.charCodeAt(S++),E==this.blockSize){i(this,v),E=0;break}}else for(;S<_;)if(v[E++]=A[S++],E==this.blockSize){i(this,v),E=0;break}}this.h=E,this.o+=_},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var _=1;_<A.length-8;++_)A[_]=0;var m=8*this.o;for(_=A.length-8;_<A.length;++_)A[_]=m&255,m/=256;for(this.u(A),A=Array(16),_=m=0;4>_;++_)for(var v=0;32>v;v+=8)A[m++]=this.g[_]>>>v&255;return A};function s(A,_){var m=l;return Object.prototype.hasOwnProperty.call(m,A)?m[A]:m[A]=_(A)}function a(A,_){this.h=_;for(var m=[],v=!0,E=A.length-1;0<=E;E--){var S=A[E]|0;v&&S==_||(m[E]=S,v=!1)}this.g=m}var l={};function u(A){return-128<=A&&128>A?s(A,function(_){return new a([_|0],0>_?-1:0)}):new a([A|0],0>A?-1:0)}function d(A){if(isNaN(A)||!isFinite(A))return y;if(0>A)return C(d(-A));for(var _=[],m=1,v=0;A>=m;v++)_[v]=A/m|0,m*=4294967296;return new a(_,0)}function f(A,_){if(A.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(A.charAt(0)=="-")return C(f(A.substring(1),_));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=d(Math.pow(_,8)),v=y,E=0;E<A.length;E+=8){var S=Math.min(8,A.length-E),g=parseInt(A.substring(E,E+S),_);8>S?(S=d(Math.pow(_,S)),v=v.j(S).add(d(g))):(v=v.j(m),v=v.add(d(g)))}return v}var y=u(0),w=u(1),I=u(16777216);n=a.prototype,n.m=function(){if(R(this))return-C(this).m();for(var A=0,_=1,m=0;m<this.g.length;m++){var v=this.i(m);A+=(0<=v?v:4294967296+v)*_,_*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(b(this))return"0";if(R(this))return"-"+C(this).toString(A);for(var _=d(Math.pow(A,6)),m=this,v="";;){var E=O(m,_).g;m=k(m,E.j(_));var S=((0<m.g.length?m.g[0]:m.h)>>>0).toString(A);if(m=E,b(m))return S+v;for(;6>S.length;)S="0"+S;v=S+v}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function b(A){if(A.h!=0)return!1;for(var _=0;_<A.g.length;_++)if(A.g[_]!=0)return!1;return!0}function R(A){return A.h==-1}n.l=function(A){return A=k(this,A),R(A)?-1:b(A)?0:1};function C(A){for(var _=A.g.length,m=[],v=0;v<_;v++)m[v]=~A.g[v];return new a(m,~A.h).add(w)}n.abs=function(){return R(this)?C(this):this},n.add=function(A){for(var _=Math.max(this.g.length,A.g.length),m=[],v=0,E=0;E<=_;E++){var S=v+(this.i(E)&65535)+(A.i(E)&65535),g=(S>>>16)+(this.i(E)>>>16)+(A.i(E)>>>16);v=g>>>16,S&=65535,g&=65535,m[E]=g<<16|S}return new a(m,m[m.length-1]&-2147483648?-1:0)};function k(A,_){return A.add(C(_))}n.j=function(A){if(b(this)||b(A))return y;if(R(this))return R(A)?C(this).j(C(A)):C(C(this).j(A));if(R(A))return C(this.j(C(A)));if(0>this.l(I)&&0>A.l(I))return d(this.m()*A.m());for(var _=this.g.length+A.g.length,m=[],v=0;v<2*_;v++)m[v]=0;for(v=0;v<this.g.length;v++)for(var E=0;E<A.g.length;E++){var S=this.i(v)>>>16,g=this.i(v)&65535,Q=A.i(E)>>>16,re=A.i(E)&65535;m[2*v+2*E]+=g*re,L(m,2*v+2*E),m[2*v+2*E+1]+=S*re,L(m,2*v+2*E+1),m[2*v+2*E+1]+=g*Q,L(m,2*v+2*E+1),m[2*v+2*E+2]+=S*Q,L(m,2*v+2*E+2)}for(v=0;v<_;v++)m[v]=m[2*v+1]<<16|m[2*v];for(v=_;v<2*_;v++)m[v]=0;return new a(m,0)};function L(A,_){for(;(A[_]&65535)!=A[_];)A[_+1]+=A[_]>>>16,A[_]&=65535,_++}function V(A,_){this.g=A,this.h=_}function O(A,_){if(b(_))throw Error("division by zero");if(b(A))return new V(y,y);if(R(A))return _=O(C(A),_),new V(C(_.g),C(_.h));if(R(_))return _=O(A,C(_)),new V(C(_.g),_.h);if(30<A.g.length){if(R(A)||R(_))throw Error("slowDivide_ only works with positive integers.");for(var m=w,v=_;0>=v.l(A);)m=U(m),v=U(v);var E=$(m,1),S=$(v,1);for(v=$(v,2),m=$(m,2);!b(v);){var g=S.add(v);0>=g.l(A)&&(E=E.add(m),S=g),v=$(v,1),m=$(m,1)}return _=k(A,E.j(_)),new V(E,_)}for(E=y;0<=A.l(_);){for(m=Math.max(1,Math.floor(A.m()/_.m())),v=Math.ceil(Math.log(m)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),S=d(m),g=S.j(_);R(g)||0<g.l(A);)m-=v,S=d(m),g=S.j(_);b(S)&&(S=w),E=E.add(S),A=k(A,g)}return new V(E,A)}n.A=function(A){return O(this,A).h},n.and=function(A){for(var _=Math.max(this.g.length,A.g.length),m=[],v=0;v<_;v++)m[v]=this.i(v)&A.i(v);return new a(m,this.h&A.h)},n.or=function(A){for(var _=Math.max(this.g.length,A.g.length),m=[],v=0;v<_;v++)m[v]=this.i(v)|A.i(v);return new a(m,this.h|A.h)},n.xor=function(A){for(var _=Math.max(this.g.length,A.g.length),m=[],v=0;v<_;v++)m[v]=this.i(v)^A.i(v);return new a(m,this.h^A.h)};function U(A){for(var _=A.g.length+1,m=[],v=0;v<_;v++)m[v]=A.i(v)<<1|A.i(v-1)>>>31;return new a(m,A.h)}function $(A,_){var m=_>>5;_%=32;for(var v=A.g.length-m,E=[],S=0;S<v;S++)E[S]=0<_?A.i(S+m)>>>_|A.i(S+m+1)<<32-_:A.i(S+m);return new a(E,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,nl=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,xt=a}).apply(typeof Oo<"u"?Oo:typeof self<"u"?self:typeof window<"u"?window:{});var Er=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rl,il,On,sl,Rr,Ui,ol,al,ll;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Er=="object"&&Er];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var P=o[p];if(!(P in h))break e;h=h[P]}o=o[o.length-1],p=h[o],c=c(p),c!=p&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,p=!1,P={next:function(){if(!p&&h<o.length){var x=h++;return{value:c(x,o[x]),done:!1}}return p=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,h){return o.call.apply(o.bind,arguments)}function y(o,c,h){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,p),o.apply(c,P)}}return function(){return o.apply(c,arguments)}}function w(o,c,h){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:y,w.apply(null,arguments)}function I(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function b(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(p,P,x){for(var N=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)N[ne-2]=arguments[ne];return c.prototype[P].apply(p,N)}}function R(o){const c=o.length;if(0<c){const h=Array(c);for(let p=0;p<c;p++)h[p]=o[p];return h}return[]}function C(o,c){for(let h=1;h<arguments.length;h++){const p=arguments[h];if(u(p)){const P=o.length||0,x=p.length||0;o.length=P+x;for(let N=0;N<x;N++)o[P+N]=p[N]}else o.push(p)}}class k{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function L(o){return/^[\s\xa0]*$/.test(o)}function V(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function O(o){return O[" "](o),o}O[" "]=function(){};var U=V().indexOf("Gecko")!=-1&&!(V().toLowerCase().indexOf("webkit")!=-1&&V().indexOf("Edge")==-1)&&!(V().indexOf("Trident")!=-1||V().indexOf("MSIE")!=-1)&&V().indexOf("Edge")==-1;function $(o,c,h){for(const p in o)c.call(h,o[p],p,o)}function A(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function _(o){const c={};for(const h in o)c[h]=o[h];return c}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,c){let h,p;for(let P=1;P<arguments.length;P++){p=arguments[P];for(h in p)o[h]=p[h];for(let x=0;x<m.length;x++)h=m[x],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function E(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function S(o){l.setTimeout(()=>{throw o},0)}function g(){var o=je;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Q{constructor(){this.h=this.g=null}add(c,h){const p=re.get();p.set(c,h),this.h?this.h.next=p:this.g=p,this.h=p}}var re=new k(()=>new ke,o=>o.reset());class ke{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Ge,De=!1,je=new Q,ot=()=>{const o=l.Promise.resolve(void 0);Ge=()=>{o.then(Ft)}};var Ft=()=>{for(var o;o=g();){try{o.h.call(o.g)}catch(h){S(h)}var c=re;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}De=!1};function Oe(){this.s=this.s,this.C=this.C}Oe.prototype.s=!1,Oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function de(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}de.prototype.h=function(){this.defaultPrevented=!0};var er=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function Ze(o,c){if(de.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(U){e:{try{O(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:tr[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Ze.aa.h.call(this)}}b(Ze,de);var tr={2:"touch",3:"pen",4:"mouse"};Ze.prototype.h=function(){Ze.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var et="closure_listenable_"+(1e6*Math.random()|0),nr=0;function Bt(o,c,h,p,P){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!p,this.ha=P,this.key=++nr,this.da=this.fa=!1}function at(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Ut(o){this.src=o,this.g={},this.h=0}Ut.prototype.add=function(o,c,h,p,P){var x=o.toString();o=this.g[x],o||(o=this.g[x]=[],this.h++);var N=fn(o,c,p,P);return-1<N?(c=o[N],h||(c.fa=!1)):(c=new Bt(c,this.src,x,!!p,P),c.fa=h,o.push(c)),c};function dn(o,c){var h=c.type;if(h in o.g){var p=o.g[h],P=Array.prototype.indexOf.call(p,c,void 0),x;(x=0<=P)&&Array.prototype.splice.call(p,P,1),x&&(at(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function fn(o,c,h,p){for(var P=0;P<o.length;++P){var x=o[P];if(!x.da&&x.listener==c&&x.capture==!!h&&x.ha==p)return P}return-1}var pn="closure_lm_"+(1e6*Math.random()|0),mn={};function gn(o,c,h,p,P){if(Array.isArray(c)){for(var x=0;x<c.length;x++)gn(o,c[x],h,p,P);return null}return h=ir(h),o&&o[et]?o.K(c,h,d(p)?!!p.capture:!!p,P):ei(o,c,h,!1,p,P)}function ei(o,c,h,p,P,x){if(!c)throw Error("Invalid event type");var N=d(P)?!!P.capture:!!P,ne=_n(o);if(ne||(o[pn]=ne=new Ut(o)),h=ne.add(c,h,p,N,x),h.proxy)return h;if(p=rr(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)er||(P=N),P===void 0&&(P=!1),o.addEventListener(c.toString(),p,P);else if(o.attachEvent)o.attachEvent(Gt(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function rr(){function o(h){return c.call(o.src,o.listener,h)}const c=ti;return o}function yn(o,c,h,p,P){if(Array.isArray(c))for(var x=0;x<c.length;x++)yn(o,c[x],h,p,P);else p=d(p)?!!p.capture:!!p,h=ir(h),o&&o[et]?(o=o.i,c=String(c).toString(),c in o.g&&(x=o.g[c],h=fn(x,h,p,P),-1<h&&(at(x[h]),Array.prototype.splice.call(x,h,1),x.length==0&&(delete o.g[c],o.h--)))):o&&(o=_n(o))&&(c=o.g[c.toString()],o=-1,c&&(o=fn(c,h,p,P)),(h=-1<o?c[o]:null)&&zt(h))}function zt(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[et])dn(c.i,o);else{var h=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(h,p,o.capture):c.detachEvent?c.detachEvent(Gt(h),p):c.addListener&&c.removeListener&&c.removeListener(p),(h=_n(c))?(dn(h,o),h.h==0&&(h.src=null,c[pn]=null)):at(o)}}}function Gt(o){return o in mn?mn[o]:mn[o]="on"+o}function ti(o,c){if(o.da)o=!0;else{c=new Ze(c,this);var h=o.listener,p=o.ha||o.src;o.fa&&zt(o),o=h.call(p,c)}return o}function _n(o){return o=o[pn],o instanceof Ut?o:null}var vn="__closure_events_fn_"+(1e9*Math.random()>>>0);function ir(o){return typeof o=="function"?o:(o[vn]||(o[vn]=function(c){return o.handleEvent(c)}),o[vn])}function pe(){Oe.call(this),this.i=new Ut(this),this.M=this,this.F=null}b(pe,Oe),pe.prototype[et]=!0,pe.prototype.removeEventListener=function(o,c,h,p){yn(this,o,c,h,p)};function _e(o,c){var h,p=o.F;if(p)for(h=[];p;p=p.F)h.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new de(c,o);else if(c instanceof de)c.target=c.target||o;else{var P=c;c=new de(p,o),v(c,P)}if(P=!0,h)for(var x=h.length-1;0<=x;x--){var N=c.g=h[x];P=B(N,p,!0,c)&&P}if(N=c.g=o,P=B(N,p,!0,c)&&P,P=B(N,p,!1,c)&&P,h)for(x=0;x<h.length;x++)N=c.g=h[x],P=B(N,p,!1,c)&&P}pe.prototype.N=function(){if(pe.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],p=0;p<h.length;p++)at(h[p]);delete o.g[c],o.h--}}this.F=null},pe.prototype.K=function(o,c,h,p){return this.i.add(String(o),c,!1,h,p)},pe.prototype.L=function(o,c,h,p){return this.i.add(String(o),c,!0,h,p)};function B(o,c,h,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,x=0;x<c.length;++x){var N=c[x];if(N&&!N.da&&N.capture==h){var ne=N.listener,ve=N.ha||N.src;N.fa&&dn(o.i,N),P=ne.call(ve,p)!==!1&&P}}return P&&!p.defaultPrevented}function T(o,c,h){if(typeof o=="function")h&&(o=w(o,h));else if(o&&typeof o.handleEvent=="function")o=w(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function M(o){o.g=T(()=>{o.g=null,o.i&&(o.i=!1,M(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class z extends Oe{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:M(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function q(o){Oe.call(this),this.h=o,this.g={}}b(q,Oe);var Ue=[];function He(o){$(o.g,function(c,h){this.g.hasOwnProperty(h)&&zt(c)},o),o.g={}}q.prototype.N=function(){q.aa.N.call(this),He(this)},q.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ze=l.JSON.stringify,qt=l.JSON.parse,ni=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function jt(){}jt.prototype.h=null;function ae(o){return o.h||(o.h=o.i())}function sr(){}var tt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function lt(){de.call(this,"d")}b(lt,de);function ri(){de.call(this,"c")}b(ri,de);var St={},Cs=null;function or(){return Cs=Cs||new pe}St.La="serverreachability";function xs(o){de.call(this,St.La,o)}b(xs,de);function wn(o){const c=or();_e(c,new xs(c))}St.STAT_EVENT="statevent";function ks(o,c){de.call(this,St.STAT_EVENT,o),this.stat=c}b(ks,de);function Re(o){const c=or();_e(c,new ks(c,o))}St.Ma="timingevent";function Vs(o,c){de.call(this,St.Ma,o),this.size=c}b(Vs,de);function Tn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function En(){this.g=!0}En.prototype.xa=function(){this.g=!1};function yc(o,c,h,p,P,x){o.info(function(){if(o.g)if(x)for(var N="",ne=x.split("&"),ve=0;ve<ne.length;ve++){var ee=ne[ve].split("=");if(1<ee.length){var Se=ee[0];ee=ee[1];var Ie=Se.split("_");N=2<=Ie.length&&Ie[1]=="type"?N+(Se+"="+ee+"&"):N+(Se+"=redacted&")}}else N=null;else N=x;return"XMLHTTP REQ ("+p+") [attempt "+P+"]: "+c+`
`+h+`
`+N})}function _c(o,c,h,p,P,x,N){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+P+"]: "+c+`
`+h+`
`+x+" "+N})}function Ht(o,c,h,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+wc(o,h)+(p?" "+p:"")})}function vc(o,c){o.info(function(){return"TIMEOUT: "+c})}En.prototype.info=function(){};function wc(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var p=h[o];if(!(2>p.length)){var P=p[1];if(Array.isArray(P)&&!(1>P.length)){var x=P[0];if(x!="noop"&&x!="stop"&&x!="close")for(var N=1;N<P.length;N++)P[N]=""}}}}return ze(h)}catch{return c}}var ar={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ds={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ii;function lr(){}b(lr,jt),lr.prototype.g=function(){return new XMLHttpRequest},lr.prototype.i=function(){return{}},ii=new lr;function ct(o,c,h,p){this.j=o,this.i=c,this.l=h,this.R=p||1,this.U=new q(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Os}function Os(){this.i=null,this.g="",this.h=!1}var Ls={},si={};function oi(o,c,h){o.L=1,o.v=dr(nt(c)),o.m=h,o.P=!0,Ms(o,null)}function Ms(o,c){o.F=Date.now(),cr(o),o.A=nt(o.v);var h=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Ys(h.i,"t",p),o.C=0,h=o.j.J,o.h=new Os,o.g=mo(o.j,h?c:null,!o.m),0<o.O&&(o.M=new z(w(o.Y,o,o.g),o.O)),c=o.U,h=o.g,p=o.ca;var P="readystatechange";Array.isArray(P)||(P&&(Ue[0]=P.toString()),P=Ue);for(var x=0;x<P.length;x++){var N=gn(h,P[x],p||c.handleEvent,!1,c.h||c);if(!N)break;c.g[N.key]=N}c=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),wn(),yc(o.i,o.u,o.A,o.l,o.R,o.m)}ct.prototype.ca=function(o){o=o.target;const c=this.M;c&&rt(o)==3?c.j():this.Y(o)},ct.prototype.Y=function(o){try{if(o==this.g)e:{const Ie=rt(this.g);var c=this.g.Ba();const Kt=this.g.Z();if(!(3>Ie)&&(Ie!=3||this.g&&(this.h.h||this.g.oa()||ro(this.g)))){this.J||Ie!=4||c==7||(c==8||0>=Kt?wn(3):wn(2)),ai(this);var h=this.g.Z();this.X=h;t:if(Ns(this)){var p=ro(this.g);o="";var P=p.length,x=rt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){It(this),Sn(this);var N="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(x&&c==P-1)});p.length=0,this.h.g+=o,this.C=0,N=this.h.g}else N=this.g.oa();if(this.o=h==200,_c(this.i,this.u,this.A,this.l,this.R,Ie,h),this.o){if(this.T&&!this.K){t:{if(this.g){var ne,ve=this.g;if((ne=ve.g?ve.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(ne)){var ee=ne;break t}}ee=null}if(h=ee)Ht(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,li(this,h);else{this.o=!1,this.s=3,Re(12),It(this),Sn(this);break e}}if(this.P){h=!0;let qe;for(;!this.J&&this.C<N.length;)if(qe=Tc(this,N),qe==si){Ie==4&&(this.s=4,Re(14),h=!1),Ht(this.i,this.l,null,"[Incomplete Response]");break}else if(qe==Ls){this.s=4,Re(15),Ht(this.i,this.l,N,"[Invalid Chunk]"),h=!1;break}else Ht(this.i,this.l,qe,null),li(this,qe);if(Ns(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ie!=4||N.length!=0||this.h.h||(this.s=1,Re(16),h=!1),this.o=this.o&&h,!h)Ht(this.i,this.l,N,"[Invalid Chunked Response]"),It(this),Sn(this);else if(0<N.length&&!this.W){this.W=!0;var Se=this.j;Se.g==this&&Se.ba&&!Se.M&&(Se.j.info("Great, no buffering proxy detected. Bytes received: "+N.length),pi(Se),Se.M=!0,Re(11))}}else Ht(this.i,this.l,N,null),li(this,N);Ie==4&&It(this),this.o&&!this.J&&(Ie==4?uo(this.j,this):(this.o=!1,cr(this)))}else Fc(this.g),h==400&&0<N.indexOf("Unknown SID")?(this.s=3,Re(12)):(this.s=0,Re(13)),It(this),Sn(this)}}}catch{}finally{}};function Ns(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Tc(o,c){var h=o.C,p=c.indexOf(`
`,h);return p==-1?si:(h=Number(c.substring(h,p)),isNaN(h)?Ls:(p+=1,p+h>c.length?si:(c=c.slice(p,p+h),o.C=p+h,c)))}ct.prototype.cancel=function(){this.J=!0,It(this)};function cr(o){o.S=Date.now()+o.I,Fs(o,o.I)}function Fs(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Tn(w(o.ba,o),c)}function ai(o){o.B&&(l.clearTimeout(o.B),o.B=null)}ct.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(vc(this.i,this.A),this.L!=2&&(wn(),Re(17)),It(this),this.s=2,Sn(this)):Fs(this,this.S-o)};function Sn(o){o.j.G==0||o.J||uo(o.j,o)}function It(o){ai(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,He(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function li(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||ci(h.h,o))){if(!o.K&&ci(h.h,o)&&h.G==3){try{var p=h.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var P=p;if(P[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)yr(h),mr(h);else break e;fi(h),Re(18)}}else h.za=P[1],0<h.za-h.T&&37500>P[2]&&h.F&&h.v==0&&!h.C&&(h.C=Tn(w(h.Za,h),6e3));if(1>=zs(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else bt(h,11)}else if((o.K||h.g==o)&&yr(h),!L(c))for(P=h.Da.g.parse(c),c=0;c<P.length;c++){let ee=P[c];if(h.T=ee[0],ee=ee[1],h.G==2)if(ee[0]=="c"){h.K=ee[1],h.ia=ee[2];const Se=ee[3];Se!=null&&(h.la=Se,h.j.info("VER="+h.la));const Ie=ee[4];Ie!=null&&(h.Aa=Ie,h.j.info("SVER="+h.Aa));const Kt=ee[5];Kt!=null&&typeof Kt=="number"&&0<Kt&&(p=1.5*Kt,h.L=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const qe=o.g;if(qe){const vr=qe.g?qe.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(vr){var x=p.h;x.g||vr.indexOf("spdy")==-1&&vr.indexOf("quic")==-1&&vr.indexOf("h2")==-1||(x.j=x.l,x.g=new Set,x.h&&(ui(x,x.h),x.h=null))}if(p.D){const mi=qe.g?qe.g.getResponseHeader("X-HTTP-Session-Id"):null;mi&&(p.ya=mi,ie(p.I,p.D,mi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),p=h;var N=o;if(p.qa=po(p,p.J?p.ia:null,p.W),N.K){Gs(p.h,N);var ne=N,ve=p.L;ve&&(ne.I=ve),ne.B&&(ai(ne),cr(ne)),p.g=N}else lo(p);0<h.i.length&&gr(h)}else ee[0]!="stop"&&ee[0]!="close"||bt(h,7);else h.G==3&&(ee[0]=="stop"||ee[0]=="close"?ee[0]=="stop"?bt(h,7):di(h):ee[0]!="noop"&&h.l&&h.l.ta(ee),h.v=0)}}wn(4)}catch{}}var Ec=class{constructor(o,c){this.g=o,this.map=c}};function Bs(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Us(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function zs(o){return o.h?1:o.g?o.g.size:0}function ci(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function ui(o,c){o.g?o.g.add(c):o.h=c}function Gs(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Bs.prototype.cancel=function(){if(this.i=qs(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function qs(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return R(o.i)}function Sc(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,p=0;p<h;p++)c.push(o[p]);return c}c=[],h=0;for(p in o)c[h++]=o[p];return c}function Ic(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const p in o)c[h++]=p;return c}}}function js(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Ic(o),p=Sc(o),P=p.length,x=0;x<P;x++)c.call(void 0,p[x],h&&h[x],o)}var Hs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ac(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var p=o[h].indexOf("="),P=null;if(0<=p){var x=o[h].substring(0,p);P=o[h].substring(p+1)}else x=o[h];c(x,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function At(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof At){this.h=o.h,ur(this,o.j),this.o=o.o,this.g=o.g,hr(this,o.s),this.l=o.l;var c=o.i,h=new bn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),$s(this,h),this.m=o.m}else o&&(c=String(o).match(Hs))?(this.h=!1,ur(this,c[1]||"",!0),this.o=In(c[2]||""),this.g=In(c[3]||"",!0),hr(this,c[4]),this.l=In(c[5]||"",!0),$s(this,c[6]||"",!0),this.m=In(c[7]||"")):(this.h=!1,this.i=new bn(null,this.h))}At.prototype.toString=function(){var o=[],c=this.j;c&&o.push(An(c,Ws,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(An(c,Ws,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(An(h,h.charAt(0)=="/"?Rc:Pc,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",An(h,xc)),o.join("")};function nt(o){return new At(o)}function ur(o,c,h){o.j=h?In(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function hr(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function $s(o,c,h){c instanceof bn?(o.i=c,kc(o.i,o.h)):(h||(c=An(c,Cc)),o.i=new bn(c,o.h))}function ie(o,c,h){o.i.set(c,h)}function dr(o){return ie(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function In(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function An(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,bc),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function bc(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Ws=/[#\/\?@]/g,Pc=/[#\?:]/g,Rc=/[#\?]/g,Cc=/[#\?@]/g,xc=/#/g;function bn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function ut(o){o.g||(o.g=new Map,o.h=0,o.i&&Ac(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=bn.prototype,n.add=function(o,c){ut(this),this.i=null,o=$t(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Ks(o,c){ut(o),c=$t(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function Qs(o,c){return ut(o),c=$t(o,c),o.g.has(c)}n.forEach=function(o,c){ut(this),this.g.forEach(function(h,p){h.forEach(function(P){o.call(c,P,p,this)},this)},this)},n.na=function(){ut(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let p=0;p<c.length;p++){const P=o[p];for(let x=0;x<P.length;x++)h.push(c[p])}return h},n.V=function(o){ut(this);let c=[];if(typeof o=="string")Qs(this,o)&&(c=c.concat(this.g.get($t(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return ut(this),this.i=null,o=$t(this,o),Qs(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Ys(o,c,h){Ks(o,c),0<h.length&&(o.i=null,o.g.set($t(o,c),R(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var p=c[h];const x=encodeURIComponent(String(p)),N=this.V(p);for(p=0;p<N.length;p++){var P=x;N[p]!==""&&(P+="="+encodeURIComponent(String(N[p]))),o.push(P)}}return this.i=o.join("&")};function $t(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function kc(o,c){c&&!o.j&&(ut(o),o.i=null,o.g.forEach(function(h,p){var P=p.toLowerCase();p!=P&&(Ks(this,p),Ys(this,P,h))},o)),o.j=c}function Vc(o,c){const h=new En;if(l.Image){const p=new Image;p.onload=I(ht,h,"TestLoadImage: loaded",!0,c,p),p.onerror=I(ht,h,"TestLoadImage: error",!1,c,p),p.onabort=I(ht,h,"TestLoadImage: abort",!1,c,p),p.ontimeout=I(ht,h,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function Dc(o,c){const h=new En,p=new AbortController,P=setTimeout(()=>{p.abort(),ht(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(x=>{clearTimeout(P),x.ok?ht(h,"TestPingServer: ok",!0,c):ht(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),ht(h,"TestPingServer: error",!1,c)})}function ht(o,c,h,p,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),p(h)}catch{}}function Oc(){this.g=new ni}function Lc(o,c,h){const p=h||"";try{js(o,function(P,x){let N=P;d(P)&&(N=ze(P)),c.push(p+x+"="+encodeURIComponent(N))})}catch(P){throw c.push(p+"type="+encodeURIComponent("_badmap")),P}}function Pn(o){this.l=o.Ub||null,this.j=o.eb||!1}b(Pn,jt),Pn.prototype.g=function(){return new fr(this.l,this.j)},Pn.prototype.i=function(o){return function(){return o}}({});function fr(o,c){pe.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(fr,pe),n=fr.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Cn(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Rn(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Xs(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Xs(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Rn(this):Cn(this),this.readyState==3&&Xs(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Rn(this))},n.Qa=function(o){this.g&&(this.response=o,Rn(this))},n.ga=function(){this.g&&Rn(this)};function Rn(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Cn(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function Cn(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(fr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Js(o){let c="";return $(o,function(h,p){c+=p,c+=":",c+=h,c+=`\r
`}),c}function hi(o,c,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=Js(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ie(o,c,h))}function oe(o){pe.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(oe,pe);var Mc=/^https?$/i,Nc=["POST","PUT"];n=oe.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ii.g(),this.v=this.o?ae(this.o):ae(ii),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(x){Zs(this,x);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var P in p)h.set(P,p[P]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const x of p.keys())h.set(x,p.get(x));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(x=>x.toLowerCase()=="content-type"),P=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Nc,c,void 0))||p||P||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[x,N]of h)this.g.setRequestHeader(x,N);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{no(this),this.u=!0,this.g.send(o),this.u=!1}catch(x){Zs(this,x)}};function Zs(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,eo(o),pr(o)}function eo(o){o.A||(o.A=!0,_e(o,"complete"),_e(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,_e(this,"complete"),_e(this,"abort"),pr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),pr(this,!0)),oe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?to(this):this.bb())},n.bb=function(){to(this)};function to(o){if(o.h&&typeof a<"u"&&(!o.v[1]||rt(o)!=4||o.Z()!=2)){if(o.u&&rt(o)==4)T(o.Ea,0,o);else if(_e(o,"readystatechange"),rt(o)==4){o.h=!1;try{const N=o.Z();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var p;if(p=N===0){var P=String(o.D).match(Hs)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),p=!Mc.test(P?P.toLowerCase():"")}h=p}if(h)_e(o,"complete"),_e(o,"success");else{o.m=6;try{var x=2<rt(o)?o.g.statusText:""}catch{x=""}o.l=x+" ["+o.Z()+"]",eo(o)}}finally{pr(o)}}}}function pr(o,c){if(o.g){no(o);const h=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||_e(o,"ready");try{h.onreadystatechange=p}catch{}}}function no(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function rt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<rt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),qt(c)}};function ro(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Fc(o){const c={};o=(o.g&&2<=rt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(L(o[p]))continue;var h=E(o[p]);const P=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const x=c[P]||[];c[P]=x,x.push(h)}A(c,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function xn(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function io(o){this.Aa=0,this.i=[],this.j=new En,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=xn("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=xn("baseRetryDelayMs",5e3,o),this.cb=xn("retryDelaySeedMs",1e4,o),this.Wa=xn("forwardChannelMaxRetries",2,o),this.wa=xn("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Bs(o&&o.concurrentRequestLimit),this.Da=new Oc,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=io.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,p){Re(0),this.W=o,this.H=c||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.I=po(this,null,this.W),gr(this)};function di(o){if(so(o),o.G==3){var c=o.U++,h=nt(o.I);if(ie(h,"SID",o.K),ie(h,"RID",c),ie(h,"TYPE","terminate"),kn(o,h),c=new ct(o,o.j,c),c.L=2,c.v=dr(nt(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=mo(c.j,null),c.g.ea(c.v)),c.F=Date.now(),cr(c)}fo(o)}function mr(o){o.g&&(pi(o),o.g.cancel(),o.g=null)}function so(o){mr(o),o.u&&(l.clearTimeout(o.u),o.u=null),yr(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function gr(o){if(!Us(o.h)&&!o.s){o.s=!0;var c=o.Ga;Ge||ot(),De||(Ge(),De=!0),je.add(c,o),o.B=0}}function Bc(o,c){return zs(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Tn(w(o.Ga,o,c),ho(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const P=new ct(this,this.j,o);let x=this.o;if(this.S&&(x?(x=_(x),v(x,this.S)):x=this.S),this.m!==null||this.O||(P.H=x,x=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=ao(this,P,c),h=nt(this.I),ie(h,"RID",o),ie(h,"CVER",22),this.D&&ie(h,"X-HTTP-Session-Id",this.D),kn(this,h),x&&(this.O?c="headers="+encodeURIComponent(String(Js(x)))+"&"+c:this.m&&hi(h,this.m,x)),ui(this.h,P),this.Ua&&ie(h,"TYPE","init"),this.P?(ie(h,"$req",c),ie(h,"SID","null"),P.T=!0,oi(P,h,null)):oi(P,h,c),this.G=2}}else this.G==3&&(o?oo(this,o):this.i.length==0||Us(this.h)||oo(this))};function oo(o,c){var h;c?h=c.l:h=o.U++;const p=nt(o.I);ie(p,"SID",o.K),ie(p,"RID",h),ie(p,"AID",o.T),kn(o,p),o.m&&o.o&&hi(p,o.m,o.o),h=new ct(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=ao(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),ui(o.h,h),oi(h,p,c)}function kn(o,c){o.H&&$(o.H,function(h,p){ie(c,p,h)}),o.l&&js({},function(h,p){ie(c,p,h)})}function ao(o,c,h){h=Math.min(o.i.length,h);var p=o.l?w(o.l.Na,o.l,o):null;e:{var P=o.i;let x=-1;for(;;){const N=["count="+h];x==-1?0<h?(x=P[0].g,N.push("ofs="+x)):x=0:N.push("ofs="+x);let ne=!0;for(let ve=0;ve<h;ve++){let ee=P[ve].g;const Se=P[ve].map;if(ee-=x,0>ee)x=Math.max(0,P[ve].g-100),ne=!1;else try{Lc(Se,N,"req"+ee+"_")}catch{p&&p(Se)}}if(ne){p=N.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,p}function lo(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Ge||ot(),De||(Ge(),De=!0),je.add(c,o),o.v=0}}function fi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Tn(w(o.Fa,o),ho(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,co(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Tn(w(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Re(10),mr(this),co(this))};function pi(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function co(o){o.g=new ct(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=nt(o.qa);ie(c,"RID","rpc"),ie(c,"SID",o.K),ie(c,"AID",o.T),ie(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&ie(c,"TO",o.ja),ie(c,"TYPE","xmlhttp"),kn(o,c),o.m&&o.o&&hi(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=dr(nt(c)),h.m=null,h.P=!0,Ms(h,o)}n.Za=function(){this.C!=null&&(this.C=null,mr(this),fi(this),Re(19))};function yr(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function uo(o,c){var h=null;if(o.g==c){yr(o),pi(o),o.g=null;var p=2}else if(ci(o.h,c))h=c.D,Gs(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var P=o.B;p=or(),_e(p,new Vs(p,h)),gr(o)}else lo(o);else if(P=c.s,P==3||P==0&&0<c.X||!(p==1&&Bc(o,c)||p==2&&fi(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),P){case 1:bt(o,5);break;case 4:bt(o,10);break;case 3:bt(o,6);break;default:bt(o,2)}}}function ho(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function bt(o,c){if(o.j.info("Error code "+c),c==2){var h=w(o.fb,o),p=o.Xa;const P=!p;p=new At(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ur(p,"https"),dr(p),P?Vc(p.toString(),h):Dc(p.toString(),h)}else Re(2);o.G=0,o.l&&o.l.sa(c),fo(o),so(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Re(2)):(this.j.info("Failed to ping google.com"),Re(1))};function fo(o){if(o.G=0,o.ka=[],o.l){const c=qs(o.h);(c.length!=0||o.i.length!=0)&&(C(o.ka,c),C(o.ka,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.ra()}}function po(o,c,h){var p=h instanceof At?nt(h):new At(h);if(p.g!="")c&&(p.g=c+"."+p.g),hr(p,p.s);else{var P=l.location;p=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var x=new At(null);p&&ur(x,p),c&&(x.g=c),P&&hr(x,P),h&&(x.l=h),p=x}return h=o.D,c=o.ya,h&&c&&ie(p,h,c),ie(p,"VER",o.la),kn(o,p),p}function mo(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new oe(new Pn({eb:h})):new oe(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function go(){}n=go.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function _r(){}_r.prototype.g=function(o,c){return new Le(o,c)};function Le(o,c){pe.call(this),this.g=new io(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!L(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!L(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Wt(this)}b(Le,pe),Le.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Le.prototype.close=function(){di(this.g)},Le.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=ze(o),o=h);c.i.push(new Ec(c.Ya++,o)),c.G==3&&gr(c)},Le.prototype.N=function(){this.g.l=null,delete this.j,di(this.g),delete this.g,Le.aa.N.call(this)};function yo(o){lt.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}b(yo,lt);function _o(){ri.call(this),this.status=1}b(_o,ri);function Wt(o){this.g=o}b(Wt,go),Wt.prototype.ua=function(){_e(this.g,"a")},Wt.prototype.ta=function(o){_e(this.g,new yo(o))},Wt.prototype.sa=function(o){_e(this.g,new _o)},Wt.prototype.ra=function(){_e(this.g,"b")},_r.prototype.createWebChannel=_r.prototype.g,Le.prototype.send=Le.prototype.o,Le.prototype.open=Le.prototype.m,Le.prototype.close=Le.prototype.close,ll=function(){return new _r},al=function(){return or()},ol=St,Ui={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ar.NO_ERROR=0,ar.TIMEOUT=8,ar.HTTP_ERROR=6,Rr=ar,Ds.COMPLETE="complete",sl=Ds,sr.EventType=tt,tt.OPEN="a",tt.CLOSE="b",tt.ERROR="c",tt.MESSAGE="d",pe.prototype.listen=pe.prototype.K,On=sr,il=Pn,oe.prototype.listenOnce=oe.prototype.L,oe.prototype.getLastError=oe.prototype.Ka,oe.prototype.getLastErrorCode=oe.prototype.Ba,oe.prototype.getStatus=oe.prototype.Z,oe.prototype.getResponseJson=oe.prototype.Oa,oe.prototype.getResponseText=oe.prototype.oa,oe.prototype.send=oe.prototype.ea,oe.prototype.setWithCredentials=oe.prototype.Ha,rl=oe}).apply(typeof Er<"u"?Er:typeof self<"u"?self:typeof window<"u"?window:{});const Lo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ln="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ot=new Ma("@firebase/firestore");function Dn(){return Ot.logLevel}function G(n,...e){if(Ot.logLevel<=J.DEBUG){const t=e.map(ss);Ot.debug(`Firestore (${ln}): ${n}`,...t)}}function st(n,...e){if(Ot.logLevel<=J.ERROR){const t=e.map(ss);Ot.error(`Firestore (${ln}): ${n}`,...t)}}function tn(n,...e){if(Ot.logLevel<=J.WARN){const t=e.map(ss);Ot.warn(`Firestore (${ln}): ${n}`,...t)}}function ss(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function K(n="Unexpected state"){const e=`FIRESTORE (${ln}) INTERNAL ASSERTION FAILED: `+n;throw st(e),new Error(e)}function he(n,e){n||K()}function X(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class j extends Nt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _d{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(be.UNAUTHENTICATED))}shutdown(){}}class vd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class wd{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new _t;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new _t,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new _t)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new cl(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new be(e)}}class Td{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=be.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Ed{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Td(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Id{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(he(typeof t.token=="string"),this.R=t.token,new Sd(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Ad(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function te(n,e){return n<e?-1:n>e?1:0}function nn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new j(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new j(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new j(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new j(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Ve(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.timestamp=e}static fromTimestamp(e){return new W(e)}static min(){return new W(new Ve(0,0))}static max(){return new W(new Ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(),r===void 0?r=e.length-t:r>e.length-t&&K(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return jn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof jn?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class se extends jn{construct(e,t,r){return new se(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new j(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new se(t)}static emptyPath(){return new se([])}}const bd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class xe extends jn{construct(e,t,r){return new xe(e,t,r)}static isValidIdentifier(e){return bd.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),xe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new xe(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new j(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new j(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new j(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new j(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new xe(t)}static emptyPath(){return new xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(se.fromString(e))}static fromName(e){return new H(se.fromString(e).popFirst(5))}static empty(){return new H(se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return se.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new se(e.slice()))}}function Pd(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=W.fromTimestamp(r===1e9?new Ve(t+1,0):new Ve(t,r));return new wt(i,H.empty(),e)}function Rd(n){return new wt(n.readTime,n.key,-1)}class wt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new wt(W.min(),H.empty(),-1)}static max(){return new wt(W.max(),H.empty(),-1)}}function Cd(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=H.comparator(n.documentKey,e.documentKey),t!==0?t:te(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class kd{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function os(n){if(n.code!==F.FAILED_PRECONDITION||n.message!==xd)throw n;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):D.reject(t)}static resolve(e){return new D((t,r)=>{t(e)})}static reject(e){return new D((t,r)=>{r(e)})}static waitFor(e){return new D((t,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},u=>r(u))}),a=!0,s===i&&t()})}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next(i=>i?D.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new D((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;t(e[d]).next(f=>{a[d]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new D((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Vd(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Yn(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class as{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}as.oe=-1;function qr(n){return n==null}function zi(n){return n===0&&1/n==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function jr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Dd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,t){this.comparator=e,this.root=t||we.EMPTY}insert(e,t){return new le(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,we.BLACK,null,null))}remove(e){return new le(this.comparator,this.root.remove(e,this.comparator).copy(null,null,we.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Sr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Sr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Sr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Sr(this.root,e,this.comparator,!0)}}class Sr{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class we{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??we.RED,this.left=i??we.EMPTY,this.right=s??we.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new we(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return we.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return we.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,we.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,we.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}we.EMPTY=null,we.RED=!0,we.BLACK=!1;we.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,t,r,i,s){return this}insert(e,t,r){return new we(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.comparator=e,this.data=new le(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new No(this.data.getIterator())}getIteratorFrom(e){return new No(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Te)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Te(this.comparator);return t.data=e,t}}class No{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.fields=e,e.sort(xe.comparator)}static empty(){return new dt([])}unionWith(e){let t=new Te(xe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new dt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return nn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class hl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new hl("Invalid base64 string: "+s):s}}(e);return new Ee(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Ee(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ee.EMPTY_BYTE_STRING=new Ee("");const Od=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tt(n){if(he(!!n),typeof n=="string"){let e=0;const t=Od.exec(n);if(he(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ue(n.seconds),nanos:ue(n.nanos)}}function ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Lt(n){return typeof n=="string"?Ee.fromBase64String(n):Ee.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function cs(n){const e=n.mapValue.fields.__previous_value__;return ls(e)?cs(e):e}function Hn(n){const e=Tt(n.mapValue.fields.__local_write_time__.timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e,t,r,i,s,a,l,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class $n{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new $n("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof $n&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ls(n)?4:Md(n)?9007199254740991:10:K()}function Xe(n,e){if(n===e)return!0;const t=Mt(n);if(t!==Mt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Hn(n).isEqual(Hn(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Tt(i.timestampValue),l=Tt(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return Lt(i.bytesValue).isEqual(Lt(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ue(i.geoPointValue.latitude)===ue(s.geoPointValue.latitude)&&ue(i.geoPointValue.longitude)===ue(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ue(i.integerValue)===ue(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ue(i.doubleValue),l=ue(s.doubleValue);return a===l?zi(a)===zi(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return nn(n.arrayValue.values||[],e.arrayValue.values||[],Xe);case 10:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Mo(a)!==Mo(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!Xe(a[u],l[u])))return!1;return!0}(n,e);default:return K()}}function Wn(n,e){return(n.values||[]).find(t=>Xe(t,e))!==void 0}function rn(n,e){if(n===e)return 0;const t=Mt(n),r=Mt(e);if(t!==r)return te(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return te(n.booleanValue,e.booleanValue);case 2:return function(s,a){const l=ue(s.integerValue||s.doubleValue),u=ue(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Fo(n.timestampValue,e.timestampValue);case 4:return Fo(Hn(n),Hn(e));case 5:return te(n.stringValue,e.stringValue);case 6:return function(s,a){const l=Lt(s),u=Lt(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=te(l[d],u[d]);if(f!==0)return f}return te(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const l=te(ue(s.latitude),ue(a.latitude));return l!==0?l:te(ue(s.longitude),ue(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,a){const l=s.values||[],u=a.values||[];for(let d=0;d<l.length&&d<u.length;++d){const f=rn(l[d],u[d]);if(f)return f}return te(l.length,u.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,a){if(s===Ir.mapValue&&a===Ir.mapValue)return 0;if(s===Ir.mapValue)return 1;if(a===Ir.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=a.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let y=0;y<u.length&&y<f.length;++y){const w=te(u[y],f[y]);if(w!==0)return w;const I=rn(l[u[y]],d[f[y]]);if(I!==0)return I}return te(u.length,f.length)}(n.mapValue,e.mapValue);default:throw K()}}function Fo(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return te(n,e);const t=Tt(n),r=Tt(e),i=te(t.seconds,r.seconds);return i!==0?i:te(t.nanos,r.nanos)}function sn(n){return Gi(n)}function Gi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Tt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Lt(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return H.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Gi(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Gi(t.fields[a])}`;return i+"}"}(n.mapValue):K()}function qi(n){return!!n&&"integerValue"in n}function us(n){return!!n&&"arrayValue"in n}function Bo(n){return!!n&&"nullValue"in n}function Uo(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ti(n){return!!n&&"mapValue"in n}function Fn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return jr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Fn(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Fn(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Md(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.value=e}static empty(){return new We({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ti(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fn(t)}setAll(e){let t=xe.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=Fn(a):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Ti(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Ti(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){jr(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new We(Fn(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Pe(e,0,W.min(),W.min(),W.min(),We.empty(),0)}static newFoundDocument(e,t,r,i){return new Pe(e,1,t,W.min(),r,i,0)}static newNoDocument(e,t){return new Pe(e,2,t,W.min(),W.min(),We.empty(),0)}static newUnknownDocument(e,t){return new Pe(e,3,t,W.min(),W.min(),We.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(W.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=We.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=We.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=W.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Pe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Pe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Lr{constructor(e,t){this.position=e,this.inclusive=t}}function zo(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(a.referenceValue),t.key):r=rn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Go(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Xe(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Mr{constructor(e,t="asc"){this.field=e,this.dir=t}}function Nd(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class dl{}class fe extends dl{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Bd(e,t,r):t==="array-contains"?new Gd(e,r):t==="in"?new qd(e,r):t==="not-in"?new jd(e,r):t==="array-contains-any"?new Hd(e,r):new fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ud(e,r):new zd(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(rn(t,this.value)):t!==null&&Mt(this.value)===Mt(t)&&this.matchesComparison(rn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Je extends dl{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Je(e,t)}matches(e){return fl(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function fl(n){return n.op==="and"}function pl(n){return Fd(n)&&fl(n)}function Fd(n){for(const e of n.filters)if(e instanceof Je)return!1;return!0}function ji(n){if(n instanceof fe)return n.field.canonicalString()+n.op.toString()+sn(n.value);if(pl(n))return n.filters.map(e=>ji(e)).join(",");{const e=n.filters.map(t=>ji(t)).join(",");return`${n.op}(${e})`}}function ml(n,e){return n instanceof fe?function(r,i){return i instanceof fe&&r.op===i.op&&r.field.isEqual(i.field)&&Xe(r.value,i.value)}(n,e):n instanceof Je?function(r,i){return i instanceof Je&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&ml(a,i.filters[l]),!0):!1}(n,e):void K()}function gl(n){return n instanceof fe?function(t){return`${t.field.canonicalString()} ${t.op} ${sn(t.value)}`}(n):n instanceof Je?function(t){return t.op.toString()+" {"+t.getFilters().map(gl).join(" ,")+"}"}(n):"Filter"}class Bd extends fe{constructor(e,t,r){super(e,t,r),this.key=H.fromName(r.referenceValue)}matches(e){const t=H.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ud extends fe{constructor(e,t){super(e,"in",t),this.keys=yl("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class zd extends fe{constructor(e,t){super(e,"not-in",t),this.keys=yl("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function yl(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>H.fromName(r.referenceValue))}class Gd extends fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return us(t)&&Wn(t.arrayValue,this.value)}}class qd extends fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Wn(this.value.arrayValue,t)}}class jd extends fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Wn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Wn(this.value.arrayValue,t)}}class Hd extends fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!us(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Wn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function qo(n,e=null,t=[],r=[],i=null,s=null,a=null){return new $d(n,e,t,r,i,s,a)}function hs(n){const e=X(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ji(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),qr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>sn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>sn(r)).join(",")),e.ue=t}return e.ue}function ds(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Nd(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ml(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Go(n.startAt,e.startAt)&&Go(n.endAt,e.endAt)}function Hi(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Wd(n,e,t,r,i,s,a,l){return new Hr(n,e,t,r,i,s,a,l)}function fs(n){return new Hr(n)}function jo(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Kd(n){return n.collectionGroup!==null}function Bn(n){const e=X(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Te(xe.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Mr(s,r))}),t.has(xe.keyField().canonicalString())||e.ce.push(new Mr(xe.keyField(),r))}return e.ce}function Qe(n){const e=X(n);return e.le||(e.le=Qd(e,Bn(n))),e.le}function Qd(n,e){if(n.limitType==="F")return qo(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Mr(i.field,s)});const t=n.endAt?new Lr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Lr(n.startAt.position,n.startAt.inclusive):null;return qo(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function $i(n,e,t){return new Hr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function $r(n,e){return ds(Qe(n),Qe(e))&&n.limitType===e.limitType}function _l(n){return`${hs(Qe(n))}|lt:${n.limitType}`}function Qt(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>gl(i)).join(", ")}]`),qr(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>sn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>sn(i)).join(",")),`Target(${r})`}(Qe(n))}; limitType=${n.limitType})`}function Wr(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Bn(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const d=zo(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,Bn(r),i)||r.endAt&&!function(a,l,u){const d=zo(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,Bn(r),i))}(n,e)}function Yd(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function vl(n){return(e,t)=>{let r=!1;for(const i of Bn(n)){const s=Xd(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Xd(n,e,t){const r=n.field.isKeyField()?H.comparator(e.key,t.key):function(s,a,l){const u=a.data.field(s),d=l.data.field(s);return u!==null&&d!==null?rn(u,d):K()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){jr(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Dd(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd=new le(H.comparator);function Et(){return Jd}const wl=new le(H.comparator);function Ln(...n){let e=wl;for(const t of n)e=e.insert(t.key,t);return e}function Zd(n){let e=wl;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Rt(){return Un()}function Tl(){return Un()}function Un(){return new cn(n=>n.toString(),(n,e)=>n.isEqual(e))}const ef=new Te(H.comparator);function Z(...n){let e=ef;for(const t of n)e=e.add(t);return e}const tf=new Te(te);function nf(){return tf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zi(e)?"-0":e}}function sf(n){return{integerValue:""+n}}/**
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
 */class Kr{constructor(){this._=void 0}}function of(n,e,t){return n instanceof Wi?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ls(s)&&(s=cs(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof Nr?El(n,e):n instanceof Fr?Sl(n,e):function(i,s){const a=lf(i,s),l=Ho(a)+Ho(i.Pe);return qi(a)&&qi(i.Pe)?sf(l):rf(i.serializer,l)}(n,e)}function af(n,e,t){return n instanceof Nr?El(n,e):n instanceof Fr?Sl(n,e):t}function lf(n,e){return n instanceof Ki?function(r){return qi(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Wi extends Kr{}class Nr extends Kr{constructor(e){super(),this.elements=e}}function El(n,e){const t=Il(e);for(const r of n.elements)t.some(i=>Xe(i,r))||t.push(r);return{arrayValue:{values:t}}}class Fr extends Kr{constructor(e){super(),this.elements=e}}function Sl(n,e){let t=Il(e);for(const r of n.elements)t=t.filter(i=>!Xe(i,r));return{arrayValue:{values:t}}}class Ki extends Kr{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Ho(n){return ue(n.integerValue||n.doubleValue)}function Il(n){return us(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function cf(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Nr&&i instanceof Nr||r instanceof Fr&&i instanceof Fr?nn(r.elements,i.elements,Xe):r instanceof Ki&&i instanceof Ki?Xe(r.Pe,i.Pe):r instanceof Wi&&i instanceof Wi}(n.transform,e.transform)}class kt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new kt}static exists(e){return new kt(void 0,e)}static updateTime(e){return new kt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cr(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ps{}function Al(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new hf(n.key,kt.none()):new ms(n.key,n.data,kt.none());{const t=n.data,r=We.empty();let i=new Te(xe.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Qr(n.key,r,new dt(i.toArray()),kt.none())}}function uf(n,e,t){n instanceof ms?function(i,s,a){const l=i.value.clone(),u=Wo(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Qr?function(i,s,a){if(!Cr(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Wo(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(bl(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function zn(n,e,t,r){return n instanceof ms?function(s,a,l,u){if(!Cr(s.precondition,a))return l;const d=s.value.clone(),f=Ko(s.fieldTransforms,u,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Qr?function(s,a,l,u){if(!Cr(s.precondition,a))return l;const d=Ko(s.fieldTransforms,u,a),f=a.data;return f.setAll(bl(s)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(y=>y.field))}(n,e,t,r):function(s,a,l){return Cr(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function $o(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&nn(r,i,(s,a)=>cf(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ms extends ps{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qr extends ps{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function bl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Wo(n,e,t){const r=new Map;he(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,af(a,l,t[i]))}return r}function Ko(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,of(s,a,e))}return r}class hf extends ps{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&uf(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=zn(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=zn(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Tl();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const u=Al(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(W.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Z())}isEqual(e){return this.batchId===e.batchId&&nn(this.mutations,e.mutations,(t,r)=>$o(t,r))&&nn(this.baseMutations,e.baseMutations,(t,r)=>$o(t,r))}}/**
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
 */class ff{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class pf{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce,Y;function Pl(n){if(n===void 0)return st("GRPC error has no .code"),F.UNKNOWN;switch(n){case ce.OK:return F.OK;case ce.CANCELLED:return F.CANCELLED;case ce.UNKNOWN:return F.UNKNOWN;case ce.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case ce.INTERNAL:return F.INTERNAL;case ce.UNAVAILABLE:return F.UNAVAILABLE;case ce.UNAUTHENTICATED:return F.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case ce.NOT_FOUND:return F.NOT_FOUND;case ce.ALREADY_EXISTS:return F.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return F.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case ce.ABORTED:return F.ABORTED;case ce.OUT_OF_RANGE:return F.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return F.UNIMPLEMENTED;case ce.DATA_LOSS:return F.DATA_LOSS;default:return K()}}(Y=ce||(ce={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function mf(){return new TextEncoder}/**
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
 */const gf=new xt([4294967295,4294967295],0);function Qo(n){const e=mf().encode(n),t=new nl;return t.update(e),new Uint8Array(t.digest())}function Yo(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new xt([t,r],0),new xt([i,s],0)]}class gs{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Mn(`Invalid padding: ${t}`);if(r<0)throw new Mn(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Mn(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Mn(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=xt.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(xt.fromNumber(r)));return i.compare(gf)===1&&(i=new xt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Qo(e),[r,i]=Yo(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new gs(s,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=Qo(e),[r,i]=Yo(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Mn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Xn.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Yr(W.min(),i,new le(te),Et(),Z())}}class Xn{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Xn(r,t,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Rl{constructor(e,t){this.targetId=e,this.me=t}}class Cl{constructor(e,t,r=Ee.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Xo{constructor(){this.fe=0,this.ge=Zo(),this.pe=Ee.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Z(),t=Z(),r=Z();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:K()}}),new Xn(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=Zo()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,he(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class yf{constructor(e){this.Le=e,this.Be=new Map,this.ke=Et(),this.qe=Jo(),this.Qe=new le(te)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Hi(s))if(r===0){const a=new H(s.path);this.Ue(t,a,Pe.newNoDocument(a,W.min()))}else he(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=Lt(r).toUint8Array()}catch(u){if(u instanceof hl)return tn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new gs(a,i,s)}catch(u){return tn(u instanceof Mn?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&Hi(l.target)){const u=new H(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Pe.newNoDocument(u,e))}s.be&&(t.set(a,s.Ce()),s.ve())}});let r=Z();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new Yr(e,t,this.Qe,this.ke,r);return this.ke=Et(),this.qe=Jo(),this.Qe=new le(te),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Xo,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Te(te),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||G("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Xo),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Jo(){return new le(H.comparator)}function Zo(){return new le(H.comparator)}const _f={asc:"ASCENDING",desc:"DESCENDING"},vf={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wf={and:"AND",or:"OR"};class Tf{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Qi(n,e){return n.useProto3Json||qr(e)?e:{value:e}}function Ef(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sf(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Jt(n){return he(!!n),W.fromTimestamp(function(t){const r=Tt(t);return new Ve(r.seconds,r.nanos)}(n))}function If(n,e){return Yi(n,e).canonicalString()}function Yi(n,e){const t=function(i){return new se(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function xl(n){const e=se.fromString(n);return he(Ll(e)),e}function Ei(n,e){const t=xl(e);if(t.get(1)!==n.databaseId.projectId)throw new j(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new j(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new H(Vl(t))}function kl(n,e){return If(n.databaseId,e)}function Af(n){const e=xl(n);return e.length===4?se.emptyPath():Vl(e)}function ea(n){return new se(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Vl(n){return he(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function bf(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(he(f===void 0||typeof f=="string"),Ee.fromBase64String(f||"")):(he(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ee.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const f=d.code===void 0?F.UNKNOWN:Pl(d.code);return new j(f,d.message||"")}(a);t=new Cl(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ei(n,r.document.name),s=Jt(r.document.updateTime),a=r.document.createTime?Jt(r.document.createTime):W.min(),l=new We({mapValue:{fields:r.document.fields}}),u=Pe.newFoundDocument(i,s,a,l),d=r.targetIds||[],f=r.removedTargetIds||[];t=new xr(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ei(n,r.document),s=r.readTime?Jt(r.readTime):W.min(),a=Pe.newNoDocument(i,s),l=r.removedTargetIds||[];t=new xr([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ei(n,r.document),s=r.removedTargetIds||[];t=new xr([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new pf(i,s),l=r.targetId;t=new Rl(l,a)}}return t}function Pf(n,e){return{documents:[kl(n,e.path)]}}function Rf(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=kl(n,i);const s=function(d){if(d.length!==0)return Ol(Je.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(f=>function(w){return{field:Yt(w.field),direction:kf(w.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Qi(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function Cf(n){let e=Af(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){he(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(y){const w=Dl(y);return w instanceof Je&&pl(w)?w.getFilters():[w]}(t.where));let a=[];t.orderBy&&(a=function(y){return y.map(w=>function(b){return new Mr(Xt(b.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(w))}(t.orderBy));let l=null;t.limit&&(l=function(y){let w;return w=typeof y=="object"?y.value:y,qr(w)?null:w}(t.limit));let u=null;t.startAt&&(u=function(y){const w=!!y.before,I=y.values||[];return new Lr(I,w)}(t.startAt));let d=null;return t.endAt&&(d=function(y){const w=!y.before,I=y.values||[];return new Lr(I,w)}(t.endAt)),Wd(e,i,a,s,l,"F",u,d)}function xf(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Dl(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Xt(t.unaryFilter.field);return fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Xt(t.unaryFilter.field);return fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xt(t.unaryFilter.field);return fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Xt(t.unaryFilter.field);return fe.create(a,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(n):n.fieldFilter!==void 0?function(t){return fe.create(Xt(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Je.create(t.compositeFilter.filters.map(r=>Dl(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(t.compositeFilter.op))}(n):K()}function kf(n){return _f[n]}function Vf(n){return vf[n]}function Df(n){return wf[n]}function Yt(n){return{fieldPath:n.canonicalString()}}function Xt(n){return xe.fromServerFormat(n.fieldPath)}function Ol(n){return n instanceof fe?function(t){if(t.op==="=="){if(Uo(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NAN"}};if(Bo(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Uo(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NOT_NAN"}};if(Bo(t.value))return{unaryFilter:{field:Yt(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yt(t.field),op:Vf(t.op),value:t.value}}}(n):n instanceof Je?function(t){const r=t.getFilters().map(i=>Ol(i));return r.length===1?r[0]:{compositeFilter:{op:Df(t.op),filters:r}}}(n):K()}function Ll(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t,r,i,s=W.min(),a=W.min(),l=Ee.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ft(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ft(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(e){this.ct=e}}function Lf(n){const e=Cf({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?$i(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mf{constructor(){this.an=new Nf}addToCollectionParentIndex(e,t){return this.an.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(wt.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(wt.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class Nf{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Te(se.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Te(se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new on(0)}static Bn(){return new on(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){this.changes=new cn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Pe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Bf{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&zn(r.mutation,i,dt.empty(),Ve.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Z()){const i=Rt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=Ln();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Rt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Z()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let s=Et();const a=Un(),l=function(){return Un()}();return t.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof Qr)?s=s.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),zn(f.mutation,d,f.mutation.getFieldMask(),Ve.now())):a.set(d.key,dt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>a.set(d,f)),t.forEach((d,f)=>{var y;return l.set(d,new Bf(f,(y=a.get(d))!==null&&y!==void 0?y:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Un();let i=new le((a,l)=>a-l),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let f=r.get(u)||dt.empty();f=l.applyToLocalView(d,f),r.set(u,f);const y=(i.get(l.batchId)||Z()).add(u);i=i.insert(l.batchId,y)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,y=Tl();f.forEach(w=>{if(!s.has(w)){const I=Al(t.get(w),r.get(w));I!==null&&y.set(w,I),s=s.add(w)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,y))}return D.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return H.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Kd(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):D.resolve(Rt());let l=-1,u=s;return a.next(d=>D.forEach(d,(f,y)=>(l<y.largestBatchId&&(l=y.largestBatchId),s.get(f)?D.resolve():this.remoteDocumentCache.getEntry(e,f).next(w=>{u=u.insert(f,w)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,Z())).next(f=>({batchId:l,changes:Zd(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H(t)).next(r=>{let i=Ln();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=Ln();return this.indexManager.getCollectionParents(e,s).next(l=>D.forEach(l,u=>{const d=function(y,w){return new Hr(w,null,y.explicitOrderBy.slice(),y.filters.slice(),y.limit,y.limitType,y.startAt,y.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((y,w)=>{a=a.insert(y,w)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((u,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,Pe.newInvalidDocument(f)))});let l=Ln();return a.forEach((u,d)=>{const f=s.get(u);f!==void 0&&zn(f.mutation,d,dt.empty(),Ve.now()),Wr(t,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return D.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:Jt(i.createTime)}}(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,function(i){return{name:i.name,query:Lf(i.bundledQuery),readTime:Jt(i.readTime)}}(t)),D.resolve()}}/**
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
 */class Gf{constructor(){this.overlays=new le(H.comparator),this.Pr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Rt();return D.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),D.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const i=Rt(),s=t.length+1,a=new H(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return D.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new le((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=Rt(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=Rt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=i)););return D.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new ff(t,r));let s=this.Pr.get(t);s===void 0&&(s=Z(),this.Pr.set(t,s)),this.Pr.set(t,s.add(r.key))}}/**
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
 */class qf{constructor(){this.sessionToken=Ee.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(){this.Ir=new Te(me.Tr),this.Er=new Te(me.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){const r=new me(e,t);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Rr(new me(e,t))}Vr(e,t){e.forEach(r=>this.removeReference(r,t))}mr(e){const t=new H(new se([])),r=new me(t,e),i=new me(t,e+1),s=[];return this.Er.forEachInRange([r,i],a=>{this.Rr(a),s.push(a.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const t=new H(new se([])),r=new me(t,e),i=new me(t,e+1);let s=Z();return this.Er.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new me(e,0),r=this.Ir.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class me{constructor(e,t){this.key=e,this.yr=t}static Tr(e,t){return H.comparator(e.key,t.key)||te(e.yr,t.yr)}static dr(e,t){return te(e.yr,t.yr)||H.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new Te(me.Tr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new df(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.Sr=this.Sr.add(new me(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Dr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new me(t,0),i=new me(t,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],a=>{const l=this.br(a.yr);s.push(l)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Te(te);return t.forEach(i=>{const s=new me(i,0),a=new me(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,a],l=>{r=r.add(l.yr)})}),D.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const a=new me(new H(s),0);let l=new Te(te);return this.Sr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.yr)),!0)},a),D.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.br(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){he(this.vr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return D.forEach(t.mutations,i=>{const s=new me(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,t){const r=new me(t,0),i=this.Sr.firstAfterOrEqual(r);return D.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e){this.Fr=e,this.docs=function(){return new le(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Fr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():Pe.newInvalidDocument(t))}getEntries(e,t){let r=Et();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Pe.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Et();const a=t.path,l=new H(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Cd(Rd(f),r)<=0||(i.has(f.key)||Wr(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,t,r,i){K()}Mr(e,t){return D.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new $f(this)}getSize(e){return D.resolve(this.size)}}class $f extends Ff{constructor(e){super(),this.ur=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),D.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e){this.persistence=e,this.Or=new cn(t=>hs(t),ds),this.lastRemoteSnapshotVersion=W.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new ys,this.targetCount=0,this.Br=on.Ln()}forEachTarget(e,t){return this.Or.forEach((r,i)=>t(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Nr&&(this.Nr=t),D.resolve()}Qn(e){this.Or.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Br=new on(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.Qn(t),D.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Lr.mr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Or.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Or.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.Or.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.Lr.Ar(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.Lr.Vr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Lr.mr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Lr.pr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.Lr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(e,t){this.kr={},this.overlays={},this.qr=new as(0),this.Qr=!1,this.Qr=!0,this.Kr=new qf,this.referenceDelegate=e(this),this.$r=new Wf(this),this.indexManager=new Mf,this.remoteDocumentCache=function(i){return new Hf(i)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new Of(t),this.Wr=new zf(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Gf,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.kr[e.toKey()];return r||(r=new jf(t,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,t,r){G("MemoryPersistence","Starting transaction:",e);const i=new Qf(this.qr.next());return this.referenceDelegate.Gr(),r(i).next(s=>this.referenceDelegate.zr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}jr(e,t){return D.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,t)))}}class Qf extends kd{constructor(e){super(),this.currentSequenceNumber=e}}class _s{constructor(e){this.persistence=e,this.Hr=new ys,this.Jr=null}static Yr(e){return new _s(e)}get Zr(){if(this.Jr)return this.Jr;throw K()}addReference(e,t,r){return this.Hr.addReference(r,t),this.Zr.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Hr.removeReference(r,t),this.Zr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.Zr.add(t.toString()),D.resolve()}removeTarget(e,t){this.Hr.mr(t.targetId).forEach(i=>this.Zr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Zr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Gr(){this.Jr=new Set}zr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Zr,r=>{const i=H.fromPath(r);return this.Xr(e,i).next(s=>{s||t.removeEntry(i,W.min())})}).next(()=>(this.Jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Xr(e,t).next(r=>{r?this.Zr.delete(t.toString()):this.Zr.add(t.toString())})}Ur(e){return 0}Xr(e,t){return D.or([()=>D.resolve(this.Hr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.jr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Ki=r,this.$i=i}static Ui(e,t){let r=Z(),i=Z();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new vs(e,t.fromCache,r,i)}}/**
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
 */class Yf{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xf{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return tu()?8:Vd(Zc())>0?6:4}()}initialize(e,t){this.Hi=e,this.indexManager=t,this.Wi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Ji(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Yi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Yf;return this.Zi(e,t,a).next(l=>{if(s.result=l,this.Gi)return this.Xi(e,t,a,l.size)})}).next(()=>s.result)}Xi(e,t,r,i){return r.documentReadCount<this.zi?(Dn()<=J.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",Qt(t),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),D.resolve()):(Dn()<=J.DEBUG&&G("QueryEngine","Query:",Qt(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ji*i?(Dn()<=J.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",Qt(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Qe(t))):D.resolve())}Ji(e,t){if(jo(t))return D.resolve(null);let r=Qe(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=$i(t,null,"F"),r=Qe(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=Z(...s);return this.Hi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.es(t,l);return this.ts(t,d,a,u.readTime)?this.Ji(e,$i(t,null,"F")):this.ns(e,d,t,u)}))})))}Yi(e,t,r,i){return jo(t)||i.isEqual(W.min())?D.resolve(null):this.Hi.getDocuments(e,r).next(s=>{const a=this.es(t,s);return this.ts(t,a,r,i)?D.resolve(null):(Dn()<=J.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Qt(t)),this.ns(e,a,t,Pd(i,-1)).next(l=>l))})}es(e,t){let r=new Te(vl(e));return t.forEach((i,s)=>{Wr(e,s)&&(r=r.add(s))}),r}ts(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zi(e,t,r){return Dn()<=J.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",Qt(t)),this.Hi.getDocumentsMatchingQuery(e,t,wt.min(),r)}ns(e,t,r,i){return this.Hi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,t,r,i){this.persistence=e,this.rs=t,this.serializer=i,this.ss=new le(te),this.os=new cn(s=>hs(s),ds),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Uf(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ss))}}function Zf(n,e,t,r){return new Jf(n,e,t,r)}async function Ml(n,e){const t=X(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.cs(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=Z();for(const d of i){a.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return t.localDocuments.getDocuments(r,u).next(d=>({ls:d,removedBatchIds:a,addedBatchIds:l}))})})}function Nl(n){const e=X(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.$r.getLastRemoteSnapshotVersion(t))}function ep(n,e){const t=X(n),r=e.snapshotVersion;let i=t.ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.us.newChangeBuffer({trackRemovals:!0});i=t.ss;const l=[];e.targetChanges.forEach((f,y)=>{const w=i.get(y);if(!w)return;l.push(t.$r.removeMatchingKeys(s,f.removedDocuments,y).next(()=>t.$r.addMatchingKeys(s,f.addedDocuments,y)));let I=w.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(y)!==null?I=I.withResumeToken(Ee.EMPTY_BYTE_STRING,W.min()).withLastLimboFreeSnapshotVersion(W.min()):f.resumeToken.approximateByteSize()>0&&(I=I.withResumeToken(f.resumeToken,r)),i=i.insert(y,I),function(R,C,k){return R.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(w,I,f)&&l.push(t.$r.updateTargetData(s,I))});let u=Et(),d=Z();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(tp(s,a,e.documentUpdates).next(f=>{u=f.hs,d=f.Ps})),!r.isEqual(W.min())){const f=t.$r.getLastRemoteSnapshotVersion(s).next(y=>t.$r.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return D.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(t.ss=i,s))}function tp(n,e,t){let r=Z(),i=Z();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=Et();return t.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(W.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):G("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{hs:a,Ps:i}})}function np(n,e){const t=X(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.$r.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):t.$r.allocateTargetId(r).next(a=>(i=new ft(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.$r.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ss=t.ss.insert(r.targetId,r),t.os.set(e,r.targetId)),r})}async function Xi(n,e,t){const r=X(n),i=r.ss.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Yn(a))throw a;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ss=r.ss.remove(e),r.os.delete(i.target)}function ta(n,e,t){const r=X(n);let i=W.min(),s=Z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,f){const y=X(u),w=y.os.get(f);return w!==void 0?D.resolve(y.ss.get(w)):y.$r.getTargetData(d,f)}(r,a,Qe(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.rs.getDocumentsMatchingQuery(a,e,t?i:W.min(),t?s:Z())).next(l=>(rp(r,Yd(e),l),{documents:l,Is:s})))}function rp(n,e,t){let r=n._s.get(e)||W.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n._s.set(e,r)}class na{constructor(){this.activeTargetIds=nf()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class ip{constructor(){this.io=new na,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,t,r){this.so[e]=t}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new na,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let Ar=null;function Si(){return Ar===null?Ar=function(){return 268435456+Math.round(2147483648*Math.random())}():Ar++,"0x"+Ar.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ap{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ae="WebChannelConnection";class lp extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+t.host,this.Do=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get vo(){return!1}Fo(t,r,i,s,a){const l=Si(),u=this.Mo(t,r.toUriEncodedString());G("RestConnection",`Sending RPC '${t}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(d,s,a),this.Oo(t,u,d,i).then(f=>(G("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw tn("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}No(t,r,i,s,a,l){return this.Fo(t,r,i,s,a)}xo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ln}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}Mo(t,r){const i=op[t];return`${this.bo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,t,r,i){const s=Si();return new Promise((a,l)=>{const u=new rl;u.setWithCredentials(!0),u.listenOnce(sl.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Rr.NO_ERROR:const f=u.getResponseJson();G(Ae,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case Rr.TIMEOUT:G(Ae,`RPC '${e}' ${s} timed out`),l(new j(F.DEADLINE_EXCEEDED,"Request time out"));break;case Rr.HTTP_ERROR:const y=u.getStatus();if(G(Ae,`RPC '${e}' ${s} failed with status:`,y,"response text:",u.getResponseText()),y>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const I=w==null?void 0:w.error;if(I&&I.status&&I.message){const b=function(C){const k=C.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(k)>=0?k:F.UNKNOWN}(I.status);l(new j(b,I.message))}else l(new j(F.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new j(F.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{G(Ae,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);G(Ae,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",d,r,15)})}Lo(e,t,r){const i=Si(),s=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ll(),l=al(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.xmlHttpFactory=new il({})),this.xo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const f=s.join("");G(Ae,`Creating RPC '${e}' stream ${i}: ${f}`,u);const y=a.createWebChannel(f,u);let w=!1,I=!1;const b=new ap({Po:C=>{I?G(Ae,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(w||(G(Ae,`Opening RPC '${e}' stream ${i} transport.`),y.open(),w=!0),G(Ae,`RPC '${e}' stream ${i} sending:`,C),y.send(C))},Io:()=>y.close()}),R=(C,k,L)=>{C.listen(k,V=>{try{L(V)}catch(O){setTimeout(()=>{throw O},0)}})};return R(y,On.EventType.OPEN,()=>{I||(G(Ae,`RPC '${e}' stream ${i} transport opened.`),b.po())}),R(y,On.EventType.CLOSE,()=>{I||(I=!0,G(Ae,`RPC '${e}' stream ${i} transport closed`),b.wo())}),R(y,On.EventType.ERROR,C=>{I||(I=!0,tn(Ae,`RPC '${e}' stream ${i} transport errored:`,C),b.wo(new j(F.UNAVAILABLE,"The operation could not be completed")))}),R(y,On.EventType.MESSAGE,C=>{var k;if(!I){const L=C.data[0];he(!!L);const V=L,O=V.error||((k=V[0])===null||k===void 0?void 0:k.error);if(O){G(Ae,`RPC '${e}' stream ${i} received error:`,O);const U=O.status;let $=function(m){const v=ce[m];if(v!==void 0)return Pl(v)}(U),A=O.message;$===void 0&&($=F.INTERNAL,A="Unknown error status: "+U+" with message "+O.message),I=!0,b.wo(new j($,A)),y.close()}else G(Ae,`RPC '${e}' stream ${i} received:`,L),b.So(L)}}),R(l,ol.STAT_EVENT,C=>{C.stat===Ui.PROXY?G(Ae,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===Ui.NOPROXY&&G(Ae,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{b.yo()},0),b}}function Ii(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(n){return new Tf(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ai=e,this.timerId=t,this.Bo=r,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const t=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,t-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,t,r,i,s,a,l,u){this.ai=e,this.jo=r,this.Ho=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new Bl(e,t)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,t){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():t&&t.code===F.RESOURCE_EXHAUSTED?(st(t.toString()),st("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):t&&t.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(t)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),t=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Jo===t&&this.h_(r,i)},r=>{e(()=>{const i=new j(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(i)})})}h_(e,t){const r=this.l_(this.Jo);this.stream=this.I_(e,t),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{r(()=>this.P_(i))}),this.stream.onMessage(i=>{r(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return t=>{this.ai.enqueueAndForget(()=>this.Jo===e?t():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class up extends cp{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}I_(e,t){return this.connection.Lo("Listen",e,t)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const t=bf(this.serializer,e),r=function(s){if(!("targetChange"in s))return W.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?W.min():a.readTime?Jt(a.readTime):W.min()}(e);return this.listener.E_(t,r)}d_(e){const t={};t.database=ea(this.serializer),t.addTarget=function(s,a){let l;const u=a.target;if(l=Hi(u)?{documents:Pf(s,u)}:{query:Rf(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Sf(s,a.resumeToken);const d=Qi(s,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(W.min())>0){l.readTime=Ef(s,a.snapshotVersion.toTimestamp());const d=Qi(s,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=xf(this.serializer,e);r&&(t.labels=r),this.__(t)}A_(e){const t={};t.database=ea(this.serializer),t.removeTarget=e,this.__(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new j(F.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,t,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Fo(e,Yi(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new j(F.UNKNOWN,s.toString())})}No(e,t,r,i,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.No(e,Yi(t,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new j(F.UNKNOWN,a.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class dp{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(st(t),this.b_=!1):G("OnlineStateTracker",t)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(a=>{r.enqueueAndForget(async()=>{Zn(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=X(u);d.N_.add(4),await Jn(d),d.k_.set("Unknown"),d.N_.delete(4),await Xr(d)}(this))})}),this.k_=new dp(r,i)}}async function Xr(n){if(Zn(n))for(const e of n.L_)await e(!0)}async function Jn(n){for(const e of n.L_)await e(!1)}function Ul(n,e){const t=X(n);t.O_.has(e.targetId)||(t.O_.set(e.targetId,e),Ss(t)?Es(t):un(t).n_()&&Ts(t,e))}function ws(n,e){const t=X(n),r=un(t);t.O_.delete(e),r.n_()&&zl(t,e),t.O_.size===0&&(r.n_()?r.s_():Zn(t)&&t.k_.set("Unknown"))}function Ts(n,e){if(n.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(W.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}un(n).d_(e)}function zl(n,e){n.q_.xe(e),un(n).A_(e)}function Es(n){n.q_=new yf({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.O_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),un(n).start(),n.k_.D_()}function Ss(n){return Zn(n)&&!un(n).t_()&&n.O_.size>0}function Zn(n){return X(n).N_.size===0}function Gl(n){n.q_=void 0}async function pp(n){n.k_.set("Online")}async function mp(n){n.O_.forEach((e,t)=>{Ts(n,e)})}async function gp(n,e){Gl(n),Ss(n)?(n.k_.F_(e),Es(n)):n.k_.set("Unknown")}async function yp(n,e,t){if(n.k_.set("Online"),e instanceof Cl&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.O_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.O_.delete(l),i.q_.removeTarget(l))}(n,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ia(n,r)}else if(e instanceof xr?n.q_.Ke(e):e instanceof Rl?n.q_.He(e):n.q_.We(e),!t.isEqual(W.min()))try{const r=await Nl(n.localStore);t.compareTo(r)>=0&&await function(s,a){const l=s.q_.rt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.O_.get(d);f&&s.O_.set(d,f.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const f=s.O_.get(u);if(!f)return;s.O_.set(u,f.withResumeToken(Ee.EMPTY_BYTE_STRING,f.snapshotVersion)),zl(s,u);const y=new ft(f.target,u,d,f.sequenceNumber);Ts(s,y)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await ia(n,r)}}async function ia(n,e,t){if(!Yn(e))throw e;n.N_.add(1),await Jn(n),n.k_.set("Offline"),t||(t=()=>Nl(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await t(),n.N_.delete(1),await Xr(n)})}async function sa(n,e){const t=X(n);t.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=Zn(t);t.N_.add(3),await Jn(t),r&&t.k_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.N_.delete(3),await Xr(t)}async function _p(n,e){const t=X(n);e?(t.N_.delete(2),await Xr(t)):e||(t.N_.add(2),await Jn(t),t.k_.set("Unknown"))}function un(n){return n.Q_||(n.Q_=function(t,r,i){const s=X(t);return s.y_(),new up(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{To:pp.bind(null,n),Ao:mp.bind(null,n),Vo:gp.bind(null,n),E_:yp.bind(null,n)}),n.L_.push(async e=>{e?(n.Q_.i_(),Ss(n)?Es(n):n.k_.set("Unknown")):(await n.Q_.stop(),Gl(n))})),n.Q_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new _t,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new Is(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new j(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ql(n,e){if(st("AsyncQueue",`${e}: ${n}`),Yn(n))return new j(F.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e){this.comparator=e?(t,r)=>e(t,r)||H.comparator(t.key,r.key):(t,r)=>H.comparator(t.key,r.key),this.keyedMap=Ln(),this.sortedSet=new le(this.comparator)}static emptySet(e){return new Zt(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Zt)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Zt;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(){this.U_=new le(H.comparator)}track(e){const t=e.doc.key,r=this.U_.get(t);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(t,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(t):e.type===1&&r.type===2?this.U_=this.U_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):K():this.U_=this.U_.insert(t,e)}W_(){const e=[];return this.U_.inorderTraversal((t,r)=>{e.push(r)}),e}}class an{constructor(e,t,r,i,s,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new an(e,t,Zt.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$r(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vp{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class wp{constructor(){this.queries=aa(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(t,r){const i=X(t),s=i.queries;i.queries=aa(),s.forEach((a,l)=>{for(const u of l.z_)u.onError(r)})})(this,new j(F.ABORTED,"Firestore shutting down"))}}function aa(){return new cn(n=>_l(n),$r)}async function jl(n,e){const t=X(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.j_()&&e.H_()&&(r=2):(s=new vp,r=e.H_()?0:1);try{switch(r){case 0:s.G_=await t.onListen(i,!0);break;case 1:s.G_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=ql(a,`Initialization of query '${Qt(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.z_.push(e),e.Y_(t.onlineState),s.G_&&e.Z_(s.G_)&&As(t)}async function Hl(n,e){const t=X(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.z_.indexOf(e);a>=0&&(s.z_.splice(a,1),s.z_.length===0?i=e.H_()?0:1:!s.j_()&&e.H_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Tp(n,e){const t=X(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.z_)l.Z_(i)&&(r=!0);a.G_=i}}r&&As(t)}function Ep(n,e,t){const r=X(n),i=r.queries.get(e);if(i)for(const s of i.z_)s.onError(t);r.queries.delete(e)}function As(n){n.J_.forEach(e=>{e.next()})}var Ji,la;(la=Ji||(Ji={})).X_="default",la.Cache="cache";class $l{constructor(e,t,r){this.query=e,this.ea=t,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new an(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ta?this.ra(e)&&(this.ea.next(e),t=!0):this.ia(e,this.onlineState)&&(this.sa(e),t=!0),this.na=e,t}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let t=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),t=!0),t}ia(e,t){if(!e.fromCache||!this.H_())return!0;const r=t!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const t=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}sa(e){e=an.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==Ji.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){this.key=e}}class Kl{constructor(e){this.key=e}}class Sp{constructor(e,t){this.query=e,this.Ia=t,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=Z(),this.mutatedKeys=Z(),this.da=vl(e),this.Aa=new Zt(this.da)}get Ra(){return this.Ia}Va(e,t){const r=t?t.ma:new oa,i=t?t.Aa:this.Aa;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,y)=>{const w=i.get(f),I=Wr(this.query,y)?y:null,b=!!w&&this.mutatedKeys.has(w.key),R=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let C=!1;w&&I?w.data.isEqual(I.data)?b!==R&&(r.track({type:3,doc:I}),C=!0):this.fa(w,I)||(r.track({type:2,doc:I}),C=!0,(u&&this.da(I,u)>0||d&&this.da(I,d)<0)&&(l=!0)):!w&&I?(r.track({type:0,doc:I}),C=!0):w&&!I&&(r.track({type:1,doc:w}),C=!0,(u||d)&&(l=!0)),C&&(I?(a=a.add(I),s=R?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Aa:a,ma:r,ts:l,mutatedKeys:s}}fa(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const a=e.ma.W_();a.sort((f,y)=>function(I,b){const R=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return R(I)-R(b)}(f.type,y.type)||this.da(f.doc,y.doc)),this.ga(r),i=i!=null&&i;const l=t&&!i?this.pa():[],u=this.Ea.size===0&&this.current&&!i?1:0,d=u!==this.Ta;return this.Ta=u,a.length!==0||d?{snapshot:new an(this.query,e.Aa,s,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:l}:{ya:l}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new oa,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(t=>this.Ia=this.Ia.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ia=this.Ia.delete(t)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=Z(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const t=[];return e.forEach(r=>{this.Ea.has(r)||t.push(new Kl(r))}),this.Ea.forEach(r=>{e.has(r)||t.push(new Wl(r))}),t}Sa(e){this.Ia=e.Is,this.Ea=Z();const t=this.Va(e.documents);return this.applyChanges(t,!0)}ba(){return an.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class Ip{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Ap{constructor(e){this.key=e,this.Da=!1}}class bp{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.va=new cn(l=>_l(l),$r),this.Fa=new Map,this.Ma=new Set,this.xa=new le(H.comparator),this.Oa=new Map,this.Na=new ys,this.La={},this.Ba=new Map,this.ka=on.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function Pp(n,e,t=!0){const r=Zl(n);let i;const s=r.va.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ba()):i=await Ql(r,e,t,!0),i}async function Rp(n,e){const t=Zl(n);await Ql(t,e,!0,!1)}async function Ql(n,e,t,r){const i=await np(n.localStore,Qe(e)),s=i.targetId,a=t?n.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await Cp(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Ul(n.remoteStore,i),l}async function Cp(n,e,t,r,i){n.Qa=(y,w,I)=>async function(R,C,k,L){let V=C.view.Va(k);V.ts&&(V=await ta(R.localStore,C.query,!1).then(({documents:A})=>C.view.Va(A,V)));const O=L&&L.targetChanges.get(C.targetId),U=L&&L.targetMismatches.get(C.targetId)!=null,$=C.view.applyChanges(V,R.isPrimaryClient,O,U);return ua(R,C.targetId,$.ya),$.snapshot}(n,y,w,I);const s=await ta(n.localStore,e,!0),a=new Sp(e,s.Is),l=a.Va(s.documents),u=Xn.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,u);ua(n,t,d.ya);const f=new Ip(e,t,a);return n.va.set(e,f),n.Fa.has(t)?n.Fa.get(t).push(e):n.Fa.set(t,[e]),d.snapshot}async function xp(n,e,t){const r=X(n),i=r.va.get(e),s=r.Fa.get(i.targetId);if(s.length>1)return r.Fa.set(i.targetId,s.filter(a=>!$r(a,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Xi(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&ws(r.remoteStore,i.targetId),Zi(r,i.targetId)}).catch(os)):(Zi(r,i.targetId),await Xi(r.localStore,i.targetId,!0))}async function kp(n,e){const t=X(n),r=t.va.get(e),i=t.Fa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ws(t.remoteStore,r.targetId))}async function Yl(n,e){const t=X(n);try{const r=await ep(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Oa.get(s);a&&(he(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Da=!0:i.modifiedDocuments.size>0?he(a.Da):i.removedDocuments.size>0&&(he(a.Da),a.Da=!1))}),await Jl(t,r,e)}catch(r){await os(r)}}function ca(n,e,t){const r=X(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.va.forEach((s,a)=>{const l=a.view.Y_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=X(a);u.onlineState=l;let d=!1;u.queries.forEach((f,y)=>{for(const w of y.z_)w.Y_(l)&&(d=!0)}),d&&As(u)}(r.eventManager,e),i.length&&r.Ca.E_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Vp(n,e,t){const r=X(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Oa.get(e),s=i&&i.key;if(s){let a=new le(H.comparator);a=a.insert(s,Pe.newNoDocument(s,W.min()));const l=Z().add(s),u=new Yr(W.min(),new Map,new le(te),a,l);await Yl(r,u),r.xa=r.xa.remove(s),r.Oa.delete(e),bs(r)}else await Xi(r.localStore,e,!1).then(()=>Zi(r,e,t)).catch(os)}function Zi(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Fa.get(e))n.va.delete(r),t&&n.Ca.Ka(r,t);n.Fa.delete(e),n.isPrimaryClient&&n.Na.mr(e).forEach(r=>{n.Na.containsKey(r)||Xl(n,r)})}function Xl(n,e){n.Ma.delete(e.path.canonicalString());const t=n.xa.get(e);t!==null&&(ws(n.remoteStore,t),n.xa=n.xa.remove(e),n.Oa.delete(t),bs(n))}function ua(n,e,t){for(const r of t)r instanceof Wl?(n.Na.addReference(r.key,e),Dp(n,r)):r instanceof Kl?(G("SyncEngine","Document no longer in limbo: "+r.key),n.Na.removeReference(r.key,e),n.Na.containsKey(r.key)||Xl(n,r.key)):K()}function Dp(n,e){const t=e.key,r=t.path.canonicalString();n.xa.get(t)||n.Ma.has(r)||(G("SyncEngine","New document in limbo: "+t),n.Ma.add(r),bs(n))}function bs(n){for(;n.Ma.size>0&&n.xa.size<n.maxConcurrentLimboResolutions;){const e=n.Ma.values().next().value;n.Ma.delete(e);const t=new H(se.fromString(e)),r=n.ka.next();n.Oa.set(r,new Ap(t)),n.xa=n.xa.insert(t,r),Ul(n.remoteStore,new ft(Qe(fs(t.path)),r,"TargetPurposeLimboResolution",as.oe))}}async function Jl(n,e,t){const r=X(n),i=[],s=[],a=[];r.va.isEmpty()||(r.va.forEach((l,u)=>{a.push(r.Qa(u,e,t).then(d=>{var f;if((d||t)&&r.isPrimaryClient){const y=d?!d.fromCache:(f=t==null?void 0:t.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,y?"current":"not-current")}if(d){i.push(d);const y=vs.Ui(u.targetId,d);s.push(y)}}))}),await Promise.all(a),r.Ca.E_(i),await async function(u,d){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",y=>D.forEach(d,w=>D.forEach(w.Ki,I=>f.persistence.referenceDelegate.addReference(y,w.targetId,I)).next(()=>D.forEach(w.$i,I=>f.persistence.referenceDelegate.removeReference(y,w.targetId,I)))))}catch(y){if(!Yn(y))throw y;G("LocalStore","Failed to update sequence numbers: "+y)}for(const y of d){const w=y.targetId;if(!y.fromCache){const I=f.ss.get(w),b=I.snapshotVersion,R=I.withLastLimboFreeSnapshotVersion(b);f.ss=f.ss.insert(w,R)}}}(r.localStore,s))}async function Op(n,e){const t=X(n);if(!t.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await Ml(t.localStore,e);t.currentUser=e,function(s,a){s.Ba.forEach(l=>{l.forEach(u=>{u.reject(new j(F.CANCELLED,a))})}),s.Ba.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Jl(t,r.ls)}}function Lp(n,e){const t=X(n),r=t.Oa.get(e);if(r&&r.Da)return Z().add(r.key);{let i=Z();const s=t.Fa.get(e);if(!s)return i;for(const a of s){const l=t.va.get(a);i=i.unionWith(l.view.Ra)}return i}}function Zl(n){const e=X(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Lp.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Vp.bind(null,e),e.Ca.E_=Tp.bind(null,e.eventManager),e.Ca.Ka=Ep.bind(null,e.eventManager),e}class ha{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Fl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Zf(this.persistence,new Xf,e.initialUser,this.serializer)}createPersistence(e){return new Kf(_s.Yr,this.serializer)}createSharedClientState(e){return new ip}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Mp{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ca(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Op.bind(null,this.syncEngine),await _p(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new wp}()}createDatastore(e){const t=Fl(e.databaseInfo.databaseId),r=function(s){return new lp(s)}(e.databaseInfo);return function(s,a,l,u){return new hp(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,l){return new fp(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>ca(this.syncEngine,t,0),function(){return ra.D()?new ra:new sp}())}createSyncEngine(e,t){return function(i,s,a,l,u,d,f){const y=new bp(i,s,a,l,u,d);return f&&(y.qa=!0),y}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=X(i);G("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await Jn(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ec{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):st("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=be.UNAUTHENTICATED,this.clientId=ul.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{G("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(G("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new j(F.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _t;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ql(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ai(n,e){n.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Ml(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function da(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Bp(n);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>sa(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>sa(e.remoteStore,i)),n._onlineComponents=e}function Fp(n){return n.name==="FirebaseError"?n.code===F.FAILED_PRECONDITION||n.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Bp(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ai(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!Fp(t))throw t;tn("Error using user provided cache. Falling back to memory cache: "+t),await Ai(n,new ha)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await Ai(n,new ha);return n._offlineComponents}async function Up(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await da(n,n._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await da(n,new Mp))),n._onlineComponents}async function tc(n){const e=await Up(n),t=e.eventManager;return t.onListen=Pp.bind(null,e.syncEngine),t.onUnlisten=xp.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=Rp.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=kp.bind(null,e.syncEngine),t}function zp(n,e,t={}){const r=new _t;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,d){const f=new ec({next:w=>{a.enqueueAndForget(()=>Hl(s,y));const I=w.docs.has(l);!I&&w.fromCache?d.reject(new j(F.UNAVAILABLE,"Failed to get document because the client is offline.")):I&&w.fromCache&&u&&u.source==="server"?d.reject(new j(F.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(w)},error:w=>d.reject(w)}),y=new $l(fs(l.path),f,{includeMetadataChanges:!0,oa:!0});return jl(s,y)}(await tc(n),n.asyncQueue,e,t,r)),r.promise}function Gp(n,e,t={}){const r=new _t;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,d){const f=new ec({next:w=>{a.enqueueAndForget(()=>Hl(s,y)),w.fromCache&&u.source==="server"?d.reject(new j(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(w)},error:w=>d.reject(w)}),y=new $l(l,f,{includeMetadataChanges:!0,oa:!0});return jl(s,y)}(await tc(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function nc(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function rc(n,e,t){if(!t)throw new j(F.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function qp(n,e,t,r){if(e===!0&&r===!0)throw new j(F.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function pa(n){if(!H.isDocumentKey(n))throw new j(F.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ma(n){if(H.isDocumentKey(n))throw new j(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function jp(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K()}function Kn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new j(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=jp(n);throw new j(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new j(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new j(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}qp("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nc((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new j(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new j(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new j(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jr{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ga({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new j(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new j(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ga(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new _d;switch(r.type){case"firstParty":return new Ed(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new j(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=fa.get(t);r&&(G("ComponentProvider","Removing Datastore"),fa.delete(t),r.terminate())}(this),Promise.resolve()}}function Hp(n,e,t,r={}){var i;const s=(n=Kn(n,Jr))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&tn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=be.MOCK_USER;else{l=Oa(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new j(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new be(d)}n._authCredentials=new vd(new cl(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zr(this.firestore,e,this._query)}}class Ye{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new vt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ye(this.firestore,e,this._key)}}class vt extends Zr{constructor(e,t,r){super(e,t,fs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ye(this.firestore,null,new H(e))}withConverter(e){return new vt(this.firestore,e,this._path)}}function $p(n,e,...t){if(n=Qn(n),rc("collection","path",e),n instanceof Jr){const r=se.fromString(e,...t);return ma(r),new vt(n,null,r)}{if(!(n instanceof Ye||n instanceof vt))throw new j(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return ma(r),new vt(n.firestore,null,r)}}function Wp(n,e,...t){if(n=Qn(n),arguments.length===1&&(e=ul.newId()),rc("doc","path",e),n instanceof Jr){const r=se.fromString(e,...t);return pa(r),new Ye(n,null,new H(r))}{if(!(n instanceof Ye||n instanceof vt))throw new j(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(se.fromString(e,...t));return pa(r),new Ye(n.firestore,n instanceof vt?n.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new Bl(this,"async_queue_retry"),this.Tu=()=>{const t=Ii();t&&G("AsyncQueue","Visibility state changed to "+t.visibilityState),this.e_.zo()};const e=Ii();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const t=Ii();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const t=new _t;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!Yn(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const t=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw st("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=t,t}enqueueAfterDelay(e,t,r){this.Eu(),this.Iu.indexOf(e)>-1&&(t=0);const i=Is.createAndSchedule(this,e,t,r,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&K()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const t of this.cu)if(t.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.cu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const t=this.cu.indexOf(e);this.cu.splice(t,1)}}class Ps extends Jr{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new Kp}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sc(this),this._firestoreClient.terminate()}}function Qp(n,e){const t=typeof n=="object"?n:Ga(),r=typeof n=="string"?n:"(default)",i=Ba(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Va("firestore");s&&Hp(i,...s)}return i}function ic(n){return n._firestoreClient||sc(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function sc(n){var e,t,r;const i=n._freezeSettings(),s=function(l,u,d,f){return new Ld(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,nc(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Np(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Br(Ee.fromBase64String(e))}catch(t){throw new j(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Br(Ee.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new j(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new j(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new j(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}const Xp=new RegExp("[~\\*/\\[\\]]");function Jp(n,e,t){if(e.search(Xp)>=0)throw ya(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n);try{return new oc(...e.split("."))._internalPath}catch{throw ya(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n)}}function ya(n,e,t,r,i){let s=`Function ${e}() called with invalid data`;s+=". ";let a="";return new j(F.INVALID_ARGUMENT,s+n+a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ye(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Zp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(lc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Zp extends ac{data(){return super.data()}}function lc(n,e){return typeof e=="string"?Jp(n,e):e instanceof oc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function em(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new j(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tm{convertValue(e,t="none"){switch(Mt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Lt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw K()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return jr(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Yp(ue(e.latitude),ue(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=cs(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Hn(e));default:return null}}convertTimestamp(e){const t=Tt(e);return new Ve(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=se.fromString(e);he(Ll(r));const i=new $n(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(t)||st(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cc extends ac{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new kr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(lc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class kr extends cc{data(e={}){return super.data(e)}}class nm{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Nn(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new kr(this._firestore,this._userDataWriter,r.key,r,new Nn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new j(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new kr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Nn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new kr(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Nn(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:rm(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function rm(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(n){n=Kn(n,Ye);const e=Kn(n.firestore,Ps);return zp(ic(e),n._key).then(t=>om(e,n,t))}class uc extends tm{constructor(e){super(),this.firestore=e}convertBytes(e){return new Br(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ye(this.firestore,null,t)}}function sm(n){n=Kn(n,Zr);const e=Kn(n.firestore,Ps),t=ic(e),r=new uc(e);return em(n._query),Gp(t,n._query).then(i=>new nm(e,r,n,i))}function om(n,e,t){const r=t.docs.get(e._key),i=new uc(n);return new cc(n,i,e._key,r,new Nn(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){ln=i})(Ua),Gn(new en("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Ps(new wd(r.getProvider("auth-internal")),new Id(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new j(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new $n(d.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),yt(Lo,"4.6.5",e),yt(Lo,"4.6.5","esm2017")})();async function _a(n,e,t=null){const r=Qp(n);let i=t?void 0:[];if(t){const s=Wp(r,e,t),a=await im(s);a.exists()&&(i=a.data())}else(await sm($p(r,e))).forEach(a=>{i.push(a.data())});return i}function va(n){return n!==null&&typeof n=="object"&&"constructor"in n&&n.constructor===Object}function Rs(n,e){n===void 0&&(n={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{typeof n[t]>"u"?n[t]=e[t]:va(e[t])&&va(n[t])&&Object.keys(e[t]).length>0&&Rs(n[t],e[t])})}const hc={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function hn(){const n=typeof document<"u"?document:{};return Rs(n,hc),n}const am={document:hc,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(n){return typeof setTimeout>"u"?(n(),null):setTimeout(n,0)},cancelAnimationFrame(n){typeof setTimeout>"u"||clearTimeout(n)}};function Be(){const n=typeof window<"u"?window:{};return Rs(n,am),n}function lm(n){return n===void 0&&(n=""),n.trim().split(" ").filter(e=>!!e.trim())}function cm(n){const e=n;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function es(n,e){return e===void 0&&(e=0),setTimeout(n,e)}function Ur(){return Date.now()}function um(n){const e=Be();let t;return e.getComputedStyle&&(t=e.getComputedStyle(n,null)),!t&&n.currentStyle&&(t=n.currentStyle),t||(t=n.style),t}function hm(n,e){e===void 0&&(e="x");const t=Be();let r,i,s;const a=um(n);return t.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),s=new t.WebKitCSSMatrix(i==="none"?"":i)):(s=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?i=s.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),e==="y"&&(t.WebKitCSSMatrix?i=s.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function br(n){return typeof n=="object"&&n!==null&&n.constructor&&Object.prototype.toString.call(n).slice(8,-1)==="Object"}function dm(n){return typeof window<"u"&&typeof window.HTMLElement<"u"?n instanceof HTMLElement:n&&(n.nodeType===1||n.nodeType===11)}function Ne(){const n=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const r=t<0||arguments.length<=t?void 0:arguments[t];if(r!=null&&!dm(r)){const i=Object.keys(Object(r)).filter(s=>e.indexOf(s)<0);for(let s=0,a=i.length;s<a;s+=1){const l=i[s],u=Object.getOwnPropertyDescriptor(r,l);u!==void 0&&u.enumerable&&(br(n[l])&&br(r[l])?r[l].__swiper__?n[l]=r[l]:Ne(n[l],r[l]):!br(n[l])&&br(r[l])?(n[l]={},r[l].__swiper__?n[l]=r[l]:Ne(n[l],r[l])):n[l]=r[l])}}}return n}function Pr(n,e,t){n.style.setProperty(e,t)}function dc(n){let{swiper:e,targetPosition:t,side:r}=n;const i=Be(),s=-e.translate;let a=null,l;const u=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const d=t>s?"next":"prev",f=(w,I)=>d==="next"&&w>=I||d==="prev"&&w<=I,y=()=>{l=new Date().getTime(),a===null&&(a=l);const w=Math.max(Math.min((l-a)/u,1),0),I=.5-Math.cos(w*Math.PI)/2;let b=s+I*(t-s);if(f(b,t)&&(b=t),e.wrapperEl.scrollTo({[r]:b}),f(b,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:b})}),i.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=i.requestAnimationFrame(y)};y()}function Ke(n,e){e===void 0&&(e="");const t=[...n.children];return n instanceof HTMLSlotElement&&t.push(...n.assignedElements()),e?t.filter(r=>r.matches(e)):t}function fm(n,e){const t=e.contains(n);return!t&&e instanceof HTMLSlotElement?[...e.assignedElements()].includes(n):t}function zr(n){try{console.warn(n);return}catch{}}function Gr(n,e){e===void 0&&(e=[]);const t=document.createElement(n);return t.classList.add(...Array.isArray(e)?e:lm(e)),t}function pm(n,e){const t=[];for(;n.previousElementSibling;){const r=n.previousElementSibling;e?r.matches(e)&&t.push(r):t.push(r),n=r}return t}function mm(n,e){const t=[];for(;n.nextElementSibling;){const r=n.nextElementSibling;e?r.matches(e)&&t.push(r):t.push(r),n=r}return t}function pt(n,e){return Be().getComputedStyle(n,null).getPropertyValue(e)}function wa(n){let e=n,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function gm(n,e){const t=[];let r=n.parentElement;for(;r;)t.push(r),r=r.parentElement;return t}function Ta(n,e,t){const r=Be();return n[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function it(n){return(Array.isArray(n)?n:[n]).filter(e=>!!e)}let bi;function ym(){const n=Be(),e=hn();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in n||n.DocumentTouch&&e instanceof n.DocumentTouch)}}function fc(){return bi||(bi=ym()),bi}let Pi;function _m(n){let{userAgent:e}=n===void 0?{}:n;const t=fc(),r=Be(),i=r.navigator.platform,s=e||r.navigator.userAgent,a={ios:!1,android:!1},l=r.screen.width,u=r.screen.height,d=s.match(/(Android);?[\s\/]+([\d.]+)?/);let f=s.match(/(iPad).*OS\s([\d_]+)/);const y=s.match(/(iPod)(.*OS\s([\d_]+))?/),w=!f&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),I=i==="Win32";let b=i==="MacIntel";const R=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!f&&b&&t.touch&&R.indexOf(`${l}x${u}`)>=0&&(f=s.match(/(Version)\/([\d.]+)/),f||(f=[0,1,"13_0_0"]),b=!1),d&&!I&&(a.os="android",a.android=!0),(f||w||y)&&(a.os="ios",a.ios=!0),a}function pc(n){return n===void 0&&(n={}),Pi||(Pi=_m(n)),Pi}let Ri;function vm(){const n=Be(),e=pc();let t=!1;function r(){const l=n.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(n.navigator.userAgent);if(l.includes("Version/")){const[u,d]=l.split("Version/")[1].split(" ")[0].split(".").map(f=>Number(f));t=u<16||u===16&&d<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent),s=r(),a=s||i&&e.ios;return{isSafari:t||s,needPerspectiveFix:t,need3dFix:a,isWebView:i}}function wm(){return Ri||(Ri=vm()),Ri}function Tm(n){let{swiper:e,on:t,emit:r}=n;const i=Be();let s=null,a=null;const l=()=>{!e||e.destroyed||!e.initialized||(r("beforeResize"),r("resize"))},u=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(y=>{a=i.requestAnimationFrame(()=>{const{width:w,height:I}=e;let b=w,R=I;y.forEach(C=>{let{contentBoxSize:k,contentRect:L,target:V}=C;V&&V!==e.el||(b=L?L.width:(k[0]||k).inlineSize,R=L?L.height:(k[0]||k).blockSize)}),(b!==w||R!==I)&&l()})}),s.observe(e.el))},d=()=>{a&&i.cancelAnimationFrame(a),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},f=()=>{!e||e.destroyed||!e.initialized||r("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof i.ResizeObserver<"u"){u();return}i.addEventListener("resize",l),i.addEventListener("orientationchange",f)}),t("destroy",()=>{d(),i.removeEventListener("resize",l),i.removeEventListener("orientationchange",f)})}function Em(n){let{swiper:e,extendParams:t,on:r,emit:i}=n;const s=[],a=Be(),l=function(f,y){y===void 0&&(y={});const w=a.MutationObserver||a.WebkitMutationObserver,I=new w(b=>{if(e.__preventObserver__)return;if(b.length===1){i("observerUpdate",b[0]);return}const R=function(){i("observerUpdate",b[0])};a.requestAnimationFrame?a.requestAnimationFrame(R):a.setTimeout(R,0)});I.observe(f,{attributes:typeof y.attributes>"u"?!0:y.attributes,childList:e.isElement||(typeof y.childList>"u"?!0:y).childList,characterData:typeof y.characterData>"u"?!0:y.characterData}),s.push(I)},u=()=>{if(e.params.observer){if(e.params.observeParents){const f=gm(e.hostEl);for(let y=0;y<f.length;y+=1)l(f[y])}l(e.hostEl,{childList:e.params.observeSlideChildren}),l(e.wrapperEl,{attributes:!1})}},d=()=>{s.forEach(f=>{f.disconnect()}),s.splice(0,s.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",u),r("destroy",d)}var Sm={on(n,e,t){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const i=t?"unshift":"push";return n.split(" ").forEach(s=>{r.eventsListeners[s]||(r.eventsListeners[s]=[]),r.eventsListeners[s][i](e)}),r},once(n,e,t){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;function i(){r.off(n,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];e.apply(r,a)}return i.__emitterProxy=e,r.on(n,i,t)},onAny(n,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof n!="function")return t;const r=e?"unshift":"push";return t.eventsAnyListeners.indexOf(n)<0&&t.eventsAnyListeners[r](n),t},offAny(n){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(n);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(n,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||n.split(" ").forEach(r=>{typeof e>"u"?t.eventsListeners[r]=[]:t.eventsListeners[r]&&t.eventsListeners[r].forEach((i,s)=>{(i===e||i.__emitterProxy&&i.__emitterProxy===e)&&t.eventsListeners[r].splice(s,1)})}),t},emit(){const n=this;if(!n.eventsListeners||n.destroyed||!n.eventsListeners)return n;let e,t,r;for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return typeof s[0]=="string"||Array.isArray(s[0])?(e=s[0],t=s.slice(1,s.length),r=n):(e=s[0].events,t=s[0].data,r=s[0].context||n),t.unshift(r),(Array.isArray(e)?e:e.split(" ")).forEach(u=>{n.eventsAnyListeners&&n.eventsAnyListeners.length&&n.eventsAnyListeners.forEach(d=>{d.apply(r,[u,...t])}),n.eventsListeners&&n.eventsListeners[u]&&n.eventsListeners[u].forEach(d=>{d.apply(r,t)})}),n}};function Im(){const n=this;let e,t;const r=n.el;typeof n.params.width<"u"&&n.params.width!==null?e=n.params.width:e=r.clientWidth,typeof n.params.height<"u"&&n.params.height!==null?t=n.params.height:t=r.clientHeight,!(e===0&&n.isHorizontal()||t===0&&n.isVertical())&&(e=e-parseInt(pt(r,"padding-left")||0,10)-parseInt(pt(r,"padding-right")||0,10),t=t-parseInt(pt(r,"padding-top")||0,10)-parseInt(pt(r,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(n,{width:e,height:t,size:n.isHorizontal()?e:t}))}function Am(){const n=this;function e(v,E){return parseFloat(v.getPropertyValue(n.getDirectionLabel(E))||0)}const t=n.params,{wrapperEl:r,slidesEl:i,size:s,rtlTranslate:a,wrongRTL:l}=n,u=n.virtual&&t.virtual.enabled,d=u?n.virtual.slides.length:n.slides.length,f=Ke(i,`.${n.params.slideClass}, swiper-slide`),y=u?n.virtual.slides.length:f.length;let w=[];const I=[],b=[];let R=t.slidesOffsetBefore;typeof R=="function"&&(R=t.slidesOffsetBefore.call(n));let C=t.slidesOffsetAfter;typeof C=="function"&&(C=t.slidesOffsetAfter.call(n));const k=n.snapGrid.length,L=n.slidesGrid.length;let V=t.spaceBetween,O=-R,U=0,$=0;if(typeof s>"u")return;typeof V=="string"&&V.indexOf("%")>=0?V=parseFloat(V.replace("%",""))/100*s:typeof V=="string"&&(V=parseFloat(V)),n.virtualSize=-V,f.forEach(v=>{a?v.style.marginLeft="":v.style.marginRight="",v.style.marginBottom="",v.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(Pr(r,"--swiper-centered-offset-before",""),Pr(r,"--swiper-centered-offset-after",""));const A=t.grid&&t.grid.rows>1&&n.grid;A?n.grid.initSlides(f):n.grid&&n.grid.unsetSlides();let _;const m=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(v=>typeof t.breakpoints[v].slidesPerView<"u").length>0;for(let v=0;v<y;v+=1){_=0;let E;if(f[v]&&(E=f[v]),A&&n.grid.updateSlide(v,E,f),!(f[v]&&pt(E,"display")==="none")){if(t.slidesPerView==="auto"){m&&(f[v].style[n.getDirectionLabel("width")]="");const S=getComputedStyle(E),g=E.style.transform,Q=E.style.webkitTransform;if(g&&(E.style.transform="none"),Q&&(E.style.webkitTransform="none"),t.roundLengths)_=n.isHorizontal()?Ta(E,"width"):Ta(E,"height");else{const re=e(S,"width"),ke=e(S,"padding-left"),Ge=e(S,"padding-right"),De=e(S,"margin-left"),je=e(S,"margin-right"),ot=S.getPropertyValue("box-sizing");if(ot&&ot==="border-box")_=re+De+je;else{const{clientWidth:Ft,offsetWidth:Oe}=E;_=re+ke+Ge+De+je+(Oe-Ft)}}g&&(E.style.transform=g),Q&&(E.style.webkitTransform=Q),t.roundLengths&&(_=Math.floor(_))}else _=(s-(t.slidesPerView-1)*V)/t.slidesPerView,t.roundLengths&&(_=Math.floor(_)),f[v]&&(f[v].style[n.getDirectionLabel("width")]=`${_}px`);f[v]&&(f[v].swiperSlideSize=_),b.push(_),t.centeredSlides?(O=O+_/2+U/2+V,U===0&&v!==0&&(O=O-s/2-V),v===0&&(O=O-s/2-V),Math.abs(O)<1/1e3&&(O=0),t.roundLengths&&(O=Math.floor(O)),$%t.slidesPerGroup===0&&w.push(O),I.push(O)):(t.roundLengths&&(O=Math.floor(O)),($-Math.min(n.params.slidesPerGroupSkip,$))%n.params.slidesPerGroup===0&&w.push(O),I.push(O),O=O+_+V),n.virtualSize+=_+V,U=_,$+=1}}if(n.virtualSize=Math.max(n.virtualSize,s)+C,a&&l&&(t.effect==="slide"||t.effect==="coverflow")&&(r.style.width=`${n.virtualSize+V}px`),t.setWrapperSize&&(r.style[n.getDirectionLabel("width")]=`${n.virtualSize+V}px`),A&&n.grid.updateWrapperSize(_,w),!t.centeredSlides){const v=[];for(let E=0;E<w.length;E+=1){let S=w[E];t.roundLengths&&(S=Math.floor(S)),w[E]<=n.virtualSize-s&&v.push(S)}w=v,Math.floor(n.virtualSize-s)-Math.floor(w[w.length-1])>1&&w.push(n.virtualSize-s)}if(u&&t.loop){const v=b[0]+V;if(t.slidesPerGroup>1){const E=Math.ceil((n.virtual.slidesBefore+n.virtual.slidesAfter)/t.slidesPerGroup),S=v*t.slidesPerGroup;for(let g=0;g<E;g+=1)w.push(w[w.length-1]+S)}for(let E=0;E<n.virtual.slidesBefore+n.virtual.slidesAfter;E+=1)t.slidesPerGroup===1&&w.push(w[w.length-1]+v),I.push(I[I.length-1]+v),n.virtualSize+=v}if(w.length===0&&(w=[0]),V!==0){const v=n.isHorizontal()&&a?"marginLeft":n.getDirectionLabel("marginRight");f.filter((E,S)=>!t.cssMode||t.loop?!0:S!==f.length-1).forEach(E=>{E.style[v]=`${V}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let v=0;b.forEach(S=>{v+=S+(V||0)}),v-=V;const E=v-s;w=w.map(S=>S<=0?-R:S>E?E+C:S)}if(t.centerInsufficientSlides){let v=0;b.forEach(S=>{v+=S+(V||0)}),v-=V;const E=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(v+E<s){const S=(s-v-E)/2;w.forEach((g,Q)=>{w[Q]=g-S}),I.forEach((g,Q)=>{I[Q]=g+S})}}if(Object.assign(n,{slides:f,snapGrid:w,slidesGrid:I,slidesSizesGrid:b}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){Pr(r,"--swiper-centered-offset-before",`${-w[0]}px`),Pr(r,"--swiper-centered-offset-after",`${n.size/2-b[b.length-1]/2}px`);const v=-n.snapGrid[0],E=-n.slidesGrid[0];n.snapGrid=n.snapGrid.map(S=>S+v),n.slidesGrid=n.slidesGrid.map(S=>S+E)}if(y!==d&&n.emit("slidesLengthChange"),w.length!==k&&(n.params.watchOverflow&&n.checkOverflow(),n.emit("snapGridLengthChange")),I.length!==L&&n.emit("slidesGridLengthChange"),t.watchSlidesProgress&&n.updateSlidesOffset(),n.emit("slidesUpdated"),!u&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const v=`${t.containerModifierClass}backface-hidden`,E=n.el.classList.contains(v);y<=t.maxBackfaceHiddenSlides?E||n.el.classList.add(v):E&&n.el.classList.remove(v)}}function bm(n){const e=this,t=[],r=e.virtual&&e.params.virtual.enabled;let i=0,s;typeof n=="number"?e.setTransition(n):n===!0&&e.setTransition(e.params.speed);const a=l=>r?e.slides[e.getSlideIndexByData(l)]:e.slides[l];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(l=>{t.push(l)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const l=e.activeIndex+s;if(l>e.slides.length&&!r)break;t.push(a(l))}else t.push(a(e.activeIndex));for(s=0;s<t.length;s+=1)if(typeof t[s]<"u"){const l=t[s].offsetHeight;i=l>i?l:i}(i||i===0)&&(e.wrapperEl.style.height=`${i}px`)}function Pm(){const n=this,e=n.slides,t=n.isElement?n.isHorizontal()?n.wrapperEl.offsetLeft:n.wrapperEl.offsetTop:0;for(let r=0;r<e.length;r+=1)e[r].swiperSlideOffset=(n.isHorizontal()?e[r].offsetLeft:e[r].offsetTop)-t-n.cssOverflowAdjustment()}const Ea=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function Rm(n){n===void 0&&(n=this&&this.translate||0);const e=this,t=e.params,{slides:r,rtlTranslate:i,snapGrid:s}=e;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let a=-n;i&&(a=n),e.visibleSlidesIndexes=[],e.visibleSlides=[];let l=t.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*e.size:typeof l=="string"&&(l=parseFloat(l));for(let u=0;u<r.length;u+=1){const d=r[u];let f=d.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(f-=r[0].swiperSlideOffset);const y=(a+(t.centeredSlides?e.minTranslate():0)-f)/(d.swiperSlideSize+l),w=(a-s[0]+(t.centeredSlides?e.minTranslate():0)-f)/(d.swiperSlideSize+l),I=-(a-f),b=I+e.slidesSizesGrid[u],R=I>=0&&I<=e.size-e.slidesSizesGrid[u],C=I>=0&&I<e.size-1||b>1&&b<=e.size||I<=0&&b>=e.size;C&&(e.visibleSlides.push(d),e.visibleSlidesIndexes.push(u)),Ea(d,C,t.slideVisibleClass),Ea(d,R,t.slideFullyVisibleClass),d.progress=i?-y:y,d.originalProgress=i?-w:w}}function Cm(n){const e=this;if(typeof n>"u"){const f=e.rtlTranslate?-1:1;n=e&&e.translate&&e.translate*f||0}const t=e.params,r=e.maxTranslate()-e.minTranslate();let{progress:i,isBeginning:s,isEnd:a,progressLoop:l}=e;const u=s,d=a;if(r===0)i=0,s=!0,a=!0;else{i=(n-e.minTranslate())/r;const f=Math.abs(n-e.minTranslate())<1,y=Math.abs(n-e.maxTranslate())<1;s=f||i<=0,a=y||i>=1,f&&(i=0),y&&(i=1)}if(t.loop){const f=e.getSlideIndexByData(0),y=e.getSlideIndexByData(e.slides.length-1),w=e.slidesGrid[f],I=e.slidesGrid[y],b=e.slidesGrid[e.slidesGrid.length-1],R=Math.abs(n);R>=w?l=(R-w)/b:l=(R+b-I)/b,l>1&&(l-=1)}Object.assign(e,{progress:i,progressLoop:l,isBeginning:s,isEnd:a}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(n),s&&!u&&e.emit("reachBeginning toEdge"),a&&!d&&e.emit("reachEnd toEdge"),(u&&!s||d&&!a)&&e.emit("fromEdge"),e.emit("progress",i)}const Ci=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function xm(){const n=this,{slides:e,params:t,slidesEl:r,activeIndex:i}=n,s=n.virtual&&t.virtual.enabled,a=n.grid&&t.grid&&t.grid.rows>1,l=y=>Ke(r,`.${t.slideClass}${y}, swiper-slide${y}`)[0];let u,d,f;if(s)if(t.loop){let y=i-n.virtual.slidesBefore;y<0&&(y=n.virtual.slides.length+y),y>=n.virtual.slides.length&&(y-=n.virtual.slides.length),u=l(`[data-swiper-slide-index="${y}"]`)}else u=l(`[data-swiper-slide-index="${i}"]`);else a?(u=e.filter(y=>y.column===i)[0],f=e.filter(y=>y.column===i+1)[0],d=e.filter(y=>y.column===i-1)[0]):u=e[i];u&&(a||(f=mm(u,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!f&&(f=e[0]),d=pm(u,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!d===0&&(d=e[e.length-1]))),e.forEach(y=>{Ci(y,y===u,t.slideActiveClass),Ci(y,y===f,t.slideNextClass),Ci(y,y===d,t.slidePrevClass)}),n.emitSlidesClasses()}const Vr=(n,e)=>{if(!n||n.destroyed||!n.params)return;const t=()=>n.isElement?"swiper-slide":`.${n.params.slideClass}`,r=e.closest(t());if(r){let i=r.querySelector(`.${n.params.lazyPreloaderClass}`);!i&&n.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},xi=(n,e)=>{if(!n.slides[e])return;const t=n.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},ts=n=>{if(!n||n.destroyed||!n.params)return;let e=n.params.lazyPreloadPrevNext;const t=n.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const r=n.params.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(n.params.slidesPerView),i=n.activeIndex;if(n.params.grid&&n.params.grid.rows>1){const a=i,l=[a-e];l.push(...Array.from({length:e}).map((u,d)=>a+r+d)),n.slides.forEach((u,d)=>{l.includes(u.column)&&xi(n,d)});return}const s=i+r-1;if(n.params.rewind||n.params.loop)for(let a=i-e;a<=s+e;a+=1){const l=(a%t+t)%t;(l<i||l>s)&&xi(n,l)}else for(let a=Math.max(i-e,0);a<=Math.min(s+e,t-1);a+=1)a!==i&&(a>s||a<i)&&xi(n,a)};function km(n){const{slidesGrid:e,params:t}=n,r=n.rtlTranslate?n.translate:-n.translate;let i;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?r>=e[s]&&r<e[s+1]-(e[s+1]-e[s])/2?i=s:r>=e[s]&&r<e[s+1]&&(i=s+1):r>=e[s]&&(i=s);return t.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function Vm(n){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:r,params:i,activeIndex:s,realIndex:a,snapIndex:l}=e;let u=n,d;const f=I=>{let b=I-e.virtual.slidesBefore;return b<0&&(b=e.virtual.slides.length+b),b>=e.virtual.slides.length&&(b-=e.virtual.slides.length),b};if(typeof u>"u"&&(u=km(e)),r.indexOf(t)>=0)d=r.indexOf(t);else{const I=Math.min(i.slidesPerGroupSkip,u);d=I+Math.floor((u-I)/i.slidesPerGroup)}if(d>=r.length&&(d=r.length-1),u===s&&!e.params.loop){d!==l&&(e.snapIndex=d,e.emit("snapIndexChange"));return}if(u===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=f(u);return}const y=e.grid&&i.grid&&i.grid.rows>1;let w;if(e.virtual&&i.virtual.enabled&&i.loop)w=f(u);else if(y){const I=e.slides.filter(R=>R.column===u)[0];let b=parseInt(I.getAttribute("data-swiper-slide-index"),10);Number.isNaN(b)&&(b=Math.max(e.slides.indexOf(I),0)),w=Math.floor(b/i.grid.rows)}else if(e.slides[u]){const I=e.slides[u].getAttribute("data-swiper-slide-index");I?w=parseInt(I,10):w=u}else w=u;Object.assign(e,{previousSnapIndex:l,snapIndex:d,previousRealIndex:a,realIndex:w,previousIndex:s,activeIndex:u}),e.initialized&&ts(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(a!==w&&e.emit("realIndexChange"),e.emit("slideChange"))}function Dm(n,e){const t=this,r=t.params;let i=n.closest(`.${r.slideClass}, swiper-slide`);!i&&t.isElement&&e&&e.length>1&&e.includes(n)&&[...e.slice(e.indexOf(n)+1,e.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let s=!1,a;if(i){for(let l=0;l<t.slides.length;l+=1)if(t.slides[l]===i){s=!0,a=l;break}}if(i&&s)t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=a;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}r.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Om={updateSize:Im,updateSlides:Am,updateAutoHeight:bm,updateSlidesOffset:Pm,updateSlidesProgress:Rm,updateProgress:Cm,updateSlidesClasses:xm,updateActiveIndex:Vm,updateClickedSlide:Dm};function Lm(n){n===void 0&&(n=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:r,translate:i,wrapperEl:s}=e;if(t.virtualTranslate)return r?-i:i;if(t.cssMode)return i;let a=hm(s,n);return a+=e.cssOverflowAdjustment(),r&&(a=-a),a||0}function Mm(n,e){const t=this,{rtlTranslate:r,params:i,wrapperEl:s,progress:a}=t;let l=0,u=0;const d=0;t.isHorizontal()?l=r?-n:n:u=n,i.roundLengths&&(l=Math.floor(l),u=Math.floor(u)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?l:u,i.cssMode?s[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-l:-u:i.virtualTranslate||(t.isHorizontal()?l-=t.cssOverflowAdjustment():u-=t.cssOverflowAdjustment(),s.style.transform=`translate3d(${l}px, ${u}px, ${d}px)`);let f;const y=t.maxTranslate()-t.minTranslate();y===0?f=0:f=(n-t.minTranslate())/y,f!==a&&t.updateProgress(n),t.emit("setTranslate",t.translate,e)}function Nm(){return-this.snapGrid[0]}function Fm(){return-this.snapGrid[this.snapGrid.length-1]}function Bm(n,e,t,r,i){n===void 0&&(n=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),r===void 0&&(r=!0);const s=this,{params:a,wrapperEl:l}=s;if(s.animating&&a.preventInteractionOnTransition)return!1;const u=s.minTranslate(),d=s.maxTranslate();let f;if(r&&n>u?f=u:r&&n<d?f=d:f=n,s.updateProgress(f),a.cssMode){const y=s.isHorizontal();if(e===0)l[y?"scrollLeft":"scrollTop"]=-f;else{if(!s.support.smoothScroll)return dc({swiper:s,targetPosition:-f,side:y?"left":"top"}),!0;l.scrollTo({[y?"left":"top"]:-f,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(f),t&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(f),t&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(w){!s||s.destroyed||w.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,t&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var Um={getTranslate:Lm,setTranslate:Mm,minTranslate:Nm,maxTranslate:Fm,translateTo:Bm};function zm(n,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${n}ms`,t.wrapperEl.style.transitionDelay=n===0?"0ms":""),t.emit("setTransition",n,e)}function mc(n){let{swiper:e,runCallbacks:t,direction:r,step:i}=n;const{activeIndex:s,previousIndex:a}=e;let l=r;if(l||(s>a?l="next":s<a?l="prev":l="reset"),e.emit(`transition${i}`),t&&s!==a){if(l==="reset"){e.emit(`slideResetTransition${i}`);return}e.emit(`slideChangeTransition${i}`),l==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}function Gm(n,e){n===void 0&&(n=!0);const t=this,{params:r}=t;r.cssMode||(r.autoHeight&&t.updateAutoHeight(),mc({swiper:t,runCallbacks:n,direction:e,step:"Start"}))}function qm(n,e){n===void 0&&(n=!0);const t=this,{params:r}=t;t.animating=!1,!r.cssMode&&(t.setTransition(0),mc({swiper:t,runCallbacks:n,direction:e,step:"End"}))}var jm={setTransition:zm,transitionStart:Gm,transitionEnd:qm};function Hm(n,e,t,r,i){n===void 0&&(n=0),t===void 0&&(t=!0),typeof n=="string"&&(n=parseInt(n,10));const s=this;let a=n;a<0&&(a=0);const{params:l,snapGrid:u,slidesGrid:d,previousIndex:f,activeIndex:y,rtlTranslate:w,wrapperEl:I,enabled:b}=s;if(!b&&!r&&!i||s.destroyed||s.animating&&l.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=s.params.speed);const R=Math.min(s.params.slidesPerGroupSkip,a);let C=R+Math.floor((a-R)/s.params.slidesPerGroup);C>=u.length&&(C=u.length-1);const k=-u[C];if(l.normalizeSlideIndex)for(let V=0;V<d.length;V+=1){const O=-Math.floor(k*100),U=Math.floor(d[V]*100),$=Math.floor(d[V+1]*100);typeof d[V+1]<"u"?O>=U&&O<$-($-U)/2?a=V:O>=U&&O<$&&(a=V+1):O>=U&&(a=V)}if(s.initialized&&a!==y&&(!s.allowSlideNext&&(w?k>s.translate&&k>s.minTranslate():k<s.translate&&k<s.minTranslate())||!s.allowSlidePrev&&k>s.translate&&k>s.maxTranslate()&&(y||0)!==a))return!1;a!==(f||0)&&t&&s.emit("beforeSlideChangeStart"),s.updateProgress(k);let L;if(a>y?L="next":a<y?L="prev":L="reset",w&&-k===s.translate||!w&&k===s.translate)return s.updateActiveIndex(a),l.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),l.effect!=="slide"&&s.setTranslate(k),L!=="reset"&&(s.transitionStart(t,L),s.transitionEnd(t,L)),!1;if(l.cssMode){const V=s.isHorizontal(),O=w?k:-k;if(e===0){const U=s.virtual&&s.params.virtual.enabled;U&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),U&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{I[V?"scrollLeft":"scrollTop"]=O})):I[V?"scrollLeft":"scrollTop"]=O,U&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return dc({swiper:s,targetPosition:O,side:V?"left":"top"}),!0;I.scrollTo({[V?"left":"top"]:O,behavior:"smooth"})}return!0}return s.setTransition(e),s.setTranslate(k),s.updateActiveIndex(a),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,r),s.transitionStart(t,L),e===0?s.transitionEnd(t,L):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(O){!s||s.destroyed||O.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(t,L))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function $m(n,e,t,r){n===void 0&&(n=0),t===void 0&&(t=!0),typeof n=="string"&&(n=parseInt(n,10));const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);const s=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=n;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(s){const w=a*i.params.grid.rows;l=i.slides.filter(I=>I.getAttribute("data-swiper-slide-index")*1===w)[0].column}else l=i.getSlideIndexByData(a);const u=s?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:d}=i.params;let f=i.params.slidesPerView;f==="auto"?f=i.slidesPerViewDynamic():(f=Math.ceil(parseFloat(i.params.slidesPerView,10)),d&&f%2===0&&(f=f+1));let y=u-l<f;if(d&&(y=y||l<Math.ceil(f/2)),r&&d&&i.params.slidesPerView!=="auto"&&!s&&(y=!1),y){const w=d?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:w,slideTo:!0,activeSlideIndex:w==="next"?l+1:l-u+1,slideRealIndex:w==="next"?i.realIndex:void 0})}if(s){const w=a*i.params.grid.rows;a=i.slides.filter(I=>I.getAttribute("data-swiper-slide-index")*1===w)[0].column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,e,t,r)}),i}function Wm(n,e,t){e===void 0&&(e=!0);const r=this,{enabled:i,params:s,animating:a}=r;if(!i||r.destroyed)return r;typeof n>"u"&&(n=r.params.speed);let l=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const u=r.activeIndex<s.slidesPerGroupSkip?1:l,d=r.virtual&&s.virtual.enabled;if(s.loop){if(a&&!d&&s.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+u,n,e,t)}),!0}return s.rewind&&r.isEnd?r.slideTo(0,n,e,t):r.slideTo(r.activeIndex+u,n,e,t)}function Km(n,e,t){e===void 0&&(e=!0);const r=this,{params:i,snapGrid:s,slidesGrid:a,rtlTranslate:l,enabled:u,animating:d}=r;if(!u||r.destroyed)return r;typeof n>"u"&&(n=r.params.speed);const f=r.virtual&&i.virtual.enabled;if(i.loop){if(d&&!f&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const y=l?r.translate:-r.translate;function w(k){return k<0?-Math.floor(Math.abs(k)):Math.floor(k)}const I=w(y),b=s.map(k=>w(k));let R=s[b.indexOf(I)-1];if(typeof R>"u"&&i.cssMode){let k;s.forEach((L,V)=>{I>=L&&(k=V)}),typeof k<"u"&&(R=s[k>0?k-1:k])}let C=0;if(typeof R<"u"&&(C=a.indexOf(R),C<0&&(C=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(C=C-r.slidesPerViewDynamic("previous",!0)+1,C=Math.max(C,0))),i.rewind&&r.isBeginning){const k=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(k,n,e,t)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(C,n,e,t)}),!0;return r.slideTo(C,n,e,t)}function Qm(n,e,t){e===void 0&&(e=!0);const r=this;if(!r.destroyed)return typeof n>"u"&&(n=r.params.speed),r.slideTo(r.activeIndex,n,e,t)}function Ym(n,e,t,r){e===void 0&&(e=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof n>"u"&&(n=i.params.speed);let s=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,s),l=a+Math.floor((s-a)/i.params.slidesPerGroup),u=i.rtlTranslate?i.translate:-i.translate;if(u>=i.snapGrid[l]){const d=i.snapGrid[l],f=i.snapGrid[l+1];u-d>(f-d)*r&&(s+=i.params.slidesPerGroup)}else{const d=i.snapGrid[l-1],f=i.snapGrid[l];u-d<=(f-d)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,n,e,t)}function Xm(){const n=this;if(n.destroyed)return;const{params:e,slidesEl:t}=n,r=e.slidesPerView==="auto"?n.slidesPerViewDynamic():e.slidesPerView;let i=n.clickedIndex,s;const a=n.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(n.animating)return;s=parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?i<n.loopedSlides-r/2||i>n.slides.length-n.loopedSlides+r/2?(n.loopFix(),i=n.getSlideIndex(Ke(t,`${a}[data-swiper-slide-index="${s}"]`)[0]),es(()=>{n.slideTo(i)})):n.slideTo(i):i>n.slides.length-r?(n.loopFix(),i=n.getSlideIndex(Ke(t,`${a}[data-swiper-slide-index="${s}"]`)[0]),es(()=>{n.slideTo(i)})):n.slideTo(i)}else n.slideTo(i)}var Jm={slideTo:Hm,slideToLoop:$m,slideNext:Wm,slidePrev:Km,slideReset:Qm,slideToClosest:Ym,slideToClickedSlide:Xm};function Zm(n){const e=this,{params:t,slidesEl:r}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;const i=()=>{Ke(r,`.${t.slideClass}, swiper-slide`).forEach((y,w)=>{y.setAttribute("data-swiper-slide-index",w)})},s=e.grid&&t.grid&&t.grid.rows>1,a=t.slidesPerGroup*(s?t.grid.rows:1),l=e.slides.length%a!==0,u=s&&e.slides.length%t.grid.rows!==0,d=f=>{for(let y=0;y<f;y+=1){const w=e.isElement?Gr("swiper-slide",[t.slideBlankClass]):Gr("div",[t.slideClass,t.slideBlankClass]);e.slidesEl.append(w)}};if(l){if(t.loopAddBlankSlides){const f=a-e.slides.length%a;d(f),e.recalcSlides(),e.updateSlides()}else zr("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(u){if(t.loopAddBlankSlides){const f=t.grid.rows-e.slides.length%t.grid.rows;d(f),e.recalcSlides(),e.updateSlides()}else zr("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();e.loopFix({slideRealIndex:n,direction:t.centeredSlides?void 0:"next"})}function eg(n){let{slideRealIndex:e,slideTo:t=!0,direction:r,setTranslate:i,activeSlideIndex:s,byController:a,byMousewheel:l}=n===void 0?{}:n;const u=this;if(!u.params.loop)return;u.emit("beforeLoopFix");const{slides:d,allowSlidePrev:f,allowSlideNext:y,slidesEl:w,params:I}=u,{centeredSlides:b}=I;if(u.allowSlidePrev=!0,u.allowSlideNext=!0,u.virtual&&I.virtual.enabled){t&&(!I.centeredSlides&&u.snapIndex===0?u.slideTo(u.virtual.slides.length,0,!1,!0):I.centeredSlides&&u.snapIndex<I.slidesPerView?u.slideTo(u.virtual.slides.length+u.snapIndex,0,!1,!0):u.snapIndex===u.snapGrid.length-1&&u.slideTo(u.virtual.slidesBefore,0,!1,!0)),u.allowSlidePrev=f,u.allowSlideNext=y,u.emit("loopFix");return}let R=I.slidesPerView;R==="auto"?R=u.slidesPerViewDynamic():(R=Math.ceil(parseFloat(I.slidesPerView,10)),b&&R%2===0&&(R=R+1));const C=I.slidesPerGroupAuto?R:I.slidesPerGroup;let k=C;k%C!==0&&(k+=C-k%C),k+=I.loopAdditionalSlides,u.loopedSlides=k;const L=u.grid&&I.grid&&I.grid.rows>1;d.length<R+k?zr("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):L&&I.grid.fill==="row"&&zr("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const V=[],O=[];let U=u.activeIndex;typeof s>"u"?s=u.getSlideIndex(d.filter(g=>g.classList.contains(I.slideActiveClass))[0]):U=s;const $=r==="next"||!r,A=r==="prev"||!r;let _=0,m=0;const v=L?Math.ceil(d.length/I.grid.rows):d.length,S=(L?d[s].column:s)+(b&&typeof i>"u"?-R/2+.5:0);if(S<k){_=Math.max(k-S,C);for(let g=0;g<k-S;g+=1){const Q=g-Math.floor(g/v)*v;if(L){const re=v-Q-1;for(let ke=d.length-1;ke>=0;ke-=1)d[ke].column===re&&V.push(ke)}else V.push(v-Q-1)}}else if(S+R>v-k){m=Math.max(S-(v-k*2),C);for(let g=0;g<m;g+=1){const Q=g-Math.floor(g/v)*v;L?d.forEach((re,ke)=>{re.column===Q&&O.push(ke)}):O.push(Q)}}if(u.__preventObserver__=!0,requestAnimationFrame(()=>{u.__preventObserver__=!1}),A&&V.forEach(g=>{d[g].swiperLoopMoveDOM=!0,w.prepend(d[g]),d[g].swiperLoopMoveDOM=!1}),$&&O.forEach(g=>{d[g].swiperLoopMoveDOM=!0,w.append(d[g]),d[g].swiperLoopMoveDOM=!1}),u.recalcSlides(),I.slidesPerView==="auto"?u.updateSlides():L&&(V.length>0&&A||O.length>0&&$)&&u.slides.forEach((g,Q)=>{u.grid.updateSlide(Q,g,u.slides)}),I.watchSlidesProgress&&u.updateSlidesOffset(),t){if(V.length>0&&A){if(typeof e>"u"){const g=u.slidesGrid[U],re=u.slidesGrid[U+_]-g;l?u.setTranslate(u.translate-re):(u.slideTo(U+Math.ceil(_),0,!1,!0),i&&(u.touchEventsData.startTranslate=u.touchEventsData.startTranslate-re,u.touchEventsData.currentTranslate=u.touchEventsData.currentTranslate-re))}else if(i){const g=L?V.length/I.grid.rows:V.length;u.slideTo(u.activeIndex+g,0,!1,!0),u.touchEventsData.currentTranslate=u.translate}}else if(O.length>0&&$)if(typeof e>"u"){const g=u.slidesGrid[U],re=u.slidesGrid[U-m]-g;l?u.setTranslate(u.translate-re):(u.slideTo(U-m,0,!1,!0),i&&(u.touchEventsData.startTranslate=u.touchEventsData.startTranslate-re,u.touchEventsData.currentTranslate=u.touchEventsData.currentTranslate-re))}else{const g=L?O.length/I.grid.rows:O.length;u.slideTo(u.activeIndex-g,0,!1,!0)}}if(u.allowSlidePrev=f,u.allowSlideNext=y,u.controller&&u.controller.control&&!a){const g={slideRealIndex:e,direction:r,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(u.controller.control)?u.controller.control.forEach(Q=>{!Q.destroyed&&Q.params.loop&&Q.loopFix({...g,slideTo:Q.params.slidesPerView===I.slidesPerView?t:!1})}):u.controller.control instanceof u.constructor&&u.controller.control.params.loop&&u.controller.control.loopFix({...g,slideTo:u.controller.control.params.slidesPerView===I.slidesPerView?t:!1})}u.emit("loopFix")}function tg(){const n=this,{params:e,slidesEl:t}=n;if(!e.loop||n.virtual&&n.params.virtual.enabled)return;n.recalcSlides();const r=[];n.slides.forEach(i=>{const s=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[s]=i}),n.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{t.append(i)}),n.recalcSlides(),n.slideTo(n.realIndex,0)}var ng={loopCreate:Zm,loopFix:eg,loopDestroy:tg};function rg(n){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=n?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function ig(){const n=this;n.params.watchOverflow&&n.isLocked||n.params.cssMode||(n.isElement&&(n.__preventObserver__=!0),n[n.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1}))}var sg={setGrabCursor:rg,unsetGrabCursor:ig};function og(n,e){e===void 0&&(e=this);function t(r){if(!r||r===hn()||r===Be())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(n);return!i&&!r.getRootNode?null:i||t(r.getRootNode().host)}return t(e)}function Sa(n,e,t){const r=Be(),{params:i}=n,s=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return s&&(t<=a||t>=r.innerWidth-a)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function ag(n){const e=this,t=hn();let r=n;r.originalEvent&&(r=r.originalEvent);const i=e.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Sa(e,r,r.targetTouches[0].pageX);return}const{params:s,touches:a,enabled:l}=e;if(!l||!s.simulateTouch&&r.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let u=r.target;if(s.touchEventsTarget==="wrapper"&&!fm(u,e.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const d=!!s.noSwipingClass&&s.noSwipingClass!=="",f=r.composedPath?r.composedPath():r.path;d&&r.target&&r.target.shadowRoot&&f&&(u=f[0]);const y=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,w=!!(r.target&&r.target.shadowRoot);if(s.noSwiping&&(w?og(y,u):u.closest(y))){e.allowClick=!0;return}if(s.swipeHandler&&!u.closest(s.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const I=a.currentX,b=a.currentY;if(!Sa(e,r,I))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=I,a.startY=b,i.touchStartTime=Ur(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let R=!0;u.matches(i.focusableElements)&&(R=!1,u.nodeName==="SELECT"&&(i.isTouched=!1)),t.activeElement&&t.activeElement.matches(i.focusableElements)&&t.activeElement!==u&&t.activeElement.blur();const C=R&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||C)&&!u.isContentEditable&&r.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",r)}function lg(n){const e=hn(),t=this,r=t.touchEventsData,{params:i,touches:s,rtlTranslate:a,enabled:l}=t;if(!l||!i.simulateTouch&&n.pointerType==="mouse")return;let u=n;if(u.originalEvent&&(u=u.originalEvent),u.type==="pointermove"&&(r.touchId!==null||u.pointerId!==r.pointerId))return;let d;if(u.type==="touchmove"){if(d=[...u.changedTouches].filter($=>$.identifier===r.touchId)[0],!d||d.identifier!==r.touchId)return}else d=u;if(!r.isTouched){r.startMoving&&r.isScrolling&&t.emit("touchMoveOpposite",u);return}const f=d.pageX,y=d.pageY;if(u.preventedByNestedSwiper){s.startX=f,s.startY=y;return}if(!t.allowTouchMove){u.target.matches(r.focusableElements)||(t.allowClick=!1),r.isTouched&&(Object.assign(s,{startX:f,startY:y,currentX:f,currentY:y}),r.touchStartTime=Ur());return}if(i.touchReleaseOnEdges&&!i.loop){if(t.isVertical()){if(y<s.startY&&t.translate<=t.maxTranslate()||y>s.startY&&t.translate>=t.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(f<s.startX&&t.translate<=t.maxTranslate()||f>s.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&u.target===e.activeElement&&u.target.matches(r.focusableElements)){r.isMoved=!0,t.allowClick=!1;return}r.allowTouchCallbacks&&t.emit("touchMove",u),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=f,s.currentY=y;const w=s.currentX-s.startX,I=s.currentY-s.startY;if(t.params.threshold&&Math.sqrt(w**2+I**2)<t.params.threshold)return;if(typeof r.isScrolling>"u"){let $;t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:w*w+I*I>=25&&($=Math.atan2(Math.abs(I),Math.abs(w))*180/Math.PI,r.isScrolling=t.isHorizontal()?$>i.touchAngle:90-$>i.touchAngle)}if(r.isScrolling&&t.emit("touchMoveOpposite",u),typeof r.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(r.startMoving=!0),r.isScrolling||u.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;t.allowClick=!1,!i.cssMode&&u.cancelable&&u.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&u.stopPropagation();let b=t.isHorizontal()?w:I,R=t.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(b=Math.abs(b)*(a?1:-1),R=Math.abs(R)*(a?1:-1)),s.diff=b,b*=i.touchRatio,a&&(b=-b,R=-R);const C=t.touchesDirection;t.swipeDirection=b>0?"prev":"next",t.touchesDirection=R>0?"prev":"next";const k=t.params.loop&&!i.cssMode,L=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!r.isMoved){if(k&&L&&t.loopFix({direction:t.swipeDirection}),r.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const $=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent($)}r.allowMomentumBounce=!1,i.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",u)}let V;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&C!==t.touchesDirection&&k&&L&&Math.abs(b)>=1){Object.assign(s,{startX:f,startY:y,currentX:f,currentY:y,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}t.emit("sliderMove",u),r.isMoved=!0,r.currentTranslate=b+r.startTranslate;let O=!0,U=i.resistanceRatio;if(i.touchReleaseOnEdges&&(U=0),b>0?(k&&L&&!V&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(i.slidesPerView!=="auto"&&t.slides.length-i.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>t.minTranslate()&&(O=!1,i.resistance&&(r.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+r.startTranslate+b)**U))):b<0&&(k&&L&&!V&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(i.slidesPerView!=="auto"&&t.slides.length-i.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(i.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<t.maxTranslate()&&(O=!1,i.resistance&&(r.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-r.startTranslate-b)**U))),O&&(u.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(b)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&t.freeMode||i.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(r.currentTranslate),t.setTranslate(r.currentTranslate))}function cg(n){const e=this,t=e.touchEventsData;let r=n;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(U=>U.identifier===t.touchId)[0],!i||i.identifier!==t.touchId)return}else{if(t.touchId!==null||r.pointerId!==t.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:a,touches:l,rtlTranslate:u,slidesGrid:d,enabled:f}=e;if(!f||!a.simulateTouch&&r.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",r),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&a.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}a.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const y=Ur(),w=y-t.touchStartTime;if(e.allowClick){const U=r.path||r.composedPath&&r.composedPath();e.updateClickedSlide(U&&U[0]||r.target,U),e.emit("tap click",r),w<300&&y-t.lastClickTime<300&&e.emit("doubleTap doubleClick",r)}if(t.lastClickTime=Ur(),es(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||l.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let I;if(a.followFinger?I=u?e.translate:-e.translate:I=-t.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:I});return}const b=I>=-e.maxTranslate()&&!e.params.loop;let R=0,C=e.slidesSizesGrid[0];for(let U=0;U<d.length;U+=U<a.slidesPerGroupSkip?1:a.slidesPerGroup){const $=U<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof d[U+$]<"u"?(b||I>=d[U]&&I<d[U+$])&&(R=U,C=d[U+$]-d[U]):(b||I>=d[U])&&(R=U,C=d[d.length-1]-d[d.length-2])}let k=null,L=null;a.rewind&&(e.isBeginning?L=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(k=0));const V=(I-d[R])/C,O=R<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(w>a.longSwipesMs){if(!a.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(V>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?k:R+O):e.slideTo(R)),e.swipeDirection==="prev"&&(V>1-a.longSwipesRatio?e.slideTo(R+O):L!==null&&V<0&&Math.abs(V)>a.longSwipesRatio?e.slideTo(L):e.slideTo(R))}else{if(!a.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(r.target===e.navigation.nextEl||r.target===e.navigation.prevEl)?r.target===e.navigation.nextEl?e.slideTo(R+O):e.slideTo(R):(e.swipeDirection==="next"&&e.slideTo(k!==null?k:R+O),e.swipeDirection==="prev"&&e.slideTo(L!==null?L:R))}}function Ia(){const n=this,{params:e,el:t}=n;if(t&&t.offsetWidth===0)return;e.breakpoints&&n.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=n,a=n.virtual&&n.params.virtual.enabled;n.allowSlideNext=!0,n.allowSlidePrev=!0,n.updateSize(),n.updateSlides(),n.updateSlidesClasses();const l=a&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&n.isEnd&&!n.isBeginning&&!n.params.centeredSlides&&!l?n.slideTo(n.slides.length-1,0,!1,!0):n.params.loop&&!a?n.slideToLoop(n.realIndex,0,!1,!0):n.slideTo(n.activeIndex,0,!1,!0),n.autoplay&&n.autoplay.running&&n.autoplay.paused&&(clearTimeout(n.autoplay.resizeTimeout),n.autoplay.resizeTimeout=setTimeout(()=>{n.autoplay&&n.autoplay.running&&n.autoplay.paused&&n.autoplay.resume()},500)),n.allowSlidePrev=i,n.allowSlideNext=r,n.params.watchOverflow&&s!==n.snapGrid&&n.checkOverflow()}function ug(n){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&n.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(n.stopPropagation(),n.stopImmediatePropagation())))}function hg(){const n=this,{wrapperEl:e,rtlTranslate:t,enabled:r}=n;if(!r)return;n.previousTranslate=n.translate,n.isHorizontal()?n.translate=-e.scrollLeft:n.translate=-e.scrollTop,n.translate===0&&(n.translate=0),n.updateActiveIndex(),n.updateSlidesClasses();let i;const s=n.maxTranslate()-n.minTranslate();s===0?i=0:i=(n.translate-n.minTranslate())/s,i!==n.progress&&n.updateProgress(t?-n.translate:n.translate),n.emit("setTranslate",n.translate,!1)}function dg(n){const e=this;Vr(e,n.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function fg(){const n=this;n.documentTouchHandlerProceeded||(n.documentTouchHandlerProceeded=!0,n.params.touchReleaseOnEdges&&(n.el.style.touchAction="auto"))}const gc=(n,e)=>{const t=hn(),{params:r,el:i,wrapperEl:s,device:a}=n,l=!!r.nested,u=e==="on"?"addEventListener":"removeEventListener",d=e;!i||typeof i=="string"||(t[u]("touchstart",n.onDocumentTouchStart,{passive:!1,capture:l}),i[u]("touchstart",n.onTouchStart,{passive:!1}),i[u]("pointerdown",n.onTouchStart,{passive:!1}),t[u]("touchmove",n.onTouchMove,{passive:!1,capture:l}),t[u]("pointermove",n.onTouchMove,{passive:!1,capture:l}),t[u]("touchend",n.onTouchEnd,{passive:!0}),t[u]("pointerup",n.onTouchEnd,{passive:!0}),t[u]("pointercancel",n.onTouchEnd,{passive:!0}),t[u]("touchcancel",n.onTouchEnd,{passive:!0}),t[u]("pointerout",n.onTouchEnd,{passive:!0}),t[u]("pointerleave",n.onTouchEnd,{passive:!0}),t[u]("contextmenu",n.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[u]("click",n.onClick,!0),r.cssMode&&s[u]("scroll",n.onScroll),r.updateOnWindowResize?n[d](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Ia,!0):n[d]("observerUpdate",Ia,!0),i[u]("load",n.onLoad,{capture:!0}))};function pg(){const n=this,{params:e}=n;n.onTouchStart=ag.bind(n),n.onTouchMove=lg.bind(n),n.onTouchEnd=cg.bind(n),n.onDocumentTouchStart=fg.bind(n),e.cssMode&&(n.onScroll=hg.bind(n)),n.onClick=ug.bind(n),n.onLoad=dg.bind(n),gc(n,"on")}function mg(){gc(this,"off")}var gg={attachEvents:pg,detachEvents:mg};const Aa=(n,e)=>n.grid&&e.grid&&e.grid.rows>1;function yg(){const n=this,{realIndex:e,initialized:t,params:r,el:i}=n,s=r.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const a=n.getBreakpoint(s,n.params.breakpointsBase,n.el);if(!a||n.currentBreakpoint===a)return;const u=(a in s?s[a]:void 0)||n.originalParams,d=Aa(n,r),f=Aa(n,u),y=n.params.grabCursor,w=u.grabCursor,I=r.enabled;d&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),n.emitContainerClasses()):!d&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),n.emitContainerClasses()),y&&!w?n.unsetGrabCursor():!y&&w&&n.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(V=>{if(typeof u[V]>"u")return;const O=r[V]&&r[V].enabled,U=u[V]&&u[V].enabled;O&&!U&&n[V].disable(),!O&&U&&n[V].enable()});const b=u.direction&&u.direction!==r.direction,R=r.loop&&(u.slidesPerView!==r.slidesPerView||b),C=r.loop;b&&t&&n.changeDirection(),Ne(n.params,u);const k=n.params.enabled,L=n.params.loop;Object.assign(n,{allowTouchMove:n.params.allowTouchMove,allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev}),I&&!k?n.disable():!I&&k&&n.enable(),n.currentBreakpoint=a,n.emit("_beforeBreakpoint",u),t&&(R?(n.loopDestroy(),n.loopCreate(e),n.updateSlides()):!C&&L?(n.loopCreate(e),n.updateSlides()):C&&!L&&n.loopDestroy()),n.emit("breakpoint",u)}function _g(n,e,t){if(e===void 0&&(e="window"),!n||e==="container"&&!t)return;let r=!1;const i=Be(),s=e==="window"?i.innerHeight:t.clientHeight,a=Object.keys(n).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const u=parseFloat(l.substr(1));return{value:s*u,point:l}}return{value:l,point:l}});a.sort((l,u)=>parseInt(l.value,10)-parseInt(u.value,10));for(let l=0;l<a.length;l+=1){const{point:u,value:d}=a[l];e==="window"?i.matchMedia(`(min-width: ${d}px)`).matches&&(r=u):d<=t.clientWidth&&(r=u)}return r||"max"}var vg={setBreakpoint:yg,getBreakpoint:_g};function wg(n,e){const t=[];return n.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&t.push(e+i)}):typeof r=="string"&&t.push(e+r)}),t}function Tg(){const n=this,{classNames:e,params:t,rtl:r,el:i,device:s}=n,a=wg(["initialized",t.direction,{"free-mode":n.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:r},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...a),i.classList.add(...e),n.emitContainerClasses()}function Eg(){const n=this,{el:e,classNames:t}=n;!e||typeof e=="string"||(e.classList.remove(...t),n.emitContainerClasses())}var Sg={addClasses:Tg,removeClasses:Eg};function Ig(){const n=this,{isLocked:e,params:t}=n,{slidesOffsetBefore:r}=t;if(r){const i=n.slides.length-1,s=n.slidesGrid[i]+n.slidesSizesGrid[i]+r*2;n.isLocked=n.size>s}else n.isLocked=n.snapGrid.length===1;t.allowSlideNext===!0&&(n.allowSlideNext=!n.isLocked),t.allowSlidePrev===!0&&(n.allowSlidePrev=!n.isLocked),e&&e!==n.isLocked&&(n.isEnd=!1),e!==n.isLocked&&n.emit(n.isLocked?"lock":"unlock")}var Ag={checkOverflow:Ig},ba={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function bg(n,e){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],s=r[i];if(typeof s!="object"||s===null){Ne(e,r);return}if(n[i]===!0&&(n[i]={enabled:!0}),i==="navigation"&&n[i]&&n[i].enabled&&!n[i].prevEl&&!n[i].nextEl&&(n[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&n[i]&&n[i].enabled&&!n[i].el&&(n[i].auto=!0),!(i in n&&"enabled"in s)){Ne(e,r);return}typeof n[i]=="object"&&!("enabled"in n[i])&&(n[i].enabled=!0),n[i]||(n[i]={enabled:!1}),Ne(e,r)}}const ki={eventsEmitter:Sm,update:Om,translate:Um,transition:jm,slide:Jm,loop:ng,grabCursor:sg,events:gg,breakpoints:vg,checkOverflow:Ag,classes:Sg},Vi={};class Me{constructor(){let e,t;for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?t=i[0]:[e,t]=i,t||(t={}),t=Ne({},t),e&&!t.el&&(t.el=e);const a=hn();if(t.el&&typeof t.el=="string"&&a.querySelectorAll(t.el).length>1){const f=[];return a.querySelectorAll(t.el).forEach(y=>{const w=Ne({},t,{el:y});f.push(new Me(w))}),f}const l=this;l.__swiper__=!0,l.support=fc(),l.device=pc({userAgent:t.userAgent}),l.browser=wm(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],t.modules&&Array.isArray(t.modules)&&l.modules.push(...t.modules);const u={};l.modules.forEach(f=>{f({params:t,swiper:l,extendParams:bg(t,u),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const d=Ne({},ba,u);return l.params=Ne({},d,Vi,t),l.originalParams=Ne({},l.params),l.passedParams=Ne({},t),l.params&&l.params.on&&Object.keys(l.params.on).forEach(f=>{l.on(f,l.params.on[f])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:r}=this,i=Ke(t,`.${r.slideClass}, swiper-slide`),s=wa(i[0]);return wa(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:r}=e;e.slides=Ke(t,`.${r.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const r=this;e=Math.min(Math.max(e,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*e+i;r.translateTo(a,typeof t>"u"?0:t),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(r=>{const i=e.getSlideClasses(r);t.push({slideEl:r,classNames:i}),e.emit("_slideClass",r,i)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const r=this,{params:i,slides:s,slidesGrid:a,slidesSizesGrid:l,size:u,activeIndex:d}=r;let f=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let y=s[d]?Math.ceil(s[d].swiperSlideSize):0,w;for(let I=d+1;I<s.length;I+=1)s[I]&&!w&&(y+=Math.ceil(s[I].swiperSlideSize),f+=1,y>u&&(w=!0));for(let I=d-1;I>=0;I-=1)s[I]&&!w&&(y+=s[I].swiperSlideSize,f+=1,y>u&&(w=!0))}else if(e==="current")for(let y=d+1;y<s.length;y+=1)(t?a[y]+l[y]-a[d]<u:a[y]-a[d]<u)&&(f+=1);else for(let y=d-1;y>=0;y-=1)a[d]-a[y]<u&&(f+=1);return f}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:r}=e;r.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&Vr(e,a)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function i(){const a=e.rtlTranslate?e.translate*-1:e.translate,l=Math.min(Math.max(a,e.maxTranslate()),e.minTranslate());e.setTranslate(l),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&e.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&e.isEnd&&!r.centeredSlides){const a=e.virtual&&r.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(a.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||i()}r.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const r=this,i=r.params.direction;return e||(e=i==="horizontal"?"vertical":"horizontal"),e===i||e!=="horizontal"&&e!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${e}`),r.emitContainerClasses(),r.params.direction=e,r.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),r.emit("changeDirection"),t&&r.update()),r}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let r=e||t.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=t,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):Ke(r,i())[0];return!a&&t.params.createElements&&(a=Gr("div",t.params.wrapperClass),r.append(a),Ke(r,`.${t.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(t,{el:r,wrapperEl:a,slidesEl:t.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:t.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||pt(r,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||pt(r,"direction")==="rtl"),wrongRTL:pt(a,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const i=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(s=>{s.complete?Vr(t,s):s.addEventListener("load",a=>{Vr(t,a.target)})}),ts(t),t.initialized=!0,ts(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const r=this,{params:i,el:s,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),t&&(r.removeClasses(),s&&typeof s!="string"&&s.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(u=>{u.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),u.removeAttribute("style"),u.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(u=>{r.off(u)}),e!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),cm(r)),r.destroyed=!0),null}static extendDefaults(e){Ne(Vi,e)}static get extendedDefaults(){return Vi}static get defaults(){return ba}static installModule(e){Me.prototype.__modules__||(Me.prototype.__modules__=[]);const t=Me.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>Me.installModule(t)),Me):(Me.installModule(e),Me)}}Object.keys(ki).forEach(n=>{Object.keys(ki[n]).forEach(e=>{Me.prototype[e]=ki[n][e]})});Me.use([Tm,Em]);function Pg(n,e,t,r){return n.params.createElements&&Object.keys(r).forEach(i=>{if(!t[i]&&t.auto===!0){let s=Ke(n.el,`.${r[i]}`)[0];s||(s=Gr("div",r[i]),s.className=r[i],n.el.append(s)),t[i]=s,e[i]=s}}),t}function Rg(n){let{swiper:e,extendParams:t,on:r,emit:i}=n;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function s(b){let R;return b&&typeof b=="string"&&e.isElement&&(R=e.el.querySelector(b),R)?R:(b&&(typeof b=="string"&&(R=[...document.querySelectorAll(b)]),e.params.uniqueNavElements&&typeof b=="string"&&R&&R.length>1&&e.el.querySelectorAll(b).length===1?R=e.el.querySelector(b):R&&R.length===1&&(R=R[0])),b&&!R?b:R)}function a(b,R){const C=e.params.navigation;b=it(b),b.forEach(k=>{k&&(k.classList[R?"add":"remove"](...C.disabledClass.split(" ")),k.tagName==="BUTTON"&&(k.disabled=R),e.params.watchOverflow&&e.enabled&&k.classList[e.isLocked?"add":"remove"](C.lockClass))})}function l(){const{nextEl:b,prevEl:R}=e.navigation;if(e.params.loop){a(R,!1),a(b,!1);return}a(R,e.isBeginning&&!e.params.rewind),a(b,e.isEnd&&!e.params.rewind)}function u(b){b.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function d(b){b.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function f(){const b=e.params.navigation;if(e.params.navigation=Pg(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(b.nextEl||b.prevEl))return;let R=s(b.nextEl),C=s(b.prevEl);Object.assign(e.navigation,{nextEl:R,prevEl:C}),R=it(R),C=it(C);const k=(L,V)=>{L&&L.addEventListener("click",V==="next"?d:u),!e.enabled&&L&&L.classList.add(...b.lockClass.split(" "))};R.forEach(L=>k(L,"next")),C.forEach(L=>k(L,"prev"))}function y(){let{nextEl:b,prevEl:R}=e.navigation;b=it(b),R=it(R);const C=(k,L)=>{k.removeEventListener("click",L==="next"?d:u),k.classList.remove(...e.params.navigation.disabledClass.split(" "))};b.forEach(k=>C(k,"next")),R.forEach(k=>C(k,"prev"))}r("init",()=>{e.params.navigation.enabled===!1?I():(f(),l())}),r("toEdge fromEdge lock unlock",()=>{l()}),r("destroy",()=>{y()}),r("enable disable",()=>{let{nextEl:b,prevEl:R}=e.navigation;if(b=it(b),R=it(R),e.enabled){l();return}[...b,...R].filter(C=>!!C).forEach(C=>C.classList.add(e.params.navigation.lockClass))}),r("click",(b,R)=>{let{nextEl:C,prevEl:k}=e.navigation;C=it(C),k=it(k);const L=R.target;let V=k.includes(L)||C.includes(L);if(e.isElement&&!V){const O=R.path||R.composedPath&&R.composedPath();O&&(V=O.find(U=>C.includes(U)||k.includes(U)))}if(e.params.navigation.hideOnClick&&!V){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===L||e.pagination.el.contains(L)))return;let O;C.length?O=C[0].classList.contains(e.params.navigation.hiddenClass):k.length&&(O=k[0].classList.contains(e.params.navigation.hiddenClass)),i(O===!0?"navigationShow":"navigationHide"),[...C,...k].filter(U=>!!U).forEach(U=>U.classList.toggle(e.params.navigation.hiddenClass))}});const w=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),f(),l()},I=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),y()};Object.assign(e.navigation,{enable:w,disable:I,update:l,init:f,destroy:y})}Me.use([Rg]);function Pa(n,e,t){new Me(n,{slidesPerView:"auto",autoplay:{delay:500},loop:!0,navigation:{nextEl:t,prevEl:e}})}function Cg(n,e){let t=document.createDocumentFragment(),r=[];if(n.length===0)return e.innerHTML="<p>Сталася помилка. Або продукція відсутня</p>";for(let i of n){let s="",a="";i.imgUrl.forEach(()=>{a+='<div class="swiper-slide"><img class="product__slide" src="" /></div>'}),s=`${i.action||i.newProduct?`<div class ="product__card-flag ${i.action?"product__card-flag-discount":"product__card-flag-new"}">
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
            </a>`;const l=document.createElement("div");l.classList.add("product__card"),l.setAttribute("data-arc",i.art),l.innerHTML=s,r.push({swiper:l.querySelector(".swiper"),next:l.querySelector(".product__card-button-next"),prev:l.querySelector(".product__card-button-prev")});for(let u=0;u<i.imgUrl.length;++u){const d=l.querySelectorAll(".product__slide");let f=0;d.forEach(y=>{$e(i.imgUrl[f++],y)})}t.append(l)}return e.append(t),r}async function xg(n,e){return new Promise(t=>{typeof YT>"u"||!YT.Player?(window.onYouTubeIframeAPIReady=()=>{t(Ra(e,n))},Vg()):t(Ra(e,n))})}function Ra(n,e,t){return new YT.Player(n,{videoId:e,playerVars:{controls:0,rel:0,fs:0,enablejsapi:0,modestbranding:1},events:{onStateChange:kg}})}function kg(n){n.target.pauseVideo(),console.log(n.target.getPlayerState())}function Vg(){const n=document.createElement("script");n.src="https://www.youtube.com/iframe_api";const e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)}document.addEventListener("DOMContentLoaded",async function(){const n=await yd();Uc(),Gc();const e=await _a(n,"products");Cg(e,document.querySelector(".product__cards")).forEach(s=>{Pa(s.swiper,s.prev,s.next)}),Pa(document.querySelector(".manufacturing__swiper-video"),document.querySelector(".manufacturing__button-prev"),document.querySelector(".manufacturing__button-next")),await $e("logo-1.svg",document.querySelector(".header__center-logo")),await $e("logo-1.svg",document.querySelector(".burger__logo-img")),await $e("user.svg",document.querySelector(".header__top-img")),await $e("user.svg",document.querySelector(".burger__img")),await $e("gs://nuts-17b69.appspot.com/main_page/main_page-1.webp",document.querySelector(".homepage__img")),await $e("gs://nuts-17b69.appspot.com/main_page/main_page-3.webp",document.querySelector(".main-goal__img"));const r=await _a(n,"videoId","main-pages"),i=document.querySelectorAll(".manufacturing__player");for(let s=0;s<r.main.length;++s)await xg(r.main[s],i[s]);await $e("gs://nuts-17b69.appspot.com/main_page/main_page-benefit_1.webp",document.querySelector(".benefits__nuts")),await $e("gs://nuts-17b69.appspot.com/main_page/main_page-benefit_2.webp",document.querySelector(".benefits__hazelnut")),await $e("gs://nuts-17b69.appspot.com/main_page/main_page-benefit_3.webp",document.querySelector(".benefits__rosehip"))});
