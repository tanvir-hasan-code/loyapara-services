export interface ElectronicsMaker {
  _id?: string;
  name: string;
  nickName: string;
  phone: string;
  category: "ইলেকট্রনিক্স মেকার";
  experience: string;
  location: string;
  speciality: string[];
  rating: number;
  isVerified: boolean;
  status: "Available" | "Unavailable" | string;
  profileImage: string;
  shopName: string;
  isHomeCollection: boolean;
  hasWarranty: boolean;
  businessHours: string;
}
export interface Electrician {
  _id?: string;
  name: string;
  nickName: string;
  phone: string;
  category: "ইলেকট্রিশিয়ান";
  experience: string;
  location: string;
  speciality: string[];
  rating: number;
  isVerified: boolean;
  status: "Available" | "Unavailable" | string;
  profileImage: string;
  serviceType: string[];
  callTime: string;
  emergencyService: boolean;
  hasTools: boolean;
}
export interface Welder {
  _id?: string;
  name: string;
  nickName: string;
  phone: string;
  category: "ওয়েল্ডিং মিস্ত্রি";
  experience: string;
  location: string;
  speciality: string[];
  rating: number;
  isVerified: boolean;
  status: "Available" | "Unavailable" | string;
  profileImage: string;
  hasPortableMachine: boolean; // পোর্টেবল মেশিন আছে কিনা
  workshopName: string; // ওয়ার্কশপের নাম
  isSteelExpert: boolean; // স্টিল কাজের বিশেষজ্ঞ কিনা
  callTime: string;
}
export interface AgriLaborer {
  _id?: string;
  name: string;
  nickName: string;
  phone: string;
  category: "কৃষি শ্রমিক";
  experience: string;
  location: string;
  speciality: string[];
  rating: number;
  isVerified: boolean;
  status: "Available" | "Unavailable" | string;
  profileImage: string;
  workType: string[]; // যেমন: ["একক", "দলগত (Group)"]
  groupSize: string; // যেমন: "১-২ জন"
  dailyWage: string; // যেমন: "৫০০ টাকা (আলোচনা সাপেক্ষে)"
  hasTools: boolean; // নিজস্ব কাঁচি বা কোদাল আছে কিনা
}

export interface DateJuiceSeller {
  _id?: string;
  name: string;
  nickName: string;
  phone: string;
  category: "খেজুরের রস";
  pricePerLitre: string; // যেমন: "৫০"
  location: string;
  speciality: string[];
  rating: number;
  isVerified: boolean;
  status: "শুধু শীতকালে" | string; // সিজনাল স্ট্যাটাস
  profileImage: string;
  collectionTime: string; // রস সংগ্রহের সময় (ভোর ৫:৩০ - ৭:৩০)
  isHomeDelivery: boolean;
  hasGur: boolean; // গুড় পাওয়া যায় কিনা
}
export interface CowDoctor {
  _id?: string;
  name: string;
  nickName: string;
  phone: string;
  category: "পশু চিকিৎসক";
  qualification: string; // যেমন: "পশু চিকিৎসা ও কৃত্রিম প্রজনন প্রশিক্ষণ প্রাপ্ত"
  experience: string;
  location: string;
  speciality: string[];
  rating: number;
  isVerified: boolean;
  status: "Available" | string;
  profileImage: string;
  serviceType: string;      // যেমন: "বাসায় গিয়ে গরু দেখে"
  callTime: string;         // যেমন: "২৪ ঘণ্টা (জরুরি প্রয়োজনে)"
  emergencyService: boolean;
  hasVaccine: boolean;      // ভ্যাকসিন আছে কিনা
}
export interface Farmer {
  _id?: string;
  name: string;
  nickName: string;
  phone: string;
  category: "কৃষক" | "কৃষক / কৃষি উদ্যোক্তা";
  experience: string;
  location: string;
  speciality: string[];
  rating: number;
  isVerified: boolean;
  status: "Available" | string;
  profileImage: string;
  produces: string[];      // কি কি ফসল উৎপাদন করেন (যেমন: ধান, আলু, সরিষা)
  hasMachinery: boolean;   // নিজস্ব কৃষি যন্ত্রপাতি (ট্রাক্টর, মাড়াই মেশিন) আছে কিনা
  isExpert: boolean;       // পরামর্শ দেওয়ার মতো দক্ষতা আছে কিনা
  bulkSale: boolean;       // পাইকারি বিক্রয় করেন কিনা
}
export interface Tailor {
  _id?: string;
  name: string;
  nickName: string;
  phone: string;
  category: "দর্জি / টেইলার্স";
  experience: string;
  location: string;
  speciality: string[];
  rating: number;
  isVerified: boolean;
  status: "Available" | string;
  profileImage: string;
  isHomeService: boolean;     // বাড়িতে গিয়ে মাপ নেওয়া বা কাজ করা হয় কিনা
  orderTime: string;         // অর্ডার নেওয়ার নির্দিষ্ট সময়
  isExpertInDesign: boolean; // আধুনিক ডিজাইন বা নকশী কাজে দক্ষ কিনা
  deliveryTime: string;      // সাধারণত কতদিনের মধ্যে ডেলিভারি দেন (যেমন: "৩ - ৫ দিন")
}

