import { createRouter, createWebHistory } from "vue-router";
import ProductIndex from "@/views/shop/product/Index.vue";
import ProductShow from "@/views/shop/product/Show.vue";
import AdminProductForm from "@/views/admin/product/Form.vue";
import AdminProductIndex from "@/views/admin/product/Index.vue";

const routes = [
  // admin
  {
    path: "/admin/product",
    name: "AdminProductIndex",
    component: AdminProductIndex,
  },
  {
    path: "/admin/product/create",
    name: "AdminProductCreate",
    component: AdminProductForm,
  },
  {
    path: "/admin/product/:id",
    name: "AdminProductEdit",
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
