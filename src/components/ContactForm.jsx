import { useState } from "react";

const services = [
  "Home Relocation",
  "Office Shifting",
  "Vehicle Transport",
  "Packing & Storage",
  "International Moving",
  "Furniture Assembly",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "", phone: "", from: "", to: "", service: "", date: "", message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", phone: "", from: "", to: "", service: "", date: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  const today = new Date().toISOString().split("T")[0];

  const inputClass =
    "w-full bg-white/7 border border-white/12 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 outline-none transition-all focus:border-orange-500 focus:bg-orange-500/6 focus:ring-2 focus:ring-orange-500/10";

  return (
    <section id="contact" className="bg-[#1A2E45]" style={{ padding: "88px 5%" }}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* Left: info */}
        <div>
          <p className="text-xs uppercase tracking-widest text-orange-500 font-semibold mb-3">
            Get In Touch
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            Get Your Free<br />Moving Estimate
          </h2>
          <p className="text-white/55 text-base leading-relaxed mb-8">
            Tell us about your move and we'll send you a detailed, no-obligation quote
            within 30 minutes.
          </p>

          {[
            { icon: "📞", label: "Call Us", val: "+91 98765 43210" },
            { icon: "✉️", label: "Email", val: "hello@swiftshift.in" },
            { icon: "📍", label: "Head Office", val: "Sector 18, Noida, UP – 201301" },
            { icon: "🕐", label: "Support Hours", val: "Mon – Sat, 8 AM – 8 PM" },
          ].map((c) => (
            <div key={c.label} className="flex items-center gap-4 mb-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{
                  background: "rgba(232,83,10,0.12)",
                  border: "1px solid rgba(232,83,10,0.25)",
                }}
              >
                {c.icon}
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-white/40">{c.label}</p>
                <p className="text-sm font-medium mt-0.5">{c.val}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: form */}
        <div
          className="rounded-2xl p-9"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <h3 className="font-heading text-xl font-bold mb-6">Request a Callback</h3>
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-xs uppercase tracking-wider text-white/50 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Rahul Sharma"
                  required
                  className={inputClass}
                  autoComplete="name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-xs uppercase tracking-wider text-white/50 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  required
                  className={inputClass}
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-xs uppercase tracking-wider text-white/50 mb-1.5">
                  Moving From *
                </label>
                <input
                  type="text"
                  name="from"
                  value={form.from}
                  onChange={handleChange}
                  placeholder="City, State"
                  required
                  className={inputClass}
                />
              </div>
              <div className="mb-4">
                <label className="block text-xs uppercase tracking-wider text-white/50 mb-1.5">
                  Moving To *
                </label>
                <input
                  type="text"
                  name="to"
                  value={form.to}
                  onChange={handleChange}
                  placeholder="City, State"
                  required
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-xs uppercase tracking-wider text-white/50 mb-1.5">
                Service Required *
              </label>
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className={inputClass}
                style={{ appearance: "none", WebkitAppearance: "none" }}
              >
                <option value="" disabled>— Select a service —</option>
                {services.map((s) => (
                  <option key={s} value={s} style={{ background: "#1A2E45" }}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-xs uppercase tracking-wider text-white/50 mb-1.5">
                Preferred Move Date
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                min={today}
                className={inputClass}
              />
            </div>

            <div className="mb-5">
              <label className="block text-xs uppercase tracking-wider text-white/50 mb-1.5">
                Additional Details
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Any special requirements, heavy items, floor details..."
                rows={3}
                className={inputClass}
                style={{ resize: "vertical" }}
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-orange-500 hover:bg-orange-400 text-white py-4 rounded-full font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/35 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "📩 Send My Request"}
            </button>

            {status === "success" && (
              <div
                className="mt-4 rounded-xl p-4 text-center text-sm"
                style={{
                  background: "rgba(30,200,100,0.12)",
                  border: "1px solid rgba(30,200,100,0.3)",
                  color: "#4ade80",
                }}
              >
                ✅ Request received! We'll call you back within 30 minutes.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
