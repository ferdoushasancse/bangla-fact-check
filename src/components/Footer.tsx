export default function Footer() {
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="max-w-6xl mx-auto px-6 py-6 text-sm text-gray-600 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        {/* Left */}
        <div>
          <p className="font-medium text-gray-800">Bangla Fact Check</p>
          <p>Fighting misinformation with verified facts.</p>
        </div>

        {/* Center Links */}
        <nav className="flex gap-4">
          <a href="#" className="hover:text-blue-600 transition">
            About
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Methodology
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Sources
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Contact
          </a>
        </nav>

        {/* Right */}
        <div className="text-gray-500">
          © {new Date().getFullYear()} Bangla Fact Check
        </div>
      </div>
    </footer>
  );
}
