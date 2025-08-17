import { Button } from "@/components/ui/button";
import { Download, Play, Star, Camera, Leaf, Flower, TreePine, Sprout, Cherry, Shield, Heart, Droplets, Sun, Users, Recycle, Image } from "lucide-react";
import qrCode from "@/assets/qr-code.png";
import roseCameraView from "@/assets/rose-camera-view.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-background to-teal-50 min-h-[90vh]">
      {/* Floating background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-teal-500/5"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-teal-200/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-gradient-to-br from-rose-200/20 to-pink-200/20 rounded-full blur-xl"></div>
      {/* Plant Bubbles - Positioned in safe areas with white borders */}
      
      {/* Above UseVerdant title */}
      <div className="absolute top-8 left-1/4 w-16 h-16 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white hover-scale">
        <img src="/lovable-uploads/8a403ba0-c447-4350-8503-0cc87b8e3527.png" alt="Venus flytrap plant" className="w-full h-full object-cover rounded-full" />
      </div>
      
      {/* Between title and phones */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white hover-scale">
        <img src="/lovable-uploads/7101ed73-d130-4cbc-9a77-49f6b2255c63.png" alt="Pink tropical flowers" className="w-full h-full object-cover rounded-full" />
      </div>
      
      {/* Under downloads section */}
      <div className="absolute top-[70%] left-[35%] w-14 h-14 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white hover-scale">
        <img src="/lovable-uploads/abb5555f-2248-4c8e-acbe-d68281c1b159.png" alt="Purple water lilies" className="w-full h-full object-cover rounded-full" />
      </div>
      
      {/* Next to phone gallery area - far right */}
      <div className="absolute top-[45%] right-2 w-12 h-12 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white hover-scale">
        <img src="/lovable-uploads/b8d0116b-bd26-4705-b97e-0214dd5d0914.png" alt="Colorful caladium leaf" className="w-full h-full object-cover rounded-full" />
      </div>
      
      {/* Bottom corner decorative */}
      <div className="absolute bottom-4 left-4 w-14 h-14 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white hover-scale">
        <img src="/lovable-uploads/633c4de1-8c64-453f-ba9a-a71f4651e293.png" alt="Plumeria flowers" className="w-full h-full object-cover rounded-full" />
      </div>

      <div className="container-width py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">UseVerdant</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground/90">
                AI Botanist In<br />Your Pocket
              </h2>
            </div>

            {/* Enhanced Description */}
            <div className="space-y-4 animate-fade-in">
              <p className="text-lg text-muted-foreground max-w-md">
                Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.
              </p>
            </div>

          </div>

          <div className="relative flex justify-center items-center animate-fade-in">
            {/* Enhanced visual effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
            {/* Main Phone - Camera View */}
            <div className="relative z-10">
              <div className="w-80 h-[600px] bg-gradient-to-b from-emerald-200 to-emerald-100 rounded-[3rem] p-2 shadow-2xl hover-scale">
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
              <div className="w-80 h-[540px] bg-gradient-to-b from-rose-200 to-pink-100 rounded-[2.5rem] p-2 shadow-2xl hover-scale">
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
                    
                    <Button size="sm" className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-3 rounded-full hover-scale text-base font-semibold shadow-lg">
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