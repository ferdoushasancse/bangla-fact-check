import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  AlertCircle,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import MainComponent from "./MainComponent";

export default function ContactUs() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <MainComponent>
      <div className="bg-[#f8fafc] min-h-screen font-sans">
        {/* Header Section */}
        <div className="bg-white border-b border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-black text-gray-900 leading-tight">
              যোগাযোগ ও <span className="text-blue-700">তথ্য প্রদান</span>
            </h1>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
              আমাদের ফ্যাক্ট-চেকিং টিমকে কোনো গুজব সম্পর্কে জানাতে বা আমাদের
              কার্যক্রম সম্পর্কে প্রশ্ন করতে নিচের ফর্মটি ব্যবহার করুন।
            </p>
          </div>
        </div>

        <main className="max-w-6xl mx-auto p-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column: Contact Details & Guidelines */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-blue-700 text-white p-8 rounded-2xl shadow-xl shadow-blue-100 relative overflow-hidden">
                <ShieldCheck
                  className="absolute -bottom-4 -right-4 text-blue-600 opacity-50"
                  size={120}
                />
                <h3 className="text-xl font-bold mb-6 relative z-10">
                  সরাসরি যোগাযোগ
                </h3>

                <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-sm uppercase tracking-wide">
                        অফিস ঠিকানা
                      </p>
                      <p className="text-blue-100 text-sm mt-1">
                        কাজী নজরুল ইসলাম অ্যাভিনিউ, ঢাকা-১২১৫, বাংলাদেশ
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-sm uppercase tracking-wide">
                        ফোন
                      </p>
                      <p className="text-blue-100 text-sm mt-1">
                        +৮৮০ ২-XXXXXXX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="font-bold text-sm uppercase tracking-wide">
                        ইমেইল
                      </p>
                      <p className="text-blue-100 text-sm mt-1">
                        tips@thebanglafactcheck.net
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-100 p-6 rounded-2xl">
                <div className="flex items-center gap-2 text-amber-800 font-bold mb-3">
                  <AlertCircle size={20} />
                  <span>গুজব রিপোর্ট করছেন?</span>
                </div>
                <p className="text-sm text-amber-700 leading-relaxed">
                  যদি আপনি কোনো ভাইরাল হওয়া ভুল তথ্য বা গুজব রিপোর্ট করতে চান,
                  তবে দয়া করে সংবাদের সোর্স বা স্ক্রিনশট সংযুক্ত করার চেষ্টা
                  করুন। আমাদের টিম দ্রুত যাচাই করবে।
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-2">
              <div className="bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
                <div className="p-8">
                  {submitted ? (
                    <div className="text-center py-16 animate-in fade-in zoom-in duration-300">
                      <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={48} />
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        ধন্যবাদ!
                      </h2>
                      <p className="text-gray-500 mt-2 text-lg">
                        আপনার বার্তাটি আমাদের তথ্য যাচাইকরণ টিমের কাছে পৌঁছেছে।
                      </p>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-black transition-all"
                      >
                        আরেকটি বার্তা পাঠান
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1">
                            আপনার নাম
                          </label>
                          <input
                            type="text"
                            placeholder="যেমন: সাকিব আহমেদ"
                            required
                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1">
                            ইমেইল ঠিকানা
                          </label>
                          <input
                            type="email"
                            placeholder="example@mail.com"
                            required
                            className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1">
                          বার্তার ধরন
                        </label>
                        <select className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all appearance-none">
                          <option>গুজব রিপোর্ট (Report a Rumor)</option>
                          <option>সাধারণ জিজ্ঞাসা (General Inquiry)</option>
                          <option>বিজ্ঞাপন বিষয়ক (Advertisement)</option>
                          <option>সংশোধনী অনুরোধ (Correction Request)</option>
                          <option>টেকনিক্যাল সাপোর্ট (Technical Issue)</option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-black text-gray-400 uppercase tracking-widest ml-1">
                          বিস্তারিত বার্তা
                        </label>
                        <textarea
                          placeholder="আপনার বার্তাটি এখানে বিস্তারিত লিখুন..."
                          rows={6}
                          required
                          className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-blue-700 text-white font-bold py-5 rounded-xl uppercase tracking-[0.2em] shadow-lg shadow-blue-100 hover:bg-blue-800 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                      >
                        <Send size={18} />
                        বার্তা পাঠান
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Security/Privacy Note */}
              <p className="mt-6 text-center text-gray-400 text-xs flex items-center justify-center gap-2">
                <ShieldCheck size={14} className="text-green-500" />
                আপনার ব্যক্তিগত তথ্য আমাদের কাছে নিরাপদ। বিস্তারিত জানতে আমাদের
                প্রাইভেসী পলিসি পড়ুন।
              </p>
            </div>
          </div>
        </main>
      </div>
    </MainComponent>
  );
}
