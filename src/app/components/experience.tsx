import { Calendar, MapPin, Award } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Gover House Sindh ",
      period: "2023 - Present",
      location: "Remote",
      description:
        "I’m a passionate Full Stack Developer with experience in building complete web solutions—from responsive front-end interfaces to robust back-end systems. I specialize in technologies like Next.js, TypeScript, Python, and Node.js.",
      technologies: ["Next.js", "TypeScript", "Python"],
    },
    {
      title: "German Language Teacher",
      company: "Mehrsprach Akademie Institut",
      period: "2024 - 2025",
      location: ["Online", "/Physical"],
      description:
        "Taught German language to students of various levels. Achieved B1 certification and helped over 50 students improve their German skills.",
      technologies: ["German B1", "Teaching", "Curriculum Development"],
    },
    {
      title: "Mobile App Developer",
      company: "NAVTT",
      period: "2025 - Present",
      location: "Hybrid",
      description:
        "As a Mobile App Developer, I create high-performance, cross-platform mobile applications with Flutter and Dart. My focus is on building smooth user experiences, clean UI, and efficient backend integration for real-world functionality.",
      technologies: ["Flutter", "Dart", "Java", "Firebase", "REST APIs"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 to-purple-400"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-4 border-slate-900 z-10"></div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                <div className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="text-blue-400" size={20} />
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  </div>

                  <p className="text-purple-400 font-medium mb-2">{exp.company}</p>

                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
