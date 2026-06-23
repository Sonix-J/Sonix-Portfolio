import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Education from '../components/sections/Education'
import Skills from '../components/sections/Skills'
import Recommendation from '../components/sections/Recommendation'
import Links from '../components/sections/Links'

export default function Home() {
  return (
    <main className="flex flex-col gap-4 px-4 py-8 md:px-32 max-w-6xl mx-auto">
      <Hero />
      <About />
      <Projects />
      <Education />
      <Skills />
      <Recommendation />
      <Links />
    </main>
  )
}