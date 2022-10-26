<script setup lang="ts">
import { gameStore } from "../../stores/game.store";

function bet(): void {
  if (gameStore.game.betCurrent === 0) gameStore.bet();
}

function withdraw(): void {
  if (gameStore.game.betCurrent !== 0) gameStore.withdraw();
}
</script>

<template>
  <button
    v-if="!gameStore.game.status"
    @click="bet()"
    :class="gameStore.game.betCurrent === 0 ? 'bg-green-600' : 'bg-green-800 text-neutral-300 cursor-not-allowed'"
    class="p-4 rounded-md"
  >Miser {{ gameStore.game.betCurrent > 0 ? gameStore.game.betCurrent : gameStore.game.betInput }}€</button>
  <button
    v-if="gameStore.game.status"
    @click="withdraw()"
    :class="gameStore.game.betCurrent === 0 ? 'bg-red-800 text-neutral-300 cursor-not-allowed' : 'bg-red-600'"
    class="p-4 bg-red-600 rounded-md"
  >Retirer {{ (gameStore.game.betCurrent * gameStore.game.oddsToShow).toFixed(2) }}€</button>
</template>