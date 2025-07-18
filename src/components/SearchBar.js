'use client';
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function SearchBar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);

  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams();
      if (query.trim()) {
        params.set("q", query.trim());
        router.push(`/?${params.toString()}`);
      } else {
        router.push("/");
      }
    }, 400);
    return () => clearTimeout(handler);
  }, [query, router]);

  return (
    <div className="relative w-full max-w-xs" role="search">
      <input
        type="text"
        placeholder="Search news..."
        className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-white shadow-sm"
        value={query}
        onChange={e => setQuery(e.target.value)}
        aria-label="Search news"
      />
      <span className="absolute left-3 top-2.5 text-gray-400">
        <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8"/><path d="M21 21l-3.5-3.5"/></svg>
      </span>
    </div>
  );
} 