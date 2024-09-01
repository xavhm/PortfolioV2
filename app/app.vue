<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHeadSafe({
  link: [
    { rel: 'icon', type: 'image/png', href: './avatar_midjourney_favicon.png', sizes: 'any' },
  ],
})
useSeoMeta({
  ogTitle: 'Xav_ | Frontend Development',
  description: 'Xav_ | Frontend Development',
  ogDescription: 'Xav_ | Frontend Development',
  ogImage: 'https://www.xavhm.foo/Xav_OGImage_optimized.jpg',
  twitterCard: 'summary_large_image',
})
</script>
