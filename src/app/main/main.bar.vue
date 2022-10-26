<script setup lang="ts">
import { gameStore } from "../../stores/game.store";
</script>

<template>
  <span class="h-10 flex-none flex">
    <span
      v-if="!gameStore.game.status"
      class="h-full bg-neutral-800 rounded-md animate-load"
    ></span>
  </span>
</template>