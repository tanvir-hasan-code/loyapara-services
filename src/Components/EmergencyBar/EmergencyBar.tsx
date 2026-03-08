"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Phone,
  HeartPulse,
  ShieldAlert,
  Flame,
  ChevronRight,
  Activity,
} from "lucide-react";

const emergencyData = [
  {
    id: 1,
    title: "অ্যাম্বুলেন্স",
    number: "999",
    icon: <HeartPulse className="w-10 h-10" />,
    color: "text-rose-500",
    bgColor: "bg-rose-50",
    border: "border-rose-100",
    grid: "md:col-span-2",
  },
  {
    id: 2,
    title: "পুলিশ",
    number: "999",
    icon: <ShieldAlert className="w-8 h-8" />,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    border: "border-blue-100",
    grid: "md:col-span-1",
  },
  {
    id: 3,
    title: "ফায়ার সার্ভিস",
    number: "16163",
    icon: <Flame className="w-8 h-8" />,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    border: "border-orange-100",
    grid: "md:col-span-1",
  },
  {
    id: 4,
    title: "পুলিশ (গাবতলি)",
    number: "01713-374064",
    icon: <Phone className="w-10 h-10" />,
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    border: "border-emerald-100",
    grid: "md:col-span-2",
  },
];

export default function EmergencyBar() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* টপ হেডার সেকশন */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-3"
          >
            <div className="flex items-center gap-2 text-red-500 font-bold text-sm tracking-widest uppercase">
              <Activity size={18} className="animate-pulse" />
              Emergency Support
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              জরুরি প্রয়োজনে <br />{" "}
              <span className="text-slate-400 font-medium">আমরা আছি পাশে</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-xs text-slate-500 font-medium leading-relaxed"
          >
            যেকোনো বিপদে বা দুর্ঘটনায় দেরি না করে সরাসরি নিচের নম্বরগুলোতে
            যোগাযোগ করুন।
          </motion.p>
        </div>

        {/* বেন্টো গ্রিড (Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {emergencyData.map((item, index) => (
            <motion.a
              key={item.id}
              href={`tel:${item.number}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${item.grid} group relative overflow-hidden bg-white border ${item.border} rounded-[32px] p-8 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]`}
            >
              <div className="flex flex-col h-full justify-between relative z-10">
                <div className="flex justify-between items-start">
                  <div
                    className={`p-4 rounded-2xl ${item.bgColor} ${item.color} transition-transform group-hover:scale-110 duration-500`}
                  >
                    {item.icon}
                  </div>
                  <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-300 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                    <ChevronRight size={24} />
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-lg font-bold text-slate-400 uppercase tracking-widest mb-1">
                    {item.title}
                  </h3>
                  <div className="text-4xl font-black text-slate-900 tracking-tighter">
                    {item.number}
                  </div>
                </div>
              </div>

              {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
              <div
                className={`absolute -bottom-10 -right-10 w-40 h-40 ${item.bgColor} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>
            </motion.a>
          ))}
        </div>

        {/* ফুটার লাইন উইথ লাইভ স্ট্যাটাস */}
        <div className="mt-16 flex flex-col items-center gap-6">
          <div className="flex items-center justify-center gap-6 w-full">
            <div className="h-px bg-gradient-to-r from-transparent to-slate-200 flex-1"></div>

            <div className="flex items-center gap-3 bg-white px-5 py-2 rounded-full border border-slate-100 shadow-sm">
              <span className="relative flex h-3 w-3">
                {/* টিপ টিপ করা গ্রিন লাইট */}
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <p className="text-slate-500 text-sm font-bold tracking-wide">
                আমাদের টিম <span className="text-slate-900">২৪/৭ লাইভ</span> আছে
              </p>
            </div>

            <div className="h-px bg-gradient-to-l from-transparent to-slate-200 flex-1"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
