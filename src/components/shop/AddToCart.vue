<script setup lang="ts">
import { useCartStore } from "@/stores/shop/cartStore";
import { useRouter } from "vue-router";

const props = defineProps({
  product: Object,
});

const cartStore = useCartStore();

const router = useRouter();

const addToCart = (event: Event) => {
  event.preventDefault();

  cartStore.addToCart(props.product).then(() => {
    // redirect to cart
    router.push({ name: "CartFirst" });
  });
};
</script>
<template>
  <button
    type="button"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    @click="addToCart"
  >
    Pridať do košíka
  </button>
</template>
