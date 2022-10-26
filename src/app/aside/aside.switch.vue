<script setup lang="ts">
import { gameStore } from "../../stores/game.store";
</script>

<template>
  <label class="relative grid grid-cols-2 gap-1 bg-neutral-900 rounded-md">
    <button
      @click="gameStore.game.preference = 'manual'"
      class="z-10 p-4"
    >Manuel</button>
    <button
      @click="gameStore.game.preference = 'auto'"
      class="z-10 p-4"
    >Auto</button>
    <span
      :class="gameStore.game.preference === 'manual' ? 'left-0' : 'left-1/2'"
      class="absolute inset-y-0 w-1/2 flex p-1 duration-200"
    >
      <span class="h-full w-full bg-neutral-800 rounded"></span>
    </span>
  </label>
</template>