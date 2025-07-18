
const API_KEY = process.env.NEWS_API_KEY;
const BASE_URL = 'https://newsapi.org/v2';

export async function fetchTopHeadlines(page = 1, pageSize = 10, language = 'en') {
  const url = `/api/news?page=${page}&pageSize=${pageSize}&language=${language}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch top headlines');
  return res.json();
}

export async function fetchByCategory(category, page = 1, pageSize = 10, language = 'en') {
  const url = `/api/news?category=${category}&page=${page}&pageSize=${pageSize}&language=${language}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch category news');
  return res.json();
}

export async function searchNews(query, page = 1, pageSize = 10, language = 'en') {
  const url = `/api/news?q=${encodeURIComponent(query)}&page=${page}&pageSize=${pageSize}&language=${language}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to search news');
  return res.json();
} 