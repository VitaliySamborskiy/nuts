export function useMenuPopup(button, popup, cross, addClass) {
    button.addEventListener("click", () => {
        popup.classList.add(addClass);
    });

    cross.addEventListener("click", () => {
        popup.classList.remove(addClass);
    });
}
