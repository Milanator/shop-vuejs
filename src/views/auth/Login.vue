<script setup lang="ts">
import { useAuthStore } from "@/stores/auth/authStore";

const authStore = useAuthStore();

const onSubmit = (event: Event) => {
  event.preventDefault();

  authStore.login();
};
</script>
<template>
  <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 class="text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        Prihlásenie
      </h2>
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" action="#" method="POST" @submit="onSubmit">
        <div>
          <label for="email" class="block text-sm/6 font-medium text-gray-900"
            >Email</label
          >
          <div class="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              autocomplete="email"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              v-model="authStore.email"
            />
          </div>
        </div>

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

        <div class="text-sm">
          <router-link
            to="/reset-password/request"
            class="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Zabudol si heslo?
          </router-link>
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
