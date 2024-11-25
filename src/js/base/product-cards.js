import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { getElement } from "./get-methods/get-element-dom.js";
import { useRenderPopupProduct } from "./renders-methods/render-popup-products.js";
import { setProduct } from "./local-storage.js";

export function useCards(cards, popup, popupBlock, cross, dataArr) {
    const scrollableElement = getElement(".popup__scroll");
    let popupStatus;

    cards.addEventListener("click", (event) => {
        const cardSearch = event.target.closest(".base-product__search");
        const buttonNext = event.target.closest(".base-product__button-next");
        const buttonPrev = event.target.closest(".base-product__button-prev");
        const card = event.target.closest(".product__link");

        if (cardSearch) {
            event.preventDefault();
            popupStatus = true;
            clickSearch(popup, popupBlock, popupStatus);
            disablePageScroll(scrollableElement);
            useRenderPopupProduct(
                {
                    title: card.parentElement.getAttribute("data-title"),
                    prices: JSON.parse(card.parentElement.getAttribute("data-prises")),
                    images: JSON.parse(card.parentElement.getAttribute("data-imgUrl")),
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

        if (buttonNext) {
            event.preventDefault();
        }

        if (buttonPrev) {
            event.preventDefault();
        }

        if (card) {
            const resultData = dataArr.filter((data) => {
                return data.art === card.parentElement.getAttribute("data-arc");
            });
            setProduct(resultData);
        }
    });

    cross.addEventListener("click", () => {
        popupStatus = false;
        clickSearch(popup, popupBlock, popupStatus);
        enablePageScroll(scrollableElement);
    });
}

export function clickSearch(popup, popupBlock, popupStatus) {
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
