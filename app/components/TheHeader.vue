<template>
  <header class="w-full flex sm:flex-row items-center justify-between my-8">
    <nav>
      <ul class="flex items-center gap-4">
        <li>
          <NavItem
            class="outlined"
            label="home"
            route="/"
          />
        </li>
        <li>
          <NavItem
            class="outlined"
            label="works"
            route="/works"
          />
        </li>
        <li>
          <NavItem
            class="outlined"
            label="about"
            route="/about"
          />
        </li>
      </ul>
    </nav>
    <section
      class="flex items-center gap-2"
      aria-label="display settings"
    >
      <ColorSelector />
    </section>
  </header>
  <TheAvatar />
</template>
