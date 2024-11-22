import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Lottie from "lottie-react";
import animationData1 from "../assets/HSL2GN7IOi.json"; // Replace with correct path
import animationData2 from "../assets/Animation - 1731938073445.json"; // Replace with correct path
import AchievementsTable from "./Bento";
import { Contact } from "../components/Contact";
import VideoFrame from "../components/VideoFrame";
import SocialLinks from "../components/SocialLinks";

function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });

    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="h-full flex flex-col bg-black overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-80 animate-pulse filter blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-4 border-white opacity-40 animate-spin-slow"></div>
          <div className="absolute w-full h-full backdrop-blur-md"></div>
        </div>
      <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md shadow-lg z-50">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
          data-aos="fade-in"
        >
          <div
            className="text-lg font-bold text-white cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Damo
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <button
              className="text-white hover:text-blue-400 transition duration-300"
              onClick={() => scrollToSection("About")}
            >
              About
            </button>
            <button
              className="text-white hover:text-blue-400 transition duration-300"
              onClick={() => scrollToSection("achievements")}
            >
              Carrer
            </button>
            <button
              className="text-white hover:text-blue-400 transition duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu with Glass Effect */}
        {isMenuOpen && (
          <div
  className={`md:hidden bg-white/10 w-full h-screen backdrop-blur-md shadow-lg z-40 rounded-lg mt-2 transform transition-transform duration-300 ease-out ${
    isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0 pointer-events-none"
  }`}
>
  <div className="flex flex-col gap-10 w-full h-full iteams-center text-5xl justify-center  space-y-2 py-3 px-4">
    <button
      className="block text-white text-left hover:text-blue-400 transition duration-300"
      onClick={() => {
        scrollToSection("About");
        setIsMenuOpen(false);
      }}
    >
      About
    </button>
    <button
      className="block text-white text-left hover:text-blue-400 transition duration-300"
      onClick={() => {
        scrollToSection("achievements");
        setIsMenuOpen(false);
      }}
    >
      Carrer
    </button>
    <button
      className="block text-white text-left hover:text-blue-400 transition duration-300"
      onClick={() => {
        scrollToSection("contact");
        setIsMenuOpen(false);
      }}
    >
      Contact
    </button>
  </div>
</div>

        )}
      </nav>
      <div id="home" className="h-screen relative flex flex-col pt-20">
        <div className="flex flex-col lg:flex-row w-full h-full md:gap-5 lg:gap-0" data-aos="fade-left">
          <div className="flex w-full h-64 lg:h-auto align-middle items-center justify-center">
            <Lottie
              animationData={animationData1}
              loop={true}
              className="w-full h-[60%] opacity-75 rounded-md"
            />
          </div>
          <div className="flex flex-col w-full align-middle items-center justify-center gap-5 p-10" data-aos="fade-right">
            <div className="text-left w-full text-5xl font-light text-white mx-auto">I am Ajay Dattu</div>
            <div className="text-base w-full text-left sm:text-lg md:text-xl lg:text-2xl font-light text-gray-400 max-w-3xl mx-auto">
              <p className="flex flex-col">
                <p>I specialize in building beautiful, interactive web applications using modern
                technologies like Nextjs, Reactjs, Animation Libraries, UI Libraries, and Tailwind
                CSS. I constantly explore new tools and frameworks to create optimized user
                experiences.
                </p>
                <a
                href="https://drive.google.com/file/d/19_1CEIwt8tDtM3fTVHtiYMXePjqXLmhz/view?usp=sharing"
                className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-100 cursor-pointer hover:underline"
              >
                Download Resume
              </a>
              </p>
              
            </div>
          </div>
        </div>
      </div>

      <div id="achievements" className="h-full">
        <AchievementsTable />
      </div>
      <div id="About" className="h-screen">
        <VideoFrame />
      </div>
      <div
        id="contact"
        className="h-full p-6 flex flex-col lg:flex-row items-center lg:items-stretch lg:space-x-6"
      >
        <div className="flex-1 w-full h-64 lg:h-auto">
          <Lottie
            animationData={animationData2}
            loop={true}
            className="w-full h-[80%] opacity-75 rounded-md"
          />
        </div>
        <div className="flex-1 w-full h-screen mt-6 lg:mt-0 lg:w-auto">
          <Contact />
        </div>
      </div>

      <div data-aos="zoom-in">
        <SocialLinks />
      </div>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-400 transition duration-300"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </main>
  );
}

export default Home;
