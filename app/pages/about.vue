<template>
  <main class="text-zinc-950 dark:text-zinc-100 mt-6">
    <div class="relative rounded-md overflow-hidden my-12">
      <NuxtPicture
        preload
        src="/midjourney_home.avif"
        quality="100"
        height="940"
        alt="home office by midjourney v5"
        placeholder
        class="sized"
      />
    </div>
    <TheAboutContent />
  </main>
</template>

<style lang="postcss">
  .sized {
    img {
      width: 100% !important;
    }
  }
</style>
