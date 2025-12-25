// src/components/GradeCard.jsx
import React, { useState } from 'react';
import SubjectButton from './SubjectButton';

export default function GradeCard({ gradeData, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Staircase effect classes based on index
  const staircaseClasses = [
    "md:translate-y-0",
    "md:translate-y-12",
    "md:translate-y-24"
  ];

  const displayedSubjects = isExpanded 
    ? gradeData.subjects 
    : gradeData.subjects.slice(0, 3);

  return (
    <div className={`w-full p-6 rounded-3xl bg-[#FBFBFB] dark:bg-[#1C1C1C] border border-gray-200 dark:border-gray-800 flex flex-col items-center shadow-lg transition-all duration-500 ${staircaseClasses[index]}`}>
      <span className="text-brand-cyan font-bold text-sm mb-2 uppercase tracking-widest">
        Level
      </span>
      <h3 className="text-2xl font-bold text-black dark:text-white mb-6">
        Grade {gradeData.grade}
      </h3>

      <div className="w-full flex flex-col gap-3 transition-all duration-500">
        {displayedSubjects.map((subject, idx) => (
          <SubjectButton key={idx} name={subject} />
        ))}
      </div>

      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-6 text-sm font-bold bg-main-gr bg-clip-text text-transparent hover:opacity-80 transition-opacity cursor-pointer"
      >
        {isExpanded ? "Show Less ↑" : "View All Subjects ↓"}
      </button>
    </div>
  );
}