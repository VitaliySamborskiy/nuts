export function useInputActive(inputArr) {
    inputArr.forEach((element) => {
        element.addEventListener("input", () => {
            let inputState = false;
            if (element.value.trim() !== "") {
                inputState = true;
            }
            element.previousElementSibling.classList.toggle(
                "registration__label_active",
                inputState,
            );
        });
    });
}
