// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

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

  modules: [
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/icon',
    'nuxt-security',
  ],

  devtools: {
    enabled: true,
  },

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  experimental: {
    componentIslands: true,
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

  compatibilityDate: '2024-07-21',
})
