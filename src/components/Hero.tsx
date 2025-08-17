import { Button } from "@/components/ui/button";
import { Download, Play, Star, Camera, Leaf, Flower, TreePine, Sprout, Cherry, Shield, Heart, Droplets, Sun, Users, Recycle, Image } from "lucide-react";
import qrCode from "@/assets/qr-code.png";
import roseCameraView from "@/assets/rose-camera-view.jpg";
import plant1 from "@/assets/plant-1-sunflower.jpg";
import plant2 from "@/assets/plant-2-lavender.jpg";
import plant3 from "@/assets/plant-3-fern.jpg";
import plant4 from "@/assets/plant-4-orchid.jpg";
import plant5 from "@/assets/plant-5-succulent.jpg";
import plant6 from "@/assets/plant-6-cherry-blossom.jpg";
import plant7 from "@/assets/plant-7-monstera.jpg";
import plant8 from "@/assets/plant-8-tulip.jpg";
import plant9 from "@/assets/plant-9-cactus.jpg";
import plant10 from "@/assets/plant-10-hydrangea.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { useEffect, useState } from "react";

const Hero = () => {
  const { t } = useLanguage();
  const [currentPlantIndex, setCurrentPlantIndex] = useState(0);
  
  const plants = [
    { image: plant1, name: "Sunflower" },
    { image: plant2, name: "Lavender" },
    { image: plant3, name: "Fern" },
    { image: plant4, name: "Orchid" },
    { image: plant5, name: "Succulent" },
    { image: plant6, name: "Cherry Blossom" },
    { image: plant7, name: "Monstera" },
    { image: plant8, name: "Tulip" },
    { image: plant9, name: "Cactus" },
    { image: plant10, name: "Hydrangea" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPlantIndex((prev) => (prev + 1) % plants.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [plants.length]);
  
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 min-h-[90vh]">
      {/* Elegant Organic Background Design */}
      <div className="absolute inset-0">
        {/* Large leaf silhouette - top left */}
        <div className="absolute -top-20 -left-32 w-80 h-96 opacity-20">
          <svg viewBox="0 0 200 240" className="w-full h-full text-emerald-300">
            <path d="M100 20 Q40 60 50 120 Q60 180 100 220 Q140 180 150 120 Q160 60 100 20" fill="currentColor" />
          </svg>
        </div>
        
        {/* Rounded blob - top right */}
        <div className="absolute -top-16 -right-24 w-64 h-72 bg-gradient-to-br from-teal-200/30 to-emerald-200/20 rounded-[50%_60%_70%_40%] transform rotate-12"></div>
        
        {/* Watercolor splotch - bottom left */}
        <div className="absolute -bottom-32 -left-20 w-96 h-80 bg-gradient-to-tr from-rose-200/25 to-pink-200/15 rounded-[60%_40%_30%_70%] transform -rotate-12"></div>
        
        {/* Organic shape - center right */}
        <div className="absolute top-1/3 -right-16 w-48 h-64 bg-gradient-to-bl from-emerald-300/20 to-teal-300/10 rounded-[40%_60%_60%_40%] transform rotate-45"></div>
        
        {/* Leaf pattern - bottom center */}
        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 w-32 h-40 opacity-15">
          <svg viewBox="0 0 100 120" className="w-full h-full text-nature-600">
            <path d="M50 10 Q20 30 25 60 Q30 90 50 110 Q70 90 75 60 Q80 30 50 10" fill="currentColor" />
          </svg>
        </div>
        
        {/* Floating organic elements */}
        <div className="absolute top-20 left-1/4 w-16 h-24 bg-gradient-to-b from-emerald-400/20 to-transparent rounded-[50%] transform rotate-45"></div>
        <div className="absolute bottom-32 right-1/4 w-20 h-28 bg-gradient-to-t from-teal-400/15 to-transparent rounded-[60%_40%] transform -rotate-30"></div>
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
                {t('AI Botanist In Your Pocket').split(' ').slice(0, 3).join(' ')}<br />
                {t('AI Botanist In Your Pocket').split(' ').slice(3).join(' ')}
              </h2>
            </div>

            {/* Enhanced Description */}
            <div className="space-y-4 animate-fade-in">
              <p className="text-lg text-muted-foreground max-w-md">
                {t('Instantly identify any plant with AI-powered camera recognition. Get detailed care guides, toxicity warnings, and build your personal garden collection.')}
              </p>
            </div>

            {/* Download Buttons */}
            <div className="space-y-3 animate-fade-in">
              <Button size="lg" className="bg-black text-white hover:bg-black/90 flex items-center gap-3 px-6 rounded-xl w-64">
                <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="black">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs opacity-80">{t('Download on the')}</div>
                  <div className="font-semibold">{t('App Store')}</div>
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
                  <div className="text-xs opacity-80">{t('GET IT ON')}</div>
                  <div className="font-semibold">{t('Google Play')}</div>
                </div>
              </Button>
            </div>

          </div>

          <div className="relative flex justify-center items-center animate-fade-in">
            {/* Enhanced visual effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
            {/* Main Phone - Camera View */}
            <div className="relative z-10">
              <div className="w-80 h-[600px] bg-gradient-to-b from-emerald-200 to-emerald-100 rounded-[3rem] p-2 shadow-2xl hover-scale">
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                  {/* Scrolling Plant Gallery */}
                  <div className="absolute inset-0">
                    {/* Background for smooth transitions */}
                    <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-teal-50"></div>
                    
                    {/* Current plant image with smooth transition */}
                    <div className="absolute inset-4 rounded-xl overflow-hidden">
                      <img 
                        src={plants[currentPlantIndex].image} 
                        alt={plants[currentPlantIndex].name}
                        className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                        key={currentPlantIndex}
                      />
                      
                      {/* Overlay gradient for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                      
                      {/* Plant name overlay */}
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                          <h3 className="text-lg font-semibold text-gray-800 text-center">
                            {plants[currentPlantIndex].name}
                          </h3>
                          <div className="flex justify-center mt-2">
                            {plants.map((_, index) => (
                              <div
                                key={index}
                                className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                                  index === currentPlantIndex 
                                    ? 'bg-emerald-500 w-6' 
                                    : 'bg-gray-300'
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Top UI indicator */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                      <div className="bg-emerald-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Plant Gallery
                      </div>
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
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