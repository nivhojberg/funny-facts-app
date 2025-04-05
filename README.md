# funny-facts-app

A Vue 3 web app that fetches real news articles and turns them into hilarious fake headlines using Google Gemini (LLM) API. Articles are streamed to the user progressively for a smoother experience.

---

## 🚀 Features

- 🔥 Fetches 10 real news articles from a public news API
- 😂 Uses Google Gemini API to generate funny versions of headlines
- 🌊 Streams facts as they're generated, no need to wait for all at once
- 🎨 Clean and responsive UI using Vue 3 and component-based architecture
- 🧠 State management with Pinia
- 🧪 Component documentation and previews with Storybook

---

## 🛠️ Tech Stack

| Layer         | Tech                                    |
| ------------- | --------------------------------------- |
| Frontend      | Vue 3, Vite                             |
| State Mgmt    | Pinia                                   |
| UI Components | Storybook, Tailwind CSS (optional)      |
| AI API        | Google Gemini (`@google/generative-ai`) |
| News Source   | NewsAPI.org                             |

---

## 🧰 Setup Instructions

### 1. **Clone the Repository**

```bash
git clone https://github.com/nivhojberg/funny-facts-app.git
cd funny-facts-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Add API Keys

Create a `.env` file in the root:

```
VITE_NEWS_API_KEY=your_newsapi_key_here
VITE_GEMINI_API_KEY=your_google_gemini_key_here
```

🔑 Get a free News API key at https://newsapi.org

🔑 Get a Gemini API key from https://ai.google.dev

### 4. Run the App

```bash
npm run dev
```

Open your browser at `http://localhost:5173`

---

📖 Storybook (Component Explorer)

To explore individual UI components:

```bash
npm run storybook
```

Opens at: http://localhost:6006

---

🌊 Streaming Mode
This app includes a bonus feature: streaming each fact as it's generated.

The app loads and displays each funny headline one-by-one.

No full-page reloads or blocking.

Achieved using reactive state updates in a loop (client-side streaming).

---

🙌 Acknowledgements

- [Vue 3 Docs](https://vuejs.org/)
- [Pinia Docs](https://pinia.vuejs.org/)
- [Storybook](https://storybook.js.org/)
- [News API](https://newsapi.org/)
- [Google Gemini API](https://ai.google.dev/)
