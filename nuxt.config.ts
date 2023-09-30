// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:['@nuxtjs/tailwindcss'],
  runtimeConfig:{
    FIREBASE_API_KEY: process.env.FIREBASE_API_KEY,
    public:{
      FIREBASE_API_KEY:process.env.FIREBASE_API_KEY
    }
  }
})
