<script setup lang="ts">
import { useProductStore as useAdminProductStore } from "@/stores/admin/productStore";
import { useProductStore as useShopProductStore } from "@/stores/shop/productStore";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const adminProductStore = useAdminProductStore();
const shopProductStore = useShopProductStore();

onMounted(() => {
  shopProductStore.getProduct(route.params.id);
});

const onSubmit = (event: Event) => {
  event.preventDefault();

  adminProductStore.modifyProduct(route.params.id, {
    "Content-Type": "multipart/form-data",
  });
};
</script>
<template>
  <form
    v-if="shopProductStore.loaded"
    id="form"
    method="POST"
    @submit="onSubmit"
  >
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
        Názov
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="title"
        type="text"
        name="title"
        v-model="shopProductStore.product.title"
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
        v-model="shopProductStore.product.price"
      />
    </div>

    <div class="mb-4">
      <label
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        for="image"
      >
        Obrázok URL
      </label>
      <input
        class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        name="image"
        id="image"
        type="file"
      />
    </div>

    <div class="mb-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="description"
      >
        Popis
      </label>
      <textarea
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="description"
        type="text"
        name="description"
        v-model="shopProductStore.product.description"
      ></textarea>
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
