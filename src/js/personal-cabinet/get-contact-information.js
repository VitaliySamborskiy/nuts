import { getFormInfo } from "../base/get-methods/get-form.js";
import { getDocumentsId, useUpdateData } from "../base/fire-base-functions/use-fire-store.js";
import { deleteImage, useSetImg } from "../base/fire-base-functions/use-img.js";
import { updateUserProfile } from "../base/autintificate.js";
import { useRenderUserInfo } from "../base/renders-methods/header-render-user.js";
import { getElement } from "../base/get-methods/get-element-dom.js";

export async function getContactInfoUpdate(form, data, app) {
    let contactInfo;
    let documentId;

    if (data.role.company) {
        contactInfo = getFormInfo(form, ["company", "contactPerson", "emailContact", "phone", "avatar"]);
    } else {
        contactInfo = getFormInfo(form, ["name", "emailContact", "phone", "avatar"]);
    }

    await getDocumentsId(app, "user").then((res) => {
        res.forEach((doc) => {
            if (doc.data.email === data.email) {
                documentId = doc.id;
            }
        });
    });

    await useSetImg(contactInfo.avatar)
        .then((res) => {
            contactInfo.avatar = res;
            deleteImage(data.avatar);
        })
        .catch((err) => {
            console.log(err);
            contactInfo.avatar = null;
        });

    await useUpdateData(app, "user", documentId, contactInfo)
        .then((res) => {})
        .catch((err) => {
            console.log(err);
        });

    const userUpdate = await updateUserProfile(app, {
        displayName: contactInfo.name,
        photoURL: contactInfo.avatar,
        phoneNumber: contactInfo.phone,
    });

    useRenderUserInfo(
        userUpdate,
        window.innerWidth >= 768
            ? getElement(".header__top-authentication-wrapper")
            : getElement(".burger__authentication"),
    );
}
