<script setup lang="ts">
import Spinner from '@/components/ui/spinner/Spinner.vue'

const {
  disabled,
  loading,
  secondary = false,
} = defineProps<{
  disabled?: boolean
  loading?: boolean
  type?: HTMLButtonElement['type']
  secondary?: boolean
}>()

const emit = defineEmits(['click'])

function handleClick(event: MouseEvent) {
  if (!disabled && !loading) {
    emit('click', event)
  }
}
</script>

<template>
  <button
    :disabled="disabled || loading"
    :class="[
      'buttonContainer',
      { butonLoading: loading, butonDisabled: disabled, secondaryButton: secondary },
    ]"
    @click="handleClick"
  >
    <Spinner v-if="loading"></Spinner>
    <slot v-else></slot>
  </button>
</template>

<style scoped>
.buttonContainer {
  background-color: var(--blue-500);
  border-radius: 0.375rem;
  border: none;
  color: white;
  cursor: pointer;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease;
}

.secondaryButton {
  background-color: inherit;
  color: var(--blue-500);
}

.buttonContainer:hover:not(.butonDisabled):not(.butonLoading) {
  opacity: 0.8;
}

.butonDisabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.butonLoading {
  cursor: wait;
}
</style>
