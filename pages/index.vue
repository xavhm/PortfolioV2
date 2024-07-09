<template>
  <main class="text-sm md:text-base dark:text-lightgray mt-6">
    <p class="leading-6">
      <span class="inline-block pb-2">{{ $t('about.hello') }}</span><br>
      {{ $t('about.part1') }}
      <bold class="font-bold">
        {{ $t('about.product') }}
      </bold>
      {{ $t('about.and') }}
      <bold class="font-bold">
        {{ $t('about.mindset') }}
      </bold>
      {{ $t('about.part2') }}
      <bold class="font-bold">
        {{ $t('about.tech') }}
      </bold>.
      {{ $t('about.part3') }}
      <bold class="font-bold">
        {{ $t('about.part4') }}
      </bold>
      {{ $t('about.part5') }}
      <bold class="font-bold">
        {{ $t('about.part6') }}
      </bold>
      {{ $t('about.part7') }}
    </p>
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
  </main>
</template>
