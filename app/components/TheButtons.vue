<template>
  <section
    aria-label="socials"
    class="flex items-center justify-start gap-2 mt-8"
  >
    <MailButton />
    <NuxtLink
      class="h-[34px] socials_btn text-sm"
      title="Learn more about me"
      tabindex="0"
      to="about"
    >
      Read More
      <Icon
        class="ml-2"
        :color="$colorMode.value === 'dark' ? '#FFF' : '#000'"
        name="lucide:circle-user-round"
        size="16px"
      />
    </NuxtLink>
  </section>
</template>
