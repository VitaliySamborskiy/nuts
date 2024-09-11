export function usePhotoReplacement(elementImg, imgInput) {
    const fileReader = new FileReader();
    const imageUrl = imgInput.files[0];
    fileReader.readAsDataURL(imageUrl);
    fileReader.onload = () => {
        elementImg.src = fileReader.result;
    };
}
