(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var Ni=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},su={exports:{}};(function(n,e){(function(r,i){n.exports=i()})(Ni,function(){return function(t){var r={};function i(s){if(r[s])return r[s].exports;var o=r[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=t,i.c=r,i.d=function(s,o,l){i.o(s,o)||Object.defineProperty(s,o,{enumerable:!0,get:l})},i.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},i.t=function(s,o){if(o&1&&(s=i(s)),o&8||o&4&&typeof s=="object"&&s&&s.__esModule)return s;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:s}),o&2&&typeof s!="string")for(var c in s)i.d(l,c,(function(h){return s[h]}).bind(null,c));return l},i.n=function(s){var o=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(o,"a",o),o},i.o=function(s,o){return Object.prototype.hasOwnProperty.call(s,o)},i.p="",i(i.s=0)}([function(t,r,i){i.r(r);var s=function(I){return Array.isArray(I)?I:[I]},o=function(I){return I instanceof Node},l=function(I){return I instanceof NodeList},c=function(I,M){if(I&&M){I=l(I)?I:[I];for(var z=0;z<I.length&&M(I[z],z,I.length)!==!0;z++);}},h=function(I){return console.error("[scroll-lock] ".concat(I))},f=function(I){if(Array.isArray(I)){var M=I.join(", ");return M}},m=function(I){var M=[];return c(I,function(z){return M.push(z)}),M},w=function(I,M){var z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,q=arguments.length>3&&arguments[3]!==void 0?arguments[3]:document;if(z&&m(q.querySelectorAll(M)).indexOf(I)!==-1)return I;for(;(I=I.parentElement)&&m(q.querySelectorAll(M)).indexOf(I)===-1;);return I},T=function(I,M){var z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document,q=m(z.querySelectorAll(M)).indexOf(I)!==-1;return q},S=function(I){if(I){var M=getComputedStyle(I),z=M.overflow==="hidden";return z}},P=function(I){if(I){if(S(I))return!0;var M=I.scrollTop;return M<=0}},k=function(I){if(I){if(S(I))return!0;var M=I.scrollTop,z=I.scrollHeight,q=M+I.offsetHeight;return q>=z}},R=function(I){if(I){if(S(I))return!0;var M=I.scrollLeft;return M<=0}},D=function(I){if(I){if(S(I))return!0;var M=I.scrollLeft,z=I.scrollWidth,q=M+I.offsetWidth;return q>=z}},x=function(I){var M='textarea, [contenteditable="true"]';return T(I,M)},O=function(I){var M='input[type="range"]';return T(I,M)};i.d(r,"disablePageScroll",function(){return _}),i.d(r,"enablePageScroll",function(){return E}),i.d(r,"getScrollState",function(){return b}),i.d(r,"clearQueueScrollLocks",function(){return v}),i.d(r,"getTargetScrollBarWidth",function(){return $}),i.d(r,"getCurrentTargetScrollBarWidth",function(){return ie}),i.d(r,"getPageScrollBarWidth",function(){return we}),i.d(r,"getCurrentPageScrollBarWidth",function(){return Ue}),i.d(r,"addScrollableTarget",function(){return Ie}),i.d(r,"removeScrollableTarget",function(){return Ye}),i.d(r,"addScrollableSelector",function(){return Ze}),i.d(r,"removeScrollableSelector",function(){return mt}),i.d(r,"addLockableTarget",function(){return be}),i.d(r,"addLockableSelector",function(){return ce}),i.d(r,"setFillGapMethod",function(){return De}),i.d(r,"addFillGapTarget",function(){return gt}),i.d(r,"removeFillGapTarget",function(){return ri}),i.d(r,"addFillGapSelector",function(){return yt}),i.d(r,"removeFillGapSelector",function(){return ii}),i.d(r,"refillGaps",function(){return bn});function F(B){for(var I=1;I<arguments.length;I++){var M=arguments[I]!=null?arguments[I]:{},z=Object.keys(M);typeof Object.getOwnPropertySymbols=="function"&&(z=z.concat(Object.getOwnPropertySymbols(M).filter(function(q){return Object.getOwnPropertyDescriptor(M,q).enumerable}))),z.forEach(function(q){j(B,q,M[q])})}return B}function j(B,I,M){return I in B?Object.defineProperty(B,I,{value:M,enumerable:!0,configurable:!0,writable:!0}):B[I]=M,B}var A=["padding","margin","width","max-width","none"],g=3,y={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:A[0],startTouchY:0,startTouchX:0},_=function(I){y.queue<=0&&(y.scroll=!1,Dt(),sr()),Ie(I),y.queue++},E=function(I){y.queue>0&&y.queue--,y.queue<=0&&(y.scroll=!0,Sn(),Ns()),Ye(I)},b=function(){return y.scroll},v=function(){y.queue=0},$=function(I){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(o(I)){var z=I.style.overflowY;M?b()||(I.style.overflowY=I.getAttribute("data-scroll-lock-saved-overflow-y-property")):I.style.overflowY="scroll";var q=ie(I);return I.style.overflowY=z,q}else return 0},ie=function(I){if(o(I))if(I===document.body){var M=document.documentElement.clientWidth,z=window.innerWidth,q=z-M;return q}else{var Xe=I.style.borderLeftWidth,nt=I.style.borderRightWidth;I.style.borderLeftWidth="0px",I.style.borderRightWidth="0px";var Je=I.offsetWidth-I.clientWidth;return I.style.borderLeftWidth=Xe,I.style.borderRightWidth=nt,Je}else return 0},we=function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return $(document.body,I)},Ue=function(){return ie(document.body)},Ie=function(I){if(I){var M=s(I);M.map(function(z){c(z,function(q){o(q)?q.setAttribute("data-scroll-lock-scrollable",""):h('"'.concat(q,'" is not a Element.'))})})}},Ye=function(I){if(I){var M=s(I);M.map(function(z){c(z,function(q){o(q)?q.removeAttribute("data-scroll-lock-scrollable"):h('"'.concat(q,'" is not a Element.'))})})}},Ze=function(I){if(I){var M=s(I);M.map(function(z){y.scrollableSelectors.push(z)})}},mt=function(I){if(I){var M=s(I);M.map(function(z){y.scrollableSelectors=y.scrollableSelectors.filter(function(q){return q!==z})})}},be=function(I){if(I){var M=s(I);M.map(function(z){c(z,function(q){o(q)?q.setAttribute("data-scroll-lock-lockable",""):h('"'.concat(q,'" is not a Element.'))})}),b()||Dt()}},ce=function(I){if(I){var M=s(I);M.map(function(z){y.lockableSelectors.push(z)}),b()||Dt(),yt(I)}},De=function(I){if(I)if(A.indexOf(I)!==-1)y.fillGapMethod=I,bn();else{var M=A.join(", ");h('"'.concat(I,`" method is not available!
Available fill gap methods: `).concat(M,"."))}},gt=function(I){if(I){var M=s(I);M.map(function(z){c(z,function(q){o(q)?(q.setAttribute("data-scroll-lock-fill-gap",""),y.scroll||or(q)):h('"'.concat(q,'" is not a Element.'))})})}},ri=function(I){if(I){var M=s(I);M.map(function(z){c(z,function(q){o(q)?(q.removeAttribute("data-scroll-lock-fill-gap"),y.scroll||Pn(q)):h('"'.concat(q,'" is not a Element.'))})})}},yt=function(I){if(I){var M=s(I);M.map(function(z){y.fillGapSelectors.indexOf(z)===-1&&(y.fillGapSelectors.push(z),y.scroll||si(z))})}},ii=function(I){if(I){var M=s(I);M.map(function(z){y.fillGapSelectors=y.fillGapSelectors.filter(function(q){return q!==z}),y.scroll||An(z)})}},bn=function(){y.scroll||sr()},Dt=function(){var I=f(y.lockableSelectors);tr(I)},Sn=function(){var I=f(y.lockableSelectors);nr(I)},tr=function(I){var M=document.querySelectorAll(I);c(M,function(z){rr(z)})},nr=function(I){var M=document.querySelectorAll(I);c(M,function(z){ir(z)})},rr=function(I){if(o(I)&&I.getAttribute("data-scroll-lock-locked")!=="true"){var M=window.getComputedStyle(I);I.setAttribute("data-scroll-lock-saved-overflow-y-property",M.overflowY),I.setAttribute("data-scroll-lock-saved-inline-overflow-property",I.style.overflow),I.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",I.style.overflowY),I.style.overflow="hidden",I.setAttribute("data-scroll-lock-locked","true")}},ir=function(I){o(I)&&I.getAttribute("data-scroll-lock-locked")==="true"&&(I.style.overflow=I.getAttribute("data-scroll-lock-saved-inline-overflow-property"),I.style.overflowY=I.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),I.removeAttribute("data-scroll-lock-saved-overflow-property"),I.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),I.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),I.removeAttribute("data-scroll-lock-locked"))},sr=function(){y.fillGapSelectors.map(function(I){si(I)})},Ns=function(){y.fillGapSelectors.map(function(I){An(I)})},si=function(I){var M=document.querySelectorAll(I),z=y.lockableSelectors.indexOf(I)!==-1;c(M,function(q){or(q,z)})},or=function(I){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(o(I)){var z;if(I.getAttribute("data-scroll-lock-lockable")===""||M)z=$(I,!0);else{var q=w(I,f(y.lockableSelectors));z=$(q,!0)}I.getAttribute("data-scroll-lock-filled-gap")==="true"&&Pn(I);var Xe=window.getComputedStyle(I);if(I.setAttribute("data-scroll-lock-filled-gap","true"),I.setAttribute("data-scroll-lock-current-fill-gap-method",y.fillGapMethod),y.fillGapMethod==="margin"){var nt=parseFloat(Xe.marginRight);I.style.marginRight="".concat(nt+z,"px")}else if(y.fillGapMethod==="width")I.style.width="calc(100% - ".concat(z,"px)");else if(y.fillGapMethod==="max-width")I.style.maxWidth="calc(100% - ".concat(z,"px)");else if(y.fillGapMethod==="padding"){var Je=parseFloat(Xe.paddingRight);I.style.paddingRight="".concat(Je+z,"px")}}},An=function(I){var M=document.querySelectorAll(I);c(M,function(z){Pn(z)})},Pn=function(I){if(o(I)&&I.getAttribute("data-scroll-lock-filled-gap")==="true"){var M=I.getAttribute("data-scroll-lock-current-fill-gap-method");I.removeAttribute("data-scroll-lock-filled-gap"),I.removeAttribute("data-scroll-lock-current-fill-gap-method"),M==="margin"?I.style.marginRight="":M==="width"?I.style.width="":M==="max-width"?I.style.maxWidth="":M==="padding"&&(I.style.paddingRight="")}},Ds=function(I){bn()},ar=function(I){y.scroll||(y.startTouchY=I.touches[0].clientY,y.startTouchX=I.touches[0].clientX)},lr=function(I){if(!y.scroll){var M=y.startTouchY,z=y.startTouchX,q=I.touches[0].clientY,Xe=I.touches[0].clientX;if(I.touches.length<2){var nt=f(y.scrollableSelectors),Je={up:M<q,down:M>q,left:z<Xe,right:z>Xe},Rn={up:M+g<q,down:M-g>q,left:z+g<Xe,right:z-g>Xe},Os=function Cn(me){var ai=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(me){var _t=w(me,nt,!1);if(O(me))return!1;if(ai||x(me)&&w(me,nt)||T(me,nt)){var Ot=!1;R(me)&&D(me)?(Je.up&&P(me)||Je.down&&k(me))&&(Ot=!0):P(me)&&k(me)?(Je.left&&R(me)||Je.right&&D(me))&&(Ot=!0):(Rn.up&&P(me)||Rn.down&&k(me)||Rn.left&&R(me)||Rn.right&&D(me))&&(Ot=!0),Ot&&(_t?Cn(_t,!0):I.cancelable&&I.preventDefault())}else Cn(_t)}else I.cancelable&&I.preventDefault()};Os(I.target)}}},oi=function(I){y.scroll||(y.startTouchY=0,y.startTouchX=0)};typeof window<"u"&&window.addEventListener("resize",Ds),typeof document<"u"&&(document.addEventListener("touchstart",ar),document.addEventListener("touchmove",lr,{passive:!1}),document.addEventListener("touchend",oi));var Te={hide:function(I){h(`"hide" is deprecated! Use "disablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget`),_(I)},show:function(I){h(`"show" is deprecated! Use "enablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget`),E(I)},toggle:function(I){h('"toggle" is deprecated! Do not use it.'),b()?_():E(I)},getState:function(){return h(`"getState" is deprecated! Use "getScrollState" instead. 
 https://github.com/FL3NKEY/scroll-lock#getscrollstate`),b()},getWidth:function(){return h(`"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth`),we()},getCurrentWidth:function(){return h(`"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth`),Ue()},setScrollableTargets:function(I){h(`"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget`),Ie(I)},setFillGapSelectors:function(I){h(`"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector`),yt(I)},setFillGapTargets:function(I){h(`"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget`),gt(I)},clearQueue:function(){h(`"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. 
 https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks`),v()}},Se=F({disablePageScroll:_,enablePageScroll:E,getScrollState:b,clearQueueScrollLocks:v,getTargetScrollBarWidth:$,getCurrentTargetScrollBarWidth:ie,getPageScrollBarWidth:we,getCurrentPageScrollBarWidth:Ue,addScrollableSelector:Ze,removeScrollableSelector:mt,addScrollableTarget:Ie,removeScrollableTarget:Ye,addLockableSelector:ce,addLockableTarget:be,addFillGapSelector:yt,removeFillGapSelector:ii,addFillGapTarget:gt,removeFillGapTarget:ri,setFillGapMethod:De,refillGaps:bn,_state:y},Te);r.default=Se}]).default})})(su);var kl=su.exports;function re(n,e=null,t=null){switch(e){case"all":return document.querySelectorAll(n);case"id":return document.getElementById(n);case"custom":return t.querySelector(n);case"customAll":return t.querySelectorAll(n);default:return document.querySelector(n)}}function Sf(){const n=re(".burger"),e=re(".burger__background"),t=re(".burger__scroll");n.addEventListener("click",r=>{const i=r.target.closest(".burger__icon"),s=r.target.closest(".burger__close");i&&(e.classList.toggle("burger__background_active"),kl.disablePageScroll(t)),s&&(e.classList.remove("burger__background_active"),kl.enablePageScroll(t))})}var Pe=[];for(var Ks=0;Ks<256;++Ks)Pe.push((Ks+256).toString(16).slice(1));function Af(n,e=0){return(Pe[n[e+0]]+Pe[n[e+1]]+Pe[n[e+2]]+Pe[n[e+3]]+"-"+Pe[n[e+4]]+Pe[n[e+5]]+"-"+Pe[n[e+6]]+Pe[n[e+7]]+"-"+Pe[n[e+8]]+Pe[n[e+9]]+"-"+Pe[n[e+10]]+Pe[n[e+11]]+Pe[n[e+12]]+Pe[n[e+13]]+Pe[n[e+14]]+Pe[n[e+15]]).toLowerCase()}var Ei,Pf=new Uint8Array(16);function Rf(){if(!Ei&&(Ei=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Ei))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ei(Pf)}var Cf=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const xl={randomUUID:Cf};function kf(n,e,t){if(xl.randomUUID&&!e&&!n)return xl.randomUUID();n=n||{};var r=n.random||(n.rng||Rf)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,Af(r)}var Nl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},xf=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],o=n[t++],l=n[t++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],o=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},au={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],o=i+1<n.length,l=o?n[i+1]:0,c=i+2<n.length,h=c?n[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let w=(l&15)<<2|h>>6,T=h&63;c||(T=64,o||(w=64)),r.push(t[f],t[m],t[w],t[T])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ou(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):xf(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new Nf;const w=s<<2|l>>4;if(r.push(w),h!==64){const T=l<<4&240|h>>2;if(r.push(T),m!==64){const S=h<<6&192|m;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Nf extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Df=function(n){const e=ou(n);return au.encodeByteArray(e,!0)},Gi=function(n){return Df(n).replace(/\./g,"")},lu=function(n){try{return au.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Of(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Lf=()=>Of().__FIREBASE_DEFAULTS__,Vf=()=>{if(typeof process>"u"||typeof Nl>"u")return;const n=Nl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Mf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&lu(n[1]);return e&&JSON.parse(e)},ls=()=>{try{return Lf()||Vf()||Mf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},cu=n=>{var e,t;return(t=(e=ls())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},uu=n=>{const e=cu(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},hu=()=>{var n;return(n=ls())===null||n===void 0?void 0:n.config},du=n=>{var e;return(e=ls())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function fu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Gi(JSON.stringify(t)),Gi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function Bf(){var n;const e=(n=ls())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gf(){const n=xe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function qf(){return!Bf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Wf(){try{return typeof indexedDB=="object"}catch{return!1}}function Hf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f="FirebaseError";class pt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=$f,Object.setPrototypeOf(this,pt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qr.prototype.create)}}class qr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Kf(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new pt(i,l,r)}}function Kf(n,e){return n.replace(Qf,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Qf=/\{\$([^}]+)}/g;function Yf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function qi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],o=e[i];if(Dl(s)&&Dl(o)){if(!qi(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Dl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ir(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function br(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Xf(n,e){const t=new Jf(n,e);return t.subscribe.bind(t)}class Jf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Zf(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Qs),i.error===void 0&&(i.error=Qs),i.complete===void 0&&(i.complete=Qs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Qs(){}/**
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
 */function ue(n){return n&&n._delegate?n._delegate:n}class Qt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const on="[DEFAULT]";/**
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
 */class ep{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ff;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(np(e))try{this.getOrInitializeService({instanceIdentifier:on})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=on){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=on){return this.instances.has(e)}getOptions(e=on){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=on){return this.component?this.component.multipleInstances?e:on:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tp(n){return n===on?void 0:n}function np(n){return n.instantiationMode==="EAGER"}/**
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
 */class rp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ep(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Z||(Z={}));const ip={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},sp=Z.INFO,op={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},ap=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=op[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jo{constructor(e){this.name=e,this._logLevel=sp,this._logHandler=ap,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ip[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const lp=(n,e)=>e.some(t=>n instanceof t);let Ol,Ll;function cp(){return Ol||(Ol=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function up(){return Ll||(Ll=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pu=new WeakMap,go=new WeakMap,mu=new WeakMap,Ys=new WeakMap,Go=new WeakMap;function hp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",o)},s=()=>{t(Ht(n.result)),i()},o=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&pu.set(t,n)}).catch(()=>{}),Go.set(e,n),e}function dp(n){if(go.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",o),n.removeEventListener("abort",o)},s=()=>{t(),i()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",o),n.addEventListener("abort",o)});go.set(n,e)}let yo={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return go.get(n);if(e==="objectStoreNames")return n.objectStoreNames||mu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ht(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function fp(n){yo=n(yo)}function pp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Xs(this),e,...t);return mu.set(r,e.sort?e.sort():[e]),Ht(r)}:up().includes(n)?function(...e){return n.apply(Xs(this),e),Ht(pu.get(this))}:function(...e){return Ht(n.apply(Xs(this),e))}}function mp(n){return typeof n=="function"?pp(n):(n instanceof IDBTransaction&&dp(n),lp(n,cp())?new Proxy(n,yo):n)}function Ht(n){if(n instanceof IDBRequest)return hp(n);if(Ys.has(n))return Ys.get(n);const e=mp(n);return e!==n&&(Ys.set(n,e),Go.set(e,n)),e}const Xs=n=>Go.get(n);function gp(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(n,e),l=Ht(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ht(o.result),c.oldVersion,c.newVersion,Ht(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const yp=["get","getKey","getAll","getAllKeys","count"],_p=["put","add","delete","clear"],Js=new Map;function Vl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Js.get(e))return Js.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=_p.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yp.includes(t)))return;const s=async function(o,...l){const c=this.transaction(o,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&c.done]))[0]};return Js.set(e,s),s}fp(n=>({...n,get:(e,t,r)=>Vl(e,t)||n.get(e,t,r),has:(e,t)=>!!Vl(e,t)||n.has(e,t)}));/**
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
 */class vp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function wp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _o="@firebase/app",Ml="0.10.8";/**
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
 */const hn=new jo("@firebase/app"),Tp="@firebase/app-compat",Ep="@firebase/analytics-compat",Ip="@firebase/analytics",bp="@firebase/app-check-compat",Sp="@firebase/app-check",Ap="@firebase/auth",Pp="@firebase/auth-compat",Rp="@firebase/database",Cp="@firebase/database-compat",kp="@firebase/functions",xp="@firebase/functions-compat",Np="@firebase/installations",Dp="@firebase/installations-compat",Op="@firebase/messaging",Lp="@firebase/messaging-compat",Vp="@firebase/performance",Mp="@firebase/performance-compat",Fp="@firebase/remote-config",Up="@firebase/remote-config-compat",Bp="@firebase/storage",zp="@firebase/storage-compat",jp="@firebase/firestore",Gp="@firebase/vertexai-preview",qp="@firebase/firestore-compat",Wp="firebase",Hp="10.12.5";/**
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
 */const vo="[DEFAULT]",$p={[_o]:"fire-core",[Tp]:"fire-core-compat",[Ip]:"fire-analytics",[Ep]:"fire-analytics-compat",[Sp]:"fire-app-check",[bp]:"fire-app-check-compat",[Ap]:"fire-auth",[Pp]:"fire-auth-compat",[Rp]:"fire-rtdb",[Cp]:"fire-rtdb-compat",[kp]:"fire-fn",[xp]:"fire-fn-compat",[Np]:"fire-iid",[Dp]:"fire-iid-compat",[Op]:"fire-fcm",[Lp]:"fire-fcm-compat",[Vp]:"fire-perf",[Mp]:"fire-perf-compat",[Fp]:"fire-rc",[Up]:"fire-rc-compat",[Bp]:"fire-gcs",[zp]:"fire-gcs-compat",[jp]:"fire-fst",[qp]:"fire-fst-compat",[Gp]:"fire-vertex","fire-js":"fire-js",[Wp]:"fire-js-all"};/**
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
 */const Wi=new Map,Kp=new Map,wo=new Map;function Fl(n,e){try{n.container.addComponent(e)}catch(t){hn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function dn(n){const e=n.name;if(wo.has(e))return hn.debug(`There were multiple attempts to register component ${e}.`),!1;wo.set(e,n);for(const t of Wi.values())Fl(t,n);for(const t of Kp.values())Fl(t,n);return!0}function cs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function rt(n){return n.settings!==void 0}/**
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
 */const Qp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},$t=new qr("app","Firebase",Qp);/**
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
 */class Yp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $t.create("app-deleted",{appName:this._name})}}/**
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
 */const wn=Hp;function gu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw $t.create("bad-app-name",{appName:String(i)});if(t||(t=hu()),!t)throw $t.create("no-options");const s=Wi.get(i);if(s){if(qi(t,s.options)&&qi(r,s.config))return s;throw $t.create("duplicate-app",{appName:i})}const o=new rp(i);for(const c of wo.values())o.addComponent(c);const l=new Yp(t,r,o);return Wi.set(i,l),l}function qo(n=vo){const e=Wi.get(n);if(!e&&n===vo&&hu())return gu();if(!e)throw $t.create("no-app",{appName:n});return e}function ot(n,e,t){var r;let i=(r=$p[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hn.warn(l.join(" "));return}dn(new Qt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Xp="firebase-heartbeat-database",Jp=1,Lr="firebase-heartbeat-store";let Zs=null;function yu(){return Zs||(Zs=gp(Xp,Jp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Lr)}catch(t){console.warn(t)}}}}).catch(n=>{throw $t.create("idb-open",{originalErrorMessage:n.message})})),Zs}async function Zp(n){try{const t=(await yu()).transaction(Lr),r=await t.objectStore(Lr).get(_u(n));return await t.done,r}catch(e){if(e instanceof pt)hn.warn(e.message);else{const t=$t.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hn.warn(t.message)}}}async function Ul(n,e){try{const r=(await yu()).transaction(Lr,"readwrite");await r.objectStore(Lr).put(e,_u(n)),await r.done}catch(t){if(t instanceof pt)hn.warn(t.message);else{const r=$t.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});hn.warn(r.message)}}}function _u(n){return`${n.name}!${n.options.appId}`}/**
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
 */const em=1024,tm=30*24*60*60*1e3;class nm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new im(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Bl();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=tm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Bl(),{heartbeatsToSend:r,unsentEntries:i}=rm(this._heartbeatsCache.heartbeats),s=Gi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Bl(){return new Date().toISOString().substring(0,10)}function rm(n,e=em){const t=[];let r=n.slice();for(const i of n){const s=t.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),zl(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),zl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class im{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wf()?Hf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Zp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ul(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ul(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function zl(n){return Gi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function sm(n){dn(new Qt("platform-logger",e=>new vp(e),"PRIVATE")),dn(new Qt("heartbeat",e=>new nm(e),"PRIVATE")),ot(_o,Ml,n),ot(_o,Ml,"esm2017"),ot("fire-js","")}sm("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vu="firebasestorage.googleapis.com",wu="storageBucket",om=2*60*1e3,am=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends pt{constructor(e,t,r=0){super(eo(e),`Firebase Storage: ${t} (${eo(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,pe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return eo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var fe;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(fe||(fe={}));function eo(n){return"storage/"+n}function Wo(){const n="An unknown error occurred, please check the error payload for server response.";return new pe(fe.UNKNOWN,n)}function lm(n){return new pe(fe.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function cm(n){return new pe(fe.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function um(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new pe(fe.UNAUTHENTICATED,n)}function hm(){return new pe(fe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function dm(n){return new pe(fe.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function fm(){return new pe(fe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function pm(){return new pe(fe.CANCELED,"User canceled the upload/download.")}function mm(n){return new pe(fe.INVALID_URL,"Invalid URL '"+n+"'.")}function gm(n){return new pe(fe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function ym(){return new pe(fe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+wu+"' property when initializing the app?")}function _m(){return new pe(fe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function vm(){return new pe(fe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function wm(n){return new pe(fe.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function To(n){return new pe(fe.INVALID_ARGUMENT,n)}function Tu(){return new pe(fe.APP_DELETED,"The Firebase app was deleted.")}function Tm(n){return new pe(fe.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Cr(n,e){return new pe(fe.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Tr(n){throw new pe(fe.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=$e.makeFromUrl(e,t)}catch{return new $e(e,"")}if(r.path==="")return r;throw gm(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(O){O.path.charAt(O.path.length-1)==="/"&&(O.path_=O.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),c={bucket:1,path:3};function h(O){O.path_=decodeURIComponent(O.path)}const f="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",T=new RegExp(`^https?://${m}/${f}/b/${i}/o${w}`,"i"),S={bucket:1,path:3},P=t===vu?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",R=new RegExp(`^https?://${P}/${i}/${k}`,"i"),x=[{regex:l,indices:c,postModify:s},{regex:T,indices:S,postModify:h},{regex:R,indices:{bucket:1,path:2},postModify:h}];for(let O=0;O<x.length;O++){const F=x[O],j=F.regex.exec(e);if(j){const A=j[F.indices.bucket];let g=j[F.indices.path];g||(g=""),r=new $e(A,g),F.postModify(r);break}}if(r==null)throw mm(e);return r}}class Em{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(n,e,t){let r=1,i=null,s=null,o=!1,l=0;function c(){return l===2}let h=!1;function f(...k){h||(h=!0,e.apply(null,k))}function m(k){i=setTimeout(()=>{i=null,n(T,c())},k)}function w(){s&&clearTimeout(s)}function T(k,...R){if(h){w();return}if(k){w(),f.call(null,k,...R);return}if(c()||o){w(),f.call(null,k,...R);return}r<64&&(r*=2);let x;l===1?(l=2,x=0):x=(r+Math.random())*1e3,m(x)}let S=!1;function P(k){S||(S=!0,w(),!h&&(i!==null?(k||(l=2),clearTimeout(i),m(0)):k||(l=1)))}return m(0),s=setTimeout(()=>{o=!0,P(!0)},t),P}function bm(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(n){return n!==void 0}function Am(n){return typeof n=="object"&&!Array.isArray(n)}function Ho(n){return typeof n=="string"||n instanceof String}function jl(n){return $o()&&n instanceof Blob}function $o(){return typeof Blob<"u"}function Gl(n,e,t,r){if(r<e)throw To(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw To(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function Eu(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(cn||(cn={}));/**
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
 */function Pm(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(e,t,r,i,s,o,l,c,h,f,m,w=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=c,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=m,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,S)=>{this.resolve_=T,this.reject_=S,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ii(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const c=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===cn.NO_ERROR,c=s.getStatus();if(!l||Pm(c,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===cn.ABORT;r(!1,new Ii(!1,null,f));return}const h=this.successCodes_.indexOf(c)!==-1;r(!0,new Ii(h,s))})},t=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());Sm(c)?s(c):s()}catch(c){o(c)}else if(l!==null){const c=Wo();c.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,c)):o(c)}else if(i.canceled){const c=this.appDelete_?Tu():pm();o(c)}else{const c=fm();o(c)}};this.canceled_?t(!1,new Ii(!1,null,!0)):this.backoffId_=Im(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&bm(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ii{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Cm(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function km(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function xm(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Nm(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Dm(n,e,t,r,i,s,o=!0){const l=Eu(n.urlParams),c=n.url+l,h=Object.assign({},n.headers);return xm(h,e),Cm(h,t),km(h,s),Nm(h,r),new Rm(c,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Lm(...n){const e=Om();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if($o())return new Blob(n);throw new pe(fe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Vm(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function Mm(n){if(typeof atob>"u")throw wm("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class to{constructor(e,t){this.data=e,this.contentType=t||null}}function Fm(n,e){switch(n){case it.RAW:return new to(Iu(e));case it.BASE64:case it.BASE64URL:return new to(bu(n,e));case it.DATA_URL:return new to(Bm(e),zm(e))}throw Wo()}function Iu(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=n.charCodeAt(++t);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Um(n){let e;try{e=decodeURIComponent(n)}catch{throw Cr(it.DATA_URL,"Malformed data URL.")}return Iu(e)}function bu(n,e){switch(n){case it.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Cr(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case it.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Cr(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Mm(e)}catch(i){throw i.message.includes("polyfill")?i:Cr(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class Su{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Cr(it.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=jm(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Bm(n){const e=new Su(n);return e.base64?bu(it.BASE64,e.rest):Um(e.rest)}function zm(n){return new Su(n).contentType}function jm(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t){let r=0,i="";jl(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(jl(this.data_)){const r=this.data_,i=Vm(r,e,t);return i===null?null:new Ut(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Ut(r,!0)}}static getBlob(...e){if($o()){const t=e.map(r=>r instanceof Ut?r.data_:r);return new Ut(Lm.apply(null,t))}else{const t=e.map(o=>Ho(o)?Fm(it.RAW,o).data:o.data_);let r=0;t.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(o=>{for(let l=0;l<o.length;l++)i[s++]=o[l]}),new Ut(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(n){let e;try{e=JSON.parse(n)}catch{return null}return Am(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function qm(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Pu(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(n,e){return e}class ze{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||Wm}}let bi=null;function Hm(n){return!Ho(n)||n.length<2?n:Pu(n)}function Ru(){if(bi)return bi;const n=[];n.push(new ze("bucket")),n.push(new ze("generation")),n.push(new ze("metageneration")),n.push(new ze("name","fullPath",!0));function e(s,o){return Hm(o)}const t=new ze("name");t.xform=e,n.push(t);function r(s,o){return o!==void 0?Number(o):o}const i=new ze("size");return i.xform=r,n.push(i),n.push(new ze("timeCreated")),n.push(new ze("updated")),n.push(new ze("md5Hash",null,!0)),n.push(new ze("cacheControl",null,!0)),n.push(new ze("contentDisposition",null,!0)),n.push(new ze("contentEncoding",null,!0)),n.push(new ze("contentLanguage",null,!0)),n.push(new ze("contentType",null,!0)),n.push(new ze("metadata","customMetadata",!0)),bi=n,bi}function $m(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new $e(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function Km(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const o=t[s];r[o.local]=o.xform(r,e[o.server])}return $m(r,n),r}function Cu(n,e,t){const r=Au(e);return r===null?null:Km(n,r,t)}function Qm(n,e,t,r){const i=Au(e);if(i===null||!Ho(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(h=>{const f=n.bucket,m=n.fullPath,w="/b/"+o(f)+"/o/"+o(m),T=us(w,t,r),S=Eu({alt:"media",token:h});return T+S})[0]}function Ym(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class Ko{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(n){if(!n)throw Wo()}function Xm(n,e){function t(r,i){const s=Cu(n,i,e);return ku(s!==null),s}return t}function Jm(n,e){function t(r,i){const s=Cu(n,i,e);return ku(s!==null),Qm(s,i,n.host,n._protocol)}return t}function xu(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=hm():i=um():t.getStatus()===402?i=cm(n.bucket):t.getStatus()===403?i=dm(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Nu(n){const e=xu(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=lm(n.path)),s.serverResponse=i.serverResponse,s}return t}function Zm(n,e,t){const r=e.fullServerUrl(),i=us(r,n.host,n._protocol),s="GET",o=n.maxOperationRetryTime,l=new Ko(i,s,Jm(n,t),o);return l.errorHandler=Nu(e),l}function eg(n,e){const t=e.fullServerUrl(),r=us(t,n.host,n._protocol),i="DELETE",s=n.maxOperationRetryTime;function o(c,h){}const l=new Ko(r,i,o,s);return l.successCodes=[200,204],l.errorHandler=Nu(e),l}function tg(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function ng(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=tg(null,e)),r}function rg(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function l(){let x="";for(let O=0;O<2;O++)x=x+Math.random().toString().slice(2);return x}const c=l();o["Content-Type"]="multipart/related; boundary="+c;const h=ng(e,r,i),f=Ym(h,t),m="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+c+`\r
Content-Type: `+h.contentType+`\r
\r
`,w=`\r
--`+c+"--",T=Ut.getBlob(m,r,w);if(T===null)throw _m();const S={name:h.fullPath},P=us(s,n.host,n._protocol),k="POST",R=n.maxUploadRetryTime,D=new Ko(P,k,Xm(n,t),R);return D.urlParams=S,D.headers=o,D.body=T.uploadData(),D.errorHandler=xu(e),D}class ig{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=cn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=cn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=cn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw Tr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Tr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Tr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Tr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Tr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class sg extends ig{initXhr(){this.xhr_.responseType="text"}}function Qo(){return new sg}/**
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
 */class fn{constructor(e,t){this._service=e,t instanceof $e?this._location=t:this._location=$e.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new fn(e,t)}get root(){const e=new $e(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Pu(this._location.path)}get storage(){return this._service}get parent(){const e=Gm(this._location.path);if(e===null)return null;const t=new $e(this._location.bucket,e);return new fn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Tm(e)}}function og(n,e,t){n._throwIfRoot("uploadBytes");const r=rg(n.storage,n._location,Ru(),new Ut(e,!0),t);return n.storage.makeRequestWithTokens(r,Qo).then(i=>({metadata:i,ref:n}))}function ag(n){n._throwIfRoot("getDownloadURL");const e=Zm(n.storage,n._location,Ru());return n.storage.makeRequestWithTokens(e,Qo).then(t=>{if(t===null)throw vm();return t})}function lg(n){n._throwIfRoot("deleteObject");const e=eg(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Qo)}function cg(n,e){const t=qm(n._location.path,e),r=new $e(n._location.bucket,t);return new fn(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ug(n){return/^[A-Za-z]+:\/\//.test(n)}function hg(n,e){return new fn(n,e)}function Du(n,e){if(n instanceof Yo){const t=n;if(t._bucket==null)throw ym();const r=new fn(t,t._bucket);return e!=null?Du(r,e):r}else return e!==void 0?cg(n,e):n}function dg(n,e){if(e&&ug(e)){if(n instanceof Yo)return hg(n,e);throw To("To use ref(service, url), the first argument must be a Storage instance.")}else return Du(n,e)}function ql(n,e){const t=e==null?void 0:e[wu];return t==null?null:$e.makeFromBucketSpec(t,n)}function fg(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:fu(i,n.app.options.projectId))}class Yo{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=vu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=om,this._maxUploadRetryTime=am,this._requests=new Set,i!=null?this._bucket=$e.makeFromBucketSpec(i,this._host):this._bucket=ql(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=$e.makeFromBucketSpec(this._url,e):this._bucket=ql(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Gl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Gl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new fn(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new Em(Tu());{const o=Dm(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const Wl="@firebase/storage",Hl="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou="storage";function pg(n,e,t){return n=ue(n),og(n,e,t)}function Lu(n){return n=ue(n),ag(n)}function mg(n){return n=ue(n),lg(n)}function Xo(n,e){return n=ue(n),dg(n,e)}function Jo(n=qo(),e){n=ue(n);const r=cs(n,Ou).getImmediate({identifier:e}),i=uu("storage");return i&&gg(r,...i),r}function gg(n,e,t,r={}){fg(n,e,t,r)}function yg(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Yo(t,r,i,e,wn)}function _g(){dn(new Qt(Ou,yg,"PUBLIC").setMultipleInstances(!0)),ot(Wl,Hl,""),ot(Wl,Hl,"esm2017")}_g();function Et(n,e){const t=Jo(),r=Xo(t,n);Lu(r).then(i=>{e.src=i,e.setAttribute("loading","lazy")}).catch(i=>{console.log(i)})}async function vg(n){let e="";const t=Jo(),r=Xo(t,`/users_avatar/${wg(n.name)}`);try{const i=await pg(r,n);return e=await Lu(i.ref),console.log(`File uploaded successfully. URL: ${e}`),e}catch(i){console.error(`Error uploading file: ${i}`)}return e}function wg(n){const e=kf(),t=n.split(".").pop();return`${e}.${t}`}function CE(n){const e=Jo(),t=Xo(e,n);mg(t).then(r=>{console.log(r)}).catch(r=>{console.log(r)})}function Tg(){Et("logo-1.svg",re(".header__center-logo")),Et("logo-1.svg",re(".burger__logo-img")),Et("user.svg",re(".header__top-img")),Et("user.svg",re(".burger__img")),Et("logo-1.svg",re(".footer__logo-img")),Et("gs://nuts-17b69.appspot.com/31318052.webp",re(".error__img"));const n=re(".popup__img","all"),e=["gs://nuts-17b69.appspot.com/product_card/box_cardboard_1.webp","gs://nuts-17b69.appspot.com/product_card/box_cardboard_2.webp","gs://nuts-17b69.appspot.com/product_card/box_cardboard_3.webp"];for(let i=0;i<n.length;i++)Et(e[i],n[i]);const t=re(".manufacturing__preview-img","all"),r=["gs://nuts-17b69.appspot.com/main_page/main_page-2.webp","gs://nuts-17b69.appspot.com/companies/companies_2.webp"];for(let i=0;i<t.length;i++)Et(r[i],t[i])}function $l(n){return n!==null&&typeof n=="object"&&"constructor"in n&&n.constructor===Object}function Zo(n,e){n===void 0&&(n={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{typeof n[t]>"u"?n[t]=e[t]:$l(e[t])&&$l(n[t])&&Object.keys(e[t]).length>0&&Zo(n[t],e[t])})}const Vu={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Yn(){const n=typeof document<"u"?document:{};return Zo(n,Vu),n}const Eg={document:Vu,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(n){return typeof setTimeout>"u"?(n(),null):setTimeout(n,0)},cancelAnimationFrame(n){typeof setTimeout>"u"||clearTimeout(n)}};function Qe(){const n=typeof window<"u"?window:{};return Zo(n,Eg),n}function Ig(n){return n===void 0&&(n=""),n.trim().split(" ").filter(e=>!!e.trim())}function bg(n){const e=n;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function Eo(n,e){return e===void 0&&(e=0),setTimeout(n,e)}function Hi(){return Date.now()}function Sg(n){const e=Qe();let t;return e.getComputedStyle&&(t=e.getComputedStyle(n,null)),!t&&n.currentStyle&&(t=n.currentStyle),t||(t=n.style),t}function Ag(n,e){e===void 0&&(e="x");const t=Qe();let r,i,s;const o=Sg(n);return t.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),s=new t.WebKitCSSMatrix(i==="none"?"":i)):(s=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?i=s.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),e==="y"&&(t.WebKitCSSMatrix?i=s.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Si(n){return typeof n=="object"&&n!==null&&n.constructor&&Object.prototype.toString.call(n).slice(8,-1)==="Object"}function Pg(n){return typeof window<"u"&&typeof window.HTMLElement<"u"?n instanceof HTMLElement:n&&(n.nodeType===1||n.nodeType===11)}function He(){const n=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const r=t<0||arguments.length<=t?void 0:arguments[t];if(r!=null&&!Pg(r)){const i=Object.keys(Object(r)).filter(s=>e.indexOf(s)<0);for(let s=0,o=i.length;s<o;s+=1){const l=i[s],c=Object.getOwnPropertyDescriptor(r,l);c!==void 0&&c.enumerable&&(Si(n[l])&&Si(r[l])?r[l].__swiper__?n[l]=r[l]:He(n[l],r[l]):!Si(n[l])&&Si(r[l])?(n[l]={},r[l].__swiper__?n[l]=r[l]:He(n[l],r[l])):n[l]=r[l])}}}return n}function Ai(n,e,t){n.style.setProperty(e,t)}function Mu(n){let{swiper:e,targetPosition:t,side:r}=n;const i=Qe(),s=-e.translate;let o=null,l;const c=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const h=t>s?"next":"prev",f=(w,T)=>h==="next"&&w>=T||h==="prev"&&w<=T,m=()=>{l=new Date().getTime(),o===null&&(o=l);const w=Math.max(Math.min((l-o)/c,1),0),T=.5-Math.cos(w*Math.PI)/2;let S=s+T*(t-s);if(f(S,t)&&(S=t),e.wrapperEl.scrollTo({[r]:S}),f(S,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:S})}),i.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=i.requestAnimationFrame(m)};m()}function st(n,e){e===void 0&&(e="");const t=[...n.children];return n instanceof HTMLSlotElement&&t.push(...n.assignedElements()),e?t.filter(r=>r.matches(e)):t}function Rg(n,e){const t=e.contains(n);return!t&&e instanceof HTMLSlotElement?[...e.assignedElements()].includes(n):t}function $i(n){try{console.warn(n);return}catch{}}function Ki(n,e){e===void 0&&(e=[]);const t=document.createElement(n);return t.classList.add(...Array.isArray(e)?e:Ig(e)),t}function Cg(n,e){const t=[];for(;n.previousElementSibling;){const r=n.previousElementSibling;e?r.matches(e)&&t.push(r):t.push(r),n=r}return t}function kg(n,e){const t=[];for(;n.nextElementSibling;){const r=n.nextElementSibling;e?r.matches(e)&&t.push(r):t.push(r),n=r}return t}function qt(n,e){return Qe().getComputedStyle(n,null).getPropertyValue(e)}function Kl(n){let e=n,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function xg(n,e){const t=[];let r=n.parentElement;for(;r;)t.push(r),r=r.parentElement;return t}function Ql(n,e,t){const r=Qe();return n[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function Tt(n){return(Array.isArray(n)?n:[n]).filter(e=>!!e)}let no;function Ng(){const n=Qe(),e=Yn();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in n||n.DocumentTouch&&e instanceof n.DocumentTouch)}}function Fu(){return no||(no=Ng()),no}let ro;function Dg(n){let{userAgent:e}=n===void 0?{}:n;const t=Fu(),r=Qe(),i=r.navigator.platform,s=e||r.navigator.userAgent,o={ios:!1,android:!1},l=r.screen.width,c=r.screen.height,h=s.match(/(Android);?[\s\/]+([\d.]+)?/);let f=s.match(/(iPad).*OS\s([\d_]+)/);const m=s.match(/(iPod)(.*OS\s([\d_]+))?/),w=!f&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),T=i==="Win32";let S=i==="MacIntel";const P=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!f&&S&&t.touch&&P.indexOf(`${l}x${c}`)>=0&&(f=s.match(/(Version)\/([\d.]+)/),f||(f=[0,1,"13_0_0"]),S=!1),h&&!T&&(o.os="android",o.android=!0),(f||w||m)&&(o.os="ios",o.ios=!0),o}function Uu(n){return n===void 0&&(n={}),ro||(ro=Dg(n)),ro}let io;function Og(){const n=Qe(),e=Uu();let t=!1;function r(){const l=n.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(n.navigator.userAgent);if(l.includes("Version/")){const[c,h]=l.split("Version/")[1].split(" ")[0].split(".").map(f=>Number(f));t=c<16||c===16&&h<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent),s=r(),o=s||i&&e.ios;return{isSafari:t||s,needPerspectiveFix:t,need3dFix:o,isWebView:i}}function Lg(){return io||(io=Og()),io}function Vg(n){let{swiper:e,on:t,emit:r}=n;const i=Qe();let s=null,o=null;const l=()=>{!e||e.destroyed||!e.initialized||(r("beforeResize"),r("resize"))},c=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(m=>{o=i.requestAnimationFrame(()=>{const{width:w,height:T}=e;let S=w,P=T;m.forEach(k=>{let{contentBoxSize:R,contentRect:D,target:x}=k;x&&x!==e.el||(S=D?D.width:(R[0]||R).inlineSize,P=D?D.height:(R[0]||R).blockSize)}),(S!==w||P!==T)&&l()})}),s.observe(e.el))},h=()=>{o&&i.cancelAnimationFrame(o),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},f=()=>{!e||e.destroyed||!e.initialized||r("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof i.ResizeObserver<"u"){c();return}i.addEventListener("resize",l),i.addEventListener("orientationchange",f)}),t("destroy",()=>{h(),i.removeEventListener("resize",l),i.removeEventListener("orientationchange",f)})}function Mg(n){let{swiper:e,extendParams:t,on:r,emit:i}=n;const s=[],o=Qe(),l=function(f,m){m===void 0&&(m={});const w=o.MutationObserver||o.WebkitMutationObserver,T=new w(S=>{if(e.__preventObserver__)return;if(S.length===1){i("observerUpdate",S[0]);return}const P=function(){i("observerUpdate",S[0])};o.requestAnimationFrame?o.requestAnimationFrame(P):o.setTimeout(P,0)});T.observe(f,{attributes:typeof m.attributes>"u"?!0:m.attributes,childList:e.isElement||(typeof m.childList>"u"?!0:m).childList,characterData:typeof m.characterData>"u"?!0:m.characterData}),s.push(T)},c=()=>{if(e.params.observer){if(e.params.observeParents){const f=xg(e.hostEl);for(let m=0;m<f.length;m+=1)l(f[m])}l(e.hostEl,{childList:e.params.observeSlideChildren}),l(e.wrapperEl,{attributes:!1})}},h=()=>{s.forEach(f=>{f.disconnect()}),s.splice(0,s.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",c),r("destroy",h)}var Fg={on(n,e,t){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const i=t?"unshift":"push";return n.split(" ").forEach(s=>{r.eventsListeners[s]||(r.eventsListeners[s]=[]),r.eventsListeners[s][i](e)}),r},once(n,e,t){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;function i(){r.off(n,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,o=new Array(s),l=0;l<s;l++)o[l]=arguments[l];e.apply(r,o)}return i.__emitterProxy=e,r.on(n,i,t)},onAny(n,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof n!="function")return t;const r=e?"unshift":"push";return t.eventsAnyListeners.indexOf(n)<0&&t.eventsAnyListeners[r](n),t},offAny(n){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(n);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(n,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||n.split(" ").forEach(r=>{typeof e>"u"?t.eventsListeners[r]=[]:t.eventsListeners[r]&&t.eventsListeners[r].forEach((i,s)=>{(i===e||i.__emitterProxy&&i.__emitterProxy===e)&&t.eventsListeners[r].splice(s,1)})}),t},emit(){const n=this;if(!n.eventsListeners||n.destroyed||!n.eventsListeners)return n;let e,t,r;for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return typeof s[0]=="string"||Array.isArray(s[0])?(e=s[0],t=s.slice(1,s.length),r=n):(e=s[0].events,t=s[0].data,r=s[0].context||n),t.unshift(r),(Array.isArray(e)?e:e.split(" ")).forEach(c=>{n.eventsAnyListeners&&n.eventsAnyListeners.length&&n.eventsAnyListeners.forEach(h=>{h.apply(r,[c,...t])}),n.eventsListeners&&n.eventsListeners[c]&&n.eventsListeners[c].forEach(h=>{h.apply(r,t)})}),n}};function Ug(){const n=this;let e,t;const r=n.el;typeof n.params.width<"u"&&n.params.width!==null?e=n.params.width:e=r.clientWidth,typeof n.params.height<"u"&&n.params.height!==null?t=n.params.height:t=r.clientHeight,!(e===0&&n.isHorizontal()||t===0&&n.isVertical())&&(e=e-parseInt(qt(r,"padding-left")||0,10)-parseInt(qt(r,"padding-right")||0,10),t=t-parseInt(qt(r,"padding-top")||0,10)-parseInt(qt(r,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(n,{width:e,height:t,size:n.isHorizontal()?e:t}))}function Bg(){const n=this;function e(_,E){return parseFloat(_.getPropertyValue(n.getDirectionLabel(E))||0)}const t=n.params,{wrapperEl:r,slidesEl:i,size:s,rtlTranslate:o,wrongRTL:l}=n,c=n.virtual&&t.virtual.enabled,h=c?n.virtual.slides.length:n.slides.length,f=st(i,`.${n.params.slideClass}, swiper-slide`),m=c?n.virtual.slides.length:f.length;let w=[];const T=[],S=[];let P=t.slidesOffsetBefore;typeof P=="function"&&(P=t.slidesOffsetBefore.call(n));let k=t.slidesOffsetAfter;typeof k=="function"&&(k=t.slidesOffsetAfter.call(n));const R=n.snapGrid.length,D=n.slidesGrid.length;let x=t.spaceBetween,O=-P,F=0,j=0;if(typeof s>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*s:typeof x=="string"&&(x=parseFloat(x)),n.virtualSize=-x,f.forEach(_=>{o?_.style.marginLeft="":_.style.marginRight="",_.style.marginBottom="",_.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(Ai(r,"--swiper-centered-offset-before",""),Ai(r,"--swiper-centered-offset-after",""));const A=t.grid&&t.grid.rows>1&&n.grid;A?n.grid.initSlides(f):n.grid&&n.grid.unsetSlides();let g;const y=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(_=>typeof t.breakpoints[_].slidesPerView<"u").length>0;for(let _=0;_<m;_+=1){g=0;let E;if(f[_]&&(E=f[_]),A&&n.grid.updateSlide(_,E,f),!(f[_]&&qt(E,"display")==="none")){if(t.slidesPerView==="auto"){y&&(f[_].style[n.getDirectionLabel("width")]="");const b=getComputedStyle(E),v=E.style.transform,$=E.style.webkitTransform;if(v&&(E.style.transform="none"),$&&(E.style.webkitTransform="none"),t.roundLengths)g=n.isHorizontal()?Ql(E,"width"):Ql(E,"height");else{const ie=e(b,"width"),we=e(b,"padding-left"),Ue=e(b,"padding-right"),Ie=e(b,"margin-left"),Ye=e(b,"margin-right"),Ze=b.getPropertyValue("box-sizing");if(Ze&&Ze==="border-box")g=ie+Ie+Ye;else{const{clientWidth:mt,offsetWidth:be}=E;g=ie+we+Ue+Ie+Ye+(be-mt)}}v&&(E.style.transform=v),$&&(E.style.webkitTransform=$),t.roundLengths&&(g=Math.floor(g))}else g=(s-(t.slidesPerView-1)*x)/t.slidesPerView,t.roundLengths&&(g=Math.floor(g)),f[_]&&(f[_].style[n.getDirectionLabel("width")]=`${g}px`);f[_]&&(f[_].swiperSlideSize=g),S.push(g),t.centeredSlides?(O=O+g/2+F/2+x,F===0&&_!==0&&(O=O-s/2-x),_===0&&(O=O-s/2-x),Math.abs(O)<1/1e3&&(O=0),t.roundLengths&&(O=Math.floor(O)),j%t.slidesPerGroup===0&&w.push(O),T.push(O)):(t.roundLengths&&(O=Math.floor(O)),(j-Math.min(n.params.slidesPerGroupSkip,j))%n.params.slidesPerGroup===0&&w.push(O),T.push(O),O=O+g+x),n.virtualSize+=g+x,F=g,j+=1}}if(n.virtualSize=Math.max(n.virtualSize,s)+k,o&&l&&(t.effect==="slide"||t.effect==="coverflow")&&(r.style.width=`${n.virtualSize+x}px`),t.setWrapperSize&&(r.style[n.getDirectionLabel("width")]=`${n.virtualSize+x}px`),A&&n.grid.updateWrapperSize(g,w),!t.centeredSlides){const _=[];for(let E=0;E<w.length;E+=1){let b=w[E];t.roundLengths&&(b=Math.floor(b)),w[E]<=n.virtualSize-s&&_.push(b)}w=_,Math.floor(n.virtualSize-s)-Math.floor(w[w.length-1])>1&&w.push(n.virtualSize-s)}if(c&&t.loop){const _=S[0]+x;if(t.slidesPerGroup>1){const E=Math.ceil((n.virtual.slidesBefore+n.virtual.slidesAfter)/t.slidesPerGroup),b=_*t.slidesPerGroup;for(let v=0;v<E;v+=1)w.push(w[w.length-1]+b)}for(let E=0;E<n.virtual.slidesBefore+n.virtual.slidesAfter;E+=1)t.slidesPerGroup===1&&w.push(w[w.length-1]+_),T.push(T[T.length-1]+_),n.virtualSize+=_}if(w.length===0&&(w=[0]),x!==0){const _=n.isHorizontal()&&o?"marginLeft":n.getDirectionLabel("marginRight");f.filter((E,b)=>!t.cssMode||t.loop?!0:b!==f.length-1).forEach(E=>{E.style[_]=`${x}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let _=0;S.forEach(b=>{_+=b+(x||0)}),_-=x;const E=_-s;w=w.map(b=>b<=0?-P:b>E?E+k:b)}if(t.centerInsufficientSlides){let _=0;S.forEach(b=>{_+=b+(x||0)}),_-=x;const E=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(_+E<s){const b=(s-_-E)/2;w.forEach((v,$)=>{w[$]=v-b}),T.forEach((v,$)=>{T[$]=v+b})}}if(Object.assign(n,{slides:f,snapGrid:w,slidesGrid:T,slidesSizesGrid:S}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){Ai(r,"--swiper-centered-offset-before",`${-w[0]}px`),Ai(r,"--swiper-centered-offset-after",`${n.size/2-S[S.length-1]/2}px`);const _=-n.snapGrid[0],E=-n.slidesGrid[0];n.snapGrid=n.snapGrid.map(b=>b+_),n.slidesGrid=n.slidesGrid.map(b=>b+E)}if(m!==h&&n.emit("slidesLengthChange"),w.length!==R&&(n.params.watchOverflow&&n.checkOverflow(),n.emit("snapGridLengthChange")),T.length!==D&&n.emit("slidesGridLengthChange"),t.watchSlidesProgress&&n.updateSlidesOffset(),n.emit("slidesUpdated"),!c&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const _=`${t.containerModifierClass}backface-hidden`,E=n.el.classList.contains(_);m<=t.maxBackfaceHiddenSlides?E||n.el.classList.add(_):E&&n.el.classList.remove(_)}}function zg(n){const e=this,t=[],r=e.virtual&&e.params.virtual.enabled;let i=0,s;typeof n=="number"?e.setTransition(n):n===!0&&e.setTransition(e.params.speed);const o=l=>r?e.slides[e.getSlideIndexByData(l)]:e.slides[l];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(l=>{t.push(l)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const l=e.activeIndex+s;if(l>e.slides.length&&!r)break;t.push(o(l))}else t.push(o(e.activeIndex));for(s=0;s<t.length;s+=1)if(typeof t[s]<"u"){const l=t[s].offsetHeight;i=l>i?l:i}(i||i===0)&&(e.wrapperEl.style.height=`${i}px`)}function jg(){const n=this,e=n.slides,t=n.isElement?n.isHorizontal()?n.wrapperEl.offsetLeft:n.wrapperEl.offsetTop:0;for(let r=0;r<e.length;r+=1)e[r].swiperSlideOffset=(n.isHorizontal()?e[r].offsetLeft:e[r].offsetTop)-t-n.cssOverflowAdjustment()}const Yl=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function Gg(n){n===void 0&&(n=this&&this.translate||0);const e=this,t=e.params,{slides:r,rtlTranslate:i,snapGrid:s}=e;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-n;i&&(o=n),e.visibleSlidesIndexes=[],e.visibleSlides=[];let l=t.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*e.size:typeof l=="string"&&(l=parseFloat(l));for(let c=0;c<r.length;c+=1){const h=r[c];let f=h.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(f-=r[0].swiperSlideOffset);const m=(o+(t.centeredSlides?e.minTranslate():0)-f)/(h.swiperSlideSize+l),w=(o-s[0]+(t.centeredSlides?e.minTranslate():0)-f)/(h.swiperSlideSize+l),T=-(o-f),S=T+e.slidesSizesGrid[c],P=T>=0&&T<=e.size-e.slidesSizesGrid[c],k=T>=0&&T<e.size-1||S>1&&S<=e.size||T<=0&&S>=e.size;k&&(e.visibleSlides.push(h),e.visibleSlidesIndexes.push(c)),Yl(h,k,t.slideVisibleClass),Yl(h,P,t.slideFullyVisibleClass),h.progress=i?-m:m,h.originalProgress=i?-w:w}}function qg(n){const e=this;if(typeof n>"u"){const f=e.rtlTranslate?-1:1;n=e&&e.translate&&e.translate*f||0}const t=e.params,r=e.maxTranslate()-e.minTranslate();let{progress:i,isBeginning:s,isEnd:o,progressLoop:l}=e;const c=s,h=o;if(r===0)i=0,s=!0,o=!0;else{i=(n-e.minTranslate())/r;const f=Math.abs(n-e.minTranslate())<1,m=Math.abs(n-e.maxTranslate())<1;s=f||i<=0,o=m||i>=1,f&&(i=0),m&&(i=1)}if(t.loop){const f=e.getSlideIndexByData(0),m=e.getSlideIndexByData(e.slides.length-1),w=e.slidesGrid[f],T=e.slidesGrid[m],S=e.slidesGrid[e.slidesGrid.length-1],P=Math.abs(n);P>=w?l=(P-w)/S:l=(P+S-T)/S,l>1&&(l-=1)}Object.assign(e,{progress:i,progressLoop:l,isBeginning:s,isEnd:o}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(n),s&&!c&&e.emit("reachBeginning toEdge"),o&&!h&&e.emit("reachEnd toEdge"),(c&&!s||h&&!o)&&e.emit("fromEdge"),e.emit("progress",i)}const so=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function Wg(){const n=this,{slides:e,params:t,slidesEl:r,activeIndex:i}=n,s=n.virtual&&t.virtual.enabled,o=n.grid&&t.grid&&t.grid.rows>1,l=m=>st(r,`.${t.slideClass}${m}, swiper-slide${m}`)[0];let c,h,f;if(s)if(t.loop){let m=i-n.virtual.slidesBefore;m<0&&(m=n.virtual.slides.length+m),m>=n.virtual.slides.length&&(m-=n.virtual.slides.length),c=l(`[data-swiper-slide-index="${m}"]`)}else c=l(`[data-swiper-slide-index="${i}"]`);else o?(c=e.filter(m=>m.column===i)[0],f=e.filter(m=>m.column===i+1)[0],h=e.filter(m=>m.column===i-1)[0]):c=e[i];c&&(o||(f=kg(c,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!f&&(f=e[0]),h=Cg(c,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!h===0&&(h=e[e.length-1]))),e.forEach(m=>{so(m,m===c,t.slideActiveClass),so(m,m===f,t.slideNextClass),so(m,m===h,t.slidePrevClass)}),n.emitSlidesClasses()}const Di=(n,e)=>{if(!n||n.destroyed||!n.params)return;const t=()=>n.isElement?"swiper-slide":`.${n.params.slideClass}`,r=e.closest(t());if(r){let i=r.querySelector(`.${n.params.lazyPreloaderClass}`);!i&&n.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},oo=(n,e)=>{if(!n.slides[e])return;const t=n.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},Io=n=>{if(!n||n.destroyed||!n.params)return;let e=n.params.lazyPreloadPrevNext;const t=n.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const r=n.params.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(n.params.slidesPerView),i=n.activeIndex;if(n.params.grid&&n.params.grid.rows>1){const o=i,l=[o-e];l.push(...Array.from({length:e}).map((c,h)=>o+r+h)),n.slides.forEach((c,h)=>{l.includes(c.column)&&oo(n,h)});return}const s=i+r-1;if(n.params.rewind||n.params.loop)for(let o=i-e;o<=s+e;o+=1){const l=(o%t+t)%t;(l<i||l>s)&&oo(n,l)}else for(let o=Math.max(i-e,0);o<=Math.min(s+e,t-1);o+=1)o!==i&&(o>s||o<i)&&oo(n,o)};function Hg(n){const{slidesGrid:e,params:t}=n,r=n.rtlTranslate?n.translate:-n.translate;let i;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?r>=e[s]&&r<e[s+1]-(e[s+1]-e[s])/2?i=s:r>=e[s]&&r<e[s+1]&&(i=s+1):r>=e[s]&&(i=s);return t.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function $g(n){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:r,params:i,activeIndex:s,realIndex:o,snapIndex:l}=e;let c=n,h;const f=T=>{let S=T-e.virtual.slidesBefore;return S<0&&(S=e.virtual.slides.length+S),S>=e.virtual.slides.length&&(S-=e.virtual.slides.length),S};if(typeof c>"u"&&(c=Hg(e)),r.indexOf(t)>=0)h=r.indexOf(t);else{const T=Math.min(i.slidesPerGroupSkip,c);h=T+Math.floor((c-T)/i.slidesPerGroup)}if(h>=r.length&&(h=r.length-1),c===s&&!e.params.loop){h!==l&&(e.snapIndex=h,e.emit("snapIndexChange"));return}if(c===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=f(c);return}const m=e.grid&&i.grid&&i.grid.rows>1;let w;if(e.virtual&&i.virtual.enabled&&i.loop)w=f(c);else if(m){const T=e.slides.filter(P=>P.column===c)[0];let S=parseInt(T.getAttribute("data-swiper-slide-index"),10);Number.isNaN(S)&&(S=Math.max(e.slides.indexOf(T),0)),w=Math.floor(S/i.grid.rows)}else if(e.slides[c]){const T=e.slides[c].getAttribute("data-swiper-slide-index");T?w=parseInt(T,10):w=c}else w=c;Object.assign(e,{previousSnapIndex:l,snapIndex:h,previousRealIndex:o,realIndex:w,previousIndex:s,activeIndex:c}),e.initialized&&Io(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==w&&e.emit("realIndexChange"),e.emit("slideChange"))}function Kg(n,e){const t=this,r=t.params;let i=n.closest(`.${r.slideClass}, swiper-slide`);!i&&t.isElement&&e&&e.length>1&&e.includes(n)&&[...e.slice(e.indexOf(n)+1,e.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let s=!1,o;if(i){for(let l=0;l<t.slides.length;l+=1)if(t.slides[l]===i){s=!0,o=l;break}}if(i&&s)t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=o;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}r.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var Qg={updateSize:Ug,updateSlides:Bg,updateAutoHeight:zg,updateSlidesOffset:jg,updateSlidesProgress:Gg,updateProgress:qg,updateSlidesClasses:Wg,updateActiveIndex:$g,updateClickedSlide:Kg};function Yg(n){n===void 0&&(n=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:r,translate:i,wrapperEl:s}=e;if(t.virtualTranslate)return r?-i:i;if(t.cssMode)return i;let o=Ag(s,n);return o+=e.cssOverflowAdjustment(),r&&(o=-o),o||0}function Xg(n,e){const t=this,{rtlTranslate:r,params:i,wrapperEl:s,progress:o}=t;let l=0,c=0;const h=0;t.isHorizontal()?l=r?-n:n:c=n,i.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?l:c,i.cssMode?s[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-l:-c:i.virtualTranslate||(t.isHorizontal()?l-=t.cssOverflowAdjustment():c-=t.cssOverflowAdjustment(),s.style.transform=`translate3d(${l}px, ${c}px, ${h}px)`);let f;const m=t.maxTranslate()-t.minTranslate();m===0?f=0:f=(n-t.minTranslate())/m,f!==o&&t.updateProgress(n),t.emit("setTranslate",t.translate,e)}function Jg(){return-this.snapGrid[0]}function Zg(){return-this.snapGrid[this.snapGrid.length-1]}function ey(n,e,t,r,i){n===void 0&&(n=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),r===void 0&&(r=!0);const s=this,{params:o,wrapperEl:l}=s;if(s.animating&&o.preventInteractionOnTransition)return!1;const c=s.minTranslate(),h=s.maxTranslate();let f;if(r&&n>c?f=c:r&&n<h?f=h:f=n,s.updateProgress(f),o.cssMode){const m=s.isHorizontal();if(e===0)l[m?"scrollLeft":"scrollTop"]=-f;else{if(!s.support.smoothScroll)return Mu({swiper:s,targetPosition:-f,side:m?"left":"top"}),!0;l.scrollTo({[m?"left":"top"]:-f,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(f),t&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(f),t&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(w){!s||s.destroyed||w.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,t&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var ty={getTranslate:Yg,setTranslate:Xg,minTranslate:Jg,maxTranslate:Zg,translateTo:ey};function ny(n,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${n}ms`,t.wrapperEl.style.transitionDelay=n===0?"0ms":""),t.emit("setTransition",n,e)}function Bu(n){let{swiper:e,runCallbacks:t,direction:r,step:i}=n;const{activeIndex:s,previousIndex:o}=e;let l=r;if(l||(s>o?l="next":s<o?l="prev":l="reset"),e.emit(`transition${i}`),t&&s!==o){if(l==="reset"){e.emit(`slideResetTransition${i}`);return}e.emit(`slideChangeTransition${i}`),l==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}function ry(n,e){n===void 0&&(n=!0);const t=this,{params:r}=t;r.cssMode||(r.autoHeight&&t.updateAutoHeight(),Bu({swiper:t,runCallbacks:n,direction:e,step:"Start"}))}function iy(n,e){n===void 0&&(n=!0);const t=this,{params:r}=t;t.animating=!1,!r.cssMode&&(t.setTransition(0),Bu({swiper:t,runCallbacks:n,direction:e,step:"End"}))}var sy={setTransition:ny,transitionStart:ry,transitionEnd:iy};function oy(n,e,t,r,i){n===void 0&&(n=0),t===void 0&&(t=!0),typeof n=="string"&&(n=parseInt(n,10));const s=this;let o=n;o<0&&(o=0);const{params:l,snapGrid:c,slidesGrid:h,previousIndex:f,activeIndex:m,rtlTranslate:w,wrapperEl:T,enabled:S}=s;if(!S&&!r&&!i||s.destroyed||s.animating&&l.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=s.params.speed);const P=Math.min(s.params.slidesPerGroupSkip,o);let k=P+Math.floor((o-P)/s.params.slidesPerGroup);k>=c.length&&(k=c.length-1);const R=-c[k];if(l.normalizeSlideIndex)for(let x=0;x<h.length;x+=1){const O=-Math.floor(R*100),F=Math.floor(h[x]*100),j=Math.floor(h[x+1]*100);typeof h[x+1]<"u"?O>=F&&O<j-(j-F)/2?o=x:O>=F&&O<j&&(o=x+1):O>=F&&(o=x)}if(s.initialized&&o!==m&&(!s.allowSlideNext&&(w?R>s.translate&&R>s.minTranslate():R<s.translate&&R<s.minTranslate())||!s.allowSlidePrev&&R>s.translate&&R>s.maxTranslate()&&(m||0)!==o))return!1;o!==(f||0)&&t&&s.emit("beforeSlideChangeStart"),s.updateProgress(R);let D;if(o>m?D="next":o<m?D="prev":D="reset",w&&-R===s.translate||!w&&R===s.translate)return s.updateActiveIndex(o),l.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),l.effect!=="slide"&&s.setTranslate(R),D!=="reset"&&(s.transitionStart(t,D),s.transitionEnd(t,D)),!1;if(l.cssMode){const x=s.isHorizontal(),O=w?R:-R;if(e===0){const F=s.virtual&&s.params.virtual.enabled;F&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),F&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{T[x?"scrollLeft":"scrollTop"]=O})):T[x?"scrollLeft":"scrollTop"]=O,F&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return Mu({swiper:s,targetPosition:O,side:x?"left":"top"}),!0;T.scrollTo({[x?"left":"top"]:O,behavior:"smooth"})}return!0}return s.setTransition(e),s.setTranslate(R),s.updateActiveIndex(o),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,r),s.transitionStart(t,D),e===0?s.transitionEnd(t,D):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(O){!s||s.destroyed||O.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(t,D))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function ay(n,e,t,r){n===void 0&&(n=0),t===void 0&&(t=!0),typeof n=="string"&&(n=parseInt(n,10));const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);const s=i.grid&&i.params.grid&&i.params.grid.rows>1;let o=n;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o=o+i.virtual.slidesBefore;else{let l;if(s){const w=o*i.params.grid.rows;l=i.slides.filter(T=>T.getAttribute("data-swiper-slide-index")*1===w)[0].column}else l=i.getSlideIndexByData(o);const c=s?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:h}=i.params;let f=i.params.slidesPerView;f==="auto"?f=i.slidesPerViewDynamic():(f=Math.ceil(parseFloat(i.params.slidesPerView,10)),h&&f%2===0&&(f=f+1));let m=c-l<f;if(h&&(m=m||l<Math.ceil(f/2)),r&&h&&i.params.slidesPerView!=="auto"&&!s&&(m=!1),m){const w=h?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:w,slideTo:!0,activeSlideIndex:w==="next"?l+1:l-c+1,slideRealIndex:w==="next"?i.realIndex:void 0})}if(s){const w=o*i.params.grid.rows;o=i.slides.filter(T=>T.getAttribute("data-swiper-slide-index")*1===w)[0].column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,e,t,r)}),i}function ly(n,e,t){e===void 0&&(e=!0);const r=this,{enabled:i,params:s,animating:o}=r;if(!i||r.destroyed)return r;typeof n>"u"&&(n=r.params.speed);let l=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const c=r.activeIndex<s.slidesPerGroupSkip?1:l,h=r.virtual&&s.virtual.enabled;if(s.loop){if(o&&!h&&s.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+c,n,e,t)}),!0}return s.rewind&&r.isEnd?r.slideTo(0,n,e,t):r.slideTo(r.activeIndex+c,n,e,t)}function cy(n,e,t){e===void 0&&(e=!0);const r=this,{params:i,snapGrid:s,slidesGrid:o,rtlTranslate:l,enabled:c,animating:h}=r;if(!c||r.destroyed)return r;typeof n>"u"&&(n=r.params.speed);const f=r.virtual&&i.virtual.enabled;if(i.loop){if(h&&!f&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const m=l?r.translate:-r.translate;function w(R){return R<0?-Math.floor(Math.abs(R)):Math.floor(R)}const T=w(m),S=s.map(R=>w(R));let P=s[S.indexOf(T)-1];if(typeof P>"u"&&i.cssMode){let R;s.forEach((D,x)=>{T>=D&&(R=x)}),typeof R<"u"&&(P=s[R>0?R-1:R])}let k=0;if(typeof P<"u"&&(k=o.indexOf(P),k<0&&(k=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(k=k-r.slidesPerViewDynamic("previous",!0)+1,k=Math.max(k,0))),i.rewind&&r.isBeginning){const R=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(R,n,e,t)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(k,n,e,t)}),!0;return r.slideTo(k,n,e,t)}function uy(n,e,t){e===void 0&&(e=!0);const r=this;if(!r.destroyed)return typeof n>"u"&&(n=r.params.speed),r.slideTo(r.activeIndex,n,e,t)}function hy(n,e,t,r){e===void 0&&(e=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof n>"u"&&(n=i.params.speed);let s=i.activeIndex;const o=Math.min(i.params.slidesPerGroupSkip,s),l=o+Math.floor((s-o)/i.params.slidesPerGroup),c=i.rtlTranslate?i.translate:-i.translate;if(c>=i.snapGrid[l]){const h=i.snapGrid[l],f=i.snapGrid[l+1];c-h>(f-h)*r&&(s+=i.params.slidesPerGroup)}else{const h=i.snapGrid[l-1],f=i.snapGrid[l];c-h<=(f-h)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,n,e,t)}function dy(){const n=this;if(n.destroyed)return;const{params:e,slidesEl:t}=n,r=e.slidesPerView==="auto"?n.slidesPerViewDynamic():e.slidesPerView;let i=n.clickedIndex,s;const o=n.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(n.animating)return;s=parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?i<n.loopedSlides-r/2||i>n.slides.length-n.loopedSlides+r/2?(n.loopFix(),i=n.getSlideIndex(st(t,`${o}[data-swiper-slide-index="${s}"]`)[0]),Eo(()=>{n.slideTo(i)})):n.slideTo(i):i>n.slides.length-r?(n.loopFix(),i=n.getSlideIndex(st(t,`${o}[data-swiper-slide-index="${s}"]`)[0]),Eo(()=>{n.slideTo(i)})):n.slideTo(i)}else n.slideTo(i)}var fy={slideTo:oy,slideToLoop:ay,slideNext:ly,slidePrev:cy,slideReset:uy,slideToClosest:hy,slideToClickedSlide:dy};function py(n){const e=this,{params:t,slidesEl:r}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;const i=()=>{st(r,`.${t.slideClass}, swiper-slide`).forEach((m,w)=>{m.setAttribute("data-swiper-slide-index",w)})},s=e.grid&&t.grid&&t.grid.rows>1,o=t.slidesPerGroup*(s?t.grid.rows:1),l=e.slides.length%o!==0,c=s&&e.slides.length%t.grid.rows!==0,h=f=>{for(let m=0;m<f;m+=1){const w=e.isElement?Ki("swiper-slide",[t.slideBlankClass]):Ki("div",[t.slideClass,t.slideBlankClass]);e.slidesEl.append(w)}};if(l){if(t.loopAddBlankSlides){const f=o-e.slides.length%o;h(f),e.recalcSlides(),e.updateSlides()}else $i("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(c){if(t.loopAddBlankSlides){const f=t.grid.rows-e.slides.length%t.grid.rows;h(f),e.recalcSlides(),e.updateSlides()}else $i("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();e.loopFix({slideRealIndex:n,direction:t.centeredSlides?void 0:"next"})}function my(n){let{slideRealIndex:e,slideTo:t=!0,direction:r,setTranslate:i,activeSlideIndex:s,byController:o,byMousewheel:l}=n===void 0?{}:n;const c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");const{slides:h,allowSlidePrev:f,allowSlideNext:m,slidesEl:w,params:T}=c,{centeredSlides:S}=T;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&T.virtual.enabled){t&&(!T.centeredSlides&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):T.centeredSlides&&c.snapIndex<T.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=f,c.allowSlideNext=m,c.emit("loopFix");return}let P=T.slidesPerView;P==="auto"?P=c.slidesPerViewDynamic():(P=Math.ceil(parseFloat(T.slidesPerView,10)),S&&P%2===0&&(P=P+1));const k=T.slidesPerGroupAuto?P:T.slidesPerGroup;let R=k;R%k!==0&&(R+=k-R%k),R+=T.loopAdditionalSlides,c.loopedSlides=R;const D=c.grid&&T.grid&&T.grid.rows>1;h.length<P+R?$i("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):D&&T.grid.fill==="row"&&$i("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const x=[],O=[];let F=c.activeIndex;typeof s>"u"?s=c.getSlideIndex(h.filter(v=>v.classList.contains(T.slideActiveClass))[0]):F=s;const j=r==="next"||!r,A=r==="prev"||!r;let g=0,y=0;const _=D?Math.ceil(h.length/T.grid.rows):h.length,b=(D?h[s].column:s)+(S&&typeof i>"u"?-P/2+.5:0);if(b<R){g=Math.max(R-b,k);for(let v=0;v<R-b;v+=1){const $=v-Math.floor(v/_)*_;if(D){const ie=_-$-1;for(let we=h.length-1;we>=0;we-=1)h[we].column===ie&&x.push(we)}else x.push(_-$-1)}}else if(b+P>_-R){y=Math.max(b-(_-R*2),k);for(let v=0;v<y;v+=1){const $=v-Math.floor(v/_)*_;D?h.forEach((ie,we)=>{ie.column===$&&O.push(we)}):O.push($)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),A&&x.forEach(v=>{h[v].swiperLoopMoveDOM=!0,w.prepend(h[v]),h[v].swiperLoopMoveDOM=!1}),j&&O.forEach(v=>{h[v].swiperLoopMoveDOM=!0,w.append(h[v]),h[v].swiperLoopMoveDOM=!1}),c.recalcSlides(),T.slidesPerView==="auto"?c.updateSlides():D&&(x.length>0&&A||O.length>0&&j)&&c.slides.forEach((v,$)=>{c.grid.updateSlide($,v,c.slides)}),T.watchSlidesProgress&&c.updateSlidesOffset(),t){if(x.length>0&&A){if(typeof e>"u"){const v=c.slidesGrid[F],ie=c.slidesGrid[F+g]-v;l?c.setTranslate(c.translate-ie):(c.slideTo(F+Math.ceil(g),0,!1,!0),i&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-ie,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-ie))}else if(i){const v=D?x.length/T.grid.rows:x.length;c.slideTo(c.activeIndex+v,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(O.length>0&&j)if(typeof e>"u"){const v=c.slidesGrid[F],ie=c.slidesGrid[F-y]-v;l?c.setTranslate(c.translate-ie):(c.slideTo(F-y,0,!1,!0),i&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-ie,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-ie))}else{const v=D?O.length/T.grid.rows:O.length;c.slideTo(c.activeIndex-v,0,!1,!0)}}if(c.allowSlidePrev=f,c.allowSlideNext=m,c.controller&&c.controller.control&&!o){const v={slideRealIndex:e,direction:r,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach($=>{!$.destroyed&&$.params.loop&&$.loopFix({...v,slideTo:$.params.slidesPerView===T.slidesPerView?t:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...v,slideTo:c.controller.control.params.slidesPerView===T.slidesPerView?t:!1})}c.emit("loopFix")}function gy(){const n=this,{params:e,slidesEl:t}=n;if(!e.loop||n.virtual&&n.params.virtual.enabled)return;n.recalcSlides();const r=[];n.slides.forEach(i=>{const s=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[s]=i}),n.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{t.append(i)}),n.recalcSlides(),n.slideTo(n.realIndex,0)}var yy={loopCreate:py,loopFix:my,loopDestroy:gy};function _y(n){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=n?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function vy(){const n=this;n.params.watchOverflow&&n.isLocked||n.params.cssMode||(n.isElement&&(n.__preventObserver__=!0),n[n.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1}))}var wy={setGrabCursor:_y,unsetGrabCursor:vy};function Ty(n,e){e===void 0&&(e=this);function t(r){if(!r||r===Yn()||r===Qe())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(n);return!i&&!r.getRootNode?null:i||t(r.getRootNode().host)}return t(e)}function Xl(n,e,t){const r=Qe(),{params:i}=n,s=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return s&&(t<=o||t>=r.innerWidth-o)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function Ey(n){const e=this,t=Yn();let r=n;r.originalEvent&&(r=r.originalEvent);const i=e.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Xl(e,r,r.targetTouches[0].pageX);return}const{params:s,touches:o,enabled:l}=e;if(!l||!s.simulateTouch&&r.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let c=r.target;if(s.touchEventsTarget==="wrapper"&&!Rg(c,e.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const h=!!s.noSwipingClass&&s.noSwipingClass!=="",f=r.composedPath?r.composedPath():r.path;h&&r.target&&r.target.shadowRoot&&f&&(c=f[0]);const m=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,w=!!(r.target&&r.target.shadowRoot);if(s.noSwiping&&(w?Ty(m,c):c.closest(m))){e.allowClick=!0;return}if(s.swipeHandler&&!c.closest(s.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;const T=o.currentX,S=o.currentY;if(!Xl(e,r,T))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=T,o.startY=S,i.touchStartTime=Hi(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let P=!0;c.matches(i.focusableElements)&&(P=!1,c.nodeName==="SELECT"&&(i.isTouched=!1)),t.activeElement&&t.activeElement.matches(i.focusableElements)&&t.activeElement!==c&&t.activeElement.blur();const k=P&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||k)&&!c.isContentEditable&&r.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",r)}function Iy(n){const e=Yn(),t=this,r=t.touchEventsData,{params:i,touches:s,rtlTranslate:o,enabled:l}=t;if(!l||!i.simulateTouch&&n.pointerType==="mouse")return;let c=n;if(c.originalEvent&&(c=c.originalEvent),c.type==="pointermove"&&(r.touchId!==null||c.pointerId!==r.pointerId))return;let h;if(c.type==="touchmove"){if(h=[...c.changedTouches].filter(j=>j.identifier===r.touchId)[0],!h||h.identifier!==r.touchId)return}else h=c;if(!r.isTouched){r.startMoving&&r.isScrolling&&t.emit("touchMoveOpposite",c);return}const f=h.pageX,m=h.pageY;if(c.preventedByNestedSwiper){s.startX=f,s.startY=m;return}if(!t.allowTouchMove){c.target.matches(r.focusableElements)||(t.allowClick=!1),r.isTouched&&(Object.assign(s,{startX:f,startY:m,currentX:f,currentY:m}),r.touchStartTime=Hi());return}if(i.touchReleaseOnEdges&&!i.loop){if(t.isVertical()){if(m<s.startY&&t.translate<=t.maxTranslate()||m>s.startY&&t.translate>=t.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(f<s.startX&&t.translate<=t.maxTranslate()||f>s.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&c.target===e.activeElement&&c.target.matches(r.focusableElements)){r.isMoved=!0,t.allowClick=!1;return}r.allowTouchCallbacks&&t.emit("touchMove",c),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=f,s.currentY=m;const w=s.currentX-s.startX,T=s.currentY-s.startY;if(t.params.threshold&&Math.sqrt(w**2+T**2)<t.params.threshold)return;if(typeof r.isScrolling>"u"){let j;t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:w*w+T*T>=25&&(j=Math.atan2(Math.abs(T),Math.abs(w))*180/Math.PI,r.isScrolling=t.isHorizontal()?j>i.touchAngle:90-j>i.touchAngle)}if(r.isScrolling&&t.emit("touchMoveOpposite",c),typeof r.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(r.startMoving=!0),r.isScrolling||c.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;t.allowClick=!1,!i.cssMode&&c.cancelable&&c.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&c.stopPropagation();let S=t.isHorizontal()?w:T,P=t.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(S=Math.abs(S)*(o?1:-1),P=Math.abs(P)*(o?1:-1)),s.diff=S,S*=i.touchRatio,o&&(S=-S,P=-P);const k=t.touchesDirection;t.swipeDirection=S>0?"prev":"next",t.touchesDirection=P>0?"prev":"next";const R=t.params.loop&&!i.cssMode,D=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!r.isMoved){if(R&&D&&t.loopFix({direction:t.swipeDirection}),r.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const j=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(j)}r.allowMomentumBounce=!1,i.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",c)}let x;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&k!==t.touchesDirection&&R&&D&&Math.abs(S)>=1){Object.assign(s,{startX:f,startY:m,currentX:f,currentY:m,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}t.emit("sliderMove",c),r.isMoved=!0,r.currentTranslate=S+r.startTranslate;let O=!0,F=i.resistanceRatio;if(i.touchReleaseOnEdges&&(F=0),S>0?(R&&D&&!x&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(i.slidesPerView!=="auto"&&t.slides.length-i.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>t.minTranslate()&&(O=!1,i.resistance&&(r.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+r.startTranslate+S)**F))):S<0&&(R&&D&&!x&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(i.slidesPerView!=="auto"&&t.slides.length-i.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(i.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<t.maxTranslate()&&(O=!1,i.resistance&&(r.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-r.startTranslate-S)**F))),O&&(c.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(S)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&t.freeMode||i.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(r.currentTranslate),t.setTranslate(r.currentTranslate))}function by(n){const e=this,t=e.touchEventsData;let r=n;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(F=>F.identifier===t.touchId)[0],!i||i.identifier!==t.touchId)return}else{if(t.touchId!==null||r.pointerId!==t.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:o,touches:l,rtlTranslate:c,slidesGrid:h,enabled:f}=e;if(!f||!o.simulateTouch&&r.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",r),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&o.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}o.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const m=Hi(),w=m-t.touchStartTime;if(e.allowClick){const F=r.path||r.composedPath&&r.composedPath();e.updateClickedSlide(F&&F[0]||r.target,F),e.emit("tap click",r),w<300&&m-t.lastClickTime<300&&e.emit("doubleTap doubleClick",r)}if(t.lastClickTime=Hi(),Eo(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||l.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let T;if(o.followFinger?T=c?e.translate:-e.translate:T=-t.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:T});return}const S=T>=-e.maxTranslate()&&!e.params.loop;let P=0,k=e.slidesSizesGrid[0];for(let F=0;F<h.length;F+=F<o.slidesPerGroupSkip?1:o.slidesPerGroup){const j=F<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof h[F+j]<"u"?(S||T>=h[F]&&T<h[F+j])&&(P=F,k=h[F+j]-h[F]):(S||T>=h[F])&&(P=F,k=h[h.length-1]-h[h.length-2])}let R=null,D=null;o.rewind&&(e.isBeginning?D=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(R=0));const x=(T-h[P])/k,O=P<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(w>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(x>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?R:P+O):e.slideTo(P)),e.swipeDirection==="prev"&&(x>1-o.longSwipesRatio?e.slideTo(P+O):D!==null&&x<0&&Math.abs(x)>o.longSwipesRatio?e.slideTo(D):e.slideTo(P))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(r.target===e.navigation.nextEl||r.target===e.navigation.prevEl)?r.target===e.navigation.nextEl?e.slideTo(P+O):e.slideTo(P):(e.swipeDirection==="next"&&e.slideTo(R!==null?R:P+O),e.swipeDirection==="prev"&&e.slideTo(D!==null?D:P))}}function Jl(){const n=this,{params:e,el:t}=n;if(t&&t.offsetWidth===0)return;e.breakpoints&&n.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=n,o=n.virtual&&n.params.virtual.enabled;n.allowSlideNext=!0,n.allowSlidePrev=!0,n.updateSize(),n.updateSlides(),n.updateSlidesClasses();const l=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&n.isEnd&&!n.isBeginning&&!n.params.centeredSlides&&!l?n.slideTo(n.slides.length-1,0,!1,!0):n.params.loop&&!o?n.slideToLoop(n.realIndex,0,!1,!0):n.slideTo(n.activeIndex,0,!1,!0),n.autoplay&&n.autoplay.running&&n.autoplay.paused&&(clearTimeout(n.autoplay.resizeTimeout),n.autoplay.resizeTimeout=setTimeout(()=>{n.autoplay&&n.autoplay.running&&n.autoplay.paused&&n.autoplay.resume()},500)),n.allowSlidePrev=i,n.allowSlideNext=r,n.params.watchOverflow&&s!==n.snapGrid&&n.checkOverflow()}function Sy(n){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&n.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(n.stopPropagation(),n.stopImmediatePropagation())))}function Ay(){const n=this,{wrapperEl:e,rtlTranslate:t,enabled:r}=n;if(!r)return;n.previousTranslate=n.translate,n.isHorizontal()?n.translate=-e.scrollLeft:n.translate=-e.scrollTop,n.translate===0&&(n.translate=0),n.updateActiveIndex(),n.updateSlidesClasses();let i;const s=n.maxTranslate()-n.minTranslate();s===0?i=0:i=(n.translate-n.minTranslate())/s,i!==n.progress&&n.updateProgress(t?-n.translate:n.translate),n.emit("setTranslate",n.translate,!1)}function Py(n){const e=this;Di(e,n.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function Ry(){const n=this;n.documentTouchHandlerProceeded||(n.documentTouchHandlerProceeded=!0,n.params.touchReleaseOnEdges&&(n.el.style.touchAction="auto"))}const zu=(n,e)=>{const t=Yn(),{params:r,el:i,wrapperEl:s,device:o}=n,l=!!r.nested,c=e==="on"?"addEventListener":"removeEventListener",h=e;!i||typeof i=="string"||(t[c]("touchstart",n.onDocumentTouchStart,{passive:!1,capture:l}),i[c]("touchstart",n.onTouchStart,{passive:!1}),i[c]("pointerdown",n.onTouchStart,{passive:!1}),t[c]("touchmove",n.onTouchMove,{passive:!1,capture:l}),t[c]("pointermove",n.onTouchMove,{passive:!1,capture:l}),t[c]("touchend",n.onTouchEnd,{passive:!0}),t[c]("pointerup",n.onTouchEnd,{passive:!0}),t[c]("pointercancel",n.onTouchEnd,{passive:!0}),t[c]("touchcancel",n.onTouchEnd,{passive:!0}),t[c]("pointerout",n.onTouchEnd,{passive:!0}),t[c]("pointerleave",n.onTouchEnd,{passive:!0}),t[c]("contextmenu",n.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[c]("click",n.onClick,!0),r.cssMode&&s[c]("scroll",n.onScroll),r.updateOnWindowResize?n[h](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Jl,!0):n[h]("observerUpdate",Jl,!0),i[c]("load",n.onLoad,{capture:!0}))};function Cy(){const n=this,{params:e}=n;n.onTouchStart=Ey.bind(n),n.onTouchMove=Iy.bind(n),n.onTouchEnd=by.bind(n),n.onDocumentTouchStart=Ry.bind(n),e.cssMode&&(n.onScroll=Ay.bind(n)),n.onClick=Sy.bind(n),n.onLoad=Py.bind(n),zu(n,"on")}function ky(){zu(this,"off")}var xy={attachEvents:Cy,detachEvents:ky};const Zl=(n,e)=>n.grid&&e.grid&&e.grid.rows>1;function Ny(){const n=this,{realIndex:e,initialized:t,params:r,el:i}=n,s=r.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const o=n.getBreakpoint(s,n.params.breakpointsBase,n.el);if(!o||n.currentBreakpoint===o)return;const c=(o in s?s[o]:void 0)||n.originalParams,h=Zl(n,r),f=Zl(n,c),m=n.params.grabCursor,w=c.grabCursor,T=r.enabled;h&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),n.emitContainerClasses()):!h&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(c.grid.fill&&c.grid.fill==="column"||!c.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),n.emitContainerClasses()),m&&!w?n.unsetGrabCursor():!m&&w&&n.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(x=>{if(typeof c[x]>"u")return;const O=r[x]&&r[x].enabled,F=c[x]&&c[x].enabled;O&&!F&&n[x].disable(),!O&&F&&n[x].enable()});const S=c.direction&&c.direction!==r.direction,P=r.loop&&(c.slidesPerView!==r.slidesPerView||S),k=r.loop;S&&t&&n.changeDirection(),He(n.params,c);const R=n.params.enabled,D=n.params.loop;Object.assign(n,{allowTouchMove:n.params.allowTouchMove,allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev}),T&&!R?n.disable():!T&&R&&n.enable(),n.currentBreakpoint=o,n.emit("_beforeBreakpoint",c),t&&(P?(n.loopDestroy(),n.loopCreate(e),n.updateSlides()):!k&&D?(n.loopCreate(e),n.updateSlides()):k&&!D&&n.loopDestroy()),n.emit("breakpoint",c)}function Dy(n,e,t){if(e===void 0&&(e="window"),!n||e==="container"&&!t)return;let r=!1;const i=Qe(),s=e==="window"?i.innerHeight:t.clientHeight,o=Object.keys(n).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const c=parseFloat(l.substr(1));return{value:s*c,point:l}}return{value:l,point:l}});o.sort((l,c)=>parseInt(l.value,10)-parseInt(c.value,10));for(let l=0;l<o.length;l+=1){const{point:c,value:h}=o[l];e==="window"?i.matchMedia(`(min-width: ${h}px)`).matches&&(r=c):h<=t.clientWidth&&(r=c)}return r||"max"}var Oy={setBreakpoint:Ny,getBreakpoint:Dy};function Ly(n,e){const t=[];return n.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&t.push(e+i)}):typeof r=="string"&&t.push(e+r)}),t}function Vy(){const n=this,{classNames:e,params:t,rtl:r,el:i,device:s}=n,o=Ly(["initialized",t.direction,{"free-mode":n.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:r},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...o),i.classList.add(...e),n.emitContainerClasses()}function My(){const n=this,{el:e,classNames:t}=n;!e||typeof e=="string"||(e.classList.remove(...t),n.emitContainerClasses())}var Fy={addClasses:Vy,removeClasses:My};function Uy(){const n=this,{isLocked:e,params:t}=n,{slidesOffsetBefore:r}=t;if(r){const i=n.slides.length-1,s=n.slidesGrid[i]+n.slidesSizesGrid[i]+r*2;n.isLocked=n.size>s}else n.isLocked=n.snapGrid.length===1;t.allowSlideNext===!0&&(n.allowSlideNext=!n.isLocked),t.allowSlidePrev===!0&&(n.allowSlidePrev=!n.isLocked),e&&e!==n.isLocked&&(n.isEnd=!1),e!==n.isLocked&&n.emit(n.isLocked?"lock":"unlock")}var By={checkOverflow:Uy},ec={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function zy(n,e){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],s=r[i];if(typeof s!="object"||s===null){He(e,r);return}if(n[i]===!0&&(n[i]={enabled:!0}),i==="navigation"&&n[i]&&n[i].enabled&&!n[i].prevEl&&!n[i].nextEl&&(n[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&n[i]&&n[i].enabled&&!n[i].el&&(n[i].auto=!0),!(i in n&&"enabled"in s)){He(e,r);return}typeof n[i]=="object"&&!("enabled"in n[i])&&(n[i].enabled=!0),n[i]||(n[i]={enabled:!1}),He(e,r)}}const ao={eventsEmitter:Fg,update:Qg,translate:ty,transition:sy,slide:fy,loop:yy,grabCursor:wy,events:xy,breakpoints:Oy,checkOverflow:By,classes:Fy},lo={};class We{constructor(){let e,t;for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?t=i[0]:[e,t]=i,t||(t={}),t=He({},t),e&&!t.el&&(t.el=e);const o=Yn();if(t.el&&typeof t.el=="string"&&o.querySelectorAll(t.el).length>1){const f=[];return o.querySelectorAll(t.el).forEach(m=>{const w=He({},t,{el:m});f.push(new We(w))}),f}const l=this;l.__swiper__=!0,l.support=Fu(),l.device=Uu({userAgent:t.userAgent}),l.browser=Lg(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],t.modules&&Array.isArray(t.modules)&&l.modules.push(...t.modules);const c={};l.modules.forEach(f=>{f({params:t,swiper:l,extendParams:zy(t,c),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const h=He({},ec,c);return l.params=He({},h,lo,t),l.originalParams=He({},l.params),l.passedParams=He({},t),l.params&&l.params.on&&Object.keys(l.params.on).forEach(f=>{l.on(f,l.params.on[f])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:r}=this,i=st(t,`.${r.slideClass}, swiper-slide`),s=Kl(i[0]);return Kl(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:r}=e;e.slides=st(t,`.${r.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const r=this;e=Math.min(Math.max(e,0),1);const i=r.minTranslate(),o=(r.maxTranslate()-i)*e+i;r.translateTo(o,typeof t>"u"?0:t),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(r=>{const i=e.getSlideClasses(r);t.push({slideEl:r,classNames:i}),e.emit("_slideClass",r,i)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const r=this,{params:i,slides:s,slidesGrid:o,slidesSizesGrid:l,size:c,activeIndex:h}=r;let f=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let m=s[h]?Math.ceil(s[h].swiperSlideSize):0,w;for(let T=h+1;T<s.length;T+=1)s[T]&&!w&&(m+=Math.ceil(s[T].swiperSlideSize),f+=1,m>c&&(w=!0));for(let T=h-1;T>=0;T-=1)s[T]&&!w&&(m+=s[T].swiperSlideSize,f+=1,m>c&&(w=!0))}else if(e==="current")for(let m=h+1;m<s.length;m+=1)(t?o[m]+l[m]-o[h]<c:o[m]-o[h]<c)&&(f+=1);else for(let m=h-1;m>=0;m-=1)o[h]-o[m]<c&&(f+=1);return f}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:r}=e;r.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Di(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function i(){const o=e.rtlTranslate?e.translate*-1:e.translate,l=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(l),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&e.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&e.isEnd&&!r.centeredSlides){const o=e.virtual&&r.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(o.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||i()}r.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const r=this,i=r.params.direction;return e||(e=i==="horizontal"?"vertical":"horizontal"),e===i||e!=="horizontal"&&e!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${e}`),r.emitContainerClasses(),r.params.direction=e,r.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),r.emit("changeDirection"),t&&r.update()),r}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let r=e||t.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=t,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):st(r,i())[0];return!o&&t.params.createElements&&(o=Ki("div",t.params.wrapperClass),r.append(o),st(r,`.${t.params.slideClass}`).forEach(l=>{o.append(l)})),Object.assign(t,{el:r,wrapperEl:o,slidesEl:t.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:o,hostEl:t.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||qt(r,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||qt(r,"direction")==="rtl"),wrongRTL:qt(o,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const i=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(s=>{s.complete?Di(t,s):s.addEventListener("load",o=>{Di(t,o.target)})}),Io(t),t.initialized=!0,Io(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const r=this,{params:i,el:s,wrapperEl:o,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),t&&(r.removeClasses(),s&&typeof s!="string"&&s.removeAttribute("style"),o&&o.removeAttribute("style"),l&&l.length&&l.forEach(c=>{c.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),c.removeAttribute("style"),c.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(c=>{r.off(c)}),e!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),bg(r)),r.destroyed=!0),null}static extendDefaults(e){He(lo,e)}static get extendedDefaults(){return lo}static get defaults(){return ec}static installModule(e){We.prototype.__modules__||(We.prototype.__modules__=[]);const t=We.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>We.installModule(t)),We):(We.installModule(e),We)}}Object.keys(ao).forEach(n=>{Object.keys(ao[n]).forEach(e=>{We.prototype[e]=ao[n][e]})});We.use([Vg,Mg]);function jy(n,e,t,r){return n.params.createElements&&Object.keys(r).forEach(i=>{if(!t[i]&&t.auto===!0){let s=st(n.el,`.${r[i]}`)[0];s||(s=Ki("div",r[i]),s.className=r[i],n.el.append(s)),t[i]=s,e[i]=s}}),t}function Gy(n){let{swiper:e,extendParams:t,on:r,emit:i}=n;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function s(S){let P;return S&&typeof S=="string"&&e.isElement&&(P=e.el.querySelector(S),P)?P:(S&&(typeof S=="string"&&(P=[...document.querySelectorAll(S)]),e.params.uniqueNavElements&&typeof S=="string"&&P&&P.length>1&&e.el.querySelectorAll(S).length===1?P=e.el.querySelector(S):P&&P.length===1&&(P=P[0])),S&&!P?S:P)}function o(S,P){const k=e.params.navigation;S=Tt(S),S.forEach(R=>{R&&(R.classList[P?"add":"remove"](...k.disabledClass.split(" ")),R.tagName==="BUTTON"&&(R.disabled=P),e.params.watchOverflow&&e.enabled&&R.classList[e.isLocked?"add":"remove"](k.lockClass))})}function l(){const{nextEl:S,prevEl:P}=e.navigation;if(e.params.loop){o(P,!1),o(S,!1);return}o(P,e.isBeginning&&!e.params.rewind),o(S,e.isEnd&&!e.params.rewind)}function c(S){S.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function h(S){S.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function f(){const S=e.params.navigation;if(e.params.navigation=jy(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(S.nextEl||S.prevEl))return;let P=s(S.nextEl),k=s(S.prevEl);Object.assign(e.navigation,{nextEl:P,prevEl:k}),P=Tt(P),k=Tt(k);const R=(D,x)=>{D&&D.addEventListener("click",x==="next"?h:c),!e.enabled&&D&&D.classList.add(...S.lockClass.split(" "))};P.forEach(D=>R(D,"next")),k.forEach(D=>R(D,"prev"))}function m(){let{nextEl:S,prevEl:P}=e.navigation;S=Tt(S),P=Tt(P);const k=(R,D)=>{R.removeEventListener("click",D==="next"?h:c),R.classList.remove(...e.params.navigation.disabledClass.split(" "))};S.forEach(R=>k(R,"next")),P.forEach(R=>k(R,"prev"))}r("init",()=>{e.params.navigation.enabled===!1?T():(f(),l())}),r("toEdge fromEdge lock unlock",()=>{l()}),r("destroy",()=>{m()}),r("enable disable",()=>{let{nextEl:S,prevEl:P}=e.navigation;if(S=Tt(S),P=Tt(P),e.enabled){l();return}[...S,...P].filter(k=>!!k).forEach(k=>k.classList.add(e.params.navigation.lockClass))}),r("click",(S,P)=>{let{nextEl:k,prevEl:R}=e.navigation;k=Tt(k),R=Tt(R);const D=P.target;let x=R.includes(D)||k.includes(D);if(e.isElement&&!x){const O=P.path||P.composedPath&&P.composedPath();O&&(x=O.find(F=>k.includes(F)||R.includes(F)))}if(e.params.navigation.hideOnClick&&!x){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===D||e.pagination.el.contains(D)))return;let O;k.length?O=k[0].classList.contains(e.params.navigation.hiddenClass):R.length&&(O=R[0].classList.contains(e.params.navigation.hiddenClass)),i(O===!0?"navigationShow":"navigationHide"),[...k,...R].filter(F=>!!F).forEach(F=>F.classList.toggle(e.params.navigation.hiddenClass))}});const w=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),f(),l()},T=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),m()};Object.assign(e.navigation,{enable:w,disable:T,update:l,init:f,destroy:m})}let ju=new Map,Vr=new Map,ea=new Map;function qy(n,e,t,r,i){for(let s=0;s<e.length;s++)new IntersectionObserver(l=>{l.forEach(c=>{c.isIntersecting&&(console.log("ok"),Wy(e,s,n,t,r,i))})},{rootMargin:"100px"}).observe(e[s])}function Wy(n,e,t,r,i,s){n[e].tagName.toLowerCase()!=="iframe"&&(ju.set(n[e],r[e]),Vr.set(n[e],i[e]),ea.set(n[e],new YT.Player(n[e],{videoId:t[e],playerVars:{controls:0,rel:0,fs:0,enablejsapi:1,modestbranding:1},events:{onReady:o=>$y(o,s,n[e]),onStateChange:o=>Hy(o,e,s,n[e])}})))}function Hy(n,e,t,r){tc(n,e,t,r),new IntersectionObserver(s=>{s.forEach(o=>{o.isIntersecting||(n.target.pauseVideo(),tc(n,e,t,r))})}).observe(ju.get(r))}function $y(n,e,t){Vr.get(t).addEventListener("click",()=>{Vr.get(t).classList.add(e),ea.get(t).playVideo()})}function tc(n,e,t,r){n.data==YT.PlayerState.PLAYING&&ea.forEach((i,s)=>{s!==r&&(i.pauseVideo(),Vr.get(s).classList.remove(t))}),(n.data==YT.PlayerState.ENDED||n.data==YT.PlayerState.PAUSED)&&Vr.get(r).classList.remove(t)}We.use([Gy]);function Ky(n,e,t,r,i,s=null,o=null,l=null,c=null,h=null,f=null){new We(n,{autoplay:{delay:500},slidesPerView:r,spaceBetween:i,breakpoints:s,loop:!0,navigation:{nextEl:t,prevEl:e},on:{init:m,slideChange:w=>{document.querySelectorAll(".swiper-slide").forEach(T=>{const S=T.querySelector("iframe");S&&S.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}}});function m(){o&&qy(l,o,c,h,f)}}async function Qy(n){Ky(re(".news-swiper__cards"),re(".news-swiper__prev-button"),re(".news-swiper__next-button"),null,0,{1920:{slidesPerView:3,spaceBetween:35},1440:{slidesPerView:3,spaceBetween:35},1140:{slidesPerView:3,spaceBetween:20},767:{slidesPerView:2,spaceBetween:20},375:{slidesPerView:1.4,spaceBetween:5},320:{slidesPerView:1.1,spaceBetween:5}})}function Yy(n,e){e.forEach(i=>{const s=i.querySelector(".select__svg"),o=i.querySelector(".select__header");i.addEventListener("click",l=>{const c=l.target.closest(".select__header"),h=l.target.closest(".select__item"),f=i.querySelector(".select__body");c&&t(c,f,s),h&&(t(o,f,s),n.forEach(m=>{m.textContent=h.textContent}))}),document.addEventListener("click",l=>{const c=i.querySelector(".select__body");i.contains(l.target)||r(o,c,s)})});function t(i,s,o){i.classList.toggle("select__header-active"),s.classList.toggle("select__body-active"),o.classList.toggle("select__svg-active")}function r(i,s,o){i.classList.remove("select__header-active"),s.classList.remove("select__body-active"),o.classList.remove("select__svg-active")}}function Xy(){Yy(re(".header__select-language","all"),re(".header__select","all"))}function ta(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Gu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Jy=Gu,qu=new qr("auth","Firebase",Gu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi=new jo("@firebase/auth");function Zy(n,...e){Qi.logLevel<=Z.WARN&&Qi.warn(`Auth (${wn}): ${n}`,...e)}function Oi(n,...e){Qi.logLevel<=Z.ERROR&&Qi.error(`Auth (${wn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(n,...e){throw na(n,...e)}function at(n,...e){return na(n,...e)}function Wu(n,e,t){const r=Object.assign(Object.assign({},Jy()),{[e]:t});return new qr("auth","Firebase",r).create(e,{appName:n.name})}function At(n){return Wu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function na(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return qu.create(n,...e)}function K(n,e,...t){if(!n)throw na(e,...t)}function It(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Oi(e),new Error(e)}function Rt(n,e){n||It(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function e_(){return nc()==="http:"||nc()==="https:"}function nc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(e_()||zf()||"connection"in navigator)?navigator.onLine:!0}function n_(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rt(t>e,"Short delay should be less than long delay!"),this.isMobile=Uf()||jf()}get(){return t_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(n,e){Rt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;It("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;It("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;It("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=new Hr(3e4,6e4);function Zt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Nt(n,e,t,r,i={}){return $u(n,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Wr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Hu.fetch()(Ku(n,n.config.apiHost,t,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function $u(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},r_),e);try{const i=new o_(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Pi(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Pi(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Pi(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw Pi(n,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Wu(n,f,h);tt(n,f)}}catch(i){if(i instanceof pt)throw i;tt(n,"network-request-failed",{message:String(i)})}}async function $r(n,e,t,r,i={}){const s=await Nt(n,e,t,r,i);return"mfaPendingCredential"in s&&tt(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Ku(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?ra(n.config,i):`${n.config.apiScheme}://${i}`}function s_(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class o_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(at(this.auth,"network-request-failed")),i_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Pi(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=at(n,e,r);return i.customData._tokenResponse=t,i}function rc(n){return n!==void 0&&n.enterprise!==void 0}class a_{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return s_(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function l_(n,e){return Nt(n,"GET","/v2/recaptchaConfig",Zt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function c_(n,e){return Nt(n,"POST","/v1/accounts:delete",e)}async function Qu(n,e){return Nt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function u_(n,e=!1){const t=ue(n),r=await t.getIdToken(e),i=ia(r);K(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:kr(co(i.auth_time)),issuedAtTime:kr(co(i.iat)),expirationTime:kr(co(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function co(n){return Number(n)*1e3}function ia(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Oi("JWT malformed, contained fewer than 3 sections"),null;try{const i=lu(t);return i?JSON.parse(i):(Oi("Failed to decode base64 JWT payload"),null)}catch(i){return Oi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ic(n){const e=ia(n);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof pt&&h_(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function h_({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=kr(this.lastLoginAt),this.creationTime=kr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yi(n){var e;const t=n.auth,r=await n.getIdToken(),i=await jn(n,Qu(t,{idToken:r}));K(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Yu(s.providerUserInfo):[],l=p_(n.providerData,o),c=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new So(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function f_(n){const e=ue(n);await Yi(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function p_(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Yu(n){return n.map(e=>{var{providerId:t}=e,r=ta(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m_(n,e){const t=await $u(n,{},async()=>{const r=Wr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Ku(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Hu.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function g_(n,e){return Nt(n,"POST","/v2/accounts:revokeToken",Zt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ic(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){K(e.length!==0,"internal-error");const t=ic(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(K(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await m_(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,o=new Fn;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fn,this.toJSON())}_performRefresh(){return It("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(n,e){K(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class bt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=ta(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new d_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new So(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await jn(this,this.stsTokenManager.getToken(this.auth,e));return K(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return u_(this,e)}reload(){return f_(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new bt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Yi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(rt(this.auth.app))return Promise.reject(At(this.auth));const e=await this.getIdToken();return await jn(this,c_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,o,l,c,h,f;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,w=(i=t.email)!==null&&i!==void 0?i:void 0,T=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,S=(o=t.photoURL)!==null&&o!==void 0?o:void 0,P=(l=t.tenantId)!==null&&l!==void 0?l:void 0,k=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,R=(h=t.createdAt)!==null&&h!==void 0?h:void 0,D=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:x,emailVerified:O,isAnonymous:F,providerData:j,stsTokenManager:A}=t;K(x&&A,e,"internal-error");const g=Fn.fromJSON(this.name,A);K(typeof x=="string",e,"internal-error"),Ft(m,e.name),Ft(w,e.name),K(typeof O=="boolean",e,"internal-error"),K(typeof F=="boolean",e,"internal-error"),Ft(T,e.name),Ft(S,e.name),Ft(P,e.name),Ft(k,e.name),Ft(R,e.name),Ft(D,e.name);const y=new bt({uid:x,auth:e,email:w,emailVerified:O,displayName:m,isAnonymous:F,photoURL:S,phoneNumber:T,tenantId:P,stsTokenManager:g,createdAt:R,lastLoginAt:D});return j&&Array.isArray(j)&&(y.providerData=j.map(_=>Object.assign({},_))),k&&(y._redirectEventId=k),y}static async _fromIdTokenResponse(e,t,r=!1){const i=new Fn;i.updateFromServerResponse(t);const s=new bt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Yi(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];K(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Yu(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Fn;l.updateFromIdToken(r);const c=new bt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new So(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc=new Map;function St(n){Rt(n instanceof Function,"Expected a class definition");let e=sc.get(n);return e?(Rt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,sc.set(n,e),e)}/**
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
 */class Xu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Xu.type="NONE";const oc=Xu;/**
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
 */function Li(n,e,t){return`firebase:${n}:${e}:${t}`}class Un{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Li(this.userKey,i.apiKey,s),this.fullPersistenceKey=Li("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?bt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Un(St(oc),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||St(oc);const o=Li(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(o);if(f){const m=bt._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Un(s,e,r):(s=c[0],l&&await s._set(o,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new Un(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(eh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ju(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(nh(e))return"Blackberry";if(rh(e))return"Webos";if(sa(e))return"Safari";if((e.includes("chrome/")||Zu(e))&&!e.includes("edge/"))return"Chrome";if(th(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ju(n=xe()){return/firefox\//i.test(n)}function sa(n=xe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zu(n=xe()){return/crios\//i.test(n)}function eh(n=xe()){return/iemobile/i.test(n)}function th(n=xe()){return/android/i.test(n)}function nh(n=xe()){return/blackberry/i.test(n)}function rh(n=xe()){return/webos/i.test(n)}function hs(n=xe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function y_(n=xe()){var e;return hs(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function __(){return Gf()&&document.documentMode===10}function ih(n=xe()){return hs(n)||th(n)||rh(n)||nh(n)||/windows phone/i.test(n)||eh(n)}function v_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(n,e=[]){let t;switch(n){case"Browser":t=ac(xe());break;case"Worker":t=`${ac(xe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${wn}/${r}`}/**
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
 */class w_{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((o,l)=>{try{const c=e(s);o(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function T_(n,e={}){return Nt(n,"GET","/v2/passwordPolicy",Zt(n,e))}/**
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
 */const E_=6;class I_{constructor(e){var t,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:E_,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,o,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lc(this),this.idTokenSubscription=new lc(this),this.beforeStateQueue=new w_(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=qu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=St(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Un.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Qu(this,{idToken:e}),r=await bt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(rt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yi(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=n_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(rt(this.app))return Promise.reject(At(this));const t=e?ue(e):null;return t&&K(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return rt(this.app)?Promise.reject(At(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return rt(this.app)?Promise.reject(At(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(St(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await T_(this),t=new I_(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new qr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await g_(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&St(e)||this._popupRedirectResolver;K(t,this,"argument-error"),this.redirectPersistenceManager=await Un.create(this,[St(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=sh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Zy(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Tn(n){return ue(n)}class lc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xf(t=>this.observer=t)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ds={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function S_(n){ds=n}function oh(n){return ds.loadJS(n)}function A_(){return ds.recaptchaEnterpriseScript}function P_(){return ds.gapiScript}function R_(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const C_="recaptcha-enterprise",k_="NO_RECAPTCHA";class x_{constructor(e){this.type=C_,this.auth=Tn(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{l_(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new a_(c);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(c=>{l(c)})})}function i(s,o,l){const c=window.grecaptcha;rc(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(k_)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!t&&rc(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=A_();c.length!==0&&(c+=l),oh(c).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function cc(n,e,t,r=!1){const i=new x_(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ao(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await cc(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await cc(n,e,t,t==="getOobCode");return r(n,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(n,e){const t=cs(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(qi(s,e??{}))return i;tt(i,"already-initialized")}return t.initialize({options:e})}function D_(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(St);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function O_(n,e,t){const r=Tn(n);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=ah(e),{host:o,port:l}=L_(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),V_()}function ah(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function L_(n){const e=ah(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:uc(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:uc(o)}}}function uc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function V_(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return It("not implemented")}_getIdTokenResponse(e){return It("not implemented")}_linkToIdToken(e,t){return It("not implemented")}_getReauthenticationResolver(e){return It("not implemented")}}async function M_(n,e){return Nt(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F_(n,e){return $r(n,"POST","/v1/accounts:signInWithPassword",Zt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U_(n,e){return $r(n,"POST","/v1/accounts:signInWithEmailLink",Zt(n,e))}async function B_(n,e){return $r(n,"POST","/v1/accounts:signInWithEmailLink",Zt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr extends oa{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Mr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Mr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ao(e,t,"signInWithPassword",F_);case"emailLink":return U_(e,{email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ao(e,r,"signUpPassword",M_);case"emailLink":return B_(e,{idToken:t,email:this._email,oobCode:this._password});default:tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bn(n,e){return $r(n,"POST","/v1/accounts:signInWithIdp",Zt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z_="http://localhost";class pn extends oa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):tt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=ta(t,["providerId","signInMethod"]);if(!r||!i)return null;const o=new pn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Bn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Bn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Bn(e,t)}buildRequest(){const e={requestUri:z_,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Wr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function G_(n){const e=Ir(br(n)).link,t=e?Ir(br(e)).deep_link_id:null,r=Ir(br(n)).deep_link_id;return(r?Ir(br(r)).link:null)||r||t||e||n}class aa{constructor(e){var t,r,i,s,o,l;const c=Ir(br(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,m=j_((i=c.mode)!==null&&i!==void 0?i:null);K(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=G_(e);try{return new aa(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(){this.providerId=Xn.PROVIDER_ID}static credential(e,t){return Mr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=aa.parseLink(t);return K(r,"argument-error"),Mr._fromEmailAndCode(e,r.code,r.tenantId)}}Xn.PROVIDER_ID="password";Xn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Xn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Kr extends lh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Kr{constructor(){super("facebook.com")}static credential(e){return pn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Kr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return zt.credential(t,r)}catch{return null}}}zt.GOOGLE_SIGN_IN_METHOD="google.com";zt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt extends Kr{constructor(){super("github.com")}static credential(e){return pn._fromParams({providerId:jt.PROVIDER_ID,signInMethod:jt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return jt.credentialFromTaggedObject(e)}static credentialFromError(e){return jt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return jt.credential(e.oauthAccessToken)}catch{return null}}}jt.GITHUB_SIGN_IN_METHOD="github.com";jt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt extends Kr{constructor(){super("twitter.com")}static credential(e,t){return pn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Gt.credential(t,r)}catch{return null}}}Gt.TWITTER_SIGN_IN_METHOD="twitter.com";Gt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q_(n,e){return $r(n,"POST","/v1/accounts:signUp",Zt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await bt._fromIdTokenResponse(e,r,i),o=hc(r);return new mn({user:s,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=hc(r);return new mn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function hc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi extends pt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Xi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Xi(e,t,r,i)}}function ch(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Xi._fromErrorAndOperation(n,s,e,r):s})}async function W_(n,e,t=!1){const r=await jn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return mn._forOperation(n,"link",r)}/**
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
 */async function H_(n,e,t=!1){const{auth:r}=n;if(rt(r.app))return Promise.reject(At(r));const i="reauthenticate";try{const s=await jn(n,ch(r,i,e,n),t);K(s.idToken,r,"internal-error");const o=ia(s.idToken);K(o,r,"internal-error");const{sub:l}=o;return K(n.uid===l,r,"user-mismatch"),mn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uh(n,e,t=!1){if(rt(n.app))return Promise.reject(At(n));const r="signIn",i=await ch(n,r,e),s=await mn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function $_(n,e){return uh(Tn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hh(n){const e=Tn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function K_(n,e,t){if(rt(n.app))return Promise.reject(At(n));const r=Tn(n),o=await Ao(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",q_).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&hh(n),c}),l=await mn._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Q_(n,e,t){return rt(n.app)?Promise.reject(At(n)):$_(ue(n),Xn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&hh(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y_(n,e){return Nt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dh(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ue(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await jn(r,Y_(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function X_(n,e,t,r){return ue(n).onIdTokenChanged(e,t,r)}function J_(n,e,t){return ue(n).beforeAuthStateChanged(e,t)}function Z_(n,e,t,r){return ue(n).onAuthStateChanged(e,t,r)}function ev(n){return ue(n).signOut()}const Ji="__sak";/**
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
 */class fh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ji,"1"),this.storage.removeItem(Ji),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(){const n=xe();return sa(n)||hs(n)}const nv=1e3,rv=10;class ph extends fh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=tv()&&v_(),this.fallbackToPolling=ih(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,l,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);__()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,rv):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},nv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ph.type="LOCAL";const iv=ph;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh extends fh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}mh.type="SESSION";const gh=mh;/**
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
 */function sv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class fs{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new fs(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(t.origin,s)),c=await sv(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}fs.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class ov{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,c)=>{const h=la("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(m){const w=m;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(w.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lt(){return window}function av(n){lt().location.href=n}/**
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
 */function yh(){return typeof lt().WorkerGlobalScope<"u"&&typeof lt().importScripts=="function"}async function lv(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cv(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function uv(){return yh()?self:null}/**
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
 */const _h="firebaseLocalStorageDb",hv=1,Zi="firebaseLocalStorage",vh="fbase_key";class Qr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function ps(n,e){return n.transaction([Zi],e?"readwrite":"readonly").objectStore(Zi)}function dv(){const n=indexedDB.deleteDatabase(_h);return new Qr(n).toPromise()}function Po(){const n=indexedDB.open(_h,hv);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Zi,{keyPath:vh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Zi)?e(r):(r.close(),await dv(),e(await Po()))})})}async function dc(n,e,t){const r=ps(n,!0).put({[vh]:e,value:t});return new Qr(r).toPromise()}async function fv(n,e){const t=ps(n,!1).get(e),r=await new Qr(t).toPromise();return r===void 0?null:r.value}function fc(n,e){const t=ps(n,!0).delete(e);return new Qr(t).toPromise()}const pv=800,mv=3;class wh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Po(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>mv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=fs._getInstance(uv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await lv(),!this.activeServiceWorker)return;this.sender=new ov(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Po();return await dc(e,Ji,"1"),await fc(e,Ji),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>dc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>fv(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>fc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=ps(i,!1).getAll();return new Qr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}wh.type="LOCAL";const gv=wh;new Hr(3e4,6e4);/**
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
 */function yv(n,e){return e?St(e):(K(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ca extends oa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Bn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Bn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Bn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function _v(n){return uh(n.auth,new ca(n),n.bypassAuthState)}function vv(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),H_(t,new ca(n),n.bypassAuthState)}async function wv(n){const{auth:e,user:t}=n;return K(t,e,"internal-error"),W_(t,new ca(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _v;case"linkViaPopup":case"linkViaRedirect":return wv;case"reauthViaPopup":case"reauthViaRedirect":return vv;default:tt(this.auth,"internal-error")}}resolve(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tv=new Hr(2e3,1e4);class Mn extends Th{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Mn.currentPopupAction&&Mn.currentPopupAction.cancel(),Mn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){Rt(this.filter.length===1,"Popup operations only handle one event");const e=la();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(at(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(at(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(at(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Tv.get())};e()}}Mn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ev="pendingRedirect",Vi=new Map;class Iv extends Th{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Vi.get(this.auth._key());if(!e){try{const r=await bv(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Vi.set(this.auth._key(),e)}return this.bypassAuthState||Vi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bv(n,e){const t=Pv(e),r=Av(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Sv(n,e){Vi.set(n._key(),e)}function Av(n){return St(n._redirectPersistence)}function Pv(n){return Li(Ev,n.config.apiKey,n.name)}async function Rv(n,e,t=!1){if(rt(n.app))return Promise.reject(At(n));const r=Tn(n),i=yv(r,e),o=await new Iv(r,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv=10*60*1e3;class kv{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xv(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Eh(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(at(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Cv&&this.cachedEventUids.clear(),this.cachedEventUids.has(pc(e))}saveEventToCache(e){this.cachedEventUids.add(pc(e)),this.lastProcessedEventTime=Date.now()}}function pc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Eh({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xv(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Eh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nv(n,e={}){return Nt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dv=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ov=/^https?/;async function Lv(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Nv(n);for(const t of e)try{if(Vv(t))return}catch{}tt(n,"unauthorized-domain")}function Vv(n){const e=bo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!Ov.test(t))return!1;if(Dv.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Mv=new Hr(3e4,6e4);function mc(){const n=lt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Fv(n){return new Promise((e,t)=>{var r,i,s;function o(){mc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{mc(),t(at(n,"network-request-failed"))},timeout:Mv.get()})}if(!((i=(r=lt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=lt().gapi)===null||s===void 0)&&s.load)o();else{const l=R_("iframefcb");return lt()[l]=()=>{gapi.load?o():t(at(n,"network-request-failed"))},oh(`${P_()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Mi=null,e})}let Mi=null;function Uv(n){return Mi=Mi||Fv(n),Mi}/**
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
 */const Bv=new Hr(5e3,15e3),zv="__/auth/iframe",jv="emulator/auth/iframe",Gv={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qv=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wv(n){const e=n.config;K(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ra(e,jv):`https://${n.config.authDomain}/${zv}`,r={apiKey:e.apiKey,appName:n.name,v:wn},i=qv.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Wr(r).slice(1)}`}async function Hv(n){const e=await Uv(n),t=lt().gapi;return K(t,n,"internal-error"),e.open({where:document.body,url:Wv(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Gv,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=at(n,"network-request-failed"),l=lt().setTimeout(()=>{s(o)},Bv.get());function c(){lt().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
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
 */const $v={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Kv=500,Qv=600,Yv="_blank",Xv="http://localhost";class gc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Jv(n,e,t,r=Kv,i=Qv){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},$v),{width:r.toString(),height:i.toString(),top:s,left:o}),h=xe().toLowerCase();t&&(l=Zu(h)?Yv:t),Ju(h)&&(e=e||Xv,c.scrollbars="yes");const f=Object.entries(c).reduce((w,[T,S])=>`${w}${T}=${S},`,"");if(y_(h)&&l!=="_self")return Zv(e||"",l),new gc(null);const m=window.open(e||"",l,f);K(m,n,"popup-blocked");try{m.focus()}catch{}return new gc(m)}function Zv(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const ew="__/auth/handler",tw="emulator/auth/handler",nw=encodeURIComponent("fac");async function yc(n,e,t,r,i,s){K(n.config.authDomain,n,"auth-domain-config-required"),K(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:wn,eventId:i};if(e instanceof lh){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Yf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Kr){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}n.tenantId&&(o.tid=n.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${nw}=${encodeURIComponent(c)}`:"";return`${rw(n)}?${Wr(l).slice(1)}${h}`}function rw({config:n}){return n.emulator?ra(n,tw):`https://${n.authDomain}/${ew}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo="webStorageSupport";class iw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gh,this._completeRedirectFn=Rv,this._overrideRedirectResult=Sv}async _openPopup(e,t,r,i){var s;Rt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await yc(e,t,r,bo(),i);return Jv(e,o,la())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await yc(e,t,r,bo(),i);return av(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Rt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Hv(e),r=new kv(e);return t.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(uo,{type:uo},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[uo];o!==void 0&&t(!!o),tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Lv(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ih()||sa()||hs()}}const sw=iw;var _c="@firebase/auth",vc="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lw(n){dn(new Qt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:sh(n)},h=new b_(r,i,s,c);return D_(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),dn(new Qt("auth-internal",e=>{const t=Tn(e.getProvider("auth").getImmediate());return(r=>new ow(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ot(_c,vc,aw(n)),ot(_c,vc,"esm2017")}/**
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
 */const cw=5*60,uw=du("authIdTokenMaxAge")||cw;let wc=null;const hw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>uw)return;const i=t==null?void 0:t.token;wc!==i&&(wc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function dw(n=qo()){const e=cs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=N_(n,{popupRedirectResolver:sw,persistence:[gv,iv,gh]}),r=du("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=hw(s.toString());J_(t,o,()=>o(t.currentUser)),X_(t,l=>o(l))}}const i=cu("auth");return i&&O_(t,`http://${i}`),t}function fw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}S_({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=at("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",fw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lw("Browser");function Ih(n,e){const t=new FormData(n);let r=Array.from(t.values()),i={};for(let s=0;s<r.length;s++)i[e[s]]=r[s]!==void 0?r[s]:null;return i}function Tc(n,e,t,r){for(let i=0;i<e.length;i++)n[e[i]]=re(t[i]).textContent.includes(r)?null:re(t[i]).textContent;return n}function ua(n,e){let t="";t+=`<a class="header__top-name-link" href="/nuts/src/pages/personal-cabinet-page.html"><img class="header__top-img" src="" alt="avatar" loading="lazy"/>
            <span class="header__top-name">${n.displayName}</span>               
           </a>
          <button class="header__top-remove-block"
              ><svg class="header__top-remove-svg"><use href="#exit"></use></svg><span class="header__top-remove-text">Вихід</span></button
          >`,e.innerHTML=t,Et(n.photoURL,re(".header__top-img")),pw(re(".header__top-authentication-wrapper"),re(".header__top-remove-block"))}function pw(n,e){e.addEventListener("click",()=>{window.location.pathname="/nuts/index.html",SE()})}function bh(n){for(let e of n)e.value="",e.parentElement.querySelector(".input__label").classList.remove("input__label_active")}var Ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var un,Sh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,g){function y(){}y.prototype=g.prototype,A.D=g.prototype,A.prototype=new y,A.prototype.constructor=A,A.C=function(_,E,b){for(var v=Array(arguments.length-2),$=2;$<arguments.length;$++)v[$-2]=arguments[$];return g.prototype[E].apply(_,v)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(A,g,y){y||(y=0);var _=Array(16);if(typeof g=="string")for(var E=0;16>E;++E)_[E]=g.charCodeAt(y++)|g.charCodeAt(y++)<<8|g.charCodeAt(y++)<<16|g.charCodeAt(y++)<<24;else for(E=0;16>E;++E)_[E]=g[y++]|g[y++]<<8|g[y++]<<16|g[y++]<<24;g=A.g[0],y=A.g[1],E=A.g[2];var b=A.g[3],v=g+(b^y&(E^b))+_[0]+3614090360&4294967295;g=y+(v<<7&4294967295|v>>>25),v=b+(E^g&(y^E))+_[1]+3905402710&4294967295,b=g+(v<<12&4294967295|v>>>20),v=E+(y^b&(g^y))+_[2]+606105819&4294967295,E=b+(v<<17&4294967295|v>>>15),v=y+(g^E&(b^g))+_[3]+3250441966&4294967295,y=E+(v<<22&4294967295|v>>>10),v=g+(b^y&(E^b))+_[4]+4118548399&4294967295,g=y+(v<<7&4294967295|v>>>25),v=b+(E^g&(y^E))+_[5]+1200080426&4294967295,b=g+(v<<12&4294967295|v>>>20),v=E+(y^b&(g^y))+_[6]+2821735955&4294967295,E=b+(v<<17&4294967295|v>>>15),v=y+(g^E&(b^g))+_[7]+4249261313&4294967295,y=E+(v<<22&4294967295|v>>>10),v=g+(b^y&(E^b))+_[8]+1770035416&4294967295,g=y+(v<<7&4294967295|v>>>25),v=b+(E^g&(y^E))+_[9]+2336552879&4294967295,b=g+(v<<12&4294967295|v>>>20),v=E+(y^b&(g^y))+_[10]+4294925233&4294967295,E=b+(v<<17&4294967295|v>>>15),v=y+(g^E&(b^g))+_[11]+2304563134&4294967295,y=E+(v<<22&4294967295|v>>>10),v=g+(b^y&(E^b))+_[12]+1804603682&4294967295,g=y+(v<<7&4294967295|v>>>25),v=b+(E^g&(y^E))+_[13]+4254626195&4294967295,b=g+(v<<12&4294967295|v>>>20),v=E+(y^b&(g^y))+_[14]+2792965006&4294967295,E=b+(v<<17&4294967295|v>>>15),v=y+(g^E&(b^g))+_[15]+1236535329&4294967295,y=E+(v<<22&4294967295|v>>>10),v=g+(E^b&(y^E))+_[1]+4129170786&4294967295,g=y+(v<<5&4294967295|v>>>27),v=b+(y^E&(g^y))+_[6]+3225465664&4294967295,b=g+(v<<9&4294967295|v>>>23),v=E+(g^y&(b^g))+_[11]+643717713&4294967295,E=b+(v<<14&4294967295|v>>>18),v=y+(b^g&(E^b))+_[0]+3921069994&4294967295,y=E+(v<<20&4294967295|v>>>12),v=g+(E^b&(y^E))+_[5]+3593408605&4294967295,g=y+(v<<5&4294967295|v>>>27),v=b+(y^E&(g^y))+_[10]+38016083&4294967295,b=g+(v<<9&4294967295|v>>>23),v=E+(g^y&(b^g))+_[15]+3634488961&4294967295,E=b+(v<<14&4294967295|v>>>18),v=y+(b^g&(E^b))+_[4]+3889429448&4294967295,y=E+(v<<20&4294967295|v>>>12),v=g+(E^b&(y^E))+_[9]+568446438&4294967295,g=y+(v<<5&4294967295|v>>>27),v=b+(y^E&(g^y))+_[14]+3275163606&4294967295,b=g+(v<<9&4294967295|v>>>23),v=E+(g^y&(b^g))+_[3]+4107603335&4294967295,E=b+(v<<14&4294967295|v>>>18),v=y+(b^g&(E^b))+_[8]+1163531501&4294967295,y=E+(v<<20&4294967295|v>>>12),v=g+(E^b&(y^E))+_[13]+2850285829&4294967295,g=y+(v<<5&4294967295|v>>>27),v=b+(y^E&(g^y))+_[2]+4243563512&4294967295,b=g+(v<<9&4294967295|v>>>23),v=E+(g^y&(b^g))+_[7]+1735328473&4294967295,E=b+(v<<14&4294967295|v>>>18),v=y+(b^g&(E^b))+_[12]+2368359562&4294967295,y=E+(v<<20&4294967295|v>>>12),v=g+(y^E^b)+_[5]+4294588738&4294967295,g=y+(v<<4&4294967295|v>>>28),v=b+(g^y^E)+_[8]+2272392833&4294967295,b=g+(v<<11&4294967295|v>>>21),v=E+(b^g^y)+_[11]+1839030562&4294967295,E=b+(v<<16&4294967295|v>>>16),v=y+(E^b^g)+_[14]+4259657740&4294967295,y=E+(v<<23&4294967295|v>>>9),v=g+(y^E^b)+_[1]+2763975236&4294967295,g=y+(v<<4&4294967295|v>>>28),v=b+(g^y^E)+_[4]+1272893353&4294967295,b=g+(v<<11&4294967295|v>>>21),v=E+(b^g^y)+_[7]+4139469664&4294967295,E=b+(v<<16&4294967295|v>>>16),v=y+(E^b^g)+_[10]+3200236656&4294967295,y=E+(v<<23&4294967295|v>>>9),v=g+(y^E^b)+_[13]+681279174&4294967295,g=y+(v<<4&4294967295|v>>>28),v=b+(g^y^E)+_[0]+3936430074&4294967295,b=g+(v<<11&4294967295|v>>>21),v=E+(b^g^y)+_[3]+3572445317&4294967295,E=b+(v<<16&4294967295|v>>>16),v=y+(E^b^g)+_[6]+76029189&4294967295,y=E+(v<<23&4294967295|v>>>9),v=g+(y^E^b)+_[9]+3654602809&4294967295,g=y+(v<<4&4294967295|v>>>28),v=b+(g^y^E)+_[12]+3873151461&4294967295,b=g+(v<<11&4294967295|v>>>21),v=E+(b^g^y)+_[15]+530742520&4294967295,E=b+(v<<16&4294967295|v>>>16),v=y+(E^b^g)+_[2]+3299628645&4294967295,y=E+(v<<23&4294967295|v>>>9),v=g+(E^(y|~b))+_[0]+4096336452&4294967295,g=y+(v<<6&4294967295|v>>>26),v=b+(y^(g|~E))+_[7]+1126891415&4294967295,b=g+(v<<10&4294967295|v>>>22),v=E+(g^(b|~y))+_[14]+2878612391&4294967295,E=b+(v<<15&4294967295|v>>>17),v=y+(b^(E|~g))+_[5]+4237533241&4294967295,y=E+(v<<21&4294967295|v>>>11),v=g+(E^(y|~b))+_[12]+1700485571&4294967295,g=y+(v<<6&4294967295|v>>>26),v=b+(y^(g|~E))+_[3]+2399980690&4294967295,b=g+(v<<10&4294967295|v>>>22),v=E+(g^(b|~y))+_[10]+4293915773&4294967295,E=b+(v<<15&4294967295|v>>>17),v=y+(b^(E|~g))+_[1]+2240044497&4294967295,y=E+(v<<21&4294967295|v>>>11),v=g+(E^(y|~b))+_[8]+1873313359&4294967295,g=y+(v<<6&4294967295|v>>>26),v=b+(y^(g|~E))+_[15]+4264355552&4294967295,b=g+(v<<10&4294967295|v>>>22),v=E+(g^(b|~y))+_[6]+2734768916&4294967295,E=b+(v<<15&4294967295|v>>>17),v=y+(b^(E|~g))+_[13]+1309151649&4294967295,y=E+(v<<21&4294967295|v>>>11),v=g+(E^(y|~b))+_[4]+4149444226&4294967295,g=y+(v<<6&4294967295|v>>>26),v=b+(y^(g|~E))+_[11]+3174756917&4294967295,b=g+(v<<10&4294967295|v>>>22),v=E+(g^(b|~y))+_[2]+718787259&4294967295,E=b+(v<<15&4294967295|v>>>17),v=y+(b^(E|~g))+_[9]+3951481745&4294967295,A.g[0]=A.g[0]+g&4294967295,A.g[1]=A.g[1]+(E+(v<<21&4294967295|v>>>11))&4294967295,A.g[2]=A.g[2]+E&4294967295,A.g[3]=A.g[3]+b&4294967295}r.prototype.u=function(A,g){g===void 0&&(g=A.length);for(var y=g-this.blockSize,_=this.B,E=this.h,b=0;b<g;){if(E==0)for(;b<=y;)i(this,A,b),b+=this.blockSize;if(typeof A=="string"){for(;b<g;)if(_[E++]=A.charCodeAt(b++),E==this.blockSize){i(this,_),E=0;break}}else for(;b<g;)if(_[E++]=A[b++],E==this.blockSize){i(this,_),E=0;break}}this.h=E,this.o+=g},r.prototype.v=function(){var A=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);A[0]=128;for(var g=1;g<A.length-8;++g)A[g]=0;var y=8*this.o;for(g=A.length-8;g<A.length;++g)A[g]=y&255,y/=256;for(this.u(A),A=Array(16),g=y=0;4>g;++g)for(var _=0;32>_;_+=8)A[y++]=this.g[g]>>>_&255;return A};function s(A,g){var y=l;return Object.prototype.hasOwnProperty.call(y,A)?y[A]:y[A]=g(A)}function o(A,g){this.h=g;for(var y=[],_=!0,E=A.length-1;0<=E;E--){var b=A[E]|0;_&&b==g||(y[E]=b,_=!1)}this.g=y}var l={};function c(A){return-128<=A&&128>A?s(A,function(g){return new o([g|0],0>g?-1:0)}):new o([A|0],0>A?-1:0)}function h(A){if(isNaN(A)||!isFinite(A))return m;if(0>A)return k(h(-A));for(var g=[],y=1,_=0;A>=y;_++)g[_]=A/y|0,y*=4294967296;return new o(g,0)}function f(A,g){if(A.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(A.charAt(0)=="-")return k(f(A.substring(1),g));if(0<=A.indexOf("-"))throw Error('number format error: interior "-" character');for(var y=h(Math.pow(g,8)),_=m,E=0;E<A.length;E+=8){var b=Math.min(8,A.length-E),v=parseInt(A.substring(E,E+b),g);8>b?(b=h(Math.pow(g,b)),_=_.j(b).add(h(v))):(_=_.j(y),_=_.add(h(v)))}return _}var m=c(0),w=c(1),T=c(16777216);n=o.prototype,n.m=function(){if(P(this))return-k(this).m();for(var A=0,g=1,y=0;y<this.g.length;y++){var _=this.i(y);A+=(0<=_?_:4294967296+_)*g,g*=4294967296}return A},n.toString=function(A){if(A=A||10,2>A||36<A)throw Error("radix out of range: "+A);if(S(this))return"0";if(P(this))return"-"+k(this).toString(A);for(var g=h(Math.pow(A,6)),y=this,_="";;){var E=O(y,g).g;y=R(y,E.j(g));var b=((0<y.g.length?y.g[0]:y.h)>>>0).toString(A);if(y=E,S(y))return b+_;for(;6>b.length;)b="0"+b;_=b+_}},n.i=function(A){return 0>A?0:A<this.g.length?this.g[A]:this.h};function S(A){if(A.h!=0)return!1;for(var g=0;g<A.g.length;g++)if(A.g[g]!=0)return!1;return!0}function P(A){return A.h==-1}n.l=function(A){return A=R(this,A),P(A)?-1:S(A)?0:1};function k(A){for(var g=A.g.length,y=[],_=0;_<g;_++)y[_]=~A.g[_];return new o(y,~A.h).add(w)}n.abs=function(){return P(this)?k(this):this},n.add=function(A){for(var g=Math.max(this.g.length,A.g.length),y=[],_=0,E=0;E<=g;E++){var b=_+(this.i(E)&65535)+(A.i(E)&65535),v=(b>>>16)+(this.i(E)>>>16)+(A.i(E)>>>16);_=v>>>16,b&=65535,v&=65535,y[E]=v<<16|b}return new o(y,y[y.length-1]&-2147483648?-1:0)};function R(A,g){return A.add(k(g))}n.j=function(A){if(S(this)||S(A))return m;if(P(this))return P(A)?k(this).j(k(A)):k(k(this).j(A));if(P(A))return k(this.j(k(A)));if(0>this.l(T)&&0>A.l(T))return h(this.m()*A.m());for(var g=this.g.length+A.g.length,y=[],_=0;_<2*g;_++)y[_]=0;for(_=0;_<this.g.length;_++)for(var E=0;E<A.g.length;E++){var b=this.i(_)>>>16,v=this.i(_)&65535,$=A.i(E)>>>16,ie=A.i(E)&65535;y[2*_+2*E]+=v*ie,D(y,2*_+2*E),y[2*_+2*E+1]+=b*ie,D(y,2*_+2*E+1),y[2*_+2*E+1]+=v*$,D(y,2*_+2*E+1),y[2*_+2*E+2]+=b*$,D(y,2*_+2*E+2)}for(_=0;_<g;_++)y[_]=y[2*_+1]<<16|y[2*_];for(_=g;_<2*g;_++)y[_]=0;return new o(y,0)};function D(A,g){for(;(A[g]&65535)!=A[g];)A[g+1]+=A[g]>>>16,A[g]&=65535,g++}function x(A,g){this.g=A,this.h=g}function O(A,g){if(S(g))throw Error("division by zero");if(S(A))return new x(m,m);if(P(A))return g=O(k(A),g),new x(k(g.g),k(g.h));if(P(g))return g=O(A,k(g)),new x(k(g.g),g.h);if(30<A.g.length){if(P(A)||P(g))throw Error("slowDivide_ only works with positive integers.");for(var y=w,_=g;0>=_.l(A);)y=F(y),_=F(_);var E=j(y,1),b=j(_,1);for(_=j(_,2),y=j(y,2);!S(_);){var v=b.add(_);0>=v.l(A)&&(E=E.add(y),b=v),_=j(_,1),y=j(y,1)}return g=R(A,E.j(g)),new x(E,g)}for(E=m;0<=A.l(g);){for(y=Math.max(1,Math.floor(A.m()/g.m())),_=Math.ceil(Math.log(y)/Math.LN2),_=48>=_?1:Math.pow(2,_-48),b=h(y),v=b.j(g);P(v)||0<v.l(A);)y-=_,b=h(y),v=b.j(g);S(b)&&(b=w),E=E.add(b),A=R(A,v)}return new x(E,A)}n.A=function(A){return O(this,A).h},n.and=function(A){for(var g=Math.max(this.g.length,A.g.length),y=[],_=0;_<g;_++)y[_]=this.i(_)&A.i(_);return new o(y,this.h&A.h)},n.or=function(A){for(var g=Math.max(this.g.length,A.g.length),y=[],_=0;_<g;_++)y[_]=this.i(_)|A.i(_);return new o(y,this.h|A.h)},n.xor=function(A){for(var g=Math.max(this.g.length,A.g.length),y=[],_=0;_<g;_++)y[_]=this.i(_)^A.i(_);return new o(y,this.h^A.h)};function F(A){for(var g=A.g.length+1,y=[],_=0;_<g;_++)y[_]=A.i(_)<<1|A.i(_-1)>>>31;return new o(y,A.h)}function j(A,g){var y=g>>5;g%=32;for(var _=A.g.length-y,E=[],b=0;b<_;b++)E[b]=0<g?A.i(b+y)>>>g|A.i(b+y+1)<<32-g:A.i(b+y);return new o(E,A.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Sh=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,un=o}).apply(typeof Ec<"u"?Ec:typeof self<"u"?self:typeof window<"u"?window:{});var Ri=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ah,Ph,Sr,Rh,Fi,Ro,Ch,kh,xh;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function t(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ri=="object"&&Ri];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(a,u){if(u)e:{var d=r;a=a.split(".");for(var p=0;p<a.length-1;p++){var C=a[p];if(!(C in d))break e;d=d[C]}a=a[a.length-1],p=d[a],u=u(p),u!=p&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function s(a,u){a instanceof String&&(a+="");var d=0,p=!1,C={next:function(){if(!p&&d<a.length){var N=d++;return{value:u(N,a[N]),done:!1}}return p=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(a){return a||function(){return s(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function c(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function m(a,u,d){if(!a)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,p),a.apply(u,C)}}return function(){return a.apply(u,arguments)}}function w(a,u,d){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,w.apply(null,arguments)}function T(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),a.apply(this,p)}}function S(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(p,C,N){for(var U=Array(arguments.length-2),se=2;se<arguments.length;se++)U[se-2]=arguments[se];return u.prototype[C].apply(p,U)}}function P(a){const u=a.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=a[p];return d}return[]}function k(a,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(c(p)){const C=a.length||0,N=p.length||0;a.length=C+N;for(let U=0;U<N;U++)a[C+U]=p[U]}else a.push(p)}}class R{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function D(a){return/^[\s\xa0]*$/.test(a)}function x(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var F=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function j(a,u,d){for(const p in a)u.call(d,a[p],p,a)}function A(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function g(a){const u={};for(const d in a)u[d]=a[d];return u}const y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(a,u){let d,p;for(let C=1;C<arguments.length;C++){p=arguments[C];for(d in p)a[d]=p[d];for(let N=0;N<y.length;N++)d=y[N],Object.prototype.hasOwnProperty.call(p,d)&&(a[d]=p[d])}}function E(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function b(a){l.setTimeout(()=>{throw a},0)}function v(){var a=Ye;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class ${constructor(){this.h=this.g=null}add(u,d){const p=ie.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var ie=new R(()=>new we,a=>a.reset());class we{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Ue,Ie=!1,Ye=new $,Ze=()=>{const a=l.Promise.resolve(void 0);Ue=()=>{a.then(mt)}};var mt=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(d){b(d)}var u=ie;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}Ie=!1};function be(){this.s=this.s,this.C=this.C}be.prototype.s=!1,be.prototype.ma=function(){this.s||(this.s=!0,this.N())},be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var De=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return a}();function gt(a,u){if(ce.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,p=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(F){e:{try{O(u.nodeName);var C=!0;break e}catch{}C=!1}C||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ri[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&gt.aa.h.call(this)}}S(gt,ce);var ri={2:"touch",3:"pen",4:"mouse"};gt.prototype.h=function(){gt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var yt="closure_listenable_"+(1e6*Math.random()|0),ii=0;function bn(a,u,d,p,C){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=C,this.key=++ii,this.da=this.fa=!1}function Dt(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Sn(a){this.src=a,this.g={},this.h=0}Sn.prototype.add=function(a,u,d,p,C){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var U=nr(a,u,p,C);return-1<U?(u=a[U],d||(u.fa=!1)):(u=new bn(u,this.src,N,!!p,C),u.fa=d,a.push(u)),u};function tr(a,u){var d=u.type;if(d in a.g){var p=a.g[d],C=Array.prototype.indexOf.call(p,u,void 0),N;(N=0<=C)&&Array.prototype.splice.call(p,C,1),N&&(Dt(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function nr(a,u,d,p){for(var C=0;C<a.length;++C){var N=a[C];if(!N.da&&N.listener==u&&N.capture==!!d&&N.ha==p)return C}return-1}var rr="closure_lm_"+(1e6*Math.random()|0),ir={};function sr(a,u,d,p,C){if(Array.isArray(u)){for(var N=0;N<u.length;N++)sr(a,u[N],d,p,C);return null}return d=oi(d),a&&a[yt]?a.K(u,d,h(p)?!!p.capture:!!p,C):Ns(a,u,d,!1,p,C)}function Ns(a,u,d,p,C,N){if(!u)throw Error("Invalid event type");var U=h(C)?!!C.capture:!!C,se=ar(a);if(se||(a[rr]=se=new Sn(a)),d=se.add(u,d,p,U,N),d.proxy)return d;if(p=si(),d.proxy=p,p.src=a,p.listener=d,a.addEventListener)De||(C=U),C===void 0&&(C=!1),a.addEventListener(u.toString(),p,C);else if(a.attachEvent)a.attachEvent(Pn(u.toString()),p);else if(a.addListener&&a.removeListener)a.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function si(){function a(d){return u.call(a.src,a.listener,d)}const u=Ds;return a}function or(a,u,d,p,C){if(Array.isArray(u))for(var N=0;N<u.length;N++)or(a,u[N],d,p,C);else p=h(p)?!!p.capture:!!p,d=oi(d),a&&a[yt]?(a=a.i,u=String(u).toString(),u in a.g&&(N=a.g[u],d=nr(N,d,p,C),-1<d&&(Dt(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[u],a.h--)))):a&&(a=ar(a))&&(u=a.g[u.toString()],a=-1,u&&(a=nr(u,d,p,C)),(d=-1<a?u[a]:null)&&An(d))}function An(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[yt])tr(u.i,a);else{var d=a.type,p=a.proxy;u.removeEventListener?u.removeEventListener(d,p,a.capture):u.detachEvent?u.detachEvent(Pn(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=ar(u))?(tr(d,a),d.h==0&&(d.src=null,u[rr]=null)):Dt(a)}}}function Pn(a){return a in ir?ir[a]:ir[a]="on"+a}function Ds(a,u){if(a.da)a=!0;else{u=new gt(u,this);var d=a.listener,p=a.ha||a.src;a.fa&&An(a),a=d.call(p,u)}return a}function ar(a){return a=a[rr],a instanceof Sn?a:null}var lr="__closure_events_fn_"+(1e9*Math.random()>>>0);function oi(a){return typeof a=="function"?a:(a[lr]||(a[lr]=function(u){return a.handleEvent(u)}),a[lr])}function Te(){be.call(this),this.i=new Sn(this),this.M=this,this.F=null}S(Te,be),Te.prototype[yt]=!0,Te.prototype.removeEventListener=function(a,u,d,p){or(this,a,u,d,p)};function Se(a,u){var d,p=a.F;if(p)for(d=[];p;p=p.F)d.push(p);if(a=a.M,p=u.type||u,typeof u=="string")u=new ce(u,a);else if(u instanceof ce)u.target=u.target||a;else{var C=u;u=new ce(p,a),_(u,C)}if(C=!0,d)for(var N=d.length-1;0<=N;N--){var U=u.g=d[N];C=B(U,p,!0,u)&&C}if(U=u.g=a,C=B(U,p,!0,u)&&C,C=B(U,p,!1,u)&&C,d)for(N=0;N<d.length;N++)U=u.g=d[N],C=B(U,p,!1,u)&&C}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],p=0;p<d.length;p++)Dt(d[p]);delete a.g[u],a.h--}}this.F=null},Te.prototype.K=function(a,u,d,p){return this.i.add(String(a),u,!1,d,p)},Te.prototype.L=function(a,u,d,p){return this.i.add(String(a),u,!0,d,p)};function B(a,u,d,p){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var C=!0,N=0;N<u.length;++N){var U=u[N];if(U&&!U.da&&U.capture==d){var se=U.listener,Ae=U.ha||U.src;U.fa&&tr(a.i,U),C=se.call(Ae,p)!==!1&&C}}return C&&!p.defaultPrevented}function I(a,u,d){if(typeof a=="function")d&&(a=w(a,d));else if(a&&typeof a.handleEvent=="function")a=w(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(a,u||0)}function M(a){a.g=I(()=>{a.g=null,a.i&&(a.i=!1,M(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class z extends be{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:M(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function q(a){be.call(this),this.h=a,this.g={}}S(q,be);var Xe=[];function nt(a){j(a.g,function(u,d){this.g.hasOwnProperty(d)&&An(u)},a),a.g={}}q.prototype.N=function(){q.aa.N.call(this),nt(this)},q.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Je=l.JSON.stringify,Rn=l.JSON.parse,Os=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Cn(){}Cn.prototype.h=null;function me(a){return a.h||(a.h=a.i())}function ai(){}var _t={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ot(){ce.call(this,"d")}S(Ot,ce);function Ls(){ce.call(this,"c")}S(Ls,ce);var tn={},za=null;function li(){return za=za||new Te}tn.La="serverreachability";function ja(a){ce.call(this,tn.La,a)}S(ja,ce);function cr(a){const u=li();Se(u,new ja(u))}tn.STAT_EVENT="statevent";function Ga(a,u){ce.call(this,tn.STAT_EVENT,a),this.stat=u}S(Ga,ce);function Be(a){const u=li();Se(u,new Ga(u,a))}tn.Ma="timingevent";function qa(a,u){ce.call(this,tn.Ma,a),this.size=u}S(qa,ce);function ur(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},u)}function hr(){this.g=!0}hr.prototype.xa=function(){this.g=!1};function tf(a,u,d,p,C,N){a.info(function(){if(a.g)if(N)for(var U="",se=N.split("&"),Ae=0;Ae<se.length;Ae++){var te=se[Ae].split("=");if(1<te.length){var Oe=te[0];te=te[1];var Le=Oe.split("_");U=2<=Le.length&&Le[1]=="type"?U+(Oe+"="+te+"&"):U+(Oe+"=redacted&")}}else U=null;else U=N;return"XMLHTTP REQ ("+p+") [attempt "+C+"]: "+u+`
`+d+`
`+U})}function nf(a,u,d,p,C,N,U){a.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+C+"]: "+u+`
`+d+`
`+N+" "+U})}function kn(a,u,d,p){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+sf(a,d)+(p?" "+p:"")})}function rf(a,u){a.info(function(){return"TIMEOUT: "+u})}hr.prototype.info=function(){};function sf(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var p=d[a];if(!(2>p.length)){var C=p[1];if(Array.isArray(C)&&!(1>C.length)){var N=C[0];if(N!="noop"&&N!="stop"&&N!="close")for(var U=1;U<C.length;U++)C[U]=""}}}}return Je(d)}catch{return u}}var ci={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Wa={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Vs;function ui(){}S(ui,Cn),ui.prototype.g=function(){return new XMLHttpRequest},ui.prototype.i=function(){return{}},Vs=new ui;function Lt(a,u,d,p){this.j=a,this.i=u,this.l=d,this.R=p||1,this.U=new q(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ha}function Ha(){this.i=null,this.g="",this.h=!1}var $a={},Ms={};function Fs(a,u,d){a.L=1,a.v=pi(vt(u)),a.m=d,a.P=!0,Ka(a,null)}function Ka(a,u){a.F=Date.now(),hi(a),a.A=vt(a.v);var d=a.A,p=a.R;Array.isArray(p)||(p=[String(p)]),ll(d.i,"t",p),a.C=0,d=a.j.J,a.h=new Ha,a.g=Al(a.j,d?u:null,!a.m),0<a.O&&(a.M=new z(w(a.Y,a,a.g),a.O)),u=a.U,d=a.g,p=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(Xe[0]=C.toString()),C=Xe);for(var N=0;N<C.length;N++){var U=sr(d,C[N],p||u.handleEvent,!1,u.h||u);if(!U)break;u.g[U.key]=U}u=a.H?g(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),cr(),tf(a.i,a.u,a.A,a.l,a.R,a.m)}Lt.prototype.ca=function(a){a=a.target;const u=this.M;u&&wt(a)==3?u.j():this.Y(a)},Lt.prototype.Y=function(a){try{if(a==this.g)e:{const Le=wt(this.g);var u=this.g.Ba();const Dn=this.g.Z();if(!(3>Le)&&(Le!=3||this.g&&(this.h.h||this.g.oa()||ml(this.g)))){this.J||Le!=4||u==7||(u==8||0>=Dn?cr(3):cr(2)),Us(this);var d=this.g.Z();this.X=d;t:if(Qa(this)){var p=ml(this.g);a="";var C=p.length,N=wt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nn(this),dr(this);var U="";break t}this.h.i=new l.TextDecoder}for(u=0;u<C;u++)this.h.h=!0,a+=this.h.i.decode(p[u],{stream:!(N&&u==C-1)});p.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,nf(this.i,this.u,this.A,this.l,this.R,Le,d),this.o){if(this.T&&!this.K){t:{if(this.g){var se,Ae=this.g;if((se=Ae.g?Ae.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(se)){var te=se;break t}}te=null}if(d=te)kn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bs(this,d);else{this.o=!1,this.s=3,Be(12),nn(this),dr(this);break e}}if(this.P){d=!0;let et;for(;!this.J&&this.C<U.length;)if(et=of(this,U),et==Ms){Le==4&&(this.s=4,Be(14),d=!1),kn(this.i,this.l,null,"[Incomplete Response]");break}else if(et==$a){this.s=4,Be(15),kn(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else kn(this.i,this.l,et,null),Bs(this,et);if(Qa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Le!=4||U.length!=0||this.h.h||(this.s=1,Be(16),d=!1),this.o=this.o&&d,!d)kn(this.i,this.l,U,"[Invalid Chunked Response]"),nn(this),dr(this);else if(0<U.length&&!this.W){this.W=!0;var Oe=this.j;Oe.g==this&&Oe.ba&&!Oe.M&&(Oe.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Hs(Oe),Oe.M=!0,Be(11))}}else kn(this.i,this.l,U,null),Bs(this,U);Le==4&&nn(this),this.o&&!this.J&&(Le==4?El(this.j,this):(this.o=!1,hi(this)))}else If(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,Be(12)):(this.s=0,Be(13)),nn(this),dr(this)}}}catch{}finally{}};function Qa(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function of(a,u){var d=a.C,p=u.indexOf(`
`,d);return p==-1?Ms:(d=Number(u.substring(d,p)),isNaN(d)?$a:(p+=1,p+d>u.length?Ms:(u=u.slice(p,p+d),a.C=p+d,u)))}Lt.prototype.cancel=function(){this.J=!0,nn(this)};function hi(a){a.S=Date.now()+a.I,Ya(a,a.I)}function Ya(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ur(w(a.ba,a),u)}function Us(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Lt.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(rf(this.i,this.A),this.L!=2&&(cr(),Be(17)),nn(this),this.s=2,dr(this)):Ya(this,this.S-a)};function dr(a){a.j.G==0||a.J||El(a.j,a)}function nn(a){Us(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,nt(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function Bs(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||zs(d.h,a))){if(!a.K&&zs(d.h,a)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var C=p;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)vi(d),yi(d);else break e;Ws(d),Be(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=ur(w(d.Za,d),6e3));if(1>=Za(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else sn(d,11)}else if((a.K||d.g==a)&&vi(d),!D(u))for(C=d.Da.g.parse(u),u=0;u<C.length;u++){let te=C[u];if(d.T=te[0],te=te[1],d.G==2)if(te[0]=="c"){d.K=te[1],d.ia=te[2];const Oe=te[3];Oe!=null&&(d.la=Oe,d.j.info("VER="+d.la));const Le=te[4];Le!=null&&(d.Aa=Le,d.j.info("SVER="+d.Aa));const Dn=te[5];Dn!=null&&typeof Dn=="number"&&0<Dn&&(p=1.5*Dn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const et=a.g;if(et){const Ti=et.g?et.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ti){var N=p.h;N.g||Ti.indexOf("spdy")==-1&&Ti.indexOf("quic")==-1&&Ti.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(js(N,N.h),N.h=null))}if(p.D){const $s=et.g?et.g.getResponseHeader("X-HTTP-Session-Id"):null;$s&&(p.ya=$s,ae(p.I,p.D,$s))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var U=a;if(p.qa=Sl(p,p.J?p.ia:null,p.W),U.K){el(p.h,U);var se=U,Ae=p.L;Ae&&(se.I=Ae),se.B&&(Us(se),hi(se)),p.g=U}else wl(p);0<d.i.length&&_i(d)}else te[0]!="stop"&&te[0]!="close"||sn(d,7);else d.G==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?sn(d,7):qs(d):te[0]!="noop"&&d.l&&d.l.ta(te),d.v=0)}}cr(4)}catch{}}var af=class{constructor(a,u){this.g=a,this.map=u}};function Xa(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ja(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Za(a){return a.h?1:a.g?a.g.size:0}function zs(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function js(a,u){a.g?a.g.add(u):a.h=u}function el(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Xa.prototype.cancel=function(){if(this.i=tl(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function tl(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return P(a.i)}function lf(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(c(a)){for(var u=[],d=a.length,p=0;p<d;p++)u.push(a[p]);return u}u=[],d=0;for(p in a)u[d++]=a[p];return u}function cf(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(c(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const p in a)u[d++]=p;return u}}}function nl(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(c(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=cf(a),p=lf(a),C=p.length,N=0;N<C;N++)u.call(void 0,p[N],d&&d[N],a)}var rl=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uf(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var p=a[d].indexOf("="),C=null;if(0<=p){var N=a[d].substring(0,p);C=a[d].substring(p+1)}else N=a[d];u(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function rn(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof rn){this.h=a.h,di(this,a.j),this.o=a.o,this.g=a.g,fi(this,a.s),this.l=a.l;var u=a.i,d=new mr;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),il(this,d),this.m=a.m}else a&&(u=String(a).match(rl))?(this.h=!1,di(this,u[1]||"",!0),this.o=fr(u[2]||""),this.g=fr(u[3]||"",!0),fi(this,u[4]),this.l=fr(u[5]||"",!0),il(this,u[6]||"",!0),this.m=fr(u[7]||"")):(this.h=!1,this.i=new mr(null,this.h))}rn.prototype.toString=function(){var a=[],u=this.j;u&&a.push(pr(u,sl,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(pr(u,sl,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(pr(d,d.charAt(0)=="/"?ff:df,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",pr(d,mf)),a.join("")};function vt(a){return new rn(a)}function di(a,u,d){a.j=d?fr(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function fi(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function il(a,u,d){u instanceof mr?(a.i=u,gf(a.i,a.h)):(d||(u=pr(u,pf)),a.i=new mr(u,a.h))}function ae(a,u,d){a.i.set(u,d)}function pi(a){return ae(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function fr(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function pr(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,hf),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function hf(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var sl=/[#\/\?@]/g,df=/[#\?:]/g,ff=/[#\?]/g,pf=/[#\?@]/g,mf=/#/g;function mr(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Vt(a){a.g||(a.g=new Map,a.h=0,a.i&&uf(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=mr.prototype,n.add=function(a,u){Vt(this),this.i=null,a=xn(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function ol(a,u){Vt(a),u=xn(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function al(a,u){return Vt(a),u=xn(a,u),a.g.has(u)}n.forEach=function(a,u){Vt(this),this.g.forEach(function(d,p){d.forEach(function(C){a.call(u,C,p,this)},this)},this)},n.na=function(){Vt(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const C=a[p];for(let N=0;N<C.length;N++)d.push(u[p])}return d},n.V=function(a){Vt(this);let u=[];if(typeof a=="string")al(this,a)&&(u=u.concat(this.g.get(xn(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},n.set=function(a,u){return Vt(this),this.i=null,a=xn(this,a),al(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},n.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function ll(a,u,d){ol(a,u),0<d.length&&(a.i=null,a.g.set(xn(a,u),P(d)),a.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const N=encodeURIComponent(String(p)),U=this.V(p);for(p=0;p<U.length;p++){var C=N;U[p]!==""&&(C+="="+encodeURIComponent(String(U[p]))),a.push(C)}}return this.i=a.join("&")};function xn(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function gf(a,u){u&&!a.j&&(Vt(a),a.i=null,a.g.forEach(function(d,p){var C=p.toLowerCase();p!=C&&(ol(this,p),ll(this,C,d))},a)),a.j=u}function yf(a,u){const d=new hr;if(l.Image){const p=new Image;p.onload=T(Mt,d,"TestLoadImage: loaded",!0,u,p),p.onerror=T(Mt,d,"TestLoadImage: error",!1,u,p),p.onabort=T(Mt,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=T(Mt,d,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=a}else u(!1)}function _f(a,u){const d=new hr,p=new AbortController,C=setTimeout(()=>{p.abort(),Mt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:p.signal}).then(N=>{clearTimeout(C),N.ok?Mt(d,"TestPingServer: ok",!0,u):Mt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(C),Mt(d,"TestPingServer: error",!1,u)})}function Mt(a,u,d,p,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),p(d)}catch{}}function vf(){this.g=new Os}function wf(a,u,d){const p=d||"";try{nl(a,function(C,N){let U=C;h(C)&&(U=Je(C)),u.push(p+N+"="+encodeURIComponent(U))})}catch(C){throw u.push(p+"type="+encodeURIComponent("_badmap")),C}}function gr(a){this.l=a.Ub||null,this.j=a.eb||!1}S(gr,Cn),gr.prototype.g=function(){return new mi(this.l,this.j)},gr.prototype.i=function(a){return function(){return a}}({});function mi(a,u){Te.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(mi,Te),n=mi.prototype,n.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,_r(this)},n.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,yr(this)),this.readyState=0},n.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,_r(this)),this.g&&(this.readyState=3,_r(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;cl(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function cl(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}n.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?yr(this):_r(this),this.readyState==3&&cl(this)}},n.Ra=function(a){this.g&&(this.response=this.responseText=a,yr(this))},n.Qa=function(a){this.g&&(this.response=a,yr(this))},n.ga=function(){this.g&&yr(this)};function yr(a){a.readyState=4,a.l=null,a.j=null,a.v=null,_r(a)}n.setRequestHeader=function(a,u){this.u.append(a,u)},n.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function _r(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(mi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function ul(a){let u="";return j(a,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function Gs(a,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=ul(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):ae(a,u,d))}function de(a){Te.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(de,Te);var Tf=/^https?$/i,Ef=["POST","PUT"];n=de.prototype,n.Ha=function(a){this.J=a},n.ea=function(a,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Vs.g(),this.v=this.o?me(this.o):me(Vs),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(N){hl(this,N);return}if(a=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var C in p)d.set(C,p[C]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const N of p.keys())d.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),C=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Ef,u,void 0))||p||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,U]of d)this.g.setRequestHeader(N,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{pl(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){hl(this,N)}};function hl(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,dl(a),gi(a)}function dl(a){a.A||(a.A=!0,Se(a,"complete"),Se(a,"error"))}n.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Se(this,"complete"),Se(this,"abort"),gi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),gi(this,!0)),de.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?fl(this):this.bb())},n.bb=function(){fl(this)};function fl(a){if(a.h&&typeof o<"u"&&(!a.v[1]||wt(a)!=4||a.Z()!=2)){if(a.u&&wt(a)==4)I(a.Ea,0,a);else if(Se(a,"readystatechange"),wt(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=U===0){var C=String(a.D).match(rl)[1]||null;!C&&l.self&&l.self.location&&(C=l.self.location.protocol.slice(0,-1)),p=!Tf.test(C?C.toLowerCase():"")}d=p}if(d)Se(a,"complete"),Se(a,"success");else{a.m=6;try{var N=2<wt(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",dl(a)}}finally{gi(a)}}}}function gi(a,u){if(a.g){pl(a);const d=a.g,p=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||Se(a,"ready");try{d.onreadystatechange=p}catch{}}}function pl(a){a.I&&(l.clearTimeout(a.I),a.I=null)}n.isActive=function(){return!!this.g};function wt(a){return a.g?a.g.readyState:0}n.Z=function(){try{return 2<wt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Rn(u)}};function ml(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function If(a){const u={};a=(a.g&&2<=wt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<a.length;p++){if(D(a[p]))continue;var d=E(a[p]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=u[C]||[];u[C]=N,N.push(d)}A(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function vr(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function gl(a){this.Aa=0,this.i=[],this.j=new hr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=vr("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=vr("baseRetryDelayMs",5e3,a),this.cb=vr("retryDelaySeedMs",1e4,a),this.Wa=vr("forwardChannelMaxRetries",2,a),this.wa=vr("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Xa(a&&a.concurrentRequestLimit),this.Da=new vf,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=gl.prototype,n.la=8,n.G=1,n.connect=function(a,u,d,p){Be(0),this.W=a,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Sl(this,null,this.W),_i(this)};function qs(a){if(yl(a),a.G==3){var u=a.U++,d=vt(a.I);if(ae(d,"SID",a.K),ae(d,"RID",u),ae(d,"TYPE","terminate"),wr(a,d),u=new Lt(a,a.j,u),u.L=2,u.v=pi(vt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Al(u.j,null),u.g.ea(u.v)),u.F=Date.now(),hi(u)}bl(a)}function yi(a){a.g&&(Hs(a),a.g.cancel(),a.g=null)}function yl(a){yi(a),a.u&&(l.clearTimeout(a.u),a.u=null),vi(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function _i(a){if(!Ja(a.h)&&!a.s){a.s=!0;var u=a.Ga;Ue||Ze(),Ie||(Ue(),Ie=!0),Ye.add(u,a),a.B=0}}function bf(a,u){return Za(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ur(w(a.Ga,a,u),Il(a,a.B)),a.B++,!0)}n.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new Lt(this,this.j,a);let N=this.o;if(this.S&&(N?(N=g(N),_(N,this.S)):N=this.S),this.m!==null||this.O||(C.H=N,N=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=vl(this,C,u),d=vt(this.I),ae(d,"RID",a),ae(d,"CVER",22),this.D&&ae(d,"X-HTTP-Session-Id",this.D),wr(this,d),N&&(this.O?u="headers="+encodeURIComponent(String(ul(N)))+"&"+u:this.m&&Gs(d,this.m,N)),js(this.h,C),this.Ua&&ae(d,"TYPE","init"),this.P?(ae(d,"$req",u),ae(d,"SID","null"),C.T=!0,Fs(C,d,null)):Fs(C,d,u),this.G=2}}else this.G==3&&(a?_l(this,a):this.i.length==0||Ja(this.h)||_l(this))};function _l(a,u){var d;u?d=u.l:d=a.U++;const p=vt(a.I);ae(p,"SID",a.K),ae(p,"RID",d),ae(p,"AID",a.T),wr(a,p),a.m&&a.o&&Gs(p,a.m,a.o),d=new Lt(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=vl(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),js(a.h,d),Fs(d,p,u)}function wr(a,u){a.H&&j(a.H,function(d,p){ae(u,p,d)}),a.l&&nl({},function(d,p){ae(u,p,d)})}function vl(a,u,d){d=Math.min(a.i.length,d);var p=a.l?w(a.l.Na,a.l,a):null;e:{var C=a.i;let N=-1;for(;;){const U=["count="+d];N==-1?0<d?(N=C[0].g,U.push("ofs="+N)):N=0:U.push("ofs="+N);let se=!0;for(let Ae=0;Ae<d;Ae++){let te=C[Ae].g;const Oe=C[Ae].map;if(te-=N,0>te)N=Math.max(0,C[Ae].g-100),se=!1;else try{wf(Oe,U,"req"+te+"_")}catch{p&&p(Oe)}}if(se){p=U.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,p}function wl(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;Ue||Ze(),Ie||(Ue(),Ie=!0),Ye.add(u,a),a.v=0}}function Ws(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ur(w(a.Fa,a),Il(a,a.v)),a.v++,!0)}n.Fa=function(){if(this.u=null,Tl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ur(w(this.ab,this),a)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Be(10),yi(this),Tl(this))};function Hs(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Tl(a){a.g=new Lt(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=vt(a.qa);ae(u,"RID","rpc"),ae(u,"SID",a.K),ae(u,"AID",a.T),ae(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&ae(u,"TO",a.ja),ae(u,"TYPE","xmlhttp"),wr(a,u),a.m&&a.o&&Gs(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=pi(vt(u)),d.m=null,d.P=!0,Ka(d,a)}n.Za=function(){this.C!=null&&(this.C=null,yi(this),Ws(this),Be(19))};function vi(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function El(a,u){var d=null;if(a.g==u){vi(a),Hs(a),a.g=null;var p=2}else if(zs(a.h,u))d=u.D,el(a.h,u),p=1;else return;if(a.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var C=a.B;p=li(),Se(p,new qa(p,d)),_i(a)}else wl(a);else if(C=u.s,C==3||C==0&&0<u.X||!(p==1&&bf(a,u)||p==2&&Ws(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),C){case 1:sn(a,5);break;case 4:sn(a,10);break;case 3:sn(a,6);break;default:sn(a,2)}}}function Il(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function sn(a,u){if(a.j.info("Error code "+u),u==2){var d=w(a.fb,a),p=a.Xa;const C=!p;p=new rn(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||di(p,"https"),pi(p),C?yf(p.toString(),d):_f(p.toString(),d)}else Be(2);a.G=0,a.l&&a.l.sa(u),bl(a),yl(a)}n.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function bl(a){if(a.G=0,a.ka=[],a.l){const u=tl(a.h);(u.length!=0||a.i.length!=0)&&(k(a.ka,u),k(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Sl(a,u,d){var p=d instanceof rn?vt(d):new rn(d);if(p.g!="")u&&(p.g=u+"."+p.g),fi(p,p.s);else{var C=l.location;p=C.protocol,u=u?u+"."+C.hostname:C.hostname,C=+C.port;var N=new rn(null);p&&di(N,p),u&&(N.g=u),C&&fi(N,C),d&&(N.l=d),p=N}return d=a.D,u=a.ya,d&&u&&ae(p,d,u),ae(p,"VER",a.la),wr(a,p),p}function Al(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new de(new gr({eb:d})):new de(a.pa),u.Ha(a.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pl(){}n=Pl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function wi(){}wi.prototype.g=function(a,u){return new qe(a,u)};function qe(a,u){Te.call(this),this.g=new gl(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!D(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!D(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Nn(this)}S(qe,Te),qe.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qe.prototype.close=function(){qs(this.g)},qe.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Je(a),a=d);u.i.push(new af(u.Ya++,a)),u.G==3&&_i(u)},qe.prototype.N=function(){this.g.l=null,delete this.j,qs(this.g),delete this.g,qe.aa.N.call(this)};function Rl(a){Ot.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}S(Rl,Ot);function Cl(){Ls.call(this),this.status=1}S(Cl,Ls);function Nn(a){this.g=a}S(Nn,Pl),Nn.prototype.ua=function(){Se(this.g,"a")},Nn.prototype.ta=function(a){Se(this.g,new Rl(a))},Nn.prototype.sa=function(a){Se(this.g,new Cl)},Nn.prototype.ra=function(){Se(this.g,"b")},wi.prototype.createWebChannel=wi.prototype.g,qe.prototype.send=qe.prototype.o,qe.prototype.open=qe.prototype.m,qe.prototype.close=qe.prototype.close,xh=function(){return new wi},kh=function(){return li()},Ch=tn,Ro={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ci.NO_ERROR=0,ci.TIMEOUT=8,ci.HTTP_ERROR=6,Fi=ci,Wa.COMPLETE="complete",Rh=Wa,ai.EventType=_t,_t.OPEN="a",_t.CLOSE="b",_t.ERROR="c",_t.MESSAGE="d",Te.prototype.listen=Te.prototype.K,Sr=ai,Ph=gr,de.prototype.listenOnce=de.prototype.L,de.prototype.getLastError=de.prototype.Ka,de.prototype.getLastErrorCode=de.prototype.Ba,de.prototype.getStatus=de.prototype.Z,de.prototype.getResponseJson=de.prototype.Oa,de.prototype.getResponseText=de.prototype.oa,de.prototype.send=de.prototype.ea,de.prototype.setWithCredentials=de.prototype.Ha,Ah=de}).apply(typeof Ri<"u"?Ri:typeof self<"u"?self:typeof window<"u"?window:{});const Ic="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Me.UNAUTHENTICATED=new Me(null),Me.GOOGLE_CREDENTIALS=new Me("google-credentials-uid"),Me.FIRST_PARTY=new Me("first-party-uid"),Me.MOCK_USER=new Me("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jn="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn=new jo("@firebase/firestore");function Er(){return gn.logLevel}function G(n,...e){if(gn.logLevel<=Z.DEBUG){const t=e.map(ha);gn.debug(`Firestore (${Jn}): ${n}`,...t)}}function Ct(n,...e){if(gn.logLevel<=Z.ERROR){const t=e.map(ha);gn.error(`Firestore (${Jn}): ${n}`,...t)}}function Gn(n,...e){if(gn.logLevel<=Z.WARN){const t=e.map(ha);gn.warn(`Firestore (${Jn}): ${n}`,...t)}}function ha(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function Q(n="Unexpected state"){const e=`FIRESTORE (${Jn}) INTERNAL ASSERTION FAILED: `+n;throw Ct(e),new Error(e)}function oe(n,e){n||Q()}function X(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends pt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Me.UNAUTHENTICATED))}shutdown(){}}class gw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class yw{constructor(e){this.t=e,this.currentUser=Me.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new Pt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Pt,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Pt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(oe(typeof r.accessToken=="string"),new Nh(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return oe(e===null||typeof e=="string"),new Me(e)}}class _w{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Me.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class vw{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new _w(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Me.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ww{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Tw{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(oe(typeof t.token=="string"),this.R=t.token,new ww(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ew(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=Ew(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function ne(n,e){return n<e?-1:n>e?1:0}function qn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ve(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new ve(0,0))}static max(){return new Y(new ve(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Q(),r===void 0?r=e.length-t:r>e.length-t&&Q(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Fr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Fr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),o=t.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class le extends Fr{construct(e,t,r){return new le(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new le(t)}static emptyPath(){return new le([])}}const Iw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ce extends Fr{construct(e,t,r){return new Ce(e,t,r)}static isValidIdentifier(e){return Iw.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ce.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ce(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new W(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new W(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ce(t)}static emptyPath(){return new Ce([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(le.fromString(e))}static fromName(e){return new H(le.fromString(e).popFirst(5))}static empty(){return new H(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new le(e.slice()))}}function bw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Y.fromTimestamp(r===1e9?new ve(t+1,0):new ve(t,r));return new Yt(i,H.empty(),e)}function Sw(n){return new Yt(n.readTime,n.key,-1)}class Yt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Yt(Y.min(),H.empty(),-1)}static max(){return new Yt(Y.max(),H.empty(),-1)}}function Aw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=H.comparator(n.documentKey,e.documentKey),t!==0?t:ne(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(n){if(n.code!==L.FAILED_PRECONDITION||n.message!==Pw)throw n;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&t()},c=>r(c))}),o=!0,s===i&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(i=>i?V.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new V((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let c=0;c<s;c++){const h=c;t(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,t){return new V((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function Cw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Xr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class da{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}da.oe=-1;function ms(n){return n==null}function es(n){return n===0&&1/n==-1/0}function kw(n){return typeof n=="number"&&Number.isInteger(n)&&!es(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function En(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Oh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){this.comparator=e,this.root=t||Re.EMPTY}insert(e,t){return new he(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Re.BLACK,null,null))}remove(e){return new he(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Re.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ci(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ci(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ci(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ci(this.root,e,this.comparator,!0)}}class Ci{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Re{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Re.RED,this.left=i??Re.EMPTY,this.right=s??Re.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Re(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Re.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Re.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}Re.EMPTY=null,Re.RED=!0,Re.BLACK=!1;Re.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Re(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.comparator=e,this.data=new he(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Sc(this.data.getIterator())}getIteratorFrom(e){return new Sc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new ke(this.comparator);return t.data=e,t}}class Sc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.fields=e,e.sort(Ce.comparator)}static empty(){return new Ke([])}unionWith(e){let t=new ke(Ce.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ke(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return qn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Lh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Lh("Invalid base64 string: "+s):s}}(e);return new Ne(t)}static fromUint8Array(e){const t=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ne(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ne.EMPTY_BYTE_STRING=new Ne("");const xw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xt(n){if(oe(!!n),typeof n=="string"){let e=0;const t=xw.exec(n);if(oe(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ye(n.seconds),nanos:ye(n.nanos)}}function ye(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function yn(n){return typeof n=="string"?Ne.fromBase64String(n):Ne.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function pa(n){const e=n.mapValue.fields.__previous_value__;return fa(e)?pa(e):e}function Ur(n){const e=Xt(n.mapValue.fields.__local_write_time__.timestampValue);return new ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw{constructor(e,t,r,i,s,o,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Br{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Br("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Br&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function _n(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?fa(n)?4:Dw(n)?9007199254740991:10:Q()}function dt(n,e){if(n===e)return!0;const t=_n(n);if(t!==_n(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ur(n).isEqual(Ur(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Xt(i.timestampValue),l=Xt(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return yn(i.bytesValue).isEqual(yn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ye(i.geoPointValue.latitude)===ye(s.geoPointValue.latitude)&&ye(i.geoPointValue.longitude)===ye(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ye(i.integerValue)===ye(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=ye(i.doubleValue),l=ye(s.doubleValue);return o===l?es(o)===es(l):isNaN(o)&&isNaN(l)}return!1}(n,e);case 9:return qn(n.arrayValue.values||[],e.arrayValue.values||[],dt);case 10:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(bc(o)!==bc(l))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(l[c]===void 0||!dt(o[c],l[c])))return!1;return!0}(n,e);default:return Q()}}function zr(n,e){return(n.values||[]).find(t=>dt(t,e))!==void 0}function Wn(n,e){if(n===e)return 0;const t=_n(n),r=_n(e);if(t!==r)return ne(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(n.booleanValue,e.booleanValue);case 2:return function(s,o){const l=ye(s.integerValue||s.doubleValue),c=ye(o.integerValue||o.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return Ac(n.timestampValue,e.timestampValue);case 4:return Ac(Ur(n),Ur(e));case 5:return ne(n.stringValue,e.stringValue);case 6:return function(s,o){const l=yn(s),c=yn(o);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),c=o.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=ne(l[h],c[h]);if(f!==0)return f}return ne(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ne(ye(s.latitude),ye(o.latitude));return l!==0?l:ne(ye(s.longitude),ye(o.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,o){const l=s.values||[],c=o.values||[];for(let h=0;h<l.length&&h<c.length;++h){const f=Wn(l[h],c[h]);if(f)return f}return ne(l.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===ki.mapValue&&o===ki.mapValue)return 0;if(s===ki.mapValue)return 1;if(o===ki.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),h=o.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const w=ne(c[m],f[m]);if(w!==0)return w;const T=Wn(l[c[m]],h[f[m]]);if(T!==0)return T}return ne(c.length,f.length)}(n.mapValue,e.mapValue);default:throw Q()}}function Ac(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ne(n,e);const t=Xt(n),r=Xt(e),i=ne(t.seconds,r.seconds);return i!==0?i:ne(t.nanos,r.nanos)}function Hn(n){return Co(n)}function Co(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Xt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return yn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return H.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Co(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Co(t.fields[o])}`;return i+"}"}(n.mapValue):Q()}function ko(n){return!!n&&"integerValue"in n}function ma(n){return!!n&&"arrayValue"in n}function Pc(n){return!!n&&"nullValue"in n}function Rc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ui(n){return!!n&&"mapValue"in n}function xr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return En(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=xr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=xr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Dw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e){this.value=e}static empty(){return new je({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ui(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=xr(t)}setAll(e){let t=Ce.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=l.popLast()}o?r[l.lastSegment()]=xr(o):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Ui(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return dt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Ui(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){En(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new je(xr(this.value))}}function Vh(n){const e=[];return En(n.fields,(t,r)=>{const i=new Ce([t]);if(Ui(r)){const s=Vh(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Ke(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t,r,i,s,o,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Fe(e,0,Y.min(),Y.min(),Y.min(),je.empty(),0)}static newFoundDocument(e,t,r,i){return new Fe(e,1,t,Y.min(),r,i,0)}static newNoDocument(e,t){return new Fe(e,2,t,Y.min(),Y.min(),je.empty(),0)}static newUnknownDocument(e,t){return new Fe(e,3,t,Y.min(),Y.min(),je.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=je.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=je.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Fe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Fe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ts{constructor(e,t){this.position=e,this.inclusive=t}}function Cc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],o=n.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),t.key):r=Wn(o,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function kc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!dt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ns{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ow(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Mh{}class _e extends Mh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Vw(e,t,r):t==="array-contains"?new Uw(e,r):t==="in"?new Bw(e,r):t==="not-in"?new zw(e,r):t==="array-contains-any"?new jw(e,r):new _e(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Mw(e,r):new Fw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Wn(t,this.value)):t!==null&&_n(this.value)===_n(t)&&this.matchesComparison(Wn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ft extends Mh{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ft(e,t)}matches(e){return Fh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Fh(n){return n.op==="and"}function Uh(n){return Lw(n)&&Fh(n)}function Lw(n){for(const e of n.filters)if(e instanceof ft)return!1;return!0}function xo(n){if(n instanceof _e)return n.field.canonicalString()+n.op.toString()+Hn(n.value);if(Uh(n))return n.filters.map(e=>xo(e)).join(",");{const e=n.filters.map(t=>xo(t)).join(",");return`${n.op}(${e})`}}function Bh(n,e){return n instanceof _e?function(r,i){return i instanceof _e&&r.op===i.op&&r.field.isEqual(i.field)&&dt(r.value,i.value)}(n,e):n instanceof ft?function(r,i){return i instanceof ft&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&Bh(o,i.filters[l]),!0):!1}(n,e):void Q()}function zh(n){return n instanceof _e?function(t){return`${t.field.canonicalString()} ${t.op} ${Hn(t.value)}`}(n):n instanceof ft?function(t){return t.op.toString()+" {"+t.getFilters().map(zh).join(" ,")+"}"}(n):"Filter"}class Vw extends _e{constructor(e,t,r){super(e,t,r),this.key=H.fromName(r.referenceValue)}matches(e){const t=H.comparator(e.key,this.key);return this.matchesComparison(t)}}class Mw extends _e{constructor(e,t){super(e,"in",t),this.keys=jh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Fw extends _e{constructor(e,t){super(e,"not-in",t),this.keys=jh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function jh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>H.fromName(r.referenceValue))}class Uw extends _e{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ma(t)&&zr(t.arrayValue,this.value)}}class Bw extends _e{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&zr(this.value.arrayValue,t)}}class zw extends _e{constructor(e,t){super(e,"not-in",t)}matches(e){if(zr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!zr(this.value.arrayValue,t)}}class jw extends _e{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ma(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>zr(this.value.arrayValue,r))}}/**
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
 */class Gw{constructor(e,t=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.ue=null}}function xc(n,e=null,t=[],r=[],i=null,s=null,o=null){return new Gw(n,e,t,r,i,s,o)}function ga(n){const e=X(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>xo(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ms(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Hn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Hn(r)).join(",")),e.ue=t}return e.ue}function ya(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Ow(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Bh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!kc(n.startAt,e.startAt)&&kc(n.endAt,e.endAt)}function No(n){return H.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t=null,r=[],i=[],s=null,o="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function qw(n,e,t,r,i,s,o,l){return new gs(n,e,t,r,i,s,o,l)}function _a(n){return new gs(n)}function Nc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ww(n){return n.collectionGroup!==null}function Nr(n){const e=X(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new ke(Ce.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new ns(s,r))}),t.has(Ce.keyField().canonicalString())||e.ce.push(new ns(Ce.keyField(),r))}return e.ce}function ct(n){const e=X(n);return e.le||(e.le=Hw(e,Nr(n))),e.le}function Hw(n,e){if(n.limitType==="F")return xc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ns(i.field,s)});const t=n.endAt?new ts(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ts(n.startAt.position,n.startAt.inclusive):null;return xc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Do(n,e,t){return new gs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ys(n,e){return ya(ct(n),ct(e))&&n.limitType===e.limitType}function Gh(n){return`${ga(ct(n))}|lt:${n.limitType}`}function On(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>zh(i)).join(", ")}]`),ms(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Hn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Hn(i)).join(",")),`Target(${r})`}(ct(n))}; limitType=${n.limitType})`}function _s(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Nr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(o,l,c){const h=Cc(o,l,c);return o.inclusive?h<=0:h<0}(r.startAt,Nr(r),i)||r.endAt&&!function(o,l,c){const h=Cc(o,l,c);return o.inclusive?h>=0:h>0}(r.endAt,Nr(r),i))}(n,e)}function $w(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function qh(n){return(e,t)=>{let r=!1;for(const i of Nr(n)){const s=Kw(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Kw(n,e,t){const r=n.field.isKeyField()?H.comparator(e.key,t.key):function(s,o,l){const c=o.data.field(s),h=l.data.field(s);return c!==null&&h!==null?Wn(c,h):Q()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){En(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Oh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qw=new he(H.comparator);function kt(){return Qw}const Wh=new he(H.comparator);function Ar(...n){let e=Wh;for(const t of n)e=e.insert(t.key,t);return e}function Hh(n){let e=Wh;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function an(){return Dr()}function $h(){return Dr()}function Dr(){return new Zn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Yw=new he(H.comparator),Xw=new ke(H.comparator);function J(...n){let e=Xw;for(const t of n)e=e.add(t);return e}const Jw=new ke(ne);function Zw(){return Jw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:es(e)?"-0":e}}function Qh(n){return{integerValue:""+n}}function e0(n,e){return kw(e)?Qh(e):Kh(n,e)}/**
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
 */class vs{constructor(){this._=void 0}}function t0(n,e,t){return n instanceof rs?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&fa(s)&&(s=pa(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(t,e):n instanceof jr?Xh(n,e):n instanceof Gr?Jh(n,e):function(i,s){const o=Yh(i,s),l=Dc(o)+Dc(i.Pe);return ko(o)&&ko(i.Pe)?Qh(l):Kh(i.serializer,l)}(n,e)}function n0(n,e,t){return n instanceof jr?Xh(n,e):n instanceof Gr?Jh(n,e):t}function Yh(n,e){return n instanceof is?function(r){return ko(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class rs extends vs{}class jr extends vs{constructor(e){super(),this.elements=e}}function Xh(n,e){const t=Zh(e);for(const r of n.elements)t.some(i=>dt(i,r))||t.push(r);return{arrayValue:{values:t}}}class Gr extends vs{constructor(e){super(),this.elements=e}}function Jh(n,e){let t=Zh(e);for(const r of n.elements)t=t.filter(i=>!dt(i,r));return{arrayValue:{values:t}}}class is extends vs{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Dc(n){return ye(n.integerValue||n.doubleValue)}function Zh(n){return ma(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function r0(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof jr&&i instanceof jr||r instanceof Gr&&i instanceof Gr?qn(r.elements,i.elements,dt):r instanceof is&&i instanceof is?dt(r.Pe,i.Pe):r instanceof rs&&i instanceof rs}(n.transform,e.transform)}class i0{constructor(e,t){this.version=e,this.transformResults=t}}class ut{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ut}static exists(e){return new ut(void 0,e)}static updateTime(e){return new ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Bi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ws{}function ed(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new nd(n.key,ut.none()):new Jr(n.key,n.data,ut.none());{const t=n.data,r=je.empty();let i=new ke(Ce.comparator);for(let s of e.fields)if(!i.has(s)){let o=t.field(s);o===null&&s.length>1&&(s=s.popLast(),o=t.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new en(n.key,r,new Ke(i.toArray()),ut.none())}}function s0(n,e,t){n instanceof Jr?function(i,s,o){const l=i.value.clone(),c=Lc(i.fieldTransforms,s,o.transformResults);l.setAll(c),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(n,e,t):n instanceof en?function(i,s,o){if(!Bi(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Lc(i.fieldTransforms,s,o.transformResults),c=s.data;c.setAll(td(i)),c.setAll(l),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,t)}function Or(n,e,t,r){return n instanceof Jr?function(s,o,l,c){if(!Bi(s.precondition,o))return l;const h=s.value.clone(),f=Vc(s.fieldTransforms,c,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof en?function(s,o,l,c){if(!Bi(s.precondition,o))return l;const h=Vc(s.fieldTransforms,c,o),f=o.data;return f.setAll(td(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,o,l){return Bi(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(n,e,t)}function o0(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=Yh(r.transform,i||null);s!=null&&(t===null&&(t=je.empty()),t.set(r.field,s))}return t||null}function Oc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&qn(r,i,(s,o)=>r0(s,o))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Jr extends ws{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class en extends ws{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function td(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Lc(n,e,t){const r=new Map;oe(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,n0(o,l,t[i]))}return r}function Vc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,o=t.data.field(i.field);r.set(i.field,t0(s,o,e))}return r}class nd extends ws{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class a0 extends ws{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&s0(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Or(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Or(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=$h();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=t.has(i.key)?null:l;const c=ed(o,l);c!==null&&r.set(i.key,c),o.isValidDocument()||o.convertToNoDocument(Y.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),J())}isEqual(e){return this.batchId===e.batchId&&qn(this.mutations,e.mutations,(t,r)=>Oc(t,r))&&qn(this.baseMutations,e.baseMutations,(t,r)=>Oc(t,r))}}class va{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){oe(e.mutations.length===r.length);let i=function(){return Yw}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new va(e,t,r,i)}}/**
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
 */class c0{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class u0{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ge,ee;function h0(n){switch(n){default:return Q();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function rd(n){if(n===void 0)return Ct("GRPC error has no .code"),L.UNKNOWN;switch(n){case ge.OK:return L.OK;case ge.CANCELLED:return L.CANCELLED;case ge.UNKNOWN:return L.UNKNOWN;case ge.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case ge.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case ge.INTERNAL:return L.INTERNAL;case ge.UNAVAILABLE:return L.UNAVAILABLE;case ge.UNAUTHENTICATED:return L.UNAUTHENTICATED;case ge.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case ge.NOT_FOUND:return L.NOT_FOUND;case ge.ALREADY_EXISTS:return L.ALREADY_EXISTS;case ge.PERMISSION_DENIED:return L.PERMISSION_DENIED;case ge.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case ge.ABORTED:return L.ABORTED;case ge.OUT_OF_RANGE:return L.OUT_OF_RANGE;case ge.UNIMPLEMENTED:return L.UNIMPLEMENTED;case ge.DATA_LOSS:return L.DATA_LOSS;default:return Q()}}(ee=ge||(ge={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function d0(){return new TextEncoder}/**
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
 */const f0=new un([4294967295,4294967295],0);function Mc(n){const e=d0().encode(n),t=new Sh;return t.update(e),new Uint8Array(t.digest())}function Fc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new un([t,r],0),new un([i,s],0)]}class wa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Pr(`Invalid padding: ${t}`);if(r<0)throw new Pr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Pr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Pr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=un.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(un.fromNumber(r)));return i.compare(f0)===1&&(i=new un([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=Mc(e),[r,i]=Fc(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);if(!this.de(o))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new wa(s,i,t);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const t=Mc(e),[r,i]=Fc(t);for(let s=0;s<this.hashCount;s++){const o=this.Ee(r,i,s);this.Ae(o)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Pr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Zr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ts(Y.min(),i,new he(ne),kt(),J())}}class Zr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Zr(r,t,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class id{constructor(e,t){this.targetId=e,this.me=t}}class sd{constructor(e,t,r=Ne.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Uc{constructor(){this.fe=0,this.ge=zc(),this.pe=Ne.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=J(),t=J(),r=J();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Q()}}),new Zr(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=zc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,oe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class p0{constructor(e){this.Le=e,this.Be=new Map,this.ke=kt(),this.qe=Bc(),this.Qe=new he(ne)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(No(s))if(r===0){const o=new H(s.path);this.Ue(t,o,Fe.newNoDocument(o,Y.min()))}else oe(r===1);else{const o=this.Ye(t);if(o!==r){const l=this.Ze(e),c=l?this.Xe(l,e,o):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let o,l;try{o=yn(r).toUint8Array()}catch(c){if(c instanceof Lh)return Gn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new wa(o,i,s)}catch(c){return Gn(c instanceof Pr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,o)=>{const l=this.Je(o);if(l){if(s.current&&No(l.target)){const c=new H(l.target.path);this.ke.get(c)!==null||this.it(o,c)||this.Ue(o,c,Fe.newNoDocument(c,e))}s.be&&(t.set(o,s.Ce()),s.ve())}});let r=J();this.qe.forEach((s,o)=>{let l=!0;o.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,o)=>o.setReadTime(e));const i=new Ts(e,t,this.Qe,this.ke,r);return this.ke=kt(),this.qe=Bc(),this.Qe=new he(ne),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new Uc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new ke(ne),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||G("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Uc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function Bc(){return new he(H.comparator)}function zc(){return new he(H.comparator)}const m0={asc:"ASCENDING",desc:"DESCENDING"},g0={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},y0={and:"AND",or:"OR"};class _0{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Oo(n,e){return n.useProto3Json||ms(e)?e:{value:e}}function ss(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function od(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function v0(n,e){return ss(n,e.toTimestamp())}function ht(n){return oe(!!n),Y.fromTimestamp(function(t){const r=Xt(t);return new ve(r.seconds,r.nanos)}(n))}function Ta(n,e){return Lo(n,e).canonicalString()}function Lo(n,e){const t=function(i){return new le(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function ad(n){const e=le.fromString(n);return oe(dd(e)),e}function Vo(n,e){return Ta(n.databaseId,e.path)}function ho(n,e){const t=ad(e);if(t.get(1)!==n.databaseId.projectId)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new H(cd(t))}function ld(n,e){return Ta(n.databaseId,e)}function w0(n){const e=ad(n);return e.length===4?le.emptyPath():cd(e)}function Mo(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function cd(n){return oe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function jc(n,e,t){return{name:Vo(n,e),fields:t.value.mapValue.fields}}function T0(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(oe(f===void 0||typeof f=="string"),Ne.fromBase64String(f||"")):(oe(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ne.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?L.UNKNOWN:rd(h.code);return new W(f,h.message||"")}(o);t=new sd(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ho(n,r.document.name),s=ht(r.document.updateTime),o=r.document.createTime?ht(r.document.createTime):Y.min(),l=new je({mapValue:{fields:r.document.fields}}),c=Fe.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new zi(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ho(n,r.document),s=r.readTime?ht(r.readTime):Y.min(),o=Fe.newNoDocument(i,s),l=r.removedTargetIds||[];t=new zi([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ho(n,r.document),s=r.removedTargetIds||[];t=new zi([],s,i,null)}else{if(!("filter"in e))return Q();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new u0(i,s),l=r.targetId;t=new id(l,o)}}return t}function E0(n,e){let t;if(e instanceof Jr)t={update:jc(n,e.key,e.value)};else if(e instanceof nd)t={delete:Vo(n,e.key)};else if(e instanceof en)t={update:jc(n,e.key,e.data),updateMask:x0(e.fieldMask)};else{if(!(e instanceof a0))return Q();t={verify:Vo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof rs)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof jr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Gr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof is)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw Q()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:v0(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(n,e.precondition)),t}function I0(n,e){return n&&n.length>0?(oe(e!==void 0),n.map(t=>function(i,s){let o=i.updateTime?ht(i.updateTime):ht(s);return o.isEqual(Y.min())&&(o=ht(s)),new i0(o,i.transformResults||[])}(t,e))):[]}function b0(n,e){return{documents:[ld(n,e.path)]}}function S0(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=ld(n,i);const s=function(h){if(h.length!==0)return hd(ft.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(w){return{field:Ln(w.field),direction:R0(w.dir)}}(f))}(e.orderBy);o&&(t.structuredQuery.orderBy=o);const l=Oo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function A0(n){let e=w0(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){oe(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){const w=ud(m);return w instanceof ft&&Uh(w)?w.getFilters():[w]}(t.where));let o=[];t.orderBy&&(o=function(m){return m.map(w=>function(S){return new ns(Vn(S.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(w))}(t.orderBy));let l=null;t.limit&&(l=function(m){let w;return w=typeof m=="object"?m.value:m,ms(w)?null:w}(t.limit));let c=null;t.startAt&&(c=function(m){const w=!!m.before,T=m.values||[];return new ts(T,w)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const w=!m.before,T=m.values||[];return new ts(T,w)}(t.endAt)),qw(e,i,o,s,l,"F",c,h)}function P0(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function ud(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Vn(t.unaryFilter.field);return _e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Vn(t.unaryFilter.field);return _e.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Vn(t.unaryFilter.field);return _e.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Vn(t.unaryFilter.field);return _e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(n):n.fieldFilter!==void 0?function(t){return _e.create(Vn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ft.create(t.compositeFilter.filters.map(r=>ud(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q()}}(t.compositeFilter.op))}(n):Q()}function R0(n){return m0[n]}function C0(n){return g0[n]}function k0(n){return y0[n]}function Ln(n){return{fieldPath:n.canonicalString()}}function Vn(n){return Ce.fromServerFormat(n.fieldPath)}function hd(n){return n instanceof _e?function(t){if(t.op==="=="){if(Rc(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NAN"}};if(Pc(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Rc(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NAN"}};if(Pc(t.value))return{unaryFilter:{field:Ln(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ln(t.field),op:C0(t.op),value:t.value}}}(n):n instanceof ft?function(t){const r=t.getFilters().map(i=>hd(i));return r.length===1?r[0]:{compositeFilter:{op:k0(t.op),filters:r}}}(n):Q()}function x0(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function dd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t,r,i,s=Y.min(),o=Y.min(),l=Ne.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Wt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0{constructor(e){this.ct=e}}function D0(n){const e=A0({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Do(e,e.limit,"L"):e}/**
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
 */class O0{constructor(){this.an=new L0}addToCollectionParentIndex(e,t){return this.an.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(Yt.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(Yt.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class L0{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new ke(le.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ke(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new $n(0)}static Bn(){return new $n(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(){this.changes=new Zn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Fe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class M0{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F0{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Or(r.mutation,i,Ke.empty(),ve.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,J()).next(()=>r))}getLocalViewOfDocuments(e,t,r=J()){const i=an();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let o=Ar();return s.forEach((l,c)=>{o=o.insert(l,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=an();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,J()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{t.set(o,l)})})}computeViews(e,t,r,i){let s=kt();const o=Dr(),l=function(){return Dr()}();return t.forEach((c,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof en)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Or(f.mutation,h,f.mutation.getFieldMask(),ve.now())):o.set(h.key,Ke.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((h,f)=>o.set(h,f)),t.forEach((h,f)=>{var m;return l.set(h,new M0(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Dr();let i=new he((o,l)=>o-l),s=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const l of o)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||Ke.empty();f=l.applyToLocalView(h,f),r.set(c,f);const m=(i.get(l.batchId)||J()).add(c);i=i.insert(l.batchId,m)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,m=$h();f.forEach(w=>{if(!s.has(w)){const T=ed(t.get(w),r.get(w));T!==null&&m.set(w,T),s=s.add(w)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ww(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):V.resolve(an());let l=-1,c=s;return o.next(h=>V.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(w=>{c=c.insert(f,w)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,c,h,J())).next(f=>({batchId:l,changes:Hh(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new H(t)).next(r=>{let i=Ar();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let o=Ar();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,c=>{const h=function(m,w){return new gs(w,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,w)=>{o=o.insert(m,w)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(o=>{s.forEach((c,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,Fe.newInvalidDocument(f)))});let l=Ar();return o.forEach((c,h)=>{const f=s.get(c);f!==void 0&&Or(f.mutation,h,Ke.empty(),ve.now()),_s(t,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return V.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:ht(i.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,function(i){return{name:i.name,query:D0(i.bundledQuery),readTime:ht(i.readTime)}}(t)),V.resolve()}}/**
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
 */class B0{constructor(){this.overlays=new he(H.comparator),this.Pr=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=an();return V.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const i=an(),s=t.length+1,o=new H(t.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return V.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new he((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=an(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=an(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return V.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new c0(t,r));let s=this.Pr.get(t);s===void 0&&(s=J(),this.Pr.set(t,s)),this.Pr.set(t,s.add(r.key))}}/**
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
 */class z0{constructor(){this.sessionToken=Ne.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this.Ir=new ke(Ee.Tr),this.Er=new ke(Ee.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){const r=new Ee(e,t);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Rr(new Ee(e,t))}Vr(e,t){e.forEach(r=>this.removeReference(r,t))}mr(e){const t=new H(new le([])),r=new Ee(t,e),i=new Ee(t,e+1),s=[];return this.Er.forEachInRange([r,i],o=>{this.Rr(o),s.push(o.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const t=new H(new le([])),r=new Ee(t,e),i=new Ee(t,e+1);let s=J();return this.Er.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const t=new Ee(e,0),r=this.Ir.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ee{constructor(e,t){this.key=e,this.yr=t}static Tr(e,t){return H.comparator(e.key,t.key)||ne(e.yr,t.yr)}static dr(e,t){return ne(e.yr,t.yr)||H.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new ke(Ee.Tr)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new l0(s,t,r,i);this.mutationQueue.push(o);for(const l of i)this.Sr=this.Sr.add(new Ee(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,t){return V.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Dr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ee(t,0),i=new Ee(t,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],o=>{const l=this.br(o.yr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ke(ne);return t.forEach(i=>{const s=new Ee(i,0),o=new Ee(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,o],l=>{r=r.add(l.yr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Ee(new H(s),0);let l=new ke(ne);return this.Sr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.yr)),!0)},o),V.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.br(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){oe(this.vr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return V.forEach(t.mutations,i=>{const s=new Ee(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,t){const r=new Ee(t,0),i=this.Sr.firstAfterOrEqual(r);return V.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G0{constructor(e){this.Fr=e,this.docs=function(){return new he(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Fr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():Fe.newInvalidDocument(t))}getEntries(e,t){let r=kt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Fe.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=kt();const o=t.path,l=new H(o.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||Aw(Sw(f),r)<=0||(i.has(f.key)||_s(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,t,r,i){Q()}Mr(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new q0(this)}getSize(e){return V.resolve(this.size)}}class q0 extends V0{constructor(e){super(),this.ur=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W0{constructor(e){this.persistence=e,this.Or=new Zn(t=>ga(t),ya),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new Ea,this.targetCount=0,this.Br=$n.Ln()}forEachTarget(e,t){return this.Or.forEach((r,i)=>t(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Nr&&(this.Nr=t),V.resolve()}Qn(e){this.Or.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Br=new $n(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Qn(t),V.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Lr.mr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Or.forEach((o,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Or.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.Or.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this.Lr.Ar(t,r),V.resolve()}removeMatchingKeys(e,t,r){this.Lr.Vr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Lr.mr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Lr.pr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this.Lr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0{constructor(e,t){this.kr={},this.overlays={},this.qr=new da(0),this.Qr=!1,this.Qr=!0,this.Kr=new z0,this.referenceDelegate=e(this),this.$r=new W0(this),this.indexManager=new O0,this.remoteDocumentCache=function(i){return new G0(i)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new N0(t),this.Wr=new U0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new B0,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.kr[e.toKey()];return r||(r=new j0(t,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,t,r){G("MemoryPersistence","Starting transaction:",e);const i=new $0(this.qr.next());return this.referenceDelegate.Gr(),r(i).next(s=>this.referenceDelegate.zr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}jr(e,t){return V.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,t)))}}class $0 extends Rw{constructor(e){super(),this.currentSequenceNumber=e}}class Ia{constructor(e){this.persistence=e,this.Hr=new Ea,this.Jr=null}static Yr(e){return new Ia(e)}get Zr(){if(this.Jr)return this.Jr;throw Q()}addReference(e,t,r){return this.Hr.addReference(r,t),this.Zr.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Hr.removeReference(r,t),this.Zr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.Zr.add(t.toString()),V.resolve()}removeTarget(e,t){this.Hr.mr(t.targetId).forEach(i=>this.Zr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Zr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Gr(){this.Jr=new Set}zr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Zr,r=>{const i=H.fromPath(r);return this.Xr(e,i).next(s=>{s||t.removeEntry(i,Y.min())})}).next(()=>(this.Jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Xr(e,t).next(r=>{r?this.Zr.delete(t.toString()):this.Zr.add(t.toString())})}Ur(e){return 0}Xr(e,t){return V.or([()=>V.resolve(this.Hr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.jr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Ki=r,this.$i=i}static Ui(e,t){let r=J(),i=J();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ba(e,t.fromCache,r,i)}}/**
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
 */class K0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Q0{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return qf()?8:Cw(xe())>0?6:4}()}initialize(e,t){this.Hi=e,this.indexManager=t,this.Wi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Ji(e,t).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Yi(e,t,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new K0;return this.Zi(e,t,o).next(l=>{if(s.result=l,this.Gi)return this.Xi(e,t,o,l.size)})}).next(()=>s.result)}Xi(e,t,r,i){return r.documentReadCount<this.zi?(Er()<=Z.DEBUG&&G("QueryEngine","SDK will not create cache indexes for query:",On(t),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),V.resolve()):(Er()<=Z.DEBUG&&G("QueryEngine","Query:",On(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ji*i?(Er()<=Z.DEBUG&&G("QueryEngine","The SDK decides to create cache indexes for query:",On(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ct(t))):V.resolve())}Ji(e,t){if(Nc(t))return V.resolve(null);let r=ct(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Do(t,null,"F"),r=ct(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=J(...s);return this.Hi.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.es(t,l);return this.ts(t,h,o,c.readTime)?this.Ji(e,Do(t,null,"F")):this.ns(e,h,t,c)}))})))}Yi(e,t,r,i){return Nc(t)||i.isEqual(Y.min())?V.resolve(null):this.Hi.getDocuments(e,r).next(s=>{const o=this.es(t,s);return this.ts(t,o,r,i)?V.resolve(null):(Er()<=Z.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),On(t)),this.ns(e,o,t,bw(i,-1)).next(l=>l))})}es(e,t){let r=new ke(qh(e));return t.forEach((i,s)=>{_s(e,s)&&(r=r.add(s))}),r}ts(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zi(e,t,r){return Er()<=Z.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",On(t)),this.Hi.getDocumentsMatchingQuery(e,t,Yt.min(),r)}ns(e,t,r,i){return this.Hi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y0{constructor(e,t,r,i){this.persistence=e,this.rs=t,this.serializer=i,this.ss=new he(ne),this.os=new Zn(s=>ga(s),ya),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new F0(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ss))}}function X0(n,e,t,r){return new Y0(n,e,t,r)}async function fd(n,e){const t=X(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.cs(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let c=J();for(const h of i){o.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(h=>({ls:h,removedBatchIds:o,addedBatchIds:l}))})})}function J0(n,e){const t=X(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.us.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const m=h.batch,w=m.keys();let T=V.resolve();return w.forEach(S=>{T=T.next(()=>f.getEntry(c,S)).next(P=>{const k=h.docVersions.get(S);oe(k!==null),P.version.compareTo(k)<0&&(m.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=J();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function pd(n){const e=X(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.$r.getLastRemoteSnapshotVersion(t))}function Z0(n,e){const t=X(n),r=e.snapshotVersion;let i=t.ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=t.us.newChangeBuffer({trackRemovals:!0});i=t.ss;const l=[];e.targetChanges.forEach((f,m)=>{const w=i.get(m);if(!w)return;l.push(t.$r.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.$r.addMatchingKeys(s,f.addedDocuments,m)));let T=w.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?T=T.withResumeToken(Ne.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),i=i.insert(m,T),function(P,k,R){return P.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:R.addedDocuments.size+R.modifiedDocuments.size+R.removedDocuments.size>0}(w,T,f)&&l.push(t.$r.updateTargetData(s,T))});let c=kt(),h=J();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(eT(s,o,e.documentUpdates).next(f=>{c=f.hs,h=f.Ps})),!r.isEqual(Y.min())){const f=t.$r.getLastRemoteSnapshotVersion(s).next(m=>t.$r.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return V.waitFor(l).next(()=>o.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,h)).next(()=>c)}).then(s=>(t.ss=i,s))}function eT(n,e,t){let r=J(),i=J();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let o=kt();return t.forEach((l,c)=>{const h=s.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(Y.min())?(e.removeEntry(l,c.readTime),o=o.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),o=o.insert(l,c)):G("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{hs:o,Ps:i}})}function tT(n,e){const t=X(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function nT(n,e){const t=X(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.$r.getTargetData(r,e).next(s=>s?(i=s,V.resolve(i)):t.$r.allocateTargetId(r).next(o=>(i=new Wt(e,o,"TargetPurposeListen",r.currentSequenceNumber),t.$r.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ss=t.ss.insert(r.targetId,r),t.os.set(e,r.targetId)),r})}async function Fo(n,e,t){const r=X(n),i=r.ss.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Xr(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ss=r.ss.remove(e),r.os.delete(i.target)}function Gc(n,e,t){const r=X(n);let i=Y.min(),s=J();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,h,f){const m=X(c),w=m.os.get(f);return w!==void 0?V.resolve(m.ss.get(w)):m.$r.getTargetData(h,f)}(r,o,ct(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(o,l.targetId).next(c=>{s=c})}).next(()=>r.rs.getDocumentsMatchingQuery(o,e,t?i:Y.min(),t?s:J())).next(l=>(rT(r,$w(e),l),{documents:l,Is:s})))}function rT(n,e,t){let r=n._s.get(e)||Y.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n._s.set(e,r)}class qc{constructor(){this.activeTargetIds=Zw()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class iT{constructor(){this.io=new qc,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,t,r){this.so[e]=t}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new qc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class sT{oo(e){}shutdown(){}}/**
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
 */class Wc{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let xi=null;function fo(){return xi===null?xi=function(){return 268435456+Math.round(2147483648*Math.random())}():xi++,"0x"+xi.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aT{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve="WebChannelConnection";class lT extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+t.host,this.Do=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get vo(){return!1}Fo(t,r,i,s,o){const l=fo(),c=this.Mo(t,r.toUriEncodedString());G("RestConnection",`Sending RPC '${t}' ${l}:`,c,i);const h={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(h,s,o),this.Oo(t,c,h,i).then(f=>(G("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw Gn("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",c,"request:",i),f})}No(t,r,i,s,o,l){return this.Fo(t,r,i,s,o)}xo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Jn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>t[o]=s),i&&i.headers.forEach((s,o)=>t[o]=s)}Mo(t,r){const i=oT[t];return`${this.bo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,t,r,i){const s=fo();return new Promise((o,l)=>{const c=new Ah;c.setWithCredentials(!0),c.listenOnce(Rh.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Fi.NO_ERROR:const f=c.getResponseJson();G(Ve,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),o(f);break;case Fi.TIMEOUT:G(Ve,`RPC '${e}' ${s} timed out`),l(new W(L.DEADLINE_EXCEEDED,"Request time out"));break;case Fi.HTTP_ERROR:const m=c.getStatus();if(G(Ve,`RPC '${e}' ${s} failed with status:`,m,"response text:",c.getResponseText()),m>0){let w=c.getResponseJson();Array.isArray(w)&&(w=w[0]);const T=w==null?void 0:w.error;if(T&&T.status&&T.message){const S=function(k){const R=k.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(R)>=0?R:L.UNKNOWN}(T.status);l(new W(S,T.message))}else l(new W(L.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new W(L.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{G(Ve,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);G(Ve,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",h,r,15)})}Lo(e,t,r){const i=fo(),s=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=xh(),l=kh(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.xmlHttpFactory=new Ph({})),this.xo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=s.join("");G(Ve,`Creating RPC '${e}' stream ${i}: ${f}`,c);const m=o.createWebChannel(f,c);let w=!1,T=!1;const S=new aT({Po:k=>{T?G(Ve,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(w||(G(Ve,`Opening RPC '${e}' stream ${i} transport.`),m.open(),w=!0),G(Ve,`RPC '${e}' stream ${i} sending:`,k),m.send(k))},Io:()=>m.close()}),P=(k,R,D)=>{k.listen(R,x=>{try{D(x)}catch(O){setTimeout(()=>{throw O},0)}})};return P(m,Sr.EventType.OPEN,()=>{T||(G(Ve,`RPC '${e}' stream ${i} transport opened.`),S.po())}),P(m,Sr.EventType.CLOSE,()=>{T||(T=!0,G(Ve,`RPC '${e}' stream ${i} transport closed`),S.wo())}),P(m,Sr.EventType.ERROR,k=>{T||(T=!0,Gn(Ve,`RPC '${e}' stream ${i} transport errored:`,k),S.wo(new W(L.UNAVAILABLE,"The operation could not be completed")))}),P(m,Sr.EventType.MESSAGE,k=>{var R;if(!T){const D=k.data[0];oe(!!D);const x=D,O=x.error||((R=x[0])===null||R===void 0?void 0:R.error);if(O){G(Ve,`RPC '${e}' stream ${i} received error:`,O);const F=O.status;let j=function(y){const _=ge[y];if(_!==void 0)return rd(_)}(F),A=O.message;j===void 0&&(j=L.INTERNAL,A="Unknown error status: "+F+" with message "+O.message),T=!0,S.wo(new W(j,A)),m.close()}else G(Ve,`RPC '${e}' stream ${i} received:`,D),S.So(D)}}),P(l,Ch.STAT_EVENT,k=>{k.stat===Ro.PROXY?G(Ve,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===Ro.NOPROXY&&G(Ve,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.yo()},0),S}}function po(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(n){return new _0(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class md{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ai=e,this.timerId=t,this.Bo=r,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const t=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,t-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gd{constructor(e,t,r,i,s,o,l,c){this.ai=e,this.jo=r,this.Ho=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new md(e,t)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,t){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():t&&t.code===L.RESOURCE_EXHAUSTED?(Ct(t.toString()),Ct("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):t&&t.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(t)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),t=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Jo===t&&this.h_(r,i)},r=>{e(()=>{const i=new W(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(i)})})}h_(e,t){const r=this.l_(this.Jo);this.stream=this.I_(e,t),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{r(()=>this.P_(i))}),this.stream.onMessage(i=>{r(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return t=>{this.ai.enqueueAndForget(()=>this.Jo===e?t():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class cT extends gd{constructor(e,t,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}I_(e,t){return this.connection.Lo("Listen",e,t)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const t=T0(this.serializer,e),r=function(s){if(!("targetChange"in s))return Y.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?Y.min():o.readTime?ht(o.readTime):Y.min()}(e);return this.listener.E_(t,r)}d_(e){const t={};t.database=Mo(this.serializer),t.addTarget=function(s,o){let l;const c=o.target;if(l=No(c)?{documents:b0(s,c)}:{query:S0(s,c)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=od(s,o.resumeToken);const h=Oo(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(Y.min())>0){l.readTime=ss(s,o.snapshotVersion.toTimestamp());const h=Oo(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=P0(this.serializer,e);r&&(t.labels=r),this.__(t)}A_(e){const t={};t.database=Mo(this.serializer),t.removeTarget=e,this.__(t)}}class uT extends gd{constructor(e,t,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,o),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,t){return this.connection.Lo("Write",e,t)}T_(e){return oe(!!e.streamToken),this.lastStreamToken=e.streamToken,oe(!e.writeResults||e.writeResults.length===0),this.listener.m_()}onNext(e){oe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.e_.reset();const t=I0(e.writeResults,e.commitTime),r=ht(e.commitTime);return this.listener.f_(r,t)}g_(){const e={};e.database=Mo(this.serializer),this.__(e)}V_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>E0(this.serializer,r))};this.__(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hT extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,t,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Fo(e,Lo(t,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(L.UNKNOWN,s.toString())})}No(e,t,r,i,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.No(e,Lo(t,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(L.UNKNOWN,o.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class dT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(Ct(t),this.b_=!1):G("OnlineStateTracker",t)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fT{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(o=>{r.enqueueAndForget(async()=>{In(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=X(c);h.N_.add(4),await ei(h),h.k_.set("Unknown"),h.N_.delete(4),await Is(h)}(this))})}),this.k_=new dT(r,i)}}async function Is(n){if(In(n))for(const e of n.L_)await e(!0)}async function ei(n){for(const e of n.L_)await e(!1)}function yd(n,e){const t=X(n);t.O_.has(e.targetId)||(t.O_.set(e.targetId,e),Ra(t)?Pa(t):er(t).n_()&&Aa(t,e))}function Sa(n,e){const t=X(n),r=er(t);t.O_.delete(e),r.n_()&&_d(t,e),t.O_.size===0&&(r.n_()?r.s_():In(t)&&t.k_.set("Unknown"))}function Aa(n,e){if(n.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}er(n).d_(e)}function _d(n,e){n.q_.xe(e),er(n).A_(e)}function Pa(n){n.q_=new p0({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.O_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),er(n).start(),n.k_.D_()}function Ra(n){return In(n)&&!er(n).t_()&&n.O_.size>0}function In(n){return X(n).N_.size===0}function vd(n){n.q_=void 0}async function pT(n){n.k_.set("Online")}async function mT(n){n.O_.forEach((e,t)=>{Aa(n,e)})}async function gT(n,e){vd(n),Ra(n)?(n.k_.F_(e),Pa(n)):n.k_.set("Unknown")}async function yT(n,e,t){if(n.k_.set("Online"),e instanceof sd&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.O_.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.O_.delete(l),i.q_.removeTarget(l))}(n,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await os(n,r)}else if(e instanceof zi?n.q_.Ke(e):e instanceof id?n.q_.He(e):n.q_.We(e),!t.isEqual(Y.min()))try{const r=await pd(n.localStore);t.compareTo(r)>=0&&await function(s,o){const l=s.q_.rt(o);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.O_.get(h);f&&s.O_.set(h,f.withResumeToken(c.resumeToken,o))}}),l.targetMismatches.forEach((c,h)=>{const f=s.O_.get(c);if(!f)return;s.O_.set(c,f.withResumeToken(Ne.EMPTY_BYTE_STRING,f.snapshotVersion)),_d(s,c);const m=new Wt(f.target,c,h,f.sequenceNumber);Aa(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await os(n,r)}}async function os(n,e,t){if(!Xr(e))throw e;n.N_.add(1),await ei(n),n.k_.set("Offline"),t||(t=()=>pd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await t(),n.N_.delete(1),await Is(n)})}function wd(n,e){return e().catch(t=>os(n,t,e))}async function bs(n){const e=X(n),t=Jt(e);let r=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;_T(e);)try{const i=await tT(e.localStore,r);if(i===null){e.x_.length===0&&t.s_();break}r=i.batchId,vT(e,i)}catch(i){await os(e,i)}Td(e)&&Ed(e)}function _T(n){return In(n)&&n.x_.length<10}function vT(n,e){n.x_.push(e);const t=Jt(n);t.n_()&&t.R_&&t.V_(e.mutations)}function Td(n){return In(n)&&!Jt(n).t_()&&n.x_.length>0}function Ed(n){Jt(n).start()}async function wT(n){Jt(n).g_()}async function TT(n){const e=Jt(n);for(const t of n.x_)e.V_(t.mutations)}async function ET(n,e,t){const r=n.x_.shift(),i=va.from(r,e,t);await wd(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await bs(n)}async function IT(n,e){e&&Jt(n).R_&&await async function(r,i){if(function(o){return h0(o)&&o!==L.ABORTED}(i.code)){const s=r.x_.shift();Jt(r).i_(),await wd(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await bs(r)}}(n,e),Td(n)&&Ed(n)}async function Hc(n,e){const t=X(n);t.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=In(t);t.N_.add(3),await ei(t),r&&t.k_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.N_.delete(3),await Is(t)}async function bT(n,e){const t=X(n);e?(t.N_.delete(2),await Is(t)):e||(t.N_.add(2),await ei(t),t.k_.set("Unknown"))}function er(n){return n.Q_||(n.Q_=function(t,r,i){const s=X(t);return s.y_(),new cT(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{To:pT.bind(null,n),Ao:mT.bind(null,n),Vo:gT.bind(null,n),E_:yT.bind(null,n)}),n.L_.push(async e=>{e?(n.Q_.i_(),Ra(n)?Pa(n):n.k_.set("Unknown")):(await n.Q_.stop(),vd(n))})),n.Q_}function Jt(n){return n.K_||(n.K_=function(t,r,i){const s=X(t);return s.y_(),new uT(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{To:()=>Promise.resolve(),Ao:wT.bind(null,n),Vo:IT.bind(null,n),m_:TT.bind(null,n),f_:ET.bind(null,n)}),n.L_.push(async e=>{e?(n.K_.i_(),await bs(n)):(await n.K_.stop(),n.x_.length>0&&(G("RemoteStore",`Stopping write stream with ${n.x_.length} pending writes`),n.x_=[]))})),n.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const o=Date.now()+r,l=new Ca(e,t,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ka(n,e){if(Ct("AsyncQueue",`${e}: ${n}`),Xr(n))return new W(L.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||H.comparator(t.key,r.key):(t,r)=>H.comparator(t.key,r.key),this.keyedMap=Ar(),this.sortedSet=new he(this.comparator)}static emptySet(e){return new zn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof zn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new zn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.U_=new he(H.comparator)}track(e){const t=e.doc.key,r=this.U_.get(t);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(t,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(t):e.type===1&&r.type===2?this.U_=this.U_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):Q():this.U_=this.U_.insert(t,e)}W_(){const e=[];return this.U_.inorderTraversal((t,r)=>{e.push(r)}),e}}class Kn{constructor(e,t,r,i,s,o,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const o=[];return t.forEach(l=>{o.push({type:0,doc:l})}),new Kn(e,t,zn.emptySet(t),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ys(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ST{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class AT{constructor(){this.queries=Kc(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(t,r){const i=X(t),s=i.queries;i.queries=Kc(),s.forEach((o,l)=>{for(const c of l.z_)c.onError(r)})})(this,new W(L.ABORTED,"Firestore shutting down"))}}function Kc(){return new Zn(n=>Gh(n),ys)}async function Id(n,e){const t=X(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.j_()&&e.H_()&&(r=2):(s=new ST,r=e.H_()?0:1);try{switch(r){case 0:s.G_=await t.onListen(i,!0);break;case 1:s.G_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(o){const l=ka(o,`Initialization of query '${On(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.z_.push(e),e.Y_(t.onlineState),s.G_&&e.Z_(s.G_)&&xa(t)}async function bd(n,e){const t=X(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const o=s.z_.indexOf(e);o>=0&&(s.z_.splice(o,1),s.z_.length===0?i=e.H_()?0:1:!s.j_()&&e.H_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function PT(n,e){const t=X(n);let r=!1;for(const i of e){const s=i.query,o=t.queries.get(s);if(o){for(const l of o.z_)l.Z_(i)&&(r=!0);o.G_=i}}r&&xa(t)}function RT(n,e,t){const r=X(n),i=r.queries.get(e);if(i)for(const s of i.z_)s.onError(t);r.queries.delete(e)}function xa(n){n.J_.forEach(e=>{e.next()})}var Uo,Qc;(Qc=Uo||(Uo={})).X_="default",Qc.Cache="cache";class Sd{constructor(e,t,r){this.query=e,this.ea=t,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Kn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ta?this.ra(e)&&(this.ea.next(e),t=!0):this.ia(e,this.onlineState)&&(this.sa(e),t=!0),this.na=e,t}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let t=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),t=!0),t}ia(e,t){if(!e.fromCache||!this.H_())return!0;const r=t!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const t=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}sa(e){e=Kn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==Uo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e){this.key=e}}class Pd{constructor(e){this.key=e}}class CT{constructor(e,t){this.query=e,this.Ia=t,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=J(),this.mutatedKeys=J(),this.da=qh(e),this.Aa=new zn(this.da)}get Ra(){return this.Ia}Va(e,t){const r=t?t.ma:new $c,i=t?t.Aa:this.Aa;let s=t?t.mutatedKeys:this.mutatedKeys,o=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const w=i.get(f),T=_s(this.query,m)?m:null,S=!!w&&this.mutatedKeys.has(w.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let k=!1;w&&T?w.data.isEqual(T.data)?S!==P&&(r.track({type:3,doc:T}),k=!0):this.fa(w,T)||(r.track({type:2,doc:T}),k=!0,(c&&this.da(T,c)>0||h&&this.da(T,h)<0)&&(l=!0)):!w&&T?(r.track({type:0,doc:T}),k=!0):w&&!T&&(r.track({type:1,doc:w}),k=!0,(c||h)&&(l=!0)),k&&(T?(o=o.add(T),s=P?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Aa:o,ma:r,ts:l,mutatedKeys:s}}fa(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const o=e.ma.W_();o.sort((f,m)=>function(T,S){const P=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return P(T)-P(S)}(f.type,m.type)||this.da(f.doc,m.doc)),this.ga(r),i=i!=null&&i;const l=t&&!i?this.pa():[],c=this.Ea.size===0&&this.current&&!i?1:0,h=c!==this.Ta;return this.Ta=c,o.length!==0||h?{snapshot:new Kn(this.query,e.Aa,s,o,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:l}:{ya:l}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new $c,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(t=>this.Ia=this.Ia.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ia=this.Ia.delete(t)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=J(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const t=[];return e.forEach(r=>{this.Ea.has(r)||t.push(new Pd(r))}),this.Ea.forEach(r=>{e.has(r)||t.push(new Ad(r))}),t}Sa(e){this.Ia=e.Is,this.Ea=J();const t=this.Va(e.documents);return this.applyChanges(t,!0)}ba(){return Kn.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class kT{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class xT{constructor(e){this.key=e,this.Da=!1}}class NT{constructor(e,t,r,i,s,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ca={},this.va=new Zn(l=>Gh(l),ys),this.Fa=new Map,this.Ma=new Set,this.xa=new he(H.comparator),this.Oa=new Map,this.Na=new Ea,this.La={},this.Ba=new Map,this.ka=$n.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function DT(n,e,t=!0){const r=Dd(n);let i;const s=r.va.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ba()):i=await Rd(r,e,t,!0),i}async function OT(n,e){const t=Dd(n);await Rd(t,e,!0,!1)}async function Rd(n,e,t,r){const i=await nT(n.localStore,ct(e)),s=i.targetId,o=t?n.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await LT(n,e,s,o==="current",i.resumeToken)),n.isPrimaryClient&&t&&yd(n.remoteStore,i),l}async function LT(n,e,t,r,i){n.Qa=(m,w,T)=>async function(P,k,R,D){let x=k.view.Va(R);x.ts&&(x=await Gc(P.localStore,k.query,!1).then(({documents:A})=>k.view.Va(A,x)));const O=D&&D.targetChanges.get(k.targetId),F=D&&D.targetMismatches.get(k.targetId)!=null,j=k.view.applyChanges(x,P.isPrimaryClient,O,F);return Xc(P,k.targetId,j.ya),j.snapshot}(n,m,w,T);const s=await Gc(n.localStore,e,!0),o=new CT(e,s.Is),l=o.Va(s.documents),c=Zr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=o.applyChanges(l,n.isPrimaryClient,c);Xc(n,t,h.ya);const f=new kT(e,t,o);return n.va.set(e,f),n.Fa.has(t)?n.Fa.get(t).push(e):n.Fa.set(t,[e]),h.snapshot}async function VT(n,e,t){const r=X(n),i=r.va.get(e),s=r.Fa.get(i.targetId);if(s.length>1)return r.Fa.set(i.targetId,s.filter(o=>!ys(o,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Fo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Sa(r.remoteStore,i.targetId),Bo(r,i.targetId)}).catch(Yr)):(Bo(r,i.targetId),await Fo(r.localStore,i.targetId,!0))}async function MT(n,e){const t=X(n),r=t.va.get(e),i=t.Fa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Sa(t.remoteStore,r.targetId))}async function FT(n,e,t){const r=WT(n);try{const i=await function(o,l){const c=X(o),h=ve.now(),f=l.reduce((T,S)=>T.add(S.key),J());let m,w;return c.persistence.runTransaction("Locally write mutations","readwrite",T=>{let S=kt(),P=J();return c.us.getEntries(T,f).next(k=>{S=k,S.forEach((R,D)=>{D.isValidDocument()||(P=P.add(R))})}).next(()=>c.localDocuments.getOverlayedDocuments(T,S)).next(k=>{m=k;const R=[];for(const D of l){const x=o0(D,m.get(D.key).overlayedDocument);x!=null&&R.push(new en(D.key,x,Vh(x.value.mapValue),ut.exists(!0)))}return c.mutationQueue.addMutationBatch(T,h,R,l)}).next(k=>{w=k;const R=k.applyToLocalDocumentSet(m,P);return c.documentOverlayCache.saveOverlays(T,k.batchId,R)})}).then(()=>({batchId:w.batchId,changes:Hh(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,c){let h=o.La[o.currentUser.toKey()];h||(h=new he(ne)),h=h.insert(l,c),o.La[o.currentUser.toKey()]=h}(r,i.batchId,t),await ti(r,i.changes),await bs(r.remoteStore)}catch(i){const s=ka(i,"Failed to persist write");t.reject(s)}}async function Cd(n,e){const t=X(n);try{const r=await Z0(t.localStore,e);e.targetChanges.forEach((i,s)=>{const o=t.Oa.get(s);o&&(oe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Da=!0:i.modifiedDocuments.size>0?oe(o.Da):i.removedDocuments.size>0&&(oe(o.Da),o.Da=!1))}),await ti(t,r,e)}catch(r){await Yr(r)}}function Yc(n,e,t){const r=X(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.va.forEach((s,o)=>{const l=o.view.Y_(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const c=X(o);c.onlineState=l;let h=!1;c.queries.forEach((f,m)=>{for(const w of m.z_)w.Y_(l)&&(h=!0)}),h&&xa(c)}(r.eventManager,e),i.length&&r.Ca.E_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function UT(n,e,t){const r=X(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Oa.get(e),s=i&&i.key;if(s){let o=new he(H.comparator);o=o.insert(s,Fe.newNoDocument(s,Y.min()));const l=J().add(s),c=new Ts(Y.min(),new Map,new he(ne),o,l);await Cd(r,c),r.xa=r.xa.remove(s),r.Oa.delete(e),Na(r)}else await Fo(r.localStore,e,!1).then(()=>Bo(r,e,t)).catch(Yr)}async function BT(n,e){const t=X(n),r=e.batch.batchId;try{const i=await J0(t.localStore,e);xd(t,r,null),kd(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await ti(t,i)}catch(i){await Yr(i)}}async function zT(n,e,t){const r=X(n);try{const i=await function(o,l){const c=X(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(m=>(oe(m!==null),f=m.keys(),c.mutationQueue.removeMutationBatch(h,m))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);xd(r,e,t),kd(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await ti(r,i)}catch(i){await Yr(i)}}function kd(n,e){(n.Ba.get(e)||[]).forEach(t=>{t.resolve()}),n.Ba.delete(e)}function xd(n,e,t){const r=X(n);let i=r.La[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.La[r.currentUser.toKey()]=i}}function Bo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Fa.get(e))n.va.delete(r),t&&n.Ca.Ka(r,t);n.Fa.delete(e),n.isPrimaryClient&&n.Na.mr(e).forEach(r=>{n.Na.containsKey(r)||Nd(n,r)})}function Nd(n,e){n.Ma.delete(e.path.canonicalString());const t=n.xa.get(e);t!==null&&(Sa(n.remoteStore,t),n.xa=n.xa.remove(e),n.Oa.delete(t),Na(n))}function Xc(n,e,t){for(const r of t)r instanceof Ad?(n.Na.addReference(r.key,e),jT(n,r)):r instanceof Pd?(G("SyncEngine","Document no longer in limbo: "+r.key),n.Na.removeReference(r.key,e),n.Na.containsKey(r.key)||Nd(n,r.key)):Q()}function jT(n,e){const t=e.key,r=t.path.canonicalString();n.xa.get(t)||n.Ma.has(r)||(G("SyncEngine","New document in limbo: "+t),n.Ma.add(r),Na(n))}function Na(n){for(;n.Ma.size>0&&n.xa.size<n.maxConcurrentLimboResolutions;){const e=n.Ma.values().next().value;n.Ma.delete(e);const t=new H(le.fromString(e)),r=n.ka.next();n.Oa.set(r,new xT(t)),n.xa=n.xa.insert(t,r),yd(n.remoteStore,new Wt(ct(_a(t.path)),r,"TargetPurposeLimboResolution",da.oe))}}async function ti(n,e,t){const r=X(n),i=[],s=[],o=[];r.va.isEmpty()||(r.va.forEach((l,c)=>{o.push(r.Qa(c,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(h){i.push(h);const m=ba.Ui(c.targetId,h);s.push(m)}}))}),await Promise.all(o),r.Ca.E_(i),await async function(c,h){const f=X(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(h,w=>V.forEach(w.Ki,T=>f.persistence.referenceDelegate.addReference(m,w.targetId,T)).next(()=>V.forEach(w.$i,T=>f.persistence.referenceDelegate.removeReference(m,w.targetId,T)))))}catch(m){if(!Xr(m))throw m;G("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const w=m.targetId;if(!m.fromCache){const T=f.ss.get(w),S=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(S);f.ss=f.ss.insert(w,P)}}}(r.localStore,s))}async function GT(n,e){const t=X(n);if(!t.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await fd(t.localStore,e);t.currentUser=e,function(s,o){s.Ba.forEach(l=>{l.forEach(c=>{c.reject(new W(L.CANCELLED,o))})}),s.Ba.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ti(t,r.ls)}}function qT(n,e){const t=X(n),r=t.Oa.get(e);if(r&&r.Da)return J().add(r.key);{let i=J();const s=t.Fa.get(e);if(!s)return i;for(const o of s){const l=t.va.get(o);i=i.unionWith(l.view.Ra)}return i}}function Dd(n){const e=X(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=UT.bind(null,e),e.Ca.E_=PT.bind(null,e.eventManager),e.Ca.Ka=RT.bind(null,e.eventManager),e}function WT(n){const e=X(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zT.bind(null,e),e}class Jc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Es(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return X0(this.persistence,new Q0,e.initialUser,this.serializer)}createPersistence(e){return new H0(Ia.Yr,this.serializer)}createSharedClientState(e){return new iT}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class HT{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Yc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=GT.bind(null,this.syncEngine),await bT(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new AT}()}createDatastore(e){const t=Es(e.databaseInfo.databaseId),r=function(s){return new lT(s)}(e.databaseInfo);return function(s,o,l,c){return new hT(s,o,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,o,l){return new fT(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Yc(this.syncEngine,t,0),function(){return Wc.D()?new Wc:new sT}())}createSyncEngine(e,t){return function(i,s,o,l,c,h,f){const m=new NT(i,s,o,l,c,h);return f&&(m.qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=X(i);G("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await ei(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Od{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):Ct("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Me.UNAUTHENTICATED,this.clientId=Dh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{G("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(G("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ka(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function mo(n,e){n.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await fd(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Zc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await QT(n);G("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Hc(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Hc(e.remoteStore,i)),n._onlineComponents=e}function KT(n){return n.name==="FirebaseError"?n.code===L.FAILED_PRECONDITION||n.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function QT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await mo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!KT(t))throw t;Gn("Error using user provided cache. Falling back to memory cache: "+t),await mo(n,new Jc)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await mo(n,new Jc);return n._offlineComponents}async function Ld(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await Zc(n,n._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await Zc(n,new HT))),n._onlineComponents}function XT(n){return Ld(n).then(e=>e.syncEngine)}async function Vd(n){const e=await Ld(n),t=e.eventManager;return t.onListen=DT.bind(null,e.syncEngine),t.onUnlisten=VT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=OT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=MT.bind(null,e.syncEngine),t}function JT(n,e,t={}){const r=new Pt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,h){const f=new Od({next:w=>{o.enqueueAndForget(()=>bd(s,m));const T=w.docs.has(l);!T&&w.fromCache?h.reject(new W(L.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&w.fromCache&&c&&c.source==="server"?h.reject(new W(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(w)},error:w=>h.reject(w)}),m=new Sd(_a(l.path),f,{includeMetadataChanges:!0,oa:!0});return Id(s,m)}(await Vd(n),n.asyncQueue,e,t,r)),r.promise}function ZT(n,e,t={}){const r=new Pt;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,l,c,h){const f=new Od({next:w=>{o.enqueueAndForget(()=>bd(s,m)),w.fromCache&&c.source==="server"?h.reject(new W(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(w)},error:w=>h.reject(w)}),m=new Sd(l,f,{includeMetadataChanges:!0,oa:!0});return Id(s,m)}(await Vd(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Md(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(n,e,t){if(!t)throw new W(L.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function eE(n,e,t,r){if(e===!0&&r===!0)throw new W(L.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function tu(n){if(!H.isDocumentKey(n))throw new W(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function nu(n){if(H.isDocumentKey(n))throw new W(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Da(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Q()}function xt(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new W(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Da(n);throw new W(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}eE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Md((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ss{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ru({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new W(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new W(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ru(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mw;switch(r.type){case"firstParty":return new vw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=eu.get(t);r&&(G("ComponentProvider","Removing Datastore"),eu.delete(t),r.terminate())}(this),Promise.resolve()}}function tE(n,e,t,r={}){var i;const s=(n=xt(n,Ss))._getSettings(),o=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Gn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=Me.MOCK_USER;else{l=fu(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new W(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Me(h)}n._authCredentials=new gw(new Nh(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new As(this.firestore,e,this._query)}}class Ge{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}}class Kt extends As{constructor(e,t,r){super(e,t,_a(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new H(e))}withConverter(e){return new Kt(this.firestore,e,this._path)}}function Ud(n,e,...t){if(n=ue(n),Fd("collection","path",e),n instanceof Ss){const r=le.fromString(e,...t);return nu(r),new Kt(n,null,r)}{if(!(n instanceof Ge||n instanceof Kt))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return nu(r),new Kt(n.firestore,null,r)}}function Oa(n,e,...t){if(n=ue(n),arguments.length===1&&(e=Dh.newId()),Fd("doc","path",e),n instanceof Ss){const r=le.fromString(e,...t);return tu(r),new Ge(n,null,new H(r))}{if(!(n instanceof Ge||n instanceof Kt))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return tu(r),new Ge(n.firestore,n instanceof Kt?n.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new md(this,"async_queue_retry"),this.Tu=()=>{const t=po();t&&G("AsyncQueue","Visibility state changed to "+t.visibilityState),this.e_.zo()};const e=po();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const t=po();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const t=new Pt;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!Xr(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const t=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const i=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Ct("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=t,t}enqueueAfterDelay(e,t,r){this.Eu(),this.Iu.indexOf(e)>-1&&(t=0);const i=Ca.createAndSchedule(this,e,t,r,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&Q()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const t of this.cu)if(t.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.cu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const t=this.cu.indexOf(e);this.cu.splice(t,1)}}class ni extends Ss{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new nE}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Bd(this),this._firestoreClient.terminate()}}function Ps(n,e){const t=typeof n=="object"?n:qo(),r=typeof n=="string"?n:"(default)",i=cs(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=uu("firestore");s&&tE(i,...s)}return i}function La(n){return n._firestoreClient||Bd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Bd(n){var e,t,r;const i=n._freezeSettings(),s=function(l,c,h,f){return new Nw(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Md(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new $T(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qn(Ne.fromBase64String(e))}catch(t){throw new W(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Qn(Ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new W(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ce(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new W(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new W(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE=/^__.*__$/;class iE{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new en(e,this.data,this.fieldMask,t,this.fieldTransforms):new Jr(e,this.data,t,this.fieldTransforms)}}class zd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new en(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function jd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class Fa{constructor(e,t,r,i,s,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new Fa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.wu({path:r,bu:!1});return i.Du(e),i}Cu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.wu({path:r,bu:!1});return i.pu(),i}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return as(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(e.length===0)throw this.Fu("Document fields must not be empty");if(jd(this.yu)&&rE.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class sE{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Es(e)}Ou(e,t,r,i=!1){return new Fa({yu:e,methodName:t,xu:r,path:Ce.emptyPath(),bu:!1,Mu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Gd(n){const e=n._freezeSettings(),t=Es(n._databaseId);return new sE(n._databaseId,!!e.ignoreUndefinedProperties,t)}function oE(n,e,t,r,i,s={}){const o=n.Ou(s.merge||s.mergeFields?2:0,e,t,i);Ua("Data must be an object, but it was:",o,r);const l=qd(r,o);let c,h;if(s.merge)c=new Ke(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const w=zo(e,m,t);if(!o.contains(w))throw new W(L.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Hd(f,w)||f.push(w)}c=new Ke(f),h=o.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,h=o.fieldTransforms;return new iE(new je(l),c,h)}class Cs extends Va{_toFieldTransform(e){if(e.yu!==2)throw e.yu===1?e.Fu(`${this._methodName}() can only appear at the top level of your update data`):e.Fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Cs}}function aE(n,e,t,r){const i=n.Ou(1,e,t);Ua("Data must be an object, but it was:",i,r);const s=[],o=je.empty();En(r,(c,h)=>{const f=Ba(e,c,t);h=ue(h);const m=i.Cu(f);if(h instanceof Cs)s.push(f);else{const w=ks(h,m);w!=null&&(s.push(f),o.set(f,w))}});const l=new Ke(s);return new zd(o,l,i.fieldTransforms)}function lE(n,e,t,r,i,s){const o=n.Ou(1,e,t),l=[zo(e,r,t)],c=[i];if(s.length%2!=0)throw new W(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<s.length;w+=2)l.push(zo(e,s[w])),c.push(s[w+1]);const h=[],f=je.empty();for(let w=l.length-1;w>=0;--w)if(!Hd(h,l[w])){const T=l[w];let S=c[w];S=ue(S);const P=o.Cu(T);if(S instanceof Cs)h.push(T);else{const k=ks(S,P);k!=null&&(h.push(T),f.set(T,k))}}const m=new Ke(h);return new zd(f,m,o.fieldTransforms)}function ks(n,e){if(Wd(n=ue(n)))return Ua("Unsupported field value:",e,n),qd(n,e);if(n instanceof Va)return function(r,i){if(!jd(i.yu))throw i.Fu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Fu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.bu&&e.yu!==4)throw e.Fu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let c=ks(l,i.vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),o++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return e0(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ve.fromDate(r);return{timestampValue:ss(i.serializer,s)}}if(r instanceof ve){const s=new ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ss(i.serializer,s)}}if(r instanceof Ma)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qn)return{bytesValue:od(i.serializer,r._byteString)};if(r instanceof Ge){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ta(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Fu(`Unsupported field value: ${Da(r)}`)}(n,e)}function qd(n,e){const t={};return Oh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):En(n,(r,i)=>{const s=ks(i,e.Su(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function Wd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ve||n instanceof Ma||n instanceof Qn||n instanceof Ge||n instanceof Va)}function Ua(n,e,t){if(!Wd(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=Da(t);throw r==="an object"?e.Fu(n+" a custom object"):e.Fu(n+" "+r)}}function zo(n,e,t){if((e=ue(e))instanceof Rs)return e._internalPath;if(typeof e=="string")return Ba(n,e);throw as("Field path arguments must be of type string or ",n,!1,void 0,t)}const cE=new RegExp("[~\\*/\\[\\]]");function Ba(n,e,t){if(e.search(cE)>=0)throw as(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Rs(...e.split("."))._internalPath}catch{throw as(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function as(n,e,t,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new W(L.INVALID_ARGUMENT,l+n+c)}function Hd(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new uE(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Kd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class uE extends $d{data(){return super.data()}}function Kd(n,e){return typeof e=="string"?Ba(n,e):e instanceof Rs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new W(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dE{convertValue(e,t="none"){switch(_n(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ye(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Q()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return En(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Ma(ye(e.latitude),ye(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=pa(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ur(e));default:return null}}convertTimestamp(e){const t=Xt(e);return new ve(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=le.fromString(e);oe(dd(r));const i=new Br(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(t)||Ct(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qd extends $d{constructor(e,t,r,i,s,o){super(e,t,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ji(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Kd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class ji extends Qd{data(e={}){return super.data(e)}}class pE{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Rr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new ji(this._firestore,this._userDataWriter,r.key,r,new Rr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new W(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const c=new ji(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Rr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new ji(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Rr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:mE(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function mE(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gE(n){n=xt(n,Ge);const e=xt(n.firestore,ni);return JT(La(e),n._key).then(t=>vE(e,n,t))}class Yd extends dE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,t)}}function Xd(n){n=xt(n,As);const e=xt(n.firestore,ni),t=La(e),r=new Yd(e);return hE(n._query),ZT(t,n._query).then(i=>new pE(e,r,n,i))}function yE(n,e,t){n=xt(n,Ge);const r=xt(n.firestore,ni),i=fE(n.converter,e,t);return Jd(r,[oE(Gd(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,ut.none())])}function _E(n,e,t,...r){n=xt(n,Ge);const i=xt(n.firestore,ni),s=Gd(i);let o;return o=typeof(e=ue(e))=="string"||e instanceof Rs?lE(s,"updateDoc",n._key,e,t,r):aE(s,"updateDoc",n._key,e),Jd(i,[o.toMutation(n._key,ut.exists(!0))])}function Jd(n,e){return function(r,i){const s=new Pt;return r.asyncQueue.enqueueAndForget(async()=>FT(await XT(r),i,s)),s.promise}(La(n),e)}function vE(n,e,t){const r=t.docs.get(e._key),i=new Yd(n);return new Qd(n,i,e._key,r,new Rr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Jn=i})(wn),dn(new Qt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new ni(new yw(r.getProvider("auth-internal")),new Tw(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Br(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),ot(Ic,"4.6.5",e),ot(Ic,"4.6.5","esm2017")})();async function DE(n,e,t,r){const i=Ps(n),s=Oa(i,e,t);await _E(s,r)}async function wE(n,e,t){const r=Ps(n),i={};Object.keys(t).forEach(s=>{t[s]!==void 0&&(i[s]=t[s])}),await yE(Oa(r,"user",e),i,{merge:!0})}async function TE(n,e,t=null){const r=Ps(n);let i=t?void 0:[];if(t){const s=Oa(r,e,t),o=await gE(s);o.exists()&&(i=o.data())}else(await Xd(Ud(r,e))).forEach(o=>{i.push(o.data())});return i}async function OE(n,e){const t=Ps(n),r=Ud(t,e);try{return(await Xd(r)).docs.map(s=>({id:s.id,data:s.data()}))}catch(i){console.error("Помилка при отриманні документів:",i)}}function EE(){let n;function e(r){n=r}function t(){return n}return{setUser:e,getUser:t}}const iu=EE();var Zd={exports:{}};(function(n){(function(e,t){n.exports=t(e)})(typeof Ni<"u"?Ni:typeof window<"u"?window:Ni,function(e){if(typeof e>"u"&&typeof e.document>"u")return!1;var t="Notiflix",r=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,i='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',s={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},o,l={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},c=function(R){return console.error("%c "+t+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+R+r)},h=function(R){return R||(R="head"),e.document[R]===null?(c(`
Notiflix needs to be appended to the "<`+R+'>" element, but you called it before the "<'+R+'>" element has been created.'),!1):!0},f=function(R,D){if(!h("head"))return!1;if(R()!==null&&!e.document.getElementById(D)){var x=e.document.createElement("style");x.id=D,x.innerHTML=R(),e.document.head.appendChild(x)}},m=function(){var R={},D=!1,x=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(D=arguments[0],x++);for(var O=function(F){for(var j in F)Object.prototype.hasOwnProperty.call(F,j)&&(D&&Object.prototype.toString.call(F[j])==="[object Object]"?R[j]=m(R[j],F[j]):R[j]=F[j])};x<arguments.length;x++)O(arguments[x]);return R},w=function(R){var D=e.document.createElement("div");return D.innerHTML=R,D.textContent||D.innerText||""},T=function(){var R='[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';return R||null},S=0,P=function(R,D,x,O){if(!h("body"))return!1;o||k.Notify.init({});var F=m(!0,o,{});if(typeof x=="object"&&!Array.isArray(x)||typeof O=="object"&&!Array.isArray(O)){var j={};typeof x=="object"?j=x:typeof O=="object"&&(j=O),o=m(!0,o,j)}var A=o[R.toLocaleLowerCase("en")];S++,typeof D!="string"&&(D="Notiflix "+R),o.plainText&&(D=w(D)),!o.plainText&&D.length>o.messageMaxLength&&(o=m(!0,o,{closeButton:!0,messageMaxLength:150}),D='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),D.length>o.messageMaxLength&&(D=D.substring(0,o.messageMaxLength)+"..."),o.fontAwesomeIconStyle==="shadow"&&(A.fontAwesomeIconColor=A.background),o.cssAnimation||(o.cssAnimationDuration=0);var g=e.document.getElementById(l.wrapID)||e.document.createElement("div");if(g.id=l.wrapID,g.style.width=o.width,g.style.zIndex=o.zindex,g.style.opacity=o.opacity,o.position==="center-center"?(g.style.left=o.distance,g.style.top=o.distance,g.style.right=o.distance,g.style.bottom=o.distance,g.style.margin="auto",g.classList.add("nx-flex-center-center"),g.style.maxHeight="calc((100vh - "+o.distance+") - "+o.distance+")",g.style.display="flex",g.style.flexWrap="wrap",g.style.flexDirection="column",g.style.justifyContent="center",g.style.alignItems="center",g.style.pointerEvents="none"):o.position==="center-top"?(g.style.left=o.distance,g.style.right=o.distance,g.style.top=o.distance,g.style.bottom="auto",g.style.margin="auto"):o.position==="center-bottom"?(g.style.left=o.distance,g.style.right=o.distance,g.style.bottom=o.distance,g.style.top="auto",g.style.margin="auto"):o.position==="right-bottom"?(g.style.right=o.distance,g.style.bottom=o.distance,g.style.top="auto",g.style.left="auto"):o.position==="left-top"?(g.style.left=o.distance,g.style.top=o.distance,g.style.right="auto",g.style.bottom="auto"):o.position==="left-bottom"?(g.style.left=o.distance,g.style.bottom=o.distance,g.style.top="auto",g.style.right="auto"):(g.style.right=o.distance,g.style.top=o.distance,g.style.left="auto",g.style.bottom="auto"),o.backOverlay){var y=e.document.getElementById(l.overlayID)||e.document.createElement("div");y.id=l.overlayID,y.style.width="100%",y.style.height="100%",y.style.position="fixed",y.style.zIndex=o.zindex-1,y.style.left=0,y.style.top=0,y.style.right=0,y.style.bottom=0,y.style.background=A.backOverlayColor||o.backOverlayColor,y.className=o.cssAnimation?"nx-with-animation":"",y.style.animationDuration=o.cssAnimation?o.cssAnimationDuration+"ms":"",e.document.getElementById(l.overlayID)||e.document.body.appendChild(y)}e.document.getElementById(l.wrapID)||e.document.body.appendChild(g);var _=e.document.createElement("div");_.id=o.ID+"-"+S,_.className=o.className+" "+A.childClassName+" "+(o.cssAnimation?"nx-with-animation":"")+" "+(o.useIcon?"nx-with-icon":"")+" nx-"+o.cssAnimationStyle+" "+(o.closeButton&&typeof x!="function"?"nx-with-close-button":"")+" "+(typeof x=="function"?"nx-with-callback":"")+" "+(o.clickToClose?"nx-notify-click-to-close":""),_.style.fontSize=o.fontSize,_.style.color=A.textColor,_.style.background=A.background,_.style.borderRadius=o.borderRadius,_.style.pointerEvents="all",o.rtl&&(_.setAttribute("dir","rtl"),_.classList.add("nx-rtl-on")),_.style.fontFamily='"'+o.fontFamily+'", '+i,o.cssAnimation&&(_.style.animationDuration=o.cssAnimationDuration+"ms");var E="";if(o.closeButton&&typeof x!="function"&&(E='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+A.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),o.useIcon)if(o.useFontAwesome)_.innerHTML='<i style="color:'+A.fontAwesomeIconColor+"; font-size:"+o.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+A.fontAwesomeClassName+" "+(o.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+D+"</span>"+(o.closeButton?E:"");else{var b="";R===s.Success?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+A.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':R===s.Failure?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+A.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':R===s.Warning?b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+A.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':R===s.Info&&(b='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+A.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),_.innerHTML=b+'<span class="nx-message nx-with-icon">'+D+"</span>"+(o.closeButton?E:"")}else _.innerHTML='<span class="nx-message">'+D+"</span>"+(o.closeButton?E:"");if(o.position==="left-bottom"||o.position==="right-bottom"){var v=e.document.getElementById(l.wrapID);v.insertBefore(_,v.firstChild)}else e.document.getElementById(l.wrapID).appendChild(_);var $=e.document.getElementById(_.id);if($){var ie,we,Ue=function(){$.classList.add("nx-remove");var De=e.document.getElementById(l.overlayID);De&&g.childElementCount<=0&&De.classList.add("nx-remove"),clearTimeout(ie)},Ie=function(){if($&&$.parentNode!==null&&$.parentNode.removeChild($),g.childElementCount<=0&&g.parentNode!==null){g.parentNode.removeChild(g);var De=e.document.getElementById(l.overlayID);De&&De.parentNode!==null&&De.parentNode.removeChild(De)}clearTimeout(we)};if(o.closeButton&&typeof x!="function"){var Ye=e.document.getElementById(_.id).querySelector("span.nx-close-button");Ye.addEventListener("click",function(){Ue();var De=setTimeout(function(){Ie(),clearTimeout(De)},o.cssAnimationDuration)})}if((typeof x=="function"||o.clickToClose)&&$.addEventListener("click",function(){typeof x=="function"&&x(),Ue();var De=setTimeout(function(){Ie(),clearTimeout(De)},o.cssAnimationDuration)}),!o.closeButton&&typeof x!="function"){var Ze=function(){ie=setTimeout(function(){Ue()},o.timeout),we=setTimeout(function(){Ie()},o.timeout+o.cssAnimationDuration)};Ze(),o.pauseOnHover&&($.addEventListener("mouseenter",function(){$.classList.add("nx-paused"),clearTimeout(ie),clearTimeout(we)}),$.addEventListener("mouseleave",function(){$.classList.remove("nx-paused"),Ze()}))}}if(o.showOnlyTheLastOne&&S>0)for(var mt=e.document.querySelectorAll("[id^="+o.ID+"-]:not([id="+o.ID+"-"+S+"])"),be=0;be<mt.length;be++){var ce=mt[be];ce.parentNode!==null&&ce.parentNode.removeChild(ce)}o=m(!0,o,F)},k={Notify:{init:function(R){o=m(!0,l,R),f(T,"NotiflixNotifyInternalCSS")},merge:function(R){if(o)o=m(!0,o,R);else return c("You have to initialize the Notify module before call Merge function."),!1},success:function(R,D,x){P(s.Success,R,D,x)},failure:function(R,D,x){P(s.Failure,R,D,x)},warning:function(R,D,x){P(s.Warning,R,D,x)},info:function(R,D,x){P(s.Info,R,D,x)}}};return typeof e.Notiflix=="object"?m(!0,e.Notiflix,{Notify:k.Notify}):{Notify:k.Notify}})})(Zd);var ef=Zd.exports;let vn,ln={user:null,errorCode:null,errorMessage:null};function xs(n){vn||(vn=dw(n))}function LE(n,e){xs(n);let t=Ih(e,["email","password"]);return Q_(vn,t.email,t.password).then(r=>{ln.user=r.user,window.location.pathname="/nuts/src/pages/personal-cabinet-page.html",ua(ln.user,re(".header__top-authentication-wrapper")),bh(re(".input__area","all"))}).catch(r=>{ef.Notify.failure(`Помилка аундетифікації, перевірте пароль або почту ${r}`)}),ln}function VE(n,e){xs(n);let t=Ih(e,["name","email","phone","city","addresses","password","verifyPassword","avatar","personType","requisites","EDRPOUCode","companyLegalCity","companyLegalAddress","companyLegalIndex"]);IE(t),Tc(t,["selectCountry","selectRegion"],[".registration__current-country",".registration__current-region"],["Страна","Область","Район","Воєводство","Повіт","Федеральна земля"]),re(".registration__form-legal")&&Tc(t,["companyLegalSelectCountry","companyLegalSelectRegion"],[".registration__current-country-legal",".registration__current-region-legal"],["Страна","Область","Район","Воєводство","Повіт","Федеральна земля"]),delete t.personType,console.log(t),K_(vn,t.email,t.verifyPassword).then(async r=>{await vg(t.avatar).then(i=>{t.avatar=i}).catch(i=>{console.log(i),t.avatar=null}),ln.user=r.user,await dh(ln.user,{displayName:t.name,photoURL:t.avatar,phoneNumber:t.phone}),await wE(n,ln.user.uid,t),window.location.pathname="/nuts/src/pages/personal-cabinet-page.html",ua(ln.user,re(".header__top-authentication-wrapper")),bh(re(".input__area","all"))}).catch(r=>{ef.Notify.failure(`Помилка реестрації, ${r}`)})}function IE(n){return n.role={person:re(".registration__tab_active").getAttribute("data-tab")==="individual"&&re("form-1","id").classList.contains("registration__body_active"),company:n.personType==="legal-form"&&re(".registration__tab_active").getAttribute("data-tab")==="legal",entrepreneur:n.personType==="fop-form"}}async function ME(n,e){return xs(n),dh(vn.currentUser,e).then(t=>({displayName:e.displayName,photoURL:e.photoURL,phoneNumber:e.phone})).catch(t=>console.log(t))}async function bE(n){xs(n),Z_(vn,e=>{e&&(ua(e,window.innerWidth>=768?re(".header__top-authentication-wrapper"):re(".burger__authentication")),iu.getUser()===void 0&&TE(n,"user").then(t=>{const r=t.find(i=>i.email===e.email);iu.setUser(r)}).catch(t=>{console.error("Error fetching user data:",t)}))})}function SE(){ev(vn).then(n=>{console.log(n)}).catch(n=>{console.log(n)})}var AE="firebase",PE="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ot(AE,PE,"app");function RE(){const n=gu({apiKey:"AIzaSyBTca0OO9iCUvryBSKXEcuj2zcsAIbSBUI",authDomain:"nuts-17b69.firebaseapp.com",projectId:"nuts-17b69",storageBucket:"nuts-17b69.appspot.com",messagingSenderId:"989266237693",appId:"1:989266237693:web:814a4d601b3db0dee74694"});function e(){return n}return{getApp:e}}const FE=RE();document.addEventListener("DOMContentLoaded",async function(){Tg(),Xy(),Sf(),await Qy(),await bE()});export{Et as a,Yy as b,kl as c,bh as d,VE as e,FE as f,re as g,LE as h,Ih as i,OE as j,vg as k,CE as l,DE as m,ME as n,qy as o,ua as p,Tc as q,ef as r,Ky as s,iu as t,TE as u};
