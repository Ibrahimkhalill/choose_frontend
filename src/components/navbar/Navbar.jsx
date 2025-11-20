// components/navbar/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  // Check login status
  useEffect(() => {
    const checkLogin = () => {
      const role = localStorage.getItem("userRole");
      setIsLoggedIn(!!role);
    };

    checkLogin();
    window.addEventListener("storage", checkLogin);

    return () => window.removeEventListener("storage", checkLogin);
  }, []);

  // Re-check on route change (e.g., after login/signup redirect)
  useEffect(() => {
    const role = localStorage.getItem("userRole");
    setIsLoggedIn(!!role);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="w-full ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Choosie logo"
                className="h-9 w-auto sm:h-11 lg:h-12"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Always visible on sm+ */}
          <div className="hidden sm:flex items-center gap-8 lg:gap-10">
            {/* Always show Home */}

            {/* Conditional Links */}
            {isLoggedIn ? (
              <>
                <Link
                  to="/"
                  className={`group relative pb-2 font-medium text-base lg:text-lg transition-all duration-300
                ${
                  isActive("/")
                    ? "text-[#89540E] font-bold"
                    : "text-[#7D4C0D] hover:text-[#89540E]"
                }`}>
                  <span className="relative z-10">Home</span>
                  <span
                    className={`absolute left-0 right-0 bottom-0 h-1 bg-[#A16414] rounded-full transition-transform duration-500
                  ${
                    isActive("/")
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  } origin-center`}
                  />
                </Link>
                <Link
                  to="/chat"
                  className={`group relative pb-2 font-medium text-base lg:text-lg transition-all duration-300 ${
                    isActive("/chat")
                      ? "text-[#89540E] font-bold"
                      : "text-[#7D4C0D] hover:text-[#89540E]"
                  }`}>
                  <span className="relative z-10">Chat with AI</span>
                  <span
                    className={`absolute left-0 right-0 bottom-0 h-1 bg-[#A16414] rounded-full transition-transform duration-500 ${
                      isActive("/chat")
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    } origin-center`}
                  />
                </Link>

                <Link
                  to="/ai-recommendations"
                  className={`group relative pb-2 font-medium text-base lg:text-lg transition-all duration-300 ${
                    isActive("/ai-recommendations")
                      ? "text-[#89540E] font-bold"
                      : "text-[#7D4C0D] hover:text-[#89540E]"
                  }`}>
                  <span className="relative z-10">AI Recommendations</span>
                  <span
                    className={`absolute left-0 right-0 bottom-0 h-1 bg-[#A16414] rounded-full transition-transform duration-500 ${
                      isActive("/ai-recommendations")
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    } origin-center`}
                  />
                </Link>

                <Link
                  to="/user-profile"
                  className={`group relative pb-2 font-medium text-base lg:text-lg transition-all duration-300 ${
                    isActive("/user-profile")
                      ? "text-[#89540E] font-bold"
                      : "text-[#7D4C0D] hover:text-[#89540E]"
                  }`}>
                  <span className="relative z-10">User Profile</span>
                  <span
                    className={`absolute left-0 right-0 bottom-0 h-1 bg-[#A16414] rounded-full transition-transform duration-500 ${
                      isActive("/user-profile")
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    } origin-center`}
                  />
                </Link>
              </>
            ) : (
              /* Guest Buttons - Only when NOT logged in */
              <div className="flex items-center gap-4">
                <Link
                  to="/user-signin"
                  className="px-5 lg:px-7 py-2 rounded-full border border-[#7D4C0D] text-[#7D4C0D] font-semibold text-sm lg:text-base hover:bg-[#7D4C0D] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md">
                  Log in
                </Link>

                <Link
                  to="/signup"
                  className="px-5 lg:px-7 py-2.5  rounded-full bg-[#A16414] text-white font-semibold text-sm lg:text-base hover:bg-[#89540E] transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2">
                  Sign up
                </Link>
              </div>
            )}
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

      {/* Mobile Menu Dropdown */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-400 ease-in-out border-t border-[#AC7A38] bg-[#FFFEF8] ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}>
        <div className="px-4 py-6 space-y-3">
          {/* Home - Always visible */}

          {isLoggedIn ? (
            <>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`block px-5 py-2.5 rounded-xl  font-medium transition-all ${
                  isActive("/")
                    ? "bg-[#AC7A38] text-white font-bold "
                    : "text-[#7D4C0D] hover:bg-amber-50"
                }`}>
                Home
              </Link>
              <Link
                to="/chat"
                onClick={() => setIsOpen(false)}
                className={`block px-5 py-2.5 rounded-xl  font-medium transition-all ${
                  isActive("/chat")
                    ? "bg-[#AC7A38] text-white font-bold "
                    : "text-[#7D4C0D] hover:bg-amber-50"
                }`}>
                Chat with AI
              </Link>
              <Link
                to="/ai-recommendations"
                onClick={() => setIsOpen(false)}
                className={`block px-5 py-2.5 rounded-xl  font-medium transition-all ${
                  isActive("/ai-recommendations")
                    ? "bg-[#AC7A38] text-white font-bold "
                    : "text-[#7D4C0D] hover:bg-amber-50"
                }`}>
                AI Recommendations
              </Link>
              <Link
                to="/user-profile"
                onClick={() => setIsOpen(false)}
                className={`block px-5 py-2.5 rounded-xl  font-medium transition-all ${
                  isActive("/user-profile")
                    ? "bg-[#AC7A38] text-white font-bold "
                    : "text-[#7D4C0D] hover:bg-amber-50"
                }`}>
                User Profile
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/user-signin"
                onClick={() => setIsOpen(false)}
                className="block px-5 py-2 rounded-xl  font-semibold text-center bg-white border border-[#7D4C0D] text-[#7D4C0D] hover:bg-[#7D4C0D] hover:text-[#89540E] transition-all">
                Log in
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="block px-5 py-2.5 rounded-xl  font-semibold text-center bg-[#A16414] text-white hover:bg-[#89540E] transition-all shadow-md">
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
