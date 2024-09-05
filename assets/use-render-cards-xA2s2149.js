import{u as l}from"./main-D3ttXanS.js";function g(r,a){let s=document.createDocumentFragment(),e=[];if(r.length===0)return a.innerHTML="<p>Сталася помилка. Або продукція відсутня</p>";for(let t of r){let d="",p="";t.imgUrl.forEach(()=>{p+='<div class="swiper-slide"><img class="product__slide" src="" /></div>'}),d=`${t.action||t.newProduct?`<div class ="product__card-flag ${t.action?"product__card-flag-discount":"product__card-flag-new"}">
                <p class ="product__card-flag-text">${t.action?"АКЦИЯ":"НОВИНКА"}</p>
            </div>`:""}  
            <a href="#" class="">
                <div class="product__card-swiper">
                    <div class="product__card-search">
                    <button class="circle-button">
                    <svg class='circle-button-svg'>
                        <use href='#search'></use></svg>
                        </button>
                    </div>
                    <div class="swiper">
                        <div class="swiper-wrapper">
                        ${p}
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
                    <h4 class="product__card-type">${t.nutsType}</h4>
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
            </a>`;const c=document.createElement("div");c.classList.add("product__card"),c.setAttribute("data-arc",t.art),c.setAttribute("data-weight",t.weight),c.setAttribute("data-taste",t.taste),c.setAttribute("data-price",t.cationPrice?t.cationPrice:t.price),c.innerHTML=d,e.push({swiper:c.querySelector(".swiper"),next:c.querySelector(".product__card-button-next"),prev:c.querySelector(".product__card-button-prev")});for(let o=0;o<t.imgUrl.length;++o){const i=c.querySelectorAll(".product__slide");let u=0;i.forEach(_=>{l(t.imgUrl[u++],_)})}s.append(c)}return a.append(s),e}export{g as u};
