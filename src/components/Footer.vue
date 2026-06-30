<script setup>
const currentYear = new Date().getFullYear()

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: 'github', href: 'https://github.com/michalpawlyna', label: 'GitHub' },
  { icon: 'linkedin', href: 'https://linkedin.com/in/michalpawlyna', label: 'LinkedIn' },
]

const getIcon = (iconName) => {
  const icons = {
    github: {
      path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
      viewBox: '0 0 24 24'
    },
    twitter: {
      path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7',
      viewBox: '0 0 24 24'
    },
    linkedin: {
      path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 110-4 2 2 0 010 4z',
      viewBox: '0 0 24 24'
    },
  }
  return icons[iconName] || icons.github
}
</script>

<template>
  <footer class="relative w-full bg-neutral-950 border-t border-neutral-800/50 py-16 px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <!-- Main footer content -->
      <div class="grid gap-12 md:grid-cols-3 mb-12">
        <!-- Brand -->
        <div class="flex flex-col gap-4">
          <h3 class="text-xl font-bold bg-gradient-to-r from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
            MP
          </h3>
          <p class="text-sm text-neutral-500">
            Full-Stack & Mobile App Developer
          </p>
        </div>

        <!-- Navigation Links -->
        <div>
          <h4 class="font-semibold text-neutral-50 mb-4">Navigation</h4>
          <ul class="space-y-2">
            <li
              v-for="link in footerLinks"
              :key="link.label"
            >
              <a
                :href="link.href"
                class="text-sm text-neutral-400 transition-colors duration-300 hover:text-neutral-50"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Social Links -->
        <div>
          <h4 class="font-semibold text-neutral-50 mb-4">Connect</h4>
          <div class="flex gap-4">
            <a
              v-for="social in socialLinks"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-800 text-neutral-400 transition-all duration-300 hover:border-neutral-600 hover:text-neutral-50 hover:bg-neutral-900/50"
            >
              <svg
                :viewBox="getIcon(social.icon).viewBox"
                class="h-5 w-5"
                fill="currentColor"
              >
                <path :d="getIcon(social.icon).path" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="border-t border-neutral-800/50 my-8" />

      <!-- Bottom section -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
        <p>© {{ currentYear }} Michał Pawlyna. All rights reserved.</p>
        <p>Built with Vue 3 & Tailwind CSS</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>
