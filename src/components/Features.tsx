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
    <section className="section-padding">
      <div className="container-width">
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

        {/* Feature Highlight */}
        <div className="mt-16 nature-card p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <h3 className="text-3xl font-bold">
                Powered by <span className="text-gradient">Advanced AI</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our cutting-edge artificial intelligence has been trained on millions of plant images to provide you with the most accurate identification results. Whether it's a common houseplant or a rare wildflower, UseVerdant can identify it.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="font-semibold text-success">50,000+</div>
                  <div className="text-muted-foreground">Plant species</div>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-success">95%</div>
                  <div className="text-muted-foreground">Accuracy rate</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src={aiPlantIcon}
                alt="AI plant identification technology"
                className="w-64 h-64 object-contain floating-animation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;