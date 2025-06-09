import { createApp } from "vue";
import App from "@/App.vue";
import { createPinia } from "pinia";
import router from "@/plugins/router.ts";

import "@/assets/css/main.css";

const app = createApp(App);

app.use(createPinia()).use(router).mount("#app");
