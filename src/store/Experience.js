import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useExperienceStore = defineStore('useExperience',() => {
  const Experience = ref([
    {
      category: '開南大學',
      content:'學士學位・多媒體與行動商務學系2013年 - 2018年',
      items: [
        '在學期間日文並且通過N3,',
        '金沢星稜大学-交換留学1年,留學期間於日本學習通過N2',
        '回台灣以後通過N1',
      ]
    },
    {
      category: '愛可信股份有限公司',
      content:'Account Manager 2019年2月 - 2024年8月',
      items: [
        '協助台灣區電商代理運營負責系統操作,',
        '倉儲管理及物流確認處理配送投訴,',
        '異常狀況客戶關係管理,',
        '經營彙整分析營運資料，解決客戶問題,',
        '日文書信對應',
      ]
    },
    {
      category: '前端應用開發工程師實戰養成班（第1梯次）',
      content:'前端課程 2024年9月 - 2025年1月',
      items: [
        '網路概論',
        'HTML/CSS ,RWD 響應式網頁設計',
        'JavaScript 前端開發 ,Vue 前端框架',
        'Express.js Node.js',
        'TDD 測試',
        'Git 版本控制',
        '專題製作',
      ]
    },
    {
      category: '聯錸科技股份有限公司',
      content:'前端工程師 2025年4月 - 現在',
      items: [
        'POS 系統後台維護',
      ]
    },


  ])
 return {
  Experience
 }
})
