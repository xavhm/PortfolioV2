<template>
  <section
    class="flex flex-col justify-start gap-4"
    aria-label="profile description"
  >
    <div class="flex items-center gap-4">
      <NuxtImg
        preload
        src="/iatoon_avatar.jpg"
        format="avif"
        fit="cover"
        width="50"
        height="50"
        alt="avatar"
        class="rounded-full my-auto border border-lightpurple dark:border-lightpurple"
      />
      <div class="flex flex-col items-start justify-between">
        <h1 class="font-bold italic text-base text-lightpurple dark:text-darkgray">
          Xavier Hernandez
        </h1>
        <h2 class="flex items-center gap-1 text-sm text-lightpurple dark:text-darkgray">
          Frontend Engineer
        </h2>
      </div>
    </div>
  </section>
</template>
