import React from "react";

const VideoFrame = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Glass effect container */}
      <div className="absolute inset-0 backdrop-blur-xl p-10">
        {/* Centered content */}
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <h1 className="text-white text-4xl font-light">About Me</h1>

          {/* Video container with 60% width */}
          <div className="md:w-1/2 lg:w-1/3 ">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/Rpb-2Agwu0o?si=QkuklUoROi9BBmGh"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoFrame;
