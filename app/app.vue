<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHeadSafe({
  title: 'Xav - Portfolio',
  link: [
    { rel: 'icon', type: 'image/avif', href: 'favicon.avif' },
  ],
})
</script>
