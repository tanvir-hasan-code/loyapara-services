import { Phone,  Truck } from 'lucide-react';

const TransportCard = ({ data }: { data: any }) => ( 
  <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-r-2xl shadow-sm">
    <div className="flex justify-between">
      <h3 className="font-bold text-lg text-orange-900">{data.name}</h3>
      <Truck className="text-orange-500" />
    </div>
    <p className="text-xs text-orange-600 font-bold mb-3">{data.vehicleType}</p>
    
    <div className="bg-white p-3 rounded-xl border border-orange-100 text-sm space-y-1">
      <p><strong>ধারণ ক্ষমতা:</strong> {data.capacity}</p>
      <p><strong>এলাকা:</strong> {data.serviceArea?.join(", ")}</p>
    </div>

    <a href={`tel:${data.phone}`} className="mt-4 w-full py-2 bg-orange-500 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2">
      <Phone size={16} /> দ্রুত ডাকুন
    </a>
  </div>
);