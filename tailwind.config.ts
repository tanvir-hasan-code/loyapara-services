import type { Config } from "tailwindcss";

// daisyui এর জন্য টাইপ এরর হ্যান্ডেল করতে আমরা 'any' বা কাস্টম ইন্টারফেস ব্যবহার করতে পারি
const config: Config | any = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#0d9488',
      },
    },
  },
  plugins: [require("daisyui")],
  // ডেইজিইউআই থিম কনফিগারেশন
  daisyui: {
    themes: ["light"], 
  },
};

export default config;