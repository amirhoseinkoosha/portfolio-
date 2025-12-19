import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import StarsCanvas from "./StarsCanvas";

const Hero: React.FC = () => {
  const text1 = "Building digital experiences .".split(" ");
  const text2 = "that are Beautiful and Functional.".split(" ");

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
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
              transition: { staggerChildren: 0.05, delayChildren: 0.2 },
            },
          }}
        >
          <iframe
            src="https://my.spline.design/genkubgreetingrobot-rdbg0AoI5ebpPP1AJGAVgFd7/"
            frameborder="0"
            width="300px"
            height="300px"
            className="mx-auto"
          ></iframe>
          {text1.map((word, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
          <br />
          {text2.map((word, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="inline-block mr-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
            >
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
          I'm a passionate frontend developer specializing in creating modern,
          responsive, and user-friendly web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        >
          <a
            href="#projects"
            className="bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 inline-block"
          >
            View My Work
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 2.2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <a href="#about">
          <ArrowDown className="w-6 h-6 text-secondary" />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

