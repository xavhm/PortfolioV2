export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      welcome: 'Welcome',
      content: 'Content',
      work: 'Work',
      ressources: 'Ressources',
    },
    fr: {
      welcome: 'Bienvenue',
      content: 'Contenu',
      work: 'Projets',
      ressources: 'Références',
    },
  },
}))
