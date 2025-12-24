import OurCoursesCard from "../components/OurCoursesCard";
import img1 from "../assets/OurCorsesImg1.jpg";
import img2 from "../assets/OurCorsesImg2.jpg";
import img3 from "../assets/OurCorsesImg3.jpg";
export default function OurCourses() {
  const cards = [
    {
      img: img1,
      title: "English Foundations",
      price: 143,
      type: "Language",
      description:
        "Improve your communication skills with structured language courses focusing on grammar, vocabulary, and practical usage.",
    },
    {
      img: img2,
      title: "Introduction to Programming",
      price: 143,
      type: "Programing",
      description:
        "Learn the basics of programming and problem-solving using simple examples designed for beginners.",
    },
    {
      img: img3,
      title: "Mathematics Essentials",
      price: 143,
      type: "Math",
      description:
        "Understand mathematical concepts through step-by-step explanations, practice problems, and clear examples.",
    },
    {
      img: img3,
      title: "Mathematics Essentials",
      price: 143,
      type: "Math",
      description:
        "Understand mathematical concepts through step-by-step explanations, practice problems, and clear examples.",
    },
    {
      img: img1,
      title: "English Foundations",
      price: 143,
      type: "Language",
      description:
        "Improve your communication skills with structured language courses focusing on grammar, vocabulary, and practical usage.",
    },
    {
      img: img2,
      title: "Introduction to Programming",
      price: 143,
      type: "Math",
      description:
        "Learn the basics of programming and problem-solving using simple examples designed for beginners.",
    },
  ];
  return (
    <div id="courses" className="w-full  flex flex-col gap-2 items-center">
      <h3 className="text-[36px] font-semibold">Our Courses</h3>
      <p className="text-[18px]">
        Explore our top Courses curated by experts to boost your learning
        journey
      </p>
      <div className="w-full h-[90%] p-4 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {cards.map((el, index) => (
          <OurCoursesCard key={index} el={el} />
        ))}
      </div>
    </div>
  );
}
