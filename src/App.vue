<script setup lang="ts">
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/auth/authStore";
import Navbar from "@/layout/Navbar.vue";

const authStore = useAuthStore();

onMounted(() => {
  authStore.setAuthUser();
});
</script>
<template>
  <Navbar />
  <main class="p-6 max-w-5xl mx-auto">
    <router-view />
  </main>
</template>
