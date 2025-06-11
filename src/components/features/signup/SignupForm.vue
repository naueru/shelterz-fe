<script setup lang="ts">
import { ref } from 'vue'

// Router
import { useRouter } from 'vue-router'

// Components
import Form from '@/components/ui/form/Form.vue'

const router = useRouter()

function goToLogin() {
  router.push({ name: 'login' })
}

const signupFields = [
  { label: 'Username', name: 'username' },
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Password', name: 'password', type: 'password' },
  { label: 'Confirm Password', name: 'confirmPassword', type: 'password' },
]

const formData = ref({
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
})

function handleSubmit(data: Record<string, string>) {
  console.log('Signup submitted:', data)
  // Add your signup logic here
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
