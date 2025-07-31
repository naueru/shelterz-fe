<script setup lang="ts">
// Router
import { useRouter } from 'vue-router'

// Store
import store from '@/store/store'

// Components
import SignupForm from '@/components/features/signup/SignupForm.vue'
import Card from '../components/ui/card/Card.vue'

const router = useRouter()

const signup = store((state) => state.signup)

function handleSubmit(data: Record<string, string>) {
  signup(data.userName, data.email, data.password, data.image, router)
}
</script>

<template>
  <div class="signupViewContainer">
    <Card>
      <SignupForm :onSubmit="handleSubmit" />
    </Card>
  </div>
</template>

<style scoped>
.signupViewContainer {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
}
</style>
