<script setup lang="ts">
import Logo from '@/components/icons/logo.vue'

defineProps<{}>()
</script>

<template>
  <header class="theHeaderContainer">
    <h1 class="theHeaderTitle">
      <div class="theHeaderBackground"></div>
      <div class="theHeaderWrapper">
        <Logo :size-factor="0.4" />
      </div>
    </h1>
  </header>
</template>

<style scoped>
.theHeaderContainer {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
}

.theHeaderTitle {
  border: 2px solid var(--color-header-border);
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 250px;
  max-width: 1500px;
  width: 100%;
}

.theHeaderWrapper {
  align-items: center;
  background-color: var(--color-black-overlay);
  display: flex;
  grid-column-end: 2;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-row-start: 1;
  height: 100%;
  justify-content: center;
  position: relative;
}

.theHeaderBackground {
  background-image: url('@/assets/banner.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  filter: sepia(100%);
  grid-column-end: 2;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-row-start: 1;
  height: 100%;
  position: relative;
  width: 100%;
}

@media (min-width: 1024px) {
}
</style>
