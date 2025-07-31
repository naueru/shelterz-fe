<script setup lang="ts">
// Router
import { useRouter } from 'vue-router'

// Store
import store from '@/store/store'

// Component
import LoginForm from '@/components/features/login/LoginForm.vue'
import Card from '@/components/ui/card/Card.vue'

const router = useRouter()

const login = store((state) => state.login)

function handleSubmit(data: Record<string, string>) {
  login(data.email, data.password, router)
}
</script>

<template>
  <div class="loginViewContainer">
    <Card>
      <LoginForm :onSubmit="handleSubmit" />
    </Card>
  </div>
</template>

<style scoped>
.loginViewContainer {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
}
</style>
