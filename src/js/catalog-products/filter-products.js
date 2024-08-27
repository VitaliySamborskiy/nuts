import { getElement } from "../base/get-element-dom.js";

export function filterProductsWeight(arrCards, applyButton, crossButton) {
    applyButton.addEventListener("click", () => {
        const selectorWeight = document
            .querySelector(".product-filter__current-weight")
            .textContent.trim();

        const [min, max] = selectorWeight.split("-").map(Number);

        arrCards.forEach((item) => {
            const itemWeight = parseInt(item.getAttribute("data-weight"));
            if (itemWeight < min || itemWeight > max) {
                item.classList.add("hidden");
            } else {
                item.classList.remove("hidden");
            }
        });
    });

    crossButton.addEventListener("click", () => {
        arrCards.forEach((item) => {
            item.classList.remove("hidden");
        });
        document.querySelector(".product-filter__current-weight").textContent = "Масса";
    });
}

export function filterProductsTaste(arrCards, applyButton, crossButton) {
    applyButton.addEventListener("click", () => {
        const selectorTaste = document.querySelector(".product-filter__select-taste");
        arrCards.forEach((item) => {
            const itemTaste = item.getAttribute("data-taste");
            if (itemTaste !== selectorTaste) {
                item.classList.add("hidden");
            } else {
                item.classList.remove("hidden");
            }
        });
    });
}
