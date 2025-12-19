import { Code, PenTool, Server, Cpu } from "lucide-react";
import type { Skill } from "../types";

export const skills: Skill[] = [
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
