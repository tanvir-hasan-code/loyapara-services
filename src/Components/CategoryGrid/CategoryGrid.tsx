"use client";

import React from 'react';
import Link from 'next/link';
import { 
  Hammer, 
  Wrench, 
  Droplets, 
  Stethoscope, 
  GraduationCap, 
  FlaskConical, 
  Truck, 
  Zap, 
  Radio, 
  Bike, 
  Settings, 
  Box, 
  Trees, 
  Sprout, 
  Home, 
  Scissors,
  ArrowRight // আইকনের জন্য
} from 'lucide-react';
import { motion } from 'framer-motion';

// navItems অনুযায়ী ১৬টি সার্ভিস
const categories = [
  { id: 1, name: "রাজমিস্ত্রি", icon: <Hammer />, color: "bg-orange-100 text-orange-600", link: "/services?category=রাজমিস্ত্রি" },
  { id: 2, name: "ওয়েল্ডিং মিস্ত্রি", icon: <Wrench />, color: "bg-slate-100 text-slate-600", link: "/services?category=ওয়েল্ডিং মিস্ত্রি" },
  { id: 3, name: "প্লাম্বার", icon: <Droplets />, color: "bg-cyan-100 text-cyan-600", link: "/services?category=প্লাম্বার" },
  { id: 4, name: "পশু চিকিৎসক", icon: <Stethoscope />, color: "bg-red-100 text-red-600", link: "/services?category=পশু চিকিৎসক" },
  { id: 5, name: "মাস্টার/শিক্ষক", icon: <GraduationCap />, color: "bg-emerald-100 text-emerald-600", link: "/services?category=মাস্টার / গৃহশিক্ষক" },
  { id: 6, name: "হোমিও ডাক্তার", icon: <FlaskConical />, color: "bg-purple-100 text-purple-600", link: "/services?category=হোমিও ডাক্তার" },
  { id: 7, name: "ভ্যান ও অটোরিকশা", icon: <Truck />, color: "bg-blue-100 text-blue-600", link: "/services?category=ভ্যান ও অটো সার্ভিস" },
  { id: 8, name: "ইলেকট্রিশিয়ান", icon: <Zap />, color: "bg-yellow-100 text-yellow-600", link: "/services?category=ইলেকট্রিশিয়ান" },
  { id: 9, name: "ইলেকট্রনিক্স মেকার", icon: <Radio />, color: "bg-indigo-100 text-indigo-600", link: "/services?category=ইলেকট্রনিক্স মেকার" },
  { id: 10, name: "মোটরসাইকেল মেকার", icon: <Bike />, color: "bg-gray-100 text-gray-700", link: "/services?category=মোটরসাইকেল মেকার" },
  { id: 11, name: "মেশিন মেকার", icon: <Settings />, color: "bg-zinc-100 text-zinc-600", link: "/services?category=মেশিন ও হাল মেকার" },
  { id: 12, name: "ভ্যান-সাইকেল মেকার", icon: <Box />, color: "bg-teal-100 text-teal-600", link: "/services?category=ভ্যান ও সাইকেল মেকার" },
  { id: 13, name: "খেজুরের রস", icon: <Trees />, color: "bg-amber-100 text-amber-800", link: "/services?category=খেজুরের রস" },
  { id: 14, name: "কৃষি শ্রমিক", icon: <Sprout />, color: "bg-green-100 text-green-600", link: "/services?category=কৃষি শ্রমিক" },
  { id: 15, name: "কৃষক", icon: <Home />, color: "bg-rose-100 text-rose-600", link: "/services?category=কৃষক / কৃষি উদ্যোক্তা" },
  { id: 16, name: "দর্জি (টেইলার্স)", icon: <Scissors />, color: "bg-pink-100 text-pink-600", link: "/services?category=দর্জি / টেইলার্স" },
];

export default function CategoryGrid() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* সেকশন হেডার (আগের স্টাইলে ফেরত আনা হয়েছে) */}
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-800 italic uppercase tracking-tight">
              প্রয়োজনীয় ক্যাটাগরি
            </h2>
            <p className="text-slate-500 mt-1 font-bold text-sm md:text-base italic">
              আপনার প্রয়োজনীয় সেবাটি বেছে নিন
            </p>
          </div>
          
          {/* নতুন 'সব দেখুন' বাটন */}
          <Link 
            href="/services" 
            className="group flex items-center gap-2 text-primary font-black text-xs md:text-sm hover:gap-3 transition-all duration-300 bg-primary/5 px-4 py-2 rounded-full border border-primary/10"
          >
            সব দেখুন 
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* গ্রিড লেআউট */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 md:gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.02 }}
            >
              <Link 
                href={cat.link}
                className="group flex flex-col items-center p-5 rounded-[28px] border border-slate-100 bg-white hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 h-full"
              >
                {/* আইকন বক্স */}
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${cat.color} shadow-sm`}>
                  {React.cloneElement(cat.icon as React.ReactElement<{size: number; strokeWidth: number}>, { size: 30 , strokeWidth: 2.5 })}
                </div>
                
                {/* নাম */}
                <span className="text-slate-700 font-black text-[11px] md:text-[13px] text-center group-hover:text-primary transition-colors leading-tight italic">
                  {cat.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}