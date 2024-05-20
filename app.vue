<template>
  <div>
    <h1 class="flex justify-center test">Test</h1>
    <SVGSignature />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
import SVGSignature from './components/SVGSignature.vue';
</script>

<style lang="postcss" scoped>
.test {
  @apply bg-red-500 text-2xl;
}
</style>
