import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Botany Student",
      content: "UseVerdant has been a game-changer for my field studies. The accuracy is incredible and it's so much faster than using field guides!",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Mike Rodriguez",
      role: "Hiking Enthusiast",
      content: "I love discovering new plants on my hikes. This app makes every trail an educational adventure. Highly recommend!",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emma Thompson",
      role: "Home Gardener",
      content: "Finally figured out what all those mystery plants in my yard are! The care tips have helped me become a much better gardener.",
      rating: 5,
      avatar: "ET"
    },
    {
      name: "Dr. James Wilson",
      role: "Biology Teacher",
      content: "My students love using UseVerdant for their projects. It's made plant identification engaging and accessible for everyone.",
      rating: 5,
      avatar: "JW"
    }
  ];

  return (
    <section className="section-padding">
      <div className="container-width">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold">
            What Users Are <span className="text-gradient">Saying</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied users who love UseVerdant
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="nature-card p-6 h-full space-y-4">
                {/* Rating */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-success text-success" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-sm text-foreground/80 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-border/50">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-success flex items-center justify-center text-primary-foreground text-sm font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-medium text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "100K+", label: "Downloads" },
            { number: "4.8", label: "App Store Rating" },
            { number: "50K+", label: "Plants Identified" },
            { number: "95%", label: "User Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-3xl font-bold text-gradient">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;