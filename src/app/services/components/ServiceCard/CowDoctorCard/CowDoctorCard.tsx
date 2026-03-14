import { CowDoctor } from '@/types/services/service';
import { Phone, MapPin, Award, Syringe, CheckCircle2, Info, Stethoscope, HeartPulse, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CowDoctorCard = ({ data }: { data: CowDoctor }) => {
  return (
    <div className="bg-white border border-teal-100 rounded-[2.5rem] p-6 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
      
      {/* Background Health Glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-teal-50 rounded-full group-hover:scale-[2] transition-transform duration-700 opacity-60" />

      <div className="relative z-10">
        {/* Top Header: Big Category & Emergency Status */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2 bg-teal-700 text-white px-5 py-2.5 rounded-2xl shadow-lg shadow-teal-100">
            <Stethoscope size={18} className="text-teal-200" />
            <span className="text-sm font-black uppercase tracking-widest leading-none">
              পশু চিকিৎসক
            </span>
          </div>
          
          {/* Animated Emergency Badge */}
          <div className="flex items-center gap-2 bg-rose-50 border border-rose-100 px-4 py-2 rounded-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
            </span>
            <span className="text-[10px] font-black text-rose-700 uppercase">
              জরুরি সেবা
            </span>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex gap-5 items-center mb-6">
          <div className="relative shrink-0">
            <div className="w-20 h-20 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl ring-2 ring-teal-100 group-hover:ring-teal-500 transition-all relative bg-slate-100">
              <Image 
                src={data.profileImage} 
                alt={data.name} 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            {data.isVerified && (
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-lg">
                <CheckCircle2 size={18} className="text-blue-500 fill-blue-50" />
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-1 mb-1 text-teal-600">
               <HeartPulse size={12} className="animate-pulse" />
               <span className="text-[10px] font-black uppercase tracking-tighter">রেজিস্টার্ড ডাক্তার</span>
            </div>
            <h3 className="font-black text-2xl text-slate-900 leading-tight group-hover:text-teal-700 transition-colors">
              {data.name}
            </h3>
            <p className="text-teal-600 font-bold text-xs">ডাকনাম: {data.nickName}</p>

            {/* Star Rating Section - New Addition */}
            <div className="flex items-center gap-1.5 mt-2">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={12} 
                    className={`${i < Math.floor(data.rating) ? "fill-amber-400 text-amber-400" : "fill-slate-200 text-slate-200"}`} 
                  />
                ))}
              </div>
              <span className="text-[11px] font-black text-slate-700">{data.rating}</span>
            </div>
          </div>
        </div>

        {/* Qualification Highlight */}
        <div className="mb-6 bg-slate-50 border border-slate-100 p-4 rounded-3xl group-hover:bg-white group-hover:border-teal-100 transition-all">
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest mb-1">যোগ্যতা ও পদবী</p>
          <p className="text-xs text-slate-700 font-bold leading-relaxed italic">
            {data.qualification}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-3 bg-teal-50/50 p-3 rounded-2xl border border-teal-100">
            <div className="p-2 bg-white rounded-xl shadow-sm text-teal-600">
              <Award size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-teal-700 font-bold uppercase tracking-tighter">অভিজ্ঞতা</span>
              <span className="text-xs font-black text-slate-800">{data.experience}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 p-3 rounded-2xl border border-slate-100">
            <div className="p-2 bg-white rounded-xl shadow-sm text-teal-600">
              <MapPin size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">লোকেশন</span>
              <span className="text-xs font-black text-slate-800">{data.location}</span>
            </div>
          </div>
        </div>

        {/* Speciality & Vaccine Badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {data.speciality.slice(0, 2).map((s) => (
            <span key={s} className="bg-white border border-teal-100 text-teal-700 px-3 py-1.5 rounded-xl text-[10px] font-bold">
              • {s}
            </span>
          ))}
          {data.hasVaccine && (
            <span className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-xl text-[10px] font-black flex items-center gap-1 border border-blue-100">
               <Syringe size={12} /> ভ্যাকসিন আছে
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link 
            href={`/services/${data._id}`}
            className="flex-1 py-4 bg-slate-100 text-slate-700 rounded-2xl text-[12px] font-black flex items-center justify-center gap-2 hover:bg-slate-200 transition-all active:scale-95"
          >
            <Info size={18} className="text-slate-400" /> বিস্তারিত
          </Link>
          
          <a 
            href={`tel:${data.phone}`} 
            className="flex-[1.8] py-4 bg-teal-600 text-white rounded-2xl text-[12px] font-black flex items-center justify-center gap-2 hover:bg-teal-700 hover:shadow-xl hover:shadow-teal-100 transition-all active:scale-95 shadow-lg shadow-teal-50 group/btn"
          >
             <Phone size={18} className="fill-white/20 group-hover:animate-bounce" /> 
             <span>কল করুন</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CowDoctorCard;