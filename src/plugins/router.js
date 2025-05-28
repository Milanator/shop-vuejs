import { createRouter, createWebHistory } from "vue-router";
import ProductIndex from "@/views/shop/product/Index.vue";
import ProductShow from "@/views/shop/product/Show.vue";
import AdminProductForm from "@/views/admin/product/Form.vue";

const routes = [
  // admin
  {
    path: "/admin/product/create",
    name: "ProductCreate",
    component: AdminProductForm,
  },
  // admin
  {
    path: "/admin/product/:id",
    name: "ProductEdit",
    component: AdminProductForm,
  },
  // shop
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
