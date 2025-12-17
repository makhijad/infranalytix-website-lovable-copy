import { HeadphonesIcon, BarChart3, LineChart, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    description: "Your customers deserve real help from real people. Our support team listens carefully and solves problems with empathy.",
    features: ["24/7 Support", "Multi-channel", "Brand Voice"],
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Data only helps when it is clear and useful. Our analysts collect, clean, and interpret information that guides better decisions.",
    features: ["Dashboards", "Reports", "Insights"],
  },
  {
    icon: LineChart,
    title: "Business Intelligence",
    description: "We design and implement end-to-end BI systems including data modeling, pipelines, and performance optimization.",
    features: ["Data Modeling", "Pipelines", "Optimization"],
  },
  {
    icon: Lightbulb,
    title: "Data Strategy",
    description: "We work with teams to define the right data strategy—from audits to KPI frameworks and best practices.",
    features: ["Audits", "KPI Frameworks", "Best Practices"],
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-secondary/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="max-w-2xl mb-8 lg:mb-0">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Professional Data & Tech Services
            </h2>
            <p className="text-muted-foreground text-lg">
              From analytics to automation, we provide reliable, efficient, and scalable solutions 
              to help your business operate smarter.
            </p>
          </div>
          <Button variant="default" size="lg">
            Get A Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-lg hover:shadow-card-hover transition-all duration-500 border border-border/50 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="h-7 w-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
