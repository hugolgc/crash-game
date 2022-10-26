<script setup lang="ts">
import { gameStore } from "../../stores/game.store";
</script>

<template>
  <label class="p-1 bg-neutral-900 rounded-md">
    <p class="flex justify-between bg-neutral-800 rounded">
      <span class="p-3">{{ gameStore.game.amount - 1500 < 0 ? '' : '+' }}{{ (gameStore.game.amount - 1500).toFixed(2) }}€</span>
      <span class="p-3">{{ gameStore.game.amount.toFixed(2) }}€</span>
    </p>
  </label>
</template>