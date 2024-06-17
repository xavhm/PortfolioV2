<template>
  <header class="w-full flex flex-col sm:flex-row items-start justify-between mt-10">
    <section
      class="flex items-start gap-4 mb-4"
      aria-label="description profil"
    >
      <NuxtImg
        preload
        src="/profil_black_and_white.jpeg"
        format="webp"
        width="40px"
        height="40px"
        alt="profil"
        class="rounded-full aspect-square object-top my-auto"
      />
      <div class="flex flex-col items-start justify-between">
        <h2 class="font-bold text-sky-900">
          Xavier Hernandez
        </h2>
        <h3>Frontend Engineer</h3>
        <div class="flex items-center gap-2">
          <ColorSelector />
          <LanguageSelector />
        </div>
      </div>
    </section>
    <nav>
      <ul class="flex items-center gap-4">
        <li>
          <NavLink
            label="home"
            route="/"
          />
        </li>
        <li>
          <NavLink
            label="works"
            route="/works"
          />
        </li>
        <li>
          <NavLink
            label="ressources"
            route="/ressources"
          />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style></style>
