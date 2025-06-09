<script setup lang="ts">
import { onMounted } from "vue";
import { useCartStore } from "@/stores/shop/cartStore";

const cartStore = useCartStore();

onMounted(() => {
  cartStore.setCart();
});
</script>
<template>
  <ul v-if="cartStore.cart">
    <li
      v-for="item in cartStore.cart.items"
      :key="item.product.id"
      class="grid grid-cols-4 px-6 py-4"
    >
      <router-link :to="`/product/${item.product.id}`">
        <img class="max-w-full" :src="item.product.image_url" />
      </router-link>

      <input type="number" v-model="item.quantity" />
      
      <router-link :to="`/product/${item.product.id}`" class="py-4 px-2">
        <div class="font-bold text-xl mb-2">{{ item.product.title }}</div>
        <p class="text-gray-700 text-base">{{ item.product.price }}€</p>
      </router-link>

      <div class="flex items-center justify-end">
        <a href="#">X</a>
      </div>
    </li>
  </ul>
</template>
