<script setup lang="ts">
import { onMounted } from "vue";
import { useOrderStore } from "@/stores/shop/orderStore";
import {apiBaseUrl} from './../../../utils.ts'

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
        class="grid grid-cols-3 px-6 py-4"
      >
        <router-link :to="`/order/${order.id}`" class="py-4 px-2">
          <div class="font-bold text-xl mb-2">Objednávka #{{ order._id }}</div>
        </router-link>

        <div class="flex items-center justify-end">
          <ul>
            <li v-for="item in order.products" class="grid grid-cols-2">
              <div>{{ item.product.title }}, {{ item.quantity }}ks,</div>
              <div>{{ item.product.price }}€</div>
            </li>
          </ul>
        </div>

        <div class="text-right">
          <a :href="apiBaseUrl(`/order/${order._id}/invoice`)">Faktúra</a>
        </div>
      </li>
    </ul>
  </div>
  <div v-else>
    <h2>Žiadne produkty v košíku</h2>
  </div>
</template>
