import{g as r,f as h,u as b,s as u,a as d}from"./main-B8gcuJg5.js";import{u as w,a as v}from"./product-cards-rG3kcJ_f.js";import{u as g,a as E}from"./querry-parameter-BbPXVIy4.js";function A(t,s,a,c,e,o){const i=t,p=Array.from(t);let n={};s.addEventListener("click",()=>{l(n),m(t,n),g(["weight","taste"],Object.values(n))}),a.addEventListener("click",()=>{I(o,i,t),l(n),g(["weight","taste"],Object.values(n))}),f(e,o,p,"descending"),f(c,o,p,"ascending"),L(n,t)}function m(t,s){t.forEach(a=>{let c=!0;if(s.weight!=="Масса"){const e=parseInt(a.getAttribute("data-weight")),[o,i]=s.weight.split("-").map(Number);(e<o||e>i)&&(c=!1)}if(s.taste!=="Вкус"&&c){const e=a.getAttribute("data-taste");s.taste!==e&&(c=!1)}a.classList.toggle("hidden",!c)})}function I(t,s,a){_(a,".product-filter__current-weight","Масса"),_(a,".product-filter__current-taste","Вкус"),s.forEach(c=>{t.appendChild(c)})}function _(t,s,a){t.forEach(c=>{c.classList.remove("hidden")}),r(s).textContent=a}function l(t){t.weight=r(".product-filter__current-weight").textContent.trim(),t.taste=r(".product-filter__current-taste").textContent.trim()}function f(t,s,a,c=null){t.addEventListener("click",()=>{a.sort((e,o)=>c==="ascending"?parseInt(e.getAttribute("data-price"))-parseInt(o.getAttribute("data-price")):parseInt(o.getAttribute("data-price"))-parseInt(e.getAttribute("data-price"))),a.forEach(e=>{s.appendChild(e)})})}function L(t,s){t=E(["weight","taste"],["weight","taste"]),m(s,t)}document.addEventListener("DOMContentLoaded",async function(){const t=h.getApp();w(await b(t,"products"),r(".product__cards")).forEach(e=>{u(e.swiper,e.prev,e.next,"auto",0)}),u(r(".swiper"),r(".eco-nuts__button-prev"),r(".eco-nuts__button-next"),"auto",0),d("gs://nuts-17b69.appspot.com/product_catalog/product_catalog_1.webp",r(".products-page__img"));const a=["gs://nuts-17b69.appspot.com/product_catalog/product_catalog_2.webp","gs://nuts-17b69.appspot.com/main_page/main_page-2.webp","gs://nuts-17b69.appspot.com/companies/companies_2.webp"],c=r(".eco-nuts__img","all");for(let e=0;e<c.length;e++)d(a[e],c[e]);v(r(".product__cards"),r(".popup__content"),r(".popup__background-block"),r(".popup__cross")),A(r(".product__card","all"),r(".product-filter__apply-button"),r(".product-filter__cross-button"),r(".product-filter__higher-price"),r(".product-filter__lower-price"),r(".product__cards"))});
