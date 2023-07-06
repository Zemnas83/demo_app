import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: "AIzaSyCKpdXQNit0YUj0cOIGbJN7uQIAGDwk-6E",
  };

  const app = initializeApp(firebaseConfig);

  initUser();

  const auth = getAuth();

  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);
});
