<script setup lang="ts">
import AddToCart from "@/components/shop/AddToCart.vue";
import Pagination from "@/components/Pagination.vue";
import { onMounted } from "vue";
import { useProductStore } from "@/stores/shop/productStore";
import DetailButton from "@/components/DetailButton.vue";

const productStore = useProductStore();

onMounted(() => {
  productStore.setProducts();
});
</script>
<template>
  <template v-if="productStore.loaded">
    <div class="grid grid-cols-3 gap-2">
      <router-link
        :to="`/product/${product._id}`"
        class="max-w-sm rounded overflow-hidden shadow-lg"
        v-for="product in productStore.products"
        :key="product._id"
      >
        <img class="max-w-full" :src="product.imageUrl" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ product.title }}</div>
          <p class="text-gray-700 text-base">{{ product.price }}€</p>

          <div class="mt-2 flex justify-between items-start">
            <!-- Detail -->
            <DetailButton :product="product" />
            <!-- Add to cart -->
            <AddToCart :product="product" />
          </div>
        </div>
      </router-link>
    </div>
    <!-- Pagination -->
    <Pagination />
  </template>
</template>
