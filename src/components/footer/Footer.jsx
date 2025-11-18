import logo from "../../assets/logo/logo_text_white.svg";
import { LuSend } from "react-icons/lu";

import { RiMessengerLine } from "react-icons/ri";
import { FaViber, FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-[#3A2306] text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
            {/* Left - Logo & Description */}
            <div>
              <img src={logo} alt="" />
              <p className="text-[#E7E7E7] text-sm leading-relaxed mb-8 pt-5">
                Get instant personalized restaurant recommendations, exclusive
                discount QR codes, and seamless dining experiences powered by
                intelligent AI technology.
              </p>

              {/* Social Icons */}
              <div className="flex gap-4">
                <button className=" rounded-full flex items-center justify-center transition">
                  <RiMessengerLine size={25} />
                </button>
                <button className=" rounded-full flex items-center justify-center transition">
                  <FaInstagram size={25} />
                </button>
                <button className=" rounded-full flex items-center justify-center transition">
                  <FaViber size={25} />
                </button>
              </div>
            </div>

            {/* Center - Chatbots */}
            <div>
              <h4 className="text-xl font-bold mb-6">Chatbots</h4>
              <ul className="space-y-3">
                <li>
                  <button className="text-[#E7E7E7] hover:text-white transition">
                    Messenger
                  </button>
                </li>
                <li>
                  <button className="text-[#E7E7E7] hover:text-white transition">
                    Instagram
                  </button>
                </li>
                <li>
                  <button className="text-[#E7E7E7] hover:text-white transition">
                    Viber
                  </button>
                </li>
              </ul>
            </div>

            {/* Right - Newsletter */}
            <div>
              <h4 className="text-xl font-bold mb-6">Get the latest Updates</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-3 bg-[#FFFFFF] text-gray-900 rounded-l-lg text-sm placeholder-gray-500 focus:outline-none"
                />
                <button className="bg-[#F3EEE7] px-4 py-4 rounded-r-lg  cursor-pointer transition flex items-center justify-center">
                  <LuSend size={20} color="#613C0A" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
