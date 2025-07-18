"use client";
import Link from "next/link";
import CategoryNav from "./CategoryNav";
import SearchBar from "./SearchBar";
import DarkMode from "./DarkMode";
import LanguageSelector from "./LanguageSelector";

export default function Header({ selectedCategory }) {
  return (
    <header
      className="sticky top-0 z-20 w-full backdrop-blur shadow-md p-0 flex flex-col"
      style={{ background: "var(--background-color)", color: "var(--font-color)" }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 gap-4">
        <Link
          href="/"
          className="flex items-center gap-2 group"
          style={{ textDecoration: 'none' }}
          onFocus={e => (e.target.style.textDecoration = 'none')}
          onMouseDown={e => (e.target.style.textDecoration = 'none')}
          onMouseUp={e => (e.target.style.textDecoration = 'none')}
          onClick={e => (e.target.style.textDecoration = 'none')}
        >
          <span className="inline-block w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl text-center align-middle">N</span>
          <h1 className="text-2xl font-extrabold tracking-tight text-blue-700">News Portal</h1>
        </Link>
        <div className="flex items-center gap-4">
          <SearchBar />
          <LanguageSelector />
          <DarkMode />
        </div>
      </div>
      {/* Category Navigation */}
      <CategoryNav selected={selectedCategory} asFilter />
    </header>
  );
} 