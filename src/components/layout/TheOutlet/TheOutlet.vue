<script setup lang="ts">
import { RouterView } from 'vue-router'

defineProps<{}>()
</script>

<template>
  <main class="outletContainer">
    <RouterView />
  </main>
</template>

<style scoped>
.outletContainer {
  background-color: var(--color-background);
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.outletContainer .outletContainer {
  background-color: var(--color-outlet-background);
}

@media (min-width: 1024px) {
}
</style>
