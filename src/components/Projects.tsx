import React from "react";
import AnimatedElement from "./AnimatedElement";
import { Eye, Code } from "lucide-react";
import type { Project } from "../types";

const projects: Project[] = [
  {
    title: "Gonbad Kabud Application",
    description: "Literacy platform",
    tags: ["React native", "TypeScript"],
    imageUrl: "https://picsum.photos/seed/project1/600/400",
    liveUrl: "#",
    sourceUrl: "#",
  },
  {
    title: "Meerkat Application",
    description: "adaptive learning",
    tags: ["React native", "TypeScript"],
    imageUrl: "https://picsum.photos/seed/project2/600/400",
    liveUrl: "#",
    sourceUrl: "#",
  },
  // {
  //   title: "Project Management Tool",
  //   description:
  //     "A collaborative tool for teams to manage tasks, track progress, and communicate effectively, inspired by Trello and Asana.",
  //   tags: ["React", "Firebase", "Framer Motion", "TypeScript"],
  //   imageUrl: "https://picsum.photos/seed/project3/600/400",
  //   liveUrl: "#",
  //   sourceUrl: "#",
  // },
  // {
  //   title: "Personal Blog",
  //   description:
  //     "A content-focused personal blog with a clean design, markdown support, and static site generation for optimal performance.",
  //   tags: ["Next.js", "Markdown", "Tailwind CSS", "Vercel"],
  //   imageUrl: "https://picsum.photos/seed/project4/600/400",
  //   liveUrl: "#",
  //   sourceUrl: "#",
  // },
];

const Projects: React.FC = () => (
  <section id="projects" className="py-24">
    <div className="container mx-auto px-6">
      <AnimatedElement>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-accent">Projects</span>
        </h2>
      </AnimatedElement>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <AnimatedElement key={project.title} delay={index * 0.2}>
            <div className="bg-card border border-white/10 rounded-lg overflow-hidden group">
              <div className="overflow-hidden relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-accent text-white p-3 rounded-full hover:bg-accent-hover transition-colors"
                    >
                      <Eye size={24} />
                    </a>
                  )}
                  {/* {project.sourceUrl && (
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary text-background p-3 rounded-full hover:bg-secondary transition-colors"
                    >
                      <Code size={24} />
                    </a>
                  )} */}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>
                {/* <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-accent/20 text-accent text-sm font-medium px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div> */}
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
