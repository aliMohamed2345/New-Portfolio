"use client";
import { useState, useEffect } from "react";
import { FilterProjects, Projects, ProjectsProps } from "../data";
import { FaSearch, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";

const ProjectsSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] =
    useState<ProjectsProps[]>(Projects);

  useEffect(() => {
    let filtered = Projects;

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (project) =>
          project.Class.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.Title.toLowerCase().includes(searchLower) ||
          project.Description.toLowerCase().includes(searchLower) ||
          project.Technologies.some((tech) =>
            tech.toLowerCase().includes(searchLower)
          )
      );
    }

    setFilteredProjects(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <section
      id="projects"
      className="py-20 bg-background transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            modern web development and design.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-12 max-w-2xl mx-auto">
          <div className="relative flex-1">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              placeholder="Search projects, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-border focus:border-ring flex h-10 w-full rounded-md border bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
          </div>
          <div className="flex gap-2 justify-center sm:justify-start">
            {FilterProjects.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category.value)}
                className={`transition-all duration-300 ring-offset-background sm:text-sm text-xs font-bold sm:py-2 sm:px-4 py-1 px-2 rounded-md justify-center items-center h-10 inline-flex ${
                  selectedCategory === category.value
                    ? "bg-primary text-primary-foreground"
                    : "border-border text-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border rounded-lg border text-card-foreground shadow-sm"
            >
              <div className="relative overflow-hidden">
                <Image
                  loading="lazy"
                  width={300}
                  height={300}
                  src={project.Image}
                  alt={project.Title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-2">
                    <button>
                      <a
                        className="ring-offset-background text-sm font-medium py-2 px-3 bg-secondary whitespace-nowrap gap-2 rounded-md justify-center items-center h-9 flex hover:bg-primary transition-all hover:text-primary-foreground"
                        href={project.Github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="w-4 h-4 mr-1" />
                        Code
                      </a>
                    </button>
                    <button>
                      <a
                        className="ring-offset-background text-sm font-medium py-2 px-3 bg-secondary whitespace-nowrap gap-2 rounded-md justify-center items-center h-9 flex hover:bg-primary transition-all hover:text-primary-foreground"
                        href={project.Demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="w-4 h-4 mr-1" />
                        Live
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.Title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.Description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.Technologies.map((tech) => (
                    <button
                      onClick={() => setSearchTerm(tech)}
                      key={tech}
                      className="text-xs text-secondary-foreground font-semibold py-0.5 px-2.5 bg-secondary border-border border rounded-full inline-flex items-center justify-center transition-all hover:bg-primary hover:text-primary-foreground"
                    >
                      {tech}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              No projects found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
