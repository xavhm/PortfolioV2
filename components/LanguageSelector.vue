<template>
  <button
    type="button"
    class="btn"
    title="Language selector"
    arial-label="display content in french"
    :aria-pressed="locale === 'en' ? false : true"
    @click="locale === 'en' ? setLocale('fr') : setLocale('en')"
  >
    <div
      class="text-lg italic font-semibold motion-safe:transition-transform motion-safe:duration-500"
      :class="{ 'translate-y-[130%]': locale === 'fr' }"
      aria-hidden="true"
    >
      🇬🇧
    </div>
    <div
      class="absolute text-lg italic font-semibold translate-y-[-130%] motion-safe:transition-transform motion-safe:duration-500"
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
