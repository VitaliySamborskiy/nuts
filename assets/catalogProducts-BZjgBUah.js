import{g as t,u as l,a as w,s as d,f as b}from"./main-Bm7yY8q7.js";import{u as v,a as E}from"./product-cards-Bb25a3uK.js";import{s as _}from"./swiper-BDI-ONPN.js";import{u,a as A}from"./querry-parameter-8F5Ngxzv.js";import"./local-storage-Dq6mamxl.js";import"./youtube-app-DMHovVLY.js";function I(e,s,c,o,a,r){const n=e,p=Array.from(e);let i={weight:"Масса",taste:"Вкус"};s.addEventListener("click",()=>{f(i),h(e,i),u(["weight","taste"],Object.values(i))}),c.addEventListener("click",()=>{L(r,n,e),f(i),u(["weight","taste"],Object.values(i))}),window.location.search===""&&u(["weight","taste"],Object.values(i)),m(a,r,p,"descending"),m(o,r,p,"ascending"),x(i,e)}function h(e,s){e.forEach(c=>{let o=!0;if(s.weight!=="Масса"){const a=parseInt(c.getAttribute("data-weight")),[r,n]=s.weight.split("-").map(Number);(a<r||a>n)&&(o=!1)}if(s.taste!=="Вкус"&&o){const a=c.getAttribute("data-taste");s.taste!==a&&(o=!1)}c.classList.toggle("hidden",!o)})}function L(e,s,c){g(c,".product-filter__current-weight","Масса"),g(c,".product-filter__current-taste","Вкус"),s.forEach(o=>{e.appendChild(o)})}function g(e,s,c){e.forEach(o=>{o.classList.remove("hidden")}),t(s).textContent=c}function f(e){e.weight=t(".product-filter__current-weight").textContent.trim(),e.taste=t(".product-filter__current-taste").textContent.trim()}function m(e,s,c,o=null){e.addEventListener("click",()=>{c.sort((a,r)=>o==="ascending"?parseInt(a.getAttribute("data-price"))-parseInt(r.getAttribute("data-price")):parseInt(r.getAttribute("data-price"))-parseInt(a.getAttribute("data-price"))),c.forEach(a=>{s.appendChild(a)})})}function x(e,s){e=A(["weight","taste"],["weight","taste"]),h(s,e)}document.addEventListener("DOMContentLoaded",async function(){const e=b.getApp();await l("gs://nuts-17b69.appspot.com/product_catalog/product_catalog_1.webp",t(".products-page__img"));const s=["gs://nuts-17b69.appspot.com/product_catalog/product_catalog_2.webp","gs://nuts-17b69.appspot.com/main_page/main_page-2.webp","gs://nuts-17b69.appspot.com/companies/companies_2.webp"],c=t(".eco-nuts__img","all");for(let r=0;r<c.length;r++)l(s[r],c[r]);const o=await w(e,"products");v(o,t(".product__cards")).forEach(r=>{_(r.swiper,r.prev,r.next,"auto",0)}),_(t(".eco-nuts__swiper"),t(".eco-nuts__button-prev"),t(".eco-nuts__button-next"),"auto",0),d(t(".product-filter__current-weight","all"),t(".product-filter__select-weight","all")),d(t(".product-filter__current-taste","all"),t(".product-filter__select-taste","all")),E(t(".product__cards"),t(".popup__content"),t(".popup__background-block"),t(".popup__cross"),o),I(t(".product__card","all"),t(".product-filter__apply-button"),t(".product-filter__cross-button"),t(".product-filter__higher-price"),t(".product-filter__lower-price"),t(".product__cards"))});
