import React, { useState } from "react";
import {
  Search,
  Info,
  ShieldCheck,
  Link as LinkIcon,
  Clock,
  History,
} from "lucide-react";
import MainComponent from "./MainComponent";

const Home = () => {
  const [inputText, setInputText] = useState("");

  const recentClaims = [
    {
      status: "UNSURE",
      date: "2025-12-10",
      time: "09:24",
      text: "ডোনাল্ড ট্রাম্প মারা গেছেন।",
    },
    {
      status: "UNSURE",
      date: "2025-12-02",
      time: "15:23",
      text: "গতকাল রাতে মিয়ানমারে একটা ভূমিকম্প হয়েছে।",
    },
    {
      status: "UNSURE",
      date: "2025-12-02",
      time: "15:21",
      text: "গতকাল রাতে ঢাকায় একটা ভূমিকম্প হয়েছে।",
    },
  ];

  return (
    <MainComponent>
      <div className="min-h-screen bg-gray-50 font-sans pb-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Main Layout Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Input Section */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <ShieldCheck className="text-blue-700" size={28} />
                  সত্যতা যাচাই করুন
                </h2>

                <div className="space-y-4">
                  <div className="relative">
                    <textarea
                      placeholder="এখানে বাংলা বা কোড-মিশ্রিত টেক্সট লিখুন..."
                      className="w-full h-48 p-4 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none text-gray-800"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LinkIcon size={18} className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="ঐচ্ছিক: খবরের লিঙ্ক পেস্ট করুন"
                      className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button className="flex-1 bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-md transition-all flex items-center justify-center gap-2">
                      <Search size={20} />
                      এখনই বিশ্লেষণ করুন
                    </button>
                    <button
                      onClick={() => setInputText("")}
                      className="px-6 py-3 border border-gray-300 text-gray-600 font-medium rounded-md hover:bg-gray-100 transition"
                    >
                      রিসেট করুন
                    </button>
                  </div>
                </div>
              </div>

              {/* Recent Claims Section */}
              <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2 uppercase tracking-wider">
                  <History size={20} className="text-gray-500" />
                  Checked Claims
                </h3>
                <div className="space-y-3">
                  {recentClaims.map((claim, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-gray-50 border-l-4 border-yellow-500 rounded-r-md"
                    >
                      <div className="flex items-center gap-3 text-xs font-mono text-gray-500 mb-2">
                        <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded font-bold">
                          {claim.status}
                        </span>
                        <span>
                          {claim.date}T{claim.time}
                        </span>
                      </div>
                      <p className="text-gray-800 font-medium">{claim.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Results & Blockchain */}
            <div className="lg:col-span-5 space-y-6">
              {/* AI Summary Card */}
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-2 bg-blue-50 rounded-full text-blue-700">
                    <Info size={18} />
                  </div>
                  <h3 className="font-bold text-gray-900">AI সারাংশ</h3>
                </div>
                <p className="text-sm text-gray-500 italic bg-gray-50 p-3 rounded">
                  ফলাফল দেখতে একটি দাবি জমা দিন।
                </p>
              </div>

              {/* Findings Card */}
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-6 bg-blue-700 rounded-full"></span>
                  ফাইন্ডিংস
                </h3>
                <p className="text-sm text-gray-500 border-l-2 border-gray-100 pl-4 py-1">
                  বিশ্লেষণ পাওয়া যায়নি। একটি দাবি জমা দিন।
                </p>
              </div>

              {/* Sources Card */}
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <LinkIcon size={18} className="text-gray-500" />
                  সূত্রসমূহ
                </h3>
                <div className="text-sm text-gray-400 text-center py-6 border-2 border-dashed border-gray-100 rounded">
                  সংশ্লিষ্ট কোনো লিঙ্ক পাওয়া যায়নি।
                </div>
              </div>

              {/* Blockchain Verification */}
              <div className="bg-gray-900 text-white p-5 rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck size={16} className="text-green-400" />
                    ব্লকচেইন ভেরিফিকেশন
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-green-400 font-mono">
                      LIVE ON CHAIN
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 font-mono text-[11px]">
                  <div>
                    <p className="text-gray-500 mb-1 uppercase">
                      Transaction Hash
                    </p>
                    <p className="text-gray-300 break-all">—</p>
                  </div>
                  <div>
                    <p className="text-gray-500 mb-1 uppercase">Block Number</p>
                    <p className="text-gray-300">—</p>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-gray-800">
                    <p className="text-gray-500 mb-1 uppercase flex items-center gap-1">
                      <Clock size={12} /> Timestamp
                    </p>
                    <p className="text-gray-300">
                      {new Date().toISOString().replace("T", " ").split(".")[0]}{" "}
                      UTC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainComponent>
  );
};

export default Home;
