import NavBar from "../components/NavBar";
import AboutUs from "../Sections/AboutUs";

export default function 
() {
  return (
    <div className="w-full px-17.75 py-2.5 relative">
        <NavBar/>
        <div className=" h-[200vh] bg-red-500">
          <AboutUs/>
        </div>
        
    </div>
  )
}
