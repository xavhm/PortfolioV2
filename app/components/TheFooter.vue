<template>
  <footer class="flex items-center justify-between text-xs text-purple-300 dark:text-zinc-100 my-8">
    <p> &copy; {{ year }} Xavier Hernandez</p>
    <p>Built with Nuxt 💚</p>
  </footer>
</template>

<script setup lang="ts">
const date = new Date()
const year = date.getFullYear()
</script>
