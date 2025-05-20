<script setup>
import { useSkillStore } from '../store/Skill'

const skillStore = useSkillStore() 
</script>

<template>
  <h2 class="h2 py-10">相關專業技能</h2>
  <div class="flex gap-10">
      <div
        v-for="(group, idx) in skillStore.skills"
        :key="idx"
        class="skill-card"    
      >
        <div class="skill-card-title">{{ group.category }}</div>
        <ul class="skill-list">
          <li v-for="(item, i) in group.items" :key="i">{{ item }}</li>
        </ul>
      </div>
</div>
</template>

<style scoped>

</style>
