"use client";
import React, { useState, useEffect } from 'react';
import { Search, Plus, MapPin, Calendar, Package, HelpCircle, X, Camera, Send, Loader2, Info, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ImgBB API Key (এখানে আপনার নিজের কী বসাতে পারেন)
const IMGBB_API_KEY = "58e5789c1d307aea309a043927f4f662"; 

const dummyPosts = [
  { id: 1, type: 'lost', title: 'কালো মানিব্যাগ হারানো গিয়েছে', location: 'লয়াপাড়া বাজার', date: '2026-03-10', description: 'ভেতরে আইডি কার্ড ও কিছু টাকা ছিল। এটি চামড়ার তৈরি একটি মানিব্যাগ।', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=400' },
  { id: 2, type: 'found', title: 'চাবির তোড়া পাওয়া গিয়েছে', location: 'স্কুল মাঠ', date: '2026-03-09', description: '৩টি চাবি একসাথে রিং করা আছে। রিংটি গোল্ডেন কালারের।', image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400' }
];

export default function LostFoundPage() {
  const [filter, setFilter] = useState<'all' | 'lost' | 'found'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [postType, setPostType] = useState<'lost' | 'found'>('lost');
  const [searchQuery, setSearchQuery] = useState('');
  const [uploading, setUploading] = useState(false);

  // ফর্ম ডাটা স্টেট
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    date: '',
    description: '',
    image: ''
  });

  useEffect(() => {
    if (isModalOpen || isDetailOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [isModalOpen, isDetailOpen]);

  // ইমেজ আপলোড ফাংশন (ImgBB)
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    const data = new FormData();
    data.append("image", file);

    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      if (result.success) {
        setFormData(prev => ({ ...prev, image: result.data.url }));
      }
    } catch (error) {
      alert("ইমেজ আপলোড ব্যর্থ হয়েছে!");
    } finally {
      setUploading(false);
    }
  };

  // সার্চ এবং ফিল্টার লজিক
  const filteredPosts = dummyPosts.filter(post => {
    const matchesFilter = filter === 'all' || post.type === filter;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalData = { ...formData, type: postType };
    console.log("Database Object to Save:", finalData);
    setIsModalOpen(false);
    setFormData({ title: '', location: '', date: '', description: '', image: '' });
  };

  const openDetails = (post: any) => {
    setSelectedPost(post);
    setIsDetailOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20 overflow-x-hidden">
      
      {/* ১. এনিমেটেড প্রিমিয়াম হেডার (গ্রামের ছবি সহ) */}
      <div className="relative pt-24 pb-40 px-4 rounded-b-[50px] text-center text-white overflow-hidden shadow-2xl z-0">
        
        {/* ব্যাকগ্রাউন্ড ছবি (গ্রামের ছবি) */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMKeFYMXQ4bk6KNaKuQHe8Y6J3XH-q3YMIqw&s" 
            className="w-full h-full object-cover" 
            alt="Loyapara Village" 
          />
          {/* ডার্ক গ্রেডিয়েন্ট ওভারলে যাতে লেখা ফুটে ওঠে */}
          <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto">
          {/* লয়াপাড়া ব্যাজ */}
          <motion.div 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
          >
            <MapPin size={14} className="text-blue-200" />
            <span className="text-xs md:text-sm font-black tracking-widest uppercase text-white">লয়াপাড়া সেবা ডিরেক্টরি</span>
          </motion.div>

          {/* মেইন টাইটেল এনিমেশন */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-7xl font-black mb-4 tracking-tighter drop-shadow-2xl text-white">
              হারানো ও <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-white italic">প্রাপ্তি</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-white/90 font-medium max-w-xl mx-auto text-sm md:text-xl leading-relaxed italic"
          >
            লয়াপাড়ার মানুষের সহযোগিতায় আপনার হারিয়ে যাওয়া প্রিয় জিনিসটি খুঁজে নিন অথবা অন্যের মুখে হাসি ফোটান।
          </motion.p>
        </div>

        {/* নিচের কার্ভ ডেকোরেশন */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
          <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#f8fafc"></path>
          </svg>
        </div>
      </div>

      {/* ২. সার্চ ও ফিল্টার */}
      <div className="max-w-6xl mx-auto px-4 -mt-14 relative z-10">
        <div className="bg-white p-4 rounded-[30px] shadow-xl border border-slate-100 flex flex-col md:flex-row gap-4 items-center">
          <div className="flex bg-slate-100 p-1.5 rounded-2xl w-full md:w-auto">
            {['all', 'lost', 'found'].map((t) => (
              <button key={t} onClick={() => setFilter(t as any)} className={`flex-1 md:px-8 py-2.5 rounded-xl font-black transition-all text-xs md:text-sm ${filter === t ? 'bg-white text-primary shadow-sm' : 'text-slate-500'}`}>
                {t === 'all' ? 'সব' : t === 'lost' ? 'হারানো' : 'প্রাপ্তি'}
              </button>
            ))}
          </div>

          <div className="relative flex-1 w-full">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input type="text" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="টাইটেল দিয়ে সার্চ করুন..." className="w-full pl-12 pr-4 py-3.5 bg-slate-50 rounded-[18px] outline-none border border-slate-100 focus:ring-2 focus:ring-primary/20 font-bold text-slate-700" />
          </div>

          <button onClick={() => setIsModalOpen(true)} className="btn btn-primary rounded-[18px] px-8 h-14 w-full md:w-auto shadow-lg shadow-primary/20 border-none font-black text-white active:scale-95 transition-all">
            <Plus size={20} /> নতুন পোস্ট
          </button>
        </div>
      </div>

      {/* ৩. পোস্ট লিস্ট */}
      <div className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post) => (
            <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={post.id} className="bg-white rounded-[35px] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 bg-slate-200">
                <img src={post.image} className="w-full h-full object-cover" alt="" />
                <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-black text-white ${post.type === 'lost' ? 'bg-red-500' : 'bg-emerald-500'}`}>
                  {post.type === 'lost' ? 'LOST' : 'FOUND'}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-black text-slate-800 mb-2 leading-tight">{post.title}</h3>
                <div className="text-slate-500 text-xs flex flex-col gap-2 mb-4 font-bold">
                  <span className="flex items-center gap-1"><MapPin size={14} className="text-primary"/> {post.location}</span>
                  <span className="flex items-center gap-1"><Calendar size={14} className="text-primary"/> {post.date}</span>
                </div>
                <button onClick={() => openDetails(post)} className="w-full py-3 bg-slate-50 hover:bg-primary hover:text-white text-primary font-black rounded-xl transition-all border border-slate-100 active:scale-95">
                  বিস্তারিত
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {filteredPosts.length === 0 && <p className="col-span-full text-center py-10 font-bold text-slate-400">কিছু পাওয়া যায়নি!</p>}
      </div>

      {/* ৪. নতুন পোস্ট মডাল */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" />
            <motion.div initial={{ scale: 0.9, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.9, y: 20, opacity: 0 }} className="relative bg-white w-full max-w-md rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-white sticky top-0 z-20">
                <h2 className="text-xl font-black text-slate-800 italic flex items-center gap-2"><Package className="text-primary" size={24}/> তথ্য দিন</h2>
                <button onClick={() => setIsModalOpen(false)} className="p-2 bg-slate-100 rounded-xl hover:bg-red-50 hover:text-red-500 transition-colors"><X size={20}/></button>
              </div>
              <form onSubmit={handleSubmit} className="flex flex-col overflow-hidden">
                <div className="p-6 overflow-y-auto custom-scrollbar space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <button type="button" onClick={() => setPostType('lost')} className={`py-3 rounded-2xl font-black text-sm transition-all ${postType === 'lost' ? 'bg-red-500 text-white shadow-md' : 'bg-slate-50 text-slate-500 border border-slate-100'}`}>হারিয়ে গেছে</button>
                    <button type="button" onClick={() => setPostType('found')} className={`py-3 rounded-2xl font-black text-sm transition-all ${postType === 'found' ? 'bg-emerald-500 text-white shadow-md' : 'bg-slate-50 text-slate-500 border border-slate-100'}`}>পাওয়া গেছে</button>
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-600 ml-1 italic">জিনিসের নাম *</label>
                    <input required value={formData.title} onChange={(e)=>setFormData({...formData, title: e.target.value})} type="text" placeholder="উদা: কালো ব্যাগ" className="w-full p-3.5 bg-slate-50 rounded-xl border border-slate-100 focus:border-primary font-bold text-sm outline-none" />
                    
                    <label className="text-xs font-black text-slate-600 ml-1 italic">{postType === 'lost' ? 'কোথায় হারিয়েছে? *' : 'কোথায় পাওয়া গিয়েছে? *'}</label>
                    <input required value={formData.location} onChange={(e)=>setFormData({...formData, location: e.target.value})} type="text" placeholder="স্থান লিখুন" className="w-full p-3.5 bg-slate-50 rounded-xl border border-slate-100 focus:border-primary font-bold text-sm outline-none" />
                    
                    <label className="text-xs font-black text-slate-600 ml-1 italic">তারিখ *</label>
                    <input required value={formData.date} onChange={(e)=>setFormData({...formData, date: e.target.value})} type="date" className="w-full p-3.5 bg-slate-50 rounded-xl border border-slate-100 focus:border-primary font-bold text-sm outline-none" />

                    <label className="text-xs font-black text-slate-600 ml-1 italic">বিস্তারিত বিবরণ</label>
                    <textarea value={formData.description} onChange={(e)=>setFormData({...formData, description: e.target.value})} rows={3} placeholder="বর্ণনা দিন..." className="w-full p-3.5 bg-slate-50 rounded-xl border border-slate-100 focus:border-primary font-bold text-sm resize-none outline-none"></textarea>
                  </div>
                  <div className="relative p-4 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center gap-2 cursor-pointer hover:bg-slate-50 transition-all overflow-hidden">
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                    {uploading ? (
                      <div className="flex flex-col items-center py-2"><Loader2 className="animate-spin text-primary" size={24}/><span className="text-[10px] font-bold mt-1">আপলোড হচ্ছে...</span></div>
                    ) : formData.image ? (
                      <div className="flex items-center gap-3"><img src={formData.image} className="w-12 h-12 rounded-lg object-cover border" alt="preview" /><span className="text-xs font-bold text-emerald-600">ছবি যুক্ত হয়েছে!</span></div>
                    ) : (
                      <><Camera size={20} className="text-slate-400"/><span className="text-xs font-black text-slate-500">ছবি দিন (ঐচ্ছিক)</span></>
                    )}
                  </div>
                </div>
                <div className="p-6 border-t border-slate-100 bg-white">
                  <button type="submit" className="w-full bg-primary text-white font-black py-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 active:scale-95">পোস্ট করুন <Send size={18}/></button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ৫. বিস্তারিত দেখার মডাল (Details Modal) */}
      <AnimatePresence>
        {isDetailOpen && selectedPost && (
          <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsDetailOpen(false)} className="absolute inset-0 bg-slate-900/60 backdrop-blur-md" />
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-white w-full max-w-md rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
              <button onClick={() => setIsDetailOpen(false)} className="absolute right-6 top-6 p-2 bg-white/80 backdrop-blur shadow-md rounded-full text-slate-600 z-10 hover:text-red-500 transition-colors"><X size={20}/></button>
              <div className="relative h-64 w-full bg-slate-200">
                <img src={selectedPost.image} className="w-full h-full object-cover" alt="" />
                <div className={`absolute bottom-6 left-6 px-4 py-1.5 rounded-full text-[10px] font-black text-white ${selectedPost.type === 'lost' ? 'bg-red-500 shadow-red-200' : 'bg-emerald-500 shadow-emerald-200'} shadow-lg`}>
                  {selectedPost.type === 'lost' ? '● হারানো গিয়েছে' : '● পাওয়া গিয়েছে'}
                </div>
              </div>
              <div className="p-8 overflow-y-auto custom-scrollbar">
                <h2 className="text-2xl font-black text-slate-800 mb-4 leading-tight italic underline decoration-primary/30 underline-offset-4">{selectedPost.title}</h2>
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-primary"><MapPin size={18}/></div>
                    <div><p className="text-[10px] font-black text-slate-400 italic">স্থান</p><p className="text-sm font-bold text-slate-700">{selectedPost.location}</p></div>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <div className="p-2 bg-white rounded-lg shadow-sm text-primary"><Clock size={18}/></div>
                    <div><p className="text-[10px] font-black text-slate-400 italic">তারিখ</p><p className="text-sm font-bold text-slate-700">{selectedPost.date}</p></div>
                  </div>
                </div>
                <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100">
                  <p className="text-xs font-black text-slate-400 mb-2 flex items-center gap-1 italic"><Info size={14}/> বিস্তারিত বর্ণনা</p>
                  <p className="text-sm font-medium text-slate-600 leading-relaxed">{selectedPost.description}</p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 10px; }
      `}</style>
    </div>
  );
}