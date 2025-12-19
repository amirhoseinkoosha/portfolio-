import React from "react";
import AnimatedElement from "./AnimatedElement";
import { Mail, Github, Linkedin } from "lucide-react";
import "../style/global.css";

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
        <ul className="contact-icons">
          <li>
            <a href="mailto:amirhoseinkoosha@gmail.com">
              <Mail size={32} className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/amirhoseinkoosha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={32} className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/amirhoseinkoosha/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={32} className="icon" />
            </a>
          </li>
        </ul>
      </AnimatedElement>
    </div>
  </section>
);

export default Contact;
