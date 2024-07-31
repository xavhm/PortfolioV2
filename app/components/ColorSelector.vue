<template>
  <button
    type="button"
    class="slide_btn w-[26px] aspect-square"
    title="Color mode selector"
    arial-label="Display pages with dark mode"
    :aria-pressed="$colorMode.preference === 'light' ? false : true"
    @click="$colorMode.preference === 'light' ? $colorMode.preference = 'dark' : $colorMode.preference = 'light'"
  >
    <Icon
      class="motion-safe:transition-transform motion-safe:duration-500"
      :class="{ 'translate-y-[140%]': $colorMode.value === 'dark' }"
      style="color: #3b0764;"
      name="lucide:moon"
      size="16px"
    />
    <Icon
      class="absolute translate-y-[-140%] motion-safe:transition-transform motion-safe:duration-500"
      :class="{ 'translate-y-[0]': $colorMode.value === 'dark' }"
      style="color: var(--darkgray);"
      name="lucide:sun"
      size="16px"
    />
  </button>
</template>
