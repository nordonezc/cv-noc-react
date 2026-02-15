import { Button } from "@/components/ui/button"
import { Download, Rocket } from "lucide-react"

export default function Hero() {
  return (
    <section id="home" className="min-h-[80vh] flex flex-col items-center justify-center py-20 text-center px-4 max-w-4xl mx-auto">
      <div className="space-y-6">
        <h2 className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase bg-blue-50 px-4 py-2 rounded-full w-fit mx-auto">
          Java Expert & AI Master Student
        </h2>
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 leading-tight">
          Building the future of <span className="text-blue-600">Enterprise AI</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 md:text-2xl font-medium leading-relaxed">
          Senior Software Engineer specialized in Java/Spring, mastering AI to bridge the gap between legacy systems and modern intelligence.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-12 w-full sm:w-auto">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-14 px-8 text-lg shadow-lg shadow-blue-200" asChild>
          <a href="#projects">
            <Rocket className="mr-2 size-5" /> View Projects
          </a>
        </Button>
        <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-2" asChild>
          <a href="/cv-noc-react/CV_Eng.pdf" download="Nicolas_Ordonez_CV.pdf">
            <Download className="mr-2 size-5" /> Download CV
          </a>
        </Button>
      </div>
    </section>
  )
}