<script setup lang="ts">
defineProps<{}>()
</script>

<template>
  <h3 class="headlineContainer"><slot></slot></h3>
</template>

<style scoped>
.headlineContainer {
  display: flex;
  font-size: 20px;
}
</style>
