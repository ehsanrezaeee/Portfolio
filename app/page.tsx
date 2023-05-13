import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <main>
      <div className=" bg-[rgb(73,71,71)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
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
        {/* Skills */}

        {/* Projects */}

        {/* Contact Me */}
      </div>
    </main>
  );
}
