import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-background">
      {/* Organic Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-nature-emerald/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-20 w-48 h-48 rounded-full bg-success/5 blur-3xl"></div>
        <div className="absolute top-2/3 left-1/3 w-20 h-20 rounded-full bg-primary/15 blur-2xl"></div>
      </div>

      <div className="container-width relative">
        {/* Asymmetrical Layout */}
        <div className="min-h-screen flex items-center">
          <div className="grid grid-cols-12 gap-6 w-full">
            {/* Main Content - Offset positioning */}
            <div className="col-span-12 lg:col-span-7 lg:col-start-2 pt-20 lg:pt-32">
              <div className="space-y-12">
                {/* Brand Mark */}
                <div className="flex items-center gap-4">
                  <div className="w-3 h-12 bg-gradient-to-b from-primary to-success rounded-full"></div>
                  <div>
                    <h1 className="text-6xl lg:text-8xl font-black tracking-tight">
                      Use<span className="text-primary">Verdant</span>
                    </h1>
                    <div className="h-px w-24 bg-gradient-to-r from-success to-transparent mt-2"></div>
                  </div>
                </div>

                {/* Description */}
                <div className="max-w-lg space-y-6">
                  <p className="text-2xl font-light leading-relaxed text-foreground/90">
                    Point, snap, learn. Turn every walk into a botanical discovery.
                  </p>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Professional-grade plant identification that fits in your pocket. No internet required.
                  </p>
                </div>

                {/* Action Area */}
                <div className="space-y-8">
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8">
                      <Download className="w-4 h-4 mr-2" />
                      Download Free
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full px-6 border-2">
                      <Play className="w-4 h-4 mr-2" />
                      Watch Demo
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-8 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-success rounded-full"></div>
                      Works offline
                    </span>
                    <span className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-success rounded-full"></div>
                      No subscriptions
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Mockup - Floating position */}
            <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex items-center justify-center lg:justify-end relative">
              <div className="relative">
                <img
                  src={appMockup}
                  alt="UseVerdant app interface"
                  className="w-72 h-auto transform rotate-3 hover:rotate-6 transition-transform duration-700"
                />
                {/* Subtle glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-success/5 rounded-3xl transform rotate-3 -z-10 blur-xl scale-110"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats - Unconventional placement */}
        <div className="absolute bottom-8 left-4 right-4">
          <div className="flex justify-between items-end text-xs text-muted-foreground">
            <div>
              <div className="text-2xl font-bold text-foreground">50K+</div>
              <div>species database</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-foreground">95%</div>
              <div>accuracy rate</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-foreground">100K+</div>
              <div>downloads</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;