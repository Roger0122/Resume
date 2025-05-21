<script setup>
import joitogetherGif from '../assets/joitogether.gif'
</script>

<template>
  <div class="pt-32  radius-10  rounded-3xl">
    <h2 class="h2">團體作品:JoiTogether</h2>
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
