export function useInputActive(inputArr, labelArr) {
    inputArr.forEach((element, index) => {
        element.addEventListener("input", () => {
            let inputState = false;
            if (element.value.trim() !== "") {
                inputState = true;
            }
            labelArr[index].classList.toggle("registration__label_active", inputState);
        });
    });
}
