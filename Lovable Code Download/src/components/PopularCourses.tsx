import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const courses = [
  {
    id: 1,
    title: "Data Science Masters",
    category: "Bootcamp",
    description: "Comprehensive program covering Python, ML, Deep Learning, and real-world projects.",
    duration: "4-5 months",
    students: "2500+",
    rating: 4.9,
    price: "₹16,000",
    originalPrice: "₹20,000",
    discount: "20%",
    badge: "Best Seller",
    color: "from-accent to-accent/70",
  },
  {
    id: 2,
    title: "Data Analytics",
    category: "Community Programs",
    description: "Master data visualization, SQL, Excel, and business intelligence tools.",
    duration: "3 months",
    students: "1800+",
    rating: 4.8,
    price: "₹8,000",
    originalPrice: "₹10,000",
    discount: "20%",
    badge: "Popular",
    color: "from-highlight to-highlight/70",
  },
  {
    id: 3,
    title: "Full Stack Data Science",
    category: "One Neuron",
    description: "End-to-end data science with deployment, MLOps, and cloud integration.",
    duration: "6 months",
    students: "1200+",
    rating: 4.9,
    price: "₹11,000",
    originalPrice: "₹16,000",
    discount: "30%",
    badge: "Advanced",
    color: "from-primary to-primary/70",
  },
  {
    id: 4,
    title: "Interview Preparation",
    category: "Self Paced",
    description: "Crack data science interviews with mock tests, DSA, and case studies.",
    duration: "2 months",
    students: "3000+",
    rating: 4.7,
    price: "₹3,300",
    originalPrice: "₹11,000",
    discount: "70%",
    badge: "Hot Deal",
    color: "from-destructive to-destructive/70",
  },
];

const PopularCourses = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Our Programs</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Explore Our Most Popular Courses
          </h2>
          <p className="text-muted-foreground text-lg">
            Celebrate with our best-selling courses, perfect for every learner's journey. 
            Industry-aligned curriculum designed by experts.
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="group bg-card rounded-2xl shadow-lg hover:shadow-card-hover transition-all duration-500 overflow-hidden border border-border/50 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge */}
              <div className={`h-2 bg-gradient-to-r ${course.color}`} />
              
              <div className="p-6">
                {/* Category & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                    {course.category}
                  </span>
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {course.badge}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {course.description}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1 text-highlight">
                    <Star className="h-4 w-4 fill-current" />
                    {course.rating}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-2xl font-bold text-foreground">{course.price}</span>
                    <span className="text-sm text-muted-foreground line-through ml-2">{course.originalPrice}</span>
                    <span className="text-xs font-semibold text-accent ml-2">-{course.discount}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button variant="outline" className="w-full mt-4 group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all">
                  Explore
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            View All Courses
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
