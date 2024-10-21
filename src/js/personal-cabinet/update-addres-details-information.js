import { getFormInfo, useGetFormSelects } from "../base/get-methods/get-form.js";
import { getDocumentsId, useUpdateData } from "../base/fire-base-functions/use-fire-store.js";
import { useInputClear } from "../base/forms-methods/input-clear.js";
import { getElement } from "../base/get-methods/get-element-dom.js";
import { Notify } from "notiflix/build/notiflix-notify-aio";
// import { notifications } from "../base/notifications.js";

export async function updateAddressDetailsInformation(form, data, app) {
    let addressDetailsInfo;
    let documentId;

    if (data.role.company) {
        addressDetailsInfo = getFormInfo(form, [
            "EDRPOUCode",
            "city",
            "addresses",
            "companyLegalCity",
            "companyLegalAddress",
            "companyLegalIndex",
        ]);
        useGetFormSelects(
            addressDetailsInfo,
            ["selectCountry", "selectRegion", "companyLegalSelectCountry", "companyLegalSelectRegion"],
            [
                ".registration__current-country",
                ".registration__current-region",
                ".personal-cabinet__current-country-legal",
                ".personal-cabinet__current-region-legal",
            ],
            ["Страна", "Область", "Район", "Воєводство", "Повіт", "Федеральна земля"],
        );
    } else {
        addressDetailsInfo = getFormInfo(form, ["city", "city", "addresses"]);
        useGetFormSelects(
            addressDetailsInfo,
            ["selectCountry", "selectRegion"],
            [".registration__current-country", ".registration__current-region"],
            ["Страна", "Область", "Район", "Воєводство", "Повіт", "Федеральна земля"],
        );
    }

    await getDocumentsId(app, "user").then((res) => {
        res.forEach((doc) => {
            if (doc.data.email === data.email) {
                documentId = doc.id;
            }
        });
    });

    await useUpdateData(app, "user", documentId, addressDetailsInfo)
        .then((res) => {
            Notify.success("Дані успішно були оновлені");
            console.log(`дані оновлено`);
            useInputClear(getElement(".input__area", "all"));
        })
        .catch((err) => {
            Notify.failure(`Сталася помилка ${err}`);
            console.log(err);
        });
}
