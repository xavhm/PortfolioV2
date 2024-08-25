<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHeadSafe({
  link: [
    { rel: 'icon', type: 'image/png', href: './favicon-32x32.png', sizes: 'any' },
  ],
})
useSeoMeta({
  ogTitle: 'Xav_ Web Development',
  description: 'Xav_ Web Development',
  ogDescription: 'Xav_ Web Development',
  ogImage: 'https://www.xavhm.foo/midjourney_home.avif',
  twitterCard: 'summary_large_image',
})
</script>
