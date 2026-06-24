import PageWrapper from "@/components/PageWrapper";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
// import Education from "@/components/Education";
import CareerTimeline from "@/components/CareerTimeline";


export default function Home() {
  return (
    <>
      <ScrollProgress />

      <PageWrapper>
        <Navbar />
        <Hero />
        <About />
        <CareerTimeline />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </PageWrapper>
    </>
  )
}