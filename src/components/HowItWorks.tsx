import { Camera, Scan, Sparkles } from "lucide-react";
import scanIllustration from "@/assets/scan-illustration.png";

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      title: "Open the App",
      description: "Launch UseVerdant and point your camera at any plant"
    },
    {
      icon: Scan,
      title: "Scan & Capture",
      description: "Take a photo of the plant you want to identify"
    },
    {
      icon: Sparkles,
      title: "Get Instant Results",
      description: "Receive detailed plant information and care tips immediately"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-nature-mint/5 to-background relative overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Plant SVG Icons */}
        <svg className="absolute top-10 left-10 w-8 h-8 opacity-25 animate-pulse" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L13.09 8.26L19 7L14.74 13.09L19 17L12 15L5 17L9.26 13.09L5 7L10.91 8.26L12 2Z" fill="hsl(var(--success))" />
        </svg>
        <svg className="absolute top-32 right-16 w-6 h-6 opacity-20 animate-bounce" viewBox="0 0 24 24" fill="none">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="hsl(var(--primary))" strokeWidth="2" fill="hsl(var(--primary))" fillOpacity="0.1"/>
          <path d="M8 12L12 8L16 12" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="absolute bottom-20 left-20 w-7 h-7 opacity-22 animate-pulse" viewBox="0 0 24 24" fill="none" style={{animationDelay: '0.5s'}}>
          <path d="M7 13L10 16L17 9" stroke="hsl(var(--success))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="9" stroke="hsl(var(--success))" strokeWidth="2" fill="hsl(var(--success))" fillOpacity="0.1"/>
        </svg>
        <svg className="absolute top-64 left-1/3 w-9 h-9 opacity-18 animate-bounce" viewBox="0 0 24 24" fill="none" style={{animationDelay: '0.8s'}}>
          <path d="M22 11.08V12A10 10 0 1 1 5.93 7.25" stroke="hsl(var(--nature-mint))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 4L12 14.01L9 11.01" stroke="hsl(var(--nature-mint))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="absolute bottom-32 right-1/4 w-6 h-6 opacity-25 animate-pulse" viewBox="0 0 24 24" fill="none" style={{animationDelay: '1.2s'}}>
          <polygon points="12,2 22,8.5 22,15.5 12,22 2,15.5 2,8.5" stroke="hsl(var(--primary))" strokeWidth="2" fill="hsl(var(--primary))" fillOpacity="0.1"/>
        </svg>
        <svg className="absolute top-48 right-32 w-5 h-5 opacity-20 animate-bounce" viewBox="0 0 24 24" fill="none" style={{animationDelay: '0.6s'}}>
          <path d="M6 9L12 15L18 9" stroke="hsl(var(--success))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        
        {/* Flowing Lines */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1200 800">
          <path d="M0,200 Q300,100 600,200 T1200,150" stroke="hsl(var(--primary))" strokeWidth="2" fill="none" className="animate-pulse"/>
          <path d="M0,400 Q400,350 800,400 T1200,380" stroke="hsl(var(--success))" strokeWidth="1.5" fill="none" className="animate-pulse"/>
          <path d="M0,600 Q200,550 400,600 T800,580" stroke="hsl(var(--nature-mint))" strokeWidth="1" fill="none" className="animate-pulse"/>
        </svg>
        
        {/* Hexagon Patterns */}
        <div className="absolute top-40 right-10 w-16 h-16 border border-primary/20 transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-40 left-32 w-12 h-12 border border-success/15 transform rotate-12 animate-bounce"></div>
        <div className="absolute top-80 left-1/2 w-8 h-8 border border-nature-mint/20 transform -rotate-12 animate-pulse"></div>
        
        {/* Dot Patterns */}
        <div className="absolute top-24 left-1/4">
          <div className="grid grid-cols-3 gap-2 opacity-20">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-primary rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-16 right-20">
          <div className="grid grid-cols-4 gap-1.5 opacity-15">
            {[...Array(16)].map((_, i) => (
              <div key={i} className="w-0.5 h-0.5 bg-success rounded-full animate-pulse" style={{animationDelay: `${i * 0.15}s`}}></div>
            ))}
          </div>
        </div>
        
        {/* Floating Diamonds */}
        <div className="absolute top-56 right-1/3 w-6 h-6 border border-primary/25 transform rotate-45 animate-bounce"></div>
        <div className="absolute bottom-48 left-1/4 w-4 h-4 border border-success/20 transform rotate-45 animate-pulse"></div>
        
        {/* Organic Curves */}
        <div className="absolute bottom-0 left-0 w-32 h-32 border-t-2 border-l-2 border-nature-mint/15 rounded-tl-full"></div>
        <div className="absolute top-0 right-0 w-24 h-24 border-b-2 border-r-2 border-primary/20 rounded-br-full"></div>
      </div>
      
      <div className="container-width relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            How It <span className="text-gradient">Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plant identification made simple in just three easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="nature-card p-8 text-center relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="feature-icon group-hover:scale-110">
                    <step.icon className="w-full h-full" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-success text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {index + 1}
                    </span>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
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

export default HowItWorks;