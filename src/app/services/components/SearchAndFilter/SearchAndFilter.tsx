"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, Filter, ChevronDown } from "lucide-react";

const categoryGroups = [
  {
    label: "নির্মাণ ও মেরামত",
    options: ["রাজমিস্ত্রি", "ওয়েল্ডিং মিস্ত্রি", "প্লাম্বার"],
  },
  {
    label: "স্বাস্থ্য ও শিক্ষা",
    options: ["পশু চিকিৎসক", "মাস্টার / গৃহশিক্ষক", "হোমিও ডাক্তার"],
  },
  {
    label: "যানবাহন ও ইঞ্জিন",
    options: ["ভ্যান ও অটো সার্ভিস", "মোটরসাইকেল মেকার", "ভ্যান ও সাইকেল মেকার"],
  },
  {
    label: "ইলেকট্রনিক্স ও মেকার",
    options: ["ইলেকট্রিশিয়ান", "ইলেকট্রনিক্স মেকার", "মেশিন ও হাল মেকার"],
  },
  {
    label: "কৃষি ও গৃহস্থালি",
    options: ["খেজুরের রস", "কৃষি শ্রমিক", "কৃষক / কৃষি উদ্যোক্তা"],
  },
  {
    label: "অন্যান্য",
    options: ["দর্জি / টেইলার্স"],
  },
];

export default function SearchAndFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleUpdate = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "All") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/services?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
      {/* Search Input */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="নাম বা কাজ দিয়ে খুঁজুন..."
          defaultValue={searchParams.get("search") || ""}
          onChange={(e) => handleUpdate("search", e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary outline-none text-gray-700 transition-all"
        />
      </div>

      {/* Category Dropdown */}
      <div className="relative">
        <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
        <select
          defaultValue={searchParams.get("category") || "All"}
          onChange={(e) => handleUpdate("category", e.target.value)}
          className="pl-10 pr-10 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary outline-none text-gray-700 appearance-none min-w-[220px] cursor-pointer"
        >
          <option value="All">সব ক্যাটাগরি</option>
          {categoryGroups.map((group) => (
            <optgroup key={group.label} label={group.label} className="text-primary font-bold">
              {group.options.map((option) => (
                <option key={option} value={option} className="text-gray-700 font-normal">
                  {option}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
      </div>
    </div>
  );
}