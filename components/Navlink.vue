<template>
  <NuxtLink
    class="relative flex h-min overflow-hidden group cursor-pointer"
    :to="localePath(props.route)"
    :arial-label="`navigation vers la page ${props.label}`"
  >
    <span
      class="w-fit text-black motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:translate-y-full"
    >
      {{ props.label }}
    </span>
    <span
      class="absolute text-sky-900 left-0 w-fit translate-y-[-100%] motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:translate-y-[0%]"
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

const localePath = useLocalePath()
</script>
