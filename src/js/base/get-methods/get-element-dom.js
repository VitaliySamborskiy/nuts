export function getElement(element, method = null, customElement = null) {
    switch (method) {
        case "all":
            return document.querySelectorAll(element);
        case "id":
            return document.getElementById(element);
        case "custom":
            return customElement.querySelector(element);
        case "customAll":
            return customElement.querySelectorAll(element);
        default:
            return document.querySelector(element);
    }
}
