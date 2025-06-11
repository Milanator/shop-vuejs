<script setup lang="ts">
import { onMounted } from "vue";
import { useProductStore } from "@/stores/shop/productStore";
import DetailButton from "@/components/DetailButton.vue";
import DeleteButton from "@/components/admin/DeleteButton.vue";

const productStore = useProductStore();

onMounted(() => {
  productStore.setProducts();
});
</script>
<template>
  <div v-if="productStore.loaded" class="grid grid-cols-3 gap-2">
    <router-link
      v-for="product in productStore.products"
      :key="product._id"
      :to="`/product/${product._id}`"
      class="max-w-sm rounded overflow-hidden shadow-lg"
    >
      <img class="max-w-full" :src="product.imageUrl" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ product.title }}</div>
        <p class="text-gray-700 text-base">{{ product.price }}€</p>

        <div class="mt-2 flex justify-between items-start space-x-1">
          <!-- Detail -->
          <DetailButton :product="product" />
          <!-- Delete -->
          <DeleteButton :product="product" />
          <!-- Edit -->
          <router-link
            :to="`/admin/product/${product._id}`"
            class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Editácia
          </router-link>
        </div>
      </div>
    </router-link>
  </div>
</template>
