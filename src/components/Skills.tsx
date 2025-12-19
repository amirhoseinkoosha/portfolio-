import React from "react";
import AnimatedElement from "./AnimatedElement";
import { Code, PenTool, Server, Cpu } from "lucide-react";
import type { Skill } from "../types";

const skills: Skill[] = [
  { name: "React", Icon: Code },
  { name: "TypeScript", Icon: Code },
  { name: "JavaScript", Icon: Code },
  { name: "Tailwind CSS", Icon: PenTool },
  { name: "Framer Motion", Icon: PenTool },
  { name: "Node.js", Icon: Server },
  { name: "Next.js", Icon: Server },
  { name: "UX/UI Design", Icon: PenTool },
  { name: "REST APIs", Icon: Cpu },
  { name: "GraphQL", Icon: Cpu },
  { name: "Git & GitHub", Icon: Code },
  { name: "Three.js", Icon: Code },
];

const Skills: React.FC = () => (
  <section id="skills" className="py-24 bg-card/50">
    <div className="container mx-auto px-6">
      <AnimatedElement>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-accent">Skills</span>
        </h2>
      </AnimatedElement>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, index) => (
          <AnimatedElement key={skill.name} delay={index * 0.1}>
            <div className="bg-card border border-white/10 rounded-lg p-6 flex flex-col items-center justify-center aspect-square transition-all duration-300 hover:border-accent hover:-translate-y-2">
              <skill.Icon className="w-12 h-12 text-accent mb-4" />
              <p className="font-semibold text-center">{skill.name}</p>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;

