import Image from "next/image";
import React from "react";

// ডাটা ইন্টারফেস (আগের মতোই রাখা হয়েছে)
interface PlumberData {
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
  serviceType: string[];
  hasModernTools: boolean;
  isHomeVisit: boolean;
  callTime: string;
}

const PlumberDetailsModal = ({ data }: { data: PlumberData }) => {
  // ডাটা না থাকলে প্রিভেন্ট এরর
  if (!data) return null;

  return (
    <div className="relative overflow-hidden bg-white max-w-2xl mx-auto rounded-[3rem] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.15)] border border-neutral-100 transition-all duration-500 transform hover:shadow-[0_40px_100px_-15px_rgba(13,148,136,0.2)]">
      {/* সুক্ষ্ম ব্যাকগ্রাউন্ড ডেকোরেশন (মডার্ন টিল/গোল্ড থিম) */}
      <div className="absolute top-0 right-0 w-60 h-60 bg-teal-500/5 rounded-full blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-amber-500/5 rounded-full blur-[90px] pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-teal-50/50 to-transparent opacity-60"></div>

      <div className="relative p-6 md:p-12 flex flex-col items-center">
        {/* ১. প্রোফাইল সেকশন (প্রিমিয়াম বর্ডার ও শ্যাডো) */}
        <div className="flex flex-col items-center mb-12 w-full">
          {/* প্রোফাইল পিকচারের প্রিমিয়াম বর্ডার (গ্রেডিয়েন্ট) */}
          <div className="relative p-1.5 bg-gradient-to-tr from-teal-600 via-amber-400 to-cyan-500 rounded-full shadow-[0_10px_30px_-5px_rgba(13,148,136,0.3)] transform hover:scale-105 transition-transform duration-500 ease-out">
            <div className="relative w-28 h-28 md:w-36 md:h-36">
              <Image
                src={data.profileImage || "/placeholder.png"} // প্লেসহোল্ডার ইমেজ ব্যবহার করার পরামর্শ
                alt={data.name}
                fill
                className="object-cover rounded-full border-4 border-white shadow-inner"
                sizes="(max-width: 128px) 112px, 144px"
                priority
              />
            </div>
            {/* ভেরিফাইড ব্যাজ (নতুন লুক) */}
            {data.isVerified && (
              <div className="absolute bottom-1 right-1 bg-gradient-to-b from-teal-500 to-teal-700 text-white p-2 md:p-2.5 rounded-full shadow-lg border-2 border-white transform transition-transform duration-300 hover:rotate-12">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 md:w-5 md:h-5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            )}
          </div>

          {/* নাম এবং স্ট্যাটাস */}
          <h2 className="mt-8 text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tighter text-center leading-tight">
            {data.name}
          </h2>
          <div className="flex flex-col items-center gap-2 mt-2">
            <p className="text-teal-700 font-bold text-base md:text-lg tracking-wide flex items-center gap-2.5">
              <span className="animate-pulse">💧</span> {data.category} —{" "}
              {data.nickName}
            </p>
            {/* স্ট্যাটাস ব্যাজ (নতুন লুক) */}
            <span className="px-5 py-1.5 bg-teal-50 text-teal-700 text-[11px] md:text-xs font-black rounded-full border border-teal-200 uppercase mt-2 shadow-sm tracking-widest">
              ● {data.status}
            </span>
          </div>
        </div>

        {/* ২. হাইলাইট কার্ডস (৩টি কলাম - উন্নত ডিজাইন) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 w-full mb-12">
          <div className="bg-white p-6 rounded-[2rem] border border-teal-100 text-center shadow-lg transition-all duration-300 hover:border-teal-300 hover:shadow-2xl">
            <p className="text-[11px] md:text-xs text-neutral-500 uppercase font-bold mb-1.5 tracking-wider">
              অভিজ্ঞতা
            </p>
            <p className="text-neutral-900 font-extrabold text-lg md:text-xl tracking-tight">
              {data.experience}
            </p>
          </div>
          <div className="bg-amber-50 p-6 rounded-[2rem] border border-amber-100 text-center shadow-lg transition-all duration-300 hover:border-amber-300 hover:shadow-2xl">
            <p className="text-[11px] md:text-xs text-amber-600 uppercase font-bold mb-1.5 tracking-wider">
              রেটিং
            </p>
            <p className="text-neutral-900 font-extrabold text-lg md:text-xl tracking-tight">
              ⭐ {data.rating}
            </p>
          </div>
          <div className="bg-white p-6 rounded-[2rem] border border-teal-100 text-center shadow-lg transition-all duration-300 hover:border-teal-300 hover:shadow-2xl">
            <p className="text-[11px] md:text-xs text-neutral-500 uppercase font-bold mb-1.5 tracking-wider">
              অবস্থান
            </p>
            <p
              className="text-neutral-900 font-extrabold text-xs md:text-sm truncate px-1"
              title={data.location}
            >
              {data.location}
            </p>
          </div>
        </div>

        {/* ৩. স্পেশালিটি ও সার্ভিস ডিটেইলস (নতুন সেকশন) */}
        <div className="w-full space-y-12">
          {/* বিশেষ দক্ষতাসমূহ (নতুন সেকশন ডিজাইন) */}
          <div className="bg-neutral-50 p-8 rounded-[3rem] border border-neutral-100">
            <h4 className="text-xs font-black text-neutral-500 mb-6 flex items-center gap-3 uppercase tracking-[0.2em]">
              <span className="w-2.5 h-6 bg-teal-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(13,148,136,0.5)]"></span>{" "}
              বিশেষ দক্ষতাসমূহ:
            </h4>
            <div className="flex flex-wrap gap-3">
              {data.speciality.map((item, idx) => (
                <span
                  key={idx}
                  className="bg-white text-teal-900 text-[11px] md:text-xs px-5 py-3 rounded-xl border border-teal-100 font-extrabold shadow-sm italic transition-all hover:bg-teal-50 hover:border-teal-300"
                >
                  # {item}
                </span>
              ))}
            </div>
          </div>

          {/* অতিরিক্ত তথ্য ও সার্ভিসের ধরন (উন্নত লুক) */}
          <div className="bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-800 p-8 md:p-10 rounded-[3rem] border border-neutral-700 shadow-3xl mb-12 text-white">
            <h4 className="text-xs font-black text-teal-400 mb-6 flex items-center gap-3 uppercase tracking-[0.2em]">
              <span className="w-2.5 h-6 bg-teal-400 rounded-full shadow-[0_0_15px_rgba(45,212,191,0.5)]"></span>{" "}
              অতিরিক্ত তথ্য ও সেবা:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 border-t border-neutral-800 pt-6">
              <div className="flex justify-between items-center text-sm">
                <span className="text-neutral-400 font-medium">
                  কল করার সময়:
                </span>
                <span className="font-extrabold text-teal-300 text-base">
                  {data.callTime}
                </span>
              </div>

              <div className="flex justify-between items-center text-sm">
                <span className="text-neutral-400 font-medium">
                  আধুনিক যন্ত্রপাতি:
                </span>
                <span
                  className={`font-extrabold text-base ${data.hasModernTools ? "text-emerald-400" : "text-rose-400"}`}
                >
                  {data.hasModernTools ? "উপলব্ধ" : "নেই"}
                </span>
              </div>

              <div className="flex justify-between items-center text-sm col-span-1 md:col-span-2">
                <span className="text-neutral-400 font-medium">
                  হোম ভিজিট (বাড়ি বাড়ি):
                </span>
                <span
                  className={`font-extrabold text-base ${data.isHomeVisit ? "text-emerald-400" : "text-neutral-500"}`}
                >
                  {data.isHomeVisit ? "উপলব্ধ (হ্যাঁ)" : "উপলব্ধ নেই (-)"}
                </span>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-neutral-800">
              <span className="text-neutral-400 font-medium text-xs uppercase tracking-wider block mb-4">
                সার্ভিসের ধরন:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {data.serviceType.map((s, i) => (
                  <span
                    key={i}
                    className="text-[11px] md:text-xs font-bold text-teal-100 bg-teal-950 px-3.5 py-2 rounded-lg border border-teal-800 shadow-sm transition-all hover:bg-teal-900 hover:border-teal-700"
                  >
                    🛠️ {s}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-[9px] md:text-[10px] font-mono text-neutral-600 pt-4 tracking-tighter uppercase text-center md:text-left mt-6">
              REF-ID: {data._id}
            </p>
          </div>
        </div>

        {/* ৪. প্রিমিয়াম কল বাটন */}
        <div className="w-full px-2 mt-12">
          <a
            href={`tel:${data.phone}`}
            className="group relative flex items-center justify-center gap-4 w-full bg-teal-600 hover:bg-teal-700 text-white py-5 md:py-6 rounded-2xl md:rounded-[1.8rem] font-black text-2xl md:text-3xl shadow-[0_20px_60px_-10px_rgba(13,148,136,0.6)] transition-all duration-300 active:scale-[0.96] overflow-hidden"
          >
            {/* বাটন শাইন অ্যানিমেশন (উন্নত) */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

            {/* কল আইকন */}
            <div className="bg-white/10 p-2.5 md:p-3 rounded-2xl group-hover:rotate-12 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 md:w-5 md:h-5"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <span className="relative z-10 tracking-tight drop-shadow-lg">
               কল দিন
            </span>
          </a>
          <p className="text-center mt-8 text-[12px] md:text-[13px] text-teal-950 font-extrabold tracking-[0.3em] uppercase opacity-70">
            Trusted by Loyapara Service Provider
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlumberDetailsModal;
