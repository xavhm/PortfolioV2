<template>
  <NuxtLink
    class="relative flex h-min overflow-hidden group cursor-pointer px-1"
    :to="props.route"
    :arial-label="`navigation to ${props.label} page`"
  >
    <span
      class="w-fit text-sm text-mediumpurple dark:text-lightgray motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:translate-y-full"
    >
      {{ props.label }}
    </span>
    <span
      class="absolute text-sm text-darkpurple dark:text-darkgray left-0 w-fit translate-y-[-100%] motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:translate-y-[0%]"
      aria-hidden="true"
    >
      {{ props.label }}
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  label: string
  route: string
}>()
</script>
