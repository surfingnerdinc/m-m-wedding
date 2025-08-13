import React, { useEffect, useState, useRef } from "react";
import Background from "../assets/bg-video-1.mp4";
import Background2 from "../assets/bg-video-2-1.mp4";
import Background3 from "../assets/bg-video-3.mp4";

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const videoRef3 = useRef(null);

  useEffect(() => {
    const weddingDate = new Date("2025-08-28T14:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = weddingDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Effect to ensure videos play on mount and handle autoplay issues
  useEffect(() => {
    const playVideos = async () => {
      const videos = [videoRef1.current, videoRef2.current, videoRef3.current];
      
      for (const video of videos) {
        if (video) {
          try {
            // Set playback rate
            video.playbackRate = 0.5;
            // Attempt to play
            await video.play();
          } catch (error) {
            console.log('Video autoplay failed:', error);
            // Fallback: try to play on user interaction
            const playOnClick = () => {
              video.play();
              document.removeEventListener('click', playOnClick);
            };
            document.addEventListener('click', playOnClick);
          }
        }
      }
    };

    playVideos();
  }, []);

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative text-white"
      //   style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="flex flex-col md:flex-row w-full h-screen">
        <video 
          ref={videoRef1}
          className="w-full md:w-1/3 h-1/3 md:h-screen object-cover border" 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          style={{ playbackRate: 0.5 }}
          onLoadedData={(e) => e.target.play()}
        >
          <source src={Background2} type="video/mp4" />
        </video>
        <video 
          ref={videoRef2}
          className="w-full md:w-1/3 h-1/3 md:h-screen object-cover border" 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          style={{ playbackRate: 0.5 }}
          onLoadedData={(e) => e.target.play()}
        >
          <source src={Background} type="video/mp4" />
        </video>
        <video 
          ref={videoRef3}
          className="w-full md:w-1/3 h-1/3 md:h-screen object-cover border" 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="auto"
          style={{ playbackRate: 0.5 }}
          onLoadedData={(e) => e.target.play()}
        >
          <source src={Background3} type="video/mp4" />
        </video>
      </div>
    

      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-wedding mb-2">
          Magdalena & Marcin
        </h1>

        <p className="text-2xl sm:text-3xl font-semibold mb-8 font-wedding">
          28.08.2025
        </p>

        <div className="flex gap-4 flex-wrap justify-center mt-6">
          {[
            { label: "DNI", value: timeLeft.days },
            { label: "GODZINY", value: timeLeft.hours },
            { label: "MINUTY", value: timeLeft.minutes },
            { label: "SEKUNDY", value: timeLeft.seconds },
          ].map((item, idx) => (
            <div
              key={idx}
              className="w-24 h-24 sm:w-24 sm:h-24 border border-white rounded-full flex flex-col items-center justify-center text-white"
            >
              <span className="text-2xl sm:text-3xl font-semibold">
                {item.value.toString().padStart(2, "0")}
              </span>
              <span className="text-xs sm:text-sm mt-1 tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
