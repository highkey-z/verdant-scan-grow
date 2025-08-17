import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";
import useSectionTransition from "@/hooks/useSectionTransition";

const Index = () => {
  const heroTransition = useSectionTransition();
  const howItWorksTransition = useSectionTransition();
  const featuresTransition = useSectionTransition();
  const benefitsTransition = useSectionTransition();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section ref={heroTransition.ref} className={heroTransition.className}>
        <div className="section-container">
          <Hero />
        </div>
      </section>
      
      <section ref={howItWorksTransition.ref} className={howItWorksTransition.className}>
        <div className="section-container">
          <HowItWorks />
        </div>
      </section>
      
      <section ref={featuresTransition.ref} className={featuresTransition.className}>
        <div className="section-container">
          <Features />
        </div>
      </section>
      
      <section ref={benefitsTransition.ref} className={benefitsTransition.className}>
        <div className="section-container">
          <Benefits />
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
