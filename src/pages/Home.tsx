import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'

export default function Home() {
  return (
    <main className="flex flex-col gap-8 px-4 py-8 md:px-32 max-w-6xl mx-auto">
      <Hero />
      <About />
      <Projects />
    </main>
  )
}