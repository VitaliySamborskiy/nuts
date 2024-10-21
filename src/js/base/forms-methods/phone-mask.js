import { getAsYouType, parsePhoneNumber } from "awesome-phonenumber";

export function useNumberMask(inputPhone, countryCode, regExp, inputCodeCounty) {
    const mask = new getAsYouType(countryCode);

    inputPhone.addEventListener("input", (event) => {
        if (!event.target.value.match(regExp)) {
            event.target.value = inputCodeCounty;
        }

        const { value, selectionStart } = event.target;
        const cleanedValue = value.replace(/[^\d+]/g, "");

        mask.reset();
        let formatted = "";
        for (let char of cleanedValue) {
            formatted = mask.addChar(char);
        }

        if (formatted !== value) {
            event.target.value = formatted;
        }

        const phoneNumber = parsePhoneNumber(value, { regionCode: countryCode });

        if (phoneNumber.valid) {
            event.target.value = phoneNumber.number.international;
        }

        const difference = formatted.length - value.length;
        event.target.setSelectionRange(selectionStart + difference, selectionStart + difference);
    });
}
