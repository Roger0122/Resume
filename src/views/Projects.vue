<script setup>
import joitogetherGif from '../assets/joitogether.gif'

</script>

<template>
  <div class="py-20 radius-10 rounded-2xl shadow-sm bg-white p-6 hover:shadow-lg transition-all duration-300">
    <h2 class="h2  text-lg font-semibold text-gray-800">團體作品:JoiTogether</h2>
    <p class="text-sm text-gray-500 mt-2">「復刻揪團網站——以Eatgether為範例（台灣最大免費聚會交友APP），模擬其提供的活動與社群服務功能。」</p>
    <a 
      href="https://joitogether.com/home" 
      target="_blank" 
      rel="noopener noreferrer"
      class="block"
    >
      <img 
        :src="joitogetherGif" 
        alt="JoiTogether 團體作品" 
        class="radius-10  rounded-3xl cursor-pointer hover:opacity-80 transition-opacity duration-300"
      />
    </a>
  </div>
</template>

<style scoped>
</style>
