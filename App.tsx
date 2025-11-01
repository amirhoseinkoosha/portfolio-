import React, { useState, useEffect, useRef, Suspense } from 'react';
import { motion, useAnimation, useInView } from "https://esm.sh/framer-motion@10?external=react";
import { 
  Code,
  Eye,
  Github, 
  Linkedin, 
  Mail,
  Menu,
  X,
  ArrowDown,
  Cpu,
  PenTool,
  Server
} from "https://esm.sh/lucide-react?external=react";
import { Canvas, useFrame } from 'https://esm.sh/@react-three/fiber?external=react';
import { Points, PointMaterial } from 'https://esm.sh/@react-three/drei?external=react';
import * as random from 'https://esm.sh/maath/random/dist/maath-random.esm.js';

import type { Project, Skill } from './types';

// Mock Data
const skills: Skill[] = [
  { name: 'React', Icon: Code },
  { name: 'TypeScript', Icon: Code },
  { name: 'JavaScript', Icon: Code },
  { name: 'Tailwind CSS', Icon: PenTool },
  { name: 'Framer Motion', Icon: PenTool },
  { name: 'Node.js', Icon: Server },
  { name: 'Next.js', Icon: Server },
  { name: 'UX/UI Design', Icon: PenTool },
  { name: 'REST APIs', Icon: Cpu },
  { name: 'GraphQL', Icon: Cpu },
  { name: 'Git & GitHub', Icon: Code },
  { name: 'Three.js', Icon: Code },
];

const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce site with product listings, a shopping cart, and a secure checkout process, built with a modern tech stack.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'An interactive dashboard for visualizing complex datasets, featuring various chart types and real-time data updates.',
    tags: ['React', 'D3.js', 'TypeScript', 'Styled-Components'],
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Project Management Tool',
    description: 'A collaborative tool for teams to manage tasks, track progress, and communicate effectively, inspired by Trello and Asana.',
    tags: ['React', 'Firebase', 'Framer Motion', 'TypeScript'],
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    liveUrl: '#',
    sourceUrl: '#',
  },
  {
    title: 'Personal Blog',
    description: 'A content-focused personal blog with a clean design, markdown support, and static site generation for optimal performance.',
    tags: ['Next.js', 'Markdown', 'Tailwind CSS', 'Vercel'],
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
    liveUrl: '#',
    sourceUrl: '#',
  },
];

const AnimatedElement: React.FC<{ children: React.ReactNode; className?: string, delay?: number }> = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-sm' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          YourName
        </a>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
             <a key={link.href} href={link.href} className="text-secondary hover:text-primary transition-colors duration-300">{link.label}</a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary z-50">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-screen bg-background/95 flex flex-col justify-center items-center md:hidden"
      >
        <div className="flex flex-col items-center space-y-8">
           {navLinks.map(link => (
             <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-2xl text-secondary hover:text-primary transition-colors duration-300">{link.label}</a>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

const Stars = (props: any) => {
  const ref = useRef<any>();
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }));

  useFrame((state, delta) => {
    if(!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
    
    // Mouse interaction
    const targetX = state.mouse.x * 0.1;
    const targetY = state.mouse.y * 0.1;

    if (state.camera) {
        state.camera.position.x += (targetX - state.camera.position.x) * 0.02;
        state.camera.position.y += (targetY - state.camera.position.y) * 0.02;
        state.camera.lookAt(0, 0, 0);
    }
  });

  return (
    // FIX: Removed the <group> element and moved its rotation prop to the <Points> component to resolve TS errors.
    <Points ref={ref} positions={sphere} stride={3} frustumCulled rotation={[0, 0, Math.PI / 4]} {...props}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
};

const Hero: React.FC = () => {
  const text1 = "Building Digital Experiences".split(" ");
  const text2 = "that are Beautiful and Functional.".split(" ");
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <StarsCanvas />
        <div className="absolute inset-0 z-10 bg-grid-white/[0.05]"></div>
        <div className="container mx-auto px-6 text-center z-20">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.05, delayChildren: 0.2 }
                }
            }}
          >
           {text1.map((word, index) => (
               <motion.span key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }}} className="inline-block mr-3">
                   {word}
               </motion.span>
           ))}
           <br/>
           {text2.map((word, index) => (
               <motion.span key={index} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 }}} className="inline-block mr-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                   {word}
               </motion.span>
           ))}
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-secondary max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            I'm a passionate frontend developer specializing in creating modern, responsive, and user-friendly web applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
          >
            <a href="#projects" className="bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 inline-block">
              View My Work
            </a>
          </motion.div>
        </div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
            <a href="#about">
              <ArrowDown className="w-6 h-6 text-secondary"/>
            </a>
        </motion.div>
    </section>
  );
};

