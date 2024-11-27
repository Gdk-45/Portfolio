import { useNavigate } from "react-router";
import React, { useEffect, useRef } from "react";
import "./Wordpull.css";

const QuoteAnimation = () => {
  const router = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    const handleVideoEnd = () => {
      router("/MainPage"); // Redirect when the video ends
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("ended", handleVideoEnd);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", handleVideoEnd);
      }
    };
  }, [router]);

  return (
    <div className="h-screen justify-center items-center align-middle">
      <video
        ref={videoRef}
        src="https://res.cloudinary.com/dxxics5nv/video/upload/v1732725671/Simplicity_Conveys_Clarity._wizfir.mp4"
        autoPlay
        muted
        loop={false}
        className="w-full h-screen"
      />
    </div>
  );
};

export default QuoteAnimation;
