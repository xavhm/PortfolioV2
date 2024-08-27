<template>
  <section
    class="mt-16"
    aria-label="my career path"
  >
    <div class="w-full flex items-start justify-between mb-6">
      <h3 class="font-semibold mb-6 gradient_text">
        Career
      </h3>
      <NuxtLink
        class="h-[34px] socials_btn text-sm"
        title="Download resume"
        tabindex="0"
        to="/XavierHM-CV-EN.pdf"
        target="_blank"
      >
        Get Resume
        <Icon
          class="ml-2"
          :color="$colorMode.value === 'dark' ? '#FFF' : '#000'"
          name="lucide:file-down"
          size="16px"
        />
      </NuxtLink>
    </div>
    <article
      v-for="job in jobs"
      :key="job.id"
      class="w-full grid sm:grid-cols-[200px_1fr] gap-2 mb-10"
    >
      <div class="flex flex-col items-start gap-1">
        <div class="border border-slate-200 dark:border-slate-600 p-1 rounded-md mb-2">
          <NuxtPicture
            :src="job.logo"
            quality="90"
            height="40"
            width="40"
            alt="Raccourci Agency Logo"
            placeholder
            :title="job.society"
          />
        </div>
        <p class="text-sm">
          {{ job.from }} - {{ job.to }}
        </p>
        <p class="text-sm">
          {{ job.location }}
        </p>
      </div>

      <div class="leading-6 text-sm flex flex-col items-start gap-1">
        <p class="font-semibold">
          {{ job.label }} @{{ job.society }}
        </p>
        <p
          v-for="(content, index) in job.contents"
          :key="index"
        >
          {{ content }}
        </p>
      </div>
    </article>
  </section>
</template>

<script setup lang='ts'>
const jobs = [
  {
    id: 1, label: 'Frontend Engineer', society: 'Raccourci Agency', location: 'La Rochelle, France', from: 'Nov 2021', to: 'Now', logo: '/raccourci_logo.png',
    contents: [
      'I developed features and user interfaces for multiple web applications, collaborating closely with designers, to translate prototypes into functional, pixel-perfect frontends.',
      'Additionally, I built and maintained a reusable component library, enabling consistent UI across several applications and streamlining developer workflows. I also implemented accessibility features and best practices like WCAG and ARIA, to create inclusive user experiences.',
    ],
  },
  {
    id: 2, label: 'Frontend Dev pro. contract', society: 'Openclassrooms', location: 'La Rochelle, France', from: 'Nov 2021', to: 'Feb 2023', logo: '/oc_logo.png',
    contents: [
      'A formation centered around web application development with JavaScript and React. I gained hands-on experience in developing responsive web applications, creating pixel-perfect interfaces from wireframes, using APIs, and structuring frontend projects.',
      'The program emphasized project-based learning and included mentorship from industry professionals.',
    ],
  },
  {
    id: 3, label: 'Web Development Bootcamp', society: 'Le Wagon', location: 'Bordeaux, France', from: 'April 2021', to: 'July 2021', logo: '/wagon_logo.png',
    contents: [
      'Le Wagon is a famous international bootcamp where I learned about programming fundamentals and building fullstack web applications. We worked with Ruby on Rails, JavaScript, HTML, CSS and SQL. The intensive curriculum emphasized real-world projects and team work.',
    ],
  },
  {
    id: 4, label: 'LiveOPS Manager', society: 'Winamax', location: 'London and Paris', from: 'Aug 2009', to: 'Sep 2019', logo: '/wina_logo.png',
    contents: [
      'I worked 10 years on developing a comprehensive offering and events strategy for the online poker French market leader, keeping players engaged with the brand.',
      'I collaborated with developers, designers, and marketers to deliver new gaming products and optimize metrics like participation rates, revenue impact, and retention.',
    ],
  },
]
</script>
