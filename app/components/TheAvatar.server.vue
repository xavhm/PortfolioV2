<template>
  <section
    class="mt-10"
    aria-label="profile description"
  >
    <p class="w-fit rounded-full overflow-hidden mb-6">
      <NuxtPicture
        src="/avatar_midjourney_optimized.avif"
        quality="90"
        height="40"
        width="40"
        alt="Avatar"
        placeholder
        title="Xav Hernandez"
      />
    </p>
    <h1 class="w-fit text-xl font-semibold">
      Xavier Hernandez
    </h1>
    <h2 class="font-medium text-slate-500 dark:text-slate-400">
      Frontend developer
    </h2>
  </section>
</template>
