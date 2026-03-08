import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm sticky top-0 z-50">
      {/* মোবাইল ড্রপডাউন মেনু */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><Link href="/">হোম</Link></li>
            <li>
              <a>সার্ভিসসমূহ</a>
              <ul className="p-2">
                <li><Link href="/mistri">মিস্ত্রি</Link></li>
                <li><Link href="/van">ভ্যান/পরিবহন</Link></li>
              </ul>
            </li>
            <li><Link href="/about">আমাদের সম্পর্কে</Link></li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl font-bold">
          লয়াপাড়া সেবা
        </Link>
      </div>

      {/* ডেস্কটপ মেনু */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link href="/">হোম</Link></li>
          <li>
            <details>
              <summary>সার্ভিসসমূহ</summary>
              <ul className="p-2 bg-base-100 w-40 z-[1] shadow-md">
                <li><Link href="/mistri">মিস্ত্রি</Link></li>
                <li><Link href="/van">ভ্যান/পরিবহন</Link></li>
              </ul>
            </details>
          </li>
          <li><Link href="/about">আমাদের সম্পর্কে</Link></li>
        </ul>
      </div>

      {/* শেষ অংশ (কল বাটন বা লগইন) */}
      <div className="navbar-end">
        <Link href="/contact" className="btn btn-primary text-white">
          যোগাযোগ
        </Link>
      </div>
    </div>
  );
};

export default Navbar;