<template>
  <section
    class="mt-16"
    aria-label="my tech stack"
  >
    <h3 class="font-semibold text-slate-500 dark:text-slate-400 mb-6">
      Tech Stack
    </h3>
    <div class="flex items-center justify-center gap-2 flex-wrap">
      <article
        v-for="logo in logos"
        :key="logo.id"
        class="logo p-2"
        :title="logo.label"
      >
        <component
          :is="logo.component"
          aria-hidden="true"
        />
      </article>
    </div>
  </section>
</template>

<script setup lang='ts'>
import CloudflareLogo from '@/components/svg/CloudflareLogo.vue'
import PlaywrightLogo from '@/components/svg/PlaywrightLogo.vue'
import FigmaLogo from '@/components/svg/FigmaLogo.vue'
import PostgreSQLogo from '@/components/svg/PostgreSQLogo.vue'
import TypescriptLogo from '@/components/svg/TypescriptLogo.vue'
import NodeLogo from '@/components/svg/NodeLogo.vue'
import ViteLogo from '@/components/svg/ViteLogo.vue'
import TailwindLogo from '@/components/svg/TailwindLogo.vue'
import ScssLogo from '@/components/svg/ScssLogo.vue'
import VueLogo from '@/components/svg/VueLogo.vue'
import NuxtLogo from '@/components/svg/NuxtLogo.vue'
import ReactLogo from '@/components/svg/ReactLogo.vue'
import WebcomponentsLogo from '@/components/svg/WebcomponentsLogo.vue'
import VitestLogo from '@/components/svg/VitestLogo.vue'
import StorybookLogo from '@/components/svg/StorybookLogo.vue'
import DockerLogo from '@/components/svg/DockerLogo.vue'

const logos = [
  { id: 1, label: 'Typescript', component: TypescriptLogo },
  { id: 2, label: 'NodeJS', component: NodeLogo },
  { id: 3, label: 'Vite', component: ViteLogo },
  { id: 4, label: 'TailwindCSS', component: TailwindLogo },
  { id: 5, label: 'Sass', component: ScssLogo },
  { id: 6, label: 'Vue', component: VueLogo },
  { id: 7, label: 'Nuxt', component: NuxtLogo },
  { id: 8, label: 'React', component: ReactLogo },
  { id: 9, label: 'Web Components', component: WebcomponentsLogo },
  { id: 17, label: 'PostgreSQL', component: PostgreSQLogo },
  { id: 10, label: 'Vitest', component: VitestLogo },
  { id: 11, label: 'Playwright', component: PlaywrightLogo },
  { id: 12, label: 'Storybook', component: StorybookLogo },
  { id: 13, label: 'Docker', component: DockerLogo },
  { id: 14, label: 'Cloudflare', component: CloudflareLogo },
  { id: 15, label: 'Figma', component: FigmaLogo },
]
</script>

<style>

</style>
