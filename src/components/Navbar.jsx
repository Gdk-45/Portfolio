import React, { useEffect, useState } from 'react'
import { ShiftingDropDown } from './DropDown';
import "../index.css"
import { ShiftingDropDown2 } from './DropDown2';

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
    <nav className="w-[85%] bg-white/10 backdrop-blur-md shadow-lg z-50 rounded-[30px]" id='navbar'>
        <div
          className="max-w-7xl mx-auto p-5 flex items-center justify-between h-16"
          data-aos="fade-in"
        >
          
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
            <ShiftingDropDown2/>
           </div>
          <div
            className="text-lg font-blod font-serif text-white cursor-pointer text-left bg-[#455CE9] rounded-[30px] text-white p-2 px-2 py-2"
            onClick={() => scrollToSection("home")}
            id='tel'
          >
          అజయ్          
          </div>

        </div>
      </nav>
    </div>
  )
}

export default Navbar