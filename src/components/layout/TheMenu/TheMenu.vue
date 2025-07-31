<script setup lang="ts">
// Router
import { useRouter, useRoute } from 'vue-router'

// Store
import store from '@/store/store'

// Components
import MenuButton from '@/components/ui/MenuButton/MenuButton.vue'

// Constants
import { ROUTES } from '../../../constants/routes'

const route = useRoute()

const router = useRouter()
const logOut = store((state) => state.logOut)

defineProps<{}>()

const menuItems = [...ROUTES, { to: '/logout', label: 'Log Out', onclick: () => logOut(router) }]
</script>

<template>
  <aside class="theMenuContainer">
    <nav class="menu">
      <ul class="menuList">
        <li v-for="item in menuItems" class="menuListItem">
          <MenuButton
            :to="item.to"
            :label="item.label"
            @click="item.onclick"
            :selected="route.path === item.to"
          />
        </li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.theMenuContainer {
  align-items: center;
  background-color: var(--color-nav-border);
  clip-path: polygon(
    0 0,
    calc(100% - 20px) 0,
    100% 20px,
    100% 100%,
    20px 100%,
    0 calc(100% - 20px)
  );
  display: flex;
  height: calc(100% - 2rem);
  justify-content: center;
}

.menu {
  background-image: url(/src/assets/img/stone.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  clip-path: polygon(
    0 0,
    calc(100% - 20px) 0,
    100% 20px,
    100% 100%,
    20px 100%,
    0 calc(100% - 20px)
  );
  display: flex;
  height: 100%;
  max-height: calc(100% - 4px);
  max-width: calc(100% - 4px);
  padding: 2rem 1rem;
  width: 100%;
}

.menuList {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
}

.menuListItem:last-child {
  filter: hue-rotate(320deg);
  margin-top: auto;
}

@media (min-width: 1024px) {
}
</style>
