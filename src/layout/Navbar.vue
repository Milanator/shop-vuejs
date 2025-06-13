<script setup lang="ts">
import { useAuthStore } from "@/stores/auth/authStore";

const authStore = useAuthStore();

const onLogout = (event: Event) => {
  event.preventDefault();

  authStore.logout();
};
</script>
<template>
  <header>
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="w-full">
              <div class="flex flex-1 items-center justify-between space-x-2">
                <!-- Shop -->
                <div class="flex items-center space-x-2">
                  <router-link
                    :to="`/product`"
                    class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  >
                    Produkty
                  </router-link>
                  <router-link
                    :to="`/cart`"
                    class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  >
                    Košík
                  </router-link>
                  <router-link
                    :to="`/order`"
                    class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white mr-0"
                  >
                    Objednávky
                  </router-link>

                  <div
                    v-if="authStore.isAuth"
                    class="inline-block h-[1.5rem] w-0.5 bg-neutral-100 mx-4"
                  ></div>

                  <!-- Admin -->
                  <!-- Listing -->
                  <router-link
                    v-if="authStore.isAuth"
                    to="/admin/product"
                    class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  >
                    Produkty
                  </router-link>
                  <!-- Add product -->
                  <router-link
                    v-if="authStore.isAuth"
                    :to="`/admin/product/create`"
                    class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                  >
                    Pridať produkt
                  </router-link>
                </div>

                <div class="flex space-x-2">
                  <template v-if="!authStore.isAuth">
                    <router-link
                      to="/login"
                      class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    >
                      Prihlásiť sa
                    </router-link>
                    <router-link
                      to="/register"
                      class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                    >
                      Registrácia
                    </router-link>
                  </template>

                  <template v-else>
                    <span class="flex items-center px-2 text-white">
                      {{ authStore.user.name }}
                    </span>
                    <a
                      class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                      @click="onLogout"
                    >
                      Odhlásiť sa
                    </a>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
