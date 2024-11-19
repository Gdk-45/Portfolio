import { useEffect, useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router";

const quotes = ["Simplicity", "Conveys", "Clarity"]; // Fixed typo "Simplicty" to "Simplicity"

const WordPullUp = ({ words, className }) => {
  return (
    <div className={className}>
      {words.split(" ").map((word, index) => (
        <span key={index} className="word">
          {word}
        </span>
      ))}
    </div>
  );
};

const QuoteAnimation = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const router = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      router("/MainPage");
    }, 6000); // Redirect after 3 seconds
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % quotes.length;
        setCurrentQuote(quotes[nextIndex]); // Update the quote directly after calculating the next index
        return nextIndex;
      });
    }, 2000); // Change quote every 2 seconds
    return () => clearInterval(interval);
  }, []); // This effect should run only once when the component mounts

  return (
    <div className="bg-black h-screen flex justify-center items-center p-40">
      <div data-aos="zoom-in" className="text-center">
        <WordPullUp
          className="text-7xl md:text-4xl lg:text-9xl font-light text-white bg-black font-sourGummy"
          words={currentQuote}
        />
      </div>
    </div>
  );
};

export default QuoteAnimation;
