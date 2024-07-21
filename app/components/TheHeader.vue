<template>
  <header class="w-full flex sm:flex-row items-start justify-between mt-4 md:mt-10">
    <section
      class="flex flex-col justify-start gap-4"
      aria-label="profile description"
    >
      <div class="flex items-center gap-4">
        <NuxtImg
          preload
          src="/iatoon_avatar.jpg"
          format="avif"
          width="40px"
          height="40px"
          alt="avatar"
          class="rounded-full aspect-square object-top my-auto border border-lightpurple dark:border-lightpurple"
        />
        <div class="flex flex-col items-center justify-between">
          <h2 class="font-bold text-lightpurple dark:text-lightgray">
            Xavier Hernandez
          </h2>
          <h3 class="text-lightpurple dark:text-lightgray">
            Frontend Engineer
          </h3>
        </div>
      </div>
    </section>
    <section
      class="flex items-center gap-2"
      aria-label="display settings"
    >
      <ColorSelector />
      <LanguageSelector />
    </section>
  </header>
  <SocialsContacts />
</template>
