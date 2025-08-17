import { Button } from "@/components/ui/button";
import { Download, Play, Star, Camera, Leaf, Flower, TreePine, Sprout, Cherry, Shield, Heart, Droplets, Sun, Users, Recycle, Image } from "lucide-react";
import qrCode from "@/assets/qr-code.png";
import roseCameraView from "@/assets/rose-camera-view.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-nature-mint/20 via-background to-success/10 min-h-[90vh]">
      {/* Plant Bubbles - Using user's uploaded images, positioned in blank areas only */}
      <div className="absolute top-16 left-4 w-16 h-16 rounded-full border-3 border-white shadow-lg overflow-hidden">
        <img src="/lovable-uploads/8a403ba0-c447-4350-8503-0cc87b8e3527.png" alt="Venus flytrap plant" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-[25%] right-8 w-20 h-20 rounded-full border-3 border-white shadow-lg overflow-hidden">
        <img src="/lovable-uploads/7101ed73-d130-4cbc-9a77-49f6b2255c63.png" alt="Pink tropical flowers" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-20 left-6 w-18 h-18 rounded-full border-3 border-white shadow-lg overflow-hidden">
        <img src="/lovable-uploads/abb5555f-2248-4c8e-acbe-d68281c1b159.png" alt="Purple water lilies" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-[75%] right-12 w-14 h-14 rounded-full border-3 border-white shadow-lg overflow-hidden">
        <img src="/lovable-uploads/b8d0116b-bd26-4705-b97e-0214dd5d0914.png" alt="Colorful caladium leaf" className="w-full h-full object-cover" />
      </div>
      <div className="absolute bottom-40 right-4 w-16 h-16 rounded-full border-3 border-white shadow-lg overflow-hidden">
        <img src="/lovable-uploads/633c4de1-8c64-453f-ba9a-a71f4651e293.png" alt="Plumeria flowers" className="w-full h-full object-cover" />
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
                  <Button size="lg" className="bg-black text-white hover:bg-black/90 flex items-center gap-3 px-6 rounded-xl w-64">
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
                  <Button size="lg" className="bg-black text-white hover:bg-black/90 flex items-center gap-3 px-6 rounded-xl w-64">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92z" fill="#EA4335"/>
                      <path d="M13.792 12L3.609 1.814a1.006 1.006 0 01.703-.269 1.006 1.006 0 01.703.269L16.5 7.5 13.792 12z" fill="#FBBC04"/>
                      <path d="M13.792 12L16.5 16.5 5.015 22.186a1.006 1.006 0 01-.703.269 1.006 1.006 0 01-.703-.269L13.792 12z" fill="#34A853"/>
                      <path d="M13.792 12L16.5 7.5l4.146-2.341a1 1 0 01.354.734v9.107a1 1 0 01-.354.734L16.5 16.5 13.792 12z" fill="#4285F4"/>
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
                      {/* Top UI - removed Unlimited IDs */}
                      <div className="flex items-center justify-between text-white">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <div className="text-sm font-medium bg-black/50 px-3 py-1 rounded-full">Camera View</div>
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
                          <div className="w-8 h-8 bg-white/20 rounded-full mb-1 mx-auto flex items-center justify-center">
                            <Image className="w-4 h-4 text-white" />
                          </div>
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