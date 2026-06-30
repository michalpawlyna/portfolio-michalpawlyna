<script setup>
import { ref } from 'vue'

const contactInfo = {
  email: 'michalpawlyna685@gmail.com',
  linkedin: 'https://linkedin.com/in/michalpawlyna',
  github: 'https://github.com/michalpawlyna',
}

const contacts = [
  {
    icon: 'mail',
    label: 'Email',
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    description: 'Best way to reach me'
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: 'Connect with me',
    href: contactInfo.linkedin,
    description: 'Professional network'
  },
  {
    icon: 'github',
    label: 'GitHub',
    value: 'View my work',
    href: contactInfo.github,
    description: 'Code & projects'
  },

]

// Icon mapping
const getIcon = (iconName) => {
  const icons = {
    mail: {
      path: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      viewBox: '0 0 24 24'
    },
    phone: {
      path: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z',
      viewBox: '0 0 24 24'
    },
    linkedin: {
      path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 110-4 2 2 0 010 4z',
      viewBox: '0 0 24 24'
    },
    github: {
      path: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
      viewBox: '0 0 24 24'
    },
  }
  return icons[iconName] || icons.mail
}
</script>

<template>
  <section id="contact" class="relative w-full bg-neutral-950 py-20 px-4 sm:px-6 lg:px-8">
    <!-- Background gradient -->
    <div class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-neutral-900 to-transparent pointer-events-none" />

    <div class="relative z-10 mx-auto max-w-7xl">
      <!-- Section Header -->
      <div class="mb-16 text-center">
        <p class="text-sm uppercase tracking-[0.35em] text-neutral-500">get in touch</p>
        <h2 class="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-50">
          Open to new opportunities
        </h2>
        <p class="mt-6 max-w-2xl mx-auto text-neutral-400 text-base sm:text-lg">
          I'm actively looking for full-time roles where I can grow and contribute. If you think we'd be a good fit, don't hesitate to reach out below.
        </p>
      </div>

      <!-- Contact Cards Grid -->
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
        <a
          v-for="contact in contacts"
          :key="contact.label"
          :href="contact.href"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative flex flex-col items-center justify-center rounded-2xl border border-neutral-800/70 bg-neutral-900/60 p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-neutral-700 hover:bg-neutral-900/80 hover:shadow-lg hover:shadow-neutral-50/5"
        >
          <!-- Icon -->
          <svg
            :viewBox="getIcon(contact.icon).viewBox"
            class="mb-4 h-8 w-8 text-neutral-400 transition-colors duration-300 group-hover:text-neutral-200"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path :d="getIcon(contact.icon).path" />
          </svg>

          <!-- Label -->
          <h3 class="text-lg font-semibold text-neutral-50 text-center">{{ contact.label }}</h3>

          <!-- Description -->
          <p class="mt-2 text-xs text-neutral-500 text-center">{{ contact.description }}</p>

          <!-- Value -->
          <p class="mt-3 text-sm font-medium text-neutral-300 text-center break-all">
            {{ contact.value }}
          </p>

          <!-- Arrow indicator -->
          <div class="mt-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <svg
              class="h-4 w-4 text-neutral-400"
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
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
a {
  text-decoration: none;
}

svg {
  transition: transform 0.3s ease;
}

.group:hover svg {
  transform: scale(1.1);
}
</style>
