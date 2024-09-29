import { v4 as uuidv4 } from "uuid";
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

export function useGetImg(url, element) {
    const storage = getStorage();
    const fileRef = ref(storage, url);
    getDownloadURL(fileRef)
        .then((res) => {
            element.src = res;
            element.setAttribute("loading", "lazy");
        })
        .catch((err) => {
            console.log(err);
        });
}

export async function useSetImg(file) {
    let imageUrl = "";
    const storage = getStorage();
    const mountainRef = ref(storage, `/users_avatar/${uniqueNamesImg(file.name)}`);
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

function uniqueNamesImg(imageName) {
    const uniqueName = uuidv4();
    const nameImg = imageName.split(".").pop();
    return `${uniqueName}.${nameImg}`;
}
