import { getFirestore, doc, getDocs, getDoc, setDoc, collection, updateDoc } from "firebase/firestore";

export async function useUpdateData(app, collectionName, documentId, newData) {
    const db = getFirestore(app);
    const ref = doc(db, collectionName, documentId);

    await updateDoc(ref, newData);
}

export async function useSetUserData(app, userID, dataObj) {
    const db = getFirestore(app);
    const saveObj = {};
    Object.keys(dataObj).forEach((key) => {
        if (dataObj[key] !== undefined) {
            saveObj[key] = dataObj[key];
        }
    });

    await setDoc(doc(db, "user", userID), saveObj, { merge: true });
}

export async function useGetFirestore(app, collectionName, documentId = null) {
    const db = getFirestore(app);
    let data = documentId ? undefined : [];
    if (documentId) {
        const docRef = doc(db, collectionName, documentId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            data = docSnap.data();
        }
    } else {
        const querySnapshot = await getDocs(collection(db, collectionName));
        querySnapshot.forEach((doc) => {
            data.push(doc.data());
        });
    }
    return data;
}

export async function getDocumentsId(app, collectionName) {
    const db = getFirestore(app);
    const collectionRef = collection(db, collectionName);

    try {
        const querySnapshot = await getDocs(collectionRef);
        return querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
        }));
    } catch (error) {
        console.error("Помилка при отриманні документів:", error);
    }
}

// name: dataObj.name,
// email: dataObj.email,
// phone: dataObj.phone,
// city: dataObj.city,
// addresses: dataObj.addresses,
// password: dataObj.password,
// verifyPassword: dataObj.verifyPassword,
// avatar: dataObj.avatar,
// requisites: dataObj.requisites,
// EDRPOUCode: dataObj.EDRPOUCode,
// companyLegalCity: dataObj.companyLegalCity,
// companyLegalAddress: dataObj.companyLegalAddress,
// companyLegalIndex: dataObj.companyLegalIndex,
// selectCountry: dataObj.selectCountry,
// selectRegion: dataObj.selectRegion,
// companyLegalSelectCountry: dataObj.companyLegalSelectCountry,
// companyLegalSelectRegion: dataObj.companyLegalSelectRegion,
// role: dataObj.role,

export async function useSetProduct(app, documentId, data) {
    const db = getFirestore(app);
    const productsRef = collection(db, "products");
    await setDoc(doc(productsRef, documentId), {
        action: data.action,
        art: data.art,
        cationPrice: data.cationPrice,
        energyValue: data.energyValue,
        expirationDate: data.expirationDate,
        imgUrl: data.imgUrl,
        ingredients: data.ingredients,
        list: data.list,
        newProduct: data.newProduct,
        nutsType: data.nutsType,
        packaging: data.packaging,
        price: data.price,
        text: data.text,
        title: data.title,
        weight: data.weight,
    });
}

export async function useSetNews(app, documentId, data) {
    const db = getFirestore(app);
    const productsRef = collection(db, "news");
    await setDoc(doc(productsRef, documentId), {
        date: data.date,
        mainTitle: data.mainTitle,
        url: data.url,
        summary: data.summary,
    });
}
