import { createRouter, createWebHistory } from "vue-router";
import CartFirst from "@/views/shop/cart/First.vue";
import ProductIndex from "@/views/shop/product/Index.vue";
import ProductShow from "@/views/shop/product/Show.vue";
import OrderSuccess from "@/views/shop/order/Success.vue";
import OrderIndex from "@/views/shop/order/Index.vue";
import AdminProductForm from "@/views/admin/product/Form.vue";
import AdminProductIndex from "@/views/admin/product/Index.vue";
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";
import { useAuthStore } from "@/stores/auth/authStore";

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
  {
    path: "/cart",
    name: "CartFirst",
    component: CartFirst,
  },
  {
    path: "/order/success",
    name: "OrderSuccess",
    component: OrderSuccess,
  },
  {
    path: "/order",
    name: "OrderIndex",
    component: OrderIndex,
  },
  // auth
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (!authStore.getLocalAuthUser() && to.path.includes("/admin")) {
    return next({ name: 'Login' })
  } else {
    return next();
  }
});

export default router;
