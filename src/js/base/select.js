export function select() {
    const selector = document.querySelector(".select");
    const selectSvg = selector.querySelector(".select__svg");
    const selectCurrent = document.querySelectorAll(".select__current");
    const selectBody = document.querySelector(".select__body");
    const selectHeader = document.querySelector(".select__header");

    selector.addEventListener("click", (event) => {
        const clickHeader = event.target.closest(".select__header");
        const clickItem = event.target.closest(".select__item");

        try {
            getSelect(clickHeader, selectBody, selectSvg);
        } catch (e) {
            getSelect(selectHeader, selectBody, selectSvg);
            selectCurrent.forEach((item) => {
                item.textContent = clickItem.textContent;
            });
        }
    });

    document.addEventListener("click", (event) => {
        if (!selector.contains(event.target)) {
            resetSelect(selectHeader, selectBody, selectSvg);
        }
    });

    function getSelect(header, body, svg, method) {
        header.classList.toggle("select__header_active");
        body.classList.toggle("select__body_active");
        svg.classList.toggle("select__svg_active");
    }

    function resetSelect(header, body, svg) {
        header.classList.remove("select__header_active");
        body.classList.remove("select__body_active");
        svg.classList.remove("select__svg_active");
    }
}
