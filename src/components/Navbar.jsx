import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#process" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(13,27,42,0.97)" : "rgba(13,27,42,0.85)",
          backdropFilter: "blur(12px)",
          padding: scrolled ? "12px 5%" : "18px 5%",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#home" className="font-extrabold text-2xl tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
            Swift<span style={{ color: "#E8530A" }}>Shift</span>
          </a>

          <ul className="hidden md:flex gap-8 list-none">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} className="text-white/70 text-sm font-medium hover:text-orange-400 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden md:inline-block text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:-translate-y-0.5"
            style={{ background: "#E8530A" }}
          >
            Get Free Quote
          </a>

          <button
            className="md:hidden flex flex-col gap-1.5 p-1 bg-transparent border-none cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-6 h-0.5 bg-white rounded-full transition-all duration-300" style={{ transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
            <span className="block w-6 h-0.5 bg-white rounded-full transition-all duration-300" style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-6 h-0.5 bg-white rounded-full transition-all duration-300" style={{ transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
          </button>
        </div>
      </nav>

      <div
        className="fixed top-0 left-0 right-0 z-40 flex flex-col gap-4 pt-20 pb-6 px-6 border-b border-white/10 transition-all duration-300"
        style={{
          background: "#1A2E45",
          transform: menuOpen ? "translateY(0)" : "translateY(-100%)",
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
        }}
      >
        {links.map((l) => (
          <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)} className="text-white/80 text-base py-2 border-b border-white/10 hover:text-orange-400 transition-colors">
            {l.label}
          </a>
        ))}
        <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2 text-white text-center px-6 py-3 rounded-full font-medium" style={{ background: "#E8530A" }}>
          Get Free Quote →
        </a>
      </div>
    </>
  );
}
