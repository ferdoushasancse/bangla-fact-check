import { Menu, Search, CloudSun } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const currentDate = new Date().toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const navLinks = [
    { name: "হোম", path: "/" },
    { name: "ফ্ল্যাগড নিউস", path: "/flagged" },
    { name: "ভেরিফাই", path: "/verify" },
    { name: "আমাদের সম্পর্কে জানুন", path: "/about" },
    { name: "যোগাযোগ করুন", path: "/contact" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-black transition">
            <Menu size={28} />
          </button>
          <div className="hidden md:flex flex-col text-[13px] text-gray-600 border-l pl-4 border-gray-300">
            <div className="flex items-center gap-2">
              <span>{currentDate}</span>
              <CloudSun size={18} className="text-gray-500" />
            </div>
          </div>
        </div>

        <div className="flex-grow text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
            The Bangla Fact Check
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <button className="ml-4 text-gray-500 hover:text-black">
            <Search size={20} />
          </button>
        </div>
      </div>

      <nav className="max-w-6xl mx-auto px-4 pb-2">
        <div className="flex items-center justify-center border-t border-gray-100 pt-3">
          <ul className="flex flex-wrap items-center justify-center gap-6 md:gap-8 overflow-x-auto no-scrollbar">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-[15px] font-medium text-gray-800 hover:text-blue-700 whitespace-nowrap transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
