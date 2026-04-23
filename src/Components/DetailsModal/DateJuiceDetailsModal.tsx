import React from 'react';
import Image from 'next/image';

interface DateJuiceData {
  name: string;
  nickName: string;
  phone: string;
  category: string;
  pricePerLitre: string;
  location: string;
  speciality: string[];
  rating: number;
  isVerified: boolean;
  status: string;
  profileImage: string;
  collectionTime: string;
  isHomeDelivery: boolean;
  hasGur: boolean;
}

const DateJuiceDetailsModal = ({ data }: { data: DateJuiceData }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white">
      {/* শীতকালীন ভোরের আবেশ দিতে কুয়াশাচ্ছন্ন ব্যাকগ্রাউন্ড ইফেক্ট */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-56 h-56 bg-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-amber-100/40 rounded-full blur-3xl"></div>

      <div className="relative p-6">
        {/* Header: গাছি প্রোফাইল */}
        <div className="flex flex-col items-center">
          <div className="relative w-28 h-28 p-1.5 bg-gradient-to-tr from-orange-400 to-amber-700 rounded-full shadow-2xl">
            <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-white">
              <Image
                src={data.profileImage}
                alt={data.name}
                fill
                className="object-cover"
                priority
              />
            </div>
            {data.isVerified && (
              <div className="absolute bottom-1 right-1 bg-green-600 text-white p-1.5 rounded-full shadow-lg border-2 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
            )}
          </div>
          
          <h2 className="mt-4 text-2xl font-bold text-amber-900 tracking-tight">{data.name}</h2>
          <p className="text-orange-700 font-bold text-sm bg-orange-100 px-4 py-1 rounded-full mt-2 border border-orange-200">
            {data.category} • {data.nickName}
          </p>
          <div className="mt-2 flex items-center gap-2">
             <span className="text-xs font-medium text-amber-600 bg-white px-2 py-0.5 rounded border border-amber-100 shadow-sm">
                {data.status}
             </span>
          </div>
        </div>

        {/* Pricing & Key Info Card */}
        <div className="grid grid-cols-3 gap-3 mt-8">
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-orange-100 text-center shadow-sm">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">প্রতি লিটার</p>
            <p className="text-orange-700 font-black text-base">৳{data.pricePerLitre}</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-orange-100 text-center shadow-sm">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">রেটিং</p>
            <p className="text-amber-600 font-bold text-base">⭐ {data.rating}</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-orange-100 text-center shadow-sm">
            <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">অরজিনাল গুড়</p>
            <p className="text-amber-800 font-bold text-base">{data.hasGur ? "পাওয়া যায়" : "নেই"}</p>
          </div>
        </div>

        {/* Speciality: খেজুরের রসের বৈশিষ্ট্য */}
        <div className="mt-8">
          <h4 className="text-sm font-bold text-amber-900 mb-4 flex items-center gap-2">
            <span className="p-1 bg-orange-100 rounded-lg text-orange-600">🍯</span>
            সেরা বৈশিষ্ট্যসমূহ:
          </h4>
          <div className="flex flex-wrap gap-2">
            {data.speciality.map((item, idx) => (
              <span key={idx} className="bg-gradient-to-r from-amber-50 to-orange-50 text-amber-900 text-[11px] px-3 py-2 rounded-xl border border-orange-100 font-medium shadow-sm">
                ✦ {item}
              </span>
            ))}
          </div>
        </div>

        {/* Collection & Location Info */}
        <div className="mt-8 space-y-4 bg-amber-900/5 p-5 rounded-[2rem] border border-amber-900/10">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm text-orange-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">সংগ্রহের সময় (ভোর)</p>
              <p className="text-sm text-amber-900 font-bold">{data.collectionTime}</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-sm text-orange-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">অবস্থান</p>
              <p className="text-sm text-amber-900 font-bold">{data.location}</p>
            </div>
          </div>
        </div>

        {/* Home Delivery Status */}
        <div className={`mt-6 text-center py-2 px-4 rounded-xl border text-[11px] font-bold uppercase tracking-widest ${data.isHomeDelivery ? 'bg-green-50 border-green-200 text-green-700' : 'bg-gray-50 border-gray-200 text-gray-400'}`}>
          {data.isHomeDelivery ? "✅ হোম ডেলিভারি দেওয়া হয়" : "❌ হোম ডেলিভারি নেই (এসে নিতে হবে)"}
        </div>

        {/* Call Button */}
        <div className="mt-8 flex gap-3">
          <a
            href={`tel:${data.phone}`}
            className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-amber-700 to-orange-800 text-white py-4 rounded-[1.5rem] font-bold shadow-xl shadow-orange-200 active:scale-95 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            রসের জন্য কল করুন
          </a>
        </div>
      </div>
    </div>
  );
};

export default DateJuiceDetailsModal;