import React from 'react'

export default function PurpleGlow2() {
  return (
     <div
      className="
        absolute

        /* Mobile */
        right-[-180px]
        top-[170px]
        w-[320px]
        h-[320px]

        /* Tablet */
        sm:right-[-220px]
        sm:top-[130px]
        sm:w-[500px]
        sm:h-[500px]

        /* Desktop */
        lg:right-[-400px]
        lg:top-[50px]
        lg:w-[800px]
        lg:h-[800px]

        /* Large screens */
        xl:right-[-520px]
        xl:w-[900px]
        xl:h-[900px]

        bg-[radial-gradient(circle,rgba(124,58,237,0.65),transparent_70%)]
        pointer-events-none
        z-0
      "
    />
  )
}
