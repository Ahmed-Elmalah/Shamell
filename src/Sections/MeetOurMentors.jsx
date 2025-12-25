import React from 'react'
import MeetOurMentorsCard from '../components/MeetOurMentorsCard'
import MentorImg1 from "../assets/MentorImg1.png"
import MentorImg2 from "../assets/MentorImg2.png"
import MentorImg3 from "../assets/MentorImg3.png"
import MentorImg4 from "../assets/MentorImg4.jpg"
import MentorIcon from "../assets/MentorIcon.png"
import PurpleGlow from '../components/PurpleGlow'
import PurpleGlow2 from '../components/PurpleGlow2'
import { GrFormNextLink } from 'react-icons/gr'

export default function MeetOurMentors() {
    const MentorsCard = [
        {
          MentorImg: MentorImg1,
          title: "Mr. Ahmed khaled",
          icon:MentorIcon,
          content:
            "IT Maneger"
        },
        {
          MentorImg: MentorImg2,
          title: "Mr. Mohamed Abo ElAzm",
          icon:MentorIcon,
          content:
            "The Top Mentor"
        },
        {
          MentorImg: MentorImg3,
          title: "Mr. Ziad Mahdy",
          icon:MentorIcon,
          content:
            "Web Developer"
        },
        {
          MentorImg: MentorImg4,
          title: "Mr. Omar Khaled   ",
          icon:MentorIcon,
          content:
            "UI UX Designer"
        },
        
      ]
    
  return (
   <section  className="w-full relative  dark:bg-black dark:text-white text-black py-24 px-6 flex flex-col items-center gap-10">
   
         {/* Title */}
         <h1 className="text-center text-4xl md:text-5xl font-semibold">
           Meet Our Mentors
         </h1>
            <PurpleGlow2/>
         {/* Description */}
         <p className="text-center max-w-2xl text-sm md:text-base dark:text-white/80 text-black">
           Learn from experienced and trusted instructors
           who are dedicated to helping high school 
           students succeed.
         </p>
         
         {/* Cards */}
         <div
           className="
             grid
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
    gap-6
    justify-items-center
           "
         >
           {MentorsCard.map((el, index) => (
             <MeetOurMentorsCard key={index} el={el} />
           ))}
         </div>
         <button className="btn border-0 w-[138px] h-[48px] shadow bg-[#FBFBFB] hover:bg-[#eaeaea] transition-all duration-450 text-[#222222] flex items-center justify-center gap-1">
                 See More <GrFormNextLink className="text-[20px]" />
               </button>
       </section>
  )
}
