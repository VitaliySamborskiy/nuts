import { resolve } from "path";
import { defineConfig } from "vite";
import Inspect from "vite-plugin-inspect";
import injectHTML from "vite-plugin-html-inject";

export default defineConfig({
    plugins: [[Inspect()], [injectHTML()]],
    base: "/nuts/",
    resolve: {
        alias: {

        }
    },
    build: {
        rollupOptions: {
            input: {

            }
        }
    }
})