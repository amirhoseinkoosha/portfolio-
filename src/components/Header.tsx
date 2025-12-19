import React, { useEffect, useState } from "react";
import { Menu, X, User, Code, FolderKanban, Mail } from "lucide-react";
import { motion } from "framer-motion";
import "../style/global.css";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      href: "#about",
      label: "About",
      icon: User,
      color1: "#3b82f6",
      color2: "#14b8a6",
    },
    {
      href: "#skills",
      label: "Skills",
      icon: Code,
      color1: "#8b5cf6",
      color2: "#ec4899",
    },
    {
      href: "#projects",
      label: "Projects",
      icon: FolderKanban,
      color1: "#f59e0b",
      color2: "#ef4444",
    },
    {
      href: "#contact",
      label: "Contact",
      icon: Mail,
      color1: "#10b981",
      color2: "#3b82f6",
    },
  ];
  const name = "AmirHoseinkoosha".split("");
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 pt-4 ${
        isScrolled ? "bg-background/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r  from-blue-500 to-teal-400 liquid-morph-element"
        >
          {name.map((letter, index) => (
            <motion.span
              key={index}
              className={`inline-block bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {letter}
            </motion.span>
          ))}
        </a>

        <ul className="nav-menu hidden md:flex">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <li
                key={link.href}
                style={
                  {
                    "--i": link.color1,
                    "--j": link.color2,
                  } as React.CSSProperties
                }
              >
                <a
                  href={link.href}
                  className="nav-link flex justify-center items-center"
                >
                  <Icon className="nav-icon" size={24} />
                  <span className="title text-secondary hover:text-primary transition-colors duration-300">
                    {link.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary z-50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-screen bg-background/95 flex flex-col justify-center items-center md:hidden"
      >
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl text-secondary hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
