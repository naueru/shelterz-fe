<script setup lang="ts">
import { ref } from 'vue'

// Router
import { useRouter } from 'vue-router'

// Components
import Form from '@/components/ui/form/Form.vue'

// Types
import type { IObject } from '@/types/generics'

const router = useRouter()

const goToSignup = () => {
  router.push({ name: 'signup' })
}

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

const handleSubmit = (data: IObject) => {
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
    cancel-label="or Signup"
    :handle-cancel="goToSignup"
  ></Form>
</template>
