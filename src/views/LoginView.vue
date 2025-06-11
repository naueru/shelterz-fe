<script setup lang="ts">
// Router
import { useRouter } from 'vue-router'

// Store
import store from '@/store/store'

// Component
import LoginForm from '@/components/features/login/LoginForm.vue'

const router = useRouter()

const login = store((state) => state.login)

function handleSubmit(data: Record<string, string>) {
  login(data.email, data.password, router)
}
</script>

<template><LoginForm :onSubmit="handleSubmit" /></template>
