<template>
  <section
    class="my-16"
    aria-label="my career path"
  >
    <div class="w-full flex items-start justify-between mb-6">
      <h3 class="font-semibold mb-6 gradient_text">
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
          name="lucide:file-down"
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
      <div class="flex flex-col items-start gap-1">
        <div class="border border-slate-200 dark:border-slate-600 p-1 rounded-md mb-2">
          <NuxtPicture
            :src="job.logo"
            quality="90"
            height="40"
            width="40"
            alt="Raccourci Agency Logo"
            placeholder
            :title="job.society"
          />
        </div>
        <p class="text-sm">
          {{ job.from }} - {{ job.to }}
        </p>
        <p class="text-sm">
          {{ job.location }}
        </p>
      </div>

      <div class="leading-6 text-sm flex flex-col items-start gap-1">
        <p class="font-semibold">
          {{ job.label }} @{{ job.society }}
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
