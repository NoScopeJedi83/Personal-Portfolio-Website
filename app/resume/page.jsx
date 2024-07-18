"use client";

import {
  FaHtml5, 
  FaCss3, 
  FaJs, 
  FaReact, 
  FaFigma, 
  FaNodeJs,
  FaAndroid,
  FaPython,
} from 'react-icons/fa';

import { SiTailwindcss, SiNextdotjs, SiCplusplus, SiThreedotjs, SiMicrosoftpowerpoint, SiMysql } from 'react-icons/si';

//about data
const about = {
  title: 'About me',
  description: "Hi, I'm Atharv Grover, a final year student at SRM Institute of Science and Technology and a passionate Full Stack Developer. For the past two years, I've specialized in creating web-based wonders, blending coding artistry with AI to solve real-world challenges through captivating digital experiences.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Atharv Grover",
    },
    {
      fieldName: "Location",
      fieldValue: "Delhi, India",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91-8178449066",
    },
    {
      fieldName: "Occupation",
      fieldValue: "4th Year Student(UG)",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "LinkedIn",
      fieldValue: "Atharv Grover",
    },
    {
      fieldName: "GitHub",
      fieldValue: "NoScopeJedi83",
    },
    {
      fieldName: "LeetCode",
      fieldValue: "atharvgro2003",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Skype",
      fieldValue: "live:.cid.29104c1de418815c",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
    {
      fieldName: "Email",
      fieldValue: "atharvgro2003@gmail.com",
    },
  ],
};

//certification data
const certifications = {
  title: "My Certifications",
  description : "Knowledge as Foundation, Skills as Catalyst: Shaping the Digital Frontier",
  items: [
    {
      Name: "Google for Developers AI-ML Virtual Internship",
      Issuer: "Eduskills & AICTE NEAT",
      date: "Issued Jun 2024",
      url: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=33bc240cc5b6277bd4845aca50c3dff8",
    },
    {
      Name: "Machine Learning, ML",
      Issuer: "NPTEL",
      date: "Issued Apr 2024",
      url: "https://nptel.ac.in/noc/E_Certificate/NPTEL24CS60S54420257730036041",
    },
    {
      Name: "The Complete Web Developer Bootcamp",
      Issuer: "Udemy",
      date: "Issued Mar 2024",
      url: "https://www.udemy.com/certificate/UC-9aab25d0-5964-40b2-a28f-22ba12690358/",
    },
    {
      Name: "AWS Academy Cloud Virtual Internship",
      Issuer: "Eduskills & AICTE NEAT",
      date: "Issued Mar 2024",
      url: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=6aa02406ed7514c6562da04282f2772c",
    },
    {
      Name: "Programming, DSA using Python",
      Issuer: "NPTEL",
      date: "Issued Oct 2023",
      url: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS95S4440189810024803",
    },
    {
      Name: "Python for Data Science, AI & Development",
      Issuer: "Coursera/IBM",
      date: "Issued Dec 2023",
      url: "https://coursera.org/verify/XNHM2H8DPUQX",
    },
    {
      Name: "Foundations of User Experience (UX) Design",
      Issuer: "Coursera/Google",
      date: "Issued Dec 2023",
      url: "https://coursera.org/verify/4TJKRM8FR83R",
    },
  ],
};

//education data
const education = {
  title: "My Education",
  description : "Knowledge as Foundation, Skills as Catalyst: Shaping the Digital Frontier",
  items: [
    {
      institution: "SRM Institute of Science & Technology",
      location: "Delhi-NCR, Ghaziabad, India",
      grades: "CGPA: 9.1",
      course: "B.Tech. (CSE-AIML)",
      duration: "2021-present"
    },
    {
      institution: "Amity International School",
      location: "Mayur Vihar, Delhi, India",
      grades: "Percentage: 94.2%",
      course: "12th Standard",
      duration: "2019-2021"
    },
    {
      institution: "Chinmaya Vidyalaya",
      location: "NTPC Unchahar, distt. Raebareli, Uttar Pradesh",
      grades: "Percentage: 90.2%",
      course: "10th Standard",
      duration: "till 2019"
    },
  ],
};

