<script setup lang="ts">
import { ref, watch } from 'vue'

// Components
import Field from '@/components/ui/field/Field.vue'

interface FieldDefinition {
  label: string
  name: string
  type?: string
}

const props = defineProps<{
  fields: FieldDefinition[]
  modelValue: Record<string, string>
  title?: string
  submitLabel?: string
  cancelLabel?: string
  handleCancel?: () => void
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: Record<string, string>): void
  (e: 'submit', data: Record<string, string>): void
}>()

// Local copy of form data to bind inputs
const formData = ref({ ...props.modelValue })

// Watch for external modelValue changes
watch(
  () => props.modelValue,
  (newVal) => {
    formData.value = { ...newVal }
  },
)

// Update parent on input change
function updateField(name: string, value: string) {
  formData.value[name] = value
  emit('update:modelValue', { ...formData.value })
}

function onSubmit(e: Event) {
  e.preventDefault()
  emit('submit', { ...formData.value })
}
</script>

<template>
  <form @submit="onSubmit" class="container">
    <h2 v-if="title">{{ title }}</h2>
    <Field
      v-for="field in fields"
      :key="field.name"
      :label="field.label"
      :name="field.name"
      :type="field.type"
      :modelValue="formData[field.name]"
      @update:modelValue="(value) => updateField(field.name, value)"
    />
    <button type="submit">{{ submitLabel || 'Submit' }}</button>
    <button v-if="!!cancelLabel && !!handleCancel" type="button" @click="handleCancel">
      {{ cancelLabel || 'Cancel' }}
    </button>
  </form>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
}
</style>
