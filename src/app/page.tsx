import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Skills />
      <Projects />
      <Services />
      <Contact />
    </>
  );
}
