<script setup>
import { ref } from 'vue'

const subject = ref('')
const message = ref('')
const isSending = ref(false)

const sendEmail = () => {
  if (!subject.value.trim() || !message.value.trim()) {
    alert('請輸入標題與內容')
    return
  }

  if (isSending.value) {
    alert('請勿重複送出，稍後再試')
    return
  }

  isSending.value = true

  const mailtoLink = `mailto:a86527913@gmail.com?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(message.value)}`
  window.location.href = mailtoLink

  setTimeout(() => {
    isSending.value = false
  }, 2000)
}
</script>

<template>
  <div class="max-w-xl mx-auto space-y-6 pt-32 px-4">
    <h2 class="text-2xl font-bold text-indigo-700">聯繫我</h2>

    <div class="space-y-2">
      <label class="block font-medium">標題</label>
      <input
        v-model="subject"
        type="text"
        placeholder="請輸入主旨"
        class="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
    </div>

    <div class="space-y-2">
      <label class="block font-medium">內容</label>
      <textarea
        v-model="message"
        rows="6"
        placeholder="請輸入內容"
        class="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      ></textarea>
    </div>

    <button
      @click="sendEmail"
      :disabled="isSending"
      class="btn-primary disabled:opacity-50"
    >
      {{ isSending ? '送出中...' : '送出' }}
    </button>
  </div>
</template>

<style scoped>

</style>
