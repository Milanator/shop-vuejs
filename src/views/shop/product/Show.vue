<script setup lang="ts">
import { onMounted } from "vue";
import { useProductStore } from "@/stores/shop/productStore";
import { useRoute } from "vue-router";

const route = useRoute();

const productStore = useProductStore();

onMounted(() => {
  productStore.getProduct(Number(route.params.id));
});
</script>
<template>
  <div v-if="productStore.loaded" class="grid grid-cols-2 gap-2">
    <div>
      <img class="max-w-full" :src="productStore.product.image_url" />
    </div>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ productStore.product.title }}</div>
      <p class="text-gray-700 text-base">{{ productStore.product.price }}€</p>
      <button
        type="button"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
      >
        Pridať do košíka
      </button>
    </div>
  </div>
</template>
