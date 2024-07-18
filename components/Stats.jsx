"use client";

import CountUp from "react-countup";

const stats = [
    {
        num: 8,
        text: "Projects Completed", 
    },
    {
        num: 10,
        text: "Technologies mastered", 
    },
    {
        num: 200,
        text: "Code commits", 
    },
    {
      num: 981035,
      text: "LeetCode Rank", 
  },
]

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => (
            <div className="text-accent flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
              <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" suffix="+" />
              <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8"></div> {/* Added margin-bottom for gap at the end of the page */}
    </section>
  );
};

export default Stats;
