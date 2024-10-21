import { useGetQueryParameter, useSetQueryParameter } from "../base/querry-parameter.js";
import { renderForm } from "./renders-form.js";
import { getElement } from "../base/get-methods/get-element-dom.js";

let bodyChangesItems;
let elementRadioInputs;
let dataAttributesType = {
    selectedUserTypeHeader: 0,
    selectedUserTypeBody: 0,
    selectedLegalType: "legal",
};

export function useFormChange(headerTabs, bodyTabs) {
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

    const queryParameterSearch = new URLSearchParams(window.location.search);
    if (queryParameterSearch.get("legalType") === null) {
        useSetQueryParameter(["userType", "userBody", "legalType"], Object.values(dataAttributesType));
    } else {
        getQueryParameter(dataAttributesType, headerTabs, bodyTabs, bodyChangesItems, elementRadioInputs);
    }
}

export function useRadioInputChange(headerTabs, bodyTabs, checkboxInput, radioInputs, bodyChangesInput, titleChange) {
    bodyChangesItems = bodyChangesInput;
    elementRadioInputs = radioInputs;

    if (checkboxInput.checked) {
        radioInputs[1].checked = true;
        radioInputChange(bodyChangesInput, checkboxInput);
        dataAttributesType.selectedLegalType = radioInputs[1].getAttribute("data-legal-type");
        titleChange.textContent = "Адрес ФОП";
        formChangeTabBody(1, bodyTabs);
        formChangeTabHeader(0, headerTabs);
        headerTabs[1].classList.add("registration__select-header-inactive-text");
        dataAttributesType.selectedUserTypeBody = 1;
        dataAttributesType.selectedUserTypeHeader = 0;
        useSetQueryParameter(["userType", "userBody", "legalType"], Object.values(dataAttributesType));
        checkboxInput.checked = false;
    }

    radioInputs.forEach((item, index) => {
        item.addEventListener("change", () => {
            if (item.getAttribute("data-legal-type") === "entrepreneur") {
                headerTabs[1].classList.add("registration__select-header-inactive-text");
                formChangeTabHeader(0, headerTabs);
                titleChange.textContent = "Адрес ФОП";
                dataAttributesType.selectedUserTypeHeader = 0;
                dataAttributesType.selectedUserTypeBody = 1;
            } else {
                headerTabs[1].classList.remove("registration__select-header-inactive-text");
                formChangeTabHeader(1, headerTabs);
                titleChange.textContent = "Юридический адрес";
                dataAttributesType.selectedUserTypeHeader = 1;
                dataAttributesType.selectedUserTypeBody = 1;
            }

            radioInputChange(bodyChangesInput, item);
            dataAttributesType.selectedLegalType = radioInputs[index].getAttribute("data-legal-type");
            useSetQueryParameter(["userType", "userBody", "legalType"], Object.values(dataAttributesType));
        });
    });
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

    let index = queryParametersObg.selectedLegalType === "legal" ? 0 : 1;

    if (index === 1) {
        headerTabs[1].classList.add("registration__select-header-inactive-text");
    }
    if (+queryParametersObg.selectedUserTypeBody === 1) {
        renderForm(getElement(".registration__legal"));
        formChangeTabHeader(queryParametersObg.selectedUserTypeHeader, headerTabs);
        formChangeTabBody(queryParametersObg.selectedUserTypeBody, bodyTabs);
    }

    formChangeTabHeader(queryParametersObg.selectedUserTypeHeader, headerTabs);
    formChangeTabBody(queryParametersObg.selectedUserTypeBody, bodyTabs);
    radioInputChange(bodyChangesInput, queryParametersObg.selectedLegalType);
}
