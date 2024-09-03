import { getElement } from "../base/get-element-dom.js";

export function useRegistrationValidate(formRegistration, inputArr) {
    inputArr.forEach((element) => {
        element.addEventListener("input", () => {
            const form = new FormData(formRegistration);

            validateInput(form, "fullName", "фио не вказано!", 0);
            validateInput(form, "email", "не коректна почта!", 1);
        });
    });

    function validateInput(formData, inputName, textError, inputIndex) {
        try {
            if (formData.get(inputName).trim() === "") {
                throw new Error(textError);
            }
            let input = inputArr[inputIndex];
            errorRemove(getElement(".registration__error-block"));
        } catch (error) {
            errorAddClass(
                inputArr[inputIndex],
                error.message,
                getElement(".registration__error-block"),
            );
        }
    }

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

// export function useRegistrationValidate(formRegistration, inputArr) {
//     inputArr.forEach((element) => {
//         element.addEventListener("input", (event) => {
//             const form = new FormData(formRegistration);
//
//             validateInput(form, "fullName", "ПІБ не вказано!", 0);
//             validateInput(form, "email", "Некоректна адреса електронної пошти!", 1);
//         });
//     });
//
//     function validateInput(formData, inputName, textError, inputIndex) {
//         const input = inputArr[inputIndex];
//         const errorElement = input.parentElement.querySelector(".registration__error-block");
//
//         if (formData.get(inputName).trim() === "") {
//             errorAddClass(input, textError, errorElement);
//         } else {
//             errorRemove(errorElement);
//         }
//     }
//
//     function errorAddClass(input, errorText, existingError) {
//         if (!existingError) {
//             let div = document.createElement("div");
//             div.classList.add("registration__error-block");
//             let html = `<p class="registration__error-text">${errorText}</p>`;
//             div.innerHTML = html;
//             input.parentElement.appendChild(div);
//         }
//     }
//
//     function errorRemove(errorElement) {
//         if (errorElement) {
//             errorElement.remove();
//         }
//     }
// }
