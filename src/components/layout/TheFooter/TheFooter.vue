<script setup lang="ts">
defineProps<{}>()
</script>

<template>
  <footer class="container">
    <div class="content">
      <p>Shelterz - A post apocalyptic managment game</p>
    </div>
  </footer>
</template>

<style scoped>
.container {
  align-items: center;
  background-color: var(--color-footer-background);
  display: flex;
  justify-content: center;
}

.content {
  align-items: center;
  display: flex;
  justify-content: center;
  max-width: 1500px;
}

@media (min-width: 1024px) {
}
</style>
