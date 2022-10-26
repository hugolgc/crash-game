import { createRouter, createWebHistory } from "vue-router";
import AppGame from "../app/app.game.vue";

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "AppGame",
      component: AppGame,
    },
  ],
});
