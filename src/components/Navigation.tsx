import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Search, Globe, ChevronDown } from "lucide-react";
import { useLanguage, languages } from "@/contexts/LanguageContext";
import { useLocation } from "react-router-dom";

const Navigation = () => {
  const { currentLanguage, setLanguage, t } = useLanguage();
  const location = useLocation();
  
  const handleNavigation = (href: string) => {
    if (href === '/') {
      // Scroll to hero section
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    } else if (href.startsWith('#')) {
      // Remove the # and find the element
      const elementId = href.substring(1);
      document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // External link
      window.location.href = href;
    }
  };

  return (
    <nav className="w-full bg-white/98 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
      <div className="container-width py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/lovable-uploads/8652cabd-a4d5-4343-ad90-300bbc7fbd50.png" alt="UseVerdant Plant Logo" className="w-10 h-10" />
            <a href="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
              UseVerdant
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => handleNavigation('/')}
              className="nav-button"
            >
              <span>{t('Home')}</span>
            </button>
            <button 
              onClick={() => handleNavigation('#how-it-works')}
              className="nav-button"
            >
              <span>How It Works</span>
            </button>
            <button 
              onClick={() => handleNavigation('#powerful-features')}
              className="nav-button"
            >
              <span>{t('Features')}</span>
            </button>
            <button 
              onClick={() => handleNavigation('#ready-to-start')}
              className="nav-button"
            >
              <span>{t('Download')}</span>
            </button>
            <a href="/faq" className="nav-button">
              <span>{t('FAQ')}</span>
            </a>
            
            {/* Language Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
                  <Globe className="w-4 h-4" />
                  <span>{currentLanguage.flag} {currentLanguage.name}</span>
                  <ChevronDown className="w-3 h-3" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white/95 backdrop-blur-sm border border-white/20">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => setLanguage(language)}
                    className="flex items-center gap-3 cursor-pointer hover:bg-primary/10"
                  >
                    <span className="text-lg">{language.flag}</span>
                    <span>{language.name}</span>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Search Icon */}
          <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-primary button-hover">
            <Search className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;