import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { getElement } from "./get-element-dom.js";

export function burgerMenu() {
    const burger = getElement(".burger");
    const burgerBackground = getElement(".burger__background");
    const scrollableElement = getElement(".burger__scroll");

    burger.addEventListener("click", (event) => {
        const icon = event.target.closest(".burger__icon");
        const close = event.target.closest(".burger__close");

        if (icon) {
            burgerBackground.classList.toggle("burger__background_active");
            disablePageScroll(scrollableElement);
        }
        if (close) {
            burgerBackground.classList.remove("burger__background_active");
            enablePageScroll(scrollableElement);
        }
    });
}
