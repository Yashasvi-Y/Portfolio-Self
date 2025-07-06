const Toolkit = () => {
  const tools = [
    // Languages
    {
      name: "Cpp",
      img: "/images/cpp.png",
      category: "language",
    },
    {
      name: "JavaScript",
      img: "/images/javascript.png",
      category: "language",
    },
    {
      name: "TypeScript",
      img: "/images/typescript.png",
      category: "language",
    },
    {
      name: "Python",
      img: "/images/python.png",
      category: "language",
    },
    {
      name: "Java",
      img: "/images/java.png",
      category: "language",
    },
    // Frameworks/Libraries
    {
      name: "React",
      img: "/images/reactjs.png",
      category: "framework",
    },
    {
      name: "Node.js",
      img: "/images/nodejs.png",
      category: "framework",
    },
    {
      name: "Express",
      img: "/images/expressjs.png",
      category: "framework",
    },
    {
      name: "TailwindCSS",
      img: "/images/tailwind.png",
      category: "framework",
    },
    // Tools
    {
      name: "Git",
      img: "/images/git.png",
      category: "tool",
    },
    {
      name: "Github",
      img: "/images/github.png",
      category: "tool",
    },
    {
      name: "MongoDB",
      img: "/images/mongodb.png",
      category: "tool",
    },
    {
      name: "Figma",
      img: "/images/figma.png",
      category: "design",
    },
    {
      name: "VS Code",
      img: "/images/vscode.png",
      category: "tool",
    },
  ];
  return (
    <section id="toolkit" className="py-24 px-6 md:px-12 lg:px-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-1/4 w-32 h-32 border border-white/5 rounded-full animate-rotate-slow" />
        <div
          className="absolute bottom-20 right-1/3 w-24 h-24 border border-white/5 rounded-full animate-rotate-slow"
          style={{
            animationDirection: "reverse",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="font-tanPearl text-3xl md:text-4xl font-light mb-20 text-left">
          The Toolkit.
        </h2>

        {/* Tool Grid */}
        <div className="relative min-h-[600px] flex items-center justify-center">
          {/* Large placeholder for toolkit visualization */}
          <div className="w-full max-w-4xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-lg border border-white/10 p-8">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-lg icon-hover flex items-center justify-center animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                  }}
                  title={tool.name}
                >
                  <img
                    src={tool.img}
                    alt={tool.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Floating dots */}
          <div className="absolute top-12 left-12 w-3 h-3 bg-white/40 rounded-full animate-float" />
          <div
            className="absolute bottom-12 right-12 w-2 h-2 bg-white/30 rounded-full animate-float"
            style={{
              animationDelay: "1s",
            }}
          />
        </div>
      </div>
    </section>
  );
};
export default Toolkit;
