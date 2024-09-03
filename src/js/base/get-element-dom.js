export function getElement(element, method = null) {
    switch (method) {
        case "all":
            return document.querySelectorAll(element);
        case "id":
            return document.getElementById(element);
        default:
            return document.querySelector(element);
    }
}
