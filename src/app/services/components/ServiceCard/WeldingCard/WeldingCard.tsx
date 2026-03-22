import { Welder } from '@/types/services/service';
import { Phone, Award, CheckCircle2, Info, Star, Hammer, MapPin, Clock, Zap, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const WeldingCard = ({ data }: { data: Welder }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-6 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden group h-full flex flex-col">
      
      {/* Orange Flare Decorative Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600 rounded-bl-[5rem] group-hover:bg-orange-500 transition-colors duration-500 opacity-10 group-hover:opacity-20" />

      <div className="relative z-10 flex flex-col flex-1">
        {/* Top Header: Category & Machine Badge */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 text-white px-3 py-2.5 rounded-2xl shadow-lg shadow-orange-950/40 border border-orange-500/50">
            <Zap size={18} className="text-orange-100 animate-pulse" />
            <span className="text-sm font-black uppercase tracking-widest leading-none">
              {data.category}
            </span>
          </div>
          
          {data.hasPortableMachine && (
            <div className="flex items-center gap-1.5 bg-orange-500/10 border border-orange-500/20 px-3 py-1.5 rounded-xl">
              <ShieldCheck size={12} className="text-orange-400" />
              <span className="text-[9px] font-black text-orange-400 uppercase tracking-tighter">পোর্টেবল সুবিধা</span>
            </div>
          )}
        </div>

        {/* Profile Section */}
        <div className="flex gap-5 items-center mb-6">
          <div className="relative shrink-0">
            <div className="w-20 h-20 rounded-[2rem] overflow-hidden border-4 border-slate-800 shadow-xl ring-2 ring-orange-500/10 group-hover:ring-orange-500 transition-all relative bg-slate-800">
              <Image 
                src={data.profileImage === "#" ? "/default-welder.png" : data.profileImage} 
                alt={data.name} 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
              />
            </div>
            {data.isVerified && (
              <div className="absolute -bottom-1 -right-1 bg-slate-900 rounded-full p-1 shadow-lg border border-slate-700">
                <CheckCircle2 size={18} className="text-orange-500 fill-orange-500/5" />
              </div>
            )}
          </div>
          
          <div className="flex-1">
             <div className="flex items-center gap-1 mb-1 text-slate-500">
               <Hammer size={12} className="text-orange-500" />
               <span className="text-[10px] font-black uppercase tracking-tighter truncate max-w-[150px]">
                 {data.workshopName}
               </span>
            </div>
            <h3 className="font-black text-2xl text-white leading-tight group-hover:text-orange-500 transition-colors">
              {data.name}
            </h3>
            
            <p className="text-orange-500 font-black text-[11px] uppercase mt-1 italic">
              {data.nickName}
            </p>
            
            <div className="flex items-center gap-1.5 mt-1">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={12} 
                    className={`${i < Math.floor(data.rating) ? "fill-orange-500 text-orange-500" : "fill-slate-700 text-slate-700"}`} 
                  />
                ))}
              </div>
              <span className="text-[11px] font-black text-slate-400">{data.rating}</span>
            </div>
          </div>
        </div>

        {/* Info Grid (Experience & Availability) */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-slate-800/40 p-4 rounded-3xl border border-slate-800 flex items-center gap-3">
            <div className="p-2 bg-slate-800 rounded-xl shadow-sm text-orange-500 border border-slate-700">
              <Award size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter">অভিজ্ঞতা</span>
              <span className="text-xs font-black text-slate-200">{data.experience}</span>
            </div>
          </div>
          <div className="bg-slate-800/40 p-4 rounded-3xl border border-slate-800 flex items-center gap-3">
            <div className="p-2 bg-slate-800 rounded-xl shadow-sm text-orange-500 border border-slate-700">
              <Clock size={18} />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-[9px] text-slate-500 font-bold uppercase tracking-tighter">সময়</span>
              <span className="text-[10px] font-black text-slate-200 leading-tight ">
                {data.callTime}
              </span>
            </div>
          </div>
        </div>

        {/* Speciality Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {data.speciality?.slice(0, 3).map((s, index) => (
            <span key={index} className="bg-orange-500/5 text-orange-200/60 px-3 py-1.5 rounded-xl text-[10px] font-bold border border-orange-500/10 hover:bg-orange-500/10 transition-colors">
              ⚡ {s}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <Link 
            href={`/services/${data._id}`}
            className="flex-1 py-4 bg-slate-800 text-slate-300 rounded-2xl text-[12px] font-black flex items-center justify-center gap-2 hover:bg-slate-700 transition-all active:scale-95 border border-slate-700"
          >
            <Info size={18} className="text-slate-500" /> বিস্তারিত
          </Link>
          
          <a 
            href={`tel:${data.phone}`} 
            className="flex-[1.8] py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white rounded-2xl text-[12px] font-black flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-95 shadow-lg shadow-orange-950/40"
          >
             <Phone size={18} className="fill-orange-900/20" /> 
             <span>কল দিন</span>
          </a>
        </div>
      </div>
    </div>
  );
};