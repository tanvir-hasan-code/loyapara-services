"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { LogIn, Lock, Phone, CheckCircle, ShieldCheck } from 'lucide-react';

// লয়াপাড়া গ্রামের আবহের ব্যাকগ্রাউন্ড
const VILLAGE_BG = "/loyapara.jpg";

type LoginValues = {
  phoneNumber: string;
  password: string;
};

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm<LoginValues>();

  const onSubmit = (data: LoginValues) => {
    setIsLoading(true);
    // লগইন লজিক এখানে হবে
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden bg-slate-950">
      
      {/* ব্যাকগ্রাউন্ড লেয়ার - ব্লার এবং ডার্ক ওভারলে */}
      <div className="absolute inset-0 z-0">
        <img 
          src={VILLAGE_BG} 
          className="w-full h-full object-cover opacity-40 blur-[8px] scale-110" 
          alt="Village BG" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/80 to-slate-950" />
      </div>

      {/* মেইন কার্ড */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        className="relative z-10 w-full max-w-[400px]"
      >
        <div className="bg-white/5 backdrop-blur-2xl p-8 md:p-10 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden">
          
          {/* টপ গ্লো এফেক্ট */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/20 rounded-full blur-[60px]" />

          {/* হেডার সেকশন */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 mb-4 rotate-3 shadow-inner">
              <ShieldCheck className="text-primary" size={32} />
            </div>
            <h1 className="text-3xl font-black text-white italic tracking-tight">
              লয়াপাড়া <span className="text-primary text-2xl">সেবা</span>
            </h1>
            <div className="h-1 w-12 bg-primary/40 mx-auto mt-2 rounded-full" />
          </div>

          {/* ফর্ম */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
            <div className="space-y-1">
              <div className="relative group">
                <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors" size={18} />
                <input 
                  {...register("phoneNumber", { required: "নম্বর দিন" })}
                  className="w-full pl-12 pr-5 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-1 focus:ring-primary/50 text-white font-bold placeholder:text-white/20" 
                  placeholder="ফোন নম্বর" 
                />
              </div>
              {errors.phoneNumber && <p className="text-primary text-[10px] font-bold ml-4 uppercase">{errors.phoneNumber.message}</p>}
            </div>

            <div className="space-y-1">
              <div className="relative group">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-primary/60 group-focus-within:text-primary transition-colors" size={18} />
                <input 
                  {...register("password", { required: "পাসওয়ার্ড দিন" })}
                  type="password"
                  className="w-full pl-12 pr-5 py-4 bg-white/5 border border-white/10 rounded-2xl outline-none focus:ring-1 focus:ring-primary/50 text-white font-bold placeholder:text-white/20" 
                  placeholder="পাসওয়ার্ড" 
                />
              </div>
              {errors.password && <p className="text-primary text-[10px] font-bold ml-4 uppercase">{errors.password.message}</p>}
            </div>

            {/* লগইন বাটন */}
            <button 
              type="submit" 
              disabled={isLoading || isSuccess}
              className={`w-full py-4 rounded-2xl font-black text-base transition-all active:scale-95 flex items-center justify-center gap-2 mt-2 shadow-xl ${
                isSuccess 
                ? 'bg-green-600 text-white shadow-green-900/20' 
                : 'bg-primary text-white hover:brightness-110 shadow-primary/20'
              }`}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : isSuccess ? (
                <>প্রবেশ করুন <CheckCircle size={20} /></>
              ) : (
                <>লগইন <LogIn size={20} /></>
              )}
            </button>
          </form>

          {/* সিম্পল ফুটার */}
          <div className="mt-8 text-center">
            <p className="text-white/20 text-[10px] font-bold tracking-[2px] uppercase">
              Secure Access • Loyapara Services
            </p>
          </div>
        </div>
      </motion.div>

      {/* ভাসমান ডেকোরেশন */}
      <div className="absolute top-1/4 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px]" />
    </div>
  );
}