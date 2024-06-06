// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //@ts-ignore
  css: ['@/assets/css/main.postcss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    strict: true,
    typeCheck: true,
  },
  modules: ['@nuxt/fonts', '@nuxtjs/color-mode'],
  colorMode: {
    classSuffix: '',
  },
  fonts: {
    defaults: {
      weights: [400, 500, 700, 900],
      styles: ['normal', 'italic'],
    },
  },
});
