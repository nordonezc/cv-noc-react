import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md text-slate-100">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          CV-NOC
        </span>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium hover:text-blue-400 transition-colors">Home</a>
          <a href="#projects" className="text-sm font-medium hover:text-blue-400 transition-colors">Experience</a>
          <a href="#education" className="text-sm font-medium hover:text-blue-400 transition-colors">Education</a>
          <a href="#skills" className="text-sm font-medium hover:text-blue-400 transition-colors">Skills</a>
        </div>

        <Button variant="outline" size="sm" className="border-slate-700 hover:bg-slate-800 text-slate-100" asChild>
          <a href="mailto:nicolasoc.au@gmail.com">Contact Me</a>
        </Button>
      </div>
    </nav>
  );
}