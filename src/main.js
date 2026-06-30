// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { Analytics } from "@vercel/analytics/vue"

createApp(App).mount('#app')

// Initialize Vercel Analytics
inject()