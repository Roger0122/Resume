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
    <Navbar class="fixed top-0 left-0 w-full z-50 bg-white shadow" />
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