export interface Plumber {
  _id?: string;
  name: string;
  nickName: string;
  phone: string;
  category: "প্লাম্বার";
  experience: string;
  location: string;
  speciality: string[];
  rating: number;
  isVerified: boolean;
  status: "Available" | string;
  profileImage: string;
  serviceType: string[];     // যেমন: ["নতুন বাড়ির স্যানিটারি কাজ", "মোটর সার্ভিস"]
  hasModernTools: boolean;   // আধুনিক যন্ত্রপাতি আছে কিনা
  isHomeVisit: boolean;      // বাড়িতে গিয়ে সার্ভিস দেন কিনা
  callTime: string;          // কল করার সময়
}
export interface TransportService {
  _id?: string;
  name: string;
  nickName: string;
  phone: string;
  category: "ভ্যান ও অটো সার্ভিস";
  vehicleType: string;      // যেমন: "ব্যাটারি চালিত অটো ভ্যান"
  experience: string;
  location: string;
  speciality: string[];
  rating: number;
  isVerified: boolean;
  status: "Available" | string;
  profileImage: string;
  serviceArea: string[];    // কোন কোন এলাকায় যাতায়াত করেন
  isEmergencyCall: boolean; // জরুরি প্রয়োজনে (যেমন রোগী বহন) ডাকলে পাওয়া যাবে কিনা
  capacity: string;         // যাত্রী বা মাল বহনের ক্ষমতা (যেমন: "৬ জন যাত্রী / ১২ মন মাল")
  availability: string;      // সময়কাল (যেমন: "ভোর ৬:০০ - রাত ১০:০০")
}
export interface Tutor {
  _id?: string;
  name: string;
  nickName: string;
  phone: string;
  category: "মাস্টার / গৃহশিক্ষক";
  education: string;      // যেমন: "ইন্টার পাশ" বা "বিএসসি ইন ম্যাথ"
  experience: string;
  location: string;
  speciality: string[];   // কোন কোন বিষয় পড়ান
  rating: number;
  isVerified: boolean;
  status: "Available" | string;
  profileImage: string;
  teachingMethod: string[]; // যেমন: ["বাসায় গিয়ে পড়ানো", "ব্যাচে পড়ানো"]
  availableTime: string;    // পড়ানোর সময়
  targetClass: string;      // কোন ক্লাসের স্টুডেন্ট পড়ান (যেমন: "৫ম থেকে ১০ম")
  hasSmallBatch: boolean;   // ছোট ব্যাচে পড়ানোর সুবিধা আছে কিনা
}

