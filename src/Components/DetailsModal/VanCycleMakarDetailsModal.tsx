"use client";

import Image from "next/image";
import React from "react";

// আপনার ডাটাবেসের সম্পূর্ণ স্কিমা অনুযায়ী ইন্টারফেস
interface MakerData {
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
  hasWorkshop: boolean;
  onRoadService: boolean;
  partsAvailable: string[];
  businessHours: string;
}

const VanCycleMakarDetailsModal = ({ data }: { data: MakerData }) => {
  if (!data) return null;

  return (
    <div className="w-full min-h-screen bg-[#0a0a0a] flex flex-col font-sans pb-10 text-white overflow-x-hidden selection:bg-yellow-500">
      
      {/* ১. প্রিমিয়াম হেডার ও প্রোফাইল */}
      <div className="relative h-80 bg-gradient-to-br from-zinc-800 via-[#0a0a0a] to-[#0a0a0a] w-full shrink-0 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="relative z-10 px-6 pt-10 flex flex-col items-center">
          <div className="flex justify-between items-center w-full mb-6">
            <button className="bg-white/5 backdrop-blur-md p-3 rounded-2xl border border-white/10 active:scale-95">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {/* আইডি এবং স্ট্যাটাস ব্যাজ */}
            <div className="flex flex-col items-end gap-1">
               <span className="bg-yellow-500 text-black px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest">{data.category}</span>
               <span className={`text-[9px] font-bold px-2 py-0.5 rounded border ${data.status === 'Available' ? 'border-green-500/50 text-green-400' : 'border-red-500/50 text-red-400'}`}>
                 ● {data.status}
               </span>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-yellow-500 rounded-[3rem] blur opacity-25 group-hover:opacity-60 transition duration-1000"></div>
            <div className="relative w-32 h-32 rounded-[2.8rem] overflow-hidden border-4 border-[#0a0a0a] bg-zinc-900 shadow-2xl">
              <Image src={data.profileImage || "/placeholder.png"} alt={data.name} fill className="object-cover" />
            </div>
            {data.isVerified && (
              <div className="absolute -bottom-1 -right-1 bg-blue-500 p-2 rounded-2xl border-4 border-[#0a0a0a] shadow-xl z-20">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>

          <h2 className="mt-5 text-3xl font-black tracking-tight">{data.name}</h2>
          <p className="text-yellow-500 font-bold text-lg opacity-90">"{data.nickName}"</p>
        </div>
      </div>

      {/* ২. ইনফরমেশন বডি */}
      <div className="flex-1 bg-[#0f0f0f] px-6 pt-12 mt-10 rounded-t-[4rem] relative z-20 border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
        
        {/* ৩. স্ট্যাটাস গ্রিড (সকল বুলিয়ান ডাটা) */}
        <div className="grid grid-cols-3 gap-3 mb-8">
           <div className="bg-zinc-900/50 p-4 rounded-3xl border border-white/5 text-center">
              <p className="text-[9px] font-black text-zinc-500 uppercase mb-1">অভিজ্ঞতা</p>
              <p className="text-xs font-bold text-white">{data.experience}</p>
           </div>
           <div className="bg-zinc-900/50 p-4 rounded-3xl border border-white/5 text-center">
              <p className="text-[9px] font-black text-zinc-500 uppercase mb-1">রেটিং</p>
              <p className="text-xs font-bold text-yellow-500">⭐ {data.rating}</p>
           </div>
           <div className="bg-zinc-900/50 p-4 rounded-3xl border border-white/5 text-center">
              <p className="text-[9px] font-black text-zinc-500 uppercase mb-1">ওয়ার্কশপ</p>
              <p className={`text-xs font-bold ${data.hasWorkshop ? 'text-green-400' : 'text-zinc-500'}`}>{data.hasWorkshop ? "আছে" : "নেই"}</p>
           </div>
        </div>

        {/* ৪. ডিটেইল লিস্ট (লোকেশন, রোড সার্ভিস, আইডি) */}
        <div className="space-y-4">
          <div className="bg-zinc-900/30 p-5 rounded-[2rem] border border-white/5 flex items-center gap-5">
            <div className="w-12 h-12 bg-yellow-500/10 rounded-2xl flex items-center justify-center text-xl text-yellow-500 border border-yellow-500/20 shrink-0">📍</div>
            <div className="flex-1">
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">ঠিকানা</p>
              <p className="text-sm font-bold text-zinc-200">{data.location}</p>
            </div>
            {data.onRoadService && (
              <span className="bg-blue-500/10 text-blue-400 text-[8px] font-black px-2 py-1 rounded-md border border-blue-500/20 uppercase">Road Service</span>
            )}
          </div>

          <div className="bg-zinc-900/30 p-5 rounded-[2rem] border border-white/5 flex items-center gap-5">
            <div className="w-12 h-12 bg-zinc-800 rounded-2xl flex items-center justify-center text-xl text-white border border-white/10 shrink-0">⏰</div>
            <div>
              <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">খোলা থাকে</p>
              <p className="text-sm font-bold text-zinc-200">{data.businessHours}</p>
            </div>
          </div>
          
          <div className="px-5 py-2 bg-white/5 rounded-xl flex justify-between items-center">
            <span className="text-[9px] font-bold text-zinc-600 uppercase">Profile ID:</span>
            <span className="text-[9px] font-mono text-zinc-500">{data._id}</span>
          </div>
        </div>

        {/* ৫. স্পেশালিটি (Speciality) */}
        <div className="mt-10">
          <h4 className="text-[11px] font-black text-zinc-500 uppercase tracking-[0.3em] mb-4 flex items-center gap-4">
             সার্ভিস লিস্ট <span className="flex-1 h-[1px] bg-white/5"></span>
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {data?.speciality?.map((skill, i) => (
              <div key={i} className="bg-zinc-900/80 border border-white/5 p-4 rounded-3xl flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
                <span className="text-[11px] font-bold text-zinc-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ৬. স্পেয়ার পার্টস (Parts Available) */}
        <div className="mt-10 bg-gradient-to-b from-zinc-900 to-black p-8 rounded-[3rem] border border-yellow-500/10 relative overflow-hidden">
          <h4 className="text-[11px] font-black text-yellow-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
             পার্টস কালেকশন
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {data?.partsAvailable?.map((part, i) => (
              <span key={i} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-2xl text-[11px] font-black text-zinc-400">
                {part}
              </span>
            ))}
          </div>
        </div>

        {/* ৭. কল বাটন (Action) */}
        <div className="mt-12 mb-6">
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-[2.5rem] blur opacity-30 group-hover:opacity-70 transition duration-700"></div>
            <a
              href={`tel:${data.phone}`}
              className="relative flex items-center justify-between pl-8 pr-4 w-full bg-white text-black py-5 rounded-[2.5rem] font-black text-2xl shadow-2xl active:scale-95 transition-all overflow-hidden"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:animate-shimmer"></span>
              <span>কল দিন</span>
              <div className="bg-black text-white p-4 rounded-[2rem]">
                 <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                   <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                 </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer { 100% { transform: translateX(100%); } }
        .group:hover .group-hover\:animate-shimmer { animation: shimmer 1.5s infinite; }
      `}</style>
    </div>
  );
};

export default VanCycleMakarDetailsModal;