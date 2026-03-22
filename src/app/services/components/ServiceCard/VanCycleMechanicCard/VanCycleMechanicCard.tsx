import { CycleVanishMechanic } from '@/types/services/service';
import { Phone, Award, CheckCircle2, Info, Star, Wrench, MapPin, Clock, Settings, Boxes } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const VanCycleMechanicCard = ({ data }: { data: CycleVanishMechanic }) => {
  return (
    <div className="bg-white border border-blue-100 rounded-[2.5rem] p-6 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden group h-full flex flex-col">
      
      {/* Blue Gear Decorative Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[5rem] group-hover:bg-blue-600 transition-colors duration-500 opacity-50 group-hover:opacity-10" />

      <div className="relative z-10 flex flex-col flex-1">
        {/* Top Header: Category & Availability */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2.5 rounded-2xl shadow-lg shadow-blue-100 border border-blue-500">
            <Wrench size={18} className="text-blue-100 animate-spin-slow" />
            <span className="text-sm font-black uppercase tracking-widest leading-none">
              {data.category}
            </span>
          </div>
          
          {data.status === "Available" && (
            <div className="flex items-center gap-1.5 bg-green-50 border border-green-100 px-3 py-1.5 rounded-xl">
              <div className="w-1.5 h-1.5 bg-green-600 rounded-full animate-pulse" />
              <span className="text-[9px] font-black text-green-700 uppercase tracking-tighter">সার্ভিস এভেলেবল</span>
            </div>
          )}
        </div>

        {/* Profile Section */}
        <div className="flex gap-5 items-center mb-6">
          <div className="relative shrink-0">
            <div className="w-20 h-20 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl ring-2 ring-blue-50 group-hover:ring-blue-500 transition-all relative bg-slate-100">
              <Image 
                src={data.profileImage === "#" ? "/default-mechanic.png" : data.profileImage} 
                alt={data.name} 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            {data.isVerified && (
              <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-lg">
                <CheckCircle2 size={18} className="text-blue-600 fill-blue-50" />
              </div>
            )}
          </div>
          
          <div className="flex-1">
             <div className="flex items-center gap-1 mb-1 text-slate-400">
               <Settings size={12} className="animate-spin-slow" />
               <span className="text-[10px] font-black uppercase tracking-tighter">এক্সপার্ট মেকানিক</span>
            </div>
            <h3 className="font-black text-2xl text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
              {data.name}
            </h3>
            
            <p className="text-blue-700 font-black text-[11px] uppercase mt-1">
              ডাকনাম: {data.nickName}
            </p>
            
            <div className="flex items-center gap-1.5 mt-1">
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

        {/* Features/Parts Info Badge */}
        <div className="mb-6 flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2 rounded-2xl">
            <Boxes size={16} className="text-blue-600 shrink-0" />
            <span className="text-xs font-bold text-slate-700 tracking-tight">
              পার্টস: {data.partsAvailable?.slice(0, 3).join(", ")}...
            </span>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100 flex items-center gap-3">
            <div className="p-2 bg-white rounded-xl shadow-sm text-blue-600">
              <Award size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">অভিজ্ঞতা</span>
              <span className="text-xs font-black text-slate-800">{data.experience}</span>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100 flex items-center gap-3">
            <div className="p-2 bg-white rounded-xl shadow-sm text-blue-600">
              <Clock size={18} />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">সময়</span>
              <span className="text-[10px] font-black text-slate-800 leading-tight ">
                {data.businessHours}
              </span>
            </div>
          </div>
        </div>

        {/* Speciality Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {data.speciality?.slice(0, 3).map((s, index) => (
            <span key={index} className="bg-blue-50 text-blue-800 px-3 py-1.5 rounded-xl text-[10px] font-bold border border-blue-100 hover:bg-blue-100 transition-colors">
              ⚙️ {s}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <Link 
            href={`/services/${data._id}`}
            className="flex-1 py-4 bg-slate-100 text-slate-700 rounded-2xl text-[12px] font-black flex items-center justify-center gap-2 hover:bg-slate-200 transition-all active:scale-95 border border-slate-200"
          >
            <Info size={18} className="text-slate-400" /> বিস্তারিত
          </Link>
          
          <a 
            href={`tel:${data.phone}`} 
            className="flex-[1.8] py-4 bg-blue-600 text-white rounded-2xl text-[12px] font-black flex items-center justify-center gap-2 hover:bg-blue-700 transition-all active:scale-95 shadow-lg shadow-blue-100 border border-blue-500"
          >
             <Phone size={18} className="fill-blue-500/20" /> 
             <span>কল দিন</span>
          </a>
        </div>
      </div>
    </div>
  );
};