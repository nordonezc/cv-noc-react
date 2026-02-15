import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Building2, Users } from "lucide-react"; // Iconos para dar dinamismo

interface Project {
  title: string;
  company: string;
  role: string;
  country : string;
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
      <section id="projects" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Professional Experience
          </h2>
          <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {data.projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm hover:shadow-md">
              <CardHeader className="bg-slate-50/50 pb-4">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-slate-900">
                      {project.role}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-blue-600 font-medium mt-1">
                      <Building2 className="size-4" />
                      <span>{project.company} • {project.country}</span>
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <Calendar className="size-4" />
                      <span>{project.start_date} — {project.end_date}</span>
                    </div>
                    {project.team_size !== "Not Specified" && (
                      <div className="flex items-center gap-2 mt-1">
                        <Users className="size-4" />
                        <span>Team: {project.team_size}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-6">
                <CardDescription className="text-base text-slate-700 mb-4">
                  {project.description}
                </CardDescription>
                
                <ul className="list-disc list-inside space-y-2 text-sm text-slate-600 mb-6 ml-2">
                  {project.responsibilities.map((resp, i) => (
                    <li key={i} className="leading-relaxed">{resp}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary" 
                      className="bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error loading YAML:", error);
    return (
      <div className="text-center py-20">
        <p className="text-red-500 font-mono">CRITICAL_ERROR: Failed to parse professional data.</p>
      </div>
    );
  }
}