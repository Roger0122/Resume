import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'

import { createRouter, createWebHistory}from 'vue-router'
import routes from './router/index.js'

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkExactActiveClass: 'router-link-active'
})

const app = createApp(App);

app.use(router)
app.mount('#app')