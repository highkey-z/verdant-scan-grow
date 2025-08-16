import { Button } from "@/components/ui/button";
import { Search, Globe } from "lucide-react";
import aiPlantIcon from "@/assets/ai-plant-icon.png";

const Navigation = () => {
  return (
    <nav className="w-full bg-white/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container-width py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={aiPlantIcon} alt="UseVerdant AI Plant Icon" className="w-8 h-8" />
            <span className="text-xl font-bold text-primary">UseVerdant</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              Application
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              Download
            </a>
            <a href="#" className="text-foreground/70 hover:text-primary transition-colors">
              FAQ
            </a>
            <div className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors cursor-pointer">
              <Globe className="w-4 h-4" />
              <span>English</span>
            </div>
          </div>

          {/* Search Icon */}
          <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-primary">
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;