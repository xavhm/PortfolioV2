<template>
  <button
    type="button"
    class="relative flex items-center justify-center w-[26px] aspect-square overflow-hidden cursor-pointer border border-slate-300 rounded"
    arial-label="selecteur du mode de couleur"
    @click="locale === 'en' ? setLocale('fr') : setLocale('en')"
  >
    <p
      class="text italic font-semibold motion-safe:transition-transform motion-safe:duration-500"
      :class="{ 'motion-safe:translate-y-[130%]': locale === 'fr' }"
    >
      🇬🇧
    </p>
    <p
      class="absolute text italic font-semibold motion-safe:translate-y-[-130%] motion-safe:transition-transform motion-safe:duration-500"
      :class="{ 'motion-safe:translate-y-[0]': locale === 'fr' }"
    >
      🇫🇷
    </p>
  </button>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
</script>
