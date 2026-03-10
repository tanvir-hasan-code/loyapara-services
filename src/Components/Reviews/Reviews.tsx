"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "আব্দুল করিম",
    service: "রাজমিস্ত্রি সেবা",
    comment: "লয়াপাড়া সেবার মাধ্যমে আমি খুব সহজেই একজন দক্ষ রাজমিস্ত্রি পেয়েছি। তার কাজের মান এবং ব্যবহার দুটোই খুব ভালো ছিল।",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=karim",
  },
  {
    id: 2,
    name: "রহিমা বেগম",
    service: "ইলেকট্রিশিয়ান সেবা",
    comment: "বাড়ির ফ্যান নষ্ট হয়ে গিয়েছিল, ফোন দেওয়ার ৩০ মিনিটের মধ্যে মিস্ত্রি চলে এসেছে। চমৎকার সার্ভিস!",
    rating: 4,
    image: "https://i.pravatar.cc/150?u=rahima",
  },
  {
    id: 3,
    name: "সোহেল রানা",
    service: "ভ্যান/পরিবহন",
    comment: "জরুরি মালপত্র নেওয়ার জন্য ভ্যান দরকার ছিল। এই অ্যাপে চালকের নম্বর পেয়ে খুব উপকার হয়েছে।",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=sohel",
  }
];

export default function Reviews() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* সেকশন হেডার */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold mb-4"
          >
            <Star size={14} fill="currentColor" />
            <span>৪.৯/৫ ইউজার রেটিং</span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            মানুষ আমাদের সম্পর্কে <span className="text-primary">কী বলছে?</span>
          </h2>
          <p className="text-slate-500 font-medium">লয়াপাড়া সেবার মাধ্যমে উপকৃত হওয়া কিছু মানুষের অভিজ্ঞতা</p>
        </div>

        {/* রিভিউ গ্রিড/স্লাইডার */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 relative group hover:shadow-xl transition-all duration-500"
            >
              {/* কোট আইকন */}
              <div className="absolute top-6 right-8 text-slate-100 group-hover:text-primary/10 transition-colors">
                <Quote size={48} fill="currentColor" />
              </div>

              {/* রেটিং স্টার */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* কমেন্ট */}
              <p className="text-slate-600 leading-relaxed mb-8 relative z-10 italic">
                {review.comment}
              </p>

              {/* ইউজার প্রোফাইল */}
              <div className="flex items-center gap-4 border-t border-slate-50 pt-6">
                <div className="relative">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-md"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white p-0.5 rounded-full ring-2 ring-white">
                    <CheckCircle size={10} fill="currentColor" />
                  </div>
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm">{review.name}</h4>
                  <p className="text-slate-400 text-xs">{review.service} নিয়েছেন</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* বটম ট্রাস্ট ব্যাজ */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
          <span className="font-bold text-slate-400">Trusted by 500+ Villagers</span>
          <span className="font-bold text-slate-400">100% Verified Workers</span>
          <span className="font-bold text-slate-400">Safety First</span>
        </div>
      </div>
    </section>
  );
}