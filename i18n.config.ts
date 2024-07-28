export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      routes:{
        home: 'home',
        works: 'works',
        about: 'about'
      },
      color_selector: 'Color mode selector',
      language_selector: 'Language selector',
      contact: 'Contact me',
      copied: 'Email copied',
      email: 'Copy Email address',
      about: {
        hello: 'Hey 🖖,',
        part1: 'I am a frontend engineer with a ',
        product: 'product background ',
        and: 'and ',
        mindset: ' user-centric mindset.',
        part2: 'I work mainly with ',
        tech: 'Vue and React',
        part3: 'I have a strong interest in advanced rendering strategies, accessibility, performance optimization techniques, and ',
        part4: 'hexagonal / clean architecture',
        part5: 'principles in frontend applications. I also work on expending my ',
        part6: 'fullstack capabilities ',
        part7: 'with a specific focus on modern languagues like Go and Rust.',
      },
    },
    fr: {
      routes:{
        home: 'accueil',
        works: 'projets',
        about: 'profil'
      },
      color_selector: 'Sélection du mode d\'affichage',
      language_selector: 'Sélection de la langue',
      contact: 'Me Contacter',
      copied: 'Email copié',
      email: 'Copier adresse email',
      about: {
        hello: 'Hey 🖖,',
        part1: 'Je suis un spécialiste frontend, avec une forte ',
        product: 'expérience produit,',
        and: 'et une ',
        mindset: 'vision orientée client.',
        part2: 'Je travaille principalement avec ',
        tech: 'Vue et React',
        part3: 'J\'ai un fort intérêt pour les stratégies de rendu côté client, l\'optimisation des performances, l\'accessibilité et les principes de ',
        part4: 'clean / hexagonale architecture.',
        part5: 'Je devéloppe aussi mes',
        part6: 'compétences fullstack, ',
        part7: 'avec un focus sur des languages modernes comme Go et Rust.',
      },
    },
  },
}))
