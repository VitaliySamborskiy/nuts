import{u as t}from"./main-CMvXffeB.js";function e(e,r){let a=document.createDocumentFragment(),s=[];if(0===e.length)return r.innerHTML="<p>Сталася помилка. Або продукція відсутня</p>";for(let c of e){let e="",r="";c.imgUrl.forEach((()=>{r+='<div class="swiper-slide"><img class="product__slide" src="" alt="product img" loading="lazy" width="406" height="278"/></div>'})),e=`${c.action||c.newProduct?`<div class ="base-product__flag product-page__flag ${c.action?"base-product__flag-discount":"base-product__flag-new"}">\n                <p class ="base-product__flag-text">${c.action?"АКЦИЯ":"НОВИНКА"}</p>\n            </div>`:""}\n            <a href="/nuts/src/pages/product-page.html" class="product__link">\n                <div class="product__card-swiper">\n                    <div class="base-product__search">\n                    <button class="circle-button" aria-label="product preview">\n                    <svg class='circle-button-svg'>\n                        <use href='#search'></use></svg>\n                        </button>\n                    </div>\n                    <div class="swiper">\n                        <div class="swiper-wrapper">\n                        ${r}\n                        </div>\n                    </div>\n                        <svg class="base-product__button-prev base-product__svg-arrow">\n                            <use href="#arrow"></use>\n                        </svg>\n                        <svg class="base-product__button-next base-product__svg-arrow">\n                            <use href="#arrow"></use>\n                        </svg>\n                </div>\n                <div class="product__card-text-block">\n                    <h3 class="product__card-type">${c.nutsType}</h3>\n                    <p class="product__card-art">Арт:${c.art}</p>\n                    <h3 class="product__card-title">${c.title}</h3>\n                    <div class="product__card-info">\n                        <div class="product__card-weight">\n                            <svg class="product__card-weight-svg">\n                                <use href="#weights"></use>\n                            </svg>\n                            <div class="product__card-weight-block">\n                                <p class="product__card-weight-text">Масса:</p>\n                                <p class="product__card-weight-data">${c.weight}</p>\n                            </div>\n                        </div>\n                        <div class="product__card-packaging">\n                            <svg class="product__card-packaging-svg">\n                                <use href="#package"></use>\n                            </svg>\n                            <div class="product__card-packaging-block">\n                                <p class="product__card-packaging-text">Упаковка</p>\n                                <p class="product__card-packaging-data">${c.packaging}</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class="base-product__bottom">\n                        <div class="base-product__bottom-price">\n                            <p class="base-product__bottom-price-text">Цена:</p>\n                            ${c.price&&c.cationPrice?`<p class="base-product__bottom-price-regular base-product__bottom-price-green">\n                            ${c.cationPrice}<span>грн.</span></p>\n                            <p class="base-product__bottom-price-discount base-product__bottom-price-gray">\n                            ${c.price}<span>грн.</span></p>`:`<p class="base-product__bottom-price-regular base-product__bottom-price-green">\n                            ${c.price}<span>грн.</span></p>`}\n                        </div>\n                        <button class="green-button base-product__bottom-buy">Купить</button>\n                    </div>\n                </div>\n            </a>`;const n=document.createElement("div");n.classList.add("product__card"),n.setAttribute("data-arc",c.art),n.setAttribute("data-weight",c.weight),n.setAttribute("data-taste",c.taste),n.setAttribute("data-price",c.cationPrice?c.cationPrice:c.price),n.setAttribute("data-imgUrl",JSON.stringify(c.imgUrl)),n.setAttribute("data-title",c.title),n.setAttribute("data-prises",JSON.stringify([c.price,c.cationPrice])),n.innerHTML=e,s.push({swiper:n.querySelector(".swiper"),next:n.querySelector(".base-product__button-next"),prev:n.querySelector(".base-product__button-prev")});for(let a=0;a<c.imgUrl.length;++a){const e=n.querySelectorAll(".product__slide");let r=0;e.forEach((e=>{t(c.imgUrl[r++],e)}))}a.append(n)}return r.append(a),s}export{e as u};