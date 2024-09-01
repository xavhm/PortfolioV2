<template>
  <NuxtLink
    class="group cursor-pointer outline-none focus-visible:underline underline-offset-4 decoration-slate-800 dark:decoration-slate-400 focus-visible:outline-none"
    :to="props.route"
    target="_blank"
    :arial-label="`navigation to ${props.label} page`"
  >
    {{ props.label }} <span class="relative right-1 inline-block group-hover:motion-safe:transition-transform group-hover:motion-safe:scale-75 ease-out duration-150"><Icon
      :color="$colorMode.value === 'dark' ? '#f1f5f9' : '#5b21b6'"
      name="i-lucide:arrow-up-right"
      size="16px"
    /></span>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  route: string
}>()
</script>
