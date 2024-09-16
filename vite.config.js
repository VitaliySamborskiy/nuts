import { resolve } from "path";
import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
    plugins: [[Inspect()], [injectHTML()]],
    base: "/nuts/",
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                404: resolve(__dirname, "404.html"),
                catalogProducts: resolve(__dirname, "src/pages/catalog-products.html"),
                registration: resolve(__dirname, "src/pages/registration.html"),
                login: resolve(__dirname, "src/pages/login.html"),
                aboutCompany: resolve(__dirname, "src/pages/about-company.html"),
            },
        },
    },
});
