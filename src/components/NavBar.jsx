import logo from '../assets/Logo.png'
import ThemeToggle from './themeToggle/ThemeToggle'
export default function NavBar() {
  return (
    <nav className="h-[75px] gap-[70px] bg-[#1C1C1C] rounded-2xl sticky top-2.5 z-50 flex items-center justify-between px-8 text-white mx-4">
      
      {/* 1. اللوجو على الشمال */}
      <div className="flex items-center">
        <img 
          src={logo} // حط مسار صورة "شامل" هنا
          alt="Shamel Logo" 
          className="h-[51px] w-[137]  object-contain"
        />
      </div>

      {/* 2. القائمة اللي في النص */}
      <ul className="hidden md:flex items-center gap-x-8 text-sm font-medium text-gray-300">
        <li className="hover:text-white cursor-pointer text-[18px] transition-colors">Home</li>
        <li className="hover:text-white cursor-pointer text-[18px] transition-colors">About</li>
        <li className="hover:text-white cursor-pointer text-[18px] transition-colors">Our Courses</li>
        <li className="hover:text-white cursor-pointer text-[18px] transition-colors">Code Locations</li>
        <li className="hover:text-white cursor-pointer text-[18px] transition-colors">Questions</li>
      </ul>

      {/* 3. الجزء اللي على اليمين (Sign Up, Login, Language, Toggle) */}
      <div className="flex items-center gap-x-8">
        
        {/* Sign Up بـ Gradient text */}
        <button className="cursor-pointer text-[18px] font-semibold bg-main-gr bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          Sign Up
        </button>

        {/* Login بـ Gradient background */}
        <button className="cursor-pointer bg-main-gr w-24 h-11.5 rounded-md text-[18px] font-bold hover:scale-103 transition-all">
          Login
        </button>

        {/* زر تغيير اللغة */}
        <button className="text-[18px] font-bold hover:text-blue-400 transition-colors">
          ع
        </button>

        {/* Dark Mode Toggle شكل بسيط */}
        <ThemeToggle/>

      </div>
    </nav>
  )
}
