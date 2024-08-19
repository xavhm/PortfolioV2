<script setup lang="ts">
const people = [
  { id: 1, label: 'Wade Cooper' },
  { id: 2, label: 'Arlene Mccoy' },
  { id: 3, label: 'Devon Webb' },
  { id: 4, label: 'Tom Cook' },
  { id: 5, label: 'Tanya Fox' },
  { id: 6, label: 'Hellen Schmidt' },
  { id: 7, label: 'Caroline Schultz' },
  { id: 8, label: 'Mason Heaney' },
  { id: 9, label: 'Claudie Smitham' },
  { id: 10, label: 'Emil Schaefer' },
]

const selected = ref([])
</script>

<template>
  <UCommandPalette
    v-model="selected"
    multiple
    nullable
    class="min-h-[390px] bg-lightgray dark:bg-lightpurple rounded"
    :groups="[{ key: 'people', commands: people }]"
    :empty-state="{ icon: 'i-heroicons-magnifying-glass-20-solid', label: 'No result.', queryLabel: 'No item found. Please try something else.' }"
  />
</template>
