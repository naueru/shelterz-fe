<script setup lang="ts">
import { ref, watch } from 'vue'

// Components
import Field from '@/components/ui/field/Field.vue'
import Headline from '@/components/ui/headline/Headline.vue'
import Button from '@/components/ui/button/Button.vue'

interface FieldDefinition {
  label: string
  name: string
  type?: string
  error?: string
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
  <form @submit="onSubmit" class="formContainer">
    <slot name="header" v-if="!!title">
      <Headline v-if="title">{{ title }}</Headline>
    </slot>

    <Field
      v-for="field in fields"
      :key="field.name"
      :label="field.label"
      :name="field.name"
      :type="field.type"
      :modelValue="formData[field.name]"
      :error="field.error"
      @update:modelValue="(value) => updateField(field.name, value)"
    />
    <slot name="footer">
      <div class="formActions">
        <Button type="submit">{{ submitLabel || 'Submit' }}</Button>
        <Button
          v-if="!!cancelLabel && !!handleCancel"
          type="button"
          @click="handleCancel"
          secondary
        >
          {{ cancelLabel || 'Cancel' }}
        </Button>
      </div>
    </slot>
  </form>
</template>

<style scoped>
.formContainer {
  align-items: center;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  max-width: 400px;
}

.formActions {
  display: flex;
  gap: 1rem;
}
</style>
