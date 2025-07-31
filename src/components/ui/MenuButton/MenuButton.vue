<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  selected?: boolean
  label: string
  to: string
  onClick?: () => void
}>()
</script>

<template>
  <RouterLink :to="to" @click="onClick">
    <div :class="{ menuButtonBorder: true, menuButtonBorderSelected: selected }">
      <div class="menuButtonContent">
        <span class="menuButtonLabel">{{ label }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.container {
  display: flex;
}

.menuButtonBorder {
  align-items: center;
  background-color: black;
  clip-path: polygon(
    6px 0,
    calc(100% - 6px) 0,
    100% 6px,
    100% calc(100% - 6px),
    calc(100% - 6px) 100%,
    6px 100%,
    0 calc(100% - 6px),
    0 6px
  );
  display: flex;
  height: 30px;
  justify-content: center;
}

.menuButtonBorder.menuButtonBorderSelected {
  filter: hue-rotate(45deg);
}

.menuButtonContent {
  align-items: center;
  background-image: url(/src/assets/img/bands.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  clip-path: polygon(
    5px 0,
    calc(100% - 5px) 0,
    100% 5px,
    100% calc(100% - 5px),
    calc(100% - 5px) 100%,
    5px 100%,
    0 calc(100% - 5px),
    0 5px
  );
  display: flex;
  flex: 1;
  height: 100%;
  justify-content: center;
  max-height: calc(100% - 4px);
  max-width: calc(100% - 4px);
  padding-inline: 1rem;
  position: relative;
}

.menuButtonContent::before {
  background-color: var(--color-black-nav-button-overlay);
  content: '';
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 1;
}

.menuButtonContent:hover::before {
  filter: opacity(0);
}

.menuButtonLabel {
  color: var(--color-nav-text);
  font-family: Calibri;
  font-weight: 700;
  text-transform: uppercase;
  z-index: 2;
}

@media (min-width: 1024px) {
}
</style>
