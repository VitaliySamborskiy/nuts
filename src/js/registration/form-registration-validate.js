export function useRegistrationValidate(formRegistration, inputArr, messagesError, regExp) {
    inputArr.forEach((element, index) => {
        element.addEventListener("input", () => {
            if (element.name in messagesError) {
                validateInput(
                    element.name,
                    messagesError[element.name],
                    index,
                    element,
                    regExp[element.name],
                );
            }
        });
        element.addEventListener("blur", () => {
            if (element.name in messagesError) {
                validateInput(
                    element.name,
                    messagesError[element.name],
                    index,
                    element,
                    regExp[element.name],
                );
            }
        });
    });

    function validateInput(inputName, textError, inputIndex, elementInput, regExp = null) {
        const formData = new FormData(formRegistration);
        const errorElement = elementInput.parentElement.querySelector(".registration__error-block");
        try {
            if (formData.get(elementInput.name) === "") {
                throw new Error(textError.void);
            }
            if (!formData.get(elementInput.name).match(regExp) && regExp) {
                throw new Error(textError.regExp);
            }
            if (
                formData.get("password") !== formData.get("confirmPassword") &&
                textError.password
            ) {
                throw new Error(textError.password);
            }
            errorRemove(errorElement, elementInput);
        } catch (error) {
            errorAddClass(elementInput, error.message, errorElement);
        }
    }

    function errorAddClass(input, errorText = null, checkError) {
        if (!checkError) {
            let div = document.createElement("div");
            div.classList.add("registration__error-block");
            let html = `<p class="registration__error-text">${errorText}</p>`;
            div.innerHTML = html;
            input.classList.add("registration__error-input");
            input.parentElement.appendChild(div);
        } else {
            input.parentElement.querySelector(".registration__error-text").textContent = errorText;
        }
    }

    function errorRemove(errorElement, input) {
        if (errorElement) {
            input.classList.remove("registration__error-input");
            errorElement.remove();
        }
    }
}
