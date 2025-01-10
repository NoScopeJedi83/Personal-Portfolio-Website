"use client";

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import ProjSliderBtns from '@/components/ProjSliderBtns.jsx';

const proj = [
  {
    num: '01',
    category: 'Front-End',
    title: 'Restura - Restaurant Website',
    description: 'I developed Restura, a responsive restaurant website using HTML5, CSS3, and JavaScript. It features well-organized pages (Home, About, Menu, Blog, Contact) for effective navigation. The design is modern and intuitive, ensuring accessibility and a seamless user experience across devices, effectively showcasing the restaurants offerings and updates.',
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/assets/restura1.png",
    live: "https://noscopejedi83.github.io/Restura-v2.0/",
    github: "https://github.com/NoScopeJedi83/Restura-v2.0",
  },
  {
    num: '02',
    category: 'MERN Stack',
    title: 'RebelChat - Chatting Website',
    description: 'RebelChat breaks the barriers of conventional communication platforms with its innovative features and user-friendly interface. Designed during a hackathon using the MERN stack, RebelChat embodies the rebellious spirit of pushing boundaries and challenging norms. Seamlessly integrating MongoDB, Express.js, React.js, and Node.js, RebelChat ensures smooth performance and reliability.',
    stack: [{ name: "MongoDB" }, { name: "Express.Js" }, { name: "React.js" }, { name: "Node.js" }],
    image: "/assets/Rebel1.png",
    live: "https://github.com/NoScopeJedi83/BYTEVERSE-24-RebelChat-",
    github: "https://github.com/NoScopeJedi83/BYTEVERSE-24-RebelChat-",
  },
  {
    num: '03',
    category: 'Front-End',
    title: 'CarTrack : Interactive Car Showcase',
    description: 'I worked with a team to develop CarTrack, an interactive car showcase using HTML5, CSS3, JavaScript, and GitHub. The project features 50+ car models with detailed information, a search function for easy exploration, and a visually appealing, user-friendly, responsive interface with high-quality images and videos, enhancing the overall user experience.',
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "JavaScript" }],
    image: "/assets/Cartrack1.png",
    live: "https://cartrack2.netlify.app/",
    github: "https://github.com/NoScopeJedi83/CarTrack-v2.0",
  },
];

const Experience = () => {
  const [project, setProject] = useState(proj[0]);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(proj[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-32 xl:px-0 relative"
    >
      {/* Background video */}
      <video
        autoPlay
        loop
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/assets/oppen1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      <div className="container mx-auto relative z-20">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[50px] flex-grow justify-center py-12 xl:px-0">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
            </div>
            <p className="text-white/60">{project.description}</p>
            <ul className="flex gap-4">
              {project.stack.map((item, index) => (
                <li key={index} className="text-xl text-accent">
                  {item.name}
                  {index !== project.stack.length - 1 && ","}
                </li>
              ))}
            </ul>
            <div className="border border-white/20"></div>
            <div className="flex items-center gap-4">
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/30 flex justify-center items-center group mt-5">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/30 flex justify-center items-center group mt-5">
                      <BsGithub className="text-white text-3xl group-hover:text-accent" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-4 mt-12"
              onSlideChange={handleSlideChange}
              onSwiper={setSwiperInstance} // set the swiper instance
            >
              {proj.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div
                    className="relative w-full h-[460px] group flex justify-center items-center bg-pink-50/20 overflow-hidden bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            {/* slider buttons */}
            {swiperInstance && (
              <ProjSliderBtns
                swiper={swiperInstance}
                containerStyles="flex justify-center bottom-0 left-0 right-0"
                btnStyles="mx-4 p-2 rounded-full bg-accent hover:bg-accent-hover"
                iconStyles="text-3xl text-black"
              />
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
