<script setup lang="ts">
import { RouterView } from 'vue-router'

defineProps<{}>()
</script>

<template>
  <main class="container">
    <RouterView />
  </main>
</template>

<style scoped>
.container {
  background: blueviolet;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

@media (min-width: 1024px) {
}
</style>
