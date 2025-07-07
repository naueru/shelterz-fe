<script setup lang="ts">
// Components
import SignupForm from '@/components/features/signup/SignupForm.vue'
import Card from '../components/ui/card/Card.vue'
</script>

<template>
  <div class="signupContainer">
    <Card>
      <SignupForm />
    </Card>
  </div>
</template>

<style scoped>
.signupContainer {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
}
</style>
