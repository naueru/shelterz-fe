<script setup lang="ts">
// Constants
import { RESOURCES } from '../../../constants/shelters'

defineProps<{}>()
</script>

<template>
  <ul class="theHUDBarList">
    <li v-for="item in RESOURCES" class="theHUDBarListItem">
      <p>{{ item.label }}: {{ item.amount }}</p>
    </li>
    <li class="theHUDBarListItem">Envelop(+9)</li>
  </ul>
</template>

<style scoped>
.theHUDBarList {
  align-items: center;
  border-bottom: var(--color-nav-border) solid 2px;
  display: flex;
  flex: 0;
  gap: 2rem;
  height: 100%;
  min-height: 2rem;
  padding-inline: 2rem;
}

.theHUDBarListItem {
  color: var(--color-nav-text);
  display: flex;
  font-family: calibri;
  font-size: 18px;
  font-weight: 700;
  min-width: max-content;
  text-transform: uppercase;
}

.theHUDBarListItem:not(:last-child) {
  border-right: var(--color-nav-text) solid 2px;
  flex: 0;
  padding-right: 2rem;
}

.theHUDBarListItem:last-child {
  flex: 1;
  justify-content: end;
}

@media (min-width: 1024px) {
}
</style>
