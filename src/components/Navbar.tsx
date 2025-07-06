import { useState, useEffect } from "react";
import { Mail, Linkedin, Github, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Close menu after click
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 overflow-x-hidden">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/logo-light.png"
              alt="Y Logo"
              className="w-8 h-8 cursor-glow"
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {["hero", "overview", "toolkit", "work", "contact"].map((id, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(id)}
                className="nav-link"
              >
                {id === "hero"
                  ? "Home"
                  : id.charAt(0).toUpperCase() + id.slice(1).replace("-", " ")}
              </button>
            ))}
          </div>

          {/* Social + Mobile Menu Icon */}
          <div className="flex items-center space-x-4 md:space-x-6">
            {/* Social Icons */}
            <div className="hidden sm:flex items-center space-x-4">
              <a
                href="mailto:yashi83yadav@gmail.com"
                className="cursor-glow p-2"
              >
                <Mail className="w-5 h-5 text-white/70 hover:text-white transition-colors" />
              </a>
              <a
                href="https://linkedin.com/in/yashasvi-yadav05"
                className="cursor-glow p-2"
              >
                <Linkedin className="w-5 h-5 text-white/70 hover:text-white transition-colors" />
              </a>
              <a
                href="https://github.com/Yashasvi-Y"
                className="cursor-glow p-2"
              >
                <Github className="w-5 h-5 text-white/70 hover:text-white transition-colors" />
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col items-start space-y-4">
            {["hero", "overview", "toolkit", "work", "contact"].map((id, i) => (
              <button
                key={i}
                onClick={() => scrollToSection(id)}
                className="nav-link w-full text-left"
              >
                {id === "hero"
                  ? "Home"
                  : id.charAt(0).toUpperCase() + id.slice(1).replace("-", " ")}
              </button>
            ))}

            {/* Optional: Show social icons on mobile */}
            <div className="flex space-x-4 pt-4">
              <a
                href="mailto:yashi83yadav@gmail.com"
                className="cursor-glow p-2"
              >
                <Mail className="w-5 h-5 text-white/70 hover:text-white" />
              </a>
              <a
                href="https://linkedin.com/in/yashasvi-yadav05"
                className="cursor-glow p-2"
              >
                <Linkedin className="w-5 h-5 text-white/70 hover:text-white" />
              </a>
              <a
                href="https://github.com/Yashasvi-Y"
                className="cursor-glow p-2"
              >
                <Github className="w-5 h-5 text-white/70 hover:text-white" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
