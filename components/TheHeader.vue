<template>
  <header class="w-full flex flex-col sm:flex-row items-start justify-between mt-10">
    <section
      class="flex items-start gap-4 mb-4"
      aria-label="profile description"
    >
      <NuxtImg
        preload
        src="/iatoon_avatar.jpg"
        format="avif"
        width="40px"
        height="40px"
        alt="avatar"
        class="rounded-full aspect-square object-top my-auto"
      />
      <div class="flex flex-col items-start justify-between">
        <h2 class="font-bold text-sky-900">
          Xavier Hernandez
        </h2>
        <h3>Frontend Engineer</h3>
      </div>
    </section>
    <section aria-label="display settings">
      <div class="flex items-center gap-2">
        <ColorSelector />
        <LanguageSelector />
      </div>
    </section>
    <nav>
      <ul class="flex items-center gap-4">
        <li>
          <NavItem
            label="home"
            route="/"
          />
        </li>
        <li>
          <NavItem
            label="works"
            route="/works"
          />
        </li>
        <li>
          <NavItem
            label="ressources"
            route="/ressources"
          />
        </li>
      </ul>
    </nav>
  </header>
</template>
