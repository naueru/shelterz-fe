<script setup lang="ts">
// Router
import { useRouter } from 'vue-router'

// Store
import store from '@/store/store'

// Components
import MenuButton from '@/components/ui/MenuButton/MenuButton.vue'

const router = useRouter()
const logOut = store((state) => state.logOut)

defineProps<{}>()
</script>

<template>
  <aside class="container">
    <nav class="menu">
      <MenuButton to="/" label="Dashboard" />
      <MenuButton to="/build" label="Build" />
      <MenuButton to="/research" label="Research" />
      <MenuButton to="/resources" label="Resources" />
      <MenuButton to="/assignments" label="Assignments" />
      <MenuButton to="/map" label="Map" />
      <MenuButton to="/military" label="Military" />
      <MenuButton to="/diplomacy" label="Diplomacy" />
      <MenuButton to="/about" label="About" />
      <button @click="() => logOut(router)">Log Out</button>
    </nav>
  </aside>
</template>

<style scoped>
.container {
  background: cadetblue;
  display: flex;
  padding: 2rem;
}
.menu {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

@media (min-width: 1024px) {
}
</style>
