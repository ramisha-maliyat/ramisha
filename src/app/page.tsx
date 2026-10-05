import PageWrapper from "@/components/PageWrapper";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CareerTimeline from "@/components/CareerTimeline";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

// Structured data helps Google show your name, role and site correctly.
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shaikh Ramisha Maliyat",
  jobTitle: "Software Developer",
  url: "https://www.ramishamaliyat.com",
  email: "mailto:ramisha4627@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  alumniOf: "Ahsanullah University of Science and Technology",
  knowsAbout: [
    "Software Development",
    "Data Engineering",
    "BigQuery",
    "Looker",
    "REST APIs",
    "C#",
    ".NET",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-teal-400 focus:px-4 focus:py-2 focus:text-slate-950"
      >
        Skip to content
      </a>

      <ScrollProgress />

      <PageWrapper>
        <Navbar />
        <main id="main">
          <Hero />
          <About />
          <CareerTimeline />
          <Projects />
          <Skills />
          <Certifications />
          <Contact />
        </main>
      </PageWrapper>
    </>
  );
}