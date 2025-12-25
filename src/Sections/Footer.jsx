import React from "react";
import InstagramIcon from "../assets/InstagramIcon.png"
import TelegramIcon from "../assets/TelegramIcon.png"
import FacebookIcon from "../assets/FacebookIcon.png"
import LinkedinIcon from "../assets/linkedinIcon.png"

export default function Footer() {
    let icons = [InstagramIcon, FacebookIcon, LinkedinIcon, TelegramIcon]
    return (

        <footer className="dark:bg-[#DDDDDD80] bg-white/90">
            {/* Top Section */}
            <div className="max-w-6xl mx-auto px-6 py-10 text-center flex flex-col items-center gap-4">
                <h2 className="text-2xl md:text-3xl dark:text-white text-black font-semibold leading-snug">
                    Open the door to a new world by{" "}
                    <span className="bg-main-gr bg-clip-text text-transparent">learning</span>
                </h2>

                <button className="mt-4 px-3 transition-all cursor-pointer   rounded-lg bg-main-gr bg-clip bg-transparent transition text-white font-semibold shadow-md">
                    Get Started
                </button>
            </div>

            {/* Links */}
            <div className="lg:grid lg:grid-flow-col   justify-center gap-14       md:flex md:flex-col   ">
                <div className="flex flex-col  items-center">
                    <h4 className="mb-4 font-semibold dark:text-white text-black">Support</h4>
                    <ul className="space-y-2 dark:text-white text-black flex flex-col items-center">
                        <li className=" cursor-pointer">Help Center</li>
                        <li className=" cursor-pointer">Chat</li>
                        <li className=" cursor-pointer mb-4">Report a Bug</li>
                    </ul>
                </div>

                <div className="flex flex-col  items-center">
                    <h4 className="mb-4 dark:text-white text-black font-semibold">Courses</h4>
                    <ul className="space-y-2 dark:text-white text-black flex flex-col items-center">
                        <li className=" cursor-pointer">Arabic</li>
                        <li className=" cursor-pointer">English</li>
                        <li className=" cursor-pointer mb-4">Programming</li>
                    </ul>
                </div>

                <div className="flex flex-col  items-center">
                    <h4 className="mb-4 dark:text-white text-black font-semibold">Get in Touch</h4>
                    <ul className="space-y-2 dark:text-white text-black flex flex-col items-center">
                        <li className=" cursor-pointer">Contact</li>
                        <li className=" cursor-pointer">Sales</li>
                        <li className=" cursor-pointer mb-4">Prices</li>
                    </ul>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t h-[2px] dark:border-[#E9E9E9] border-gray-400" />

            {/* Bottom */}
            <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
                <p className="dark:text-white text-black">
                    © Copywriting | All Rights Reserved
                </p>

                <div className="flex gap-4 lg:pr-15 md:pr-0">
                    {icons.map((icon, index) => (
                        <img
                            key={index}
                            src={icon}
                            alt="social icon"
                            className="w- h-8 cursor-pointer hover:scale-110 transition"
                        />
                    ))}
                </div>


                <div className="flex gap-3 dark:text-white text-black">
                    <span className="cursor-pointer ">Terms of Use</span>
                    <span>|</span>
                    <span className="cursor-pointer">Privacy</span>
                </div>
            </div>
        </footer>
    );
}
