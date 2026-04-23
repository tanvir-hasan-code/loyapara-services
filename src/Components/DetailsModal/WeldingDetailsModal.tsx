"use client";

import Image from "next/image";
import React from "react";

// ওয়েল্ডিং মিস্ত্রি ডাটা ইন্টারফেস
interface WeldingData {
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
  hasPortableMachine: boolean;
  workshopName: string;
  isSteelExpert: boolean;
  callTime: string;
}

const WeldingDetailsModal = ({ data }: { data: WeldingData }) => {
  if (!data) return null;

  return (
    <div className="w-full min-h-screen bg-[#0c0c0e] flex flex-col font-sans pb-10 text-white overflow-x-hidden">
      
      {/* ১. হেডার - ফায়ার অ্যান্ড স্টিল গ্রেডিয়েন্ট */}
      <div className="relative h-80 bg-gradient-to-br from-orange-600/20 via-[#0c0c0e] to-[#0c0c0e] w-full shrink-0 overflow-hidden">
        {/* ব্যাকগ্রাউন্ড প্যাটার্ন - ওয়েল্ডিং স্পার্ক ইফেক্ট */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[120px]"></div>
        
        <div className="relative z-10 px-6 pt-10 flex flex-col items-center">
          <div className="flex justify-between items-center w-full mb-6">
            <button className="bg-white/5 backdrop-blur-lg p-3 rounded-2xl border border-white/10 active:scale-90">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex flex-col items-end gap-1">
               <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-orange-600/20">
                 {data.category}
               </span>
               {data.isVerified && (
                 <span className="text-[9px] font-bold text-orange-400 uppercase tracking-tighter">Verified Professional</span>
               )}
            </div>
          </div>

          {/* প্রোফাইল ইমেজ - শার্প ডায়মন্ড কাট বর্ডার */}
          <div className="relative">
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-orange-600 to-zinc-700 rounded-[2.8rem] blur opacity-30 animate-pulse"></div>
            <div className="relative w-32 h-32 rounded-[2.5rem] overflow-hidden border-4 border-[#1a1a1c] bg-zinc-800 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <Image
                src={data.profileImage || "/placeholder.png"}
                alt={data.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -left-2 bg-zinc-900 border border-orange-500/50 text-orange-500 px-3 py-1 rounded-lg text-[10px] font-black">
              {data.experience}
            </div>
          </div>

          <h2 className="mt-5 text-3xl font-black text-white tracking-tight">{data.name}</h2>
          <p className="text-orange-500 font-bold text-lg italic tracking-wide">"{data.nickName}"</p>
        </div>
      </div>

      {/* ২. মেইন কন্টেন্ট - ডার্ক গ্লাস লেআউট */}
      <div className="flex-1 bg-[#111114] px-6 pt-12 mt-10 rounded-t-[4rem] relative z-20 border-t border-white/5 shadow-2xl">
        
        {/* ৩. ওয়ার্কশপ নেম - প্রিমিয়াম হাইলাইট */}
        <div className="bg-gradient-to-r from-orange-600/10 to-transparent border-l-4 border-orange-600 p-4 rounded-r-2xl mb-8">
           <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">প্রতিষ্ঠানের নাম</p>
           <h3 className="text-xl font-black text-zinc-100 uppercase">{data.workshopName}</h3>
        </div>

        {/* ৪. কুইক ফিচার গ্রিড (পোর্টেবল মেশিন ও স্টিল এক্সপার্ট) */}
        <div className="grid grid-cols-2 gap-4 mb-8">
           <div className={`p-5 rounded-3xl border flex flex-col items-center text-center transition-all ${data.hasPortableMachine ? 'bg-orange-600/5 border-orange-600/20' : 'bg-zinc-900/50 border-white/5 opacity-50'}`}>
              <span className="text-2xl mb-1">⚡</span>
              <span className="text-[10px] font-black text-orange-500 uppercase">পোর্টেবল মেশিন</span>
              <span className="text-xs font-bold">{data.hasPortableMachine ? "বাসায় গিয়ে কাজ" : "দোকানে কাজ"}</span>
           </div>
           <div className={`p-5 rounded-3xl border flex flex-col items-center text-center transition-all ${data.isSteelExpert ? 'bg-blue-600/5 border-blue-600/20' : 'bg-zinc-900/50 border-white/5 opacity-50'}`}>
              <span className="text-2xl mb-1">🏗️</span>
              <span className="text-[10px] font-black text-blue-400 uppercase">স্টিল এক্সপার্ট</span>
              <span className="text-xs font-bold">{data.isSteelExpert ? "অত্যাধুনিক কাজ" : "সাধারণ কাজ"}</span>
           </div>
        </div>

        {/* ৫. ডিটেইল লিস্ট */}
        <div className="space-y-4">
          <div className="bg-zinc-900/30 p-5 rounded-[2.5rem] border border-white/5 flex items-center gap-5">
            <div className="w-12 h-12 bg-orange-600/10 rounded-2xl flex items-center justify-center text-xl text-orange-500 border border-orange-600/20 shrink-0">📍</div>
            <div>
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-0.5">লোকেশন</p>
              <p className="text-sm font-bold text-zinc-200">{data.location}</p>
            </div>
          </div>

          <div className="bg-zinc-900/30 p-5 rounded-[2.5rem] border border-white/5 flex items-center gap-5">
            <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center text-xl text-white border border-white/10 shrink-0">📞</div>
            <div>
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-0.5">কল করার সময়</p>
              <p className="text-sm font-bold text-zinc-200">{data.callTime}</p>
            </div>
          </div>
        </div>

        {/* ৬. স্পেশালিটি - মডার্ন গ্রিড */}
        <div className="mt-10 px-2">
          <h4 className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-5 flex items-center gap-4">
             সার্ভিসসমূহ <span className="flex-1 h-[1px] bg-white/5"></span>
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {data.speciality.map((item, i) => (
              <div key={i} className="bg-zinc-900 border border-white/5 px-5 py-3 rounded-2xl flex items-center gap-3 hover:border-orange-500/30 transition-all group">
                <div className="w-2 h-2 rounded-full bg-orange-600 group-hover:shadow-[0_0_10px_rgba(234,88,12,1)]"></div>
                <span className="text-[11px] font-bold text-zinc-300 group-hover:text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ৭. আল্ট্রা-পাওয়ারফুল কল বাটন */}
        <div className="mt-14 mb-8">
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-orange-600 to-red-600 rounded-[2.8rem] blur opacity-30 group-hover:opacity-80 transition duration-700"></div>
            
            <a
              href={`tel:${data.phone}`}
              className="relative flex items-center justify-between pl-10 pr-4 w-full bg-orange-600 text-white py-5 rounded-[2.8rem] font-black text-2xl shadow-2xl active:scale-95 transition-all overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
              <span className="tracking-tighter">যোগাযোগ করুন</span>
              
              <div className="bg-white text-orange-600 p-4 rounded-[2rem] flex items-center justify-center shadow-xl">
                 <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                 </svg>
              </div>
            </a>
          </div>
          <p className="text-center mt-8 text-[10px] text-zinc-600 font-bold uppercase tracking-[0.5em] opacity-40">
             Sufian Engineering • Reliable Welding
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

export default WeldingDetailsModal;