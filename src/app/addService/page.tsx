"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { 
  User, Phone, MapPin, Wrench, FileText, Send, 
  CheckCircle2, AlertCircle, Camera, Award 
} from 'lucide-react';

// সার্ভিস ক্যাটাগরির লিস্ট
const categories = [
  "রাজমিস্ত্রি", "ওয়েল্ডিং মিস্ত্রি", "পাইপ ফিটিং (প্লাম্বার)", "গরুর ডাক্তার (পশু চিকিৎসক)", 
  "মাস্টার/শিক্ষক", "হোমিও ডাক্তার", "ভ্যান ও অটোরিকশা", "ইলেকট্রিশিয়ান (হাউজ ওয়ারিং)", 
  "ইলেকট্রনিক্স মেকার", "মোটরসাইকেল মেকার", "মেশিন/হাল-এর মেকার", 
  "ভ্যান ও সাইকেল মেকার", "খেজুরের রস", "কৃষক (পরামর্শ ও শ্রমিক)", "গৃহস্থ", "দর্জি (টেইলার্স)"
];



type FormValues = {
  name: string;
  phone: string;
  category: string;
  address: string;
  experience: number;
  details: string;
  image: FileList;
};
const IMGBB_API_KEY: string = "a12cb4282eb5ab6a774c1285444eaaa1";

