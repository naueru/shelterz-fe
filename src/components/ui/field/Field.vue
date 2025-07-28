<script setup lang="ts">
defineProps<{
  label: string
  name: string
  modelValue: string
  type?: HTMLInputElement['type']
  error?: string
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
  <div class="fieldContainer" :class="{ fieldErrorBorder: !!error }">
    <div class="fieldLabelWrapper">
      <label :for="`field_${name}`" class="fieldLabel" :class="{ fieldError: !!error }">{{
        label
      }}</label>
    </div>
    <input
      :type="type"
      :id="`field_${name}`"
      :name="name"
      :value="modelValue"
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

@media (min-width: 1024px) {
}
</style>
