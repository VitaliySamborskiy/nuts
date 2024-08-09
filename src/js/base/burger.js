import { disablePageScroll, enablePageScroll } from "scroll-lock";

export function burgerMenu() {
    const burger = document.querySelector(".burger");
    const burgerBackground = document.querySelector(".burger__background");
    const scrollableElement = document.querySelector(".burger__scroll");

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
