<template>
  <footer class="flex items-center justify-between text-xs text-lightpurple dark:text-darkgray my-8">
    <p> &copy; {{ year }} Xavier Hernandez</p>
    <p>Built with Nuxt 💚</p>
  </footer>
</template>

<script setup lang="ts">
const date = new Date()
const year = date.getFullYear()
</script>
