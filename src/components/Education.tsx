import { GraduationCap, Sparkles } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.E. Computer Science Engineering",
      institution: "Chandigarh University, Mohali",
      period: "2021 – 2025",
      grade: "CGPA: 7.84",
    },
    {
      degree: "Senior Secondary",
      institution: "St. Xaviers High School",
      period: "2021",
      grade: "72.9%",
    },
    {
      degree: "Secondary",
      institution: "Shardayatan School",
      period: "2019",
      grade: "86.16%",
    },
  ];

  return (
    <section className="section-container bg-secondary/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-accent/20">
            <Sparkles className="w-4 h-4" />
            Education
          </div>
          <h2 className="font-bold text-primary mb-4">Academic Background</h2>
          <p className="text-muted-foreground text-lg">
            Building a strong foundation in computer science and engineering
          </p>
        </div>

        <div className="space-y-6 animate-fade-in">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-2 group-hover:text-accent transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground mb-1">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>{edu.period}</span>
                    <span className="text-accent font-medium">{edu.grade}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
