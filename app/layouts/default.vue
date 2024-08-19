<template>
  <div class="w-full min-h-[100dvh] mx-auto max-w-2xl grid grid-rows-[min-content_auto_min-content] radial_gradient px-4 md:px-2">
    <TheHeader />
    <CommandModal />
    <slot />
    <TheFooter />
  </div>
</template>
