import Image from "next/image";
import React from "react";

interface ElectricianData {
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
  callTime: string;
  emergencyService: boolean;
  hasTools: boolean;
}

const ElectricianDetailsModal = ({ data }: { data: ElectricianData }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white max-w-2xl mx-auto rounded-3xl shadow-lg border border-blue-100">
      {/* ডেকোরেটিভ ব্যাকগ্রাউন্ড এলিমেন্ট */}
      <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-yellow-100/40 rounded-full blur-3xl"></div>

      <div className="relative p-6 flex flex-col items-center">
        {/* ১. প্রোফাইল সেকশন - Y Axis (সবার ওপরে) */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative p-1 bg-gradient-to-tr from-blue-600 to-yellow-400 rounded-3xl shadow-md">
            <div className="relative w-28 h-28 md:w-32 md:h-32">
              <Image
                src={data.profileImage}
                alt={data.name}
                fill
                className="object-cover rounded-[22px] border-4 border-white"
                sizes="(max-width: 128px) 100vw, 128px"
                priority
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
          <p className="text-blue-700 font-medium flex items-center gap-1">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            {data.category} ({data.nickName})
          </p>
          <span className="mt-2 px-3 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-full border border-blue-200 uppercase">
            {data.status}
          </span>
        </div>

        {/* ২. কুইক ইনফো কার্ডস (৩টি কলামে তথ্য) */}
        <div className="grid grid-cols-3 gap-3 w-full mb-8">
          <div className="bg-white/60 backdrop-blur-md p-3 rounded-2xl border border-blue-100 text-center shadow-sm">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
              অভিজ্ঞতা
            </p>
            <p className="text-gray-700 font-bold text-sm">{data.experience}</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md p-3 rounded-2xl border border-blue-100 text-center shadow-sm">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
              রেটিং
            </p>
            <p className="text-yellow-600 font-bold text-sm">⭐ {data.rating}</p>
          </div>
          <div className="bg-white/60 backdrop-blur-md p-3 rounded-2xl border border-blue-100 text-center shadow-sm">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">
              অবস্থান
            </p>
            <p className="text-gray-700 font-bold text-sm truncate">
              {data.location}
            </p>
          </div>
        </div>

        {/* ৩. বিশেষ দক্ষতা - Y Axis (সারিবদ্ধ ট্যাগস) */}
        <div className="w-full mb-8">
          <h4 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-blue-600"
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
                className="bg-blue-50 text-blue-800 text-xs px-3 py-1.5 rounded-xl border border-blue-100 font-medium italic"
              >
                # {item}
              </span>
            ))}
          </div>
        </div>

        {/* ৪. ডাটাবেসের সকল ডিটেইলস - Y Axis */}
        <div className="w-full space-y-4 bg-blue-900/5 p-5 rounded-3xl border border-blue-900/10">
          <div className="flex flex-col gap-2 pb-3 border-b border-blue-900/10">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-wider">প্রদেয় সেবাসমূহ:</span>
            <div className="flex flex-wrap gap-1">
              {data.serviceType.map((type, i) => (
                <span
                  key={i}
                  className="bg-white px-2 py-0.5 rounded-md text-[10px] border border-blue-100 text-slate-700 font-medium shadow-sm"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">কল করার সময়:</span>
            <span className="font-bold text-blue-800">{data.callTime}</span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">জরুরী সেবা:</span>
            <span className={`font-bold ${data.emergencyService ? 'text-green-600' : 'text-red-500'}`}>
              {data.emergencyService ? "২৪ ঘণ্টা উপলব্ধ" : "উপলব্ধ নেই"}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600">নিজস্ব সরঞ্জাম:</span>
            <span className={data.hasTools ? "text-blue-600 font-bold" : "text-gray-400"}>
              {data.hasTools ? "আছে" : "নেই"}
            </span>
          </div>

          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-400 text-[10px] font-mono">ID: {data._id}</span>
          </div>
        </div>

{/* ৫. কল বাটন (সবার নিচে) */}
        <div className="mt-8 w-full px-2"> 
          <a
            href={`tel:${data.phone}`}
            className="group relative flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-black text-xl shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] transition-all duration-300 active:scale-[0.97]"
          >
            {/* বাটনটি যেন আলাদাভাবে বোঝা যায় সেজন্য সলিড ব্যাকগ্রাউন্ড এবং শ্যাডো ব্যবহার করা হয়েছে */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:rotate-12 transition-transform duration-300"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            
            <span className="tracking-wide">সরাসরি কল করুন</span>
          </a>
          
          <p className="text-center mt-4 text-[11px] text-slate-500 font-bold opacity-70 italic">
             নিরাপদ সেবার জন্য লয়াপাড়া সার্ভিস ব্যবহার করুন
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElectricianDetailsModal;