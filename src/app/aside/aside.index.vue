<script setup lang="ts">
import AsideSwitch from "./aside.switch.vue";
import AsideInput from "./aside.input.vue";
import AsideAmount from "./aside.amount.vue";
import AsideButton from "./aside.button.vue";
</script>

<template>
  <aside class="limit:w-[26rem] flex-none flex flex-col p-8 space-y-8 bg-neutral-800">
    <aside-switch />
    <aside-input />
    <aside-amount />
    <aside-button />
  </aside>
</template>