"use client"; // Add this line at the very top

import React, { useState } from 'react';
import { GoDotFill } from "react-icons/go";
import data from '/indexskill.json';

export default function Main() {
  const [hireme, setHireme] = useState("Certifications");

  const scrollToAbout3Section1 = () => {
    const about3Section1 = document.querySelector('.about3Section1');
    if (about3Section1) {
      about3Section1.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='about3Section'>
      <div className='about3Section1'>
        <div className='mainHeading'>      
          <h1>{hireme}</h1>
        </div>

        <div className='hiremeSection'>
          {data[hireme]?.map((item, index) => (
            <div key={index} className='hiremeContainer'>
              <div className='main--contents'>
                <h3>{item.date}</h3>
                <h1>{item.skillname}</h1>
                <h2>{item.institute}</h2>
                <p>{item.address}</p>
                <div className='mainpercentage'>
                  <GoDotFill />
                  <h3>{item.age}</h3>
                  <p><a href={item.link} target="_blank" rel="noreferrer">{item.percentage}</a></p>
                  <p>{item.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='mainSection2'>
        <h1>Tech with a Touch</h1>
        <p>Knowledge as Foundation, Skills as Catalyst: Shaping the Digital Frontier</p>
        <button onClick={() => { setHireme("Certifications"); scrollToAbout3Section1(); }}>Certifications</button>
        <button onClick={() => { setHireme("Education"); scrollToAbout3Section1(); }}>Education</button>
        <button onClick={() => { setHireme("Personal-Information"); scrollToAbout3Section1(); }}>Personal Information</button>
      </div>
    </div>
  );
}
