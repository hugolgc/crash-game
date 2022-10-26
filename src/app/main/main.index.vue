<script setup lang="ts">
import MainHistory from "./main.history.vue";
import MainOdds from "./main.odds.vue";
import MainBar from "./main.bar.vue";
</script>

<template>
  <main class="flex-1 flex flex-col p-8 space-y-8 overflow-hidden">
    <main-history />
    <main-odds />
    <main-bar />
  </main>
</template>