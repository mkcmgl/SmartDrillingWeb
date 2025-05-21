// import './assets/main.css'

import { createApp } from "vue";
import { createPinia } from "pinia";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// import "golden-layout/dist/css/themes/goldenlayout-light-theme.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia()).use(ElementPlus);
app.use(router);

app.mount("#app");
