import { initializeApp } from "firebase/app";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig();
    const firebaseConfig = {
        apiKey: config.public.FIREBASE_API_KEY
      };
    const app = initializeApp(firebaseConfig);
    console.log(app)
  })
  