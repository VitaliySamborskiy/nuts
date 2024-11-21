import{u as c}from"./main-DOJSKYfZ.js";function l(n,i){const r=document.createDocumentFragment();n.forEach(s=>{let a="";a=`<div class="news-swiper__card">
             <img class="news-swiper__card-img" src=""  alt="зображення новини" loading="lazy" width="408" height="270"/>
             <div class="news-swiper__card-text-block">
                 <p class="news-swiper__card-date">${s.date}</p>
                 <h3 class="news-swiper__card-title">${s.mainTitle}</h3>
                 <p class="news-swiper__card-text">
                     ${s.summary}
                 </p>
                 <a class="news-swiper__card-link" href="/nuts/404.html"
                     ><span class="news-swiper__card-link-text"> Читать </span
                     ><span class="news-swiper__card-link-arrow">
                         <svg class="news-swiper__card-svg">
                             <use href="#long-arrow"></use>
                         </svg>
                     </span>
                 </a>
             </div>
        </div>`;let e=document.createElement("div");e.classList.add("swiper-slide"),e.innerHTML=a,c(s.url[0],e.querySelector(".news-swiper__card-img")),r.appendChild(e)}),i.append(r)}export{l as u};
