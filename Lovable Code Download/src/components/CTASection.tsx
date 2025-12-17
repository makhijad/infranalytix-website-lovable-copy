import { ArrowRight, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-accent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-accent-foreground/80 text-lg mb-8">
            Join thousands of students who have already started their data science journey with us. 
            Get expert guidance, real-world projects, and placement support.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/courses">
              <Button 
                size="xl" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-xl"
              >
                Explore Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button 
                size="xl" 
                variant="outline"
                className="border-2 border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10"
              >
                <Phone className="mr-2 h-5 w-5" />
                Talk to Counsellor
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
