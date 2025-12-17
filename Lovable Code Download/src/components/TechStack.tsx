const technologies = [
  { name: "Python", logo: "🐍" },
  { name: "Pandas", logo: "🐼" },
  { name: "NumPy", logo: "🔢" },
  { name: "TensorFlow", logo: "🧠" },
  { name: "MongoDB", logo: "🍃" },
  { name: "OpenAI", logo: "🤖" },
  { name: "Power BI", logo: "📊" },
  { name: "Tableau", logo: "📈" },
];

const TechStack = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h3 className="text-xl font-semibold text-primary-foreground/80">
            Master These Technologies
          </h3>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-6 py-3 bg-primary-foreground/5 rounded-full border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors group"
            >
              <span className="text-2xl">{tech.logo}</span>
              <span className="text-primary-foreground font-medium group-hover:text-accent transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
