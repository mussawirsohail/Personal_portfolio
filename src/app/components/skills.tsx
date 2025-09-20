"use client"

import { useState, useEffect, useRef } from "react"

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set())
  const [animatedPercentages, setAnimatedPercentages] = useState<Record<string, number>>({})
  const skillsRef = useRef<HTMLDivElement>(null)

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "TypeScript", level: 90, color: "from-blue-400 to-blue-600" },
        { name: "Next.js", level: 85, color: "from-gray-400 to-gray-600" },
        { name: "React", level: 88, color: "from-cyan-400 to-cyan-600" },
        { name: "Flutter", level: 80, color: "from-blue-500 to-blue-700" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Python", level: 85, color: "from-yellow-400 to-yellow-600" },
        { name: "Node.js", level: 82, color: "from-green-400 to-green-600" },
        { name: "Dart", level: 80, color: "from-blue-400 to-blue-600" },
        // { name: "PostgreSQL", level: 75, color: "from-blue-500 to-blue-700" },
      ],
    },
    {
      title: "Languages",
      skills: [
        { name: "German (B1)", level: 80, color: "from-red-400 to-red-600" },
        { name: "English", level: 85, color: "from-blue-400 to-blue-600" },
        { name: "Teaching", level: 80, color: "from-purple-400 to-purple-600" },
      ],
    },
  ]

  // Animate percentage counting
  const animatePercentage = (skillId: string, targetLevel: number) => {
    let current = 0
    const increment = targetLevel / 60 // 60 frames for smooth animation
    const timer = setInterval(() => {
      current += increment
      if (current >= targetLevel) {
        current = targetLevel
        clearInterval(timer)
      }
      setAnimatedPercentages((prev) => ({
        ...prev,
        [skillId]: Math.round(current),
      }))
    }, 16) // ~60fps
  }

  // Intersection Observer for skills
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillElement = entry.target as HTMLElement
            const skillId = skillElement.dataset.skillId
            if (skillId && !visibleSkills.has(skillId)) {
              setVisibleSkills((prev) => new Set([...Array.from(prev), skillId]))

              // Start percentage animation
              const skill = skillCategories.flatMap((cat) => cat.skills).find((s) => `${s.name}` === skillId)

              if (skill) {
                setTimeout(() => {
                  animatePercentage(skillId, skill.level)
                }, 300)
              }
            }
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    // Observe all skill elements
    const skillElements = document.querySelectorAll("[data-skill-id]")
    skillElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // Staggered skill appearance
  const getSkillDelay = (categoryIndex: number, skillIndex: number) => {
    const totalPreviousSkills = skillCategories.slice(0, categoryIndex).reduce((sum, cat) => sum + cat.skills.length, 0)
    return (totalPreviousSkills + skillIndex) * 200
  }

  return (
    <section id="skills" className="py-20 px-4 bg-slate-800/30" ref={skillsRef}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.title} className="space-y-6">
              <h3 className="text-2xl font-semibold text-white text-center mb-8">{category.title}</h3>

              {category.skills.map((skill, skillIndex) => {
                const skillId = skill.name
                const isVisible = visibleSkills.has(skillId)
                const animatedLevel = animatedPercentages[skillId] || 0
                const delay = getSkillDelay(categoryIndex, skillIndex)

                return (
                  <div
                    key={skill.name}
                    data-skill-id={skillId}
                    className={`group transition-all duration-700 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${delay}ms` : "0ms",
                    }}
                    onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm font-mono">{isVisible ? `${animatedLevel}%` : "0%"}</span>
                    </div>

                    <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform ${
                          hoveredSkill === `${categoryIndex}-${skillIndex}` ? "scale-105 shadow-lg" : ""
                        } ${isVisible ? "animate-pulse" : ""}`}
                        style={{
                          width: isVisible ? `${animatedLevel}%` : "0%",
                          transition: "width 1.5s ease-out, transform 0.3s ease",
                          transitionDelay: isVisible ? `${delay + 300}ms` : "0ms",
                        }}
                      />
                    </div>

                    {/* Skill level indicator */}
                    {isVisible && (
                      <div className="mt-2 flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                              i < Math.ceil(skill.level / 20) ? `bg-gradient-to-r ${skill.color}` : "bg-slate-600"
                            }`}
                            style={{
                              animationDelay: `${delay + 500 + i * 100}ms`,
                              animation: i < Math.ceil(skill.level / 20) ? "fadeIn 0.5s ease-out forwards" : "none",
                              opacity: i < Math.ceil(skill.level / 20) ? 1 : 0.3,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Years Experience", value: "3+" },
              { label: "Projects Completed", value: "25+" },
              { label: "Technologies", value: "10+" },
              { label: "Happy Clients", value: "15+" },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className={`bg-slate-800/50 p-4 rounded-lg transition-all duration-700 ${
                  visibleSkills.size > 0 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: `${1000 + index * 200}ms`,
                }}
              >
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
