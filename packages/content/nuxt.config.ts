// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  routeRules: {
    '/': { prerender: true },
  },
  nitro: {
    output: {
      publicDir: '.output/public',
    },
  },

  compatibilityDate: '2024-12-25',
})
