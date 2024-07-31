<template>
  <section
    class="flex flex-col justify-start gap-4 my-8"
    aria-label="profile description"
  >
    <div class="flex items-center gap-4">
      <NuxtImg
        preload
        src="/iatoon_avatar.jpg"
        format="avif"
        width="50px"
        height="50px"
        alt="avatar"
        class="rounded-full aspect-square object-top my-auto border border-lightpurple dark:border-lightpurple"
      />
      <div class="flex flex-col items-start justify-between">
        <h2 class="font-bold text-base text-lightpurple dark:text-darkgray">
          Xavier Hernandez
        </h2>
        <h3 class="flex items-center gap-1 text-sm text-lightpurple dark:text-darkgray">
          Frontend Engineer
          <span>
            <NuxtLink
              title="Raccourci Agency"
              to="https://www.raccourci.fr/"
              target="_blank"
              class="px-1 hover:text-darkpurple dark:hover:text-darkgray outlined"
            >@RaccourciAgency
            </NuxtLink>
          </span>
        </h3>
      </div>
    </div>
  </section>
</template>
