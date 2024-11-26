import{u as _}from"./main-BPgowrMU.js";function g(r,s){let a=document.createDocumentFragment(),c=[];if(r.length===0)return s.innerHTML="<p>Сталася помилка. Або продукція відсутня</p>";for(let t of r){let i="",d="";t.imgUrl.forEach(()=>{d+='<div class="swiper-slide"><img class="product__slide" src="" alt="product img" loading="lazy" width="406" height="278"/></div>'}),i=`${t.action||t.newProduct?`<div class ="base-product__flag product-page__flag ${t.action?"base-product__flag-discount":"base-product__flag-new"}">
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
                        ${d}
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
            </a>`;const e=document.createElement("div");e.classList.add("product__card"),e.setAttribute("data-arc",t.art),e.setAttribute("data-weight",t.weight),e.setAttribute("data-taste",t.taste),e.setAttribute("data-price",t.cationPrice?t.cationPrice:t.price),e.setAttribute("data-imgUrl",JSON.stringify(t.imgUrl)),e.setAttribute("data-title",t.title),e.setAttribute("data-prises",JSON.stringify([t.price,t.cationPrice])),e.innerHTML=i,c.push({swiper:e.querySelector(".swiper"),next:e.querySelector(".base-product__button-next"),prev:e.querySelector(".base-product__button-prev")});for(let p=0;p<t.imgUrl.length;++p){const o=e.querySelectorAll(".product__slide");let u=0;o.forEach(l=>{_(t.imgUrl[u++],l)})}a.append(e)}return s.append(a),c}export{g as u};
