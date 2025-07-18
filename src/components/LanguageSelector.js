"use client";
import { useRouter, useSearchParams } from "next/navigation";

const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
  { code: 'ru', label: 'Русский' },
  { code: 'zh', label: '中文' },
];

export default function LanguageSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedLanguage = searchParams.get("language") || "en";

  const handleChange = (e) => {
    const params = new URLSearchParams(searchParams.toString());
    if (e.target.value === "en") {
      params.delete("language");
    } else {
      params.set("language", e.target.value);
    }
    router.push(`/?${params.toString()}`);
  };

  return (
    <select
      name="language"
      value={selectedLanguage}
      onChange={handleChange}
      className="rounded px-2 py-1 border border-gray-300 bg-white text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
      style={{ minWidth: 90 }}
      aria-label="Select language"
    >
      {LANGUAGES.map(lang => (
        <option key={lang.code} value={lang.code}>{lang.label}</option>
      ))}
    </select>
  );
} 