export function buttonChange(buttons) {
    buttons.forEach((button) => {
        button.addEventListener("click", (event) => {
            buttons.forEach((btn) => {
                btn.classList.remove("personal-cabinet__link_active");
            });

            event.currentTarget.classList.add("personal-cabinet__link_active");
        });
    });
}
