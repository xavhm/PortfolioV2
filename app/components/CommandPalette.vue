<script setup lang="ts">
const commandPaletteRef = ref()
const emits = defineEmits(['close'])

const users = [
  { id: 'home', label: 'Home', icon: 'i-heroicons-home', to: '/' },
  { id: 'works', label: 'Works', icon: 'i-heroicons-briefcase', to: 'works' },
  { id: 'about', label: 'About', icon: 'i-heroicons-user-circle', to: 'about' },
]

const actions = [
  { id: 'email', label: 'Copy Email', icon: 'i-heroicons-document-duplicate', copy: true },
  { id: 'resume', label: 'Get Resume', icon: 'i-heroicons-document-arrow-down', href: '/XavierHM-CV-EN.pdf' },
  { id: 'linkedin', label: 'LinkedIn', icon: 'i-heroicons-arrow-up-right', href: 'https://www.linkedin.com/in/xavhm/' },
  { id: 'github', label: 'Github', icon: 'i-heroicons-arrow-up-right', href: 'https://github.com/xavhm' },
  { id: 'x', label: 'X/Twitter', icon: 'i-heroicons-arrow-up-right', href: 'https://x.com/_xavhm' },
]

const groups = computed(() => [{ key: 'users', commands: users }, { key: 'actions', commands: actions }])

// @ts-expect-error unknown type for option param
function onSelect(option) {
  if (option.to) {
    navigateTo(option.to)
  }
  else if (option.href) {
    window.open(option.href, '_blank')
  }
  else if (option.copy) {
    navigator.clipboard.writeText('xhernan.martinez@gmail.com')
  }
  emits('close')
}
</script>

<template>
  <UCommandPalette
    ref="commandPaletteRef"
    :groups="groups"
    :autoselect="false"
    class="min-h-[350px] rounded"
    :empty-state="{ icon: 'i-heroicons-magnifying-glass-20-solid', label: 'No result.', queryLabel: 'No item found. Please try something else.' }"
    @update:model-value="onSelect"
  />
</template>
