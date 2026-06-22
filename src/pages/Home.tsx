import Hero from '../components/sections/Hero'
import About from '../components/sections/About'

export default function Home() {
  return (
    <main className="flex flex-col gap-8 px-4 py-8">
      <Hero />
      <About />
      {/* <Projects /> */}
    </main>
  )
}