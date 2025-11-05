import { Code, Database, BarChart3, Cpu, Terminal, Cloud, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming",
      skills: ["Python", "C/C++", "Java", "JavaScript"],
      color: "from-blue-500/20 to-blue-600/20",
      iconBg: "bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Tools",
      skills: ["SQL", "Excel", "Pandas", "NumPy"],
      color: "from-green-500/20 to-green-600/20",
      iconBg: "bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Visualization",
      skills: ["Power BI", "Tableau", "Matplotlib"],
      color: "from-purple-500/20 to-purple-600/20",
      iconBg: "bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "ML & Computer Vision",
      skills: ["OpenCV", "YOLOv5", "TA-Lib", "Hugging Face"],
      color: "from-orange-500/20 to-orange-600/20",
      iconBg: "bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white",
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Development",
      skills: ["Git", "Jupyter", "Google Colab", "VS Code"],
      color: "from-pink-500/20 to-pink-600/20",
      iconBg: "bg-pink-500/10 text-pink-500 group-hover:bg-pink-500 group-hover:text-white",
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Platforms & OS",
      skills: ["Windows", "Linux", "GitHub", "Chrome APIs"],
      color: "from-cyan-500/20 to-cyan-600/20",
      iconBg: "bg-cyan-500/10 text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white",
    },
  ];

  return (
    <section id="skills" className="section-container relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-10 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      
      <div className="relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-accent/20">
            <Sparkles className="w-4 h-4" />
            Skills & Tools
          </div>
          <h2 className="font-bold text-primary mb-4">Technical Stack</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A diverse toolkit for building data-driven solutions, from analysis to deployment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group p-6 rounded-xl bg-gradient-to-br ${category.color} backdrop-blur-sm border border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg transition-all duration-300 ${category.iconBg}`}>
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="bg-background/80 backdrop-blur-sm hover:bg-accent/20 hover:text-accent transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
