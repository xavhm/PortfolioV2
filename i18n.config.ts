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
      color_selector: 'Color mode selector',
      language_selector: 'Language selector',
    },
    fr: {
      welcome: 'Bienvenue',
      content: 'Contenu',
      work: 'Projets',
      ressources: 'Références',
      color_selector: 'Sélection du mode d\'affichage',
      language_selector: 'Sélection de la langue',
    },
  },
}))
