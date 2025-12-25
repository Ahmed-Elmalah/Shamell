import React from 'react'
import MeetOurMentorsCard from '../components/MeetOurMentorsCard'
import MentorImg1 from "../assets/MentorImg1.png"
import MentorImg2 from "../assets/MentorImg2.png"
import MentorImg3 from "../assets/MentorImg3.png"
import MentorIcon from "../assets/MentorIcon.png"

export default function MeetOurMentors() {
    const MentorsCard = [
        {
          MentorImg: MentorImg1,
          title: "Dr. Ahmed Hassan",
          icon:MentorIcon,
          content:
            "English Language Instructor"
        },
        {
          MentorImg: MentorImg2,
          title: "Mr. Omar Khaled",
          icon:MentorIcon,
          content:
            "Physics Instructor"
        },
        {
          MentorImg: MentorImg3,
          title: "Ms. Hana Mahmoud",
          icon:MentorIcon,
          content:
            "Mathematics Instructor"
        },
        {
          MentorImg: MentorImg2,
          title: "Mr. Omar Khaled   ",
          icon:MentorIcon,
          content:
            "Physics Instructor"
        },
        
      ]
    
  return (
   <section  className="w-full dark:bg-black dark:text-white text-black py-24 px-6 flex flex-col items-center gap-10">
   
         {/* Title */}
         <h1 className="text-center text-4xl md:text-5xl font-semibold">
           Meet Our Mentors
         </h1>
   
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
             lg:grid-cols-4
             gap-10
             justify-items-center
           "
         >
           {MentorsCard.map((el, index) => (
             <MeetOurMentorsCard key={index} el={el} />
           ))}
         </div>
       </section>
  )
}
