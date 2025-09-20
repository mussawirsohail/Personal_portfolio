import { Code, Globe, GraduationCap } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Hello! I'm Mussawir Sohail, a passionate Web & App Developer and certified German Language Instructor with a strong commitment to continuous learning and impactful work in both tech and education.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in building modern, scalable applications using Next.js, TypeScript, Python, and Dart, with a focus on performance, security, and user experience. I'm actively sharpening my skills through top-tier programs such as GIAIC, NAVTTC, and recently completed the Cybersecurity Fundamentals course from Bano Qabil, which has deepened my understanding of digital safety and system protection.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              In parallel with my tech career, I hold a German B1 Certificate and work as a part-time German language instructor, helping students prepare for Goethe exams (A1–B1) and develop real-life communication skills. I’m passionate about teaching and believe in empowering others through knowledge.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether it's coding a secure web app, teaching a new tense in German, or collaborating on innovative ideas, I bring energy, empathy, and excellence to everything I do.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm">Problem Solver</span>
              <span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm">Team Player</span>
              <span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm">Quick Learner</span>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
              <Code className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-2">Full-Stack Development</h3>
              <p className="text-gray-400">Building end-to-end solutions with modern technologies</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
              <Globe className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-2">Mobile Development</h3>
              <p className="text-gray-400">Creating cross-platform mobile applications</p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105">
              <GraduationCap className="text-green-400 mb-4" size={32} />
              <h3 className="text-xl font-semibold text-white mb-2">German Teaching</h3>
              <p className="text-gray-400">2 years experience with B1 certification</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
