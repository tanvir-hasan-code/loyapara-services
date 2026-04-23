import type { Config } from "tailwindcss";

const config: Config = {
  // ১. মোড নিশ্চিত করা (Optional but helpful)
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // ২. আপনি চাইলে এখানে আপনার প্রিয় কালারগুলো সেভ করে রাখতে পারেন
      colors: {
        'brand-teal': '#0d9488',
      },
    },
  },
  plugins: [require("daisyui")],
  // ৩. ডেইজিইউআই থিম যদি সাদা রাখতে চান
  daisyui: {
    themes: ["light"], 
  },
};
export default config;