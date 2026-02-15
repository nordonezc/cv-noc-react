"use client"
import { motion, Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Rocket } from "lucide-react"
import { PdfViewer } from "./pdf-viewer"

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, // Ease-out suave
    },
  }

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col items-center justify-center py-20 text-center px-4 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "linear-gradient(to bottom, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.85)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072')" 
      }}
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto z-10"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-sm font-bold tracking-[0.2em] text-blue-600 uppercase bg-blue-50/80 backdrop-blur-sm px-4 py-2 rounded-full w-fit mx-auto mb-6"
        >
          Java Expert & AI Master Student
        </motion.h2>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[1.1] mb-8"
        >
          Building the future of <br />
          <span className="text-blue-600 inline-block">Enterprise AI</span>
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mx-auto text-lg text-slate-600 md:text-2xl font-medium leading-relaxed mb-12"
        >
          Senior Software Engineer specialized in Java/Spring, mastering AI to bridge the gap between legacy systems and modern intelligence.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 h-14 px-8 text-lg shadow-lg shadow-blue-200 transition-all hover:scale-105" asChild>
            <a href="#projects">
              <Rocket className="mr-2 size-5" /> View Projects
            </a>
          </Button>
          
          <PdfViewer />
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-slate-50 to-transparent" />
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2 }}
        className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-200 rounded-full blur-[120px] pointer-events-none"
      />
    </section>
  )
}