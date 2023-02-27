import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";
import router from "./router/router";
// eslint-disable-next-line import/order
import { createI18n } from "vue-i18n";

const i18n = createI18n({
  // something vue-i18n options here ...
});

createApp(App).use(i18n).use(router).mount("#app");
