<script setup lang="ts">
import { ref } from 'vue'

// Components
import Form from '@/components/ui/form/Form.vue'

// Types
import type { IObject } from '@/types/generics'

const props = defineProps<{
  onSubmit: (data: IObject) => void
}>()

const loginFields = [
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Password', name: 'password', type: 'password' },
]

const formData = ref({
  email: '',
  password: '',
})

function handleSubmit(data: Record<string, string>) {
  props.onSubmit(data)
}
</script>

<template>
  <Form
    :fields="loginFields"
    v-model="formData"
    title="Login"
    @submit="handleSubmit"
    submit-label="Login"
  ></Form>
</template>
