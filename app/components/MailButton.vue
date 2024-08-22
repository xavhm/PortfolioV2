<template>
  <button
    type="button"
    class="slide_btn h-[34px] w-[130px] text-sm text-purple-300 px-4 dark:text-zinc-900"
    title="Copy Email address"
    arial-label="Copy Email address"
    :aria-pressed="isClicked"
    @click="copyEmail"
  >
    <div
      class="flex items-center font-semibold translate-y-[-140%] motion-safe:transition-transform motion-safe:duration-500"
      :class="{ 'translate-y-[0]': isClicked }"
      aria-hidden="true"
    >
      Copied!
      <span class="inline-block ml-2">
        <Icon
          class="relative top-[2px]"
          name="lucide:mail-open"
          :color="$colorMode.value === 'dark' ? '#FFF' : '#000'"
          size="16px"
        />
      </span>
    </div>
    <div
      class="flex items-center absolute motion-safe:transition-transform motion-safe:duration-500"
      :class="{ 'translate-y-[140%]': isClicked }"
    >
      Copy email
      <span class="inline-block ml-2">
        <Icon
          class="relative top-[2px]"
          name="lucide:copy-check"
          :color="$colorMode.value === 'dark' ? '#FFF' : '#000'"
          size="16px"
        />
      </span>
    </div>
  </button>
</template>

<script setup lang="ts">
const isClicked = ref<boolean>(false)

function copyEmail() {
  isClicked.value = true
  navigator.clipboard.writeText('xhernan.martinez@gmail.com')
  setTimeout(() => {
    isClicked.value = false
  }, 2500)
}
</script>
