"use client"
import { motion } from "framer-motion"

interface Skill {
  name: string;
  level: number;
}

export function SkillCloud({ skills }: { skills: Skill[] }) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-12 max-w-5xl px-6">
      {skills.map((skill, index) => {
        const sizeClass = skill.level >= 10 ? "text-5xl" : skill.level >= 9 ? "text-4xl" : "text-2xl";
        const colorClass = skill.level >= 9 ? "text-blue-700" : "text-blue-500/70";

        return (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ 
              scale: 1.15, 
              color: "#1d4ed8",
              transition: { duration: 0.2 } 
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`cursor-default font-extrabold tracking-tight ${sizeClass} ${colorClass} transition-colors duration-300`}
          >
            {skill.name}
          </motion.div>
        );
      })}
    </div>
  );
}