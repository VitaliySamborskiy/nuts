import{u as d,a as p,s as i,g as e,b as w}from"./main-D57yHfPX.js";import{u as o,a as _}from"./product-cards-Bg8NesNf.js";function l(n,t){const s=document.createDocumentFragment();n.forEach(r=>{let c="";c=`<div class="news-swiper__card">
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
        </div>`;let a=document.createElement("div");a.classList.add("swiper-slide"),a.innerHTML=c,d(r.url[0],a.querySelector(".news-swiper__card-img")),s.appendChild(a)}),t.append(s)}document.addEventListener("DOMContentLoaded",async function(){const n=await p(await i(),"news");l(n,e(".news-swiper__renders")),o(await p(await i(),"products"),e(".product__cards")).forEach(s=>{w(s.swiper,s.prev,s.next,"auto",0)}),_(e(".product__cards"),e(".popup__content"),e(".popup__background-block"),e(".popup__cross"))});
