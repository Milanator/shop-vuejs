<script setup lang="ts">
import { useProductStore } from "@/stores/shop/productStore";

const productStore = useProductStore();

const onPaginate = (url) => {
  console.log(url);
  if (url) {
    productStore.setProducts(url);
  }

  return false;
};
</script>
<template>
  <div
    class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
  >
    <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div>
        <nav
          class="isolate inline-flex -space-x-px rounded-md shadow-xs"
          aria-label="Pagination"
        >
          <!-- Previous -->
          <a
            class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            :class="{
              'disabled bg-gray-200': !productStore.pagination.prev_page,
            }"
            @click="onPaginate(productStore.pagination.prev_page)"
          >
            <span class="sr-only">Previous</span>
            <svg
              class="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fill-rule="evenodd"
                d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>

          <!-- Pages -->
          <a
            v-if="productStore.pagination.page_count"
            v-for="key in productStore.pagination.page_count"
            aria-current="page"
            class="relative z-10 inline-flex items-center px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer"
            :class="{
              'bg-indigo-600': key === productStore.pagination.current_page,
              'bg-indigo-300': key !== productStore.pagination.current_page,
            }"
          >
            {{ key }}
          </a>

          <!-- Next -->
          <a
            class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            :class="{
              'disabled bg-gray-200': !productStore.pagination.next_page,
            }"
            @click="onPaginate(productStore.pagination.next_page)"
          >
            <span class="sr-only">Next</span>
            <svg
              class="size-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                fill-rule="evenodd"
                d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>
