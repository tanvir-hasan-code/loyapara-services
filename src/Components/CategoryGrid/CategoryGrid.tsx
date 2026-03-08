"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Wrench, 
  Zap, 
  Truck, 
  Smartphone, 
  Droplets, 
  Hammer, 
  Monitor, 
  Scissors 
} from 'lucide-react';

// ক্যাটাগরি ডাটা অ্যারে
const categories = [
  { id: 1, name: "রাজমিস্ত্রি", icon: <Hammer />, color: "bg-orange-100 text-orange-600", link: "/raj-mistri" },
  { id: 2, name: "ইলেকট্রিশিয়ান", icon: <Zap />, color: "bg-yellow-100 text-yellow-600", link: "/electrician" },
  { id: 3, name: "ভ্যান/পরিবহন", icon: <Truck />, color: "bg-blue-100 text-blue-600", link: "/van" },
  { id: 4, name: "মোবাইল মেকার", icon: <Smartphone />, color: "bg-purple-100 text-purple-600", link: "/mobile-technician" },
  { id: 5, name: "প্লাম্বার", icon: <Droplets />, color: "bg-cyan-100 text-cyan-600", link: "/plumber" },
  { id: 6, name: "কাঠমিস্ত্রি", icon: <Wrench />, color: "bg-amber-100 text-amber-800", link: "/wood-mistri" },
  { id: 7, name: "কম্পিউটার সেবা", icon: <Monitor />, color: "bg-indigo-100 text-indigo-600", link: "/computer-repair" },
  { id: 8, name: "দর্জি/টেইলার্স", icon: <Scissors />, color: "bg-pink-100 text-pink-600", link: "/tailors" },
];

export default function CategoryGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* সেকশন হেডার */}
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">প্রয়োজনীয় ক্যাটাগরি</h2>
            <p className="text-slate-500 mt-1 text-sm md:text-base">আপনার প্রয়োজনীয় সেবাটি বেছে নিন</p>
          </div>
          <Link href="/services" className="text-primary font-semibold text-sm hover:underline">
            সব দেখুন →
          </Link>
        </div>

        {/* গ্রিড লেআউট */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4 md:gap-6">
          {categories.map((cat) => (
            <Link 
              key={cat.id} 
              href={cat.link}
              className="group flex flex-col items-center p-6 rounded-2xl border border-slate-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* আইকন বক্স */}
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${cat.color}`}>
                {React.cloneElement(cat.icon as React.ReactElement, { size: 32 })}
              </div>
              
              {/* নাম */}
              <span className="text-slate-700 font-bold text-sm md:text-base text-center group-hover:text-primary transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}