export function select(currentElement, selectors) {
    // const selectors = document.querySelectorAll(".select");

    selectors.forEach((selector) => {
        const selectSvg = selector.querySelector(".select__svg");
        const selectBody = selector.querySelector(".select__body");
        const selectHeader = selector.querySelector(".select__header");

        selector.addEventListener("click", (event) => {
            const clickHeader = event.target.closest(".select__header");
            const clickItem = event.target.closest(".select__item");

            if (clickHeader) {
                getSelect(clickHeader, selectBody, selectSvg);
            }
            if (clickItem) {
                getSelect(selectHeader, selectBody, selectSvg);
                // for (let item of currentElement) {
                //     item.textContent = clickItem.textContent;
                // }
                currentElement.forEach((item) => {
                    item.textContent = clickItem.textContent;
                });
            }
        });

        document.addEventListener("click", (event) => {
            if (!selector.contains(event.target)) {
                resetSelect(selectHeader, selectBody, selectSvg);
            }
        });
    });

    function getSelect(header, body, svg) {
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