//skills data
const skills = {
  title: "My Skills",
  description: "Knowledge as Foundation, Skills as Catalyst: Shaping the Digital Frontier",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
      Proficiency: "Advanced"
    },
    {
      icon: <FaCss3 />,
      name: "Cascading Style Sheets (CSS3)",
      Proficiency: "Advanced"
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
      Proficiency: "Advanced"
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
      Proficiency: "Advanced"
    },
    {
      icon: <FaPython />,
      name: "Python",
      Proficiency: "Intermediate"
    },
    {
      icon: <FaNodeJs />,
      name: "NodeJs",
      Proficiency: "Beginner"
    },
    {
      icon: <SiThreedotjs />,
      name: "Three.Min.JS",
      Proficiency: "Beginner"
    },
    {
      icon: <FaReact />,
      name: "React",
      Proficiency: "Intermediate"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.JS",
      Proficiency: "Intermediate"
    },
    {
      icon: <SiMysql />,
      name: "SQL",
      Proficiency: "Intermediate"
    },
    {
      icon: <FaAndroid />,
      name: "Android Development",
      Proficiency: "Intermediate"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
      Proficiency: "Intermediate"
    },
    {
      icon: <FaFigma />,
      name: "Figma",
      Proficiency: "Beginner"
    },
    {
      icon: <SiMicrosoftpowerpoint />,
      name: "Presentations",
      Proficiency: "Advanced"
    }
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'; 
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{
        opacity: 1, 
        transition: { delay : 2.4, duration: 0.4, ease: "easeIn" },
      }} 
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 relative"
    >
      {/* Video Background */}

      {/* Overlay to darken the video for better text readability */}
      

      <div className="container mx-auto relative z-10">
        <Tabs defaultValue="certifications" className="flex flex-col xl:flex-row gap-[60px] relative">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 z-10 mt-14">
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="mb-8"></div> {/* Added margin-bottom for gap at the end of the page */}
          {/* content */}
          <div className="min-h-[70vh] w-full relative z-10">
            {/* certifications */}
            <TabsContent value="certifications" className="w-full mt-14 mb-9">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-accent">{certifications.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{certifications.description}</p>
              </div>
              <div className="mt-8">
                <ScrollArea className="h-[500px] xl:h-[600px] w-full rounded-lg border border-accent">
                  <div className="flex flex-col gap-10 p-4">
                    {certifications.items.map((item, index) => {
                      return (
                        <div key={index} className="bg-white/10 p-4 rounded-lg text-white hover:bg-accent/10 transition-all duration-300 group">
                          <h4 className="text-lg font-bold">{item.Name}</h4>
                          <p className="text-white/60">{item.Issuer}</p>
                          <p className="text-white/60">{item.date}</p>
                          <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-accent group-hover:underline">View Certificate</a>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full mt-14 mb-9">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-accent">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
              </div>
              <div className="mt-8">
                <ScrollArea className="h-[500px] xl:h-[600px] w-full rounded-lg border border-accent">
                  <div className="flex flex-col gap-10 p-4">
                    {education.items.map((item, index) => {
                      return (
                        <div key={index} className="bg-white/10 p-4 rounded-lg text-white hover:bg-accent/10 transition-all duration-300">
                          <h4 className="text-lg font-bold">{item.institution}</h4>
                          <p className="text-white/60">{item.location}</p>
                          <p className="text-white/60">{item.grades}</p>
                          <p className="text-white/60">{item.course}</p>
                          <p className="text-white/60">{item.duration}</p>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full mt-14">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                  <h3 className="text-4xl font-bold text-accent">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group transition-transform transform hover:-translate-y-2">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                              <p className="capitalize text-center">{skill.Proficiency}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="mb-1"></div> {/* Added margin-bottom for gap at the end of the page */}
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full mt-14 mb-9">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold text-accent">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              </div>
              <div className="mt-8">
                <ScrollArea className="h-[500px] xl:h-[600px] w-full rounded-lg border border-accent">
                  <div className="flex flex-col gap-10 p-4">
                    {about.info.map((item, index) => {
                      return (
                        <div key={index} className="bg-white/10 p-4 rounded-lg text-white flex flex-col xl:flex-row justify-between hover:bg-accent/10 transition-all duration-300">
                          <span className="font-bold">{item.fieldName}</span>
                          <span className="text-white/60">{item.fieldValue}</span>
                        </div>
                      );
                    })}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
