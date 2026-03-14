import { AgriLaborer } from '@/types/services/service';
import { Phone, Award, CheckCircle2, Info, Star, Users, Sprout, Handshake, Pickaxe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const FarmerCard = ({ data }: { data: AgriLaborer }) => {
  // Safe ID handling for Link
  const serviceId = (data as any)._id || (data as any).id || "";

  return (
    <div className="bg-white border border-emerald-100 rounded-[2.5rem] p-6 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden group h-full flex flex-col">
      
      {/* Decorative Natural Pattern Glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-50 rounded-full group-hover:scale-[2] transition-transform duration-700 opacity-60" />

      <div className="relative z-10 flex flex-col flex-1">
        {/* Top Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-2xl shadow-lg shadow-emerald-100">
            <Sprout size={18} className="text-emerald-100 animate-pulse" />
            <span className="text-sm font-black uppercase tracking-widest leading-none">
              {data.category}
            </span>
          </div>
          
          {data?.hasTools && (
            <div className="flex items-center gap-1.5 bg-orange-50 border border-orange-100 px-3 py-1.5 rounded-xl">
              <Pickaxe size={12} className="text-orange-600" />
              <span className="text-[9px] font-black text-orange-700 uppercase">সরঞ্জাম আছে</span>
            </div>
          )}
        </div>

        {/* Profile Section */}
        <div className="flex gap-5 items-center mb-6">
          <div className="relative shrink-0">
            <div className="w-20 h-20 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl ring-2 ring-emerald-100 group-hover:ring-emerald-400 transition-all relative bg-slate-100">
              <Image 
                src={data.profileImage === "#" ? "https://cdn-icons-png.flaticon.com/512/1995/1995471.png" : data.profileImage} 
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
            <h3 className="font-black text-2xl text-slate-900 leading-tight group-hover:text-emerald-600 transition-colors">
              {data.name}
            </h3>
            <p className="text-emerald-600 font-black text-[11px] uppercase mt-1">
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

        {/* Wage Badge */}
        <div className="mb-6 flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-2xl">
            <Handshake size={16} className="text-emerald-600" />
            <span className="text-xs font-bold text-emerald-800 tracking-tight">মজুরি: {data.dailyWage}</span>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100 flex items-center gap-3">
            <div className="p-2 bg-white rounded-xl shadow-sm text-emerald-600">
              <Award size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">অভিজ্ঞতা</span>
              <span className="text-xs font-black text-slate-800">{data.experience}</span>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100 flex items-center gap-3">
            <div className="p-2 bg-white rounded-xl shadow-sm text-emerald-600">
              <Users size={18} />
            </div>
            <div className="flex flex-col overflow-hidden">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">কাজের ধরণ</span>
              <span className="text-[10px] font-black text-slate-800 leading-tight">
                {data.workType?.[1] || data.workType?.[0] || "একক"}
              </span>
            </div>
          </div>
        </div>

        {/* Speciality Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {data.speciality?.slice(0, 3).map((s, index) => (
            <span key={index} className="bg-emerald-50/50 text-emerald-700 px-3 py-1.5 rounded-xl text-[10px] font-bold border border-emerald-100/50">
              🌾 {s}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-auto">
          <Link 
            href={`/services/${serviceId}`}
            className="flex-1 py-4 bg-slate-100 text-slate-700 rounded-2xl text-[12px] font-black flex items-center justify-center gap-2 hover:bg-slate-200 transition-all active:scale-95 border border-slate-200"
          >
            <Info size={18} className="text-slate-400" /> বিস্তারিত
          </Link>
          
          <a 
            href={`tel:${data.phone}`} 
            className="flex-[1.8] py-4 bg-emerald-600 text-white rounded-2xl text-[12px] font-black flex items-center justify-center gap-2 hover:bg-emerald-700 transition-all active:scale-95 shadow-lg shadow-emerald-100"
          >
             <Phone size={18} className="fill-white/20" /> 
             <span>কল দিন</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FarmerCard;