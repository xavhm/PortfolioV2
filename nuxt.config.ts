// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },

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
    '@nuxtjs/seo',
    '@nuxt/ui',
  ],

  devtools: {
    enabled: true,
  },

  nitro: {
    prerender: {
      autoSubfolderIndex: false,
    },
  },

  icon: {
    serverBundle: {
      collections: ['heroicons', 'lucide'],
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

  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },

  security: {
    nonce: true,
    headers: {
      contentSecurityPolicy: {
        'style-src': process.env.NODE_ENV === 'development'
          ? ['\'self\'', '\'unsafe-inline\'']
          : ['\'self\'', '\'unsafe-inline\'', 'nonce-{{nonce}}'],
        'script-src': process.env.NODE_ENV === 'development'
          ? ['\'self\'', '\'unsafe-inline\'']
          : ['\'self\'', '\'unsafe-inline\'', 'nonce-{{nonce}}'],
      },
    },
  },

  colorMode: {
    preference: 'light',
    fallback: 'light',
    classSuffix: '',
  },

  fonts: {
    defaults: {
      weights: [300, 301, 400, 401, 500, 501, 700, 701, 900],
      styles: ['normal', 'italic'],
    },
  },

  site: {
    url: 'https://www.xavhm.foo',
    name: 'Xav_ | Frontend Development',
    description: 'Xav_ | Frontend Development',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },

  ogImage: {
    enabled: false,
  },

  compatibilityDate: '2024-07-21',
})
