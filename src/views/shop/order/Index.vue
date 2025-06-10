<script setup lang="ts">
import { onMounted } from "vue";
import { useOrderStore } from "@/stores/shop/orderStore";
import BookNow from "@/components/shop/BookNow.vue";

const orderStore = useOrderStore();

onMounted(() => {
  orderStore.setOrders();
});
</script>
<template>
  <div v-if="orderStore.loaded && orderStore.orders.length">
    <ul>
      <li
        v-for="order in orderStore.orders"
        :key="order.id"
        class="grid grid-cols-2 px-6 py-4"
      >
        <router-link :to="`/order/${order.id}`" class="py-4 px-2">
          <div class="font-bold text-xl mb-2">Objednávka #{{ order.id }}</div>
        </router-link>

        <div class="flex items-center justify-end">
          <ul>
            <li v-for="item in order.products">
              {{ item.product.title }}, {{ item.quantity }}ks,
              {{ item.product.price }}
            </li>
          </ul>
        </div>
      </li>
    </ul>

    <BookNow />
  </div>
  <div v-else>
    <h2>Žiadne produkty v košíku</h2>
  </div>
</template>
