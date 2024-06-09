<template>
  <header class="w-full flex items-start justify-between mt-10">
    <section
      class="flex items-start gap-4"
      aria-label="description profil"
    >
      <NuxtImg
        preload
        src="/DaftpunkPersoIA(1).jpg"
        format="webp"
        width="40px"
        height="40px"
        alt="profil"
        class="rounded-full aspect-square object-center my-auto"
      />
      <div class="flex flex-col items-start justify-between">
        <h2 class="font-bold">
          Xavier Hernandez
        </h2>
        <h3>Frontend Engineer</h3>
      </div>
    </section>
    <nav>
      <ul class="flex items-center gap-6">
        <li><NavLink label="home" /></li>
        <li><NavLink label="works" /></li>
        <li><NavLink label="ressources" /></li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style></style>
