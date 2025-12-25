import heroImgLight from "../assets/heroImgLight.png";
import heroImgDark from "../assets/heroImgDark.png";
import CirclesDark from "../assets/HeroCirclesDark.png";
import CirclesLight from "../assets/HeroCirclesLight.png";
import { GoDotFill } from "react-icons/go";

import { useTheme } from "../store";
export default function HeroSection() {
  const { isDarkMode } = useTheme();
  return (
    <section id="home"className="relative min-h-[80vh] flex items-center overflow-visible pt-15 w-full ">
      
      {/* hero content */}
      <div className=" lg:w-[50vw]  flex flex-col lg:flex-row items-center justify-between">
        {/* 2. النص (على الشمال) */}
        <div className="w-full z-10 text-center lg:text-left">

          <div className="inline-block mb-3 ">
            <span className="text-sm font-medium text-[14px] text-[#222222] dark:text-white flex items-center gap-2">
              <GoDotFill className="text-[#05e185]"/>
               Learn Smarter. Achieve More.
            </span>
          </div>

          <div className="flex  flex-col items-center lg:items-start">
            <h1 className=" md:text-[64px] text-[38px] font-bold text-[#222222] dark:text-white leading-tight mb-6">
              Empower Your Future Through{" "}
              <span className="md:text-[64px] text-[38px] bg-main-gr bg-clip-text text-transparent">
                Education
              </span>
            </h1>
            <p className="dark:text-[#DDDDDD] text-[#555555] md:text-[18px] text-[13px] mb-8 max-w-lg">
              An online learning platform designed for high school students,
              offering structured courses taught by experienced instructors.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">

            <button className="bg-main-gr px-4 py-3 md:px-8 md:py-4 rounded-lg text-[14px] font-bold text-white hover:scale-105 transition-transform shadow-lg shadow-brand-purple/20">
              Get Started
            </button>

            <button className=" bg-[#FBFBFB] md:px-8 mg:py-4 px-2 py-2 rounded-xl font-bold text-[#222222] text-[17px] border border-white/20 hover:scale-103 transition-all">
              Browse Courses →
            </button>

          </div>
        </div>
      </div>

      {/* the hero photo */}
      <div className="lg:w-201.5 lg:h-210.5  absolute -top-30 -right-22 rotate-5 ">
        <img
          src={isDarkMode ? heroImgDark : heroImgLight}
          className="w-full h-full object-cover "
          alt=""
        />
      </div>

      {/* the circles photo */}
      <div className="lg:w-360 h-207.5 md:w-250 lg:top-10 top-50 w-150 absolute">
        <img
          src={isDarkMode ? CirclesDark : CirclesLight}
          alt=""
          className="w-full h-full object-cover "
        />
      </div>

      {/* the blur shadow div */}
      <div className="lg:w-150 lg:h-150 md:h-120 md:w-120 h-100 w-100 rounded-full absolute -top-270 -left-140 opacity-40 shadow-[300px_800px_150px_#17FFE3]"></div>
    </section>
  );
}
