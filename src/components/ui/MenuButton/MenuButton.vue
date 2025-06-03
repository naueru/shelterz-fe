<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  label: string
  to: string
}>()
</script>

<template>
  <RouterLink :to="to">{{ label }}</RouterLink>
</template>

<style scoped>
.container {
  display: flex;
}

@media (min-width: 1024px) {
}
</style>
