import { Twitter, Instagram, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-background/20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full border border-background/20"></div>
      </div>
      
      <div className="container-width py-16 relative">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          {/* Brand Section */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-black mb-4">UseVerdant</h3>
              <p className="text-lg text-background/80 max-w-md">
                Making plant identification accessible to everyone, everywhere.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="text-sm text-background/60">Get the app</div>
              <div className="flex gap-4">
                <button className="bg-background text-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-background/90 transition-colors">
                  App Store
                </button>
                <button className="bg-background text-foreground px-6 py-3 rounded-full text-sm font-medium hover:bg-background/90 transition-colors">
                  Google Play
                </button>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="font-semibold text-background/90">Resources</h4>
              <div className="space-y-3 text-sm text-background/70">
                <div className="hover:text-background cursor-pointer transition-colors">Help Center</div>
                <div className="hover:text-background cursor-pointer transition-colors">Plant Guide</div>
                <div className="hover:text-background cursor-pointer transition-colors">API Docs</div>
                <div className="hover:text-background cursor-pointer transition-colors">Community</div>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="font-semibold text-background/90">Company</h4>
              <div className="space-y-3 text-sm text-background/70">
                <div className="hover:text-background cursor-pointer transition-colors">About Us</div>
                <div className="hover:text-background cursor-pointer transition-colors">Contact</div>
                <div className="hover:text-background cursor-pointer transition-colors">Privacy</div>
                <div className="hover:text-background cursor-pointer transition-colors">Terms</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-8 border-t border-background/20">
          <div className="text-sm text-background/60 mb-4 lg:mb-0">
            © 2024 UseVerdant. Built with ❤️ for plant lovers.
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-background/60 hover:text-background transition-colors cursor-pointer" />
              <Instagram className="w-5 h-5 text-background/60 hover:text-background transition-colors cursor-pointer" />
              <Mail className="w-5 h-5 text-background/60 hover:text-background transition-colors cursor-pointer" />
            </div>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
            >
              <ArrowUp className="w-4 h-4 text-background" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;