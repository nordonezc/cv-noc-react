import Education from "@/components/education";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";


export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Hero />
      <Projects />
      <Education />
      <Skills/>
    </div>
  );
}