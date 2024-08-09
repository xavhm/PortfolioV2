<template>
  <section
    class="w-full mt-16 overflow-hidden group"
    aria-label="link to the projects gallery"
  >
    <div class="flex items-center justify-between mb-4">
      <h3 class="italic font-semibold">
        Works
      </h3>
      <p class="flex items-center gap-2 text-sm motion-safe:translate-x-full motion-safe:group-hover:translate-x-0 motion:safe:transition-all motion-safe:duration-300 motion-safe:ease-out">
        View all <Icon
          class="text-darkpurple dark:text-darkgray"
          name="lucide:arrow-right"
          size="16px"
        />
      </p>
    </div>
    <div class="relative rounded-md overflow-hidden">
      <NuxtLink
        title="View all works"
        tabindex="0"
        to="/works"
        class="w-full"
      >
        <NuxtPicture
          preload
          src="/midjourney_home.avif"
          quality="100"
          height="940"
          alt="home office by midjourney v5"
          placeholder
          class="sized"
        />
      </Nuxtlink>
    </div>
  </section>
</template>

<script setup lang='ts'>

</script>

<style lang="postcss">
  .sized {
    img {
      width: 100% !important;
    }
  }
</style>
