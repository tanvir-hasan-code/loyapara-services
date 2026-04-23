import React from 'react';

// আপনার তৈরি করা সব ডিটেইলস মোডাল কম্পোনেন্টগুলো এখানে ইম্পোর্ট করুন
import FarmerDetailsModal from './FarmerDetailsModal';
import CowDoctorDetailsModal from './CowDoctorDetailsModal';
import DateJuiceDetailsModal from './DateJuiceDetailsModal';
import ElectricianDetailsModal from './ElectricianDetailsModal';
import ElectronicsDetailsModal from './ElectronicsDetailsModal';
import HomeopathicDoctorDetailsModal from './HomeopathicDoctorDetailsModal';
import HouseholderDetailsModal from './HouseholderDetailsModal'; // কৃষক/কৃষি উদ্যোক্তার জন্য হতে পারে
import MotorcycleMechanicDetailsModal from './MotorcycleMechanicDetailsModal';
import PlambarDetailsModal from './PlambarDetailsModal';
import PowerTillerMechanicDetailsModal from './PowerTillerMechanicDetailsModal';
import RajMistriDetailsModal from './RajMistriDetailsModal';
import TailorDetailsModal from './TailorDetailsModal';
import TeacherDetailsModal from './TeacherDetailsModal';
import VanAndAutoDetailsModal from './VanAndAutoDetailsModal';
import WeldingDetailsModal from './WeldingDetailsModal';
import VanCycleMakarDetailsModal from './VanCycleMakarDetailsModal';
const DefaultDetails = () => {
  return (
    <div className="p-8 md:p-12 flex flex-col items-center text-center">
      {/* Animated Icon Container */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-50 animate-pulse"></div>
        <div className="relative bg-gradient-to-br from-blue-50 to-white p-6 rounded-full shadow-inner border border-blue-100">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="48" 
            height="48" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="text-blue-500"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <path d="M10 13a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z" />
            <path d="m15 18-1.5-1.5" />
          </svg>
        </div>
      </div>

      {/* Text Content */}
      <h3 className="text-xl font-bold text-gray-800 mb-2">
        বিস্তারিত তথ্য পাওয়া যায়নি
      </h3>
      <p className="text-gray-500 max-w-[260px] leading-relaxed">
        দুঃখিত, এই ক্যাটাগরির জন্য নির্দিষ্ট কোনো ডিটেইলস কার্ড এখনও তৈরি করা হয়নি। 
      </p>

      {/* Visual Support Element */}
      <div className="mt-8 pt-6 border-t border-gray-100 w-full">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
          Loyapara Services
        </p>
      </div>
    </div>
  );
};

interface HandleOpenModalProps {
  data: any; // আপনার শ্রমিকের অবজেক্ট ডাটা
}

const HandleOpenModal: React.FC<HandleOpenModalProps> = ({ data }) => {
  if (!data || !data.category) return null;

  // ক্যাটাগরি অনুযায়ী কোন কার্ডটি দেখাবে তা নির্ধারণ করা
  switch (data.category) {
    case 'কৃষি শ্রমিক':
      return <FarmerDetailsModal data={data} />;

    case 'পশু চিকিৎসক':
      return <CowDoctorDetailsModal data={data} />;

    case 'খেজুরের রস':
      return <DateJuiceDetailsModal data={data} />;

    case 'ইলেকট্রিশিয়ান':
      return <ElectricianDetailsModal data={data} />;

    case 'ইলেকট্রনিক্স মেকার':
      return <ElectronicsDetailsModal data={data} />;

    case 'হোমিও ডাক্তার':
      return <HomeopathicDoctorDetailsModal data={data} />;

    case 'কৃষক':
    case 'কৃষক / কৃষি উদ্যোক্তা':
      return <HouseholderDetailsModal data={data} />;

    case 'মোটরসাইকেল মেকার':
      return <MotorcycleMechanicDetailsModal data={data} />;

    case 'প্লাম্বার':
    case 'Plambar': // স্পেলিং অনুযায়ী
      return <PlambarDetailsModal data={data} />;

    case 'মেশিন ও হালের মেকার':
      return <PowerTillerMechanicDetailsModal data={data} />;

    case 'রাজমিস্ত্রি':
    case 'Rajmistri':
      return <RajMistriDetailsModal data={data} />;

    case 'দর্জি / টেইলার্স':	
      return <TailorDetailsModal data={data} />;

    case 'মাস্টার / গৃহশিক্ষক':
      return <TeacherDetailsModal data={data} />;

    case 'ভ্যান ও অটো সার্ভিস':
		  return <VanAndAutoDetailsModal data={data} />;
	  case 'ভ্যান ও সাইকেল মেকার':
		  return <VanCycleMakarDetailsModal data={data} />;

    case 'ওয়েল্ডিং মিস্ত্রি':
      return <WeldingDetailsModal data={data} />;

    default: return <DefaultDetails />;
  }
};

export default HandleOpenModal;