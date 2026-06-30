<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const activeSection = ref('home')
const isDropdownOpen = ref(false)

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

const scrollToSection = (sectionId) => {
  isMenuOpen.value = false

  if (sectionId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    activeSection.value = 'home'
    return
  }

  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    activeSection.value = sectionId
  }
}

/**
 * Triggers a CV file download.
 * Place your CV files at: public/cv/cv-michal-pawlyna-eng.pdf and public/cv/cv-michal-pawlyna-pl.pdf
 * The public/ folder is served as-is by Vite, so the files will be
 * accessible at /cv/cv-michal-pawlyna-eng.pdf and /cv/cv-michal-pawlyna-pl.pdf in production.
 */
const downloadCV = (lang) => {
  const link = document.createElement('a')
  link.href = `/cv/cv-michal-pawlyna-${lang}.pdf`
  link.download = `CV-Michal-Pawlyna-${lang.toUpperCase()}.pdf`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// Setup Intersection Observer for automatic section tracking
let observer = null
let handleClickOutside = null

onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '-80px 0px -80px 0px'
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id
      }
    })
  }, observerOptions)

  navItems.forEach(item => {
    const element = document.getElementById(item.id)
    if (element) {
      observer.observe(element)
    }
  })

  // Handle click outside to close dropdown
  handleClickOutside = (event) => {
    const dropdown = document.querySelector('.relative')
    if (dropdown && !dropdown.contains(event.target)) {
      isDropdownOpen.value = false
    }
  }
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
  if (handleClickOutside) {
    document.removeEventListener('click', handleClickOutside)
  }
})

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800/50">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <!-- Logo/Brand -->
        <div class="flex-shrink-0">
          <button
            @click="scrollToSection('home')"
            class="text-xl font-bold text-neutral-50 transition-colors duration-300 hover:text-neutral-300"
          >
            <span class="bg-gradient-to-r from-neutral-50 to-neutral-400 bg-clip-text text-transparent">
              MP
            </span>
          </button>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-1">
          <button
            v-for="item in navItems"
            :key="item.id"
            @click="scrollToSection(item.id)"
            :class="[
              'px-4 py-2 text-sm font-medium rounded-md transition-all duration-300',
              activeSection === item.id
                ? 'text-neutral-50 bg-neutral-800'
                : 'text-neutral-400 hover:text-neutral-50 hover:bg-neutral-900/50'
            ]"
          >
            {{ item.label }}
          </button>

          <!-- CV Download Dropdown – Desktop -->
          <div class="relative ml-3">
            <button
              @click="isDropdownOpen = !isDropdownOpen"
              class="cv-btn"
              aria-label="Download CV"
              :aria-expanded="isDropdownOpen"
            >
              <span class="cv-btn__label">CV</span>
              <span class="cv-btn__icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"
                  :class="{ 'rotate-180': isDropdownOpen }">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </button>

            <!-- Dropdown Menu -->
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="opacity-0 scale-95"
              enter-to-class="opacity-100 scale-100"
              leave-active-class="transition duration-150 ease-in"
              leave-from-class="opacity-100 scale-100"
              leave-to-class="opacity-0 scale-95"
            >
              <div
                v-if="isDropdownOpen"
                class="absolute right-0 mt-2 w-48 bg-neutral-900 border border-neutral-700 rounded-md shadow-lg z-50"
                @click.stop
              >
                <button
                  @click="downloadCV('eng'); isDropdownOpen = false"
                  class="w-full text-left px-4 py-3 text-sm text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800 transition-colors duration-200 first:rounded-t-md"
                >
                  Download CV (English)
                </button>
                <button
                  @click="downloadCV('pl'); isDropdownOpen = false"
                  class="w-full text-left px-4 py-3 text-sm text-neutral-300 hover:text-neutral-50 hover:bg-neutral-800 transition-colors duration-200 last:rounded-b-md"
                >
                  Pobierz CV (Polski)
                </button>
              </div>
            </transition>
          </div>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="isMenuOpen = !isMenuOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-neutral-50 hover:bg-neutral-900 transition-all duration-300"
            :aria-expanded="isMenuOpen"
            aria-label="Toggle navigation"
          >
            <svg
              class="h-6 w-6 transition-transform duration-300"
              :class="{ 'rotate-90': isMenuOpen }"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path v-if="!isMenuOpen" d="M4 6h16M4 12h16M4 18h16" />
              <path v-else d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Menu -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-show="isMenuOpen"
          class="md:hidden border-t border-neutral-800/50 bg-neutral-900/50 backdrop-blur-sm"
        >
          <div class="space-y-1 px-2 py-4">
            <button
              v-for="item in navItems"
              :key="item.id"
              @click="scrollToSection(item.id)"
              :class="[
                'w-full text-left px-4 py-3 rounded-md text-base font-medium transition-all duration-300',
                activeSection === item.id
                  ? 'text-neutral-50 bg-neutral-800'
                  : 'text-neutral-400 hover:text-neutral-50 hover:bg-neutral-800/50'
              ]"
            >
              {{ item.label }}
            </button>

            <!-- CV Download Buttons – Mobile -->
            <div class="flex flex-col gap-2 mt-2">
              <button
                @click="downloadCV('eng')"
                class="cv-btn cv-btn--mobile"
                aria-label="Download CV English"
              >
                <span class="cv-btn__icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </span>
                <span class="cv-btn__label">Download CV (English)</span>
              </button>
              <button
                @click="downloadCV('pl')"
                class="cv-btn cv-btn--mobile"
                aria-label="Pobierz CV Polski"
              >
                <span class="cv-btn__icon" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                </span>
                <span class="cv-btn__label">Pobierz CV (Polski)</span>
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>

  <!-- Spacing for fixed navbar -->
  <div class="h-16" />
</template>

<style scoped>
/* ─── CV Download Button ──────────────────────────────────────────────── */
.cv-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 1rem;
  font-size: 0.8125rem;  /* 13px */
  font-weight: 500;
  letter-spacing: 0.03em;
  color: #f5f5f5;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  background: transparent;
  cursor: pointer;
  transition:
    background 0.25s ease,
    border-color 0.25s ease,
    color 0.25s ease,
    transform 0.2s ease,
    box-shadow 0.25s ease;
  white-space: nowrap;
  user-select: none;
}

.cv-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.45);
  color: #ffffff;
  box-shadow: 0 0 12px rgba(255, 255, 255, 0.07);
  transform: translateY(-1px);
}

.cv-btn:active {
  transform: translateY(0);
  box-shadow: none;
  background: rgba(255, 255, 255, 0.12);
}

.cv-btn:focus-visible {
  outline: 2px solid rgba(255, 255, 255, 0.5);
  outline-offset: 3px;
}

/* Icon subtle animation on hover */
.cv-btn:hover .cv-btn__icon svg {
  animation: nudge-down 0.35s ease forwards;
}

@keyframes nudge-down {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(3px); }
  100% { transform: translateY(0); }
}

/* Mobile variant – full width */
.cv-btn--mobile {
  width: 100%;
  justify-content: center;
  padding: 0.7rem 1rem;
  font-size: 0.9375rem; /* 15px */
  border-color: rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
}
</style>
