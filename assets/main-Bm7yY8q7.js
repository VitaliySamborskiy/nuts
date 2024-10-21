(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bl={exports:{}};(function(n,e){(function(r,i){n.exports=i()})(wi,function(){return function(t){var r={};function i(s){if(r[s])return r[s].exports;var a=r[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=t,i.c=r,i.d=function(s,a,l){i.o(s,a)||Object.defineProperty(s,a,{enumerable:!0,get:l})},i.r=function(s){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})},i.t=function(s,a){if(a&1&&(s=i(s)),a&8||a&4&&typeof s=="object"&&s&&s.__esModule)return s;var l=Object.create(null);if(i.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:s}),a&2&&typeof s!="string")for(var u in s)i.d(l,u,(function(d){return s[d]}).bind(null,u));return l},i.n=function(s){var a=s&&s.__esModule?function(){return s.default}:function(){return s};return i.d(a,"a",a),a},i.o=function(s,a){return Object.prototype.hasOwnProperty.call(s,a)},i.p="",i(i.s=0)}([function(t,r,i){i.r(r);var s=function(y){return Array.isArray(y)?y:[y]},a=function(y){return y instanceof Node},l=function(y){return y instanceof NodeList},u=function(y,x){if(y&&x){y=l(y)?y:[y];for(var F=0;F<y.length&&x(y[F],F,y.length)!==!0;F++);}},d=function(y){return console.error("[scroll-lock] ".concat(y))},g=function(y){if(Array.isArray(y)){var x=y.join(", ");return x}},T=function(y){var x=[];return u(y,function(F){return x.push(F)}),x},b=function(y,x){var F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,j=arguments.length>3&&arguments[3]!==void 0?arguments[3]:document;if(F&&T(j.querySelectorAll(x)).indexOf(y)!==-1)return y;for(;(y=y.parentElement)&&T(j.querySelectorAll(x)).indexOf(y)===-1;);return y},S=function(y,x){var F=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document,j=T(F.querySelectorAll(x)).indexOf(y)!==-1;return j},N=function(y){if(y){var x=getComputedStyle(y),F=x.overflow==="hidden";return F}},U=function(y){if(y){if(N(y))return!0;var x=y.scrollTop;return x<=0}},k=function(y){if(y){if(N(y))return!0;var x=y.scrollTop,F=y.scrollHeight,j=x+y.offsetHeight;return j>=F}},D=function(y){if(y){if(N(y))return!0;var x=y.scrollLeft;return x<=0}},V=function(y){if(y){if(N(y))return!0;var x=y.scrollLeft,F=y.scrollWidth,j=x+y.offsetWidth;return j>=F}},M=function(y){var x='textarea, [contenteditable="true"]';return S(y,x)},G=function(y){var x='input[type="range"]';return S(y,x)};i.d(r,"disablePageScroll",function(){return v}),i.d(r,"enablePageScroll",function(){return w}),i.d(r,"getScrollState",function(){return I}),i.d(r,"clearQueueScrollLocks",function(){return _}),i.d(r,"getTargetScrollBarWidth",function(){return ne}),i.d(r,"getCurrentTargetScrollBarWidth",function(){return Ue}),i.d(r,"getPageScrollBarWidth",function(){return ct}),i.d(r,"getCurrentPageScrollBarWidth",function(){return qe}),i.d(r,"addScrollableTarget",function(){return Fe}),i.d(r,"removeScrollableTarget",function(){return lt}),i.d(r,"addScrollableSelector",function(){return bt}),i.d(r,"removeScrollableSelector",function(){return Kt}),i.d(r,"addLockableTarget",function(){return Ve}),i.d(r,"addLockableSelector",function(){return ce}),i.d(r,"setFillGapMethod",function(){return Ce}),i.d(r,"addFillGapTarget",function(){return ut}),i.d(r,"removeFillGapTarget",function(){return Qr}),i.d(r,"addFillGapSelector",function(){return ht}),i.d(r,"removeFillGapSelector",function(){return Yr}),i.d(r,"refillGaps",function(){return _n});function te(L){for(var y=1;y<arguments.length;y++){var x=arguments[y]!=null?arguments[y]:{},F=Object.keys(x);typeof Object.getOwnPropertySymbols=="function"&&(F=F.concat(Object.getOwnPropertySymbols(x).filter(function(j){return Object.getOwnPropertyDescriptor(x,j).enumerable}))),F.forEach(function(j){Q(L,j,x[j])})}return L}function Q(L,y,x){return y in L?Object.defineProperty(L,y,{value:x,enumerable:!0,configurable:!0,writable:!0}):L[y]=x,L}var E=["padding","margin","width","max-width","none"],p=3,m={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:E[0],startTouchY:0,startTouchX:0},v=function(y){m.queue<=0&&(m.scroll=!1,Rt(),Xn()),Fe(y),m.queue++},w=function(y){m.queue>0&&m.queue--,m.queue<=0&&(m.scroll=!0,yn(),ys()),lt(y)},I=function(){return m.scroll},_=function(){m.queue=0},ne=function(y){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a(y)){var F=y.style.overflowY;x?I()||(y.style.overflowY=y.getAttribute("data-scroll-lock-saved-overflow-y-property")):y.style.overflowY="scroll";var j=Ue(y);return y.style.overflowY=F,j}else return 0},Ue=function(y){if(a(y))if(y===document.body){var x=document.documentElement.clientWidth,F=window.innerWidth,j=F-x;return j}else{var Ge=y.style.borderLeftWidth,Ye=y.style.borderRightWidth;y.style.borderLeftWidth="0px",y.style.borderRightWidth="0px";var Ke=y.offsetWidth-y.clientWidth;return y.style.borderLeftWidth=Ge,y.style.borderRightWidth=Ye,Ke}else return 0},ct=function(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return ne(document.body,y)},qe=function(){return Ue(document.body)},Fe=function(y){if(y){var x=s(y);x.map(function(F){u(F,function(j){a(j)?j.setAttribute("data-scroll-lock-scrollable",""):d('"'.concat(j,'" is not a Element.'))})})}},lt=function(y){if(y){var x=s(y);x.map(function(F){u(F,function(j){a(j)?j.removeAttribute("data-scroll-lock-scrollable"):d('"'.concat(j,'" is not a Element.'))})})}},bt=function(y){if(y){var x=s(y);x.map(function(F){m.scrollableSelectors.push(F)})}},Kt=function(y){if(y){var x=s(y);x.map(function(F){m.scrollableSelectors=m.scrollableSelectors.filter(function(j){return j!==F})})}},Ve=function(y){if(y){var x=s(y);x.map(function(F){u(F,function(j){a(j)?j.setAttribute("data-scroll-lock-lockable",""):d('"'.concat(j,'" is not a Element.'))})}),I()||Rt()}},ce=function(y){if(y){var x=s(y);x.map(function(F){m.lockableSelectors.push(F)}),I()||Rt(),ht(y)}},Ce=function(y){if(y)if(E.indexOf(y)!==-1)m.fillGapMethod=y,_n();else{var x=E.join(", ");d('"'.concat(y,`" method is not available!
Available fill gap methods: `).concat(x,"."))}},ut=function(y){if(y){var x=s(y);x.map(function(F){u(F,function(j){a(j)?(j.setAttribute("data-scroll-lock-fill-gap",""),m.scroll||Jn(j)):d('"'.concat(j,'" is not a Element.'))})})}},Qr=function(y){if(y){var x=s(y);x.map(function(F){u(F,function(j){a(j)?(j.removeAttribute("data-scroll-lock-fill-gap"),m.scroll||En(j)):d('"'.concat(j,'" is not a Element.'))})})}},ht=function(y){if(y){var x=s(y);x.map(function(F){m.fillGapSelectors.indexOf(F)===-1&&(m.fillGapSelectors.push(F),m.scroll||Xr(F))})}},Yr=function(y){if(y){var x=s(y);x.map(function(F){m.fillGapSelectors=m.fillGapSelectors.filter(function(j){return j!==F}),m.scroll||vn(F)})}},_n=function(){m.scroll||Xn()},Rt=function(){var y=g(m.lockableSelectors);Kn(y)},yn=function(){var y=g(m.lockableSelectors);$n(y)},Kn=function(y){var x=document.querySelectorAll(y);u(x,function(F){Qn(F)})},$n=function(y){var x=document.querySelectorAll(y);u(x,function(F){Yn(F)})},Qn=function(y){if(a(y)&&y.getAttribute("data-scroll-lock-locked")!=="true"){var x=window.getComputedStyle(y);y.setAttribute("data-scroll-lock-saved-overflow-y-property",x.overflowY),y.setAttribute("data-scroll-lock-saved-inline-overflow-property",y.style.overflow),y.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",y.style.overflowY),y.style.overflow="hidden",y.setAttribute("data-scroll-lock-locked","true")}},Yn=function(y){a(y)&&y.getAttribute("data-scroll-lock-locked")==="true"&&(y.style.overflow=y.getAttribute("data-scroll-lock-saved-inline-overflow-property"),y.style.overflowY=y.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),y.removeAttribute("data-scroll-lock-saved-overflow-property"),y.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),y.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),y.removeAttribute("data-scroll-lock-locked"))},Xn=function(){m.fillGapSelectors.map(function(y){Xr(y)})},ys=function(){m.fillGapSelectors.map(function(y){vn(y)})},Xr=function(y){var x=document.querySelectorAll(y),F=m.lockableSelectors.indexOf(y)!==-1;u(x,function(j){Jn(j,F)})},Jn=function(y){var x=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(a(y)){var F;if(y.getAttribute("data-scroll-lock-lockable")===""||x)F=ne(y,!0);else{var j=b(y,g(m.lockableSelectors));F=ne(j,!0)}y.getAttribute("data-scroll-lock-filled-gap")==="true"&&En(y);var Ge=window.getComputedStyle(y);if(y.setAttribute("data-scroll-lock-filled-gap","true"),y.setAttribute("data-scroll-lock-current-fill-gap-method",m.fillGapMethod),m.fillGapMethod==="margin"){var Ye=parseFloat(Ge.marginRight);y.style.marginRight="".concat(Ye+F,"px")}else if(m.fillGapMethod==="width")y.style.width="calc(100% - ".concat(F,"px)");else if(m.fillGapMethod==="max-width")y.style.maxWidth="calc(100% - ".concat(F,"px)");else if(m.fillGapMethod==="padding"){var Ke=parseFloat(Ge.paddingRight);y.style.paddingRight="".concat(Ke+F,"px")}}},vn=function(y){var x=document.querySelectorAll(y);u(x,function(F){En(F)})},En=function(y){if(a(y)&&y.getAttribute("data-scroll-lock-filled-gap")==="true"){var x=y.getAttribute("data-scroll-lock-current-fill-gap-method");y.removeAttribute("data-scroll-lock-filled-gap"),y.removeAttribute("data-scroll-lock-current-fill-gap-method"),x==="margin"?y.style.marginRight="":x==="width"?y.style.width="":x==="max-width"?y.style.maxWidth="":x==="padding"&&(y.style.paddingRight="")}},vs=function(y){_n()},Zn=function(y){m.scroll||(m.startTouchY=y.touches[0].clientY,m.startTouchX=y.touches[0].clientX)},er=function(y){if(!m.scroll){var x=m.startTouchY,F=m.startTouchX,j=y.touches[0].clientY,Ge=y.touches[0].clientX;if(y.touches.length<2){var Ye=g(m.scrollableSelectors),Ke={up:x<j,down:x>j,left:F<Ge,right:F>Ge},Tn={up:x+p<j,down:x-p>j,left:F+p<Ge,right:F-p>Ge},Es=function wn(pe){var Zr=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(pe){var dt=b(pe,Ye,!1);if(G(pe))return!1;if(Zr||M(pe)&&b(pe,Ye)||S(pe,Ye)){var St=!1;D(pe)&&V(pe)?(Ke.up&&U(pe)||Ke.down&&k(pe))&&(St=!0):U(pe)&&k(pe)?(Ke.left&&D(pe)||Ke.right&&V(pe))&&(St=!0):(Tn.up&&U(pe)||Tn.down&&k(pe)||Tn.left&&D(pe)||Tn.right&&V(pe))&&(St=!0),St&&(dt?wn(dt,!0):y.cancelable&&y.preventDefault())}else wn(dt)}else y.cancelable&&y.preventDefault()};Es(y.target)}}},Jr=function(y){m.scroll||(m.startTouchY=0,m.startTouchX=0)};typeof window<"u"&&window.addEventListener("resize",vs),typeof document<"u"&&(document.addEventListener("touchstart",Zn),document.addEventListener("touchmove",er,{passive:!1}),document.addEventListener("touchend",Jr));var ve={hide:function(y){d(`"hide" is deprecated! Use "disablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget`),v(y)},show:function(y){d(`"show" is deprecated! Use "enablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget`),w(y)},toggle:function(y){d('"toggle" is deprecated! Do not use it.'),I()?v():w(y)},getState:function(){return d(`"getState" is deprecated! Use "getScrollState" instead. 
 https://github.com/FL3NKEY/scroll-lock#getscrollstate`),I()},getWidth:function(){return d(`"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth`),ct()},getCurrentWidth:function(){return d(`"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth`),qe()},setScrollableTargets:function(y){d(`"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget`),Fe(y)},setFillGapSelectors:function(y){d(`"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector`),ht(y)},setFillGapTargets:function(y){d(`"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget`),ut(y)},clearQueue:function(){d(`"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. 
 https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks`),_()}},Te=te({disablePageScroll:v,enablePageScroll:w,getScrollState:I,clearQueueScrollLocks:_,getTargetScrollBarWidth:ne,getCurrentTargetScrollBarWidth:Ue,getPageScrollBarWidth:ct,getCurrentPageScrollBarWidth:qe,addScrollableSelector:bt,removeScrollableSelector:Kt,addScrollableTarget:Fe,removeScrollableTarget:lt,addLockableSelector:ce,addLockableTarget:Ve,addFillGapSelector:ht,removeFillGapSelector:Yr,addFillGapTarget:ut,removeFillGapTarget:Qr,setFillGapMethod:Ce,refillGaps:_n,_state:m},ve);r.default=Te}]).default})})(bl);var sc=bl.exports;function ae(n,e=null,t=null){switch(e){case"all":return document.querySelectorAll(n);case"id":return document.getElementById(n);case"custom":return t.querySelector(n);case"customAll":return t.querySelectorAll(n);default:return document.querySelector(n)}}function Md(){const n=ae(".burger"),e=ae(".burger__background"),t=ae(".burger__scroll");n.addEventListener("click",r=>{const i=r.target.closest(".burger__icon"),s=r.target.closest(".burger__close");i&&(e.classList.toggle("burger__background_active"),sc.disablePageScroll(t)),s&&(e.classList.remove("burger__background_active"),sc.enablePageScroll(t))})}var Ie=[];for(var Os=0;Os<256;++Os)Ie.push((Os+256).toString(16).slice(1));function Ud(n,e=0){return(Ie[n[e+0]]+Ie[n[e+1]]+Ie[n[e+2]]+Ie[n[e+3]]+"-"+Ie[n[e+4]]+Ie[n[e+5]]+"-"+Ie[n[e+6]]+Ie[n[e+7]]+"-"+Ie[n[e+8]]+Ie[n[e+9]]+"-"+Ie[n[e+10]]+Ie[n[e+11]]+Ie[n[e+12]]+Ie[n[e+13]]+Ie[n[e+14]]+Ie[n[e+15]]).toLowerCase()}var pi,Fd=new Uint8Array(16);function Bd(){if(!pi&&(pi=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!pi))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return pi(Fd)}var jd=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);const oc={randomUUID:jd};function qd(n,e,t){if(oc.randomUUID&&!e&&!n)return oc.randomUUID();n=n||{};var r=n.random||(n.rng||Bd)();return r[6]=r[6]&15|64,r[8]=r[8]&63|128,Ud(r)}var ac={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},zd=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=n[t++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=n[t++],a=n[t++],l=n[t++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=n[t++],a=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Sl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const s=n[i],a=i+1<n.length,l=a?n[i+1]:0,u=i+2<n.length,d=u?n[i+2]:0,g=s>>2,T=(s&3)<<4|l>>4;let b=(l&15)<<2|d>>6,S=d&63;u||(S=64,a||(b=64)),r.push(t[g],t[T],t[b],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Rl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):zd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const s=t[n.charAt(i++)],l=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const T=i<n.length?t[n.charAt(i)]:64;if(++i,s==null||l==null||d==null||T==null)throw new Wd;const b=s<<2|l>>4;if(r.push(b),d!==64){const S=l<<4&240|d>>2;if(r.push(S),T!==64){const N=d<<6&192|T;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Wd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Hd=function(n){const e=Rl(n);return Sl.encodeByteArray(e,!0)},xi=function(n){return Hd(n).replace(/\./g,"")},Pl=function(n){try{return Sl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Gd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Kd=()=>Gd().__FIREBASE_DEFAULTS__,$d=()=>{if(typeof process>"u"||typeof ac>"u")return;const n=ac.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Qd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Pl(n[1]);return e&&JSON.parse(e)},$i=()=>{try{return Kd()||$d()||Qd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Cl=n=>{var e,t;return(t=(e=$i())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},kl=n=>{const e=Cl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Nl=()=>{var n;return(n=$i())===null||n===void 0?void 0:n.config},xl=n=>{var e;return(e=$i())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Dl(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,s=n.sub||n.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},n);return[xi(JSON.stringify(t)),xi(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Jd(){var n;const e=(n=$i())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ef(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tf(){const n=Se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function nf(){return!Jd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function rf(){try{return typeof indexedDB=="object"}catch{return!1}}function sf(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const of="FirebaseError";class at extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=of,Object.setPrototypeOf(this,at.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lr.prototype.create)}}class Lr{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?af(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new at(i,l,r)}}function af(n,e){return n.replace(cf,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const cf=/\{\$([^}]+)}/g;function lf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Di(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const s=n[i],a=e[i];if(cc(s)&&cc(a)){if(!Di(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function cc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function mr(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function gr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function uf(n,e){const t=new hf(n,e);return t.subscribe.bind(t)}class hf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");df(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Vs),i.error===void 0&&(i.error=Vs),i.complete===void 0&&(i.complete=Vs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function df(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Vs(){}/**
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
 */function le(n){return n&&n._delegate?n._delegate:n}class jt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jt="[DEFAULT]";/**
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
 */class ff{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Yd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mf(e))try{this.getOrInitializeService({instanceIdentifier:Jt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Jt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jt){return this.instances.has(e)}getOptions(e=Jt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:pf(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jt){return this.component?this.component.multipleInstances?e:Jt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function pf(n){return n===Jt?void 0:n}function mf(n){return n.instantiationMode==="EAGER"}/**
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
 */class gf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ff(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(X||(X={}));const _f={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},yf=X.INFO,vf={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Ef=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=vf[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vo{constructor(e){this.name=e,this._logLevel=yf,this._logHandler=Ef,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?_f[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Tf=(n,e)=>e.some(t=>n instanceof t);let lc,uc;function wf(){return lc||(lc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function If(){return uc||(uc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ol=new WeakMap,$s=new WeakMap,Vl=new WeakMap,Ls=new WeakMap,Eo=new WeakMap;function Af(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",s),n.removeEventListener("error",a)},s=()=>{t(Ut(n.result)),i()},a=()=>{r(n.error),i()};n.addEventListener("success",s),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Ol.set(t,n)}).catch(()=>{}),Eo.set(e,n),e}function bf(n){if($s.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",s),n.removeEventListener("error",a),n.removeEventListener("abort",a)},s=()=>{t(),i()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",s),n.addEventListener("error",a),n.addEventListener("abort",a)});$s.set(n,e)}let Qs={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return $s.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Vl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ut(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Rf(n){Qs=n(Qs)}function Sf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ms(this),e,...t);return Vl.set(r,e.sort?e.sort():[e]),Ut(r)}:If().includes(n)?function(...e){return n.apply(Ms(this),e),Ut(Ol.get(this))}:function(...e){return Ut(n.apply(Ms(this),e))}}function Pf(n){return typeof n=="function"?Sf(n):(n instanceof IDBTransaction&&bf(n),Tf(n,wf())?new Proxy(n,Qs):n)}function Ut(n){if(n instanceof IDBRequest)return Af(n);if(Ls.has(n))return Ls.get(n);const e=Pf(n);return e!==n&&(Ls.set(n,e),Eo.set(e,n)),e}const Ms=n=>Eo.get(n);function Cf(n,e,{blocked:t,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(n,e),l=Ut(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Ut(a.result),u.oldVersion,u.newVersion,Ut(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const kf=["get","getKey","getAll","getAllKeys","count"],Nf=["put","add","delete","clear"],Us=new Map;function hc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Us.get(e))return Us.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Nf.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||kf.includes(t)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[t](...l),i&&u.done]))[0]};return Us.set(e,s),s}Rf(n=>({...n,get:(e,t,r)=>hc(e,t)||n.get(e,t,r),has:(e,t)=>!!hc(e,t)||n.has(e,t)}));/**
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
 */class xf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Df(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Df(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ys="@firebase/app",dc="0.10.8";/**
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
 */const rn=new vo("@firebase/app"),Of="@firebase/app-compat",Vf="@firebase/analytics-compat",Lf="@firebase/analytics",Mf="@firebase/app-check-compat",Uf="@firebase/app-check",Ff="@firebase/auth",Bf="@firebase/auth-compat",jf="@firebase/database",qf="@firebase/database-compat",zf="@firebase/functions",Wf="@firebase/functions-compat",Hf="@firebase/installations",Gf="@firebase/installations-compat",Kf="@firebase/messaging",$f="@firebase/messaging-compat",Qf="@firebase/performance",Yf="@firebase/performance-compat",Xf="@firebase/remote-config",Jf="@firebase/remote-config-compat",Zf="@firebase/storage",ep="@firebase/storage-compat",tp="@firebase/firestore",np="@firebase/vertexai-preview",rp="@firebase/firestore-compat",ip="firebase",sp="10.12.5";/**
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
 */const Xs="[DEFAULT]",op={[Ys]:"fire-core",[Of]:"fire-core-compat",[Lf]:"fire-analytics",[Vf]:"fire-analytics-compat",[Uf]:"fire-app-check",[Mf]:"fire-app-check-compat",[Ff]:"fire-auth",[Bf]:"fire-auth-compat",[jf]:"fire-rtdb",[qf]:"fire-rtdb-compat",[zf]:"fire-fn",[Wf]:"fire-fn-compat",[Hf]:"fire-iid",[Gf]:"fire-iid-compat",[Kf]:"fire-fcm",[$f]:"fire-fcm-compat",[Qf]:"fire-perf",[Yf]:"fire-perf-compat",[Xf]:"fire-rc",[Jf]:"fire-rc-compat",[Zf]:"fire-gcs",[ep]:"fire-gcs-compat",[tp]:"fire-fst",[rp]:"fire-fst-compat",[np]:"fire-vertex","fire-js":"fire-js",[ip]:"fire-js-all"};/**
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
 */const Oi=new Map,ap=new Map,Js=new Map;function fc(n,e){try{n.container.addComponent(e)}catch(t){rn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function sn(n){const e=n.name;if(Js.has(e))return rn.debug(`There were multiple attempts to register component ${e}.`),!1;Js.set(e,n);for(const t of Oi.values())fc(t,n);for(const t of ap.values())fc(t,n);return!0}function Qi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Xe(n){return n.settings!==void 0}/**
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
 */const cp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ft=new Lr("app","Firebase",cp);/**
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
 */class lp{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new jt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ft.create("app-deleted",{appName:this._name})}}/**
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
 */const fn=sp;function Ll(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xs,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ft.create("bad-app-name",{appName:String(i)});if(t||(t=Nl()),!t)throw Ft.create("no-options");const s=Oi.get(i);if(s){if(Di(t,s.options)&&Di(r,s.config))return s;throw Ft.create("duplicate-app",{appName:i})}const a=new gf(i);for(const u of Js.values())a.addComponent(u);const l=new lp(t,r,a);return Oi.set(i,l),l}function To(n=Xs){const e=Oi.get(n);if(!e&&n===Xs&&Nl())return Ll();if(!e)throw Ft.create("no-app",{appName:n});return e}function Ze(n,e,t){var r;let i=(r=op[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rn.warn(l.join(" "));return}sn(new jt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const up="firebase-heartbeat-database",hp=1,Pr="firebase-heartbeat-store";let Fs=null;function Ml(){return Fs||(Fs=Cf(up,hp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Pr)}catch(t){console.warn(t)}}}}).catch(n=>{throw Ft.create("idb-open",{originalErrorMessage:n.message})})),Fs}async function dp(n){try{const t=(await Ml()).transaction(Pr),r=await t.objectStore(Pr).get(Ul(n));return await t.done,r}catch(e){if(e instanceof at)rn.warn(e.message);else{const t=Ft.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rn.warn(t.message)}}}async function pc(n,e){try{const r=(await Ml()).transaction(Pr,"readwrite");await r.objectStore(Pr).put(e,Ul(n)),await r.done}catch(t){if(t instanceof at)rn.warn(t.message);else{const r=Ft.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});rn.warn(r.message)}}}function Ul(n){return`${n.name}!${n.options.appId}`}/**
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
 */const fp=1024,pp=30*24*60*60*1e3;class mp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new _p(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=mc();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=pp}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=mc(),{heartbeatsToSend:r,unsentEntries:i}=gp(this._heartbeatsCache.heartbeats),s=xi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function mc(){return new Date().toISOString().substring(0,10)}function gp(n,e=fp){const t=[];let r=n.slice();for(const i of n){const s=t.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),gc(t)>e){s.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),gc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class _p{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rf()?sf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await dp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return pc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return pc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gc(n){return xi(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function yp(n){sn(new jt("platform-logger",e=>new xf(e),"PRIVATE")),sn(new jt("heartbeat",e=>new mp(e),"PRIVATE")),Ze(Ys,dc,n),Ze(Ys,dc,"esm2017"),Ze("fire-js","")}yp("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fl="firebasestorage.googleapis.com",Bl="storageBucket",vp=2*60*1e3,Ep=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe extends at{constructor(e,t,r=0){super(Bs(e),`Firebase Storage: ${t} (${Bs(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,fe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Bs(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var de;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(de||(de={}));function Bs(n){return"storage/"+n}function wo(){const n="An unknown error occurred, please check the error payload for server response.";return new fe(de.UNKNOWN,n)}function Tp(n){return new fe(de.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function wp(n){return new fe(de.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Ip(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new fe(de.UNAUTHENTICATED,n)}function Ap(){return new fe(de.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function bp(n){return new fe(de.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function Rp(){return new fe(de.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Sp(){return new fe(de.CANCELED,"User canceled the upload/download.")}function Pp(n){return new fe(de.INVALID_URL,"Invalid URL '"+n+"'.")}function Cp(n){return new fe(de.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function kp(){return new fe(de.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Bl+"' property when initializing the app?")}function Np(){return new fe(de.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function xp(){return new fe(de.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Dp(n){return new fe(de.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Zs(n){return new fe(de.INVALID_ARGUMENT,n)}function jl(){return new fe(de.APP_DELETED,"The Firebase app was deleted.")}function Op(n){return new fe(de.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wr(n,e){return new fe(de.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function fr(n){throw new fe(de.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=We.makeFromUrl(e,t)}catch{return new We(e,"")}if(r.path==="")return r;throw Cp(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(G){G.path.charAt(G.path.length-1)==="/"&&(G.path_=G.path_.slice(0,-1))}const a="(/(.*))?$",l=new RegExp("^gs://"+i+a,"i"),u={bucket:1,path:3};function d(G){G.path_=decodeURIComponent(G.path)}const g="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),b="(/([^?#]*).*)?$",S=new RegExp(`^https?://${T}/${g}/b/${i}/o${b}`,"i"),N={bucket:1,path:3},U=t===Fl?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",D=new RegExp(`^https?://${U}/${i}/${k}`,"i"),M=[{regex:l,indices:u,postModify:s},{regex:S,indices:N,postModify:d},{regex:D,indices:{bucket:1,path:2},postModify:d}];for(let G=0;G<M.length;G++){const te=M[G],Q=te.regex.exec(e);if(Q){const E=Q[te.indices.bucket];let p=Q[te.indices.path];p||(p=""),r=new We(E,p),te.postModify(r);break}}if(r==null)throw Pp(e);return r}}class Vp{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lp(n,e,t){let r=1,i=null,s=null,a=!1,l=0;function u(){return l===2}let d=!1;function g(...k){d||(d=!0,e.apply(null,k))}function T(k){i=setTimeout(()=>{i=null,n(S,u())},k)}function b(){s&&clearTimeout(s)}function S(k,...D){if(d){b();return}if(k){b(),g.call(null,k,...D);return}if(u()||a){b(),g.call(null,k,...D);return}r<64&&(r*=2);let M;l===1?(l=2,M=0):M=(r+Math.random())*1e3,T(M)}let N=!1;function U(k){N||(N=!0,b(),!d&&(i!==null?(k||(l=2),clearTimeout(i),T(0)):k||(l=1)))}return T(0),s=setTimeout(()=>{a=!0,U(!0)},t),U}function Mp(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(n){return n!==void 0}function Fp(n){return typeof n=="object"&&!Array.isArray(n)}function Io(n){return typeof n=="string"||n instanceof String}function _c(n){return Ao()&&n instanceof Blob}function Ao(){return typeof Blob<"u"}function yc(n,e,t,r){if(r<e)throw Zs(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Zs(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(n,e,t){let r=e;return t==null&&(r=`https://${e}`),`${t}://${r}/v0${n}`}function ql(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(tn||(tn={}));/**
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
 */function Bp(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,s=e.indexOf(n)!==-1;return t||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e,t,r,i,s,a,l,u,d,g,T,b=!0){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=a,this.callback_=l,this.errorCallback_=u,this.timeout_=d,this.progressCallback_=g,this.connectionFactory_=T,this.retry=b,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((S,N)=>{this.resolve_=S,this.reject_=N,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new mi(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const a=l=>{const u=l.loaded,d=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,d)};this.progressCallback_!==null&&s.addUploadProgressListener(a),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(a),this.pendingConnection_=null;const l=s.getErrorCode()===tn.NO_ERROR,u=s.getStatus();if(!l||Bp(u,this.additionalRetryCodes_)&&this.retry){const g=s.getErrorCode()===tn.ABORT;r(!1,new mi(!1,null,g));return}const d=this.successCodes_.indexOf(u)!==-1;r(!0,new mi(d,s))})},t=(r,i)=>{const s=this.resolve_,a=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Up(u)?s(u):s()}catch(u){a(u)}else if(l!==null){const u=wo();u.serverResponse=l.getErrorText(),this.errorCallback_?a(this.errorCallback_(l,u)):a(u)}else if(i.canceled){const u=this.appDelete_?jl():Sp();a(u)}else{const u=Rp();a(u)}};this.canceled_?t(!1,new mi(!1,null,!0)):this.backoffId_=Lp(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Mp(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class mi{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function qp(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function zp(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Wp(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Hp(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Gp(n,e,t,r,i,s,a=!0){const l=ql(n.urlParams),u=n.url+l,d=Object.assign({},n.headers);return Wp(d,e),qp(d,t),zp(d,s),Hp(d,r),new jp(u,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function $p(...n){const e=Kp();if(e!==void 0){const t=new e;for(let r=0;r<n.length;r++)t.append(n[r]);return t.getBlob()}else{if(Ao())return new Blob(n);throw new fe(de.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Qp(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
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
 */function Yp(n){if(typeof atob>"u")throw Dp("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class js{constructor(e,t){this.data=e,this.contentType=t||null}}function Xp(n,e){switch(n){case Je.RAW:return new js(zl(e));case Je.BASE64:case Je.BASE64URL:return new js(Wl(n,e));case Je.DATA_URL:return new js(Zp(e),em(e))}throw wo()}function zl(n){const e=[];for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const s=r,a=n.charCodeAt(++t);r=65536|(s&1023)<<10|a&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Jp(n){let e;try{e=decodeURIComponent(n)}catch{throw wr(Je.DATA_URL,"Malformed data URL.")}return zl(e)}function Wl(n,e){switch(n){case Je.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw wr(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Je.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw wr(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Yp(e)}catch(i){throw i.message.includes("polyfill")?i:wr(n,"Invalid character found")}const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}class Hl{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw wr(Je.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=t[1]||null;r!=null&&(this.base64=tm(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Zp(n){const e=new Hl(n);return e.base64?Wl(Je.BASE64,e.rest):Jp(e.rest)}function em(n){return new Hl(n).contentType}function tm(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e,t){let r=0,i="";_c(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(_c(this.data_)){const r=this.data_,i=Qp(r,e,t);return i===null?null:new xt(i)}else{const r=new Uint8Array(this.data_.buffer,e,t-e);return new xt(r,!0)}}static getBlob(...e){if(Ao()){const t=e.map(r=>r instanceof xt?r.data_:r);return new xt($p.apply(null,t))}else{const t=e.map(a=>Io(a)?Xp(Je.RAW,a).data:a.data_);let r=0;t.forEach(a=>{r+=a.byteLength});const i=new Uint8Array(r);let s=0;return t.forEach(a=>{for(let l=0;l<a.length;l++)i[s++]=a[l]}),new xt(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl(n){let e;try{e=JSON.parse(n)}catch{return null}return Fp(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function rm(n,e){const t=e.split("/").filter(r=>r.length>0).join("/");return n.length===0?t:n+"/"+t}function Kl(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(n,e){return e}class Me{constructor(e,t,r,i){this.server=e,this.local=t||e,this.writable=!!r,this.xform=i||im}}let gi=null;function sm(n){return!Io(n)||n.length<2?n:Kl(n)}function $l(){if(gi)return gi;const n=[];n.push(new Me("bucket")),n.push(new Me("generation")),n.push(new Me("metageneration")),n.push(new Me("name","fullPath",!0));function e(s,a){return sm(a)}const t=new Me("name");t.xform=e,n.push(t);function r(s,a){return a!==void 0?Number(a):a}const i=new Me("size");return i.xform=r,n.push(i),n.push(new Me("timeCreated")),n.push(new Me("updated")),n.push(new Me("md5Hash",null,!0)),n.push(new Me("cacheControl",null,!0)),n.push(new Me("contentDisposition",null,!0)),n.push(new Me("contentEncoding",null,!0)),n.push(new Me("contentLanguage",null,!0)),n.push(new Me("contentType",null,!0)),n.push(new Me("metadata","customMetadata",!0)),gi=n,gi}function om(n,e){function t(){const r=n.bucket,i=n.fullPath,s=new We(r,i);return e._makeStorageReference(s)}Object.defineProperty(n,"ref",{get:t})}function am(n,e,t){const r={};r.type="file";const i=t.length;for(let s=0;s<i;s++){const a=t[s];r[a.local]=a.xform(r,e[a.server])}return om(r,n),r}function Ql(n,e,t){const r=Gl(e);return r===null?null:am(n,r,t)}function cm(n,e,t,r){const i=Gl(e);if(i===null||!Io(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const a=encodeURIComponent;return s.split(",").map(d=>{const g=n.bucket,T=n.fullPath,b="/b/"+a(g)+"/o/"+a(T),S=Yi(b,t,r),N=ql({alt:"media",token:d});return S+N})[0]}function lm(n,e){const t={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(t[s.server]=n[s.local])}return JSON.stringify(t)}class bo{constructor(e,t,r,i){this.url=e,this.method=t,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(n){if(!n)throw wo()}function um(n,e){function t(r,i){const s=Ql(n,i,e);return Yl(s!==null),s}return t}function hm(n,e){function t(r,i){const s=Ql(n,i,e);return Yl(s!==null),cm(s,i,n.host,n._protocol)}return t}function Xl(n){function e(t,r){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=Ap():i=Ip():t.getStatus()===402?i=wp(n.bucket):t.getStatus()===403?i=bp(n.path):i=r,i.status=t.getStatus(),i.serverResponse=r.serverResponse,i}return e}function Jl(n){const e=Xl(n);function t(r,i){let s=e(r,i);return r.getStatus()===404&&(s=Tp(n.path)),s.serverResponse=i.serverResponse,s}return t}function dm(n,e,t){const r=e.fullServerUrl(),i=Yi(r,n.host,n._protocol),s="GET",a=n.maxOperationRetryTime,l=new bo(i,s,hm(n,t),a);return l.errorHandler=Jl(e),l}function fm(n,e){const t=e.fullServerUrl(),r=Yi(t,n.host,n._protocol),i="DELETE",s=n.maxOperationRetryTime;function a(u,d){}const l=new bo(r,i,a,s);return l.successCodes=[200,204],l.errorHandler=Jl(e),l}function pm(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function mm(n,e,t){const r=Object.assign({},t);return r.fullPath=n.path,r.size=e.size(),r.contentType||(r.contentType=pm(null,e)),r}function gm(n,e,t,r,i){const s=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function l(){let M="";for(let G=0;G<2;G++)M=M+Math.random().toString().slice(2);return M}const u=l();a["Content-Type"]="multipart/related; boundary="+u;const d=mm(e,r,i),g=lm(d,t),T="--"+u+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+g+`\r
--`+u+`\r
Content-Type: `+d.contentType+`\r
\r
`,b=`\r
--`+u+"--",S=xt.getBlob(T,r,b);if(S===null)throw Np();const N={name:d.fullPath},U=Yi(s,n.host,n._protocol),k="POST",D=n.maxUploadRetryTime,V=new bo(U,k,um(n,t),D);return V.urlParams=N,V.headers=a,V.body=S.uploadData(),V.errorHandler=Xl(e),V}class _m{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=tn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=tn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=tn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,r,i){if(this.sent_)throw fr("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw fr("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw fr("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw fr("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw fr("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ym extends _m{initXhr(){this.xhr_.responseType="text"}}function Ro(){return new ym}/**
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
 */class on{constructor(e,t){this._service=e,t instanceof We?this._location=t:this._location=We.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new on(e,t)}get root(){const e=new We(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Kl(this._location.path)}get storage(){return this._service}get parent(){const e=nm(this._location.path);if(e===null)return null;const t=new We(this._location.bucket,e);return new on(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Op(e)}}function vm(n,e,t){n._throwIfRoot("uploadBytes");const r=gm(n.storage,n._location,$l(),new xt(e,!0),t);return n.storage.makeRequestWithTokens(r,Ro).then(i=>({metadata:i,ref:n}))}function Em(n){n._throwIfRoot("getDownloadURL");const e=dm(n.storage,n._location,$l());return n.storage.makeRequestWithTokens(e,Ro).then(t=>{if(t===null)throw xp();return t})}function Tm(n){n._throwIfRoot("deleteObject");const e=fm(n.storage,n._location);return n.storage.makeRequestWithTokens(e,Ro)}function wm(n,e){const t=rm(n._location.path,e),r=new We(n._location.bucket,t);return new on(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(n){return/^[A-Za-z]+:\/\//.test(n)}function Am(n,e){return new on(n,e)}function Zl(n,e){if(n instanceof So){const t=n;if(t._bucket==null)throw kp();const r=new on(t,t._bucket);return e!=null?Zl(r,e):r}else return e!==void 0?wm(n,e):n}function bm(n,e){if(e&&Im(e)){if(n instanceof So)return Am(n,e);throw Zs("To use ref(service, url), the first argument must be a Storage instance.")}else return Zl(n,e)}function vc(n,e){const t=e==null?void 0:e[Bl];return t==null?null:We.makeFromBucketSpec(t,n)}function Rm(n,e,t,r={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=r;i&&(n._overrideAuthToken=typeof i=="string"?i:Dl(i,n.app.options.projectId))}class So{constructor(e,t,r,i,s){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Fl,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=vp,this._maxUploadRetryTime=Ep,this._requests=new Set,i!=null?this._bucket=We.makeFromBucketSpec(i,this._host):this._bucket=vc(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=We.makeFromBucketSpec(this._url,e):this._bucket=vc(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){yc("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){yc("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new on(this,e)}_makeRequest(e,t,r,i,s=!0){if(this._deleted)return new Vp(jl());{const a=Gp(e,this._appId,r,i,t,this._firebaseVersion,s);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const Ec="@firebase/storage",Tc="0.12.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eu="storage";function Sm(n,e,t){return n=le(n),vm(n,e,t)}function tu(n){return n=le(n),Em(n)}function Pm(n){return n=le(n),Tm(n)}function Po(n,e){return n=le(n),bm(n,e)}function Co(n=To(),e){n=le(n);const r=Qi(n,eu).getImmediate({identifier:e}),i=kl("storage");return i&&Cm(r,...i),r}function Cm(n,e,t,r={}){Rm(n,e,t,r)}function km(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new So(t,r,i,e,fn)}function Nm(){sn(new jt(eu,km,"PUBLIC").setMultipleInstances(!0)),Ze(Ec,Tc,""),Ze(Ec,Tc,"esm2017")}Nm();function _r(n,e){const t=Co(),r=Po(t,n);tu(r).then(i=>{e.src=i}).catch(i=>{console.log(i)})}async function xm(n){let e="";const t=Co(),r=Po(t,`/users_avatar/${Dm(n.name)}`);try{const i=await Sm(r,n);return e=await tu(i.ref),console.log(`File uploaded successfully. URL: ${e}`),e}catch(i){console.error(`Error uploading file: ${i}`)}return e}function Dm(n){const e=qd(),t=n.split(".").pop();return`${e}.${t}`}function fE(n){const e=Co(),t=Po(e,n);Pm(t).then(r=>{console.log(r)}).catch(r=>{console.log(r)})}function Om(){_r("logo-1.svg",ae(".header__center-logo")),_r("logo-1.svg",ae(".burger__logo-img")),_r("user.svg",ae(".header__top-img")),_r("user.svg",ae(".burger__img"))}function Vm(n,e){e.forEach(i=>{const s=i.querySelector(".select__svg"),a=i.querySelector(".select__header");i.addEventListener("click",l=>{const u=l.target.closest(".select__header"),d=l.target.closest(".select__item"),g=i.querySelector(".select__body");u&&t(u,g,s),d&&(t(a,g,s),n.forEach(T=>{T.textContent=d.textContent}))}),document.addEventListener("click",l=>{const u=i.querySelector(".select__body");i.contains(l.target)||r(a,u,s)})});function t(i,s,a){i.classList.toggle("select__header-active"),s.classList.toggle("select__body-active"),a.classList.toggle("select__svg-active")}function r(i,s,a){i.classList.remove("select__header-active"),s.classList.remove("select__body-active"),a.classList.remove("select__svg-active")}}function Lm(){Vm(ae(".header__select-language","all"),ae(".header__select","all"))}function ko(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function nu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Mm=nu,ru=new Lr("auth","Firebase",nu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi=new vo("@firebase/auth");function Um(n,...e){Vi.logLevel<=X.WARN&&Vi.warn(`Auth (${fn}): ${n}`,...e)}function Ii(n,...e){Vi.logLevel<=X.ERROR&&Vi.error(`Auth (${fn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(n,...e){throw No(n,...e)}function et(n,...e){return No(n,...e)}function iu(n,e,t){const r=Object.assign(Object.assign({},Mm()),{[e]:t});return new Lr("auth","Firebase",r).create(e,{appName:n.name})}function yt(n){return iu(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function No(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ru.create(n,...e)}function W(n,e,...t){if(!n)throw No(e,...t)}function mt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ii(e),new Error(e)}function Et(n,e){n||mt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Fm(){return wc()==="http:"||wc()==="https:"}function wc(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Fm()||Zd()||"connection"in navigator)?navigator.onLine:!0}function jm(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(e,t){this.shortDelay=e,this.longDelay=t,Et(t>e,"Short delay should be less than long delay!"),this.isMobile=Xd()||ef()}get(){return Bm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(n,e){Et(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=new Ur(3e4,6e4);function Ht(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function At(n,e,t,r,i={}){return ou(n,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=Mr(Object.assign({key:n.config.apiKey},a)).slice(1),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode),su.fetch()(au(n,n.config.apiHost,t,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function ou(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},qm),e);try{const i=new Hm(n),s=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw _i(n,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw _i(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw _i(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw _i(n,"user-disabled",a);const g=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw iu(n,g,d);Qe(n,g)}}catch(i){if(i instanceof at)throw i;Qe(n,"network-request-failed",{message:String(i)})}}async function Fr(n,e,t,r,i={}){const s=await At(n,e,t,r,i);return"mfaPendingCredential"in s&&Qe(n,"multi-factor-auth-required",{_serverResponse:s}),s}function au(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?xo(n.config,i):`${n.config.apiScheme}://${i}`}function Wm(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Hm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(et(this.auth,"network-request-failed")),zm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _i(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=et(n,e,r);return i.customData._tokenResponse=t,i}function Ic(n){return n!==void 0&&n.enterprise!==void 0}class Gm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Wm(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Km(n,e){return At(n,"GET","/v2/recaptchaConfig",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $m(n,e){return At(n,"POST","/v1/accounts:delete",e)}async function cu(n,e){return At(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qm(n,e=!1){const t=le(n),r=await t.getIdToken(e),i=Do(r);W(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ir(qs(i.auth_time)),issuedAtTime:Ir(qs(i.iat)),expirationTime:Ir(qs(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function qs(n){return Number(n)*1e3}function Do(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ii("JWT malformed, contained fewer than 3 sections"),null;try{const i=Pl(t);return i?JSON.parse(i):(Ii("Failed to decode base64 JWT payload"),null)}catch(i){return Ii("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ac(n){const e=Do(n);return W(e,"internal-error"),W(typeof e.exp<"u","internal-error"),W(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof at&&Ym(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Ym({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ir(this.lastLoginAt),this.creationTime=Ir(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Li(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Vn(n,cu(t,{idToken:r}));W(i==null?void 0:i.users.length,t,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?lu(s.providerUserInfo):[],l=Zm(n.providerData,a),u=n.isAnonymous,d=!(n.email&&s.passwordHash)&&!(l!=null&&l.length),g=u?d:!1,T={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new to(s.createdAt,s.lastLoginAt),isAnonymous:g};Object.assign(n,T)}async function Jm(n){const e=le(n);await Li(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Zm(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function lu(n){return n.map(e=>{var{providerId:t}=e,r=ko(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eg(n,e){const t=await ou(n,{},async()=>{const r=Mr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,a=au(n,i,"/v1/token",`key=${s}`),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",su.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function tg(n,e){return At(n,"POST","/v2/accounts:revokeToken",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){W(e.idToken,"internal-error"),W(typeof e.idToken<"u","internal-error"),W(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ac(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){W(e.length!==0,"internal-error");const t=Ac(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(W(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:s}=await eg(e,t);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:s}=t,a=new Nn;return r&&(W(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Nn,this.toJSON())}_performRefresh(){return mt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(n,e){W(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class gt{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,s=ko(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Xm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new to(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Vn(this,this.stsTokenManager.getToken(this.auth,e));return W(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Qm(this,e)}reload(){return Jm(this)}_assign(e){this!==e&&(W(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new gt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Li(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xe(this.auth.app))return Promise.reject(yt(this.auth));const e=await this.getIdToken();return await Vn(this,$m(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,s,a,l,u,d,g;const T=(r=t.displayName)!==null&&r!==void 0?r:void 0,b=(i=t.email)!==null&&i!==void 0?i:void 0,S=(s=t.phoneNumber)!==null&&s!==void 0?s:void 0,N=(a=t.photoURL)!==null&&a!==void 0?a:void 0,U=(l=t.tenantId)!==null&&l!==void 0?l:void 0,k=(u=t._redirectEventId)!==null&&u!==void 0?u:void 0,D=(d=t.createdAt)!==null&&d!==void 0?d:void 0,V=(g=t.lastLoginAt)!==null&&g!==void 0?g:void 0,{uid:M,emailVerified:G,isAnonymous:te,providerData:Q,stsTokenManager:E}=t;W(M&&E,e,"internal-error");const p=Nn.fromJSON(this.name,E);W(typeof M=="string",e,"internal-error"),Nt(T,e.name),Nt(b,e.name),W(typeof G=="boolean",e,"internal-error"),W(typeof te=="boolean",e,"internal-error"),Nt(S,e.name),Nt(N,e.name),Nt(U,e.name),Nt(k,e.name),Nt(D,e.name),Nt(V,e.name);const m=new gt({uid:M,auth:e,email:b,emailVerified:G,displayName:T,isAnonymous:te,photoURL:N,phoneNumber:S,tenantId:U,stsTokenManager:p,createdAt:D,lastLoginAt:V});return Q&&Array.isArray(Q)&&(m.providerData=Q.map(v=>Object.assign({},v))),k&&(m._redirectEventId=k),m}static async _fromIdTokenResponse(e,t,r=!1){const i=new Nn;i.updateFromServerResponse(t);const s=new gt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Li(s),s}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];W(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?lu(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Nn;l.updateFromIdToken(r);const u=new gt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new to(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=new Map;function _t(n){Et(n instanceof Function,"Expected a class definition");let e=bc.get(n);return e?(Et(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,bc.set(n,e),e)}/**
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
 */class uu{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}uu.type="NONE";const Rc=uu;/**
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
 */function Ai(n,e,t){return`firebase:${n}:${e}:${t}`}class xn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ai(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ai("persistence",i.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?gt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new xn(_t(Rc),e,r);const i=(await Promise.all(t.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||_t(Rc);const a=Ai(r,e.config.apiKey,e.name);let l=null;for(const d of t)try{const g=await d._get(a);if(g){const T=gt._fromJSON(e,g);d!==s&&(l=T),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new xn(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(t.map(async d=>{if(d!==s)try{await d._remove(a)}catch{}})),new xn(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(fu(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(hu(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mu(e))return"Blackberry";if(gu(e))return"Webos";if(Oo(e))return"Safari";if((e.includes("chrome/")||du(e))&&!e.includes("edge/"))return"Chrome";if(pu(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function hu(n=Se()){return/firefox\//i.test(n)}function Oo(n=Se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function du(n=Se()){return/crios\//i.test(n)}function fu(n=Se()){return/iemobile/i.test(n)}function pu(n=Se()){return/android/i.test(n)}function mu(n=Se()){return/blackberry/i.test(n)}function gu(n=Se()){return/webos/i.test(n)}function Xi(n=Se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ng(n=Se()){var e;return Xi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function rg(){return tf()&&document.documentMode===10}function _u(n=Se()){return Xi(n)||pu(n)||gu(n)||mu(n)||/windows phone/i.test(n)||fu(n)}function ig(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(n,e=[]){let t;switch(n){case"Browser":t=Sc(Se());break;case"Worker":t=`${Sc(Se())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${fn}/${r}`}/**
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
 */class sg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function og(n,e={}){return At(n,"GET","/v2/passwordPolicy",Ht(n,e))}/**
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
 */const ag=6;class cg{constructor(e){var t,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:ag,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(t=u.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Pc(this),this.idTokenSubscription=new Pc(this),this.beforeStateQueue=new sg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ru,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_t(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await cu(this,{idToken:e}),r=await gt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Xe(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Li(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jm()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xe(this.app))return Promise.reject(yt(this));const t=e?le(e):null;return t&&W(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&W(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xe(this.app)?Promise.reject(yt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xe(this.app)?Promise.reject(yt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await og(this),t=new cg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Lr("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await tg(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_t(e)||this._popupRedirectResolver;W(t,this,"argument-error"),this.redirectPersistenceManager=await xn.create(this,[_t(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(W(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=yu(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Um(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function pn(n){return le(n)}class Pc{constructor(e){this.auth=e,this.observer=null,this.addObserver=uf(t=>this.observer=t)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ji={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ug(n){Ji=n}function vu(n){return Ji.loadJS(n)}function hg(){return Ji.recaptchaEnterpriseScript}function dg(){return Ji.gapiScript}function fg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const pg="recaptcha-enterprise",mg="NO_RECAPTCHA";class gg{constructor(e){this.type=pg,this.auth=pn(e)}async verify(e="verify",t=!1){async function r(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,l)=>{Km(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new Gm(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,a(d.siteKey)}}).catch(u=>{l(u)})})}function i(s,a,l){const u=window.grecaptcha;Ic(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{a(d)}).catch(()=>{a(mg)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(l=>{if(!t&&Ic(window.grecaptcha))i(l,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=hg();u.length!==0&&(u+=l),vu(u).then(()=>{i(l,s,a)}).catch(d=>{a(d)})}}).catch(l=>{a(l)})})}}async function Cc(n,e,t,r=!1){const i=new gg(n);let s;try{s=await i.verify(t)}catch{s=await i.verify(t,!0)}const a=Object.assign({},e);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function no(n,e,t,r){var i;if(!((i=n._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Cc(n,e,t,t==="getOobCode");return r(n,s)}else return r(n,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await Cc(n,e,t,t==="getOobCode");return r(n,a)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(n,e){const t=Qi(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),s=t.getOptions();if(Di(s,e??{}))return i;Qe(i,"already-initialized")}return t.initialize({options:e})}function yg(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(_t);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vg(n,e,t){const r=pn(n);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Eu(e),{host:a,port:l}=Eg(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Tg()}function Eu(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Eg(n){const e=Eu(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:kc(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:kc(a)}}}function kc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Tg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return mt("not implemented")}_getIdTokenResponse(e){return mt("not implemented")}_linkToIdToken(e,t){return mt("not implemented")}_getReauthenticationResolver(e){return mt("not implemented")}}async function wg(n,e){return At(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ig(n,e){return Fr(n,"POST","/v1/accounts:signInWithPassword",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ag(n,e){return Fr(n,"POST","/v1/accounts:signInWithEmailLink",Ht(n,e))}async function bg(n,e){return Fr(n,"POST","/v1/accounts:signInWithEmailLink",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Vo{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Cr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Cr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return no(e,t,"signInWithPassword",Ig);case"emailLink":return Ag(e,{email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return no(e,r,"signUpPassword",wg);case"emailLink":return bg(e,{idToken:t,email:this._email,oobCode:this._password});default:Qe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(n,e){return Fr(n,"POST","/v1/accounts:signInWithIdp",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="http://localhost";class an extends Vo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new an(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Qe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,s=ko(t,["providerId","signInMethod"]);if(!r||!i)return null;const a=new an(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Dn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Dn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Dn(e,t)}buildRequest(){const e={requestUri:Rg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Mr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Pg(n){const e=mr(gr(n)).link,t=e?mr(gr(e)).deep_link_id:null,r=mr(gr(n)).deep_link_id;return(r?mr(gr(r)).link:null)||r||t||e||n}class Lo{constructor(e){var t,r,i,s,a,l;const u=mr(gr(e)),d=(t=u.apiKey)!==null&&t!==void 0?t:null,g=(r=u.oobCode)!==null&&r!==void 0?r:null,T=Sg((i=u.mode)!==null&&i!==void 0?i:null);W(d&&g&&T,"argument-error"),this.apiKey=d,this.operation=T,this.code=g,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const t=Pg(e);try{return new Lo(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.providerId=zn.PROVIDER_ID}static credential(e,t){return Cr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Lo.parseLink(t);return W(r,"argument-error"),Cr._fromEmailAndCode(e,r.code,r.tenantId)}}zn.PROVIDER_ID="password";zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Br extends Tu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends Br{constructor(){super("facebook.com")}static credential(e){return an._fromParams({providerId:Dt.PROVIDER_ID,signInMethod:Dt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dt.credentialFromTaggedObject(e)}static credentialFromError(e){return Dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dt.credential(e.oauthAccessToken)}catch{return null}}}Dt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Dt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot extends Br{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return an._fromParams({providerId:Ot.PROVIDER_ID,signInMethod:Ot.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ot.credentialFromTaggedObject(e)}static credentialFromError(e){return Ot.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ot.credential(t,r)}catch{return null}}}Ot.GOOGLE_SIGN_IN_METHOD="google.com";Ot.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt extends Br{constructor(){super("github.com")}static credential(e){return an._fromParams({providerId:Vt.PROVIDER_ID,signInMethod:Vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vt.credentialFromTaggedObject(e)}static credentialFromError(e){return Vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vt.credential(e.oauthAccessToken)}catch{return null}}}Vt.GITHUB_SIGN_IN_METHOD="github.com";Vt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt extends Br{constructor(){super("twitter.com")}static credential(e,t){return an._fromParams({providerId:Lt.PROVIDER_ID,signInMethod:Lt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Lt.credentialFromTaggedObject(e)}static credentialFromError(e){return Lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Lt.credential(t,r)}catch{return null}}}Lt.TWITTER_SIGN_IN_METHOD="twitter.com";Lt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Cg(n,e){return Fr(n,"POST","/v1/accounts:signUp",Ht(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const s=await gt._fromIdTokenResponse(e,r,i),a=Nc(r);return new cn({user:s,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Nc(r);return new cn({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Nc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi extends at{constructor(e,t,r,i){var s;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mi.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Mi(e,t,r,i)}}function wu(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mi._fromErrorAndOperation(n,s,e,r):s})}async function kg(n,e,t=!1){const r=await Vn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return cn._forOperation(n,"link",r)}/**
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
 */async function Ng(n,e,t=!1){const{auth:r}=n;if(Xe(r.app))return Promise.reject(yt(r));const i="reauthenticate";try{const s=await Vn(n,wu(r,i,e,n),t);W(s.idToken,r,"internal-error");const a=Do(s.idToken);W(a,r,"internal-error");const{sub:l}=a;return W(n.uid===l,r,"user-mismatch"),cn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qe(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iu(n,e,t=!1){if(Xe(n.app))return Promise.reject(yt(n));const r="signIn",i=await wu(n,r,e),s=await cn._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(s.user),s}async function xg(n,e){return Iu(pn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Au(n){const e=pn(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Dg(n,e,t){if(Xe(n.app))return Promise.reject(yt(n));const r=pn(n),a=await no(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Cg).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Au(n),u}),l=await cn._fromIdTokenResponse(r,"signIn",a);return await r._updateCurrentUser(l.user),l}function Og(n,e,t){return Xe(n.app)?Promise.reject(yt(n)):xg(le(n),zn.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Au(n),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vg(n,e){return At(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bu(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=le(n),s={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},a=await Vn(r,Vg(r.auth,s));r.displayName=a.displayName||null,r.photoURL=a.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(a)}function Lg(n,e,t,r){return le(n).onIdTokenChanged(e,t,r)}function Mg(n,e,t){return le(n).beforeAuthStateChanged(e,t)}function Ug(n,e,t,r){return le(n).onAuthStateChanged(e,t,r)}function Fg(n){return le(n).signOut()}const Ui="__sak";/**
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
 */class Ru{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ui,"1"),this.storage.removeItem(Ui),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(){const n=Se();return Oo(n)||Xi(n)}const jg=1e3,qg=10;class Su extends Ru{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Bg()&&ig(),this.fallbackToPolling=_u(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);rg()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,qg):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},jg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Su.type="LOCAL";const zg=Su;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu extends Ru{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Pu.type="SESSION";const Cu=Pu;/**
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
 */function Wg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Zi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Zi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:s}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async d=>d(t.origin,s)),u=await Wg(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Zi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mo(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Hg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const d=Mo("",20);i.port1.start();const g=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(T){const b=T;if(b.data.eventId===d)switch(b.data.status){case"ack":clearTimeout(g),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(b.data.response);break;default:clearTimeout(g),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:d,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tt(){return window}function Gg(n){tt().location.href=n}/**
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
 */function ku(){return typeof tt().WorkerGlobalScope<"u"&&typeof tt().importScripts=="function"}async function Kg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $g(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Qg(){return ku()?self:null}/**
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
 */const Nu="firebaseLocalStorageDb",Yg=1,Fi="firebaseLocalStorage",xu="fbase_key";class jr{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function es(n,e){return n.transaction([Fi],e?"readwrite":"readonly").objectStore(Fi)}function Xg(){const n=indexedDB.deleteDatabase(Nu);return new jr(n).toPromise()}function ro(){const n=indexedDB.open(Nu,Yg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Fi,{keyPath:xu})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Fi)?e(r):(r.close(),await Xg(),e(await ro()))})})}async function xc(n,e,t){const r=es(n,!0).put({[xu]:e,value:t});return new jr(r).toPromise()}async function Jg(n,e){const t=es(n,!1).get(e),r=await new jr(t).toPromise();return r===void 0?null:r.value}function Dc(n,e){const t=es(n,!0).delete(e);return new jr(t).toPromise()}const Zg=800,e_=3;class Du{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ro(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>e_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ku()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Zi._getInstance(Qg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Kg(),!this.activeServiceWorker)return;this.sender=new Hg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$g()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ro();return await xc(e,Ui,"1"),await Dc(e,Ui),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>xc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Jg(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Dc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=es(i,!1).getAll();return new jr(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Zg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Du.type="LOCAL";const t_=Du;new Ur(3e4,6e4);/**
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
 */function n_(n,e){return e?_t(e):(W(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Uo extends Vo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Dn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Dn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function r_(n){return Iu(n.auth,new Uo(n),n.bypassAuthState)}function i_(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),Ng(t,new Uo(n),n.bypassAuthState)}async function s_(n){const{auth:e,user:t}=n;return W(t,e,"internal-error"),kg(t,new Uo(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(e,t,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return r_;case"linkViaPopup":case"linkViaRedirect":return s_;case"reauthViaPopup":case"reauthViaRedirect":return i_;default:Qe(this.auth,"internal-error")}}resolve(e){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o_=new Ur(2e3,1e4);class kn extends Ou{constructor(e,t,r,i,s){super(e,t,i,s),this.provider=r,this.authWindow=null,this.pollId=null,kn.currentPopupAction&&kn.currentPopupAction.cancel(),kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return W(e,this.auth,"internal-error"),e}async onExecution(){Et(this.filter.length===1,"Popup operations only handle one event");const e=Mo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,o_.get())};e()}}kn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_="pendingRedirect",bi=new Map;class c_ extends Ou{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=bi.get(this.auth._key());if(!e){try{const r=await l_(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}bi.set(this.auth._key(),e)}return this.bypassAuthState||bi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function l_(n,e){const t=d_(e),r=h_(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function u_(n,e){bi.set(n._key(),e)}function h_(n){return _t(n._redirectPersistence)}function d_(n){return Ai(a_,n.config.apiKey,n.name)}async function f_(n,e,t=!1){if(Xe(n.app))return Promise.reject(yt(n));const r=pn(n),i=n_(r,e),a=await new c_(r,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=10*60*1e3;class m_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!g_(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Vu(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(et(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=p_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Oc(e))}saveEventToCache(e){this.cachedEventUids.add(Oc(e)),this.lastProcessedEventTime=Date.now()}}function Oc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Vu({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function g_(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Vu(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(n,e={}){return At(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,v_=/^https?/;async function E_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await __(n);for(const t of e)try{if(T_(t))return}catch{}Qe(n,"unauthorized-domain")}function T_(n){const e=eo(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!v_.test(t))return!1;if(y_.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const w_=new Ur(3e4,6e4);function Vc(){const n=tt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function I_(n){return new Promise((e,t)=>{var r,i,s;function a(){Vc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vc(),t(et(n,"network-request-failed"))},timeout:w_.get()})}if(!((i=(r=tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tt().gapi)===null||s===void 0)&&s.load)a();else{const l=fg("iframefcb");return tt()[l]=()=>{gapi.load?a():t(et(n,"network-request-failed"))},vu(`${dg()}?onload=${l}`).catch(u=>t(u))}}).catch(e=>{throw Ri=null,e})}let Ri=null;function A_(n){return Ri=Ri||I_(n),Ri}/**
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
 */const b_=new Ur(5e3,15e3),R_="__/auth/iframe",S_="emulator/auth/iframe",P_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},C_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function k_(n){const e=n.config;W(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?xo(e,S_):`https://${n.config.authDomain}/${R_}`,r={apiKey:e.apiKey,appName:n.name,v:fn},i=C_.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${t}?${Mr(r).slice(1)}`}async function N_(n){const e=await A_(n),t=tt().gapi;return W(t,n,"internal-error"),e.open({where:document.body,url:k_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:P_,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=et(n,"network-request-failed"),l=tt().setTimeout(()=>{s(a)},b_.get());function u(){tt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const x_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},D_=500,O_=600,V_="_blank",L_="http://localhost";class Lc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function M_(n,e,t,r=D_,i=O_){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},x_),{width:r.toString(),height:i.toString(),top:s,left:a}),d=Se().toLowerCase();t&&(l=du(d)?V_:t),hu(d)&&(e=e||L_,u.scrollbars="yes");const g=Object.entries(u).reduce((b,[S,N])=>`${b}${S}=${N},`,"");if(ng(d)&&l!=="_self")return U_(e||"",l),new Lc(null);const T=window.open(e||"",l,g);W(T,n,"popup-blocked");try{T.focus()}catch{}return new Lc(T)}function U_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const F_="__/auth/handler",B_="emulator/auth/handler",j_=encodeURIComponent("fac");async function Mc(n,e,t,r,i,s){W(n.config.authDomain,n,"auth-domain-config-required"),W(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:fn,eventId:i};if(e instanceof Tu){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",lf(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[g,T]of Object.entries({}))a[g]=T}if(e instanceof Br){const g=e.getScopes().filter(T=>T!=="");g.length>0&&(a.scopes=g.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const g of Object.keys(l))l[g]===void 0&&delete l[g];const u=await n._getAppCheckToken(),d=u?`#${j_}=${encodeURIComponent(u)}`:"";return`${q_(n)}?${Mr(l).slice(1)}${d}`}function q_({config:n}){return n.emulator?xo(n,B_):`https://${n.authDomain}/${F_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs="webStorageSupport";class z_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cu,this._completeRedirectFn=f_,this._overrideRedirectResult=u_}async _openPopup(e,t,r,i){var s;Et((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Mc(e,t,r,eo(),i);return M_(e,a,Mo())}async _openRedirect(e,t,r,i){await this._originValidation(e);const s=await Mc(e,t,r,eo(),i);return Gg(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:s}=this.eventManagers[t];return i?Promise.resolve(i):(Et(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await N_(e),r=new m_(e);return t.register("authEvent",i=>(W(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(zs,{type:zs},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[zs];a!==void 0&&t(!!a),Qe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=E_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _u()||Oo()||Xi()}}const W_=z_;var Uc="@firebase/auth",Fc="1.7.6";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function K_(n){sn(new jt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yu(n)},d=new lg(r,i,s,u);return yg(d,t),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),sn(new jt("auth-internal",e=>{const t=pn(e.getProvider("auth").getImmediate());return(r=>new H_(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ze(Uc,Fc,G_(n)),Ze(Uc,Fc,"esm2017")}/**
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
 */const $_=5*60,Q_=xl("authIdTokenMaxAge")||$_;let Bc=null;const Y_=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Q_)return;const i=t==null?void 0:t.token;Bc!==i&&(Bc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function X_(n=To()){const e=Qi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=_g(n,{popupRedirectResolver:W_,persistence:[t_,zg,Cu]}),r=xl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=Y_(s.toString());Mg(t,a,()=>a(t.currentUser)),Lg(t,l=>a(l))}}const i=Cl("auth");return i&&vg(t,`http://${i}`),t}function J_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ug({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const s=et("internal-error");s.customData=i,t(s)},r.type="text/javascript",r.charset="UTF-8",J_().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});K_("Browser");function Lu(n,e){const t=new FormData(n);let r=Array.from(t.values()),i={};for(let s=0;s<r.length;s++)i[e[s]]=r[s]!==void 0?r[s]:null;return i}function jc(n,e,t,r){for(let i=0;i<e.length;i++)n[e[i]]=ae(t[i]).textContent.includes(r)?null:ae(t[i]).textContent;return n}function Fo(n,e){let t="";t+=`<a class="header__top-name-link" href="/nuts/src/pages/personal-cabinet-page.html"><img class="header__top-img" src="" alt="avatar" loading="lazy"/>
            <span class="header__top-name">${n.displayName}</span>               
           </a>
          <button class="header__top-remove-block"
              ><svg class="header__top-remove-svg"><use href="#exit"></use></svg><span class="header__top-remove-text">Вихід</span></button
          >`,e.innerHTML=t,_r(n.photoURL,ae(".header__top-img")),Z_(ae(".header__top-authentication-wrapper"),ae(".header__top-remove-block"))}function Z_(n,e){e.addEventListener("click",()=>{window.location.pathname="../../../../index.html",lE()})}function Mu(n){for(let e of n)e.value="",e.parentElement.querySelector(".input__label").classList.remove("input__label_active")}var qc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var nn,Uu;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,p){function m(){}m.prototype=p.prototype,E.D=p.prototype,E.prototype=new m,E.prototype.constructor=E,E.C=function(v,w,I){for(var _=Array(arguments.length-2),ne=2;ne<arguments.length;ne++)_[ne-2]=arguments[ne];return p.prototype[w].apply(v,_)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,p,m){m||(m=0);var v=Array(16);if(typeof p=="string")for(var w=0;16>w;++w)v[w]=p.charCodeAt(m++)|p.charCodeAt(m++)<<8|p.charCodeAt(m++)<<16|p.charCodeAt(m++)<<24;else for(w=0;16>w;++w)v[w]=p[m++]|p[m++]<<8|p[m++]<<16|p[m++]<<24;p=E.g[0],m=E.g[1],w=E.g[2];var I=E.g[3],_=p+(I^m&(w^I))+v[0]+3614090360&4294967295;p=m+(_<<7&4294967295|_>>>25),_=I+(w^p&(m^w))+v[1]+3905402710&4294967295,I=p+(_<<12&4294967295|_>>>20),_=w+(m^I&(p^m))+v[2]+606105819&4294967295,w=I+(_<<17&4294967295|_>>>15),_=m+(p^w&(I^p))+v[3]+3250441966&4294967295,m=w+(_<<22&4294967295|_>>>10),_=p+(I^m&(w^I))+v[4]+4118548399&4294967295,p=m+(_<<7&4294967295|_>>>25),_=I+(w^p&(m^w))+v[5]+1200080426&4294967295,I=p+(_<<12&4294967295|_>>>20),_=w+(m^I&(p^m))+v[6]+2821735955&4294967295,w=I+(_<<17&4294967295|_>>>15),_=m+(p^w&(I^p))+v[7]+4249261313&4294967295,m=w+(_<<22&4294967295|_>>>10),_=p+(I^m&(w^I))+v[8]+1770035416&4294967295,p=m+(_<<7&4294967295|_>>>25),_=I+(w^p&(m^w))+v[9]+2336552879&4294967295,I=p+(_<<12&4294967295|_>>>20),_=w+(m^I&(p^m))+v[10]+4294925233&4294967295,w=I+(_<<17&4294967295|_>>>15),_=m+(p^w&(I^p))+v[11]+2304563134&4294967295,m=w+(_<<22&4294967295|_>>>10),_=p+(I^m&(w^I))+v[12]+1804603682&4294967295,p=m+(_<<7&4294967295|_>>>25),_=I+(w^p&(m^w))+v[13]+4254626195&4294967295,I=p+(_<<12&4294967295|_>>>20),_=w+(m^I&(p^m))+v[14]+2792965006&4294967295,w=I+(_<<17&4294967295|_>>>15),_=m+(p^w&(I^p))+v[15]+1236535329&4294967295,m=w+(_<<22&4294967295|_>>>10),_=p+(w^I&(m^w))+v[1]+4129170786&4294967295,p=m+(_<<5&4294967295|_>>>27),_=I+(m^w&(p^m))+v[6]+3225465664&4294967295,I=p+(_<<9&4294967295|_>>>23),_=w+(p^m&(I^p))+v[11]+643717713&4294967295,w=I+(_<<14&4294967295|_>>>18),_=m+(I^p&(w^I))+v[0]+3921069994&4294967295,m=w+(_<<20&4294967295|_>>>12),_=p+(w^I&(m^w))+v[5]+3593408605&4294967295,p=m+(_<<5&4294967295|_>>>27),_=I+(m^w&(p^m))+v[10]+38016083&4294967295,I=p+(_<<9&4294967295|_>>>23),_=w+(p^m&(I^p))+v[15]+3634488961&4294967295,w=I+(_<<14&4294967295|_>>>18),_=m+(I^p&(w^I))+v[4]+3889429448&4294967295,m=w+(_<<20&4294967295|_>>>12),_=p+(w^I&(m^w))+v[9]+568446438&4294967295,p=m+(_<<5&4294967295|_>>>27),_=I+(m^w&(p^m))+v[14]+3275163606&4294967295,I=p+(_<<9&4294967295|_>>>23),_=w+(p^m&(I^p))+v[3]+4107603335&4294967295,w=I+(_<<14&4294967295|_>>>18),_=m+(I^p&(w^I))+v[8]+1163531501&4294967295,m=w+(_<<20&4294967295|_>>>12),_=p+(w^I&(m^w))+v[13]+2850285829&4294967295,p=m+(_<<5&4294967295|_>>>27),_=I+(m^w&(p^m))+v[2]+4243563512&4294967295,I=p+(_<<9&4294967295|_>>>23),_=w+(p^m&(I^p))+v[7]+1735328473&4294967295,w=I+(_<<14&4294967295|_>>>18),_=m+(I^p&(w^I))+v[12]+2368359562&4294967295,m=w+(_<<20&4294967295|_>>>12),_=p+(m^w^I)+v[5]+4294588738&4294967295,p=m+(_<<4&4294967295|_>>>28),_=I+(p^m^w)+v[8]+2272392833&4294967295,I=p+(_<<11&4294967295|_>>>21),_=w+(I^p^m)+v[11]+1839030562&4294967295,w=I+(_<<16&4294967295|_>>>16),_=m+(w^I^p)+v[14]+4259657740&4294967295,m=w+(_<<23&4294967295|_>>>9),_=p+(m^w^I)+v[1]+2763975236&4294967295,p=m+(_<<4&4294967295|_>>>28),_=I+(p^m^w)+v[4]+1272893353&4294967295,I=p+(_<<11&4294967295|_>>>21),_=w+(I^p^m)+v[7]+4139469664&4294967295,w=I+(_<<16&4294967295|_>>>16),_=m+(w^I^p)+v[10]+3200236656&4294967295,m=w+(_<<23&4294967295|_>>>9),_=p+(m^w^I)+v[13]+681279174&4294967295,p=m+(_<<4&4294967295|_>>>28),_=I+(p^m^w)+v[0]+3936430074&4294967295,I=p+(_<<11&4294967295|_>>>21),_=w+(I^p^m)+v[3]+3572445317&4294967295,w=I+(_<<16&4294967295|_>>>16),_=m+(w^I^p)+v[6]+76029189&4294967295,m=w+(_<<23&4294967295|_>>>9),_=p+(m^w^I)+v[9]+3654602809&4294967295,p=m+(_<<4&4294967295|_>>>28),_=I+(p^m^w)+v[12]+3873151461&4294967295,I=p+(_<<11&4294967295|_>>>21),_=w+(I^p^m)+v[15]+530742520&4294967295,w=I+(_<<16&4294967295|_>>>16),_=m+(w^I^p)+v[2]+3299628645&4294967295,m=w+(_<<23&4294967295|_>>>9),_=p+(w^(m|~I))+v[0]+4096336452&4294967295,p=m+(_<<6&4294967295|_>>>26),_=I+(m^(p|~w))+v[7]+1126891415&4294967295,I=p+(_<<10&4294967295|_>>>22),_=w+(p^(I|~m))+v[14]+2878612391&4294967295,w=I+(_<<15&4294967295|_>>>17),_=m+(I^(w|~p))+v[5]+4237533241&4294967295,m=w+(_<<21&4294967295|_>>>11),_=p+(w^(m|~I))+v[12]+1700485571&4294967295,p=m+(_<<6&4294967295|_>>>26),_=I+(m^(p|~w))+v[3]+2399980690&4294967295,I=p+(_<<10&4294967295|_>>>22),_=w+(p^(I|~m))+v[10]+4293915773&4294967295,w=I+(_<<15&4294967295|_>>>17),_=m+(I^(w|~p))+v[1]+2240044497&4294967295,m=w+(_<<21&4294967295|_>>>11),_=p+(w^(m|~I))+v[8]+1873313359&4294967295,p=m+(_<<6&4294967295|_>>>26),_=I+(m^(p|~w))+v[15]+4264355552&4294967295,I=p+(_<<10&4294967295|_>>>22),_=w+(p^(I|~m))+v[6]+2734768916&4294967295,w=I+(_<<15&4294967295|_>>>17),_=m+(I^(w|~p))+v[13]+1309151649&4294967295,m=w+(_<<21&4294967295|_>>>11),_=p+(w^(m|~I))+v[4]+4149444226&4294967295,p=m+(_<<6&4294967295|_>>>26),_=I+(m^(p|~w))+v[11]+3174756917&4294967295,I=p+(_<<10&4294967295|_>>>22),_=w+(p^(I|~m))+v[2]+718787259&4294967295,w=I+(_<<15&4294967295|_>>>17),_=m+(I^(w|~p))+v[9]+3951481745&4294967295,E.g[0]=E.g[0]+p&4294967295,E.g[1]=E.g[1]+(w+(_<<21&4294967295|_>>>11))&4294967295,E.g[2]=E.g[2]+w&4294967295,E.g[3]=E.g[3]+I&4294967295}r.prototype.u=function(E,p){p===void 0&&(p=E.length);for(var m=p-this.blockSize,v=this.B,w=this.h,I=0;I<p;){if(w==0)for(;I<=m;)i(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<p;)if(v[w++]=E.charCodeAt(I++),w==this.blockSize){i(this,v),w=0;break}}else for(;I<p;)if(v[w++]=E[I++],w==this.blockSize){i(this,v),w=0;break}}this.h=w,this.o+=p},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var p=1;p<E.length-8;++p)E[p]=0;var m=8*this.o;for(p=E.length-8;p<E.length;++p)E[p]=m&255,m/=256;for(this.u(E),E=Array(16),p=m=0;4>p;++p)for(var v=0;32>v;v+=8)E[m++]=this.g[p]>>>v&255;return E};function s(E,p){var m=l;return Object.prototype.hasOwnProperty.call(m,E)?m[E]:m[E]=p(E)}function a(E,p){this.h=p;for(var m=[],v=!0,w=E.length-1;0<=w;w--){var I=E[w]|0;v&&I==p||(m[w]=I,v=!1)}this.g=m}var l={};function u(E){return-128<=E&&128>E?s(E,function(p){return new a([p|0],0>p?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return T;if(0>E)return k(d(-E));for(var p=[],m=1,v=0;E>=m;v++)p[v]=E/m|0,m*=4294967296;return new a(p,0)}function g(E,p){if(E.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(E.charAt(0)=="-")return k(g(E.substring(1),p));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var m=d(Math.pow(p,8)),v=T,w=0;w<E.length;w+=8){var I=Math.min(8,E.length-w),_=parseInt(E.substring(w,w+I),p);8>I?(I=d(Math.pow(p,I)),v=v.j(I).add(d(_))):(v=v.j(m),v=v.add(d(_)))}return v}var T=u(0),b=u(1),S=u(16777216);n=a.prototype,n.m=function(){if(U(this))return-k(this).m();for(var E=0,p=1,m=0;m<this.g.length;m++){var v=this.i(m);E+=(0<=v?v:4294967296+v)*p,p*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(N(this))return"0";if(U(this))return"-"+k(this).toString(E);for(var p=d(Math.pow(E,6)),m=this,v="";;){var w=G(m,p).g;m=D(m,w.j(p));var I=((0<m.g.length?m.g[0]:m.h)>>>0).toString(E);if(m=w,N(m))return I+v;for(;6>I.length;)I="0"+I;v=I+v}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function N(E){if(E.h!=0)return!1;for(var p=0;p<E.g.length;p++)if(E.g[p]!=0)return!1;return!0}function U(E){return E.h==-1}n.l=function(E){return E=D(this,E),U(E)?-1:N(E)?0:1};function k(E){for(var p=E.g.length,m=[],v=0;v<p;v++)m[v]=~E.g[v];return new a(m,~E.h).add(b)}n.abs=function(){return U(this)?k(this):this},n.add=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],v=0,w=0;w<=p;w++){var I=v+(this.i(w)&65535)+(E.i(w)&65535),_=(I>>>16)+(this.i(w)>>>16)+(E.i(w)>>>16);v=_>>>16,I&=65535,_&=65535,m[w]=_<<16|I}return new a(m,m[m.length-1]&-2147483648?-1:0)};function D(E,p){return E.add(k(p))}n.j=function(E){if(N(this)||N(E))return T;if(U(this))return U(E)?k(this).j(k(E)):k(k(this).j(E));if(U(E))return k(this.j(k(E)));if(0>this.l(S)&&0>E.l(S))return d(this.m()*E.m());for(var p=this.g.length+E.g.length,m=[],v=0;v<2*p;v++)m[v]=0;for(v=0;v<this.g.length;v++)for(var w=0;w<E.g.length;w++){var I=this.i(v)>>>16,_=this.i(v)&65535,ne=E.i(w)>>>16,Ue=E.i(w)&65535;m[2*v+2*w]+=_*Ue,V(m,2*v+2*w),m[2*v+2*w+1]+=I*Ue,V(m,2*v+2*w+1),m[2*v+2*w+1]+=_*ne,V(m,2*v+2*w+1),m[2*v+2*w+2]+=I*ne,V(m,2*v+2*w+2)}for(v=0;v<p;v++)m[v]=m[2*v+1]<<16|m[2*v];for(v=p;v<2*p;v++)m[v]=0;return new a(m,0)};function V(E,p){for(;(E[p]&65535)!=E[p];)E[p+1]+=E[p]>>>16,E[p]&=65535,p++}function M(E,p){this.g=E,this.h=p}function G(E,p){if(N(p))throw Error("division by zero");if(N(E))return new M(T,T);if(U(E))return p=G(k(E),p),new M(k(p.g),k(p.h));if(U(p))return p=G(E,k(p)),new M(k(p.g),p.h);if(30<E.g.length){if(U(E)||U(p))throw Error("slowDivide_ only works with positive integers.");for(var m=b,v=p;0>=v.l(E);)m=te(m),v=te(v);var w=Q(m,1),I=Q(v,1);for(v=Q(v,2),m=Q(m,2);!N(v);){var _=I.add(v);0>=_.l(E)&&(w=w.add(m),I=_),v=Q(v,1),m=Q(m,1)}return p=D(E,w.j(p)),new M(w,p)}for(w=T;0<=E.l(p);){for(m=Math.max(1,Math.floor(E.m()/p.m())),v=Math.ceil(Math.log(m)/Math.LN2),v=48>=v?1:Math.pow(2,v-48),I=d(m),_=I.j(p);U(_)||0<_.l(E);)m-=v,I=d(m),_=I.j(p);N(I)&&(I=b),w=w.add(I),E=D(E,_)}return new M(w,E)}n.A=function(E){return G(this,E).h},n.and=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],v=0;v<p;v++)m[v]=this.i(v)&E.i(v);return new a(m,this.h&E.h)},n.or=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],v=0;v<p;v++)m[v]=this.i(v)|E.i(v);return new a(m,this.h|E.h)},n.xor=function(E){for(var p=Math.max(this.g.length,E.g.length),m=[],v=0;v<p;v++)m[v]=this.i(v)^E.i(v);return new a(m,this.h^E.h)};function te(E){for(var p=E.g.length+1,m=[],v=0;v<p;v++)m[v]=E.i(v)<<1|E.i(v-1)>>>31;return new a(m,E.h)}function Q(E,p){var m=p>>5;p%=32;for(var v=E.g.length-m,w=[],I=0;I<v;I++)w[I]=0<p?E.i(I+m)>>>p|E.i(I+m+1)<<32-p:E.i(I+m);return new a(w,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Uu=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=g,nn=a}).apply(typeof qc<"u"?qc:typeof self<"u"?self:typeof window<"u"?window:{});var yi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fu,Bu,yr,ju,Si,io,qu,zu,Wu;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof yi=="object"&&yi];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function i(o,c){if(c)e:{var h=r;o=o.split(".");for(var f=0;f<o.length-1;f++){var A=o[f];if(!(A in h))break e;h=h[A]}o=o[o.length-1],f=h[o],c=c(f),c!=f&&c!=null&&e(h,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var h=0,f=!1,A={next:function(){if(!f&&h<o.length){var R=h++;return{value:c(R,o[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function g(o,c,h){return o.call.apply(o.bind,arguments)}function T(o,c,h){if(!o)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,f),o.apply(c,A)}}return function(){return o.apply(c,arguments)}}function b(o,c,h){return b=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:T,b.apply(null,arguments)}function S(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var f=h.slice();return f.push.apply(f,arguments),o.apply(this,f)}}function N(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(f,A,R){for(var O=Array(arguments.length-2),re=2;re<arguments.length;re++)O[re-2]=arguments[re];return c.prototype[A].apply(f,O)}}function U(o){const c=o.length;if(0<c){const h=Array(c);for(let f=0;f<c;f++)h[f]=o[f];return h}return[]}function k(o,c){for(let h=1;h<arguments.length;h++){const f=arguments[h];if(u(f)){const A=o.length||0,R=f.length||0;o.length=A+R;for(let O=0;O<R;O++)o[A+O]=f[O]}else o.push(f)}}class D{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function V(o){return/^[\s\xa0]*$/.test(o)}function M(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function G(o){return G[" "](o),o}G[" "]=function(){};var te=M().indexOf("Gecko")!=-1&&!(M().toLowerCase().indexOf("webkit")!=-1&&M().indexOf("Edge")==-1)&&!(M().indexOf("Trident")!=-1||M().indexOf("MSIE")!=-1)&&M().indexOf("Edge")==-1;function Q(o,c,h){for(const f in o)c.call(h,o[f],f,o)}function E(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function p(o){const c={};for(const h in o)c[h]=o[h];return c}const m="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v(o,c){let h,f;for(let A=1;A<arguments.length;A++){f=arguments[A];for(h in f)o[h]=f[h];for(let R=0;R<m.length;R++)h=m[R],Object.prototype.hasOwnProperty.call(f,h)&&(o[h]=f[h])}}function w(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function I(o){l.setTimeout(()=>{throw o},0)}function _(){var o=lt;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class ne{constructor(){this.h=this.g=null}add(c,h){const f=Ue.get();f.set(c,h),this.h?this.h.next=f:this.g=f,this.h=f}}var Ue=new D(()=>new ct,o=>o.reset());class ct{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let qe,Fe=!1,lt=new ne,bt=()=>{const o=l.Promise.resolve(void 0);qe=()=>{o.then(Kt)}};var Kt=()=>{for(var o;o=_();){try{o.h.call(o.g)}catch(h){I(h)}var c=Ue;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}Fe=!1};function Ve(){this.s=this.s,this.C=this.C}Ve.prototype.s=!1,Ve.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ve.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ce(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}ce.prototype.h=function(){this.defaultPrevented=!0};var Ce=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return o}();function ut(o,c){if(ce.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,f=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(te){e:{try{G(c.nodeName);var A=!0;break e}catch{}A=!1}A||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Qr[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&ut.aa.h.call(this)}}N(ut,ce);var Qr={2:"touch",3:"pen",4:"mouse"};ut.prototype.h=function(){ut.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var ht="closure_listenable_"+(1e6*Math.random()|0),Yr=0;function _n(o,c,h,f,A){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!f,this.ha=A,this.key=++Yr,this.da=this.fa=!1}function Rt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function yn(o){this.src=o,this.g={},this.h=0}yn.prototype.add=function(o,c,h,f,A){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var O=$n(o,c,f,A);return-1<O?(c=o[O],h||(c.fa=!1)):(c=new _n(c,this.src,R,!!f,A),c.fa=h,o.push(c)),c};function Kn(o,c){var h=c.type;if(h in o.g){var f=o.g[h],A=Array.prototype.indexOf.call(f,c,void 0),R;(R=0<=A)&&Array.prototype.splice.call(f,A,1),R&&(Rt(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function $n(o,c,h,f){for(var A=0;A<o.length;++A){var R=o[A];if(!R.da&&R.listener==c&&R.capture==!!h&&R.ha==f)return A}return-1}var Qn="closure_lm_"+(1e6*Math.random()|0),Yn={};function Xn(o,c,h,f,A){if(Array.isArray(c)){for(var R=0;R<c.length;R++)Xn(o,c[R],h,f,A);return null}return h=Jr(h),o&&o[ht]?o.K(c,h,d(f)?!!f.capture:!!f,A):ys(o,c,h,!1,f,A)}function ys(o,c,h,f,A,R){if(!c)throw Error("Invalid event type");var O=d(A)?!!A.capture:!!A,re=Zn(o);if(re||(o[Qn]=re=new yn(o)),h=re.add(c,h,f,O,R),h.proxy)return h;if(f=Xr(),h.proxy=f,f.src=o,f.listener=h,o.addEventListener)Ce||(A=O),A===void 0&&(A=!1),o.addEventListener(c.toString(),f,A);else if(o.attachEvent)o.attachEvent(En(c.toString()),f);else if(o.addListener&&o.removeListener)o.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Xr(){function o(h){return c.call(o.src,o.listener,h)}const c=vs;return o}function Jn(o,c,h,f,A){if(Array.isArray(c))for(var R=0;R<c.length;R++)Jn(o,c[R],h,f,A);else f=d(f)?!!f.capture:!!f,h=Jr(h),o&&o[ht]?(o=o.i,c=String(c).toString(),c in o.g&&(R=o.g[c],h=$n(R,h,f,A),-1<h&&(Rt(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete o.g[c],o.h--)))):o&&(o=Zn(o))&&(c=o.g[c.toString()],o=-1,c&&(o=$n(c,h,f,A)),(h=-1<o?c[o]:null)&&vn(h))}function vn(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[ht])Kn(c.i,o);else{var h=o.type,f=o.proxy;c.removeEventListener?c.removeEventListener(h,f,o.capture):c.detachEvent?c.detachEvent(En(h),f):c.addListener&&c.removeListener&&c.removeListener(f),(h=Zn(c))?(Kn(h,o),h.h==0&&(h.src=null,c[Qn]=null)):Rt(o)}}}function En(o){return o in Yn?Yn[o]:Yn[o]="on"+o}function vs(o,c){if(o.da)o=!0;else{c=new ut(c,this);var h=o.listener,f=o.ha||o.src;o.fa&&vn(o),o=h.call(f,c)}return o}function Zn(o){return o=o[Qn],o instanceof yn?o:null}var er="__closure_events_fn_"+(1e9*Math.random()>>>0);function Jr(o){return typeof o=="function"?o:(o[er]||(o[er]=function(c){return o.handleEvent(c)}),o[er])}function ve(){Ve.call(this),this.i=new yn(this),this.M=this,this.F=null}N(ve,Ve),ve.prototype[ht]=!0,ve.prototype.removeEventListener=function(o,c,h,f){Jn(this,o,c,h,f)};function Te(o,c){var h,f=o.F;if(f)for(h=[];f;f=f.F)h.push(f);if(o=o.M,f=c.type||c,typeof c=="string")c=new ce(c,o);else if(c instanceof ce)c.target=c.target||o;else{var A=c;c=new ce(f,o),v(c,A)}if(A=!0,h)for(var R=h.length-1;0<=R;R--){var O=c.g=h[R];A=L(O,f,!0,c)&&A}if(O=c.g=o,A=L(O,f,!0,c)&&A,A=L(O,f,!1,c)&&A,h)for(R=0;R<h.length;R++)O=c.g=h[R],A=L(O,f,!1,c)&&A}ve.prototype.N=function(){if(ve.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],f=0;f<h.length;f++)Rt(h[f]);delete o.g[c],o.h--}}this.F=null},ve.prototype.K=function(o,c,h,f){return this.i.add(String(o),c,!1,h,f)},ve.prototype.L=function(o,c,h,f){return this.i.add(String(o),c,!0,h,f)};function L(o,c,h,f){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,R=0;R<c.length;++R){var O=c[R];if(O&&!O.da&&O.capture==h){var re=O.listener,we=O.ha||O.src;O.fa&&Kn(o.i,O),A=re.call(we,f)!==!1&&A}}return A&&!f.defaultPrevented}function y(o,c,h){if(typeof o=="function")h&&(o=b(o,h));else if(o&&typeof o.handleEvent=="function")o=b(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function x(o){o.g=y(()=>{o.g=null,o.i&&(o.i=!1,x(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class F extends Ve{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:x(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function j(o){Ve.call(this),this.h=o,this.g={}}N(j,Ve);var Ge=[];function Ye(o){Q(o.g,function(c,h){this.g.hasOwnProperty(h)&&vn(c)},o),o.g={}}j.prototype.N=function(){j.aa.N.call(this),Ye(this)},j.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ke=l.JSON.stringify,Tn=l.JSON.parse,Es=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function wn(){}wn.prototype.h=null;function pe(o){return o.h||(o.h=o.i())}function Zr(){}var dt={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function St(){ce.call(this,"d")}N(St,ce);function Ts(){ce.call(this,"c")}N(Ts,ce);var $t={},ga=null;function ei(){return ga=ga||new ve}$t.La="serverreachability";function _a(o){ce.call(this,$t.La,o)}N(_a,ce);function tr(o){const c=ei();Te(c,new _a(c))}$t.STAT_EVENT="statevent";function ya(o,c){ce.call(this,$t.STAT_EVENT,o),this.stat=c}N(ya,ce);function Le(o){const c=ei();Te(c,new ya(c,o))}$t.Ma="timingevent";function va(o,c){ce.call(this,$t.Ma,o),this.size=c}N(va,ce);function nr(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function rr(){this.g=!0}rr.prototype.xa=function(){this.g=!1};function pd(o,c,h,f,A,R){o.info(function(){if(o.g)if(R)for(var O="",re=R.split("&"),we=0;we<re.length;we++){var Z=re[we].split("=");if(1<Z.length){var ke=Z[0];Z=Z[1];var Ne=ke.split("_");O=2<=Ne.length&&Ne[1]=="type"?O+(ke+"="+Z+"&"):O+(ke+"=redacted&")}}else O=null;else O=R;return"XMLHTTP REQ ("+f+") [attempt "+A+"]: "+c+`
`+h+`
`+O})}function md(o,c,h,f,A,R,O){o.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+A+"]: "+c+`
`+h+`
`+R+" "+O})}function In(o,c,h,f){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+_d(o,h)+(f?" "+f:"")})}function gd(o,c){o.info(function(){return"TIMEOUT: "+c})}rr.prototype.info=function(){};function _d(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var f=h[o];if(!(2>f.length)){var A=f[1];if(Array.isArray(A)&&!(1>A.length)){var R=A[0];if(R!="noop"&&R!="stop"&&R!="close")for(var O=1;O<A.length;O++)A[O]=""}}}}return Ke(h)}catch{return c}}var ti={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ea={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ws;function ni(){}N(ni,wn),ni.prototype.g=function(){return new XMLHttpRequest},ni.prototype.i=function(){return{}},ws=new ni;function Pt(o,c,h,f){this.j=o,this.i=c,this.l=h,this.R=f||1,this.U=new j(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ta}function Ta(){this.i=null,this.g="",this.h=!1}var wa={},Is={};function As(o,c,h){o.L=1,o.v=oi(ft(c)),o.m=h,o.P=!0,Ia(o,null)}function Ia(o,c){o.F=Date.now(),ri(o),o.A=ft(o.v);var h=o.A,f=o.R;Array.isArray(f)||(f=[String(f)]),Ma(h.i,"t",f),o.C=0,h=o.j.J,o.h=new Ta,o.g=tc(o.j,h?c:null,!o.m),0<o.O&&(o.M=new F(b(o.Y,o,o.g),o.O)),c=o.U,h=o.g,f=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(Ge[0]=A.toString()),A=Ge);for(var R=0;R<A.length;R++){var O=Xn(h,A[R],f||c.handleEvent,!1,c.h||c);if(!O)break;c.g[O.key]=O}c=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),tr(),pd(o.i,o.u,o.A,o.l,o.R,o.m)}Pt.prototype.ca=function(o){o=o.target;const c=this.M;c&&pt(o)==3?c.j():this.Y(o)},Pt.prototype.Y=function(o){try{if(o==this.g)e:{const Ne=pt(this.g);var c=this.g.Ba();const Rn=this.g.Z();if(!(3>Ne)&&(Ne!=3||this.g&&(this.h.h||this.g.oa()||Wa(this.g)))){this.J||Ne!=4||c==7||(c==8||0>=Rn?tr(3):tr(2)),bs(this);var h=this.g.Z();this.X=h;t:if(Aa(this)){var f=Wa(this.g);o="";var A=f.length,R=pt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qt(this),ir(this);var O="";break t}this.h.i=new l.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,o+=this.h.i.decode(f[c],{stream:!(R&&c==A-1)});f.length=0,this.h.g+=o,this.C=0,O=this.h.g}else O=this.g.oa();if(this.o=h==200,md(this.i,this.u,this.A,this.l,this.R,Ne,h),this.o){if(this.T&&!this.K){t:{if(this.g){var re,we=this.g;if((re=we.g?we.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(re)){var Z=re;break t}}Z=null}if(h=Z)In(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Rs(this,h);else{this.o=!1,this.s=3,Le(12),Qt(this),ir(this);break e}}if(this.P){h=!0;let $e;for(;!this.J&&this.C<O.length;)if($e=yd(this,O),$e==Is){Ne==4&&(this.s=4,Le(14),h=!1),In(this.i,this.l,null,"[Incomplete Response]");break}else if($e==wa){this.s=4,Le(15),In(this.i,this.l,O,"[Invalid Chunk]"),h=!1;break}else In(this.i,this.l,$e,null),Rs(this,$e);if(Aa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ne!=4||O.length!=0||this.h.h||(this.s=1,Le(16),h=!1),this.o=this.o&&h,!h)In(this.i,this.l,O,"[Invalid Chunked Response]"),Qt(this),ir(this);else if(0<O.length&&!this.W){this.W=!0;var ke=this.j;ke.g==this&&ke.ba&&!ke.M&&(ke.j.info("Great, no buffering proxy detected. Bytes received: "+O.length),xs(ke),ke.M=!0,Le(11))}}else In(this.i,this.l,O,null),Rs(this,O);Ne==4&&Qt(this),this.o&&!this.J&&(Ne==4?Xa(this.j,this):(this.o=!1,ri(this)))}else Vd(this.g),h==400&&0<O.indexOf("Unknown SID")?(this.s=3,Le(12)):(this.s=0,Le(13)),Qt(this),ir(this)}}}catch{}finally{}};function Aa(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function yd(o,c){var h=o.C,f=c.indexOf(`
`,h);return f==-1?Is:(h=Number(c.substring(h,f)),isNaN(h)?wa:(f+=1,f+h>c.length?Is:(c=c.slice(f,f+h),o.C=f+h,c)))}Pt.prototype.cancel=function(){this.J=!0,Qt(this)};function ri(o){o.S=Date.now()+o.I,ba(o,o.I)}function ba(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=nr(b(o.ba,o),c)}function bs(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Pt.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(gd(this.i,this.A),this.L!=2&&(tr(),Le(17)),Qt(this),this.s=2,ir(this)):ba(this,this.S-o)};function ir(o){o.j.G==0||o.J||Xa(o.j,o)}function Qt(o){bs(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Ye(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Rs(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||Ss(h.h,o))){if(!o.K&&Ss(h.h,o)&&h.G==3){try{var f=h.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var A=f;if(A[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)hi(h),li(h);else break e;Ns(h),Le(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=nr(b(h.Za,h),6e3));if(1>=Pa(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Xt(h,11)}else if((o.K||h.g==o)&&hi(h),!V(c))for(A=h.Da.g.parse(c),c=0;c<A.length;c++){let Z=A[c];if(h.T=Z[0],Z=Z[1],h.G==2)if(Z[0]=="c"){h.K=Z[1],h.ia=Z[2];const ke=Z[3];ke!=null&&(h.la=ke,h.j.info("VER="+h.la));const Ne=Z[4];Ne!=null&&(h.Aa=Ne,h.j.info("SVER="+h.Aa));const Rn=Z[5];Rn!=null&&typeof Rn=="number"&&0<Rn&&(f=1.5*Rn,h.L=f,h.j.info("backChannelRequestTimeoutMs_="+f)),f=h;const $e=o.g;if($e){const fi=$e.g?$e.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(fi){var R=f.h;R.g||fi.indexOf("spdy")==-1&&fi.indexOf("quic")==-1&&fi.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Ps(R,R.h),R.h=null))}if(f.D){const Ds=$e.g?$e.g.getResponseHeader("X-HTTP-Session-Id"):null;Ds&&(f.ya=Ds,se(f.I,f.D,Ds))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),f=h;var O=o;if(f.qa=ec(f,f.J?f.ia:null,f.W),O.K){Ca(f.h,O);var re=O,we=f.L;we&&(re.I=we),re.B&&(bs(re),ri(re)),f.g=O}else Qa(f);0<h.i.length&&ui(h)}else Z[0]!="stop"&&Z[0]!="close"||Xt(h,7);else h.G==3&&(Z[0]=="stop"||Z[0]=="close"?Z[0]=="stop"?Xt(h,7):ks(h):Z[0]!="noop"&&h.l&&h.l.ta(Z),h.v=0)}}tr(4)}catch{}}var vd=class{constructor(o,c){this.g=o,this.map=c}};function Ra(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Sa(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Pa(o){return o.h?1:o.g?o.g.size:0}function Ss(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Ps(o,c){o.g?o.g.add(c):o.h=c}function Ca(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Ra.prototype.cancel=function(){if(this.i=ka(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function ka(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return U(o.i)}function Ed(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],h=o.length,f=0;f<h;f++)c.push(o[f]);return c}c=[],h=0;for(f in o)c[h++]=o[f];return c}function Td(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const f in o)c[h++]=f;return c}}}function Na(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=Td(o),f=Ed(o),A=f.length,R=0;R<A;R++)c.call(void 0,f[R],h&&h[R],o)}var xa=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wd(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var f=o[h].indexOf("="),A=null;if(0<=f){var R=o[h].substring(0,f);A=o[h].substring(f+1)}else R=o[h];c(R,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Yt(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Yt){this.h=o.h,ii(this,o.j),this.o=o.o,this.g=o.g,si(this,o.s),this.l=o.l;var c=o.i,h=new ar;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Da(this,h),this.m=o.m}else o&&(c=String(o).match(xa))?(this.h=!1,ii(this,c[1]||"",!0),this.o=sr(c[2]||""),this.g=sr(c[3]||"",!0),si(this,c[4]),this.l=sr(c[5]||"",!0),Da(this,c[6]||"",!0),this.m=sr(c[7]||"")):(this.h=!1,this.i=new ar(null,this.h))}Yt.prototype.toString=function(){var o=[],c=this.j;c&&o.push(or(c,Oa,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(or(c,Oa,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(or(h,h.charAt(0)=="/"?bd:Ad,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",or(h,Sd)),o.join("")};function ft(o){return new Yt(o)}function ii(o,c,h){o.j=h?sr(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function si(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function Da(o,c,h){c instanceof ar?(o.i=c,Pd(o.i,o.h)):(h||(c=or(c,Rd)),o.i=new ar(c,o.h))}function se(o,c,h){o.i.set(c,h)}function oi(o){return se(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function sr(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function or(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,Id),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Id(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Oa=/[#\/\?@]/g,Ad=/[#\?:]/g,bd=/[#\?]/g,Rd=/[#\?@]/g,Sd=/#/g;function ar(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Ct(o){o.g||(o.g=new Map,o.h=0,o.i&&wd(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}n=ar.prototype,n.add=function(o,c){Ct(this),this.i=null,o=An(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Va(o,c){Ct(o),c=An(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function La(o,c){return Ct(o),c=An(o,c),o.g.has(c)}n.forEach=function(o,c){Ct(this),this.g.forEach(function(h,f){h.forEach(function(A){o.call(c,A,f,this)},this)},this)},n.na=function(){Ct(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let f=0;f<c.length;f++){const A=o[f];for(let R=0;R<A.length;R++)h.push(c[f])}return h},n.V=function(o){Ct(this);let c=[];if(typeof o=="string")La(this,o)&&(c=c.concat(this.g.get(An(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},n.set=function(o,c){return Ct(this),this.i=null,o=An(this,o),La(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},n.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Ma(o,c,h){Va(o,c),0<h.length&&(o.i=null,o.g.set(An(o,c),U(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var f=c[h];const R=encodeURIComponent(String(f)),O=this.V(f);for(f=0;f<O.length;f++){var A=R;O[f]!==""&&(A+="="+encodeURIComponent(String(O[f]))),o.push(A)}}return this.i=o.join("&")};function An(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function Pd(o,c){c&&!o.j&&(Ct(o),o.i=null,o.g.forEach(function(h,f){var A=f.toLowerCase();f!=A&&(Va(this,f),Ma(this,A,h))},o)),o.j=c}function Cd(o,c){const h=new rr;if(l.Image){const f=new Image;f.onload=S(kt,h,"TestLoadImage: loaded",!0,c,f),f.onerror=S(kt,h,"TestLoadImage: error",!1,c,f),f.onabort=S(kt,h,"TestLoadImage: abort",!1,c,f),f.ontimeout=S(kt,h,"TestLoadImage: timeout",!1,c,f),l.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=o}else c(!1)}function kd(o,c){const h=new rr,f=new AbortController,A=setTimeout(()=>{f.abort(),kt(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:f.signal}).then(R=>{clearTimeout(A),R.ok?kt(h,"TestPingServer: ok",!0,c):kt(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),kt(h,"TestPingServer: error",!1,c)})}function kt(o,c,h,f,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),f(h)}catch{}}function Nd(){this.g=new Es}function xd(o,c,h){const f=h||"";try{Na(o,function(A,R){let O=A;d(A)&&(O=Ke(A)),c.push(f+R+"="+encodeURIComponent(O))})}catch(A){throw c.push(f+"type="+encodeURIComponent("_badmap")),A}}function cr(o){this.l=o.Ub||null,this.j=o.eb||!1}N(cr,wn),cr.prototype.g=function(){return new ai(this.l,this.j)},cr.prototype.i=function(o){return function(){return o}}({});function ai(o,c){ve.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(ai,ve),n=ai.prototype,n.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,ur(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lr(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,ur(this)),this.g&&(this.readyState=3,ur(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ua(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ua(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?lr(this):ur(this),this.readyState==3&&Ua(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,lr(this))},n.Qa=function(o){this.g&&(this.response=o,lr(this))},n.ga=function(){this.g&&lr(this)};function lr(o){o.readyState=4,o.l=null,o.j=null,o.v=null,ur(o)}n.setRequestHeader=function(o,c){this.u.append(o,c)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function ur(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(ai.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Fa(o){let c="";return Q(o,function(h,f){c+=f,c+=":",c+=h,c+=`\r
`}),c}function Cs(o,c,h){e:{for(f in h){var f=!1;break e}f=!0}f||(h=Fa(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):se(o,c,h))}function he(o){ve.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(he,ve);var Dd=/^https?$/i,Od=["POST","PUT"];n=he.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,c,h,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ws.g(),this.v=this.o?pe(this.o):pe(ws),this.g.onreadystatechange=b(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(R){Ba(this,R);return}if(o=h||"",h=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var A in f)h.set(A,f[A]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())h.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),A=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Od,c,void 0))||f||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,O]of h)this.g.setRequestHeader(R,O);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{za(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){Ba(this,R)}};function Ba(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,ja(o),ci(o)}function ja(o){o.A||(o.A=!0,Te(o,"complete"),Te(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Te(this,"complete"),Te(this,"abort"),ci(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ci(this,!0)),he.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?qa(this):this.bb())},n.bb=function(){qa(this)};function qa(o){if(o.h&&typeof a<"u"&&(!o.v[1]||pt(o)!=4||o.Z()!=2)){if(o.u&&pt(o)==4)y(o.Ea,0,o);else if(Te(o,"readystatechange"),pt(o)==4){o.h=!1;try{const O=o.Z();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var f;if(f=O===0){var A=String(o.D).match(xa)[1]||null;!A&&l.self&&l.self.location&&(A=l.self.location.protocol.slice(0,-1)),f=!Dd.test(A?A.toLowerCase():"")}h=f}if(h)Te(o,"complete"),Te(o,"success");else{o.m=6;try{var R=2<pt(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",ja(o)}}finally{ci(o)}}}}function ci(o,c){if(o.g){za(o);const h=o.g,f=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||Te(o,"ready");try{h.onreadystatechange=f}catch{}}}function za(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function pt(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<pt(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Tn(c)}};function Wa(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Vd(o){const c={};o=(o.g&&2<=pt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<o.length;f++){if(V(o[f]))continue;var h=w(o[f]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=c[A]||[];c[A]=R,R.push(h)}E(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function hr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function Ha(o){this.Aa=0,this.i=[],this.j=new rr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=hr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=hr("baseRetryDelayMs",5e3,o),this.cb=hr("retryDelaySeedMs",1e4,o),this.Wa=hr("forwardChannelMaxRetries",2,o),this.wa=hr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ra(o&&o.concurrentRequestLimit),this.Da=new Nd,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ha.prototype,n.la=8,n.G=1,n.connect=function(o,c,h,f){Le(0),this.W=o,this.H=c||{},h&&f!==void 0&&(this.H.OSID=h,this.H.OAID=f),this.F=this.X,this.I=ec(this,null,this.W),ui(this)};function ks(o){if(Ga(o),o.G==3){var c=o.U++,h=ft(o.I);if(se(h,"SID",o.K),se(h,"RID",c),se(h,"TYPE","terminate"),dr(o,h),c=new Pt(o,o.j,c),c.L=2,c.v=oi(ft(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=tc(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ri(c)}Za(o)}function li(o){o.g&&(xs(o),o.g.cancel(),o.g=null)}function Ga(o){li(o),o.u&&(l.clearTimeout(o.u),o.u=null),hi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function ui(o){if(!Sa(o.h)&&!o.s){o.s=!0;var c=o.Ga;qe||bt(),Fe||(qe(),Fe=!0),lt.add(c,o),o.B=0}}function Ld(o,c){return Pa(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=nr(b(o.Ga,o,c),Ja(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new Pt(this,this.j,o);let R=this.o;if(this.S&&(R?(R=p(R),v(R,this.S)):R=this.S),this.m!==null||this.O||(A.H=R,R=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var f=this.i[h];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break t}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=$a(this,A,c),h=ft(this.I),se(h,"RID",o),se(h,"CVER",22),this.D&&se(h,"X-HTTP-Session-Id",this.D),dr(this,h),R&&(this.O?c="headers="+encodeURIComponent(String(Fa(R)))+"&"+c:this.m&&Cs(h,this.m,R)),Ps(this.h,A),this.Ua&&se(h,"TYPE","init"),this.P?(se(h,"$req",c),se(h,"SID","null"),A.T=!0,As(A,h,null)):As(A,h,c),this.G=2}}else this.G==3&&(o?Ka(this,o):this.i.length==0||Sa(this.h)||Ka(this))};function Ka(o,c){var h;c?h=c.l:h=o.U++;const f=ft(o.I);se(f,"SID",o.K),se(f,"RID",h),se(f,"AID",o.T),dr(o,f),o.m&&o.o&&Cs(f,o.m,o.o),h=new Pt(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=$a(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ps(o.h,h),As(h,f,c)}function dr(o,c){o.H&&Q(o.H,function(h,f){se(c,f,h)}),o.l&&Na({},function(h,f){se(c,f,h)})}function $a(o,c,h){h=Math.min(o.i.length,h);var f=o.l?b(o.l.Na,o.l,o):null;e:{var A=o.i;let R=-1;for(;;){const O=["count="+h];R==-1?0<h?(R=A[0].g,O.push("ofs="+R)):R=0:O.push("ofs="+R);let re=!0;for(let we=0;we<h;we++){let Z=A[we].g;const ke=A[we].map;if(Z-=R,0>Z)R=Math.max(0,A[we].g-100),re=!1;else try{xd(ke,O,"req"+Z+"_")}catch{f&&f(ke)}}if(re){f=O.join("&");break e}}}return o=o.i.splice(0,h),c.D=o,f}function Qa(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;qe||bt(),Fe||(qe(),Fe=!0),lt.add(c,o),o.v=0}}function Ns(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=nr(b(o.Fa,o),Ja(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Ya(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=nr(b(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Le(10),li(this),Ya(this))};function xs(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Ya(o){o.g=new Pt(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=ft(o.qa);se(c,"RID","rpc"),se(c,"SID",o.K),se(c,"AID",o.T),se(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&se(c,"TO",o.ja),se(c,"TYPE","xmlhttp"),dr(o,c),o.m&&o.o&&Cs(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=oi(ft(c)),h.m=null,h.P=!0,Ia(h,o)}n.Za=function(){this.C!=null&&(this.C=null,li(this),Ns(this),Le(19))};function hi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Xa(o,c){var h=null;if(o.g==c){hi(o),xs(o),o.g=null;var f=2}else if(Ss(o.h,c))h=c.D,Ca(o.h,c),f=1;else return;if(o.G!=0){if(c.o)if(f==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var A=o.B;f=ei(),Te(f,new va(f,h)),ui(o)}else Qa(o);else if(A=c.s,A==3||A==0&&0<c.X||!(f==1&&Ld(o,c)||f==2&&Ns(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),A){case 1:Xt(o,5);break;case 4:Xt(o,10);break;case 3:Xt(o,6);break;default:Xt(o,2)}}}function Ja(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function Xt(o,c){if(o.j.info("Error code "+c),c==2){var h=b(o.fb,o),f=o.Xa;const A=!f;f=new Yt(f||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ii(f,"https"),oi(f),A?Cd(f.toString(),h):kd(f.toString(),h)}else Le(2);o.G=0,o.l&&o.l.sa(c),Za(o),Ga(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Le(2)):(this.j.info("Failed to ping google.com"),Le(1))};function Za(o){if(o.G=0,o.ka=[],o.l){const c=ka(o.h);(c.length!=0||o.i.length!=0)&&(k(o.ka,c),k(o.ka,o.i),o.h.i.length=0,U(o.i),o.i.length=0),o.l.ra()}}function ec(o,c,h){var f=h instanceof Yt?ft(h):new Yt(h);if(f.g!="")c&&(f.g=c+"."+f.g),si(f,f.s);else{var A=l.location;f=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var R=new Yt(null);f&&ii(R,f),c&&(R.g=c),A&&si(R,A),h&&(R.l=h),f=R}return h=o.D,c=o.ya,h&&c&&se(f,h,c),se(f,"VER",o.la),dr(o,f),f}function tc(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new he(new cr({eb:h})):new he(o.pa),c.Ha(o.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function nc(){}n=nc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function di(){}di.prototype.g=function(o,c){return new ze(o,c)};function ze(o,c){ve.call(this),this.g=new Ha(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!V(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!V(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new bn(this)}N(ze,ve),ze.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ze.prototype.close=function(){ks(this.g)},ze.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Ke(o),o=h);c.i.push(new vd(c.Ya++,o)),c.G==3&&ui(c)},ze.prototype.N=function(){this.g.l=null,delete this.j,ks(this.g),delete this.g,ze.aa.N.call(this)};function rc(o){St.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const h in c){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}N(rc,St);function ic(){Ts.call(this),this.status=1}N(ic,Ts);function bn(o){this.g=o}N(bn,nc),bn.prototype.ua=function(){Te(this.g,"a")},bn.prototype.ta=function(o){Te(this.g,new rc(o))},bn.prototype.sa=function(o){Te(this.g,new ic)},bn.prototype.ra=function(){Te(this.g,"b")},di.prototype.createWebChannel=di.prototype.g,ze.prototype.send=ze.prototype.o,ze.prototype.open=ze.prototype.m,ze.prototype.close=ze.prototype.close,Wu=function(){return new di},zu=function(){return ei()},qu=$t,io={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ti.NO_ERROR=0,ti.TIMEOUT=8,ti.HTTP_ERROR=6,Si=ti,Ea.COMPLETE="complete",ju=Ea,Zr.EventType=dt,dt.OPEN="a",dt.CLOSE="b",dt.ERROR="c",dt.MESSAGE="d",ve.prototype.listen=ve.prototype.K,yr=Zr,Bu=cr,he.prototype.listenOnce=he.prototype.L,he.prototype.getLastError=he.prototype.Ka,he.prototype.getLastErrorCode=he.prototype.Ba,he.prototype.getStatus=he.prototype.Z,he.prototype.getResponseJson=he.prototype.Oa,he.prototype.getResponseText=he.prototype.oa,he.prototype.send=he.prototype.ea,he.prototype.setWithCredentials=he.prototype.Ha,Fu=he}).apply(typeof yi<"u"?yi:typeof self<"u"?self:typeof window<"u"?window:{});const zc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}De.UNAUTHENTICATED=new De(null),De.GOOGLE_CREDENTIALS=new De("google-credentials-uid"),De.FIRST_PARTY=new De("first-party-uid"),De.MOCK_USER=new De("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wn="10.12.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new vo("@firebase/firestore");function pr(){return ln.logLevel}function B(n,...e){if(ln.logLevel<=X.DEBUG){const t=e.map(Bo);ln.debug(`Firestore (${Wn}): ${n}`,...t)}}function Tt(n,...e){if(ln.logLevel<=X.ERROR){const t=e.map(Bo);ln.error(`Firestore (${Wn}): ${n}`,...t)}}function Ln(n,...e){if(ln.logLevel<=X.WARN){const t=e.map(Bo);ln.warn(`Firestore (${Wn}): ${n}`,...t)}}function Bo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function H(n="Unexpected state"){const e=`FIRESTORE (${Wn}) INTERNAL ASSERTION FAILED: `+n;throw Tt(e),new Error(e)}function ie(n,e){n||H()}function $(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends at{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ey{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(De.UNAUTHENTICATED))}shutdown(){}}class ty{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class ny{constructor(e){this.t=e,this.currentUser=De.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const i=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let s=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vt,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vt)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string"),new Hu(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new De(e)}}class ry{constructor(e,t,r){this.l=e,this.h=t,this.P=r,this.type="FirstParty",this.user=De.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class iy{constructor(e,t,r){this.l=e,this.h=t,this.P=r}getToken(){return Promise.resolve(new ry(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(De.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sy{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oy{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const r=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(ie(typeof t.token=="string"),this.R=t.token,new sy(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=ay(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<t&&(r+=e.charAt(i[s]%e.length))}return r}}function ee(n,e){return n<e?-1:n>e?1:0}function Mn(n,e,t){return n.length===e.length&&n.every((r,i)=>t(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new q(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new q(P.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new q(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new q(P.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new ye(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.timestamp=e}static fromTimestamp(e){return new K(e)}static min(){return new K(new ye(0,0))}static max(){return new K(new ye(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t,r){t===void 0?t=0:t>e.length&&H(),r===void 0?r=e.length-t:r>e.length-t&&H(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return kr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof kr?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const s=e.get(i),a=t.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class oe extends kr{construct(e,t,r){return new oe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new q(P.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(i=>i.length>0))}return new oe(t)}static emptyPath(){return new oe([])}}const cy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class be extends kr{construct(e,t,r){return new be(e,t,r)}static isValidIdentifier(e){return cy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new be(["__name__"])}static fromServerFormat(e){const t=[];let r="",i=0;const s=()=>{if(r.length===0)throw new q(P.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new q(P.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new q(P.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new q(P.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new be(t)}static emptyPath(){return new be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z(oe.fromString(e))}static fromName(e){return new z(oe.fromString(e).popFirst(5))}static empty(){return new z(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return oe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new oe(e.slice()))}}function ly(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=K.fromTimestamp(r===1e9?new ye(t+1,0):new ye(t,r));return new qt(i,z.empty(),e)}function uy(n){return new qt(n.readTime,n.key,-1)}class qt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new qt(K.min(),z.empty(),-1)}static max(){return new qt(K.max(),z.empty(),-1)}}function hy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=z.comparator(n.documentKey,e.documentKey),t!==0?t:ee(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fy{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qr(n){if(n.code!==P.FAILED_PRECONDITION||n.message!==dy)throw n;B("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new C((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(t,s).next(r,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof C?t:C.resolve(t)}catch(t){return C.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):C.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):C.reject(t)}static resolve(e){return new C((t,r)=>{t(e)})}static reject(e){return new C((t,r)=>{r(e)})}static waitFor(e){return new C((t,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&t()},u=>r(u))}),a=!0,s===i&&t()})}static or(e){let t=C.resolve(!1);for(const r of e)t=t.next(i=>i?C.resolve(i):r());return t}static forEach(e,t){const r=[];return e.forEach((i,s)=>{r.push(t.call(this,i,s))}),this.waitFor(r)}static mapArray(e,t){return new C((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const d=u;t(e[d]).next(g=>{a[d]=g,++l,l===s&&r(a)},g=>i(g))}})}static doWhile(e,t){return new C((r,i)=>{const s=()=>{e()===!0?t().next(()=>{s()},i):r()};s()})}}function py(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function zr(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class jo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ie(r),this.se=r=>t.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}jo.oe=-1;function ts(n){return n==null}function Bi(n){return n===0&&1/n==-1/0}function my(n){return typeof n=="number"&&Number.isInteger(n)&&!Bi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function mn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Ku(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,t){this.comparator=e,this.root=t||Ae.EMPTY}insert(e,t){return new ue(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ae.BLACK,null,null))}remove(e){return new ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ae.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vi(this.root,e,this.comparator,!1)}getReverseIterator(){return new vi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vi(this.root,e,this.comparator,!0)}}class vi{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?r(e.key,t):1,t&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ae{constructor(e,t,r,i,s){this.key=e,this.value=t,this.color=r??Ae.RED,this.left=i??Ae.EMPTY,this.right=s??Ae.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,s){return new Ae(e??this.key,t??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,r),null):s===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ae.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Ae.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ae.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ae.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}Ae.EMPTY=null,Ae.RED=!0,Ae.BLACK=!1;Ae.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(e,t,r,i,s){return this}insert(e,t,r){return new Ae(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e){this.comparator=e,this.data=new ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Hc(this.data.getIterator())}getIteratorFrom(e){return new Hc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Re)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Re(this.comparator);return t.data=e,t}}class Hc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e){this.fields=e,e.sort(be.comparator)}static empty(){return new He([])}unionWith(e){let t=new Re(be.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new He(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Mn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class $u extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new $u("Invalid base64 string: "+s):s}}(e);return new Pe(t)}static fromUint8Array(e){const t=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Pe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Pe.EMPTY_BYTE_STRING=new Pe("");const gy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zt(n){if(ie(!!n),typeof n=="string"){let e=0;const t=gy.exec(n);if(ie(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ge(n.seconds),nanos:ge(n.nanos)}}function ge(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function un(n){return typeof n=="string"?Pe.fromBase64String(n):Pe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qo(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function zo(n){const e=n.mapValue.fields.__previous_value__;return qo(e)?zo(e):e}function Nr(n){const e=zt(n.mapValue.fields.__local_write_time__.timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(e,t,r,i,s,a,l,u,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class xr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new xr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?qo(n)?4:yy(n)?9007199254740991:10:H()}function st(n,e){if(n===e)return!0;const t=hn(n);if(t!==hn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Nr(n).isEqual(Nr(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=zt(i.timestampValue),l=zt(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(i,s){return un(i.bytesValue).isEqual(un(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(i,s){return ge(i.geoPointValue.latitude)===ge(s.geoPointValue.latitude)&&ge(i.geoPointValue.longitude)===ge(s.geoPointValue.longitude)}(n,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return ge(i.integerValue)===ge(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=ge(i.doubleValue),l=ge(s.doubleValue);return a===l?Bi(a)===Bi(l):isNaN(a)&&isNaN(l)}return!1}(n,e);case 9:return Mn(n.arrayValue.values||[],e.arrayValue.values||[],st);case 10:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(Wc(a)!==Wc(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!st(a[u],l[u])))return!1;return!0}(n,e);default:return H()}}function Dr(n,e){return(n.values||[]).find(t=>st(t,e))!==void 0}function Un(n,e){if(n===e)return 0;const t=hn(n),r=hn(e);if(t!==r)return ee(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ee(n.booleanValue,e.booleanValue);case 2:return function(s,a){const l=ge(s.integerValue||s.doubleValue),u=ge(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(n,e);case 3:return Gc(n.timestampValue,e.timestampValue);case 4:return Gc(Nr(n),Nr(e));case 5:return ee(n.stringValue,e.stringValue);case 6:return function(s,a){const l=un(s),u=un(a);return l.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let d=0;d<l.length&&d<u.length;d++){const g=ee(l[d],u[d]);if(g!==0)return g}return ee(l.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,a){const l=ee(ge(s.latitude),ge(a.latitude));return l!==0?l:ee(ge(s.longitude),ge(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,a){const l=s.values||[],u=a.values||[];for(let d=0;d<l.length&&d<u.length;++d){const g=Un(l[d],u[d]);if(g)return g}return ee(l.length,u.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,a){if(s===Ei.mapValue&&a===Ei.mapValue)return 0;if(s===Ei.mapValue)return 1;if(a===Ei.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),d=a.fields||{},g=Object.keys(d);u.sort(),g.sort();for(let T=0;T<u.length&&T<g.length;++T){const b=ee(u[T],g[T]);if(b!==0)return b;const S=Un(l[u[T]],d[g[T]]);if(S!==0)return S}return ee(u.length,g.length)}(n.mapValue,e.mapValue);default:throw H()}}function Gc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ee(n,e);const t=zt(n),r=zt(e),i=ee(t.seconds,r.seconds);return i!==0?i:ee(t.nanos,r.nanos)}function Fn(n){return so(n)}function so(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=zt(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return un(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return z.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",i=!0;for(const s of t.values||[])i?i=!1:r+=",",r+=so(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${so(t.fields[a])}`;return i+"}"}(n.mapValue):H()}function oo(n){return!!n&&"integerValue"in n}function Wo(n){return!!n&&"arrayValue"in n}function Kc(n){return!!n&&"nullValue"in n}function $c(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Pi(n){return!!n&&"mapValue"in n}function Ar(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return mn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ar(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ar(n.arrayValue.values[t]);return e}return Object.assign({},n)}function yy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e){this.value=e}static empty(){return new Be({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Pi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ar(t)}setAll(e){let t=be.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!t.isImmediateParentOf(l)){const u=this.getFieldsMap(t);this.applyChanges(u,r,i),r={},i=[],t=l.popLast()}a?r[l.lastSegment()]=Ar(a):i.push(l.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,r,i)}delete(e){const t=this.field(e.popLast());Pi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return st(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Pi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){mn(t,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Be(Ar(this.value))}}function Qu(n){const e=[];return mn(n.fields,(t,r)=>{const i=new be([t]);if(Pi(r)){const s=Qu(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new He(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(e,t,r,i,s,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Oe(e,0,K.min(),K.min(),K.min(),Be.empty(),0)}static newFoundDocument(e,t,r,i){return new Oe(e,1,t,K.min(),r,i,0)}static newNoDocument(e,t){return new Oe(e,2,t,K.min(),K.min(),Be.empty(),0)}static newUnknownDocument(e,t){return new Oe(e,3,t,K.min(),K.min(),Be.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(K.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Be.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Be.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=K.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ji{constructor(e,t){this.position=e,this.inclusive=t}}function Qc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const s=e[i],a=n.position[i];if(s.field.isKeyField()?r=z.comparator(z.fromName(a.referenceValue),t.key):r=Un(a,t.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Yc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!st(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class qi{constructor(e,t="asc"){this.field=e,this.dir=t}}function vy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Yu{}class _e extends Yu{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Ty(e,t,r):t==="array-contains"?new Ay(e,r):t==="in"?new by(e,r):t==="not-in"?new Ry(e,r):t==="array-contains-any"?new Sy(e,r):new _e(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new wy(e,r):new Iy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Un(t,this.value)):t!==null&&hn(this.value)===hn(t)&&this.matchesComparison(Un(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ot extends Yu{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new ot(e,t)}matches(e){return Xu(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Xu(n){return n.op==="and"}function Ju(n){return Ey(n)&&Xu(n)}function Ey(n){for(const e of n.filters)if(e instanceof ot)return!1;return!0}function ao(n){if(n instanceof _e)return n.field.canonicalString()+n.op.toString()+Fn(n.value);if(Ju(n))return n.filters.map(e=>ao(e)).join(",");{const e=n.filters.map(t=>ao(t)).join(",");return`${n.op}(${e})`}}function Zu(n,e){return n instanceof _e?function(r,i){return i instanceof _e&&r.op===i.op&&r.field.isEqual(i.field)&&st(r.value,i.value)}(n,e):n instanceof ot?function(r,i){return i instanceof ot&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&Zu(a,i.filters[l]),!0):!1}(n,e):void H()}function eh(n){return n instanceof _e?function(t){return`${t.field.canonicalString()} ${t.op} ${Fn(t.value)}`}(n):n instanceof ot?function(t){return t.op.toString()+" {"+t.getFilters().map(eh).join(" ,")+"}"}(n):"Filter"}class Ty extends _e{constructor(e,t,r){super(e,t,r),this.key=z.fromName(r.referenceValue)}matches(e){const t=z.comparator(e.key,this.key);return this.matchesComparison(t)}}class wy extends _e{constructor(e,t){super(e,"in",t),this.keys=th("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Iy extends _e{constructor(e,t){super(e,"not-in",t),this.keys=th("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function th(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>z.fromName(r.referenceValue))}class Ay extends _e{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Wo(t)&&Dr(t.arrayValue,this.value)}}class by extends _e{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Dr(this.value.arrayValue,t)}}class Ry extends _e{constructor(e,t){super(e,"not-in",t)}matches(e){if(Dr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Dr(this.value.arrayValue,t)}}class Sy extends _e{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Wo(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Dr(this.value.arrayValue,r))}}/**
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
 */class Py{constructor(e,t=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function Xc(n,e=null,t=[],r=[],i=null,s=null,a=null){return new Py(n,e,t,r,i,s,a)}function Ho(n){const e=$(n);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>ao(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ts(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Fn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Fn(r)).join(",")),e.ue=t}return e.ue}function Go(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!vy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Zu(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Yc(n.startAt,e.startAt)&&Yc(n.endAt,e.endAt)}function co(n){return z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,t=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Cy(n,e,t,r,i,s,a,l){return new ns(n,e,t,r,i,s,a,l)}function Ko(n){return new ns(n)}function Jc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ky(n){return n.collectionGroup!==null}function br(n){const e=$(n);if(e.ce===null){e.ce=[];const t=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),t.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Re(be.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(s=>{t.has(s.canonicalString())||s.isKeyField()||e.ce.push(new qi(s,r))}),t.has(be.keyField().canonicalString())||e.ce.push(new qi(be.keyField(),r))}return e.ce}function nt(n){const e=$(n);return e.le||(e.le=Ny(e,br(n))),e.le}function Ny(n,e){if(n.limitType==="F")return Xc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new qi(i.field,s)});const t=n.endAt?new ji(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ji(n.startAt.position,n.startAt.inclusive):null;return Xc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function lo(n,e,t){return new ns(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function rs(n,e){return Go(nt(n),nt(e))&&n.limitType===e.limitType}function nh(n){return`${Ho(nt(n))}|lt:${n.limitType}`}function Sn(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(i=>eh(i)).join(", ")}]`),ts(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(i=>Fn(i)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(i=>Fn(i)).join(",")),`Target(${r})`}(nt(n))}; limitType=${n.limitType})`}function is(n,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):z.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,e)&&function(r,i){for(const s of br(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const d=Qc(a,l,u);return a.inclusive?d<=0:d<0}(r.startAt,br(r),i)||r.endAt&&!function(a,l,u){const d=Qc(a,l,u);return a.inclusive?d>=0:d>0}(r.endAt,br(r),i))}(n,e)}function xy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function rh(n){return(e,t)=>{let r=!1;for(const i of br(n)){const s=Dy(i,e,t);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Dy(n,e,t){const r=n.field.isKeyField()?z.comparator(e.key,t.key):function(s,a,l){const u=a.data.field(s),d=l.data.field(s);return u!==null&&d!==null?Un(u,d):H()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){mn(this.inner,(t,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Ku(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oy=new ue(z.comparator);function wt(){return Oy}const ih=new ue(z.comparator);function vr(...n){let e=ih;for(const t of n)e=e.insert(t.key,t);return e}function sh(n){let e=ih;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Zt(){return Rr()}function oh(){return Rr()}function Rr(){return new Hn(n=>n.toString(),(n,e)=>n.isEqual(e))}const Vy=new ue(z.comparator),Ly=new Re(z.comparator);function Y(...n){let e=Ly;for(const t of n)e=e.add(t);return e}const My=new Re(ee);function Uy(){return My}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bi(e)?"-0":e}}function ch(n){return{integerValue:""+n}}function Fy(n,e){return my(e)?ch(e):ah(n,e)}/**
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
 */class ss{constructor(){this._=void 0}}function By(n,e,t){return n instanceof zi?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&qo(s)&&(s=zo(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(t,e):n instanceof Or?uh(n,e):n instanceof Vr?hh(n,e):function(i,s){const a=lh(i,s),l=Zc(a)+Zc(i.Pe);return oo(a)&&oo(i.Pe)?ch(l):ah(i.serializer,l)}(n,e)}function jy(n,e,t){return n instanceof Or?uh(n,e):n instanceof Vr?hh(n,e):t}function lh(n,e){return n instanceof Wi?function(r){return oo(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class zi extends ss{}class Or extends ss{constructor(e){super(),this.elements=e}}function uh(n,e){const t=dh(e);for(const r of n.elements)t.some(i=>st(i,r))||t.push(r);return{arrayValue:{values:t}}}class Vr extends ss{constructor(e){super(),this.elements=e}}function hh(n,e){let t=dh(e);for(const r of n.elements)t=t.filter(i=>!st(i,r));return{arrayValue:{values:t}}}class Wi extends ss{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function Zc(n){return ge(n.integerValue||n.doubleValue)}function dh(n){return Wo(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function qy(n,e){return n.field.isEqual(e.field)&&function(r,i){return r instanceof Or&&i instanceof Or||r instanceof Vr&&i instanceof Vr?Mn(r.elements,i.elements,st):r instanceof Wi&&i instanceof Wi?st(r.Pe,i.Pe):r instanceof zi&&i instanceof zi}(n.transform,e.transform)}class zy{constructor(e,t){this.version=e,this.transformResults=t}}class rt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new rt}static exists(e){return new rt(void 0,e)}static updateTime(e){return new rt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ci(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class os{}function fh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new mh(n.key,rt.none()):new Wr(n.key,n.data,rt.none());{const t=n.data,r=Be.empty();let i=new Re(be.comparator);for(let s of e.fields)if(!i.has(s)){let a=t.field(s);a===null&&s.length>1&&(s=s.popLast(),a=t.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new Gt(n.key,r,new He(i.toArray()),rt.none())}}function Wy(n,e,t){n instanceof Wr?function(i,s,a){const l=i.value.clone(),u=tl(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(n,e,t):n instanceof Gt?function(i,s,a){if(!Ci(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=tl(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(ph(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function Sr(n,e,t,r){return n instanceof Wr?function(s,a,l,u){if(!Ci(s.precondition,a))return l;const d=s.value.clone(),g=nl(s.fieldTransforms,u,a);return d.setAll(g),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,e,t,r):n instanceof Gt?function(s,a,l,u){if(!Ci(s.precondition,a))return l;const d=nl(s.fieldTransforms,u,a),g=a.data;return g.setAll(ph(s)),g.setAll(d),a.convertToFoundDocument(a.version,g).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(T=>T.field))}(n,e,t,r):function(s,a,l){return Ci(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(n,e,t)}function Hy(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),s=lh(r.transform,i||null);s!=null&&(t===null&&(t=Be.empty()),t.set(r.field,s))}return t||null}function el(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Mn(r,i,(s,a)=>qy(s,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Wr extends os{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Gt extends os{constructor(e,t,r,i,s=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function ph(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function tl(n,e,t){const r=new Map;ie(n.length===t.length);for(let i=0;i<t.length;i++){const s=n[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,jy(a,l,t[i]))}return r}function nl(n,e,t){const r=new Map;for(const i of n){const s=i.transform,a=t.data.field(i.field);r.set(i.field,By(s,a,e))}return r}class mh extends os{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gy extends os{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ky{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&Wy(s,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Sr(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Sr(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=oh();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=t.has(i.key)?null:l;const u=fh(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(K.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Y())}isEqual(e){return this.batchId===e.batchId&&Mn(this.mutations,e.mutations,(t,r)=>el(t,r))&&Mn(this.baseMutations,e.baseMutations,(t,r)=>el(t,r))}}class $o{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){ie(e.mutations.length===r.length);let i=function(){return Vy}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new $o(e,t,r,i)}}/**
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
 */class $y{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Qy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me,J;function Yy(n){switch(n){default:return H();case P.CANCELLED:case P.UNKNOWN:case P.DEADLINE_EXCEEDED:case P.RESOURCE_EXHAUSTED:case P.INTERNAL:case P.UNAVAILABLE:case P.UNAUTHENTICATED:return!1;case P.INVALID_ARGUMENT:case P.NOT_FOUND:case P.ALREADY_EXISTS:case P.PERMISSION_DENIED:case P.FAILED_PRECONDITION:case P.ABORTED:case P.OUT_OF_RANGE:case P.UNIMPLEMENTED:case P.DATA_LOSS:return!0}}function gh(n){if(n===void 0)return Tt("GRPC error has no .code"),P.UNKNOWN;switch(n){case me.OK:return P.OK;case me.CANCELLED:return P.CANCELLED;case me.UNKNOWN:return P.UNKNOWN;case me.DEADLINE_EXCEEDED:return P.DEADLINE_EXCEEDED;case me.RESOURCE_EXHAUSTED:return P.RESOURCE_EXHAUSTED;case me.INTERNAL:return P.INTERNAL;case me.UNAVAILABLE:return P.UNAVAILABLE;case me.UNAUTHENTICATED:return P.UNAUTHENTICATED;case me.INVALID_ARGUMENT:return P.INVALID_ARGUMENT;case me.NOT_FOUND:return P.NOT_FOUND;case me.ALREADY_EXISTS:return P.ALREADY_EXISTS;case me.PERMISSION_DENIED:return P.PERMISSION_DENIED;case me.FAILED_PRECONDITION:return P.FAILED_PRECONDITION;case me.ABORTED:return P.ABORTED;case me.OUT_OF_RANGE:return P.OUT_OF_RANGE;case me.UNIMPLEMENTED:return P.UNIMPLEMENTED;case me.DATA_LOSS:return P.DATA_LOSS;default:return H()}}(J=me||(me={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Xy(){return new TextEncoder}/**
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
 */const Jy=new nn([4294967295,4294967295],0);function rl(n){const e=Xy().encode(n),t=new Uu;return t.update(e),new Uint8Array(t.digest())}function il(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new nn([t,r],0),new nn([i,s],0)]}class Qo{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Er(`Invalid padding: ${t}`);if(r<0)throw new Er(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Er(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Er(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=nn.fromNumber(this.Ie)}Ee(e,t,r){let i=e.add(t.multiply(nn.fromNumber(r)));return i.compare(Jy)===1&&(i=new nn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=rl(e),[r,i]=il(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);if(!this.de(a))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new Qo(s,i,t);return r.forEach(l=>a.insert(l)),a}insert(e){if(this.Ie===0)return;const t=rl(e),[r,i]=il(t);for(let s=0;s<this.hashCount;s++){const a=this.Ee(r,i,s);this.Ae(a)}}Ae(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Er extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e,t,r,i,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Hr.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new as(K.min(),i,new ue(ee),wt(),Y())}}class Hr{constructor(e,t,r,i,s){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Hr(r,t,Y(),Y(),Y())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,t,r,i){this.Re=e,this.removedTargetIds=t,this.key=r,this.Ve=i}}class _h{constructor(e,t){this.targetId=e,this.me=t}}class yh{constructor(e,t,r=Pe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class sl{constructor(){this.fe=0,this.ge=al(),this.pe=Pe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=Y(),t=Y(),r=Y();return this.ge.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:H()}}),new Hr(this.pe,this.ye,e,t,r)}ve(){this.we=!1,this.ge=al()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,ie(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Zy{constructor(e){this.Le=e,this.Be=new Map,this.ke=wt(),this.qe=ol(),this.Qe=new ue(ee)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,t=>{const r=this.Ge(t);switch(e.state){case 0:this.ze(t)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),r.De(e.resumeToken));break;default:H()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach((r,i)=>{this.ze(i)&&t(i)})}He(e){const t=e.targetId,r=e.me.count,i=this.Je(t);if(i){const s=i.target;if(co(s))if(r===0){const a=new z(s.path);this.Ue(t,a,Oe.newNoDocument(a,K.min()))}else ie(r===1);else{const a=this.Ye(t);if(a!==r){const l=this.Ze(e),u=l?this.Xe(l,e,a):1;if(u!==0){this.je(t);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,d)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=t;let a,l;try{a=un(r).toUint8Array()}catch(u){if(u instanceof $u)return Ln("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Qo(a,i,s)}catch(u){return Ln(u instanceof Er?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,t,r){return t.me.count===r-this.nt(e,t.targetId)?0:2}nt(e,t){const r=this.Le.getRemoteKeysForTarget(t);let i=0;return r.forEach(s=>{const a=this.Le.tt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.Ue(t,s,null),i++)}),i}rt(e){const t=new Map;this.Be.forEach((s,a)=>{const l=this.Je(a);if(l){if(s.current&&co(l.target)){const u=new z(l.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Oe.newNoDocument(u,e))}s.be&&(t.set(a,s.Ce()),s.ve())}});let r=Y();this.qe.forEach((s,a)=>{let l=!0;a.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const i=new as(e,t,this.Qe,this.ke,r);return this.ke=wt(),this.qe=ol(),this.Qe=new ue(ee),i}$e(e,t){if(!this.ze(e))return;const r=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,r),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,r){if(!this.ze(e))return;const i=this.Ge(e);this.it(e,t)?i.Fe(t,1):i.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),r&&(this.ke=this.ke.insert(t,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new sl,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new Re(ee),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||B("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new sl),this.Le.getRemoteKeysForTarget(e).forEach(t=>{this.Ue(e,t,null)})}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function ol(){return new ue(z.comparator)}function al(){return new ue(z.comparator)}const ev={asc:"ASCENDING",desc:"DESCENDING"},tv={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nv={and:"AND",or:"OR"};class rv{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function uo(n,e){return n.useProto3Json||ts(e)?e:{value:e}}function Hi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function iv(n,e){return Hi(n,e.toTimestamp())}function it(n){return ie(!!n),K.fromTimestamp(function(t){const r=zt(t);return new ye(r.seconds,r.nanos)}(n))}function Yo(n,e){return ho(n,e).canonicalString()}function ho(n,e){const t=function(i){return new oe(["projects",i.projectId,"databases",i.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Eh(n){const e=oe.fromString(n);return ie(bh(e)),e}function fo(n,e){return Yo(n.databaseId,e.path)}function Ws(n,e){const t=Eh(e);if(t.get(1)!==n.databaseId.projectId)throw new q(P.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new q(P.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new z(wh(t))}function Th(n,e){return Yo(n.databaseId,e)}function sv(n){const e=Eh(n);return e.length===4?oe.emptyPath():wh(e)}function po(n){return new oe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function wh(n){return ie(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function cl(n,e,t){return{name:fo(n,e),fields:t.value.mapValue.fields}}function ov(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,g){return d.useProto3Json?(ie(g===void 0||typeof g=="string"),Pe.fromBase64String(g||"")):(ie(g===void 0||g instanceof Buffer||g instanceof Uint8Array),Pe.fromUint8Array(g||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&function(d){const g=d.code===void 0?P.UNKNOWN:gh(d.code);return new q(g,d.message||"")}(a);t=new yh(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ws(n,r.document.name),s=it(r.document.updateTime),a=r.document.createTime?it(r.document.createTime):K.min(),l=new Be({mapValue:{fields:r.document.fields}}),u=Oe.newFoundDocument(i,s,a,l),d=r.targetIds||[],g=r.removedTargetIds||[];t=new ki(d,g,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ws(n,r.document),s=r.readTime?it(r.readTime):K.min(),a=Oe.newNoDocument(i,s),l=r.removedTargetIds||[];t=new ki([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ws(n,r.document),s=r.removedTargetIds||[];t=new ki([],s,i,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,a=new Qy(i,s),l=r.targetId;t=new _h(l,a)}}return t}function av(n,e){let t;if(e instanceof Wr)t={update:cl(n,e.key,e.value)};else if(e instanceof mh)t={delete:fo(n,e.key)};else if(e instanceof Gt)t={update:cl(n,e.key,e.data),updateMask:gv(e.fieldMask)};else{if(!(e instanceof Gy))return H();t={verify:fo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof zi)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Or)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Vr)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Wi)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw H()}(0,r))),e.precondition.isNone||(t.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:iv(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:H()}(n,e.precondition)),t}function cv(n,e){return n&&n.length>0?(ie(e!==void 0),n.map(t=>function(i,s){let a=i.updateTime?it(i.updateTime):it(s);return a.isEqual(K.min())&&(a=it(s)),new zy(a,i.transformResults||[])}(t,e))):[]}function lv(n,e){return{documents:[Th(n,e.path)]}}function uv(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Th(n,i);const s=function(d){if(d.length!==0)return Ah(ot.create(d,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const a=function(d){if(d.length!==0)return d.map(g=>function(b){return{field:Pn(b.field),direction:fv(b.dir)}}(g))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=uo(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:t,parent:i}}function hv(n){let e=sv(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){ie(r===1);const g=t.from[0];g.allDescendants?i=g.collectionId:e=e.child(g.collectionId)}let s=[];t.where&&(s=function(T){const b=Ih(T);return b instanceof ot&&Ju(b)?b.getFilters():[b]}(t.where));let a=[];t.orderBy&&(a=function(T){return T.map(b=>function(N){return new qi(Cn(N.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(N.direction))}(b))}(t.orderBy));let l=null;t.limit&&(l=function(T){let b;return b=typeof T=="object"?T.value:T,ts(b)?null:b}(t.limit));let u=null;t.startAt&&(u=function(T){const b=!!T.before,S=T.values||[];return new ji(S,b)}(t.startAt));let d=null;return t.endAt&&(d=function(T){const b=!T.before,S=T.values||[];return new ji(S,b)}(t.endAt)),Cy(e,i,a,s,l,"F",u,d)}function dv(n,e){const t=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Ih(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Cn(t.unaryFilter.field);return _e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Cn(t.unaryFilter.field);return _e.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Cn(t.unaryFilter.field);return _e.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Cn(t.unaryFilter.field);return _e.create(a,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(n):n.fieldFilter!==void 0?function(t){return _e.create(Cn(t.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ot.create(t.compositeFilter.filters.map(r=>Ih(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return H()}}(t.compositeFilter.op))}(n):H()}function fv(n){return ev[n]}function pv(n){return tv[n]}function mv(n){return nv[n]}function Pn(n){return{fieldPath:n.canonicalString()}}function Cn(n){return be.fromServerFormat(n.fieldPath)}function Ah(n){return n instanceof _e?function(t){if(t.op==="=="){if($c(t.value))return{unaryFilter:{field:Pn(t.field),op:"IS_NAN"}};if(Kc(t.value))return{unaryFilter:{field:Pn(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if($c(t.value))return{unaryFilter:{field:Pn(t.field),op:"IS_NOT_NAN"}};if(Kc(t.value))return{unaryFilter:{field:Pn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pn(t.field),op:pv(t.op),value:t.value}}}(n):n instanceof ot?function(t){const r=t.getFilters().map(i=>Ah(i));return r.length===1?r[0]:{compositeFilter:{op:mv(t.op),filters:r}}}(n):H()}function gv(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function bh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,r,i,s=K.min(),a=K.min(),l=Pe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new Mt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Mt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e){this.ct=e}}function yv(n){const e=hv({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?lo(e,e.limit,"L"):e}/**
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
 */class vv{constructor(){this.an=new Ev}addToCollectionParentIndex(e,t){return this.an.add(t),C.resolve()}getCollectionParents(e,t){return C.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return C.resolve()}deleteFieldIndex(e,t){return C.resolve()}deleteAllFieldIndexes(e){return C.resolve()}createTargetIndexes(e,t){return C.resolve()}getDocumentsMatchingTarget(e,t){return C.resolve(null)}getIndexType(e,t){return C.resolve(0)}getFieldIndexes(e,t){return C.resolve([])}getNextCollectionGroupToUpdate(e){return C.resolve(null)}getMinOffset(e,t){return C.resolve(qt.min())}getMinOffsetFromCollectionGroup(e,t){return C.resolve(qt.min())}updateCollectionGroup(e,t,r){return C.resolve()}updateIndexEntries(e,t){return C.resolve()}}class Ev{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Re(oe.comparator),s=!i.has(r);return this.index[t]=i.add(r),s}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Re(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static Ln(){return new Bn(0)}static Bn(){return new Bn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv{constructor(){this.changes=new Hn(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?C.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class wv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(r!==null&&Sr(r.mutation,i,He.empty(),ye.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,Y()).next(()=>r))}getLocalViewOfDocuments(e,t,r=Y()){const i=Zt();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,r).next(s=>{let a=vr();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=Zt();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,Y()))}populateOverlays(e,t,r){const i=[];return r.forEach(s=>{t.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{t.set(a,l)})})}computeViews(e,t,r,i){let s=wt();const a=Rr(),l=function(){return Rr()}();return t.forEach((u,d)=>{const g=r.get(d.key);i.has(d.key)&&(g===void 0||g.mutation instanceof Gt)?s=s.insert(d.key,d):g!==void 0?(a.set(d.key,g.mutation.getFieldMask()),Sr(g.mutation,d,g.mutation.getFieldMask(),ye.now())):a.set(d.key,He.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,g)=>a.set(d,g)),t.forEach((d,g)=>{var T;return l.set(d,new wv(g,(T=a.get(d))!==null&&T!==void 0?T:null))}),l))}recalculateAndSaveOverlays(e,t){const r=Rr();let i=new ue((a,l)=>a-l),s=Y();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const l of a)l.keys().forEach(u=>{const d=t.get(u);if(d===null)return;let g=r.get(u)||He.empty();g=l.applyToLocalView(d,g),r.set(u,g);const T=(i.get(l.batchId)||Y()).add(u);i=i.insert(l.batchId,T)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,g=u.value,T=oh();g.forEach(b=>{if(!s.has(b)){const S=fh(t.get(b),r.get(b));S!==null&&T.set(b,S),s=s.add(b)}}),a.push(this.documentOverlayCache.saveOverlays(e,d,T))}return C.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,i){return function(a){return z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ky(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-s.size):C.resolve(Zt());let l=-1,u=s;return a.next(d=>C.forEach(d,(g,T)=>(l<T.largestBatchId&&(l=T.largestBatchId),s.get(g)?C.resolve():this.remoteDocumentCache.getEntry(e,g).next(b=>{u=u.insert(g,b)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,Y())).next(g=>({batchId:l,changes:sh(g)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new z(t)).next(r=>{let i=vr();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const s=t.collectionGroup;let a=vr();return this.indexManager.getCollectionParents(e,s).next(l=>C.forEach(l,u=>{const d=function(T,b){return new ns(b,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(g=>{g.forEach((T,b)=>{a=a.insert(T,b)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s,i))).next(a=>{s.forEach((u,d)=>{const g=d.getKey();a.get(g)===null&&(a=a.insert(g,Oe.newInvalidDocument(g)))});let l=vr();return a.forEach((u,d)=>{const g=s.get(u);g!==void 0&&Sr(g.mutation,d,He.empty(),ye.now()),is(t,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Av{constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}getBundleMetadata(e,t){return C.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,function(i){return{id:i.id,version:i.version,createTime:it(i.createTime)}}(t)),C.resolve()}getNamedQuery(e,t){return C.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,function(i){return{name:i.name,query:yv(i.bundledQuery),readTime:it(i.readTime)}}(t)),C.resolve()}}/**
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
 */class bv{constructor(){this.overlays=new ue(z.comparator),this.Pr=new Map}getOverlay(e,t){return C.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Zt();return C.forEach(t,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((i,s)=>{this.ht(e,t,s)}),C.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.Pr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Pr.delete(r)),C.resolve()}getOverlaysForCollection(e,t,r){const i=Zt(),s=t.length+1,a=new z(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!t.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return C.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let s=new ue((d,g)=>d-g);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===t&&d.largestBatchId>r){let g=s.get(d.largestBatchId);g===null&&(g=Zt(),s=s.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}const l=Zt(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,g)=>l.set(d,g)),!(l.size()>=i)););return C.resolve(l)}ht(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Pr.get(i.largestBatchId).delete(r.key);this.Pr.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new $y(t,r));let s=this.Pr.get(t);s===void 0&&(s=Y(),this.Pr.set(t,s)),this.Pr.set(t,s.add(r.key))}}/**
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
 */class Rv{constructor(){this.sessionToken=Pe.EMPTY_BYTE_STRING}getSessionToken(e){return C.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,C.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(){this.Ir=new Re(Ee.Tr),this.Er=new Re(Ee.dr)}isEmpty(){return this.Ir.isEmpty()}addReference(e,t){const r=new Ee(e,t);this.Ir=this.Ir.add(r),this.Er=this.Er.add(r)}Ar(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Rr(new Ee(e,t))}Vr(e,t){e.forEach(r=>this.removeReference(r,t))}mr(e){const t=new z(new oe([])),r=new Ee(t,e),i=new Ee(t,e+1),s=[];return this.Er.forEachInRange([r,i],a=>{this.Rr(a),s.push(a.key)}),s}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Er=this.Er.delete(e)}pr(e){const t=new z(new oe([])),r=new Ee(t,e),i=new Ee(t,e+1);let s=Y();return this.Er.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const t=new Ee(e,0),r=this.Ir.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ee{constructor(e,t){this.key=e,this.yr=t}static Tr(e,t){return z.comparator(e.key,t.key)||ee(e.yr,t.yr)}static dr(e,t){return ee(e.yr,t.yr)||z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new Re(Ee.Tr)}checkEmpty(e){return C.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const s=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Ky(s,t,r,i);this.mutationQueue.push(a);for(const l of i)this.Sr=this.Sr.add(new Ee(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return C.resolve(a)}lookupMutationBatch(e,t){return C.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Dr(r),s=i<0?0:i;return C.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return C.resolve(this.mutationQueue.length===0?-1:this.wr-1)}getAllMutationBatches(e){return C.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ee(t,0),i=new Ee(t,Number.POSITIVE_INFINITY),s=[];return this.Sr.forEachInRange([r,i],a=>{const l=this.br(a.yr);s.push(l)}),C.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Re(ee);return t.forEach(i=>{const s=new Ee(i,0),a=new Ee(i,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([s,a],l=>{r=r.add(l.yr)})}),C.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let s=r;z.isDocumentKey(s)||(s=s.child(""));const a=new Ee(new z(s),0);let l=new Re(ee);return this.Sr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(l=l.add(u.yr)),!0)},a),C.resolve(this.Cr(l))}Cr(e){const t=[];return e.forEach(r=>{const i=this.br(r);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){ie(this.vr(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Sr;return C.forEach(t.mutations,i=>{const s=new Ee(i.key,t.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Sr=r})}xn(e){}containsKey(e,t){const r=new Ee(t,0),i=this.Sr.firstAfterOrEqual(r);return C.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,C.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}br(e){const t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e){this.Fr=e,this.docs=function(){return new ue(z.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),s=i?i.size:0,a=this.Fr(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return C.resolve(r?r.document.mutableCopy():Oe.newInvalidDocument(t))}getEntries(e,t){let r=wt();return t.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Oe.newInvalidDocument(i))}),C.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let s=wt();const a=t.path,l=new z(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:g}}=u.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||hy(uy(g),r)<=0||(i.has(g.key)||is(t,g))&&(s=s.insert(g.key,g.mutableCopy()))}return C.resolve(s)}getAllFromCollectionGroup(e,t,r,i){H()}Mr(e,t){return C.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Cv(this)}getSize(e){return C.resolve(this.size)}}class Cv extends Tv{constructor(e){super(),this.ur=e}applyChanges(e){const t=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?t.push(this.ur.addEntry(e,i)):this.ur.removeEntry(r)}),C.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{constructor(e){this.persistence=e,this.Or=new Hn(t=>Ho(t),Go),this.lastRemoteSnapshotVersion=K.min(),this.highestTargetId=0,this.Nr=0,this.Lr=new Xo,this.targetCount=0,this.Br=Bn.Ln()}forEachTarget(e,t){return this.Or.forEach((r,i)=>t(i)),C.resolve()}getLastRemoteSnapshotVersion(e){return C.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return C.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),C.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Nr&&(this.Nr=t),C.resolve()}Qn(e){this.Or.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Br=new Bn(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,C.resolve()}updateTargetData(e,t){return this.Qn(t),C.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Lr.mr(t.targetId),this.targetCount-=1,C.resolve()}removeTargets(e,t,r){let i=0;const s=[];return this.Or.forEach((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.Or.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),C.waitFor(s).next(()=>i)}getTargetCount(e){return C.resolve(this.targetCount)}getTargetData(e,t){const r=this.Or.get(t)||null;return C.resolve(r)}addMatchingKeys(e,t,r){return this.Lr.Ar(t,r),C.resolve()}removeMatchingKeys(e,t,r){this.Lr.Vr(t,r);const i=this.persistence.referenceDelegate,s=[];return i&&t.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),C.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.Lr.mr(t),C.resolve()}getMatchingKeysForTargetId(e,t){const r=this.Lr.pr(t);return C.resolve(r)}containsKey(e,t){return C.resolve(this.Lr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,t){this.kr={},this.overlays={},this.qr=new jo(0),this.Qr=!1,this.Qr=!0,this.Kr=new Rv,this.referenceDelegate=e(this),this.$r=new kv(this),this.indexManager=new vv,this.remoteDocumentCache=function(i){return new Pv(i)}(r=>this.referenceDelegate.Ur(r)),this.serializer=new _v(t),this.Wr=new Av(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new bv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.kr[e.toKey()];return r||(r=new Sv(t,this.referenceDelegate),this.kr[e.toKey()]=r),r}getGlobalsCache(){return this.Kr}getTargetCache(){return this.$r}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Wr}runTransaction(e,t,r){B("MemoryPersistence","Starting transaction:",e);const i=new xv(this.qr.next());return this.referenceDelegate.Gr(),r(i).next(s=>this.referenceDelegate.zr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}jr(e,t){return C.or(Object.values(this.kr).map(r=>()=>r.containsKey(e,t)))}}class xv extends fy{constructor(e){super(),this.currentSequenceNumber=e}}class Jo{constructor(e){this.persistence=e,this.Hr=new Xo,this.Jr=null}static Yr(e){return new Jo(e)}get Zr(){if(this.Jr)return this.Jr;throw H()}addReference(e,t,r){return this.Hr.addReference(r,t),this.Zr.delete(r.toString()),C.resolve()}removeReference(e,t,r){return this.Hr.removeReference(r,t),this.Zr.add(r.toString()),C.resolve()}markPotentiallyOrphaned(e,t){return this.Zr.add(t.toString()),C.resolve()}removeTarget(e,t){this.Hr.mr(t.targetId).forEach(i=>this.Zr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(s=>this.Zr.add(s.toString()))}).next(()=>r.removeTargetData(e,t))}Gr(){this.Jr=new Set}zr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return C.forEach(this.Zr,r=>{const i=z.fromPath(r);return this.Xr(e,i).next(s=>{s||t.removeEntry(i,K.min())})}).next(()=>(this.Jr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Xr(e,t).next(r=>{r?this.Zr.delete(t.toString()):this.Zr.add(t.toString())})}Ur(e){return 0}Xr(e,t){return C.or([()=>C.resolve(this.Hr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.jr(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Ki=r,this.$i=i}static Ui(e,t){let r=Y(),i=Y();for(const s of t.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Zo(e,t.fromCache,r,i)}}/**
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
 */class Dv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Ov{constructor(){this.Wi=!1,this.Gi=!1,this.zi=100,this.ji=function(){return nf()?8:py(Se())>0?6:4}()}initialize(e,t){this.Hi=e,this.indexManager=t,this.Wi=!0}getDocumentsMatchingQuery(e,t,r,i){const s={result:null};return this.Ji(e,t).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Yi(e,t,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new Dv;return this.Zi(e,t,a).next(l=>{if(s.result=l,this.Gi)return this.Xi(e,t,a,l.size)})}).next(()=>s.result)}Xi(e,t,r,i){return r.documentReadCount<this.zi?(pr()<=X.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",Sn(t),"since it only creates cache indexes for collection contains","more than or equal to",this.zi,"documents"),C.resolve()):(pr()<=X.DEBUG&&B("QueryEngine","Query:",Sn(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ji*i?(pr()<=X.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",Sn(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,nt(t))):C.resolve())}Ji(e,t){if(Jc(t))return C.resolve(null);let r=nt(t);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=lo(t,null,"F"),r=nt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=Y(...s);return this.Hi.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.es(t,l);return this.ts(t,d,a,u.readTime)?this.Ji(e,lo(t,null,"F")):this.ns(e,d,t,u)}))})))}Yi(e,t,r,i){return Jc(t)||i.isEqual(K.min())?C.resolve(null):this.Hi.getDocuments(e,r).next(s=>{const a=this.es(t,s);return this.ts(t,a,r,i)?C.resolve(null):(pr()<=X.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Sn(t)),this.ns(e,a,t,ly(i,-1)).next(l=>l))})}es(e,t){let r=new Re(rh(e));return t.forEach((i,s)=>{is(e,s)&&(r=r.add(s))}),r}ts(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const s=e.limitType==="F"?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Zi(e,t,r){return pr()<=X.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",Sn(t)),this.Hi.getDocumentsMatchingQuery(e,t,qt.min(),r)}ns(e,t,r,i){return this.Hi.getDocumentsMatchingQuery(e,r,i).next(s=>(t.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,t,r,i){this.persistence=e,this.rs=t,this.serializer=i,this.ss=new ue(ee),this.os=new Hn(s=>Ho(s),Go),this._s=new Map,this.us=e.getRemoteDocumentCache(),this.$r=e.getTargetCache(),this.Wr=e.getBundleCache(),this.cs(r)}cs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Iv(this.us,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.us.setIndexManager(this.indexManager),this.rs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.ss))}}function Lv(n,e,t,r){return new Vv(n,e,t,r)}async function Rh(n,e){const t=$(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,t.cs(e),t.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=Y();for(const d of i){a.push(d.batchId);for(const g of d.mutations)u=u.add(g.key)}for(const d of s){l.push(d.batchId);for(const g of d.mutations)u=u.add(g.key)}return t.localDocuments.getDocuments(r,u).next(d=>({ls:d,removedBatchIds:a,addedBatchIds:l}))})})}function Mv(n,e){const t=$(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=t.us.newChangeBuffer({trackRemovals:!0});return function(l,u,d,g){const T=d.batch,b=T.keys();let S=C.resolve();return b.forEach(N=>{S=S.next(()=>g.getEntry(u,N)).next(U=>{const k=d.docVersions.get(N);ie(k!==null),U.version.compareTo(k)<0&&(T.applyToRemoteDocument(U,d),U.isValidDocument()&&(U.setReadTime(d.commitVersion),g.addEntry(U)))})}),S.next(()=>l.mutationQueue.removeMutationBatch(u,T))}(t,r,e,s).next(()=>s.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Y();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,i))})}function Sh(n){const e=$(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.$r.getLastRemoteSnapshotVersion(t))}function Uv(n,e){const t=$(n),r=e.snapshotVersion;let i=t.ss;return t.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=t.us.newChangeBuffer({trackRemovals:!0});i=t.ss;const l=[];e.targetChanges.forEach((g,T)=>{const b=i.get(T);if(!b)return;l.push(t.$r.removeMatchingKeys(s,g.removedDocuments,T).next(()=>t.$r.addMatchingKeys(s,g.addedDocuments,T)));let S=b.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(T)!==null?S=S.withResumeToken(Pe.EMPTY_BYTE_STRING,K.min()).withLastLimboFreeSnapshotVersion(K.min()):g.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(g.resumeToken,r)),i=i.insert(T,S),function(U,k,D){return U.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(b,S,g)&&l.push(t.$r.updateTargetData(s,S))});let u=wt(),d=Y();if(e.documentUpdates.forEach(g=>{e.resolvedLimboDocuments.has(g)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(s,g))}),l.push(Fv(s,a,e.documentUpdates).next(g=>{u=g.hs,d=g.Ps})),!r.isEqual(K.min())){const g=t.$r.getLastRemoteSnapshotVersion(s).next(T=>t.$r.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(g)}return C.waitFor(l).next(()=>a.apply(s)).next(()=>t.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(t.ss=i,s))}function Fv(n,e,t){let r=Y(),i=Y();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let a=wt();return t.forEach((l,u)=>{const d=s.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(K.min())?(e.removeEntry(l,u.readTime),a=a.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),a=a.insert(l,u)):B("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{hs:a,Ps:i}})}function Bv(n,e){const t=$(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function jv(n,e){const t=$(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return t.$r.getTargetData(r,e).next(s=>s?(i=s,C.resolve(i)):t.$r.allocateTargetId(r).next(a=>(i=new Mt(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.$r.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=t.ss.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.ss=t.ss.insert(r.targetId,r),t.os.set(e,r.targetId)),r})}async function mo(n,e,t){const r=$(n),i=r.ss.get(e),s=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",s,a=>r.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!zr(a))throw a;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}r.ss=r.ss.remove(e),r.os.delete(i.target)}function ll(n,e,t){const r=$(n);let i=K.min(),s=Y();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,d,g){const T=$(u),b=T.os.get(g);return b!==void 0?C.resolve(T.ss.get(b)):T.$r.getTargetData(d,g)}(r,a,nt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.$r.getMatchingKeysForTargetId(a,l.targetId).next(u=>{s=u})}).next(()=>r.rs.getDocumentsMatchingQuery(a,e,t?i:K.min(),t?s:Y())).next(l=>(qv(r,xy(e),l),{documents:l,Is:s})))}function qv(n,e,t){let r=n._s.get(e)||K.min();t.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n._s.set(e,r)}class ul{constructor(){this.activeTargetIds=Uy()}Vs(e){this.activeTargetIds=this.activeTargetIds.add(e)}fs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Rs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class zv{constructor(){this.io=new ul,this.so={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.io.Vs(e),this.so[e]||"not-current"}updateQueryState(e,t,r){this.so[e]=t}removeLocalQueryTarget(e){this.io.fs(e)}isLocalQueryTarget(e){return this.io.activeTargetIds.has(e)}clearQueryState(e){delete this.so[e]}getAllActiveQueryTargets(){return this.io.activeTargetIds}isActiveQueryTarget(e){return this.io.activeTargetIds.has(e)}start(){return this.io=new ul,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Wv{oo(e){}shutdown(){}}/**
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
 */class hl{constructor(){this._o=()=>this.ao(),this.uo=()=>this.co(),this.lo=[],this.ho()}oo(e){this.lo.push(e)}shutdown(){window.removeEventListener("online",this._o),window.removeEventListener("offline",this.uo)}ho(){window.addEventListener("online",this._o),window.addEventListener("offline",this.uo)}ao(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.lo)e(0)}co(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.lo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ti=null;function Hs(){return Ti===null?Ti=function(){return 268435456+Math.round(2147483648*Math.random())}():Ti++,"0x"+Ti.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e){this.Po=e.Po,this.Io=e.Io}To(e){this.Eo=e}Ao(e){this.Ro=e}Vo(e){this.mo=e}onMessage(e){this.fo=e}close(){this.Io()}send(e){this.Po(e)}po(){this.Eo()}yo(){this.Ro()}wo(e){this.mo(e)}So(e){this.fo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="WebChannelConnection";class Kv extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const r=t.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.bo=r+"://"+t.host,this.Do=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get vo(){return!1}Fo(t,r,i,s,a){const l=Hs(),u=this.Mo(t,r.toUriEncodedString());B("RestConnection",`Sending RPC '${t}' ${l}:`,u,i);const d={"google-cloud-resource-prefix":this.Do,"x-goog-request-params":this.Co};return this.xo(d,s,a),this.Oo(t,u,d,i).then(g=>(B("RestConnection",`Received RPC '${t}' ${l}: `,g),g),g=>{throw Ln("RestConnection",`RPC '${t}' ${l} failed with error: `,g,"url: ",u,"request:",i),g})}No(t,r,i,s,a,l){return this.Fo(t,r,i,s,a)}xo(t,r,i){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Wn}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>t[a]=s),i&&i.headers.forEach((s,a)=>t[a]=s)}Mo(t,r){const i=Hv[t];return`${this.bo}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Oo(e,t,r,i){const s=Hs();return new Promise((a,l)=>{const u=new Fu;u.setWithCredentials(!0),u.listenOnce(ju.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Si.NO_ERROR:const g=u.getResponseJson();B(xe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(g)),a(g);break;case Si.TIMEOUT:B(xe,`RPC '${e}' ${s} timed out`),l(new q(P.DEADLINE_EXCEEDED,"Request time out"));break;case Si.HTTP_ERROR:const T=u.getStatus();if(B(xe,`RPC '${e}' ${s} failed with status:`,T,"response text:",u.getResponseText()),T>0){let b=u.getResponseJson();Array.isArray(b)&&(b=b[0]);const S=b==null?void 0:b.error;if(S&&S.status&&S.message){const N=function(k){const D=k.toLowerCase().replace(/_/g,"-");return Object.values(P).indexOf(D)>=0?D:P.UNKNOWN}(S.status);l(new q(N,S.message))}else l(new q(P.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new q(P.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{B(xe,`RPC '${e}' ${s} completed.`)}});const d=JSON.stringify(i);B(xe,`RPC '${e}' ${s} sending request:`,i),u.send(t,"POST",d,r,15)})}Lo(e,t,r){const i=Hs(),s=[this.bo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Wu(),l=zu(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.xmlHttpFactory=new Bu({})),this.xo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const g=s.join("");B(xe,`Creating RPC '${e}' stream ${i}: ${g}`,u);const T=a.createWebChannel(g,u);let b=!1,S=!1;const N=new Gv({Po:k=>{S?B(xe,`Not sending because RPC '${e}' stream ${i} is closed:`,k):(b||(B(xe,`Opening RPC '${e}' stream ${i} transport.`),T.open(),b=!0),B(xe,`RPC '${e}' stream ${i} sending:`,k),T.send(k))},Io:()=>T.close()}),U=(k,D,V)=>{k.listen(D,M=>{try{V(M)}catch(G){setTimeout(()=>{throw G},0)}})};return U(T,yr.EventType.OPEN,()=>{S||(B(xe,`RPC '${e}' stream ${i} transport opened.`),N.po())}),U(T,yr.EventType.CLOSE,()=>{S||(S=!0,B(xe,`RPC '${e}' stream ${i} transport closed`),N.wo())}),U(T,yr.EventType.ERROR,k=>{S||(S=!0,Ln(xe,`RPC '${e}' stream ${i} transport errored:`,k),N.wo(new q(P.UNAVAILABLE,"The operation could not be completed")))}),U(T,yr.EventType.MESSAGE,k=>{var D;if(!S){const V=k.data[0];ie(!!V);const M=V,G=M.error||((D=M[0])===null||D===void 0?void 0:D.error);if(G){B(xe,`RPC '${e}' stream ${i} received error:`,G);const te=G.status;let Q=function(m){const v=me[m];if(v!==void 0)return gh(v)}(te),E=G.message;Q===void 0&&(Q=P.INTERNAL,E="Unknown error status: "+te+" with message "+G.message),S=!0,N.wo(new q(Q,E)),T.close()}else B(xe,`RPC '${e}' stream ${i} received:`,V),N.So(V)}}),U(l,qu.STAT_EVENT,k=>{k.stat===io.PROXY?B(xe,`RPC '${e}' stream ${i} detected buffering proxy`):k.stat===io.NOPROXY&&B(xe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{N.yo()},0),N}}function Gs(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cs(n){return new rv(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,t,r=1e3,i=1.5,s=6e4){this.ai=e,this.timerId=t,this.Bo=r,this.ko=i,this.qo=s,this.Qo=0,this.Ko=null,this.$o=Date.now(),this.reset()}reset(){this.Qo=0}Uo(){this.Qo=this.qo}Wo(e){this.cancel();const t=Math.floor(this.Qo+this.Go()),r=Math.max(0,Date.now()-this.$o),i=Math.max(0,t-r);i>0&&B("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Qo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Ko=this.ai.enqueueAfterDelay(this.timerId,i,()=>(this.$o=Date.now(),e())),this.Qo*=this.ko,this.Qo<this.Bo&&(this.Qo=this.Bo),this.Qo>this.qo&&(this.Qo=this.qo)}zo(){this.Ko!==null&&(this.Ko.skipDelay(),this.Ko=null)}cancel(){this.Ko!==null&&(this.Ko.cancel(),this.Ko=null)}Go(){return(Math.random()-.5)*this.Qo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,t,r,i,s,a,l,u){this.ai=e,this.jo=r,this.Ho=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Jo=0,this.Yo=null,this.Zo=null,this.stream=null,this.Xo=0,this.e_=new Ph(e,t)}t_(){return this.state===1||this.state===5||this.n_()}n_(){return this.state===2||this.state===3}start(){this.Xo=0,this.state!==4?this.auth():this.r_()}async stop(){this.t_()&&await this.close(0)}i_(){this.state=0,this.e_.reset()}s_(){this.n_()&&this.Yo===null&&(this.Yo=this.ai.enqueueAfterDelay(this.jo,6e4,()=>this.o_()))}__(e){this.a_(),this.stream.send(e)}async o_(){if(this.n_())return this.close(0)}a_(){this.Yo&&(this.Yo.cancel(),this.Yo=null)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}async close(e,t){this.a_(),this.u_(),this.e_.cancel(),this.Jo++,e!==4?this.e_.reset():t&&t.code===P.RESOURCE_EXHAUSTED?(Tt(t.toString()),Tt("Using maximum backoff delay to prevent overloading the backend."),this.e_.Uo()):t&&t.code===P.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.c_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Vo(t)}c_(){}auth(){this.state=1;const e=this.l_(this.Jo),t=this.Jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Jo===t&&this.h_(r,i)},r=>{e(()=>{const i=new q(P.UNKNOWN,"Fetching auth token failed: "+r.message);return this.P_(i)})})}h_(e,t){const r=this.l_(this.Jo);this.stream=this.I_(e,t),this.stream.To(()=>{r(()=>this.listener.To())}),this.stream.Ao(()=>{r(()=>(this.state=2,this.Zo=this.ai.enqueueAfterDelay(this.Ho,1e4,()=>(this.n_()&&(this.state=3),Promise.resolve())),this.listener.Ao()))}),this.stream.Vo(i=>{r(()=>this.P_(i))}),this.stream.onMessage(i=>{r(()=>++this.Xo==1?this.T_(i):this.onNext(i))})}r_(){this.state=5,this.e_.Wo(async()=>{this.state=0,this.start()})}P_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}l_(e){return t=>{this.ai.enqueueAndForget(()=>this.Jo===e?t():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $v extends Ch{constructor(e,t,r,i,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}I_(e,t){return this.connection.Lo("Listen",e,t)}T_(e){return this.onNext(e)}onNext(e){this.e_.reset();const t=ov(this.serializer,e),r=function(s){if(!("targetChange"in s))return K.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?K.min():a.readTime?it(a.readTime):K.min()}(e);return this.listener.E_(t,r)}d_(e){const t={};t.database=po(this.serializer),t.addTarget=function(s,a){let l;const u=a.target;if(l=co(u)?{documents:lv(s,u)}:{query:uv(s,u)._t},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=vh(s,a.resumeToken);const d=uo(s,a.expectedCount);d!==null&&(l.expectedCount=d)}else if(a.snapshotVersion.compareTo(K.min())>0){l.readTime=Hi(s,a.snapshotVersion.toTimestamp());const d=uo(s,a.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=dv(this.serializer,e);r&&(t.labels=r),this.__(t)}A_(e){const t={};t.database=po(this.serializer),t.removeTarget=e,this.__(t)}}class Qv extends Ch{constructor(e,t,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,a),this.serializer=s}get R_(){return this.Xo>0}start(){this.lastStreamToken=void 0,super.start()}c_(){this.R_&&this.V_([])}I_(e,t){return this.connection.Lo("Write",e,t)}T_(e){return ie(!!e.streamToken),this.lastStreamToken=e.streamToken,ie(!e.writeResults||e.writeResults.length===0),this.listener.m_()}onNext(e){ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.e_.reset();const t=cv(e.writeResults,e.commitTime),r=it(e.commitTime);return this.listener.f_(r,t)}g_(){const e={};e.database=po(this.serializer),this.__(e)}V_(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>av(this.serializer,r))};this.__(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv extends class{}{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.p_=!1}y_(){if(this.p_)throw new q(P.FAILED_PRECONDITION,"The client has already been terminated.")}Fo(e,t,r,i){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Fo(e,ho(t,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new q(P.UNKNOWN,s.toString())})}No(e,t,r,i,s){return this.y_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.No(e,ho(t,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===P.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new q(P.UNKNOWN,a.toString())})}terminate(){this.p_=!0,this.connection.terminate()}}class Xv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.w_=0,this.S_=null,this.b_=!0}D_(){this.w_===0&&(this.C_("Unknown"),this.S_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.S_=null,this.v_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}F_(e){this.state==="Online"?this.C_("Unknown"):(this.w_++,this.w_>=1&&(this.M_(),this.v_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.M_(),this.w_=0,e==="Online"&&(this.b_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}v_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.b_?(Tt(t),this.b_=!1):B("OnlineStateTracker",t)}M_(){this.S_!==null&&(this.S_.cancel(),this.S_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e,t,r,i,s){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.x_=[],this.O_=new Map,this.N_=new Set,this.L_=[],this.B_=s,this.B_.oo(a=>{r.enqueueAndForget(async()=>{gn(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=$(u);d.N_.add(4),await Gr(d),d.k_.set("Unknown"),d.N_.delete(4),await ls(d)}(this))})}),this.k_=new Xv(r,i)}}async function ls(n){if(gn(n))for(const e of n.L_)await e(!0)}async function Gr(n){for(const e of n.L_)await e(!1)}function kh(n,e){const t=$(n);t.O_.has(e.targetId)||(t.O_.set(e.targetId,e),ra(t)?na(t):Gn(t).n_()&&ta(t,e))}function ea(n,e){const t=$(n),r=Gn(t);t.O_.delete(e),r.n_()&&Nh(t,e),t.O_.size===0&&(r.n_()?r.s_():gn(t)&&t.k_.set("Unknown"))}function ta(n,e){if(n.q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(K.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Gn(n).d_(e)}function Nh(n,e){n.q_.xe(e),Gn(n).A_(e)}function na(n){n.q_=new Zy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>n.O_.get(e)||null,tt:()=>n.datastore.serializer.databaseId}),Gn(n).start(),n.k_.D_()}function ra(n){return gn(n)&&!Gn(n).t_()&&n.O_.size>0}function gn(n){return $(n).N_.size===0}function xh(n){n.q_=void 0}async function Zv(n){n.k_.set("Online")}async function e0(n){n.O_.forEach((e,t)=>{ta(n,e)})}async function t0(n,e){xh(n),ra(n)?(n.k_.F_(e),na(n)):n.k_.set("Unknown")}async function n0(n,e,t){if(n.k_.set("Online"),e instanceof yh&&e.state===2&&e.cause)try{await async function(i,s){const a=s.cause;for(const l of s.targetIds)i.O_.has(l)&&(await i.remoteSyncer.rejectListen(l,a),i.O_.delete(l),i.q_.removeTarget(l))}(n,e)}catch(r){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gi(n,r)}else if(e instanceof ki?n.q_.Ke(e):e instanceof _h?n.q_.He(e):n.q_.We(e),!t.isEqual(K.min()))try{const r=await Sh(n.localStore);t.compareTo(r)>=0&&await function(s,a){const l=s.q_.rt(a);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const g=s.O_.get(d);g&&s.O_.set(d,g.withResumeToken(u.resumeToken,a))}}),l.targetMismatches.forEach((u,d)=>{const g=s.O_.get(u);if(!g)return;s.O_.set(u,g.withResumeToken(Pe.EMPTY_BYTE_STRING,g.snapshotVersion)),Nh(s,u);const T=new Mt(g.target,u,d,g.sequenceNumber);ta(s,T)}),s.remoteSyncer.applyRemoteEvent(l)}(n,t)}catch(r){B("RemoteStore","Failed to raise snapshot:",r),await Gi(n,r)}}async function Gi(n,e,t){if(!zr(e))throw e;n.N_.add(1),await Gr(n),n.k_.set("Offline"),t||(t=()=>Sh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await t(),n.N_.delete(1),await ls(n)})}function Dh(n,e){return e().catch(t=>Gi(n,t,e))}async function us(n){const e=$(n),t=Wt(e);let r=e.x_.length>0?e.x_[e.x_.length-1].batchId:-1;for(;r0(e);)try{const i=await Bv(e.localStore,r);if(i===null){e.x_.length===0&&t.s_();break}r=i.batchId,i0(e,i)}catch(i){await Gi(e,i)}Oh(e)&&Vh(e)}function r0(n){return gn(n)&&n.x_.length<10}function i0(n,e){n.x_.push(e);const t=Wt(n);t.n_()&&t.R_&&t.V_(e.mutations)}function Oh(n){return gn(n)&&!Wt(n).t_()&&n.x_.length>0}function Vh(n){Wt(n).start()}async function s0(n){Wt(n).g_()}async function o0(n){const e=Wt(n);for(const t of n.x_)e.V_(t.mutations)}async function a0(n,e,t){const r=n.x_.shift(),i=$o.from(r,e,t);await Dh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await us(n)}async function c0(n,e){e&&Wt(n).R_&&await async function(r,i){if(function(a){return Yy(a)&&a!==P.ABORTED}(i.code)){const s=r.x_.shift();Wt(r).i_(),await Dh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await us(r)}}(n,e),Oh(n)&&Vh(n)}async function dl(n,e){const t=$(n);t.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const r=gn(t);t.N_.add(3),await Gr(t),r&&t.k_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.N_.delete(3),await ls(t)}async function l0(n,e){const t=$(n);e?(t.N_.delete(2),await ls(t)):e||(t.N_.add(2),await Gr(t),t.k_.set("Unknown"))}function Gn(n){return n.Q_||(n.Q_=function(t,r,i){const s=$(t);return s.y_(),new $v(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{To:Zv.bind(null,n),Ao:e0.bind(null,n),Vo:t0.bind(null,n),E_:n0.bind(null,n)}),n.L_.push(async e=>{e?(n.Q_.i_(),ra(n)?na(n):n.k_.set("Unknown")):(await n.Q_.stop(),xh(n))})),n.Q_}function Wt(n){return n.K_||(n.K_=function(t,r,i){const s=$(t);return s.y_(),new Qv(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{To:()=>Promise.resolve(),Ao:s0.bind(null,n),Vo:c0.bind(null,n),m_:o0.bind(null,n),f_:a0.bind(null,n)}),n.L_.push(async e=>{e?(n.K_.i_(),await us(n)):(await n.K_.stop(),n.x_.length>0&&(B("RemoteStore",`Stopping write stream with ${n.x_.length} pending writes`),n.x_=[]))})),n.K_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t,r,i,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,s){const a=Date.now()+r,l=new ia(e,t,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(P.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function sa(n,e){if(Tt("AsyncQueue",`${e}: ${n}`),zr(n))return new q(P.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.comparator=e?(t,r)=>e(t,r)||z.comparator(t.key,r.key):(t,r)=>z.comparator(t.key,r.key),this.keyedMap=vr(),this.sortedSet=new ue(this.comparator)}static emptySet(e){return new On(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof On)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new On;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this.U_=new ue(z.comparator)}track(e){const t=e.doc.key,r=this.U_.get(t);r?e.type!==0&&r.type===3?this.U_=this.U_.insert(t,e):e.type===3&&r.type!==1?this.U_=this.U_.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.U_=this.U_.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.U_=this.U_.remove(t):e.type===1&&r.type===2?this.U_=this.U_.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.U_=this.U_.insert(t,{type:2,doc:e.doc}):H():this.U_=this.U_.insert(t,e)}W_(){const e=[];return this.U_.inorderTraversal((t,r)=>{e.push(r)}),e}}class jn{constructor(e,t,r,i,s,a,l,u,d){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,t,r,i,s){const a=[];return t.forEach(l=>{a.push({type:0,doc:l})}),new jn(e,t,On.emptySet(t),a,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&rs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(){this.G_=void 0,this.z_=[]}j_(){return this.z_.some(e=>e.H_())}}class h0{constructor(){this.queries=pl(),this.onlineState="Unknown",this.J_=new Set}terminate(){(function(t,r){const i=$(t),s=i.queries;i.queries=pl(),s.forEach((a,l)=>{for(const u of l.z_)u.onError(r)})})(this,new q(P.ABORTED,"Firestore shutting down"))}}function pl(){return new Hn(n=>nh(n),rs)}async function Lh(n,e){const t=$(n);let r=3;const i=e.query;let s=t.queries.get(i);s?!s.j_()&&e.H_()&&(r=2):(s=new u0,r=e.H_()?0:1);try{switch(r){case 0:s.G_=await t.onListen(i,!0);break;case 1:s.G_=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(a){const l=sa(a,`Initialization of query '${Sn(e.query)}' failed`);return void e.onError(l)}t.queries.set(i,s),s.z_.push(e),e.Y_(t.onlineState),s.G_&&e.Z_(s.G_)&&oa(t)}async function Mh(n,e){const t=$(n),r=e.query;let i=3;const s=t.queries.get(r);if(s){const a=s.z_.indexOf(e);a>=0&&(s.z_.splice(a,1),s.z_.length===0?i=e.H_()?0:1:!s.j_()&&e.H_()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function d0(n,e){const t=$(n);let r=!1;for(const i of e){const s=i.query,a=t.queries.get(s);if(a){for(const l of a.z_)l.Z_(i)&&(r=!0);a.G_=i}}r&&oa(t)}function f0(n,e,t){const r=$(n),i=r.queries.get(e);if(i)for(const s of i.z_)s.onError(t);r.queries.delete(e)}function oa(n){n.J_.forEach(e=>{e.next()})}var go,ml;(ml=go||(go={})).X_="default",ml.Cache="cache";class Uh{constructor(e,t,r){this.query=e,this.ea=t,this.ta=!1,this.na=null,this.onlineState="Unknown",this.options=r||{}}Z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new jn(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ta?this.ra(e)&&(this.ea.next(e),t=!0):this.ia(e,this.onlineState)&&(this.sa(e),t=!0),this.na=e,t}onError(e){this.ea.error(e)}Y_(e){this.onlineState=e;let t=!1;return this.na&&!this.ta&&this.ia(this.na,e)&&(this.sa(this.na),t=!0),t}ia(e,t){if(!e.fromCache||!this.H_())return!0;const r=t!=="Offline";return(!this.options.oa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ra(e){if(e.docChanges.length>0)return!0;const t=this.na&&this.na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}sa(e){e=jn.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ta=!0,this.ea.next(e)}H_(){return this.options.source!==go.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.key=e}}class Bh{constructor(e){this.key=e}}class p0{constructor(e,t){this.query=e,this.Ia=t,this.Ta=null,this.hasCachedResults=!1,this.current=!1,this.Ea=Y(),this.mutatedKeys=Y(),this.da=rh(e),this.Aa=new On(this.da)}get Ra(){return this.Ia}Va(e,t){const r=t?t.ma:new fl,i=t?t.Aa:this.Aa;let s=t?t.mutatedKeys:this.mutatedKeys,a=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((g,T)=>{const b=i.get(g),S=is(this.query,T)?T:null,N=!!b&&this.mutatedKeys.has(b.key),U=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let k=!1;b&&S?b.data.isEqual(S.data)?N!==U&&(r.track({type:3,doc:S}),k=!0):this.fa(b,S)||(r.track({type:2,doc:S}),k=!0,(u&&this.da(S,u)>0||d&&this.da(S,d)<0)&&(l=!0)):!b&&S?(r.track({type:0,doc:S}),k=!0):b&&!S&&(r.track({type:1,doc:b}),k=!0,(u||d)&&(l=!0)),k&&(S?(a=a.add(S),s=U?s.add(g):s.delete(g)):(a=a.delete(g),s=s.delete(g)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const g=this.query.limitType==="F"?a.last():a.first();a=a.delete(g.key),s=s.delete(g.key),r.track({type:1,doc:g})}return{Aa:a,ma:r,ts:l,mutatedKeys:s}}fa(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const s=this.Aa;this.Aa=e.Aa,this.mutatedKeys=e.mutatedKeys;const a=e.ma.W_();a.sort((g,T)=>function(S,N){const U=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return U(S)-U(N)}(g.type,T.type)||this.da(g.doc,T.doc)),this.ga(r),i=i!=null&&i;const l=t&&!i?this.pa():[],u=this.Ea.size===0&&this.current&&!i?1:0,d=u!==this.Ta;return this.Ta=u,a.length!==0||d?{snapshot:new jn(this.query,e.Aa,s,a,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),ya:l}:{ya:l}}Y_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Aa:this.Aa,ma:new fl,mutatedKeys:this.mutatedKeys,ts:!1},!1)):{ya:[]}}wa(e){return!this.Ia.has(e)&&!!this.Aa.has(e)&&!this.Aa.get(e).hasLocalMutations}ga(e){e&&(e.addedDocuments.forEach(t=>this.Ia=this.Ia.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ia=this.Ia.delete(t)),this.current=e.current)}pa(){if(!this.current)return[];const e=this.Ea;this.Ea=Y(),this.Aa.forEach(r=>{this.wa(r.key)&&(this.Ea=this.Ea.add(r.key))});const t=[];return e.forEach(r=>{this.Ea.has(r)||t.push(new Bh(r))}),this.Ea.forEach(r=>{e.has(r)||t.push(new Fh(r))}),t}Sa(e){this.Ia=e.Is,this.Ea=Y();const t=this.Va(e.documents);return this.applyChanges(t,!0)}ba(){return jn.fromInitialDocuments(this.query,this.Aa,this.mutatedKeys,this.Ta===0,this.hasCachedResults)}}class m0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class g0{constructor(e){this.key=e,this.Da=!1}}class _0{constructor(e,t,r,i,s,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.va=new Hn(l=>nh(l),rs),this.Fa=new Map,this.Ma=new Set,this.xa=new ue(z.comparator),this.Oa=new Map,this.Na=new Xo,this.La={},this.Ba=new Map,this.ka=Bn.Bn(),this.onlineState="Unknown",this.qa=void 0}get isPrimaryClient(){return this.qa===!0}}async function y0(n,e,t=!0){const r=Gh(n);let i;const s=r.va.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ba()):i=await jh(r,e,t,!0),i}async function v0(n,e){const t=Gh(n);await jh(t,e,!0,!1)}async function jh(n,e,t,r){const i=await jv(n.localStore,nt(e)),s=i.targetId,a=t?n.sharedClientState.addLocalQueryTarget(s):"not-current";let l;return r&&(l=await E0(n,e,s,a==="current",i.resumeToken)),n.isPrimaryClient&&t&&kh(n.remoteStore,i),l}async function E0(n,e,t,r,i){n.Qa=(T,b,S)=>async function(U,k,D,V){let M=k.view.Va(D);M.ts&&(M=await ll(U.localStore,k.query,!1).then(({documents:E})=>k.view.Va(E,M)));const G=V&&V.targetChanges.get(k.targetId),te=V&&V.targetMismatches.get(k.targetId)!=null,Q=k.view.applyChanges(M,U.isPrimaryClient,G,te);return _l(U,k.targetId,Q.ya),Q.snapshot}(n,T,b,S);const s=await ll(n.localStore,e,!0),a=new p0(e,s.Is),l=a.Va(s.documents),u=Hr.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),d=a.applyChanges(l,n.isPrimaryClient,u);_l(n,t,d.ya);const g=new m0(e,t,a);return n.va.set(e,g),n.Fa.has(t)?n.Fa.get(t).push(e):n.Fa.set(t,[e]),d.snapshot}async function T0(n,e,t){const r=$(n),i=r.va.get(e),s=r.Fa.get(i.targetId);if(s.length>1)return r.Fa.set(i.targetId,s.filter(a=>!rs(a,e))),void r.va.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await mo(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),t&&ea(r.remoteStore,i.targetId),_o(r,i.targetId)}).catch(qr)):(_o(r,i.targetId),await mo(r.localStore,i.targetId,!0))}async function w0(n,e){const t=$(n),r=t.va.get(e),i=t.Fa.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),ea(t.remoteStore,r.targetId))}async function I0(n,e,t){const r=k0(n);try{const i=await function(a,l){const u=$(a),d=ye.now(),g=l.reduce((S,N)=>S.add(N.key),Y());let T,b;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let N=wt(),U=Y();return u.us.getEntries(S,g).next(k=>{N=k,N.forEach((D,V)=>{V.isValidDocument()||(U=U.add(D))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,N)).next(k=>{T=k;const D=[];for(const V of l){const M=Hy(V,T.get(V.key).overlayedDocument);M!=null&&D.push(new Gt(V.key,M,Qu(M.value.mapValue),rt.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,D,l)}).next(k=>{b=k;const D=k.applyToLocalDocumentSet(T,U);return u.documentOverlayCache.saveOverlays(S,k.batchId,D)})}).then(()=>({batchId:b.batchId,changes:sh(T)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let d=a.La[a.currentUser.toKey()];d||(d=new ue(ee)),d=d.insert(l,u),a.La[a.currentUser.toKey()]=d}(r,i.batchId,t),await Kr(r,i.changes),await us(r.remoteStore)}catch(i){const s=sa(i,"Failed to persist write");t.reject(s)}}async function qh(n,e){const t=$(n);try{const r=await Uv(t.localStore,e);e.targetChanges.forEach((i,s)=>{const a=t.Oa.get(s);a&&(ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.Da=!0:i.modifiedDocuments.size>0?ie(a.Da):i.removedDocuments.size>0&&(ie(a.Da),a.Da=!1))}),await Kr(t,r,e)}catch(r){await qr(r)}}function gl(n,e,t){const r=$(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.va.forEach((s,a)=>{const l=a.view.Y_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=$(a);u.onlineState=l;let d=!1;u.queries.forEach((g,T)=>{for(const b of T.z_)b.Y_(l)&&(d=!0)}),d&&oa(u)}(r.eventManager,e),i.length&&r.Ca.E_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function A0(n,e,t){const r=$(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Oa.get(e),s=i&&i.key;if(s){let a=new ue(z.comparator);a=a.insert(s,Oe.newNoDocument(s,K.min()));const l=Y().add(s),u=new as(K.min(),new Map,new ue(ee),a,l);await qh(r,u),r.xa=r.xa.remove(s),r.Oa.delete(e),aa(r)}else await mo(r.localStore,e,!1).then(()=>_o(r,e,t)).catch(qr)}async function b0(n,e){const t=$(n),r=e.batch.batchId;try{const i=await Mv(t.localStore,e);Wh(t,r,null),zh(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Kr(t,i)}catch(i){await qr(i)}}async function R0(n,e,t){const r=$(n);try{const i=await function(a,l){const u=$(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let g;return u.mutationQueue.lookupMutationBatch(d,l).next(T=>(ie(T!==null),g=T.keys(),u.mutationQueue.removeMutationBatch(d,T))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,g,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,g)).next(()=>u.localDocuments.getDocuments(d,g))})}(r.localStore,e);Wh(r,e,t),zh(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Kr(r,i)}catch(i){await qr(i)}}function zh(n,e){(n.Ba.get(e)||[]).forEach(t=>{t.resolve()}),n.Ba.delete(e)}function Wh(n,e,t){const r=$(n);let i=r.La[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(t?s.reject(t):s.resolve(),i=i.remove(e)),r.La[r.currentUser.toKey()]=i}}function _o(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Fa.get(e))n.va.delete(r),t&&n.Ca.Ka(r,t);n.Fa.delete(e),n.isPrimaryClient&&n.Na.mr(e).forEach(r=>{n.Na.containsKey(r)||Hh(n,r)})}function Hh(n,e){n.Ma.delete(e.path.canonicalString());const t=n.xa.get(e);t!==null&&(ea(n.remoteStore,t),n.xa=n.xa.remove(e),n.Oa.delete(t),aa(n))}function _l(n,e,t){for(const r of t)r instanceof Fh?(n.Na.addReference(r.key,e),S0(n,r)):r instanceof Bh?(B("SyncEngine","Document no longer in limbo: "+r.key),n.Na.removeReference(r.key,e),n.Na.containsKey(r.key)||Hh(n,r.key)):H()}function S0(n,e){const t=e.key,r=t.path.canonicalString();n.xa.get(t)||n.Ma.has(r)||(B("SyncEngine","New document in limbo: "+t),n.Ma.add(r),aa(n))}function aa(n){for(;n.Ma.size>0&&n.xa.size<n.maxConcurrentLimboResolutions;){const e=n.Ma.values().next().value;n.Ma.delete(e);const t=new z(oe.fromString(e)),r=n.ka.next();n.Oa.set(r,new g0(t)),n.xa=n.xa.insert(t,r),kh(n.remoteStore,new Mt(nt(Ko(t.path)),r,"TargetPurposeLimboResolution",jo.oe))}}async function Kr(n,e,t){const r=$(n),i=[],s=[],a=[];r.va.isEmpty()||(r.va.forEach((l,u)=>{a.push(r.Qa(u,e,t).then(d=>{var g;if((d||t)&&r.isPrimaryClient){const T=d?!d.fromCache:(g=t==null?void 0:t.targetChanges.get(u.targetId))===null||g===void 0?void 0:g.current;r.sharedClientState.updateQueryState(u.targetId,T?"current":"not-current")}if(d){i.push(d);const T=Zo.Ui(u.targetId,d);s.push(T)}}))}),await Promise.all(a),r.Ca.E_(i),await async function(u,d){const g=$(u);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>C.forEach(d,b=>C.forEach(b.Ki,S=>g.persistence.referenceDelegate.addReference(T,b.targetId,S)).next(()=>C.forEach(b.$i,S=>g.persistence.referenceDelegate.removeReference(T,b.targetId,S)))))}catch(T){if(!zr(T))throw T;B("LocalStore","Failed to update sequence numbers: "+T)}for(const T of d){const b=T.targetId;if(!T.fromCache){const S=g.ss.get(b),N=S.snapshotVersion,U=S.withLastLimboFreeSnapshotVersion(N);g.ss=g.ss.insert(b,U)}}}(r.localStore,s))}async function P0(n,e){const t=$(n);if(!t.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const r=await Rh(t.localStore,e);t.currentUser=e,function(s,a){s.Ba.forEach(l=>{l.forEach(u=>{u.reject(new q(P.CANCELLED,a))})}),s.Ba.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Kr(t,r.ls)}}function C0(n,e){const t=$(n),r=t.Oa.get(e);if(r&&r.Da)return Y().add(r.key);{let i=Y();const s=t.Fa.get(e);if(!s)return i;for(const a of s){const l=t.va.get(a);i=i.unionWith(l.view.Ra)}return i}}function Gh(n){const e=$(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=qh.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=C0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=A0.bind(null,e),e.Ca.E_=d0.bind(null,e.eventManager),e.Ca.Ka=f0.bind(null,e.eventManager),e}function k0(n){const e=$(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=b0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=R0.bind(null,e),e}class yl{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=cs(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Lv(this.persistence,new Ov,e.initialUser,this.serializer)}createPersistence(e){return new Nv(Jo.Yr,this.serializer)}createSharedClientState(e){return new zv}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class N0{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=P0.bind(null,this.syncEngine),await l0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new h0}()}createDatastore(e){const t=cs(e.databaseInfo.databaseId),r=function(s){return new Kv(s)}(e.databaseInfo);return function(s,a,l,u){return new Yv(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,i,s,a,l){return new Jv(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,t=>gl(this.syncEngine,t,0),function(){return hl.D()?new hl:new Wv}())}createSyncEngine(e,t){return function(i,s,a,l,u,d,g){const T=new _0(i,s,a,l,u,d);return g&&(T.qa=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(i){const s=$(i);B("RemoteStore","RemoteStore shutting down."),s.N_.add(5),await Gr(s),s.B_.shutdown(),s.k_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Kh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Wa(this.observer.next,e)}error(e){this.observer.error?this.Wa(this.observer.error,e):Tt("Uncaught Error in snapshot listener:",e.toString())}Ga(){this.muted=!0}Wa(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,t,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=De.UNAUTHENTICATED,this.clientId=Gu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{B("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(B("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(P.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=sa(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Ks(n,e){n.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Rh(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function vl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await O0(n);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>dl(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>dl(e.remoteStore,i)),n._onlineComponents=e}function D0(n){return n.name==="FirebaseError"?n.code===P.FAILED_PRECONDITION||n.code===P.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function O0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ks(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!D0(t))throw t;Ln("Error using user provided cache. Falling back to memory cache: "+t),await Ks(n,new yl)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Ks(n,new yl);return n._offlineComponents}async function $h(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await vl(n,n._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await vl(n,new N0))),n._onlineComponents}function V0(n){return $h(n).then(e=>e.syncEngine)}async function Qh(n){const e=await $h(n),t=e.eventManager;return t.onListen=y0.bind(null,e.syncEngine),t.onUnlisten=T0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=v0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=w0.bind(null,e.syncEngine),t}function L0(n,e,t={}){const r=new vt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,d){const g=new Kh({next:b=>{a.enqueueAndForget(()=>Mh(s,T));const S=b.docs.has(l);!S&&b.fromCache?d.reject(new q(P.UNAVAILABLE,"Failed to get document because the client is offline.")):S&&b.fromCache&&u&&u.source==="server"?d.reject(new q(P.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(b)},error:b=>d.reject(b)}),T=new Uh(Ko(l.path),g,{includeMetadataChanges:!0,oa:!0});return Lh(s,T)}(await Qh(n),n.asyncQueue,e,t,r)),r.promise}function M0(n,e,t={}){const r=new vt;return n.asyncQueue.enqueueAndForget(async()=>function(s,a,l,u,d){const g=new Kh({next:b=>{a.enqueueAndForget(()=>Mh(s,T)),b.fromCache&&u.source==="server"?d.reject(new q(P.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(b)},error:b=>d.reject(b)}),T=new Uh(l,g,{includeMetadataChanges:!0,oa:!0});return Lh(s,T)}(await Qh(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Yh(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(n,e,t){if(!t)throw new q(P.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function U0(n,e,t,r){if(e===!0&&r===!0)throw new q(P.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Tl(n){if(!z.isDocumentKey(n))throw new q(P.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function wl(n){if(z.isDocumentKey(n))throw new q(P.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ca(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":H()}function It(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new q(P.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=ca(n);throw new q(P.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new q(P.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new q(P.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}U0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Yh((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new q(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new q(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new q(P.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hs{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Il({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(P.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new q(P.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Il(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ey;switch(r.type){case"firstParty":return new iy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new q(P.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=El.get(t);r&&(B("ComponentProvider","Removing Datastore"),El.delete(t),r.terminate())}(this),Promise.resolve()}}function F0(n,e,t,r={}){var i;const s=(n=It(n,hs))._getSettings(),a=`${e}:${t}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Ln("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=De.MOCK_USER;else{l=Dl(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new q(P.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new De(d)}n._authCredentials=new ty(new Hu(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ds(this.firestore,e,this._query)}}class je{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new je(this.firestore,e,this._key)}}class Bt extends ds{constructor(e,t,r){super(e,t,Ko(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new je(this.firestore,null,new z(e))}withConverter(e){return new Bt(this.firestore,e,this._path)}}function Jh(n,e,...t){if(n=le(n),Xh("collection","path",e),n instanceof hs){const r=oe.fromString(e,...t);return wl(r),new Bt(n,null,r)}{if(!(n instanceof je||n instanceof Bt))throw new q(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return wl(r),new Bt(n.firestore,null,r)}}function la(n,e,...t){if(n=le(n),arguments.length===1&&(e=Gu.newId()),Xh("doc","path",e),n instanceof hs){const r=oe.fromString(e,...t);return Tl(r),new je(n,null,new z(r))}{if(!(n instanceof je||n instanceof Bt))throw new q(P.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(oe.fromString(e,...t));return Tl(r),new je(n.firestore,n instanceof Bt?n.converter:null,new z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(){this._u=Promise.resolve(),this.au=[],this.uu=!1,this.cu=[],this.lu=null,this.hu=!1,this.Pu=!1,this.Iu=[],this.e_=new Ph(this,"async_queue_retry"),this.Tu=()=>{const t=Gs();t&&B("AsyncQueue","Visibility state changed to "+t.visibilityState),this.e_.zo()};const e=Gs();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Tu)}get isShuttingDown(){return this.uu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Eu(),this.du(e)}enterRestrictedMode(e){if(!this.uu){this.uu=!0,this.Pu=e||!1;const t=Gs();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Tu)}}enqueue(e){if(this.Eu(),this.uu)return new Promise(()=>{});const t=new vt;return this.du(()=>this.uu&&this.Pu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.au.push(e),this.Au()))}async Au(){if(this.au.length!==0){try{await this.au[0](),this.au.shift(),this.e_.reset()}catch(e){if(!zr(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.au.length>0&&this.e_.Wo(()=>this.Au())}}du(e){const t=this._u.then(()=>(this.hu=!0,e().catch(r=>{this.lu=r,this.hu=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Tt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.hu=!1,r))));return this._u=t,t}enqueueAfterDelay(e,t,r){this.Eu(),this.Iu.indexOf(e)>-1&&(t=0);const i=ia.createAndSchedule(this,e,t,r,s=>this.Ru(s));return this.cu.push(i),i}Eu(){this.lu&&H()}verifyOperationInProgress(){}async Vu(){let e;do e=this._u,await e;while(e!==this._u)}mu(e){for(const t of this.cu)if(t.timerId===e)return!0;return!1}fu(e){return this.Vu().then(()=>{this.cu.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.cu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Vu()})}gu(e){this.Iu.push(e)}Ru(e){const t=this.cu.indexOf(e);this.cu.splice(t,1)}}class $r extends hs{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=function(){return new B0}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Zh(this),this._firestoreClient.terminate()}}function fs(n,e){const t=typeof n=="object"?n:To(),r=typeof n=="string"?n:"(default)",i=Qi(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=kl("firestore");s&&F0(i,...s)}return i}function ua(n){return n._firestoreClient||Zh(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Zh(n){var e,t,r;const i=n._freezeSettings(),s=function(l,u,d,g){return new _y(l,u,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,Yh(g.experimentalLongPollingOptions),g.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new x0(n._authCredentials,n._appCheckCredentials,n._queue,s),!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qn(Pe.fromBase64String(e))}catch(t){throw new q(P.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new qn(Pe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new q(P.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new q(P.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new q(P.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=/^__.*__$/;class q0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Gt(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wr(e,this.data,t,this.fieldTransforms)}}class ed{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Gt(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function td(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class fa{constructor(e,t,r,i,s,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.pu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get yu(){return this.settings.yu}wu(e){return new fa(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Su(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.wu({path:r,bu:!1});return i.Du(e),i}Cu(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.wu({path:r,bu:!1});return i.pu(),i}vu(e){return this.wu({path:void 0,bu:!0})}Fu(e){return Ki(e,this.settings.methodName,this.settings.Mu||!1,this.path,this.settings.xu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Du(this.path.get(e))}Du(e){if(e.length===0)throw this.Fu("Document fields must not be empty");if(td(this.yu)&&j0.test(e))throw this.Fu('Document fields cannot begin and end with "__"')}}class z0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||cs(e)}Ou(e,t,r,i=!1){return new fa({yu:e,methodName:t,xu:r,path:be.emptyPath(),bu:!1,Mu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nd(n){const e=n._freezeSettings(),t=cs(n._databaseId);return new z0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function W0(n,e,t,r,i,s={}){const a=n.Ou(s.merge||s.mergeFields?2:0,e,t,i);pa("Data must be an object, but it was:",a,r);const l=rd(r,a);let u,d;if(s.merge)u=new He(a.fieldMask),d=a.fieldTransforms;else if(s.mergeFields){const g=[];for(const T of s.mergeFields){const b=yo(e,T,t);if(!a.contains(b))throw new q(P.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);sd(g,b)||g.push(b)}u=new He(g),d=a.fieldTransforms.filter(T=>u.covers(T.field))}else u=null,d=a.fieldTransforms;return new q0(new Be(l),u,d)}class ms extends ha{_toFieldTransform(e){if(e.yu!==2)throw e.yu===1?e.Fu(`${this._methodName}() can only appear at the top level of your update data`):e.Fu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ms}}function H0(n,e,t,r){const i=n.Ou(1,e,t);pa("Data must be an object, but it was:",i,r);const s=[],a=Be.empty();mn(r,(u,d)=>{const g=ma(e,u,t);d=le(d);const T=i.Cu(g);if(d instanceof ms)s.push(g);else{const b=gs(d,T);b!=null&&(s.push(g),a.set(g,b))}});const l=new He(s);return new ed(a,l,i.fieldTransforms)}function G0(n,e,t,r,i,s){const a=n.Ou(1,e,t),l=[yo(e,r,t)],u=[i];if(s.length%2!=0)throw new q(P.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<s.length;b+=2)l.push(yo(e,s[b])),u.push(s[b+1]);const d=[],g=Be.empty();for(let b=l.length-1;b>=0;--b)if(!sd(d,l[b])){const S=l[b];let N=u[b];N=le(N);const U=a.Cu(S);if(N instanceof ms)d.push(S);else{const k=gs(N,U);k!=null&&(d.push(S),g.set(S,k))}}const T=new He(d);return new ed(g,T,a.fieldTransforms)}function gs(n,e){if(id(n=le(n)))return pa("Unsupported field value:",e,n),rd(n,e);if(n instanceof ha)return function(r,i){if(!td(i.yu))throw i.Fu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Fu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.bu&&e.yu!==4)throw e.Fu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=gs(l,i.vu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(n,e)}return function(r,i){if((r=le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Fy(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ye.fromDate(r);return{timestampValue:Hi(i.serializer,s)}}if(r instanceof ye){const s=new ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Hi(i.serializer,s)}}if(r instanceof da)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qn)return{bytesValue:vh(i.serializer,r._byteString)};if(r instanceof je){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Fu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Yo(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Fu(`Unsupported field value: ${ca(r)}`)}(n,e)}function rd(n,e){const t={};return Ku(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):mn(n,(r,i)=>{const s=gs(i,e.Su(r));s!=null&&(t[r]=s)}),{mapValue:{fields:t}}}function id(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ye||n instanceof da||n instanceof qn||n instanceof je||n instanceof ha)}function pa(n,e,t){if(!id(t)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(t)){const r=ca(t);throw r==="an object"?e.Fu(n+" a custom object"):e.Fu(n+" "+r)}}function yo(n,e,t){if((e=le(e))instanceof ps)return e._internalPath;if(typeof e=="string")return ma(n,e);throw Ki("Field path arguments must be of type string or ",n,!1,void 0,t)}const K0=new RegExp("[~\\*/\\[\\]]");function ma(n,e,t){if(e.search(K0)>=0)throw Ki(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ps(...e.split("."))._internalPath}catch{throw Ki(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ki(n,e,t,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new q(P.INVALID_ARGUMENT,l+n+u)}function sd(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t,r,i,s){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new $0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ad("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class $0 extends od{data(){return super.data()}}function ad(n,e){return typeof e=="string"?ma(n,e):e instanceof ps?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new q(P.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Y0{convertValue(e,t="none"){switch(hn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(un(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw H()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return mn(e,(i,s)=>{r[i]=this.convertValue(s,t)}),r}convertGeoPoint(e){return new da(ge(e.latitude),ge(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=zo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Nr(e));default:return null}}convertTimestamp(e){const t=zt(e);return new ye(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=oe.fromString(e);ie(bh(r));const i=new xr(r.get(1),r.get(3)),s=new z(r.popFirst(5));return i.isEqual(t)||Tt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X0(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cd extends od{constructor(e,t,r,i,s,a){super(e,t,r,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ni(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ad("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Ni extends cd{data(e={}){return super.data(e)}}class J0{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Tr(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ni(this._firestore,this._userDataWriter,r.key,r,new Tr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new q(P.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let a=0;return i._snapshot.docChanges.map(l=>{const u=new Ni(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Tr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Ni(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Tr(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,g=-1;return l.type!==0&&(d=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),g=a.indexOf(l.doc.key)),{type:Z0(l.type),doc:u,oldIndex:d,newIndex:g}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Z0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eE(n){n=It(n,je);const e=It(n.firestore,$r);return L0(ua(e),n._key).then(t=>rE(e,n,t))}class ld extends Y0{constructor(e){super(),this.firestore=e}convertBytes(e){return new qn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new je(this.firestore,null,t)}}function ud(n){n=It(n,ds);const e=It(n.firestore,$r),t=ua(e),r=new ld(e);return Q0(n._query),M0(t,n._query).then(i=>new J0(e,r,n,i))}function tE(n,e,t){n=It(n,je);const r=It(n.firestore,$r),i=X0(n.converter,e,t);return hd(r,[W0(nd(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,rt.none())])}function nE(n,e,t,...r){n=It(n,je);const i=It(n.firestore,$r),s=nd(i);let a;return a=typeof(e=le(e))=="string"||e instanceof ps?G0(s,"updateDoc",n._key,e,t,r):H0(s,"updateDoc",n._key,e),hd(i,[a.toMutation(n._key,rt.exists(!0))])}function hd(n,e){return function(r,i){const s=new vt;return r.asyncQueue.enqueueAndForget(async()=>I0(await V0(r),i,s)),s.promise}(ua(n),e)}function rE(n,e,t){const r=t.docs.get(e._key),i=new ld(n);return new cd(n,i,e._key,r,new Tr(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(i){Wn=i})(fn),sn(new jt("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new $r(new ny(r.getProvider("auth-internal")),new oy(r.getProvider("app-check-internal")),function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new q(P.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xr(d.options.projectId,g)}(a,i),a);return s=Object.assign({useFetchStreams:t},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ze(zc,"4.6.5",e),Ze(zc,"4.6.5","esm2017")})();async function _E(n,e,t,r){const i=fs(n),s=la(i,e,t);await nE(s,r)}async function iE(n,e,t){const r=fs(n),i={};Object.keys(t).forEach(s=>{t[s]!==void 0&&(i[s]=t[s])}),await tE(la(r,"user",e),i,{merge:!0})}async function sE(n,e,t=null){const r=fs(n);let i=t?void 0:[];if(t){const s=la(r,e,t),a=await eE(s);a.exists()&&(i=a.data())}else(await ud(Jh(r,e))).forEach(a=>{i.push(a.data())});return i}async function yE(n,e){const t=fs(n),r=Jh(t,e);try{return(await ud(r)).docs.map(s=>({id:s.id,data:s.data()}))}catch(i){console.error("Помилка при отриманні документів:",i)}}function oE(){let n;function e(r){n=r}function t(){return n}return{setUser:e,getUser:t}}const Al=oE();var dd={exports:{}};(function(n){(function(e,t){n.exports=t(e)})(typeof wi<"u"?wi:typeof window<"u"?window:wi,function(e){if(typeof e>"u"&&typeof e.document>"u")return!1;var t="Notiflix",r=`

Visit documentation page to learn more: https://notiflix.github.io/documentation`,i='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif',s={Success:"Success",Failure:"Failure",Warning:"Warning",Info:"Info"},a,l={wrapID:"NotiflixNotifyWrap",overlayID:"NotiflixNotifyOverlay",width:"280px",position:"right-top",distance:"10px",opacity:1,borderRadius:"5px",rtl:!1,timeout:3e3,messageMaxLength:110,backOverlay:!1,backOverlayColor:"rgba(0,0,0,0.5)",plainText:!0,showOnlyTheLastOne:!1,clickToClose:!1,pauseOnHover:!0,ID:"NotiflixNotify",className:"notiflix-notify",zindex:4001,fontFamily:"Quicksand",fontSize:"13px",cssAnimation:!0,cssAnimationDuration:400,cssAnimationStyle:"fade",closeButton:!1,useIcon:!0,useFontAwesome:!1,fontAwesomeIconStyle:"basic",fontAwesomeIconSize:"34px",success:{background:"#32c682",textColor:"#fff",childClassName:"notiflix-notify-success",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-check-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(50,198,130,0.2)"},failure:{background:"#ff5549",textColor:"#fff",childClassName:"notiflix-notify-failure",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-times-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(255,85,73,0.2)"},warning:{background:"#eebf31",textColor:"#fff",childClassName:"notiflix-notify-warning",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-exclamation-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(238,191,49,0.2)"},info:{background:"#26c0d3",textColor:"#fff",childClassName:"notiflix-notify-info",notiflixIconColor:"rgba(0,0,0,0.2)",fontAwesomeClassName:"fas fa-info-circle",fontAwesomeIconColor:"rgba(0,0,0,0.2)",backOverlayColor:"rgba(38,192,211,0.2)"}},u=function(D){return console.error("%c "+t+" Error ","padding:2px;border-radius:20px;color:#fff;background:#ff5549",`
`+D+r)},d=function(D){return D||(D="head"),e.document[D]===null?(u(`
Notiflix needs to be appended to the "<`+D+'>" element, but you called it before the "<'+D+'>" element has been created.'),!1):!0},g=function(D,V){if(!d("head"))return!1;if(D()!==null&&!e.document.getElementById(V)){var M=e.document.createElement("style");M.id=V,M.innerHTML=D(),e.document.head.appendChild(M)}},T=function(){var D={},V=!1,M=0;Object.prototype.toString.call(arguments[0])==="[object Boolean]"&&(V=arguments[0],M++);for(var G=function(te){for(var Q in te)Object.prototype.hasOwnProperty.call(te,Q)&&(V&&Object.prototype.toString.call(te[Q])==="[object Object]"?D[Q]=T(D[Q],te[Q]):D[Q]=te[Q])};M<arguments.length;M++)G(arguments[M]);return D},b=function(D){var V=e.document.createElement("div");return V.innerHTML=D,V.textContent||V.innerText||""},S=function(){var D='[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-notify-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';return D||null},N=0,U=function(D,V,M,G){if(!d("body"))return!1;a||k.Notify.init({});var te=T(!0,a,{});if(typeof M=="object"&&!Array.isArray(M)||typeof G=="object"&&!Array.isArray(G)){var Q={};typeof M=="object"?Q=M:typeof G=="object"&&(Q=G),a=T(!0,a,Q)}var E=a[D.toLocaleLowerCase("en")];N++,typeof V!="string"&&(V="Notiflix "+D),a.plainText&&(V=b(V)),!a.plainText&&V.length>a.messageMaxLength&&(a=T(!0,a,{closeButton:!0,messageMaxLength:150}),V='Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.'),V.length>a.messageMaxLength&&(V=V.substring(0,a.messageMaxLength)+"..."),a.fontAwesomeIconStyle==="shadow"&&(E.fontAwesomeIconColor=E.background),a.cssAnimation||(a.cssAnimationDuration=0);var p=e.document.getElementById(l.wrapID)||e.document.createElement("div");if(p.id=l.wrapID,p.style.width=a.width,p.style.zIndex=a.zindex,p.style.opacity=a.opacity,a.position==="center-center"?(p.style.left=a.distance,p.style.top=a.distance,p.style.right=a.distance,p.style.bottom=a.distance,p.style.margin="auto",p.classList.add("nx-flex-center-center"),p.style.maxHeight="calc((100vh - "+a.distance+") - "+a.distance+")",p.style.display="flex",p.style.flexWrap="wrap",p.style.flexDirection="column",p.style.justifyContent="center",p.style.alignItems="center",p.style.pointerEvents="none"):a.position==="center-top"?(p.style.left=a.distance,p.style.right=a.distance,p.style.top=a.distance,p.style.bottom="auto",p.style.margin="auto"):a.position==="center-bottom"?(p.style.left=a.distance,p.style.right=a.distance,p.style.bottom=a.distance,p.style.top="auto",p.style.margin="auto"):a.position==="right-bottom"?(p.style.right=a.distance,p.style.bottom=a.distance,p.style.top="auto",p.style.left="auto"):a.position==="left-top"?(p.style.left=a.distance,p.style.top=a.distance,p.style.right="auto",p.style.bottom="auto"):a.position==="left-bottom"?(p.style.left=a.distance,p.style.bottom=a.distance,p.style.top="auto",p.style.right="auto"):(p.style.right=a.distance,p.style.top=a.distance,p.style.left="auto",p.style.bottom="auto"),a.backOverlay){var m=e.document.getElementById(l.overlayID)||e.document.createElement("div");m.id=l.overlayID,m.style.width="100%",m.style.height="100%",m.style.position="fixed",m.style.zIndex=a.zindex-1,m.style.left=0,m.style.top=0,m.style.right=0,m.style.bottom=0,m.style.background=E.backOverlayColor||a.backOverlayColor,m.className=a.cssAnimation?"nx-with-animation":"",m.style.animationDuration=a.cssAnimation?a.cssAnimationDuration+"ms":"",e.document.getElementById(l.overlayID)||e.document.body.appendChild(m)}e.document.getElementById(l.wrapID)||e.document.body.appendChild(p);var v=e.document.createElement("div");v.id=a.ID+"-"+N,v.className=a.className+" "+E.childClassName+" "+(a.cssAnimation?"nx-with-animation":"")+" "+(a.useIcon?"nx-with-icon":"")+" nx-"+a.cssAnimationStyle+" "+(a.closeButton&&typeof M!="function"?"nx-with-close-button":"")+" "+(typeof M=="function"?"nx-with-callback":"")+" "+(a.clickToClose?"nx-notify-click-to-close":""),v.style.fontSize=a.fontSize,v.style.color=E.textColor,v.style.background=E.background,v.style.borderRadius=a.borderRadius,v.style.pointerEvents="all",a.rtl&&(v.setAttribute("dir","rtl"),v.classList.add("nx-rtl-on")),v.style.fontFamily='"'+a.fontFamily+'", '+i,a.cssAnimation&&(v.style.animationDuration=a.cssAnimationDuration+"ms");var w="";if(a.closeButton&&typeof M!="function"&&(w='<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="'+E.notiflixIconColor+'" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>'),a.useIcon)if(a.useFontAwesome)v.innerHTML='<i style="color:'+E.fontAwesomeIconColor+"; font-size:"+a.fontAwesomeIconSize+';" class="nx-message-icon nx-message-icon-fa '+E.fontAwesomeClassName+" "+(a.fontAwesomeIconStyle==="shadow"?"nx-message-icon-fa-shadow":"nx-message-icon-fa-basic")+'"></i><span class="nx-message nx-with-icon">'+V+"</span>"+(a.closeButton?w:"");else{var I="";D===s.Success?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>':D===s.Failure?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>':D===s.Warning?I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>':D===s.Info&&(I='<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="'+E.notiflixIconColor+'" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>'),v.innerHTML=I+'<span class="nx-message nx-with-icon">'+V+"</span>"+(a.closeButton?w:"")}else v.innerHTML='<span class="nx-message">'+V+"</span>"+(a.closeButton?w:"");if(a.position==="left-bottom"||a.position==="right-bottom"){var _=e.document.getElementById(l.wrapID);_.insertBefore(v,_.firstChild)}else e.document.getElementById(l.wrapID).appendChild(v);var ne=e.document.getElementById(v.id);if(ne){var Ue,ct,qe=function(){ne.classList.add("nx-remove");var Ce=e.document.getElementById(l.overlayID);Ce&&p.childElementCount<=0&&Ce.classList.add("nx-remove"),clearTimeout(Ue)},Fe=function(){if(ne&&ne.parentNode!==null&&ne.parentNode.removeChild(ne),p.childElementCount<=0&&p.parentNode!==null){p.parentNode.removeChild(p);var Ce=e.document.getElementById(l.overlayID);Ce&&Ce.parentNode!==null&&Ce.parentNode.removeChild(Ce)}clearTimeout(ct)};if(a.closeButton&&typeof M!="function"){var lt=e.document.getElementById(v.id).querySelector("span.nx-close-button");lt.addEventListener("click",function(){qe();var Ce=setTimeout(function(){Fe(),clearTimeout(Ce)},a.cssAnimationDuration)})}if((typeof M=="function"||a.clickToClose)&&ne.addEventListener("click",function(){typeof M=="function"&&M(),qe();var Ce=setTimeout(function(){Fe(),clearTimeout(Ce)},a.cssAnimationDuration)}),!a.closeButton&&typeof M!="function"){var bt=function(){Ue=setTimeout(function(){qe()},a.timeout),ct=setTimeout(function(){Fe()},a.timeout+a.cssAnimationDuration)};bt(),a.pauseOnHover&&(ne.addEventListener("mouseenter",function(){ne.classList.add("nx-paused"),clearTimeout(Ue),clearTimeout(ct)}),ne.addEventListener("mouseleave",function(){ne.classList.remove("nx-paused"),bt()}))}}if(a.showOnlyTheLastOne&&N>0)for(var Kt=e.document.querySelectorAll("[id^="+a.ID+"-]:not([id="+a.ID+"-"+N+"])"),Ve=0;Ve<Kt.length;Ve++){var ce=Kt[Ve];ce.parentNode!==null&&ce.parentNode.removeChild(ce)}a=T(!0,a,te)},k={Notify:{init:function(D){a=T(!0,l,D),g(S,"NotiflixNotifyInternalCSS")},merge:function(D){if(a)a=T(!0,a,D);else return u("You have to initialize the Notify module before call Merge function."),!1},success:function(D,V,M){U(s.Success,D,V,M)},failure:function(D,V,M){U(s.Failure,D,V,M)},warning:function(D,V,M){U(s.Warning,D,V,M)},info:function(D,V,M){U(s.Info,D,V,M)}}};return typeof e.Notiflix=="object"?T(!0,e.Notiflix,{Notify:k.Notify}):{Notify:k.Notify}})})(dd);var fd=dd.exports;let dn,en={user:null,errorCode:null,errorMessage:null};function _s(n){dn||(dn=X_(n))}function vE(n,e){_s(n);let t=Lu(e,["email","password"]);return Og(dn,t.email,t.password).then(r=>{en.user=r.user,window.location.pathname="/nuts/src/pages/personal-cabinet-page.html",Fo(en.user,ae(".header__top-authentication-wrapper")),Mu(ae(".input__area","all"))}).catch(r=>{fd.Notify.failure(`Помилка аундетифікації, перевірте пароль або почту ${r}`)}),en}function EE(n,e){_s(n);let t=Lu(e,["name","email","phone","city","addresses","password","verifyPassword","avatar","personType","requisites","EDRPOUCode","companyLegalCity","companyLegalAddress","companyLegalIndex"]);aE(t),jc(t,["selectCountry","selectRegion"],[".registration__current-country",".registration__current-region"],["Страна","Область","Район","Воєводство","Повіт","Федеральна земля"]),ae(".registration__form-legal")&&jc(t,["companyLegalSelectCountry","companyLegalSelectRegion"],[".registration__current-country-legal",".registration__current-region-legal"],["Страна","Область","Район","Воєводство","Повіт","Федеральна земля"]),delete t.personType,console.log(t),Dg(dn,t.email,t.verifyPassword).then(async r=>{await xm(t.avatar).then(i=>{t.avatar=i}).catch(i=>{console.log(i),t.avatar=null}),en.user=r.user,await bu(en.user,{displayName:t.name,photoURL:t.avatar,phoneNumber:t.phone}),await iE(n,en.user.uid,t),window.location.pathname="/nuts/src/pages/personal-cabinet-page.html",Fo(en.user,ae(".header__top-authentication-wrapper")),Mu(ae(".input__area","all"))}).catch(r=>{fd.Notify.failure(`Помилка реестрації, ${r}`)})}function aE(n){return n.role={person:ae(".registration__tab_active").getAttribute("data-tab")==="individual"&&ae("form-1","id").classList.contains("registration__body_active"),company:n.personType==="legal-form"&&ae(".registration__tab_active").getAttribute("data-tab")==="legal",entrepreneur:n.personType==="fop-form"}}async function TE(n,e){return _s(n),bu(dn.currentUser,e).then(t=>({displayName:e.displayName,photoURL:e.photoURL,phoneNumber:e.phone})).catch(t=>console.log(t))}async function cE(n){_s(n),Ug(dn,e=>{e&&(Fo(e,window.innerWidth>=768?ae(".header__top-authentication-wrapper"):ae(".burger__authentication")),Al.getUser()===void 0&&sE(n,"user").then(t=>{const r=t.find(i=>i.email===e.email);Al.setUser(r)}).catch(t=>{console.error("Error fetching user data:",t)}))})}function lE(){Fg(dn).then(n=>{console.log(n)}).catch(n=>{console.log(n)})}var uE="firebase",hE="10.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ze(uE,hE,"app");function dE(){const n=Ll({apiKey:"AIzaSyBTca0OO9iCUvryBSKXEcuj2zcsAIbSBUI",authDomain:"nuts-17b69.firebaseapp.com",projectId:"nuts-17b69",storageBucket:"nuts-17b69.appspot.com",messagingSenderId:"989266237693",appId:"1:989266237693:web:814a4d601b3db0dee74694"});function e(){return n}return{getApp:e}}const wE=dE();document.addEventListener("DOMContentLoaded",async function(){Om(),Lm(),Md(),await cE()});export{sE as a,sc as b,Mu as c,EE as d,vE as e,wE as f,ae as g,Lu as h,yE as i,xm as j,fE as k,_E as l,TE as m,Fo as n,jc as o,fd as p,Al as q,Vm as s,_r as u};
