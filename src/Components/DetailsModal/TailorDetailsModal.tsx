"use client";

import Image from "next/image";
import React from "react";

// দর্জি ডাটা ইন্টারফেস
interface TailorData {
  _id: string;
  name: string;
  nickName: string;
  phone: string;
  category: string;
  experience: string;
  location: string;
  speciality: string[];
  rating: number;
  isVerified: boolean;
  status: string;
  profileImage: string;
  isHomeService: boolean;
  orderTime: string;
  isExpertInDesign: boolean;
  deliveryTime: string;
}

const TailorDetailsModal  = ({ data }: { data: TailorData }) => {
  if (!data) return null;

  return (
    <div className="w-full min-h-screen bg-white flex flex-col font-sans pb-10 overflow-x-hidden">
      
      {/* ১. স্টাইলিশ হেডার - দর্জি থিম (ডার্ক পিঙ্ক টু রোজ গোল্ড) */}
      <div className="relative h-72 bg-gradient-to-br from-[#be185d] to-[#9d174d] w-full shrink-0 shadow-lg">
        {/* ব্যাকগ্রাউন্ড টেক্সচার - সুঁই-সুতার ফিল */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]"></div>
        
        <div className="relative z-10 px-6 pt-10 flex flex-col items-center">
          <div className="flex justify-between items-center w-full mb-4">
            <button className="bg-black/20 p-3 rounded-2xl text-white border border-white/20 active:scale-90 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="px-5 py-1.5 bg-black/30 border border-white/30 rounded-full">
              <span className="text-white text-[11px] font-black uppercase tracking-[0.2em]">{data.category}</span>
            </div>
          </div>

          {/* প্রোফাইল ইমেজ - লাক্সারি রাউন্ডেড ডিজাইন */}
          <div className="relative mt-2">
            <div className="w-32 h-32 rounded-[2.8rem] overflow-hidden border-4 border-white shadow-2xl bg-gray-100 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <Image
                src={data.profileImage || "/placeholder.png"}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>
            {data.isVerified && (
              <div className="absolute -bottom-2 -right-2 bg-pink-500 p-2 rounded-2xl border-4 border-white shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ২. মেইন কন্টেন্ট বডি */}
      <div className="flex-1 bg-white px-6 pt-12 -mt-12 rounded-t-[3.5rem] relative z-20 shadow-[0_-15px_50px_rgba(0,0,0,0.08)]">
        
        {/* ৩. নাম এবং টাইটেল */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-1">{data.name}</h2>
          <p className="text-pink-700 font-bold text-lg italic opacity-90">"{data.nickName}"</p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-5">
            {data.isExpertInDesign && (
              <span className="px-4 py-2 bg-pink-700 text-white text-[10px] font-black rounded-2xl uppercase tracking-tighter shadow-md">
                ✨ ডিজাইন বিশেষজ্ঞ
              </span>
            )}
            <span className="px-4 py-2 bg-gray-900 text-white text-[10px] font-black rounded-2xl uppercase tracking-tighter shadow-md">
              🧵 {data.experience} অভিজ্ঞতা
            </span>
            <span className="px-4 py-2 bg-yellow-500 text-black text-[10px] font-black rounded-2xl uppercase tracking-tighter shadow-md">
              ⭐ {data.rating} রেটিং
            </span>
          </div>
        </div>

        {/* ৪. গুরুত্বপূর্ণ তথ্য গ্রিড */}
        <div className="space-y-4 mb-8">
          {/* ডেলিভারি টাইম ও হোম সার্ভিস */}
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-pink-50 p-4 rounded-3xl border border-pink-100 flex flex-col items-center text-center">
                <span className="text-2xl mb-1">🚚</span>
                <p className="text-[10px] font-black text-pink-400 uppercase mb-1">ডেলিভারি</p>
                <p className="text-xs font-black text-pink-900">{data.deliveryTime}</p>
             </div>
             <div className="bg-blue-50 p-4 rounded-3xl border border-blue-100 flex flex-col items-center text-center">
                <span className="text-2xl mb-1">🏠</span>
                <p className="text-[10px] font-black text-blue-400 uppercase mb-1">হোম সার্ভিস</p>
                <p className="text-xs font-black text-blue-900">{data.isHomeService ? "উপলব্ধ" : "নেই"}</p>
             </div>
          </div>

          {/* ঠিকানা ও সময় */}
          <div className="bg-gray-50 p-5 rounded-[2.5rem] border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-pink-700 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0">📍</div>
            <div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-0.5">ঠিকানা</p>
              <p className="text-sm font-black text-gray-900">{data.location}</p>
            </div>
          </div>

          <div className="bg-gray-50 p-5 rounded-[2.5rem] border border-gray-100 flex items-center gap-4">
            <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center text-white shadow-md shrink-0">⏰</div>
            <div>
              <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-0.5">অর্ডার নেওয়ার সময়</p>
              <p className="text-[11px] font-black text-gray-900 leading-relaxed">{data.orderTime}</p>
            </div>
          </div>

          {/* ৫. বিশেষ দক্ষতাসমূহ - দর্জি কাজের ক্যাটাগরি */}
          <div className="bg-white p-6 rounded-[2.8rem] border-2 border-gray-50 shadow-sm mt-4">
             <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-5 flex items-center gap-3">
               <span className="w-8 h-[2px] bg-pink-700"></span> বিশেষ দক্ষতাসমূহ
             </h4>
             <div className="flex flex-wrap gap-2.5">
               {data.speciality.map((skill, i) => (
                 <span key={i} className="bg-pink-50 text-pink-700 border border-pink-100 px-4 py-2.5 rounded-xl text-xs font-black shadow-sm">
                   👗 {skill}
                 </span>
               ))}
             </div>
          </div>
        </div>

        {/* ৬. কল বাটন (কার্ডের ভেতরেই রাখা হয়েছে) */}
        <div className="mt-10 mb-6">
          <div className="relative group">
            {/* ডার্ক গ্রেডিয়েন্ট গ্লো */}
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-700 to-rose-600 rounded-[2.8rem] blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
            
            <a
              href={`tel:${data.phone}`}
              className="relative flex items-center justify-center gap-5 w-full bg-gray-950 text-white py-6 rounded-[2.8rem] font-black text-2xl shadow-2xl active:scale-95 transition-all overflow-hidden border border-white/10"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
              <div className="bg-pink-700 p-2.5 rounded-2xl shadow-lg animate-bounce">
                 <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                 </svg>
              </div>
              কল করুন
            </a>
          </div>
          <p className="text-center mt-6 text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em] opacity-50">
             Tailor Service • Loyapara
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .group:hover .group-hover\:animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default TailorDetailsModal ;