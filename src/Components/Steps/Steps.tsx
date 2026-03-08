"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, PhoneOutgoing, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "সার্ভিস খুঁজুন",
    description: "আপনার প্রয়োজনীয় মিস্ত্রি বা যানবাহনটি আমাদের তালিকা থেকে খুঁজে বের করুন।",
    icon: <Search className="w-8 h-8" />,
    color: "bg-blue-500",
    shadow: "shadow-blue-100",
  },
  {
    id: 2,
    title: "সরাসরি কল দিন",
    description: "পছন্দের সার্ভিস প্রোভাইডারের প্রোফাইলে থাকা কল বাটনে ক্লিক করে সরাসরি কথা বলুন।",
    icon: <PhoneOutgoing className="w-8 h-8" />,
    color: "bg-primary",
    shadow: "shadow-primary/20",
  },
  {
    id: 3,
    title: "সেবা গ্রহণ করুন",
    description: "মিস্ত্রি আপনার ঠিকানায় পৌঁছে কাজ সম্পন্ন করবে। কাজ শেষে তাকে পারিশ্রমিক দিন।",
    icon: <CheckCircle className="w-8 h-8" />,
    color: "bg-emerald-500",
    shadow: "shadow-emerald-100",
  }
];

export default function Steps() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -z-10 translate-x-1/2"></div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* সেকশন হেডার */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-black text-slate-900 mb-4"
          >
            কীভাবে সেবা <span className="text-primary">গ্রহণ করবেন?</span>
          </motion.h2>
          <p className="text-slate-500 font-medium">
            মাত্র ৩টি সহজ ধাপ অনুসরণ করে লয়াপাড়া সেবার সুবিধা নিন
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* কানেক্টিং লাইন (ডেস্কটপ) */}
          <div className="hidden md:block absolute top-1/4 left-1/4 right-1/4 h-0.5 border-t-2 border-dashed border-slate-100 -z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* ধাপ নম্বর */}
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-sm border-4 border-white z-20">
                ০{step.id}
              </div>

              {/* আইকন বক্স */}
              <div className={`w-24 h-24 rounded-[32px] ${step.color} text-white flex items-center justify-center mb-8 shadow-2xl ${step.shadow} transition-transform group-hover:rotate-6 duration-300 relative z-10`}>
                {step.icon}
              </div>

              {/* টেক্সট */}
              <h3 className="text-xl font-bold text-slate-800 mb-3">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed max-w-[250px]">
                {step.description}
              </p>

              {/* মোবাইল অ্যারো (শুধুমাত্র মোবাইলে ১ ও ২ এর পর দেখাবে) */}
              {index < 2 && (
                <div className="md:hidden mt-8 text-slate-200">
                  <ArrowRight className="rotate-90 w-8 h-8" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* বটম অ্যাকশন */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 flex justify-center"
        >
          <button className="btn btn-outline btn-primary rounded-full px-8 gap-2 font-bold hover:text-white transition-all">
            আরও বিস্তারিত জানুন
          </button>
        </motion.div>
      </div>
    </section>
  );
}