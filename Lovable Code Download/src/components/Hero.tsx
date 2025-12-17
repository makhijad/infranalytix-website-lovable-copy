import { ArrowRight, Play, BarChart3, Users, Award } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const stats = [
    { icon: Users, value: "10,000+", label: "Students Trained" },
    { icon: BarChart3, value: "500+", label: "Projects Delivered" },
    { icon: Award, value: "95%", label: "Placement Rate" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-16">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 data-grid opacity-30" />
      
      {/* Floating elements */}
      <div className="absolute top-40 left-10 w-20 h-20 rounded-full bg-accent/20 blur-xl animate-float" />
      <div className="absolute bottom-40 right-10 w-32 h-32 rounded-full bg-highlight/20 blur-xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-60 right-40 w-16 h-16 rounded-full bg-primary/30 blur-xl animate-float" style={{ animationDelay: "4s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-medium mb-6 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Enrollments Open for 2025
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 animate-slide-up">
              <span className="text-primary">Grow with</span>{" "}
              <span className="text-gradient">Knowledge</span>
              <br />
              <span className="text-foreground/90">Quality Education Delivered</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Transform your career with industry-leading data science and analytics courses. 
              From Python basics to advanced machine learning—learn from experts who work in the field.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" size="xl">
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-accent mb-1">
                    <stat.icon className="h-5 w-5" />
                    <span className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right content - Visual */}
          <div className="relative hidden lg:block animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="relative">
              {/* Main card */}
              <div className="glass rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-highlight" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-primary/20 rounded w-3/4" />
                  <div className="h-4 bg-primary/10 rounded w-full" />
                  <div className="h-4 bg-primary/10 rounded w-5/6" />
                  <div className="mt-6 grid grid-cols-3 gap-4">
                    <div className="h-24 bg-gradient-to-br from-accent/30 to-accent/10 rounded-lg" />
                    <div className="h-24 bg-gradient-to-br from-highlight/30 to-highlight/10 rounded-lg" />
                    <div className="h-24 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg" />
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 glass rounded-xl p-4 shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Success Rate</p>
                    <p className="font-bold text-foreground">95%</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass rounded-xl p-4 shadow-lg animate-float" style={{ animationDelay: "3s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-highlight/20 flex items-center justify-center">
                    <Award className="h-5 w-5 text-highlight" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Live Projects</p>
                    <p className="font-bold text-foreground">20+</p>
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

export default Hero;
