import { useState } from "react";
import logo from "../assets/Logo.png";
import ThemeToggle from "./themeToggle/ThemeToggle";
import { useNavigate } from "react-router-dom";

export default function LoginRegisterNavbar() {
  const navigate = useNavigate();


  return (
    <nav className="h-18.75 fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-6 lg:px-10 xl:px-12 bg-transparent">
      
      {/* Logo */}
      <button
        className="cursor-pointer"
        onClick={() => navigate('/')}
      >
        <img
          src={logo}
          alt="Logo"
          className="h-8.75 md:h-9.5 lg:h-10.5 xl:h-12.75 hover:scale-105 transition-all"
        />
      </button>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {/* Language Button */}
        <button className="text-[#222222] dark:text-[#FFFFFF] md:text-[14px] lg:text-[16px] xl:text-[18px] font-bold hover:text-blue-400 transition-colors cursor-pointer">
          ع
        </button>

        {/* Dark / Light Toggle */}
        <ThemeToggle />
      </div>
    </nav>
  );
}
