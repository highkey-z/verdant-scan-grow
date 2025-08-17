import { Brain, BookOpen, Clock, Users } from "lucide-react";
import aiPlantIcon from "@/assets/ai-plant-icon.png";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Plant Recognition",
      description: "Advanced machine learning algorithms identify plants with 95% accuracy from a single photo"
    },
    {
      icon: BookOpen,
      title: "Care Tips & Advice",
      description: "Get personalized growing tips, watering schedules, and expert gardening advice for each plant"
    },
    {
      icon: Clock,
      title: "Scan History",
      description: "Keep track of all your plant discoveries with a comprehensive history of your scans"
    },
    {
      icon: Users,
      title: "Community Sharing",
      description: "Share your plant discoveries with fellow nature enthusiasts and build your botanical knowledge"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-success/5 via-background to-primary/5 relative overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Plant Icons */}
        <div className="absolute top-16 left-12 text-3xl animate-pulse opacity-20" style={{animationDelay: '0.5s'}}>🌻</div>
        <div className="absolute top-48 right-8 text-2xl animate-bounce opacity-15" style={{animationDelay: '1s'}}>🌼</div>
        <div className="absolute bottom-24 left-8 text-xl animate-pulse opacity-25" style={{animationDelay: '0.3s'}}>🌷</div>
        <div className="absolute top-72 left-1/4 text-2xl animate-bounce opacity-20" style={{animationDelay: '0.8s'}}>🪴</div>
        <div className="absolute bottom-40 right-1/3 text-xl animate-pulse opacity-15" style={{animationDelay: '1.2s'}}>🌹</div>
        <div className="absolute top-96 right-24 text-lg animate-bounce opacity-20" style={{animationDelay: '0.6s'}}>🌻</div>
        <div className="absolute bottom-16 left-1/3 text-2xl animate-pulse opacity-18" style={{animationDelay: '0.9s'}}>🌵</div>
        
        {/* Geometric Patterns */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-8" viewBox="0 0 1200 900">
          <circle cx="100" cy="150" r="40" stroke="hsl(var(--success))" strokeWidth="1" fill="none" className="animate-pulse"/>
          <circle cx="1000" cy="300" r="60" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="none" className="animate-pulse"/>
          <circle cx="200" cy="700" r="30" stroke="hsl(var(--nature-mint))" strokeWidth="1" fill="none" className="animate-pulse"/>
          <path d="M400,100 L500,200 L400,300 L300,200 Z" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" className="animate-pulse"/>
          <path d="M900,600 L980,680 L900,760 L820,680 Z" stroke="hsl(var(--success))" strokeWidth="1.2" fill="none" className="animate-pulse"/>
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
        
        {/* Flowing Curves */}
        <div className="absolute top-20 left-1/2 w-40 h-40 border-2 border-primary/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-32 w-28 h-28 border border-success/15 rounded-full animate-bounce"></div>
        
        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-20 h-20 border-r-2 border-b-2 border-primary/20 rounded-br-full"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-l-2 border-t-2 border-success/15 rounded-tl-full"></div>
      </div>
      
      <div className="container-width relative z-10">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to become a plant identification expert
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