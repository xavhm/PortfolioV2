<template>
  <footer class="flex flex-col items-center justify-between text-xs text-slate-900 dark:text-slate-100 my-8">
    <div class="w-full flex items-center justify-between">
      <p> &copy; {{ year }} Xavier Hernandez</p>
      <p>built with nuxt 💚</p>
    </div>
    <div class="w-full flex item-center justify-center gap-4 my-2">
      <NavItem
        label="github"
        route="https://github.com/xavhm"
      />
      <NavItem
        label="linkedin"
        route="https://www.linkedin.com/in/xavhm/"
      />
      <NavItem
        label="x/twitter"
        route="https://x.com/_xavhm"
      />
    </div>
  </footer>
</template>

<script setup lang="ts">
const date = new Date()
const year = date.getFullYear()
</script>
