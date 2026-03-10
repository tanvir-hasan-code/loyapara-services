"use client";

import React, { useState, useEffect } from 'react';
import { Search, MapPin, Wrench, Truck, ChevronLeft, ChevronRight } from 'lucide-react';

// স্লাইডার ডাটা অ্যারে
const banners = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1442544213729-6a15f1611937?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "লয়াপাড়ার সকল সার্ভিস",
    subtitle: "এখন হাতের মুঠোয়",
  },
  {
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMKeFYMXQ4bk6KNaKuQHe8Y6J3XH-q3YMIqw&sg",
    title: "সেরা মিস্ত্রি খুঁজে নিন",
    subtitle: "নির্ভরযোগ্য এবং দক্ষ কারিগর",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1679029524057-7065d479da5c?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGFnZSUyMGluJTIwYmFuZ2xhZGVzaHxlbnwwfHwwfHx8MA%3D%3D",
    title: "জরুরি প্রয়োজনে ভ্যান বা অটোরিকশা",
    subtitle: "দ্রুত যোগাযোগ করুন আমাদের সাথে",
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // অটো স্লাইডার লজিক (৫ সেকেন্ড পর পর স্লাইড পরিবর্তন হবে)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 100000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden bg-slate-900">
      {/* ১. ইমেজ স্লাইডার (Array Map) */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={banner.image}
            alt={banner.title}
            className="w-full h-full object-cover brightness-[0.4]"
          />
        </div>
      ))}

      {/* ২. কন্ট্রোল বাটন (এরো) */}
      <div className="absolute inset-0 flex items-center justify-between px-4 z-20 pointer-events-none">
        <button 
          onClick={prevSlide} 
          className="btn btn-circle btn-ghost text-white pointer-events-auto hover:bg-white/20"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={nextSlide} 
          className="btn btn-circle btn-ghost text-white pointer-events-auto hover:bg-white/20"
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* ৩. কন্টেন্ট ওভারলে */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white z-10">
        <div className="max-w-4xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight transition-all duration-500">
            {banners[currentSlide].title} <br />
            <span className="text-primary">{banners[currentSlide].subtitle}</span>
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 font-light">
            আপনার প্রয়োজনীয় মিস্ত্রি বা যানবাহন খুঁজে পেতে এখনই সার্চ করুন।
          </p>

          {/* সার্চ বক্স */}
{/* সার্চ বক্স সেকশন */}
          <div className="relative w-full max-w-2xl mx-auto mt-6 md:mt-8 px-2 md:px-0">
            <div className="flex items-center bg-white rounded-xl md:rounded-2xl p-1 shadow-2xl border-2 border-transparent focus-within:border-primary transition-all">
              {/* আইকন: মোবাইলে একটু ছোট করা হয়েছে */}
              <div className="pl-3 md:pl-4 text-gray-400">
                <Search className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              
              {/* ইনপুট: মোবাইলে ফন্ট এবং প্যাডিং কমানো হয়েছে */}
              <input
                type="text"
                placeholder="কি খুঁজছেন?"
                className="w-full py-2.5 md:py-4 px-2 md:px-3 text-sm md:text-base text-gray-800 outline-none placeholder:text-gray-400 font-medium bg-transparent"
              />
              
              {/* ডেস্কটপ বাটন */}
              <button className="btn btn-primary rounded-lg md:rounded-xl px-6 md:px-10 text-white hidden sm:flex">
                খুঁজুন
              </button>
            </div>

            {/* মোবাইল বাটন: মার্জিন কমিয়ে ছোট করা হয়েছে */}
            <button className="btn btn-primary btn-sm w-full mt-3 sm:hidden text-white rounded-lg">
              খুঁজুন
            </button>
          </div>

          {/* ডট ইন্ডিকেটর */}
          <div className="flex justify-center gap-2 mt-8">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 transition-all rounded-full ${
                  index === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}