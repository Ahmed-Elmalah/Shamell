import React from 'react'

export default function MeetOurMentorsCard({ el }) {
    return (
        <div className="  relative
    w-full
    max-w-[320px]
    h-[430px]
    rounded-2xl
    overflow-hidden
    bg-zinc-900
    shadow-lg">

            {/* Image */}
            <img
                src={el.MentorImg}
                alt={el.title}
                className="w-full h-full object-cover"
            />

            {/* White Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-800/100 via-zinc-800/20 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="dark:text-white text-black text-2xl font-semibold">
                    {el.title}
                </h3>

                <div className="flex items-center gap-2 mt-2">
                    <img
                        src={el.icon}
                        alt="icon"
                        className="w-8 h-8"
                    />

                    <span className="bg-main-gr bg-clip-text text-transparent text-sm font-medium">
                        {el.content}
                    </span>
                </div>
            </div>
        </div>
    )
}
