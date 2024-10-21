import { usePhotoReplacement } from "../../registration/photo-replacement.js";
import { Notify } from "notiflix/build/notiflix-notify-aio";

let validateStatus = true;

export function useValidate(
    form,
    inputArr,
    messagesError,
    regExp,
    callback,
    button,
    callbackArgs = null,
    imgBlock = null,
    imgInput = null,
) {
    inputArr.forEach((element, index) => {
        element.addEventListener("input", () => {
            if (element.name in messagesError) {
                validateInput(element.name, messagesError[element.name], index, element, regExp[element.name]);
            }
        });
        element.addEventListener("blur", () => {
            if (element.name in messagesError) {
                validateInput(element.name, messagesError[element.name], index, element, regExp[element.name]);
            }
            console.log(validateStatus);
        });
        button.addEventListener("click", (event) => {
            event.preventDefault();
            if (element.name in messagesError) {
                validateInput(element.name, messagesError[element.name], index, element, regExp[element.name]);
            }
        });
    });

    button.addEventListener("click", () => {
        if (validateStatus) {
            callback(...callbackArgs);
        } else {
            Notify.warning("Перевірте всі поля вводу");
        }
    });

    function validateInput(inputName, textError, inputIndex, elementInput, regExp = null) {
        const formData = new FormData(form);
        const errorElement = elementInput.parentElement.querySelector(".error__block");
        const file = formData.get("photoAvatar");

        try {
            if (formData.get(elementInput.name) === "" && textError.void !== null) {
                throw new Error(textError.void);
            }
            if (elementInput.name === "photoAvatar") {
                if (!file.name.match(regExp)) {
                    throw new Error(textError.regExp);
                } else {
                    usePhotoReplacement(imgBlock, imgInput);
                }
            }

            if (
                "photoAvatar" === elementInput.name ? false : !formData.get(elementInput.name).match(regExp) && regExp
            ) {
                throw new Error(textError.regExp);
            }

            if (formData.get("password") !== formData.get("confirmPassword") && textError.password) {
                throw new Error(textError.password);
            }

            errorRemove(errorElement, elementInput);
        } catch (error) {
            errorAddClass(elementInput, error.message, errorElement);
        }
    }
}

export function checkboxValidate(form, name, checkbox, textError, button) {
    button.addEventListener("click", () => {
        const formData = new FormData(form);
        const errorElement = checkbox.parentElement.querySelector(".error__block");

        console.log(formData);
        try {
            if (formData.get(name) !== "on") {
                throw new Error(textError.check);
            }

            errorRemove(errorElement, checkbox);
        } catch (error) {
            errorAddClass(checkbox, error.message, errorElement);
        }
    });
}

export function errorAddClass(input, errorText = null, checkError) {
    if (!checkError) {
        let div = document.createElement("div");
        div.classList.add("error__block");
        let html = `<p class="error__text">${errorText}</p>`;
        div.innerHTML = html;
        input.classList.add("error__input");
        input.parentElement.appendChild(div);
    } else {
        input.parentElement.querySelector(".error__text").textContent = errorText;
    }
    validateStatus = false;
}

function errorRemove(errorElement, input) {
    if (errorElement) {
        input.classList.remove("error__input");
        input.style.border = "1px solid $subGreat";
        errorElement.remove();
        validateStatus = true;
    }
}
