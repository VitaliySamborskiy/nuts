export function usePhotoReplacement(elementImg, imgInput) {
    imgInput.addEventListener("input", () => {
        const fileReader = new FileReader();
        const imageUrl = imgInput.files[0];
        fileReader.readAsDataURL(imageUrl);
        fileReader.onload = () => {
            elementImg.src = fileReader.result;
        };
    });
}
