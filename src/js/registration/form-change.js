import { useGetQueryParameter, useNewQueryParameter, useSetQueryParameter } from "../base/querry-parameter.js";

let bodyChangesItems;
let dataAttributesType = {
    selectedUserTypeHeader: 0,
    selectedUserTypeBody: 0,
    selectedLegalType: "legal",
};

export function useFormChange(headerTabs, bodyTabs, radioInputs, checkboxInput, bodyChangesInput, titleChange) {
    bodyChangesItems = bodyChangesInput;

    headerTabs.forEach((item, index) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            formChangeTabHeader(index, headerTabs);
            formChangeTabBody(index, bodyTabs);
            dataAttributesType.selectedUserTypeHeader = index;
            dataAttributesType.selectedUserTypeBody = index;
            headerTabs[1].classList.remove("registration__select-header-inactive-text");
            useSetQueryParameter(["userType", "userBody", "legalType"], Object.values(dataAttributesType));
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
        useSetQueryParameter(["userType", "userBody", "legalType"], Object.values(dataAttributesType));
        titleChange.textContent = "Адрес ФОП";
    });

    radioInputs.forEach((item, index) => {
        item.addEventListener("change", () => {
            radioInputChange(bodyChangesInput, item);
            dataAttributesType.selectedLegalType = radioInputs[index].getAttribute("data-legal-type");
            useSetQueryParameter(["userType", "userBody", "legalType"], Object.values(dataAttributesType));

            if (item.getAttribute("data-legal-type") === "entrepreneur") {
                titleChange.textContent = "Адрес ФОП";
                return;
            }
            titleChange.textContent = "Юридический адрес";
        });
    });

    const queryParameterSearch = new URLSearchParams(window.location.search);
    if (queryParameterSearch.get("legalType") === null) {
        useNewQueryParameter(["userType", "userBody", "legalType"], Object.values(dataAttributesType));
    } else {
        getQueryParameter(dataAttributesType, headerTabs, bodyTabs, bodyChangesInput, radioInputs);
    }
}

function radioInputChange(bodyChangesItems, item) {
    for (let changeItem of bodyChangesItems) {
        changeItem.classList.remove("registration__select-header-inactive");
        changeItem.parentElement.querySelector("label").classList.remove("registration__select-header-inactive-text");
    }

    for (let changeItem of bodyChangesItems) {
        let itemAttr = item instanceof HTMLElement ? item.getAttribute("data-legal-type") : item;
        if (itemAttr !== changeItem.getAttribute("data-change")) {
            changeItem.classList.add("registration__select-header-inactive");
            changeItem.parentElement.querySelector("label").classList.add("registration__select-header-inactive-text");
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

function getQueryParameter(queryParametersObg, headerTabs, bodyTabs, bodyChangesInput, radioInputs) {
    queryParametersObg = useGetQueryParameter(
        ["selectedUserTypeHeader", "selectedUserTypeBody", "selectedLegalType"],
        ["userType", "userBody", "legalType"],
    );
    console.log(queryParametersObg);
    let index = queryParametersObg.selectedLegalType === "legal" ? 0 : 1;
    console.log(index);
    radioInputs[index].checked = true;
    if (index === 1) {
        headerTabs[1].classList.add("registration__select-header-inactive-text");
    }
    formChangeTabHeader(queryParametersObg.selectedUserTypeHeader, headerTabs);
    formChangeTabBody(queryParametersObg.selectedUserTypeBody, bodyTabs);
    radioInputChange(bodyChangesInput, queryParametersObg.selectedLegalType);
}
