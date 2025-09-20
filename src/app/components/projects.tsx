"use client"

import { useState } from "react"
import { ExternalLink, Github, Smartphone, Globe } from "lucide-react"

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      title: "Furniture E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with Next.js, TypeScript, and Python backend. Features include user authentication, payment processing, and admin dashboard.",
      image: "/furniture.jpg?height=300&width=400",
      technologies: ["Next.js", "TypeScript"],
      category: "web",
      github: "#",
      live: "https://hackathon-3-flax.vercel.app/",
    },
    {
      title: "Crypto Coin Market",
      description:
        "Cross-platform mobile app built with Flutter and Dart. Includes real-time synchronization, offline support, and team collaboration features.",
      image: "/crypto.png?height=300&width=400",
      technologies: ["Next.js", "TypeScript","API Integration"],
      category: "web",
      github: "#",
      live: "https://crypto-coin-market.vercel.app/",
    },
    {
      title: "German Learning Platform",
      description:
        "Interactive language learning platform combining my teaching experience with web development skills. Features progress tracking and interactive exercises.",
      image: "/German.png?height=300&width=400",
      technologies: ["Next.js", "TypeScript", "Python"],
      category: "web",
      github: "#",
      live: "#",
    },
    {
      title: "Currency Converter",
      description:
        "Beautiful weather app with location-based forecasts, built using Flutter. Includes animated weather icons and 7-day forecasts.",
      image: "/currency.jpg?height=300&width=400",
      technologies: ["next.js", "TypeScript", "API Integration"],
      category: "web",
      github: "#",
      live: "https://currency-converter-1.streamlit.app/",
    },
{
      title: "Data Encryption Tool",
      description:
        "Beautiful weather app with location-based forecasts, built using Flutter. Includes animated weather icons and 7-day forecasts.",
      image: "/encryption.jpg?height=300&width=400",
      technologies: ["next.js", "TypeScript", "API Integration"],
      category: "web",
      github: "#",
      live: "https://currency-converter-1.streamlit.app/",
    },
    {
      title: "Number Guessing Game",
      description:
        "Beautiful weather app with location-based forecasts, built using Flutter. Includes animated weather icons and 7-day forecasts.",
      image: "/guess.jpg?height=300&width=400",
      technologies: ["next.js", "TypeScript", "API Integration"],
      category: "web",
      github: "#",
      live: "https://number-guess-game-1.streamlit.app//",
    },
    {
      title: "Password Generator",
      description:
        "Beautiful weather app with location-based forecasts, built using Flutter. Includes animated weather icons and 7-day forecasts.",
      image: "/generator.jpg?height=300&width=400",
      technologies: ["Python", "Streamlit", "API Integration"],
      category: "web",
      github: "#",
      live: "https://passwordgenerator-5.streamlit.app/",
    },
    {
      title: "Password Strength Checker",
      description:
        "My personal portfolio showcasing my skills, projects, and experience. Built with Next.js and Tailwind CSS.",
      image: "/strength.png?height=300&width=400",
      technologies: ["python", "Streamlit", "API Integration"],
      category: "web",
      github: "#",
      live: "https://passwordstrength-meter-1.streamlit.app/",
    },
    {
      title: "Quiz App",
      description:
        "My personal portfolio showcasing my skills, projects, and experience. Built with Next.js and Tailwind CSS.",
      image: "/quiz.png?height=300&width=400",
      technologies: ["Python", "Streamlit"],
      category: "web",
      github: "#",
      live: "https://quiz-app-2.streamlit.app/",
    },
    {
      title: "Text Analysis Tool",
      description:
        "My personal portfolio showcasing my skills, projects, and experience. Built with Next.js and Tailwind CSS.",
      image: "/text.jpg?height=300&width=400",
      technologies: ["Python", "Streamlit"],
      category: "web",
      github: "#",
      live: "https://text-analyzer-1.streamlit.app/",
    },
    {
      title: "Unit Converter",
      description:
        "My personal portfolio showcasing my skills, projects, and experience. Built with Next.js and Tailwind CSS.",
      image: "/unit.jpg?height=300&width=400",
      technologies: ["Python", "Streamlit"],
      category: "web",
      github: "#",
      live: "https://unit-converter-by.streamlit.app/",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-20 px-4 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Projects</span>
        </h2>

        {/* Filter buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {[
            { key: "all", label: "All Projects", icon: Globe },
            { key: "web", label: "Web Apps", icon: Globe },
            { key: "mobile", label: "Mobile Apps", icon: Smartphone },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                filter === key
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                  : "bg-slate-700 text-gray-300 hover:bg-slate-600"
              }`}
            >
              <Icon size={18} />
              {label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-slate-800/50 rounded-xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}