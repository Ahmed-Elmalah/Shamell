import { Link } from "react-router-dom";
import LoginRegisterNavbar from "../components/LoginRegisterNavbar";
import { useTheme } from "../store";

export default function NotFound404() {
    const {isDarkMode} = useTheme();
  return (
    <>
      <LoginRegisterNavbar/>

      <div className="min-h-dvh flex justify-start items-center  overflow-hidden dark:bg-black bg-white px-4 text-center">

        <div className="relative z-10 flex flex-col items-center w-full">

            {/* sorry text with main-gr border*/}
          <svg
            viewBox="0 0 1500 600"
            className="w-full  h-auto absolute md:top-0 -top-25 z-0"
          >
            <defs>
              {/* تعريف التدرج اللوني الخاص بـ main-gr */}
              <linearGradient id="mainGr" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#18C8FF" /> 
                <stop offset="100%" stopColor="#933FFE" />
              </linearGradient>
            </defs>

            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-bold md:text-[571px] text-[600px] lg:opacity-40 md:opacity-40 opacity-50"
              fill={isDarkMode? 'black' : 'white'} 
              stroke="url(#mainGr)"
              strokeWidth="2" /* سمك البوردر */
              
            >
              Sorry
            </text>
          </svg>

            {/* main texts and button back to home */}
          <div className="z-10 w-full flex flex-col items-start lg:px-20 md:px-12 px-2 gap-16.75">

            {/* texts */}
            <div className="w-full flex flex-col items-start gap-6 text-[#2C2F28] dark:text-[#FFFFFF] ">
              <h2 className="xl:text-[83px] md:text-[65px] text-[50px] font-bold ">
                Oops....😔
              </h2>

              {/* وصف الرسالة */}
              <p className=" text-start xl:text-[42px] lg:text-[30px] md:text-[26px] text-[20px]  font-bold">
                You’ve reached the past <br/> instead of the page
              </p>

              <p className="xl:text-[16px] lg:text-[13px] md:text-[10px] text-[10px] font-bold">We can’t find the page that you’re looking for...</p>
            </div>

            {/*button back to home*/}
            <Link
              to="/"
              className="lg:px-8 lg:py-4 px-6 py-2 rounded-xl bg-main-gr! text-white font-bold text-sm md:text-lg hover:opacity-90 transition-all shadow-lg shadow-brand-purple/30 hover:-translate-y-1 flex items-center gap-2"
            >
              {/* أيقونة بسيطة للعودة */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>
              Back to Home Page
            </Link>
          </div>
        </div>
      </div>

      
    </>
  );
}
