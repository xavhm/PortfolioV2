<template>
  <section
    class="mt-10"
    aria-label="my career path"
  >
    <h3 class="italic font-semibold mb-6">
      Career
    </h3>
    <article class="flex flex-col items-start gap-2 mb-10">
      <div class="w-full flex flex-row-reverse items-center justify-between text-sm gap-4 mb-2">
        <div class="w-fit rounded-md overflow-hidden mb-2 career_logo">
          <NuxtPicture
            src="/raccourci_logo.png"
            quality="90"
            height="40"
            width="40"
            alt="Raccourci Agency Logo"
            placeholder
          />
        </div>
        <div class="flex flex-col items-start gap-1">
          <p class="font-semibold">
            Frontend Engineer @Raccourci Agency
          </p>
          <p>
            Nov 2021 - Now
          </p>
          <p>
            La Rochelle, France
          </p>
        </div>
      </div>
      <div class="leading-6 text-sm flex flex-col gap-1">
        <p>I developed features and user interfaces for multiple web applications, collaborating closely with designers, to translate prototypes into functional, pixel-perfect frontends.</p>
        <p>Additionally, I built and maintained a reusable component library, enabling consistent UI across several applications and streamlining developer workflows. I also implemented accessibility features and best practices like WCAG and ARIA, to create inclusive user experiences.</p>
      </div>
    </article>
    <article class="flex flex-col items-start gap-2 mb-10">
      <div class="w-full flex flex-row-reverse items-center justify-between text-sm gap-4 mb-2">
        <div class="w-fit rounded-md overflow-hidden mb-2 career_logo">
          <NuxtPicture
            src="/oc_logo.png"
            quality="90"
            height="40"
            width="40"
            alt="Openclassroom Logo"
            placeholder
          />
        </div>
        <div class="flex flex-col items-start gap-1">
          <p class="font-semibold">
            Frontend Development pro. contract @Openclassrooms
          </p>
          <p>
            Nov 2021 - Feb 2023
          </p>
          <p>
            La Rochelle, France
          </p>
        </div>
      </div>
      <div class="leading-6 text-sm">
        <p class="mb-2">
          A formation centered around web application development with JavaScript and React. I gained hands-on experience in developing responsive web applications, creating pixel-perfect interfaces from wireframes, using APIs, and structuring frontend projects.
        </p>
        <p>The program emphasized project-based learning and included mentorship from industry professionals.</p>
      </div>
    </article>
    <article class="flex flex-col items-start gap-2 mb-10">
      <div class="w-full flex flex-row-reverse items-center justify-between text-sm gap-4 mb-2">
        <div class="w-fit rounded-md overflow-hidden mb-2 career_logo">
          <NuxtPicture
            src="/wagon_logo.png"
            quality="90"
            height="40"
            width="40"
            alt="Le Wagon Logo"
            placeholder
          />
        </div>
        <div class="flex flex-col items-start gap-1">
          <p class="font-semibold">
            Web Development Bootcamp @LeWagon
          </p>
          <p>
            March 2021 - June 2021
          </p>
          <p>
            Bordeaux, France
          </p>
        </div>
      </div>
      <div class="leading-6 text-sm">
        <p>Le Wagon is a famous international bootcamp where I learned about programming fundamentals and building fullstack web applications. We worked with Ruby on Rails, JavaScript, HTML, CSS and SQL. The intensive curriculum emphasized real-world projects and team work.</p>
      </div>
    </article>
    <article class="flex flex-col items-start gap-2 mb-12">
      <div class="w-full flex flex-row-reverse items-center justify-between text-sm gap-4 mb-2">
        <div class="w-fit rounded-md overflow-hidden mb-2 career_logo">
          <NuxtPicture
            src="/wina_logo.png"
            quality="90"
            height="40"
            width="40"
            alt="Winamax Logo"
            placeholder
          />
        </div>
        <div class="flex flex-col items-start gap-1">
          <p class="font-semibold">
            LiveOPS Manager @Winamax
          </p>
          <p>
            August 2009 - Sep 2019
          </p>
          <p>
            London and Paris
          </p>
        </div>
      </div>
      <div class="leading-6 text-sm">
        <p>
          I worked 10 years on developing a comprehensive offering and events strategy for the online poker French market leader, keeping players engaged with the brand.
          I collaborated with developers, designers, and marketers to deliver new gaming products and optimize metrics like participation rates, revenue impact, and retention.
        </p>
      </div>
    </article>
  </section>
</template>

<script setup lang='ts'>

</script>

<style>

</style>
