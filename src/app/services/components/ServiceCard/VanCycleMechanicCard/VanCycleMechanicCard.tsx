import { Phone, MapPin, Star, CheckCircle, Clock} from 'lucide-react';
// ২. টেকনিক্যাল ও মেকার কার্ড (ইলেকট্রিশিয়ান, মেকানিক, প্লাম্বার, ওয়েল্ডিং, রাজমিস্ত্রি)
const TechnicalCard = ({ data }: { data: any }) => (
  <div className="bg-slate-50 border-l-4 border-slate-700 p-5 rounded-r-2xl shadow-sm hover:shadow-md transition-all">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="font-black text-xl text-slate-900">{data.name}</h3>
        <p className="text-[10px] bg-slate-200 text-slate-700 inline-block px-2 py-0.5 rounded mt-1 font-bold">{data.category}</p>
      </div>
      <div className="text-right">
        <span className="text-[10px] text-gray-500 block">অভিজ্ঞতা</span>
        <span className="font-bold text-slate-700">{data.experience}</span>
      </div>
    </div>
    
    <div className="mt-4 grid grid-cols-2 gap-2 text-[11px]">
       <div className="flex items-center gap-1 text-gray-600"><Clock size={12}/> {data.callTime || data.businessHours || "সকাল-রাত"}</div>
       <div className="flex items-center gap-1 text-gray-600"><MapPin size={12}/> {data.location}</div>
    </div>

    <div className="mt-4 flex flex-wrap gap-1">
      {data.speciality?.map((s: string) => (
        <span key={s} className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded text-[10px] font-medium">{s}</span>
      ))}
    </div>
    <a href={`tel:${data.phone}`} className="mt-4 w-full py-2 bg-slate-900 text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-slate-800 transition-colors">
      <Phone size={16} /> কল করুন
    </a>
  </div>
);