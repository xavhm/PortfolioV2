<template>
  <header class="fixed top-6 right-6 z-20 flex items-center mb-8">
    <nav>
      <ul class="flex items-center gap-2">
        <li
          class="nav_item"
          style="--delay: 1.5;"
        >
          <NuxtLink
            aria-label="Back to Home Page"
            class="nav_button"
            to="/"
          >
            <Icon
              :style="$colorMode.value === 'dark' ? 'color:black;' : 'color:red;'"
              name="lucide:house"
              size="16px"
            />
          </NuxtLink>
        </li>
        <li
          class="nav_item"
          style="--delay: 1;"
        >
          <button
            aria-label="Toggle Color mode"
            type="button"
            class="nav_button"
            :aria-pressed="$colorMode.preference === 'light' ? false : true"
            @click="$colorMode.preference === 'light' ? $colorMode.preference = 'dark' : $colorMode.preference = 'light'"
          >
            <Icon
              v-if="$colorMode.preference === 'dark'"
              :style="$colorMode.value === 'dark' ? 'color:black;' : 'color:red;'"
              name="lucide:moon"
              size="16px"
            />
            <Icon
              v-else
              :style="$colorMode.value === 'dark' ? 'color:black;' : 'color:red;'"
              name="lucide:sun"
              size="16px"
            />
          </button>
        </li>
        <li
          class="nav_item"
          style="--delay: 0.5;"
        >
          <button
            aria-label="Open Command Menu"
            type="button"
            class="nav_button"
            @click="isOpen = !isOpen"
          >
            <Icon
              :style="$colorMode.value === 'dark' ? 'color:black;' : 'color:red;'"
              name="lucide:menu"
              size="16px"
            />
          </button>
        </li>
      </ul>
    </nav>
    <!-- <section
      class="flex items-center gap-2"
      aria-label="display settings"
    >
      <ColorSelector />
    </section> -->
  </header>
  <UModal v-model="isOpen">
    <CommandPalette v-if="isOpen" />
  </UModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<style lang="postcss" scoped>
.nav_button {
  @apply h-10 w-10 bg-white rounded-full shadow grid place-items-center cursor-pointer motion-safe:transition-transform motion-safe:duration-300 hover:motion-safe:scale-105;
}

.nav_item {
  opacity: 0;
  transform: translateY(-100px);
  animation: entering .5s cubic-bezier(.23,1.21,.98,.99) forwards;
  animation-delay: calc(var(--delay, 1) * .3s);
}

@keyframes entering {
  to {
    transform: none;
    opacity: 1;
  }
}
</style>
