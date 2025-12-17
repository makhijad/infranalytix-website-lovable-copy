import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PopularCourses from "@/components/PopularCourses";
import EnrollmentSteps from "@/components/EnrollmentSteps";
import Services from "@/components/Services";
import AboutPreview from "@/components/AboutPreview";
import TechStack from "@/components/TechStack";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Infranalytix - Data Science Courses & Analytics Services</title>
        <meta 
          name="description" 
          content="Transform your career with Infranalytix. Industry-leading data science courses, analytics services, and business intelligence solutions. Join 10,000+ successful students." 
        />
        <meta name="keywords" content="data science courses, data analytics, machine learning, python courses, business intelligence, analytics services" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <Navbar />
        <Hero />
        <PopularCourses />
        <EnrollmentSteps />
        <Services />
        <AboutPreview />
        <TechStack />
        <CTASection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
