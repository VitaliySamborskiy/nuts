import{a as b,s as f,g as p,c as _}from"./main-BEpViKtm.js";import{s as h}from"./local-storage-Dq6mamxl.js";function y(s,e){let a=document.createDocumentFragment(),d=[];if(s.length===0)return e.innerHTML="<p>Сталася помилка. Або продукція відсутня</p>";for(let t of s){let c="",i="";t.imgUrl.forEach(()=>{i+='<div class="swiper-slide"><img class="product__slide" src="" alt="product img" loading="lazy" width="406" height="278"/></div>'}),c=`${t.action||t.newProduct?`<div class ="base-product__flag product-page__flag ${t.action?"base-product__flag-discount":"base-product__flag-new"}">
                <p class ="base-product__flag-text">${t.action?"АКЦИЯ":"НОВИНКА"}</p>
            </div>`:""}
            <a href="/nuts/src/pages/product-page.html" class="product__link">
                <div class="product__card-swiper">
                    <div class="base-product__search">
                    <button class="circle-button" aria-label="product preview">
                    <svg class='circle-button-svg'>
                        <use href='#search'></use></svg>
                        </button>
                    </div>
                    <div class="swiper">
                        <div class="swiper-wrapper">
                        ${i}
                        </div>
                    </div>
                    <div class="base-product__button-prev">
                        <svg class="base-product__svg-arrow">
                            <use href="#arrow"></use>
                        </svg>
                    </div>
                    <div class="base-product__button-next">
                        <svg class="base-product__svg-arrow">
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
                    <div class="base-product__bottom">
                        <div class="base-product__bottom-price">
                            <p class="base-product__bottom-price-text">Цена:</p>
                            ${t.price&&t.cationPrice?`<p class="base-product__bottom-price-regular base-product__bottom-price-green">
                            ${t.cationPrice}<span>грн.</span></p>
                            <p class="base-product__bottom-price-discount base-product__bottom-price-gray">
                            ${t.price}<span>грн.</span></p>`:`<p class="base-product__bottom-price-regular base-product__bottom-price-green">
                            ${t.price}<span>грн.</span></p>`}
                        </div>
                        <button class="green-button base-product__bottom-buy">
                            <span>Купить</span>
                        </button>
                    </div>
                </div>
            </a>`;const r=document.createElement("div");r.classList.add("product__card"),r.setAttribute("data-arc",t.art),r.setAttribute("data-weight",t.weight),r.setAttribute("data-taste",t.taste),r.setAttribute("data-price",t.cationPrice?t.cationPrice:t.price),r.setAttribute("data-imgUrl",JSON.stringify(t.imgUrl)),r.setAttribute("data-title",t.title),r.setAttribute("data-prises",JSON.stringify([t.price,t.cationPrice])),r.innerHTML=c,d.push({swiper:r.querySelector(".swiper"),next:r.querySelector(".base-product__button-next"),prev:r.querySelector(".base-product__button-prev")});for(let l=0;l<t.imgUrl.length;++l){const u=r.querySelectorAll(".product__slide");let n=0;u.forEach(o=>{b(t.imgUrl[n++],o)})}a.append(r)}return e.append(a),d}function w(s,e){E(e.title,s.title),x(e.prices,s.prices),k(e.slideWrapper,s.images)}function E(s,e){s.textContent=e}function x(s,e){let a;e[1]===null?(a=!0,s.lastElementChild.children[0].textContent=e[0]):(a=!1,s.firstElementChild.children[0].textContent=e[0],s.lastElementChild.children[0].textContent=e[1]),s.firstElementChild.classList.toggle("popup__hidden",a)}function k(s,e){s.innerHTML="";let a=document.createDocumentFragment();e.forEach(()=>{const t=document.createElement("div"),c=document.createElement("img");t.classList.add("swiper-slide"),c.classList.add("popup__img"),c.setAttribute("alt","images-product"),c.setAttribute("loading","lazy"),c.setAttribute("data-src",e.imgUrl),t.appendChild(c),a.appendChild(t)}),a.querySelectorAll(".popup__img").forEach((t,c)=>{b(e[c],t)}),s.appendChild(a),f(p(".popup__swiper"),p(".popup__button-prev"),p(".popup__button-next"),"auto",0)}function $(s,e,a,d,t){const c=p(".popup__scroll");let i;s.addEventListener("click",r=>{const l=r.target.closest(".base-product__search"),u=r.target.closest(".base-product__button-next"),n=r.target.closest(".base-product__button-prev"),o=r.target.closest(".product__link");if(l&&(r.preventDefault(),i=!0,g(e,a,i),_.disablePageScroll(c),w({title:o.parentElement.getAttribute("data-title"),prices:JSON.parse(o.parentElement.getAttribute("data-prises")),images:JSON.parse(o.parentElement.getAttribute("data-imgUrl"))},{title:p(".popup__title"),prices:p(".popup__price"),slideWrapper:p(".popup__swiper-wrapper"),popup:e,popupBlock:a})),u&&r.preventDefault(),n&&r.preventDefault(),o){const v=t.filter(m=>m.art===o.parentElement.getAttribute("data-arc"));h(v)}}),d.addEventListener("click",()=>{i=!1,g(e,a,i),_.enablePageScroll(c)})}function g(s,e,a){setTimeout(()=>{s.classList.toggle("popup__content_active",a)},a?0:900),setTimeout(()=>{e.classList.toggle("popup__background-block_active",a)},a?10:0)}export{$ as a,y as u};
