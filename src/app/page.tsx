"use client"

import { useEffect, useRef } from "react"
import Hero from "./components/hero"
import About from "./components/about"
import Skills from "./components/skills"
import Experience from "./components/experience"
import Projects from "./components/projects"
import Contact from "./components/contact"
import Navigation from "./components/navigation"

export default function Portfolio() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const setSectionRef = (index: number) => (el: HTMLElement | null) => {
    sectionsRef.current[index] = el
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      <section ref={setSectionRef(0)} className="opacity-0 translate-y-10 transition-all duration-1000">
        <Hero />
      </section>

      <section ref={setSectionRef(1)} className="opacity-0 translate-y-10 transition-all duration-1000">
        <About />
      </section>

      <section ref={setSectionRef(2)} className="opacity-0 translate-y-10 transition-all duration-1000">
        <Skills />
      </section>

      <section ref={setSectionRef(3)} className="opacity-0 translate-y-10 transition-all duration-1000">
        <Experience />
      </section>

      <section ref={setSectionRef(4)} className="opacity-0 translate-y-10 transition-all duration-1000">
        <Projects />
      </section>

      <section ref={setSectionRef(5)} className="opacity-0 translate-y-10 transition-all duration-1000">
        <Contact />
      </section>
    </div>
  )
}
