import { Brain, BookOpen, Clock, Users } from "lucide-react";
import aiPlantIcon from "@/assets/ai-plant-icon.png";

const Features = () => {
  return (
    <section className="py-32 relative">
      <div className="container-width">
        {/* Unconventional Header */}
        <div className="max-w-3xl mb-24">
          <div className="flex items-start gap-6">
            <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent"></div>
            <div>
              <h2 className="text-5xl font-black mb-4">
                How it works
              </h2>
              <p className="text-lg text-muted-foreground">
                Three simple steps to unlock the secret life of plants around you.
              </p>
            </div>
          </div>
        </div>

        {/* Stepped Layout */}
        <div className="space-y-32">
          {/* Step 1 */}
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-5">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-bold">01</div>
                  <div className="h-px flex-1 bg-gradient-to-r from-foreground/20 to-transparent"></div>
                </div>
                <h3 className="text-3xl font-bold">Point & Capture</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Open the app, point your camera at any plant, and take a photo. Our AI instantly analyzes the image in real-time.
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <Brain className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">Advanced neural networks</span>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <div className="bg-gradient-to-br from-nature-mint/10 to-success/5 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-primary/10 blur-2xl"></div>
                <div className="w-full h-64 bg-card rounded-xl flex items-center justify-center">
                  <Brain className="w-16 h-16 text-primary" />
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
              <div className="bg-gradient-to-br from-primary/5 to-nature-emerald/10 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full bg-success/10 blur-2xl"></div>
                <div className="w-full h-64 bg-card rounded-xl flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-success" />
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-bold">02</div>
                  <div className="h-px flex-1 bg-gradient-to-r from-foreground/20 to-transparent"></div>
                </div>
                <h3 className="text-3xl font-bold">Instant Results</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Get detailed information about your plant including scientific name, common names, and key characteristics.
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <BookOpen className="w-4 h-4 text-success" />
                  <span className="text-muted-foreground">Comprehensive plant database</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-5">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center font-bold">03</div>
                  <div className="h-px flex-1 bg-gradient-to-r from-foreground/20 to-transparent"></div>
                </div>
                <h3 className="text-3xl font-bold">Learn & Grow</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Save your discoveries, get care instructions, and build your personal plant collection over time.
                </p>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-nature-emerald" />
                  <span className="text-muted-foreground">Personal plant journal</span>
                </div>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <div className="bg-gradient-to-br from-nature-emerald/5 to-primary/10 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-1/2 right-8 w-12 h-12 rounded-full bg-nature-emerald/10 blur-xl"></div>
                <div className="w-full h-64 bg-card rounded-xl flex items-center justify-center">
                  <Clock className="w-16 h-16 text-nature-emerald" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;