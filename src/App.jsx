import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import BrandStrip from "./components/BrandStrip.jsx";
import Services from "./components/Services.jsx";
import Story from "./components/Story.jsx";
import Gallery from "./components/Gallery.jsx";
import Pricing from "./components/Pricing.jsx";
import Location from "./components/Location.jsx";
import Faq from "./components/Faq.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ink text-cream">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:font-heading focus:text-sm focus:font-medium focus:text-ink focus:outline-none"
      >
        跳至主要內容
      </a>

      <Navbar />

      <main id="main">
        <Hero />
        <BrandStrip />
        <Services />
        <Story />
        <Gallery />
        <Pricing />
        <Location />
        <Faq />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
