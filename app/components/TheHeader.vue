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
              :style="$colorMode.value === 'dark' ? 'color:#f1f5f9;' : 'color:#1f2937;'"
              name="i-lucide:home"
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
            :aria-pressed="$colorMode.value === 'light' ? false : true"
            @click="$colorMode.value === 'light' ? $colorMode.preference = 'dark' : $colorMode.preference = 'light'"
          >
            <Icon
              v-if="$colorMode.value === 'dark'"
              :style="$colorMode.value === 'dark' ? 'color:#f1f5f9;' : 'color:#1f2937;'"
              name="i-lucide:moon"
              size="18px"
            />
            <Icon
              v-else
              :style="$colorMode.value === 'dark' ? 'color:#f1f5f9;' : 'color:#1f2937;'"
              name="i-lucide:sun"
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
              :style="$colorMode.value === 'dark' ? 'color:#f1f5f9;' : 'color:#1f2937;'"
              name="i-lucide:menu"
              size="18px"
            />
          </button>
        </li>
      </ul>
    </nav>
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
  @apply h-10 w-10 bg-slate-50 dark:bg-slate-800 rounded-full shadow-md dark:shadow-slate-900 border border-slate-200 dark:border-slate-400 hover:border-slate-300 dark:hover:border-slate-500 grid place-items-center cursor-pointer motion-safe:transition-all motion-safe:duration-300 hover:motion-safe:scale-105
  focus-visible:outline focus-visible:outline-1 outline-offset-2 outline-violet-800 dark:outline-slate-400;
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
