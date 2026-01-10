import { useState, useRef } from "react";
import {
  Search,
  ShieldCheck,
  Link as LinkIcon,
  History,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  UploadCloud,
  X,
} from "lucide-react";
import MainComponent from "./MainComponent";

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const resetAll = () => {
    setInputText("");
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const recentClaims = [
    {
      status: "মিথ্যা (False)",
      color: "border-red-500 bg-red-50 text-red-700",
      date: "2025-12-10",
      time: "09:24",
      text: "ডোনাল্ড ট্রাম্প মারা গেছেন।",
    },
    {
      status: "অনিশ্চিত (Unsure)",
      color: "border-yellow-500 bg-yellow-50 text-yellow-700",
      date: "2025-12-02",
      time: "15:23",
      text: "গতকাল রাতে মিয়ানমারে একটা ভূমিকম্প হয়েছে।",
    },
    {
      status: "সত্য (True)",
      color: "border-green-500 bg-green-50 text-green-700",
      date: "2025-12-02",
      time: "15:21",
      text: "গতকাল রাতে ঢাকায় একটা ভূমিকম্প হয়েছে।",
    },
  ];

  return (
    <MainComponent>
      <div className="min-h-screen bg-[#F9FAFB] font-sans pb-16">
        {/* Header Hero Section */}
        <div className="bg-white border-b border-gray-200 mb-8">
          <div className="max-w-7xl mx-auto px-4 py-10">
            <h1 className="text-4xl md:text-5xl font-serif font-black text-gray-900 text-center leading-tight">
              গুজব রুখুন, <span className="text-blue-700">সত্য জানুন</span>
            </h1>
            <p className="text-gray-500 text-center mt-3 max-w-2xl mx-auto">
              আমাদের উন্নত এআই এবং তথ্য যাচাইকরণ পদ্ধতির মাধ্যমে যেকোনো খবরের
              সত্যতা নিশ্চিত করুন।
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Input Section */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                {/* Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="font-bold text-gray-800 uppercase tracking-tighter flex items-center gap-2">
                    <ShieldCheck className="text-blue-700" size={20} />
                    ভেরিফিকেশন ল্যাব
                  </h2>
                  <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-bold">
                    PRO MODE ACTIVE
                  </span>
                </div>

                <div className="p-6 space-y-5">
                  {/* Text Input Area */}
                  <div className="relative group">
                    <textarea
                      placeholder="কোনো সংবাদ বা টেক্সট এখানে পেস্ট করুন..."
                      className="w-full h-44 p-5 bg-white border-2 border-gray-100 rounded-xl focus:border-blue-600 focus:ring-0 outline-none transition-all text-lg leading-relaxed text-gray-800 placeholder:text-gray-300"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                    />
                    <div className="absolute bottom-4 right-4 text-[10px] text-gray-400 font-mono">
                      {inputText.length} CHARACTERS
                    </div>
                  </div>

                  {/* Image Upload Area */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {!selectedImage ? (
                      <div
                        onClick={() => fileInputRef.current.click()}
                        className="border-2 border-dashed border-gray-200 rounded-xl p-4 flex flex-col items-center justify-center gap-2 hover:border-blue-400 hover:bg-blue-50/30 cursor-pointer transition-all group"
                      >
                        <div className="p-2 bg-gray-100 rounded-full text-gray-400 group-hover:text-blue-600 group-hover:bg-blue-100 transition-colors">
                          <UploadCloud size={24} />
                        </div>
                        <div className="text-center">
                          <p className="text-xs font-bold text-gray-600">
                            ছবি আপলোড করুন
                          </p>
                          <p className="text-[10px] text-gray-400">
                            মেটাডেটা বিশ্লেষণের জন্য
                          </p>
                        </div>
                        <input
                          type="file"
                          ref={fileInputRef}
                          onChange={handleImageChange}
                          className="hidden"
                          accept="image/*"
                        />
                      </div>
                    ) : (
                      <div className="relative border-2 border-blue-100 rounded-xl overflow-hidden h-28 bg-gray-50">
                        <img
                          src={selectedImage}
                          alt="Preview"
                          className="w-full h-full object-contain p-2"
                        />
                        <button
                          onClick={() => setSelectedImage(null)}
                          className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    )}

                    {/* Optional Link Input */}
                    <div className="flex flex-col justify-center gap-3">
                      <div className="flex items-center gap-2 bg-gray-50 p-1 rounded-lg border border-gray-100 h-fit">
                        <div className="pl-3 text-gray-400">
                          <LinkIcon size={18} />
                        </div>
                        <input
                          type="text"
                          placeholder="নিউজ লিঙ্ক (ঐচ্ছিক)"
                          className="w-full bg-transparent p-3 outline-none text-sm"
                        />
                      </div>
                      <p className="text-[10px] text-gray-400 px-2 italic">
                        * ছবি বা লিঙ্ক দিলে এআই বিশ্লেষণ আরও নিখুঁত হয়।
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <button className="flex-[2] bg-blue-700 hover:bg-blue-800 text-white font-bold py-4 px-6 rounded-lg transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-3 active:scale-[0.98]">
                      <Search size={20} />
                      যাচাই শুরু করুন
                    </button>
                    <button
                      onClick={resetAll}
                      className="flex-1 border-2 border-gray-100 text-gray-500 font-bold py-4 px-6 rounded-lg hover:bg-gray-50 transition flex items-center justify-center gap-2"
                    >
                      <RotateCcw size={18} />
                      রিসেট
                    </button>
                  </div>
                </div>
              </div>

              {/* Recent Claims Section */}
              <div className="space-y-4">
                <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2">
                  <History size={16} />
                  সাম্প্রতিক যাচাইসমূহ
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {recentClaims.map((claim, idx) => (
                    <div
                      key={idx}
                      className={`p-4 bg-white border-l-4 rounded-r-xl shadow-sm transition-transform hover:-translate-y-1 cursor-pointer ${claim.color}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded shadow-sm bg-white/50">
                          {claim.status}
                        </span>
                        <span className="text-[10px] font-mono opacity-60 italic">
                          {claim.date} • {claim.time}
                        </span>
                      </div>
                      <p className="text-gray-800 font-semibold leading-snug">
                        {claim.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Intelligence Results */}
            <div className="lg:col-span-5 space-y-6">
              {/* Analysis Card */}
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="bg-blue-700 text-white px-6 py-4 flex items-center gap-2">
                  <Cpu size={20} />
                  <h3 className="font-bold text-sm uppercase tracking-wider">
                    এআই বিশ্লেষণ রিপোর্ট
                  </h3>
                </div>
                <div className="p-8 text-center space-y-4">
                  <div className="w-20 h-20 bg-gray-50 border-4 border-dashed border-gray-200 rounded-full flex items-center justify-center mx-auto text-gray-300">
                    <AlertTriangle size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">
                      কোনো তথ্য জমা দেওয়া হয়নি
                    </h4>
                    <p className="text-sm text-gray-500 mt-1">
                      বামে টেক্সট বক্স ব্যবহার করে একটি সংবাদ জমা দিন। আমাদের
                      এআই সাথে সাথে সেটির ফ্যাক্ট-চেক শুরু করবে।
                    </p>
                  </div>
                </div>
              </div>

              {/* Blockchain Evidence Card */}
              <div className="bg-[#0F172A] text-white rounded-xl shadow-xl overflow-hidden relative border border-slate-800">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <ShieldCheck size={100} />
                </div>

                <div className="p-6 relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="space-y-1">
                      <h3 className="font-bold text-xs uppercase tracking-[0.2em] text-blue-400">
                        ইমিউটেবল রেকর্ড
                      </h3>
                      <p className="text-lg font-serif italic text-white">
                        ব্লকচেইন ভেরিফিকেশন
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="flex items-center gap-1.5 text-[10px] text-green-400 font-mono bg-green-400/10 px-2 py-1 rounded border border-green-400/20">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        LIVE
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 font-mono">
                    <div className="p-3 bg-white/5 rounded border border-white/10">
                      <p className="text-[9px] text-slate-500 uppercase mb-1">
                        Transaction Hash
                      </p>
                      <p className="text-[11px] text-blue-300 truncate">
                        0x4f2a9...bd82e119ac021
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-white/5 rounded border border-white/10">
                        <p className="text-[9px] text-slate-500 uppercase mb-1">
                          Block No.
                        </p>
                        <p className="text-[11px] text-white">#18,294,021</p>
                      </div>
                      <div className="p-3 bg-white/5 rounded border border-white/10">
                        <p className="text-[9px] text-slate-500 uppercase mb-1">
                          Timestamp
                        </p>
                        <p className="text-[11px] text-white">0.002s latency</p>
                      </div>
                    </div>
                  </div>

                  <button className="w-full mt-6 py-2 bg-white/10 hover:bg-white/20 rounded border border-white/10 text-[10px] uppercase font-bold tracking-widest transition-all">
                    View On Explorer
                  </button>
                </div>
              </div>

              {/* Sources & Trust Indicators */}
              <div className="bg-blue-50 border border-blue-100 p-5 rounded-xl flex gap-4">
                <CheckCircle2 className="text-blue-700 shrink-0" size={24} />
                <div>
                  <h4 className="text-sm font-bold text-blue-900">
                    নির্ভরযোগ্য সূত্র ব্যবহার করুন
                  </h4>
                  <p className="text-xs text-blue-700/70 mt-1 leading-relaxed">
                    আমরা গুগল নিউজ, উইকিপিডিয়া এবং গ্লোবাল নিউজ এজেন্সিগুলোর
                    সোর্স মেটাডেটা বিশ্লেষণ করি।
                  </p>
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
