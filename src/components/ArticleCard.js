"use client";
import React from "react";

export default function ArticleCard({ article, index }) {
  const showDescription = article.description && article.description !== article.title;

  // Encode article data for details page (client-side only)
  const getEncodedUrl = () => {
    return `/news/${index}?data=${btoa(encodeURIComponent(JSON.stringify(article)))}`;
  };

  const handleCardClick = (e) => {
    if (e.target.closest("a[data-readmore]")) return;
    window.location.href = getEncodedUrl();
  };

  const handleReadMoreClick = (e) => {
    e.preventDefault();
    window.location.href = getEncodedUrl();
  };

  return (
    <button
      className="bg-white rounded-2xl shadow-lg p-0 flex flex-col overflow-hidden hover:shadow-xl transition group border border-gray-100 text-left w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
      onClick={handleCardClick}
      aria-label={article.title || 'News article'}
      tabIndex={0}
      type="button"
    >
      {article.urlToImage ? (
        <img src={article.urlToImage} alt={article.title} className="h-44 w-full object-cover" />
      ) : (
        <div className="h-44 bg-gradient-to-tr from-blue-200 via-blue-100 to-white flex items-center justify-center">
          <svg className="w-16 h-16 text-blue-300 group-hover:text-blue-400 transition" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>
        </div>
      )}
      <div className="flex-1 flex flex-col gap-2 p-4">
        <h2
          className="font-semibold text-lg group-hover:text-black transition line-clamp-2"
          style={{ color: 'black' }}
        >
          {article.title || 'No title'}
        </h2>
        {showDescription && <p className="text-gray-600 text-sm line-clamp-3">{article.description}</p>}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs text-gray-400">{article.source?.name || 'Unknown Source'}</span>
          <span className="text-xs text-gray-400 ml-auto">{article.publishedAt ? article.publishedAt.slice(0, 10) : ''}</span>
        </div>
        <a
          href={getEncodedUrl()}
          onClick={handleReadMoreClick}
          data-readmore
          className="mt-2 text-blue-600 hover:underline text-sm font-medium self-start"
        >
          Read more
        </a>
      </div>
    </button>
  );
} 