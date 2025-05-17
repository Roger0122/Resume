<script setup>
import Navbar from './views/Navbar.vue';
import Footer from './views/Footer.vue';
import { RouterView } from 'vue-router';
</script>

<template>
<div class="bg-gray-50 text-gray-800">
<Navbar class="fixed top-0 left-0 w-full z-50 bg-white shadow"></Navbar>
</div>
<main class="max-w-4xl mx-auto px-4 pt-48 space-y-16">
<RouterView></RouterView>
</main>
<footer class="max-w-5xl mx-auto px-4 pt-24 space-y-16">
<Footer></Footer>
</footer>
</template>

<style scoped>

</style>
