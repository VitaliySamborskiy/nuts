export function inputActive(inputArr) {
    inputArr.forEach((element) => {
        element.addEventListener("input", () => {
            if (element.value.trim() !== "") {
                element.classList.toggle("registration__label_active");
            }
        });
    });
}
