export default function useCareerContent() {
  const jobs = [
    {
      id: 1, label: 'Frontend Developer', society: 'Raccourci Agency', url: 'https://www.raccourci.fr/', location: 'La Rochelle, France', from: 'Nov 2021', to: 'Now', logo: '/raccourci_logo.png',
      contents: [
        'I worked on features and user interfaces for multiple web applications, collaborating closely with designers, to translate prototypes into functional frontends.',
        'Additionally, I built and maintained a reusable components library, enabling consistent UI across several applications. I also implemented units and E2E test coverages, accessibility features and best practices like WCAG and ARIA, to create reliable and inclusive user experiences.',
      ],
    },
    {
      id: 2, label: 'Frontend Dev pro. contract', society: 'Openclassrooms', url: 'https://openclassrooms.com/', location: 'La Rochelle, France', from: 'Nov 2021', to: 'Feb 2023', logo: '/oc_logo.png',
      contents: [
        'A formation centered around web application development with JavaScript and React. I gained hands-on experience in developing responsive web applications, creating pixel-perfect interfaces from wireframes, using APIs, and structuring frontend projects.',
        'The program emphasized project-based learning and included mentorship from industry professionals.',
      ],
    },
    {
      id: 3, label: 'Web Development Bootcamp', society: 'Le Wagon', url: 'https://www.lewagon.com/', location: 'Bordeaux, France', from: 'April 2021', to: 'July 2021', logo: '/wagon_logo.png',
      contents: [
        'Le Wagon is a famous international bootcamp where I learned about programming fundamentals and building fullstack web applications. We worked with Ruby on Rails, JavaScript, HTML, CSS and SQL. The intensive curriculum emphasized real-world projects and team work.',
      ],
    },
    {
      id: 4, label: 'LiveOPS Manager', society: 'Winamax', url: 'https://www.winamax.fr/', location: 'London and Paris', from: 'Aug 2009', to: 'Sep 2019', logo: '/wina_logo.png',
      contents: [
        'I worked 10 years on developing a comprehensive offering and events strategy for the online poker French market leader, keeping players engaged with the brand.',
        'I collaborated with developers, designers, and marketers to deliver new gaming products and optimize metrics like participation rates, revenue, and retention.',
      ],
    },
  ]

  return { jobs }
}
