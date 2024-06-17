<template>
  <button
    type="button"
    class="relative flex justify-center w-[26px] overflow-hidden cursor-pointer border border-slate-300 rounded p-1"
    arial-label="selecteur du mode de couleur"
    @click="locale === 'en' ? setLocale('fr') : setLocale('en')"
  >
    <p
      class="text-xs italic font-semibold motion-safe:transition-transform motion-safe:duration-500"
      :class="{ 'motion-safe:translate-y-[130%]': locale === 'fr' }"
    >
      EN
    </p>
    <p
      class="absolute left-1 text-xs italic font-semibold motion-safe:translate-y-[-130%] motion-safe:transition-transform motion-safe:duration-500"
      :class="{ 'motion-safe:translate-y-[0]': locale === 'fr' }"
    >
      FR
    </p>
  </button>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
</script>
