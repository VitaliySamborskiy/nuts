export function tabSection(buttons, body, activeClassButton, activeClassSvg, activeClassBody) {
    buttons.forEach((button, index) => {
        button.addEventListener("click", (event) => {
            buttons.forEach((button) => {
                button.classList.remove(activeClassButton);
                button.firstElementChild.classList.remove(activeClassSvg);
            });

            body.forEach((content) => {
                content.classList.remove(activeClassBody);
            });

            const tabId = button.getAttribute("data-id");
            button.classList.add(activeClassButton);
            button.firstElementChild.classList.add(activeClassSvg);

            if (body[index].id === tabId) {
                body[index].classList.add(activeClassBody);
            }
        });
    });
}
