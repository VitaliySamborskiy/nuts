import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { getElement } from "./get-element-dom.js";
import { useRenderPopupProduct } from "./render-popup-products.js";

export function useCards(cards, popup, popupBlock, cross) {
    const scrollableElement = getElement(".popup__scroll");
    let popupStatus;

    cards.addEventListener("click", (event) => {
        event.preventDefault();
        const card = event.target.closest(".product__card-search");
        const dataArr = event.target.closest(".product__card");

        if (card) {
            popupStatus = true;
            clickSearch(popup, popupBlock, popupStatus);
            disablePageScroll(scrollableElement);
            useRenderPopupProduct(
                {
                    title: dataArr.getAttribute("data-title"),
                    prices: JSON.parse(dataArr.getAttribute("data-prises")),
                    images: JSON.parse(dataArr.getAttribute("data-imgUrl")),
                },
                {
                    title: getElement(".popup__title"),
                    prices: getElement(".popup__price"),
                    slideWrapper: getElement(".popup__swiper-wrapper"),
                    popup: popup,
                    popupBlock: popupBlock,
                },
            );
        }
    });

    cross.addEventListener("click", () => {
        popupStatus = false;
        clickSearch(popup, popupBlock, popupStatus);
        enablePageScroll(scrollableElement);
    });
}

function clickSearch(popup, popupBlock, popupStatus) {
    setTimeout(
        () => {
            popup.classList.toggle("popup__content_active", popupStatus);
        },
        popupStatus ? 0 : 900,
    );
    setTimeout(
        () => {
            popupBlock.classList.toggle("popup__background-block_active", popupStatus);
        },
        popupStatus ? 10 : 0,
    );
}
