let bodyChangesItems;
let dataAttributesType = {
    selectedUserTypeHeader: 0,
    selectedUserTypeBody: 0,
    selectedLegalType: null,
};

export function useFormChange(
    headerTabs,
    bodyTabs,
    radioInputs,
    checkboxInput,
    bodyChangesInput,
    titleChange,
) {
    bodyChangesItems = bodyChangesInput;

    headerTabs.forEach((item, index) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            formChangeTabHeader(index, headerTabs);
            formChangeTabBody(index, bodyTabs);
            dataAttributesType.selectedUserTypeHeader = index;
            dataAttributesType.selectedUserTypeBody = index;
            console.log(dataAttributesType);
            headerTabs[1].classList.remove("registration__select-header-inactive-text");
            queryParameter(dataAttributesType);
        });
    });

    radioInputs.forEach((item) => {
        item.addEventListener("change", () => {
            if (item.value === "fop-form") {
                formChangeTabHeader(0, headerTabs);
                headerTabs[1].classList.add("registration__select-header-inactive-text");
                dataAttributesType.selectedUserTypeHeader = 0;
                return;
            }
            headerTabs[1].classList.remove("registration__select-header-inactive-text");
            formChangeTabHeader(1, headerTabs);
            dataAttributesType.selectedUserTypeHeader = 1;
        });
    });

    checkboxInput.addEventListener("change", () => {
        radioInputs[1].checked = true;
        checkboxInput.checked = false;
        formChangeTabBody(1, bodyTabs);
        formChangeTabHeader(0, headerTabs);
        radioInputChange(bodyChangesInput, checkboxInput);
        headerTabs[1].classList.add("registration__select-header-inactive-text");
        dataAttributesType.selectedUserTypeBody = 1;
        dataAttributesType.selectedUserTypeHeader = 0;
        dataAttributesType.selectedLegalType = radioInputs[1].getAttribute("data-legal-type");
        queryParameter(dataAttributesType);
        titleChange.textContent = "Адрес ФОП";
    });

    radioInputs.forEach((item, index) => {
        item.addEventListener("change", () => {
            radioInputChange(bodyChangesInput, item);
            dataAttributesType.selectedLegalType =
                radioInputs[index].getAttribute("data-legal-type");
            queryParameter(dataAttributesType);

            if (item.getAttribute("data-legal-type") === "entrepreneur") {
                titleChange.textContent = "Адрес ФОП";
                return;
            }
            titleChange.textContent = "Юридический адрес";
        });
    });

    getQueryParameter(dataAttributesType, headerTabs, bodyTabs, bodyChangesInput);
}

function radioInputChange(bodyChangesItems, item) {
    for (let changeItem of bodyChangesItems) {
        changeItem.classList.remove("registration__select-header-inactive");
        changeItem.parentElement
            .querySelector("label")
            .classList.remove("registration__select-header-inactive-text");
    }

    for (let changeItem of bodyChangesItems) {
        if (
            (item.getAttribute("data-legal-type") || item) !==
            changeItem.getAttribute("data-change")
        ) {
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

function queryParameter(dataAttribute) {
    dataAttributesType.init = true;
    const queryParams = new URLSearchParams({
        userType: dataAttribute.selectedUserTypeHeader,
        userBody: dataAttribute.selectedUserTypeBody,
        legalType: dataAttribute.selectedLegalType,
    });

    window.history.replaceState(null, null, "?" + queryParams.toString());
}

// function getQueryParameter(queryParametersObg, headerTabs, bodyTabs, bodyChangesInput) {
//     const queryParams = new URLSearchParams(window.location.search);
//     // queryParametersObg.selectedUserTypeHeader = queryParams.get("userType");
//     // queryParametersObg.selectedUserTypeBody = queryParams.get("userBody");
//     // queryParametersObg.selectedLegalType = queryParams.get("legalType");
//     formChangeTabHeader(queryParametersObg.selectedUserTypeHeader, headerTabs);
//     formChangeTabBody(queryParametersObg.selectedUserTypeBody, bodyTabs);
//     radioInputChange(bodyChangesInput, queryParametersObg.selectedLegalType);
// }
