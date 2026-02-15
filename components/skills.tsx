import { Badge } from "@/components/ui/badge"

const skills = [
  { name: "Java 21", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Python", category: "AI" },
  { name: "Docker", category: "Infra" },
  { name: "Kubernetes", category: "Infra" }
]

export default function Skills() {
  return (
    <section id="skills" className="py-12 flex flex-col items-center">
      <h3 className="text-2xl font-bold mb-6">Technical Stack</h3>
      <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
        {skills.map((skill) => (
          <Badge key={skill.name} variant="secondary" className="px-4 py-2 text-sm">
            {skill.name}
          </Badge>
        ))}
      </div>
    </section>
  )
}