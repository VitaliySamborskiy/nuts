export function filterProducts(
    arrCards,
    applyButton,
    crossButton,
    loverPrice,
    higherPrice,
    mainContainer,
) {
    const appliedFilters = {};
    const oldCards = arrCards;
    const cardsPrice = Array.from(arrCards);

    applyButton.addEventListener("click", () => {
        appliedFilters.weight = document
            .querySelector(".product-filter__current-weight")
            .textContent.trim();

        appliedFilters.taste = document
            .querySelector(".product-filter__current-taste")
            .textContent.trim();

        arrCards.forEach((card) => {
            let filterChange = true;

            if (appliedFilters.weight !== "Масса") {
                const itemWeight = parseInt(card.getAttribute("data-weight"));
                const [min, max] = appliedFilters.weight.split("-").map(Number);
                if (itemWeight < min || itemWeight > max) {
                    filterChange = false;
                }
            }

            if (appliedFilters.taste !== "Вкус") {
                const itemTaste = card.getAttribute("data-taste");
                if (appliedFilters.taste !== itemTaste) {
                    filterChange = false;
                }
            }

            card.classList.toggle("hidden", !filterChange);
        });
    });

    loverPrice.addEventListener("click", () => {
        cardsPrice.sort((a, b) => {
            return parseInt(a.getAttribute("data-price")) - parseInt(b.getAttribute("data-price"));
        });

        cardsPrice.forEach((element) => {
            mainContainer.appendChild(element);
        });
    });

    higherPrice.addEventListener("click", () => {
        cardsPrice.sort((a, b) => {
            return parseInt(b.getAttribute("data-price")) - parseInt(a.getAttribute("data-price"));
        });

        cardsPrice.forEach((element) => {
            mainContainer.appendChild(element);
        });
    });

    crossButton.addEventListener("click", () => {
        resetFilter(arrCards, ".product-filter__current-weight", "Масса");
        resetFilter(arrCards, ".product-filter__current-taste", "Вкус");
        oldCards.forEach((element) => {
            mainContainer.appendChild(element);
        });
    });
}

function resetFilter(arrCards, element, text) {
    arrCards.forEach((item) => {
        item.classList.remove("hidden");
    });
    document.querySelector(element).textContent = text;
}
