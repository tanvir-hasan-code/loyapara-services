"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Compass,
  Users2,
  Zap,
  ShieldCheck,
  PhoneCall,
  CheckCircle2,
  Globe2,
} from "lucide-react";

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <main
      className="min-h-screen text-white selection:bg-primary selection:text-black overflow-hidden bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('https://images.unsplash.com/photo-1684689917861-a62ccfeff7e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dmlsbGFnZSUyMGJhbmdsYWRlc2h8ZW58MHwwfDB8fHww')",
      }}
    >
      {/* ১. কসমিক হিরো সেকশন */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* ব্যাকগ্রাউন্ড গ্লো */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent -z-10 opacity-60" />

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold tracking-[0.3em] uppercase text-primary">
              লয়াপাড়ার ভবিষ্যৎ
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-none tracking-tighter mb-8">
              লয়াপাড়া <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
                সেবা
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-light leading-relaxed">
              একটি গ্রাম, হাজারো সম্ভাবনা। আমরা প্রযুক্তিকে ব্যবহার করছি গ্রামের
              প্রতিটি মানুষের জীবনকে সহজ, নিরাপদ এবং গতিময় করতে।
            </p>
          </motion.div>
        </div>

        {/* স্ক্রল ইন্ডিকেটর */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
        >
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* ২. ইন্টারেক্টিভ মিশন কার্ডস */}
      <section className="py-32 container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-6xl font-bold leading-tight">
              আমাদের লক্ষ্য: <br />
              <span className="text-primary italic font-serif text-3xl md:text-5xl">
                এক ক্লিকেই সমাধান
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              আমরা গ্রামের মানুষকে এমন একটি প্ল্যাটফর্ম দিচ্ছি যেখানে তারা
              যেকোনো প্রয়োজনে সঠিক মিস্ত্রি বা সার্ভিস সরাসরি খুঁজে পায়। কোনো
              দালালি নেই, কোনো বাড়তি খরচ নেই।
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: <CheckCircle2 className="text-primary" />,
                  text: "১০০% যাচাইকৃত স্থানীয় দক্ষ মিস্ত্রি",
                },
                {
                  icon: <CheckCircle2 className="text-primary" />,
                  text: "২৪/৭ জরুরি যোগাযোগের সুবিধা",
                },
                {
                  icon: <CheckCircle2 className="text-primary" />,
                  text: "সরাসরি কোনো বাধা ছাড়াই ফোন কল",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 text-white font-semibold"
                >
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* থ্রিডি কার্ড স্টাইল */}
          <motion.div style={{ y: yRange }} className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-blue-500/10 rounded-[60px] border border-white/10 backdrop-blur-3xl p-12 relative overflow-hidden group">
              <Compass className="w-full h-full text-white/5 absolute -bottom-20 -right-20 rotate-12 transition-transform group-hover:rotate-45 duration-700" />
              <div className="relative z-10 flex flex-col h-full justify-between">
                <Globe2
                  size={64}
                  className="text-primary animate-[spin_20s_linear_infinite]"
                />
                <div>
                  <h3 className="text-3xl font-black mb-4 tracking-tight">
                    ডিজিটাল গ্রাম
                  </h3>
                  <p className="text-slate-400 text-sm">
                    আমরা প্রযুক্তির সেতুবন্ধনে গ্রামের ভৌগলিক দূরত্ব কমিয়ে আনছি।
                  </p>
                </div>
              </div>
            </div>
            {/* ছোট ভাসমান কার্ড */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-10 -right-10 bg-white text-black p-6 rounded-3xl shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white">
                  <Zap fill="currentColor" size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase opacity-50 tracking-tighter leading-none mb-1">
                    সক্রিয় ব্যবহারকারী
                  </p>
                  <p className="text-xl font-black leading-none">৫০০+ জন</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ৩. ভ্যালু সেকশন (Minimalist Grid) */}
      <section className="py-32 bg-white text-black rounded-[60px] md:rounded-[100px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              কেন আমরা <br /> আলাদা?
            </h2>
            <p className="max-w-xs text-slate-500 font-medium">
              আমাদের মূল ভিত্তি হলো সততা, স্বচ্ছতা এবং স্থানীয় মানুষের প্রতি
              অকৃত্রিম ভালোবাসা।
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-1px bg-slate-100 border border-slate-100 overflow-hidden rounded-3xl">
            {[
              {
                title: "আস্থা ও নিরাপত্তা",
                desc: "তালিকাভুক্ত প্রতিটি মিস্ত্রি স্থানীয় এবং আমাদের ব্যক্তিগতভাবে পরিচিত।",
                icon: <ShieldCheck size={40} />,
              },
              {
                title: "কমিউনিটির শক্তি",
                desc: "আমরা লয়াপাড়ার মানুষের দক্ষতা বৃদ্ধি এবং কর্মসংস্থানে কাজ করি।",
                icon: <Users2 size={40} />,
              },
              {
                title: "সহজ যোগাযোগ",
                desc: "অ্যাপ বা ওয়েবসাইটের ঝামেলা ছাড়াই সরাসরি কল দেওয়ার সুবিধা।",
                icon: <PhoneCall size={40} />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-12 hover:bg-slate-50 transition-colors group"
              >
                <div className="mb-8 text-primary group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 tracking-tight">
                  {item.title}
                </h4>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ৪. ফাইনাল কল-টু-অ্যাকশন */}
      <section className="py-32 text-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <h2 className="text-4xl md:text-6xl font-black max-w-4xl mx-auto leading-tight tracking-tight">
              আসুন একসাথে{" "}
              <span className="text-primary italic">নতুন লয়াপাড়া</span> গড়ি
            </h2>
            <button className="relative group overflow-hidden px-12 py-6 rounded-full bg-primary text-white font-black text-xl hover:shadow-[0_0_50px_rgba(255,100,0,0.4)] transition-all active:scale-95">
              <span className="relative z-10 group-hover:text-black transition-colors duration-300">
                আমাদের টিমে যোগ দিন
              </span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0" />
            </button>
          </motion.div>
        </div>
      </section>

      <footer className="py-10 text-center border-t border-white/5 opacity-30">
        <p className="text-xs tracking-[0.5em] uppercase">
          লয়াপাড়া সেবা — ২০২৬
        </p>
      </footer>
    </main>
  );
}
