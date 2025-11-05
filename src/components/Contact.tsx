import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Send, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const mailtoLink = `mailto:aayush.as2311@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your message will be sent via your default email application.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-container relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 backdrop-blur-sm border border-accent/20">
            <Sparkles className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="font-bold text-primary mb-4">Let's Work Together</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Feel free to reach out and let's discuss how I can help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 animate-fade-in">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:aayush.as2311@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <Mail size={20} />
                  </div>
                  <span>aayush.as2311@gmail.com</span>
                </a>
                <a
                  href="https://github.com/aayushh06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <Github size={20} />
                  </div>
                  <span>github.com/aayushh06</span>
                </a>
                <a
                  href="https://linkedin.com/in/aayushhsharma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors group"
                >
                  <div className="p-3 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300 group-hover:scale-110">
                    <Linkedin size={20} />
                  </div>
                  <span>linkedin.com/in/aayushhsharma</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-accent/50 transition-all duration-300">
              <h4 className="font-semibold text-lg mb-2">Response Time</h4>
              <p className="text-muted-foreground">
                I typically respond within 3 business days. For urgent inquiries, 
                please mention it in the subject line.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-card/80 backdrop-blur-sm border-border focus:border-accent transition-colors"
              />
            </div>
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-card/80 backdrop-blur-sm border-border focus:border-accent transition-colors"
              />
            </div>
            <div>
              <Input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-card/80 backdrop-blur-sm border-border focus:border-accent transition-colors"
              />
            </div>
            <div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="bg-card/80 backdrop-blur-sm border-border focus:border-accent transition-colors resize-none"
              />
            </div>
            <Button type="submit" size="lg" className="w-full btn-accent gap-2 shadow-lg hover:shadow-xl transition-shadow">
              <Send size={18} />
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
