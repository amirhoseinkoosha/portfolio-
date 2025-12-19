import React from "react";
import AnimatedElement from "./AnimatedElement";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact: React.FC = () => (
  <section id="contact" className="py-24 bg-card/50">
    <div className="container mx-auto px-6 text-center">
      <AnimatedElement>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <p className="text-secondary text-lg max-w-2xl mx-auto mb-8">
          I'm currently open to new opportunities and collaborations. Feel free
          to reach out if you have a project in mind or just want to connect!
        </p>
      </AnimatedElement>
      <AnimatedElement delay={0.2}>
        <div className="flex justify-center items-center space-x-6">
          <a
            href="mailto:your.email@example.com"
            className="text-secondary hover:text-accent transition-transform duration-300 hover:scale-110"
          >
            <Mail size={32} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-transform duration-300 hover:scale-110"
          >
            <Github size={32} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent transition-transform duration-300 hover:scale-110"
          >
            <Linkedin size={32} />
          </a>
        </div>
      </AnimatedElement>
    </div>
  </section>
);

export default Contact;

