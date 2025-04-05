import axios from 'axios'

const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines'
const API_KEY = import.meta.env.VITE_NEWS_API_KEY

export async function fetchNewsArticles() {
  try {
    const response = await axios.get(NEWS_API_URL, {
      params: { pageSize: 10, apiKey: API_KEY, sources: 'bbc-news' },
    })
    return response.data.articles
  } catch (error) {
    console.error('Error fetching news:', error)
    return []
  }
}
