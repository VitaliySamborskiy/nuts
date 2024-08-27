export function filterProducts(
    arrCards,
    applyButton,
    crossButton,
    loverPrice,
    higherPrice,
    mainContainer,
) {
    const appliedFilters = {};
    const saveCards = arrCards;
    const cardsPrice = Array.from(arrCards);
    let arrowStatus;

    loverPrice.addEventListener("click", () => {
        arrowStatus = "lover";
        activeArrow();
        cardsPrice.sort((a, b) => {
            return parseInt(a.getAttribute("data-price")) - parseInt(b.getAttribute("data-price"));
        });

        cardsPrice.forEach((element) => {
            mainContainer.appendChild(element);
        });
    });

    higherPrice.addEventListener("click", () => {
        arrowStatus = "higher";
        activeArrow();
        cardsPrice.sort((a, b) => {
            return parseInt(b.getAttribute("data-price")) - parseInt(a.getAttribute("data-price"));
        });

        cardsPrice.forEach((element) => {
            mainContainer.appendChild(element);
        });
    });

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

    crossButton.addEventListener("click", () => {
        resetFilter(arrCards, ".product-filter__current-weight", "Масса");
        resetFilter(arrCards, ".product-filter__current-taste", "Вкус");
        saveCards.forEach((element) => {
            mainContainer.appendChild(element);
        });
        arrowStatus = null;
        activeArrow();
    });

    function activeArrow() {
        switch (arrowStatus) {
            case "lover":
                loverPrice.children[0].firstChild.classList.add("product-filter__cost-svg-active");
                higherPrice.children[0].firstChild.classList.remove(
                    "product-filter__cost-svg-active",
                );
                break;
            case "higher":
                loverPrice.children[0].firstChild.classList.remove(
                    "product-filter__cost-svg-active",
                );
                higherPrice.children[0].firstChild.classList.add("product-filter__cost-svg-active");
                break;
            case null:
                loverPrice.children[0].firstChild.classList.remove(
                    "product-filter__cost-svg-active",
                );
                higherPrice.children[0].firstChild.classList.remove(
                    "product-filter__cost-svg-active",
                );
                break;
        }
    }
}

function resetFilter(arrCards, element, text) {
    arrCards.forEach((item) => {
        item.classList.remove("hidden");
    });
    document.querySelector(element).textContent = text;
}
