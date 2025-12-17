import { Helmet } from "react-helmet-async";
import { Target, Users, Sparkles, Trophy, BookOpen, Briefcase, Award, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We foster an environment of creative thinking, driving the discovery of innovative and practical solutions to business challenges.",
  },
  {
    icon: Users,
    title: "Client Driven",
    description: "We develop relationships and collaborate with our clients to add value to their business in the long run.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "We are committed to continuously improving ourselves, our processes, products, and services.",
  },
  {
    icon: Trophy,
    title: "Team Work",
    description: "We share best practices, solve business challenges together, and grow together as a team.",
  },
];

const whyUs = [
  { icon: BookOpen, title: "Up-Gradation of Courses", description: "Regular curriculum updates aligned with industry trends" },
  { icon: Briefcase, title: "Real-World Projects", description: "Hands-on experience with actual business problems" },
  { icon: Target, title: "100% Practical Training", description: "Learn by doing, not just theory" },
  { icon: Award, title: "Personalized Attention", description: "Small batches for individual focus" },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Infranalytix | Data Science Education & Analytics Services</title>
        <meta 
          name="description" 
          content="Learn about Infranalytix's mission to empower businesses with analytics and individuals with data skills. Our values, team, and approach." 
        />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 data-grid opacity-10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
                About Infranalytix
              </h1>
              <p className="text-primary-foreground/70 text-lg">
                Empowering businesses with analytics solutions and individuals with industry-ready data skills.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Mission</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Making Data Accessible for Everyone
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  Infranalytix was born with a simple belief—that data should empower everyone, not intimidate them. 
                  In today's world, every business is collecting data, but only a few know how to turn it into 
                  decisions that move the needle.
                </p>
                
                <p className="text-muted-foreground mb-6">
                  We saw both sides of the gap—companies struggling to make data work for them, and learners 
                  struggling to build the skills industry actually needs.
                </p>

                <p className="text-muted-foreground mb-8">
                  So, we built Infranalytix as a place where real analytics meets real learning. A platform 
                  that supports businesses with practical, outcome-driven data solutions, while also uplifting 
                  individuals through high-quality, affordable, job-oriented data courses.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/courses">
                    <Button variant="default" size="lg">Explore Courses</Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" size="lg">Our Services</Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-card rounded-xl p-6 shadow-lg">
                      <div className="text-4xl font-bold text-accent mb-2">10K+</div>
                      <p className="text-sm text-muted-foreground">Students Trained</p>
                    </div>
                    <div className="bg-card rounded-xl p-6 shadow-lg">
                      <div className="text-4xl font-bold text-accent mb-2">500+</div>
                      <p className="text-sm text-muted-foreground">Projects Delivered</p>
                    </div>
                    <div className="bg-card rounded-xl p-6 shadow-lg">
                      <div className="text-4xl font-bold text-accent mb-2">95%</div>
                      <p className="text-sm text-muted-foreground">Placement Rate</p>
                    </div>
                    <div className="bg-card rounded-xl p-6 shadow-lg">
                      <div className="text-4xl font-bold text-accent mb-2">50+</div>
                      <p className="text-sm text-muted-foreground">Corporate Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Values</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                What Drives Us Every Day
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-300 group text-center"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-accent transition-colors">
                    <value.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                What Makes Us Different
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((item, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="bg-primary text-primary-foreground rounded-2xl p-6 h-full group-hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-12 h-12 rounded-lg bg-primary-foreground/10 flex items-center justify-center mb-4">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-primary-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 gradient-accent">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-accent-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Join thousands of successful students and businesses who trust Infranalytix.
            </p>
            <Link to="/contact">
              <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl">
                Get in Touch
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default About;
