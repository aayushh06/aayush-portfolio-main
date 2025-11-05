import { Button } from "@/components/ui/button";
import { Download, Code2, Database, Lightbulb, Sparkles } from "lucide-react";

const About = () => {
  const capabilities = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Full-Stack Development",
      description: "Building end-to-end solutions with clean, maintainable code",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Engineering",
      description: "Designing robust pipelines and analytical frameworks",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Translating complex challenges into practical solutions",
    },
  ];

  return (
    <section id="about" className="section-container relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="grid md:grid-cols-2 gap-12 items-start relative z-10">
        {/* Left: Bio */}
        <div className="space-y-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold backdrop-blur-sm border border-accent/20">
            <Sparkles className="w-4 h-4" />
            About Me
          </div>
          
          <h2 className="font-bold text-primary">
            Building Solutions at the Intersection of Data & AI
          </h2>
          
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I am a recently graduated student from Chandigarh University passionate 
              about data-driven problem solving, AI applications, and building practical 
              automation tools. I combine analytical skills with technical precision to 
              develop projects that bridge data and decision-making.
            </p>
            
            <p>
              My approach focuses on end-to-end solutions, reproducible code, and clear 
              visualizations. I believe in building systems that are not just functional, 
              but maintainable and scalable.
            </p>
            
            <p>
              Whether it's backtesting trading strategies, implementing real-time object 
              detection, or creating browser extensions, I thrive on turning complex 
              requirements into elegant solutions.
            </p>
          </div>
          
          <Button className="btn-accent gap-2 shadow-lg hover:shadow-xl transition-shadow">
            <Download size={18} />
            Download Resume
          </Button>
        </div>
        
        {/* Right: Capabilities */}
        <div className="space-y-6 animate-fade-in-right">
          <h3 className="text-2xl font-semibold text-primary">Core Capabilities</h3>
          
          <div className="space-y-4">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                    {capability.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 group-hover:text-accent transition-colors">{capability.title}</h4>
                    <p className="text-muted-foreground">{capability.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
