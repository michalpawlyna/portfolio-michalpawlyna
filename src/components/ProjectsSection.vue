<script setup>
import vueLogo from '../assets/vue.svg'
import flutterLogo from '../assets/flutter.svg'
import figmaLogo from '../assets/figma.svg'
import project1 from '../assets/project1.jpg'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.jpg'


const projects = [
  {
    title: 'Bike Rental App',
    description:
      'A mobile app mockup designed in Figma, featuring 50+ screens including login/register, map, transactions, and help sections. The project follows a minimalist style with a clean black and white color palette. This project significantly expanded my Figma skills and overall UI/UX design experience.',
    image: project1,
    tags: ['Figma', 'UI/UX Design', 'Mobile App'],
    link: 'https://www.figma.com/design/Y5mNxxacD1z0wadAMuSArM/Projekt-3?node-id=476-726&t=HwRwU64hyaJRQ5m7-0',
  },
  {
    title: 'Fantasy Premier League App',
    description:
      'A web application built around my passion for Premier League. Features statistics, interactive graphs, API integrations, and a Supabase backend. One of my first larger web projects - a great learning experience in working with external APIs and database connections.',
    image: project2,
    tags: ['Nuxt', 'FPL API', 'Supabase'],
    link: 'https://github.com/michalpawlyna/fpl-app',
  },
  {
    title: 'Flutter Map App',
    description:
      'My first mobile app and also Final Year project. Built with Flutter, it features OpenStreetMap integration, real-time GPS tracking, route planning, an achievements system, and Google Sign-In powered by Firebase. A deep dive into mobile development and location-based services.',
    image: project3,
    tags: ['Flutter', 'Mobile App', 'Firebase', 'OpenStreetMap'],
    link: 'https://github.com/michalpawlyna/flutter_map_app',
  },
  {
  title: 'Portfolio Website',
  description:
    'Designed to showcase my projects and make it easy to get in touch. Features a minimalistic, dark premium aesthetic built with Vue 3 and Tailwind CSS, with some UI components from Vue Bits.',
  image: project4,
  tags: ['Vue 3', 'Tailwind CSS', 'Cloudflare Hosting', 'Vue Bits'],
  link: '',
  },
  {
    title: 'Essence App',
    description:
      'Mobile gym app. Still in progress.',
    image: project5,
    tags: ['React Native', 'Expo', 'Firebase',],
    link: '',
  },
]
</script>

<template>
  <section id="projects" class="relative w-full bg-neutral-950 py-20 px-4 sm:px-6 lg:px-8">
    <div class="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-neutral-950/95 to-transparent pointer-events-none" />

    <div class="relative z-10 mx-auto max-w-7xl">
      <div class="mb-12 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-neutral-500">projects</p>
        <h2 class="mt-4 text-3xl font-bold text-neutral-50 sm:text-4xl">
          Things I've Built
        </h2>
        <p class="mx-auto mt-4 max-w-2xl text-sm text-neutral-400 sm:text-base">
          Built during studies and in my spare time, each project taught me something new.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article
          v-for="project in projects"
          :key="project.title"
          class="group relative min-h-full overflow-hidden rounded-[28px] border border-neutral-800/70 bg-neutral-900/60 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 hover:bg-neutral-900/80"
        >
          <div class="relative overflow-hidden bg-neutral-950/90 aspect-video">
            <img
              :src="project.image"
              :alt="project.title"
              class="block h-full w-full object-cover"
            />
          </div>

          <div class="space-y-4 p-6 sm:p-7">
            <div class="flex items-center justify-between gap-4">
              <h3 class="text-xl font-semibold text-neutral-50">
                {{ project.title }}
              </h3>

              <a
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-700 bg-neutral-950 text-neutral-50 transition-all duration-300 hover:border-neutral-500 hover:text-neutral-100"
                aria-label="View project repository"
              >
                <svg
                  class="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M4 12h14" />
                  <path d="M15 6l6 6-6 6" />
                </svg>
              </a>
            </div>

            <p class="text-sm leading-6 text-neutral-400">
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-full border border-neutral-800/80 bg-neutral-950/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-neutral-400"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
article {
  min-height: 100%;
}

article::before {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.06), transparent 30%);
}
</style>