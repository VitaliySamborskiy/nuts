import { getStorage, ref, getDownloadURL } from "firebase/storage";

export function useGetImg(url, element) {
    const storage = getStorage();
    const fileRef = ref(storage, url);
    getDownloadURL(fileRef).then((res) => {
        element.src = res;
    });
}

export function useGetImgCard(url) {
    const storage = getStorage();
    const fileRef = ref(storage, url);

    getDownloadURL(fileRef).then((res) => {
        return res;
    });
}
