import {
  ShieldCheck,
  Facebook,
  Twitter,
  Youtube,
  Mail,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0a0a] text-gray-300 border-t-4 border-blue-700 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* 1. Brand & Mission - (4 Cols) */}
          <div className="md:col-span-4 md:col-start-1 space-y-6">
            <div>
              <h2 className="text-2xl font-serif font-black text-white leading-tight">
                The Bangla
                <br />
                <span className="text-blue-500 italic">Fact Check</span>
              </h2>
              <p className="mt-4 text-sm text-gray-400 leading-relaxed italic border-l-2 border-gray-700 pl-4">
                "বিভ্রান্তি রুখে দিন সঠিক তথ্যের শক্তিতে।" <br />
                আমরা একটি স্বাধীন প্ল্যাটফর্ম যা ইন্টারনেটে ছড়িয়ে পড়া অপপ্রচার ও
                গুজবের সত্যতা যাচাই করে।
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 bg-gray-900 hover:bg-blue-600 rounded transition-colors text-white"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-900 hover:bg-sky-400 rounded transition-colors text-white"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-900 hover:bg-red-600 rounded transition-colors text-white"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* 2. Newsletter - (2 Cols) */}
          <div className="md:col-span-4 md:col-start-9 bg-[#111] p-6 rounded-lg border border-gray-800">
            <h3 className="text-white font-bold text-sm mb-2">
              সাপ্তাহিক ফ্যাক্ট-চেক আপডেট
            </h3>
            <p className="text-xs text-gray-500 mb-4">
              সবচেয়ে গুরুত্বপূর্ণ যাচাইকৃত সংবাদগুলো সরাসরি আপনার ইমেইলে পেতে
              সাবস্ক্রাইব করুন।
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="আপনার ইমেইল..."
                className="w-full bg-black border border-gray-700 rounded-md py-2.5 px-4 text-sm focus:outline-none focus:border-blue-500"
              />
              <button className="absolute right-1 top-1 bottom-1 px-3 bg-blue-700 hover:bg-blue-600 rounded text-white transition">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Certifications / Trusted By */}
            <div className="flex items-center gap-6 opacity-50 grayscale hover:grayscale-0 transition-all cursor-pointer">
              <div className="flex items-center gap-2 border border-gray-500 px-3 py-1 rounded text-[10px] font-bold">
                <ShieldCheck size={16} />
                IFCN VERIFIED
              </div>
              <div className="text-[10px] font-bold border border-gray-500 px-3 py-1 rounded">
                PRESS COUNCIL MEMBER
              </div>
            </div>

            <div className="text-right">
              <p className="text-[11px] text-gray-500 uppercase tracking-tighter">
                © 2026 The Bangla Fact Check. All Rights Reserved.
              </p>
              <div className="flex gap-4 justify-end mt-2 text-[10px] text-gray-600">
                <a href="#" className="hover:text-blue-500">
                  Terms of Service
                </a>
                <a href="#" className="hover:text-blue-500">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-blue-500">
                  Cookie Settings
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Warning */}
        <div className="mt-8 bg-gray-950/50 border border-gray-900 p-4 flex items-start gap-3">
          <div className="p-1 bg-red-900/20 text-red-500 rounded">
            <Mail size={14} />
          </div>
          <p className="text-[10px] text-gray-600 leading-relaxed uppercase tracking-wide">
            সতর্কতা: এই সাইটের যেকোনো বিষয়বস্তু অনুমতি ছাড়া কপি করা আইনত দণ্ডনীয়
            অপরাধ। আমরা বস্তুনিষ্ঠ তথ্য প্রচারের ক্ষেত্রে আপোষহীন। কোনো সংবাদের
            ভুল খুঁজে পেলে দ্রুত আমাদের জানান।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
