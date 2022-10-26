<script setup lang="ts">
import { gameStore } from "../../stores/game.store";
</script>

<template>
  <section class="flex-1 flex">
    <h1 class="m-auto text-[20vw] limit:text-[10vw] font-semibold leading-none">{{ gameStore.game.oddsToShow.toFixed(2).replace('.', ',') }}</h1>
  </section>
</template>