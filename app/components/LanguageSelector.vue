<template>
  <button
    type="button"
    class="slide_btn px-2 h-[26px]"
    :title="$t('language_selector')"
    arial-label="display content in french"
    :aria-pressed="locale === 'en' ? false : true"
    @click="locale === 'en' ? setLocale('fr') : setLocale('en')"
  >
    <div
      class="text-sm text-mediumpurple dark:text-darkgray italic font-semibold motion-safe:transition-transform motion-safe:duration-500"
      :class="{ 'translate-y-[130%]': locale === 'fr' }"
      aria-hidden="true"
    >
      French
    </div>
    <div
      class="absolute text-sm text-mediumpurple dark:text-darkgray italic font-semibold translate-y-[-130%] motion-safe:transition-transform motion-safe:duration-500"
      :class="{ 'translate-y-[0]': locale === 'fr' }"
      aria-hidden="true"
    >
      English
    </div>
  </button>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
</script>
