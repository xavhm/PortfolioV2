<template>
  <section
    class="w-full mt-16 relative rounded-md overflow-hidden"
    aria-label="projects gallery"
  >
    <NuxtLink
      title="View all works"
      tabindex="0"
      to="/works"
      class="w-full rounded-md group transition duration-1000 ease-out"
    >
      <NuxtPicture
        preload
        src="/erp_home.avif"
        quality="100"
        height="940"
        alt="dashboard screenshot"
        placeholder
        class="sized relative rounded-md"
      />
      <p class="absolute z-10 flex items-center text-sm text-darkpurple gap-2 top-2 right-2 lg:-translate-y-10 lg:group-hover:translate-y-0 motion-safe:transition-all motion-safe:duration-500">
        view all work <Icon
          style="color: var(--darkpurple);"
          name="lucide:arrow-right"
          size="16px"
        />
      </p>
    </NuxtLink>
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
