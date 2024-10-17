export function setProduct(product) {
    localStorage.setItem("productData", JSON.stringify(product));
}

export function getProduct() {
    const storedProduct = localStorage.getItem("productData");
    return storedProduct ? JSON.parse(storedProduct) : null;
}
