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
useSeoMeta({
  ogTitle: 'Xav\'s Portfolio',
  description: 'Xav\'s Portfolio - Frontend Development.',
  ogDescription: 'Xav\'s Portfolio - Frontend Development.',
  ogImage: 'https://www.xavhm.foo/midjourney_home.avif',
  twitterCard: 'summary_large_image',
})
</script>
