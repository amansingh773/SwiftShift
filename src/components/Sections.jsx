// TrustBar.jsx
export function TrustBar() {
  const items = [
    { icon: "🏆", label: "ISO Certified Company" },
    { icon: "📍", label: "50+ Cities Served" },
    { icon: "🔒", label: "Transit Insurance Included" },
    { icon: "⭐", label: "4.9 / 5 on Google Reviews" },
    { icon: "💬", label: "24/7 Customer Support" },
  ];
  return (
    <div className="bg-[#FDF6EE] py-5" style={{ padding: "18px 5%" }}>
      <div className="max-w-7xl mx-auto flex flex-wrap gap-6 items-center justify-center">
        {items.map((i) => (
          <div key={i.label} className="flex items-center gap-2.5 text-[#0D1B2A] text-sm font-medium">
            <span className="text-xl">{i.icon}</span>
            {i.label}
          </div>
        ))}
      </div>
    </div>
  );
}

// Services.jsx
export function Services() {
  const services = [
    {
      icon: "🏠",
      title: "Home Relocation",
      desc: "Complete residential moving with premium packing materials, expert handling of fragile items, and doorstep delivery at your new home.",
      tags: ["Premium Packing", "Doorstep Delivery", "Fragile Handling"],
    },
    {
      icon: "🏢",
      title: "Office Shifting",
      desc: "Minimize downtime with our professional office relocation team. We handle IT equipment, furniture, and confidential files with systematic precision.",
      tags: ["Zero Downtime", "IT Equipment", "Data Safety"],
    },
    {
      icon: "🚗",
      title: "Vehicle Transport",
      desc: "Car, bike, or SUV — transported on enclosed carriers with GPS tracking and full insurance coverage across all routes.",
      tags: ["GPS Tracking", "Enclosed Carrier", "Insured"],
    },
    {
      icon: "📦",
      title: "Packing & Storage",
      desc: "Industrial-grade packing materials with secure, climate-controlled warehouses for short or long-term storage of your belongings.",
      tags: ["Climate Controlled", "Long-Term Storage", "CCTV Monitored"],
    },
    {
      icon: "🌏",
      title: "International Moving",
      desc: "Seamless overseas relocation with customs clearance, sea/air freight, and destination partner network across 30+ countries.",
      tags: ["Customs Clearance", "Air & Sea Freight", "30+ Countries"],
    },
    {
      icon: "🛋️",
      title: "Furniture Assembly",
      desc: "Disassembly, transport, and reassembly of all furniture at your new location. Beds, wardrobes, modular kitchens — all handled.",
      tags: ["Disassembly", "Reassembly", "Same Day"],
    },
  ];

  return (
    <section id="services" className="bg-[#0D1B2A]" style={{ padding: "88px 5%" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-orange-500 font-semibold mb-3">What We Do</p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
            End-to-End Relocation<br />Services
          </h2>
          <p className="text-white/55 text-base leading-relaxed mt-4 max-w-lg">
            Whether it's your home, office, or car — our trained teams make every shift smooth and stress-free.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className="group relative rounded-2xl p-8 border border-white/9 bg-white/4 hover:border-orange-500/30 hover:-translate-y-1 transition-all duration-300 overflow-hidden cursor-default"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center text-2xl mb-5">
                  {s.icon}
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full border"
                      style={{
                        background: "rgba(232,83,10,0.12)",
                        border: "1px solid rgba(232,83,10,0.25)",
                        color: "#FF6B2B",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// HowItWorks.jsx
export function HowItWorks() {
  const steps = [
    { num: "01", title: "Book Online", desc: "Fill our quick form or call us. Get an instant, no-hidden-charges estimate within minutes." },
    { num: "02", title: "Survey & Plan", desc: "Our team visits for a free survey and creates a detailed moving plan tailored to your needs." },
    { num: "03", title: "Pack & Load", desc: "Expert packers arrive with premium materials. Every item labeled, catalogued, and loaded safely." },
    { num: "04", title: "Safe Delivery", desc: "Real-time tracking, on-time delivery, unpacking support, and a final walkthrough for peace of mind." },
  ];

  return (
    <section id="process" className="bg-[#1A2E45]" style={{ padding: "88px 5%" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-orange-500 font-semibold mb-3">The Process</p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight">
            Moving in 4 Simple Steps
          </h2>
          <p className="text-white/55 text-base mt-4 max-w-lg mx-auto leading-relaxed">
            We've stripped out all complexity. Your move from booking to delivery — streamlined.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* connector line */}
          <div
            className="hidden lg:block absolute top-9 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(to right, transparent, rgba(232,83,10,0.4), transparent)",
            }}
          />
          {steps.map((s) => (
            <div key={s.num} className="text-center px-4 relative group">
              <div className="w-20 h-20 rounded-full border-2 border-orange-500 bg-[#1A2E45] flex items-center justify-center mx-auto mb-5 font-heading text-2xl font-extrabold text-orange-500 relative z-10 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white group-hover:scale-110">
                {s.num}
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials.jsx
export function Testimonials() {
  const reviews = [
    {
      stars: 5,
      text: "Absolutely seamless experience. Moved from Delhi to Bangalore — not a single item damaged. The packing was so professional, I was genuinely impressed. Will use SwiftShift for every move!",
      initials: "RK",
      name: "Rahul Khanna",
      location: "Delhi → Bangalore",
    },
    {
      stars: 5,
      text: "Our office shifted over a weekend with zero disruption to Monday operations. The team was organized, fast, and handled our server rack with extreme care. Highly recommended!",
      initials: "PS",
      name: "Priya Sharma",
      location: "Office Shift, Mumbai",
    },
    {
      stars: 5,
      text: "Got my car transported from Pune to Hyderabad. Arrived in perfect condition with real-time tracking throughout. The driver was professional and communication was excellent.",
      initials: "AV",
      name: "Arjun Verma",
      location: "Car Transport, Pune → Hyd",
    },
  ];

  return (
    <section id="reviews" className="bg-[#0D1B2A]" style={{ padding: "88px 5%" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-14">
          <p className="text-xs uppercase tracking-widest text-orange-500 font-semibold mb-3">Customer Stories</p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight">
            Trusted by Thousands<br />Across India
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="rounded-2xl p-7 border border-white/8 bg-white/4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-orange-500 text-base tracking-widest mb-4">
                {"★".repeat(r.stars)}
              </div>
              <p className="text-white/75 text-sm leading-relaxed italic mb-5">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-heading font-extrabold text-sm flex-shrink-0">
                  {r.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{r.name}</p>
                  <p className="text-xs text-white/40 mt-0.5">{r.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
