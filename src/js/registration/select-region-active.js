export function selectRegion(currentCountry, arrRegionsItems, currentText, classElementAction) {
    let currentObserve = new MutationObserver(() => {
        if (currentCountry.textContent === "Страна") {
            return null;
        }

        classElementAction.classList.remove("inputs-select__header-inactive");

        arrRegionsItems.forEach((item) => {
            item.classList.remove("select__body");
        });

        arrRegionsItems.forEach((element) => {
            if (element.dataset.region === currentCountry.textContent) {
                element.classList.add("select__body");
                currentText.textContent = element.dataset.administrative;
            }
        });
    });

    currentObserve.observe(currentCountry, {
        childList: true,
    });
}
