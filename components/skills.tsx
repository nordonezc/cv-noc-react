import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { SkillCloud } from "./skill-cloud";

interface Skill {
  name: string;
  level: number;
}

export default function Skills() {
  const skillsPath = path.join(process.cwd(), 'data/skills.yml');
  let skills: Skill[] = [];

  try {
    const fileContents = fs.readFileSync(skillsPath, 'utf8');
    const data = yaml.load(fileContents) as { skills: Skill[] };
    skills = data.skills;
  } catch (error) {
    skills = []; 
  }

  return (
    <section id="skills" className="py-24 flex flex-col items-center overflow-hidden bg-slate-50/30">
      <div className="flex flex-col items-center mb-16 text-center px-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Technical & Soft Skills
        </h2>
        <div className="h-1 w-20 bg-blue-600 mt-4 rounded-full"></div>
        <p className="mt-4 text-slate-600 max-w-2xl">
          A cloud of my expertise, where size represents my proficiency and depth of experience.
        </p>
      </div>
      
      <SkillCloud skills={skills} />
    </section>
  );
}