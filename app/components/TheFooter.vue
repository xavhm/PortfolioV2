<template>
  <footer class="flex items-center justify-between text-sm text-lightpurple dark:text-darkgray my-8">
    <p> &copy; {{ year }} Xavier Hernandez</p>
    <p>powered by Nuxt 3 💚</p>
  </footer>
</template>

<script setup lang="ts">
const date = new Date()
const year = date.getFullYear()
</script>
