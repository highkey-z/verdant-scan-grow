import { Mountain, Leaf, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Benefits = () => {
  const profiles = [
    {
      icon: Mountain,
      title: "Trail Explorers",
      quote: "Every hike becomes a discovery",
      description: "Turn nature walks into learning adventures",
      image: "🥾"
    },
    {
      icon: Leaf,
      title: "Garden Enthusiasts",
      quote: "Know what grows in your space",
      description: "Master your garden ecosystem",
      image: "🌱"
    },
    {
      icon: GraduationCap,
      title: "Students & Researchers",
      quote: "Field work made simple",
      description: "Academic botany at your fingertips",
      image: "📚"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background via-nature-mint/3 to-background">
      <div className="container-width">
        {/* Offset Header */}
        <div className="max-w-2xl mb-20 ml-0 lg:ml-16">
          <h2 className="text-4xl font-black mb-6">
            Made for curious minds
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're hiking mountain trails, tending your garden, or studying for exams—UseVerdant adapts to your world.
          </p>
        </div>

        {/* Staggered Cards */}
        <div className="space-y-16">
          {profiles.map((profile, index) => (
            <div key={index} className={`grid grid-cols-12 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`col-span-12 lg:col-span-6 ${index % 2 === 1 ? 'lg:col-start-7' : ''}`}>
                <div className="space-y-6">
                  <div className="text-6xl">{profile.image}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{profile.title}</h3>
                    <p className="text-lg italic text-primary mb-4">"{profile.quote}"</p>
                    <p className="text-muted-foreground">{profile.description}</p>
                  </div>
                </div>
              </div>
              
              <div className={`col-span-12 lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-1' : 'lg:col-start-8'}`}>
                <div className="bg-card border rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent"></div>
                  <profile.icon className="w-12 h-12 text-primary mb-4" />
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-success rounded-full"></div>
                      <span>Real-time identification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-success rounded-full"></div>
                      <span>Offline capability</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-success rounded-full"></div>
                      <span>Detailed plant profiles</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
          <div className="max-w-md mx-auto space-y-6">
            <h3 className="text-2xl font-bold">Start exploring today</h3>
            <Button className="w-full bg-foreground text-background hover:bg-foreground/90 rounded-full">
              Get UseVerdant Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;