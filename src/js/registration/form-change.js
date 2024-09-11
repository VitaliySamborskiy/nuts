let bodyChangesItems;

export function useFormChange(headerTabs, bodyTabs, radioInputs, checkboxInput) {
    headerTabs.forEach((item, index) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            formChangeTabHeader(index, headerTabs);
            formChangeTabBody(index, bodyTabs);

            headerTabs[1].classList.remove("registration__select-header-inactive-text");
        });
    });

    radioInputs.forEach((item) => {
        item.addEventListener("change", () => {
            if (item.value === "fop-form") {
                formChangeTabHeader(0, headerTabs);
                headerTabs[1].classList.add("registration__select-header-inactive-text");
                return;
            }
            headerTabs[1].classList.remove("registration__select-header-inactive-text");
            formChangeTabHeader(1, headerTabs);
        });
    });

    checkboxInput.addEventListener("change", () => {
        radioInputs[1].checked = true;
        formChangeTabBody(1, bodyTabs);
        radioInputChange(bodyChangesItems, checkboxInput);
        formChangeTabHeader(0, headerTabs);
        headerTabs[1].classList.add("registration__select-header-inactive-text");
        checkboxInput.checked = false;
    });
}

export function useFormChangeRadio(radioInputs, bodyChangesInput, titleChange) {
    bodyChangesItems = bodyChangesInput;
    radioInputs.forEach((item) => {
        item.addEventListener("change", () => {
            radioInputChange(bodyChangesInput, item);

            if (item.value === "fop-form") {
                titleChange.textContent = "Адрес ФОП";
                return;
            }
            titleChange.textContent = "Юридический адрес";
        });
    });
}

function radioInputChange(bodyChangesItems, item) {
    for (let changeItem of bodyChangesItems) {
        changeItem.classList.remove("registration__select-header-inactive");
        changeItem.parentElement
            .querySelector("label")
            .classList.remove("registration__select-header-inactive-text");
    }

    for (let changeItem of bodyChangesItems) {
        if (item.value !== changeItem.getAttribute("data-change")) {
            changeItem.classList.add("registration__select-header-inactive");
            changeItem.parentElement
                .querySelector("label")
                .classList.add("registration__select-header-inactive-text");
        }
    }
}

function formChangeTabHeader(index, headerTabs) {
    for (let headerTab of headerTabs) {
        headerTab.classList.remove("registration__tab_active");
    }
    headerTabs[index].classList.add("registration__tab_active");
}

function formChangeTabBody(index, bodyTabs) {
    for (let bodyTab of bodyTabs) {
        bodyTab.classList.remove("registration__body_active");
    }
    bodyTabs[index].classList.add("registration__body_active");
}
