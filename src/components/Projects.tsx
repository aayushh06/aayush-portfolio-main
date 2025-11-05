import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import megastockImage from "@/assets/project-megastock.jpg";
import objectDetectionImage from "@/assets/project-object-detection.jpg";
import sudokuImage from "@/assets/project-sudoku-solver.jpg";

const Projects = () => {
  const projects = [
    {
      title: "MegaStock",
      subtitle: "Chrome Extension",
      description:
        "Real-time stock monitoring extension powered by Yahoo Finance API. Features secure architecture, cross-browser compatibility, and live market data updates.",
      image: megastockImage,
      technologies: ["JavaScript", "Chrome API", "Yahoo Finance", "REST API"],
      github: "https://github.com/aayushh06",
      demo: "#",
    },
    {
      title: "Multi-object Classification",
      subtitle: "Computer Vision",
      description:
        "Real-time object detection system using YOLOv5 and OpenCV with webcam integration. Implements data augmentation techniques for improved accuracy.",
      image: objectDetectionImage,
      technologies: ["Python", "OpenCV", "YOLOv5", "Deep Learning"],
      github: "https://github.com/aayushh06",
      demo: null,
    },
    {
      title: "Sudoku Solver",
      subtitle: "Algorithm Visualization",
      description:
        "Intelligent sudoku solver with backtracking algorithm and OpenCV integration. Features webcam input, real-time visualization, and algorithmic validation.",
      image: sudokuImage,
      technologies: ["Python", "OpenCV", "Backtracking", "Computer Vision"],
      github: "https://github.com/aayushh06",
      demo: null,
    },
  ];

  return (
    <section id="projects" className="section-container bg-secondary/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-accent/20">
            <Sparkles className="w-4 h-4" />
            Portfolio
          </div>
          <h2 className="font-bold text-primary mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select projects showcasing real-time systems, ML, and automation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-accent/50 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover overlay with links */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="shadow-lg backdrop-blur-sm"
                    asChild
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      className="btn-accent shadow-lg"
                      asChild
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-accent font-medium">{project.subtitle}</p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
