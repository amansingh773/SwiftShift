export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0D1B2A 0%, #1A2E45 60%, #0D1B2A 100%)",
        padding: "100px 5% 60px",
      }}
      aria-label="Hero section"
    >
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(232,83,10,0.18) 0%, transparent 60%)",
        }}
      />
      {/* Dot grid */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to left, black 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/15 border border-orange-500/35 text-orange-400 px-4 py-1.5 rounded-full text-xs font-medium mb-6 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            India's Trusted Moving Partner
          </div>

          <h1
            className="font-heading font-extrabold leading-[1.05] tracking-tighter"
            style={{ fontSize: "clamp(38px,5vw,68px)" }}
          >
            We Move{" "}
            <span className="text-orange-500 block">Your World,</span>
            Not Just Your Stuff.
          </h1>

          <p className="mt-5 mb-9 text-white/60 text-lg leading-relaxed max-w-md">
            Professional packers & movers for home relocation, office shifting, and
            vehicle transport — delivered with care, speed, and zero surprises.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white px-8 py-3.5 rounded-full font-medium text-sm transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/40"
            >
              Get Free Estimate →
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/70 hover:bg-white/8 text-white px-7 py-3.5 rounded-full font-medium text-sm transition-all"
            >
              Explore Services
            </a>
          </div>

          <div className="flex gap-8 mt-12 flex-wrap">
            {[
              { num: "15K+", label: "Moves Done" },
              { num: "98%", label: "Satisfaction" },
              { num: "50+", label: "Cities Covered" },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-orange-500 pl-4">
                <div className="font-heading text-3xl font-extrabold">{s.num}</div>
                <div className="text-xs text-white/50 uppercase tracking-widest mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right card */}
        <div className="hidden md:block animate-float">
          <div
            className="rounded-2xl p-7"
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <div className="text-7xl text-center mb-3">🚛</div>
            <p className="font-heading text-2xl font-extrabold text-center mb-1">
              Your Move, Simplified
            </p>
            <p className="text-center text-white/50 text-sm mb-5">
              From packing to delivery — we handle it all
            </p>

            {[
              { icon: "✅", title: "Live Tracking Available", desc: "Real-time GPS updates on your move" },
              { icon: "🛡️", title: "Transit Insurance", desc: "Your belongings are fully insured" },
              { icon: "💬", title: "24/7 Support", desc: "We're always here when you need us" },
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-3 rounded-xl p-4 mb-3"
                style={{
                  background: "rgba(232,83,10,0.12)",
                  border: "1px solid rgba(232,83,10,0.25)",
                }}
              >
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-lg flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-xs text-white/50 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
