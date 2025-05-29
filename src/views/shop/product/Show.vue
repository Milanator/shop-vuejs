<script setup lang="ts">
import { onMounted } from "vue";
import { useProductStore } from "@/stores/shop/productStore";
import { useRoute } from "vue-router";
import AddToCart from "@/components/shop/AddToCart.vue";

const route = useRoute();

const productStore = useProductStore();

onMounted(() => {
  productStore.getProduct(route.params.id);
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
      <!-- Add to cart -->
      <AddToCart :product="productStore.product" />
    </div>
  </div>
</template>
