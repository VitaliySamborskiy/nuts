import { getElement } from "./get-element-dom.js";

export function getFormInfo(form, keyName) {
    const formInfo = new FormData(form);
    let formValue = Array.from(formInfo.values());
    let formResult = {};

    for (let i = 0; i < formValue.length; i++) {
        formResult[keyName[i]] = formValue[i] !== undefined ? formValue[i] : null;
    }

    return formResult;
}

export function useGetFormSelects(obj, key, select, baseValue) {
    for (let i = 0; i < key.length; i++) {
        obj[key[i]] = getElement(select[i]).textContent.includes(baseValue) ? null : getElement(select[i]).textContent;
    }
    return obj;
}
