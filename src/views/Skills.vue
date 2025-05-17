<script setup>
import { reactive } from 'vue';

const item = reactive([
  {
    a:'好吃',
    c:'不好吃',
  },
  {b:'大鼠'},
])

</script>

<template>
<h2>相關專業技能</h2>
<!-- 這邊 v-for 渲染-從store拿資料 -->
<div v-for="items in item">
<ul>
  <li>{{ items }}</li>
</ul>
</div>



<div>
</div>

</template>

<style scoped>

</style>
