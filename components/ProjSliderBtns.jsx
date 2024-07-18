"use client";

import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const ProjSliderBtns = ({ swiper, containerStyles, btnStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button className={btnStyles} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default ProjSliderBtns;
