import { Mountain, Leaf, GraduationCap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollTransition } from "@/hooks/useScrollTransition";

const Benefits = () => {
  const { t } = useLanguage();
  const sectionRef = useScrollTransition();
  
  const benefits = [
    {
      icon: Mountain,
      title: t("For Nature Lovers"),
      description: t("Transform your hikes and outdoor adventures into learning experiences"),
      details: [
        t("Identify wildflowers and trees on trails"),
        t("Learn about local ecosystems"),
        t("Discover new species in your area"),
        t("Build your nature knowledge")
      ]
    },
    {
      icon: Leaf,
      title: t("For Gardeners"),
      description: t("Become a more knowledgeable and successful gardener"),
      details: [
        t("Identify weeds vs. beneficial plants"),
        t("Spot plant diseases early"),
        t("Learn optimal growing conditions"),
        t("Get expert care recommendations")
      ]
    },
    {
      icon: GraduationCap,
      title: t("For Students"),
      description: t("Perfect study companion for botany and biology courses"),
      details: [
        t("Study plant families and characteristics"),
        t("Complete field work assignments"),
        t("Build botanical vocabulary"),
        t("Access detailed plant information")
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="perfect-for-everyone" 
      className="section-padding section-transition bg-gradient-to-br from-nature-mint/5 via-background to-success/8 relative overflow-hidden"
    >
      {/* Background Design Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Clean SVG Plant Icons */}
        <svg className="absolute top-20 left-16 w-12 h-12 opacity-22 animate-pulse" viewBox="0 0 24 24" fill="none" style={{animationDelay: '0.4s'}}>
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="hsl(var(--success))" strokeWidth="2" fill="hsl(var(--success))" fillOpacity="0.1"/>
          <polyline points="2,17 12,12 22,17" stroke="hsl(var(--success))" strokeWidth="2"/>
          <polyline points="2,21 12,16 22,21" stroke="hsl(var(--success))" strokeWidth="2"/>
        </svg>
        <svg className="absolute top-64 right-12 w-9 h-9 opacity-18 animate-bounce" viewBox="0 0 24 24" fill="none" style={{animationDelay: '0.9s'}}>
          <circle cx="12" cy="12" r="3" stroke="hsl(var(--nature-mint))" strokeWidth="2"/>
          <path d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22" stroke="hsl(var(--nature-mint))" strokeWidth="2"/>
        </svg>
        <svg className="absolute bottom-32 left-12 w-8 h-8 opacity-25 animate-pulse" viewBox="0 0 24 24" fill="none" style={{animationDelay: '0.2s'}}>
          <path d="M21 16V8A2 2 0 0 0 19 6H5A2 2 0 0 0 3 8V16A2 2 0 0 0 5 18H19A2 2 0 0 0 21 16Z" stroke="hsl(var(--primary))" strokeWidth="2" fill="hsl(var(--primary))" fillOpacity="0.1"/>
          <polyline points="7,10 12,15 17,10" stroke="hsl(var(--primary))" strokeWidth="2"/>
        </svg>
        <svg className="absolute top-40 left-1/3 w-10 h-10 opacity-20 animate-bounce" viewBox="0 0 24 24" fill="none" style={{animationDelay: '1.1s'}}>
          <polygon points="12,2 15.09,8.26 22,9 16,14.74 18,22 12,19 6,22 8,14.74 2,9 8.91,8.26" stroke="hsl(var(--success))" strokeWidth="2" fill="hsl(var(--success))" fillOpacity="0.1"/>
        </svg>
        <svg className="absolute bottom-48 right-1/4 w-7 h-7 opacity-16 animate-pulse" viewBox="0 0 24 24" fill="none" style={{animationDelay: '0.7s'}}>
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="hsl(var(--nature-mint))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="absolute top-80 right-28 w-6 h-6 opacity-20 animate-bounce" viewBox="0 0 24 24" fill="none" style={{animationDelay: '0.5s'}}>
          <path d="M9 11H15M9 15H15M17 3A2 2 0 0 1 19 5V19A2 2 0 0 1 17 21H7A2 2 0 0 1 5 19V5A2 2 0 0 1 7 3Z" stroke="hsl(var(--primary))" strokeWidth="2"/>
        </svg>
        <svg className="absolute bottom-20 left-1/4 w-9 h-9 opacity-19 animate-pulse" viewBox="0 0 24 24" fill="none" style={{animationDelay: '1.3s'}}>
          <circle cx="11" cy="11" r="8" stroke="hsl(var(--success))" strokeWidth="2"/>
          <path d="M21 21L16.65 16.65" stroke="hsl(var(--success))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="absolute top-96 left-20 w-8 h-8 opacity-17 animate-bounce" viewBox="0 0 24 24" fill="none" style={{animationDelay: '0.8s'}}>
          <path d="M17 21V13H7V21M7 13L12 8L17 13M6 21H18" stroke="hsl(var(--nature-mint))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="absolute top-16 right-1/3 w-7 h-7 opacity-23 animate-pulse" viewBox="0 0 24 24" fill="none" style={{animationDelay: '0.3s'}}>
          <path d="M12 6V4M6 6L5 5M18 6L19 5M6 18L5 19M18 18L19 19M4 12H2M22 12H20M17 12A5 5 0 0 0 12 7A5 5 0 0 0 7 12A5 5 0 0 0 12 17A5 5 0 0 0 17 12Z" stroke="hsl(var(--primary))" strokeWidth="2"/>
        </svg>
        <svg className="absolute bottom-64 right-8 w-6 h-6 opacity-21 animate-bounce" viewBox="0 0 24 24" fill="none" style={{animationDelay: '1s'}}>
          <path d="M16 7H20A2 2 0 0 1 22 9V20A2 2 0 0 1 20 22H4A2 2 0 0 1 2 20V9A2 2 0 0 1 4 7H8M16 7V3A2 2 0 0 0 14 1H10A2 2 0 0 0 8 3V7M16 7H8" stroke="hsl(var(--success))" strokeWidth="2"/>
        </svg>
        <svg className="absolute top-56 left-8 w-8 h-8 opacity-18 animate-pulse" viewBox="0 0 24 24" fill="none" style={{animationDelay: '0.6s'}}>
          <circle cx="12" cy="5" r="3" stroke="hsl(var(--nature-mint))" strokeWidth="2"/>
          <circle cx="12" cy="19" r="3" stroke="hsl(var(--nature-mint))" strokeWidth="2"/>
          <path d="M12 8V16" stroke="hsl(var(--nature-mint))" strokeWidth="2"/>
        </svg>
        <svg className="absolute bottom-80 left-1/2 w-9 h-9 opacity-20 animate-bounce" viewBox="0 0 24 24" fill="none" style={{animationDelay: '1.2s'}}>
          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" stroke="hsl(var(--primary))" strokeWidth="2" fill="hsl(var(--primary))" fillOpacity="0.1"/>
        </svg>
        
        {/* Wavy Patterns */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1200 1000">
          <path d="M0,300 Q200,250 400,300 T800,280 Q1000,260 1200,300" stroke="hsl(var(--nature-mint))" strokeWidth="2" fill="none" className="animate-pulse"/>
          <path d="M0,500 Q300,450 600,500 T1200,480" stroke="hsl(var(--success))" strokeWidth="1.5" fill="none" className="animate-pulse"/>
          <path d="M0,700 Q150,650 300,700 T600,680 Q750,660 900,700 T1200,680" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" className="animate-pulse"/>
          <path d="M0,100 Q100,50 200,100 T400,80 Q500,60 600,100 T800,80" stroke="hsl(var(--nature-mint))" strokeWidth="1.2" fill="none" className="animate-pulse"/>
          <path d="M400,900 Q600,850 800,900 T1200,880" stroke="hsl(var(--success))" strokeWidth="1.3" fill="none" className="animate-pulse"/>
        </svg>
        
        {/* Scattered Elements */}
        <div className="absolute top-48 right-20 w-20 h-20 border border-success/20 transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-56 left-32 w-16 h-16 border border-primary/15 transform -rotate-12 animate-bounce"></div>
        <div className="absolute top-72 left-1/2 w-12 h-12 border-2 border-nature-mint/25 rounded-full animate-pulse"></div>
        <div className="absolute bottom-88 right-1/3 w-18 h-18 border border-success/18 transform rotate-30 animate-bounce"></div>
        <div className="absolute top-32 left-24 w-14 h-14 border-2 border-primary/20 transform -rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 right-16 w-10 h-10 border border-nature-mint/22 rounded-full animate-bounce"></div>
        
        {/* Star Patterns */}
        <div className="absolute top-28 right-1/3">
          <div className="grid grid-cols-6 gap-2 opacity-18">
            {[...Array(18)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-success rounded-full animate-pulse" style={{animationDelay: `${i * 0.15}s`}}></div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-24 right-16">
          <div className="grid grid-cols-3 gap-3 opacity-20">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" style={{animationDelay: `${i * 0.25}s`}}></div>
            ))}
          </div>
        </div>
        <div className="absolute top-84 left-1/4">
          <div className="grid grid-cols-4 gap-1.5 opacity-16">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-0.5 h-3 bg-nature-mint rounded-full animate-pulse" style={{animationDelay: `${i * 0.18}s`}}></div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-72 left-16">
          <div className="grid grid-cols-5 gap-2 opacity-19">
            {[...Array(15)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-success rounded-full animate-pulse" style={{animationDelay: `${i * 0.12}s`}}></div>
            ))}
          </div>
        </div>
        
        {/* Organic Shapes */}
        <div className="absolute top-0 right-0 w-24 h-24 border-b-2 border-l-2 border-success/20 rounded-bl-full animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-36 h-36 border-t-2 border-r-2 border-nature-mint/15 rounded-tr-full animate-pulse"></div>
        <div className="absolute top-1/2 right-8 w-28 h-28 border border-primary/12 rounded-full animate-bounce"></div>
        <div className="absolute top-1/4 left-12 w-32 h-32 border border-success/14 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-24 w-20 h-20 border-2 border-nature-mint/18 rounded-full animate-bounce"></div>
      </div>
      
      <div className="container-width relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            {t('Perfect For Everyone').split(' ').slice(0, 1).join(' ')} <span className="text-gradient">{t('Perfect For Everyone').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('Whether you\'re exploring nature, tending your garden, or studying botany')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group">
              <div className="nature-card p-8 h-full space-y-6">
                <div className="text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="feature-icon">
                      <benefit.icon className="w-full h-full" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {benefit.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-success rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-foreground/80">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div id="ready-to-start" className="mt-16 text-center">
          <div className="nature-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              {t('Ready to Start Your Plant Journey?').split(' ').slice(0, 5).join(' ')} <span className="text-gradient">{t('Ready to Start Your Plant Journey?').split(' ').slice(5).join(' ')}</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('Join thousands of users who are already discovering the world of plants with UseVerdant')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="hero-button-dark flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                {t('Download for iOS')}
              </button>
              <button className="hero-button-dark flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                {t('Download for Android')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;