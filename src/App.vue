<script setup lang="ts">
import Navbar from "@/layout/Navbar.vue";
</script>
<template>
  <Navbar />
  <main class="p-6 max-w-5xl mx-auto">
    <router-view />
  </main>
</template>
