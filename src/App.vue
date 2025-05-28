<script setup>
import Navbar from './views/Navbar.vue'
import Footer from './views/Footer.vue'
import { RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const isSpecialPage = computed(() =>
  ['Contact', 'Projects'].includes(route.name)
)
</script>

<template>
  <div class="bg-gray-50 text-gray-800">
    <Navbar/>
  </div>

  <main
    :class="[
      'max-w-4xl mx-auto px-4',
      !isSpecialPage ? 'pt-48 space-y-16' : ''
    ]"
  >
    <RouterView />
  </main>

  <footer>
  <Footer />
  </footer>
</template>

<style scoped></style>
