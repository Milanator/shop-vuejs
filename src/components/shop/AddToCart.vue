<script setup lang="ts">
import { useCartStore } from "@/stores/shop/cartStore";

const props = defineProps({
  product: Object,
});

const cartStore = useCartStore();
</script>
<template>
  <button
    type="button"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2"
    @click="cartStore.addToCart(product)"
  >
    Pridať do košíka
  </button>
</template>
