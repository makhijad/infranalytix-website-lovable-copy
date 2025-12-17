import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Clock, Users, Star, ArrowRight, CheckCircle, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const allCourses = [
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
    mode: "Self Paced",
    eligibility: "Anyone",
    roles: ["Data Scientist", "ML Engineer", "Data Analyst"],
    skills: ["Python", "Machine Learning", "Data Mining", "Data Wrangling", "Deep Learning"],
    modules: [
      { title: "Python Basics", topics: "Functions, Iterators, Lambda Functions" },
      { title: "Data Structures", topics: "Lists, Tuples, Sets, Dictionaries" },
      { title: "Machine Learning", topics: "Supervised & Unsupervised Learning" },
      { title: "Deep Learning", topics: "Neural Networks, TensorFlow, PyTorch" },
    ],
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
    mode: "Live Instructor Led",
    eligibility: "College Students & Working Professionals",
    roles: ["Data Analyst", "Business Analyst", "BI Developer"],
    skills: ["SQL", "Excel", "Power BI", "Tableau", "Statistics"],
    modules: [
      { title: "SQL Fundamentals", topics: "Queries, Joins, Subqueries" },
      { title: "Excel Advanced", topics: "Pivot Tables, VLOOKUP, Macros" },
      { title: "Visualization", topics: "Power BI, Tableau, Dashboards" },
      { title: "Statistics", topics: "Descriptive & Inferential Statistics" },
    ],
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
    mode: "Self Paced + Live Sessions",
    eligibility: "Working Professionals",
    roles: ["Full Stack Data Scientist", "MLOps Engineer", "AI Engineer"],
    skills: ["Python", "ML", "MLOps", "AWS", "Docker", "Kubernetes"],
    modules: [
      { title: "Advanced Python", topics: "OOP, Decorators, Generators" },
      { title: "ML Pipeline", topics: "Feature Engineering, Model Selection" },
      { title: "MLOps", topics: "CI/CD, Model Monitoring, A/B Testing" },
      { title: "Cloud Deployment", topics: "AWS, Docker, Kubernetes" },
    ],
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
    mode: "Self Paced",
    eligibility: "Job Seekers",
    roles: ["Data Scientist", "Data Analyst", "ML Engineer"],
    skills: ["DSA", "Statistics", "ML Theory", "Case Studies", "Communication"],
    modules: [
      { title: "DSA for Data Science", topics: "Arrays, Trees, Algorithms" },
      { title: "Statistics & Probability", topics: "Hypothesis Testing, Distributions" },
      { title: "ML Concepts", topics: "Algorithm Theory, Optimization" },
      { title: "Mock Interviews", topics: "Technical Rounds, HR Rounds" },
    ],
  },
  {
    id: 5,
    title: "Python for Data Science",
    category: "Bootcamp",
    description: "Learn Python programming from scratch with focus on data science applications.",
    duration: "2 months",
    students: "4000+",
    rating: 4.8,
    price: "₹5,000",
    originalPrice: "₹8,000",
    discount: "37%",
    badge: "Beginner Friendly",
    color: "from-accent to-accent/70",
    mode: "Self Paced",
    eligibility: "Anyone",
    roles: ["Python Developer", "Data Analyst", "Automation Engineer"],
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    modules: [
      { title: "Python Basics", topics: "Variables, Loops, Functions" },
      { title: "Data Manipulation", topics: "Pandas, NumPy Operations" },
      { title: "Visualization", topics: "Matplotlib, Seaborn Charts" },
      { title: "Projects", topics: "Real-world Data Analysis Projects" },
    ],
  },
  {
    id: 6,
    title: "Machine Learning Pro",
    category: "One Neuron",
    description: "Advanced machine learning with ensemble methods, NLP, and computer vision.",
    duration: "4 months",
    students: "900+",
    rating: 4.9,
    price: "₹14,000",
    originalPrice: "₹18,000",
    discount: "22%",
    badge: "Expert Level",
    color: "from-primary to-primary/70",
    mode: "Live Instructor Led",
    eligibility: "Working Professionals with ML basics",
    roles: ["ML Engineer", "AI Researcher", "NLP Engineer"],
    skills: ["Advanced ML", "NLP", "Computer Vision", "Transformers", "GANs"],
    modules: [
      { title: "Advanced ML", topics: "Ensemble Methods, XGBoost, LightGBM" },
      { title: "NLP", topics: "Transformers, BERT, GPT, LangChain" },
      { title: "Computer Vision", topics: "CNNs, Object Detection, GANs" },
      { title: "Research Papers", topics: "Implementation & Analysis" },
    ],
  },
];

