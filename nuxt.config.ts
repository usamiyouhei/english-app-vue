// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devServer: {
    port: 3002
  },
  devtools: { enabled: true },
  srcDir: 'src/',
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/main.css'],
  plugins: ['~/plugins/touchEvents.ts'],

})
