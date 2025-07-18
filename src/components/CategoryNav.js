'use client';
import { useRouter, useSearchParams } from "next/navigation";

const categories = [
  { label: "🔥 Top News", value: "top-headlines" },
  { label: "Business", value: "business" },
  { label: "Technology", value: "technology" },
  { label: "Sports", value: "sports" },
  { label: "Entertainment", value: "entertainment" },
  { label: "Health", value: "health" },
  { label: "Science", value: "science" },
];

export default function CategoryNav({ selected, asFilter }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = (catValue) => {
    if (catValue === selected?.toLowerCase()) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", catValue);
    router.push(`/?${params.toString()}`);
  };

  return (
    <nav className="flex gap-2 px-4 pb-3 overflow-x-auto scrollbar-thin scrollbar-thumb-blue-100">
      {categories.map(cat => {
        const isSelected = cat.value === selected?.toLowerCase();
        const isTop = cat.value === "top-headlines";
        return (
          <button
            key={cat.value}
            className={
              `px-3 py-1 rounded-full font-medium whitespace-nowrap shadow-sm border transition ` +
              (isTop
                ? (isSelected
                    ? "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white border-pink-600 font-extrabold shadow-lg"
                    : "bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100 text-pink-700 border-pink-200 hover:bg-gradient-to-r hover:from-pink-200 hover:to-yellow-200")
                : (isSelected
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200"))
            }
            disabled={isSelected}
            onClick={() => asFilter && handleClick(cat.value)}
          >
            <span className="block text-sm sm:text-base max-w-[120px]">{cat.label}</span>
          </button>
        );
      })}
    </nav>
  );
} 