import { createApp } from "vue";
import "./style.css";
// import ElementPlus from "element-plus";
// import "element-plus/dist/index.css";
import { createPinia } from "pinia";
import router from "./router/index";
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia()).use(router).mount("#app");
