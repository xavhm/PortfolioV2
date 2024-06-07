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
  modules: ['@nuxt/fonts', '@nuxtjs/color-mode', "@nuxt/eslint"],
  devtools: {
    enabled: true,
  },
  eslint: {
    config: {
      stylistic: true,
    }
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
      weights: [400, 500, 700, 900],
      styles: ['normal', 'italic'],
    },
  },
});