export interface BikeMechanic {
  _id?: string;
  name: string;
  nickName: string;
  phone: string;
  category: "মোটরসাইকেল মেকার";
  experience: string;
  location: string;
  speciality: string[];
  rating: number;
  isVerified: boolean;
  status: "Available" | string;
  profileImage: string;
  shopName: string;           // দোকানের নাম (যদি থাকে)
  isEmergencyOnRoad: boolean; // রাস্তায় বাইক নষ্ট হলে সেখানে গিয়ে ঠিক করেন কিনা
  hasSpareParts: boolean;     // দোকানে স্পেয়ার পার্টস পাওয়া যায় কিনা
  serviceType: string[];      // যেমন: ["নরমাল সার্ভিসিং", "ফুল ইঞ্জিন ওভারহোলিং"]
  businessHours: string;      // দোকান খোলা রাখার সময়
}
export interface Mason {
  _id?: string;
  name: string;
  nickName: string;
  phone: string;
  category: "রাজমিস্ত্রি";
  experience: string;
  location: string;
  speciality: string[];
  rating: number;
  isVerified: boolean;
  status: "Available" | string;
  profileImage: string;
  isLebar: boolean; // তিনি কি সাধারণ হেল্পার বা লেবার?
  isHead: boolean;  // তিনি কি মেইন বা হেড মিস্ত্রি?
}
export interface CycleVanishMechanic {
  _id?: string;
  name: string;
  nickName: string;
  phone: string;
  category: "ভ্যান ও সাইকেল মেকার";
  experience: string;
  location: string;
  speciality: string[];
  rating: number;
  isVerified: boolean;
  status: "Available" | string;
  profileImage: string;
  hasWorkshop: boolean;      // নিজস্ব দোকান বা গ্যারেজ আছে কিনা
  onRoadService: boolean;    // রাস্তায় ভ্যান নষ্ট হলে গিয়ে ঠিক করেন কিনা
  partsAvailable: string[];  // কি কি পার্টস তার কাছে স্টক থাকে (যেমন: টায়ার, টিউব)
  businessHours: string;     // কাজের সময়কাল
}
export interface MachineryMechanic {
  _id?: string;
  name: string;
  nickName: string;
  phone: string;
  category: "মেশিন ও হাল মেকার";
  experience: string;
  location: string;
  speciality: string[];
  rating: number;
  isVerified: boolean;
  status: "Available" | string;
  profileImage: string;
  serviceArea: string[];    // যেমন: ["মাঠে গিয়ে মেরামত", "দোকানে মেরামত"]
  hasSpareParts: boolean;   // শ্যালো বা টিলারের পার্টস পাওয়া যায় কিনা
  callTime: string;         // কল করার সময়
  emergencyCall: boolean;   // চাষের মৌসুমে জরুরি প্রয়োজনে পাওয়া যাবে কিনা
}
export interface Homeopath {
  _id?: string;
  name: string;
  nickName: string;
  phone: string;
  category: "হোমিও ডাক্তার";
  degree: string;          // যেমন: "DHMS" বা "-"
  experience: string;
  location: string;
  speciality: string[];
  rating: number;
  isVerified: boolean;
  status: string;           // যেমন: "কাগইল বাজারে দোকান"
  profileImage: string;
  chamberTime: string;      // চেম্বারে বসার সময়
  offDay: string;           // বন্ধের দিন
  visitFee: string;         // ভিজিট ফি (যেমন: "আলোচনা সাপেক্ষে")
  hasMedicine: boolean;     // সরাসরি ঔষধ পাওয়া যায় কিনা
}


export type ServiceMember = 
  | ElectronicsMaker 
  | Electrician 
  | Welder 
  | AgriLaborer 
  | DateJuiceSeller 
  | CowDoctor 
  | Farmer 
  | Tailor 
  | Plumber 
  | TransportService 
  | Tutor 
  | BikeMechanic 
  | Mason 
  | CycleVanishMechanic 
  | MachineryMechanic 
  | Homeopath;