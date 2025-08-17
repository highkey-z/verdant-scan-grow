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
        {/* Animated Plant Icons */}
        <div className="absolute top-20 left-16 text-3xl animate-pulse opacity-22" style={{animationDelay: '0.4s'}}>🍀</div>
        <div className="absolute top-64 right-12 text-2xl animate-bounce opacity-18" style={{animationDelay: '0.9s'}}>🌳</div>
        <div className="absolute bottom-32 left-12 text-xl animate-pulse opacity-25" style={{animationDelay: '0.2s'}}>🌲</div>
        <div className="absolute top-40 left-1/3 text-2xl animate-bounce opacity-20" style={{animationDelay: '1.1s'}}>🌴</div>
        <div className="absolute bottom-48 right-1/4 text-xl animate-pulse opacity-16" style={{animationDelay: '0.7s'}}>🎋</div>
        <div className="absolute top-80 right-28 text-lg animate-bounce opacity-20" style={{animationDelay: '0.5s'}}>🌿</div>
        <div className="absolute bottom-20 left-1/4 text-2xl animate-pulse opacity-19" style={{animationDelay: '1.3s'}}>🪸</div>
        <div className="absolute top-96 left-20 text-xl animate-bounce opacity-17" style={{animationDelay: '0.8s'}}>🌱</div>
        
        {/* Wavy Patterns */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1200 1000">
          <path d="M0,300 Q200,250 400,300 T800,280 Q1000,260 1200,300" stroke="hsl(var(--nature-mint))" strokeWidth="2" fill="none" className="animate-pulse"/>
          <path d="M0,500 Q300,450 600,500 T1200,480" stroke="hsl(var(--success))" strokeWidth="1.5" fill="none" className="animate-pulse"/>
          <path d="M0,700 Q150,650 300,700 T600,680 Q750,660 900,700 T1200,680" stroke="hsl(var(--primary))" strokeWidth="1" fill="none" className="animate-pulse"/>
        </svg>
        
        {/* Scattered Elements */}
        <div className="absolute top-48 right-20 w-20 h-20 border border-success/20 transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-56 left-32 w-16 h-16 border border-primary/15 transform -rotate-12 animate-bounce"></div>
        <div className="absolute top-72 left-1/2 w-12 h-12 border-2 border-nature-mint/25 rounded-full animate-pulse"></div>
        
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
        
        {/* Organic Shapes */}
        <div className="absolute top-0 right-0 w-24 h-24 border-b-2 border-l-2 border-success/20 rounded-bl-full animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-36 h-36 border-t-2 border-r-2 border-nature-mint/15 rounded-tr-full animate-pulse"></div>
        <div className="absolute top-1/2 right-8 w-28 h-28 border border-primary/12 rounded-full animate-bounce"></div>
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