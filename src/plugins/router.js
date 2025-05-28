import { createRouter, createWebHistory } from "vue-router";
import ProductIndex from "@/views/product/Index.vue";
import ProductShow from "@/views/product/Show.vue";

const routes = [
  {
    path: "/product",
    name: "ProductIndex",
    component: ProductIndex,
  },
  {
    path: "/product/:id",
    name: "ProductShow",
    component: ProductShow,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
