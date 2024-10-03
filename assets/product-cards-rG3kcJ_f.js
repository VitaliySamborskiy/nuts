import{a as n,s as m,g as i,b as l}from"./main-B8gcuJg5.js";function x(r,e){let c=document.createDocumentFragment(),p=[];if(r.length===0)return e.innerHTML="<p>Сталася помилка. Або продукція відсутня</p>";for(let t of r){let s="",d="";t.imgUrl.forEach(()=>{d+='<div class="swiper-slide"><img class="product__slide" src="" alt="product img" loading="lazy"/></div>'}),s=`${t.action||t.newProduct?`<div class ="product__card-flag ${t.action?"product__card-flag-discount":"product__card-flag-new"}">
                <p class ="product__card-flag-text">${t.action?"АКЦИЯ":"НОВИНКА"}</p>
            </div>`:""}  
            <a href="#" class="">
                <div class="product__card-swiper">
                    <div class="product__card-search">
                    <button class="circle-button" aria-label="product preview">
                    <svg class='circle-button-svg'>
                        <use href='#search'></use></svg>
                        </button>
                    </div>
                    <div class="swiper">
                        <div class="swiper-wrapper">
                        ${d}
                        </div>
                    </div>
                    <div class="product__card-button-prev">
                        <svg class="product__card-svg-arrow">
                            <use href="#arrow"></use>
                        </svg>
                    </div>
                    <div class="product__card-button-next">
                        <svg class="product__card-svg-arrow">
                            <use href="#arrow"></use>
                        </svg>
                    </div>
                </div>
                <div class="product__card-text-block">
                    <h3 class="product__card-type">${t.nutsType}</h3>
                    <p class="product__card-art">Арт:${t.art}</p>
                    <h3 class="product__card-title">${t.title}</h3>
                    <div class="product__card-info">
                        <div class="product__card-weight">
                            <svg class="product__card-weight-svg">
                                <use href="#weights"></use>
                            </svg>
                            <div class="product__card-weight-block">
                                <p class="product__card-weight-text">Масса:</p>
                                <p class="product__card-weight-data">${t.weight}</p>
                            </div>
                        </div>
                        <div class="product__card-packaging">
                            <svg class="product__card-packaging-svg">
                                <use href="#package"></use>
                            </svg>
                            <div class="product__card-packaging-block">
                                <p class="product__card-packaging-text">Упаковка</p>
                                <p class="product__card-packaging-data">${t.packaging}</p>
                            </div>
                        </div>
                    </div>
                    <div class="product__card-bottom">
                        <div class="product__card-bottom-price">
                            <p class="product__card-bottom-price-text">Цена:</p>
                            ${t.price&&t.cationPrice?`<p class="product__card-bottom-price-regular product__card-bottom-price-green">
                            ${t.cationPrice}<span>грн.</span></p>
                            <p class="product__card-bottom-price-discount product__card-bottom-price-gray">
                            ${t.price}<span>грн.</span></p>`:`<p class="product__card-bottom-price-regular product__card-bottom-price-green">
                            ${t.price}<span>грн.</span></p>`}
                        </div>
                        <button class="green-button product__card-bottom-buy">
                            <span>Купить</span>
                        </button>
                    </div>
                </div>
            </a>`;const a=document.createElement("div");a.classList.add("product__card"),a.setAttribute("data-arc",t.art),a.setAttribute("data-weight",t.weight),a.setAttribute("data-taste",t.taste),a.setAttribute("data-price",t.cationPrice?t.cationPrice:t.price),a.setAttribute("data-imgUrl",JSON.stringify(t.imgUrl)),a.setAttribute("data-title",t.title),a.setAttribute("data-prises",JSON.stringify([t.price,t.cationPrice])),a.innerHTML=s,p.push({swiper:a.querySelector(".swiper"),next:a.querySelector(".product__card-button-next"),prev:a.querySelector(".product__card-button-prev")});for(let o=0;o<t.imgUrl.length;++o){const _=a.querySelectorAll(".product__slide");let g=0;_.forEach(v=>{n(t.imgUrl[g++],v)})}c.append(a)}return e.append(c),p}function b(r,e){h(e.title,r.title),f(e.prices,r.prices),w(e.slideWrapper,r.images)}function h(r,e){r.textContent=e}function f(r,e){let c;e[1]===null?(c=!0,r.lastElementChild.children[0].textContent=e[0]):(c=!1,r.firstElementChild.children[0].textContent=e[0],r.lastElementChild.children[0].textContent=e[1]),r.firstElementChild.classList.toggle("popup__hidden",c)}function w(r,e){r.innerHTML="";let c=document.createDocumentFragment();e.forEach(()=>{const t=document.createElement("div"),s=document.createElement("img");t.classList.add("swiper-slide"),s.classList.add("popup__img"),s.setAttribute("alt","images-product"),s.setAttribute("loading","lazy"),s.setAttribute("data-src",data.imgUrl),t.appendChild(s),c.appendChild(t)}),c.querySelectorAll(".popup__img").forEach((t,s)=>{n(e[s],t)}),r.appendChild(c),m(i(".popup__swiper"),i(".popup__button-prev"),i(".popup__button-next"),"auto",0)}function A(r,e,c,p){const t=i(".popup__scroll");let s;r.addEventListener("click",d=>{d.preventDefault();const a=d.target.closest(".product__card-search"),o=d.target.closest(".product__card");a&&(s=!0,u(e,c,s),l.disablePageScroll(t),b({title:o.getAttribute("data-title"),prices:JSON.parse(o.getAttribute("data-prises")),images:JSON.parse(o.getAttribute("data-imgUrl"))},{title:i(".popup__title"),prices:i(".popup__price"),slideWrapper:i(".popup__swiper-wrapper"),popup:e,popupBlock:c}))}),p.addEventListener("click",()=>{s=!1,u(e,c,s),l.enablePageScroll(t)})}function u(r,e,c){setTimeout(()=>{r.classList.toggle("popup__content_active",c)},c?0:900),setTimeout(()=>{e.classList.toggle("popup__background-block_active",c)},c?10:0)}export{A as a,x as u};
