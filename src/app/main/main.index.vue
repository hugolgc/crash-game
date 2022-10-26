<script setup lang="ts">
import { computed } from "vue";
import { gameStore } from "../../stores/game.store";
import MainHistory from "./main.history.vue";
import MainOdds from "./main.odds.vue";
import MainBar from "./main.bar.vue";

const animationSpeed = computed(
  () => `${gameStore.game.speedUpdate < 5 ? 1 : gameStore.game.speedUpdate}s`
);
</script>

<template>
  <main class="flex-1 flex flex-col p-8 space-y-8 overflow-hidden">
    <main-history />
    <main-odds />
    <main-bar />
  </main>
</template>

<style scoped>
main {
  background-image: url(../../assets/background.png);
  background-size: 100vh;
  background-repeat: repeat;
  animation: scroll v-bind(animationSpeed) linear infinite;
}

@keyframes scroll {
  0% {
    background-position: center 0vh;
  }
  100% {
    background-position: center 100vh;
  }
}
</style>