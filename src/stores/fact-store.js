import { defineStore } from 'pinia'
import { fetchNewsArticles } from '@/api/news-service'
import { generateFunnyFact } from '@/api/gemini-service'

export const useFactStore = defineStore('factStore', {
  state: () => ({
    facts: [],
    loading: false,
    error: null,
  }),
  actions: {
    async loadFunnyFacts() {
      this.facts = []
      this.loading = true
      this.error = null

      try {
        const articles = await fetchNewsArticles()

        for (const article of articles) {
          const funnyFact = await generateFunnyFact(article.title)

          this.facts.push({
            originalFact: article.title,
            funnyFact,
            source: article.source.name,
            originalLink: article.url,
            publicationDate: new Date(article.publishedAt).toLocaleDateString(),
          })
        }
      } catch (err) {
        this.error = 'Failed to fetch funny facts.'
      } finally {
        this.loading = false
      }
    },
  },
})
