// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-gtag', 'nuxt-schema-org'], 
  devtools: { enabled: true },
  site: {
    url: 'https://drew.lol',
    name: 'Drew',
  }
})
