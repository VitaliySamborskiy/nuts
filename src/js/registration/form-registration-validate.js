import { getElement } from "../base/get-element-dom.js";

export function useRegistrationValidate(formRegistration, inputArr) {
    inputArr.forEach((element, index) => {
        element.addEventListener("input", () => {
            const formData = new FormData(formRegistration);

            try {
                if (formData.get("fullName") === "") {
                    throw new Error("фио не вказано!");
                }
                errorRemove(getElement(".registration__error-block"));
            } catch (error) {
                errorAddClass(inputArr[0], error.message, getElement(".registration__error-block"));
            }
        });
    });

    function errorAddClass(input, errorText = null, checkError) {
        if (!checkError) {
            let div = document.createElement("div");
            div.classList.add("registration__error-block");
            let html = `<p class="registration__error-text">${errorText}</p>`;
            div.innerHTML = html;
            input.parentElement.appendChild(div);
        }
    }

    function errorRemove(errorElement) {
        if (errorElement) {
            errorElement.remove();
        }
    }
}
