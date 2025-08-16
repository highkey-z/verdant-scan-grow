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
    <section className="section-padding bg-gradient-to-b from-background to-nature-mint/5">
      <div className="container-width">
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