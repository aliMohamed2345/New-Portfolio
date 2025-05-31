import React from "react";
import { skills } from "../data";
const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-muted/30 to-background transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className=" text-md sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I&apos;m a passionate front-end developer with 1+ years of
            experience creating beautiful, responsive user interfaces. I love
            turning designs into interactive experiences and bringing creative
            ideas to life through modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-lg border text-card-foreground hover:scale-105 opacity-80 hover:opacity-100 hover:transform-y-10 group hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-border shadow-md bg-card overflow-hidden cursor-pointer target:scale-80"
            >
              <div className="p-8 text-center relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-5 transition-all duration-300`}
                ></div>
                <div className="text-primary mb-4 group-hover:scale-110 transition-all duration-300 relative z-10">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3 relative z-10">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-background/10"></div>
          <div className="relative z-10 text-center sm:text-left">
            <h3 className="text-base sm:text-2xl font-bold mb-4">
              Let&apos;s Create Something Amazing Together
            </h3>
            <p className="text-primary-foreground/80 mb-6">
              I&apos;m always excited to work on new projects and collaborate
              with creative minds.
            </p>
            <a
              href={"#contact"}
              className="bg-background text-foreground px-8 py-3 rounded-full font-semibold hover:bg-background/90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
