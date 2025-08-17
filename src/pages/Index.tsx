import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import useSmoothTransition from "@/hooks/useSmoothTransition";

const Index = () => {
  const heroRef = useSmoothTransition();
  const howItWorksRef = useSmoothTransition();
  const featuresRef = useSmoothTransition();
  const benefitsRef = useSmoothTransition();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section id="hero" ref={heroRef} className="section-wrapper">
        <Hero />
      </section>
      
      <section id="how-it-works" ref={howItWorksRef} className="section-wrapper">
        <HowItWorks />
      </section>
      
      <section id="powerful-features" ref={featuresRef} className="section-wrapper">
        <Features />
      </section>
      
      <section id="perfect-for-everyone" ref={benefitsRef} className="section-wrapper">
        <Benefits />
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
