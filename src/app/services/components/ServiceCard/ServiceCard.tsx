import { Phone, MapPin, Star, CheckCircle } from 'lucide-react';

export default function ServiceCard({ service }: { service: any }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 hover:shadow-xl transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary overflow-hidden">
          {service.profileImage !== "#" ? (
             <img src={service.profileImage} alt={service.name} className="w-full h-full object-cover" />
          ) : (
             <span className="text-2xl font-bold">{service.name[0]}</span>
          )}
        </div>
        {service.isVerified && (
          <div className="flex items-center gap-1 bg-green-50 text-green-600 text-xs font-bold px-2 py-1 rounded-full">
            <CheckCircle size={14} /> ভেরিফাইড
          </div>
        )}
      </div>

      <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">
        {service.name}
      </h3>
      <p className="text-sm text-primary font-medium mb-3">{service.category}</p>

      <div className="space-y-2 mb-5">
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <MapPin size={16} className="shrink-0 text-gray-400" />
          <span>{service.location}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Star size={16} className="shrink-0 text-yellow-500 fill-yellow-500" />
          <span>{service.rating} (রেটিং)</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {service.speciality?.slice(0, 3).map((item: string, i: number) => (
          <span key={i} className="bg-gray-100 text-gray-600 text-[10px] px-2 py-1 rounded-md">
            {item}
          </span>
        ))}
      </div>

      <a 
        href={`tel:${service.phone}`}
        className="w-full btn btn-primary flex items-center justify-center gap-2 text-white rounded-xl"
      >
        <Phone size={18} /> কল করুন
      </a>
    </div>
  );
}