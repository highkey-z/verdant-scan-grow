import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-t from-nature-mint/5 to-background">
      <div className="container-width">
        {/* Minimal Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-black mb-4">Real stories</h2>
          <div className="w-16 h-px bg-primary mx-auto"></div>
        </div>

        {/* Testimonial Stories */}
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed">
              "I discovered 23 new species on my last hiking trip. UseVerdant turned a simple walk into a botanical expedition."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-success flex items-center justify-center text-primary-foreground font-semibold">
                SC
              </div>
              <div className="text-left">
                <div className="font-medium">Sarah Chen</div>
                <div className="text-sm text-muted-foreground">Botany Student, UC Berkeley</div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed">
              "My garden went from chaos to curated in one season. Now I know exactly what I'm growing and how to care for it."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-success to-nature-emerald flex items-center justify-center text-primary-foreground font-semibold">
                ET
              </div>
              <div className="text-left">
                <div className="font-medium">Emma Thompson</div>
                <div className="text-sm text-muted-foreground">Home Gardener, Portland</div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-6">
            <blockquote className="text-2xl lg:text-3xl font-light leading-relaxed">
              "My students actually get excited about field work now. This app made botany accessible and fun."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-nature-emerald to-primary flex items-center justify-center text-primary-foreground font-semibold">
                JW
              </div>
              <div className="text-left">
                <div className="font-medium">Dr. James Wilson</div>
                <div className="text-sm text-muted-foreground">Biology Professor, NYU</div>
              </div>
            </div>
          </div>
        </div>

        {/* Metrics - Scattered layout */}
        <div className="mt-32 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center lg:text-left">
              <div className="text-4xl font-black text-foreground mb-2">100K+</div>
              <div className="text-muted-foreground">Active users</div>
            </div>
            <div className="text-center lg:text-right lg:mt-8">
              <div className="text-4xl font-black text-foreground mb-2">95%</div>
              <div className="text-muted-foreground">Accuracy rate</div>
            </div>
            <div className="text-center lg:text-left lg:-mt-4">
              <div className="text-4xl font-black text-foreground mb-2">4.8★</div>
              <div className="text-muted-foreground">App Store rating</div>
            </div>
            <div className="text-center lg:text-right lg:mt-12">
              <div className="text-4xl font-black text-foreground mb-2">50K+</div>
              <div className="text-muted-foreground">Plant species</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;