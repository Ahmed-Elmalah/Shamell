export default function OrangeGlow() {
  return (
    <div
      className="
        absolute

        /* Mobile */
        left-[-180px]
        top-[100px]
        w-[320px]
        h-[320px]

        /* Tablet */
        sm:left-[-220px]
        sm:top-[50px]
        sm:w-[500px]
        sm:h-[500px]

        /* Desktop */
        lg:left-[-400px]
        lg:top-[50px]
        lg:w-[800px]
        lg:h-[800px]

        /* Large screens */
        xl:left-[-520px]
        xl:w-[900px]
        xl:h-[900px]

        bg-[radial-gradient(circle,rgba(255,153,0,0.60),transparent_70%)]
        pointer-events-none
        z-0
      "
    />
  );
}
