<script setup>
import { useExperienceStore } from '../store/Experience'

const ExperienceStore = useExperienceStore() 
</script>

<template>
<div class="h2">過往經歷</div>

<div class="ex-card"
 v-for="(group, idx) in ExperienceStore.Experience"
        :key="idx"
>
  <div class="ex-card-title">{{ group.category }}</div>
  <div class="ex-card-content"></div>
  <div class="ex-list" v-for="(item, i) in group.items" :key="i">{{ item }}</div>
</div>




</template>

<style scoped>

</style>
