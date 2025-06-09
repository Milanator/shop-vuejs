<script setup lang="ts">
import { useProductStore as useAdminProductStore } from "@/stores/admin/productStore";
import { useProductStore as useShopProductStore } from "@/stores/shop/productStore";
import { onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const adminProductStore = useAdminProductStore();
const shopProductStore = useShopProductStore();

onMounted(() => {
  shopProductStore.getProduct(route.params.id);
});

const onSubmit = (event: Event) => {
  event.preventDefault();

  adminProductStore
    .modifyProduct(route.params.id)
    .then(() => router.push({ name: "AdminProductIndex" }));
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
      <label class="block text-gray-700 text-sm font-bold mb-2" for="image_url">
        Obrázok URL
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="image_url"
        type="text"
        name="image_url"
        v-model="shopProductStore.product.image_url"
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
