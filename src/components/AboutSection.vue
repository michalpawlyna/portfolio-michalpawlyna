<script setup>
import { ref } from 'vue'
import pfpImage from '../assets/pfp.jpg'



const aboutData = {
  description: `Hi, I'm Michał Pawłyna - a Computer Science graduate with an Engineering degree. 
  Throughout my studies, internships, and personal projects, I've worked on web and mobile applications 
  while also exploring robotics and cryptology. I'm particularly interested in UI/UX design, 
  but I'm open to exploring different areas of technology. Whether it's software development, design, testing, 
  data, automation, or another technical field, I enjoy solving problems, learning new skills, and taking on 
  new challenges. I'm currently looking for my first full-time opportunity where I can contribute, grow, and 
  gain valuable industry experience.`,
  image: pfpImage,
  highlights: [
    'Computer Science graduate',
    'Full-stack development',
    'UI/UX focused',
    'Mobile & Web Developer'
  ]
}
</script>

<template>
  <section id="about" class="relative w-full bg-neutral-950 py-20 px-4 sm:px-6 lg:px-8">
    <!-- Background elements -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-0 left-0 w-96 h-96 bg-neutral-800/5 rounded-full blur-3xl" />
      <div class="absolute bottom-0 right-0 w-80 h-80 bg-neutral-700/5 rounded-full blur-3xl" />
    </div>

    <div class="relative z-10 mx-auto max-w-7xl">
      <div class="mb-12 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-neutral-500">about me</p>
        <h2 class="mt-4 text-3xl sm:text-4xl font-bold text-neutral-50">Get to know me better</h2>
      </div>

      <!-- Desktop Layout: Image Right, Text Left -->
      <div class="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
        <!-- Text Content -->
        <div class="space-y-6">
          <div class="space-y-4">
            <p class="text-lg leading-relaxed text-neutral-300">
              {{ aboutData.description.split('\n\n')[0] }}
            </p>
            <p class="text-lg leading-relaxed text-neutral-300">
              {{ aboutData.description.split('\n\n')[1] }}
            </p>
            <p class="text-lg leading-relaxed text-neutral-300">
              {{ aboutData.description.split('\n\n')[2] }}
            </p>
          </div>

          <!-- Highlights -->
          <div class="grid grid-cols-2 gap-4 pt-6">
            <div
              v-for="highlight in aboutData.highlights"
              :key="highlight"
              class="flex items-center gap-3 text-neutral-400"
            >
              <div class="h-2 w-2 rounded-full bg-neutral-600" />
              <span class="text-sm">{{ highlight }}</span>
            </div>
          </div>
        </div>

        <!-- Image -->
        <div class="relative mx-auto w-full max-w-[520px]">
          <div class="relative overflow-hidden rounded-[32px] border border-neutral-800/70 bg-neutral-900/60 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.8)]">
            <img
              :src="aboutData.image"
              alt="Profile photo"
              class="w-full h-auto object-cover"
              loading="lazy"
            />
            <!-- Overlay gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent" />
          </div>

        </div>
      </div>

      <!-- Mobile Layout: Image Top, Text Bottom -->
      <div class="lg:hidden space-y-12">
        <!-- Image -->
        <div class="relative mx-auto max-w-sm">
          <div class="relative overflow-hidden rounded-[32px] border border-neutral-800/70 bg-neutral-900/60 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.8)]">
            <img
              :src="aboutData.image"
              alt="Profile photo"
              class="w-full h-auto object-cover"
              loading="lazy"
            />
            <!-- Overlay gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent" />
          </div>

        </div>

        <!-- Text Content -->
        <div class="space-y-6 text-center">
          <div class="space-y-4">
            <p class="text-base sm:text-lg leading-relaxed text-neutral-300">
              {{ aboutData.description.split('\n\n')[0] }}
            </p>
            <p class="text-base sm:text-lg leading-relaxed text-neutral-300">
              {{ aboutData.description.split('\n\n')[1] }}
            </p>
            <p class="text-base sm:text-lg leading-relaxed text-neutral-300">
              {{ aboutData.description.split('\n\n')[2] }}
            </p>
          </div>

          <!-- Highlights -->
          <div class="grid grid-cols-2 gap-4 pt-6 max-w-md mx-auto">
            <div
              v-for="highlight in aboutData.highlights"
              :key="highlight"
              class="flex items-center justify-center gap-3 text-neutral-400"
            >
              <div class="h-2 w-2 rounded-full bg-neutral-600" />
              <span class="text-sm">{{ highlight }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

