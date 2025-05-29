<template>
  <header>
    <nav class="bg-gray-800">
      <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="relative flex h-16 items-center justify-between">
          <div
            class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
          >
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <router-link
                  :to="`/product`"
                  class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                >
                  Produkty
                </router-link>

                <router-link
                  :to="`/admin/product/create`"
                  class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white"
                >
                  Pridať produkt
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
