<template>
  <button
    type="button"
    class="relative flex items-center w-[26px] aspect-square overflow-hidden cursor-pointer border border-slate-300 dark:border-slate-800 rounded p-1"
    title="Color mode selector"
    arial-label="display pages with dark mode"
    :aria-pressed="$colorMode.preference === 'light' ? false : true"
    @click="$colorMode.preference === 'light' ? $colorMode.preference = 'dark' : $colorMode.preference = 'light'"
  >
    <Icon
      class="motion-safe:transition-transform motion-safe:duration-500"
      :class="{ 'translate-y-[130%]': $colorMode.value === 'dark' }"
      name="lucide:sun"
      color="#3b0764"
      size="20px"
    />
    <Icon
      class="absolute left-[3px] translate-y-[-130%] motion-safe:transition-transform motion-safe:duration-500"
      :class="{ 'translate-y-[0]': $colorMode.value === 'dark' }"
      name="lucide:moon"
      color="#fff"
      size="18px"
    />
  </button>
</template>
