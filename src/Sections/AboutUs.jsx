import React from 'react'
import AboutUsCards from '../components/AboutUsCards'
import img1 from "../assets/AboutUsImg1.png"
import img2 from "../assets/AboutUsImg2.png"
import img3 from "../assets/AboutUsImg3.png"
export default function AboutUs() {
  const AboutUsCard = [
    {
      icon: img1,
      title: "Trusted Mentors",
      content:
        "Our courses are taught by experienced and qualified instructors who understand how to explain complex topics in a simple and effective way for high school students."
    },
    {
      icon: img2,
      title: "Complete Courses",
      content:
        "Each course is carefully designed to cover the full curriculum, from basic concepts to advanced lessons, ensuring a complete learning journey."
    },
    {
      icon: img3,
      title: "Easy Access",
      content:
        "Access your courses anytime and anywhere through a user-friendly platform that works smoothly across all devices."
    },
  ]

  return (
    <section id='about' className="w-full dark:bg-black dark:text-white text-black py-24 px-6 flex flex-col items-center gap-10">

      {/* Title */}
      <h1 className="text-center text-4xl md:text-5xl font-semibold">
        About Us
      </h1>

      {/* Description */}
      <p className="text-center max-w-2xl text-sm md:text-base dark:text-white/80 text-black">
        We are an online learning platform built to support high school students with clear,
        structured, and accessible education. Our focus is on quality content, trusted
        instructors, and a smooth learning experience.
      </p>

      {/* Cards */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          gap-10
          justify-items-center
        "
      >
        {AboutUsCard.map((el, index) => (
          <AboutUsCards key={index} el={el} />
        ))}
      </div>
    </section>
  )
}
