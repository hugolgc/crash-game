<script setup lang="ts">
import { gameStore } from "../../stores/game.store";
</script>

<template>
  <label class="grid grid-cols-6 gap-1 p-1 bg-neutral-900 rounded-md">
    <input
      v-model.number="gameStore.game.betInput"
      type="number"
      placeholder="0,00"
      class="col-span-3 p-3 bg-transparent placeholder:text-neutral-400"
    />
    <button
      @click="gameStore.game.betInput = gameStore.game.betInput / 2"
      class="bg-neutral-800 rounded"
    >1/2</button>
    <button
      @click="gameStore.game.betInput = gameStore.game.betInput * 2"
      class="bg-neutral-800 rounded"
    >x2</button>
    <button
      @click="gameStore.game.betInput = gameStore.game.amount"
      class="bg-neutral-800 rounded"
    >Max</button>
  </label>
</template>