import { getFirestore, doc, getDocs, getDoc, setDoc, collection } from "firebase/firestore";

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
