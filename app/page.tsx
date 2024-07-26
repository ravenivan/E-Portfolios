import Navbar from "@/components/navbar";
import HomeSection from "@/components/home"
import About from '@/components/about'
import Projects from '@/components/projects'
import Image from "next/image";
import Contact from "@/components/contact";
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
