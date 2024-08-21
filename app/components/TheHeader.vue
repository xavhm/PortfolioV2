<template>
  <header class="fixed top-6 right-6 z-20 flex items-center mb-8">
    <nav>
      <ul class="flex items-center gap-2">
        <li
          v-if="isNavigating"
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
              size="18px"
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
              size="18px"
            />
            <Icon
              v-else
              :style="$colorMode.value === 'dark' ? 'color:black;' : 'color:red;'"
              name="lucide:sun"
              size="18px"
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
              size="18px"
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
    <CommandPalette
      v-if="isOpen"
      @close="isOpen = false"
    />
  </UModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const router = useRouter()
const isOpen = ref(false)
const isNavigating = computed(() => router.currentRoute.value.name !== 'index')
</script>

<style lang="postcss" scoped>
.nav_button {
  @apply h-10 w-10 bg-white rounded-full shadow grid place-items-center cursor-pointer motion-safe:transition-all motion-safe:duration-300 hover:motion-safe:scale-105
  focus-visible:outline focus-visible:outline-2 outline-offset-2 outline-lightpurple dark:outline-white hover:drop-shadow-xl;
}

.nav_item {
  opacity: 0;
  transform: scale(0.4);
  animation: entering .7s cubic-bezier(.23,1.21,.98,.99) forwards;
  animation-delay: calc(var(--delay, 1) * .3s);
}

@keyframes entering {
  to {
    transform: none;
    opacity: 1;
  }
}
</style>