export default function AddServicePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // ১. ছবি আপলোড লজিক (ImgBB)
      let uploadedUrl = "";
      if (data.image[0]) {
        const imageFormData = new FormData();
        imageFormData.append("image", data.image[0]);
        
        const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
          method: "POST",
          body: imageFormData,
        });
        const result = await response.json();
        if (result.success) {
          uploadedUrl = result.data.url;
        }
      }

      // ২. ফাইনাল ডাটা অবজেক্ট
      const finalPayload = {
        ...data,
        image: uploadedUrl,
      };

      console.log("Submitting Data:", finalPayload);

      // সিমুলেশন (এখানে আপনি আপনার API কল করতে পারেন)
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();
      }, 2000);

    } catch (error) {
      console.error(error);
      alert("দুঃখিত, তথ্য জমা দিতে সমস্যা হয়েছে।");
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#fcfdfa] text-slate-800 py-12 px-4 relative overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-green-100/50 to-transparent -z-10" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-yellow-100/30 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* বাম দিকের টেক্সট ও ইনফো সেকশন */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-8 pt-8"
          >
            <div>
              <span className="inline-block px-4 py-1.5 mb-4 rounded-full border border-green-200 bg-green-50 text-[12px] font-bold tracking-[0.2em] uppercase text-green-700">
                নতুন সদস্য যোগ করুন
              </span>
              <h1 className="text-4xl md:text-5xl font-black leading-tight text-slate-900 mb-4 tracking-tight">
                আপনার সেবাকে <br />
                <span className="text-primary">সবার কাছে</span> পৌঁছে দিন
              </h1>
              <p className="text-slate-600 font-medium text-lg leading-relaxed">
                লয়াপাড়া সেবায় যুক্ত হয়ে আপনার কাজ বা ব্যবসাকে পৌঁছে দিন পুরো গ্রামের মানুষের কাছে।
              </p>
            </div>

            <div className="space-y-6 bg-white p-8 rounded-3xl border border-green-100 shadow-sm">
              <h3 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-4">কীভাবে যুক্ত হবেন?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full text-green-600 mt-1"><CheckCircle2 size={16} /></div>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">সঠিক নাম, ছবি ও অভিজ্ঞতা প্রদান করুন।</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-full text-orange-600 mt-1"><AlertCircle size={16} /></div>
                  <p className="text-slate-600 text-sm font-medium leading-relaxed">এডমিন প্যানেল থেকে যাচাইয়ের পর আপনার নাম লিস্টে যোগ হবে।</p>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* ডান দিকের ফর্ম সেকশন */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-[40px] shadow-2xl shadow-green-900/5 p-8 md:p-12 border border-slate-100 relative overflow-hidden">
              
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center py-20"
                >
                  <div className="w-24 h-24 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-800 mb-4">ধন্যবাদ!</h2>
                  <p className="text-slate-600 text-lg font-medium mb-8 max-w-sm">আপনার তথ্য সফলভাবে জমা হয়েছে।</p>
                  <button onClick={() => setIsSuccess(false)} className="btn btn-primary rounded-xl px-8 text-white font-bold">আরেকটি যোগ করুন</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  
                  {/* নাম */}
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700 ml-1">আপনার পূর্ণ নাম <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        {...register("name", { required: "আপনার নাম প্রয়োজন" })}
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-medium"
                        placeholder="রহিম মিয়া"
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-xs mt-1 ml-2">{errors.name.message}</p>}
                  </div>

                  {/* মোবাইল */}
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700 ml-1">মোবাইল নম্বর <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        {...register("phone", { 
                          required: "মোবাইল নম্বর দিতে হবে",
                          pattern: { value: /^01[3-9]\d{8}$/, message: "সঠিক নম্বর দিন" }
                        })}
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-2 focus:ring-primary outline-none font-medium"
                        placeholder="017XXXXXXXX"
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-xs mt-1 ml-2">{errors.phone.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* ক্যাটাগরি */}
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-slate-700 ml-1">পেশা বা সার্ভিস <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <Wrench size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <select 
                          {...register("category", { required: "ক্যাটাগরি বেছে নিন" })}
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none font-medium appearance-none"
                        >
                          <option value="">নির্বাচন করুন</option>
                          {categories.map((cat, idx) => <option key={idx} value={cat}>{cat}</option>)}
                        </select>
                      </div>
                      {errors.category && <p className="text-red-500 text-xs mt-1 ml-2">{errors.category.message}</p>}
                    </div>

                    {/* অভিজ্ঞতা (Number Input) */}
                    <div className="space-y-1">
                      <label className="text-sm font-bold text-slate-700 ml-1">অভিজ্ঞতা (বছর) <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <Award size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                        <input 
                          type="number"
                          {...register("experience", { required: "অভিজ্ঞতা লিখুন", min: 0 })}
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none font-medium"
                          placeholder="যেমন: ৫"
                        />
                      </div>
                      {errors.experience && <p className="text-red-500 text-xs mt-1 ml-2">{errors.experience.message}</p>}
                    </div>
                  </div>

                  {/* ঠিকানা */}
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700 ml-1">ঠিকানা (পাড়া/মোড়) <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        {...register("address", { required: "ঠিকানা প্রয়োজন" })}
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none font-medium"
                        placeholder="লয়াপাড়া পূর্ব পাড়া"
                      />
                    </div>
                    {errors.address && <p className="text-red-500 text-xs mt-1 ml-2">{errors.address.message}</p>}
                  </div>

                  {/* ইমেজ আপলোড */}
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700 ml-1">আপনার ছবি <span className="text-red-500">*</span></label>
                    <label className="flex flex-col items-center justify-center w-full h-28 border-2 border-dashed border-slate-200 rounded-2xl cursor-pointer bg-slate-50 hover:bg-slate-100 transition-all">
                      <Camera className="text-slate-400 mb-1" size={24} />
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">ছবি সিলেক্ট করুন</p>
                      <input {...register("image", { required: "একটি ছবি দিন" })} type="file" className="hidden" accept="image/*" />
                    </label>
                    {errors.image && <p className="text-red-500 text-xs mt-1 ml-2">{errors.image.message}</p>}
                  </div>

                  {/* বিস্তারিত মন্তব্য */}
                  <div className="space-y-1">
                    <label className="text-sm font-bold text-slate-700 ml-1">বিস্তারিত মন্তব্য (ঐচ্ছিক)</label>
                    <div className="relative">
                      <FileText size={18} className="absolute top-4 left-4 text-slate-400" />
                      <textarea 
                        {...register("details")}
                        rows={2}
                        className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-primary resize-none font-medium"
                        placeholder="আপনার কাজ সম্পর্কে কিছু লিখুন..."
                      />
                    </div>
                  </div>

                  {/* সাবমিট বাটন */}
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 hover:bg-primary text-white font-bold text-lg py-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-70 shadow-lg"
                  >
                    {isSubmitting ? <span className="loading loading-spinner"></span> : <>তথ্য জমা দিন <Send size={20} /></>}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}