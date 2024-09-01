<template>
  <section
    class="my-10 md:my-6"
    aria-label="projects gallery"
  >
    <article
      v-for="project in projects"
      :id="project.id"
      :key="project.name"
      :aria-label="project.name"
      class="border-b border-dashed border-slate-200 dark:border-slate-700 pb-4 mb-8"
    >
      <div class="relative rounded-md overflow-hidden entering">
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
              :color="$colorMode.value === 'dark' ? '#FFF' : '#000'"
              name="lucide:github"
              size="16px"
            />
          </NuxtLink>
          <div
            v-else
            class="private_repo"
            title="Private Repository"
          >
            Proprietary Repo.
          </div>
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
      <div class="text-sm py-2">
        <p class="leading-6 pb-2">
          {{ project.description }}
        </p>
        <div class="flex flex-wrap items-center gap-2 mb-2">
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
        <p class="mb-2">
          <span class="font-semibold">Role</span>: {{ project.role }}
        </p>
        <div class="flex flex-wrap items-center gap-2 mb-2">
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
    @apply bg-white dark:bg-slate-700 dark:text-slate-100 rounded-md border border-dashed border-slate-300 dark:border-slate-600 px-2 text-sm;
  }

  .private_repo {
    @apply flex items-center text-xs p-1 bg-orange-50 dark:bg-slate-800 rounded-md border border border-orange-200 dark:border-orange-600/30;
  }
</style>
