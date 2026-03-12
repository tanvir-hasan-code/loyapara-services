import { Phone, MapPin, Star, CheckCircle} from 'lucide-react';


 const FarmerCard = ({ data }: { data: any }) => (
  <div className="bg-emerald-50 border-l-4 border-emerald-500 p-5 rounded-r-2xl shadow-sm hover:shadow-md transition-all">
    <div className="flex justify-between">
      <h3 className="font-black text-xl text-emerald-900">{data.name} <span className="text-sm font-normal text-emerald-700">({data.nickName})</span></h3>
      {data.isVerified && <CheckCircle size={18} className="text-emerald-500" />}
    </div>
    <p className="text-xs font-bold text-emerald-600 uppercase mt-1">{data.category}</p>
    
    <div className="mt-3 space-y-1 text-sm text-gray-700">
      <div className="flex items-center gap-2"><MapPin size={14}/> {data.location}</div>
      <div className="flex items-center gap-2 font-bold text-emerald-700"><Star size={14} className="fill-emerald-500"/> রেটিং: {data.rating}</div>
    </div>

    <div className="mt-3 flex flex-wrap gap-1">
      {(data.speciality || data.produces)?.slice(0, 4).map((item: string) => (
        <span key={item} className="bg-white px-2 py-1 rounded text-[10px] border border-emerald-200">{item}</span>
      ))}
    </div>
    <a href={`tel:${data.phone}`} className="mt-4 w-full btn btn-sm bg-emerald-600 hover:bg-emerald-700 text-white border-none rounded-lg flex items-center justify-center gap-2">
      <Phone size={14} /> কল করুন
    </a>
  </div>
 );

export default FarmerCard;