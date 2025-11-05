import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Experience = () => {
  const experience = {
    title: "Data Analytics Intern",
    company: "Paterson Securities Pvt. Ltd.",
    location: "Remote",
    period: "Apr 2025 – Jun 2025",
    responsibilities: [
      "Developed and backtested intraday VWAP-based trading strategy across 20+ NSE stocks",
      "Implemented data processing and PnL reporting using Python (Pandas, NumPy) and TA-Lib",
      "Validated profitability across multiple sectors including technology, banking, and energy",
    ],
    technologies: ["Python", "Pandas", "NumPy", "TA-Lib", "Financial Modeling"],
  };

  return (
    <section id="experience" className="section-container bg-secondary/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-accent/20">
            <Sparkles className="w-4 h-4" />
            Experience
          </div>
          <h2 className="font-bold text-primary mb-4">Professional Journey</h2>
          <p className="text-muted-foreground text-lg">
            Hands-on experience in data analytics and algorithmic trading
          </p>
        </div>

        <div className="relative animate-fade-in">
          {/* Timeline line with gradient */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent transform -translate-x-1/2" />

          <div className="relative">
            <div className="md:ml-auto md:w-1/2 md:pl-12">
              {/* Timeline dot with glow */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 shadow-lg">
                <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75" />
              </div>

              <div className="p-8 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ml-8 md:ml-0">
                <div className="space-y-4">
                  {/* Header */}
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      {experience.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} />
                        <span className="font-semibold">{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-3">
                    {experience.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-accent mt-1.5 font-bold">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {experience.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-accent/10 text-accent hover:bg-accent hover:text-white transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
