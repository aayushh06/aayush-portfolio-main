import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile-aayush.jpg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20,
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const roles = ["Data Analyst", "ML Engineer", "Automation Developer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + mousePosition.x}% ${50 + mousePosition.y}%, hsl(var(--accent) / 0.2) 0%, transparent 50%)`,
          }}
        />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-6 animate-fade-in-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-accent/20 via-accent/10 to-transparent backdrop-blur-sm border border-accent/20 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-accent">Available for Opportunities</span>
            </div>
            
            <div>
              <h1 className="font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-accent">
                Aayush Sharma
              </h1>
              <div className="h-12 md:h-16 flex items-center">
                <h2 className="text-2xl md:text-3xl font-semibold">
                  <span className="text-muted-foreground">I'm a </span>
                  <span className="text-gradient inline-block animate-fade-in">
                    {roles[currentRole]}
                  </span>
                </h2>
              </div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              B.E. Computer Science (Chandigarh University). Building{" "}
              <span className="text-primary font-semibold">data pipelines</span>,{" "}
              <span className="text-primary font-semibold">ML solutions</span>, and{" "}
              <span className="text-primary font-semibold">automation tools</span>{" "}
              that turn signals into decisions.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 py-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">1</div>
                <div className="text-sm text-muted-foreground">Internship</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">3+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">10+</div>
                <div className="text-sm text-muted-foreground">Technologies</div>
              </div>
            </div>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("#projects")}
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Projects
                  <ChevronDown className="w-4 h-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="group relative border-2 border-accent/20 backdrop-blur-sm hover:border-accent hover:bg-accent/10 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  Contact Me
                  <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </span>
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-4">
              <a
                href="https://github.com/aayushh06"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                <div className="absolute inset-0 bg-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://linkedin.com/in/aayushhsharma"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                <div className="absolute inset-0 bg-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="mailto:aayush.as2311@gmail.com"
                className="group relative p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                <div className="absolute inset-0 bg-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
          
          {/* Right: Profile Image */}
          <div className="flex justify-center animate-fade-in-right">
            <div className="relative group">
              {/* Animated gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-primary to-accent opacity-75 blur-xl animate-spin-slow" 
                   style={{ animationDuration: "8s" }} />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-50 blur-2xl animate-spin-slow" 
                   style={{ animationDuration: "12s", animationDirection: "reverse" }} />
              
              {/* Glassmorphic frame */}
              <div className="relative p-2 rounded-full bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm">
                <div className="relative rounded-full overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Aayush Sharma — portrait"
                    className="relative rounded-full w-72 h-72 md:w-80 md:h-80 object-cover border-4 border-accent/30 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    style={{
                      transform: `perspective(1000px) rotateY(${mousePosition.x / 10}deg) rotateX(${-mousePosition.y / 10}deg)`,
                    }}
                  />
                  {/* Shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 px-4 py-2 bg-accent text-accent-foreground rounded-full shadow-lg backdrop-blur-sm border-2 border-background animate-bounce"
                   style={{ animationDuration: "3s" }}>
                <span className="text-sm font-semibold">Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors animate-bounce group"
        aria-label="Scroll to content"
      >
        <span className="text-sm font-medium">Scroll</span>
        <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
      </button>
    </section>
  );
};

export default Hero;
