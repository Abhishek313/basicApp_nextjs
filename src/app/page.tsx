import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import UpcomingWebinars from "@/components/UpcomingWebinar";
import Instructors from "@/components/Instructors";


export default function Home() {

  return (
  <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
   
   <HeroSection/>
   <FeaturedCourses/>
   <WhyChooseUs/>
   <Testimonials/>
   <UpcomingWebinars/>
   <Instructors/>
   
  </main>
  );
}
