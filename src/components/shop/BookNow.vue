<script setup lang="ts">
import { useOrderStore } from "@/stores/shop/orderStore";
import { useRouter } from "vue-router";

const orderStore = useOrderStore();

const router = useRouter();

const onBookNow = (event: Event) => {
  event.preventDefault();

  orderStore.storeOrder().then(() => {
    router.push({ name: "OrderSuccess" });
  });
};
</script>
<template>
  <button
    type="button"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    @click="onBookNow"
  >
    Objednať teraz
  </button>
</template>
