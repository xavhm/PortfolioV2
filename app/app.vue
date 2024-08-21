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
  ogTitle: 'Xav_ | Frontend Web Development',
  description: 'Xav_ | Frontend Web Development',
  ogDescription: 'Xav_ | Frontend Web Development',
  ogImage: 'https://www.xavhm.foo/midjourney_home.avif',
  twitterCard: 'summary_large_image',
})
</script>
