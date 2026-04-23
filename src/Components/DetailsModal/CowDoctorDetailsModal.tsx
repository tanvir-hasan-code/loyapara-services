import React from 'react';
import Image from 'next/image';

interface CowDoctorData {
  name: string;
  nickName: string;
  phone: string;
  category: string;
  qualification: string;
  experience: string;
  location: string;
  speciality: string[];
  rating: number;
  isVerified: boolean;
  status: string;
  profileImage: string;
  serviceType: string;
  callTime: string;
  emergencyService: boolean;
  hasVaccine: boolean;
}

const CowDoctorDetailsModal = ({ data }: { data: CowDoctorData }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      {/* Decorative Medical Background Elements */}
      <div className="absolute top-0 right-0 -mr-12 -mt-12 w-48 h-48 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-12 -mb-12 w-40 h-40 bg-sky-100/40 rounded-full blur-3xl"></div>

      <div className="relative p-6">
        {/* Header: Profile & Status */}
        <div className="flex flex-col items-center">
          <div className="relative w-28 h-28 p-1 bg-white rounded-3xl shadow-xl border border-blue-100">
            <div className="relative w-full h-full">
              <Image
                src={data.profileImage}
                alt={data.name}
                fill
                className="object-cover rounded-2xl"
                priority
              />
            </div>
            {data.isVerified && (
              <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1.5 rounded-full shadow-lg border-2 border-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
            )}
          </div>
          
          <h2 className="mt-4 text-2xl font-bold text-slate-800 tracking-tight">{data.name}</h2>
          <p className="text-blue-600 font-semibold text-sm bg-blue-50 px-3 py-1 rounded-full mt-1">
            {data.category} • {data.nickName}
          </p>
          <p className="text-gray-500 text-xs mt-2 italic font-medium">"{data.qualification}"</p>
        </div>

        {/* Vital Stats Cards */}
        <div className="grid grid-cols-3 gap-3 mt-6">
          <div className="bg-white p-3 rounded-2xl border border-slate-100 text-center shadow-sm">
            <p className="text-[10px] text-gray-400 uppercase font-bold">অভিজ্ঞতা</p>
            <p className="text-slate-700 font-bold text-sm">{data.experience}</p>
          </div>
          <div className="bg-white p-3 rounded-2xl border border-slate-100 text-center shadow-sm">
            <p className="text-[10px] text-gray-400 uppercase font-bold">রেটিং</p>
            <p className="text-amber-600 font-bold text-sm">⭐ {data.rating}</p>
          </div>
          <div className="bg-white p-3 rounded-2xl border border-slate-100 text-center shadow-sm">
            <p className="text-[10px] text-gray-400 uppercase font-bold">ভ্যাকসিন</p>
            <p className="text-blue-600 font-bold text-sm">{data.hasVaccine ? "উপলব্ধ" : "নেই"}</p>
          </div>
        </div>

        {/* Speciality - Pills Design */}
        <div className="mt-6">
          <h4 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
            চিকিৎসা সেবা সমূহ:
          </h4>
          <div className="flex flex-wrap gap-2">
            {data.speciality.map((skill, idx) => (
              <span key={idx} className="bg-white text-slate-700 text-[11px] px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Service Details List */}
        <div className="mt-6 space-y-3 bg-blue-600/5 p-4 rounded-2xl border border-blue-100">
          <div className="flex items-start gap-3">
            <div className="mt-1 bg-blue-100 p-1 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase">সেবার স্থান ও ধরন</p>
              <p className="text-sm text-slate-700 font-medium">{data.serviceType}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="mt-1 bg-blue-100 p-1 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </div>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase">যোগাযোগের সময়</p>
              <p className="text-sm text-slate-700 font-medium">{data.callTime}</p>
            </div>
          </div>
        </div>

        {/* Emergency Badge */}
        {data.emergencyService && (
          <div className="mt-4 flex items-center justify-center gap-2 bg-red-50 text-red-600 py-2 rounded-xl border border-red-100 animate-pulse">
            <span className="w-2 h-2 bg-red-600 rounded-full"></span>
            <span className="text-xs font-bold uppercase tracking-wider text-[10px]">জরুরি সেবা উপলব্ধ</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3">
          <a
            href={`tel:${data.phone}`}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-bold shadow-lg shadow-blue-200 transition-all active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            কল করুন
          </a>
        </div>
      </div>
    </div>
  );
};

export default CowDoctorDetailsModal;