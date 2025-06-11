<script setup lang="ts">
// Router
import { useRouter } from 'vue-router'

// Store
import store from '@/store/store'

// Component
import LoginForm from '@/components/features/login/LoginForm.vue'

const router = useRouter()

const login = store((state) => state.login)
const token = store((state) => state.token)

function handleSubmit(data: Record<string, string>) {
  login(data.email, data.password, router)
}
</script>

<template>{{ token }}<LoginForm :onSubmit="handleSubmit" /></template>
