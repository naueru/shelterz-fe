<script setup lang="ts">
// Components
import TheHeader from '@/components/layout/TheHeader/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter/TheFooter.vue'
import TheOutlet from '@/components/layout/TheOutlet/TheOutlet.vue'
</script>

<template>
  <TheHeader msg="The post apocalyptic managment game" />
  <div class="mainSectionWrapper">
    <div class="mainSectionContainer">
      <TheOutlet />
    </div>
  </div>
  <TheFooter />
</template>

<style scoped>
.mainSectionWrapper {
  display: flex;
  flex: 1;
  justify-content: center;
}
.mainSectionContainer {
  display: flex;
  flex: 1;
  max-width: 1500px;
}

@media (min-width: 1024px) {
}
</style>
