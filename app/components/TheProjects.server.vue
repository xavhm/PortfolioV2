<template>
  <section
    class="mt-2"
    aria-label="projects gallery"
  >
    <article
      v-for="project in projects"
      :id="project.id"
      :key="project.name"
      class="mb-8"
    >
      <div class="flex items-center justify-between text-sm py-2">
        <h3 class="text-base font-semibold italic">
          {{ project.name }}
        </h3>
        <div class="flex item-center gap-2">
          <NuxtLink
            v-if="project.repository"
            class="socials_btn"
            title="Github"
            tabindex="0"
            :to="project.repository"
            target="_blank"
          >
            <Icon
              :color="$colorMode.value === 'dark' ? '#FFF' : '#3b0764'"
              name="lucide:github"
              size="16px"
            />
          </NuxtLink>
          <NuxtLink
            v-if="project.url"
            class="socials_btn"
            title="Visit"
            tabindex="0"
            :to="project.url"
            target="_blank"
          >
            <Icon
              :color="$colorMode.value === 'dark' ? '#FFF' : '#000'"
              name="lucide:external-link"
              size="16px"
            />
          </NuxtLink>
        </div>
      </div>
      <div class="relative rounded-md overflow-hidden">
        <NuxtPicture
          preload
          :src="project.screenshot"
          quality="100"
          height="960"
          :alt="`${project.name} project screenshot`"
          placeholder
          class="sized"
        />
      </div>
      <div class="text-sm py-2">
        <p class="mb-1">
          <span class="font-semibold">Role</span>: {{ project.role }}
        </p>
        <div class="flex flex-wrap items-center gap-2">
          <p class="font-semibold">
            Stack:
          </p>
          <div
            v-for="tech in project.stack"
            :key="tech"
            class="pill"
          >
            {{ tech }}
          </div>
        </div>
        <p class="leading-6 py-2">
          <span class="font-semibold">Pitch</span>: {{ project.description }}
        </p>
        <div class="flex flex-wrap items-center gap-2">
          <p class="font-semibold">
            Tasks:
          </p>
          <div
            v-for="bullet in project.work"
            :key="bullet"
          >
            <p class="pill">
              {{ bullet }}
            </p>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script setup lang='ts'>
type Project = {
  name: string
  id: string
  screenshot: string
  role: string
  stack: Array<string>
  url: string | null
  repository: string | null
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
    description: 'The recommendations from tourist offices are compiled into a personalized web application and sent to the traveler by email or SMS immediately after the exchange.',
    work: ['UI/UX Rework', 'Features development', 'Bug fixing', 'Transition from Vue2 to Vue3', 'Transition from VueX to Pinia'],
  },
]
</script>

<style scoped lang="postcss">
  .sized {
    img {
      width: 100% !important;
    }
  }

  .pill {
    @apply bg-white dark:bg-zinc-900 dark:text-zinc-100 rounded-xl border border-purple-300 dark:border-white px-2 text-sm;
  }
</style>
