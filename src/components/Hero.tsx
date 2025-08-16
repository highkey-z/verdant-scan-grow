import { Button } from "@/components/ui/button";
import { Download, Play } from "lucide-react";
import appMockup from "@/assets/app-mockup.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-nature-mint/10 to-success/5">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                <span className="text-gradient">UseVerdant</span>
              </h1>
              <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl">
                Identify any plant instantly with AI-powered scanning
              </p>
            </div>

            <p className="text-lg text-foreground/80 max-w-xl">
              Point your camera at any plant and discover its name, care tips, and growing advice in seconds. Perfect for nature lovers, gardeners, and students.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="hero-button group">
                <Download className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                App Store
              </Button>
              <Button size="lg" className="hero-button group">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Google Play
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-muted-foreground justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Free to download</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>No ads or subscriptions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>Works offline</span>
              </div>
            </div>
          </div>

          {/* App Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={appMockup}
                alt="UseVerdant app mockup showing plant identification interface"
                className="app-mockup w-80 sm:w-96 h-auto floating-animation"
              />
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-success/20 to-primary/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-primary/20 to-nature-emerald/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;