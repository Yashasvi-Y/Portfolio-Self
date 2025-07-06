import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Landing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleExplore = () => {
    setIsFadingOut(true);
    setTimeout(() => navigate("/home"), 1000); // Match this to fade-out duration
  };

  return (
    <div
      className={`min-h-screen bg-black relative overflow-hidden flex items-center justify-center transition-opacity duration-1000 ${
        isFadingOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Background Animation */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div
        className={`text-center z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="font-tanPearl text-6xl md:text-8xl lg:text-8xl font-light text-white mb-8 tracking-wide">
          yashasvi yadav
        </h1>
        <p className="text-white/60 text-lg md:text-xl mb-12 font-light tracking-wider">
          engage with my portfolio to get to know me
        </p>

        <button
          onClick={handleExplore}
          className="group relative bg-white text-black px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:bg-white/90 cursor-glow inline-flex items-center gap-3"
        >
          Explore
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-float" />
      <div
        className="absolute bottom-32 right-32 w-1 h-1 bg-white/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />
    </div>
  );
};

export default Landing;
