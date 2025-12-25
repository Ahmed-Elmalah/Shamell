import React from 'react'

export default function AboutUsCards({ el }) {
  return (
 

    <div className="dark:bg-[#222222] bg-gray-200 h-[300px] flex flex-col justify-between gap-3 p-4 rounded-2xl border border-transparent
             transition-all duration-300
            
            hover:shadow-[0_0_25px_var(--color-brand-purple)] ">
      <figure className="flex justify-center">
        <img
          src={el.icon}
          alt={el.title}
          className="w-[52px] h-[52px] mt-[30px]"
        />
      </figure>

      <div className="text-center flex flex-col gap-4 mb-7.5">
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
