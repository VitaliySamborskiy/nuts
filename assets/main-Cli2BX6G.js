import{u as w,a as i,s as c,g as d,b as p}from"./main-D3ttXanS.js";import{u as l}from"./use-render-cards-xA2s2149.js";function _(a,n){let s=document.createDocumentFragment();a.forEach(e=>{let t="";t=`<div class="news-swiper__card">
             <img class="news-swiper__card-img" src=""  alt="зображення новини"/>
             <div class="news-swiper__card-text-block">
                 <p class="news-swiper__card-date">${e.date}</p>
                 <h3 class="news-swiper__card-title">${e.mainTitle}</h3>
                 <p class="news-swiper__card-text">
                     ${e.summary}
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
        </div>`;let r=document.createElement("div");r.classList.add("swiper-slide"),r.innerHTML=t,w(e.url[0],r.querySelector(".news-swiper__card-img")),s.appendChild(r)}),n.append(s)}document.addEventListener("DOMContentLoaded",async function(){const a=await i(await c(),"news");_(a,d(".news-swiper__renders")),l(await i(await c(),"products"),d(".product__cards")).forEach(s=>{p(s.swiper,s.prev,s.next,"auto",0)})});
