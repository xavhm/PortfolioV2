<template>
  <main class="text-sm md:text-base dark:text-lightgray mt-6">
    <p class="leading-6">
      <span class="inline-block pb-2">{{ $t('about.hello') }}</span><br>
      {{ $t('about.part1') }}
      <strong class="font-bold">
        {{ $t('about.product') }}
      </strong>
      {{ $t('about.and') }}
      <strong class="font-bold">
        {{ $t('about.mindset') }}
      </strong>
      {{ $t('about.part2') }}
      <strong class="font-bold">
        {{ $t('about.tech') }}
      </strong>.
      {{ $t('about.part3') }}
      <strong class="font-bold">
        {{ $t('about.part4') }}
      </strong>
      {{ $t('about.part5') }}
      <strong class="font-bold">
        {{ $t('about.part6') }}
      </strong>
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
