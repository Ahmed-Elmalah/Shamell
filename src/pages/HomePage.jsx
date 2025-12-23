import NavBar from "../components/NavBar";
import AboutUs from "../Sections/AboutUs";
import HeroSection from "../sections/HeroSection";

export default function 
() {
  return (
    <div className="w-full px-4 md:px-6 lg:px-17.75 py-2.5 relative">
        <NavBar/>
        <HeroSection/>
    </div>
  )
}
