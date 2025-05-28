<script setup lang="ts">
import { useProductStore } from "@/stores/admin/productStore";

const productStore = useProductStore();

const onSubmit = (event) => {
  event.preventDefault();

  productStore.storeProduct();
};
</script>
<template>
  <form id="form" method="POST" @submit="onSubmit">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
        Názov
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="title"
        type="text"
        name="title"
      />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="price">
        Cena
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="price"
        type="text"
        name="price"
      />
    </div>

    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="image_url">
        Obrázok URL
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="image_url"
        type="text"
        name="image_url"
      />
    </div>

    <div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Uložiť
      </button>
    </div>
  </form>
</template>
