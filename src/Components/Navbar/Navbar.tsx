"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Wrench } from 'lucide-react'; // আইকনের জন্য

const Navbar: React.FC = () => {
const navItems = (
    <>
      <li><Link href="/">হোম</Link></li>
      <li>
        <details className="lg:static">
          <summary className="font-bold text-primary">সকল সার্ভিসসমূহ</summary>
          <ul className="p-2 bg-base-100 w-64 z-[50] shadow-2xl border border-base-200 max-h-[70vh] overflow-y-auto">
            {/* ঘরবাড়ি নির্মাণ */}
            <li className="menu-title text-gray-500">নির্মাণ ও মেরামত</li>
            <li><Link href="/raj-mistri">🧱 রাজমিস্ত্রি</Link></li>
            <li><Link href="/wood-mistri">🪑 কাঠমিস্ত্রি (ফার্নিচার)</Link></li>
            <li><Link href="/welding">⚒️ ওয়েল্ডিং মিস্ত্রি</Link></li>
            <li><Link href="/tiles-mistri">💎 টাইলস মিস্ত্রি</Link></li>
            <li><Link href="/painter">🎨 রঙ মিস্ত্রি</Link></li>

            {/* ইলেকট্রনিক্স ও যন্ত্রপাতি */}
            <div className="divider my-0"></div>
            <li className="menu-title text-gray-500">ইলেকট্রনিক্স ও মেকার</li>
            <li><Link href="/electrician">⚡ ইলেকট্রিশিয়ান (হাউজ ওয়ারিং)</Link></li>
            <li><Link href="/electronics-maker">📻 ইলেকট্রনিক্স মেকার (ফ্যান, রাইস কুকার)</Link></li>
            <li><Link href="/fridge-ac">❄️ ফ্রিজ ও এসি মেকার</Link></li>
            <li><Link href="/mobile-technician">📱 মোবাইল টেকনিশিয়ান</Link></li>
            <li><Link href="/computer-repair">💻 কম্পিউটার/ল্যাপটপ মেরামত</Link></li>

            {/* যানবাহন ও ইঞ্জিন */}
            <div className="divider my-0"></div>
            <li className="menu-title text-gray-500">যানবাহন ও ইঞ্জিন</li>
            <li><Link href="/van-repair">🛺 ভ্যান/অটোরিকশা মেকার</Link></li>
            <li><Link href="/bike-repair">🏍️ মোটরসাইকেল মেকার</Link></li>
            <li><Link href="/pump-mistri">💧 পাম্প/মেশিন মিস্ত্রি (সেচ পাম্প)</Link></li>
            <li><Link href="/cycle-mistri">🚲 সাইকেল মেকার</Link></li>

            {/* অন্যান্য */}
            <div className="divider my-0"></div>
            <li className="menu-title text-gray-500">অন্যান্য</li>
            <li><Link href="/plumber">🚰 প্লাম্বার (পাইপ ও কল)</Link></li>
            <li><Link href="/tailors">🧵 দর্জি (টেইলার্স)</Link></li>
          </ul>
        </details>
      </li>
      <li><Link href="/emergency">জরুরি নম্বর</Link></li>
      <li><Link href="/about">আমাদের সম্পর্কে</Link></li>
    </>
  );

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md shadow-sm sticky top-0 z-50 px-2 lg:px-8">
      <div className="navbar-start">
        {/* মোবাইল ড্রপডাউন */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow-2xl border border-base-200">
            {navItems}
          </ul>
        </div>

        {/* লোগো সেকশন */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
            <MapPin size={24} />
          </div>
          <span className="text-xl font-black tracking-tighter  sm:block">
            লয়াপাড়া<span className="text-primary">সেবা</span>
          </span>
        </Link>
      </div>

      {/* ডেস্কটপ মেনু (সেন্টার) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium gap-2">
          {navItems}
        </ul>
      </div>

      {/* কন্টাক্ট বাটন এবং ইউজার সেকশন (এন্ড) */}
      <div className="navbar-end gap-3">
        {/* সাহায্য বা মেসেজ আইকন */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow border border-base-200">
            <li><a>জরুরি সেবার তালিকা</a></li>
            <li><a>অভিযোগ জানান</a></li>
          </ul>
        </div>

        {/* প্রধান অ্যাকশন বাটন */}
        <Link 
          href="/add-service" 
          className="btn btn-primary btn-sm md:btn-md text-white rounded-lg shadow-md hover:shadow-lg transition-all"
        >
          <span className="hidden sm:inline">লিস্টিং যোগ করুন</span>
          <span className="sm:hidden">+ যোগ</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;