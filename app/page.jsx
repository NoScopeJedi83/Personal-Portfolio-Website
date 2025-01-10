"use client";

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { FiDownload } from 'react-icons/fi';

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  const [showContent, setShowContent] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    // Set a delay for rendering content after the stair transition
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2400); // Delay in milliseconds (e.g., 2400ms for 2.4 seconds)

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <section className="h-full relative overflow-hidden">
      {/* Video background */}
      {!videoError && (
        <video
          autoPlay
          muted
          className="absolute top-0 left-0 w-full h-full object-cover opacity-90"
          onError={handleVideoError}
        >
          <source src="/assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {showContent && (
        <div className="container mx-auto h-full relative z-10">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl text-white/70 text-bold">Software Developer</span>
              <h1 className="h1 mb-6">
                Hello! I am <br /> <span className="text-accent">Atharv Grover</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I specialize in creating sophisticated digital experiences and possess expertise in a range of programming languages and technologies.
              </p>
              {/* btn and socials */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <a href="https://drive.google.com/file/d/1RjXszXIRHh1eL4q9uleMkOuzQ006mrJe/view?usp=sharing">
                  <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </Button>
                </a>
                <div className="mb-8 xl:mb-0">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
          <Stats />
        </div>
      )}
    </section>
  );
};

export default Home;
