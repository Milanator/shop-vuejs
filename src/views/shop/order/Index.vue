<script setup lang="ts">
import { onMounted } from "vue";
import { useOrderStore } from "@/stores/shop/orderStore";
import { apiBaseUrl } from "./../../../utils.ts";

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
        :key="order._id"
        class="grid grid-cols-3 px-6 py-4 shadow mb-2"
      >
        <router-link :to="`/order/${order.id}`" class="p-2">
          <div class="text-sm font-bold">Objednávka #{{ order._id }}</div>
        </router-link>

        <div class="flex items-center p-2">
          <ul>
            <li v-for="item in order.products">
              {{ item.product.title }}, {{ item.quantity }}ks,
              {{ item.product.price }}€
            </li>
          </ul>
        </div>

        <div class="flex items-center justify-end">
          <a
            :href="apiBaseUrl(`/order/${order._id}/invoice`)"
            class="text-blue-500 underline"
            >Faktúra</a
          >
        </div>
      </li>
    </ul>
  </div>
  <div v-else>
    <h2>Žiadne produkty v košíku</h2>
  </div>
</template>
