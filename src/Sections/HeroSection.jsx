import heroImg from '../assets/heroImgLight.png'; 

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-visible pt-20">
      
      {/* 1. الخلفية المتدرجة (Gradient Blobs) - دي اللي بتدي الروح للصورة */}
      <div className="absolute top-0 right-0 -z-10 w-[60%] h-full opacity-50">
        <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-brand-cyan/30 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-[20%] w-80 h-80 bg-brand-purple/20 blur-[100px] rounded-full"></div>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        
        {/* 2. النص (على الشمال) */}
        <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="text-sm font-medium text-brand-cyan">● Learn Smarter. Achieve More.</span>
          </div>
          <h1 className="text-4xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Empower Your Future <br />
            Through <span className="bg-main-gr bg-clip-text text-transparent">Education</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg">
            An online learning platform designed for high school students, offering structured courses taught by experienced instructors.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button className="bg-main-gr px-8 py-4 rounded-xl font-bold text-white hover:scale-105 transition-transform shadow-lg shadow-brand-purple/20">
              Get Started
            </button>
            <button className="px-8 py-4 rounded-xl font-bold text-white border border-white/20 hover:bg-white/5 transition-colors">
              Browse Courses →
            </button>
          </div>
        </div>

        {/* 3. الصورة "الخلفية" (على اليمين) - بـ Transform و Position */}
        <div className="relative w-full lg:w-1/2 h-[500px] flex justify-center items-center mt-12 lg:mt-0">
          
          {/* البرواز الأبيض المائل (اللي جواه الصورة) */}
          <div className="absolute 
            w-[350px] md:w-[450px] lg:w-[806px] lg:h-[842px]
            aspect-[4/3] 
           /* ده اللي بيعمل الإطار الأبيض */
            rounded-[2rem] 
            shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] 
            rotate-[7deg] /* الميلان اللي في الصورة */
            translate-x-4 lg:translate-x-20 lg:-translate-y-50 /* ترحيل خفيف لليمين */
            -skew-x-3 /* لمسة احترافية للميلان */
            overflow-hidden 
            z-0">
            
            {/* الصورة نفسها */}
            <img 
              src={heroImg} 
              alt="Education" 
              className="w-full h-full object-cover rounded-3xl"
            />
            
            {/* طبقة تدرج لوني خفيفة فوق الصورة عشان متبقاش فاقعة */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/20 to-transparent pointer-events-none"></div>
          </div>

          {/* خطوط زخرفية (Contours) لو عايز تضيفها زي الصورة */}
          <div className="absolute -top-10 -right-10 w-full h-full border border-white/5 rounded-full -z-10 scale-150 rotate-45"></div>
        </div>
      </div>
    </section>
  );
}