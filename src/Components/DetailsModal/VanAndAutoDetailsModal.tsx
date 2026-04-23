"use client";

import Image from "next/image";
import React from "react";

// ভ্যান সার্ভিস ডাটা ইন্টারফেস
interface VanServiceData {
  _id: string;
  name: string;
  nickName: string;
  phone: string;
  category: string;
  vehicleType: string;
  experience: string;
  location: string;
  speciality: string[];
  rating: number;
  isVerified: boolean;
  status: string;
  profileImage: string;
  serviceArea: string[];
  isEmergencyCall: boolean;
  capacity: string;
  availability: string;
}

const VanAndAutoDetailsModal = ({ data }: { data: VanServiceData }) => {
  if (!data) return null;

  return (
    <div className="w-full min-h-screen bg-[#0f172a] flex flex-col font-sans pb-10 overflow-x-hidden">
      
      {/* ১. ইউনিক গ্রেডিয়েন্ট হেডার - ডার্ক টিল টু নিয়ন গ্রিন */}
      <div className="relative h-80 bg-gradient-to-br from-[#0d9488] via-[#0f172a] to-[#0f172a] w-full shrink-0">
        {/* মোশন লাইনস - ট্রান্সপোর্ট ভাইব */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="absolute top-20 -right-20 w-64 h-64 bg-teal-500/20 rounded-full blur-[100px]"></div>
        
        <div className="relative z-10 px-6 pt-10 flex flex-col items-center">
          <div className="flex justify-between items-center w-full mb-6">
            <button className="bg-white/10 backdrop-blur-md p-3 rounded-2xl text-white border border-white/10 active:scale-90">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {data.isEmergencyCall && (
              <div className="flex items-center gap-2 px-4 py-1.5 bg-red-500/20 border border-red-500/50 rounded-full backdrop-blur-sm animate-pulse">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-red-400 text-[10px] font-black uppercase tracking-widest text-white">Emergency</span>
              </div>
            )}
          </div>

          {/* প্রোফাইল ইমেজ - হেক্সাগোনাল স্টাইল */}
          <div className="relative">
            <div className="w-32 h-32 rounded-[2.5rem] overflow-hidden border-4 border-[#0d9488] shadow-[0_0_30px_rgba(13,148,136,0.3)] bg-slate-800">
              <Image
                src={data.profileImage || "/placeholder.png"}
                alt={data.name}
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -top-2 -left-2 bg-teal-500 text-white px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-tighter shadow-lg">
              {data.experience}
            </div>
          </div>

          <h2 className="mt-4 text-3xl font-black text-white text-center tracking-tight">{data.name}</h2>
          <p className="text-teal-400 font-bold text-lg">"{data.nickName}"</p>
        </div>
      </div>

      {/* ২. মেইন কন্টেন্ট বডি (ডার্ক মোড) */}
      <div className="flex-1 bg-slate-900 px-6 pt-12 mt-5 rounded-t-[3.5rem] relative z-20 border-t border-white/5">
        
        {/* ৩. ভেহিকল ও রেটিং ইনফো */}
        <div className="flex justify-between items-center bg-slate-800/50 p-5 rounded-[2.5rem] border border-white/5 mb-8">
           <div className="flex flex-col">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">গাড়ির ধরণ</span>
              <span className="text-sm font-bold text-white tracking-tight">{data.vehicleType}</span>
           </div>
           <div className="h-8 w-[1px] bg-white/10"></div>
           <div className="flex flex-col items-end">
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">রেটিং</span>
              <span className="text-sm font-bold text-yellow-400 font-mono">★ {data.rating}</span>
           </div>
        </div>

        {/* ৪. সার্ভিস ডিটেইলস কার্ডস */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-teal-500/5 p-5 rounded-3xl border border-teal-500/20 group hover:bg-teal-500/10 transition-all">
                <div className="text-2xl mb-2">⚖️</div>
                <p className="text-[10px] font-black text-teal-500 uppercase tracking-widest mb-1">বহন ক্ষমতা</p>
                <p className="text-xs font-bold text-slate-200">{data.capacity}</p>
             </div>
             <div className="bg-blue-500/5 p-5 rounded-3xl border border-blue-500/20 group hover:bg-blue-500/10 transition-all">
                <div className="text-2xl mb-2">⏱️</div>
                <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">সময়সীমা</p>
                <p className="text-xs font-bold text-slate-200">{data.availability}</p>
             </div>
          </div>

          <div className="bg-slate-800/40 p-5 rounded-[2.5rem] border border-white/5 flex items-center gap-4">
            <div className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg text-xl shrink-0">📍</div>
            <div>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">সার্ভিস এরিয়া</p>
              <p className="text-sm font-bold text-slate-200">{data?.serviceArea?.join(", ")}</p>
            </div>
          </div>

          {/* বিশেষ দক্ষতাসমূহ */}
          <div className="bg-slate-800/40 p-6 rounded-[2.8rem] border border-white/5 mt-4">
             <h4 className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em] mb-5 flex items-center gap-2">
               <span className="w-8 h-[2px] bg-teal-500"></span> বিশেষ সার্ভিস
             </h4>
             <div className="grid grid-cols-1 gap-2">
               {data.speciality.map((item, i) => (
                 <div key={i} className="bg-white/5 border border-white/5 px-4 py-3 rounded-2xl text-[12px] font-bold text-slate-300 flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,1)]"></div>
                   {item}
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* ৫. মেগা কল বাটন (একদম ইউনিক স্টাইল) */}
        <div className="mt-12 mb-6">
          <div className="relative group">
            {/* নিয়ন গ্লো ইফেক্ট */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-[2.8rem] blur opacity-25 group-hover:opacity-60 transition duration-700"></div>
            
            <a
              href={`tel:${data.phone}`}
              className="relative flex items-center justify-between px-8 w-full bg-white text-slate-950 py-6 rounded-[2.8rem] font-black text-2xl shadow-2xl active:scale-95 transition-all overflow-hidden"
            >
              <div className="flex items-center gap-4">
                <div className="bg-teal-600 p-2.5 rounded-2xl shadow-lg text-white">
                   <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                     <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                   </svg>
                </div>
                <span>কল দিন</span>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
          <p className="text-center mt-6 text-[10px] text-slate-600 font-bold uppercase tracking-[0.4em] opacity-50">
             Auto Van Service • Loyapara
          </p>
        </div>
      </div>
    </div>
  );
};

export default VanAndAutoDetailsModal;