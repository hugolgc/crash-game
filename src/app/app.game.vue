<script setup lang="ts">
import AsideIndex from "./aside/aside.index.vue";
import MainIndex from "./main/main.index.vue";
</script>

<template>
  <div class="h-screen flex flex-col-reverse limit:flex-row">
    <aside-index />
    <main-index />
  </div>
</template>