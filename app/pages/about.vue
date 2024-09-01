<template>
  <main class="text-slate-950 dark:text-slate-100 mb-16">
    <div class="relative rounded-md overflow-hidden mb-10 entering">
      <NuxtPicture
        preload
        src="/midjourney_home.avif"
        quality="100"
        height="540"
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
