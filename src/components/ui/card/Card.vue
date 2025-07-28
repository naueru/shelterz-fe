<script setup lang="ts"></script>

<template>
  <div class="cardContainer">
    <header v-if="$slots.header">
      <slot name="header"></slot>
    </header>

    <section class="cardContent">
      <slot></slot>
    </section>

    <footer v-if="$slots.footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
.cardContainer {
  background-color: var(--color-dialog-background);
  border-radius: 16px;
  box-shadow: var(--shadow-small);
  display: flex;
  height: fit-content;
  padding: 2rem;
  width: fit-content;
}

.cardContent {
  background-color: inherit;
}
</style>
