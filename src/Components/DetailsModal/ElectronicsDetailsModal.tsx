import Image from "next/image";
import React from "react";

interface ElectronicsData {
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
  shopName: string;
  isHomeCollection: boolean;
  hasWarranty: boolean;
  businessHours: string;
}

const ElectronicsDetailsModal = ({ data }: { data: ElectronicsData }) => {
  return (
    <div className="relative overflow-hidden bg-white max-w-2xl mx-auto rounded-[2.5rem] shadow-2xl border border-slate-100">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="relative p-6 md:p-8 flex flex-col items-center">
        
        {/* ১. প্রোফাইল সেকশন (Electrician এর মতো হুবহু ফ্রেম) */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative p-1 bg-gradient-to-tr from-indigo-600 via-purple-600 to-blue-400 rounded-3xl shadow-xl">
            <div className="relative w-28 h-28 md:w-32 md:h-32">
              <Image
                src={data.profileImage}
                alt={data.name}
                fill
                className="object-cover rounded-[22px] border-4 border-white shadow-sm"
                sizes="(max-width: 128px) 100vw, 128px"
                priority
              />
            </div>
            {data.isVerified && (
              <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white p-1.5 rounded-full shadow-lg border-2 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            )}
          </div>

          <h2 className="mt-5 text-2xl font-black text-slate-800 tracking-tight text-center">
            {data.name}
          </h2>
          <div className="flex flex-col items-center gap-1 mt-1">
             <p className="text-indigo-600 font-bold text-sm tracking-wide">
               {data.category} — {data.nickName}
             </p>
             <span className="px-3 py-0.5 bg-indigo-50 text-indigo-700 text-[10px] font-black rounded-full border border-indigo-100 uppercase">
               ● {data.status}
             </span>
          </div>
        </div>

        {/* ২. হাইলাইট বক্সস (৩টি বক্স) */}
        <div className="grid grid-cols-3 gap-3 w-full mb-8">
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center shadow-sm">
            <p className="text-[10px] text-slate-400 uppercase font-black mb-1 tracking-tighter">অভিজ্ঞতা</p>
            <p className="text-slate-700 font-bold text-sm">{data.experience}</p>
          </div>
          <div className="bg-indigo-50 p-3 rounded-2xl border border-indigo-100 text-center shadow-sm">
            <p className="text-[10px] text-indigo-500 uppercase font-black mb-1 tracking-tighter">রেটিং</p>
            <p className="text-indigo-700 font-bold text-sm">⭐ {data.rating}</p>
          </div>
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center shadow-sm">
            <p className="text-[10px] text-slate-400 uppercase font-black mb-1 tracking-tighter">অবস্থান</p>
            <p className="text-slate-700 font-bold text-sm truncate">{data.location}</p>
          </div>
        </div>

        {/* ৩. বিশেষ দক্ষতা (Tags) */}
        <div className="w-full mb-8">
          <h4 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
            <span className="text-indigo-600">🛠️</span> বিশেষ দক্ষতাসমূহ:
          </h4>
          <div className="flex flex-wrap gap-2">
            {data.speciality.map((item, idx) => (
              <span key={idx} className="bg-indigo-50/50 text-indigo-800 text-xs px-3 py-1.5 rounded-xl border border-indigo-100 font-medium italic">
                # {item}
              </span>
            ))}
          </div>
        </div>

        {/* ৪. সকল অতিরিক্ত তথ্য (Y-Axis) */}
        <div className="w-full space-y-3 bg-slate-50 p-5 rounded-[2rem] border border-slate-200/60 shadow-inner">
          <div className="flex justify-between items-center text-sm border-b border-slate-200/50 pb-2">
            <span className="text-slate-500 font-medium">দোকানের নাম:</span>
            <span className="font-bold text-slate-800">{data.shopName}</span>
          </div>

          <div className="flex justify-between items-center text-sm border-b border-slate-200/50 pb-2">
            <span className="text-slate-500 font-medium">কাজের সময়:</span>
            <span className="font-bold text-indigo-700">{data.businessHours}</span>
          </div>

          <div className="flex justify-between items-center text-sm border-b border-slate-200/50 pb-2">
            <span className="text-slate-500 font-medium">হোম কালেকশন:</span>
            <span className={`font-bold ${data.isHomeCollection ? 'text-green-600' : 'text-red-500'}`}>
              {data.isHomeCollection ? "উপলব্ধ" : "নেই"}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm border-b border-slate-200/50 pb-2">
            <span className="text-slate-500 font-medium">ওয়ারেন্টি:</span>
            <span className={data.hasWarranty ? "text-indigo-600 font-bold" : "text-slate-400"}>
              {data.hasWarranty ? "গ্যারান্টিড" : "নেই"}
            </span>
          </div>
          
          <p className="text-[9px] font-mono text-slate-300 pt-1">ID: {data._id}</p>
        </div>

        {/* ৫. উন্নত কল বাটন (সবার নিচে) */}
        <div className="mt-8 w-full px-2">
          <a
            href={`tel:${data.phone}`}
            className="group relative flex items-center justify-center gap-3 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4.5 rounded-[1.5rem] font-black text-xl shadow-[0_12px_25px_-5px_rgba(79,70,229,0.4)] transition-all duration-300 active:scale-[0.97]"
          >
            <div className="bg-white/20 p-2 rounded-xl group-hover:rotate-12 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <span>সরাসরি কল করুন</span>
          </a>
          <p className="text-center mt-4 text-[10px] text-slate-400 font-bold opacity-60">
             Trusted Service by Loyapara
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElectronicsDetailsModal;