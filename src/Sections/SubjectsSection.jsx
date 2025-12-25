import React from "react";
import GradeCard from "../components/GradeCard";

export default function SubjectsSection() {
  const academicLevels = [
    {
      grade: "10",
      subjects: [
        "Mathematics",
        "Physics",
        "Chemistry",
        "Biology",
        "English",
        "History",
      ],
    },
    {
      grade: "11",
      subjects: [
        "Pure Math",
        "Mechanics",
        "Chemistry",
        "Physics",
        "English",
        "Geography",
      ],
    },
    {
      grade: "12",
      subjects: [
        "Calculus",
        "Dynamics",
        "Nuclear Physics",
        "Organic Chemistry",
        "English",
        "Philosophy",
      ],
    },
  ];

  return (
    <section
      id="subjects"
      className="w-full min-h-[75vh] py-14 px-4 md:px-6 lg:px-15 transition-colors overflow-visible mb-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Header Section */}
        <div className="text-center mb-20 space-y-4 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white leading-tight">
            Subjects We Offer
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base md:text-lg">
            Select your academic level to explore specialized subjects tailored
            for each grade to ensure excellence.
          </p>
        </div>

        {/* Staircase Grid Layout (3 Columns) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 items-start">
          {academicLevels.map((level, index) => (
            <GradeCard key={index} gradeData={level} index={index} />
          ))}
        </div>
      </div>

      {/* Purble Glow */}
      <div
        className="
        absolute
        z-0
        
        /* Mobile */
        hidden

        md:block

        /* Tablet */
        sm:left-0
        sm:top-1270
        sm:w-80
        sm:h-80

        /* Desktop */
        lg:left-0
        lg:top-940
        lg:w-100
        lg:h-100

        /* Large screens */
        xl:top-950
        xl:left-0
        xl:w-130
        xl:h-130

        bg-[radial-gradient(circle,rgba(124,58,237,0.65),transparent_70%)]
        pointer-events-none
      "
      />
    </section>
  );
}
