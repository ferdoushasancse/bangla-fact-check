import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Title */}
        <div className="text-lg font-semibold text-blue-600">
          Bangla Fact Check
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-blue-600 transition">
            Home
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Check a Claim
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            Articles
          </a>
          <a href="#" className="hover:text-blue-600 transition">
            About
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden border-t bg-white px-6 py-4 flex flex-col gap-3 text-sm text-gray-700">
          <a href="#" className="hover:text-blue-600">
            Home
          </a>
          <a href="#" className="hover:text-blue-600">
            Check a Claim
          </a>
          <a href="#" className="hover:text-blue-600">
            Articles
          </a>
          <a href="#" className="hover:text-blue-600">
            About
          </a>
        </nav>
      )}
    </header>
  );
}
