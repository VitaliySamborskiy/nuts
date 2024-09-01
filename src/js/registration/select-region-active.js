export function selectRegion(currentCountry, arrRegionsItems) {
    let currentObserve = new MutationObserver(() => {
        if (currentCountry.textContent === "Страна") {
            return null;
        }

        document.querySelector(".region").classList.remove("registration__select-header-inactive");

        arrRegionsItems.forEach((item) => {
            item.classList.remove("select__body");
        });

        arrRegionsItems.forEach((element) => {
            if (element.dataset.region === currentCountry.textContent) {
                element.classList.add("select__body");
            }
        });
    });

    currentObserve.observe(currentCountry, {
        childList: true,
    });
}
