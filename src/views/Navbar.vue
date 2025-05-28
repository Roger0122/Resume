<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)
const isScrolled = ref(false)

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleScroll() {
  showButton.value = window.scrollY > 200
  isScrolled.value = window.scrollY > 10
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md"
    :class="isScrolled ? 'bg-white/70 shadow-md' : 'bg-white/100'"
  >
    <div class="flex flex-row-reverse space-x-5 gap-4 p-4 max-w-screen-xl mx-auto">
      <div class="w-10 rounded-full">
        <img class="rounded-full" src="../assets/My.png" alt="Roger" />
      </div>
      <div class="flex pt-2">
        <p class="h3">Roger</p>
      </div>
      <div class="flex pt-2">
        <ul class="flex flex-wrap gap-4 sm:gap-3 lg:gap-4">
          <li><RouterLink to="/" class="nav-item">關於我</RouterLink></li>
          <li><RouterLink to="/Projects" class="nav-item">專案作品</RouterLink></li>
          <li><RouterLink to="/Contact" class="nav-item">聯繫我</RouterLink></li>
        </ul>
      </div>
    </div>
  </div>

  <button
    v-if="showButton"
    class="to-top-button fixed bottom-6 right-6 px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition-all"
    @click="scrollToTop"
  >
    ⬆ TOP
  </button>
</template>
