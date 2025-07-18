import React from "react";

function decodeArticle(encoded) {
  try {
    return JSON.parse(decodeURIComponent(atob(encoded)));
  } catch {
    return null;
  }
}

export default async function NewsDetailPage({ searchParams }) {
  const { data } = await searchParams;
  const article = data ? decodeArticle(data) : null;


  return (
    <div className="min-h-screen font-sans flex flex-col" style={{ background: "var(--background-color)", color: "var(--font-color)" }}>
      <div className="max-w-2xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
        {article.urlToImage && (
          <img src={article.urlToImage} alt={article.title} className="w-full h-64 object-cover rounded mb-4" />
        )}
        <div className="text-gray-600 mb-2">{article.source?.name} &middot; {article.publishedAt ? article.publishedAt.slice(0, 10) : ''}</div>
        <div className="mb-8 whitespace-pre-line text-lg">
          {article.content || article.description || "No full content available."}
        </div>
        <a href={article.url} target="_blank" rel="noopener noreferrer" className="block mt-8 text-blue-600 hover:underline font-medium text-center">
          Read original article
        </a>
      </div>
    </div>
  );
} 