<script setup lang="ts">
import { onMounted } from "vue";
import { useProductStore } from "@/stores/productStore";

const productStore = useProductStore();

onMounted(() => {
  productStore.getProducts();
});
</script>
<template>
  <div v-if="productStore.loaded" class="grid grid-cols-3 gap-2">
    <router-link
      :to="`/product/${product.id}`"
      class="max-w-sm rounded overflow-hidden shadow-lg"
      v-for="product in productStore.products"
      :key="product.id"
    >
      <img class="max-w-full" :src="product.image_url" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ product.title }}</div>
        <p class="text-gray-700 text-base">{{ product.price }}€</p>
        <button
          type="button"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
        >
          Pridať do košíka
        </button>
      </div>
    </router-link>
  </div>
</template>
