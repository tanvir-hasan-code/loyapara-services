import { DateJuiceSeller } from '@/types/services/service';
import { Phone, MapPin, Clock, Droplets, CheckCircle2, Info, ShoppingBasket, ThermometerSnowflake, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const DateJuiceCard = ({ data }: { data: DateJuiceSeller }) => {
  return (
    <div className="bg-white border border-cyan-100 rounded-[2.5rem] p-6 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
      
      {/* Decorative Winter Background Glow */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-50 rounded-full group-hover:scale-[2] transition-transform duration-700 opacity-60" />

      <div className="relative z-10">
        {/* Top Header: Category & Animated Availability */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-2 bg-cyan-600 text-white px-5 py-2.5 rounded-2xl shadow-lg shadow-cyan-100">
            <Droplets size={18} className="text-cyan-100 animate-bounce" />
            <span className="text-sm font-black uppercase tracking-widest leading-none">
              খেজুরের রস
            </span>
          </div>
          
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-100 px-4 py-2 rounded-2xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] font-black text-emerald-700 uppercase">
              সংগ্রহ চলছে
            </span>
          </div>
        </div>

        {/* Profile & Price Section */}
        <div className="flex gap-5 items-center mb-6">
          <div className="relative shrink-0">
            <div className="w-20 h-20 rounded-[2rem] overflow-hidden border-4 border-white shadow-xl ring-2 ring-cyan-100 group-hover:ring-cyan-400 transition-all relative bg-slate-100">
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
            {/* Seasonal Info Badge */}
            <div className="flex items-center gap-1.5 mb-1.5 bg-blue-50 w-fit px-2 py-1 rounded-lg border border-blue-100">
               <ThermometerSnowflake size={12} className="text-blue-500 animate-pulse" />
               <span className="text-[9px] font-black text-blue-600 uppercase tracking-tighter">
                 শুধুমাত্র শীতকালে
               </span>
            </div>

            <h3 className="font-black text-2xl text-slate-900 leading-tight group-hover:text-cyan-600 transition-colors">
              {data.name}
            </h3>

            {/* ডাকনাম সেকশন - New Addition */}
            <p className="text-cyan-600 font-black text-[11px] uppercase mt-1">
              ডাকনাম: {data.nickName}
            </p>

            {/* রেটিং সেকশন */}
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

            {/* <div className="inline-block mt-3 bg-cyan-600 text-white px-3 py-1.5 rounded-xl shadow-md shadow-cyan-50">
               <span className="text-[9px] font-bold opacity-80 uppercase">লিটার </span>
               <span className="text-sm font-black italic">৳{data.pricePerLitre}</span>
            </div> */}
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100 flex items-center gap-3">
            <div className="p-2 bg-white rounded-xl shadow-sm text-cyan-600">
              <Clock size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">সময়</span>
              <span className="text-xs font-black text-slate-800">{data.collectionTime}</span>
            </div>
          </div>
          <div className="bg-slate-50 p-4 rounded-3xl border border-slate-100 flex items-center gap-3">
            <div className="p-2 bg-white rounded-xl shadow-sm text-cyan-600">
              <MapPin size={18} />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] text-slate-400 font-bold uppercase tracking-tighter">লোকেশন</span>
              <span className="text-xs font-black text-slate-800">{data.location}</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {data.speciality.map((s) => (
            <span key={s} className="bg-cyan-50/50 text-cyan-700 px-3 py-1.5 rounded-xl text-[10px] font-bold border border-cyan-100/50">
              ❄️ {s}
            </span>
          ))}
          {data.hasGur && (
            <span className="bg-amber-50 text-amber-700 px-3 py-1.5 rounded-xl text-[10px] font-black flex items-center gap-1 border border-amber-100">
               <ShoppingBasket size={12} /> গুড় আছে
            </span>
          )}
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
            className="flex-[1.8] py-4 bg-cyan-600 text-white rounded-2xl text-[12px] font-black flex items-center justify-center gap-2 hover:bg-cyan-700 hover:shadow-xl hover:shadow-cyan-200 transition-all active:scale-95 shadow-lg shadow-cyan-100 group/btn"
          >
             <Phone size={18} className="fill-white/20" /> 
             <span>কল দিন</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DateJuiceCard;