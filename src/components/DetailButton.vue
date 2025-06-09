<script setup lang="ts">
const props = defineProps({
  product: Object,
});
</script>
<template>
  <a
    :href="`/product/${product.id}`"
    class="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
    >Detail</a
  >
</template>
