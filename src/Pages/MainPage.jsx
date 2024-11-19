import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import { gsap } from "gsap";
import Svg from "../components/Svg";

import AchievementsTable from "./Bento";
import { Contact } from "../components/Contact";
import VideoFrame from "../components/VideoFrame";
import SocialLinks from "../components/SocialLinks";

function Home() {
  const [showScrollButton, setShowScrollButton] = useState(false);

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
    <main className="h-full flex flex-col bg-black">
      {/* Glass-like Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16" data-aos="fade-in">
          <div className="text-lg font-bold text-white cursor-pointer" onClick={() => scrollToSection("home")}>
            Damo
          </div>
          <div className="space-x-6">
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
              Works & Education
            </button>
            <button
              className="text-white hover:text-blue-400 transition duration-300"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Main Sections */}
      <div id="home" className="h-screen relative pt-20">
        <div className="fixed top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 opacity-80 animate-pulse filter blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-4 border-white opacity-40 animate-spin-slow"></div>
          <div className="absolute w-full h-full backdrop-blur-md"></div>
        </div>
        <div className="flex flex-col lg:flex-row w-full h-full pt-20" data-aos="fade-left">
          <iframe
            className="w-[75%] h-[75%] lg:w-1/2 md:w-full"
            src="https://lottie.host/embed/dce0b800-c131-45a8-b696-df2db655b752/ocTKs9ppjc.json"
            title="Lottie Animation"
          />
          <div className="flex flex-col gap-6 px-4 sm:px-6 md:px-8 lg:px-20 pt-32" data-aos="fade-right">
            <Svg />
            <div className="text-3xl">
              <div className="mt-4 text-base sm:text-lg md:text-xl lg:text-2xl font-light text-gray-400 max-w-3xl mx-auto">
                <p>
                  I specialize in building beautiful, interactive web applications using modern technologies like Nextjs, Reactjs, Animation Libraries, UI Libraries, and Tailwind CSS. I constantly explore new tools and frameworks to create optimized user experiences.
                </p>
                <a href="https://drive.google.com/file/d/19_1CEIwt8tDtM3fTVHtiYMXePjqXLmhz/view?usp=sharing" className="mt-6 text-lg sm:text-xl md:text-2xl lg:text-3xl text-neutral-100 cursor-pointer hover:underline">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="achievements" className="h-full">
        <AchievementsTable />
      </div>
      <div id="About" className="h-screen">
         <VideoFrame/>
      </div>
      <div id="contact" className="h-full p-6 flex flex-col lg:flex-row items-center lg:items-stretch lg:space-x-6">
        <div className="flex-1 w-full h-64 lg:h-auto">
          <iframe
            className="w-full h-[80%] opacity-75 rounded-md"
            src="https://lottie.host/embed/5f1192e4-ed3e-4534-ae53-cc99104ef8d8/zGSydIrAGW.json"
          ></iframe>
        </div>
        <div className="flex-1 w-full h-screen mt-6 lg:mt-0 lg:w-auto">
          <Contact />
        </div>
      </div>

      <div data-aos="zoom-in">
        <SocialLinks/>
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
