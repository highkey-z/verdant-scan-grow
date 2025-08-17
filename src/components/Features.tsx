import { Brain, BookOpen, Clock, Users } from "lucide-react";
import aiPlantIcon from "@/assets/ai-plant-icon.png";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollTransition } from "@/hooks/useScrollTransition";

const Features = () => {
  const { t } = useLanguage();
  const sectionRef = useScrollTransition();
  
  const features = [
    {
      icon: Brain,
      title: t("AI Plant Recognition"),
      description: t("Advanced machine learning algorithms identify plants with 95% accuracy from a single photo")
    },
    {
      icon: BookOpen,
      title: t("Care Tips & Advice"),
      description: t("Get personalized growing tips, watering schedules, and expert gardening advice for each plant")
    },
    {
      icon: Clock,
      title: t("Scan History"),
      description: t("Keep track of all your plant discoveries with a comprehensive history of your scans")
    },
    {
      icon: Users,
      title: t("Community Sharing"),
      description: t("Share your plant discoveries with fellow nature enthusiasts and build your botanical knowledge")
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="powerful-features" 
      className="section-padding section-transition bg-gradient-to-br from-success/5 via-background to-primary/5 relative overflow-hidden"
    >
      {/* Background Design Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Clean SVG Plant Icons */}
        <svg className="absolute top-16 left-12 w-10 h-10 opacity-20 animate-pulse" viewBox="0 0 24 24" fill="none" style={{animationDelay: '0.5s'}}>
          <path d="M12 2L15.09 8.26L22 9L16 14.74L18 22L12 19L6 22L8 14.74L2 9L8.91 8.26L12 2Z" fill="hsl(var(--success))" />
        </svg>
        <svg className="absolute top-48 right-8 w-8 h-8 opacity-15 animate-bounce" viewBox="0 0 24 24" fill="none" style={{animationDelay: '1s'}}>
          <circle cx="12" cy="12" r="10" stroke="hsl(var(--primary))" strokeWidth="2" fill="hsl(var(--primary))" fillOpacity="0.1"/>
          <path d="M8 14S9.5 16 12 16S16 14 16 14M9 9H9.01M15 9H15.01" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="absolute bottom-24 left-8 w-9 h-9 opacity-25 animate-pulse" viewBox="0 0 24 24" fill="none" style={{animationDelay: '0.3s'}}>
          <path d="M20.84 4.61A5.5 5.5 0 0 0 15.5 3H12V21L8 17H4A2 2 0 0 1 2 15V9A2 2 0 0 1 4 7H8L12 3H15.5A5.5 5.5 0 0 0 20.84 4.61Z" stroke="hsl(var(--nature-mint))" strokeWidth="2" fill="hsl(var(--nature-mint))" fillOpacity="0.1"/>
        </svg>
        <svg className="absolute top-72 left-1/4 w-7 h-7 opacity-20 animate-bounce" viewBox="0 0 24 24" fill="none" style={{animationDelay: '0.8s'}}>
          <path d="M14 9V5A3 3 0 0 0 11 2A3 3 0 0 0 8 5V9" stroke="hsl(var(--success))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 9H16L14 19H10L8 9Z" stroke="hsl(var(--success))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="absolute bottom-40 right-1/3 w-6 h-6 opacity-15 animate-pulse" viewBox="0 0 24 24" fill="none" style={{animationDelay: '1.2s'}}>
          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" stroke="hsl(var(--primary))" strokeWidth="2" fill="hsl(var(--primary))" fillOpacity="0.1"/>
        </svg>
        <svg className="absolute top-96 right-24 w-5 h-5 opacity-20 animate-bounce" viewBox="0 0 24 24" fill="none" style={{animationDelay: '0.6s'}}>
          <path d="M12 2L13.09 8.26L19 7L14.74 13.09L19 17L12 15L5 17L9.26 13.09L5 7L10.91 8.26L12 2Z" stroke="hsl(var(--success))" strokeWidth="2" fill="hsl(var(--success))" fillOpacity="0.1"/>
        </svg>
        <svg className="absolute bottom-16 left-1/3 w-8 h-8 opacity-18 animate-pulse" viewBox="0 0 24 24" fill="none" style={{animationDelay: '0.9s'}}>
          <path d="M9 12L11 14L15 10" stroke="hsl(var(--nature-mint))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="hsl(var(--nature-mint))" strokeWidth="2"/>
        </svg>
        <svg className="absolute top-32 right-1/3 w-7 h-7 opacity-22 animate-bounce" viewBox="0 0 24 24" fill="none" style={{animationDelay: '0.4s'}}>
          <path d="M12 6V4M6 6L5 5M18 6L19 5M6 18L5 19M18 18L19 19M4 12H2M22 12H20M17 12A5 5 0 0 0 12 7A5 5 0 0 0 7 12A5 5 0 0 0 12 17A5 5 0 0 0 17 12Z" stroke="hsl(var(--primary))" strokeWidth="2"/>
        </svg>
        <svg className="absolute bottom-64 left-20 w-6 h-6 opacity-19 animate-pulse" viewBox="0 0 24 24" fill="none" style={{animationDelay: '1.1s'}}>
          <circle cx="11" cy="11" r="8" stroke="hsl(var(--success))" strokeWidth="2"/>
          <path d="M21 21L16.65 16.65" stroke="hsl(var(--success))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="absolute top-80 left-16 w-8 h-8 opacity-17 animate-bounce" viewBox="0 0 24 24" fill="none" style={{animationDelay: '0.7s'}}>
          <path d="M17 21V13H7V21M7 13L12 8L17 13M6 21H18" stroke="hsl(var(--nature-mint))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="absolute bottom-72 right-12 w-9 h-9 opacity-21 animate-pulse" viewBox="0 0 24 24" fill="none" style={{animationDelay: '1.3s'}}>
          <path d="M16 7H20A2 2 0 0 1 22 9V20A2 2 0 0 1 20 22H4A2 2 0 0 1 2 20V9A2 2 0 0 1 4 7H8M16 7V3A2 2 0 0 0 14 1H10A2 2 0 0 0 8 3V7M16 7H8" stroke="hsl(var(--primary))" strokeWidth="2"/>
        </svg>
        <svg className="absolute top-64 right-32 w-6 h-6 opacity-24 animate-bounce" viewBox="0 0 24 24" fill="none" style={{animationDelay: '0.2s'}}>
          <circle cx="12" cy="5" r="3" stroke="hsl(var(--success))" strokeWidth="2"/>
          <circle cx="12" cy="19" r="3" stroke="hsl(var(--success))" strokeWidth="2"/>
          <path d="M12 8V16" stroke="hsl(var(--success))" strokeWidth="2"/>
        </svg>
        
        {/* Geometric Patterns */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-8" viewBox="0 0 1200 900">
          <circle cx="100" cy="150" r="40" stroke="hsl(var(--success))" strokeWidth="1" fill="none" className="animate-pulse"/>
          <circle cx="1000" cy="300" r="60" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" className="animate-pulse"/>
          <circle cx="200" cy="700" r="30" stroke="hsl(var(--nature-mint))" strokeWidth="1" fill="none" className="animate-pulse"/>
          <circle cx="800" cy="200" r="50" stroke="hsl(var(--success))" strokeWidth="1.2" fill="none" className="animate-pulse"/>
          <circle cx="600" cy="800" r="35" stroke="hsl(var(--primary))" strokeWidth="1.1" fill="none" className="animate-pulse"/>
          <path d="M400,100 L500,200 L400,300 L300,200 Z" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" className="animate-pulse"/>
          <path d="M900,600 L980,680 L900,760 L820,680 Z" stroke="hsl(var(--success))" strokeWidth="1.2" fill="none" className="animate-pulse"/>
          <path d="M150,450 L230,530 L150,610 L70,530 Z" stroke="hsl(var(--nature-mint))" strokeWidth="1.1" fill="none" className="animate-pulse"/>
        </svg>
        
        {/* Grid Patterns */}
        <div className="absolute top-32 right-16">
          <div className="grid grid-cols-5 gap-3 opacity-15">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-32 left-24">
          <div className="grid grid-cols-4 gap-2 opacity-12">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-0.5 h-4 bg-success rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
            ))}
          </div>
        </div>
        <div className="absolute top-80 left-1/3">
          <div className="grid grid-cols-6 gap-1.5 opacity-16">
            {[...Array(24)].map((_, i) => (
              <div key={i} className="w-0.5 h-0.5 bg-nature-mint rounded-full animate-pulse" style={{animationDelay: `${i * 0.15}s`}}></div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-56 right-20">
          <div className="grid grid-cols-3 gap-3 opacity-18">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{animationDelay: `${i * 0.25}s`}}></div>
            ))}
          </div>
        </div>
        
        {/* Flowing Curves */}
        <div className="absolute top-20 left-1/2 w-40 h-40 border-2 border-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 border border-success/15 rounded-full animate-bounce"></div>
        <div className="absolute top-60 right-8 w-32 h-32 border border-nature-mint/12 rounded-full animate-pulse"></div>
        <div className="absolute bottom-80 left-16 w-24 h-24 border-2 border-primary/14 rounded-full animate-bounce"></div>
        
        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-20 h-20 border-r-2 border-b-2 border-primary/20 rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-l-2 border-t-2 border-success/15 rounded-tl-full"></div>
        <div className="absolute top-0 right-1/4 w-24 h-24 border-b-2 border-l-2 border-nature-mint/18 rounded-bl-full"></div>
        <div className="absolute bottom-0 left-1/3 w-28 h-28 border-t-2 border-r-2 border-primary/16 rounded-tr-full"></div>
      </div>
      
      <div className="container-width relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            {t('Powerful Features').split(' ').slice(0, 1).join(' ')} <span className="text-gradient">{t('Powerful Features').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('Everything you need to become a plant identification expert')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="nature-card p-6 h-full text-center space-y-6">
                <div className="flex justify-center">
                  <div className="feature-icon">
                    <feature.icon className="w-full h-full" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;