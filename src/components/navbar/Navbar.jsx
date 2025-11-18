import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // useLocation added
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // This gets current path

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/ai-recommendations", label: "AI Recommendations" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="ch00sie logo"
                className="h-10 w-auto sm:h-12"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-10 lg:gap-16">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`group relative pb-2 font-medium text-base lg:text-lg transition-all duration-300
    ${
      isActive(link.to)
        ? "text-[#A16414] font-bold"
        : "text-[#7D4C0D] hover:text-[#A16414]"
    }`}>
                <span className="relative z-10">{link.label}</span>

                {/* Underline - appears from center */}
                <span
                  className={`absolute left-0 right-0 bottom-0 h-1 bg-[#A16414] rounded-full transition-transform duration-500 ease-bezier
      ${
        isActive(link.to) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      } origin-center`}
                  style={{ transformOrigin: "center" }}
                />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-amber-50 transition-colors"
              aria-label="Toggle menu">
              {isOpen ? (
                <X size={28} className="text-[#7D4C0D]" />
              ) : (
                <Menu size={28} className="text-[#7D4C0D]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="px-4 pt-2 pb-6 space-y-1 bg-[#FFFEF8] border-t border-gray-100">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-4 text-lg font-medium rounded-lg transition-all duration-200
                ${
                  isActive(link.to)
                    ? "bg-amber-50 text-[#A16414] font-bold border border-amber-200"
                    : "text-[#7D4C0D] hover:bg-amber-50 hover:text-[#A16414]"
                }`}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
