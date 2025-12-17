import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Education } from "@/components/sections/education"
import { Experience } from "@/components/sections/experience"
import { Skills } from "@/components/sections/skills"
import { Languages } from "@/components/sections/languages"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Languages />
      <Contact />
    </>
  )
}

