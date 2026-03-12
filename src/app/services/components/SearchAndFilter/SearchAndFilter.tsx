"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, Filter } from "lucide-react";

const categories = ["All", "রাজমিস্ত্রি", "ইলেকট্রিশিয়ান", "মাস্টার", "প্লাম্বার", "ভ্যান ও অটো সার্ভিস", "কৃষক", "দর্জি"];

export default function SearchAndFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleUpdate = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "All") params.set(key, value);
    else params.delete(key);
    router.push(`/services?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="নাম বা কাজ দিয়ে খুঁজুন..."
          defaultValue={searchParams.get("search") || ""}
          onChange={(e) => handleUpdate("search", e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary outline-none text-gray-700"
        />
      </div>
      
      <div className="relative">
        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <select
          defaultValue={searchParams.get("category") || "All"}
          onChange={(e) => handleUpdate("category", e.target.value)}
          className="pl-10 pr-8 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary outline-none text-gray-700 appearance-none min-w-[180px]"
        >
          {categories.map(cat => <option key={cat} value={cat}>{cat === "All" ? "সব ক্যাটাগরি" : cat}</option>)}
        </select>
      </div>
    </div>
  );
}