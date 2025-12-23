import { IoCartOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";

export default function OurCoursesCard({ el }) {
  return (
    <div className="bg-[#222222] h-[448px] flex flex-col justify-between gap-3 p-4 rounded-2xl">
      <svg width="0" height="0" className="absolute">
        <linearGradient id="main-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop stopColor="#18C8FF" offset="0%" />
          <stop stopColor="#933FFE" offset="100%" />
        </linearGradient>
      </svg>

      <div className="w-full h-[45%] relative">
        <p className="flex items-center gap-2 absolute right-3 top-2">
          <span className="bg-[#c5c5c563] rounded-[50%] w-[18px] h-[18px] flex justify-center items-center">
            <IoTimeOutline className="text-[12px]" />
          </span>
          35 hrs
        </p>
        <img className="object-cover rounded-2xl h-full w-full" src={el.img} />
      </div>

      <div className="w-full flex justify-between items-center">
        <p className="bg-[#c5c5c563] px-2 py-0.5 rounded-[8px] flex justify-center items-center">
          <span className="text-[14px] bg-main-gr bg-clip-text text-transparent">
            {el.type}
          </span>
        </p>
        <p className="bg-main-gr bg-clip-text text-transparent font-semibold text-[20px]">
          ${el.price}
        </p>
      </div>

      <h1 className="text-[26px] font-semibold">{el.title}</h1>
      <p className="text-[16px] text-[#DDDDDD]">{el.description}</p>

      <div className="w-full flex justify-between gap-2 items-center">
        <button className="btn grow bg-main-gr rounded-2xl border-none text-white">
          View Course
        </button>

        <p className="w-[40px] h-[40px] rounded-[50%] flex justify-center items-center bg-main-gr">
          <span className="w-[90%] h-[90%] rounded-[50%] flex justify-center items-center bg-white">
            <IoCartOutline
              style={{
                stroke: "url(#main-gradient)",
                fill: "url(#main-gradient)",
              }}
              className="text-[20px]"
            />
          </span>
        </p>
      </div>
    </div>
  );
}

// <div className="card bg-base-100 shadow-sm">
//   <figure className="h-4/10">
//     <div className="w-full h-full relative">
//       {/* <p className="flex justify-center items-center gap-2 absolute right-3 top-2"></p> */}
//       <img
//         className="w-full h-full"
//         src={el.img}
//       />
//     </div>
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">Card Title</h2>
//     <p>
//       A card component has a figure, a body part, and inside body there are
//       title and actions parts
//     </p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
