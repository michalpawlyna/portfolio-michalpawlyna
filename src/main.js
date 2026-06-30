// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { inject } from '@vercel/analytics'

createApp(App).mount('#app')

// Initialize Vercel Analytics
inject()