<script setup>
import { RouterLink } from 'vue-router'


</script>

<template>
  
<div class="flex flex-row-reverse space-x-5 gap-4 p-4">
  <div class="w-10 rounded-full">
    <img class="rounded-full" src="../assets/My.png" alt="Roger">
  </div>
  <div class="flex pt-2">
    <p>Roger</p>
  </div>
  <div class="flex pt-2">
    <ul class="flex flex-wrap gap-4 sm:gap-3 lg:gap-4">
      <li><RouterLink to='/' class="nav-item">關於我</RouterLink></li>
      <li><RouterLink to= '/Projects' class="nav-item">專案作品</RouterLink></li>
      <li><RouterLink to= '/Contact' class="nav-item">聯繫我</RouterLink></li>
    </ul>
  </div>
</div>



</template>

<style scoped>

</style>
