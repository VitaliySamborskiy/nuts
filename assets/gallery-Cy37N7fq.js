import{g as s,o,a as g}from"./main-BEpViKtm.js";function v(e,a,r){a.sort((l,i)=>l.index-i.index),_(a,e),r&&r.addEventListener("click",()=>{_(a,e)})}function _(e,a){let r=document.createDocumentFragment();const l=e.splice(0,6);if(l.length!==0){l.forEach((t,c)=>{t.urlImg?r.appendChild(d(t,c)):r.appendChild(u(t,c))});const i=document.createElement("div");i.classList.add("gallery__block-items"),i.appendChild(r),a.appendChild(i);const n=s(".gallery__player","all"),y=Array.from(n).map(t=>t.getAttribute("data-id"));o(y,s(".gallery__player","all"),s(".gallery__youtube-container","all"),s(".gallery__preview","all"),"gallery__preview_active")}}function d(e,a){let r="";r=`<picture class="gallery__img-block">
            <img class="gallery__img" src="" alt="зображення картки галереї"/>
        </picture>
        <div class="gallery__card-block">
            <div class="gallery__card-block-text">
                <h3 class="gallery__card-title">${e.title}</h3>
                <p class="gallery__card-text">
                   ${e.text}
                </p>
            </div>
        </div>
        <div class="gallery__background"><svg class="gallery__svg"><use href="#logo"></use></svg></div>`;const l=document.createElement("div");return l.className=`gallery__block gallery__item-${++a}`,l.innerHTML=r,g(e.urlImg,l.querySelector(".gallery__img")),l}function u(e,a){let r="";r=`<div class="gallery__preview">
                        <picture class="gallery__preview-img-block">
                            <img class="gallery__preview-img" src="" alt="предв'ю для відео"/>
                        </picture>
                        <button class='play-button gallery__play ${++a%6==0||e.mini?"gallery__play-mini":""}' aria-label="play-video">
                            <svg class='play-button-svg gallery__play-svg'><use href=#play></use></svg>
                        </button>
                        <div class="gallery__preview-text-block">
                            <h2 class="gallery__preview-title">${e.title}</h2>
                            <p class="gallery__preview-text">
                                ${e.text}
                            </p>
                        </div>
                        <div class="gallery__preview-background"></div>
                    </div>
                    <div class="gallery__player" data-id="${e.urlVideo}"></div>`;const l=document.createElement("div");return l.className=`gallery__youtube-container gallery__item-${a} ${a%6==0||e.mini?"gallery__youtube-container-mini":""}`,l.innerHTML=r,g(e.previewUrl,l.querySelector(".gallery__preview-img")),l}export{v as u};
