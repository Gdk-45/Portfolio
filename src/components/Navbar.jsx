import React, { useEffect, useState } from 'react'
import { ShiftingDropDown } from './DropDown';
import "../index.css"

function Navbar() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    

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
    <div className='fixed w-full z-20 flex justify-center items-center align-middle p-5'>
    <nav className="w-full bg-white/10 backdrop-blur-md shadow-lg z-50 rounded-md">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
          data-aos="fade-in"
        >
          <div
            className="text-lg font-bold text-white cursor-pointer text-left"
            onClick={() => scrollToSection("home")}
          >
            Damo
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <button
              className="text-neutral-400 font-light hover:text-neutral-100 transition duration-300"
              onClick={() => scrollToSection("About")}
            >
              About
            </button>
    
              <ShiftingDropDown/>

            <button
              className="text-neutral-400 font-light hover:text-neutral-100 transition duration-300"
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
    </div>
  )
}

export default Navbar