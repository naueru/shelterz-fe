<script setup lang="ts">
defineProps<{
  label: string
  name: string
  modelValue: string
  type?: HTMLInputElement['type']
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="container">
    <label :for="`field_${name}`">{{ label }}</label>
    <input :type="type" :id="`field_${name}`" :name="name" :value="modelValue" @input="onInput" />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

@media (min-width: 1024px) {
}
</style>
