<template>
  <section
    class="w-full mt-16"
    aria-label="links to the projects gallery"
  >
    <h3 class="font-semibold mb-6">
      Projects
    </h3>
    <NuxtLink
      v-for="project in projects"
      :key="project.id"
      :to="`projects#${project.id}`"
    >
      <article
        class="relative group border-b border-slate-200 dark:border-slate-600 py-1 pb-4 mb-2 cursor-pointer"
        :arial-label="`Learn more about ${project.name} project`"
      >
        <h3 class="font-semibold text-sm">
          {{ project.name }}
        </h3>
        <p class="text-sm">
          {{ project.details }}
        </p>

        <Icon
          class="absolute top-4 right-4 group-hover:motion-safe:translate-x-2 group-hover:motion-safe:scale-75 duration-300 ease-out"
          :color="$colorMode.value === 'dark' ? '#f1f5f9' : '#5b21b6'"
          name="lucide:arrow-right"
          size="16px"
        />

      </article>
    </NuxtLink>
  </section>
</template>

<script setup lang='ts'>
const { projects } = useProjectsList()
</script>

<style lang="postcss">

</style>
