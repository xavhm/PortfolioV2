<template>
  <NuxtLink
    class="relative flex h-min overflow-hidden group cursor-pointer"
    :href="props.href"
    :target="props.target"
    :arial-label="`navigation vers la page ${props.label}`"
  >
    <span
      class="w-fit text-red-500 motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:translate-y-full"
    >
      {{ props.label }}
    </span>
    <span
      class="absolute text-blue-500 left-0 w-fit translate-y-[-100%] motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:translate-y-[0%]"
      aria-hidden="true"
    >
      {{ props.label }}
    </span>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { RouteRecordRaw } from '#vue-router';

const props = defineProps<{
  label: string;
  target?: string | undefined; // use for anchor only
  href?: RouteRecordRaw | undefined;
}>();
</script>
