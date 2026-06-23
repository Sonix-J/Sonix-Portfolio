import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Education from "../components/sections/Education";
import Skills from "../components/sections/Skills";
import Recommendation from "../components/sections/Recommendation";
import Links from "../components/sections/Links";

export default function Home() {
  return (
    <main className="flex flex-col gap-4 px-4 py-8 md:px-32 max-w-6xl mx-auto">
      <Hero />
      <About />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 flex flex-col gap-4">
          <Projects />
          <div className="block md:hidden flex flex-col gap-4">
            <Education />
            <Skills />
          </div>
          <Recommendation />
        </div>
        <div className="hidden md:flex flex-col gap-4">
          <Education />
          <Skills />
          <Links />
        </div>
        <div className="block md:hidden">
          <Links />
        </div>
      </div>
    </main>
  );
}
