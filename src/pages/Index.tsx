import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <HowItWorks />
      <Features />
      <Benefits />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
