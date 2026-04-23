import Image from "next/image";
import React from "react";

// এই ডাটা ইন্টারফেসটি আপনার ডাটাবেস স্ট্রাকচার অনুযায়ী সেট করা হয়েছে
interface HomeopathicData {
  _id: string;
  name: string;
  nickName: string;
  phone: string;
  category: string;
  degree: string; // ডাটাবেসের ড্যাশ (-) ফিল্ড
  experience: string;
  location: string;
  speciality: string[];
  rating: number;
  isVerified: boolean;
  status: string; // ডাটাবেসের 'কাগইল বাজারে দোকান' ফিল্ড
  profileImage: string;
  chamberTime: string;
  offDay: string; // ডাটাবেসের ড্যাশ (-) ফিল্ড
  visitFee: string; // ডাটাবেসের 'আলোচনা সাপেক্ষে' ফিল্ড
  hasMedicine: boolean;
}

const HomeopathicDoctorDetailsModal = ({ data }: { data: HomeopathicData }) => {
  return (
    <div className="relative overflow-hidden bg-white max-w-2xl mx-auto rounded-[2.5rem] shadow-2xl border border-teal-100">
      
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন (রঙিন গ্র্যাডিয়েন্ট) */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-emerald-50 opacity-50"></div>

      <div className="relative p-6 md:p-10 flex flex-col items-center">
        
        {/* ১. প্রোফাইল সেকশন (রঙিন গ্র্যাডিয়েন্ট ফ্রেম) */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative p-1 bg-gradient-to-tr from-teal-600 via-emerald-600 to-blue-400 rounded-3xl shadow-xl">
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
              <div className="absolute -bottom-2 -right-2 bg-teal-600 text-white p-1.5 rounded-full shadow-lg border-2 border-white">
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
             <p className="text-teal-700 font-bold text-sm tracking-wide">
               {data.category} — {data.nickName}
             </p>
             <span className="px-3 py-0.5 bg-teal-50 text-teal-700 text-[10px] font-black rounded-full border border-teal-100 uppercase mt-1">
               ● {data.status}
             </span>
          </div>
        </div>

        {/* ২. হাইলাইট বক্সস (৩টি बॉक्स) */}
        <div className="grid grid-cols-3 gap-3 w-full mb-8">
          <div className="bg-white/70 p-3 rounded-2xl border border-teal-100 text-center shadow-sm">
            <p className="text-[10px] text-teal-600 uppercase font-black mb-1 tracking-tighter">অভিজ্ঞতা</p>
            <p className="text-slate-700 font-bold text-sm">{data.experience}</p>
          </div>
          <div className="bg-white/70 p-3 rounded-2xl border border-teal-100 text-center shadow-sm">
            <p className="text-[10px] text-teal-600 uppercase font-black mb-1 tracking-tighter">রেটিং</p>
            <p className="text-teal-700 font-bold text-sm">⭐ {data.rating}</p>
          </div>
          <div className="bg-white/70 p-3 rounded-2xl border border-teal-100 text-center shadow-sm">
            <p className="text-[10px] text-teal-600 uppercase font-black mb-1 tracking-tighter">অবস্থান</p>
            <p className="text-slate-700 font-bold text-sm truncate">{data.location}</p>
          </div>
        </div>

        {/* ৩. বিশেষ দক্ষতা (Tags - রঙিন গ্র্যাডিয়েন্ট) */}
        <div className="w-full mb-8">
          <h4 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
            <span className="text-teal-600">🩺</span> বিশেষ চিকিৎসা সেবা:
          </h4>
          <div className="flex flex-wrap gap-2">
            {data.speciality.map((item, idx) => (
              <span key={idx} className="bg-gradient-to-r from-teal-100 to-emerald-100 text-teal-800 text-xs px-3 py-1.5 rounded-xl border border-teal-200 font-medium italic">
                # {item}
              </span>
            ))}
          </div>
        </div>

        {/* ৪. সকল অতিরিক্ত তথ্য (Y-Axis) */}
        <div className="w-full space-y-3 bg-white/50 p-5 rounded-[2rem] border border-teal-100 shadow-inner mb-8">
          
          {[
            { label: "ডিগ্রী", value: data.degree },
            { label: "চেম্বারের সময়", value: data.chamberTime, highlight: true },
            { label: "বন্ধের দিন", value: data.offDay, color: "text-red-500" },
            { label: "ভিজিট ফি", value: data.visitFee, highlight: true },
            { label: "ওষুধ পাওয়া যায়", value: data.hasMedicine ? "হ্যাঁ" : "না", color: "text-green-600" }
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between items-center text-sm border-b border-teal-100 pb-2 last:border-0 last:pb-0">
              <span className="text-slate-500 font-medium">{item.label}:</span>
              <span className={`font-black ${item.highlight ? 'text-teal-700' : item.color || 'text-slate-800'}`}>
                {item.value}
              </span>
            </div>
          ))}
          
          <p className="text-[9px] font-mono text-slate-300 pt-1">REF-ID: {data._id}</p>
        </div>

{/* ৫. ফিক্সড কল বাটন (সবার নিচে) */}
<div className="mt-10 w-full px-2 pb-4">
  <a
    href={`tel:${data.phone}`}
    // এখানে bg-[#0d9488] একদম সলিড কালার দেওয়া হয়েছে যাতে ইনভিজিবল না থাকে
    className="group relative flex items-center justify-center gap-4 w-full bg-green-500 text-white hover:bg-[#0f766e]  py-5 rounded-[1.5rem] font-black text-2xl  transition-all duration-300 active:scale-[0.96] overflow-hidden"
  >
    {/* বাটন শাইন ইফেক্ট */}
    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
    
    <div className="bg-white/20 p-2 rounded-xl group-hover:rotate-12 transition-transform">
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    </div>
    
    <span className="relative z-10">সিরিয়ালের জন্য কল দিন</span>
  </a>
  
  <p className="text-center mt-6 text-[12px] text-teal-800 font-extrabold tracking-wider">
    লয়াপাড়া সার্ভিস দ্বারা বিশ্বস্ত
  </p>
</div>
      </div>
    </div>
  );
};

export default HomeopathicDoctorDetailsModal;