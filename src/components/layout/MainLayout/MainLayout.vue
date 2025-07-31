<script setup lang="ts">
// Core
import { ref, onMounted, watch } from 'vue'

// Router
import { useRoute } from 'vue-router'

// Components
import TheHeader from '@/components/layout/TheHeader/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter/TheFooter.vue'
import TheMenu from '@/components/layout/TheMenu/TheMenu.vue'
import TheOutlet from '@/components/layout/TheOutlet/TheOutlet.vue'
import TheHUDBar from '../TheHUDBar/TheHUDBar.vue'

// Constants
import { ROUTES } from '../../../constants/routes'

const outletContentRef = ref<HTMLElement | null>(null)

const route = useRoute()

const getTop = () =>
  'calc(2rem + 4px + ' + ROUTES.findIndex((r) => r.to === route.path) * 46 + 'px)'

onMounted(() => {
  if (outletContentRef.value) {
    outletContentRef.value.style.setProperty('--after-top', getTop())
  }
})

// If route changes later
watch(route, () => {
  if (outletContentRef.value) {
    outletContentRef.value.style.setProperty('--after-top', getTop())
  }
})
</script>

<template>
  <TheHeader msg="The post apocalyptic managment game" />
  <div class="mainSectionWrapper">
    <div class="mainSectionContainer">
      <TheMenu />
      <div class="outletContentContainer" ref="outletContentRef">
        <TheHUDBar />
        <TheOutlet />
      </div>
    </div>
  </div>
  <TheFooter />
</template>

<style scoped>
.mainSectionWrapper {
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
}

.mainSectionContainer {
  display: flex;
  flex: 1;
  gap: 2rem;
  max-width: 1500px;
  width: 100%;
}

.outletContentContainer {
  background-color: var(--color-outlet-background);
  border: var(--color-accent-border) 2px solid;
  display: flex;
  flex-direction: column;
  height: calc(100% - 2rem);
  position: relative;
  width: 100%;
}

.outletContentContainer::after {
  background-color: var(--color-outlet-background);
  border-left: var(--color-accent-border) 2px solid;
  border-top: var(--color-accent-border) 2px solid;
  clip-path: polygon(0 0, 100% 0, 0 100%);
  content: '';
  height: 16px;
  left: -9px;
  position: absolute;
  top: var(--after-top, 0);
  transform: rotate(-45deg);
  transition-duration: 300ms;
  transition-property: top;
  transition: ease-in-out;
  width: 16px;
}

@media (min-width: 1024px) {
}
</style>
