import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+918723456789" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">+91 87234 56789</span>
            </a>
            <a href="mailto:info@infranalytix.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4" />
              <span className="hidden sm:inline">info@infranalytix.com</span>
            </a>
          </div>
          <div className="text-xs text-primary-foreground/80">
            Empowering Careers with Data
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-xl">I</span>
            </div>
            <span className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
              Infranalytix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-foreground/80 hover:text-accent font-medium transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="accent" size="default">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-foreground/80 hover:text-accent font-medium py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="accent" className="mt-4">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
