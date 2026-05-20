export default function Footer() {
  const services = ["Home Relocation", "Office Shifting", "Vehicle Transport", "Packing & Storage", "International Moves"];
  const company = ["About Us", "Careers", "Blog", "Press", "Partners"];
  const legal = ["Privacy Policy", "Terms of Service", "Refund Policy", "Insurance Policy"];

  return (
    <footer className="bg-[#080F18]" style={{ padding: "56px 5% 28px" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="font-heading text-2xl font-extrabold mb-3">
              Swift<span className="text-orange-500">Shift</span>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-[260px]">
              India's most trusted packers & movers. Serving 50+ cities since 2009
              with a commitment to zero-damage, on-time delivery.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white/45 mb-4">
              Services
            </h4>
            {services.map((s) => (
              <a key={s} href="#services" className="block text-white/55 text-sm mb-2.5 hover:text-orange-400 transition-colors">
                {s}
              </a>
            ))}
          </div>
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white/45 mb-4">
              Company
            </h4>
            {company.map((s) => (
              <a key={s} href="#" className="block text-white/55 text-sm mb-2.5 hover:text-orange-400 transition-colors">
                {s}
              </a>
            ))}
          </div>
          <div>
            <h4 className="font-heading text-xs font-bold uppercase tracking-widest text-white/45 mb-4">
              Legal
            </h4>
            {legal.map((s) => (
              <a key={s} href="#" className="block text-white/55 text-sm mb-2.5 hover:text-orange-400 transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/7 pt-6 flex flex-wrap justify-between items-center gap-3">
          <p className="text-white/30 text-xs">
            © 2026 SwiftShift Movers Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">Made with ❤️ for stress-free moves across India</p>
        </div>
      </div>
    </footer>
  );
}
