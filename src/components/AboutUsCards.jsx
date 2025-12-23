import React from 'react'

export default function AboutUsCards({ el }) {
  return (
    <div
      className="
        dark:bg-[#22222299]
            bg-[#FFFFFF99]
        rounded-2xl
        shadow
        w-[410px]
        h-[340px]
        flex flex-col
        pt-11 px-8 gap-3
        mx-auto
        border border-transparent
        transition-all duration-300
        hover:border-[var(--color-brand-cyan)]
        hover:shadow-[0_0_25px_var(--color-brand-purple)]

        


        
      "
    >
      <figure className="flex justify-center">
        <img
          src={el.icon}
          alt={el.title}
          className="w-[52px] h-[52px]"
        />
      </figure>

      <div className="text-center flex flex-col gap-4 mt-4">
        <h2 className="text-[28px] font-semibold dark:text-white text-black" >
          {el.title}
        </h2>

        <p className="text-[14px] dark:text-white text-black leading-[22px]">
          {el.content}
        </p>
      </div>
    </div>
  )
}
