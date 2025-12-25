import NavBar from "../components/NavBar";
import PurpleGlow from "../components/PurpleGlow";
import AboutUs from "../Sections/AboutUs";
import HeroSection from "../Sections/HeroSection";
import OurCourses from "../Sections/OurCourses";

export default function HomePage() {
  return (
    <div className="w-full px-4 md:px-6 lg:px-17.75 py-2.5 relative dark:bg-black bg-[#f4f5f4]">
      <NavBar />
      <HeroSection />
      <PurpleGlow/>
      <AboutUs />
      <OurCourses />
    </div>
  );
}
