<template>
  <div class="content-container">
    <Button :onClick="store.loadFunnyFacts" :disabled="store.loading" text="Load Funny Facts" />
    <p v-if="store.loading">Loading...</p>
    <p v-if="store.error">{{ store.error }}</p>
    <div class="facts-container">
      <TransitionGroup name="fade" tag="div">
        <FactCard v-for="fact in store.facts" :key="fact.originalLink" :fact="fact" />
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import { useFactStore } from '@/stores/fact-store'
import FactCard from '@/components/fact-card.vue'
import Button from '@/components/button.vue'

const store = useFactStore()
</script>

<style scoped>
.content-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.facts-container {
  height: 80vh;
  width: 80vw;
  overflow: auto;
}

@media screen and (max-width: 600px) {
  .facts-container {
    width: 90vw;
  }
}
</style>
