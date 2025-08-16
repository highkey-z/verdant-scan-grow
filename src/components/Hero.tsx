import { Button } from "@/components/ui/button";
import { Download, Play, Star, Camera, Leaf, Flower, TreePine, Sprout, Cherry } from "lucide-react";
import qrCode from "@/assets/qr-code.png";
import roseCameraView from "@/assets/rose-camera-view.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-nature-mint/20 via-background to-success/10 min-h-[90vh]">
      {/* Floating Plant Elements - More diverse and scattered */}
      <div className="absolute top-16 left-8 w-12 h-12 text-success/40 animate-pulse">
        <Leaf className="w-full h-full rotate-12" />
      </div>
      <div className="absolute top-32 right-24 w-8 h-8 text-primary/35 hover-scale">
        <Flower className="w-full h-full" />
      </div>
      <div className="absolute top-48 left-24 w-10 h-10 text-nature-emerald/45">
        <TreePine className="w-full h-full rotate-45" />
      </div>
      <div className="absolute top-20 right-1/3 w-6 h-6 text-success/30">
        <Sprout className="w-full h-full" />
      </div>
      <div className="absolute bottom-32 right-16 w-9 h-9 text-success/50 animate-pulse">
        <Cherry className="w-full h-full" />
      </div>
      <div className="absolute top-40 left-1/2 w-7 h-7 text-primary/40">
        <Leaf className="w-full h-full rotate-90" />
      </div>
      <div className="absolute bottom-48 left-16 w-11 h-11 text-nature-emerald/35 hover-scale">
        <Flower className="w-full h-full rotate-180" />
      </div>
      <div className="absolute top-60 right-1/4 w-5 h-5 text-success/45">
        <Sprout className="w-full h-full rotate-45" />
      </div>
      <div className="absolute bottom-24 right-1/3 w-8 h-8 text-primary/30">
        <TreePine className="w-full h-full" />
      </div>
      <div className="absolute top-1/2 right-8 w-6 h-6 text-success/35">
        <Leaf className="w-full h-full -rotate-45" />
      </div>
      <div className="absolute bottom-60 left-1/3 w-9 h-9 text-nature-emerald/40 animate-pulse">
        <Cherry className="w-full h-full rotate-30" />
      </div>
      <div className="absolute top-72 left-12 w-7 h-7 text-primary/35">
        <Flower className="w-full h-full -rotate-30" />
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

            {/* Secondary Phone - Enhanced Results */}
            <div className="absolute -right-2 top-8 z-0">
              <div className="w-72 h-[520px] bg-gradient-to-b from-emerald-200 to-emerald-100 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  <div className="p-4 space-y-3">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-3 border border-rose-100">
                      <div className="text-lg font-bold text-primary">Garden Rose</div>
                      <div className="text-sm text-muted-foreground italic">Rosa × damascena</div>
                      <div className="text-xs text-rose-600 mt-1">🌹 "Queen of Flowers"</div>
                    </div>
                    
                    {/* Detailed Information */}
                    <div className="space-y-2 text-xs">
                      <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-200">
                        <div className="font-bold text-red-700 mb-2 flex items-center gap-1">
                          🛡️ Safety & Toxicity
                        </div>
                        <div className="space-y-1">
                          <div>• <strong>Humans:</strong> Completely safe</div>
                          <div>• <strong>Pets:</strong> Non-toxic to cats & dogs</div>
                          <div>• <strong>Edible:</strong> Petals used in cooking</div>
                          <div>• <strong>Medicinal:</strong> Rose hips rich in Vitamin C</div>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-200">
                        <div className="font-bold text-blue-700 mb-2 flex items-center gap-1">
                          🌱 Care & Cultivation
                        </div>
                        <div className="space-y-1">
                          <div>• <strong>Light:</strong> 6+ hours direct sunlight</div>
                          <div>• <strong>Soil:</strong> Well-draining, pH 6.0-7.0</div>
                          <div>• <strong>Water:</strong> Deep watering 2-3x/week</div>
                          <div>• <strong>Fertilizer:</strong> Balanced in spring</div>
                          <div>• <strong>Pruning:</strong> Late winter/early spring</div>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-200">
                        <div className="font-bold text-green-700 mb-2 flex items-center gap-1">
                          🌍 Ecological Benefits
                        </div>
                        <div className="space-y-1">
                          <div>• <strong>Pollinators:</strong> Attracts bees & butterflies</div>
                          <div>• <strong>Wildlife:</strong> Birds eat rose hips</div>
                          <div>• <strong>Companion:</strong> Good with lavender</div>
                          <div>• <strong>Natural:</strong> Pest-resistant varieties</div>
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-200">
                        <div className="font-bold text-purple-700 mb-2 flex items-center gap-1">
                          🌺 Similar Species
                        </div>
                        <div className="space-y-1">
                          <div>• <strong>Hybrid Tea:</strong> Large single blooms</div>
                          <div>• <strong>English:</strong> David Austin varieties</div>
                          <div>• <strong>Bourbon:</strong> Repeat flowering</div>
                          <div>• <strong>Rugosa:</strong> Disease resistant</div>
                        </div>
                      </div>
                      
                      <Button size="sm" className="w-full bg-gradient-to-r from-primary to-success text-white text-xs py-2 rounded-full hover-scale">
                        🌿 Add to My Garden Collection
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