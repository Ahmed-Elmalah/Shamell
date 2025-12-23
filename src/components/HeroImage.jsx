import heroImgLight from '../assets/heroImgLight.png'

export default function HeroImage({ imageSrc }) {
  return (
    // الحاوية الخارجية لضبط التموضع
    <div className="relative w-full flex justify-center items-center p-10 overflow-visible">
      
      {/* الكارد الأساسي المائل */}
      <div 
        className="
          relative
          w-[300px] sm:w-[400px] md:w-[500px] lg:w-[650px] xl:w-[800px] /* عرض متجاوب */
          aspect-[4/3] /* نسبة عرض إلى ارتفاع ثابتة (زي الشاشات القديمة شوية) */
          bg-white /* لون خلفية احتياطي */
          rounded-3xl /* حواف دائرية كبيرة */
          shadow-[0_20px_50px_rgba(0,0,0,0.3)] /* ظل كبير ومميز زي التصميم */
          -rotate-[8deg] /* الميلان لليسار */
          border-[6px] border-white /* الإطار الأبيض السميك */
          overflow-hidden /* عشان الصورة متطلعش بره الحواف المدورة */
          z-10 /* عشان يكون فوق أي عناصر خلفية تانية */
          hover:rotate-0 hover:scale-105 transition-all duration-500 ease-in-out /* حركة روشة لما تقف عليه */
        "
      >
        {/* الصورة كخلفية تملأ الكارد */}
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImgLight || 'https://via.placeholder.com/800x600'})` }} // استخدم الصورة الممررة أو صورة افتراضية
        >
          {/* طبقة تدرج لوني خفيفة فوق الصورة لزيادة التباين (اختياري) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none"></div>
        </div>
      </div>

      {/* عنصر زخرفي خلفي (Blur Blob) لزيادة العمق زي التصميم الأصلي */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-500/30 blur-[120px] rounded-full -z-10"></div>
    </div>
  );
}