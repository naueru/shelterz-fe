<script setup lang="ts">
import { ref } from 'vue'

// Router
import { useRouter } from 'vue-router'

// Components
import Form from '@/components/ui/form/Form.vue'

// Types
import type { IObject } from '../../../types/generics'

const router = useRouter()

const goToLogin = () => {
  router.push({ name: 'login' })
}

const props = defineProps<{
  onSubmit: (data: IObject) => void
}>()

const signupFields = [
  {
    label: 'Image',
    name: 'image',
    type: 'imageSelect',
    options: [
      { label: 'The Sherif', value: 'sherif' },
      { label: 'The Redneck', value: 'redneck' },
    ],
  },
  { label: 'Username', name: 'userName' },
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Password', name: 'password', type: 'password' },
  { label: 'Confirm Password', name: 'confirmPassword', type: 'password' },
]

const formData = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  image: 'redneck',
})

const handleSubmit = (data: IObject) => {
  props.onSubmit(data)
}
</script>

<template>
  <Form
    :fields="signupFields"
    v-model="formData"
    title="Sign Up"
    @submit="handleSubmit"
    submit-label="Sign up"
    cancel-label="or Login"
    :handle-cancel="goToLogin"
  ></Form>
</template>
