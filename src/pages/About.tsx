import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container-width py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          {t('Home')}
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gradient mb-6">About UseVerdant</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              UseVerdant is revolutionizing the way people interact with the natural world through 
              cutting-edge AI technology and plant identification.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-muted-foreground mb-6">
              We believe that everyone should have access to the incredible knowledge of the plant kingdom. 
              Our mission is to make plant identification and botanical education accessible to everyone, 
              from curious nature enthusiasts to professional botanists.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Our Technology</h2>
            <p className="text-muted-foreground mb-6">
              Powered by advanced machine learning algorithms trained on millions of plant images, 
              UseVerdant achieves 95% accuracy in plant identification. Our AI continuously learns 
              and improves, making it more accurate with every scan.
            </p>
            
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p className="text-muted-foreground">
              Our team consists of passionate botanists, AI researchers, and nature lovers who are 
              dedicated to bridging the gap between technology and the natural world. Together, 
              we're building the future of botanical education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;