import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useExperienceStore = defineStore('useExperience',() => {
  const Experience = ref([
    {
      category: 'Frontend',
      items: [
        '熟悉 Vue3',
        '熟悉 JavaScript ES6',
        'Vue3 開發經驗',
      ]
    },
    {
      category: 'Web layout',
      items: [
        '熟悉 HTML、CSS',
        'RWD 網頁',
        'Tailwind CSS 開發經驗',
      ]
    },
    {
      category: 'Others',
      items: [
        '熟悉 Git 版本控制',
        'Chinese — 母語',
        'Japanese — 專業 N1 合格',
        '熟悉 Microsoft Office',
        '串接 Google Map API',
        'MySQL',
      ]
    }
  ])
 return {
  Experience
 }
})
