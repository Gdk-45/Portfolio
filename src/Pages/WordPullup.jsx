
import { useNavigate } from "react-router";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Wordpull.css";

const QuoteAnimation = () => {
  const quotesRef = useRef([]);
  const buttonRef = useRef(null);
  const router = useNavigate();
  useEffect(() => {
    const timeout = setTimeout(() => {
      router("/MainPage");
    }, 2000); // Redirect after 3 seconds
    return () => clearTimeout(timeout);
  }, []);


  useEffect(() => {
    const quotes = quotesRef.current;

    quotes.forEach((quote) => {
      const text = quote.textContent;
      quote.innerHTML = text
        .split("")
        .map((char) => `<span class="char">${char}</span>`)
        .join("");

      const chars = quote.querySelectorAll(".char");

      gsap.set(quote, { perspective: 400 });

      const tl = gsap.timeline().from(chars, {
        duration: 5,
        opacity: 0,
        scale: 0,
        y: 80,
        rotationX: 180,
        transformOrigin: "0% 50% -50",
        ease: "back",
        stagger: 0.1,
      });

      if (buttonRef.current) {
        buttonRef.current.onclick = () => tl.restart();
      }
    });
  }, []);

  return (
    <div className="container h-screen justify-center align-middle items-center flex md:flex-col lg:flex-row bg-black text-white w-screen">
  <div
    className="flex flex-col md:flex-row justify-center items-center gap-4 h-screen w-screen"
  >
    {["Simplicity", "Conveys", "Clarity"].map((text, index) => (
      <div
        id="quote"
        key={index}
        ref={(el) => (quotesRef.current[index] = el)}
        className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 px-2"
      >
        {text}
      </div>
    ))}
  </div>
  <button
    id="animate"
    className="fixed"
    ref={buttonRef}
    >
    
  </button>
</div>

  );
};

export default QuoteAnimation;
