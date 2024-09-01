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
  ogTitle: 'Xav_ | Frontend Development',
  description: 'Xav_ | Frontend Development',
  ogDescription: 'Xav_ | Frontend Development',
  ogImage: 'https://www.xavhm.foo/midjourney_home.avif',
  twitterCard: 'summary_large_image',
})
</script>
