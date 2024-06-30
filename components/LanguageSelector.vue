<template>
  <button
    type="button"
    class="relative flex items-center justify-center w-[26px] aspect-square overflow-hidden bg-gradient-to-t from-neutral-200 dark:from-darkpurple to-neutral-100 dark:to-darkpurple border border-neutral-300 dark:border-neutral-500 hover:border-neutral-400 dark:hover:border-neutral-400 shadow-inner dark:shadow-none shadow-violet-100 rounded cursor-pointer focus-visible:outline focus-visible:outline-1 outline-offset-1 outline-violet-600 dark:outline-neutral-400"
    title="Language selector"
    arial-label="display content in french"
    :aria-pressed="locale === 'en' ? false : true"
    @click="locale === 'en' ? setLocale('fr') : setLocale('en')"
  >
    <div
      class="text italic font-semibold motion-safe:transition-transform motion-safe:duration-500"
      :class="{ 'translate-y-[130%]': locale === 'fr' }"
      aria-hidden="true"
    >
      🇬🇧
    </div>
    <div
      class="absolute text italic font-semibold translate-y-[-130%] motion-safe:transition-transform motion-safe:duration-500"
      :class="{ 'translate-y-[0]': locale === 'fr' }"
      aria-hidden="true"
    >
      🇫🇷
    </div>
  </button>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
</script>
