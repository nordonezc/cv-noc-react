import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-bold text-blue-600">NOC</span>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Home
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Experience
          </a>
          <a href="#education" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Education
          </a>
          <a href="#skills" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Skills
          </a>
        </div>

        <Button variant="default" size="sm" asChild>
          <a href="mailto:nicolasoc.au@gmail.com">Contact Me</a>
        </Button>
      </div>
    </nav>
  );
}