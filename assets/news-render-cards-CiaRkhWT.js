import{u as i}from"./main-CeywqeAh.js";function t(c,n){const r=document.createDocumentFragment();c.forEach(s=>{let a="";a=`<div class="news-swiper__card">
             <img class="news-swiper__card-img" src=""  alt="зображення новини"/>
             <div class="news-swiper__card-text-block">
                 <p class="news-swiper__card-date">${s.date}</p>
                 <h3 class="news-swiper__card-title">${s.mainTitle}</h3>
                 <p class="news-swiper__card-text">
                     ${s.summary}
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
        </div>`;let e=document.createElement("div");e.classList.add("swiper-slide"),e.innerHTML=a,i(s.url[0],e.querySelector(".news-swiper__card-img")),r.appendChild(e)}),n.append(r)}export{t as u};
