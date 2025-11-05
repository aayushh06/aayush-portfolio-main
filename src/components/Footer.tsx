import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary/95" />
      
      <div className="section-container py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left: Bio */}
          <div className="space-y-2 animate-fade-in">
            <h3 className="text-xl font-bold">Aayush Sharma</h3>
            <p className="text-sm opacity-80">
              Data-driven AI & Automation Engineer building practical solutions
            </p>
          </div>

          {/* Center: Social Links */}
          <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <a
              href="https://github.com/aayushh06"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/aayushhsharma"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:aayush.as2311@gmail.com"
              className="p-3 rounded-lg bg-primary-foreground/10 hover:bg-accent hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Right: Copyright */}
          <div className="text-center md:text-right animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-sm opacity-80">
              © {currentYear} Aayush Sharma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
