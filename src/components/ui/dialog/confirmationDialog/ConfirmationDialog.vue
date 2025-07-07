<script setup lang="ts">
// Components
import Card from '@/components/ui/card/Card.vue'
import Headline from '@/components/ui/headline/Headline.vue'

defineProps<{
  title?: string
  onConfirm: () => void
  onCancel?: () => void
  confirmLabel?: string
  cancelLabel?: string
}>()
</script>

<template>
  <Card>
    <template v-if="!!title" #header>
      <Headline>{{ title }}</Headline>
    </template>

    <div class="content"><slot></slot></div>

    <template #footer>
      <div class="actions">
        <button class="actionButton" @click="onConfirm">{{ confirmLabel || 'Ok' }}</button>
        <button v-if="!!onCancel" class="actionButton" @click="onCancel">
          {{ cancelLabel || 'Cancel' }}
        </button>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.content {
  display: flex;
}

.actions {
  display: flex;
}

.actionButton {
  display: flex;
}
</style>
