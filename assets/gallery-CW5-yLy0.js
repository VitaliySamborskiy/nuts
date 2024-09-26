import{g as t,D as o,u as g}from"./main-_zEzRe2m.js";function p(e,r,a){r.sort((l,i)=>l.index-i.index),console.log(r),_(r,e),a&&a.addEventListener("click",()=>{_(r,e)})}function _(e,r){let a=document.createDocumentFragment();const l=e.splice(0,6);if(l.length!==0){l.forEach((s,c)=>{s.urlImg?a.appendChild(d(s,c)):a.appendChild(u(s,c))});const i=document.createElement("div");i.classList.add("gallery__block-items"),i.appendChild(a),r.appendChild(i);const n=t(".gallery__player","all"),y=Array.from(n).map(s=>s.getAttribute("data-id"));o(y,t(".gallery__player","all"),t(".gallery__youtube-container","all"),t(".gallery__preview","all"),"gallery__preview_active")}}function d(e,r){let a="";a=`<picture class="gallery__img-block">
            <img class="gallery__img" src="" />
        </picture>
        <div class="gallery__card-block">
            <div class="gallery__card-block-text">
                <h3 class="gallery__card-title">${e.title}</h3>
                <p class="gallery__card-text">
                   ${e.text}
                </p>
            </div>
        </div>
        <div class="gallery__background"><svg class="gallery__svg"><use href="#logo"></use></svg></div>`;const l=document.createElement("div");return l.className=`gallery__block gallery__item-${++r}`,l.innerHTML=a,g(e.urlImg,l.querySelector(".gallery__img")),l}function u(e,r){let a="";a=`<div class="gallery__preview">
                        <picture class="gallery__preview-img-block">
                            <img class="gallery__preview-img" src="" />
                        </picture>
                        <button class='play-button gallery__play ${++r%6==0||e.mini?"gallery__play-mini":""}'>
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
                    <div class="gallery__player" data-id="${e.urlVideo}"></div>`;const l=document.createElement("div");return l.className=`gallery__youtube-container gallery__item-${r} ${r%6==0||e.mini?"gallery__youtube-container-mini":""}`,l.innerHTML=a,g(e.previewUrl,l.querySelector(".gallery__preview-img")),l}export{p as u};
