<script setup>
import LogoLoop from '../vuebits/LogoLoop/LogoLoop.vue'
import vueLogo from '../assets/vue.svg'
import flutterLogo from '../assets/flutter.svg'
import figmaLogo from '../assets/figma.svg'
import githubLogo from '../assets/github.svg'
import expoLogo from '../assets/expo.svg'
import firebaseLogo from '../assets/firebase.svg'
import supabaseLogo from '../assets/supabase.svg'
import nuxtLogo from '../assets/nuxt.svg'
import tailwindLogo from '../assets/tailwind.svg'


const logos = [
  { name: 'Vue.js', src: vueLogo },
  { name: 'Flutter', src: flutterLogo },
  { name: 'Nuxt.js', src: nuxtLogo },
  { name: 'Figma', src: figmaLogo },
  { name: 'Supabase', src: supabaseLogo },
  { name: 'GitHub', src: githubLogo },
  { name: 'Expo', src: expoLogo },
  { name: 'Firebase', src: firebaseLogo },
  { name: 'Tailwind CSS', src: tailwindLogo },
]
</script>

<template>
  <section id="skills" class="relative w-full bg-neutral-950 py-16 overflow-hidden">
    <div class="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-neutral-950/95 to-transparent pointer-events-none" />
    <div class="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-neutral-950/95 to-transparent pointer-events-none" />

    <div class="relative z-10 mx-auto flex w-full max-w-400 flex-col items-center px-4 sm:px-6 lg:px-8">
      <div class="mb-10 w-full text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-neutral-500">tech stack</p>
        <h2 class="mt-4 text-3xl sm:text-4xl font-bold text-neutral-50">Tools & technologies I've got experience with</h2>
      </div>

      <div class="w-full rounded-4xl border border-neutral-800 bg-neutral-900/70 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.9)] backdrop-blur-2xl px-4 py-8 sm:px-6 sm:py-10">
        <div class="overflow-hidden rounded-[28px] bg-neutral-950/80 px-4 py-6 sm:px-6">
          <LogoLoop
            :logos="logos"
            :pause-on-hover="true"
            class="skill-logo-loop"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
:global(.skill-logo-loop img) {
  filter: grayscale(100%) brightness(0) invert(1);
  opacity: 0.9;
  transition: all 0.25s ease;
}

:global(.skill-logo-loop img:hover) {
  filter: grayscale(0) brightness(1) invert(0.03);
  opacity: 1;
}

.skill-logo-loop {
  display: block;
  width: 100%;
}
</style>
