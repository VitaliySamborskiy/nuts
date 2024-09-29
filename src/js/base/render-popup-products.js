import { getElement } from "./get-element-dom.js";
import { useGetImg } from "./use-img.js";
import { swiper } from "./swiper.js";

export function useRenderPopupProduct(data, elements) {
    changesTitle(elements.title, data.title);
    changesPriseText(elements.prices, data.prices);
    renderCards(elements.slideWrapper, data.images);
}

function changesTitle(element, textChanges) {
    element.textContent = textChanges;
}

function changesPriseText(element, priseChanges) {
    let statusDiscount;

    if (priseChanges[1] === null) {
        statusDiscount = true;
        element.lastElementChild.children[0].textContent = priseChanges[0];
    } else {
        statusDiscount = false;
        element.firstElementChild.children[0].textContent = priseChanges[0];
        element.lastElementChild.children[0].textContent = priseChanges[1];
    }

    element.firstElementChild.classList.toggle("popup__hidden", statusDiscount);
}

function renderCards(elementWrapper, imgData) {
    elementWrapper.innerHTML = "";
    let fragment = document.createDocumentFragment();

    imgData.forEach(() => {
        const div = document.createElement("div");
        const img = document.createElement("img");
        div.classList.add("swiper-slide");
        img.classList.add("popup__img");
        img.setAttribute("alt", "images-product");
        img.setAttribute("loading", "lazy");
        img.setAttribute("data-src", data.imgUrl);
        div.appendChild(img);
        fragment.appendChild(div);
    });

    const imgElements = fragment.querySelectorAll(".popup__img");
    imgElements.forEach((element, index) => {
        useGetImg(imgData[index], element);
    });

    elementWrapper.appendChild(fragment);

    swiper(
        getElement(".popup__swiper"),
        getElement(".popup__button-prev"),
        getElement(".popup__button-next"),
        "auto",
        0,
    );
}
