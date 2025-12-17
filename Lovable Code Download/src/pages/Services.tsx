import { Helmet } from "react-helmet-async";
import { HeadphonesIcon, BarChart3, LineChart, Lightbulb, Globe, Users, Zap, Shield, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const mainServices = [
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Data only helps when it is clear and useful. Our analysts collect, clean, and interpret information that guides better decisions.",
    details: "We help you understand what is working, what is not, and where to go next. Our data analytics solutions include dashboards, reports, and insights made simple.",
    features: ["Custom Dashboards", "Data Cleaning", "KPI Tracking", "Trend Analysis"],
  },
  {
    icon: LineChart,
    title: "Business Intelligence Solutions",
    description: "We design and implement end-to-end BI systems for companies looking to scale.",
    details: "This includes data modeling, data pipelines, report governance, and performance optimization using modern BI tools.",
    features: ["Data Modeling", "ETL Pipelines", "Report Automation", "Performance Optimization"],
  },
  {
    icon: Lightbulb,
    title: "Data Advisory & Strategy",
    description: "We work with teams to define the right data strategy—from data audits to KPI frameworks.",
    details: "Modernizing legacy systems and setting up best practices for long-term analytics success.",
    features: ["Data Audits", "KPI Frameworks", "Strategy Planning", "Best Practices"],
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    description: "Your customers deserve real help from real people. Our support team listens carefully and solves problems with empathy.",
    details: "We handle chats, calls, and emails while maintaining your brand's consistent voice.",
    features: ["24/7 Support", "Multi-channel", "Quality Assurance", "Brand Voice"],
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    description: "Your brand deserves to be seen. Our digital marketing team helps you expand your online presence.",
    details: "We craft straightforward, impactful campaigns that resonate with your target audience.",
    features: ["SEO", "Paid Ads", "Content Marketing", "Social Media"],
  },
  {
    icon: Users,
    title: "IT Staff Augmentation",
    description: "Access skilled professionals to fill gaps in your team without the overhead of full-time hiring.",
    details: "Our strategy is meticulously designed to alleviate your concerns about hiring, training, and other overhead expenses.",
    features: ["Flexible Scaling", "Skilled Professionals", "Cost Effective", "Quick Onboarding"],
  },
];

const benefits = [
  { icon: Zap, title: "Cost Savings", description: "Reduce operational costs significantly" },
  { icon: Users, title: "Expertise", description: "Access industry-best professionals" },
  { icon: BarChart3, title: "Scalability", description: "Grow your team as needed" },
  { icon: Shield, title: "Control", description: "Full control on resources" },
  { icon: Lightbulb, title: "Efficiency", description: "Improved operational efficiency" },
  { icon: Globe, title: "Focus", description: "Focus on core business areas" },
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services - Data Analytics & Outsourcing Solutions | Infranalytix</title>
        <meta 
          name="description" 
          content="Professional data analytics, business intelligence, customer support, and IT outsourcing services. Scalable solutions to help your business grow." 
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
                Professional Data & Tech Services
              </h1>
              <p className="text-primary-foreground/70 text-lg mb-8">
                From analytics to automation, we provide reliable, efficient, and scalable solutions 
                to help your business operate smarter.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  Get A Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Main Services */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Customized Solutions for Your Needs
              </h2>
              <p className="text-muted-foreground">
                Efficient, cost-effective, and comprehensive solutions that boost profits and reduce risks.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl p-8 shadow-lg hover:shadow-card-hover transition-all duration-500 border border-border/50 hover:-translate-y-2"
                >
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                    <service.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {service.description}
                  </p>
                  
                  <p className="text-muted-foreground/80 text-sm mb-6">
                    {service.details}
                  </p>

                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Benefits of Leveraging Our Services
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border/50 hover:border-accent/50 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent transition-colors">
                    <benefit.icon className="h-6 w-6 text-accent group-hover:text-accent-foreground transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 gradient-accent relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-accent-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-accent-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
              Whether you're a startup or an established business, our team supports you with tailored solutions.
            </p>
            <Link to="/contact">
              <Button size="xl" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl">
                Schedule A Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ServicesPage;
