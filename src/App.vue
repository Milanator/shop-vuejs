<script setup lang="ts">
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/auth/authStore";
import { useAppStore } from "@/stores/appStore";
import Navbar from "@/layout/Navbar.vue";

const authStore = useAuthStore();
const appStore = useAppStore();

onMounted(() => {
  authStore.setAuthUser();
});
</script>
<template>
  <Navbar />
  <main class="p-6 max-w-5xl mx-auto">
    <div
      v-for="flashMessage in appStore.flashMessages"
      class="border px-4 py-3 rounded relative mb-4"
      :class="{
        'bg-green-100': flashMessage.type === 'success',
        'border-green-400': flashMessage.type === 'success',
        'text-green-700': flashMessage.type === 'success',
        'bg-red-100': flashMessage.type === 'danger',
        'border-red-400': flashMessage.type === 'danger',
        'text-red-700': flashMessage.type === 'danger',
      }"
      role="alert"
    >
      <span class="block sm:inline">{{ flashMessage.text }}</span>

      <span
        class="absolute top-0 bottom-0 right-0 px-4 py-3"
        @click="appStore.forgetFlashMessages"
      >
        <svg
          class="fill-current h-6 w-6"
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path
            d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
          />
        </svg>
      </span>
    </div>

    <router-view />
  </main>
</template>
