export function useInputClear(inputs) {
    for (let input of inputs) {
        input.value = "";
        input.parentElement.querySelector(".input__label").classList.remove("input__label_active");
    }
}
