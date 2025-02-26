import { useState, useRef, useEffect } from "react";
import smallVideo from "../assets/video/Tecoreng_Video.mp4";
import fullVideo from "../assets/video/Tecoreng_fullVideo.mp4";
import play_img from "../assets/images/play-img.svg";

function VideoSection() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const smallVideoRef = useRef(null);
  const fullVideoRef = useRef(null);

  useEffect(() => {
    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        exitFullScreen();
      }
    };

    document.addEventListener("fullscreenchange", handleFullScreenChange);
    return () => {
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
    };
  }, []);

  const handleFullScreenToggle = () => {
    if (fullVideoRef.current) {
      const videoElement = fullVideoRef.current;

      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
      } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
      }

      setTimeout(() => {
        videoElement.play();
      }, 300); // Ensures fullscreen activates first

      if (smallVideoRef.current) {
        smallVideoRef.current.pause();
      }

      setIsFullScreen(true);
    }
  };

  const exitFullScreen = () => {
    if (document.fullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    if (fullVideoRef.current) {
      fullVideoRef.current.pause();
      fullVideoRef.current.currentTime = 0; // Reset full video to start
    }

    setTimeout(() => {
      if (smallVideoRef.current) {
        smallVideoRef.current.play();
      }
    }, 300);

    setIsFullScreen(false);
  };

  const handleVideoEnd = () => {
    exitFullScreen();
  };

  return (
    <div className="bg-[#01132e]">
      <div className="bg-gradient-to-b from-[#5A82A0] via-[#1A486E] to-transparent opacity-50 h-5 sm:h-14"></div>

      <div className="p-4 sm:p-15 relative">
        {/* Small Video (Always Visible) */}
        <video
          ref={smallVideoRef}
          src={smallVideo}
          className="h-auto w-[95%] m-auto rounded-3xl"
          loop
          muted
          autoPlay
        ></video>

        {/* Play Button */}
        <span
          className="absolute bottom-7 right-8 h-[40px] p-2 sm:right-32 sm:bottom-23 sm:h-[100px] sm:w-[100px] sm:p-8 bg-gradient-to-r from-[#03142e] to-[#223d65] cursor-pointer rounded-full flex justify-center"
          onClick={handleFullScreenToggle}
        >
          <img src={play_img} alt="Play" />
        </span>

        {/* Fullscreen Video */}
        <video
          ref={fullVideoRef}
          src={fullVideo}
          className={`fixed top-0 left-0 w-full h-full object-cover ${
            isFullScreen ? "block" : "hidden"
          }`}
          onEnded={handleVideoEnd}
        ></video>
      </div>
    </div>
  );
}

export default VideoSection;
