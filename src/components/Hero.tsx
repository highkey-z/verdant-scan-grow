import { Button } from "@/components/ui/button";
import { Download, Play, Star } from "lucide-react";
import qrCode from "@/assets/qr-code.png";
import rosesDetailed from "@/assets/roses-detailed.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-nature-mint/20 via-background to-success/10 min-h-[90vh]">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 grid grid-cols-4 gap-1">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1 h-1 bg-primary/30 rounded-full"></div>
        ))}
      </div>
      
      {/* Floating Plant Elements */}
      <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-success/20 to-primary/20 rounded-full flex items-center justify-center">
        <div className="w-8 h-8 bg-success/40 rounded-full"></div>
      </div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-br from-nature-emerald/20 to-success/20 rounded-full"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-gradient-to-br from-primary/15 to-nature-mint/25 rounded-full"></div>

      <div className="container-width py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-primary">UseVerdant</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground/90">
                AI Botanist In<br />Your Pocket
              </h2>
            </div>

            {/* Download Section */}
            <div className="space-y-6">
              {/* QR Code and Store Buttons */}
              <div className="flex items-start gap-6">
                <div className="bg-white/80 p-4 rounded-2xl shadow-soft">
                  <img src={qrCode} alt="Download QR Code" className="w-20 h-20" />
                </div>
                <div className="space-y-3">
                  <Button size="lg" className="bg-black text-white hover:bg-black/90 flex items-center gap-3 px-6 rounded-xl">
                    <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                      <span className="text-black text-xs font-bold">⌘</span>
                    </div>
                    <div className="text-left">
                      <div className="text-xs opacity-80">Download on the</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </Button>
                  <Button size="lg" className="bg-black text-white hover:bg-black/90 flex items-center gap-3 px-6 rounded-xl">
                    <Play className="w-6 h-6 fill-current" />
                    <div className="text-left">
                      <div className="text-xs opacity-80">GET IT ON</div>
                      <div className="font-semibold">Google Play</div>
                    </div>
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-primary">150000+</div>
                    <div className="text-sm text-muted-foreground">5-Star Reviews</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-primary">25M+</div>
                  <div className="text-sm text-muted-foreground">Downloads</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Phone Mockups */}
          <div className="relative flex justify-center items-center">
            {/* Main Phone */}
            <div className="relative z-10">
              <div className="w-80 h-[600px] bg-gradient-to-b from-sky-200 to-sky-100 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Phone Content - Plant Identification */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="text-sm font-medium">Unlimited IDs</div>
                      <div className="w-6 h-6"></div>
                    </div>
                    
                    <div className="relative">
                      <img src={rosesDetailed} alt="Beautiful red roses" className="w-full h-48 object-cover rounded-2xl" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                    </div>

                    <div className="bg-emerald-50 rounded-2xl p-4">
                      <div className="text-lg font-semibold text-primary mb-2">Garden Rose</div>
                      <div className="text-sm text-muted-foreground italic mb-3">Rosa × damascena</div>
                      
                      <div className="grid grid-cols-2 gap-3">
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>Safe for gardens</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>Attracts pollinators</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between text-xs text-muted-foreground">
                      <div className="text-center">
                        <div className="w-8 h-8 bg-sky-100 rounded-full mb-1"></div>
                        <span>Photos</span>
                      </div>
                      <div className="text-center">
                        <div className="w-8 h-8 bg-blue-100 rounded-full mb-1"></div>
                        <span>Instruction</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Phone */}
            <div className="absolute -right-8 top-12 z-0 transform rotate-12">
              <div className="w-64 h-[500px] bg-gradient-to-b from-emerald-200 to-emerald-100 rounded-[2.5rem] p-2 shadow-xl">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  <div className="p-4 space-y-3">
                    <div className="bg-rose-50 rounded-xl p-3">
                      <div className="text-base font-semibold text-primary">Garden Rose Details</div>
                      <div className="text-xs text-muted-foreground italic">Rosa × damascena</div>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div><strong>Safety:</strong> Safe for humans and pets</div>
                      <div><strong>Care:</strong> Full sun, well-drained soil</div>
                      <div><strong>Ecology:</strong> Attracts bees, butterflies</div>
                      <div><strong>Similar:</strong> Hybrid tea roses</div>
                      <div className="flex justify-end">
                        <Button size="sm" className="bg-primary text-white text-xs px-4 py-1 rounded-full">
                          + Add to My Garden
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;