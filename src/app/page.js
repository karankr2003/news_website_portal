"use client";
import { useEffect, useState, useRef, useCallback, use } from "react";
import { fetchTopHeadlines, fetchByCategory, searchNews } from "../utils/newsApi";
import ArticleCard from "../components/ArticleCard";
import Header from "../components/Header";

const PAGE_SIZE = 12;

export default function Home({ searchParams }) {
  const params = use(searchParams);
  const { category = 'top-headlines', q = '', language = 'en' } = params || {};
  const selectedCategory = category;
  const query = q;
  const selectedLanguage = language;

  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);

  const observer = useRef();
  const lastArticleRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new window.IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prev => prev + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  // Reset articles when filters change
  useEffect(() => {
    setArticles([]);
    setPage(1);
    setHasMore(true);
    setError(null);
  }, [selectedCategory, query, selectedLanguage]);

  // Fetch articles
  useEffect(() => {
    let ignore = false;
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        let data;
        if (query) {
          data = await searchNews(query, page, PAGE_SIZE, selectedLanguage);
        } else if (selectedCategory === "top-headlines") {
          data = await fetchTopHeadlines(page, PAGE_SIZE, selectedLanguage);
        } else {
          data = await fetchByCategory(selectedCategory, page, PAGE_SIZE, selectedLanguage);
        }
        if (!ignore) {
          setArticles(prev => page === 1 ? (data.articles || []) : [...prev, ...(data.articles || [])]);
          setHasMore((data.articles || []).length === PAGE_SIZE);
        }
      } catch (e) {
        if (!ignore) setError("Failed to fetch news articles.");
      } finally {
        if (!ignore) setLoading(false);
      }
    };
    fetchArticles();
    return () => { ignore = true; };
  }, [selectedCategory, query, selectedLanguage, page]);

  return (
    <div className="min-h-screen font-sans flex flex-col" style={{ background: "var(--background-color)", color: "var(--font-color)" }}>
      {/* Header */}
      <Header selectedCategory={selectedCategory} />

      {/* Main Content */}
      <main className="flex-1 w-full max-w-6xl mx-auto p-4 flex flex-col gap-0">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-blue-700 m-0">{selectedCategory === "top-headlines" ? "Top Headlines" : selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1) + " News"}</h2>
        {/* Error/Empty State */}
        <div className="w-full flex justify-center items-center min-h-[60px]">
          {error && <span className="text-red-500">{error}</span>}
        </div>
        {/* News List */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {!error && articles.length === 0 && !loading && (
            <div className="col-span-full text-center text-gray-400">No news articles found.</div>
          )}
          {articles.map((article, i) => {
            if (i === articles.length - 1) {
              return <div ref={lastArticleRef} key={i}><ArticleCard article={article} index={i} /></div>;
            }
            return <ArticleCard key={i} article={article} index={i} />;
          })}
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full text-center text-xs text-gray-400 py-4 border-t border-gray-100 mt-8">
        &copy; {new Date().getFullYear()} News Portal. Powered by Next.js & NewsAPI.org.
      </footer>
    </div>
  );
}
