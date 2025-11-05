import { BarChart3, Brain, Cog, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Data Analysis & Visualization",
      description:
        "Exploratory data analysis, interactive dashboards (Power BI / Tableau), and actionable business reports that drive informed decision-making.",
      gradient: "from-blue-500/20 to-cyan-500/20",
      iconColor: "bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI/ML Development",
      description:
        "Prototype models, data pipelines, inference scripts, and model deployment guidance for production-ready machine learning solutions.",
      gradient: "from-purple-500/20 to-pink-500/20",
      iconColor: "bg-purple-500/10 text-purple-500 group-hover:bg-purple-500 group-hover:text-white",
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Automation & Tooling",
      description:
        "Custom scripting, Chrome extensions, workflow automation, and practical tools that streamline repetitive tasks and boost productivity.",
      gradient: "from-orange-500/20 to-red-500/20",
      iconColor: "bg-orange-500/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="section-container relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-accent/20">
            <Sparkles className="w-4 h-4" />
            Services
          </div>
          <h2 className="font-bold text-primary mb-4">How I Can Help</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Specialized services tailored to turn your data and ideas into actionable results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12 animate-fade-in">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group p-8 rounded-xl bg-gradient-to-br ${service.gradient} backdrop-blur-sm border border-border hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl text-center`}
            >
              <div className={`inline-flex p-4 rounded-2xl mb-6 transition-all duration-300 ${service.iconColor}`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button onClick={scrollToContact} size="lg" className="btn-accent shadow-lg hover:shadow-xl transition-shadow">
            Request a Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
