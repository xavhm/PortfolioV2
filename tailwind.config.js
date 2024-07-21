module.exports = {
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lightgray: 'var(--lightgray)',
        darkgray: 'var(--darkgray)',
        lightpurple: 'var(--lightpurple)',
        mediumpurple: 'var(--mediumpurple)',
        darkpurple: 'var(--darkpurple)',
      },
    },
  },
  plugins: [],
}
