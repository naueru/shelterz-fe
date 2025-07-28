<script setup lang="ts">
import type { ISelectOption } from '../../../types/generics'

export interface FieldDefinition {
  label: string
  name: string
  modelValue: string
  type?: HTMLInputElement['type'] | 'select'
  placeholder?: string
  error?: string
  options?: ISelectOption[]
}

defineProps<FieldDefinition>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="fieldContainer" :class="{ fieldErrorBorder: !!error }">
    <div class="fieldLabelWrapper">
      <label :for="`field_${name}`" class="fieldLabel" :class="{ fieldError: !!error }">{{
        label
      }}</label>
    </div>
    <select
      v-if="type === 'select'"
      :id="`field_${name}`"
      :name="name"
      :value="modelValue"
      @input="onInput"
      class="fieldInput"
      :class="{ fieldErrorBorder: !!error }"
    >
      <option v-for="option in options" :value="option.value">{{ option.label }}</option>
    </select>
    <div v-if="type === 'imageSelect'" class="selectImageWrapper">
      <img :src="`/src/assets/avatars/${modelValue}.svg`" class="selectImageImage" />
      <select
        :id="`field_${name}`"
        :name="name"
        :value="modelValue"
        @input="onInput"
        class="fieldInput"
        :class="{ fieldErrorBorder: !!error }"
      >
        <option v-for="option in options" :value="option.value">{{ option.label }}</option>
      </select>
    </div>
    <input
      v-else
      :type="type"
      :id="`field_${name}`"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      @input="onInput"
      class="fieldInput"
      :class="{ fieldErrorBorder: !!error }"
    />
    <div class="fieldErrorLabelWrapper" v-if="!!error">
      <p class="fieldErrorLabel" :title="error">{{ error }}</p>
    </div>
  </div>
</template>

<style scoped>
.fieldContainer {
  background-color: inherit;
  border-radius: 6px;
  border-style: solid;
  border-width: 1px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-block: 8px;
  padding-inline: 8px;
  position: relative;
  width: 100%;
}

.fieldLabelWrapper {
  align-self: flex-start;
  background-color: inherit;
  left: 10px;
  padding-inline: 8px;
  position: absolute;
  top: -10px;
}

.fieldLabel {
  font-size: 14px;
  font-weight: bold;
  text-align: left;
}

.fieldInput {
  background-color: inherit;
  border-width: 1px;
  border: none;
  font-size: 16px;
  padding-block: 4px;
  padding-inline: 8px;
}

.centered {
  text-align: center;
}

.fieldErrorLabelWrapper {
  align-self: flex-start;
  background-color: inherit;
  bottom: -10px;
  max-width: calc(90% - 16px);
  padding-inline: 8px;
  position: absolute;
  right: 10px;
}

.fieldErrorLabel {
  box-sizing: border-box;
  color: var(--color-error);
  font-size: 12px;
  max-width: 100%;
  overflow: hidden;
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.fieldError {
  color: var(--color-error);
}

.fieldErrorBorder {
  border-color: var(--color-error);
}

.selectImageWrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
}

.selectImageImage {
  border-color: black;
  border-width: 1px;
  border-style: solid;
  border-radius: 8px;
  overflow: hidden;
  height: 100px;
  width: 100px;
}

@media (min-width: 1024px) {
}
</style>
