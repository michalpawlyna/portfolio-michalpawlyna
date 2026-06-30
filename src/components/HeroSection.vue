<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Aurora from '../vuebits/Aurora/Aurora.vue'

const isMobile = ref(false)

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<template>
  <div id="home" class="relative min-h-screen w-full overflow-hidden bg-neutral-950">
    <!-- Aurora Background - paused on mobile -->
    <div class="absolute inset-0 z-0">
      <Aurora
        :colorStops="['#ffffff', '#171717', '#ffffff']"
        :amplitude="1.2"
        :blend="0.4"
        :speed="isMobile ? 0 : 0.8"
        :intensity="0.6"
        class="w-full h-full"
      />
    </div>

    <!-- Gradient Overlay for better text readability -->
    <div class="absolute inset-0 z-10 bg-gradient-to-b from-neutral-950/40 via-neutral-950/60 to-neutral-950/80" />

    <!-- Content -->
    <div class="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        
        <!-- Intro Greeting -->
        <p class="mx-auto mb-4 sm:mb-4 md:mb-4 max-w-2xl text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed">
          Hi, I'm Michał Pawłyna
        </p>

        <!-- Main Heading -->
        <h1 class="mb-6 sm:mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 via-neutral-200 to-neutral-50">
          <span class="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] sm:leading-[1.2]">
            Software Developer &
          </span>
          <span class="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] sm:leading-[1.2] mt-2">
            UI/UX Designer
          </span>
        </h1>

        <!-- Subtitle -->
        <p class="mx-auto mb-8 sm:mb-10 md:mb-12 max-w-2xl text-base sm:text-lg md:text-xl text-neutral-300 leading-relaxed">
          Building software, designing intuitive experiences, and solving technical challenges.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
          <!-- Primary Button -->
          <a
            href="#projects"
            class="group relative inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 font-semibold text-neutral-950 bg-neutral-50 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-neutral-50/20 active:scale-95"
          >
            <span class="relative z-10">View My Work</span>
            <svg
              class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>

          <!-- Secondary Button -->
          <a
            href="#contact"
            class="group relative inline-flex items-center justify-center px-8 sm:px-10 py-3 sm:py-4 font-semibold text-neutral-50 bg-neutral-900 border border-neutral-700 rounded-lg transition-all duration-300 hover:border-neutral-500 hover:bg-neutral-800/50 hover:shadow-lg hover:shadow-neutral-50/10 active:scale-95"
          >
            <span class="relative z-10">Get in Touch</span>
            <svg
              class="ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </a>
        </div>

        <!-- Scroll Indicator (hidden on mobile) -->
        <div class="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div class="flex flex-col items-center gap-2">
            <p class="text-xs text-neutral-500">Scroll to explore</p>
            <svg class="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Accent elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-neutral-800/5 rounded-full blur-3xl pointer-events-none z-0" />
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-neutral-700/5 rounded-full blur-3xl pointer-events-none z-0" />
  </div>
</template>

<style scoped>
/* Smooth entrance animation */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Badge animation */
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Glow effect on hover */
@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0);
  }
  50% {
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.1);
  }
}

/* Apply animations */
:deep(> div) {
  animation: fadeInUp 0.8s ease-out;
}

.dark {
  color-scheme: dark;
}
</style>
