import { GoogleGenerativeAI } from '@google/generative-ai'

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(API_KEY)

export async function generateFunnyFact(article) {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })
    const result = await model.generateContent(
      `Make a funny short paragraph from this news: "${article}" and output only the result`,
    )
    return result.response.text()
  } catch (error) {
    console.error('Error generating funny fact:', error)
    return 'Could not generate a funny fact.'
  }
}
