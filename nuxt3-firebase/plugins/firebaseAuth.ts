import { initializeApp } from "firebase/app";

export default defineNuxtPlugin ((nuxtApp) => {

    const config = useRuntimeConfig();
    
    const firebaseConfig = {
        apiKey: "AIzaSyCKpdXQNit0YUj0cOIGbJN7uQIAGDwk-6E",
    }
    
    const app = initializeApp(firebaseConfig);

    initUser();
    

    //console.log(app);
});