"use client";

import { useEffect, useRef, useState } from 'react';
import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const skills = [
  {
    num: '01',
    title: "Data Structures & Algorithms",
    description: 'Proficient in implementing problem solving skills using C++ for high-performance system/software development.',
    href: '',
  },
  {
    num: '02',
    title: "Front-End Development",
    description: 'Expert in front-end development using HTML, CSS, and JavaScript for dynamic web content and interactive experiences.',
    href: '',
  },
  {
    num: '03',
    title: "Back-End Development",
    description: 'Proficient in applying technologies like React, Next.js, Node.js, Express.js and MongoDB for server-side execution',
    href: '',
  },
  {
    num: '04',
    title: "Database Management",
    description: 'Have hands-on intermediate knowledge in SQL for managing and querying relational databases.',
    href: '',
  },
]

const Skills = () => {
  const videoRef = useRef(null);
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoVisible(true);
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 2400); // delay in milliseconds (2.4 seconds)

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 relative">
      {/* Background video */}
      <video
        ref={videoRef}
        muted
        className={`absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${videoVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <source src="/assets/skillsvid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

      <div className="container mx-auto px-4 md:px-0 mt-10 mb-10 relative z-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {skills.map((skill, index) => {
            return (
              <div key={index} className="space-y-4 flex-1 flex flex-col justify-center gap-6 group">
                {/* top */}
                <div className="flex items-center justify-between w-full ">
                  <div className="text-5xl font-extrabold text-accent text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{skill.num}</div>
                  <Link href={skill.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-3xl text-primary " />
                  </Link>
                </div>
                {/* heading */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{skill.title}</h2>
                {/* description */}
                <p className="text-lg text-white/60">{skill.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full mt-4"></div>
              </div>
            );
          })}

        </motion.div>
      </div>
    </section>
    
  );
};

export default Skills;
