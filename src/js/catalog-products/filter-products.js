import { getElement } from "../base/get-element-dom.js";
import { useSetQueryParameter, useGetQueryParameter } from "../base/querry-parameter.js";

export function filterProducts(arrCards, applyButton, crossButton, lowerPrice, higherPrice, mainContainer) {
    const saveCards = arrCards;
    const cardsPrice = Array.from(arrCards);
    let appliedFilters = {};

    applyButton.addEventListener("click", () => {
        observerSelectsStatus(appliedFilters);
        selectFilters(arrCards, appliedFilters);
        useSetQueryParameter(["weight", "taste"], Object.values(appliedFilters));
    });

    crossButton.addEventListener("click", () => {
        resetAllFilter(mainContainer, saveCards, arrCards);
        observerSelectsStatus(appliedFilters);
        useSetQueryParameter(["weight", "taste"], Object.values(appliedFilters));
    });

    priseFilter(higherPrice, mainContainer, cardsPrice, "descending");
    priseFilter(lowerPrice, mainContainer, cardsPrice, "ascending");
    getQueryParameter(appliedFilters, arrCards);
}

function selectFilters(cards, appliedFilters) {
    cards.forEach((card) => {
        let filterChange = true;

        if (appliedFilters.weight !== "Масса") {
            const itemWeight = parseInt(card.getAttribute("data-weight"));
            const [min, max] = appliedFilters.weight.split("-").map(Number);
            if (itemWeight < min || itemWeight > max) {
                filterChange = false;
            }
        }

        if (appliedFilters.taste !== "Вкус" && filterChange) {
            const itemTaste = card.getAttribute("data-taste");
            if (appliedFilters.taste !== itemTaste) {
                filterChange = false;
            }
        }

        card.classList.toggle("hidden", !filterChange);
    });
}

function resetAllFilter(mainContainer, cardsSave, mainCards) {
    resetSelectFilter(mainCards, ".product-filter__current-weight", "Масса");
    resetSelectFilter(mainCards, ".product-filter__current-taste", "Вкус");
    cardsSave.forEach((element) => {
        mainContainer.appendChild(element);
    });
}

function resetSelectFilter(arrCards, element, text) {
    arrCards.forEach((item) => {
        item.classList.remove("hidden");
    });
    getElement(element).textContent = text;
}

function observerSelectsStatus(appliedFilters) {
    appliedFilters.weight = getElement(".product-filter__current-weight").textContent.trim();
    appliedFilters.taste = getElement(".product-filter__current-taste").textContent.trim();
}

function priseFilter(arrowButton, mainContainer, arrCard, sortType = null) {
    arrowButton.addEventListener("click", () => {
        arrCard.sort((a, b) => {
            return sortType === "ascending"
                ? parseInt(a.getAttribute("data-price")) - parseInt(b.getAttribute("data-price"))
                : parseInt(b.getAttribute("data-price")) - parseInt(a.getAttribute("data-price"));
        });

        arrCard.forEach((element) => {
            mainContainer.appendChild(element);
        });
    });
}

function getQueryParameter(appliedFilters, arrCards) {
    appliedFilters = useGetQueryParameter(["weight", "taste"], ["weight", "taste"]);
    selectFilters(arrCards, appliedFilters);
}
