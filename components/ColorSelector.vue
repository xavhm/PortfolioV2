<template>
  <button
    type="button"
    class="slide_btn p-1"
    :title="$t('color_selector')"
    arial-label="display pages with dark mode"
    :aria-pressed="$colorMode.preference === 'light' ? false : true"
    @click="$colorMode.preference === 'light' ? $colorMode.preference = 'dark' : $colorMode.preference = 'light'"
  >
    <Icon
      class="motion-safe:transition-transform motion-safe:duration-500"
      :class="{ 'translate-y-[140%]': $colorMode.value === 'dark' }"
      name="lucide:sun"
      :color="$colorMode.value === 'dark' ? '#FFF' : '#3b0764'"
      size="16px"
    />
    <Icon
      class="absolute translate-y-[-140%] motion-safe:transition-transform motion-safe:duration-500"
      :class="{ 'translate-y-[0]': $colorMode.value === 'dark' }"
      name="lucide:moon"
      :color="$colorMode.value === 'dark' ? '#FFF' : '#3b0764'"
      size="16px"
    />
  </button>
</template>
