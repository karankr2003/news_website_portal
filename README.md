# News Website Portal

A modern, responsive news portal built with Next.js, React, and TailwindCSS. Fetches and displays news articles from NewsAPI.org, with features like category filtering, search, infinite scroll, dark mode, multi-language support, and robust unit testing.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/news-website-portal.git
cd news-website-portal/news-website-portal
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env.local` file in the root of the `news-website-portal` directory and add your NewsAPI key:
```env
NEWS_API_KEY=your_newsapi_key_here
```

### 4. Run the Development Server
```bash
npm run dev
```
Visit [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Run Tests
```bash
npm test
```

---

## ✨ Features Implemented

- **Top Headlines:** Homepage displays trending news articles.
- **Category Navigation:** Filter news by categories (Business, Technology, Sports, etc.).
- **Search:** Search for news articles by keyword.
- **News Details Page:** Click an article to view full content and details.
- **Infinite Scroll (Pagination):** More articles automatically load as you scroll to the bottom of the page. No pagination buttons are used.
- **Loading & Error Handling:** User-friendly loading indicators and error messages.
- **Dark Mode:** Toggle between light and dark themes (preference saved).
- **Multi-language Support:** Select news language from a dropdown.
- **Responsive Design:** Mobile-friendly and clean UI with TailwindCSS.
- **Unit Testing:** Comprehensive tests for API calls, components, and user interactions using Jest and React Testing Library.

---

## 🛠️ Tech Stack
- **Framework:** Next.js 15+
- **UI:** React, TailwindCSS
- **API:** NewsAPI.org (Fetch API)
- **State Management:** React Hooks
- **Routing:** Next.js App Router
- **Testing:** Jest, React Testing Library

---

## 📂 Project Structure
- `src/app/` — App pages and routing
- `src/components/` — Reusable UI components
- `src/utils/` — API utility functions
- `src/test/` — Unit tests

---

## 🧪 Testing
- Run all tests: `npm test`
- Tests cover API utilities, component rendering, user interactions, and more.

---

## 🙏 Acknowledgements
- [Next.js](https://nextjs.org/)
- [NewsAPI.org](https://newsapi.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/)
