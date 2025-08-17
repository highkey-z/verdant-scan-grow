import { Mountain, Leaf, GraduationCap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Mountain,
      title: "For Nature Lovers",
      description: "Transform your hikes and outdoor adventures into learning experiences",
      details: [
        "Identify wildflowers and trees on trails",
        "Learn about local ecosystems",
        "Discover new species in your area",
        "Build your nature knowledge"
      ]
    },
    {
      icon: Leaf,
      title: "For Gardeners",
      description: "Become a more knowledgeable and successful gardener",
      details: [
        "Identify weeds vs. beneficial plants",
        "Spot plant diseases early",
        "Learn optimal growing conditions",
        "Get expert care recommendations"
      ]
    },
    {
      icon: GraduationCap,
      title: "For Students",
      description: "Perfect study companion for botany and biology courses",
      details: [
        "Study plant families and characteristics",
        "Complete field work assignments",
        "Build botanical vocabulary",
        "Access detailed plant information"
      ]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-nature-mint/5 via-background to-success/8 relative overflow-hidden">
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
            Perfect <span className="text-gradient">For Everyone</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're exploring nature, tending your garden, or studying botany
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
        <div className="mt-16 text-center">
          <div className="nature-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your <span className="text-gradient">Plant Journey?</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of users who are already discovering the world of plants with UseVerdant
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="hero-button px-6 py-3 rounded-lg font-medium transition-all duration-300">
                Download for iOS
              </button>
              <button className="hero-button px-6 py-3 rounded-lg font-medium transition-all duration-300">
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;