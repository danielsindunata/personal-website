import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FeaturedProject } from "@/components/FeaturedProject";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <About />
        <FeaturedProject />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
