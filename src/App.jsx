import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { TrustBar, Services, HowItWorks, Testimonials } from "./components/Sections";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div style={{ background: "#0D1B2A", color: "#fff", overflowX: "hidden", fontFamily: "'DM Sans', sans-serif" }}>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <HowItWorks />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}
