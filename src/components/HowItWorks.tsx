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
        {/* Animated Plant Icons */}
        <div className="absolute top-10 left-10 text-2xl animate-pulse opacity-20">🌱</div>
        <div className="absolute top-32 right-16 text-xl animate-bounce opacity-15">🍃</div>
        <div className="absolute bottom-20 left-20 text-lg animate-pulse opacity-25">🌿</div>
        <div className="absolute top-64 left-1/3 text-xl animate-bounce opacity-20">🌾</div>
        <div className="absolute bottom-32 right-1/4 text-2xl animate-pulse opacity-15">🌺</div>
        <div className="absolute top-48 right-32 text-lg animate-bounce opacity-20">🌸</div>
        
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
              {/* Connection Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-success/30 transform translate-x-0 z-0"></div>
              )}
              
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