// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  modules: ['@nuxt/fonts', '@nuxtjs/color-mode', '@nuxt/eslint', '@nuxt/image'],
  devtools: {
    enabled: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  experimental: {
    typedPages: true,
    viewTransition: true,
  },
  colorMode: {
    classSuffix: '',
  },
  fonts: {
    defaults: {
      weights: [300, 301, 400, 401, 500, 501, 700, 701, 900],
      styles: ['normal', 'italic'],
    },
  },
})
