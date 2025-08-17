import { Button } from "@/components/ui/button";
import { Download, Play, Star, Camera, Leaf, Flower, TreePine, Sprout, Cherry, Shield, Heart, Droplets, Sun, Users, Recycle } from "lucide-react";
import qrCode from "@/assets/qr-code.png";
import roseCameraView from "@/assets/rose-camera-view.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-nature-mint/20 via-background to-success/10 min-h-[90vh]">
      {/* Floating Plant Bubbles - Circular with white borders */}
      <div className="absolute top-20 left-16 w-20 h-20 bg-white rounded-full border-2 border-white shadow-lg flex items-center justify-center">
        <Leaf className="w-8 h-8 text-green-600" />
      </div>
      <div className="absolute top-32 right-32 w-16 h-16 bg-white rounded-full border-2 border-white shadow-lg flex items-center justify-center">
        <Flower className="w-6 h-6 text-pink-500" />
      </div>
      <div className="absolute top-48 left-32 w-18 h-18 bg-white rounded-full border-2 border-white shadow-lg flex items-center justify-center">
        <TreePine className="w-7 h-7 text-green-700" />
      </div>
      <div className="absolute top-24 right-1/4 w-14 h-14 bg-white rounded-full border-2 border-white shadow-lg flex items-center justify-center">
        <Sprout className="w-5 h-5 text-green-500" />
      </div>
      <div className="absolute bottom-40 right-20 w-20 h-20 bg-white rounded-full border-2 border-white shadow-lg flex items-center justify-center">
        <Cherry className="w-8 h-8 text-red-500" />
      </div>
      <div className="absolute top-40 left-1/2 w-16 h-16 bg-white rounded-full border-2 border-white shadow-lg flex items-center justify-center">
        <Leaf className="w-6 h-6 text-green-600 rotate-45" />
      </div>
      <div className="absolute bottom-56 left-20 w-18 h-18 bg-white rounded-full border-2 border-white shadow-lg flex items-center justify-center">
        <Flower className="w-7 h-7 text-purple-500" />
      </div>
      <div className="absolute top-64 right-1/3 w-14 h-14 bg-white rounded-full border-2 border-white shadow-lg flex items-center justify-center">
        <Sprout className="w-5 h-5 text-lime-500" />
      </div>
      <div className="absolute bottom-32 right-1/2 w-16 h-16 bg-white rounded-full border-2 border-white shadow-lg flex items-center justify-center">
        <TreePine className="w-6 h-6 text-emerald-600" />
      </div>
      <div className="absolute top-1/2 right-16 w-14 h-14 bg-white rounded-full border-2 border-white shadow-lg flex items-center justify-center">
        <Leaf className="w-5 h-5 text-green-500" />
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
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="black">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-xs opacity-80">Download on the</div>
                      <div className="font-semibold">App Store</div>
                    </div>
                  </Button>
                  <Button size="lg" className="bg-black text-white hover:bg-black/90 flex items-center gap-3 px-6 rounded-xl">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22,9.3c-0.6,0-1.1,0.5-1.1,1.1s0.5,1.1,1.1,1.1s1.1-0.5,1.1-1.1S22.6,9.3,22,9.3z M13.4,2.1L3.1,8.1c-0.4,0.2-0.4,0.8,0,1l10.3,6c0.4,0.2,0.9,0.2,1.3,0l10.3-6c0.4-0.2,0.4-0.8,0-1L14.7,2.1C14.3,1.9,13.8,1.9,13.4,2.1z M14,14.8l-1.8,1.1c-0.1,0.1-0.3,0.1-0.4,0L10,14.8L3.5,10.5l6.5,3.8l4-2.3l4,2.3L14,14.8z"/>
                    </svg>
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
            <div className="absolute -right-8 top-8 z-0">
              <div className="w-80 h-[540px] bg-gradient-to-b from-emerald-200 to-emerald-100 rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  <div className="p-4 space-y-4">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-4 border border-rose-100">
                      <div className="text-xl font-bold text-primary">Garden Rose</div>
                      <div className="text-base text-muted-foreground italic">Rosa × damascena</div>
                      <div className="text-sm text-rose-600 mt-2 font-medium">🌹 "Queen of Flowers"</div>
                    </div>
                    
                    {/* Key Features with Large Icons */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-green-50 p-4 rounded-xl border border-green-200 text-center">
                        <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-green-700">Non-toxic</div>
                        <div className="text-sm text-green-600">Safe for humans</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 text-center">
                        <Heart className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-blue-700">Pet Safe</div>
                        <div className="text-sm text-blue-600">Cats & dogs</div>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 text-center">
                        <Sun className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-yellow-700">Full Sun</div>
                        <div className="text-sm text-yellow-600">6+ hours daily</div>
                      </div>
                      <div className="bg-cyan-50 p-4 rounded-xl border border-cyan-200 text-center">
                        <Droplets className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                        <div className="text-lg font-bold text-cyan-700">Moderate</div>
                        <div className="text-sm text-cyan-600">Water needs</div>
                      </div>
                    </div>
                    
                    {/* Quick Facts */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 bg-purple-50 p-3 rounded-lg">
                        <Users className="w-6 h-6 text-purple-600" />
                        <div>
                          <div className="font-semibold text-purple-700">Attracts Pollinators</div>
                          <div className="text-sm text-purple-600">Bees, butterflies & beneficial insects</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 bg-emerald-50 p-3 rounded-lg">
                        <Recycle className="w-6 h-6 text-emerald-600" />
                        <div>
                          <div className="font-semibold text-emerald-700">Eco-Friendly</div>
                          <div className="text-sm text-emerald-600">Low maintenance, pest resistant</div>
                        </div>
                      </div>
                    </div>
                    
                    <Button size="sm" className="w-full bg-gradient-to-r from-primary to-success text-white py-3 rounded-full hover-scale text-base font-semibold">
                      🌿 Add to My Garden Collection
                    </Button>
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