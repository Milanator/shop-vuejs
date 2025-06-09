<script setup lang="ts">
import { useProductStore } from "@/stores/admin/productStore";
import { useRouter } from "vue-router";

const props = defineProps({
  product: Object,
});

const router = useRouter();

const productStore = useProductStore();

const onDelete = (event) => {
  event.preventDefault();

  productStore
    .deleteProduct(props.product.id)
    // .then(()=> {}) // delete from cart
    .then(() => router.go(0));
};
</script>
<template>
  <button
    type="button"
    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    @click="onDelete"
  >
    Odstrániť
  </button>
</template>
