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

      </div>
    </section>
  );
};

export default Features;