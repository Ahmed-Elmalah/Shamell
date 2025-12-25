import NavBar from "../components/NavBar";
import PurpleGlow from "../components/PurpleGlow";
import AboutUs from "../Sections/AboutUs";
import CodeLocations from "../Sections/CodeLocations";
import Footer from "../Sections/Footer";
import HeroSection from "../Sections/HeroSection";
import MeetOurMentors from "../Sections/MeetOurMentors";
import OurCourses from "../Sections/OurCourses";
import SubjectsSection from "../Sections/SubjectsSection";

export default function HomePage() {
  return (
  <div>
      <div className="w-full px-4 md:px-6 lg:px-17.75  relative dark:bg-black bg-[#f4f5f4]">
      <NavBar />
      <HeroSection />
      <PurpleGlow/>
      <AboutUs />
      <OurCourses />
      <MeetOurMentors/>
      <SubjectsSection/>
      <CodeLocations/>
    </div>
  
    <Footer/>
  </div>
  );
}
