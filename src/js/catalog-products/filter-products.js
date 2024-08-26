import { getElement } from "../base/get-element-dom.js";

export function filterProducts(arrCards, applyButton, crossButton) {
    applyButton.addEventListener("click", () => {
        const selectorWeight = document.querySelector(
            ".product-filter__current-weight",
        ).textContent;
        arrCards.forEach((item) => {
            item.data("weight");
        });
    });

    crossButton.addEventListener("click", (event) => {});
}