const About: React.FC = () => (
  <section id="about" className="py-24">
    <div className="container mx-auto px-6">
      <AnimatedElement>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-accent">Me</span>
        </h2>
      </AnimatedElement>
      <div className="grid md:grid-cols-5 gap-12 items-center">
        <AnimatedElement className="md:col-span-2">
            <div className="relative w-full max-w-sm mx-auto aspect-square rounded-full overflow-hidden p-2 bg-gradient-to-br from-blue-600 to-teal-500">
                 <img src="https://picsum.photos/seed/avatar/400/400" alt="Developer Portrait" className="rounded-full w-full h-full object-cover"/>
            </div>
        </AnimatedElement>
        <div className="md:col-span-3">
          <AnimatedElement delay={0.2}>
            <p className="text-secondary text-lg mb-4">
              Hello! I'm a frontend developer based in [Your City], with a deep passion for web technologies and a knack for turning complex problems into beautiful, intuitive interfaces. My journey into web development started years ago, and since then, I've been hooked on the endless possibilities of creating for the web.
            </p>
          </AnimatedElement>
          <AnimatedElement delay={0.4}>
            <p className="text-secondary text-lg mb-6">
              I thrive on building things from the ground up and enjoy the process of bringing ideas to life in the browser. I am a strong advocate for clean code, great user experience, and high performance. When I'm not coding, I enjoy exploring new technologies, contributing to open source, or grabbing a cup of coffee.
            </p>
          </AnimatedElement>
        </div>
      </div>
    </div>
  </section>
);

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
              <skill.Icon className="w-12 h-12 text-accent mb-4"/>
              <p className="font-semibold text-center">{skill.name}</p>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </div>
  </section>
);

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
                <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"/>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-accent text-white p-3 rounded-full hover:bg-accent-hover transition-colors">
                      <Eye size={24}/>
                    </a>
                  )}
                  {project.sourceUrl && (
                    <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="bg-primary text-background p-3 rounded-full hover:bg-secondary transition-colors">
                      <Code size={24}/>
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-accent/20 text-accent text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedElement>
        ))}
      </div>
    </div>
  </section>
);

const Contact: React.FC = () => (
  <section id="contact" className="py-24 bg-card/50">
    <div className="container mx-auto px-6 text-center">
      <AnimatedElement>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto mb-8">
          I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a project in mind or just want to connect!
        </p>
      </AnimatedElement>
      <AnimatedElement delay={0.2}>
        <div className="flex justify-center items-center space-x-6">
          <a href="mailto:your.email@example.com" className="text-secondary hover:text-accent transition-transform duration-300 hover:scale-110"><Mail size={32}/></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-transform duration-300 hover:scale-110"><Github size={32}/></a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-transform duration-300 hover:scale-110"><Linkedin size={32}/></a>
        </div>
      </AnimatedElement>
    </div>
  </section>
);

const Footer: React.FC = () => (
    <footer className="py-6 border-t border-white/10">
        <div className="container mx-auto px-6 text-center text-secondary">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
    </footer>
);


export default function App() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}