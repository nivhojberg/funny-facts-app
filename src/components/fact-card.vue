<template>
  <div class="fact-card">
    <p><b>Funny fact:</b> {{ fact.funnyFact }}</p>
    <p><b>Source:</b> {{ fact.source }}</p>
    <p>
      <b>Original link: </b>
      <a :href="fact.originalLink" target="_blank">{{ fact.originalLink }}</a>
    </p>
    <p><b>Publication date:</b> {{ fact.publicationDate }}</p>
  </div>
</template>

<script setup>
defineProps({ fact: Object })
</script>

<style scoped>
.fact-card {
  border: 1px solid #ddd;
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
}

p {
  word-wrap: break-word;
}

b {
  font-weight: bold;
}
</style>
