import{u as t,g as e,q as a}from"./main-CMvXffeB.js";import{s as p}from"./swiper-DFaa5Y43.js";function r(a,r){var l,i;l=r.title,i=a.title,l.textContent=i,function(t,e){let a;null===e[1]?(a=!0,t.lastElementChild.children[0].textContent=e[0]):(a=!1,t.firstElementChild.children[0].textContent=e[0],t.lastElementChild.children[0].textContent=e[1]);t.firstElementChild.classList.toggle("popup__hidden",a)}(r.prices,a.prices),function(a,r){a.innerHTML="";let l=document.createDocumentFragment();r.forEach((()=>{const t=document.createElement("div"),e=document.createElement("img");t.classList.add("swiper-slide"),e.classList.add("popup__img"),e.setAttribute("alt","images-product"),e.setAttribute("loading","lazy"),e.setAttribute("data-src",r.imgUrl),t.appendChild(e),l.appendChild(t)}));l.querySelectorAll(".popup__img").forEach(((e,a)=>{t(r[a],e)})),a.appendChild(l),p(e(".popup__swiper"),e(".popup__button-prev"),e(".popup__button-next"),"auto",0)}(r.slideWrapper,a.images)}function l(){const t=localStorage.getItem("productData");return t?JSON.parse(t):null}function i(t,p,l,i,n){const o=e(".popup__scroll");let c;t.addEventListener("click",(t=>{const i=t.target.closest(".base-product__search"),u=t.target.closest(".base-product__button-next"),d=t.target.closest(".base-product__button-prev"),_=t.target.closest(".product__link");if(i&&(t.preventDefault(),c=!0,s(p,l,c),a.disablePageScroll(o),r({title:_.parentElement.getAttribute("data-title"),prices:JSON.parse(_.parentElement.getAttribute("data-prises")),images:JSON.parse(_.parentElement.getAttribute("data-imgUrl"))},{title:e(".popup__title"),prices:e(".popup__price"),slideWrapper:e(".popup__swiper-wrapper"),popup:p,popupBlock:l})),u&&t.preventDefault(),d&&t.preventDefault(),_){const t=n.filter((t=>t.art===_.parentElement.getAttribute("data-arc")));g=t,localStorage.setItem("productData",JSON.stringify(g))}var g})),i.addEventListener("click",(()=>{c=!1,s(p,l,c),a.enablePageScroll(o)}))}function s(t,e,a){setTimeout((()=>{t.classList.toggle("popup__content_active",a)}),a?0:900),setTimeout((()=>{e.classList.toggle("popup__background-block_active",a)}),a?10:0)}export{r as a,s as c,l as g,i as u};