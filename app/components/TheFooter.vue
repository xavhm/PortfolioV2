<template>
  <footer class="flex flex-col items-center justify-between text-xs my-8">
    <div class="w-full flex items-center justify-between">
      <p> &copy; {{ year }} Xavier Hernandez</p>
      <p>built with nuxt 💚</p>
    </div>
    <div class="w-full flex item-center justify-between my-2">
      <div class="flex items-center gap-4">
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
      <p class="text-slate-500 dark:text-slate-400">
        Out of complexity, find simplicity.
        <Icon
          class="h-0 w-0 opacity-0"
          aria-hidden="true"
          :color="$colorMode.value === 'dark' ? '#f1f5f9' : '#5b21b6'"
          name="i-lucide:home"
          size="0px"
        />
        <Icon
          class="h-0 w-0 opacity-0"
          aria-hidden="true"
          :color="$colorMode.value === 'dark' ? '#f1f5f9' : '#5b21b6'"
          name="i-lucide:moon"
          size="0px"
        />
        <Icon
          class="h-0 w-0 opacity-0"
          aria-hidden="true"
          :color="$colorMode.value === 'dark' ? '#f1f5f9' : '#5b21b6'"
          name="i-lucide:briefcase-business"
          size="0px"
        />
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const date = new Date()
const year = date.getFullYear()
</script>
