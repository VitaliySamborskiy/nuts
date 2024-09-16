import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

export function useGetImg(url, element) {
    const storage = getStorage();
    const fileRef = ref(storage, url);
    getDownloadURL(fileRef)
        .then((res) => {
            element.src = res;
        })
        .catch((err) => {
            console.log(err);
        });
}

export async function useSetImg(file) {
    let imageUrl = "";
    const storage = getStorage();
    const mountainRef = ref(storage, `/users_avatar/${file.name}`);
    try {
        const snapshot = await uploadBytes(mountainRef, file);
        imageUrl = await getDownloadURL(snapshot.ref);
        console.log(`File uploaded successfully. URL: ${imageUrl}`);
        return imageUrl;
    } catch (error) {
        console.error(`Error uploading file: ${error}`);
    }

    return imageUrl;
}
