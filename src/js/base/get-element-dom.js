export function getElement(element, arr = null) {
    if (arr) {
        return document.querySelectorAll(element);
    } else {
        return document.querySelector(element);
    }
}
