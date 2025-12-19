import React from "react";
import AnimatedElement from "./AnimatedElement";

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
            <img
              src="src/assets/profile.png"
              alt="Developer Portrait"
              className="rounded-full w-full h-full object-cover object-top"
            />
          </div>
        </AnimatedElement>
        <div className="md:col-span-3">
          <AnimatedElement delay={0.2}>
            <p className="text-secondary text-lg mb-4">
              Hello! I'm Amirhosein Koosha — a frontend developer based in Iran,
              passionate about crafting clean, dynamic, and user-friendly
              digital experiences. My journey into web development began with
              HTML, CSS, and JavaScript, and soon evolved into working with
              modern frameworks like React, Next.js, and React Native. I enjoy
              building things from scratch and turning ideas into functional,
              elegant interfaces — whether it's a web app or a mobile
              experience. Currently, I'm part of a development team creating an
              interactive library app for children, where I focus on delivering
              smooth performance and intuitive UI/UX. I value clean,
              maintainable code, thoughtful design, and continuous learning.
              When I'm not coding, you'll probably find me exploring new
              technologies, improving my side projects, or enjoying a cup of
              coffee while listening to music
            </p>
          </AnimatedElement>
          <AnimatedElement delay={0.4}>
            <p className="text-secondary text-lg mb-6">
              I thrive on building things from the ground up and enjoy the
              process of bringing ideas to life in the browser. I am a strong
              advocate for clean code, great user experience, and high
              performance. When I'm not coding, I enjoy exploring new
              technologies, contributing to open source, or grabbing a cup of
              coffee.
            </p>
          </AnimatedElement>
        </div>
      </div>
    </div>
  </section>
);

export default About;
