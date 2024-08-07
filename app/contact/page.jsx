"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';
import Link from 'next/link'; // Import Link from next/link

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone', 
    description: '+91-8178449066',
  },
  {
    icon: <FaEnvelope />,
    title: 'E-mail', 
    description: 'atharvgro2003@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address', 
    description: '421-D, DDA Flats, Pocket-2, Mayur Vihar Phase-1, East Delhi, Delhi-110091, India',
  },
];

import { motion } from "framer-motion";

const Contact = () => {
    return (
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1, 
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }, 
        }}
        className="py-6 relative"
        style={{ backgroundImage: "url('/assets/mars2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Overlay to darken the image */}
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>
          
          <div className="container mx-auto relative z-10">
            <div className="flex flex-col xl:flex-row gap-[30px]">
              {/* form */}
              <div className="xl:w-[54%] order-2 xl:order-none">
                <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                  <h3 className="text-4xl text-accent">Want to work together?</h3>
                  <p>Have a project in mind? Drop me a mail at my email and lets work the feces out of it.</p>
                  {/* input */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input type="text" placeholder="First Name(eg. Rick)"/>
                    <Input type="text" placeholder="Last Name(eg. Astley)"/>
                    <Input type="email" placeholder="E-mail address"/>
                    <Input type="tel" placeholder="Phone Number"/>
                  </div>
                  {/* select */}
                  <Select>
                    <SelectTrigger className="w-full ">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select a service</SelectLabel>
                        <SelectItem value="front-end">Front-End Development</SelectItem>
                        <SelectItem value="back-end">Back-End Development</SelectItem>
                        <SelectItem value="database">Database Management</SelectItem>
                        <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {/* textarea */}
                  <Textarea 
                    className="h-[200px]" 
                    placeholder="Never gonna give you up.."
                  />
                  {/* btn */}
                  <Button size="md" className="max-w-40">
                    Send Message
                  </Button>
                </form>
              </div>
              {/* Info */}
              <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                <ul className="flex flex-col gap-10">
                  {info.map((item, index) => (
                    <li key={index} className="flex items-center gap-6">
                      <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                        <div className="text-[28px] ">{item.icon}</div>
                      </div>
                      <div className="flex-1 ">
                        <p className="text-white/60">{item.title}</p>
                        <h3 className="text-xl">{item.description}</h3>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          {/* Made with Love */}
          <div className=" mt-14"></div>
          <div className=" mt-14"></div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 mt-14">
            <Link href="https://www.youtube.com/watch?v=q-Y0bnx6Ndw">
              <span className="flex items-center gap-2 text-white cursor-pointer">
                Made with <FaHeart className=" text-accent" /> by <div className="text-accent">Atharv Grover</div>
              </span>
            </Link>
          </div>
        </motion.section>
    );
};

export default Contact;
