import { Github, ExternalLink } from "lucide-react";

const Work = () => {
  const projects = [
    {
      title: "WebMaster - IIIT KOTA",
      tech: ["Web Dev", "UX", "UI"],
      type: "Work Experience",
      image: "/images/webmaster.png",
    },
    {
      title: "Content writer + Social Media Handler",
      tech: ["content writing", "management"],
      type: "co-curricular",
      image: "/images/neon.png",
    },
    {
      title: "Portfolio Website",
      tech: ["React", "Tailwind", "emailjs"],
      type: "Web App",
      image: "/images/portfolio-Yashasvi.png",
      github: "https://github.com/Yashasvi-Y/Portfolio",
      live: "https://yashasviyadav.netlify.app/",
    },
    {
      title: "Project 1 - INDRIYA",
      tech: ["React", "CSS"],
      type: "Web App",
      image: "/images/restaurant-project.png",
      github: "https://github.com/Yashasvi-Y/Restaurant-Project",
      live: "https://project2.live",
    },
  ];

  return (
    <section id="work" className="py-24 px-6 md:px-12 lg:px-24 relative">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute border border-white/5 animate-float"
            style={{
              width: `${20 + Math.random() * 30}px`,
              height: `${20 + Math.random() * 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              transform: `rotate(${Math.random() * 45}deg)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="font-tanPearl text-3xl md:text-4xl font-light mb-20 text-left">
          The Work & Exp.
        </h2>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="aspect-square bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm rounded-lg border border-white/10 p-6 card-hover animate-fade-in cursor-pointer group"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              <div className="h-full flex flex-col justify-between">
                {/* Project Image */}
                <div>
                  <div className="w-full h-32 bg-white/5 rounded mb-4 group-hover:bg-white/10 transition-colors overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="font-semibold text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">{project.type}</p>
                </div>

                {/* Tech Tags & Links */}
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-white transition"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
