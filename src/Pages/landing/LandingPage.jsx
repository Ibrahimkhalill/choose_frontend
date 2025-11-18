import background from "../../assets/images/first_sections.png";
import background2 from "../../assets/images/third_sections.png";
import Intersect from "../../assets/images/Intersect.svg";
import Intersect1 from "../../assets/images/Intersect (1).svg";
import Intersect2 from "../../assets/images/Intersect (2).svg";
import icon from "../../assets/images/icon.svg";
import revenue from "../../assets/images/revenue.svg";
import dinner from "../../assets/images/dinner.svg";
import ai from "../../assets/images/ai.svg";
import { RiMessengerLine } from "react-icons/ri";
import { FaViber, FaInstagram, FaQrcode } from "react-icons/fa";
import Footer from "../../components/footer/Footer";

import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";

export default function ChoosLanding() {
  return (
    <>
      <div className="w-full min-h-screen">
        {/* Hero Section */}
        <section
          className="w-full bg-[#FDFBF2] bg-cover bg-center bg-no-repeat  py-8 md:py-0"
          style={{ backgroundImage: `url(${background})` }}>
          <Navbar />
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 md:mt-20 py-8 md:py-12 items-center">
              {/* Left Content */}
              <div className="w-full">
                {/* Badge */}
                <div className="flex w-full md:w-fit items-center gap-2 bg-[#F3EEE7] rounded-lg border border-[#DACAB4] text-[#613C0A] px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium mb-6 md:mb-8">
                  <span className="flex-shrink-0">
                    <img src={icon} alt="icon" />
                  </span>
                  <span className="">AI-Powered Restaurant Discovery</span>
                </div>

                {/* Main Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                  Discover Great <span className="text-[#613C0A]">Food</span>
                  <br />
                  <span className="text-[#613C0A]">Near You</span> with <br />
                  Smart AI
                </h2>

                {/* Description */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6 md:mb-8">
                  Get instant personalized restaurant recommendations, exclusive
                  discount QR codes, and seamless dining experiences powered by
                  intelligent AI technology. Select any social media platform
                  option from below.
                </p>

                {/* Social Icons */}
                <div className="flex gap-3 md:gap-4">
                  <button className="w-10 h-10 sm:w-12 sm:h-12 bg-[#89540E] text-white rounded-lg flex items-center justify-center hover:bg-[#6B3D01] cursor-pointer transition">
                    <RiMessengerLine size={24} className="sm:w-7 sm:h-7" />
                  </button>
                  <button className="w-10 h-10 sm:w-12 sm:h-12 bg-[#89540E] text-white rounded-lg flex items-center justify-center hover:bg-[#6B3D01] cursor-pointer transition">
                    <FaInstagram size={24} className="sm:w-7 sm:h-7" />
                  </button>
                  <button className="w-10 h-10 sm:w-12 sm:h-12 bg-[#89540E] text-white rounded-lg flex items-center justify-center hover:bg-[#6B3D01] cursor-pointer transition">
                    <FaViber size={24} className="sm:w-7 sm:h-7" />
                  </button>
                </div>
              </div>

              {/* Right - Food Images */}
              <div className="relative hidden lg:flex items-center justify-center h-64 sm:h-80 md:h-96">
                {/* Top Right - Food Image 1 */}
                <div className="absolute -top-4 right-0 md:right-50 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 overflow-hidden  border-gray-50 rounded-full">
                  <img
                    src={Intersect}
                    alt="Delicious Food"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bottom Left - Food Image 2 */}
                <div className="absolute bottom-0 left-0 md:right-10 top-42 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 overflow-hidden  border-gray-50 rounded-full">
                  <img
                    src={Intersect1}
                    alt="Healthy Food"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Center - Food Image 3 */}
                <div className="absolute xl:-bottom-38 sm:-bottom-10 xl:right-0  sm:-right-20 transform -translate-x-1/2 -translate-y-1/2 w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 overflow-hidden  border-gray-50 rounded-full z-10">
                  <img
                    src={Intersect2}
                    alt="Tasty Dish"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="w-full bg-white py-12 md:py-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 md:mb-4">
              Why Choose <span className="text-[#89540E]">FoodNearu</span>
            </h2>

            {/* Subheading */}
            <p className="text-center text-gray-600 text-sm sm:text-base mb-8 md:mb-16">
              Powerful features designed to make your dining experience
              effortless and rewarding
            </p>

            {/* Three Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Card 1 */}
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow hover:shadow-lg transition">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#89540E] rounded-lg flex items-center justify-center mb-4 md:mb-6">
                  <svg
                    className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                  </svg>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                  Personalized Recommendations
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  AI-powered suggestions based on your preferences, dietary
                  restrictions, and past dining experiences.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow hover:shadow-lg transition">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#89540E] rounded-lg flex items-center justify-center mb-4 md:mb-6">
                  <FaQrcode className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                  Instant discount QR Codes
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Get exclusive discount QR codes instantly for your chosen
                  restaurants. Save on every meal.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow hover:shadow-lg transition">
                <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#89540E] rounded-lg flex items-center justify-center mb-4 md:mb-6">
                  <FaInstagram className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 md:mb-4">
                  Auto Instagram Review
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">
                  Automatically generate beautiful Instagram stories to share
                  your dining experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section
          className="w-full py-12 md:py-20 bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${background2})` }}>
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <div className="text-center mb-8 md:mb-16 pb-6 md:pb-8">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#89540E] mb-2 md:mb-4">
                How It Works
              </h2>
              <p className="text-gray-700 text-sm sm:text-base md:text-lg">
                Three simple steps to discover your next favorite restaurant
              </p>
            </div>

            {/* Three Steps Container */}
            <div className="rounded-lg p-0 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-12">
                {/* Step 1 */}
                <div className="flex flex-col items-start bg-white p-4 sm:p-6 shadow rounded-lg">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#89540E] text-white rounded-lg flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6">
                    01
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 md:mb-4">
                    Search
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Tell us what you&apos;re craving or let our AI suggest based
                    on your location and preferences.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-start bg-white p-4 sm:p-6 shadow rounded-lg">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#89540E] text-white rounded-lg flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6">
                    02
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 md:mb-4">
                    Chat
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Have a natural conversation with our AI to refine your
                    choices and discover perfect matches
                  </p>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-start bg-white p-4 sm:p-6 shadow rounded-lg">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#89540E] text-white rounded-lg flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6">
                    03
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 md:mb-4">
                    Dine
                  </h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Get your discount QR code, make a reservation, and enjoy
                    your meal with exclusive savings
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promote Your Place Section */}
        <section className="w-full bg-white py-12 md:py-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
              {/* Left Content */}
              <div className="w-full">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#F3EEE7] text-[#613C0A] px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-6 md:mb-8">
                  <span className="flex-shrink-0">
                    <img src={icon} alt="icon" className="w-5 h-5" />
                  </span>
                  For Restaurant Owners
                </div>

                {/* Heading */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                  Promote Your <span className="text-[#89540E]">Place</span>
                </h2>

                {/* Description */}
                <p className="text-gray-700 text-sm sm:text-base mb-6 md:mb-8 leading-relaxed">
                  Join FoodNearU and connect with thousands of hungry customers.
                  Offer exclusive deals and grow your business with AI-powered
                  visibility.
                </p>

                {/* Button */}
                <Link
                  to={"/signin"}
                  className="bg-[#89540E] text-white text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#6B3D01] cursor-pointer transition">
                  Get Started Today
                </Link>
              </div>

              {/* Right - Features List */}
              <div className="w-full space-y-6 md:space-y-8">
                {/* Feature 1 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#89540E] rounded-lg flex items-center justify-center flex-shrink-0">
                    <img
                      src={dinner}
                      alt="dinner"
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                      Reach More Diners
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                      Get discovered by local food lovers actively searching for
                      their next meal
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#89540E] rounded-lg flex items-center justify-center flex-shrink-0">
                    <img
                      src={revenue}
                      alt="revenue"
                      className="w-6 h-6 sm:w-8 sm:h-8"
                    />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                      Boost Revenue
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                      Increase table bookings with targeted promotions and
                      instant QR codes
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#89540E] rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src={ai} alt="ai" className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                      Smart Analytics
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">
                      Track performance and understand your customers with AI
                      insights
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
