import { useState } from "react";
import logo from "../assets/Logo.png";
import ThemeToggle from "./themeToggle/ThemeToggle";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", sectionId: "home" },
    { name: "About", sectionId: "about" },
    { name: "Our Courses", sectionId: "courses" },
    { name: "Code Locations", sectionId: "locations" },
    { name: "Questions", sectionId: "questions" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const offset = 100;

      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,

        behavior: "smooth",
      });

      setIsOpen(false); // نقفل المنيو لو في الموبايل بعد الدوسة
    }
  };

  return (
    <nav className="h-18.75 dark:bg-[#1C1C1C] bg-[#FBFBFB] rounded-2xl fixed top-2.5 left-4 right-4 md:left-6 md:right-6 lg:left-17.75 lg:right-17.75 z-50 flex items-center justify-between px-4 md:px-3 lg:px-5 xl:px-8 text-white">
      <div className="shrink-0 ">
        <button className="cursor-pointer" onClick={() => scrollToSection('home')}>
          <img
            src={logo}
            alt="Shamel Logo"
            className="h-8.75 md:h-9.5 lg:h-10.5 xl:h-12.75 w-auto object-contain hover:scale-105 transition-all"
          />
        </button>
      </div>

      {/* 2. اللينكات - قللنا الـ gap في الـ lg وخليناه يزيد في الـ xl */}
      <ul className="hidden md:flex items-center md:gap-x-3 lg:gap-x-6 xl:gap-x-[47px]">
        {navLinks.map((item, index) => (
          <button
            onClick={() => scrollToSection(item.sectionId)}
            key={index}
            className="text-[#555555] dark:text-[#FFFFFF] transition-all hover:bg-main-gr hover:bg-clip-text hover:text-transparent cursor-pointer md:text-[13px] lg:text-[14px] xl:text-[18px] whitespace-nowrap font-medium"
          >
            {item.name}
          </button>
        ))}
      </ul>

      {/* 3. الجزء اليمين */}
      <div className="flex items-center gap-3 md:gap-x-3 lg:gap-x-4 xl:gap-x-12">
        {/* أزرار الدخول: أهم تعديل هنا هو الـ whitespace-nowrap عشان كلمة Sign Up ماتتكسرش */}
        <div className="hidden md:flex items-center md:gap-x-2 lg:gap-x-3 xl:gap-x-4">
          <button className="transition-all cursor-pointer hover:scale-105 md:text-[13px] lg:text-[14px] xl:text-[18px] font-semibold bg-main-gr bg-clip-text text-transparent whitespace-nowrap">
            Sign Up
          </button>
          <button className="transition-all cursor-pointer hover:scale-105 bg-main-gr md:px-3 lg:px-4 xl:px-6 md:py-1.5 lg:py-2 rounded-md md:text-[13px] lg:text-[14px] xl:text-[18px] font-bold whitespace-nowrap">
            Login
          </button>
        </div>

        {/* خط فاصل */}
        <div className="hidden lg:block w-px h-6 bg-gray-700"></div>

        <div className="flex items-center gap-x-4 md:gap-x-4 lg:gap-x-3 xl:gap-x-10">
          <button className="text-[#222222] dark:text-[#FFFFFF] md:text-[14px] lg:text-[16px] xl:text-[18px] font-bold hover:text-blue-400 transition-colors cursor-pointer">
            ع
          </button>
          <ThemeToggle />
        </div>

        {/* زرار البرجر */}
        <button
          className="md:hidden text-2xl text-white ml-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* مِنيو الموبايل */}
      {isOpen && (
        <div className="absolute top-21.25 left-0 w-full bg-[#1C1C1C] rounded-2xl p-6 flex flex-col gap-4 md:hidden border border-gray-800 shadow-2xl z-50">
          {navLinks.map((item, index) => (
            <button
              onClick={() => scrollToSection(item.sectionId)}
              key={index}
              className="transition-all text-center py-2 border-b border-gray-800 text-gray-300"
            >
              {item.name}
            </button>
          ))}
          <button className="transition-all bg-main-gr py-3 rounded-md font-bold mt-2">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
