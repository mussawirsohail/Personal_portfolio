"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Github, Link, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const [text, setText] = useState("")
  const fullText = "Full-Stack Developer & German Teacher"

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      setText(fullText.slice(0, index))
      index++
      if (index > fullText.length) {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-bounce delay-1000"></div>
      </div>

      {/* Developer Image */}
      <div className="relative z-10 mb-8">
        <div className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-400 to-purple-400 p-1 bg-gradient-to-r from-blue-400 to-purple-400">
          <div className="w-full h-full rounded-full overflow-hidden bg-slate-800">
            <img
              src="/personal2.png"
              alt="Developer Profile"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 animate-fade-in">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Mussawir Sohail
            </span>
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 h-8">
            {text}
            <span className="animate-pulse">|</span>
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating innovative web and mobile applications with modern technologies. Also experienced in
          teaching German language with B1 certification.
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/mussawirsohail"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
          >
            <Github size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/mussawir-sohail-7602b6262/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
          >
            <Linkedin size={28} />
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-white transform hover:scale-110 transition-all duration-300"
          >
            <Mail size={28} />
          </a>
        </div>

        <button
          onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
          className="animate-bounce"
        >
          <ChevronDown size={32} className="text-white/70 hover:text-white transition-colors" />
        </button>
      </div>
    </section>
  )
}