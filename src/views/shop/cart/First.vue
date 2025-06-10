<script setup lang="ts">
import { onMounted } from "vue";
import type { CartItem } from "@/types/CartItemType.ts";
import { useCartStore } from "@/stores/shop/cartStore";
import BookNow from "@/components/shop/BookNow.vue";

const cartStore = useCartStore();

onMounted(() => {
  cartStore.setCart();
});

const onDeleteCartItem = (event: Event, item: CartItem) => {
  event.preventDefault();

  cartStore.deleteProductFromCart(item.product).then(() => cartStore.setCart());
};
</script>
<template>
  <div v-if="cartStore.loaded && cartStore.cart.items.length">
    <ul>
      <li
        v-for="item in cartStore.cart.items"
        :key="item.product.id"
        class="grid grid-cols-4 px-6 py-4"
      >
        <router-link :to="`/product/${item.product.id}`">
          <img class="max-w-full" :src="item.product.imageUrl" />
        </router-link>

        <input type="number" v-model="item.quantity" />

        <router-link :to="`/product/${item.product.id}`" class="py-4 px-2">
          <div class="font-bold text-xl mb-2">{{ item.product.title }}</div>
          <p class="text-gray-700 text-base">{{ item.product.price }}€</p>
        </router-link>

        <div class="flex items-center justify-end">
          <button
            type="button"
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            @click="onDeleteCartItem($event, item)"
          >
            X
          </button>
        </div>
      </li>
    </ul>

    <BookNow />
  </div>
  <div v-else>
    <h2>Žiadne produkty v košíku</h2>
  </div>
</template>
