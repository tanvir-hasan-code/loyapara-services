"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // এটি প্রয়োজন
import { MapPin } from "lucide-react";
import ComplaintModal from "../ComplaintModal/ComplaintModal";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const detailsRef = useRef<HTMLDetailsElement>(null);

  // ২. বাইরে ক্লিক করলে ক্লোজ করার লজিক
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        detailsRef.current &&
        !detailsRef.current.contains(event.target as Node)
      ) {
        // যদি ক্লিক করা জায়গাটি ড্রপডাউনের ভেতরে না হয়, তবে 'open' এট্রিবিউট সরিয়ে দিন
        detailsRef.current.removeAttribute("open");
      }
    };

    // ক্লিক লিসেনার যোগ করা
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // ক্লিনআপ
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // একটিভ পাথ চেক করার ফাংশন
  const isActive = (path: string) => pathname === path;

  const navItems = (
    <>
      <li>
        <details ref={detailsRef} className="lg:static group">
          <summary className="font-bold text-primary">সকল সার্ভিসসমূহ</summary>
          <ul className="p-2 bg-base-100 w-72 z-[50] shadow-2xl border border-base-200 max-h-[80vh] overflow-y-auto">
            <li>
              <Link
                href="/services"
                className={isActive("/services") ? "bg-primary text-white" : ""}
              >
                🌐 সকল সার্ভিস
              </Link>
            </li>
            <li className="menu-title text-gray-500 mt-2">নির্মাণ ও মেরামত</li>
            <li>
              <Link
                href="/services?category=রাজমিস্ত্রি"
                className={
                  isActive("/services?category=রাজমিস্ত্রি")
                    ? "bg-primary text-white"
                    : ""
                }
              >
                🧱 রাজমিস্ত্রি
              </Link>
            </li>
            <li>
              <Link
                href="/services?category=ওয়েল্ডিং মিস্ত্রি"
                className={
                  isActive("/services?category=ওয়েল্ডিং মিস্ত্রি")
                    ? "bg-primary text-white"
                    : ""
                }
              >
                ⚒️ ওয়েল্ডিং মিস্ত্রি
              </Link>
            </li>
            <li>
              <Link
                href="/services?category=প্লাম্বার"
                className={
                  isActive("/services?category=প্লাম্বার")
                    ? "bg-primary text-white"
                    : ""
                }
              >
                🚰 পাইপ ফিটিং (প্লাম্বার)
              </Link>
            </li>

            <div className="divider my-0"></div>
            <li className="menu-title text-gray-500">স্বাস্থ্য ও শিক্ষা</li>
            <li>
              <Link
                href="/services?category=পশু চিকিৎসক"
                className={
                  isActive("/services?category=পশু চিকিৎসক")
                    ? "bg-primary text-white"
                    : ""
                }
              >
                🐄 গরুর ডাক্তার (পশু চিকিৎসক)
              </Link>
            </li>
            <li>
              <Link
                href="/services?category=মাস্টার / গৃহশিক্ষক"
                className={
                  isActive("/services?category=মাস্টার / গৃহশিক্ষক")
                    ? "bg-primary text-white"
                    : ""
                }
              >
                👨‍🏫 মাস্টার/শিক্ষক
              </Link>
            </li>
            <li>
              <Link
                href="/services?category=হোমিও ডাক্তার"
                className={
                  isActive("/services?category=হোমিও ডাক্তার")
                    ? "bg-primary text-white"
                    : ""
                }
              >
                🧪 হোমিও ডাক্তার
              </Link>
            </li>

            <div className="divider my-0"></div>
            <li className="menu-title text-gray-500">যানবাহন ও ইঞ্জিন</li>
            <li>
              <Link
                href="/services?category=ভ্যান ও অটো সার্ভিস"
                className={
                  isActive("/services?category=ভ্যান ও অটো সার্ভিস")
                    ? "bg-primary text-white"
                    : ""
                }
              >
                🛺 ভ্যান ও অটোরিকশা
              </Link>
            </li>

            <div className="divider my-0"></div>
            <li className="menu-title text-gray-500">ইলেকট্রনিক্স ও মেকার</li>
            <li>
              <Link
                href="/services?category=ইলেকট্রিশিয়ান"
                className={
                  isActive("/services?category=ইলেকট্রিশিয়ান")
                    ? "bg-primary text-white"
                    : ""
                }
              >
                ⚡ ইলেকট্রিশিয়ান (হাউজ ওয়ারিং)
              </Link>
            </li>
            <li>
              <Link
                href="/services?category=ইলেকট্রনিক্স মেকার"
                className={
                  isActive("/services?category=ইলেকট্রনিক্স মেকার")
                    ? "bg-primary text-white"
                    : ""
                }
              >
                📻 ইলেকট্রনিক্স মেকার
              </Link>
            </li>
            <li>
              <Link
                href="/services?category=মোটরসাইকেল মেকার"
                className={
                  isActive("/services?category=মোটরসাইকেল মেকার")
                    ? "bg-primary text-white"
                    : ""
                }
              >
                🏍️ মোটরসাইকেল মেকার
              </Link>
            </li>
            <li>
              <Link
                href="/services?category=মেশিন ও হাল মেকার"
                className={
                  isActive("/services?category=মেশিন ও হাল মেকার")
                    ? "bg-primary text-white"
                    : ""
                }
              >
                ⚙️ মেশিন/হাল-এর মেকার
              </Link>
            </li>
            <li>
              <Link
                href="/services?category=ভ্যান ও সাইকেল মেকার"
                className={
                  isActive("/services?category=ভ্যান ও সাইকেল মেকার")
                    ? "active"
                    : ""
                }
              >
                🚲 ভ্যান ও সাইকেল মেকার
              </Link>
            </li>

            <div className="divider my-0"></div>
            <li className="menu-title text-gray-500">কৃষি ও গৃহস্থালি</li>
            {/* খেজুরের রস যোগ করা হয়েছে */}
            <li>
              <Link
                href="/services?category=খেজুরের রস"
                className={
                  isActive("/services?category=খেজুরের রস")
                    ? "bg-primary text-white"
                    : ""
                }
              >
                🍯 খেজুরের রস
              </Link>
            </li>
            <li>
              <Link
                href="/services?category=কৃষি শ্রমিক"
                className={
                  isActive("/services?category=কৃষি শ্রমিক")
                    ? "bg-primary text-white"
                    : ""
                }
              >
                🌾 কৃষক (পরামর্শ ও শ্রমিক)
              </Link>
            </li>
            <li>
              <Link
                href="/services?category=কৃষক / কৃষি উদ্যোক্তা"
                className={
                  isActive("/services?category=কৃষক / কৃষি উদ্যোক্তা")
                    ? "bg-primary text-white"
                    : ""
                }
              >
                🏠 গৃহস্থ
              </Link>
            </li>

            <div className="divider my-0"></div>
            <li className="menu-title text-gray-500">অন্যান্য</li>
            <li>
              <Link
                href="/services?category=দর্জি / টেইলার্স"
                className={
                  isActive("/services?category=দর্জি / টেইলার্স")
                    ? "bg-primary text-white"
                    : ""
                }
              >
                🧵 দর্জি (টেইলার্স)
              </Link>
            </li>
          </ul>
        </details>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md shadow-sm sticky top-0 text-black z-50 px-2 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow-2xl border border-base-200"
          >
            <li>
              <Link
                href="/"
                className={
                  isActive("/")
                    ? " border-b-2 font-bold rounded-none border-primary "
                    : ""
                }
              >
                হোম
              </Link>
            </li>
            {navItems}
            <li>
              <Link
                href="/emergency"
                className={
                  isActive("/emergency")
                    ? " border-b-2 font-bold rounded-none border-primary "
                    : ""
                }
              >
                জরুরি নম্বর
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={
                  isActive("/about")
                    ? " border-b-2 font-bold rounded-none border-primary "
                    : ""
                }
              >
                আমাদের সম্পর্কে
              </Link>
            </li>
          </ul>
        </div>

        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary p-2 rounded-lg text-white group-hover:rotate-12 transition-transform">
            <MapPin size={24} />
          </div>
          <span className="text-xl font-black tracking-tighter sm:block text-slate-800">
            লয়াপাড়া<span className="text-primary">সেবা</span>
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium gap-2">
          <li>
            <Link
              href="/"
              className={
                isActive("/")
                  ? " border-b-2 font-bold rounded-none border-primary "
                  : ""
              }
            >
              হোম
            </Link>
          </li>
          {navItems}
          <li>
            <Link
              href="/emergency"
              className={
                isActive("/emergency")
                  ? " border-b-2 font-bold rounded-none border-primary "
                  : ""
              }
            >
              জরুরি নম্বর
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={
                isActive("/about")
                  ? " border-b-2 font-bold rounded-none border-primary "
                  : ""
              }
            >
              আমাদের সম্পর্কে
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-3">
        <div className="dropdown dropdown-end">
          {/* হেল্প আইকন বাটন */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-slate-600 bg-slate-100/50 hover:bg-primary/10 hover:text-primary transition-all duration-300"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item ring-2 ring-white"></span>
            </div>
          </div>

          {/* ড্রপডাউন কন্টেন্ট */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-[28px] z-[60] mt-4 w-72 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 text-slate-700 animate-in fade-in zoom-in duration-200"
          >
            {/* হারিয়ে যাওয়া বা পাওয়া বাটন */}
            <li className="mb-2">
              <Link
                href="/lostFound"
                className="flex items-center gap-4 p-4 hover:bg-indigo-50 text-indigo-700 font-bold rounded-2xl transition-all group border border-transparent hover:border-indigo-100"
              >
                <div className="bg-indigo-100 p-2.5 rounded-xl group-hover:bg-indigo-200 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                    <path d="M11 8a3 3 0 0 0-3 3" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[15px] leading-tight">
                    হারিয়ে যাওয়া বা পাওয়া
                  </span>
                  <span className="text-[10px] font-medium text-indigo-400 mt-0.5">
                    দরকারি জিনিসের খোঁজ দিন
                  </span>
                </div>
              </Link>
            </li>

            <div className="divider opacity-40 my-1 px-4"></div>

            {/* অভিযোগ জানান বাটন */}
            <li>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-4 p-4 hover:bg-rose-50 text-rose-600 font-bold rounded-2xl transition-all group w-full border border-transparent hover:border-rose-100"
              >
                <div className="bg-rose-100 p-2.5 rounded-xl group-hover:bg-rose-200 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 9v4" />
                    <path d="M12 17h.01" />
                    <path d="m4.93 4.93 14.14 14.14" />
                    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[15px] leading-tight">
                    অভিযোগ জানান
                  </span>
                  <span className="text-[10px] font-medium text-rose-400 mt-0.5">
                    সেবা নিয়ে মতামত দিন
                  </span>
                </div>
              </button>
            </li>
          </ul>
        </div>

        {/* লিস্টিং যোগ করুন বাটন */}
        <Link
          href="/addService"
          className={`btn btn-primary btn-sm md:btn-md text-white rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 ${isActive("/addService") ? "ring-2 ring-primary ring-offset-2" : ""}`}
        >
          <span className="hidden sm:inline">লিস্টিং যোগ করুন</span>
          <span className="sm:hidden">+ যোগ</span>
        </Link>
      </div>
      <ComplaintModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Navbar;
