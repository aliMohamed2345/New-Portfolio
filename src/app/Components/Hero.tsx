"use client";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaArrowDown,
} from "react-icons/fa";

const Hero = () => {
  const handleDownloadCV = async (src: string, fileName: string = "CV.pdf") => {
    try {
      const response = await fetch(src);
      const blob = await response.blob(); // Convert response to Blob
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-primary/20 to-slate-900 text-foreground relative overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-pulse" />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-10 left-1/3 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-16">
        <div className="animate-fade-in">
          <h1 className="text-3xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-muted-foreground to-primary bg-clip-text text-transparent">
            Ali Mohamed Ali
          </h1>
          <p className="text-md md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Front End Developer passionate about creating beautiful, functional
            web applications with modern technologies
          </p>

          <div className="flex flex-col-reverse sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full transition-all hover:scale-105 shadow-lg">
              View My Work
            </button>
            <button
              onClick={() =>
                handleDownloadCV(
                  `/Ali Mohamed Ali Mansor - Front End Developer.pdf`,
                  `Ali Mohamed Ali Mansor - Front End Developer.pdf`
                )
              }
              className="border-border flex items-center gap-2 bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-full transition-all duration-300"
            >
              <FaDownload className="w-4 h-4 mr-2" />
              Download CV
            </button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/aliMohamed2345"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-muted/20 rounded-full hover:bg-muted/40 transition-all duration-300 hover:scale-110 text-secondary-foreground"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ali-mohamed-mansor-204a44296/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-muted/20 rounded-full hover:bg-muted/40 transition-all duration-300 hover:scale-110 text-secondary-foreground"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:eloymohamedalimansor@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-muted/20 rounded-full hover:bg-muted/40 transition-all duration-300 hover:scale-110 text-secondary-foreground"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <button
          onClick={scrollToProjects}
          className="absolute -bottom-[150px] left-1/2 transform -translate-x-1/2 animate-bounce hover:scale-110 transition-transform"
        >
          <FaArrowDown size={32} className="text-purple-400" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
