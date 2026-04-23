"use client";

import Image from "next/image";
import React from "react";

// ডাটা ইন্টারফেস - আপনার ডাটাবেসের সব ফিল্ড সহ
interface MasonData {
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
  isLebar: boolean;
  isHead: boolean;
}

const RajMistriDetailsModal = ({ data }: { data: MasonData }) => {
  if (!data) return null;

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col font-sans pb-10">
      {/* ১. স্টাইলিশ হেডার - ডার্ক অরেঞ্জ থিম */}
      <div className="relative h-64 bg-gradient-to-br from-orange-600 to-red-700 w-full shrink-0 shadow-lg">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/brick-wall.png')]"></div>
        
        <div className="relative z-10 px-6 pt-8 flex flex-col items-center">
          <div className="flex justify-between items-center w-full">
            <button className="bg-black/20 p-3 rounded-2xl text-white border border-white/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="px-5 py-1.5 bg-black/30 border border-white/30 rounded-full">
              <span className="text-white text-[11px] font-black uppercase tracking-[0.2em]">{data.category}</span>
            </div>
          </div>

          {/* প্রোফাইল ইমেজ - আরও গাঢ় বর্ডার */}
          <div className="relative mt-4">
            <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-gray-200">
              <Image
                src={data.profileImage || "/placeholder.png"}
                alt={data.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            {data.isVerified && (
              <div className="absolute -bottom-2 -right-2 bg-green-600 p-2 rounded-2xl border-4 border-white shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ২. মেইন কন্টেন্ট বডি */}
      <div className="flex-1 bg-white px-6 pt-12 -mt-5 rounded-t-[3.5rem] relative z-20 shadow-[0_-15px_40px_rgba(0,0,0,0.05)]">
        
        {/* ৩. নাম এবং শর্ট বায়ো */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-gray-900 tracking-tight mb-1">{data.name}</h2>
          <p className="text-orange-700 font-bold text-lg italic opacity-90">"{data.nickName}"</p>
          
          <div className="flex justify-center gap-3 mt-5">
            {data.isHead && (
              <span className="px-5 py-2 bg-orange-700 text-white text-[11px] font-black rounded-2xl uppercase tracking-tighter shadow-md">
                🏆 হেড মিস্ত্রি
              </span>
            )}
            <span className="px-5 py-2 bg-gray-900 text-white text-[11px] font-black rounded-2xl uppercase tracking-tighter shadow-md">
              🛠️ {data.experience} অভিজ্ঞতা
            </span>
          </div>
        </div>

        {/* ৪. ডিটেইল লিস্ট - তথ্যগুলোকে আরও স্পষ্ট করা হয়েছে */}
        <div className="space-y-4 mb-10">
          <div className="bg-gray-50 p-5 rounded-[2rem] border border-gray-100 flex items-center justify-between group">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-700 rounded-2xl flex items-center justify-center text-xl text-white shadow-md">📍</div>
              <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-0.5">ঠিকানা</p>
                <p className="text-base font-black text-gray-900">{data.location}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-5 rounded-[2rem] border border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-800 rounded-2xl flex items-center justify-center text-xl text-white shadow-md">👷</div>
              <div>
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-0.5">লেবার কাজ</p>
                <p className="text-base font-black text-gray-900">{data.isLebar ? "হ্যাঁ, করেন" : "না, করেন না"}</p>
              </div>
            </div>
            <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase ${data.isLebar ? 'bg-green-100 text-green-700' : ' bg-green-400'}`}>
              {data.status}
            </span>
          </div>

          {/* ৫. বিশেষ দক্ষতাসমূহ */}
          <div className="bg-white p-6 rounded-[2.5rem] border-2 border-gray-50 shadow-sm">
             <h4 className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] mb-5 flex items-center gap-3">
               <span className="w-8 h-[2px] bg-orange-700"></span> কাজের দক্ষতা
             </h4>
             <div className="flex flex-wrap gap-2.5">
               {data.speciality.map((skill, i) => (
                 <span key={i} className="bg-gray-900 text-white px-4 py-2.5 rounded-xl text-xs font-bold shadow-md">
                   ✓ {skill}
                 </span>
               ))}
             </div>
          </div>
        </div>

        {/* ৬. কল বাটন (এখন কার্ডের কন্টেন্টের ভেতর ফিক্সড) */}
        <div className="mt-12 mb-6">
          <div className="relative group">
            {/* ডার্ক গ্রেডিয়েন্ট গ্লো */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-800 to-red-800 rounded-[2.5rem] blur opacity-40 group-hover:opacity-60 transition duration-500"></div>
            
            <a
              href={`tel:${data.phone}`}
              className="relative flex items-center justify-center gap-5 w-full bg-gray-950 text-white py-6 rounded-[2.5rem] font-black text-2xl shadow-2xl active:scale-95 transition-all overflow-hidden border border-white/10"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
              <div className="bg-orange-700 p-2.5 rounded-2xl shadow-lg">
                 <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                   <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                 </svg>
              </div>
              কল করুন
            </a>
          </div>
          <p className="text-center mt-6 text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em] opacity-50">
             লয়াপাড়া -সেবা
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

export default RajMistriDetailsModal;