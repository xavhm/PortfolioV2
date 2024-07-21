<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHeadSafe({
  link: [
    { rel: 'icon', type: 'image/avif', href: 'favicon.avif' },
  ],
})
</script>
