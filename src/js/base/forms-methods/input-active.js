export function useInputActive(inputArr, labelArr) {
    inputArr.forEach((element, index) => {
        element.addEventListener("input", () => {
            inputActiveType(element, element.value.trim() !== "", labelArr, index);
        });
        element.addEventListener("focus", () => {
            if (element.value.trim() === "") {
                inputActiveType(element, element.value.trim() === "", labelArr, index);
            }
        });
        element.addEventListener("blur", () => {
            inputActiveType(element, element.value.trim() !== "", labelArr, index);
        });
    });
}

function inputActiveType(element, condition, labelArr, index) {
    let inputState = false;
    if (condition) {
        inputState = true;
    }
    labelArr[index].classList.toggle("input__label_active", inputState);
}
