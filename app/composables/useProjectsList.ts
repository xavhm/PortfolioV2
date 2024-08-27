export default function useProjectList() {
  type Project = {
    name: string
    id: string
    screenshot: string
    role: string
    stack: Array<string>
    url: string | null
    repository: string | null
    details: string
    description: string
    work: Array<string>
  }

  const projects: Array<Project> = [
    {
      name: 'Raccourci ERP',
      id: 'erp',
      screenshot: '/erp_screen.avif',
      role: 'Lead Developer',
      stack: ['Typescript', 'Vue3', 'Pinia', 'Tailwind'],
      url: null,
      repository: null,
      details: 'An internal ERP for catalog management and invoices.',
      description: 'Internal ERP application for managing the service catalog and creating invoices by the sales teams for the Raccourci agency.',
      work: ['Project architecture', 'Features development', 'Bug fixing', 'CI/CD Implementation', 'Testing'],
    },
    {
      name: 'Touristic Map',
      id: 'tmaps',
      screenshot: '/tmaps_screen.avif',
      role: 'Developer',
      stack: ['Rust', 'Typescript', 'Vue3', 'Tailwind', 'Shadcn-Vue'],
      url: 'https://www.touristicmaps.com/',
      repository: null,
      details: 'A fullstack project with Rust and Vue.',
      description: 'Fullstack project with a Rust API (Rocket) and MongoDB for the TouristicsMap application, which allows for the editing and management of configurations for displaying topographic maps.',
      work: ['Project architecture', 'Backend development', 'UI/UX Design', 'CI/CD Implementation', 'Testing'],
    },
    {
      name: 'youBOOK',
      id: 'youbook',
      screenshot: '/youbook_screen.avif',
      role: 'Developer',
      stack: ['Typescript', 'WebComponent', 'Nuxt2', 'Scss'],
      url: 'https://terres-de-seine.youbook.travel/fr',
      repository: null,
      details: 'An e-commerce platform for the tourism industry.',
      description: 'E-commerce platform for tourism professionals, to sell sport and touristic activites.',
      work: ['Prototyping', 'Bug Fixing', 'Web Components', 'Testing'],
    },
    {
      name: 'FairGUEST',
      id: 'fairguest',
      screenshot: '/fairguest_screen.avif',
      role: 'Developer',
      stack: ['Typescript', 'Vue2', 'Vue3', 'Pinia', 'Tailwind'],
      url: 'https://www.fairguest.com/',
      repository: null,
      details: 'An e-reputation management tool for tourism professionals.',
      description: 'FairGuest observes more than 20 review platforms worldwide and integrates a powerful, intuitive, and configurable search engine to help tourism professionals manage their online reputation',
      work: ['UI/UX Rework', 'Features development', 'Bug fixing', 'Transition from Vue2 to Vue3', 'Transition from VueX to Pinia'],
    },
    {
      name: 'RoadBOOK',
      id: 'rdbk',
      screenshot: '/roadbook_screen.avif',
      role: 'Developer',
      stack: ['Javascript', 'Vue2', 'Vue3', 'VueX', 'Scss'],
      url: 'https://roadbook.travel/',
      repository: null,
      details: 'Online tourism offices recommandations for travellers.',
      description: 'The recommendations from tourist offices are compiled into a personalized web application and sent to the traveler by email or SMS immediately after the exchange.',
      work: ['UI/UX Rework', 'Features development', 'Bug fixing', 'Transition from Vue2 to Vue3', 'Transition from VueX to Pinia'],
    },
  ]

  return { projects }
}