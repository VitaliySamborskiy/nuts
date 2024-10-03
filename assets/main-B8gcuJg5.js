var Al=n=>{throw TypeError(n)};var bl=(n,e,t)=>e.has(n)||Al("Cannot "+t);var Hs=(n,e,t)=>(bl(n,e,"read from private field"),t?t.call(n):e.get(n)),Ws=(n,e,t)=>e.has(n)?Al("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),$s=(n,e,t,r)=>(bl(n,e,"write to private field"),r?r.call(n,t):e.set(n,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var Sf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},nu={exports:{}};(function(n,e){(function(r,i){n.exports=i()})(Sf,function(){return function(t){var r={};function i(s){if(r[s])return r[s].exports;var a=r[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=t,i.c=r,i.d=function(s,a,l){i.o(s,a)||Object.defineProperty(s,a,{enumerable:!0,get:l})},i.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},i.t=function(s,a){if(a&1&&(s=i(s)),a&8||a&4&&typeof s=="object"&&s&&s.__esModule)return s;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:s}),a&2&&typeof s!="string")for(var c in s)i.d(l,c,(function(h){return s[h]}).bind(null,c));return l},i.n=function(s){var a=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(a,"a",a),a},i.o=function(s,a){return Object.prototype.hasOwnProperty.call(s,a)},i.p="",i(i.s=0)}([function(t,r,i){i.r(r);var s=function(E){return Array.isArray(E)?E:[E]},a=function(E){return E instanceof Node},l=function(E){return E instanceof NodeList},c=function(E,M){if(E&&M){E=l(E)?E:[E];for(var z=0;z<E.length&&M(E[z],z,E.length)!==!0;z++);}},h=function(E){return console.error("[scroll-lock] ".concat(E))},f=function(E){if(Array.isArray(E)){var M=E.join(", ");return M}},m=function(E){var M=[];return c(E,function(z){return M.push(z)}),M},v=function(E,M){var z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,G=arguments.length>3&&arguments[3]!==void 0?arguments[3]:document;if(z&&m(G.querySelectorAll(M)).indexOf(E)!==-1)return E;for(;(E=E.parentElement)&&m(G.querySelectorAll(M)).indexOf(E)===-1;);return E},T=function(E,M){var z=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document,G=m(z.querySelectorAll(M)).indexOf(E)!==-1;return G},A=function(E){if(E){var M=getComputedStyle(E),z=M.overflow==="hidden";return z}},P=function(E){if(E){if(A(E))return!0;var M=E.scrollTop;return M<=0}},C=function(E){if(E){if(A(E))return!0;var M=E.scrollTop,z=E.scrollHeight,G=M+E.offsetHeight;return G>=z}},O=function(E){if(E){if(A(E))return!0;var M=E.scrollLeft;return M<=0}},N=function(E){if(E){if(A(E))return!0;var M=E.scrollLeft,z=E.scrollWidth,G=M+E.offsetWidth;return G>=z}},D=function(E){var M='textarea, [contenteditable="true"]';return T(E,M)},V=function(E){var M='input[type="range"]';return T(E,M)};i.d(r,"disablePageScroll",function(){return w}),i.d(r,"enablePageScroll",function(){return I}),i.d(r,"getScrollState",function(){return S}),i.d(r,"clearQueueScrollLocks",function(){return _}),i.d(r,"getTargetScrollBarWidth",function(){return J}),i.d(r,"getCurrentTargetScrollBarWidth",function(){return oe}),i.d(r,"getPageScrollBarWidth",function(){return Me}),i.d(r,"getCurrentPageScrollBarWidth",function(){return Qe}),i.d(r,"addScrollableTarget",function(){return Fe}),i.d(r,"removeScrollableTarget",function(){return et}),i.d(r,"addScrollableSelector",function(){return kt}),i.d(r,"removeScrollableSelector",function(){return wn}),i.d(r,"addLockableTarget",function(){return Ue}),i.d(r,"addLockableSelector",function(){return ge}),i.d(r,"setFillGapMethod",function(){return ii}),i.d(r,"addFillGapTarget",function(){return ft}),i.d(r,"removeFillGapTarget",function(){return si}),i.d(r,"addFillGapSelector",function(){return pt}),i.d(r,"removeFillGapSelector",function(){return oi}),i.d(r,"refillGaps",function(){return Tn});function U(B){for(var E=1;E<arguments.length;E++){var M=arguments[E]!=null?arguments[E]:{},z=Object.keys(M);typeof Object.getOwnPropertySymbols=="function"&&(z=z.concat(Object.getOwnPropertySymbols(M).filter(function(G){return Object.getOwnPropertyDescriptor(M,G).enumerable}))),z.forEach(function(G){H(B,G,M[G])})}return B}function H(B,E,M){return E in B?Object.defineProperty(B,E,{value:M,enumerable:!0,configurable:!0,writable:!0}):B[E]=M,B}var b=["padding","margin","width","max-width","none"],y=3,g={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:b[0],startTouchY:0,startTouchX:0},w=function(E){g.queue<=0&&(g.scroll=!1,Ot(),ir()),Fe(E),g.queue++},I=function(E){g.queue>0&&g.queue--,g.queue<=0&&(g.scroll=!0,En(),Cs()),et(E)},S=function(){return g.scroll},_=function(){g.queue=0},J=function(E){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a(E)){var z=E.style.overflowY;M?S()||(E.style.overflowY=E.getAttribute("data-scroll-lock-saved-overflow-y-property")):E.style.overflowY="scroll";var G=oe(E);return E.style.overflowY=z,G}else return 0},oe=function(E){if(a(E))if(E===document.body){var M=document.documentElement.clientWidth,z=window.innerWidth,G=z-M;return G}else{var We=E.style.borderLeftWidth,tt=E.style.borderRightWidth;E.style.borderLeftWidth="0px",E.style.borderRightWidth="0px";var $e=E.offsetWidth-E.clientWidth;return E.style.borderLeftWidth=We,E.style.borderRightWidth=tt,$e}else return 0},Me=function(){var E=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return J(document.body,E)},Qe=function(){return oe(document.body)},Fe=function(E){if(E){var M=s(E);M.map(function(z){c(z,function(G){a(G)?G.setAttribute("data-scroll-lock-scrollable",""):h('"'.concat(G,'" is not a Element.'))})})}},et=function(E){if(E){var M=s(E);M.map(function(z){c(z,function(G){a(G)?G.removeAttribute("data-scroll-lock-scrollable"):h('"'.concat(G,'" is not a Element.'))})})}},kt=function(E){if(E){var M=s(E);M.map(function(z){g.scrollableSelectors.push(z)})}},wn=function(E){if(E){var M=s(E);M.map(function(z){g.scrollableSelectors=g.scrollableSelectors.filter(function(G){return G!==z})})}},Ue=function(E){if(E){var M=s(E);M.map(function(z){c(z,function(G){a(G)?G.setAttribute("data-scroll-lock-lockable",""):h('"'.concat(G,'" is not a Element.'))})}),S()||Ot()}},ge=function(E){if(E){var M=s(E);M.map(function(z){g.lockableSelectors.push(z)}),S()||Ot(),pt(E)}},ii=function(E){if(E)if(b.indexOf(E)!==-1)g.fillGapMethod=E,Tn();else{var M=b.join(", ");h('"'.concat(E,`" method is not available!
Available fill gap methods: `).concat(M,"."))}},ft=function(E){if(E){var M=s(E);M.map(function(z){c(z,function(G){a(G)?(G.setAttribute("data-scroll-lock-fill-gap",""),g.scroll||sr(G)):h('"'.concat(G,'" is not a Element.'))})})}},si=function(E){if(E){var M=s(E);M.map(function(z){c(z,function(G){a(G)?(G.removeAttribute("data-scroll-lock-fill-gap"),g.scroll||Sn(G)):h('"'.concat(G,'" is not a Element.'))})})}},pt=function(E){if(E){var M=s(E);M.map(function(z){g.fillGapSelectors.indexOf(z)===-1&&(g.fillGapSelectors.push(z),g.scroll||ai(z))})}},oi=function(E){if(E){var M=s(E);M.map(function(z){g.fillGapSelectors=g.fillGapSelectors.filter(function(G){return G!==z}),g.scroll||In(z)})}},Tn=function(){g.scroll||ir()},Ot=function(){var E=f(g.lockableSelectors);er(E)},En=function(){var E=f(g.lockableSelectors);tr(E)},er=function(E){var M=document.querySelectorAll(E);c(M,function(z){nr(z)})},tr=function(E){var M=document.querySelectorAll(E);c(M,function(z){rr(z)})},nr=function(E){if(a(E)&&E.getAttribute("data-scroll-lock-locked")!=="true"){var M=window.getComputedStyle(E);E.setAttribute("data-scroll-lock-saved-overflow-y-property",M.overflowY),E.setAttribute("data-scroll-lock-saved-inline-overflow-property",E.style.overflow),E.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",E.style.overflowY),E.style.overflow="hidden",E.setAttribute("data-scroll-lock-locked","true")}},rr=function(E){a(E)&&E.getAttribute("data-scroll-lock-locked")==="true"&&(E.style.overflow=E.getAttribute("data-scroll-lock-saved-inline-overflow-property"),E.style.overflowY=E.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),E.removeAttribute("data-scroll-lock-saved-overflow-property"),E.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),E.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),E.removeAttribute("data-scroll-lock-locked"))},ir=function(){g.fillGapSelectors.map(function(E){ai(E)})},Cs=function(){g.fillGapSelectors.map(function(E){In(E)})},ai=function(E){var M=document.querySelectorAll(E),z=g.lockableSelectors.indexOf(E)!==-1;c(M,function(G){sr(G,z)})},sr=function(E){var M=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a(E)){var z;if(E.getAttribute("data-scroll-lock-lockable")===""||M)z=J(E,!0);else{var G=v(E,f(g.lockableSelectors));z=J(G,!0)}E.getAttribute("data-scroll-lock-filled-gap")==="true"&&Sn(E);var We=window.getComputedStyle(E);if(E.setAttribute("data-scroll-lock-filled-gap","true"),E.setAttribute("data-scroll-lock-current-fill-gap-method",g.fillGapMethod),g.fillGapMethod==="margin"){var tt=parseFloat(We.marginRight);E.style.marginRight="".concat(tt+z,"px")}else if(g.fillGapMethod==="width")E.style.width="calc(100% - ".concat(z,"px)");else if(g.fillGapMethod==="max-width")E.style.maxWidth="calc(100% - ".concat(z,"px)");else if(g.fillGapMethod==="padding"){var $e=parseFloat(We.paddingRight);E.style.paddingRight="".concat($e+z,"px")}}},In=function(E){var M=document.querySelectorAll(E);c(M,function(z){Sn(z)})},Sn=function(E){if(a(E)&&E.getAttribute("data-scroll-lock-filled-gap")==="true"){var M=E.getAttribute("data-scroll-lock-current-fill-gap-method");E.removeAttribute("data-scroll-lock-filled-gap"),E.removeAttribute("data-scroll-lock-current-fill-gap-method"),M==="margin"?E.style.marginRight="":M==="width"?E.style.width="":M==="max-width"?E.style.maxWidth="":M==="padding"&&(E.style.paddingRight="")}},ks=function(E){Tn()},or=function(E){g.scroll||(g.startTouchY=E.touches[0].clientY,g.startTouchX=E.touches[0].clientX)},ar=function(E){if(!g.scroll){var M=g.startTouchY,z=g.startTouchX,G=E.touches[0].clientY,We=E.touches[0].clientX;if(E.touches.length<2){var tt=f(g.scrollableSelectors),$e={up:M<G,down:M>G,left:z<We,right:z>We},An={up:M+y<G,down:M-y>G,left:z+y<We,right:z-y>We},Os=function bn(fe){var ci=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(fe){var mt=v(fe,tt,!1);if(V(fe))return!1;if(ci||D(fe)&&v(fe,tt)||T(fe,tt)){var Dt=!1;O(fe)&&N(fe)?($e.up&&P(fe)||$e.down&&C(fe))&&(Dt=!0):P(fe)&&C(fe)?($e.left&&O(fe)||$e.right&&N(fe))&&(Dt=!0):(An.up&&P(fe)||An.down&&C(fe)||An.left&&O(fe)||An.right&&N(fe))&&(Dt=!0),Dt&&(mt?bn(mt,!0):E.cancelable&&E.preventDefault())}else bn(mt)}else E.cancelable&&E.preventDefault()};Os(E.target)}}},li=function(E){g.scroll||(g.startTouchY=0,g.startTouchX=0)};typeof window<"u"&&window.addEventListener("resize",ks),typeof document<"u"&&(document.addEventListener("touchstart",or),document.addEventListener("touchmove",ar,{passive:!1}),document.addEventListener("touchend",li));var we={hide:function(E){h(`"hide" is deprecated! Use "disablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget`),w(E)},show:function(E){h(`"show" is deprecated! Use "enablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget`),I(E)},toggle:function(E){h('"toggle" is deprecated! Do not use it.'),S()?w():I(E)},getState:function(){return h(`"getState" is deprecated! Use "getScrollState" instead. 
 https://github.com/FL3NKEY/scroll-lock#getscrollstate`),S()},getWidth:function(){return h(`"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth`),Me()},getCurrentWidth:function(){return h(`"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth`),Qe()},setScrollableTargets:function(E){h(`"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget`),Fe(E)},setFillGapSelectors:function(E){h(`"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector`),pt(E)},setFillGapTargets:function(E){h(`"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget`),ft(E)},clearQueue:function(){h(`"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. 
 https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks`),_()}},Ee=U({disablePageScroll:w,enablePageScroll:I,getScrollState:S,clearQueueScrollLocks:_,getTargetScrollBarWidth:J,getCurrentTargetScrollBarWidth:oe,getPageScrollBarWidth:Me,getCurrentPageScrollBarWidth:Qe,addScrollableSelector:kt,removeScrollableSelector:wn,addScrollableTarget:Fe,removeScrollableTarget:et,addLockableSelector:ge,addLockableTarget:Ue,addFillGapSelector:pt,removeFillGapSelector:oi,addFillGapTarget:ft,removeFillGapTarget:si,setFillGapMethod:ii,refillGaps:Tn,_state:g},we);r.default=Ee}]).default})})(nu);var Pl=nu.exports;function X(n,e=null,t=null){switch(e){case"all":return document.querySelectorAll(n);case"id":return document.getElementById(n);case"custom":return t.querySelector(n);case"customAll":return t.querySelectorAll(n);default:return document.querySelector(n)}}function Af(){const n=X(".burger"),e=X(".burger__background"),t=X(".burger__scroll");n.addEventListener("click",r=>{const i=r.target.closest(".burger__icon"),s=r.target.closest(".burger__close");i&&(e.classList.toggle("burger__background_active"),Pl.disablePageScroll(t)),s&&(e.classList.remove("burger__background_active"),Pl.enablePageScroll(t))})}var Se=[];for(var Ks=0;Ks<256;++Ks)Se.push((Ks+256).toString(16).slice(1));function bf(n,e=0){return(Se[n[e+0]]+Se[n[e+1]]+Se[n[e+2]]+Se[n[e+3]]+"-"+Se[n[e+4]]+Se[n[e+5]]+"-"+Se[n[e+6]]+Se[n[e+7]]+"-"+Se[n[e+8]]+Se[n[e+9]]+"-"+Se[n[e+10]]+Se[n[e+11]]+Se[n[e+12]]+Se[n[e+13]]+Se[n[e+14]]+Se[n[e+15]]).toLowerCase()}var Si,Pf=new Uint8Array(16);function Rf(){if(!Si&&(Si=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Si))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Si(Pf)}var Cf=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const Rl={randomUUID:Cf};function kf(n,e,t){if(Rl.randomUUID&&!e&&!n)return Rl.randomUUID();n=n||{};var r=n.random||(n.rng||Rf)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,bf(r)}var Cl={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ru=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Of=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},iu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,c=i+2<n.length,h=c?n[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let v=(l&15)<<2|h>>6,T=h&63;c||(T=64,a||(v=64)),r.push(t[f],t[m],t[v],t[T])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ru(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Of(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const h=i<n.length?t[n.charAt(i)]:64;++i;const m=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new Df;const v=s<<2|l>>4;if(r.push(v),h!==64){const T=l<<4&240|h>>2;if(r.push(T),m!==64){const A=h<<6&192|m;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Df extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Nf=function(n){const e=ru(n);return iu.encodeByteArray(e,!0)},qi=function(n){return Nf(n).replace(/\./g,"")},su=function(n){try{return iu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function xf(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Lf=()=>xf().__FIREBASE_DEFAULTS__,Vf=()=>{if(typeof process>"u"||typeof Cl>"u")return;const n=Cl.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Mf=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&su(n[1]);return e&&JSON.parse(e)},us=()=>{try{return Lf()||Vf()||Mf()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ou=n=>{var e,t;return(t=(e=us())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},au=n=>{const e=ou(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},lu=()=>{var n;return(n=us())===null||n===void 0?void 0:n.config},cu=n=>{var e;return(e=us())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function uu(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[qi(JSON.stringify(t)),qi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uf(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Re())}function Bf(){var n;const e=(n=us())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zf(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Gf(){const n=Re();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function qf(){return!Bf()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Hf(){try{return typeof indexedDB=="object"}catch{return!1}}function Wf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f="FirebaseError";class dt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=$f,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Wr.prototype.create)}}class Wr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?Kf(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new dt(i,l,r)}}function Kf(n,e){return n.replace(Qf,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Qf=/\{\$([^}]+)}/g;function Yf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Hi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(kl(s)&&kl(a)){if(!Hi(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function kl(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $r(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ir(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Sr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Xf(n,e){const t=new Jf(n,e);return t.subscribe.bind(t)}class Jf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Zf(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Qs),i.error===void 0&&(i.error=Qs),i.complete===void 0&&(i.complete=Qs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Qs(){}/**
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
 */function ve(n){return n&&n._delegate?n._delegate:n}class $t{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nn="[DEFAULT]";/**
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
 */class ep{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Ff;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(np(e))try{this.getOrInitializeService({instanceIdentifier:nn})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=nn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nn){return this.instances.has(e)}getOptions(e=nn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tp(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nn){return this.component?this.component.multipleInstances?e:nn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tp(n){return n===nn?void 0:n}function np(n){return n.instantiationMode==="EAGER"}/**
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
 */var ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ee||(ee={}));const ip={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},sp=ee.INFO,op={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},ap=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=op[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zo{constructor(e){this.name=e,this._logLevel=sp,this._logHandler=ap,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ip[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const lp=(n,e)=>e.some(t=>n instanceof t);let Ol,Dl;function cp(){return Ol||(Ol=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function up(){return Dl||(Dl=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const hu=new WeakMap,go=new WeakMap,du=new WeakMap,Ys=new WeakMap,jo=new WeakMap;function hp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(qt(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&hu.set(t,n)}).catch(()=>{}),jo.set(e,n),e}function dp(n){if(go.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});go.set(n,e)}let _o={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return go.get(n);if(e==="objectStoreNames")return n.objectStoreNames||du.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return qt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function fp(n){_o=n(_o)}function pp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Xs(this),e,...t);return du.set(r,e.sort?e.sort():[e]),qt(r)}:up().includes(n)?function(...e){return n.apply(Xs(this),e),qt(hu.get(this))}:function(...e){return qt(n.apply(Xs(this),e))}}function mp(n){return typeof n=="function"?pp(n):(n instanceof IDBTransaction&&dp(n),lp(n,cp())?new Proxy(n,_o):n)}function qt(n){if(n instanceof IDBRequest)return hp(n);if(Ys.has(n))return Ys.get(n);const e=mp(n);return e!==n&&(Ys.set(n,e),jo.set(e,n)),e}const Xs=n=>jo.get(n);function gp(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=qt(a);return r&&a.addEventListener("upgradeneeded",c=>{r(qt(a.result),c.oldVersion,c.newVersion,qt(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const _p=["get","getKey","getAll","getAllKeys","count"],yp=["put","add","delete","clear"],Js=new Map;function Nl(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Js.get(e))return Js.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=yp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||_p.includes(t)))return;const s=async function(a,...l){const c=this.transaction(a,i?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),i&&c.done]))[0]};return Js.set(e,s),s}fp(n=>({...n,get:(e,t,r)=>Nl(e,t)||n.get(e,t,r),has:(e,t)=>!!Nl(e,t)||n.has(e,t)}));/**
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
 */class vp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(wp(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function wp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yo="@firebase/app",xl="0.10.8";/**
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
 */const an=new zo("@firebase/app"),Tp="@firebase/app-compat",Ep="@firebase/analytics-compat",Ip="@firebase/analytics",Sp="@firebase/app-check-compat",Ap="@firebase/app-check",bp="@firebase/auth",Pp="@firebase/auth-compat",Rp="@firebase/database",Cp="@firebase/database-compat",kp="@firebase/functions",Op="@firebase/functions-compat",Dp="@firebase/installations",Np="@firebase/installations-compat",xp="@firebase/messaging",Lp="@firebase/messaging-compat",Vp="@firebase/performance",Mp="@firebase/performance-compat",Fp="@firebase/remote-config",Up="@firebase/remote-config-compat",Bp="@firebase/storage",zp="@firebase/storage-compat",jp="@firebase/firestore",Gp="@firebase/vertexai-preview",qp="@firebase/firestore-compat",Hp="firebase",Wp="10.12.5";/**
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
 */const vo="[DEFAULT]",$p={[yo]:"fire-core",[Tp]:"fire-core-compat",[Ip]:"fire-analytics",[Ep]:"fire-analytics-compat",[Ap]:"fire-app-check",[Sp]:"fire-app-check-compat",[bp]:"fire-auth",[Pp]:"fire-auth-compat",[Rp]:"fire-rtdb",[Cp]:"fire-rtdb-compat",[kp]:"fire-fn",[Op]:"fire-fn-compat",[Dp]:"fire-iid",[Np]:"fire-iid-compat",[xp]:"fire-fcm",[Lp]:"fire-fcm-compat",[Vp]:"fire-perf",[Mp]:"fire-perf-compat",[Fp]:"fire-rc",[Up]:"fire-rc-compat",[Bp]:"fire-gcs",[zp]:"fire-gcs-compat",[jp]:"fire-fst",[qp]:"fire-fst-compat",[Gp]:"fire-vertex","fire-js":"fire-js",[Hp]:"fire-js-all"};/**
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
 */const Wi=new Map,Kp=new Map,wo=new Map;function Ll(n,e){try{n.container.addComponent(e)}catch(t){an.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ln(n){const e=n.name;if(wo.has(e))return an.debug(`There were multiple attempts to register component ${e}.`),!1;wo.set(e,n);for(const t of Wi.values())Ll(t,n);for(const t of Kp.values())Ll(t,n);return!0}function hs(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function nt(n){return n.settings!==void 0}/**
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
 */const Qp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ht=new Wr("app","Firebase",Qp);/**
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
 */class Yp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $t("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ht.create("app-deleted",{appName:this._name})}}/**
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
 */const gn=Wp;function fu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:vo,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ht.create("bad-app-name",{appName:String(i)});if(t||(t=lu()),!t)throw Ht.create("no-options");const s=Wi.get(i);if(s){if(Hi(t,s.options)&&Hi(r,s.config))return s;throw Ht.create("duplicate-app",{appName:i})}const a=new rp(i);for(const c of wo.values())a.addComponent(c);const l=new Yp(t,r,a);return Wi.set(i,l),l}function Go(n=vo){const e=Wi.get(n);if(!e&&n===vo&&lu())return fu();if(!e)throw Ht.create("no-app",{appName:n});return e}function st(n,e,t){var r;let i=(r=$p[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),an.warn(l.join(" "));return}ln(new $t(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Xp="firebase-heartbeat-database",Jp=1,Lr="firebase-heartbeat-store";let Zs=null;function pu(){return Zs||(Zs=gp(Xp,Jp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Lr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ht.create("idb-open",{originalErrorMessage:n.message})})),Zs}async function Zp(n){try{const t=(await pu()).transaction(Lr),r=await t.objectStore(Lr).get(mu(n));return await t.done,r}catch(e){if(e instanceof dt)an.warn(e.message);else{const t=Ht.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});an.warn(t.message)}}}async function Vl(n,e){try{const r=(await pu()).transaction(Lr,"readwrite");await r.objectStore(Lr).put(e,mu(n)),await r.done}catch(t){if(t instanceof dt)an.warn(t.message);else{const r=Ht.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});an.warn(r.message)}}}function mu(n){return`${n.name}!${n.options.appId}`}/**
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
 */const em=1024,tm=30*24*60*60*1e3;class nm{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new im(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Ml();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=tm}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ml(),{heartbeatsToSend:r,unsentEntries:i}=rm(this._heartbeatsCache.heartbeats),s=qi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Ml(){return new Date().toISOString().substring(0,10)}function rm(n,e=em){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),Fl(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Fl(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class im{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hf()?Wf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Zp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Vl(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Fl(n){return qi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function sm(n){ln(new $t("platform-logger",e=>new vp(e),"PRIVATE")),ln(new $t("heartbeat",e=>new nm(e),"PRIVATE")),st(yo,xl,n),st(yo,xl,"esm2017"),st("fire-js","")}sm("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="firebasestorage.googleapis.com",_u="storageBucket",om=2*60*1e3,am=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends dt{constructor(e,t,r=0){super(eo(e),`Firebase Storage: ${t} (${eo(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,de.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return eo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var he;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(he||(he={}));function eo(n){return"storage/"+n}function qo(){const n="An unknown error occurred, please check the error payload for server response.";return new de(he.UNKNOWN,n)}function lm(n){return new de(he.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function cm(n){return new de(he.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function um(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new de(he.UNAUTHENTICATED,n)}function hm(){return new de(he.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function dm(n){return new de(he.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function fm(){return new de(he.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function pm(){return new de(he.CANCELED,"User canceled the upload/download.")}function mm(n){return new de(he.INVALID_URL,"Invalid URL '"+n+"'.")}function gm(n){return new de(he.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function _m(){return new de(he.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+_u+"' property when initializing the app?")}function ym(){return new de(he.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function vm(){return new de(he.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function wm(n){return new de(he.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function To(n){return new de(he.INVALID_ARGUMENT,n)}function yu(){return new de(he.APP_DELETED,"The Firebase app was deleted.")}function Tm(n){return new de(he.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Cr(n,e){return new de(he.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function wr(n){throw new de(he.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=Ge.makeFromUrl(e,t)}catch{return new Ge(e,"")}if(r.path==="")return r;throw gm(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(V){V.path.charAt(V.path.length-1)==="/"&&(V.path_=V.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+i+a,"i"),c={bucket:1,path:3};function h(V){V.path_=decodeURIComponent(V.path)}const f="v[A-Za-z0-9_]+",m=t.replace(/[.]/g,"\\."),v="(/([^?#]*).*)?$",T=new RegExp(`^https?://${m}/${f}/b/${i}/o${v}`,"i"),A={bucket:1,path:3},P=t===gu?"(?:storage.googleapis.com|storage.cloud.google.com)":t,C="([^?#]*)",O=new RegExp(`^https?://${P}/${i}/${C}`,"i"),D=[{regex:l,indices:c,postModify:s},{regex:T,indices:A,postModify:h},{regex:O,indices:{bucket:1,path:2},postModify:h}];for(let V=0;V<D.length;V++){const U=D[V],H=U.regex.exec(e);if(H){const b=H[U.indices.bucket];let y=H[U.indices.path];y||(y=""),r=new Ge(b,y),U.postModify(r);break}}if(r==null)throw mm(e);return r}}class Em{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(n,e,t){let r=1,i=null,s=null,a=!1,l=0;function c(){return l===2}let h=!1;function f(...C){h||(h=!0,e.apply(null,C))}function m(C){i=setTimeout(()=>{i=null,n(T,c())},C)}function v(){s&&clearTimeout(s)}function T(C,...O){if(h){v();return}if(C){v(),f.call(null,C,...O);return}if(c()||a){v(),f.call(null,C,...O);return}r<64&&(r*=2);let D;l===1?(l=2,D=0):D=(r+Math.random())*1e3,m(D)}let A=!1;function P(C){A||(A=!0,v(),!h&&(i!==null?(C||(l=2),clearTimeout(i),m(0)):C||(l=1)))}return m(0),s=setTimeout(()=>{a=!0,P(!0)},t),P}function Sm(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Am(n){return n!==void 0}function bm(n){return typeof n=="object"&&!Array.isArray(n)}function Ho(n){return typeof n=="string"||n instanceof String}function Ul(n){return Wo()&&n instanceof Blob}function Wo(){return typeof Blob<"u"}function Bl(n,e,t,r){if(r<e)throw To(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw To(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $o(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function vu(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var sn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(sn||(sn={}));/**
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
 */class Rm{constructor(e,t,r,i,s,a,l,c,h,f,m,v=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=c,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=m,this.retry=v,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((T,A)=>{this.resolve_=T,this.reject_=A,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Ai(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=l=>{const c=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,h)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const l=s.getErrorCode()===sn.NO_ERROR,c=s.getStatus();if(!l||Pm(c,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===sn.ABORT;r(!1,new Ai(!1,null,f));return}const h=this.successCodes_.indexOf(c)!==-1;r(!0,new Ai(h,s))})},t=(r,i)=>{const s=this.resolve_,a=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(l,l.getResponse());Am(c)?s(c):s()}catch(c){a(c)}else if(l!==null){const c=qo();c.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,c)):a(c)}else if(i.canceled){const c=this.appDelete_?yu():pm();a(c)}else{const c=fm();a(c)}};this.canceled_?t(!1,new Ai(!1,null,!0)):this.backoffId_=Im(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Sm(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ai{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function Cm(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function km(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Om(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Dm(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Nm(n,e,t,r,i,s,a=!0){const l=vu(n.urlParams),c=n.url+l,h=Object.assign({},n.headers);return Om(h,e),Cm(h,t),km(h,s),Dm(h,r),new Rm(c,n.method,h,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Lm(...n){const e=xm();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Wo())return new Blob(n);throw new de(he.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Vm(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */const rt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class to{constructor(e,t){this.data=e,this.contentType=t||null}}function Fm(n,e){switch(n){case rt.RAW:return new to(wu(e));case rt.BASE64:case rt.BASE64URL:return new to(Tu(n,e));case rt.DATA_URL:return new to(Bm(e),zm(e))}throw qo()}function wu(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,a=n.charCodeAt(++t);r=65536|(s&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Um(n){let e;try{e=decodeURIComponent(n)}catch{throw Cr(rt.DATA_URL,"Malformed data URL.")}return wu(e)}function Tu(n,e){switch(n){case rt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Cr(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case rt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Cr(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Mm(e)}catch(i){throw i.message.includes("polyfill")?i:Cr(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class Eu{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Cr(rt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=jm(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Bm(n){const e=new Eu(n);return e.base64?Tu(rt.BASE64,e.rest):Um(e.rest)}function zm(n){return new Eu(n).contentType}function jm(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t){let r=0,i="";Ul(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ul(this.data_)){const r=this.data_,i=Vm(r,e,t);return i===null?null:new Mt(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new Mt(r,!0)}}static getBlob(...e){if(Wo()){const t=e.map(r=>r instanceof Mt?r.data_:r);return new Mt(Lm.apply(null,t))}else{const t=e.map(a=>Ho(a)?Fm(rt.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(a=>{for(let l=0;l<a.length;l++)i[s++]=a[l]}),new Mt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iu(n){let e;try{e=JSON.parse(n)}catch{return null}return bm(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gm(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function qm(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Su(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(n,e){return e}class Ve{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||Hm}}let bi=null;function Wm(n){return!Ho(n)||n.length<2?n:Su(n)}function Au(){if(bi)return bi;const n=[];n.push(new Ve("bucket")),n.push(new Ve("generation")),n.push(new Ve("metageneration")),n.push(new Ve("name","fullPath",!0));function e(s,a){return Wm(a)}const t=new Ve("name");t.xform=e,n.push(t);function r(s,a){return a!==void 0?Number(a):a}const i=new Ve("size");return i.xform=r,n.push(i),n.push(new Ve("timeCreated")),n.push(new Ve("updated")),n.push(new Ve("md5Hash",null,!0)),n.push(new Ve("cacheControl",null,!0)),n.push(new Ve("contentDisposition",null,!0)),n.push(new Ve("contentEncoding",null,!0)),n.push(new Ve("contentLanguage",null,!0)),n.push(new Ve("contentType",null,!0)),n.push(new Ve("metadata","customMetadata",!0)),bi=n,bi}function $m(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new Ge(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function Km(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const a=t[s];r[a.local]=a.xform(r,e[a.server])}return $m(r,n),r}function bu(n,e,t){const r=Iu(e);return r===null?null:Km(n,r,t)}function Qm(n,e,t,r){const i=Iu(e);if(i===null||!Ho(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const a=encodeURIComponent;return s.split(",").map(h=>{const f=n.bucket,m=n.fullPath,v="/b/"+a(f)+"/o/"+a(m),T=$o(v,t,r),A=vu({alt:"media",token:h});return T+A})[0]}function Ym(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class Pu{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(n){if(!n)throw qo()}function Xm(n,e){function t(r,i){const s=bu(n,i,e);return Ru(s!==null),s}return t}function Jm(n,e){function t(r,i){const s=bu(n,i,e);return Ru(s!==null),Qm(s,i,n.host,n._protocol)}return t}function Cu(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=hm():i=um():t.getStatus()===402?i=cm(n.bucket):t.getStatus()===403?i=dm(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Zm(n){const e=Cu(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=lm(n.path)),s.serverResponse=i.serverResponse,s}return t}function eg(n,e,t){const r=e.fullServerUrl(),i=$o(r,n.host,n._protocol),s="GET",a=n.maxOperationRetryTime,l=new Pu(i,s,Jm(n,t),a);return l.errorHandler=Zm(e),l}function tg(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function ng(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=tg(null,e)),r}function rg(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let D="";for(let V=0;V<2;V++)D=D+Math.random().toString().slice(2);return D}const c=l();a["Content-Type"]="multipart/related; boundary="+c;const h=ng(e,r,i),f=Ym(h,t),m="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+c+`\r
Content-Type: `+h.contentType+`\r
\r
`,v=`\r
--`+c+"--",T=Mt.getBlob(m,r,v);if(T===null)throw ym();const A={name:h.fullPath},P=$o(s,n.host,n._protocol),C="POST",O=n.maxUploadRetryTime,N=new Pu(P,C,Xm(n,t),O);return N.urlParams=A,N.headers=a,N.body=T.uploadData(),N.errorHandler=Cu(e),N}class ig{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=sn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=sn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=sn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw wr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw wr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw wr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw wr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw wr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class sg extends ig{initXhr(){this.xhr_.responseType="text"}}function ku(){return new sg}/**
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
 */class cn{constructor(e,t){this._service=e,t instanceof Ge?this._location=t:this._location=Ge.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new cn(e,t)}get root(){const e=new Ge(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Su(this._location.path)}get storage(){return this._service}get parent(){const e=Gm(this._location.path);if(e===null)return null;const t=new Ge(this._location.bucket,e);return new cn(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Tm(e)}}function og(n,e,t){n._throwIfRoot("uploadBytes");const r=rg(n.storage,n._location,Au(),new Mt(e,!0),t);return n.storage.makeRequestWithTokens(r,ku).then(i=>({metadata:i,ref:n}))}function ag(n){n._throwIfRoot("getDownloadURL");const e=eg(n.storage,n._location,Au());return n.storage.makeRequestWithTokens(e,ku).then(t=>{if(t===null)throw vm();return t})}function lg(n,e){const t=qm(n._location.path,e),r=new Ge(n._location.bucket,t);return new cn(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(n){return/^[A-Za-z]+:\/\//.test(n)}function ug(n,e){return new cn(n,e)}function Ou(n,e){if(n instanceof Ko){const t=n;if(t._bucket==null)throw _m();const r=new cn(t,t._bucket);return e!=null?Ou(r,e):r}else return e!==void 0?lg(n,e):n}function hg(n,e){if(e&&cg(e)){if(n instanceof Ko)return ug(n,e);throw To("To use ref(service, url), the first argument must be a Storage instance.")}else return Ou(n,e)}function zl(n,e){const t=e==null?void 0:e[_u];return t==null?null:Ge.makeFromBucketSpec(t,n)}function dg(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:uu(i,n.app.options.projectId))}class Ko{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=gu,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=om,this._maxUploadRetryTime=am,this._requests=new Set,i!=null?this._bucket=Ge.makeFromBucketSpec(i,this._host):this._bucket=zl(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ge.makeFromBucketSpec(this._url,e):this._bucket=zl(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Bl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Bl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new cn(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new Em(yu());{const a=Nm(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const jl="@firebase/storage",Gl="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="storage";function fg(n,e,t){return n=ve(n),og(n,e,t)}function Nu(n){return n=ve(n),ag(n)}function xu(n,e){return n=ve(n),hg(n,e)}function Lu(n=Go(),e){n=ve(n);const r=hs(n,Du).getImmediate({identifier:e}),i=au("storage");return i&&pg(r,...i),r}function pg(n,e,t,r={}){dg(n,e,t,r)}function mg(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new Ko(t,r,i,e,gn)}function gg(){ln(new $t(Du,mg,"PUBLIC").setMultipleInstances(!0)),st(jl,Gl,""),st(jl,Gl,"esm2017")}gg();function vt(n,e){const t=Lu(),r=xu(t,n);Nu(r).then(i=>{e.src=i,e.setAttribute("loading","lazy")}).catch(i=>{console.log(i)})}async function _g(n){let e="";const t=Lu(),r=xu(t,`/users_avatar/${yg(n.name)}`);try{const i=await fg(r,n);return e=await Nu(i.ref),console.log(`File uploaded successfully. URL: ${e}`),e}catch(i){console.error(`Error uploading file: ${i}`)}return e}function yg(n){const e=kf(),t=n.split(".").pop();return`${e}.${t}`}function vg(){vt("logo-1.svg",X(".header__center-logo")),vt("logo-1.svg",X(".burger__logo-img")),vt("user.svg",X(".header__top-img")),vt("user.svg",X(".burger__img")),vt("logo-1.svg",X(".footer__logo-img")),vt("gs://nuts-17b69.appspot.com/31318052.webp",X(".error__img"));const n=X(".popup__img","all"),e=["gs://nuts-17b69.appspot.com/product_card/box_cardboard_1.webp","gs://nuts-17b69.appspot.com/product_card/box_cardboard_2.webp","gs://nuts-17b69.appspot.com/product_card/box_cardboard_3.webp"];for(let i=0;i<n.length;i++)vt(e[i],n[i]);const t=X(".manufacturing__preview-img","all"),r=["gs://nuts-17b69.appspot.com/main_page/main_page-2.webp","gs://nuts-17b69.appspot.com/companies/companies_2.webp"];for(let i=0;i<t.length;i++)vt(r[i],t[i])}function ql(n){return n!==null&&typeof n=="object"&&"constructor"in n&&n.constructor===Object}function Qo(n,e){n===void 0&&(n={}),e===void 0&&(e={}),Object.keys(e).forEach(t=>{typeof n[t]>"u"?n[t]=e[t]:ql(e[t])&&ql(n[t])&&Object.keys(e[t]).length>0&&Qo(n[t],e[t])})}const Vu={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Kn(){const n=typeof document<"u"?document:{};return Qo(n,Vu),n}const wg={document:Vu,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(n){return typeof setTimeout>"u"?(n(),null):setTimeout(n,0)},cancelAnimationFrame(n){typeof setTimeout>"u"||clearTimeout(n)}};function He(){const n=typeof window<"u"?window:{};return Qo(n,wg),n}function Tg(n){return n===void 0&&(n=""),n.trim().split(" ").filter(e=>!!e.trim())}function Eg(n){const e=n;Object.keys(e).forEach(t=>{try{e[t]=null}catch{}try{delete e[t]}catch{}})}function Eo(n,e){return e===void 0&&(e=0),setTimeout(n,e)}function $i(){return Date.now()}function Ig(n){const e=He();let t;return e.getComputedStyle&&(t=e.getComputedStyle(n,null)),!t&&n.currentStyle&&(t=n.currentStyle),t||(t=n.style),t}function Sg(n,e){e===void 0&&(e="x");const t=He();let r,i,s;const a=Ig(n);return t.WebKitCSSMatrix?(i=a.transform||a.webkitTransform,i.split(",").length>6&&(i=i.split(", ").map(l=>l.replace(",",".")).join(", ")),s=new t.WebKitCSSMatrix(i==="none"?"":i)):(s=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),r=s.toString().split(",")),e==="x"&&(t.WebKitCSSMatrix?i=s.m41:r.length===16?i=parseFloat(r[12]):i=parseFloat(r[4])),e==="y"&&(t.WebKitCSSMatrix?i=s.m42:r.length===16?i=parseFloat(r[13]):i=parseFloat(r[5])),i||0}function Pi(n){return typeof n=="object"&&n!==null&&n.constructor&&Object.prototype.toString.call(n).slice(8,-1)==="Object"}function Ag(n){return typeof window<"u"&&typeof window.HTMLElement<"u"?n instanceof HTMLElement:n&&(n.nodeType===1||n.nodeType===11)}function je(){const n=Object(arguments.length<=0?void 0:arguments[0]),e=["__proto__","constructor","prototype"];for(let t=1;t<arguments.length;t+=1){const r=t<0||arguments.length<=t?void 0:arguments[t];if(r!=null&&!Ag(r)){const i=Object.keys(Object(r)).filter(s=>e.indexOf(s)<0);for(let s=0,a=i.length;s<a;s+=1){const l=i[s],c=Object.getOwnPropertyDescriptor(r,l);c!==void 0&&c.enumerable&&(Pi(n[l])&&Pi(r[l])?r[l].__swiper__?n[l]=r[l]:je(n[l],r[l]):!Pi(n[l])&&Pi(r[l])?(n[l]={},r[l].__swiper__?n[l]=r[l]:je(n[l],r[l])):n[l]=r[l])}}}return n}function Ri(n,e,t){n.style.setProperty(e,t)}function Mu(n){let{swiper:e,targetPosition:t,side:r}=n;const i=He(),s=-e.translate;let a=null,l;const c=e.params.speed;e.wrapperEl.style.scrollSnapType="none",i.cancelAnimationFrame(e.cssModeFrameID);const h=t>s?"next":"prev",f=(v,T)=>h==="next"&&v>=T||h==="prev"&&v<=T,m=()=>{l=new Date().getTime(),a===null&&(a=l);const v=Math.max(Math.min((l-a)/c,1),0),T=.5-Math.cos(v*Math.PI)/2;let A=s+T*(t-s);if(f(A,t)&&(A=t),e.wrapperEl.scrollTo({[r]:A}),f(A,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:A})}),i.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=i.requestAnimationFrame(m)};m()}function it(n,e){e===void 0&&(e="");const t=[...n.children];return n instanceof HTMLSlotElement&&t.push(...n.assignedElements()),e?t.filter(r=>r.matches(e)):t}function bg(n,e){const t=e.contains(n);return!t&&e instanceof HTMLSlotElement?[...e.assignedElements()].includes(n):t}function Ki(n){try{console.warn(n);return}catch{}}function Qi(n,e){e===void 0&&(e=[]);const t=document.createElement(n);return t.classList.add(...Array.isArray(e)?e:Tg(e)),t}function Pg(n,e){const t=[];for(;n.previousElementSibling;){const r=n.previousElementSibling;e?r.matches(e)&&t.push(r):t.push(r),n=r}return t}function Rg(n,e){const t=[];for(;n.nextElementSibling;){const r=n.nextElementSibling;e?r.matches(e)&&t.push(r):t.push(r),n=r}return t}function jt(n,e){return He().getComputedStyle(n,null).getPropertyValue(e)}function Hl(n){let e=n,t;if(e){for(t=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(t+=1);return t}}function Cg(n,e){const t=[];let r=n.parentElement;for(;r;)t.push(r),r=r.parentElement;return t}function Wl(n,e,t){const r=He();return n[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(r.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(r.getComputedStyle(n,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function yt(n){return(Array.isArray(n)?n:[n]).filter(e=>!!e)}let no;function kg(){const n=He(),e=Kn();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in n||n.DocumentTouch&&e instanceof n.DocumentTouch)}}function Fu(){return no||(no=kg()),no}let ro;function Og(n){let{userAgent:e}=n===void 0?{}:n;const t=Fu(),r=He(),i=r.navigator.platform,s=e||r.navigator.userAgent,a={ios:!1,android:!1},l=r.screen.width,c=r.screen.height,h=s.match(/(Android);?[\s\/]+([\d.]+)?/);let f=s.match(/(iPad).*OS\s([\d_]+)/);const m=s.match(/(iPod)(.*OS\s([\d_]+))?/),v=!f&&s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),T=i==="Win32";let A=i==="MacIntel";const P=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!f&&A&&t.touch&&P.indexOf(`${l}x${c}`)>=0&&(f=s.match(/(Version)\/([\d.]+)/),f||(f=[0,1,"13_0_0"]),A=!1),h&&!T&&(a.os="android",a.android=!0),(f||v||m)&&(a.os="ios",a.ios=!0),a}function Uu(n){return n===void 0&&(n={}),ro||(ro=Og(n)),ro}let io;function Dg(){const n=He(),e=Uu();let t=!1;function r(){const l=n.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(r()){const l=String(n.navigator.userAgent);if(l.includes("Version/")){const[c,h]=l.split("Version/")[1].split(" ")[0].split(".").map(f=>Number(f));t=c<16||c===16&&h<2}}const i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(n.navigator.userAgent),s=r(),a=s||i&&e.ios;return{isSafari:t||s,needPerspectiveFix:t,need3dFix:a,isWebView:i}}function Ng(){return io||(io=Dg()),io}function xg(n){let{swiper:e,on:t,emit:r}=n;const i=He();let s=null,a=null;const l=()=>{!e||e.destroyed||!e.initialized||(r("beforeResize"),r("resize"))},c=()=>{!e||e.destroyed||!e.initialized||(s=new ResizeObserver(m=>{a=i.requestAnimationFrame(()=>{const{width:v,height:T}=e;let A=v,P=T;m.forEach(C=>{let{contentBoxSize:O,contentRect:N,target:D}=C;D&&D!==e.el||(A=N?N.width:(O[0]||O).inlineSize,P=N?N.height:(O[0]||O).blockSize)}),(A!==v||P!==T)&&l()})}),s.observe(e.el))},h=()=>{a&&i.cancelAnimationFrame(a),s&&s.unobserve&&e.el&&(s.unobserve(e.el),s=null)},f=()=>{!e||e.destroyed||!e.initialized||r("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof i.ResizeObserver<"u"){c();return}i.addEventListener("resize",l),i.addEventListener("orientationchange",f)}),t("destroy",()=>{h(),i.removeEventListener("resize",l),i.removeEventListener("orientationchange",f)})}function Lg(n){let{swiper:e,extendParams:t,on:r,emit:i}=n;const s=[],a=He(),l=function(f,m){m===void 0&&(m={});const v=a.MutationObserver||a.WebkitMutationObserver,T=new v(A=>{if(e.__preventObserver__)return;if(A.length===1){i("observerUpdate",A[0]);return}const P=function(){i("observerUpdate",A[0])};a.requestAnimationFrame?a.requestAnimationFrame(P):a.setTimeout(P,0)});T.observe(f,{attributes:typeof m.attributes>"u"?!0:m.attributes,childList:e.isElement||(typeof m.childList>"u"?!0:m).childList,characterData:typeof m.characterData>"u"?!0:m.characterData}),s.push(T)},c=()=>{if(e.params.observer){if(e.params.observeParents){const f=Cg(e.hostEl);for(let m=0;m<f.length;m+=1)l(f[m])}l(e.hostEl,{childList:e.params.observeSlideChildren}),l(e.wrapperEl,{attributes:!1})}},h=()=>{s.forEach(f=>{f.disconnect()}),s.splice(0,s.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",c),r("destroy",h)}var Vg={on(n,e,t){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const i=t?"unshift":"push";return n.split(" ").forEach(s=>{r.eventsListeners[s]||(r.eventsListeners[s]=[]),r.eventsListeners[s][i](e)}),r},once(n,e,t){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;function i(){r.off(n,i),i.__emitterProxy&&delete i.__emitterProxy;for(var s=arguments.length,a=new Array(s),l=0;l<s;l++)a[l]=arguments[l];e.apply(r,a)}return i.__emitterProxy=e,r.on(n,i,t)},onAny(n,e){const t=this;if(!t.eventsListeners||t.destroyed||typeof n!="function")return t;const r=e?"unshift":"push";return t.eventsAnyListeners.indexOf(n)<0&&t.eventsAnyListeners[r](n),t},offAny(n){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const t=e.eventsAnyListeners.indexOf(n);return t>=0&&e.eventsAnyListeners.splice(t,1),e},off(n,e){const t=this;return!t.eventsListeners||t.destroyed||!t.eventsListeners||n.split(" ").forEach(r=>{typeof e>"u"?t.eventsListeners[r]=[]:t.eventsListeners[r]&&t.eventsListeners[r].forEach((i,s)=>{(i===e||i.__emitterProxy&&i.__emitterProxy===e)&&t.eventsListeners[r].splice(s,1)})}),t},emit(){const n=this;if(!n.eventsListeners||n.destroyed||!n.eventsListeners)return n;let e,t,r;for(var i=arguments.length,s=new Array(i),a=0;a<i;a++)s[a]=arguments[a];return typeof s[0]=="string"||Array.isArray(s[0])?(e=s[0],t=s.slice(1,s.length),r=n):(e=s[0].events,t=s[0].data,r=s[0].context||n),t.unshift(r),(Array.isArray(e)?e:e.split(" ")).forEach(c=>{n.eventsAnyListeners&&n.eventsAnyListeners.length&&n.eventsAnyListeners.forEach(h=>{h.apply(r,[c,...t])}),n.eventsListeners&&n.eventsListeners[c]&&n.eventsListeners[c].forEach(h=>{h.apply(r,t)})}),n}};function Mg(){const n=this;let e,t;const r=n.el;typeof n.params.width<"u"&&n.params.width!==null?e=n.params.width:e=r.clientWidth,typeof n.params.height<"u"&&n.params.height!==null?t=n.params.height:t=r.clientHeight,!(e===0&&n.isHorizontal()||t===0&&n.isVertical())&&(e=e-parseInt(jt(r,"padding-left")||0,10)-parseInt(jt(r,"padding-right")||0,10),t=t-parseInt(jt(r,"padding-top")||0,10)-parseInt(jt(r,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(t)&&(t=0),Object.assign(n,{width:e,height:t,size:n.isHorizontal()?e:t}))}function Fg(){const n=this;function e(w,I){return parseFloat(w.getPropertyValue(n.getDirectionLabel(I))||0)}const t=n.params,{wrapperEl:r,slidesEl:i,size:s,rtlTranslate:a,wrongRTL:l}=n,c=n.virtual&&t.virtual.enabled,h=c?n.virtual.slides.length:n.slides.length,f=it(i,`.${n.params.slideClass}, swiper-slide`),m=c?n.virtual.slides.length:f.length;let v=[];const T=[],A=[];let P=t.slidesOffsetBefore;typeof P=="function"&&(P=t.slidesOffsetBefore.call(n));let C=t.slidesOffsetAfter;typeof C=="function"&&(C=t.slidesOffsetAfter.call(n));const O=n.snapGrid.length,N=n.slidesGrid.length;let D=t.spaceBetween,V=-P,U=0,H=0;if(typeof s>"u")return;typeof D=="string"&&D.indexOf("%")>=0?D=parseFloat(D.replace("%",""))/100*s:typeof D=="string"&&(D=parseFloat(D)),n.virtualSize=-D,f.forEach(w=>{a?w.style.marginLeft="":w.style.marginRight="",w.style.marginBottom="",w.style.marginTop=""}),t.centeredSlides&&t.cssMode&&(Ri(r,"--swiper-centered-offset-before",""),Ri(r,"--swiper-centered-offset-after",""));const b=t.grid&&t.grid.rows>1&&n.grid;b?n.grid.initSlides(f):n.grid&&n.grid.unsetSlides();let y;const g=t.slidesPerView==="auto"&&t.breakpoints&&Object.keys(t.breakpoints).filter(w=>typeof t.breakpoints[w].slidesPerView<"u").length>0;for(let w=0;w<m;w+=1){y=0;let I;if(f[w]&&(I=f[w]),b&&n.grid.updateSlide(w,I,f),!(f[w]&&jt(I,"display")==="none")){if(t.slidesPerView==="auto"){g&&(f[w].style[n.getDirectionLabel("width")]="");const S=getComputedStyle(I),_=I.style.transform,J=I.style.webkitTransform;if(_&&(I.style.transform="none"),J&&(I.style.webkitTransform="none"),t.roundLengths)y=n.isHorizontal()?Wl(I,"width"):Wl(I,"height");else{const oe=e(S,"width"),Me=e(S,"padding-left"),Qe=e(S,"padding-right"),Fe=e(S,"margin-left"),et=e(S,"margin-right"),kt=S.getPropertyValue("box-sizing");if(kt&&kt==="border-box")y=oe+Fe+et;else{const{clientWidth:wn,offsetWidth:Ue}=I;y=oe+Me+Qe+Fe+et+(Ue-wn)}}_&&(I.style.transform=_),J&&(I.style.webkitTransform=J),t.roundLengths&&(y=Math.floor(y))}else y=(s-(t.slidesPerView-1)*D)/t.slidesPerView,t.roundLengths&&(y=Math.floor(y)),f[w]&&(f[w].style[n.getDirectionLabel("width")]=`${y}px`);f[w]&&(f[w].swiperSlideSize=y),A.push(y),t.centeredSlides?(V=V+y/2+U/2+D,U===0&&w!==0&&(V=V-s/2-D),w===0&&(V=V-s/2-D),Math.abs(V)<1/1e3&&(V=0),t.roundLengths&&(V=Math.floor(V)),H%t.slidesPerGroup===0&&v.push(V),T.push(V)):(t.roundLengths&&(V=Math.floor(V)),(H-Math.min(n.params.slidesPerGroupSkip,H))%n.params.slidesPerGroup===0&&v.push(V),T.push(V),V=V+y+D),n.virtualSize+=y+D,U=y,H+=1}}if(n.virtualSize=Math.max(n.virtualSize,s)+C,a&&l&&(t.effect==="slide"||t.effect==="coverflow")&&(r.style.width=`${n.virtualSize+D}px`),t.setWrapperSize&&(r.style[n.getDirectionLabel("width")]=`${n.virtualSize+D}px`),b&&n.grid.updateWrapperSize(y,v),!t.centeredSlides){const w=[];for(let I=0;I<v.length;I+=1){let S=v[I];t.roundLengths&&(S=Math.floor(S)),v[I]<=n.virtualSize-s&&w.push(S)}v=w,Math.floor(n.virtualSize-s)-Math.floor(v[v.length-1])>1&&v.push(n.virtualSize-s)}if(c&&t.loop){const w=A[0]+D;if(t.slidesPerGroup>1){const I=Math.ceil((n.virtual.slidesBefore+n.virtual.slidesAfter)/t.slidesPerGroup),S=w*t.slidesPerGroup;for(let _=0;_<I;_+=1)v.push(v[v.length-1]+S)}for(let I=0;I<n.virtual.slidesBefore+n.virtual.slidesAfter;I+=1)t.slidesPerGroup===1&&v.push(v[v.length-1]+w),T.push(T[T.length-1]+w),n.virtualSize+=w}if(v.length===0&&(v=[0]),D!==0){const w=n.isHorizontal()&&a?"marginLeft":n.getDirectionLabel("marginRight");f.filter((I,S)=>!t.cssMode||t.loop?!0:S!==f.length-1).forEach(I=>{I.style[w]=`${D}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let w=0;A.forEach(S=>{w+=S+(D||0)}),w-=D;const I=w-s;v=v.map(S=>S<=0?-P:S>I?I+C:S)}if(t.centerInsufficientSlides){let w=0;A.forEach(S=>{w+=S+(D||0)}),w-=D;const I=(t.slidesOffsetBefore||0)+(t.slidesOffsetAfter||0);if(w+I<s){const S=(s-w-I)/2;v.forEach((_,J)=>{v[J]=_-S}),T.forEach((_,J)=>{T[J]=_+S})}}if(Object.assign(n,{slides:f,snapGrid:v,slidesGrid:T,slidesSizesGrid:A}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){Ri(r,"--swiper-centered-offset-before",`${-v[0]}px`),Ri(r,"--swiper-centered-offset-after",`${n.size/2-A[A.length-1]/2}px`);const w=-n.snapGrid[0],I=-n.slidesGrid[0];n.snapGrid=n.snapGrid.map(S=>S+w),n.slidesGrid=n.slidesGrid.map(S=>S+I)}if(m!==h&&n.emit("slidesLengthChange"),v.length!==O&&(n.params.watchOverflow&&n.checkOverflow(),n.emit("snapGridLengthChange")),T.length!==N&&n.emit("slidesGridLengthChange"),t.watchSlidesProgress&&n.updateSlidesOffset(),n.emit("slidesUpdated"),!c&&!t.cssMode&&(t.effect==="slide"||t.effect==="fade")){const w=`${t.containerModifierClass}backface-hidden`,I=n.el.classList.contains(w);m<=t.maxBackfaceHiddenSlides?I||n.el.classList.add(w):I&&n.el.classList.remove(w)}}function Ug(n){const e=this,t=[],r=e.virtual&&e.params.virtual.enabled;let i=0,s;typeof n=="number"?e.setTransition(n):n===!0&&e.setTransition(e.params.speed);const a=l=>r?e.slides[e.getSlideIndexByData(l)]:e.slides[l];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(l=>{t.push(l)});else for(s=0;s<Math.ceil(e.params.slidesPerView);s+=1){const l=e.activeIndex+s;if(l>e.slides.length&&!r)break;t.push(a(l))}else t.push(a(e.activeIndex));for(s=0;s<t.length;s+=1)if(typeof t[s]<"u"){const l=t[s].offsetHeight;i=l>i?l:i}(i||i===0)&&(e.wrapperEl.style.height=`${i}px`)}function Bg(){const n=this,e=n.slides,t=n.isElement?n.isHorizontal()?n.wrapperEl.offsetLeft:n.wrapperEl.offsetTop:0;for(let r=0;r<e.length;r+=1)e[r].swiperSlideOffset=(n.isHorizontal()?e[r].offsetLeft:e[r].offsetTop)-t-n.cssOverflowAdjustment()}const $l=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function zg(n){n===void 0&&(n=this&&this.translate||0);const e=this,t=e.params,{slides:r,rtlTranslate:i,snapGrid:s}=e;if(r.length===0)return;typeof r[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let a=-n;i&&(a=n),e.visibleSlidesIndexes=[],e.visibleSlides=[];let l=t.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*e.size:typeof l=="string"&&(l=parseFloat(l));for(let c=0;c<r.length;c+=1){const h=r[c];let f=h.swiperSlideOffset;t.cssMode&&t.centeredSlides&&(f-=r[0].swiperSlideOffset);const m=(a+(t.centeredSlides?e.minTranslate():0)-f)/(h.swiperSlideSize+l),v=(a-s[0]+(t.centeredSlides?e.minTranslate():0)-f)/(h.swiperSlideSize+l),T=-(a-f),A=T+e.slidesSizesGrid[c],P=T>=0&&T<=e.size-e.slidesSizesGrid[c],C=T>=0&&T<e.size-1||A>1&&A<=e.size||T<=0&&A>=e.size;C&&(e.visibleSlides.push(h),e.visibleSlidesIndexes.push(c)),$l(h,C,t.slideVisibleClass),$l(h,P,t.slideFullyVisibleClass),h.progress=i?-m:m,h.originalProgress=i?-v:v}}function jg(n){const e=this;if(typeof n>"u"){const f=e.rtlTranslate?-1:1;n=e&&e.translate&&e.translate*f||0}const t=e.params,r=e.maxTranslate()-e.minTranslate();let{progress:i,isBeginning:s,isEnd:a,progressLoop:l}=e;const c=s,h=a;if(r===0)i=0,s=!0,a=!0;else{i=(n-e.minTranslate())/r;const f=Math.abs(n-e.minTranslate())<1,m=Math.abs(n-e.maxTranslate())<1;s=f||i<=0,a=m||i>=1,f&&(i=0),m&&(i=1)}if(t.loop){const f=e.getSlideIndexByData(0),m=e.getSlideIndexByData(e.slides.length-1),v=e.slidesGrid[f],T=e.slidesGrid[m],A=e.slidesGrid[e.slidesGrid.length-1],P=Math.abs(n);P>=v?l=(P-v)/A:l=(P+A-T)/A,l>1&&(l-=1)}Object.assign(e,{progress:i,progressLoop:l,isBeginning:s,isEnd:a}),(t.watchSlidesProgress||t.centeredSlides&&t.autoHeight)&&e.updateSlidesProgress(n),s&&!c&&e.emit("reachBeginning toEdge"),a&&!h&&e.emit("reachEnd toEdge"),(c&&!s||h&&!a)&&e.emit("fromEdge"),e.emit("progress",i)}const so=(n,e,t)=>{e&&!n.classList.contains(t)?n.classList.add(t):!e&&n.classList.contains(t)&&n.classList.remove(t)};function Gg(){const n=this,{slides:e,params:t,slidesEl:r,activeIndex:i}=n,s=n.virtual&&t.virtual.enabled,a=n.grid&&t.grid&&t.grid.rows>1,l=m=>it(r,`.${t.slideClass}${m}, swiper-slide${m}`)[0];let c,h,f;if(s)if(t.loop){let m=i-n.virtual.slidesBefore;m<0&&(m=n.virtual.slides.length+m),m>=n.virtual.slides.length&&(m-=n.virtual.slides.length),c=l(`[data-swiper-slide-index="${m}"]`)}else c=l(`[data-swiper-slide-index="${i}"]`);else a?(c=e.filter(m=>m.column===i)[0],f=e.filter(m=>m.column===i+1)[0],h=e.filter(m=>m.column===i-1)[0]):c=e[i];c&&(a||(f=Rg(c,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!f&&(f=e[0]),h=Pg(c,`.${t.slideClass}, swiper-slide`)[0],t.loop&&!h===0&&(h=e[e.length-1]))),e.forEach(m=>{so(m,m===c,t.slideActiveClass),so(m,m===f,t.slideNextClass),so(m,m===h,t.slidePrevClass)}),n.emitSlidesClasses()}const xi=(n,e)=>{if(!n||n.destroyed||!n.params)return;const t=()=>n.isElement?"swiper-slide":`.${n.params.slideClass}`,r=e.closest(t());if(r){let i=r.querySelector(`.${n.params.lazyPreloaderClass}`);!i&&n.isElement&&(r.shadowRoot?i=r.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{r.shadowRoot&&(i=r.shadowRoot.querySelector(`.${n.params.lazyPreloaderClass}`),i&&i.remove())})),i&&i.remove()}},oo=(n,e)=>{if(!n.slides[e])return;const t=n.slides[e].querySelector('[loading="lazy"]');t&&t.removeAttribute("loading")},Io=n=>{if(!n||n.destroyed||!n.params)return;let e=n.params.lazyPreloadPrevNext;const t=n.slides.length;if(!t||!e||e<0)return;e=Math.min(e,t);const r=n.params.slidesPerView==="auto"?n.slidesPerViewDynamic():Math.ceil(n.params.slidesPerView),i=n.activeIndex;if(n.params.grid&&n.params.grid.rows>1){const a=i,l=[a-e];l.push(...Array.from({length:e}).map((c,h)=>a+r+h)),n.slides.forEach((c,h)=>{l.includes(c.column)&&oo(n,h)});return}const s=i+r-1;if(n.params.rewind||n.params.loop)for(let a=i-e;a<=s+e;a+=1){const l=(a%t+t)%t;(l<i||l>s)&&oo(n,l)}else for(let a=Math.max(i-e,0);a<=Math.min(s+e,t-1);a+=1)a!==i&&(a>s||a<i)&&oo(n,a)};function qg(n){const{slidesGrid:e,params:t}=n,r=n.rtlTranslate?n.translate:-n.translate;let i;for(let s=0;s<e.length;s+=1)typeof e[s+1]<"u"?r>=e[s]&&r<e[s+1]-(e[s+1]-e[s])/2?i=s:r>=e[s]&&r<e[s+1]&&(i=s+1):r>=e[s]&&(i=s);return t.normalizeSlideIndex&&(i<0||typeof i>"u")&&(i=0),i}function Hg(n){const e=this,t=e.rtlTranslate?e.translate:-e.translate,{snapGrid:r,params:i,activeIndex:s,realIndex:a,snapIndex:l}=e;let c=n,h;const f=T=>{let A=T-e.virtual.slidesBefore;return A<0&&(A=e.virtual.slides.length+A),A>=e.virtual.slides.length&&(A-=e.virtual.slides.length),A};if(typeof c>"u"&&(c=qg(e)),r.indexOf(t)>=0)h=r.indexOf(t);else{const T=Math.min(i.slidesPerGroupSkip,c);h=T+Math.floor((c-T)/i.slidesPerGroup)}if(h>=r.length&&(h=r.length-1),c===s&&!e.params.loop){h!==l&&(e.snapIndex=h,e.emit("snapIndexChange"));return}if(c===s&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=f(c);return}const m=e.grid&&i.grid&&i.grid.rows>1;let v;if(e.virtual&&i.virtual.enabled&&i.loop)v=f(c);else if(m){const T=e.slides.filter(P=>P.column===c)[0];let A=parseInt(T.getAttribute("data-swiper-slide-index"),10);Number.isNaN(A)&&(A=Math.max(e.slides.indexOf(T),0)),v=Math.floor(A/i.grid.rows)}else if(e.slides[c]){const T=e.slides[c].getAttribute("data-swiper-slide-index");T?v=parseInt(T,10):v=c}else v=c;Object.assign(e,{previousSnapIndex:l,snapIndex:h,previousRealIndex:a,realIndex:v,previousIndex:s,activeIndex:c}),e.initialized&&Io(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(a!==v&&e.emit("realIndexChange"),e.emit("slideChange"))}function Wg(n,e){const t=this,r=t.params;let i=n.closest(`.${r.slideClass}, swiper-slide`);!i&&t.isElement&&e&&e.length>1&&e.includes(n)&&[...e.slice(e.indexOf(n)+1,e.length)].forEach(l=>{!i&&l.matches&&l.matches(`.${r.slideClass}, swiper-slide`)&&(i=l)});let s=!1,a;if(i){for(let l=0;l<t.slides.length;l+=1)if(t.slides[l]===i){s=!0,a=l;break}}if(i&&s)t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(i.getAttribute("data-swiper-slide-index"),10):t.clickedIndex=a;else{t.clickedSlide=void 0,t.clickedIndex=void 0;return}r.slideToClickedSlide&&t.clickedIndex!==void 0&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}var $g={updateSize:Mg,updateSlides:Fg,updateAutoHeight:Ug,updateSlidesOffset:Bg,updateSlidesProgress:zg,updateProgress:jg,updateSlidesClasses:Gg,updateActiveIndex:Hg,updateClickedSlide:Wg};function Kg(n){n===void 0&&(n=this.isHorizontal()?"x":"y");const e=this,{params:t,rtlTranslate:r,translate:i,wrapperEl:s}=e;if(t.virtualTranslate)return r?-i:i;if(t.cssMode)return i;let a=Sg(s,n);return a+=e.cssOverflowAdjustment(),r&&(a=-a),a||0}function Qg(n,e){const t=this,{rtlTranslate:r,params:i,wrapperEl:s,progress:a}=t;let l=0,c=0;const h=0;t.isHorizontal()?l=r?-n:n:c=n,i.roundLengths&&(l=Math.floor(l),c=Math.floor(c)),t.previousTranslate=t.translate,t.translate=t.isHorizontal()?l:c,i.cssMode?s[t.isHorizontal()?"scrollLeft":"scrollTop"]=t.isHorizontal()?-l:-c:i.virtualTranslate||(t.isHorizontal()?l-=t.cssOverflowAdjustment():c-=t.cssOverflowAdjustment(),s.style.transform=`translate3d(${l}px, ${c}px, ${h}px)`);let f;const m=t.maxTranslate()-t.minTranslate();m===0?f=0:f=(n-t.minTranslate())/m,f!==a&&t.updateProgress(n),t.emit("setTranslate",t.translate,e)}function Yg(){return-this.snapGrid[0]}function Xg(){return-this.snapGrid[this.snapGrid.length-1]}function Jg(n,e,t,r,i){n===void 0&&(n=0),e===void 0&&(e=this.params.speed),t===void 0&&(t=!0),r===void 0&&(r=!0);const s=this,{params:a,wrapperEl:l}=s;if(s.animating&&a.preventInteractionOnTransition)return!1;const c=s.minTranslate(),h=s.maxTranslate();let f;if(r&&n>c?f=c:r&&n<h?f=h:f=n,s.updateProgress(f),a.cssMode){const m=s.isHorizontal();if(e===0)l[m?"scrollLeft":"scrollTop"]=-f;else{if(!s.support.smoothScroll)return Mu({swiper:s,targetPosition:-f,side:m?"left":"top"}),!0;l.scrollTo({[m?"left":"top"]:-f,behavior:"smooth"})}return!0}return e===0?(s.setTransition(0),s.setTranslate(f),t&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionEnd"))):(s.setTransition(e),s.setTranslate(f),t&&(s.emit("beforeTransitionStart",e,i),s.emit("transitionStart")),s.animating||(s.animating=!0,s.onTranslateToWrapperTransitionEnd||(s.onTranslateToWrapperTransitionEnd=function(v){!s||s.destroyed||v.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onTranslateToWrapperTransitionEnd),s.onTranslateToWrapperTransitionEnd=null,delete s.onTranslateToWrapperTransitionEnd,s.animating=!1,t&&s.emit("transitionEnd"))}),s.wrapperEl.addEventListener("transitionend",s.onTranslateToWrapperTransitionEnd))),!0}var Zg={getTranslate:Kg,setTranslate:Qg,minTranslate:Yg,maxTranslate:Xg,translateTo:Jg};function e_(n,e){const t=this;t.params.cssMode||(t.wrapperEl.style.transitionDuration=`${n}ms`,t.wrapperEl.style.transitionDelay=n===0?"0ms":""),t.emit("setTransition",n,e)}function Bu(n){let{swiper:e,runCallbacks:t,direction:r,step:i}=n;const{activeIndex:s,previousIndex:a}=e;let l=r;if(l||(s>a?l="next":s<a?l="prev":l="reset"),e.emit(`transition${i}`),t&&s!==a){if(l==="reset"){e.emit(`slideResetTransition${i}`);return}e.emit(`slideChangeTransition${i}`),l==="next"?e.emit(`slideNextTransition${i}`):e.emit(`slidePrevTransition${i}`)}}function t_(n,e){n===void 0&&(n=!0);const t=this,{params:r}=t;r.cssMode||(r.autoHeight&&t.updateAutoHeight(),Bu({swiper:t,runCallbacks:n,direction:e,step:"Start"}))}function n_(n,e){n===void 0&&(n=!0);const t=this,{params:r}=t;t.animating=!1,!r.cssMode&&(t.setTransition(0),Bu({swiper:t,runCallbacks:n,direction:e,step:"End"}))}var r_={setTransition:e_,transitionStart:t_,transitionEnd:n_};function i_(n,e,t,r,i){n===void 0&&(n=0),t===void 0&&(t=!0),typeof n=="string"&&(n=parseInt(n,10));const s=this;let a=n;a<0&&(a=0);const{params:l,snapGrid:c,slidesGrid:h,previousIndex:f,activeIndex:m,rtlTranslate:v,wrapperEl:T,enabled:A}=s;if(!A&&!r&&!i||s.destroyed||s.animating&&l.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=s.params.speed);const P=Math.min(s.params.slidesPerGroupSkip,a);let C=P+Math.floor((a-P)/s.params.slidesPerGroup);C>=c.length&&(C=c.length-1);const O=-c[C];if(l.normalizeSlideIndex)for(let D=0;D<h.length;D+=1){const V=-Math.floor(O*100),U=Math.floor(h[D]*100),H=Math.floor(h[D+1]*100);typeof h[D+1]<"u"?V>=U&&V<H-(H-U)/2?a=D:V>=U&&V<H&&(a=D+1):V>=U&&(a=D)}if(s.initialized&&a!==m&&(!s.allowSlideNext&&(v?O>s.translate&&O>s.minTranslate():O<s.translate&&O<s.minTranslate())||!s.allowSlidePrev&&O>s.translate&&O>s.maxTranslate()&&(m||0)!==a))return!1;a!==(f||0)&&t&&s.emit("beforeSlideChangeStart"),s.updateProgress(O);let N;if(a>m?N="next":a<m?N="prev":N="reset",v&&-O===s.translate||!v&&O===s.translate)return s.updateActiveIndex(a),l.autoHeight&&s.updateAutoHeight(),s.updateSlidesClasses(),l.effect!=="slide"&&s.setTranslate(O),N!=="reset"&&(s.transitionStart(t,N),s.transitionEnd(t,N)),!1;if(l.cssMode){const D=s.isHorizontal(),V=v?O:-O;if(e===0){const U=s.virtual&&s.params.virtual.enabled;U&&(s.wrapperEl.style.scrollSnapType="none",s._immediateVirtual=!0),U&&!s._cssModeVirtualInitialSet&&s.params.initialSlide>0?(s._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{T[D?"scrollLeft":"scrollTop"]=V})):T[D?"scrollLeft":"scrollTop"]=V,U&&requestAnimationFrame(()=>{s.wrapperEl.style.scrollSnapType="",s._immediateVirtual=!1})}else{if(!s.support.smoothScroll)return Mu({swiper:s,targetPosition:V,side:D?"left":"top"}),!0;T.scrollTo({[D?"left":"top"]:V,behavior:"smooth"})}return!0}return s.setTransition(e),s.setTranslate(O),s.updateActiveIndex(a),s.updateSlidesClasses(),s.emit("beforeTransitionStart",e,r),s.transitionStart(t,N),e===0?s.transitionEnd(t,N):s.animating||(s.animating=!0,s.onSlideToWrapperTransitionEnd||(s.onSlideToWrapperTransitionEnd=function(V){!s||s.destroyed||V.target===this&&(s.wrapperEl.removeEventListener("transitionend",s.onSlideToWrapperTransitionEnd),s.onSlideToWrapperTransitionEnd=null,delete s.onSlideToWrapperTransitionEnd,s.transitionEnd(t,N))}),s.wrapperEl.addEventListener("transitionend",s.onSlideToWrapperTransitionEnd)),!0}function s_(n,e,t,r){n===void 0&&(n=0),t===void 0&&(t=!0),typeof n=="string"&&(n=parseInt(n,10));const i=this;if(i.destroyed)return;typeof e>"u"&&(e=i.params.speed);const s=i.grid&&i.params.grid&&i.params.grid.rows>1;let a=n;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)a=a+i.virtual.slidesBefore;else{let l;if(s){const v=a*i.params.grid.rows;l=i.slides.filter(T=>T.getAttribute("data-swiper-slide-index")*1===v)[0].column}else l=i.getSlideIndexByData(a);const c=s?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:h}=i.params;let f=i.params.slidesPerView;f==="auto"?f=i.slidesPerViewDynamic():(f=Math.ceil(parseFloat(i.params.slidesPerView,10)),h&&f%2===0&&(f=f+1));let m=c-l<f;if(h&&(m=m||l<Math.ceil(f/2)),r&&h&&i.params.slidesPerView!=="auto"&&!s&&(m=!1),m){const v=h?l<i.activeIndex?"prev":"next":l-i.activeIndex-1<i.params.slidesPerView?"next":"prev";i.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?l+1:l-c+1,slideRealIndex:v==="next"?i.realIndex:void 0})}if(s){const v=a*i.params.grid.rows;a=i.slides.filter(T=>T.getAttribute("data-swiper-slide-index")*1===v)[0].column}else a=i.getSlideIndexByData(a)}return requestAnimationFrame(()=>{i.slideTo(a,e,t,r)}),i}function o_(n,e,t){e===void 0&&(e=!0);const r=this,{enabled:i,params:s,animating:a}=r;if(!i||r.destroyed)return r;typeof n>"u"&&(n=r.params.speed);let l=s.slidesPerGroup;s.slidesPerView==="auto"&&s.slidesPerGroup===1&&s.slidesPerGroupAuto&&(l=Math.max(r.slidesPerViewDynamic("current",!0),1));const c=r.activeIndex<s.slidesPerGroupSkip?1:l,h=r.virtual&&s.virtual.enabled;if(s.loop){if(a&&!h&&s.loopPreventsSliding)return!1;if(r.loopFix({direction:"next"}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&s.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+c,n,e,t)}),!0}return s.rewind&&r.isEnd?r.slideTo(0,n,e,t):r.slideTo(r.activeIndex+c,n,e,t)}function a_(n,e,t){e===void 0&&(e=!0);const r=this,{params:i,snapGrid:s,slidesGrid:a,rtlTranslate:l,enabled:c,animating:h}=r;if(!c||r.destroyed)return r;typeof n>"u"&&(n=r.params.speed);const f=r.virtual&&i.virtual.enabled;if(i.loop){if(h&&!f&&i.loopPreventsSliding)return!1;r.loopFix({direction:"prev"}),r._clientLeft=r.wrapperEl.clientLeft}const m=l?r.translate:-r.translate;function v(O){return O<0?-Math.floor(Math.abs(O)):Math.floor(O)}const T=v(m),A=s.map(O=>v(O));let P=s[A.indexOf(T)-1];if(typeof P>"u"&&i.cssMode){let O;s.forEach((N,D)=>{T>=N&&(O=D)}),typeof O<"u"&&(P=s[O>0?O-1:O])}let C=0;if(typeof P<"u"&&(C=a.indexOf(P),C<0&&(C=r.activeIndex-1),i.slidesPerView==="auto"&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(C=C-r.slidesPerViewDynamic("previous",!0)+1,C=Math.max(C,0))),i.rewind&&r.isBeginning){const O=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(O,n,e,t)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(C,n,e,t)}),!0;return r.slideTo(C,n,e,t)}function l_(n,e,t){e===void 0&&(e=!0);const r=this;if(!r.destroyed)return typeof n>"u"&&(n=r.params.speed),r.slideTo(r.activeIndex,n,e,t)}function c_(n,e,t,r){e===void 0&&(e=!0),r===void 0&&(r=.5);const i=this;if(i.destroyed)return;typeof n>"u"&&(n=i.params.speed);let s=i.activeIndex;const a=Math.min(i.params.slidesPerGroupSkip,s),l=a+Math.floor((s-a)/i.params.slidesPerGroup),c=i.rtlTranslate?i.translate:-i.translate;if(c>=i.snapGrid[l]){const h=i.snapGrid[l],f=i.snapGrid[l+1];c-h>(f-h)*r&&(s+=i.params.slidesPerGroup)}else{const h=i.snapGrid[l-1],f=i.snapGrid[l];c-h<=(f-h)*r&&(s-=i.params.slidesPerGroup)}return s=Math.max(s,0),s=Math.min(s,i.slidesGrid.length-1),i.slideTo(s,n,e,t)}function u_(){const n=this;if(n.destroyed)return;const{params:e,slidesEl:t}=n,r=e.slidesPerView==="auto"?n.slidesPerViewDynamic():e.slidesPerView;let i=n.clickedIndex,s;const a=n.isElement?"swiper-slide":`.${e.slideClass}`;if(e.loop){if(n.animating)return;s=parseInt(n.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?i<n.loopedSlides-r/2||i>n.slides.length-n.loopedSlides+r/2?(n.loopFix(),i=n.getSlideIndex(it(t,`${a}[data-swiper-slide-index="${s}"]`)[0]),Eo(()=>{n.slideTo(i)})):n.slideTo(i):i>n.slides.length-r?(n.loopFix(),i=n.getSlideIndex(it(t,`${a}[data-swiper-slide-index="${s}"]`)[0]),Eo(()=>{n.slideTo(i)})):n.slideTo(i)}else n.slideTo(i)}var h_={slideTo:i_,slideToLoop:s_,slideNext:o_,slidePrev:a_,slideReset:l_,slideToClosest:c_,slideToClickedSlide:u_};function d_(n){const e=this,{params:t,slidesEl:r}=e;if(!t.loop||e.virtual&&e.params.virtual.enabled)return;const i=()=>{it(r,`.${t.slideClass}, swiper-slide`).forEach((m,v)=>{m.setAttribute("data-swiper-slide-index",v)})},s=e.grid&&t.grid&&t.grid.rows>1,a=t.slidesPerGroup*(s?t.grid.rows:1),l=e.slides.length%a!==0,c=s&&e.slides.length%t.grid.rows!==0,h=f=>{for(let m=0;m<f;m+=1){const v=e.isElement?Qi("swiper-slide",[t.slideBlankClass]):Qi("div",[t.slideClass,t.slideBlankClass]);e.slidesEl.append(v)}};if(l){if(t.loopAddBlankSlides){const f=a-e.slides.length%a;h(f),e.recalcSlides(),e.updateSlides()}else Ki("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else if(c){if(t.loopAddBlankSlides){const f=t.grid.rows-e.slides.length%t.grid.rows;h(f),e.recalcSlides(),e.updateSlides()}else Ki("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");i()}else i();e.loopFix({slideRealIndex:n,direction:t.centeredSlides?void 0:"next"})}function f_(n){let{slideRealIndex:e,slideTo:t=!0,direction:r,setTranslate:i,activeSlideIndex:s,byController:a,byMousewheel:l}=n===void 0?{}:n;const c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");const{slides:h,allowSlidePrev:f,allowSlideNext:m,slidesEl:v,params:T}=c,{centeredSlides:A}=T;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&T.virtual.enabled){t&&(!T.centeredSlides&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):T.centeredSlides&&c.snapIndex<T.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=f,c.allowSlideNext=m,c.emit("loopFix");return}let P=T.slidesPerView;P==="auto"?P=c.slidesPerViewDynamic():(P=Math.ceil(parseFloat(T.slidesPerView,10)),A&&P%2===0&&(P=P+1));const C=T.slidesPerGroupAuto?P:T.slidesPerGroup;let O=C;O%C!==0&&(O+=C-O%C),O+=T.loopAdditionalSlides,c.loopedSlides=O;const N=c.grid&&T.grid&&T.grid.rows>1;h.length<P+O?Ki("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):N&&T.grid.fill==="row"&&Ki("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const D=[],V=[];let U=c.activeIndex;typeof s>"u"?s=c.getSlideIndex(h.filter(_=>_.classList.contains(T.slideActiveClass))[0]):U=s;const H=r==="next"||!r,b=r==="prev"||!r;let y=0,g=0;const w=N?Math.ceil(h.length/T.grid.rows):h.length,S=(N?h[s].column:s)+(A&&typeof i>"u"?-P/2+.5:0);if(S<O){y=Math.max(O-S,C);for(let _=0;_<O-S;_+=1){const J=_-Math.floor(_/w)*w;if(N){const oe=w-J-1;for(let Me=h.length-1;Me>=0;Me-=1)h[Me].column===oe&&D.push(Me)}else D.push(w-J-1)}}else if(S+P>w-O){g=Math.max(S-(w-O*2),C);for(let _=0;_<g;_+=1){const J=_-Math.floor(_/w)*w;N?h.forEach((oe,Me)=>{oe.column===J&&V.push(Me)}):V.push(J)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),b&&D.forEach(_=>{h[_].swiperLoopMoveDOM=!0,v.prepend(h[_]),h[_].swiperLoopMoveDOM=!1}),H&&V.forEach(_=>{h[_].swiperLoopMoveDOM=!0,v.append(h[_]),h[_].swiperLoopMoveDOM=!1}),c.recalcSlides(),T.slidesPerView==="auto"?c.updateSlides():N&&(D.length>0&&b||V.length>0&&H)&&c.slides.forEach((_,J)=>{c.grid.updateSlide(J,_,c.slides)}),T.watchSlidesProgress&&c.updateSlidesOffset(),t){if(D.length>0&&b){if(typeof e>"u"){const _=c.slidesGrid[U],oe=c.slidesGrid[U+y]-_;l?c.setTranslate(c.translate-oe):(c.slideTo(U+Math.ceil(y),0,!1,!0),i&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-oe,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-oe))}else if(i){const _=N?D.length/T.grid.rows:D.length;c.slideTo(c.activeIndex+_,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(V.length>0&&H)if(typeof e>"u"){const _=c.slidesGrid[U],oe=c.slidesGrid[U-g]-_;l?c.setTranslate(c.translate-oe):(c.slideTo(U-g,0,!1,!0),i&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-oe,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-oe))}else{const _=N?V.length/T.grid.rows:V.length;c.slideTo(c.activeIndex-_,0,!1,!0)}}if(c.allowSlidePrev=f,c.allowSlideNext=m,c.controller&&c.controller.control&&!a){const _={slideRealIndex:e,direction:r,setTranslate:i,activeSlideIndex:s,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(J=>{!J.destroyed&&J.params.loop&&J.loopFix({..._,slideTo:J.params.slidesPerView===T.slidesPerView?t:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({..._,slideTo:c.controller.control.params.slidesPerView===T.slidesPerView?t:!1})}c.emit("loopFix")}function p_(){const n=this,{params:e,slidesEl:t}=n;if(!e.loop||n.virtual&&n.params.virtual.enabled)return;n.recalcSlides();const r=[];n.slides.forEach(i=>{const s=typeof i.swiperSlideIndex>"u"?i.getAttribute("data-swiper-slide-index")*1:i.swiperSlideIndex;r[s]=i}),n.slides.forEach(i=>{i.removeAttribute("data-swiper-slide-index")}),r.forEach(i=>{t.append(i)}),n.recalcSlides(),n.slideTo(n.realIndex,0)}var m_={loopCreate:d_,loopFix:f_,loopDestroy:p_};function g_(n){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const t=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),t.style.cursor="move",t.style.cursor=n?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function __(){const n=this;n.params.watchOverflow&&n.isLocked||n.params.cssMode||(n.isElement&&(n.__preventObserver__=!0),n[n.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",n.isElement&&requestAnimationFrame(()=>{n.__preventObserver__=!1}))}var y_={setGrabCursor:g_,unsetGrabCursor:__};function v_(n,e){e===void 0&&(e=this);function t(r){if(!r||r===Kn()||r===He())return null;r.assignedSlot&&(r=r.assignedSlot);const i=r.closest(n);return!i&&!r.getRootNode?null:i||t(r.getRootNode().host)}return t(e)}function Kl(n,e,t){const r=He(),{params:i}=n,s=i.edgeSwipeDetection,a=i.edgeSwipeThreshold;return s&&(t<=a||t>=r.innerWidth-a)?s==="prevent"?(e.preventDefault(),!0):!1:!0}function w_(n){const e=this,t=Kn();let r=n;r.originalEvent&&(r=r.originalEvent);const i=e.touchEventsData;if(r.type==="pointerdown"){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type==="touchstart"&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type==="touchstart"){Kl(e,r,r.targetTouches[0].pageX);return}const{params:s,touches:a,enabled:l}=e;if(!l||!s.simulateTouch&&r.pointerType==="mouse"||e.animating&&s.preventInteractionOnTransition)return;!e.animating&&s.cssMode&&s.loop&&e.loopFix();let c=r.target;if(s.touchEventsTarget==="wrapper"&&!bg(c,e.wrapperEl)||"which"in r&&r.which===3||"button"in r&&r.button>0||i.isTouched&&i.isMoved)return;const h=!!s.noSwipingClass&&s.noSwipingClass!=="",f=r.composedPath?r.composedPath():r.path;h&&r.target&&r.target.shadowRoot&&f&&(c=f[0]);const m=s.noSwipingSelector?s.noSwipingSelector:`.${s.noSwipingClass}`,v=!!(r.target&&r.target.shadowRoot);if(s.noSwiping&&(v?v_(m,c):c.closest(m))){e.allowClick=!0;return}if(s.swipeHandler&&!c.closest(s.swipeHandler))return;a.currentX=r.pageX,a.currentY=r.pageY;const T=a.currentX,A=a.currentY;if(!Kl(e,r,T))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=T,a.startY=A,i.touchStartTime=$i(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,s.threshold>0&&(i.allowThresholdMove=!1);let P=!0;c.matches(i.focusableElements)&&(P=!1,c.nodeName==="SELECT"&&(i.isTouched=!1)),t.activeElement&&t.activeElement.matches(i.focusableElements)&&t.activeElement!==c&&t.activeElement.blur();const C=P&&e.allowTouchMove&&s.touchStartPreventDefault;(s.touchStartForcePreventDefault||C)&&!c.isContentEditable&&r.preventDefault(),s.freeMode&&s.freeMode.enabled&&e.freeMode&&e.animating&&!s.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",r)}function T_(n){const e=Kn(),t=this,r=t.touchEventsData,{params:i,touches:s,rtlTranslate:a,enabled:l}=t;if(!l||!i.simulateTouch&&n.pointerType==="mouse")return;let c=n;if(c.originalEvent&&(c=c.originalEvent),c.type==="pointermove"&&(r.touchId!==null||c.pointerId!==r.pointerId))return;let h;if(c.type==="touchmove"){if(h=[...c.changedTouches].filter(H=>H.identifier===r.touchId)[0],!h||h.identifier!==r.touchId)return}else h=c;if(!r.isTouched){r.startMoving&&r.isScrolling&&t.emit("touchMoveOpposite",c);return}const f=h.pageX,m=h.pageY;if(c.preventedByNestedSwiper){s.startX=f,s.startY=m;return}if(!t.allowTouchMove){c.target.matches(r.focusableElements)||(t.allowClick=!1),r.isTouched&&(Object.assign(s,{startX:f,startY:m,currentX:f,currentY:m}),r.touchStartTime=$i());return}if(i.touchReleaseOnEdges&&!i.loop){if(t.isVertical()){if(m<s.startY&&t.translate<=t.maxTranslate()||m>s.startY&&t.translate>=t.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(f<s.startX&&t.translate<=t.maxTranslate()||f>s.startX&&t.translate>=t.minTranslate())return}if(e.activeElement&&c.target===e.activeElement&&c.target.matches(r.focusableElements)){r.isMoved=!0,t.allowClick=!1;return}r.allowTouchCallbacks&&t.emit("touchMove",c),s.previousX=s.currentX,s.previousY=s.currentY,s.currentX=f,s.currentY=m;const v=s.currentX-s.startX,T=s.currentY-s.startY;if(t.params.threshold&&Math.sqrt(v**2+T**2)<t.params.threshold)return;if(typeof r.isScrolling>"u"){let H;t.isHorizontal()&&s.currentY===s.startY||t.isVertical()&&s.currentX===s.startX?r.isScrolling=!1:v*v+T*T>=25&&(H=Math.atan2(Math.abs(T),Math.abs(v))*180/Math.PI,r.isScrolling=t.isHorizontal()?H>i.touchAngle:90-H>i.touchAngle)}if(r.isScrolling&&t.emit("touchMoveOpposite",c),typeof r.startMoving>"u"&&(s.currentX!==s.startX||s.currentY!==s.startY)&&(r.startMoving=!0),r.isScrolling||c.type==="touchmove"&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;t.allowClick=!1,!i.cssMode&&c.cancelable&&c.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&c.stopPropagation();let A=t.isHorizontal()?v:T,P=t.isHorizontal()?s.currentX-s.previousX:s.currentY-s.previousY;i.oneWayMovement&&(A=Math.abs(A)*(a?1:-1),P=Math.abs(P)*(a?1:-1)),s.diff=A,A*=i.touchRatio,a&&(A=-A,P=-P);const C=t.touchesDirection;t.swipeDirection=A>0?"prev":"next",t.touchesDirection=P>0?"prev":"next";const O=t.params.loop&&!i.cssMode,N=t.touchesDirection==="next"&&t.allowSlideNext||t.touchesDirection==="prev"&&t.allowSlidePrev;if(!r.isMoved){if(O&&N&&t.loopFix({direction:t.swipeDirection}),r.startTranslate=t.getTranslate(),t.setTransition(0),t.animating){const H=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});t.wrapperEl.dispatchEvent(H)}r.allowMomentumBounce=!1,i.grabCursor&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!0),t.emit("sliderFirstMove",c)}let D;if(new Date().getTime(),r.isMoved&&r.allowThresholdMove&&C!==t.touchesDirection&&O&&N&&Math.abs(A)>=1){Object.assign(s,{startX:f,startY:m,currentX:f,currentY:m,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}t.emit("sliderMove",c),r.isMoved=!0,r.currentTranslate=A+r.startTranslate;let V=!0,U=i.resistanceRatio;if(i.touchReleaseOnEdges&&(U=0),A>0?(O&&N&&!D&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?t.minTranslate()-t.slidesSizesGrid[t.activeIndex+1]-(i.slidesPerView!=="auto"&&t.slides.length-i.slidesPerView>=2?t.slidesSizesGrid[t.activeIndex+1]+t.params.spaceBetween:0)-t.params.spaceBetween:t.minTranslate())&&t.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>t.minTranslate()&&(V=!1,i.resistance&&(r.currentTranslate=t.minTranslate()-1+(-t.minTranslate()+r.startTranslate+A)**U))):A<0&&(O&&N&&!D&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?t.maxTranslate()+t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween+(i.slidesPerView!=="auto"&&t.slides.length-i.slidesPerView>=2?t.slidesSizesGrid[t.slidesSizesGrid.length-1]+t.params.spaceBetween:0):t.maxTranslate())&&t.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:t.slides.length-(i.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<t.maxTranslate()&&(V=!1,i.resistance&&(r.currentTranslate=t.maxTranslate()+1-(t.maxTranslate()-r.startTranslate-A)**U))),V&&(c.preventedByNestedSwiper=!0),!t.allowSlideNext&&t.swipeDirection==="next"&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!t.allowSlidePrev&&t.swipeDirection==="prev"&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!t.allowSlidePrev&&!t.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(A)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,s.startX=s.currentX,s.startY=s.currentY,r.currentTranslate=r.startTranslate,s.diff=t.isHorizontal()?s.currentX-s.startX:s.currentY-s.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&t.freeMode||i.watchSlidesProgress)&&(t.updateActiveIndex(),t.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&t.freeMode&&t.freeMode.onTouchMove(),t.updateProgress(r.currentTranslate),t.setTranslate(r.currentTranslate))}function E_(n){const e=this,t=e.touchEventsData;let r=n;r.originalEvent&&(r=r.originalEvent);let i;if(r.type==="touchend"||r.type==="touchcancel"){if(i=[...r.changedTouches].filter(U=>U.identifier===t.touchId)[0],!i||i.identifier!==t.touchId)return}else{if(t.touchId!==null||r.pointerId!==t.pointerId)return;i=r}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(r.type)&&!(["pointercancel","contextmenu"].includes(r.type)&&(e.browser.isSafari||e.browser.isWebView)))return;t.pointerId=null,t.touchId=null;const{params:a,touches:l,rtlTranslate:c,slidesGrid:h,enabled:f}=e;if(!f||!a.simulateTouch&&r.pointerType==="mouse")return;if(t.allowTouchCallbacks&&e.emit("touchEnd",r),t.allowTouchCallbacks=!1,!t.isTouched){t.isMoved&&a.grabCursor&&e.setGrabCursor(!1),t.isMoved=!1,t.startMoving=!1;return}a.grabCursor&&t.isMoved&&t.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const m=$i(),v=m-t.touchStartTime;if(e.allowClick){const U=r.path||r.composedPath&&r.composedPath();e.updateClickedSlide(U&&U[0]||r.target,U),e.emit("tap click",r),v<300&&m-t.lastClickTime<300&&e.emit("doubleTap doubleClick",r)}if(t.lastClickTime=$i(),Eo(()=>{e.destroyed||(e.allowClick=!0)}),!t.isTouched||!t.isMoved||!e.swipeDirection||l.diff===0&&!t.loopSwapReset||t.currentTranslate===t.startTranslate&&!t.loopSwapReset){t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;return}t.isTouched=!1,t.isMoved=!1,t.startMoving=!1;let T;if(a.followFinger?T=c?e.translate:-e.translate:T=-t.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:T});return}const A=T>=-e.maxTranslate()&&!e.params.loop;let P=0,C=e.slidesSizesGrid[0];for(let U=0;U<h.length;U+=U<a.slidesPerGroupSkip?1:a.slidesPerGroup){const H=U<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;typeof h[U+H]<"u"?(A||T>=h[U]&&T<h[U+H])&&(P=U,C=h[U+H]-h[U]):(A||T>=h[U])&&(P=U,C=h[h.length-1]-h[h.length-2])}let O=null,N=null;a.rewind&&(e.isBeginning?N=a.virtual&&a.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(O=0));const D=(T-h[P])/C,V=P<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(v>a.longSwipesMs){if(!a.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(D>=a.longSwipesRatio?e.slideTo(a.rewind&&e.isEnd?O:P+V):e.slideTo(P)),e.swipeDirection==="prev"&&(D>1-a.longSwipesRatio?e.slideTo(P+V):N!==null&&D<0&&Math.abs(D)>a.longSwipesRatio?e.slideTo(N):e.slideTo(P))}else{if(!a.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(r.target===e.navigation.nextEl||r.target===e.navigation.prevEl)?r.target===e.navigation.nextEl?e.slideTo(P+V):e.slideTo(P):(e.swipeDirection==="next"&&e.slideTo(O!==null?O:P+V),e.swipeDirection==="prev"&&e.slideTo(N!==null?N:P))}}function Ql(){const n=this,{params:e,el:t}=n;if(t&&t.offsetWidth===0)return;e.breakpoints&&n.setBreakpoint();const{allowSlideNext:r,allowSlidePrev:i,snapGrid:s}=n,a=n.virtual&&n.params.virtual.enabled;n.allowSlideNext=!0,n.allowSlidePrev=!0,n.updateSize(),n.updateSlides(),n.updateSlidesClasses();const l=a&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&n.isEnd&&!n.isBeginning&&!n.params.centeredSlides&&!l?n.slideTo(n.slides.length-1,0,!1,!0):n.params.loop&&!a?n.slideToLoop(n.realIndex,0,!1,!0):n.slideTo(n.activeIndex,0,!1,!0),n.autoplay&&n.autoplay.running&&n.autoplay.paused&&(clearTimeout(n.autoplay.resizeTimeout),n.autoplay.resizeTimeout=setTimeout(()=>{n.autoplay&&n.autoplay.running&&n.autoplay.paused&&n.autoplay.resume()},500)),n.allowSlidePrev=i,n.allowSlideNext=r,n.params.watchOverflow&&s!==n.snapGrid&&n.checkOverflow()}function I_(n){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&n.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(n.stopPropagation(),n.stopImmediatePropagation())))}function S_(){const n=this,{wrapperEl:e,rtlTranslate:t,enabled:r}=n;if(!r)return;n.previousTranslate=n.translate,n.isHorizontal()?n.translate=-e.scrollLeft:n.translate=-e.scrollTop,n.translate===0&&(n.translate=0),n.updateActiveIndex(),n.updateSlidesClasses();let i;const s=n.maxTranslate()-n.minTranslate();s===0?i=0:i=(n.translate-n.minTranslate())/s,i!==n.progress&&n.updateProgress(t?-n.translate:n.translate),n.emit("setTranslate",n.translate,!1)}function A_(n){const e=this;xi(e,n.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function b_(){const n=this;n.documentTouchHandlerProceeded||(n.documentTouchHandlerProceeded=!0,n.params.touchReleaseOnEdges&&(n.el.style.touchAction="auto"))}const zu=(n,e)=>{const t=Kn(),{params:r,el:i,wrapperEl:s,device:a}=n,l=!!r.nested,c=e==="on"?"addEventListener":"removeEventListener",h=e;!i||typeof i=="string"||(t[c]("touchstart",n.onDocumentTouchStart,{passive:!1,capture:l}),i[c]("touchstart",n.onTouchStart,{passive:!1}),i[c]("pointerdown",n.onTouchStart,{passive:!1}),t[c]("touchmove",n.onTouchMove,{passive:!1,capture:l}),t[c]("pointermove",n.onTouchMove,{passive:!1,capture:l}),t[c]("touchend",n.onTouchEnd,{passive:!0}),t[c]("pointerup",n.onTouchEnd,{passive:!0}),t[c]("pointercancel",n.onTouchEnd,{passive:!0}),t[c]("touchcancel",n.onTouchEnd,{passive:!0}),t[c]("pointerout",n.onTouchEnd,{passive:!0}),t[c]("pointerleave",n.onTouchEnd,{passive:!0}),t[c]("contextmenu",n.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[c]("click",n.onClick,!0),r.cssMode&&s[c]("scroll",n.onScroll),r.updateOnWindowResize?n[h](a.ios||a.android?"resize orientationchange observerUpdate":"resize observerUpdate",Ql,!0):n[h]("observerUpdate",Ql,!0),i[c]("load",n.onLoad,{capture:!0}))};function P_(){const n=this,{params:e}=n;n.onTouchStart=w_.bind(n),n.onTouchMove=T_.bind(n),n.onTouchEnd=E_.bind(n),n.onDocumentTouchStart=b_.bind(n),e.cssMode&&(n.onScroll=S_.bind(n)),n.onClick=I_.bind(n),n.onLoad=A_.bind(n),zu(n,"on")}function R_(){zu(this,"off")}var C_={attachEvents:P_,detachEvents:R_};const Yl=(n,e)=>n.grid&&e.grid&&e.grid.rows>1;function k_(){const n=this,{realIndex:e,initialized:t,params:r,el:i}=n,s=r.breakpoints;if(!s||s&&Object.keys(s).length===0)return;const a=n.getBreakpoint(s,n.params.breakpointsBase,n.el);if(!a||n.currentBreakpoint===a)return;const c=(a in s?s[a]:void 0)||n.originalParams,h=Yl(n,r),f=Yl(n,c),m=n.params.grabCursor,v=c.grabCursor,T=r.enabled;h&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),n.emitContainerClasses()):!h&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(c.grid.fill&&c.grid.fill==="column"||!c.grid.fill&&r.grid.fill==="column")&&i.classList.add(`${r.containerModifierClass}grid-column`),n.emitContainerClasses()),m&&!v?n.unsetGrabCursor():!m&&v&&n.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(D=>{if(typeof c[D]>"u")return;const V=r[D]&&r[D].enabled,U=c[D]&&c[D].enabled;V&&!U&&n[D].disable(),!V&&U&&n[D].enable()});const A=c.direction&&c.direction!==r.direction,P=r.loop&&(c.slidesPerView!==r.slidesPerView||A),C=r.loop;A&&t&&n.changeDirection(),je(n.params,c);const O=n.params.enabled,N=n.params.loop;Object.assign(n,{allowTouchMove:n.params.allowTouchMove,allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev}),T&&!O?n.disable():!T&&O&&n.enable(),n.currentBreakpoint=a,n.emit("_beforeBreakpoint",c),t&&(P?(n.loopDestroy(),n.loopCreate(e),n.updateSlides()):!C&&N?(n.loopCreate(e),n.updateSlides()):C&&!N&&n.loopDestroy()),n.emit("breakpoint",c)}function O_(n,e,t){if(e===void 0&&(e="window"),!n||e==="container"&&!t)return;let r=!1;const i=He(),s=e==="window"?i.innerHeight:t.clientHeight,a=Object.keys(n).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const c=parseFloat(l.substr(1));return{value:s*c,point:l}}return{value:l,point:l}});a.sort((l,c)=>parseInt(l.value,10)-parseInt(c.value,10));for(let l=0;l<a.length;l+=1){const{point:c,value:h}=a[l];e==="window"?i.matchMedia(`(min-width: ${h}px)`).matches&&(r=c):h<=t.clientWidth&&(r=c)}return r||"max"}var D_={setBreakpoint:k_,getBreakpoint:O_};function N_(n,e){const t=[];return n.forEach(r=>{typeof r=="object"?Object.keys(r).forEach(i=>{r[i]&&t.push(e+i)}):typeof r=="string"&&t.push(e+r)}),t}function x_(){const n=this,{classNames:e,params:t,rtl:r,el:i,device:s}=n,a=N_(["initialized",t.direction,{"free-mode":n.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:r},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&t.grid.fill==="column"},{android:s.android},{ios:s.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass);e.push(...a),i.classList.add(...e),n.emitContainerClasses()}function L_(){const n=this,{el:e,classNames:t}=n;!e||typeof e=="string"||(e.classList.remove(...t),n.emitContainerClasses())}var V_={addClasses:x_,removeClasses:L_};function M_(){const n=this,{isLocked:e,params:t}=n,{slidesOffsetBefore:r}=t;if(r){const i=n.slides.length-1,s=n.slidesGrid[i]+n.slidesSizesGrid[i]+r*2;n.isLocked=n.size>s}else n.isLocked=n.snapGrid.length===1;t.allowSlideNext===!0&&(n.allowSlideNext=!n.isLocked),t.allowSlidePrev===!0&&(n.allowSlidePrev=!n.isLocked),e&&e!==n.isLocked&&(n.isEnd=!1),e!==n.isLocked&&n.emit(n.isLocked?"lock":"unlock")}var F_={checkOverflow:M_},Xl={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function U_(n,e){return function(r){r===void 0&&(r={});const i=Object.keys(r)[0],s=r[i];if(typeof s!="object"||s===null){je(e,r);return}if(n[i]===!0&&(n[i]={enabled:!0}),i==="navigation"&&n[i]&&n[i].enabled&&!n[i].prevEl&&!n[i].nextEl&&(n[i].auto=!0),["pagination","scrollbar"].indexOf(i)>=0&&n[i]&&n[i].enabled&&!n[i].el&&(n[i].auto=!0),!(i in n&&"enabled"in s)){je(e,r);return}typeof n[i]=="object"&&!("enabled"in n[i])&&(n[i].enabled=!0),n[i]||(n[i]={enabled:!1}),je(e,r)}}const ao={eventsEmitter:Vg,update:$g,translate:Zg,transition:r_,slide:h_,loop:m_,grabCursor:y_,events:C_,breakpoints:D_,checkOverflow:F_,classes:V_},lo={};class ze{constructor(){let e,t;for(var r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];i.length===1&&i[0].constructor&&Object.prototype.toString.call(i[0]).slice(8,-1)==="Object"?t=i[0]:[e,t]=i,t||(t={}),t=je({},t),e&&!t.el&&(t.el=e);const a=Kn();if(t.el&&typeof t.el=="string"&&a.querySelectorAll(t.el).length>1){const f=[];return a.querySelectorAll(t.el).forEach(m=>{const v=je({},t,{el:m});f.push(new ze(v))}),f}const l=this;l.__swiper__=!0,l.support=Fu(),l.device=Uu({userAgent:t.userAgent}),l.browser=Ng(),l.eventsListeners={},l.eventsAnyListeners=[],l.modules=[...l.__modules__],t.modules&&Array.isArray(t.modules)&&l.modules.push(...t.modules);const c={};l.modules.forEach(f=>{f({params:t,swiper:l,extendParams:U_(t,c),on:l.on.bind(l),once:l.once.bind(l),off:l.off.bind(l),emit:l.emit.bind(l)})});const h=je({},Xl,c);return l.params=je({},h,lo,t),l.originalParams=je({},l.params),l.passedParams=je({},t),l.params&&l.params.on&&Object.keys(l.params.on).forEach(f=>{l.on(f,l.params.on[f])}),l.params&&l.params.onAny&&l.onAny(l.params.onAny),Object.assign(l,{enabled:l.params.enabled,el:e,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return l.params.direction==="horizontal"},isVertical(){return l.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:l.params.allowSlideNext,allowSlidePrev:l.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:l.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:l.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),l.emit("_swiper"),l.params.init&&l.init(),l}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:t,params:r}=this,i=it(t,`.${r.slideClass}, swiper-slide`),s=Hl(i[0]);return Hl(e)-s}getSlideIndexByData(e){return this.getSlideIndex(this.slides.filter(t=>t.getAttribute("data-swiper-slide-index")*1===e)[0])}recalcSlides(){const e=this,{slidesEl:t,params:r}=e;e.slides=it(t,`.${r.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){const r=this;e=Math.min(Math.max(e,0),1);const i=r.minTranslate(),a=(r.maxTranslate()-i)*e+i;r.translateTo(a,typeof t>"u"?0:t),r.updateActiveIndex(),r.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=e.el.className.split(" ").filter(r=>r.indexOf("swiper")===0||r.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this;return t.destroyed?"":e.className.split(" ").filter(r=>r.indexOf("swiper-slide")===0||r.indexOf(t.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const t=[];e.slides.forEach(r=>{const i=e.getSlideClasses(r);t.push({slideEl:r,classNames:i}),e.emit("_slideClass",r,i)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){e===void 0&&(e="current"),t===void 0&&(t=!1);const r=this,{params:i,slides:s,slidesGrid:a,slidesSizesGrid:l,size:c,activeIndex:h}=r;let f=1;if(typeof i.slidesPerView=="number")return i.slidesPerView;if(i.centeredSlides){let m=s[h]?Math.ceil(s[h].swiperSlideSize):0,v;for(let T=h+1;T<s.length;T+=1)s[T]&&!v&&(m+=Math.ceil(s[T].swiperSlideSize),f+=1,m>c&&(v=!0));for(let T=h-1;T>=0;T-=1)s[T]&&!v&&(m+=s[T].swiperSlideSize,f+=1,m>c&&(v=!0))}else if(e==="current")for(let m=h+1;m<s.length;m+=1)(t?a[m]+l[m]-a[h]<c:a[m]-a[h]<c)&&(f+=1);else for(let m=h-1;m>=0;m-=1)a[h]-a[m]<c&&(f+=1);return f}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:t,params:r}=e;r.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(a=>{a.complete&&xi(e,a)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function i(){const a=e.rtlTranslate?e.translate*-1:e.translate,l=Math.min(Math.max(a,e.maxTranslate()),e.minTranslate());e.setTranslate(l),e.updateActiveIndex(),e.updateSlidesClasses()}let s;if(r.freeMode&&r.freeMode.enabled&&!r.cssMode)i(),r.autoHeight&&e.updateAutoHeight();else{if((r.slidesPerView==="auto"||r.slidesPerView>1)&&e.isEnd&&!r.centeredSlides){const a=e.virtual&&r.virtual.enabled?e.virtual.slides:e.slides;s=e.slideTo(a.length-1,0,!1,!0)}else s=e.slideTo(e.activeIndex,0,!1,!0);s||i()}r.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){t===void 0&&(t=!0);const r=this,i=r.params.direction;return e||(e=i==="horizontal"?"vertical":"horizontal"),e===i||e!=="horizontal"&&e!=="vertical"||(r.el.classList.remove(`${r.params.containerModifierClass}${i}`),r.el.classList.add(`${r.params.containerModifierClass}${e}`),r.emitContainerClasses(),r.params.direction=e,r.slides.forEach(s=>{e==="vertical"?s.style.width="":s.style.height=""}),r.emit("changeDirection"),t&&r.update()),r}changeLanguageDirection(e){const t=this;t.rtl&&e==="rtl"||!t.rtl&&e==="ltr"||(t.rtl=e==="rtl",t.rtlTranslate=t.params.direction==="horizontal"&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this;if(t.mounted)return!0;let r=e||t.params.el;if(typeof r=="string"&&(r=document.querySelector(r)),!r)return!1;r.swiper=t,r.parentNode&&r.parentNode.host&&r.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;let a=r&&r.shadowRoot&&r.shadowRoot.querySelector?r.shadowRoot.querySelector(i()):it(r,i())[0];return!a&&t.params.createElements&&(a=Qi("div",t.params.wrapperClass),r.append(a),it(r,`.${t.params.slideClass}`).forEach(l=>{a.append(l)})),Object.assign(t,{el:r,wrapperEl:a,slidesEl:t.isElement&&!r.parentNode.host.slideSlots?r.parentNode.host:a,hostEl:t.isElement?r.parentNode.host:r,mounted:!0,rtl:r.dir.toLowerCase()==="rtl"||jt(r,"direction")==="rtl",rtlTranslate:t.params.direction==="horizontal"&&(r.dir.toLowerCase()==="rtl"||jt(r,"direction")==="rtl"),wrongRTL:jt(a,"display")==="-webkit-box"}),!0}init(e){const t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(),t.attachEvents();const i=[...t.el.querySelectorAll('[loading="lazy"]')];return t.isElement&&i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')),i.forEach(s=>{s.complete?xi(t,s):s.addEventListener("load",a=>{xi(t,a.target)})}),Io(t),t.initialized=!0,Io(t),t.emit("init"),t.emit("afterInit"),t}destroy(e,t){e===void 0&&(e=!0),t===void 0&&(t=!0);const r=this,{params:i,el:s,wrapperEl:a,slides:l}=r;return typeof r.params>"u"||r.destroyed||(r.emit("beforeDestroy"),r.initialized=!1,r.detachEvents(),i.loop&&r.loopDestroy(),t&&(r.removeClasses(),s&&typeof s!="string"&&s.removeAttribute("style"),a&&a.removeAttribute("style"),l&&l.length&&l.forEach(c=>{c.classList.remove(i.slideVisibleClass,i.slideFullyVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass),c.removeAttribute("style"),c.removeAttribute("data-swiper-slide-index")})),r.emit("destroy"),Object.keys(r.eventsListeners).forEach(c=>{r.off(c)}),e!==!1&&(r.el&&typeof r.el!="string"&&(r.el.swiper=null),Eg(r)),r.destroyed=!0),null}static extendDefaults(e){je(lo,e)}static get extendedDefaults(){return lo}static get defaults(){return Xl}static installModule(e){ze.prototype.__modules__||(ze.prototype.__modules__=[]);const t=ze.prototype.__modules__;typeof e=="function"&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(t=>ze.installModule(t)),ze):(ze.installModule(e),ze)}}Object.keys(ao).forEach(n=>{Object.keys(ao[n]).forEach(e=>{ze.prototype[e]=ao[n][e]})});ze.use([xg,Lg]);function B_(n,e,t,r){return n.params.createElements&&Object.keys(r).forEach(i=>{if(!t[i]&&t.auto===!0){let s=it(n.el,`.${r[i]}`)[0];s||(s=Qi("div",r[i]),s.className=r[i],n.el.append(s)),t[i]=s,e[i]=s}}),t}function z_(n){let{swiper:e,extendParams:t,on:r,emit:i}=n;t({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function s(A){let P;return A&&typeof A=="string"&&e.isElement&&(P=e.el.querySelector(A),P)?P:(A&&(typeof A=="string"&&(P=[...document.querySelectorAll(A)]),e.params.uniqueNavElements&&typeof A=="string"&&P&&P.length>1&&e.el.querySelectorAll(A).length===1?P=e.el.querySelector(A):P&&P.length===1&&(P=P[0])),A&&!P?A:P)}function a(A,P){const C=e.params.navigation;A=yt(A),A.forEach(O=>{O&&(O.classList[P?"add":"remove"](...C.disabledClass.split(" ")),O.tagName==="BUTTON"&&(O.disabled=P),e.params.watchOverflow&&e.enabled&&O.classList[e.isLocked?"add":"remove"](C.lockClass))})}function l(){const{nextEl:A,prevEl:P}=e.navigation;if(e.params.loop){a(P,!1),a(A,!1);return}a(P,e.isBeginning&&!e.params.rewind),a(A,e.isEnd&&!e.params.rewind)}function c(A){A.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),i("navigationPrev"))}function h(A){A.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),i("navigationNext"))}function f(){const A=e.params.navigation;if(e.params.navigation=B_(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(A.nextEl||A.prevEl))return;let P=s(A.nextEl),C=s(A.prevEl);Object.assign(e.navigation,{nextEl:P,prevEl:C}),P=yt(P),C=yt(C);const O=(N,D)=>{N&&N.addEventListener("click",D==="next"?h:c),!e.enabled&&N&&N.classList.add(...A.lockClass.split(" "))};P.forEach(N=>O(N,"next")),C.forEach(N=>O(N,"prev"))}function m(){let{nextEl:A,prevEl:P}=e.navigation;A=yt(A),P=yt(P);const C=(O,N)=>{O.removeEventListener("click",N==="next"?h:c),O.classList.remove(...e.params.navigation.disabledClass.split(" "))};A.forEach(O=>C(O,"next")),P.forEach(O=>C(O,"prev"))}r("init",()=>{e.params.navigation.enabled===!1?T():(f(),l())}),r("toEdge fromEdge lock unlock",()=>{l()}),r("destroy",()=>{m()}),r("enable disable",()=>{let{nextEl:A,prevEl:P}=e.navigation;if(A=yt(A),P=yt(P),e.enabled){l();return}[...A,...P].filter(C=>!!C).forEach(C=>C.classList.add(e.params.navigation.lockClass))}),r("click",(A,P)=>{let{nextEl:C,prevEl:O}=e.navigation;C=yt(C),O=yt(O);const N=P.target;let D=O.includes(N)||C.includes(N);if(e.isElement&&!D){const V=P.path||P.composedPath&&P.composedPath();V&&(D=V.find(U=>C.includes(U)||O.includes(U)))}if(e.params.navigation.hideOnClick&&!D){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===N||e.pagination.el.contains(N)))return;let V;C.length?V=C[0].classList.contains(e.params.navigation.hiddenClass):O.length&&(V=O[0].classList.contains(e.params.navigation.hiddenClass)),i(V===!0?"navigationShow":"navigationHide"),[...C,...O].filter(U=>!!U).forEach(U=>U.classList.toggle(e.params.navigation.hiddenClass))}});const v=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),f(),l()},T=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),m()};Object.assign(e.navigation,{enable:v,disable:T,update:l,init:f,destroy:m})}let ju=new Map,Vr=new Map,Yo=new Map;function j_(n,e,t,r,i){for(let s=0;s<e.length;s++)new IntersectionObserver(l=>{l.forEach(c=>{c.isIntersecting&&(console.log("ok"),G_(e,s,n,t,r,i))})},{rootMargin:"100px"}).observe(e[s])}function G_(n,e,t,r,i,s){n[e].tagName.toLowerCase()!=="iframe"&&(ju.set(n[e],r[e]),Vr.set(n[e],i[e]),Yo.set(n[e],new YT.Player(n[e],{videoId:t[e],playerVars:{controls:0,rel:0,fs:0,enablejsapi:1,modestbranding:1},events:{onReady:a=>H_(a,s,n[e]),onStateChange:a=>q_(a,e,s,n[e])}})))}function q_(n,e,t,r){Jl(n,e,t,r),new IntersectionObserver(s=>{s.forEach(a=>{a.isIntersecting||(n.target.pauseVideo(),Jl(n,e,t,r))})}).observe(ju.get(r))}function H_(n,e,t){Vr.get(t).addEventListener("click",()=>{Vr.get(t).classList.add(e),Yo.get(t).playVideo()})}function Jl(n,e,t,r){n.data==YT.PlayerState.PLAYING&&Yo.forEach((i,s)=>{s!==r&&(i.pauseVideo(),Vr.get(s).classList.remove(t))}),(n.data==YT.PlayerState.ENDED||n.data==YT.PlayerState.PAUSED)&&Vr.get(r).classList.remove(t)}ze.use([z_]);function W_(n,e,t,r,i,s=null,a=null,l=null,c=null,h=null,f=null){new ze(n,{autoplay:{delay:500},slidesPerView:r,spaceBetween:i,breakpoints:s,loop:!0,navigation:{nextEl:t,prevEl:e},on:{init:m,slideChange:v=>{document.querySelectorAll(".swiper-slide").forEach(T=>{const A=T.querySelector("iframe");A&&A.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}}});function m(){a&&j_(l,a,c,h,f)}}var Zl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var on,Gu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(b,y){function g(){}g.prototype=y.prototype,b.D=y.prototype,b.prototype=new g,b.prototype.constructor=b,b.C=function(w,I,S){for(var _=Array(arguments.length-2),J=2;J<arguments.length;J++)_[J-2]=arguments[J];return y.prototype[I].apply(w,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(b,y,g){g||(g=0);var w=Array(16);if(typeof y=="string")for(var I=0;16>I;++I)w[I]=y.charCodeAt(g++)|y.charCodeAt(g++)<<8|y.charCodeAt(g++)<<16|y.charCodeAt(g++)<<24;else for(I=0;16>I;++I)w[I]=y[g++]|y[g++]<<8|y[g++]<<16|y[g++]<<24;y=b.g[0],g=b.g[1],I=b.g[2];var S=b.g[3],_=y+(S^g&(I^S))+w[0]+3614090360&4294967295;y=g+(_<<7&4294967295|_>>>25),_=S+(I^y&(g^I))+w[1]+3905402710&4294967295,S=y+(_<<12&4294967295|_>>>20),_=I+(g^S&(y^g))+w[2]+606105819&4294967295,I=S+(_<<17&4294967295|_>>>15),_=g+(y^I&(S^y))+w[3]+3250441966&4294967295,g=I+(_<<22&4294967295|_>>>10),_=y+(S^g&(I^S))+w[4]+4118548399&4294967295,y=g+(_<<7&4294967295|_>>>25),_=S+(I^y&(g^I))+w[5]+1200080426&4294967295,S=y+(_<<12&4294967295|_>>>20),_=I+(g^S&(y^g))+w[6]+2821735955&4294967295,I=S+(_<<17&4294967295|_>>>15),_=g+(y^I&(S^y))+w[7]+4249261313&4294967295,g=I+(_<<22&4294967295|_>>>10),_=y+(S^g&(I^S))+w[8]+1770035416&4294967295,y=g+(_<<7&4294967295|_>>>25),_=S+(I^y&(g^I))+w[9]+2336552879&4294967295,S=y+(_<<12&4294967295|_>>>20),_=I+(g^S&(y^g))+w[10]+4294925233&4294967295,I=S+(_<<17&4294967295|_>>>15),_=g+(y^I&(S^y))+w[11]+2304563134&4294967295,g=I+(_<<22&4294967295|_>>>10),_=y+(S^g&(I^S))+w[12]+1804603682&4294967295,y=g+(_<<7&4294967295|_>>>25),_=S+(I^y&(g^I))+w[13]+4254626195&4294967295,S=y+(_<<12&4294967295|_>>>20),_=I+(g^S&(y^g))+w[14]+2792965006&4294967295,I=S+(_<<17&4294967295|_>>>15),_=g+(y^I&(S^y))+w[15]+1236535329&4294967295,g=I+(_<<22&4294967295|_>>>10),_=y+(I^S&(g^I))+w[1]+4129170786&4294967295,y=g+(_<<5&4294967295|_>>>27),_=S+(g^I&(y^g))+w[6]+3225465664&4294967295,S=y+(_<<9&4294967295|_>>>23),_=I+(y^g&(S^y))+w[11]+643717713&4294967295,I=S+(_<<14&4294967295|_>>>18),_=g+(S^y&(I^S))+w[0]+3921069994&4294967295,g=I+(_<<20&4294967295|_>>>12),_=y+(I^S&(g^I))+w[5]+3593408605&4294967295,y=g+(_<<5&4294967295|_>>>27),_=S+(g^I&(y^g))+w[10]+38016083&4294967295,S=y+(_<<9&4294967295|_>>>23),_=I+(y^g&(S^y))+w[15]+3634488961&4294967295,I=S+(_<<14&4294967295|_>>>18),_=g+(S^y&(I^S))+w[4]+3889429448&4294967295,g=I+(_<<20&4294967295|_>>>12),_=y+(I^S&(g^I))+w[9]+568446438&4294967295,y=g+(_<<5&4294967295|_>>>27),_=S+(g^I&(y^g))+w[14]+3275163606&4294967295,S=y+(_<<9&4294967295|_>>>23),_=I+(y^g&(S^y))+w[3]+4107603335&4294967295,I=S+(_<<14&4294967295|_>>>18),_=g+(S^y&(I^S))+w[8]+1163531501&4294967295,g=I+(_<<20&4294967295|_>>>12),_=y+(I^S&(g^I))+w[13]+2850285829&4294967295,y=g+(_<<5&4294967295|_>>>27),_=S+(g^I&(y^g))+w[2]+4243563512&4294967295,S=y+(_<<9&4294967295|_>>>23),_=I+(y^g&(S^y))+w[7]+1735328473&4294967295,I=S+(_<<14&4294967295|_>>>18),_=g+(S^y&(I^S))+w[12]+2368359562&4294967295,g=I+(_<<20&4294967295|_>>>12),_=y+(g^I^S)+w[5]+4294588738&4294967295,y=g+(_<<4&4294967295|_>>>28),_=S+(y^g^I)+w[8]+2272392833&4294967295,S=y+(_<<11&4294967295|_>>>21),_=I+(S^y^g)+w[11]+1839030562&4294967295,I=S+(_<<16&4294967295|_>>>16),_=g+(I^S^y)+w[14]+4259657740&4294967295,g=I+(_<<23&4294967295|_>>>9),_=y+(g^I^S)+w[1]+2763975236&4294967295,y=g+(_<<4&4294967295|_>>>28),_=S+(y^g^I)+w[4]+1272893353&4294967295,S=y+(_<<11&4294967295|_>>>21),_=I+(S^y^g)+w[7]+4139469664&4294967295,I=S+(_<<16&4294967295|_>>>16),_=g+(I^S^y)+w[10]+3200236656&4294967295,g=I+(_<<23&4294967295|_>>>9),_=y+(g^I^S)+w[13]+681279174&4294967295,y=g+(_<<4&4294967295|_>>>28),_=S+(y^g^I)+w[0]+3936430074&4294967295,S=y+(_<<11&4294967295|_>>>21),_=I+(S^y^g)+w[3]+3572445317&4294967295,I=S+(_<<16&4294967295|_>>>16),_=g+(I^S^y)+w[6]+76029189&4294967295,g=I+(_<<23&4294967295|_>>>9),_=y+(g^I^S)+w[9]+3654602809&4294967295,y=g+(_<<4&4294967295|_>>>28),_=S+(y^g^I)+w[12]+3873151461&4294967295,S=y+(_<<11&4294967295|_>>>21),_=I+(S^y^g)+w[15]+530742520&4294967295,I=S+(_<<16&4294967295|_>>>16),_=g+(I^S^y)+w[2]+3299628645&4294967295,g=I+(_<<23&4294967295|_>>>9),_=y+(I^(g|~S))+w[0]+4096336452&4294967295,y=g+(_<<6&4294967295|_>>>26),_=S+(g^(y|~I))+w[7]+1126891415&4294967295,S=y+(_<<10&4294967295|_>>>22),_=I+(y^(S|~g))+w[14]+2878612391&4294967295,I=S+(_<<15&4294967295|_>>>17),_=g+(S^(I|~y))+w[5]+4237533241&4294967295,g=I+(_<<21&4294967295|_>>>11),_=y+(I^(g|~S))+w[12]+1700485571&4294967295,y=g+(_<<6&4294967295|_>>>26),_=S+(g^(y|~I))+w[3]+2399980690&4294967295,S=y+(_<<10&4294967295|_>>>22),_=I+(y^(S|~g))+w[10]+4293915773&4294967295,I=S+(_<<15&4294967295|_>>>17),_=g+(S^(I|~y))+w[1]+2240044497&4294967295,g=I+(_<<21&4294967295|_>>>11),_=y+(I^(g|~S))+w[8]+1873313359&4294967295,y=g+(_<<6&4294967295|_>>>26),_=S+(g^(y|~I))+w[15]+4264355552&4294967295,S=y+(_<<10&4294967295|_>>>22),_=I+(y^(S|~g))+w[6]+2734768916&4294967295,I=S+(_<<15&4294967295|_>>>17),_=g+(S^(I|~y))+w[13]+1309151649&4294967295,g=I+(_<<21&4294967295|_>>>11),_=y+(I^(g|~S))+w[4]+4149444226&4294967295,y=g+(_<<6&4294967295|_>>>26),_=S+(g^(y|~I))+w[11]+3174756917&4294967295,S=y+(_<<10&4294967295|_>>>22),_=I+(y^(S|~g))+w[2]+718787259&4294967295,I=S+(_<<15&4294967295|_>>>17),_=g+(S^(I|~y))+w[9]+3951481745&4294967295,b.g[0]=b.g[0]+y&4294967295,b.g[1]=b.g[1]+(I+(_<<21&4294967295|_>>>11))&4294967295,b.g[2]=b.g[2]+I&4294967295,b.g[3]=b.g[3]+S&4294967295}r.prototype.u=function(b,y){y===void 0&&(y=b.length);for(var g=y-this.blockSize,w=this.B,I=this.h,S=0;S<y;){if(I==0)for(;S<=g;)i(this,b,S),S+=this.blockSize;if(typeof b=="string"){for(;S<y;)if(w[I++]=b.charCodeAt(S++),I==this.blockSize){i(this,w),I=0;break}}else for(;S<y;)if(w[I++]=b[S++],I==this.blockSize){i(this,w),I=0;break}}this.h=I,this.o+=y},r.prototype.v=function(){var b=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);b[0]=128;for(var y=1;y<b.length-8;++y)b[y]=0;var g=8*this.o;for(y=b.length-8;y<b.length;++y)b[y]=g&255,g/=256;for(this.u(b),b=Array(16),y=g=0;4>y;++y)for(var w=0;32>w;w+=8)b[g++]=this.g[y]>>>w&255;return b};function s(b,y){var g=l;return Object.prototype.hasOwnProperty.call(g,b)?g[b]:g[b]=y(b)}function a(b,y){this.h=y;for(var g=[],w=!0,I=b.length-1;0<=I;I--){var S=b[I]|0;w&&S==y||(g[I]=S,w=!1)}this.g=g}var l={};function c(b){return-128<=b&&128>b?s(b,function(y){return new a([y|0],0>y?-1:0)}):new a([b|0],0>b?-1:0)}function h(b){if(isNaN(b)||!isFinite(b))return m;if(0>b)return C(h(-b));for(var y=[],g=1,w=0;b>=g;w++)y[w]=b/g|0,g*=4294967296;return new a(y,0)}function f(b,y){if(b.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(b.charAt(0)=="-")return C(f(b.substring(1),y));if(0<=b.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=h(Math.pow(y,8)),w=m,I=0;I<b.length;I+=8){var S=Math.min(8,b.length-I),_=parseInt(b.substring(I,I+S),y);8>S?(S=h(Math.pow(y,S)),w=w.j(S).add(h(_))):(w=w.j(g),w=w.add(h(_)))}return w}var m=c(0),v=c(1),T=c(16777216);n=a.prototype,n.m=function(){if(P(this))return-C(this).m();for(var b=0,y=1,g=0;g<this.g.length;g++){var w=this.i(g);b+=(0<=w?w:4294967296+w)*y,y*=4294967296}return b},n.toString=function(b){if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(A(this))return"0";if(P(this))return"-"+C(this).toString(b);for(var y=h(Math.pow(b,6)),g=this,w="";;){var I=V(g,y).g;g=O(g,I.j(y));var S=((0<g.g.length?g.g[0]:g.h)>>>0).toString(b);if(g=I,A(g))return S+w;for(;6>S.length;)S="0"+S;w=S+w}},n.i=function(b){return 0>b?0:b<this.g.length?this.g[b]:this.h};function A(b){if(b.h!=0)return!1;for(var y=0;y<b.g.length;y++)if(b.g[y]!=0)return!1;return!0}function P(b){return b.h==-1}n.l=function(b){return b=O(this,b),P(b)?-1:A(b)?0:1};function C(b){for(var y=b.g.length,g=[],w=0;w<y;w++)g[w]=~b.g[w];return new a(g,~b.h).add(v)}n.abs=function(){return P(this)?C(this):this},n.add=function(b){for(var y=Math.max(this.g.length,b.g.length),g=[],w=0,I=0;I<=y;I++){var S=w+(this.i(I)&65535)+(b.i(I)&65535),_=(S>>>16)+(this.i(I)>>>16)+(b.i(I)>>>16);w=_>>>16,S&=65535,_&=65535,g[I]=_<<16|S}return new a(g,g[g.length-1]&-2147483648?-1:0)};function O(b,y){return b.add(C(y))}n.j=function(b){if(A(this)||A(b))return m;if(P(this))return P(b)?C(this).j(C(b)):C(C(this).j(b));if(P(b))return C(this.j(C(b)));if(0>this.l(T)&&0>b.l(T))return h(this.m()*b.m());for(var y=this.g.length+b.g.length,g=[],w=0;w<2*y;w++)g[w]=0;for(w=0;w<this.g.length;w++)for(var I=0;I<b.g.length;I++){var S=this.i(w)>>>16,_=this.i(w)&65535,J=b.i(I)>>>16,oe=b.i(I)&65535;g[2*w+2*I]+=_*oe,N(g,2*w+2*I),g[2*w+2*I+1]+=S*oe,N(g,2*w+2*I+1),g[2*w+2*I+1]+=_*J,N(g,2*w+2*I+1),g[2*w+2*I+2]+=S*J,N(g,2*w+2*I+2)}for(w=0;w<y;w++)g[w]=g[2*w+1]<<16|g[2*w];for(w=y;w<2*y;w++)g[w]=0;return new a(g,0)};function N(b,y){for(;(b[y]&65535)!=b[y];)b[y+1]+=b[y]>>>16,b[y]&=65535,y++}function D(b,y){this.g=b,this.h=y}function V(b,y){if(A(y))throw Error("division by zero");if(A(b))return new D(m,m);if(P(b))return y=V(C(b),y),new D(C(y.g),C(y.h));if(P(y))return y=V(b,C(y)),new D(C(y.g),y.h);if(30<b.g.length){if(P(b)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var g=v,w=y;0>=w.l(b);)g=U(g),w=U(w);var I=H(g,1),S=H(w,1);for(w=H(w,2),g=H(g,2);!A(w);){var _=S.add(w);0>=_.l(b)&&(I=I.add(g),S=_),w=H(w,1),g=H(g,1)}return y=O(b,I.j(y)),new D(I,y)}for(I=m;0<=b.l(y);){for(g=Math.max(1,Math.floor(b.m()/y.m())),w=Math.ceil(Math.log(g)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),S=h(g),_=S.j(y);P(_)||0<_.l(b);)g-=w,S=h(g),_=S.j(y);A(S)&&(S=v),I=I.add(S),b=O(b,_)}return new D(I,b)}n.A=function(b){return V(this,b).h},n.and=function(b){for(var y=Math.max(this.g.length,b.g.length),g=[],w=0;w<y;w++)g[w]=this.i(w)&b.i(w);return new a(g,this.h&b.h)},n.or=function(b){for(var y=Math.max(this.g.length,b.g.length),g=[],w=0;w<y;w++)g[w]=this.i(w)|b.i(w);return new a(g,this.h|b.h)},n.xor=function(b){for(var y=Math.max(this.g.length,b.g.length),g=[],w=0;w<y;w++)g[w]=this.i(w)^b.i(w);return new a(g,this.h^b.h)};function U(b){for(var y=b.g.length+1,g=[],w=0;w<y;w++)g[w]=b.i(w)<<1|b.i(w-1)>>>31;return new a(g,b.h)}function H(b,y){var g=y>>5;y%=32;for(var w=b.g.length-g,I=[],S=0;S<w;S++)I[S]=0<y?b.i(S+g)>>>y|b.i(S+g+1)<<32-y:b.i(S+g);return new a(I,b.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Gu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,on=a}).apply(typeof Zl<"u"?Zl:typeof self<"u"?self:typeof window<"u"?window:{});var Ci=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qu,Hu,Ar,Wu,Li,So,$u,Ku,Qu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,d){return o==Array.prototype||o==Object.prototype||(o[u]=d.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ci=="object"&&Ci];for(var u=0;u<o.length;++u){var d=o[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=t(this);function i(o,u){if(u)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in d))break e;d=d[R]}o=o[o.length-1],p=d[o],u=u(p),u!=p&&u!=null&&e(d,o,{configurable:!0,writable:!0,value:u})}}function s(o,u){o instanceof String&&(o+="");var d=0,p=!1,R={next:function(){if(!p&&d<o.length){var k=d++;return{value:u(k,o[k]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(o){return o||function(){return s(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function f(o,u,d){return o.call.apply(o.bind,arguments)}function m(o,u,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function v(o,u,d){return v=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,v.apply(null,arguments)}function T(o,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function A(o,u){function d(){}d.prototype=u.prototype,o.aa=u.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,R,k){for(var F=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)F[ie-2]=arguments[ie];return u.prototype[R].apply(p,F)}}function P(o){const u=o.length;if(0<u){const d=Array(u);for(let p=0;p<u;p++)d[p]=o[p];return d}return[]}function C(o,u){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(c(p)){const R=o.length||0,k=p.length||0;o.length=R+k;for(let F=0;F<k;F++)o[R+F]=p[F]}else o.push(p)}}class O{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function N(o){return/^[\s\xa0]*$/.test(o)}function D(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function V(o){return V[" "](o),o}V[" "]=function(){};var U=D().indexOf("Gecko")!=-1&&!(D().toLowerCase().indexOf("webkit")!=-1&&D().indexOf("Edge")==-1)&&!(D().indexOf("Trident")!=-1||D().indexOf("MSIE")!=-1)&&D().indexOf("Edge")==-1;function H(o,u,d){for(const p in o)u.call(d,o[p],p,o)}function b(o,u){for(const d in o)u.call(void 0,o[d],d,o)}function y(o){const u={};for(const d in o)u[d]=o[d];return u}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(o,u){let d,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(d in p)o[d]=p[d];for(let k=0;k<g.length;k++)d=g[k],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function I(o){var u=1;o=o.split(":");const d=[];for(;0<u&&o.length;)d.push(o.shift()),u--;return o.length&&d.push(o.join(":")),d}function S(o){l.setTimeout(()=>{throw o},0)}function _(){var o=et;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class J{constructor(){this.h=this.g=null}add(u,d){const p=oe.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var oe=new O(()=>new Me,o=>o.reset());class Me{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Qe,Fe=!1,et=new J,kt=()=>{const o=l.Promise.resolve(void 0);Qe=()=>{o.then(wn)}};var wn=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(d){S(d)}var u=oe;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}Fe=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var ii=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,u),l.removeEventListener("test",d,u)}catch{}return o}();function ft(o,u){if(ge.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(U){e:{try{V(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else d=="mouseover"?u=o.fromElement:d=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:si[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ft.aa.h.call(this)}}A(ft,ge);var si={2:"touch",3:"pen",4:"mouse"};ft.prototype.h=function(){ft.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var pt="closure_listenable_"+(1e6*Math.random()|0),oi=0;function Tn(o,u,d,p,R){this.listener=o,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=R,this.key=++oi,this.da=this.fa=!1}function Ot(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function En(o){this.src=o,this.g={},this.h=0}En.prototype.add=function(o,u,d,p,R){var k=o.toString();o=this.g[k],o||(o=this.g[k]=[],this.h++);var F=tr(o,u,p,R);return-1<F?(u=o[F],d||(u.fa=!1)):(u=new Tn(u,this.src,k,!!p,R),u.fa=d,o.push(u)),u};function er(o,u){var d=u.type;if(d in o.g){var p=o.g[d],R=Array.prototype.indexOf.call(p,u,void 0),k;(k=0<=R)&&Array.prototype.splice.call(p,R,1),k&&(Ot(u),o.g[d].length==0&&(delete o.g[d],o.h--))}}function tr(o,u,d,p){for(var R=0;R<o.length;++R){var k=o[R];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==p)return R}return-1}var nr="closure_lm_"+(1e6*Math.random()|0),rr={};function ir(o,u,d,p,R){if(Array.isArray(u)){for(var k=0;k<u.length;k++)ir(o,u[k],d,p,R);return null}return d=li(d),o&&o[pt]?o.K(u,d,h(p)?!!p.capture:!!p,R):Cs(o,u,d,!1,p,R)}function Cs(o,u,d,p,R,k){if(!u)throw Error("Invalid event type");var F=h(R)?!!R.capture:!!R,ie=or(o);if(ie||(o[nr]=ie=new En(o)),d=ie.add(u,d,p,F,k),d.proxy)return d;if(p=ai(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)ii||(R=F),R===void 0&&(R=!1),o.addEventListener(u.toString(),p,R);else if(o.attachEvent)o.attachEvent(Sn(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function ai(){function o(d){return u.call(o.src,o.listener,d)}const u=ks;return o}function sr(o,u,d,p,R){if(Array.isArray(u))for(var k=0;k<u.length;k++)sr(o,u[k],d,p,R);else p=h(p)?!!p.capture:!!p,d=li(d),o&&o[pt]?(o=o.i,u=String(u).toString(),u in o.g&&(k=o.g[u],d=tr(k,d,p,R),-1<d&&(Ot(k[d]),Array.prototype.splice.call(k,d,1),k.length==0&&(delete o.g[u],o.h--)))):o&&(o=or(o))&&(u=o.g[u.toString()],o=-1,u&&(o=tr(u,d,p,R)),(d=-1<o?u[o]:null)&&In(d))}function In(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[pt])er(u.i,o);else{var d=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(d,p,o.capture):u.detachEvent?u.detachEvent(Sn(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=or(u))?(er(d,o),d.h==0&&(d.src=null,u[nr]=null)):Ot(o)}}}function Sn(o){return o in rr?rr[o]:rr[o]="on"+o}function ks(o,u){if(o.da)o=!0;else{u=new ft(u,this);var d=o.listener,p=o.ha||o.src;o.fa&&In(o),o=d.call(p,u)}return o}function or(o){return o=o[nr],o instanceof En?o:null}var ar="__closure_events_fn_"+(1e9*Math.random()>>>0);function li(o){return typeof o=="function"?o:(o[ar]||(o[ar]=function(u){return o.handleEvent(u)}),o[ar])}function we(){Ue.call(this),this.i=new En(this),this.M=this,this.F=null}A(we,Ue),we.prototype[pt]=!0,we.prototype.removeEventListener=function(o,u,d,p){sr(this,o,u,d,p)};function Ee(o,u){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new ge(u,o);else if(u instanceof ge)u.target=u.target||o;else{var R=u;u=new ge(p,o),w(u,R)}if(R=!0,d)for(var k=d.length-1;0<=k;k--){var F=u.g=d[k];R=B(F,p,!0,u)&&R}if(F=u.g=o,R=B(F,p,!0,u)&&R,R=B(F,p,!1,u)&&R,d)for(k=0;k<d.length;k++)F=u.g=d[k],R=B(F,p,!1,u)&&R}we.prototype.N=function(){if(we.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var d=o.g[u],p=0;p<d.length;p++)Ot(d[p]);delete o.g[u],o.h--}}this.F=null},we.prototype.K=function(o,u,d,p){return this.i.add(String(o),u,!1,d,p)},we.prototype.L=function(o,u,d,p){return this.i.add(String(o),u,!0,d,p)};function B(o,u,d,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,k=0;k<u.length;++k){var F=u[k];if(F&&!F.da&&F.capture==d){var ie=F.listener,Ie=F.ha||F.src;F.fa&&er(o.i,F),R=ie.call(Ie,p)!==!1&&R}}return R&&!p.defaultPrevented}function E(o,u,d){if(typeof o=="function")d&&(o=v(o,d));else if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function M(o){o.g=E(()=>{o.g=null,o.i&&(o.i=!1,M(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class z extends Ue{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:M(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function G(o){Ue.call(this),this.h=o,this.g={}}A(G,Ue);var We=[];function tt(o){H(o.g,function(u,d){this.g.hasOwnProperty(d)&&In(u)},o),o.g={}}G.prototype.N=function(){G.aa.N.call(this),tt(this)},G.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var $e=l.JSON.stringify,An=l.JSON.parse,Os=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function bn(){}bn.prototype.h=null;function fe(o){return o.h||(o.h=o.i())}function ci(){}var mt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Dt(){ge.call(this,"d")}A(Dt,ge);function Ds(){ge.call(this,"c")}A(Ds,ge);var Jt={},Va=null;function ui(){return Va=Va||new we}Jt.La="serverreachability";function Ma(o){ge.call(this,Jt.La,o)}A(Ma,ge);function lr(o){const u=ui();Ee(u,new Ma(u))}Jt.STAT_EVENT="statevent";function Fa(o,u){ge.call(this,Jt.STAT_EVENT,o),this.stat=u}A(Fa,ge);function Le(o){const u=ui();Ee(u,new Fa(u,o))}Jt.Ma="timingevent";function Ua(o,u){ge.call(this,Jt.Ma,o),this.size=u}A(Ua,ge);function cr(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function ur(){this.g=!0}ur.prototype.xa=function(){this.g=!1};function ef(o,u,d,p,R,k){o.info(function(){if(o.g)if(k)for(var F="",ie=k.split("&"),Ie=0;Ie<ie.length;Ie++){var ne=ie[Ie].split("=");if(1<ne.length){var ke=ne[0];ne=ne[1];var Oe=ke.split("_");F=2<=Oe.length&&Oe[1]=="type"?F+(ke+"="+ne+"&"):F+(ke+"=redacted&")}}else F=null;else F=k;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+u+`
`+d+`
`+F})}function tf(o,u,d,p,R,k,F){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+u+`
`+d+`
`+k+" "+F})}function Pn(o,u,d,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+rf(o,d)+(p?" "+p:"")})}function nf(o,u){o.info(function(){return"TIMEOUT: "+u})}ur.prototype.info=function(){};function rf(o,u){if(!o.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var k=R[0];if(k!="noop"&&k!="stop"&&k!="close")for(var F=1;F<R.length;F++)R[F]=""}}}}return $e(d)}catch{return u}}var hi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ba={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ns;function di(){}A(di,bn),di.prototype.g=function(){return new XMLHttpRequest},di.prototype.i=function(){return{}},Ns=new di;function Nt(o,u,d,p){this.j=o,this.i=u,this.l=d,this.R=p||1,this.U=new G(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new za}function za(){this.i=null,this.g="",this.h=!1}var ja={},xs={};function Ls(o,u,d){o.L=1,o.v=gi(gt(u)),o.m=d,o.P=!0,Ga(o,null)}function Ga(o,u){o.F=Date.now(),fi(o),o.A=gt(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),rl(d.i,"t",p),o.C=0,d=o.j.J,o.h=new za,o.g=Tl(o.j,d?u:null,!o.m),0<o.O&&(o.M=new z(v(o.Y,o,o.g),o.O)),u=o.U,d=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(We[0]=R.toString()),R=We);for(var k=0;k<R.length;k++){var F=ir(d,R[k],p||u.handleEvent,!1,u.h||u);if(!F)break;u.g[F.key]=F}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),lr(),ef(o.i,o.u,o.A,o.l,o.R,o.m)}Nt.prototype.ca=function(o){o=o.target;const u=this.M;u&&_t(o)==3?u.j():this.Y(o)},Nt.prototype.Y=function(o){try{if(o==this.g)e:{const Oe=_t(this.g);var u=this.g.Ba();const kn=this.g.Z();if(!(3>Oe)&&(Oe!=3||this.g&&(this.h.h||this.g.oa()||ul(this.g)))){this.J||Oe!=4||u==7||(u==8||0>=kn?lr(3):lr(2)),Vs(this);var d=this.g.Z();this.X=d;t:if(qa(this)){var p=ul(this.g);o="";var R=p.length,k=_t(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Zt(this),hr(this);var F="";break t}this.h.i=new l.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(k&&u==R-1)});p.length=0,this.h.g+=o,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=d==200,tf(this.i,this.u,this.A,this.l,this.R,Oe,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ie,Ie=this.g;if((ie=Ie.g?Ie.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(ie)){var ne=ie;break t}}ne=null}if(d=ne)Pn(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ms(this,d);else{this.o=!1,this.s=3,Le(12),Zt(this),hr(this);break e}}if(this.P){d=!0;let Ye;for(;!this.J&&this.C<F.length;)if(Ye=sf(this,F),Ye==xs){Oe==4&&(this.s=4,Le(14),d=!1),Pn(this.i,this.l,null,"[Incomplete Response]");break}else if(Ye==ja){this.s=4,Le(15),Pn(this.i,this.l,F,"[Invalid Chunk]"),d=!1;break}else Pn(this.i,this.l,Ye,null),Ms(this,Ye);if(qa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Oe!=4||F.length!=0||this.h.h||(this.s=1,Le(16),d=!1),this.o=this.o&&d,!d)Pn(this.i,this.l,F,"[Invalid Chunked Response]"),Zt(this),hr(this);else if(0<F.length&&!this.W){this.W=!0;var ke=this.j;ke.g==this&&ke.ba&&!ke.M&&(ke.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),Gs(ke),ke.M=!0,Le(11))}}else Pn(this.i,this.l,F,null),Ms(this,F);Oe==4&&Zt(this),this.o&&!this.J&&(Oe==4?_l(this.j,this):(this.o=!1,fi(this)))}else Ef(this.g),d==400&&0<F.indexOf("Unknown SID")?(this.s=3,Le(12)):(this.s=0,Le(13)),Zt(this),hr(this)}}}catch{}finally{}};function qa(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function sf(o,u){var d=o.C,p=u.indexOf(`
`,d);return p==-1?xs:(d=Number(u.substring(d,p)),isNaN(d)?ja:(p+=1,p+d>u.length?xs:(u=u.slice(p,p+d),o.C=p+d,u)))}Nt.prototype.cancel=function(){this.J=!0,Zt(this)};function fi(o){o.S=Date.now()+o.I,Ha(o,o.I)}function Ha(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=cr(v(o.ba,o),u)}function Vs(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Nt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(nf(this.i,this.A),this.L!=2&&(lr(),Le(17)),Zt(this),this.s=2,hr(this)):Ha(this,this.S-o)};function hr(o){o.j.G==0||o.J||_l(o.j,o)}function Zt(o){Vs(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,tt(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ms(o,u){try{var d=o.j;if(d.G!=0&&(d.g==o||Fs(d.h,o))){if(!o.K&&Fs(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Ti(d),vi(d);else break e;js(d),Le(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=cr(v(d.Za,d),6e3));if(1>=Ka(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else tn(d,11)}else if((o.K||d.g==o)&&Ti(d),!N(u))for(R=d.Da.g.parse(u),u=0;u<R.length;u++){let ne=R[u];if(d.T=ne[0],ne=ne[1],d.G==2)if(ne[0]=="c"){d.K=ne[1],d.ia=ne[2];const ke=ne[3];ke!=null&&(d.la=ke,d.j.info("VER="+d.la));const Oe=ne[4];Oe!=null&&(d.Aa=Oe,d.j.info("SVER="+d.Aa));const kn=ne[5];kn!=null&&typeof kn=="number"&&0<kn&&(p=1.5*kn,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Ye=o.g;if(Ye){const Ii=Ye.g?Ye.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ii){var k=p.h;k.g||Ii.indexOf("spdy")==-1&&Ii.indexOf("quic")==-1&&Ii.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(Us(k,k.h),k.h=null))}if(p.D){const qs=Ye.g?Ye.g.getResponseHeader("X-HTTP-Session-Id"):null;qs&&(p.ya=qs,ae(p.I,p.D,qs))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var F=o;if(p.qa=wl(p,p.J?p.ia:null,p.W),F.K){Qa(p.h,F);var ie=F,Ie=p.L;Ie&&(ie.I=Ie),ie.B&&(Vs(ie),fi(ie)),p.g=F}else ml(p);0<d.i.length&&wi(d)}else ne[0]!="stop"&&ne[0]!="close"||tn(d,7);else d.G==3&&(ne[0]=="stop"||ne[0]=="close"?ne[0]=="stop"?tn(d,7):zs(d):ne[0]!="noop"&&d.l&&d.l.ta(ne),d.v=0)}}lr(4)}catch{}}var of=class{constructor(o,u){this.g=o,this.map=u}};function Wa(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function $a(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ka(o){return o.h?1:o.g?o.g.size:0}function Fs(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Us(o,u){o.g?o.g.add(u):o.h=u}function Qa(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}Wa.prototype.cancel=function(){if(this.i=Ya(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ya(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const d of o.g.values())u=u.concat(d.D);return u}return P(o.i)}function af(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],d=o.length,p=0;p<d;p++)u.push(o[p]);return u}u=[],d=0;for(p in o)u[d++]=o[p];return u}function lf(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var d=0;d<o;d++)u.push(d);return u}u=[],d=0;for(const p in o)u[d++]=p;return u}}}function Xa(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var d=lf(o),p=af(o),R=p.length,k=0;k<R;k++)u.call(void 0,p[k],d&&d[k],o)}var Ja=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function cf(o,u){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),R=null;if(0<=p){var k=o[d].substring(0,p);R=o[d].substring(p+1)}else k=o[d];u(k,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function en(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof en){this.h=o.h,pi(this,o.j),this.o=o.o,this.g=o.g,mi(this,o.s),this.l=o.l;var u=o.i,d=new pr;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Za(this,d),this.m=o.m}else o&&(u=String(o).match(Ja))?(this.h=!1,pi(this,u[1]||"",!0),this.o=dr(u[2]||""),this.g=dr(u[3]||"",!0),mi(this,u[4]),this.l=dr(u[5]||"",!0),Za(this,u[6]||"",!0),this.m=dr(u[7]||"")):(this.h=!1,this.i=new pr(null,this.h))}en.prototype.toString=function(){var o=[],u=this.j;u&&o.push(fr(u,el,!0),":");var d=this.g;return(d||u=="file")&&(o.push("//"),(u=this.o)&&o.push(fr(u,el,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(fr(d,d.charAt(0)=="/"?df:hf,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",fr(d,pf)),o.join("")};function gt(o){return new en(o)}function pi(o,u,d){o.j=d?dr(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function mi(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function Za(o,u,d){u instanceof pr?(o.i=u,mf(o.i,o.h)):(d||(u=fr(u,ff)),o.i=new pr(u,o.h))}function ae(o,u,d){o.i.set(u,d)}function gi(o){return ae(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function dr(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function fr(o,u,d){return typeof o=="string"?(o=encodeURI(o).replace(u,uf),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function uf(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var el=/[#\/\?@]/g,hf=/[#\?:]/g,df=/[#\?]/g,ff=/[#\?@]/g,pf=/#/g;function pr(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function xt(o){o.g||(o.g=new Map,o.h=0,o.i&&cf(o.i,function(u,d){o.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}n=pr.prototype,n.add=function(o,u){xt(this),this.i=null,o=Rn(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(u),this.h+=1,this};function tl(o,u){xt(o),u=Rn(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function nl(o,u){return xt(o),u=Rn(o,u),o.g.has(u)}n.forEach=function(o,u){xt(this),this.g.forEach(function(d,p){d.forEach(function(R){o.call(u,R,p,this)},this)},this)},n.na=function(){xt(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let p=0;p<u.length;p++){const R=o[p];for(let k=0;k<R.length;k++)d.push(u[p])}return d},n.V=function(o){xt(this);let u=[];if(typeof o=="string")nl(this,o)&&(u=u.concat(this.g.get(Rn(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)u=u.concat(o[d])}return u},n.set=function(o,u){return xt(this),this.i=null,o=Rn(this,o),nl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function rl(o,u,d){tl(o,u),0<d.length&&(o.i=null,o.g.set(Rn(o,u),P(d)),o.h+=d.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var p=u[d];const k=encodeURIComponent(String(p)),F=this.V(p);for(p=0;p<F.length;p++){var R=k;F[p]!==""&&(R+="="+encodeURIComponent(String(F[p]))),o.push(R)}}return this.i=o.join("&")};function Rn(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function mf(o,u){u&&!o.j&&(xt(o),o.i=null,o.g.forEach(function(d,p){var R=p.toLowerCase();p!=R&&(tl(this,p),rl(this,R,d))},o)),o.j=u}function gf(o,u){const d=new ur;if(l.Image){const p=new Image;p.onload=T(Lt,d,"TestLoadImage: loaded",!0,u,p),p.onerror=T(Lt,d,"TestLoadImage: error",!1,u,p),p.onabort=T(Lt,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=T(Lt,d,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function _f(o,u){const d=new ur,p=new AbortController,R=setTimeout(()=>{p.abort(),Lt(d,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(k=>{clearTimeout(R),k.ok?Lt(d,"TestPingServer: ok",!0,u):Lt(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Lt(d,"TestPingServer: error",!1,u)})}function Lt(o,u,d,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(d)}catch{}}function yf(){this.g=new Os}function vf(o,u,d){const p=d||"";try{Xa(o,function(R,k){let F=R;h(R)&&(F=$e(R)),u.push(p+k+"="+encodeURIComponent(F))})}catch(R){throw u.push(p+"type="+encodeURIComponent("_badmap")),R}}function mr(o){this.l=o.Ub||null,this.j=o.eb||!1}A(mr,bn),mr.prototype.g=function(){return new _i(this.l,this.j)},mr.prototype.i=function(o){return function(){return o}}({});function _i(o,u){we.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}A(_i,we),n=_i.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,_r(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,gr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,_r(this)),this.g&&(this.readyState=3,_r(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;il(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function il(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?gr(this):_r(this),this.readyState==3&&il(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,gr(this))},n.Qa=function(o){this.g&&(this.response=o,gr(this))},n.ga=function(){this.g&&gr(this)};function gr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,_r(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=u.next();return o.join(`\r
`)};function _r(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(_i.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function sl(o){let u="";return H(o,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function Bs(o,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=sl(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):ae(o,u,d))}function ue(o){we.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}A(ue,we);var wf=/^https?$/i,Tf=["POST","PUT"];n=ue.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ns.g(),this.v=this.o?fe(this.o):fe(Ns),this.g.onreadystatechange=v(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(k){ol(this,k);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)d.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const k of p.keys())d.set(k,p.get(k));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Tf,u,void 0))||p||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,F]of d)this.g.setRequestHeader(k,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cl(this),this.u=!0,this.g.send(o),this.u=!1}catch(k){ol(this,k)}};function ol(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,al(o),yi(o)}function al(o){o.A||(o.A=!0,Ee(o,"complete"),Ee(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Ee(this,"complete"),Ee(this,"abort"),yi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),yi(this,!0)),ue.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?ll(this):this.bb())},n.bb=function(){ll(this)};function ll(o){if(o.h&&typeof a<"u"&&(!o.v[1]||_t(o)!=4||o.Z()!=2)){if(o.u&&_t(o)==4)E(o.Ea,0,o);else if(Ee(o,"readystatechange"),_t(o)==4){o.h=!1;try{const F=o.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=F===0){var R=String(o.D).match(Ja)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!wf.test(R?R.toLowerCase():"")}d=p}if(d)Ee(o,"complete"),Ee(o,"success");else{o.m=6;try{var k=2<_t(o)?o.g.statusText:""}catch{k=""}o.l=k+" ["+o.Z()+"]",al(o)}}finally{yi(o)}}}}function yi(o,u){if(o.g){cl(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||Ee(o,"ready");try{d.onreadystatechange=p}catch{}}}function cl(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function _t(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<_t(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),An(u)}};function ul(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ef(o){const u={};o=(o.g&&2<=_t(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(N(o[p]))continue;var d=I(o[p]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[R]||[];u[R]=k,k.push(d)}b(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function yr(o,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||u}function hl(o){this.Aa=0,this.i=[],this.j=new ur,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=yr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=yr("baseRetryDelayMs",5e3,o),this.cb=yr("retryDelaySeedMs",1e4,o),this.Wa=yr("forwardChannelMaxRetries",2,o),this.wa=yr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Wa(o&&o.concurrentRequestLimit),this.Da=new yf,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=hl.prototype,n.la=8,n.G=1,n.connect=function(o,u,d,p){Le(0),this.W=o,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=wl(this,null,this.W),wi(this)};function zs(o){if(dl(o),o.G==3){var u=o.U++,d=gt(o.I);if(ae(d,"SID",o.K),ae(d,"RID",u),ae(d,"TYPE","terminate"),vr(o,d),u=new Nt(o,o.j,u),u.L=2,u.v=gi(gt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=u.v,d=!0),d||(u.g=Tl(u.j,null),u.g.ea(u.v)),u.F=Date.now(),fi(u)}vl(o)}function vi(o){o.g&&(Gs(o),o.g.cancel(),o.g=null)}function dl(o){vi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Ti(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function wi(o){if(!$a(o.h)&&!o.s){o.s=!0;var u=o.Ga;Qe||kt(),Fe||(Qe(),Fe=!0),et.add(u,o),o.B=0}}function If(o,u){return Ka(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=cr(v(o.Ga,o,u),yl(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Nt(this,this.j,o);let k=this.o;if(this.S&&(k?(k=y(k),w(k,this.S)):k=this.S),this.m!==null||this.O||(R.H=k,k=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=pl(this,R,u),d=gt(this.I),ae(d,"RID",o),ae(d,"CVER",22),this.D&&ae(d,"X-HTTP-Session-Id",this.D),vr(this,d),k&&(this.O?u="headers="+encodeURIComponent(String(sl(k)))+"&"+u:this.m&&Bs(d,this.m,k)),Us(this.h,R),this.Ua&&ae(d,"TYPE","init"),this.P?(ae(d,"$req",u),ae(d,"SID","null"),R.T=!0,Ls(R,d,null)):Ls(R,d,u),this.G=2}}else this.G==3&&(o?fl(this,o):this.i.length==0||$a(this.h)||fl(this))};function fl(o,u){var d;u?d=u.l:d=o.U++;const p=gt(o.I);ae(p,"SID",o.K),ae(p,"RID",d),ae(p,"AID",o.T),vr(o,p),o.m&&o.o&&Bs(p,o.m,o.o),d=new Nt(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),u&&(o.i=u.D.concat(o.i)),u=pl(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Us(o.h,d),Ls(d,p,u)}function vr(o,u){o.H&&H(o.H,function(d,p){ae(u,p,d)}),o.l&&Xa({},function(d,p){ae(u,p,d)})}function pl(o,u,d){d=Math.min(o.i.length,d);var p=o.l?v(o.l.Na,o.l,o):null;e:{var R=o.i;let k=-1;for(;;){const F=["count="+d];k==-1?0<d?(k=R[0].g,F.push("ofs="+k)):k=0:F.push("ofs="+k);let ie=!0;for(let Ie=0;Ie<d;Ie++){let ne=R[Ie].g;const ke=R[Ie].map;if(ne-=k,0>ne)k=Math.max(0,R[Ie].g-100),ie=!1;else try{vf(ke,F,"req"+ne+"_")}catch{p&&p(ke)}}if(ie){p=F.join("&");break e}}}return o=o.i.splice(0,d),u.D=o,p}function ml(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Qe||kt(),Fe||(Qe(),Fe=!0),et.add(u,o),o.v=0}}function js(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=cr(v(o.Fa,o),yl(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,gl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=cr(v(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Le(10),vi(this),gl(this))};function Gs(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function gl(o){o.g=new Nt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=gt(o.qa);ae(u,"RID","rpc"),ae(u,"SID",o.K),ae(u,"AID",o.T),ae(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&ae(u,"TO",o.ja),ae(u,"TYPE","xmlhttp"),vr(o,u),o.m&&o.o&&Bs(u,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=gi(gt(u)),d.m=null,d.P=!0,Ga(d,o)}n.Za=function(){this.C!=null&&(this.C=null,vi(this),js(this),Le(19))};function Ti(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function _l(o,u){var d=null;if(o.g==u){Ti(o),Gs(o),o.g=null;var p=2}else if(Fs(o.h,u))d=u.D,Qa(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;p=ui(),Ee(p,new Ua(p,d)),wi(o)}else ml(o);else if(R=u.s,R==3||R==0&&0<u.X||!(p==1&&If(o,u)||p==2&&js(o)))switch(d&&0<d.length&&(u=o.h,u.i=u.i.concat(d)),R){case 1:tn(o,5);break;case 4:tn(o,10);break;case 3:tn(o,6);break;default:tn(o,2)}}}function yl(o,u){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*u}function tn(o,u){if(o.j.info("Error code "+u),u==2){var d=v(o.fb,o),p=o.Xa;const R=!p;p=new en(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||pi(p,"https"),gi(p),R?gf(p.toString(),d):_f(p.toString(),d)}else Le(2);o.G=0,o.l&&o.l.sa(u),vl(o),dl(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Le(2)):(this.j.info("Failed to ping google.com"),Le(1))};function vl(o){if(o.G=0,o.ka=[],o.l){const u=Ya(o.h);(u.length!=0||o.i.length!=0)&&(C(o.ka,u),C(o.ka,o.i),o.h.i.length=0,P(o.i),o.i.length=0),o.l.ra()}}function wl(o,u,d){var p=d instanceof en?gt(d):new en(d);if(p.g!="")u&&(p.g=u+"."+p.g),mi(p,p.s);else{var R=l.location;p=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var k=new en(null);p&&pi(k,p),u&&(k.g=u),R&&mi(k,R),d&&(k.l=d),p=k}return d=o.D,u=o.ya,d&&u&&ae(p,d,u),ae(p,"VER",o.la),vr(o,p),p}function Tl(o,u,d){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new ue(new mr({eb:d})):new ue(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function El(){}n=El.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ei(){}Ei.prototype.g=function(o,u){return new Be(o,u)};function Be(o,u){we.call(this),this.g=new hl(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!N(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!N(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Cn(this)}A(Be,we),Be.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Be.prototype.close=function(){zs(this.g)},Be.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=$e(o),o=d);u.i.push(new of(u.Ya++,o)),u.G==3&&wi(u)},Be.prototype.N=function(){this.g.l=null,delete this.j,zs(this.g),delete this.g,Be.aa.N.call(this)};function Il(o){Dt.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const d in u){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}A(Il,Dt);function Sl(){Ds.call(this),this.status=1}A(Sl,Ds);function Cn(o){this.g=o}A(Cn,El),Cn.prototype.ua=function(){Ee(this.g,"a")},Cn.prototype.ta=function(o){Ee(this.g,new Il(o))},Cn.prototype.sa=function(o){Ee(this.g,new Sl)},Cn.prototype.ra=function(){Ee(this.g,"b")},Ei.prototype.createWebChannel=Ei.prototype.g,Be.prototype.send=Be.prototype.o,Be.prototype.open=Be.prototype.m,Be.prototype.close=Be.prototype.close,Qu=function(){return new Ei},Ku=function(){return ui()},$u=Jt,So={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},hi.NO_ERROR=0,hi.TIMEOUT=8,hi.HTTP_ERROR=6,Li=hi,Ba.COMPLETE="complete",Wu=Ba,ci.EventType=mt,mt.OPEN="a",mt.CLOSE="b",mt.ERROR="c",mt.MESSAGE="d",we.prototype.listen=we.prototype.K,Ar=ci,Hu=mr,ue.prototype.listenOnce=ue.prototype.L,ue.prototype.getLastError=ue.prototype.Ka,ue.prototype.getLastErrorCode=ue.prototype.Ba,ue.prototype.getStatus=ue.prototype.Z,ue.prototype.getResponseJson=ue.prototype.Oa,ue.prototype.getResponseText=ue.prototype.oa,ue.prototype.send=ue.prototype.ea,ue.prototype.setWithCredentials=ue.prototype.Ha,qu=ue}).apply(typeof Ci<"u"?Ci:typeof self<"u"?self:typeof window<"u"?window:{});const ec="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ne.UNAUTHENTICATED=new Ne(null),Ne.GOOGLE_CREDENTIALS=new Ne("google-credentials-uid"),Ne.FIRST_PARTY=new Ne("first-party-uid"),Ne.MOCK_USER=new Ne("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qn="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const un=new zo("@firebase/firestore");function Tr(){return un.logLevel}function j(n,...e){if(un.logLevel<=ee.DEBUG){const t=e.map(Xo);un.debug(`Firestore (${Qn}): ${n}`,...t)}}function bt(n,...e){if(un.logLevel<=ee.ERROR){const t=e.map(Xo);un.error(`Firestore (${Qn}): ${n}`,...t)}}function Un(n,...e){if(un.logLevel<=ee.WARN){const t=e.map(Xo);un.warn(`Firestore (${Qn}): ${n}`,...t)}}function Xo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function K(n="Unexpected state"){const e=`FIRESTORE (${Qn}) INTERNAL ASSERTION FAILED: `+n;throw bt(e),new Error(e)}function se(n,e){n||K()}function Y(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends dt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class $_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ne.UNAUTHENTICATED))}shutdown(){}}class K_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Q_{constructor(e){this.t=e,this.currentUser=Ne.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let s=new It;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new It,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},l=c=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(c=>l(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new It)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(se(typeof r.accessToken=="string"),new Yu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return se(e===null||typeof e=="string"),new Ne(e)}}class Y_{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=Ne.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class X_{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new Y_(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Ne.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class J_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Z_{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,j("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(se(typeof t.token=="string"),this.R=t.token,new J_(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ey(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function re(n,e){return n<e?-1:n>e?1:0}function Bn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new q(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new q(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new q(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ye(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new ye(0,0))}static max(){return new Q(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e,t,r){t===void 0?t=0:t>e.length&&K(),r===void 0?r=e.length-t:r>e.length-t&&K(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Mr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Mr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class le extends Mr{construct(e,t,r){return new le(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new le(t)}static emptyPath(){return new le([])}}const ty=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class be extends Mr{construct(e,t,r){return new be(e,t,r)}static isValidIdentifier(e){return ty.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new be(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new q(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new q(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new be(t)}static emptyPath(){return new be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(le.fromString(e))}static fromName(e){return new W(le.fromString(e).popFirst(5))}static empty(){return new W(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new le(e.slice()))}}function ny(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Q.fromTimestamp(r===1e9?new ye(t+1,0):new ye(t,r));return new Kt(i,W.empty(),e)}function ry(n){return new Kt(n.readTime,n.key,-1)}class Kt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Kt(Q.min(),W.empty(),-1)}static max(){return new Kt(Q.max(),W.empty(),-1)}}function iy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=W.comparator(n.documentKey,e.documentKey),t!==0?t:re(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr(n){if(n.code!==x.FAILED_PRECONDITION||n.message!==sy)throw n;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof L?t:L.resolve(t)}catch(t){return L.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):L.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):L.reject(t)}static resolve(e){return new L((t,r)=>{t(e)})}static reject(e){return new L((t,r)=>{r(e)})}static waitFor(e){return new L((t,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},c=>r(c))}),a=!0,s===i&&t()})}static or(e){let t=L.resolve(!1);for(const r of e)t=t.next(i=>i?L.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new L((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let c=0;c<s;c++){const h=c;t(e[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,t){return new L((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function ay(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Qr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Jo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Jo.oe=-1;function ds(n){return n==null}function Yi(n){return n===0&&1/n==-1/0}function ly(n){return typeof n=="number"&&Number.isInteger(n)&&!Yi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Yn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ju(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e,t){this.comparator=e,this.root=t||Ae.EMPTY}insert(e,t){return new ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ki(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ki(this.root,e,this.comparator,!1)}getReverseIterator(){return new ki(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ki(this.root,e,this.comparator,!0)}}class ki{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ae.RED,this.left=i??Ae.EMPTY,this.right=s??Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ae(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ae.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ae(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.comparator=e,this.data=new ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nc(this.data.getIterator())}getIteratorFrom(e){return new nc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Pe(this.comparator);return t.data=e,t}}class nc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new Je([])}unionWith(e){let t=new Pe(be.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Je(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Bn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class Zu extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Zu("Invalid base64 string: "+s):s}}(e);return new Ce(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Ce(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ce.EMPTY_BYTE_STRING=new Ce("");const cy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qt(n){if(se(!!n),typeof n=="string"){let e=0;const t=cy.exec(n);if(se(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(n.seconds),nanos:me(n.nanos)}}function me(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function hn(n){return typeof n=="string"?Ce.fromBase64String(n):Ce.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ea(n){const e=n.mapValue.fields.__previous_value__;return Zo(e)?ea(e):e}function Fr(n){const e=Qt(n.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,t,r,i,s,a,l,c,h){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h}}class Ur{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ur("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ur&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function dn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zo(n)?4:hy(n)?9007199254740991:10:K()}function ut(n,e){if(n===e)return!0;const t=dn(n);if(t!==dn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Fr(n).isEqual(Fr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Qt(i.timestampValue),l=Qt(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return hn(i.bytesValue).isEqual(hn(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return me(i.geoPointValue.latitude)===me(s.geoPointValue.latitude)&&me(i.geoPointValue.longitude)===me(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return me(i.integerValue)===me(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=me(i.doubleValue),l=me(s.doubleValue);return a===l?Yi(a)===Yi(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Bn(n.arrayValue.values||[],e.arrayValue.values||[],ut);case 10:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(tc(a)!==tc(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!ut(a[c],l[c])))return!1;return!0}(n,e);default:return K()}}function Br(n,e){return(n.values||[]).find(t=>ut(t,e))!==void 0}function zn(n,e){if(n===e)return 0;const t=dn(n),r=dn(e);if(t!==r)return re(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return re(n.booleanValue,e.booleanValue);case 2:return function(s,a){const l=me(s.integerValue||s.doubleValue),c=me(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1}(n,e);case 3:return rc(n.timestampValue,e.timestampValue);case 4:return rc(Fr(n),Fr(e));case 5:return re(n.stringValue,e.stringValue);case 6:return function(s,a){const l=hn(s),c=hn(a);return l.compareTo(c)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const f=re(l[h],c[h]);if(f!==0)return f}return re(l.length,c.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const l=re(me(s.latitude),me(a.latitude));return l!==0?l:re(me(s.longitude),me(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,a){const l=s.values||[],c=a.values||[];for(let h=0;h<l.length&&h<c.length;++h){const f=zn(l[h],c[h]);if(f)return f}return re(l.length,c.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,a){if(s===Oi.mapValue&&a===Oi.mapValue)return 0;if(s===Oi.mapValue)return 1;if(a===Oi.mapValue)return-1;const l=s.fields||{},c=Object.keys(l),h=a.fields||{},f=Object.keys(h);c.sort(),f.sort();for(let m=0;m<c.length&&m<f.length;++m){const v=re(c[m],f[m]);if(v!==0)return v;const T=zn(l[c[m]],h[f[m]]);if(T!==0)return T}return re(c.length,f.length)}(n.mapValue,e.mapValue);default:throw K()}}function rc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return re(n,e);const t=Qt(n),r=Qt(e),i=re(t.seconds,r.seconds);return i!==0?i:re(t.nanos,r.nanos)}function jn(n){return Ao(n)}function Ao(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Qt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return hn(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return W.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=Ao(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${Ao(t.fields[a])}`;return i+"}"}(n.mapValue):K()}function bo(n){return!!n&&"integerValue"in n}function ta(n){return!!n&&"arrayValue"in n}function ic(n){return!!n&&"nullValue"in n}function sc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Vi(n){return!!n&&"mapValue"in n}function kr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Yn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=kr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=kr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function hy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.value=e}static empty(){return new Ke({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Vi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=kr(t)}setAll(e){let t=be.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=kr(a):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Vi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ut(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Vi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Yn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ke(kr(this.value))}}function eh(n){const e=[];return Yn(n.fields,(t,r)=>{const i=new be([t]);if(Vi(r)){const s=eh(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new Je(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new xe(e,0,Q.min(),Q.min(),Q.min(),Ke.empty(),0)}static newFoundDocument(e,t,r,i){return new xe(e,1,t,Q.min(),r,i,0)}static newNoDocument(e,t){return new xe(e,2,t,Q.min(),Q.min(),Ke.empty(),0)}static newUnknownDocument(e,t){return new xe(e,3,t,Q.min(),Q.min(),Ke.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Q.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ke.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ke.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Q.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof xe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new xe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Xi{constructor(e,t){this.position=e,this.inclusive=t}}function oc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=W.comparator(W.fromName(a.referenceValue),t.key):r=zn(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function ac(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!ut(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class Ji{constructor(e,t="asc"){this.field=e,this.dir=t}}function dy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class th{}class _e extends th{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new py(e,t,r):t==="array-contains"?new _y(e,r):t==="in"?new yy(e,r):t==="not-in"?new vy(e,r):t==="array-contains-any"?new wy(e,r):new _e(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new my(e,r):new gy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(zn(t,this.value)):t!==null&&dn(this.value)===dn(t)&&this.matchesComparison(zn(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ht extends th{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ht(e,t)}matches(e){return nh(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function nh(n){return n.op==="and"}function rh(n){return fy(n)&&nh(n)}function fy(n){for(const e of n.filters)if(e instanceof ht)return!1;return!0}function Po(n){if(n instanceof _e)return n.field.canonicalString()+n.op.toString()+jn(n.value);if(rh(n))return n.filters.map(e=>Po(e)).join(",");{const e=n.filters.map(t=>Po(t)).join(",");return`${n.op}(${e})`}}function ih(n,e){return n instanceof _e?function(r,i){return i instanceof _e&&r.op===i.op&&r.field.isEqual(i.field)&&ut(r.value,i.value)}(n,e):n instanceof ht?function(r,i){return i instanceof ht&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&ih(a,i.filters[l]),!0):!1}(n,e):void K()}function sh(n){return n instanceof _e?function(t){return`${t.field.canonicalString()} ${t.op} ${jn(t.value)}`}(n):n instanceof ht?function(t){return t.op.toString()+" {"+t.getFilters().map(sh).join(" ,")+"}"}(n):"Filter"}class py extends _e{constructor(e,t,r){super(e,t,r),this.key=W.fromName(r.referenceValue)}matches(e){const t=W.comparator(e.key,this.key);return this.matchesComparison(t)}}class my extends _e{constructor(e,t){super(e,"in",t),this.keys=oh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class gy extends _e{constructor(e,t){super(e,"not-in",t),this.keys=oh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function oh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>W.fromName(r.referenceValue))}class _y extends _e{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ta(t)&&Br(t.arrayValue,this.value)}}class yy extends _e{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Br(this.value.arrayValue,t)}}class vy extends _e{constructor(e,t){super(e,"not-in",t)}matches(e){if(Br(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Br(this.value.arrayValue,t)}}class wy extends _e{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ta(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Br(this.value.arrayValue,r))}}/**
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
 */class Ty{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function lc(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Ty(n,e,t,r,i,s,a)}function na(n){const e=Y(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>Po(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ds(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>jn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>jn(r)).join(",")),e.ue=t}return e.ue}function ra(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!dy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!ih(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ac(n.startAt,e.startAt)&&ac(n.endAt,e.endAt)}function Ro(n){return W.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=c,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Ey(n,e,t,r,i,s,a,l){return new fs(n,e,t,r,i,s,a,l)}function ia(n){return new fs(n)}function cc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Iy(n){return n.collectionGroup!==null}function Or(n){const e=Y(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Pe(be.comparator);return a.filters.forEach(c=>{c.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Ji(s,r))}),t.has(be.keyField().canonicalString())||e.ce.push(new Ji(be.keyField(),r))}return e.ce}function ot(n){const e=Y(n);return e.le||(e.le=Sy(e,Or(n))),e.le}function Sy(n,e){if(n.limitType==="F")return lc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Ji(i.field,s)});const t=n.endAt?new Xi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Xi(n.startAt.position,n.startAt.inclusive):null;return lc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Co(n,e,t){return new fs(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ps(n,e){return ra(ot(n),ot(e))&&n.limitType===e.limitType}function ah(n){return`${na(ot(n))}|lt:${n.limitType}`}function On(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>sh(i)).join(", ")}]`),ds(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>jn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>jn(i)).join(",")),`Target(${r})`}(ot(n))}; limitType=${n.limitType})`}function ms(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):W.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of Or(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,c){const h=oc(a,l,c);return a.inclusive?h<=0:h<0}(r.startAt,Or(r),i)||r.endAt&&!function(a,l,c){const h=oc(a,l,c);return a.inclusive?h>=0:h>0}(r.endAt,Or(r),i))}(n,e)}function Ay(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function lh(n){return(e,t)=>{let r=!1;for(const i of Or(n)){const s=by(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function by(n,e,t){const r=n.field.isKeyField()?W.comparator(e.key,t.key):function(s,a,l){const c=a.data.field(s),h=l.data.field(s);return c!==null&&h!==null?zn(c,h):K()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Ju(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py=new ce(W.comparator);function Pt(){return Py}const ch=new ce(W.comparator);function br(...n){let e=ch;for(const t of n)e=e.insert(t.key,t);return e}function uh(n){let e=ch;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function rn(){return Dr()}function hh(){return Dr()}function Dr(){return new Xn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Ry=new ce(W.comparator),Cy=new Pe(W.comparator);function Z(...n){let e=Cy;for(const t of n)e=e.add(t);return e}const ky=new Pe(re);function Oy(){return ky}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Yi(e)?"-0":e}}function fh(n){return{integerValue:""+n}}function Dy(n,e){return ly(e)?fh(e):dh(n,e)}/**
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
 */class gs{constructor(){this._=void 0}}function Ny(n,e,t){return n instanceof Zi?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Zo(s)&&(s=ea(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof zr?mh(n,e):n instanceof jr?gh(n,e):function(i,s){const a=ph(i,s),l=uc(a)+uc(i.Pe);return bo(a)&&bo(i.Pe)?fh(l):dh(i.serializer,l)}(n,e)}function xy(n,e,t){return n instanceof zr?mh(n,e):n instanceof jr?gh(n,e):t}function ph(n,e){return n instanceof es?function(r){return bo(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Zi extends gs{}class zr extends gs{constructor(e){super(),this.elements=e}}function mh(n,e){const t=_h(e);for(const r of n.elements)t.some(i=>ut(i,r))||t.push(r);return{arrayValue:{values:t}}}class jr extends gs{constructor(e){super(),this.elements=e}}function gh(n,e){let t=_h(e);for(const r of n.elements)t=t.filter(i=>!ut(i,r));return{arrayValue:{values:t}}}class es extends gs{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function uc(n){return me(n.integerValue||n.doubleValue)}function _h(n){return ta(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Ly(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof zr&&i instanceof zr||r instanceof jr&&i instanceof jr?Bn(r.elements,i.elements,ut):r instanceof es&&i instanceof es?ut(r.Pe,i.Pe):r instanceof Zi&&i instanceof Zi}(n.transform,e.transform)}class Vy{constructor(e,t){this.version=e,this.transformResults=t}}class St{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new St}static exists(e){return new St(void 0,e)}static updateTime(e){return new St(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Mi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class _s{}function yh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new wh(n.key,St.none()):new Yr(n.key,n.data,St.none());{const t=n.data,r=Ke.empty();let i=new Pe(be.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new _n(n.key,r,new Je(i.toArray()),St.none())}}function My(n,e,t){n instanceof Yr?function(i,s,a){const l=i.value.clone(),c=dc(i.fieldTransforms,s,a.transformResults);l.setAll(c),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof _n?function(i,s,a){if(!Mi(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=dc(i.fieldTransforms,s,a.transformResults),c=s.data;c.setAll(vh(i)),c.setAll(l),s.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Nr(n,e,t,r){return n instanceof Yr?function(s,a,l,c){if(!Mi(s.precondition,a))return l;const h=s.value.clone(),f=fc(s.fieldTransforms,c,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(n,e,t,r):n instanceof _n?function(s,a,l,c){if(!Mi(s.precondition,a))return l;const h=fc(s.fieldTransforms,c,a),f=a.data;return f.setAll(vh(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(n,e,t,r):function(s,a,l){return Mi(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Fy(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=ph(r.transform,i||null);s!=null&&(t===null&&(t=Ke.empty()),t.set(r.field,s))}return t||null}function hc(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Bn(r,i,(s,a)=>Ly(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Yr extends _s{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class _n extends _s{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function vh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function dc(n,e,t){const r=new Map;se(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,xy(a,l,t[i]))}return r}function fc(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,Ny(s,a,e))}return r}class wh extends _s{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Uy extends _s{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&My(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Nr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Nr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=hh();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const c=yh(a,l);c!==null&&r.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(Q.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Z())}isEqual(e){return this.batchId===e.batchId&&Bn(this.mutations,e.mutations,(t,r)=>hc(t,r))&&Bn(this.baseMutations,e.baseMutations,(t,r)=>hc(t,r))}}class sa{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){se(e.mutations.length===r.length);let i=function(){return Ry}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new sa(e,t,r,i)}}/**
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
 */class zy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class jy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,te;function Gy(n){switch(n){default:return K();case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0}}function Th(n){if(n===void 0)return bt("GRPC error has no .code"),x.UNKNOWN;switch(n){case pe.OK:return x.OK;case pe.CANCELLED:return x.CANCELLED;case pe.UNKNOWN:return x.UNKNOWN;case pe.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case pe.INTERNAL:return x.INTERNAL;case pe.UNAVAILABLE:return x.UNAVAILABLE;case pe.UNAUTHENTICATED:return x.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case pe.NOT_FOUND:return x.NOT_FOUND;case pe.ALREADY_EXISTS:return x.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return x.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case pe.ABORTED:return x.ABORTED;case pe.OUT_OF_RANGE:return x.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return x.UNIMPLEMENTED;case pe.DATA_LOSS:return x.DATA_LOSS;default:return K()}}(te=pe||(pe={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function qy(){return new TextEncoder}/**
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
 */const Hy=new on([4294967295,4294967295],0);function pc(n){const e=qy().encode(n),t=new Gu;return t.update(e),new Uint8Array(t.digest())}function mc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new on([t,r],0),new on([i,s],0)]}class oa{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Pr(`Invalid padding: ${t}`);if(r<0)throw new Pr(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Pr(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Pr(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=on.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(on.fromNumber(r)));return i.compare(Hy)===1&&(i=new on([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=pc(e),[r,i]=mc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new oa(s,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=pc(e),[r,i]=mc(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Pr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Xr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ys(Q.min(),i,new ce(re),Pt(),Z())}}class Xr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Xr(r,t,Z(),Z(),Z())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class Eh{constructor(e,t){this.targetId=e,this.me=t}}class Ih{constructor(e,t,r=Ce.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class gc{constructor(){this.fe=0,this.ge=yc(),this.pe=Ce.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Z(),t=Z(),r=Z();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:K()}}),new Xr(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=yc()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,se(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Wy{constructor(e){this.Le=e,this.Be=new Map,this.ke=Pt(),this.qe=_c(),this.Qe=new ce(re)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:K()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(Ro(s))if(r===0){const a=new W(s.path);this.Ue(t,a,xe.newNoDocument(a,Q.min()))}else se(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),c=l?this.Xe(l,e,a):1;if(c!==0){this.je(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,h)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=hn(r).toUint8Array()}catch(c){if(c instanceof Zu)return Un("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new oa(a,i,s)}catch(c){return Un(c instanceof Pr?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&Ro(l.target)){const c=new W(l.target.path);this.ke.get(c)!==null||this.it(a,c)||this.Ue(a,c,xe.newNoDocument(c,e))}s.be&&(t.set(a,s.Ce()),s.ve())}});let r=Z();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(c=>{const h=this.Je(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new ys(e,t,this.Qe,this.ke,r);return this.ke=Pt(),this.qe=_c(),this.Qe=new ce(re),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new gc,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Pe(re),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||j("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new gc),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function _c(){return new ce(W.comparator)}function yc(){return new ce(W.comparator)}const $y={asc:"ASCENDING",desc:"DESCENDING"},Ky={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Qy={and:"AND",or:"OR"};class Yy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function ko(n,e){return n.useProto3Json||ds(e)?e:{value:e}}function ts(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Sh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Xy(n,e){return ts(n,e.toTimestamp())}function at(n){return se(!!n),Q.fromTimestamp(function(t){const r=Qt(t);return new ye(r.seconds,r.nanos)}(n))}function aa(n,e){return Oo(n,e).canonicalString()}function Oo(n,e){const t=function(i){return new le(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Ah(n){const e=le.fromString(n);return se(kh(e)),e}function Do(n,e){return aa(n.databaseId,e.path)}function co(n,e){const t=Ah(e);if(t.get(1)!==n.databaseId.projectId)throw new q(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new q(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new W(Ph(t))}function bh(n,e){return aa(n.databaseId,e)}function Jy(n){const e=Ah(n);return e.length===4?le.emptyPath():Ph(e)}function No(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ph(n){return se(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function vc(n,e,t){return{name:Do(n,e),fields:t.value.mapValue.fields}}function Zy(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(se(f===void 0||typeof f=="string"),Ce.fromBase64String(f||"")):(se(f===void 0||f instanceof Buffer||f instanceof Uint8Array),Ce.fromUint8Array(f||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(h){const f=h.code===void 0?x.UNKNOWN:Th(h.code);return new q(f,h.message||"")}(a);t=new Ih(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=co(n,r.document.name),s=at(r.document.updateTime),a=r.document.createTime?at(r.document.createTime):Q.min(),l=new Ke({mapValue:{fields:r.document.fields}}),c=xe.newFoundDocument(i,s,a,l),h=r.targetIds||[],f=r.removedTargetIds||[];t=new Fi(h,f,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=co(n,r.document),s=r.readTime?at(r.readTime):Q.min(),a=xe.newNoDocument(i,s),l=r.removedTargetIds||[];t=new Fi([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=co(n,r.document),s=r.removedTargetIds||[];t=new Fi([],s,i,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new jy(i,s),l=r.targetId;t=new Eh(l,a)}}return t}function ev(n,e){let t;if(e instanceof Yr)t={update:vc(n,e.key,e.value)};else if(e instanceof wh)t={delete:Do(n,e.key)};else if(e instanceof _n)t={update:vc(n,e.key,e.data),updateMask:cv(e.fieldMask)};else{if(!(e instanceof Uy))return K();t={verify:Do(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof Zi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof zr)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof jr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof es)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw K()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Xy(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:K()}(n,e.precondition)),t}function tv(n,e){return n&&n.length>0?(se(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?at(i.updateTime):at(s);return a.isEqual(Q.min())&&(a=at(s)),new Vy(a,i.transformResults||[])}(t,e))):[]}function nv(n,e){return{documents:[bh(n,e.path)]}}function rv(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=bh(n,i);const s=function(h){if(h.length!==0)return Ch(ht.create(h,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(h){if(h.length!==0)return h.map(f=>function(v){return{field:Dn(v.field),direction:ov(v.dir)}}(f))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=ko(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:t,parent:i}}function iv(n){let e=Jy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){se(r===1);const f=t.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];t.where&&(s=function(m){const v=Rh(m);return v instanceof ht&&rh(v)?v.getFilters():[v]}(t.where));let a=[];t.orderBy&&(a=function(m){return m.map(v=>function(A){return new Ji(Nn(A.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(A.direction))}(v))}(t.orderBy));let l=null;t.limit&&(l=function(m){let v;return v=typeof m=="object"?m.value:m,ds(v)?null:v}(t.limit));let c=null;t.startAt&&(c=function(m){const v=!!m.before,T=m.values||[];return new Xi(T,v)}(t.startAt));let h=null;return t.endAt&&(h=function(m){const v=!m.before,T=m.values||[];return new Xi(T,v)}(t.endAt)),Ey(e,i,a,s,l,"F",c,h)}function sv(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Rh(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Nn(t.unaryFilter.field);return _e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Nn(t.unaryFilter.field);return _e.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Nn(t.unaryFilter.field);return _e.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Nn(t.unaryFilter.field);return _e.create(a,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(n):n.fieldFilter!==void 0?function(t){return _e.create(Nn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ht.create(t.compositeFilter.filters.map(r=>Rh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return K()}}(t.compositeFilter.op))}(n):K()}function ov(n){return $y[n]}function av(n){return Ky[n]}function lv(n){return Qy[n]}function Dn(n){return{fieldPath:n.canonicalString()}}function Nn(n){return be.fromServerFormat(n.fieldPath)}function Ch(n){return n instanceof _e?function(t){if(t.op==="=="){if(sc(t.value))return{unaryFilter:{field:Dn(t.field),op:"IS_NAN"}};if(ic(t.value))return{unaryFilter:{field:Dn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(sc(t.value))return{unaryFilter:{field:Dn(t.field),op:"IS_NOT_NAN"}};if(ic(t.value))return{unaryFilter:{field:Dn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Dn(t.field),op:av(t.op),value:t.value}}}(n):n instanceof ht?function(t){const r=t.getFilters().map(i=>Ch(i));return r.length===1?r[0]:{compositeFilter:{op:lv(t.op),filters:r}}}(n):K()}function cv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function kh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t,r,i,s=Q.min(),a=Q.min(),l=Ce.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Gt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Gt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(e){this.ct=e}}function hv(n){const e=iv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Co(e,e.limit,"L"):e}/**
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
 */class dv{constructor(){this.an=new fv}addToCollectionParentIndex(e,t){return this.an.add(t),L.resolve()}getCollectionParents(e,t){return L.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return L.resolve()}deleteFieldIndex(e,t){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,t){return L.resolve()}getDocumentsMatchingTarget(e,t){return L.resolve(null)}getIndexType(e,t){return L.resolve(0)}getFieldIndexes(e,t){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,t){return L.resolve(Kt.min())}getMinOffsetFromCollectionGroup(e,t){return L.resolve(Kt.min())}updateCollectionGroup(e,t,r){return L.resolve()}updateIndexEntries(e,t){return L.resolve()}}class fv{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Pe(le.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Pe(le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new Gn(0)}static Bn(){return new Gn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(){this.changes=new Xn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,xe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?L.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class mv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Nr(r.mutation,i,Je.empty(),ye.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Z()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Z()){const i=rn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=br();return s.forEach((l,c)=>{a=a.insert(l,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=rn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Z()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let s=Pt();const a=Dr(),l=function(){return Dr()}();return t.forEach((c,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof _n)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Nr(f.mutation,h,f.mutation.getFieldMask(),ye.now())):a.set(h.key,Je.empty())}),this.recalculateAndSaveOverlays(e,s).next(c=>(c.forEach((h,f)=>a.set(h,f)),t.forEach((h,f)=>{var m;return l.set(h,new mv(f,(m=a.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Dr();let i=new ce((a,l)=>a-l),s=Z();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(c=>{const h=t.get(c);if(h===null)return;let f=r.get(c)||Je.empty();f=l.applyToLocalView(h,f),r.set(c,f);const m=(i.get(l.batchId)||Z()).add(c);i=i.insert(l.batchId,m)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,f=c.value,m=hh();f.forEach(v=>{if(!s.has(v)){const T=yh(t.get(v),r.get(v));T!==null&&m.set(v,T),s=s.add(v)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return L.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return W.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Iy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):L.resolve(rn());let l=-1,c=s;return a.next(h=>L.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(v=>{c=c.insert(f,v)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,c,h,Z())).next(f=>({batchId:l,changes:uh(f)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new W(t)).next(r=>{let i=br();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=br();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,c=>{const h=function(m,v){return new fs(v,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(t,c.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,v)=>{a=a.insert(m,v)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((c,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,xe.newInvalidDocument(f)))});let l=br();return a.forEach((c,h)=>{const f=s.get(c);f!==void 0&&Nr(f.mutation,h,Je.empty(),ye.now()),ms(t,h)&&(l=l.insert(c,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return L.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:at(i.createTime)}}(t)),L.resolve()}getNamedQuery(e,t){return L.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,function(i){return{name:i.name,query:hv(i.bundledQuery),readTime:at(i.readTime)}}(t)),L.resolve()}}/**
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
 */class yv{constructor(){this.overlays=new ce(W.comparator),this.Pr=new Map}getOverlay(e,t){return L.resolve(this.overlays.get(t))}getOverlays(e,t){const r=rn();return L.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),L.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),L.resolve()}getOverlaysForCollection(e,t,r){const i=rn(),s=t.length+1,a=new W(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===s&&c.largestBatchId>r&&i.set(c.getKey(),c)}return L.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ce((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=rn(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=rn(),c=s.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new zy(t,r));let s=this.Pr.get(t);s===void 0&&(s=Z(),this.Pr.set(t,s)),this.Pr.set(t,s.add(r.key))}}/**
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
 */class vv{constructor(){this.sessionToken=Ce.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(){this.Ir=new Pe(Te.Tr),this.Er=new Pe(Te.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){const r=new Te(e,t);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Rr(new Te(e,t))}Vr(e,t){e.forEach(r=>this.removeReference(r,t))}mr(e){const t=new W(new le([])),r=new Te(t,e),i=new Te(t,e+1),s=[];return this.Er.forEachInRange([r,i],a=>{this.Rr(a),s.push(a.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const t=new W(new le([])),r=new Te(t,e),i=new Te(t,e+1);let s=Z();return this.Er.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new Te(e,0),r=this.Ir.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Te{constructor(e,t){this.key=e,this.yr=t}static Tr(e,t){return W.comparator(e.key,t.key)||re(e.yr,t.yr)}static dr(e,t){return re(e.yr,t.yr)||W.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new Pe(Te.Tr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new By(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.Sr=this.Sr.add(new Te(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(a)}lookupMutationBatch(e,t){return L.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Dr(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Te(t,0),i=new Te(t,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],a=>{const l=this.br(a.yr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Pe(re);return t.forEach(i=>{const s=new Te(i,0),a=new Te(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,a],l=>{r=r.add(l.yr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;W.isDocumentKey(s)||(s=s.child(""));const a=new Te(new W(s),0);let l=new Pe(re);return this.Sr.forEachWhile(c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(c.yr)),!0)},a),L.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.br(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){se(this.vr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return L.forEach(t.mutations,i=>{const s=new Te(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,t){const r=new Te(t,0),i=this.Sr.firstAfterOrEqual(r);return L.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(e){this.Fr=e,this.docs=function(){return new ce(W.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Fr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return L.resolve(r?r.document.mutableCopy():xe.newInvalidDocument(t))}getEntries(e,t){let r=Pt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():xe.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=Pt();const a=t.path,l=new W(a.child("")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:f}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||iy(ry(f),r)<=0||(i.has(f.key)||ms(t,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,t,r,i){K()}Mr(e,t){return L.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Ev(this)}getSize(e){return L.resolve(this.size)}}class Ev extends pv{constructor(e){super(),this.ur=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),L.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e){this.persistence=e,this.Or=new Xn(t=>na(t),ra),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new la,this.targetCount=0,this.Br=Gn.Ln()}forEachTarget(e,t){return this.Or.forEach((r,i)=>t(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Nr&&(this.Nr=t),L.resolve()}Qn(e){this.Or.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Br=new Gn(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,L.resolve()}updateTargetData(e,t){return this.Qn(t),L.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Lr.mr(t.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Or.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Or.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,t){const r=this.Or.get(t)||null;return L.resolve(r)}addMatchingKeys(e,t,r){return this.Lr.Ar(t,r),L.resolve()}removeMatchingKeys(e,t,r){this.Lr.Vr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Lr.mr(t),L.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Lr.pr(t);return L.resolve(r)}containsKey(e,t){return L.resolve(this.Lr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,t){this.kr={},this.overlays={},this.qr=new Jo(0),this.Qr=!1,this.Qr=!0,this.Kr=new vv,this.referenceDelegate=e(this),this.$r=new Iv(this),this.indexManager=new dv,this.remoteDocumentCache=function(i){return new Tv(i)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new uv(t),this.Wr=new _v(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new yv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.kr[e.toKey()];return r||(r=new wv(t,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,t,r){j("MemoryPersistence","Starting transaction:",e);const i=new Av(this.qr.next());return this.referenceDelegate.Gr(),r(i).next(s=>this.referenceDelegate.zr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}jr(e,t){return L.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,t)))}}class Av extends oy{constructor(e){super(),this.currentSequenceNumber=e}}class ca{constructor(e){this.persistence=e,this.Hr=new la,this.Jr=null}static Yr(e){return new ca(e)}get Zr(){if(this.Jr)return this.Jr;throw K()}addReference(e,t,r){return this.Hr.addReference(r,t),this.Zr.delete(r.toString()),L.resolve()}removeReference(e,t,r){return this.Hr.removeReference(r,t),this.Zr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,t){return this.Zr.add(t.toString()),L.resolve()}removeTarget(e,t){this.Hr.mr(t.targetId).forEach(i=>this.Zr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Zr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Gr(){this.Jr=new Set}zr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Zr,r=>{const i=W.fromPath(r);return this.Xr(e,i).next(s=>{s||t.removeEntry(i,Q.min())})}).next(()=>(this.Jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Xr(e,t).next(r=>{r?this.Zr.delete(t.toString()):this.Zr.add(t.toString())})}Ur(e){return 0}Xr(e,t){return L.or([()=>L.resolve(this.Hr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.jr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Ki=r,this.$i=i}static Ui(e,t){let r=Z(),i=Z();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ua(e,t.fromCache,r,i)}}/**
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
 */class bv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Pv{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return qf()?8:ay(Re())>0?6:4}()}initialize(e,t){this.Hi=e,this.indexManager=t,this.Wi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Ji(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Yi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new bv;return this.Zi(e,t,a).next(l=>{if(s.result=l,this.Gi)return this.Xi(e,t,a,l.size)})}).next(()=>s.result)}Xi(e,t,r,i){return r.documentReadCount<this.zi?(Tr()<=ee.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",On(t),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),L.resolve()):(Tr()<=ee.DEBUG&&j("QueryEngine","Query:",On(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ji*i?(Tr()<=ee.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",On(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ot(t))):L.resolve())}Ji(e,t){if(cc(t))return L.resolve(null);let r=ot(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Co(t,null,"F"),r=ot(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=Z(...s);return this.Hi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(c=>{const h=this.es(t,l);return this.ts(t,h,a,c.readTime)?this.Ji(e,Co(t,null,"F")):this.ns(e,h,t,c)}))})))}Yi(e,t,r,i){return cc(t)||i.isEqual(Q.min())?L.resolve(null):this.Hi.getDocuments(e,r).next(s=>{const a=this.es(t,s);return this.ts(t,a,r,i)?L.resolve(null):(Tr()<=ee.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),On(t)),this.ns(e,a,t,ny(i,-1)).next(l=>l))})}es(e,t){let r=new Pe(lh(e));return t.forEach((i,s)=>{ms(e,s)&&(r=r.add(s))}),r}ts(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zi(e,t,r){return Tr()<=ee.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",On(t)),this.Hi.getDocumentsMatchingQuery(e,t,Kt.min(),r)}ns(e,t,r,i){return this.Hi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rv{constructor(e,t,r,i){this.persistence=e,this.rs=t,this.serializer=i,this.ss=new ce(re),this.os=new Xn(s=>na(s),ra),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new gv(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ss))}}function Cv(n,e,t,r){return new Rv(n,e,t,r)}async function Oh(n,e){const t=Y(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.cs(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let c=Z();for(const h of i){a.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)c=c.add(f.key)}return t.localDocuments.getDocuments(r,c).next(h=>({ls:h,removedBatchIds:a,addedBatchIds:l}))})})}function kv(n,e){const t=Y(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.us.newChangeBuffer({trackRemovals:!0});return function(l,c,h,f){const m=h.batch,v=m.keys();let T=L.resolve();return v.forEach(A=>{T=T.next(()=>f.getEntry(c,A)).next(P=>{const C=h.docVersions.get(A);se(C!==null),P.version.compareTo(C)<0&&(m.applyToRemoteDocument(P,h),P.isValidDocument()&&(P.setReadTime(h.commitVersion),f.addEntry(P)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(c,m))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let c=Z();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Dh(n){const e=Y(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.$r.getLastRemoteSnapshotVersion(t))}function Ov(n,e){const t=Y(n),r=e.snapshotVersion;let i=t.ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.us.newChangeBuffer({trackRemovals:!0});i=t.ss;const l=[];e.targetChanges.forEach((f,m)=>{const v=i.get(m);if(!v)return;l.push(t.$r.removeMatchingKeys(s,f.removedDocuments,m).next(()=>t.$r.addMatchingKeys(s,f.addedDocuments,m)));let T=v.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(m)!==null?T=T.withResumeToken(Ce.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):f.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(f.resumeToken,r)),i=i.insert(m,T),function(P,C,O){return P.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(v,T,f)&&l.push(t.$r.updateTargetData(s,T))});let c=Pt(),h=Z();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(Dv(s,a,e.documentUpdates).next(f=>{c=f.hs,h=f.Ps})),!r.isEqual(Q.min())){const f=t.$r.getLastRemoteSnapshotVersion(s).next(m=>t.$r.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,c,h)).next(()=>c)}).then(s=>(t.ss=i,s))}function Dv(n,e,t){let r=Z(),i=Z();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=Pt();return t.forEach((l,c)=>{const h=s.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),c.isNoDocument()&&c.version.isEqual(Q.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):j("LocalStore","Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)}),{hs:a,Ps:i}})}function Nv(n,e){const t=Y(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function xv(n,e){const t=Y(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.$r.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):t.$r.allocateTargetId(r).next(a=>(i=new Gt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.$r.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ss=t.ss.insert(r.targetId,r),t.os.set(e,r.targetId)),r})}async function xo(n,e,t){const r=Y(n),i=r.ss.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!Qr(a))throw a;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ss=r.ss.remove(e),r.os.delete(i.target)}function wc(n,e,t){const r=Y(n);let i=Q.min(),s=Z();return r.persistence.runTransaction("Execute query","readwrite",a=>function(c,h,f){const m=Y(c),v=m.os.get(f);return v!==void 0?L.resolve(m.ss.get(v)):m.$r.getTargetData(h,f)}(r,a,ot(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(a,l.targetId).next(c=>{s=c})}).next(()=>r.rs.getDocumentsMatchingQuery(a,e,t?i:Q.min(),t?s:Z())).next(l=>(Lv(r,Ay(e),l),{documents:l,Is:s})))}function Lv(n,e,t){let r=n._s.get(e)||Q.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n._s.set(e,r)}class Tc{constructor(){this.activeTargetIds=Oy()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Vv{constructor(){this.io=new Tc,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,t,r){this.so[e]=t}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new Tc,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Mv{oo(e){}shutdown(){}}/**
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
 */class Ec{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Di=null;function uo(){return Di===null?Di=function(){return 268435456+Math.round(2147483648*Math.random())}():Di++,"0x"+Di.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="WebChannelConnection";class Bv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+t.host,this.Do=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get vo(){return!1}Fo(t,r,i,s,a){const l=uo(),c=this.Mo(t,r.toUriEncodedString());j("RestConnection",`Sending RPC '${t}' ${l}:`,c,i);const h={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(h,s,a),this.Oo(t,c,h,i).then(f=>(j("RestConnection",`Received RPC '${t}' ${l}: `,f),f),f=>{throw Un("RestConnection",`RPC '${t}' ${l} failed with error: `,f,"url: ",c,"request:",i),f})}No(t,r,i,s,a,l){return this.Fo(t,r,i,s,a)}xo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}Mo(t,r){const i=Fv[t];return`${this.bo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,t,r,i){const s=uo();return new Promise((a,l)=>{const c=new qu;c.setWithCredentials(!0),c.listenOnce(Wu.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Li.NO_ERROR:const f=c.getResponseJson();j(De,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case Li.TIMEOUT:j(De,`RPC '${e}' ${s} timed out`),l(new q(x.DEADLINE_EXCEEDED,"Request time out"));break;case Li.HTTP_ERROR:const m=c.getStatus();if(j(De,`RPC '${e}' ${s} failed with status:`,m,"response text:",c.getResponseText()),m>0){let v=c.getResponseJson();Array.isArray(v)&&(v=v[0]);const T=v==null?void 0:v.error;if(T&&T.status&&T.message){const A=function(C){const O=C.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(O)>=0?O:x.UNKNOWN}(T.status);l(new q(A,T.message))}else l(new q(x.UNKNOWN,"Server responded with status "+c.getStatus()))}else l(new q(x.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{j(De,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);j(De,`RPC '${e}' ${s} sending request:`,i),c.send(t,"POST",h,r,15)})}Lo(e,t,r){const i=uo(),s=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Qu(),l=Ku(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.xmlHttpFactory=new Hu({})),this.xo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const f=s.join("");j(De,`Creating RPC '${e}' stream ${i}: ${f}`,c);const m=a.createWebChannel(f,c);let v=!1,T=!1;const A=new Uv({Po:C=>{T?j(De,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(v||(j(De,`Opening RPC '${e}' stream ${i} transport.`),m.open(),v=!0),j(De,`RPC '${e}' stream ${i} sending:`,C),m.send(C))},Io:()=>m.close()}),P=(C,O,N)=>{C.listen(O,D=>{try{N(D)}catch(V){setTimeout(()=>{throw V},0)}})};return P(m,Ar.EventType.OPEN,()=>{T||(j(De,`RPC '${e}' stream ${i} transport opened.`),A.po())}),P(m,Ar.EventType.CLOSE,()=>{T||(T=!0,j(De,`RPC '${e}' stream ${i} transport closed`),A.wo())}),P(m,Ar.EventType.ERROR,C=>{T||(T=!0,Un(De,`RPC '${e}' stream ${i} transport errored:`,C),A.wo(new q(x.UNAVAILABLE,"The operation could not be completed")))}),P(m,Ar.EventType.MESSAGE,C=>{var O;if(!T){const N=C.data[0];se(!!N);const D=N,V=D.error||((O=D[0])===null||O===void 0?void 0:O.error);if(V){j(De,`RPC '${e}' stream ${i} received error:`,V);const U=V.status;let H=function(g){const w=pe[g];if(w!==void 0)return Th(w)}(U),b=V.message;H===void 0&&(H=x.INTERNAL,b="Unknown error status: "+U+" with message "+V.message),T=!0,A.wo(new q(H,b)),m.close()}else j(De,`RPC '${e}' stream ${i} received:`,N),A.So(N)}}),P(l,$u.STAT_EVENT,C=>{C.stat===So.PROXY?j(De,`RPC '${e}' stream ${i} detected buffering proxy`):C.stat===So.NOPROXY&&j(De,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{A.yo()},0),A}}function ho(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(n){return new Yy(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ai=e,this.timerId=t,this.Bo=r,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const t=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,t-r);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,t,r,i,s,a,l,c){this.ai=e,this.jo=r,this.Ho=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new Nh(e,t)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,t){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():t&&t.code===x.RESOURCE_EXHAUSTED?(bt(t.toString()),bt("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):t&&t.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(t)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),t=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Jo===t&&this.h_(r,i)},r=>{e(()=>{const i=new q(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(i)})})}h_(e,t){const r=this.l_(this.Jo);this.stream=this.I_(e,t),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{r(()=>this.P_(i))}),this.stream.onMessage(i=>{r(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return t=>{this.ai.enqueueAndForget(()=>this.Jo===e?t():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class zv extends xh{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}I_(e,t){return this.connection.Lo("Listen",e,t)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const t=Zy(this.serializer,e),r=function(s){if(!("targetChange"in s))return Q.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?Q.min():a.readTime?at(a.readTime):Q.min()}(e);return this.listener.E_(t,r)}d_(e){const t={};t.database=No(this.serializer),t.addTarget=function(s,a){let l;const c=a.target;if(l=Ro(c)?{documents:nv(s,c)}:{query:rv(s,c)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Sh(s,a.resumeToken);const h=ko(s,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(Q.min())>0){l.readTime=ts(s,a.snapshotVersion.toTimestamp());const h=ko(s,a.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=sv(this.serializer,e);r&&(t.labels=r),this.__(t)}A_(e){const t={};t.database=No(this.serializer),t.removeTarget=e,this.__(t)}}class jv extends xh{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,t){return this.connection.Lo("Write",e,t)}T_(e){return se(!!e.streamToken),this.lastStreamToken=e.streamToken,se(!e.writeResults||e.writeResults.length===0),this.listener.m_()}onNext(e){se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.e_.reset();const t=tv(e.writeResults,e.commitTime),r=at(e.commitTime);return this.listener.f_(r,t)}g_(){const e={};e.database=No(this.serializer),this.__(e)}V_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>ev(this.serializer,r))};this.__(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new q(x.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,t,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Fo(e,Oo(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(x.UNKNOWN,s.toString())})}No(e,t,r,i,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.No(e,Oo(t,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new q(x.UNKNOWN,a.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class qv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(bt(t),this.b_=!1):j("OnlineStateTracker",t)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hv{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(a=>{r.enqueueAndForget(async()=>{yn(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(c){const h=Y(c);h.N_.add(4),await Jr(h),h.k_.set("Unknown"),h.N_.delete(4),await ws(h)}(this))})}),this.k_=new qv(r,i)}}async function ws(n){if(yn(n))for(const e of n.L_)await e(!0)}async function Jr(n){for(const e of n.L_)await e(!1)}function Lh(n,e){const t=Y(n);t.O_.has(e.targetId)||(t.O_.set(e.targetId,e),pa(t)?fa(t):Jn(t).n_()&&da(t,e))}function ha(n,e){const t=Y(n),r=Jn(t);t.O_.delete(e),r.n_()&&Vh(t,e),t.O_.size===0&&(r.n_()?r.s_():yn(t)&&t.k_.set("Unknown"))}function da(n,e){if(n.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Q.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Jn(n).d_(e)}function Vh(n,e){n.q_.xe(e),Jn(n).A_(e)}function fa(n){n.q_=new Wy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.O_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Jn(n).start(),n.k_.D_()}function pa(n){return yn(n)&&!Jn(n).t_()&&n.O_.size>0}function yn(n){return Y(n).N_.size===0}function Mh(n){n.q_=void 0}async function Wv(n){n.k_.set("Online")}async function $v(n){n.O_.forEach((e,t)=>{da(n,e)})}async function Kv(n,e){Mh(n),pa(n)?(n.k_.F_(e),fa(n)):n.k_.set("Unknown")}async function Qv(n,e,t){if(n.k_.set("Online"),e instanceof Ih&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.O_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.O_.delete(l),i.q_.removeTarget(l))}(n,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ns(n,r)}else if(e instanceof Fi?n.q_.Ke(e):e instanceof Eh?n.q_.He(e):n.q_.We(e),!t.isEqual(Q.min()))try{const r=await Dh(n.localStore);t.compareTo(r)>=0&&await function(s,a){const l=s.q_.rt(a);return l.targetChanges.forEach((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const f=s.O_.get(h);f&&s.O_.set(h,f.withResumeToken(c.resumeToken,a))}}),l.targetMismatches.forEach((c,h)=>{const f=s.O_.get(c);if(!f)return;s.O_.set(c,f.withResumeToken(Ce.EMPTY_BYTE_STRING,f.snapshotVersion)),Vh(s,c);const m=new Gt(f.target,c,h,f.sequenceNumber);da(s,m)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await ns(n,r)}}async function ns(n,e,t){if(!Qr(e))throw e;n.N_.add(1),await Jr(n),n.k_.set("Offline"),t||(t=()=>Dh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await t(),n.N_.delete(1),await ws(n)})}function Fh(n,e){return e().catch(t=>ns(n,t,e))}async function Ts(n){const e=Y(n),t=Yt(e);let r=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;Yv(e);)try{const i=await Nv(e.localStore,r);if(i===null){e.x_.length===0&&t.s_();break}r=i.batchId,Xv(e,i)}catch(i){await ns(e,i)}Uh(e)&&Bh(e)}function Yv(n){return yn(n)&&n.x_.length<10}function Xv(n,e){n.x_.push(e);const t=Yt(n);t.n_()&&t.R_&&t.V_(e.mutations)}function Uh(n){return yn(n)&&!Yt(n).t_()&&n.x_.length>0}function Bh(n){Yt(n).start()}async function Jv(n){Yt(n).g_()}async function Zv(n){const e=Yt(n);for(const t of n.x_)e.V_(t.mutations)}async function ew(n,e,t){const r=n.x_.shift(),i=sa.from(r,e,t);await Fh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ts(n)}async function tw(n,e){e&&Yt(n).R_&&await async function(r,i){if(function(a){return Gy(a)&&a!==x.ABORTED}(i.code)){const s=r.x_.shift();Yt(r).i_(),await Fh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ts(r)}}(n,e),Uh(n)&&Bh(n)}async function Ic(n,e){const t=Y(n);t.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=yn(t);t.N_.add(3),await Jr(t),r&&t.k_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.N_.delete(3),await ws(t)}async function nw(n,e){const t=Y(n);e?(t.N_.delete(2),await ws(t)):e||(t.N_.add(2),await Jr(t),t.k_.set("Unknown"))}function Jn(n){return n.Q_||(n.Q_=function(t,r,i){const s=Y(t);return s.y_(),new zv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{To:Wv.bind(null,n),Ao:$v.bind(null,n),Vo:Kv.bind(null,n),E_:Qv.bind(null,n)}),n.L_.push(async e=>{e?(n.Q_.i_(),pa(n)?fa(n):n.k_.set("Unknown")):(await n.Q_.stop(),Mh(n))})),n.Q_}function Yt(n){return n.K_||(n.K_=function(t,r,i){const s=Y(t);return s.y_(),new jv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{To:()=>Promise.resolve(),Ao:Jv.bind(null,n),Vo:tw.bind(null,n),m_:Zv.bind(null,n),f_:ew.bind(null,n)}),n.L_.push(async e=>{e?(n.K_.i_(),await Ts(n)):(await n.K_.stop(),n.x_.length>0&&(j("RemoteStore",`Stopping write stream with ${n.x_.length} pending writes`),n.x_=[]))})),n.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new It,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new ma(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ga(n,e){if(bt("AsyncQueue",`${e}: ${n}`),Qr(n))return new q(x.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.comparator=e?(t,r)=>e(t,r)||W.comparator(t.key,r.key):(t,r)=>W.comparator(t.key,r.key),this.keyedMap=br(),this.sortedSet=new ce(this.comparator)}static emptySet(e){return new Ln(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ln)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ln;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(){this.U_=new ce(W.comparator)}track(e){const t=e.doc.key,r=this.U_.get(t);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(t,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(t):e.type===1&&r.type===2?this.U_=this.U_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):K():this.U_=this.U_.insert(t,e)}W_(){const e=[];return this.U_.inorderTraversal((t,r)=>{e.push(r)}),e}}class qn{constructor(e,t,r,i,s,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new qn(e,t,Ln.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ps(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rw{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class iw{constructor(){this.queries=Ac(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(t,r){const i=Y(t),s=i.queries;i.queries=Ac(),s.forEach((a,l)=>{for(const c of l.z_)c.onError(r)})})(this,new q(x.ABORTED,"Firestore shutting down"))}}function Ac(){return new Xn(n=>ah(n),ps)}async function zh(n,e){const t=Y(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.j_()&&e.H_()&&(r=2):(s=new rw,r=e.H_()?0:1);try{switch(r){case 0:s.G_=await t.onListen(i,!0);break;case 1:s.G_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=ga(a,`Initialization of query '${On(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.z_.push(e),e.Y_(t.onlineState),s.G_&&e.Z_(s.G_)&&_a(t)}async function jh(n,e){const t=Y(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.z_.indexOf(e);a>=0&&(s.z_.splice(a,1),s.z_.length===0?i=e.H_()?0:1:!s.j_()&&e.H_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function sw(n,e){const t=Y(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.z_)l.Z_(i)&&(r=!0);a.G_=i}}r&&_a(t)}function ow(n,e,t){const r=Y(n),i=r.queries.get(e);if(i)for(const s of i.z_)s.onError(t);r.queries.delete(e)}function _a(n){n.J_.forEach(e=>{e.next()})}var Lo,bc;(bc=Lo||(Lo={})).X_="default",bc.Cache="cache";class Gh{constructor(e,t,r){this.query=e,this.ea=t,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new qn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ta?this.ra(e)&&(this.ea.next(e),t=!0):this.ia(e,this.onlineState)&&(this.sa(e),t=!0),this.na=e,t}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let t=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),t=!0),t}ia(e,t){if(!e.fromCache||!this.H_())return!0;const r=t!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const t=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}sa(e){e=qn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==Lo.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qh{constructor(e){this.key=e}}class Hh{constructor(e){this.key=e}}class aw{constructor(e,t){this.query=e,this.Ia=t,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=Z(),this.mutatedKeys=Z(),this.da=lh(e),this.Aa=new Ln(this.da)}get Ra(){return this.Ia}Va(e,t){const r=t?t.ma:new Sc,i=t?t.Aa:this.Aa;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const v=i.get(f),T=ms(this.query,m)?m:null,A=!!v&&this.mutatedKeys.has(v.key),P=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let C=!1;v&&T?v.data.isEqual(T.data)?A!==P&&(r.track({type:3,doc:T}),C=!0):this.fa(v,T)||(r.track({type:2,doc:T}),C=!0,(c&&this.da(T,c)>0||h&&this.da(T,h)<0)&&(l=!0)):!v&&T?(r.track({type:0,doc:T}),C=!0):v&&!T&&(r.track({type:1,doc:v}),C=!0,(c||h)&&(l=!0)),C&&(T?(a=a.add(T),s=P?s.add(f):s.delete(f)):(a=a.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Aa:a,ma:r,ts:l,mutatedKeys:s}}fa(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const a=e.ma.W_();a.sort((f,m)=>function(T,A){const P=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return P(T)-P(A)}(f.type,m.type)||this.da(f.doc,m.doc)),this.ga(r),i=i!=null&&i;const l=t&&!i?this.pa():[],c=this.Ea.size===0&&this.current&&!i?1:0,h=c!==this.Ta;return this.Ta=c,a.length!==0||h?{snapshot:new qn(this.query,e.Aa,s,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:l}:{ya:l}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new Sc,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(t=>this.Ia=this.Ia.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ia=this.Ia.delete(t)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=Z(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const t=[];return e.forEach(r=>{this.Ea.has(r)||t.push(new Hh(r))}),this.Ea.forEach(r=>{e.has(r)||t.push(new qh(r))}),t}Sa(e){this.Ia=e.Is,this.Ea=Z();const t=this.Va(e.documents);return this.applyChanges(t,!0)}ba(){return qn.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class lw{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class cw{constructor(e){this.key=e,this.Da=!1}}class uw{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.va=new Xn(l=>ah(l),ps),this.Fa=new Map,this.Ma=new Set,this.xa=new ce(W.comparator),this.Oa=new Map,this.Na=new la,this.La={},this.Ba=new Map,this.ka=Gn.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function hw(n,e,t=!0){const r=Xh(n);let i;const s=r.va.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ba()):i=await Wh(r,e,t,!0),i}async function dw(n,e){const t=Xh(n);await Wh(t,e,!0,!1)}async function Wh(n,e,t,r){const i=await xv(n.localStore,ot(e)),s=i.targetId,a=t?n.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await fw(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&Lh(n.remoteStore,i),l}async function fw(n,e,t,r,i){n.Qa=(m,v,T)=>async function(P,C,O,N){let D=C.view.Va(O);D.ts&&(D=await wc(P.localStore,C.query,!1).then(({documents:b})=>C.view.Va(b,D)));const V=N&&N.targetChanges.get(C.targetId),U=N&&N.targetMismatches.get(C.targetId)!=null,H=C.view.applyChanges(D,P.isPrimaryClient,V,U);return Rc(P,C.targetId,H.ya),H.snapshot}(n,m,v,T);const s=await wc(n.localStore,e,!0),a=new aw(e,s.Is),l=a.Va(s.documents),c=Xr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),h=a.applyChanges(l,n.isPrimaryClient,c);Rc(n,t,h.ya);const f=new lw(e,t,a);return n.va.set(e,f),n.Fa.has(t)?n.Fa.get(t).push(e):n.Fa.set(t,[e]),h.snapshot}async function pw(n,e,t){const r=Y(n),i=r.va.get(e),s=r.Fa.get(i.targetId);if(s.length>1)return r.Fa.set(i.targetId,s.filter(a=>!ps(a,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await xo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&ha(r.remoteStore,i.targetId),Vo(r,i.targetId)}).catch(Kr)):(Vo(r,i.targetId),await xo(r.localStore,i.targetId,!0))}async function mw(n,e){const t=Y(n),r=t.va.get(e),i=t.Fa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ha(t.remoteStore,r.targetId))}async function gw(n,e,t){const r=Iw(n);try{const i=await function(a,l){const c=Y(a),h=ye.now(),f=l.reduce((T,A)=>T.add(A.key),Z());let m,v;return c.persistence.runTransaction("Locally write mutations","readwrite",T=>{let A=Pt(),P=Z();return c.us.getEntries(T,f).next(C=>{A=C,A.forEach((O,N)=>{N.isValidDocument()||(P=P.add(O))})}).next(()=>c.localDocuments.getOverlayedDocuments(T,A)).next(C=>{m=C;const O=[];for(const N of l){const D=Fy(N,m.get(N.key).overlayedDocument);D!=null&&O.push(new _n(N.key,D,eh(D.value.mapValue),St.exists(!0)))}return c.mutationQueue.addMutationBatch(T,h,O,l)}).next(C=>{v=C;const O=C.applyToLocalDocumentSet(m,P);return c.documentOverlayCache.saveOverlays(T,C.batchId,O)})}).then(()=>({batchId:v.batchId,changes:uh(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,c){let h=a.La[a.currentUser.toKey()];h||(h=new ce(re)),h=h.insert(l,c),a.La[a.currentUser.toKey()]=h}(r,i.batchId,t),await Zr(r,i.changes),await Ts(r.remoteStore)}catch(i){const s=ga(i,"Failed to persist write");t.reject(s)}}async function $h(n,e){const t=Y(n);try{const r=await Ov(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Oa.get(s);a&&(se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Da=!0:i.modifiedDocuments.size>0?se(a.Da):i.removedDocuments.size>0&&(se(a.Da),a.Da=!1))}),await Zr(t,r,e)}catch(r){await Kr(r)}}function Pc(n,e,t){const r=Y(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.va.forEach((s,a)=>{const l=a.view.Y_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const c=Y(a);c.onlineState=l;let h=!1;c.queries.forEach((f,m)=>{for(const v of m.z_)v.Y_(l)&&(h=!0)}),h&&_a(c)}(r.eventManager,e),i.length&&r.Ca.E_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _w(n,e,t){const r=Y(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Oa.get(e),s=i&&i.key;if(s){let a=new ce(W.comparator);a=a.insert(s,xe.newNoDocument(s,Q.min()));const l=Z().add(s),c=new ys(Q.min(),new Map,new ce(re),a,l);await $h(r,c),r.xa=r.xa.remove(s),r.Oa.delete(e),ya(r)}else await xo(r.localStore,e,!1).then(()=>Vo(r,e,t)).catch(Kr)}async function yw(n,e){const t=Y(n),r=e.batch.batchId;try{const i=await kv(t.localStore,e);Qh(t,r,null),Kh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Zr(t,i)}catch(i){await Kr(i)}}async function vw(n,e,t){const r=Y(n);try{const i=await function(a,l){const c=Y(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return c.mutationQueue.lookupMutationBatch(h,l).next(m=>(se(m!==null),f=m.keys(),c.mutationQueue.removeMutationBatch(h,m))).next(()=>c.mutationQueue.performConsistencyCheck(h)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>c.localDocuments.getDocuments(h,f))})}(r.localStore,e);Qh(r,e,t),Kh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Zr(r,i)}catch(i){await Kr(i)}}function Kh(n,e){(n.Ba.get(e)||[]).forEach(t=>{t.resolve()}),n.Ba.delete(e)}function Qh(n,e,t){const r=Y(n);let i=r.La[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.La[r.currentUser.toKey()]=i}}function Vo(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Fa.get(e))n.va.delete(r),t&&n.Ca.Ka(r,t);n.Fa.delete(e),n.isPrimaryClient&&n.Na.mr(e).forEach(r=>{n.Na.containsKey(r)||Yh(n,r)})}function Yh(n,e){n.Ma.delete(e.path.canonicalString());const t=n.xa.get(e);t!==null&&(ha(n.remoteStore,t),n.xa=n.xa.remove(e),n.Oa.delete(t),ya(n))}function Rc(n,e,t){for(const r of t)r instanceof qh?(n.Na.addReference(r.key,e),ww(n,r)):r instanceof Hh?(j("SyncEngine","Document no longer in limbo: "+r.key),n.Na.removeReference(r.key,e),n.Na.containsKey(r.key)||Yh(n,r.key)):K()}function ww(n,e){const t=e.key,r=t.path.canonicalString();n.xa.get(t)||n.Ma.has(r)||(j("SyncEngine","New document in limbo: "+t),n.Ma.add(r),ya(n))}function ya(n){for(;n.Ma.size>0&&n.xa.size<n.maxConcurrentLimboResolutions;){const e=n.Ma.values().next().value;n.Ma.delete(e);const t=new W(le.fromString(e)),r=n.ka.next();n.Oa.set(r,new cw(t)),n.xa=n.xa.insert(t,r),Lh(n.remoteStore,new Gt(ot(ia(t.path)),r,"TargetPurposeLimboResolution",Jo.oe))}}async function Zr(n,e,t){const r=Y(n),i=[],s=[],a=[];r.va.isEmpty()||(r.va.forEach((l,c)=>{a.push(r.Qa(c,e,t).then(h=>{var f;if((h||t)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=t==null?void 0:t.targetChanges.get(c.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(c.targetId,m?"current":"not-current")}if(h){i.push(h);const m=ua.Ui(c.targetId,h);s.push(m)}}))}),await Promise.all(a),r.Ca.E_(i),await async function(c,h){const f=Y(c);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(h,v=>L.forEach(v.Ki,T=>f.persistence.referenceDelegate.addReference(m,v.targetId,T)).next(()=>L.forEach(v.$i,T=>f.persistence.referenceDelegate.removeReference(m,v.targetId,T)))))}catch(m){if(!Qr(m))throw m;j("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const v=m.targetId;if(!m.fromCache){const T=f.ss.get(v),A=T.snapshotVersion,P=T.withLastLimboFreeSnapshotVersion(A);f.ss=f.ss.insert(v,P)}}}(r.localStore,s))}async function Tw(n,e){const t=Y(n);if(!t.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await Oh(t.localStore,e);t.currentUser=e,function(s,a){s.Ba.forEach(l=>{l.forEach(c=>{c.reject(new q(x.CANCELLED,a))})}),s.Ba.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zr(t,r.ls)}}function Ew(n,e){const t=Y(n),r=t.Oa.get(e);if(r&&r.Da)return Z().add(r.key);{let i=Z();const s=t.Fa.get(e);if(!s)return i;for(const a of s){const l=t.va.get(a);i=i.unionWith(l.view.Ra)}return i}}function Xh(n){const e=Y(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=$h.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ew.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_w.bind(null,e),e.Ca.E_=sw.bind(null,e.eventManager),e.Ca.Ka=ow.bind(null,e.eventManager),e}function Iw(n){const e=Y(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=yw.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=vw.bind(null,e),e}class Cc{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=vs(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Cv(this.persistence,new Pv,e.initialUser,this.serializer)}createPersistence(e){return new Sv(ca.Yr,this.serializer)}createSharedClientState(e){return new Vv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Sw{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Pc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Tw.bind(null,this.syncEngine),await nw(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iw}()}createDatastore(e){const t=vs(e.databaseInfo.databaseId),r=function(s){return new Bv(s)}(e.databaseInfo);return function(s,a,l,c){return new Gv(s,a,l,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,l){return new Hv(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>Pc(this.syncEngine,t,0),function(){return Ec.D()?new Ec:new Mv}())}createSyncEngine(e,t){return function(i,s,a,l,c,h,f){const m=new uw(i,s,a,l,c,h);return f&&(m.qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=Y(i);j("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await Jr(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Jh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):bt("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=Ne.UNAUTHENTICATED,this.clientId=Xu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{j("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(j("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(x.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new It;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ga(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fo(n,e){n.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Oh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function kc(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Pw(n);j("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Ic(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>Ic(e.remoteStore,i)),n._onlineComponents=e}function bw(n){return n.name==="FirebaseError"?n.code===x.FAILED_PRECONDITION||n.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Pw(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){j("FirestoreClient","Using user provided OfflineComponentProvider");try{await fo(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!bw(t))throw t;Un("Error using user provided cache. Falling back to memory cache: "+t),await fo(n,new Cc)}}else j("FirestoreClient","Using default OfflineComponentProvider"),await fo(n,new Cc);return n._offlineComponents}async function Zh(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(j("FirestoreClient","Using user provided OnlineComponentProvider"),await kc(n,n._uninitializedComponentsProvider._online)):(j("FirestoreClient","Using default OnlineComponentProvider"),await kc(n,new Sw))),n._onlineComponents}function Rw(n){return Zh(n).then(e=>e.syncEngine)}async function ed(n){const e=await Zh(n),t=e.eventManager;return t.onListen=hw.bind(null,e.syncEngine),t.onUnlisten=pw.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=dw.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=mw.bind(null,e.syncEngine),t}function Cw(n,e,t={}){const r=new It;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,c,h){const f=new Jh({next:v=>{a.enqueueAndForget(()=>jh(s,m));const T=v.docs.has(l);!T&&v.fromCache?h.reject(new q(x.UNAVAILABLE,"Failed to get document because the client is offline.")):T&&v.fromCache&&c&&c.source==="server"?h.reject(new q(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(v)},error:v=>h.reject(v)}),m=new Gh(ia(l.path),f,{includeMetadataChanges:!0,oa:!0});return zh(s,m)}(await ed(n),n.asyncQueue,e,t,r)),r.promise}function kw(n,e,t={}){const r=new It;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,c,h){const f=new Jh({next:v=>{a.enqueueAndForget(()=>jh(s,m)),v.fromCache&&c.source==="server"?h.reject(new q(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(v)},error:v=>h.reject(v)}),m=new Gh(l,f,{includeMetadataChanges:!0,oa:!0});return zh(s,m)}(await ed(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function td(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(n,e,t){if(!t)throw new q(x.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ow(n,e,t,r){if(e===!0&&r===!0)throw new q(x.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Dc(n){if(!W.isDocumentKey(n))throw new q(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Nc(n){if(W.isDocumentKey(n))throw new q(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function va(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":K()}function fn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new q(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=va(n);throw new q(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ow("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=td((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(x.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Es{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xc(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new $_;switch(r.type){case"firstParty":return new X_(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=Oc.get(t);r&&(j("ComponentProvider","Removing Datastore"),Oc.delete(t),r.terminate())}(this),Promise.resolve()}}function Dw(n,e,t,r={}){var i;const s=(n=fn(n,Es))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Un("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,c;if(typeof r.mockUserToken=="string")l=r.mockUserToken,c=Ne.MOCK_USER;else{l=uu(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new q(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ne(h)}n._authCredentials=new K_(new Yu(l,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Is(this.firestore,e,this._query)}}class qe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}}class Wt extends Is{constructor(e,t,r){super(e,t,ia(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new W(e))}withConverter(e){return new Wt(this.firestore,e,this._path)}}function Nw(n,e,...t){if(n=ve(n),nd("collection","path",e),n instanceof Es){const r=le.fromString(e,...t);return Nc(r),new Wt(n,null,r)}{if(!(n instanceof qe||n instanceof Wt))throw new q(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return Nc(r),new Wt(n.firestore,null,r)}}function rd(n,e,...t){if(n=ve(n),arguments.length===1&&(e=Xu.newId()),nd("doc","path",e),n instanceof Es){const r=le.fromString(e,...t);return Dc(r),new qe(n,null,new W(r))}{if(!(n instanceof qe||n instanceof Wt))throw new q(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return Dc(r),new qe(n.firestore,n instanceof Wt?n.converter:null,new W(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new Nh(this,"async_queue_retry"),this.Tu=()=>{const t=ho();t&&j("AsyncQueue","Visibility state changed to "+t.visibilityState),this.e_.zo()};const e=ho();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const t=ho();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const t=new It;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!Qr(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const t=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw bt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=t,t}enqueueAfterDelay(e,t,r){this.Eu(),this.Iu.indexOf(e)>-1&&(t=0);const i=ma.createAndSchedule(this,e,t,r,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&K()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const t of this.cu)if(t.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.cu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const t=this.cu.indexOf(e);this.cu.splice(t,1)}}class Ss extends Es{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new xw}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sd(this),this._firestoreClient.terminate()}}function id(n,e){const t=typeof n=="object"?n:Go(),r=typeof n=="string"?n:"(default)",i=hs(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=au("firestore");s&&Dw(i,...s)}return i}function wa(n){return n._firestoreClient||sd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function sd(n){var e,t,r;const i=n._freezeSettings(),s=function(l,c,h,f){return new uy(l,c,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,td(f.experimentalLongPollingOptions),f.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Aw(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hn(Ce.fromBase64String(e))}catch(t){throw new q(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Hn(Ce.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new q(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new q(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new q(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=/^__.*__$/;class Vw{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new _n(e,this.data,this.fieldMask,t,this.fieldTransforms):new Yr(e,this.data,t,this.fieldTransforms)}}function ad(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Ia{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new Ia(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.wu({path:r,bu:!1});return i.Du(e),i}Cu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.wu({path:r,bu:!1});return i.pu(),i}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return rs(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(e.length===0)throw this.Fu("Document fields must not be empty");if(ad(this.yu)&&Lw.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class Mw{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||vs(e)}Ou(e,t,r,i=!1){return new Ia({yu:e,methodName:t,xu:r,path:be.emptyPath(),bu:!1,Mu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fw(n){const e=n._freezeSettings(),t=vs(n._databaseId);return new Mw(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Uw(n,e,t,r,i,s={}){const a=n.Ou(s.merge||s.mergeFields?2:0,e,t,i);hd("Data must be an object, but it was:",a,r);const l=cd(r,a);let c,h;if(s.merge)c=new Je(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const v=Bw(e,m,t);if(!a.contains(v))throw new q(x.INVALID_ARGUMENT,`Field '${v}' is specified in your field mask but missing from your input data.`);jw(f,v)||f.push(v)}c=new Je(f),h=a.fieldTransforms.filter(m=>c.covers(m.field))}else c=null,h=a.fieldTransforms;return new Vw(new Ke(l),c,h)}function ld(n,e){if(ud(n=ve(n)))return hd("Unsupported field value:",e,n),cd(n,e);if(n instanceof od)return function(r,i){if(!ad(i.yu))throw i.Fu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Fu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.bu&&e.yu!==4)throw e.Fu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let c=ld(l,i.vu(a));c==null&&(c={nullValue:"NULL_VALUE"}),s.push(c),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=ve(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Dy(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ye.fromDate(r);return{timestampValue:ts(i.serializer,s)}}if(r instanceof ye){const s=new ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ts(i.serializer,s)}}if(r instanceof Ea)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Hn)return{bytesValue:Sh(i.serializer,r._byteString)};if(r instanceof qe){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Fu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:aa(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Fu(`Unsupported field value: ${va(r)}`)}(n,e)}function cd(n,e){const t={};return Ju(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yn(n,(r,i)=>{const s=ld(i,e.Su(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function ud(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ye||n instanceof Ea||n instanceof Hn||n instanceof qe||n instanceof od)}function hd(n,e,t){if(!ud(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=va(t);throw r==="an object"?e.Fu(n+" a custom object"):e.Fu(n+" "+r)}}function Bw(n,e,t){if((e=ve(e))instanceof Ta)return e._internalPath;if(typeof e=="string")return dd(n,e);throw rs("Field path arguments must be of type string or ",n,!1,void 0,t)}const zw=new RegExp("[~\\*/\\[\\]]");function dd(n,e,t){if(e.search(zw)>=0)throw rs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ta(...e.split("."))._internalPath}catch{throw rs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function rs(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(s||a)&&(c+=" (found",s&&(c+=` in field ${r}`),a&&(c+=` in document ${i}`),c+=")"),new q(x.INVALID_ARGUMENT,l+n+c)}function jw(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Gw(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(pd("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Gw extends fd{data(){return super.data()}}function pd(n,e){return typeof e=="string"?dd(n,e):e instanceof Ta?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new q(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hw{convertValue(e,t="none"){switch(dn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(hn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw K()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Yn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new Ea(me(e.latitude),me(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=ea(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Fr(e));default:return null}}convertTimestamp(e){const t=Qt(e);return new ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=le.fromString(e);se(kh(r));const i=new Ur(r.get(1),r.get(3)),s=new W(r.popFirst(5));return i.isEqual(t)||bt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ww(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class md extends fd{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ui(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(pd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ui extends md{data(e={}){return super.data(e)}}class $w{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Rr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ui(this._firestore,this._userDataWriter,r.key,r,new Rr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new q(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const c=new Ui(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Rr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const c=new Ui(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Rr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),f=a.indexOf(l.doc.key)),{type:Kw(l.type),doc:c,oldIndex:h,newIndex:f}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Kw(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(n){n=fn(n,qe);const e=fn(n.firestore,Ss);return Cw(wa(e),n._key).then(t=>Zw(e,n,t))}class gd extends Hw{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,t)}}function Yw(n){n=fn(n,Is);const e=fn(n.firestore,Ss),t=wa(e),r=new gd(e);return qw(n._query),kw(t,n._query).then(i=>new $w(e,r,n,i))}function Xw(n,e,t){n=fn(n,qe);const r=fn(n.firestore,Ss),i=Ww(n.converter,e,t);return Jw(r,[Uw(Fw(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,St.none())])}function Jw(n,e){return function(r,i){const s=new It;return r.asyncQueue.enqueueAndForget(async()=>gw(await Rw(r),i,s)),s.promise}(wa(n),e)}function Zw(n,e,t){const r=t.docs.get(e._key),i=new gd(n);return new md(n,i,e._key,r,new Rr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Qn=i})(gn),ln(new $t("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new Ss(new Q_(r.getProvider("auth-internal")),new Z_(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new q(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ur(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),st(ec,"4.6.5",e),st(ec,"4.6.5","esm2017")})();async function eT(n,e,t){const r=id(n),i={};Object.keys(t).forEach(s=>{t[s]!==void 0&&(i[s]=t[s])}),await Xw(rd(r,"user",e),i,{merge:!0})}async function tT(n,e,t=null){const r=id(n);let i=t?void 0:[];if(t){const s=rd(r,e,t),a=await Qw(s);a.exists()&&(i=a.data())}else(await Yw(Nw(r,e))).forEach(a=>{i.push(a.data())});return i}async function nT(n){W_(X(".news-swiper__cards"),X(".news-swiper__prev-button"),X(".news-swiper__next-button"),null,0,{1920:{slidesPerView:3,spaceBetween:35},1440:{slidesPerView:3,spaceBetween:35},1140:{slidesPerView:3,spaceBetween:20},767:{slidesPerView:2,spaceBetween:20},375:{slidesPerView:1.4,spaceBetween:5},320:{slidesPerView:1.1,spaceBetween:5}})}function Er(n,e){e.forEach(i=>{const s=i.querySelector(".select__svg"),a=i.querySelector(".select__header");i.addEventListener("click",l=>{const c=l.target.closest(".select__header"),h=l.target.closest(".select__item"),f=i.querySelector(".select__body");c&&t(c,f,s),h&&(t(a,f,s),n.forEach(m=>{m.textContent=h.textContent}))}),document.addEventListener("click",l=>{const c=i.querySelector(".select__body");i.contains(l.target)||r(a,c,s)})});function t(i,s,a){i.classList.toggle("select__header-active"),s.classList.toggle("select__body-active"),a.classList.toggle("select__svg-active")}function r(i,s,a){i.classList.remove("select__header-active"),s.classList.remove("select__body-active"),a.classList.remove("select__svg-active")}}function rT(){Er(X(".header__select-language","all"),X(".header__select","all")),Er(X(".product-filter__current-weight","all"),X(".product-filter__select-weight","all")),Er(X(".product-filter__current-taste","all"),X(".product-filter__select-taste","all")),Er(X(".registration__current-country","all"),X(".registration__select-country","all")),Er(X(".registration__current-region","all"),X(".registration__select-region","all"))}function Sa(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function _d(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const iT=_d,yd=new Wr("auth","Firebase",_d());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new zo("@firebase/auth");function sT(n,...e){is.logLevel<=ee.WARN&&is.warn(`Auth (${gn}): ${n}`,...e)}function Bi(n,...e){is.logLevel<=ee.ERROR&&is.error(`Auth (${gn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(n,...e){throw Aa(n,...e)}function lt(n,...e){return Aa(n,...e)}function vd(n,e,t){const r=Object.assign(Object.assign({},iT()),{[e]:t});return new Wr("auth","Firebase",r).create(e,{appName:n.name})}function At(n){return vd(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Aa(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return yd.create(n,...e)}function $(n,e,...t){if(!n)throw Aa(e,...t)}function wt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Bi(e),new Error(e)}function Rt(n,e){n||wt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function oT(){return Lc()==="http:"||Lc()==="https:"}function Lc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oT()||zf()||"connection"in navigator)?navigator.onLine:!0}function lT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t){this.shortDelay=e,this.longDelay=t,Rt(t>e,"Short delay should be less than long delay!"),this.isMobile=Uf()||jf()}get(){return aT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(n,e){Rt(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uT=new ei(3e4,6e4);function Xt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ct(n,e,t,r,i={}){return Td(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=$r(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),wd.fetch()(Ed(n,n.config.apiHost,t,l),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Td(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},cT),e);try{const i=new dT(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Ni(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ni(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Ni(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw Ni(n,"user-disabled",a);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw vd(n,f,h);Ze(n,f)}}catch(i){if(i instanceof dt)throw i;Ze(n,"network-request-failed",{message:String(i)})}}async function ti(n,e,t,r,i={}){const s=await Ct(n,e,t,r,i);return"mfaPendingCredential"in s&&Ze(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Ed(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?ba(n.config,i):`${n.config.apiScheme}://${i}`}function hT(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class dT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(lt(this.auth,"network-request-failed")),uT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ni(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=lt(n,e,r);return i.customData._tokenResponse=t,i}function Vc(n){return n!==void 0&&n.enterprise!==void 0}class fT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return hT(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function pT(n,e){return Ct(n,"GET","/v2/recaptchaConfig",Xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mT(n,e){return Ct(n,"POST","/v1/accounts:delete",e)}async function Id(n,e){return Ct(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gT(n,e=!1){const t=ve(n),r=await t.getIdToken(e),i=Pa(r);$(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:xr(po(i.auth_time)),issuedAtTime:xr(po(i.iat)),expirationTime:xr(po(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function po(n){return Number(n)*1e3}function Pa(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Bi("JWT malformed, contained fewer than 3 sections"),null;try{const i=su(t);return i?JSON.parse(i):(Bi("Failed to decode base64 JWT payload"),null)}catch(i){return Bi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Mc(n){const e=Pa(n);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof dt&&_T(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function _T({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=xr(this.lastLoginAt),this.creationTime=xr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ss(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Wn(n,Id(t,{idToken:r}));$(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Sd(s.providerUserInfo):[],l=wT(n.providerData,a),c=n.isAnonymous,h=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),f=c?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Fo(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,m)}async function vT(n){const e=ve(n);await ss(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function wT(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Sd(n){return n.map(e=>{var{providerId:t}=e,r=Sa(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TT(n,e){const t=await Td(n,{},async()=>{const r=$r({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=Ed(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",wd.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function ET(n,e){return Ct(n,"POST","/v2/accounts:revokeToken",Xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Mc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){$(e.length!==0,"internal-error");const t=Mc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:($(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await TT(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new Vn;return r&&($(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vn,this.toJSON())}_performRefresh(){return wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vt(n,e){$(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Tt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=Sa(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fo(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Wn(this,this.stsTokenManager.getToken(this.auth,e));return $(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return gT(this,e)}reload(){return vT(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Tt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ss(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(nt(this.auth.app))return Promise.reject(At(this.auth));const e=await this.getIdToken();return await Wn(this,mT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,l,c,h,f;const m=(r=t.displayName)!==null&&r!==void 0?r:void 0,v=(i=t.email)!==null&&i!==void 0?i:void 0,T=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,A=(a=t.photoURL)!==null&&a!==void 0?a:void 0,P=(l=t.tenantId)!==null&&l!==void 0?l:void 0,C=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,O=(h=t.createdAt)!==null&&h!==void 0?h:void 0,N=(f=t.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:D,emailVerified:V,isAnonymous:U,providerData:H,stsTokenManager:b}=t;$(D&&b,e,"internal-error");const y=Vn.fromJSON(this.name,b);$(typeof D=="string",e,"internal-error"),Vt(m,e.name),Vt(v,e.name),$(typeof V=="boolean",e,"internal-error"),$(typeof U=="boolean",e,"internal-error"),Vt(T,e.name),Vt(A,e.name),Vt(P,e.name),Vt(C,e.name),Vt(O,e.name),Vt(N,e.name);const g=new Tt({uid:D,auth:e,email:v,emailVerified:V,displayName:m,isAnonymous:U,photoURL:A,phoneNumber:T,tenantId:P,stsTokenManager:y,createdAt:O,lastLoginAt:N});return H&&Array.isArray(H)&&(g.providerData=H.map(w=>Object.assign({},w))),C&&(g._redirectEventId=C),g}static async _fromIdTokenResponse(e,t,r=!1){const i=new Vn;i.updateFromServerResponse(t);const s=new Tt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ss(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];$(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Sd(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Vn;l.updateFromIdToken(r);const c=new Tt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Fo(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc=new Map;function Et(n){Rt(n instanceof Function,"Expected a class definition");let e=Fc.get(n);return e?(Rt(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Fc.set(n,e),e)}/**
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
 */class Ad{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ad.type="NONE";const Uc=Ad;/**
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
 */function zi(n,e,t){return`firebase:${n}:${e}:${t}`}class Mn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=zi(this.userKey,i.apiKey,s),this.fullPersistenceKey=zi("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Mn(Et(Uc),e,r);const i=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Et(Uc);const a=zi(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const f=await h._get(a);if(f){const m=Tt._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const c=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Mn(s,e,r):(s=c[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new Mn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kd(e))return"Blackberry";if(Od(e))return"Webos";if(Ra(e))return"Safari";if((e.includes("chrome/")||Pd(e))&&!e.includes("edge/"))return"Chrome";if(Cd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bd(n=Re()){return/firefox\//i.test(n)}function Ra(n=Re()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Pd(n=Re()){return/crios\//i.test(n)}function Rd(n=Re()){return/iemobile/i.test(n)}function Cd(n=Re()){return/android/i.test(n)}function kd(n=Re()){return/blackberry/i.test(n)}function Od(n=Re()){return/webos/i.test(n)}function As(n=Re()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function IT(n=Re()){var e;return As(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ST(){return Gf()&&document.documentMode===10}function Dd(n=Re()){return As(n)||Cd(n)||Od(n)||kd(n)||/windows phone/i.test(n)||Rd(n)}function AT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(n,e=[]){let t;switch(n){case"Browser":t=Bc(Re());break;case"Worker":t=`${Bc(Re())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${gn}/${r}`}/**
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
 */class bT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,l)=>{try{const c=e(s);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function PT(n,e={}){return Ct(n,"GET","/v2/passwordPolicy",Xt(n,e))}/**
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
 */const RT=6;class CT{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:RT,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kT{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zc(this),this.idTokenSubscription=new zc(this),this.beforeStateQueue=new bT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Et(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Mn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Id(this,{idToken:e}),r=await Tt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(nt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ss(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(nt(this.app))return Promise.reject(At(this));const t=e?ve(e):null;return t&&$(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return nt(this.app)?Promise.reject(At(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return nt(this.app)?Promise.reject(At(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Et(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PT(this),t=new CT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Wr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await ET(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Et(e)||this._popupRedirectResolver;$(t,this,"argument-error"),this.redirectPersistenceManager=await Mn.create(this,[Et(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if($(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,i);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&sT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function vn(n){return ve(n)}class zc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Xf(t=>this.observer=t)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bs={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function OT(n){bs=n}function xd(n){return bs.loadJS(n)}function DT(){return bs.recaptchaEnterpriseScript}function NT(){return bs.gapiScript}function xT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const LT="recaptcha-enterprise",VT="NO_RECAPTCHA";class MT{constructor(e){this.type=LT,this.auth=vn(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{pT(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new fT(c);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,a(h.siteKey)}}).catch(c=>{l(c)})})}function i(s,a,l){const c=window.grecaptcha;Vc(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(h=>{a(h)}).catch(()=>{a(VT)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(l=>{if(!t&&Vc(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let c=DT();c.length!==0&&(c+=l),xd(c).then(()=>{i(l,s,a)}).catch(h=>{a(h)})}}).catch(l=>{a(l)})})}}async function jc(n,e,t,r=!1){const i=new MT(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Uo(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await jc(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await jc(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FT(n,e){const t=hs(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Hi(s,e??{}))return i;Ze(i,"already-initialized")}return t.initialize({options:e})}function UT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Et);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function BT(n,e,t){const r=vn(n);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Ld(e),{host:a,port:l}=zT(e),c=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),jT()}function Ld(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function zT(n){const e=Ld(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Gc(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Gc(a)}}}function Gc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function jT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ca{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return wt("not implemented")}_getIdTokenResponse(e){return wt("not implemented")}_linkToIdToken(e,t){return wt("not implemented")}_getReauthenticationResolver(e){return wt("not implemented")}}async function GT(n,e){return Ct(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qT(n,e){return ti(n,"POST","/v1/accounts:signInWithPassword",Xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HT(n,e){return ti(n,"POST","/v1/accounts:signInWithEmailLink",Xt(n,e))}async function WT(n,e){return ti(n,"POST","/v1/accounts:signInWithEmailLink",Xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr extends Ca{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Gr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Gr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uo(e,t,"signInWithPassword",qT);case"emailLink":return HT(e,{email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Uo(e,r,"signUpPassword",GT);case"emailLink":return WT(e,{idToken:t,email:this._email,oobCode:this._password});default:Ze(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fn(n,e){return ti(n,"POST","/v1/accounts:signInWithIdp",Xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T="http://localhost";class pn extends Ca{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new pn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ze("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=Sa(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new pn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Fn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Fn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fn(e,t)}buildRequest(){const e={requestUri:$T,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$r(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QT(n){const e=Ir(Sr(n)).link,t=e?Ir(Sr(e)).deep_link_id:null,r=Ir(Sr(n)).deep_link_id;return(r?Ir(Sr(r)).link:null)||r||t||e||n}class ka{constructor(e){var t,r,i,s,a,l;const c=Ir(Sr(e)),h=(t=c.apiKey)!==null&&t!==void 0?t:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,m=KT((i=c.mode)!==null&&i!==void 0?i:null);$(h&&f&&m,"argument-error"),this.apiKey=h,this.operation=m,this.code=f,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=c.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=QT(e);try{return new ka(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.providerId=Zn.PROVIDER_ID}static credential(e,t){return Gr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=ka.parseLink(t);return $(r,"argument-error"),Gr._fromEmailAndCode(e,r.code,r.tenantId)}}Zn.PROVIDER_ID="password";Zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ni extends Vd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends ni{constructor(){super("facebook.com")}static credential(e){return pn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ft.credential(e.oauthAccessToken)}catch{return null}}}Ft.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ft.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends ni{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return pn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ut.credentialFromTaggedObject(e)}static credentialFromError(e){return Ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ut.credential(t,r)}catch{return null}}}Ut.GOOGLE_SIGN_IN_METHOD="google.com";Ut.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends ni{constructor(){super("github.com")}static credential(e){return pn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bt.credential(e.oauthAccessToken)}catch{return null}}}Bt.GITHUB_SIGN_IN_METHOD="github.com";Bt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends ni{constructor(){super("twitter.com")}static credential(e,t){return pn._fromParams({providerId:zt.PROVIDER_ID,signInMethod:zt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return zt.credentialFromTaggedObject(e)}static credentialFromError(e){return zt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return zt.credential(t,r)}catch{return null}}}zt.TWITTER_SIGN_IN_METHOD="twitter.com";zt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XT(n,e){return ti(n,"POST","/v1/accounts:signUp",Xt(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await Tt._fromIdTokenResponse(e,r,i),a=qc(r);return new mn({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=qc(r);return new mn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function qc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends dt{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,os.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new os(e,t,r,i)}}function Md(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?os._fromErrorAndOperation(n,s,e,r):s})}async function JT(n,e,t=!1){const r=await Wn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return mn._forOperation(n,"link",r)}/**
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
 */async function ZT(n,e,t=!1){const{auth:r}=n;if(nt(r.app))return Promise.reject(At(r));const i="reauthenticate";try{const s=await Wn(n,Md(r,i,e,n),t);$(s.idToken,r,"internal-error");const a=Pa(s.idToken);$(a,r,"internal-error");const{sub:l}=a;return $(n.uid===l,r,"user-mismatch"),mn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ze(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fd(n,e,t=!1){if(nt(n.app))return Promise.reject(At(n));const r="signIn",i=await Md(n,r,e),s=await mn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function eE(n,e){return Fd(vn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ud(n){const e=vn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tE(n,e,t){if(nt(n.app))return Promise.reject(At(n));const r=vn(n),a=await Uo(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",XT).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Ud(n),c}),l=await mn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function nE(n,e,t){return nt(n.app)?Promise.reject(At(n)):eE(ve(n),Zn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Ud(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rE(n,e){return Ct(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=ve(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await Wn(r,rE(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:c})=>c==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function sE(n,e,t,r){return ve(n).onIdTokenChanged(e,t,r)}function oE(n,e,t){return ve(n).beforeAuthStateChanged(e,t)}function aE(n,e,t,r){return ve(n).onAuthStateChanged(e,t,r)}function lE(n){return ve(n).signOut()}const as="__sak";/**
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
 */class Bd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(as,"1"),this.storage.removeItem(as),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(){const n=Re();return Ra(n)||As(n)}const uE=1e3,hE=10;class zd extends Bd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cE()&&AT(),this.fallbackToPolling=Dd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);ST()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,hE):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},uE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}zd.type="LOCAL";const dE=zd;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd extends Bd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jd.type="SESSION";const Gd=jd;/**
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
 */function fE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ps{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Ps(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(t.origin,s)),c=await fE(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ps.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class pE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,c)=>{const h=Oa("",20);i.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const v=m;if(v.data.eventId===h)switch(v.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(v.data.response);break;default:clearTimeout(f),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return window}function mE(n){ct().location.href=n}/**
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
 */function qd(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function gE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function _E(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function yE(){return qd()?self:null}/**
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
 */const Hd="firebaseLocalStorageDb",vE=1,ls="firebaseLocalStorage",Wd="fbase_key";class ri{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Rs(n,e){return n.transaction([ls],e?"readwrite":"readonly").objectStore(ls)}function wE(){const n=indexedDB.deleteDatabase(Hd);return new ri(n).toPromise()}function Bo(){const n=indexedDB.open(Hd,vE);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ls,{keyPath:Wd})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ls)?e(r):(r.close(),await wE(),e(await Bo()))})})}async function Hc(n,e,t){const r=Rs(n,!0).put({[Wd]:e,value:t});return new ri(r).toPromise()}async function TE(n,e){const t=Rs(n,!1).get(e),r=await new ri(t).toPromise();return r===void 0?null:r.value}function Wc(n,e){const t=Rs(n,!0).delete(e);return new ri(t).toPromise()}const EE=800,IE=3;class $d{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>IE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ps._getInstance(yE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await gE(),!this.activeServiceWorker)return;this.sender=new pE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||_E()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bo();return await Hc(e,as,"1"),await Wc(e,as),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Hc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>TE(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Rs(i,!1).getAll();return new ri(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$d.type="LOCAL";const SE=$d;new ei(3e4,6e4);/**
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
 */function AE(n,e){return e?Et(e):($(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Da extends Ca{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function bE(n){return Fd(n.auth,new Da(n),n.bypassAuthState)}function PE(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),ZT(t,new Da(n),n.bypassAuthState)}async function RE(n){const{auth:e,user:t}=n;return $(t,e,"internal-error"),JT(t,new Da(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kd{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bE;case"linkViaPopup":case"linkViaRedirect":return RE;case"reauthViaPopup":case"reauthViaRedirect":return PE;default:Ze(this.auth,"internal-error")}}resolve(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE=new ei(2e3,1e4);class xn extends Kd{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,xn.currentPopupAction&&xn.currentPopupAction.cancel(),xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Rt(this.filter.length===1,"Popup operations only handle one event");const e=Oa();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CE.get())};e()}}xn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kE="pendingRedirect",ji=new Map;class OE extends Kd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ji.get(this.auth._key());if(!e){try{const r=await DE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ji.set(this.auth._key(),e)}return this.bypassAuthState||ji.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function DE(n,e){const t=LE(e),r=xE(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function NE(n,e){ji.set(n._key(),e)}function xE(n){return Et(n._redirectPersistence)}function LE(n){return zi(kE,n.config.apiKey,n.name)}async function VE(n,e,t=!1){if(nt(n.app))return Promise.reject(At(n));const r=vn(n),i=AE(r,e),a=await new OE(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=10*60*1e3;class FE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!UE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Qd(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(lt(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ME&&this.cachedEventUids.clear(),this.cachedEventUids.has($c(e))}saveEventToCache(e){this.cachedEventUids.add($c(e)),this.lastProcessedEventTime=Date.now()}}function $c(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Qd({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function UE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BE(n,e={}){return Ct(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jE=/^https?/;async function GE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await BE(n);for(const t of e)try{if(qE(t))return}catch{}Ze(n,"unauthorized-domain")}function qE(n){const e=Mo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!jE.test(t))return!1;if(zE.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const HE=new ei(3e4,6e4);function Kc(){const n=ct().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function WE(n){return new Promise((e,t)=>{var r,i,s;function a(){Kc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Kc(),t(lt(n,"network-request-failed"))},timeout:HE.get()})}if(!((i=(r=ct().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=ct().gapi)===null||s===void 0)&&s.load)a();else{const l=xT("iframefcb");return ct()[l]=()=>{gapi.load?a():t(lt(n,"network-request-failed"))},xd(`${NT()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw Gi=null,e})}let Gi=null;function $E(n){return Gi=Gi||WE(n),Gi}/**
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
 */const KE=new ei(5e3,15e3),QE="__/auth/iframe",YE="emulator/auth/iframe",XE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZE(n){const e=n.config;$(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ba(e,YE):`https://${n.config.authDomain}/${QE}`,r={apiKey:e.apiKey,appName:n.name,v:gn},i=JE.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${$r(r).slice(1)}`}async function eI(n){const e=await $E(n),t=ct().gapi;return $(t,n,"internal-error"),e.open({where:document.body,url:ZE(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XE,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=lt(n,"network-request-failed"),l=ct().setTimeout(()=>{s(a)},KE.get());function c(){ct().clearTimeout(l),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const tI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nI=500,rI=600,iI="_blank",sI="http://localhost";class Qc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oI(n,e,t,r=nI,i=rI){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},tI),{width:r.toString(),height:i.toString(),top:s,left:a}),h=Re().toLowerCase();t&&(l=Pd(h)?iI:t),bd(h)&&(e=e||sI,c.scrollbars="yes");const f=Object.entries(c).reduce((v,[T,A])=>`${v}${T}=${A},`,"");if(IT(h)&&l!=="_self")return aI(e||"",l),new Qc(null);const m=window.open(e||"",l,f);$(m,n,"popup-blocked");try{m.focus()}catch{}return new Qc(m)}function aI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const lI="__/auth/handler",cI="emulator/auth/handler",uI=encodeURIComponent("fac");async function Yc(n,e,t,r,i,s){$(n.config.authDomain,n,"auth-domain-config-required"),$(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:gn,eventId:i};if(e instanceof Vd){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Yf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof ni){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const c=await n._getAppCheckToken(),h=c?`#${uI}=${encodeURIComponent(c)}`:"";return`${hI(n)}?${$r(l).slice(1)}${h}`}function hI({config:n}){return n.emulator?ba(n,cI):`https://${n.authDomain}/${lI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mo="webStorageSupport";class dI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Gd,this._completeRedirectFn=VE,this._overrideRedirectResult=NE}async _openPopup(e,t,r,i){var s;Rt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Yc(e,t,r,Mo(),i);return oI(e,a,Oa())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Yc(e,t,r,Mo(),i);return mE(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Rt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await eI(e),r=new FE(e);return t.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(mo,{type:mo},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[mo];a!==void 0&&t(!!a),Ze(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=GE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Dd()||Ra()||As()}}const fI=dI;var Xc="@firebase/auth",Jc="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gI(n){ln(new $t("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;$(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nd(n)},h=new kT(r,i,s,c);return UT(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ln(new $t("auth-internal",e=>{const t=vn(e.getProvider("auth").getImmediate());return(r=>new pI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),st(Xc,Jc,mI(n)),st(Xc,Jc,"esm2017")}/**
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
 */const _I=5*60,yI=cu("authIdTokenMaxAge")||_I;let Zc=null;const vI=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>yI)return;const i=t==null?void 0:t.token;Zc!==i&&(Zc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function wI(n=Go()){const e=hs(n,"auth");if(e.isInitialized())return e.getImmediate();const t=FT(n,{popupRedirectResolver:fI,persistence:[SE,dE,Gd]}),r=cu("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=vI(s.toString());oE(t,a,()=>a(t.currentUser)),sE(t,l=>a(l))}}const i=ou("auth");return i&&BT(t,`http://${i}`),t}function TI(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}OT({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=lt("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",TI().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gI("Browser");function EI(n,e){const t=new FileReader,r=e.files[0];t.readAsDataURL(r),t.onload=()=>{n.src=t.result}}let cs=!0;function VI(n,e,t,r,i,s,a=null,l=null,c=null){e.forEach((f,m)=>{f.addEventListener("input",()=>{f.name in t&&h(f.name,t[f.name],m,f,r[f.name])}),f.addEventListener("blur",()=>{f.name in t&&h(f.name,t[f.name],m,f,r[f.name]),console.log(cs)}),s.addEventListener("click",v=>{v.preventDefault(),f.name in t&&h(f.name,t[f.name],m,f,r[f.name])})}),s.addEventListener("click",()=>{cs&&i(a,n)});function h(f,m,v,T,A=null){const P=new FormData(n),C=T.parentElement.querySelector(".error__block"),O=P.get("photoAvatar");try{if(P.get(T.name)===""&&m.void!==null)throw new Error(m.void);if(T.name==="photoAvatar")if(O.name.match(A))EI(l,c);else throw new Error(m.regExp);if(T.name!=="photoAvatar"&&!P.get(T.name).match(A)&&A)throw new Error(m.regExp);if(P.get("password")!==P.get("confirmPassword")&&m.password)throw new Error(m.password);Yd(C,T)}catch(N){Na(T,N.message,C)}}}function MI(n,e,t,r,i){i.addEventListener("click",()=>{const s=new FormData(n),a=t.parentElement.querySelector(".error__block");console.log(s);try{if(s.get(e)!=="on")throw new Error(r.check);Yd(a,t)}catch(l){Na(t,l.message,a)}})}function Na(n,e=null,t){if(t)n.parentElement.querySelector(".error__text").textContent=e;else{let r=document.createElement("div");r.classList.add("error__block");let i=`<p class="error__text">${e}</p>`;r.innerHTML=i,n.classList.add("error__input"),n.parentElement.appendChild(r)}cs=!1}function Yd(n,e){n&&(e.classList.remove("error__input"),e.style.border="1px solid $subGreat",n.remove(),cs=!0)}function Xd(n,e){const t=new FormData(n);let r=Array.from(t.values()),i={};for(let s=0;s<r.length;s++)i[e[s]]=r[s]!==void 0?r[s]:null;return i}function eu(n,e,t,r){for(let i=0;i<e.length;i++)n[e[i]]=X(t[i]).textContent.includes(r)?null:X(t[i]).textContent;return n}function xa(n,e){let t="";t+=`<a class="header__top-name-link" href="/nuts/src/pages/personal-cabinet-page.html"><img class="header__top-img" src="" alt="avatar" loading="lazy"/>
            <span class="header__top-name">${n.displayName}</span>               
           </a>
          <button class="header__top-remove-block"
              ><svg class="header__top-remove-svg"><use href="#exit"></use></svg><span class="header__top-remove-text">Вихід</span></button
          >`,e.innerHTML=t,vt(n.photoURL,X(".header__top-img")),II(X(".header__top-authentication-wrapper"),X(".header__top-remove-block"))}function II(n,e){e.addEventListener("click",()=>{window.location.pathname="/nuts/index.html",PI()})}function Jd(n){document.cookie=`${encodeURIComponent("userInfo")}=${encodeURIComponent(JSON.stringify({uid:n.uid,email:n.email,refreshToken:n.refreshToken}))}; path=/; max-age=604800; secure; samesite=strict`}function Zd(n){for(let e of n)e.value=""}var qr;class SI{constructor(){Ws(this,qr)}setUser(e){$s(this,qr,e)}getUser(){return Hs(this,qr)}}qr=new WeakMap;const tu=new SI;let $n,Xe={user:null,errorCode:null,errorMessage:null};function La(n){$n||($n=wI(n))}function FI(n,e,t){return La(n),t.addEventListener("click",()=>{let r=Xd(e,["email","password"]);nE($n,r.email,r.password).then(i=>{Xe.user=i.user,window.location.pathname="/nuts/src/pages/personal-cabinet-page.html",xa(Xe.user,X(".header__top-authentication-wrapper")),Jd(Xe.user),Zd(X(".input__area","all"))}).catch(i=>{const s=X("loginPassword","id");Na(s,"Помилка аундетифікації, перевірте пароль або почту",s.parentElement.querySelector(".error__block"))})}),Xe}function UI(n,e){La(n);let t=Xd(e,["name","email","phone","city","addresses","password","verifyPassword","avatar","personType","requisites","EDRPOUCode","companyLegalCity","companyLegalAddress","companyLegalIndex"]);AI(t),eu(t,["selectCountry","selectRegion"],[".registration__current-country",".registration__current-region"],["Страна","Область","Район","Воєводство","Повіт","Федеральна земля"]),X(".registration__form-legal")&&eu(t,["companyLegalSelectCountry","companyLegalSelectRegion"],[".registration__current-country-legal",".registration__current-region-legal"],["Страна","Область","Район","Воєводство","Повіт","Федеральна земля"]),delete t.personType,console.log(t),tE($n,t.email,t.verifyPassword).then(async r=>{await _g(t.avatar).then(i=>{t.avatar=i}).catch(i=>{console.log(i),t.avatar=null}),Xe.user=r.user,await iE(Xe.user,{displayName:t.name,photoURL:t.avatar,phoneNumber:t.phone}),await eT(n,Xe.user.uid,t),window.location.pathname="/nuts/src/pages/personal-cabinet-page.html",xa(Xe.user,X(".header__top-authentication-wrapper")),Jd(Xe.user),Zd(X(".input__area","all"))}).catch(r=>{Xe.errorCode=r.code,Xe.errorMessage=r.message})}function AI(n){return n.role={person:X(".registration__tab_active").getAttribute("data-tab")==="individual"&&X("form-1","id").classList.contains("registration__body_active"),company:n.personType==="legal-form"&&X(".registration__tab_active").getAttribute("data-tab")==="legal",entrepreneur:n.personType==="fop-form"}}async function bI(n){La(n),aE($n,e=>{e&&(xa(e,window.innerWidth>=768?X(".header__top-authentication-wrapper"):X(".burger__authentication")),tu.getUser()===void 0&&tT(n,"user").then(t=>{const r=t.find(i=>i.email===e.email);tu.setUser(r)}).catch(t=>{console.error("Error fetching user data:",t)}))})}function PI(){lE($n).then(n=>{console.log(n)}).catch(n=>{console.log(n)})}var RI="firebase",CI="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */st(RI,CI,"app");var Hr;class kI{constructor(){Ws(this,Hr);$s(this,Hr,fu({apiKey:"AIzaSyBTca0OO9iCUvryBSKXEcuj2zcsAIbSBUI",authDomain:"nuts-17b69.firebaseapp.com",projectId:"nuts-17b69",storageBucket:"nuts-17b69.appspot.com",messagingSenderId:"989266237693",appId:"1:989266237693:web:814a4d601b3db0dee74694"}))}getApp(){return Hs(this,Hr)}}Hr=new WeakMap;const OI=new kI;document.addEventListener("DOMContentLoaded",async function(){OI.getApp(),vg(),rT(),Af(),await nT(),await bI()});export{vt as a,Pl as b,VI as c,Er as d,Zd as e,OI as f,X as g,UI as h,MI as i,FI as j,tu as k,j_ as o,W_ as s,tT as u};
