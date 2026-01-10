import {
  ShieldCheck,
  Search,
  Scale,
  FileText,
  Users,
  Globe,
} from "lucide-react";
import MainComponent from "./MainComponent";

export default function AboutUs() {
  const principles = [
    {
      title: "নিরপেক্ষতা",
      desc: "আমরা কোনো রাজনৈতিক দল বা গোষ্ঠীর আদর্শ দ্বারা প্রভাবিত নই।",
      icon: <Scale className="text-blue-600" />,
      border: "border-blue-500",
    },
    {
      title: "তথ্যের স্বচ্ছতা",
      desc: "আমাদের প্রতিটি নিউজে ব্যবহৃত সোর্স বা সূত্র সবার জন্য উন্মুক্ত থাকে।",
      icon: <Search className="text-green-600" />,
      border: "border-green-500",
    },
    {
      title: "সংশোধনী নীতি",
      desc: "ভুল হলে আমরা তা স্বীকার করি এবং দ্রুত সঠিক তথ্য প্রকাশ করি।",
      icon: <FileText className="text-red-600" />,
      border: "border-red-500",
    },
  ];

  return (
    <MainComponent>
      <div className="bg-white min-h-screen font-sans">
        {/* Hero Section */}
        <div className="bg-[#0f172a] text-white py-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-black mb-6">
              তথ্যের সত্যতা রক্ষায় <br />
              <span className="text-blue-500 italic">আমাদের অঙ্গীকার</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              গুজব এবং অপপ্রচারের ভিড়ে আমরা আপনাকে দিচ্ছি যাচাইকৃত এবং নির্ভুল
              সংবাদ। The Bangla Fact Check কোনো সাধারণ সংবাদ মাধ্যম নয়, এটি
              তথ্যের অতন্দ্র প্রহরী।
            </p>
          </div>
        </div>

        <main className="max-w-6xl mx-auto p-6 md:py-16">
          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest">
                <Globe size={14} /> Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
                মানুষের জানার অধিকারকে <br />
                স্বচ্ছ করা আমাদের লক্ষ্য।
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                ইন্টারনেট এবং সোশ্যাল মিডিয়ার এই যুগে তথ্যের ভুল ব্যবহার সমাজ ও
                রাষ্ট্রের জন্য বিপজ্জনক। The Bangla Fact Check শুরু হয়েছে একটি
                স্বচ্ছ লক্ষ্য নিয়ে: প্রতিটি ভাইরাল খবরের পেছনের সত্য উন্মোচন করা
                এবং ডিজিটাল লিটারেসি বৃদ্ধি করা।
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 relative">
              <div className="absolute top-0 right-0 p-10 opacity-5">
                <ShieldCheck size={200} />
              </div>
              <blockquote className="relative z-10 text-2xl font-serif italic text-gray-800 border-l-4 border-blue-600 pl-6">
                "সঠিক তথ্য একটি সুস্থ সমাজের ভিত্তি। আমরা সেই ভিত্তি মজবুত রাখতে
                দিনরাত কাজ করি।"
              </blockquote>
              <p className="mt-4 font-bold text-blue-700 ml-6">
                — এডিটরিয়াল বোর্ড
              </p>
            </div>
          </div>

          {/* Core Principles Grid */}
          <div className="mb-24">
            <h3 className="text-center text-sm font-black text-gray-400 uppercase tracking-[0.3em] mb-12">
              আমাদের মূল স্তম্ভসমূহ
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {principles.map((item, index) => (
                <div
                  key={index}
                  className={`bg-white p-8 rounded-2xl border-t-4 ${item.border} shadow-xl shadow-gray-100 hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="mb-4 bg-gray-50 w-12 h-12 flex items-center justify-center rounded-xl">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Workflow Diagram Placeholder */}
          <div className="bg-gray-900 rounded-[2rem] p-10 md:p-16 text-white overflow-hidden relative">
            <div className="relative z-10">
              <h2 className="text-3xl font-serif font-bold mb-10 text-center">
                আমরা যেভাবে কাজ করি
              </h2>

              {/* Process Steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  {
                    step: "০১",
                    label: "দাবি সংগ্রহ",
                    desc: "ভাইরাল পোস্ট শনাক্তকরণ",
                  },
                  {
                    step: "০২",
                    label: "তথ্য অনুসন্ধান",
                    desc: "প্রাথমিক সোর্স যাচাই",
                  },
                  {
                    step: "০৩",
                    label: "এআই বিশ্লেষণ",
                    desc: "মেটাডেটা ও ফরেনসিক",
                  },
                  {
                    step: "০৪",
                    label: "ফলাফল প্রকাশ",
                    desc: "রেটিং প্রদান (সত্য/মিথ্যা)",
                  },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="text-center p-6 bg-white/5 rounded-2xl border border-white/10"
                  >
                    <div className="text-blue-500 font-mono font-bold mb-2 tracking-tighter">
                      {s.step}
                    </div>
                    <div className="font-bold text-sm mb-1">{s.label}</div>
                    <div className="text-xs text-gray-400">{s.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Funding & Transparency Disclaimer */}
          <div className="mt-20 p-8 border-2 border-dashed border-gray-200 rounded-2xl flex flex-col md:flex-row items-center gap-8">
            <div className="p-4 bg-blue-50 rounded-full text-blue-600">
              <Users size={32} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">
                তহবিল এবং স্বাধীনতা
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                The Bangla Fact Check একটি স্বতন্ত্র অলাভজনক উদ্যোগ। আমাদের
                তহবিল দাতা, পাঠক এবং প্রযুক্তিগত পার্টনারদের মাধ্যমে পরিচালিত
                হয়। আমরা নিশ্চিত করি যে আমাদের তহবিলের উৎস কোনোভাবেই আমাদের
                সাংবাদিকতার নীতিতে প্রভাব ফেলে না।
              </p>
            </div>
          </div>
        </main>
      </div>
    </MainComponent>
  );
}
