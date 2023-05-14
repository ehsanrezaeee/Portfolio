import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div
        className=" bg-[rgb(73,71,71)] text-white h-screen snap-y snap-mandatory
      overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
      scrollbar-thumb-[#F7AB0A]/80"
      >
        <Header />

        <section id="hero" className="snap-start">
          <Hero />
        </section>

        <section id="about" className="snap-center">
          <About />
        </section>

        <section id="experience" className="snap-center">
          <WorkExperience />
        </section>

        <section id="skills" className="snap-start">
          <Skills />
        </section>

        <section id="projects" className="snap-start">
          <Projects />
        </section>

        <section id="contact" className="snap-start">
          <ContactMe />
        </section>
        <a href="#hero">
          <footer className="sticky bottom-5 w-full cursor-pointer">
            <div className="flex items-center justify-center">
              <Image
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt=""
                width={30}
                height={30}
                className="rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              />
            </div>
          </footer>
        </a>
      </div>
    </main>
  );
}
