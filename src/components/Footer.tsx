import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white py-12 px-6 md:px-12 font-serif">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Logo and Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Logo & Tagline */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-3xl font-bold mb-2">The Bangla Fact Check</h2>
            <p className="text-gray-400 text-sm italic">
              সাহসিকতা • সততা • সাংবাদিকতা
            </p>
          </div>

          {/* Column 1 */}
          <div className="flex flex-col space-y-4">
            <a
              href="#"
              className="font-bold uppercase tracking-wider hover:text-gray-300 transition-colors"
            >
              About Us
            </a>
            <a
              href="#"
              className="font-bold uppercase tracking-wider hover:text-gray-300 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            {/* Copyright & Info */}
            <div className="max-w-2xl">
              <p className="text-sm font-semibold mb-2">
                © 2026 thebanglafactcheck.net | Powered by:{" "}
                <span className="text-blue-400 cursor-pointer">OSTHIR LAB</span>
              </p>
              <p className="text-xs text-gray-500 leading-relaxed">
                Copyright: Any unauthorized use or reproduction of The Bangla
                Fact Check content for commercial purposes is strictly
                prohibited and constitutes copyright infringement liable to
                legal action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
