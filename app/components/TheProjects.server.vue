<template>
  <section
    class="mt-10 md:mt-6"
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
const { projects } = useProjectsList()
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
