import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const courses = [
    "Data Science Masters",
    "Data Analytics",
    "Full Stack Data Science",
    "Interview Preparation",
    "Python Basics",
  ];

  const services = [
    "Data Analytics",
    "Business Intelligence",
    "Customer Support",
    "Data Strategy",
    "IT Staff Augmentation",
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">I</span>
              </div>
              <span className="text-xl font-bold">Infranalytix</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6 text-sm">
              Empowering businesses with analytics solutions and individuals with 
              industry-ready data skills. Making data accessible to everyone.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-bold mb-6">Our Courses</h4>
            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course}>
                  <Link 
                    to="/courses"
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                  >
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Plot No 22, Ashok Colony, Khamla Road,<br />
                  Nagpur, Maharashtra 440025
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent shrink-0" />
                <a href="tel:+918723456789" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  +91 87234 56789
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent shrink-0" />
                <a href="mailto:info@infranalytix.com" className="text-primary-foreground/70 hover:text-accent transition-colors text-sm">
                  info@infranalytix.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Infranalytix. All Rights Reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                Terms & Conditions
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors text-sm">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