const categories = ["All", "Bootcamp", "Community Programs", "One Neuron", "Self Paced"];

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState<typeof allCourses[0] | null>(null);

  const filteredCourses = selectedCategory === "All" 
    ? allCourses 
    : allCourses.filter(course => course.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Courses - Data Science & Analytics Programs | Infranalytix</title>
        <meta 
          name="description" 
          content="Explore our data science, analytics, and machine learning courses. Self-paced and instructor-led programs with real-world projects and placement support." 
        />
      </Helmet>

      <main className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero */}
        <section className="pt-32 pb-16 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 data-grid opacity-10" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Our Courses
            </h1>
            <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
              Industry-aligned curriculum designed by experts. Self-paced and live instructor-led options available.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border sticky top-[104px] bg-background z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Course Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="group bg-card rounded-2xl shadow-lg hover:shadow-card-hover transition-all duration-500 overflow-hidden border border-border/50 hover:-translate-y-2"
                >
                  <div className={`h-2 bg-gradient-to-r ${course.color}`} />
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {course.category}
                      </span>
                      <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                        {course.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {course.description}
                    </p>

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

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <span className="text-2xl font-bold text-foreground">{course.price}</span>
                        <span className="text-sm text-muted-foreground line-through ml-2">{course.originalPrice}</span>
                        <span className="text-xs font-semibold text-accent ml-2">-{course.discount}</span>
                      </div>
                    </div>

                    <Button 
                      variant="outline" 
                      className="w-full mt-4 group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-all"
                      onClick={() => setSelectedCourse(course)}
                    >
                      Explore
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Course Detail Modal */}
        <Dialog open={!!selectedCourse} onOpenChange={() => setSelectedCourse(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            {selectedCourse && (
              <>
                <DialogHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {selectedCourse.category}
                    </span>
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {selectedCourse.badge}
                    </span>
                  </div>
                  <DialogTitle className="text-2xl">{selectedCourse.title}</DialogTitle>
                  <DialogDescription>{selectedCourse.description}</DialogDescription>
                </DialogHeader>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Course Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Duration</span>
                          <span className="font-medium">{selectedCourse.duration}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Mode</span>
                          <span className="font-medium">{selectedCourse.mode}</span>
                        </div>
                        <div className="flex justify-between py-2 border-b border-border">
                          <span className="text-muted-foreground">Eligibility</span>
                          <span className="font-medium">{selectedCourse.eligibility}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Roles After Completion</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCourse.roles.map((role, idx) => (
                          <span key={idx} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Skills You'll Gain</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCourse.skills.map((skill, idx) => (
                          <span key={idx} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Curriculum Overview</h4>
                      <div className="space-y-3">
                        {selectedCourse.modules.map((module, idx) => (
                          <div key={idx} className="bg-muted rounded-lg p-4">
                            <div className="flex items-start gap-3">
                              <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                              <div>
                                <p className="font-medium text-foreground">{module.title}</p>
                                <p className="text-sm text-muted-foreground">{module.topics}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-accent/10 rounded-xl p-6">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-1">Course Fee</p>
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-3xl font-bold text-foreground">{selectedCourse.price}</span>
                          <span className="text-lg text-muted-foreground line-through">{selectedCourse.originalPrice}</span>
                        </div>
                        <span className="text-sm font-semibold text-accent">{selectedCourse.discount} OFF</span>
                      </div>
                      <Button variant="accent" size="lg" className="w-full mt-4">
                        Enroll Now
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

        <Footer />
      </main>
    </>
  );
};

export default Courses;
