import Image from "next/image";
import React from "react";

interface FarmerData {
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
  workType: string[];
  groupSize: string;
  dailyWage: string;
  hasTools: boolean;
}

const FarmerDetailsModal = ({ data }: { data: FarmerData }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
      {/* গ্রামীণ আবহের জন্য ডেকোরেটিভ এলিমেন্ট */}
      <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-green-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-yellow-100/40 rounded-full blur-3xl"></div>

      <div className="relative p-6">
        {/* প্রোফাইল সেকশন - মাটির ঘর বা প্রকৃতির ছোঁয়া */}
        <div className="flex flex-col items-center">
          <div className="relative p-1 bg-gradient-to-tr from-green-500 to-yellow-400 rounded-3xl shadow-lg">
            <div className="relative w-28 h-28">
              <Image
                src={data.profileImage}
                alt={data.name}
                fill // কন্টেইনারের সাইজ অনুযায়ী ইমেজ সেট করার জন্য
                className="object-cover rounded-[22px] border-4 border-white shadow-sm"
                sizes="(max-width: 112px) 100vw, 112px"
                priority // প্রোফাইল পিকচার দ্রুত লোড করার জন্য
              />
            </div>
            {data.isVerified && (
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1.5 rounded-full shadow-lg border-2 border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            )}
          </div>

          <h2 className="mt-4 text-2xl font-bold text-gray-800 tracking-tight">
            {data.name}
          </h2>
          <p className="text-green-700 font-medium flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            {data.category} ({data.nickName})
          </p>
        </div>

        {/* কুইক ইনফো কার্ডস */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="bg-white/60 backdrop-blur-md p-3 rounded-2xl border border-green-100 text-center shadow-sm">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
              অভিজ্ঞতা
            </p>
            <p className="text-gray-700 font-bold text-sm">{data.experience}</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md p-3 rounded-2xl border border-green-100 text-center shadow-sm">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
              রেটিং
            </p>
            <p className="text-yellow-600 font-bold text-sm">
              ⭐ {data.rating}
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-md p-3 rounded-2xl border border-green-100 text-center shadow-sm">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
              অবস্থান
            </p>
            <p className="text-gray-700 font-bold text-sm truncate">
              {data.location}
            </p>
          </div>
        </div>

        {/* কাজের দক্ষতা - ন্যাচারাল ট্যাগ্স */}
        <div className="mt-6">
          <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-green-600"
            >
              <path d="m12 10 4 4-4 4" />
              <path d="m12 14-4-4" />
              <path d="M18 10h-6a2 2 0 0 0-2 2v6" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            বিশেষ দক্ষতা:
          </h4>
          <div className="flex flex-wrap gap-2">
            {data.speciality.map((item, idx) => (
              <span
                key={idx}
                className="bg-green-100/80 text-green-800 text-xs px-3 py-1.5 rounded-xl border border-green-200/50 font-medium italic"
              >
                # {item}
              </span>
            ))}
          </div>
        </div>

        {/* মজুরি ও কাজের ধরন */}
        <div className="mt-6 space-y-3 bg-green-900/5 p-4 rounded-2xl border border-green-900/10">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">প্রতিদিনের মজুরি:</span>
            <span className="font-bold text-green-700">{data.dailyWage}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">কাজের ধরন:</span>
            <div className="flex gap-1">
              {data.workType.map((type, i) => (
                <span
                  key={i}
                  className="bg-white px-2 py-0.5 rounded-md text-[10px] border border-green-100"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">নিজস্ব সরঞ্জাম:</span>
            <span
              className={
                data.hasTools ? "text-blue-600 font-bold" : "text-gray-400"
              }
            >
              {data.hasTools ? "আছে" : "নেই"}
            </span>
          </div>
        </div>

        {/* কল বাটন - ভাইব্রেন্ট গ্রিন */}
        <div className="mt-8 flex gap-3">
          <a
            href={`tel:${data.phone}`}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-2xl font-bold shadow-lg shadow-green-200 active:scale-95 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            কল করুন
          </a>
        </div>
      </div>
    </div>
  );
};

export default FarmerDetailsModal;
