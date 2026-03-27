'use client';
import { LangProvider, useLang } from '@/context/LangContext';
import t from '@/lib/translations';
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

function FloatingCta() {
  const { lang } = useLang();
  return (
    <a href="#contact" className="floating-cta">
      {t[lang].floatingCta}
    </a>
  );
}

export default function HomePage() {
  return (
    <LangProvider>
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
      <FloatingCta />
    </LangProvider>
  );
}
