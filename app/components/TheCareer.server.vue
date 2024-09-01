<template>
  <section
    class="my-16"
    aria-label="my career path"
  >
    <div class="w-full flex items-start justify-between mb-6">
      <h3 class="font-semibold text-slate-500 dark:text-slate-400 mb-6">
        Career
      </h3>
      <NuxtLink
        class="h-[34px] socials_btn text-sm"
        title="Download resume"
        tabindex="0"
        to="/XavierHM-CV-EN.pdf"
        target="_blank"
      >
        Get Resume
        <Icon
          class="ml-2"
          :color="$colorMode.value === 'dark' ? '#FFF' : '#000'"
          name="i-lucide:file-down"
          size="16px"
        />
      </NuxtLink>
    </div>
    <article
      v-for="job in jobs"
      :key="job.id"
      class="w-full grid sm:grid-cols-[200px_1fr] gap-2 mb-10"
      :aria-label="`${job.label} at ${job.society}`"
    >
      <div class="text-sm flex flex-col items-start gap-1 leading-6">
        <p>
          {{ job.from }} - {{ job.to }}
        </p>
        <p class="italic">
          {{ job.location }}
        </p>
      </div>

      <div class="text-sm flex flex-col items-start gap-1 leading-6">
        <p class="font-medium">
          {{ job.label }}
          <span class="font-semibold cursor-pointer">
            <NuxtLink
              class="outline-none focus-visible:underline underline-offset-4 decoration-slate-800 dark:decoration-slate-400 focus-visible:outline-none"
              :to="job.url"
              target="_blank"
            >@{{ job.society }}
            </NuxtLink>
          </span>
        </p>
        <p
          v-for="(content, index) in job.contents"
          :key="index"
        >
          {{ content }}
        </p>
      </div>
    </article>
  </section>
</template>

<script setup lang='ts'>
import useCareerContent from '~/composables/useCareerContent'

const { jobs } = useCareerContent()
</script>
