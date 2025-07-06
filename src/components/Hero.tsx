const Hero = () => {
  return (
    <section
      id="hero"
      className="pt-24 min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between gap-12 px-6 md:px-12 lg:px-24 relative"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Vertical lines */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
            style={{ left: `${10 + i * 10}%` }}
          />
        ))}
      </div>

      {/* Left Content */}
      <div className="flex-1 z-10">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="font-tanPearl text-6xl md:text-7xl lg:text-8xl font-light mb-8 leading-tight">
            Yashasvi
            <br />
            Yadav
          </h1>
          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl">
            I've always believed that stories shape the world – whether they're
            told through words or through code. There's something magical about
            crafting something from scratch – be it a short story or a web page.
            So, here I'm a B.Tech CSE student building with intention – whether
            it's an interface or a line of thought.
          </p>
        </div>
      </div>

      {/* Right Graphic Element */}
      <div className="flex flex-1 justify-center items-center">
        <div className="relative">
          {/* Large Circle */}
          <div className="w-96 h-96 rounded-full border border-white/20 relative animate-rotate-slow">
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white rounded-full"></div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/60 rounded-full"></div>
          </div>

          {/* Inner Elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center animate-float">
              <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm animate-float"></div>
              <img
                src="/images/hero-right-side_image.png"
                alt="Hero Illustration"
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white/40 rounded-full animate-float" />
      <div
        className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white/30 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
    </section>
  );
};

export default Hero;
