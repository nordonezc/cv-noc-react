import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
  tags: string[];
}

export default function Education() {
  const filePath = path.join(process.cwd(), 'data/education.yml');
  
  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const data = yaml.load(fileContents) as { education: EducationItem[] };

    return (
      <section id="education" className="py-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Education
          </h2>
          <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.education?.map((item, index) => (
            <Card key={index} className="border-slate-200 hover:border-blue-300 transition-all shadow-sm">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    <GraduationCap className="size-6 text-blue-600" />
                  </div>
                  <Badge variant="outline" className="text-slate-500">
                    {item.period}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold mt-4 text-slate-900">
                  {item.degree}
                </CardTitle>
                <CardDescription className="font-medium text-blue-600">
                  {item.institution}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                  <MapPin className="size-4" />
                  <span>{item.location}</span>
                </div>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags?.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
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
    return null;
  }
}