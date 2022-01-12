import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "jquery";
import "popper.js";
import "./assets/main.css";
import "bootstrap/dist/js/bootstrap.js";

createApp(App).use(router).mount("#app");
