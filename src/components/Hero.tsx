import { Button } from "@/components/ui/button";
import { Download, Play, Star, Camera, Leaf, Flower } from "lucide-react";
import qrCode from "@/assets/qr-code.png";
import roseCameraView from "@/assets/rose-camera-view.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-nature-mint/20 via-background to-success/10 min-h-[90vh]">
      {/* Floating Plant Elements */}
      <div className="absolute top-20 left-10 w-8 h-8 text-success/40">
        <Leaf className="w-full h-full" />
      </div>
      <div className="absolute top-40 right-32 w-6 h-6 text-primary/30">
        <Flower className="w-full h-full" />
      </div>
      <div className="absolute top-60 left-32 w-10 h-10 text-nature-emerald/40">
        <Leaf className="w-full h-full rotate-45" />
      </div>
      <div className="absolute bottom-40 right-20 w-7 h-7 text-success/50">
        <Flower className="w-full h-full" />
      </div>
      <div className="absolute top-32 left-1/3 w-5 h-5 text-primary/40">
        <Leaf className="w-full h-full rotate-12" />
      </div>
      <div className="absolute bottom-60 left-20 w-9 h-9 text-nature-emerald/30">
        <Flower className="w-full h-full rotate-90" />
      </div>
      <div className="absolute top-1/2 right-10 w-6 h-6 text-success/35">
        <Leaf className="w-full h-full -rotate-45" />
      </div>

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

          <div className="relative flex justify-center items-center">
            {/* Main Phone - Camera View */}
            <div className="relative z-10">
              <div className="w-80 h-[600px] bg-gradient-to-b from-sky-200 to-sky-100 rounded-[3rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                  {/* Camera Interface */}
                  <div className="absolute inset-0">
                    <img src={roseCameraView} alt="Rose in camera viewfinder" className="w-full h-full object-cover" />
                    
                    {/* Camera UI Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                      {/* Top UI */}
                      <div className="flex items-center justify-between text-white">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="text-sm font-medium bg-black/50 px-3 py-1 rounded-full">Unlimited IDs</div>
                        <div className="w-6 h-6"></div>
                      </div>
                      
                      {/* Center Focus Square */}
                      <div className="flex justify-center items-center">
                        <div className="w-32 h-32 border-2 border-white/80 rounded-lg relative">
                          <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-white"></div>
                          <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-white"></div>
                          <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-white"></div>
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-white"></div>
                        </div>
                      </div>
                      
                      {/* Bottom UI */}
                      <div className="flex justify-between items-center">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-white/20 rounded-full mb-1 mx-auto"></div>
                          <span className="text-xs text-white">Gallery</span>
                        </div>
                        <div className="w-16 h-16 bg-white rounded-full border-4 border-white/50 flex items-center justify-center">
                          <Camera className="w-8 h-8 text-gray-600" />
                        </div>
                        <div className="text-center">
                          <div className="w-8 h-8 bg-white/20 rounded-full mb-1 mx-auto flex items-center justify-center">
                            <span className="text-white text-xs">↻</span>
                          </div>
                          <span className="text-xs text-white">Flip</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Phone - Results */}
            <div className="absolute -right-4 top-12 z-0">
              <div className="w-64 h-[500px] bg-gradient-to-b from-emerald-200 to-emerald-100 rounded-[2.5rem] p-2 shadow-xl">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  <div className="p-4 space-y-4">
                    {/* Header */}
                    <div className="bg-rose-50 rounded-xl p-3">
                      <div className="text-lg font-semibold text-primary">Garden Rose</div>
                      <div className="text-xs text-muted-foreground italic">Rosa × damascena</div>
                    </div>
                    
                    {/* Detailed Information */}
                    <div className="space-y-3 text-xs">
                      <div className="bg-red-50 p-2 rounded-lg">
                        <div className="font-semibold text-red-700 mb-1">🛡️ Safety</div>
                        <div>• Safe for humans</div>
                        <div>• Non-toxic to pets</div>
                        <div>• Edible petals (organic)</div>
                      </div>
                      
                      <div className="bg-blue-50 p-2 rounded-lg">
                        <div className="font-semibold text-blue-700 mb-1">🌱 Care & Cultivation</div>
                        <div>• Full sun (6+ hours)</div>
                        <div>• Well-draining soil</div>
                        <div>• Water 2-3x per week</div>
                        <div>• Prune in late winter</div>
                      </div>
                      
                      <div className="bg-green-50 p-2 rounded-lg">
                        <div className="font-semibold text-green-700 mb-1">🌍 Ecological Impact</div>
                        <div>• Attracts bees & butterflies</div>
                        <div>• Supports pollinators</div>
                        <div>• Natural pest deterrent</div>
                      </div>
                      
                      <div className="bg-purple-50 p-2 rounded-lg">
                        <div className="font-semibold text-purple-700 mb-1">🌺 Similar Species</div>
                        <div>• Hybrid Tea Roses</div>
                        <div>• English Garden Roses</div>
                        <div>• Bourbon Roses</div>
                      </div>
                      
                      <Button size="sm" className="w-full bg-primary text-white text-xs py-2 rounded-full">
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
    </section>
  );
};

export default Hero;