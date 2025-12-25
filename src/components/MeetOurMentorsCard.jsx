import React from 'react'

export default function MeetOurMentorsCard({ el }) {
    return (
        <div className="relative w-[330px] h-[450px] rounded-2xl overflow-hidden bg-zinc-900 shadow-lg">

            {/* Image */}
            <img
                src={el.MentorImg}
                alt={name}
                className="w-full h-full object-cover"
            />

            {/* Dark Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white text-xl font-semibold">
                    {el.title}
                </h3>

                <div className="flex items-center gap-2 mt-2">
                    
                        <img src={el.icon} alt="icon" className="w-10 h-10" />
                    
                    <span className="text-purple-400 text-sm font-medium">
                        {el.content}
                    </span>
                </div>
            </div>
        </div>
    )
}
