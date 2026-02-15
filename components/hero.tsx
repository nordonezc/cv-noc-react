import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-20 text-center px-4">
      <div className="space-y-4">
        <h2 className="text-sm font-semibold tracking-widest text-blue-600 uppercase">
          Java Expert & AI Master Student
        </h2>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900">
          Building the future of <span className="text-blue-600">Enterprise AI</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600 md:text-xl">
          Senior Software Engineer specialized in Java/Spring, mastering AI to bridge the gap between legacy systems and modern intelligence.
        </p>
      </div>
      <div className="flex gap-4 mt-10">
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          View Projects
        </Button>
        <Button size="lg" variant="outline">
          Download CV
        </Button>
      </div>
    </section>
  )
}