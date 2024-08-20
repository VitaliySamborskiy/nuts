import { getImages } from "../get-images.js";
import { useGetImg } from "./useGetImg.js";

export function useRenderNewsCards(arrData, elements) {
    let fragment = document.createDocumentFragment();

    arrData.sort((a, b) => {
        return new Date(b.date) - new Date(a.date);
    });

    arrData.forEach((data) => {
        let html = ``;
        html = `<div class="news-swiper__card">
             <img class="news-swiper__card-img" src=""  alt="зображення новини"/>
             <div class="news-swiper__card-text-block">
                 <p class="news-swiper__card-date">${data.date}</p>
                 <h3 class="news-swiper__card-title">${data.mainTitle}</h3>
                 <p class="news-swiper__card-text">
                     ${data.summary}
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
        </div>`;

        let cardNews = document.createElement("div");
        cardNews.classList.add("swiper-slide");
        cardNews.innerHTML = html;
        useGetImg(data.url[0], cardNews.querySelector(`.news-swiper__card-img`));

        fragment.appendChild(cardNews);
    });

    elements.append(fragment);
}
