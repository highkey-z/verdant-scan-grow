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
    <section className="section-padding bg-gradient-to-b from-nature-mint/5 to-background">
      <div className="container-width">
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

        {/* Visual Illustration */}
        <div className="mt-16 flex justify-center">
          <div className="relative">
            <img
              src={scanIllustration}
              alt="Plant scanning illustration"
              className="w-64 h-64 object-contain floating-animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;