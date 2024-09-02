export function select(currentElement, selectors) {
    selectors.forEach((selector) => {
        const selectSvg = selector.querySelector(".select__svg");
        const selectHeader = selector.querySelector(".select__header");

        selector.addEventListener("click", (event) => {
            const clickHeader = event.target.closest(".select__header");
            const clickItem = event.target.closest(".select__item");
            const selectBody = selector.querySelector(".select__body");

            if (clickHeader) {
                toggleSelect(clickHeader, selectBody, selectSvg);
            }
            if (clickItem) {
                toggleSelect(selectHeader, selectBody, selectSvg);
                currentElement.forEach((item) => {
                    item.textContent = clickItem.textContent;
                });
            }
        });

        document.addEventListener("click", (event) => {
            const selectBody = selector.querySelector(".select__body");
            if (!selector.contains(event.target)) {
                resetSelect(selectHeader, selectBody, selectSvg);
            }
        });
    });

    function toggleSelect(header, body, svg) {
        header.classList.toggle("select__header-active");
        body.classList.toggle("select__body-active");
        svg.classList.toggle("select__svg-active");
    }

    function resetSelect(header, body, svg) {
        header.classList.remove("select__header-active");
        body.classList.remove("select__body-active");
        svg.classList.remove("select__svg-active");
    }
}
