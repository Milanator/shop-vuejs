<script setup lang="ts">
import { useAuthStore } from "@/stores/auth/authStore";

const authStore = useAuthStore();

const onSubmit = (event: Event) => {
  event.preventDefault();

  authStore.resetPasswordNew();
};
</script>
<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        Reset hesla
      </h2>
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST" @submit="onSubmit">
        <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm/6 font-medium text-gray-900"
              >Heslo</label
            >
          </div>
          <div class="mt-2">
            <input
              type="password"
              name="password"
              id="password"
              autocomplete="current-password"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              v-model="authStore.password"
            />
          </div>
        </div>

         <div>
          <div class="flex items-center justify-between">
            <label
              for="password"
              class="block text-sm/6 font-medium text-gray-900"
              >Potvrdenie hesla</label
            >
          </div>
          <div class="mt-2">
            <input
              type="password"
              name="password_confirmation"
              id="password_confirmation"
              autocomplete="password_confirmation"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              v-model="authStore.password_confirmation"
            />
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Prihlásiť sa
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
