import { createApp } from "vue";
import { router } from "./routers";
import AppIndex from "./app/app.index.vue";
import "./assets/main.css";

const app = createApp(AppIndex);

app.use(router);
app.mount("#crash-game");
