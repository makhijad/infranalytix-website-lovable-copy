import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const locations = [
  {
    city: "Nagpur (Head Office)",
    address: "Plot No 22, Ashok Colony, Near Union Bank, Khamla Road, Khamla, Nagpur, Maharashtra 440025",
  },
  {
    city: "Hyderabad",
    address: "1-33-207, Gun Rock Rd, Above Sabji Bazaar, Durga Nagar, Trimulgherry, Secunderabad, Telangana 500009",
  },
  {
    city: "Raipur",
    address: "LIG 107, DDU Nagar, Sector 2, Near Passport Office, Behind Little Flower School, Raipur 492010",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch | Infranalytix</title>
        <meta 
          name="description" 
          content="Contact Infranalytix for data science courses, analytics services, or business inquiries. Reach us at our offices in Nagpur, Hyderabad, or Raipur." 
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
                Get In Touch
              </h1>
              <p className="text-primary-foreground/70 text-lg">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="bg-card"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your@email.com"
                        className="bg-card"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 12345 67890"
                      className="bg-card"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your inquiry..."
                      rows={5}
                      className="bg-card resize-none"
                    />
                  </div>

                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Phone className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <a href="tel:+918723456789" className="text-muted-foreground hover:text-accent transition-colors">
                        +91 87234 56789
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <a href="mailto:info@infranalytix.com" className="text-muted-foreground hover:text-accent transition-colors">
                        info@infranalytix.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Locations */}
                <h3 className="text-xl font-bold text-foreground mb-4">Our Locations</h3>
                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <div key={index} className="bg-card rounded-xl p-4 border border-border/50">
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{location.city}</h4>
                          <p className="text-sm text-muted-foreground">{location.address}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Contact;
