<script setup lang="ts">
import { gameStore } from "../../stores/game.store";
import { gameHelper } from "../../helpers/game.helper";
</script>

<template>
  <ul class="h-10 flex justify-end space-x-4 overflow-hidden">
    <li
      v-for="odds in gameStore.game.history"
      :class="gameHelper.getColorByOdds(odds)"
      class="px-4 py-2 rounded-md"
    >{{ odds.toFixed(2).replace('.', ',') }}</li>
  </ul>
</template>