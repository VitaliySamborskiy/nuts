import { getFirestore, doc, getDocs, setDoc, collection } from "firebase/firestore";

export async function useSetProduct(app, documentId, data) {
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
        priсe: data.priсe,
        text: data.text,
        title: data.title,
        weight: data.weight,
    });
}

export async function useGetFirestore(app, collectionName) {
    const db = getFirestore(app);
    let data = [];
    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    return data;
}
