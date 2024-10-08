import { initializeApp } from "firebase/app";

function fireBaseServiceActive() {
    const app = initializeApp({
        apiKey: "AIzaSyBTca0OO9iCUvryBSKXEcuj2zcsAIbSBUI",
        authDomain: "nuts-17b69.firebaseapp.com",
        projectId: "nuts-17b69",
        storageBucket: "nuts-17b69.appspot.com",
        messagingSenderId: "989266237693",
        appId: "1:989266237693:web:814a4d601b3db0dee74694",
    });

    function getApp() {
        return app;
    }

    return { getApp };
}

const fireBaseService = fireBaseServiceActive();
export { fireBaseService };
