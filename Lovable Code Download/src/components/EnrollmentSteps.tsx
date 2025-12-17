import { UserPlus, LogIn, CreditCard, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Enroll Now",
    description: "Choose your program and register online in just a few clicks.",
    color: "text-accent bg-accent/10 border-accent/30",
  },
  {
    number: "02",
    icon: LogIn,
    title: "Sign In",
    description: "Get instant access to your course dashboard and learning resources.",
    color: "text-highlight bg-highlight/10 border-highlight/30",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Pay",
    description: "Complete payment securely with multiple payment options available.",
    color: "text-primary bg-primary/10 border-primary/30",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Get Started",
    description: "Begin learning with structured modules, real-world projects, and expert guidance.",
    color: "text-accent bg-accent/10 border-accent/30",
  },
];

const EnrollmentSteps = () => {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 data-grid opacity-10" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mt-2 mb-4">
            Our Enrollment Process in Four Easy Steps
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Start your learning journey today with our simple and straightforward enrollment process.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-primary-foreground/20 z-0" />
              )}

              <div className="bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-6 hover:bg-primary-foreground/10 transition-all duration-300 group-hover:-translate-y-2">
                {/* Number */}
                <div className="text-6xl font-extrabold text-primary-foreground/10 mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${step.color} border flex items-center justify-center mb-4`}>
                  <step.icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-primary-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnrollmentSteps;
