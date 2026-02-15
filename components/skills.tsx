"use client"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const skills = [
  { name: "Java 21", size: "text-3xl", color: "text-blue-600" },
  { name: "Spring Boot", size: "text-2xl", color: "text-blue-500" },
  { name: "Artificial Intelligence", size: "text-3xl", color: "text-indigo-600" },
  { name: "Next.js", size: "text-xl", color: "text-slate-800" },
  { name: "Python", size: "text-2xl", color: "text-green-600" },
  { name: "AWS", size: "text-2xl", color: "text-orange-500" },
  { name: "Microservices", size: "text-lg", color: "text-slate-600" },
  { name: "GCP", size: "text-xl", color: "text-blue-400" },
  { name: "React", size: "text-2xl", color: "text-cyan-500" },
  { name: "Kubernetes", size: "text-lg", color: "text-blue-700" }
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 flex flex-col items-center overflow-hidden">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Technical Stack</h2>
        <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full"></div>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-10 max-w-4xl px-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.2, rotate: index % 2 === 0 ? 5 : -5 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`cursor-default font-bold ${skill.size} ${skill.color} filter drop-shadow-sm`}
          >
            {skill.name}
          </motion.div>
        ))}
      </div>
    </section>
  )
}