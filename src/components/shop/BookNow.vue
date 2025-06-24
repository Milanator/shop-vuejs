<script setup lang="ts">
import { usePaymentStore } from "@/stores/shop/paymentStore";
import { useRouter } from "vue-router";

const paymentStore = usePaymentStore();

const router = useRouter();

const onBookNow = (event: Event) => {
  event.preventDefault();

  paymentStore.makePayment()
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
