// "use client"

// import { useState } from "react"
// import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
// import { submitContactForm } from "../actions/contact"

// export default function Contact() {
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [isSubmitted, setIsSubmitted] = useState(false)

//   const handleSubmit = async (formData: FormData) => {
//     setIsSubmitting(true)
//     try {
//       await submitContactForm(formData)
//       setIsSubmitted(true)
//       // Reset form
//       const form = document.getElementById("contact-form") as HTMLFormElement
//       form?.reset()
//     } catch (error) {
//       console.error("Error submitting form:", error)
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <section id="contact" className="py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
//           Get In{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Touch</span>
//         </h2>

//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Contact Info */}
//           <div className="space-y-8">
//             <div>
//               <h3 className="text-2xl font-semibold text-white mb-6">Let's Work Together</h3>
//               <p className="text-gray-400 text-lg leading-relaxed">
//                 I'm always interested in new opportunities and exciting projects. Whether you need a full-stack
//                 developer or German language instruction, let's discuss how we can work together.
//               </p>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-center gap-4 group">
//                 <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
//                   <Mail className="text-blue-400" size={24} />
//                 </div>
//                 <div>
//                   <p className="text-white font-medium">Email</p>
//                   <p className="text-gray-400">mussawirsoomro5@gmail.com</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 group">
//                 <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
//                   <Phone className="text-purple-400" size={24} />
//                 </div>
//                 <div>
//                   <p className="text-white font-medium">Phone</p>
//                   <p className="text-gray-400">+92 316 3610500</p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 group">
//                 <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
//                   <MapPin className="text-green-400" size={24} />
//                 </div>
//                 <div>
//                   <p className="text-white font-medium">Location</p>
//                   <p className="text-gray-400">Available Worldwide</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-slate-800/50 p-8 rounded-xl">
//             {isSubmitted ? (
//               <div className="text-center py-8">
//                 <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
//                 <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
//                 <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
//               </div>
//             ) : (
//               <form id="contact-form" action={handleSubmit} className="space-y-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="name" className="block text-white font-medium mb-2">
//                       Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       required
//                       className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
//                       placeholder="Your Name"
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-white font-medium mb-2">
//                       Email *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       required
//                       className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
//                       placeholder="your.email@example.com"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="subject" className="block text-white font-medium mb-2">
//                     Subject *
//                   </label>
//                   <input
//                     type="text"
//                     id="subject"
//                     name="subject"
//                     required
//                     className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
//                     placeholder="Project Discussion"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-white font-medium mb-2">
//                     Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     required
//                     rows={5}
//                     className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none"
//                     placeholder="Tell me about your project or how I can help you..."
//                   />
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <Send size={18} />
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
// import { submitContactForm } from "../actions/submitContactForm"
import { submitContactForm } from "../actions/contact"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [status, setStatus] = useState("")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    setIsSubmitting(true)

    try {
      const result = await submitContactForm(formData)
      if (result.success) {
        setIsSubmitted(true)
        setStatus("Message sent successfully!")
        // event.currentTarget.reset()
      } else {
        setStatus(result.message || "Something went wrong.")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setStatus("Error sending your message.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Get In{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Let's Work Together</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                I'm always interested in new opportunities and exciting projects. Whether you need a full-stack
                developer or German language instruction, let's discuss how we can work together.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">Email</p>
                  <p className="text-gray-400">mussawirsoomro5@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                  <Phone className="text-purple-400" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <p className="text-gray-400">+92 316 3610500</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <MapPin className="text-green-400" size={24} />
                </div>
                <div>
                  <p className="text-white font-medium">Location</p>
                  <p className="text-gray-400">Available Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 p-8 rounded-xl">
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="text-green-400 mx-auto mb-4" size={48} />
                <h3 className="text-xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">Name *</label>
                    <input type="text" id="name" name="name" required placeholder="Your Name"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">Email *</label>
                    <input type="email" id="email" name="email" required placeholder="your.email@example.com"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors" />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">Subject *</label>
                  <input type="text" id="subject" name="subject" required placeholder="Project Discussion"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors" />
                </div>

                <div>
                  <label htmlFor="reason" className="block text-white font-medium mb-2">Reason *</label>
                  <select name="reason" id="reason"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-blue-400 transition-colors">
                    <option value="buy-skills">Buy My Skills</option>
                    <option value="customize-website">Customize Website</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">Message *</label>
                  <textarea id="message" name="message" rows={5} required
                    placeholder="Tell me about your project or how I can help you..."
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors resize-none" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                {status && <p className="text-center text-sm text-gray-300 mt-4">{status}</p>}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
