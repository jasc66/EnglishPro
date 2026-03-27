import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import Sectors from '@/components/Sectors';
import HowItWorks from '@/components/HowItWorks';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function HomePage() {
  return (
    <>
      <AnimateOnScroll />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Sectors />
        <HowItWorks />
        <About />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      {/* Floating CTA */}
      <a href="#contact" className="floating-cta">
        ✨ Clase gratis
      </a>
    </>
  );
}
