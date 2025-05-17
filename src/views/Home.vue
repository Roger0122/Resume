<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Skill from './Skills.vue';
import Experience from './Experience.vue';
import { RouterLink } from 'vue-router'

const showButton = ref(true)

const onScroll = () => {
  showButton.value = window.scrollY < 300
}


const scrollToSkill =()=> {
  const el = document.getElementById('skills');
  if(el){
    el.scrollIntoView({ behavior: 'smooth'});
  }
  showButton.value= false;
}

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
<div>
  <div>
    <h2 class="h2">Hi 我是黃俊龍</h2>
    <p class="h3 pt-6">我的性格穩定，具備持久力與責任感，首份工作長達五年，充分展現穩定性。</p>
    <p class="h3">熱愛自學，通過日文能力測驗N1，具備自學與實踐能力（如自行組裝電腦），注重細節與穩定性，致力於成為優秀的前端工程師。</p>
  </div>
  <div class="flex pt-10">
    <div>
      <a href="https://www.cake.me/dashboard/resumes" class="btn-primary">履歷</a>
    </div>
    <div>
      <RouterLink  class="btn-outline" to='/Contact'>聯繫我!!</RouterLink>  
    </div>
  </div>
  <div class="pt-20 max-w-4xl mx-auto text-center">
    <div class="h3 btn-more"
      :class="{
      'opacity-0 pointer-events-none': !showButton,
      'opacity-100': showButton
      }"
      @click="scrollToSkill"
      >看更多↓
    </div>
  </div>
</div>
<hr>
<section id="skills">
  <Skill/>
</section>
<Experience/>

</template>

<style scoped>

</style>
