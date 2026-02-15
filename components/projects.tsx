import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building2, Users, MapPin } from "lucide-react";

interface Project {
  title: string;
  company: string;
  role: string;
  country: string;
  start_date: string;
  end_date: string;
  description: string;
  responsibilities: string[];
  tools: string[];
  team_size: string;
  tags: string[];
  link: string;
}

export default function Projects() {
  const filePath = path.join(process.cwd(), 'data/projects.yml');
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContents) as { projects: Project[] };

    return (
      <section 
        id="projects" 
        className="relative py-24 px-4 bg-slate-950 overflow-hidden"
        style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(2, 6, 23, 0.98), rgba(2, 6, 23, 0.95)), url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1932')" 
        }}
      >
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Professional Experience
            </h2>
            <div className="h-1 w-20 bg-blue-500 mt-4 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {data.projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-slate-900/40 border-slate-800 backdrop-blur-md hover:border-blue-500/50 transition-all duration-500 shadow-2xl group"
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.role}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-blue-400 font-medium mt-1">
                        <Building2 className="size-4" />
                        <span>{project.company} • {project.country}</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end text-sm text-slate-400">
                      <div className="flex items-center gap-2 bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">
                        <Calendar className="size-4" />
                        <span>{project.start_date} — {project.end_date}</span>
                      </div>
                      {project.team_size !== "Not Specified" && (
                        <div className="flex items-center gap-2 mt-2 mr-2">
                          <Users className="size-4" />
                          <span>Team: {project.team_size}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-2">
                  <CardDescription className="text-base text-slate-300 mb-6 leading-relaxed italic">
                    {project.description}
                  </CardDescription>
                  
                  <ul className="space-y-3 text-sm text-slate-400 mb-8 ml-1">
                    {project.responsibilities?.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.tags?.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="bg-blue-900/30 text-blue-300 border-blue-800/50 hover:bg-blue-800/50 transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error loading YAML:", error);
    return (
      <div className="text-center py-20 bg-slate-950">
        <p className="text-red-400 font-mono">CRITICAL_ERROR: Failed to parse professional data.</p>
      </div>
    );
  }
}