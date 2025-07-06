const Overview = () => {
  const phases = [
    {
      title: "Phase 1: Stepping In",
      content:
        "I didn't grow up writing code or building apps. In fact, my real journey into tech began only after I stepped into college. Surrounded by a new world of possibilities – from development to design to AI and tech tools – I started exploring, unsure of where I'd fit in but excited to try everything. And now, what began as curiosity is slowly becoming craft.",
    },
    {
      title: "Phase 2: The Playground",
      content:
        "My first year at IIIT Kota felt like a sandbox – I was experimenting, failing, retrying, and learning at every step. From basic frontend projects to discovering what goes into full-stack apps; from drawing interfaces to building them – I've been feeling my way through it all.\nI'm still figuring out what truly fits me, and I like it that way – flexible, messy, and full of growth.",
    },
    {
      title: "Phase 3: The Loop",
      content:
        "There are days when everything clicks, and others when even opening the editor feels like a task. But I've learned that progress isn't always visible – sometimes it hides in rough drafts, in failed builds, or in scribbled ideas that don't work yet.\nI take breaks, reset, and come back – still curious, still building.",
    },
    {
      title: "Phase 4: The Now & Next",
      content:
        "Right now, I'm still exploring – working with the MERN stack, designing intuitive UIs, and building small tools that make life a bit easier.\nI enjoy creating things that are useful, usable, and maybe even a little delightful.\nThis is just the beginning – and I'm here to learn, collaborate, and keep making.",
    },
  ];
  return (
    <section id="overview" className="py-24 px-6 md:px-12 lg:px-24 relative">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent"
            style={{
              left: `${8.33 * i}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="font-tanPearl text-3xl md:text-4xl font-light mb-20 text-left">
          An Overview.
        </h2>

        {/* Circular Timeline */}
        <div className="relative flex items-center justify-center min-h-[800px]">
          {/* Central Circle */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[32rem] h-[32rem] rounded-full border-2 border-white/20 flex items-center justify-center">
              <div className="w-[18rem] h-[18rem] rounded-full border-2 border-white/20 flex items-center justify-center">
                <div className="w-[12rem] h-[12rem] rounded-full border border-white/30 flex items-center justify-center">
                  <div className="w-[5rem] h-[5rem] rounded-full bg-white/10 backdrop-blur-sm"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase Cards */}

          {/* Mobile Layout: vertical column */}
          <div className="flex flex-col space-y-8 md:hidden w-full">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="max-w-sm p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 card-hover animate-fade-in mx-auto"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="font-semibold text-lg mb-3 text-white">
                  {phase.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line">
                  {phase.content}
                </p>
              </div>
            ))}
          </div>

          {/* Medium Layout: 2-column flow (no absolute) */}
          <div className="hidden md:grid lg:hidden grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="max-w-sm p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="font-semibold text-lg mb-3 text-white">
                  {phase.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line">
                  {phase.content}
                </p>
              </div>
            ))}
          </div>

          {/* Large Layout: your original absolute-positioned design (unchanged) */}
          <div className="hidden lg:block">
            {phases.map((phase, index) => {
              const positions = [
                { top: "0%", left: "5%" }, // Top-left
                { top: "5%", right: "15%" }, // Top-right
                { bottom: "23%", left: "15%" }, // Bottom-left
                { bottom: "18%", right: "5%" }, // Bottom-right
              ];
              return (
                <div
                  key={index}
                  className="absolute max-w-sm p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 card-hover animate-fade-in"
                  style={{
                    ...positions[index],
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <h3 className="font-semibold text-lg mb-3 text-white">
                    {phase.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line">
                    {phase.content}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Connecting Lines */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="absolute w-32 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
              style={{
                transform: `rotate(${45 + i * 90}deg)`,
                transformOrigin: "center",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Overview;
