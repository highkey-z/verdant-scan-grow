import { Leaf, Mail, MapPin, Phone, Twitter, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useLanguage();
  
  const footerLinks = {
    company: [
      { label: "About", href: "/about" }
    ],
    support: [
      { label: "Help Center", href: "/help-center" },
      { label: "Contact Us", href: "/contact" },
      { label: "Bug Report", href: "/bug-report" },
      { label: "Feature Request", href: "/feature-request" }
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "GDPR", href: "/gdpr" }
    ],
    social: [
      { 
        label: "Twitter", 
        href: "https://twitter.com/useverdantai",
        icon: Twitter
      },
      { 
        label: "Instagram", 
        href: "https://instagram.com/useverdantai",
        icon: Instagram
      }
    ]
  };

  return (
    <footer className="bg-gradient-to-t from-nature-mint/10 to-background border-t border-border/50">
      <div className="container-width py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/8652cabd-a4d5-4343-ad90-300bbc7fbd50.png" 
                alt="UseVerdant Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-xl font-bold text-gradient">UseVerdant</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Identify any plant instantly with AI-powered scanning. Perfect for nature lovers, gardeners, and students.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:useverdantai@gmail.com" className="hover:text-primary transition-colors">
                  useverdantai@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>516-737-5795</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Farmingdale, NY</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('Company')}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors button-hover inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('Support')}</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors button-hover inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('Legal')}</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors button-hover inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">{t('Follow Us')}</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <li key={index}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors button-hover"
                    >
                      <IconComponent className="w-4 h-4" />
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <div>
            © 2025 UseVerdant. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;