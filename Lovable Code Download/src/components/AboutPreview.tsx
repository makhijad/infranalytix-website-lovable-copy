import { Target, Users, Sparkles, Trophy } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Target,
    title: "Mission Driven",
    description: "Making data accessible for businesses needing clarity and individuals seeking direction.",
  },
  {
    icon: Users,
    title: "Client Focused",
    description: "We develop relationships and collaborate to add long-term value to your business.",
  },
  {
    icon: Sparkles,
    title: "Innovation First",
    description: "Fostering creative thinking and discovering practical solutions to challenges.",
  },
  {
    icon: Trophy,
    title: "Results Oriented",
    description: "Committed to improving processes, products, and services continuously.",
  },
];

const AboutPreview = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Empowering with{" "}
              <span className="text-gradient">Data Excellence</span>
            </h2>
            
            <p className="text-muted-foreground text-lg mb-6">
              Infranalytix is a data-focused company built with a dual vision—to empower businesses 
              with analytics solutions and to empower individuals with industry-ready data skills.
            </p>
            
            <p className="text-muted-foreground mb-8">
              Our team brings hands-on experience in transforming data processes, building BI solutions, 
              and solving everyday business challenges. What we learn from real client projects becomes 
              the foundation of our training programs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about">
                <Button variant="default" size="lg">
                  Learn More About Us
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>

          {/* Right - Values Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 border border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                  <value.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
