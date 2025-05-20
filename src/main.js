import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './assets/index.css'

import { createRouter, createWebHistory}from 'vue-router'
import routes from './router/index.js'

const router = createRouter({
  history: createWebHistory('/Resume/'),
  routes,
  linkExactActiveClass: 'router-link-active'
})
const pinia =createPinia()
const app = createApp(App);

app.use(router)
app.use(pinia)
app.mount('#app')