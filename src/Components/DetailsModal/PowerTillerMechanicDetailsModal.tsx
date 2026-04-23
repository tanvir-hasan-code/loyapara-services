"use client"
import Image from "next/image";
import React from "react";

// ইন্টারফেস আপডেট করা হয়েছে আপনার নতুন ডাটা অনুযায়ী
interface PowerTillerData {
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
  serviceArea: string[];
  hasSpareParts: boolean;
  callTime: string;
  emergencyCall: boolean;
}

const PowerTillerMechanicDetailsModal = ({ data }: { data: PowerTillerData }) => {
  if (!data) return null;

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden font-sans">
      
      {/* ১. স্টাইলিশ হেডার ও প্রোফাইল */}
      <div className="relative h-32 bg-blue-700 w-full">
        {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2">
          <div className="bg-white p-1 rounded-full shadow-2xl">
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white bg-gray-100">
              <Image
                src={data.profileImage || "/placeholder.png"}
                alt={data.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {data.isVerified && (
              <div className="absolute bottom-2 right-4 bg-blue-600 text-white p-1.5 rounded-full border-4 border-white shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="pt-16 pb-8 px-6 md:px-12">
        {/* ২. মেকানিক পরিচিতি */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
            {data.name}
          </h2>
          <p className="text-blue-600 font-bold text-lg mt-1 italic">"{data.nickName}"</p>
          <div className="flex flex-wrap justify-center gap-2 mt-3">
            <span className="px-4 py-1 bg-blue-100 text-blue-700 text-xs font-black rounded-full border border-blue-200 uppercase tracking-widest">
              {data.category}
            </span>
            <span className="px-4 py-1 bg-green-100 text-green-700 text-xs font-black rounded-full border border-green-200">
              ● {data.status}
            </span>
          </div>
        </div>

        {/* ৩. স্ট্যাটস কার্ড (অভিজ্ঞতা ও রেটিং) */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
            <div className="bg-blue-600 p-3 rounded-xl text-white">
              <span className="text-xl font-bold">🛠️</span>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-black uppercase">অভিজ্ঞতা</p>
              <p className="text-gray-900 font-black text-lg">{data.experience}</p>
            </div>
          </div>
          <div className="bg-orange-50 p-5 rounded-2xl border border-orange-100 flex items-center gap-4 shadow-sm">
            <div className="bg-orange-500 p-3 rounded-xl text-white">
              <span className="text-xl font-bold">⭐</span>
            </div>
            <div>
              <p className="text-[10px] text-orange-600 font-black uppercase">রেটিং</p>
              <p className="text-gray-900 font-black text-lg">{data.rating}/5</p>
            </div>
          </div>
        </div>

        {/* ৪. বিশেষ দক্ষতাসমূহ (ট্যাগ স্টাইল) */}
        <div className="mb-8">
          <h4 className="text-xs font-black text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-8 h-[2px] bg-blue-500"></span> বিশেষ দক্ষতাসমূহ
          </h4>
          <div className="flex flex-wrap gap-2">
            {data.speciality.map((item, idx) => (
              <span key={idx} className="bg-white px-4 py-2 text-gray-700 text-[13px] font-bold rounded-xl border border-gray-200 shadow-sm hover:border-blue-300 transition-colors">
                ⚙️ {item}
              </span>
            ))}
          </div>
        </div>

        {/* ৫. সার্ভিস ও অতিরিক্ত তথ্য (ডার্ক লাক্সারি কার্ড) */}
        <div className="bg-gray-900 rounded-[2rem] p-6 md:p-8 text-white mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
          
          <div className="space-y-6 relative">
            {/* লোকেশন ও সময় */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1">দোকানের অবস্থান</p>
                <p className="text-gray-200 text-sm font-bold flex items-center gap-2">
                   📍 {data.location}
                </p>
              </div>
              <div>
                <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-1">কল করার সময়</p>
                <p className="text-gray-200 text-sm font-bold flex items-center gap-2">
                   🕒 {data.callTime}
                </p>
              </div>
            </div>

            {/* অন্যান্য ফিচারস */}
            <div className="border-t border-gray-800 pt-6 grid grid-cols-2 gap-4">
               <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700 flex flex-col">
                  <span className="text-[9px] text-gray-500 font-bold uppercase mb-1 tracking-tighter">স্পেয়ার পার্টস</span>
                  <span className="text-xs font-bold text-green-400">{data.hasSpareParts ? "✅ দোকানে আছে" : "❌ নেই"}</span>
               </div>
               <div className="bg-gray-800/50 p-3 rounded-xl border border-gray-700 flex flex-col">
                  <span className="text-[9px] text-gray-500 font-bold uppercase mb-1 tracking-tighter">জরুরী সেবা</span>
                  <span className="text-xs font-bold text-orange-400">{data.emergencyCall ? "🚀 সবসময় চালু" : "❌ বন্ধ"}</span>
               </div>
            </div>

            {/* সার্ভিস এরিয়া */}
            <div>
              <p className="text-blue-400 text-[10px] font-black uppercase tracking-widest mb-3">সার্ভিস এরিয়া</p>
              <div className="flex flex-wrap gap-2">
                {data.serviceArea.map((area, i) => (
                  <span key={i} className="text-[10px] font-bold bg-blue-500/10 text-blue-300 px-3 py-1 rounded-md border border-blue-500/20 italic">
                    # {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ৬. অ্যাকশন বাটন (কল বাটন) */}
        <div className="px-2">
          <a
            href={`tel:${data.phone}`}
            className="group relative flex items-center justify-center gap-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-2xl font-black text-xl md:text-2xl shadow-[0_10px_30px_rgba(37,99,235,0.3)] transition-all active:scale-95 overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10 p-2 bg-white/20 rounded-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            সিরিয়ালের জন্য কল দিন
          </a>
          <p className="text-center mt-6 text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em] opacity-50">
           ধন্যবাদ
          </p>
        </div>
      </div>

      {/* শিমার অ্যানিমেশনের জন্য ইনলাইন সিএসএস (যদি গ্লোবাল ফাইলে না থাকে) */}
      <style jsx>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default PowerTillerMechanicDetailsModal;