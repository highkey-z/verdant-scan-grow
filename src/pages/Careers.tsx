import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Careers = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <div className="container-width py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          {t('Home')}
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gradient mb-6">Careers at UseVerdant</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground mb-8">
              Join our mission to make botanical knowledge accessible to everyone. We're looking for 
              passionate individuals who want to make a difference in the world.
            </p>
            
            <div className="space-y-8">
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">AI/ML Engineer</h3>
                <p className="text-muted-foreground mb-4">
                  Help improve our plant identification algorithms and work on cutting-edge computer vision technology.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Remote</span>
                  <span className="px-3 py-1 bg-success/10 text-success rounded-full text-sm">Full-time</span>
                </div>
              </div>
              
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Mobile Developer</h3>
                <p className="text-muted-foreground mb-4">
                  Build and enhance our mobile applications for iOS and Android platforms.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Farmingdale, NY</span>
                  <span className="px-3 py-1 bg-success/10 text-success rounded-full text-sm">Full-time</span>
                </div>
              </div>
              
              <div className="border border-border/50 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Botanist</h3>
                <p className="text-muted-foreground mb-4">
                  Ensure the accuracy of our plant database and contribute botanical expertise to our platform.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Remote</span>
                  <span className="px-3 py-1 bg-success/10 text-success rounded-full text-sm">Part-time</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-success/5 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Don't see a role that fits?</h3>
              <p className="text-muted-foreground">
                We're always looking for talented individuals. Send us your resume at 
                <a href="mailto:careers@useverdantai.com" className="text-primary hover:underline ml-1">
                  careers@useverdantai.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;