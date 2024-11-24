import { v4 as uuidv4 } from "uuid";
import { getStorage, ref, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";

export function useGetImg(url, element) {
    const observers = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const storage = getStorage();
                    const fileRef = ref(storage, url);
                    getDownloadURL(fileRef)
                        .then((res) => {
                            element.src = res;
                            observers.disconnect();
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            });
        },
        {
            rootMargin: "200px",
        },
    );

    observers.observe(element);
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

export function deleteImage(photoURL) {
    const storage = getStorage();
    const desertRef = ref(storage, photoURL);

    deleteObject(desertRef)
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
}
